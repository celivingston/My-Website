if (self.CavalryLogger) { CavalryLogger.start_js(["Ep6HY"]); }

__d("AdsLoadState_LEGACY",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({DELETING:null,ERROR:null,LOADED:null,LOADING:null,UPDATING:null,NOT_LOADED:null,PENDING_WRITE:null});e.exports=a}),null);
__d("AdsCachedLoadState_LEGACY",["AdsLoadState_LEGACY","ImmutableObject","mapObject"],(function(a,b,c,d,e,f){var g;a=(g||b("mapObject"))(b("AdsLoadState_LEGACY"),function(a){return new(b("ImmutableObject"))({loadState:a})});e.exports=a}),null);
__d("adsCreateSelectorContainer",["FluxContainerInstrumentation","FluxContainerNameUtils","FluxContainerSubscriptions","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c,d){var e=a.name||"SelectorContainer(unknown)",f=function(c,d){c=b("FluxContainerInstrumentation").onCalculateStateStart(e);d=a(d);c&&c();return d},h=function(d){babelHelpers.inheritsLoose(h,d);function h(a){var c;c=d.call(this,a)||this;c.$2=null;c.$1=new(b("FluxContainerSubscriptions"))(c.constructor.name,b("FluxContainerInstrumentation").hasInstrumentation()?function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(c.$2=c.$2||[],b("FluxContainerInstrumentation").addStoreDependencies(c.$2,a))}:null);return c}var i=h.prototype;i.UNSAFE_componentWillMount=function(){var c=this;a.getStores().length>0&&(this.$1.setStores(a.getStores()),this.$1.addListener(function(){var a=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch(),d=c.$2;c.$2=null;c.setState(function(g,h){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(c,e,d||[],a);return f(g,h)})}));this.setState(function(a,d){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(c,e);return f(a,d)})};i.componentWillUnmount=function(){this.$1.reset()};i.render=function(){return g.jsx(c,babelHelpers["extends"]({},this.state))};return h}(g.PureComponent);if(b("FluxContainerInstrumentation").hasInstrumentation()){var i=!1;h=function(a){babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;i||(b("FluxContainerInstrumentation").onInit(c.constructor),i=!0);return c}var d=c.prototype;d.componentDidUpdate=function(c,d){a.prototype.componentDidUpdate&&a.prototype.componentDidUpdate.call(this,c,d),b("FluxContainerInstrumentation").onDidUpdate(this,e,c,this.props,d,this.state)};return c}(h)}if(d&&d.withProps)return function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(){var a=this,c=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();this.setState(function(d,g){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(a,e,c);return f(d,g)})};return c}(h);b("FluxContainerNameUtils").nameContainer(h,e);return h}e.exports=a}),null);
__d("AdsStoreUtils",["AdsCachedLoadState_LEGACY","AdsLoadState_LEGACY","adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a={updateLoading_LEGACY:function(a,c){var d=[];c.forEach(function(c){var e=a.get(c,b("AdsCachedLoadState_LEGACY").NOT_LOADED);e&&e.loadState===b("AdsLoadState_LEGACY").NOT_LOADED&&(a.set(c,b("AdsCachedLoadState_LEGACY").LOADING),d.push(c))});return d},hasAnyStoreInformedOnPayload:function(a){return a.some(function(a){return a.hasChanged()})},flattenLists:function(a){var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b=b.concat(e[1].list)}return b},toSelector:function(a){var c=a.__selector;c||(c=b("adsCreateStoreSelector")([a],function(){return a.getState()},{name:"toSelector("+(a.__moduleID||"unknown")+")"}),a.__selector=c);return c}};e.exports=a}),null);
__d("FDSCancelButton.react",["fbt","FDSButton.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("FDSButton.react"),babelHelpers["extends"]({},this.props,{label:g._("Cancel"),layerAction:"cancel"}))};return c}(h.PureComponent);a.defaultProps=b("FDSButton.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSCancelButton",a)}),null);
__d("FDSCheckboxInput.react",["cx","FDSBaseCheckboxInput.react","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSText.react","FlexLayout.react","React","cxMargin","makeFDSStandardComponent","stylex","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");a=b("React");var j=a.useContext;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("uniqueID")(),d.$2=b("uniqueID")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=i.jsxs(i.Fragment,{children:[i.jsx(b("FDSBaseCheckboxInput.react"),{"data-testid":a["data-testid"],describedBy:a.description!=null?this.$2:void 0,htmlForTargetId:this.$1,isDisabled:a.isDisabled,onChange:a.onChange,size:a.size,value:a.value}),i.jsx(l,{description:a.description,descriptionID:this.$2,id:this.$1,isDisabled:a.isDisabled,isLarge:a.size==="large",label:a.label,labelIsHidden:a.labelIsHidden})]});return a.labelIsHidden?c:i.jsx(b("FlexLayout.react"),{align:a.description!=null?"start":"center",className:a.isDisabled?"i1d4nph4 fyvuzq3f":"",children:c})};return c}(i.PureComponent);c.defaultProps={isDisabled:!1,labelIsHidden:!1,size:"medium"};function k(a){return i.jsx("div",{"aria-hidden":!0,className:"nngj4jli",children:i.jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"secondary",id:a.id,margin:"_3-8w",size:a.isGeo?"small":"body3",weight:"normal",children:a.description})})}function l(a){var c=a.description,d=a.descriptionID,e=a.id,f=a.isDisabled,g=a.isLarge,l=a.label;a=a.labelIsHidden;var m=j(b("FDSPrivateThemeContext.react"));m=b("FDSPrivateThemeUtils").isGeo(m);l=i.jsx(b("FDSText.react"),{color:f?"disabled":"primary",size:m?"body1":"body2",weight:"normal",children:l});return i.jsx("label",{className:a?"accessible_elem":"fz6ubfb3 hu05rctj fyvuzq3f",htmlFor:e,children:c!=null?i.jsxs("div",{className:(h||(h=b("stylex"))).dedupe({"margin-top-1":"tn72i4zi"},g?{"margin-top-1":"sgv91cuz"}:null),children:[l,i.jsx(k,{description:c,id:d,isDisabled:f,isGeo:m})]}):l})}e.exports=b("makeFDSStandardComponent")("FDSCheckboxInput",c)}),null);
__d("ArgumentError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){return a.call(this,b,c)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("flattenObject",[],(function(a,b,c,d,e,f){"use strict";a=function(a){var b={};for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(null===d||void 0===d)continue;else typeof d==="string"?b[c]=d:b[c]=JSON.stringify(d)}return b};e.exports=a}),null);
__d("sdk.URI",["QueryString","URIBase"],(function(a,b,c,d,e,f){var g,h=/\.facebook\.com$/,i={serialize:function(a){return a?b("QueryString").encode(a):""},deserialize:function(a){return a?b("QueryString").decode(a):{}}};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b,i)||this}var d=c.prototype;d.isFacebookURI=function(){return h.test(this.getDomain())};d.valueOf=function(){return this.toString()};c.isValidURI=function(a){return(g||(g=b("URIBase"))).isValid(a,i)};return c}(g||(g=b("URIBase")));e.exports=a}),null);
__d("ApiClientUtils",["ArgumentError","Assert","Log","flattenObject","sdk.URI","sprintf"],(function(a,b,c,d,e,f){var g={get:!0,post:!0,"delete":!0,put:!0};function a(a){var c=a.shift();b("Assert").isString(c,"Invalid path");!/^https?/.test(c)&&c.charAt(0)!=="/"&&(c="/"+c);var d={};try{c=new(b("sdk.URI"))(c)}catch(a){throw new(b("ArgumentError"))(a.message,a)}a.forEach(function(a){return d[typeof a]=a});a=(d.string||"get").toLowerCase();b("Assert").isTrue(Object.prototype.hasOwnProperty.call(g,a),b("sprintf")("Invalid method passed to ApiClient: %s",a));var e=d["function"];e||b("Log").warn("No callback passed to the ApiClient");d.object&&c.addQueryData(b("flattenObject")(d.object));var f=c.getQueryData();f.method=a;return{uri:c,callback:e,params:f}}e.exports={parseCallDataFromArgs:a}}),null);
__d("sdk.safelyParseResponse",["errorCode","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";c=function(a,b,c){return h};function a(a,d){d===void 0&&(d=null);try{return a===null?h:JSON.parse(b("nullthrows")(a))}catch(b){return c(b,a,d)}}var h={error:{code:1,error_subcode:1357046,message:"Received Invalid JSON reply.",type:"http"}};a.ERROR=h;a.setErrorHandler=function(a){c=a};e.exports=a}),null);
__d("ApiBatcher",["invariant","ApiClientUtils","QueryString","sdk.safelyParseResponse","whitelistObjectKeys"],(function(a,b,c,d,e,f,g){"use strict";var h=50,i=105440539523;a=function(){function a(a,b){this.$1=[],this.$2=[],this.$4=null,this.executeRequest=a,this.$3=b}var c=a.prototype;c.scheduleBatchCall=function(){var b=this;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];var f=a.prepareBatchParams(d),g=f.body,i=f.callback,j=f.method,k=f.relative_url,l={method:j,relative_url:k};g&&(l.body=g);this.$1.push(l);this.$2.push(i);this.$1.length==h?(this.$4&&clearTimeout(this.$4),this.$5()):this.$4||(this.$4=setTimeout(function(){b.$5()},0))};a.prepareBatchParams=function(a,c){c===void 0&&(c=[]);a=b("ApiClientUtils").parseCallDataFromArgs(a);var d=a.uri,e=a.callback;a=a.params.method;var f,g=d.removeQueryData("method").toString();if(a.toLowerCase()=="post"){var h=d.getQueryData();f=b("QueryString").encode(h);h=b("whitelistObjectKeys")(h,c);g=d.setQueryData(h).toString()}return{body:f,callback:e,method:a,relative_url:g}};c.$5=function(){this.$1.length>0||g(0,4698);this.$1.length===this.$2.length||g(0,4699);var a=this.$1,c=this.$2;this.$1=[];this.$2=[];this.$4=null;if(a.length===1){var d=a[0],e=c[0],f=d.body?b("QueryString").decode(d.body):null;this.executeRequest(d.relative_url,d.method,f,e);return}this.executeRequest("/","POST",{batch:a,include_headers:!1,batch_app_id:this.$3||i},function(a){Array.isArray(a)?a.forEach(function(a,d){c[d](b("sdk.safelyParseResponse")(a&&a.body))}):c.forEach(function(a){return a({error:{message:"Fatal: batch call failed."}})})})};return a}();e.exports=a}),null);
__d("RequestConstants",["errorCode"],(function(a,b,c,d,e,f,g){a={code:1,error_subcode:1357045,message:"unknown error (empty response)",type:"http",status:0};e.exports={PARSE_ERROR_TEMPLATE:a}}),null);
__d("CORSRequest",["Log","QueryString","RequestConstants","sdk.safelyParseResponse","wrapFunction"],(function(a,b,c,d,e,f){function g(a,c){if(!self.XMLHttpRequest)return null;var d=new XMLHttpRequest(),e=function(){};if("withCredentials"in d)d.open(a,c,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded");else if(self.XDomainRequest){d=new XDomainRequest();try{d.open(a,c),d.onprogress=d.ontimeout=e}catch(a){return null}}else return null;var f={send:function(a){d.send(a)}},g=b("wrapFunction")(function(){g=e,"onload"in f&&f.onload(d)},"entry","XMLHttpRequest:load"),h=b("wrapFunction")(function(){h=e,"onerror"in f&&f.onerror(d)},"entry","XMLHttpRequest:error");d.onload=function(){g()};d.onerror=function(){h()};d.onreadystatechange=function(){d.readyState==4&&(d.status==200?g():h())};return f}function a(a,c,d,e){if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("CORSRequest.execute(): path traversal is not allowed.");return!1}d.suppress_http_code=1;d=b("QueryString").encode(d);c!="post"&&(a=b("QueryString").appendToUrl(a,d),d="");c=g(c,a);if(!c)return!1;c.onload=function(c){e(b("sdk.safelyParseResponse")(c.responseText,a))};c.onerror=function(c){c.responseText?e(b("sdk.safelyParseResponse")(c.responseText,a)):e({error:babelHelpers["extends"]({},b("RequestConstants").PARSE_ERROR_TEMPLATE,{status:c.status})})};c.send(d);return!0}c={execute:a};e.exports=c}),null);
__d("ChunkedRequest",["Log","QueryString","RequestConstants","sdk.safelyParseResponse","wrapFunction"],(function(a,b,c,d,e,f){var g="{}",h=function(){"use strict";function a(a){a===void 0&&(a="\r\n"),this.offset=0,this.delimiter="\r\n",this.delimiter=a}var b=a.prototype;b.parse=function(a,b){b===void 0&&(b=!1);var c=[],d=a.substring(this.offset),e=0,f=d.indexOf(this.delimiter,e);f===0&&(e=this.delimiter.length,f=d.indexOf(this.delimiter,e));while(f>-1){var g=d.substring(e,f);g&&c.push(g);e=f+this.delimiter.length;f=d.indexOf(this.delimiter,e)}this.offset+=e;if(b&&d&&f===-1){g=a.substring(this.offset);c.push(g)}return c};return a}();function i(a,c){if(!self.XMLHttpRequest)return null;var d=new XMLHttpRequest();if(!("withCredentials"in d))return null;d.open(a,c,!0);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");var e=new h(),f={send:function(a){d.send(a)}},i=b("wrapFunction")(function(a,b){if(f.onchunk){a=e.parse(a);a.forEach(function(a){return f.onchunk(a,b)});b&&f.onchunk(g,b)}},"entry","XMLHttpRequest:onchunk"),j=b("wrapFunction")(function(){f.onerror&&f.onerror(d)},"entry","XMLHttpRequest:error");d.onerror=j;d.onreadystatechange=function(){d.readyState==4?d.status===200?i(d.responseText,!0):j():d.readyState==3&&i(d.responseText,!1)};return f}function a(a,c,d,e){if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("ChunkedRequest.execute(): path traversal is not allowed.");return!1}d.suppress_http_code=1;d=b("QueryString").encode(d);c!="post"&&(a=b("QueryString").appendToUrl(a,d),d="");c=i(c,a);if(!c)return!1;c.onchunk=function(a,c){e(b("sdk.safelyParseResponse")(a),c)};c.onerror=function(a){a.responseText?e(b("sdk.safelyParseResponse")(a.responseText)):e({error:babelHelpers["extends"]({},b("RequestConstants").PARSE_ERROR_TEMPLATE,{status:a.status})})};c.send(d);return!0}c={execute:a};e.exports=c}),null);
__d("DOMWrapper",[],(function(a,b,c,d,e,f){"use strict";var g,h;a={setRoot:function(a){g=a},getRoot:function(){return g||document.body},setWindow:function(a){h=a},getWindow:function(){return h||self}};e.exports=a}),null);
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],(function(a,b,c,d,e,f){var g,h;a={setPrefix:function(a){g=b("dotAccess")(b("DOMWrapper").getWindow(),a,!0),h=a},create:function(a,c){g||this.setPrefix("__globalCallbacks");var d=b("guid")();g[d]=b("wrapFunction")(a,"entry",(a=c)!=null?a:"GlobalCallback");return h+"."+d},remove:function(a){a=a.substring(h.length+1);delete g[a]}};e.exports=a}),null);
__d("JSONPRequest",["DOMWrapper","GlobalCallback","Log","QueryString"],(function(a,b,c,d,e,f){var g=2e3,h=!1;function a(a,c,d,e){if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("JSONPRequest.execute(): path traversal is not allowed.");return!1}var f=document.createElement("script"),i=function(a){i=function(){},b("GlobalCallback").remove(d.callback),e(a),f.parentNode.removeChild(f)};d.callback=b("GlobalCallback").create(i);d.method||(d.method=c);a=b("QueryString").appendToUrl(a,d);if(!h&&a.length>g){b("GlobalCallback").remove(d.callback);return!1}f.onerror=function(){i({error:{type:"http",message:"unknown error"}})};var j=function(){setTimeout(function(){i({error:{type:"http",message:"unknown error"}})},0)};f.addEventListener?f.addEventListener("load",j,!1):f.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&j()};f.src=a;b("DOMWrapper").getRoot().appendChild(f);return!0}function c(){h=!0}d={execute:a,ignoreMaxQuerystringLength:c,MAX_QUERYSTRING_LENGTH:g};e.exports=d}),null);
__d("ObservableMixin",[],(function(a,b,c,d,e,f){function a(){this.__observableEvents={}}a.prototype={inform:function(a){var b=Array.prototype.slice.call(arguments,1),c=Array.prototype.slice.call(this.getSubscribers(a));for(var d=0;d<c.length;d++){if(c[d]===null)continue;try{c[d].apply(this,b)}catch(a){window.setTimeout(function(){throw a},0)}}return this},getSubscribers:function(a){return this.__observableEvents[a]||(this.__observableEvents[a]=[])},clearSubscribers:function(a){a&&(this.__observableEvents[a]=[]);return this},subscribe:function(a,b){a=this.getSubscribers(a);a.push(b);return this},unsubscribe:function(a,b){a=this.getSubscribers(a);for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}return this}};e.exports=a}),null);
__d("Type",["Assert"],(function(a,b,c,d,e,f){function g(){var a=this.__mixins;if(a)for(var b=0;b<a.length;b++)a[b].apply(this,arguments)}function h(a,b){if(b instanceof a)return!0;if(b instanceof g)for(var c=0;c<b.__mixins.length;c++)if(b.__mixins[c]==a)return!0;return!1}function i(a,b){var c=a.prototype;Array.isArray(b)||(b=[b]);for(var a=0;a<b.length;a++){var d=b[a];typeof d==="function"&&(c.__mixins.push(d),d=d.prototype);Object.keys(d).forEach(function(a){c[a]=d[a]})}}function j(a,c,d){var e=c&&Object.prototype.hasOwnProperty.call(c,"constructor")?c.constructor:function(){this.parent.apply(this,arguments)};b("Assert").isFunction(e);if(a&&a.prototype instanceof g===!1)throw new Error("parent type does not inherit from Type");a=a||g;function f(){}f.prototype=a.prototype;e.prototype=new f();c&&Object.assign(e.prototype,c);e.prototype.constructor=e;e.parent=a;e.prototype.__mixins=a.prototype.__mixins?Array.prototype.slice.call(a.prototype.__mixins):[];d&&i(e,d);e.prototype.parent=function(){this.parent=a.prototype.parent,a.apply(this,arguments)};e.prototype.parentCall=function(b){return a.prototype[b].apply(this,Array.prototype.slice.call(arguments,1))};e.extend=function(a,b){return j(this,a,b)};return e}Object.assign(g.prototype,{instanceOf:function(a){return h(a,this)}});Object.assign(g,{extend:function(a,b){return typeof a==="function"?j.apply(null,arguments):j(null,a,b)},instanceOf:h});e.exports=g}),null);
__d("sdk.Model",["ObservableMixin","Type"],(function(a,b,c,d,e,f){"use strict";a=b("Type").extend({constructor:function(a){this.parent();var b={},c=this;Object.keys(a).forEach(function(d){b[d]=a[d],c["set"+d]=function(a){if(a===b[d])return c;b[d]=a;c.inform(d+".change",a);return c},c["get"+d]=function(){return b[d]}})}},b("ObservableMixin"));e.exports=a}),null);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(function(a,b,c,d,e,f){var g={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},h=new(b("sdk.Model"))({AccessToken:"",AutoLogAppEvents:!1,ClientID:"",CookieUserID:"",EnforceHttps:!1,Environment:g.UNKNOWN,GraphDomain:"",Initialized:!1,IsVersioned:!1,KidDirectedSite:void 0,Locale:(a=b("JSSDKRuntimeConfig")).locale,LoggedIntoFacebook:void 0,LoginStatus:void 0,Revision:a.revision,Rtl:a.rtl,Scope:void 0,SDKAB:a.sdkab,SDKUrl:a.sdkurl,SDKNS:a.sdkns,UseCookie:!1,UseLocalStorage:!0,UserID:"",Version:void 0});Object.assign(h,{ENVIRONMENTS:g,isEnvironment:function(a){var b=this.getEnvironment();return(a|b)===b},isCanvasEnvironment:function(){return this.isEnvironment(g.CANVAS)||this.isEnvironment(g.PAGETAB)}});(function(){var a=/app_runner/.test(window.name)?g.PAGETAB:/iframe_canvas/.test(window.name)?g.CANVAS:g.UNKNOWN;(a|g.PAGETAB)===a&&(a|=g.CANVAS);h.setEnvironment(a)})();e.exports=h}),null);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(function(a,b,c,d,e,f,g){a={resolve:function(a){var c="https";if(a==="graph_domain"){var d=b("sdk.Runtime").getGraphDomain();d?a="graph_".concat(d):a="graph"}if(a in b("UrlMapConfig"))return c+"://"+b("UrlMapConfig")[a];a in b("UrlMapConfig")||g(0,2511,a);return""}};e.exports=a}),null);
__d("ApiClient",["ApiBatcher","ApiClientUtils","Assert","ChunkedRequest","CORSRequest","JSONPRequest","Log","ObservableMixin","QueryString","UrlMap","flattenObject"],(function(a,b,c,d,e,f){var g,h,i,j=[],k=b("JSONPRequest").MAX_QUERYSTRING_LENGTH,l={fql_query:!0,fql_multiquery:!0,friends_get:!0,notifications_get:!0,stream_get:!0,users_getinfo:!0},m=["cors","jsonp"],n=0,o=[],p=0,q=0,r,s=b("Log");function t(a,c,d,e){var f=p!==0&&n>=p;if(f){o.push(function(){return t(a,c,d,e)});w.inform("request.queued",a,c,d);return}n++;var h=babelHelpers["extends"]({},i,d);h.pretty=h.pretty||0;h=b("flattenObject")(h);f={jsonp:b("JSONPRequest"),cors:b("CORSRequest"),chunked:b("ChunkedRequest")};var k={},l=h.access_token||g;l&&(k.access_token=l);c!=="get"&&j.forEach(function(a){k[a]=h[a]});l=Object.keys(k);l.length>0&&(a=b("QueryString").appendToUrl(a,k),delete h.access_token);l=m;for(var q=0;q<l.length;q++){var r=f[l[q]],s=Object.assign({},h);if(r.execute(a,c,s,e))return}e({error:{type:"no-transport",message:"Could not find a usable transport for request"}})}function u(a,b,c,d,e,f,g,h){if(d.transport&&d.transport==="chunked"&&h===!1){a(g,!1);return}g&&g.error&&w.inform("request.error",b,c,d,g,Date.now()-e,f);w.inform("request.complete",b,c,d,g,Date.now()-e,f);n--;a&&a(g);h=o.length>0&&n<p;if(h){b=o.shift();b()}}function v(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var e=b("ApiClientUtils").parseCallDataFromArgs(c),f=e.uri,g=e.callback,h=e.params,i=h.method;x(f,i)&&(i="post");var j=f.getProtocol()&&f.getDomain()?f.setQueryData({}).toString():b("UrlMap").resolve("graph_domain")+f.getPath(),k=q++;"_fb_domain"in h&&w.setKeptQueryParams(["_fb_domain"]);w.inform("request.prepare",j,h,k);t(j,i=="get"?"get":"post",h,u.bind(null,g,f.getPath(),i,h,Date.now(),k))}function a(){var a;r||(r=new(b("ApiBatcher"))(v,h));(a=r).scheduleBatchCall.apply(a,arguments)}function c(a,c){b("Assert").isObject(a);b("Assert").isString(a.method,"method missing");c||s.warn("No callback passed to the ApiClient");var d=a.method.toLowerCase().replace(".","_");a.format="json-strings";a.api_key=h;d=d in l?"api_read":"api";d=b("UrlMap").resolve(d)+"/restserver.php";var e=q++;c=u.bind(null,c,"/restserver.php","get",a,Date.now(),e);t(d,"get",a,c)}function d(a){return b("ApiBatcher").prepareBatchParams(a,j)}var w=Object.assign(new(b("ObservableMixin"))(),{setAccessToken:function(a){g&&a&&g!==a&&s.error("You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."),g=a},setAccessTokenForClientID:function(a,b){g&&h&&h!==b?s.error("Not overriding access token since it was not initialized by your application."):g=a},getClientID:function(){return h},getAccessToken:function(){return g},setClientID:function(a){h&&h!==a&&s.warn("Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."),h=a},setDefaultParams:function(a){i=a},setDefaultTransports:function(a){m=a},setLogger:function(a){s=a},setMaxConcurrentRequests:function(a){p=a},setKeptQueryParams:function(a){j=a},getCurrentlyExecutingRequestCount:function(){return n},getQueuedRequestCount:function(){return o.length},rest:c,graph:v,scheduleBatchCall:a,prepareBatchParams:d});function x(a,b){return a.toString().length>k&&b==="get"}e.exports=w}),null);
__d("AdsCallToActionTypesNewShaped",["AdsCallToActionTypesNew","HTML","gkx","mapObject"],(function(a,b,c,d,e,f){"use strict";var g;a=!b("gkx")("1343500");c=a?function(a){var c=b("HTML").replaceJSONWrapper(a.text).getRootNode().textContent.trim(),d=b("HTML").replaceJSONWrapper(a.short_text).getRootNode().textContent.trim();return{name:a.name,objectives:a.objectives,value_fields:a.value_fields,text:c,short_text:d}}:function(a){return{name:a.name,objectives:a.objectives,value_fields:a.value_fields,get text(){delete this.text;return this.text=b("HTML").replaceJSONWrapper(a.text).getRootNode().textContent.trim()},get short_text(){delete this.short_text;return this.short_text=b("HTML").replaceJSONWrapper(a.short_text).getRootNode().textContent.trim()}}};d=(g||(g=b("mapObject")))(b("AdsCallToActionTypesNew").TYPES,c);e.exports={TYPES:d}}),null);
__d("AdsCallToActionTypesCond",["AdsCallToActionTypesNewShaped"],(function(a,b,c,d,e,f){"use strict";e.exports=b("AdsCallToActionTypesNewShaped")}),null);
__d("FluxLoadObjectStorePrefix",[],(function(a,b,c,d,e,f){a="FluxLoadObjectStore.START_LOAD.";e.exports=a}),null);
__d("FluxLoadObjectStore",["invariant","FluxLoadObjectStorePrefix","FluxMapStore","LoadObject","abstractMethod","clearImmediate","immutable","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";var h=0,i=new Set();function j(a){var b=a;while(i.has(b))b=""+a+h++;i.add(b);return b}a=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c)||this;e.$FluxLoadObjectStore5=new Map();e.$FluxLoadObjectStore7=function(){var a=e.$FluxLoadObjectStore2;e.$FluxLoadObjectStore2=b("immutable").OrderedSet();b("clearImmediate")(e.$FluxLoadObjectStore3);delete e.$FluxLoadObjectStore3;e.$FluxLoadObjectStore8(a)};e.$FluxLoadObjectStore1=e.getActionTypeStartLoad(d);e.$FluxLoadObjectStore2=b("immutable").OrderedSet();e.__load&&!e.__loadAll&&(e.__loadAll=function(a){for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;e.__load(d)}});e.__loadAll&&!e.__load&&(e.__load=function(a){e.__loadAll(b("immutable").List([a]))});e.__load&&e.__loadAll||g(0,4899);var f=e.reduce.bind(babelHelpers.assertThisInitialized(e));babelHelpers.assertThisInitialized(e).reduce=function(a,b){b.action&&b.action.type===e.$FluxLoadObjectStore1&&(a=e.__setLoading(a,b.action.keys));return f(a,b)};e.$FluxLoadObjectStore4=e.__getChunkSize();e.$FluxLoadObjectStore4!=null&&e.$FluxLoadObjectStore4<=0&&(e.$FluxLoadObjectStore4=void 0);return e}var d=c.prototype;d.getActionTypeStartLoad=function(a){this.$FluxLoadObjectStore1||(this.$FluxLoadObjectStore1=b("FluxLoadObjectStorePrefix")+j(a||this.__moduleID||this.getDispatchToken()));return this.$FluxLoadObjectStore1};d.reduce=function(a,c){return b("abstractMethod")("FluxLoadObjectStore","reduce")};d.__handleMap=function(a,b){var c=this;return a.withMutations(function(a){for(var d=b,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];var i=c.getCached(h);g instanceof Error?a.set(h,i.setError(g).done()):a.set(h,i.setValue(g).done())}})};d.__handleOne=function(a,b,c){var d=this.getCached(b);if(c instanceof Error)return a.set(b,d.setError(c).done());else return a.set(b,d.setValue(c).done())};d.__setLoading=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.loading()})};d.__setUpdating=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.updating()})};d.__setUpdatingAndRemoveErrors=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.updating().removeError()})};d.__setCreating=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.creating()})};d.__setDeleting=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.deleting()})};d.__setEmpty=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.removeValue().removeOperation().removeError()})};d.__setEmptyAndLoading=function(a,b){return this.$FluxLoadObjectStore6(a,b,function(a){return a.removeValue().removeError().loading()})};d.__getChunkSize=function(){return void 0};d.__eagerLoadAll=function(){return!1};d.__isKeyPendingLoad=function(a){return this.$FluxLoadObjectStore2.has(a)};d.$FluxLoadObjectStore6=function(a,b,c){var d=this;return a.withMutations(function(a){for(var e=b,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;var i=d.getCached(h);a.set(h,c(i,h))}})};d.get=function(a){var c=this.getCached(a);if(c.isEmpty()){c=b("immutable").List.of(a);this.__queueLoadAll(c)}return this.getCached(a)};d.getCached=function(c){return a.prototype.get.call(this,c)||b("LoadObject").empty()};d.getAll=function(a,b){var c=this;return this.__getAllInternal(a,b,function(a){return c.getCached(a)},"getAll")};d.__getAllInternal=function(a,c,d,e){var f=Array.from(a).filter(function(a){return d(a).isEmpty()});if(f.length>0){f=b("immutable").List(f);this.__queueLoadAll(f)}return this.__getAllCachedInternal(a,c,d,e)};d.getAllCached=function(a,b){var c=this;return this.__getAllCachedInternal(a,b,function(a){return c.getCached(a)},"getAll")};d.__getAllCachedInternal=function(a,c,d,e){var f=new Set(a),g=c||this.$FluxLoadObjectStore5.get(e)||b("immutable").Map();a=g.withMutations(function(a){for(var b=g.keys(),c=Array.isArray(b),e=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(c){if(e>=b.length)break;h=b[e++]}else{e=b.next();if(e.done)break;h=e.value}h=h;f.has(h)||a["delete"](h)}for(var h=f,e=Array.isArray(h),c=0,h=e?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(e){if(c>=h.length)break;b=h[c++]}else{c=h.next();if(c.done)break;b=c.value}b=b;a.set(b,d(b))}});this.$FluxLoadObjectStore5.set(e,a);return a};d.__queueLoadAll=function(a){this.$FluxLoadObjectStore3||(this.$FluxLoadObjectStore3=b("setImmediate")(this.$FluxLoadObjectStore7)),this.$FluxLoadObjectStore2=this.$FluxLoadObjectStore2.union(a),this.__eagerLoadAll()&&this.$FluxLoadObjectStore4!=null&&this.$FluxLoadObjectStore2.size>=this.$FluxLoadObjectStore4&&this.$FluxLoadObjectStore7()};d.$FluxLoadObjectStore8=function(a){this.__dispatchStartLoadAction(a);var b=this.$FluxLoadObjectStore4;if(b){var c=[];for(var d=a,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;c.push(g);c.length>=b&&(this.__loadAll(c),c=[])}c.length>0&&this.__loadAll(c)}else this.__loadAll(a)};d.__dispatchStartLoadAction=function(a){this.getDispatcher().dispatch({action:{actionType:this.$FluxLoadObjectStore1,type:this.$FluxLoadObjectStore1,keys:a}})};return c}(b("FluxMapStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("adsCreateSelector",["AdsSelectorDebug","AdsSelectorInstrumentation","AdsSelectorNameUtils","AdsSelectorUtils","LRUKeyedCache","adsCacheSelector","gkx","ifRequired","makeStringifier","shallowArrayEqual"],(function(a,b,c,d,e,f){"use strict";function g(a,b,c){return a&&c(a[0],b)?a:[b]}function h(a,b,c){}function i(a,b,c,d,e){}function j(a,b,c){}function k(a,b){}function l(a,b){}function m(a,b){var c;return b?function(b){c||(c=a(b));return c}:a}function a(a,c){return a===c||Array.isArray(a)&&Array.isArray(c)&&b("shallowArrayEqual")(a,c)}function c(a,c){return a===c||Array.isArray(a)&&Array.isArray(c)&&b("shallowArrayEqual")(a,c)||b("ifRequired")("immutable",function(b){return b.Iterable.isIterable(a)&&b.Iterable.isIterable(c)&&b.is(a,c)},function(){return!1})}var n=b("gkx")("1134244")?c:a;function o(a){return a?function(b,c){return b===c||a(b,c)}:n}function p(a){return typeof a.getStores==="function"?a:null}function q(a,c,d,e,f,g,h){var i={cacheHit:!0},j=a.bind(void 0,i);b("AdsSelectorNameUtils").nameSelector(j,f+"-instrumentedSelectFn");b("AdsSelectorNameUtils").nameSelector(a,f+"-selectFn");var k=b("adsCacheSelector")(j,d,e,h,f);a=Object.assign(function(a){i.cacheHit=!0;var c=b("AdsSelectorInstrumentation").onSelectorCall();a=k(a);c&&c({name:f,cacheHit:i.cacheHit});return a},{getStores:m(d,e),equal:g,isGetStoresStatic:e,rawSelectFn:c});b("AdsSelectorNameUtils").nameSelector(a,f);return a}function r(a,c,d,e,f){var h=null;return q(function(b,d){b.cacheHit=!1;b=c.apply(void 0,a.map(function(a){return a(d)}));h=g(h,b,e);return h[0]},c,function(d){return b("AdsSelectorUtils").getStores([].concat(a,[c]),d)},a.every(function(a){return a.isGetStoresStatic})&&c.isGetStoresStatic,d,e,f)}function s(a,b,c,d){a.set(b,{lastInputsForProps:c,lastResultForProps:d})}function t(a,c,d,e,f){var m,n=null,o=null,p=new(b("LRUKeyedCache"))((m=f)!=null?m:function(a){return a});m=function(d,f){var m=[];m.length=a.length;var q=!1;for(var r=0;r<a.length;r++)m[r]=a[r](f),(!o||o[r]!==m[r])&&(q=!0);r=p.get(f);if(r==null)k(f,p);else{var t=r.lastInputsForProps,u=r.lastResultForProps;if(b("shallowArrayEqual")(t,m)){l(f,p);o=t;n=[u];return n[0]}i(f,p,a,t,m)}if(r==null&&!q&&o!=null&&n!=null){j(a,o,m);s(p,f,o,n[0]);return n[0]}h(a,o,m);d.cacheHit=!1;u=c.apply(void 0,m);r!=null&&(n=[r.lastResultForProps]);n=g(n,u,e);o=m;s(p,f,o,n[0]);return n[0]};return q(m,c,function(c){return b("AdsSelectorUtils").getStores(a,c)},a.every(function(a){return a!=null&&a.isGetStoresStatic}),d,e,f)}function u(a,b,c,d){var e=null,f=[];return q(function(b){b.cacheHit=!1;b=a();e=g(e,b,c);return e[0]},a,function(){return f},!0,b,c,d)}function d(a,c,d){var e;d===void 0&&(d={});e=(e=(e=d.name)!=null?e:c.name)!=null?e:"unnamedSelector";var f=d.hashProps;f=f!=null?b("makeStringifier")(f):void 0;d=o(d.equal);var g=p(c);g?g=r(a,g,e,d,f):a.length?g=t(a,c,e,d,f):g=u(c,e,d,f);b("AdsSelectorNameUtils").nameSelector(g,e+"-wrappedSelector");return g}e.exports=d}),null);