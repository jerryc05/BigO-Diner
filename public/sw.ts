const cacheName = 'v1'

self.addEventListener('install', e => {
  // The waiting phase means you're only running one version of your site at once,
  // but if you don't need that feature,
  // you can make your new service worker activate sooner by calling self.skipWaiting().
  ;(self as any).skipWaiting()
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

self.addEventListener('fetch', event => {
  ;(event as any).respondWith(immutableAwareNetworkFirst(event))
})

async function immutableAwareNetworkFirst(event) {
  if (!event.request.url.startsWith('http')) return await fetch(event.request)

  const cache = await caches.open(cacheName)

  //
  //
  // Intercept immutable requests
  const inCache = await caches.match(event.request)
  if (inCache && inCache.headers.get('cache-control').includes('immutable')) {
    return inCache
  }

  //
  //
  // Attempt network
  try {
    const resp = await fetch(event.request)
    const cacheControl = resp.headers.get('cache-control') || ''

    // Cache them if we can
    if (
      !cacheControl.includes(
        'no-store' /* IMPORTANT! Those requests are meant not to be cached */,
      )
    )
      cache.put(event.request, resp.clone())
    return resp
  } catch {
    return inCache
  }
}
