// Minimal service worker
self.addEventListener('install', e => self.skipWaiting());

self.addEventListener('fetch', e => {
  // Let all requests pass through to network
  e.respondWith(fetch(e.request));
});

self.addEventListener('activate', e => {
  self.clients.claim();
});
