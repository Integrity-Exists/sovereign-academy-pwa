self.addEventListener('install', function(event) {
  console.log('💾 Service Worker installed');
});

self.addEventListener('fetch', function(event) {
  // For now, pass through all requests
});
