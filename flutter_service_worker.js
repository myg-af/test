'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2dafb720c066fb5585a472ba5ffc5015",
".git/config": "7a1823b20c5217f555b1feac434c536e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c916d03c1165780f611a6458557d90c0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c698c234c6a444fe1dc8104bad7a7e9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b3d9a5a5c846a142149b8f52e95f34f",
".git/logs/refs/heads/master": "9df2ae97478e4937bd51d73859eecff2",
".git/logs/refs/remotes/origin/main": "a2cb7baa8cae648f53af9d74e09fe7bd",
".git/logs/refs/remotes/origin/master": "b09b3e371c3aa2499fc8f99d8c671613",
".git/logs/refs/remotes/test/main": "1016b0a8f1d7e4afaa0f5262a57b4c12",
".git/objects/00/751369d91f3ee2df336f54ea5fe0fc89c026cf": "c75afbf59647eb07c3da63f255192c84",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0b/74012292e40c7a08718478b8ae2d448c08e2d0": "cc5017722ab70696bfb284980bc3df7c",
".git/objects/0d/df0ec50a90ff6b43aa044f7a6818f818509594": "d9a8495a42d719b670d669fcf0565d65",
".git/objects/0e/af9c8906787d3157ff7db947fef5ed0fe08e7d": "0bf17e992887191ab790b0a65d9dd51d",
".git/objects/12/8a73a3e778536e75f77f263187b08c0b1eb5d2": "a873583c3fb5ecc68fa9811148f7f433",
".git/objects/13/392e1dda03481bfbc4e69fe3573386f154f486": "dc061569a78790d1978ba821b527f561",
".git/objects/13/6ba24082101a00d99ba52167abcff402e586f4": "a1f0b95db5ef6a9fea465924a578c4c8",
".git/objects/14/04dd7862f0f8203f140376bfa6143d1a904e8a": "503a8dde3dc58a8b11a088c14ff11b53",
".git/objects/15/c0305ef8431fb9f56a719f9a0850b74168532c": "3d61eb4eca042ffabd8286487a1dce19",
".git/objects/17/9af7fc3b242454276ce2a1982f6a5fcdddaebe": "68303f9ffb4ed4c7a5ca5e23cda86baa",
".git/objects/1c/702d574cf6ba2525eca56b7a70bde35c41f1d3": "d2dc3540fa4653a3a297d4f22fce51ea",
".git/objects/1d/0c9d4c8517b4bb15a63535129e89f7af5a4f1a": "aa3d34588953db38cdf6db37f0eb2aad",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/1094f0e7edcb91488113175c2c8a91e04894b9": "17dd2248836d452c14b380eaf5601e04",
".git/objects/24/0f87be2499913528e674320cff25ce425eda86": "a9014d50e78e9c9c9e2f8dd391d803e7",
".git/objects/29/4db5aa8a26ea41ead5bf8defabc63293fcfc5b": "7577ba35ac8ba4ec4280c5f254e95921",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/d8f8f2a8dab01195f34f776cec77bbeaba1385": "bcfee72ea8b53883d5f51a9c41a367dc",
".git/objects/30/9289b2a051d569be07a17ab6ed0a199d03f278": "d98406522e9ee1ebfd2d2f393cc751d6",
".git/objects/31/cb90e33d45fad0f00b470ddd54e1e3898fce07": "42c3884d2cab5f4c400cba00102fd8d4",
".git/objects/32/503075efdd0342a42789ddcd9447ee770f24ca": "3a6a9c55373f36bbbc9dc6963dc6427a",
".git/objects/33/b5bbbf675464e6dc389ed7b4fe6687070de602": "1cb442750f6598347f49d47645d5dacb",
".git/objects/36/c0dd80e7b7bb6babfea01724ec5fbb70d19c01": "c490f2068744f8cdde423ce3950a91ed",
".git/objects/37/b397f2ec075b656248bdbbc5df014c3fd2f1f4": "2c48e97eac2ad16df6cce18a952ecf5e",
".git/objects/3a/4857c862d785d18e642d226aa636b432a78847": "2607e6a52cff7c078d5374421d765fb8",
".git/objects/3b/b6a910f8e5d8de36fb0bbdcc48bd0a8e034ce9": "587a091122c48dca82b0880a7c9aeee1",
".git/objects/3c/db62ff3d4faa82d5de85e247e2489c60c82ae6": "b84480b54dd192a33ced032d1f403474",
".git/objects/40/40887b6d4cdb91fa5258bf718b50075c8427e2": "56fb7f7883fca2e0b034aa7303b4f32d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/483a59357835b475de5ebbbf09c51bfff9716d": "1153e6a4ccc6242fac1832cac093dee9",
".git/objects/45/dcf4e3af96216a29f1a3fdaf54f47497a2a28f": "848dec49154c04e5f1f477f0752140e1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/934fda72234b8aa098b9a1fcf202611eb945b7": "ecc2938751fa60d85b8bf167b5831ef1",
".git/objects/48/dfacfc9c1496061a6b750115a9b89e20ee0d15": "e7a30cd22869422bde156513eac08345",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/8ca2a08be84362f1f209cab0ad5c06148ff41a": "80c25a3bdec50a266f8adfb76748f781",
".git/objects/56/791325d6006b90fb0dec307345b7885b604d3e": "a6230ed4ed03296923b983ffe3926f78",
".git/objects/58/c5bd6d66964736d2109c27263d9ec7d2b0c339": "49889f24f043a6909fac09605480d96f",
".git/objects/5c/3ad01b6787efa185d0c05c63e3aa447b63b2ac": "1ecf7ba2d0f0c17fd4bd070e91694f79",
".git/objects/5c/b09217d7aeceff2b3581a5aa2de666f79d3117": "fb2d341a2cdbcf51332f449988e93abd",
".git/objects/5e/69e789064f11a6ccb7a03b9bfd1a4ac47e8fed": "5df2c8bee48356d649bfd360b3ff867e",
".git/objects/64/ecf39ae095c6f660273202640ddc7504a464c7": "b7311454407c5465296222578063edb5",
".git/objects/65/9c168de863b7fbb9a9a80b5376bc3571914ef8": "0a60f561b787bb7c05acd83ac8768b5a",
".git/objects/66/2638a964f5eaecc10ae803bc47ff3e4626b309": "af9db91def59ac10989a6a6311ade1f1",
".git/objects/66/50a8ae46e755fabb0caed98c90c564b3a1dbaa": "8359f90e8c500865412a707286e2d519",
".git/objects/68/139e5ee129f48d5da95448ba43187dc81f52b0": "223a5c353bceb3199939ade8dc2e355e",
".git/objects/69/561dd0d1545ac93b68e33a89cb7f060ebe4b9c": "5957ae109dc52d867e4861e65694bebf",
".git/objects/6f/01f4bc7348373d05d675e9f5feae7832f1e9c4": "6dbbf4a1931e3c3ae679911dfa54f627",
".git/objects/71/91406cf5fa564d71773c460d3e17667fa8dc91": "e115c886c46274cc041512bc5a61c7c7",
".git/objects/72/77244cff10bd43b36d95bd2baa468f6c2b3ac2": "5eacd145ce04bad7b608bc32a2e8e36d",
".git/objects/75/f0cf4b7da470a2f7cd90c47acd7f6b6e13f413": "68402444cbd240d380dd9dbe49b6c8e5",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/78/da38d3230112ef8fdab1d940fdcb6d8e849cea": "23be2473fd8a49d55e5ea15df6d66249",
".git/objects/78/e40d3df35f6f65a07e29103f9553ebac4a6fec": "a36540765f98d49deb66ca3ddaa3e36c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/30f8f5e1caa0deb67106aa9ad2ceaccdc407f8": "b9af67a7b9634deafa15979dfeb4fa14",
".git/objects/7d/476e309a3b4838e6708eec65c144776975c7f5": "6831081913968896b485a56485fb68c5",
".git/objects/7f/d900ab918e12dc2cd4e34900a74d8bdc6ecb04": "78dbcea39135356cfac57dfd4793d0ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7ed1f56533966b2c99a458096b1bc57441c573": "8cf61a0340c7db5ab62fa155a0911c6d",
".git/objects/8b/82f791a000cd00eaef6f717b52a63b9e5f110c": "2079794c40d5df70b3b02996fedb96de",
".git/objects/8c/6263ffcb02e52f6f51383f390cfcd81cf4e842": "3a2c1064cd6c151c1827459037f4953c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/6c3aae4f2467d434a89e075cde8c07f5fa6c69": "792f3a1de3562b1b7c7f0cf9fd55a00d",
".git/objects/8f/13621689de92bb59e3bb251c74de7162aad0ca": "8dfadfbe5cab03cca091545b68d9b1bc",
".git/objects/8f/2a344af07d9a4d106d59817e51bccc72925a4d": "8c9159a81cc3eff9b1d330dbc9dea060",
".git/objects/8f/4526d8b67539741319512faeb09f3ac50eb071": "590083330de0f0ab7f88b1fe2ce9ee59",
".git/objects/91/0dc12045f9b194604046e43c1191b0ea3bbf1d": "2f2d1817a23acb6021e2888a9e9c21ac",
".git/objects/92/b15f2482f90734c18be327a42b77850ae9a717": "14fb583738bcdf2eace581728f828839",
".git/objects/95/4f0ac43d16af85266a324d647a7b96e3b2bb7a": "9cd50412b28b448cacc90540a72617b7",
".git/objects/95/82fdec1aeae5d4b800f997cf80758b8b320194": "5de724716663f9015b89a09b7a5d9e7b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/9a99f63a45e12e9af46a6b3f6c3b0b34d7c510": "d5058025c18a4dd7145ddd94d1d0248b",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/36ae035f0e9add386c1164f442e5a369f83252": "c2c72bca2a4dd555f469dc1a5d466df1",
".git/objects/9c/b337197a5f38b90fb91274a190084b56e46daf": "b7a42691a753dbd1cc3263b96f9af4b9",
".git/objects/9d/a87a4816f1e415f11e5c60358eee70cf41a2a1": "36b6a45c1324074e76b670fa832a09f0",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/dab81f82928796d7cf8b2072c7008c8fe712f9": "260dc0233bb04cbe4fc9b36c48181686",
".git/objects/a4/478d18b11695a8677f6410668a13bd86ff6017": "32f6ef0be7944cf4f2fb8d376273b339",
".git/objects/a9/85f082130719b55603dbd22a9abfcc84254b85": "92ad089628530d686ff3b4d07e5fddb2",
".git/objects/a9/c817a7347b22452bfffb53e7c43f2e11eda763": "c40a46d4ecd41430773697f510b7ab4c",
".git/objects/aa/911911fb2e7a09069e7d0379a8da4c3248699c": "58069a67a4bc9c2a5a96be08951e0463",
".git/objects/ab/2703eededc281cbbb3b2690243525ebc3a04e9": "71e4a752801947c2972a08599453c109",
".git/objects/ab/e5b2c0faedf3887806908648b2974b3754f69f": "3da32104a79239928d277be0bd7c4c33",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/b9b62f1243001ec4ffc5a7beed3f62f00d0a6c": "891205d592045293dbc00ed23a322fed",
".git/objects/ae/800e237230d74f51cb0d10fbe3455716d17d29": "312b5043b76ac5e6c929fdb2cf4018d5",
".git/objects/b0/111218c867b61f65439127a0d57512d22cb3d1": "8a01d48d11cd9fbdf420ee620cf76fb4",
".git/objects/b0/60675602ead61c71baf9111cd291fe8717cdab": "b2f8d1fa37695bc7cca92791d279c66c",
".git/objects/b2/3f40fc0308d75ba43835a6f7787baf8725f99b": "0dcec623a9fe3fe6321db32097b84616",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/cebd521c39ca2ad1a3dd52823458da92124db1": "4f8166dda1bfe96801ddd719ed57544b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d5fd4494b21a6d83706781d74f20181ad77c13": "dfa64819ee50ba0ab92579422944bdec",
".git/objects/b8/044418b61722109aafb11ce10d0adb8f2ae685": "5372aef80b43a6813f70b431ac7d1055",
".git/objects/b9/1edb8bea78d26e2931f1d5bdf8ad4a145a110a": "07e70dc6eb5c9e58704ee6ec9b0886db",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/ad8a85ed471662f1a364a8b235a62195707485": "697218b2301fe1262306b39032144408",
".git/objects/bc/47a02faf08c85f82ec97ef4ddc920a775edae9": "a27d59df7e10d5d691b5bb8aefc0322f",
".git/objects/bf/25b4c34162fdf27a555d59492e4f48bbc62680": "b4ebc08d1e8076e8ac12877498bd8e4f",
".git/objects/c0/9de71da654eca6c7d6250c5dff29ef3df8bad4": "ae2dd4cb07519bd310b6497f86db0ff4",
".git/objects/c0/f9fb5a0498f81a640c72dbdea87cc34c527174": "3f4e1c6027b4e99d1c3f29f33b828dec",
".git/objects/c2/2965bcc1918e3995ab3710e4d6f232423b0e74": "8f48ab2b874888d129d5188d024bd753",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/3ec74c60c1515c105162d2ff34b5526ed4fe18": "8956866da622b85d3abfcb174742ddfe",
".git/objects/c8/178317fbb14ec2dda80c9d0008fd5b78b0868d": "59ae7681dfa5e2b2df802bb91382b842",
".git/objects/c8/760e6ac802a48c5d2819a5edb7561382fa52e3": "b65b48c082772189df9d3a343a125dae",
".git/objects/c9/4a6ed98b4bac9b4bb16d83979098e8bdbe566a": "1c3912040bf4928c57d9a87d29a7c01c",
".git/objects/c9/5730604ce0c0ec9606ab0e2c0598a8f3b72b04": "10e88a550814fa9315cee63d4ff558aa",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6a1c81eb9e3d86e34835d312654102f5772070": "d92a95650170b29dbec549f20126fd7d",
".git/objects/d0/778858d72216fc921648fbb4f6b029df4e796a": "8376d43744e4fb19f87cc08be37cc9d3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8339c7a744dcf7bf9d76711088d9aa9a961545": "736fe316baad463c767f9809e64239de",
".git/objects/dc/c1dab6f0faff81d507966f12c8b866c0fbe11d": "cebc5c4e30b497a90a27d652bcc5350e",
".git/objects/dd/d9865b4cbe38fb9fc0b29e4e7a825f2335b6cc": "229cb6188c55f956f818517719e9f84b",
".git/objects/df/0ce62514d65628cfc159dfb4d2eeccf7aedc40": "7fada9abef2032b3bcf122d817e963c7",
".git/objects/df/1cbcb6894c3d1dbf50a9408c84c1e02ed6d316": "a3c9e2451319d89ac2996ce6d6ea2980",
".git/objects/e0/0f6868b4a908153568a012659d2f9ab8cfa7d7": "f5bf1e05eaf29e15ca280b7c03404e68",
".git/objects/e1/06a51fc839786394be7834ee117c95256326cd": "3a1f23326cff18a6263df253ff199f74",
".git/objects/e1/d6b56ecd8a97e3a42720696f0cc57a29d9f1bc": "d87eff8ec4679a22dbbab6b8306ea183",
".git/objects/e2/d5691895936890793734423a418813bd7b4a4c": "378b29be924ed6ea8db8be819d17e02b",
".git/objects/e3/0dda07001339dead1f6292ed7fc044bd2fbb78": "d75851fab89a0ac53a1ca04e136a1f68",
".git/objects/e3/a98abaac30de1f340f88db592b09761d40d664": "a9df113a6190ec359b3f0029b677cb2c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/bd2b599316eca71acefc1040f7aa1c99d539ea": "d5d4f0d254b0b110f638374904618ba8",
".git/objects/e6/930e3d0f521d1eb0ed4a76020ee8a85e075064": "ec0cd041243746bac446b76179be76a7",
".git/objects/e7/1a33a703da811e7902cf2a9740b82666e82ade": "290dbda46062ca7942eb2ddaabdf0cb9",
".git/objects/e8/26fa7cf8967b8ba9c6752edad840d7277cfd06": "62137049d7813685bd87f54312454167",
".git/objects/ea/ca709e131f57c76c270b07a48b3bef45326351": "91934e64185d06406d42d27505d42ff0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ae313c020a17e97cd025127e18425f54d27652": "01342a11668a2abfbb1b3d159c8dbfb9",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/f8a6040415f5701fb053424f93542f6f268b34": "27906d14dea73b7eb9d4c7fbe7dcc8f5",
".git/objects/ef/3c8f4ea9cc45627e01740364cb0e40f6a05a7d": "349b2ba752a17241e0467dad64c26c67",
".git/objects/ef/e32c4cd1f6ccb36f6ade1f5a79acc6c42e7a68": "26cb0db52f496493730362146a9fc2ec",
".git/objects/f0/704cafa71b9254eb418d7adc6fec26d487b844": "0ccff1a54abb44fcad0c6a393a0fb815",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/631027c0a3d516d7ed735da00a9ad0f32768fb": "09cfad8456b5332f6ffbb8d6331eb5cf",
".git/objects/f5/952cda9a973a2151ca3c41f89b56b9198eb6b7": "9c150f99a9e2e7e0325ff45a77019bd4",
".git/objects/f9/188de491081f1a7c8f87dad6685f7e3431cdd2": "52bf0d22e0cc79ddc1bb525304d73e66",
".git/objects/fd/d9a05e02b79804d252b60cd520cfad95778497": "bdabcdb4e690fb73de36704e52974c58",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/f803e694280aac34692de89746da0c473c507b": "b406e7566f3d8b7a57478238aa52b145",
".git/objects/ff/2b7db1646e6636bacc689e1b35b453c90d5622": "fe0cba3ccdbc7e03899d93c5044f583a",
".git/objects/pack/pack-13da2e21f7e81814ae5cf0c80eb32c8e4892dfad.idx": "b04b7893aca9b928c8b62f98d5967f11",
".git/objects/pack/pack-13da2e21f7e81814ae5cf0c80eb32c8e4892dfad.pack": "d3b2046c6ac46ba36161a50ac28f600f",
".git/objects/pack/pack-13da2e21f7e81814ae5cf0c80eb32c8e4892dfad.rev": "960acd36edb277560fec11dbf6a5e1ea",
".git/ORIG_HEAD": "c59ed3907f329c4fbb8caa94472c6010",
".git/refs/heads/master": "b7b3a5e3b8bc5c12a49e72b86b00f796",
".git/refs/remotes/origin/main": "996280a0aef75a4a3af3898ba68a96dd",
".git/refs/remotes/origin/master": "307d1b8048ff483906ed6b1d49b39105",
".git/refs/remotes/test/main": "b7b3a5e3b8bc5c12a49e72b86b00f796",
"apk/app.apk": "02f0e70a705f92151b464db95d802880",
"app-release.apk": "4a995f9ccd3dc0a4bda831267bd1fbd2",
"assets/AssetManifest.bin": "ea4da80fc9d4500a70e887dc3d2821bf",
"assets/AssetManifest.bin.json": "91fc84bb816300f07be9f0d30b56e703",
"assets/AssetManifest.json": "79ea6db952ac747a4c6dde19cd4144ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/anim/hero-pro.atlas": "b1327fb842726a97579ead6cebd939d4",
"assets/lib/anim/hero-pro.png": "843ce0424d0d673b606f78705e62c254",
"assets/lib/anim/hero-pro.skel": "76db9d116f739a3d94a5df3a52f2dcae",
"assets/lib/img/altar.png": "8ad9c9f7b561ee16309ba08c2bc2ee37",
"assets/lib/img/BB1.png": "0846211773f0dd09ddf4e30874158ec8",
"assets/lib/img/BB2.png": "e9cfd446beb570bb1460555bc4151376",
"assets/lib/img/BB3.png": "954cfe3c61e3cf14314f6554bdd58459",
"assets/lib/img/BB4.png": "ab984b387641603bbda22eb507eaa1cd",
"assets/lib/img/BB5.png": "5791fde3af0ed1249fb9742a08e3a187",
"assets/lib/img/Cartifacts.png": "57367d8c83f4c399ceb67e93d9a0f54f",
"assets/lib/img/Cgems.png": "7acbf01ef046ce473799956c902053ca",
"assets/lib/img/Cgold.png": "0c778b64d4aa3631804f56615d43bdad",
"assets/lib/img/Cpotions.png": "5fce57f4feb342f153f95d212a70b056",
"assets/lib/img/game_bg%2520-%2520Copie.png": "3c4d079660a7952c91dfd18194dd34ec",
"assets/lib/img/game_bg.png": "93eb58498ea8709eb291b7556704616f",
"assets/lib/img/player_card_bg.png": "a7d264bfdfb13fbe49e950e4cbe0169f",
"assets/lib/img/profile_avatar.png": "1708a82b4d0a448c7f3449dde65d27df",
"assets/lib/img/profile_avatar2.png": "636b108113075bcc4146eab6fc126d0c",
"assets/lib/img/profile_avatar3.png": "2b4835362edf4cd30d84bc86b9b2b206",
"assets/lib/img/splash.png": "6c2f3bc0f74015aed80511290b4a2ac5",
"assets/NOTICES": "b65939f8d858f9b6a8bd5c1388d1417f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.js": "76118d0ae9421e1b33e6a0da97700289",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.wasm": "8d2df357686c13a68fc4269e06ce8049",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.cpp": "852f851775c61a8dfb34a4460ef7d0f0",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.h": "0f25a1e1148b878172e430b582dd4f50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "57a4ff2740c9b49d77883b4330c4b959",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed9b371f5f7ae845120f618012f48be6",
"/": "ed9b371f5f7ae845120f618012f48be6",
"main.dart.js": "481c13c08beed81a578b7f2f793ed8b6",
"manifest.json": "829c0ad170e501a30061a5bb88af300f",
"splash.jpg": "3431200f8af4076dec0e44fab90a65ef",
"version.json": "8b06fd8cf640b1e210e6794b4f2c922d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
