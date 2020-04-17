if (self.CavalryLogger) { CavalryLogger.start_js(["lPRP5"]); }

__d("ProfileFunFactsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={SINGLE_PROMPT_ANSWER_QUESTION:g._("Add Answer"),SINGLE_PROMPT_ANSWER_QUESTION_SHORT:g._("Answer"),SINGLE_PROMPT_ASK_QUESTION_PLACEHOLDER:g._("What are you curious about?"),SINGLE_PROMPT_ASK_NOTICE:g._("Your question will be added to a list of questions anyone on Facebook can answer. Your post's privacy won't be changed."),SINGLE_PROMPT_ASK_NUX:g._("Create your own questions for your friends and anyone on Facebook to answer"),SINGLE_PROMPT_DIALOG_TITLE:g._("Did You Know"),SINGLE_PROMPT_BACK_BUTTON:g._("Previous"),SINGLE_PROMPT_NEXT_BUTTON:g._("Next"),SINGLE_PROMPT_SAVE_AND_TAG:g._("Save and Tag Friends"),MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT:g._("It will be unavailable for people to answer and your name will be removed from existing posts. You won't be able to undo this."),MANAGE_QUESTIONS_DELETE_DIALOG_TITLE:g._("Archive this question?"),MANAGE_QUESTIONS_DELETE_BUTTON_TEXT:g._("Archive"),MANAGE_QUESTIONS_NULL_STATE_TITLE:g._("No Questions Yet"),MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT:g._("Create questions for your friends and anyone on Facebook to answer."),MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT:g._("Create Question"),QUESTION_OF_THE_DAY_LABEL:g._("QUESTION OF THE DAY"),MTOUCH_SINGLE_PROMPT_COMPOSER_BUTTON:g._("Add your answer..."),MTOUCH_SINGLE_PROMPT_BACK_BUTTON:g._("PREVIOUS"),MTOUCH_SINGLE_PROMPT_NEXT_BUTTON:g._("NEXT")};e.exports=a}),null);
__d("XProfileFunFactsSelectorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/selector/",{entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},group_id:{type:"FBID"},pinned_prompt_id:{type:"FBID"},show_ask_tagger:{type:"Exists",defaultValue:!1},skip_selector:{type:"Bool",defaultValue:!1}})}),null);
__d("XProfileFunFactsUserPromptDisableController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/user_prompt/disable/",{prompt_id:{type:"FBID",required:!0}})}),null);
__d("XProfileFunFactsUserPromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/user_prompt/fetch/",{})}),null);
__d("FunFactManagePromptsComponent.react",["ix","cx","AsyncRequest","CurrentUser","FacebookAppIDs","FBConfirmDialog.react","FDSButton.react","FlexLayout.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsStrings","React","ScrollableArea.react","ShimButton.react","Text.react","TextWithEmoticons.react","XProfileFunFactsSelectorController","XProfileFunFactsUserPromptDisableController","XProfileFunFactsUserPromptFetchController","XUISpinner.react","XUIText.react","asset","cxMargin"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=277;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isDisabling:!1,isLoading:!1,prompts:[],selectedPrompt:null,showConfirmDialog:!1},d.$2=function(){var a=d.state.selectedPrompt;if(!a)return;d.setState({isDisabling:!0,showConfirmDialog:!1});var c=b("XProfileFunFactsUserPromptDisableController").getURIBuilder().setFBID("prompt_id",a.id.toString()).getURI();new(b("AsyncRequest"))(c).setHandler(function(){var c=d.state.prompts.filter(function(b){return b.id!==a.id});d.setState({isDisabling:!1,prompts:c});new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("delete").setItemType("ask_prompt").setAppID(b("FacebookAppIDs").WWW).log()}).setErrorHandler(function(){d.setState({isDisabling:!1})}).send()},d.$3=function(){d.setState({selectedPrompt:null,showConfirmDialog:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a=this,c=b("XProfileFunFactsUserPromptFetchController").getURIBuilder().getURI();this.setState({isLoading:!0});new(b("AsyncRequest"))(c).setHandler(function(b){a.setState({isLoading:!1,prompts:b.getPayload()})}).send()};d.$4=function(a){this.setState({selectedPrompt:a,showConfirmDialog:!0})};d.$5=function(){var a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point","collection").setExists("show_ask_tagger",!0).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))(a).send()};d.componentDidMount=function(){this.$1(),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("enter").setItemType("manage_tab").setAppID(b("FacebookAppIDs").WWW).log()};d.render=function(){var a=this;if(this.state.isLoading)return i.jsx(b("FlexLayout.react"),{align:"center",className:"_1oen",direction:"vertical",justify:"center",children:i.jsx(b("XUISpinner.react"),{size:"large"})});if(this.state.prompts.length===0)return i.jsxs(b("FlexLayout.react"),{align:"center",className:"_1oen",direction:"vertical",justify:"center",children:[i.jsx(b("XUIText.react"),{size:"header2",children:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_TITLE}),i.jsx(b("XUIText.react"),{className:"_3-96 _3-8w _2pib _52jv",size:"body1",children:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT}),i.jsx(b("FDSButton.react"),{label:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT,onClick:this.$5})]});var c=null;this.state.showConfirmDialog&&(c=i.jsx(b("FBConfirmDialog.react"),{confirmButtonText:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_BUTTON_TEXT,content:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT,onCancel:this.$3,onConfirm:this.$2,shown:!0,title:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_DIALOG_TITLE}));return i.jsxs("div",{className:"_3e-y",children:[i.jsx(b("ScrollableArea.react"),{height:j,children:this.state.prompts.map(function(c){return i.jsxs(b("FlexLayout.react"),{align:"center",className:"_4d8w _2ph_",justify:"all",children:[i.jsxs(b("FlexLayout.react"),{align:"center",children:[i.jsx(b("TextWithEmoticons.react"),{size:20,text:c.emoji}),i.jsx(b("Text.react"),{className:"_4d8x _3-9a",children:c.title})]}),a.state.isDisabling&&a.state.selectedPrompt===c?i.jsx(b("XUISpinner.react"),{className:"_3-8_"}):i.jsx(b("ShimButton.react"),{className:"_1oeo",onClick:a.$4.bind(a,c),children:i.jsx(b("Image.react"),{src:g("493879")})})]},c.id)})}),c]})};return c}(i.Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorActionBar.react",["ix","cx","FlexLayout.react","Image.react","ProfileFunFactsStrings","React","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function j(a){var c=a.entryPoint==="collection"||a.entryPoint==="permalink";return i.jsx(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),disabled:a.backButtonDisabled||a.disabled,image:i.jsx(b("Image.react"),{src:a.hasBackgroundStyle?g("533029"):g("513239")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_BACK_BUTTON,labelIsHidden:c,onClick:a.onUndo,size:"large"})}function k(a){var c=a.entryPoint==="collection"||a.entryPoint==="permalink";return i.jsx(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),"data-testid":void 0,disabled:a.disabled,imageRight:i.jsx(b("Image.react"),{src:a.hasBackgroundStyle?g("514459"):g("408315")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_NEXT_BUTTON,labelIsHidden:c,onClick:a.onRandomize,size:"large"})}function l(a){return i.jsx(b("XUIButton.react"),{className:"_4ysf","data-testid":void 0,disabled:a.disabled,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_QUESTION_SHORT,onClick:a.onSelect,size:"large",use:"confirm"})}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.hasBackgroundStyle;return i.jsxs(b("FlexLayout.react"),{className:(a?"_1c72":"")+" _2ph_",justify:"all",children:[i.jsx(j,babelHelpers["extends"]({},this.props)),i.jsx(l,babelHelpers["extends"]({},this.props)),i.jsx(k,babelHelpers["extends"]({},this.props))]})};return c}(i.Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorBody.react",["cx","FlexLayout.react","React","ShimButton.react","TextWithEmoticons.react","XUISpinner.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function i(a){var c=a.prompt;a=a.onSelect;return h.jsx("div",{className:c.backgroundStyle?"_3ljc":"",children:h.jsx(b("ShimButton.react"),{className:"_3dlu",onClick:a,children:h.jsxs("div",{children:[h.jsx(b("TextWithEmoticons.react"),{size:32,text:c.emoji},"emoji"),h.jsx(b("XUIText.react"),{className:"_3gi9 _3-8y",display:"block",size:"header1",children:c.title}),c.isCrowdsourced?h.jsx(b("XUIText.react"),{className:"_68km _3-8w",display:"block",children:c.attribution}):null]})})})}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.prompt;a=a.onSelect;return h.jsx(b("FlexLayout.react"),{align:c?"stretch":"center",className:"_3gia",direction:"vertical",justify:"center",children:c?h.jsx(i,{onSelect:a,prompt:c}):h.jsx(b("XUISpinner.react"),{size:"large"})})};return c}(h.Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorHeader.react",["ix","cx","CurrentUser","FacebookAppIDs","FlexLayout.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsStrings","React","ShimButton.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function j(a){a=a.prompt;if(a.isQuestionOfTheDay!==!0)return null;a=a.backgroundStyle?g("489589"):g("507318");return i.jsxs(b("FlexLayout.react"),{align:"center",justify:"center",children:[i.jsx(b("Image.react"),{className:"_2d1b",src:a}),i.jsx(b("XUIText.react"),{className:"_2d1c _3-8s",weight:"bold",children:b("ProfileFunFactsStrings").QUESTION_OF_THE_DAY_LABEL}),i.jsx(b("Image.react"),{className:"_68g4",src:a})]})}function k(a){a=a.prompt.timeRemaining;return a==null?null:i.jsx(b("FlexLayout.react"),{justify:"center",children:i.jsx(b("XUIText.react"),{className:"_68g6",children:a})})}function l(a){var c,d=a.prompt,e=a.entryPoint,f=d.socialProof;if(!f)return null;var g=function(){var c=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(a.isGroup===!0?"group":"unknown").setEngagementType("tap").setItemType("social_proof").setEventMetadata({entry_point:e,prompt_id:d.id,is_qotd:d.isQuestionOfTheDay===!0?"true":"false"}).setAppID(b("FacebookAppIDs").WWW),g=null;f.friendsAnswersFeedURI!=null?(c.setItemSubtype("friends_answers_feed"),g=f.friendsAnswersFeedURI):f.answerPermalinkURI!=null?(c.setItemSubtype("permalink"),g=f.answerPermalinkURI):c.setItemSubtype("text");c.log();g!==null&&window.open(g)};c=(c=f.friendsAnswersFeedURI)!=null?c:f.answerPermalinkURI;return i.jsx(b("ShimButton.react"),{className:"_68g8"+(c?" _4wzw":""),onClick:g,children:i.jsx(b("FlexLayout.react"),{align:"start",className:"_2pin _2pit",direction:"vertical",children:f.label})})}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=!!this.props.prompt.backgroundStyle;return i.jsxs("div",{className:(a?"_2eqj":"")+" _3-8n",children:[i.jsx(j,babelHelpers["extends"]({},this.props)),i.jsx(k,babelHelpers["extends"]({},this.props)),i.jsx(l,babelHelpers["extends"]({},this.props))]})};return b}(i.Component);e.exports=a}),null);
__d("XProfileFunFactsSinglePromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/single_prompt/fetch/",{cursor:{type:"String"},entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},fun_fact_prompt_types:{type:"EnumVector",defaultValue:[],enumType:{member:1}},fetch_amount:{type:"Int"},pinned_prompt_id:{type:"FBID"},random_seed:{type:"Int"}})}),null);
__d("FunFactSinglePromptSelector.react",["cx","AsyncRequest","CurrentUser","FacebookAppIDs","FlexLayout.react","FunFactSinglePromptSelectorActionBar.react","FunFactSinglePromptSelectorBody.react","FunFactSinglePromptSelectorHeader.react","ProfileEngagementTypedLogger","Random","React","XProfileFunFactsSinglePromptFetchController"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=10;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={cursor:null,isLoading:!0,prompts:[],selectedIndex:-1},d.$1=b("Random").uint32(),d.$2=null,d.$5=function(){var a=d.state.selectedIndex;a<d.state.prompts.length-1?d.setState({selectedIndex:a+1}):d.state.cursor!=null?d.$3():d.setState({selectedIndex:0});d.$4("refresh",d.state.prompts[a])},d.$6=function(){var a=d.state.selectedIndex;if(a<=0)return;d.setState({selectedIndex:a-1});d.$4("undo",d.state.prompts[a])},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$3(this.props.pinnedPromptID)};d.componentWillUnmount=function(){this.$2&&this.$2.abandon()};d.componentDidUpdate=function(a,b){this.state.selectedIndex!==b.selectedIndex&&this.$4("impression",this.state.prompts[this.state.selectedIndex])};d.$4=function(a,c){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup===!0?"group":"unknown").setEngagementType(a).setItemType("question_prompt").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay===!0?"true":"false"}).setAppID(b("FacebookAppIDs").WWW).log()};d.$7=function(a){this.props.onSelect(this.state.prompts[this.state.selectedIndex],a),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup===!0?"group":"unknown").setEngagementType("exit").setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,tap_target:"add_content"}).setAppID(b("FacebookAppIDs").WWW).log()};d.$3=function(a){var c=this,d=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setInt("fetch_amount",i).setInt("random_seed",this.$1);a!=null&&d.setFBID("pinned_prompt_id",a.toString());this.state.cursor!=null&&d.setString("cursor",this.state.cursor);this.setState({isLoading:!0});this.$2=new(b("AsyncRequest"))(d.getURI()).setHandler(function(a){a=a.getPayload();var b=c.state.selectedIndex+1,d=c.state.prompts.concat(a.prompts);c.setState({cursor:a.cursor,isLoading:!1,prompts:d,selectedIndex:b})});this.$2.send()};d.$8=function(){return this.state.isLoading&&this.state.selectedIndex<0?null:this.state.prompts[this.state.selectedIndex].backgroundStyle};d.render=function(){var a=this.state.isLoading?null:this.state.prompts[this.state.selectedIndex],c=h.jsx("div",{});a!==null&&(c=h.jsx(b("FunFactSinglePromptSelectorHeader.react"),{entryPoint:this.props.entryPoint,isGroup:this.props.isGroup,prompt:a}));return h.jsxs(b("FlexLayout.react"),{align:"stretch",className:"_2nz1",direction:"vertical",justify:"all",style:this.$8()||void 0,children:[c,h.jsx(b("FunFactSinglePromptSelectorBody.react"),{onSelect:this.$7.bind(this,"card"),prompt:a}),h.jsx(b("FunFactSinglePromptSelectorActionBar.react"),{backButtonDisabled:this.state.selectedIndex===0,disabled:this.state.isLoading,entryPoint:this.props.entryPoint,hasBackgroundStyle:!!this.$8(),onRandomize:this.$5,onSelect:this.$7.bind(this,"add_answer_footer"),onUndo:this.$6})]})};return c}(h.Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorContainer.react",["cx","AsyncRequest","FunFactSinglePromptSelector.react","React","XProfileFunFactsSelectorController"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",d.props.entryPoint).setFBID("pinned_prompt_id",a.id.toString()).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))().setURI(a).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return h.jsx("div",{className:"_64nu",children:h.jsx(b("FunFactSinglePromptSelector.react"),{entryPoint:this.props.entryPoint,onSelect:this.$1,pinnedPromptID:this.props.pinnedPromptID})})};return c}(h.Component);e.exports=a}),null);