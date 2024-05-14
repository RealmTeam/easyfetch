!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.easyfetch=e():t.easyfetch=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e,n){return e=u(e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,o()?Reflect.construct(e,n||[],u(t).constructor):e.apply(t,n))}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},i.apply(this,arguments)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,f=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){f=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=d(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function b(t,e,r){return e&&h(t.prototype,e),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}t.r(e),t.d(e,{EasyFetch:()=>v,JsonFetch:()=>j,easyFetch:()=>O,jsonFetch:()=>g});var v=function(){return b((function t(e){p(this,t),this.url=e,this.headers={},this.queryParams={},this.options={}}),[{key:"setHeaders",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?{}:this.headers;return this.headers=l(l({},e),t),this}},{key:"setQueryParams",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?{}:this.queryParams;return this.queryParams=l(l({},e),t),this}},{key:"setOptions",value:function(t){return this.options=t,this}},{key:"basicAuth",value:function(t,e){return this.headers.Authorization="Basic "+new Buffer("".concat(t,":").concat(e)).toString("base64"),this}},{key:"_buildQueryParams",value:function(){var t=Object.entries(this.queryParams).map((function(t){var e=a(t,2),r=e[0],n=e[1];return Array.isArray(n)?n.map((function(t){return[r,encodeURIComponent(t)].join("=")})).join("&"):[r,encodeURIComponent(n)].join("=")})).join("&");return-1===this.url.indexOf("?")&&t&&(t="?".concat(t)),t}},{key:"_checkResponseStatus",value:function(t){if(t.status>=200&&t.status<400)return t;var e=new Error(t.statusText);throw e.code=t.status,e.response=t,e}},{key:"_fetch",value:function(t,e){return fetch(this.url+this._buildQueryParams(),l(l({},this.options),{},{method:t,headers:this.headers,body:e})).then(this._checkResponseStatus)}},{key:"head",value:function(){return this._fetch("HEAD")}},{key:"get",value:function(){return this._fetch("GET")}},{key:"post",value:function(t){return this._fetch("POST",t)}},{key:"put",value:function(t){return this._fetch("PUT",t)}},{key:"patch",value:function(t){return this._fetch("PATCH",t)}},{key:"delete",value:function(t){return this._fetch("DELETE",t)}}])}();function O(t){return new v(t)}var m={Accept:"application/json","Content-Type":"application/json"},j=function(t){function e(t){var r;return p(this,e),(r=n(this,e,[t])).headers=l({},m),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(e,t),b(e,[{key:"setHeaders",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?{}:this.headers;return this.headers=l(l(l({},m),e),t),this}},{key:"_fetch",value:function(t,r){return void 0!==r&&(r=JSON.stringify(r)),i(u(e.prototype),"_fetch",this).call(this,t,r).then((function(t){return t.text()})).then((function(t){return t.length?JSON.parse(t):{}}))}}])}(v);function g(t){return new j(t)}return e})()));