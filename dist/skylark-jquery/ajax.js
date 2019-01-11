/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core","skylark-langx/langx"],function(r,n){var t=0;function e(r,n){return""==n?r:(r+"&"+n).replace(/[&?]{1,2}/,"?")}function a(n,t,e,a){return r.isFunction(n)?(a=t,e=n,t=void 0,n=void 0):r.isFunction(t)&&(a=e,e=t,t=void 0),r.isFunction(e)||(a=e,e=void 0),{url:n,data:t,success:e,dataType:a}}r.ajaxJSONP=function(a){var i,u,o=new n.Deferred,s=a.jsonpCallback,c=(r.isFunction(s)?s():s)||"jsonp"+ ++t,l=document.createElement("script"),p=window[c],f=function(n){r(l).triggerHandler("error",n||"abort")},d={abort:f};for(var j in a.data)a.url=e(a.url,j+"="+a.data[j]);return r(l).on("load error",function(n,t){clearTimeout(u),r(l).off().remove(),"error"!=n.type&&i?o.resolve(i[0],200,d):o.reject(n),window[c]=p,i&&r.isFunction(p)&&p(i[0]),p=i=void 0}),window[c]=function(){i=arguments},l.src=a.url.replace(/\?(.+)=\?/,"?$1="+c),document.head.appendChild(l),a.timeout>0&&(u=setTimeout(function(){f("timeout")},a.timeout)),o},r.ajaxSettings=n.Xhr.defaultOptions,r.ajaxSettings.xhr=function(){return new window.XMLHttpRequest},r.ajax=function(t){if(t?n.isString(t)&&(t={url:t}):t={url:"./"},"jsonp"==t.dataType)return/\?.+=\?/.test(t.url)||(t.url=e(t.url,t.jsonp?t.jsonp+"=?":!1===t.jsonp?"":"callback=?")),r.ajaxJSONP(t);var a=n.Xhr.request(t.url,t);return t.success&&(a=a.then(t.success,t.error)),a.success=a.done,a.error=a.fail,a.complete=a.always,a},r.get=function(){return r.ajax(a.apply(null,arguments))},r.post=function(){var n=a.apply(null,arguments);return n.type="POST",r.ajax(n)},r.getJSON=function(){var n=a.apply(null,arguments);return n.dataType="json",r.ajax(n)};var i=r.fn.load;function u(r){return function(n,t){"string"!=typeof n&&(t=n,n="*");var e,a=0,i=n.toLowerCase().match(o)||[];if(jQuery.isFunction(t))for(;e=i[a++];)"+"===e[0]?(e=e.slice(1)||"*",(r[e]=r[e]||[]).unshift(t)):(r[e]=r[e]||[]).push(t)}}r.fn.load=function(n,t,e){if("string"!=typeof n&&i)return i.apply(this,arguments);if(!this.length)return this;var u,o=this,s=a(n,t,e),c=s.url&&s.url.split(/\s/),l=s.success;return c&&c.length>1&&(s.url=c[0],u=c[1]),s.success=function(n){o.html(u?r("<div>").html(n.replace(rscript,"")).find(u):n),l&&l.apply(o,arguments)},r.ajax(s),this},r.param=n.Xhr.param;var o=/\S+/g;return r.ajaxPrefilter=u({}),r.ajaxTransport=u({}),r.ajaxSetup=function(r,t){n.mixin(n.Xhr.defaultOptions,r,t)},r});
//# sourceMappingURL=sourcemaps/ajax.js.map
