// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.Button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
manymizers.components.Button.Button = (function manymizers$components$Button$Button(p__5833,text){
var map__5834 = p__5833;
var map__5834__$1 = ((((!((map__5834 == null)))?(((((map__5834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5834):map__5834);
var classed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5834__$1,cljs.core.cst$kw$classed);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5834__$1,cljs.core.cst$kw$disabled);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5834__$1,cljs.core.cst$kw$on_DASH_click);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [classed,(cljs.core.truth_(disabled)?"disabled":null)], null)),cljs.core.cst$kw$on_DASH_click,((function (map__5834,map__5834__$1,classed,disabled,on_click){
return (function (p1__5832_SHARP_){
if(cljs.core.not(disabled)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(p1__5832_SHARP_) : on_click.call(null,p1__5832_SHARP_));
} else {
return null;
}
});})(map__5834,map__5834__$1,classed,disabled,on_click))
], null),text], null);
});
