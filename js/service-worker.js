

Skip to content
Using Gmail with screen readers
Conversations
17% of 15 GB used
Terms · Privacy · Program Policies
Last account activity: 0 minutes ago
Currently being used in 1 other location · Details
const CACHE_NAME = 'sovereign-academy-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/contact.html',
  '/css/style.css',
  '/css/responsive.css',
  '/js/SmartSearch.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/offline.html'
];

// Install the service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch and serve from cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(response => response || caches.match('/offline.html'))
    )
  );
});

// Activate and clean up old caches
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
service-worker.js
Displaying service-worker.js.
