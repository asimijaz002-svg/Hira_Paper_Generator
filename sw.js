const C='hms-v1',A=['./','index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
const put=(r,x)=>{const c=x.clone();caches.open(C).then(y=>y.put(r,c));return x};
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;const same=new URL(r.url).origin==location.origin;
e.respondWith(same?fetch(r).then(x=>put(r,x)).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))):caches.match(r).then(h=>h||fetch(r).then(x=>put(r,x))))});
