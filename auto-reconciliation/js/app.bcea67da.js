(function(e){function t(t){for(var n,o,s=t[0],l=t[1],i=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(m.length)m.shift()();return _.push.apply(_,i||[]),a()}function a(){for(var e,t=0;t<_.length;t++){for(var a=_[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(_.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},_=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/auto-reconciliation/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=l;_.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"info",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:"https://www.netclipart.com/pp/m/119-1193927_shih-tzu-icon-beech-wall-clock-shih-tzu.png",transition:"scale-transition",width:"80"}})],1),a("v-btn",{attrs:{target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Auto Reconciliation")])]),a("v-spacer"),a("v-btn",{on:{click:e.startReconcile}},[e._v(" Start Recon ")])],1),a("v-content",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[e.reconResultsText?a("v-sheet",{staticClass:"pa-4",staticStyle:{"margin-bottom":"1.7em","margin-top":"1.7em"},attrs:{elevation:"6"}},[a("p",[a("strong",[e._v("Total Difference:")]),e._v(" "+e._s(e.formatDollar(e.SAPData.total))+" - "+e._s(e.formatDollar(e.depositSlipData.total))+" - "+e._s(e.formatDollar(e.logFilesData.total))+" = "+e._s(e.formatDollar(e.SAPData.total-e.depositSlipData.total-e.logFilesData.total))+" ")])]):e._e()],1),a("v-col",{attrs:{cols:"8",sm:"4"}},[e.reconResultsText?a("v-sheet",{staticClass:"pa-4",staticStyle:{"margin-bottom":"1.7em","margin-top":"1.7em"},attrs:{elevation:"6"}},[a("h3",[e._v("CALCULATOR")]),a("v-textarea",{staticStyle:{"margin-top":"1.7em"},attrs:{height:50,rounded:"",filled:""},on:{keyup:e.handleCalculate},model:{value:e.calculateText,callback:function(t){e.calculateText=t},expression:"calculateText"}})],1):e._e()],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Upload SAP File ")]),a("v-file-input",{attrs:{label:"",outlined:"",dense:""},on:{change:e.handleSAPFileSelect}}),e.SAPData?a("v-sheet",{staticClass:"pa-12",attrs:{elevation:"6"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.SAPData.headers,items:e.SAPData.items,"disable-pagination":"","hide-default-footer":"",dense:""},on:{click:e.handleSAPDataTableClick}}),a("br"),e.SAPData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.SAPData.total)))]):e._e()],1):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Copy & Paste Deposit Slip Information ")]),a("v-sheet",{staticClass:"pa-6",attrs:{elevation:"6"}},[e.depositSlipData?a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.depositSlipData.headers,items:e.depositSlipData.items,"disable-pagination":"","hide-default-footer":"",dense:""}}):e._e(),a("br"),e.depositSlipData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.depositSlipData.total)))]):e._e(),a("v-textarea",{staticStyle:{"margin-top":"1.7em"},attrs:{height:100,rounded:"",filled:""},model:{value:e.depositSlipDataTextInput,callback:function(t){e.depositSlipDataTextInput=t},expression:"depositSlipDataTextInput"}}),a("v-btn",{attrs:{rounded:"",color:"info"},on:{click:e.handleDepositSlipInput}},[e._v(" Submit ")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Upload Log Files ")]),a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Select a date",readonly:""},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}},n))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(t){e.dateMenu=!1}},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1),a("v-file-input",{attrs:{label:"",disabled:!e.selectedDate,outlined:"",dense:"",multiple:""},on:{change:e.handleLogFileSelect}}),e.logFilesDataInProgress?a("div",[a("v-progress-circular",{attrs:{indeterminate:""}}),e._v(" Processing Files ")],1):e._e(),e.logFilesData&&!e.logFilesDataInProgress?a("v-sheet",{staticClass:"pa-12",attrs:{elevation:"6"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.logFilesData.headers,items:e.logFilesData.items,"disable-pagination":"","hide-default-footer":"",dense:""}}),a("br"),e.logFilesData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.logFilesData.total)))]):e._e()],1):e._e()],1)],1)],1)],1)],1)},_=[],o=a("ef3c"),s=o["a"],l=a("2877"),i=a("6544"),c=a.n(i),u=a("7496"),m=a("40dc"),p=a("8336"),f=a("b0af"),d=a("62ad"),D=a("a523"),E=a("a75b"),S=a("8fea"),h=a("2e4b"),C=a("23a7"),P=a("adda"),O=a("e449"),A=a("490a"),v=a("0fd9"),M=a("8dd9"),g=a("2fa4"),b=a("8654"),I=a("a844"),T=Object(l["a"])(s,r,_,!1,null,null,null),L=T.exports;c()(T,{VApp:u["a"],VAppBar:m["a"],VBtn:p["a"],VCard:f["a"],VCol:d["a"],VContainer:D["a"],VContent:E["a"],VDataTable:S["a"],VDatePicker:h["a"],VFileInput:C["a"],VImg:P["a"],VMenu:O["a"],VProgressCircular:A["a"],VRow:v["a"],VSheet:M["a"],VSpacer:g["a"],VTextField:b["a"],VTextarea:I["a"]});var R=a("f309");n["a"].use(R["a"]);var K=new R["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:K,render:function(e){return e(L)}}).$mount("#app")},ef3c:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("caad"),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2532"),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("1276"),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__),C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("2909"),xlsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("1146"),xlsx__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);__webpack_exports__["a"]={name:"App",components:{},data:function(){return{SAPData:null,depositSlipData:null,depositSlipDataTextInput:null,depositSlipCount:0,selectedLogFilesDate:null,dateMenu:!1,logFilesData:null,logFilesDataInProgress:!1,numFilesToProcess:0,numFilesProcessed:0,selectedDate:null,reconResultsText:null,calculateText:null}},computed:{selectedDateFormatted:function(){return new Date(this.selectedDate).toISOString().substring(0,10)},isAllDataInputted:function(){var e=this.SAPData&&Object.keys(this.SAPData.items).length>0,t=this.depositSlipData&&Object.keys(this.depositSlipData.items).length>0,a=this.logFilesData&&Object.keys(this.logFilesData.items).length>0;return e&&t&&a}},mounted:function(){this.mockUpload()},methods:{mockUpload:function(){this.SAPData=JSON.parse('{"total":889481.6299999994,"headers":[{"text":"Reference","value":"reference"},{"text":"Amount","value":"amount"}],"items":[{"amount":103.06,"reference":"2040255"},{"amount":217.98,"reference":"22637716"},{"amount":51.09,"reference":"22645595"},{"amount":6865.97,"reference":"3384238"},{"amount":537460.96,"reference":"985169"},{"amount":9715.21,"reference":"985188"},{"amount":392.44,"reference":"985194"},{"amount":6851.48,"reference":"985201"},{"amount":57283.26,"reference":"ACH040220"},{"amount":17088.46,"reference":"ACH2052"},{"amount":2047.42,"reference":"CHK 00164"},{"amount":10453.31,"reference":"CHK 02100"},{"amount":5227.05,"reference":"CHK 04268"},{"amount":2952,"reference":"CHK 04280"},{"amount":2143.83,"reference":"CHK 04555"},{"amount":439.87,"reference":"CHK 13116"},{"amount":684.49,"reference":"CHK 13283"},{"amount":1488.4,"reference":"CHK 17263"},{"amount":403.91,"reference":"CHK 17663"},{"amount":1478,"reference":"CHK 17667"},{"amount":2856.77,"reference":"CHK 18967"},{"amount":1933.84,"reference":"CHK 19487"},{"amount":456,"reference":"CHK 26987"},{"amount":669.7,"reference":"CHK 26988"},{"amount":546.2,"reference":"CHK 28551"},{"amount":1152.88,"reference":"CHK 29679"},{"amount":138.45,"reference":"CHK 30338"},{"amount":195.49,"reference":"CHK 32472"},{"amount":208,"reference":"CHK 32473"},{"amount":566.15,"reference":"CHK 35116"},{"amount":257.49,"reference":"CHK 36094"},{"amount":98.91,"reference":"CHK 40002"},{"amount":1074.12,"reference":"CHK 40004"},{"amount":1448.47,"reference":"CHK 41407"},{"amount":1592.13,"reference":"CHK 44141"},{"amount":9771,"reference":"CHK 47526"},{"amount":1081.12,"reference":"CHK 52296"},{"amount":162140.19,"reference":"CHK 55131"},{"amount":111.82,"reference":"CHK 58058"},{"amount":89.1,"reference":"CHK 59425"},{"amount":29.32,"reference":"CHK 60665"},{"amount":849.21,"reference":"CHK 66167"},{"amount":1021.2,"reference":"CHK 70041"},{"amount":916.43,"reference":"CHK 70748"},{"amount":2257.07,"reference":"CHK 80984"},{"amount":516.96,"reference":"CHK 81005"},{"amount":3778.34,"reference":"CHK 81006"},{"amount":138.51,"reference":"CHK 81007"},{"amount":5570.32,"reference":"CHK 81016"},{"amount":1324,"reference":"CHK 81024"},{"amount":376.13,"reference":"CK 10015"},{"amount":4139.86,"reference":"CK 80244"},{"amount":3909.87,"reference":"CK#20363"},{"amount":1810.43,"reference":"CK#215630"},{"amount":89.94,"reference":"CK#22727"},{"amount":1659.35,"reference":"CK#246778"},{"amount":1989.6,"reference":"CK#2591977"},{"amount":1113.47,"reference":"CK#313800"},{"amount":4162.48,"reference":"CK#4892"},{"amount":247.72,"reference":"CK#53946"},{"amount":2073.49,"reference":"CK#75105"},{"amount":1079.92,"reference":"CK#893"},{"amount":691.99,"reference":"WIRE0402"}]}'),this.depositSlipData=JSON.parse('{"items":[{"amount":98.91,"reference":"HIGH STAGE CORPORATION","name":"Slip 1"},{"amount":1074.12,"reference":"HIGH STAGE CORPORATION","name":"Slip 1"},{"amount":1488.4,"reference":"APOLLO SIDING","name":"Slip 1"},{"amount":89.1,"reference":"CLAY INGELS","name":"Slip 1"},{"amount":456,"reference":"EDCO PRODUCTS","name":"Slip 1"},{"amount":669.7,"reference":"EDCO PRODUCTS","name":"Slip 1"},{"amount":1152.88,"reference":"UNITED STATES BUILDING","name":"Slip 1"},{"amount":2856.77,"reference":"P AND W ROOFING","name":"Slip 1"},{"amount":208,"reference":"NORTH COUNTIES","name":"Slip 1"},{"amount":195.49,"reference":"NORTH COUNTIES","name":"Slip 1"},{"amount":1933.84,"reference":"AUGUSTA SASH AND DOOR","name":"Slip 1"},{"amount":916.43,"reference":"ILLEGIBLE","name":"Slip 1"},{"amount":849.21,"reference":"ARCADIA SASH AND DOOR","name":"Slip 1"},{"amount":1021.2,"reference":"MIDWAY SALES","name":"Slip 1"},{"amount":2047.42,"reference":"ORGILL","name":"Slip 1"},{"amount":2952,"reference":"GENTEK","name":"Slip 1"},{"amount":5227.05,"reference":"GENTEK","name":"Slip 1"},{"amount":5570.32,"reference":"PCI","name":"Slip 1"},{"amount":1324,"reference":"PCI","name":"Slip 1"},{"amount":138.51,"reference":"PCI","name":"Slip 1"},{"amount":516.96,"reference":"PCI","name":"Slip 1"},{"amount":10453.31,"reference":"TIMBERLINE EXTERIOR","name":"Slip 1"},{"amount":138.45,"reference":"HOPPER ROOFING","name":"Slip 1"},{"amount":1081.12,"reference":"MANIONS WHOLESALE","name":"Slip 1"},{"amount":1448.47,"reference":"CROSSROADS","name":"Slip 1"},{"amount":2257.07,"reference":"WAKE SUPPLY","name":"Slip 1"},{"amount":2143.83,"reference":"LIBERTY ROOFING","name":"Slip 1"},{"amount":546.2,"reference":"EMCO BUILDING","name":"Slip 1"},{"amount":162140.19,"reference":"THE WOLF ORGANIZATION","name":"Slip 1"},{"amount":257.49,"reference":"PROVIA THE PROFESSIONAL","name":"Slip 1"},{"amount":111.82,"reference":"CARTER JONES","name":"Slip 1"},{"amount":9771,"reference":"HOLMES SIDING","name":"Slip 1"},{"amount":566.15,"reference":"CARDINAL BUILDING","name":"Slip 1"},{"amount":684.49,"reference":"DEALERS WAREHOUSE","name":"Slip 1"},{"amount":403.91,"reference":"ALL AMERICAN VINYL","name":"Slip 1"},{"amount":1478,"reference":"ALL AMERICAN VINYL","name":"Slip 1"},{"amount":29.32,"reference":"SOUTHARD COPR","name":"Slip 1"},{"amount":3778.34,"reference":"PCI","name":"Slip 1"},{"amount":439.87,"reference":"CENTURY PRODUCTS","name":"Slip 1"},{"amount":195008.26,"reference":"CAPTIAL LUMBER","name":"Slip 1"},{"amount":392.44,"reference":"LMC","name":"Slip 1"},{"amount":57283.26,"reference":"HOLDEN HUMPHREY","name":"Slip 1"},{"amount":17088.46,"reference":"EAST SIDE LUMBER","name":"Slip 1"},{"amount":103.06,"reference":"84 LUMBER","name":"Slip 2"},{"amount":9715.21,"reference":"LMC","name":"Slip 2"},{"amount":537460.96,"reference":"LMC","name":"Slip 2"},{"amount":6851.48,"reference":"LMC","name":"Slip 2"}],"total":1052418.47,"headers":[{"text":"Name","value":"name"},{"text":"Reference","value":"reference"},{"text":"Amount","value":"amount"}]}'),this.logFilesData=JSON.parse('{"headers":[{"text":"Name","value":"name"},{"text":"Date","value":"date"},{"text":"Reference","value":"reference"},{"text":"Amount","value":"amount"}],"items":[{"name":"Latta","date":"2020-04-02","amount":1113.47,"reference":"313800"},{"name":"Latta","date":"2020-04-02","amount":3909.87,"reference":"20363"},{"name":"Latta","date":"2020-04-02","amount":247.72,"reference":"53946"},{"name":"Latta","date":"2020-04-02","amount":2073.49,"reference":"75105"},{"name":"Latta","date":"2020-04-02","amount":1810.43,"reference":"215630"},{"name":"Latta","date":"2020-04-02","amount":89.94,"reference":"22727"},{"name":"Latta","date":"2020-04-02","amount":1659.35,"reference":"246778"},{"name":"Latta","date":"2020-04-02","amount":1079.92,"reference":"4893"},{"name":"Latta","date":"2020-04-02","amount":4162.48,"reference":"4892"},{"name":"Latta","date":"2020-04-02","amount":376.13,"reference":"10015"},{"name":"Latta","date":"2020-04-02","amount":4139.86,"reference":"80244"},{"name":"Latta","date":"2020-04-02","amount":51.09,"reference":"CCV7354"},{"name":"Latta","date":"2020-04-02","amount":217.98,"reference":"CCV6837"},{"name":"Latta","date":"2020-04-02","amount":691.99,"reference":"WIRE0402"},{"name":"Mid","date":"2020-04-02","amount":1989.6,"reference":"2591977"},{"name":"Mid","date":"2020-04-02","amount":6865.97,"reference":"3384238"}],"total":30479.29}')},startReconcile:function(){var e=this;console.log("starting recon!"),this.SAPData.headers.push({text:"Matches",value:"matches"});var t=this.SAPData.items.map((function(e){return e.amount})),a=this.depositSlipData.items.map((function(e){return e.amount})),n=this.logFilesData.items.map((function(e){return e.amount}));this.SAPData.items.forEach((function(t){a.includes(t.amount)&&(t.matches="Deposit: ",t.matches+=e.depositSlipData.items.filter((function(e){return e.amount===t.amount}))[0].name),n.includes(t.amount)&&(t.matches="Log: ",t.matches+=e.logFilesData.items.filter((function(e){return e.amount===t.amount}))[0].name)})),this.depositSlipData.headers.push({text:"Matches",value:"matches"}),this.depositSlipData.items.forEach((function(e){t.includes(e.amount)&&(e.matches="SAP")})),this.logFilesData.headers.push({text:"Matches",value:"matches"}),this.logFilesData.items.forEach((function(e){t.includes(e.amount)&&(e.matches="SAP")})),this.reconResultsText="results"},handleSAPDataTableClick:function(e){console.log("event",e)},handleSAPFileSelect:function(e){var t=this;console.log("handleSAPFileSelect called",e),e&&this.parseExcel(e,(function(e){var a="__EMPTY_6",n="__EMPTY_7",r=[];t.SAPData={},t.SAPData.total=0,e.forEach((function(e){if(e[a]&&e[n]){var _=parseFloat(e[a].replace(/[$,]/g,""));_&&(r.push({amount:_,reference:e[n]}),t.SAPData.total+=parseFloat(_))}})),t.SAPData.headers=[{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],t.SAPData.items=r,console.log(JSON.stringify(t.SAPData))}))},handleDepositSlipInput:function(){var e=this.depositSlipDataTextInput;this.depositSlipDataTextInput=null;var t=e.split("\n");this.depositSlipData||(this.depositSlipData={},this.depositSlipData.items=[],this.depositSlipData.total=0);var a=[];this.depositSlipCount++;for(var n=0;n<t.length;n++){var r=t[n].length<=3&&!t[n].includes(".")&&parseInt(t[n])>0;if(r){var _=parseFloat(t[n+2].replace(/[$,]/g,"")),o=t[n+1];a.push({amount:_,reference:o,name:"Slip ".concat(this.depositSlipCount)}),this.depositSlipData.total+=parseFloat(_),n+=2}}this.depositSlipData.headers=[{text:"Name",value:"name"},{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],this.depositSlipData.items=[].concat(Object(C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__["a"])(this.depositSlipData.items),a),console.log(JSON.stringify(this.depositSlipData))},handleLogFileSelect:function(e){var t=this;console.log("handleLogFileSelect called",e),this.numFilesToProcess=e.length,this.numFilesProcessed=0,this.logFilesData={},this.logFilesData.headers=[{text:"Name",value:"name"},{text:"Date",value:"date"},{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],this.logFilesData.items=[],this.logFilesData.total=0,e.forEach((function(e){if(t.logFilesDataInProgress=!0,e){console.log("file",e);var a=e.name.split(" ")[0];t.parseExcel(e,(function(e){t.numFilesProcessed+=1;var n="__EMPTY_3",r="__EMPTY_2",_="__EMPTY_1",o=[];e.forEach((function(e){if(e[n]&&e[r]&&e[_]&&"Deposit Date"!=e[_]){var s=new Date(e[_]).toISOString().substring(0,10);if(s===t.selectedDateFormatted){var l=parseFloat(e[n].replace(/[$,]/g,""));l&&(console.log("pushing amount:",l),o.push({name:a,date:s,amount:l,reference:e[r]}),t.logFilesData.total+=l)}}})),t.logFilesData.items=[].concat(Object(C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__["a"])(t.logFilesData.items),o),t.numFilesProcessed===t.numFilesToProcess&&(t.logFilesDataInProgress=!1,console.log(JSON.stringify(t.logFilesData)))}))}}))},parseExcel:function(e,t){var a=new FileReader;a.readAsBinaryString(e),a.onerror=function(e){console.log("Error:",e)},a.onload=function(e){var a=e.target.result,n=xlsx__WEBPACK_IMPORTED_MODULE_13___default.a.read(a,{type:"binary"});n.SheetNames.forEach((function(e){var a=xlsx__WEBPACK_IMPORTED_MODULE_13___default.a.utils.sheet_to_json(n.Sheets[e],{raw:!1});t(a)}))}},handleCalculate:function handleCalculate(e){13===e.keyCode&&(this.calculateText=eval(this.calculateText))},formatDollar:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}}}});
//# sourceMappingURL=app.bcea67da.js.map