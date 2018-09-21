// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.spec.core');
goog.require('schema.spec.leaf');
goog.require('schema.spec.variant');
goog.require('schema.spec.collection');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if(((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null))))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (schema.core.spec[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (schema.core.spec["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if(((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null))))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (schema.core.explain[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (schema.core.explain["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
var fexpr__8613 = schema.core.checker(schema__$1);
return (fexpr__8613.cljs$core$IFn$_invoke$arity$1 ? fexpr__8613.cljs$core$IFn$_invoke$arity$1(x) : fexpr__8613.call(null,x));
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__4657__auto___8614 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__4657__auto___8614)){
var error_8615 = temp__4657__auto___8614;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_8615], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_8615], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var fexpr__8616 = schema.core.validator(schema__$1);
return (fexpr__8616.cljs$core$IFn$_invoke$arity$1 ? fexpr__8616.cljs$core$IFn$_invoke$arity$1(value) : fexpr__8616.call(null,value));
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__8617_SHARP_){
var and__3938__auto__ = !((p1__8617_SHARP_ == null));
if(and__3938__auto__){
var or__3949__auto__ = (klass === p1__8617_SHARP_.constructor);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return p1__8617_SHARP_ instanceof klass;
}
} else {
return and__3938__auto__;
}
}),(function (p1__8618_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$instance_QMARK_,(new cljs.core.List(null,klass,(new cljs.core.List(null,p1__8618_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
});
goog.object.set(schema.core.Schema,"function",true);

var G__8619_8628 = schema.core.spec;
var G__8620_8629 = "function";
var G__8621_8630 = ((function (G__8619_8628,G__8620_8629){
return (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__4655__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4655__auto__)){
var class_schema = temp__4655__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
});})(G__8619_8628,G__8620_8629))
;
goog.object.set(G__8619_8628,G__8620_8629,G__8621_8630);

var G__8622_8631 = schema.core.explain;
var G__8623_8632 = "function";
var G__8624_8633 = ((function (G__8622_8631,G__8623_8632){
return (function (this$){
var temp__4655__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4655__auto__)){
var more_schema = temp__4655__auto__;
return schema.core.explain(more_schema);
} else {
var pred__8625 = cljs.core._EQ_;
var expr__8626 = this$;
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(null,expr__8626) : pred__8625.call(null,null,expr__8626)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(Boolean,expr__8626) : pred__8625.call(null,Boolean,expr__8626)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(Number,expr__8626) : pred__8625.call(null,Number,expr__8626)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(null,expr__8626) : pred__8625.call(null,null,expr__8626)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(Date,expr__8626) : pred__8625.call(null,Date,expr__8626)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__8625.cljs$core$IFn$_invoke$arity$2 ? pred__8625.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__8626) : pred__8625.call(null,cljs.core.UUID,expr__8626)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
});})(G__8622_8631,G__8623_8632))
;
goog.object.set(G__8622_8631,G__8623_8632,G__8624_8633);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8635,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8639 = k8635;
var G__8639__$1 = (((G__8639 instanceof cljs.core.Keyword))?G__8639.fqn:null);
switch (G__8639__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8635,else__4206__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8634){
var self__ = this;
var G__8634__$1 = this;
return (new cljs.core.RecordIter((0),G__8634__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8640 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8640(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8636,other8637){
var self__ = this;
var this8636__$1 = this;
return ((!((other8637 == null))) && ((this8636__$1.constructor === other8637.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8636__$1._,other8637._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8636__$1.__extmap,other8637.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8634){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8641 = cljs.core.keyword_identical_QMARK_;
var expr__8642 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8644 = cljs.core.cst$kw$_;
var G__8645 = expr__8642;
return (pred__8641.cljs$core$IFn$_invoke$arity$2 ? pred__8641.cljs$core$IFn$_invoke$arity$2(G__8644,G__8645) : pred__8641.call(null,G__8644,G__8645));
})())){
return (new schema.core.AnythingSchema(G__8634,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8634),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$_,self__._,null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8634){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__8634,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/AnythingSchema",null,(1),null));
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/AnythingSchema");
});

/**
 * Positional factory function for schema.core/AnythingSchema.
 */
schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

/**
 * Factory function for schema.core/AnythingSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__8638){
var extmap__4236__auto__ = (function (){var G__8646 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8638,cljs.core.cst$kw$_);
if(cljs.core.record_QMARK_(G__8638)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8646);
} else {
return G__8646;
}
})();
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__8638),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8651,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8655 = k8651;
var G__8655__$1 = (((G__8655 instanceof cljs.core.Keyword))?G__8655.fqn:null);
switch (G__8655__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8651,else__4206__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.EqSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8650){
var self__ = this;
var G__8650__$1 = this;
return (new cljs.core.RecordIter((0),G__8650__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8656 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8656(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8652,other8653){
var self__ = this;
var this8652__$1 = this;
return ((!((other8653 == null))) && ((this8652__$1.constructor === other8653.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8652__$1.v,other8653.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8652__$1.__extmap,other8653.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8650){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8657 = cljs.core.keyword_identical_QMARK_;
var expr__8658 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8660 = cljs.core.cst$kw$v;
var G__8661 = expr__8658;
return (pred__8657.cljs$core$IFn$_invoke$arity$2 ? pred__8657.cljs$core$IFn$_invoke$arity$2(G__8660,G__8661) : pred__8657.call(null,G__8660,G__8661));
})())){
return (new schema.core.EqSchema(G__8650,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8650),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$v,self__.v,null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8650){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__8650,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8648_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__8648_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8649_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$_EQ_,(new cljs.core.List(null,self__.v,(new cljs.core.List(null,p1__8649_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$eq,(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/EqSchema",null,(1),null));
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/EqSchema");
});

/**
 * Positional factory function for schema.core/EqSchema.
 */
schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
 * Factory function for schema.core/EqSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__8654){
var extmap__4236__auto__ = (function (){var G__8662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8654,cljs.core.cst$kw$v);
if(cljs.core.record_QMARK_(G__8654)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8662);
} else {
return G__8662;
}
})();
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__8654),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8667,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8671 = k8667;
var G__8671__$1 = (((G__8671 instanceof cljs.core.Keyword))?G__8671.fqn:null);
switch (G__8671__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8667,else__4206__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Isa{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8666){
var self__ = this;
var G__8666__$1 = this;
return (new cljs.core.RecordIter((0),G__8666__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8672 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8672(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8668,other8669){
var self__ = this;
var this8668__$1 = this;
return ((!((other8669 == null))) && ((this8668__$1.constructor === other8669.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8668__$1.h,other8669.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8668__$1.parent,other8669.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8668__$1.__extmap,other8669.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8666){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8673 = cljs.core.keyword_identical_QMARK_;
var expr__8674 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8676 = cljs.core.cst$kw$h;
var G__8677 = expr__8674;
return (pred__8673.cljs$core$IFn$_invoke$arity$2 ? pred__8673.cljs$core$IFn$_invoke$arity$2(G__8676,G__8677) : pred__8673.call(null,G__8676,G__8677));
})())){
return (new schema.core.Isa(G__8666,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8678 = cljs.core.cst$kw$parent;
var G__8679 = expr__8674;
return (pred__8673.cljs$core$IFn$_invoke$arity$2 ? pred__8673.cljs$core$IFn$_invoke$arity$2(G__8678,G__8679) : pred__8673.call(null,G__8678,G__8679));
})())){
return (new schema.core.Isa(self__.h,G__8666,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8666),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$h,self__.h,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8666){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__8666,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8664_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__8664_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__8664_SHARP_,self__.parent);
}
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8665_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$isa_QMARK_,(new cljs.core.List(null,p1__8665_SHARP_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$isa_QMARK_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Isa",null,(1),null));
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Isa");
});

/**
 * Positional factory function for schema.core/Isa.
 */
schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

/**
 * Factory function for schema.core/Isa, taking a map of keywords to field values.
 */
schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__8670){
var extmap__4236__auto__ = (function (){var G__8680 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8670,cljs.core.cst$kw$h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent], 0));
if(cljs.core.record_QMARK_(G__8670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8680);
} else {
return G__8680;
}
})();
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__8670),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__8670),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__8683 = arguments.length;
switch (G__8683) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8688,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8692 = k8688;
var G__8692__$1 = (((G__8692 instanceof cljs.core.Keyword))?G__8692.fqn:null);
switch (G__8692__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8688,else__4206__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.EnumSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8687){
var self__ = this;
var G__8687__$1 = this;
return (new cljs.core.RecordIter((0),G__8687__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8693 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8693(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8689,other8690){
var self__ = this;
var this8689__$1 = this;
return ((!((other8690 == null))) && ((this8689__$1.constructor === other8690.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8689__$1.vs,other8690.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8689__$1.__extmap,other8690.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8687){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8694 = cljs.core.keyword_identical_QMARK_;
var expr__8695 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8697 = cljs.core.cst$kw$vs;
var G__8698 = expr__8695;
return (pred__8694.cljs$core$IFn$_invoke$arity$2 ? pred__8694.cljs$core$IFn$_invoke$arity$2(G__8697,G__8698) : pred__8694.call(null,G__8697,G__8698));
})())){
return (new schema.core.EnumSchema(G__8687,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8687),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vs,self__.vs,null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8687){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__8687,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8685_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__8685_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8686_SHARP_){
return (new cljs.core.List(null,self__.vs,(new cljs.core.List(null,p1__8686_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/EnumSchema",null,(1),null));
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/EnumSchema");
});

/**
 * Positional factory function for schema.core/EnumSchema.
 */
schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

/**
 * Factory function for schema.core/EnumSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__8691){
var extmap__4236__auto__ = (function (){var G__8699 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8691,cljs.core.cst$kw$vs);
if(cljs.core.record_QMARK_(G__8691)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8699);
} else {
return G__8699;
}
})();
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__8691),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8702 = arguments.length;
var i__4532__auto___8703 = (0);
while(true){
if((i__4532__auto___8703 < len__4531__auto___8702)){
args__4534__auto__.push((arguments[i__4532__auto___8703]));

var G__8704 = (i__4532__auto___8703 + (1));
i__4532__auto___8703 = G__8704;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.core.enum$.cljs$lang$applyTo = (function (seq8701){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8701));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8707,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8711 = k8707;
var G__8711__$1 = (((G__8711 instanceof cljs.core.Keyword))?G__8711.fqn:null);
switch (G__8711__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8707,else__4206__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Predicate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8706){
var self__ = this;
var G__8706__$1 = this;
return (new cljs.core.RecordIter((0),G__8706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8712 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8712(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8708,other8709){
var self__ = this;
var this8708__$1 = this;
return ((!((other8709 == null))) && ((this8708__$1.constructor === other8709.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8708__$1.p_QMARK_,other8709.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8708__$1.pred_name,other8709.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8708__$1.__extmap,other8709.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8706){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8713 = cljs.core.keyword_identical_QMARK_;
var expr__8714 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8716 = cljs.core.cst$kw$p_QMARK_;
var G__8717 = expr__8714;
return (pred__8713.cljs$core$IFn$_invoke$arity$2 ? pred__8713.cljs$core$IFn$_invoke$arity$2(G__8716,G__8717) : pred__8713.call(null,G__8716,G__8717));
})())){
return (new schema.core.Predicate(G__8706,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8718 = cljs.core.cst$kw$pred_DASH_name;
var G__8719 = expr__8714;
return (pred__8713.cljs$core$IFn$_invoke$arity$2 ? pred__8713.cljs$core$IFn$_invoke$arity$2(G__8718,G__8719) : pred__8713.call(null,G__8718,G__8719));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__8706,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8706),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pred_DASH_name,self__.pred_name,null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8706){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__8706,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__8705_SHARP_){
return (new cljs.core.List(null,self__.pred_name,(new cljs.core.List(null,p1__8705_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return (new cljs.core.List(null,cljs.core.cst$sym$pred,(new cljs.core.List(null,self__.pred_name,null,(1),null)),(2),null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Predicate",null,(1),null));
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Predicate");
});

/**
 * Positional factory function for schema.core/Predicate.
 */
schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

/**
 * Factory function for schema.core/Predicate, taking a map of keywords to field values.
 */
schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__8710){
var extmap__4236__auto__ = (function (){var G__8720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8710,cljs.core.cst$kw$p_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_DASH_name], 0));
if(cljs.core.record_QMARK_(G__8710)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8720);
} else {
return G__8720;
}
})();
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8710),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__8710),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__8723 = arguments.length;
switch (G__8723) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8728,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8732 = k8728;
var G__8732__$1 = (((G__8732 instanceof cljs.core.Keyword))?G__8732.fqn:null);
switch (G__8732__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8728,else__4206__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Protocol{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8727){
var self__ = this;
var G__8727__$1 = this;
return (new cljs.core.RecordIter((0),G__8727__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8733 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8733(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8729,other8730){
var self__ = this;
var this8729__$1 = this;
return ((!((other8730 == null))) && ((this8729__$1.constructor === other8730.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8729__$1.p,other8730.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8729__$1.__extmap,other8730.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8727){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8734 = cljs.core.keyword_identical_QMARK_;
var expr__8735 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8737 = cljs.core.cst$kw$p;
var G__8738 = expr__8735;
return (pred__8734.cljs$core$IFn$_invoke$arity$2 ? pred__8734.cljs$core$IFn$_invoke$arity$2(G__8737,G__8738) : pred__8734.call(null,G__8737,G__8738));
})())){
return (new schema.core.Protocol(G__8727,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8727),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$p,self__.p,null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8727){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__8727,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8725_SHARP_){
var fexpr__8739 = cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__8739.cljs$core$IFn$_invoke$arity$1 ? fexpr__8739.cljs$core$IFn$_invoke$arity$1(p1__8725_SHARP_) : fexpr__8739.call(null,p1__8725_SHARP_));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8726_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$satisfies_QMARK_,(new cljs.core.List(null,schema.core.protocol_name(this$__$1),(new cljs.core.List(null,p1__8726_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$protocol,(new cljs.core.List(null,schema.core.protocol_name(this$__$1),null,(1),null)),(2),null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Protocol",null,(1),null));
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Protocol");
});

/**
 * Positional factory function for schema.core/Protocol.
 */
schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

/**
 * Factory function for schema.core/Protocol, taking a map of keywords to field values.
 */
schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__8731){
var extmap__4236__auto__ = (function (){var G__8740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8731,cljs.core.cst$kw$p);
if(cljs.core.record_QMARK_(G__8731)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8740);
} else {
return G__8740;
}
})();
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__8731),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$string_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8742_SHARP_){
return cljs.core.re_find(this$__$1,p1__8742_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8743_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$re_DASH_find,(new cljs.core.List(null,schema.core.explain(this$__$1),(new cljs.core.List(null,p1__8743_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join('').slice((1),(-1))),"\""].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core.t_schema$core8746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core8746 = (function (meta8747){
this.meta8747 = meta8747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.core.t_schema$core8746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8748,meta8747__$1){
var self__ = this;
var _8748__$1 = this;
return (new schema.core.t_schema$core8746(meta8747__$1));
});

schema.core.t_schema$core8746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8748){
var self__ = this;
var _8748__$1 = this;
return self__.meta8747;
});

schema.core.t_schema$core8746.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.t_schema$core8746.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__8744_SHARP_){
return (p1__8744_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8745_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$instance_QMARK_,(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_RegExp,(new cljs.core.List(null,p1__8745_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
));
});

schema.core.t_schema$core8746.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core8746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta8747], null);
});

schema.core.t_schema$core8746.cljs$lang$type = true;

schema.core.t_schema$core8746.cljs$lang$ctorStr = "schema.core/t_schema$core8746";

schema.core.t_schema$core8746.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"schema.core/t_schema$core8746");
});

