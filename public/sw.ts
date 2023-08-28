const urlsToPreCache = []

const cacheName = 'v1'

self.addEventListener('install', e => {
  // The waiting phase means you're only running one version of your site at once,
  // but if you don't need that feature,
  // you can make your new service worker activate sooner by calling self.skipWaiting().
  ;(self as any).skipWaiting()
  ;(e as any).waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(urlsToPreCache)
    }),
  )
})

self.addEventListener('fetch', event => {
  if (true) networkFirst(event)
})

self.addEventListener('activate', e => {
  // ;(e as any).waitUntil(
  caches.keys().then(keys => {
    return Promise.all(
      keys.map(key => (key !== cacheName ? caches.delete(key) : null)),
    )
  })
  // )
})

function networkFirst(event) {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        return caches.open(cacheName).then(cache => {
          if (event.request.url.startsWith('http'))
            cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      })
      .catch(() => {
        return caches.match(event.request)
      }),
  )
}
