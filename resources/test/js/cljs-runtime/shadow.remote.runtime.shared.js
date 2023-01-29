goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19045,res){
var map__19046 = p__19045;
var map__19046__$1 = cljs.core.__destructure_map(map__19046);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19046__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19046__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19051 = res;
var G__19051__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19051,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19051);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19051__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19051__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19060 = arguments.length;
switch (G__19060) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19096,msg,handlers,timeout_after_ms){
var map__19102 = p__19096;
var map__19102__$1 = cljs.core.__destructure_map(map__19102);
var runtime = map__19102__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19102__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19304 = arguments.length;
var i__5770__auto___19305 = (0);
while(true){
if((i__5770__auto___19305 < len__5769__auto___19304)){
args__5775__auto__.push((arguments[i__5770__auto___19305]));

var G__19306 = (i__5770__auto___19305 + (1));
i__5770__auto___19305 = G__19306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19153,ev,args){
var map__19156 = p__19153;
var map__19156__$1 = cljs.core.__destructure_map(map__19156);
var runtime = map__19156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19158 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19161 = null;
var count__19162 = (0);
var i__19163 = (0);
while(true){
if((i__19163 < count__19162)){
var ext = chunk__19161.cljs$core$IIndexed$_nth$arity$2(null,i__19163);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19308 = seq__19158;
var G__19309 = chunk__19161;
var G__19310 = count__19162;
var G__19311 = (i__19163 + (1));
seq__19158 = G__19308;
chunk__19161 = G__19309;
count__19162 = G__19310;
i__19163 = G__19311;
continue;
} else {
var G__19316 = seq__19158;
var G__19317 = chunk__19161;
var G__19318 = count__19162;
var G__19319 = (i__19163 + (1));
seq__19158 = G__19316;
chunk__19161 = G__19317;
count__19162 = G__19318;
i__19163 = G__19319;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19158);
if(temp__5804__auto__){
var seq__19158__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19158__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19158__$1);
var G__19321 = cljs.core.chunk_rest(seq__19158__$1);
var G__19322 = c__5568__auto__;
var G__19323 = cljs.core.count(c__5568__auto__);
var G__19324 = (0);
seq__19158 = G__19321;
chunk__19161 = G__19322;
count__19162 = G__19323;
i__19163 = G__19324;
continue;
} else {
var ext = cljs.core.first(seq__19158__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19326 = cljs.core.next(seq__19158__$1);
var G__19327 = null;
var G__19328 = (0);
var G__19329 = (0);
seq__19158 = G__19326;
chunk__19161 = G__19327;
count__19162 = G__19328;
i__19163 = G__19329;
continue;
} else {
var G__19330 = cljs.core.next(seq__19158__$1);
var G__19331 = null;
var G__19332 = (0);
var G__19333 = (0);
seq__19158 = G__19330;
chunk__19161 = G__19331;
count__19162 = G__19332;
i__19163 = G__19333;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19128){
var G__19133 = cljs.core.first(seq19128);
var seq19128__$1 = cljs.core.next(seq19128);
var G__19134 = cljs.core.first(seq19128__$1);
var seq19128__$2 = cljs.core.next(seq19128__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19133,G__19134,seq19128__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19187,p__19188){
var map__19190 = p__19187;
var map__19190__$1 = cljs.core.__destructure_map(map__19190);
var runtime = map__19190__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19191 = p__19188;
var map__19191__$1 = cljs.core.__destructure_map(map__19191);
var msg = map__19191__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19196 = cljs.core.deref(state_ref);
var map__19196__$1 = cljs.core.__destructure_map(map__19196);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19196__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19196__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19205){
var map__19208 = p__19205;
var map__19208__$1 = cljs.core.__destructure_map(map__19208);
var runtime = map__19208__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19216,msg){
var map__19220 = p__19216;
var map__19220__$1 = cljs.core.__destructure_map(map__19220);
var runtime = map__19220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19226,key,p__19227){
var map__19232 = p__19226;
var map__19232__$1 = cljs.core.__destructure_map(map__19232);
var state = map__19232__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19232__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19233 = p__19227;
var map__19233__$1 = cljs.core.__destructure_map(map__19233);
var spec = map__19233__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19233__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19250,key,spec){
var map__19252 = p__19250;
var map__19252__$1 = cljs.core.__destructure_map(map__19252);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19254_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19254_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19255_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19255_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19256_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19256_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19257_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19257_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19258_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19258_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19263,key){
var map__19264 = p__19263;
var map__19264__$1 = cljs.core.__destructure_map(map__19264);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19267,msg){
var map__19269 = p__19267;
var map__19269__$1 = cljs.core.__destructure_map(map__19269);
var runtime = map__19269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19271,p__19272){
var map__19274 = p__19271;
var map__19274__$1 = cljs.core.__destructure_map(map__19274);
var runtime = map__19274__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19275 = p__19272;
var map__19275__$1 = cljs.core.__destructure_map(map__19275);
var msg = map__19275__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19279 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19281 = null;
var count__19282 = (0);
var i__19283 = (0);
while(true){
if((i__19283 < count__19282)){
var map__19294 = chunk__19281.cljs$core$IIndexed$_nth$arity$2(null,i__19283);
var map__19294__$1 = cljs.core.__destructure_map(map__19294);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19294__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19360 = seq__19279;
var G__19361 = chunk__19281;
var G__19362 = count__19282;
var G__19363 = (i__19283 + (1));
seq__19279 = G__19360;
chunk__19281 = G__19361;
count__19282 = G__19362;
i__19283 = G__19363;
continue;
} else {
var G__19364 = seq__19279;
var G__19365 = chunk__19281;
var G__19366 = count__19282;
var G__19367 = (i__19283 + (1));
seq__19279 = G__19364;
chunk__19281 = G__19365;
count__19282 = G__19366;
i__19283 = G__19367;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19279);
if(temp__5804__auto__){
var seq__19279__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19279__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19279__$1);
var G__19368 = cljs.core.chunk_rest(seq__19279__$1);
var G__19369 = c__5568__auto__;
var G__19370 = cljs.core.count(c__5568__auto__);
var G__19371 = (0);
seq__19279 = G__19368;
chunk__19281 = G__19369;
count__19282 = G__19370;
i__19283 = G__19371;
continue;
} else {
var map__19296 = cljs.core.first(seq__19279__$1);
var map__19296__$1 = cljs.core.__destructure_map(map__19296);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19296__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19373 = cljs.core.next(seq__19279__$1);
var G__19374 = null;
var G__19375 = (0);
var G__19376 = (0);
seq__19279 = G__19373;
chunk__19281 = G__19374;
count__19282 = G__19375;
i__19283 = G__19376;
continue;
} else {
var G__19377 = cljs.core.next(seq__19279__$1);
var G__19378 = null;
var G__19379 = (0);
var G__19380 = (0);
seq__19279 = G__19377;
chunk__19281 = G__19378;
count__19282 = G__19379;
i__19283 = G__19380;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
