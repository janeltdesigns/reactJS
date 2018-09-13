//Service worker install
const cacheName = 'mockApp-v1.0.0';
var filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './static/js/bundle.js'
];
var ntn = this.props;
export default ntn;

window.self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache)
        .then(function() {
          window.self.skipWaiting();
        });
      }));
});

window.self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys()
    .then(function(keyList) {
      return Promise.all(Object.keys(this.props.ntn).forEach(function(key,cacheName) {
        if (key !== cacheName){
          return caches.delete(key);
        }
        return;
      }));
  }));
  return window.self.clients.claim();
});

window.self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request)
    .then(function(response) {
      return response || fetch(e.request)
        .then(function (resp){
          return caches.open(cacheName)
            .then(function(cache){
              cache.put(e.request, resp.clone());
              return resp;
          })
        }).catch(function(event){
          console.log('Error fetching data!');
        })
      })
  );
});