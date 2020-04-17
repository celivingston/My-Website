if (self.CavalryLogger) { CavalryLogger.start_js(["yifI+"]); }

__d("SearchCoronavirusGlobalTypeaheadStrings",["fbt"],(function(a,b,c,d,e,f,g){e.exports={GLOBAL_TYPEAHEAD_ENTRY:g._("coronavirus updates"),GLOBAL_TYPEAHEAD_SECTION_HEADER:g._("Updates on COVID-19")}}),null);
__d("XCometSearchHashtagControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/hashtag/{hashtag}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometSearchTypeaheadBaseLoggingProvider",["requireCond","cr:1288453","gkx","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=function(){return Math.random().toString()};a=function(){function a(a){var b=a.context;a=a.log;this.$4=null;this.$5=null;this.$6=!1;this.$3=a;this.$1=b}var c=a.prototype;c.addEvent=function(a){var c=a.action,d=a.entries,e=a.entry;a=a.queryString;var f=String(Date.now());if(!this.$6||this.$4==null){b("recoverableViolation")("Cannot log a new "+c+" event into inactive session on "+this.$1+" surface.","search");return null}this.$2&&this.$2.push({action:c,entries:d?[].concat(d):null,entry:e,queryString:a,sequenceID:f});return{sequenceID:f,sessionID:this.$4}};c.isSessionActive=function(){return this.$6};c.getSessionID=function(){this.$4==null&&b("recoverableViolation")("Logging sessionID requested from "+this.$1+" surface does not exist.","search");return this.$4};c.endSession=function(){var a=this.$5,c=this.$4,d=this.$2;if(a==null||c==null||d==null)return;d=h(d);d={endTimeMs:Date.now(),events:d,sessionID:c,startTimeMs:a};this.$3(d);b("gkx")("1288454")&&(b("cr:1288453")&&b("cr:1288453")(d));this.$6=!1;this.$2=null;this.$5=null};c.startSession=function(a){this.$6=!0;this.$2=[];a=(a=a)!=null?a:g();this.$4=a;var c=Date.now();this.$5=c;if(b("gkx")("1288454")){a={events:[],sessionID:a,startTimeMs:c};b("cr:1288453")&&b("cr:1288453")(a)}};return a}();function h(a){if(a.length<2){b("recoverableViolation")("Logging session can't have less than 2 events","search");return[]}var c=a[0],d=a[1],e=a.slice(2),f=[];if(c.action==="typeahead_appeared"&&d.action==="keystroke"){c=babelHelpers["extends"]({},c,{entries:(c=c.entries)!=null?c:d.entries});(d=f).push.apply(d,[c].concat(e))}else f=[].concat(a);d=[];while(f.length>0){c=f.shift();e=f;a=e[0];d.push(babelHelpers["extends"]({},c,{entries:(e=a==null?void 0:a.entries)!=null?e:c.entries}))}return d}e.exports=a}),null);
__d("CometTypeaheadDataEntryWithMetaData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var b=a.key,c=a.label,d=a.metaData;a=a.rawData;this.$1=b;this.$2=c;this.$4=a;this.$3=d}var b=a.prototype;b.getKey=function(){return this.$1};b.getLabel=function(){return this.$2};b.getMetaData=function(){return this.$3};b.getRawData=function(){return this.$4};return a}();e.exports=a}),null);
__d("SearchTypeaheadLoggingSessionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("search_typeahead_logging_session");e.exports=a}),null);
__d("cometSearchTypeaheadFalcoLoggingSessionLogBuilder",["SearchTypeaheadLoggingSessionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";var g=12;function a(a,c){return function(d){var e=h(a,c,d);b("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(function(){return{session:e}})}}function h(a,b,c){var d=c.endTimeMs,e=c.events,f=c.sessionID;c=c.startTimeMs;var h=e.filter(function(a,b){return b<Math.floor(g/2)||b>=e.length-Math.ceil(g/2)});return{context:a,end_time_ms:d,events:h.map(i),scoped_entity_id:b,session_id:f,start_time_ms:c}}function i(a){var b=a.action,c=a.entries,d=a.entry,e=a.queryString;a=a.sequenceID;return{action_type:b,entries:c!=null?c.map(j):[],entry:d!=null&&c!=null?j(d,c.indexOf(d)):null,query:(b=e)!=null?b:"",sequence_id:a}}function j(a,b){var c,d=a.getMetaData();return{entity_id:d==null?void 0:(c=d.logging)==null?void 0:c.entityID,entity_type:d==null?void 0:(c=d.logging)==null?void 0:c.entityType,id:a.getKey(),index_in_group:b,label:a.getLabel(),logging_id:d==null?void 0:(c=d.logging)==null?void 0:c.loggingID,sequence_id:d==null?void 0:(b=d.logging)==null?void 0:b.sequenceID,source:k(a)}}function k(a){a=a.getMetaData();if(a==null)return"backend";a=a.markers;if(a.has("see_all"))return"escape";if(a.has("echo"))return"echo";if(a.has("recent"))return"recent_searches";return a.has("bootstrap")?"bootstrap":"backend"}e.exports=a}),null);
__d("SearchCometHashtagUtil",["qex"],(function(a,b,c,d,e,f){"use strict";a={getHashtagTag:function(a){var b=a.match(/^#(\S+)$/);a=a.split("#").length>2;return!a&&b!=null?b[1]:null},hasTypeaheadRedirection:function(){return Boolean(b("qex")._("1397754"))||Boolean(b("qex")._("1394602"))}};e.exports=a}),null);