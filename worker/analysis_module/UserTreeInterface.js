var request = require('request');
var _ = require('underscore');
var token = require('../../server/config.js').monkeyLearnToken;
var Promise = require('bluebird');

var trees = {
  'Art & Culture': {id: 'cl_aPS8U36R'},
  business: {id: 'cl_3woeSYDA'},
  living: {id: 'cl_vgWv3zVm'},
  'Science & Technology': {id: 'cl_7smzuZDg', rootId: 561573}
};

var numTrees = _.reduce(trees, function (acc, id) {
  return acc + 1;
}, 0);

var execOnAllTrees = function (fn) {
  var funcArr = _.map(trees, function (acc, id, treeName) {
    return fn.bind(null, treeName);
  }, {});
  return function () {
    var callback = arguments[arguments.length - 1];
    var args = Array.prototype.call(arguments, 0, arguments.length - 1);
    var treeNameToRes = {};
    var counter = 0;
    _.each(funcArr, function (fn, treeName) {
      fn.apply(null, args.concat([
        function (result) {
        treeNameToRes[treeName] = result
        counter ++;
        if(counter >= numTrees) {
          callback(treeNameToRes);
        }
        }]
      ));
    });
  }
}

module.exports = {
  classify: function (treeName, articleArr, callback) {
    request.post({
      url: 'https://api.monkeylearn.com/v2/classifiers/' + trees[treeName].id + '/classify/?sandbox=1',
      headers: {
        'Authorization': 'token ' + token
      },
      json : JSON.stringify({
        text_list: articleArr
      })
    }, function (err, res) {
      var categoryScores = JSON.parse(res.body).result
      if(err) {
        console.log('error in userTree.classify:', err)
      } else {
        callback(categoryScores);
      }
    });
  },
  addSamples: function (treeName, dbTrainingArr, callback) {
    request.post({
      url: 'https://api.monkeylearn.com/v2/classifiers/' + trees[treeName].id + '/samples/',
      headers: {
        'Authorization': 'token ' + token
      },
      json: {
        samples: dbTrainingArr
      }
    }, function (err) {
      if(err) {
        console.log('error in userTree.addSamples:', err)
      } else {
        callback();
      }
    });
  },
  startTraining: function (treeName, callback) {
    request.post({
      url: 'https://api.monkeylearn.com/v2/classifiers/' + trees[treeName].id + '/train/',
      headers: {
        'Authorization': 'token ' + token
      },
    }, function (err) {
      if(err) {
        console.log('error in userTree.startTraining:', err)
      } else {
        callback();
      }
    });
  },
  getUserCategoryIdsForTree: function (treeName, callback) {
    request.get({
      url: 'https://api.monkeylearn.com/v2/classifiers/' + trees[treeName].id + '/',
      headers: {
        'Authorization': 'token ' + token
      },
    }, function (err, res) {
      if(err) {
        console.log('error in userTree.getUserCategoryIdsForTree:', err)
      } else {
        var userNameToId = _.reduce(JSON.parse(res.body).result.sandbox_categories, function (acc, catObj) {
          acc[catObj.name] = catObj.id;
          return acc;
        }, {}); //includes the root id
        trees[treeName].rootId = userNameToId['Root'];
        callback(userNameToId);
      }
    });
  },
  addUserToTree: function (treeName, username, callback) {
    //must have called getUserCategoryIdsForTree to have the root id setfor this treeName
    request.post({
      url: 'https://api.monkeylearn.com/v2/classifiers/' + trees[treeName].id + '/categories/',
      headers: {
        'Authorization': 'token ' + token
      },
      json: {
        "name": username, 
        "parent_id": trees[treeName].rootId
      }
    }, function (err, res) {
      console.log(res.statusCode)
      if(err || res.statusCode >= 400) {
        console.log('error in userTree.addUserToTree:', err)
      } else {
        callback();
      }
    });
  }
};
module.exports['addUserToAllTrees'] = execOnAllTrees(module.exports.addUserToTree);
module.exports['getUserCategoryIdsForAllTrees'] = execOnAllTrees(module.exports.getUserCategoryIdsForTree);
module.exports['startTrainingAll'] = execOnAllTrees(module.exports.startTraining);
module.exports['addAllSamples'] = execOnAllTrees(module.exports.addSamples);

var sample = {
  text: "A study in the Netherlands backs up a long-held claim of quantum theory, one that Einstein refused to accept, that objects separated by great distance could affect each other\u2019s behavior.","abstract":"Scientists from Delft University of Technology in the Netherlands publish study in journal Nature finding objects separated by great distances can instantaneously affect each other\u2019s behavior, proving one of most fundamental claims of quantum theory",
  user: "test",
  tree: 'Science & Technology'
}

module.exports.getUserCategoryIdsForTree(sample.tree, function (res) {
  
  module.exports.addSamples(sample.tree, [{text: sample.text, category_id: res['Root']}, {text: sample.text, category_id: res[sample.user]}], function () {

    console.log('\nadded Samples!')

    module.exports.startTraining(sample.tree, function () {

      console.log('\n Training Started!')

    })

  })
})



