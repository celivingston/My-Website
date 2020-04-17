if (self.CavalryLogger) { CavalryLogger.start_js(["JvShX"]); }

__d("AlbumFeedGridSwitcher",["cx","Arbiter","CSS","Event","PageTransitions","ReactComposerEvents","Run","SimpleNUXMessage","SimpleNUXMessageTypes","SubscriptionsHandler","URI","ge"],(function(a,b,c,d,e,f,g){"use strict";var h,i=7;a=function(){function a(a,c,d,e){var f=this;this.$6=function(a){var c=(h||(h=b("URI"))).getRequestURI(!1).getQueryData();if(c.needsRefresh==="true"&&a.getQueryData().feed!==c.feed||!Object.prototype.hasOwnProperty.call(a.getQueryData(),"feed")&&!Object.prototype.hasOwnProperty.call(a.getQueryData(),"needsRefresh")){Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")&&b("Arbiter").subscribeOnce("PhotoSnowlift.CLOSE",function(){return b("PageTransitions").registerHandler(f.$6,i)});return!1}b("PageTransitions").transitionComplete();return!0};this.activateFeedView=function(){if((h||(h=b("URI"))).getMostRecentURI().getQueryData().needsRefresh!=="true"){var a,c;(a=b("CSS")).addClass((c=b("ge"))("album_photos_pagelet"),"hidden_elem");a.removeClass(f.$3,"_aqp");a.removeClass(c("album_feed_pagelet"),"hidden_elem");a.addClass(f.$2,"_aqp");a.addClass(c("album_feedback_pagelet"),"hidden_elem");a.addClass(c("shared_album_nux"),"hidden_elem")}f.updateFeedURI("true")};this.activateGridView=function(){if((h||(h=b("URI"))).getMostRecentURI().getQueryData().needsRefresh!=="true"){var a,c;(a=b("CSS")).addClass((c=b("ge"))("album_feed_pagelet"),"hidden_elem");a.removeClass(f.$2,"_aqp");a.removeClass(c("album_photos_pagelet"),"hidden_elem");a.addClass(f.$3,"_aqp");a.removeClass(c("album_feedback_pagelet"),"hidden_elem");a.removeClass(c("shared_album_nux"),"hidden_elem")}f.updateFeedURI("false")};this.$1=a;this.$2=c;this.$3=d;this.$4=e;this.$5=new(b("SubscriptionsHandler"))();this.$5.addSubscriptions(b("Event").listen(this.$2,"click",this.activateFeedView),b("Event").listen(this.$3,"click",this.activateGridView));this.$2.removeAttribute("disabled");this.$3.removeAttribute("disabled");b("CSS").removeClass(this.$3,"_42fr");b("CSS").removeClass(this.$2,"_42fr");b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_FINALLY,function(){var a=(h||(h=b("URI"))).getMostRecentURI(),c=a.getQueryData();c.needsRefresh="true";a.setQueryData(c);b("PageTransitions").go(a)});this.$4&&(this.$4.subscribe("hide",function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").ALBUMSV2_FEED_VIEW_SWITCHER)}),this.$4&&this.$4.show());b("Run").onLeave(this.cleanUp.bind(this));b("PageTransitions").registerHandler(this.$6,i);a=(h||(h=b("URI"))).getRequestURI(!1);c=a.getQueryData();c.needsRefresh&&(delete c.needsRefresh,b("PageTransitions").go(a.setQueryData(c)))}var c=a.prototype;c.cleanUp=function(){this.$5&&this.$5.release(),b("PageTransitions").removeHandler(this.$6)};c.updateFeedURI=function(a){var c=(h||(h=b("URI"))).getMostRecentURI(),d=c.getQueryData();d.feed=a;c.setQueryData(d);b("PageTransitions").go(c)};return a}();e.exports=a}),null);
__d("GroupSellProductDetailActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientTimeStr=function(a){this.$1.client_time_str=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionMessage=function(a){this.$1.exception_message=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setIsEmployee=function(a){this.$1.is_employee=a;return this};c.setReferralSurface=function(a){this.$1.referral_surface=a;return this};c.setStoryID=function(a){this.$1.story_id=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={client_time_str:!0,event:!0,exception_message:!0,group_id:!0,is_employee:!0,referral_surface:!0,story_id:!0,surface:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("GroupCommerceProductDetailImageContainer.react",["cx","DOM","Event","GroupSellProductDetailActionsTypedLogger","Image.react","React","ScaledImage.react","ScrollableArea.react","Style","Vector"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=38,j=483;a=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;e.$6=function(a){var b=a.target;if(b.nodeName==="INPUT"||b.nodeName==="TEXTAREA")return;while(b){if(b.id===e.props.ufiID)return;b=b.parentElement}switch(a.keyCode){case 37:case 38:a.stopPropagation();e.$9();break;case 39:case 40:a.stopPropagation();e.$10();break}};e.$11=function(a){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("photo_click").setStoryID(e.props.storyID).setGroupID(e.props.group.id).log(),e.$7(a,e.props.media),e.setState({currentIndex:a})};e.state={currentIndex:0,stageWidth:e.props.maxWidth||j,stageHeight:558};return e}var d=c.prototype;d.render=function(){return h.jsxs("div",{children:[h.jsx("div",{className:"_57xm",children:this.$2()}),h.jsx("div",{className:"_57xn",children:this.props.media.length?this.$3():this.$4()})]})};d.componentDidUpdate=function(a,c){this.props.media&&this.props.media.length>1&&this.props.media!==a.media?(this.$5(),this.$1=b("Event").listen(document.body,"keydown",this.$6)):(!this.props.media||this.props.media.length<1)&&this.$5()};d.componentWillUnmount=function(){this.$5()};d.UNSAFE_componentWillReceiveProps=function(a){if(this.props.media!==a.media){var b=0;if(a.media.length<1)this.setState({stageWidth:this.props.maxWidth||j});else{var c=this.props.query;c&&c.fbid&&(b=a.media.findIndex(function(a){return a.id.toString()===c.fbid}),b==-1&&(b=0));this.$7(b,a.media)}this.setState({currentIndex:b})}};d.$4=function(){var a=this.props.elem;if(!a)return null;var c=b("DOM").scry(a,"img")[0];a=b("DOM").scry(a,"i")[0];if(c){var d=b("Vector").from(c.naturalWidth,c.naturalHeight);return h.jsx(b("Image.react"),{className:"_580_",width:d.x,height:d.y,src:c.src,style:this.$8(d.x,d.y)})}else if(a){c=b("Style").get(a,"backgroundImage").replace(/.*url\(\"?([^\"]*)\"?\).*/,"$1");return h.jsx(b("Image.react"),{className:"_580_",src:c})}return null};d.$5=function(){this.$1&&(this.$1.remove(),this.$1=null)};d.$7=function(a,b){b=b[a];a=this.state.stageWidth;switch(b.aspect){case"horizontal":case"wide_horizontal":a=744;break;case"wide_vertical":a=314;break;case"vertical":a=419;break;case"square":a=558;break;case"height_bound":a=b.width;break}this.props.maxWidth!=null&&(a=Math.min(a,this.props.maxWidth));this.props.onResize(b.aspect,a);this.setState({stageWidth:a})};d.$10=function(){var a=this.state.currentIndex+1,b=this.props.media.length-1;a>b&&(a=0);this.$11(a)};d.$9=function(){var a=this.state.currentIndex-1,b=this.props.media.length-1;a<0&&(a=b);this.$11(a)};d.$3=function(){var a=[],c=this.props.media.length;for(var d=0;d<c;d++){var e=this.props.media[d];a.push(h.jsx(b("Image.react"),{className:(this.state.currentIndex!=d?"_5810":"")+" _580_",width:e.width,height:e.height,src:e.uri,style:this.$8(e.width,e.height)},"stage"+e.id+("_"+d)))}return a};d.$8=function(a,b){var c;a>this.state.stageWidth&&(c=this.state.stageWidth/a,a*=c,b*=c);b>this.state.stageHeight&&(c=this.state.stageHeight/b,a*=c,b*=c);return{paddingTop:(this.state.stageHeight-b)/2+"px",paddingLeft:(this.state.stageWidth-a)/2+"px",maxWidth:this.state.stageWidth,maxHeight:this.state.stageHeight}};d.$2=function(){var a=[],c=this.props.media.length;for(var d=0;d<c;d++){var e=this.props.media[d];a.push(h.jsx(b("ScaledImage.react"),{className:"_5811"+(this.state.currentIndex==d?" _5812":""),width:i,height:i,imageSize:{height:e.height,width:e.width},src:e.uriThumb,onClick:this.$11.bind(this,d)},"thumbnail"+e.id+("_"+d)))}return h.jsxs("div",{children:[h.jsx(b("ScrollableArea.react"),{height:this.props.maxHeight,shadow:!1,children:a}),h.jsx("div",{className:"_2dh4",style:{width:i}})]})};return c}(h.Component);e.exports=a}),null);
__d("GroupCommerceProductDetailRHCContent.react",["cx","fbt","ix","GroupSellProductDetailActionsTypedLogger","Image.react","React","XUIGrayText.react","XUIText.react","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return j.jsxs("div",{className:"_4g63"+(this.props.actor.profilePicURI?"":" _34xy"),children:[j.jsxs("div",{className:"_4g65",children:[this.$1(),this.$2(),this.$3(),j.jsx("div",{className:"_4g67",children:this.props.description}),j.jsx("div",{className:"_4g68",children:this.props.actionButton})]}),j.jsx("div",{className:"_4g6d",onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("ufi_click").setStoryID(a.props.storyID).setGroupID(a.props.group.id).log()},ref:"ufi",role:"presentation",children:this.props.ufi})]})};d.$1=function(){var a=this.props.product.statusText?this.props.product.statusText+" "+this.props.product.title:this.props.product.title;return j.jsx(b("XUIText.react"),{id:this.props.titleID,className:"_4g6e",children:a})};d.$3=function(){var a=this.props.product.price;this.props.product.previousPrice!==null&&this.props.product.priceDropEnabled&&(a=h._("Now {current_price}",[h._param("current_price",a)]));var c=null;this.props.product.priceDropEnabled&&(c=j.jsxs(b("XUIText.react"),{children:[j.jsx(b("XUIGrayText.react"),{className:"_3crf",shade:"light",size:"meta1",children:this.props.product.previousPrice})," "]}));return j.jsxs("div",{className:"_4g66",children:[c,a]})};d.$2=function(){var a=this.props.product.deliveryNote?j.jsx(b("XUIText.react"),{display:"inline",children:this.props.product.deliveryNote}):null,c=a?j.jsx(b("Image.react"),{className:"_4g6g",src:i("75362")}):null;return j.jsxs("div",{className:"_4g6h",children:[c,j.jsx(b("XUIText.react"),{children:a})]})};return c}(j.Component);a.propTypes={actor:(c=b("prop-types")).object.isRequired,product:c.object.isRequired,group:c.object.isRequired,feedback:c.object.isRequired,ufi:c.any.isRequired,actionButton:c.any.isRequired,storyID:c.string,description:c.any.isRequired,titleID:c.string};e.exports=a}),null);
__d("GroupCommerceProductDetailRHCHeader.react",["cx","ix","ContextualProfileLink.react","GroupSellProductDetailActionsTypedLogger","Image.react","JSResource","Link.react","React","ReactLayeredComponentMixin_DEPRECATED","XUIContextualDialog.react","XUIContextualDialogBody.react","classWithMixins","isEmpty","mixin","prop-types","qex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React"),k=104,l=40;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.renderLayers=function(){var a=this,c;return{actorDialog:j.jsx(c=b("XUIContextualDialog.react"),{contextRef:function(){return a.refs.actorName},shown:!0,hoverContextRef:function(){return a.refs.actorName},hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:c.WIDTH.WIDE,position:"below",children:j.jsx(b("XUIContextualDialogBody.react"),{children:j.jsx("div",{id:this.props.actorHoverID})})}),actorImageDialog:j.jsx(c,{contextRef:function(){return a.refs.actorImage},shown:!0,hoverContextRef:function(){return a.refs.actorImage},hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:c.WIDTH.WIDE,position:"below",children:j.jsx(b("XUIContextualDialogBody.react"),{children:j.jsx("div",{id:this.props.actorImageHoverID})})}),groupDialog:j.jsx(c,{contextRef:function(){return a.refs.groupName},shown:!0,hoverContextRef:function(){return a.refs.groupName},hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:c.WIDTH.WIDE,position:"below",children:j.jsx(b("XUIContextualDialogBody.react"),{children:j.jsx("div",{id:this.props.groupHoverID})})})}};d.render=function(){var a=this,c=b("qex")._("876583")?j.jsx(b("ContextualProfileLink.react"),{modalProps:{isBSGItem:!0,forSaleItemID:this.props.product.id,onHidePDP:this.props.hideDialog},onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("profile_link_click").setStoryID(a.props.storyID).setGroupID(a.props.group.id).log()},profileID:this.props.actor.id,resource:b("JSResource")("MarketplaceProfile.react").__setRef("GroupCommerceProductDetailRHCHeader.react"),children:this.props.actor.name}):j.jsx(b("Link.react"),{href:this.props.actor.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("profile_link_click").setStoryID(a.props.storyID).setGroupID(a.props.group.id).log(),a.props.hideDialog()},children:this.props.actor.name});return j.jsxs("div",{className:"_34xx"+(this.props.actor.profilePicURI?"":" _34xy"),children:[j.jsx(b("Image.react"),{className:"_34xz",width:l,height:l,src:this.props.actor.profilePicURI,ref:"actorImage"}),j.jsxs("div",{className:"_34x-",children:[j.jsxs("div",{className:"_34x_",children:[j.jsx("div",{ref:"actorName",className:"_34y0",children:c}),(i||(i=b("isEmpty")))(this.props.group)?null:j.jsx(b("Image.react"),{className:"_34y1",src:h("82443")}),j.jsx("div",{ref:"groupName",className:"_34y0",children:j.jsx(b("Link.react"),{href:this.props.group.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("group_link_click").setStoryID(a.props.storyID).setGroupID(a.props.group.id).log(),a.props.hideDialog()},children:this.props.group.name})})]}),j.jsx("div",{className:"_4g6i",children:j.jsx(b("Link.react"),{href:this.props.product.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("permalink_click").setStoryID(a.props.storyID).setGroupID(a.props.group.id).log(),a.props.hideDialog()},children:this.props.timestamp})})]}),j.jsx("div",{id:this.props.chevronID})]})};d.componentDidUpdate=function(a,b){a=this.refs.actorName.offsetWidth;b=k-a;this.refs.groupName.style.maxWidth=k+b+"px"};return c}(b("classWithMixins")(j.Component,b("mixin")(b("ReactLayeredComponentMixin_DEPRECATED"))));a.propTypes={actor:(c=b("prop-types")).object.isRequired,group:c.object.isRequired,storyID:c.string,actorHoverID:c.string.isRequired,actorImageHoverID:c.string.isRequired,groupHoverID:c.string.isRequired,chevronID:c.string.isRequired,product:c.object.isRequired,timestamp:c.any.isRequired};e.exports=a}),null);
__d("MarketplaceUpsellIconLink.react",["ix","cx","fbt","FlexLayout.react","Image.react","Link.react","React","XUIText.react","asset","cxMargin"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function a(a){return j.jsx(b("Link.react"),{className:a.className,href:a.href,children:j.jsx(b("XUIText.react"),{className:"_15t5",size:"header4",children:j.jsxs(b("FlexLayout.react"),{align:"center",children:[j.jsx("div",{className:"_6u4t _3-91",children:j.jsx(b("Image.react"),{src:g("504156")})}),j.jsx("div",{children:i._("View More Items for Sale on Marketplace")}),j.jsx(b("Image.react"),{className:"_3-9b",src:g("482834")})]})})})}e.exports=a}),null);
__d("XGroupCommerceMarketplaceProductDetailController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/product_detail/",{sale_post_id:{type:"FBID",required:!0},ufi_id:{type:"String",required:!0},date_time_id:{type:"String",required:!0},action_button_id:{type:"String",required:!0},actor_dialog_id:{type:"String",required:!0},actor_image_dialog_id:{type:"String",required:!0},description_id:{type:"String",required:!0},title_id:{type:"String",required:!0},group_hover_id:{type:"String",required:!0},ufi_instance_id:{type:"String",required:!0},chevron_id:{type:"String",required:!0},story_dom_id:{type:"String"}})}),null);
__d("GroupCommerceProductDetail.react",["cx","fbt","Arbiter","AsyncRequest","CurrentUser","GroupCommerceProductDetailImageContainer.react","GroupCommerceProductDetailRHCContent.react","GroupCommerceProductDetailRHCHeader.react","GroupSellProductDetailActionsTypedLogger","LayerFadeOnHide","LayerHideOnEscape","LeftRight.react","MarketplaceUpsellIconLink.react","React","ReactRenderer","ResponsiveBlock.react","ScrollableArea.react","XGroupCommerceMarketplaceProductDetailController","XMarketplaceHomePageController","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","XUISpinner.react","guid"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=558,k=530,l=891;a=function(a){babelHelpers.inheritsLoose(c,a);function c(d,e){var f;f=a.call(this,d,e)||this;f.hideDialog=function(){f.$3(!1)};f.$6=function(a,b){var c=f.state.width;switch(a){case"horizontal":case"wide_horizontal":c=1153;break;case"wide_vertical":c=723;break;case"vertical":c=828;break;case"square":c=967;break;case"height_bound":c=b+409;break}f.setState({width:c})};f.$4=function(a,b){b>j&&(b=j),f.setState({rhcHeight:b})};f.$3=function(a){c.$9!==null&&f.setState({isDialogShown:a}),a||(new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("hide_dialog").setStoryID(f.state.payload.storyID).setGroupID(f.state.payload.group.id).log(),f.props.onHide&&f.props.onHide(),c.$9!==null&&window.setTimeout(function(){f.setState({payload:f.$7(),query:null,elem:null})}))};f.$5=function(a){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("show_dialog").setStoryID(a.payload.storyID).setGroupID(a.payload.group.id).log(),f.setState({payload:a.payload,isDialogShown:!0,isLoading:!1,isMarketplaceUpsellShown:!a.payload.isViewerSeller})};d=babelHelpers.assertThisInitialized(f);d.hideDialog=f.hideDialog.bind(babelHelpers.assertThisInitialized(f));d.showDialog=f.showDialog.bind(babelHelpers.assertThisInitialized(f));d.$3=f.$3.bind(babelHelpers.assertThisInitialized(f));d.$4=f.$4.bind(babelHelpers.assertThisInitialized(f));d.$5=f.$5.bind(babelHelpers.assertThisInitialized(f));d.$6=f.$6.bind(babelHelpers.assertThisInitialized(f));f.$2={};f.state={isDialogShown:!1,isLoading:!1,isMarketplaceUpsellShown:!1,width:l,rhcHeight:200,payload:f.$7(),ufiID:"ufi_detail_"+b("guid")(),datetimeID:"datetime_"+b("guid")(),actionButtonID:"actionButton"+b("guid")(),actorHoverID:"actorHoverID"+b("guid")(),actorImageHoverID:"actorImageHoverID"+b("guid")(),descriptionID:"descriptionID"+b("guid")(),titleID:"titleID"+b("guid")(),groupHoverID:"groupHoverID"+b("guid")(),ufiInstanceID:"ufiInstanceID"+b("guid")(),chevronID:"chevronID"+b("guid")(),query:null,elem:null,salePostID:null,storyDomID:null};return f}var d=c.prototype;d.componentDidMount=function(){this.$1=b("Arbiter").subscribe("XComposerEditDialog/doneEditing",function(){this.state.salePostID&&this.$8(this.state.salePostID,this.state.storyDomID)}.bind(this))};d.componentWillUnmount=function(){var a=this.refs.modal;a!=null&&a.layer.hide();c.$9=null;this.$1&&this.$1.unsubscribe();this.$1=null};d.renderModal=function(a){return i.jsxs(b("XUIDialog.react"),{shown:!0,onToggle:this.$3,ref:"modal",width:this.state.width,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},className:"_1mlf",children:[i.jsx(b("XUIDialogTitle.react"),{children:h._("Item Details")}),i.jsx(b("XUIDialogBody.react"),{children:a}),this.$10()]})};d.render=function(){if(!this.state.isDialogShown)return null;var a=i.jsx("span",{id:this.state.datetimeID}),c=i.jsx("div",{id:this.state.ufiID}),d=i.jsx("div",{id:this.state.actionButtonID}),e=i.jsx("div",{className:"_3g5q",id:this.state.descriptionID});a=i.jsx("div",{className:"_3g6d",children:i.jsxs(b("LeftRight.react"),{children:[i.jsx("div",{className:"_3g6e",children:i.jsx(b("GroupCommerceProductDetailImageContainer.react"),{elem:this.state.elem,group:this.state.payload.group,maxHeight:k,maxWidth:this.props.maxImageWidth,media:this.state.payload.media,onResize:this.$6,query:this.state.query,storyID:this.state.payload.storyID,ufiID:this.state.ufiID})}),i.jsx("div",{className:"_3g6f",children:i.jsx(b("ScrollableArea.react"),{className:"_3g6g",height:this.state.rhcHeight,children:i.jsxs(b("ResponsiveBlock.react"),{className:"_3g6h",onResize:this.$4,children:[this.$11(),i.jsx(b("GroupCommerceProductDetailRHCHeader.react"),{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID,product:this.state.payload.product,timestamp:a}),i.jsx(b("GroupCommerceProductDetailRHCContent.react"),{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,actionButton:d,ufi:c,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:e,titleID:this.state.titleID})]})})})]})});return this.props.useModal===!1?a:this.renderModal(a)};d.showDialog=function(a,b,c,d,e){this.$8(a,d,e),this.setState({payload:this.$7(),salePostID:a,query:b,elem:c,storyDomID:d,isDialogShown:!0,isLoading:!0,width:l})};d.$10=function(){if(b("CurrentUser").isWorkUser()||this.state.isLoading||!this.state.isMarketplaceUpsellShown)return null;var a=b("XMarketplaceHomePageController").getURIBuilder().setString("ref","sale_groups").getURI();return i.jsx(b("MarketplaceUpsellIconLink.react"),{className:"_1mle _2pie",href:a})};d.$11=function(){return!this.state.isLoading?null:i.jsx("div",{className:"_msc",children:i.jsx(b("XUISpinner.react"),{size:"large"})})};d.$8=function(a,c,d){d===void 0&&(d=function(){});c=b("XGroupCommerceMarketplaceProductDetailController").getURIBuilder().setFBID("sale_post_id",a).setString("ufi_id",this.state.ufiID).setString("date_time_id",this.state.datetimeID).setString("action_button_id",this.state.actionButtonID).setString("actor_dialog_id",this.state.actorHoverID).setString("actor_image_dialog_id",this.state.actorImageHoverID).setString("description_id",this.state.descriptionID).setString("title_id",this.state.titleID).setString("group_hover_id",this.state.groupHoverID).setString("ufi_instance_id",this.state.ufiInstanceID).setString("chevron_id",this.state.chevronID).setString("story_dom_id",c).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("GET").setHandler(this.$5).setErrorHandler(function(c){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("async_data_request_fail").setStoryID(a.toString()).log(),d()}).setReadOnly(!0).send()};d.$7=function(){return{actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}}};c.init=function(a,d){d===void 0&&(d={});d=b("ReactRenderer").constructAndRenderComponent(c,babelHelpers["extends"]({},d),a);c.$12=a;c.$9=d;c.$13&&(c.showDialog(c.$13,c.$14,c.$15,c.$16),c.$13=null,c.$14=null,c.$15=null,c.$16=null)};c.showDialog=function(a,d,e,f,g){g===void 0&&(g=function(){});if(!c.$9){if(!c.$12){c.$13=a;c.$14=d;c.$15=e;c.$16=f;return}c.init(c.$12)}if(!c.$9){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent("dialog_instance_null").setStoryID(a.toString()).log();return}c.$9.showDialog(a,d,e,f,g)};return c}(i.Component);a.defaultProps={onHide:function(){},useModal:!0};a.$9=null;a.$13=null;a.$12=null;a.$15=null;a.$14=null;a.$16=null;e.exports=a}),null);
__d("GroupCommerceProductDetailLayer",["GroupCommerceProductDetail.react","Layer"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._buildWrapper=function(a,c){b("GroupCommerceProductDetail.react").init(c);return c};return c}(b("Layer"));e.exports=a}),null);
__d("OGHovercardLayerHideOnBlur",["ContextualThing","DOM","Event"],(function(a,b,c,d,e,f){function a(a){this._layer=a}Object.assign(a.prototype,{_subscriptions:null,_clickListener:null,enable:function(){this._subscriptions=[this._layer.subscribe("show",this._attach.bind(this)),this._layer.subscribe("hide",this._detach.bind(this))],this._layer.isShown()&&this._attach()},disable:function(){this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null},_detach:function(){this._clickListener&&this._clickListener.remove(),this._clickListener=null},_attach:function(){setTimeout(function(){this._clickListener=b("Event").listen(document.documentElement,"click",this._maybeHide.bind(this))}.bind(this),0)},_maybeHide:function(a){var c=a.getTarget();if(b("DOM").contains(this._layer.getContent(),c)||b("ContextualThing").containsIncludingLayers(this._layer.getContentRoot(),c))return;this._shouldHide(a)&&this._layer.hide()},_shouldHide:function(a){return!0}});e.exports=a}),null);
__d("OGAggregationHovercardTarget",["cx","fbt","ArbiterMixin","AsyncRequest","ContextualDialog","ContextualDialogArrow","CSS","DOM","Event","LayerHideOnBlur","LayerHideOnEscape","OGHovercardLayerHideOnBlur"],(function(a,b,c,d,e,f,g,h){var i=350,j={};function k(a){return new(b("ContextualDialog"))({addedBehaviors:[b("LayerHideOnBlur"),b("LayerHideOnEscape")],arrowBehavior:b("ContextualDialogArrow"),classNames:[a]},b("DOM").create("div",{className:"_4q1"},h._("Loading..."))).setWidth(i)}Object.assign(a,{setHovercard:function(a,b){a=j[a];a&&a.setHovercard(b)}});function a(a,b,c,d,e,f,g,h,i){j[b]=this;this._targetID=b;this._endpoint=c;this._preventClose=e||[];this._position=g||"below";this._dialogClass=h||"";this._fetchOnHover=i;this.init(a);for(var b=0,c=d.length;b<c;b++){e=d[b];this.addTrigger(e.element,e.trigger_class,e.context)}f&&this.showHovercard(null,null)}Object.assign(a.prototype,b("ArbiterMixin"),{init:function(a){this._hovercardShown=!1;this._hovercardScheduled=!1;this._target=a;this._triggers=[];this._hovercard=null;this._fetching=!1;this._placeholder=null;this._placeholderListener=null;this._shownClass="hover_shown";this._triggerClass=null;this._currentTrigger=null;this._context=null;return this},addTrigger:function(a,c,d){this._triggers.push(a),b("Event").listen(a,"click",this._onTriggerClick.bind(this,a,c,d)),this._fetchOnHover&&b("Event").listen(a,"mouseover",this._onTriggerMouseOver.bind(this))},_onTriggerMouseOver:function(){this._fetch()},_onTriggerClick:function(a,b,c){c=c||this._target;if(this._hovercardShown&&this._hovercard.getContext()===c||this._hovercardScheduled&&this._placeholder.getContext()===c||(this._hovercardShown||this._hovercardScheduled)&&this._currentTrigger===a){this._currentTrigger=null;this.hideHovercard();return}this.hideHovercard();this._currentTrigger=a;this.showHovercard(b,c)},_fetch:function(){if(this._hovercard!=null||this._fetching)return;this._fetching=!0;var a=function(){this._fetching=!1},c=function(){this.hideHovercard()};new(b("AsyncRequest"))(this._endpoint).setData({hover_target:this._targetID}).setMethod("GET").setReadOnly(!0).setErrorHandler(c.bind(this)).setTransportErrorHandler(c.bind(this)).setFinallyHandler(a.bind(this)).send()},setHovercard:function(a){var c=this;this._hovercard=a;a=function(a){"use strict";babelHelpers.inheritsLoose(d,a);function d(){return a.apply(this,arguments)||this}var e=d.prototype;e.$conditionalHideOnBlur1=function(a){a=a.getTarget();for(var d=0,e=c.$conditionalHideOnBlur2.length;d<e;d++)if(b("DOM").contains(c.$conditionalHideOnBlur2[d],a))return!1;return!0};return d}(b("OGHovercardLayerHideOnBlur"));this._hovercard.setPosition(this._position).setAlignment("center").enableBehaviors([a,b("LayerHideOnEscape")]);this._hovercard.subscribe("aftershow",this._onHovercardShow.bind(this));this._hovercard.subscribe("hide",this._onHovercardHide.bind(this));this._hovercard.subscribe("destroy",this._onHovercardDestroy.bind(this));this._hovercardScheduled&&this.showHovercard(this._triggerClass,this._context)},showHovercard:function(a,c){b("CSS").addClass(this._target,this._shownClass),this._triggerClass&&this._triggerClass!==a&&b("CSS").removeClass(this._target,this._triggerClass),this._triggerClass=a,this._triggerClass&&b("CSS").addClass(this._target,this._triggerClass),this._context=c,this._hovercard?(this._hovercard.setContext(c||this._target).show(),this._hovercardShown=!0,this._hovercardScheduled=!1,this._hidePlaceholder()):(this._hovercardScheduled=!0,this._fetch(),this._showPlaceholder()),this.inform("showhovercard")},hideHovercard:function(){this._hovercardScheduled=!1,this._hidePlaceholder(),this._hovercard?this._hovercard.hide():this._onHovercardHide()},_showPlaceholder:function(){this._placeholder||(this._placeholder=k(this._dialogClass),this._placeholder.setContext(this._context||this._target).setPosition(this._position).setAlignment("center").show(),this._placeholderListener=this._placeholder.subscribe("hide",this._onPlaceholderHide.bind(this)))},_hidePlaceholder:function(){this._placeholder&&this._placeholder.hide()},_onPlaceholderHide:function(){this._placeholder&&(this._hovercardScheduled=!1,this._placeholderListener&&this._placeholder.unsubscribe(this._placeholderListener),this._placeholder=null,this._hovercardShown||this._removeTriggerClasses())},_onHovercardShow:function(){var a=this._hovercard.getContent();a=b("DOM").scry(a,"textarea.mentionsTextarea")[0];a&&a.focus()},_onHovercardHide:function(){this._hovercardShown=!1,this._removeTriggerClasses(),this.inform("hidehovercard")},_onHovercardDestroy:function(){this._hovercard=null},_removeTriggerClasses:function(){b("CSS").removeClass(this._target,this._shownClass),this._triggerClass&&b("CSS").removeClass(this._target,this._triggerClass)}});e.exports=a}),null);
__d("PhotoMultiPhotosThumb",["Event","Style"],(function(a,b,c,d,e,f){var g=1200;a={init:function(a,c){var d=null,e=0;function f(a){e=a,c.forEach(function(c,d){b("Style").set(c,"opacity",d===a?1:0)})}function h(){f((e+1)%c.length),d=setTimeout(h,g)}b("Event").listen(a,"mouseenter",function(){if(d)return;e=0;h()});b("Event").listen(a,"mouseleave",function(){f(0),window.clearTimeout(d),d=null})}};e.exports=a}),null);
__d("BulkTagLoader",["AsyncRequest","emptyFunction"],(function(a,b,c,d,e,f){var g=!1;function a(){}Object.assign(a,{loadForSet:function(a){g||(g=!0,new(b("AsyncRequest"))("/ajax/photos/sets/tags_fetch.php").setHandler(b("emptyFunction")).setData({set:a}).send())},loadForAlbum:function(a){g||(g=!0,new(b("AsyncRequest"))("/ajax/photos/album/tags_fetch.php").setHandler(b("emptyFunction")).setData({fbid:a}).send())},reset:function(){g=!1}});e.exports=a}),null);
__d("FlexGrid",["csx","DOM","PageTransitions","URI"],(function(a,b,c,d,e,f,g){"use strict";var h;a={removePhoto:function(a){a=b("DOM").scry(document.body,'._vor[data-fbid="'+a+'"]')[0];if(a){b("DOM").remove(a);a=(h||(h=b("URI"))).getMostRecentURI();var c=a.getQueryData();c.needsRefresh="true";a.setQueryData(c);b("PageTransitions").go(a)}}};e.exports=a}),null);
__d("PhotoCurationControl",["csx","Event","Parent","Toggler"],(function(a,b,c,d,e,f,g){a={init:function(a){a=b("Parent").bySelector(a,"._vor, .fbPhotoStarGridElement");b("Event").listen(a,"mouseleave",function(){b("Toggler").hide()})}};e.exports=a}),null);
__d("PhotoInlineActions",["csx","cx","ActorURI","Arbiter","AsyncRequest","CSS","Event","Nectar","Parent","URI"],(function(a,b,c,d,e,f,g,h){var i;a={init:function(a,c,d,e,f,g,h,j,k,l,m){var n=!1;b("Arbiter").subscribe(["UFI/CommentAddedActive","UFI/CommentDeletedActive","UFI/LikeActive"],function(c,d){if(parseInt(a.getAttribute("data-fbid"),10)!==d)return;c==="UFI/LikeActive"&&b("CSS").toggleClass(a,"_53a");d=new(i||(i=b("URI")))("/ajax/photos/photo/refresh.php");d=m!=null?b("ActorURI").create(d,m):d;new(b("AsyncRequest"))().setURI(d).setData({fbid:a.getAttribute("data-fbid")}).setRelativeTo(a).send()});b("Event").listen(a,"click",function(o){var p=o.getTarget();if(n||!b("Parent").bySelector(p,"._53b"))return;o.prevent();b("CSS").toggleClass(a,"_53a");p={};b("Nectar").addModuleData(p,a);o=new(i||(i=b("URI")))("/ajax/photos/photo/like.php");o=m!=null?b("ActorURI").create(o,m):o;n=new(b("AsyncRequest"))().setURI(o).setData(babelHelpers["extends"]({fbid:a.getAttribute("data-fbid"),relatedid:c,hovercardendpoint:d,includecommentlink:e,hovercardposition:f,includeleadingseparator:g,dialogClass:h,fetchOnHover:j,includeSocialContext:k,tagURI:l},p)).setRelativeTo(a).setErrorHandler(function(){b("CSS").toggleClass(a,"_53a")}).setFinallyHandler(function(){n=!1}).send()})}};e.exports=a}),null);
__d("StarGridLayout",["Vector","removeFromArray"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){Object.assign(this,a)}var c=a.prototype;c.getShortestColumn=function(a){return a[0]<=a[1]?0:1};c.getDangling=function(a){a=a.filter(function(a){return!this.isStarred(a)}.bind(this));return a.length%2===1?a[a.length-1]:null};c.mangleOrder=function(a){if(a.length<3||!(this.isFixed(a[0])&&this.isStarred(a[1])))return a;var c=this.nextNonStarred(a,2);if(!c)return a;a=a.concat();b("removeFromArray")(a,c);a.splice(1,0,c);return a};c.layout=function(a){var c=[0,0],d=0,e=this.getDangling(a),f=[];a=this.mangleOrder(a);for(var g=0;g<a.length;++g){var h=this.getShortestColumn(c),i=a[g];this.isStarred(i)?(this.renderStarred(this._grid,c,h,i),c[h]+=2,d=Math.max(d,h*2+2)):(f.push(i),(f.length===2||i===e)&&(this.renderNonStarred(this._grid,c,h,f),d=Math.max(d,h*2+f.length),f=[],c[h]+=1))}return new(b("Vector"))(d,Math.max.apply(null,c))};c.inNonStarredBlock=function(a,b,c,d){return b===c[d]&&Math.floor(a/2)===d};c.inStarredBlock=function(a,b,c,d){return(b===c[d]||b===c[d]+1)&&Math.floor(a/2)===d};c.nextNonStarred=function(a,b){for(;b<a.length;++b)if(!this.isStarred(a[b]))return a[b];return null};c.layoutReorder=function(a,c,d,e){a=a.concat();d=Math.max(0,Math.min(3,d));e=Math.max(0,e);b("removeFromArray")(a,c);a.push(c);var f=[0,0],g=this.getDangling(a),h=!1,i=[];for(var j=0;j<a.length;++j){var k=this.getShortestColumn(f),l=a[j];if(this.isStarred(l)){l===c&&(h=!0);!h&&this.isStarred(c)&&this.inStarredBlock(d,e,f,k)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(a,c),this.renderStarred(this._grid,f,k,c),f[k]+=2,k=this.getShortestColumn(f),h=!0);if(!h&&!this.isStarred(c)&&this.inStarredBlock(d,e,f,k)&&this.inNonStarredBlock(d,e,f,k)){b("removeFromArray")(a,c);if(i.length===1)i.splice(d%2,0,c);else{var m=this.nextNonStarred(a,j);m?(b("removeFromArray")(a,m),i.push(m),i.splice(d%2,0,c)):i.push(c)}this.renderNonStarred(this._grid,f,k,i);i=[];f[k]+=1;g=this.getDangling(a.slice(j+1));k=this.getShortestColumn(f);h=!0}if(!h&&this.inStarredBlock(d,e,f,k)&&!this.inNonStarredBlock(d,e,f,k)){b("removeFromArray")(a,c);var m=this.nextNonStarred(a,j);a.push(c);if(m){b("removeFromArray")(a,m);a.splice(j,0,m);j--;continue}e-=1;j--;continue}this.renderStarred(this._grid,f,k,l);f[k]+=2}else i.push(l),(i.length===2||l===g)&&(!h&&!this.isStarred(c)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(i,c),b("removeFromArray")(a,c),i.splice(d%2,0,c),i.length===3&&(b("removeFromArray")(a,i[2]),a.splice(j,0,i[2]),j=a.indexOf(i[2])-1,i.pop()),g=this.getDangling(a.slice(j+1)),h=!0),!h&&this.isStarred(c)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(a,c),this.renderStarred(this._grid,f,k,c),f[k]+=2,k=this.getShortestColumn(f),h=!0),this.renderNonStarred(this._grid,f,k,i),i=[],f[k]+=1)}};c.getStoringLayout=function(b){return new a({grid:this._grid,isStarred:this.isStarred,isFixed:this.isFixed,renderStarred:function(a,c,d,e){b.push(e)},renderNonStarred:function(a,c,d,e){b.push(e[0]),e.length>1&&b.push(e[1])}})};c.reorder=function(a,b,c,d){var e=[];this.getStoringLayout(e).layoutReorder(a,b,c,d);return e};c.canonicalize=function(a){var b=[];this.getStoringLayout(b).layout(a);return b};return a}();e.exports=a}),null);
__d("StarGrid",["Arbiter","CSS","DataStore","DOM","Locale","Parent","StarGridLayout","Style","removeFromArray"],(function(a,b,c,d,e,f){var g={MARGIN:5,isStarred:function(a){return b("CSS").hasClass(a,"fbPhotoStarGridStarred")},isFixed:function(a){return b("CSS").hasClass(a,"fbPhotoStarGridFixed")},setPosition:function(a,c,d){var e=b("Locale").isRTL()?"margin-right":"margin-left";b("Style").set(a,"position","absolute");b("Style").set(a,"margin-top",c+"px");b("Style").set(a,e,d+"px")},renderNonStarred:function(a,b,c,d){for(var e=0;e<d.length;++e){var f=b[c]*g.getSize(a),h=(c*2+e)*g.getSize(a);g.setPosition(d[e],f,h)}},renderStarred:function(a,b,c,d){b=b[c]*g.getSize(a);c=c*2*g.getSize(a);g.setPosition(d,b,c)},mergeWithPreviousGrid:function(a){var c=a.previousSibling;if(c&&b("CSS").hasClass(c,"fbStarGrid")){b("CSS").addClass(c,"fbStarGridAppendedTo");while(a.firstChild)c.appendChild(a.firstChild);b("DOM").remove(a);a=c}return a},addPhotos:function(a){var c=b("DOM").scry(document.body,".fbStarGrid")[0];if(!c)return;b("DOM").prependContent(c,a);a=this.getSize(c);this.mergeAndLayoutGrid(c,a)},removeFromGrid:function(a){var c=b("Parent").byClass(a,"fbStarGrid"),d=g.getElements(c);b("removeFromArray")(d,a);b("DOM").remove(a);g.layoutGrid(c,d);b("Arbiter").inform("StarGrid/UPDATE",c)},removePhoto:function(a){a=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+a+'"]')[0];a&&this.removeFromGrid(a)},removeUntaggedPhoto:function(a){a=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+a+'"][data-in-photos-of="1"]');a.length>0&&this.removeFromGrid(a[0])},removePhotos:function(a){var c,d;for(var e=0;e<a.length;e++){var f=a[e];f=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+f+'"]')[0];c=b("Parent").byClass(f,"fbStarGrid");d=g.getElements(c);b("removeFromArray")(d,f);b("DOM").remove(f)}g.layoutGrid(c,d);b("Arbiter").inform("StarGrid/UPDATE",c)},layoutGrid:function(a,c){var d=new(b("StarGridLayout"))({_grid:a,isStarred:g.isStarred,isFixed:g.isFixed,renderNonStarred:g.renderNonStarred,renderStarred:g.renderStarred});g.setElements(a,c);d=d.layout(c);b("Style").set(a,"width",d.x*g.getSize(a)+"px");b("Style").set(a,"height",d.y*g.getSize(a)+"px")},mergeAndLayoutGrid:function(a,c){var d=b("DOM").scry(a,".fbPhotoStarGridElement"),e=g.mergeWithPreviousGrid(a),f=d;a!==e&&(f=g.getElements(e).concat(d));g.setElements(a,f);b("DataStore").set(a,"size",c);g.layoutGrid(e,f);b("Arbiter").subscribe("PhotosBulkEditablePhoto.MOVED",function(a,b){g.removePhoto(b)}.bind(this));b("Arbiter").inform("StarGrid/UPDATE",a)},getSize:function(a){return b("DataStore").get(a,"size")}};Object.assign(g,{getElements:function(a){var c=b("DataStore").get(a,"elements");c||(c=b("DOM").scry(a,"div.fbPhotoStarGridElement"),g.setElements(a,c));return c},setElements:function(a,c){b("DataStore").set(a,"elements",c)}});e.exports=g}),null);
__d("TagSuggestionsDrawer",["AsyncRequest","PhotosAppSection"],(function(a,b,c,d,e,f){var g=!1,h={init:function(){if(g)return;g=!0;b("PhotosAppSection").subscribe("toggle_drawer",h._onToggle)},_onToggle:function(a,b){b.button_clicked==="show"?h._notify(!1):h._notify(!0)},_notify:function(a){new(b("AsyncRequest"))("/ajax/medley/tag_suggestions_drawer.php").setData({is_closed:a}).send()}};e.exports=h}),null);
__d("ScrollLoader",["AsyncRequest","OnVisible"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,c,d,e){this.$1=new(b("OnVisible"))(a,function(){new(b("AsyncRequest"))(c).setRelativeTo(a).send()},d,e)}var c=a.prototype;c.destroy=function(){this.$1.remove(),this.$1=null};return a}();e.exports=a}),null);