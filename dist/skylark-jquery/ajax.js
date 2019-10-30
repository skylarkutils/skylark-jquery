/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-net-http/Xhr","./core"],function(t,r,n){var e=0;function a(t,r){return""==r?t:(t+"&"+r).replace(/[&?]{1,2}/,"?")}function i(t,r,e,a){return n.isFunction(t)?(a=r,e=t,r=void 0,t=void 0):n.isFunction(r)&&(a=e,e=r,r=void 0),n.isFunction(e)||(a=e,e=void 0),{url:t,data:r,success:e,dataType:a}}n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,r){n.fn[r]=function(t){return this.on(r,t)}}),n.ajaxJSONP=function(r){var i,o,u=new t.Deferred,s=r.jsonpCallback,c=(n.isFunction(s)?s():s)||"jsonp"+ ++e,l=document.createElement("script"),p=window[c],f=function(t){n(l).triggerHandler("error",t||"abort")},d={abort:f};for(var j in r.data)r.url=a(r.url,j+"="+r.data[j]);return n(l).on("load error",function(t,r){clearTimeout(o),n(l).off().remove(),"error"!=t.type&&i?u.resolve(i[0],200,d):u.reject(t),window[c]=p,i&&n.isFunction(p)&&p(i[0]),p=i=void 0}),window[c]=function(){i=arguments},l.src=r.url.replace(/\?(.+)=\?/,"?$1="+c),document.head.appendChild(l),r.timeout>0&&(o=setTimeout(function(){f("timeout")},r.timeout)),u},n.ajaxSettings=r.defaultOptions,n.ajaxSettings.xhr=function(){return new window.XMLHttpRequest},n.ajax=function(e,i){if(e?i?i.url=e:i=t.isString(e)?{url:e}:e:i={url:"./"},"jsonp"==i.dataType)return/\?.+=\?/.test(i.url)||(i.url=a(i.url,i.jsonp?i.jsonp+"=?":!1===i.jsonp?"":"callback=?")),n.ajaxJSONP(i);var o=r.request(i.url,i);return(o=o.then(function(t,r,e){return n(document).trigger("ajaxSucess"),i.success&&i.success.apply(this,arguments),i.complete&&i.complete.apply(this,arguments),t},function(){n(document).trigger("ajaxError"),i.error&&i.error.apply(this,arguments)})).success=o.done,o.error=o.fail,o.complete=o.always,o},n.get=function(){return n.ajax(i.apply(null,arguments))},n.post=function(){var t=i.apply(null,arguments);return t.type="POST",n.ajax(t)},n.getJSON=function(){var t=i.apply(null,arguments);return t.dataType="json",n.ajax(t)};var o=n.fn.load;function u(t){return function(r,n){"string"!=typeof r&&(n=r,r="*");var e,a=0,i=r.toLowerCase().match(s)||[];if(jQuery.isFunction(n))for(;e=i[a++];)"+"===e[0]?(e=e.slice(1)||"*",(t[e]=t[e]||[]).unshift(n)):(t[e]=t[e]||[]).push(n)}}n.fn.load=function(t,r,e){if("string"!=typeof t&&o)return o.apply(this,arguments);if(!this.length)return this;var a,u=this,s=i(t,r,e),c=s.url&&s.url.split(/\s/),l=s.success;return c&&c.length>1&&(s.url=c[0],a=c[1]),s.success=function(t){u.html(a?n("<div>").html(t.replace(rscript,"")).find(a):t),l&&l.apply(u,arguments)},n.ajax(s),this},n.param=r.param;var s=/\S+/g;return n.ajaxPrefilter=u({}),n.ajaxTransport=u({}),n.ajaxSetup=function(n,e){t.mixin(r.defaultOptions,n,e)},n.getScript=function(t,r){return n.get(t,void 0,r,"script")},n});
//# sourceMappingURL=sourcemaps/ajax.js.map
