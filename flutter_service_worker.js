'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dc50426b6fe0506ee33b5f2aff3bc588",
".git/config": "b60d87ac954bc894e0627c576446fb3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "084153c6e09e584ac7a7e747d6783c4b",
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
".git/index": "df7d83c092a35f71d2cf377b0bdea22d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d74fefcf4a02ae71207fb51f61f5d646",
".git/logs/refs/heads/master": "d74fefcf4a02ae71207fb51f61f5d646",
".git/logs/refs/remotes/origin/main": "0b2c7efbbcb3361c436f35cd48ea11b7",
".git/logs/refs/remotes/origin/master": "73f04c7a08c8705c8bfb8c8660b977cd",
".git/objects/12/fb35ba177f53442c9885293eb1c1ee70a78ef4": "77b0b72aa6fb7e40dac7dba0d5752498",
".git/objects/21/5efcfdd40d54e9db101a3bfb5dd62ec443bc38": "14d67d7f2c29e8402b94845777e759c0",
".git/objects/2e/df7cff339957e62ee660fb3683194085388c07": "0b6eb0b15ea062b4776e4ab1b2769d88",
".git/objects/3c/ef8209ae47c9064d305dfc7dc7023d02739506": "fbe6d0befff680c8451f893bb6401a6e",
".git/objects/4f/4941413361f7be7c681e84cd63ca60a9cfe476": "251bb22ea50f819215b7bbadadf584b1",
".git/objects/51/b925e494431ea00667c8e14e90512b492c9e06": "49159886104cbd3f8fb9fc32266532f4",
".git/objects/55/11c2c1bad2cf0402655bb31ab6aebb7b74ffce": "e6e41928756c851ffda26a8db355b6e6",
".git/objects/59/312999a3183a98b08c28dc4303afab4b398ccb": "356f33afbaa17004b7f964032c3c95a3",
".git/objects/6a/a14dd25d869aacb19d1d8d075bc2a953abf407": "1085cd169ec676f3716bda7f4435d49c",
".git/objects/6d/3718c9b2e6db46da6284d04d57bfb69f7123d6": "2e9cff0f63371ea7493a30de622c4a28",
".git/objects/73/2b71f4b9833c647d3806492649396af1cc2883": "6294a0b4de20911920679a0b1028bd78",
".git/objects/74/dee750e2a7811519a0feb5931d5fc7fbc1771a": "bd9587905f7803cab7536a2dccfd1f31",
".git/objects/78/c6a74c774cc7049ac379696a6473f885adb7e4": "74ea4b50ee31ea4f4b7f5a250e1bb824",
".git/objects/81/be069a37648ce85040552a79ad3624232784e3": "4cb956f795c3f11fc96e6b026e48d1f3",
".git/objects/84/b74835a8e61d94835c93dbded5be7f9a03890d": "64d35ad24bf97fe8f8bb2c3723334b14",
".git/objects/89/4ea4a7517f4b5c200b0a8a833e51af69970ed9": "33c0c5fdb6b54f1b4584baabff0919fc",
".git/objects/8e/d9a757050c5e444e57a1de19c0e744ebc4978f": "36dfb373cdc2da93f2b7ef4d2e64523d",
".git/objects/92/0c6b037a863bcd465e6bf4ed2dbd003f333f1c": "9028c1f6c8ef54dceb047339c6b7dddd",
".git/objects/92/e3755941633b6ee61a75a4e817d15e5bf7f494": "3df7e2c9aa79de20ce4745b8bf100338",
".git/objects/93/774e075f10a5ea2bfed371f03096e4465a5bf3": "b9823d7398e6b17555b5a28cef6761f1",
".git/objects/94/403fa4adbe8ee593a82553fde59f0db647a900": "d0eb7dada9f4b841cf30b70ce660b163",
".git/objects/9c/51ac2bc1d24e9c260efb2e370aec29e5beede8": "f7ae1c33d366aec6a17c76fc8b7a591f",
".git/objects/9d/7ff2415378b94199833ebe976b7a7a816c8ea0": "6b769b69764430926c8201a119bb3a02",
".git/objects/a3/bcb1ba9c208dafcea983d5632433c77cec66e9": "80d29d4bde14833277eddc86cfea1b02",
".git/objects/b3/7d59e262caab831901982828ceb2fffc83327c": "7d9c74e9457081b3c80c6d1b81871006",
".git/objects/b4/2aad625d1fe689fe76cb4ae851f2fa7e09f7d7": "87e7995e24ca01efdfcdc56778b73c2a",
".git/objects/c1/07e80392843ec9419a6c8792251e10fc37c947": "e28dab7718aa24fdf1a467aa0b240e93",
".git/objects/c1/a7d86018225f880bfa23f3c2d87115dd81b39e": "2c94880a325ff2f9e9660692bebd0978",
".git/objects/c2/7f3d9d04bf3ab426efe9866f7e56bc7370bc29": "21ed8410293dee53f6f2103aff8e4361",
".git/objects/c2/a48e7370678bc993ab5a124f9619b0a39f9cd4": "d8d083495d92c323843d7b2555d1d59d",
".git/objects/c2/dc1a9c8227ebe24da388a65577ee913c400a1b": "03d2561a3fc820be5de55da3afcea061",
".git/objects/cb/4c90199f4d675ae23f12b42042f08cf2fc80a7": "6d7069504ccc7f5a317ebc44e7642772",
".git/objects/cb/b8e245d236ee8a3301b9714e3c73cef1307a56": "b05cf75e0964cf7095c8a9be7e60ce7b",
".git/objects/cf/ebe90dd10e64f3350359db51617641d5ef7c00": "e58b0c71215de7d2591c3556e91b4408",
".git/objects/d6/852cf7c840add9f6a84956300a61b0e383df1c": "594da48138883ac07996c24babdd3dab",
".git/objects/d9/dd7f55284d32a0e41a6c71f0ad2f521601614d": "4649f0f622c9519f1a24a7950200b2e8",
".git/objects/df/e54caac036449ef84554e32d22fd3d7a91b965": "224c41dda3cf2387928630391f5020aa",
".git/objects/e0/d3f15772145fc60289a63eb822f4bace89aa99": "16d24959b282c139a76da08771c93716",
".git/objects/e2/f1ce141e063daa68c6af5c9b06232fd87116c4": "53b5ce9d00b828d7c2507954dfa3d8a4",
".git/objects/e6/377e38b32d89ee2b4a04aab83b2ccd45c0df5e": "eb0686f3dd8218d58080249beda3c521",
".git/objects/eb/114a9a98648520049f75bb5fa61a644b275404": "0f03d2789dc1555ac2ec757cd9619aa8",
".git/objects/f6/2146b52c50cc7287226c53dce8d3736aedfd73": "24c5a32bdefc25bf3dbcc95c33dcb0a9",
".git/objects/fb/61825aeda97da8020e3e46ce70b4e572f29a67": "e99745286fa1a643b83f8699a49926a1",
".git/objects/pack/pack-a5d559518b357b8c8c29bd9ab088ec6e62de281e.idx": "0c463efe10d606eae12b9421ad3fa118",
".git/objects/pack/pack-a5d559518b357b8c8c29bd9ab088ec6e62de281e.pack": "fbc0b68cfcb606354e7c68dc47a236f0",
".git/objects/pack/pack-a5d559518b357b8c8c29bd9ab088ec6e62de281e.rev": "988bacea0c3822127a7bbe673f8403ec",
".git/ORIG_HEAD": "ec67799d353c475a3ae3d6a4513a4d55",
".git/refs/heads/master": "6e8b1143b3793f7bdf4304f7ba62916a",
".git/refs/remotes/origin/main": "6e8b1143b3793f7bdf4304f7ba62916a",
".git/refs/remotes/origin/master": "1a7eb99da15d1b2671cc9d479e93e6ca",
"apk/app.apk": "ba4b0276f56c7ccd99330a55a3539b26",
"assets/AssetManifest.bin": "467c63a9d1c78cf528a22c7944f6d05a",
"assets/AssetManifest.bin.json": "5766730b0f265edc92eebd4198d6f5f0",
"assets/AssetManifest.json": "18eabba3ec0fad2b5949a27bdd54c388",
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
"assets/lib/img/profile_avatar.png": "1708a82b4d0a448c7f3449dde65d27df",
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
"flutter_bootstrap.js": "f8dd4280ccddf91827a37918a2717377",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5df77ae1f6c6ad0775c47e1d30c95faf",
"/": "5df77ae1f6c6ad0775c47e1d30c95faf",
"main.dart.js": "062b3f980a249f8ddcb5d6cd8e1aea0c",
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
