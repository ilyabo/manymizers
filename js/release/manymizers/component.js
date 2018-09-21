// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('manymizers.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.core');
manymizers.component.validate_props = (function manymizers$component$validate_props(comp_name,types,props){
try{return schema.core.validate(types,props);
}catch (e9698){if((e9698 instanceof Object)){
var e = e9698;
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name),":"].join(''),e.message);
} else {
throw e9698;

}
}});
