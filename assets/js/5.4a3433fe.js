(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{367:function(t,e,n){"use strict";var r=n(180),u=n(10),i=n(25),l=n(368),s=n(181);r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=u(t),a=String(this),o=i.lastIndex;l(o,0)||(i.lastIndex=0);var c=s(i,a);return l(i.lastIndex,o)||(i.lastIndex=o),null===c?-1:c.index}]}))},368:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},377:function(t,e,n){"use strict";n.r(e);n(103),n(12),n(50),n(367);var r={data:function(){return{input:"test",result:"",loading:!1}},methods:{onSubmit:function(){alert(this.result)},resultValue:function(t){return t.title},search:function(t){var e=this;this.input=t;return new Promise((function(n){var r="".concat("https://en.wikipedia.org","/w/api.php?").concat("action=query&list=search&format=json&origin=*","&srsearch=").concat(encodeURI(t));if(!t.length)return n([]);e.loading=!0,fetch(r).then((function(t){return t.json()})).then((function(t){n(t.query.search),e.loading=!1}))}))}}},u=n(1),i=Object(u.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;e.errors,e.failed;return[n("form",{staticClass:"w-full max-w-xl",on:{submit:function(e){return e.preventDefault(),r(t.onSubmit)}}},[n("AutocompleteV2",{attrs:{id:"test",label:"Search Wikipedia",defaultValue:t.result?t.resultValue(t.result):"",search:t.search,getResultValue:t.resultValue,placeholder:"Search Wikipedia",rules:"required",loading:t.loading},on:{submit:function(e){t.result=e}},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}}),t._v(" "),t.result?n("div",[t._v("result: "+t._s(t.result.pageid)+" - "+t._s(t.result.title))]):t._e(),t._v(" "),n("Button",{attrs:{type:"submit"}},[t._v("Submit")])],1)]}}])})],1)}),[],!1,null,null,null);e.default=i.exports}}]);