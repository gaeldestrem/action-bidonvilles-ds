(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(t,e,a){"use strict";a.r(e);var s={name:"FormInfoExample",data:function(){return{title:"mr",test:["a","b"],firstName:"",lastName:"",password:"",city:"",state:"",zip:"",errors:{}}},methods:{onSubmit:function(){var t={title:this.title,test:this.test,firstName:this.firstName,lastName:this.lastName,password:this.password,city:this.city,state:this.state,zip:this.zip};console.log(t)}}},l=a(0),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"w-full max-w-xl",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[a("div",{staticClass:"flex flex-wrap -mx-3"},[a("div",{staticClass:"w-1/2 px-3"},[a("CheckableGroup",{attrs:{title:"Title",error:t.errors.title,direction:"row"}},[a("Radio",{attrs:{label:"Mr",checkValue:"mr"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("Radio",{attrs:{label:"Ms",checkValue:"ms"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("Radio",{attrs:{label:"Mlle",checkValue:"mlle"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("CheckableGroup",{attrs:{title:"Test",error:t.errors.test,direction:"row"}},[a("Checkbox",{attrs:{label:"a",checkValue:"a"},model:{value:t.test,callback:function(e){t.test=e},expression:"test"}}),t._v(" "),a("Checkbox",{attrs:{label:"b",checkValue:"b"},model:{value:t.test,callback:function(e){t.test=e},expression:"test"}}),t._v(" "),a("Checkbox",{attrs:{label:"c",checkValue:"c"},model:{value:t.test,callback:function(e){t.test=e},expression:"test"}})],1)],1),t._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("TextInput",{attrs:{type:"text",placeholder:"Jane",label:"First Name",error:t.errors.firstName},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),a("div",{staticClass:"w-1/2 px-3"},[a("TextInput",{attrs:{type:"text",placeholder:"Doe",label:"Last Name",error:t.errors.lastName},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)]),t._v(" "),a("TextInput",{attrs:{id:"password",type:"password",placeholder:"******************",label:"Password",error:t.errors.password},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3"},[a("div",{staticClass:"px-3 w-1/3"},[a("TextInput",{attrs:{id:"city",placeholder:"Albuquerque",label:"City",error:t.errors.city},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),t._v(" "),a("div",{staticClass:"px-3 w-1/3"},[a("Select",{attrs:{label:"State",error:t.errors.state},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[a("SelectOption",{attrs:{value:"mexico"}},[t._v("New Mexico")]),t._v(" "),a("SelectOption",{attrs:{value:"missouri"}},[t._v("Missouri")]),t._v(" "),a("SelectOption",{attrs:{value:"texas"}},[t._v("Texas")])],1)],1),t._v(" "),a("div",{staticClass:"px-3 w-1/3"},[a("TextInput",{attrs:{id:"zip",placeholder:"90210",label:"Zip",error:t.errors.zip},model:{value:t.zip,callback:function(e){t.zip=e},expression:"zip"}})],1)]),t._v(" "),a("Button",{attrs:{type:"submit"}},[t._v("Submit")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);