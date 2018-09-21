// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.components.Toolbar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('manymizers.history');
goog.require('manymizers.store');
goog.require('manymizers.components.Button');
goog.require('manymizers.components.DropdownMenu');
manymizers.components.Toolbar.UndoControls = (function manymizers$components$Toolbar$UndoControls(){
var hist_state = cljs.core.deref(manymizers.history.state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$UndoControls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Button.Button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$can_DASH_undo.cljs$core$IFn$_invoke$arity$1(hist_state)),cljs.core.cst$kw$on_DASH_click,((function (hist_state){
return (function (){
return manymizers.history.undo();
});})(hist_state))
], null),"\u2190 undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Button.Button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$can_DASH_redo.cljs$core$IFn$_invoke$arity$1(hist_state)),cljs.core.cst$kw$on_DASH_click,((function (hist_state){
return (function (){
return manymizers.history.redo();
});})(hist_state))
], null),"redo \u2192"], null)], null);
});
manymizers.components.Toolbar.Toolbar = (function manymizers$components$Toolbar$Toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Toolbar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Toolbar_DASH_undo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Toolbar.UndoControls], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Toolbar_DASH_menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.DropdownMenu.DropdownMenu,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"toolbar-menu",cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,"edit",cljs.core.cst$kw$icon,"",cljs.core.cst$kw$label,["New"].join(''),cljs.core.cst$kw$action,(function (){
return manymizers.store.reset_state_BANG_();
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,"example1",cljs.core.cst$kw$icon,"",cljs.core.cst$kw$action,(function (){
return manymizers.store.set_sample_state_BANG_((0));
}),cljs.core.cst$kw$label,["Example 1"].join('')], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,"example2",cljs.core.cst$kw$icon,"",cljs.core.cst$kw$action,(function (){
return manymizers.store.set_sample_state_BANG_((1));
}),cljs.core.cst$kw$label,["Example 2"].join('')], null)], null)], null)], null)], null)], null);
});
