(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminOwner"],{"166a":function(t,e,s){},"1f4f":function(t,e,s){"use strict";s("8b37");var i=s("80d2"),a=s("7560"),r=s("58df");e["a"]=Object(r["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},3408:function(t,e,s){},"36a7":function(t,e,s){},"604c":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));s("166a");var i=s("8547"),a=s("a452"),r=s("7560"),n=s("58df"),l=s("d9bd");const o=Object(n["a"])(i["a"],a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some(t=>this.valueComparator(t,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find(t=>!t.disabled);if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex(e=>e===t);this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});e["b"]=o.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},8212:function(t,e,s){"use strict";s("3408");var i=s("a9ad"),a=s("24b2"),r=s("a236"),n=s("80d2"),l=s("58df");e["a"]=Object(l["a"])(i["a"],a["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(n["g"])(this.size),minWidth:Object(n["g"])(this.size),width:Object(n["g"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},8547:function(t,e,s){"use strict";var i=s("2b0e"),a=s("80d2");e["a"]=i["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}})},"8b37":function(t,e,s){},"8efc":function(t,e,s){},adda:function(t,e,s){"use strict";s("8efc");var i=s("90a2"),a=(s("36a7"),s("24b2")),r=s("58df"),n=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=n,o=s("7560"),c=s("d9f7"),h=s("d9bd");const d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(l,o["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!d||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=l.options.render.call(this,t),s=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},d903:function(t,e,s){"use strict";var i=s("4e82"),a=s("58df"),r=s("d9bd"),n=s("2b0e");const l=n["default"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(r["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(r["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(a["a"])(l,Object(i["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},f214:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"adminuser"}},[s("div",{staticClass:"content"},[[s("div",{staticStyle:{width:"100%"}},[s("v-text-field",{staticClass:"mb-10 mt-6 mt-lg-0",attrs:{label:"搜尋人名","hide-details":"auto"}}),s("v-simple-table",[[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[t._v("會員")]),s("th",{staticClass:"text-center"},[t._v("名稱")]),s("th",{staticClass:"text-center"},[t._v("帳號")]),s("th",{staticClass:"text-center"},[t._v("行業類別")]),s("th",{staticClass:"text-center"},[t._v("成交量/評價")]),s("th",{staticClass:"text-center"},[t._v("訊息")]),s("th",{staticClass:"text-center"},[t._v("權限")])])]),s("tbody",t._l(t.getowner,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/owner/"+e._id+"/ownerself/"}},[s("v-avatar",{staticClass:"me-2 avatarBtn",attrs:{size:"40"}},[s("v-img",{attrs:{src:"https://source.boringavatars.com/beam/120/"+e.account}})],1)],1)],1),s("td",{staticClass:"text-center",staticStyle:{"font-weight":"700"}},[s("router-link",{attrs:{to:"/owner/"+e._id+"/ownerself/"}},[t._v(t._s(e.ownername))])],1),s("td",{staticClass:"text-center"},[t._v(t._s(e.account))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.position))]),s("td",{staticClass:"text-center"},[s("div",{staticClass:"ownerscore d-flex justify-center"},[s("div",{staticClass:"scoreitem ms-3"},[s("v-icon",{attrs:{right:""}},[t._v("mdi-charity")]),t._v(" "+t._s(e.assess)+" ")],1),s("div",{staticClass:"scoreitem ms-3"},[s("v-icon",{attrs:{right:""}},[t._v("mdi-thumb-up")]),t._v(" "+t._s(e.good)+" ")],1),s("div",{staticClass:"scoreitem ms-3"},[s("v-icon",{attrs:{right:""}},[t._v("mdi-thumb-down")]),t._v(" "+t._s(e.bad)+" ")],1)])]),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/admin/adminChatsO"}},[s("v-icon",{staticClass:"me-1 favIcon",attrs:{color:"var(--color-blue)"}},[t._v("mdi-message-outline")])],1)],1),s("td",{staticClass:"text-center"},[s("v-item-group",[s("v-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active,a=e.toggle;return[s("v-icon",{staticClass:"favIconD",attrs:{size:"23",color:"var(--color-blue)"},on:{click:a}},[t._v(t._s(i?"mdi-block-helper":"mdi-check"))])]}}],null,!0)})],1)],1)])})),0)]],2)],1)]],2)])},a=[],r=s("1da1"),n=(s("96cf"),{data:function(){return{getowner:[]}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.user.token),e.next=4,t.api.get("/owners/admin",{headers:{authorization:"Bearer "+t.user.token}});case 4:s=e.sent,i=s.data,t.getowner=i.result,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得訊息失敗"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}),l=n,o=s("2877"),c=s("6544"),h=s.n(c),d=s("8212"),u=s("132d"),m=s("adda"),g=s("d903"),p=s("604c"),v=s("1f4f"),f=s("8654"),b=Object(o["a"])(l,i,a,!1,null,null,null);e["default"]=b.exports;h()(b,{VAvatar:d["a"],VIcon:u["a"],VImg:m["a"],VItem:g["a"],VItemGroup:p["b"],VSimpleTable:v["a"],VTextField:f["a"]})}}]);
//# sourceMappingURL=AdminOwner.cc9ac221.js.map