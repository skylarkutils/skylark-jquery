/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx/langx","skylark-domx-data","skylark-domx-eventer","skylark-domx-plugins-base","skylark-domx-query"],function(e,t,s,i,n,o,a,r){var l=0;return a.Plugin.inherit({klassName:"JqPlugin",pluginEventPrefix:"",options:{create:null},destroy:function(){this.overrided(),this.element.off(this.eventNamespace),this.bindings.off(this.eventNamespace)},_construct:function(e,t){e=r(e||this.defaultElement||this)[0],this.element=r(e),this.uuid=l++,this.eventNamespace="."+this.pluginName+this.uuid,this.bindings=r(),this.classesElementLookup={},this.hoverable=r(),this.focusable=r(),e!==this&&(n.data(e,this.pluginName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=r(e.style?e.ownerDocument:e.document||e),this.window=r(this.document[0].defaultView||this.document[0].parentWindow)),this.overrided(e,t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_initOptions:function(e){e=i.mixin(this._getCreateOptions(),e),this.overrided(e)},_getCreateOptions:function(){return{}},_getCreateEventData:i.noop,_super:function(){if(this.overrided)return this.overrided.apply(this,arguments)},_superApply:function(e){if(this.overrided)return this.overrided.apply(this,e)},_create:i.noop,_init:i.noop,_classes:function(e){var s=[],n=this;function o(t,o){var a,l;for(l=0;l<t.length;l++)a=n.classesElementLookup[t[l]]||r(),e.add?(e.element.each(function(e,t){i.map(n.classesElementLookup,function(e){return e}).some(function(e){return r(e).is(t)})||n._on(r(t),{remove:"_untrackClassesElement"})}),a=r(i.uniq(a.get().concat(e.element.get())))):a=r(a.not(e.element).get()),n.classesElementLookup[t[l]]=a,s.push(t[l]),o&&e.classes[t[l]]&&s.push(e.classes[t[l]])}return(e=t.mixin({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var t=this;i.each(t.classesElementLookup,function(i,n){-1!==s.inArray(e.target,n)&&(t.classesElementLookup[i]=r(n.not(e.target).get()))}),this._off(r(e.target))},_removeClass:function(e,t,s){return this._toggleClass(e,t,s,!1)},_addClass:function(e,t,s){return this._toggleClass(e,t,s,!0)},_toggleClass:function(e,t,s,i){i="boolean"==typeof i?i:s;var n="string"==typeof e||null===e,o={extra:n?t:s,keys:n?e:t,element:n?this.element:e,add:i};return o.element.toggleClass(this._classes(o),i),this},_on:function(e,s,i){var n,o=this;"boolean"!=typeof e&&(i=s,s=e,e=!1),i?(s=n=r(s),this.bindings=this.bindings.add(s)):(i=s,s=this.element,n=this.widget()),t.each(i,function(t,i){function a(){if(e||!0!==o.options.disabled&&!r(this).hasClass("ui-state-disabled"))return("string"==typeof i?o[i]:i).apply(o,arguments)}"string"!=typeof i&&(a.guid=i.guid=i.guid||a.guid||r.guid++);var l=t.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,u=l[2];u?n.on(h,u,a):s.on(h,a)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=r(this.bindings.not(e).get()),this.focusable=r(this.focusable.not(e).get()),this.hoverable=r(this.hoverable.not(e).get())},_trigger:function(t,s,i){var n,a,r=this.options[t];if(i=i||{},(s=o.proxy(s)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),s.target=this.element[0],a=s.originalEvent)for(n in a)n in s||(s[n]=a[n]);return this.element.trigger(s,i),!(e.isFunction(r)&&!1===r.apply(this.element[0],[s].concat(i))||s.isDefaultPrevented())},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})}})});
//# sourceMappingURL=sourcemaps/JqueryPlugin.js.map
