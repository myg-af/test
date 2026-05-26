'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "36285818965a53c447c8ba4771e83f5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f56407709eb4965402d9a026b11d149",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "cbb3b2405c1a00537d2b2fc0636cca5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9f08288977f86937f16a86cf0b85808",
".git/logs/refs/heads/main": "94243ccacf17d97a7590c2835fb919c3",
".git/logs/refs/remotes/origin/main": "e1e3fdac8f2f92d2be15bba2898fd5a6",
".git/objects/00/4bda465c9ded25b3f61507162a463f13f71871": "e49dc6b1fb86f9236b55357f4d8a7829",
".git/objects/00/751369d91f3ee2df336f54ea5fe0fc89c026cf": "c75afbf59647eb07c3da63f255192c84",
".git/objects/00/845272cfd3158758032e6a505e8bbaa8c04acb": "b522a5d86fd47cf6e847d8b1d68e036a",
".git/objects/01/6c144159abe84fc0924882d4b4ecaf07a234d2": "ce508eafcb6794d6be86c1ceb60216b4",
".git/objects/02/0dce720b4f22e0ad2aa14018e4c5895b4c3984": "0ee0e12f29762d2d6c0764bb702230de",
".git/objects/02/250825ed54c9e60f24bcaae51c4971352146a7": "bd351560c200a4ba8bd2f413f910bfbb",
".git/objects/02/56be35d0a07aac10f4dcd28cc60cc9276113e0": "e6440b1151ac70830c2ea5621cdf85da",
".git/objects/03/b8b650472ebcfdbd638d49b8304747b74c40a1": "d242d081cae8eed7e290f13b5526833e",
".git/objects/04/72cc15dbd3cbd196c093b56f28f198721d319e": "ad9a5105b7adbcd6578eb6519e50218c",
".git/objects/05/8b26053d2b6289a853de6e08f63e28081ce2ac": "4d9a7a8b7c6b5943ab56fefc41538729",
".git/objects/07/5d18a6dd1605af299bc5a35d45288dc772d6d9": "291f9b720c8ce054b313ea8dcf8bbcba",
".git/objects/07/7f0e8873e48352afdeb112bac5205241e1cea9": "1d9ee31db5d4693ae574a9c4b3db7400",
".git/objects/09/0a87f43e524fe8f5eddc3c6950d202483f2c5b": "1c67a0c100b41fcb261379853a4913da",
".git/objects/0a/5e53bba4c22c3577d6784c8136a39059952924": "76b0f28c5e0729e7d96cf7447c873f34",
".git/objects/0b/0ddd70f3a32394d5027b44c8b07e865bc2b93c": "3a87a1ddd2f61c9c22d371bd4d2ff108",
".git/objects/0d/07198f16db782808192c4512045268c6597b9e": "8221df1845b7b4a0d8f34d0ee4b380f4",
".git/objects/0d/df0ec50a90ff6b43aa044f7a6818f818509594": "d9a8495a42d719b670d669fcf0565d65",
".git/objects/0e/588465e96c086453fadd8df033755e45d17256": "4e827caf75813841025338b6e64d747d",
".git/objects/13/392e1dda03481bfbc4e69fe3573386f154f486": "dc061569a78790d1978ba821b527f561",
".git/objects/14/23e1056bfe028529591e6f31ef7bcdb7a7b9a7": "d01636d2731210c1f79f1cdeaed1e8de",
".git/objects/14/6438061155274f30c3fdb3dcc4af9503b5702e": "71b7a25273ff9d2de18604d8cb0ba3e5",
".git/objects/15/c0305ef8431fb9f56a719f9a0850b74168532c": "3d61eb4eca042ffabd8286487a1dce19",
".git/objects/18/27a329f2fac4275a9799bc991a2623ab180e1a": "6e7e4a7fca5bc60d0d5d4c158ba6d1f8",
".git/objects/18/52cff9b578a991f04dc29e4bb88bfc0ca4aa69": "aa1f4e6358adfa674ad97adddfcc81b9",
".git/objects/1c/91121e2a757545d6cfec0c34b63118e260f76c": "d3cc11de0871637dbe621176c87d5bb2",
".git/objects/1e/193993044580e83308a0d56282d4cc7164e785": "85af0c2d260b89e22cb2c7cdf1954d84",
".git/objects/22/168229689614018d91d1738ea7943a105a03d8": "266b0f3652fbb07e5ae878a5b3f621dd",
".git/objects/23/9573ccd43f4e5ea572b7cbf6b9f825b30bd548": "d871dd2baed44f5f1244fa4e3402957d",
".git/objects/24/ee4eb1639d8d55cbb2df261fbed6a9f6da563c": "6c401e16aa24cd594bb5285f22d9b730",
".git/objects/25/ced2d741265d6a58b2b255026a566b62d0c116": "a0308d9a24674f1179a2e412d5ef60fc",
".git/objects/28/8df9f112f99bb26bb700eb3b4b585753f606a2": "ba4e9db320368d13e3a996c23ba87fd1",
".git/objects/2b/ee2ba2678427c2f3303ee7a862443f45d19a2f": "7b7923dee60059b402d541e1c359b323",
".git/objects/2c/4063ecfc5f77dd77bd10ac015833365461be92": "b828ebabb802577f28c15d3583616fd9",
".git/objects/2c/b16366a523bfc37b3105f28de6e80eac1ec22c": "ee427fae02a2c391ca9fc1b46a866ab6",
".git/objects/2c/c882bcee3b2be22a65a8b6d323854fba740b16": "b27575e7a708411094c7f9e19e87f78f",
".git/objects/2d/3222b03c9c816c39b1664ec9f6e1e10e993c84": "92be938d36d875bd143a82619b99c4a8",
".git/objects/2e/5719340ce2d9219cefdef730e03074a20b6d3c": "7d5b07ca1ec0145bcb92eb9da8d83e86",
".git/objects/2f/f17f10b2f5a3b22bda4ed91d2dfbea79724260": "9c077e78532a4b932923e5863d0025cf",
".git/objects/33/073c474eeb1d0b211095fe59548810d72f6ed7": "1e08c0a849ab4392cbc51aa28d6da62b",
".git/objects/34/b722a41c19220c24d3df9337a4c0d632988b54": "3227efbc821efc48a336402af802a1c1",
".git/objects/34/bf47accc6b998cc0915b35eb9e0cfbdf19db20": "ad76904ef51f9d7c33d740e9bc8cf607",
".git/objects/35/9176f5b35245b7936744ba13d771e2115409cd": "d3ef9fd8faba91f6a5d650755ff8332b",
".git/objects/35/b12c85abbba8da859226d6c6ddc45128bd1667": "2d93492807f430bb27365db3b5fd637e",
".git/objects/39/9061f8a0621715d0bd968b7051f497a3e7ca31": "b7c61732475f5f7fc8746c4f45b5ea8f",
".git/objects/3a/2fb374ce038d6f079a1a2130d0218a089ef99b": "86e648f3fc1e4f030c8777886d67e519",
".git/objects/3b/001690156a9cc8743ca3564b3ef04a9b545423": "14c9e894fa331d80ad9aeffa39ec9d58",
".git/objects/3b/6cd2a6d0d81c6eda0c80d64a27bf25026b54cd": "991518c8063302fcca9f24c884cb4419",
".git/objects/3b/b6a910f8e5d8de36fb0bbdcc48bd0a8e034ce9": "587a091122c48dca82b0880a7c9aeee1",
".git/objects/3c/335dad780549cc66d57c51e6996e3ff602b0d2": "22f574e81d9884bb45ebbc4e92ae8cd8",
".git/objects/3c/478247152c4b8d3b69ab2756a856321f14e490": "8d253feb97647c84e79cc017e76eed49",
".git/objects/3c/b30061eb08c37c8b1cd5de952b58d13c75d771": "80b58681d9a2a47e673411af9d37f1b1",
".git/objects/3c/db2e98c65eeee733c657c321b2047859d1ba77": "a5dc84bb1a0fa81358660a148e37d5fd",
".git/objects/3e/50bb0df93225f569e6c7bbb6626d80d0477cb7": "bda10fd10174e5c56c499505dbc31bf2",
".git/objects/41/723db9b4354bba5132647537ba246a2048cfeb": "b6932761b1116693de758cf66f067ed9",
".git/objects/45/92729c21433b7f38def2224eb7522e07573be0": "723077d189559f68e766b807ed5be37c",
".git/objects/47/35507818714e2d87ebbbe6b89d772f89624938": "fe6fe431df9222c6e5169c70a80cba9b",
".git/objects/48/a759c14cd31ea4bb8dcbc6d7f32e65ea7c8946": "b9be51f889dbf9cac7875fedd26ba449",
".git/objects/49/872446759bfcc63fe2778152a3ca075d421c8d": "1de9602a897211d482e83290454a0a6b",
".git/objects/49/f6ef254fc2f6a94622f206a0f1332cc0591d58": "798286f64ae06b5e66ae74b3e3ac8208",
".git/objects/4a/2d64cad106407c9242e75cba33de893271b551": "475e99af05f882b2740292cafddf4d01",
".git/objects/4a/db1ca206f14d1842e87bc48c6abbb7c2cf903f": "a9b17b2d447db743209751341a950e25",
".git/objects/4b/04006480f884a12d164d72273f8aafe2f33052": "84e205281a301e5a440a3d18d88684f7",
".git/objects/4c/a76006c783f3babb5a42368c0acaf8edde0b3a": "9f0947999c5c263bbfec74994384eb4a",
".git/objects/4d/1e6e90b7083f66ddec47d93dd77bbab44d5921": "72f9481a7620cc60928fff8190089c7e",
".git/objects/4d/8f1faf3e2aeeda5f21920ceb5d08dc06dcc853": "cfd6dfa4e42cae1cb3cbc77a2fd36676",
".git/objects/4e/28a82bf9087a9ea5289a9d317258cbca5e16d7": "595bec503af11c36a505e8a17d10a11d",
".git/objects/4f/5f2c7019001344cd17256e735cd580c811c26a": "f44af0efae70c94709bc45012d2d492d",
".git/objects/50/68619ed634fe2d5d42dd9bf8b9ac0de0c9f4ad": "67db0928b3fd3e736a54b12f074a1b87",
".git/objects/52/8b9cde6eeda0c04756aeb91d4685da6db953d3": "7486a6806743dc68f9f9dda5443ceabf",
".git/objects/53/2d02f7b8f9a6182d2c26f10390191fdf59c27e": "132c7a7a5c4405f1d83b7524c135daf6",
".git/objects/54/9aa72a61a33dc11dd260744da5af244198e6cd": "c3d7bd3033a9632f769d49d001097002",
".git/objects/58/51582d46259860a6199793fec80388c0feceb7": "02e026b59c957e1b55a7f6d2ec8e1add",
".git/objects/58/866eb698a849c916391529ba3cce1179b73c1a": "19e5eee952cd420eb76016bebed55055",
".git/objects/5a/b33bf1c290c052ba78f544a284b28bae8b3e95": "f4c4453553902af17603952700ef5b08",
".git/objects/5b/897f4496f30d49b9c7852f63b31b9a4b478870": "b9574b339a27a477d54e25337fb40885",
".git/objects/5d/cde9f3e01098d5e7060a8849247ddca84b5a6e": "f4b93d71d2dc3ae2236be47f0818fd9c",
".git/objects/5e/0c836743cacc7cbf54e1f176f386545b1fc941": "93c0573611a3ea617d5d25bfbb99d74e",
".git/objects/5f/27ca1497fce5cd776147687312c22246265638": "16c7268e643e2232fdde069b83a362cf",
".git/objects/61/f5c06cace931ef088b0717a15e96ca6dbab8aa": "f3457e2a1bd287bbae54715e6213d5c2",
".git/objects/62/a402820217e5dba71425d6d432cf51fb25cf86": "c9ed9c3945a161c075bdb7361d17c10f",
".git/objects/65/9c168de863b7fbb9a9a80b5376bc3571914ef8": "0a60f561b787bb7c05acd83ac8768b5a",
".git/objects/65/cce6442545f2837f4ff8bb1327aca1d81ea601": "7051650dcac8e26e4bf95bf734e29c52",
".git/objects/68/20f71f2fa5b5cf9b9b6625c3e9e77dda0bfe54": "13472dad839c19ade0e96f35b98ce773",
".git/objects/68/78b8135783a0617408d3af4e0409f96895aa40": "6b2f8e26607a61a868283b8cf5f2195d",
".git/objects/69/5d393bfeaf04d3c272dd0f8080b159b715e97d": "8c5c8bfb5cc24c790e4a79b38c1e5075",
".git/objects/6b/39b6fb52c6757870f06894abe25abca7cbaab8": "b2a55455f638e2d11307ce3c04ba3a71",
".git/objects/6b/57eb5c140c48117e208bfbbac2f51a63e70da6": "6a63a57558465954c2332d15321a70a0",
".git/objects/6b/918d8931e10651bf33f9e9dd7002f1b92b4376": "cc321c831adc792ac018dd3634be8d9c",
".git/objects/6b/a6f13c8497c199d87a2516ee162afd49402532": "753367626388cb0fe3ef768e0b62f4e8",
".git/objects/6c/bf6ee285c6c26332008f7a4950787b96d214e9": "31c33daf0c32d829ed765db4fe6f0653",
".git/objects/6c/c08fb45c17a3770aff7e38bb12de2dc42c54e4": "ae74187390a0664322213deb7ada57e1",
".git/objects/6f/01f4bc7348373d05d675e9f5feae7832f1e9c4": "6dbbf4a1931e3c3ae679911dfa54f627",
".git/objects/6f/24db2e445d38c1c481c5d586fc285f4496195c": "1096a6c3fc288cabd839f133e84ae95b",
".git/objects/70/372123f9e9ec33cb212b3b31cdf43624346fe3": "b57101119a6367363f92c4592e2bf0d6",
".git/objects/70/9acd46a68c1e0e1a9247655a25ca57b1fdcf54": "05f0c963562b200947250fe92457753a",
".git/objects/71/be36d75f4e29eb7755dcc4c62292c34404d45a": "e23d4b7cac5fef6d78aaa8f03cbbc673",
".git/objects/74/1ced4017d67b0404b7f484841a190d6895587f": "170324a20dfa61ee95b9d1876f02640a",
".git/objects/75/1bff8f36d52af6e188a11ad500c4a3ed0cc860": "0aca28671933f3b41826e2ad0fd694e9",
".git/objects/76/3d31e2c6a17eba4390064c0f952cc1457d0aa1": "6484346e9277ddd34f11d7fbf8f1657f",
".git/objects/76/f31b454b2cc34b3aaaae4e510a2b2f9ecb3126": "fea5370cda8f71f8d73926f9629c70b3",
".git/objects/78/2bd8b1ce8b274e6dc0fbbd8551232469bbb527": "4f70c7f1cc4035ad06aa098a1ebf450e",
".git/objects/7a/221c3a7bf69e79b251522a22415151aab16b0d": "8a860ac35e64de9688f91bf37a1e2b2d",
".git/objects/7f/3c25ff445783a3beed3a4c3f1fe7169956d477": "01252f88884bfa848e51fe6b08ac64b1",
".git/objects/7f/a3a6d7eda102e7344f48fcc1ca4d1c3b8a5a30": "cba752dc51b32c6a2099e068e82a1a8e",
".git/objects/7f/f7d30a8de1d42a6af6ba74c1cec6c2711d026c": "29757270e112f7503cdda988bc88cbbd",
".git/objects/80/2a8e37d5ba2252f5f7e6ab4aaee84ebc121ade": "50867b15edba747ef0145c52b05e18ad",
".git/objects/81/8ce240843c431d94e475b7a8fbf046a0c46c94": "99de5b42cc939ce1d0191ad6ee5f2d6b",
".git/objects/84/33338735e18c4bb7739d7e7d978300b1911682": "faa43d965dbf7e736b63460197f2839e",
".git/objects/84/fe7778204c1320d1766a33919e74d80871e4ce": "5f7dbfa4894bb8064cc90bb3d84ce598",
".git/objects/86/9b63f3cf1a1edd65fea73ecff8a286cc6051ee": "a6c1e99895f5756cc56e9a34dccf3cf3",
".git/objects/87/f50e519ec79f6b8053f84f2fa3973622b2ef7b": "2c0ef4f9a2e5db82180369d381f4467f",
".git/objects/88/2f35d9392afce17c3375d3c307a46480bbf49f": "b9150117369bf703aab0bfe0c526a880",
".git/objects/89/082bd441781d77b5833c762da9ca5cb0d62a3a": "fec1c380bd46c273cde8338d29ecb392",
".git/objects/89/20324aec698e8cebb739b778c36356b0a683d7": "8e7c13c61466531ca564ab61d41966b3",
".git/objects/8b/b6bcc7b5f1a02dc4971c597b485c9f7a1003de": "7d955f509d6c1f76b1c4a55f8d6c9232",
".git/objects/8d/e6cb8733a01bf3e260471f941acd5761fc4566": "0459ab4b7b04644c244a502fca657371",
".git/objects/8f/5782c795072eb7ab46346c4a9af5ffeb59e0dc": "67ffeb2697dff2a02daf7167d1ad8707",
".git/objects/8f/f97e0fd1e48583e7b27b5c516b0bc924ee3f27": "ccfb583fee625361a860ec71ae5e225d",
".git/objects/91/cffb0d0e220b8930dc05065dad63f56b1a6a60": "58c348e58c5158e0d6f38958ede9b203",
".git/objects/93/d2925b0644b6b52faa13be8e17e8fb383566c1": "d277e10881561044f842734fcf5c0a52",
".git/objects/94/a87fb17abca62d36c6f2b32b2d6562943370f4": "7bdb78c9689bd99edce063e3f5a0b81e",
".git/objects/98/f5f5d20e15d16d10ea85cf764479c0acef1279": "ee1f8119ed714619413de39be66ec404",
".git/objects/9a/ddc8e48ac57cccb9187f06a6f848a233f6664a": "2100ee6006fe7d4bdca91c3a387101c5",
".git/objects/9b/04e8a266631b8ee29d1181e40ba6771b199322": "1c77734620ba57ece7dd71ffffa7ec68",
".git/objects/9b/c6dfe32a8e3705c2d4578dd8ab25368b068365": "0d0cbe087ea292d11eebb379cf70ab6a",
".git/objects/9c/b337197a5f38b90fb91274a190084b56e46daf": "b7a42691a753dbd1cc3263b96f9af4b9",
".git/objects/9d/00100c98d11f038decd8200692fd3ef61f3d75": "c8f893211ad271bf0caaadd85cb36428",
".git/objects/a1/64a4024478c19bd81db2cbe94d9a2b8ca81180": "5ee421f856b545c047d82635a5f0231f",
".git/objects/a2/600ebecd0b028e02fa3abe000799888ee25565": "fa77e4589cdf6214e3a7628d6e67a678",
".git/objects/a2/bd51566f7135d3964548bbfcf7128838bfe7a6": "a18420fdfad0d356d4395d5a5ab50726",
".git/objects/a3/4a25d6d843da2549fd416194d3b829702f3925": "79eb14efdcce4501c49412f90ce13ca8",
".git/objects/a4/1b939023370c630183ee46f197c4974661cea5": "902cddc465654699cadaea74a731e345",
".git/objects/a4/419243b1681c90767365fe64e37610bd72caf7": "a7b7755917093df4c0296fc5e37b3d2e",
".git/objects/a5/8bd07960c79a58e26f0ab4b82398cae7d48a19": "48bc7ea6462672d11c1542466b4aa154",
".git/objects/a5/8fd41c26baaf525bc7e1fa985336e5b45aefd9": "ac4b0a13459b51a94a34c6c6b4729822",
".git/objects/a5/b4a48b04ba63d869eb6f0436c5562c4a899ae0": "9fca252b3f261735421026cbe68c9b8a",
".git/objects/a5/d10e82980f656c5677304634156cd9fdb2032e": "45d50fc1a205e966a1eb4849b6f97190",
".git/objects/a7/f91ec6e59be8142d1b78b4ca593470901d2e11": "d70e82dec4def68731708edba18605dd",
".git/objects/a9/dfbb502bae86b3e13eb204b94b288c26e7e1ec": "4de8fb580685a8a4f4d42627fca3e389",
".git/objects/ab/28626b2c044ea29f11ea36d900c14bb4862401": "e42f22bcf8a3896c02041cdac50ecc55",
".git/objects/b0/36b18a34437550cf772d9eea0982b942e99a0f": "adcbfd08c4f4c1d4f9a50ec13c7edfa2",
".git/objects/b1/e5403dca4b5a1628553594dcb1607151ec4321": "84af50d03b5ced324c1ea83adc56ea6e",
".git/objects/b2/ce87bb955d44a4e5f086b47c0f444b7d964cc2": "1202a034f99fec0d3777a907f50d3320",
".git/objects/b2/f1b5acd978d21e61dc080b5a8a1216abc1a72d": "a30a5dbc97d6c3ec60949d901fb8a038",
".git/objects/b3/0cce8cb0dabdc8c4b5c23e0545687de9faf564": "66bfa7130f2a97803d80db2534cc666d",
".git/objects/b7/81c67c470a5bb031afe73086005ab3bcc1ce07": "d282574174a9e10024141fc6123a6b57",
".git/objects/b7/82f82dfd3a20330b603b770a439a38c04f71bc": "69c59a35f214c4d48b7c12b27a598379",
".git/objects/b7/83ab8071ab0c12b30609e96c5546ee451d4e69": "937533471bf0dc9dfa60b9c1d34a7c04",
".git/objects/b9/2aee6653e4b4c93eaa5bf5b416e9c7894b0b43": "5dc1e9b8b1b18c8094c6bea39d5ec760",
".git/objects/ba/e028479cbe5548fe9ae1a4d61e7f233089eb51": "779fac0ad2f40ee0d06b2326b67d8c77",
".git/objects/bb/8c3b0aee28cfa438f232668e268d69e485c24e": "3d9c65379a92b1ebe7cf9fc036b9c516",
".git/objects/bd/b47c138bbac5f552e9084774e13b604d397155": "66713cbae53c1cff96d60fe22fc6399f",
".git/objects/c0/721030b4df7e90236aa648ba218bb75ace47dc": "d254114287cd0d39b780ff635d031ae9",
".git/objects/c0/83c9d8e9ee8202d8fb23937bdfd518032bb736": "f37fab16aca71a54f7e903049592160d",
".git/objects/c4/5a1c637ce03e80c725953095e6f9436bcc5258": "aaae87ee8917e791bc06c32d29388a4e",
".git/objects/c4/5ef13fd09d0cef30bcbbb0b10208b9b9b55681": "40a569751b8e7f26828b4165eadc1ca2",
".git/objects/c5/5f671424a46250446059dd56cf875b9b1a26db": "742e7b8e63ba1b9fb17d8b12ae09234b",
".git/objects/c5/7851152248cb4a1e11486e45bf3b19023b8082": "3d9163b4141e9c4cb4372df770dcdb3b",
".git/objects/c6/bc58dcc8047c847995aa7eb5e8b81a0b59e6a9": "c7d0e3f0a733a1e148a6c9e0bb862028",
".git/objects/c7/33848bc53d03cfb513f5949fd7e2eb199a1e66": "f10db49bd55bec60bff87e8aa2fb2cd3",
".git/objects/c8/178317fbb14ec2dda80c9d0008fd5b78b0868d": "59ae7681dfa5e2b2df802bb91382b842",
".git/objects/c8/760e6ac802a48c5d2819a5edb7561382fa52e3": "b65b48c082772189df9d3a343a125dae",
".git/objects/c8/bfd95daf134442259cc556e3c7b7a5d42cc5c5": "ff2454f031fe7d6a081885ebfad96a93",
".git/objects/c9/2357a86bb331d5d6f1ff9f56b81d31aa36586b": "3e70b6776ac04718904598ab25950abb",
".git/objects/cb/56c6c4bfa63208960695e065189be7c689282d": "6cfe1ac4aa5ae4ae1789819036ee8cbc",
".git/objects/cd/01843cf41b73fb4a86399663536d079d56023a": "34620f34c9fd87ff656cd746052541d8",
".git/objects/d2/f8a243e729c38073352ae7c5b4eddc8ee92338": "ab14923ca5683229747bb55fa21a99b8",
".git/objects/d5/5771c4c1ce8485c341b230bfd3385095cf8d2a": "187343516341df0c720167a8d41ac873",
".git/objects/d6/e42f019365763854df98f84d92fc19cf0d6c48": "1dd0c236857dab27cb8ebbcc4170b960",
".git/objects/d7/2bbff95f2318539b0124b0bf5e5daafc7a6085": "9534a8f08d8fc47ef8feae6dfd08ec82",
".git/objects/d7/a30a126334843afad8ffa13e8699a4c10d94d4": "734aba2e58ded8f74ecf525dc0cf13df",
".git/objects/d8/29e26652f6d69cd55b22f38ebcc0d8bbd9b4e7": "a377909f5ad24ca610f3075aaf0b159d",
".git/objects/d8/36701635214ad9a312cbf4cceda370a1a4c908": "13f4ca2a434093f8daecc11c6a3e991d",
".git/objects/d8/73b753a55ed2274a09138c2e3046039ab1838f": "589caf5690ebabd9a9ba2dac93271204",
".git/objects/da/5664160e49807cf626a06021578d36393a7c1b": "a87c24e92f0b82478e3250fc1746f9e4",
".git/objects/de/3906f398662110064a545c85cf24f74a5ad101": "a3c79fb195db5ff92839ebd752f918ff",
".git/objects/de/ef7857915bbe353bed919e38365f1f29efee17": "a4c56952a3633fa5af018e4152b41268",
".git/objects/e1/af34e89efc6ec9610277adc8cced0cb975feb8": "cf00bee1664e07e2b71ebfcb652cbeb0",
".git/objects/e2/b62be81481c8f24cd2e1bbf3cc10e8b10594be": "8a79e0da72756e24cc6a53cc9028c890",
".git/objects/e3/6280150f7708335fcc5c91677e7265cf9c2fd6": "91f21b0a2aa806343d7c1c5ae03a35c5",
".git/objects/e4/ffecc41e469023c3731f3e25bcdf801f7116ab": "8fd43971fec314b4b3498254010ffcf9",
".git/objects/e5/2aa5752d17b347e5eec337ca04240ddba299d3": "a58f564cc78d8bf5afa0689a4bc48165",
".git/objects/e5/7485107018ec6ceae6623c15325258b22c9d31": "d5ec1da26420f50cd85ad60fd5363509",
".git/objects/e5/894acbc9982c9e4597042f19f8f3f8fa481866": "c3aee95b0444f0e7f94c194fc1f80250",
".git/objects/e7/527cd90ddadce69036f358a4ce2b4633faf1b9": "15c178519855f303ec108814b2c114ed",
".git/objects/e8/20dc2493d58b752bc2d27f01af51d13b191d42": "ad62510c14301088ab7b8edd1dcc9352",
".git/objects/e8/464de07ab50f566beee67fcb6217b84b2173b3": "504589f537aab82448ab0fb1f40dbe51",
".git/objects/ed/283c0f1cfae22bd89e3cbfb088cd92320c612c": "0fb2e72f185d53b2db9cfc6de502a027",
".git/objects/ed/853bc069ba5ee9c80a690af5bca0c727e4e210": "746e2a5359ccf63195582cee168b4a81",
".git/objects/f1/eea6cef2d60d2ce44b4b8f0bfd42f6d7838f8c": "578332b246faa8826fb2183d6116c9d9",
".git/objects/f2/27ca55b12c2dbd388a4dad63e7dfc1cb72063b": "56b872858541e3b82209031dd3767cb7",
".git/objects/f2/f61878d0b19940073c0858b128c762370fcf44": "96b2ef0331697919e4b4c3dfc1c6628f",
".git/objects/f3/8eceb21b209f2a16a02ffadb63c5f16adbbc89": "df8f07c4491cd6885ff5fcb3fd80b309",
".git/objects/f4/5a0c1e89d0731858842d3fb3f0ab04348a02b4": "4956e43f86333fab76866dedae269acc",
".git/objects/f7/8318994ba16890db702665168251c44466f31d": "2b2d281afb5df5935e38d0d72bd22272",
".git/objects/f9/b45bbcb0e4b3b1c65f7893bb39cc0b4eb88dd1": "62b976a46a7bd77bcd116211d1fc7676",
".git/objects/f9/cfeb3bf0c19aab6a0c0cf310d05b933c211b7a": "2d9e903efad99ea45b16ad5ea16dcf1b",
".git/objects/fb/7924fc2dc40986652d90d2ad0b5881c461fdb3": "8ebe17c3b53b7711c6c3ffd7501196ed",
".git/objects/fc/bfb57fede1bb0842e7b7c547bff90634e8926d": "7f62bd85450fafe88736227f3a574d43",
".git/objects/fd/a2b614548acd935e1c207e3c4c1991467cf20f": "17f3323c81c086028ac880a0a3692d13",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.idx": "c89ae881b0f2866cc6a7a9722b716d68",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.pack": "0c7a9ae1ac72bc226f7157ea24adb20a",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.rev": "ce0d5cd928358b7671be581be04391d3",
".git/refs/heads/main": "1721aa4be8cc46fac98ea020630857df",
".git/refs/remotes/origin/main": "1721aa4be8cc46fac98ea020630857df",
"assets/AssetManifest.bin": "5f0c8e7afa982d8caca91ebec86dccff",
"assets/AssetManifest.bin.json": "357a3d21ee1092474ff6bb3017045cbc",
"assets/AssetManifest.json": "174686d22a9d59b06060d4a5df0921db",
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
"assets/lib/img/game_bg%2520-%2520Copie.png": "3c4d079660a7952c91dfd18194dd34ec",
"assets/lib/img/game_bg.png": "93eb58498ea8709eb291b7556704616f",
"assets/lib/img/player_card_bg.png": "a7d264bfdfb13fbe49e950e4cbe0169f",
"assets/lib/img/splash.png": "6c2f3bc0f74015aed80511290b4a2ac5",
"assets/NOTICES": "da2b10dc4a409d181f1977ec5af206f2",
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
"flutter_bootstrap.js": "54a6e9cd7eaa3fae8c186df32d058734",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5df77ae1f6c6ad0775c47e1d30c95faf",
"/": "5df77ae1f6c6ad0775c47e1d30c95faf",
"main.dart.js": "d39c5dc4de607c3771e5ef48bd6a2b2a",
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
