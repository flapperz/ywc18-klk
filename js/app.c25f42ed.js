(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ywc18-klk/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"12d3":function(t,e,a){},"2f45":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-spacer"),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("c275"),transition:"scale-transition",width:"40"}})],1),r("div",{staticClass:"klk-name"},[r("i",[t._v("คนละครึ่ง")])]),r("v-spacer"),r("SuperSearch"),r("v-spacer"),r("strong",[t._v("GAVE UP")]),r("v-spacer")],1),r("v-main",[r("HelloWorld")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},i=[],c={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},l=c,u=a("2877"),f=a("6544"),p=a.n(f),v=a("62ad"),h=a("a523"),d=a("adda"),m=a("0fd9"),y=Object(u["a"])(l,o,i,!1,null,null,null),b=y.exports;p()(y,{VCol:v["a"],VContainer:h["a"],VImg:d["a"],VRow:m["a"]});var g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"super-search"},[r("div",{staticClass:"item left center"},[r("select",{attrs:{name:"cars",id:"cars"}},[r("option",{attrs:{value:"volvo"}},[t._v("Volvo")]),r("option",{attrs:{value:"saab"}},[t._v("Saab")]),r("option",{attrs:{value:"mercedes"}},[t._v("Mercedes")]),r("option",{attrs:{value:"audi"}},[t._v("Audi")])])]),r("div",{staticClass:"item left"},[r("input",{attrs:{type:"text"}})]),r("div",{staticClass:"item bewel"},[r("img",{attrs:{src:a("5f6d"),width:"20px",height:"20px",alt:"Kiwi standing on oval"}})])])}],x={name:"SuperSearch"},w=x,j=(a("d8e2"),Object(u["a"])(w,g,_,!1,null,"0d32feb0",null)),C=j.exports,k={name:"App",components:{HelloWorld:b,SuperSearch:C},data:function(){return{}}},V=k,O=(a("63f5"),a("7496")),S=a("40dc"),P=a("f6c4"),A=a("2fa4"),E=Object(u["a"])(V,s,n,!1,null,"2dc4dc52",null),M=E.exports;p()(E,{VApp:O["a"],VAppBar:S["a"],VImg:d["a"],VMain:P["a"],VSpacer:A["a"]});var L=a("f309");r["a"].use(L["a"]);var W=new L["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:W,render:function(t){return t(M)}}).$mount("#app")},"5f6d":function(t,e,a){t.exports=a.p+"img/loupe.ecef733a.svg"},"63f5":function(t,e,a){"use strict";a("2f45")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},c275:function(t,e,a){t.exports=a.p+"img/logo-KLK.80828ad3.png"},d8e2:function(t,e,a){"use strict";a("12d3")}});
//# sourceMappingURL=app.c25f42ed.js.map