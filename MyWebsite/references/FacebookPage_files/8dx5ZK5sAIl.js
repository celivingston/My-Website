if (self.CavalryLogger) { CavalryLogger.start_js(["KTA5k"]); }

__d("AdsTargetingDevicesAccessor",["AdsTargetingDevices"],(function(a,b,c,d,e,f){"use strict";var g={},h={},i={};b("AdsTargetingDevices").allDevices.forEach(function(a,b){g[a]=b});b("AdsTargetingDevices").iosDeviceIndicies.forEach(function(a){h[a]=!0});b("AdsTargetingDevices").androidDevicesIndicies.forEach(function(a){i[a]=!0});function a(a){return h[g[a]]!=null}function c(a){return i[g[a]]!=null}e.exports={isIOSDevice:a,isAndroidDevice:c}}),null);
__d("AdsTargetingExtendedDevicesV2Wrapper",["AdsTargetingExtendedDevicesV2"],(function(a,b,c,d,e,f){"use strict";e.exports=b("AdsTargetingExtendedDevicesV2")}),null);
__d("GraphAPIFieldUtils",[],(function(a,b,c,d,e,f){"use strict";a={getFieldWithSubfields:function(a,b){return b.length===0?""+a:a+"{"+b.join(",")+"}"},getFieldWithParameterizedSubfields:function(a,b){var c=Object.keys(b).map(function(a){var c=b[a];if(c!=null){c=typeof c==="string"?c:JSON.stringify(c);return"."+a+"("+c+")"}}).join("");return""+a+c}};e.exports=a}),null);
__d("AdsPageFields",["CurrentUser","GraphAPIFieldUtils","gkx"],(function(a,b,c,d,e,f){"use strict";var g="<<not-applicable>>",h=["access_token","business","category","cover","description","engagement","get_started_nullstate","global_brand_page_name","has_whatsapp_business_number","has_whatsapp_number","hours","id","is_messenger_platform_bot","is_messenger_bot_get_started_enabled","is_published","is_verified","leadgen_tos_accepted","leadgen_tos_acceptance_time","leadgen_tos_accepting_user","link","location","messenger_ads_default_icebreakers","messenger_ads_default_quick_replies","name","offer_eligible","page_token","phone","privacy_info_url","shared_location_structures","single_line_address","whatsapp_number","website","picture.type(small)"],i=["access_token","business","category","cover","description","engagement","get_started_nullstate","has_whatsapp_business_number","has_whatsapp_number","hours","id","is_messenger_platform_bot","is_messenger_bot_get_started_enabled","is_published","is_verified","link","location","messenger_ads_default_icebreakers","messenger_ads_default_quick_replies","name","name_with_location_descriptor","page_token","phone","privacy_info_url","shared_location_structures","single_line_address","whatsapp_number","website","picture.type(small)"],j=b("GraphAPIFieldUtils").getFieldWithParameterizedSubfields("locations",{limit:0,summary:"total_count"}),k=b("GraphAPIFieldUtils").getFieldWithSubfields("messenger_ads_default_page_welcome_message",["page_welcome_message_type","page_welcome_message_body"]);a={forCurrentUser:function(){var a;a=h.concat((a=b("GraphAPIFieldUtils")).getFieldWithSubfields(a.getFieldWithParameterizedSubfields("userpermissions",{user:b("CurrentUser").getID()}),["business","role"]),a.getFieldWithSubfields("businessprojects",["business","name"]),k,j,a.getFieldWithSubfields("whatsapp_business_profile",["id","verified_name","profile_picture_url"]));return b("gkx")("1264128")?a.concat("is_delegate_page_for_profile"):a},getPromotablePageFields:function(){var a;a=i.concat((a=b("GraphAPIFieldUtils")).getFieldWithSubfields(a.getFieldWithParameterizedSubfields("userpermissions",{user:b("CurrentUser").getID()}),["business","role"]),a.getFieldWithSubfields("businessprojects",["business","name"]),a.getFieldWithParameterizedSubfields("locations",{limit:0,summary:"total_count"}),a.getFieldWithSubfields("messenger_ads_default_page_welcome_message",["page_welcome_message_type","page_welcome_message_body"]),a.getFieldWithSubfields("whatsapp_business_profile",["id","verified_name","profile_picture_url"]));return b("gkx")("1264128")?a.concat("is_delegate_page_for_profile"):a},onlyLocationCounts:function(){return[j]},isNotApplicable:function(a){return a===g}};e.exports=a}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("LivingRoomTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActualScheduledStartTime=function(a){this.$1.actual_scheduled_start_time=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setCommentBody=function(a){this.$1.comment_body=a;return this};c.setComposerSessionID=function(a){this.$1.composer_session_id=a;return this};c.setContentItemID=function(a){this.$1.content_item_id=a;return this};c.setCurationContext=function(a){this.$1.curation_context=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setEntrySource=function(a){this.$1.entry_source=a;return this};c.setErrorMessage=function(a){this.$1.error_message=a;return this};c.setErrorStack=function(a){this.$1.error_stack=a;return this};c.setExitStatus=function(a){this.$1.exit_status=a;return this};c.setIsCommentReply=function(a){this.$1.is_comment_reply=a;return this};c.setIsReplay=function(a){this.$1.is_replay=a;return this};c.setLeaveReason=function(a){this.$1.leave_reason=a;return this};c.setLivingRoomAction=function(a){this.$1.living_room_action=a;return this};c.setLivingRoomID=function(a){this.$1.living_room_id=a;return this};c.setLivingRoomMessageActionType=function(a){this.$1.living_room_message_action_type=a;return this};c.setLivingRoomMessageType=function(a){this.$1.living_room_message_type=a;return this};c.setLivingRoomSurface=function(a){this.$1.living_room_surface=a;return this};c.setManualConfigType=function(a){this.$1.manual_config_type=a;return this};c.setManualCreationSource=function(a){this.$1.manual_creation_source=a;return this};c.setManualGroupID=function(a){this.$1.manual_group_id=a;return this};c.setManualProfileID=function(a){this.$1.manual_profile_id=a;return this};c.setManualSessionID=function(a){this.$1.manual_session_id=a;return this};c.setNullStateHscrollIndex=function(a){this.$1.null_state_hscroll_index=a;return this};c.setNullStateHscrollVideoID=function(a){this.$1.null_state_hscroll_video_id=a;return this};c.setOldScheduledStartTime=function(a){this.$1.old_scheduled_start_time=a;return this};c.setPlaylistID=function(a){this.$1.playlist_id=a;return this};c.setPollID=function(a){this.$1.poll_id=a;return this};c.setQuery=function(a){this.$1.query=a;return this};c.setReactionType=function(a){this.$1.reaction_type=a;return this};c.setSuggestedItemID=function(a){this.$1.suggested_item_id=a;return this};c.setTargetID=function(a){this.$1.target_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeSpent=function(a){this.$1.time_spent=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoDialogID=function(a){this.$1.video_dialog_id=a;return this};c.setVideoError=function(a){this.$1.video_error=a;return this};c.setVideoEvent=function(a){this.$1.video_event=a;return this};c.setVideoIDMarauder=function(a){this.$1.video_id_marauder=a;return this};c.setVideoOffset=function(a){this.$1.video_offset=a;return this};c.setVideoPlayerFormat=function(a){this.$1.video_player_format=a;return this};c.setVideoState=function(a){this.$1.video_state=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.setXmaClickSameVideo=function(a){this.$1.xma_click_same_video=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={actual_scheduled_start_time:!0,clienttime:!0,comment_body:!0,composer_session_id:!0,content_item_id:!0,curation_context:!0,deviceid:!0,entry_source:!0,error_message:!0,error_stack:!0,exit_status:!0,is_comment_reply:!0,is_replay:!0,leave_reason:!0,living_room_action:!0,living_room_id:!0,living_room_message_action_type:!0,living_room_message_type:!0,living_room_surface:!0,manual_config_type:!0,manual_creation_source:!0,manual_group_id:!0,manual_profile_id:!0,manual_session_id:!0,null_state_hscroll_index:!0,null_state_hscroll_video_id:!0,old_scheduled_start_time:!0,playlist_id:!0,poll_id:!0,query:!0,reaction_type:!0,suggested_item_id:!0,target_id:!0,time:!0,time_spent:!0,vc:!0,video_dialog_id:!0,video_error:!0,video_event:!0,video_id_marauder:!0,video_offset:!0,video_player_format:!0,video_state:!0,weight:!0,xma_click_same_video:!0};e.exports=a}),null);
__d("PagesNuxDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationReactDispatcher"))({strict:!0})}),null);
__d("LivingRoomTypeValues",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({DEFAULT:"DEFAULT",ADD_VIDEO:"ADD_VIDEO",ADD_COHOST:"ADD_COHOST",INVITE:"INVITE",QUEUE:"QUEUE"});b=Object.freeze({SEARCH:"SEARCH",RECENT:"RECENT",GROUP:"GROUP",PAGE:"PAGE",LIVE:"LIVE",SAVED:"SAVED",SUGGESTED:"SUGGESTED",AUTO:"AUTO",MAIN:"MAIN",UPLOADED:"UPLOADED",SUBSCRIPTIONS:"SUBSCRIPTIONS"});c=Object.freeze({HIDE:"HIDE",SHOW_SEARCH:"SHOW_SEARCH",SHOW_ADD_BUTTON:"SHOW_ADD_BUTTON",SHOW_SECOND_ADD_DIALOG:"SHOW_SECOND_ADD_DIALOG",SHOW_INVITE:"SHOW_INVITE",SHOW_PREPOP_INVITE:"SHOW_PREPOP_INVITE"});d=Object.freeze({PAGE:"PAGE",USER:"USER"});e.exports={SidePaneTypeValue:a,AddVideoTabValue:b,WalkthroughStepValue:c,OwnerTypeValue:d}}),null);
__d("CommercialBreakHostStoryComponentType",[],(function(a,b,c,d,e,f){a=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});e.exports=a}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakHostStoryComponentType","DOMQuery","EventEmitter"],(function(a,b,c,d,e,f){"use strict";var g=new(b("EventEmitter"))(),h=new Map(),i=new Map(),j=new Map();function k(a){a=a;var b=[];while(a)b.unshift(a),a=a.parentElement;return b}function l(a,b){if(a===null)return null;var c=k(a);a=null;var d=null;b.forEach(function(b){var e=b[0];b=b[1];e=k(e);for(var f=0;f<c.length;++f)if(c[f]!==e[f]){(d===null||f>d)&&(d=f,a=b);break}});return a}a={registerVideoPlayerController:function(a,c){var d=a.getVideoID(),e=h.get(d);e?e.push(a):(e=[a],h.set(d,e));d=null;c===b("CommercialBreakHostStoryComponentType").POP_OVER_MENU?d=this.findPopoverAsyncMenuForVideoPlayerController(a):c===b("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER&&(d=this.findHostStoryControllerForVideoPlayerController(a));if(!d)return;g.emit(d.getInstanceID()+"/register",a)},registerHostStoryController:function(a,b,c){var d=j.get(b);d?d.push(a):(d=[a],j.set(b,d));this.findVideoControllerForStoryController(a,b,c)},registerPopoverAsyncMenu:function(a,b){var c=b.host_video_id;if(!c)return;a=new m(a,b);b=a.getInstanceID();var d=i.get(c);d||(d=[],i.set(c,d));d.push(a);this._informStoryComponentRegister(a.getTriggerElem(),b,c,a.registerVideoPlayerController.bind(a))},_informStoryComponentRegister:function(a,b,c,d){g.addListener(b+"/register",d);d=this.findVideoPlayerControllerForElement(a,c);if(!d)return;g.emit(b+"/register",d)},findVideoPlayerControllerForElement:function(a,b){b=h.get(b);return!b?null:l(a,b.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")}).map(function(a){return[a.getRootNode(),a]}))},findPopoverAsyncMenuForVideoPlayerController:function(a){var b=i.get(a.getVideoID());return!b?null:l(a.getRootNode(),b.map(function(a){return[a.getTriggerElem(),a]}))},findHostStoryControllerForVideoPlayerController:function(a){var c=j.get(a.getVideoID());if(!c)return null;for(var d=0;d<c.length;d++){var e=c[d];if(b("DOMQuery").contains(e.getContainerElement(),a.getRootNode()))return e}return null},findVideoControllerForStoryController:function(a,c,d){g.addListener(a.getInstanceID()+"/register",d);d=h.get(c);if(!d)return;d=d.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")});for(var c=0;c<d.length;c++){var e=d[c];if(b("DOMQuery").contains(a.getContainerElement(),e.getRootNode())){g.emit(a.getInstanceID()+"/register",e);return}}}};var m=function(){function a(a,b){this._menu=a,this._originalEndpoint=this._menu._endpoint,this._additionalData=b}var b=a.prototype;b.registerVideoPlayerController=function(a){var b=this;a.addListener("commercialBreak/updateOptionMenuURI",function(a){b._updateEndpoint(a)});a.addListener("commercialBreak/recoverOptionMenuURI",function(){return b._updateEndpoint(b._originalEndpoint)})};b._updateEndpoint=function(a){var b=this._menu;b.setMenu(b._loadingMenu);b._setFocus(b._loadingMenu);b._endpoint=a;b._fetched&&(b._fetched=!1,b.fetchMenu())};b.getInstanceID=function(){return this._menu._instanceId.toString()};b.getTriggerElem=function(){return this._menu.getTriggerElem()};b.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};return a}();e.exports=a}),null);
__d("AdsFluxCurrentContainer",[],(function(a,b,c,d,e,f){"use strict";var g=null;e.exports={getCurrentContainer:function(){return g},setCurrentContainer:function(a){g=a}}}),null);
__d("AdsDataPluginsInternalUtils",[],(function(a,b,c,d,e,f){"use strict";e.exports={memoize:function(a){var b=a,c;return function(){b&&(c=b(),b=null);return c}}}}),null);
__d("LaminarAction",["AdsDataAtom","AdsDataDispatchUtils","filterNulls"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){var f=function(f,g){var h=b("filterNulls")(a()),i=b("filterNulls")(c());b("AdsDataAtom").dispatchAction(b("AdsDataDispatchUtils").mergeParameters(d,h,i,f,e),g)};return{dispatch:f,actionType:d}}e.exports={create:a}}),null);
__d("LaminarExperimentalSelector",["AdsDataAtom","AdsDataPluginsInternalUtils"],(function(a,b,c,d,e,f){"use strict";var g=b("AdsDataPluginsInternalUtils").memoize;function h(a){var b=new Set();for(var c in a)for(var d=a[c].providers,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b.add(g)}return Array.from(b)}function i(a){var b=new Set();for(var c in a)for(var d=a[c].toFluxSelector().getStores(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b.add(g)}return Array.from(b)}function j(a,b,c){var d={};for(var e in a)d[e]=a[e].select(b,c);return d}function k(a,b){var c=Object.keys(a);if(c.length!==Object.keys(b).length)return!1;for(var d=0;d<c.length;d++){var e=c[d];if(!Object.prototype.hasOwnProperty.call(b,e)||a[e]!==b[e])return!1}return!0}function a(a,c){var d=null,e=null,f=function(b,f){b=j(a,b,f);(!e||!k(b,e))&&(d=c(b),e=b);return d},l=function(a){return f(b("AdsDataAtom").getAlteredState(),a)},m=Object.assign(l,{providers:h(a),select:f,toFluxSelector:g(function(){return Object.assign(function(){return m(b("AdsDataAtom").getAlteredState())},{getStores:function(){return i(a)},isGetStoresStatic:!0,rawSelectFn:function(){return m(b("AdsDataAtom").getAlteredState())}})})});return m}e.exports={create:a}}),null);
__d("LaminarCurrentContainer",[],(function(a,b,c,d,e,f){"use strict";var g=null;e.exports={getCurrentContainer:function(){return g},setCurrentContainer:function(a){g=a}}}),null);
__d("LaminarReactHooks",["invariant","AdsDataAtom","AdsFluxCurrentContainer","FluxContainerInstrumentation","FluxContainerNameUtils","LaminarCurrentContainer","React","useSubscriptionValue"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=h.useCallback,j=h.useEffect,k=h.useMemo,l=h.useRef,m="laminarContainer(unknown)";function a(a){var c=l(null),d=b("LaminarCurrentContainer").getCurrentContainer(),e=a.provider,f=d!=null?d:m;d=i(function(d){var g=b("FluxContainerInstrumentation").updateTracking,h=a();g!=null&&d!==h&&g.storeEmitChange(null,f,[e],c.current);return h},[f,a,e]);var g=i(function(a){var d=function(){var d=b("FluxContainerInstrumentation").updateTracking;d!=null&&(c.current=d.getCurrentDispatch());a()},f=b("AdsDataAtom").addListener(e,d);return function(){return f.remove()}},[e]);d=b("useSubscriptionValue")({getCurrentValue:d,subscribe:g});j(function(){b("FluxContainerInstrumentation").hasInstrumentation()&&b("FluxContainerInstrumentation").updateTracking!=null&&b("FluxContainerInstrumentation").updateTracking.initialState(null,f)},[f]);return d}function c(a,c,d){var e,f=(e=d==null?void 0:d.containerName)!=null?e:m;function g(c){var e=l(null),h=l(!0),i=l(null);j(function(){b("FluxContainerInstrumentation").onInit(g)},[]);j(function(){h.current&&(b("FluxContainerInstrumentation").onDidUpdate(a,f,i.current,c,null,null),i.current=c)});var m=(d==null?void 0:d.isFluxContainer)===!0?b("AdsFluxCurrentContainer"):b("LaminarCurrentContainer");m.setCurrentContainer(f);var n=k(function(){var a=c.forwardedRef,b=babelHelpers.objectWithoutPropertiesLoose(c,["forwardedRef"]);return a===void 0?c:babelHelpers["extends"]({},b,{ref:a})},[c]);n=a(n);m.setCurrentContainer(null);h.current=e.current!==n;e.current=n;return n}b("FluxContainerNameUtils").nameContainer(g,f);g.displayName=f;e=function(a,b){return h.jsx(g,babelHelpers["extends"]({},a,{forwardedRef:b}))};e.displayName=f;e=h.forwardRef(e);e=h.memo(e,c);e.displayName=f;return e}e.exports={laminarContainer:c,useProvider:a}}),null);
__d("LaminarReducerWithFluxSelectors",["AdsDataAtom","AdsSelectorUtils"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return function(d,e){var f=Object.keys(a),g=f.map(function(b){return a[b]});b("AdsDataAtom").waitFor(b("AdsSelectorUtils").getStoreDispatchTokens(g));g=f.reduce(function(b,c){return Object.assign(b,(b={},b[c]=a[c](),b))},{});return c(d,e,g)}}e.exports=a}),null);
__d("AdsSelectorProfilerUtils",["AdsSelectorInstrumentation","adsCacheSelector"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){var f={cacheHit:!0};a=a.bind(void 0,f);var g=b("adsCacheSelector")(a,c,d,void 0,e);a=function(a){f.cacheHit=!0;var c=b("AdsSelectorInstrumentation").onSelectorCall();a=g(a);c&&c({name:e,cacheHit:f.cacheHit});return a};return a}function c(a,c){var d={cacheHit:!0};return function(e){d.cacheHit=!0;e=a(e,d);var f=b("AdsSelectorInstrumentation").onSelectorCall();f&&f({name:c,cacheHit:d.cacheHit});return e}}e.exports={instrumentLaminarSelector:c,instrumentSelectorInclusive:a}}),null);
__d("LRUKeyedExpiringCache",["invariant","DateConsts","firstx"],(function(a,b,c,d,e,f,g){"use strict";var h=15,i=1e3;a=function(){function a(a,b,c){b===void 0&&(b=i),c===void 0&&(c=h),this.$5=new Map(),b>0||g(0,18721),this.$1=b,this.$4=a,this.$2=c}var c=a.prototype;c.$6=function(){clearTimeout(this.$3);if(this.$2<=0)return;this.$3=setTimeout(this.$7.bind(this),this.$2*b("DateConsts").SEC_PER_MIN*b("DateConsts").MS_PER_SEC)};c.$7=function(){var a=this,b=Array.from(this.$5.keys());b.forEach(function(b){var c=a.$5.get(b);if(c==null)return;!c.hasBeenAccessed?a.$5["delete"](b):c.hasBeenAccessed=!1});this.$5.size>0&&this.$6()};c.get=function(a){a=this.$4(a);var b=this.$5.get(a);if(b==null)return void 0;b.hasBeenAccessed=!0;this.$5["delete"](a);this.$5.set(a,b);return b.data};c.set=function(a,c){this.$5.size===0&&this.$6();a=this.$4(a);this.$5["delete"](a);var d=!1;if(this.$1<=this.$5.size&&this.$5.size>0){var e=b("firstx")(this.$5.keys());this.$5["delete"](e);d=!0}this.$5.set(a,{data:c,hasBeenAccessed:!0});return d};c.size=function(){return this.$5.size};c.clear=function(){this.$5.clear(),clearTimeout(this.$3)};c.getCacheSnapshot_DEBUG=function(){return new Map(this.$5)};return a}();e.exports=a}),null);
__d("LaminarSelector",["invariant","AdsSelectorProfilerUtils","LRUKeyedExpiringCache","distinctArray","flattenArray","shallowEqual"],(function(a,b,c,d,e,f,g){"use strict";var h=b("AdsSelectorProfilerUtils").instrumentLaminarSelector,i=1e3;function j(a){var b=new Set();for(var c in a){var d=[].concat(a[c].getProviders!=null?a[c].getProviders():[],a[c].providers!=null?a[c].providers:[]);for(var d=d,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b.add(g)}}return Array.from(b)}function k(a,b){var c=new Set();for(var d in a)for(var e=a[d].toFluxSelector().getStores(),f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;c.add(h)}b!=null&&b.forEach(function(a){return c.add(a)});return Array.from(c)}var l=function(){function a(){this.$1={hasCached:!1,result:null,inputs:null}}var c=a.prototype;c.setCache=function(a,b){this.$1={hasCached:!0,inputs:a,result:b}};c.areInputsEqual=function(a){return this.$1.hasCached&&b("shallowEqual")(this.$1.inputs,a)};c.getCachedResultEnforced=function(){this.$1.hasCached||g(0,14851);return this.$1.result};return a}();function m(a,b){var c={};Object.keys(a).forEach(function(d){c[d]=b(d,a[d])});return c}function n(a){a=m(a,function(a,b){return b()});return a}function a(a,c,d,e,f){d===void 0&&(d=n);e===void 0&&(e="unnamedLaminarSelector");f===void 0&&(f=void 0);var g=(f=f)!=null?f:new(b("LRUKeyedExpiringCache"))(function(a){return a},i);f=function(b,e){var f=g.get(b);if(f!=null)return f();var h=new l();f=function(){var f=d(a,b);if(h.areInputsEqual(f))return h.getCachedResultEnforced();e.cacheHit=!1;var g=c(f,b);h.setCache(f,g);return g};g.set(b,f);return f()};var m=h(f,e),o=j(a),p=k(a,d.attachedStoreDependencies),q=Object.assign(function(a){return m(a)},{getStores:function(){return p},isGetStoresStatic:!0,rawSelectFn:function(a){return m(a)}});return Object.assign(m.bind(void 0),{getProviders:function(){return o},toFluxSelector:function(){return q}})}function c(a,c){var d=function(b,d){var e={};Object.keys(a).forEach(function(b){e[b]=a[b]()});return c(e,b,d)},e=b("distinctArray")(b("flattenArray")(Object.keys(a).map(function(b){return a[b].getStores()})));return Object.assign(d,{attachedStoreDependencies:e})}function d(a,c){var d=function(b,d){return c(a,b,d)},e=b("distinctArray")(Object.keys(a).map(function(b){return a[b]}));return Object.assign(d,{attachedStoreDependencies:e})}e.exports={create:a,defaultPrepareFn:n,prepareWithFluxSelectors:c,prepareWithFluxStores:d}}),null);
__d("LaminarTriggerReducer",["AdsDataAtom"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e=function(b,c){b=d.select(b);return a.reduce(b,c)},f=function(a){return e(b("AdsDataAtom").getAlteredState(),a)};return{provider:d.provider,reduce:f,triggerReducer:c}}e.exports={create:a}}),null);
__d("Laminar",["LaminarAction","LaminarExperimentalSelector","LaminarLogger","LaminarProvider","LaminarReactHooks","LaminarReducer","LaminarReducerWithFluxSelectors","LaminarRefetchProvider","LaminarSelector","LaminarTriggerReducer"],(function(a,b,c,d,e,f){"use strict";c={__createAction:b("LaminarAction").create,__createExperimentalSelector:b("LaminarExperimentalSelector").create,__createLogger:b("LaminarLogger").create,__createProvider:b("LaminarProvider").create,__createReducer:b("LaminarReducer").create,__createLegacyReducer:b("LaminarReducer").createLegacy,__createRefetchProvider:b("LaminarRefetchProvider").create,__createSelector:(a=b("LaminarSelector")).create,__createTriggerReducer:b("LaminarTriggerReducer").create,__defaultPrepareFn:a.defaultPrepareFn,useProvider:b("LaminarReactHooks").useProvider,laminarContainer:b("LaminarReactHooks").laminarContainer,withFluxSelectors:b("LaminarReducerWithFluxSelectors"),prepareWithFluxSelectors:a.prepareWithFluxSelectors,prepareWithFluxStores:a.prepareWithFluxStores};e.exports=c}),null);
__d("LaminarLogger",["AdsDataAtom","Laminar"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){var f=b("Laminar").__createExperimentalSelector(d,function(a){return a}),g=function(a,b){a=f.select(a);c.log(b,a)};d=function(a){return g(b("AdsDataAtom").getAlteredState(),a)};return Object.assign(d,{id:a,log:g,registries:e==null?[]:e})}e.exports={create:a}}),null);
__d("LaminarProvider",["invariant","AdsDataAtom","AdsDataPluginsInternalUtils","FluxReduceStore","Laminar","compactArray"],(function(a,b,c,d,e,f,g){"use strict";var h=b("AdsDataPluginsInternalUtils").memoize;function i(a,c){var d=function(e){babelHelpers.inheritsLoose(d,e);function d(){var a,b;for(var d=arguments.length,f=new Array(d),g=0;g<d;g++)f[g]=arguments[g];return(a=b=e.call.apply(e,[this].concat(f))||this,b.__moduleID=c,a)||babelHelpers.assertThisInitialized(b)}var f=d.prototype;f.addListener=function(c){return b("AdsDataAtom").addListener(a.provider,c)};f.__registerDispatcherCallback=function(){return};f.getInitialState=function(){return a.getInitialState()};f.reduce=function(){g(0,5462)};f.hasChanged=function(){return b("AdsDataAtom").hasChangedInDispatchCycle(a.provider)};f.getState=function(){return a.select(b("AdsDataAtom").getAlteredState())};f.getDispatchToken=function(){return a.provider};f.__setState=function(a){b("AdsDataAtom").__laminarAlteredState[c]=a};return d}(b("FluxReduceStore"));d.__moduleID=e.id;return new d(b("AdsDataAtom"))}function a(a,c,d,e){e===void 0&&(e=[]);var f=a.initialState,j=a.legacyFluxReduce,k=null,l=function(a){k!=null||g(0,5463),k.dispatch({reducer:a})},m=h(function(){return typeof f==="function"?f(l):f}),n=function(a){if(!a)throw new Error("'state' must be present. If 'state' is 'undefined' make sure\n       you passed the altered state to the selector function. Example:\n         AdsExampleSelector(\n           AdsDataAtom.getAlteredState(),\n         );");return Object.prototype.hasOwnProperty.call(a,c)?a[c]:m()},o=function(){return n(b("AdsDataAtom").getAlteredState())},p=h(function(){return i(o,c)}),q=h(function(){return Object.assign(o,{getStores:h(function(){return[p()]}),isGetStoresStatic:!0,rawSelectFn:o})});d=d!=null?b("compactArray")(d()):[];var r=Object.assign(o,{providers:[c],provider:c,select:n,getInitialState:m,shouldLegacyFluxReduceOnly:!!a.shouldLegacyFluxReduceOnly,toFluxStore:p,toFluxSelector:q,triggerReducers:d,registries:e==null?[]:e});k=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer({reduce:function(a,b){return b.reducer(a)}},r,{},c+"SetStateReducer")]},function(){return[]},c+"SetStateAction");j&&b("AdsDataAtom").laminarRegisterLegacyFluxReducer(b("Laminar").__createLegacyReducer({reduce:j},r,{},c+"LegacyFluxReducer"));return r}e.exports={create:a}}),null);
__d("LaminarReducer",["AdsDataAtom","AdsDataDispatchUtils","Laminar","gkx"],(function(a,b,c,d,e,f){"use strict";function g(a,c,d,e,f){var g=b("Laminar").__createExperimentalSelector(e,function(a){return a}),h=function(e,f){var h=g.select(e);e=d.select(e);h=c.reduce(e,f,h);b("gkx")("676926")&&h!==e&&b("AdsDataAtom").onReduce(b("AdsDataDispatchUtils").getActionType(f),d.provider,a);return h};e=function(a){return h(b("AdsDataAtom").getAlteredState(),a)};return Object.assign(e,{isDisabled:!a&&d.shouldLegacyFluxReduceOnly,provider:d.provider,providerInitialState:function(){return d.getInitialState()},reduce:h,registries:d.registries,triggerReducers:d.triggerReducers,reducerName:f})}function a(a,b,c,d){return g(!1,a,b,c,d)}function c(a,b,c,d){return g(!0,a,b,c,d)}e.exports={create:a,createLegacy:c}}),null);
__d("LaminarRefetchProvider",["invariant","AdsDataAtom","Laminar","LaminarProvider"],(function(a,b,c,d,e,f,g){"use strict";function a(a,c,d,e,f){f===void 0&&(f=[]);var h=b("LaminarProvider").create(a,d,e,f),i=null,j=function(a){i!=null||g(0,5463),i.dispatch({reducer:a})};a=function(){return h.select(b("AdsDataAtom").getAlteredState())};e=Object.assign(a,babelHelpers["extends"]({},h,{refetch:function(a){return c(j,a)}}));i=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer({reduce:function(a,b){return b.reducer(a)}},h,{},d+"QuerySetStateReducer")]},function(){return[]},d+"QuerySetStateAction");return e}e.exports={create:a}}),null);
__d("XAYMTMultiTipAsyncClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/growth/aymt/multi_async_click/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},target:{type:"String",required:!0},handled_delete:{type:"Bool",defaultValue:!0},extra_data:{type:"String"}})}),null);