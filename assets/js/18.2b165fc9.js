(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(e,t,a){"use strict";a.r(t);var s={name:"FormInfoExample",data:function(){return{title:"mr",test:["a","b"],firstName:"",lastName:"",password:"",city:"",state:"",zip:"",errors:{}}},methods:{onSubmit:function(){var e={title:this.title,test:this.test,firstName:this.firstName,lastName:this.lastName,password:this.password,city:this.city,state:this.state,zip:this.zip};console.log(e)}}},l=a(1),r=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit,l=t.errors;t.failed;return[a("form",{staticClass:"w-full max-w-xl",on:{submit:function(t){return t.preventDefault(),s(e.onSubmit)}}},[a("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[a("div",{staticClass:"flex flex-wrap -mx-3"},[a("div",{staticClass:"w-1/2 px-3"},[a("CheckableGroup",{attrs:{title:"Title",error:l.title,direction:"row",rules:"required"}},[a("Radio",{attrs:{label:"Mr",checkValue:"mr"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),a("Radio",{attrs:{label:"Ms",checkValue:"ms"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),a("Radio",{attrs:{label:"Mlle",checkValue:"mlle"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1),e._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("CheckableGroup",{attrs:{title:"Test",error:l.test,direction:"row",rules:"required"}},[a("Checkbox",{attrs:{label:"a",checkValue:"a"},model:{value:e.test,callback:function(t){e.test=t},expression:"test"}}),e._v(" "),a("Checkbox",{attrs:{label:"b",checkValue:"b"},model:{value:e.test,callback:function(t){e.test=t},expression:"test"}}),e._v(" "),a("Checkbox",{attrs:{label:"c",checkValue:"c"},model:{value:e.test,callback:function(t){e.test=t},expression:"test"}})],1)],1),e._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("TextInput",{attrs:{type:"text",placeholder:"Jane",label:"First Name",error:l.firstName,rules:"required"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),e._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("TextInput",{attrs:{type:"text",placeholder:"Doe",label:"Last Name",error:l.lastName,rules:"required"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)]),e._v(" "),a("TextInput",{attrs:{id:"password",type:"password",placeholder:"******************",label:"Password",error:l.password,rules:"required"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3"},[a("div",{staticClass:"px-3 w-1/3"},[a("TextInput",{attrs:{id:"city",placeholder:"Albuquerque",label:"City",error:l.city,rules:"required"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),e._v(" "),a("div",{staticClass:"px-3 w-1/3"},[a("Select",{attrs:{label:"State",error:l.state,rules:"required"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[a("SelectOption",{attrs:{value:"mexico"}},[e._v("New Mexico")]),e._v(" "),a("SelectOption",{attrs:{value:"missouri"}},[e._v("Missouri")]),e._v(" "),a("SelectOption",{attrs:{value:"texas"}},[e._v("Texas")])],1)],1),e._v(" "),a("div",{staticClass:"px-3 w-1/3"},[a("TextInput",{attrs:{id:"zip",placeholder:"90210",label:"Zip",error:l.zip,rules:"required"},model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}})],1)]),e._v(" "),a("Button",{attrs:{type:"submit"}},[e._v("Submit")])],1)])]}}])})}),[],!1,null,null,null);t.default=r.exports}}]);