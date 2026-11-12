/* Hira Exam Papers - service worker v2
   FIX: Firebase sync requests (and any other website's data) are NEVER cached any more,
   so every phone / PC always gets the latest papers. Only the app's own files and the
   OCR scanner library are cached for offline use. */
const C='hms-v3',A=['./','index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>clients.claim())
));
const put=(r,x)=>{if(x&&x.ok){const c=x.clone();caches.open(C).then(y=>y.put(r,c))}return x};
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!='GET')return;
  const u=new URL(r.url),same=u.origin==location.origin;
  if(r.headers.get('accept')=='text/event-stream')return;
  if(same){
    e.respondWith(fetch(r,{cache:'no-store'}).then(x=>put(r,x)).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));
    return;
  }
  /* only the OCR scanner files and Google Fonts (Arabic/Urdu fonts) may be cached; everything else (Firebase!) goes straight to the network */
  if(u.hostname=='cdn.jsdelivr.net'||u.hostname=='tessdata.projectnaptha.com'||u.hostname=='fonts.googleapis.com'||u.hostname=='fonts.gstatic.com'){
    e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>put(r,x))));
  }
});
