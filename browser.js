// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),d&&u&&u.call(e,r,t.set),e},_=r()?f:c,d=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=function(e,r,t,n,o,i,u,a){var l,f,c,_;if(e<=0)return n;for(l=t<0?(1-e)*t:0,f=o<0?(1-e)*o:0,_=0;_<e;_++)void 0!==(c=u.call(a,r[l],_,l,f,r,n))&&(n[f]=i(c)),l+=t,f+=o;return n};d(p,"ndarray",(function(e,r,t,n,o,i,u,a,l,f){var c,_,d,p;if(e<=0)return o;for(c=n,_=u,p=0;p<e;p++)void 0!==(d=l.call(f,r[c],p,c,_,r,o))&&(o[_]=a(d)),c+=t,_+=i;return o}));var y=p,s=function(e){return e!=e},b=Math.sqrt,v=s,j=b,m=.7853981633974483,g=function(e){var r,t;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(r=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,t=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),t=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),r/t)},h=function(e){var r,t;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(r=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),t=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),t=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),r/t)},w=function(e){var r,t,n,o,i;if(v(e))return NaN;if(e>0?n=e:(r=!0,n=-e),n>1)return NaN;if(n>.625)o=(t=1-n)*h(t),t=j(t+t),i=m-t,i-=t=t*o-6123233995736766e-32,i+=m;else{if(n<1e-8)return e;i=n*(i=(t=n*n)*g(t))+n}return r?-i:i},N=function(e){return w(1-e)};function O(e,r,t,n,o,i,u){return y(e,r,t,n,o,N,i,u)}return d(O,"ndarray",(function(e,r,t,n,o,i,u,a,l){return y.ndarray(e,r,t,n,o,i,u,N,a,l)})),O},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).acoversinBy=r();
//# sourceMappingURL=browser.js.map
