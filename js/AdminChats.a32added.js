(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminChats"],{"570b":function(t,e,s){t.exports=s.p+"img/admin.491e3148.png"},"6bc4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"adminChats"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"ChatBtn me-lg-n16"},[s("v-btn",{staticClass:"mb-lg-2 pe-7",staticStyle:{color:"var(--color-deepwhite)"},attrs:{rounded:"",color:"var(--color-blue)",to:"/admin/adminChats"}},[s("v-icon",{staticClass:"me-1"},[t._v("mdi-account-outline")]),t._v(" 會員 ")],1),s("v-btn",{staticClass:"pe-7",staticStyle:{color:"var(--color-deepwhite)"},attrs:{rounded:"",color:"var(--color-blue)",to:"/admin/adminChatsO"}},[s("v-icon",{staticClass:"me-1"},[t._v("mdi-account-tie-outline")]),t._v(" 業主 ")],1)],1),s("div",{staticClass:"chatlist"},[s("v-card",{staticClass:"mx-auto",attrs:{rounded:"","max-width":"300",tile:""}},[s("v-list",{staticClass:"list",attrs:{rounded:"",color:"var(--color-deepwhite)"}},[s("v-subheader",{staticStyle:{"font-weight":"700"}},[t._v("會員列表")]),s("v-list-item-group",{attrs:{color:"var(--color-chatdeepblue)"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.getuser,(function(e){return s("v-list-item",{key:e.username,staticClass:"mb-3"},[s("v-avatar",{staticClass:"me-5",attrs:{size:"40"}},[s("v-img",{attrs:{src:"https://source.boringavatars.com/beam/120/"+e.account}})],1),s("v-list-item-content",[s("v-list-item-title",{staticStyle:{"font-weight":"700"},domProps:{textContent:t._s(e.username)}})],1)],1)})),1)],1)],1)],1),s("div",{staticClass:"main"},[s("AdminChat")],1)])])},r=[],n=s("1da1"),i=(s("96cf"),s("ada9")),c={components:{AdminChat:i["a"]},data:function(){return{getuser:[]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/admin",{headers:{authorization:"Bearer "+t.user.token}});case 3:s=e.sent,a=s.data,t.getuser=a.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得訊息失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},computed:{user:function(){return this.$store.getters["user/user"]},owner:function(){return this.$store.getters["owner/owner"]}},methods:{userlogout:function(){this.$store.dispatch("user/userlogout")},ownerlogout:function(){this.$store.dispatch("owner/ownerlogout")}}},o=c,l=s("2877"),u=s("6544"),d=s.n(u),m=s("8212"),v=s("8336"),h=s("b0af"),p=s("132d"),b=s("adda"),g=s("8860"),f=s("da13"),C=s("5d23"),x=s("1baa"),w=s("e0c7"),_=Object(l["a"])(o,a,r,!1,null,null,null);e["default"]=_.exports;d()(_,{VAvatar:m["a"],VBtn:v["a"],VCard:h["a"],VIcon:p["a"],VImg:b["a"],VList:g["a"],VListItem:f["a"],VListItemContent:C["a"],VListItemGroup:x["a"],VListItemTitle:C["b"],VSubheader:w["a"]})},ada9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"var(--color-blue)"}},[a("v-card",{staticClass:"mb-5 p-0",staticStyle:{border:"1px solid var(--color-deepwhite)"}},[a("div",{staticClass:"chatup"},[a("div",{staticClass:"row justify-space-between"},[a("div",{staticClass:"col-12 mt-5 d-flex justify-start align-center"},[a("img",{staticClass:"ms-3",attrs:{src:s("b4ee"),height:"50"}}),a("span",{staticClass:"membermes mx-2"},[t._v("管理員您好，我想檢舉「蘋果汁廣告公司」，他們的案子惡意不結案!!")])]),a("div",{staticClass:"col-12 mt-5 d-flex justify-end align-center"},[a("span",{staticClass:"Me mx-2"},[t._v(" 會員您好，我們十分重視用戶的接案體驗，根據您的問題，麻煩請提供以下資訊： "),a("br"),t._v(" 1.案件名稱 "),a("br"),t._v(" 2.發案方名稱 "),a("br"),t._v(" 3.承接紀錄 "),a("br"),t._v(" 4.對話紀錄 ")]),a("img",{staticClass:"me-3",attrs:{src:s("570b"),height:"50"}})]),a("div",{staticClass:"col-12 mt-5 d-flex justify-start align-center"},[a("img",{staticClass:"ms-3",attrs:{src:s("b4ee"),height:"50"}}),a("span",{staticClass:"membermes mx-2"},[t._v(" 1.案件名稱：DM 設計 "),a("br"),t._v(" 2.發案方名稱：蘋果汁廣告公司 ")])]),a("div",{staticClass:"col-12 mt-5 d-flex justify-start align-center"},[a("img",{staticClass:"ms-3",attrs:{src:s("b4ee"),height:"50"}}),a("span",{staticClass:"membermes mx-2"},[t._v("等一下我截個圖，上傳中")])]),a("div",{staticClass:"col-12 mt-5 d-flex justify-end align-center"},[a("span",{staticClass:"Me-oneline mx-2"},[t._v("好的，我們將盡快了解此事件並做出處置，結果會再通知您。")]),a("img",{staticClass:"me-3",attrs:{src:s("570b"),height:"50"}})])])])]),a("v-card",{staticClass:"d-flex justify-space-between align-end mt-n10",attrs:{color:"var(--color-white)"}},[a("v-textarea",{staticClass:"ms-10 me-3 chatin",attrs:{name:"input-7-1"},on:{"click:append-outer":t.sendMessage,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-btn",{staticClass:"mesbtn",attrs:{icon:"",width:"50",height:"50"},on:{click:t.sendMessage}},[a("v-icon",{attrs:{size:"30",color:"var(--color-blue)"}},[t._v("mdi-send")])],1)],1)],1)},r=[],n=s("1da1"),i=(s("96cf"),{data:function(){return{text:"",sending:!1,messages:[],timer:0,fetchingOld:!1,fetchOldest:!1}},props:{Umember:{type:Object,default:function(){return{username:"",account:"",_id:""}}},Omember:{type:Object,default:function(){return{ownername:"",account:"",_id:""}}}},methods:{sendMessage:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.sending&&0!==t.text.length&&0!==t.Umember._id.length){e.next=2;break}return e.abrupt("return");case 2:return t.sending=!0,e.prev=3,e.next=6,t.api.post("/chats/Umembers/".concat(t.Umember._id,"/messages"),{text:t.text},{headers:{authorization:"Bearer "+t.user.token}});case 6:s=e.sent,a=s.data,t.messages.push(a.result),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](3);case 13:t.sending=!1,t.text="";case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}),c=i,o=s("2877"),l=s("6544"),u=s.n(l),d=s("8336"),m=s("b0af"),v=s("132d"),h=s("a844"),p=Object(o["a"])(c,a,r,!1,null,null,null);e["a"]=p.exports;u()(p,{VBtn:d["a"],VCard:m["a"],VIcon:v["a"],VTextarea:h["a"]})}}]);
//# sourceMappingURL=AdminChats.a32added.js.map