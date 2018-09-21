// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('manymizers.history');
goog.require('manymizers.store');
goog.require('manymizers.components.DropdownMenu');
goog.require('manymizers.components.Toolbar');
goog.require('manymizers.components.Panes');
manymizers.core.App = (function manymizers$core$App(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$App,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$App_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Toolbar.Toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.ProblemStatement], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$Panes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.FactorsPane], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.OptionsPane], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.components.Panes.OutcomePane], null)], null)], null)], null);
});
manymizers.core.mount_root = (function manymizers$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manymizers.core.App], null),document.getElementById("app"));
});
manymizers.core.init_BANG_ = (function manymizers$core$init_BANG_(){
manymizers.history.init(manymizers.store.app_state);

manymizers.components.DropdownMenu.init();

return manymizers.core.mount_root();
});
