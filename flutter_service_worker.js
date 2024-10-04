'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c3ed1236eee5f44370332f64982f96ed",
"manifest.json": "ee824bfb1055d504c1ccdc2e21c801a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "a7f3192b5c8f7a5fd73d35bfeb6f908a",
"index.html": "d12fdc6adaa1eceee3f06669daf0ec80",
"/": "d12fdc6adaa1eceee3f06669daf0ec80",
"version.json": "3488143481b2fc8e1711df6b933507a4",
"assets/fonts/MaterialIcons-Regular.otf": "3b8b15d8b881b6da76de47bf4f799762",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/images/boy.png": "dff776063372b9f469cc003622b85b43",
"assets/images/contact3.png": "8610910ef0c239b7885b7bb31e86f84a",
"assets/images/computer3.png": "a13aaf0b1f1fe0e2de54a0af96814070",
"assets/images/delivery.png": "f7fa2da66257d0eb041d9b07501c05f0",
"assets/images/tombola2.png": "f91f672ad47a9c31ec31e6271f273654",
"assets/images/logo_black.png": "ca49bd3d5a4d43b7c78ce6ade7b1a3a5",
"assets/images/fr.png": "bdceecd04ecbc9ea4c68e4d63d05894b",
"assets/images/en.png": "648cc063e344c88bb5d68d7fce3dffcf",
"assets/images/france.png": "1e2e8f9ee8a3348e62d56dd626a59e51",
"assets/images/beer.png": "e7cd7f8f01fba76b51bfd1cdf71ff683",
"assets/images/computer2.png": "baa21cd9b3b6ccd5f11f911bfae6b07f",
"assets/images/atm.png": "41521792e9b21eb4d65ae3c73c12d1ea",
"assets/images/programmer.jpg": "60e33f5f7c327c1f5f56d52526a1fbb9",
"assets/images/movie3.png": "db52002f3b6947068b81a76aeba347ab",
"assets/images/logo.png": "61c169f1e2249135f03287f8b071d47d",
"assets/images/logo_white.png": "8f1fed586521762912ec401e1ae33dce",
"assets/images/cara_coroa.png": "a81590fedf25a5d24467c1db450cac5f",
"assets/images/arte.png": "b4946107c69629c6e1c574496044e0ee",
"assets/images/english.png": "5528a7a0263a2be7b96b78d9ee676a31",
"assets/images/computer6.png": "081cb002e15f0e446b2e1954dd0aec9d",
"assets/images/lit4sys_screen.png": "0c042f876457ff30a9b4b6c32c5755d4",
"assets/images/lamp.png": "a986657924339e32f8718c488f486491",
"assets/images/computer13.png": "554c74ed88d0dc3deca0e18bf7d7382d",
"assets/images/robot2.png": "b9ff51f6f31783de53b6669022495d93",
"assets/images/qrcode.png": "3dd491bdfd15ab30a89638ab82e1b5ce",
"assets/images/lit4sys.png": "0e4313db198b721aff51786e81fce946",
"assets/images/cpumonitor.png": "1890fb8d4d624c8feed3b68d05d113f5",
"assets/images/eu2.png": "6f39860ce1b268f4f800b82096d609a6",
"assets/images/kingdom.png": "0539d02ef61b3eebe52137e134bb1751",
"assets/images/computer7.png": "89d5c6d4d366c9edd21d95fd83767c6b",
"assets/images/calc.png": "f943f42da4e6818f8273cc29149e5ae8",
"assets/images/email.png": "ba45a1047667b72517d429ec2b3bb881",
"assets/images/linkedin.png": "eaf39320e628f8e417be3078335df699",
"assets/images/en_logo.png": "11a923e1be5e8f3683b698c0a8b62e4a",
"assets/images/github.png": "a17150d90465d2bb381781ab5baf0147",
"assets/images/lamp2.png": "0396b6ecba5447a8ebff547a52b18e32",
"assets/images/new_logo.png": "660ec13b76cdc972c57daa59992dd416",
"assets/images/imc.png": "e6d1b98987b2c4cd76ae39602022f975",
"assets/images/telegram.png": "c0ff1cace75598219eb45d5cd0d6cb2e",
"assets/NOTICES": "3b28601ec220b714ba3049c66ba7e2b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "47290ab58c1a8b6868d84f8e17a1e9f0",
"assets/AssetManifest.bin.json": "9c5f137ebe62032dbf7658830ba49dbe",
"assets/AssetManifest.bin": "bd0e218ba5a5f2406da49e5f9058fc82",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
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
