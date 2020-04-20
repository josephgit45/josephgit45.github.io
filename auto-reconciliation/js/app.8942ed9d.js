(function(e){function t(t){for(var _,l,r=t[0],i=t[1],n=t[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(_ in i)Object.prototype.hasOwnProperty.call(i,_)&&(e[_]=i[_]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,n||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],_=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(_=!1)}_&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var _={},s={app:0},o=[];function l(t){if(_[t])return _[t].exports;var a=_[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=_,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)l.d(a,_,function(t){return e[t]}.bind(null,_));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/auto-reconciliation/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var n=0;n<r.length;n++)t(r[n]);var c=i;o.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var _=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"info",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:"https://www.netclipart.com/pp/m/119-1193927_shih-tzu-icon-beech-wall-clock-shih-tzu.png",transition:"scale-transition",width:"80"}})],1),a("v-btn",{attrs:{target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Auto Reconciliation")])]),a("v-spacer"),a("v-btn",{on:{click:e.startReconcile}},[e._v(" Start Recon ")])],1),a("v-content",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8"}},[e.reconResultsText?a("v-sheet",{staticClass:"pa-4",staticStyle:{"margin-bottom":"1.7em","margin-top":"1.7em"},attrs:{elevation:"6"}},[a("p",[a("strong",[e._v("Total Difference:")]),e._v(" "+e._s(e.formatDollar(e.SAPData.total))+" - "+e._s(e.formatDollar(e.depositSlipData.total))+" - "+e._s(e.formatDollar(e.logFilesData.total))+" = "+e._s(e.formatDollar(e.SAPData.total-e.depositSlipData.total-e.logFilesData.total))+" ")])]):e._e()],1),a("v-col",{attrs:{cols:"8",sm:"4"}},[e.reconResultsText?a("v-sheet",{staticClass:"pa-4",staticStyle:{"margin-bottom":"1.7em","margin-top":"1.7em"},attrs:{elevation:"6"}},[a("h3",[e._v("CALCULATOR")]),a("v-textarea",{staticStyle:{"margin-top":"1.7em"},attrs:{height:50,rounded:"",filled:""},on:{keyup:e.handleCalculate},model:{value:e.calculateText,callback:function(t){e.calculateText=t},expression:"calculateText"}})],1):e._e()],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Upload SAP File ")]),a("v-file-input",{attrs:{label:"",outlined:"",dense:""},on:{change:e.handleSAPFileSelect}}),e.SAPData?a("v-sheet",{staticClass:"pa-12",attrs:{elevation:"6"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.SAPData.headers,items:e.SAPData.items,"disable-pagination":"","hide-default-footer":"",dense:""},on:{click:e.handleSAPDataTableClick}}),a("br"),e.SAPData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.SAPData.total)))]):e._e()],1):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Copy & Paste Deposit Slip Information ")]),a("v-sheet",{staticClass:"pa-6",attrs:{elevation:"6"}},[e.depositSlipData?a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.depositSlipData.headers,items:e.depositSlipData.items,"disable-pagination":"","hide-default-footer":"",dense:""}}):e._e(),a("br"),e.depositSlipData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.depositSlipData.total)))]):e._e(),a("v-textarea",{staticStyle:{"margin-top":"1.7em"},attrs:{height:100,rounded:"",filled:""},model:{value:e.depositSlipDataTextInput,callback:function(t){e.depositSlipDataTextInput=t},expression:"depositSlipDataTextInput"}}),a("v-btn",{attrs:{rounded:"",color:"info"},on:{click:e.handleDepositSlipInput}},[e._v(" Submit ")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"pa-2",staticStyle:{"margin-bottom":"1.7em"},attrs:{outlined:"",tile:""}},[e._v(" Upload Log Files ")]),a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var _=t.on;return[a("v-text-field",e._g({attrs:{label:"Select a date",readonly:""},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}},_))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(t){e.dateMenu=!1}},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1),a("v-file-input",{attrs:{label:"",disabled:!e.selectedDate,outlined:"",dense:"",multiple:""},on:{change:e.handleLogFileSelect}}),e.logFilesDataInProgress?a("div",[a("v-progress-circular",{attrs:{indeterminate:""}}),e._v(" Processing Files ")],1):e._e(),e.logFilesData&&!e.logFilesDataInProgress?a("v-sheet",{staticClass:"pa-12",attrs:{elevation:"6"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.logFilesData.headers,items:e.logFilesData.items,"disable-pagination":"","hide-default-footer":"",dense:""}}),a("br"),e.logFilesData?a("h5",[e._v("Total: "+e._s(e.formatDollar(e.logFilesData.total)))]):e._e()],1):e._e()],1)],1)],1)],1)],1)},o=[],l=a("ef3c"),r=l["a"],i=a("2877"),n=a("6544"),c=a.n(n),u=a("7496"),p=a("40dc"),d=a("8336"),D=a("b0af"),m=a("62ad"),f=a("a523"),h=a("a75b"),E=a("8fea"),P=a("2e4b"),g=a("23a7"),v=a("adda"),O=a("e449"),S=a("490a"),b=a("0fd9"),M=a("8dd9"),A=a("2fa4"),C=a("8654"),T=a("a844"),y=Object(i["a"])(r,s,o,!1,null,null,null),x=y.exports;c()(y,{VApp:u["a"],VAppBar:p["a"],VBtn:d["a"],VCard:D["a"],VCol:m["a"],VContainer:f["a"],VContent:h["a"],VDataTable:E["a"],VDatePicker:P["a"],VFileInput:g["a"],VImg:v["a"],VMenu:O["a"],VProgressCircular:S["a"],VRow:b["a"],VSheet:M["a"],VSpacer:A["a"],VTextField:C["a"],VTextarea:T["a"]});var k=a("f309");_["a"].use(k["a"]);var I=new k["a"]({});_["a"].config.productionTip=!1,new _["a"]({vuetify:I,render:function(e){return e(x)}}).$mount("#app")},ef3c:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("caad"),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2532"),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("1276"),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__),C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("2909"),xlsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("1146"),xlsx__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);__webpack_exports__["a"]={name:"App",components:{},data:function(){return{SAPData:null,depositSlipData:null,depositSlipDataTextInput:null,depositSlipCount:0,selectedLogFilesDate:null,dateMenu:!1,logFilesData:null,logFilesDataInProgress:!1,numFilesToProcess:0,numFilesProcessed:0,selectedDate:null,reconResultsText:null,calculateText:null}},computed:{selectedDateFormatted:function(){return new Date(this.selectedDate).toISOString().substring(0,10)},isAllDataInputted:function(){var e=this.SAPData&&Object.keys(this.SAPData.items).length>0,t=this.depositSlipData&&Object.keys(this.depositSlipData.items).length>0,a=this.logFilesData&&Object.keys(this.logFilesData.items).length>0;return e&&t&&a}},mounted:function(){},methods:{mockUpload:function(){},startReconcile:function(){var e=this;console.log("starting recon!"),this.SAPData.headers.push({text:"Matches",value:"matches"});var t=this.SAPData.items.map((function(e){return e.amount})),a=this.depositSlipData.items.map((function(e){return e.amount})),_=this.logFilesData.items.map((function(e){return e.amount}));this.SAPData=JSON.parse(JSON.stringify(this.SAPData)),this.depositSlipData=JSON.parse(JSON.stringify(this.depositSlipData)),this.logFilesData=JSON.parse(JSON.stringify(this.logFilesData)),this.SAPData.items.forEach((function(t){a.includes(t.amount)&&(t.matches="Deposit: ",t.matches+=e.depositSlipData.items.filter((function(e){return e.amount===t.amount}))[0].name),_.includes(t.amount)&&(t.matches="Log: ",t.matches+=e.logFilesData.items.filter((function(e){return e.amount===t.amount}))[0].name)})),this.depositSlipData.headers.push({text:"Matches",value:"matches"}),this.depositSlipData.items.forEach((function(e){t.includes(e.amount)&&(e.matches="SAP")})),this.logFilesData.headers.push({text:"Matches",value:"matches"}),this.logFilesData.items.forEach((function(e){t.includes(e.amount)&&(e.matches="SAP")})),console.log("After SAPData",this.SAPData),console.log("After depositSlip",this.depositSlipData),console.log("After logFilesData",this.logFilesData),this.reconResultsText="results"},handleSAPDataTableClick:function(e){console.log("event",e)},handleSAPFileSelect:function(e){var t=this;console.log("handleSAPFileSelect called",e),e&&this.parseExcel(e,(function(e){var a="__EMPTY_6",_="__EMPTY_7",s=[];t.SAPData={},t.SAPData.total=0,e.forEach((function(e){if(e[a]&&e[_]){var o=parseFloat(e[a].replace(/[$,]/g,""));o&&(s.push({amount:o,reference:e[_]}),t.SAPData.total+=parseFloat(o))}})),t.SAPData.headers=[{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],t.SAPData.items=s,console.log(JSON.stringify(t.SAPData))}))},handleDepositSlipInput:function(){var e=this.depositSlipDataTextInput;this.depositSlipDataTextInput=null;var t=e.split("\n");this.depositSlipData||(this.depositSlipData={},this.depositSlipData.items=[],this.depositSlipData.total=0);var a=[];this.depositSlipCount++;for(var _=0;_<t.length;_++){var s=t[_].length<=3&&!t[_].includes(".")&&parseInt(t[_])>0;if(s){var o=parseFloat(t[_+2].replace(/[$,]/g,"")),l=t[_+1];a.push({amount:o,reference:l,name:"Slip ".concat(this.depositSlipCount)}),this.depositSlipData.total+=parseFloat(o),_+=2}}this.depositSlipData.headers=[{text:"Name",value:"name"},{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],this.depositSlipData.items=[].concat(Object(C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__["a"])(this.depositSlipData.items),a),console.log(JSON.stringify(this.depositSlipData))},handleLogFileSelect:function(e){var t=this;console.log("handleLogFileSelect called",e),this.numFilesToProcess=e.length,this.numFilesProcessed=0,this.logFilesData={},this.logFilesData.headers=[{text:"Name",value:"name"},{text:"Date",value:"date"},{text:"Reference",value:"reference"},{text:"Amount",value:"amount"}],this.logFilesData.items=[],this.logFilesData.total=0,e.forEach((function(e){if(t.logFilesDataInProgress=!0,e){console.log("file",e);var a=e.name.split(" ")[0];t.parseExcel(e,(function(e){t.numFilesProcessed+=1;var _="__EMPTY_3",s="__EMPTY_2",o="__EMPTY_1",l=[];e.forEach((function(e){if(e[_]&&e[s]&&e[o]&&"Deposit Date"!=e[o]){var r=new Date(e[o]).toISOString().substring(0,10);if(r===t.selectedDateFormatted){var i=parseFloat(e[_].replace(/[$,]/g,""));i&&(console.log("pushing amount:",i),l.push({name:a,date:r,amount:i,reference:e[s]}),t.logFilesData.total+=i)}}})),t.logFilesData.items=[].concat(Object(C_Users_joseph_lee_Desktop_workspace_mystuff_auto_reconcilliation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__["a"])(t.logFilesData.items),l),t.numFilesProcessed===t.numFilesToProcess&&(t.logFilesDataInProgress=!1,console.log(JSON.stringify(t.logFilesData)))}))}}))},parseExcel:function(e,t){var a=new FileReader;a.readAsBinaryString(e),a.onerror=function(e){console.log("Error:",e)},a.onload=function(e){var a=e.target.result,_=xlsx__WEBPACK_IMPORTED_MODULE_13___default.a.read(a,{type:"binary"});_.SheetNames.forEach((function(e){var a=xlsx__WEBPACK_IMPORTED_MODULE_13___default.a.utils.sheet_to_json(_.Sheets[e],{raw:!1});t(a)}))}},handleCalculate:function handleCalculate(e){13===e.keyCode&&(this.calculateText=eval(this.calculateText))},formatDollar:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}}}});
//# sourceMappingURL=app.8942ed9d.js.map