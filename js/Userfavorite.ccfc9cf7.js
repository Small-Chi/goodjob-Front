(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Userfavorite"],{"1f4f":function(t,e,s){"use strict";s("8b37");var i=s("80d2"),a=s("7560"),n=s("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"24e2":function(t,e,s){"use strict";var i=s("e0c7");e["a"]=i["a"]},"326d":function(t,e,s){"use strict";var i=s("e449");e["a"]=i["a"]},"34ef":function(t,e,s){"use strict";var i=s("cc20");e["a"]=i["a"]},"36a7":function(t,e,s){},"503d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"favorite"}},[s("div",{staticClass:"content"},[[s("div",{staticStyle:{width:"100%"}},[s("v-select",{staticClass:"mb-5",attrs:{items:t.slots,label:"搜尋類別"}}),s("v-simple-table",[[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[t._v("發案者")]),s("th",{staticClass:"text-center"},[t._v("案件名稱")]),s("th",{staticClass:"text-center"},[t._v("類別")]),s("th",{staticClass:"text-center"},[t._v("結案日期")]),s("th",{staticClass:"text-center"},[t._v("預算")]),s("th",{staticClass:"text-center"},[t._v("需求風格")]),s("th",{staticClass:"text-center"},[t._v("訊息/狀態/移除")])])]),s("tbody",t._l(t.cases,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/owner/"+e.owner._id+"/ownerself/"}},[s("v-avatar",{staticClass:"me-2 avatarBtn",attrs:{size:"40"}},[s("v-img",{attrs:{src:"https://source.boringavatars.com/beam/120/"+e.owner.account}})],1),s("span",{staticStyle:{color:"var(--color-lightY)"}},[t._v(t._s(e.owner.ownername))])],1)],1),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/owner/"+e.owner._id+"/casePage/"+e._id}},[t._v(t._s(e.casename))])],1),s("td",{staticClass:"text-center"},[t._v(t._s(e.category.small))]),s("td",{staticClass:"text-center"},[t._v(t._s(new Date(e.endingday).toLocaleDateString().replace(/\//g,"／")))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.price))]),s("td",{staticClass:"text-center",staticStyle:{padding:"10px"}},[s("router-link",{attrs:{to:"/owner/"+e.owner._id+"/casePage/"+e._id}},[s("v-img",{staticClass:"mx-auto",staticStyle:{width:"250px"},attrs:{src:e.image}})],1)],1),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/user/"+t.user._id+"/userchats/"}},[s("v-icon",{staticClass:"me-1 favIcon",attrs:{color:"var(--color-white)"}},[t._v("mdi-message-outline")])],1),s("v-icon",{staticClass:"favIcon",attrs:{color:"var(--color-white)"},on:{click:function(e){return t.wantDo(i)}}},[t._v("mdi-file-move-outline")]),s("v-icon",{staticClass:"favIconD ms-5",attrs:{color:"var(--color-white)"},on:{click:function(e){return t.deletefav(i)}}},[t._v("mdi-delete")])],1)])})),0)]],2)],1)]],2)])},a=[],n=s("1da1"),r=(s("96cf"),s("a434"),{data:function(){return{cases:[],search:null,slots:["海報/DM","書籍/手冊","創作","CIS/VIS/ICON","攝影","產品/包裝","插畫/漫畫","簡報","織品服裝設計","版型設計","切版製作","EDM設計","Banner","維護/經營","行銷/SEO","程式設計/架設","商品上架","UI/UX設計","室內空間設計","櫥窗陳列展示","房屋/建築設計","展場/舞台設計","店面/商業空間設計","景觀園藝設計","產品設計","水電及其他工程繪圖","3D繪圖/渲染","紙藝","皮件","木質","棉/麻","花草植栽","羊毛","陶瓷","編織"]}},methods:{deletefav:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.api.patch("/users/me/favorite",{case:e.cases[t]._id},{headers:{authorization:"Bearer "+e.user.token}});case 3:e.cases.splice(t,1),e.$store.commit("user/updateFavorite",e.user.favorite-1),e.$swal({icon:"success",title:"成功",text:"修改收藏成功"}),s.next=12;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log(s.t0),e.$swal({icon:"error",title:"失敗",text:"修改收藏失敗"});case 12:case"end":return s.stop()}}),s,null,[[0,8]])})))()},wantDo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(console.log(e.cases[t]._id),!e.user.isuserLogin){s.next=12;break}return s.prev=2,s.next=5,e.api.patch("cases/deal/"+e.cases[t]._id,{deal:e.user._id},{headers:{authorization:"Bearer "+e.user.token}});case 5:e.$swal({icon:"success",title:"成功",text:"投稿成功"}),s.next=12;break;case 8:s.prev=8,s.t0=s["catch"](2),console.log(s.t0),e.$swal({icon:"error",title:"失敗",text:"投稿失敗"});case 12:case"end":return s.stop()}}),s,null,[[2,8]])})))()}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/me/favorite",{headers:{authorization:"Bearer "+t.user.token}});case 3:s=e.sent,i=s.data,t.cases=i.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得收藏失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=r,l=s("2877"),c=s("6544"),h=s.n(c),d=s("8212"),u=s("132d"),p=s("adda"),m=s("b974"),g=s("1f4f"),v=Object(l["a"])(o,i,a,!1,null,null,null);e["default"]=v.exports;h()(v,{VAvatar:d["a"],VIcon:u["a"],VImg:p["a"],VSelect:m["a"],VSimpleTable:g["a"]})},"68dd":function(t,e,s){},"8adc":function(t,e,s){},"8b37":function(t,e,s){},"8ce9":function(t,e,s){},"8efc":function(t,e,s){},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("da84"),n=s("23cb"),r=s("5926"),o=s("07fa"),l=s("7b0b"),c=s("65f0"),h=s("8418"),d=s("1dde"),u=d("splice"),p=a.TypeError,m=Math.max,g=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var s,i,a,d,u,b,x=l(this),$=o(x),C=n(t,$),I=arguments.length;if(0===I?s=i=0:1===I?(s=0,i=$-C):(s=I-2,i=g(m(r(e),0),$-C)),$+s-i>v)throw p(f);for(a=c(x,i),d=0;d<i;d++)u=C+d,u in x&&h(a,d,x[u]);if(a.length=i,s<i){for(d=C;d<$-i;d++)u=d+i,b=d+s,u in x?x[b]=x[u]:delete x[b];for(d=$;d>$-i+s;d--)delete x[d-1]}else if(s>i)for(d=$-i;d>C;d--)u=d+i-1,b=d+s-1,u in x?x[b]=x[u]:delete x[b];for(d=0;d<s;d++)x[d+C]=arguments[d+2];return x.length=$-i+s,a}})},adda:function(t,e,s){"use strict";s("8efc");var i=s("90a2"),a=(s("36a7"),s("24b2")),n=s("58df"),r=Object(n["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,l=s("7560"),c=s("d9f7"),h=s("d9bd");const d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(o,l["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!d||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},b810:function(t,e,s){"use strict";var i=s("ce7e");e["a"]=i["a"]},b974:function(t,e,s){"use strict";s.d(e,"b",(function(){return T}));s("4ff9"),s("68dd");var i=s("34ef"),a=s("326d"),n=(s("cf36"),s("5607")),r=s("2b0e"),o=s("132d"),l=s("a9ad"),c=s("7560"),h=s("d9f7"),d=s("80d2"),u=r["default"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:n["a"]},props:{...l["a"].options.props,...c["a"].options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:s,listeners:i}){const a=[];let n=e.offIcon;if(e.indeterminate?n=e.indeterminateIcon:e.value&&(n=e.onIcon),a.push(t(o["a"],l["a"].options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),n)),e.ripple&&!e.disabled){const s=t("div",l["a"].options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));a.push(s)}return t("div",Object(h["a"])(s,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),s.on&&s.on.input&&!e.disabled&&Object(d["A"])(s.on.input).forEach(t=>t(!e.value))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},a)])}}),p=s("b810"),m=s("24e2"),g=s("da13"),v=s("1800"),f=s("5d23"),b=s("8860"),x=s("58df"),$=Object(x["a"])(l["a"],c["a"]).extend({name:"v-select-list",directives:{ripple:n["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(t=>this.getValue(t))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(g["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(v["a"],[this.$createElement(u,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(p["a"],{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(d["k"])(t);const{start:e,middle:s,end:i}=this.getMaskedCharacters(t);return`${Object(d["k"])(e)}${this.genHighlight(s)}${Object(d["k"])(i)}`},genHeader(t){return this.$createElement(m["a"],{props:t},t.header)},genHighlight(t){return`<span class="v-list-item__mask">${Object(d["k"])(t)}</span>`},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),s=t.toLocaleLowerCase().indexOf(e);if(s<0)return{start:t,middle:"",end:""};const i=t.slice(0,s),a=t.slice(s,s+e.length),n=t.slice(s+e.length);return{start:i,middle:a,end:n}},genTile({item:t,index:e,disabled:s=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(s=null!==s?s:this.getDisabled(t));const a={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>s||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:s,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(g["a"],a,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const n=this,r=this.$scopedSlots.item({parent:n,item:t,attrs:{...a.attrs,...a.props},on:a.on});return this.needsTile(r)?this.$createElement(g["a"],a,r):r},genTileContent(t,e=0){const s=this.genFilteredText(this.getText(t));return this.$createElement(f["a"],[this.$createElement(f["b"],{domProps:{innerHTML:s}})])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean(Object(d["o"])(t,this.itemDisabled,!1))},getText(t){return String(Object(d["o"])(t,this.itemText,t))},getValue(t){return Object(d["o"])(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let s=0;s<e;s++){const e=this.items[s];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:s})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:s})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(b["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),C=s("c37a"),I=s("8654"),S=s("8547"),y=s("b848"),k=r["default"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),_=s("a293"),w=s("d9bd");const T={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},A=Object(x["a"])(I["a"],S["a"],y["a"],k);e["a"]=A.extend().extend({name:"v-select",directives:{ClickOutside:_["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>T},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...I["a"].options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return"list-"+this._uid},computedCounterValue(){const t=this.multiple?this.selectedItems:(this.getText(this.selectedItems[0])||"").toString();return"function"===typeof this.counterValue?this.counterValue(t):t.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(w["b"])("assert: staticList should not be called if slots are used"),this.$createElement($,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((t,e)=>(t[e.trim()]=!0,t),{})),{...T,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems()},isMenuActive(t){window.setTimeout(()=>this.onMenuActiveChange(t))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))}),this.setSelectedItems()}}},methods:{blur(t){I["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let s=0;s<t.length;++s){const i=t[s];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const a=this.getValue(i);!e.has(a)&&e.set(a,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex(t=>this.valueComparator(this.getValue(t),e))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const s=this.isDisabled||this.getDisabled(t),a=!s&&this.isInteractive;return this.$createElement(i["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&a,disabled:s,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{a&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,s){const i=e===this.selectedIndex&&this.computedColor,a=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":a},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${s?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,s){const i=C["a"].options.methods.genIcon.call(this,t,e,s);return"append"===t&&(i.children[0].data=Object(h["a"])(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=I["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(h["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(d["n"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(d["n"])(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=I["a"].options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter(t=>this.$slots[t]).map(t=>this.$createElement("template",{slot:t},this.$slots[t]));return this.$createElement($,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(a["a"],{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let s;s=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=s(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return Object(d["o"])(t,this.itemDisabled,!1)},getText(t){return Object(d["o"])(t,this.itemText,t)},getValue(t){return Object(d["o"])(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup)return;const e=1e3,s=performance.now();s-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=s;const i=this.allItems.findIndex(t=>{const e=(this.getText(t)||"").toString();return e.toLowerCase().startsWith(this.keyboardLookupPrefix)}),a=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?a:this.getValue(a)),this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(i)))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==d["t"].tab)return;const e=t.keyCode,s=this.$refs.menu;return this.$emit("keydown",t),s?(this.isMenuActive&&[d["t"].up,d["t"].down,d["t"].home,d["t"].end,d["t"].enter].includes(e)&&this.$nextTick(()=>{s.changeListIndex(t),this.$emit("update:list-index",s.listIndex)}),[d["t"].enter,d["t"].space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[d["t"].up,d["t"].down,d["t"].home,d["t"].end].includes(e)?this.onUpDown(t):e===d["t"].esc?this.onEscDown(t):e===d["t"].tab?this.onTabDown(t):e===d["t"].space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick(()=>this.isMenuActive=!this.isMenuActive),I["a"].options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.getContent().scrollTop=0)},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const s=e.activeTile;!this.multiple&&s&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),s.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const s=t.keyCode;e.isBooted=!0,window.requestAnimationFrame(()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(s){case d["t"].up:e.prevTile();break;case d["t"].down:e.nextTile();break;case d["t"].home:e.firstTile();break;case d["t"].end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])})},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),s=this.findExistingIndex(t);if(-1!==s?e.splice(s,1):e.push(t),this.setValue(e.map(t=>this.returnObject?t:this.getValue(t))),this.$nextTick(()=>{this.$refs.menu&&this.$refs.menu.updateDimensions()}),this.hideSelected)this.setMenuIndex(-1);else{const e=this.allItems.indexOf(t);~e&&(this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(e)))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const s of e){const e=this.allItems.findIndex(t=>this.valueComparator(this.getValue(t),this.getValue(s)));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}})},cc20:function(t,e,s){"use strict";s("8adc");var i=s("58df"),a=s("0789"),n=s("9d26"),r=s("a9ad"),o=s("4e82"),l=s("7560"),c=s("f2e7"),h=s("1c87"),d=s("af2b"),u=s("d9bd");e["a"]=Object(i["a"])(r["a"],d["a"],h["a"],l["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const a=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(a,i),e)}})},ce7e:function(t,e,s){"use strict";s("8ce9");var i=s("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},cf36:function(t,e,s){}}]);
//# sourceMappingURL=Userfavorite.ccfc9cf7.js.map