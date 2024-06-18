let cacheData = "appV1";

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/manifest.json",
        "/favicon.ico",
        "/" // Make sure the root path is cached too.
      ]).catch((error) => {
        console.error('Failed to cache:', error);
      });
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Optionally, you can cache the network response here
        return networkResponse;
      }).catch((error) => {
        console.error('Fetching failed:', error);
        throw error;
      });
    })
  );
});
