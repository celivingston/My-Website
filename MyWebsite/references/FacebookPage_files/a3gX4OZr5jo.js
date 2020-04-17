if (self.CavalryLogger) { CavalryLogger.start_js(["80Ua3"]); }

__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!=="off"&&k!=="none";function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){var a=this;this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){a._subscriptionHandler.release(),a._subscriptionHandler=null}));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k==="Indeterminate"){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("changePageTitle",["DocumentTitle","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";var g,h="";function a(a){a===void 0&&(a="Facebook"),b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(h=a,g||(g=window.setInterval(function(){var a=h,c=b("DocumentTitle").get();c!==a&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","URI","changePageTitle","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){var g,h=b("QuicklingConfig").version;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e={version:h};c=a.call(this,c,d,{quickling:e})||this;c._processFirstResponse=function(a){var c=a.getPayload();b("changePageTitle")(c.title);if(!c.isCometResponse){this._resetScrollOnFirstResponse();a=a.getRequest();a&&document.body&&(document.body.className=c.body_class||"")}b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};c._isQuickling=!0;return c}var d=c.prototype;d._preBootloadFirstResponse=function(a){return!0};d._fireDomContentCallback=function(){this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),a.prototype._fireDomContentCallback.call(this)};d._fireOnloadCallback=function(){var b=this._request;b!=null&&b.cavalry&&(b.cavalry.setTimeStamp("t_hooks"),b.cavalry.setTimeStamp("t_layout"),b.cavalry.setTimeStamp("t_onload"));a.prototype._fireOnloadCallback.call(this)};d.isPageActive=function(a){return b("Quickling").isPageActive(a)};d._versionCheck=function(a){if(a.version==h){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(g||(g=b("URI")))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};d._resetScrollOnFirstResponse=function(){window.scrollTo(0,0)};d.getSanitizedParameters=function(){return["quickling"]};d._getAsyncRequestType=function(){return b("QuicklingFetchStreamConfig").experimentName!=="off"?"useFetchWithIframeFallback":"useIframeTransport"};return c}(b("AjaxPipeRequest"));e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){var g,h=[];a={addHandler:function(a){h.push(a)},augmentURI:function(a){var c=[],d=new(g||(g=b("URI")))(a);h.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});h=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){var g,h,i,j=b("QuicklingConfig").sessionLength,k=new RegExp(b("QuicklingConfig").inactivePageRegex),l=0,m=!1,n={init:function(){if(m)return;m=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(p,1)})},isActive:function(){return m},isPageActive:function(a){if(a==="#")return!1;a=new(g||(g=b("URI")))(a);if(a.getDomain()&&a.getDomain()!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(g||(g=b("URI")))(unescape(c)).getDomain();if(c&&c!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();(h||(h=b("isEmpty")))(a)||(c+="?"+(i||(i=b("PHPQuerySerializer"))).serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!k.test(c)},getLoadCount:function(){return l},transitionHandler_DO_NOT_USE:p};function o(){l++;return l>=j}function p(a){b("AjaxPipeRequest").setCurrentRequest(null);if(o())return!1;a=b("QuicklingAugmenter").augmentURI(a);if(!n.isPageActive(a))return!1;b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";q(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function q(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=n;a.Quickling=n}),null);
__d("TimelineCoverCollapse",["DOMDimensions","Style","TidyArbiter","$","getViewportDimensions"],(function(a,b,c,d,e,f){f.collapse=function(a,c){c--;a=b("getViewportDimensions")().height;var d=b("DOMDimensions").getDocumentDimensions().height;a=a+c;d<=a&&b("Style").set(b("$")("globalContainer"),"min-height",a+"px");window.scrollBy(0,c);b("TidyArbiter").inform("TimelineCover/coverCollapsed",c,"state")}}),null);
__d("XFRXHandleChevronClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/frx/handle_chevron_click/",{})}),null);
__d("FRXHandleChevronClick",["AsyncRequest","Event","XFRXHandleChevronClickController"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c,d,e){b("Event").listen(a,"click",function(){new(b("AsyncRequest"))().setURI(b("XFRXHandleChevronClickController").getURIBuilder().getURI()).setMethod("POST").setData({reportable_ent_id:c,frx_entry_point:d,nfx_story_location:e}).send()})}};e.exports=a}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this._input=a,this._listener=null}var c=a.prototype;c.enable=function(){this._registerListener()};c._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Search")}})};c.disable=function(){this._listener&&this._listener.remove(),this._listener=null};c._handleKeydown=function(a){this._input.focus();return!1};return a}();e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){var f=this;this.reset();this.subscriptions=new(b("SubscriptionsHandler"))();this.placeholder=d;this.searchInput=a;this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a);this.loadingIndicator=c;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){f.requestSearch(),f.showLoadingIndicator()}),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(a){return a.preventDefault()}));e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this)));b("Run").onUnload(this.reset.bind(this));this.isInitialized=!0;(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(2966,g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(2966,g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("FacebarStructuredFragment",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){if(a&&b)return a.toLowerCase()==b.toLowerCase();else return!a&&!b}var h=new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");a=function(){function a(a){this._text=String(a.text),this._uid=a.uid?String(a.uid):null,this._type=a.type?String(a.type):null,this._typeParts=null,this._isLocal=Boolean(a.isLocal),this._categoryName=a.categoryName?a.categoryName:null}var b=a.prototype;b.getText=function(){return this._text};b.getUID=function(){return this._uid};b.getType=function(){return this._type};b.getTypePart=function(a){return this._getTypeParts()[a]};b.getLength=function(){return this._text.length};b.isType=function(a){for(var b=0;b<arguments.length;b++)if(!g(arguments[b],this.getTypePart(b)))return!1;return!0};b.isLocal=function(){return this._isLocal};b.getCategoryName=function(){return this._categoryName};b.isWhitespace=function(){return/^\s*$/.test(this._text)};b.hasRTL=function(){return h.test(this._text)};b.toStruct=function(){return{text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName}};b.getHash=function(a){a=a!=null?this._getTypeParts().slice(0,a).join(":"):this._type;return String(a)+"::"+this._text};b._getTypeParts=function(){var a=this._typeParts;a==null&&(a=this._type!=null?this._type.split(":"):[],this._typeParts=a);return a};return a}();e.exports=a}),null);
__d("FacebarStructuredText",["FacebarStructuredFragment","createArrayFromMixed"],(function(a,b,c,d,e,f){"use strict";var g=/\s+$/;function h(a){if(!a)return[];else if(a instanceof k)return a.toArray();else return b("createArrayFromMixed")(a).map(function(a){return new(b("FacebarStructuredFragment"))(a)})}function i(a){return new(b("FacebarStructuredFragment"))({text:a,type:"text"})}function j(a,c,d){var e=a.getText();c=e.replace(c,d);if(e!=c)return new(b("FacebarStructuredFragment"))({text:c,type:a.getType(),uid:a.getUID()});else return a}var k=function(){function a(a){this._fragments=a||[],this._hash=null}var b=a.prototype;b.matches=function(a,b){if(a){var c=this._fragments,d=a._fragments;return c.length==d.length&&!c.some(function(a,c){var e;!b&&a.getUID()?e=a.getUID()!=d[c].getUID():e=a.getText()!=d[c].getText()||a.getType()!=d[c].getType();return e||a.isLocal()!=d[c].isLocal()})}return!1};b.trim=function(){var b=null,c=null;this.forEach(function(a,d){a.isWhitespace()||(b===null&&(b=d),c=d)});if(c!==null){var d=this._fragments.slice(b,c+1);d.push(j(d.pop(),g,""));return new a(d)}else return new a([])};b.pad=function(){var b=this.getFragment(-1);if(b&&!g.test(b.getText())&&b.getText()!=="")return new a(this._fragments.concat(i(" ")));else return this};b.forEach=function(a){this._fragments.forEach(a);return this};b.matchType=function(a){var b=null;for(var c=0;c<this._fragments.length;c++){var d=this._fragments[c],e=d.isType.apply(d,arguments);if(e&&!b)b=d;else if(e||!d.isWhitespace())return null}return b};b.hasType=function(a){var b=arguments;return this._fragments.some(function(a){return!a.isWhitespace()&&a.isType.apply(a,b)})};b.isLocal=function(){return this._fragments.some(function(a){return a.isLocal()})};b.getCategoryName=function(){var a=this._fragments.filter(function(a){return a.getCategoryName()});return a.length>0?a[0].getCategoryName():null};b.endsOnType=function(a){var b=arguments,c=this._fragments[this._fragments.length-1];return!!c&&!c.isWhitespace()&&c.isType.apply(c,b)};b.isEmptyOrWhitespace=function(){return!this._fragments.some(function(a){return!a.isWhitespace()})};b.hasRTL=function(){return this._fragments.some(function(a){return a.hasRTL()})};b.isEmpty=function(){return this.getLength()===0};b.getFragment=function(a){return this._fragments[a>=0?a:this._fragments.length+a]};b.getCount=function(){return this._fragments.length};b.getLength=function(){return this._fragments.reduce(function(a,b){return a+b.getLength()},0)};b.toStruct=function(){return this._fragments.map(function(a){return a.toStruct()})};b.toArray=function(){return this._fragments.slice()};b.toString=function(){return this._fragments.map(function(a){return a.getText()}).join("")};b.getHash=function(){this._hash===null&&(this._hash=this._fragments.map(function(a){if(a.getUID())return"[["+a.getHash(1)+"]]";else return a.getText()}).join(""));return this._hash};a.fromStruct=function(b){return new a(h(b))};a.fromString=function(b){return new a([i(b.toString())])};return a}();e.exports=k}),null);
__d("FacebarNavigation",["csx","Arbiter","DOMQuery","FacebarBootloader","FacebarStructuredText","FlipDirection","Input","QueryHistory","URI"],(function(a,b,c,d,e,f,g){"use strict";var h,i=null,j=null,k=null,l=!1,m=!0,n=!1;function o(a,b){n||(k=a),n=!1,l=b,m=!1,p()}function p(){if(m)return;else j?(l&&j.pageTransition(),j.setPageQuery(k),m=!0):i&&k&&!b("Input").getValue(i)&&b("Input").setValue(i,k.structure.toString()+" ");i!=null&&(b("FlipDirection").setDirection(i),i.blur())}function q(a){return String(a.getPath()).startsWith("/search/")&&a.getQueryData().epa==="SERP_TAB"&&!a.getQueryData().hard_refresh}b("Arbiter").subscribe("page_transition",function(a,c){q(c.uri)||o(b("QueryHistory").get(c.uri),!0)});b("Arbiter").subscribe("save_facebar_query",function(a,b){n=!0});a={registerInput:function(a){i=b("DOMQuery").scry(a,"._586f")[0],i==null&&(i=b("DOMQuery").scry(a,"._1frb")[0]),p()},registerBehavior:function(a){j=a,p()},setPageQuery:function(a){b("QueryHistory").set((h||(h=b("URI"))).getNextURI(),a),a.structure instanceof b("FacebarStructuredText")||(a.structure=b("FacebarStructuredText").fromStruct(a.structure)),o(a,!1),b("FacebarBootloader").requestSearch()}};e.exports=a}),null);
__d("ContextualLayerAsyncRelative",["Event","Parent"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._layerSubscription=this._layer.subscribe("show",this._attachListener.bind(this)),this._layer.isShown()&&this._attachListener()};c.disable=function(){this._layerSubscription.unsubscribe(),this._layerSubscription=null,this._listener&&(this._listener.remove(),this._listener=null)};c._attachListener=function(){this._listener=b("Event").listen(this._layer.getRoot(),"click",this._onclick.bind(this))};c._onclick=function(a){var c=b("Parent").byTag(a.getTarget(),"A");if(!c)return;a=c.getAttribute("ajaxify");var e=c.href,f=a||e;if(c.rel==="async"||c.rel==="async-post"){d(["AsyncRequest"],function(a){a.bootstrap(f,this._layer.getContext(),c.rel==="async-post")}.bind(this));return!1}};return a}();Object.assign(a.prototype,{_layerSubscription:null,_listener:null});e.exports=a}),null);