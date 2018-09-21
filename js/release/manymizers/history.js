// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.history');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.crypt.base64');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('manymizers.store_data');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('historian.core');
goog.require('goog.History');
if((typeof manymizers !== 'undefined') && (typeof manymizers.history !== 'undefined') && (typeof manymizers.history.state !== 'undefined')){
} else {
manymizers.history.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.core.enable_console_print_BANG_();
manymizers.history.state__GT_url = (function manymizers$history$state__GT_url(app_state){
var state = cljs.core.deref(app_state);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,manymizers.store_data.empty_state))){
var G__10005 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
var G__10006 = true;
return goog.crypt.base64.encodeString(G__10005,G__10006);
} else {
return "";
}
});
manymizers.history.url__GT_state = (function manymizers$history$url__GT_state(app_state,token){
var temp__4655__auto__ = (((cljs.core.count(token) > (0)))?(function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.decodeString(token,true));
}catch (e10007){var e = e10007;
return console.error("Couldn't initialize state from url hash",e);
}})():manymizers.store_data.empty_state);
if(cljs.core.truth_(temp__4655__auto__)){
var state = temp__4655__auto__;
return cljs.core.reset_BANG_(app_state,state);
} else {
return null;
}
});
manymizers.history.update_state_BANG_ = (function manymizers$history$update_state_BANG_(){
return cljs.core.reset_BANG_(manymizers.history.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$can_DASH_undo,historian.core.can_undo_QMARK_(),cljs.core.cst$kw$can_DASH_redo,historian.core.can_redo_QMARK_()], null));
});
manymizers.history.redo = (function manymizers$history$redo(){
historian.core.redo_BANG_();

return manymizers.history.update_state_BANG_();
});
manymizers.history.undo = (function manymizers$history$undo(){
historian.core.undo_BANG_();

return manymizers.history.update_state_BANG_();
});
manymizers.history.on_app_state_change = (function manymizers$history$on_app_state_change(app_state,history){
history.setToken(manymizers.history.state__GT_url(app_state));

return manymizers.history.update_state_BANG_();
});
manymizers.history.init = (function manymizers$history$init(app_state){
var history_10013 = (new goog.History());
cljs.core.add_watch(app_state,cljs.core.cst$kw$watch_DASH_change,((function (history_10013){
return (function (){
return manymizers.history.on_app_state_change(app_state,history_10013);
});})(history_10013))
);

var G__10009_10014 = history_10013;
var G__10010_10015 = G__10009_10014;
var G__10011_10016 = goog.history.EventType.NAVIGATE;
var G__10012_10017 = ((function (G__10010_10015,G__10011_10016,G__10009_10014,history_10013){
return (function (p1__10008_SHARP_){
return manymizers.history.url__GT_state(app_state,p1__10008_SHARP_.token);
});})(G__10010_10015,G__10011_10016,G__10009_10014,history_10013))
;
goog.events.listen(G__10010_10015,G__10011_10016,G__10012_10017);

G__10009_10014.setEnabled(true);


return historian.core.record_BANG_(app_state,cljs.core.cst$kw$app_DASH_state);
});
