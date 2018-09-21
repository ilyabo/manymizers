// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.Editable');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('manymizers.components.Button');
goog.require('manymizers.components.DropdownMenu');
goog.require('manymizers.components.TextField');
manymizers.components.Editable.Editable = (function manymizers$components$Editable$Editable(){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var start_editing = ((function (editing){
return (function (){
return cljs.core.reset_BANG_(editing,true);
});})(editing))
;
var stop_editing = ((function (editing,start_editing){
return (function (){
return cljs.core.reset_BANG_(editing,false);
});})(editing,start_editing))
;
return ((function (editing,start_editing,stop_editing){
return (function (p__9719,children){
var map__9720 = p__9719;
var map__9720__$1 = ((((!((map__9720 == null)))?(((((map__9720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9720):map__9720);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$id);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$type);
var on_remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$on_DASH_remove);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$on_DASH_change);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$value);
var value_valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9720__$1,cljs.core.cst$kw$value_DASH_valid_QMARK_,((function (map__9720,map__9720__$1,id,type,on_remove,on_change,value,editing,start_editing,stop_editing){
return (function (){
return cljs.core.constantly(true);
});})(map__9720,map__9720__$1,id,type,on_remove,on_change,value,editing,start_editing,stop_editing))
);
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9720__$1,cljs.core.cst$kw$max_DASH_length);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Editable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.DropdownMenu.DropdownMenu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null),cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,"edit",cljs.core.cst$kw$icon,"pencil",cljs.core.cst$kw$label,["Edit ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.cst$kw$action,start_editing], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,"delete",cljs.core.cst$kw$icon,"cross",cljs.core.cst$kw$action,on_remove,cljs.core.cst$kw$label,["Delete ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.TextField.TextField,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$text,value,cljs.core.cst$kw$placeholder,"",cljs.core.cst$kw$submit_DASH_button,"OK",cljs.core.cst$kw$on_DASH_submit,on_change,cljs.core.cst$kw$max_DASH_length,max_length,cljs.core.cst$kw$value_DASH_valid_QMARK_,value_valid_QMARK_,cljs.core.cst$kw$on_DASH_blur,((function (map__9720,map__9720__$1,id,type,on_remove,on_change,value,value_valid_QMARK_,max_length,editing,start_editing,stop_editing){
return (function (){
return setTimeout(stop_editing,(0));
});})(map__9720,map__9720__$1,id,type,on_remove,on_change,value,value_valid_QMARK_,max_length,editing,start_editing,stop_editing))
,cljs.core.cst$kw$focus,true], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Editable_DASH_children,children], null))], null);
});
;})(editing,start_editing,stop_editing))
});
