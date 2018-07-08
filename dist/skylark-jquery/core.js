/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils/skylark","skylark-utils/browser","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/eventer","skylark-utils/finder","skylark-utils/fx","skylark-utils/styler","skylark-utils/query"],function(t,e,n,i,r,s,o,a,u,f){var l=Array.prototype.filter,c=Array.prototype.slice;return function(t){t.fn.jquery="2.2.0",t.camelCase=n.camelCase,t.cleanData=function(t){for(var e,n=0;void 0!==(e=t[n]);n++)r.cleanData(e)},t.each=n.each,t.extend=function(t){var e,i=c.call(arguments,1);return"boolean"==typeof t&&(e=t,t=i.shift()),0==i.length&&(i=[t],t=this),i.forEach(function(i){n.mixin(t,i,e)}),t},t.grep=function(t,e){return l.call(t,e)},t.isArray=n.isArray,t.isEmptyObject=n.isEmptyObject,t.isFunction=n.isFunction,t.isWindow=n.isWindow,t.isPlainObject=n.isPlainObject,t.inArray=n.inArray,t.makeArray=n.makeArray,t.map=n.map,t.noop=function(){},t.parseJSON=window.JSON.parse,t.proxy=n.proxy,t.trim=n.trim,t.type=n.type,t.fn.extend=function(e){n.mixin(t.fn,e)},t.fn.serializeArray=function(){var e,i,r=[],s=function(t){return t.forEach?t.forEach(s):void r.push({name:e,value:t})};return this[0]&&n.each(this[0].elements,function(n,r){i=r.type,e=r.name,e&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||r.checked)&&s(t(r).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")}}(f),function(t){t.Event=function(t,e){if(n.isString(t)){var i=t;return s.create(i,e)}return s.proxy(t,e)},t.event={},t.event.special=s.special,t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},t.fn.triggerHandler=t.fn.trigger,t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.bind=function(t,e,n,i){return this.on(t,e,n,i)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.ready=function(t){return s.ready(t),this},t.fn.stop=function(){return this},t.fn.moveto=function(t,e){return this.animate({left:t+"px",top:e+"px"},.4)},t.ready=s.ready,t.on=s.on,t.off=s.off}(f),function(t){t.uuid=0,t.support=e.support,t.expr={},t.expr[":"]=t.expr.pseudos=t.expr.filters=o.pseudos,t.expr.createPseudo=function(t){return t},t.cssHooks=u.cssHooks,t.contains=i.contains,t.css=u.css,t.data=r.data,t.fx=a,t.fx.step={},t.easing={},t.offset={},t.offset.setOffset=function(e,n,i){var r=t.css(e,"position");"static"===r&&(e.style.position="relative");var s,o,a=t(e),u=a.offset(),f=t.css(e,"top"),l=t.css(e,"left"),c=("absolute"===r||"fixed"===r)&&t.inArray("auto",[f,l])>-1,p={},d={};c?(d=a.position(),s=d.top,o=d.left):(s=parseFloat(f)||0,o=parseFloat(l)||0),t.isFunction(n)&&(n=n.call(e,i,u)),null!=n.top&&(p.top=n.top-u.top+s),null!=n.left&&(p.left=n.left-u.left+o),"using"in n?n.using.call(e,p):a.css(p)}}(f),f.parseHTML=function(t){return i.createFragment(t)},f.unique=n.uniq,f.skylark=t,window.jQuery=window.$=f});
//# sourceMappingURL=sourcemaps/core.js.map
