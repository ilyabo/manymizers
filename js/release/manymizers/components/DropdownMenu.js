// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.DropdownMenu');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('schema.core');
goog.require('manymizers.component');
manymizers.components.DropdownMenu.active_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
manymizers.components.DropdownMenu.toggle_active_BANG_ = (function manymizers$components$DropdownMenu$toggle_active_BANG_(key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(manymizers.components.DropdownMenu.active_key,(function (p1__9701_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__9701_SHARP_)){
return null;
} else {
return key;
}
}));
});
manymizers.components.DropdownMenu.clear_active_BANG_ = (function manymizers$components$DropdownMenu$clear_active_BANG_(){
return cljs.core.reset_BANG_(manymizers.components.DropdownMenu.active_key,null);
});
manymizers.components.DropdownMenu.init = (function manymizers$components$DropdownMenu$init(){
manymizers.components.DropdownMenu.clear_active_BANG_();

var G__9703 = document.body;
G__9703.addEventListener("click",manymizers.components.DropdownMenu.clear_active_BANG_);

G__9703.addEventListener("keyup",((function (G__9703){
return (function (p1__9702_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9702_SHARP_.keyCode,(27))){
return manymizers.components.DropdownMenu.clear_active_BANG_();
} else {
return null;
}
});})(G__9703))
);

return G__9703;
});
var DropdownMenu_COLON_prop_types_9715 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,schema.core.Any,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,schema.core.Any,cljs.core.cst$kw$label,schema.core.Str,cljs.core.cst$kw$icon,schema.core.Str,cljs.core.cst$kw$action,schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null)], null))], null)], null)], null);
manymizers.components.DropdownMenu.DropdownMenu = ((function (DropdownMenu_COLON_prop_types_9715){
return (function manymizers$components$DropdownMenu$DropdownMenu(p__9704){
var map__9705 = p__9704;
var map__9705__$1 = ((((!((map__9705 == null)))?(((((map__9705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9705):map__9705);
var props = map__9705__$1;
var classed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9705__$1,cljs.core.cst$kw$classed);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9705__$1,cljs.core.cst$kw$key);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9705__$1,cljs.core.cst$kw$items);
manymizers.component.validate_props("DropdownMenu",DropdownMenu_COLON_prop_types_9715,props);

var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.deref(manymizers.components.DropdownMenu.active_key));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$DropdownMenu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,classed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$DropdownMenu_DASH_button$icon_DASH_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715){
return (function (){
return manymizers.components.DropdownMenu.toggle_active_BANG_(key);
});})(active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715))
], null)], null),((active)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$DropdownMenu_DASH_body,(function (){var iter__4324__auto__ = ((function (active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715){
return (function manymizers$components$DropdownMenu$DropdownMenu_$_iter__9707(s__9708){
return (new cljs.core.LazySeq(null,((function (active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715){
return (function (){
var s__9708__$1 = s__9708;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__9708__$1);
if(temp__4657__auto__){
var s__9708__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9708__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9708__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9710 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9709 = (0);
while(true){
if((i__9709 < size__4323__auto__)){
var map__9711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9709);
var map__9711__$1 = ((((!((map__9711 == null)))?(((((map__9711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9711):map__9711);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9711__$1,cljs.core.cst$kw$key);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9711__$1,cljs.core.cst$kw$label);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9711__$1,cljs.core.cst$kw$icon);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9711__$1,cljs.core.cst$kw$action);
cljs.core.chunk_append(b__9710,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$DropdownMenu_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key__$1,cljs.core.cst$kw$on_DASH_click,((function (i__9709,map__9711,map__9711__$1,key__$1,label,icon,action,c__4322__auto__,size__4323__auto__,b__9710,s__9708__$2,temp__4657__auto__,active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715){
return (function (){
manymizers.components.DropdownMenu.clear_active_BANG_();

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
});})(i__9709,map__9711,map__9711__$1,key__$1,label,icon,action,c__4322__auto__,size__4323__auto__,b__9710,s__9708__$2,temp__4657__auto__,active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715))
], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null):null),label], null));

var G__9716 = (i__9709 + (1));
i__9709 = G__9716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9710),manymizers$components$DropdownMenu$DropdownMenu_$_iter__9707(cljs.core.chunk_rest(s__9708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9710),null);
}
} else {
var map__9713 = cljs.core.first(s__9708__$2);
var map__9713__$1 = ((((!((map__9713 == null)))?(((((map__9713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9713):map__9713);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,cljs.core.cst$kw$key);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,cljs.core.cst$kw$label);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,cljs.core.cst$kw$icon);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,cljs.core.cst$kw$action);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$DropdownMenu_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key__$1,cljs.core.cst$kw$on_DASH_click,((function (map__9713,map__9713__$1,key__$1,label,icon,action,s__9708__$2,temp__4657__auto__,active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715){
return (function (){
manymizers.components.DropdownMenu.clear_active_BANG_();

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
});})(map__9713,map__9713__$1,key__$1,label,icon,action,s__9708__$2,temp__4657__auto__,active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715))
], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null):null),label], null),manymizers$components$DropdownMenu$DropdownMenu_$_iter__9707(cljs.core.rest(s__9708__$2)));
}
} else {
return null;
}
break;
}
});})(active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715))
,null,null));
});})(active,map__9705,map__9705__$1,props,classed,key,items,DropdownMenu_COLON_prop_types_9715))
;
return iter__4324__auto__(items);
})()], null):null)], null);
});})(DropdownMenu_COLON_prop_types_9715))
;
