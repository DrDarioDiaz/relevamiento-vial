/* Relevamiento Vial 2026 — Service Worker
   Permite que la aplicación funcione sin conexión luego de la primera carga.

   IMPORTANTE: si en el futuro se modifica index.html, hay que subir el número
   de VERSION (v1 -> v2 -> v3...). Eso obliga a los teléfonos a descargar la
   versión nueva la próxima vez que tengan señal. */

var VERSION = 'rv-v2';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

/* Instalación: guardar los archivos en la caché del teléfono */
self.addEventListener('install', function (ev) {
  ev.waitUntil(
    caches.open(VERSION).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* Activación: borrar cachés de versiones anteriores */
self.addEventListener('activate', function (ev) {
  ev.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== VERSION) return caches.delete(k);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Estrategia: primero la caché (rapidez y funcionamiento sin señal),
   con actualización silenciosa en segundo plano cuando hay conexión. */
self.addEventListener('fetch', function (ev) {
  if (ev.request.method !== 'GET') return;
  ev.respondWith(
    caches.match(ev.request).then(function (hit) {
      var red = fetch(ev.request).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copia = res.clone();
          caches.open(VERSION).then(function (c) { c.put(ev.request, copia); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || red;
    })
  );
});
