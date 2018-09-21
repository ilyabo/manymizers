// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.Slider');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
manymizers.components.Slider.Slider = (function manymizers$components$Slider$Slider(props){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dragging,false,cljs.core.cst$kw$value,(function (){var G__2354 = cljs.core.cst$kw$value;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__2354) : props.call(null,G__2354));
})()], null));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_function,((function (state){
return (function (p__2355){
var map__2356 = p__2355;
var map__2356__$1 = ((((!((map__2356 == null)))?(((((map__2356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2356):map__2356);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$name);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$height);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$value);
var axis_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$axis_DASH_labels);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2356__$1,cljs.core.cst$kw$on_DASH_change);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Slider,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$slider_DASH_svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$Slider_DASH_fill_DASH_rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(width * (function (){var G__2359 = cljs.core.cst$kw$value;
var fexpr__2358 = cljs.core.deref(state);
return (fexpr__2358.cljs$core$IFn$_invoke$arity$1 ? fexpr__2358.cljs$core$IFn$_invoke$arity$1(G__2359) : fexpr__2358.call(null,G__2359));
})()),cljs.core.cst$kw$height,height], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$Slider_DASH_rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null)], null),(function (){var text_y = ((height / (2)) + (1));
if(cljs.core.truth_((function (){var G__2361 = cljs.core.cst$kw$dragging;
var fexpr__2360 = cljs.core.deref(state);
return (fexpr__2360.cljs$core$IFn$_invoke$arity$1 ? fexpr__2360.cljs$core$IFn$_invoke$arity$1(G__2361) : fexpr__2360.call(null,G__2361));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text$Slider_DASH_text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(width / (2)),cljs.core.cst$kw$y,text_y], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__2362 = ((function (){var G__2364 = cljs.core.cst$kw$value;
var fexpr__2363 = cljs.core.deref(state);
return (fexpr__2363.cljs$core$IFn$_invoke$arity$1 ? fexpr__2363.cljs$core$IFn$_invoke$arity$1(G__2364) : fexpr__2363.call(null,G__2364));
})() * (100));
return Math.round(G__2362);
})()),"%"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text$Slider_DASH_axis_DASH_label$left,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(4),cljs.core.cst$kw$y,text_y], null),cljs.core.first(axis_labels)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text$Slider_DASH_axis_DASH_label$right,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(width - (4)),cljs.core.cst$kw$y,text_y], null),cljs.core.second(axis_labels)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text$Slider_DASH_text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(width / (2)),cljs.core.cst$kw$y,text_y], null),name], null);
}
})()], null)], null)], null);
});})(state))
,cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,((function (state){
return (function (this$,p__2365){
var vec__2366 = p__2365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2366,(0),null);
var new_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2366,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$value,(function (){var G__2369 = cljs.core.cst$kw$value;
return (new_props.cljs$core$IFn$_invoke$arity$1 ? new_props.cljs$core$IFn$_invoke$arity$1(G__2369) : new_props.call(null,G__2369));
})());
});})(state))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (state){
return (function (this$){
var node = reagent.core.dom_node(this$);
var props__$1 = reagent.core.props(this$);
var on_change = (function (){var G__2370 = cljs.core.cst$kw$on_DASH_change;
return (props__$1.cljs$core$IFn$_invoke$arity$1 ? props__$1.cljs$core$IFn$_invoke$arity$1(G__2370) : props__$1.call(null,G__2370));
})();
var width = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(props__$1);
var pos__GT_value = ((function (node,props__$1,on_change,width,state){
return (function (){
var x__4037__auto__ = (function (){var x__4040__auto__ = (cljs.core.first(d3.mouse(node)) / width);
var y__4041__auto__ = (1);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var y__4038__auto__ = (0);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});})(node,props__$1,on_change,width,state))
;
var drag = d3.behavior.drag().on("dragstart",((function (node,props__$1,on_change,width,pos__GT_value,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$value,pos__GT_value());
});})(node,props__$1,on_change,width,pos__GT_value,state))
).on("drag",((function (node,props__$1,on_change,width,pos__GT_value,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$dragging,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value,pos__GT_value()], 0));
});})(node,props__$1,on_change,width,pos__GT_value,state))
).on("dragend",((function (node,props__$1,on_change,width,pos__GT_value,state){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$dragging,false);

var G__2371 = pos__GT_value();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__2371) : on_change.call(null,G__2371));
});})(node,props__$1,on_change,width,pos__GT_value,state))
);
return d3.select(node).selectAll(".slider-svg").on("click",((function (node,props__$1,on_change,width,pos__GT_value,drag,state){
return (function (){
var G__2372 = pos__GT_value();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__2372) : on_change.call(null,G__2372));
});})(node,props__$1,on_change,width,pos__GT_value,drag,state))
).call(drag);
});})(state))
], null));
});
