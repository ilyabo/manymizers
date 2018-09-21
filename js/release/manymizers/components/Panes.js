// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.Panes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('manymizers.store');
goog.require('manymizers.components.Slider');
goog.require('manymizers.components.Editable');
goog.require('manymizers.components.TextField');
manymizers.components.Panes.config = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$slider,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(200),cljs.core.cst$kw$height,(30)], null),cljs.core.cst$kw$max_DASH_length,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$factor,(32),cljs.core.cst$kw$option,(32),cljs.core.cst$kw$problem_DASH_statement,(64)], null)], null);
manymizers.components.Panes.ProblemStatement = (function manymizers$components$Panes$ProblemStatement(){
var statement = cljs.core.cst$kw$problem_DASH_statement.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ProblemStatement,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.TextField.TextField,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$text,statement,cljs.core.cst$kw$placeholder,"Type the decision to make",cljs.core.cst$kw$on_DASH_submit,manymizers.store.update_problem_statement_BANG_,cljs.core.cst$kw$on_DASH_blur,manymizers.store.update_problem_statement_BANG_,cljs.core.cst$kw$submit_DASH_button,null,cljs.core.cst$kw$blur_DASH_on_DASH_submit,true,cljs.core.cst$kw$max_DASH_length,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$problem_DASH_statement], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,statement], null))], null);
});
manymizers.components.Panes.Factor = (function manymizers$components$Panes$Factor(factor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Factor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Editable.Editable,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$type,"factor",cljs.core.cst$kw$on_DASH_change,(function (p1__4962_SHARP_){
return manymizers.store.update_factor_name_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),p1__4962_SHARP_);
}),cljs.core.cst$kw$on_DASH_remove,(function (){
return manymizers.store.remove_factor_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor));
}),cljs.core.cst$kw$value,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$value_DASH_valid_QMARK_,(function (p1__4963_SHARP_){
return manymizers.store.valid_factor_name_change_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),p1__4963_SHARP_);
}),cljs.core.cst$kw$max_DASH_length,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$factor], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Slider.Slider,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$value,cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$width,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$width], null)),cljs.core.cst$kw$height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$height], null)),cljs.core.cst$kw$axis_DASH_labels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not important","Very important"], null),cljs.core.cst$kw$on_DASH_change,(function (p1__4964_SHARP_){
return manymizers.store.update_factor_weight_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),p1__4964_SHARP_);
})], null)], null)], null)], null);
});
manymizers.components.Panes.Pane = (function manymizers$components$Panes$Pane(p__4965,children){
var map__4966 = p__4965;
var map__4966__$1 = ((((!((map__4966 == null)))?(((((map__4966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4966):map__4966);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4966__$1,cljs.core.cst$kw$name);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4966__$1,cljs.core.cst$kw$title);
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4966__$1,cljs.core.cst$kw$comment);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Pane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Pane_DASH_title,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Pane_DASH_comment,comment], null),children], null);
});
manymizers.components.Panes.FactorsPane = (function manymizers$components$Panes$FactorsPane(){
var factors = cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Pane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"factors",cljs.core.cst$kw$title,"Factors",cljs.core.cst$kw$comment,"List the factors which are important for making your decision.\n         Rate the importance of each factor by adjusting the sliders."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$FactorsPane,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$FactorsPane_DASH_items,(function (){var iter__4324__auto__ = ((function (factors){
return (function manymizers$components$Panes$FactorsPane_$_iter__4969(s__4970){
return (new cljs.core.LazySeq(null,((function (factors){
return (function (){
var s__4970__$1 = s__4970;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__4970__$1);
if(temp__4657__auto__){
var s__4970__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4970__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4970__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4972 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4971 = (0);
while(true){
if((i__4971 < size__4323__auto__)){
var factor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4971);
cljs.core.chunk_append(b__4972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Factor,factor], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null)));

var G__4973 = (i__4971 + (1));
i__4971 = G__4973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4972),manymizers$components$Panes$FactorsPane_$_iter__4969(cljs.core.chunk_rest(s__4970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4972),null);
}
} else {
var factor = cljs.core.first(s__4970__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Factor,factor], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null)),manymizers$components$Panes$FactorsPane_$_iter__4969(cljs.core.rest(s__4970__$2)));
}
} else {
return null;
}
break;
}
});})(factors))
,null,null));
});})(factors))
;
return iter__4324__auto__(factors);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.TextField.TextField,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$placeholder,"New factor",cljs.core.cst$kw$on_DASH_submit,manymizers.store.add_factor_BANG_,cljs.core.cst$kw$clear_DASH_on_DASH_submit,true,cljs.core.cst$kw$value_DASH_valid_QMARK_,((function (factors){
return (function (p1__4968_SHARP_){
return manymizers.store.valid_factor_name_change_QMARK_(null,p1__4968_SHARP_);
});})(factors))
,cljs.core.cst$kw$max_DASH_length,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$factor], null)),cljs.core.cst$kw$submit_DASH_button,"Add"], null)], null)], null)], null);
});
manymizers.components.Panes.Option = (function manymizers$components$Panes$Option(option){
var factors = cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Editable.Editable,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$type,"option",cljs.core.cst$kw$value,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$value_DASH_valid_QMARK_,((function (factors){
return (function (p1__4974_SHARP_){
return manymizers.store.valid_option_name_change_QMARK_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),p1__4974_SHARP_);
});})(factors))
,cljs.core.cst$kw$on_DASH_change,((function (factors){
return (function (p1__4975_SHARP_){
return manymizers.store.update_option_name_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),p1__4975_SHARP_);
});})(factors))
,cljs.core.cst$kw$on_DASH_remove,((function (factors){
return (function (){
return manymizers.store.remove_option_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option));
});})(factors))
,cljs.core.cst$kw$max_DASH_length,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$option], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_factors,(function (){var iter__4324__auto__ = ((function (factors){
return (function manymizers$components$Panes$Option_$_iter__4977(s__4978){
return (new cljs.core.LazySeq(null,((function (factors){
return (function (){
var s__4978__$1 = s__4978;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__4978__$1);
if(temp__4657__auto__){
var s__4978__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4978__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4978__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4980 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4979 = (0);
while(true){
if((i__4979 < size__4323__auto__)){
var factor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4979);
cljs.core.chunk_append(b__4980,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_factor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Slider.Slider,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$factors_DASH_weights,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null),0.5),cljs.core.cst$kw$width,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$width], null)),cljs.core.cst$kw$height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$height], null)),cljs.core.cst$kw$axis_DASH_labels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not satisfied","Well satisfied"], null),cljs.core.cst$kw$on_DASH_change,((function (i__4979,factor,c__4322__auto__,size__4323__auto__,b__4980,s__4978__$2,temp__4657__auto__,factors){
return (function (p1__4976_SHARP_){
return manymizers.store.update_option_factor_weight_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),p1__4976_SHARP_);
});})(i__4979,factor,c__4322__auto__,size__4323__auto__,b__4980,s__4978__$2,temp__4657__auto__,factors))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null)));

