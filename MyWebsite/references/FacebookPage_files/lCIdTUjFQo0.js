if (self.CavalryLogger) { CavalryLogger.start_js(["teAvI"]); }

__d("StoriesConstants",[],(function(a,b,c,d,e,f){"use strict";a={CARD:{DEFAULT_SUSPENSE_CARD_INDEX:-1},NUMBER_OF_BUCKETS_TO_PREFETCH:2,NavList:{BANNER_HEIGHT:42,BOTTOM_MARGIN:25,CONNECTION_NAME:"useStoriesViewerBuckets_unified_stories_buckets",COUNT_PER_PAGINATION_FETCH:9},RATING_STICKER:{MAX_RATING:5,PADDING_SPACE_PORTION:.04,STAR_ICON_SIZE:32,STAR_INLINE_PORTION:.55},RELAY_FETCH_POLICY:{NETWORK_ONLY:"network-only",STORE_OR_NETWORK:"store-or-network"},TIMEOUT_FOR_SERVER_TO_FINISH_WORK:3e3,TRANSITION_DURATION_MS:300,ViewerSheetViewerList:{COUNT_PER_PAGINATION_FETCH:10,MAX_REACTIONS_PER_VIEWER:5}};e.exports=a}),null);
__d("EmojiInputDecorator",["EmojiRenderer","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List,h=".",i="emoji";a=function(){function a(a,b,c){this.__installedDecorators={emojiDecorator:!0},this.$1=a,this.$2=b,this.$3=c,b&&Object.assign(this.__installedDecorators,b.__installedDecorators)}var c=a.prototype;c.getDecorations=function(a,c){var d=this.$2?this.$2.getDecorations(a,c).toArray():Array(a.getText().length).fill(null),e=0;b("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.offset;a=b+a.length;var c=!0;for(var f=b;f<a;f++)if(d[f]!=null){c=!1;break}if(c){for(var f=b;f<a;f++)d[f]=i+h+e;e++}});return g(d)};c.getComponentForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$1:this.$2.getComponentForKey(a)};c.getPropsForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$3:this.$2.getPropsForKey(a)};return a}();e.exports=a}),null);
__d("EmojiSpan.react",["cx","FBEmojiResource","React","UnicodeUtils"],(function(a,b,c,d,e,f,g){var h,i=b("React");function a(a){var c=a.children;a.contentState;var d=a.decoratedText,e=a.dir,f=a.offsetKey;a=a.size;var g=0,j=d.length,k=[];while(g<j){var l=(h||(h=b("UnicodeUtils"))).getUTF16Length(d,g);k.push(d.substr(g,l));g+=l}l=b("FBEmojiResource").fromCodepoints(k);g=l!=null?l.getImageURL(a):null;return g!=null?i.jsx("span",{className:"_3gl1 _5zz4","data-offset-key":f,dir:e,style:{backgroundImage:"url("+g+")",backgroundSize:a+"px "+a+"px",height:a,width:a},children:i.jsx("span",{className:"_ncl",children:c})}):i.jsx("span",{"data-offset-key":f,children:d})}e.exports=a}),null);
__d("ContentStateInlineStyle",["CharacterMetadata","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").Map;a={add:function(a,b,c){return h(a,b,c,!0)},remove:function(a,b,c){return h(a,b,c,!1)}};function h(a,c,d,e){var f=a.getBlockMap(),h=c.getStartKey(),i=c.getStartOffset(),j=c.getEndKey(),k=c.getEndOffset(),l=f.skipUntil(function(a,b){return b===h}).takeUntil(function(a,b){return b===j}).concat(g([[j,f.get(j)]])).map(function(a,c){var f,g;h===j?(f=i,g=k):(f=c===h?i:0,g=c===j?k:a.getLength());c=a.getCharacterList();var l;while(f<g)l=c.get(f),c=c.set(f,e?b("CharacterMetadata").applyStyle(l,d):b("CharacterMetadata").removeStyle(l,d)),f++;return a.set("characterList",c)});return a.merge({blockMap:f.merge(l),selectionBefore:c,selectionAfter:c})}e.exports=a}),null);
__d("applyEntityToContentBlock",["CharacterMetadata"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){c=c;var f=a.getCharacterList();while(c<d)f=f.set(c,b("CharacterMetadata").applyEntity(f.get(c),e)),c++;return a.set("characterList",f)}e.exports=a}),null);
__d("applyEntityToContentState",["applyEntityToContentBlock","immutable"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e=a.getBlockMap(),f=c.getStartKey(),g=c.getStartOffset(),h=c.getEndKey(),i=c.getEndOffset(),j=e.skipUntil(function(a,b){return b===f}).takeUntil(function(a,b){return b===h}).toOrderedMap().merge(b("immutable").OrderedMap([[h,e.get(h)]])).map(function(a,c){var e=c===f?g:0;c=c===h?i:a.getLength();return b("applyEntityToContentBlock")(a,e,c,d)});return a.merge({blockMap:e.merge(j),selectionBefore:c,selectionAfter:c})}e.exports=a}),null);
__d("DraftEntitySegments",[],(function(a,b,c,d,e,f){"use strict";a={getRemovalRange:function(a,b,c,d,e){var f=c.split(" ");f=f.map(function(a,b){if(e==="forward"){if(b>0)return" "+a}else if(b<f.length-1)return a+" ";return a});var g=d,h,i=null,j=null;for(var k=0;k<f.length;k++){h=f[k];h=g+h.length;if(a<h&&g<b)i!==null?j=h:(i=g,j=h);else if(i!==null)break;g=h}h=d+c.length;k=i===d;g=j===h;(!k&&g||k&&!g)&&(e==="forward"?j!==h&&j++:i!==d&&i--);return{start:i,end:j}}};e.exports=a}),null);
__d("getRangesForDraftEntity",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var c=[];a.findEntityRanges(function(a){return a.getEntity()===b},function(a,b){c.push({start:a,end:b})});!c.length&&g(0,1817);return c}e.exports=a}),null);
__d("getCharacterRemovalRange",["invariant","DraftEntitySegments","getRangesForDraftEntity"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e){var f=d.getStartOffset(),g=d.getEndOffset();f=b.getEntityAt(f);g=c.getEntityAt(g-1);if(!f&&!g)return d;d=d;if(f&&f===g)d=h(a,b,d,e,f,!0,!0);else if(f&&g){var i=h(a,b,d,e,f,!1,!0),j=h(a,c,d,e,g,!1,!1);d=d.merge({anchorOffset:i.getAnchorOffset(),focusOffset:j.getFocusOffset(),isBackward:!1})}else if(f){i=h(a,b,d,e,f,!1,!0);d=d.merge({anchorOffset:i.getStartOffset(),isBackward:!1})}else if(g){j=h(a,c,d,e,g,!1,!1);d=d.merge({focusOffset:j.getEndOffset(),isBackward:!1})}return d}function h(a,c,d,e,f,h,i){var j=d.getStartOffset(),k=d.getEndOffset();a=a.__get(f);a=a.getMutability();var l=i?j:k;if(a==="MUTABLE")return d;f=b("getRangesForDraftEntity")(c,f).filter(function(a){return l<=a.end&&l>=a.start});f.length==1||g(0,5779);f=f[0];if(a==="IMMUTABLE")return d.merge({anchorOffset:f.start,focusOffset:f.end,isBackward:!1});h||(i?k=f.end:j=f.start);a=b("DraftEntitySegments").getRemovalRange(j,k,c.getText().slice(f.start,f.end),f.start,e);return d.merge({anchorOffset:a.start,focusOffset:a.end,isBackward:!1})}e.exports=a}),null);
__d("randomizeBlockMapKeys",["ContentBlockNode","generateRandomKey","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").OrderedMap,h=function(a){var c={},d;return g(a.withMutations(function(a){a.forEach(function(e,f){var g=e.getKey();f=e.getNextSiblingKey();var h=e.getPrevSiblingKey(),i=e.getChildKeys(),j=e.getParentKey(),k=b("generateRandomKey")();c[g]=k;if(f){var l=a.get(f);l?a.setIn([f,"prevSibling"],k):a.setIn([g,"nextSibling"],null)}if(h){l=a.get(h);l?a.setIn([h,"nextSibling"],k):a.setIn([g,"prevSibling"],null)}if(j&&a.get(j)){f=a.get(j);l=f.getChildKeys();a.setIn([j,"children"],l.set(l.indexOf(e.getKey()),k))}else a.setIn([g,"parent"],null),d&&(a.setIn([d.getKey(),"nextSibling"],k),a.setIn([g,"prevSibling"],c[d.getKey()])),d=a.get(g);i.forEach(function(b){var c=a.get(b);c?a.setIn([b,"parent"],k):a.setIn([g,"children"],e.getChildKeys().filter(function(a){return a!==b}))})})}).toArray().map(function(a){return[c[a.getKey()],a.set("key",c[a.getKey()])]}))},i=function(a){return g(a.toArray().map(function(a){var c=b("generateRandomKey")();return[c,a.set("key",c)]}))};a=function(a){var c=a.first()instanceof b("ContentBlockNode");return!c?i(a):h(a)};e.exports=a}),null);
__d("removeEntitiesAtEdges",["invariant","CharacterMetadata","findRangesImmutable"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var c=a.getBlockMap(),d=a.getEntityMap(),e={},f=b.getStartKey(),g=b.getStartOffset(),h=c.get(f);g=i(d,h,g);g!==h&&(e[f]=g);h=b.getEndKey();var j=b.getEndOffset(),k=c.get(h);f===h&&(k=g);f=i(d,k,j);f!==k&&(e[h]=f);return!Object.keys(e).length?a.set("selectionAfter",b):a.merge({blockMap:c.merge(e),selectionAfter:b})}function h(a,c,d){var e;b("findRangesImmutable")(a,function(a,b){return a.getEntity()===b.getEntity()},function(a){return a.getEntity()===c},function(a,b){a<=d&&b>=d&&(e={start:a,end:b})});typeof e==="object"||g(0,6015);return e}function i(a,c,d){var e=c.getCharacterList(),f=d>0?e.get(d-1):void 0,g=d<e.count()?e.get(d):void 0;f=f?f.getEntity():void 0;g=g?g.getEntity():void 0;if(g&&g===f){f=a.__get(g);if(f.getMutability()!=="MUTABLE"){a=h(e,g,d);f=a.start;g=a.end;while(f<g)d=e.get(f),e=e.set(f,b("CharacterMetadata").applyEntity(d,null)),f++;return c.set("characterList",e)}}return c}e.exports=a}),null);
__d("getContentStateFragment",["randomizeBlockMapKeys","removeEntitiesAtEdges"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){var d=c.getStartKey(),e=c.getStartOffset(),f=c.getEndKey(),g=c.getEndOffset();a=b("removeEntitiesAtEdges")(a,c);c=a.getBlockMap();a=c.keySeq();var h=a.indexOf(d);a=a.indexOf(f)+1;return b("randomizeBlockMapKeys")(c.slice(h,a).map(function(a,b){var c=a.getText(),h=a.getCharacterList();if(d===f)return a.merge({text:c.slice(e,g),characterList:h.slice(e,g)});if(b===d)return a.merge({text:c.slice(e),characterList:h.slice(e)});return b===f?a.merge({text:c.slice(0,g),characterList:h.slice(0,g)}):a}))};e.exports=a}),null);
__d("insertIntoList",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=a;if(c===d.count())b.forEach(function(a){d=d.push(a)});else if(c===0)b.reverse().forEach(function(a){d=d.unshift(a)});else{a=d.slice(0,c);c=d.slice(c);d=a.concat(b,c).toList()}return d}e.exports=a}),null);
__d("insertFragmentIntoContentState",["invariant","BlockMapBuilder","ContentBlockNode","immutable","insertIntoList","randomizeBlockMapKeys"],(function(a,b,c,d,e,f,g){"use strict";var h=b("immutable").List,i=function(a,c,d,e,f,g,h){h===void 0&&(h="REPLACE_WITH_NEW_DATA");var i=d.get(f),j=i.getText(),k=i.getCharacterList(),l=f,m=g+e.getText().length,n=null;switch(h){case"MERGE_OLD_DATA_TO_NEW_DATA":n=e.getData().merge(i.getData());break;case"REPLACE_WITH_NEW_DATA":n=e.getData();break}h=i.getType();j&&h==="unstyled"&&(h=e.getType());i=i.merge({text:j.slice(0,g)+e.getText()+j.slice(g),characterList:b("insertIntoList")(k,e.getCharacterList(),g),type:h,data:n});return a.merge({blockMap:d.set(f,i),selectionBefore:c,selectionAfter:c.merge({anchorKey:l,anchorOffset:m,focusKey:l,focusOffset:m,isBackward:!1})})},j=function(a,b,c){var d=a.getText(),e=a.getCharacterList();d=d.slice(0,b);e=e.slice(0,b);b=c.first();return a.merge({text:d+b.getText(),characterList:e.concat(b.getCharacterList()),type:d?a.getType():b.getType(),data:b.getData()})},k=function(a,b,c){var d=a.getText();a=a.getCharacterList();var e=d.length;d=d.slice(b,e);a=a.slice(b,e);b=c.last();return b.merge({text:b.getText()+d,characterList:b.getCharacterList().concat(a),data:b.getData()})},l=function(a,b){var c=a.getKey();a=a;var d=[];b.get(c)&&d.push(c);while(a&&a.getNextSiblingKey()){c=a.getNextSiblingKey();if(!c)break;d.push(c);a=b.get(c)}return d},m=function(a,b,c,d){return a.withMutations(function(b){var e=c.getKey(),f=d.getKey(),g=c.getNextSiblingKey(),i=c.getParentKey(),j=l(d,a),k=j[j.length-1];b.get(f)?(b.setIn([e,"nextSibling"],f),b.setIn([f,"prevSibling"],e)):(b.setIn([e,"nextSibling"],d.getNextSiblingKey()),b.setIn([d.getNextSiblingKey(),"prevSibling"],e));b.setIn([k,"nextSibling"],g);g&&b.setIn([g,"prevSibling"],k);j.forEach(function(a){return b.setIn([a,"parent"],i)});if(i){f=a.get(i);g=f.getChildKeys();k=g.indexOf(e);f=k+1;e=g.toArray();e.splice.apply(e,[f,0].concat(j));b.setIn([i,"children"],h(e))}})},n=function(a,c,d,e,f,g){var h=d.first()instanceof b("ContentBlockNode"),i=[],l=e.size,n=d.get(f),o=e.first(),p=e.last(),q=p.getLength();p=p.getKey();var r=h&&(!n.getChildKeys().isEmpty()||!o.getChildKeys().isEmpty());d.forEach(function(a,b){if(b!==f){i.push(a);return}r?i.push(a):i.push(j(a,g,e));e.slice(r?0:1,l-1).forEach(function(a){return i.push(a)});i.push(k(a,g,e))});var s=b("BlockMapBuilder").createFromArray(i);h&&(s=m(s,d,n,o));return a.merge({blockMap:s,selectionBefore:c,selectionAfter:c.merge({anchorKey:p,anchorOffset:q,focusKey:p,focusOffset:q,isBackward:!1})})};a=function(a,c,d,e){e===void 0&&(e="REPLACE_WITH_NEW_DATA");c.isCollapsed()||g(0,1903);var f=a.getBlockMap();d=b("randomizeBlockMapKeys")(d);var h=c.getStartKey(),j=c.getStartOffset(),k=f.get(h);k instanceof b("ContentBlockNode")&&(k.getChildKeys().isEmpty()||g(0,1904));return d.size===1?i(a,c,f,d.first(),h,j,e):n(a,c,f,d,h,j)};e.exports=a}),null);
__d("insertTextIntoContentState",["invariant","immutable","insertIntoList"],(function(a,b,c,d,e,f,g){"use strict";var h=b("immutable").Repeat;function a(a,c,d,e){c.isCollapsed()||g(0,2659);var f=null;d!=null&&(f=d.length);if(f==null||f===0)return a;var i=a.getBlockMap(),j=c.getStartKey(),k=c.getStartOffset(),l=i.get(j),m=l.getText();d=l.merge({text:m.slice(0,k)+d+m.slice(k,l.getLength()),characterList:b("insertIntoList")(l.getCharacterList(),h(e,f).toList(),k)});m=k+f;return a.merge({blockMap:i.set(j,d),selectionAfter:c.merge({anchorOffset:m,focusOffset:m})})}e.exports=a}),null);
__d("modifyBlockForContentState",["immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").Map;function a(a,b,c){var d=b.getStartKey(),e=b.getEndKey(),f=a.getBlockMap();c=f.toSeq().skipUntil(function(a,b){return b===d}).takeUntil(function(a,b){return b===e}).concat(g([[e,f.get(e)]])).map(c);return a.merge({blockMap:f.merge(c),selectionBefore:b,selectionAfter:b})}e.exports=a}),null);
__d("getNextDelimiterBlockKey",["ContentBlockNode"],(function(a,b,c,d,e,f){a=function(a,c){var d=a instanceof b("ContentBlockNode");if(!d)return null;d=a.getNextSiblingKey();if(d)return d;d=a.getParentKey();if(!d)return null;a=c.get(d);while(a&&!a.getNextSiblingKey()){d=a.getParentKey();a=d?c.get(d):null}return!a?null:a.getNextSiblingKey()};e.exports=a}),null);
__d("removeRangeFromContentState",["ContentBlockNode","getNextDelimiterBlockKey","immutable"],(function(a,b,c,d,e,f){"use strict";b("immutable").List;var g=b("immutable").Map,h=function(a,b,c){if(!a)return;var d=b.get(a);if(!d)return;b.set(a,c(d))},i=function(a,b){var c=[];if(!a)return c;a=b.get(a);while(a&&a.getParentKey()){var d=a.getParentKey();d&&c.push(d);a=d?b.get(d):null}return c},j=function(a,c){var d=[];if(!a)return d;a=b("getNextDelimiterBlockKey")(a,c);while(a&&c.get(a)){var e=c.get(a);d.push(a);a=e.getParentKey()?b("getNextDelimiterBlockKey")(e,c):null}return d},k=function(a,b,c){if(!a)return null;a=c.get(a.getKey()).getNextSiblingKey();while(a&&!b.get(a))a=c.get(a).getNextSiblingKey()||null;return a},l=function(a,b,c){if(!a)return null;a=c.get(a.getKey()).getPrevSiblingKey();while(a&&!b.get(a))a=c.get(a).getPrevSiblingKey()||null;return a},m=function(a,b,c,d){return a.withMutations(function(e){h(b.getKey(),e,function(a){return a.merge({nextSibling:k(a,e,d),prevSibling:l(a,e,d)})});h(c.getKey(),e,function(a){return a.merge({nextSibling:k(a,e,d),prevSibling:l(a,e,d)})});i(b.getKey(),d).forEach(function(a){return h(a,e,function(a){return a.merge({children:a.getChildKeys().filter(function(a){return e.get(a)}),nextSibling:k(a,e,d),prevSibling:l(a,e,d)})})});h(b.getNextSiblingKey(),e,function(a){return a.merge({prevSibling:b.getPrevSiblingKey()})});h(b.getPrevSiblingKey(),e,function(a){return a.merge({nextSibling:k(a,e,d)})});h(c.getNextSiblingKey(),e,function(a){return a.merge({prevSibling:l(a,e,d)})});h(c.getPrevSiblingKey(),e,function(a){return a.merge({nextSibling:c.getNextSiblingKey()})});i(c.getKey(),d).forEach(function(a){h(a,e,function(a){return a.merge({children:a.getChildKeys().filter(function(a){return e.get(a)}),nextSibling:k(a,e,d),prevSibling:l(a,e,d)})})});j(c,d).forEach(function(a){return h(a,e,function(a){return a.merge({nextSibling:k(a,e,d),prevSibling:l(a,e,d)})})});if(a.get(b.getKey())==null&&a.get(c.getKey())!=null&&c.getParentKey()===b.getKey()&&c.getPrevSiblingKey()==null){var f=b.getPrevSiblingKey();h(c.getKey(),e,function(a){return a.merge({prevSibling:f})});h(f,e,function(a){return a.merge({nextSibling:c.getKey()})});var g=f?a.get(f):null,m=g?g.getParentKey():null;b.getChildKeys().forEach(function(a){h(a,e,function(a){return a.merge({parent:m})})});if(m!=null){var n=a.get(m);h(m,e,function(a){return a.merge({children:n.getChildKeys().concat(b.getChildKeys())})})}h(b.getChildKeys().find(function(b){b=a.get(b);return b.getNextSiblingKey()===null}),e,function(a){return a.merge({nextSibling:b.getNextSiblingKey()})})}})};a=function(a,c){if(c.isCollapsed())return a;var d=a.getBlockMap(),e=c.getStartKey(),f=c.getStartOffset(),h=c.getEndKey(),j=c.getEndOffset(),k=d.get(e),l=d.get(h),o=k instanceof b("ContentBlockNode"),p=[];if(o){var q=l.getChildKeys(),r=i(h,d);l.getNextSiblingKey()&&(p=p.concat(r));q.isEmpty()||(p=p.concat(r.concat([h])));p=p.concat(i(b("getNextDelimiterBlockKey")(l,d),d))}k===l?q=n(k.getCharacterList(),f,j):q=k.getCharacterList().slice(0,f).concat(l.getCharacterList().slice(j));var s=k.merge({text:k.getText().slice(0,f)+l.getText().slice(j),characterList:q});r=o&&f===0&&j===0&&l.getParentKey()===e&&l.getPrevSiblingKey()==null;q=r?g([[e,null]]):d.toSeq().skipUntil(function(a,b){return b===e}).takeUntil(function(a,b){return b===h}).filter(function(a,b){return p.indexOf(b)===-1}).concat(g([[h,null]])).map(function(a,b){return b===e?s:null});j=d.merge(q).filter(function(a){return!!a});o&&k!==l&&(j=m(j,k,l,d));return a.merge({blockMap:j,selectionBefore:c,selectionAfter:c.merge({anchorKey:e,anchorOffset:f,focusKey:e,focusOffset:f,isBackward:!1})})};var n=function(a,b,c){if(b===0)while(b<c)a=a.shift(),b++;else if(c===a.count())while(c>b)a=a.pop(),c--;else{b=a.slice(0,b);c=a.slice(c);a=b.concat(c).toList()}return a};e.exports=a}),null);
__d("splitBlockInContentState",["invariant","ContentBlockNode","generateRandomKey","immutable","modifyBlockForContentState"],(function(a,b,c,d,e,f,g){"use strict";var h=b("immutable").List,i=b("immutable").Map,j=function(a,b,c){if(!a)return;var d=b.get(a);if(!d)return;b.set(a,c(d))},k=function(a,b,c){return a.withMutations(function(a){var d=b.getKey(),e=c.getKey();j(b.getParentKey(),a,function(a){var b=a.getChildKeys(),c=b.indexOf(d)+1;b=b.toArray();b.splice(c,0,e);return a.merge({children:h(b)})});j(b.getNextSiblingKey(),a,function(a){return a.merge({prevSibling:e})});j(d,a,function(a){return a.merge({nextSibling:e})});j(e,a,function(a){return a.merge({prevSibling:d})})})};a=function(a,c){c.isCollapsed()||g(0,5004);var d=c.getAnchorKey(),e=a.getBlockMap(),f=e.get(d),h=f.getText();if(!h){var j=f.getType();if(j==="unordered-list-item"||j==="ordered-list-item")return b("modifyBlockForContentState")(a,c,function(a){return a.merge({type:"unstyled",depth:0})})}j=c.getAnchorOffset();var l=f.getCharacterList(),m=b("generateRandomKey")(),n=f instanceof b("ContentBlockNode"),o=f.merge({text:h.slice(0,j),characterList:l.slice(0,j)});h=o.merge({key:m,text:h.slice(j),characterList:l.slice(j),data:i()});l=e.toSeq().takeUntil(function(a){return a===f});j=e.toSeq().skipUntil(function(a){return a===f}).rest();e=l.concat([[d,o],[m,h]],j).toOrderedMap();n&&(f.getChildKeys().isEmpty()||g(0,5005),e=k(e,o,h));return a.merge({blockMap:e,selectionBefore:c,selectionAfter:c.merge({anchorKey:m,anchorOffset:0,focusKey:m,focusOffset:0,isBackward:!1})})};e.exports=a}),null);
__d("DraftModifier",["invariant","CharacterMetadata","ContentStateInlineStyle","applyEntityToContentState","getCharacterRemovalRange","getContentStateFragment","immutable","insertFragmentIntoContentState","insertTextIntoContentState","modifyBlockForContentState","removeEntitiesAtEdges","removeRangeFromContentState","splitBlockInContentState"],(function(a,b,c,d,e,f,g){"use strict";var h=b("immutable").OrderedSet,i={replaceText:function(a,c,d,e,f){a=b("removeEntitiesAtEdges")(a,c);a=b("removeRangeFromContentState")(a,c);c=b("CharacterMetadata").create({style:e||h(),entity:f||null});return b("insertTextIntoContentState")(a,a.getSelectionAfter(),d,c)},insertText:function(a,b,c,d,e){b.isCollapsed()||g(0,4661);return i.replaceText(a,b,c,d,e)},moveText:function(a,c,d){var e=b("getContentStateFragment")(a,c);a=i.removeRange(a,c,"backward");return i.replaceWithFragment(a,d,e)},replaceWithFragment:function(a,c,d,e){e===void 0&&(e="REPLACE_WITH_NEW_DATA");a=b("removeEntitiesAtEdges")(a,c);a=b("removeRangeFromContentState")(a,c);return b("insertFragmentIntoContentState")(a,a.getSelectionAfter(),d,e)},removeRange:function(a,c,d){var e,f,g,h;c.getIsBackward()&&(c=c.merge({anchorKey:c.getFocusKey(),anchorOffset:c.getFocusOffset(),focusKey:c.getAnchorKey(),focusOffset:c.getAnchorOffset(),isBackward:!1}));e=c.getAnchorKey();f=c.getFocusKey();g=a.getBlockForKey(e);h=a.getBlockForKey(f);var i=c.getStartOffset(),j=c.getEndOffset();i=g.getEntityAt(i);j=h.getEntityAt(j-1);if(e===f&&(i&&i===j)){e=b("getCharacterRemovalRange")(a.getEntityMap(),g,h,c,d);return b("removeRangeFromContentState")(a,e)}f=b("removeEntitiesAtEdges")(a,c);return b("removeRangeFromContentState")(f,c)},splitBlock:function(a,c){a=b("removeEntitiesAtEdges")(a,c);a=b("removeRangeFromContentState")(a,c);return b("splitBlockInContentState")(a,a.getSelectionAfter())},applyInlineStyle:function(a,c,d){return b("ContentStateInlineStyle").add(a,c,d)},removeInlineStyle:function(a,c,d){return b("ContentStateInlineStyle").remove(a,c,d)},setBlockType:function(a,c,d){return b("modifyBlockForContentState")(a,c,function(a){return a.merge({type:d,depth:0})})},setBlockData:function(a,c,d){return b("modifyBlockForContentState")(a,c,function(a){return a.merge({data:d})})},mergeBlockData:function(a,c,d){return b("modifyBlockForContentState")(a,c,function(a){return a.merge({data:a.getData().merge(d)})})},applyEntity:function(a,c,d){a=b("removeEntitiesAtEdges")(a,c);return b("applyEntityToContentState")(a,c,d)}};e.exports=i}),null);
__d("keyCommandBackspaceEmoji",["EditorState","EmojiRenderer","UnicodeUtils","moveSelectionBackward","removeTextWithStrategy"],(function(a,b,c,d,e,f){var g;a=function(a){var c=b("removeTextWithStrategy")(a,function(c){var a=c.getSelection(),d=a.getAnchorOffset();a=c.getCurrentContent().getBlockForKey(a.getAnchorKey()).getText();var e=a[d-1],f=null;if(e){a=b("EmojiRenderer").parse(a);for(var h=0;h<a.length;h++)if(a[h].offset<d&&a[h].offset+a[h].length>=d){f=a[h].length;break}f==null&&(f=(g||(g=b("UnicodeUtils"))).getUTF16Length(e,0))}return b("moveSelectionBackward")(c,f!=null?f:1)},"backward");if(c===a.getCurrentContent())return null;var d=a.getSelection();return b("EditorState").push(a,c.set("selectionBefore",d),d.isCollapsed()?"backspace-character":"remove-range")};e.exports=a}),null);
__d("keyCommandDeleteEmoji",["EditorState","EmojiRenderer","UnicodeUtils","moveSelectionForward","removeTextWithStrategy"],(function(a,b,c,d,e,f){var g;a=function(a){var c=b("removeTextWithStrategy")(a,function(c){var a=c.getSelection(),d=a.getAnchorOffset();a=c.getCurrentContent().getBlockForKey(a.getAnchorKey()).getText();var e=a[d],f=null;if(e){a=b("EmojiRenderer").parse(a);for(var h=0;h<a.length;h++)if(a[h].offset<=d&&a[h].offset+a[h].length>d){f=a[h].length;break}f==null&&(f=(g||(g=b("UnicodeUtils"))).getUTF16Length(e,0))}return b("moveSelectionForward")(c,f!=null?f:1)},"forward");if(c===a.getCurrentContent())return null;var d=a.getSelection();return b("EditorState").push(a,c.set("selectionBefore",d),d.isCollapsed()?"delete-character":"remove-range")};e.exports=a}),null);
__d("addEmojiInput",["EditorState","EmojiInputDecorator","EmojiSpan.react","React","keyCommandBackspaceEmoji","keyCommandDeleteEmoji"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){return function(c){babelHelpers.inheritsLoose(d,c);function d(){var a,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(a=d=c.call.apply(c,[this].concat(f))||this,d.$1=g.createRef(),d.$2=function(a,c,e){var f=null;switch(a){case"backspace":f=b("keyCommandBackspaceEmoji")(c);break;case"delete":f=b("keyCommandDeleteEmoji")(c);break}if(f){d.props.onChange(f);return"handled"}return d.props.handleKeyCommand?d.props.handleKeyCommand(a,c,e):"not-handled"},a)||babelHelpers.assertThisInitialized(d)}var e=d.prototype;e.blur=function(){var a=this.$1.current;a!=null&&typeof a.blur==="function"&&a.blur()};e.click=function(){var a=this.$1.current;a!=null&&typeof a.click==="function"&&a.click()};e.focus=function(){var a=this.$1.current;a!=null&&typeof a.focus==="function"&&a.focus()};e.render=function(){var c,d=this.props.editorState,e=d.getDecorator();(e==null||((c=e)!=null?(c=c.__installedDecorators)!=null?c.emojiDecorator:c:c)!==!0)&&(d=b("EditorState").set(this.props.editorState,{decorator:new(b("EmojiInputDecorator"))(b("EmojiSpan.react"),e,{size:16})}));return g.jsx(a,babelHelpers["extends"]({},this.props,{editorState:d,handleKeyCommand:this.$2,ref:this.$1}))};return d}(g.Component)};e.exports=a}),null);
__d("addEmojiToEditorState",["DraftModifier","EditorState","FBEmojiUtils","emptyFunction"],(function(a,b,c,d,e,f){"use strict";var g=b("FBEmojiUtils").codepointsToString;function a(a,c,d){d===void 0&&(d=b("emptyFunction"));a=typeof a!=="string"?g(a):a;a=b("DraftModifier").replaceText(c.getCurrentContent(),c.getSelection(),a);a=b("EditorState").push(c,a,"insert-characters");a!==c&&d(a);return a}e.exports=a}),null);
__d("FBStoriesProductionTypes",["immutable"],(function(a,b,c,d,e,f){"use strict";a={CAMERA_ERROR:"CAMERA_ERROR",FILE_SIZE_EXCEED:"FILE_SIZE_EXCEED",LEAVING:"LEAVING"};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({hasImage:void 0,hasMediaStream:void 0,isCameraMediaOpen:void 0,imageSource:void 0,mediaNode:void 0,mediaStream:void 0,privacySettingsCustomParticipants:void 0,privacySettingsMode:void 0,videoSource:void 0}));d={CAMERA_1:"CAMERA_1",CAMERA_2:"CAMERA_2",NULL_STATE:"NULL_STATE",UPLOAD_1:"UPLOAD_1"};f={UNSET:"UNSET",PUBLIC:"PUBLIC",FRIENDS_AND_CONNECTIONS:"FRIENDS_AND_CONNECTIONS",FRIENDS:"FRIENDS",CUSTOM:"CUSTOM"};e.exports={FBStoriesCameraPopupDialogTypes:a,FBStoriesCameraState:c,FBStoriesProductionFlowStageTypes:d,UnifiedStoriesAudienceModeTypes:f}}),null);
__d("AutoFocusableLink.react",["Link.react","ReactDOM"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.autoFocus&&b("ReactDOM").findDOMNode(this).focus()};return c}(b("Link.react"));e.exports=a}),null);
__d("ChatComposerFlyoutButtonBootLoader.react",["AutoFocusableLink.react","JSResource","LazyComponent.react","MercuryBootloadOnInteraction.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){var c=g.jsx(b("MercuryBootloadOnInteraction.react"),{component:g.jsx(b("LazyComponent.react"),babelHelpers["extends"]({},a,{className:a.iconClassName})),loader:b("JSResource")("MessengerComposerFlyoutButton.react").__setRef("ChatComposerFlyoutButtonBootLoader.react"),placeholder:a.renderSVGIcon?g.jsx(b("AutoFocusableLink.react"),{label:"flyout button",className:a.iconClassName,children:a.renderSVGIcon(!1)}):g.jsx(b("AutoFocusableLink.react"),{label:"flyout button",className:a.iconClassName})});return a.excludeTag?c:g.jsxs("li",{className:a.interactionClassName,children:[" ",c," "]})};e.exports=a}),null);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),null);
__d("getVisibleValueForContentStateWithMessengerEmoji",["EmojiFormat.bs","emptyFunction"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.getBlockMap().map(function(c){var d=c.getText(),e="";c.findEntityRanges(b("emptyFunction").thatReturnsTrue,function(f,g){var h=c.getEntityAt(f);if(!h)e+=d.slice(f,g);else{h=a.getEntity(h);if(h.getType()==="EMOTICON")e+=h.getData().originalEmoticon;else if(h.getType()==="EMOJI"){h=h.getData().type;h=b("EmojiFormat.bs").codeStringToCodeArray(h);e+=String.fromCodePoint.apply(String,h)}else e+=d.slice(f,g)}});return e});return c.join("\n")}e.exports=a}),null);
__d("PrivacySelectorNewDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){var g="selector";a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.handleUpdateFromSelector=function(a){this.dispatch(babelHelpers["extends"]({payloadSource:g},a))};return b}(b("Dispatcher_DEPRECATED"));c=new a();e.exports=c}),null);
__d("FBStoriesPrivacyHelper",["fbt","FBStoriesGating","FBStoriesProductionTypes"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FBStoriesProductionTypes").UnifiedStoriesAudienceModeTypes;a={getSelectedAudienceMode:function(a){a=(a=a)!=null?(a=a.unified_stories_setting)!=null?a.audience_mode:a:a;a===h.FRIENDS_AND_CONNECTIONS&&b("FBStoriesGating").isFriendsAndConnectionsOptionDeprecated()&&(a=h.FRIENDS);return a},getEligibleAudienceModesList:function(a){a=((a=a)!=null?(a=a.stories_data)!=null?a.audience_mode_list:a:a)||[];b("FBStoriesGating").isFriendsAndConnectionsOptionDeprecated()&&(a=a.filter(function(a){return a.unified_stories_audience_mode!==h.FRIENDS_AND_CONNECTIONS}));return a},getCustomParticipants:function(a){return((a=a)!=null?(a=a.unified_stories_setting)!=null?(a=a.custom_participants)!=null?a.nodes:a:a:a)||[]},getBlockedParticipants:function(a){return((a=a)!=null?(a=a.unified_stories_setting)!=null?(a=a.blocked_participants)!=null?a.nodes:a:a:a)||[]},getCustomMenuText:function(a){var b=a.length;a=a.map(function(a){return(a=a)!=null?(a=a.actor)!=null?a.name:a:a});switch(b){case 0:return g._("No One can see your story");case 1:return g._("{name_of_friend_connection} can see your story",[g._param("name_of_friend_connection",a[0])]);case 2:return g._("{name_of_first_friend_connection} and {name_of_second_friend_connection} can see your story",[g._param("name_of_first_friend_connection",a[0]),g._param("name_of_second_friend_connection",a[1])]);case 3:return g._("{names_of_first_two_friends_connections} and {name_of_third_friend_connection} can see your story",[g._param("names_of_first_two_friends_connections",a.slice(0,2).join(", ")),g._param("name_of_third_friend_connection",a[2])]);default:return g._({"*":"{names_of_first_three_friends_connections} and {number} others can see your story","_1":"{names_of_first_three_friends_connections} and 1 other can see your story"},[g._param("names_of_first_three_friends_connections",a.slice(0,3).join(", ")),g._plural(b-3,"number")])}}};e.exports=a}),null);
__d("PhotosMimeType",[],(function(a,b,c,d,e,f){var g={isImage:function(a){return h(a)[0]==="image"},isJpeg:function(a){var b=h(a);return g.isImage(a)&&(b[1]==="jpeg"||b[1]==="pjpeg")}};function h(a){return a.split("/")}e.exports=g}),null);
__d("DataTransfer",["Promise","PhotosMimeType","createArrayFromMixed","emptyFunction","promiseDone"],(function(a,b,c,d,e,f){var g=new RegExp("\r\n","g"),h="\n",i={"text/rtf":1,"text/html":1};function j(a){if(a.kind=="file")return a.getAsFile()}function k(a){return new(b("Promise"))(function(b){a.file(function(a){b([a])})})}function l(a){return typeof a.webkitGetAsEntry==="function"?a.webkitGetAsEntry():null}function m(a,c){return new(b("Promise"))(function(d){b("promiseDone")(b("Promise").all(a.map(function(a){var b=l(a);if(b&&b.createReader!=null){c();return n(b)}else{return(b=j(a))!=null?b:[]}})),function(a){d(a.flatMap(b("emptyFunction").thatReturnsArgument))})})}function n(a){return new(b("Promise"))(function(c){var d=a.createReader(),e=[],f=function(){b("promiseDone")(b("Promise").all(e.map(function(a){if(a.isDirectory)return n(a);else return k(a)})),function(a){c(a.flatMap(b("emptyFunction").thatReturnsArgument))})},g=function a(){d.readEntries(function(b){b.length?(e=e.concat(b),a()):f()},f)};g()})}a=function(){"use strict";function a(a){this.data=a,this.types=a.types?b("createArrayFromMixed")(a.types):[]}var c=a.prototype;c.isRichText=function(){if(this.getHTML()&&this.getText())return!0;return this.isImage()?!1:this.types.some(function(a){return i[a]})};c.getText=function(){var a;!this.types.length?a=this.data.getData("Text"):this.types.indexOf("text/plain")!=-1&&(a=this.data.getData("text/plain"));return a?a.replace(g,h):null};c.getHTML=function(){if(this.data.getData)if(!this.types.length)return this.data.getData("Text");else if(this.types.indexOf("text/html")!=-1)return this.data.getData("text/html")};c.isLink=function(){return this.types.some(function(a){return a.indexOf("Url")!=-1||a.indexOf("text/uri-list")!=-1||a.indexOf("text/x-moz-url")!=-1})};c.getLink=function(){if(this.data.getData){if(this.types.indexOf("text/x-moz-url")!=-1){var a=this.data.getData("text/x-moz-url").split("\n");return a[0]}return this.types.indexOf("text/uri-list")!=-1?this.data.getData("text/uri-list"):this.data.getData("url")}return null};c.isImage=function(){var a=this.types.some(function(a){return a.indexOf("application/x-moz-file")!=-1});if(a)return!0;a=this.getFiles();for(var c=0;c<a.length;c++){var d=a[c].type;if(!b("PhotosMimeType").isImage(d))return!1}return!0};c.getCount=function(){if(Object.prototype.hasOwnProperty.call(this.data,"items"))return this.data.items.length;else if(Object.prototype.hasOwnProperty.call(this.data,"mozItemCount"))return this.data.mozItemCount;else if(this.data.files)return this.data.files.length;return null};c.getFiles=function(){if(this.data.items)return Array.prototype.slice.call(this.data.items).map(j).filter(b("emptyFunction").thatReturnsArgument);else if(this.data.files)return Array.prototype.slice.call(this.data.files);else return[]};c.getRecursiveFiles=function(a){if(this.data.items)return m(Array.prototype.slice.call(this.data.items),a);else if(this.data.files)return new(b("Promise"))(Array.prototype.slice.call(this.data.files))};c.hasFiles=function(){return this.getFiles().length>0};return a}();e.exports=a}),null);
__d("getEntityMatcher",[],(function(a,b,c,d,e,f){function g(a,b){return b.getEntity(a)}function a(a,b){return function(c,d,e){var f=b||g;c.findEntityRanges(function(b){b=b.getEntity();return typeof b==="string"&&a(f(b,e))},d)}}e.exports=a}),null);
__d("replaceSelectionWithMention",["DraftModifier","EditorState"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){e=e(c.getCurrentContent(),a);var g=e.getLastCreatedEntityKey();f=f?f(a):a.getTitle();a=b("DraftModifier").replaceText(e,d,f,c.getCurrentInlineStyle(),g);return b("EditorState").push(c,a,"insert-fragment")}e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);
__d("splitTextIntoTextBlocks",[],(function(a,b,c,d,e,f){"use strict";var g=/\r\n?|\n/g;function a(a){return a.split(g)}e.exports=a}),null);
__d("CompositeDraftDecorator",["immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List,h=".";a=function(){function a(a){this.$1=a.slice()}var b=a.prototype;b.getDecorations=function(a,b){var c=Array(a.getText().length).fill(null);this.$1.forEach(function(d,e){var f=0;d=d.strategy;var g=function(a,b){i(c,a,b)&&(j(c,a,b,e+h+f),f++)};d(a,g,b)});return g(c)};b.getComponentForKey=function(a){a=parseInt(a.split(h)[0],10);return this.$1[a].component};b.getPropsForKey=function(a){a=parseInt(a.split(h)[0],10);return this.$1[a].props};return a}();function i(a,b,c){for(var b=b;b<c;b++)if(a[b]!=null)return!1;return!0}function j(a,b,c,d){for(var b=b;b<c;b++)a[b]=d}e.exports=a}),null);
__d("XPrivacyCustomDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/custom_dialog/",{id:{type:"String",required:!0},option_id:{type:"String",required:!0},autosave:{type:"Bool",defaultValue:!1},explain_tags:{type:"Bool",defaultValue:!1},limit_community:{type:"Bool",defaultValue:!1},limit_facebook:{type:"Bool",defaultValue:!1},limit_fof:{type:"Bool",defaultValue:!1},limit_tagexpand:{type:"Bool",defaultValue:!1},is_new_privacy_selector:{type:"Bool",defaultValue:!1},render_location_enum:{type:"Enum",enumType:1},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);