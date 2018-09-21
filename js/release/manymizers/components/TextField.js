// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.TextField');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('manymizers.components.Button');
manymizers.components.TextField.key_codes = clojure.set.map_invert(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enter,(13),cljs.core.cst$kw$esc,(27)], null));
manymizers.components.TextField.get_input_node = (function manymizers$components$TextField$get_input_node(node){
return node.querySelector(".TextField-input");
});
manymizers.components.TextField.TextField = (function manymizers$components$TextField$TextField(props){
var txt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = (function (){var G__5845 = cljs.core.cst$kw$text;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__5845) : props.call(null,G__5845));
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());
var clear = ((function (txt){
return (function (){
return cljs.core.reset_BANG_(txt,"");
});})(txt))
;
var set_text = ((function (txt,clear){
return (function (p1__5838_SHARP_){
return cljs.core.reset_BANG_(txt,p1__5838_SHARP_);
});})(txt,clear))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_function,((function (txt,clear,set_text){
return (function (p__5846){
var map__5847 = p__5846;
var map__5847__$1 = ((((!((map__5847 == null)))?(((((map__5847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5847):map__5847);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$text);
var clear_on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$clear_DASH_on_DASH_submit);
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$max_DASH_length);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$placeholder);
var value_valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5847__$1,cljs.core.cst$kw$value_DASH_valid_QMARK_,((function (map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,txt,clear,set_text){
return (function (){
return cljs.core.constantly(true);
});})(map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,txt,clear,set_text))
);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$on_DASH_blur);
var blur_on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$blur_DASH_on_DASH_submit);
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$focus);
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$on_DASH_submit);
var submit_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5847__$1,cljs.core.cst$kw$submit_DASH_button);
var reset = ((function (map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (){
return cljs.core.reset_BANG_(txt,text);
});})(map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
;
var submit = ((function (reset,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (target){
if(cljs.core.truth_((function (){var G__5849 = cljs.core.deref(txt);
return (value_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? value_valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__5849) : value_valid_QMARK_.call(null,G__5849));
})())){
if(cljs.core.truth_((function (){var G__5850 = cljs.core.deref(txt);
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__5850) : on_submit.call(null,G__5850));
})())){
if(cljs.core.truth_(clear_on_submit)){
clear();
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = blur_on_submit;
if(cljs.core.truth_(and__3938__auto__)){
return target;
} else {
return and__3938__auto__;
}
})())){
return target.blur();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(reset,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
;
var val = ((function (reset,submit,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (p1__5839_SHARP_){
return p1__5839_SHARP_.target.value;
});})(reset,submit,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$TextField,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$TextField_DASH_input_DASH_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$TextField_DASH_input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$max_DASH_length,(function (){var or__3949__auto__ = max_length;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (128);
}
})(),cljs.core.cst$kw$value,cljs.core.deref(txt),cljs.core.cst$kw$on_DASH_blur,((function (reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (p1__5840_SHARP_){
if(cljs.core.truth_(on_blur)){
var G__5851 = val(p1__5840_SHARP_);
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(G__5851) : on_blur.call(null,G__5851));
} else {
return null;
}
});})(reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
,cljs.core.cst$kw$on_DASH_change,((function (reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (p1__5841_SHARP_){
return set_text(val(p1__5841_SHARP_));
});})(reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
,cljs.core.cst$kw$on_DASH_key_DASH_up,((function (reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (evt){
var G__5852 = (function (){var G__5853 = evt.keyCode;
return (manymizers.components.TextField.key_codes.cljs$core$IFn$_invoke$arity$1 ? manymizers.components.TextField.key_codes.cljs$core$IFn$_invoke$arity$1(G__5853) : manymizers.components.TextField.key_codes.call(null,G__5853));
})();
var G__5852__$1 = (((G__5852 instanceof cljs.core.Keyword))?G__5852.fqn:null);
switch (G__5852__$1) {
case "enter":
return submit(evt.target);

break;
case "esc":
evt.target.blur();

reset();

if(cljs.core.truth_(on_blur)){
var G__5854 = val(manymizers.components.TextField._PERCENT_);
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(G__5854) : on_blur.call(null,G__5854));
} else {
return null;
}

break;
default:
return null;

}
});})(reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
], null)], null)], null),(cljs.core.truth_(submit_button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$TextField_DASH_button_DASH_cell,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Button.Button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$classed,"TextField-button",cljs.core.cst$kw$disabled,cljs.core.not((function (){var G__5855 = cljs.core.deref(txt);
return (value_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? value_valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__5855) : value_valid_QMARK_.call(null,G__5855));
})()),cljs.core.cst$kw$on_DASH_click,((function (reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text){
return (function (p1__5842_SHARP_){
return submit(manymizers.components.TextField.get_input_node(p1__5842_SHARP_.target.parentNode.parentNode));
});})(reset,submit,val,map__5847,map__5847__$1,text,clear_on_submit,max_length,placeholder,value_valid_QMARK_,on_blur,blur_on_submit,focus,on_submit,submit_button,txt,clear,set_text))
], null),submit_button], null)], null):null)], null);
});})(txt,clear,set_text))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (txt,clear,set_text){
return (function (this$){
var node = reagent.core.dom_node(this$);
var props__$1 = reagent.core.props(this$);
if(cljs.core.truth_((function (){var G__5856 = cljs.core.cst$kw$focus;
return (props__$1.cljs$core$IFn$_invoke$arity$1 ? props__$1.cljs$core$IFn$_invoke$arity$1(G__5856) : props__$1.call(null,G__5856));
})())){
var G__5857 = manymizers.components.TextField.get_input_node(node);
G__5857.focus();

var fexpr__5858_5860 = ((function (G__5857,node,props__$1,txt,clear,set_text){
return (function (p1__5843_SHARP_){
return p1__5843_SHARP_.setSelectionRange((0),p1__5843_SHARP_.value.length);
});})(G__5857,node,props__$1,txt,clear,set_text))
;
fexpr__5858_5860(G__5857);

return G__5857;
} else {
return null;
}
});})(txt,clear,set_text))
], null));
});