var G__4981 = (i__4979 + (1));
i__4979 = G__4981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4980),manymizers$components$Panes$Option_$_iter__4977(cljs.core.chunk_rest(s__4978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4980),null);
}
} else {
var factor = cljs.core.first(s__4978__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_factor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Slider.Slider,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$factors_DASH_weights,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null),0.5),cljs.core.cst$kw$width,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$width], null)),cljs.core.cst$kw$height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slider,cljs.core.cst$kw$height], null)),cljs.core.cst$kw$axis_DASH_labels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not satisfied","Well satisfied"], null),cljs.core.cst$kw$on_DASH_change,((function (factor,s__4978__$2,temp__4657__auto__,factors){
return (function (p1__4976_SHARP_){
return manymizers.store.update_option_factor_weight_BANG_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor),p1__4976_SHARP_);
});})(factor,s__4978__$2,temp__4657__auto__,factors))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(factor)], null)),manymizers$components$Panes$Option_$_iter__4977(cljs.core.rest(s__4978__$2)));
}
} else {
return null;
}
break;
}
});})(factors))
,null,null));
});})(factors))
;
return iter__4324__auto__(factors);
})()], null)], null);
});
manymizers.components.Panes.OptionsPane = (function manymizers$components$Panes$OptionsPane(){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Pane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"options",cljs.core.cst$kw$title,"Options",cljs.core.cst$kw$comment,"List the available options for your decision.\n             Using the sliders rate how well each of the factors is\n             likely to be satisfied by the options."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$OptionsPane,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (options){
return (function manymizers$components$Panes$OptionsPane_$_iter__4983(s__4984){
return (new cljs.core.LazySeq(null,((function (options){
return (function (){
var s__4984__$1 = s__4984;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__4984__$1);
if(temp__4657__auto__){
var s__4984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4984__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4984__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4986 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4985 = (0);
while(true){
if((i__4985 < size__4323__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4985);
cljs.core.chunk_append(b__4986,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Option,option], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null)));

var G__4987 = (i__4985 + (1));
i__4985 = G__4987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4986),manymizers$components$Panes$OptionsPane_$_iter__4983(cljs.core.chunk_rest(s__4984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4986),null);
}
} else {
var option = cljs.core.first(s__4984__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Option,option], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null)),manymizers$components$Panes$OptionsPane_$_iter__4983(cljs.core.rest(s__4984__$2)));
}
} else {
return null;
}
break;
}
});})(options))
,null,null));
});})(options))
;
return iter__4324__auto__(options);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.TextField.TextField,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$placeholder,"New option",cljs.core.cst$kw$on_DASH_submit,manymizers.store.add_option_BANG_,cljs.core.cst$kw$clear_DASH_on_DASH_submit,true,cljs.core.cst$kw$value_DASH_valid_QMARK_,((function (options){
return (function (p1__4982_SHARP_){
return manymizers.store.valid_option_name_change_QMARK_(null,p1__4982_SHARP_);
});})(options))
,cljs.core.cst$kw$max_DASH_length,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(manymizers.components.Panes.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_length,cljs.core.cst$kw$option], null)),cljs.core.cst$kw$submit_DASH_button,"Add"], null)], null)], null)], null);
});
manymizers.components.Panes.OutcomePane = (function manymizers$components$Panes$OutcomePane(){
var options = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(manymizers.store.score,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state))));
var best_score = manymizers.store.score(cljs.core.first(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.Pane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"outcome",cljs.core.cst$kw$title,"Decision outcome",cljs.core.cst$kw$comment,"See the options ranked by\n            their relative strengths measured against the weighted combination of the factors."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$OutcomePane,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (options,best_score){
return (function manymizers$components$Panes$OutcomePane_$_iter__4988(s__4989){
return (new cljs.core.LazySeq(null,((function (options,best_score){
return (function (){
var s__4989__$1 = s__4989;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__4989__$1);
if(temp__4657__auto__){
var s__4989__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4989__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4989__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4991 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4990 = (0);
while(true){
if((i__4990 < size__4323__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4990);
cljs.core.chunk_append(b__4991,(function (){var score = manymizers.store.score(option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["Option-score",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(score,best_score))?" is-optimal":""))].join('')], null),manymizers.store.score__GT_str(score)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null));
})());

var G__4992 = (i__4990 + (1));
i__4990 = G__4992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4991),manymizers$components$Panes$OutcomePane_$_iter__4988(cljs.core.chunk_rest(s__4989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4991),null);
}
} else {
var option = cljs.core.first(s__4989__$2);
return cljs.core.cons((function (){var score = manymizers.store.score(option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Option_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["Option-score",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(score,best_score))?" is-optimal":""))].join('')], null),manymizers.store.score__GT_str(score)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null));
})(),manymizers$components$Panes$OutcomePane_$_iter__4988(cljs.core.rest(s__4989__$2)));
}
} else {
return null;
}
break;
}
});})(options,best_score))
,null,null));
});})(options,best_score))
;
return iter__4324__auto__(options);
})())], null)], null);
});
