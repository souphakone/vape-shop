(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d9ed86a"],{"36fc":function(t,e,r){"use strict";r("f36d")},b0c0:function(t,e,r){var i=r("83ab"),a=r("9bf2").f,o=Function.prototype,s=o.toString,n=/^\s*function ([^ (]*)/,u="name";i&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(t){return""}}})},e3e8:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"submit-form mt-3 mx-auto"},[r("p",{staticClass:"headline"},[t._v("Ajouter un produit")]),t.submitted?r("div",[r("v-card",{staticClass:"mx-auto"},[r("v-card-title",[t._v(" Envoie avec succès! ")]),r("v-card-subtitle",[t._v(" Cliquer pour ajouter un produit. ")]),r("v-card-actions",[r("v-btn",{attrs:{color:"success"},on:{click:t.newproduct}},[t._v(">Ajouter")])],1)],1)],1):r("div",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le nom est requis"}],label:"Nom",required:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le champ est obligatoire"}],label:"Marque",required:""},model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand",e)},expression:"product.brand"}}),r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le champ est obligatoire"}],label:"Prix",required:""},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le champ est obligatoire"}],label:"Categorie",required:""},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le champ est obligatoire"}],label:"Description",required:""},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),r("v-text-field",{attrs:{rules:[function(t){return!!t||"Le champ est obligatoire"}],label:"Url de l'image",required:""},model:{value:t.product.image,callback:function(e){t.$set(t.product,"image",e)},expression:"product.image"}})],1),r("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:t.saveproduct}},[t._v("Envoyer")])],1)])},a=[],o=(r("a4d3"),r("e01a"),r("b0c0"),r("0c28")),s={name:"add-product",data:function(){return{product:{id:null,name:"",brand:"",price:"",category:"",description:""},submitted:!1}},methods:{saveproduct:function(){var t=this,e={name:this.product.name,brand:this.product.brand,price:this.product.property,category:this.product.category,description:this.product.description};o["a"].create(e).then((function(e){t.product.id=e.data.id,console.log(e.data),t.submitted=!0})).catch((function(t){console.log(t)}))},newproduct:function(){this.submitted=!1,this.product={}}}},n=s,u=(r("36fc"),r("2877")),c=r("6544"),d=r.n(c),l=r("8336"),p=r("b0af"),h=r("99d9"),f=r("58df"),m=r("7e2b"),b=r("3206"),v=Object(f["a"])(m["a"],Object(b["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),r={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))}):r.valid=e(t),r},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const r=this.watchers.find(t=>t._uid===e._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),g=r("8654"),_=Object(u["a"])(n,i,a,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:l["a"],VCard:p["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["c"],VForm:v,VTextField:g["a"]})},f36d:function(t,e,r){}}]);
//# sourceMappingURL=chunk-3d9ed86a.f3715ea1.js.map