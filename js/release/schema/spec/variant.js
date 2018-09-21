// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e6595){if((e6595 instanceof Object)){
var e_SHARP_ = e6595;
return cljs.core.cst$kw$schema$spec$variant_SLASH_exception;
} else {
throw e6595;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$variant_SLASH_exception,guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return (new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)),(new cljs.core.List(null,schema.utils.value_name(x),null,(1),null)),(2),null));
});})(guard_result,g,c))
,null)),cljs.core.cst$sym$throws_QMARK_));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
});})(g,c))
:c);
var temp__4655__auto__ = cljs.core.cst$kw$wrap_DASH_error.cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4655__auto__)){
var wrap_error = temp__4655__auto__;
return ((function (wrap_error,temp__4655__auto__,g,c,step){
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__4655__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__4655__auto____$1)){
var e = temp__4655__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
;})(wrap_error,temp__4655__auto__,g,c,step))
} else {
return step;
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
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k6597,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__6601 = k6597;
var G__6601__$1 = (((G__6601 instanceof cljs.core.Keyword))?G__6601.fqn:null);
switch (G__6601__$1) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6597,else__4206__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step(o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
var G__6602 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__6602) : self__.err_f.call(null,G__6602));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse(self__.options));
if(cljs.core.truth_(self__.post)){
return ((function (t,this$__$1){
return (function (x){
var or__3949__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var v = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(v))){
return v;
} else {
var or__3949__auto____$1 = (function (){var G__6604 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?v:x);
return (self__.post.cljs$core$IFn$_invoke$arity$1 ? self__.post.cljs$core$IFn$_invoke$arity$1(G__6604) : self__.post.call(null,G__6604));
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return v;
}
}
}
});
;})(t,this$__$1))
} else {
return ((function (t,this$__$1){
return (function (x){
var or__3949__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
;})(t,this$__$1))
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post,self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6596){
var self__ = this;
var G__6596__$1 = this;
return (new cljs.core.RecordIter((0),G__6596__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__6605 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1524878868 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__6605(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6598,other6599){
var self__ = this;
var this6598__$1 = this;
return ((!((other6599 == null))) && ((this6598__$1.constructor === other6599.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6598__$1.pre,other6599.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6598__$1.options,other6599.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6598__$1.err_f,other6599.err_f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6598__$1.post,other6599.post)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6598__$1.__extmap,other6599.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$err_DASH_f,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$options,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__6596){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__6606 = cljs.core.keyword_identical_QMARK_;
var expr__6607 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__6609 = cljs.core.cst$kw$pre;
var G__6610 = expr__6607;
return (pred__6606.cljs$core$IFn$_invoke$arity$2 ? pred__6606.cljs$core$IFn$_invoke$arity$2(G__6609,G__6610) : pred__6606.call(null,G__6609,G__6610));
})())){
return (new schema.spec.variant.VariantSpec(G__6596,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6611 = cljs.core.cst$kw$options;
var G__6612 = expr__6607;
return (pred__6606.cljs$core$IFn$_invoke$arity$2 ? pred__6606.cljs$core$IFn$_invoke$arity$2(G__6611,G__6612) : pred__6606.call(null,G__6611,G__6612));
})())){
return (new schema.spec.variant.VariantSpec(self__.pre,G__6596,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6613 = cljs.core.cst$kw$err_DASH_f;
var G__6614 = expr__6607;
return (pred__6606.cljs$core$IFn$_invoke$arity$2 ? pred__6606.cljs$core$IFn$_invoke$arity$2(G__6613,G__6614) : pred__6606.call(null,G__6613,G__6614));
})())){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__6596,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6615 = cljs.core.cst$kw$post;
var G__6616 = expr__6607;
return (pred__6606.cljs$core$IFn$_invoke$arity$2 ? pred__6606.cljs$core$IFn$_invoke$arity$2(G__6615,G__6616) : pred__6606.call(null,G__6615,G__6616));
})())){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__6596,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__6596),null));
}
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$pre,self__.pre,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$options,self__.options,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$err_DASH_f,self__.err_f,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$post,self__.post,null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__6596){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__6596,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$options,cljs.core.cst$sym$err_DASH_f,cljs.core.cst$sym$post], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.spec.variant/VariantSpec",null,(1),null));
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.spec.variant/VariantSpec");
});

/**
 * Positional factory function for schema.spec.variant/VariantSpec.
 */
schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

/**
 * Factory function for schema.spec.variant/VariantSpec, taking a map of keywords to field values.
 */
schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__6600){
var extmap__4236__auto__ = (function (){var G__6617 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6600,cljs.core.cst$kw$pre,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], 0));
if(cljs.core.record_QMARK_(G__6600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6617);
} else {
return G__6617;
}
})();
return (new schema.spec.variant.VariantSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__6600),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__6600),cljs.core.cst$kw$err_DASH_f.cljs$core$IFn$_invoke$arity$1(G__6600),cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(G__6600),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var G__6620 = arguments.length;
switch (G__6620) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(pre,options,err_f,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__3949__auto__ = err_f;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f,post);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4;

