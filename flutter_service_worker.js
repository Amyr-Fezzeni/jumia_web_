'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bf1ac363017ac6370154eac9a26eeb5d",
"assets/assets/images/1-(3).jpg": "41b1284c1de8cb01215f3385d167f4d5",
"assets/assets/images/1.jpg": "53b0325d629aefca2779a4749eff1925",
"assets/assets/images/2.jpg": "11176840845d0e58f454392fa3f22337",
"assets/assets/images/3.jpg": "f5fdbd7e3e860f29b735a0f1e2cd8709",
"assets/assets/images/4.jpg": "a59906934283618e8c9e5e425bf6bbc2",
"assets/assets/images/5.jpg": "5fe874dec31d4785570661860424f77f",
"assets/assets/images/6.jpg": "9dcda06c19db07bd0436b7ac0739d768",
"assets/assets/images/7.jpg": "4f4032386ead57177a61bb2145681401",
"assets/assets/images/ICONE_FOOD-.png": "add67b95ede79305b50b2c08fda9c65b",
"assets/assets/images/JumiaPay.png": "5e752790099f30198b22a86840e27b1d",
"assets/assets/images/newalice-SM-Icons-VENDRE1.jpg": "ca7cb17e5d1e3ade2727a550e9999070",
"assets/assets/images/Official-Store_ICON_JBF21.png": "a28d9210fd5a4a372d4fc237cccd9e11",
"assets/assets/images/Quicklink.jpg": "6317ff4c8e7559c1dec42370f4289a1e",
"assets/assets/images/SmallBanner.gif": "96e0f74e7d8e8bea6765b79a3e283e8d",
"assets/assets/images/Stripbanner.gif": "9963f7753c4d7fb0d9a11585381dff4f",
"assets/assets/images/TOTAL_logo-44.jpg": "b3ac8a7de72e37d2612c98a2d702f869",
"assets/assets/logo/apple.png": "c37c21605932908a615eaa1a72d774aa",
"assets/assets/logo/google_play.png": "3694a69fe74095f02f138deae9bda824",
"assets/assets/logo/jumia.png": "8059f00d12408e346db6f0d1c9a4c5f7",
"assets/assets/logo/jumia_logo.png": "76be30c62e1fe1e7961b2d0cb76dc3f2",
"assets/assets/logo/logo_mini.png": "cb548758cb18f383a1d58fe77605a006",
"assets/assets/product/1.jpg": "0ab789b682fc2dc89a96eb822cb4b00b",
"assets/assets/product/10.jpg": "cb1f02d52c5643ebe6cafb9488c7f047",
"assets/assets/product/100.jpg": "c54ed6ee5572f466ab08f485a81ac127",
"assets/assets/product/101.jpg": "8b67f8530c316b7c9199f313b9cc923d",
"assets/assets/product/102.jpg": "395ccc991eb4e91220efaa12032186cf",
"assets/assets/product/103.jpg": "727bbc10ca2285e906d27862e34905d1",
"assets/assets/product/104.jpg": "d45434b0dc1c17349d7895b7b5710c3f",
"assets/assets/product/105.jpg": "efb484655d28187c9f1e29662491ea08",
"assets/assets/product/106.jpg": "60dd47869a7e8c2293cdc863d3f5d10a",
"assets/assets/product/107.jpg": "b895f06c0fcc970a9144aebbd6edc470",
"assets/assets/product/108.jpg": "edd9dd15565ed16399535e357309f080",
"assets/assets/product/109.jpg": "3a7948f1e4997f5d216545c4ed40bb7b",
"assets/assets/product/11.jpg": "be4bafa73d803de833669c211f6c94b1",
"assets/assets/product/110.jpg": "15dc5bd1d8d5ce887bde3ccf3d5c2656",
"assets/assets/product/111.jpg": "ea01f3043b0cb564aea4e6a5b60b0eff",
"assets/assets/product/112.jpg": "6dd1bae5149bd12d7702ad6b538531be",
"assets/assets/product/113.jpg": "194dc6df23acbcd19154cce1daf74ada",
"assets/assets/product/114.jpg": "034541365340976d054b81442ee5cff4",
"assets/assets/product/115.jpg": "b0df7ba2f8f0a705dcf85315f7e8d691",
"assets/assets/product/116.jpg": "12d06d0248a3e45e4128b65ed3a9d924",
"assets/assets/product/117.jpg": "ee8773e647952e1fd652bef1f284054e",
"assets/assets/product/118.jpg": "e60dbce4e8ee9165dd63cd949a7ce098",
"assets/assets/product/119.jpg": "bc3cb8d08647c6b5ea38204174d0e53b",
"assets/assets/product/12.jpg": "6da7a607d78fb2d2384fda96c4876128",
"assets/assets/product/120.jpg": "eb01abc9e3fecc3a662b1fbd2adca210",
"assets/assets/product/121.jpg": "c5a085be2d55fac887aa921e59e51538",
"assets/assets/product/122.jpg": "a4326944dd751848e80c702c389f9614",
"assets/assets/product/123.jpg": "9180927ea421cc66965c5adc7b0c4712",
"assets/assets/product/124.jpg": "a62bd4f82e58c6c6e92e2a80bd8a24e4",
"assets/assets/product/125.jpg": "dd701b4e190ed8f0405242b4fa684197",
"assets/assets/product/126.jpg": "d77ed05fb9903a0f754967d05732d6fd",
"assets/assets/product/127.jpg": "8cb1276998b471d6c058f5b25b7986ef",
"assets/assets/product/128.jpg": "55a5a4196fd9083d4d2fc59dc7a71c16",
"assets/assets/product/129.jpg": "4fd40365bfb28b339d1a5c4f0b58c606",
"assets/assets/product/13.jpg": "52f787ca5beb599c7623986c5e657a37",
"assets/assets/product/130.jpg": "5339b71f95ad3438513f5149f68f7a65",
"assets/assets/product/131.jpg": "588dc637175b01a0995dc8f8e1b8da36",
"assets/assets/product/132.jpg": "b53bc878eb380e158a7c32c484aea240",
"assets/assets/product/133.jpg": "124e288e64820199a04055a91c5dd1a7",
"assets/assets/product/134.jpg": "f2a316aa93ee606c19b2f5d2994c4707",
"assets/assets/product/135.jpg": "181780306db5845dcb8c7bd130114736",
"assets/assets/product/136.jpg": "af29340ff314977f9ca135a5030d6bb3",
"assets/assets/product/137.jpg": "e35112a4197f35e22df88fe49c5369c5",
"assets/assets/product/138.jpg": "c166bb71ab0b300ae9b8c30e7cded7ec",
"assets/assets/product/139.jpg": "72067e72810574a65b8e9403ff03c841",
"assets/assets/product/14.jpg": "125791745c983453c96bbf2f0f669c5c",
"assets/assets/product/140.jpg": "859dbd76d907fad807c60d37c7473718",
"assets/assets/product/141.jpg": "5fe37bb3393d25db6b890bd369d46b7c",
"assets/assets/product/142.jpg": "265bfea793cf2d73383dbc8d29181b48",
"assets/assets/product/143.jpg": "51662b6ac1bb851bec30978655897314",
"assets/assets/product/144.jpg": "6ddae64e48c9f398e5ff4578d809bcc5",
"assets/assets/product/145.jpg": "2ce998e327c04ab139ed0b38a89f7956",
"assets/assets/product/146.jpg": "7507f30aef645c76a6ae5c9a5de7c1ee",
"assets/assets/product/147.jpg": "ae718f72628003e8eaa9638127c04149",
"assets/assets/product/148.jpg": "d3b1537f652c9c176c572af005260738",
"assets/assets/product/149.jpg": "18cd2ceba3c600f59d15423164caa91c",
"assets/assets/product/15.jpg": "20c42724c09d03654a56196a4f5c2c34",
"assets/assets/product/150.jpg": "06d5d62a81186060723d8009cc18b436",
"assets/assets/product/151.jpg": "c53c8ef450e5cd86361cc45ce7a7595f",
"assets/assets/product/152.jpg": "34831ffcb6cd668820d130d419e45a25",
"assets/assets/product/153.jpg": "8d3345307ef7d22e557e1ad3b7d39370",
"assets/assets/product/154.jpg": "df778138ae9e21a2c61a2a2f7e1ede70",
"assets/assets/product/155.jpg": "095b1aada2b8e78eb4d109be636464c0",
"assets/assets/product/156.jpg": "57193e0e20f0c118ed0ff5fa89975564",
"assets/assets/product/157.jpg": "0913383425e70ceb41edbd7cacf1a02a",
"assets/assets/product/158.jpg": "b0155a3a3500fa3f7fa4988198aa7ce4",
"assets/assets/product/159.jpg": "1f2bf6e9b0ef8f5526f69fc7f2456d20",
"assets/assets/product/16.jpg": "d52af29504ea92b41f24ca39713711f1",
"assets/assets/product/160.jpg": "a3e195dfa8e7c82625bbafb29114bdf2",
"assets/assets/product/161.jpg": "70fab9c0bf5298ac168ba4227e261f45",
"assets/assets/product/162.jpg": "9d4490b812eeeba83586a6ec80e400ff",
"assets/assets/product/163.jpg": "f36b838afcce3b50e51a29543da211ce",
"assets/assets/product/164.jpg": "4ddcae350cb8bd11d8295e21081adfc5",
"assets/assets/product/165.jpg": "7f1444c7a5ef0f3d1e6f7fe398d87036",
"assets/assets/product/166.jpg": "4ec6c9377c84a248390836ab3c05eabd",
"assets/assets/product/167.jpg": "d070074503ca67f0fb7748edac26df51",
"assets/assets/product/168.jpg": "effcbbab2c8780bf480926ff4981e311",
"assets/assets/product/169.jpg": "1e98713bd86366adbde541819e224e7a",
"assets/assets/product/17.jpg": "0bd408cc1cda4380a33c5b2ddfb5e3f9",
"assets/assets/product/170.jpg": "951cd394b6ef30b0e98f543ab8082f8b",
"assets/assets/product/171.jpg": "585b6e8a94e104d4a6483c493ae4b928",
"assets/assets/product/172.jpg": "c1757f128f7b36137f370ba683fced4f",
"assets/assets/product/173.jpg": "bed8620a065714be26117d1f11525939",
"assets/assets/product/174.jpg": "b7bcb35500474b6317ac25645876736a",
"assets/assets/product/175.jpg": "0afb690e7390a3de1287ffeaa4d8b2c6",
"assets/assets/product/176.jpg": "1a2d023ccc9193bb625531ac7df468e3",
"assets/assets/product/177.jpg": "8279931d0f1fdb98f31aa9fab92441be",
"assets/assets/product/178.jpg": "2cb0e70605a4b01968539fb19d360230",
"assets/assets/product/179.jpg": "0e1ce18b6170a53e698d9f28b354468b",
"assets/assets/product/18.jpg": "fe22e9ebefac78fae20e5434a6223ca8",
"assets/assets/product/180.jpg": "ff2d03b0edfb17df42bd29990e4ccb48",
"assets/assets/product/181.jpg": "b6214719bd3d6fe30edd08f2a7a2ff15",
"assets/assets/product/182.jpg": "64aff6ef877745c38b9c4d4fcdbc3fe4",
"assets/assets/product/183.jpg": "162600f87c2a8f49b1571c33758e652d",
"assets/assets/product/184.jpg": "fcdd599559e4e60721519a89315d93a7",
"assets/assets/product/185.jpg": "406cb81931ce4cba658b51b4265e077b",
"assets/assets/product/186.jpg": "0ec37401c0310a574a9e79b3d2f8af90",
"assets/assets/product/187.jpg": "d1be52eb283f611ea2106f0df6ba4bc3",
"assets/assets/product/188.jpg": "6eca4e60ba037c00f62b55d2f3bc0d63",
"assets/assets/product/189.jpg": "1b38d7ebf689c817602f83b82b55aefa",
"assets/assets/product/19.jpg": "15aed9ca20f93d2188cc2df9d067284f",
"assets/assets/product/190.jpg": "367c8be5afcae19024d7bbe5cf629486",
"assets/assets/product/191.jpg": "8b5b90835fa8bfd6cfc9bbedf3198643",
"assets/assets/product/192.jpg": "1a8c4c50befd05dccccbec1de941b17b",
"assets/assets/product/193.jpg": "655ae7c1ef33effe3d89ed6ab73d0d11",
"assets/assets/product/194.jpg": "85148660b3ebba9aba9c40242a06d244",
"assets/assets/product/195.jpg": "94c6b25ba1a9562d4607534f5537a905",
"assets/assets/product/196.jpg": "5c744141dd13f023497e33f7297fe364",
"assets/assets/product/197.jpg": "1540ec47d18139e42c4b44f74371114b",
"assets/assets/product/198.jpg": "9116e2b765215aef7dccb7ab8e267842",
"assets/assets/product/199.jpg": "9ba335c0be31a60f16492c4a948f122d",
"assets/assets/product/2.jpg": "d7cd67acc84ff7d82ff2ddd52f5779ca",
"assets/assets/product/20.jpg": "03ecab283dd6cefaa45d0ee321582a67",
"assets/assets/product/200.jpg": "530f9f76a029b15afdb08bdbee1c1970",
"assets/assets/product/201.jpg": "563b6f8ba8bde7f93d88938c7b7ae349",
"assets/assets/product/202.jpg": "4a4a832d094e6e9e7f18fb23f917bda6",
"assets/assets/product/203.jpg": "7799178c457f58d7c19ac3e0d51b87dd",
"assets/assets/product/204.jpg": "f4152f33cad0efb1ef5eb57fdec704ae",
"assets/assets/product/205.jpg": "f40446bfb4c874715fe6f18bd29f83d2",
"assets/assets/product/206.jpg": "e3dc5f3d66a08e18cbe047a5b6fe133d",
"assets/assets/product/207.jpg": "8a8a4129035d4c4ca0fb93e0a4f443e7",
"assets/assets/product/208.jpg": "c03c7cb33bd51d8fb7841019d814dc66",
"assets/assets/product/21.jpg": "87d28ed01764df435846b27cfa2e1180",
"assets/assets/product/22.jpg": "e1b0c432aa763e87efea441773031976",
"assets/assets/product/23.jpg": "b6ff548efb71b083afb12beeed770117",
"assets/assets/product/24.jpg": "4f3b62297104785850e78aaba3ea151d",
"assets/assets/product/25.jpg": "0721981bf6baf33f1bac0147fe2c11bb",
"assets/assets/product/26.jpg": "089d41e29ab48146d5cf022ff9965dd4",
"assets/assets/product/27.jpg": "e9ea9988049c8dd06b11f890c07f0498",
"assets/assets/product/28.jpg": "5670512881a3565b66995c9f495d1698",
"assets/assets/product/29.jpg": "f7efad2f4013181b6b78604a44e68792",
"assets/assets/product/3.jpg": "2741c7c198e6085866b55b8b28a0ecdc",
"assets/assets/product/30.jpg": "17124b9b1015d11690831e60c90ff9e9",
"assets/assets/product/31.jpg": "e3d9f00f604aee588c21a661d35f0a07",
"assets/assets/product/32.jpg": "3053d023a15be101ca27c8d6a615ad6f",
"assets/assets/product/33.jpg": "cedc2046cf0246a0cb5f9f1cac3cbf20",
"assets/assets/product/34.jpg": "e3d9f00f604aee588c21a661d35f0a07",
"assets/assets/product/35.jpg": "3053d023a15be101ca27c8d6a615ad6f",
"assets/assets/product/36.jpg": "cedc2046cf0246a0cb5f9f1cac3cbf20",
"assets/assets/product/37.jpg": "294a05c436634a00b76a1f76682b6acd",
"assets/assets/product/38.jpg": "560c3e43681ce3569635b36bcaaa16b4",
"assets/assets/product/39.jpg": "62b65749443aca1c686b7c1d81f9e2eb",
"assets/assets/product/4.jpg": "444bb286b25d6624a3a9a602afc1ac42",
"assets/assets/product/40.jpg": "25db904ad560eaea36ef3be2cab7565c",
"assets/assets/product/41.jpg": "e212ddb570590375d91cdac8cab4a9c4",
"assets/assets/product/42.jpg": "8964950e5d35a08824774e8f36a9ff06",
"assets/assets/product/43.jpg": "6941a47d1a78bac5c6a2799431d37ec3",
"assets/assets/product/44.jpg": "56fcbbab7c3f49cbe96979c0fce1b2ec",
"assets/assets/product/45.jpg": "38fc82c03c01293b05f6accb05bebcb6",
"assets/assets/product/46.jpg": "d3fa6b3b4061f6a5142b5a75907c4763",
"assets/assets/product/47.jpg": "67978ad06415b232715673e45b933990",
"assets/assets/product/48.jpg": "323f1b3b8b4d487428e637281e5db5c7",
"assets/assets/product/49.jpg": "4981d0ba5881d83a017da15063d76658",
"assets/assets/product/5.jpg": "1df71b9b786b96431f1ec5ee93ac8881",
"assets/assets/product/50.jpg": "e1a1f6a766e9ba554803f01c1e206041",
"assets/assets/product/51.jpg": "e93acd7e2c23ae2a46efa71462dd6bfe",
"assets/assets/product/52.jpg": "ba3a5e0a6590538dabe40f228e307824",
"assets/assets/product/53.jpg": "a3bab59595a13b6a19faa85862c55b8a",
"assets/assets/product/54.jpg": "31d929e19655a76945d4f566895312bb",
"assets/assets/product/55.jpg": "aeae4cfb6445f051c1c258c6c083a931",
"assets/assets/product/56.jpg": "7b206ea90635be19892c91a6f6a5264f",
"assets/assets/product/57.jpg": "7f667365edf3737cc9c19e187024e918",
"assets/assets/product/58.jpg": "05ae81aaf799a118cf999036e6b53c5d",
"assets/assets/product/59.jpg": "304422be3754679a8469dafe1c839220",
"assets/assets/product/6.jpg": "6ac7116deedfd1e097c316f8ba31109c",
"assets/assets/product/60.jpg": "0853012941073fa08259298c9f84904d",
"assets/assets/product/61.jpg": "a96cc60c07f0cc1ddbfb37bcfeda1734",
"assets/assets/product/62.jpg": "3740eb76030e5aff5afad67fb4f8a651",
"assets/assets/product/63.jpg": "90118d5c1385605a2845b55dfab916b4",
"assets/assets/product/64.jpg": "80ce4a036de9e6f430b5f8ed3c4e0afd",
"assets/assets/product/65.jpg": "80ce4a036de9e6f430b5f8ed3c4e0afd",
"assets/assets/product/66.jpg": "b37c59f5ba4db0db0879dcf6a7a97f82",
"assets/assets/product/67.jpg": "2a878da9a748c4d68e5a0871949aade7",
"assets/assets/product/68.jpg": "3e3f0c17870483e137f0a1d232873da9",
"assets/assets/product/69.jpg": "dc9d3b9428dc3b374d65a82fa586a51b",
"assets/assets/product/7.jpg": "2a1773884a33388685b65a85d218cc61",
"assets/assets/product/70.jpg": "67b44b37c286e91481fc8fec0c44fed9",
"assets/assets/product/71.jpg": "e2031b5c181bc41b309b386fb872205c",
"assets/assets/product/72.jpg": "10e4557f9eb2bb7df5018faf604e5fff",
"assets/assets/product/73.jpg": "fb60b62692b3080c9f8eb92ba04ff29c",
"assets/assets/product/74.jpg": "490d15afd3fb56e837977fb11479aeec",
"assets/assets/product/75.jpg": "bca827b1d34efc19315641bab6a0e787",
"assets/assets/product/76.jpg": "49220a90926007e14673cefa15084480",
"assets/assets/product/77.jpg": "3e8c4c017809b157bb76450291526bbb",
"assets/assets/product/78.jpg": "678215251eaf651bef52d4f15ebb3029",
"assets/assets/product/79.jpg": "44abc4a7069f011d3c00525168585cd0",
"assets/assets/product/8.jpg": "0760972db14da0bf5abb3c3c5152f90c",
"assets/assets/product/80.jpg": "8e6196f95d46676e8d16083cc3da2414",
"assets/assets/product/81.jpg": "56dcd90a8fa00d4b6c90a234953e7fb5",
"assets/assets/product/82.jpg": "97f3f4214eefdf9327df4e7eb3fe0b37",
"assets/assets/product/83.jpg": "00b646a279bc02b09af6a2d66e9e2037",
"assets/assets/product/84.jpg": "225a933749d7a531c81fdcf330be74f3",
"assets/assets/product/85.jpg": "777e85608558b5ddef8f137593f83924",
"assets/assets/product/86.jpg": "c48b864975f6db300c57486a82da4d3f",
"assets/assets/product/87.jpg": "8f35043ba62b41ddfd8812d17f3a0776",
"assets/assets/product/88.jpg": "a24709b1918b1853c35fcf4ea37c6428",
"assets/assets/product/89.jpg": "4f3ae81f50ea563b8f14d5e8b4142e55",
"assets/assets/product/9.jpg": "b8cd1469d7a11159e34bae879c44f5f4",
"assets/assets/product/90.jpg": "7591c0429eea2bec576dc5288a7e382c",
"assets/assets/product/91.jpg": "c9c2e1cb5054fb8863332748f2ab383e",
"assets/assets/product/92.jpg": "861bfb2ae56f355f7f28d59a0eee7138",
"assets/assets/product/93.jpg": "c446118572abe4ce4b9fa29a4db82b5e",
"assets/assets/product/94.jpg": "c2150100c501ca0f31bd88e7cb11e480",
"assets/assets/product/95.jpg": "9bb9ed4c445c9f6879bf6afffd4b7777",
"assets/assets/product/96.jpg": "0ae26b349ff7db83b12e53ee7b7e33fa",
"assets/assets/product/97.jpg": "a57a03ac6043fc8b7989cec7d132d2fa",
"assets/assets/product/98.jpg": "6851c52b1548d324dacbaed5a628bd8c",
"assets/assets/product/99.jpg": "f6ea5b1e5151c8bc2ef1450ad6f56074",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "00c7381c4bd8d9ff8e937c5fb4e88051",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b92b3a8cc7e97fef32659caca7e5892e",
"/": "b92b3a8cc7e97fef32659caca7e5892e",
"main.dart.js": "1616fa908ee14afa0859fe6343dd0f81",
"manifest.json": "9ff0d7319e53afc4e24b640d6b20b099",
"version.json": "961e60026f2b96adddd4dc5c1abbf698"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
