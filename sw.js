!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/ts-jest/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"fb4c345afdbe0aeb5970b8bb62623ce1","url":"00e7239c.cf9eaf36.js"},{"revision":"f4c9d70e279d81072b02956e823469b7","url":"03be7dae.da62d68d.js"},{"revision":"a1eb24ab7a5975187496b110293fe3f2","url":"1.1d461c47.js"},{"revision":"9940de49236229883c48bd0b9ab643a0","url":"10aeaaf3.8201c902.js"},{"revision":"20d9e47672c340a64067f25b7d02ac6a","url":"1165ba55.0e32f7f3.js"},{"revision":"3cb37cf2a91d0ef1ac32ffd7de628b81","url":"17896441.1a9524f7.js"},{"revision":"5ec44a29a00f6b99bd6d50e3a68afdbe","url":"1854c3e7.ed3d5f89.js"},{"revision":"55466bf4c56640b499d9656c425d6fc5","url":"18b93cb3.e08efc52.js"},{"revision":"0c3734726ee08ac515c23a1b91a10cf9","url":"2.37a12a34.js"},{"revision":"c34c8a6e15f8d89cdb0ed8ed34bd7ae3","url":"295b567d.4f845a6b.js"},{"revision":"d5ee298ed0a8c37d068283592f2c832e","url":"2b94ed59.e6026d18.js"},{"revision":"fc6893bdb8901895021dcb4b47837281","url":"2bccb399.56f795d2.js"},{"revision":"062bb2e0e521a70cfb65a1f13bd91052","url":"3bfdd655.47e94bad.js"},{"revision":"67baf828a6bc155e18c8e14d67b5b675","url":"3e930f87.2caaced9.js"},{"revision":"e338ab9895871acb9780a1cdcb323131","url":"404.html"},{"revision":"e77255bd3594d935132dff9cfa3e5763","url":"4040fa6b.0ebc1e01.js"},{"revision":"33c2df5d5041a20966dae686ab4b2a70","url":"44207808.45c5574a.js"},{"revision":"b8a09e5acbe310c5d91cf1da880fa80a","url":"44d840ac.7531051a.js"},{"revision":"a2b91f343da7fcc4a80a97aa6e87ccfa","url":"4aabdf82.0228f715.js"},{"revision":"e422806cda8f0c2ec44ed0011a7bcaab","url":"4c23203f.928e1902.js"},{"revision":"7fd425b5f0c9407e6bea2df23dd26c4f","url":"4d54d076.e6323694.js"},{"revision":"e2fa029909c4529dd635b657bd849088","url":"4e0c07c5.92f4b69f.js"},{"revision":"a52d06adbb17ca7c4e08d79edd761cd2","url":"544d8072.21133469.js"},{"revision":"3fc10bd955c2af7afffef1f22a3b925f","url":"54f44165.417b292a.js"},{"revision":"03b1eee7e40eab3320adbce5ef411aaf","url":"56.22d3a4de.js"},{"revision":"8a08420ab4af83b7951284532a5d653b","url":"57.8cac024d.js"},{"revision":"f48e2d7f75e63622a2421baf6f390142","url":"58.9c13c867.js"},{"revision":"6c54804765ade7d9b3e8cbda491d95b4","url":"59.dcbed1bf.js"},{"revision":"cced4a201558d26837ae02e4d39ee860","url":"5bf3837a.554ed453.js"},{"revision":"8b32888e8a18208d1244fffd8f0cce63","url":"60.5d562a5f.js"},{"revision":"7c7c444a91574fda72673f1882e3b2ea","url":"61b42bb5.bbb1bf8c.js"},{"revision":"44af3a71194d54fd9713333613d7eeaa","url":"6789ef91.7dbad1a4.js"},{"revision":"9014f53559070f2554e206a7e7bad0fe","url":"6cb85840.9c67980b.js"},{"revision":"492bc1331363fcd3130449daa703eaf7","url":"6f04af8d.9b735796.js"},{"revision":"4269dab5fd8b4b9d5670c2f8a63a65c0","url":"6f82a5f4.04198587.js"},{"revision":"e2038ed39b6b25f51034d61ba9b0ae3f","url":"73f5a02c.1ba878d1.js"},{"revision":"eb4f574afd2b38baca9e00ae7df1431c","url":"75ab14ad.63a6e3c2.js"},{"revision":"64ffba34c756497c6058dd3af020bdb2","url":"7ec61308.72708600.js"},{"revision":"774ee52859733498ec2203ae6c906caf","url":"86b5844b.abe3e15b.js"},{"revision":"ddc38aaa44c53539cb3dd1de95976951","url":"935f2afb.f88c60eb.js"},{"revision":"95fd3c85eb2edd58267e4289c87c458e","url":"978f87b1.7fe6de94.js"},{"revision":"22fd035cdac45286ad5e53e58fda2c59","url":"9920b385.e96450c2.js"},{"revision":"2a1c5b6c78762096133328d180a0a661","url":"a09c2993.bd076755.js"},{"revision":"429c487a69b30a3e5f3698e5f57b69bb","url":"a8429432.0cc9cd85.js"},{"revision":"c634d63ef89d4f75f148678512ab7728","url":"aaf1bd4c.79e9137e.js"},{"revision":"a5d0ce558a85c64a1a859515e088cfd7","url":"c1a7450f.b83e1c55.js"},{"revision":"a92627a5de42c5a376752a0e54ddb733","url":"c4f5d8e4.486fdb5d.js"},{"revision":"e7bdbc46ab865a2e2d8ac4efc3cb6f55","url":"ceaad8ca.51107ed6.js"},{"revision":"5f7cc12f95120a0f9dda418bcf45dbdf","url":"d4836a8e.d75add1c.js"},{"revision":"041f003358a14aace51dafaf147d7183","url":"d9f7da4b.f30ccbe7.js"},{"revision":"29be1453f620ba6d0486c663c5b29124","url":"dcbdd84f.ba3140fb.js"},{"revision":"796099701d617acd1ab9f6a6863e8fba","url":"docs/babel7-or-ts/index.html"},{"revision":"58da66672b5ca5e6285ab3181a61693c","url":"docs/contributing/index.html"},{"revision":"fd2f5bc2996f8a38779e82300fa082d6","url":"docs/debugging/index.html"},{"revision":"d2792035ff9b2f5e49f7e7bac90c8bea","url":"docs/getting-started/installation/index.html"},{"revision":"4afa7da1cb1ad61c18666d58ca19543b","url":"docs/getting-started/options/astTransformers/index.html"},{"revision":"86a164d355d2f032e95ab8e64679fd7b","url":"docs/getting-started/options/babelConfig/index.html"},{"revision":"ad408cb501aae964a3b551043940c3e3","url":"docs/getting-started/options/compiler/index.html"},{"revision":"c1bad21f69e9c851c10e0034161eea53","url":"docs/getting-started/options/diagnostics/index.html"},{"revision":"8e18fc0a3aa6e2daa7d1feabe4dc364f","url":"docs/getting-started/options/index.html"},{"revision":"07ddf73a40c145dd63d9cdb174d88fd2","url":"docs/getting-started/options/isolatedModules/index.html"},{"revision":"5646b2c5446200f886460130a62f22d3","url":"docs/getting-started/options/stringifyContentPathRegex/index.html"},{"revision":"cff1787f6c37963a73992084fce461ca","url":"docs/getting-started/options/tsconfig/index.html"},{"revision":"a09dfe6d04e66854f6844a21c600df4b","url":"docs/getting-started/options/useESM/index.html"},{"revision":"07c44f795f4f4af53fc79dfeba9e1b7f","url":"docs/getting-started/paths-mapping/index.html"},{"revision":"3cab2feaa23497929d503c4120f27e57","url":"docs/getting-started/presets/index.html"},{"revision":"47034327a0aab8ac4bff9da6cedd8d89","url":"docs/getting-started/version-checking/index.html"},{"revision":"d233c84593f4953a67302b31799cc359","url":"docs/guides/esm-support/index.html"},{"revision":"fee7c68404762e6c0fb473d5db1cbfc5","url":"docs/guides/react-native/index.html"},{"revision":"026d139b02ab0eb80bfb0353f10d5312","url":"docs/guides/test-helpers/index.html"},{"revision":"988a73291c995b90f2f9d3413893b68c","url":"docs/guides/troubleshooting/index.html"},{"revision":"b693cd222fd5fcb552c8ac1a6c04cbe4","url":"docs/index.html"},{"revision":"7c362c197a3e17654317a8703f88add6","url":"docs/migration/index.html"},{"revision":"993d7d835cca62e987c0594749659d2c","url":"docs/next/babel7-or-ts/index.html"},{"revision":"605bd205799122455be1f3bc6f2790c4","url":"docs/next/contributing/index.html"},{"revision":"f78a6091308d04247016ae048aa1a336","url":"docs/next/debugging/index.html"},{"revision":"222a6336a462a732ee9d9bfe3e15cc03","url":"docs/next/getting-started/installation/index.html"},{"revision":"06c51ea3bd4f4672fef46e90a9c38f76","url":"docs/next/getting-started/options/astTransformers/index.html"},{"revision":"78af126000f7062c5a20d4a9fcac24f4","url":"docs/next/getting-started/options/babelConfig/index.html"},{"revision":"c9c2b4219ca2546c85db4e85f69d7114","url":"docs/next/getting-started/options/compiler/index.html"},{"revision":"17280dfb79876028610d390bd6b13375","url":"docs/next/getting-started/options/diagnostics/index.html"},{"revision":"aa44b63d84f5b093a82efd5a173ef5cd","url":"docs/next/getting-started/options/index.html"},{"revision":"febde924c7e471e896c30e9a849360ee","url":"docs/next/getting-started/options/isolatedModules/index.html"},{"revision":"f9f6326a8f81e5d112cc87292fb4990a","url":"docs/next/getting-started/options/stringifyContentPathRegex/index.html"},{"revision":"99c3931bea56af25af7d4caa5d5c176d","url":"docs/next/getting-started/options/tsconfig/index.html"},{"revision":"e4b5ff7fc9ffcef64e6800dcf190b490","url":"docs/next/getting-started/options/useESM/index.html"},{"revision":"fc9e8e64ace3e3f02dbab1efe34dea92","url":"docs/next/getting-started/paths-mapping/index.html"},{"revision":"7205f6b2176606316cbab8717fd88113","url":"docs/next/getting-started/presets/index.html"},{"revision":"5b7e501e42c1af46986f65daef5364b0","url":"docs/next/getting-started/version-checking/index.html"},{"revision":"a250d02fa05247af5b06b37e7177a259","url":"docs/next/guides/esm-support/index.html"},{"revision":"b685023a2ca65b5b893480dde4de83ac","url":"docs/next/guides/react-native/index.html"},{"revision":"141fcea99d2a101c8ff50abaa0e2891f","url":"docs/next/guides/test-helpers/index.html"},{"revision":"7d67be5689582b40f4a1b6601acf4b1f","url":"docs/next/guides/troubleshooting/index.html"},{"revision":"b7a2ab16164a6394c40a978e7283a613","url":"docs/next/index.html"},{"revision":"e9b1621a206726e7e6ca110c6ce3a964","url":"docs/next/migration/index.html"},{"revision":"e8666bc1c86acfaeacd1f8753243ea22","url":"docs/next/processing/index.html"},{"revision":"027f193ceadc6f205ec807746b38b0d4","url":"docs/processing/index.html"},{"revision":"2f5d7c3bb6c05a9f931c72cf12830c80","url":"e5e34c6b.7e75acac.js"},{"revision":"3572875d886943a1cb14b3b3ee6f40eb","url":"e8b13364.3857be95.js"},{"revision":"3d6793ba0144402d07bee811ad9eefb4","url":"eabdbf07.1aa11072.js"},{"revision":"dc1629ecf6981b63c064ba704c26a81e","url":"ec6c7123.bbe34d03.js"},{"revision":"df297d7b8152ff89a2152a90c82386ea","url":"f6aab920.af312ae5.js"},{"revision":"8d19eb55282d3cca4f619cb9d44087d6","url":"f7862b07.011c5003.js"},{"revision":"adf1b81d0de8cd2cc436152de3ce603e","url":"f7cb2af4.45c8a54a.js"},{"revision":"5278f6aa1dbb7634f8a95fef3ff1b2d1","url":"fc80686b.3c72855a.js"},{"revision":"1bcc7e383afddcae5a517101e77fca01","url":"index.html"},{"revision":"66d2b5ea1a48adc141411f3286ee61d9","url":"main.8dd10f86.js"},{"revision":"9e8f0f55a28f3749d7906e2dbfbee02d","url":"manifest.json"},{"revision":"386efd489265c402a4e9db3c4098954f","url":"runtime~main.5a556c60.js"},{"revision":"a4d4e7bfcabae6808cbd6943557f0ab1","url":"styles.1ba54064.css"},{"revision":"17c648fe3b958feadb492477dea0d6c1","url":"styles.a06e9ab4.js"},{"revision":"99cc03aceab3dc800e441e63c767333b","url":"versions/index.html"},{"revision":"f8389ca1a741a115313bede9ac02e2c0","url":"img/discord.svg"},{"revision":"5e0e02d0c0f021b2037ed926d68ea1be","url":"img/documentation.png"},{"revision":"a83841c50aa67da6144860bd5031cc53","url":"img/github.png"},{"revision":"6428a0814289f7ba7e3a2134c0f68e1f","url":"img/logo.png"},{"revision":"b9ffd6386b8922473cd7218fb79f11b4","url":"img/logo.svg"},{"revision":"ee83b65c3aed4a45b928a4bebeb97a98","url":"img/pull-request.png"},{"revision":"cce226b035fb4ab5eee43b077db1ba4a","url":"img/troubleshooting.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);