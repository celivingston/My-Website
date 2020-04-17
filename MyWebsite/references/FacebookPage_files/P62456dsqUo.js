if (self.CavalryLogger) { CavalryLogger.start_js(["\/rMQj"]); }

__d("useCometConfirmationDialogBlue",["React","SimpleXUIDialog"],(function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useCallback,h=a.useRef;c=function(){return[g(function(a,c,d){var e=a.body,f=a.confirm;a=a.title;d===void 0&&(d=function(){});return b("SimpleXUIDialog").showConfirm(e,a,function(a){return a?c():d()},{confirmBtnText:f})},[]),h(null)]};e.exports=c}),null);
__d("cometComposerValidateMediaUploadStarted",["fbt"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b;b=((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)!=="MEDIA"||a.mediaAttachments!=null&&a.mediaAttachments.length>0;a=(a.mediaAttachments||[]).some(function(a){return a.state==="NEW"});return!b||a?g._("You cannot post while media upload is queuing"):null}e.exports=a}),null);
__d("createCometCapitalizedNameMentionStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.minMatchLength,d=new RegExp("(^|[^#])((?:"+b("DocumentMentionsRegex").NAME+"{"+1+",})$)");return{findMentionableString:function(a){a=d.exec(a);if(a!==null){var b=a[2];if(b!=null&&b.length>=c)return{leadOffset:a[1].length,matchingString:b,replaceableString:b}}return null},name:"CapitalizedNameMentionStrategy("+c.toString()+")"}}e.exports=a}),null);
__d("createProfilerOnRenderCallback",["requireCond","emptyFunction","cr:1031180"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1031180")||function(){return b("emptyFunction")};e.exports=a}),null);
__d("CometProfiler.react",["CometHeroInteractionContext","CometHeroInteractionIDContext","React","createProfilerOnRenderCallback","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext;d=function(a){a=a.children;return a};function a(a){var c=a.children,d=a.id;a=a.logDurationToQPL;var e=h(b("CometHeroInteractionContext").Context),f=h(b("CometHeroInteractionIDContext"));a=b("createProfilerOnRenderCallback")(d,a===!0,f,e);return g.jsx(g.Profiler,{id:d,onRender:a,children:c})}f=b("gkx")("823029")?a:d;e.exports=f}),null);
__d("useCometDisplayTimingTracker",["requireCond","cr:1075529","cr:683059","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useRef;function a(a,c,d,e,f){var i=h(null);return g(function(g){i.current!==g&&(i.current=g,g&&(b("cr:683059")&&b("cr:683059").addRenderingInfo(g,a,c,d,e,f),b("cr:1075529")&&(b("cr:1075529").addRenderingInfo(g,a,"TAIL_LOAD"),b("cr:1075529").addMutationRootForTraceType(g,"TAIL_LOAD"))))},[a,c,d,e,f])}e.exports=a}),null);
__d("CometPageletImpl.react",["requireCond","CometHeroInteractionContext","CometHeroInteractionIDContext","CometProfiler.react","CometRelay","cr:683059","React","mergeRefs","performanceNavigationStart","performanceNow","useCometDisplayTimingTracker"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").ProfilerContext,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext,l=c.useMemo;function m(a,b){return babelHelpers["extends"]({},a,{pageletStack:[].concat(a.pageletStack,[b])})}function a(a,c){var d=a.children,e=a.excludeFromMainVC,f=a.name,n=a.pageletType,o=a.position,p=k(b("CometHeroInteractionContext").Context),q=k(b("CometHeroInteractionIDContext"));a=l(function(){var a=m(p,f),b=a.getRelayProfilerContext(a.pageletStack);return[a,b]},[p,f]);var r=a[0];a=a[1];var s=l(function(){return(g||(g=b("performanceNow")))()},[q]),t=j(function(){if(o!=null&&o>10)return null;b("cr:683059")&&(b("cr:683059").addFirstMarkerPoint("Queue_"+f,s+b("performanceNavigationStart")()),b("cr:683059").addFirstMarkerPoint("Render_"+f));return null},[f,o,s]),u=j(function(a,b){q!=null&&r.logPageletVC(q,s,a,b,r.pageletStack)},[q,r,s]),v=b("useCometDisplayTimingTracker")(f,f,u,n,e);u=l(function(){return b("mergeRefs")(c,v)},[c,v]);return i.jsx(b("CometHeroInteractionContext").Context.Provider,{value:r,children:i.jsx(h.Provider,{value:a,children:i.jsx(b("CometProfiler.react"),{id:f,children:d(u,t)})})})}a.displayName="CometPageletImpl";e.exports=i.forwardRef(a)}),null);
__d("CometVisualCompletionUtil",["Visibility","cancelAnimationFrame","clearTimeout","requestAnimationFrame","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g={foregroundRequestAnimationFrame:function(a){if(b("Visibility").isHidden()){var c=b("setTimeout")(a,0);return function(){b("clearTimeout")(c)}}else{var d=b("requestAnimationFrame")(a);return function(){b("cancelAnimationFrame")(d)}}},getPixels:function(a){return(a.right-a.left)*(a.bottom-a.top)},getRectIntersection:function(a,b){return{bottom:Math.max(Math.min(a.bottom,b.bottom),b.top),left:Math.min(Math.max(a.left,b.left),b.right),right:Math.max(Math.min(a.right,b.right),b.left),top:Math.min(Math.max(a.top,b.top),b.bottom)}},getViewportSize:function(){return{height:window.innerHeight,width:window.innerWidth}},isInAboveTheFold:function(a){if(typeof a.getBoundingClientRect!=="function")return!1;var b=g.getViewportSize();a=a.getBoundingClientRect();var c=a.bottom,d=a.left,e=a.right;a=a.top;c=g.getPixels(g.getRectIntersection({bottom:c,left:d,right:e,top:a},{bottom:b.height,left:0,right:b.width,top:-window.scrollY}));return c>0},offsetTop:function(a,b){var c=0;a=a;while(a&&a.offsetParent&&typeof a.offsetTop==="number")c+=a.offsetTop,a=a.offsetParent;if(a&&a.offsetParent==null&&typeof a.getBoundingClientRect==="function"){var d=a.getBoundingClientRect();d=d.top;d>=0?c+=d:a===document.body&&(c-=b)}return c},trimHash:function(a){return a.split("#")[0]}};e.exports=g}),null);
__d("CometHeroInteractionLoggerAPI",["CometInteractionTracingMetrics"],(function(a,b,c,d,e,f){"use strict";function a(){return b("CometInteractionTracingMetrics").getHeroInteractionLogger()}e.exports={getInteractionLogger:a}}),null);
__d("CometHeroInteractionImpl.react",["Promise","requireCond","CometHeroInteractionContext","CometHeroInteractionIDContext","CometHeroInteractionLoggerAPI","CometHeroLogging","CometInteractionTracingMetrics","cr:1075529","CometPageletImpl.react","cr:683059","CometVisualCompletionConstants","CometVisualCompletionUtil","HiddenSubtreePassiveContext","PromiseAnnotate","React","gkx","relay-experimental/ProfilerContext","stylex","useLayoutEffect_SAFE_FOR_SSR","useStable"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext,l=c.useEffect,m=c.useMemo,n=c.useRef,o="Interaction Start",p="root",q=new WeakSet();function r(a,c){b("CometHeroLogging").markStart(a,c)}function s(a,c,d,e,f){b("CometHeroLogging").markEnd(a,c,[].concat(e),"PlaceholderWait","Placeholder Wait: "+f,d)}function t(a){if(!a)return"No placeholder";var c=a.name!=null?"@"+a.name:"";a=b("CometHeroLogging").createThenableDescription(a.thenables)||"No Promises";return a+c}function a(a,c){var d=a.children,e=a.excludeFromMainVC,f=a.hidden,u=a.interactionDesc,v=a.interactionUUID,w=a.pageletName,x=a.xstyle,y=k(b("CometHeroInteractionContext").Context),z=k(b("CometHeroInteractionIDContext")),A=n(null),B=n(null),C=k(b("HiddenSubtreePassiveContext")),D=u!=null?u:"No Description",E=n({}),F=n({}),G=n(null),H=b("useStable")(b("CometHeroInteractionLoggerAPI").getInteractionLogger),I=b("useStable")(b("CometHeroLogging").getSimpleUUID),J=m(function(){var a;return[].concat(y.pageletStack,[(a=w)!=null?a:p])},[y.pageletStack,w]),K=j(function(a,c,d){B.current!==a&&A.current==null&&!C.getCurrentState().hidden&&Object.values(E.current).length===0&&(A.current=(g||(g=b("CometVisualCompletionUtil"))).foregroundRequestAnimationFrame(function(){A.current=null,!C.getCurrentState().hidden&&B.current!==a&&Object.values(E.current).length===0&&(B.current=a,b("CometHeroLogging").markEnd(H,a,J,"Interaction","Interaction Done: "+c,o),H.endHeroInteraction(a),b("cr:1075529")&&b("cr:1075529").resumeVCTrace(a,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),b("cr:683059")&&b("gkx")("1266275")&&b("cr:683059").resumeTrigger(a),b("gkx")("1409295")&&d!==a&&b("CometInteractionTracingMetrics").complete(a),y.unhold(a,a+"_"+I))}))},[C,H,y,I,J]),L=j(function(){var a=G.current;a!=null&&K(a.interactionUUID,a.interactionDesc,z)},[z,K]),M=j(function(a,c,d){var e=G.current;e!=null&&B.current!==e.interactionUUID&&(b("CometHeroLogging").markEnd(H,e.interactionUUID,J,"Interaction","Interaction Aborted ("+c+"): "+e.interactionDesc,o),H.endHeroInteraction(e.interactionUUID),b("cr:1075529")&&b("cr:1075529").resumeVCTrace(e.interactionUUID,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),y.unhold(e.interactionUUID,e.interactionUUID+"_"+I),b("cr:683059")&&b("gkx")("1266275")&&b("cr:683059").resumeTrigger(e.interactionUUID),b("gkx")("1409295")&&d!==e.interactionUUID&&b("CometInteractionTracingMetrics").complete(e.interactionUUID,!0),a!==null&&e.interactionUUID===a.interactionUUID&&(b("CometHeroLogging").markStart(a.interactionUUID,o),b("cr:1075529")&&b("cr:1075529").holdVCTrace(a.interactionUUID,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),y.hold(e.interactionUUID,J,"Sub Interaction:"+D,e.interactionUUID+"_"+I)));B.current=null;A.current&&A.current();A.current=null;G.current=a},[H,y,I,D,J]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=null;v!=null&&(a={interactionDesc:D,interactionUUID:v});M(a,"New Interaction",z);v!=null&&K(v,D,z)},[D,v,z,M,K]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(v!=null){var a=C.getCurrentState().hidden,b=C.subscribeToChanges(function(b){b=b.hidden;a!==b&&(a=b,b?M({interactionDesc:D,interactionUUID:v},"Hidden"):K(v,D,z))});v!=null&&K(v,D,z);return function(){return b.remove()}}},[C,v,D,M,K,z]);l(function(){return function(){M(null,"Unmount")}},[M]);var N=m(function(){var a={getRelayProfilerContext:function(a){return{wrapPrepareQueryResource:function(a){a=a();return a}}},hold:function(c,d,e,f,g){e===void 0&&(e="Hold");f=(f=f)!=null?f:b("CometHeroLogging").getSimpleUUID();a.registerPlaceholder(c,f,d);var h=new(b("Promise"))(function(){});b("PromiseAnnotate").setDisplayName(h,e);a.suspenseCallback(c,f,d,new Set([h]),g);return f},logCometHero:function(a,c,d){B.current!==a&&b("CometHeroLogging").markEnd(H,a,[].concat(d),"HeroRendering","Hero Rendering: "+c,o,void 0)},logMetadata:function(a,b,c){var d;c=c[c.length-1];d=(d=F.current[c])!=null?d:Object.create(null);b!=null?d[a]=b:delete d[a];F.current[c]=d},logPageletVC:function(a,c,d,e,f){var g=f[f.length-1],h=F.current[g];h=h!=null?babelHelpers["extends"]({},h):void 0;h&&b("cr:683059")&&b("cr:683059").addRenderingMetadata(g,h);e!=null&&b("CometHeroLogging").measure(H,a,[].concat(f),"VCWithoutImage","VCWithoutImage: "+f[f.length-1],Math.min(c,e),e,h);d!=null&&b("CometHeroLogging").measure(H,a,[].concat(f),"VC","VC: "+f[f.length-1],Math.min(c,d),d,h)},logReactRender:function(a,c,d,e,f,g,h,i){if(B.current!==a){b("CometHeroLogging").measure(H,a,[].concat(i),"ReactRender","ReactRender: "+c,e,f,{actualDuration:g,baseDuration:h});d=i[i.length-1];c=(a=F.current[d])!=null?a:Object.create(null);typeof c.actualDuration==="number"?c.actualDuration+=g:c.actualDuration=g;F.current[d]=c}},pageletStack:y.pageletStack,registerPlaceholder:function(a,b,c){var d=E.current[b]==null;if(!d)return;A.current&&A.current();A.current=null;d=new Set();E.current[b]={pageletStack:c,thenables:d};r(a,b)},removePlaceholder:function(a,b){var c=E.current[b]!=null;if(!c)return;c=E.current[b];delete E.current[b];L();s(H,a,b,c.pageletStack,t(c))},suspenseCallback:function(a,c,d,e,f){var g=E.current[c];E.current[c]==null&&r(a,c);E.current[c]={name:f,pageletStack:d,thenables:e};e.forEach(function(c){if(!q.has(c)){var e;q.add(c);var f=(e=b("PromiseAnnotate").getDisplayName(c))!=null?e:"Promise",g=b("CometHeroLogging").getSimpleUUID();b("CometHeroLogging").markStart(a,g);c.then(function(){b("CometHeroLogging").markEnd(H,a,d,"SuspensePromise","Promise: "+f,g)})}});f=t(g);e=t(E.current[c]);e!==f&&(s(H,a,c,d,e),r(a,c))},unhold:function(b,c){a.removePlaceholder(b,c)}};return a},[H,y,L]);a=m(function(){return N.getRelayProfilerContext(N.pageletStack)},[N]);var O=(u=w)!=null?u:p;return i.jsx(b("CometHeroInteractionContext").Context.Provider,{value:N,children:i.jsx(b("CometHeroInteractionIDContext").Provider,{value:v,children:i.jsx(b("relay-experimental/ProfilerContext").Provider,{value:a,children:i.jsx(b("CometPageletImpl.react"),{excludeFromMainVC:e,name:O,ref:c,children:function(a,c){return i.jsxs("div",{className:(h||(h=b("stylex")))(x),"data-pagelet":O,hidden:f,ref:a,children:[i.jsx(c,{}),d]})}})})})})}e.exports=i.forwardRef(a)}),null);