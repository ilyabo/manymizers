// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
if(cljs.core.vector_QMARK_(e)){
var G__6528 = cljs.core.first(e);
var G__6528__$1 = (((G__6528 instanceof cljs.core.Keyword))?G__6528.fqn:null);
switch (G__6528__$1) {
case "schema.spec.collection/optional":
var G__6529 = cljs.core.next(e);
var G__6530 = params;
var G__6531 = then;
return (schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3 ? schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3(G__6529,G__6530,G__6531) : schema.spec.collection.sequence_transformer.call(null,G__6529,G__6530,G__6531));

break;
case "schema.spec.collection/remaining":
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(e)))?null:(function(){throw (new Error(schema.utils.format_STAR_("remaining can have only one schema.")))})());
var c = schema.spec.core.sub_checker(cljs.core.second(e),params);
return ((function (_,c,G__6528,G__6528__$1){
return (function (res,x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(c,x));

return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(res,null) : then.call(null,res,null));
});
;})(_,c,G__6528,G__6528__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6528__$1)].join('')));

}
} else {
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return ((function (parser,c){
return (function (res,x){
var G__6532 = res;
var G__6533 = (function (){var G__6534 = ((function (G__6532,parser,c){
return (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});})(G__6532,parser,c))
;
var G__6535 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__6534,G__6535) : parser.call(null,G__6534,G__6535));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__6532,G__6533) : then.call(null,G__6532,G__6533));
});
;})(parser,c))
}
});
schema.spec.collection.sequence_transformer = (function schema$spec$collection$sequence_transformer(elts,params,then){
if(cljs.core.not_any_QMARK_((function (p1__6537_SHARP_){
return ((cljs.core.vector_QMARK_(p1__6537_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__6537_SHARP_),cljs.core.cst$kw$schema$spec$collection_SLASH_remaining)));
}),cljs.core.butlast(elts))){
} else {
throw (new Error(schema.utils.format_STAR_("Remaining schemas must be in tail position.")));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
}),then,cljs.core.reverse(elts));
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
});
schema.spec.collection.subschemas = (function schema$spec$collection$subschemas(elt){
if(cljs.core.map_QMARK_(elt)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(elt)], null);
} else {
if(cljs.core.vector_QMARK_(elt)){
} else {
throw (new Error("Assert failed: (vector? elt)"));
}

if(cljs.core.truth_((function (){var G__6539 = cljs.core.first(elt);
var fexpr__6538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema$spec$collection_SLASH_remaining,null,cljs.core.cst$kw$schema$spec$collection_SLASH_optional,null], null), null);
return (fexpr__6538.cljs$core$IFn$_invoke$arity$1 ? fexpr__6538.cljs$core$IFn$_invoke$arity$1(G__6539) : fexpr__6538.call(null,G__6539));
})())){
} else {
throw (new Error("Assert failed: (#{:schema.spec.collection/remaining :schema.spec.collection/optional} (first elt))"));
}

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(elt)], 0));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k6541,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__6545 = k6541;
var G__6545__$1 = (((G__6545 instanceof cljs.core.Keyword))?G__6545.fqn:null);
switch (G__6545__$1) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6541,else__4206__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.elements], 0));
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = schema.spec.collection.sequence_transformer(self__.elements,params,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
);
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__3949__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = cljs.core.deref(res);
if(cljs.core.truth_((function (){var or__3949__auto____$1 = cljs.core.seq(remaining);
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (constructor$__$1.cljs$core$IFn$_invoke$arity$1 ? constructor$__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : constructor$__$1.call(null,res__$1));
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6540){
var self__ = this;
var G__6540__$1 = this;
return (new cljs.core.RecordIter((0),G__6540__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__6546 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1800698765 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__6546(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6542,other6543){
var self__ = this;
var this6542__$1 = this;
return ((!((other6543 == null))) && ((this6542__$1.constructor === other6543.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6542__$1.pre,other6543.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6542__$1.constructor,other6543.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6542__$1.elements,other6543.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6542__$1.on_error,other6543.on_error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6542__$1.__extmap,other6543.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$elements,null,cljs.core.cst$kw$constructor,null,cljs.core.cst$kw$on_DASH_error,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__6540){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__6547 = cljs.core.keyword_identical_QMARK_;
var expr__6548 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__6550 = cljs.core.cst$kw$pre;
var G__6551 = expr__6548;
return (pred__6547.cljs$core$IFn$_invoke$arity$2 ? pred__6547.cljs$core$IFn$_invoke$arity$2(G__6550,G__6551) : pred__6547.call(null,G__6550,G__6551));
})())){
return (new schema.spec.collection.CollectionSpec(G__6540,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6552 = cljs.core.cst$kw$constructor;
var G__6553 = expr__6548;
return (pred__6547.cljs$core$IFn$_invoke$arity$2 ? pred__6547.cljs$core$IFn$_invoke$arity$2(G__6552,G__6553) : pred__6547.call(null,G__6552,G__6553));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__6540,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6554 = cljs.core.cst$kw$elements;
var G__6555 = expr__6548;
return (pred__6547.cljs$core$IFn$_invoke$arity$2 ? pred__6547.cljs$core$IFn$_invoke$arity$2(G__6554,G__6555) : pred__6547.call(null,G__6554,G__6555));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__6540,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6556 = cljs.core.cst$kw$on_DASH_error;
var G__6557 = expr__6548;
return (pred__6547.cljs$core$IFn$_invoke$arity$2 ? pred__6547.cljs$core$IFn$_invoke$arity$2(G__6556,G__6557) : pred__6547.call(null,G__6556,G__6557));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__6540,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__6540),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$pre,self__.pre,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$constructor,self__.constructor$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$elements,self__.elements,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$on_DASH_error,self__.on_error,null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__6540){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__6540,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$constructor,cljs.core.cst$sym$elements,cljs.core.cst$sym$on_DASH_error], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.spec.collection/CollectionSpec",null,(1),null));
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.spec.collection/CollectionSpec");
});

/**
 * Positional factory function for schema.spec.collection/CollectionSpec.
 */
schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

/**
 * Factory function for schema.spec.collection/CollectionSpec, taking a map of keywords to field values.
 */
schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__6544){
var extmap__4236__auto__ = (function (){var G__6558 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6544,cljs.core.cst$kw$pre,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], 0));
if(cljs.core.record_QMARK_(G__6544)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6558);
} else {
return G__6558;
}
})();
return (new schema.spec.collection.CollectionSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__6544),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(G__6544),cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__6544),cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__6544),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a nested list structure, in which the leaf elements each
 * provide an element schema, parser (allowing for efficient processing of structured
 * collections), and optional error wrapper.  Each item in the list can be a leaf
 * element or an `optional` nested element spec (see below).  In addition, the final
 * element can be a `remaining` schema (see below).
 * 
 * Note that the `optional` carries no semantics with respect to validation;
 * the user must ensure that the parser enforces the desired semantics, which
 * should match the structure of the spec for proper generation.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,constructor$,elements,on_error);
});
/**
 * All remaining elements must match schema s
 */
schema.spec.collection.remaining = (function schema$spec$collection$remaining(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema$spec$collection_SLASH_remaining,s], null);
});
/**
 * If any more elements are present, they must match the elements in 'ss'
 */
schema.spec.collection.optional = (function schema$spec$collection$optional(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6561 = arguments.length;
var i__4532__auto___6562 = (0);
while(true){
if((i__4532__auto___6562 < len__4531__auto___6561)){
args__4534__auto__.push((arguments[i__4532__auto___6562]));

var G__6563 = (i__4532__auto___6562 + (1));
i__4532__auto___6562 = G__6563;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$schema$spec$collection_SLASH_optional,ss));
});

schema.spec.collection.optional.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.spec.collection.optional.cljs$lang$applyTo = (function (seq6560){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6560));
});

schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return schema.spec.collection.remaining(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,(function (coll){
throw (new Error(["should never be not called"].join('')));
})], null));
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
var base = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,parser], null);
if(cljs.core.truth_(required_QMARK_)){
return base;
} else {
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}
});
schema.spec.collection.optional_tail = (function schema$spec$collection$optional_tail(schema__$1,parser,more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,parser], null)], 0)),more);
});
