/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx/langx","skylark-domx-data","skylark-domx-eventer","skylark-domx-plugins","skylark-domx-query"],function(e,t,s,n,i,a,o,l){var r=0;return o.Plugin.inherit({klassName:"JqPlugin",pluginEventPrefix:"",options:{create:null},destroy:function(){this.overrided(),this.element.off(this.eventNamespace),this.bindings.off(this.eventNamespace)},_construct:function(e,t){e=l(e||this.defaultElement||this)[0],this.overrided(e,t),this.element=l(e),this.uuid=r++,this.eventNamespace="."+this.pluginName+this.uuid,this.bindings=l(),this.classesElementLookup={},this.hoverable=l(),this.focusable=l(),e!==this&&(i.data(e,this.pluginName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=l(e.style?e.ownerDocument:e.document||e),this.window=l(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateEventData:n.noop,_create:n.noop,_init:n.noop,_classes:function(e){var s=[],i=this;function a(t,a){var o,r;for(r=0;r<t.length;r++)o=i.classesElementLookup[t[r]]||l(),e.add?(e.element.each(function(e,t){n.map(i.classesElementLookup,function(e){return e}).some(function(e){return l(e).is(t)})||i._on(l(t),{remove:"_untrackClassesElement"})}),o=l(n.uniq(o.get().concat(e.element.get())))):o=l(o.not(e.element).get()),i.classesElementLookup[t[r]]=o,s.push(t[r]),a&&e.classes[t[r]]&&s.push(e.classes[t[r]])}return(e=t.mixin({element:this.element,classes:this.options.classes||{}},e)).keys&&a(e.keys.match(/\S+/g)||[],!0),e.extra&&a(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var t=this;n.each(t.classesElementLookup,function(n,i){-1!==s.inArray(e.target,i)&&(t.classesElementLookup[n]=l(i.not(e.target).get()))}),this._off(l(e.target))},_removeClass:function(e,t,s){return this._toggleClass(e,t,s,!1)},_addClass:function(e,t,s){return this._toggleClass(e,t,s,!0)},_toggleClass:function(e,t,s,n){n="boolean"==typeof n?n:s;var i="string"==typeof e||null===e,a={extra:i?t:s,keys:i?e:t,element:i?this.element:e,add:n};return a.element.toggleClass(this._classes(a),n),this},_on:function(e,s,n){var i,a=this;"boolean"!=typeof e&&(n=s,s=e,e=!1),n?(s=i=l(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,i=this.widget()),t.each(n,function(t,n){function o(){if(e||!0!==a.options.disabled&&!l(this).hasClass("ui-state-disabled"))return("string"==typeof n?a[n]:n).apply(a,arguments)}"string"!=typeof n&&(o.guid=n.guid=n.guid||o.guid||l.guid++);var r=t.match(/^([\w:-]*)\s*(.*)$/),h=r[1]+a.eventNamespace,u=r[2];u?i.on(h,u,o):s.on(h,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=l(this.bindings.not(e).get()),this.focusable=l(this.focusable.not(e).get()),this.hoverable=l(this.hoverable.not(e).get())},_trigger:function(t,s,n){var i,o,l=this.options[t];if(n=n||{},(s=a.proxy(s)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),s.target=this.element[0],o=s.originalEvent)for(i in o)i in s||(s[i]=o[i]);return this.element.trigger(s,n),!(e.isFunction(l)&&!1===l.apply(this.element[0],[s].concat(n))||s.isDefaultPrevented())}})});
//# sourceMappingURL=sourcemaps/JqueryPlugin.js.map
