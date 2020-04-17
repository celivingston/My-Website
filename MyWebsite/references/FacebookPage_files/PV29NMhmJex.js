if (self.CavalryLogger) { CavalryLogger.start_js(["lGM6P"]); }

__d("FacebookWebNotificationsSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"WebNotificationReceiveSubscribeData!"},{defaultValue:!1,kind:"LocalArgument",name:"is_work_user",type:"Boolean"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"eligible_buckets",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"sort_keys",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"alert_id",storageKey:null},f={alias:"creation_time",args:null,kind:"ScalarField",name:"notif_sent_time",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"content_category",storageKey:null},h={kind:"Variable",name:"scale",variableName:"scale"},i=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],j={alias:"icon",args:[h],concreteType:"Image",kind:"LinkedField",name:"app_icon",plural:!1,selections:i,storageKey:null},k={alias:"notif_type",args:null,kind:"ScalarField",name:"notif_type_value",storageKey:null},l={alias:"previewImage",args:[{kind:"Literal",name:"height",value:48},h,{kind:"Literal",name:"width",value:75}],concreteType:"Image",kind:"LinkedField",name:"preview_image",plural:!1,selections:i,storageKey:null},m={alias:"primerAttributes",args:null,concreteType:"PrimerAttributes",kind:"LinkedField",name:"primer_attributes",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ajaxify",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rel",storageKey:null}],storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null};h={alias:"thumbnail",args:[h,{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:i,storageKey:null};i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};var o={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"renderer_data",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"beeper_time_to_hide",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bucket_data",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bucket_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_render_in_tahoe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pre_live",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"owner_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_channel_caller",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_channel_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_id",storageKey:null}],type:"LiveVideoNotificationRendererData"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"exception_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"exception_stacktrace",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"exception_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_notification_type",storageKey:null}],type:"NotificationExceptionNotificationRendererData"}],storageKey:null},p=[{kind:"Literal",name:"location",value:"summary"}],q={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},s={alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[q,r],storageKey:null},t={condition:"is_work_user",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}]},u={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},v={alias:null,args:p,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[s,{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[t],storageKey:null},r,q],storageKey:null},u],storageKey:'title(location:"summary")'},w={alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},x={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},y=[{kind:"Literal",name:"notif_option_set_context",value:{client_action_types:["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],supported_display_styles:[{option_display_styles:["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],option_set_display_style:"CHEVRON_MENU"}]}}],z={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"action_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"undo_server_action",storageKey:null}],type:"TypeOnlyNotifOptionClientAction"},A={alias:null,args:null,kind:"ScalarField",name:"server_action",storageKey:null},B=[u],C=[r,q];B={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"text",plural:!1,selections:B,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtext",plural:!1,selections:B,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"undo_text",plural:!1,selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:C,storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:C,storageKey:null},u],storageKey:null}],type:"GenericNotifOptionRowDisplay"};C={alias:null,args:y,concreteType:"NotificationOptionSetsConnection",kind:"LinkedField",name:"notif_option_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"NotificationOptionSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOptionSet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsConnection",kind:"LinkedField",name:"notif_options",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOption",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"client_info",plural:!1,selections:[z],storageKey:null},A,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"option_display",plural:!1,selections:[B],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'};var D={alias:"timestamp",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:"time",args:null,kind:"ScalarField",name:"timestamp",storageKey:null},{alias:"text",args:null,kind:"ScalarField",name:"relative_timestamp_text",storageKey:null},{alias:"verbose",args:null,kind:"ScalarField",name:"verbose_timestamp_text",storageKey:null}],storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"should_play_sound",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"should_show_beeper",storageKey:null},G={alias:null,args:null,kind:"ScalarField",name:"tab_id",storageKey:null},H={alias:null,args:null,kind:"ScalarField",name:"feedback_target_id",storageKey:null},I={alias:null,args:null,kind:"ScalarField",name:"permalink_uri",storageKey:null},J={alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},K={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};p={alias:null,args:p,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[s,{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[i,K,t],storageKey:null},r,q],storageKey:null},u],storageKey:'title(location:"summary")'};s={alias:null,args:y,concreteType:"NotificationOptionSetsConnection",kind:"LinkedField",name:"notif_option_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"NotificationOptionSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOptionSet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsConnection",kind:"LinkedField",name:"notif_options",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOption",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"client_info",plural:!1,selections:[i,z],storageKey:null},A,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"option_display",plural:!1,selections:[i,B],storageKey:null},K],storageKey:null}],storageKey:null}],storageKey:null},K],storageKey:null}],storageKey:null}],storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FacebookWebNotificationsSubscription",selections:[{alias:null,args:b,concreteType:"WebNotificationReceiveSubscribeResponsePayload",kind:"LinkedField",name:"web_notification_receive_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"aggregated_notification",plural:!1,selections:[c,d,e,f,g,j,k,l,m,n,h,o,v,w,x,C,D],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[e,f,g,j,k,l,m,n,h,o,v,w,x,C,D],storageKey:null},E,F,{condition:"is_work_user",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"PinnedConversationNotification",kind:"LinkedField",name:"pinned_conversation",plural:!1,selections:[G,H,I,{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[e,k,n,J],storageKey:null}],storageKey:null}]}],storageKey:null}],type:"Subscription"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FacebookWebNotificationsSubscription",selections:[{alias:null,args:b,concreteType:"WebNotificationReceiveSubscribeResponsePayload",kind:"LinkedField",name:"web_notification_receive_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"aggregated_notification",plural:!1,selections:[c,d,e,f,g,j,k,l,m,n,h,o,p,w,x,s,D,K],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[e,f,g,j,k,l,m,n,h,o,p,w,x,s,D,K],storageKey:null},E,F,{condition:"is_work_user",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"PinnedConversationNotification",kind:"LinkedField",name:"pinned_conversation",plural:!1,selections:[G,H,I,{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[e,k,n,J,K],storageKey:null}],storageKey:null}]}],storageKey:null}]},params:{id:"2854602441216492",metadata:{subscriptionName:"web_notification_receive_subscribe"},name:"FacebookWebNotificationsSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(a,b){s.inform(a,{updates:b,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){var c=this;Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var d=babelHelpers["extends"]({},b,{payloadsource:p()});c.inform("update-notifications",d);c.inform("update-seen",d);c.inform("update-read",d);c.inform("update-hidden",d)})},getArbiter:function(){return n},inform:function(a,b){return n.inform(a,b)},subscribe:function(a,b){return n.subscribe(a,b)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1420844941369152"};b.getQueryID=function(){return"318967338567215"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c,d){var e=document.getElementById("notificationsCountValue"),f=null;e&&(f=e.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});e=b("NotificationTokens").untokenizeIDs(a);a=j(e);a.seen=!0;f&&(a.badgeCount=f);c&&(a.source_view=c);d&&(a.classification=d);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BanzaiODS","BaseGraphQLSubscription","CurrentUser","StreamStateMachineConstants","SubscriptionsHandler","WebPixelRatio","qex","relay-runtime","FacebookWebNotificationsSubscription.graphql"],(function(a,b,c,d,e,f,g){var h,i=b("StreamStateMachineConstants").events;b("relay-runtime").graphql;var j=b("qex")._("1243439")?"MAIN_SURFACE":"WEB_DESKTOP",k=[],l=null,m="www.notifications.lifecycle",n=0,o=!1,p=!1,q=function(c){"use strict";babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionName()+"/actor_id_"+a.actorID+"_environment_"+j};d.getQuery=function(){return h!==void 0?h:h=b("FacebookWebNotificationsSubscription.graphql")};d.getQueryParameters=function(a){return{input:{environment:j},is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}};return a}(b("BaseGraphQLSubscription"));function r(a){a=Date.now()-a;if(a<6e4)return"1m";else if(a<3e5)return"5m";else if(a<9e5)return"15m";else if(a<18e5)return"30m";else if(a<36e5)return"1h";else return"1h+"}function s(a){if(a.__type==="lifecycle_event"){var c=a.state;if(c===i.GQLS_STATE_TRANSIT_ON_CREATE){n=Date.now();return}if(o&&c===i.GQLS_STATE_TRANSIT_ON_ACTIVE){var d=i.GQLS_STATE_TRANSIT_ON_RESUME,e=r(n);b("BanzaiODS").bumpEntityKey(2966,m,d);p||(e!=null&&b("BanzaiODS").bumpEntityKey(2966,m,"first."+d+"."+e),p=!0);b("BanzaiODS").bumpEntityKey(2966,m,d+"."+e);return}b("BanzaiODS").bumpEntityKey(2966,m,c);if(c===i.GQLS_STATE_TRANSIT_ON_PAUSE){if(!o){o=!0;d=r(n);d!=null&&b("BanzaiODS").bumpEntityKey(2966,m,c+"."+d)}n=Date.now()}return}e=a.web_notification_receive_subscribe;if(e==null)return;b("BanzaiODS").bumpEntityKey(2966,m,"payload");var f=e.aggregated_notification,g=e.notification,h=e.pinned_conversation,j=e.should_play_sound,l=e.should_show_beeper;k.forEach(function(a){switch(a.event){case"NEW_BEEPER":g!=null&&l===!0&&a.callback({notification:g,should_play_sound:!!j});break;case"NEW_NOTIFICATION":f!=null&&a.callback(f);break;case"NEW_PINNED_CONVERSATION":h!=null&&a.callback(h);break}})}e.exports={subscribe:function(a){k.push(a);l===null&&(l=new(b("SubscriptionsHandler"))(),l.addSubscriptions(q.subscribe({actorID:b("CurrentUser").getID()},s)));var c=!1;return{remove:function(){if(c===!0)return;l!=null||g(0,3589);c=!0;k.splice(k.indexOf(a),1);k.length===0&&(l.release(),l=null)}}}}}),null);