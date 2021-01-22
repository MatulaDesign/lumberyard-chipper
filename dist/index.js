Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),produce=require("immer");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var produce__default=_interopDefaultLegacy(produce),extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __awaiter(e,i,a,s){return new(a=a||Promise)(function(n,t){function r(e){try{u(s.next(e))}catch(e){t(e)}}function o(e){try{u(s.throw(e))}catch(e){t(e)}}function u(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,o)}u((s=s.apply(e,i||[])).next())})}function __generator(n,r){var o,u,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,u&&(i=2&t[0]?u.return:t[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,t[1])).done)return i;switch(u=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,u=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(i=0<(i=a.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){a.label=t[1];break}if(6===t[0]&&a.label<i[1]){a.label=i[1],i=t;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(t);break}i[2]&&a.ops.pop(),a.trys.pop();continue}t=r.call(n,a)}catch(e){t=[6,e],u=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function __read(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(r=u.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),u=[],i={};return r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i;function r(r){o[r]&&(i[r]=function(n){return new Promise(function(e,t){1<u.push([r,n,e,t])||a(r,n)})})}function a(e,t){try{(n=o[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(s,c):p(u[0][2],n)}catch(e){p(u[0][3],e)}var n}function s(e){a("next",e)}function c(e){a("throw",e)}function p(e,t){e(t),u.shift(),u.length&&a(u[0][0],u[0][1])}}function newChip(e){return{data:e,status:{type:"IDLE"}}}function equalityCheck(e,t){function n(e){return"object"==typeof e?Object.keys(e).sort():[]}function r(e,t){return JSON.stringify(e)===JSON.stringify(t)}return e?r(n(e),n(t))?r(e,t)?"skip":"update":"warn":"update"}function chopper(e,t){var n=e.data?"function"!=typeof t?produce__default.default(e.data,function(){return t}):produce__default.default(e.data,t):"function"!=typeof t?produce__default.default(e.data,function(){return t}):produce__default.default({},t);return __assign(__assign({},e),{data:n})}function mockAsync(n,r){return new Promise(function(e,t){setTimeout(function(){void 0!==n?e(n):t({message:"Chipper: mockAsync() failed"})},r||0)})}function setAsync(r,o,u){return __awaiter(this,void 0,void 0,function(){function t(){return __asyncGenerator(this,arguments,function(){var n;return __generator(this,function(e){switch(e.label){case 0:return[4,__await((r.set(__assign(__assign({},r.get()),{status:{type:"LOADING"}})),(null==u?void 0:u.onInit)&&u.onInit()))];case 1:return[4,e.sent()];case 2:return e.sent(),[4,__await(function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,o];case 1:return[2,e.sent()];case 2:return[2,e.sent()];case 3:return[2]}})})}())];case 3:return[4,__await(n=e.sent())];case 4:return[4,__await.apply(void 0,[e.sent()])];case 5:return[4,e.sent()];case 6:return e.sent(),n instanceof Error?[4,__await((t=n.message,r.set(__assign(__assign({},r.get()),{status:{type:"ERROR",message:t}})),(null==u?void 0:u.onError)&&u.onError(t)))]:[3,8];case 7:return[2,e.sent()];case 8:return[4,__await((t=n,t=null!=u&&u.wrapResp?u.wrapResp(t):t,r.set({data:t,status:{type:"SUCCESS"}}),(null==u?void 0:u.onSuccess)&&u.onSuccess(t)))];case 9:return[2,e.sent()]}var t})})}var n;return __generator(this,function(e){switch(e.label){case 0:return(n=t()).next(),[4,n.next()];case 1:return e.sent(),n.next(),[2]}})})}var utils=Object.freeze({__proto__:null,newChip:newChip,equalityCheck:equalityCheck,chopper:chopper,mockAsync:mockAsync,setAsync:setAsync}),ChipperQueue=function(){function e(){this.queue=[]}return e.prototype.enqueue=function(e,t){this.queue.push({key:e,update:t})},e.prototype.dequeue=function(t){this.queue=this.queue.filter(function(e){return t!==e.update})},e.prototype.convey=function(t,n){this.queue.forEach(function(e){t===e.key&&("function"==typeof e.update?e.update(n):e.update=n)})},e}(),ChipperConveyor=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.chips=new Map,e}return __extends(e,t),e.prototype.createQueue=function(e){var t=this;e.map(function(e){return t.chips.set(e[0],newChip(e[1]))})},e.prototype.queryQueue=function(r,e){var o=this;return this.chips.has(r)||this.chips.set(r,newChip(e)),{get:function(e){return o.chips.get(e||r)},cut:function(e){return o.chips.delete(e||r)},set:function(e,t){var n;"function"==typeof e||e instanceof Promise?console.error("Chipper: Promises and functions passed to api.set() are ignored"):(void 0===(n=e).status&&(n=newChip(e)),o.chips.set(t||r,n),o.convey(t||r,n))}}},e}(ChipperQueue),Chipper=new ChipperConveyor;function chipperOperator(e,t,n){var r=e.queryQueue(t,n),n=r.get(),o=__read(React.useState(n),2)[1],u="LOADING"!==(null===(n=null==n?void 0:n.status)||void 0===n?void 0:n.type);return React.useEffect(function(){return e.enqueue(t,o),function(){u||e.dequeue(o)}},[]),r}function chipperService(u,i){var a=u.get(),s="LOADING"===(null===(e=null==a?void 0:a.status)||void 0===e?void 0:e.type);var e=__assign(__assign({},u),{set:function(e,t){var n=u.get(t);n?n.data?("update"===(n=equalityCheck(n.data,e))&&u.set(e,t||i),"warn"===n&&console.error("Chipper: You're trying to change \""+(t||i)+'" data shape')):u.set(e,t||i):console.error('Chipper: chip "'+t+"\" doesn't exist")}});return{data:null==a?void 0:a.data,status:null==a?void 0:a.status,api:e,set:function(r,o){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(e){switch(e.label){case 0:return s?[3,5]:(t=chopper(a,r),r instanceof Promise?[4,setAsync(u,r,o)]:[3,2]);case 1:return e.sent(),[3,5];case 2:return 0<(null==o?void 0:o.timeout)?(n=mockAsync(t.data,null==o?void 0:o.timeout),[4,setAsync(u,n,o)]):[3,4];case 3:return e.sent(),[3,5];case 4:"update"===(n=equalityCheck(a.data,t.data))&&u.set(t),"warn"===n&&console.error("Chipper: You're trying to change \""+i+'" data shape'),e.label=5;case 5:return[2]}})})}}}function useChipper(e,t,n){return chipperService(chipperOperator(e,t,n),t)}function useChip(e,t){return chipperService(chipperOperator(Chipper,e,t),e)}exports.ChipperConveyor=ChipperConveyor,exports.Utils=utils,exports.default=Chipper,exports.useChip=useChip,exports.useChipper=useChipper;
//# sourceMappingURL=index.js.map