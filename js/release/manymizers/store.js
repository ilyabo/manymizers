// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.store');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('manymizers.store_data');
cljs.core.enable_console_print_BANG_();
if((typeof manymizers !== 'undefined') && (typeof manymizers.store !== 'undefined') && (typeof manymizers.store.app_state !== 'undefined')){
} else {
manymizers.store.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(manymizers.store_data.empty_state);
}
manymizers.store.in_default_state_QMARK_ = (function manymizers$store$in_default_state_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(manymizers.store.app_state),manymizers.store_data.empty_state);
});
manymizers.store.factor_names = (function manymizers$store$factor_names(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state)));
});
manymizers.store.factor_weights = (function manymizers$store$factor_weights(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weight,cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state)));
});
manymizers.store.option_factors_weights = (function manymizers$store$option_factors_weights(option){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9660_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$factors_DASH_weights,p1__9660_SHARP_], null),0.5);
}),manymizers.store.factor_names());
});
manymizers.store.score = (function manymizers$store$score(option){
var G__9663 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,manymizers.store.factor_weights(),manymizers.store.option_factors_weights(option)));
var fexpr__9662 = ((function (G__9663){
return (function (p1__9661_SHARP_){
return (p1__9661_SHARP_ / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,manymizers.store.factor_weights()));
});})(G__9663))
;
return fexpr__9662(G__9663);
});
manymizers.store.score__GT_str = (function manymizers$store$score__GT_str(score){
if(cljs.core.truth_(isNaN(score))){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__9664 = (score * (100));
return Math.round(G__9664);
})()),"%"].join('');
}
});
manymizers.store.find_factor = (function manymizers$store$find_factor(name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__9665_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__9665_SHARP_));
}),cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state))));
});
manymizers.store.find_option = (function manymizers$store$find_option(name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__9666_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__9666_SHARP_));
}),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state))));
});
manymizers.store.update_problem_statement_BANG_ = (function manymizers$store$update_problem_statement_BANG_(text){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.assoc,cljs.core.cst$kw$problem_DASH_statement,text);
});
manymizers.store.reset_state_BANG_ = (function manymizers$store$reset_state_BANG_(){
return cljs.core.reset_BANG_(manymizers.store.app_state,manymizers.store_data.empty_state);
});
manymizers.store.set_sample_state_BANG_ = (function manymizers$store$set_sample_state_BANG_(index){
return cljs.core.reset_BANG_(manymizers.store.app_state,cljs.core.get.cljs$core$IFn$_invoke$arity$2(manymizers.store_data.sample_states,index));
});
manymizers.store.remove_factor_BANG_ = (function manymizers$store$remove_factor_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.update,cljs.core.cst$kw$factors,(function (p1__9667_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([manymizers.store.find_factor(name)]),p1__9667_SHARP_);
}));
});
manymizers.store.remove_option_BANG_ = (function manymizers$store$remove_option_BANG_(name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.update,cljs.core.cst$kw$options,(function (p1__9668_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([manymizers.store.find_option(name)]),p1__9668_SHARP_);
}));
});
manymizers.store.valid_factor_name_change_QMARK_ = (function manymizers$store$valid_factor_name_change_QMARK_(old_name,new_name){
return ((!(clojure.string.blank_QMARK_(new_name))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_name,new_name)) || (cljs.core.not(manymizers.store.find_factor(new_name))))));
});
manymizers.store.update_factor_name_BANG_ = (function manymizers$store$update_factor_name_BANG_(old_name,new_name){
var old_factor = manymizers.store.find_factor(old_name);
var state = cljs.core.deref(manymizers.store.app_state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(manymizers.store.app_state,cljs.core.assoc,cljs.core.cst$kw$factors,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([old_factor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_factor,cljs.core.cst$kw$name,new_name)]),(function (){var G__9670 = cljs.core.cst$kw$factors;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__9670) : state.call(null,G__9670));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (old_factor,state){
return (function (option){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(option,cljs.core.cst$kw$factors_DASH_weights,((function (old_factor,state){
return (function (p1__9669_SHARP_){
return clojure.set.rename_keys(p1__9669_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([old_name,new_name]));
});})(old_factor,state))
);
});})(old_factor,state))
,(function (){var G__9671 = cljs.core.cst$kw$options;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__9671) : state.call(null,G__9671));
})())], 0));
});
manymizers.store.valid_option_name_change_QMARK_ = (function manymizers$store$valid_option_name_change_QMARK_(old_name,new_name){
return ((!(clojure.string.blank_QMARK_(new_name))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_name,new_name)) || (cljs.core.not(manymizers.store.find_option(new_name))))));
});
manymizers.store.update_option_name_BANG_ = (function manymizers$store$update_option_name_BANG_(option_name,name){
var option = manymizers.store.find_option(option_name);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.update,cljs.core.cst$kw$options,((function (option){
return (function (p1__9672_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([option,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,cljs.core.cst$kw$name,name)]),p1__9672_SHARP_);
});})(option))
);
});
manymizers.store.update_factor_weight_BANG_ = (function manymizers$store$update_factor_weight_BANG_(factor_name,weight){
var factor = manymizers.store.find_factor(factor_name);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.update,cljs.core.cst$kw$factors,((function (factor){
return (function (p1__9673_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([factor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(factor,cljs.core.cst$kw$weight,weight)]),p1__9673_SHARP_);
});})(factor))
);
});
manymizers.store.update_option_factor_weight_BANG_ = (function manymizers$store$update_option_factor_weight_BANG_(option_name,factor_name,weight){
var option = manymizers.store.find_option(option_name);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.update,cljs.core.cst$kw$options,((function (option){
return (function (p1__9674_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([option,cljs.core.assoc_in(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$factors_DASH_weights,factor_name], null),weight)]),p1__9674_SHARP_);
});})(option))
);
});
manymizers.store.add_factor_BANG_ = (function manymizers$store$add_factor_BANG_(name){
var factors = cljs.core.cst$kw$factors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
if(cljs.core.not(manymizers.store.find_factor(name))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.assoc,cljs.core.cst$kw$factors,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(factors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$weight,0.5], null)], null)));
} else {
return null;
}
});
manymizers.store.add_option_BANG_ = (function manymizers$store$add_option_BANG_(name){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state));
if(cljs.core.not(manymizers.store.find_option(name))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(manymizers.store.app_state,cljs.core.assoc,cljs.core.cst$kw$options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(manymizers.store.app_state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$factors_DASH_weights,cljs.core.PersistentArrayMap.EMPTY], null)], null)));
} else {
return null;
}
});
