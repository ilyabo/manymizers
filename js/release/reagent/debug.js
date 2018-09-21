// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__4861__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4862__i = 0, G__4862__a = new Array(arguments.length -  0);
while (G__4862__i < G__4862__a.length) {G__4862__a[G__4862__i] = arguments[G__4862__i + 0]; ++G__4862__i;}
  args = new cljs.core.IndexedSeq(G__4862__a,0,null);
} 
return G__4861__delegate.call(this,args);};
G__4861.cljs$lang$maxFixedArity = 0;
G__4861.cljs$lang$applyTo = (function (arglist__4863){
var args = cljs.core.seq(arglist__4863);
return G__4861__delegate(args);
});
G__4861.cljs$core$IFn$_invoke$arity$variadic = G__4861__delegate;
return G__4861;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__4864__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4865__i = 0, G__4865__a = new Array(arguments.length -  0);
while (G__4865__i < G__4865__a.length) {G__4865__a[G__4865__i] = arguments[G__4865__i + 0]; ++G__4865__i;}
  args = new cljs.core.IndexedSeq(G__4865__a,0,null);
} 
return G__4864__delegate.call(this,args);};
G__4864.cljs$lang$maxFixedArity = 0;
G__4864.cljs$lang$applyTo = (function (arglist__4866){
var args = cljs.core.seq(arglist__4866);
return G__4864__delegate(args);
});
G__4864.cljs$core$IFn$_invoke$arity$variadic = G__4864__delegate;
return G__4864;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});