/**
 * Positional factory function for schema.core/t_schema$core8746.
 */
schema.core.__GT_t_schema$core8746 = (function schema$core$__GT_t_schema$core8746(meta8747){
return (new schema.core.t_schema$core8746(meta8747));
});

}

return (new schema.core.t_schema$core8746(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8750,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8754 = k8750;
var G__8754__$1 = (((G__8754 instanceof cljs.core.Keyword))?G__8754.fqn:null);
switch (G__8754__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8750,else__4206__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Maybe{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8749){
var self__ = this;
var G__8749__$1 = this;
return (new cljs.core.RecordIter((0),G__8749__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8755 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8755(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8751,other8752){
var self__ = this;
var this8751__$1 = this;
return ((!((other8752 == null))) && ((this8751__$1.constructor === other8752.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8751__$1.schema,other8752.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8751__$1.__extmap,other8752.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8749){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8756 = cljs.core.keyword_identical_QMARK_;
var expr__8757 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8759 = cljs.core.cst$kw$schema;
var G__8760 = expr__8757;
return (pred__8756.cljs$core$IFn$_invoke$arity$2 ? pred__8756.cljs$core$IFn$_invoke$arity$2(G__8759,G__8760) : pred__8756.call(null,G__8759,G__8760));
})())){
return (new schema.core.Maybe(G__8749,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8749),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8749){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__8749,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$maybe,(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Maybe",null,(1),null));
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Maybe");
});

/**
 * Positional factory function for schema.core/Maybe.
 */
schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Maybe, taking a map of keywords to field values.
 */
schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__8753){
var extmap__4236__auto__ = (function (){var G__8761 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8753,cljs.core.cst$kw$schema);
if(cljs.core.record_QMARK_(G__8753)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8761);
} else {
return G__8761;
}
})();
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__8753),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8765,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8769 = k8765;
var G__8769__$1 = (((G__8769 instanceof cljs.core.Keyword))?G__8769.fqn:null);
switch (G__8769__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8765,else__4206__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.NamedSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8764){
var self__ = this;
var G__8764__$1 = this;
return (new cljs.core.RecordIter((0),G__8764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8770 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8770(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8766,other8767){
var self__ = this;
var this8766__$1 = this;
return ((!((other8767 == null))) && ((this8766__$1.constructor === other8767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8766__$1.schema,other8767.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8766__$1.name,other8767.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8766__$1.__extmap,other8767.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8764){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8771 = cljs.core.keyword_identical_QMARK_;
var expr__8772 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8774 = cljs.core.cst$kw$schema;
var G__8775 = expr__8772;
return (pred__8771.cljs$core$IFn$_invoke$arity$2 ? pred__8771.cljs$core$IFn$_invoke$arity$2(G__8774,G__8775) : pred__8771.call(null,G__8774,G__8775));
})())){
return (new schema.core.NamedSchema(G__8764,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8776 = cljs.core.cst$kw$name;
var G__8777 = expr__8772;
return (pred__8771.cljs$core$IFn$_invoke$arity$2 ? pred__8771.cljs$core$IFn$_invoke$arity$2(G__8776,G__8777) : pred__8771.call(null,G__8776,G__8777));
})())){
return (new schema.core.NamedSchema(self__.schema,G__8764,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8764),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8764){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__8764,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__8763_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__8763_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$named,(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.name,null,(1),null)),(2),null)),(3),null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/NamedSchema",null,(1),null));
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/NamedSchema");
});

/**
 * Positional factory function for schema.core/NamedSchema.
 */
schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
 * Factory function for schema.core/NamedSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__8768){
var extmap__4236__auto__ = (function (){var G__8778 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8768,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name], 0));
if(cljs.core.record_QMARK_(G__8768)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8778);
} else {
return G__8778;
}
})();
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__8768),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__8768),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8782,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8786 = k8782;
var G__8786__$1 = (((G__8786 instanceof cljs.core.Keyword))?G__8786.fqn:null);
switch (G__8786__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8782,else__4206__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Either{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8781){
var self__ = this;
var G__8781__$1 = this;
return (new cljs.core.RecordIter((0),G__8781__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8787 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8787(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8783,other8784){
var self__ = this;
var this8783__$1 = this;
return ((!((other8784 == null))) && ((this8783__$1.constructor === other8784.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8783__$1.schemas,other8784.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8783__$1.__extmap,other8784.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8781){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8788 = cljs.core.keyword_identical_QMARK_;
var expr__8789 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8791 = cljs.core.cst$kw$schemas;
var G__8792 = expr__8789;
return (pred__8788.cljs$core$IFn$_invoke$arity$2 ? pred__8788.cljs$core$IFn$_invoke$arity$2(G__8791,G__8792) : pred__8788.call(null,G__8791,G__8792));
})())){
return (new schema.core.Either(G__8781,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8781),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schemas,self__.schemas,null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8781){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__8781,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4324__auto__ = ((function (this$__$1){
return (function schema$core$iter__8793(s__8794){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8794__$1 = s__8794;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__8794__$1);
if(temp__4657__auto__){
var s__8794__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8794__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8794__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8796 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8795 = (0);
while(true){
if((i__8795 < size__4323__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8795);
cljs.core.chunk_append(b__8796,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__8799 = (i__8795 + (1));
i__8795 = G__8799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8796),schema$core$iter__8793(cljs.core.chunk_rest(s__8794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8796),null);
}
} else {
var s = cljs.core.first(s__8794__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__8793(cljs.core.rest(s__8794__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4324__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__8780_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_,(new cljs.core.List(null,p1__8780_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Either",null,(1),null));
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Either");
});

/**
 * Positional factory function for schema.core/Either.
 */
schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Either, taking a map of keywords to field values.
 */
schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__8785){
var extmap__4236__auto__ = (function (){var G__8797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8785,cljs.core.cst$kw$schemas);
if(cljs.core.record_QMARK_(G__8785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8797);
} else {
return G__8797;
}
})();
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__8785),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8801 = arguments.length;
var i__4532__auto___8802 = (0);
while(true){
if((i__4532__auto___8802 < len__4531__auto___8801)){
args__4534__auto__.push((arguments[i__4532__auto___8802]));

var G__8803 = (i__4532__auto___8802 + (1));
i__4532__auto___8802 = G__8803;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.core.either.cljs$lang$applyTo = (function (seq8800){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8800));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8806,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8810 = k8806;
var G__8810__$1 = (((G__8810 instanceof cljs.core.Keyword))?G__8810.fqn:null);
switch (G__8810__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8806,else__4206__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8805){
var self__ = this;
var G__8805__$1 = this;
return (new cljs.core.RecordIter((0),G__8805__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8811 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8811(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8807,other8808){
var self__ = this;
var this8807__$1 = this;
return ((!((other8808 == null))) && ((this8807__$1.constructor === other8808.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8807__$1.preds_and_schemas,other8808.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8807__$1.error_symbol,other8808.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8807__$1.__extmap,other8808.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8805){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8812 = cljs.core.keyword_identical_QMARK_;
var expr__8813 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8815 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__8816 = expr__8813;
return (pred__8812.cljs$core$IFn$_invoke$arity$2 ? pred__8812.cljs$core$IFn$_invoke$arity$2(G__8815,G__8816) : pred__8812.call(null,G__8815,G__8816));
})())){
return (new schema.core.ConditionalSchema(G__8805,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8817 = cljs.core.cst$kw$error_DASH_symbol;
var G__8818 = expr__8813;
return (pred__8812.cljs$core$IFn$_invoke$arity$2 ? pred__8812.cljs$core$IFn$_invoke$arity$2(G__8817,G__8818) : pred__8812.call(null,G__8817,G__8818));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__8805,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8805),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol,null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8805){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__8805,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4324__auto__ = ((function (this$__$1){
return (function schema$core$iter__8819(s__8820){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8820__$1 = s__8820;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__8820__$1);
if(temp__4657__auto__){
var s__8820__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8820__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8820__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8822 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8821 = (0);
while(true){
if((i__8821 < size__4323__auto__)){
var vec__8823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8821);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8823,(1),null);
cljs.core.chunk_append(b__8822,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__8835 = (i__8821 + (1));
i__8821 = G__8835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8822),schema$core$iter__8819(cljs.core.chunk_rest(s__8820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8822),null);
}
} else {
var vec__8826 = cljs.core.first(s__8820__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__8819(cljs.core.rest(s__8820__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4324__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__8804_SHARP_){
return (new cljs.core.List(null,(function (){var or__3949__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})(),(new cljs.core.List(null,p1__8804_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__8829){
var vec__8830 = p__8829;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8830,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8830,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/ConditionalSchema",null,(1),null));
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/ConditionalSchema");
});

/**
 * Positional factory function for schema.core/ConditionalSchema.
 */
schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

/**
 * Factory function for schema.core/ConditionalSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__8809){
var extmap__4236__auto__ = (function (){var G__8833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8809,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_symbol], 0));
if(cljs.core.record_QMARK_(G__8809)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8833);
} else {
return G__8833;
}
})();
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__8809),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__8809),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8847 = arguments.length;
var i__4532__auto___8848 = (0);
while(true){
if((i__4532__auto___8848 < len__4531__auto___8847)){
args__4534__auto__.push((arguments[i__4532__auto___8848]));

var G__8849 = (i__4532__auto___8848 + (1));
i__4532__auto___8848 = G__8849;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if(((cljs.core.seq(preds_and_schemas)) && (((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__4324__auto__ = (function schema$core$iter__8837(s__8838){
return (new cljs.core.LazySeq(null,(function (){
var s__8838__$1 = s__8838;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__8838__$1);
if(temp__4657__auto__){
var s__8838__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8838__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8838__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8840 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8839 = (0);
while(true){
if((i__8839 < size__4323__auto__)){
var vec__8841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8839);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(1),null);
cljs.core.chunk_append(b__8840,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__8850 = (i__8839 + (1));
i__8839 = G__8850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8840),schema$core$iter__8837(cljs.core.chunk_rest(s__8838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8840),null);
}
} else {
var vec__8844 = cljs.core.first(s__8838__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8844,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8844,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__8837(cljs.core.rest(s__8838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.core.conditional.cljs$lang$applyTo = (function (seq8836){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8836));
});


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if(((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null))))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (schema.core.precondition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (schema.core.precondition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__4324__auto__ = ((function (this$__$1){
return (function schema$core$iter__8851(s__8852){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8852__$1 = s__8852;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__8852__$1);
if(temp__4657__auto__){
var s__8852__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8852__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8852__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8854 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8853 = (0);
while(true){
if((i__8853 < size__4323__auto__)){
var map__8855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8853);
var map__8855__$1 = ((((!((map__8855 == null)))?(((((map__8855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8855):map__8855);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8855__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__8854,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__8859 = (i__8853 + (1));
i__8853 = G__8859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8854),schema$core$iter__8851(cljs.core.chunk_rest(s__8852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8854),null);
}
} else {
var map__8857 = cljs.core.first(s__8852__$2);
var map__8857__$1 = ((((!((map__8857 == null)))?(((((map__8857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8857):map__8857);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8857__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__8851(cljs.core.rest(s__8852__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4324__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8862,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8866 = k8862;
var G__8866__$1 = (((G__8866 instanceof cljs.core.Keyword))?G__8866.fqn:null);
switch (G__8866__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8862,else__4206__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.CondPre{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8861){
var self__ = this;
var G__8861__$1 = this;
return (new cljs.core.RecordIter((0),G__8861__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8867 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8867(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8863,other8864){
var self__ = this;
var this8863__$1 = this;
return ((!((other8864 == null))) && ((this8863__$1.constructor === other8864.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8863__$1.schemas,other8864.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8863__$1.__extmap,other8864.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8861){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8868 = cljs.core.keyword_identical_QMARK_;
var expr__8869 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8871 = cljs.core.cst$kw$schemas;
var G__8872 = expr__8869;
return (pred__8868.cljs$core$IFn$_invoke$arity$2 ? pred__8868.cljs$core$IFn$_invoke$arity$2(G__8871,G__8872) : pred__8868.call(null,G__8871,G__8872));
})())){
return (new schema.core.CondPre(G__8861,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8861),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schemas,self__.schemas,null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8861){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__8861,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__4324__auto__ = ((function (this$__$1){
return (function schema$core$iter__8873(s__8874){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8874__$1 = s__8874;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__8874__$1);
if(temp__4657__auto__){
var s__8874__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8874__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__8874__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__8876 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__8875 = (0);
while(true){
if((i__8875 < size__4323__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__8875);
cljs.core.chunk_append(b__8876,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__8879 = (i__8875 + (1));
i__8875 = G__8879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8876),schema$core$iter__8873(cljs.core.chunk_rest(s__8874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8876),null);
}
} else {
var s = cljs.core.first(s__8874__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__8873(cljs.core.rest(s__8874__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4324__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__8860_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_,(new cljs.core.List(null,p1__8860_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/CondPre",null,(1),null));
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/CondPre");
});

/**
 * Positional factory function for schema.core/CondPre.
 */
schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

/**
 * Factory function for schema.core/CondPre, taking a map of keywords to field values.
 */
schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__8865){
var extmap__4236__auto__ = (function (){var G__8877 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8865,cljs.core.cst$kw$schemas);
if(cljs.core.record_QMARK_(G__8865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8877);
} else {
return G__8877;
}
})();
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__8865),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8881 = arguments.length;
var i__4532__auto___8882 = (0);
while(true){
if((i__4532__auto___8882 < len__4531__auto___8881)){
args__4534__auto__.push((arguments[i__4532__auto___8882]));

var G__8883 = (i__4532__auto___8882 + (1));
i__4532__auto___8882 = G__8883;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.core.cond_pre.cljs$lang$applyTo = (function (seq8880){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8880));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8886,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8890 = k8886;
var G__8890__$1 = (((G__8890 instanceof cljs.core.Keyword))?G__8890.fqn:null);
switch (G__8890__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8886,else__4206__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Constrained{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8885){
var self__ = this;
var G__8885__$1 = this;
return (new cljs.core.RecordIter((0),G__8885__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8891 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8891(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8887,other8888){
var self__ = this;
var this8887__$1 = this;
return ((!((other8888 == null))) && ((this8887__$1.constructor === other8888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8887__$1.schema,other8888.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8887__$1.postcondition,other8888.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8887__$1.post_name,other8888.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8887__$1.__extmap,other8888.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8885){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8892 = cljs.core.keyword_identical_QMARK_;
var expr__8893 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8895 = cljs.core.cst$kw$schema;
var G__8896 = expr__8893;
return (pred__8892.cljs$core$IFn$_invoke$arity$2 ? pred__8892.cljs$core$IFn$_invoke$arity$2(G__8895,G__8896) : pred__8892.call(null,G__8895,G__8896));
})())){
return (new schema.core.Constrained(G__8885,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8897 = cljs.core.cst$kw$postcondition;
var G__8898 = expr__8893;
return (pred__8892.cljs$core$IFn$_invoke$arity$2 ? pred__8892.cljs$core$IFn$_invoke$arity$2(G__8897,G__8898) : pred__8892.call(null,G__8897,G__8898));
})())){
return (new schema.core.Constrained(self__.schema,G__8885,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8899 = cljs.core.cst$kw$post_DASH_name;
var G__8900 = expr__8893;
return (pred__8892.cljs$core$IFn$_invoke$arity$2 ? pred__8892.cljs$core$IFn$_invoke$arity$2(G__8899,G__8900) : pred__8892.call(null,G__8899,G__8900));
})())){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__8885,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8885),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$postcondition,self__.postcondition,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$post_DASH_name,self__.post_name,null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8885){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__8885,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__8884_SHARP_){
return (new cljs.core.List(null,self__.post_name,(new cljs.core.List(null,p1__8884_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$constrained,(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.post_name,null,(1),null)),(2),null)),(3),null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Constrained",null,(1),null));
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Constrained");
});

/**
 * Positional factory function for schema.core/Constrained.
 */
schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

/**
 * Factory function for schema.core/Constrained, taking a map of keywords to field values.
 */
schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__8889){
var extmap__4236__auto__ = (function (){var G__8901 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8889,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0));
if(cljs.core.record_QMARK_(G__8889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8901);
} else {
return G__8901;
}
})();
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__8889),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__8889),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__8889),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__8904 = arguments.length;
switch (G__8904) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8908,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8912 = k8908;
var G__8912__$1 = (((G__8912 instanceof cljs.core.Keyword))?G__8912.fqn:null);
switch (G__8912__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8908,else__4206__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__8913 = (function (){var or__3949__auto__ = tx;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8913) : f.call(null,G__8913));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__8906_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__8906_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Both{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8907){
var self__ = this;
var G__8907__$1 = this;
return (new cljs.core.RecordIter((0),G__8907__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8914 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8914(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8909,other8910){
var self__ = this;
var this8909__$1 = this;
return ((!((other8910 == null))) && ((this8909__$1.constructor === other8910.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8909__$1.schemas,other8910.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8909__$1.__extmap,other8910.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8907){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8915 = cljs.core.keyword_identical_QMARK_;
var expr__8916 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8918 = cljs.core.cst$kw$schemas;
var G__8919 = expr__8916;
return (pred__8915.cljs$core$IFn$_invoke$arity$2 ? pred__8915.cljs$core$IFn$_invoke$arity$2(G__8918,G__8919) : pred__8915.call(null,G__8918,G__8919));
})())){
return (new schema.core.Both(G__8907,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8907),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schemas,self__.schemas,null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8907){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__8907,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Both",null,(1),null));
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Both");
});

/**
 * Positional factory function for schema.core/Both.
 */
schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Both, taking a map of keywords to field values.
 */
schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__8911){
var extmap__4236__auto__ = (function (){var G__8920 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8911,cljs.core.cst$kw$schemas);
if(cljs.core.record_QMARK_(G__8911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8920);
} else {
return G__8920;
}
})();
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__8911),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8923 = arguments.length;
var i__4532__auto___8924 = (0);
while(true){
if((i__4532__auto___8924 < len__4531__auto___8923)){
args__4534__auto__.push((arguments[i__4532__auto___8924]));

var G__8925 = (i__4532__auto___8924 + (1));
i__4532__auto___8924 = G__8925;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
schema.core.both.cljs$lang$applyTo = (function (seq8922){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8922));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__8926 = cljs.core.meta(v);
var map__8926__$1 = ((((!((map__8926 == null)))?(((((map__8926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8926):map__8926);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8926__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8926__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8929,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8933 = k8929;
var G__8933__$1 = (((G__8933 instanceof cljs.core.Keyword))?G__8933.fqn:null);
switch (G__8933__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8929,else__4206__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Recursive{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8928){
var self__ = this;
var G__8928__$1 = this;
return (new cljs.core.RecordIter((0),G__8928__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8934 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8934(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8930,other8931){
var self__ = this;
var this8930__$1 = this;
return ((!((other8931 == null))) && ((this8930__$1.constructor === other8931.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8930__$1.derefable,other8931.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8930__$1.__extmap,other8931.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8928){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8935 = cljs.core.keyword_identical_QMARK_;
var expr__8936 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8938 = cljs.core.cst$kw$derefable;
var G__8939 = expr__8936;
return (pred__8935.cljs$core$IFn$_invoke$arity$2 ? pred__8935.cljs$core$IFn$_invoke$arity$2(G__8938,G__8939) : pred__8935.call(null,G__8938,G__8939));
})())){
return (new schema.core.Recursive(G__8928,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8928),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$derefable,self__.derefable,null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8928){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__8928,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.deref(self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$recursive,(new cljs.core.List(null,(((self__.derefable instanceof cljs.core.Var))?(new cljs.core.List(null,cljs.core.cst$sym$var,(new cljs.core.List(null,schema.core.var_name(self__.derefable),null,(1),null)),(2),null)):cljs.core.cst$sym$$$$),null,(1),null)),(2),null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Recursive",null,(1),null));
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Recursive");
});

/**
 * Positional factory function for schema.core/Recursive.
 */
schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

/**
 * Factory function for schema.core/Recursive, taking a map of keywords to field values.
 */
schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__8932){
var extmap__4236__auto__ = (function (){var G__8940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8932,cljs.core.cst$kw$derefable);
if(cljs.core.record_QMARK_(G__8932)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8940);
} else {
return G__8940;
}
})();
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__8932),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8945,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8949 = k8945;
var G__8949__$1 = (((G__8949 instanceof cljs.core.Keyword))?G__8949.fqn:null);
switch (G__8949__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8945,else__4206__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Atomic{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8944){
var self__ = this;
var G__8944__$1 = this;
return (new cljs.core.RecordIter((0),G__8944__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8950 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8950(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8946,other8947){
var self__ = this;
var this8946__$1 = this;
return ((!((other8947 == null))) && ((this8946__$1.constructor === other8947.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8946__$1.schema,other8947.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8946__$1.__extmap,other8947.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8944){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8951 = cljs.core.keyword_identical_QMARK_;
var expr__8952 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8954 = cljs.core.cst$kw$schema;
var G__8955 = expr__8952;
return (pred__8951.cljs$core$IFn$_invoke$arity$2 ? pred__8951.cljs$core$IFn$_invoke$arity$2(G__8954,G__8955) : pred__8951.call(null,G__8954,G__8955));
})())){
return (new schema.core.Atomic(G__8944,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8944),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8944){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__8944,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$atom_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__8956_8959 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__8956_8959) : item_fn.call(null,G__8956_8959));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$atom,(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Atomic",null,(1),null));
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Atomic");
});

/**
 * Positional factory function for schema.core/Atomic.
 */
schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Atomic, taking a map of keywords to field values.
 */
schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__8948){
var extmap__4236__auto__ = (function (){var G__8957 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8948,cljs.core.cst$kw$schema);
if(cljs.core.record_QMARK_(G__8948)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8957);
} else {
return G__8957;
}
})();
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__8948),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8961,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8965 = k8961;
var G__8965__$1 = (((G__8965 instanceof cljs.core.Keyword))?G__8965.fqn:null);
switch (G__8965__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8961,else__4206__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.RequiredKey{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8960){
var self__ = this;
var G__8960__$1 = this;
return (new cljs.core.RecordIter((0),G__8960__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8966 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8966(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8962,other8963){
var self__ = this;
var this8962__$1 = this;
return ((!((other8963 == null))) && ((this8962__$1.constructor === other8963.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8962__$1.k,other8963.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8962__$1.__extmap,other8963.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8960){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8967 = cljs.core.keyword_identical_QMARK_;
var expr__8968 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8970 = cljs.core.cst$kw$k;
var G__8971 = expr__8968;
return (pred__8967.cljs$core$IFn$_invoke$arity$2 ? pred__8967.cljs$core$IFn$_invoke$arity$2(G__8970,G__8971) : pred__8967.call(null,G__8970,G__8971));
})())){
return (new schema.core.RequiredKey(G__8960,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8960),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$k,self__.k,null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8960){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__8960,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/RequiredKey",null,(1),null));
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/RequiredKey");
});

/**
 * Positional factory function for schema.core/RequiredKey.
 */
schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

/**
 * Factory function for schema.core/RequiredKey, taking a map of keywords to field values.
 */
schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__8964){
var extmap__4236__auto__ = (function (){var G__8972 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8964,cljs.core.cst$kw$k);
if(cljs.core.record_QMARK_(G__8964)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8972);
} else {
return G__8972;
}
})();
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__8964),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return (((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8975,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8979 = k8975;
var G__8979__$1 = (((G__8979 instanceof cljs.core.Keyword))?G__8979.fqn:null);
switch (G__8979__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8975,else__4206__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.OptionalKey{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8974){
var self__ = this;
var G__8974__$1 = this;
return (new cljs.core.RecordIter((0),G__8974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8980 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8980(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8976,other8977){
var self__ = this;
var this8976__$1 = this;
return ((!((other8977 == null))) && ((this8976__$1.constructor === other8977.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8976__$1.k,other8977.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8976__$1.__extmap,other8977.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8974){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8981 = cljs.core.keyword_identical_QMARK_;
var expr__8982 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__8984 = cljs.core.cst$kw$k;
var G__8985 = expr__8982;
return (pred__8981.cljs$core$IFn$_invoke$arity$2 ? pred__8981.cljs$core$IFn$_invoke$arity$2(G__8984,G__8985) : pred__8981.call(null,G__8984,G__8985));
})())){
return (new schema.core.OptionalKey(G__8974,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8974),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$k,self__.k,null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8974){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__8974,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/OptionalKey",null,(1),null));
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/OptionalKey");
});

/**
 * Positional factory function for schema.core/OptionalKey.
 */
schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

/**
 * Factory function for schema.core/OptionalKey, taking a map of keywords to field values.
 */
schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__8978){
var extmap__4236__auto__ = (function (){var G__8986 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8978,cljs.core.cst$kw$k);
if(cljs.core.record_QMARK_(G__8978)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8986);
} else {
return G__8986;
}
})();
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__8978),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__3949__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__8988){
var vec__8989 = p__8988;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(1),null);
var coll = vec__8989;
return cljs.core.vec(coll);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8993,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8997 = k8993;
var G__8997__$1 = (((G__8997 instanceof cljs.core.Keyword))?G__8997.fqn:null);
switch (G__8997__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8993,else__4206__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.MapEntry{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8992){
var self__ = this;
var G__8992__$1 = this;
return (new cljs.core.RecordIter((0),G__8992__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__8998 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__8998(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8994,other8995){
var self__ = this;
var this8994__$1 = this;
return ((!((other8995 == null))) && ((this8994__$1.constructor === other8995.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8994__$1.key_schema,other8995.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8994__$1.val_schema,other8995.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8994__$1.__extmap,other8995.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8992){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8999 = cljs.core.keyword_identical_QMARK_;
var expr__9000 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9002 = cljs.core.cst$kw$key_DASH_schema;
var G__9003 = expr__9000;
return (pred__8999.cljs$core$IFn$_invoke$arity$2 ? pred__8999.cljs$core$IFn$_invoke$arity$2(G__9002,G__9003) : pred__8999.call(null,G__9002,G__9003));
})())){
return (new schema.core.MapEntry(G__8992,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9004 = cljs.core.cst$kw$val_DASH_schema;
var G__9005 = expr__9000;
return (pred__8999.cljs$core$IFn$_invoke$arity$2 ? pred__8999.cljs$core$IFn$_invoke$arity$2(G__9004,G__9005) : pred__8999.call(null,G__9004,G__9005));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__8992,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__8992),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$key_DASH_schema,self__.key_schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$val_DASH_schema,self__.val_schema,null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8992){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__8992,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__9006_9018 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9006_9018) : item_fn.call(null,G__9006_9018));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__9007_9019 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9007_9019) : item_fn.call(null,G__9007_9019));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__9008,p__9009,_){
var vec__9010 = p__9008;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9010,(0),null);
var vec__9013 = p__9009;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9013,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9013,(1),null);
var temp__4655__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__4655__auto__)){
var k_err = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$map_DASH_entry,(new cljs.core.List(null,schema.core.explain(self__.key_schema),(new cljs.core.List(null,schema.core.explain(self__.val_schema),null,(1),null)),(2),null)),(3),null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/MapEntry",null,(1),null));
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/MapEntry");
});

/**
 * Positional factory function for schema.core/MapEntry.
 */
schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

/**
 * Factory function for schema.core/MapEntry, taking a map of keywords to field values.
 */
schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__8996){
var extmap__4236__auto__ = (function (){var G__9016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8996,cljs.core.cst$kw$key_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val_DASH_schema], 0));
if(cljs.core.record_QMARK_(G__8996)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9016);
} else {
return G__9016;
}
})();
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__8996),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__8996),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return (new cljs.core.List(null,(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null)),(new cljs.core.List(null,schema.core.explicit_schema_key(kspec),null,(1),null)),(2),null));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_9033 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__9020_SHARP_){
return (cljs.core.count(p1__9020_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_9033)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_9033], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4324__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__9021(s__9022){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__9022__$1 = s__9022;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__9022__$1);
if(temp__4657__auto__){
var s__9022__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9022__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9022__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9024 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9023 = (0);
while(true){
if((i__9023 < size__4323__auto__)){
var vec__9025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9023);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9025,(1),null);
cljs.core.chunk_append(b__9024,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__9023,rk,required_QMARK_,vec__9025,k,v,c__4322__auto__,size__4323__auto__,b__9024,s__9022__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__9028_9034 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9028_9034) : item_fn.call(null,G__9028_9034));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__9023,rk,required_QMARK_,vec__9025,k,v,c__4322__auto__,size__4323__auto__,b__9024,s__9022__$2,temp__4657__auto__,extra_keys_schema))
);
})());

var G__9035 = (i__9023 + (1));
i__9023 = G__9035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9024),schema$core$map_elements_$_iter__9021(cljs.core.chunk_rest(s__9022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9024),null);
}
} else {
var vec__9029 = cljs.core.first(s__9022__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9029,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__9029,k,v,s__9022__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__9032_9036 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9032_9036) : item_fn.call(null,G__9032_9036));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__9029,k,v,s__9022__$2,temp__4657__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__9021(cljs.core.rest(s__9022__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__4324__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__4324__auto__ = (function schema$core$map_error_$_iter__9037(s__9038){
return (new cljs.core.LazySeq(null,(function (){
var s__9038__$1 = s__9038;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__9038__$1);
if(temp__4657__auto__){
var s__9038__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9038__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9038__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9040 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9039 = (0);
while(true){
if((i__9039 < size__4323__auto__)){
var vec__9041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(1),null);
cljs.core.chunk_append(b__9040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__9047 = (i__9039 + (1));
i__9039 = G__9047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9040),schema$core$map_error_$_iter__9037(cljs.core.chunk_rest(s__9038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9040),null);
}
} else {
var vec__9044 = cljs.core.first(s__9038__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__9037(cljs.core.rest(s__9038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$map_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
})),(function (p1__9048_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__9048_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function schema$core$map_explain_$_iter__9049(s__9050){
return (new cljs.core.LazySeq(null,(function (){
var s__9050__$1 = s__9050;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__9050__$1);
if(temp__4657__auto__){
var s__9050__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9050__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9050__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9052 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9051 = (0);
while(true){
if((i__9051 < size__4323__auto__)){
var vec__9053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9051);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9053,(1),null);
cljs.core.chunk_append(b__9052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__9059 = (i__9051 + (1));
i__9051 = G__9059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9052),schema$core$map_explain_$_iter__9049(cljs.core.chunk_rest(s__9050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9052),null);
}
} else {
var vec__9056 = cljs.core.first(s__9050__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__9049(cljs.core.rest(s__9050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$set_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9061,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9065 = k9061;
var G__9065__$1 = (((G__9065 instanceof cljs.core.Keyword))?G__9065.fqn:null);
switch (G__9065__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9061,else__4206__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Queue{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9060){
var self__ = this;
var G__9060__$1 = this;
return (new cljs.core.RecordIter((0),G__9060__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9066 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9066(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9062,other9063){
var self__ = this;
var this9062__$1 = this;
return ((!((other9063 == null))) && ((this9062__$1.constructor === other9063.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9062__$1.schema,other9063.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9062__$1.__extmap,other9063.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9060){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9067 = cljs.core.keyword_identical_QMARK_;
var expr__9068 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9070 = cljs.core.cst$kw$schema;
var G__9071 = expr__9068;
return (pred__9067.cljs$core$IFn$_invoke$arity$2 ? pred__9067.cljs$core$IFn$_invoke$arity$2(G__9070,G__9071) : pred__9067.call(null,G__9070,G__9071));
})())){
return (new schema.core.Queue(G__9060,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9060),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9060){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__9060,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$queue_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$queue,(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Queue",null,(1),null));
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Queue");
});

/**
 * Positional factory function for schema.core/Queue.
 */
schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Queue, taking a map of keywords to field values.
 */
schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__9064){
var extmap__4236__auto__ = (function (){var G__9072 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9064,cljs.core.cst$kw$schema);
if(cljs.core.record_QMARK_(G__9064)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9072);
} else {
return G__9072;
}
})();
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__9064),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9075,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9079 = k9075;
var G__9079__$1 = (((G__9079 instanceof cljs.core.Keyword))?G__9079.fqn:null);
switch (G__9079__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9075,else__4206__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.One{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9074){
var self__ = this;
var G__9074__$1 = this;
return (new cljs.core.RecordIter((0),G__9074__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9080 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9080(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9076,other9077){
var self__ = this;
var this9076__$1 = this;
return ((!((other9077 == null))) && ((this9076__$1.constructor === other9077.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9076__$1.schema,other9077.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9076__$1.optional_QMARK_,other9077.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9076__$1.name,other9077.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9076__$1.__extmap,other9077.__extmap)));
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9074){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9081 = cljs.core.keyword_identical_QMARK_;
var expr__9082 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9084 = cljs.core.cst$kw$schema;
var G__9085 = expr__9082;
return (pred__9081.cljs$core$IFn$_invoke$arity$2 ? pred__9081.cljs$core$IFn$_invoke$arity$2(G__9084,G__9085) : pred__9081.call(null,G__9084,G__9085));
})())){
return (new schema.core.One(G__9074,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9086 = cljs.core.cst$kw$optional_QMARK_;
var G__9087 = expr__9082;
return (pred__9081.cljs$core$IFn$_invoke$arity$2 ? pred__9081.cljs$core$IFn$_invoke$arity$2(G__9086,G__9087) : pred__9081.call(null,G__9086,G__9087));
})())){
return (new schema.core.One(self__.schema,G__9074,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9088 = cljs.core.cst$kw$name;
var G__9089 = expr__9082;
return (pred__9081.cljs$core$IFn$_invoke$arity$2 ? pred__9081.cljs$core$IFn$_invoke$arity$2(G__9088,G__9089) : pred__9081.call(null,G__9088,G__9089));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__9074,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9074),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9074){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__9074,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/One",null,(1),null));
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/One");
});

/**
 * Positional factory function for schema.core/One.
 */
schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

/**
 * Factory function for schema.core/One, taking a map of keywords to field values.
 */
schema.core.map__GT_One = (function schema$core$map__GT_One(G__9078){
var extmap__4236__auto__ = (function (){var G__9090 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9078,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0));
if(cljs.core.record_QMARK_(G__9078)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9090);
} else {
return G__9090;
}
})();
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__9078),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__9078),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__9078),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__9095 = cljs.core.split_with((function (p1__9092_SHARP_){
return (((p1__9092_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9092_SHARP_))));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9095,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9095,(1),null);
var vec__9098 = cljs.core.split_with(((function (vec__9095,required,more){
return (function (p1__9093_SHARP_){
var and__3938__auto__ = (p1__9093_SHARP_ instanceof schema.core.One);
if(and__3938__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9093_SHARP_);
} else {
return and__3938__auto__;
}
});})(vec__9095,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9098,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9098,(1),null);
if((((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__9095,required,more,vec__9098,optional,more__$1){
return (function (p1__9094_SHARP_){
return !((p1__9094_SHARP_ instanceof schema.core.One));
});})(vec__9095,required,more,vec__9098,optional,more__$1))
,more__$1)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_(x)));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9101_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$sequential_QMARK_,(new cljs.core.List(null,p1__9101_SHARP_,null,(1),null)),(2),null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__9102 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9102,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9102,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__9102,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),((function (vec__9102,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4655__auto__ = cljs.core.seq(x);
if(temp__4655__auto__){
var x__$1 = temp__4655__auto__;
var G__9105_9115 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9105_9115) : item_fn.call(null,G__9105_9115));

return cljs.core.rest(x__$1);
} else {
var G__9106_9116 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__4655__auto__,vec__9102,singles,multi,this$__$1){
return (function (){
return (new cljs.core.List(null,cljs.core.cst$sym$present_QMARK_,(new cljs.core.List(null,s.name,null,(1),null)),(2),null));
});})(temp__4655__auto__,vec__9102,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9106_9116) : item_fn.call(null,G__9106_9116));

return null;
}
});})(vec__9102,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),((function (vec__9102,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4657__auto__ = cljs.core.seq(x);
if(temp__4657__auto__){
var x__$1 = temp__4657__auto__;
var G__9107_9117 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__9107_9117) : item_fn.call(null,G__9107_9117));

return cljs.core.rest(x__$1);
} else {
return null;
}
});})(vec__9102,singles,multi,this$__$1))
,more)], null);
}
});})(vec__9102,singles,multi,this$__$1))
,(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return (new cljs.core.List(null,cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_,(new cljs.core.List(null,cljs.core.count(extra),null,(1),null)),(2),null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__9108 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4324__auto__ = ((function (vec__9108,singles,multi,this$__$1){
return (function schema$core$iter__9111(s__9112){
return (new cljs.core.LazySeq(null,((function (vec__9108,singles,multi,this$__$1){
return (function (){
var s__9112__$1 = s__9112;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__9112__$1);
if(temp__4657__auto__){
var s__9112__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9112__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9112__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9114 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9113 = (0);
while(true){
if((i__9113 < size__4323__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9113);
cljs.core.chunk_append(b__9114,(new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one),(new cljs.core.List(null,schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)));

var G__9118 = (i__9113 + (1));
i__9113 = G__9118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9114),schema$core$iter__9111(cljs.core.chunk_rest(s__9112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9114),null);
}
} else {
var s = cljs.core.first(s__9112__$2);
return cljs.core.cons((new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one),(new cljs.core.List(null,schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null)),schema$core$iter__9111(cljs.core.rest(s__9112__$2)));
}
} else {
return null;
}
break;
}
});})(vec__9108,singles,multi,this$__$1))
,null,null));
});})(vec__9108,singles,multi,this$__$1))
;
return iter__4324__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9123,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9127 = k9123;
var G__9127__$1 = (((G__9127 instanceof cljs.core.Keyword))?G__9127.fqn:null);
switch (G__9127__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9123,else__4206__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.Record{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9122){
var self__ = this;
var G__9122__$1 = this;
return (new cljs.core.RecordIter((0),G__9122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9128 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9128(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9124,other9125){
var self__ = this;
var this9124__$1 = this;
return ((!((other9125 == null))) && ((this9124__$1.constructor === other9125.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9124__$1.klass,other9125.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9124__$1.schema,other9125.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9124__$1.__extmap,other9125.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9122){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9129 = cljs.core.keyword_identical_QMARK_;
var expr__9130 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9132 = cljs.core.cst$kw$klass;
var G__9133 = expr__9130;
return (pred__9129.cljs$core$IFn$_invoke$arity$2 ? pred__9129.cljs$core$IFn$_invoke$arity$2(G__9132,G__9133) : pred__9129.call(null,G__9132,G__9133));
})())){
return (new schema.core.Record(G__9122,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9134 = cljs.core.cst$kw$schema;
var G__9135 = expr__9130;
return (pred__9129.cljs$core$IFn$_invoke$arity$2 ? pred__9129.cljs$core$IFn$_invoke$arity$2(G__9134,G__9135) : pred__9129.call(null,G__9134,G__9135));
})())){
return (new schema.core.Record(self__.klass,G__9122,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9122),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$klass,self__.klass,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9122){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__9122,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__9119_SHARP_){
return (p1__9119_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__9120_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$instance_QMARK_,(new cljs.core.List(null,self__.klass,(new cljs.core.List(null,p1__9120_SHARP_,null,(1),null)),(2),null)),(3),null));
});})(this$__$1))
);
var temp__4655__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var evf = temp__4655__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__4655__auto__,p,this$__$1){
return (function (p1__9121_SHARP_){
return (new cljs.core.List(null,cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_,(new cljs.core.List(null,p1__9121_SHARP_,null,(1),null)),(2),null));
});})(evf,temp__4655__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$record,(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0))),(new cljs.core.List(null,schema.core.explain(self__.schema),null,(1),null)),(2),null)),(3),null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/Record",null,(1),null));
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/Record");
});

/**
 * Positional factory function for schema.core/Record.
 */
schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Record, taking a map of keywords to field values.
 */
schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__9126){
var extmap__4236__auto__ = (function (){var G__9136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9126,cljs.core.cst$kw$klass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema], 0));
if(cljs.core.record_QMARK_(G__9126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9136);
} else {
return G__9136;
}
})();
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__9126),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__9126),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__9140 = cljs.core.split_with((function (p1__9138_SHARP_){
return (p1__9138_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9140,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9140,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__9140,required,more){
return (function (p1__9139_SHARP_){
return schema.core.explain(p1__9139_SHARP_.schema);
});})(vec__9140,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9144,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9148 = k9144;
var G__9148__$1 = (((G__9148 instanceof cljs.core.Keyword))?G__9148.fqn:null);
switch (G__9148__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9144,else__4206__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#schema.core.FnSchema{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9143){
var self__ = this;
var G__9143__$1 = this;
return (new cljs.core.RecordIter((0),G__9143__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9149 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9149(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9145,other9146){
var self__ = this;
var this9145__$1 = this;
return ((!((other9146 == null))) && ((this9145__$1.constructor === other9146.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9145__$1.output_schema,other9146.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9145__$1.input_schemas,other9146.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9145__$1.__extmap,other9146.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9143){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9150 = cljs.core.keyword_identical_QMARK_;
var expr__9151 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9153 = cljs.core.cst$kw$output_DASH_schema;
var G__9154 = expr__9151;
return (pred__9150.cljs$core$IFn$_invoke$arity$2 ? pred__9150.cljs$core$IFn$_invoke$arity$2(G__9153,G__9154) : pred__9150.call(null,G__9153,G__9154));
})())){
return (new schema.core.FnSchema(G__9143,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9155 = cljs.core.cst$kw$input_DASH_schemas;
var G__9156 = expr__9151;
return (pred__9150.cljs$core$IFn$_invoke$arity$2 ? pred__9150.cljs$core$IFn$_invoke$arity$2(G__9155,G__9156) : pred__9150.call(null,G__9155,G__9156));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__9143,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9143),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$output_DASH_schema,self__.output_schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas,null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9143){
var self__ = this;
var this__4202__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__9143,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__6724__6725__auto__){
return (new cljs.core.List(null,cljs.core.cst$sym$ifn_QMARK_,(new cljs.core.List(null,p1__6724__6725__auto__,null,(1),null)),(2),null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"schema.core/FnSchema",null,(1),null));
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"schema.core/FnSchema");
});

/**
 * Positional factory function for schema.core/FnSchema.
 */
schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

/**
 * Factory function for schema.core/FnSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__9147){
var extmap__4236__auto__ = (function (){var G__9157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9147,cljs.core.cst$kw$output_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_schemas], 0));
if(cljs.core.record_QMARK_(G__9147)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9157);
} else {
return G__9157;
}
})();
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__9147),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__9147),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__3949__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var m__6329__auto__ = cljs.core.meta(f);
var k__6330__auto__ = cljs.core.cst$kw$schema;
var temp__4655__auto__ = cljs.core.find(m__6329__auto__,k__6330__auto__);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__6331__auto__ = temp__4655__auto__;
return cljs.core.val(pair__6331__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__6330__auto__,m__6329__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
