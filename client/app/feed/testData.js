var testData = [
  { source: 'Hacker News',
    title: 'Python C API, PyPy and the road into the future',
    linkURL: 'http://lostinjit.blogspot.com/2015/11/python-c-api-pypy-and-road-into-future.html',
    date: '2015-11-16T22:10:54.000Z',
    summary: 'Siamese thai tabby leopard. Ragdoll. American bobtail jaguar. Ragdoll donskoy for sphynx so lynx. Abyssinian balinese . Kitty turkish angora yet lynx siamese singapura birman. Birman bengal or ocelot. Jaguar siamese cougar. Puma manx or leopard. Himalayan puma bombay grimalkin grimalkin yet mouser for lynx. Malkin ocelot persian cougar.',
    categories: ['Tech'],
    score: 0.5,
    imgURL: '//img2.blogblog.com/img/icon18_edit_allbkg.gif' },
  { source: 'Hacker News',
    title: 'Pandora Buys \'Key\' Rdio Assets for $75M in Cash, Rdio Files Ch.11 to Shut Down',
    linkURL: 'http://techcrunch.com/2015/11/16/confirmed-pandora-buys-key-rdio-assets-for-75m-in-cash-rdio-files-ch-11-to-shut-down/',
    date: '2015-11-16T21:29:51.000Z',
    summary: 'Tomcat leopard russian blue or havana brown russian blue. Birman havana brown so norwegian forest so mouser. Bobcat tom lion or ocicat savannah for tiger, but balinese . Lynx ocicat or russian blue donskoy cornish rex. Puma lion yet jaguar or birman. Tabby kitty yet siamese. Donskoy devonshire rex for siberian yet havana brown and devonshire rex russian blue. Panther persian. Bobcat lion. Russian blue panther norwegian forest turkish angora yet norwegian forest cornish rex. Himalayan malkin so munchkin for devonshire rex russian blue tomcat. Abyssinian leopard savannah persian. Sphynx ocelot mouser. Malkin jaguar scottish fold tom. American bobtail leopard but persian persian singapura yet panther. Himalayan munchkin lion, so cougar bobcat russian blue. Egyptian mau grimalkin ragdoll. Lion. Tabby havana brown for birman or himalayan devonshire rex burmese and balinese . Bombay egyptian mau. Panther bombay. Savannah havana brown but havana brown and cornish rex but american bobtail jaguar singapura. Egyptian mau mouser, jaguar, and balinese for scottish fold. Singapura siberian.' ,
    categories: ['Audio'],
    score: 0.55,
    imgURL: 'https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/logo.svg' },
  { source: 'Hacker News',
    title: 'Zenefits launches free payroll software for small businesses',
    linkURL: 'https://www.zenefits.com/payroll/?hn',
    date: '2015-11-16T18:25:23.000Z',
    summary: 'Siamese thai tabby leopard. Ragdoll. American bobtail jaguar. Ragdoll donskoy for sphynx so lynx. Abyssinian balinese . Kitty turkish angora yet lynx siamese singapura birman. Birman bengal or ocelot. Jaguar siamese cougar. Puma manx or leopard. Himalayan puma bombay grimalkin grimalkin yet mouser for lynx. Malkin ocelot persian cougar.',
    categories: ['General'],
    score: 0.6,
    imgURL: 'https://d1y9tafah9vzej.cloudfront.net/60cef040895c09d6bf966956329d6327e05a1e12/static/marketing/images/pages/products/payroll/img-videoThumb.png' },
  { source: 'Hacker News',
    title: 'Jessica Livingston',
    linkURL: 'http://paulgraham.com/jessica.html',
    date: '2015-11-16T18:07:55.000Z',
    summary: 'Tomcat leopard russian blue or havana brown russian blue. Birman havana brown so norwegian forest so mouser. Bobcat tom lion or ocicat savannah for tiger, but balinese . Lynx ocicat or russian blue donskoy cornish rex. Puma lion yet jaguar or birman. Tabby kitty yet siamese. Donskoy devonshire rex for siberian yet havana brown and devonshire rex russian blue. Panther persian. Bobcat lion. Russian blue panther norwegian forest turkish angora yet norwegian forest cornish rex. Himalayan malkin so munchkin for devonshire rex russian blue tomcat. Abyssinian leopard savannah persian. Sphynx ocelot mouser. Malkin jaguar scottish fold tom. American bobtail leopard but persian persian singapura yet panther. Himalayan munchkin lion, so cougar bobcat russian blue. Egyptian mau grimalkin ragdoll. Lion. Tabby havana brown for birman or himalayan devonshire rex burmese and balinese . Bombay egyptian mau. Panther bombay. Savannah havana brown but havana brown and cornish rex but american bobtail jaguar singapura. Egyptian mau mouser, jaguar, and balinese for scottish fold. Singapura siberian. ',
    categories: ['General'],
    score: 0.65,
    imgURL: 'http://ep.yimg.com/ay/paulgraham/essays-1.gif' },
  { source: 'Hacker News',
    title: 'California’s DNA Law Violates Privacy Protections Guaranteed by State',
    linkURL: 'https://www.eff.org/press/releases/eff-court-californias-dna-collection-law-violates-privacy-protections-guaranteed',
    date: '2015-11-16T20:24:41.000Z',
    summary: 'California’s DNA Law Violates Privacy Protections Guaranteed by State',
    categories: ['Governemnt'],
    score: 0.7,
    imgURL: 'https://www.eff.org/sites/all/themes/frontier/images/logo_full.png' },
  { source: 'Hacker News',
    title: 'Client-Side Encryption: The Right Security Model for the Cloud',
    linkURL: 'https://blog.balboa.io/yet-another.html',
    date: '2015-11-16T20:40:48.000Z',
    summary: 'Client-Side Encryption: The Right Security Model for the Cloud',
    categories: ['Tech'],
    score: 0.75,
    imgURL: 'img/logo_white.svg' },
  { source: 'Hacker News',
    title: 'SVG Mask Artwork of the Intel 4004',
    linkURL: 'http://www.4004.com/2015-news.html',
    date: '2015-11-16T16:22:24.000Z',
    summary: 'SVG Mask Artwork of the Intel 4004',
    categories: [],
    score: 0.80,
    imgURL: 'assets/4004-mask-composite-hd-r2-50pct.gif' },
  { source: 'Hacker News',
    title: 'Sct – set color temperature',
    linkURL: 'http://www.tedunangst.com/flak/post/sct-set-color-temperature',
    date: '2015-11-16T18:04:08.000Z',
    summary: 'Sct – set color temperature',
    categories: [],
    score: 0.85,
    imgURL: 'http://zetasky.com/wp-content/uploads/2015/01/Blue-radial-gradient-background.png' },
  { source: 'Hacker News',
    title: '18F\'s Micro-Purchase Experiment: Why I Bid $1',
    linkURL: 'http://www.brendansudol.com/writing/18f-micropurchase/',
    date: '2015-11-15T16:38:46.000Z',
    summary: '18F\'s Micro-Purchase Experiment: Why I Bid $1',
    categories: [],
    score: 0.90,
    imgURL: 'http://zetasky.com/wp-content/uploads/2015/01/Blue-radial-gradient-background.png' },
  { source: 'Hacker News',
    title: '2,000% price hike for infant seizure drug called \'absurd\'',
    linkURL: 'http://www.cbc.ca/news/health/infantile-seizures-drug-1.3318183',
    date: '2015-11-16T20:13:55.000Z',
    summary: '2,000% price hike for infant seizure drug called \'absurd\'',
    categories: [],
    score: 0.95,
    imgURL: 'http://pubads.g.doubleclick.net/gampad/ad?iu=5876/misc&sz=728x90&c=123456789' },
  { source: 'Hacker News',
    title: 'Debt Market Distortions Go Global as Nothing Makes Sense Anymore',
    linkURL: 'http://www.bloomberg.com/news/articles/2015-11-15/debt-market-distortions-go-global-as-nothing-makes-sense-anymore',
    date: '2015-11-16T12:43:14.000Z',
    summary: 'Debt Market Distortions Go Global as Nothing Makes Sense Anymore',
    categories: [],
    score: 1.0,
    imgURL: 'http://assets.bwbx.io/images/iT_4JpXIqxaw/v2/488x-1.jpg' },
  { source: 'Hacker News',
    title: 'Study finds improved self-regulation in kindergartners who wait a year to enroll',
    linkURL: 'https://ed.stanford.edu/news/stanford-gse-research-finds-strong-evidence-mental-health-benefits-delaying-kindergarten',
    date: '2015-11-15T21:08:48.000Z',
    summary: 'Study finds improved self-regulation in kindergartners who wait a year to enroll',
    categories: [],
    imgURL: '/sites/all/themes/stanford_gse/images/gse-wordmark-web.png' },
  { source: 'Hacker News',
    title: 'A new look for repositories',
    linkURL: 'https://github.com/blog/2085-a-new-look-for-repositories',
    date: '2015-11-16T19:28:49.000Z',
    summary: 'A new look for repositories',
    categories: [],
    imgURL: 'https://avatars2.githubusercontent.com/u/98681?v=3&s=36' },
  { source: 'Hacker News',
    title: 'Facebook allows Google to crawl and index its mobile app',
    linkURL: 'http://blogs.wsj.com/digits/2015/11/16/google-gets-surprise-ally-in-mobile-app-search-push-facebook/',
    date: '2015-11-16T15:26:41.000Z',
    summary: 'Facebook allows Google to crawl and index its mobile app',
    categories: [],
    imgURL: 'http://s.wsj.net/blogs/img/digits_logo.png' },
  { source: 'Hacker News',
    title: 'The ATS Programming Language – Unleashing the Potentials of Types and Templates',
    linkURL: 'http://www.ats-lang.org',
    date: '2015-11-15T18:18:56.000Z',
    summary: 'The ATS Programming Language – Unleashing the Potentials of Types and Templates',
    categories: [],
    imgURL: './MYDATA/theLogo.png' },
  { source: 'Hacker News',
    title: 'When I stopped hearing the voices in my head',
    linkURL: 'http://www.theguardian.com/commentisfree/2015/nov/13/hearing-voices-head-drugs-therapy',
    date: '2015-11-15T09:51:55.000Z',
    summary: 'When I stopped hearing the voices in my head',
    categories: [],
    imgURL: 'https://i.guim.co.uk/img/media/ec307e5cfb08fbc4ffed9ca31fddbd9fa9e98047/0_125_5100_3060/master/5100.jpg?w=300&q=85&auto=format&sharp=10&s=61b73abcefde10efa4c104dc0d0b24e5' }
  ];  

var testUser = { 
    categories: ['Tech','Government','General','Audio'],
    history: [],
    following: [],
    followers: [],
    __v: 0,
    fbId: 5555,
    fbToken: null,
    username: 'Mark Marmont',
    _id: '564d4440fa317f934fd20a33' 
}

var testAllCategories = ['Tech', 'Government', 'General', 'Audio', 'Sports', 'Fencing'];
