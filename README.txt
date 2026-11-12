HIRA EXAM PAPER GENERATOR - INSTALL GUIDE

FILES: index.html (the app), manifest.webmanifest + sw.js + icons (make it installable).

A) QUICKEST (any device, no install): open index.html in Chrome/Edge. Works offline. Not installable in this mode.

B) INSTALL AS APP ON PHONE AND PC (recommended):
 1. Upload this whole folder to any free static host (Netlify Drop: app.netlify.com/drop, GitHub Pages, or Cloudflare Pages) - gives an https link of YOUR school, not an AI link.
    Or on the school PC run in this folder:  python -m http.server 8080  then open http://localhost:8080 (PC only) /
    http://<PC-IP>:8080 on school Wi-Fi (phones need https to install; use the host above for phones).
 2. Android: open the link in Chrome > menu > Install app / Add to Home screen.
    PC: open in Chrome/Edge > Install icon in the address bar (or the Install app button in the app's top bar).
    iPhone: Safari > Share > Add to Home Screen.
 3. After first open the app works offline.

C) REAL WINDOWS .EXE (optional, needs Node.js + internet once on one PC):
 1. Copy this folder's contents so you have:  desktop/package.json, desktop/main.js and an 'app' folder next to main.js holding index.html + icons.
 2. In that folder: npm install   then   npm run build   -> installer/portable .exe appears in /dist. Send the .exe to staff.
 Android APK: upload the hosted link to pwabuilder.com and download the Android package.

SCANNER: needs internet the first time (downloads the OCR engine), then it is cached. Always review scanned text.
DATA: papers sync automatically through Firebase (cloud) on every device. See SYNC-FIX-INSTRUCTIONS.txt.
