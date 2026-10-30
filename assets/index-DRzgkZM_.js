function D1(e,i){for(var a=0;a<i.length;a++){const l=i[a];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in e)){const f=Object.getOwnPropertyDescriptor(l,c);f&&Object.defineProperty(e,c,f.get?f:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vf={exports:{}},Ys={},yf={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function j1(){if($m)return qe;$m=1;var e=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),_=Symbol.iterator;function E(R){return R===null||typeof R!="object"?null:(R=_&&R[_]||R["@@iterator"],typeof R=="function"?R:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,C={};function I(R,H,X){this.props=R,this.context=H,this.refs=C,this.updater=X||D}I.prototype.isReactComponent={},I.prototype.setState=function(R,H){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,H,"setState")},I.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function N(){}N.prototype=I.prototype;function W(R,H,X){this.props=R,this.context=H,this.refs=C,this.updater=X||D}var F=W.prototype=new N;F.constructor=W,B(F,I.prototype),F.isPureReactComponent=!0;var K=Array.isArray,ee=Object.prototype.hasOwnProperty,Q={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function J(R,H,X){var ne,le={},re=null,fe=null;if(H!=null)for(ne in H.ref!==void 0&&(fe=H.ref),H.key!==void 0&&(re=""+H.key),H)ee.call(H,ne)&&!se.hasOwnProperty(ne)&&(le[ne]=H[ne]);var Ce=arguments.length-2;if(Ce===1)le.children=X;else if(1<Ce){for(var Oe=Array(Ce),at=0;at<Ce;at++)Oe[at]=arguments[at+2];le.children=Oe}if(R&&R.defaultProps)for(ne in Ce=R.defaultProps,Ce)le[ne]===void 0&&(le[ne]=Ce[ne]);return{$$typeof:e,type:R,key:re,ref:fe,props:le,_owner:Q.current}}function me(R,H){return{$$typeof:e,type:R.type,key:H,ref:R.ref,props:R.props,_owner:R._owner}}function ke(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function Pe(R){var H={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(X){return H[X]})}var De=/\/+/g;function Ze(R,H){return typeof R=="object"&&R!==null&&R.key!=null?Pe(""+R.key):H.toString(36)}function de(R,H,X,ne,le){var re=typeof R;(re==="undefined"||re==="boolean")&&(R=null);var fe=!1;if(R===null)fe=!0;else switch(re){case"string":case"number":fe=!0;break;case"object":switch(R.$$typeof){case e:case i:fe=!0}}if(fe)return fe=R,le=le(fe),R=ne===""?"."+Ze(fe,0):ne,K(le)?(X="",R!=null&&(X=R.replace(De,"$&/")+"/"),de(le,H,X,"",function(at){return at})):le!=null&&(ke(le)&&(le=me(le,X+(!le.key||fe&&fe.key===le.key?"":(""+le.key).replace(De,"$&/")+"/")+R)),H.push(le)),1;if(fe=0,ne=ne===""?".":ne+":",K(R))for(var Ce=0;Ce<R.length;Ce++){re=R[Ce];var Oe=ne+Ze(re,Ce);fe+=de(re,H,X,Oe,le)}else if(Oe=E(R),typeof Oe=="function")for(R=Oe.call(R),Ce=0;!(re=R.next()).done;)re=re.value,Oe=ne+Ze(re,Ce++),fe+=de(re,H,X,Oe,le);else if(re==="object")throw H=String(R),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return fe}function Ve(R,H,X){if(R==null)return R;var ne=[],le=0;return de(R,ne,"","",function(re){return H.call(X,re,le++)}),ne}function Le(R){if(R._status===-1){var H=R._result;H=H(),H.then(function(X){(R._status===0||R._status===-1)&&(R._status=1,R._result=X)},function(X){(R._status===0||R._status===-1)&&(R._status=2,R._result=X)}),R._status===-1&&(R._status=0,R._result=H)}if(R._status===1)return R._result.default;throw R._result}var Me={current:null},U={transition:null},ve={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:U,ReactCurrentOwner:Q};function q(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:Ve,forEach:function(R,H,X){Ve(R,function(){H.apply(this,arguments)},X)},count:function(R){var H=0;return Ve(R,function(){H++}),H},toArray:function(R){return Ve(R,function(H){return H})||[]},only:function(R){if(!ke(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},qe.Component=I,qe.Fragment=a,qe.Profiler=c,qe.PureComponent=W,qe.StrictMode=l,qe.Suspense=b,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,qe.act=q,qe.cloneElement=function(R,H,X){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ne=B({},R.props),le=R.key,re=R.ref,fe=R._owner;if(H!=null){if(H.ref!==void 0&&(re=H.ref,fe=Q.current),H.key!==void 0&&(le=""+H.key),R.type&&R.type.defaultProps)var Ce=R.type.defaultProps;for(Oe in H)ee.call(H,Oe)&&!se.hasOwnProperty(Oe)&&(ne[Oe]=H[Oe]===void 0&&Ce!==void 0?Ce[Oe]:H[Oe])}var Oe=arguments.length-2;if(Oe===1)ne.children=X;else if(1<Oe){Ce=Array(Oe);for(var at=0;at<Oe;at++)Ce[at]=arguments[at+2];ne.children=Ce}return{$$typeof:e,type:R.type,key:le,ref:re,props:ne,_owner:fe}},qe.createContext=function(R){return R={$$typeof:p,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:f,_context:R},R.Consumer=R},qe.createElement=J,qe.createFactory=function(R){var H=J.bind(null,R);return H.type=R,H},qe.createRef=function(){return{current:null}},qe.forwardRef=function(R){return{$$typeof:g,render:R}},qe.isValidElement=ke,qe.lazy=function(R){return{$$typeof:k,_payload:{_status:-1,_result:R},_init:Le}},qe.memo=function(R,H){return{$$typeof:w,type:R,compare:H===void 0?null:H}},qe.startTransition=function(R){var H=U.transition;U.transition={};try{R()}finally{U.transition=H}},qe.unstable_act=q,qe.useCallback=function(R,H){return Me.current.useCallback(R,H)},qe.useContext=function(R){return Me.current.useContext(R)},qe.useDebugValue=function(){},qe.useDeferredValue=function(R){return Me.current.useDeferredValue(R)},qe.useEffect=function(R,H){return Me.current.useEffect(R,H)},qe.useId=function(){return Me.current.useId()},qe.useImperativeHandle=function(R,H,X){return Me.current.useImperativeHandle(R,H,X)},qe.useInsertionEffect=function(R,H){return Me.current.useInsertionEffect(R,H)},qe.useLayoutEffect=function(R,H){return Me.current.useLayoutEffect(R,H)},qe.useMemo=function(R,H){return Me.current.useMemo(R,H)},qe.useReducer=function(R,H,X){return Me.current.useReducer(R,H,X)},qe.useRef=function(R){return Me.current.useRef(R)},qe.useState=function(R){return Me.current.useState(R)},qe.useSyncExternalStore=function(R,H,X){return Me.current.useSyncExternalStore(R,H,X)},qe.useTransition=function(){return Me.current.useTransition()},qe.version="18.3.1",qe}var qm;function Cp(){return qm||(qm=1,yf.exports=j1()),yf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function M1(){if(Zm)return Ys;Zm=1;var e=Cp(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(g,b,w){var k,_={},E=null,D=null;w!==void 0&&(E=""+w),b.key!==void 0&&(E=""+b.key),b.ref!==void 0&&(D=b.ref);for(k in b)l.call(b,k)&&!f.hasOwnProperty(k)&&(_[k]=b[k]);if(g&&g.defaultProps)for(k in b=g.defaultProps,b)_[k]===void 0&&(_[k]=b[k]);return{$$typeof:i,type:g,key:E,ref:D,props:_,_owner:c.current}}return Ys.Fragment=a,Ys.jsx=p,Ys.jsxs=p,Ys}var Gm;function O1(){return Gm||(Gm=1,vf.exports=M1()),vf.exports}var v=O1(),Uc={},bf={exports:{}},xn={},xf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function z1(){return Ym||(Ym=1,(function(e){function i(U,ve){var q=U.length;U.push(ve);e:for(;0<q;){var R=q-1>>>1,H=U[R];if(0<c(H,ve))U[R]=ve,U[q]=H,q=R;else break e}}function a(U){return U.length===0?null:U[0]}function l(U){if(U.length===0)return null;var ve=U[0],q=U.pop();if(q!==ve){U[0]=q;e:for(var R=0,H=U.length,X=H>>>1;R<X;){var ne=2*(R+1)-1,le=U[ne],re=ne+1,fe=U[re];if(0>c(le,q))re<H&&0>c(fe,le)?(U[R]=fe,U[re]=q,R=re):(U[R]=le,U[ne]=q,R=ne);else if(re<H&&0>c(fe,q))U[R]=fe,U[re]=q,R=re;else break e}}return ve}function c(U,ve){var q=U.sortIndex-ve.sortIndex;return q!==0?q:U.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();e.unstable_now=function(){return p.now()-g}}var b=[],w=[],k=1,_=null,E=3,D=!1,B=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(U){for(var ve=a(w);ve!==null;){if(ve.callback===null)l(w);else if(ve.startTime<=U)l(w),ve.sortIndex=ve.expirationTime,i(b,ve);else break;ve=a(w)}}function K(U){if(C=!1,F(U),!B)if(a(b)!==null)B=!0,Le(ee);else{var ve=a(w);ve!==null&&Me(K,ve.startTime-U)}}function ee(U,ve){B=!1,C&&(C=!1,N(J),J=-1),D=!0;var q=E;try{for(F(ve),_=a(b);_!==null&&(!(_.expirationTime>ve)||U&&!Pe());){var R=_.callback;if(typeof R=="function"){_.callback=null,E=_.priorityLevel;var H=R(_.expirationTime<=ve);ve=e.unstable_now(),typeof H=="function"?_.callback=H:_===a(b)&&l(b),F(ve)}else l(b);_=a(b)}if(_!==null)var X=!0;else{var ne=a(w);ne!==null&&Me(K,ne.startTime-ve),X=!1}return X}finally{_=null,E=q,D=!1}}var Q=!1,se=null,J=-1,me=5,ke=-1;function Pe(){return!(e.unstable_now()-ke<me)}function De(){if(se!==null){var U=e.unstable_now();ke=U;var ve=!0;try{ve=se(!0,U)}finally{ve?Ze():(Q=!1,se=null)}}else Q=!1}var Ze;if(typeof W=="function")Ze=function(){W(De)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ve=de.port2;de.port1.onmessage=De,Ze=function(){Ve.postMessage(null)}}else Ze=function(){I(De,0)};function Le(U){se=U,Q||(Q=!0,Ze())}function Me(U,ve){J=I(function(){U(e.unstable_now())},ve)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){B||D||(B=!0,Le(ee))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return E},e.unstable_getFirstCallbackNode=function(){return a(b)},e.unstable_next=function(U){switch(E){case 1:case 2:case 3:var ve=3;break;default:ve=E}var q=E;E=ve;try{return U()}finally{E=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,ve){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=E;E=U;try{return ve()}finally{E=q}},e.unstable_scheduleCallback=function(U,ve,q){var R=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?R+q:R):q=R,U){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=q+H,U={id:k++,callback:ve,priorityLevel:U,startTime:q,expirationTime:H,sortIndex:-1},q>R?(U.sortIndex=q,i(w,U),a(b)===null&&U===a(w)&&(C?(N(J),J=-1):C=!0,Me(K,q-R))):(U.sortIndex=H,i(b,U),B||D||(B=!0,Le(ee))),U},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(U){var ve=E;return function(){var q=E;E=ve;try{return U.apply(this,arguments)}finally{E=q}}}})(wf)),wf}var Km;function F1(){return Km||(Km=1,xf.exports=z1()),xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function B1(){if(Qm)return xn;Qm=1;var e=Cp(),i=F1();function a(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function f(t,r){p(t,r),p(t+"Capture",r)}function p(t,r){for(c[t]=r,t=0;t<r.length;t++)l.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},_={};function E(t){return b.call(_,t)?!0:b.call(k,t)?!1:w.test(t)?_[t]=!0:(k[t]=!0,!1)}function D(t,r,s,d){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B(t,r,s,d){if(r===null||typeof r>"u"||D(t,r,s,d))return!0;if(d)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(t,r,s,d,m,y,S){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=y,this.removeEmptyString=S}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){I[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];I[r]=new C(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){I[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){I[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){I[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){I[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){I[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){I[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){I[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(N,W);I[r]=new C(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(N,W);I[r]=new C(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(N,W);I[r]=new C(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){I[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),I.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){I[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,r,s,d){var m=I.hasOwnProperty(r)?I[r]:null;(m!==null?m.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(B(r,s,m,d)&&(s=null),d||m===null?E(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):m.mustUseProperty?t[m.propertyName]=s===null?m.type===3?!1:"":s:(r=m.attributeName,d=m.attributeNamespace,s===null?t.removeAttribute(r):(m=m.type,s=m===3||m===4&&s===!0?"":""+s,d?t.setAttributeNS(d,r,s):t.setAttribute(r,s))))}var K=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),Q=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),U=Symbol.iterator;function ve(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,R;function H(t){if(R===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);R=r&&r[1]||""}return`
`+R+t}var X=!1;function ne(t,r){if(!t||X)return"";X=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Y){var d=Y}Reflect.construct(t,[],r)}else{try{r.call()}catch(Y){d=Y}t.call(r.prototype)}else{try{throw Error()}catch(Y){d=Y}t()}}catch(Y){if(Y&&d&&typeof Y.stack=="string"){for(var m=Y.stack.split(`
`),y=d.stack.split(`
`),S=m.length-1,T=y.length-1;1<=S&&0<=T&&m[S]!==y[T];)T--;for(;1<=S&&0<=T;S--,T--)if(m[S]!==y[T]){if(S!==1||T!==1)do if(S--,T--,0>T||m[S]!==y[T]){var M=`
`+m[S].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=S&&0<=T);break}}}finally{X=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?H(t):""}function le(t){switch(t.tag){case 5:return H(t.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case se:return"Fragment";case Q:return"Portal";case me:return"Profiler";case J:return"StrictMode";case Ze:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pe:return(t.displayName||"Context")+".Consumer";case ke:return(t._context.displayName||"Context")+".Provider";case De:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ve:return r=t.displayName||null,r!==null?r:re(t.type)||"Memo";case Le:r=t._payload,t=t._init;try{return re(t(r))}catch{}}return null}function fe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function at(t){var r=Oe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),d=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var m=s.get,y=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return m.call(this)},set:function(S){d=""+S,y.call(this,S)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return d},setValue:function(S){d=""+S},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function _t(t){t._valueTracker||(t._valueTracker=at(t))}function nt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),d="";return t&&(d=Oe(t)?t.checked?"true":"false":t.value),t=d,t!==s?(r.setValue(t),!0):!1}function un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mn(t,r){var s=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Lt(t,r){var s=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;s=Ce(r.value!=null?r.value:s),t._wrapperState={initialChecked:d,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function je(t,r){r=r.checked,r!=null&&F(t,"checked",r,!1)}function ft(t,r){je(t,r);var s=Ce(r.value),d=r.type;if(s!=null)d==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(d==="submit"||d==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?en(t,r.type,s):r.hasOwnProperty("defaultValue")&&en(t,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function At(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function en(t,r,s){(r!=="number"||un(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var tn=Array.isArray;function Ht(t,r,s,d){if(t=t.options,r){r={};for(var m=0;m<s.length;m++)r["$"+s[m]]=!0;for(s=0;s<t.length;s++)m=r.hasOwnProperty("$"+t[s].value),t[s].selected!==m&&(t[s].selected=m),m&&d&&(t[s].defaultSelected=!0)}else{for(s=""+Ce(s),r=null,m=0;m<t.length;m++){if(t[m].value===s){t[m].selected=!0,d&&(t[m].defaultSelected=!0);return}r!==null||t[m].disabled||(r=t[m])}r!==null&&(r.selected=!0)}}function dn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qi(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(a(92));if(tn(s)){if(1<s.length)throw Error(a(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:Ce(s)}}function Ba(t,r){var s=Ce(r.value),d=Ce(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),d!=null&&(t.defaultValue=""+d)}function Xi(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function ci(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?ci(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cr,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,d,m){MSApp.execUnsafeLocalFunction(function(){return t(r,s,d,m)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Cr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ut(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fn=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(t){fn.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),ot[r]=ot[t]})});function nn(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||ot.hasOwnProperty(t)&&ot[t]?(""+r).trim():r+"px"}function rn(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var d=s.indexOf("--")===0,m=nn(s,r[s],d);s==="float"&&(s="cssFloat"),d?t.setProperty(s,m):t[s]=m}}var Ha=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(t,r){if(r){if(Ha[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function Qn(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function rs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,Rr=null,Tr=null;function Sl(t){if(t=Ur(t)){if(typeof Ua!="function")throw Error(a(280));var r=t.stateNode;r&&(r=go(r),Ua(t.stateNode,t.type,r))}}function Al(t){Rr?Tr?Tr.push(t):Tr=[t]:Rr=t}function Pl(){if(Rr){var t=Rr,r=Tr;if(Tr=Rr=null,Sl(t),r)for(t=0;t<r.length;t++)Sl(r[t])}}function El(t,r){return t(r)}function Cl(){}var is=!1;function Wa(t,r,s){if(is)return t(r,s);is=!0;try{return El(t,r,s)}finally{is=!1,(Rr!==null||Tr!==null)&&(Cl(),Pl())}}function Ji(t,r){var s=t.stateNode;if(s===null)return null;var d=go(s);if(d===null)return null;s=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(t=t.type,d=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!d;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var as=!1;if(g)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){as=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{as=!1}function Zu(t,r,s,d,m,y,S,T,M){var Y=Array.prototype.slice.call(arguments,3);try{r.apply(s,Y)}catch(ae){this.onError(ae)}}var Wt=!1,Se=null,ta=!1,Va=null,Rl={onError:function(t){Wt=!0,Se=t}};function Tl(t,r,s,d,m,y,S,T,M){Wt=!1,Se=null,Zu.apply(Rl,arguments)}function os(t,r,s,d,m,y,S,T,M){if(Tl.apply(this,arguments),Wt){if(Wt){var Y=Se;Wt=!1,Se=null}else throw Error(a(198));ta||(ta=!0,Va=Y)}}function hr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function Lr(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function ss(t){if(hr(t)!==t)throw Error(a(188))}function Gu(t){var r=t.alternate;if(!r){if(r=hr(t),r===null)throw Error(a(188));return r!==t?null:t}for(var s=t,d=r;;){var m=s.return;if(m===null)break;var y=m.alternate;if(y===null){if(d=m.return,d!==null){s=d;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===s)return ss(m),t;if(y===d)return ss(m),r;y=y.sibling}throw Error(a(188))}if(s.return!==d.return)s=m,d=y;else{for(var S=!1,T=m.child;T;){if(T===s){S=!0,s=m,d=y;break}if(T===d){S=!0,d=m,s=y;break}T=T.sibling}if(!S){for(T=y.child;T;){if(T===s){S=!0,s=y,d=m;break}if(T===d){S=!0,d=y,s=m;break}T=T.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==d)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:r}function Ll(t){return t=Gu(t),t!==null?Il(t):null}function Il(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Il(t);if(r!==null)return r;t=t.sibling}return null}var Nl=i.unstable_scheduleCallback,ls=i.unstable_cancelCallback,Yu=i.unstable_shouldYield,$a=i.unstable_requestPaint,pt=i.unstable_now,Ku=i.unstable_getCurrentPriorityLevel,cs=i.unstable_ImmediatePriority,Dl=i.unstable_UserBlockingPriority,qa=i.unstable_NormalPriority,us=i.unstable_LowPriority,fi=i.unstable_IdlePriority,na=null,_n=null;function ra(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:pi,st=Math.log,Za=Math.LN2;function pi(t){return t>>>=0,t===0?32:31-(st(t)/Za|0)|0}var Xn=64,hi=4194304;function Be(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rt(t,r){var s=t.pendingLanes;if(s===0)return 0;var d=0,m=t.suspendedLanes,y=t.pingedLanes,S=s&268435455;if(S!==0){var T=S&~m;T!==0?d=Be(T):(y&=S,y!==0&&(d=Be(y)))}else S=s&~m,S!==0?d=Be(S):y!==0&&(d=Be(y));if(d===0)return 0;if(r!==0&&r!==d&&(r&m)===0&&(m=d&-d,y=r&-r,m>=y||m===16&&(y&4194240)!==0))return r;if((d&4)!==0&&(d|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=d;0<r;)s=31-He(r),m=1<<s,d|=t[s],r&=~m;return d}function ds(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ga(t,r){for(var s=t.suspendedLanes,d=t.pingedLanes,m=t.expirationTimes,y=t.pendingLanes;0<y;){var S=31-He(y),T=1<<S,M=m[S];M===-1?((T&s)===0||(T&d)!==0)&&(m[S]=ds(T,r)):M<=r&&(t.expiredLanes|=T),y&=~T}}function Vt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jl(){var t=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),t}function mi(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function kn(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-He(r),t[r]=s}function vt(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var d=t.eventTimes;for(t=t.expirationTimes;0<s;){var m=31-He(s),y=1<<m;r[m]=0,d[m]=-1,t[m]=-1,s&=~y}}function Jn(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var d=31-He(s),m=1<<d;m&r|t[d]&r&&(t[d]|=r),s&=~m}}var Ye=0;function gi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ya,Ir,Ka,Qa,ia,aa=!1,vi=[],Sn=null,er=null,On=null,oa=new Map,ze=new Map,Pt=[],et="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fs(t,r){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":oa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ze.delete(r.pointerId)}}function Nr(t,r,s,d,m,y){return t===null||t.nativeEvent!==y?(t={blockedOn:r,domEventName:s,eventSystemFlags:d,nativeEvent:y,targetContainers:[m]},r!==null&&(r=Ur(r),r!==null&&Ir(r)),t):(t.eventSystemFlags|=d,r=t.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),t)}function ps(t,r,s,d,m){switch(r){case"focusin":return Sn=Nr(Sn,t,r,s,d,m),!0;case"dragenter":return er=Nr(er,t,r,s,d,m),!0;case"mouseover":return On=Nr(On,t,r,s,d,m),!0;case"pointerover":var y=m.pointerId;return oa.set(y,Nr(oa.get(y)||null,t,r,s,d,m)),!0;case"gotpointercapture":return y=m.pointerId,ze.set(y,Nr(ze.get(y)||null,t,r,s,d,m)),!0}return!1}function Xa(t){var r=Hr(t.target);if(r!==null){var s=hr(r);if(s!==null){if(r=s.tag,r===13){if(r=Lr(s),r!==null){t.blockedOn=r,ia(t.priority,function(){Ka(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zn(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=to(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var d=new s.constructor(s.type,s);ns=d,s.target.dispatchEvent(d),ns=null}else return r=Ur(s),r!==null&&Ir(r),t.blockedOn=s,!1;r.shift()}return!0}function Ja(t,r,s){zn(t)&&s.delete(r)}function sa(){aa=!1,Sn!==null&&zn(Sn)&&(Sn=null),er!==null&&zn(er)&&(er=null),On!==null&&zn(On)&&(On=null),oa.forEach(Ja),ze.forEach(Ja)}function ht(t,r){t.blockedOn===r&&(t.blockedOn=null,aa||(aa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,sa)))}function An(t){function r(m){return ht(m,t)}if(0<vi.length){ht(vi[0],t);for(var s=1;s<vi.length;s++){var d=vi[s];d.blockedOn===t&&(d.blockedOn=null)}}for(Sn!==null&&ht(Sn,t),er!==null&&ht(er,t),On!==null&&ht(On,t),oa.forEach(r),ze.forEach(r),s=0;s<Pt.length;s++)d=Pt[s],d.blockedOn===t&&(d.blockedOn=null);for(;0<Pt.length&&(s=Pt[0],s.blockedOn===null);)Xa(s),s.blockedOn===null&&Pt.shift()}var Dr=K.ReactCurrentBatchConfig,la=!0;function Qu(t,r,s,d){var m=Ye,y=Dr.transition;Dr.transition=null;try{Ye=1,ca(t,r,s,d)}finally{Ye=m,Dr.transition=y}}function Ml(t,r,s,d){var m=Ye,y=Dr.transition;Dr.transition=null;try{Ye=4,ca(t,r,s,d)}finally{Ye=m,Dr.transition=y}}function ca(t,r,s,d){if(la){var m=to(t,r,s,d);if(m===null)n(t,r,d,eo,s),fs(t,d);else if(ps(m,t,r,s,d))d.stopPropagation();else if(fs(t,d),r&4&&-1<et.indexOf(t)){for(;m!==null;){var y=Ur(m);if(y!==null&&Ya(y),y=to(t,r,s,d),y===null&&n(t,r,d,eo,s),y===m)break;m=y}m!==null&&d.stopPropagation()}else n(t,r,d,null,s)}}var eo=null;function to(t,r,s,d){if(eo=null,t=rs(d),t=Hr(t),t!==null)if(r=hr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=Lr(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return eo=t,null}function Ge(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case cs:return 1;case Dl:return 4;case qa:case us:return 16;case fi:return 536870912;default:return 16}default:return 16}}var mr=null,an=null,gr=null;function hs(){if(gr)return gr;var t,r=an,s=r.length,d,m="value"in mr?mr.value:mr.textContent,y=m.length;for(t=0;t<s&&r[t]===m[t];t++);var S=s-t;for(d=1;d<=S&&r[s-d]===m[y-d];d++);return gr=m.slice(t,1<d?1-d:void 0)}function no(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function yi(){return!0}function Ol(){return!1}function $t(t){function r(s,d,m,y,S){this._reactName=s,this._targetInst=m,this.type=d,this.nativeEvent=y,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(s=t[T],this[T]=s?s(y):y[T]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?yi:Ol,this.isPropagationStopped=Ol,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),r}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=$t(bi),jr=q({},bi,{view:0,detail:0}),Xu=$t(jr),pn,gs,xi,Pn=q({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Or,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(pn=t.screenX-xi.screenX,gs=t.screenY-xi.screenY):gs=pn=0,xi=t),pn)},movementY:function(t){return"movementY"in t?t.movementY:gs}}),vs=$t(Pn),zl=q({},Pn,{dataTransfer:0}),ys=$t(zl),Ju=q({},jr,{relatedTarget:0}),ro=$t(Ju),Fl=q({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),ed=$t(Fl),td=q({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bs=$t(td),nd=q({},bi,{data:0}),xs=$t(nd),Bl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},io={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Mr[t])?!!r[t]:!1}function Or(){return rd}var hn=q({},jr,{key:function(t){if(t.key){var r=Bl[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?io[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Or,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hl=$t(hn),Ul=q({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=$t(Ul),ws=q({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Or}),_s=$t(ws),id=q({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ad=$t(id),Vl=q({},Pn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),od=$t(Vl),En=[9,13,27,32],vr=g&&"CompositionEvent"in window,ua=null;g&&"documentMode"in document&&(ua=document.documentMode);var tr=g&&"TextEvent"in window&&!ua,$l=g&&(!vr||ua&&8<ua&&11>=ua),zr=" ",ql=!1;function wi(t,r){switch(t){case"keyup":return En.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function sd(t,r){switch(t){case"compositionend":return ks(r);case"keypress":return r.which!==32?null:(ql=!0,zr);case"textInput":return t=r.data,t===zr&&ql?null:t;default:return null}}function yr(t,r){if(nr)return t==="compositionend"||!vr&&wi(t,r)?(t=hs(),gr=an=mr=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $l&&r.locale!=="ko"?null:r.data;default:return null}}var ao={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ao[t.type]:r==="textarea"}function oo(t,r,s,d){Al(d),r=u(r,"onChange"),0<r.length&&(s=new ms("onChange","change",null,s,d),t.push({event:s,listeners:r}))}var da=null,on=null;function ld(t){Is(t,0)}function rr(t){var r=Wr(t);if(nt(r))return t}function cd(t,r){if(t==="change")return r}var Fn=!1;if(g){var _i;if(g){var so="oninput"in document;if(!so){var lo=document.createElement("div");lo.setAttribute("oninput","return;"),so=typeof lo.oninput=="function"}_i=so}else _i=!1;Fn=_i&&(!document.documentMode||9<document.documentMode)}function fa(){da&&(da.detachEvent("onpropertychange",co),on=da=null)}function co(t){if(t.propertyName==="value"&&rr(on)){var r=[];oo(r,on,t,rs(t)),Wa(ld,r)}}function uo(t,r,s){t==="focusin"?(fa(),da=r,on=s,da.attachEvent("onpropertychange",co)):t==="focusout"&&fa()}function ki(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rr(on)}function fo(t,r){if(t==="click")return rr(r)}function Ss(t,r){if(t==="input"||t==="change")return rr(r)}function Gl(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Cn=typeof Object.is=="function"?Object.is:Gl;function br(t,r){if(Cn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),d=Object.keys(r);if(s.length!==d.length)return!1;for(d=0;d<s.length;d++){var m=s[d];if(!b.call(r,m)||!Cn(t[m],r[m]))return!1}return!0}function Yl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function As(t,r){var s=Yl(t);t=0;for(var d;s;){if(s.nodeType===3){if(d=t+s.textContent.length,t<=r&&d>=r)return{node:s,offset:r-t};t=d}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yl(s)}}function Kl(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Kl(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Ps(){for(var t=window,r=un();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=un(t.document)}return r}function Es(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Bn(t){var r=Ps(),s=t.focusedElem,d=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Kl(s.ownerDocument.documentElement,s)){if(d!==null&&Es(s)){if(r=d.start,t=d.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var m=s.textContent.length,y=Math.min(d.start,m);d=d.end===void 0?y:Math.min(d.end,m),!t.extend&&y>d&&(m=d,d=y,y=m),m=As(s,y);var S=As(s,d);m&&S&&(t.rangeCount!==1||t.anchorNode!==m.node||t.anchorOffset!==m.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),t.removeAllRanges(),y>d?(t.addRange(r),t.extend(S.node,S.offset)):(r.setEnd(S.node,S.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var po=g&&"documentMode"in document&&11>=document.documentMode,Si=null,Ai=null,pa=null,ho=!1;function Ql(t,r,s){var d=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ho||Si==null||Si!==un(d)||(d=Si,"selectionStart"in d&&Es(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),pa&&br(pa,d)||(pa=d,d=u(Ai,"onSelect"),0<d.length&&(r=new ms("onSelect","select",null,r,s),t.push({event:r,listeners:d}),r.target=Si)))}function xr(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Pi={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},wr={},Cs={};g&&(Cs=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function ha(t){if(wr[t])return wr[t];if(!Pi[t])return t;var r=Pi[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Cs)return wr[t]=r[s];return t}var Xl=ha("animationend"),Hn=ha("animationiteration"),Rs=ha("animationstart"),Ts=ha("transitionend"),Ei=new Map,Jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,r){Ei.set(t,r),f(r,[t])}for(var Fr=0;Fr<Jl.length;Fr++){var mo=Jl[Fr],ec=mo.toLowerCase(),ud=mo[0].toUpperCase()+mo.slice(1);Rn(ec,"on"+ud)}Rn(Xl,"onAnimationEnd"),Rn(Hn,"onAnimationIteration"),Rn(Rs,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Ts,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Ls(t,r,s){var d=t.type||"unknown-event";t.currentTarget=s,os(d,r,void 0,t),t.currentTarget=null}function Is(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var d=t[s],m=d.event;d=d.listeners;e:{var y=void 0;if(r)for(var S=d.length-1;0<=S;S--){var T=d[S],M=T.instance,Y=T.currentTarget;if(T=T.listener,M!==y&&m.isPropagationStopped())break e;Ls(m,T,Y),y=M}else for(S=0;S<d.length;S++){if(T=d[S],M=T.instance,Y=T.currentTarget,T=T.listener,M!==y&&m.isPropagationStopped())break e;Ls(m,T,Y),y=M}}}if(ta)throw t=Va,ta=!1,Va=null,t}function tt(t,r){var s=r[Ii];s===void 0&&(s=r[Ii]=new Set);var d=t+"__bubble";s.has(d)||(nc(r,t,2,!1),s.add(d))}function Ns(t,r,s){var d=0;r&&(d|=4),nc(s,t,d,r)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Ri(t){if(!t[ma]){t[ma]=!0,l.forEach(function(s){s!=="selectionchange"&&(tc.has(s)||Ns(s,!1,t),Ns(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ma]||(r[ma]=!0,Ns("selectionchange",!1,r))}}function nc(t,r,s,d){switch(Ge(r)){case 1:var m=Qu;break;case 4:m=Ml;break;default:m=ca}s=m.bind(null,r,s,t),m=void 0,!as||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),d?m!==void 0?t.addEventListener(r,s,{capture:!0,passive:m}):t.addEventListener(r,s,!0):m!==void 0?t.addEventListener(r,s,{passive:m}):t.addEventListener(r,s,!1)}function n(t,r,s,d,m){var y=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var S=d.tag;if(S===3||S===4){var T=d.stateNode.containerInfo;if(T===m||T.nodeType===8&&T.parentNode===m)break;if(S===4)for(S=d.return;S!==null;){var M=S.tag;if((M===3||M===4)&&(M=S.stateNode.containerInfo,M===m||M.nodeType===8&&M.parentNode===m))return;S=S.return}for(;T!==null;){if(S=Hr(T),S===null)return;if(M=S.tag,M===5||M===6){d=y=S;continue e}T=T.parentNode}}d=d.return}Wa(function(){var Y=y,ae=rs(s),oe=[];e:{var ie=Ei.get(t);if(ie!==void 0){var ge=ms,be=t;switch(t){case"keypress":if(no(s)===0)break e;case"keydown":case"keyup":ge=Hl;break;case"focusin":be="focus",ge=ro;break;case"focusout":be="blur",ge=ro;break;case"beforeblur":case"afterblur":ge=ro;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=ys;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=_s;break;case Xl:case Hn:case Rs:ge=ed;break;case Ts:ge=ad;break;case"scroll":ge=Xu;break;case"wheel":ge=od;break;case"copy":case"cut":case"paste":ge=bs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Wl}var _e=(r&4)!==0,xt=!_e&&t==="scroll",$=_e?ie!==null?ie+"Capture":null:ie;_e=[];for(var z=Y,Z;z!==null;){Z=z;var ue=Z.stateNode;if(Z.tag===5&&ue!==null&&(Z=ue,$!==null&&(ue=Ji(z,$),ue!=null&&_e.push(o(z,ue,Z)))),xt)break;z=z.return}0<_e.length&&(ie=new ge(ie,be,null,s,ae),oe.push({event:ie,listeners:_e}))}}if((r&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",ie&&s!==ns&&(be=s.relatedTarget||s.fromElement)&&(Hr(be)||be[Je]))break e;if((ge||ie)&&(ie=ae.window===ae?ae:(ie=ae.ownerDocument)?ie.defaultView||ie.parentWindow:window,ge?(be=s.relatedTarget||s.toElement,ge=Y,be=be?Hr(be):null,be!==null&&(xt=hr(be),be!==xt||be.tag!==5&&be.tag!==6)&&(be=null)):(ge=null,be=Y),ge!==be)){if(_e=vs,ue="onMouseLeave",$="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(_e=Wl,ue="onPointerLeave",$="onPointerEnter",z="pointer"),xt=ge==null?ie:Wr(ge),Z=be==null?ie:Wr(be),ie=new _e(ue,z+"leave",ge,s,ae),ie.target=xt,ie.relatedTarget=Z,ue=null,Hr(ae)===Y&&(_e=new _e($,z+"enter",be,s,ae),_e.target=Z,_e.relatedTarget=xt,ue=_e),xt=ue,ge&&be)t:{for(_e=ge,$=be,z=0,Z=_e;Z;Z=h(Z))z++;for(Z=0,ue=$;ue;ue=h(ue))Z++;for(;0<z-Z;)_e=h(_e),z--;for(;0<Z-z;)$=h($),Z--;for(;z--;){if(_e===$||$!==null&&_e===$.alternate)break t;_e=h(_e),$=h($)}_e=null}else _e=null;ge!==null&&x(oe,ie,ge,_e,!1),be!==null&&xt!==null&&x(oe,xt,be,_e,!0)}}e:{if(ie=Y?Wr(Y):window,ge=ie.nodeName&&ie.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ie.type==="file")var Ae=cd;else if(Zl(ie))if(Fn)Ae=Ss;else{Ae=ki;var Ie=uo}else(ge=ie.nodeName)&&ge.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Ae=fo);if(Ae&&(Ae=Ae(t,Y))){oo(oe,Ae,s,ae);break e}Ie&&Ie(t,ie,Y),t==="focusout"&&(Ie=ie._wrapperState)&&Ie.controlled&&ie.type==="number"&&en(ie,"number",ie.value)}switch(Ie=Y?Wr(Y):window,t){case"focusin":(Zl(Ie)||Ie.contentEditable==="true")&&(Si=Ie,Ai=Y,pa=null);break;case"focusout":pa=Ai=Si=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Ql(oe,s,ae);break;case"selectionchange":if(po)break;case"keydown":case"keyup":Ql(oe,s,ae)}var Ne;if(vr)e:{switch(t){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else nr?wi(t,s)&&(Fe="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Fe="onCompositionStart");Fe&&($l&&s.locale!=="ko"&&(nr||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&nr&&(Ne=hs()):(mr=ae,an="value"in mr?mr.value:mr.textContent,nr=!0)),Ie=u(Y,Fe),0<Ie.length&&(Fe=new xs(Fe,t,null,s,ae),oe.push({event:Fe,listeners:Ie}),Ne?Fe.data=Ne:(Ne=ks(s),Ne!==null&&(Fe.data=Ne)))),(Ne=tr?sd(t,s):yr(t,s))&&(Y=u(Y,"onBeforeInput"),0<Y.length&&(ae=new xs("onBeforeInput","beforeinput",null,s,ae),oe.push({event:ae,listeners:Y}),ae.data=Ne))}Is(oe,r)})}function o(t,r,s){return{instance:t,listener:r,currentTarget:s}}function u(t,r){for(var s=r+"Capture",d=[];t!==null;){var m=t,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Ji(t,s),y!=null&&d.unshift(o(t,y,m)),y=Ji(t,r),y!=null&&d.push(o(t,y,m))),t=t.return}return d}function h(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x(t,r,s,d,m){for(var y=r._reactName,S=[];s!==null&&s!==d;){var T=s,M=T.alternate,Y=T.stateNode;if(M!==null&&M===d)break;T.tag===5&&Y!==null&&(T=Y,m?(M=Ji(s,y),M!=null&&S.unshift(o(s,M,T))):m||(M=Ji(s,y),M!=null&&S.push(o(s,M,T)))),s=s.return}S.length!==0&&t.push({event:r,listeners:S})}var A=/\r\n?/g,j=/\u0000|\uFFFD/g;function V(t){return(typeof t=="string"?t:""+t).replace(A,`
`).replace(j,"")}function G(t,r,s){if(r=V(r),V(t)!==r&&s)throw Error(a(425))}function te(){}var he=null,Re=null;function We(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Et=typeof setTimeout=="function"?setTimeout:void 0,kt=typeof clearTimeout=="function"?clearTimeout:void 0,sn=typeof Promise=="function"?Promise:void 0,qt=typeof queueMicrotask=="function"?queueMicrotask:typeof sn<"u"?function(t){return sn.resolve(null).then(t).catch(Ti)}:Et;function Ti(t){setTimeout(function(){throw t})}function Ds(t,r){var s=r,d=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(d===0){t.removeChild(m),An(r);return}d--}else s!=="$"&&s!=="$?"&&s!=="$!"||d++;s=m}while(s);An(r)}function _r(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function rc(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Un="__reactFiber$"+Br,Li="__reactProps$"+Br,Je="__reactContainer$"+Br,Ii="__reactEvents$"+Br,dd="__reactListeners$"+Br,fd="__reactHandles$"+Br;function Hr(t){var r=t[Un];if(r)return r;for(var s=t.parentNode;s;){if(r=s[Je]||s[Un]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=rc(t);t!==null;){if(s=t[Un])return s;t=rc(t)}return r}t=s,s=t.parentNode}return null}function Ur(t){return t=t[Un]||t[Je],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(a(33))}function go(t){return t[Li]||null}var pd=[],vo=-1;function Ni(t){return{current:t}}function lt(t){0>vo||(t.current=pd[vo],pd[vo]=null,vo--)}function it(t,r){vo++,pd[vo]=t.current,t.current=r}var Di={},Zt=Ni(Di),mn=Ni(!1),ga=Di;function yo(t,r){var s=t.type.contextTypes;if(!s)return Di;var d=t.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in s)m[y]=r[y];return d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=m),m}function gn(t){return t=t.childContextTypes,t!=null}function ic(){lt(mn),lt(Zt)}function ph(t,r,s){if(Zt.current!==Di)throw Error(a(168));it(Zt,r),it(mn,s)}function hh(t,r,s){var d=t.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return s;d=d.getChildContext();for(var m in d)if(!(m in r))throw Error(a(108,fe(t)||"Unknown",m));return q({},s,d)}function ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Di,ga=Zt.current,it(Zt,t),it(mn,mn.current),!0}function mh(t,r,s){var d=t.stateNode;if(!d)throw Error(a(169));s?(t=hh(t,r,ga),d.__reactInternalMemoizedMergedChildContext=t,lt(mn),lt(Zt),it(Zt,t)):lt(mn),it(mn,s)}var Vr=null,oc=!1,hd=!1;function gh(t){Vr===null?Vr=[t]:Vr.push(t)}function Jb(t){oc=!0,gh(t)}function ji(){if(!hd&&Vr!==null){hd=!0;var t=0,r=Ye;try{var s=Vr;for(Ye=1;t<s.length;t++){var d=s[t];do d=d(!0);while(d!==null)}Vr=null,oc=!1}catch(m){throw Vr!==null&&(Vr=Vr.slice(t+1)),Nl(cs,ji),m}finally{Ye=r,hd=!1}}return null}var bo=[],xo=0,sc=null,lc=0,Wn=[],Vn=0,va=null,$r=1,qr="";function ya(t,r){bo[xo++]=lc,bo[xo++]=sc,sc=t,lc=r}function vh(t,r,s){Wn[Vn++]=$r,Wn[Vn++]=qr,Wn[Vn++]=va,va=t;var d=$r;t=qr;var m=32-He(d)-1;d&=~(1<<m),s+=1;var y=32-He(r)+m;if(30<y){var S=m-m%5;y=(d&(1<<S)-1).toString(32),d>>=S,m-=S,$r=1<<32-He(r)+m|s<<m|d,qr=y+t}else $r=1<<y|s<<m|d,qr=t}function md(t){t.return!==null&&(ya(t,1),vh(t,1,0))}function gd(t){for(;t===sc;)sc=bo[--xo],bo[xo]=null,lc=bo[--xo],bo[xo]=null;for(;t===va;)va=Wn[--Vn],Wn[Vn]=null,qr=Wn[--Vn],Wn[Vn]=null,$r=Wn[--Vn],Wn[Vn]=null}var Tn=null,Ln=null,ut=!1,ir=null;function yh(t,r){var s=Gn(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function bh(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Tn=t,Ln=_r(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Tn=t,Ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=va!==null?{id:$r,overflow:qr}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=Gn(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,Tn=t,Ln=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(ut){var r=Ln;if(r){var s=r;if(!bh(t,r)){if(vd(t))throw Error(a(418));r=_r(s.nextSibling);var d=Tn;r&&bh(t,r)?yh(d,s):(t.flags=t.flags&-4097|2,ut=!1,Tn=t)}}else{if(vd(t))throw Error(a(418));t.flags=t.flags&-4097|2,ut=!1,Tn=t}}}function xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function cc(t){if(t!==Tn)return!1;if(!ut)return xh(t),ut=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!We(t.type,t.memoizedProps)),r&&(r=Ln)){if(vd(t))throw wh(),Error(a(418));for(;r;)yh(t,r),r=_r(r.nextSibling)}if(xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){Ln=_r(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}Ln=null}}else Ln=Tn?_r(t.stateNode.nextSibling):null;return!0}function wh(){for(var t=Ln;t;)t=_r(t.nextSibling)}function wo(){Ln=Tn=null,ut=!1}function bd(t){ir===null?ir=[t]:ir.push(t)}var e1=K.ReactCurrentBatchConfig;function js(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(a(309));var d=s.stateNode}if(!d)throw Error(a(147,t));var m=d,y=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(S){var T=m.refs;S===null?delete T[y]:T[y]=S},r._stringRef=y,r)}if(typeof t!="string")throw Error(a(284));if(!s._owner)throw Error(a(290,t))}return t}function uc(t,r){throw t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function _h(t){var r=t._init;return r(t._payload)}function kh(t){function r($,z){if(t){var Z=$.deletions;Z===null?($.deletions=[z],$.flags|=16):Z.push(z)}}function s($,z){if(!t)return null;for(;z!==null;)r($,z),z=z.sibling;return null}function d($,z){for($=new Map;z!==null;)z.key!==null?$.set(z.key,z):$.set(z.index,z),z=z.sibling;return $}function m($,z){return $=Wi($,z),$.index=0,$.sibling=null,$}function y($,z,Z){return $.index=Z,t?(Z=$.alternate,Z!==null?(Z=Z.index,Z<z?($.flags|=2,z):Z):($.flags|=2,z)):($.flags|=1048576,z)}function S($){return t&&$.alternate===null&&($.flags|=2),$}function T($,z,Z,ue){return z===null||z.tag!==6?(z=df(Z,$.mode,ue),z.return=$,z):(z=m(z,Z),z.return=$,z)}function M($,z,Z,ue){var Ae=Z.type;return Ae===se?ae($,z,Z.props.children,ue,Z.key):z!==null&&(z.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Le&&_h(Ae)===z.type)?(ue=m(z,Z.props),ue.ref=js($,z,Z),ue.return=$,ue):(ue=Dc(Z.type,Z.key,Z.props,null,$.mode,ue),ue.ref=js($,z,Z),ue.return=$,ue)}function Y($,z,Z,ue){return z===null||z.tag!==4||z.stateNode.containerInfo!==Z.containerInfo||z.stateNode.implementation!==Z.implementation?(z=ff(Z,$.mode,ue),z.return=$,z):(z=m(z,Z.children||[]),z.return=$,z)}function ae($,z,Z,ue,Ae){return z===null||z.tag!==7?(z=Pa(Z,$.mode,ue,Ae),z.return=$,z):(z=m(z,Z),z.return=$,z)}function oe($,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number")return z=df(""+z,$.mode,Z),z.return=$,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ee:return Z=Dc(z.type,z.key,z.props,null,$.mode,Z),Z.ref=js($,null,z),Z.return=$,Z;case Q:return z=ff(z,$.mode,Z),z.return=$,z;case Le:var ue=z._init;return oe($,ue(z._payload),Z)}if(tn(z)||ve(z))return z=Pa(z,$.mode,Z,null),z.return=$,z;uc($,z)}return null}function ie($,z,Z,ue){var Ae=z!==null?z.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ae!==null?null:T($,z,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ee:return Z.key===Ae?M($,z,Z,ue):null;case Q:return Z.key===Ae?Y($,z,Z,ue):null;case Le:return Ae=Z._init,ie($,z,Ae(Z._payload),ue)}if(tn(Z)||ve(Z))return Ae!==null?null:ae($,z,Z,ue,null);uc($,Z)}return null}function ge($,z,Z,ue,Ae){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return $=$.get(Z)||null,T(z,$,""+ue,Ae);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case ee:return $=$.get(ue.key===null?Z:ue.key)||null,M(z,$,ue,Ae);case Q:return $=$.get(ue.key===null?Z:ue.key)||null,Y(z,$,ue,Ae);case Le:var Ie=ue._init;return ge($,z,Z,Ie(ue._payload),Ae)}if(tn(ue)||ve(ue))return $=$.get(Z)||null,ae(z,$,ue,Ae,null);uc(z,ue)}return null}function be($,z,Z,ue){for(var Ae=null,Ie=null,Ne=z,Fe=z=0,Dt=null;Ne!==null&&Fe<Z.length;Fe++){Ne.index>Fe?(Dt=Ne,Ne=null):Dt=Ne.sibling;var Xe=ie($,Ne,Z[Fe],ue);if(Xe===null){Ne===null&&(Ne=Dt);break}t&&Ne&&Xe.alternate===null&&r($,Ne),z=y(Xe,z,Fe),Ie===null?Ae=Xe:Ie.sibling=Xe,Ie=Xe,Ne=Dt}if(Fe===Z.length)return s($,Ne),ut&&ya($,Fe),Ae;if(Ne===null){for(;Fe<Z.length;Fe++)Ne=oe($,Z[Fe],ue),Ne!==null&&(z=y(Ne,z,Fe),Ie===null?Ae=Ne:Ie.sibling=Ne,Ie=Ne);return ut&&ya($,Fe),Ae}for(Ne=d($,Ne);Fe<Z.length;Fe++)Dt=ge(Ne,$,Fe,Z[Fe],ue),Dt!==null&&(t&&Dt.alternate!==null&&Ne.delete(Dt.key===null?Fe:Dt.key),z=y(Dt,z,Fe),Ie===null?Ae=Dt:Ie.sibling=Dt,Ie=Dt);return t&&Ne.forEach(function(Vi){return r($,Vi)}),ut&&ya($,Fe),Ae}function _e($,z,Z,ue){var Ae=ve(Z);if(typeof Ae!="function")throw Error(a(150));if(Z=Ae.call(Z),Z==null)throw Error(a(151));for(var Ie=Ae=null,Ne=z,Fe=z=0,Dt=null,Xe=Z.next();Ne!==null&&!Xe.done;Fe++,Xe=Z.next()){Ne.index>Fe?(Dt=Ne,Ne=null):Dt=Ne.sibling;var Vi=ie($,Ne,Xe.value,ue);if(Vi===null){Ne===null&&(Ne=Dt);break}t&&Ne&&Vi.alternate===null&&r($,Ne),z=y(Vi,z,Fe),Ie===null?Ae=Vi:Ie.sibling=Vi,Ie=Vi,Ne=Dt}if(Xe.done)return s($,Ne),ut&&ya($,Fe),Ae;if(Ne===null){for(;!Xe.done;Fe++,Xe=Z.next())Xe=oe($,Xe.value,ue),Xe!==null&&(z=y(Xe,z,Fe),Ie===null?Ae=Xe:Ie.sibling=Xe,Ie=Xe);return ut&&ya($,Fe),Ae}for(Ne=d($,Ne);!Xe.done;Fe++,Xe=Z.next())Xe=ge(Ne,$,Fe,Xe.value,ue),Xe!==null&&(t&&Xe.alternate!==null&&Ne.delete(Xe.key===null?Fe:Xe.key),z=y(Xe,z,Fe),Ie===null?Ae=Xe:Ie.sibling=Xe,Ie=Xe);return t&&Ne.forEach(function(N1){return r($,N1)}),ut&&ya($,Fe),Ae}function xt($,z,Z,ue){if(typeof Z=="object"&&Z!==null&&Z.type===se&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ee:e:{for(var Ae=Z.key,Ie=z;Ie!==null;){if(Ie.key===Ae){if(Ae=Z.type,Ae===se){if(Ie.tag===7){s($,Ie.sibling),z=m(Ie,Z.props.children),z.return=$,$=z;break e}}else if(Ie.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Le&&_h(Ae)===Ie.type){s($,Ie.sibling),z=m(Ie,Z.props),z.ref=js($,Ie,Z),z.return=$,$=z;break e}s($,Ie);break}else r($,Ie);Ie=Ie.sibling}Z.type===se?(z=Pa(Z.props.children,$.mode,ue,Z.key),z.return=$,$=z):(ue=Dc(Z.type,Z.key,Z.props,null,$.mode,ue),ue.ref=js($,z,Z),ue.return=$,$=ue)}return S($);case Q:e:{for(Ie=Z.key;z!==null;){if(z.key===Ie)if(z.tag===4&&z.stateNode.containerInfo===Z.containerInfo&&z.stateNode.implementation===Z.implementation){s($,z.sibling),z=m(z,Z.children||[]),z.return=$,$=z;break e}else{s($,z);break}else r($,z);z=z.sibling}z=ff(Z,$.mode,ue),z.return=$,$=z}return S($);case Le:return Ie=Z._init,xt($,z,Ie(Z._payload),ue)}if(tn(Z))return be($,z,Z,ue);if(ve(Z))return _e($,z,Z,ue);uc($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,z!==null&&z.tag===6?(s($,z.sibling),z=m(z,Z),z.return=$,$=z):(s($,z),z=df(Z,$.mode,ue),z.return=$,$=z),S($)):s($,z)}return xt}var _o=kh(!0),Sh=kh(!1),dc=Ni(null),fc=null,ko=null,xd=null;function wd(){xd=ko=fc=null}function _d(t){var r=dc.current;lt(dc),t._currentValue=r}function kd(t,r,s){for(;t!==null;){var d=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),t===s)break;t=t.return}}function So(t,r){fc=t,xd=ko=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(vn=!0),t.firstContext=null)}function $n(t){var r=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:r,next:null},ko===null){if(fc===null)throw Error(a(308));ko=t,fc.dependencies={lanes:0,firstContext:t}}else ko=ko.next=t;return r}var ba=null;function Sd(t){ba===null?ba=[t]:ba.push(t)}function Ah(t,r,s,d){var m=r.interleaved;return m===null?(s.next=s,Sd(r)):(s.next=m.next,m.next=s),r.interleaved=s,Zr(t,d)}function Zr(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Mi=!1;function Ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Oi(t,r,s){var d=t.updateQueue;if(d===null)return null;if(d=d.shared,(Qe&2)!==0){var m=d.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),d.pending=r,Zr(t,s)}return m=d.interleaved,m===null?(r.next=r,Sd(d)):(r.next=m.next,m.next=r),d.interleaved=r,Zr(t,s)}function pc(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var d=r.lanes;d&=t.pendingLanes,s|=d,r.lanes=s,Jn(t,s)}}function Eh(t,r){var s=t.updateQueue,d=t.alternate;if(d!==null&&(d=d.updateQueue,s===d)){var m=null,y=null;if(s=s.firstBaseUpdate,s!==null){do{var S={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};y===null?m=y=S:y=y.next=S,s=s.next}while(s!==null);y===null?m=y=r:y=y.next=r}else m=y=r;s={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:d.shared,effects:d.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function hc(t,r,s,d){var m=t.updateQueue;Mi=!1;var y=m.firstBaseUpdate,S=m.lastBaseUpdate,T=m.shared.pending;if(T!==null){m.shared.pending=null;var M=T,Y=M.next;M.next=null,S===null?y=Y:S.next=Y,S=M;var ae=t.alternate;ae!==null&&(ae=ae.updateQueue,T=ae.lastBaseUpdate,T!==S&&(T===null?ae.firstBaseUpdate=Y:T.next=Y,ae.lastBaseUpdate=M))}if(y!==null){var oe=m.baseState;S=0,ae=Y=M=null,T=y;do{var ie=T.lane,ge=T.eventTime;if((d&ie)===ie){ae!==null&&(ae=ae.next={eventTime:ge,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var be=t,_e=T;switch(ie=r,ge=s,_e.tag){case 1:if(be=_e.payload,typeof be=="function"){oe=be.call(ge,oe,ie);break e}oe=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=_e.payload,ie=typeof be=="function"?be.call(ge,oe,ie):be,ie==null)break e;oe=q({},oe,ie);break e;case 2:Mi=!0}}T.callback!==null&&T.lane!==0&&(t.flags|=64,ie=m.effects,ie===null?m.effects=[T]:ie.push(T))}else ge={eventTime:ge,lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ae===null?(Y=ae=ge,M=oe):ae=ae.next=ge,S|=ie;if(T=T.next,T===null){if(T=m.shared.pending,T===null)break;ie=T,T=ie.next,ie.next=null,m.lastBaseUpdate=ie,m.shared.pending=null}}while(!0);if(ae===null&&(M=oe),m.baseState=M,m.firstBaseUpdate=Y,m.lastBaseUpdate=ae,r=m.shared.interleaved,r!==null){m=r;do S|=m.lane,m=m.next;while(m!==r)}else y===null&&(m.shared.lanes=0);_a|=S,t.lanes=S,t.memoizedState=oe}}function Ch(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var d=t[r],m=d.callback;if(m!==null){if(d.callback=null,d=s,typeof m!="function")throw Error(a(191,m));m.call(d)}}}var Ms={},kr=Ni(Ms),Os=Ni(Ms),zs=Ni(Ms);function xa(t){if(t===Ms)throw Error(a(174));return t}function Pd(t,r){switch(it(zs,r),it(Os,t),it(kr,Ms),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ui(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ui(r,t)}lt(kr),it(kr,r)}function Ao(){lt(kr),lt(Os),lt(zs)}function Rh(t){xa(zs.current);var r=xa(kr.current),s=ui(r,t.type);r!==s&&(it(Os,t),it(kr,s))}function Ed(t){Os.current===t&&(lt(kr),lt(Os))}var mt=Ni(0);function mc(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Cd=[];function Rd(){for(var t=0;t<Cd.length;t++)Cd[t]._workInProgressVersionPrimary=null;Cd.length=0}var gc=K.ReactCurrentDispatcher,Td=K.ReactCurrentBatchConfig,wa=0,gt=null,Ct=null,It=null,vc=!1,Fs=!1,Bs=0,t1=0;function Gt(){throw Error(a(321))}function Ld(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!Cn(t[s],r[s]))return!1;return!0}function Id(t,r,s,d,m,y){if(wa=y,gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gc.current=t===null||t.memoizedState===null?a1:o1,t=s(d,m),Fs){y=0;do{if(Fs=!1,Bs=0,25<=y)throw Error(a(301));y+=1,It=Ct=null,r.updateQueue=null,gc.current=s1,t=s(d,m)}while(Fs)}if(gc.current=xc,r=Ct!==null&&Ct.next!==null,wa=0,It=Ct=gt=null,vc=!1,r)throw Error(a(300));return t}function Nd(){var t=Bs!==0;return Bs=0,t}function Sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function qn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var r=It===null?gt.memoizedState:It.next;if(r!==null)It=r,Ct=t;else{if(t===null)throw Error(a(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function Hs(t,r){return typeof r=="function"?r(t):r}function Dd(t){var r=qn(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var d=Ct,m=d.baseQueue,y=s.pending;if(y!==null){if(m!==null){var S=m.next;m.next=y.next,y.next=S}d.baseQueue=m=y,s.pending=null}if(m!==null){y=m.next,d=d.baseState;var T=S=null,M=null,Y=y;do{var ae=Y.lane;if((wa&ae)===ae)M!==null&&(M=M.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),d=Y.hasEagerState?Y.eagerState:t(d,Y.action);else{var oe={lane:ae,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};M===null?(T=M=oe,S=d):M=M.next=oe,gt.lanes|=ae,_a|=ae}Y=Y.next}while(Y!==null&&Y!==y);M===null?S=d:M.next=T,Cn(d,r.memoizedState)||(vn=!0),r.memoizedState=d,r.baseState=S,r.baseQueue=M,s.lastRenderedState=d}if(t=s.interleaved,t!==null){m=t;do y=m.lane,gt.lanes|=y,_a|=y,m=m.next;while(m!==t)}else m===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function jd(t){var r=qn(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var d=s.dispatch,m=s.pending,y=r.memoizedState;if(m!==null){s.pending=null;var S=m=m.next;do y=t(y,S.action),S=S.next;while(S!==m);Cn(y,r.memoizedState)||(vn=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),s.lastRenderedState=y}return[y,d]}function Th(){}function Lh(t,r){var s=gt,d=qn(),m=r(),y=!Cn(d.memoizedState,m);if(y&&(d.memoizedState=m,vn=!0),d=d.queue,Md(Dh.bind(null,s,d,t),[t]),d.getSnapshot!==r||y||It!==null&&It.memoizedState.tag&1){if(s.flags|=2048,Us(9,Nh.bind(null,s,d,m,r),void 0,null),Nt===null)throw Error(a(349));(wa&30)!==0||Ih(s,r,m)}return m}function Ih(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Nh(t,r,s,d){r.value=s,r.getSnapshot=d,jh(r)&&Mh(t)}function Dh(t,r,s){return s(function(){jh(r)&&Mh(t)})}function jh(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!Cn(t,s)}catch{return!0}}function Mh(t){var r=Zr(t,1);r!==null&&lr(r,t,1,-1)}function Oh(t){var r=Sr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},r.queue=t,t=t.dispatch=i1.bind(null,gt,t),[r.memoizedState,t]}function Us(t,r,s,d){return t={tag:t,create:r,destroy:s,deps:d,next:null},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(d=s.next,s.next=t,t.next=d,r.lastEffect=t)),t}function zh(){return qn().memoizedState}function yc(t,r,s,d){var m=Sr();gt.flags|=t,m.memoizedState=Us(1|r,s,void 0,d===void 0?null:d)}function bc(t,r,s,d){var m=qn();d=d===void 0?null:d;var y=void 0;if(Ct!==null){var S=Ct.memoizedState;if(y=S.destroy,d!==null&&Ld(d,S.deps)){m.memoizedState=Us(r,s,y,d);return}}gt.flags|=t,m.memoizedState=Us(1|r,s,y,d)}function Fh(t,r){return yc(8390656,8,t,r)}function Md(t,r){return bc(2048,8,t,r)}function Bh(t,r){return bc(4,2,t,r)}function Hh(t,r){return bc(4,4,t,r)}function Uh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Wh(t,r,s){return s=s!=null?s.concat([t]):null,bc(4,4,Uh.bind(null,r,t),s)}function Od(){}function Vh(t,r){var s=qn();r=r===void 0?null:r;var d=s.memoizedState;return d!==null&&r!==null&&Ld(r,d[1])?d[0]:(s.memoizedState=[t,r],t)}function $h(t,r){var s=qn();r=r===void 0?null:r;var d=s.memoizedState;return d!==null&&r!==null&&Ld(r,d[1])?d[0]:(t=t(),s.memoizedState=[t,r],t)}function qh(t,r,s){return(wa&21)===0?(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=s):(Cn(s,r)||(s=jl(),gt.lanes|=s,_a|=s,t.baseState=!0),r)}function n1(t,r){var s=Ye;Ye=s!==0&&4>s?s:4,t(!0);var d=Td.transition;Td.transition={};try{t(!1),r()}finally{Ye=s,Td.transition=d}}function Zh(){return qn().memoizedState}function r1(t,r,s){var d=Hi(t);if(s={lane:d,action:s,hasEagerState:!1,eagerState:null,next:null},Gh(t))Yh(r,s);else if(s=Ah(t,r,s,d),s!==null){var m=cn();lr(s,t,d,m),Kh(s,r,d)}}function i1(t,r,s){var d=Hi(t),m={lane:d,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Yh(r,m);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var S=r.lastRenderedState,T=y(S,s);if(m.hasEagerState=!0,m.eagerState=T,Cn(T,S)){var M=r.interleaved;M===null?(m.next=m,Sd(r)):(m.next=M.next,M.next=m),r.interleaved=m;return}}catch{}finally{}s=Ah(t,r,m,d),s!==null&&(m=cn(),lr(s,t,d,m),Kh(s,r,d))}}function Gh(t){var r=t.alternate;return t===gt||r!==null&&r===gt}function Yh(t,r){Fs=vc=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Kh(t,r,s){if((s&4194240)!==0){var d=r.lanes;d&=t.pendingLanes,s|=d,r.lanes=s,Jn(t,s)}}var xc={readContext:$n,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},a1={readContext:$n,useCallback:function(t,r){return Sr().memoizedState=[t,r===void 0?null:r],t},useContext:$n,useEffect:Fh,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,yc(4194308,4,Uh.bind(null,r,t),s)},useLayoutEffect:function(t,r){return yc(4194308,4,t,r)},useInsertionEffect:function(t,r){return yc(4,2,t,r)},useMemo:function(t,r){var s=Sr();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var d=Sr();return r=s!==void 0?s(r):r,d.memoizedState=d.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},d.queue=t,t=t.dispatch=r1.bind(null,gt,t),[d.memoizedState,t]},useRef:function(t){var r=Sr();return t={current:t},r.memoizedState=t},useState:Oh,useDebugValue:Od,useDeferredValue:function(t){return Sr().memoizedState=t},useTransition:function(){var t=Oh(!1),r=t[0];return t=n1.bind(null,t[1]),Sr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var d=gt,m=Sr();if(ut){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),Nt===null)throw Error(a(349));(wa&30)!==0||Ih(d,r,s)}m.memoizedState=s;var y={value:s,getSnapshot:r};return m.queue=y,Fh(Dh.bind(null,d,y,t),[t]),d.flags|=2048,Us(9,Nh.bind(null,d,y,s,r),void 0,null),s},useId:function(){var t=Sr(),r=Nt.identifierPrefix;if(ut){var s=qr,d=$r;s=(d&~(1<<32-He(d)-1)).toString(32)+s,r=":"+r+"R"+s,s=Bs++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=t1++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},o1={readContext:$n,useCallback:Vh,useContext:$n,useEffect:Md,useImperativeHandle:Wh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:$h,useReducer:Dd,useRef:zh,useState:function(){return Dd(Hs)},useDebugValue:Od,useDeferredValue:function(t){var r=qn();return qh(r,Ct.memoizedState,t)},useTransition:function(){var t=Dd(Hs)[0],r=qn().memoizedState;return[t,r]},useMutableSource:Th,useSyncExternalStore:Lh,useId:Zh,unstable_isNewReconciler:!1},s1={readContext:$n,useCallback:Vh,useContext:$n,useEffect:Md,useImperativeHandle:Wh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:$h,useReducer:jd,useRef:zh,useState:function(){return jd(Hs)},useDebugValue:Od,useDeferredValue:function(t){var r=qn();return Ct===null?r.memoizedState=t:qh(r,Ct.memoizedState,t)},useTransition:function(){var t=jd(Hs)[0],r=qn().memoizedState;return[t,r]},useMutableSource:Th,useSyncExternalStore:Lh,useId:Zh,unstable_isNewReconciler:!1};function ar(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function zd(t,r,s,d){r=t.memoizedState,s=s(d,r),s=s==null?r:q({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wc={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var d=cn(),m=Hi(t),y=Gr(d,m);y.payload=r,s!=null&&(y.callback=s),r=Oi(t,y,m),r!==null&&(lr(r,t,m,d),pc(r,t,m))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var d=cn(),m=Hi(t),y=Gr(d,m);y.tag=1,y.payload=r,s!=null&&(y.callback=s),r=Oi(t,y,m),r!==null&&(lr(r,t,m,d),pc(r,t,m))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=cn(),d=Hi(t),m=Gr(s,d);m.tag=2,r!=null&&(m.callback=r),r=Oi(t,m,d),r!==null&&(lr(r,t,d,s),pc(r,t,d))}};function Qh(t,r,s,d,m,y,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(d,y,S):r.prototype&&r.prototype.isPureReactComponent?!br(s,d)||!br(m,y):!0}function Xh(t,r,s){var d=!1,m=Di,y=r.contextType;return typeof y=="object"&&y!==null?y=$n(y):(m=gn(r)?ga:Zt.current,d=r.contextTypes,y=(d=d!=null)?yo(t,m):Di),r=new r(s,y),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wc,t.stateNode=r,r._reactInternals=t,d&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=m,t.__reactInternalMemoizedMaskedChildContext=y),r}function Jh(t,r,s,d){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,d),r.state!==t&&wc.enqueueReplaceState(r,r.state,null)}function Fd(t,r,s,d){var m=t.stateNode;m.props=s,m.state=t.memoizedState,m.refs={},Ad(t);var y=r.contextType;typeof y=="object"&&y!==null?m.context=$n(y):(y=gn(r)?ga:Zt.current,m.context=yo(t,y)),m.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(zd(t,r,y,s),m.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&wc.enqueueReplaceState(m,m.state,null),hc(t,s,m,d),m.state=t.memoizedState),typeof m.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,r){try{var s="",d=r;do s+=le(d),d=d.return;while(d);var m=s}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:r,stack:m,digest:null}}function Bd(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function Hd(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function em(t,r,s){s=Gr(-1,s),s.tag=3,s.payload={element:null};var d=r.value;return s.callback=function(){Cc||(Cc=!0,nf=d),Hd(t,r)},s}function tm(t,r,s){s=Gr(-1,s),s.tag=3;var d=t.type.getDerivedStateFromError;if(typeof d=="function"){var m=r.value;s.payload=function(){return d(m)},s.callback=function(){Hd(t,r)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(s.callback=function(){Hd(t,r),typeof d!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var S=r.stack;this.componentDidCatch(r.value,{componentStack:S!==null?S:""})}),s}function nm(t,r,s){var d=t.pingCache;if(d===null){d=t.pingCache=new l1;var m=new Set;d.set(r,m)}else m=d.get(r),m===void 0&&(m=new Set,d.set(r,m));m.has(s)||(m.add(s),t=_1.bind(null,t,r,s),r.then(t,t))}function rm(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function im(t,r,s,d,m){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=Gr(-1,1),r.tag=2,Oi(s,r,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=m,t)}var c1=K.ReactCurrentOwner,vn=!1;function ln(t,r,s,d){r.child=t===null?Sh(r,null,s,d):_o(r,t.child,s,d)}function am(t,r,s,d,m){s=s.render;var y=r.ref;return So(r,m),d=Id(t,r,s,d,y,m),s=Nd(),t!==null&&!vn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Yr(t,r,m)):(ut&&s&&md(r),r.flags|=1,ln(t,r,d,m),r.child)}function om(t,r,s,d,m){if(t===null){var y=s.type;return typeof y=="function"&&!uf(y)&&y.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=y,sm(t,r,y,d,m)):(t=Dc(s.type,null,d,r,r.mode,m),t.ref=r.ref,t.return=r,r.child=t)}if(y=t.child,(t.lanes&m)===0){var S=y.memoizedProps;if(s=s.compare,s=s!==null?s:br,s(S,d)&&t.ref===r.ref)return Yr(t,r,m)}return r.flags|=1,t=Wi(y,d),t.ref=r.ref,t.return=r,r.child=t}function sm(t,r,s,d,m){if(t!==null){var y=t.memoizedProps;if(br(y,d)&&t.ref===r.ref)if(vn=!1,r.pendingProps=d=y,(t.lanes&m)!==0)(t.flags&131072)!==0&&(vn=!0);else return r.lanes=t.lanes,Yr(t,r,m)}return Ud(t,r,s,d,m)}function lm(t,r,s){var d=r.pendingProps,m=d.children,y=t!==null?t.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Co,In),In|=s;else{if((s&1073741824)===0)return t=y!==null?y.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,it(Co,In),In|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:s,it(Co,In),In|=d}else y!==null?(d=y.baseLanes|s,r.memoizedState=null):d=s,it(Co,In),In|=d;return ln(t,r,m,s),r.child}function cm(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function Ud(t,r,s,d,m){var y=gn(s)?ga:Zt.current;return y=yo(r,y),So(r,m),s=Id(t,r,s,d,y,m),d=Nd(),t!==null&&!vn?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~m,Yr(t,r,m)):(ut&&d&&md(r),r.flags|=1,ln(t,r,s,m),r.child)}function um(t,r,s,d,m){if(gn(s)){var y=!0;ac(r)}else y=!1;if(So(r,m),r.stateNode===null)kc(t,r),Xh(r,s,d),Fd(r,s,d,m),d=!0;else if(t===null){var S=r.stateNode,T=r.memoizedProps;S.props=T;var M=S.context,Y=s.contextType;typeof Y=="object"&&Y!==null?Y=$n(Y):(Y=gn(s)?ga:Zt.current,Y=yo(r,Y));var ae=s.getDerivedStateFromProps,oe=typeof ae=="function"||typeof S.getSnapshotBeforeUpdate=="function";oe||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(T!==d||M!==Y)&&Jh(r,S,d,Y),Mi=!1;var ie=r.memoizedState;S.state=ie,hc(r,d,S,m),M=r.memoizedState,T!==d||ie!==M||mn.current||Mi?(typeof ae=="function"&&(zd(r,s,ae,d),M=r.memoizedState),(T=Mi||Qh(r,s,T,d,ie,M,Y))?(oe||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(r.flags|=4194308)):(typeof S.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=M),S.props=d,S.state=M,S.context=Y,d=T):(typeof S.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{S=r.stateNode,Ph(t,r),T=r.memoizedProps,Y=r.type===r.elementType?T:ar(r.type,T),S.props=Y,oe=r.pendingProps,ie=S.context,M=s.contextType,typeof M=="object"&&M!==null?M=$n(M):(M=gn(s)?ga:Zt.current,M=yo(r,M));var ge=s.getDerivedStateFromProps;(ae=typeof ge=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(T!==oe||ie!==M)&&Jh(r,S,d,M),Mi=!1,ie=r.memoizedState,S.state=ie,hc(r,d,S,m);var be=r.memoizedState;T!==oe||ie!==be||mn.current||Mi?(typeof ge=="function"&&(zd(r,s,ge,d),be=r.memoizedState),(Y=Mi||Qh(r,s,Y,d,ie,be,M)||!1)?(ae||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(d,be,M),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(d,be,M)),typeof S.componentDidUpdate=="function"&&(r.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof S.componentDidUpdate!="function"||T===t.memoizedProps&&ie===t.memoizedState||(r.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&ie===t.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=be),S.props=d,S.state=be,S.context=M,d=Y):(typeof S.componentDidUpdate!="function"||T===t.memoizedProps&&ie===t.memoizedState||(r.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&ie===t.memoizedState||(r.flags|=1024),d=!1)}return Wd(t,r,s,d,y,m)}function Wd(t,r,s,d,m,y){cm(t,r);var S=(r.flags&128)!==0;if(!d&&!S)return m&&mh(r,s,!1),Yr(t,r,y);d=r.stateNode,c1.current=r;var T=S&&typeof s.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,t!==null&&S?(r.child=_o(r,t.child,null,y),r.child=_o(r,null,T,y)):ln(t,r,T,y),r.memoizedState=d.state,m&&mh(r,s,!0),r.child}function dm(t){var r=t.stateNode;r.pendingContext?ph(t,r.pendingContext,r.pendingContext!==r.context):r.context&&ph(t,r.context,!1),Pd(t,r.containerInfo)}function fm(t,r,s,d,m){return wo(),bd(m),r.flags|=256,ln(t,r,s,d),r.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function pm(t,r,s){var d=r.pendingProps,m=mt.current,y=!1,S=(r.flags&128)!==0,T;if((T=S)||(T=t!==null&&t.memoizedState===null?!1:(m&2)!==0),T?(y=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(m|=1),it(mt,m&1),t===null)return yd(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(S=d.children,t=d.fallback,y?(d=r.mode,y=r.child,S={mode:"hidden",children:S},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=S):y=jc(S,d,0,null),t=Pa(t,d,s,null),y.return=r,t.return=r,y.sibling=t,r.child=y,r.child.memoizedState=$d(s),r.memoizedState=Vd,t):qd(r,S));if(m=t.memoizedState,m!==null&&(T=m.dehydrated,T!==null))return u1(t,r,S,d,T,m,s);if(y){y=d.fallback,S=r.mode,m=t.child,T=m.sibling;var M={mode:"hidden",children:d.children};return(S&1)===0&&r.child!==m?(d=r.child,d.childLanes=0,d.pendingProps=M,r.deletions=null):(d=Wi(m,M),d.subtreeFlags=m.subtreeFlags&14680064),T!==null?y=Wi(T,y):(y=Pa(y,S,s,null),y.flags|=2),y.return=r,d.return=r,d.sibling=y,r.child=d,d=y,y=r.child,S=t.child.memoizedState,S=S===null?$d(s):{baseLanes:S.baseLanes|s,cachePool:null,transitions:S.transitions},y.memoizedState=S,y.childLanes=t.childLanes&~s,r.memoizedState=Vd,d}return y=t.child,t=y.sibling,d=Wi(y,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=s),d.return=r,d.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=d,r.memoizedState=null,d}function qd(t,r){return r=jc({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function _c(t,r,s,d){return d!==null&&bd(d),_o(r,t.child,null,s),t=qd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function u1(t,r,s,d,m,y,S){if(s)return r.flags&256?(r.flags&=-257,d=Bd(Error(a(422))),_c(t,r,S,d)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(y=d.fallback,m=r.mode,d=jc({mode:"visible",children:d.children},m,0,null),y=Pa(y,m,S,null),y.flags|=2,d.return=r,y.return=r,d.sibling=y,r.child=d,(r.mode&1)!==0&&_o(r,t.child,null,S),r.child.memoizedState=$d(S),r.memoizedState=Vd,y);if((r.mode&1)===0)return _c(t,r,S,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var T=d.dgst;return d=T,y=Error(a(419)),d=Bd(y,d,void 0),_c(t,r,S,d)}if(T=(S&t.childLanes)!==0,vn||T){if(d=Nt,d!==null){switch(S&-S){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|S))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,Zr(t,m),lr(d,t,m,-1))}return cf(),d=Bd(Error(a(421))),_c(t,r,S,d)}return m.data==="$?"?(r.flags|=128,r.child=t.child,r=k1.bind(null,t),m._reactRetry=r,null):(t=y.treeContext,Ln=_r(m.nextSibling),Tn=r,ut=!0,ir=null,t!==null&&(Wn[Vn++]=$r,Wn[Vn++]=qr,Wn[Vn++]=va,$r=t.id,qr=t.overflow,va=r),r=qd(r,d.children),r.flags|=4096,r)}function hm(t,r,s){t.lanes|=r;var d=t.alternate;d!==null&&(d.lanes|=r),kd(t.return,r,s)}function Zd(t,r,s,d,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:s,tailMode:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=s,y.tailMode=m)}function mm(t,r,s){var d=r.pendingProps,m=d.revealOrder,y=d.tail;if(ln(t,r,d.children,s),d=mt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,s,r);else if(t.tag===19)hm(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}d&=1}if(it(mt,d),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(s=r.child,m=null;s!==null;)t=s.alternate,t!==null&&mc(t)===null&&(m=s),s=s.sibling;s=m,s===null?(m=r.child,r.child=null):(m=s.sibling,s.sibling=null),Zd(r,!1,m,s,y);break;case"backwards":for(s=null,m=r.child,r.child=null;m!==null;){if(t=m.alternate,t!==null&&mc(t)===null){r.child=m;break}t=m.sibling,m.sibling=s,s=m,m=t}Zd(r,!0,s,null,y);break;case"together":Zd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function kc(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Yr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),_a|=r.lanes,(s&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,s=Wi(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Wi(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function d1(t,r,s){switch(r.tag){case 3:dm(r),wo();break;case 5:Rh(r);break;case 1:gn(r.type)&&ac(r);break;case 4:Pd(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,m=r.memoizedProps.value;it(dc,d._currentValue),d._currentValue=m;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(it(mt,mt.current&1),r.flags|=128,null):(s&r.child.childLanes)!==0?pm(t,r,s):(it(mt,mt.current&1),t=Yr(t,r,s),t!==null?t.sibling:null);it(mt,mt.current&1);break;case 19:if(d=(s&r.childLanes)!==0,(t.flags&128)!==0){if(d)return mm(t,r,s);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),it(mt,mt.current),d)break;return null;case 22:case 23:return r.lanes=0,lm(t,r,s)}return Yr(t,r,s)}var gm,Gd,vm,ym;gm=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Gd=function(){},vm=function(t,r,s,d){var m=t.memoizedProps;if(m!==d){t=r.stateNode,xa(kr.current);var y=null;switch(s){case"input":m=Mn(t,m),d=Mn(t,d),y=[];break;case"select":m=q({},m,{value:void 0}),d=q({},d,{value:void 0}),y=[];break;case"textarea":m=dn(t,m),d=dn(t,d),y=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(t.onclick=te)}di(s,d);var S;s=null;for(Y in m)if(!d.hasOwnProperty(Y)&&m.hasOwnProperty(Y)&&m[Y]!=null)if(Y==="style"){var T=m[Y];for(S in T)T.hasOwnProperty(S)&&(s||(s={}),s[S]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(c.hasOwnProperty(Y)?y||(y=[]):(y=y||[]).push(Y,null));for(Y in d){var M=d[Y];if(T=m!=null?m[Y]:void 0,d.hasOwnProperty(Y)&&M!==T&&(M!=null||T!=null))if(Y==="style")if(T){for(S in T)!T.hasOwnProperty(S)||M&&M.hasOwnProperty(S)||(s||(s={}),s[S]="");for(S in M)M.hasOwnProperty(S)&&T[S]!==M[S]&&(s||(s={}),s[S]=M[S])}else s||(y||(y=[]),y.push(Y,s)),s=M;else Y==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,T=T?T.__html:void 0,M!=null&&T!==M&&(y=y||[]).push(Y,M)):Y==="children"?typeof M!="string"&&typeof M!="number"||(y=y||[]).push(Y,""+M):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(c.hasOwnProperty(Y)?(M!=null&&Y==="onScroll"&&tt("scroll",t),y||T===M||(y=[])):(y=y||[]).push(Y,M))}s&&(y=y||[]).push("style",s);var Y=y;(r.updateQueue=Y)&&(r.flags|=4)}},ym=function(t,r,s,d){s!==d&&(r.flags|=4)};function Ws(t,r){if(!ut)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:d.sibling=null}}function Yt(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,d=0;if(r)for(var m=t.child;m!==null;)s|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)s|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=d,t.childLanes=s,r}function f1(t,r,s){var d=r.pendingProps;switch(gd(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(r),null;case 1:return gn(r.type)&&ic(),Yt(r),null;case 3:return d=r.stateNode,Ao(),lt(mn),lt(Zt),Rd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(t===null||t.child===null)&&(cc(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ir!==null&&(of(ir),ir=null))),Gd(t,r),Yt(r),null;case 5:Ed(r);var m=xa(zs.current);if(s=r.type,t!==null&&r.stateNode!=null)vm(t,r,s,d,m),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(a(166));return Yt(r),null}if(t=xa(kr.current),cc(r)){d=r.stateNode,s=r.type;var y=r.memoizedProps;switch(d[Un]=r,d[Li]=y,t=(r.mode&1)!==0,s){case"dialog":tt("cancel",d),tt("close",d);break;case"iframe":case"object":case"embed":tt("load",d);break;case"video":case"audio":for(m=0;m<Ci.length;m++)tt(Ci[m],d);break;case"source":tt("error",d);break;case"img":case"image":case"link":tt("error",d),tt("load",d);break;case"details":tt("toggle",d);break;case"input":Lt(d,y),tt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},tt("invalid",d);break;case"textarea":Qi(d,y),tt("invalid",d)}di(s,y),m=null;for(var S in y)if(y.hasOwnProperty(S)){var T=y[S];S==="children"?typeof T=="string"?d.textContent!==T&&(y.suppressHydrationWarning!==!0&&G(d.textContent,T,t),m=["children",T]):typeof T=="number"&&d.textContent!==""+T&&(y.suppressHydrationWarning!==!0&&G(d.textContent,T,t),m=["children",""+T]):c.hasOwnProperty(S)&&T!=null&&S==="onScroll"&&tt("scroll",d)}switch(s){case"input":_t(d),At(d,y,!0);break;case"textarea":_t(d),Xi(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=te)}d=m,r.updateQueue=d,d!==null&&(r.flags|=4)}else{S=m.nodeType===9?m:m.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ci(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof d.is=="string"?t=S.createElement(s,{is:d.is}):(t=S.createElement(s),s==="select"&&(S=t,d.multiple?S.multiple=!0:d.size&&(S.size=d.size))):t=S.createElementNS(t,s),t[Un]=r,t[Li]=d,gm(t,r,!1,!1),r.stateNode=t;e:{switch(S=Qn(s,d),s){case"dialog":tt("cancel",t),tt("close",t),m=d;break;case"iframe":case"object":case"embed":tt("load",t),m=d;break;case"video":case"audio":for(m=0;m<Ci.length;m++)tt(Ci[m],t);m=d;break;case"source":tt("error",t),m=d;break;case"img":case"image":case"link":tt("error",t),tt("load",t),m=d;break;case"details":tt("toggle",t),m=d;break;case"input":Lt(t,d),m=Mn(t,d),tt("invalid",t);break;case"option":m=d;break;case"select":t._wrapperState={wasMultiple:!!d.multiple},m=q({},d,{value:void 0}),tt("invalid",t);break;case"textarea":Qi(t,d),m=dn(t,d),tt("invalid",t);break;default:m=d}di(s,m),T=m;for(y in T)if(T.hasOwnProperty(y)){var M=T[y];y==="style"?rn(t,M):y==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Ue(t,M)):y==="children"?typeof M=="string"?(s!=="textarea"||M!=="")&&Ut(t,M):typeof M=="number"&&Ut(t,""+M):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(c.hasOwnProperty(y)?M!=null&&y==="onScroll"&&tt("scroll",t):M!=null&&F(t,y,M,S))}switch(s){case"input":_t(t),At(t,d,!1);break;case"textarea":_t(t),Xi(t);break;case"option":d.value!=null&&t.setAttribute("value",""+Ce(d.value));break;case"select":t.multiple=!!d.multiple,y=d.value,y!=null?Ht(t,!!d.multiple,y,!1):d.defaultValue!=null&&Ht(t,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(t.onclick=te)}switch(s){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Yt(r),null;case 6:if(t&&r.stateNode!=null)ym(t,r,t.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(a(166));if(s=xa(zs.current),xa(kr.current),cc(r)){if(d=r.stateNode,s=r.memoizedProps,d[Un]=r,(y=d.nodeValue!==s)&&(t=Tn,t!==null))switch(t.tag){case 3:G(d.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&G(d.nodeValue,s,(t.mode&1)!==0)}y&&(r.flags|=4)}else d=(s.nodeType===9?s:s.ownerDocument).createTextNode(d),d[Un]=r,r.stateNode=d}return Yt(r),null;case 13:if(lt(mt),d=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&Ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)wh(),wo(),r.flags|=98560,y=!1;else if(y=cc(r),d!==null&&d.dehydrated!==null){if(t===null){if(!y)throw Error(a(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(a(317));y[Un]=r}else wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Yt(r),y=!1}else ir!==null&&(of(ir),ir=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=s,r):(d=d!==null,d!==(t!==null&&t.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(mt.current&1)!==0?Rt===0&&(Rt=3):cf())),r.updateQueue!==null&&(r.flags|=4),Yt(r),null);case 4:return Ao(),Gd(t,r),t===null&&Ri(r.stateNode.containerInfo),Yt(r),null;case 10:return _d(r.type._context),Yt(r),null;case 17:return gn(r.type)&&ic(),Yt(r),null;case 19:if(lt(mt),y=r.memoizedState,y===null)return Yt(r),null;if(d=(r.flags&128)!==0,S=y.rendering,S===null)if(d)Ws(y,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(S=mc(t),S!==null){for(r.flags|=128,Ws(y,!1),d=S.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=s,s=r.child;s!==null;)y=s,t=d,y.flags&=14680066,S=y.alternate,S===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=S.childLanes,y.lanes=S.lanes,y.child=S.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=S.memoizedProps,y.memoizedState=S.memoizedState,y.updateQueue=S.updateQueue,y.type=S.type,t=S.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return it(mt,mt.current&1|2),r.child}t=t.sibling}y.tail!==null&&pt()>Ro&&(r.flags|=128,d=!0,Ws(y,!1),r.lanes=4194304)}else{if(!d)if(t=mc(S),t!==null){if(r.flags|=128,d=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Ws(y,!0),y.tail===null&&y.tailMode==="hidden"&&!S.alternate&&!ut)return Yt(r),null}else 2*pt()-y.renderingStartTime>Ro&&s!==1073741824&&(r.flags|=128,d=!0,Ws(y,!1),r.lanes=4194304);y.isBackwards?(S.sibling=r.child,r.child=S):(s=y.last,s!==null?s.sibling=S:r.child=S,y.last=S)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=pt(),r.sibling=null,s=mt.current,it(mt,d?s&1|2:s&1),r):(Yt(r),null);case 22:case 23:return lf(),d=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(In&1073741824)!==0&&(Yt(r),r.subtreeFlags&6&&(r.flags|=8192)):Yt(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function p1(t,r){switch(gd(r),r.tag){case 1:return gn(r.type)&&ic(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ao(),lt(mn),lt(Zt),Rd(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Ed(r),null;case 13:if(lt(mt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));wo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return lt(mt),null;case 4:return Ao(),null;case 10:return _d(r.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var Sc=!1,Kt=!1,h1=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Eo(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(d){yt(t,r,d)}else s.current=null}function Yd(t,r,s){try{s()}catch(d){yt(t,r,d)}}var bm=!1;function m1(t,r){if(he=la,t=Ps(),Es(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var d=s.getSelection&&s.getSelection();if(d&&d.rangeCount!==0){s=d.anchorNode;var m=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{s.nodeType,y.nodeType}catch{s=null;break e}var S=0,T=-1,M=-1,Y=0,ae=0,oe=t,ie=null;t:for(;;){for(var ge;oe!==s||m!==0&&oe.nodeType!==3||(T=S+m),oe!==y||d!==0&&oe.nodeType!==3||(M=S+d),oe.nodeType===3&&(S+=oe.nodeValue.length),(ge=oe.firstChild)!==null;)ie=oe,oe=ge;for(;;){if(oe===t)break t;if(ie===s&&++Y===m&&(T=S),ie===y&&++ae===d&&(M=S),(ge=oe.nextSibling)!==null)break;oe=ie,ie=oe.parentNode}oe=ge}s=T===-1||M===-1?null:{start:T,end:M}}else s=null}s=s||{start:0,end:0}}else s=null;for(Re={focusedElem:t,selectionRange:s},la=!1,ye=r;ye!==null;)if(r=ye,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ye=t;else for(;ye!==null;){r=ye;try{var be=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var _e=be.memoizedProps,xt=be.memoizedState,$=r.stateNode,z=$.getSnapshotBeforeUpdate(r.elementType===r.type?_e:ar(r.type,_e),xt);$.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(ue){yt(r,r.return,ue)}if(t=r.sibling,t!==null){t.return=r.return,ye=t;break}ye=r.return}return be=bm,bm=!1,be}function Vs(t,r,s){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&t)===t){var y=m.destroy;m.destroy=void 0,y!==void 0&&Yd(r,s,y)}m=m.next}while(m!==d)}}function Ac(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var d=s.create;s.destroy=d()}s=s.next}while(s!==r)}}function Kd(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function xm(t){var r=t.alternate;r!==null&&(t.alternate=null,xm(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Un],delete r[Li],delete r[Ii],delete r[dd],delete r[fd])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wm(t){return t.tag===5||t.tag===3||t.tag===4}function _m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,r,s){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=te));else if(d!==4&&(t=t.child,t!==null))for(Qd(t,r,s),t=t.sibling;t!==null;)Qd(t,r,s),t=t.sibling}function Xd(t,r,s){var d=t.tag;if(d===5||d===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(d!==4&&(t=t.child,t!==null))for(Xd(t,r,s),t=t.sibling;t!==null;)Xd(t,r,s),t=t.sibling}var Mt=null,or=!1;function zi(t,r,s){for(s=s.child;s!==null;)km(t,r,s),s=s.sibling}function km(t,r,s){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(na,s)}catch{}switch(s.tag){case 5:Kt||Eo(s,r);case 6:var d=Mt,m=or;Mt=null,zi(t,r,s),Mt=d,or=m,Mt!==null&&(or?(t=Mt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):Mt.removeChild(s.stateNode));break;case 18:Mt!==null&&(or?(t=Mt,s=s.stateNode,t.nodeType===8?Ds(t.parentNode,s):t.nodeType===1&&Ds(t,s),An(t)):Ds(Mt,s.stateNode));break;case 4:d=Mt,m=or,Mt=s.stateNode.containerInfo,or=!0,zi(t,r,s),Mt=d,or=m;break;case 0:case 11:case 14:case 15:if(!Kt&&(d=s.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var y=m,S=y.destroy;y=y.tag,S!==void 0&&((y&2)!==0||(y&4)!==0)&&Yd(s,r,S),m=m.next}while(m!==d)}zi(t,r,s);break;case 1:if(!Kt&&(Eo(s,r),d=s.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=s.memoizedProps,d.state=s.memoizedState,d.componentWillUnmount()}catch(T){yt(s,r,T)}zi(t,r,s);break;case 21:zi(t,r,s);break;case 22:s.mode&1?(Kt=(d=Kt)||s.memoizedState!==null,zi(t,r,s),Kt=d):zi(t,r,s);break;default:zi(t,r,s)}}function Sm(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new h1),r.forEach(function(d){var m=S1.bind(null,t,d);s.has(d)||(s.add(d),d.then(m,m))})}}function sr(t,r){var s=r.deletions;if(s!==null)for(var d=0;d<s.length;d++){var m=s[d];try{var y=t,S=r,T=S;e:for(;T!==null;){switch(T.tag){case 5:Mt=T.stateNode,or=!1;break e;case 3:Mt=T.stateNode.containerInfo,or=!0;break e;case 4:Mt=T.stateNode.containerInfo,or=!0;break e}T=T.return}if(Mt===null)throw Error(a(160));km(y,S,m),Mt=null,or=!1;var M=m.alternate;M!==null&&(M.return=null),m.return=null}catch(Y){yt(m,r,Y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Am(r,t),r=r.sibling}function Am(t,r){var s=t.alternate,d=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sr(r,t),Ar(t),d&4){try{Vs(3,t,t.return),Ac(3,t)}catch(_e){yt(t,t.return,_e)}try{Vs(5,t,t.return)}catch(_e){yt(t,t.return,_e)}}break;case 1:sr(r,t),Ar(t),d&512&&s!==null&&Eo(s,s.return);break;case 5:if(sr(r,t),Ar(t),d&512&&s!==null&&Eo(s,s.return),t.flags&32){var m=t.stateNode;try{Ut(m,"")}catch(_e){yt(t,t.return,_e)}}if(d&4&&(m=t.stateNode,m!=null)){var y=t.memoizedProps,S=s!==null?s.memoizedProps:y,T=t.type,M=t.updateQueue;if(t.updateQueue=null,M!==null)try{T==="input"&&y.type==="radio"&&y.name!=null&&je(m,y),Qn(T,S);var Y=Qn(T,y);for(S=0;S<M.length;S+=2){var ae=M[S],oe=M[S+1];ae==="style"?rn(m,oe):ae==="dangerouslySetInnerHTML"?Ue(m,oe):ae==="children"?Ut(m,oe):F(m,ae,oe,Y)}switch(T){case"input":ft(m,y);break;case"textarea":Ba(m,y);break;case"select":var ie=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var ge=y.value;ge!=null?Ht(m,!!y.multiple,ge,!1):ie!==!!y.multiple&&(y.defaultValue!=null?Ht(m,!!y.multiple,y.defaultValue,!0):Ht(m,!!y.multiple,y.multiple?[]:"",!1))}m[Li]=y}catch(_e){yt(t,t.return,_e)}}break;case 6:if(sr(r,t),Ar(t),d&4){if(t.stateNode===null)throw Error(a(162));m=t.stateNode,y=t.memoizedProps;try{m.nodeValue=y}catch(_e){yt(t,t.return,_e)}}break;case 3:if(sr(r,t),Ar(t),d&4&&s!==null&&s.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(_e){yt(t,t.return,_e)}break;case 4:sr(r,t),Ar(t);break;case 13:sr(r,t),Ar(t),m=t.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(tf=pt())),d&4&&Sm(t);break;case 22:if(ae=s!==null&&s.memoizedState!==null,t.mode&1?(Kt=(Y=Kt)||ae,sr(r,t),Kt=Y):sr(r,t),Ar(t),d&8192){if(Y=t.memoizedState!==null,(t.stateNode.isHidden=Y)&&!ae&&(t.mode&1)!==0)for(ye=t,ae=t.child;ae!==null;){for(oe=ye=ae;ye!==null;){switch(ie=ye,ge=ie.child,ie.tag){case 0:case 11:case 14:case 15:Vs(4,ie,ie.return);break;case 1:Eo(ie,ie.return);var be=ie.stateNode;if(typeof be.componentWillUnmount=="function"){d=ie,s=ie.return;try{r=d,be.props=r.memoizedProps,be.state=r.memoizedState,be.componentWillUnmount()}catch(_e){yt(d,s,_e)}}break;case 5:Eo(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Cm(oe);continue}}ge!==null?(ge.return=ie,ye=ge):Cm(oe)}ae=ae.sibling}e:for(ae=null,oe=t;;){if(oe.tag===5){if(ae===null){ae=oe;try{m=oe.stateNode,Y?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(T=oe.stateNode,M=oe.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null,T.style.display=nn("display",S))}catch(_e){yt(t,t.return,_e)}}}else if(oe.tag===6){if(ae===null)try{oe.stateNode.nodeValue=Y?"":oe.memoizedProps}catch(_e){yt(t,t.return,_e)}}else if((oe.tag!==22&&oe.tag!==23||oe.memoizedState===null||oe===t)&&oe.child!==null){oe.child.return=oe,oe=oe.child;continue}if(oe===t)break e;for(;oe.sibling===null;){if(oe.return===null||oe.return===t)break e;ae===oe&&(ae=null),oe=oe.return}ae===oe&&(ae=null),oe.sibling.return=oe.return,oe=oe.sibling}}break;case 19:sr(r,t),Ar(t),d&4&&Sm(t);break;case 21:break;default:sr(r,t),Ar(t)}}function Ar(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(wm(s)){var d=s;break e}s=s.return}throw Error(a(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Ut(m,""),d.flags&=-33);var y=_m(t);Xd(t,y,m);break;case 3:case 4:var S=d.stateNode.containerInfo,T=_m(t);Qd(t,T,S);break;default:throw Error(a(161))}}catch(M){yt(t,t.return,M)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function g1(t,r,s){ye=t,Pm(t)}function Pm(t,r,s){for(var d=(t.mode&1)!==0;ye!==null;){var m=ye,y=m.child;if(m.tag===22&&d){var S=m.memoizedState!==null||Sc;if(!S){var T=m.alternate,M=T!==null&&T.memoizedState!==null||Kt;T=Sc;var Y=Kt;if(Sc=S,(Kt=M)&&!Y)for(ye=m;ye!==null;)S=ye,M=S.child,S.tag===22&&S.memoizedState!==null?Rm(m):M!==null?(M.return=S,ye=M):Rm(m);for(;y!==null;)ye=y,Pm(y),y=y.sibling;ye=m,Sc=T,Kt=Y}Em(t)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,ye=y):Em(t)}}function Em(t){for(;ye!==null;){var r=ye;if((r.flags&8772)!==0){var s=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Kt||Ac(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Kt)if(s===null)d.componentDidMount();else{var m=r.elementType===r.type?s.memoizedProps:ar(r.type,s.memoizedProps);d.componentDidUpdate(m,s.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Ch(r,y,d);break;case 3:var S=r.updateQueue;if(S!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Ch(r,S,s)}break;case 5:var T=r.stateNode;if(s===null&&r.flags&4){s=T;var M=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&s.focus();break;case"img":M.src&&(s.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Y=r.alternate;if(Y!==null){var ae=Y.memoizedState;if(ae!==null){var oe=ae.dehydrated;oe!==null&&An(oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Kt||r.flags&512&&Kd(r)}catch(ie){yt(r,r.return,ie)}}if(r===t){ye=null;break}if(s=r.sibling,s!==null){s.return=r.return,ye=s;break}ye=r.return}}function Cm(t){for(;ye!==null;){var r=ye;if(r===t){ye=null;break}var s=r.sibling;if(s!==null){s.return=r.return,ye=s;break}ye=r.return}}function Rm(t){for(;ye!==null;){var r=ye;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{Ac(4,r)}catch(M){yt(r,s,M)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var m=r.return;try{d.componentDidMount()}catch(M){yt(r,m,M)}}var y=r.return;try{Kd(r)}catch(M){yt(r,y,M)}break;case 5:var S=r.return;try{Kd(r)}catch(M){yt(r,S,M)}}}catch(M){yt(r,r.return,M)}if(r===t){ye=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ye=T;break}ye=r.return}}var v1=Math.ceil,Pc=K.ReactCurrentDispatcher,Jd=K.ReactCurrentOwner,Zn=K.ReactCurrentBatchConfig,Qe=0,Nt=null,St=null,Ot=0,In=0,Co=Ni(0),Rt=0,$s=null,_a=0,Ec=0,ef=0,qs=null,yn=null,tf=0,Ro=1/0,Kr=null,Cc=!1,nf=null,Fi=null,Rc=!1,Bi=null,Tc=0,Zs=0,rf=null,Lc=-1,Ic=0;function cn(){return(Qe&6)!==0?pt():Lc!==-1?Lc:Lc=pt()}function Hi(t){return(t.mode&1)===0?1:(Qe&2)!==0&&Ot!==0?Ot&-Ot:e1.transition!==null?(Ic===0&&(Ic=jl()),Ic):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Ge(t.type)),t)}function lr(t,r,s,d){if(50<Zs)throw Zs=0,rf=null,Error(a(185));kn(t,s,d),((Qe&2)===0||t!==Nt)&&(t===Nt&&((Qe&2)===0&&(Ec|=s),Rt===4&&Ui(t,Ot)),bn(t,d),s===1&&Qe===0&&(r.mode&1)===0&&(Ro=pt()+500,oc&&ji()))}function bn(t,r){var s=t.callbackNode;Ga(t,r);var d=rt(t,t===Nt?Ot:0);if(d===0)s!==null&&ls(s),t.callbackNode=null,t.callbackPriority=0;else if(r=d&-d,t.callbackPriority!==r){if(s!=null&&ls(s),r===1)t.tag===0?Jb(Lm.bind(null,t)):gh(Lm.bind(null,t)),qt(function(){(Qe&6)===0&&ji()}),s=null;else{switch(gi(d)){case 1:s=cs;break;case 4:s=Dl;break;case 16:s=qa;break;case 536870912:s=fi;break;default:s=qa}s=Fm(s,Tm.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function Tm(t,r){if(Lc=-1,Ic=0,(Qe&6)!==0)throw Error(a(327));var s=t.callbackNode;if(To()&&t.callbackNode!==s)return null;var d=rt(t,t===Nt?Ot:0);if(d===0)return null;if((d&30)!==0||(d&t.expiredLanes)!==0||r)r=Nc(t,d);else{r=d;var m=Qe;Qe|=2;var y=Nm();(Nt!==t||Ot!==r)&&(Kr=null,Ro=pt()+500,Sa(t,r));do try{x1();break}catch(T){Im(t,T)}while(!0);wd(),Pc.current=y,Qe=m,St!==null?r=0:(Nt=null,Ot=0,r=Rt)}if(r!==0){if(r===2&&(m=Vt(t),m!==0&&(d=m,r=af(t,m))),r===1)throw s=$s,Sa(t,0),Ui(t,d),bn(t,pt()),s;if(r===6)Ui(t,d);else{if(m=t.current.alternate,(d&30)===0&&!y1(m)&&(r=Nc(t,d),r===2&&(y=Vt(t),y!==0&&(d=y,r=af(t,y))),r===1))throw s=$s,Sa(t,0),Ui(t,d),bn(t,pt()),s;switch(t.finishedWork=m,t.finishedLanes=d,r){case 0:case 1:throw Error(a(345));case 2:Aa(t,yn,Kr);break;case 3:if(Ui(t,d),(d&130023424)===d&&(r=tf+500-pt(),10<r)){if(rt(t,0)!==0)break;if(m=t.suspendedLanes,(m&d)!==d){cn(),t.pingedLanes|=t.suspendedLanes&m;break}t.timeoutHandle=Et(Aa.bind(null,t,yn,Kr),r);break}Aa(t,yn,Kr);break;case 4:if(Ui(t,d),(d&4194240)===d)break;for(r=t.eventTimes,m=-1;0<d;){var S=31-He(d);y=1<<S,S=r[S],S>m&&(m=S),d&=~y}if(d=m,d=pt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*v1(d/1960))-d,10<d){t.timeoutHandle=Et(Aa.bind(null,t,yn,Kr),d);break}Aa(t,yn,Kr);break;case 5:Aa(t,yn,Kr);break;default:throw Error(a(329))}}}return bn(t,pt()),t.callbackNode===s?Tm.bind(null,t):null}function af(t,r){var s=qs;return t.current.memoizedState.isDehydrated&&(Sa(t,r).flags|=256),t=Nc(t,r),t!==2&&(r=yn,yn=s,r!==null&&of(r)),t}function of(t){yn===null?yn=t:yn.push.apply(yn,t)}function y1(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var d=0;d<s.length;d++){var m=s[d],y=m.getSnapshot;m=m.value;try{if(!Cn(y(),m))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ui(t,r){for(r&=~ef,r&=~Ec,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-He(r),d=1<<s;t[s]=-1,r&=~d}}function Lm(t){if((Qe&6)!==0)throw Error(a(327));To();var r=rt(t,0);if((r&1)===0)return bn(t,pt()),null;var s=Nc(t,r);if(t.tag!==0&&s===2){var d=Vt(t);d!==0&&(r=d,s=af(t,d))}if(s===1)throw s=$s,Sa(t,0),Ui(t,r),bn(t,pt()),s;if(s===6)throw Error(a(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Aa(t,yn,Kr),bn(t,pt()),null}function sf(t,r){var s=Qe;Qe|=1;try{return t(r)}finally{Qe=s,Qe===0&&(Ro=pt()+500,oc&&ji())}}function ka(t){Bi!==null&&Bi.tag===0&&(Qe&6)===0&&To();var r=Qe;Qe|=1;var s=Zn.transition,d=Ye;try{if(Zn.transition=null,Ye=1,t)return t()}finally{Ye=d,Zn.transition=s,Qe=r,(Qe&6)===0&&ji()}}function lf(){In=Co.current,lt(Co)}function Sa(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,kt(s)),St!==null)for(s=St.return;s!==null;){var d=s;switch(gd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ic();break;case 3:Ao(),lt(mn),lt(Zt),Rd();break;case 5:Ed(d);break;case 4:Ao();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:_d(d.type._context);break;case 22:case 23:lf()}s=s.return}if(Nt=t,St=t=Wi(t.current,null),Ot=In=r,Rt=0,$s=null,ef=Ec=_a=0,yn=qs=null,ba!==null){for(r=0;r<ba.length;r++)if(s=ba[r],d=s.interleaved,d!==null){s.interleaved=null;var m=d.next,y=s.pending;if(y!==null){var S=y.next;y.next=m,d.next=S}s.pending=d}ba=null}return t}function Im(t,r){do{var s=St;try{if(wd(),gc.current=xc,vc){for(var d=gt.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}vc=!1}if(wa=0,It=Ct=gt=null,Fs=!1,Bs=0,Jd.current=null,s===null||s.return===null){Rt=1,$s=r,St=null;break}e:{var y=t,S=s.return,T=s,M=r;if(r=Ot,T.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var Y=M,ae=T,oe=ae.tag;if((ae.mode&1)===0&&(oe===0||oe===11||oe===15)){var ie=ae.alternate;ie?(ae.updateQueue=ie.updateQueue,ae.memoizedState=ie.memoizedState,ae.lanes=ie.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var ge=rm(S);if(ge!==null){ge.flags&=-257,im(ge,S,T,y,r),ge.mode&1&&nm(y,Y,r),r=ge,M=Y;var be=r.updateQueue;if(be===null){var _e=new Set;_e.add(M),r.updateQueue=_e}else be.add(M);break e}else{if((r&1)===0){nm(y,Y,r),cf();break e}M=Error(a(426))}}else if(ut&&T.mode&1){var xt=rm(S);if(xt!==null){(xt.flags&65536)===0&&(xt.flags|=256),im(xt,S,T,y,r),bd(Po(M,T));break e}}y=M=Po(M,T),Rt!==4&&(Rt=2),qs===null?qs=[y]:qs.push(y),y=S;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var $=em(y,M,r);Eh(y,$);break e;case 1:T=M;var z=y.type,Z=y.stateNode;if((y.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Fi===null||!Fi.has(Z)))){y.flags|=65536,r&=-r,y.lanes|=r;var ue=tm(y,T,r);Eh(y,ue);break e}}y=y.return}while(y!==null)}jm(s)}catch(Ae){r=Ae,St===s&&s!==null&&(St=s=s.return);continue}break}while(!0)}function Nm(){var t=Pc.current;return Pc.current=xc,t===null?xc:t}function cf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||(_a&268435455)===0&&(Ec&268435455)===0||Ui(Nt,Ot)}function Nc(t,r){var s=Qe;Qe|=2;var d=Nm();(Nt!==t||Ot!==r)&&(Kr=null,Sa(t,r));do try{b1();break}catch(m){Im(t,m)}while(!0);if(wd(),Qe=s,Pc.current=d,St!==null)throw Error(a(261));return Nt=null,Ot=0,Rt}function b1(){for(;St!==null;)Dm(St)}function x1(){for(;St!==null&&!Yu();)Dm(St)}function Dm(t){var r=zm(t.alternate,t,In);t.memoizedProps=t.pendingProps,r===null?jm(t):St=r,Jd.current=null}function jm(t){var r=t;do{var s=r.alternate;if(t=r.return,(r.flags&32768)===0){if(s=f1(s,r,In),s!==null){St=s;return}}else{if(s=p1(s,r),s!==null){s.flags&=32767,St=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,St=null;return}}if(r=r.sibling,r!==null){St=r;return}St=r=t}while(r!==null);Rt===0&&(Rt=5)}function Aa(t,r,s){var d=Ye,m=Zn.transition;try{Zn.transition=null,Ye=1,w1(t,r,s,d)}finally{Zn.transition=m,Ye=d}return null}function w1(t,r,s,d){do To();while(Bi!==null);if((Qe&6)!==0)throw Error(a(327));s=t.finishedWork;var m=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0;var y=s.lanes|s.childLanes;if(vt(t,y),t===Nt&&(St=Nt=null,Ot=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Rc||(Rc=!0,Fm(qa,function(){return To(),null})),y=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||y){y=Zn.transition,Zn.transition=null;var S=Ye;Ye=1;var T=Qe;Qe|=4,Jd.current=null,m1(t,s),Am(s,t),Bn(Re),la=!!he,Re=he=null,t.current=s,g1(s),$a(),Qe=T,Ye=S,Zn.transition=y}else t.current=s;if(Rc&&(Rc=!1,Bi=t,Tc=m),y=t.pendingLanes,y===0&&(Fi=null),ra(s.stateNode),bn(t,pt()),r!==null)for(d=t.onRecoverableError,s=0;s<r.length;s++)m=r[s],d(m.value,{componentStack:m.stack,digest:m.digest});if(Cc)throw Cc=!1,t=nf,nf=null,t;return(Tc&1)!==0&&t.tag!==0&&To(),y=t.pendingLanes,(y&1)!==0?t===rf?Zs++:(Zs=0,rf=t):Zs=0,ji(),null}function To(){if(Bi!==null){var t=gi(Tc),r=Zn.transition,s=Ye;try{if(Zn.transition=null,Ye=16>t?16:t,Bi===null)var d=!1;else{if(t=Bi,Bi=null,Tc=0,(Qe&6)!==0)throw Error(a(331));var m=Qe;for(Qe|=4,ye=t.current;ye!==null;){var y=ye,S=y.child;if((ye.flags&16)!==0){var T=y.deletions;if(T!==null){for(var M=0;M<T.length;M++){var Y=T[M];for(ye=Y;ye!==null;){var ae=ye;switch(ae.tag){case 0:case 11:case 15:Vs(8,ae,y)}var oe=ae.child;if(oe!==null)oe.return=ae,ye=oe;else for(;ye!==null;){ae=ye;var ie=ae.sibling,ge=ae.return;if(xm(ae),ae===Y){ye=null;break}if(ie!==null){ie.return=ge,ye=ie;break}ye=ge}}}var be=y.alternate;if(be!==null){var _e=be.child;if(_e!==null){be.child=null;do{var xt=_e.sibling;_e.sibling=null,_e=xt}while(_e!==null)}}ye=y}}if((y.subtreeFlags&2064)!==0&&S!==null)S.return=y,ye=S;else e:for(;ye!==null;){if(y=ye,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Vs(9,y,y.return)}var $=y.sibling;if($!==null){$.return=y.return,ye=$;break e}ye=y.return}}var z=t.current;for(ye=z;ye!==null;){S=ye;var Z=S.child;if((S.subtreeFlags&2064)!==0&&Z!==null)Z.return=S,ye=Z;else e:for(S=z;ye!==null;){if(T=ye,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Ac(9,T)}}catch(Ae){yt(T,T.return,Ae)}if(T===S){ye=null;break e}var ue=T.sibling;if(ue!==null){ue.return=T.return,ye=ue;break e}ye=T.return}}if(Qe=m,ji(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(na,t)}catch{}d=!0}return d}finally{Ye=s,Zn.transition=r}}return!1}function Mm(t,r,s){r=Po(s,r),r=em(t,r,1),t=Oi(t,r,1),r=cn(),t!==null&&(kn(t,1,r),bn(t,r))}function yt(t,r,s){if(t.tag===3)Mm(t,t,s);else for(;r!==null;){if(r.tag===3){Mm(r,t,s);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Fi===null||!Fi.has(d))){t=Po(s,t),t=tm(r,t,1),r=Oi(r,t,1),t=cn(),r!==null&&(kn(r,1,t),bn(r,t));break}}r=r.return}}function _1(t,r,s){var d=t.pingCache;d!==null&&d.delete(r),r=cn(),t.pingedLanes|=t.suspendedLanes&s,Nt===t&&(Ot&s)===s&&(Rt===4||Rt===3&&(Ot&130023424)===Ot&&500>pt()-tf?Sa(t,0):ef|=s),bn(t,r)}function Om(t,r){r===0&&((t.mode&1)===0?r=1:(r=hi,hi<<=1,(hi&130023424)===0&&(hi=4194304)));var s=cn();t=Zr(t,r),t!==null&&(kn(t,r,s),bn(t,s))}function k1(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),Om(t,s)}function S1(t,r){var s=0;switch(t.tag){case 13:var d=t.stateNode,m=t.memoizedState;m!==null&&(s=m.retryLane);break;case 19:d=t.stateNode;break;default:throw Error(a(314))}d!==null&&d.delete(r),Om(t,s)}var zm;zm=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||mn.current)vn=!0;else{if((t.lanes&s)===0&&(r.flags&128)===0)return vn=!1,d1(t,r,s);vn=(t.flags&131072)!==0}else vn=!1,ut&&(r.flags&1048576)!==0&&vh(r,lc,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;kc(t,r),t=r.pendingProps;var m=yo(r,Zt.current);So(r,s),m=Id(null,r,d,t,m,s);var y=Nd();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,gn(d)?(y=!0,ac(r)):y=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Ad(r),m.updater=wc,r.stateNode=m,m._reactInternals=r,Fd(r,d,t,s),r=Wd(null,r,d,!0,y,s)):(r.tag=0,ut&&y&&md(r),ln(null,r,m,s),r=r.child),r;case 16:d=r.elementType;e:{switch(kc(t,r),t=r.pendingProps,m=d._init,d=m(d._payload),r.type=d,m=r.tag=P1(d),t=ar(d,t),m){case 0:r=Ud(null,r,d,t,s);break e;case 1:r=um(null,r,d,t,s);break e;case 11:r=am(null,r,d,t,s);break e;case 14:r=om(null,r,d,ar(d.type,t),s);break e}throw Error(a(306,d,""))}return r;case 0:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:ar(d,m),Ud(t,r,d,m,s);case 1:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:ar(d,m),um(t,r,d,m,s);case 3:e:{if(dm(r),t===null)throw Error(a(387));d=r.pendingProps,y=r.memoizedState,m=y.element,Ph(t,r),hc(r,d,null,s);var S=r.memoizedState;if(d=S.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){m=Po(Error(a(423)),r),r=fm(t,r,d,s,m);break e}else if(d!==m){m=Po(Error(a(424)),r),r=fm(t,r,d,s,m);break e}else for(Ln=_r(r.stateNode.containerInfo.firstChild),Tn=r,ut=!0,ir=null,s=Sh(r,null,d,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(wo(),d===m){r=Yr(t,r,s);break e}ln(t,r,d,s)}r=r.child}return r;case 5:return Rh(r),t===null&&yd(r),d=r.type,m=r.pendingProps,y=t!==null?t.memoizedProps:null,S=m.children,We(d,m)?S=null:y!==null&&We(d,y)&&(r.flags|=32),cm(t,r),ln(t,r,S,s),r.child;case 6:return t===null&&yd(r),null;case 13:return pm(t,r,s);case 4:return Pd(r,r.stateNode.containerInfo),d=r.pendingProps,t===null?r.child=_o(r,null,d,s):ln(t,r,d,s),r.child;case 11:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:ar(d,m),am(t,r,d,m,s);case 7:return ln(t,r,r.pendingProps,s),r.child;case 8:return ln(t,r,r.pendingProps.children,s),r.child;case 12:return ln(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(d=r.type._context,m=r.pendingProps,y=r.memoizedProps,S=m.value,it(dc,d._currentValue),d._currentValue=S,y!==null)if(Cn(y.value,S)){if(y.children===m.children&&!mn.current){r=Yr(t,r,s);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var T=y.dependencies;if(T!==null){S=y.child;for(var M=T.firstContext;M!==null;){if(M.context===d){if(y.tag===1){M=Gr(-1,s&-s),M.tag=2;var Y=y.updateQueue;if(Y!==null){Y=Y.shared;var ae=Y.pending;ae===null?M.next=M:(M.next=ae.next,ae.next=M),Y.pending=M}}y.lanes|=s,M=y.alternate,M!==null&&(M.lanes|=s),kd(y.return,s,r),T.lanes|=s;break}M=M.next}}else if(y.tag===10)S=y.type===r.type?null:y.child;else if(y.tag===18){if(S=y.return,S===null)throw Error(a(341));S.lanes|=s,T=S.alternate,T!==null&&(T.lanes|=s),kd(S,s,r),S=y.sibling}else S=y.child;if(S!==null)S.return=y;else for(S=y;S!==null;){if(S===r){S=null;break}if(y=S.sibling,y!==null){y.return=S.return,S=y;break}S=S.return}y=S}ln(t,r,m.children,s),r=r.child}return r;case 9:return m=r.type,d=r.pendingProps.children,So(r,s),m=$n(m),d=d(m),r.flags|=1,ln(t,r,d,s),r.child;case 14:return d=r.type,m=ar(d,r.pendingProps),m=ar(d.type,m),om(t,r,d,m,s);case 15:return sm(t,r,r.type,r.pendingProps,s);case 17:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:ar(d,m),kc(t,r),r.tag=1,gn(d)?(t=!0,ac(r)):t=!1,So(r,s),Xh(r,d,m),Fd(r,d,m,s),Wd(null,r,d,!0,t,s);case 19:return mm(t,r,s);case 22:return lm(t,r,s)}throw Error(a(156,r.tag))};function Fm(t,r){return Nl(t,r)}function A1(t,r,s,d){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,r,s,d){return new A1(t,r,s,d)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P1(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===De)return 11;if(t===Ve)return 14}return 2}function Wi(t,r){var s=t.alternate;return s===null?(s=Gn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Dc(t,r,s,d,m,y){var S=2;if(d=t,typeof t=="function")uf(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case se:return Pa(s.children,m,y,r);case J:S=8,m|=8;break;case me:return t=Gn(12,s,r,m|2),t.elementType=me,t.lanes=y,t;case Ze:return t=Gn(13,s,r,m),t.elementType=Ze,t.lanes=y,t;case de:return t=Gn(19,s,r,m),t.elementType=de,t.lanes=y,t;case Me:return jc(s,m,y,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ke:S=10;break e;case Pe:S=9;break e;case De:S=11;break e;case Ve:S=14;break e;case Le:S=16,d=null;break e}throw Error(a(130,t==null?t:typeof t,""))}return r=Gn(S,s,r,m),r.elementType=t,r.type=d,r.lanes=y,r}function Pa(t,r,s,d){return t=Gn(7,t,d,r),t.lanes=s,t}function jc(t,r,s,d){return t=Gn(22,t,d,r),t.elementType=Me,t.lanes=s,t.stateNode={isHidden:!1},t}function df(t,r,s){return t=Gn(6,t,null,r),t.lanes=s,t}function ff(t,r,s){return r=Gn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function E1(t,r,s,d,m){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function pf(t,r,s,d,m,y,S,T,M){return t=new E1(t,r,s,T,M),r===1?(r=1,y===!0&&(r|=8)):r=0,y=Gn(3,null,null,r),t.current=y,y.stateNode=t,y.memoizedState={element:d,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(y),t}function C1(t,r,s){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:d==null?null:""+d,children:t,containerInfo:r,implementation:s}}function Bm(t){if(!t)return Di;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(a(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(t.tag===1){var s=t.type;if(gn(s))return hh(t,s,r)}return r}function Hm(t,r,s,d,m,y,S,T,M){return t=pf(s,d,!0,t,m,y,S,T,M),t.context=Bm(null),s=t.current,d=cn(),m=Hi(s),y=Gr(d,m),y.callback=r??null,Oi(s,y,m),t.current.lanes=m,kn(t,m,d),bn(t,d),t}function Mc(t,r,s,d){var m=r.current,y=cn(),S=Hi(m);return s=Bm(s),r.context===null?r.context=s:r.pendingContext=s,r=Gr(y,S),r.payload={element:t},d=d===void 0?null:d,d!==null&&(r.callback=d),t=Oi(m,r,S),t!==null&&(lr(t,m,S,y),pc(t,m,S)),S}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function hf(t,r){Um(t,r),(t=t.alternate)&&Um(t,r)}function R1(){return null}var Wm=typeof reportError=="function"?reportError:function(t){console.error(t)};function mf(t){this._internalRoot=t}zc.prototype.render=mf.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));Mc(t,r,null,null)},zc.prototype.unmount=mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ka(function(){Mc(null,t,null,null)}),r[Je]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var r=Qa();t={blockedOn:null,target:t,priority:r};for(var s=0;s<Pt.length&&r!==0&&r<Pt[s].priority;s++);Pt.splice(s,0,t),s===0&&Xa(t)}};function gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function T1(t,r,s,d,m){if(m){if(typeof d=="function"){var y=d;d=function(){var Y=Oc(S);y.call(Y)}}var S=Hm(r,d,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=S,t[Je]=S.current,Ri(t.nodeType===8?t.parentNode:t),ka(),S}for(;m=t.lastChild;)t.removeChild(m);if(typeof d=="function"){var T=d;d=function(){var Y=Oc(M);T.call(Y)}}var M=pf(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=M,t[Je]=M.current,Ri(t.nodeType===8?t.parentNode:t),ka(function(){Mc(r,M,s,d)}),M}function Bc(t,r,s,d,m){var y=s._reactRootContainer;if(y){var S=y;if(typeof m=="function"){var T=m;m=function(){var M=Oc(S);T.call(M)}}Mc(r,S,t,m)}else S=T1(s,r,t,m,d);return Oc(S)}Ya=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=Be(r.pendingLanes);s!==0&&(Jn(r,s|1),bn(r,pt()),(Qe&6)===0&&(Ro=pt()+500,ji()))}break;case 13:ka(function(){var d=Zr(t,1);if(d!==null){var m=cn();lr(d,t,1,m)}}),hf(t,1)}},Ir=function(t){if(t.tag===13){var r=Zr(t,134217728);if(r!==null){var s=cn();lr(r,t,134217728,s)}hf(t,134217728)}},Ka=function(t){if(t.tag===13){var r=Hi(t),s=Zr(t,r);if(s!==null){var d=cn();lr(s,t,r,d)}hf(t,r)}},Qa=function(){return Ye},ia=function(t,r){var s=Ye;try{return Ye=t,r()}finally{Ye=s}},Ua=function(t,r,s){switch(r){case"input":if(ft(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var d=s[r];if(d!==t&&d.form===t.form){var m=go(d);if(!m)throw Error(a(90));nt(d),ft(d,m)}}}break;case"textarea":Ba(t,s);break;case"select":r=s.value,r!=null&&Ht(t,!!s.multiple,r,!1)}},El=sf,Cl=ka;var L1={usingClientEntryPoint:!1,Events:[Ur,Wr,go,Al,Pl,sf]},Gs={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ll(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||R1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{na=Hc.inject(I1),_n=Hc}catch{}}return xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1,xn.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gf(r))throw Error(a(200));return C1(t,r,null,s)},xn.createRoot=function(t,r){if(!gf(t))throw Error(a(299));var s=!1,d="",m=Wm;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=pf(t,1,!1,null,null,s,!1,d,m),t[Je]=r.current,Ri(t.nodeType===8?t.parentNode:t),new mf(r)},xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=Ll(r),t=t===null?null:t.stateNode,t},xn.flushSync=function(t){return ka(t)},xn.hydrate=function(t,r,s){if(!Fc(r))throw Error(a(200));return Bc(null,t,r,!0,s)},xn.hydrateRoot=function(t,r,s){if(!gf(t))throw Error(a(405));var d=s!=null&&s.hydratedSources||null,m=!1,y="",S=Wm;if(s!=null&&(s.unstable_strictMode===!0&&(m=!0),s.identifierPrefix!==void 0&&(y=s.identifierPrefix),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),r=Hm(r,null,t,1,s??null,m,!1,y,S),t[Je]=r.current,Ri(t),d)for(t=0;t<d.length;t++)s=d[t],m=s._getVersion,m=m(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,m]:r.mutableSourceEagerHydrationData.push(s,m);return new zc(r)},xn.render=function(t,r,s){if(!Fc(r))throw Error(a(200));return Bc(null,t,r,!1,s)},xn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(a(40));return t._reactRootContainer?(ka(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Je]=null})}),!0):!1},xn.unstable_batchedUpdates=sf,xn.unstable_renderSubtreeIntoContainer=function(t,r,s,d){if(!Fc(s))throw Error(a(200));if(t==null||t._reactInternals===void 0)throw Error(a(38));return Bc(t,r,s,!1,d)},xn.version="18.3.1-next-f1338f8080-20240426",xn}var Xm;function Hv(){if(Xm)return bf.exports;Xm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),bf.exports=B1(),bf.exports}var Jm;function H1(){if(Jm)return Uc;Jm=1;var e=Hv();return Uc.createRoot=e.createRoot,Uc.hydrateRoot=e.hydrateRoot,Uc}var U1=H1(),P=Cp();const Iu=Ep(P),W1=D1({__proto__:null,default:Iu},[P]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eg="popstate";function V1(e={}){function i(l,c){let{pathname:f,search:p,hash:g}=l.location;return Xf("",{pathname:f,search:p,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function a(l,c){return typeof c=="string"?c:dl(c)}return q1(i,a,null,e)}function dt(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function ur(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function $1(){return Math.random().toString(36).substring(2,10)}function tg(e,i){return{usr:e.state,key:e.key,idx:i}}function Xf(e,i,a=null,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof i=="string"?qo(i):i,state:a,key:i&&i.key||l||$1()}}function dl({pathname:e="/",search:i="",hash:a=""}){return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function qo(e){let i={};if(e){let a=e.indexOf("#");a>=0&&(i.hash=e.substring(a),e=e.substring(0,a));let l=e.indexOf("?");l>=0&&(i.search=e.substring(l),e=e.substring(0,l)),e&&(i.pathname=e)}return i}function q1(e,i,a,l={}){let{window:c=document.defaultView,v5Compat:f=!1}=l,p=c.history,g="POP",b=null,w=k();w==null&&(w=0,p.replaceState({...p.state,idx:w},""));function k(){return(p.state||{idx:null}).idx}function _(){g="POP";let I=k(),N=I==null?null:I-w;w=I,b&&b({action:g,location:C.location,delta:N})}function E(I,N){g="PUSH";let W=Xf(C.location,I,N);w=k()+1;let F=tg(W,w),K=C.createHref(W);try{p.pushState(F,"",K)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;c.location.assign(K)}f&&b&&b({action:g,location:C.location,delta:1})}function D(I,N){g="REPLACE";let W=Xf(C.location,I,N);w=k();let F=tg(W,w),K=C.createHref(W);p.replaceState(F,"",K),f&&b&&b({action:g,location:C.location,delta:0})}function B(I){return Z1(I)}let C={get action(){return g},get location(){return e(c,p)},listen(I){if(b)throw new Error("A history only accepts one active listener");return c.addEventListener(eg,_),b=I,()=>{c.removeEventListener(eg,_),b=null}},createHref(I){return i(c,I)},createURL:B,encodeLocation(I){let N=B(I);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:E,replace:D,go(I){return p.go(I)}};return C}function Z1(e,i=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),dt(a,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:dl(e);return l=l.replace(/ $/,"%20"),!i&&l.startsWith("//")&&(l=a+l),new URL(l,a)}function Uv(e,i,a="/"){return G1(e,i,a,!1)}function G1(e,i,a,l){let c=typeof i=="string"?qo(i):i,f=ri(c.pathname||"/",a);if(f==null)return null;let p=Wv(e);Y1(p);let g=null;for(let b=0;g==null&&b<p.length;++b){let w=ox(f);g=ix(p[b],w,l)}return g}function Wv(e,i=[],a=[],l="",c=!1){let f=(p,g,b=c,w)=>{let k={relativePath:w===void 0?p.path||"":w,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(l)&&b)return;dt(k.relativePath.startsWith(l),`Absolute route path "${k.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(l.length)}let _=ni([l,k.relativePath]),E=a.concat(k);p.children&&p.children.length>0&&(dt(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Wv(p.children,i,E,_,b)),!(p.path==null&&!p.index)&&i.push({path:_,score:nx(_,p.index),routesMeta:E})};return e.forEach((p,g)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))f(p,g);else for(let w of Vv(p.path))f(p,g,!0,w)}),i}function Vv(e){let i=e.split("/");if(i.length===0)return[];let[a,...l]=i,c=a.endsWith("?"),f=a.replace(/\?$/,"");if(l.length===0)return c?[f,""]:[f];let p=Vv(l.join("/")),g=[];return g.push(...p.map(b=>b===""?f:[f,b].join("/"))),c&&g.push(...p),g.map(b=>e.startsWith("/")&&b===""?"/":b)}function Y1(e){e.sort((i,a)=>i.score!==a.score?a.score-i.score:rx(i.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}var K1=/^:[\w-]+$/,Q1=3,X1=2,J1=1,ex=10,tx=-2,ng=e=>e==="*";function nx(e,i){let a=e.split("/"),l=a.length;return a.some(ng)&&(l+=tx),i&&(l+=X1),a.filter(c=>!ng(c)).reduce((c,f)=>c+(K1.test(f)?Q1:f===""?J1:ex),l)}function rx(e,i){return e.length===i.length&&e.slice(0,-1).every((l,c)=>l===i[c])?e[e.length-1]-i[i.length-1]:0}function ix(e,i,a=!1){let{routesMeta:l}=e,c={},f="/",p=[];for(let g=0;g<l.length;++g){let b=l[g],w=g===l.length-1,k=f==="/"?i:i.slice(f.length)||"/",_=hu({path:b.relativePath,caseSensitive:b.caseSensitive,end:w},k),E=b.route;if(!_&&w&&a&&!l[l.length-1].route.index&&(_=hu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},k)),!_)return null;Object.assign(c,_.params),p.push({params:c,pathname:ni([f,_.pathname]),pathnameBase:ux(ni([f,_.pathnameBase])),route:E}),_.pathnameBase!=="/"&&(f=ni([f,_.pathnameBase]))}return p}function hu(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=ax(e.path,e.caseSensitive,e.end),c=i.match(a);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((w,{paramName:k,isOptional:_},E)=>{if(k==="*"){let B=g[E]||"";p=f.slice(0,f.length-B.length).replace(/(.)\/+$/,"$1")}const D=g[E];return _&&!D?w[k]=void 0:w[k]=(D||"").replace(/%2F/g,"/"),w},{}),pathname:f,pathnameBase:p,pattern:e}}function ax(e,i=!1,a=!0){ur(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let l=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,b)=>(l.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(l.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),l]}function ox(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ur(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),e}}function ri(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,l=e.charAt(a);return l&&l!=="/"?null:e.slice(a)||"/"}var sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function lx(e,i="/"){let{pathname:a,search:l="",hash:c=""}=typeof e=="string"?qo(e):e,f;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?f=rg(a.substring(1),"/"):f=rg(a,i)):f=i,{pathname:f,search:dx(l),hash:fx(c)}}function rg(e,i){let a=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function _f(e,i,a,l){return`Cannot include a '${e}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cx(e){return e.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Rp(e){let i=cx(e);return i.map((a,l)=>l===i.length-1?a.pathname:a.pathnameBase)}function Tp(e,i,a,l=!1){let c;typeof e=="string"?c=qo(e):(c={...e},dt(!c.pathname||!c.pathname.includes("?"),_f("?","pathname","search",c)),dt(!c.pathname||!c.pathname.includes("#"),_f("#","pathname","hash",c)),dt(!c.search||!c.search.includes("#"),_f("#","search","hash",c)));let f=e===""||c.pathname==="",p=f?"/":c.pathname,g;if(p==null)g=a;else{let _=i.length-1;if(!l&&p.startsWith("..")){let E=p.split("/");for(;E[0]==="..";)E.shift(),_-=1;c.pathname=E.join("/")}g=_>=0?i[_]:"/"}let b=lx(c,g),w=p&&p!=="/"&&p.endsWith("/"),k=(f||p===".")&&a.endsWith("/");return!b.pathname.endsWith("/")&&(w||k)&&(b.pathname+="/"),b}var ni=e=>e.join("/").replace(/\/\/+/g,"/"),ux=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,px=class{constructor(e,i,a,l=!1){this.status=e,this.statusText=i||"",this.internal=l,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function mx(e){return e.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qv(e,i){let a=e;if(typeof a!="string"||!sx.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let l=a,c=!1;if($v)try{let f=new URL(window.location.href),p=a.startsWith("//")?new URL(f.protocol+a):new URL(a),g=ri(p.pathname,i);p.origin===f.origin&&g!=null?a=g+p.search+p.hash:c=!0}catch{ur(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zv=["POST","PUT","PATCH","DELETE"];new Set(Zv);var gx=["GET",...Zv];new Set(gx);var Zo=P.createContext(null);Zo.displayName="DataRouter";var Nu=P.createContext(null);Nu.displayName="DataRouterState";var vx=P.createContext(!1),Gv=P.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var yx=P.createContext(new Map);yx.displayName="Fetchers";var bx=P.createContext(null);bx.displayName="Await";var Dn=P.createContext(null);Dn.displayName="Navigation";var ml=P.createContext(null);ml.displayName="Location";var fr=P.createContext({outlet:null,matches:[],isDataRoute:!1});fr.displayName="Route";var Lp=P.createContext(null);Lp.displayName="RouteError";var Yv="REACT_ROUTER_ERROR",xx="REDIRECT",wx="ROUTE_ERROR_RESPONSE";function _x(e){if(e.startsWith(`${Yv}:${xx}:{`))try{let i=JSON.parse(e.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function kx(e){if(e.startsWith(`${Yv}:${wx}:{`))try{let i=JSON.parse(e.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new px(i.status,i.statusText,i.data)}catch{}}function Sx(e,{relative:i}={}){dt(Go(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:l}=P.useContext(Dn),{hash:c,pathname:f,search:p}=gl(e,{relative:i}),g=f;return a!=="/"&&(g=f==="/"?a:ni([a,f])),l.createHref({pathname:g,search:p,hash:c})}function Go(){return P.useContext(ml)!=null}function oi(){return dt(Go(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(ml).location}var Kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qv(e){P.useContext(Dn).static||P.useLayoutEffect(e)}function Ip(){let{isDataRoute:e}=P.useContext(fr);return e?zx():Ax()}function Ax(){dt(Go(),"useNavigate() may be used only in the context of a <Router> component.");let e=P.useContext(Zo),{basename:i,navigator:a}=P.useContext(Dn),{matches:l}=P.useContext(fr),{pathname:c}=oi(),f=JSON.stringify(Rp(l)),p=P.useRef(!1);return Qv(()=>{p.current=!0}),P.useCallback((b,w={})=>{if(ur(p.current,Kv),!p.current)return;if(typeof b=="number"){a.go(b);return}let k=Tp(b,JSON.parse(f),c,w.relative==="path");e==null&&i!=="/"&&(k.pathname=k.pathname==="/"?i:ni([i,k.pathname])),(w.replace?a.replace:a.push)(k,w.state,w)},[i,a,f,c,e])}P.createContext(null);function Px(){let{matches:e}=P.useContext(fr),i=e[e.length-1];return i?i.params:{}}function gl(e,{relative:i}={}){let{matches:a}=P.useContext(fr),{pathname:l}=oi(),c=JSON.stringify(Rp(a));return P.useMemo(()=>Tp(e,JSON.parse(c),l,i==="path"),[e,c,l,i])}function Ex(e,i){return Xv(e,i)}function Xv(e,i,a,l,c){var W;dt(Go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=P.useContext(Dn),{matches:p}=P.useContext(fr),g=p[p.length-1],b=g?g.params:{},w=g?g.pathname:"/",k=g?g.pathnameBase:"/",_=g&&g.route;{let F=_&&_.path||"";ey(w,!_||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let E=oi(),D;if(i){let F=typeof i=="string"?qo(i):i;dt(k==="/"||((W=F.pathname)==null?void 0:W.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${F.pathname}" was given in the \`location\` prop.`),D=F}else D=E;let B=D.pathname||"/",C=B;if(k!=="/"){let F=k.replace(/^\//,"").split("/");C="/"+B.replace(/^\//,"").split("/").slice(F.length).join("/")}let I=Uv(e,{pathname:C});ur(_||I!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),ur(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Ix(I&&I.map(F=>Object.assign({},F,{params:Object.assign({},b,F.params),pathname:ni([k,f.encodeLocation?f.encodeLocation(F.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?k:ni([k,f.encodeLocation?f.encodeLocation(F.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathnameBase])})),p,a,l,c);return i&&N?P.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},N):N}function Cx(){let e=Ox(),i=hx(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",e),p=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:f},"ErrorBoundary")," or"," ",P.createElement("code",{style:f},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},i),a?P.createElement("pre",{style:c},a):null,p)}var Rx=P.createElement(Cx,null),Jv=class extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){this.props.onError?this.props.onError(e,i):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=kx(e.digest);a&&(e=a)}let i=e!==void 0?P.createElement(fr.Provider,{value:this.props.routeContext},P.createElement(Lp.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?P.createElement(Tx,{error:e},i):i}};Jv.contextType=vx;var kf=new WeakMap;function Tx({children:e,error:i}){let{basename:a}=P.useContext(Dn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let l=_x(i.digest);if(l){let c=kf.get(i);if(c)throw c;let f=qv(l.location,a);if($v&&!kf.get(i))if(f.isExternal||l.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw kf.set(i,p),p}return P.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return e}function Lx({routeContext:e,match:i,children:a}){let l=P.useContext(Zo);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),P.createElement(fr.Provider,{value:e},a)}function Ix(e,i=[],a=null,l=null,c=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(i.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let f=e,p=a==null?void 0:a.errors;if(p!=null){let k=f.findIndex(_=>_.route.id&&(p==null?void 0:p[_.route.id])!==void 0);dt(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,k+1))}let g=!1,b=-1;if(a)for(let k=0;k<f.length;k++){let _=f[k];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(b=k),_.route.id){let{loaderData:E,errors:D}=a,B=_.route.loader&&!E.hasOwnProperty(_.route.id)&&(!D||D[_.route.id]===void 0);if(_.route.lazy||B){g=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}let w=a&&l?(k,_)=>{var E,D;l(k,{location:a.location,params:((D=(E=a.matches)==null?void 0:E[0])==null?void 0:D.params)??{},unstable_pattern:mx(a.matches),errorInfo:_})}:void 0;return f.reduceRight((k,_,E)=>{let D,B=!1,C=null,I=null;a&&(D=p&&_.route.id?p[_.route.id]:void 0,C=_.route.errorElement||Rx,g&&(b<0&&E===0?(ey("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,I=null):b===E&&(B=!0,I=_.route.hydrateFallbackElement||null)));let N=i.concat(f.slice(0,E+1)),W=()=>{let F;return D?F=C:B?F=I:_.route.Component?F=P.createElement(_.route.Component,null):_.route.element?F=_.route.element:F=k,P.createElement(Lx,{match:_,routeContext:{outlet:k,matches:N,isDataRoute:a!=null},children:F})};return a&&(_.route.ErrorBoundary||_.route.errorElement||E===0)?P.createElement(Jv,{location:a.location,revalidation:a.revalidation,component:C,error:D,children:W(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:w}):W()},null)}function Np(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nx(e){let i=P.useContext(Zo);return dt(i,Np(e)),i}function Dx(e){let i=P.useContext(Nu);return dt(i,Np(e)),i}function jx(e){let i=P.useContext(fr);return dt(i,Np(e)),i}function Dp(e){let i=jx(e),a=i.matches[i.matches.length-1];return dt(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function Mx(){return Dp("useRouteId")}function Ox(){var l;let e=P.useContext(Lp),i=Dx("useRouteError"),a=Dp("useRouteError");return e!==void 0?e:(l=i.errors)==null?void 0:l[a]}function zx(){let{router:e}=Nx("useNavigate"),i=Dp("useNavigate"),a=P.useRef(!1);return Qv(()=>{a.current=!0}),P.useCallback(async(c,f={})=>{ur(a.current,Kv),a.current&&(typeof c=="number"?await e.navigate(c):await e.navigate(c,{fromRouteId:i,...f}))},[e,i])}var ig={};function ey(e,i,a){!i&&!ig[e]&&(ig[e]=!0,ur(!1,a))}P.memo(Fx);function Fx({routes:e,future:i,state:a,onError:l}){return Xv(e,void 0,a,l,i)}function mu({to:e,replace:i,state:a,relative:l}){dt(Go(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=P.useContext(Dn);ur(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=P.useContext(fr),{pathname:p}=oi(),g=Ip(),b=Tp(e,Rp(f),p,l==="path"),w=JSON.stringify(b);return P.useEffect(()=>{g(JSON.parse(w),{replace:i,state:a,relative:l})},[g,w,l,i,a]),null}function Jr(e){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bx({basename:e="/",children:i=null,location:a,navigationType:l="POP",navigator:c,static:f=!1,unstable_useTransitions:p}){dt(!Go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=e.replace(/^\/*/,"/"),b=P.useMemo(()=>({basename:g,navigator:c,static:f,unstable_useTransitions:p,future:{}}),[g,c,f,p]);typeof a=="string"&&(a=qo(a));let{pathname:w="/",search:k="",hash:_="",state:E=null,key:D="default"}=a,B=P.useMemo(()=>{let C=ri(w,g);return C==null?null:{location:{pathname:C,search:k,hash:_,state:E,key:D},navigationType:l}},[g,w,k,_,E,D,l]);return ur(B!=null,`<Router basename="${g}"> is not able to match the URL "${w}${k}${_}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:P.createElement(Dn.Provider,{value:b},P.createElement(ml.Provider,{children:i,value:B}))}function Hx({children:e,location:i}){return Ex(Jf(e),i)}function Jf(e,i=[]){let a=[];return P.Children.forEach(e,(l,c)=>{if(!P.isValidElement(l))return;let f=[...i,c];if(l.type===P.Fragment){a.push.apply(a,Jf(l.props.children,f));return}dt(l.type===Jr,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=Jf(l.props.children,f)),a.push(p)}),a}var ru="get",iu="application/x-www-form-urlencoded";function Du(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Ux(e){return Du(e)&&e.tagName.toLowerCase()==="button"}function Wx(e){return Du(e)&&e.tagName.toLowerCase()==="form"}function Vx(e){return Du(e)&&e.tagName.toLowerCase()==="input"}function $x(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qx(e,i){return e.button===0&&(!i||i==="_self")&&!$x(e)}var Wc=null;function Zx(){if(Wc===null)try{new FormData(document.createElement("form"),0),Wc=!1}catch{Wc=!0}return Wc}var Gx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sf(e){return e!=null&&!Gx.has(e)?(ur(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):e}function Yx(e,i){let a,l,c,f,p;if(Wx(e)){let g=e.getAttribute("action");l=g?ri(g,i):null,a=e.getAttribute("method")||ru,c=Sf(e.getAttribute("enctype"))||iu,f=new FormData(e)}else if(Ux(e)||Vx(e)&&(e.type==="submit"||e.type==="image")){let g=e.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=e.getAttribute("formaction")||g.getAttribute("action");if(l=b?ri(b,i):null,a=e.getAttribute("formmethod")||g.getAttribute("method")||ru,c=Sf(e.getAttribute("formenctype"))||Sf(g.getAttribute("enctype"))||iu,f=new FormData(g,e),!Zx()){let{name:w,type:k,value:_}=e;if(k==="image"){let E=w?`${w}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else w&&f.append(w,_)}}else{if(Du(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ru,l=null,c=iu,p=e}return f&&c==="text/plain"&&(p=f,f=void 0),{action:l,method:a.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jp(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function Kx(e,i,a,l){let c=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:i&&ri(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${l}`,c}async function Qx(e,i){if(e.id in i)return i[e.id];try{let a=await import(e.module);return i[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jx(e,i,a){let l=await Promise.all(e.map(async c=>{let f=i.routes[c.route.id];if(f){let p=await Qx(f,a);return p.links?p.links():[]}return[]}));return rw(l.flat(1).filter(Xx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function ag(e,i,a,l,c,f){let p=(b,w)=>a[w]?b.route.id!==a[w].route.id:!0,g=(b,w)=>{var k;return a[w].pathname!==b.pathname||((k=a[w].route.path)==null?void 0:k.endsWith("*"))&&a[w].params["*"]!==b.params["*"]};return f==="assets"?i.filter((b,w)=>p(b,w)||g(b,w)):f==="data"?i.filter((b,w)=>{var _;let k=l.routes[b.route.id];if(!k||!k.hasLoader)return!1;if(p(b,w)||g(b,w))return!0;if(b.route.shouldRevalidate){let E=b.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((_=a[0])==null?void 0:_.params)||{},nextUrl:new URL(e,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ew(e,i,{includeHydrateFallback:a}={}){return tw(e.map(l=>{let c=i.routes[l.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),a&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function tw(e){return[...new Set(e)]}function nw(e){let i={},a=Object.keys(e).sort();for(let l of a)i[l]=e[l];return i}function rw(e,i){let a=new Set;return new Set(i),e.reduce((l,c)=>{let f=JSON.stringify(nw(c));return a.has(f)||(a.add(f),l.push({key:f,link:c})),l},[])}function ty(){let e=P.useContext(Zo);return jp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function iw(){let e=P.useContext(Nu);return jp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Mp=P.createContext(void 0);Mp.displayName="FrameworkContext";function ny(){let e=P.useContext(Mp);return jp(e,"You must render this element inside a <HydratedRouter> element"),e}function aw(e,i){let a=P.useContext(Mp),[l,c]=P.useState(!1),[f,p]=P.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:w,onMouseLeave:k,onTouchStart:_}=i,E=P.useRef(null);P.useEffect(()=>{if(e==="render"&&p(!0),e==="viewport"){let C=N=>{N.forEach(W=>{p(W.isIntersecting)})},I=new IntersectionObserver(C,{threshold:.5});return E.current&&I.observe(E.current),()=>{I.disconnect()}}},[e]),P.useEffect(()=>{if(l){let C=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(C)}}},[l]);let D=()=>{c(!0)},B=()=>{c(!1),p(!1)};return a?e!=="intent"?[f,E,{}]:[f,E,{onFocus:Ks(g,D),onBlur:Ks(b,B),onMouseEnter:Ks(w,D),onMouseLeave:Ks(k,B),onTouchStart:Ks(_,D)}]:[!1,E,{}]}function Ks(e,i){return a=>{e&&e(a),a.defaultPrevented||i(a)}}function ow({page:e,...i}){let{router:a}=ty(),l=P.useMemo(()=>Uv(a.routes,e,a.basename),[a.routes,e,a.basename]);return l?P.createElement(lw,{page:e,matches:l,...i}):null}function sw(e){let{manifest:i,routeModules:a}=ny(),[l,c]=P.useState([]);return P.useEffect(()=>{let f=!1;return Jx(e,i,a).then(p=>{f||c(p)}),()=>{f=!0}},[e,i,a]),l}function lw({page:e,matches:i,...a}){let l=oi(),{future:c,manifest:f,routeModules:p}=ny(),{basename:g}=ty(),{loaderData:b,matches:w}=iw(),k=P.useMemo(()=>ag(e,i,w,f,l,"data"),[e,i,w,f,l]),_=P.useMemo(()=>ag(e,i,w,f,l,"assets"),[e,i,w,f,l]),E=P.useMemo(()=>{if(e===l.pathname+l.search+l.hash)return[];let C=new Set,I=!1;if(i.forEach(W=>{var K;let F=f.routes[W.route.id];!F||!F.hasLoader||(!k.some(ee=>ee.route.id===W.route.id)&&W.route.id in b&&((K=p[W.route.id])!=null&&K.shouldRevalidate)||F.hasClientLoader?I=!0:C.add(W.route.id))}),C.size===0)return[];let N=Kx(e,g,c.unstable_trailingSlashAwareDataRequests,"data");return I&&C.size>0&&N.searchParams.set("_routes",i.filter(W=>C.has(W.route.id)).map(W=>W.route.id).join(",")),[N.pathname+N.search]},[g,c.unstable_trailingSlashAwareDataRequests,b,l,f,k,i,e,p]),D=P.useMemo(()=>ew(_,f),[_,f]),B=sw(_);return P.createElement(P.Fragment,null,E.map(C=>P.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...a})),D.map(C=>P.createElement("link",{key:C,rel:"modulepreload",href:C,...a})),B.map(({key:C,link:I})=>P.createElement("link",{key:C,nonce:a.nonce,...I,crossOrigin:I.crossOrigin??a.crossOrigin})))}function cw(...e){return i=>{e.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uw&&(window.__reactRouterVersion="7.13.0")}catch{}function dw({basename:e,children:i,unstable_useTransitions:a,window:l}){let c=P.useRef();c.current==null&&(c.current=V1({window:l,v5Compat:!0}));let f=c.current,[p,g]=P.useState({action:f.action,location:f.location}),b=P.useCallback(w=>{a===!1?g(w):P.startTransition(()=>g(w))},[a]);return P.useLayoutEffect(()=>f.listen(b),[f,b]),P.createElement(Bx,{basename:e,children:i,location:p.location,navigationType:p.action,navigator:f,unstable_useTransitions:a})}var ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yn=P.forwardRef(function({onClick:i,discover:a="render",prefetch:l="none",relative:c,reloadDocument:f,replace:p,state:g,target:b,to:w,preventScrollReset:k,viewTransition:_,unstable_defaultShouldRevalidate:E,...D},B){let{basename:C,unstable_useTransitions:I}=P.useContext(Dn),N=typeof w=="string"&&ry.test(w),W=qv(w,C);w=W.to;let F=Sx(w,{relative:c}),[K,ee,Q]=aw(l,D),se=hw(w,{replace:p,state:g,target:b,preventScrollReset:k,relative:c,viewTransition:_,unstable_defaultShouldRevalidate:E,unstable_useTransitions:I});function J(ke){i&&i(ke),ke.defaultPrevented||se(ke)}let me=P.createElement("a",{...D,...Q,href:W.absoluteURL||F,onClick:W.isExternal||f?i:J,ref:cw(B,ee),target:b,"data-discover":!N&&a==="render"?"true":void 0});return K&&!N?P.createElement(P.Fragment,null,me,P.createElement(ow,{page:F})):me});Yn.displayName="Link";var iy=P.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:l="",end:c=!1,style:f,to:p,viewTransition:g,children:b,...w},k){let _=gl(p,{relative:w.relative}),E=oi(),D=P.useContext(Nu),{navigator:B,basename:C}=P.useContext(Dn),I=D!=null&&bw(_)&&g===!0,N=B.encodeLocation?B.encodeLocation(_).pathname:_.pathname,W=E.pathname,F=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;a||(W=W.toLowerCase(),F=F?F.toLowerCase():null,N=N.toLowerCase()),F&&C&&(F=ri(F,C)||F);const K=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let ee=W===N||!c&&W.startsWith(N)&&W.charAt(K)==="/",Q=F!=null&&(F===N||!c&&F.startsWith(N)&&F.charAt(N.length)==="/"),se={isActive:ee,isPending:Q,isTransitioning:I},J=ee?i:void 0,me;typeof l=="function"?me=l(se):me=[l,ee?"active":null,Q?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let ke=typeof f=="function"?f(se):f;return P.createElement(Yn,{...w,"aria-current":J,className:me,ref:k,style:ke,to:p,viewTransition:g},typeof b=="function"?b(se):b)});iy.displayName="NavLink";var fw=P.forwardRef(({discover:e="render",fetcherKey:i,navigate:a,reloadDocument:l,replace:c,state:f,method:p=ru,action:g,onSubmit:b,relative:w,preventScrollReset:k,viewTransition:_,unstable_defaultShouldRevalidate:E,...D},B)=>{let{unstable_useTransitions:C}=P.useContext(Dn),I=vw(),N=yw(g,{relative:w}),W=p.toLowerCase()==="get"?"get":"post",F=typeof g=="string"&&ry.test(g),K=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let Q=ee.nativeEvent.submitter,se=(Q==null?void 0:Q.getAttribute("formmethod"))||p,J=()=>I(Q||ee.currentTarget,{fetcherKey:i,method:se,navigate:a,replace:c,state:f,relative:w,preventScrollReset:k,viewTransition:_,unstable_defaultShouldRevalidate:E});C&&a!==!1?P.startTransition(()=>J()):J()};return P.createElement("form",{ref:B,method:W,action:N,onSubmit:l?b:K,...D,"data-discover":!F&&e==="render"?"true":void 0})});fw.displayName="Form";function pw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ay(e){let i=P.useContext(Zo);return dt(i,pw(e)),i}function hw(e,{target:i,replace:a,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let w=Ip(),k=oi(),_=gl(e,{relative:f});return P.useCallback(E=>{if(qx(E,i)){E.preventDefault();let D=a!==void 0?a:dl(k)===dl(_),B=()=>w(e,{replace:D,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:g});b?P.startTransition(()=>B()):B()}},[k,w,_,a,l,i,e,c,f,p,g,b])}var mw=0,gw=()=>`__${String(++mw)}__`;function vw(){let{router:e}=ay("useSubmit"),{basename:i}=P.useContext(Dn),a=Mx(),l=e.fetch,c=e.navigate;return P.useCallback(async(f,p={})=>{let{action:g,method:b,encType:w,formData:k,body:_}=Yx(f,i);if(p.navigate===!1){let E=p.fetcherKey||gw();await l(E,a,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:_,formMethod:p.method||b,formEncType:p.encType||w,flushSync:p.flushSync})}else await c(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:k,body:_,formMethod:p.method||b,formEncType:p.encType||w,replace:p.replace,state:p.state,fromRouteId:a,flushSync:p.flushSync,viewTransition:p.viewTransition})},[l,c,i,a])}function yw(e,{relative:i}={}){let{basename:a}=P.useContext(Dn),l=P.useContext(fr);dt(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),f={...gl(e||".",{relative:i})},p=oi();if(e==null){f.search=p.search;let g=new URLSearchParams(f.search),b=g.getAll("index");if(b.some(k=>k==="")){g.delete("index"),b.filter(_=>_).forEach(_=>g.append("index",_));let k=g.toString();f.search=k?`?${k}`:""}}return(!e||e===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(f.pathname=f.pathname==="/"?a:ni([a,f.pathname])),dl(f)}function bw(e,{relative:i}={}){let a=P.useContext(Gv);dt(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=ay("useViewTransitionState"),c=gl(e,{relative:i});if(!a.isTransitioning)return!1;let f=ri(a.currentLocation.pathname,l)||a.currentLocation.pathname,p=ri(a.nextLocation.pathname,l)||a.nextLocation.pathname;return hu(c.pathname,p)!=null||hu(c.pathname,f)!=null}/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function ep(e,i){(i==null||i>e.length)&&(i=e.length);for(var a=0,l=Array(i);a<i;a++)l[a]=e[a];return l}function xw(e){if(Array.isArray(e))return e}function ww(e){if(Array.isArray(e))return ep(e)}function _w(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function kw(e,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,oy(l.key),l)}}function Sw(e,i,a){return i&&kw(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function au(e,i){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Op(e))||i){a&&(e=a);var l=0,c=function(){};return{s:c,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(b){throw b},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f,p=!0,g=!1;return{s:function(){a=a.call(e)},n:function(){var b=a.next();return p=b.done,b},e:function(b){g=!0,f=b},f:function(){try{p||a.return==null||a.return()}finally{if(g)throw f}}}}function Te(e,i,a){return(i=oy(i))in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function Aw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pw(e,i){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var l,c,f,p,g=[],b=!0,w=!1;try{if(f=(a=a.call(e)).next,i===0){if(Object(a)!==a)return;b=!1}else for(;!(b=(l=f.call(a)).done)&&(g.push(l.value),g.length!==i);b=!0);}catch(k){w=!0,c=k}finally{try{if(!b&&a.return!=null&&(p=a.return(),Object(p)!==p))return}finally{if(w)throw c}}return g}}function Ew(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function og(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),a.push.apply(a,l)}return a}function ce(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?og(Object(a),!0).forEach(function(l){Te(e,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):og(Object(a)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))})}return e}function ju(e,i){return xw(e)||Pw(e,i)||Op(e,i)||Ew()}function dr(e){return ww(e)||Aw(e)||Op(e)||Cw()}function Rw(e,i){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function oy(e){var i=Rw(e,"string");return typeof i=="symbol"?i:i+""}function gu(e){"@babel/helpers - typeof";return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},gu(e)}function Op(e,i){if(e){if(typeof e=="string")return ep(e,i);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ep(e,i):void 0}}var sg=function(){},zp={},sy={},ly=null,cy={mark:sg,measure:sg};try{typeof window<"u"&&(zp=window),typeof document<"u"&&(sy=document),typeof MutationObserver<"u"&&(ly=MutationObserver),typeof performance<"u"&&(cy=performance)}catch{}var Tw=zp.navigator||{},lg=Tw.userAgent,cg=lg===void 0?"":lg,Gi=zp,ct=sy,ug=ly,Vc=cy;Gi.document;var si=!!ct.documentElement&&!!ct.head&&typeof ct.addEventListener=="function"&&typeof ct.createElement=="function",uy=~cg.indexOf("MSIE")||~cg.indexOf("Trident/"),$c,Lw=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Iw=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,dy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Nw={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},fy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Bt="classic",vl="duotone",py="sharp",hy="sharp-duotone",my="chisel",gy="etch",vy="graphite",yy="jelly",by="jelly-duo",xy="jelly-fill",wy="mosaic",_y="notdog",ky="notdog-duo",Sy="pixel",Ay="slab",Py="slab-duo",Ey="slab-press",Cy="slab-press-duo",Ry="thumbprint",Ty="utility",Ly="utility-duo",Iy="utility-fill",Ny="vellum",Dy="whiteboard",Dw="Classic",jw="Duotone",Mw="Sharp",Ow="Sharp Duotone",zw="Chisel",Fw="Etch",Bw="Graphite",Hw="Jelly",Uw="Jelly Duo",Ww="Jelly Fill",Vw="Mosaic",$w="Notdog",qw="Notdog Duo",Zw="Pixel",Gw="Slab",Yw="Slab Duo",Kw="Slab Press",Qw="Slab Press Duo",Xw="Thumbprint",Jw="Utility",e_="Utility Duo",t_="Utility Fill",n_="Vellum",r_="Whiteboard",jy=[Bt,vl,py,hy,my,gy,vy,yy,by,xy,wy,_y,ky,Sy,Ay,Py,Ey,Cy,Ry,Ty,Ly,Iy,Ny,Dy];$c={},Te(Te(Te(Te(Te(Te(Te(Te(Te(Te($c,Bt,Dw),vl,jw),py,Mw),hy,Ow),my,zw),gy,Fw),vy,Bw),yy,Hw),by,Uw),xy,Ww),Te(Te(Te(Te(Te(Te(Te(Te(Te(Te($c,wy,Vw),_y,$w),ky,qw),Sy,Zw),Ay,Gw),Py,Yw),Ey,Kw),Cy,Qw),Ry,Xw),Ty,Jw),Te(Te(Te(Te($c,Ly,e_),Iy,t_),Ny,n_),Dy,r_);var i_={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},a_={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},o_=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),s_={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},My=["fak","fa-kit","fakd","fa-kit-duotone"],dg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},l_=["kit"],c_="kit",u_="kit-duotone",d_="Kit",f_="Kit Duotone";Te(Te({},c_,d_),u_,f_);var p_={kit:{"fa-kit":"fak"}},h_={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},m_={kit:{fak:"fa-kit"}},fg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},qc,Zc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g_=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],v_="classic",y_="duotone",b_="sharp",x_="sharp-duotone",w_="chisel",__="etch",k_="graphite",S_="jelly",A_="jelly-duo",P_="jelly-fill",E_="mosaic",C_="notdog",R_="notdog-duo",T_="pixel",L_="slab",I_="slab-duo",N_="slab-press",D_="slab-press-duo",j_="thumbprint",M_="utility",O_="utility-duo",z_="utility-fill",F_="vellum",B_="whiteboard",H_="Classic",U_="Duotone",W_="Sharp",V_="Sharp Duotone",$_="Chisel",q_="Etch",Z_="Graphite",G_="Jelly",Y_="Jelly Duo",K_="Jelly Fill",Q_="Mosaic",X_="Notdog",J_="Notdog Duo",e2="Pixel",t2="Slab",n2="Slab Duo",r2="Slab Press",i2="Slab Press Duo",a2="Thumbprint",o2="Utility",s2="Utility Duo",l2="Utility Fill",c2="Vellum",u2="Whiteboard";qc={},Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(qc,v_,H_),y_,U_),b_,W_),x_,V_),w_,$_),__,q_),k_,Z_),S_,G_),A_,Y_),P_,K_),Te(Te(Te(Te(Te(Te(Te(Te(Te(Te(qc,E_,Q_),C_,X_),R_,J_),T_,e2),L_,t2),I_,n2),N_,r2),D_,i2),j_,a2),M_,o2),Te(Te(Te(Te(qc,O_,s2),z_,l2),F_,c2),B_,u2);var d2="kit",f2="kit-duotone",p2="Kit",h2="Kit Duotone";Te(Te({},d2,p2),f2,h2);var m2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},g2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},tp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},v2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Oy=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(g_,v2),y2=["solid","regular","light","thin","duotone","brands","semibold"],zy=[1,2,3,4,5,6,7,8,9,10],b2=zy.concat([11,12,13,14,15,16,17,18,19,20]),x2=["aw","fw","pull-left","pull-right"],w2=[].concat(dr(Object.keys(g2)),y2,x2,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Zc.GROUP,Zc.SWAP_OPACITY,Zc.PRIMARY,Zc.SECONDARY]).concat(zy.map(function(e){return"".concat(e,"x")})).concat(b2.map(function(e){return"w-".concat(e)})),_2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ii="___FONT_AWESOME___",np=16,Fy="fa",By="svg-inline--fa",Ia="data-fa-i2svg",rp="data-fa-pseudo-element",k2="data-fa-pseudo-element-pending",Fp="data-prefix",Bp="data-icon",pg="fontawesome-i2svg",S2="async",A2=["HTML","HEAD","STYLE","SCRIPT"],Hy=["::before","::after",":before",":after"],Uy=(function(){try{return!0}catch{return!1}})();function yl(e){return new Proxy(e,{get:function(a,l){return l in a?a[l]:a[Bt]}})}var Wy=ce({},dy);Wy[Bt]=ce(ce(ce(ce({},{"fa-duotone":"duotone"}),dy[Bt]),dg.kit),dg["kit-duotone"]);var P2=yl(Wy),ip=ce({},s_);ip[Bt]=ce(ce(ce(ce({},{duotone:"fad"}),ip[Bt]),fg.kit),fg["kit-duotone"]);var hg=yl(ip),ap=ce({},tp);ap[Bt]=ce(ce({},ap[Bt]),m_.kit);var Hp=yl(ap),op=ce({},m2);op[Bt]=ce(ce({},op[Bt]),p_.kit);yl(op);var E2=Lw,Vy="fa-layers-text",C2=Iw,R2=ce({},i_);yl(R2);var T2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Af=Nw,L2=[].concat(dr(l_),dr(w2)),il=Gi.FontAwesomeConfig||{};function I2(e){var i=ct.querySelector("script["+e+"]");if(i)return i.getAttribute(e)}function N2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ct&&typeof ct.querySelector=="function"){var D2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];D2.forEach(function(e){var i=ju(e,2),a=i[0],l=i[1],c=N2(I2(a));c!=null&&(il[l]=c)})}var $y={styleDefault:"solid",familyDefault:Bt,cssPrefix:Fy,replacementClass:By,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};il.familyPrefix&&(il.cssPrefix=il.familyPrefix);var Wo=ce(ce({},$y),il);Wo.autoReplaceSvg||(Wo.observeMutations=!1);var Ee={};Object.keys($y).forEach(function(e){Object.defineProperty(Ee,e,{enumerable:!0,set:function(a){Wo[e]=a,al.forEach(function(l){return l(Ee)})},get:function(){return Wo[e]}})});Object.defineProperty(Ee,"familyPrefix",{enumerable:!0,set:function(i){Wo.cssPrefix=i,al.forEach(function(a){return a(Ee)})},get:function(){return Wo.cssPrefix}});Gi.FontAwesomeConfig=Ee;var al=[];function j2(e){return al.push(e),function(){al.splice(al.indexOf(e),1)}}var Lo=np,Er={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M2(e){if(!(!e||!si)){var i=ct.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=e;for(var a=ct.head.childNodes,l=null,c=a.length-1;c>-1;c--){var f=a[c],p=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(l=f)}return ct.head.insertBefore(i,l),e}}var O2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mg(){for(var e=12,i="";e-- >0;)i+=O2[Math.random()*62|0];return i}function Yo(e){for(var i=[],a=(e||[]).length>>>0;a--;)i[a]=e[a];return i}function Up(e){return e.classList?Yo(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(i){return i})}function qy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z2(e){return Object.keys(e||{}).reduce(function(i,a){return i+"".concat(a,'="').concat(qy(e[a]),'" ')},"").trim()}function Mu(e){return Object.keys(e||{}).reduce(function(i,a){return i+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Wp(e){return e.size!==Er.size||e.x!==Er.x||e.y!==Er.y||e.rotate!==Er.rotate||e.flipX||e.flipY}function F2(e){var i=e.transform,a=e.containerWidth,l=e.iconWidth,c={transform:"translate(".concat(a/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),g="rotate(".concat(i.rotate," 0 0)"),b={transform:"".concat(f," ").concat(p," ").concat(g)},w={transform:"translate(".concat(l/2*-1," -256)")};return{outer:c,inner:b,path:w}}function B2(e){var i=e.transform,a=e.width,l=a===void 0?np:a,c=e.height,f=c===void 0?np:c,p="";return uy?p+="translate(".concat(i.x/Lo-l/2,"em, ").concat(i.y/Lo-f/2,"em) "):p+="translate(calc(-50% + ".concat(i.x/Lo,"em), calc(-50% + ").concat(i.y/Lo,"em)) "),p+="scale(".concat(i.size/Lo*(i.flipX?-1:1),", ").concat(i.size/Lo*(i.flipY?-1:1),") "),p+="rotate(".concat(i.rotate,"deg) "),p}var H2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Zy(){var e=Fy,i=By,a=Ee.cssPrefix,l=Ee.replacementClass,c=H2;if(a!==e||l!==i){var f=new RegExp("\\.".concat(e,"\\-"),"g"),p=new RegExp("\\--".concat(e,"\\-"),"g"),g=new RegExp("\\.".concat(i),"g");c=c.replace(f,".".concat(a,"-")).replace(p,"--".concat(a,"-")).replace(g,".".concat(l))}return c}var gg=!1;function Pf(){Ee.autoAddCss&&!gg&&(M2(Zy()),gg=!0)}var U2={mixout:function(){return{dom:{css:Zy,insertCss:Pf}}},hooks:function(){return{beforeDOMElementCreation:function(){Pf()},beforeI2svg:function(){Pf()}}}},ai=Gi||{};ai[ii]||(ai[ii]={});ai[ii].styles||(ai[ii].styles={});ai[ii].hooks||(ai[ii].hooks={});ai[ii].shims||(ai[ii].shims=[]);var cr=ai[ii],Gy=[],Yy=function(){ct.removeEventListener("DOMContentLoaded",Yy),vu=1,Gy.map(function(i){return i()})},vu=!1;si&&(vu=(ct.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ct.readyState),vu||ct.addEventListener("DOMContentLoaded",Yy));function W2(e){si&&(vu?setTimeout(e,0):Gy.push(e))}function bl(e){var i=e.tag,a=e.attributes,l=a===void 0?{}:a,c=e.children,f=c===void 0?[]:c;return typeof e=="string"?qy(e):"<".concat(i," ").concat(z2(l),">").concat(f.map(bl).join(""),"</").concat(i,">")}function vg(e,i,a){if(e&&e[i]&&e[i][a])return{prefix:i,iconName:a,icon:e[i][a]}}var Ef=function(i,a,l,c){var f=Object.keys(i),p=f.length,g=a,b,w,k;for(l===void 0?(b=1,k=i[f[0]]):(b=0,k=l);b<p;b++)w=f[b],k=g(k,i[w],w,i);return k};function Ky(e){return dr(e).length!==1?null:e.codePointAt(0).toString(16)}function yg(e){return Object.keys(e).reduce(function(i,a){var l=e[a],c=!!l.icon;return c?i[l.iconName]=l.icon:i[a]=l,i},{})}function sp(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=a.skipHooks,c=l===void 0?!1:l,f=yg(i);typeof cr.hooks.addPack=="function"&&!c?cr.hooks.addPack(e,yg(i)):cr.styles[e]=ce(ce({},cr.styles[e]||{}),f),e==="fas"&&sp("fa",i)}var fl=cr.styles,V2=cr.shims,Qy=Object.keys(Hp),$2=Qy.reduce(function(e,i){return e[i]=Object.keys(Hp[i]),e},{}),Vp=null,Xy={},Jy={},e0={},t0={},n0={};function q2(e){return~L2.indexOf(e)}function Z2(e,i){var a=i.split("-"),l=a[0],c=a.slice(1).join("-");return l===e&&c!==""&&!q2(c)?c:null}var r0=function(){var i=function(f){return Ef(fl,function(p,g,b){return p[b]=Ef(g,f,{}),p},{})};Xy=i(function(c,f,p){if(f[3]&&(c[f[3]]=p),f[2]){var g=f[2].filter(function(b){return typeof b=="number"});g.forEach(function(b){c[b.toString(16)]=p})}return c}),Jy=i(function(c,f,p){if(c[p]=p,f[2]){var g=f[2].filter(function(b){return typeof b=="string"});g.forEach(function(b){c[b]=p})}return c}),n0=i(function(c,f,p){var g=f[2];return c[p]=p,g.forEach(function(b){c[b]=p}),c});var a="far"in fl||Ee.autoFetchSvg,l=Ef(V2,function(c,f){var p=f[0],g=f[1],b=f[2];return g==="far"&&!a&&(g="fas"),typeof p=="string"&&(c.names[p]={prefix:g,iconName:b}),typeof p=="number"&&(c.unicodes[p.toString(16)]={prefix:g,iconName:b}),c},{names:{},unicodes:{}});e0=l.names,t0=l.unicodes,Vp=Ou(Ee.styleDefault,{family:Ee.familyDefault})};j2(function(e){Vp=Ou(e.styleDefault,{family:Ee.familyDefault})});r0();function $p(e,i){return(Xy[e]||{})[i]}function G2(e,i){return(Jy[e]||{})[i]}function Ra(e,i){return(n0[e]||{})[i]}function i0(e){return e0[e]||{prefix:null,iconName:null}}function Y2(e){var i=t0[e],a=$p("fas",e);return i||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Yi(){return Vp}var a0=function(){return{prefix:null,iconName:null,rest:[]}};function K2(e){var i=Bt,a=Qy.reduce(function(l,c){return l[c]="".concat(Ee.cssPrefix,"-").concat(c),l},{});return jy.forEach(function(l){(e.includes(a[l])||e.some(function(c){return $2[l].includes(c)}))&&(i=l)}),i}function Ou(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.family,l=a===void 0?Bt:a,c=P2[l][e];if(l===vl&&!e)return"fad";var f=hg[l][e]||hg[l][c],p=e in cr.styles?e:null,g=f||p||null;return g}function Q2(e){var i=[],a=null;return e.forEach(function(l){var c=Z2(Ee.cssPrefix,l);c?a=c:l&&i.push(l)}),{iconName:a,rest:i}}function bg(e){return e.sort().filter(function(i,a,l){return l.indexOf(i)===a})}var xg=Oy.concat(My);function zu(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.skipLookups,l=a===void 0?!1:a,c=null,f=bg(e.filter(function(D){return xg.includes(D)})),p=bg(e.filter(function(D){return!xg.includes(D)})),g=f.filter(function(D){return c=D,!fy.includes(D)}),b=ju(g,1),w=b[0],k=w===void 0?null:w,_=K2(f),E=ce(ce({},Q2(p)),{},{prefix:Ou(k,{family:_})});return ce(ce(ce({},E),tk({values:e,family:_,styles:fl,config:Ee,canonical:E,givenPrefix:c})),X2(l,c,E))}function X2(e,i,a){var l=a.prefix,c=a.iconName;if(e||!l||!c)return{prefix:l,iconName:c};var f=i==="fa"?i0(c):{},p=Ra(l,c);return c=f.iconName||p||c,l=f.prefix||l,l==="far"&&!fl.far&&fl.fas&&!Ee.autoFetchSvg&&(l="fas"),{prefix:l,iconName:c}}var J2=jy.filter(function(e){return e!==Bt||e!==vl}),ek=Object.keys(tp).filter(function(e){return e!==Bt}).map(function(e){return Object.keys(tp[e])}).flat();function tk(e){var i=e.values,a=e.family,l=e.canonical,c=e.givenPrefix,f=c===void 0?"":c,p=e.styles,g=p===void 0?{}:p,b=e.config,w=b===void 0?{}:b,k=a===vl,_=i.includes("fa-duotone")||i.includes("fad"),E=w.familyDefault==="duotone",D=l.prefix==="fad"||l.prefix==="fa-duotone";if(!k&&(_||E||D)&&(l.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(l.prefix="fab"),!l.prefix&&J2.includes(a)){var B=Object.keys(g).find(function(I){return ek.includes(I)});if(B||w.autoFetchSvg){var C=o_.get(a).defaultShortPrefixId;l.prefix=C,l.iconName=Ra(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||f==="fa")&&(l.prefix=Yi()||"fas"),l}var nk=(function(){function e(){_w(this,e),this.definitions={}}return Sw(e,[{key:"add",value:function(){for(var a=this,l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var p=c.reduce(this._pullDefinitions,{});Object.keys(p).forEach(function(g){a.definitions[g]=ce(ce({},a.definitions[g]||{}),p[g]),sp(g,p[g]);var b=Hp[Bt][g];b&&sp(b,p[g]),r0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,l){var c=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(c).map(function(f){var p=c[f],g=p.prefix,b=p.iconName,w=p.icon,k=w[2];a[g]||(a[g]={}),k.length>0&&k.forEach(function(_){typeof _=="string"&&(a[g][_]=w)}),a[g][b]=w}),a}}])})(),wg=[],Fo={},Bo={},rk=Object.keys(Bo);function ik(e,i){var a=i.mixoutsTo;return wg=e,Fo={},Object.keys(Bo).forEach(function(l){rk.indexOf(l)===-1&&delete Bo[l]}),wg.forEach(function(l){var c=l.mixout?l.mixout():{};if(Object.keys(c).forEach(function(p){typeof c[p]=="function"&&(a[p]=c[p]),gu(c[p])==="object"&&Object.keys(c[p]).forEach(function(g){a[p]||(a[p]={}),a[p][g]=c[p][g]})}),l.hooks){var f=l.hooks();Object.keys(f).forEach(function(p){Fo[p]||(Fo[p]=[]),Fo[p].push(f[p])})}l.provides&&l.provides(Bo)}),a}function lp(e,i){for(var a=arguments.length,l=new Array(a>2?a-2:0),c=2;c<a;c++)l[c-2]=arguments[c];var f=Fo[e]||[];return f.forEach(function(p){i=p.apply(null,[i].concat(l))}),i}function Na(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];var c=Fo[e]||[];c.forEach(function(f){f.apply(null,a)})}function Ki(){var e=arguments[0],i=Array.prototype.slice.call(arguments,1);return Bo[e]?Bo[e].apply(null,i):void 0}function cp(e){e.prefix==="fa"&&(e.prefix="fas");var i=e.iconName,a=e.prefix||Yi();if(i)return i=Ra(a,i)||i,vg(o0.definitions,a,i)||vg(cr.styles,a,i)}var o0=new nk,ak=function(){Ee.autoReplaceSvg=!1,Ee.observeMutations=!1,Na("noAuto")},ok={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return si?(Na("beforeI2svg",i),Ki("pseudoElements2svg",i),Ki("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=i.autoReplaceSvgRoot;Ee.autoReplaceSvg===!1&&(Ee.autoReplaceSvg=!0),Ee.observeMutations=!0,W2(function(){lk({autoReplaceSvgRoot:a}),Na("watch",i)})}},sk={icon:function(i){if(i===null)return null;if(gu(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Ra(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var a=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],l=Ou(i[0]);return{prefix:l,iconName:Ra(l,a)||a}}if(typeof i=="string"&&(i.indexOf("".concat(Ee.cssPrefix,"-"))>-1||i.match(E2))){var c=zu(i.split(" "),{skipLookups:!0});return{prefix:c.prefix||Yi(),iconName:Ra(c.prefix,c.iconName)||c.iconName}}if(typeof i=="string"){var f=Yi();return{prefix:f,iconName:Ra(f,i)||i}}}},jn={noAuto:ak,config:Ee,dom:ok,parse:sk,library:o0,findIconDefinition:cp,toHtml:bl},lk=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=i.autoReplaceSvgRoot,l=a===void 0?ct:a;(Object.keys(cr.styles).length>0||Ee.autoFetchSvg)&&si&&Ee.autoReplaceSvg&&jn.dom.i2svg({node:l})};function Fu(e,i){return Object.defineProperty(e,"abstract",{get:i}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(l){return bl(l)})}}),Object.defineProperty(e,"node",{get:function(){if(si){var l=ct.createElement("div");return l.innerHTML=e.html,l.children}}}),e}function ck(e){var i=e.children,a=e.main,l=e.mask,c=e.attributes,f=e.styles,p=e.transform;if(Wp(p)&&a.found&&!l.found){var g=a.width,b=a.height,w={x:g/b/2,y:.5};c.style=Mu(ce(ce({},f),{},{"transform-origin":"".concat(w.x+p.x/16,"em ").concat(w.y+p.y/16,"em")}))}return[{tag:"svg",attributes:c,children:i}]}function uk(e){var i=e.prefix,a=e.iconName,l=e.children,c=e.attributes,f=e.symbol,p=f===!0?"".concat(i,"-").concat(Ee.cssPrefix,"-").concat(a):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ce(ce({},c),{},{id:p}),children:l}]}]}function dk(e){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(a){return a in e})}function qp(e){var i=e.icons,a=i.main,l=i.mask,c=e.prefix,f=e.iconName,p=e.transform,g=e.symbol,b=e.maskId,w=e.extra,k=e.watchable,_=k===void 0?!1:k,E=l.found?l:a,D=E.width,B=E.height,C=[Ee.replacementClass,f?"".concat(Ee.cssPrefix,"-").concat(f):""].filter(function(ee){return w.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(w.classes).join(" "),I={children:[],attributes:ce(ce({},w.attributes),{},{"data-prefix":c,"data-icon":f,class:C,role:w.attributes.role||"img",viewBox:"0 0 ".concat(D," ").concat(B)})};!dk(w.attributes)&&!w.attributes["aria-hidden"]&&(I.attributes["aria-hidden"]="true"),_&&(I.attributes[Ia]="");var N=ce(ce({},I),{},{prefix:c,iconName:f,main:a,mask:l,maskId:b,transform:p,symbol:g,styles:ce({},w.styles)}),W=l.found&&a.found?Ki("generateAbstractMask",N)||{children:[],attributes:{}}:Ki("generateAbstractIcon",N)||{children:[],attributes:{}},F=W.children,K=W.attributes;return N.children=F,N.attributes=K,g?uk(N):ck(N)}function _g(e){var i=e.content,a=e.width,l=e.height,c=e.transform,f=e.extra,p=e.watchable,g=p===void 0?!1:p,b=ce(ce({},f.attributes),{},{class:f.classes.join(" ")});g&&(b[Ia]="");var w=ce({},f.styles);Wp(c)&&(w.transform=B2({transform:c,width:a,height:l}),w["-webkit-transform"]=w.transform);var k=Mu(w);k.length>0&&(b.style=k);var _=[];return _.push({tag:"span",attributes:b,children:[i]}),_}function fk(e){var i=e.content,a=e.extra,l=ce(ce({},a.attributes),{},{class:a.classes.join(" ")}),c=Mu(a.styles);c.length>0&&(l.style=c);var f=[];return f.push({tag:"span",attributes:l,children:[i]}),f}var Cf=cr.styles;function up(e){var i=e[0],a=e[1],l=e.slice(4),c=ju(l,1),f=c[0],p=null;return Array.isArray(f)?p={tag:"g",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(Af.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(Af.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(Af.PRIMARY),fill:"currentColor",d:f[1]}}]}:p={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:i,height:a,icon:p}}var pk={found:!1,width:512,height:512};function hk(e,i){!Uy&&!Ee.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(i,'" is missing.'))}function dp(e,i){var a=i;return i==="fa"&&Ee.styleDefault!==null&&(i=Yi()),new Promise(function(l,c){if(a==="fa"){var f=i0(e)||{};e=f.iconName||e,i=f.prefix||i}if(e&&i&&Cf[i]&&Cf[i][e]){var p=Cf[i][e];return l(up(p))}hk(e,i),l(ce(ce({},pk),{},{icon:Ee.showMissingIcons&&e?Ki("missingIconAbstract")||{}:{}}))})}var kg=function(){},fp=Ee.measurePerformance&&Vc&&Vc.mark&&Vc.measure?Vc:{mark:kg,measure:kg},nl='FA "7.3.1"',mk=function(i){return fp.mark("".concat(nl," ").concat(i," begins")),function(){return s0(i)}},s0=function(i){fp.mark("".concat(nl," ").concat(i," ends")),fp.measure("".concat(nl," ").concat(i),"".concat(nl," ").concat(i," begins"),"".concat(nl," ").concat(i," ends"))},Zp={begin:mk,end:s0},ou=function(){};function Sg(e){var i=e.getAttribute?e.getAttribute(Ia):null;return typeof i=="string"}function gk(e){var i=e.getAttribute?e.getAttribute(Fp):null,a=e.getAttribute?e.getAttribute(Bp):null;return i&&a}function vk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Ee.replacementClass)}function yk(){if(Ee.autoReplaceSvg===!0)return su.replace;var e=su[Ee.autoReplaceSvg];return e||su.replace}function bk(e){return ct.createElementNS("http://www.w3.org/2000/svg",e)}function xk(e){return ct.createElement(e)}function l0(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.ceFn,l=a===void 0?e.tag==="svg"?bk:xk:a;if(typeof e=="string")return ct.createTextNode(e);var c=l(e.tag);Object.keys(e.attributes||[]).forEach(function(p){c.setAttribute(p,e.attributes[p])});var f=e.children||[];return f.forEach(function(p){c.appendChild(l0(p,{ceFn:l}))}),c}function wk(e){var i=" ".concat(e.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var su={replace:function(i){var a=i[0];if(a.parentNode)if(i[1].forEach(function(c){a.parentNode.insertBefore(l0(c),a)}),a.getAttribute(Ia)===null&&Ee.keepOriginalSource){var l=ct.createComment(wk(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(i){var a=i[0],l=i[1];if(~Up(a).indexOf(Ee.replacementClass))return su.replace(i);var c=new RegExp("".concat(Ee.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var f=l[0].attributes.class.split(" ").reduce(function(g,b){return b===Ee.replacementClass||b.match(c)?g.toSvg.push(b):g.toNode.push(b),g},{toNode:[],toSvg:[]});l[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",f.toNode.join(" "))}var p=l.map(function(g){return bl(g)}).join(`
`);a.setAttribute(Ia,""),a.innerHTML=p}};function Ag(e){e()}function c0(e,i){var a=typeof i=="function"?i:ou;if(e.length===0)a();else{var l=Ag;Ee.mutateApproach===S2&&(l=Gi.requestAnimationFrame||Ag),l(function(){var c=yk(),f=Zp.begin("mutate");e.map(c),f(),a()})}}var Gp=!1;function u0(){Gp=!0}function pp(){Gp=!1}var yu=null;function Pg(e){if(ug&&Ee.observeMutations){var i=e.treeCallback,a=i===void 0?ou:i,l=e.nodeCallback,c=l===void 0?ou:l,f=e.pseudoElementsCallback,p=f===void 0?ou:f,g=e.observeMutationsRoot,b=g===void 0?ct:g;yu=new ug(function(w){if(!Gp){var k=Yi();Yo(w).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!Sg(_.addedNodes[0])&&(Ee.searchPseudoElements&&p(_.target),a(_.target)),_.type==="attributes"&&_.target.parentNode&&Ee.searchPseudoElements&&p([_.target],!0),_.type==="attributes"&&Sg(_.target)&&~T2.indexOf(_.attributeName))if(_.attributeName==="class"&&gk(_.target)){var E=zu(Up(_.target)),D=E.prefix,B=E.iconName;_.target.setAttribute(Fp,D||k),B&&_.target.setAttribute(Bp,B)}else vk(_.target)&&c(_.target)})}}),si&&yu.observe(b,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _k(){yu&&yu.disconnect()}function kk(e){var i=e.getAttribute("style"),a=[];return i&&(a=i.split(";").reduce(function(l,c){var f=c.split(":"),p=f[0],g=f.slice(1);return p&&g.length>0&&(l[p]=g.join(":").trim()),l},{})),a}function Sk(e){var i=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),l=e.innerText!==void 0?e.innerText.trim():"",c=zu(Up(e));return c.prefix||(c.prefix=Yi()),i&&a&&(c.prefix=i,c.iconName=a),c.iconName&&c.prefix||(c.prefix&&l.length>0&&(c.iconName=G2(c.prefix,e.innerText)||$p(c.prefix,Ky(e.innerText))),!c.iconName&&Ee.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=e.firstChild.data)),c}function Ak(e){var i=Yo(e.attributes).reduce(function(a,l){return a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a},{});return i}function Pk(){return{iconName:null,prefix:null,transform:Er,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Eg(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Sk(e),l=a.iconName,c=a.prefix,f=a.rest,p=Ak(e),g=lp("parseNodeAttributes",{},e),b=i.styleParser?kk(e):[];return ce({iconName:l,prefix:c,transform:Er,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:b,attributes:p}},g)}var Ek=cr.styles;function d0(e){var i=Ee.autoReplaceSvg==="nest"?Eg(e,{styleParser:!1}):Eg(e);return~i.extra.classes.indexOf(Vy)?Ki("generateLayersText",e,i):Ki("generateSvgReplacementMutation",e,i)}function Ck(){return[].concat(dr(My),dr(Oy))}function Cg(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!si)return Promise.resolve();var a=ct.documentElement.classList,l=function(_){return a.add("".concat(pg,"-").concat(_))},c=function(_){return a.remove("".concat(pg,"-").concat(_))},f=Ee.autoFetchSvg?Ck():fy.concat(Object.keys(Ek));f.includes("fa")||f.push("fa");var p=[".".concat(Vy,":not([").concat(Ia,"])")].concat(f.map(function(k){return".".concat(k,":not([").concat(Ia,"])")})).join(", ");if(p.length===0)return Promise.resolve();var g=[];try{g=Yo(e.querySelectorAll(p))}catch{}if(g.length>0)l("pending"),c("complete");else return Promise.resolve();var b=Zp.begin("onTree"),w=g.reduce(function(k,_){try{var E=d0(_);E&&k.push(E)}catch(D){Uy||D.name==="MissingIcon"&&console.error(D)}return k},[]);return new Promise(function(k,_){Promise.all(w).then(function(E){c0(E,function(){l("active"),l("complete"),c("pending"),typeof i=="function"&&i(),b(),k()})}).catch(function(E){b(),_(E)})})}function Rk(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d0(e).then(function(a){a&&c0([a],i)})}function Tk(e){return function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(i||{}).icon?i:cp(i||{}),c=a.mask;return c&&(c=(c||{}).icon?c:cp(c||{})),e(l,ce(ce({},a),{},{mask:c}))}}var Lk=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,c=l===void 0?Er:l,f=a.symbol,p=f===void 0?!1:f,g=a.mask,b=g===void 0?null:g,w=a.maskId,k=w===void 0?null:w,_=a.classes,E=_===void 0?[]:_,D=a.attributes,B=D===void 0?{}:D,C=a.styles,I=C===void 0?{}:C;if(i){var N=i.prefix,W=i.iconName,F=i.icon;return Fu(ce({type:"icon"},i),function(){return Na("beforeDOMElementCreation",{iconDefinition:i,params:a}),qp({icons:{main:up(F),mask:b?up(b.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:W,transform:ce(ce({},Er),c),symbol:p,maskId:k,extra:{attributes:B,styles:I,classes:E}})})}},Ik={mixout:function(){return{icon:Tk(Lk)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Cg,a.nodeCallback=Rk,a}}},provides:function(i){i.i2svg=function(a){var l=a.node,c=l===void 0?ct:l,f=a.callback,p=f===void 0?function(){}:f;return Cg(c,p)},i.generateSvgReplacementMutation=function(a,l){var c=l.iconName,f=l.prefix,p=l.transform,g=l.symbol,b=l.mask,w=l.maskId,k=l.extra;return new Promise(function(_,E){Promise.all([dp(c,f),b.iconName?dp(b.iconName,b.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var B=ju(D,2),C=B[0],I=B[1];_([a,qp({icons:{main:C,mask:I},prefix:f,iconName:c,transform:p,symbol:g,maskId:w,extra:k,watchable:!0})])}).catch(E)})},i.generateAbstractIcon=function(a){var l=a.children,c=a.attributes,f=a.main,p=a.transform,g=a.styles,b=Mu(g);b.length>0&&(c.style=b);var w;return Wp(p)&&(w=Ki("generateAbstractTransformGrouping",{main:f,transform:p,containerWidth:f.width,iconWidth:f.width})),l.push(w||f.icon),{children:l,attributes:c}}}},Nk={mixout:function(){return{layer:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=l.classes,f=c===void 0?[]:c;return Fu({type:"layer"},function(){Na("beforeDOMElementCreation",{assembler:a,params:l});var p=[];return a(function(g){Array.isArray(g)?g.map(function(b){p=p.concat(b.abstract)}):p=p.concat(g.abstract)}),[{tag:"span",attributes:{class:["".concat(Ee.cssPrefix,"-layers")].concat(dr(f)).join(" ")},children:p}]})}}}},Dk={mixout:function(){return{counter:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};l.title;var c=l.classes,f=c===void 0?[]:c,p=l.attributes,g=p===void 0?{}:p,b=l.styles,w=b===void 0?{}:b;return Fu({type:"counter",content:a},function(){return Na("beforeDOMElementCreation",{content:a,params:l}),fk({content:a.toString(),extra:{attributes:g,styles:w,classes:["".concat(Ee.cssPrefix,"-layers-counter")].concat(dr(f))}})})}}}},jk={mixout:function(){return{text:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=l.transform,f=c===void 0?Er:c,p=l.classes,g=p===void 0?[]:p,b=l.attributes,w=b===void 0?{}:b,k=l.styles,_=k===void 0?{}:k;return Fu({type:"text",content:a},function(){return Na("beforeDOMElementCreation",{content:a,params:l}),_g({content:a,transform:ce(ce({},Er),f),extra:{attributes:w,styles:_,classes:["".concat(Ee.cssPrefix,"-layers-text")].concat(dr(g))}})})}}},provides:function(i){i.generateLayersText=function(a,l){var c=l.transform,f=l.extra,p=null,g=null;if(uy){var b=parseInt(getComputedStyle(a).fontSize,10),w=a.getBoundingClientRect();p=w.width/b,g=w.height/b}return Promise.resolve([a,_g({content:a.innerHTML,width:p,height:g,transform:c,extra:f,watchable:!0})])}}},f0=new RegExp('"',"ug"),Rg=[1105920,1112319],Tg=ce(ce(ce(ce({},{FontAwesome:{normal:"fas",400:"fas"}}),a_),_2),h_),hp=Object.keys(Tg).reduce(function(e,i){return e[i.toLowerCase()]=Tg[i],e},{}),Mk=Object.keys(hp).reduce(function(e,i){var a=hp[i];return e[i]=a[900]||dr(Object.entries(a))[0][1],e},{});function Ok(e){var i=e.replace(f0,"");return Ky(dr(i)[0]||"")}function zk(e){var i=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),l=a.replace(f0,""),c=l.codePointAt(0),f=c>=Rg[0]&&c<=Rg[1],p=l.length===2?l[0]===l[1]:!1;return f||p||i}function Fk(e,i){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(i),c=isNaN(l)?"normal":l;return(hp[a]||{})[c]||Mk[a]}function Lg(e,i){var a="".concat(k2).concat(i.replace(":","-"));return new Promise(function(l,c){if(e.getAttribute(a)!==null)return l();var f=Yo(e.children),p=f.filter(function(Q){return Q.getAttribute(rp)===i})[0],g=Gi.getComputedStyle(e,i),b=g.getPropertyValue("font-family"),w=b.match(C2),k=g.getPropertyValue("font-weight"),_=g.getPropertyValue("content");if(p&&!w)return e.removeChild(p),l();if(w&&_!=="none"&&_!==""){var E=g.getPropertyValue("content"),D=Fk(b,k),B=Ok(E),C=w[0].startsWith("FontAwesome"),I=zk(g),N=$p(D,B),W=N;if(C){var F=Y2(B);F.iconName&&F.prefix&&(N=F.iconName,D=F.prefix)}if(N&&!I&&(!p||p.getAttribute(Fp)!==D||p.getAttribute(Bp)!==W)){e.setAttribute(a,W),p&&e.removeChild(p);var K=Pk(),ee=K.extra;ee.attributes[rp]=i,dp(N,D).then(function(Q){var se=qp(ce(ce({},K),{},{icons:{main:Q,mask:a0()},prefix:D,iconName:W,extra:ee,watchable:!0})),J=ct.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?e.insertBefore(J,e.firstChild):e.appendChild(J),J.outerHTML=se.map(function(me){return bl(me)}).join(`
`),e.removeAttribute(a),l()}).catch(c)}else l()}else l()})}function Bk(e){return Promise.all([Lg(e,"::before"),Lg(e,"::after")])}function Hk(e){return e.parentNode!==document.head&&!~A2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rp)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Uk=function(i){return!!i&&Hy.some(function(a){return i.includes(a)})},Wk=function(i){if(!i)return[];var a=new Set,l=i.split(/,(?![^()]*\))/).map(function(b){return b.trim()});l=l.flatMap(function(b){return b.includes("(")?b:b.split(",").map(function(w){return w.trim()})});var c=au(l),f;try{for(c.s();!(f=c.n()).done;){var p=f.value;if(Uk(p)){var g=Hy.reduce(function(b,w){return b.replace(w,"")},p);g!==""&&g!=="*"&&a.add(g)}}}catch(b){c.e(b)}finally{c.f()}return a};function Ig(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(si){var a;if(i)a=e;else if(Ee.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var l=new Set,c=au(document.styleSheets),f;try{for(c.s();!(f=c.n()).done;){var p=f.value;try{var g=au(p.cssRules),b;try{for(g.s();!(b=g.n()).done;){var w=b.value,k=Wk(w.selectorText),_=au(k),E;try{for(_.s();!(E=_.n()).done;){var D=E.value;l.add(D)}}catch(C){_.e(C)}finally{_.f()}}}catch(C){g.e(C)}finally{g.f()}}catch(C){Ee.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(p.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){c.e(C)}finally{c.f()}if(!l.size)return;var B=Array.from(l).join(", ");try{a=e.querySelectorAll(B)}catch{}}return new Promise(function(C,I){var N=Yo(a).filter(Hk).map(Bk),W=Zp.begin("searchPseudoElements");u0(),Promise.all(N).then(function(){W(),pp(),C()}).catch(function(){W(),pp(),I()})})}}var Vk={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ig,a}}},provides:function(i){i.pseudoElements2svg=function(a){var l=a.node,c=l===void 0?ct:l;Ee.searchPseudoElements&&Ig(c)}}},Ng=!1,$k={mixout:function(){return{dom:{unwatch:function(){u0(),Ng=!0}}}},hooks:function(){return{bootstrap:function(){Pg(lp("mutationObserverCallbacks",{}))},noAuto:function(){_k()},watch:function(a){var l=a.observeMutationsRoot;Ng?pp():Pg(lp("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},Dg=function(i){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(l,c){var f=c.toLowerCase().split("-"),p=f[0],g=f.slice(1).join("-");if(p&&g==="h")return l.flipX=!0,l;if(p&&g==="v")return l.flipY=!0,l;if(g=parseFloat(g),isNaN(g))return l;switch(p){case"grow":l.size=l.size+g;break;case"shrink":l.size=l.size-g;break;case"left":l.x=l.x-g;break;case"right":l.x=l.x+g;break;case"up":l.y=l.y-g;break;case"down":l.y=l.y+g;break;case"rotate":l.rotate=l.rotate+g;break}return l},a)},qk={mixout:function(){return{parse:{transform:function(a){return Dg(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,l){var c=l.getAttribute("data-fa-transform");return c&&(a.transform=Dg(c)),a}}},provides:function(i){i.generateAbstractTransformGrouping=function(a){var l=a.main,c=a.transform,f=a.containerWidth,p=a.iconWidth,g={transform:"translate(".concat(f/2," 256)")},b="translate(".concat(c.x*32,", ").concat(c.y*32,") "),w="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),k="rotate(".concat(c.rotate," 0 0)"),_={transform:"".concat(b," ").concat(w," ").concat(k)},E={transform:"translate(".concat(p/2*-1," -256)")},D={outer:g,inner:_,path:E};return{tag:"g",attributes:ce({},D.outer),children:[{tag:"g",attributes:ce({},D.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:ce(ce({},l.icon.attributes),D.path)}]}]}}}},Rf={x:0,y:0,width:"100%",height:"100%"};function jg(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||i)&&(e.attributes.fill="black"),e}function Zk(e){return e.tag==="g"?e.children:[e]}var Gk={hooks:function(){return{parseNodeAttributes:function(a,l){var c=l.getAttribute("data-fa-mask"),f=c?zu(c.split(" ").map(function(p){return p.trim()})):a0();return f.prefix||(f.prefix=Yi()),a.mask=f,a.maskId=l.getAttribute("data-fa-mask-id"),a}}},provides:function(i){i.generateAbstractMask=function(a){var l=a.children,c=a.attributes,f=a.main,p=a.mask,g=a.maskId,b=a.transform,w=f.width,k=f.icon,_=p.width,E=p.icon,D=F2({transform:b,containerWidth:_,iconWidth:w}),B={tag:"rect",attributes:ce(ce({},Rf),{},{fill:"white"})},C=k.children?{children:k.children.map(jg)}:{},I={tag:"g",attributes:ce({},D.inner),children:[jg(ce({tag:k.tag,attributes:ce(ce({},k.attributes),D.path)},C))]},N={tag:"g",attributes:ce({},D.outer),children:[I]},W="mask-".concat(g||mg()),F="clip-".concat(g||mg()),K={tag:"mask",attributes:ce(ce({},Rf),{},{id:W,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,N]},ee={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Zk(E)},K]};return l.push(ee,{tag:"rect",attributes:ce({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(W,")")},Rf)}),{children:l,attributes:c}}}},Yk={provides:function(i){var a=!1;Gi.matchMedia&&(a=Gi.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var l=[],c={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:ce(ce({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var p=ce(ce({},f),{},{attributeName:"opacity"}),g={tag:"circle",attributes:ce(ce({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||g.children.push({tag:"animate",attributes:ce(ce({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ce(ce({},p),{},{values:"1;0;1;1;0;1;"})}),l.push(g),l.push({tag:"path",attributes:ce(ce({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:ce(ce({},p),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:ce(ce({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ce(ce({},p),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},Kk={hooks:function(){return{parseNodeAttributes:function(a,l){var c=l.getAttribute("data-fa-symbol"),f=c===null?!1:c===""?!0:c;return a.symbol=f,a}}}},Qk=[U2,Ik,Nk,Dk,jk,Vk,$k,qk,Gk,Yk,Kk];ik(Qk,{mixoutsTo:jn});jn.noAuto;var Vo=jn.config;jn.library;jn.dom;var p0=jn.parse;jn.findIconDefinition;jn.toHtml;var Xk=jn.icon;jn.layer;jn.text;jn.counter;function Jk(e){return e=e-0,e===e}function h0(e){return Jk(e)?e:(e=e.replace(/[_-]+(.)?/g,(i,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var eS=(e,i)=>Iu.createElement("stop",{key:`${i}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function tS(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Io=new Map,nS=1e3;function rS(e){if(Io.has(e))return Io.get(e);const i={};let a=0;const l=e.length;for(;a<l;){const c=e.indexOf(";",a),f=c===-1?l:c,p=e.slice(a,f).trim();if(p){const g=p.indexOf(":");if(g>0){const b=p.slice(0,g).trim(),w=p.slice(g+1).trim();if(b&&w){const k=h0(b);i[k.startsWith("webkit")?tS(k):k]=w}}}a=f+1}if(Io.size===nS){const c=Io.keys().next().value;c&&Io.delete(c)}return Io.set(e,i),i}function m0(e,i,a={}){if(typeof i=="string")return i;const l=(i.children||[]).map(_=>{let E=_;return("fill"in a||a.gradientFill)&&_.tag==="path"&&"fill"in _.attributes&&(E={..._,attributes:{..._.attributes,fill:void 0}}),m0(e,E)}),c=i.attributes||{},f={};for(const[_,E]of Object.entries(c))switch(!0){case _==="class":{f.className=E;break}case _==="style":{f.style=rS(String(E));break}case _.startsWith("aria-"):case _.startsWith("data-"):{f[_.toLowerCase()]=E;break}default:f[h0(_)]=E}const{style:p,role:g,"aria-label":b,gradientFill:w,...k}=a;if(p&&(f.style=f.style?{...f.style,...p}:p),g&&(f.role=g),b&&(f["aria-label"]=b,f["aria-hidden"]="false"),w){f.fill=`url(#${w.id})`;const{type:_,stops:E=[],...D}=w;l.unshift(e(_==="linear"?"linearGradient":"radialGradient",{...D,id:w.id},E.map(eS)))}return e(i.tag,{...f,...k},...l)}var iS=m0.bind(null,Iu.createElement),Mg=(e,i)=>{const a=P.useId();return e||(i?a:void 0)},aS=class{constructor(e="react-fontawesome"){this.enabled=!1;let i=!1;try{i=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=i}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},oS="searchPseudoElementsFullScan"in Vo&&typeof Vo.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",sS=Number.parseInt(oS)>=7,lS=()=>sS,ol="fa",jt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},cS={left:"fa-pull-left",right:"fa-pull-right"},uS={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},dS={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Qr={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function fS(e){const i=Vo.cssPrefix||Vo.familyPrefix||ol;return i===ol?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ol}-`,"g"),`${i}-`)}function pS(e){const{beat:i,fade:a,beatFade:l,bounce:c,shake:f,spin:p,spinPulse:g,spinReverse:b,pulse:w,fixedWidth:k,inverse:_,border:E,flip:D,size:B,rotation:C,pull:I,swapOpacity:N,rotateBy:W,widthAuto:F,flip360:K,buzz:ee,float:Q,jello:se,spinSnap:J,spinSnap4:me,spinSnap8:ke,swing:Pe,wag:De,className:Ze}=e,de=[];return Ze&&de.push(...Ze.split(" ")),i&&de.push(jt.beat),a&&de.push(jt.fade),l&&de.push(jt.beatFade),c&&de.push(jt.bounce),f&&de.push(jt.shake),p&&de.push(jt.spin),b&&de.push(jt.spinReverse),g&&de.push(jt.spinPulse),w&&de.push(jt.pulse),k&&de.push(Qr.fixedWidth),_&&de.push(Qr.inverse),E&&de.push(Qr.border),D===!0&&de.push(Qr.flip),(D==="horizontal"||D==="both")&&de.push(Qr.flipHorizontal),(D==="vertical"||D==="both")&&de.push(Qr.flipVertical),B!=null&&de.push(dS[B]),C!=null&&C!==0&&de.push(uS[C]),I!=null&&de.push(cS[I]),N&&de.push(Qr.swapOpacity),lS()?(W&&de.push(Qr.rotateBy),F&&de.push(Qr.widthAuto),K&&de.push(jt.flip360),ee&&de.push(jt.buzz),Q&&de.push(jt.float),se&&de.push(jt.jello),J&&de.push(jt.spinSnap),me&&de.push(jt.spinSnap4),ke&&de.push(jt.spinSnap8),Pe&&de.push(jt.swing),De&&de.push(jt.wag),(Vo.cssPrefix||Vo.familyPrefix||ol)===ol?de:de.map(fS)):de}var hS=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Og(e){if(e)return hS(e)?e:p0.icon(e)}function mS(e){return Object.keys(e)}var zg=new aS("FontAwesomeIcon"),g0={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},gS=new Set(Object.keys(g0)),Ke=Iu.forwardRef((e,i)=>{const a={...g0,...e},{icon:l,mask:c,symbol:f,title:p,titleId:g,maskId:b,transform:w}=a,k=Mg(b,!!c),_=Mg(g,!!p),E=Og(l);if(!E)return zg.error("Icon lookup is undefined",l),null;const D=pS(a),B=typeof w=="string"?p0.transform(w):w,C=Og(c),I=Xk(E,{...D.length>0&&{classes:D},...B&&{transform:B},...C&&{mask:C},symbol:f,title:p,titleId:_,maskId:k});if(!I)return zg.error("Could not find icon",E),null;const{abstract:N}=I,W={ref:i};for(const F of mS(a))gS.has(F)||(W[F]=a[F]);return iS(N[0],W)});Ke.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var vS={prefix:"fas",iconName:"scale-balanced",icon:[640,512,[9878,"balance-scale"],"f24e","M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3l0 294.7 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288L584.4 320 512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9zM126.8 195.8L54.4 320 199.3 320 126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9S11.7 382 .9 337.1z"]},yS=vS,bS={prefix:"fas",iconName:"user-check",icon:[640,512,[],"f4fc","M286 304c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L78 512c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3l59.4 0zM585.7 105.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5L522.1 274.9c-4.2 5.7-10.7 9.4-17.7 9.8s-14-2.2-18.9-7.3l-46.4-48c-9.2-9.5-9-24.7 .6-33.9 9.5-9.2 24.7-8.9 33.9 .6l26.5 27.4 85.6-117.7zM256.3 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240z"]},v0={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},xS={prefix:"fas",iconName:"map-location-dot",icon:[640,512,["map-marked-alt"],"f5a0","M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},bu={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},wS=bu,_S={prefix:"fas",iconName:"clipboard-check",icon:[384,512,[],"f46c","M256 0c23.7 0 44.4 12.9 55.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0zm26.9 212.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L288.2 246.1c7.8-10.7 5.4-25.7-5.3-33.5zM136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64z"]},kS={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},SS={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]},y0={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},AS={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96l0 128c0 53 43 96 96 96s96-43 96-96l0-128c0-53-43-96-96-96zM48 184c0-13.3-10.7-24-24-24S0 170.7 0 184l0 40c0 97.9 73.3 178.7 168 190.5l0 49.5-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-49.5c94.7-11.8 168-92.6 168-190.5l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 79.5-64.5 144-144 144S48 303.5 48 224l0-40z"]},PS={prefix:"fas",iconName:"file-circle-question",icon:[576,512,[],"e4ef","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l180 0c-22.7-31.5-36-70.2-36-112 0-100.6 77.4-183.2 176-191.3l0-38.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40zm0-100c-11.6 0-21.3 8.2-23.5 19.2-1.8 8.7-10.2 14.3-18.9 12.5s-14.3-10.2-12.5-18.9c5.2-25.6 27.8-44.8 54.9-44.8 30.9 0 56 25.1 56 56 0 19.8-11.7 37.8-29.8 45.9l-10.4 4.6c-1.2 7.7-7.8 13.5-15.8 13.5-8.8 0-16-7.2-16-16 0-11.2 6.6-21.3 16.8-25.9l12.4-5.5c6.6-2.9 10.8-9.4 10.8-16.6 0-13.3-10.7-24-24-24z"]},ES={prefix:"fas",iconName:"map",icon:[512,512,[128506,62072],"f279","M512 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L349.5 77.5 170.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C6.8 88.8 0 99.9 0 112L0 464c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 179.4 59.8c8.1 2.7 16.8 2.1 24.4-1.7l128-64c10.8-5.4 17.7-16.5 17.7-28.6l0-352zM192 376.9l0-284.5 128 42.7 0 284.5-128-42.7z"]},CS={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},b0={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},RS={prefix:"fas",iconName:"user-group",icon:[576,512,[128101,"user-friends"],"f500","M64 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM0 464c0-97.2 78.8-176 176-176s176 78.8 176 176l0 6c0 23.2-18.8 42-42 42L42 512c-23.2 0-42-18.8-42-42l0-6zM432 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 240c79.5 0 144 64.5 144 144l0 22.4c0 23-18.6 41.6-41.6 41.6l-144.8 0c6.6-12.5 10.4-26.8 10.4-42l0-6c0-51.5-17.4-98.9-46.5-136.7 22.6-14.7 49.6-23.3 78.5-23.3z"]},TS={prefix:"fas",iconName:"table-cells",icon:[448,512,["th"],"f00a","M384 96l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zM256 288l-64 0 0-64 64 0 0 64zm-64 64l64 0 0 64-64 0 0-64zm-64-64l-64 0 0-64 64 0 0 64zM64 352l64 0 0 64-64 0 0-64zm0-192l0-64 64 0 0 64-64 0zm128 0l0-64 64 0 0 64-64 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},LS={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]},IS={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},x0={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},NS={prefix:"fas",iconName:"handshake",icon:[576,512,[129309,62662,"handshake-alt","handshake-simple"],"f2b5","M268.9 85.2L152.3 214.8c-4.6 5.1-4.4 13 .5 17.9 30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9 6.8-.6 13.8 1.7 19 6.9L505.6 376 576 320 576 32 464 96 440.2 80.1C424.4 69.6 405.9 64 386.9 64l-70.4 0c-1.1 0-2.3 0-3.4 .1-16.9 .9-32.8 8.5-44.2 21.1zM116.6 182.7L223.4 64 183.8 64c-25.5 0-49.9 10.1-67.9 28.1L112 96 0 32 0 320 156.4 450.3c23 19.2 52 29.7 81.9 29.7l15.7 0-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41 9 0c19.1 0 37.8-4.3 54.8-12.3L359 441c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32 17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1l-137.9-136.8-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0-23-23-23.9-59.9-2.2-84z"]},DS={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},jS=DS,w0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},MS={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},Fg={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]},OS={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},zS={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Yp={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},FS={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},Kp={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},BS={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]},HS={prefix:"fas",iconName:"check-double",icon:[384,512,[],"f560","M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z"]},US={prefix:"fas",iconName:"helmet-safety",icon:[576,512,["hard-hat","hat-hard"],"f807","M352 264l0-200c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 200c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-185.9C90 109.8 32 191.8 32 288l0 64 512 0 0-64c-1-95.2-58.4-177.7-144-209.8L400 264c0 13.3-10.7 24-24 24s-24-10.7-24-24zM40 400c-22.1 0-40 17.9-40 40s17.9 40 40 40l496 0c22.1 0 40-17.9 40-40s-17.9-40-40-40L40 400z"]},WS=US,_0={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]},VS={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},sl={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},$S={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};function k0(e,i){return function(){return e.apply(i,arguments)}}const{toString:qS}=Object.prototype,{getPrototypeOf:$o}=Object,{iterator:xl,toStringTag:S0}=Symbol,xu=(({hasOwnProperty:e})=>(i,a)=>e.call(i,a))(Object.prototype),pl=(e,i)=>{let a=e;const l=[];for(;a!=null&&a!==Object.prototype;){if(l.indexOf(a)!==-1)return!1;if(l.push(a),xu(a,i))return!0;a=$o(a)}return!1},ZS=(e,i)=>e!=null&&pl(e,i)?e[i]:void 0,Qp=(e=>i=>{const a=qS.call(i);return e[a]||(e[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Kn=e=>(e=e.toLowerCase(),i=>Qp(i)===e),Bu=e=>i=>typeof i===e,{isArray:Da}=Array,ja=Bu("undefined");function Ko(e){return e!==null&&!ja(e)&&e.constructor!==null&&!ja(e.constructor)&&wn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const A0=Kn("ArrayBuffer");function GS(e){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(e):i=e&&e.buffer&&A0(e.buffer),i}const YS=Bu("string"),wn=Bu("function"),P0=Bu("number"),Qo=e=>e!==null&&typeof e=="object",KS=e=>e===!0||e===!1,lu=e=>{if(!Qo(e))return!1;const i=$o(e);return(i===null||i===Object.prototype||$o(i)===null)&&!pl(e,S0)&&!pl(e,xl)},QS=e=>{if(!Qo(e)||Ko(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},XS=Kn("Date"),JS=Kn("File"),eA=e=>!!(e&&typeof e.uri<"u"),tA=e=>e&&typeof e.getParts<"u",nA=Kn("Blob"),rA=Kn("FileList"),iA=Kn("Set"),aA=e=>Qo(e)&&wn(e.pipe);function oA(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Bg=oA(),Hg=typeof Bg.FormData<"u"?Bg.FormData:void 0,sA=e=>{if(!e)return!1;if(Hg&&e instanceof Hg)return!0;const i=$o(e);if(!i||i===Object.prototype||!wn(e.append))return!1;const a=Qp(e);return a==="formdata"||a==="object"&&wn(e.toString)&&e.toString()==="[object FormData]"},lA=Kn("URLSearchParams"),[cA,uA,dA,fA]=["ReadableStream","Request","Response","Headers"].map(Kn),pA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wl(e,i,{allOwnKeys:a=!1}={}){if(e===null||typeof e>"u")return;let l,c;if(typeof e!="object"&&(e=[e]),Da(e))for(l=0,c=e.length;l<c;l++)i.call(null,e[l],l,e);else{if(Ko(e))return;const f=a?Object.getOwnPropertyNames(e):Object.keys(e),p=f.length;let g;for(l=0;l<p;l++)g=f[l],i.call(null,e[g],g,e)}}function E0(e,i){if(Ko(e))return null;i=i.toLowerCase();const a=Object.keys(e);let l=a.length,c;for(;l-- >0;)if(c=a[l],i===c.toLowerCase())return c;return null}const Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,C0=e=>!ja(e)&&e!==Ta;function mp(...e){const{caseless:i,skipUndefined:a}=C0(this)&&this||{},l={},c=(f,p)=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const g=i&&typeof p=="string"&&E0(l,p)||p,b=xu(l,g)?l[g]:void 0;lu(b)&&lu(f)?l[g]=mp(b,f):lu(f)?l[g]=mp({},f):Da(f)?l[g]=f.slice():(!a||!ja(f))&&(l[g]=f)};for(let f=0,p=e.length;f<p;f++){const g=e[f];if(!g||Ko(g)||(wl(g,c),typeof g!="object"||Da(g)))continue;const b=Object.getOwnPropertySymbols(g);for(let w=0;w<b.length;w++){const k=b[w];AA.call(g,k)&&c(g[k],k)}}return l}const hA=(e,i,a,{allOwnKeys:l}={})=>(wl(i,(c,f)=>{a&&wn(c)?Object.defineProperty(e,f,{__proto__:null,value:k0(c,a),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,f,{__proto__:null,value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),e),mA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gA=(e,i,a,l)=>{e.prototype=Object.create(i.prototype,l),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:i.prototype}),a&&Object.assign(e.prototype,a)},vA=(e,i,a,l)=>{let c,f,p;const g={};if(i=i||{},e==null)return i;do{for(c=Object.getOwnPropertyNames(e),f=c.length;f-- >0;)p=c[f],(!l||l(p,e,i))&&!g[p]&&(i[p]=e[p],g[p]=!0);e=a!==!1&&$o(e)}while(e&&(!a||a(e,i))&&e!==Object.prototype);return i},yA=(e,i,a)=>{e=String(e),(a===void 0||a>e.length)&&(a=e.length),a-=i.length;const l=e.indexOf(i,a);return l!==-1&&l===a},bA=e=>{if(!e)return null;if(Da(e))return e;let i=e.length;if(!P0(i))return null;const a=new Array(i);for(;i-- >0;)a[i]=e[i];return a},xA=(e=>i=>e&&i instanceof e)(typeof Uint8Array<"u"&&$o(Uint8Array)),wA=(e,i)=>{const l=(e&&e[xl]).call(e);let c;for(;(c=l.next())&&!c.done;){const f=c.value;i.call(e,f[0],f[1])}},_A=(e,i)=>{let a;const l=[];for(;(a=e.exec(i))!==null;)l.push(a);return l},kA=Kn("HTMLFormElement"),SA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,l,c){return l.toUpperCase()+c}),{propertyIsEnumerable:AA}=Object.prototype,PA=Kn("RegExp"),R0=(e,i)=>{const a=Object.getOwnPropertyDescriptors(e),l={};wl(a,(c,f)=>{let p;(p=i(c,f,e))!==!1&&(l[f]=p||c)}),Object.defineProperties(e,l)},EA=e=>{R0(e,(i,a)=>{if(wn(e)&&["arguments","caller","callee"].includes(a))return!1;const l=e[a];if(wn(l)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},CA=(e,i)=>{const a={},l=c=>{c.forEach(f=>{a[f]=!0})};return Da(e)?l(e):l(String(e).split(i)),a},RA=()=>{},TA=(e,i)=>e!=null&&Number.isFinite(e=+e)?e:i;function LA(e){return!!(e&&wn(e.append)&&e[S0]==="FormData"&&e[xl])}const IA=e=>{const i=new WeakSet,a=l=>{if(Qo(l)){if(i.has(l))return;if(Ko(l))return l;if(!("toJSON"in l)){i.add(l);let c;if(iA(l)){c=[];for(const f of l){const p=a(f);!ja(p)&&c.push(p)}}else c=Da(l)?[]:{},wl(l,(f,p)=>{const g=a(f);!ja(g)&&(c[p]=g)});return i.delete(l),c}}return l};return a(e)},NA=Kn("AsyncFunction"),DA=e=>e&&(Qo(e)||wn(e))&&wn(e.then)&&wn(e.catch),T0=((e,i)=>e?setImmediate:i?((a,l)=>(Ta.addEventListener("message",({source:c,data:f})=>{c===Ta&&f===a&&l.length&&l.shift()()},!1),c=>{l.push(c),Ta.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",wn(Ta.postMessage)),jA=typeof queueMicrotask<"u"?queueMicrotask.bind(Ta):typeof process<"u"&&process.nextTick||T0,L0=e=>e!=null&&wn(e[xl]),MA=e=>e!=null&&pl(e,xl)&&L0(e),O={isArray:Da,isArrayBuffer:A0,isBuffer:Ko,isFormData:sA,isArrayBufferView:GS,isString:YS,isNumber:P0,isBoolean:KS,isObject:Qo,isPlainObject:lu,isEmptyObject:QS,isReadableStream:cA,isRequest:uA,isResponse:dA,isHeaders:fA,isUndefined:ja,isDate:XS,isFile:JS,isReactNativeBlob:eA,isReactNative:tA,isBlob:nA,isRegExp:PA,isFunction:wn,isStream:aA,isURLSearchParams:lA,isTypedArray:xA,isFileList:rA,forEach:wl,merge:mp,extend:hA,trim:pA,stripBOM:mA,inherits:gA,toFlatObject:vA,kindOf:Qp,kindOfTest:Kn,endsWith:yA,toArray:bA,forEachEntry:wA,matchAll:_A,isHTMLForm:kA,hasOwnProperty:xu,hasOwnProp:xu,hasOwnInPrototypeChain:pl,getSafeProp:ZS,reduceDescriptors:R0,freezeMethods:EA,toObjectSet:CA,toCamelCase:SA,noop:RA,toFiniteNumber:TA,findKey:E0,global:Ta,isContextDefined:C0,isSpecCompliantForm:LA,toJSONObject:IA,isAsyncFn:NA,isThenable:DA,setImmediate:T0,asap:jA,isIterable:L0,isSafeIterable:MA},OA=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zA=e=>{const i={};let a,l,c;return e&&e.split(`
`).forEach(function(p){c=p.indexOf(":"),a=p.substring(0,c).trim().toLowerCase(),l=p.substring(c+1).trim();const g=O.hasOwnProp(i,a);!a||g&&O.hasOwnProp(OA,a)||(a==="set-cookie"?g?i[a].push(l):i[a]=[l]:i[a]=g?i[a]+", "+l:l)}),i};function FA(e){let i=0,a=e.length;for(;i<a;){const l=e.charCodeAt(i);if(l!==9&&l!==32)break;i+=1}for(;a>i;){const l=e.charCodeAt(a-1);if(l!==9&&l!==32)break;a-=1}return i===0&&a===e.length?e:e.slice(i,a)}const BA=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),HA=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Xp(e,i){return O.isArray(e)?e.map(a=>Xp(a,i)):FA(String(e).replace(i,""))}const UA=e=>Xp(e,BA),WA=e=>Xp(e,HA);function I0(e){const i=Object.create(null);return O.forEach(e.toJSON(),(a,l)=>{i[l]=WA(a)}),i}const Ug=Symbol("internals");function Qs(e){return e&&String(e).trim().toLowerCase()}function cu(e){return e===!1||e==null?e:O.isArray(e)?e.map(cu):UA(String(e))}function VA(e){const i=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=a.exec(e);)i[l[1]]=l[2];return i}const $A=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Tf(e){let i=0,a=e.length;for(;i<a;){const l=e.charCodeAt(i);if(l!==9&&l!==32)break;i+=1}for(;a>i;){const l=e.charCodeAt(a-1);if(l!==9&&l!==32)break;a-=1}return i===0&&a===e.length?e:e.slice(i,a)}function qA(e){const i=e.length-1;if(i<1||e.charCodeAt(0)!==34||e.charCodeAt(i)!==34)return e;let a="";for(let l=1;l<i;l++){const c=e.charCodeAt(l);if(c===34||c===92&&(l+=1,l>=i))return e;a+=e[l]}return a}function ZA(e){const i=Object.create(null),a=String(e);let l=0,c=!1,f=!1;function p(g){const b=Tf(a.slice(l,g)),w=b.indexOf("=");if(w<1)return;const k=Tf(b.slice(0,w));if(!$A.test(k))return;const _=k.toLowerCase();if(_==="__proto__"||_==="constructor"||_==="prototype")return;const E=Tf(b.slice(w+1));i[_]=qA(E)}for(let g=0;g<a.length;g++){const b=a.charCodeAt(g);c?f?f=!1:b===92?f=!0:b===34&&(c=!1):b===34?c=!0:(b===44||b===59)&&(p(g),l=g+1)}return p(a.length),i}const GA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Lf(e,i,a,l,c){if(O.isFunction(l))return l.call(this,i,a);if(c&&(i=a),!!O.isString(i)){if(O.isString(l))return i.indexOf(l)!==-1;if(O.isRegExp(l))return l.test(i)}}function YA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,a,l)=>a.toUpperCase()+l)}function KA(e,i){const a=O.toCamelCase(" "+i);["get","set","has"].forEach(l=>{Object.defineProperty(e,l+a,{__proto__:null,value:function(c,f,p){return this[l].call(this,i,c,f,p)},configurable:!0})})}let Jt=class{constructor(i){i&&this.set(i)}set(i,a,l){const c=this;function f(g,b,w){const k=Qs(b);if(!k)return;const _=O.findKey(c,k);(!_||c[_]===void 0||w===!0||w===void 0&&c[_]!==!1)&&(c[_||b]=cu(g))}const p=(g,b)=>O.forEach(g,(w,k)=>f(w,k,b));if(O.isPlainObject(i)||i instanceof this.constructor)p(i,a);else if(O.isString(i)&&(i=i.trim())&&!GA(i))p(zA(i),a);else if(O.isObject(i)&&O.isSafeIterable(i)){let g=Object.create(null),b,w;for(const k of i){if(!O.isArray(k))throw new TypeError("Object iterator must return a key-value pair");w=k[0],O.hasOwnProp(g,w)?(b=g[w],g[w]=O.isArray(b)?[...b,k[1]]:[b,k[1]]):g[w]=k[1]}p(g,a)}else i!=null&&f(a,i,l);return this}get(i,a){if(i=Qs(i),i){const l=O.findKey(this,i);if(l){const c=this[l];if(!a)return c;if(a===!0)return VA(c);if(O.isFunction(a))return a.call(this,c,l);if(O.isRegExp(a))return a.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,a){if(i=Qs(i),i){const l=O.findKey(this,i);return!!(l&&this[l]!==void 0&&(!a||Lf(this,this[l],l,a)))}return!1}delete(i,a){const l=this;let c=!1;function f(p){if(p=Qs(p),p){const g=O.findKey(l,p);g&&(!a||Lf(l,l[g],g,a))&&(delete l[g],c=!0)}}return O.isArray(i)?i.forEach(f):f(i),c}clear(i){const a=Object.keys(this);let l=a.length,c=!1;for(;l--;){const f=a[l];(!i||Lf(this,this[f],f,i,!0))&&(delete this[f],c=!0)}return c}normalize(i){const a=this,l={};return O.forEach(this,(c,f)=>{const p=O.findKey(l,f);if(p){a[p]=cu(c),delete a[f];return}const g=i?YA(f):String(f).trim();g!==f&&delete a[f],a[g]=cu(c),l[g]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const a=Object.create(null);return O.forEach(this,(l,c)=>{l!=null&&l!==!1&&(a[c]=i&&O.isArray(l)?l.join(", "):l)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,a])=>i+": "+a).join(`
`)}getSetCookie(){const i=this.get("set-cookie");return O.isArray(i)?i:i==null||i===!1?[]:[i]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static parseParameters(i){return ZA(i)}static concat(i,...a){const l=new this(i);return a.forEach(c=>l.set(c)),l}static accessor(i){const l=(this[Ug]=this[Ug]={accessors:{}}).accessors,c=this.prototype;function f(p){const g=Qs(p);l[g]||(KA(c,p),l[g]=!0)}return O.isArray(i)?i.forEach(f):f(i),this}};Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Jt.prototype,({value:e},i)=>{let a=i[0].toUpperCase()+i.slice(1);return{get:()=>e,set(l){this[a]=l}}});O.freezeMethods(Jt);const wu="[REDACTED ****]";function QA(e){if(O.hasOwnProp(e,"toJSON"))return!0;let i=Object.getPrototypeOf(e);for(;i&&i!==Object.prototype;){if(O.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function XA(e,i){const a=new Set(i.map(f=>String(f).toLowerCase())),l=[],c=f=>{if(f===null||typeof f!="object"||O.isBuffer(f))return f;if(l.indexOf(f)!==-1)return;f instanceof Jt&&(f=f.toJSON()),l.push(f);let p;if(O.isArray(f))p=[],f.forEach((g,b)=>{const w=c(g);O.isUndefined(w)||(p[b]=w)});else{if(!O.isPlainObject(f)&&QA(f))return l.pop(),f;p=Object.create(null);for(const[g,b]of Object.entries(f)){const w=a.has(g.toLowerCase())?wu:c(b);O.isUndefined(w)||(p[g]=w)}}return l.pop(),p};return c(e)}function Wg(e){try{return String(e)}catch{return""}}function JA(e){return e.errors.map(a=>{try{return a&&a.message?Wg(a.message):Wg(a)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let pe=class N0 extends Error{static from(i,a,l,c,f,p){let g=i.message;!g&&O.isArray(i.errors)&&i.errors.length&&(g=JA(i));const b=new N0(g,a||i.code,l,c,f);return Object.defineProperty(b,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),b.name=i.name,i.status!=null&&b.status==null&&(b.status=i.status),p&&Object.assign(b,p),b}constructor(i,a,l,c,f){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,a&&(this.code=a),l&&(this.config=l),c&&(this.request=c),f&&(this.response=f,this.status=f.status)}toJSON(){const i=this.config,a=i&&O.hasOwnProp(i,"redact")?i.redact:void 0,l=O.isArray(a)&&a.length>0?XA(i,a):O.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};pe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";pe.ERR_BAD_OPTION="ERR_BAD_OPTION";pe.ECONNABORTED="ECONNABORTED";pe.ETIMEDOUT="ETIMEDOUT";pe.ECONNREFUSED="ECONNREFUSED";pe.ERR_NETWORK="ERR_NETWORK";pe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";pe.ERR_DEPRECATED="ERR_DEPRECATED";pe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";pe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";pe.ERR_CANCELED="ERR_CANCELED";pe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";pe.ERR_INVALID_URL="ERR_INVALID_URL";pe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const e4=null,D0=100;function gp(e){return O.isPlainObject(e)||O.isArray(e)}function j0(e){return O.endsWith(e,"[]")?e.slice(0,-2):e}function If(e,i,a){return e?e.concat(i).map(function(c,f){return c=j0(c),!a&&f?"["+c+"]":c}).join(a?".":""):i}function t4(e){return O.isArray(e)&&!e.some(gp)}const n4=O.toFlatObject(O,{},null,function(i){return/^is[A-Z]/.test(i)});function Hu(e,i,a){if(!O.isObject(e))throw new TypeError("target must be an object");i=i||new FormData,a=O.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(W,F){return!O.isUndefined(F[W])});const l=a.metaTokens,c=a.visitor||B,f=a.dots,p=a.indexes,g=a.Blob||typeof Blob<"u"&&Blob,b=a.maxDepth===void 0?D0:a.maxDepth,w=g&&O.isSpecCompliantForm(i),k=[];if(!O.isFunction(c))throw new TypeError("visitor must be a function");function _(N){if(N===null)return"";if(O.isDate(N))return N.toISOString();if(O.isBoolean(N))return N.toString();if(!w&&O.isBlob(N))throw new pe("Blob is not supported. Use a Buffer instead.");if(O.isArrayBuffer(N)||O.isTypedArray(N)){if(w&&typeof g=="function")return new g([N]);throw new pe("Blob is not supported. Use a Buffer instead.",pe.ERR_NOT_SUPPORT)}return N}function E(N){if(N>b)throw new pe("Object is too deeply nested ("+N+" levels). Max depth: "+b,pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function D(N,W){if(b===1/0)return JSON.stringify(N);const F=[];return JSON.stringify(N,function(ee,Q){if(!O.isObject(Q))return Q;for(;F.length&&F[F.length-1]!==this;)F.pop();return F.push(Q),E(W+F.length-1),Q})}function B(N,W,F){let K=N;if(O.isReactNative(i)&&O.isReactNativeBlob(N))return i.append(If(F,W,f),_(N)),!1;if(N&&!F&&typeof N=="object"){if(O.endsWith(W,"{}"))W=l?W:W.slice(0,-2),N=D(N,1);else if(O.isArray(N)&&t4(N)||(O.isFileList(N)||O.endsWith(W,"[]"))&&(K=O.toArray(N)))return W=j0(W),K.forEach(function(Q,se){!(O.isUndefined(Q)||Q===null)&&i.append(p===!0?If([W],se,f):p===null?W:W+"[]",_(Q))}),!1}return gp(N)?!0:(i.append(If(F,W,f),_(N)),!1)}const C=Object.assign(n4,{defaultVisitor:B,convertValue:_,isVisitable:gp});function I(N,W,F=0){if(!O.isUndefined(N)){if(E(F),k.indexOf(N)!==-1)throw new Error("Circular reference detected in "+W.join("."));k.push(N),O.forEach(N,function(ee,Q){(!(O.isUndefined(ee)||ee===null)&&c.call(i,ee,O.isString(Q)?Q.trim():Q,W,C))===!0&&I(ee,W?W.concat(Q):[Q],F+1)}),k.pop()}}if(!O.isObject(e))throw new TypeError("data must be an object");return I(e),i}function Vg(e){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(l){return i[l]})}function Jp(e,i){this._pairs=[],e&&Hu(e,this,i)}const M0=Jp.prototype;M0.append=function(i,a){this._pairs.push([i,a])};M0.toString=function(i){const a=i?l=>i.call(this,l,Vg):Vg;return this._pairs.map(function(c){return a(c[0])+"="+a(c[1])},"").join("&")};function r4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function O0(e,i,a){if(!i)return e;e=e||"";const l=O.isFunction(a)?{serialize:a}:a,c=O.getSafeProp(l,"encode")||r4,f=O.getSafeProp(l,"serialize");let p;if(f?p=f(i,l):p=O.isURLSearchParams(i)?i.toString():new Jp(i,l).toString(c),p){const g=e.indexOf("#");g!==-1&&(e=e.slice(0,g)),e+=(e.indexOf("?")===-1?"?":"&")+p}return e}class $g{constructor(){this.handlers=[]}use(i,a,l){return this.handlers.push({fulfilled:i,rejected:a,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){O.forEach(this.handlers,function(l){l!==null&&i(l)})}}const eh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},i4=typeof URLSearchParams<"u"?URLSearchParams:Jp,a4=typeof FormData<"u"?FormData:null,o4=typeof Blob<"u"?Blob:null,s4={isBrowser:!0,classes:{URLSearchParams:i4,FormData:a4,Blob:o4},protocols:["http","https","file","blob","url","data"]},th=typeof window<"u"&&typeof document<"u",vp=typeof navigator=="object"&&navigator||void 0,l4=th&&(!vp||["ReactNative","NativeScript","NS"].indexOf(vp.product)<0),c4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",u4=th&&window.location.href||"http://localhost",d4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:th,hasStandardBrowserEnv:l4,hasStandardBrowserWebWorkerEnv:c4,navigator:vp,origin:u4},Symbol.toStringTag,{value:"Module"})),Ft={...d4,...s4};function f4(e,i){return Hu(e,new Ft.classes.URLSearchParams,{visitor:function(a,l,c,f){return Ft.isNode&&O.isBuffer(a)?(this.append(l,a.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...i})}const qg=D0;function z0(e){if(e>qg)throw new pe("FormData field is too deeply nested ("+e+" levels). Max depth: "+qg,pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p4(e){const i=[],a=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=a.exec(e))!==null;)z0(i.length),i.push(l[0]==="[]"?"":l[1]||l[0]);return i}function h4(e){const i={},a=Object.keys(e);let l;const c=a.length;let f;for(l=0;l<c;l++)f=a[l],i[f]=e[f];return i}function F0(e){function i(a,l,c,f){z0(f);let p=a[f++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),b=f>=a.length;return p=!p&&O.isArray(c)?c.length:p,b?(O.hasOwnProp(c,p)?c[p]=O.isArray(c[p])?c[p].concat(l):[c[p],l]:c[p]=l,!g):((!O.hasOwnProp(c,p)||!O.isObject(c[p]))&&(c[p]=[]),i(a,l,c[p],f)&&O.isArray(c[p])&&(c[p]=h4(c[p])),!g)}if(O.isFormData(e)&&O.isFunction(e.entries)){const a={};return O.forEachEntry(e,(l,c)=>{i(p4(l),c,a,0)}),a}return null}const No=(e,i)=>e!=null&&O.hasOwnProp(e,i)?e[i]:void 0;function m4(e,i,a){if(O.isString(e))try{return(i||JSON.parse)(e),O.trim(e)}catch(l){if(l.name!=="SyntaxError")throw l}return(a||JSON.stringify)(e)}const _l={transitional:eh,adapter:["xhr","http","fetch"],transformRequest:[function(i,a){const l=a.getContentType()||"",c=l.indexOf("application/json")>-1,f=O.isObject(i);if(f&&O.isHTMLForm(i)&&(i=new FormData(i)),O.isFormData(i))return c?JSON.stringify(F0(i)):i;if(O.isArrayBuffer(i)||O.isBuffer(i)||O.isStream(i)||O.isFile(i)||O.isBlob(i)||O.isReadableStream(i))return i;if(O.isArrayBufferView(i))return i.buffer;if(O.isURLSearchParams(i))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let g;if(f){const b=No(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return f4(i,b).toString();if((g=O.isFileList(i))||l.indexOf("multipart/form-data")>-1){const w=No(this,"env"),k=w&&w.FormData;return Hu(g?{"files[]":i}:i,k&&new k,b)}}return f||c?(a.setContentType("application/json",!1),m4(i)):i}],transformResponse:[function(i){const a=No(this,"transitional")||_l.transitional,l=a&&a.forcedJSONParsing,c=No(this,"responseType"),f=c==="json";if(O.isResponse(i)||O.isReadableStream(i))return i;if(i&&O.isString(i)&&(l&&!c||f)){const g=!(a&&a.silentJSONParsing)&&f;try{return JSON.parse(i,No(this,"parseReviver"))}catch(b){if(g)throw b.name==="SyntaxError"?pe.from(b,pe.ERR_BAD_RESPONSE,this,null,No(this,"response")):b}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ft.classes.FormData,Blob:Ft.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch","query"],e=>{_l.headers[e]={}});function Nf(e,i){const a=this||_l,l=i||a,c=Jt.from(l.headers);let f=l.data;return O.forEach(e,function(g){f=g.call(a,f,c.normalize(),i?i.status:void 0)}),c.normalize(),f}function B0(e){return!!(e&&e.__CANCEL__)}let kl=class extends pe{constructor(i,a,l){super(i??"canceled",pe.ERR_CANCELED,a,l),this.name="CanceledError",this.__CANCEL__=!0}};function H0(e,i,a){const l=a.config.validateStatus;!a.status||!l||l(a.status)?e(a):i(new pe("Request failed with status code "+a.status,a.status>=400&&a.status<500?pe.ERR_BAD_REQUEST:pe.ERR_BAD_RESPONSE,a.config,a.request,a))}function g4(e){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return i&&i[1]||""}function v4(e,i){e=e||10;const a=new Array(e),l=new Array(e);let c=0,f=0,p;return i=i!==void 0?i:1e3,function(b){const w=Date.now(),k=l[f];p||(p=w),a[c]=b,l[c]=w;let _=f,E=0;for(;_!==c;)E+=a[_++],_=_%e;if(c=(c+1)%e,c===f&&(f=(f+1)%e),w-p<i)return;const D=k&&w-k;return D?Math.round(E*1e3/D):void 0}}function y4(e,i){let a=0,l=1e3/i,c,f;const p=(w,k=Date.now())=>{a=k,c=null,f&&(clearTimeout(f),f=null),e(...w)};return[(...w)=>{const k=Date.now(),_=k-a;_>=l?p(w,k):(c=w,f||(f=setTimeout(()=>{f=null,p(c)},l-_)))},()=>c&&p(c)]}const _u=(e,i,a=3)=>{let l=0;const c=v4(50,250);return y4(f=>{if(!f||typeof f.loaded!="number")return;const p=f.loaded,g=f.lengthComputable?f.total:void 0,b=Math.max(0,g!=null?Math.min(p,g):p),w=Math.max(0,b-l),k=c(w);l=Math.max(l,b);const _={loaded:b,total:g,progress:g?b/g:void 0,bytes:w,rate:k||void 0,estimated:k&&g?(g-b)/k:void 0,event:f,lengthComputable:g!=null,[i?"download":"upload"]:!0};e(_)},a)},Zg=(e,i)=>{const a=e!=null;return[l=>i[0]({lengthComputable:a,total:e,loaded:l}),i[1]]},Gg=(e,i=O.asap)=>(...a)=>i(()=>e(...a)),b4=Ft.hasStandardBrowserEnv?((e,i)=>a=>(a=new URL(a,Ft.origin),e.protocol===a.protocol&&e.host===a.host&&(i||e.port===a.port)))(new URL(Ft.origin),Ft.navigator&&/(msie|trident)/i.test(Ft.navigator.userAgent)):()=>!0,x4=Ft.hasStandardBrowserEnv?{write(e,i,a,l,c,f,p){if(typeof document>"u")return;const g=[`${e}=${encodeURIComponent(i)}`];O.isNumber(a)&&g.push(`expires=${new Date(a).toUTCString()}`),O.isString(l)&&g.push(`path=${l}`),O.isString(c)&&g.push(`domain=${c}`),f===!0&&g.push("secure"),O.isString(p)&&g.push(`SameSite=${p}`),document.cookie=g.join("; ")},read(e){if(typeof document>"u")return null;const i=document.cookie.split(";");for(let a=0;a<i.length;a++){const l=i[a].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===e)try{return decodeURIComponent(l.slice(c+1))}catch{return l.slice(c+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function w4(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _4(e,i){if(!i)return e;let a=e.length;for(;a>0&&e.charCodeAt(a-1)===47;)a--;return e.slice(0,a)+"/"+i.replace(/^\/+/,"")}const k4=/^https?:(?!\/\/)/i,S4=/[\t\n\r]/g;function A4(e){let i=0;for(;i<e.length&&e.charCodeAt(i)<=32;)i++;return e.slice(i)}function P4(e){return A4(e).replace(S4,"")}function E4(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(i,a,l="")=>`${a}${l}${wu}`)}function C4(e){const i=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${wu}@`),a=i.indexOf("#"),c=(a===-1?i:i.slice(0,a)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${wu}`);return a===-1?c:`${c}#${E4(i.slice(a+1))}`}function Yg(e,i){if(typeof e=="string"){const a=P4(e);if(k4.test(a))throw new pe(`Invalid URL ${JSON.stringify(C4(a))}: missing "//" after protocol`,pe.ERR_INVALID_URL,i)}}function U0(e,i,a,l){Yg(i,l);let c=!w4(i);return e&&(c||a===!1)?(Yg(e,l),_4(e,i)):i}const Kg=e=>e instanceof Jt?{...e}:e,R4=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(i=>Object.getOwnPropertyDescriptor(e,i).enumerable)):Object.keys(e);function Ma(e,i){e=e||{},i=i||{};const a=Object.create(null);Object.defineProperty(a,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(k,_,E,D){return O.isPlainObject(k)&&O.isPlainObject(_)?O.merge.call({caseless:D},k,_):O.isPlainObject(_)?O.merge({},_):O.isArray(_)?_.slice():_}function c(k,_,E,D){if(O.isUndefined(_)){if(!O.isUndefined(k))return l(void 0,k,E,D)}else return l(k,_,E,D)}function f(k,_){if(!O.isUndefined(_))return l(void 0,_)}function p(k,_){if(O.isUndefined(_)){if(!O.isUndefined(k))return l(void 0,k)}else return l(void 0,_)}function g(k){const _=O.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!O.isUndefined(_))if(O.isPlainObject(_)){if(O.hasOwnProp(_,k))return _[k]}else return;const E=O.hasOwnProp(e,"transitional")?e.transitional:void 0;if(O.isPlainObject(E)&&O.hasOwnProp(E,k))return E[k]}function b(k,_,E){if(O.hasOwnProp(i,E))return l(k,_);if(O.hasOwnProp(e,E))return l(void 0,k)}const w={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,allowedSocketPaths:p,responseEncoding:p,validateStatus:b,headers:(k,_,E)=>c(Kg(k),Kg(_),E,!0)};return O.forEach(R4({...e,...i}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const E=O.hasOwnProp(w,_)?w[_]:c,D=O.hasOwnProp(e,_)?e[_]:void 0,B=O.hasOwnProp(i,_)?i[_]:void 0,C=E(D,B,_);O.isUndefined(C)&&E!==b||(a[_]=C)}),O.hasOwnProp(i,"validateStatus")&&O.isUndefined(i.validateStatus)&&g("validateStatusUndefinedResolves")===!1&&(O.hasOwnProp(e,"validateStatus")?a.validateStatus=l(void 0,e.validateStatus):delete a.validateStatus),a}const T4=["content-type","content-length"];function L4(e,i,a){if(a!=="content-only"){e.set(i);return}Object.entries(i||{}).forEach(([l,c])=>{T4.includes(l.toLowerCase())&&e.set(l,c)})}const I4=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(i,a)=>String.fromCharCode(parseInt(a,16)));function W0(e){const i=Ma({},e),a=E=>O.hasOwnProp(i,E)?i[E]:void 0,l=a("data");let c=a("withXSRFToken");const f=a("xsrfHeaderName"),p=a("xsrfCookieName");let g=a("headers");const b=a("auth"),w=a("baseURL"),k=a("allowAbsoluteUrls"),_=a("url");if(i.headers=g=Jt.from(g),i.url=O0(U0(w,_,k,i),a("params"),a("paramsSerializer")),b){const E=O.getSafeProp(b,"username")||"",D=O.getSafeProp(b,"password")||"";try{g.set("Authorization","Basic "+btoa(E+":"+(D?I4(D):"")))}catch(B){throw pe.from(B,pe.ERR_BAD_OPTION_VALUE,e)}}if(O.isFormData(l)&&(Ft.hasStandardBrowserEnv||Ft.hasStandardBrowserWebWorkerEnv||O.isReactNative(l)?g.setContentType(void 0):O.isFunction(l.getHeaders)&&L4(g,l.getHeaders(),a("formDataHeaderPolicy"))),Ft.hasStandardBrowserEnv&&(O.isFunction(c)&&(c=c(i)),c===!0||c==null&&b4(i.url))){const D=f&&p&&x4.read(p);D&&g.set(f,D)}return i}const N4=typeof XMLHttpRequest<"u",D4=N4&&function(e){return new Promise(function(a,l){const c=W0(e);let f=c.data;const p=Jt.from(c.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:w}=c,k,_,E,D,B;function C(){D&&D(),B&&B(),c.cancelToken&&c.cancelToken.unsubscribe(k),c.signal&&c.signal.removeEventListener("abort",k)}let I=new XMLHttpRequest;I.open(c.method.toUpperCase(),c.url,!0),I.timeout=c.timeout;function N(){if(!I)return;const F=Jt.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),ee={data:!g||g==="text"||g==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:F,config:e,request:I};H0(function(se){a(se),C()},function(se){l(se),C()},ee),I=null}"onloadend"in I?I.onloadend=N:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.startsWith("file:"))||setTimeout(N)},I.onabort=function(){I&&(l(new pe("Request aborted",pe.ECONNABORTED,e,I)),C(),I=null)},I.onerror=function(K){const ee=K&&K.message?K.message:"Network Error",Q=new pe(ee,pe.ERR_NETWORK,e,I);Q.event=K||null,l(Q),C(),I=null},I.ontimeout=function(){let K=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const ee=c.transitional||eh;c.timeoutErrorMessage&&(K=c.timeoutErrorMessage),l(new pe(K,ee.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,e,I)),C(),I=null},f===void 0&&p.setContentType(null),"setRequestHeader"in I&&O.forEach(I0(p),function(K,ee){I.setRequestHeader(ee,K)}),O.isUndefined(c.withCredentials)||(I.withCredentials=!!c.withCredentials),g&&g!=="json"&&(I.responseType=c.responseType),w&&([E,B]=_u(w,!0),I.addEventListener("progress",E)),b&&I.upload&&([_,D]=_u(b),I.upload.addEventListener("progress",_),I.upload.addEventListener("loadend",D)),(c.cancelToken||c.signal)&&(k=F=>{I&&(l(!F||F.type?new kl(null,e,I):F),I.abort(),C(),I=null)},c.cancelToken&&c.cancelToken.subscribe(k),c.signal&&(c.signal.aborted?k():c.signal.addEventListener("abort",k)));const W=g4(c.url);if(W&&!Ft.protocols.includes(W)){l(new pe("Unsupported protocol "+W+":",pe.ERR_BAD_REQUEST,e)),C();return}I.send(f||null)})},j4=(e,i)=>{if(e=e?e.filter(Boolean):[],!i&&!e.length)return;const a=new AbortController;let l=!1;const c=function(b){if(!l){l=!0,p();const w=b instanceof Error?b:this.reason;a.abort(w instanceof pe?w:new kl(w instanceof Error?w.message:w))}};let f=i&&setTimeout(()=>{f=null,c(new pe(`timeout of ${i}ms exceeded`,pe.ETIMEDOUT))},i);const p=()=>{e&&(f&&clearTimeout(f),f=null,e.forEach(b=>{b.unsubscribe?b.unsubscribe(c):b.removeEventListener("abort",c)}),e=null)};e.forEach(b=>{if(!l){if(b.aborted){c.call(b);return}b.addEventListener("abort",c,{once:!0})}});const{signal:g}=a;return g.unsubscribe=()=>O.asap(p),g},M4=function*(e,i){let a=e.byteLength;if(a<i){yield e;return}let l=0,c;for(;l<a;)c=l+i,yield e.slice(l,c),l=c},O4=async function*(e,i){for await(const a of z4(e))yield*M4(a,i)},z4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const i=e.getReader();try{for(;;){const{done:a,value:l}=await i.read();if(a)break;yield l}}finally{await i.cancel()}},Qg=(e,i,a,l)=>{const c=O4(e,i);let f=0,p,g=b=>{p||(p=!0,l&&l(b))};return new ReadableStream({async pull(b){try{const{done:w,value:k}=await c.next();if(w){g(),b.close();return}let _=k.byteLength;if(a){let E=f+=_;a(E)}b.enqueue(new Uint8Array(k))}catch(w){throw g(w),w}},cancel(b){return g(b),c.return()}},{highWaterMark:2})},Xg=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,V0=(e,i,a)=>i+2<a&&Xg(e.charCodeAt(i+1))&&Xg(e.charCodeAt(i+2)),Jg=e=>e<=57?e-48:(e&223)-55,F4=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,B4=e=>e===9||e===10||e===12||e===13||e===32,H4=e=>{const i=Math.floor(e/4),a=e%4;return i*3+(a===2?1:a===3?2:0)},U4=e=>{const i=e.length;let a=0;return i>0&&e.charCodeAt(i-1)===61&&(a++,i>1&&e.charCodeAt(i-2)===61&&a++),Math.floor((i-a)*3/4)},W4=e=>{const i=e.length;let a=0,l=0,c=!1;for(let f=0;f<i;f++){let p=e.charCodeAt(f);if(p===37&&V0(e,f,i)&&(p=Jg(e.charCodeAt(f+1))*16+Jg(e.charCodeAt(f+2)),f+=2),!B4(p)){if(p===61){l++;continue}if(!F4(p)||l>0){c=!0;continue}a++}}return c||l>2||l>0&&(a+l)%4!==0||a%4===1?U4(e):H4(a)},V4=(e,i)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const a=e.indexOf(",");if(a<0)return 0;const l=e.slice(5,a),c=e.slice(a+1);if(/;base64/i.test(l))return i(c);let p=0;for(let g=0,b=c.length;g<b;g++){const w=c.charCodeAt(g);if(w===37&&V0(c,g,b))p+=1,g+=2;else if(w<128)p+=1;else if(w<2048)p+=2;else if(w>=55296&&w<=56319&&g+1<b){const k=c.charCodeAt(g+1);k>=56320&&k<=57343?(p+=4,g++):p+=3}else p+=3}return p};function $4(e){const i=typeof e=="string"?e.indexOf("#"):-1;return V4(i===-1?e:e.slice(0,i),W4)}const nh="1.19.0",ev=64*1024,{isFunction:Gc}=O,q4=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(i,a)=>String.fromCharCode(parseInt(a,16))),tv=e=>{if(!O.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},nv=(e,...i)=>{try{return!!e(...i)}catch{return!1}},Z4=e=>{const i=e.indexOf("://");let a=e;return i!==-1&&(a=a.slice(i+3)),a.includes("@")||a.includes(":")},G4=e=>{const i=O.global!==void 0&&O.global!==null?O.global:globalThis,{ReadableStream:a,TextEncoder:l}=i;e=O.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response},e);const{fetch:c,Request:f,Response:p}=e,g=c?Gc(c):typeof fetch=="function",b=Gc(f),w=Gc(p);if(!g)return!1;const k=g&&Gc(a),_=g&&(typeof l=="function"?(N=>W=>N.encode(W))(new l):async N=>new Uint8Array(await new f(N).arrayBuffer())),E=b&&k&&nv(()=>{let N=!1;const W=new f(Ft.origin,{body:new a,method:"POST",get duplex(){return N=!0,"half"}}),F=W.headers.has("Content-Type");return W.body!=null&&W.body.cancel(),N&&!F}),D=w&&k&&nv(()=>O.isReadableStream(new p("").body)),B={stream:D&&(N=>N.body)};g&&["text","arrayBuffer","blob","formData","stream"].forEach(N=>{!B[N]&&(B[N]=(W,F)=>{let K=W&&W[N];if(K)return K.call(W);throw new pe(`Response type '${N}' is not supported`,pe.ERR_NOT_SUPPORT,F)})});const C=async N=>{if(N==null)return 0;if(O.isBlob(N))return N.size;if(O.isSpecCompliantForm(N))return(await new f(Ft.origin,{method:"POST",body:N}).arrayBuffer()).byteLength;if(O.isArrayBufferView(N)||O.isArrayBuffer(N))return N.byteLength;if(O.isURLSearchParams(N)&&(N=N+""),O.isString(N))return(await _(N)).byteLength},I=async(N,W)=>{const F=O.toFiniteNumber(N.getContentLength());return F??C(W)};return async N=>{let{url:W,method:F,data:K,signal:ee,cancelToken:Q,timeout:se,onDownloadProgress:J,onUploadProgress:me,responseType:ke,headers:Pe,withCredentials:De="same-origin",fetchOptions:Ze,maxContentLength:de,maxBodyLength:Ve}=W0(N);const Le=O.isNumber(de)&&de>-1,Me=O.isNumber(Ve)&&Ve>-1,U=re=>O.hasOwnProp(N,re)?N[re]:void 0;let ve=c||fetch;ke=ke?(ke+"").toLowerCase():"text";let q=j4([ee,Q&&Q.toAbortSignal()],se),R=null;const H=q&&q.unsubscribe&&(()=>{q.unsubscribe()});let X,ne=null;const le=()=>new pe("Request body larger than maxBodyLength limit",pe.ERR_BAD_REQUEST,N,R);try{let re;const fe=U("auth");if(fe){const je=O.getSafeProp(fe,"username")||"",ft=O.getSafeProp(fe,"password")||"";re={username:je,password:ft}}if(Z4(W)){const je=new URL(W,Ft.origin);if(!re&&(je.username||je.password)){const ft=tv(je.username),At=tv(je.password);re={username:ft,password:At}}(je.username||je.password)&&(je.username="",je.password="",W=je.href)}if(re&&(Pe.delete("authorization"),Pe.set("Authorization","Basic "+btoa(q4((re.username||"")+":"+(re.password||""))))),Le&&typeof W=="string"&&W.startsWith("data:")&&$4(W)>de)throw new pe("maxContentLength size of "+de+" exceeded",pe.ERR_BAD_RESPONSE,N,R);if(Me&&F!=="get"&&F!=="head"){const je=await C(K);if(typeof je=="number"&&isFinite(je)&&(X=je,je>Ve))throw le()}const Ce=Me&&(O.isReadableStream(K)||O.isStream(K)),Oe=(je,ft,At)=>Qg(je,ev,en=>{if(Me&&en>Ve)throw ne=le();ft&&ft(en)},At);if(E&&F!=="get"&&F!=="head"&&(me||Ce)){if(X=X??await I(Pe,K),X!==0||Ce){let je=new f(W,{method:"POST",body:K,duplex:"half"}),ft;if(O.isFormData(K)&&(ft=je.headers.get("content-type"))&&Pe.setContentType(ft),je.body){const[At,en]=me&&Zg(X,_u(Gg(me)))||[];K=Oe(je.body,At,en)}}}else if(Ce&&!b&&k&&F!=="get"&&F!=="head")K=Oe(K);else if(Ce&&b&&!E&&F!=="get"&&F!=="head")throw new pe("Stream request bodies are not supported by the current fetch implementation",pe.ERR_NOT_SUPPORT,N,R);O.isString(De)||(De=De?"include":"omit");const at=b&&"credentials"in f.prototype;if(O.isFormData(K)){const je=Pe.getContentType();je&&/^multipart\/form-data/i.test(je)&&!/boundary=/i.test(je)&&Pe.delete("content-type")}Pe.set("User-Agent","axios/"+nh,!1);const _t={...Ze,signal:q,method:F.toUpperCase(),headers:I0(Pe.normalize()),body:K,duplex:"half",credentials:at?De:void 0};R=b&&new f(W,_t);let nt=await(b?ve(R,Ze):ve(W,_t));const un=Jt.from(nt.headers);if(Le){const je=O.toFiniteNumber(un.getContentLength());if(je!=null&&je>de)throw new pe("maxContentLength size of "+de+" exceeded",pe.ERR_BAD_RESPONSE,N,R)}const Mn=D&&(ke==="stream"||ke==="response");if(D&&nt.body&&(J||Le||Mn&&H)){const je={};["status","statusText","headers"].forEach(dn=>{je[dn]=nt[dn]});const ft=O.toFiniteNumber(un.getContentLength()),[At,en]=J&&Zg(ft,_u(Gg(J),!0))||[];let tn=0;const Ht=dn=>{if(Le&&(tn=dn,tn>de))throw new pe("maxContentLength size of "+de+" exceeded",pe.ERR_BAD_RESPONSE,N,R);At&&At(dn)};nt=new p(Qg(nt.body,ev,Ht,()=>{en&&en(),H&&H()}),je)}ke=ke||"text";let Lt=await B[O.findKey(B,ke)||"text"](nt,N);if(Le&&!D&&!Mn){let je;if(Lt!=null&&(typeof Lt.byteLength=="number"?je=Lt.byteLength:typeof Lt.size=="number"?je=Lt.size:typeof Lt=="string"&&(je=typeof l=="function"?new l().encode(Lt).byteLength:Lt.length)),typeof je=="number"&&je>de)throw new pe("maxContentLength size of "+de+" exceeded",pe.ERR_BAD_RESPONSE,N,R)}return!Mn&&H&&H(),await new Promise((je,ft)=>{H0(je,ft,{data:Lt,headers:Jt.from(nt.headers),status:nt.status,statusText:nt.statusText,config:N,request:R})})}catch(re){if(H&&H(),q&&q.aborted&&q.reason instanceof pe){const fe=q.reason;throw fe.config=N,R&&(fe.request=R),re!==fe&&Object.defineProperty(fe,"cause",{__proto__:null,value:re,writable:!0,enumerable:!1,configurable:!0}),fe}if(ne)throw R&&!ne.request&&(ne.request=R),ne;if(re instanceof pe)throw R&&!re.request&&(re.request=R),re;if(re&&re.name==="TypeError"&&/Load failed|fetch/i.test(re.message)){const fe=new pe("Network Error",pe.ERR_NETWORK,N,R,re&&re.response);throw Object.defineProperty(fe,"cause",{__proto__:null,value:re.cause||re,writable:!0,enumerable:!1,configurable:!0}),fe}throw pe.from(re,re&&re.code,N,R,re&&re.response)}}},Y4=new Map,$0=e=>{let i=e&&e.env||{};const{fetch:a,Request:l,Response:c}=i,f=[l,c,a];let p=f.length,g=p,b,w,k=Y4;for(;g--;)b=f[g],w=k.get(b),w===void 0&&k.set(b,w=g?new Map:G4(i)),k=w;return w};$0();const rh={http:e4,xhr:D4,fetch:{get:$0}};O.forEach(rh,(e,i)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:i})}});const rv=e=>`- ${e}`,K4=e=>O.isFunction(e)||e===null||e===!1;function Q4(e,i){e=O.isArray(e)?e:[e];const{length:a}=e;let l,c;const f={};for(let p=0;p<a;p++){l=e[p];let g;if(c=l,!K4(l)&&(c=rh[(g=String(l)).toLowerCase()],c===void 0))throw new pe(`Unknown adapter '${g}'`);if(c&&(O.isFunction(c)||(c=c.get(i))))break;f[g||"#"+p]=c}if(!c){const p=Object.entries(f).map(([b,w])=>`adapter ${b} `+(w===!1?"is not supported by the environment":"is not available in the build"));let g=a?p.length>1?`since :
`+p.map(rv).join(`
`):" "+rv(p[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+g,pe.ERR_NOT_SUPPORT)}return c}const q0={getAdapter:Q4,adapters:rh};function Df(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kl(null,e)}function jf(e){return Df(e),e.headers=Jt.from(e.headers),e.data=Nf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),q0.getAdapter(e.adapter||_l.adapter,e)(e).then(function(l){Df(e),e.response=l;try{l.data=Nf.call(e,e.transformResponse,l)}finally{delete e.response}return l.headers=Jt.from(l.headers),l},function(l){if(!B0(l)&&(Df(e),l&&l.response)){e.response=l.response;try{l.response.data=Nf.call(e,e.transformResponse,l.response)}finally{delete e.response}l.response.headers=Jt.from(l.response.headers)}return Promise.reject(l)})}const Uu={};["object","boolean","number","function","string","symbol"].forEach((e,i)=>{Uu[e]=function(l){return typeof l===e||"a"+(i<1?"n ":" ")+e}});const iv={};Uu.transitional=function(i,a,l){function c(f,p){return"[Axios v"+nh+"] Transitional option '"+f+"'"+p+(l?". "+l:"")}return(f,p,g)=>{if(i===!1)throw new pe(c(p," has been removed"+(a?" in "+a:"")),pe.ERR_DEPRECATED);return a&&!iv[p]&&(iv[p]=!0,console.warn(c(p," has been deprecated since v"+a+" and will be removed in the near future"))),i?i(f,p,g):!0}};Uu.spelling=function(i){return(a,l)=>(console.warn(`${l} is likely a misspelling of ${i}`),!0)};function X4(e,i,a){if(typeof e!="object"||e===null)throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const l=Object.keys(e);let c=l.length;for(;c-- >0;){const f=l[c],p=Object.prototype.hasOwnProperty.call(i,f)?i[f]:void 0;if(p){const g=e[f],b=g===void 0||p(g,f,e);if(b!==!0)throw new pe("option "+f+" must be "+b,pe.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new pe("Unknown option "+f,pe.ERR_BAD_OPTION)}}const uu={assertOptions:X4,validators:Uu},Qt=uu.validators;let La=class{constructor(i){this.defaults=i||{},this.interceptors={request:new $g,response:new $g}}async request(i,a){try{return await this._request(i,a)}catch(l){if(l instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=(()=>{if(!c.stack)return"";const p=c.stack.indexOf(`
`);return p===-1?"":c.stack.slice(p+1)})();try{if(!l.stack)l.stack=f;else if(f){const p=f.indexOf(`
`),g=p===-1?-1:f.indexOf(`
`,p+1),b=g===-1?"":f.slice(g+1);String(l.stack).endsWith(b)||(l.stack+=`
`+f)}}catch{}}throw l}}_request(i,a){typeof i=="string"?(a=a||{},a.url=i):a=i||{},a=Ma(this.defaults,a);const{transitional:l,paramsSerializer:c,headers:f}=a;l!==void 0&&uu.assertOptions(l,{silentJSONParsing:Qt.transitional(Qt.boolean),forcedJSONParsing:Qt.transitional(Qt.boolean),clarifyTimeoutError:Qt.transitional(Qt.boolean),legacyInterceptorReqResOrdering:Qt.transitional(Qt.boolean),advertiseZstdAcceptEncoding:Qt.transitional(Qt.boolean),validateStatusUndefinedResolves:Qt.transitional(Qt.boolean)},!1),c!=null&&(O.isFunction(c)?a.paramsSerializer={serialize:c}:uu.assertOptions(c,{encode:Qt.function,serialize:Qt.function},!0)),a.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?a.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:a.allowAbsoluteUrls=!0),uu.assertOptions(a,{baseUrl:Qt.spelling("baseURL"),withXsrfToken:Qt.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let p=f&&O.merge(f.common,f[a.method]);f&&O.forEach(["delete","get","head","post","put","patch","query","common"],B=>{delete f[B]}),a.headers=Jt.concat(p,f);const g=[];let b=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(a)===!1)return;b=b&&C.synchronous;const I=a.transitional||eh;I&&I.legacyInterceptorReqResOrdering?g.unshift(C.fulfilled,C.rejected):g.push(C.fulfilled,C.rejected)});const w=[];this.interceptors.response.forEach(function(C){w.push(C.fulfilled,C.rejected)});let k,_=0,E;if(!b){const B=[jf.bind(this),void 0];for(B.unshift(...g),B.push(...w),E=B.length,k=Promise.resolve(a);_<E;)k=k.then(B[_++],B[_++]);return k}E=g.length;let D=a;for(;_<E;){const B=g[_++],C=g[_++];try{D=B?B(D):D}catch(I){if(!C){k=Promise.reject(I);break}try{const N=C.call(this,I);O.isThenable(N)&&(k=Promise.resolve(N).then(()=>jf.call(this,D)))}catch(N){k=Promise.reject(N)}break}}if(!k)try{k=jf.call(this,D)}catch(B){k=Promise.reject(B)}for(_=0,E=w.length;_<E;)k=k.then(w[_++],w[_++]);return k}getUri(i){i=Ma(this.defaults,i);const a=U0(i.baseURL,i.url,i.allowAbsoluteUrls,i);return O0(a,i.params,i.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(i){La.prototype[i]=function(a,l){return this.request(Ma(l||{},{method:i,url:a,data:l&&O.hasOwnProp(l,"data")?l.data:void 0}))}});O.forEach(["post","put","patch","query"],function(i){function a(l){return function(f,p,g){return this.request(Ma(g||{},{method:i,headers:l?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}La.prototype[i]=a(),i!=="query"&&(La.prototype[i+"Form"]=a(!0))});let J4=class Z0{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(f){a=f});const l=this;this.promise.then(c=>{if(!l._listeners)return;let f=l._listeners.length;for(;f-- >0;)l._listeners[f](c);l._listeners=null}),this.promise.then=c=>{let f;const p=new Promise(g=>{l.subscribe(g),f=g}).then(c);return p.cancel=function(){l.unsubscribe(f)},p},i(function(f,p,g){l.reason||(l.reason=new kl(f,p,g),a(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const a=this._listeners.indexOf(i);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const i=new AbortController,a=l=>{i.abort(l)};return this.subscribe(a),i.signal.unsubscribe=()=>this.unsubscribe(a),i.signal}static source(){let i;return{token:new Z0(function(c){i=c}),cancel:i}}};function eP(e){return function(a){return e.apply(null,a)}}function tP(e){return O.isObject(e)&&e.isAxiosError===!0}const yp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(yp).forEach(([e,i])=>{yp[i]=e});function G0(e){const i=new La(e),a=k0(La.prototype.request,i);return O.extend(a,La.prototype,i,{allOwnKeys:!0}),O.extend(a,i,null,{allOwnKeys:!0}),a.create=function(c){return G0(Ma(e,c))},a}const bt=G0(_l);bt.Axios=La;bt.CanceledError=kl;bt.CancelToken=J4;bt.isCancel=B0;bt.VERSION=nh;bt.toFormData=Hu;bt.AxiosError=pe;bt.Cancel=bt.CanceledError;bt.all=function(i){return Promise.all(i)};bt.spread=eP;bt.isAxiosError=tP;bt.mergeConfig=Ma;bt.AxiosHeaders=Jt;bt.formToJSON=e=>F0(O.isHTMLForm(e)?new FormData(e):e);bt.getAdapter=q0.getAdapter;bt.HttpStatusCode=yp;bt.default=bt;const{Axios:LR,AxiosError:IR,CanceledError:NR,isCancel:DR,CancelToken:jR,VERSION:MR,all:OR,Cancel:zR,isAxiosError:FR,spread:BR,toFormData:HR,AxiosHeaders:UR,HttpStatusCode:WR,formToJSON:VR,getAdapter:$R,mergeConfig:qR,create:ZR}=bt,nP="https://api.buyrentsale.com",rP="https://api.buyrentsale.com/api/communication",iP=()=>nP,aP=()=>rP,oP=iP(),sP=aP(),lP=bt.create({baseURL:oP,timeout:15e3}),cP=e=>{const i=e.startsWith("/")?e:`/${e}`;return i==="/api"||i.startsWith("/api/")?i:`/api${i}`},hl=(e,i=null)=>lP.post(cP(e),i),ih=bt.create({baseURL:sP,timeout:15e3}),Y0=(e,i=null)=>{const a=e.startsWith("/")?e:`/${e}`;return ih.post(a,i)},uP=async({otp:e,mobile:i})=>(await ih.post("/sendSMSPostReq",{otp:e,mobile:i})).data,dP=async e=>(await ih.post("/send-post-requirement",e)).data,fP=e=>/^P\d{5,}$/i.test(e.replace(/\s+/g,"")),pP=e=>/\d+\/\d{4}\/\w+/i.test(e),hP=e=>{const i=e.match(/^(ventureName|builderName|reraNo|lpNumber|searchText)\s*[:=]\s*(.+)$/i);return i?{key:i[1],query:i[2].trim()}:null},mP=({query:e,pageNumber:i,pageSize:a,filters:l={}})=>{const c={pageNumber:i,pageSize:a};if(e){const g=e.trim(),b=hP(g);b!=null&&b.query?c[b.key]=b.query:fP(g)?c.reraNo=g:pP(g)?c.lpNumber=g:c.searchText=g}const f={location:"All Locations",budget:"Any Budget",propertyType:"All Types",approval:"Any Approval",builderName:"All Builders",possession:"Any Time"},p={location:"location",propertyType:"propertyType",approval:"approval",builderName:"builderName",possession:"projectStatus"};return Object.entries(l).forEach(([g,b])=>{const w=typeof b=="string"?b.trim():b;if(!w||w===f[g])return;if(g==="approval"&&/^rera$/i.test(w)){c.__approvalIncludes="RERA";return}const k=p[g]||g;(c[k]==null||c[k]==="")&&(c[k]=w)}),c},gP=(e,i)=>{const a=String((e==null?void 0:e.Approvals)??(e==null?void 0:e.approvals)??"").toUpperCase(),l=(e==null?void 0:e.HasRERA)===!0||(e==null?void 0:e.hasRera)===!0,c=String(i||"").toUpperCase();return c?c==="RERA"?l||a.includes("RERA"):a.includes(c):!0},vP=e=>typeof e!="string"?"Unable to fetch ventures right now.":e,av=e=>{var i,a;return(e==null?void 0:e.errorMessage)||(e==null?void 0:e.ErrorMessage)||(e==null?void 0:e.message)||(e==null?void 0:e.Message)||((i=e==null?void 0:e.ResponseData)==null?void 0:i.errorMessage)||((a=e==null?void 0:e.ResponseData)==null?void 0:a.ErrorMessage)||""},ov=e=>{const i=Number((e==null?void 0:e.statusCode)??(e==null?void 0:e.StatusCode));return(e==null?void 0:e.isError)===!0||(e==null?void 0:e.IsError)===!0||Number.isFinite(i)&&i>=400},yP=e=>/does not belong to table|invalid column|sql|exception|server error|internal error/i.test(e),sv=e=>{var b;const i=(e==null?void 0:e.body)||(e==null?void 0:e.Body)||(e==null?void 0:e.responseData)||(e==null?void 0:e.ResponseData)||e,a=av(e)||av(i);if(ov(e)||ov(i)||a&&yP(a))throw new Error(vP(a));const c=(i==null?void 0:i.items)||(i==null?void 0:i.Items)||(i==null?void 0:i.Data)||(i==null?void 0:i.data)||(e==null?void 0:e.items)||(e==null?void 0:e.Items)||(e==null?void 0:e.results)||(e==null?void 0:e.Results)||((b=e==null?void 0:e.ResponseData)==null?void 0:b.Data)||e,f=Array.isArray(c)?c:[],p=(i==null?void 0:i.totalCount)||(i==null?void 0:i.TotalCount)||(i==null?void 0:i.totalRecords)||(i==null?void 0:i.TotalRecords)||(e==null?void 0:e.totalCount)||(e==null?void 0:e.TotalCount)||(e==null?void 0:e.totalRecords)||(e==null?void 0:e.TotalRecords),g=Number.isFinite(Number(p))?Number(p):f.length;return{items:f,totalCount:g}},ll=async({query:e="",pageNumber:i=1,pageSize:a=10,filters:l})=>{const c=mP({query:e,pageNumber:i,pageSize:a,filters:l}),f=c.__approvalIncludes;if(delete c.__approvalIncludes,!f){const B=await hl("/venture-project/search-ventures/",{params:c});return sv(B.data)}const p=i*a,g=[],b=Math.max(a*5,50);let w=1,k=1/0;const _=40;for(;g.length<p&&w<=_;){const B=await hl("/venture-project/search-ventures/",{params:{...c,pageNumber:w,pageSize:b}}),C=sv(B.data);if(k=C.totalCount,g.push(...C.items.filter(I=>gP(I,f))),C.items.length<b||w*b>=k)break;w+=1}const E=(i-1)*a,D=w*b>=k||g.length<p;return{items:g.slice(E,E+a),totalCount:D?g.length:Math.max(g.length,p+1)}},cl=0,bP=3600*1e3,xP="https://buyrentsale.com/assets/images/logo-2.png",Mf=e=>Number((e==null?void 0:e.status)??(e==null?void 0:e.Status))===1,Of=e=>(e==null?void 0:e.body)??(e==null?void 0:e.Body)??[],K0=(e,i)=>{const a=(e==null?void 0:e.errorMessage)||(e==null?void 0:e.ErrorMessage)||(e==null?void 0:e.message)||(e==null?void 0:e.Message);return typeof a=="string"&&a.trim()?a:i},lv=(e,i)=>{var l;const a=(l=e==null?void 0:e.response)==null?void 0:l.data;return typeof a=="string"&&a.trim()?a:K0(a,i)},wP=async e=>(await hl("/user/checkbymobile",{mobile:e,searchHistory:localStorage.getItem("searchHistory")||""})).data,_P=async e=>(await hl("/user/addupdatecustomer",{UserBasicDetailsID:0,UserID:0,UserName:e,Password:e,UserTypeID:cl,Phone:e,Mobile:e,EmailID:""})).data,kP=async(e,i=cl)=>(await hl(`/user/getuserprofile?UserID=${encodeURIComponent(e)}&UserType=${encodeURIComponent(i)}`,null)).data,SP=e=>{if((e==null?void 0:e.Success)===!0||(e==null?void 0:e.success)===!0)return e;const i=(e==null?void 0:e.Message)||(e==null?void 0:e.message)||(e==null?void 0:e.Response)||(e==null?void 0:e.response)||"SMS delivery failed.";throw new Error(typeof i=="string"?i:"SMS delivery failed.")},AP=async(e,i)=>{const a=await Y0("/sendsms",{Text:e,Number:i});return SP(a.data)},cv=async(e,i)=>(await Y0("/whatsappnotificationwithmedia/",{number:`91${e}`,type:"media",message:i,media_url:xP})).data,ah=()=>{localStorage.removeItem("authData"),localStorage.removeItem("authProfileData"),localStorage.removeItem("authExpiry")},Q0=()=>{try{const e=localStorage.getItem("authData");if(!e||e==="undefined"||e.trim()==="")return!1;const i=JSON.parse(e);if(!i||typeof i!="object"||!i.UserID)return!1;const a=Number(localStorage.getItem("authExpiry"));return a&&Date.now()>a?(ah(),!1):!0}catch{return!1}},zf=e=>{const i=String(e??"").trim();return i&&!/^(n\/a|na|null|undefined|-)$/i.test(i)?i:""},PP=()=>{if(!Q0())return null;try{const e=JSON.parse(localStorage.getItem("authData")||"null"),i=JSON.parse(localStorage.getItem("authProfileData")||"null"),a={...e&&typeof e=="object"?e:{},...i&&typeof i=="object"?i:{}},l=zf(a.Mobile||a.Phone),c=[a.FullName,a.Name,a.UserName].map(zf).find(f=>f&&!/^\d+$/.test(f));return{...a,displayName:c||l||"My Profile",displayMobile:l,photoUrl:zf(a.UserProfile)}}catch{return null}},EP=(e,i)=>{ah(),localStorage.setItem("authData",JSON.stringify(e)),localStorage.setItem("authProfileData",JSON.stringify(i)),localStorage.setItem("authExpiry",String(Date.now()+bP)),window.dispatchEvent(new Event("localStorageChange"))},uv=[{label:"Home",href:"/",external:!1},{label:"Buy",href:"https://buyrentsale.com/w/buy",external:!0},{label:"Rent",href:"https://buyrentsale.com/w/rent",external:!0},{label:"Invest",href:"https://hyderabadlandinvestments.com/",external:!0},{label:"Projects",href:"https://buyrentsale.com/w/viewprojects",external:!0},{label:"Blog",href:"/blog"},{label:"About Us",href:"/about"},{label:"How it Works",href:"/how-it-works"},{label:"Contact Us",href:"/contact"}],CP=e=>e?/^https?:\/\//i.test(e)?e:`https://api.buyrentsale.com/${e.replace(/^\//,"")}`:"";function dv({link:e,onNavigate:i,className:a="vd-navlink"}){return e.external?v.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:a,onClick:i,children:e.label}):v.jsx(iy,{to:e.href,end:e.href==="/",className:({isActive:l})=>`${a}${l?" is-active":""}`,onClick:i,children:e.label})}function RP({onAdvisorClick:e}){const[i,a]=P.useState(!1),[l,c]=P.useState(null),[f,p]=P.useState(!1),[g,b]=P.useState(!1),w=P.useRef(null),k=CP(l==null?void 0:l.photoUrl);P.useEffect(()=>{const E=()=>{c(PP()),b(!1)};return E(),window.addEventListener("localStorageChange",E),window.addEventListener("storage",E),()=>{window.removeEventListener("localStorageChange",E),window.removeEventListener("storage",E)}},[]),P.useEffect(()=>{if(!f)return;const E=D=>{var B;(B=w.current)!=null&&B.contains(D.target)||p(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[f]);const _=()=>{ah(),p(!1),window.dispatchEvent(new Event("localStorageChange"))};return v.jsxs(v.Fragment,{children:[v.jsxs("nav",{className:"vd-navbar",children:[v.jsxs(Yn,{to:"/",className:"vd-logo-wrap",style:{textDecoration:"none"},onClick:()=>a(!1),children:[v.jsxs("div",{className:"vd-logo-text",children:["Ventures",v.jsx("span",{className:"blue",children:"Directory"}),v.jsx("span",{className:"vd-logo-ai-badge",children:"AI"})]}),v.jsx("div",{className:"vd-logo-sub",children:"AI Real Estate Discovery"})]}),v.jsx("div",{className:"vd-nav-links",children:uv.map(E=>v.jsx(dv,{link:E},E.label))}),v.jsxs("div",{className:"vd-nav-actions",children:[v.jsxs("a",{href:"#investmentModal",className:"vd-btn-advisor",onClick:E=>{E.preventDefault(),e()},children:[v.jsx(Ke,{icon:_0}),"AI Advisor"]}),l?v.jsxs("div",{className:"vd-profile",ref:w,children:[v.jsx("button",{type:"button",className:"vd-profile-btn","aria-label":`Profile, ${l.displayName}`,"aria-haspopup":"menu","aria-expanded":f,onClick:()=>p(E=>!E),children:k&&!g?v.jsx("img",{src:k,alt:"",onError:()=>b(!0)}):v.jsx(Ke,{icon:IS})}),f?v.jsxs("div",{className:"vd-profile-menu",role:"menu",children:[v.jsx("div",{className:"vd-profile-name",children:l.displayName}),l.displayMobile&&l.displayMobile!==l.displayName?v.jsx("div",{className:"vd-profile-mobile",children:l.displayMobile}):null,v.jsx("button",{type:"button",role:"menuitem",onClick:_,children:"Logout"})]}):null]}):null,v.jsx("button",{className:"vd-icon-btn d-lg-none",onClick:()=>a(!i),style:{borderRadius:6},"aria-label":i?"Close menu":"Open menu",children:v.jsx(Ke,{icon:i?jS:$S})})]})]}),i&&v.jsx("div",{className:"vd-mobile-menu",children:v.jsxs("div",{className:"d-flex flex-column gap-1",children:[uv.map(E=>v.jsx(dv,{link:E,className:"vd-navlink",onNavigate:()=>a(!1)},E.label)),v.jsx("hr",{style:{margin:"8px 0",borderColor:"#e5e7eb"}}),v.jsxs("a",{href:"#",className:"vd-navlink",style:{fontSize:14},children:[v.jsx(Ke,{icon:BS,style:{width:14}}),"India (IN)"]}),l?v.jsx("button",{type:"button",className:"vd-navlink",style:{fontSize:14,border:0,background:"transparent",textAlign:"left"},onClick:_,children:"Logout"}):v.jsx("a",{href:"#",className:"vd-navlink",style:{fontSize:14},children:"Login / Signup"})]})})]})}const TP=["SBI","HDFC","ICICI Bank","Axis Bank","Piramal"],LP=[{label:"Home",to:"/"},{label:"Blog",to:"/blog"},{label:"About Us",to:"/about"},{label:"How it Works",to:"/how-it-works"},{label:"Contact Us",to:"/contact"}];function IP(){return v.jsxs("footer",{className:"vd-footer",children:[v.jsx("nav",{className:"vd-footer-nav","aria-label":"Footer",children:LP.map(e=>v.jsx(Yn,{to:e.to,children:e.label},e.to))}),v.jsxs("div",{className:"vd-footer-strip",children:[v.jsxs("div",{className:"vd-footer-trust",children:[v.jsx("span",{children:"Trusted By Thousands of Users"}),v.jsx("span",{className:"vd-stars","aria-hidden":"true",children:[...Array(4)].map((e,i)=>v.jsx(Ke,{icon:Yp},i))}),v.jsx("span",{className:"vd-rating",children:"4.8/5"})]}),v.jsxs("div",{className:"vd-footer-banks",children:[v.jsxs("div",{className:"vd-loan-badge",children:[v.jsx(Ke,{icon:w0}),"Bank Loan Available"]}),TP.map(e=>v.jsx("div",{className:"vd-bank-pill",children:e},e))]})]}),v.jsxs("div",{className:"vd-footer-bottom",children:[v.jsx("p",{className:"vd-footer-disclaimer",children:"* Information displayed is for reference purposes only; buyers are advised to independently verify all details with the respective official authorities, developers, or authorized websites before making any investment decision."}),v.jsxs("p",{className:"vd-copyright",children:["© ",new Date().getFullYear()," VenturesDirectory. All rights reserved."]})]})]})}function Zi(e,i,{checkForDefaultPrevented:a=!0}={}){return function(c){if(e==null||e(c),a===!1||!c.defaultPrevented)return i==null?void 0:i(c)}}function fv(e,i){if(typeof e=="function")return e(i);e!=null&&(e.current=i)}function X0(...e){return i=>{let a=!1;const l=e.map(c=>{const f=fv(c,i);return!a&&typeof f=="function"&&(a=!0),f});if(a)return()=>{for(let c=0;c<l.length;c++){const f=l[c];typeof f=="function"?f():fv(e[c],null)}}}}function Fa(...e){return P.useCallback(X0(...e),e)}function NP(e,i){const a=P.createContext(i),l=f=>{const{children:p,...g}=f,b=P.useMemo(()=>g,Object.values(g));return v.jsx(a.Provider,{value:b,children:p})};l.displayName=e+"Provider";function c(f){const p=P.useContext(a);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${e}\``)}return[l,c]}function DP(e,i=[]){let a=[];function l(f,p){const g=P.createContext(p),b=a.length;a=[...a,p];const w=_=>{var N;const{scope:E,children:D,...B}=_,C=((N=E==null?void 0:E[e])==null?void 0:N[b])||g,I=P.useMemo(()=>B,Object.values(B));return v.jsx(C.Provider,{value:I,children:D})};w.displayName=f+"Provider";function k(_,E){var C;const D=((C=E==null?void 0:E[e])==null?void 0:C[b])||g,B=P.useContext(D);if(B)return B;if(p!==void 0)return p;throw new Error(`\`${_}\` must be used within \`${f}\``)}return[w,k]}const c=()=>{const f=a.map(p=>P.createContext(p));return function(g){const b=(g==null?void 0:g[e])||f;return P.useMemo(()=>({[`__scope${e}`]:{...g,[e]:b}}),[g,b])}};return c.scopeName=e,[l,jP(c,...i)]}function jP(...e){const i=e[0];if(e.length===1)return i;const a=()=>{const l=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(f){const p=l.reduce((g,{useScope:b,scopeName:w})=>{const _=b(f)[`__scope${w}`];return{...g,..._}},{});return P.useMemo(()=>({[`__scope${i.scopeName}`]:p}),[p])}};return a.scopeName=i.scopeName,a}var ku=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{},MP=W1.useId||(()=>{}),OP=0;function Ff(e){const[i,a]=P.useState(MP());return ku(()=>{a(l=>l??String(OP++))},[e]),e||(i?`radix-${i}`:"")}function Oa(e){const i=P.useRef(e);return P.useEffect(()=>{i.current=e}),P.useMemo(()=>(...a)=>{var l;return(l=i.current)==null?void 0:l.call(i,...a)},[])}function zP({prop:e,defaultProp:i,onChange:a=()=>{}}){const[l,c]=FP({defaultProp:i,onChange:a}),f=e!==void 0,p=f?e:l,g=Oa(a),b=P.useCallback(w=>{if(f){const _=typeof w=="function"?w(e):w;_!==e&&g(_)}else c(w)},[f,e,c,g]);return[p,b]}function FP({defaultProp:e,onChange:i}){const a=P.useState(e),[l]=a,c=P.useRef(l),f=Oa(i);return P.useEffect(()=>{c.current!==l&&(f(l),c.current=l)},[l,c,f]),a}var J0=Hv();const BP=Ep(J0);var Wu=P.forwardRef((e,i)=>{const{children:a,...l}=e,c=P.Children.toArray(a),f=c.find(UP);if(f){const p=f.props.children,g=c.map(b=>b===f?P.Children.count(p)>1?P.Children.only(null):P.isValidElement(p)?p.props.children:null:b);return v.jsx(bp,{...l,ref:i,children:P.isValidElement(p)?P.cloneElement(p,void 0,g):null})}return v.jsx(bp,{...l,ref:i,children:a})});Wu.displayName="Slot";var bp=P.forwardRef((e,i)=>{const{children:a,...l}=e;if(P.isValidElement(a)){const c=VP(a),f=WP(l,a.props);return a.type!==P.Fragment&&(f.ref=i?X0(i,c):c),P.cloneElement(a,f)}return P.Children.count(a)>1?P.Children.only(null):null});bp.displayName="SlotClone";var HP=({children:e})=>v.jsx(v.Fragment,{children:e});function UP(e){return P.isValidElement(e)&&e.type===HP}function WP(e,i){const a={...i};for(const l in i){const c=e[l],f=i[l];/^on[A-Z]/.test(l)?c&&f?a[l]=(...g)=>{f(...g),c(...g)}:c&&(a[l]=c):l==="style"?a[l]={...c,...f}:l==="className"&&(a[l]=[c,f].filter(Boolean).join(" "))}return{...e,...a}}function VP(e){var l,c;let i=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,a=i&&"isReactWarning"in i&&i.isReactWarning;return a?e.ref:(i=(c=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:c.get,a=i&&"isReactWarning"in i&&i.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var $P=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],li=$P.reduce((e,i)=>{const a=P.forwardRef((l,c)=>{const{asChild:f,...p}=l,g=f?Wu:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(g,{...p,ref:c})});return a.displayName=`Primitive.${i}`,{...e,[i]:a}},{});function qP(e,i){e&&J0.flushSync(()=>e.dispatchEvent(i))}function ZP(e,i=globalThis==null?void 0:globalThis.document){const a=Oa(e);P.useEffect(()=>{const l=c=>{c.key==="Escape"&&a(c)};return i.addEventListener("keydown",l,{capture:!0}),()=>i.removeEventListener("keydown",l,{capture:!0})},[a,i])}var GP="DismissableLayer",xp="dismissableLayer.update",YP="dismissableLayer.pointerDownOutside",KP="dismissableLayer.focusOutside",pv,eb=P.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),tb=P.forwardRef((e,i)=>{const{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:p,onDismiss:g,...b}=e,w=P.useContext(eb),[k,_]=P.useState(null),E=(k==null?void 0:k.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,D]=P.useState({}),B=Fa(i,se=>_(se)),C=Array.from(w.layers),[I]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),N=C.indexOf(I),W=k?C.indexOf(k):-1,F=w.layersWithOutsidePointerEventsDisabled.size>0,K=W>=N,ee=JP(se=>{const J=se.target,me=[...w.branches].some(ke=>ke.contains(J));!K||me||(c==null||c(se),p==null||p(se),se.defaultPrevented||g==null||g())},E),Q=e3(se=>{const J=se.target;[...w.branches].some(ke=>ke.contains(J))||(f==null||f(se),p==null||p(se),se.defaultPrevented||g==null||g())},E);return ZP(se=>{W===w.layers.size-1&&(l==null||l(se),!se.defaultPrevented&&g&&(se.preventDefault(),g()))},E),P.useEffect(()=>{if(k)return a&&(w.layersWithOutsidePointerEventsDisabled.size===0&&(pv=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(k)),w.layers.add(k),hv(),()=>{a&&w.layersWithOutsidePointerEventsDisabled.size===1&&(E.body.style.pointerEvents=pv)}},[k,E,a,w]),P.useEffect(()=>()=>{k&&(w.layers.delete(k),w.layersWithOutsidePointerEventsDisabled.delete(k),hv())},[k,w]),P.useEffect(()=>{const se=()=>D({});return document.addEventListener(xp,se),()=>document.removeEventListener(xp,se)},[]),v.jsx(li.div,{...b,ref:B,style:{pointerEvents:F?K?"auto":"none":void 0,...e.style},onFocusCapture:Zi(e.onFocusCapture,Q.onFocusCapture),onBlurCapture:Zi(e.onBlurCapture,Q.onBlurCapture),onPointerDownCapture:Zi(e.onPointerDownCapture,ee.onPointerDownCapture)})});tb.displayName=GP;var QP="DismissableLayerBranch",XP=P.forwardRef((e,i)=>{const a=P.useContext(eb),l=P.useRef(null),c=Fa(i,l);return P.useEffect(()=>{const f=l.current;if(f)return a.branches.add(f),()=>{a.branches.delete(f)}},[a.branches]),v.jsx(li.div,{...e,ref:c})});XP.displayName=QP;function JP(e,i=globalThis==null?void 0:globalThis.document){const a=Oa(e),l=P.useRef(!1),c=P.useRef(()=>{});return P.useEffect(()=>{const f=g=>{if(g.target&&!l.current){let b=function(){nb(YP,a,w,{discrete:!0})};const w={originalEvent:g};g.pointerType==="touch"?(i.removeEventListener("click",c.current),c.current=b,i.addEventListener("click",c.current,{once:!0})):b()}else i.removeEventListener("click",c.current);l.current=!1},p=window.setTimeout(()=>{i.addEventListener("pointerdown",f)},0);return()=>{window.clearTimeout(p),i.removeEventListener("pointerdown",f),i.removeEventListener("click",c.current)}},[i,a]),{onPointerDownCapture:()=>l.current=!0}}function e3(e,i=globalThis==null?void 0:globalThis.document){const a=Oa(e),l=P.useRef(!1);return P.useEffect(()=>{const c=f=>{f.target&&!l.current&&nb(KP,a,{originalEvent:f},{discrete:!1})};return i.addEventListener("focusin",c),()=>i.removeEventListener("focusin",c)},[i,a]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function hv(){const e=new CustomEvent(xp);document.dispatchEvent(e)}function nb(e,i,a,{discrete:l}){const c=a.originalEvent.target,f=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});i&&c.addEventListener(e,i,{once:!0}),l?qP(c,f):c.dispatchEvent(f)}var Bf="focusScope.autoFocusOnMount",Hf="focusScope.autoFocusOnUnmount",mv={bubbles:!1,cancelable:!0},t3="FocusScope",rb=P.forwardRef((e,i)=>{const{loop:a=!1,trapped:l=!1,onMountAutoFocus:c,onUnmountAutoFocus:f,...p}=e,[g,b]=P.useState(null),w=Oa(c),k=Oa(f),_=P.useRef(null),E=Fa(i,C=>b(C)),D=P.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;P.useEffect(()=>{if(l){let C=function(F){if(D.paused||!g)return;const K=F.target;g.contains(K)?_.current=K:qi(_.current,{select:!0})},I=function(F){if(D.paused||!g)return;const K=F.relatedTarget;K!==null&&(g.contains(K)||qi(_.current,{select:!0}))},N=function(F){if(document.activeElement===document.body)for(const ee of F)ee.removedNodes.length>0&&qi(g)};document.addEventListener("focusin",C),document.addEventListener("focusout",I);const W=new MutationObserver(N);return g&&W.observe(g,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",I),W.disconnect()}}},[l,g,D.paused]),P.useEffect(()=>{if(g){vv.add(D);const C=document.activeElement;if(!g.contains(C)){const N=new CustomEvent(Bf,mv);g.addEventListener(Bf,w),g.dispatchEvent(N),N.defaultPrevented||(n3(s3(ib(g)),{select:!0}),document.activeElement===C&&qi(g))}return()=>{g.removeEventListener(Bf,w),setTimeout(()=>{const N=new CustomEvent(Hf,mv);g.addEventListener(Hf,k),g.dispatchEvent(N),N.defaultPrevented||qi(C??document.body,{select:!0}),g.removeEventListener(Hf,k),vv.remove(D)},0)}}},[g,w,k,D]);const B=P.useCallback(C=>{if(!a&&!l||D.paused)return;const I=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,N=document.activeElement;if(I&&N){const W=C.currentTarget,[F,K]=r3(W);F&&K?!C.shiftKey&&N===K?(C.preventDefault(),a&&qi(F,{select:!0})):C.shiftKey&&N===F&&(C.preventDefault(),a&&qi(K,{select:!0})):N===W&&C.preventDefault()}},[a,l,D.paused]);return v.jsx(li.div,{tabIndex:-1,...p,ref:E,onKeyDown:B})});rb.displayName=t3;function n3(e,{select:i=!1}={}){const a=document.activeElement;for(const l of e)if(qi(l,{select:i}),document.activeElement!==a)return}function r3(e){const i=ib(e),a=gv(i,e),l=gv(i.reverse(),e);return[a,l]}function ib(e){const i=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const c=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||c?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)i.push(a.currentNode);return i}function gv(e,i){for(const a of e)if(!i3(a,{upTo:i}))return a}function i3(e,{upTo:i}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(i!==void 0&&e===i)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function a3(e){return e instanceof HTMLInputElement&&"select"in e}function qi(e,{select:i=!1}={}){if(e&&e.focus){const a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&a3(e)&&i&&e.select()}}var vv=o3();function o3(){let e=[];return{add(i){const a=e[0];i!==a&&(a==null||a.pause()),e=yv(e,i),e.unshift(i)},remove(i){var a;e=yv(e,i),(a=e[0])==null||a.resume()}}}function yv(e,i){const a=[...e],l=a.indexOf(i);return l!==-1&&a.splice(l,1),a}function s3(e){return e.filter(i=>i.tagName!=="A")}var l3="Portal",ab=P.forwardRef((e,i)=>{var g;const{container:a,...l}=e,[c,f]=P.useState(!1);ku(()=>f(!0),[]);const p=a||c&&((g=globalThis==null?void 0:globalThis.document)==null?void 0:g.body);return p?BP.createPortal(v.jsx(li.div,{...l,ref:i}),p):null});ab.displayName=l3;function c3(e,i){return P.useReducer((a,l)=>i[a][l]??a,e)}var Vu=e=>{const{present:i,children:a}=e,l=u3(i),c=typeof a=="function"?a({present:l.isPresent}):P.Children.only(a),f=Fa(l.ref,d3(c));return typeof a=="function"||l.isPresent?P.cloneElement(c,{ref:f}):null};Vu.displayName="Presence";function u3(e){const[i,a]=P.useState(),l=P.useRef({}),c=P.useRef(e),f=P.useRef("none"),p=e?"mounted":"unmounted",[g,b]=c3(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return P.useEffect(()=>{const w=Yc(l.current);f.current=g==="mounted"?w:"none"},[g]),ku(()=>{const w=l.current,k=c.current;if(k!==e){const E=f.current,D=Yc(w);e?b("MOUNT"):D==="none"||(w==null?void 0:w.display)==="none"?b("UNMOUNT"):b(k&&E!==D?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,b]),ku(()=>{if(i){let w;const k=i.ownerDocument.defaultView??window,_=D=>{const C=Yc(l.current).includes(D.animationName);if(D.target===i&&C&&(b("ANIMATION_END"),!c.current)){const I=i.style.animationFillMode;i.style.animationFillMode="forwards",w=k.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=I)})}},E=D=>{D.target===i&&(f.current=Yc(l.current))};return i.addEventListener("animationstart",E),i.addEventListener("animationcancel",_),i.addEventListener("animationend",_),()=>{k.clearTimeout(w),i.removeEventListener("animationstart",E),i.removeEventListener("animationcancel",_),i.removeEventListener("animationend",_)}}else b("ANIMATION_END")},[i,b]),{isPresent:["mounted","unmountSuspended"].includes(g),ref:P.useCallback(w=>{w&&(l.current=getComputedStyle(w)),a(w)},[])}}function Yc(e){return(e==null?void 0:e.animationName)||"none"}function d3(e){var l,c;let i=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,a=i&&"isReactWarning"in i&&i.isReactWarning;return a?e.ref:(i=(c=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:c.get,a=i&&"isReactWarning"in i&&i.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var Uf=0;function f3(){P.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??bv()),document.body.insertAdjacentElement("beforeend",e[1]??bv()),Uf++,()=>{Uf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),Uf--}},[])}function bv(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Pr=function(){return Pr=Object.assign||function(i){for(var a,l=1,c=arguments.length;l<c;l++){a=arguments[l];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(i[f]=a[f])}return i},Pr.apply(this,arguments)};function ob(e,i){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&i.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(e);c<l.length;c++)i.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(e,l[c])&&(a[l[c]]=e[l[c]]);return a}function p3(e,i,a){if(a||arguments.length===2)for(var l=0,c=i.length,f;l<c;l++)(f||!(l in i))&&(f||(f=Array.prototype.slice.call(i,0,l)),f[l]=i[l]);return e.concat(f||Array.prototype.slice.call(i))}var du="right-scroll-bar-position",fu="width-before-scroll-bar",h3="with-scroll-bars-hidden",m3="--removed-body-scroll-bar-size";function Wf(e,i){return typeof e=="function"?e(i):e&&(e.current=i),e}function g3(e,i){var a=P.useState(function(){return{value:e,callback:i,facade:{get current(){return a.value},set current(l){var c=a.value;c!==l&&(a.value=l,a.callback(l,c))}}}})[0];return a.callback=i,a.facade}var v3=typeof window<"u"?P.useLayoutEffect:P.useEffect,xv=new WeakMap;function y3(e,i){var a=g3(null,function(l){return e.forEach(function(c){return Wf(c,l)})});return v3(function(){var l=xv.get(a);if(l){var c=new Set(l),f=new Set(e),p=a.current;c.forEach(function(g){f.has(g)||Wf(g,null)}),f.forEach(function(g){c.has(g)||Wf(g,p)})}xv.set(a,e)},[e]),a}function b3(e){return e}function x3(e,i){i===void 0&&(i=b3);var a=[],l=!1,c={read:function(){if(l)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(f){var p=i(f,l);return a.push(p),function(){a=a.filter(function(g){return g!==p})}},assignSyncMedium:function(f){for(l=!0;a.length;){var p=a;a=[],p.forEach(f)}a={push:function(g){return f(g)},filter:function(){return a}}},assignMedium:function(f){l=!0;var p=[];if(a.length){var g=a;a=[],g.forEach(f),p=a}var b=function(){var k=p;p=[],k.forEach(f)},w=function(){return Promise.resolve().then(b)};w(),a={push:function(k){p.push(k),w()},filter:function(k){return p=p.filter(k),a}}}};return c}function w3(e){e===void 0&&(e={});var i=x3(null);return i.options=Pr({async:!0,ssr:!1},e),i}var sb=function(e){var i=e.sideCar,a=ob(e,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var l=i.read();if(!l)throw new Error("Sidecar medium not found");return P.createElement(l,Pr({},a))};sb.isSideCarExport=!0;function _3(e,i){return e.useMedium(i),sb}var lb=w3(),Vf=function(){},$u=P.forwardRef(function(e,i){var a=P.useRef(null),l=P.useState({onScrollCapture:Vf,onWheelCapture:Vf,onTouchMoveCapture:Vf}),c=l[0],f=l[1],p=e.forwardProps,g=e.children,b=e.className,w=e.removeScrollBar,k=e.enabled,_=e.shards,E=e.sideCar,D=e.noRelative,B=e.noIsolation,C=e.inert,I=e.allowPinchZoom,N=e.as,W=N===void 0?"div":N,F=e.gapMode,K=ob(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),ee=E,Q=y3([a,i]),se=Pr(Pr({},K),c);return P.createElement(P.Fragment,null,k&&P.createElement(ee,{sideCar:lb,removeScrollBar:w,shards:_,noRelative:D,noIsolation:B,inert:C,setCallbacks:f,allowPinchZoom:!!I,lockRef:a,gapMode:F}),p?P.cloneElement(P.Children.only(g),Pr(Pr({},se),{ref:Q})):P.createElement(W,Pr({},se,{className:b,ref:Q}),g))});$u.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};$u.classNames={fullWidth:fu,zeroRight:du};var k3=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function S3(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var i=k3();return i&&e.setAttribute("nonce",i),e}function A3(e,i){e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))}function P3(e){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(e)}var E3=function(){var e=0,i=null;return{add:function(a){e==0&&(i=S3())&&(A3(i,a),P3(i)),e++},remove:function(){e--,!e&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}},C3=function(){var e=E3();return function(i,a){P.useEffect(function(){return e.add(i),function(){e.remove()}},[i&&a])}},cb=function(){var e=C3(),i=function(a){var l=a.styles,c=a.dynamic;return e(l,c),null};return i},R3={left:0,top:0,right:0,gap:0},$f=function(e){return parseInt(e||"",10)||0},T3=function(e){var i=window.getComputedStyle(document.body),a=i[e==="padding"?"paddingLeft":"marginLeft"],l=i[e==="padding"?"paddingTop":"marginTop"],c=i[e==="padding"?"paddingRight":"marginRight"];return[$f(a),$f(l),$f(c)]},L3=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return R3;var i=T3(e),a=document.documentElement.clientWidth,l=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,l-a+i[2]-i[0])}},I3=cb(),Ho="data-scroll-locked",N3=function(e,i,a,l){var c=e.left,f=e.top,p=e.right,g=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(h3,` {
   overflow: hidden `).concat(l,`;
   padding-right: `).concat(g,"px ").concat(l,`;
  }
  body[`).concat(Ho,`] {
    overflow: hidden `).concat(l,`;
    overscroll-behavior: contain;
    `).concat([i&&"position: relative ".concat(l,";"),a==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(f,`px;
    padding-right: `).concat(p,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(g,"px ").concat(l,`;
    `),a==="padding"&&"padding-right: ".concat(g,"px ").concat(l,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(du,` {
    right: `).concat(g,"px ").concat(l,`;
  }
  
  .`).concat(fu,` {
    margin-right: `).concat(g,"px ").concat(l,`;
  }
  
  .`).concat(du," .").concat(du,` {
    right: 0 `).concat(l,`;
  }
  
  .`).concat(fu," .").concat(fu,` {
    margin-right: 0 `).concat(l,`;
  }
  
  body[`).concat(Ho,`] {
    `).concat(m3,": ").concat(g,`px;
  }
`)},wv=function(){var e=parseInt(document.body.getAttribute(Ho)||"0",10);return isFinite(e)?e:0},D3=function(){P.useEffect(function(){return document.body.setAttribute(Ho,(wv()+1).toString()),function(){var e=wv()-1;e<=0?document.body.removeAttribute(Ho):document.body.setAttribute(Ho,e.toString())}},[])},j3=function(e){var i=e.noRelative,a=e.noImportant,l=e.gapMode,c=l===void 0?"margin":l;D3();var f=P.useMemo(function(){return L3(c)},[c]);return P.createElement(I3,{styles:N3(f,!i,c,a?"":"!important")})},wp=!1;if(typeof window<"u")try{var Kc=Object.defineProperty({},"passive",{get:function(){return wp=!0,!0}});window.addEventListener("test",Kc,Kc),window.removeEventListener("test",Kc,Kc)}catch{wp=!1}var Do=wp?{passive:!1}:!1,M3=function(e){return e.tagName==="TEXTAREA"},ub=function(e,i){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[i]!=="hidden"&&!(a.overflowY===a.overflowX&&!M3(e)&&a[i]==="visible")},O3=function(e){return ub(e,"overflowY")},z3=function(e){return ub(e,"overflowX")},_v=function(e,i){var a=i.ownerDocument,l=i;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var c=db(e,l);if(c){var f=fb(e,l),p=f[1],g=f[2];if(p>g)return!0}l=l.parentNode}while(l&&l!==a.body);return!1},F3=function(e){var i=e.scrollTop,a=e.scrollHeight,l=e.clientHeight;return[i,a,l]},B3=function(e){var i=e.scrollLeft,a=e.scrollWidth,l=e.clientWidth;return[i,a,l]},db=function(e,i){return e==="v"?O3(i):z3(i)},fb=function(e,i){return e==="v"?F3(i):B3(i)},H3=function(e,i){return e==="h"&&i==="rtl"?-1:1},U3=function(e,i,a,l,c){var f=H3(e,window.getComputedStyle(i).direction),p=f*l,g=a.target,b=i.contains(g),w=!1,k=p>0,_=0,E=0;do{if(!g)break;var D=fb(e,g),B=D[0],C=D[1],I=D[2],N=C-I-f*B;(B||N)&&db(e,g)&&(_+=N,E+=B);var W=g.parentNode;g=W&&W.nodeType===Node.DOCUMENT_FRAGMENT_NODE?W.host:W}while(!b&&g!==document.body||b&&(i.contains(g)||i===g));return(k&&Math.abs(_)<1||!k&&Math.abs(E)<1)&&(w=!0),w},Qc=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},kv=function(e){return[e.deltaX,e.deltaY]},Sv=function(e){return e&&"current"in e?e.current:e},W3=function(e,i){return e[0]===i[0]&&e[1]===i[1]},V3=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},$3=0,jo=[];function q3(e){var i=P.useRef([]),a=P.useRef([0,0]),l=P.useRef(),c=P.useState($3++)[0],f=P.useState(cb)[0],p=P.useRef(e);P.useEffect(function(){p.current=e},[e]),P.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var C=p3([e.lockRef.current],(e.shards||[]).map(Sv),!0).filter(Boolean);return C.forEach(function(I){return I.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),C.forEach(function(I){return I.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var g=P.useCallback(function(C,I){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!p.current.allowPinchZoom;var N=Qc(C),W=a.current,F="deltaX"in C?C.deltaX:W[0]-N[0],K="deltaY"in C?C.deltaY:W[1]-N[1],ee,Q=C.target,se=Math.abs(F)>Math.abs(K)?"h":"v";if("touches"in C&&se==="h"&&Q.type==="range")return!1;var J=window.getSelection(),me=J&&J.anchorNode,ke=me?me===Q||me.contains(Q):!1;if(ke)return!1;var Pe=_v(se,Q);if(!Pe)return!0;if(Pe?ee=se:(ee=se==="v"?"h":"v",Pe=_v(se,Q)),!Pe)return!1;if(!l.current&&"changedTouches"in C&&(F||K)&&(l.current=ee),!ee)return!0;var De=l.current||ee;return U3(De,I,C,De==="h"?F:K)},[]),b=P.useCallback(function(C){var I=C;if(!(!jo.length||jo[jo.length-1]!==f)){var N="deltaY"in I?kv(I):Qc(I),W=i.current.filter(function(ee){return ee.name===I.type&&(ee.target===I.target||I.target===ee.shadowParent)&&W3(ee.delta,N)})[0];if(W&&W.should){I.cancelable&&I.preventDefault();return}if(!W){var F=(p.current.shards||[]).map(Sv).filter(Boolean).filter(function(ee){return ee.contains(I.target)}),K=F.length>0?g(I,F[0]):!p.current.noIsolation;K&&I.cancelable&&I.preventDefault()}}},[]),w=P.useCallback(function(C,I,N,W){var F={name:C,delta:I,target:N,should:W,shadowParent:Z3(N)};i.current.push(F),setTimeout(function(){i.current=i.current.filter(function(K){return K!==F})},1)},[]),k=P.useCallback(function(C){a.current=Qc(C),l.current=void 0},[]),_=P.useCallback(function(C){w(C.type,kv(C),C.target,g(C,e.lockRef.current))},[]),E=P.useCallback(function(C){w(C.type,Qc(C),C.target,g(C,e.lockRef.current))},[]);P.useEffect(function(){return jo.push(f),e.setCallbacks({onScrollCapture:_,onWheelCapture:_,onTouchMoveCapture:E}),document.addEventListener("wheel",b,Do),document.addEventListener("touchmove",b,Do),document.addEventListener("touchstart",k,Do),function(){jo=jo.filter(function(C){return C!==f}),document.removeEventListener("wheel",b,Do),document.removeEventListener("touchmove",b,Do),document.removeEventListener("touchstart",k,Do)}},[]);var D=e.removeScrollBar,B=e.inert;return P.createElement(P.Fragment,null,B?P.createElement(f,{styles:V3(c)}):null,D?P.createElement(j3,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Z3(e){for(var i=null;e!==null;)e instanceof ShadowRoot&&(i=e.host,e=e.host),e=e.parentNode;return i}const G3=_3(lb,q3);var pb=P.forwardRef(function(e,i){return P.createElement($u,Pr({},e,{ref:i,sideCar:G3}))});pb.classNames=$u.classNames;var Y3=function(e){if(typeof document>"u")return null;var i=Array.isArray(e)?e[0]:e;return i.ownerDocument.body},Mo=new WeakMap,Xc=new WeakMap,Jc={},qf=0,hb=function(e){return e&&(e.host||hb(e.parentNode))},K3=function(e,i){return i.map(function(a){if(e.contains(a))return a;var l=hb(a);return l&&e.contains(l)?l:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Q3=function(e,i,a,l){var c=K3(i,Array.isArray(e)?e:[e]);Jc[a]||(Jc[a]=new WeakMap);var f=Jc[a],p=[],g=new Set,b=new Set(c),w=function(_){!_||g.has(_)||(g.add(_),w(_.parentNode))};c.forEach(w);var k=function(_){!_||b.has(_)||Array.prototype.forEach.call(_.children,function(E){if(g.has(E))k(E);else try{var D=E.getAttribute(l),B=D!==null&&D!=="false",C=(Mo.get(E)||0)+1,I=(f.get(E)||0)+1;Mo.set(E,C),f.set(E,I),p.push(E),C===1&&B&&Xc.set(E,!0),I===1&&E.setAttribute(a,"true"),B||E.setAttribute(l,"true")}catch(N){console.error("aria-hidden: cannot operate on ",E,N)}})};return k(i),g.clear(),qf++,function(){p.forEach(function(_){var E=Mo.get(_)-1,D=f.get(_)-1;Mo.set(_,E),f.set(_,D),E||(Xc.has(_)||_.removeAttribute(l),Xc.delete(_)),D||_.removeAttribute(a)}),qf--,qf||(Mo=new WeakMap,Mo=new WeakMap,Xc=new WeakMap,Jc={})}},X3=function(e,i,a){a===void 0&&(a="data-aria-hidden");var l=Array.from(Array.isArray(e)?e:[e]),c=Y3(e);return c?(l.push.apply(l,Array.from(c.querySelectorAll("[aria-live], script"))),Q3(l,c,a,"aria-hidden")):function(){return null}},oh="Dialog",[mb]=DP(oh),[J3,pr]=mb(oh),gb=e=>{const{__scopeDialog:i,children:a,open:l,defaultOpen:c,onOpenChange:f,modal:p=!0}=e,g=P.useRef(null),b=P.useRef(null),[w=!1,k]=zP({prop:l,defaultProp:c,onChange:f});return v.jsx(J3,{scope:i,triggerRef:g,contentRef:b,contentId:Ff(),titleId:Ff(),descriptionId:Ff(),open:w,onOpenChange:k,onOpenToggle:P.useCallback(()=>k(_=>!_),[k]),modal:p,children:a})};gb.displayName=oh;var vb="DialogTrigger",eE=P.forwardRef((e,i)=>{const{__scopeDialog:a,...l}=e,c=pr(vb,a),f=Fa(i,c.triggerRef);return v.jsx(li.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":ch(c.open),...l,ref:f,onClick:Zi(e.onClick,c.onOpenToggle)})});eE.displayName=vb;var sh="DialogPortal",[tE,yb]=mb(sh,{forceMount:void 0}),bb=e=>{const{__scopeDialog:i,forceMount:a,children:l,container:c}=e,f=pr(sh,i);return v.jsx(tE,{scope:i,forceMount:a,children:P.Children.map(l,p=>v.jsx(Vu,{present:a||f.open,children:v.jsx(ab,{asChild:!0,container:c,children:p})}))})};bb.displayName=sh;var Su="DialogOverlay",xb=P.forwardRef((e,i)=>{const a=yb(Su,e.__scopeDialog),{forceMount:l=a.forceMount,...c}=e,f=pr(Su,e.__scopeDialog);return f.modal?v.jsx(Vu,{present:l||f.open,children:v.jsx(nE,{...c,ref:i})}):null});xb.displayName=Su;var nE=P.forwardRef((e,i)=>{const{__scopeDialog:a,...l}=e,c=pr(Su,a);return v.jsx(pb,{as:Wu,allowPinchZoom:!0,shards:[c.contentRef],children:v.jsx(li.div,{"data-state":ch(c.open),...l,ref:i,style:{pointerEvents:"auto",...l.style}})})}),za="DialogContent",wb=P.forwardRef((e,i)=>{const a=yb(za,e.__scopeDialog),{forceMount:l=a.forceMount,...c}=e,f=pr(za,e.__scopeDialog);return v.jsx(Vu,{present:l||f.open,children:f.modal?v.jsx(rE,{...c,ref:i}):v.jsx(iE,{...c,ref:i})})});wb.displayName=za;var rE=P.forwardRef((e,i)=>{const a=pr(za,e.__scopeDialog),l=P.useRef(null),c=Fa(i,a.contentRef,l);return P.useEffect(()=>{const f=l.current;if(f)return X3(f)},[]),v.jsx(_b,{...e,ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Zi(e.onCloseAutoFocus,f=>{var p;f.preventDefault(),(p=a.triggerRef.current)==null||p.focus()}),onPointerDownOutside:Zi(e.onPointerDownOutside,f=>{const p=f.detail.originalEvent,g=p.button===0&&p.ctrlKey===!0;(p.button===2||g)&&f.preventDefault()}),onFocusOutside:Zi(e.onFocusOutside,f=>f.preventDefault())})}),iE=P.forwardRef((e,i)=>{const a=pr(za,e.__scopeDialog),l=P.useRef(!1),c=P.useRef(!1);return v.jsx(_b,{...e,ref:i,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:f=>{var p,g;(p=e.onCloseAutoFocus)==null||p.call(e,f),f.defaultPrevented||(l.current||(g=a.triggerRef.current)==null||g.focus(),f.preventDefault()),l.current=!1,c.current=!1},onInteractOutside:f=>{var b,w;(b=e.onInteractOutside)==null||b.call(e,f),f.defaultPrevented||(l.current=!0,f.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const p=f.target;((w=a.triggerRef.current)==null?void 0:w.contains(p))&&f.preventDefault(),f.detail.originalEvent.type==="focusin"&&c.current&&f.preventDefault()}})}),_b=P.forwardRef((e,i)=>{const{__scopeDialog:a,trapFocus:l,onOpenAutoFocus:c,onCloseAutoFocus:f,...p}=e,g=pr(za,a),b=P.useRef(null),w=Fa(i,b);return f3(),v.jsxs(v.Fragment,{children:[v.jsx(rb,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:c,onUnmountAutoFocus:f,children:v.jsx(tb,{role:"dialog",id:g.contentId,"aria-describedby":g.descriptionId,"aria-labelledby":g.titleId,"data-state":ch(g.open),...p,ref:w,onDismiss:()=>g.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(aE,{titleId:g.titleId}),v.jsx(sE,{contentRef:b,descriptionId:g.descriptionId})]})]})}),lh="DialogTitle",kb=P.forwardRef((e,i)=>{const{__scopeDialog:a,...l}=e,c=pr(lh,a);return v.jsx(li.h2,{id:c.titleId,...l,ref:i})});kb.displayName=lh;var Sb="DialogDescription",Ab=P.forwardRef((e,i)=>{const{__scopeDialog:a,...l}=e,c=pr(Sb,a);return v.jsx(li.p,{id:c.descriptionId,...l,ref:i})});Ab.displayName=Sb;var Pb="DialogClose",Eb=P.forwardRef((e,i)=>{const{__scopeDialog:a,...l}=e,c=pr(Pb,a);return v.jsx(li.button,{type:"button",...l,ref:i,onClick:Zi(e.onClick,()=>c.onOpenChange(!1))})});Eb.displayName=Pb;function ch(e){return e?"open":"closed"}var Cb="DialogTitleWarning",[GR,Rb]=NP(Cb,{contentName:za,titleName:lh,docsSlug:"dialog"}),aE=({titleId:e})=>{const i=Rb(Cb),a=`\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;return P.useEffect(()=>{e&&(document.getElementById(e)||console.error(a))},[a,e]),null},oE="DialogDescriptionWarning",sE=({contentRef:e,descriptionId:i})=>{const l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rb(oE).contentName}}.`;return P.useEffect(()=>{var f;const c=(f=e.current)==null?void 0:f.getAttribute("aria-describedby");i&&c&&(document.getElementById(i)||console.warn(l))},[l,e,i]),null},lE=gb,cE=bb,uE=xb,Au=wb,Uo=kb,ul=Ab,dE=Eb;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pE=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,a,l)=>l?l.toUpperCase():a.toLowerCase()),Av=e=>{const i=pE(e);return i.charAt(0).toUpperCase()+i.slice(1)},Tb=(...e)=>e.filter((i,a,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===a).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=P.forwardRef(({color:e="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:f,iconNode:p,...g},b)=>P.createElement("svg",{ref:b,...hE,width:i,height:i,stroke:e,strokeWidth:l?Number(a)*24/Number(i):a,className:Tb("lucide",c),...g},[...p.map(([w,k])=>P.createElement(w,k)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=(e,i)=>{const a=P.forwardRef(({className:l,...c},f)=>P.createElement(mE,{ref:f,iconNode:i,className:Tb(`lucide-${fE(Av(e))}`,`lucide-${e}`,l),...c}));return a.displayName=Av(e),a};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yE=gE("x",vE);function Lb(e){var i,a,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var c=e.length;for(i=0;i<c;i++)e[i]&&(a=Lb(e[i]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function Ib(){for(var e,i,a=0,l="",c=arguments.length;a<c;a++)(e=arguments[a])&&(i=Lb(e))&&(l&&(l+=" "),l+=i);return l}const uh="-",bE=e=>{const i=wE(e),{conflictingClassGroups:a,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:p=>{const g=p.split(uh);return g[0]===""&&g.length!==1&&g.shift(),Nb(g,i)||xE(p)},getConflictingClassGroupIds:(p,g)=>{const b=a[p]||[];return g&&l[p]?[...b,...l[p]]:b}}},Nb=(e,i)=>{var p;if(e.length===0)return i.classGroupId;const a=e[0],l=i.nextPart.get(a),c=l?Nb(e.slice(1),l):void 0;if(c)return c;if(i.validators.length===0)return;const f=e.join(uh);return(p=i.validators.find(({validator:g})=>g(f)))==null?void 0:p.classGroupId},Pv=/^\[(.+)\]$/,xE=e=>{if(Pv.test(e)){const i=Pv.exec(e)[1],a=i==null?void 0:i.substring(0,i.indexOf(":"));if(a)return"arbitrary.."+a}},wE=e=>{const{theme:i,classGroups:a}=e,l={nextPart:new Map,validators:[]};for(const c in a)_p(a[c],l,c,i);return l},_p=(e,i,a,l)=>{e.forEach(c=>{if(typeof c=="string"){const f=c===""?i:Ev(i,c);f.classGroupId=a;return}if(typeof c=="function"){if(_E(c)){_p(c(l),i,a,l);return}i.validators.push({validator:c,classGroupId:a});return}Object.entries(c).forEach(([f,p])=>{_p(p,Ev(i,f),a,l)})})},Ev=(e,i)=>{let a=e;return i.split(uh).forEach(l=>{a.nextPart.has(l)||a.nextPart.set(l,{nextPart:new Map,validators:[]}),a=a.nextPart.get(l)}),a},_E=e=>e.isThemeGetter,kE=e=>{if(e<1)return{get:()=>{},set:()=>{}};let i=0,a=new Map,l=new Map;const c=(f,p)=>{a.set(f,p),i++,i>e&&(i=0,l=a,a=new Map)};return{get(f){let p=a.get(f);if(p!==void 0)return p;if((p=l.get(f))!==void 0)return c(f,p),p},set(f,p){a.has(f)?a.set(f,p):c(f,p)}}},kp="!",Sp=":",SE=Sp.length,AE=e=>{const{prefix:i,experimentalParseClassName:a}=e;let l=c=>{const f=[];let p=0,g=0,b=0,w;for(let B=0;B<c.length;B++){let C=c[B];if(p===0&&g===0){if(C===Sp){f.push(c.slice(b,B)),b=B+SE;continue}if(C==="/"){w=B;continue}}C==="["?p++:C==="]"?p--:C==="("?g++:C===")"&&g--}const k=f.length===0?c:c.substring(b),_=PE(k),E=_!==k,D=w&&w>b?w-b:void 0;return{modifiers:f,hasImportantModifier:E,baseClassName:_,maybePostfixModifierPosition:D}};if(i){const c=i+Sp,f=l;l=p=>p.startsWith(c)?f(p.substring(c.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:p,maybePostfixModifierPosition:void 0}}if(a){const c=l;l=f=>a({className:f,parseClassName:c})}return l},PE=e=>e.endsWith(kp)?e.substring(0,e.length-1):e.startsWith(kp)?e.substring(1):e,EE=e=>{const i=Object.fromEntries(e.orderSensitiveModifiers.map(l=>[l,!0]));return l=>{if(l.length<=1)return l;const c=[];let f=[];return l.forEach(p=>{p[0]==="["||i[p]?(c.push(...f.sort(),p),f=[]):f.push(p)}),c.push(...f.sort()),c}},CE=e=>({cache:kE(e.cacheSize),parseClassName:AE(e),sortModifiers:EE(e),...bE(e)}),RE=/\s+/,TE=(e,i)=>{const{parseClassName:a,getClassGroupId:l,getConflictingClassGroupIds:c,sortModifiers:f}=i,p=[],g=e.trim().split(RE);let b="";for(let w=g.length-1;w>=0;w-=1){const k=g[w],{isExternal:_,modifiers:E,hasImportantModifier:D,baseClassName:B,maybePostfixModifierPosition:C}=a(k);if(_){b=k+(b.length>0?" "+b:b);continue}let I=!!C,N=l(I?B.substring(0,C):B);if(!N){if(!I){b=k+(b.length>0?" "+b:b);continue}if(N=l(B),!N){b=k+(b.length>0?" "+b:b);continue}I=!1}const W=f(E).join(":"),F=D?W+kp:W,K=F+N;if(p.includes(K))continue;p.push(K);const ee=c(N,I);for(let Q=0;Q<ee.length;++Q){const se=ee[Q];p.push(F+se)}b=k+(b.length>0?" "+b:b)}return b};function LE(){let e=0,i,a,l="";for(;e<arguments.length;)(i=arguments[e++])&&(a=Db(i))&&(l&&(l+=" "),l+=a);return l}const Db=e=>{if(typeof e=="string")return e;let i,a="";for(let l=0;l<e.length;l++)e[l]&&(i=Db(e[l]))&&(a&&(a+=" "),a+=i);return a};function IE(e,...i){let a,l,c,f=p;function p(b){const w=i.reduce((k,_)=>_(k),e());return a=CE(w),l=a.cache.get,c=a.cache.set,f=g,g(b)}function g(b){const w=l(b);if(w)return w;const k=TE(b,a);return c(b,k),k}return function(){return f(LE.apply(null,arguments))}}const Tt=e=>{const i=a=>a[e]||[];return i.isThemeGetter=!0,i},jb=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Mb=/^\((?:(\w[\w-]*):)?(.+)\)$/i,NE=/^\d+\/\d+$/,DE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ME=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,OE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Oo=e=>NE.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),$i=e=>!!e&&Number.isInteger(Number(e)),Zf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Xr=e=>DE.test(e),FE=()=>!0,BE=e=>jE.test(e)&&!ME.test(e),Ob=()=>!1,HE=e=>OE.test(e),UE=e=>zE.test(e),WE=e=>!xe(e)&&!we(e),VE=e=>Xo(e,Bb,Ob),xe=e=>jb.test(e),Ea=e=>Xo(e,Hb,BE),Gf=e=>Xo(e,YE,$e),Cv=e=>Xo(e,zb,Ob),$E=e=>Xo(e,Fb,UE),eu=e=>Xo(e,Ub,HE),we=e=>Mb.test(e),Xs=e=>Jo(e,Hb),qE=e=>Jo(e,KE),Rv=e=>Jo(e,zb),ZE=e=>Jo(e,Bb),GE=e=>Jo(e,Fb),tu=e=>Jo(e,Ub,!0),Xo=(e,i,a)=>{const l=jb.exec(e);return l?l[1]?i(l[1]):a(l[2]):!1},Jo=(e,i,a=!1)=>{const l=Mb.exec(e);return l?l[1]?i(l[1]):a:!1},zb=e=>e==="position"||e==="percentage",Fb=e=>e==="image"||e==="url",Bb=e=>e==="length"||e==="size"||e==="bg-size",Hb=e=>e==="length",YE=e=>e==="number",KE=e=>e==="family-name",Ub=e=>e==="shadow",QE=()=>{const e=Tt("color"),i=Tt("font"),a=Tt("text"),l=Tt("font-weight"),c=Tt("tracking"),f=Tt("leading"),p=Tt("breakpoint"),g=Tt("container"),b=Tt("spacing"),w=Tt("radius"),k=Tt("shadow"),_=Tt("inset-shadow"),E=Tt("text-shadow"),D=Tt("drop-shadow"),B=Tt("blur"),C=Tt("perspective"),I=Tt("aspect"),N=Tt("ease"),W=Tt("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ee=()=>[...K(),we,xe],Q=()=>["auto","hidden","clip","visible","scroll"],se=()=>["auto","contain","none"],J=()=>[we,xe,b],me=()=>[Oo,"full","auto",...J()],ke=()=>[$i,"none","subgrid",we,xe],Pe=()=>["auto",{span:["full",$i,we,xe]},$i,we,xe],De=()=>[$i,"auto",we,xe],Ze=()=>["auto","min","max","fr",we,xe],de=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ve=()=>["start","end","center","stretch","center-safe","end-safe"],Le=()=>["auto",...J()],Me=()=>[Oo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...J()],U=()=>[e,we,xe],ve=()=>[...K(),Rv,Cv,{position:[we,xe]}],q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",ZE,VE,{size:[we,xe]}],H=()=>[Zf,Xs,Ea],X=()=>["","none","full",w,we,xe],ne=()=>["",$e,Xs,Ea],le=()=>["solid","dashed","dotted","double"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>[$e,Zf,Rv,Cv],Ce=()=>["","none",B,we,xe],Oe=()=>["none",$e,we,xe],at=()=>["none",$e,we,xe],_t=()=>[$e,we,xe],nt=()=>[Oo,"full",...J()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Xr],breakpoint:[Xr],color:[FE],container:[Xr],"drop-shadow":[Xr],ease:["in","out","in-out"],font:[WE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Xr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Xr],shadow:[Xr],spacing:["px",$e],text:[Xr],"text-shadow":[Xr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Oo,xe,we,I]}],container:["container"],columns:[{columns:[$e,xe,we,g]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ee()}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:se()}],"overscroll-x":[{"overscroll-x":se()}],"overscroll-y":[{"overscroll-y":se()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:me()}],"inset-x":[{"inset-x":me()}],"inset-y":[{"inset-y":me()}],start:[{start:me()}],end:[{end:me()}],top:[{top:me()}],right:[{right:me()}],bottom:[{bottom:me()}],left:[{left:me()}],visibility:["visible","invisible","collapse"],z:[{z:[$i,"auto",we,xe]}],basis:[{basis:[Oo,"full","auto",g,...J()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Oo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[$i,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":ke()}],"col-start-end":[{col:Pe()}],"col-start":[{"col-start":De()}],"col-end":[{"col-end":De()}],"grid-rows":[{"grid-rows":ke()}],"row-start-end":[{row:Pe()}],"row-start":[{"row-start":De()}],"row-end":[{"row-end":De()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ze()}],"auto-rows":[{"auto-rows":Ze()}],gap:[{gap:J()}],"gap-x":[{"gap-x":J()}],"gap-y":[{"gap-y":J()}],"justify-content":[{justify:[...de(),"normal"]}],"justify-items":[{"justify-items":[...Ve(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ve()]}],"align-content":[{content:["normal",...de()]}],"align-items":[{items:[...Ve(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ve(),{baseline:["","last"]}]}],"place-content":[{"place-content":de()}],"place-items":[{"place-items":[...Ve(),"baseline"]}],"place-self":[{"place-self":["auto",...Ve()]}],p:[{p:J()}],px:[{px:J()}],py:[{py:J()}],ps:[{ps:J()}],pe:[{pe:J()}],pt:[{pt:J()}],pr:[{pr:J()}],pb:[{pb:J()}],pl:[{pl:J()}],m:[{m:Le()}],mx:[{mx:Le()}],my:[{my:Le()}],ms:[{ms:Le()}],me:[{me:Le()}],mt:[{mt:Le()}],mr:[{mr:Le()}],mb:[{mb:Le()}],ml:[{ml:Le()}],"space-x":[{"space-x":J()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":J()}],"space-y-reverse":["space-y-reverse"],size:[{size:Me()}],w:[{w:[g,"screen",...Me()]}],"min-w":[{"min-w":[g,"screen","none",...Me()]}],"max-w":[{"max-w":[g,"screen","none","prose",{screen:[p]},...Me()]}],h:[{h:["screen",...Me()]}],"min-h":[{"min-h":["screen","none",...Me()]}],"max-h":[{"max-h":["screen",...Me()]}],"font-size":[{text:["base",a,Xs,Ea]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,we,Gf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Zf,xe]}],"font-family":[{font:[qE,xe,i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,Gf]}],leading:[{leading:[f,...J()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:U()}],"text-color":[{text:U()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...le(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,Ea]}],"text-decoration-color":[{decoration:U()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:J()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ve()}],"bg-repeat":[{bg:q()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},$i,we,xe],radial:["",we,xe],conic:[$i,we,xe]},GE,$E]}],"bg-color":[{bg:U()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:U()}],"gradient-via":[{via:U()}],"gradient-to":[{to:U()}],rounded:[{rounded:X()}],"rounded-s":[{"rounded-s":X()}],"rounded-e":[{"rounded-e":X()}],"rounded-t":[{"rounded-t":X()}],"rounded-r":[{"rounded-r":X()}],"rounded-b":[{"rounded-b":X()}],"rounded-l":[{"rounded-l":X()}],"rounded-ss":[{"rounded-ss":X()}],"rounded-se":[{"rounded-se":X()}],"rounded-ee":[{"rounded-ee":X()}],"rounded-es":[{"rounded-es":X()}],"rounded-tl":[{"rounded-tl":X()}],"rounded-tr":[{"rounded-tr":X()}],"rounded-br":[{"rounded-br":X()}],"rounded-bl":[{"rounded-bl":X()}],"border-w":[{border:ne()}],"border-w-x":[{"border-x":ne()}],"border-w-y":[{"border-y":ne()}],"border-w-s":[{"border-s":ne()}],"border-w-e":[{"border-e":ne()}],"border-w-t":[{"border-t":ne()}],"border-w-r":[{"border-r":ne()}],"border-w-b":[{"border-b":ne()}],"border-w-l":[{"border-l":ne()}],"divide-x":[{"divide-x":ne()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ne()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...le(),"hidden","none"]}],"divide-style":[{divide:[...le(),"hidden","none"]}],"border-color":[{border:U()}],"border-color-x":[{"border-x":U()}],"border-color-y":[{"border-y":U()}],"border-color-s":[{"border-s":U()}],"border-color-e":[{"border-e":U()}],"border-color-t":[{"border-t":U()}],"border-color-r":[{"border-r":U()}],"border-color-b":[{"border-b":U()}],"border-color-l":[{"border-l":U()}],"divide-color":[{divide:U()}],"outline-style":[{outline:[...le(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Xs,Ea]}],"outline-color":[{outline:U()}],shadow:[{shadow:["","none",k,tu,eu]}],"shadow-color":[{shadow:U()}],"inset-shadow":[{"inset-shadow":["none",_,tu,eu]}],"inset-shadow-color":[{"inset-shadow":U()}],"ring-w":[{ring:ne()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:U()}],"ring-offset-w":[{"ring-offset":[$e,Ea]}],"ring-offset-color":[{"ring-offset":U()}],"inset-ring-w":[{"inset-ring":ne()}],"inset-ring-color":[{"inset-ring":U()}],"text-shadow":[{"text-shadow":["none",E,tu,eu]}],"text-shadow-color":[{"text-shadow":U()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...re(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":re()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":U()}],"mask-image-linear-to-color":[{"mask-linear-to":U()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":U()}],"mask-image-t-to-color":[{"mask-t-to":U()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":U()}],"mask-image-r-to-color":[{"mask-r-to":U()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":U()}],"mask-image-b-to-color":[{"mask-b-to":U()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":U()}],"mask-image-l-to-color":[{"mask-l-to":U()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":U()}],"mask-image-x-to-color":[{"mask-x-to":U()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":U()}],"mask-image-y-to-color":[{"mask-y-to":U()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":U()}],"mask-image-radial-to-color":[{"mask-radial-to":U()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":K()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":U()}],"mask-image-conic-to-color":[{"mask-conic-to":U()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ve()}],"mask-repeat":[{mask:q()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:Ce()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",D,tu,eu]}],"drop-shadow-color":[{"drop-shadow":U()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":J()}],"border-spacing-x":[{"border-spacing-x":J()}],"border-spacing-y":[{"border-spacing-y":J()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",N,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",W,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,we,xe]}],"perspective-origin":[{"perspective-origin":ee()}],rotate:[{rotate:Oe()}],"rotate-x":[{"rotate-x":Oe()}],"rotate-y":[{"rotate-y":Oe()}],"rotate-z":[{"rotate-z":Oe()}],scale:[{scale:at()}],"scale-x":[{"scale-x":at()}],"scale-y":[{"scale-y":at()}],"scale-z":[{"scale-z":at()}],"scale-3d":["scale-3d"],skew:[{skew:_t()}],"skew-x":[{"skew-x":_t()}],"skew-y":[{"skew-y":_t()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:ee()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:nt()}],"translate-x":[{"translate-x":nt()}],"translate-y":[{"translate-y":nt()}],"translate-z":[{"translate-z":nt()}],"translate-none":["translate-none"],accent:[{accent:U()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:U()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":J()}],"scroll-mx":[{"scroll-mx":J()}],"scroll-my":[{"scroll-my":J()}],"scroll-ms":[{"scroll-ms":J()}],"scroll-me":[{"scroll-me":J()}],"scroll-mt":[{"scroll-mt":J()}],"scroll-mr":[{"scroll-mr":J()}],"scroll-mb":[{"scroll-mb":J()}],"scroll-ml":[{"scroll-ml":J()}],"scroll-p":[{"scroll-p":J()}],"scroll-px":[{"scroll-px":J()}],"scroll-py":[{"scroll-py":J()}],"scroll-ps":[{"scroll-ps":J()}],"scroll-pe":[{"scroll-pe":J()}],"scroll-pt":[{"scroll-pt":J()}],"scroll-pr":[{"scroll-pr":J()}],"scroll-pb":[{"scroll-pb":J()}],"scroll-pl":[{"scroll-pl":J()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...U()]}],"stroke-w":[{stroke:[$e,Xs,Ea,Gf]}],stroke:[{stroke:["none",...U()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},XE=IE(QE);function es(...e){return XE(Ib(e))}function Pu({...e}){return v.jsx(lE,{"data-slot":"dialog",...e})}function Eu({...e}){return v.jsx(cE,{"data-slot":"dialog-portal",...e})}function Cu({className:e,...i}){return v.jsx(uE,{"data-slot":"dialog-overlay",className:es("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[1200] bg-black/50",e),...i})}function JE({className:e,children:i,...a}){return v.jsxs(Eu,{"data-slot":"dialog-portal",children:[v.jsx(Cu,{}),v.jsxs(Au,{"data-slot":"dialog-content",className:es("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-[1210] grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...a,children:[i,v.jsxs(dE,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[v.jsx(yE,{}),v.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function eC({className:e,...i}){return v.jsx("div",{"data-slot":"dialog-header",className:es("flex flex-col gap-2 text-center sm:text-left",e),...i})}function tC({className:e,...i}){return v.jsx(Uo,{"data-slot":"dialog-title",className:es("text-lg leading-none font-semibold",e),...i})}function nC({className:e,...i}){return v.jsx(ul,{"data-slot":"dialog-description",className:es("text-muted-foreground text-sm",e),...i})}const Tv={name:"",mobile:"",intent:""},rC=e=>{var l,c;const i=(l=e==null?void 0:e.response)==null?void 0:l.data,a=typeof i=="string"?i:(i==null?void 0:i.message)||(i==null?void 0:i.Message)||(i==null?void 0:i.errorMessage)||(i==null?void 0:i.ErrorMessage)||(i==null?void 0:i.title);return typeof a=="string"&&a.trim()?a:(c=e==null?void 0:e.response)!=null&&c.status?`Requirement service returned HTTP ${e.response.status}. Please try again.`:(e==null?void 0:e.code)==="ECONNABORTED"?"The requirement service timed out. Please try again.":"Could not connect to the requirement service. Please check your connection and try again."},iC=()=>window.location.hostname.toLowerCase().includes("rrrhyderabad.com")?{name:"RRR Hyderabad",url:"RRRHyderabad.com"}:{name:"Future City Hyderabad",url:"FutureCityOfficial.com"};function aC({open:e,onOpenChange:i}){const[a,l]=P.useState(Tv),[c,f]=P.useState("form"),[p,g]=P.useState(""),[b,w]=P.useState(""),[k,_]=P.useState(!1),[E,D]=P.useState(!1),[B,C]=P.useState(""),[I,N]=P.useState(""),W=()=>{l(Tv),f("form"),g(""),w(""),_(!1),D(!1),C(""),N(""),i(!1)},F=J=>{J?i(!0):W()},K=J=>{const{name:me,value:ke}=J.target;l(Pe=>({...Pe,[me]:ke})),C("")},ee=async J=>{var ke,Pe;if(J.preventDefault(),C(""),N(""),!J.currentTarget.reportValidity())return;const me=String(Math.floor(1e5+Math.random()*9e5));D(!0);try{await uP({otp:me,mobile:a.mobile}),w(me),f("otp")}catch(De){C(((Pe=(ke=De==null?void 0:De.response)==null?void 0:ke.data)==null?void 0:Pe.message)||"Unable to send an OTP. Please try again.")}finally{D(!1)}},Q=()=>{if(!/^\d{6}$/.test(p)){_(!1),N("Enter the 6-digit OTP sent to your mobile.");return}if(p!==b){_(!1),N("Invalid OTP. Please try again.");return}_(!0),N("Mobile verified successfully."),C("")},se=async()=>{if(!k){C("Please verify your mobile number first.");return}D(!0),C("");const J=iC(),me={Name:a.name,Mobile:a.mobile,Email:"",Intent:a.intent,PropertyType:"",Budget:"",Area:"",ProjectName:"",Message:"",SiteName:J.name,SiteUrl:J.url};try{const ke=await dP(me);if(!(ke!=null&&ke.success)){C("Unable to submit your requirement. Please try again.");return}N(`Thank you, ${a.name}. Our team will contact you shortly at ${a.mobile}.`),f("success")}catch(ke){C(rC(ke))}finally{D(!1)}};return v.jsx(Pu,{open:e,onOpenChange:F,children:v.jsxs(Eu,{children:[v.jsx(Cu,{className:"vd-investment-overlay"}),v.jsxs(Au,{id:"investmentModal",className:"vd-investment-modal","aria-describedby":"investment-modal-description",onCloseAutoFocus:J=>J.preventDefault(),children:[v.jsx("button",{type:"button",className:"vd-investment-close",onClick:W,"aria-label":"Close investment form",children:"×"}),c==="form"&&v.jsxs(v.Fragment,{children:[v.jsx(Uo,{className:"vd-investment-title",children:"Get Best Deals"}),v.jsx(ul,{id:"investment-modal-description",className:"vd-investment-description",children:"Our experts will call you within 30 minutes with the best options."}),v.jsxs("form",{id:"investmentForm",onSubmit:ee,children:[v.jsxs("div",{className:"vd-investment-form-group",children:[v.jsx("label",{htmlFor:"name",children:"Full Name"}),v.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Enter your name",value:a.name,onChange:K,autoComplete:"name",required:!0})]}),v.jsxs("div",{className:"vd-investment-form-group",children:[v.jsx("label",{htmlFor:"mobile",children:"Mobile Number"}),v.jsx("input",{id:"mobile",name:"mobile",type:"tel",placeholder:"10-digit number",value:a.mobile,onChange:K,autoComplete:"tel-national",inputMode:"numeric",pattern:"[0-9]{10}",maxLength:10,required:!0})]}),v.jsxs("div",{className:"vd-investment-form-group",children:[v.jsx("label",{htmlFor:"intent",children:"I am looking for"}),v.jsxs("select",{id:"intent",name:"intent",value:a.intent,onChange:K,required:!0,children:[v.jsx("option",{value:"",children:"Select..."}),v.jsx("option",{value:"Residential Plot",children:"Residential Plot"}),v.jsx("option",{value:"Commercial Property",children:"Commercial Property"}),v.jsx("option",{value:"Farmland",children:"Farmland"}),v.jsx("option",{value:"Investment Advice",children:"Investment Advice"})]})]}),v.jsxs("button",{type:"submit",className:"vd-investment-submit",disabled:E,children:[v.jsx(Ke,{icon:MS}),E?"Sending OTP...":"Get Expert Call"]})]}),v.jsxs("div",{className:"vd-investment-contact",children:[v.jsx("span",{"aria-hidden":"true",children:"💬"})," ",v.jsx("a",{href:"https://wa.me/918500667238",children:"WhatsApp"})," | ",v.jsx("span",{"aria-hidden":"true",children:"📞"})," ",v.jsx("a",{href:"tel:9618641100",children:"9618641100"})]})]}),c==="otp"&&v.jsxs(v.Fragment,{children:[v.jsx(Uo,{className:"vd-investment-title",children:"Verify Your Contact Details"}),v.jsxs(ul,{id:"investment-modal-description",className:"vd-investment-description",children:["Enter the 6-digit OTP sent to ",a.mobile,"."]}),v.jsxs("div",{className:"vd-investment-form-group",children:[v.jsx("label",{htmlFor:"mobileOtp",children:"Mobile OTP"}),v.jsxs("div",{className:"vd-investment-otp-row",children:[v.jsx("input",{id:"mobileOtp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:p,onChange:J=>{g(J.target.value.replace(/\D/g,"").slice(0,6)),N(""),C(""),_(!1)},disabled:k}),v.jsx("button",{type:"button",className:"vd-investment-verify",onClick:Q,disabled:k,children:"Verify"})]})]}),I&&v.jsx("p",{className:k?"vd-investment-status is-success":"vd-investment-status",role:"status",children:I}),v.jsx("button",{type:"button",className:"vd-investment-submit",onClick:se,disabled:!k||E,children:E?"Sending...":"Send Requirement"})]}),c==="success"&&v.jsxs(v.Fragment,{children:[v.jsx(Uo,{className:"vd-investment-title",children:"Thank you for your interest!"}),v.jsx(ul,{id:"investment-modal-description",className:"vd-investment-description",role:"status",children:I}),v.jsx("button",{type:"button",className:"vd-investment-submit",onClick:W,children:"Done"})]}),B&&v.jsx("p",{className:"vd-investment-error",role:"alert",children:B})]})]})})}function oC(){const{pathname:e}=oi();return P.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const sC=["Kokapet","Tukkuguda","Nanakramguda","Gandipet"];function lC({searchValue:e,onSearchChange:i,onSearchSubmit:a,suggestions:l,isSuggestionsLoading:c,suggestionsError:f}){const p=typeof e=="string",[g,b]=P.useState(""),[w,k]=P.useState([]),[_,E]=P.useState(!1),[D,B]=P.useState(""),[C,I]=P.useState(!1),[N,W]=P.useState(""),[F,K]=P.useState(!1),ee=p?e:g,Q=Array.isArray(l)?l:w,se=typeof c=="boolean"?c:_,J=typeof f=="string"?f:D,me=P.useRef(null),ke=P.useRef(null),[Pe,De]=P.useState(!1),[Ze,de]=P.useState(!0);P.useEffect(()=>()=>{var q;(q=ke.current)==null||q.abort()},[]);const Ve=()=>{const q=me.current;if(!q)return;const R=q.scrollWidth-q.clientWidth;De(q.scrollLeft>0),de(R>0&&q.scrollLeft<R-1)};P.useEffect(()=>(Ve(),window.addEventListener("resize",Ve),()=>{window.removeEventListener("resize",Ve)}),[]);const Le=q=>{const R=me.current;if(!R)return;const H=Math.max(R.clientWidth*.8,220);R.scrollBy({left:q==="left"?-H:H,behavior:"smooth"})},Me=q=>{if(typeof i=="function"){i(q);return}b(q)},U=()=>{if(ke.current){ke.current.stop();return}const q=window.SpeechRecognition||window.webkitSpeechRecognition;if(!q){W("Voice search is not supported by this browser. Try Chrome or Edge.");return}const R=new q;R.lang="en-IN",R.interimResults=!1,R.maxAlternatives=1,ke.current=R,W("Listening..."),I(!0),R.onresult=H=>{var ne,le,re,fe;const X=(fe=(re=(le=(ne=H.results)==null?void 0:ne[0])==null?void 0:le[0])==null?void 0:re.transcript)==null?void 0:fe.trim();X&&(Me(X),W(`Heard: ${X}`))},R.onerror=H=>{W({"not-allowed":"Microphone access was denied. Allow microphone access and try again.","service-not-allowed":"Voice search is blocked by browser settings.","no-speech":"No speech detected. Try speaking again.",network:"Voice search is unavailable due to a network error."}[H.error]||"Voice search failed. Please try again.")},R.onend=()=>{ke.current=null,I(!1)};try{R.start()}catch{ke.current=null,I(!1),W("Unable to start voice search. Please try again.")}},ve=async q=>{K(!1);const R=q.trim();if(!R){k([]),B("");return}if(typeof a=="function"){a(q);return}E(!0),B("");try{const X=(await ll({query:R,pageNumber:1,pageSize:10})).items.map(ne=>(ne==null?void 0:ne.ProjectName)||(ne==null?void 0:ne.projectName)||"").filter(Boolean);k(Array.from(new Set(X)).slice(0,5))}catch(H){k([]),B((H==null?void 0:H.message)||"Unable to search projects right now.")}finally{E(!1)}};return v.jsx("section",{className:"vd-hero",children:v.jsxs("div",{className:"vd-hero-inner",children:[v.jsxs("h1",{className:"vd-hero-h1",children:["Find the Right Real Estate Venture Using"," ",v.jsxs("span",{className:"ai-word",children:["AI",v.jsx("sup",{style:{fontSize:"0.45em",verticalAlign:"super"},children:"✦"})]})]}),v.jsx("p",{className:"vd-hero-sub",children:"Search 10,000+ RERA Projects, Plots, Villas & Apartments Across India"}),v.jsxs("form",{className:"vd-searchbar",onSubmit:q=>{q.preventDefault(),ve(ee)},children:[v.jsx(Ke,{icon:bu,className:"vd-searchbar-icon"}),v.jsx("input",{className:"vd-searchbar-input",type:"text",placeholder:"Search Venture Area or Name",value:ee,onChange:q=>{Me(q.target.value),K(!!q.target.value.trim())},"aria-label":"Search real estate ventures","aria-controls":"venture-search-results","aria-expanded":F&&!!ee.trim()}),v.jsx("span",{className:"vd-search-divider","aria-hidden":"true"}),v.jsx("button",{type:"button",className:`vd-mic-btn${C?" is-listening":""}`,title:C?"Stop voice search":"Voice search","aria-label":C?"Stop voice search":"Start voice search","aria-pressed":C,onClick:U,children:v.jsx(Ke,{icon:AS})}),v.jsxs("button",{type:"submit",className:"vd-askai-btn",children:[v.jsx(Ke,{icon:Yp}),"Ask AI"]})]}),N&&v.jsx("p",{className:"vd-voice-search-message",role:"status",children:N}),F&&ee.trim()&&v.jsx("div",{id:"venture-search-results",className:"vd-search-results",role:"listbox","aria-label":"Matching ventures",children:se?v.jsx("p",{className:"vd-search-results-message",role:"status",children:"Searching matching ventures..."}):J?v.jsx("p",{className:"vd-search-results-message is-error",role:"alert",children:J}):Q.length?Q.map(q=>v.jsxs("button",{type:"button",className:"vd-search-result",role:"option",onClick:()=>ve(q),children:[v.jsx(Ke,{icon:bu,"aria-hidden":"true"}),v.jsx("span",{children:q})]},q)):v.jsx("p",{className:"vd-search-results-message",children:"No matching ventures found. Try a different project name, builder, or RERA number."})}),v.jsxs("div",{className:"vd-chips-wrap",children:[v.jsx("button",{className:"vd-chip-arrow","aria-label":"Scroll chip suggestions left",onClick:()=>Le("left"),style:{visibility:Pe?"visible":"hidden",pointerEvents:Pe?"auto":"none"},children:v.jsx(Ke,{icon:zS})}),v.jsx("div",{className:"vd-chips",ref:me,onScroll:Ve,children:sC.map(q=>v.jsx("button",{className:"vd-chip",onClick:()=>ve(q),children:q},q))}),v.jsx("button",{className:"vd-chip-arrow","aria-label":"Scroll chip suggestions right",onClick:()=>Le("right"),style:{visibility:Ze?"visible":"hidden",pointerEvents:Ze?"auto":"none"},children:v.jsx(Ke,{icon:y0})})]})]})})}const cC=["All Types","Plotted Development","Commercial","Mixed Development","Residential"],Wb=[{key:"location",icon:sl,label:"Location",value:"All Locations",options:["All Locations","Hyderabad","Ranga Reddy","Nizamabad","Medchal","Sangareddy","Warangal"]},{key:"propertyType",icon:b0,label:"Project Type",value:"All Types",options:cC},{key:"approval",icon:Kp,label:"Approval",value:"Any Approval",options:["Any Approval","HMDA","DTCP","GHMC","RERA"]},{key:"builderName",icon:WS,label:"Builder",value:"All Builders",options:["All Builders","Aparna","My Home","Prestige","Brigade"]},{key:"possession",icon:v0,label:"Possession",value:"Any Time",options:["Any Time","On-Going Project","New Project"]}],Ru=Object.fromEntries(Wb.map(e=>[e.key,e.value])),uC=(e,i)=>i==null||i===""||i===Ru[e],Vb=(e={})=>Object.fromEntries(Object.entries(e).filter(([i,a])=>!uC(i,a)));function dC({values:e=Ru,onChange:i,onApply:a}){const[l,c]=P.useState(!1),f=async()=>{c(!0);try{await(a==null?void 0:a(Vb(e)))}finally{c(!1)}};return v.jsxs("form",{className:"vd-filter-wrap",onSubmit:p=>{p.preventDefault(),f()},children:[Wb.map(p=>v.jsxs("div",{className:"vd-filter-item",children:[v.jsxs("div",{className:"vd-fl-label",children:[v.jsx(Ke,{icon:p.icon,className:"fa-icon"}),p.label]}),v.jsx("div",{className:"vd-fl-val",children:v.jsx("select",{className:"vd-fl-select",value:e[p.key]??p.value,onChange:g=>i==null?void 0:i({...e,[p.key]:g.target.value}),"aria-label":p.label,children:p.options.map((g,b)=>typeof g=="string"?v.jsx("option",{value:g,children:g},g):v.jsx("optgroup",{label:g.group,children:g.options.map(w=>v.jsx("option",{value:w,children:w},`${g.group}-${w}`))},`${g.group}-${b}`))})})]},p.key)),v.jsxs("button",{className:"vd-filter-more-btn",type:"submit",disabled:l,children:[v.jsx(Ke,{icon:LS}),l?"Applying...":"Apply Filters"]})]})}const fC="/assets/ad_1-BayEHbsI.jpg",pC="/assets/ad_2-drZpiYql.jpg",hC="/assets/ad_3-hop9-_rn.jpg",mC="/assets/ad_4-t5iSUXwL.jpg",Lv=[{src:fC,alt:"Advertisement 1"},{src:pC,alt:"Advertisement 2"},{src:hC,alt:"Advertisement 3"},{src:mC,alt:"Advertisement 4"}],gC=3e4;function vC(){const[e,i]=P.useState(0);return P.useEffect(()=>{const a=window.setInterval(()=>{i(l=>(l+1)%Lv.length)},gC);return()=>window.clearInterval(a)},[]),v.jsx("section",{className:"vd-ads-banner","aria-label":"Advertisements","aria-live":"polite",children:Lv.map((a,l)=>v.jsx("img",{src:a.src,alt:a.alt,className:`vd-ads-banner-image${l===e?" is-active":""}`,loading:l===0?"eager":"lazy"},a.src))})}var rl={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var yC=rl.exports,Iv;function bC(){return Iv||(Iv=1,(function(e,i){(function(a,l){l(i)})(yC,(function(a){var l="1.9.4";function c(n){var o,u,h,x;for(u=1,h=arguments.length;u<h;u++){x=arguments[u];for(o in x)n[o]=x[o]}return n}var f=Object.create||(function(){function n(){}return function(o){return n.prototype=o,new n}})();function p(n,o){var u=Array.prototype.slice;if(n.bind)return n.bind.apply(n,u.call(arguments,1));var h=u.call(arguments,2);return function(){return n.apply(o,h.length?h.concat(u.call(arguments)):arguments)}}var g=0;function b(n){return"_leaflet_id"in n||(n._leaflet_id=++g),n._leaflet_id}function w(n,o,u){var h,x,A,j;return j=function(){h=!1,x&&(A.apply(u,x),x=!1)},A=function(){h?x=arguments:(n.apply(u,arguments),setTimeout(j,o),h=!0)},A}function k(n,o,u){var h=o[1],x=o[0],A=h-x;return n===h&&u?n:((n-x)%A+A)%A+x}function _(){return!1}function E(n,o){if(o===!1)return n;var u=Math.pow(10,o===void 0?6:o);return Math.round(n*u)/u}function D(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function B(n){return D(n).split(/\s+/)}function C(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?f(n.options):{});for(var u in o)n.options[u]=o[u];return n.options}function I(n,o,u){var h=[];for(var x in n)h.push(encodeURIComponent(u?x.toUpperCase():x)+"="+encodeURIComponent(n[x]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var N=/\{ *([\w_ -]+) *\}/g;function W(n,o){return n.replace(N,function(u,h){var x=o[h];if(x===void 0)throw new Error("No value provided for variable "+u);return typeof x=="function"&&(x=x(o)),x})}var F=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function K(n,o){for(var u=0;u<n.length;u++)if(n[u]===o)return u;return-1}var ee="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Q(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var se=0;function J(n){var o=+new Date,u=Math.max(0,16-(o-se));return se=o+u,window.setTimeout(n,u)}var me=window.requestAnimationFrame||Q("RequestAnimationFrame")||J,ke=window.cancelAnimationFrame||Q("CancelAnimationFrame")||Q("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function Pe(n,o,u){if(u&&me===J)n.call(o);else return me.call(window,p(n,o))}function De(n){n&&ke.call(window,n)}var Ze={__proto__:null,extend:c,create:f,bind:p,get lastId(){return g},stamp:b,throttle:w,wrapNum:k,falseFn:_,formatNum:E,trim:D,splitWords:B,setOptions:C,getParamString:I,template:W,isArray:F,indexOf:K,emptyImageUrl:ee,requestFn:me,cancelFn:ke,requestAnimFrame:Pe,cancelAnimFrame:De};function de(){}de.extend=function(n){var o=function(){C(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=o.__super__=this.prototype,h=f(u);h.constructor=o,o.prototype=h;for(var x in this)Object.prototype.hasOwnProperty.call(this,x)&&x!=="prototype"&&x!=="__super__"&&(o[x]=this[x]);return n.statics&&c(o,n.statics),n.includes&&(Ve(n.includes),c.apply(null,[h].concat(n.includes))),c(h,n),delete h.statics,delete h.includes,h.options&&(h.options=u.options?f(u.options):{},c(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var A=0,j=h._initHooks.length;A<j;A++)h._initHooks[A].call(this)}},o},de.include=function(n){var o=this.prototype.options;return c(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},de.mergeOptions=function(n){return c(this.prototype.options,n),this},de.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),u=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function Ve(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=F(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Le={on:function(n,o,u){if(typeof n=="object")for(var h in n)this._on(h,n[h],o);else{n=B(n);for(var x=0,A=n.length;x<A;x++)this._on(n[x],o,u)}return this},off:function(n,o,u){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],o);else{n=B(n);for(var x=arguments.length===1,A=0,j=n.length;A<j;A++)x?this._off(n[A]):this._off(n[A],o,u)}return this},_on:function(n,o,u,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,u)===!1){u===this&&(u=void 0);var x={fn:o,ctx:u};h&&(x.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(x)}},_off:function(n,o,u){var h,x,A;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(x=0,A=h.length;x<A;x++)h[x].fn=_;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var j=this._listens(n,o,u);if(j!==!1){var V=h[j];this._firingCount&&(V.fn=_,this._events[n]=h=h.slice()),h.splice(j,1)}}},fire:function(n,o,u){if(!this.listens(n,u))return this;var h=c({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var x=this._events[n];if(x){this._firingCount=this._firingCount+1||1;for(var A=0,j=x.length;A<j;A++){var V=x[A],G=V.fn;V.once&&this.off(n,G,V.ctx),G.call(V.ctx||this,h)}this._firingCount--}}return u&&this._propagateEvent(h),this},listens:function(n,o,u,h){typeof n!="string"&&console.warn('"string" type argument expected');var x=o;typeof o!="function"&&(h=!!o,x=void 0,u=void 0);var A=this._events&&this._events[n];if(A&&A.length&&this._listens(n,x,u)!==!1)return!0;if(h){for(var j in this._eventParents)if(this._eventParents[j].listens(n,o,u,h))return!0}return!1},_listens:function(n,o,u){if(!this._events)return!1;var h=this._events[n]||[];if(!o)return!!h.length;u===this&&(u=void 0);for(var x=0,A=h.length;x<A;x++)if(h[x].fn===o&&h[x].ctx===u)return x;return!1},once:function(n,o,u){if(typeof n=="object")for(var h in n)this._on(h,n[h],o,!0);else{n=B(n);for(var x=0,A=n.length;x<A;x++)this._on(n[x],o,u,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[b(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[b(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,c({layer:n.target,propagatedFrom:n.target},n),!0)}};Le.addEventListener=Le.on,Le.removeEventListener=Le.clearAllEventListeners=Le.off,Le.addOneTimeEventListener=Le.once,Le.fireEvent=Le.fire,Le.hasEventListeners=Le.listens;var Me=de.extend(Le);function U(n,o,u){this.x=u?Math.round(n):n,this.y=u?Math.round(o):o}var ve=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};U.prototype={clone:function(){return new U(this.x,this.y)},add:function(n){return this.clone()._add(q(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(q(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new U(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new U(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ve(this.x),this.y=ve(this.y),this},distanceTo:function(n){n=q(n);var o=n.x-this.x,u=n.y-this.y;return Math.sqrt(o*o+u*u)},equals:function(n){return n=q(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=q(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function q(n,o,u){return n instanceof U?n:F(n)?new U(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new U(n.x,n.y):new U(n,o,u)}function R(n,o){if(n)for(var u=o?[n,o]:n,h=0,x=u.length;h<x;h++)this.extend(u[h])}R.prototype={extend:function(n){var o,u;if(!n)return this;if(n instanceof U||typeof n[0]=="number"||"x"in n)o=u=q(n);else if(n=H(n),o=n.min,u=n.max,!o||!u)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=u.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(n){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,u;return typeof n[0]=="number"||n instanceof U?n=q(n):n=H(n),n instanceof R?(o=n.min,u=n.max):o=u=n,o.x>=this.min.x&&u.x<=this.max.x&&o.y>=this.min.y&&u.y<=this.max.y},intersects:function(n){n=H(n);var o=this.min,u=this.max,h=n.min,x=n.max,A=x.x>=o.x&&h.x<=u.x,j=x.y>=o.y&&h.y<=u.y;return A&&j},overlaps:function(n){n=H(n);var o=this.min,u=this.max,h=n.min,x=n.max,A=x.x>o.x&&h.x<u.x,j=x.y>o.y&&h.y<u.y;return A&&j},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,u=this.max,h=Math.abs(o.x-u.x)*n,x=Math.abs(o.y-u.y)*n;return H(q(o.x-h,o.y-x),q(u.x+h,u.y+x))},equals:function(n){return n?(n=H(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function H(n,o){return!n||n instanceof R?n:new R(n,o)}function X(n,o){if(n)for(var u=o?[n,o]:n,h=0,x=u.length;h<x;h++)this.extend(u[h])}X.prototype={extend:function(n){var o=this._southWest,u=this._northEast,h,x;if(n instanceof le)h=n,x=n;else if(n instanceof X){if(h=n._southWest,x=n._northEast,!h||!x)return this}else return n?this.extend(re(n)||ne(n)):this;return!o&&!u?(this._southWest=new le(h.lat,h.lng),this._northEast=new le(x.lat,x.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),u.lat=Math.max(x.lat,u.lat),u.lng=Math.max(x.lng,u.lng)),this},pad:function(n){var o=this._southWest,u=this._northEast,h=Math.abs(o.lat-u.lat)*n,x=Math.abs(o.lng-u.lng)*n;return new X(new le(o.lat-h,o.lng-x),new le(u.lat+h,u.lng+x))},getCenter:function(){return new le((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new le(this.getNorth(),this.getWest())},getSouthEast:function(){return new le(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof le||"lat"in n?n=re(n):n=ne(n);var o=this._southWest,u=this._northEast,h,x;return n instanceof X?(h=n.getSouthWest(),x=n.getNorthEast()):h=x=n,h.lat>=o.lat&&x.lat<=u.lat&&h.lng>=o.lng&&x.lng<=u.lng},intersects:function(n){n=ne(n);var o=this._southWest,u=this._northEast,h=n.getSouthWest(),x=n.getNorthEast(),A=x.lat>=o.lat&&h.lat<=u.lat,j=x.lng>=o.lng&&h.lng<=u.lng;return A&&j},overlaps:function(n){n=ne(n);var o=this._southWest,u=this._northEast,h=n.getSouthWest(),x=n.getNorthEast(),A=x.lat>o.lat&&h.lat<u.lat,j=x.lng>o.lng&&h.lng<u.lng;return A&&j},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=ne(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ne(n,o){return n instanceof X?n:new X(n,o)}function le(n,o,u){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,u!==void 0&&(this.alt=+u)}le.prototype={equals:function(n,o){if(!n)return!1;n=re(n);var u=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return u<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ce.distance(this,re(n))},wrap:function(){return Ce.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,u=o/Math.cos(Math.PI/180*this.lat);return ne([this.lat-o,this.lng-u],[this.lat+o,this.lng+u])},clone:function(){return new le(this.lat,this.lng,this.alt)}};function re(n,o,u){return n instanceof le?n:F(n)&&typeof n[0]!="object"?n.length===3?new le(n[0],n[1],n[2]):n.length===2?new le(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new le(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new le(n,o,u)}var fe={latLngToPoint:function(n,o){var u=this.projection.project(n),h=this.scale(o);return this.transformation._transform(u,h)},pointToLatLng:function(n,o){var u=this.scale(o),h=this.transformation.untransform(n,u);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,u=this.scale(n),h=this.transformation.transform(o.min,u),x=this.transformation.transform(o.max,u);return new R(h,x)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?k(n.lng,this.wrapLng,!0):n.lng,u=this.wrapLat?k(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new le(u,o,h)},wrapLatLngBounds:function(n){var o=n.getCenter(),u=this.wrapLatLng(o),h=o.lat-u.lat,x=o.lng-u.lng;if(h===0&&x===0)return n;var A=n.getSouthWest(),j=n.getNorthEast(),V=new le(A.lat-h,A.lng-x),G=new le(j.lat-h,j.lng-x);return new X(V,G)}},Ce=c({},fe,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var u=Math.PI/180,h=n.lat*u,x=o.lat*u,A=Math.sin((o.lat-n.lat)*u/2),j=Math.sin((o.lng-n.lng)*u/2),V=A*A+Math.cos(h)*Math.cos(x)*j*j,G=2*Math.atan2(Math.sqrt(V),Math.sqrt(1-V));return this.R*G}}),Oe=6378137,at={R:Oe,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,u=this.MAX_LATITUDE,h=Math.max(Math.min(u,n.lat),-u),x=Math.sin(h*o);return new U(this.R*n.lng*o,this.R*Math.log((1+x)/(1-x))/2)},unproject:function(n){var o=180/Math.PI;return new le((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:(function(){var n=Oe*Math.PI;return new R([-n,-n],[n,n])})()};function _t(n,o,u,h){if(F(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=u,this._d=h}_t.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new U((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function nt(n,o,u,h){return new _t(n,o,u,h)}var un=c({},Ce,{code:"EPSG:3857",projection:at,transformation:(function(){var n=.5/(Math.PI*at.R);return nt(n,.5,-n,.5)})()}),Mn=c({},un,{code:"EPSG:900913"});function Lt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function je(n,o){var u="",h,x,A,j,V,G;for(h=0,A=n.length;h<A;h++){for(V=n[h],x=0,j=V.length;x<j;x++)G=V[x],u+=(x?"L":"M")+G.x+" "+G.y;u+=o?Se.svg?"z":"x":""}return u||"M0 0"}var ft=document.documentElement.style,At="ActiveXObject"in window,en=At&&!document.addEventListener,tn="msLaunchUri"in navigator&&!("documentMode"in document),Ht=Wt("webkit"),dn=Wt("android"),Qi=Wt("android 2")||Wt("android 3"),Ba=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Xi=dn&&Wt("Google")&&Ba<537&&!("AudioNode"in window),ci=!!window.opera,ui=!tn&&Wt("chrome"),Cr=Wt("gecko")&&!Ht&&!ci&&!At,Ue=!ui&&Wt("safari"),Ut=Wt("phantom"),ot="OTransition"in ft,fn=navigator.platform.indexOf("Win")===0,nn=At&&"transition"in ft,rn="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Qi,Ha="MozPerspective"in ft,di=!window.L_DISABLE_3D&&(nn||rn||Ha)&&!ot&&!Ut,Qn=typeof orientation<"u"||Wt("mobile"),ns=Qn&&Ht,rs=Qn&&rn,Ua=!window.PointerEvent&&window.MSPointerEvent,Rr=!!(window.PointerEvent||Ua),Tr="ontouchstart"in window||!!window.TouchEvent,Sl=!window.L_NO_TOUCH&&(Tr||Rr),Al=Qn&&ci,Pl=Qn&&Cr,El=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Cl=(function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",_,o),window.removeEventListener("testPassiveEventSupport",_,o)}catch{}return n})(),is=(function(){return!!document.createElement("canvas").getContext})(),Wa=!!(document.createElementNS&&Lt("svg").createSVGRect),Ji=!!Wa&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),as=!Wa&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),ea=navigator.platform.indexOf("Mac")===0,Zu=navigator.platform.indexOf("Linux")===0;function Wt(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Se={ie:At,ielt9:en,edge:tn,webkit:Ht,android:dn,android23:Qi,androidStock:Xi,opera:ci,chrome:ui,gecko:Cr,safari:Ue,phantom:Ut,opera12:ot,win:fn,ie3d:nn,webkit3d:rn,gecko3d:Ha,any3d:di,mobile:Qn,mobileWebkit:ns,mobileWebkit3d:rs,msPointer:Ua,pointer:Rr,touch:Sl,touchNative:Tr,mobileOpera:Al,mobileGecko:Pl,retina:El,passiveEvents:Cl,canvas:is,svg:Wa,vml:as,inlineSvg:Ji,mac:ea,linux:Zu},ta=Se.msPointer?"MSPointerDown":"pointerdown",Va=Se.msPointer?"MSPointerMove":"pointermove",Rl=Se.msPointer?"MSPointerUp":"pointerup",Tl=Se.msPointer?"MSPointerCancel":"pointercancel",os={touchstart:ta,touchmove:Va,touchend:Rl,touchcancel:Tl},hr={touchstart:pt,touchmove:$a,touchend:$a,touchcancel:$a},Lr={},ss=!1;function Gu(n,o,u){return o==="touchstart"&&Yu(),hr[o]?(u=hr[o].bind(this,u),n.addEventListener(os[o],u,!1),u):(console.warn("wrong event specified:",o),_)}function Ll(n,o,u){if(!os[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(os[o],u,!1)}function Il(n){Lr[n.pointerId]=n}function Nl(n){Lr[n.pointerId]&&(Lr[n.pointerId]=n)}function ls(n){delete Lr[n.pointerId]}function Yu(){ss||(document.addEventListener(ta,Il,!0),document.addEventListener(Va,Nl,!0),document.addEventListener(Rl,ls,!0),document.addEventListener(Tl,ls,!0),ss=!0)}function $a(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var u in Lr)o.touches.push(Lr[u]);o.changedTouches=[o],n(o)}}function pt(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&ht(o),$a(n,o)}function Ku(n){var o={},u,h;for(h in n)u=n[h],o[h]=u&&u.bind?u.bind(n):u;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var cs=200;function Dl(n,o){n.addEventListener("dblclick",o);var u=0,h;function x(A){if(A.detail!==1){h=A.detail;return}if(!(A.pointerType==="mouse"||A.sourceCapabilities&&!A.sourceCapabilities.firesTouchEvents)){var j=Dr(A);if(!(j.some(function(G){return G instanceof HTMLLabelElement&&G.attributes.for})&&!j.some(function(G){return G instanceof HTMLInputElement||G instanceof HTMLSelectElement}))){var V=Date.now();V-u<=cs?(h++,h===2&&o(Ku(A))):h=1,u=V}}}return n.addEventListener("click",x),{dblclick:o,simDblclick:x}}function qa(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var us=mi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),fi=mi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),na=fi==="webkitTransition"||fi==="OTransition"?fi+"End":"transitionend";function _n(n){return typeof n=="string"?document.getElementById(n):n}function ra(n,o){var u=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!u||u==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);u=h?h[o]:null}return u==="auto"?null:u}function He(n,o,u){var h=document.createElement(n);return h.className=o||"",u&&u.appendChild(h),h}function st(n){var o=n.parentNode;o&&o.removeChild(n)}function Za(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function pi(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Xn(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function hi(n,o){if(n.classList!==void 0)return n.classList.contains(o);var u=Ga(n);return u.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(u)}function Be(n,o){if(n.classList!==void 0)for(var u=B(o),h=0,x=u.length;h<x;h++)n.classList.add(u[h]);else if(!hi(n,o)){var A=Ga(n);ds(n,(A?A+" ":"")+o)}}function rt(n,o){n.classList!==void 0?n.classList.remove(o):ds(n,D((" "+Ga(n)+" ").replace(" "+o+" "," ")))}function ds(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function Ga(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Vt(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&jl(n,o)}function jl(n,o){var u=!1,h="DXImageTransform.Microsoft.Alpha";try{u=n.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),u?(u.Enabled=o!==100,u.Opacity=o):n.style.filter+=" progid:"+h+"(opacity="+o+")"}function mi(n){for(var o=document.documentElement.style,u=0;u<n.length;u++)if(n[u]in o)return n[u];return!1}function kn(n,o,u){var h=o||new U(0,0);n.style[us]=(Se.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(u?" scale("+u+")":"")}function vt(n,o){n._leaflet_pos=o,Se.any3d?kn(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function Jn(n){return n._leaflet_pos||new U(0,0)}var Ye,gi,Ya;if("onselectstart"in document)Ye=function(){ze(window,"selectstart",ht)},gi=function(){et(window,"selectstart",ht)};else{var Ir=mi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ye=function(){if(Ir){var n=document.documentElement.style;Ya=n[Ir],n[Ir]="none"}},gi=function(){Ir&&(document.documentElement.style[Ir]=Ya,Ya=void 0)}}function Ka(){ze(window,"dragstart",ht)}function Qa(){et(window,"dragstart",ht)}var ia,aa;function vi(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Sn(),ia=n,aa=n.style.outlineStyle,n.style.outlineStyle="none",ze(window,"keydown",Sn))}function Sn(){ia&&(ia.style.outlineStyle=aa,ia=void 0,aa=void 0,et(window,"keydown",Sn))}function er(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function On(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var oa={__proto__:null,TRANSFORM:us,TRANSITION:fi,TRANSITION_END:na,get:_n,getStyle:ra,create:He,remove:st,empty:Za,toFront:pi,toBack:Xn,hasClass:hi,addClass:Be,removeClass:rt,setClass:ds,getClass:Ga,setOpacity:Vt,testProp:mi,setTransform:kn,setPosition:vt,getPosition:Jn,get disableTextSelection(){return Ye},get enableTextSelection(){return gi},disableImageDrag:Ka,enableImageDrag:Qa,preventOutline:vi,restoreOutline:Sn,getSizedParentNode:er,getScale:On};function ze(n,o,u,h){if(o&&typeof o=="object")for(var x in o)ps(n,x,o[x],u);else{o=B(o);for(var A=0,j=o.length;A<j;A++)ps(n,o[A],u,h)}return this}var Pt="_leaflet_events";function et(n,o,u,h){if(arguments.length===1)fs(n),delete n[Pt];else if(o&&typeof o=="object")for(var x in o)Xa(n,x,o[x],u);else if(o=B(o),arguments.length===2)fs(n,function(V){return K(o,V)!==-1});else for(var A=0,j=o.length;A<j;A++)Xa(n,o[A],u,h);return this}function fs(n,o){for(var u in n[Pt]){var h=u.split(/\d/)[0];(!o||o(h))&&Xa(n,h,null,null,u)}}var Nr={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ps(n,o,u,h){var x=o+b(u)+(h?"_"+b(h):"");if(n[Pt]&&n[Pt][x])return this;var A=function(V){return u.call(h||n,V||window.event)},j=A;!Se.touchNative&&Se.pointer&&o.indexOf("touch")===0?A=Gu(n,o,A):Se.touch&&o==="dblclick"?A=Dl(n,A):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(Nr[o]||o,A,Se.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(A=function(V){V=V||window.event,ca(n,V)&&j(V)},n.addEventListener(Nr[o],A,!1)):n.addEventListener(o,j,!1):n.attachEvent("on"+o,A),n[Pt]=n[Pt]||{},n[Pt][x]=A}function Xa(n,o,u,h,x){x=x||o+b(u)+(h?"_"+b(h):"");var A=n[Pt]&&n[Pt][x];if(!A)return this;!Se.touchNative&&Se.pointer&&o.indexOf("touch")===0?Ll(n,o,A):Se.touch&&o==="dblclick"?qa(n,A):"removeEventListener"in n?n.removeEventListener(Nr[o]||o,A,!1):n.detachEvent("on"+o,A),n[Pt][x]=null}function zn(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Ja(n){return ps(n,"wheel",zn),this}function sa(n){return ze(n,"mousedown touchstart dblclick contextmenu",zn),n._leaflet_disable_click=!0,this}function ht(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function An(n){return ht(n),zn(n),this}function Dr(n){if(n.composedPath)return n.composedPath();for(var o=[],u=n.target;u;)o.push(u),u=u.parentNode;return o}function la(n,o){if(!o)return new U(n.clientX,n.clientY);var u=On(o),h=u.boundingClientRect;return new U((n.clientX-h.left)/u.x-o.clientLeft,(n.clientY-h.top)/u.y-o.clientTop)}var Qu=Se.linux&&Se.chrome?window.devicePixelRatio:Se.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ml(n){return Se.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Qu:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ca(n,o){var u=o.relatedTarget;if(!u)return!0;try{for(;u&&u!==n;)u=u.parentNode}catch{return!1}return u!==n}var eo={__proto__:null,on:ze,off:et,stopPropagation:zn,disableScrollPropagation:Ja,disableClickPropagation:sa,preventDefault:ht,stop:An,getPropagationPath:Dr,getMousePosition:la,getWheelDelta:Ml,isExternalTarget:ca,addListener:ze,removeListener:et},to=Me.extend({run:function(n,o,u,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=Jn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Pe(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,u=this._duration*1e3;o<u?this._runFrame(this._easeOut(o/u),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var u=this._startPos.add(this._offset.multiplyBy(n));o&&u._round(),vt(this._el,u),this.fire("step")},_complete:function(){De(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),Ge=Me.extend({options:{crs:un,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=C(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=p(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(re(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=fi&&Se.any3d&&!Se.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ze(this._proxy,na,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,u){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(re(n),o,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=c({animate:u.animate},u.zoom),u.pan=c({animate:u.animate,duration:u.duration},u.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,u.zoom):this._tryAnimatedPan(n,u.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,u.pan&&u.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Se.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Se.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,u){var h=this.getZoomScale(o),x=this.getSize().divideBy(2),A=n instanceof U?n:this.latLngToContainerPoint(n),j=A.subtract(x).multiplyBy(1-1/h),V=this.containerPointToLatLng(x.add(j));return this.setView(V,o,{zoom:u})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():ne(n);var u=q(o.paddingTopLeft||o.padding||[0,0]),h=q(o.paddingBottomRight||o.padding||[0,0]),x=this.getBoundsZoom(n,!1,u.add(h));if(x=typeof o.maxZoom=="number"?Math.min(o.maxZoom,x):x,x===1/0)return{center:n.getCenter(),zoom:x};var A=h.subtract(u).divideBy(2),j=this.project(n.getSouthWest(),x),V=this.project(n.getNorthEast(),x),G=this.unproject(j.add(V).divideBy(2).add(A),x);return{center:G,zoom:x}},fitBounds:function(n,o){if(n=ne(n),!n.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(n,o);return this.setView(u.center,u.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=q(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new to,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Be(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,u,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,u){if(u=u||{},u.animate===!1||!Se.any3d)return this.setView(n,o,u);this._stop();var h=this.project(this.getCenter()),x=this.project(n),A=this.getSize(),j=this._zoom;n=re(n),o=o===void 0?j:o;var V=Math.max(A.x,A.y),G=V*this.getZoomScale(j,o),te=x.distanceTo(h)||1,he=1.42,Re=he*he;function We(Je){var Ii=Je?-1:1,dd=Je?G:V,fd=G*G-V*V+Ii*Re*Re*te*te,Hr=2*dd*Re*te,Ur=fd/Hr,Wr=Math.sqrt(Ur*Ur+1)-Ur,go=Wr<1e-9?-18:Math.log(Wr);return go}function Et(Je){return(Math.exp(Je)-Math.exp(-Je))/2}function kt(Je){return(Math.exp(Je)+Math.exp(-Je))/2}function sn(Je){return Et(Je)/kt(Je)}var qt=We(0);function Ti(Je){return V*(kt(qt)/kt(qt+he*Je))}function Ds(Je){return V*(kt(qt)*sn(qt+he*Je)-Et(qt))/Re}function _r(Je){return 1-Math.pow(1-Je,1.5)}var rc=Date.now(),Br=(We(1)-qt)/he,Un=u.duration?1e3*u.duration:1e3*Br*.8;function Li(){var Je=(Date.now()-rc)/Un,Ii=_r(Je)*Br;Je<=1?(this._flyToFrame=Pe(Li,this),this._move(this.unproject(h.add(x.subtract(h).multiplyBy(Ds(Ii)/te)),j),this.getScaleZoom(V/Ti(Ii),j),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Li.call(this),this},flyToBounds:function(n,o){var u=this._getBoundsCenterZoom(n,o);return this.flyTo(u.center,u.zoom,o)},setMaxBounds:function(n){return n=ne(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var u=this.getCenter(),h=this._limitCenter(u,this._zoom,ne(n));return u.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var u=q(o.paddingTopLeft||o.padding||[0,0]),h=q(o.paddingBottomRight||o.padding||[0,0]),x=this.project(this.getCenter()),A=this.project(n),j=this.getPixelBounds(),V=H([j.min.add(u),j.max.subtract(h)]),G=V.getSize();if(!V.contains(A)){this._enforcingBounds=!0;var te=A.subtract(V.getCenter()),he=V.extend(A).getSize().subtract(G);x.x+=te.x<0?-he.x:he.x,x.y+=te.y<0?-he.y:he.y,this.panTo(this.unproject(x),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=c({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),h=o.divideBy(2).round(),x=u.divideBy(2).round(),A=h.subtract(x);return!A.x&&!A.y?this:(n.animate&&n.pan?this.panBy(A):(n.pan&&this._rawPanBy(A),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=c({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=p(this._handleGeolocationResponse,this),u=p(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,u,n):navigator.geolocation.getCurrentPosition(o,u,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,u=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,u=n.coords.longitude,h=new le(o,u),x=h.toBounds(n.coords.accuracy*2),A=this._locateOptions;if(A.setView){var j=this.getBoundsZoom(x);this.setView(h,A.maxZoom?Math.min(j,A.maxZoom):j)}var V={latlng:h,bounds:x,timestamp:n.timestamp};for(var G in n.coords)typeof n.coords[G]=="number"&&(V[G]=n.coords[G]);this.fire("locationfound",V)}},addHandler:function(n,o){if(!o)return this;var u=this[n]=new o(this);return this._handlers.push(u),this.options[n]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),st(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(De(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)st(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var u="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=He("div",u,o||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),u=this.unproject(n.getTopRight());return new X(o,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,u){n=ne(n),u=q(u||[0,0]);var h=this.getZoom()||0,x=this.getMinZoom(),A=this.getMaxZoom(),j=n.getNorthWest(),V=n.getSouthEast(),G=this.getSize().subtract(u),te=H(this.project(V,h),this.project(j,h)).getSize(),he=Se.any3d?this.options.zoomSnap:1,Re=G.x/te.x,We=G.y/te.y,Et=o?Math.max(Re,We):Math.min(Re,We);return h=this.getScaleZoom(Et,h),he&&(h=Math.round(h/(he/100))*(he/100),h=o?Math.ceil(h/he)*he:Math.floor(h/he)*he),Math.max(x,Math.min(A,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new U(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var u=this._getTopLeftPoint(n,o);return new R(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var u=this.options.crs;return o=o===void 0?this._zoom:o,u.scale(n)/u.scale(o)},getScaleZoom:function(n,o){var u=this.options.crs;o=o===void 0?this._zoom:o;var h=u.zoom(n*u.scale(o));return isNaN(h)?1/0:h},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(re(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(q(n),o)},layerPointToLatLng:function(n){var o=q(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(re(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(re(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(ne(n))},distance:function(n,o){return this.options.crs.distance(re(n),re(o))},containerPointToLayerPoint:function(n){return q(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return q(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(q(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(re(n)))},mouseEventToContainerPoint:function(n){return la(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=_n(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ze(o,"scroll",this._onScroll,this),this._containerId=b(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Se.any3d,Be(n,"leaflet-container"+(Se.touch?" leaflet-touch":"")+(Se.retina?" leaflet-retina":"")+(Se.ielt9?" leaflet-oldie":"")+(Se.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=ra(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),vt(this._mapPane,new U(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Be(n.markerPane,"leaflet-zoom-hide"),Be(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,u){vt(this._mapPane,new U(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var x=this._zoom!==o;this._moveStart(x,u)._move(n,o)._moveEnd(x),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,u,h){o===void 0&&(o=this._zoom);var x=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?u&&u.pinch&&this.fire("zoom",u):((x||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return De(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){vt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[b(this._container)]=this;var o=n?et:ze;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Se.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){De(this._resizeRequest),this._resizeRequest=Pe(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var u=[],h,x=o==="mouseout"||o==="mouseover",A=n.target||n.srcElement,j=!1;A;){if(h=this._targets[b(A)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){j=!0;break}if(h&&h.listens(o,!0)&&(x&&!ca(A,n)||(u.push(h),x))||A===this._container)break;A=A.parentNode}return!u.length&&!j&&!x&&this.listens(o,!0)&&(u=[this]),u},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var u=n.type;u==="mousedown"&&vi(o),this._fireDOMEvent(n,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,u){if(n.type==="click"){var h=c({},n);h.type="preclick",this._fireDOMEvent(h,h.type,u)}var x=this._findEventTargets(n,o);if(u){for(var A=[],j=0;j<u.length;j++)u[j].listens(o,!0)&&A.push(u[j]);x=A.concat(x)}if(x.length){o==="contextmenu"&&ht(n);var V=x[0],G={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var te=V.getLatLng&&(!V._radius||V._radius<=10);G.containerPoint=te?this.latLngToContainerPoint(V.getLatLng()):this.mouseEventToContainerPoint(n),G.layerPoint=this.containerPointToLayerPoint(G.containerPoint),G.latlng=te?V.getLatLng():this.layerPointToLatLng(G.layerPoint)}for(j=0;j<x.length;j++)if(x[j].fire(o,G,!0),G.originalEvent._stopped||x[j].options.bubblingMouseEvents===!1&&K(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return Jn(this._mapPane)||new U(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var u=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var u=this.getSize()._divideBy(2);return this.project(n,o)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,u){var h=this._getNewPixelOrigin(u,o);return this.project(n,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,o,u){var h=this._getNewPixelOrigin(u,o);return H([this.project(n.getSouthWest(),o)._subtract(h),this.project(n.getNorthWest(),o)._subtract(h),this.project(n.getSouthEast(),o)._subtract(h),this.project(n.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,u){if(!u)return n;var h=this.project(n,o),x=this.getSize().divideBy(2),A=new R(h.subtract(x),h.add(x)),j=this._getBoundsOffset(A,u,o);return Math.abs(j.x)<=1&&Math.abs(j.y)<=1?n:this.unproject(h.add(j),o)},_limitOffset:function(n,o){if(!o)return n;var u=this.getPixelBounds(),h=new R(u.min.add(n),u.max.add(n));return n.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(n,o,u){var h=H(this.project(o.getNorthEast(),u),this.project(o.getSouthWest(),u)),x=h.min.subtract(n.min),A=h.max.subtract(n.max),j=this._rebound(x.x,-A.x),V=this._rebound(x.y,-A.y);return new U(j,V)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),u=this.getMaxZoom(),h=Se.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(o,Math.min(u,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){rt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var u=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,o),!0)},_createAnimProxy:function(){var n=this._proxy=He("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var u=us,h=this._proxy.style[u];kn(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){st(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();kn(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),x=this._getCenterOffset(n)._divideBy(1-1/h);return u.animate!==!0&&!this.getSize().contains(x)?!1:(Pe(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,u,h){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Be(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&rt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function mr(n,o){return new Ge(n,o)}var an=de.extend({options:{position:"topright"},initialize:function(n){C(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),u=this.getPosition(),h=n._controlCorners[u];return Be(o,"leaflet-control"),u.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(st(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),gr=function(n){return new an(n)};Ge.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",u=this._controlContainer=He("div",o+"control-container",this._container);function h(x,A){var j=o+x+" "+o+A;n[x+A]=He("div",j,u)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)st(this._controlCorners[n]);st(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var hs=an.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,u,h){return u<h?-1:h<u?1:0}},initialize:function(n,o,u){C(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return an.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(b(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Be(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Be(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):rt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return rt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=He("div",n),u=this.options.collapsed;o.setAttribute("aria-haspopup",!0),sa(o),Ja(o);var h=this._section=He("section",n+"-list");u&&(this._map.on("click",this.collapse,this),ze(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var x=this._layersLink=He("a",n+"-toggle",o);x.href="#",x.title="Layers",x.setAttribute("role","button"),ze(x,{keydown:function(A){A.keyCode===13&&this._expandSafely()},click:function(A){ht(A),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=He("div",n+"-base",h),this._separator=He("div",n+"-separator",h),this._overlaysList=He("div",n+"-overlays",h),o.appendChild(h)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&b(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,u){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:u}),this.options.sortLayers&&this._layers.sort(p(function(h,x){return this.options.sortFunction(h.layer,x.layer,h.name,x.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Za(this._baseLayersList),Za(this._overlaysList),this._layerControlInputs=[];var n,o,u,h,x=0;for(u=0;u<this._layers.length;u++)h=this._layers[u],this._addItem(h),o=o||h.overlay,n=n||!h.overlay,x+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&x>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(b(n.target)),u=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;u&&this._map.fire(u,o)},_createRadioElement:function(n,o){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=u,h.firstChild},_addItem:function(n){var o=document.createElement("label"),u=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=u):h=this._createRadioElement("leaflet-base-layers_"+b(this),u),this._layerControlInputs.push(h),h.layerId=b(n.layer),ze(h,"click",this._onInputClick,this);var x=document.createElement("span");x.innerHTML=" "+n.name;var A=document.createElement("span");o.appendChild(A),A.appendChild(h),A.appendChild(x);var j=n.overlay?this._overlaysList:this._baseLayersList;return j.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,u,h=[],x=[];this._handlingClick=!0;for(var A=n.length-1;A>=0;A--)o=n[A],u=this._getLayer(o.layerId).layer,o.checked?h.push(u):o.checked||x.push(u);for(A=0;A<x.length;A++)this._map.hasLayer(x[A])&&this._map.removeLayer(x[A]);for(A=0;A<h.length;A++)this._map.hasLayer(h[A])||this._map.addLayer(h[A]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,u,h=this._map.getZoom(),x=n.length-1;x>=0;x--)o=n[x],u=this._getLayer(o.layerId).layer,o.disabled=u.options.minZoom!==void 0&&h<u.options.minZoom||u.options.maxZoom!==void 0&&h>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ze(n,"click",ht),this.expand();var o=this;setTimeout(function(){et(n,"click",ht),o._preventClick=!1})}}),no=function(n,o,u){return new hs(n,o,u)},yi=an.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",u=He("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",u,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,u,h,x){var A=He("a",u,h);return A.innerHTML=n,A.href="#",A.title=o,A.setAttribute("role","button"),A.setAttribute("aria-label",o),sa(A),ze(A,"click",An),ze(A,"click",x,this),ze(A,"click",this._refocusOnMap,this),A},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";rt(this._zoomInButton,o),rt(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Be(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Be(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ge.mergeOptions({zoomControl:!0}),Ge.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new yi,this.addControl(this.zoomControl))});var Ol=function(n){return new yi(n)},$t=an.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",u=He("div",o),h=this.options;return this._addScales(h,o+"-line",u),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),u},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,u){n.metric&&(this._mScale=He("div",o,u)),n.imperial&&(this._iScale=He("div",o,u))},_update:function(){var n=this._map,o=n.getSize().y/2,u=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(u)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),u=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,u,o/n)},_updateImperial:function(n){var o=n*3.2808399,u,h,x;o>5280?(u=o/5280,h=this._getRoundNum(u),this._updateScale(this._iScale,h+" mi",h/u)):(x=this._getRoundNum(o),this._updateScale(this._iScale,x+" ft",x/o))},_updateScale:function(n,o,u){n.style.width=Math.round(this.options.maxWidth*u)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),u=n/o;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,o*u}}),bi=function(n){return new $t(n)},ms='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',jr=an.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Se.inlineSvg?ms+" ":"")+"Leaflet</a>"},initialize:function(n){C(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=He("div","leaflet-control-attribution"),sa(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var u=[];this.options.prefix&&u.push(this.options.prefix),n.length&&u.push(n.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});Ge.mergeOptions({attributionControl:!0}),Ge.addInitHook(function(){this.options.attributionControl&&new jr().addTo(this)});var Xu=function(n){return new jr(n)};an.Layers=hs,an.Zoom=yi,an.Scale=$t,an.Attribution=jr,gr.layers=no,gr.zoom=Ol,gr.scale=bi,gr.attribution=Xu;var pn=de.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});pn.addTo=function(n,o){return n.addHandler(o,this),this};var gs={Events:Le},xi=Se.touch?"touchstart mousedown":"mousedown",Pn=Me.extend({options:{clickTolerance:3},initialize:function(n,o,u,h){C(this,h),this._element=n,this._dragStartTarget=o||n,this._preventOutline=u},enable:function(){this._enabled||(ze(this._dragStartTarget,xi,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pn._dragging===this&&this.finishDrag(!0),et(this._dragStartTarget,xi,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!hi(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Pn._dragging===this&&this.finishDrag();return}if(!(Pn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Pn._dragging=this,this._preventOutline&&vi(this._element),Ka(),Ye(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,u=er(this._element);this._startPoint=new U(o.clientX,o.clientY),this._startPos=Jn(this._element),this._parentScale=On(u);var h=n.type==="mousedown";ze(document,h?"mousemove":"touchmove",this._onMove,this),ze(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,u=new U(o.clientX,o.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,ht(n),this._moved||(this.fire("dragstart"),this._moved=!0,Be(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Be(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),vt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){rt(document.body,"leaflet-dragging"),this._lastTarget&&(rt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),et(document,"mousemove touchmove",this._onMove,this),et(document,"mouseup touchend touchcancel",this._onUp,this),Qa(),gi();var o=this._moved&&this._moving;this._moving=!1,Pn._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function vs(n,o,u){var h,x=[1,4,2,8],A,j,V,G,te,he,Re,We;for(A=0,he=n.length;A<he;A++)n[A]._code=Mr(n[A],o);for(V=0;V<4;V++){for(Re=x[V],h=[],A=0,he=n.length,j=he-1;A<he;j=A++)G=n[A],te=n[j],G._code&Re?te._code&Re||(We=io(te,G,Re,o,u),We._code=Mr(We,o),h.push(We)):(te._code&Re&&(We=io(te,G,Re,o,u),We._code=Mr(We,o),h.push(We)),h.push(G));n=h}return n}function zl(n,o){var u,h,x,A,j,V,G,te,he;if(!n||n.length===0)throw new Error("latlngs not passed");hn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Re=re([0,0]),We=ne(n),Et=We.getNorthWest().distanceTo(We.getSouthWest())*We.getNorthEast().distanceTo(We.getNorthWest());Et<1700&&(Re=ys(n));var kt=n.length,sn=[];for(u=0;u<kt;u++){var qt=re(n[u]);sn.push(o.project(re([qt.lat-Re.lat,qt.lng-Re.lng])))}for(V=G=te=0,u=0,h=kt-1;u<kt;h=u++)x=sn[u],A=sn[h],j=x.y*A.x-A.y*x.x,G+=(x.x+A.x)*j,te+=(x.y+A.y)*j,V+=j*3;V===0?he=sn[0]:he=[G/V,te/V];var Ti=o.unproject(q(he));return re([Ti.lat+Re.lat,Ti.lng+Re.lng])}function ys(n){for(var o=0,u=0,h=0,x=0;x<n.length;x++){var A=re(n[x]);o+=A.lat,u+=A.lng,h++}return re([o/h,u/h])}var Ju={__proto__:null,clipPolygon:vs,polygonCenter:zl,centroid:ys};function ro(n,o){if(!o||!n.length)return n.slice();var u=o*o;return n=nd(n,u),n=td(n,u),n}function Fl(n,o,u){return Math.sqrt(Or(n,o,u,!0))}function ed(n,o,u){return Or(n,o,u)}function td(n,o){var u=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,x=new h(u);x[0]=x[u-1]=1,bs(n,x,o,0,u-1);var A,j=[];for(A=0;A<u;A++)x[A]&&j.push(n[A]);return j}function bs(n,o,u,h,x){var A=0,j,V,G;for(V=h+1;V<=x-1;V++)G=Or(n[V],n[h],n[x],!0),G>A&&(j=V,A=G);A>u&&(o[j]=1,bs(n,o,u,h,j),bs(n,o,u,j,x))}function nd(n,o){for(var u=[n[0]],h=1,x=0,A=n.length;h<A;h++)rd(n[h],n[x])>o&&(u.push(n[h]),x=h);return x<A-1&&u.push(n[A-1]),u}var xs;function Bl(n,o,u,h,x){var A=h?xs:Mr(n,u),j=Mr(o,u),V,G,te;for(xs=j;;){if(!(A|j))return[n,o];if(A&j)return!1;V=A||j,G=io(n,o,V,u,x),te=Mr(G,u),V===A?(n=G,A=te):(o=G,j=te)}}function io(n,o,u,h,x){var A=o.x-n.x,j=o.y-n.y,V=h.min,G=h.max,te,he;return u&8?(te=n.x+A*(G.y-n.y)/j,he=G.y):u&4?(te=n.x+A*(V.y-n.y)/j,he=V.y):u&2?(te=G.x,he=n.y+j*(G.x-n.x)/A):u&1&&(te=V.x,he=n.y+j*(V.x-n.x)/A),new U(te,he,x)}function Mr(n,o){var u=0;return n.x<o.min.x?u|=1:n.x>o.max.x&&(u|=2),n.y<o.min.y?u|=4:n.y>o.max.y&&(u|=8),u}function rd(n,o){var u=o.x-n.x,h=o.y-n.y;return u*u+h*h}function Or(n,o,u,h){var x=o.x,A=o.y,j=u.x-x,V=u.y-A,G=j*j+V*V,te;return G>0&&(te=((n.x-x)*j+(n.y-A)*V)/G,te>1?(x=u.x,A=u.y):te>0&&(x+=j*te,A+=V*te)),j=n.x-x,V=n.y-A,h?j*j+V*V:new U(x,A)}function hn(n){return!F(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Hl(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),hn(n)}function Ul(n,o){var u,h,x,A,j,V,G,te;if(!n||n.length===0)throw new Error("latlngs not passed");hn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var he=re([0,0]),Re=ne(n),We=Re.getNorthWest().distanceTo(Re.getSouthWest())*Re.getNorthEast().distanceTo(Re.getNorthWest());We<1700&&(he=ys(n));var Et=n.length,kt=[];for(u=0;u<Et;u++){var sn=re(n[u]);kt.push(o.project(re([sn.lat-he.lat,sn.lng-he.lng])))}for(u=0,h=0;u<Et-1;u++)h+=kt[u].distanceTo(kt[u+1])/2;if(h===0)te=kt[0];else for(u=0,A=0;u<Et-1;u++)if(j=kt[u],V=kt[u+1],x=j.distanceTo(V),A+=x,A>h){G=(A-h)/x,te=[V.x-G*(V.x-j.x),V.y-G*(V.y-j.y)];break}var qt=o.unproject(q(te));return re([qt.lat+he.lat,qt.lng+he.lng])}var Wl={__proto__:null,simplify:ro,pointToSegmentDistance:Fl,closestPointOnSegment:ed,clipSegment:Bl,_getEdgeIntersection:io,_getBitCode:Mr,_sqClosestPointOnSegment:Or,isFlat:hn,_flat:Hl,polylineCenter:Ul},ws={project:function(n){return new U(n.lng,n.lat)},unproject:function(n){return new le(n.y,n.x)},bounds:new R([-180,-90],[180,90])},_s={R:6378137,R_MINOR:6356752314245179e-9,bounds:new R([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,u=this.R,h=n.lat*o,x=this.R_MINOR/u,A=Math.sqrt(1-x*x),j=A*Math.sin(h),V=Math.tan(Math.PI/4-h/2)/Math.pow((1-j)/(1+j),A/2);return h=-u*Math.log(Math.max(V,1e-10)),new U(n.lng*o*u,h)},unproject:function(n){for(var o=180/Math.PI,u=this.R,h=this.R_MINOR/u,x=Math.sqrt(1-h*h),A=Math.exp(-n.y/u),j=Math.PI/2-2*Math.atan(A),V=0,G=.1,te;V<15&&Math.abs(G)>1e-7;V++)te=x*Math.sin(j),te=Math.pow((1-te)/(1+te),x/2),G=Math.PI/2-2*Math.atan(A*te)-j,j+=G;return new le(j*o,n.x*o/u)}},id={__proto__:null,LonLat:ws,Mercator:_s,SphericalMercator:at},ad=c({},Ce,{code:"EPSG:3395",projection:_s,transformation:(function(){var n=.5/(Math.PI*_s.R);return nt(n,.5,-n,.5)})()}),Vl=c({},Ce,{code:"EPSG:4326",projection:ws,transformation:nt(1/180,1,-1/180,.5)}),od=c({},fe,{projection:ws,transformation:nt(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var u=o.lng-n.lng,h=o.lat-n.lat;return Math.sqrt(u*u+h*h)},infinite:!0});fe.Earth=Ce,fe.EPSG3395=ad,fe.EPSG3857=un,fe.EPSG900913=Mn,fe.EPSG4326=Vl,fe.Simple=od;var En=Me.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[b(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[b(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var u=this.getEvents();o.on(u,this),this.once("remove",function(){o.off(u,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});Ge.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=b(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=b(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return b(n)in this._layers},eachLayer:function(n,o){for(var u in this._layers)n.call(o,this._layers[u]);return this},_addLayers:function(n){n=n?F(n)?n:[n]:[];for(var o=0,u=n.length;o<u;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[b(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=b(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,u=this._getZoomSpan();for(var h in this._zoomBoundLayers){var x=this._zoomBoundLayers[h].options;n=x.minZoom===void 0?n:Math.min(n,x.minZoom),o=x.maxZoom===void 0?o:Math.max(o,x.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var vr=En.extend({initialize:function(n,o){C(this,o),this._layers={};var u,h;if(n)for(u=0,h=n.length;u<h;u++)this.addLayer(n[u])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),u,h;for(u in this._layers)h=this._layers[u],h[n]&&h[n].apply(h,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var u in this._layers)n.call(o,this._layers[u]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return b(n)}}),ua=function(n,o){return new vr(n,o)},tr=vr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),vr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),vr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new X;for(var o in this._layers){var u=this._layers[o];n.extend(u.getBounds?u.getBounds():u.getLatLng())}return n}}),$l=function(n,o){return new tr(n,o)},zr=de.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){C(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var u=this._getIconUrl(n);if(!u){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(u,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,o){var u=this.options,h=u[o+"Size"];typeof h=="number"&&(h=[h,h]);var x=q(h),A=q(o==="shadow"&&u.shadowAnchor||u.iconAnchor||x&&x.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(u.className||""),A&&(n.style.marginLeft=-A.x+"px",n.style.marginTop=-A.y+"px"),x&&(n.style.width=x.x+"px",n.style.height=x.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Se.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function ql(n){return new zr(n)}var wi=zr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof wi.imagePath!="string"&&(wi.imagePath=this._detectIconPath()),(this.options.imagePath||wi.imagePath)+zr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(u,h,x){var A=h.exec(u);return A&&A[x]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=He("div","leaflet-default-icon-path",document.body),o=ra(n,"background-image")||ra(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),ks=pn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Pn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Be(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&rt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,u=o._map,h=this._marker.options.autoPanSpeed,x=this._marker.options.autoPanPadding,A=Jn(o._icon),j=u.getPixelBounds(),V=u.getPixelOrigin(),G=H(j.min._subtract(V).add(x),j.max._subtract(V).subtract(x));if(!G.contains(A)){var te=q((Math.max(G.max.x,A.x)-G.max.x)/(j.max.x-G.max.x)-(Math.min(G.min.x,A.x)-G.min.x)/(j.min.x-G.min.x),(Math.max(G.max.y,A.y)-G.max.y)/(j.max.y-G.max.y)-(Math.min(G.min.y,A.y)-G.min.y)/(j.min.y-G.min.y)).multiplyBy(h);u.panBy(te,{animate:!1}),this._draggable._newPos._add(te),this._draggable._startPos._add(te),vt(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=Pe(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(De(this._panRequest),this._panRequest=Pe(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,u=o._shadow,h=Jn(o._icon),x=o._map.layerPointToLatLng(h);u&&vt(u,h),o._latlng=x,n.latlng=x,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){De(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),nr=En.extend({options:{icon:new wi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){C(this,o),this._latlng=re(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=re(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=n.icon.createIcon(this._icon),h=!1;u!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(u.title=n.title),u.tagName==="IMG"&&(u.alt=n.alt||"")),Be(u,o),n.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ze(u,"focus",this._panOnFocus,this);var x=n.icon.createShadow(this._shadow),A=!1;x!==this._shadow&&(this._removeShadow(),A=!0),x&&(Be(x,o),x.alt=""),this._shadow=x,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),x&&A&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&et(this._icon,"focus",this._panOnFocus,this),st(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&st(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&vt(this._icon,n),this._shadow&&vt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Be(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ks)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ks(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Vt(this._icon,n),this._shadow&&Vt(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,u=o.iconSize?q(o.iconSize):q(0,0),h=o.iconAnchor?q(o.iconAnchor):q(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:u.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function sd(n,o){return new nr(n,o)}var yr=En.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return C(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ao=yr.extend({options:{fill:!0,radius:10},initialize:function(n,o){C(this,o),this._latlng=re(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=re(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return yr.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,u=this._clickTolerance(),h=[n+u,o+u];this._pxBounds=new R(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Zl(n,o){return new ao(n,o)}var oo=ao.extend({initialize:function(n,o,u){if(typeof o=="number"&&(o=c({},u,{radius:o})),C(this,o),this._latlng=re(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new X(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:yr.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,u=this._map,h=u.options.crs;if(h.distance===Ce.distance){var x=Math.PI/180,A=this._mRadius/Ce.R/x,j=u.project([o+A,n]),V=u.project([o-A,n]),G=j.add(V).divideBy(2),te=u.unproject(G).lat,he=Math.acos((Math.cos(A*x)-Math.sin(o*x)*Math.sin(te*x))/(Math.cos(o*x)*Math.cos(te*x)))/x;(isNaN(he)||he===0)&&(he=A/Math.cos(Math.PI/180*o)),this._point=G.subtract(u.getPixelOrigin()),this._radius=isNaN(he)?0:G.x-u.project([te,n-he]).x,this._radiusY=G.y-j.y}else{var Re=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(Re).x}this._updateBounds()}});function da(n,o,u){return new oo(n,o,u)}var on=yr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){C(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,u=null,h=Or,x,A,j=0,V=this._parts.length;j<V;j++)for(var G=this._parts[j],te=1,he=G.length;te<he;te++){x=G[te-1],A=G[te];var Re=h(n,x,A,!0);Re<o&&(o=Re,u=h(n,x,A))}return u&&(u.distance=Math.sqrt(o)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ul(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=re(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new X,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return hn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],u=hn(n),h=0,x=n.length;h<x;h++)u?(o[h]=re(n[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(n[h]);return o},_project:function(){var n=new R;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new U(n,n);this._rawPxBounds&&(this._pxBounds=new R([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,u){var h=n[0]instanceof le,x=n.length,A,j;if(h){for(j=[],A=0;A<x;A++)j[A]=this._map.latLngToLayerPoint(n[A]),u.extend(j[A]);o.push(j)}else for(A=0;A<x;A++)this._projectLatlngs(n[A],o,u)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,u,h,x,A,j,V,G;for(u=0,x=0,A=this._rings.length;u<A;u++)for(G=this._rings[u],h=0,j=G.length;h<j-1;h++)V=Bl(G[h],G[h+1],n,h,!0),V&&(o[x]=o[x]||[],o[x].push(V[0]),(V[1]!==G[h+1]||h===j-2)&&(o[x].push(V[1]),x++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,u=0,h=n.length;u<h;u++)n[u]=ro(n[u],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var u,h,x,A,j,V,G=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(u=0,A=this._parts.length;u<A;u++)for(V=this._parts[u],h=0,j=V.length,x=j-1;h<j;x=h++)if(!(!o&&h===0)&&Fl(n,V[x],V[h])<=G)return!0;return!1}});function ld(n,o){return new on(n,o)}on._flat=Hl;var rr=on.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return zl(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=on.prototype._convertLatLngs.call(this,n),u=o.length;return u>=2&&o[0]instanceof le&&o[0].equals(o[u-1])&&o.pop(),o},_setLatLngs:function(n){on.prototype._setLatLngs.call(this,n),hn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return hn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,u=new U(o,o);if(n=new R(n.min.subtract(u),n.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,x=this._rings.length,A;h<x;h++)A=vs(this._rings[h],n,!0),A.length&&this._parts.push(A)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,u,h,x,A,j,V,G,te;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(A=0,G=this._parts.length;A<G;A++)for(u=this._parts[A],j=0,te=u.length,V=te-1;j<te;V=j++)h=u[j],x=u[V],h.y>n.y!=x.y>n.y&&n.x<(x.x-h.x)*(n.y-h.y)/(x.y-h.y)+h.x&&(o=!o);return o||on.prototype._containsPoint.call(this,n,!0)}});function cd(n,o){return new rr(n,o)}var Fn=tr.extend({initialize:function(n,o){C(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=F(n)?n:n.features,u,h,x;if(o){for(u=0,h=o.length;u<h;u++)x=o[u],(x.geometries||x.geometry||x.features||x.coordinates)&&this.addData(x);return this}var A=this.options;if(A.filter&&!A.filter(n))return this;var j=_i(n,A);return j?(j.feature=fo(n),j.defaultOptions=j.options,this.resetStyle(j),A.onEachFeature&&A.onEachFeature(n,j),this.addLayer(j)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=c({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function _i(n,o){var u=n.type==="Feature"?n.geometry:n,h=u?u.coordinates:null,x=[],A=o&&o.pointToLayer,j=o&&o.coordsToLatLng||lo,V,G,te,he;if(!h&&!u)return null;switch(u.type){case"Point":return V=j(h),so(A,n,V,o);case"MultiPoint":for(te=0,he=h.length;te<he;te++)V=j(h[te]),x.push(so(A,n,V,o));return new tr(x);case"LineString":case"MultiLineString":return G=fa(h,u.type==="LineString"?0:1,j),new on(G,o);case"Polygon":case"MultiPolygon":return G=fa(h,u.type==="Polygon"?1:2,j),new rr(G,o);case"GeometryCollection":for(te=0,he=u.geometries.length;te<he;te++){var Re=_i({geometry:u.geometries[te],type:"Feature",properties:n.properties},o);Re&&x.push(Re)}return new tr(x);case"FeatureCollection":for(te=0,he=u.features.length;te<he;te++){var We=_i(u.features[te],o);We&&x.push(We)}return new tr(x);default:throw new Error("Invalid GeoJSON object.")}}function so(n,o,u,h){return n?n(o,u):new nr(u,h&&h.markersInheritOptions&&h)}function lo(n){return new le(n[1],n[0],n[2])}function fa(n,o,u){for(var h=[],x=0,A=n.length,j;x<A;x++)j=o?fa(n[x],o-1,u):(u||lo)(n[x]),h.push(j);return h}function co(n,o){return n=re(n),n.alt!==void 0?[E(n.lng,o),E(n.lat,o),E(n.alt,o)]:[E(n.lng,o),E(n.lat,o)]}function uo(n,o,u,h){for(var x=[],A=0,j=n.length;A<j;A++)x.push(o?uo(n[A],hn(n[A])?0:o-1,u,h):co(n[A],h));return!o&&u&&x.length>0&&x.push(x[0].slice()),x}function ki(n,o){return n.feature?c({},n.feature,{geometry:o}):fo(o)}function fo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Ss={toGeoJSON:function(n){return ki(this,{type:"Point",coordinates:co(this.getLatLng(),n)})}};nr.include(Ss),oo.include(Ss),ao.include(Ss),on.include({toGeoJSON:function(n){var o=!hn(this._latlngs),u=uo(this._latlngs,o?1:0,!1,n);return ki(this,{type:(o?"Multi":"")+"LineString",coordinates:u})}}),rr.include({toGeoJSON:function(n){var o=!hn(this._latlngs),u=o&&!hn(this._latlngs[0]),h=uo(this._latlngs,u?2:o?1:0,!0,n);return o||(h=[h]),ki(this,{type:(u?"Multi":"")+"Polygon",coordinates:h})}}),vr.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(u){o.push(u.toGeoJSON(n).geometry.coordinates)}),ki(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var u=o==="GeometryCollection",h=[];return this.eachLayer(function(x){if(x.toGeoJSON){var A=x.toGeoJSON(n);if(u)h.push(A.geometry);else{var j=fo(A);j.type==="FeatureCollection"?h.push.apply(h,j.features):h.push(j)}}}),u?ki(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Gl(n,o){return new Fn(n,o)}var Cn=Gl,br=En.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,u){this._url=n,this._bounds=ne(o),C(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Be(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){st(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&pi(this._image),this},bringToBack:function(){return this._map&&Xn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=ne(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:He("img");if(Be(o,"leaflet-image-layer"),this._zoomAnimated&&Be(o,"leaflet-zoom-animated"),this.options.className&&Be(o,this.options.className),o.onselectstart=_,o.onmousemove=_,o.onload=p(this.fire,this,"load"),o.onerror=p(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;kn(this._image,u,o)},_reset:function(){var n=this._image,o=new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=o.getSize();vt(n,o.min),n.style.width=u.x+"px",n.style.height=u.y+"px"},_updateOpacity:function(){Vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Yl=function(n,o,u){return new br(n,o,u)},As=br.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:He("video");if(Be(o,"leaflet-image-layer"),this._zoomAnimated&&Be(o,"leaflet-zoom-animated"),this.options.className&&Be(o,this.options.className),o.onselectstart=_,o.onmousemove=_,o.onloadeddata=p(this.fire,this,"load"),n){for(var u=o.getElementsByTagName("source"),h=[],x=0;x<u.length;x++)h.push(u[x].src);this._url=u.length>0?h:[o.src];return}F(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var A=0;A<this._url.length;A++){var j=He("source");j.src=this._url[A],o.appendChild(j)}}});function Kl(n,o,u){return new As(n,o,u)}var Ps=br.extend({_initImage:function(){var n=this._image=this._url;Be(n,"leaflet-image-layer"),this._zoomAnimated&&Be(n,"leaflet-zoom-animated"),this.options.className&&Be(n,this.options.className),n.onselectstart=_,n.onmousemove=_}});function Es(n,o,u){return new Ps(n,o,u)}var Bn=En.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof le||F(n))?(this._latlng=re(n),C(this,o)):(C(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Vt(this._container,1),this.bringToFront(),this.options.interactive&&(Be(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Vt(this._container,0),this._removeTimeout=setTimeout(p(st,void 0,this._container),200)):st(this._container),this.options.interactive&&(rt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=re(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&pi(this._container),this},bringToBack:function(){return this._map&&Xn(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof tr){o=null;var u=this._source._layers;for(var h in u)if(u[h]._map){o=u[h];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=q(this.options.offset),u=this._getAnchor();this._zoomAnimated?vt(this._container,n.add(u)):o=o.add(n).add(u);var h=this._containerBottom=-o.y,x=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=x+"px"}},_getAnchor:function(){return[0,0]}});Ge.include({_initOverlay:function(n,o,u,h){var x=o;return x instanceof n||(x=new n(h).setContent(o)),u&&x.setLatLng(u),x}}),En.include({_initOverlay:function(n,o,u,h){var x=u;return x instanceof n?(C(x,h),x._source=this):(x=o&&!h?o:new n(h,this),x.setContent(u)),x}});var po=Bn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Bn.prototype.openOn.call(this,n)},onAdd:function(n){Bn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof yr||this._source.on("preclick",zn))},onRemove:function(n){Bn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof yr||this._source.off("preclick",zn))},getEvents:function(){var n=Bn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=He("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=He("div",n+"-content-wrapper",o);if(this._contentNode=He("div",n+"-content",u),sa(o),Ja(this._contentNode),ze(o,"contextmenu",zn),this._tipContainer=He("div",n+"-tip-container",o),this._tip=He("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=He("a",n+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',ze(h,"click",function(x){ht(x),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var u=n.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),o.width=u+1+"px",o.whiteSpace="",o.height="";var h=n.offsetHeight,x=this.options.maxHeight,A="leaflet-popup-scrolled";x&&h>x?(o.height=x+"px",Be(n,A)):rt(n,A),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),u=this._getAnchor();vt(this._container,o.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(ra(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+o,h=this._containerWidth,x=new U(this._containerLeft,-u-this._containerBottom);x._add(Jn(this._container));var A=n.layerPointToContainerPoint(x),j=q(this.options.autoPanPadding),V=q(this.options.autoPanPaddingTopLeft||j),G=q(this.options.autoPanPaddingBottomRight||j),te=n.getSize(),he=0,Re=0;A.x+h+G.x>te.x&&(he=A.x+h-te.x+G.x),A.x-he-V.x<0&&(he=A.x-V.x),A.y+u+G.y>te.y&&(Re=A.y+u-te.y+G.y),A.y-Re-V.y<0&&(Re=A.y-V.y),(he||Re)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([he,Re]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Si=function(n,o){return new po(n,o)};Ge.mergeOptions({closePopupOnClick:!0}),Ge.include({openPopup:function(n,o,u){return this._initOverlay(po,n,o,u).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),En.include({bindPopup:function(n,o){return this._popup=this._initOverlay(po,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){An(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof yr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Ai=Bn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Bn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Bn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Bn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=He("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+b(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,u,h=this._map,x=this._container,A=h.latLngToContainerPoint(h.getCenter()),j=h.layerPointToContainerPoint(n),V=this.options.direction,G=x.offsetWidth,te=x.offsetHeight,he=q(this.options.offset),Re=this._getAnchor();V==="top"?(o=G/2,u=te):V==="bottom"?(o=G/2,u=0):V==="center"?(o=G/2,u=te/2):V==="right"?(o=0,u=te/2):V==="left"?(o=G,u=te/2):j.x<A.x?(V="right",o=0,u=te/2):(V="left",o=G+(he.x+Re.x)*2,u=te/2),n=n.subtract(q(o,u,!0)).add(he).add(Re),rt(x,"leaflet-tooltip-right"),rt(x,"leaflet-tooltip-left"),rt(x,"leaflet-tooltip-top"),rt(x,"leaflet-tooltip-bottom"),Be(x,"leaflet-tooltip-"+V),vt(x,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Vt(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),pa=function(n,o){return new Ai(n,o)};Ge.include({openTooltip:function(n,o,u){return this._initOverlay(Ai,n,o,u).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),En.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ai,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[o](u),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(ze(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ze(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,u,h;this._tooltip.options.sticky&&n.originalEvent&&(u=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(u),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var ho=zr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Za(o),o.appendChild(u.html)):o.innerHTML=u.html!==!1?u.html:"",u.bgPos){var h=q(u.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Ql(n){return new ho(n)}zr.Default=wi;var xr=En.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Se.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){C(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),st(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(pi(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Xn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=w(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof U?n:new U(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,u=-n(-1/0,1/0),h=0,x=o.length,A;h<x;h++)A=o[h].style.zIndex,o[h]!==this._container&&A&&(u=n(u,+A));isFinite(u)&&(this.options.zIndex=u+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Se.ielt9){Vt(this._container,this.options.opacity);var n=+new Date,o=!1,u=!1;for(var h in this._tiles){var x=this._tiles[h];if(!(!x.current||!x.loaded)){var A=Math.min(1,(n-x.loaded)/200);Vt(x.el,A),A<1?o=!0:(x.active?u=!0:this._onOpaqueTile(x),x.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),o&&(De(this._fadeFrame),this._fadeFrame=Pe(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=He("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===n?(this._levels[u].el.style.zIndex=o-Math.abs(n-u),this._onUpdateLevel(u)):(st(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var h=this._levels[n],x=this._map;return h||(h=this._levels[n]={},h.el=He("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=x.project(x.unproject(x.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,x.getCenter(),x.getZoom()),_(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var n,o,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)st(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,u,h){var x=Math.floor(n/2),A=Math.floor(o/2),j=u-1,V=new U(+x,+A);V.z=+j;var G=this._tileCoordsToKey(V),te=this._tiles[G];return te&&te.active?(te.retain=!0,!0):(te&&te.loaded&&(te.retain=!0),j>h?this._retainParent(x,A,j,h):!1)},_retainChildren:function(n,o,u,h){for(var x=2*n;x<2*n+2;x++)for(var A=2*o;A<2*o+2;A++){var j=new U(x,A);j.z=u+1;var V=this._tileCoordsToKey(j),G=this._tiles[V];if(G&&G.active){G.retain=!0;continue}else G&&G.loaded&&(G.retain=!0);u+1<h&&this._retainChildren(x,A,u+1,h)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,u,h){var x=Math.round(o);this.options.maxZoom!==void 0&&x>this.options.maxZoom||this.options.minZoom!==void 0&&x<this.options.minZoom?x=void 0:x=this._clampZoom(x);var A=this.options.updateWhenZooming&&x!==this._tileZoom;(!h||A)&&(this._tileZoom=x,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),x!==void 0&&this._update(n),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var u in this._levels)this._setZoomTransform(this._levels[u],n,o)},_setZoomTransform:function(n,o,u){var h=this._map.getZoomScale(u,n.zoom),x=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,u)).round();Se.any3d?kn(n.el,x,h):vt(n.el,x)},_resetGrid:function(){var n=this._map,o=n.options.crs,u=this._tileSize=this.getTileSize(),h=this._tileZoom,x=this._map.getPixelWorldBounds(this._tileZoom);x&&(this._globalTileRange=this._pxBoundsToTileRange(x)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],h).x/u.x),Math.ceil(n.project([0,o.wrapLng[1]],h).x/u.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],h).y/u.x),Math.ceil(n.project([o.wrapLat[1],0],h).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,u=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(u,this._tileZoom),x=o.project(n,this._tileZoom).floor(),A=o.getSize().divideBy(h*2);return new R(x.subtract(A),x.add(A))},_update:function(n){var o=this._map;if(o){var u=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),x=this._pxBoundsToTileRange(h),A=x.getCenter(),j=[],V=this.options.keepBuffer,G=new R(x.getBottomLeft().subtract([V,-V]),x.getTopRight().add([V,-V]));if(!(isFinite(x.min.x)&&isFinite(x.min.y)&&isFinite(x.max.x)&&isFinite(x.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var te in this._tiles){var he=this._tiles[te].coords;(he.z!==this._tileZoom||!G.contains(new U(he.x,he.y)))&&(this._tiles[te].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(n,u);return}for(var Re=x.min.y;Re<=x.max.y;Re++)for(var We=x.min.x;We<=x.max.x;We++){var Et=new U(We,Re);if(Et.z=this._tileZoom,!!this._isValidTile(Et)){var kt=this._tiles[this._tileCoordsToKey(Et)];kt?kt.current=!0:j.push(Et)}}if(j.sort(function(qt,Ti){return qt.distanceTo(A)-Ti.distanceTo(A)}),j.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var sn=document.createDocumentFragment();for(We=0;We<j.length;We++)this._addTile(j[We],sn);this._level.el.appendChild(sn)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var u=this._globalTileRange;if(!o.wrapLng&&(n.x<u.min.x||n.x>u.max.x)||!o.wrapLat&&(n.y<u.min.y||n.y>u.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return ne(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,u=this.getTileSize(),h=n.scaleBy(u),x=h.add(u),A=o.unproject(h,n.z),j=o.unproject(x,n.z);return[A,j]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),u=new X(o[0],o[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),u=new U(+o[0],+o[1]);return u.z=+o[2],u},_removeTile:function(n){var o=this._tiles[n];o&&(st(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Be(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=_,n.onmousemove=_,Se.ielt9&&this.options.opacity<1&&Vt(n,this.options.opacity)},_addTile:function(n,o){var u=this._getTilePos(n),h=this._tileCoordsToKey(n),x=this.createTile(this._wrapCoords(n),p(this._tileReady,this,n));this._initTile(x),this.createTile.length<2&&Pe(p(this._tileReady,this,n,null,x)),vt(x,u),this._tiles[h]={el:x,coords:n,current:!0},o.appendChild(x),this.fire("tileloadstart",{tile:x,coords:n})},_tileReady:function(n,o,u){o&&this.fire("tileerror",{error:o,tile:u,coords:n});var h=this._tileCoordsToKey(n);u=this._tiles[h],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Vt(u.el,0),De(this._fadeFrame),this._fadeFrame=Pe(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),o||(Be(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Se.ielt9||!this._map._fadeAnimated?Pe(this._pruneTiles,this):setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new U(this._wrapX?k(n.x,this._wrapX):n.x,this._wrapY?k(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new R(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Pi(n){return new xr(n)}var wr=xr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=C(this,o),o.detectRetina&&Se.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var u=document.createElement("img");return ze(u,"load",p(this._tileOnLoad,this,o,u)),ze(u,"error",p(this._tileOnError,this,o,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(n),u},getTileUrl:function(n){var o={r:Se.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=u),o["-y"]=u}return W(this._url,c(o,this.options))},_tileOnLoad:function(n,o){Se.ielt9?setTimeout(p(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,u){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),n(u,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,u=this.options.zoomReverse,h=this.options.zoomOffset;return u&&(n=o-n),n+h},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=_,o.onerror=_,!o.complete)){o.src=ee;var u=this._tiles[n].coords;st(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:u})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",ee),xr.prototype._removeTile.call(this,n)},_tileReady:function(n,o,u){if(!(!this._map||u&&u.getAttribute("src")===ee))return xr.prototype._tileReady.call(this,n,o,u)}});function Cs(n,o){return new wr(n,o)}var ha=wr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var u=c({},this.defaultWmsParams);for(var h in o)h in this.options||(u[h]=o[h]);o=C(this,o);var x=o.detectRetina&&Se.retina?2:1,A=this.getTileSize();u.width=A.x*x,u.height=A.y*x,this.wmsParams=u},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,wr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),u=this._crs,h=H(u.project(o[0]),u.project(o[1])),x=h.min,A=h.max,j=(this._wmsVersion>=1.3&&this._crs===Vl?[x.y,x.x,A.y,A.x]:[x.x,x.y,A.x,A.y]).join(","),V=wr.prototype.getTileUrl.call(this,n);return V+I(this.wmsParams,V,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+j},setParams:function(n,o){return c(this.wmsParams,n),o||this.redraw(),this}});function Xl(n,o){return new ha(n,o)}wr.WMS=ha,Cs.wms=Xl;var Hn=En.extend({options:{padding:.1},initialize:function(n){C(this,n),b(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Be(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var u=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),x=this._map.project(this._center,o),A=h.multiplyBy(-u).add(x).subtract(this._map._getNewPixelOrigin(n,o));Se.any3d?kn(this._container,A,u):vt(this._container,A)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),u=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new R(u,u.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Rs=Hn.extend({options:{tolerance:0},getEvents:function(){var n=Hn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Hn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ze(n,"mousemove",this._onMouseMove,this),ze(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ze(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){De(this._redrawRequest),delete this._ctx,st(this._container),et(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Hn.prototype._update.call(this);var n=this._bounds,o=this._container,u=n.getSize(),h=Se.retina?2:1;vt(o,n.min),o.width=h*u.x,o.height=h*u.y,o.style.width=u.x+"px",o.style.height=u.y+"px",Se.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Hn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[b(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,u=o.next,h=o.prev;u?u.prev=h:this._drawLast=h,h?h.next=u:this._drawFirst=u,delete n._order,delete this._layers[b(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),u=[],h,x;for(x=0;x<o.length;x++){if(h=Number(o[x]),isNaN(h))return;u.push(h)}n.options._dashArray=u}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||Pe(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new R,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var u=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var u,h,x,A,j=n._parts,V=j.length,G=this._ctx;if(V){for(G.beginPath(),u=0;u<V;u++){for(h=0,x=j[u].length;h<x;h++)A=j[u][h],G[h?"lineTo":"moveTo"](A.x,A.y);o&&G.closePath()}this._fillStroke(G,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,u=this._ctx,h=Math.max(Math.round(n._radius),1),x=(Math.max(Math.round(n._radiusY),1)||h)/h;x!==1&&(u.save(),u.scale(1,x)),u.beginPath(),u.arc(o.x,o.y/x,h,0,Math.PI*2,!1),x!==1&&u.restore(),this._fillStroke(u,n)}},_fillStroke:function(n,o){var u=o.options;u.fill&&(n.globalAlpha=u.fillOpacity,n.fillStyle=u.fillColor||u.color,n.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=u.opacity,n.lineWidth=u.weight,n.strokeStyle=u.color,n.lineCap=u.lineCap,n.lineJoin=u.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),u,h,x=this._drawFirst;x;x=x.next)u=x.layer,u.options.interactive&&u._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(u))&&(h=u);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(rt(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var u,h,x=this._drawFirst;x;x=x.next)u=x.layer,u.options.interactive&&u._containsPoint(o)&&(h=u);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(Be(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,u){this._map._fireDOMEvent(o,u||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var u=o.next,h=o.prev;if(u)u.prev=h;else return;h?h.next=u:u&&(this._drawFirst=u),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var u=o.next,h=o.prev;if(h)h.next=u;else return;u?u.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Ts(n){return Se.canvas?new Rs(n):null}var Ei=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Jl={_initContainer:function(){this._container=He("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Hn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Ei("shape");Be(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Ei("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[b(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;st(o),n.removeInteractiveTarget(o),delete this._layers[b(n)]},_updateStyle:function(n){var o=n._stroke,u=n._fill,h=n.options,x=n._container;x.stroked=!!h.stroke,x.filled=!!h.fill,h.stroke?(o||(o=n._stroke=Ei("stroke")),x.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=F(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(x.removeChild(o),n._stroke=null),h.fill?(u||(u=n._fill=Ei("fill")),x.appendChild(u),u.color=h.fillColor||h.color,u.opacity=h.fillOpacity):u&&(x.removeChild(u),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),u=Math.round(n._radius),h=Math.round(n._radiusY||u);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+u+","+h+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){pi(n._container)},_bringToBack:function(n){Xn(n._container)}},Rn=Se.vml?Ei:Lt,Fr=Hn.extend({_initContainer:function(){this._container=Rn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Rn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){st(this._container),et(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Hn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,u.setAttribute("width",o.x),u.setAttribute("height",o.y)),vt(u,n.min),u.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Rn("path");n.options.className&&Be(o,n.options.className),n.options.interactive&&Be(o,"leaflet-interactive"),this._updateStyle(n),this._layers[b(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){st(n._path),n.removeInteractiveTarget(n._path),delete this._layers[b(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,u=n.options;o&&(u.stroke?(o.setAttribute("stroke",u.color),o.setAttribute("stroke-opacity",u.opacity),o.setAttribute("stroke-width",u.weight),o.setAttribute("stroke-linecap",u.lineCap),o.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?o.setAttribute("stroke-dasharray",u.dashArray):o.removeAttribute("stroke-dasharray"),u.dashOffset?o.setAttribute("stroke-dashoffset",u.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),u.fill?(o.setAttribute("fill",u.fillColor||u.color),o.setAttribute("fill-opacity",u.fillOpacity),o.setAttribute("fill-rule",u.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,je(n._parts,o))},_updateCircle:function(n){var o=n._point,u=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||u,x="a"+u+","+h+" 0 1,0 ",A=n._empty()?"M0 0":"M"+(o.x-u)+","+o.y+x+u*2+",0 "+x+-u*2+",0 ";this._setPath(n,A)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){pi(n._path)},_bringToBack:function(n){Xn(n._path)}});Se.vml&&Fr.include(Jl);function mo(n){return Se.svg||Se.vml?new Fr(n):null}Ge.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Ts(n)||mo(n)}});var ec=rr.extend({initialize:function(n,o){rr.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=ne(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function ud(n,o){return new ec(n,o)}Fr.create=Rn,Fr.pointsToPath=je,Fn.geometryToLayer=_i,Fn.coordsToLatLng=lo,Fn.coordsToLatLngs=fa,Fn.latLngToCoords=co,Fn.latLngsToCoords=uo,Fn.getFeature=ki,Fn.asFeature=fo,Ge.mergeOptions({boxZoom:!0});var Ci=pn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ze(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){et(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){st(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ye(),Ka(),this._startPoint=this._map.mouseEventToContainerPoint(n),ze(document,{contextmenu:An,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=He("div","leaflet-zoom-box",this._container),Be(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new R(this._point,this._startPoint),u=o.getSize();vt(this._box,o.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(st(this._box),rt(this._container,"leaflet-crosshair")),gi(),Qa(),et(document,{contextmenu:An,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0);var o=new X(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ge.addInitHook("addHandler","boxZoom",Ci),Ge.mergeOptions({doubleClickZoom:!0});var tc=pn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,u=o.getZoom(),h=o.options.zoomDelta,x=n.originalEvent.shiftKey?u-h:u+h;o.options.doubleClickZoom==="center"?o.setZoom(x):o.setZoomAround(n.containerPoint,x)}});Ge.addInitHook("addHandler","doubleClickZoom",tc),Ge.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ls=pn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Pn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Be(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){rt(this._map._container,"leaflet-grab"),rt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=ne(this._map.options.maxBounds);this._offsetLimit=H(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),u=this._initialWorldOffset,h=this._draggable._newPos.x,x=(h-o+u)%n+o-u,A=(h+o+u)%n-o-u,j=Math.abs(x+u)<Math.abs(A+u)?x:A;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=j},_onDragEnd:function(n){var o=this._map,u=o.options,h=!u.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),h)o.fire("moveend");else{this._prunePositions(+new Date);var x=this._lastPos.subtract(this._positions[0]),A=(this._lastTime-this._times[0])/1e3,j=u.easeLinearity,V=x.multiplyBy(j/A),G=V.distanceTo([0,0]),te=Math.min(u.inertiaMaxSpeed,G),he=V.multiplyBy(te/G),Re=te/(u.inertiaDeceleration*j),We=he.multiplyBy(-Re/2).round();!We.x&&!We.y?o.fire("moveend"):(We=o._limitOffset(We,o.options.maxBounds),Pe(function(){o.panBy(We,{duration:Re,easeLinearity:j,noMoveStart:!0,animate:!0})}))}}});Ge.addInitHook("addHandler","dragging",Ls),Ge.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Is=pn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ze(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),et(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,u=n.scrollTop||o.scrollTop,h=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},u=this.keyCodes,h,x;for(h=0,x=u.left.length;h<x;h++)o[u.left[h]]=[-1*n,0];for(h=0,x=u.right.length;h<x;h++)o[u.right[h]]=[n,0];for(h=0,x=u.down.length;h<x;h++)o[u.down[h]]=[0,n];for(h=0,x=u.up.length;h<x;h++)o[u.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},u=this.keyCodes,h,x;for(h=0,x=u.zoomIn.length;h<x;h++)o[u.zoomIn[h]]=n;for(h=0,x=u.zoomOut.length;h<x;h++)o[u.zoomOut[h]]=-n},_addHooks:function(){ze(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){et(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,u=this._map,h;if(o in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(h=this._panKeys[o],n.shiftKey&&(h=q(h).multiplyBy(3)),u.options.maxBounds&&(h=u._limitOffset(q(h),u.options.maxBounds)),u.options.worldCopyJump){var x=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(h)));u.panTo(x)}else u.panBy(h)}else if(o in this._zoomKeys)u.setZoom(u.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;An(n)}}});Ge.addInitHook("addHandler","keyboard",Is),Ge.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var tt=pn.extend({addHooks:function(){ze(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){et(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=Ml(n),u=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),h),An(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),u=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),x=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,A=u?Math.ceil(x/u)*u:x,j=n._limitZoom(o+(this._delta>0?A:-A))-o;this._delta=0,this._startTime=null,j&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+j):n.setZoomAround(this._lastMousePos,o+j))}});Ge.addInitHook("addHandler","scrollWheelZoom",tt);var Ns=600;Ge.mergeOptions({tapHold:Se.touchNative&&Se.safari&&Se.mobile,tapTolerance:15});var ma=pn.extend({addHooks:function(){ze(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){et(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new U(o.clientX,o.clientY),this._holdTimeout=setTimeout(p(function(){this._cancel(),this._isTapValid()&&(ze(document,"touchend",ht),ze(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Ns),ze(document,"touchend touchcancel contextmenu",this._cancel,this),ze(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){et(document,"touchend",ht),et(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),et(document,"touchend touchcancel contextmenu",this._cancel,this),et(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new U(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var u=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});u._simulated=!0,o.target.dispatchEvent(u)}});Ge.addInitHook("addHandler","tapHold",ma),Ge.mergeOptions({touchZoom:Se.touch,bounceAtZoomLimits:!0});var Ri=pn.extend({addHooks:function(){Be(this._map._container,"leaflet-touch-zoom"),ze(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){rt(this._map._container,"leaflet-touch-zoom"),et(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var u=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(u.add(h)._divideBy(2))),this._startDist=u.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),ze(document,"touchmove",this._onTouchMove,this),ze(document,"touchend touchcancel",this._onTouchEnd,this),ht(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,u=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]),x=u.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(x,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&x<1||this._zoom>o.getMaxZoom()&&x>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,x===1)return}else{var A=u._add(h)._divideBy(2)._subtract(this._centerPoint);if(x===1&&A.x===0&&A.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(A),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),De(this._animRequest);var j=p(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Pe(j,this,!0),ht(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,De(this._animRequest),et(document,"touchmove",this._onTouchMove,this),et(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ge.addInitHook("addHandler","touchZoom",Ri),Ge.BoxZoom=Ci,Ge.DoubleClickZoom=tc,Ge.Drag=Ls,Ge.Keyboard=Is,Ge.ScrollWheelZoom=tt,Ge.TapHold=ma,Ge.TouchZoom=Ri,a.Bounds=R,a.Browser=Se,a.CRS=fe,a.Canvas=Rs,a.Circle=oo,a.CircleMarker=ao,a.Class=de,a.Control=an,a.DivIcon=ho,a.DivOverlay=Bn,a.DomEvent=eo,a.DomUtil=oa,a.Draggable=Pn,a.Evented=Me,a.FeatureGroup=tr,a.GeoJSON=Fn,a.GridLayer=xr,a.Handler=pn,a.Icon=zr,a.ImageOverlay=br,a.LatLng=le,a.LatLngBounds=X,a.Layer=En,a.LayerGroup=vr,a.LineUtil=Wl,a.Map=Ge,a.Marker=nr,a.Mixin=gs,a.Path=yr,a.Point=U,a.PolyUtil=Ju,a.Polygon=rr,a.Polyline=on,a.Popup=po,a.PosAnimation=to,a.Projection=id,a.Rectangle=ec,a.Renderer=Hn,a.SVG=Fr,a.SVGOverlay=Ps,a.TileLayer=wr,a.Tooltip=Ai,a.Transformation=_t,a.Util=Ze,a.VideoOverlay=As,a.bind=p,a.bounds=H,a.canvas=Ts,a.circle=da,a.circleMarker=Zl,a.control=gr,a.divIcon=Ql,a.extend=c,a.featureGroup=$l,a.geoJSON=Gl,a.geoJson=Cn,a.gridLayer=Pi,a.icon=ql,a.imageOverlay=Yl,a.latLng=re,a.latLngBounds=ne,a.layerGroup=ua,a.map=mr,a.marker=sd,a.point=q,a.polygon=cd,a.polyline=ld,a.popup=Si,a.rectangle=ud,a.setOptions=C,a.stamp=b,a.svg=mo,a.svgOverlay=Es,a.tileLayer=Cs,a.tooltip=pa,a.transformation=nt,a.version=l,a.videoOverlay=Kl;var nc=window.L;a.noConflict=function(){return window.L=nc,this},window.L=a}))})(rl,rl.exports)),rl.exports}var xC=bC();const Js=Ep(xC),wC="/assets/residential_img-CdyYsJKp.jfif",_C="/assets/plotted_img-D0NtFHoA.jpg",kC="/assets/commercial_img-D5iM2Zzd.jpg",SC=["Welcome to venturesdirectory.com, India's first real estate network and advertisement platform, ","revolutionizing the property landscape by connecting buyers, sellers, agents, builders, and real estate business partners. ","We provide a dynamic hub where property aspirations meet unparalleled opportunities. Join us to collectively fulfill everyone's dream of owning a property",`.

 Experience BuyRentsale.com through this Product Demo Video Link : https://www.youtube.com/watch?v=adEo19mS2c4

More details and step-by-step guide on venturesdirectory.com `,`PDF Link : https://api.buyrentsale.com/uploads/defaults/buyrentsale.pdf 

Team,
Buyrentsale.com
Mobile:9618641100
Email: support@buyrentsale.com`].join(""),AC=e=>`${e} is your verification OTP for Buyrentsale.com. Please do not share this code with anyone. - AINEXT IT`,PC=e=>`${e} is your verification OTP for Buyrentsale.com. Please do not share this code with anyone. 

Team,
Buyrentsale.com
Mobile: 9618641100
Email: support@buyrentsale.com`,Nv=e=>(e==null?void 0:e.USERID)||(e==null?void 0:e.UserID)||0;function EC({open:e,onClose:i,onSuccess:a}){const l=P.useRef(0),c=P.useRef(null),f=P.useRef(null),[p,g]=P.useState(""),[b,w]=P.useState(""),[k,_]=P.useState(""),[E,D]=P.useState(!1),[B,C]=P.useState(""),[I,N]=P.useState(!1),[W,F]=P.useState([]),[K,ee]=P.useState(!1),[Q,se]=P.useState(!1),[J,me]=P.useState(""),[ke,Pe]=P.useState(""),[De,Ze]=P.useState(""),de=()=>{l.current+=1,g(""),w(""),_(""),D(!1),C(""),N(!1),F([]),ee(!1),se(!1),me(""),Pe(""),Ze("")};P.useEffect(()=>{e&&de()},[e]),P.useEffect(()=>{var R;E&&((R=f.current)==null||R.focus())},[E]);const Ve=()=>{de(),i()},Le=async(R,H)=>{const X=String(Math.floor(1e5+Math.random()*9e5));_(X),w(""),Ze(""),C(""),se(!0);try{if(await AP(AC(X),R),cv(R,PC(X)).catch(()=>{}),H!==l.current)return;D(!0),C(`An OTP has been sent to ${R}. Please check and enter it.`)}catch{H===l.current&&(_(""),me("Unable to send OTP to this mobile number. Please try again later."))}finally{H===l.current&&se(!1)}},Me=async(R,H,X)=>{var Oe;const ne=R==null?void 0:R[0],le=Nv(ne);if(!le){me(X?"USERID is missing in the response. Please try again.":"USERID is missing in existing data. Please try again.");return}const re=X?{UserID:le,UserName:le,UserType:cl,IsVisitor:ne.IsVisitor||!1,IsAgent:ne.IsAgent||!1,IsBuilder:ne.IsBuilder||!1}:{UserID:le,UserName:le,UserType:cl,IsVisitor:ne.IsVisitor||!1,IsAgent:!1,IsBuilder:!1,IsProvider:!1},fe=await kP(le,cl);if(H!==l.current)return;const Ce=(Oe=Of(fe))==null?void 0:Oe[0];if(!Mf(fe)||!Ce){me("Unable to authenticate your details. Please try again later");return}EP(re,Ce),a(Ce)},U=async R=>{if(R.preventDefault(),me(""),!/^\d{10}$/.test(p)){Pe("Please enter a valid 10-digit number.");return}const H=++l.current;se(!0),N(!1);try{const X=await wP(p);if(H!==l.current)return;if(!Mf(X)){me(K0(X,"Unable to validate the mobile number. Please try again.")),se(!1);return}const ne=Of(X),le=Array.isArray(ne)?ne:[];if(F(le),le.length===0){N(!1),se(!1),ee(!0);return}N(!0),await Le(p,H)}catch(X){H===l.current&&(se(!1),me(lv(X,"Something went wrong while validating the mobile number. Please try again later.")))}},ve=async()=>{ee(!1);const R=++l.current;await Le(p,R)},q=async R=>{if(R.preventDefault(),me(""),!/^\d{6}$/.test(b)){Ze("Please enter the OTP sent to your mobile.");return}if(!k||b!==k){me("Invalid OTP. Please try again.");return}const H=++l.current;se(!0);try{if(I)await Me(W,H,!1);else{const X=await _P(p);if(H!==l.current)return;const ne=Of(X),le=Array.isArray(ne)?ne[0]:null;if(!Mf(X)||!le||Nv(le)===0){me("There was an error while saving your details. Please try again later."),se(!1);return}cv(p,SC).catch(()=>{}),await Me(ne,H,!0)}}catch(X){H===l.current&&me(lv(X,"Unable to authenticate your details. Please try again later"))}finally{H===l.current&&se(!1)}};return v.jsxs(v.Fragment,{children:[v.jsx(Pu,{open:e,onOpenChange:R=>{!R&&!K&&Ve()},children:v.jsxs(Eu,{children:[v.jsx(Cu,{className:"vd-login-overlay",style:{zIndex:1600}}),v.jsxs(Au,{className:"vd-login-dialog",style:{zIndex:1610},"aria-describedby":"vd-login-description",onPointerDownOutside:R=>{K&&R.preventDefault()},onEscapeKeyDown:R=>{K&&R.preventDefault()},onOpenAutoFocus:R=>{var H;R.preventDefault(),(H=c.current)==null||H.focus()},children:[v.jsxs("div",{className:"vd-login-header",children:[v.jsx(Uo,{className:"vd-login-title",children:"Verify with OTP"}),v.jsx("button",{type:"button",className:"vd-login-x",onClick:Ve,"aria-label":"Close",children:"×"})]}),v.jsxs("div",{className:"vd-login-body",children:[v.jsx(ul,{id:"vd-login-description",className:"vd-login-sr",children:"Enter your WhatsApp mobile number to receive a one-time password."}),J?v.jsx("div",{className:"vd-login-error",role:"alert",children:J}):null,E?v.jsxs("form",{onSubmit:q,autoComplete:"off",children:[B?v.jsxs("div",{className:"vd-login-otp-info",role:"status",children:[v.jsx("span",{"aria-hidden":"true",children:"✓"}),v.jsx("p",{children:B})]}):null,v.jsxs("div",{className:"vd-login-field",children:[v.jsx("label",{htmlFor:"vd-otp-code",children:"Enter OTP"}),v.jsx("input",{ref:f,id:"vd-otp-code",className:"form-control",type:"text",inputMode:"numeric",maxLength:6,placeholder:"Enter OTP",value:b,onChange:R=>{w(R.target.value.replace(/\D/g,"").slice(0,6)),Ze(""),me("")}}),De?v.jsx("div",{className:"vd-login-field-error",children:De}):null]}),v.jsx("button",{type:"submit",className:"btn btn-primary w-100",disabled:!/^\d{6}$/.test(b)||Q,children:Q?"Please wait...":"Verify OTP"})]}):v.jsxs("form",{onSubmit:U,autoComplete:"off",children:[v.jsxs("div",{className:"vd-login-field",children:[v.jsxs("label",{htmlFor:"vd-mobile-number",children:["Enter Mobile No ",v.jsx("span",{children:"(Whatsapp)"})]}),v.jsx("input",{ref:c,id:"vd-mobile-number",className:"form-control",type:"text",inputMode:"numeric",maxLength:10,placeholder:"10-digit Mobile Number without +91",value:p,onChange:R=>{g(R.target.value.replace(/\D/g,"").slice(0,10)),Pe(""),me("")}}),ke?v.jsx("div",{className:"vd-login-field-error",children:ke}):null]}),v.jsx("button",{type:"submit",className:"btn btn-primary w-100",disabled:!/^\d{10}$/.test(p)||Q,children:Q?"Please wait...":"Send OTP"})]})]}),v.jsxs("div",{className:"vd-login-footer",children:[v.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>{Ve(),window.location.assign("/")},children:"<< Home"}),v.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Ve,children:"Close"})]})]})]})}),v.jsx(Pu,{open:K,onOpenChange:R=>{R||ee(!1)},children:v.jsxs(Eu,{children:[v.jsx(Cu,{className:"vd-login-overlay",style:{zIndex:1800}}),v.jsxs(Au,{className:"vd-login-confirm",style:{zIndex:1810},"aria-describedby":"vd-login-confirm-text",children:[v.jsx(Uo,{className:"vd-login-sr",children:"Create account"}),v.jsx("p",{id:"vd-login-confirm-text",children:"The entered mobile number is not registered. Do you want to create new account ?"}),v.jsxs("div",{className:"vd-login-confirm-actions",children:[v.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>ee(!1),children:"No"}),v.jsx("button",{type:"button",className:"btn btn-success",onClick:ve,children:"Yes"})]})]})]})})]})}const Dv=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,jv=Ib,CC=(e,i)=>a=>{var l;if((i==null?void 0:i.variants)==null)return jv(e,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:c,defaultVariants:f}=i,p=Object.keys(c).map(w=>{const k=a==null?void 0:a[w],_=f==null?void 0:f[w];if(k===null)return null;const E=Dv(k)||Dv(_);return c[w][E]}),g=a&&Object.entries(a).reduce((w,k)=>{let[_,E]=k;return E===void 0||(w[_]=E),w},{}),b=i==null||(l=i.compoundVariants)===null||l===void 0?void 0:l.reduce((w,k)=>{let{class:_,className:E,...D}=k;return Object.entries(D).every(B=>{let[C,I]=B;return Array.isArray(I)?I.includes({...f,...g}[C]):{...f,...g}[C]===I})?[...w,_,E]:w},[]);return jv(e,p,b,a==null?void 0:a.class,a==null?void 0:a.className)},RC=CC("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function TC({className:e,variant:i,size:a,asChild:l=!1,...c}){const f=l?Wu:"button";return v.jsx(f,{"data-slot":"button",className:es(RC({variant:i,size:a,className:e})),...c})}const LC="https://images.unsplash.com/photo-1632400990400-416d5460f337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",IC=(e,i)=>{const a=[wt(e,["Category","ProjectCategory"]),i].map(l=>Xt(l).toLowerCase()).join(" ");return a.includes("plotted")?_C:a.includes("commercial")?kC:a.includes("residential")?wC:(e==null?void 0:e.ImageUrl)||(e==null?void 0:e.ThumbnailUrl)||LC},NC={"new launch":"new-launch","ready to move":"ready","under construction":"construction"},Ca=12,Yf=500,nu={minLatitude:6.5,maxLatitude:37.5,minLongitude:68,maxLongitude:97.5};function zo({icon:e,title:i,subtitle:a,children:l}){return v.jsxs("section",{style:{padding:18,border:"1px solid #e1e8f0",borderRadius:15,background:"#fff",boxShadow:"0 4px 16px rgba(20,44,78,.05)"},children:[v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,marginBottom:16},children:[v.jsx("span",{style:{width:38,height:38,display:"grid",placeItems:"center",flexShrink:0,borderRadius:10,background:"#edf3fb",color:"#123b70"},children:v.jsx(Ke,{icon:e})}),v.jsxs("div",{children:[v.jsx("h3",{style:{margin:0,color:"#17243a",fontSize:17,fontWeight:750},children:i}),v.jsx("p",{style:{margin:"3px 0 0",color:"#66758b",fontSize:12.5},children:a})]})]}),l]})}function el({fields:e,columns:i=3}){return v.jsx("div",{className:"vd-project-detail-fields",style:{"--detail-columns":i},children:e.map(({label:a,value:l})=>v.jsxs("div",{style:{minWidth:0,padding:12,border:"1px solid #eaf0f6",borderRadius:10,background:"#f8fafd"},children:[v.jsx("div",{style:{marginBottom:5,color:"#66758b",fontSize:11.5},children:a}),v.jsx("div",{style:{color:l==="-"||l==="Not supplied by API"?"#8995a5":"#17243a",fontSize:13.5,fontWeight:700,overflowWrap:"anywhere",whiteSpace:"pre-wrap"},children:l||"-"})]},a))})}function DC({fields:e}){return v.jsx("div",{className:"vd-project-status-list",children:e.map(({label:i,value:a})=>{const l=a==="No"?"-":a;return v.jsxs("div",{style:{padding:13,border:"1px solid #e1e8f0",borderRadius:10},children:[v.jsx("div",{style:{marginBottom:7,color:"#66758b",fontSize:11.5},children:i}),v.jsx("div",{style:{color:l==="Yes"?"#16845b":"#59677b",fontSize:13,fontWeight:750},children:l||"-"})]},i)})})}const jC=e=>{if(!e)return"-";const a=String(e).trim().match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);if(!a)return pu(e);const[,l,c,f,p,g]=a,w=new Date(Number(l),Number(c)-1,Number(f)).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return p?`${w} · ${p}:${g}`:w},Kf=(e,i=2)=>{if(e==null||e==="")return"-";const a=Number(e);return Number.isFinite(a)?new Intl.NumberFormat("en-IN",{maximumFractionDigits:i}).format(a):Xt(e)};function MC({p:e,faved:i,onFav:a,onDetails:l}){return v.jsxs("div",{className:"vd-card",children:[v.jsxs("div",{className:"vd-card-thumb",children:[v.jsx("img",{src:e.img,alt:e.name}),v.jsx("span",{className:`vd-status-badge ${e.statusClass}`,children:e.status}),v.jsx("button",{className:`vd-fav-btn ${i?"active":""}`,onClick:a,"aria-label":"Favourite",children:v.jsx(Ke,{icon:SS})}),v.jsx("span",{className:"vd-card-type",children:e.projectType})]}),v.jsxs("div",{className:"vd-card-body",children:[v.jsx("div",{className:"vd-card-meta",children:v.jsx("div",{className:"vd-card-tags",children:v.jsx("div",{className:"vd-tags",children:e.tags.map(c=>v.jsx("span",{className:`vd-tag ${c.key}`,title:c.tooltip,children:c.label},c.key))})})}),v.jsx("div",{style:{display:"flex",alignItems:"flex-start",marginTop:5,justifyContent:"space-between",gap:10},children:v.jsxs("div",{style:{minWidth:0},children:[v.jsx("div",{className:"vd-card-name",style:{marginBottom:2},children:e.name}),v.jsx("div",{className:"vd-card-builder",style:{fontSize:12.5,color:"#667085"},children:e.builder})]})}),v.jsxs("div",{className:"vd-card-loc",style:{marginTop:2,display:"flex",alignItems:"flex-start",gap:6,fontSize:12.5,color:"#475467",lineHeight:1.4},children:[v.jsx(Ke,{icon:sl,style:{fontSize:10,color:"#98a2b3",marginTop:3,flexShrink:0}}),v.jsx("span",{style:{wordBreak:"break-word"},children:e.location})]}),v.jsxs("div",{className:"pjt_details",style:{marginTop:5,display:"grid",gap:8,fontSize:12.5,color:"#344054",background:"#f8fafc",border:"1px solid #e4e7ec",borderRadius:12,padding:"10px 12px"},children:[v.jsxs("div",{className:"brb",style:{display:"grid",gridTemplateColumns:"1fr",rowGap:3},children:[v.jsx("strong",{style:{color:"#475467",fontWeight:600},children:e.registrationDisplay.label}),v.jsx("span",{style:{fontWeight:700,color:"#0f172a",overflowWrap:"anywhere"},children:e.registrationDisplay.value})]}),v.jsxs("div",{className:"brb",style:{display:"grid",gridTemplateColumns:"1fr",rowGap:3},children:[v.jsx("strong",{style:{color:"#475467",fontWeight:600},children:"Proposed Completion"}),v.jsx("span",{style:{fontWeight:700,color:"#0f172a"},children:e.proposedCompletionDate})]}),v.jsxs("div",{className:"brb",style:{display:"grid",gridTemplateColumns:"1fr",rowGap:3},children:[v.jsx("strong",{style:{color:"#475467",fontWeight:600},children:"LP / Plan Approval No."}),v.jsx("span",{style:{fontWeight:700,color:"#0f172a",overflowWrap:"anywhere"},children:e.planApprovalNumber})]})]}),v.jsxs("div",{className:"vd-ai-chip",style:{display:"none"},children:[v.jsx(Ke,{icon:Yp,style:{fontSize:10,flexShrink:0}}),v.jsxs("span",{children:[v.jsx("strong",{children:"AI Insight:"})," ",e.aiLabel,e.aiDetail?v.jsxs(v.Fragment,{children:[" | ",v.jsx("span",{style:{fontWeight:400},children:e.aiDetail})]}):null]})]}),v.jsx("div",{className:"vd-card-actions vd-card-actions-detail",style:{marginTop:12,display:"flex",justifyContent:"center"},children:v.jsxs("button",{className:"vd-act-btn detail",type:"button",onClick:l,style:{borderRadius:10,fontWeight:700},children:["View Details",v.jsx(Ke,{icon:x0,"aria-hidden":"true"})]})})]})]})}function OC({projects:e,error:i}){const a=P.useRef(null),l=P.useMemo(()=>e.map(c=>({project:c,coordinates:Pp(c.projectData)})).filter(({coordinates:c})=>c),[e]);return P.useEffect(()=>{if(i||!a.current||l.length===0)return;const c=Js.map(a.current,{scrollWheelZoom:!1});Js.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(c);const f=Js.divIcon({className:"vd-leaflet-marker-icon",html:'<span class="vd-leaflet-pin"></span>',iconSize:[24,32],iconAnchor:[12,30]}),p=Js.latLngBounds([]);l.forEach(({project:b,coordinates:w})=>{const k=Js.marker([w.latitude,w.longitude],{icon:f}).addTo(c),_=document.createElement("div"),E=document.createElement("strong");E.textContent=b.name;const D=document.createElement("a");D.href=`https://www.google.com/maps?q=${w.latitude},${w.longitude}`,D.target="_blank",D.rel="noopener noreferrer",D.textContent="Open in Google Maps",_.append(E,document.createElement("br"),D),k.bindPopup(_),p.extend([w.latitude,w.longitude])}),p.isValid()&&c.fitBounds(p,{padding:[24,24],maxZoom:14});const g=new ResizeObserver(()=>c.invalidateSize());return g.observe(a.current),()=>{g.disconnect(),c.remove()}},[i,l]),i?v.jsx("div",{className:"vd-map-wrap vd-map-empty",role:"alert",children:i}):l.length?v.jsxs("div",{className:"vd-map-wrap",children:[v.jsx("div",{ref:a,className:"vd-leaflet-map",role:"application","aria-label":`Map showing ${l.length} project locations`}),v.jsxs("div",{className:"vd-map-status",role:"status",children:["Showing ",l.length," project locations"]})]}):v.jsx("div",{className:"vd-map-wrap vd-map-empty",role:"status",children:"No projects with valid map coordinates are available for this search."})}const pu=e=>{if(e==null||e==="")return"-";const i=String(e).trim();if(!i||/^(n\/a|null|undefined)$/i.test(i))return"-";const a=Number(i),l=Number.isFinite(a)&&a>=2e4&&a<=1e5?new Date(Date.UTC(1899,11,30)+Math.floor(a)*864e5):new Date(i);return Number.isNaN(l.getTime())?i:l.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})},$b=e=>{if(Array.isArray(e))return Array.from(new Set(e.flatMap(i=>$b(i))));if(typeof e=="string"){const i=e.replace(/\bRERAHMDA\b/gi,"RERA, HMDA");return Array.from(new Set(i.split(/[,|]/).map(a=>a.trim()).filter(Boolean)))}return[]},Qf=e=>typeof e=="boolean"?e:typeof e=="number"?e===1:typeof e=="string"&&/^(true|1|yes|y)$/i.test(e.trim()),zC=e=>{const i=Xt(e==null?void 0:e.ProjectStatus),a=i==="-"?"":i;if(Qf(e==null?void 0:e.IsNewLaunch))return{status:a||"New Launch",statusClass:"new-launch"};if(Qf(e==null?void 0:e.IsReadyToMove))return{status:a||"Ready to Move",statusClass:"ready"};if(Qf(e==null?void 0:e.IsUnderConstruction))return{status:a||"Under Construction",statusClass:"construction"};const l=a||"Project",c=NC[String(l).toLowerCase()]||"construction";return{status:l,statusClass:c}},qb=e=>{const i=Tu(e,["PlanApprovalNumber","PlanApprovalNo","PlanNo","ApprovalNumber","LpApprovalNumber","LpNumber","LPNumber"]);return String(i).trim()},Mv=(e,i,a)=>{const l=e&&e!=="All Builders"?e:"",c=(i||"").trim(),f=(a||"").trim();return c?`reraNo:${c}`:f||(l?`builderName:${l}`:"")},Ap=e=>String(e||"").toLowerCase().replace(/[^a-z0-9]/g,""),Xt=e=>{if(e==null||e==="")return"-";if(Array.isArray(e))return Array.from(new Set(e.map(a=>Xt(a)))).filter(a=>a!=="-").join(", ")||"-";if(typeof e=="object")return JSON.stringify(e);const i=String(e).trim();return!i||/^(n\/a|na|null|undefined|no)$/i.test(i)?"-":i},Zb=(e,i)=>{if(!e||typeof e!="object")return;const a=i.map(Ap),l=[e],c=new Set;for(;l.length>0;){const f=l.pop();if(!(!f||typeof f!="object"||c.has(f))){c.add(f);for(const[p,g]of Object.entries(f)){const b=Ap(p);if(a.includes(b)&&g!==null&&g!==void 0&&String(g).trim()!=="")return{key:p,value:g};g&&typeof g=="object"&&l.push(g)}}}},wt=(e,i)=>{var a;return(a=Zb(e,i))==null?void 0:a.value},Pp=e=>{const i=wt(e,["Latitude","Lat"]),a=wt(e,["Longitude","Long","Lng"]);if(i==null||String(i).trim()===""||a===void 0||a===null||String(a).trim()==="")return null;const l=Number(i),c=Number(a);if(!Number.isFinite(l)||!Number.isFinite(c)||l<-90||l>90||c<-180||c>180)return null;const f=(p,g)=>p>=nu.minLatitude&&p<=nu.maxLatitude&&g>=nu.minLongitude&&g<=nu.maxLongitude;return l===0&&c===0?null:f(l,c)?{latitude:l,longitude:c}:f(c,l)?{latitude:c,longitude:l}:null},Tu=(e,i)=>Xt(wt(e,i)),ei=(e,i)=>{const a=wt(e,i);if(a===void 0)return"-";if(typeof a=="boolean"||typeof a=="number"||typeof a=="string"){const l=String(a).trim().toLowerCase();if(["true","1","yes","y"].includes(l))return"Yes";if(["false","0","no","n"].includes(l))return"-"}return Xt(a)},Gb=e=>{const i=Array.isArray(e)?e:e&&typeof e=="object"?Object.values(e):String(e||"").split(","),a=new Map;return i.forEach(l=>{const c=Xt(l);c!=="-"&&!/^(null|undefined)$/i.test(c)&&a.set(c.toLowerCase(),c)}),Array.from(a.values()).join(", ")},Ov=(e,i)=>{const{status:a,statusClass:l}=zC(e),c=$b(e==null?void 0:e.Approvals),f=qb(e),p=Xt((e==null?void 0:e.ProjectType)||(e==null?void 0:e.Type)),g=pu(wt(e,["ProposedDateOfCompletion","ProposedCompletionDate","ProposedCompletion","ExpectedCompletionDate"])),b=Tu(e,["RERANo","ReraNumber","ReraNo","ReraId","ReraRegistrationNumber","RegistrationNumber"]),w=Tu(e,["CertificateNumber","ReraCertificateNumber","ReraCertificateNo","RegistrationCertificateNumber","CertificateNo"]),k=b!=="-"?{label:"RERA Registration No.",value:b}:{label:"Application Number",value:w},_=pu(wt(e,["CreatedDate","CreatedOn","CreateDate"])),E=pu(wt(e,["UpdatedDate","UpdatedOn","ModifiedDate","ModifiedOn"])),B=wt(e,["FullAddress","Address","ProjectAddress"])??[wt(e,["AddressLine1"]),wt(e,["AddressLine2"]),wt(e,["Street","Locality"]),wt(e,["Village","VillageName"]),wt(e,["Mandal","Taluk"]),wt(e,["District"]),wt(e,["State"]),wt(e,["Pincode","PinCode","PostalCode"])].filter(C=>C!==void 0);return{id:(e==null?void 0:e.ProjectId)||(e==null?void 0:e.Id)||`${(e==null?void 0:e.ProjectName)||"project"}-${i}`,status:a,statusClass:l,img:IC(e,p),name:Xt(e==null?void 0:e.ProjectName)==="-"?"Unnamed Project":Xt(e==null?void 0:e.ProjectName),builder:Xt(e==null?void 0:e.BuilderName)==="-"?"Builder details unavailable":Xt(e==null?void 0:e.BuilderName),location:Gb(B)||"Location unavailable",projectType:p,proposedCompletionDate:g,registrationDisplay:k,planApprovalNumber:f||"-",createdDate:_,updatedDate:E,reraValidity:ei(e,["ReraValidity","IsReraValid","ReraValid","ReraValidTill","IsReraVerified","ReraStatus"]),projectData:e,tags:c.map((C,I)=>({key:`${C.toLowerCase().replace(/\s+/g,"-")}-${I}`,label:C,tooltip:f?`Plan Approval Number: ${f}`:"Plan Approval Number: -"})),aiLabel:Xt(e==null?void 0:e.AIInsight)==="-"?"No AI insight available":Xt(e==null?void 0:e.AIInsight),aiDetail:""}};function FC({builderName:e="All Builders",reraNo:i="",searchQuery:a="",filters:l={}}){const[c,f]=P.useState("list"),[p,g]=P.useState(new Set),[b,w]=P.useState([]),[k,_]=P.useState([]),[E,D]=P.useState(""),[B,C]=P.useState(0),[I,N]=P.useState(1),[W,F]=P.useState(!1),[K,ee]=P.useState(""),[Q,se]=P.useState(null),[J,me]=P.useState(null),[ke,Pe]=P.useState(!1),[De,Ze]=P.useState(""),de=P.useMemo(()=>b.map(Ov),[b]),Ve=P.useMemo(()=>{if(de.length<=Ca)return de;const Ue=(I-1)*Ca;return de.slice(Ue,Ue+Ca)},[de,I]),Le=P.useMemo(()=>k.map(Ov).filter(Ue=>Pp(Ue.projectData)),[k]),Me=Math.max(1,Math.ceil(B/Ca)),U=I>1,ve=B>I*Ca,q=P.useCallback(async(Ue,Ut,ot,fn,nn)=>{F(!0),ee("");try{const rn=await ll({query:Mv(Ut,ot,fn),pageNumber:Ue,pageSize:Ca,filters:nn});w(rn.items),C(rn.totalCount)}catch(rn){w([]),C(0),ee((rn==null?void 0:rn.message)||"Unable to load projects right now.")}finally{F(!1)}},[]);P.useEffect(()=>{N(1)},[e,i,a,l]),P.useEffect(()=>{q(I,e,i,a,l)},[e,l,q,I,i,a]),P.useEffect(()=>{let Ue=!0;return(async()=>{_([]),D("");try{const ot=Mv(e,i,a),fn=await ll({query:ot,pageNumber:1,pageSize:Yf,filters:l});let nn=fn.items;if(fn.totalCount>fn.items.length){const rn=Math.ceil(fn.totalCount/Yf),Ha=await Promise.all(Array.from({length:rn-1},(di,Qn)=>ll({query:ot,pageNumber:Qn+2,pageSize:Yf,filters:l})));nn=nn.concat(...Ha.map(di=>di.items))}Ue&&_(nn)}catch(ot){Ue&&D((ot==null?void 0:ot.message)||"Unable to load all project locations.")}})(),()=>{Ue=!1}},[e,l,i,a]);const R=Ue=>g(Ut=>{const ot=new Set(Ut);return ot.has(Ue)?ot.delete(Ue):ot.add(Ue),ot}),H=Q==null?void 0:Q.projectData,X=Ue=>Tu(H,Ue),ne=Ue=>jC(wt(H,Ue)),le=Zb(H,["TotalAreaSqm","TotalAreaSqM","TotalArea","TotalProjectArea","ProjectArea","TotalLandArea","LandArea"]),re=le==null?void 0:le.value,fe=Ap(le==null?void 0:le.key),Ce=re===void 0?"-":`${Kf(re)}${fe==="totalareasqm"?" sqm":""}`,Oe=Pp(H),_t=!!Oe?`https://www.google.com/maps?q=${Oe.latitude},${Oe.longitude}`:"",nt=X(["ApprovalAuthority","ApprovalAuthorityName","ApprovalAuthorities","AuthorityName","PlanApprovalAuthority"]),un=(Q==null?void 0:Q.tags.map(Ue=>Ue.label).join(", "))||"-",Mn=X(["RERANo","ReraNumber","ReraNo","ReraId","ReraRegistrationNumber","RegistrationNumber"]),Lt=qb(H)||"-",je=X(["CertificateNumber","ReraCertificateNumber","ReraCertificateNo","RegistrationCertificateNumber","CertificateNo"]),ft=X(["AddressForOfficialCommunication","OfficialCommunicationAddress","CommunicationAddress","AddressForCommunication","OfficialAddress"]),At=[{label:"RERA Registered",value:ei(H,["HasRERA"])},{label:"Bank Loan Available",value:ei(H,["HasBankLoan","BankLoanAvailable","IsBankLoanAvailable"])},{label:"New Launch",value:ei(H,["IsNewLaunch"])},{label:"Ready to Move",value:ei(H,["IsReadyToMove","ReadyToMove"])},{label:"Under Construction",value:ei(H,["IsUnderConstruction","UnderConstruction"])}],en=[{label:"RERA Registration Number",value:Mn},{label:"LP / Plan Approval Number",value:Lt},{label:"Application Number",value:je},{label:"Approval Authority",value:nt},{label:"Approvals Listed",value:un},{label:"RERA Validity Flag",value:ei(H,["IsRERAValid","ReraValidity","IsReraValid","ReraValid","IsReraVerified"])},{label:"RERA Registered Date",value:ne(["RERARegisteredDate","ReraRegisteredDate"])},{label:"RERA Expiry Date",value:ne(["RERAExpiryDate","ReraExpiryDate","ReraValidTill"])},{label:"Has RERA (Database Flag)",value:ei(H,["HasRERA"])}],tn=[{label:"Total Land Area",value:Ce},{label:"Built-up Area",value:Kf(wt(H,["BuiltupArea","BuiltUpArea","BuiltUpAreaDetails","BuiltUpAreaSqFt","BuiltUpAreaSqM"]))},{label:"Total Units / Plots",value:Kf(wt(H,["TotalUnits","TotalUnit","TotalNumberOfUnits","NumberOfUnits","NoOfUnits","UnitCount"]),0)},{label:"Project Type",value:(Q==null?void 0:Q.projectType)||"-"},{label:"Project Status",value:(Q==null?void 0:Q.status)||"-"},{label:"Project Record ID",value:X(["Id","ProjectId"])}],Ht=[{label:"Proposed Date of Completion",value:ne(["ProposedCompletion","ProposedDateOfCompletion","ProposedCompletionDate","ExpectedCompletionDate"])},{label:"Revised Proposed Completion",value:ne(["RevisedCompletion","RevisedProposedDateOfCompletion","RevisedProposedCompletionDate","RevisedCompletionDate"])},{label:"Created Date",value:ne(["CreatedDate","CreatedOn","CreateDate"])},{label:"Last Updated Date",value:ne(["UpdatedDate","UpdatedOn","ModifiedDate","ModifiedOn"])}],dn=[{label:"Full Address",value:(Q==null?void 0:Q.location)||"-"},{label:"Locality",value:X(["Locality","Street","AddressLine1"])},{label:"Village",value:X(["Village","VillageName"])},{label:"Mandal",value:X(["Mandal","Taluk"])},{label:"District",value:X(["District"])},{label:"Pincode",value:X(["Pincode","PinCode","PostalCode","ZipCode"])},{label:"Latitude",value:Xt(Oe==null?void 0:Oe.latitude)},{label:"Longitude",value:Xt(Oe==null?void 0:Oe.longitude)}],Qi=[{label:"Feature",value:X(["Feature","Features"])},{label:"Official Communication Address",value:ft==="-"?"Not supplied by API":Gb(wt(H,["AddressForOfficialCommunication","OfficialCommunicationAddress","CommunicationAddress","AddressForCommunication","OfficialAddress"]))},{label:"Database Approval Date",value:"Not supplied by API"}],Ba=async()=>{var ot;if(!Q)return;const Ut=[["Project",Q.name],["Builder",Q.builder],["Project ID",X(["Id","ProjectId"])],["Project Type",Q.projectType],["Project Status",Q.status],["Address",Q.location],["RERA Number",Mn],["LP Number",Lt],["Application Number",je],["Approval Authority",nt],["Approvals",un],["Land Area",Ce],["Built-up Area",tn[1].value],["Total Units",tn[2].value],["Proposed Completion",Ht[0].value],["Revised Completion",Ht[1].value],...At.map(({label:fn,value:nn})=>[fn,nn]),["AI Insight",Q.aiLabel]].map(([fn,nn])=>`${fn}: ${nn}`).join(`
`);if(!((ot=navigator.clipboard)!=null&&ot.writeText)){window.prompt("Copy project details:",Ut),Ze("Project details are ready to copy.");return}try{await navigator.clipboard.writeText(Ut),Ze("Project details copied.")}catch{Ze("Unable to copy details. Check browser clipboard permissions.")}},Xi=Ue=>{Ze(""),se(Ue)},ci=Ue=>{if(Q0()){Xi(Ue);return}me(Ue),Pe(!0)},ui=()=>{Pe(!1),J&&Xi(J),me(null)},Cr=()=>{Pe(!1),me(null)};return v.jsxs("section",{style:{padding:"0 20px"},children:[v.jsxs("div",{className:"vd-section-bar",children:[v.jsxs("p",{className:"vd-result-label mb-0",children:["Showing ",v.jsx("strong",{children:B})," projects matching your search",W?" (Loading...)":""]}),v.jsxs("div",{className:"vd-view-toggle",role:"tablist","aria-label":"Project display",children:[v.jsxs("button",{type:"button",role:"tab",id:"projects-list-tab","aria-selected":c==="list","aria-controls":"projects-list-panel",className:`vd-view-btn${c==="list"?" active":""}`,onClick:()=>f("list"),children:[v.jsx(Ke,{icon:Fg,"aria-hidden":"true"}),"List View"]}),v.jsxs("button",{type:"button",role:"tab",id:"projects-map-tab","aria-selected":c==="map","aria-controls":"projects-map-panel",className:`vd-view-btn${c==="map"?" active":""}`,onClick:()=>f("map"),children:[v.jsx(Ke,{icon:ES,"aria-hidden":"true"}),"Map View"]})]})]}),c==="list"&&v.jsx("div",{id:"projects-list-panel",role:"tabpanel","aria-labelledby":"projects-list-tab",className:"row g-3",children:v.jsxs("div",{className:"col-12",children:[K?v.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:14,padding:16,color:"#b42318"},children:[v.jsx("div",{children:K}),v.jsx("button",{className:"vd-more-projects-btn",style:{marginTop:10},onClick:()=>q(I,e,i,a,l),children:"Retry"})]}):null,!K&&!W&&Ve.length===0?v.jsx("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:14,padding:16,color:"#475467"},children:"No projects found for this search."}):null,!K&&Ve.length>0?v.jsx("div",{className:"row g-3",children:Ve.map(Ue=>v.jsx("div",{className:"col-12 col-sm-6 col-md-4 col-xl-3",children:v.jsx(MC,{p:Ue,faved:p.has(Ue.id),onFav:()=>R(Ue.id),onDetails:()=>ci(Ue)})},Ue.id))}):null,v.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"10px",backgroundColor:"#ececec",marginTop:"10px",borderRadius:"8px",gap:10,flexWrap:"nowrap"},children:[v.jsx("button",{className:"vd-more-projects-btn",style:{width:"auto",marginTop:0,flexShrink:0},onClick:()=>N(Ue=>Math.max(1,Ue-1)),disabled:W||!U,children:"Previous"}),v.jsxs("span",{style:{fontSize:12.5,color:"#6b7280"},children:["Page ",I," of ",Me," (",Ca," per page)"]}),v.jsxs("button",{className:"vd-more-projects-btn",style:{width:"auto",marginTop:0,flexShrink:0},onClick:()=>N(Ue=>Ue+1),disabled:W||!ve,children:[ve?"Next":"No More Projects",v.jsx(Ke,{icon:OS,style:{fontSize:11}})]})]})]})}),c==="map"&&v.jsx("div",{id:"projects-map-panel",role:"tabpanel","aria-labelledby":"projects-map-tab",className:"row g-3",children:v.jsx("div",{className:"col-12",style:{minHeight:430},children:v.jsx(OC,{projects:Le,error:E})})}),v.jsx(EC,{open:ke,onClose:Cr,onSuccess:ui}),v.jsx(Pu,{open:!!Q,onOpenChange:Ue=>{Ue||se(null)},children:v.jsx(JE,{className:"sm:max-w-4xl p-0 overflow-hidden border-0 bg-white",style:{maxHeight:"90vh",width:"min(96vw, 74rem)"},children:Q?v.jsxs("div",{className:"vd-project-details",children:[v.jsxs(eC,{className:"text-left modal_header gap-0",style:{padding:"18px 24px 14px",borderBottom:"1px solid #e2e8f0",background:"#fff",flexShrink:0},children:[v.jsx(tC,{style:{fontSize:22,color:"#0f172a"},children:"Project Details"}),v.jsx(nC,{style:{color:"#64748b"},children:"Project information and fields supplied by the database."})]}),v.jsxs("div",{className:"vd-project-details-content",children:[v.jsxs("section",{className:"vd-project-overview",children:[v.jsxs("div",{className:"vd-project-overview-image",children:[v.jsx("img",{src:Q.img,alt:Q.name}),v.jsxs("span",{children:["Project ID: ",X(["Id","ProjectId"])]})]}),v.jsxs("div",{className:"vd-project-overview-body",children:[v.jsx("div",{className:"vd-project-eyebrow",children:"Project Details"}),v.jsx("h2",{children:Q.name}),v.jsx("p",{className:"vd-project-builder",children:Q.builder}),v.jsx("p",{className:"vd-project-address",children:Q.location}),v.jsxs("div",{className:"vd-project-badges",children:[v.jsx("span",{children:Q.status}),v.jsx("span",{children:Q.projectType}),v.jsxs("span",{children:["RERA Registered: ",ei(H,["HasRERA"])]}),v.jsxs("span",{children:["Approval: ",nt]})]}),v.jsxs("div",{className:"vd-project-actions",children:[_t&&v.jsxs("a",{className:"vd-project-action primary",href:_t,target:"_blank",rel:"noopener noreferrer",children:[v.jsx(Ke,{icon:sl})," View Location"]}),v.jsxs(TC,{variant:"outline",onClick:Ba,children:[v.jsx(Ke,{icon:VS})," Copy Details"]}),De&&v.jsx("span",{role:"status",className:"vd-project-copy-status",children:De})]})]})]}),v.jsxs("section",{className:"vd-project-insight","aria-label":"Project intelligence",children:[v.jsx("div",{children:"Project Intelligence"}),v.jsx("p",{children:Q.aiLabel}),v.jsx("small",{children:"AI-generated insight is informational and is not a guarantee of investment performance."})]}),v.jsxs(zo,{icon:w0,title:"Registration & Approvals",subtitle:"RERA, layout permission and certificate details",children:[v.jsx(el,{fields:en}),v.jsx("p",{className:"vd-project-notice",children:"Database flags and approval numbers are displayed as received from the API. Independently verify registrations and approvals before making a transaction."})]}),v.jsxs(zo,{icon:TS,title:"Land & Construction Details",subtitle:"Area, units and project configuration",children:[v.jsx(el,{fields:tn}),v.jsx("p",{className:"vd-project-notice",children:"Area units are shown explicitly where supplied by the source. Confirm the unit used for Built-up Area in the database before interpreting it."})]}),v.jsxs(zo,{icon:v0,title:"Project Timeline",subtitle:"Completion dates and record history",children:[v.jsx(el,{fields:[...Ht,{label:"Approved Date",value:"Not supplied by API"}]}),v.jsx("p",{className:"vd-project-notice",children:"An approved date is not present in the supplied API response. RERA Registered Date is a separate field and is not substituted for an approval date."})]}),v.jsxs(zo,{icon:sl,title:"Location & Official Address",subtitle:"Geographical and address information",children:[v.jsx(el,{fields:dn}),_t&&v.jsx("div",{style:{marginTop:14},children:v.jsxs("a",{className:"vd-project-action primary",href:_t,target:"_blank",rel:"noopener noreferrer",children:[v.jsx(Ke,{icon:sl})," Open Coordinates in Maps"]})})]}),v.jsx(zo,{icon:Kp,title:"Project Status & Facilities",subtitle:"Availability flags and financing information",children:v.jsx(DC,{fields:At})}),v.jsx(zo,{icon:Fg,title:"Additional Database Information",subtitle:"Remaining fields from the project record",children:v.jsx(el,{fields:Qi})})]})]}):null})})]})}const BC=[{id:"advisor",avatarClass:"blue",icon:_0,title:"AI Advisor",desc:"Not sure what to buy? Ask AI and get best recommendations.",cta:"Start AI Chat",ctaClass:"blue",ctaIcon:y0},{id:"compare",avatarClass:"purple",icon:yS,title:"AI Compare",desc:"Compare projects, builders & locations using AI.",cta:"Compare Now",ctaClass:"purple",ctaIcon:null},{id:"insights",avatarClass:"green",icon:CS,title:"Investment Insights",desc:"Explore high ROI areas & growth corridors.",cta:"Explore Insights",ctaClass:"green",ctaIcon:null}];function HC({onAdvisorClick:e}){return v.jsx("div",{className:"row g-3",children:BC.map(i=>v.jsx("div",{className:"col-12 col-md-4",children:v.jsxs("div",{className:"vd-advisor-card",children:[v.jsx("div",{className:`vd-advisor-avatar ${i.avatarClass}`,children:v.jsx(Ke,{icon:i.icon})}),v.jsxs("div",{children:[v.jsx("div",{className:"vd-advisor-title",children:i.title}),v.jsx("div",{className:"vd-advisor-desc",children:i.desc}),v.jsxs("button",{type:"button",className:`vd-advisor-cta ${i.ctaClass}`,onClick:e,children:[i.cta,i.ctaIcon&&v.jsx(Ke,{icon:i.ctaIcon,style:{fontSize:10}})]})]})]})},i.id))})}function UC(){return v.jsxs("a",{className:"vd-propify-ad",href:"https://propifyacademy.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Propify Academy",children:[v.jsx("span",{className:"vd-propify-ad-label",children:"Sponsored"}),v.jsxs("span",{className:"vd-propify-ad-heading",children:[v.jsx("span",{className:"vd-propify-ad-icon","aria-hidden":"true",children:v.jsx(Ke,{icon:FS})}),v.jsxs("span",{className:"vd-propify-ad-copy",children:[v.jsx("span",{className:"vd-propify-ad-title",children:"Propify Academy"}),v.jsx("span",{className:"vd-propify-ad-description",children:"Explore real estate learning with Propify Academy."})]})]}),v.jsxs("span",{className:"vd-propify-ad-link",children:["Learn more",v.jsx(Ke,{icon:x0,"aria-hidden":"true"})]})]})}const ti="VenturesDirectory",Nn="https://venturesdirectory.com",WC="en_IN",Yb=`${Nn}/og-image.svg`,zv="support@venturesdirectory.com",Fv="+919618641100",dh="Discover real estate ventures across Telangana. Search projects by name or location, explore RERA, HMDA and DTCP details, and research with greater confidence on VenturesDirectory.",VC={"@context":"https://schema.org","@type":"Organization",name:ti,url:Nn,email:zv,telephone:Fv,logo:Yb,description:dh,address:{"@type":"PostalAddress",streetAddress:"#302, P & T Colony, Dilsukhnagar",addressLocality:"Hyderabad",addressRegion:"Telangana",postalCode:"500060",addressCountry:"IN"},contactPoint:[{"@type":"ContactPoint",telephone:Fv,contactType:"customer support",email:zv,areaServed:"IN",availableLanguage:["English","Telugu","Hindi"]}]},$C={"@context":"https://schema.org","@type":"WebSite",name:ti,url:Nn,description:dh,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${Nn}/?q={search_term_string}`},"query-input":"required name=search_term_string"}},qu={home:{title:"Real Estate Venture Directory for Telangana",description:dh,path:"/",jsonLd:[VC,$C]},about:{title:"About Us",description:"Learn how VenturesDirectory helps buyers, investors, agents and developers discover ventures, check approval references, and research projects across Telangana.",path:"/about"},howItWorks:{title:"How It Works",description:"Search ventures by name or location, explore available RERA and approval details, request more information, and keep project listings updated on VenturesDirectory.",path:"/how-it-works"},contact:{title:"Contact Us",description:"Contact VenturesDirectory for sales, support, WhatsApp assistance, or venture listing help. Reach us in Hyderabad by phone, email, or WhatsApp.",path:"/contact",jsonLd:{"@context":"https://schema.org","@type":"ContactPage",name:`Contact ${ti}`,url:`${Nn}/contact`,description:"Contact VenturesDirectory for sales, support, WhatsApp assistance, or venture listing help."}}},zt=(e,i,a)=>{if(!a)return;let l=document.head.querySelector(`meta[${e}="${i}"]`);l||(l=document.createElement("meta"),l.setAttribute(e,i),document.head.appendChild(l)),l.setAttribute("content",a)},qC=(e,i)=>{if(!i)return;let a=document.head.querySelector(`link[rel="${e}"]`);a||(a=document.createElement("link"),a.setAttribute("rel",e),document.head.appendChild(a)),a.setAttribute("href",i)},ZC=e=>{[...document.head.querySelectorAll('script[data-seo-jsonld="true"]')].forEach(l=>l.remove()),(Array.isArray(e)?e.filter(Boolean):e?[e]:[]).forEach((l,c)=>{const f=document.createElement("script");f.type="application/ld+json",f.setAttribute("data-seo-jsonld","true"),f.setAttribute("data-seo-jsonld-index",String(c)),f.text=JSON.stringify(l),document.head.appendChild(f)})};function ts({title:e,description:i,path:a="/",image:l=Yb,type:c="website",noIndex:f=!1,jsonLd:p}){return P.useEffect(()=>{const g=a.startsWith("/")?a:`/${a}`,b=`${Nn}${g==="/"?"":g}`,w=e.includes(ti)?e:`${e} | ${ti}`;document.title=w,document.documentElement.lang="en",zt("name","description",i),zt("name","robots",f?"noindex, nofollow":"index, follow, max-image-preview:large"),zt("name","googlebot",f?"noindex, nofollow":"index, follow"),zt("name","author",ti),zt("name","theme-color","#1a56db"),zt("name","application-name",ti),zt("property","og:type",c),zt("property","og:site_name",ti),zt("property","og:locale",WC),zt("property","og:title",w),zt("property","og:description",i),zt("property","og:url",b),zt("property","og:image",l),zt("name","twitter:card","summary_large_image"),zt("name","twitter:title",w),zt("name","twitter:description",i),zt("name","twitter:image",l),qC("canonical",b),ZC(p)},[e,i,a,l,c,f,p]),null}function GC({onAdvisorClick:e}){const[i,a]=P.useState(Ru),[l,c]=P.useState(()=>Vb(Ru)),[f,p]=P.useState(""),[g,b]=P.useState(""),[w,k]=P.useState(""),[_,E]=P.useState([]),[D,B]=P.useState(!1),[C,I]=P.useState(""),N=P.useRef(0);P.useEffect(()=>{const F=g.trim(),K=++N.current;if(E([]),I(""),!F){B(!1);return}B(!0);const ee=setTimeout(async()=>{try{const Q=await ll({query:F,pageNumber:1,pageSize:5});if(K!==N.current)return;const se=Q.items.map(J=>(J==null?void 0:J.ProjectName)||(J==null?void 0:J.projectName)||"").filter(Boolean);E(Array.from(new Set(se)).slice(0,5))}catch(Q){if(K!==N.current)return;I((Q==null?void 0:Q.message)||"Unable to load matching ventures.")}finally{K===N.current&&B(!1)}},300);return()=>clearTimeout(ee)},[g]);const W=P.useCallback(F=>{const K=F.trim(),ee=K.replace(/\s+/g,""),Q=/^P\d{5,}$/i.test(ee);b(F),k(K),p(Q?ee:"")},[]);return v.jsxs(v.Fragment,{children:[v.jsx(ts,{...qu.home}),v.jsx(lC,{searchValue:g,onSearchChange:b,onSearchSubmit:W,suggestions:_,isSuggestionsLoading:D,suggestionsError:C}),v.jsx(dC,{values:i,onChange:a,onApply:c}),v.jsxs("div",{className:"vd-listings-layout",children:[v.jsx("div",{className:"vd-listings-main",children:v.jsx(FC,{builderName:l.builderName||"All Builders",reraNo:f,searchQuery:w,filters:l})}),v.jsx(vC,{})]}),v.jsx("section",{className:"vd-advisor-section",children:v.jsxs("div",{className:"row g-3",children:[v.jsx("div",{className:"col-12 col-lg-8",children:v.jsx(HC,{onAdvisorClick:e})}),v.jsx("div",{className:"col-12 col-lg-4",children:v.jsx(UC,{})})]})})]})}const YC=[{icon:Kp,title:"RERA Project Information",text:"Find available RERA registration numbers and project-related information to help investigate a project's registration status and applicable disclosures."},{icon:HS,title:"HMDA and DTCP Approval References",text:"Discover available planning authority details, layout approval references, LP numbers, and related project information. Use these details to seek confirmation from the relevant authority."},{icon:b0,title:"Venture and Project Details",text:"Explore available project names, developer or promoter information, application numbers, project categories, locations, and other listed particulars."},{icon:xS,title:"Location-Based Venture Discovery",text:"Search for ventures in locations of interest and explore available information to help narrow your property search."},{icon:NS,title:"Developer Digital Visibility",text:"Help prospective buyers and real estate professionals discover your ventures through organized project listings and potential featured promotional opportunities."},{icon:wS,title:"Smarter Property Research",text:"Use a searchable directory to identify projects of interest, compare available information, and prepare better questions before contacting a developer or visiting a site."}],KC=[{title:"Buyers",text:"Discover ventures and investigate available project information."},{title:"Investors",text:"Explore projects and identify the details requiring further due diligence."},{title:"Real Estate Professionals",text:"Access venture information to support your property research and client conversations."},{title:"Developers",text:"Explore listing, brand visibility, and promotional partnership opportunities."}],QC=["Is the project required to be registered with RERA, and if so, what is its registration status?","Is the claimed HMDA or DTCP approval supported by the relevant official records?","Is there a verifiable layout permission or LP/plan approval number?","Does the project location match the land and venture being advertised?","Are the developer, survey numbers, plot details, and other available project particulars consistent?","Are there restrictions, pending permissions, ownership issues, or other risks that require independent investigation?"];function XC(){return v.jsxs("main",{className:"vd-page",children:[v.jsx(ts,{...qu.about}),v.jsx("section",{className:"vd-page-hero",children:v.jsxs("div",{className:"vd-page-hero-inner",children:[v.jsx("p",{className:"vd-page-kicker",children:"About Us"}),v.jsx("h1",{children:"Bringing Transparency to Real Estate Venture Discovery"}),v.jsx("p",{className:"vd-page-lead",children:"Discover Ventures. Verify Information. Invest with Greater Confidence."}),v.jsx("p",{children:"VentureDirectory.com is India’s emerging digital platform for real estate venture discovery— helping buyers, investors, agents, and developers find ventures, check approval details, discover locations, and connect with developers across Telangana."})]})}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-grid two",children:[v.jsxs("article",{className:"vd-page-card",children:[v.jsx("h2",{children:"Who We Are"}),v.jsx("p",{children:"VentureDirectory.com is building a comprehensive digital directory of real estate ventures, plots, residential layouts, apartments, villas, and property development projects across Telangana."}),v.jsx("p",{children:"Our mission is to make essential real estate project information easier to discover, access, understand, and share—helping property buyers, investors, real estate agents, and developers make more informed decisions."}),v.jsx("p",{children:"From RERA registration numbers and HMDA/DTCP approval references to layout plan numbers, application IDs, project locations, developer details, and other available project information, VentureDirectory brings important venture-related data together in one searchable platform."})]}),v.jsxs("article",{className:"vd-page-card accent",children:[v.jsx("h2",{children:"Why We Exist"}),v.jsx("p",{children:"Buying a plot, investing in a residential layout, or choosing a real estate project can be one of the most significant financial decisions in a person’s life. Yet finding and understanding reliable information about a venture is often difficult."}),v.jsx("p",{children:"Property buyers frequently depend on brochures, WhatsApp messages, promotional advertisements, and verbal assurances. Important details—including RERA registration, layout approval numbers, HMDA or DTCP approval references, and exact project locations—may not be readily accessible."}),v.jsx("p",{className:"vd-page-emphasis",children:"Because buying land is not just about finding the right location. It is about understanding what you are buying."})]})]})}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"The Problem We Want to Solve"}),v.jsx("p",{children:"Information gaps in real estate can expose buyers to financial risks, misleading claims, and costly mistakes."})]}),v.jsxs("div",{className:"vd-page-card",children:[v.jsx("p",{children:"A beautiful brochure does not establish legal validity. A persuasive sales pitch does not prove that a layout has the required approvals. An advertised project location does not, by itself, confirm the identity or boundaries of the land being offered."}),v.jsx("p",{children:"Before purchasing a property, buyers may need to investigate questions such as:"}),v.jsx("ul",{className:"vd-page-list",children:QC.map(e=>v.jsx("li",{children:e},e))}),v.jsx("p",{children:"VentureDirectory aims to put information discovery before investment decisions—not after a problem arises. Our platform helps users identify relevant project details and approval references so they can check the appropriate official records and obtain independent legal advice where necessary."})]})]}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-grid two",children:[v.jsxs("article",{className:"vd-page-card",children:[v.jsx("h2",{children:"Our Mission"}),v.jsx("p",{children:"To make real estate venture information more accessible, discoverable, and understandable— empowering property buyers and investors to ask the right questions, investigate important details, and make better-informed decisions."}),v.jsxs("ul",{className:"vd-page-list",children:[v.jsx("li",{children:"Build a comprehensive, searchable directory of real estate ventures across Telangana."}),v.jsx("li",{children:"Improve the discoverability of RERA registration details and HMDA/DTCP approval references where available."}),v.jsx("li",{children:"Organize project information, application numbers, plan approval references, locations, and developer details in one convenient platform."}),v.jsx("li",{children:"Encourage property buyers to verify material claims before investing."}),v.jsx("li",{children:"Help real estate developers improve their digital visibility and present project information more effectively."}),v.jsx("li",{children:"Support real estate agents and property professionals with better access to venture-related information."})]})]}),v.jsxs("article",{className:"vd-page-card",children:[v.jsx("h2",{children:"Our Vision"}),v.jsx("p",{children:"To become Telangana’s trusted digital destination for real estate venture discovery—building a future where every property buyer knows what to investigate before investing."}),v.jsx("p",{children:"We envision a real estate ecosystem in which essential project information is easier to discover, approval claims are easier to investigate, developers can establish a stronger digital presence, and buyers are better equipped to make informed choices."}),v.jsx("p",{children:"Starting with Telangana, our long-term vision is to expand venture discovery and information access across India. We believe that a more informed property market benefits everyone: buyers, investors, genuine developers, real estate professionals, and communities."})]})]})}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"What You Can Discover"}),v.jsx("p",{children:"Essential venture information organized to support discovery and further investigation."})]}),v.jsx("div",{className:"vd-page-feature-grid",children:YC.map(e=>v.jsxs("article",{className:"vd-page-feature",children:[v.jsx("span",{className:"vd-page-feature-icon","aria-hidden":"true",children:v.jsx(Ke,{icon:e.icon})}),v.jsx("h3",{children:e.title}),v.jsx("p",{children:e.text})]},e.title))})]}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-grid two",children:[v.jsxs("article",{className:"vd-page-card",children:[v.jsx("h2",{children:"Why It Matters to Property Buyers"}),v.jsx("p",{children:"Don’t make a property decision based on a brochure alone."}),v.jsx("p",{children:"Before paying a token advance or committing your savings, investigate the project, its registration and approval references, the land details, the developer’s claims, and the applicable legal requirements."}),v.jsx("p",{children:"VentureDirectory.com helps you begin that research journey by bringing available venture information into one searchable destination. Our platform is designed to support informed property discovery— not replace official verification, title due diligence, or independent legal advice."})]}),v.jsxs("article",{className:"vd-page-card",children:[v.jsx("h2",{children:"Why Developers Should Join"}),v.jsx("p",{children:"In today’s digital-first property market, buyers and real estate professionals search online for venture names, registration numbers, approval references, locations, and developer details before making contact."}),v.jsxs("ul",{className:"vd-page-list",children:[v.jsx("li",{children:"Enhanced online visibility for venture information"}),v.jsx("li",{children:"Organized project profiles in a structured format"}),v.jsx("li",{children:"Reach buyers, investors, consultants, and property agents"}),v.jsx("li",{children:"Featured promotional opportunities for selected projects"}),v.jsx("li",{children:"Enquiry opportunities through available contact features"}),v.jsx("li",{children:"A stronger digital brand beyond conventional advertisements"})]})]})]})}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"Join the VentureDirectory Ecosystem"}),v.jsx("p",{children:"Be part of a more informed and connected property ecosystem."})]}),v.jsx("div",{className:"vd-page-audience-grid",children:KC.map(e=>v.jsxs("article",{className:"vd-page-audience",children:[v.jsx(Ke,{icon:RS,"aria-hidden":"true"}),v.jsx("h3",{children:e.title}),v.jsx("p",{children:e.text})]},e.title))}),v.jsxs("div",{className:"vd-page-cta-row",children:[v.jsx(Yn,{to:"/",className:"vd-page-cta",children:"Search Ventures"}),v.jsx(Yn,{to:"/how-it-works",className:"vd-page-cta ghost",children:"How It Works"}),v.jsx(Yn,{to:"/contact",className:"vd-page-cta ghost",children:"Contact Us"})]})]}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-notice",children:[v.jsx("h2",{children:"Our Commitment to Responsible Information"}),v.jsx("p",{children:"Real estate information must be handled carefully. Registration, approval, ownership, and legal status can vary from project to project and may change over time."}),v.jsx("p",{children:"VentureDirectory.com aims to organize and present available project information to support discovery and further investigation. A listing, registration reference, approval number, or promotional profile should not be interpreted as a guarantee of legal validity, ownership, construction quality, or investment returns."}),v.jsx("p",{children:"Users should independently confirm relevant details with the appropriate authorities, review current official records, examine title documents, and obtain qualified legal advice before committing funds."}),v.jsx("p",{className:"vd-page-emphasis",children:"Better information. Better questions. Better-informed property decisions."})]})})]})}const JC=[{icon:bu,title:"Search by Venture Name or Location",text:"Start your property research with a simple search. Enter a venture or project name, village, locality, city, mandal, district, or developer name where searchable. Matching venture records are displayed based on available information.",points:["Venture or project name","Village, locality, or area","City, mandal, or district","Developer or builder name, where searchable"]},{icon:_S,title:"Explore Available Venture Details",text:"Open a venture listing to review available project information. Details may vary by record and should be treated as references for further investigation.",points:["Venture name and project category/status","RERA registration number and related details","HMDA, DTCP, or other planning authority references","LP / plan approval and application numbers","Developer / promoter and location details","Photos, layout plans, and documents where available"]},{icon:PS,title:"Need More Information? Raise a Request",text:"Submit an information request when a listing does not answer your questions. Our team reviews requests and assists where information is available and accessible.",points:["Available RERA registration certificates or related records","Additional layout or plan approval references","Further venture and developer information","Available project photographs or layout plans","Clarification of listed project details","Help identifying the relevant official source for verification"]},{icon:bS,title:"Venture Owners Can Request Updates",text:"Venture owners, developers, builders, and authorized representatives can register and request corrections or updates to improve listing accuracy.",points:["Venture or project name and developer details","Project location and address","RERA, HMDA / DTCP, and LP references","Project descriptions and specifications","Contact details and website information","Photographs, layout plans, maps, and supporting documents"]},{icon:kS,title:"Our Team Reviews and Approves Updates",text:"Submitted changes are reviewed for usefulness and reliability. We may request clarification or additional documentation before publishing accepted updates.",points:["Review of requested updates and supporting information","Possible request for authorization evidence","Publication of accepted changes to the listing","Directory-content review only—not legal certification"]}],eR=[{title:"For Property Buyers and Investors",text:"Search ventures, explore available registration and approval details, and request additional information to support your property research.",cta:"Search Ventures",to:"/"},{title:"For Anyone Who Needs More Information",text:"Request help finding available certificates, plan references, documents, or other venture-related details.",cta:"Contact Us",to:"/contact"},{title:"For Venture Owners and Developers",text:"Register your venture, report missing or incorrect information, and submit supporting photographs, plans, and documents for review.",cta:"Contact Us",to:"/contact"}],tR=[{q:"How do I search for a venture on VentureDirectory.com?",a:"Enter the venture name or location in the search field. Browse the matching results and open a listing to view the information available for that project."},{q:"Can I check RERA and HMDA/DTCP approval details?",a:"You can explore available RERA registration numbers, planning authority references, layout approval numbers, and other listed details. Confirm their validity and current status with the relevant official authority before proceeding with a purchase."},{q:"How can I get a RERA certificate or additional venture information?",a:"Submit a request identifying the venture and the information or document you need. Our team will review your request and assist where the relevant information is available and accessible."},{q:"What should I do if a venture listing contains incorrect information?",a:"Register or contact our team and submit the correct details with supporting documents or evidence. Your proposed changes will be reviewed before any approved update is published."},{q:"Can a developer add photographs and layout plans?",a:"Yes. Venture owners, developers, and authorized representatives can submit relevant photographs, layout plans, maps, and supporting documents for review. Accepted materials may be added to the listing after approval."},{q:"Who can request changes to a venture listing?",a:"Venture owners, developers, builders, and authorized representatives may request changes. Our team may require evidence of identity, authorization, or a legitimate connection with the project before approving an update."},{q:"Are all venture details independently verified?",a:"Information availability and verification status may vary by record. A listing on VentureDirectory.com should not be treated as a guarantee of legal validity or official approval. Users should verify material information directly with the relevant authorities and seek independent legal advice when necessary."},{q:"Does VentureDirectory.com charge for information requests or updates?",a:"Please contact our team or check the applicable service terms for any charges associated with document assistance, premium services, or promotional listings."}];function nR(){return v.jsxs("main",{className:"vd-page",children:[v.jsx(ts,{...qu.howItWorks}),v.jsx("section",{className:"vd-page-hero",children:v.jsxs("div",{className:"vd-page-hero-inner",children:[v.jsx("p",{className:"vd-page-kicker",children:"How It Works"}),v.jsx("h1",{children:"Search, Verify & Update Venture Details"}),v.jsx("p",{className:"vd-page-lead",children:"Search a Venture. Discover Key Details. Request More Information. Keep Venture Records Updated."}),v.jsx("p",{children:"Finding essential information about a real estate venture should not be complicated. VentureDirectory.com helps you find available venture information through a simple search— whether you are buying an open plot, researching a residential layout, evaluating an investment, or checking approval details."})]})}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"How VentureDirectory.com Works"}),v.jsx("p",{children:"Five clear steps from search to reviewed listing updates."})]}),v.jsx("div",{className:"vd-page-steps",children:JC.map((e,i)=>v.jsxs("article",{className:"vd-page-step",children:[v.jsxs("div",{className:"vd-page-step-badge",children:[v.jsxs("span",{children:["Step ",i+1]}),v.jsx(Ke,{icon:e.icon,"aria-hidden":"true"})]}),v.jsxs("div",{className:"vd-page-step-body",children:[v.jsx("h3",{children:e.title}),v.jsx("p",{children:e.text}),v.jsx("ul",{className:"vd-page-list",children:e.points.map(a=>v.jsx("li",{children:a},a))})]})]},e.title))}),v.jsx("p",{className:"vd-page-callout",children:"Important: A displayed registration or approval number is a reference for further investigation, not proof by itself that a project is currently approved or legally compliant."})]}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"One Platform. Three Simple Ways to Get Started."}),v.jsx("p",{children:"Choose the path that matches what you need today."})]}),v.jsx("div",{className:"vd-page-audience-grid",children:eR.map(e=>v.jsxs("article",{className:"vd-page-audience",children:[v.jsx("h3",{children:e.title}),v.jsx("p",{children:e.text}),v.jsx(Yn,{to:e.to,className:"vd-page-cta",children:e.cta})]},e.title))})]}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-card",children:[v.jsx("h2",{children:"Why Keep Venture Details Updated?"}),v.jsx("p",{children:"Accurate, complete, and discoverable project information can help property buyers and real estate professionals research ventures more efficiently."}),v.jsxs("ul",{className:"vd-page-list",children:[v.jsx("li",{children:"For developers, an updated listing can improve online discoverability and help prospective buyers access the latest information supplied for the project."}),v.jsx("li",{children:"For buyers, more complete listings can make it easier to identify relevant questions, locate approval references, and pursue independent verification before making a property decision."}),v.jsx("li",{children:"For the real estate ecosystem, structured information can reduce avoidable confusion and encourage more informed conversations between buyers, developers, and property professionals."})]}),v.jsx("p",{className:"vd-page-emphasis",children:"Better information starts with better records."})]})}),v.jsxs("section",{className:"vd-page-section",children:[v.jsxs("div",{className:"vd-page-section-head",children:[v.jsx("h2",{children:"Frequently Asked Questions"}),v.jsx("p",{children:"Quick answers to the most common questions about searching and updating ventures."})]}),v.jsx("div",{className:"vd-page-faq-list",children:tR.map(e=>v.jsxs("details",{className:"vd-page-faq",children:[v.jsx("summary",{children:e.q}),v.jsx("p",{children:e.a})]},e.q))})]}),v.jsx("section",{className:"vd-page-section",children:v.jsxs("div",{className:"vd-page-notice",children:[v.jsx("h2",{children:"Start Exploring VentureDirectory.com Today"}),v.jsx("p",{children:"Whether you are researching your next property investment, looking for venture approval references, seeking additional project information, or updating your venture listing, VentureDirectory.com helps you take the next step."}),v.jsx("p",{className:"vd-page-emphasis",children:"Search. Discover. Request. Update. Build Trust."}),v.jsxs("div",{className:"vd-page-cta-row",children:[v.jsx(Yn,{to:"/",className:"vd-page-cta",children:"Search Ventures"}),v.jsx(Yn,{to:"/about",className:"vd-page-cta ghost",children:"About Us"}),v.jsx(Yn,{to:"/contact",className:"vd-page-cta ghost",children:"Contact Us"})]}),v.jsx("p",{children:"Disclaimer: VentureDirectory.com is a real estate information and discovery platform. Listing information and submitted documents may be incomplete, outdated, or subject to change. Requests and updates are subject to review, and approval for publication does not constitute official government verification or legal certification. Always independently verify relevant approvals, registration status, ownership, title, and other material property details before making a transaction."})]})})]})}const rR="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.119890641354!2d78.52401453018085!3d17.35796306119176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb988cfebf45d7%3A0xb041144a4631ca4!2sP%20%26%20T%20Colony%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1751460791555!5m2!1sen!2sin",iR=[{eyebrow:"Our Address",title:"Located in the Heart of Hyderabad",body:v.jsxs(v.Fragment,{children:[v.jsxs("p",{className:"vd-contact-address",children:[v.jsx("strong",{children:"Registered Address:"}),v.jsx("br",{}),"Propify Realty Networks Pvt Ltd",v.jsx("br",{}),"#302, P & T Colony, Dilsukhnagar,",v.jsx("br",{}),"Hyderabad - 500060, Telangana, India"]}),v.jsxs("p",{className:"vd-contact-address",children:[v.jsx("strong",{children:"Corporate Office:"}),v.jsx("br",{}),"Propify Realty Networks Pvt Ltd",v.jsx("br",{}),"H, 2-1-279, Street Number 6, Mamatha Nagar Colony, Nagole,",v.jsx("br",{}),"Hyderabad, Telangana 500068"]})]})},{eyebrow:"Sales Inquiries",title:"Talk to Our Sales Experts",text:"Need a Property or Want to List One? Let’s Talk.",links:[{href:"mailto:support@venturesdirectory.com",label:"support@venturesdirectory.com",kind:"email"},{href:"tel:+919618641100",label:"+91 96186 41100",kind:"phone"}]},{eyebrow:"Customer Support",title:"Need Help? Contact Support",text:"We’re Ready to Assist You with Any Issue or Query.",links:[{href:"mailto:support@venturesdirectory.com",label:"support@venturesdirectory.com",kind:"email"},{href:"tel:+919618641100",label:"+91 96186 41100",kind:"phone"}]},{eyebrow:"Buy, Sell, or Rent",title:"Instant Support via WhatsApp",text:"Chat with Our Team — Fast, Simple, and Direct",links:[{href:"https://wa.me/919618641100",label:"+91 96186 41100",kind:"whatsapp"}],note:"We’re available to discuss your property needs anytime."}];function aR(){return v.jsxs("main",{className:"vd-page vd-contact-page",children:[v.jsx(ts,{...qu.contact}),v.jsx("section",{className:"vd-page-hero",children:v.jsxs("div",{className:"vd-page-hero-inner",children:[v.jsx("p",{className:"vd-page-kicker",children:"Contact Us"}),v.jsxs("h1",{children:["Get in Touch with ",v.jsx("span",{children:"VenturesDirectory"})]}),v.jsx("p",{className:"vd-page-lead",children:"We’re here to help you Discover Ventures — Anytime."}),v.jsx("p",{children:"Connect with our team for sales, support, or property-related inquiries. We’re just a call, email, or WhatsApp away."})]})}),v.jsx("section",{className:"vd-page-section",children:v.jsx("div",{className:"vd-contact-map",children:v.jsx("iframe",{title:"Propify Realty Networks location map",src:rR,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0})})}),v.jsx("section",{className:"vd-page-section",children:v.jsx("div",{className:"vd-contact-grid",children:iR.map(e=>v.jsxs("article",{className:"vd-contact-card",children:[v.jsx("p",{className:"vd-contact-eyebrow",children:e.eyebrow}),v.jsx("h2",{children:e.title}),e.text?v.jsx("p",{children:e.text}):null,e.body||null,e.links?v.jsx("div",{className:"vd-contact-links",children:e.links.map(i=>v.jsxs("a",{href:i.href,target:i.kind==="whatsapp"?"_blank":void 0,rel:i.kind==="whatsapp"?"noopener noreferrer":void 0,children:[i.kind==="email"?"Email: ":i.kind==="phone"?"Call: ":"WhatsApp: ",i.label]},i.href))}):null,e.note?v.jsx("p",{className:"vd-contact-note",children:e.note}):null]},e.eyebrow))})})]})}const oR=e=>{const i=(e.getAttribute("href")||"").trim().toLowerCase(),a=(e.textContent||"").replace(/\s+/g," ").trim();return i==="#investmentmodal"||i.includes("investmentmodal")||i.includes("ai-advisor")?!0:/ai\s*advisor/i.test(a)?!(i.includes("ai-real-estate-search-india")||i.startsWith("/blog/")):!1};function Kb({styles:e="",html:i="",className:a="",onAdvisorClick:l}){const c=P.useRef(null),f=Ip();return P.useEffect(()=>{const p=c.current;if(!p)return;const g=b=>{const w=b.target.closest("a[href]");if(!w||b.defaultPrevented||b.button!==0||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey)return;if(oR(w)){b.preventDefault(),l==null||l();return}const k=w.getAttribute("href");!k||k.startsWith("#")||k.startsWith("mailto:")||k.startsWith("tel:")||/^https?:\/\//i.test(k)||(b.preventDefault(),f(k))};return p.addEventListener("click",g),()=>p.removeEventListener("click",g)},[f,i,l]),v.jsxs("div",{className:`vd-blog ${a}`.trim(),ref:c,children:[e?v.jsx("style",{dangerouslySetInnerHTML:{__html:e}}):null,v.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})}const sR=new Set(["ai-real-estate-search-india","best-areas-to-buy-open-plots-near-hyderabad","hmda-vs-dtcp-approved-layouts","how-to-verify-plot-before-buying-hyderabad","real-estate-project-listing-online-india","rera-registered-projects-hyderabad","what-is-lp-number-in-real-estate"]),lR={"how-to-check-rera-registration-telangana":"rera-registered-projects-hyderabad"},Bv=(e="")=>e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),fh=(e="")=>{const i=String(e).replace(/\.html$/i,"").replace(/^\/+/,"").trim();return lR[i]||i},cR=e=>sR.has(fh(e)),uR=(e,i)=>e.split(",").map(a=>{const l=a.trim();return l&&(l==="*"||l==="body"||l==="html"?i:/^(body|html)(\s|[.:#[>+~]|$)/.test(l)?`${i}${l.replace(/^(body|html)/,"")}`:l.startsWith(i)||l.startsWith(":root")||l.startsWith(":focus")||l.startsWith(":hover")||/^\d/.test(l)||l==="from"||l==="to"?l:`${i} ${l}`)}).join(", "),dR=(e,i=".vd-blog")=>{if(!e)return"";const a=(l,c=!1)=>{let f="",p=0;for(;p<l.length;){if(l.startsWith("/*",p)){const D=l.indexOf("*/",p+2);f+=l.slice(p,D===-1?l.length:D+2),p=D===-1?l.length:D+2;continue}if(/\s/.test(l[p])){f+=l[p],p+=1;continue}if(l[p]==="@"){const D=l.indexOf("{",p);if(D===-1){f+=l.slice(p);break}const B=l.slice(p,D).trim();let C=1,I=D+1;for(;I<l.length&&C>0;)l[I]==="{"?C+=1:l[I]==="}"&&(C-=1),I+=1;const N=l.slice(D+1,I-1),W=/^@(media|supports|layer)\b/i.test(B),F=/^@(keyframes|-webkit-keyframes)\b/i.test(B);f+=`${B} {`,f+=W?a(N,!1):F?a(N,!0):N,f+="}",p=I;continue}const g=l.indexOf("{",p);if(g===-1){f+=l.slice(p);break}const b=l.slice(p,g);let w=1,k=g+1;for(;k<l.length&&w>0;)l[k]==="{"?w+=1:l[k]==="}"&&(w-=1),k+=1;const _=l.slice(g+1,k-1),E=c?b.trim():uR(b,i);f+=`${E} {${_.includes("{")?a(_,c):_}}`,p=k}return f};return a(e)},fR=(e="")=>{const i=e.trim();if(!i||i.startsWith("#")||i.startsWith("mailto:")||i.startsWith("tel:")||/^https?:\/\//i.test(i))return i;if(i==="/"||i==="/home"||i==="/search")return"/";if(i==="/blogs"||i==="/blog"||i==="blogs.html"||i==="blog.html")return"/blog";if(i==="/contact"||i==="/about"||i==="/how-it-works")return i;const a=i.replace(/^\/blogs?\//,"").replace(/^blogs?\//,"").replace(/^\.\//,""),l=fh(a);return cR(l)?`/blog/${l}`:i.startsWith("/")?i:`/blog/${l}`},pR=(e="")=>e.replace(/\shref=(["'])(.*?)\1/gi,(i,a,l)=>` href=${a}${fR(l)}${a}`),Qb=(e="")=>{var p,g,b,w,k,_,E;const i=Bv(((g=(p=e.match(/<title[^>]*>([\s\S]*?)<\/title>/i))==null?void 0:p[1])==null?void 0:g.trim())||"Blog"),a=Bv(((w=(b=e.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i))==null?void 0:b[1])==null?void 0:w.trim())||((_=(k=e.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*>/i))==null?void 0:k[1])==null?void 0:_.trim())||""),l=[...e.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(D=>D[1].replace(/max-width:\s*820px/gi,"max-width: 1200px")).join(`
`),c=[...e.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(D=>{try{return JSON.parse(D[1])}catch{return null}}).filter(Boolean);let f=((E=e.match(/<body[^>]*>([\s\S]*?)<\/body>/i))==null?void 0:E[1])||"";return f=f.replace(/<header[\s\S]*?<\/header>/gi,"").replace(/<footer[\s\S]*?<\/footer>/gi,"").replace(/<div class=["']header["'][\s\S]*?<\/div>\s*(?=<section|<main|<article)/gi,""),{title:i.replace(/\s*\|\s*VenturesDirectoryAI.*$/i,"").trim()||i,description:a,styles:dR(l),bodyHtml:pR(f),jsonLd:c}},hR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Research & Verification Guides | VenturesDirectoryAI Blogs</title>
    <meta name="description" content="Expert guides on RERA verification, HMDA/DTCP approvals, plot due diligence, and AI-powered property search in Telangana. Research before you invest.">
    <link rel="canonical" href="https://venturesdirectoryai.com/blogs">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Hero */
        .hero-section {
            background: #ffffff;
            padding: 48px 0 40px;
            border-bottom: 1px solid #e2e8f0;
        }

        .hero-label {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .hero-section h1 {
            font-size: 2.25rem;
            font-weight: 700;
            color: #0f172a;
            max-width: 750px;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .hero-section p {
            font-size: 1.1rem;
            color: #475569;
            max-width: 720px;
            margin-bottom: 24px;
        }

        .search-bar {
            display: flex;
            max-width: 560px;
            gap: 8px;
            margin-bottom: 24px;
        }

        .search-bar input {
            flex: 1;
            padding: 12px 18px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s;
        }

        .search-bar input:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
        }

        .search-bar button {
            background: #0f3b5e;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background 0.2s;
        }

        .search-bar button:hover {
            background: #0ea5e9;
        }

        /* Category filters */
        .filter-tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .filter-tab {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 100px;
            padding: 8px 18px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #475569;
            cursor: pointer;
            transition: all 0.15s;
        }

        .filter-tab:hover,
        .filter-tab.active {
            background: #0f3b5e;
            color: #ffffff;
            border-color: #0f3b5e;
        }

        /* Featured blog */
        .featured-section {
            padding: 48px 0;
            background: #f8fafc;
        }

        .featured-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            padding: 40px;
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 40px;
            align-items: start;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .featured-label {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 5px 12px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 14px;
        }

        .featured-card h2 {
            font-size: 1.85rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 12px;
        }

        .meta-line {
            display: flex;
            gap: 16px;
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }

        .meta-line span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .featured-card .excerpt {
            font-size: 1rem;
            color: #475569;
            margin-bottom: 20px;
        }

        .learn-box {
            background: #f1f5f9;
            border-radius: 12px;
            padding: 20px 24px;
            margin-bottom: 24px;
        }

        .learn-box h4 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        .learn-box ul {
            list-style: none;
            display: grid;
            gap: 8px;
        }

        .learn-box li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 0.95rem;
            color: #334155;
        }

        .learn-box li::before {
            content: "✓";
            color: #0ea5e9;
            font-weight: 700;
            flex-shrink: 0;
        }

        .btn-primary {
            display: inline-block;
            background: #0f3b5e;
            color: white;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: background 0.2s;
        }

        .btn-primary:hover {
            background: #0ea5e9;
        }

        .btn-secondary {
            display: inline-block;
            background: transparent;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid #0f3b5e;
            transition: all 0.2s;
        }

        .btn-secondary:hover {
            background: #0f3b5e;
            color: white;
        }

        .featured-side {
            background: #f8fafc;
            border-radius: 14px;
            padding: 28px;
            border: 1px solid #e2e8f0;
        }

        .featured-side h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 14px;
        }

        .featured-side p {
            font-size: 0.92rem;
            color: #475569;
            margin-bottom: 18px;
        }

        .side-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .side-links a {
            color: #0f3b5e;
            font-size: 0.9rem;
            font-weight: 500;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            transition: all 0.15s;
        }

        .side-links a:hover {
            border-color: #0ea5e9;
            background: #f0f9ff;
        }

        .side-links a::before {
            content: "→";
            color: #0ea5e9;
            font-weight: 700;
        }

        /* Article grid */
        .grid-section {
            padding: 56px 0;
            background: #ffffff;
        }

        .section-heading {
            font-size: 1.6rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 8px;
        }

        .section-sub {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 32px;
        }

        .article-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
        }

        .article-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 0;
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
            display: flex;
            flex-direction: column;
        }

        .article-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(15, 59, 94, 0.08);
            border-color: #0ea5e9;
        }

        .card-image {
            width: 100%;
            height: 168px;
            overflow: hidden;
            background: #e2e8f0;
        }

        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .35s ease;
        }

        .article-card:hover .card-image img {
            transform: scale(1.04);
        }

        .card-body {
            padding: 22px 22px 24px;
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .featured-image {
            width: 100%;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 20px;
            aspect-ratio: 16 / 9;
            background: #e2e8f0;
        }

        .featured-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .card-tag {
            display: inline-block;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 14px;
            width: fit-content;
        }

        .tag-rera { background: #e0f2fe; color: #0369a1; }
        .tag-plot { background: #dcfce7; color: #15803d; }
        .tag-invest { background: #fef3c7; color: #92400e; }
        .tag-ai { background: #ede9fe; color: #6d28d9; }
        .tag-dev { background: #ffe4e6; color: #be123c; }

        .article-card h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.4;
            margin-bottom: 10px;
        }

        .card-meta {
            font-size: 0.78rem;
            color: #94a3b8;
            margin-bottom: 12px;
        }

        .article-card p {
            font-size: 0.9rem;
            color: #475569;
            margin-bottom: 18px;
            flex: 1;
        }

        .card-link {
            text-decoration: none;
            color: #0f3b5e;
            font-weight: 600;
            font-size: 0.88rem;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: auto;
            transition: color 0.15s;
        }

        .card-link:hover {
            color: #0ea5e9;
        }

        .card-link::after {
            content: "→";
            font-weight: 700;
        }

        /* Conversion */
        .conversion-section {
            background: #0f3b5e;
            padding: 64px 0;
            color: #ffffff;
        }

        .conversion-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
        }

        .conversion-section h2 {
            font-size: 1.9rem;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .conversion-section p {
            color: #cbd5e1;
            font-size: 1.05rem;
            margin-bottom: 28px;
        }

        .conversion-actions {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            text-align: center;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            text-align: center;
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        .trust-note {
            margin-top: 20px;
            font-size: 0.85rem;
            color: #94a3b8;
            line-height: 1.5;
        }

        /* Editorial */
        .editorial-section {
            background: #f8fafc;
            padding: 48px 0;
            border-top: 1px solid #e2e8f0;
        }

        .editorial-inner {
            max-width: 800px;
        }

        .editorial-section h2 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .editorial-section p {
            font-size: 0.92rem;
            color: #475569;
            margin-bottom: 12px;
        }

        .editorial-section strong {
            color: #0f172a;
        }

        .editorial-section a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .editorial-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .featured-card {
                grid-template-columns: 1fr;
                gap: 28px;
            }
            .article-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .hero-section h1 {
                font-size: 1.65rem;
            }
            .featured-card {
                padding: 28px;
            }
            .featured-card h2 {
                font-size: 1.4rem;
            }
            .article-grid {
                grid-template-columns: 1fr;
            }
            .conversion-inner {
                grid-template-columns: 1fr;
                gap: 28px;
            }
            .nav-links {
                display: none;
            }
            .search-bar {
                flex-direction: column;
            }
        }

        /* Accessibility */
        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>


    <!-- Featured Blog #1 -->
    <section class="featured-section">
        <div class="container">
            <div class="featured-card">
                <div class="featured-main">
                    <div class="featured-image">
                        <img src="/blog/featured-rera.jpg" alt="Modern high-rise real estate skyline" width="1200" height="675" loading="eager" />
                    </div>
                    <span class="featured-label">★ Featured Guide</span>
                    <h2>How to Check RERA Registration of a Real Estate Project in Telangana (2026)</h2>
                    <div class="meta-line">
                        <span>📂 RERA &amp; Approvals</span>
                        <span>⏱ 9 min read</span>
                        <span>🔄 Updated October 2026</span>
                    </div>
                    <p class="excerpt">Step-by-step walkthrough of the official TG-RERA portal. Learn to search by registration number, cross-check promoter details, verify sanctioned plans, and identify red flags before paying any advance. Includes a printable verification checklist and common mistakes buyers make.</p>

                    <div class="learn-box">
                        <h4>What you will learn</h4>
                        <ul>
                            <li>Exact steps to search the TG-RERA portal</li>
                            <li>What to cross-check beyond the registration number</li>
                            <li>Red flags that indicate an unregistered or misrepresented project</li>
                            <li>How to download and save official records</li>
                        </ul>
                    </div>

                    <a href="rera-registered-projects-hyderabad" class="btn-primary">Read the Full Verification Guide →</a>
                </div>

                <aside class="featured-side">
                    <h4>Quick Links</h4>
                    <p>Start your research with these related resources.</p>
                    <div class="side-links">
                        <a href="/home">Search ventures on VenturesDirectoryAI</a>
                        <a href="hmda-vs-dtcp-approved-layouts">Verify HMDA layout approval</a>
                        <a href="ai-real-estate-search-india">Compare projects using AI</a>
                        <a href="rera-registered-projects-hyderabad">Find RERA-registered projects</a>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- Secondary Articles Grid -->
    <section class="grid-section">
        <div class="container">
            <h2 class="section-heading">More Verification &amp; Research Guides</h2>
            <p class="section-sub">Each guide targets a specific buyer question and links to official records.</p>

            <div class="article-grid">

                <!-- Blog #2 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/hmda-dtcp.jpg" alt="House keys on property documents for layout approval checks" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-rera">RERA &amp; Approvals</span>
                        <h3>HMDA vs DTCP Approved Layouts: 15 Checks Before Buying a Plot</h3>
                        <div class="card-meta">12 min read · Updated Oct 2026</div>
                        <p>Understand the difference between planning authorities, why the exact approval number matters, and the 15-point check every plot buyer should complete before paying a token advance.</p>
                        <a href="hmda-vs-dtcp-approved-layouts" class="card-link">Read the HMDA vs DTCP Guide</a>
                    </div>
                </article>

                <!-- Blog #3 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/verify-plot.jpg" alt="Open land representing plot verification before buying" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-plot">Plot Verification</span>
                        <h3>How to Verify a Plot Before Buying in Hyderabad: Complete Checklist</h3>
                        <div class="card-meta">14 min read · Updated Oct 2026</div>
                        <p>A practical 15-point due-diligence checklist covering title history, survey numbers, boundaries, encumbrances, access roads, and layout permissions. Includes independent legal review guidance.</p>
                        <a href="how-to-verify-plot-before-buying-hyderabad" class="card-link">Get the Plot Verification Checklist</a>
                    </div>
                </article>

                <!-- Blog #4 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/open-plots.jpg" alt="Suburban neighbourhood near Hyderabad for open plot investment" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-invest">Investment Locations</span>
                        <h3>Best Areas to Buy Open Plots Near Hyderabad: How to Compare Locations</h3>
                        <div class="card-meta">11 min read · Updated Oct 2026</div>
                        <p>A comparison framework for Kokapet, Tukkuguda, Kandukur, and Kadthal using connectivity evidence, current pricing, approvals, supply, and resale liquidity—without unsupported ROI promises.</p>
                        <a href="best-areas-to-buy-open-plots-near-hyderabad" class="card-link">Compare Investment Locations</a>
                    </div>
                </article>

                <!-- Blog #5 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/rera-search.jpg" alt="Person reviewing documents while searching RERA-registered projects" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-rera">RERA &amp; Approvals</span>
                        <h3>How to Find RERA-Registered Projects in Hyderabad: Builder, Location &amp; Project Search</h3>
                        <div class="card-meta">10 min read · Updated Oct 2026</div>
                        <p>Discovery guide for searching by venture name, developer, location, or registration reference—and what to do when project names or records do not match.</p>
                        <a href="rera-registered-projects-hyderabad" class="card-link">Search RERA-Registered Projects</a>
                    </div>
                </article>

                <!-- Blog #6 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/lp-number.jpg" alt="Blueprint plans used to understand LP layout permission numbers" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-rera">RERA &amp; Approvals</span>
                        <h3>What Is an LP Number in Real Estate? How to Check Layout Approval</h3>
                        <div class="card-meta">8 min read · Updated Oct 2026</div>
                        <p>Learn what a layout permission reference is, where it appears in project records, and why a missing LP number requires investigation rather than assumption.</p>
                        <a href="what-is-lp-number-in-real-estate" class="card-link">Understand LP Numbers</a>
                    </div>
                </article>

                <!-- Blog #7 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/ai-search.jpg" alt="Laptop research for AI-assisted real estate search" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-ai">AI Property Search</span>
                        <h3>AI Real Estate Search in India: Find and Compare Property Projects Smarter</h3>
                        <div class="card-meta">10 min read · Updated Oct 2026</div>
                        <p>How AI can narrow your search, organize project information, identify missing details, and generate due-diligence questions—while clearly distinguishing AI insights from verified official facts.</p>
                        <a href="ai-real-estate-search-india" class="card-link">Try the AI Advisor</a>
                    </div>
                </article>

                <!-- Blog #8 -->
                <article class="article-card">
                    <div class="card-image">
                        <img src="/blog/developer-listing.jpg" alt="Construction site representing online developer project listings" width="600" height="336" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <span class="card-tag tag-dev">For Developers</span>
                        <h3>How Real Estate Developers Can Get Their Projects Discovered Online</h3>
                        <div class="card-meta">9 min read · Updated Oct 2026</div>
                        <p>Structured project profiles, consistent naming, approval references, useful photographs, and dedicated landing pages improve discoverability. A guide for builders and marketers.</p>
                        <a href="real-estate-project-listing-online-india" class="card-link">List Your Project on VenturesDirectoryAI</a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!-- Conversion Section -->
    <section class="conversion-section">
        <div class="container conversion-inner">
            <div>
                <h2>Ready to Research Before You Invest?</h2>
                <p>VenturesDirectoryAI combines venture discovery, RERA references, HMDA/DTCP approval information, and AI-assisted research. Start with a search, then verify independently.</p>
                <p class="trust-note">Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on official <a href="https://rera.telangana.gov.in" target="_blank" rel="noopener" style="color: #7dd3fc;">TG-RERA</a> and <a href="https://hmda.gov.in" target="_blank" rel="noopener" style="color: #7dd3fc;">HMDA</a> portals.</p>
            </div>
            <div class="conversion-actions">
                <a href="/search" class="btn-white">Search Real Estate Ventures by Location →</a>
                <a href="/contact" class="btn-outline-white">List Your Project on VenturesDirectoryAI →</a>
            </div>
        </div>
    </section>

    <!-- Editorial Section -->
    <section class="editorial-section">
        <div class="container editorial-inner">
            <h2>About These Guides</h2>
            <p>Every article on VenturesDirectoryAI includes:</p>
            <p>✓ Author name and publication date<br>
               ✓ Last-reviewed date<br>
               ✓ Links to primary sources (TG-RERA, HMDA, official portals)<br>
               ✓ Clear disclaimer distinguishing directory data from legal verification</p>
            <p><strong>Editorial Standards:</strong> We do not publish AI-generated content without human review and source verification. Guides are updated when regulations or official processes change.</p>
            <p>Have a correction or suggestion? <a href="/contact">Contact Us</a></p>
        </div>
    </section>


</body>
</html>`,mR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Real Estate Search in India: Find and Compare Projects (2026)</title>
    <meta name="description" content="Discover how AI-powered property search can help you find projects, compare available details, and prepare for due diligence. Learn what AI can and cannot verify in Indian real estate.">
    <link rel="canonical" href="https://venturesdirectoryai.comai-real-estate-search-india">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI Real Estate Search in India: Find and Compare Property Projects Smarter",
        "description": "A forward-looking article demonstrating how AI can help narrow a search, organize project information, compare available records, identify missing details, and generate questions for due diligence.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/ai-real-estate-search-india"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can AI verify if a property has RERA or HMDA approval?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. AI can help you locate the approval reference and organize what the developer has submitted, but it cannot independently verify that the approval is current and valid. Verification requires checking the official TG-RERA portal, HMDA DPMS portal, or DTCP records. Treat AI-generated approval summaries as a starting point for your own verification, not as proof."
                }
            },
            {
                "@type": "Question",
                "name": "What is an AI real estate advisor?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI real estate advisor is a tool that accepts natural-language queries—such as 'HMDA-approved plots near Tukkuguda under ₹30 lakh'—and returns matching project listings from a database. It can also compare project attributes, flag missing information, and generate due-diligence questions. It does not replace legal verification or professional advice."
                }
            },
            {
                "@type": "Question",
                "name": "Is AI property search reliable in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI property search is reliable for discovery and organization, but not for verification. It can help you find projects that match your criteria and compare available details. It cannot confirm title, approval validity, or RERA registration status. Always verify the final shortlist on official government portals and through a property lawyer."
                }
            },
            {
                "@type": "Question",
                "name": "How does AI help with property due diligence?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI can generate a checklist of questions based on the project's available information, highlight missing details (such as a missing LP number or an older completion date), and suggest which official portals to check. It streamlines preparation but does not replace the actual verification steps. You still need to pull the EC, check the RERA portal, and have a lawyer review the title."
                }
            },
            {
                "@type": "Question",
                "name": "What should I check after using AI to find a project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After AI returns a shortlist, verify the LP number on the HMDA DPMS portal, check the RERA registration on rera.telangana.gov.in, pull the Encumbrance Certificate from IGRS, confirm land ownership on Bhu Bharati, and have a property lawyer review the title chain. AI narrows the search; official portals and legal review confirm the facts."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #ede9fe;
            color: #6d28d9;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #8b5cf6;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Capability Grid */
        .capability-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
        }

        .capability-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
        }

        .capability-card h4 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .capability-card p {
            font-size: 0.88rem;
            color: #475569;
            margin-bottom: 0;
        }

        .capability-card .icon-yes {
            color: #15803d;
            font-weight: 700;
        }

        .capability-card .icon-no {
            color: #be123c;
            font-weight: 700;
        }

        /* Workflow Steps */
        .workflow-steps {
            list-style: none;
            padding-left: 0;
            counter-reset: workflow-counter;
        }

        .workflow-steps li {
            counter-increment: workflow-counter;
            padding: 18px 20px 18px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .workflow-steps li::before {
            content: counter(workflow-counter);
            position: absolute;
            left: 16px;
            top: 18px;
            width: 28px;
            height: 28px;
            background: #8b5cf6;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .workflow-steps li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .workflow-steps li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #8b5cf6;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .capability-grid {
                grid-template-columns: 1fr;
            }
            .workflow-steps li {
                padding-left: 52px;
            }
        }

        :focus-visible {
            outline: 2px solid #8b5cf6;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    
    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / AI Real Estate Search in India
            </div>
            <span class="article-category">AI Property Search</span>
            <h1>AI Real Estate Search in India: Find and Compare Property Projects Smarter</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 10 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> AI-powered property search helps you narrow a large list of projects to a shortlist that matches your budget, location, and approval preferences. It can compare available details, flag missing information, and generate due-diligence questions. It cannot verify title, RERA registration, or approval validity—those checks still require official government portals and a property lawyer. Use AI to save time on discovery and preparation, not as a substitute for verification.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>What AI Real Estate Search Can Do</h2>

            <p>AI tools for real estate search are most useful at the beginning of the buying process, when you are trying to make sense of a large and fragmented market. Here is what they do well:</p>

            <div class="capability-grid">
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Natural-Language Search</h4>
                    <p>Ask questions like "HMDA-approved plots near Tukkuguda under ₹30 lakh" and get matching projects instead of scrolling through hundreds of listings.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Compare Available Details</h4>
                    <p>View project attributes side by side—location, developer, approval references, plot sizes, and listed prices—in a structured format.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Flag Missing Information</h4>
                    <p>Identify when a project listing lacks an LP number, has no RERA reference, or shows an older completion date that warrants investigation.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Generate Due-Diligence Questions</h4>
                    <p>Create a tailored checklist of questions to ask the developer or seller, based on what the listing does and does not disclose.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Organize Research</h4>
                    <p>Keep shortlisted projects, notes, and verification links in one place instead of scattering information across browser tabs and WhatsApp messages.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-yes">✓</span> Surface Official Sources</h4>
                    <p>Point you to the correct portal for each verification step—HMDA DPMS for LP numbers, TG-RERA for registration, IGRS for EC, and Bhu Bharati for land records.</p>
                </div>
            </div>

            <h2>What AI Real Estate Search Cannot Do</h2>

            <p>This is the more important section. Understanding the limits of AI prevents costly mistakes.</p>

            <div class="capability-grid">
                <div class="capability-card">
                    <h4><span class="icon-no">✗</span> Verify Approval Validity</h4>
                    <p>AI can show you an approval reference from a listing, but it cannot confirm that the LP number is current, active, or matches the specific survey number you are buying.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-no">✗</span> Certify Title</h4>
                    <p>AI cannot review the title chain, check for encumbrances, or confirm that the seller has the legal right to sell. That requires a property lawyer and an Encumbrance Certificate.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-no">✗</span> Confirm RERA Registration Status</h4>
                    <p>AI can point you to the TG-RERA portal, but it cannot independently confirm that the project's registration is active or that the promoter has disclosed everything.</p>
                </div>
                <div class="capability-card">
                    <h4><span class="icon-no">✗</span> Replace Due Diligence</h4>
                    <p>AI-generated summaries are based on available listing data, which may be incomplete, outdated, or provided by the developer. They are not verified facts.</p>
                </div>
            </div>

            <div class="callout callout-warning">
                <h4>⚠️ The Golden Rule of AI Property Search</h4>
                <p>AI-generated insights are <strong>research aids</strong>, not verified official facts. Every approval reference, RERA number, and ownership detail that AI surfaces must be confirmed on the relevant government portal and reviewed by a qualified professional before you pay any advance .</p>
            </div>

            <h2>How to Use AI Search in Your Buying Workflow</h2>

            <p>Think of AI as a research assistant that saves you time on discovery and preparation, while you retain responsibility for verification. Here is a practical workflow:</p>

            <ol class="workflow-steps">
                <li>
                    <strong>Start with a Natural-Language Query</strong>
                    <span>Use specific criteria: location, budget range, plot size, and approval type. For example: "HMDA-approved plots near Tukkuguda between ₹25–35 lakh, at least 150 sq yd." The more specific your query, the more useful the shortlist .</span>
                </li>
                <li>
                    <strong>Review the Shortlist and Flag Gaps</strong>
                    <span>Look at what each project listing discloses—developer name, approval references, completion dates—and note what is missing. A listing without an LP number or RERA reference should be treated with caution, not assumed to be approved .</span>
                </li>
                <li>
                    <strong>Compare Projects Side by Side</strong>
                    <span>Use AI comparison features to view location, price, plot size, approval status, and available documents in a structured format. This helps you eliminate options that do not meet your minimum criteria before spending time on site visits .</span>
                </li>
                <li>
                    <strong>Generate a Due-Diligence Question List</strong>
                    <span>Ask the AI tool to list the questions you should ask the developer or seller based on the project's available information. This might include: "What is the final LP number?" "Is the plot mortgaged to HMDA?" "What is the RERA registration number?" "Has land conversion been completed?" .</span>
                </li>
                <li>
                    <strong>Verify on Official Portals</strong>
                    <span>For each shortlisted project, verify the LP number on the HMDA DPMS portal, the RERA registration on rera.telangana.gov.in, the Encumbrance Certificate on IGRS, and land ownership on Bhu Bharati. AI can tell you where to look; only the portal can tell you what is true .</span>
                </li>
                <li>
                    <strong>Engage a Property Lawyer</strong>
                    <span>Before paying any advance, have a qualified property lawyer review the title chain, approval documents, and sale agreement. No AI tool replaces this step .</span>
                </li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Ask AI to Identify What's Missing</h4>
                <p>The most useful AI query is not "find me a plot" but "what information is missing from this project listing that I should verify?" A listing that omits the LP number, RERA reference, or survey number is telling you something important. AI can help you spot those gaps faster than manual review .</p>
            </div>

            <h2>Where AI Search Fits in the Indian Market</h2>

            <p>Indian real estate search has traditionally been fragmented across developer websites, broker WhatsApp groups, classified portals, and word-of-mouth. AI search tools are beginning to consolidate this information into a single query interface, which is useful for buyers who know their criteria but do not know where to start.</p>

            <p>For plot buyers in Telangana, the most valuable AI use case is <strong>pre-filtering by approval type and location</strong>. Instead of scrolling through listings that claim "HMDA approved" without proof, an AI tool can surface only those projects that provide an LP number, and then point you to the official portal for verification. The AI does not confirm the approval—it just narrows the list to projects that appear to have one worth checking .</p>

            <p>Similarly, for RERA-focused searches, AI can help you find projects by developer name, location, or project type, and then direct you to the TG-RERA portal for the actual registration check. The time savings come from not having to manually search multiple sources for the initial shortlist.</p>

            <h2>Common Mistakes When Using AI for Property Search</h2>

            <h3>Mistake 1: Treating AI Summaries as Verified Facts</h3>
            <p>An AI tool that says "this project appears to be RERA registered" is not the same as a verified registration. The word "appears" is doing a lot of work. Always confirm on the official portal .</p>

            <h3>Mistake 2: Assuming a Missing Detail Is a Minor Oversight</h3>
            <p>If a listing omits the LP number or RERA reference, that is a red flag—not a formatting issue. AI can help you spot the gap, but you must investigate it, not ignore it.</p>

            <h3>Mistake 3: Skipping the Site Visit Because AI Provided a Summary</h3>
            <p>AI can organize data, but it cannot show you the physical condition of the road, the actual plot boundaries, or the infrastructure on the ground. A site visit with the approved layout drawing remains essential .</p>

            <h3>Mistake 4: Using AI to Replace Legal Review</h3>
            <p>No AI tool can review the title chain or provide legal advice. The cost of a property lawyer is small compared to the risk of buying a plot with a defective title .</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>Can AI verify if a property has RERA or HMDA approval?</h3>
                    <p>No. AI can help you locate the approval reference and organize what the developer has submitted, but it cannot independently verify that the approval is current and valid. Verification requires checking the official TG-RERA portal, HMDA DPMS portal, or DTCP records. Treat AI-generated approval summaries as a starting point for your own verification, not as proof .</p>
                </div>

                <div class="faq-item">
                    <h3>What is an AI real estate advisor?</h3>
                    <p>An AI real estate advisor is a tool that accepts natural-language queries—such as "HMDA-approved plots near Tukkuguda under ₹30 lakh"—and returns matching project listings from a database. It can also compare project attributes, flag missing information, and generate due-diligence questions. It does not replace legal verification or professional advice .</p>
                </div>

                <div class="faq-item">
                    <h3>Is AI property search reliable in India?</h3>
                    <p>AI property search is reliable for discovery and organization, but not for verification. It can help you find projects that match your criteria and compare available details. It cannot confirm title, approval validity, or RERA registration status. Always verify the final shortlist on official government portals and through a property lawyer .</p>
                </div>

                <div class="faq-item">
                    <h3>How does AI help with property due diligence?</h3>
                    <p>AI can generate a checklist of questions based on the project's available information, highlight missing details (such as a missing LP number or an older completion date), and suggest which official portals to check. It streamlines preparation but does not replace the actual verification steps. You still need to pull the EC, check the RERA portal, and have a lawyer review the title .</p>
                </div>

                <div class="faq-item">
                    <h3>What should I check after using AI to find a project?</h3>
                    <p>After AI returns a shortlist, verify the LP number on the HMDA DPMS portal, check the RERA registration on rera.telangana.gov.in, pull the Encumbrance Certificate from IGRS, confirm land ownership on Bhu Bharati, and have a property lawyer review the title chain. AI narrows the search; official portals and legal review confirm the facts .</p>
                </div>

                <div class="faq-item">
                    <h3>Will AI replace property lawyers or agents?</h3>
                    <p>No. AI can streamline discovery and research preparation, but it does not provide legal advice, verify title, or take legal responsibility for the transaction. A property lawyer is essential for reviewing documents, and a reliable agent or developer relationship still matters for site-level information. AI is a research aid, not a replacement for professional services .</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Try AI-Assisted Search. Then Verify Officially.</h3>
                <p>Use the AI Advisor and project comparison features on VenturesDirectoryAI to narrow your search, compare available details, and prepare your due-diligence questions. Then verify every approval reference on the official TG-RERA and HMDA portals.</p>
                <div class="cta-actions">
                    <a href="#investmentModal" class="btn-white">Try the AI Advisor →</a>
                    <a href="how-to-verify-plot-before-buying-hyderabad" class="btn-outline-white">Plot Verification Checklist →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA</a> — DPMS layout permission search</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
                <li><a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener">Bhu Bharati</a> — Land records and ownership verification</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. AI-generated insights are research aids, not verified official facts. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on official HMDA, DTCP, and TG-RERA portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>

  
</body>
</html>`,gR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Areas to Buy Open Plots Near Hyderabad: A Comparison Guide (2026)</title>
    <meta name="description" content="Compare Hyderabad investment locations using connectivity, current market evidence, approvals, infrastructure, and resale considerations. A practical framework for plot buyers in Kokapet, Tukkuguda, and emerging corridors.">
    <link rel="canonical" href="https://venturesdirectoryai.combest-areas-to-buy-open-plots-near-hyderabad">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Areas to Buy Open Plots Near Hyderabad: How to Compare Locations",
        "description": "A comparison framework for Hyderabad plot locations using connectivity, current market evidence, approvals, infrastructure, and resale considerations.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/best-areas-to-buy-open-plots-near-hyderabad"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which area is best for buying open plots near Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There is no single best area. The right location depends on your budget, holding period, and purpose. Kokapet suits buyers prioritising proximity to the Financial District and willing to pay premium prices. Tukkuguda offers HMDA plots in the ₹25,000–45,000 per sq yd range with ORR access. East Hyderabad corridors like Bibinagar offer lower entry prices with AIIMS and railway connectivity. Compare using approvals, connectivity evidence, and resale liquidity rather than appreciation claims."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to buy plots in emerging areas near Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Emerging areas can offer lower entry prices, but they carry higher risk. Before buying, verify the layout's LP number on the HMDA DPMS portal, check the Encumbrance Certificate for encumbrances, confirm the survey number falls within the approved layout, and ensure basic infrastructure (roads, water, electricity) is either in place or has a clear government timeline. Avoid paying premiums for announced but unapproved projects."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between Kokapet and Tukkuguda for plot investment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kokapet is a premium western corridor location near the Financial District, with land guidance values revised to around ₹47,000–48,000 per sq yard in specific stretches and open-market prices significantly higher. Tukkuguda is further south along the Srisailam Highway, with HMDA plots trading at ₹25,000–45,000 per sq yd. Kokapet offers proximity and liquidity but at a steep entry price. Tukkuguda offers more affordable entry with ORR connectivity but may have longer holding periods for appreciation."
                }
            },
            {
                "@type": "Question",
                "name": "How does the Regional Ring Road (RRR) affect plot prices near Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RRR is an announced infrastructure project, not an operational one. While it has increased expectations in corridors like Bhongir, Yadadri, and parts of the southern periphery, buyers should not pay current premiums based on future connectivity. Verify whether the specific stretch near your plot has completed land acquisition, approved alignment, and a construction timeline. Distinguish between proposed and operational infrastructure before making a purchase decision."
                }
            },
            {
                "@type": "Question",
                "name": "Should I buy a plot in West Hyderabad or East Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "West Hyderabad dominates housing sales (63% in H1 2026) and offers better resale liquidity, but prices are significantly higher. East Hyderabad accounted for 9% of sales in the same period, with lower entry prices in corridors like Bibinagar and Ghatkesar. West suits buyers with higher budgets prioritising liquidity and proximity to IT hubs. East suits budget-conscious buyers with longer holding periods who value specific infrastructure anchors like AIIMS Bibinagar or the Yadadri corridor."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 0.88rem;
        }

        .comparison-table th {
            background: #0f3b5e;
            color: #ffffff;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
        }

        .comparison-table td {
            padding: 12px 14px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }

        .comparison-table tr:nth-child(even) {
            background: #f8fafc;
        }

        .comparison-table tr:last-child td {
            border-bottom: none;
        }

        /* Factor Cards */
        .factor-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
        }

        .factor-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
        }

        .factor-card h4 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-bottom: 6px;
        }

        .factor-card p {
            font-size: 0.88rem;
            color: #475569;
            margin-bottom: 0;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .comparison-table {
                font-size: 0.8rem;
            }
            .comparison-table th,
            .comparison-table td {
                padding: 10px 10px;
            }
            .factor-grid {
                grid-template-columns: 1fr;
            }
        }

        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / Best Areas to Buy Open Plots Near Hyderabad
            </div>
            <span class="article-category">Investment Locations</span>
            <h1>Best Areas to Buy Open Plots Near Hyderabad: How to Compare Locations</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 11 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> There is no single "best" area for open plots near Hyderabad. The right location depends on your budget, holding period, and purpose. Use a structured comparison framework instead of chasing appreciation claims. Focus on five factors: (1) verified layout approvals, (2) current connectivity evidence—not announced projects, (3) existing infrastructure, (4) supply and resale liquidity, and (5) the actual price you are paying per square yard compared to documented market ranges. This guide compares major corridors using these factors.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>The Five Comparison Factors That Actually Matter</h2>

            <p>Before looking at any specific location, understand what separates a sound plot purchase from a speculative one. These five factors should drive your decision.</p>

            <div class="factor-grid">
                <div class="factor-card">
                    <h4>1. Layout Approval Status</h4>
                    <p>Is the layout HMDA or DTCP approved? Can you verify the LP number on the official portal? A plot in a prime location without a valid approval is not a good investment—it is a legal risk.</p>
                </div>
                <div class="factor-card">
                    <h4>2. Connectivity Evidence</h4>
                    <p>Differentiate between operational roads and announced projects. An ORR exit that exists today is evidence. An RRR interchange planned for 2030 is not a basis for paying a premium today.</p>
                </div>
                <div class="factor-card">
                    <h4>3. Existing Infrastructure</h4>
                    <p>Are roads, water lines, electricity, and drainage already in place? Or will you be waiting for the layout developer or government to deliver them after registration?</p>
                </div>
                <div class="factor-card">
                    <h4>4. Supply and Liquidity</h4>
                    <p>How many similar plots are available in the area? A corridor with abundant supply may take longer to appreciate. Areas near employment hubs tend to have better resale velocity.</p>
                </div>
                <div class="factor-card">
                    <h4>5. Price vs. Documented Range</h4>
                    <p>Are you paying a price supported by actual transactions, or a premium built on future projections? Compare the asking price to government guidance values and reported market ranges.</p>
                </div>
                <div class="factor-card">
                    <h4>6. Buyer Profile and Demand Driver</h4>
                    <p>Who else is buying here? IT professionals near Kokapet, healthcare workers near AIIMS Bibinagar, or pilgrims near Yadadri create different demand patterns and holding periods.</p>
                </div>
            </div>

            <div class="callout callout-warning">
                <h4>⚠️ A Note on Appreciation Claims</h4>
                <p>No article or agent can guarantee future appreciation. Hyderabad's average residential prices rose 7% year-on-year to ₹8,258 per sq ft in H1 2026, but this is a citywide average—not a promise for any specific plot [citation:3]. Use documented ranges and your own due diligence, not projections, to guide your decision.</p>
            </div>

            <h2>Corridor-by-Corridor Comparison</h2>

            <h3>Kokapet and the Western Premium Corridor</h3>

            <p><strong>Who it suits:</strong> Buyers with higher budgets who prioritise proximity to the Financial District, resale liquidity, and established social infrastructure.</p>

            <p><strong>What the evidence shows:</strong> Kokapet recorded ₹1,298 crore in luxury residential sales in FY 2026, the highest among South Indian localities [citation:8]. Government guidance values in specific Kokapet stretches were revised to approximately ₹47,000–48,000 per sq yard in June 2026, with open-market prices running 30–100% above guidance in high-demand pockets [citation:12]. HMDA's Neopolis layout auctions in Kokapet have previously generated ₹4,000–5,000 crore [citation:11].</p>

            <p><strong>What to watch:</strong> Entry prices are steep. This is not a budget plot market. The buyer profile is dominated by high-net-worth individuals and premium developers. Plot availability in the open market is limited compared to apartment supply.</p>

            <h3>Tukkuguda and the Southern ORR Corridor</h3>

            <p><strong>Who it suits:</strong> Buyers seeking HMDA-approved plots in the ₹25,000–45,000 per sq yard range with ORR access and a medium-to-long holding period.</p>

            <p><strong>What the evidence shows:</strong> Broker Network's Q2 2026 tracker lists Tukkuguda HMDA plots at ₹25,000–45,000 per sq yd [citation:2]. The corridor benefits from ORR connectivity and proximity to the Srisailam Highway. It is often compared with Kadthal and Kandukur as a more affordable alternative to the western premium belt.</p>

            <p><strong>What to watch:</strong> Resale liquidity may be slower than Kokapet. Verify that the specific layout has completed infrastructure (roads, drainage, electricity) and that the LP number is searchable. The corridor has seen significant plot supply, which can moderate price growth.</p>

            <h3>East Hyderabad: Bibinagar, Ghatkesar, and the AIIMS Corridor</h3>

            <p><strong>Who it suits:</strong> Budget-conscious buyers with a longer holding period who value specific institutional anchors like AIIMS Bibinagar or the Yadadri temple corridor.</p>

            <p><strong>What the evidence shows:</strong> East Hyderabad accounted for 9% of housing sales in H1 2026, compared to West Hyderabad's 63% [citation:3]. Bibinagar offers DTCP-approved plots in the ₹20–30 lakh range for 150–200 sq yd, according to project-specific listings [citation:1]. AIIMS Bibinagar is operational, with 87% of work completed as of July 2026 and a target for full operations by December 2026 [citation:1]. The area also has an active railway station and NH-163 access to ORR Exit 9 [citation:6].</p>

            <p><strong>What to watch:</strong> Social infrastructure is still building out compared to West Hyderabad. The RRR is under construction but not operational. Do not pay a premium based on RRR expectations alone. Verify whether the specific layout is HMDA or DTCP approved, as both exist in the corridor.</p>

            <h3>Yadadri and the Pilgrim Economy Corridor</h3>

            <p><strong>Who it suits:</strong> Buyers interested in a demand driver tied to temple tourism and related commercial activity, rather than IT employment.</p>

            <p><strong>What the evidence shows:</strong> The Yadadri temple development has increased pilgrim traffic, supporting demand for hotels, restaurants, and transport services [citation:1]. Interest in weekend homes and plot investments is growing across the Bhongir–Yadadri–Bibinagar belt. The proposed Ghatkesar–Yadadri railway line (approximately 33 km) is progressing [citation:1].</p>

            <p><strong>What to watch:</strong> Proximity to the temple alone does not determine land value. Distance from the highway, road connectivity, and project approvals matter more. This is a smaller, more specialized market with different liquidity characteristics than the IT corridors.</p>

            <div class="callout callout-info">
                <h4>📊 What the Citywide Data Says</h4>
                <p>Hyderabad housing sales rose 1% year-on-year to 19,249 units in H1 2026 [citation:3]. Average residential prices rose 7% to ₹8,258 per sq ft. West Hyderabad dominated with 63% of sales, while East Hyderabad accounted for 9%. The ₹1–2 crore segment remained the largest, at 45% of sales. These figures describe the apartment market, not the plot market—but they indicate where end-user demand is concentrated, which affects resale liquidity for plots.</p>
            </div>

            <h2>How to Compare Any Two Locations</h2>

            <p>When you shortlist two or three areas, run this comparison for each specific layout—not just the broader locality.</p>

            <ol>
                <li><strong>Verify the LP number</strong> on the HMDA DPMS portal. If it does not appear, eliminate the layout from consideration.</li>
                <li><strong>Check the Encumbrance Certificate</strong> for the survey number. Look for mortgages or claims.</li>
                <li><strong>Calculate the true price per sq yd</strong> including registration, stamp duty, and any development charges. Compare this to documented market ranges, not to the developer's claimed "future value."</li>
                <li><strong>Visit the site</strong> with the approved layout drawing. Confirm road widths, plot dimensions, and open space locations match the sanctioned plan.</li>
                <li><strong>Assess existing infrastructure</strong>—not promised infrastructure. Are roads paved? Is water available? Is electricity connected?</li>
                <li><strong>Ask about resale.</strong> How many plots in this layout have been resold in the last two years? A developer's sales pitch is not evidence of liquidity.</li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Use the RRR and Future City as Research Triggers, Not Buying Signals</h4>
                <p>The Regional Ring Road and Bharat Future City are real government projects with announced timelines. Use them as reasons to investigate an area—not as reasons to pay a premium today. Check whether land acquisition is complete, whether the alignment is finalized, and whether construction has started. If the infrastructure is still in the planning stage, the current price should not already reflect its completion.</p>
            </div>

            <h2>Common Mistakes When Choosing a Plot Location</h2>

            <h3>Mistake 1: Buying Based on "Appreciation Potential" Alone</h3>
            <p>Every developer claims their project will appreciate. Without verified approvals, existing infrastructure, and resale evidence, appreciation is a hope—not an investment thesis.</p>

            <h3>Mistake 2: Assuming "Near ORR" Means the Same Thing Everywhere</h3>
            <p>A plot 15 minutes from an ORR exit is different from a plot 45 minutes away. Measure the actual drive time during peak hours, not the distance on a map.</p>

            <h3>Mistake 3: Ignoring the Buyer Profile</h3>
            <p>If the primary buyers in an area are speculators rather than end-users, resale liquidity may be poor when you want to sell. Areas with employment anchors (IT hubs, AIIMS, industrial clusters) have more stable demand.</p>

            <h3>Mistake 4: Paying a Premium for Announced Projects</h3>
            <p>The RRR, Future City, and proposed metro extensions are all real projects. But paying today's premium for infrastructure that may take 5–10 years to materialize reduces your margin of safety. Verify what is operational before paying for what is promised.</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>Which area is best for buying open plots near Hyderabad?</h3>
                    <p>There is no single best area. The right location depends on your budget, holding period, and purpose. Kokapet suits buyers prioritising proximity to the Financial District and willing to pay premium prices. Tukkuguda offers HMDA plots in the ₹25,000–45,000 per sq yd range with ORR access [citation:2]. East Hyderabad corridors like Bibinagar offer lower entry prices with AIIMS and railway connectivity [citation:1]. Compare using approvals, connectivity evidence, and resale liquidity rather than appreciation claims.</p>
                </div>

                <div class="faq-item">
                    <h3>Is it safe to buy plots in emerging areas near Hyderabad?</h3>
                    <p>Emerging areas can offer lower entry prices, but they carry higher risk. Before buying, verify the layout's LP number on the HMDA DPMS portal, check the Encumbrance Certificate for encumbrances, confirm the survey number falls within the approved layout, and ensure basic infrastructure (roads, water, electricity) is either in place or has a clear government timeline. Avoid paying premiums for announced but unapproved projects.</p>
                </div>

                <div class="faq-item">
                    <h3>What is the difference between Kokapet and Tukkuguda for plot investment?</h3>
                    <p>Kokapet is a premium western corridor location near the Financial District, with land guidance values revised to around ₹47,000–48,000 per sq yard in specific stretches and open-market prices significantly higher [citation:12]. Tukkuguda is further south along the Srisailam Highway, with HMDA plots trading at ₹25,000–45,000 per sq yd [citation:2]. Kokapet offers proximity and liquidity but at a steep entry price. Tukkuguda offers more affordable entry with ORR connectivity but may have longer holding periods for appreciation.</p>
                </div>

                <div class="faq-item">
                    <h3>How does the Regional Ring Road (RRR) affect plot prices near Hyderabad?</h3>
                    <p>The RRR is an announced infrastructure project, not an operational one. While it has increased expectations in corridors like Bhongir, Yadadri, and parts of the southern periphery, buyers should not pay current premiums based on future connectivity. Verify whether the specific stretch near your plot has completed land acquisition, approved alignment, and a construction timeline [citation:4]. Distinguish between proposed and operational infrastructure before making a purchase decision.</p>
                </div>

                <div class="faq-item">
                    <h3>Should I buy a plot in West Hyderabad or East Hyderabad?</h3>
                    <p>West Hyderabad dominates housing sales (63% in H1 2026) and offers better resale liquidity, but prices are significantly higher [citation:3]. East Hyderabad accounted for 9% of sales in the same period, with lower entry prices in corridors like Bibinagar and Ghatkesar. West suits buyers with higher budgets prioritising liquidity and proximity to IT hubs. East suits budget-conscious buyers with longer holding periods who value specific infrastructure anchors like AIIMS Bibinagar or the Yadadri corridor.</p>
                </div>

                <div class="faq-item">
                    <h3>What should I check before buying a plot in an emerging corridor?</h3>
                    <p>Follow the same due diligence as any plot purchase: verify the LP number, check the EC, confirm the survey number is within the approved layout, and visit the site with the sanctioned drawing. Additionally, be more conservative about infrastructure claims. If the road to the layout is not paved or the water supply is not connected, factor that into your price and timeline expectations. Emerging areas require more patience and carry more risk than established corridors.</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Compare Ventures by Location Before You Decide</h3>
                <p>Use VenturesDirectoryAI to search ventures by location and compare available project details—developer information, approval references, and location data—before you visit the site or pay any advance.</p>
                <div class="cta-actions">
                    <a href="/search" class="btn-white">Search Ventures by Location →</a>
                    <a href="hmda-vs-dtcp-approved-layouts" class="btn-outline-white">Learn HMDA/DTCP Verification →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA</a> — Layout permission and DPMS verification</li>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
                <li><a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener">Bhu Bharati</a> — Land records and ownership verification</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Location comparisons are based on publicly available data and reported market ranges as of October 2026. Prices and infrastructure status change. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on official HMDA, DTCP, and TG-RERA portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>

</body>
</html>`,vR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HMDA vs DTCP Approved Layouts: 15 Checks Before Buying a Plot (2026)</title>
    <meta name="description" content="Understand HMDA and DTCP layout approvals, important documents, verification steps, and 15 essential plot-buying checks in Telangana. Learn to verify LP numbers and avoid common mistakes.">
    <link rel="canonical" href="https://venturesdirectoryai.com/blog/hmda-vs-dtcp-approved-layouts">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "HMDA vs DTCP Approved Layouts: 15 Checks Before Buying a Plot",
        "description": "Understand HMDA and DTCP layout approvals, important documents, verification steps, and 15 essential plot-buying checks in Telangana.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/hmda-vs-dtcp-approved-layouts"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is HMDA approval better than DTCP approval?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neither is inherently 'better.' The correct authority depends on the plot's location. HMDA approves layouts within the Hyderabad Metropolitan Region, while DTCP handles areas outside it. What matters is that the approval is genuine, current, and matches the specific plot you are buying."
                }
            },
            {
                "@type": "Question",
                "name": "What is an LP number in a layout approval?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LP stands for Layout Permission. It is the unique identifier on the approved proceedings and drawing issued by HMDA or DTCP. If a developer cannot provide an LP number that is searchable on the official portal, the layout may not have statutory approval."
                }
            },
            {
                "@type": "Question",
                "name": "Can I buy a plot in a DTCP layout that is now inside HMDA limits?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the approval does not automatically become invalid. However, the layout's road widths and open space may fall below current HMDA norms. Verify how this will be treated when you apply for building permission, and consult a property lawyer before proceeding."
                }
            },
            {
                "@type": "Question",
                "name": "What is a draft layout approval?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A draft approval is an intermediate stage, not final approval. The authority approves the plan, but the developer must mortgage certain plots as security and complete infrastructure works before the final layout is released. Do not pay full price based on a draft approval alone."
                }
            },
            {
                "@type": "Question",
                "name": "How do I check if a plot is mortgaged to HMDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "During the layout approval process, developers may mortgage certain plots to HMDA as security. These plots cannot be legally sold until the mortgage is released. Check the HMDA DPMS public search for mortgage flags on the specific layout before paying any advance."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 0.92rem;
        }

        .comparison-table th {
            background: #0f3b5e;
            color: #ffffff;
            text-align: left;
            padding: 14px 16px;
            font-weight: 600;
        }

        .comparison-table td {
            padding: 14px 16px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }

        .comparison-table tr:nth-child(even) {
            background: #f8fafc;
        }

        .comparison-table tr:last-child td {
            border-bottom: none;
        }

        /* Checklist */
        .checklist {
            list-style: none;
            padding-left: 0;
            counter-reset: checklist-counter;
        }

        .checklist li {
            counter-increment: checklist-counter;
            padding: 16px 20px 16px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .checklist li::before {
            content: counter(checklist-counter);
            position: absolute;
            left: 16px;
            top: 16px;
            width: 28px;
            height: 28px;
            background: #0f3b5e;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .checklist li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .checklist li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .comparison-table {
                font-size: 0.85rem;
            }
            .comparison-table th,
            .comparison-table td {
                padding: 10px 12px;
            }
            .checklist li {
                padding-left: 52px;
            }
        }

        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header class="header">
        <div class="header-inner">
            <a href="/" class="logo">Ventures<span>Directory</span>AI</a>
            <nav class="nav-links" aria-label="Main navigation">
                <a href="/">Home</a>
                <a href="/search">Search Ventures</a>
                <a href="/blogs">Guides</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    </header>

    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / HMDA vs DTCP Approved Layouts
            </div>
            <span class="article-category">RERA &amp; Approvals</span>
            <h1>HMDA vs DTCP Approved Layouts: 15 Checks Before Buying a Plot</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 12 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> The HMDA vs DTCP question is mostly about location, not quality. HMDA approves layouts inside the Hyderabad Metropolitan Region, while DTCP handles most areas outside it. A properly issued approval from either authority is valid. What matters is that the LP number is real, current, and matches the specific plot you are buying. This guide explains the jurisdiction, the documents that matter, and 15 checks to complete before paying any advance.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>Who Approves Layouts Where? HMDA vs DTCP Jurisdiction</h2>
            
            <p>Understanding which authority governs your plot's location is the first step. The boundary between HMDA and DTCP territory is not static—it changed significantly in March 2025.</p>

            <p><strong>HMDA (Hyderabad Metropolitan Development Authority)</strong> was established in 2008 and originally covered 7,257 sq km. In March 2025, the government extended the Hyderabad Metropolitan Region up to the proposed Regional Ring Road (RRR) alignment, plus a buffer of up to 2 km outside it. The new extent covers approximately 10,472.7 sq km across 1,355 revenue villages in 104 mandals across 11 districts [citation:2].</p>

            <p><strong>DTCP (Directorate of Town and Country Planning)</strong> handles layout approvals and technical clearances for areas outside HMDA. This includes tier-2 and tier-3 towns, emerging industrial clusters, and rural districts across Telangana [citation:2][citation:12].</p>

            <div class="callout callout-warning">
                <h4>⚠️ Important: The Boundary Moved in 2025</h4>
                <p>Many villages that were previously under DTCP jurisdiction are now inside the extended HMDA region. Older layouts in these areas may carry valid DTCP approvals, while newer ones will carry HMDA approvals. Both can be legitimate—the authority depends on the date and location of approval. Always confirm which authority governs your specific survey number by checking the G.O.Ms.No.68 list and the official HMDA portal [citation:2][citation:7].</p>
            </div>

            <p><strong>FCDA (Future City Development Authority):</strong> On the same day the HMDA boundary was extended, 36 revenue villages were moved out of HMDA and placed under the newly notified FCDA. If your plot is in the Future City belt, verify which authority issued the approval and when [citation:2].</p>

            <h2>What Does an HMDA or DTCP Approval Actually Mean?</h2>

            <p>A layout approval is a <strong>planning permission for the entire layout</strong>. It confirms that the land was subdivided according to the master plan's land use, with roads, open spaces, and amenity areas set aside. It does <strong>not</strong> certify the seller's title, and it does <strong>not</strong> register the project under RERA [citation:2].</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>What it confirms</th>
                        <th>What it does NOT confirm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Land use matches the master plan</td>
                        <td>Clean and marketable title</td>
                    </tr>
                    <tr>
                        <td>Road widths meet authority norms</td>
                        <td>RERA registration of the project</td>
                    </tr>
                    <tr>
                        <td>Open space is reserved as per rules</td>
                        <td>That the developer has completed infrastructure works</td>
                    </tr>
                    <tr>
                        <td>Drainage and utility provisions are planned</td>
                        <td>That the specific plot is not mortgaged</td>
                    </tr>
                </tbody>
            </table>

            <h2>The 15 Checks Before Buying a Plot</h2>

            <p>Use this checklist systematically. Do not skip steps because a developer or agent seems trustworthy.</p>

            <ol class="checklist">
                <li>
                    <strong>Get the LP Number in Writing</strong>
                    <span>The Layout Permission (LP) number is the unique identifier on the approved proceedings and drawing. It should look something like <code>000272/LO/Plg/HMDA/2019</code>. If the developer cannot provide this, stop [citation:9][citation:15].</span>
                </li>
                <li>
                    <strong>Verify the LP Number on the Official Portal</strong>
                    <span>Search the LP number on HMDA's DPMS portal (hmda.gov.in) or the DTCP portal. The record should show the developer name, survey numbers, approved area, and current status. If it does not appear, treat the layout as unapproved [citation:8][citation:15].</span>
                </li>
                <li>
                    <strong>Confirm the Approving Authority Matches the Location</strong>
                    <span>An HMDA approval for a plot outside HMDA jurisdiction is not valid, and vice versa. Cross-check the district and mandal against the authority's current boundary [citation:9].</span>
                </li>
                <li>
                    <strong>Check That Your Survey Number Falls Within the Approved Extent</strong>
                    <span>The survey number on your sale agreement must match a survey number covered by the layout approval. A mismatch is a serious red flag [citation:9][citation:15].</span>
                </li>
                <li>
                    <strong>Download and Match the Approved Layout Drawing</strong>
                    <span>Compare the approved drawing against the physical site. Check road widths, plot dimensions, and open space locations. Any deviation means the developer has not complied with the sanctioned plan [citation:7][citation:9].</span>
                </li>
                <li>
                    <strong>Verify Your Plot Is Not in Reserved Open Space</strong>
                    <span>Approved layouts reserve a percentage of land for parks, roads, and community use. These areas cannot be sold as plots. Confirm your plot number is in the saleable residential zone [citation:9].</span>
                </li>
                <li>
                    <strong>Check for HMDA Mortgage Flags</strong>
                    <span>During the approval process, developers mortgage certain plots to the authority as security. These plots cannot be sold until the mortgage is released. Check the DPMS public search for mortgage information on the specific layout [citation:9].</span>
                </li>
                <li>
                    <strong>Distinguish Draft Approval from Final Approval</strong>
                    <span>A draft approval is an intermediate stage. The developer must complete infrastructure works and obtain mortgage release before the final layout is issued. Do not pay full price on a draft approval [citation:7].</span>
                </li>
                <li>
                    <strong>Confirm the Approval Is Current and Valid</strong>
                    <span>Layout permissions have validity conditions. Check the portal for any lapse, modification, or show-cause notices. An expired or lapsed approval is not sufficient [citation:15].</span>
                </li>
                <li>
                    <strong>Check the Master Plan Land Use</strong>
                    <span>The plot must be zoned residential in the applicable HMDA or DTCP master plan. Land marked as conservation, water body, or industrial is a reason to stop [citation:7].</span>
                </li>
                <li>
                    <strong>Verify Lake FTL and Nala Buffer Clearance</strong>
                    <span>Construction is not allowed within the Full Tank Level (FTL) of a lake or within buffer strips around lakes and stormwater nalas. Check with HMDA's Lake Protection Committee or HYDRAA [citation:7][citation:8].</span>
                </li>
                <li>
                    <strong>Check for GO 111 Restrictions (If Applicable)</strong>
                    <span>GO 111 restricted construction in 84 villages around Osman Sagar and Himayat Sagar. While restrictions were lifted in 2022, the matter has been in litigation. Treat plain claims that "GO 111 is gone" as sales talk—verify the current status in writing [citation:7].</span>
                </li>
                <li>
                    <strong>Pull the Encumbrance Certificate (EC)</strong>
                    <span>The EC shows registered transactions on the property. Look for mortgages, liens, or claims that are not disclosed by the seller [citation:8].</span>
                </li>
                <li>
                    <strong>Verify Land Conversion (NALA) If Formerly Agricultural</strong>
                    <span>If the land was agricultural, confirm that conversion to non-agricultural use has been completed. Check land records on Bhu Bharati (which replaced Dharani in 2025) [citation:8].</span>
                </li>
                <li>
                    <strong>Engage an Independent Property Lawyer</strong>
                    <span>No checklist replaces professional legal review. Have a lawyer verify the title chain, approval documents, and sale agreement before you pay any advance. The fee is small compared to the risk [citation:7].</span>
                </li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Visit the Site with the Approved Drawing</h4>
                <p>Download the approved layout plan from the portal. Walk the site with the printed drawing in hand. Match the road widths, plot boundaries, and open space locations physically. Discrepancies between the drawing and the ground are a warning sign that the developer has sold plots outside the sanctioned plan [citation:7][citation:9].</p>
            </div>

            <h2>Common Mistakes Buyers Make</h2>

            <h3>Mistake 1: Trusting "HMDA Applied" or "Under Process"</h3>
            <p>"Applied for" and "under process" mean there is <strong>no approval</strong>. Do not pay any advance on this basis. An application number is not an LP number [citation:7].</p>

            <h3>Mistake 2: Confusing Gram Panchayat Approval with HMDA/DTCP Approval</h3>
            <p>Gram Panchayat sanction letters are sometimes presented as if they are equivalent to HMDA or DTCP layout approvals. They are not. Panchayat approval does not satisfy bank loan requirements and cannot be used for plot registration without further state-level approval [citation:9].</p>

            <h3>Mistake 3: Assuming a Registered Sale Deed Means the Layout Is Approved</h3>
            <p>Registration records a transfer of ownership. It does <strong>not</strong> certify layout approval, FTL clearance, or a clean title. These are separate checks [citation:8].</p>

            <h3>Mistake 4: Ignoring Older DTCP Layouts Now Inside HMDA Limits</h3>
            <p>A DTCP layout that now falls inside the extended HMDA region is not illegal for that reason. But its roads and open spaces may be below current HMDA norms. Ask HMDA or a local lawyer how this will be treated when you apply for building permission [citation:7].</p>

            <h3>Mistake 5: Skipping the Mortgage Check</h3>
            <p>Buyers have purchased plots that were mortgaged to HMDA and later found registration blocked. Always check the DPMS public search for mortgage flags on the specific layout before paying anything [citation:9].</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>Is HMDA approval better than DTCP approval?</h3>
                    <p>Neither is inherently "better." The correct authority depends on the plot's location. HMDA approves layouts within the Hyderabad Metropolitan Region, while DTCP handles areas outside it. What matters is that the approval is genuine, current, and matches the specific plot you are buying. An HMDA-approved layout in a prime location may have better resale liquidity, but a valid DTCP layout in a growth corridor can also be a sound purchase [citation:2][citation:8].</p>
                </div>

                <div class="faq-item">
                    <h3>What is an LP number in a layout approval?</h3>
                    <p>LP stands for Layout Permission. It is the unique identifier on the approved proceedings and drawing issued by HMDA or DTCP. The number typically includes a serial number, the permission type (LO for layout), the department (Plg for Planning), the authority (HMDA), and the year of issue. If a developer cannot provide an LP number that is searchable on the official portal, the layout may not have statutory approval [citation:9][citation:15].</p>
                </div>

                <div class="faq-item">
                    <h3>Can I buy a plot in a DTCP layout that is now inside HMDA limits?</h3>
                    <p>Yes, the approval does not automatically become invalid. However, the layout's road widths and open space may fall below current HMDA norms. Verify how this will be treated when you apply for building permission, and consult a property lawyer before proceeding. The authority depends on the date and location of approval, so both DTCP and HMDA approvals can be valid in the extended region [citation:2][citation:7].</p>
                </div>

                <div class="faq-item">
                    <h3>What is a draft layout approval?</h3>
                    <p>A draft approval is an intermediate stage, not final approval. The authority approves the plan, but the developer must mortgage certain plots as security and complete infrastructure works (roads, drains, open spaces) before the final layout is released. Do not pay full price based on a draft approval alone. Ask whether the final layout has been released and which plots are mortgaged [citation:7].</p>
                </div>

                <div class="faq-item">
                    <h3>How do I check if a plot is mortgaged to HMDA?</h3>
                    <p>During the layout approval process, developers may mortgage certain plots to HMDA as security. These plots cannot be legally sold until the mortgage is released. Check the HMDA DPMS public search for mortgage flags on the specific layout before paying any advance. If the plot is listed under HMDA mortgage, do not proceed until the discharge is confirmed in writing [citation:9].</p>
                </div>

                <div class="faq-item">
                    <h3>Does a DTCP-approved layout automatically qualify for a bank loan?</h3>
                    <p>Most major banks accept both HMDA and DTCP approvals, but DTCP layouts may face more scrutiny, especially if the layout is in a remote area or lacks clear infrastructure. Some lenders restrict DTCP plot loans to specific nationalized banks or local cooperative institutions. Confirm loan eligibility with your bank before committing [citation:12].</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Research the Venture Before You Verify the Approval</h3>
                <p>Use VenturesDirectoryAI to find ventures by location and collect the details you need—project name, developer, approval references, and available documents—before you begin the verification process on official portals.</p>
                <div class="cta-actions">
                    <a href="/search" class="btn-white">Search Ventures by Location →</a>
                    <a href="/blog/how-to-check-rera-registration-telangana" class="btn-outline-white">Learn RERA Verification →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA Official Portal</a> — Layout permissions and DPMS public search</li>
                <li><a href="https://dtcp.telangana.gov.in" target="_blank" rel="noopener">DTCP Telangana</a> — Layout approvals outside HMDA jurisdiction</li>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://lrs.telangana.gov.in" target="_blank" rel="noopener">LRS Telangana</a> — Layout Regularisation Scheme</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on official HMDA, DTCP, and TG-RERA portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container" style="max-width: 1200px;">
            <p>© 2026 VenturesDirectoryAI. All rights reserved. | <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a></p>
        </div>
    </footer>

</body>
</html>`,yR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Verify a Plot Before Buying in Hyderabad: Complete Checklist (2026)</title>
    <meta name="description" content="Use this practical 15-point checklist to investigate plot documents, land ownership, survey numbers, approvals, and potential risks in Hyderabad. Verify before you pay any advance.">
    <link rel="canonical" href="https://venturesdirectoryai.comhow-to-verify-plot-before-buying-hyderabad">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Verify a Plot Before Buying in Hyderabad: The Complete Checklist",
        "description": "A practical 15-point due-diligence checklist covering title history, survey numbers, boundaries, encumbrances, access roads, and layout permissions for plot buyers in Hyderabad.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/how-to-verify-plot-before-buying-hyderabad"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What documents should I check before buying a plot in Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The essential documents include the sale deed and title chain (minimum 30 years), Encumbrance Certificate (EC) for at least 13 years, ROR-1B/Pahani from Bhu Bharati, layout approval with LP number, latest property tax receipts, and land conversion certificate (NALA) if applicable. A property lawyer should review all of these before any advance is paid."
                }
            },
            {
                "@type": "Question",
                "name": "How do I check land ownership in Telangana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use the Bhu Bharati portal (bhubharati.telangana.gov.in, previously Dharani) to search by survey number, passbook number, or Bhudhaar. The ROR-1B shows the recorded owner and land details. However, this is not proof of clear title—you must also check the Encumbrance Certificate and have a lawyer verify the title chain."
                }
            },
            {
                "@type": "Question",
                "name": "Is a notarized plot sale valid in Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A notarized agreement or GPA does not transfer ownership. Under the Registration Act, 1908, any transfer of immovable property worth more than ₹100 must be registered at the Sub-Registrar Office. Notary land has no legal validity for ownership, cannot be used for bank loans, and carries high fraud risk."
                }
            },
            {
                "@type": "Question",
                "name": "How far back should the Encumbrance Certificate go?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Obtain an EC for a minimum of 13 years, but 30 years is preferable for thorough due diligence. The EC records all registered transactions including sales, mortgages, gifts, and court attachments. Online EC records in Telangana generally cover transactions from 1983 onwards."
                }
            },
            {
                "@type": "Question",
                "name": "What is the most common mistake plot buyers make in Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Paying an advance based on a developer's claim of 'approval pending' or 'HMDA applied.' An application number or file number is not an LP number. No final layout approval means no legally saleable plot. Always verify the LP number on the official HMDA DPMS portal before paying anything."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #dcfce7;
            color: #15803d;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout-danger {
            background: #fef2f2;
            border: 1px solid #fecaca;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Checklist */
        .checklist {
            list-style: none;
            padding-left: 0;
            counter-reset: checklist-counter;
        }

        .checklist li {
            counter-increment: checklist-counter;
            padding: 16px 20px 16px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .checklist li::before {
            content: counter(checklist-counter);
            position: absolute;
            left: 16px;
            top: 16px;
            width: 28px;
            height: 28px;
            background: #0f3b5e;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .checklist li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .checklist li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* Document Table */
        .doc-table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 0.9rem;
        }

        .doc-table th {
            background: #0f3b5e;
            color: #ffffff;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
        }

        .doc-table td {
            padding: 12px 14px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }

        .doc-table tr:nth-child(even) {
            background: #f8fafc;
        }

        .doc-table tr:last-child td {
            border-bottom: none;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .doc-table {
                font-size: 0.82rem;
            }
            .doc-table th,
            .doc-table td {
                padding: 10px 12px;
            }
            .checklist li {
                padding-left: 52px;
            }
        }

        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

   
    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / How to Verify a Plot Before Buying in Hyderabad
            </div>
            <span class="article-category">Plot Verification</span>
            <h1>How to Verify a Plot Before Buying in Hyderabad: The Complete Checklist</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 14 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> Before paying any advance for a plot in Hyderabad, verify these five things independently: (1) the land owner on Bhu Bharati matches the seller, (2) the Encumbrance Certificate shows no mortgages or claims, (3) the layout has a valid LP number searchable on HMDA's DPMS portal, (4) your survey number falls within the approved layout extent, and (5) a property lawyer has reviewed the title chain. This guide gives you the full 15-point checklist that covers everything from documents to physical site verification.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>The Documents You Must Collect First</h2>

            <p>Before any site visit or negotiation, request these documents from the seller or developer. If any are missing, treat that as a reason to pause—not a minor inconvenience to overlook.</p>

            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Document</th>
                        <th>What It Confirms</th>
                        <th>Where to Verify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Sale Deed &amp; Title Chain (30 years)</strong></td>
                        <td>Ownership history and transfer legitimacy</td>
                        <td>Sub-Registrar Office / lawyer review</td>
                    </tr>
                    <tr>
                        <td><strong>Encumbrance Certificate (EC)</strong></td>
                        <td>Registered mortgages, liens, claims</td>
                        <td>registration.telangana.gov.in [citation:7][citation:15]</td>
                    </tr>
                    <tr>
                        <td><strong>ROR-1B / Pahani</strong></td>
                        <td>Recorded owner and land type</td>
                        <td>bhubharati.telangana.gov.in [citation:2][citation:8]</td>
                    </tr>
                    <tr>
                        <td><strong>Layout Approval (LP Number)</strong></td>
                        <td>Planning permission for the layout</td>
                        <td>hmda.gov.in DPMS / DTCP portal [citation:4][citation:6]</td>
                    </tr>
                    <tr>
                        <td><strong>Latest Property Tax Receipts</strong></td>
                        <td>No outstanding government dues</td>
                        <td>GHMC / local municipal office</td>
                    </tr>
                    <tr>
                        <td><strong>NALA / Land Conversion (if applicable)</strong></td>
                        <td>Agricultural land legally converted</td>
                        <td>Bhu Bharati records [citation:8]</td>
                    </tr>
                </tbody>
            </table>

            <div class="callout callout-danger">
                <h4>🚨 Critical: Notary Land Is Not Ownership</h4>
                <p>A notarized agreement or General Power of Attorney (GPA) does <strong>not</strong> transfer ownership in Telangana. Under the Registration Act, 1908, any immovable property transfer above ₹100 requires a registered sale deed. Notary land cannot be used for bank loans, building permissions, or legal ownership claims. If a seller offers a "notary plot" at a discount, walk away [citation:12].</p>
            </div>

            <h2>The 15-Point Verification Checklist</h2>

            <p>Work through these systematically. Do not skip steps because an agent or developer seems trustworthy.</p>

            <ol class="checklist">
                <li>
                    <strong>Verify Land Ownership on Bhu Bharati</strong>
                    <span>Search the survey number on bhubharati.telangana.gov.in (formerly Dharani). The ROR-1B should show the seller's name. If the recorded owner differs from the person selling to you, stop and investigate [citation:2][citation:8].</span>
                </li>
                <li>
                    <strong>Pull a 13–30 Year Encumbrance Certificate</strong>
                    <span>Go to registration.telangana.gov.in → Encumbrance Search. Enter the survey number and request at least 13 years (30 is safer). The EC must show no active mortgages, court attachments, or undisclosed claims. Online records generally cover transactions from 1983 onwards [citation:7][citation:15].</span>
                </li>
                <li>
                    <strong>Confirm the Layout Has a Searchable LP Number</strong>
                    <span>Ask for the Layout Permission number in writing. Format looks like <code>000272/LO/Plg/HMDA/2019</code>. Search it on hmda.gov.in → DPMS portal. The record should show the developer name, survey numbers, approved area, and status. If it does not appear, the layout may be unapproved [citation:4][citation:6].</span>
                </li>
                <li>
                    <strong>Match Your Survey Number to the Approved Layout</strong>
                    <span>The survey number on your sale agreement must fall within the approved layout extent shown on the portal. A mismatch means your plot may not be part of the sanctioned plan [citation:4].</span>
                </li>
                <li>
                    <strong>Check for HMDA Mortgage Flags</strong>
                    <span>Developers often mortgage a portion of plots to HMDA as security during approval. These plots cannot be sold until the mortgage is released. Search the DPMS public record for mortgage flags on the specific layout. Do not pay if your plot is listed as mortgaged [citation:6].</span>
                </li>
                <li>
                    <strong>Download and Compare the Approved Layout Drawing</strong>
                    <span>Get the sanctioned drawing from the portal. Compare road widths, plot dimensions, and open space locations against what you see on site. Any deviation means the developer has sold outside the sanctioned plan [citation:6].</span>
                </li>
                <li>
                    <strong>Confirm Your Plot Is Not in Reserved Open Space</strong>
                    <span>Approved layouts reserve land for parks, roads, and community use. These cannot be sold as plots. Verify your plot number is in the saleable residential zone on the approved drawing [citation:6].</span>
                </li>
                <li>
                    <strong>Check RERA Registration (If Applicable)</strong>
                    <span>If the project is marketed as a residential venture, check whether it is registered on rera.telangana.gov.in. RERA registration is separate from layout approval—both matter [citation:5][citation:10].</span>
                </li>
                <li>
                    <strong>Verify Land Use Zoning</strong>
                    <span>Confirm the plot is zoned residential in the applicable HMDA or DTCP master plan. Land marked as conservation, water body, or industrial is a reason to stop [citation:1].</span>
                </li>
                <li>
                    <strong>Check Lake FTL and Nala Buffer Clearance</strong>
                    <span>Construction is prohibited within the Full Tank Level of lakes and buffer zones around nalas. If the plot is near a water body, verify clearance with HMDA or HYDRAA before proceeding.</span>
                </li>
                <li>
                    <strong>Confirm Land Conversion (NALA) If Formerly Agricultural</strong>
                    <span>If the land was agricultural, the conversion to non-agricultural use must be completed. Check Bhu Bharati records and request the conversion order [citation:8].</span>
                </li>
                <li>
                    <strong>Obtain a Recent EC (Within 30 Days of Registration)</strong>
                    <span>An EC is a point-in-time snapshot. A 13-year EC issued six months ago leaves a gap. Request a fresh EC close to your registration date to catch any last-minute encumbrances [citation:13].</span>
                </li>
                <li>
                    <strong>Conduct a Physical Site Visit with the Approved Drawing</strong>
                    <span>Walk the site with the printed layout plan. Measure boundaries, check road access, and confirm the plot exists where it is claimed. Verify there are no encroachments or missing infrastructure [citation:1][citation:6].</span>
                </li>
                <li>
                    <strong>Check Tax and Utility Dues</strong>
                    <span>Request the latest property tax receipts and utility bills. Unpaid dues become the buyer's liability after registration [citation:1].</span>
                </li>
                <li>
                    <strong>Engage an Independent Property Lawyer</strong>
                    <span>No checklist replaces professional legal review. Have a lawyer verify the title chain, approval documents, and sale agreement before you pay any advance. The fee is small compared to the risk of a disputed purchase [citation:1].</span>
                </li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Save Every Portal Screenshot</h4>
                <p>When you verify the LP number, EC, and ROR, take dated screenshots or download the digitally signed copies. If a dispute arises later, you will have a record of what the official systems showed on the date you checked. Banks and lawyers will ask for this trail.</p>
            </div>

            <h2>Common Mistakes Buyers Make in Hyderabad</h2>

            <h3>Mistake 1: Trusting "HMDA Applied" or "Under Process"</h3>
            <p>An application number is <strong>not</strong> an LP number. "Applied for" means no approval exists. Do not pay any advance on this basis. Ask for the final LP number and verify it yourself on the DPMS portal [citation:6].</p>

            <h3>Mistake 2: Accepting Gram Panchayat Approval as Equivalent</h3>
            <p>Gram Panchayat sanction letters are sometimes shown as if they are HMDA or DTCP approvals. They are not. Panchayat approval does not satisfy bank loan requirements and cannot be used for plot registration without further state-level approval [citation:6].</p>

            <h3>Mistake 3: Assuming Registration Proves Title</h3>
            <p>Registration records a transfer. It does <strong>not</strong> certify that the seller had a clean title, that the layout is approved, or that the land is free of encumbrances. These are separate checks [citation:1].</p>

            <h3>Mistake 4: Skipping the EC Because "The Seller Seems Honest"</h3>
            <p>An active mortgage on the land means the lender can enforce their claim even after you pay the seller. The EC is the only document that reveals registered encumbrances. Never skip it [citation:13].</p>

            <h3>Mistake 5: Buying Notary Land</h3>
            <p>Notary plots are cheaper for a reason: they carry no legal ownership. You cannot get a loan, building permission, or legal recourse. Regularization is difficult and not guaranteed. Avoid entirely [citation:12].</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>What documents should I check before buying a plot in Hyderabad?</h3>
                    <p>The essential documents are the sale deed and title chain (minimum 30 years), Encumbrance Certificate (13–30 years), ROR-1B/Pahani from Bhu Bharati, layout approval with LP number, latest property tax receipts, and land conversion certificate (NALA) if applicable. A property lawyer should review all of these before any advance is paid [citation:1][citation:8].</p>
                </div>

                <div class="faq-item">
                    <h3>How do I check land ownership in Telangana?</h3>
                    <p>Use the Bhu Bharati portal (bhubharati.telangana.gov.in, previously Dharani) to search by survey number, passbook number, or Bhudhaar. The ROR-1B shows the recorded owner and land details. However, this is not proof of clear title—you must also check the Encumbrance Certificate and have a lawyer verify the title chain [citation:2][citation:8].</p>
                </div>

                <div class="faq-item">
                    <h3>Is a notarized plot sale valid in Hyderabad?</h3>
                    <p>No. A notarized agreement or GPA does not transfer ownership. Under the Registration Act, 1908, any transfer of immovable property worth more than ₹100 must be registered at the Sub-Registrar Office. Notary land has no legal validity for ownership, cannot be used for bank loans, and carries high fraud risk [citation:12].</p>
                </div>

                <div class="faq-item">
                    <h3>How far back should the Encumbrance Certificate go?</h3>
                    <p>Obtain an EC for a minimum of 13 years, but 30 years is preferable for thorough due diligence. The EC records all registered transactions including sales, mortgages, gifts, and court attachments. Online EC records in Telangana generally cover transactions from 1983 onwards [citation:7][citation:15].</p>
                </div>

                <div class="faq-item">
                    <h3>What is the most common mistake plot buyers make in Hyderabad?</h3>
                    <p>Paying an advance based on a developer's claim of "approval pending" or "HMDA applied." An application number or file number is not an LP number. No final layout approval means no legally saleable plot. Always verify the LP number on the official HMDA DPMS portal before paying anything [citation:6].</p>
                </div>

                <div class="faq-item">
                    <h3>Can I verify everything online, or do I need to visit offices?</h3>
                    <p>Most document checks can be done online: Bhu Bharati for ROR, registration.telangana.gov.in for EC, and hmda.gov.in for LP verification. However, older records may not be fully digitized, and a physical site visit with the approved drawing is essential. For complex title issues or legacy approvals, a visit to the Sub-Registrar or HMDA office may be necessary [citation:8][citation:9].</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Find the Venture. Collect the Details. Then Verify.</h3>
                <p>Use VenturesDirectoryAI to discover ventures by location and collect the project information you need—developer name, approval references, and available documents—before starting the verification process on official portals.</p>
                <div class="cta-actions">
                    <a href="/search" class="btn-white">Search Ventures by Location →</a>
                    <a href="hmda-vs-dtcp-approved-layouts" class="btn-outline-white">Learn HMDA/DTCP Verification →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener">Bhu Bharati</a> — Land records, ROR-1B, Pahani</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA</a> — DPMS layout permission verification</li>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://dtcp.telangana.gov.in" target="_blank" rel="noopener">DTCP Telangana</a> — Layout approvals outside HMDA</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on official Bhu Bharati, IGRS, HMDA, and TG-RERA portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>

  
</body>
</html>`,bR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to List and Promote Real Estate Projects Online in India (2026)</title>
    <meta name="description" content="Explore digital project listings, developer profiles, search visibility, and online marketing strategies for real estate projects in India. A practical guide for builders and marketers.">
    <link rel="canonical" href="https://venturesdirectoryai.com/blog/real-estate-project-listing-online-india">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Real Estate Developers Can Get Their Projects Discovered Online",
        "description": "Show developers how structured project profiles, consistent project names, location data, approval references, useful photographs, FAQs, and dedicated landing pages can improve discoverability.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/real-estate-project-listing-online-india"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I list my real estate project online in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Create a structured project profile on a property discovery platform like VenturesDirectoryAI. Include the project's registered name, developer entity, exact location with survey numbers, approval references (LP number, RERA registration), plot or unit specifications, useful photographs, and an FAQ section. Consistent naming across all online listings is critical for search visibility and buyer trust."
                }
            },
            {
                "@type": "Question",
                "name": "What information should a real estate project listing include?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A complete listing should include the registered project name, promoter/developer legal name, exact location (village, mandal, district, survey numbers), LP number and RERA registration reference, plot sizes or unit configurations, price range, completion timeline, approved layout plan or floor plan, site photographs, and a clear contact method. Missing approval references are a major credibility gap."
                }
            },
            {
                "@type": "Question",
                "name": "Why does consistent project naming matter for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Search engines and AI tools rely on consistent entity signals. If your project is marketed as 'Green Valley' on one portal, registered as 'Green Valley Layout Phase 1' on HMDA, and listed as 'GV Plots' on another site, you fragment your search authority and confuse buyers. Use the exact registered name everywhere and link it consistently to your approval references."
                }
            },
            {
                "@type": "Question",
                "name": "Can developers list projects on VenturesDirectoryAI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. VenturesDirectoryAI accepts developer listings and offers profile improvement guidance. Developers can contact the platform to discuss project listings, promotional opportunities, and ensuring their approval references are presented accurately. Directory listing does not constitute verification of approval validity."
                }
            },
            {
                "@type": "Question",
                "name": "What is the biggest mistake developers make in online project marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Publishing marketing claims without the underlying approval references. A brochure that says 'HMDA Approved' without an LP number, or 'RERA Registered' without the registration number, trains buyers to distrust the listing. Buyers are increasingly verification-literate. Providing the actual references and explaining how to verify them builds credibility rather than undermining it."
                }
            },
            {
                "@type": "Question",
                "name": "Does listing on a directory guarantee sales or rankings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Directory listings improve discoverability by placing your project where buyers are already searching, but they do not guarantee sales, rankings, or appreciation. The listing is a visibility tool. Conversion depends on the project's fundamentals, pricing, approvals, and the buyer's own due diligence."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #ffe4e6;
            color: #be123c;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #be123c;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Profile Component Grid */
        .profile-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
        }

        .profile-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
        }

        .profile-card h4 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .profile-card h4::before {
            content: "▸";
            color: #be123c;
            font-weight: 700;
        }

        .profile-card p {
            font-size: 0.88rem;
            color: #475569;
            margin-bottom: 0;
        }

        /* Checklist */
        .checklist {
            list-style: none;
            padding-left: 0;
            counter-reset: checklist-counter;
        }

        .checklist li {
            counter-increment: checklist-counter;
            padding: 16px 20px 16px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .checklist li::before {
            content: counter(checklist-counter);
            position: absolute;
            left: 16px;
            top: 16px;
            width: 28px;
            height: 28px;
            background: #be123c;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .checklist li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .checklist li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* Before/After Table */
        .compare-table {
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 0.9rem;
        }

        .compare-table th {
            background: #0f3b5e;
            color: #ffffff;
            text-align: left;
            padding: 12px 14px;
            font-weight: 600;
        }

        .compare-table td {
            padding: 12px 14px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }

        .compare-table tr:nth-child(even) {
            background: #f8fafc;
        }

        .compare-table tr:last-child td {
            border-bottom: none;
        }

        .bad-example {
            color: #be123c;
        }

        .good-example {
            color: #15803d;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #be123c;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .profile-grid {
                grid-template-columns: 1fr;
            }
            .checklist li {
                padding-left: 52px;
            }
            .compare-table {
                font-size: 0.82rem;
            }
            .compare-table th,
            .compare-table td {
                padding: 10px 12px;
            }
        }

        :focus-visible {
            outline: 2px solid #be123c;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / How Real Estate Developers Can Get Their Projects Discovered Online
            </div>
            <span class="article-category">For Developers</span>
            <h1>How Real Estate Developers Can Get Their Projects Discovered Online</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 9 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> Developers improve online discoverability by building structured project profiles with the registered project name, developer entity, exact location with survey numbers, verifiable approval references (LP number, RERA registration), plot specifications, useful photographs, and an FAQ section. Consistent naming across all listings, dedicated landing pages for each project, and transparent approval references build both search visibility and buyer trust. Platforms like VenturesDirectoryAI accept developer listings and can help improve profile completeness.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>Why Project Discovery Matters More Than Ever</h2>

            <p>Buyers today are verification-literate. They do not simply accept "HMDA Approved" or "RERA Registered" claims—they search for the LP number, check the TG-RERA portal, and pull the Encumbrance Certificate before paying any advance. This shift creates both a challenge and an opportunity for developers.</p>

            <p>The challenge: vague marketing claims no longer convert. The opportunity: developers who provide verifiable references and make them easy to find earn trust that competitors cannot replicate.</p>

            <p>This guide explains how to build a project profile that search engines, AI tools, and human buyers can all find, understand, and verify.</p>

            <h2>The Anatomy of a Discoverable Project Profile</h2>

            <p>A complete profile includes every field a buyer needs to shortlist and investigate your project. Think of it as a structured data record, not a brochure.</p>

            <div class="profile-grid">
                <div class="profile-card">
                    <h4>Registered Project Name</h4>
                    <p>The exact name on the RERA registration and HMDA layout approval. Not a marketing nickname.</p>
                </div>
                <div class="profile-card">
                    <h4>Developer / Promoter Legal Name</h4>
                    <p>The company or LLP name as it appears on official records. Link to the developer profile page.</p>
                </div>
                <div class="profile-card">
                    <h4>Exact Location</h4>
                    <p>Village, mandal, district, and survey numbers. Not just "near ORR" or "close to Financial District."</p>
                </div>
                <div class="profile-card">
                    <h4>LP Number &amp; RERA Reference</h4>
                    <p>The actual approval references, clearly displayed with a link to how buyers can verify them.</p>
                </div>
                <div class="profile-card">
                    <h4>Plot Sizes and Price Range</h4>
                    <p>Specific dimensions and current pricing. "Price on request" reduces discoverability and filters.</p>
                </div>
                <div class="profile-card">
                    <h4>Approved Layout Plan</h4>
                    <p>An image or PDF of the sanctioned drawing. Buyers can compare this to the physical site.</p>
                </div>
                <div class="profile-card">
                    <h4>Site Photographs</h4>
                    <p>Current images of roads, boundaries, and infrastructure—not just renders or stock images.</p>
                </div>
                <div class="profile-card">
                    <h4>Completion Timeline</h4>
                    <p>The declared completion date as registered with RERA, not an aspirational date.</p>
                </div>
                <div class="profile-card">
                    <h4>FAQ Section</h4>
                    <p>Answers to common buyer questions: "Is the layout HMDA approved?" "What is the LP number?" "Is the plot mortgaged?"</p>
                </div>
                <div class="profile-card">
                    <h4>Contact Method</h4>
                    <p>A direct enquiry form or phone number. Not just a generic sales email.</p>
                </div>
            </div>

            <div class="callout callout-warning">
                <h4>⚠️ The Credibility Gap: Marketing Claims Without References</h4>
                <p>A listing that says "HMDA Approved" without an LP number, or "RERA Registered" without the registration number, trains buyers to distrust the listing. Buyers are increasingly verification-literate. Providing the actual references and explaining how to verify them builds credibility rather than undermining it .</p>
            </div>

            <h2>Consistent Naming: The SEO Signal Most Developers Miss</h2>

            <p>Search engines and AI tools rely on consistent entity signals. If your project is marketed as "Green Valley" on one portal, registered as "Green Valley Layout Phase 1" on HMDA, and listed as "GV Plots" on another site, you fragment your search authority and confuse buyers.</p>

            <p>Use the exact registered name everywhere:</p>

            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Inconsistent (Bad)</th>
                        <th>Consistent (Good)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bad-example">"Green Valley" on brochure</td>
                        <td class="good-example">"Green Valley Layout Phase 1" on brochure</td>
                    </tr>
                    <tr>
                        <td class="bad-example">"GV Plots" on listing portal</td>
                        <td class="good-example">"Green Valley Layout Phase 1" on listing portal</td>
                    </tr>
                    <tr>
                        <td class="bad-example">"Green Valley Phase 1" in RERA record</td>
                        <td class="good-example">"Green Valley Layout Phase 1" in RERA record</td>
                    </tr>
                    <tr>
                        <td class="bad-example">No developer entity name</td>
                        <td class="good-example">"ABC Developers Pvt Ltd" linked consistently</td>
                    </tr>
                </tbody>
            </table>

            <p>When the name is consistent, a buyer who searches for "Green Valley Layout Phase 1" finds your listing, the RERA record, and the HMDA approval reference in the same search results. That convergence builds trust and reduces the chance that a competitor's confusingly similar project captures your buyer.</p>

            <h2>Seven Steps to Improve Your Project's Online Discoverability</h2>

            <ol class="checklist">
                <li>
                    <strong>Create a Dedicated Landing Page for Each Project</strong>
                    <span>Do not bury multiple projects under a single "Projects" page. Each project should have its own URL, its own title tag, and its own structured content. This helps search engines index the project as a distinct entity .</span>
                </li>
                <li>
                    <strong>Put the Approval References Above the Fold</strong>
                    <span>The LP number and RERA registration reference should appear in the first screen of the listing, not buried in a PDF or a footer. Buyers and search engines both treat above-the-fold content as more important .</span>
                </li>
                <li>
                    <strong>Write an FAQ Section That Answers Verification Questions</strong>
                    <span>Include questions like "How can I verify the LP number?" "Is the plot mortgaged to HMDA?" "What is the RERA registration number?" Answer them directly. This improves search visibility and reduces buyer friction .</span>
                </li>
                <li>
                    <strong>Use Structured Data Markup</strong>
                    <span>Implement schema.org markup for your project listing—Article, Product, or a custom RealEstateListing type. This helps search engines display rich results and understand the project's attributes .</span>
                </li>
                <li>
                    <strong>Link to Official Verification Portals</strong>
                    <span>Include direct links to the HMDA DPMS portal, TG-RERA portal, and IGRS Encumbrance search. This signals transparency and helps buyers complete their own due diligence .</span>
                </li>
                <li>
                    <strong>Keep Photographs and Layout Plans Current</strong>
                    <span>Upload current site photographs and the approved layout plan. Outdated or missing visual content reduces buyer confidence and lowers conversion .</span>
                </li>
                <li>
                    <strong>List on a Verified Directory Like VenturesDirectoryAI</strong>
                    <span>A structured directory listing gives your project visibility to buyers who are already searching by location and approval type. Contact VenturesDirectoryAI to discuss project listings and profile improvements .</span>
                </li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Explain How Buyers Can Verify You</h4>
                <p>The most credible listing is not the one that makes the boldest claim—it is the one that tells the buyer exactly how to check the claim. Add a short section titled "How to verify this project" with links to the HMDA DPMS portal, TG-RERA, and IGRS. This does not weaken your marketing; it strengthens it by signaling that you have nothing to hide .</p>
            </div>

            <h2>Common Mistakes Developers Make</h2>

            <h3>Mistake 1: Marketing Claims Without References</h3>
            <p>"HMDA Approved" without an LP number is a claim, not a fact. "RERA Registered" without a registration number is a marketing line, not a disclosure. Buyers who check will find nothing, and they will not come back.</p>

            <h3>Mistake 2: Inconsistent Project Names Across Platforms</h3>
            <p>If the name on your brochure, website, listing portals, and RERA record do not match, you are fragmenting your search visibility and confusing buyers. Use the registered name everywhere.</p>

            <h3>Mistake 3: Burying Approvals in a PDF</h3>
            <p>If the LP number exists only in a downloadable PDF, search engines cannot index it and buyers will not see it. Put the approval references in the visible page content.</p>

            <h3>Mistake 4: Using Renders Instead of Site Photographs</h3>
            <p>Buyers want to see the actual site—roads, boundaries, infrastructure—not just an aspirational render. Current photographs build more trust than glossy images.</p>

            <h3>Mistake 5: Ignoring the Developer Profile Page</h3>
            <p>A project listing without a linked developer profile leaves buyers wondering who they are dealing with. Create a developer entity page with the legal name, registration details, and links to all projects.</p>

            <h2>What VenturesDirectoryAI Offers Developers</h2>

            <p>VenturesDirectoryAI is built for buyers who want to research before they invest. That makes it a natural place for developers who are serious about transparency to list their projects.</p>

            <p>Developers can contact the platform to discuss:</p>

            <ul>
                <li><strong>Project listings</strong> with structured data, approval references, and location details</li>
                <li><strong>Profile improvements</strong> to ensure the listing includes the fields buyers are looking for</li>
                <li><strong>Promotional opportunities</strong> to reach buyers who are actively searching by location and approval type</li>
            </ul>

            <p>Directory listing does not constitute verification of approval validity—buyers are always directed to verify on official portals. But it does place your project where buyers are already researching, and it gives you a structured profile that search engines and AI tools can find and understand.</p>

            <div class="callout callout-info">
                <h4>📋 Transparency Is a Competitive Advantage</h4>
                <p>VenturesDirectoryAI's position is that directory information is a starting point for research—not proof of current approval or legal validity. Developers who embrace this transparency by providing verifiable references and clear verification instructions stand out from those who rely on vague claims. That transparency is a meaningful competitive advantage in a market where buyers increasingly check before they buy .</p>
            </div>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>How do I list my real estate project online in India?</h3>
                    <p>Create a structured project profile on a property discovery platform like VenturesDirectoryAI. Include the project's registered name, developer entity, exact location with survey numbers, approval references (LP number, RERA registration), plot or unit specifications, useful photographs, and an FAQ section. Consistent naming across all online listings is critical for search visibility and buyer trust .</p>
                </div>

                <div class="faq-item">
                    <h3>What information should a real estate project listing include?</h3>
                    <p>A complete listing should include the registered project name, promoter/developer legal name, exact location (village, mandal, district, survey numbers), LP number and RERA registration reference, plot sizes or unit configurations, price range, completion timeline, approved layout plan or floor plan, site photographs, and a clear contact method. Missing approval references are a major credibility gap .</p>
                </div>

                <div class="faq-item">
                    <h3>Why does consistent project naming matter for SEO?</h3>
                    <p>Search engines and AI tools rely on consistent entity signals. If your project is marketed as "Green Valley" on one portal, registered as "Green Valley Layout Phase 1" on HMDA, and listed as "GV Plots" on another site, you fragment your search authority and confuse buyers. Use the exact registered name everywhere and link it consistently to your approval references .</p>
                </div>

                <div class="faq-item">
                    <h3>Can developers list projects on VenturesDirectoryAI?</h3>
                    <p>Yes. VenturesDirectoryAI accepts developer listings and offers profile improvement guidance. Developers can contact the platform to discuss project listings, promotional opportunities, and ensuring their approval references are presented accurately. Directory listing does not constitute verification of approval validity .</p>
                </div>

                <div class="faq-item">
                    <h3>What is the biggest mistake developers make in online project marketing?</h3>
                    <p>Publishing marketing claims without the underlying approval references. A brochure that says "HMDA Approved" without an LP number, or "RERA Registered" without the registration number, trains buyers to distrust the listing. Buyers are increasingly verification-literate. Providing the actual references and explaining how to verify them builds credibility rather than undermining it .</p>
                </div>

                <div class="faq-item">
                    <h3>Does listing on a directory guarantee sales or rankings?</h3>
                    <p>No. Directory listings improve discoverability by placing your project where buyers are already searching, but they do not guarantee sales, rankings, or appreciation. The listing is a visibility tool. Conversion depends on the project's fundamentals, pricing, approvals, and the buyer's own due diligence .</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Get Your Project Discovered by Serious Buyers</h3>
                <p>Contact VenturesDirectoryAI to discuss project listings, profile improvements, and promotional opportunities. Reach buyers who are actively researching by location, approval type, and developer.</p>
                <div class="cta-actions">
                    <a href="/contact" class="btn-white">Contact Us About Listings →</a>
                    <a href="/search" class="btn-outline-white">See How Buyers Search →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA</a> — DPMS layout permission search</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
                <li><a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener">Bhu Bharati</a> — Land records and ownership verification</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Directory listing does not constitute verification of approval validity or legal title. Buyers should always verify on official HMDA, DTCP, TG-RERA, and IGRS portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>


</body>
</html>`,xR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RERA Registered Projects in Hyderabad: How to Search and Verify (2026)</title>
    <meta name="description" content="Discover Hyderabad projects by location, developer, or project name and learn how to check their RERA registration information on the official TG-RERA portal. Search methods, verification steps, and red flags.">
    <link rel="canonical" href="https://venturesdirectoryai.com/blog/rera-registered-projects-hyderabad">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Find RERA-Registered Projects in Hyderabad: Builder, Location and Project Search",
        "description": "A discovery guide showing how to search by venture name, developer, location, project type, or registration reference on the official TG-RERA portal.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/rera-registered-projects-hyderabad"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I search for RERA-registered projects in Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Visit rera.telangana.gov.in and use the 'Registered Projects' search. You can search by project name, promoter/builder name, RERA registration number, or district. The registration number search is fastest and most accurate. Enter the number exactly as printed on the project's marketing material or agreement."
                }
            },
            {
                "@type": "Question",
                "name": "What does a RERA registration number look like in Telangana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Telangana project RERA numbers begin with the letter P followed by digits, typically in a format like P02400010981. Agent registration numbers begin with A. The full number should appear on the project's brochure, hoarding, sales office, and agreement."
                }
            },
            {
                "@type": "Question",
                "name": "What if the project name on RERA doesn't match the marketing name?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Developers sometimes market a project under a different name than what was registered. Search by the RERA registration number if you have it, or search by the promoter's company name. If you still cannot find it, ask the developer in writing for the exact registered project name and RERA number. A mismatch between the marketing name and the RERA record is a reason to pause and investigate."
                }
            },
            {
                "@type": "Question",
                "name": "Are all projects in Hyderabad required to have RERA registration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Projects with more than 8 units or land area above 500 square meters must register under RERA before marketing or selling. Plotted layouts and gated communities above these thresholds are also covered. Exemptions exist for very small projects and projects that received completion certificates before RERA came into force. If a project claims exemption, ask for the specific reason in writing rather than accepting a verbal explanation."
                }
            },
            {
                "@type": "Question",
                "name": "Does RERA registration guarantee the project will be completed on time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. RERA registration means the promoter has disclosed plans, approvals, and timelines to the regulator. It does not guarantee delivery or certify title. RERA provides a legal remedy if things go wrong—you can claim interest for delays or a refund—but it does not prevent delays. Always verify HMDA/DTCP approval, check the Encumbrance Certificate, and have a lawyer review the title separately."
                }
            },
            {
                "@type": "Question",
                "name": "What should I check after finding a project on the RERA portal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cross-check the promoter name against the entity you are signing with, verify the survey numbers and location match your agreement, review the approved plans and sanctioned unit count, check the declared completion date, look for recent quarterly progress updates, and confirm there are no penalty orders or complaints against the promoter. A record existing is not enough—the details must match what you were promised."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-tip {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Search Method Cards */
        .method-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
        }

        .method-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
        }

        .method-card h4 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-bottom: 6px;
        }

        .method-card p {
            font-size: 0.88rem;
            color: #475569;
            margin-bottom: 0;
        }

        /* Checklist */
        .checklist {
            list-style: none;
            padding-left: 0;
            counter-reset: checklist-counter;
        }

        .checklist li {
            counter-increment: checklist-counter;
            padding: 16px 20px 16px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .checklist li::before {
            content: counter(checklist-counter);
            position: absolute;
            left: 16px;
            top: 16px;
            width: 28px;
            height: 28px;
            background: #0f3b5e;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .checklist li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .checklist li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .method-grid {
                grid-template-columns: 1fr;
            }
            .checklist li {
                padding-left: 52px;
            }
        }

        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / RERA-Registered Projects in Hyderabad
            </div>
            <span class="article-category">RERA &amp; Approvals</span>
            <h1>How to Find RERA-Registered Projects in Hyderabad: Builder, Location and Project Search</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 10 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> To find RERA-registered projects in Hyderabad, go to <strong>rera.telangana.gov.in</strong> and use the "Registered Projects" search. You can search by project name, builder/promoter name, RERA registration number, or district. The registration number search is fastest. Once the record opens, cross-check the promoter name, survey numbers, sanctioned plan, and completion date against what the developer has told you. A record existing is not enough—the details must match.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>Four Ways to Search the TG-RERA Portal</h2>

            <p>The official Telangana RERA portal offers multiple search entry points. Use the one that matches the information you already have [citation:3][citation:7].</p>

            <div class="method-grid">
                <div class="method-card">
                    <h4>1. By RERA Registration Number</h4>
                    <p>Fastest and most accurate. Enter the number exactly as printed on the brochure or agreement. Telangana project numbers start with P, followed by digits (e.g., P02400010981) [citation:1][citation:7].</p>
                </div>
                <div class="method-card">
                    <h4>2. By Project Name</h4>
                    <p>Useful when you know the marketing name. Be aware that developers sometimes register under a different name than the one used in advertising [citation:3].</p>
                </div>
                <div class="method-card">
                    <h4>3. By Promoter / Builder Name</h4>
                    <p>Search the developer's company name to see all their registered projects. This reveals their track record and any complaints or penalty orders across projects [citation:6].</p>
                </div>
                <div class="method-card">
                    <h4>4. By District</h4>
                    <p>Broadest search. Useful for discovering what is registered in a specific area, but returns many results. Combine with location filters if available [citation:10].</p>
                </div>
            </div>

            <div class="callout callout-warning">
                <h4>⚠️ When the Name Doesn't Match</h4>
                <p>Developers often market a project under a name different from what was registered. If your project name search returns nothing, try searching by the builder's company name or ask the developer for the <strong>exact registered project name and RERA number in writing</strong>. A mismatch between marketing and registration is a reason to pause, not to assume the project is unregistered [citation:1].</p>
            </div>

            <h2>What the RERA Record Shows You</h2>

            <p>When you open a project record, the portal displays information the promoter has filed with the regulator. Here is what to look for [citation:7][citation:9]:</p>

            <ul>
                <li><strong>Promoter name:</strong> Must match the entity you are signing the agreement with. If the seller is a different company or an individual, ask why.</li>
                <li><strong>Project location and survey numbers:</strong> Confirm these match the land described in your agreement. A matching project name alone is not enough [citation:12].</li>
                <li><strong>Approved plans and sanctioned unit count:</strong> Compare these to what the sales team has shown you. Any deviation is a red flag.</li>
                <li><strong>Project status:</strong> Tells you whether bookings are legally open and the current construction stage.</li>
                <li><strong>Declared completion date:</strong> This is the date you can hold the promoter to. Note any extensions or revisions.</li>
                <li><strong>Quarterly progress updates:</strong> Promoters must file these regularly. A long gap between updates is a warning sign [citation:7].</li>
                <li><strong>Complaints and penalty orders:</strong> If the promoter has a history of delays or penalties, that pattern matters more than any single project record.</li>
            </ul>

            <div class="callout callout-info">
                <h4>📋 RERA Registration Is Not the Same as HMDA Approval</h4>
                <p>These are two separate checks. HMDA (or DTCP) approves the layout or building plan. RERA registers the project for consumer protection and sale regulation. A project needs <strong>both</strong> to be fully compliant. Even an HMDA-approved project must also be RERA-registered before marketing or selling [citation:7][citation:12].</p>
            </div>

            <h2>Which Projects Must Be Registered?</h2>

            <p>Not every small building requires RERA registration. The thresholds are [citation:7][citation:12]:</p>

            <ul>
                <li><strong>More than 8 units</strong> in the project (counting all phases), OR</li>
                <li><strong>Land area exceeding 500 square meters</strong></li>
            </ul>

            <p>Plotted layouts and gated plot ventures above these thresholds are also covered. If a project claims exemption, ask for the specific reason in writing. Verbal explanations are not sufficient. Projects that received completion certificates before RERA came into force are genuinely exempt—but a project under construction is not [citation:12].</p>

            <h2>After You Find the Project: Six Verification Steps</h2>

            <p>A RERA record existing does not mean the project is right for you. Work through these checks before paying any advance.</p>

            <ol class="checklist">
                <li>
                    <strong>Match the Promoter Name</strong>
                    <span>The name on the RERA record must match the company or individual you are signing the agreement with. If the seller is a landowner or a different entity, understand the relationship and get it documented [citation:1].</span>
                </li>
                <li>
                    <strong>Verify the Survey Numbers and Location</strong>
                    <span>The survey numbers and village/mandal on the RERA record must match the land described in your agreement. A project name match alone is insufficient—the specific land parcel must be covered [citation:12].</span>
                </li>
                <li>
                    <strong>Check the Declared Completion Date Against the Sales Pitch</strong>
                    <span>The RERA completion date is the one with legal backing. If the sales team is promising an earlier possession date verbally, get that in writing or discount it entirely [citation:1].</span>
                </li>
                <li>
                    <strong>Review Quarterly Progress Updates</strong>
                    <span>Promoters must file construction status reports regularly. Check whether recent updates exist and whether reported progress matches what you see at the site [citation:7].</span>
                </li>
                <li>
                    <strong>Look for Complaints and Penalty Orders</strong>
                    <span>The RERA record may show complaints filed against the project or promoter. Search the promoter's name across all their projects to see patterns. A single delayed project is a data point; multiple complaints are a pattern [citation:6].</span>
                </li>
                <li>
                    <strong>Download the Draft Agreement of Sale</strong>
                    <span>If the project has uploaded a draft agreement, download it. Builders cannot force you to sign terms that differ from the draft they filed with RERA. If they try to add hidden clauses, you can refuse [citation:9].</span>
                </li>
            </ol>

            <div class="callout callout-tip">
                <h4>💡 Pro Tip: Save a Dated Screenshot</h4>
                <p>When you verify the RERA record, save a screenshot or PDF with the date visible. If a dispute arises later, you will have a record of what the official system showed on the day you checked. Lawyers and banks may ask for this trail.</p>
            </div>

            <h2>What RERA Does Not Cover</h2>

            <p>RERA is a consumer protection layer, not a guarantee. It does <strong>not</strong> [citation:6][citation:12]:</p>

            <ul>
                <li><strong>Certify title or guarantee delivery.</strong> You still need a lawyer to verify the title chain and Encumbrance Certificate.</li>
                <li><strong>Cover resale transactions</strong> between individual buyers. RERA applies to the original promoter sale.</li>
                <li><strong>Replace HMDA/DTCP approval.</strong> Both checks are necessary.</li>
                <li><strong>Prevent delays.</strong> It provides a remedy (interest or refund) if delays occur, but it does not stop them.</li>
            </ul>

            <p>Treat RERA registration as the <strong>first</strong> check, not the last. After verifying it, check the layout approval, the EC, and the title chain before paying anything [citation:10].</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>How do I search for RERA-registered projects in Hyderabad?</h3>
                    <p>Visit rera.telangana.gov.in and use the "Registered Projects" search. You can search by project name, promoter/builder name, RERA registration number, or district. The registration number search is fastest and most accurate. Enter the number exactly as printed on the project's marketing material or agreement [citation:3][citation:7].</p>
                </div>

                <div class="faq-item">
                    <h3>What does a RERA registration number look like in Telangana?</h3>
                    <p>Telangana project RERA numbers begin with the letter P followed by digits, typically in a format like P02400010981. Agent registration numbers begin with A. The full number should appear on the project's brochure, hoarding, sales office, and agreement [citation:1][citation:7].</p>
                </div>

                <div class="faq-item">
                    <h3>What if the project name on RERA doesn't match the marketing name?</h3>
                    <p>Developers sometimes market a project under a different name than what was registered. Search by the RERA registration number if you have it, or search by the promoter's company name. If you still cannot find it, ask the developer in writing for the exact registered project name and RERA number. A mismatch between the marketing name and the RERA record is a reason to pause and investigate [citation:1].</p>
                </div>

                <div class="faq-item">
                    <h3>Are all projects in Hyderabad required to have RERA registration?</h3>
                    <p>Projects with more than 8 units or land area above 500 square meters must register under RERA before marketing or selling. Plotted layouts and gated communities above these thresholds are also covered. Exemptions exist for very small projects and projects that received completion certificates before RERA came into force. If a project claims exemption, ask for the specific reason in writing rather than accepting a verbal explanation [citation:7][citation:12].</p>
                </div>

                <div class="faq-item">
                    <h3>Does RERA registration guarantee the project will be completed on time?</h3>
                    <p>No. RERA registration means the promoter has disclosed plans, approvals, and timelines to the regulator. It does not guarantee delivery or certify title. RERA provides a legal remedy if things go wrong—you can claim interest for delays or a refund—but it does not prevent delays. Always verify HMDA/DTCP approval, check the Encumbrance Certificate, and have a lawyer review the title separately [citation:6][citation:12].</p>
                </div>

                <div class="faq-item">
                    <h3>What should I check after finding a project on the RERA portal?</h3>
                    <p>Cross-check the promoter name against the entity you are signing with, verify the survey numbers and location match your agreement, review the approved plans and sanctioned unit count, check the declared completion date, look for recent quarterly progress updates, and confirm there are no penalty orders or complaints against the promoter. A record existing is not enough—the details must match what you were promised [citation:1][citation:9].</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Find the Venture. Then Verify the Registration.</h3>
                <p>Use VenturesDirectoryAI to discover ventures by location and collect the project details you need—developer name, registration references, and available documents—before verifying on the official TG-RERA portal.</p>
                <div class="cta-actions">
                    <a href="/search" class="btn-white">Search Ventures by Location →</a>
                    <a href="/blog/how-to-check-rera-registration-telangana" class="btn-outline-white">Full RERA Verification Guide →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA Official Portal</a> — Registered project search</li>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA</a> — Layout permission verification</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
                <li><a href="https://bhubharati.telangana.gov.in" target="_blank" rel="noopener">Bhu Bharati</a> — Land records</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on the official TG-RERA portal and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>

</body>
</html>`,wR=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What Is an LP Number in Real Estate? Check Layout Approval (2026)</title>
    <meta name="description" content="Learn what an LP number means in Telangana real estate, how to read the format, and how to verify layout permission on the HMDA DPMS portal before buying a plot.">
    <link rel="canonical" href="https://venturesdirectoryai.com/blog/what-is-lp-number-in-real-estate">
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Is an LP Number in Real Estate? How to Check Layout Approval",
        "description": "Learn what a layout permission reference is, where it appears in project records, and how to compare it with official proceedings and plans in Telangana.",
        "author": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI Research Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VenturesDirectoryAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://venturesdirectoryai.com/logo.png"
            }
        },
        "datePublished": "2026-10-28",
        "dateModified": "2026-10-28",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://venturesdirectoryai.com/blog/what-is-lp-number-in-real-estate"
        }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does LP number stand for in real estate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LP stands for Layout Permission. In Telangana and Andhra Pradesh, the LP number is the unique identifier issued by authorities such as HMDA or DTCP when a residential layout is approved. It appears on the sanctioned proceedings and drawing, and it is the reference you use to verify the approval on the official portal."
                }
            },
            {
                "@type": "Question",
                "name": "How do I read an HMDA LP number format?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A typical HMDA LP number looks like 000272/LO/Plg/HMDA/2019. The first segment is the serial permission number. LO stands for Layout Order (distinct from building permissions). Plg indicates the Planning department. HMDA is the issuing authority. The final number is the year of issue. This structure lets you confirm the permit is layout-specific and issued by the correct authority."
                }
            },
            {
                "@type": "Question",
                "name": "How do I verify an LP number on the HMDA portal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Go to hmda.gov.in and navigate to the DPMS (Development Permissions Management System) public search. Enter the full LP number exactly as printed, including slashes. A valid record will show the applicant name, layout name, survey numbers, sanctioned area, plot count, and permit status. If the search returns no data, the number is not a valid HMDA layout permission."
                }
            },
            {
                "@type": "Question",
                "name": "What if the developer cannot provide an LP number?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If a developer or seller cannot provide a final LP number that is searchable on the official portal, treat the layout as unapproved. An application number, file number, or 'approval in process' claim is not an LP number. Do not pay any advance until you have verified a final LP number yourself on the HMDA or DTCP portal."
                }
            },
            {
                "@type": "Question",
                "name": "Is an LP number the same as RERA registration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. An LP number confirms that the layout plan was approved by the planning authority (HMDA or DTCP). RERA registration is a separate consumer-protection registration for the project. A project needs both where applicable. LP verification checks the planning approval; RERA verification checks the project's registration and promoter disclosures."
                }
            },
            {
                "@type": "Question",
                "name": "What is a draft LP approval?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A draft approval is an intermediate stage where the authority approves the layout plan but the developer must still fulfil conditions—such as mortgaging certain plots as security and completing infrastructure works—before the final layout permit is released. Do not treat a draft approval as equivalent to a final LP number. Ask for the final permit number and verify it on the DPMS portal."
                }
            }
        ]
    }
    <\/script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.7;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header */
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 0;
        }

        .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: #0f3b5e;
            letter-spacing: -0.02em;
            text-decoration: none;
        }

        .logo span {
            color: #0ea5e9;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            font-size: 0.95rem;
            font-weight: 500;
        }

        .nav-links a {
            text-decoration: none;
            color: #475569;
        }

        .nav-links a:hover {
            color: #0ea5e9;
        }

        /* Article Header */
        .article-header {
            background: #ffffff;
            padding: 48px 0 36px;
            border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb {
            font-size: 0.85rem;
            color: #64748b;
            margin-bottom: 16px;
        }

        .breadcrumb a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .article-category {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .article-header h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            margin-bottom: 16px;
        }

        .article-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 20px;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .article-intro {
            font-size: 1.15rem;
            color: #334155;
            line-height: 1.7;
            padding: 20px 24px;
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            border-radius: 0 8px 8px 0;
        }

        /* Article Body */
        .article-body {
            background: #ffffff;
            padding: 48px 0;
        }

        .article-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 40px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
        }

        .article-body h2:first-of-type {
            margin-top: 0;
        }

        .article-body h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0f3b5e;
            margin-top: 28px;
            margin-bottom: 12px;
        }

        .article-body p {
            margin-bottom: 18px;
            color: #334155;
        }

        .article-body ul,
        .article-body ol {
            margin-bottom: 20px;
            padding-left: 24px;
        }

        .article-body li {
            margin-bottom: 10px;
            color: #334155;
        }

        .article-body strong {
            color: #0f172a;
        }

        .article-body a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .article-body a:hover {
            text-decoration: underline;
        }

        /* Callout Boxes */
        .callout {
            border-radius: 12px;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .callout-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .callout-warning {
            background: #fffbeb;
            border: 1px solid #fde68a;
        }

        .callout-danger {
            background: #fef2f2;
            border: 1px solid #fecaca;
        }

        .callout h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #0f172a;
        }

        .callout p:last-child,
        .callout ul:last-child {
            margin-bottom: 0;
        }

        /* Format Decoder */
        .format-decoder {
            background: #0f3b5e;
            border-radius: 14px;
            padding: 28px 32px;
            margin: 24px 0;
            color: #ffffff;
        }

        .format-decoder h4 {
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #7dd3fc;
            margin-bottom: 16px;
        }

        .lp-code {
            font-family: 'SF Mono', 'Fira Code', monospace;
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            padding: 14px 20px;
            border-radius: 8px;
            display: inline-block;
            margin-bottom: 20px;
            letter-spacing: 0.02em;
        }

        .format-parts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .format-part {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            padding: 14px 16px;
        }

        .format-part .code-fragment {
            font-family: 'SF Mono', 'Fira Code', monospace;
            font-weight: 700;
            color: #7dd3fc;
            font-size: 0.95rem;
            display: block;
            margin-bottom: 4px;
        }

        .format-part .code-meaning {
            font-size: 0.85rem;
            color: #cbd5e1;
            line-height: 1.4;
        }

        /* Verification Steps */
        .steps-list {
            list-style: none;
            padding-left: 0;
            counter-reset: step-counter;
        }

        .steps-list li {
            counter-increment: step-counter;
            padding: 18px 20px 18px 60px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 12px;
            position: relative;
        }

        .steps-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 16px;
            top: 18px;
            width: 28px;
            height: 28px;
            background: #0ea5e9;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .steps-list li strong {
            display: block;
            margin-bottom: 4px;
            color: #0f172a;
        }

        .steps-list li span {
            font-size: 0.92rem;
            color: #475569;
        }

        /* FAQ */
        .faq-section {
            margin-top: 48px;
            padding-top: 32px;
            border-top: 2px solid #e2e8f0;
        }

        .faq-item {
            border-bottom: 1px solid #e2e8f0;
            padding: 20px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 10px;
            margin-top: 0;
        }

        .faq-item p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* CTA Box */
        .cta-box {
            background: #0f3b5e;
            border-radius: 16px;
            padding: 36px 40px;
            margin: 48px 0;
            color: #ffffff;
        }

        .cta-box h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #ffffff;
            margin-top: 0;
        }

        .cta-box p {
            color: #cbd5e1;
            margin-bottom: 24px;
            font-size: 1rem;
        }

        .cta-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }

        .btn-white {
            display: inline-block;
            background: #ffffff;
            color: #0f3b5e;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s;
        }

        .btn-white:hover {
            background: #0ea5e9;
            color: #ffffff;
        }

        .btn-outline-white {
            display: inline-block;
            background: transparent;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
            transition: all 0.2s;
        }

        .btn-outline-white:hover {
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Sources */
        .sources-section {
            background: #f8fafc;
            padding: 32px 0;
            border-top: 1px solid #e2e8f0;
            margin-top: 48px;
        }

        .sources-section h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }

        .sources-section ul {
            list-style: none;
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .sources-section li {
            font-size: 0.88rem;
            color: #475569;
        }

        .sources-section a {
            color: #0ea5e9;
            text-decoration: none;
        }

        .sources-section a:hover {
            text-decoration: underline;
        }

        /* Footer */
        .footer {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 28px 0;
            text-align: center;
            font-size: 0.85rem;
            color: #94a3b8;
        }

        .footer a {
            color: #64748b;
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .article-header h1 {
                font-size: 1.6rem;
            }
            .article-intro {
                font-size: 1rem;
                padding: 16px 20px;
            }
            .cta-box {
                padding: 28px 24px;
            }
            .cta-box h3 {
                font-size: 1.2rem;
            }
            .nav-links {
                display: none;
            }
            .format-parts {
                grid-template-columns: 1fr;
            }
            .lp-code {
                font-size: 1.1rem;
                padding: 12px 16px;
            }
            .steps-list li {
                padding-left: 52px;
            }
        }

        :focus-visible {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>

    <!-- Article Header -->
    <section class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/blogs">Guides</a> / What Is an LP Number in Real Estate?
            </div>
            <span class="article-category">RERA &amp; Approvals</span>
            <h1>What Is an LP Number in Real Estate? How to Check Layout Approval</h1>
            <div class="article-meta">
                <span>📅 Published: October 28, 2026</span>
                <span>🔄 Last Reviewed: October 28, 2026</span>
                <span>⏱ 8 min read</span>
                <span>✍️ VenturesDirectoryAI Research Team</span>
            </div>
            <div class="article-intro">
                <strong>Quick Answer:</strong> An LP number stands for <strong>Layout Permission Number</strong>. It is the unique identifier issued by HMDA or DTCP when a residential layout is approved. The number appears on the sanctioned proceedings and drawing, and you can verify it on the official HMDA DPMS portal. If a developer cannot provide an LP number that is searchable on the official portal, the layout may not have statutory approval. Do not pay any advance until you have verified it yourself.
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <article class="article-body">
        <div class="container">

            <h2>What Does LP Stand For?</h2>

            <p>In the context of Telangana real estate, <strong>LP means Layout Permission</strong>. It is the formal approval granted by a planning authority—either HMDA (Hyderabad Metropolitan Development Authority) or DTCP (Directorate of Town and Country Planning)—for a residential layout [citation:1].</p>

            <p>The LP number is the unique reference assigned to that approved layout. It appears on the sanctioned proceedings and the approved layout drawing. It is the number you use to verify the approval on the official government portal.</p>

            <p>A layout approval confirms that the land subdivision complies with the applicable master plan, road-width norms, and open-space requirements. It does <strong>not</strong> certify title, and it is <strong>not</strong> the same as RERA registration [citation:7][citation:12].</p>

            <h2>How to Read an HMDA LP Number Format</h2>

            <p>An LP number is not a random string. Its structure tells you what kind of permission it is, which department issued it, and when. Here is a typical example [citation:7]:</p>

            <div class="format-decoder">
                <h4>LP Number Format Decoder</h4>
                <div class="lp-code">000272/LO/Plg/HMDA/2019</div>
                <div class="format-parts">
                    <div class="format-part">
                        <span class="code-fragment">000272</span>
                        <span class="code-meaning">Serial permission number — the sequential order of issue</span>
                    </div>
                    <div class="format-part">
                        <span class="code-fragment">LO</span>
                        <span class="code-meaning">Layout Order — confirms this is a layout permission, not a building permit</span>
                    </div>
                    <div class="format-part">
                        <span class="code-fragment">Plg</span>
                        <span class="code-meaning">Planning department — the division within HMDA that issued the order</span>
                    </div>
                    <div class="format-part">
                        <span class="code-fragment">HMDA</span>
                        <span class="code-meaning">Issuing authority — confirms the permit was issued by HMDA</span>
                    </div>
                    <div class="format-part">
                        <span class="code-fragment">2019</span>
                        <span class="code-meaning">Year of issue — when the layout order was granted</span>
                    </div>
                </div>
            </div>

            <p>When you see <strong>LO</strong> in the second position, you are looking at a layout permission. Building permissions, subdivision orders, and other instruments have different codes. For a residential plot in an approved layout, you need the LO number [citation:7].</p>

            <div class="callout callout-warning">
                <h4>⚠️ Application Number ≠ LP Number</h4>
                <p>An application number or file number is <strong>not</strong> an LP number. Developers sometimes present a pending application reference as if it were an approval. A file number means the application exists; an LP number means the layout has been approved. Do not accept a file number as proof of approval [citation:12][citation:15].</p>
            </div>

            <h2>How to Verify an LP Number on the HMDA DPMS Portal</h2>

            <p>The verification takes less than fifteen minutes. Follow these steps [citation:7][citation:15]:</p>

            <ol class="steps-list">
                <li>
                    <strong>Go to the HMDA DPMS Portal</strong>
                    <span>Open hmda.gov.in and navigate to the DPMS (Development Permissions Management System) public search. The direct address may be dpms.hmda.gov.in. Look for the layout permission or LP number search function.</span>
                </li>
                <li>
                    <strong>Enter the Full LP Number Exactly as Printed</strong>
                    <span>Type the complete number including slashes: 000272/LO/Plg/HMDA/2019. Do not abbreviate or omit segments. Partial entries may return no result even if the permit is valid [citation:7].</span>
                </li>
                <li>
                    <strong>Review the Record That Loads</strong>
                    <span>A valid permit will display the applicant name, layout name, survey numbers covered, sanctioned area, number of plots, and current status. If the search returns “No Data Found,” the number is not a valid HMDA layout permission [citation:7][citation:15].</span>
                </li>
                <li>
                    <strong>Cross-Check the Developer Name</strong>
                    <span>The applicant name on the portal record should match the entity selling you the plot. If the land has changed hands or a different entity is the registered applicant, ask for a written explanation and have a lawyer review the ownership chain [citation:7].</span>
                </li>
                <li>
                    <strong>Cross-Check the Survey Numbers</strong>
                    <span>Your sale agreement will specify a survey number. That number must fall within the survey numbers listed on the DPMS record. A mismatch is a serious red flag [citation:7][citation:12].</span>
                </li>
                <li>
                    <strong>Check the Permit Status</strong>
                    <span>The portal will indicate whether the permit is active, whether conditions are being met, or whether any modification or lapse orders exist. You are looking for an active status [citation:7].</span>
                </li>
            </ol>

            <div class="callout callout-info">
                <h4>📋 What a Valid DPMS Record Shows</h4>
                <p>A genuine HMDA layout permission record displays: the layout name and location (village, mandal, district), the applicant/developer name, the total sanctioned area, the number of approved plots, and the permit status. Compare every field against what the developer has told you. A record existing is not enough—the details must match [citation:7][citation:12].</p>
            </div>

            <h2>What If the Developer Cannot Provide an LP Number?</h2>

            <p>This is the most important red flag in plot buying. If a developer or seller cannot provide a final LP number that you can verify on the official portal, treat the layout as <strong>unapproved</strong>.</p>

            <p>Common workarounds you should reject:</p>

            <ul>
                <li><strong>“HMDA applied” or “approval under process”</strong> — An application is not an approval. No LP number means no legally saleable plot [citation:12].</li>
                <li><strong>“Gram Panchayat approved”</strong> — Panchayat sanction is not equivalent to HMDA or DTCP layout approval. It does not satisfy bank loan requirements and cannot be used for plot registration without further approval [citation:12].</li>
                <li><strong>A file number or application reference</strong> — These are administrative references, not LP numbers. They do not confirm that the layout was approved [citation:15].</li>
            </ul>

            <div class="callout callout-danger">
                <h4>🚨 Stop Signal: No Verifiable LP Number</h4>
                <p>If the LP number does not load on the DPMS portal, or if the developer refuses to provide it in writing, <strong>do not pay any advance</strong>. A seller who flashes an LP number on a brochure but cannot pull it up on the portal is hiding a fake, cancelled, or non-existent approval [citation:15].</p>
            </div>

            <h2>LP Number vs. RERA Registration: What Is the Difference?</h2>

            <p>These are two separate checks, and both matter [citation:7][citation:12].</p>

            <ul>
                <li><strong>LP number:</strong> Confirms that the layout plan was approved by HMDA or DTCP. It is a planning permission.</li>
                <li><strong>RERA registration:</strong> Confirms that the project has been registered with the Telangana Real Estate Regulatory Authority for consumer protection and sale regulation.</li>
            </ul>

            <p>A project needs both where applicable. An LP number alone does not satisfy RERA requirements, and a RERA registration does not replace layout approval. Verify both on their respective official portals.</p>

            <h2>Draft Approval vs. Final LP Number</h2>

            <p>A draft approval is an intermediate stage. The authority has approved the layout plan, but the developer must still fulfil conditions—such as mortgaging certain plots as security and completing infrastructure works—before the final layout permit is released [citation:12].</p>

            <p>Do not treat a draft approval as equivalent to a final LP number. Ask for the <strong>final LP number</strong> and verify it on the DPMS portal. If the developer insists that the draft is sufficient, that is a reason to pause, not proceed.</p>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>What does LP number stand for in real estate?</h3>
                    <p>LP stands for Layout Permission. In Telangana and Andhra Pradesh, the LP number is the unique identifier issued by authorities such as HMDA or DTCP when a residential layout is approved. It appears on the sanctioned proceedings and drawing, and it is the reference you use to verify the approval on the official portal [citation:1].</p>
                </div>

                <div class="faq-item">
                    <h3>How do I read an HMDA LP number format?</h3>
                    <p>A typical HMDA LP number looks like 000272/LO/Plg/HMDA/2019. The first segment is the serial permission number. LO stands for Layout Order (distinct from building permissions). Plg indicates the Planning department. HMDA is the issuing authority. The final number is the year of issue. This structure lets you confirm the permit is layout-specific and issued by the correct authority [citation:7].</p>
                </div>

                <div class="faq-item">
                    <h3>How do I verify an LP number on the HMDA portal?</h3>
                    <p>Go to hmda.gov.in and navigate to the DPMS public search. Enter the full LP number exactly as printed, including slashes. A valid record will show the applicant name, layout name, survey numbers, sanctioned area, plot count, and permit status. If the search returns no data, the number is not a valid HMDA layout permission [citation:7][citation:15].</p>
                </div>

                <div class="faq-item">
                    <h3>What if the developer cannot provide an LP number?</h3>
                    <p>If a developer or seller cannot provide a final LP number that is searchable on the official portal, treat the layout as unapproved. An application number, file number, or “approval in process” claim is not an LP number. Do not pay any advance until you have verified a final LP number yourself on the HMDA or DTCP portal [citation:12][citation:15].</p>
                </div>

                <div class="faq-item">
                    <h3>Is an LP number the same as RERA registration?</h3>
                    <p>No. An LP number confirms that the layout plan was approved by the planning authority (HMDA or DTCP). RERA registration is a separate consumer-protection registration for the project. A project needs both where applicable. LP verification checks the planning approval; RERA verification checks the project's registration and promoter disclosures [citation:7][citation:12].</p>
                </div>

                <div class="faq-item">
                    <h3>What is a draft LP approval?</h3>
                    <p>A draft approval is an intermediate stage where the authority approves the layout plan but the developer must still fulfil conditions—such as mortgaging certain plots as security and completing infrastructure works—before the final layout permit is released. Do not treat a draft approval as equivalent to a final LP number. Ask for the final permit number and verify it on the DPMS portal [citation:12].</p>
                </div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <h3>Find the Venture. Get the LP Number. Verify It.</h3>
                <p>Use VenturesDirectoryAI to discover ventures by location and collect the approval references you need—then verify the LP number on the official HMDA DPMS portal before you visit the site or pay any advance.</p>
                <div class="cta-actions">
                    <a href="/search" class="btn-white">Search Ventures by Location →</a>
                    <a href="/blog/hmda-vs-dtcp-approved-layouts" class="btn-outline-white">HMDA vs DTCP Guide →</a>
                </div>
            </div>

        </div>
    </article>

    <!-- Sources -->
    <section class="sources-section">
        <div class="container">
            <h3>Sources &amp; Official References</h3>
            <ul>
                <li><a href="https://hmda.gov.in" target="_blank" rel="noopener">HMDA Official Portal</a> — DPMS layout permission search</li>
                <li><a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">TG-RERA</a> — Project registration verification</li>
                <li><a href="https://dtcp.telangana.gov.in" target="_blank" rel="noopener">DTCP Telangana</a> — Layout approvals outside HMDA jurisdiction</li>
                <li><a href="https://registration.telangana.gov.in" target="_blank" rel="noopener">IGRS Telangana</a> — Encumbrance Certificate search</li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: #64748b;"><strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or investment advice. Directory information is a starting point for research—not proof of current approval or legal validity. Always verify on the official HMDA, DTCP, and TG-RERA portals and consult a qualified property lawyer before making any purchase decision.</p>
        </div>
    </section>


</body>
</html>`,_R={"ai-real-estate-search-india":mR,"best-areas-to-buy-open-plots-near-hyderabad":gR,"hmda-vs-dtcp-approved-layouts":vR,"how-to-verify-plot-before-buying-hyderabad":yR,"real-estate-project-listing-online-india":bR,"rera-registered-projects-hyderabad":xR,"what-is-lp-number-in-real-estate":wR},tl={...Qb(hR)},Xb=Object.fromEntries(Object.entries(_R).map(([e,i])=>[e,{slug:e,path:`/blog/${e}`,...Qb(i)}])),kR=e=>Xb[e]||null;Object.values(Xb);const Lu={featured:{src:"/blog/featured-rera.jpg",alt:"Modern high-rise real estate skyline"},"hmda-vs-dtcp-approved-layouts":{src:"/blog/hmda-dtcp.jpg",alt:"House keys on a property document for layout approval checks"},"how-to-verify-plot-before-buying-hyderabad":{src:"/blog/verify-plot.jpg",alt:"Open land and fields representing plot verification"},"best-areas-to-buy-open-plots-near-hyderabad":{src:"/blog/open-plots.jpg",alt:"Suburban neighbourhood rooftops near a growing city"},"rera-registered-projects-hyderabad":{src:"/blog/rera-search.jpg",alt:"Person reviewing documents while researching RERA projects"},"what-is-lp-number-in-real-estate":{src:"/blog/lp-number.jpg",alt:"Blueprint plans used to understand layout permission numbers"},"ai-real-estate-search-india":{src:"/blog/ai-search.jpg",alt:"Laptop and notes used for smarter AI-assisted property research"},"real-estate-project-listing-online-india":{src:"/blog/developer-listing.jpg",alt:"Construction site representing developer project listings"}},SR=e=>Lu[e]||Lu.featured;function AR({onAdvisorClick:e}){return v.jsxs("main",{className:"vd-page vd-blog-page",children:[v.jsx(ts,{title:tl.title,description:tl.description,path:"/blog",image:`${Nn}${Lu.featured.src}`,jsonLd:{"@context":"https://schema.org","@type":"Blog",name:`${ti} Guides`,url:`${Nn}/blog`,description:tl.description,image:`${Nn}${Lu.featured.src}`}}),v.jsx("section",{className:"vd-page-hero",children:v.jsxs("div",{className:"vd-page-hero-inner",children:[v.jsx("p",{className:"vd-page-kicker",children:"Blog"}),v.jsx("h1",{children:"Real Estate Research & Verification Guides"}),v.jsx("p",{className:"vd-page-lead",children:"Expert guides on RERA verification, HMDA/DTCP approvals, plot due diligence, and smarter property research."})]})}),v.jsx(Kb,{styles:tl.styles,html:tl.bodyHtml,onAdvisorClick:e})]})}function PR({onAdvisorClick:e}){const{slug:i}=Px(),a=fh(i),l=kR(a),c=SR(a);return l?i!==a?v.jsx(mu,{to:`/blog/${a}`,replace:!0}):v.jsxs("main",{className:"vd-page vd-blog-page",children:[v.jsx(ts,{title:l.title,description:l.description,path:l.path,type:"article",image:`${Nn}${c.src}`,jsonLd:[...l.jsonLd||[],{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:Nn},{"@type":"ListItem",position:2,name:"Blog",item:`${Nn}/blog`},{"@type":"ListItem",position:3,name:l.title,item:`${Nn}${l.path}`}]}]}),v.jsx("div",{className:"vd-blog-toolbar",children:v.jsx(Yn,{to:"/blog",className:"vd-blog-back",children:"← All Guides"})}),v.jsx("figure",{className:"vd-blog-cover",children:v.jsx("img",{src:c.src,alt:c.alt,width:"1200",height:"630",loading:"eager"})}),v.jsx(Kb,{styles:l.styles,html:l.bodyHtml,onAdvisorClick:e})]}):v.jsx(mu,{to:"/blog",replace:!0})}function ER(){const[e,i]=P.useState(!1),a=()=>i(!0);return v.jsxs("div",{style:{minHeight:"100vh",background:"#f1f5f9"},children:[v.jsx(oC,{}),v.jsx(RP,{onAdvisorClick:a}),v.jsx(aC,{open:e,onOpenChange:i}),v.jsxs(Hx,{children:[v.jsx(Jr,{path:"/",element:v.jsx(GC,{onAdvisorClick:a})}),v.jsx(Jr,{path:"/about",element:v.jsx(XC,{})}),v.jsx(Jr,{path:"/how-it-works",element:v.jsx(nR,{})}),v.jsx(Jr,{path:"/contact",element:v.jsx(aR,{})}),v.jsx(Jr,{path:"/blog",element:v.jsx(AR,{onAdvisorClick:a})}),v.jsx(Jr,{path:"/blogs",element:v.jsx(mu,{to:"/blog",replace:!0})}),v.jsx(Jr,{path:"/blog/:slug",element:v.jsx(PR,{onAdvisorClick:a})}),v.jsx(Jr,{path:"*",element:v.jsx(mu,{to:"/",replace:!0})})]}),v.jsx(IP,{})]})}U1.createRoot(document.getElementById("root")).render(v.jsx(dw,{children:v.jsx(ER,{})}));
//# sourceMappingURL=index-DRzgkZM_.js.map
