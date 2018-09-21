// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('historian.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * What will happen in the future...
 */
historian.core.nostradamus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Who should we record?
 */
historian.core.overseer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(atom,k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(historian.core.overseer,cljs.core.assoc,k,atom);
});
historian.core.de_register_atom_BANG_ = (function historian$core$de_register_atom_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function historian$core$snapshot(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$atom,cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),k)),cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys(cljs.core.deref(historian.core.overseer)));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
var remove_ts_fn = (function (p1__9985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9985_SHARP_,cljs.core.cst$kw$timestamp);
});
var old = cljs.core.peek(cljs.core.deref(historian.core.alexandria));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_ts_fn,old),cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_ts_fn,new$));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.alexandria,cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_(snaps))){
historian.core.save_snapshots_BANG_(snaps);

return cljs.core.reset_BANG_(historian.core.nostradamus,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
historian.core.save_prophecies_BANG_ = (function historian$core$save_prophecies_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.nostradamus,cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
 * Restore all the atoms being watched to a previous/different state.
 */
historian.core.restore_BANG_ = (function historian$core$restore_BANG_(snaps){
var _STAR_record_active_STAR_9986 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__9987 = cljs.core.seq(snaps);
var chunk__9988 = null;
var count__9989 = (0);
var i__9990 = (0);
while(true){
if((i__9990 < count__9989)){
var s = chunk__9988.cljs$core$IIndexed$_nth$arity$2(null,i__9990);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s)),cljs.core.cst$kw$atom.cljs$core$IFn$_invoke$arity$1(s));


var G__9991 = seq__9987;
var G__9992 = chunk__9988;
var G__9993 = count__9989;
var G__9994 = (i__9990 + (1));
seq__9987 = G__9991;
chunk__9988 = G__9992;
count__9989 = G__9993;
i__9990 = G__9994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__9987);
if(temp__4657__auto__){
var seq__9987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9987__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__9987__$1);
var G__9995 = cljs.core.chunk_rest(seq__9987__$1);
var G__9996 = c__4351__auto__;
var G__9997 = cljs.core.count(c__4351__auto__);
var G__9998 = (0);
seq__9987 = G__9995;
chunk__9988 = G__9996;
count__9989 = G__9997;
i__9990 = G__9998;
continue;
} else {
var s = cljs.core.first(seq__9987__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s)),cljs.core.cst$kw$atom.cljs$core$IFn$_invoke$arity$1(s));


var G__9999 = cljs.core.next(seq__9987__$1);
var G__10000 = null;
var G__10001 = (0);
var G__10002 = (0);
seq__9987 = G__9999;
chunk__9988 = G__10000;
count__9989 = G__10001;
i__9990 = G__10002;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_9986;
}});
historian.core.watch_BANG_ = (function historian$core$watch_BANG_(atm){
return cljs.core.add_watch(atm,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch,(function (_,___$1,___$2,___$3){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function historian$core$remove_watch_BANG_(a){
return cljs.core.remove_watch(a,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch);
});
historian.core.can_undo_QMARK__STAR_ = (function historian$core$can_undo_QMARK__STAR_(records){
if(cljs.core.next(records)){
return true;
} else {
return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function historian$core$can_redo_QMARK__STAR_(records){
if(cljs.core.truth_(cljs.core.first(records))){
return true;
} else {
return null;
}
});
/**
 * Trigger a record to history. The current state of at least one atom
 *   must be different from the previous one for the record to be
 *   included into history.
 */
historian.core.trigger_record_BANG_ = (function historian$core$trigger_record_BANG_(){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
});
/**
 * The library atom (where all records are kept to enable 'undo') will
 *   be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers). Depending
 *   on where you use this function, you might want to fire a
 *   `trigger-record!' just after.
 *   
 *   Usually, one would also want to use `replace-prophecy!' in order to
 *   replace the 'redo' atom.
 */
historian.core.replace_library_BANG_ = (function historian$core$replace_library_BANG_(new_atom){
return historian.core.alexandria = new_atom;
});
/**
 * The prophecy atom (where all records are kept to enable 'redo')
 *   will be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers).
 * 
 *   Usually used with `replace-library'.
 */
historian.core.replace_prophecy_BANG_ = (function historian$core$replace_prophecy_BANG_(new_atom){
return historian.core.nostradamus = new_atom;
});
/**
 * Add the atom to the overseer watch. When any of the atom under its
 *   watch is modified, it triggers a save of every atom to history (if
 *   any of the atom is different form the last historic state. Return
 *   the atom.
 */
historian.core.record_BANG_ = (function historian$core$record_BANG_(atm,k){
historian.core.register_atom_BANG_(atm,k);

historian.core.watch_BANG_(atm);

historian.core.trigger_record_BANG_();

return atm;
});
/**
 * Remove the atom associated to this key from the overseer watch.
 *   This atom will no longer be watched, nor its state saved to
 *   history.
 */
historian.core.stop_record_BANG_ = (function historian$core$stop_record_BANG_(k){
historian.core.remove_watch_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),k));

return historian.core.de_register_atom_BANG_(k);
});
/**
 * Do we have enough history to undo?
 */
historian.core.can_undo_QMARK_ = (function historian$core$can_undo_QMARK_(){
return historian.core.can_undo_QMARK__STAR_(cljs.core.deref(historian.core.alexandria));
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_(cljs.core.deref(historian.core.nostradamus));
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = cljs.core.deref(historian.core.alexandria);
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_(alex))){
historian.core.save_prophecies_BANG_(cljs.core.peek(alex));

return historian.core.restore_BANG_(cljs.core.peek(cljs.core.reset_BANG_(historian.core.alexandria,cljs.core.pop(alex))));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = cljs.core.deref(historian.core.nostradamus);
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_(nos))){
historian.core.save_snapshots_BANG_(cljs.core.peek(nos));

cljs.core.reset_BANG_(historian.core.nostradamus,cljs.core.pop(nos));

return historian.core.restore_BANG_(cljs.core.peek(nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
cljs.core.reset_BANG_(historian.core.alexandria,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(historian.core.nostradamus,cljs.core.PersistentVector.EMPTY);
});
