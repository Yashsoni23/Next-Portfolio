if(!self.define){let e,a={};const n=(n,i)=>(n=new URL(n+".js",i).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let o={};const r=e=>n(e,s),f={module:{uri:s},exports:o,require:r};a[s]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ErrorMemoji.png",revision:"b285ed55282c8b07dae8ac40a8658083"},{url:"/HeyMemoji.png",revision:"de1a53199eb055ed0f10b5c5bb85ac20"},{url:"/HeyMemoji.webp",revision:"a6996715d9a015d91bea18deda9cbe73"},{url:"/LoveMemoji.png",revision:"022c443cc0cd4ad9e04d1d6ed687425f"},{url:"/Profiler.PNG",revision:"cfa21f401a93abc46c2ba5da45e27629"},{url:"/ProjectMemoji.png",revision:"492cdae33a7ad0c732daaac16f291cc4"},{url:"/SketchesMemoji.png",revision:"7af3160fdad68df196042a7b77a2fdb6"},{url:"/ThanksMemoji.png",revision:"a1ef2b00f900518587a7e6282210fc80"},{url:"/_next/static/063ze7GG4cLajM6H3nUGQ/_buildManifest.js",revision:"c9943a3190a9fab5699311b0f3a21153"},{url:"/_next/static/063ze7GG4cLajM6H3nUGQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-3f0d6321dd9c79a1.js",revision:"3f0d6321dd9c79a1"},{url:"/_next/static/chunks/545f34e4-c1135ceb05436843.js",revision:"c1135ceb05436843"},{url:"/_next/static/chunks/597-8562731c528e150d.js",revision:"8562731c528e150d"},{url:"/_next/static/chunks/949-452331296632d54a.js",revision:"452331296632d54a"},{url:"/_next/static/chunks/d0447323-cf99fe1d10bcb6b8.js",revision:"cf99fe1d10bcb6b8"},{url:"/_next/static/chunks/d7eeaac4-62f0e34a754c356b.js",revision:"62f0e34a754c356b"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-170e605b76287f41.js",revision:"170e605b76287f41"},{url:"/_next/static/chunks/pages/404-24e69b014bfc09b7.js",revision:"24e69b014bfc09b7"},{url:"/_next/static/chunks/pages/Blogs-077d77a8df044d9d.js",revision:"077d77a8df044d9d"},{url:"/_next/static/chunks/pages/Blogs/%5Bblog%5D-32bc59bfee05aa7e.js",revision:"32bc59bfee05aa7e"},{url:"/_next/static/chunks/pages/Footer-adec93a3a6b73094.js",revision:"adec93a3a6b73094"},{url:"/_next/static/chunks/pages/Home-ed6e42f7e72208ee.js",revision:"ed6e42f7e72208ee"},{url:"/_next/static/chunks/pages/Loading-f15480a098f2bfdb.js",revision:"f15480a098f2bfdb"},{url:"/_next/static/chunks/pages/Navbar-6b833d30b53eef27.js",revision:"6b833d30b53eef27"},{url:"/_next/static/chunks/pages/Profiles-a34da184a269dfde.js",revision:"a34da184a269dfde"},{url:"/_next/static/chunks/pages/Profiles/%5Bprofile%5D-5a61f2ab810de3c5.js",revision:"5a61f2ab810de3c5"},{url:"/_next/static/chunks/pages/Projects-17b3a39df7053534.js",revision:"17b3a39df7053534"},{url:"/_next/static/chunks/pages/_app-952611d47dea8099.js",revision:"952611d47dea8099"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-9a3e4224c1758a83.js",revision:"9a3e4224c1758a83"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/b72c4286ab1aa643.css",revision:"b72c4286ab1aa643"},{url:"/as.webp",revision:"1ff7566a36e478aa17f3bb943763e305"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon/android-icon-144x144.png",revision:"c3a5f6528638980bffbd940a3a6dc6a8"},{url:"/favicon/android-icon-192x192.png",revision:"35ddafe100232859d157bbed757b6333"},{url:"/favicon/android-icon-36x36.png",revision:"a39bd2f934205aff20b3246b7f386a93"},{url:"/favicon/android-icon-48x48.png",revision:"39af6d2961c7f845004910c6380da207"},{url:"/favicon/android-icon-72x72.png",revision:"9b7c0de5ed31da7ec3c315059440cbf6"},{url:"/favicon/android-icon-96x96.png",revision:"d5bbce64f3cb4caea1576f5a73f63605"},{url:"/favicon/apple-icon-114x114.png",revision:"78f3975c0618f27d90c6674e47ced2b7"},{url:"/favicon/apple-icon-120x120.png",revision:"c8f455ca472b3907d0adb2b1d70b82af"},{url:"/favicon/apple-icon-144x144.png",revision:"c3a5f6528638980bffbd940a3a6dc6a8"},{url:"/favicon/apple-icon-152x152.png",revision:"6a7f3e1d035da97b0064b00f37c8300d"},{url:"/favicon/apple-icon-180x180.png",revision:"45f0465bd3d6346c9fe4713b30f84612"},{url:"/favicon/apple-icon-57x57.png",revision:"5c24f9d2acf91d6f6432b0abbb58e92f"},{url:"/favicon/apple-icon-60x60.png",revision:"34f57e31471b9c10413112b6a2e576e2"},{url:"/favicon/apple-icon-72x72.png",revision:"9b7c0de5ed31da7ec3c315059440cbf6"},{url:"/favicon/apple-icon-76x76.png",revision:"0e02338776da1b0638fe8ab3622e71d6"},{url:"/favicon/apple-icon-precomposed.png",revision:"2123e35d5ff704f0b473657ca59d0dfc"},{url:"/favicon/apple-icon.png",revision:"2123e35d5ff704f0b473657ca59d0dfc"},{url:"/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon/favicon-16x16.png",revision:"ccf924a214b64cdfd508a4ea2778e7a8"},{url:"/favicon/favicon-32x32.png",revision:"d6c8dd5c784734112dad21399363610f"},{url:"/favicon/favicon-96x96.png",revision:"d5bbce64f3cb4caea1576f5a73f63605"},{url:"/favicon/favicon.ico",revision:"437edb6a25407557e30be6118a98d133"},{url:"/favicon/manifest.json",revision:"43bb4c2b83e751084f8c333138d1a0d5"},{url:"/favicon/maskable_icon.png",revision:"856c235319c0ffe2a7fd4c2627ac7978"},{url:"/favicon/ms-icon-144x144.png",revision:"c3a5f6528638980bffbd940a3a6dc6a8"},{url:"/favicon/ms-icon-150x150.png",revision:"2f8160496ca66cb47385676285a2f111"},{url:"/favicon/ms-icon-310x310.png",revision:"45f742083f0f2540fffd17e040cb2218"},{url:"/favicon/ms-icon-70x70.png",revision:"c5443064c837a8a00ad6d5de62586e6b"},{url:"/flutter.png",revision:"4262c71228b7aa391e995fe5f1d57795"},{url:"/graph.png",revision:"a5f556527f8456bc901033e68f902362"},{url:"/hcj.jpg",revision:"2edb289ab1972695994916043af21501"},{url:"/hey.png",revision:"d7effcfa49d39b59c2e540d91971708d"},{url:"/img1.jpg",revision:"de80e0fa5e703b06057759822071a11b"},{url:"/img2.jpg",revision:"ff87eec47c26c0a7dc81d78b6a67ad56"},{url:"/img3.jpg",revision:"2787ce6923c818c58386f992c5eb5b6b"},{url:"/livechatlogo.png",revision:"0c1d7ede3570bc2a832f2acdb9503ada"},{url:"/mongodb.png",revision:"318c4fb84e058125e903f2f73cd5a090"},{url:"/nextjs.svg",revision:"b5d25ca3c0decaea251b75c69a934e8b"},{url:"/nodejs.png",revision:"d1c1e9007502042d1a6f0b57978ef1cd"},{url:"/nodejs1.png",revision:"c43b43e6e7bcb807e193d76a5676fde6"},{url:"/python.png",revision:"3e80a38a04cfe35f199a13de12f3ef6b"},{url:"/react.svg",revision:"ee61ca49ec2188e4ac026017e8b315b7"},{url:"/swift.png",revision:"07ac80b374f2b8a725368527cb5d40ac"},{url:"/tailwindcss.svg",revision:"760a3ee424f40cd7b8da50ac4818592f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
