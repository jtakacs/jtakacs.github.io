var mf=Object.defineProperty;var gf=(r,t,e)=>t in r?mf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var ma=(r,t,e)=>(gf(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();(function(r){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=r,e.c=t,e.d=function(n,i,s){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:s})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var o in n)e.d(s,o,(function(a){return n[a]}).bind(null,o));return s},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=83)})([function(r,t,e){e.d(t,"b",function(){return c}),e.d(t,"c",function(){return n.a}),e.d(t,"a",function(){return N});var n=e(3);const i=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class o{constructor(y,M){if(M!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=y}get styleSheet(){return i&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,c=(b,...y)=>{const M=y.reduce((B,U,G)=>B+(j=>{if(j instanceof o)return j.cssText;if(typeof j=="number")return j;throw Error(`Value passed to 'css' function must be a 'css' function result: ${j}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(U)+b[G+1],b[0]);let I=a.get(M);return I===void 0&&a.set(M,I=new o(M,s)),I},l=i?b=>b:b=>b instanceof CSSStyleSheet?(y=>{let M="";for(const I of y.cssRules)M+=I.cssText;return(I=>new o(I+"",s))(M)})(b):b;var h,u,d,f;const p={toAttribute(b,y){switch(y){case Boolean:b=b?"":null;break;case Object:case Array:b=b==null?b:JSON.stringify(b)}return b},fromAttribute(b,y){let M=b;switch(y){case Boolean:M=b!==null;break;case Number:M=b===null?null:Number(b);break;case Object:case Array:try{M=JSON.parse(b)}catch{M=null}}return M}},m=(b,y)=>y!==b&&(y==y||b==b),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(y){var M;(M=this.v)!==null&&M!==void 0||(this.v=[]),this.v.push(y)}static get observedAttributes(){this.finalize();const y=[];return this.elementProperties.forEach((M,I)=>{const B=this.Πp(I,M);B!==void 0&&(this.Πm.set(B,I),y.push(B))}),y}static createProperty(y,M=v){if(M.state&&(M.attribute=!1),this.finalize(),this.elementProperties.set(y,M),!M.noAccessor&&!this.prototype.hasOwnProperty(y)){const I=typeof y=="symbol"?Symbol():"__"+y,B=this.getPropertyDescriptor(y,I,M);B!==void 0&&Object.defineProperty(this.prototype,y,B)}}static getPropertyDescriptor(y,M,I){return{get(){return this[M]},set(B){const U=this[y];this[M]=B,this.requestUpdate(y,U,I)},configurable:!0,enumerable:!0}}static getPropertyOptions(y){return this.elementProperties.get(y)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const y=Object.getPrototypeOf(this);if(y.finalize(),this.elementProperties=new Map(y.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const M=this.properties,I=[...Object.getOwnPropertyNames(M),...Object.getOwnPropertySymbols(M)];for(const B of I)this.createProperty(B,M[B])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(y){const M=[];if(Array.isArray(y)){const I=new Set(y.flat(1/0).reverse());for(const B of I)M.unshift(l(B))}else y!==void 0&&M.push(l(y));return M}static Πp(y,M){const I=M.attribute;return I===!1?void 0:typeof I=="string"?I:typeof y=="string"?y.toLowerCase():void 0}u(){var y;this.Πg=new Promise(M=>this.enableUpdating=M),this.L=new Map,this.Π_(),this.requestUpdate(),(y=this.constructor.v)===null||y===void 0||y.forEach(M=>M(this))}addController(y){var M,I;((M=this.ΠU)!==null&&M!==void 0?M:this.ΠU=[]).push(y),this.renderRoot!==void 0&&this.isConnected&&((I=y.hostConnected)===null||I===void 0||I.call(y))}removeController(y){var M;(M=this.ΠU)===null||M===void 0||M.splice(this.ΠU.indexOf(y)>>>0,1)}Π_(){this.constructor.elementProperties.forEach((y,M)=>{this.hasOwnProperty(M)&&(this.Πi.set(M,this[M]),delete this[M])})}createRenderRoot(){var y;const M=(y=this.shadowRoot)!==null&&y!==void 0?y:this.attachShadow(this.constructor.shadowRootOptions);return((I,B)=>{i?I.adoptedStyleSheets=B.map(U=>U instanceof CSSStyleSheet?U:U.styleSheet):B.forEach(U=>{const G=document.createElement("style");G.textContent=U.cssText,I.appendChild(G)})})(M,this.constructor.elementStyles),M}connectedCallback(){var y;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(y=this.ΠU)===null||y===void 0||y.forEach(M=>{var I;return(I=M.hostConnected)===null||I===void 0?void 0:I.call(M)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(y){}disconnectedCallback(){var y;(y=this.ΠU)===null||y===void 0||y.forEach(M=>{var I;return(I=M.hostDisconnected)===null||I===void 0?void 0:I.call(M)}),this.Πo=new Promise(M=>this.Πl=M)}attributeChangedCallback(y,M,I){this.K(y,I)}Πj(y,M,I=v){var B,U;const G=this.constructor.Πp(y,I);if(G!==void 0&&I.reflect===!0){const j=((U=(B=I.converter)===null||B===void 0?void 0:B.toAttribute)!==null&&U!==void 0?U:p.toAttribute)(M,I.type);this.Πh=y,j==null?this.removeAttribute(G):this.setAttribute(G,j),this.Πh=null}}K(y,M){var I,B,U;const G=this.constructor,j=G.Πm.get(y);if(j!==void 0&&this.Πh!==j){const J=G.getPropertyOptions(j),ht=J.converter,Q=(U=(B=(I=ht)===null||I===void 0?void 0:I.fromAttribute)!==null&&B!==void 0?B:typeof ht=="function"?ht:null)!==null&&U!==void 0?U:p.fromAttribute;this.Πh=j,this[j]=Q(M,J.type),this.Πh=null}}requestUpdate(y,M,I){let B=!0;y!==void 0&&(((I=I||this.constructor.getPropertyOptions(y)).hasChanged||m)(this[y],M)?(this.L.has(y)||this.L.set(y,M),I.reflect===!0&&this.Πh!==y&&(this.Πk===void 0&&(this.Πk=new Map),this.Πk.set(y,I))):B=!1),!this.isUpdatePending&&B&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(M){Promise.reject(M)}const y=this.performUpdate();return y!=null&&await y,!this.isUpdatePending}performUpdate(){var y;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((B,U)=>this[U]=B),this.Πi=void 0);let M=!1;const I=this.L;try{M=this.shouldUpdate(I),M?(this.willUpdate(I),(y=this.ΠU)===null||y===void 0||y.forEach(B=>{var U;return(U=B.hostUpdate)===null||U===void 0?void 0:U.call(B)}),this.update(I)):this.Π$()}catch(B){throw M=!1,this.Π$(),B}M&&this.E(I)}willUpdate(y){}E(y){var M;(M=this.ΠU)===null||M===void 0||M.forEach(I=>{var B;return(B=I.hostUpdated)===null||B===void 0?void 0:B.call(I)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(y)),this.updated(y)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(y){return!0}update(y){this.Πk!==void 0&&(this.Πk.forEach((M,I)=>this.Πj(I,this[I],M)),this.Πk=void 0),this.Π$()}updated(y){}firstUpdated(y){}}var _,x,S,E,C,T;g.finalized=!0,g.shadowRootOptions={mode:"open"},(u=(h=globalThis).reactiveElementPlatformSupport)===null||u===void 0||u.call(h,{ReactiveElement:g}),((d=(f=globalThis).reactiveElementVersions)!==null&&d!==void 0?d:f.reactiveElementVersions=[]).push("1.0.0-rc.1"),((_=(T=globalThis).litElementVersions)!==null&&_!==void 0?_:T.litElementVersions=[]).push("3.0.0-rc.1");class N extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var y,M;const I=super.createRenderRoot();return(y=(M=this.renderOptions).renderBefore)!==null&&y!==void 0||(M.renderBefore=I.firstChild),I}update(y){const M=this.render();super.update(y),this.Φt=Object(n.d)(M,this.renderRoot,this.renderOptions)}connectedCallback(){var y;super.connectedCallback(),(y=this.Φt)===null||y===void 0||y.setConnected(!0)}disconnectedCallback(){var y;super.disconnectedCallback(),(y=this.Φt)===null||y===void 0||y.setConnected(!1)}render(){return n.b}}N.finalized=!0,N._$litElement$=!0,(S=(x=globalThis).litElementHydrateSupport)===null||S===void 0||S.call(x,{LitElement:N}),(C=(E=globalThis).litElementPlatformSupport)===null||C===void 0||C.call(E,{LitElement:N})},function(r,t,e){e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s});const n=(o,a)=>a.kind==="method"&&a.descriptor&&!("value"in a.descriptor)?{...a,finisher(c){c.createProperty(a.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){typeof a.initializer=="function"&&(this[a.key]=a.initializer.call(this))},finisher(c){c.createProperty(a.key,o)}};function i(o){return(a,c)=>c!==void 0?((l,h,u)=>{h.constructor.createProperty(u,l)})(o,a,c):n(o,a)}function s(o){return i({...o,state:!0,attribute:!1})}},function(r,t,e){e.d(t,"a",function(){return n});const n=e(0).b`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},function(r,t,e){var n,i,s,o;e.d(t,"a",function(){return b}),e.d(t,"b",function(){return y}),e.d(t,"c",function(){return M}),e.d(t,"d",function(){return B});const a=globalThis.trustedTypes,c=a?a.createPolicy("lit-html",{createHTML:tt=>tt}):void 0,l=`lit$${(Math.random()+"").slice(9)}$`,h="?"+l,u=`<${h}>`,d=document,f=(tt="")=>d.createComment(tt),p=tt=>tt===null||typeof tt!="object"&&typeof tt!="function",m=Array.isArray,v=tt=>{var A;return m(tt)||typeof((A=tt)===null||A===void 0?void 0:A[Symbol.iterator])=="function"},g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,x=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,C=/"/g,T=/^(?:script|style|textarea)$/i,N=tt=>(A,...F)=>({_$litType$:tt,strings:A,values:F}),b=N(1),y=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),I=new WeakMap,B=(tt,A,F)=>{var H,X;const dt=(H=F==null?void 0:F.renderBefore)!==null&&H!==void 0?H:A;let q=dt._$litPart$;if(q===void 0){const L=(X=F==null?void 0:F.renderBefore)!==null&&X!==void 0?X:null;dt._$litPart$=q=new Q(A.insertBefore(f(),L),L,void 0,F)}return q.I(tt),q},U=d.createTreeWalker(d,129,null,!1),G=(tt,A)=>{const F=tt.length-1,H=[];let X,dt=A===2?"<svg>":"",q=g;for(let $=0;$<F;$++){const z=tt[$];let at,W,nt=-1,lt=0;for(;lt<z.length&&(q.lastIndex=lt,W=q.exec(z),W!==null);)lt=q.lastIndex,q===g?W[1]==="!--"?q=_:W[1]!==void 0?q=x:W[2]!==void 0?(T.test(W[2])&&(X=RegExp("</"+W[2],"g")),q=S):W[3]!==void 0&&(q=S):q===S?W[0]===">"?(q=X??g,nt=-1):W[1]===void 0?nt=-2:(nt=q.lastIndex-W[2].length,at=W[1],q=W[3]===void 0?S:W[3]==='"'?C:E):q===C||q===E?q=S:q===_||q===x?q=g:(q=S,X=void 0);const ft=q===S&&tt[$+1].startsWith("/>")?" ":"";dt+=q===g?z+u:nt>=0?(H.push(at),z.slice(0,nt)+"$lit$"+z.slice(nt)+l+ft):z+l+(nt===-2?(H.push(void 0),$):ft)}const L=dt+(tt[F]||"<?>")+(A===2?"</svg>":"");return[c!==void 0?c.createHTML(L):L,H]};class j{constructor({strings:A,_$litType$:F},H){let X;this.parts=[];let dt=0,q=0;const L=A.length-1,$=this.parts,[z,at]=G(A,F);if(this.el=j.createElement(z,H),U.currentNode=this.el.content,F===2){const W=this.el.content,nt=W.firstChild;nt.remove(),W.append(...nt.childNodes)}for(;(X=U.nextNode())!==null&&$.length<L;){if(X.nodeType===1){if(X.hasAttributes()){const W=[];for(const nt of X.getAttributeNames())if(nt.endsWith("$lit$")||nt.startsWith(l)){const lt=at[q++];if(W.push(nt),lt!==void 0){const ft=X.getAttribute(lt.toLowerCase()+"$lit$").split(l),Tt=/([.?@])?(.*)/.exec(lt);$.push({type:1,index:dt,name:Tt[2],strings:ft,ctor:Tt[1]==="."?V:Tt[1]==="?"?et:Tt[1]==="@"?St:ot})}else $.push({type:6,index:dt})}for(const nt of W)X.removeAttribute(nt)}if(T.test(X.tagName)){const W=X.textContent.split(l),nt=W.length-1;if(nt>0){X.textContent=a?a.emptyScript:"";for(let lt=0;lt<nt;lt++)X.append(W[lt],f()),U.nextNode(),$.push({type:2,index:++dt});X.append(W[nt],f())}}}else if(X.nodeType===8)if(X.data===h)$.push({type:2,index:dt});else{let W=-1;for(;(W=X.data.indexOf(l,W+1))!==-1;)$.push({type:7,index:dt}),W+=l.length-1}dt++}}static createElement(A,F){const H=d.createElement("template");return H.innerHTML=A,H}}function J(tt,A,F=tt,H){var X,dt,q,L;if(A===y)return A;let $=H!==void 0?(X=F.Σi)===null||X===void 0?void 0:X[H]:F.Σo;const z=p(A)?void 0:A._$litDirective$;return($==null?void 0:$.constructor)!==z&&((dt=$==null?void 0:$.O)===null||dt===void 0||dt.call($,!1),z===void 0?$=void 0:($=new z(tt),$.T(tt,F,H)),H!==void 0?((q=(L=F).Σi)!==null&&q!==void 0?q:L.Σi=[])[H]=$:F.Σo=$),$!==void 0&&(A=J(tt,$.S(tt,A.values),$,H)),A}class ht{constructor(A,F){this.l=[],this.N=void 0,this.D=A,this.M=F}u(A){var F;const{el:{content:H},parts:X}=this.D,dt=((F=A==null?void 0:A.creationScope)!==null&&F!==void 0?F:d).importNode(H,!0);U.currentNode=dt;let q=U.nextNode(),L=0,$=0,z=X[0];for(;z!==void 0;){if(L===z.index){let at;z.type===2?at=new Q(q,q.nextSibling,this,A):z.type===1?at=new z.ctor(q,z.name,z.strings,this,A):z.type===6&&(at=new wt(q,this,A)),this.l.push(at),z=X[++$]}L!==(z==null?void 0:z.index)&&(q=U.nextNode(),L++)}return dt}v(A){let F=0;for(const H of this.l)H!==void 0&&(H.strings!==void 0?(H.I(A,H,F),F+=H.strings.length-2):H.I(A[F])),F++}}class Q{constructor(A,F,H,X){this.type=2,this.N=void 0,this.A=A,this.B=F,this.M=H,this.options=X}setConnected(A){var F;(F=this.P)===null||F===void 0||F.call(this,A)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(A,F=this){A=J(this,A,F),p(A)?A===M||A==null||A===""?(this.H!==M&&this.R(),this.H=M):A!==this.H&&A!==y&&this.m(A):A._$litType$!==void 0?this._(A):A.nodeType!==void 0?this.$(A):v(A)?this.g(A):this.m(A)}k(A,F=this.B){return this.A.parentNode.insertBefore(A,F)}$(A){this.H!==A&&(this.R(),this.H=this.k(A))}m(A){const F=this.A.nextSibling;F!==null&&F.nodeType===3&&(this.B===null?F.nextSibling===null:F===this.B.previousSibling)?F.data=A:this.$(d.createTextNode(A)),this.H=A}_(A){var F;const{values:H,_$litType$:X}=A,dt=typeof X=="number"?this.C(A):(X.el===void 0&&(X.el=j.createElement(X.h,this.options)),X);if(((F=this.H)===null||F===void 0?void 0:F.D)===dt)this.H.v(H);else{const q=new ht(dt,this),L=q.u(this.options);q.v(H),this.$(L),this.H=q}}C(A){let F=I.get(A.strings);return F===void 0&&I.set(A.strings,F=new j(A)),F}g(A){m(this.H)||(this.H=[],this.R());const F=this.H;let H,X=0;for(const dt of A)X===F.length?F.push(H=new Q(this.k(f()),this.k(f()),this,this.options)):H=F[X],H.I(dt),X++;X<F.length&&(this.R(H&&H.B.nextSibling,X),F.length=X)}R(A=this.A.nextSibling,F){var H;for((H=this.P)===null||H===void 0||H.call(this,!1,!0,F);A&&A!==this.B;){const X=A.nextSibling;A.remove(),A=X}}}class ot{constructor(A,F,H,X,dt){this.type=1,this.H=M,this.N=void 0,this.V=void 0,this.element=A,this.name=F,this.M=X,this.options=dt,H.length>2||H[0]!==""||H[1]!==""?(this.H=Array(H.length-1).fill(M),this.strings=H):this.H=M}get tagName(){return this.element.tagName}I(A,F=this,H,X){const dt=this.strings;let q=!1;if(dt===void 0)A=J(this,A,F,0),q=!p(A)||A!==this.H&&A!==y,q&&(this.H=A);else{const L=A;let $,z;for(A=dt[0],$=0;$<dt.length-1;$++)z=J(this,L[H+$],F,$),z===y&&(z=this.H[$]),q||(q=!p(z)||z!==this.H[$]),z===M?A=M:A!==M&&(A+=(z??"")+dt[$+1]),this.H[$]=z}q&&!X&&this.W(A)}W(A){A===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,A??"")}}class V extends ot{constructor(){super(...arguments),this.type=3}W(A){this.element[this.name]=A===M?void 0:A}}class et extends ot{constructor(){super(...arguments),this.type=4}W(A){A&&A!==M?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class St extends ot{constructor(){super(...arguments),this.type=5}I(A,F=this){var H;if((A=(H=J(this,A,F,0))!==null&&H!==void 0?H:M)===y)return;const X=this.H,dt=A===M&&X!==M||A.capture!==X.capture||A.once!==X.once||A.passive!==X.passive,q=A!==M&&(X===M||dt);dt&&this.element.removeEventListener(this.name,this,X),q&&this.element.addEventListener(this.name,this,A),this.H=A}handleEvent(A){var F,H;typeof this.H=="function"?this.H.call((H=(F=this.options)===null||F===void 0?void 0:F.host)!==null&&H!==void 0?H:this.element,A):this.H.handleEvent(A)}}class wt{constructor(A,F,H){this.element=A,this.type=6,this.N=void 0,this.V=void 0,this.M=F,this.options=H}I(A){J(this,A)}}(i=(n=globalThis).litHtmlPlatformSupport)===null||i===void 0||i.call(n,j,Q),((s=(o=globalThis).litHtmlVersions)!==null&&s!==void 0?s:o.litHtmlVersions=[]).push("2.0.0-rc.2")},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.a,n.b`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){var l;return n.c` ${!((l=this.icon)===null||l===void 0)&&l.indexOf("url")?n.c` ${this.icon} `:""}`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="color"&&this.color?this.style.color=this.color:l=="icon"&&u.indexOf("url")>-1&&this.setBackgroundImage(u)}setBackgroundImage(l){this.style.backgroundImage=l}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",a)},function(r,t,e){e.r(t);var n=e(4);e.d(t,"korIcon",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[s.a,n.b`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="color"&&this.color&&(this.style.color=this.color)}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",a)},function(r,t,e){e.r(t);var n=e(6);e.d(t,"korText",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return n.c`
      ${this.image?n.c` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?n.c`
                <div class="label">
                  ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":n.c` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${l=>this.emptyFunctions=l.target.assignedNodes().length===0}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",a)},function(r,t,e){e.r(t);var n=e(8);e.d(t,"korCard",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          z-index: 3;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0 var(--spacing-l);
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
          gap: calc(var(--spacing-l) * 2);
          /* css properties */
          --functions-gap: var(--spacing-m);
        }
        .logo {
          height: 24px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        /* mobile */
        :host[mobile] {
          gap: var(--spacing-l);
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `]}render(){return n.c`
      ${this.mobile?n.c`
            <slot name="left"></slot>
            ${this.label?n.c` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:n.c`
            ${this.logo?n.c`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?n.c` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"logo",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(9),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: var(--border-radius);
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n.c`
      <kor-card
        @click="${l=>l.stopPropagation()}"
        @wheel="${l=>l.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${l=>this.emptyFunctions=l.target.assignedNodes().length===0}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l==="target"&&this.target?this.targetObserver():l==="visible"&&this.visible&&this.visibleObserver()}targetObserver(){const l=typeof this.target=="string"?document.querySelector(this.target):this.target;l&&l.addEventListener("click",()=>this.handlePosition(l))}visibleObserver(){const l=typeof this.target=="string"?document.querySelector(this.target):this.target;l&&(this.handlePosition(l),!this.sticky&&this.target&&this.addDocListener(l))}handlePosition(l){if(!l)return;let h=this,u=l.getBoundingClientRect();if(h.visible=!0,h.position.startsWith("bottom"))h.style.top=u.top+u.height+8+"px";else if(h.position.startsWith("top"))h.style.top=u.top-h.clientHeight-8+"px";else{h.style.top=u.top+u.height/2-h.clientHeight/2+"px",parseInt(h.style.top)<0&&(h.style.top="8px");const d=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(h.style.top)+h.clientHeight>d&&(h.style.top=d-h.clientHeight-8+"px")}h.position.startsWith("right")?h.style.left=u.left+u.width+8+"px":h.position.startsWith("left")?h.style.left=u.left-h.clientWidth-8+"px":h.style.left=u.left+u.width/2-h.clientWidth/2+"px"}addDocListener(l){let h=u=>{(u.composedPath()[0]!==l&&u.target!==l&&u.type==="click"||u.type==="wheel")&&(this.visible=!1,document.removeEventListener("click",h),document.removeEventListener("wheel",h))};document.addEventListener("click",h),document.addEventListener("wheel",h)}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"target",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(9),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: var(--spacing-s) var(--spacing-l);
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        slot:not([name]) {
          transition: var(--transition-1);
          display: inherit;
          flex-direction: inherit;
          gap: inherit;
        }
        slot[name='footer'] {
          justify-content: flex-end;
        }
        /* expanded */
        :host([expanded]) slot:not([name]) {
          margin-top: var(--spacing-l);
        }
        :host(:not([expanded])) slot:not([name]) {
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: var(--spacing-s);
        }
        slot[name='header'] p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
          flex: 1;
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `]}render(){return n.c`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${l=>this.handleCollapse(l)}"
        >
          <div class="header">
            ${this.icon?n.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot name="functions" slot="functions"></slot>
        <slot></slot>
        ${this.expanded?n.c`
              <slot
                name="footer"
                slot="${this.emptyFooter?"hidden":"footer"}"
                @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var l,h,u;const d=(u=(h=(l=this.shadowRoot)===null||l===void 0?void 0:l.querySelector("kor-card"))===null||h===void 0?void 0:h.shadowRoot)===null||u===void 0?void 0:u.querySelector(".top");d&&(d.style.padding="0")},0)}handleCollapse(l){this.expanded&&(this.expanded=!1,l.stopPropagation())}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"expanded",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyBody",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: var(--spacing-s);
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `]}render(){return n.c`
      <!-- image -->
      <div class="image">
        ${this.image?n.c` <img src="${this.image}" /> `:n.c`
              ${this.label?n.c` ${this.getInitials(this.label)} `:n.c` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?n.c`
            <div class="text">
              ${this.label?n.c`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?n.c`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}getInitials(l){const h=l.match(/\b\w/g)||[];return(h.shift()||"")+(h.pop()||"").toUpperCase()}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return n.c`
      ${this.status?n.c`
            <!-- status -->
            ${this.status?n.c`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:n.c`
            ${this.label?n.c`
                  <kor-text size="body-2">
                    ${this.label>999?n.c` 999+ `:n.c` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}getStatusIcon(){let l;switch(this.status){case"error":l="cancel";break;case"warning":l="error";break;case"success":l="check_circle"}return l}}o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",a)},function(r,t,e){e.d(t,"a",function(){return s});var n=e(0),i=e(2);class s extends n.a{static get styles(){return[i.a,n.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return n.c` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",s)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 var(--spacing-xs);
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `]}render(){return n.c`
      ${this.firstItem()?"":n.c`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}firstItem(){var l;let h,u;return u=Array.prototype.slice.call((l=this.parentElement)===null||l===void 0?void 0:l.children),h=u.indexOf(this)==0,h}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.color="primary"}static get styles(){return[s.a,n.b`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          gap: var(--spacing-xs);
          height: max-content;
          width: max-content;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([label]) {
          min-width: calc(24px + var(--spacing-l) * 2);
          max-width: 160px;
          padding: var(--spacing-xs) var(--spacing-m);
        }
        :host([color='tertiary'][label]) {
          padding: 3px 11px;
        }
        :host(:not([label])) {
          padding: var(--spacing-xs);
        }
        :host([color='tertiary']:not([label])) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          background-color: rgb(var(--accent-1));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }
        :host([color='primary']) {
          color: rgba(255, 255, 255, 0.9);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background-color: rgb(var(--accent-1b));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n.c`
      <slot name="icon">
        ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      </slot>
      <slot> ${this.label?n.c` ${this.label} `:""}</slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 2px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .box {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not(:active)) .box {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return n.c`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?n.c` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?n.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[s.a,n.b`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: var(--spacing-s) 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: var(--spacing-l) 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: calc(var(--spacing-l) * 2) 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 var(--spacing-s);
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 var(--spacing-l);
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 calc(var(--spacing-s) * 2);
        }
      `]}render(){return n.c`<div class="line"></div>`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(9),e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        kor-card {
          position: absolute;
          border-radius: 0px;
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        /* position */
        :host([position='left']) kor-card {
          left: 0;
        }
        :host([position='right']) kor-card {
          right: 0;
        }
        :host([position='top']) kor-card {
          top: 0;
        }
        :host([position='bottom']) kor-card {
          bottom: 0;
        }
        /* animations */
        :host([position='left']:not([visible])) kor-card {
          margin-left: -40px;
        }
        :host([position='right']:not([visible])) kor-card {
          margin-right: -40px;
        }
        :host([position='top']:not([visible])) kor-card {
          margin-top: -40px;
        }
        :host([position='bottom']:not([visible])) kor-card {
          margin-bottom: -40px;
        }
      `]}render(){return n.c`
      <kor-card
        @click="${l=>l.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l==="visible"&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let l={height:void 0,width:void 0};switch(this.position){case"left":case"right":l.height="100%",l.width=this.width;break;case"top":case"bottom":l.height=this.height,l.width="100%"}return l}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* css properties */
          --footer-gap: var(--spacing-m);
        }
        slot[name='footer'] {
          display: flex;
          margin-top: var(--spacing-l);
          gap: var(--footer-gap);
        }
        kor-icon + kor-text {
          margin-top: var(--spacing-s);
        }
        kor-text {
          text-align: center;
        }
      `]}render(){return n.c`
      ${this.icon?n.c`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?n.c` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[s.a,n.b`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        :host(:not([fit-content])) {
          height: 100%;
          width: 100%;
        }
        ::slotted(*) {
          width: auto;
          min-width: 0;
          min-height: 0;
        }
        /* spacing */
        :host([spacing='s']) {
          grid-gap: var(--spacing-s);
        }
        :host([spacing='m']) {
          grid-gap: var(--spacing-m);
        }
        :host([spacing='l']) {
          grid-gap: var(--spacing-l);
        }
        /* columns and rows */
        ::slotted(*[grid-cols='0']) {
          display: none;
        }
        ::slotted(*:not([grid-cols])),
        ::slotted(*[grid-cols='1']) {
          grid-column: span 1;
        }
        ::slotted(*[grid-cols='2']) {
          grid-column: span 2;
        }
        ::slotted(*[grid-cols='3']) {
          grid-column: span 3;
        }
        ::slotted(*[grid-cols='4']) {
          grid-column: span 4;
        }
        ::slotted(*[grid-cols='5']) {
          grid-column: span 5;
        }
        ::slotted(*[grid-cols='6']) {
          grid-column: span 6;
        }
        ::slotted(*[grid-cols='7']) {
          grid-column: span 7;
        }
        ::slotted(*[grid-cols='8']) {
          grid-column: span 8;
        }
        ::slotted(*[grid-cols='9']) {
          grid-column: span 9;
        }
        ::slotted(*[grid-cols='10']) {
          grid-column: span 10;
        }
        ::slotted(*[grid-cols='11']) {
          grid-column: span 11;
        }
        ::slotted(*[grid-cols='12']) {
          grid-column: span 12;
        }
        ::slotted(*:not([grid-rows])),
        ::slotted(*[grid-rows='1']) {
          grid-row: span 1;
        }
        ::slotted(*[grid-rows='2']) {
          grid-row: span 2;
        }
        ::slotted(*[grid-rows='3']) {
          grid-row: span 3;
        }
        ::slotted(*[grid-rows='4']) {
          grid-row: span 4;
        }
        ::slotted(*[grid-rows='5']) {
          grid-row: span 5;
        }
        ::slotted(*[grid-rows='6']) {
          grid-row: span 6;
        }
        ::slotted(*[grid-rows='7']) {
          grid-row: span 7;
        }
        ::slotted(*[grid-rows='8']) {
          grid-row: span 8;
        }
        ::slotted(*[grid-rows='9']) {
          grid-row: span 9;
        }
        ::slotted(*[grid-rows='10']) {
          grid-row: span 10;
        }
        ::slotted(*[grid-rows='11']) {
          grid-row: span 11;
        }
        ::slotted(*[grid-rows='12']) {
          grid-row: span 12;
        }
        /* tablet */
        @media only screen and (max-width: 1025px) {
          ::slotted(*[grid-cols-m='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-m='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-m='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-m='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-m='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-m='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-m='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-m='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-m='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-m='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-m='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-m='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-m='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-m='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-m='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-m='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-m='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-m='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-m='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-m='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-m='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-m='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-m='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-m='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-m='12']) {
            grid-row: span 12;
          }
        }
        /* tablet */
        @media only screen and (max-width: 767px) {
          ::slotted(*[grid-cols-s='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-s='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-s='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-s='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-s='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-s='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-s='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-s='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-s='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-s='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-s='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-s='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-s='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-s='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-s='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-s='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-s='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-s='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-s='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-s='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-s='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-s='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-s='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-s='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-s='12']) {
            grid-row: span 12;
          }
        }
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l==="columns"?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:l==="rows"&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"columns",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[s.a,n.b`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: var(--spacing-s);
        }
        :host([legend-position^='inner-']) kor-text {
          position: absolute;
          padding: var(--spacing-s);
          box-sizing: border-box;
        }
        :host([legend-position='inner-top']) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position='inner-bottom']) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-s);
          position: absolute;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name='top'] {
          top: 0;
        }
        :host([legend][legend-position='inner-top']) slot[name='top'] {
          top: 24px;
        }
        slot[name='bottom'] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name='bottom'],
        :host([legend][legend-position='inner-bottom']) slot[name='bottom'] {
          bottom: 24px;
        }
      `]}render(){return n.c`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?n.c` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"src",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"alt",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"fit",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"legend",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"legend-position"})],a.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[s.a,n.b`
        :host {
          padding: var(--spacing-s) 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: var(--spacing-s);
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        :host([active]) {
          padding: var(--spacing-s);
          margin-left: calc(var(--spacing-s) * -1);
          margin-right: calc(var(--spacing-s) * -1);
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: var(--spacing-s);
            margin-left: calc(var(--spacing-s) * -1);
            margin-right: calc(var(--spacing-s) * -1);
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n.c`
      ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?n.c` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="toggle"&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(9),e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n.c`
      <kor-card
        @click="${l=>l.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l==="visible"&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",a)},function(r,t,e){e.d(t,"a",function(){return s});var n=e(0),i=e(2);e(27);class s extends n.a{static get styles(){return[i.a,n.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return n.c`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",s)},function(r,t,e){e.r(t);var n=e(10);e.d(t,"korAppBar",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[s.a,n.b`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: var(--spacing-l);
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
          /* css properties */
          --body-gap: var(--spacing-m);
        }
        slot:not([name]) {
          gap: var(--body-gap);
          display: flex;
          flex-direction: column;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(9),e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          transition: var(--transition-1);
          opacity: 1;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `]}render(){return n.c`
      <kor-card
        @click="${l=>l.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n.c`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[s.a,n.b`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        :host([scrollable]) slot:not([name]) {
          overflow: auto;
        }
        slot[name='top'],
        slot[name='bottom'],
        :host([flex-direction='column']) slot:not([name]) {
          flex-direction: column;
        }
      `]}render(){return n.c`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"theme",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"padding",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(9),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-out;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n.c`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${l=>this.emptyFunctions=l.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.a,n.b`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: var(--spacing-s);
        }
        .footer {
          margin-top: var(--spacing-s);
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return n.c`
      <!-- header -->
      ${this.label||this.showProgress?n.c`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?n.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?n.c`
            <!-- radial -->
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
                <circle
                  stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                  stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-(this.value?this.value/100:0))}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?n.c` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:n.c`
            <!-- linear -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect
                fill="rgba(var(--neutral-1), .1)"
                width="100%"
                height="100%"
                rx="4px"
              />
              <rect
                fill="${this.color?this.color:"rgb(var(--accent-1))"}"
                width="${this.value}%"
                height="100%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `}
      ${this.info||this.status?n.c`
            <div class="footer">
              <!-- status -->
              ${this.status?n.c`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?n.c`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}getStatusIcon(){let l;switch(this.status){case"error":l="cancel";break;case"warning":l="error";break;case"success":l="check_circle"}return l}getSize(){let l;switch(this.size){case"s":l=48;break;case"m":l=64;break;case"l":l=80;break;default:l=0}return l}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"status",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"radial",void 0),o([Object(i.a)({type:Boolean,reflect:!0,attribute:"show-progress"})],a.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .circle {
          transition: var(--transition-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
        }
        :host([active]) .circle {
          border-color: transparent;
          border: 5px solid rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .circle {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return n.c`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?n.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var l;let h=(l=this.parentElement)===null||l===void 0?void 0:l.childNodes;h==null||h.forEach(u=>{u.active=!1}),this.active=!0}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[s.a,n.b`
        .track {
          width: 100%;
          height: 2px;
          margin: var(--spacing-l) 0;
          background-color: rgba(var(--neutral-1), 0.2);
          position: relative;
        }
        .thumb {
          padding: 10px;
          position: absolute;
          top: -15px;
          margin-left: cal(var(--spacing-l) * -1);
          cursor: pointer;
        }
        .thumb > div {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgb(var(--accent-1));
          transition: 0.1s all ease-out;
        }
        .thumb:hover > div {
          background-color: rgb(var(--accent-1b));
        }
        /* input */
        input {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          background-color: rgba(var(--neutral-1), 0.05);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 4px;
          width: 40px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        .label {
          display: flex;
        }
        .label kor-text {
          flex: 1;
        }
        .label > * + * {
          margin-left: var(--spacing-s);
        }
      `]}render(){return n.c`
      ${this.label?n.c`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?n.c`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${l=>this.handleInput(parseFloat(l.target.value))}"
                      @keypress="${l=>l.key==="Enter"?this.handleInput(parseFloat(l.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${l=>this.handleThumbDrag(l)}"
          @touchstart="${l=>this.handleThumbDrag(l)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l!=="value"&&l!=="min"&&l!=="max"||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(l){l>=this.min&&l<=this.max?this.value=l:l<this.min?this.value=this.min:l>this.max&&(this.value=this.max)}handleThumbPosition(){var l;const h=(l=this.shadowRoot)===null||l===void 0?void 0:l.querySelector(".thumb"),u=(this.value-this.min)/(this.max-this.min)*100;h&&u>=0&&u<=100&&(h.style.left=u+"%")}handleThumbDrag(l){const h=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let u=l.type==="mousedown"?l.clientX:l.touches[0].clientX;const d=p=>{p.preventDefault();const m=p.type==="mousemove"?p.clientX:p.touches[0].clientX,v=m-u;if(v>h||-1*v>h){const g=Math.floor(v<0?-1*v:v),_=Math.round(g/h),x=v>0?this.value+this.step*_:this.value-this.step*_;x<=this.max&&x>=this.min&&(this.value=x,u=m)}},f=()=>{window.removeEventListener("mousemove",d),window.removeEventListener("touchmove",d),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f)};window.addEventListener("mousemove",d),window.addEventListener("touchmove",d),window.addEventListener("mouseup",f),window.addEventListener("touchend",f)}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"min",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"max",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"step",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.a,n.b`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: var(--spacing-s);
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return n.c`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?n.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}getSize(){let l;switch(this.size){case"s":l=24;break;case"m":l=32;break;case"l":l=40}return l}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return n.c`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}handleOrientation(){this.childNodes.forEach(l=>{l.orientation=this.orientation})}handleItems(){let l,h;l=Array.prototype.slice.call(this.children),h=this.children.length,l.forEach(u=>{u.first=u.index==1,u.last=u.index==h})}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[s.a,n.b`
        :host {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
        }
        .circle {
          height: 40px;
          width: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-s);
          border-radius: 50%;
          background-color: rgba(var(--neutral-1), 0.1);
          transition: var(--transition-1);
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-weight: bold;
        }
        .info {
          color: var(--text-2);
        }
        .label,
        .info {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        .number,
        kor-icon {
          color: var(--text-2);
        }
        /* line */
        .line {
          background-color: rgba(var(--neutral-1), 0.1);
          position: absolute;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          justify-content: center;
          flex-direction: column;
          padding: 0 var(--spacing-l);
        }
        :host([orientation='horizontal']) .label,
        :host([orientation='horizontal']) .info {
          text-align: center;
        }
        :host([orientation='horizontal']) .circle + .text {
          margin-top: var(--spacing-xs);
        }
        :host([orientation='horizontal']) .line {
          height: 2px;
          width: calc(50% - 28px);
          top: 19px;
        }
        :host([orientation='horizontal']) .line.before {
          left: 0px;
        }
        :host([orientation='horizontal']) .line.after {
          right: 0px;
        }
        /* vertical */
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: max-content;
          padding: var(--spacing-l) 0;
        }
        :host([orientation='vertical']) .label,
        :host([orientation='vertical']) .info {
          text-align: left;
        }
        :host([orientation='vertical']) .circle + .text {
          margin-left: var(--spacing-s);
        }
        :host([orientation='vertical']) .line {
          width: 2px;
          height: calc(50% - 28px);
          left: 19px;
        }
        :host([orientation='vertical']) .line.before {
          top: 0px;
        }
        :host([orientation='vertical']) .line.after {
          bottom: 0px;
        }
        /* active */
        :host([active]) .circle {
          background-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: var(--text-1);
        }
        :host([active]) .number,
        :host([active]) kor-icon {
          color: rgba(255, 255, 255, 0.9);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
        }
        :host([disabled]) .circle,
        :host([disabled]) .text {
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) .number,
          :host(:hover:not([active])) kor-icon {
            color: var(--text-1);
          }
          :host(:not([active]):not(:active):hover) .circle {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([active]:not(:active):hover) .circle {
            background-color: rgb(var(--accent-1b));
          }
        }
      `]}render(){return n.c`
      <!-- circle -->
      <div class="circle">
        ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:n.c`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?n.c` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?n.c` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":n.c` <div class="line before"></div> `}
      ${this.last?"":n.c` <div class="line after"></div> `}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var l;((l=this.parentElement)===null||l===void 0?void 0:l.childNodes).forEach(h=>{h.active=!1}),this.active=!0})}getIndex(){var l;let h;h=Array.prototype.slice.call((l=this.parentElement)===null||l===void 0?void 0:l.children),this.index=h.indexOf(this)+1}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"index",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"first",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"last",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",a)},function(r,t,e){e.d(t,"a",function(){return s});var n=e(0),i=e(2);class s extends n.a{static get styles(){return[i.a,n.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return n.c` <slot></slot> `}attributeChangedCallback(a,c,l){super.attributeChangedCallback(a,c,l),this.dispatchEvent(new Event(a+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",s)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          width: max-content;
          min-width: 40px;
          max-width: 120px;
          padding: var(--spacing-xs) var(--spacing-m);
          border-radius: var(--border-radius);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-1);
        }
        .label {
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: var(--text-2);
        }
        /* active */
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        :host([active]) {
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host([active]:hover) {
            background: rgba(var(--neutral-1), 0.15);
          }
        }
      `]}render(){return n.c`
      ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?n.c` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var l;((l=this.parentElement)===null||l===void 0?void 0:l.childNodes).forEach(h=>{h.active=!1}),this.active=!0}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-color: transparent;
          border-style: solid;
          color: var(--text-2);
        }
        .label {
          line-height: 24px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: unset;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: max-content;
          min-width: 72px;
          max-width: 240px;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0px var(--spacing-l);
          border-width: 0px 0px 2px 0px;
        }
        :host([orientation='horizontal']) .label {
          text-align: center;
        }
        /* vertical */
        :host([orientation='vertical']) .label {
          text-align: left;
        }
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          height: max-content;
          padding: var(--spacing-s) var(--spacing-s) var(--spacing-s)
            calc(var(--spacing-l) - 2px);
          border-width: 0px 0px 0px 2px;
        }
        :host([orientation='vertical']) {
          gap: var(--spacing-s);
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover) .label {
            color: var(--text-1);
          }
        }
      `]}render(){return n.c`
      <slot>
        ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
        ${this.label?n.c` <kor-text class="label">${this.label}</kor-text> `:""}
      </slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var l;((l=this.closest("kor-tabs"))===null||l===void 0?void 0:l.querySelectorAll("kor-tab-item")).forEach(h=>{h.active=!1}),this.active=!0}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          flex-direction: column;
          max-height: 100%;
          margin: 0 !important;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
          overflow: auto;
        }
      `]}render(){return n.c`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
        :host([slot='header']) {
          margin-top: calc(var(--spacing-l) * -1);
        }
        :host(:not([orientation='vertical'])) {
          border-bottom: 1px solid rgba(var(--neutral-1), 0.1);
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return n.c`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(l=>{l.orientation=this.orientation})}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[s.a,n.b`
        :host {
          padding: var(--spacing-xs);
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 var(--spacing-xs);
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n.c`
      <!-- icon -->
      ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?n.c` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?n.c`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var l,h;this.active=!0,(h=(l=this.shadowRoot)===null||l===void 0?void 0:l.querySelector("textarea"))===null||h===void 0||h.focus()})}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: var(--spacing-xs) var(--spacing-s)
            calc(var(--spacing-xs) - 1px) var(--spacing-s);
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        textarea {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        textarea {
          background: none;
          border: none;
          padding: 0px;
          outline: none;
          font: var(--body-1);
          color: var(--text-1);
          resize: none;
        }
        textarea::-webkit-scrollbar {
          display: none;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        textarea,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return n.c`
      <div class="center">
        ${this.label?n.c` <label class="label">${this.label}</label> `:""}
        <textarea
          .value="${this.value!==void 0?this.value:""}"
          .rows="${this.rows}"
          .columns="${this.rows}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          @focus="${()=>this.active=!0}"
          @blur="${()=>this.active=!1}"
          @input="${this.handleChange}"
        ></textarea>
      </div>
    `}handleChange(l){this.value=l.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"value",void 0),o([Object(i.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* toggle */
        .bg {
          width: 32px;
          height: 20px;
          margin: 2px;
          padding: 2px;
          border-radius: 12px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .bg {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        .dot {
          display: flex;
          transition: var(--transition-1);
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .dot {
          transform: translateX(12px);
          background: white;
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not(:active):not([active])) .bg {
            border-color: rgba(var(--neutral-1), 0.3);
          }
          :host(:hover:not(:active):not([active])) .dot {
            background: rgba(var(--neutral-1), 0.9);
          }
        }
      `]}render(){return n.c`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?n.c` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-radius: var(--border-radius);
        }
        .label {
          display: -webkit-box;
          width: 100%;
          line-height: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        /* size */
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n.c`
      ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&this.size=="s"?"":n.c` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="toggle"&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(48),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          position: fixed;
          z-index: 4;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        kor-popover {
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n.c`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${l=>this.emptyFunctions=l.target.assignedNodes().length===0}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l==="target"&&this.target&&this.targetObserver()}targetObserver(){let l;const h=typeof this.target=="string"?document.querySelector(this.target):this.target;h&&(h.addEventListener("mouseover",()=>{l=setTimeout(()=>this.visible=!0,500)}),h.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(l)}))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"target",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",a)},function(r,t,e){e.r(t);var n=e(11);e.d(t,"korPopover",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return l});var n=e(0),i=e(3);const s=h=>h??i.c;var o=e(1),a=e(2),c=(e(9),e(5),function(h,u,d,f){var p,m=arguments.length,v=m<3?u:f===null?f=Object.getOwnPropertyDescriptor(u,d):f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(h,u,d,f);else for(var g=h.length-1;g>=0;g--)(p=h[g])&&(v=(m<3?p(v):m>3?p(u,d,v):p(u,d))||v);return m>3&&v&&Object.defineProperty(u,d,v),v});class l extends n.a{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",u=>{var d,f;this.active&&this.type==="select"?this.closeSelectMenu(u):this.active||(this.active=!0,this.type==="select"||this.disabled||this.readonly||(f=(d=this.shadowRoot)===null||d===void 0?void 0:d.querySelector("input"))===null||f===void 0||f.focus())})}static get styles(){return[a.a,n.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px var(--spacing-l);
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 calc(var(--spacing-s) * -1);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* date */
        .date-icon {
          margin-left: -24px;
          pointer-events: none;
        }
        :host([type='date']) ::-webkit-calendar-picker-indicator {
          background: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return n.c`
      ${this.icon?n.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?n.c` <label class="label">${this.label}</label> `:""}
        <input
          .type="${this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step.toString()}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||this.type==="select"}"
          min="${s(this.min)}"
          max="${s(this.max)}"
          pattern="${s(this.pattern)}"
          name="${s(this.name)}"
          @input="${this.handleChange}"
          @focus="${()=>this.type==="select"||this.active?"":this.active=!0}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${this.type==="select"?n.c`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?n.c`
                  <kor-card
                    @click="${u=>{this.active=!1,u.stopPropagation()}}"
                    @wheel="${u=>u.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date -->
      ${this.type==="date"?n.c` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||this.type==="select"?"":n.c`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?n.c`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${this.type!=="number"||this.readonly?"":n.c`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${()=>this.handleIncrement("left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${()=>this.handleIncrement("right")}"
            ></kor-icon>
          `}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}handleChange(u){this.value=u.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleBlur(u){this.type==="number"&&this.validateMinMax(u.target.value),this.type!=="select"&&(this.active=!1)}handleIncrement(u){u==="left"?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):u==="right"&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(u){const d=u.target.assignedNodes();d.forEach(f=>{f.tagName==="KOR-MENU-ITEM"&&f.addEventListener("active-changed",p=>{p.target.active&&(d.forEach(m=>{m.active=!1}),p.target.active=!0,this.value=f.label,this.active=!1)})})}attributeChangedCallback(u,d,f){super.attributeChangedCallback(u,d,f),this.dispatchEvent(new Event(u+"-changed")),u==="active"&&this.active&&this.type==="select"&&this.handleMenu()}handleMenu(){const u=this.parentElement,d=()=>{this.active=!1,u==null||u.removeEventListener("wheel",d)};u==null||u.addEventListener("wheel",d)}closeSelectMenu(u){this.type==="select"&&this.active&&(u.stopImmediatePropagation(),this.active=!1)}validateMinMax(u){u&&(this.min&&u<parseInt(this.min)?this.value=this.min:this.max&&u>parseInt(this.max)?this.value=this.max:this.value=u.toString())}getStatusIcon(){let u;switch(this.status){case"error":u="cancel";break;case"warning":u="error";break;case"success":u="check_circle"}return u}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}c([Object(o.a)({type:String,reflect:!0})],l.prototype,"label",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"icon",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"value",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"name",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"type",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"status",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"condensed",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"active",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"readonly",void 0),c([Object(o.a)({type:Boolean,reflect:!0,attribute:"no-clear"})],l.prototype,"noClear",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"autofocus",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"pattern",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"min",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"max",void 0),c([Object(o.a)({type:Number,reflect:!0})],l.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",l)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{static get styles(){return[s.a,n.b`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `]}render(){return n.c` <slot></slot> `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){var l,h;let u,d;u=this.closest("kor-table"),!((l=u)===null||l===void 0)&&l.readonly||this.slot=="header"||(d=(h=this.parentElement)===null||h===void 0?void 0:h.childNodes,d==null||d.forEach(f=>{f.active=!1}),this.active=!0)}handleColumns(){const l=this.closest("kor-table");this.style.gridTemplateColumns=l.columns,l==null||l.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=l.columns})}}o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),e(7),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          align-items: center;
          padding: var(--spacing-m) var(--spacing-s);
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: var(--spacing-s);
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: var(--spacing-xs) 0px var(--spacing-xs) var(--spacing-xs);
          color: var(--text-2);
        }
      `]}render(){return n.c`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?n.c`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="grid-cols"&&(this.style.gridColumn="span "+this.gridCols),l=="sortable"&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){var l;if(this.sorted)this.sortDirection=this.sortDirection=="asc"?"desc":"asc";else{let h=(l=this.parentElement)===null||l===void 0?void 0:l.childNodes;h==null||h.forEach(u=>{u.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}o([Object(i.a)({type:Number,reflect:!0,attribute:"grid-cols"})],a.prototype,"gridCols",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"alignment",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"head",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sorted",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sortable",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"sort-direction"})],a.prototype,"sortDirection",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",a)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(r,t,e){e.r(t),e.d(t,"korAccordion",function(){return n.a}),e.d(t,"korAppBar",function(){return i.a}),e.d(t,"korAvatar",function(){return s.a}),e.d(t,"korBadge",function(){return o.a}),e.d(t,"korBreadcrumbs",function(){return a.a}),e.d(t,"korBreadcrumbItem",function(){return c.a}),e.d(t,"korButton",function(){return l.a}),e.d(t,"korCard",function(){return h.a}),e.d(t,"korCheckbox",function(){return u.a}),e.d(t,"korDivider",function(){return d.a}),e.d(t,"korDrawer",function(){return f.a}),e.d(t,"korEmptyState",function(){return p.a}),e.d(t,"korGrid",function(){return m.a}),e.d(t,"korImage",function(){return v.a}),e.d(t,"korIcon",function(){return g.a}),e.d(t,"korInput",function(){return _.a}),e.d(t,"korMenuItem",function(){return x.a}),e.d(t,"korModal",function(){return S.a}),e.d(t,"korNavbar",function(){return E.a}),e.d(t,"korNotifications",function(){return C.a}),e.d(t,"korNotificationItem",function(){return T.a}),e.d(t,"korPage",function(){return N.a}),e.d(t,"korPane",function(){return b.a}),e.d(t,"korPopover",function(){return y.a}),e.d(t,"korProgressBar",function(){return M.a}),e.d(t,"korRadioButton",function(){return I.a}),e.d(t,"korSlider",function(){return B.a}),e.d(t,"korSpinner",function(){return U.a}),e.d(t,"korStepper",function(){return G.a}),e.d(t,"korStepperItem",function(){return j.a}),e.d(t,"korSwipeActions",function(){return Q}),e.d(t,"korSwipeAction",function(){return et}),e.d(t,"korSwitch",function(){return St.a}),e.d(t,"korSwitchItem",function(){return wt.a}),e.d(t,"korTabItem",function(){return tt.a}),e.d(t,"korTable",function(){return A.a}),e.d(t,"korTableRow",function(){return F.a}),e.d(t,"korTableCell",function(){return H.a}),e.d(t,"korTabs",function(){return X.a}),e.d(t,"korTag",function(){return dt.a}),e.d(t,"korText",function(){return q.a}),e.d(t,"korTextarea",function(){return L.a}),e.d(t,"korToggle",function(){return $.a}),e.d(t,"korTool",function(){return z.a}),e.d(t,"korTooltip",function(){return at.a});var n=e(12),i=e(10),s=e(13),o=e(14),a=e(15),c=e(16),l=e(17),h=e(8),u=e(18),d=e(19),f=e(20),p=e(21),m=e(22),v=e(23),g=e(4),_=e(49),x=e(24),S=e(25),E=e(26),C=e(28),T=e(29),N=e(30),b=e(31),y=e(11),M=e(32),I=e(33),B=e(34),U=e(35),G=e(36),j=e(37),J=e(0),ht=e(2);class Q extends J.a{static get styles(){return[ht.a,J.b`
        :host {
          display: flex;
          overflow: auto;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
        }
        slot[name] {
          display: flex;
          transition: 0.1s opacity ease-out;
        }
        slot:not([name]) {
          min-width: 100%;
          display: block;
          scroll-snap-align: start;
        }
      `]}render(){return J.c`
      <slot
        name="left"
        @slotchange="${nt=>this.setSlotWidth(nt.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${nt=>this.setSlotWidth(nt.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(nt){nt.assignedNodes().length>0?nt.style.minWidth="100%":nt.style.minWidth="unset"}handleTouchEnd(){const nt=this.scrollLeft-this.clientWidth;nt<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):nt>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var nt,lt;const ft=(nt=this.shadowRoot)===null||nt===void 0?void 0:nt.querySelector('slot[name="left"]'),Tt=(lt=this.shadowRoot)===null||lt===void 0?void 0:lt.querySelector('slot[name="right"]'),zt=this.scrollLeft-this.clientWidth;ft&&(ft.style.opacity=-1*zt/this.clientWidth*3>1?1:.5),Tt&&(Tt.style.opacity=1*zt/this.clientWidth*3>1?1:.5)}getSlotOpacity(nt){const lt=nt==="left"?-1:1,ft=(this.scrollLeft-this.clientWidth)*lt/this.clientWidth*3;return ft>1?1:ft<0?0:ft}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",Q);var ot=e(1),V=function(W,nt,lt,ft){var Tt,zt=arguments.length,Jt=zt<3?nt:ft===null?ft=Object.getOwnPropertyDescriptor(nt,lt):ft;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Jt=Reflect.decorate(W,nt,lt,ft);else for(var O=W.length-1;O>=0;O--)(Tt=W[O])&&(Jt=(zt<3?Tt(Jt):zt>3?Tt(nt,lt,Jt):Tt(nt,lt))||Jt);return zt>3&&Jt&&Object.defineProperty(nt,lt,Jt),Jt};class et extends J.a{static get styles(){return[ht.a,J.b`
        :host {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([slot='left']) {
          justify-content: flex-start;
        }
        :host([slot='right']) {
          justify-content: flex-end;
        }
        kor-icon {
          position: sticky;
        }
        :host([slot='left']) kor-icon {
          left: var(--spacing-l);
        }
        :host([slot='right']) kor-icon {
          right: var(--spacing-l);
        }
      `]}render(){return J.c` <kor-icon .icon="${this.icon}"></kor-icon> `}attributeChangedCallback(nt,lt,ft){super.attributeChangedCallback(nt,lt,ft),this.dispatchEvent(new Event(nt+"-changed")),nt==="bg-color"&&ft!==lt&&(this.style.backgroundColor=ft)}connectedCallback(){super.connectedCallback()}}V([Object(ot.a)({reflect:!0})],et.prototype,"icon",void 0),V([Object(ot.a)({reflect:!0,attribute:"bg-color"})],et.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",et);var St=e(38),wt=e(39),tt=e(40),A=e(41),F=e(50),H=e(51),X=e(42),dt=e(43),q=e(6),L=e(44),$=e(45),z=e(46),at=e(47)}]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="157",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,rl=1,Gu=2,vf=3,yf=0,Zl=1,Wu=2,un=3,Un=0,Fe=1,dn=2,xf=2,Ln=0,Si=1,ol=2,al=3,ll=4,$u=5,mi=100,ju=101,Xu=102,cl=103,hl=104,qu=200,Yu=201,Zu=202,Ju=203,Jl=204,Kl=205,Ku=206,Qu=207,td=208,ed=209,nd=210,id=0,sd=1,rd=2,wo=3,od=4,ad=5,ld=6,cd=7,hr=0,hd=1,ud=2,In=0,dd=1,pd=2,fd=3,md=4,gd=5,Oo=300,Dn=301,Xn=302,zs=303,Hs=304,vs=306,Vs=1e3,Pe=1001,Gs=1002,ue=1003,Eo=1004,_f=1004,Ds=1005,bf=1005,de=1006,Ql=1007,Sf=1007,qn=1008,Mf=1008,On=1009,vd=1010,yd=1011,Uo=1012,tc=1013,Pn=1014,fn=1015,hs=1016,ec=1017,nc=1018,Wn=1020,xd=1021,Xe=1023,_d=1024,bd=1025,$n=1026,Ai=1027,Sd=1028,ic=1029,Md=1030,sc=1031,rc=1033,mo=33776,go=33777,vo=33778,yo=33779,ul=35840,dl=35841,pl=35842,fl=35843,wd=36196,ml=37492,gl=37496,vl=37808,yl=37809,xl=37810,_l=37811,bl=37812,Sl=37813,Ml=37814,wl=37815,El=37816,Al=37817,Tl=37818,Cl=37819,Rl=37820,Pl=37821,xo=36492,Ll=36494,Il=36495,Ed=36283,Ol=36284,Ul=36285,Dl=36286,Ad=2200,Td=2201,Cd=2202,Ws=2300,$s=2301,_o=2302,vi=2400,yi=2401,js=2402,Do=2500,oc=2501,wf=0,Ef=1,Af=2,ac=3e3,jn=3001,Rd=3200,Pd=3201,Zn=0,Ld=1,qe="",ye="srgb",vn="srgb-linear",No="display-p3",ur="display-p3-linear",Xs="linear",ie="srgb",qs="rec709",Ys="p3",Tf=0,bo=7680,Cf=7681,Rf=7682,Pf=7683,Lf=34055,If=34056,Of=5386,Uf=512,Df=513,Nf=514,kf=515,Ff=516,Bf=517,zf=518,Id=519,Od=512,Ud=513,Dd=514,Nd=515,kd=516,Fd=517,Bd=518,zd=519,Zs=35044,Hf=35048,Vf=35040,Gf=35045,Wf=35049,$f=35041,jf=35046,Xf=35050,qf=35042,Yf="100",Nl="300 es",Ao=1035,mn=2e3,Js=2001;class yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Mi=Math.PI/180,us=180/Math.PI;function Ze(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function lc(r,t){return(r%t+t)%t}function Zf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Jf(r,t,e){return r!==t?(e-r)/(t-r):0}function Ns(r,t,e){return(1-e)*r+e*t}function Kf(r,t,e,n){return Ns(r,t,1-Math.exp(-e*n))}function Qf(r,t=1){return t-Math.abs(lc(r,t*2)-t)}function tm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function em(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function nm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function im(r,t){return r+Math.random()*(t-r)}function sm(r){return r*(.5-Math.random())}function rm(r){r!==void 0&&(jc=r);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function om(r){return r*Mi}function am(r){return r*us}function kl(r){return(r&r-1)===0&&r!==0}function Hd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function To(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lm(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*p,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*p,a*l);break;case"ZYZ":r.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ve(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $t(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cc={DEG2RAD:Mi,RAD2DEG:us,generateUUID:Ze,clamp:le,euclideanModulo:lc,mapLinear:Zf,inverseLerp:Jf,lerp:Ns,damp:Kf,pingpong:Qf,smoothstep:tm,smootherstep:em,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:om,radToDeg:am,isPowerOfTwo:kl,ceilPowerOfTwo:Hd,floorPowerOfTwo:To,setQuaternionFromProperEuler:lm,normalize:$t,denormalize:Ve};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=i[0],v=i[3],g=i[6],_=i[1],x=i[4],S=i[7],E=i[2],C=i[5],T=i[8];return s[0]=o*m+a*_+c*E,s[3]=o*v+a*x+c*C,s[6]=o*g+a*S+c*T,s[1]=l*m+h*_+u*E,s[4]=l*v+h*x+u*C,s[7]=l*g+h*S+u*T,s[2]=d*m+f*_+p*E,s[5]=d*v+f*x+p*C,s[8]=d*g+f*S+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*c-l*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Xt;function Vd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}const cm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function is(r,t){return new cm[r](t)}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){const r=Ks("canvas");return r.style.display="block",r}const Xc={};function ks(r){r in Xc||(Xc[r]=!0,console.warn(r))}const qc=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[vn]:{transfer:Xs,primaries:qs,toReference:r=>r,fromReference:r=>r},[ye]:{transfer:ie,primaries:qs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ur]:{transfer:Xs,primaries:Ys,toReference:r=>r.applyMatrix3(Yc),fromReference:r=>r.applyMatrix3(qc)},[No]:{transfer:ie,primaries:Ys,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Yc),fromReference:r=>r.applyMatrix3(qc).convertLinearToSRGB()}},hm=new Set([vn,ur]),ee={enabled:!0,_workingColorSpace:vn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Sr[t].toReference,i=Sr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Sr[r].primaries},getTransfer:function(r){return r===qe?Xs:Sr[r].transfer}};function as(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function va(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class hc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Ks("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let um=0;class xi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ze(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ya(i[o].image)):s.push(ya(i[o]))}else s=ya(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ya(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class pe extends yn{constructor(t=pe.DEFAULT_IMAGE,e=pe.DEFAULT_MAPPING,n=Pe,i=Pe,s=de,o=qn,a=Xe,c=On,l=pe.DEFAULT_ANISOTROPY,h=qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ze(),this.name="",this.source=new xi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===jn?ye:qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case Pe:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case Pe:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?jn:ac}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===jn?ye:qe}}pe.DEFAULT_IMAGE=null;pe.DEFAULT_MAPPING=Oo;pe.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],m=c[2],v=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(p-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(p+v)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(f+1)/2,E=(g+1)/2,C=(h+d)/4,T=(u+m)/4,N=(p+v)/4;return x>S&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=T/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=C/i,s=N/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=N/s),this.set(n,i,s,e),this}let _=Math.sqrt((v-p)*(v-p)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(v-p)/_,this.y=(u-m)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends yn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?ye:qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:de,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ko extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends sn{constructor(t=1,e=1,n=1){super(t,e),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ko(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class uc extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fm extends sn{constructor(t=1,e=1,n=1){super(t,e),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new uc(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class mm extends sn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}class Le{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],m=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(u!==m||c!==d||l!==f||h!==p){let v=1-a;const g=c*d+l*f+h*p+u*m,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),C=Math.atan2(E,g*_);v=Math.sin(v*C)/E,a=Math.sin(a*C)/E}const S=a*_;if(c=c*v+d*S,l=l*v+f*S,h=h*v+p*S,u=u*v+m*S,v===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-a*f,t[e+2]=l*p+h*f+a*d-c*u,t[e+3]=h*p-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new R,Zc=new Le;class Je{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Di.copy(t.boundingBox),Di.applyMatrix4(t.matrixWorld),this.union(Di);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Sn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),Di.copy(i.boundingBox),Di.applyMatrix4(t.matrixWorld),this.union(Di)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Mr.subVectors(this.max,Ss),Ni.subVectors(t.a,Ss),ki.subVectors(t.b,Ss),Fi.subVectors(t.c,Ss),kn.subVectors(ki,Ni),Fn.subVectors(Fi,ki),ni.subVectors(Ni,Fi);let e=[0,-kn.z,kn.y,0,-Fn.z,Fn.y,0,-ni.z,ni.y,kn.z,0,-kn.x,Fn.z,0,-Fn.x,ni.z,0,-ni.x,-kn.y,kn.x,0,-Fn.y,Fn.x,0,-ni.y,ni.x,0];return!_a(e,Ni,ki,Fi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Ni,ki,Fi,Mr))?!1:(wr.crossVectors(kn,Fn),e=[wr.x,wr.y,wr.z],_a(e,Ni,ki,Fi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,Di=new Je,Ni=new R,ki=new R,Fi=new R,kn=new R,Fn=new R,ni=new R,Ss=new R,Mr=new R,wr=new R,ii=new R;function _a(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ii.fromArray(r,s);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gm=new Je,Ms=new R,ba=new R;class Ke{constructor(t=new R,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(ba)),this.expandByPoint(Ms.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new R,Sa=new R,Er=new R,Bn=new R,Ma=new R,Ar=new R,wa=new R;class Pi{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sa.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Sa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=Bn.dot(this.direction),c=-Bn.dot(Er),l=Bn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=s*h,u>=0)if(d>=-p)if(d<=p){const m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(Er,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,s){Ma.subVectors(e,t),Ar.subVectors(n,t),wa.crossVectors(Ma,Ar);let o=this.direction.dot(wa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const c=a*this.direction.dot(Ar.crossVectors(Bn,Ar));if(c<0)return null;const l=a*this.direction.dot(Ma.cross(Bn));if(l<0||c+l>o)return null;const h=-a*Bn.dot(wa);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,p,m,v){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,p,m,v)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,p,m,v){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),s=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-m*l,e[9]=-a*c,e[2]=m-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,p=l*h,m=l*u;e[0]=d+m*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=m+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,p=l*h,m=l*u;e[0]=d-m*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,m=a*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,p=a*c,m=a*l;e[0]=c*h,e[4]=m-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*c,f=o*l,p=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vm,t,ym)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),zn.crossVectors(n,$e),zn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),zn.crossVectors(n,$e)),zn.normalize(),Tr.crossVectors($e,zn),i[0]=zn.x,i[4]=Tr.x,i[8]=$e.x,i[1]=zn.y,i[5]=Tr.y,i[9]=$e.y,i[2]=zn.z,i[6]=Tr.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],v=n[10],g=n[14],_=n[3],x=n[7],S=n[11],E=n[15],C=i[0],T=i[4],N=i[8],b=i[12],y=i[1],M=i[5],I=i[9],B=i[13],U=i[2],G=i[6],j=i[10],J=i[14],ht=i[3],Q=i[7],ot=i[11],V=i[15];return s[0]=o*C+a*y+c*U+l*ht,s[4]=o*T+a*M+c*G+l*Q,s[8]=o*N+a*I+c*j+l*ot,s[12]=o*b+a*B+c*J+l*V,s[1]=h*C+u*y+d*U+f*ht,s[5]=h*T+u*M+d*G+f*Q,s[9]=h*N+u*I+d*j+f*ot,s[13]=h*b+u*B+d*J+f*V,s[2]=p*C+m*y+v*U+g*ht,s[6]=p*T+m*M+v*G+g*Q,s[10]=p*N+m*I+v*j+g*ot,s[14]=p*b+m*B+v*J+g*V,s[3]=_*C+x*y+S*U+E*ht,s[7]=_*T+x*M+S*G+E*Q,s[11]=_*N+x*I+S*j+E*ot,s[15]=_*b+x*B+S*J+E*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],m=t[7],v=t[11],g=t[15];return p*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+m*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+v*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+g*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13],v=t[14],g=t[15],_=u*v*l-m*d*l+m*c*f-a*v*f-u*c*g+a*d*g,x=p*d*l-h*v*l-p*c*f+o*v*f+h*c*g-o*d*g,S=h*m*l-p*u*l+p*a*f-o*m*f-h*a*g+o*u*g,E=p*u*c-h*m*c-p*a*d+o*m*d+h*a*v-o*u*v,C=e*_+n*x+i*S+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=_*T,t[1]=(m*d*s-u*v*s-m*i*f+n*v*f+u*i*g-n*d*g)*T,t[2]=(a*v*s-m*c*s+m*i*l-n*v*l-a*i*g+n*c*g)*T,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*T,t[4]=x*T,t[5]=(h*v*s-p*d*s+p*i*f-e*v*f-h*i*g+e*d*g)*T,t[6]=(p*c*s-o*v*s-p*i*l+e*v*l+o*i*g-e*c*g)*T,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*T,t[8]=S*T,t[9]=(p*u*s-h*m*s-p*n*f+e*m*f+h*n*g-e*u*g)*T,t[10]=(o*m*s-p*a*s+p*n*l-e*m*l-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=E*T,t[13]=(h*m*i-p*u*i+p*n*d-e*m*d-h*n*v+e*u*v)*T,t[14]=(p*a*i-o*m*i-p*n*c+e*m*c+o*n*v-e*a*v)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,p=s*u,m=o*h,v=o*u,g=a*u,_=c*l,x=c*h,S=c*u,E=n.x,C=n.y,T=n.z;return i[0]=(1-(m+g))*E,i[1]=(f+S)*E,i[2]=(p-x)*E,i[3]=0,i[4]=(f-S)*C,i[5]=(1-(d+g))*C,i[6]=(v+_)*C,i[7]=0,i[8]=(p+x)*T,i[9]=(v-_)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),a=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const l=1/s,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=mn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(a===mn)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Js)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=mn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h;let p,m;if(a===mn)p=(o+s)*u,m=-2*u;else if(a===Js)p=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=m,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new R,en=new Gt,vm=new R(0,0,0),ym=new R(1,1,1),zn=new R,Tr=new R,$e=new R,Jc=new Gt,Kc=new Le;class dr{constructor(t=0,e=0,n=0,i=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xm=0;const Qc=new R,zi=new Le,wn=new Gt,Cr=new R,ws=new R,_m=new R,bm=new Le,th=new R(1,0,0),eh=new R(0,1,0),nh=new R(0,0,1),Sm={type:"added"},Mm={type:"removed"};class te extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ze(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();const t=new R,e=new dr,n=new Le,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Xt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ws,Cr,this.up):wn.lookAt(Cr,ws,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,_m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}te.DEFAULT_UP=new R(0,1,0);te.DEFAULT_MATRIX_AUTO_UPDATE=!0;te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new R,En=new R,Ea=new R,An=new R,Hi=new R,Vi=new R,ih=new R,Aa=new R,Ta=new R,Ca=new R;let Rr=!1;class He{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){nn.subVectors(i,e),En.subVectors(n,e),Ea.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(En),c=nn.dot(Ea),l=En.dot(En),h=En.dot(Ea),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,i,s,o,a,c){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,An),c.setScalar(0),c.addScaledVector(s,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),He.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Hi.subVectors(i,n),Vi.subVectors(s,n),Aa.subVectors(t,n);const c=Hi.dot(Aa),l=Vi.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ta.subVectors(t,i);const h=Hi.dot(Ta),u=Vi.dot(Ta);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);Ca.subVectors(t,s);const f=Hi.dot(Ca),p=Vi.dot(Ca);if(p>=0&&f<=p)return e.copy(s);const m=f*l-c*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Vi,a);const v=h*p-f*u;if(v<=0&&u-h>=0&&f-p>=0)return ih.subVectors(s,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(ih,a);const g=1/(v+m+d);return o=m*g,a=d*g,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let wm=0;class Ie extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Ze(),this.name="",this.type="Material",this.blending=Si,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ra(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=lc(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ra(o,s,t+1/3),this.g=Ra(o,s,t),this.b=Ra(o,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ee.fromWorkingColorSpace(Re.copy(this),t),Math.round(le(Re.r*255,0,255))*65536+Math.round(le(Re.g*255,0,255))*256+Math.round(le(Re.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ye){ee.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Pr);const n=Ns(Hn.h,Pr.h,e),i=Ns(Hn.s,Pr.s,e),s=Ns(Hn.l,Pr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Ct;Ct.NAMES=$d;class Jn extends Ie{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rn=Em();function Em(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function ze(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=le(r,-65504,65504),Rn.floatView[0]=r;const t=Rn.uint32View[0],e=t>>23&511;return Rn.baseTable[e]+((t&8388607)>>Rn.shiftTable[e])}function Os(r){const t=r>>10;return Rn.uint32View[0]=Rn.mantissaTable[Rn.offsetTable[t]+(r&1023)]+Rn.exponentTable[t],Rn.floatView[0]}const Am={toHalfFloat:ze,fromHalfFloat:Os},ve=new R,Lr=new rt;class ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zs,this.updateRange={offset:0,count:-1},this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Tm extends ne{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Cm extends ne{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Rm extends ne{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Pm extends ne{constructor(t,e,n){super(new Int16Array(t),e,n)}}class dc extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lm extends ne{constructor(t,e,n){super(new Int32Array(t),e,n)}}class pc extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Im extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Os(this.array[t*this.itemSize]);return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=ze(e),this}getY(t){let e=Os(this.array[t*this.itemSize+1]);return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=ze(e),this}getZ(t){let e=Os(this.array[t*this.itemSize+2]);return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=ze(e),this}getW(t){let e=Os(this.array[t*this.itemSize+3]);return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=ze(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=ze(e),this.array[t+1]=ze(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=ze(e),this.array[t+1]=ze(n),this.array[t+2]=ze(i),this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[t+0]=ze(e),this.array[t+1]=ze(n),this.array[t+2]=ze(i),this.array[t+3]=ze(s),this}}class Pt extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}class Om extends ne{constructor(t,e,n){super(new Float64Array(t),e,n)}}let Um=0;const tn=new Gt,Pa=new te,Gi=new R,je=new Je,Es=new Je,be=new R;class qt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ze(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vd(t)?pc:dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(je.min,Es.min),je.expandByPoint(be),be.addVectors(je.max,Es.max),je.expandByPoint(be)):(je.expandByPoint(Es.min),je.expandByPoint(Es.max))}je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),be.add(Gi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<a;y++)l[y]=new R,h[y]=new R;const u=new R,d=new R,f=new R,p=new rt,m=new rt,v=new rt,g=new R,_=new R;function x(y,M,I){u.fromArray(i,y*3),d.fromArray(i,M*3),f.fromArray(i,I*3),p.fromArray(o,y*2),m.fromArray(o,M*2),v.fromArray(o,I*2),d.sub(u),f.sub(u),m.sub(p),v.sub(p);const B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(B),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(B),l[y].add(g),l[M].add(g),l[I].add(g),h[y].add(_),h[M].add(_),h[I].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,M=S.length;y<M;++y){const I=S[y],B=I.start,U=I.count;for(let G=B,j=B+U;G<j;G+=3)x(n[G+0],n[G+1],n[G+2])}const E=new R,C=new R,T=new R,N=new R;function b(y){T.fromArray(s,y*3),N.copy(T);const M=l[y];E.copy(M),E.sub(T.multiplyScalar(T.dot(M))).normalize(),C.crossVectors(N,M);const B=C.dot(h[y])<0?-1:1;c[y*4]=E.x,c[y*4+1]=E.y,c[y*4+2]=E.z,c[y*4+3]=B}for(let y=0,M=S.length;y<M;++y){const I=S[y],B=I.start,U=I.count;for(let G=B,j=B+U;G<j;G+=3)b(n[G+0]),b(n[G+1]),b(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),m=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let m=0,v=c.length;m<v;m++){a.isInterleavedBufferAttribute?f=c[m]*a.data.stride+a.offset:f=c[m]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new Gt,si=new Pi,Ir=new Ke,rh=new R,Wi=new R,$i=new R,ji=new R,La=new R,Or=new R,Ur=new rt,Dr=new rt,Nr=new rt,oh=new R,ah=new R,lh=new R,kr=new R,Fr=new R;class Me extends te{constructor(t=new qt,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Or.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(La.fromBufferAttribute(u,t),o?Or.addScaledVector(La,h):Or.addScaledVector(La.sub(e),h))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(Ir.containsPoint(si.origin)===!1&&(si.intersectSphere(Ir,rh)===null||si.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(s).invert(),si.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){const v=d[p],g=o[v.materialIndex],_=Math.max(v.start,f.start),x=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let S=_,E=x;S<E;S+=3){const C=a.getX(S),T=a.getX(S+1),N=a.getX(S+2);i=Br(this,g,t,n,l,h,u,C,T,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let v=p,g=m;v<g;v+=3){const _=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);i=Br(this,o,t,n,l,h,u,_,x,S),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){const v=d[p],g=o[v.materialIndex],_=Math.max(v.start,f.start),x=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let S=_,E=x;S<E;S+=3){const C=S,T=S+1,N=S+2;i=Br(this,g,t,n,l,h,u,C,T,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),m=Math.min(c.count,f.start+f.count);for(let v=p,g=m;v<g;v+=3){const _=v,x=v+1,S=v+2;i=Br(this,o,t,n,l,h,u,_,x,S),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}}function Dm(r,t,e,n,i,s,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Un,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:r}}function Br(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Wi),r.getVertexPosition(c,$i),r.getVertexPosition(l,ji);const h=Dm(r,t,e,n,Wi,$i,ji,kr);if(h){i&&(Ur.fromBufferAttribute(i,a),Dr.fromBufferAttribute(i,c),Nr.fromBufferAttribute(i,l),h.uv=He.getInterpolation(kr,Wi,$i,ji,Ur,Dr,Nr,new rt)),s&&(Ur.fromBufferAttribute(s,a),Dr.fromBufferAttribute(s,c),Nr.fromBufferAttribute(s,l),h.uv1=He.getInterpolation(kr,Wi,$i,ji,Ur,Dr,Nr,new rt),h.uv2=h.uv1),o&&(oh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,c),lh.fromBufferAttribute(o,l),h.normal=He.getInterpolation(kr,Wi,$i,ji,oh,ah,lh,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};He.getNormal(Wi,$i,ji,u.normal),h.face=u}return h}class Li extends qt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function p(m,v,g,_,x,S,E,C,T,N,b){const y=S/T,M=E/N,I=S/2,B=E/2,U=C/2,G=T+1,j=N+1;let J=0,ht=0;const Q=new R;for(let ot=0;ot<j;ot++){const V=ot*M-B;for(let et=0;et<G;et++){const St=et*y-I;Q[m]=St*_,Q[v]=V*x,Q[g]=U,l.push(Q.x,Q.y,Q.z),Q[m]=0,Q[v]=0,Q[g]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(et/T),u.push(1-ot/N),J+=1}}for(let ot=0;ot<N;ot++)for(let V=0;V<T;V++){const et=d+V+G*ot,St=d+V+G*(ot+1),wt=d+(V+1)+G*(ot+1),tt=d+(V+1)+G*ot;c.push(et,St,tt),c.push(St,wt,tt),ht+=6}a.addGroup(f,ht,b),f+=ht,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(r){const t={};for(let e=0;e<r.length;e++){const n=ds(r[e]);for(const i in n)t[i]=n[i]}return t}function Nm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function jd(r){return r.getRenderTarget()===null?r.outputColorSpace:ee.workingColorSpace}const Bo={clone:ds,merge:Ne};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Ie{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zo extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Te extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Xd extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Te(Xi,qi,t,e);i.layers=this.layers,this.add(i);const s=new Te(Xi,qi,t,e);s.layers=this.layers,this.add(s);const o=new Te(Xi,qi,t,e);o.layers=this.layers,this.add(o);const a=new Te(Xi,qi,t,e);a.layers=this.layers,this.add(a);const c=new Te(Xi,qi,t,e);c.layers=this.layers,this.add(c);const l=new Te(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class pr extends pe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Dn,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===jn?ye:qe),this.texture=new pr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:de}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Li(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Ln});s.uniforms.tEquirect.value=e;const o=new Me(i,s),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=de),new Xd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Ia=new R,Bm=new R,zm=new Xt;class Cn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ia.subVectors(n,e).cross(Bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zm.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ke,zr=new R;class Ho{constructor(t=new Cn,e=new Cn,n=new Cn,i=new Cn,s=new Cn,o=new Cn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],m=i[10],v=i[11],g=i[12],_=i[13],x=i[14],S=i[15];if(n[0].setComponents(c-s,d-l,v-f,S-g).normalize(),n[1].setComponents(c+s,d+l,v+f,S+g).normalize(),n[2].setComponents(c+o,d+h,v+p,S+_).normalize(),n[3].setComponents(c-o,d-h,v-p,S-_).normalize(),n[4].setComponents(c-a,d-u,v-m,S-x).normalize(),e===mn)n[5].setComponents(c+a,d+u,v+m,S+x).normalize();else if(e===Js)n[5].setComponents(a,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zr.x=i.normal.x>0?t.max.x:t.min.x,zr.y=i.normal.y>0?t.max.y:t.min.y,zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yd(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Hm(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),l.onUploadCallback();let p;if(u instanceof Float32Array)p=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)p=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=r.SHORT;else if(u instanceof Uint32Array)p=r.UNSIGNED_INT;else if(u instanceof Int32Array)p=r.INT;else if(u instanceof Int8Array)p=r.BYTE;else if(u instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,l),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class fr extends qt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],p=[],m=[],v=[];for(let g=0;g<h;g++){const _=g*d-o;for(let x=0;x<l;x++){const S=x*u-s;p.push(S,-_,0),m.push(0,0,1),v.push(x/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const x=_+l*g,S=_+l*(g+1),E=_+1+l*(g+1),C=_+1+l*g;f.push(x,S,C),f.push(S,E,C)}this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ev=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Av=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Vm,alphahash_pars_fragment:Gm,alphamap_fragment:Wm,alphamap_pars_fragment:$m,alphatest_fragment:jm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,begin_vertex:Zm,beginnormal_vertex:Jm,bsdfs:Km,iridescence_fragment:Qm,bumpmap_pars_fragment:tg,clipping_planes_fragment:eg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:lg,common:cg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:fg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:vg,envmap_fragment:yg,envmap_common_pars_fragment:xg,envmap_pars_fragment:_g,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Og,envmap_vertex:Sg,fog_vertex:Mg,fog_pars_vertex:wg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Tg,lightmap_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ig,lights_toon_fragment:Ug,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ng,lights_phong_pars_fragment:kg,lights_physical_fragment:Fg,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:Hg,lights_fragment_end:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:jg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Kg,morphcolor_vertex:Qg,morphnormal_vertex:tv,morphtarget_pars_vertex:ev,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:sv,normal_pars_fragment:rv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:uv,iridescence_pars_fragment:dv,opaque_fragment:pv,packing:fv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:vv,dithering_pars_fragment:yv,roughnessmap_fragment:xv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Sv,shadowmap_vertex:Mv,shadowmask_pars_fragment:wv,skinbase_vertex:Ev,skinning_pars_vertex:Av,skinning_vertex:Tv,skinnormal_vertex:Cv,specularmap_fragment:Rv,specularmap_pars_fragment:Pv,tonemapping_fragment:Lv,tonemapping_pars_fragment:Iv,transmission_fragment:Ov,transmission_pars_fragment:Uv,uv_pars_fragment:Dv,uv_pars_vertex:Nv,uv_vertex:kv,worldpos_vertex:Fv,background_vert:Bv,background_frag:zv,backgroundCube_vert:Hv,backgroundCube_frag:Vv,cube_vert:Gv,cube_frag:Wv,depth_vert:$v,depth_frag:jv,distanceRGBA_vert:Xv,distanceRGBA_frag:qv,equirect_vert:Yv,equirect_frag:Zv,linedashed_vert:Jv,linedashed_frag:Kv,meshbasic_vert:Qv,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:p0,points_frag:f0,shadow_vert:m0,shadow_frag:g0,sprite_vert:v0,sprite_frag:y0},bt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ke={basic:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ne([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ne([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ne([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ne([bt.points,bt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ne([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ne([bt.common,bt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ne([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ne([bt.sprite,bt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ne([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ne([bt.lights,bt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ke.physical={uniforms:Ne([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Hr={r:0,b:0,g:0};function x0(r,t,e,n,i,s,o){const a=new Ct(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function p(v,g){let _=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:t).get(x)),x===null?m(a,c):x&&x.isColor&&(m(x,1),_=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vs)?(h===void 0&&(h=new Me(new Li(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ds(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=ee.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new fr(2,2),new rn({name:"BackgroundMaterial",uniforms:ds(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,g){v.getRGB(Hr,jd(r)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),c=g,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:p}}function _0(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=v(null);let l=c,h=!1;function u(U,G,j,J,ht){let Q=!1;if(o){const ot=m(J,j,G);l!==ot&&(l=ot,f(l.object)),Q=g(U,J,j,ht),Q&&_(U,J,j,ht)}else{const ot=G.wireframe===!0;(l.geometry!==J.id||l.program!==j.id||l.wireframe!==ot)&&(l.geometry=J.id,l.program=j.id,l.wireframe=ot,Q=!0)}ht!==null&&e.update(ht,r.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,N(U,G,j,J),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function p(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function m(U,G,j){const J=j.wireframe===!0;let ht=a[U.id];ht===void 0&&(ht={},a[U.id]=ht);let Q=ht[G.id];Q===void 0&&(Q={},ht[G.id]=Q);let ot=Q[J];return ot===void 0&&(ot=v(d()),Q[J]=ot),ot}function v(U){const G=[],j=[],J=[];for(let ht=0;ht<i;ht++)G[ht]=0,j[ht]=0,J[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:J,object:U,attributes:{},index:null}}function g(U,G,j,J){const ht=l.attributes,Q=G.attributes;let ot=0;const V=j.getAttributes();for(const et in V)if(V[et].location>=0){const wt=ht[et];let tt=Q[et];if(tt===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),wt===void 0||wt.attribute!==tt||tt&&wt.data!==tt.data)return!0;ot++}return l.attributesNum!==ot||l.index!==J}function _(U,G,j,J){const ht={},Q=G.attributes;let ot=0;const V=j.getAttributes();for(const et in V)if(V[et].location>=0){let wt=Q[et];wt===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(wt=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(wt=U.instanceColor));const tt={};tt.attribute=wt,wt&&wt.data&&(tt.data=wt.data),ht[et]=tt,ot++}l.attributes=ht,l.attributesNum=ot,l.index=J}function x(){const U=l.newAttributes;for(let G=0,j=U.length;G<j;G++)U[G]=0}function S(U){E(U,0)}function E(U,G){const j=l.newAttributes,J=l.enabledAttributes,ht=l.attributeDivisors;j[U]=1,J[U]===0&&(r.enableVertexAttribArray(U),J[U]=1),ht[U]!==G&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),ht[U]=G)}function C(){const U=l.newAttributes,G=l.enabledAttributes;for(let j=0,J=G.length;j<J;j++)G[j]!==U[j]&&(r.disableVertexAttribArray(j),G[j]=0)}function T(U,G,j,J,ht,Q,ot){ot===!0?r.vertexAttribIPointer(U,G,j,ht,Q):r.vertexAttribPointer(U,G,j,J,ht,Q)}function N(U,G,j,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const ht=J.attributes,Q=j.getAttributes(),ot=G.defaultAttributeValues;for(const V in Q){const et=Q[V];if(et.location>=0){let St=ht[V];if(St===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(St=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(St=U.instanceColor)),St!==void 0){const wt=St.normalized,tt=St.itemSize,A=e.get(St);if(A===void 0)continue;const F=A.buffer,H=A.type,X=A.bytesPerElement,dt=n.isWebGL2===!0&&(H===r.INT||H===r.UNSIGNED_INT||St.gpuType===tc);if(St.isInterleavedBufferAttribute){const q=St.data,L=q.stride,$=St.offset;if(q.isInstancedInterleavedBuffer){for(let z=0;z<et.locationSize;z++)E(et.location+z,q.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let z=0;z<et.locationSize;z++)S(et.location+z);r.bindBuffer(r.ARRAY_BUFFER,F);for(let z=0;z<et.locationSize;z++)T(et.location+z,tt/et.locationSize,H,wt,L*X,($+tt/et.locationSize*z)*X,dt)}else{if(St.isInstancedBufferAttribute){for(let q=0;q<et.locationSize;q++)E(et.location+q,St.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let q=0;q<et.locationSize;q++)S(et.location+q);r.bindBuffer(r.ARRAY_BUFFER,F);for(let q=0;q<et.locationSize;q++)T(et.location+q,tt/et.locationSize,H,wt,tt*X,tt/et.locationSize*q*X,dt)}}else if(ot!==void 0){const wt=ot[V];if(wt!==void 0)switch(wt.length){case 2:r.vertexAttrib2fv(et.location,wt);break;case 3:r.vertexAttrib3fv(et.location,wt);break;case 4:r.vertexAttrib4fv(et.location,wt);break;default:r.vertexAttrib1fv(et.location,wt)}}}}C()}function b(){I();for(const U in a){const G=a[U];for(const j in G){const J=G[j];for(const ht in J)p(J[ht].object),delete J[ht];delete G[j]}delete a[U]}}function y(U){if(a[U.id]===void 0)return;const G=a[U.id];for(const j in G){const J=G[j];for(const ht in J)p(J[ht].object),delete J[ht];delete G[j]}delete a[U.id]}function M(U){for(const G in a){const j=a[G];if(j[U.id]===void 0)continue;const J=j[U.id];for(const ht in J)p(J[ht].object),delete J[ht];delete j[U.id]}}function I(){B(),h=!0,l!==c&&(l=c,f(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function b0(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function S0(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||t.has("OES_texture_float"),E=x&&S,C=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:C}}function M0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Cn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,m=u.clipIntersection,v=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!v)s?h(null):l();else{const _=s?0:n,x=_*4;let S=g.clippingState||null;c.value=S,S=h(p,d,x,f);for(let E=0;E!==x;++E)S[E]=e[E];g.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const m=u!==null?u.length:0;let v=null;if(m!==0){if(v=c.value,p!==!0||v===null){const g=f+m*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<g)&&(v=new Float32Array(g));for(let x=0,S=f;x!==m;++x,S+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(v,S),v[S+3]=o.constant}c.value=v,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,v}}function w0(r){let t=new WeakMap;function e(o,a){return a===zs?o.mapping=Dn:a===Hs&&(o.mapping=Xn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zs||a===Hs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qd(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Vo extends zo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,ch=[.125,.215,.35,.446,.526,.582],gi=20,Oa=new Vo,hh=new Ct;let Ua=null;const fi=(1+Math.sqrt(5))/2,Yi=1/fi,uh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,fi,Yi),new R(0,fi,-Yi),new R(Yi,0,fi),new R(-Yi,0,fi),new R(fi,Yi,0),new R(-fi,Yi,0)];class Fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua),t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===Xn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:de,minFilter:de,generateMipmaps:!1,type:hs,format:Xe,colorSpace:vn,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=A0(s,t,e)}return i}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,i){const a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hh),h.toneMapping=In,h.autoClear=!1;const f=new Jn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),p=new Me(new Li,f);let m=!1;const v=t.background;v?v.isColor&&(f.color.copy(v),t.background=null,m=!0):(f.color.copy(hh),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;Vr(i,_*x,g>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Dn||t.mapping===Xn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=uh[(i-1)%uh.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Me(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gi-1),m=s/p,v=isFinite(s)?1+Math.floor(h*m):gi;v>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gi}`);const g=[];let _=0;for(let T=0;T<gi;++T){const N=T/m,b=Math.exp(-N*N/2);g.push(b),T===0?_+=b:T<v&&(_+=2*b)}for(let T=0;T<g.length;T++)g[T]=g[T]/_;d.envMap.value=t.texture,d.samples.value=v,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const S=this._sizeLods[i],E=3*S*(i>x-ss?i-x+ss:0),C=4*(this._cubeSize-S);Vr(e,E,C,3*S,2*S),c.setRenderTarget(e),c.render(u,Oa)}}function E0(r){const t=[],e=[],n=[];let i=r;const s=r-ss+1+ch.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ss?c=ch[o-r+ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,m=3,v=2,g=1,_=new Float32Array(m*p*f),x=new Float32Array(v*p*f),S=new Float32Array(g*p*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,N=C>2?0:-1,b=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];_.set(b,m*p*C),x.set(d,v*p*C);const y=[C,C,C,C,C,C];S.set(y,g*p*C)}const E=new qt;E.setAttribute("position",new ne(_,m)),E.setAttribute("uv",new ne(x,v)),E.setAttribute("faceIndex",new ne(S,g)),t.push(E),i>ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(r,t,e){const n=new sn(r,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function A0(r,t,e){const n=new Float32Array(gi),i=new R(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ph(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function fh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===zs||c===Hs,h=c===Dn||c===Xn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Fl(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Fl(r));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function C0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function R0(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const m=d.morphAttributes[p];for(let v=0,g=m.length;v<g;v++)t.remove(m[v])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const m=f[p];for(let v=0,g=m.length;v<g;v++)t.update(m[v],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let m=0;if(f!==null){const _=f.array;m=f.version;for(let x=0,S=_.length;x<S;x+=3){const E=_[x+0],C=_[x+1],T=_[x+2];d.push(E,C,C,T,T,E)}}else if(p!==void 0){const _=p.array;m=p.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const E=x+0,C=x+1,T=x+2;d.push(E,C,C,T,T,E)}}else return;const v=new(Vd(d)?pc:dc)(d,1);v.version=m;const g=s.get(u);g&&t.remove(g),s.set(u,v)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function P0(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*c),e.update(f,s,1)}function u(d,f,p){if(p===0)return;let m,v;if(i)m=r,v="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,f,a,d*c,p),e.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function L0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function I0(r,t){return r[0]-t[0]}function O0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function U0(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let m=s.get(h);if(m===void 0||m.count!==p){let U=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let N=0;_===!0&&(N=1),x===!0&&(N=2),S===!0&&(N=3);let b=h.attributes.position.count*N,y=1;b>t.maxTextureSize&&(y=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const M=new Float32Array(b*y*4*p),I=new ko(M,b,y,p);I.type=fn,I.needsUpdate=!0;const B=N*4;for(let G=0;G<p;G++){const j=E[G],J=C[G],ht=T[G],Q=b*y*4*G;for(let ot=0;ot<j.count;ot++){const V=ot*B;_===!0&&(o.fromBufferAttribute(j,ot),M[Q+V+0]=o.x,M[Q+V+1]=o.y,M[Q+V+2]=o.z,M[Q+V+3]=0),x===!0&&(o.fromBufferAttribute(J,ot),M[Q+V+4]=o.x,M[Q+V+5]=o.y,M[Q+V+6]=o.z,M[Q+V+7]=0),S===!0&&(o.fromBufferAttribute(ht,ot),M[Q+V+8]=o.x,M[Q+V+9]=o.y,M[Q+V+10]=o.z,M[Q+V+11]=ht.itemSize===4?o.w:1)}}m={count:p,texture:I,size:new rt(b,y)},s.set(h,m),h.addEventListener("dispose",U)}let v=0;for(let _=0;_<d.length;_++)v+=d[_];const g=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",g),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const f=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<f;x++){const S=p[x];S[0]=x,S[1]=d[x]}p.sort(O0);for(let x=0;x<8;x++)x<f&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(I0);const m=h.morphAttributes.position,v=h.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const S=a[x],E=S[0],C=S[1];E!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+x)!==m[E]&&h.setAttribute("morphTarget"+x,m[E]),v&&h.getAttribute("morphNormal"+x)!==v[E]&&h.setAttribute("morphNormal"+x,v[E]),i[x]=C,g+=C):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function D0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Zd=new pe,Jd=new ko,Kd=new uc,Qd=new pr,mh=[],gh=[],vh=new Float32Array(16),yh=new Float32Array(9),xh=new Float32Array(4);function ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=mh[i];if(s===void 0&&(s=new Float32Array(i),mh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Go(r,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function N0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function F0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function B0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function z0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;xh.set(n),r.uniformMatrix2fv(this.addr,!1,xh),_e(e,n)}}function H0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;yh.set(n),r.uniformMatrix3fv(this.addr,!1,yh),_e(e,n)}}function V0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;vh.set(n),r.uniformMatrix4fv(this.addr,!1,vh),_e(e,n)}}function G0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),_e(e,t)}}function $0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),_e(e,t)}}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),_e(e,t)}}function X0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),_e(e,t)}}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),_e(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),_e(e,t)}}function J0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Zd,i)}function K0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kd,i)}function Q0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qd,i)}function ty(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jd,i)}function ey(r){switch(r){case 5126:return N0;case 35664:return k0;case 35665:return F0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return $0;case 35669:case 35673:return j0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return ty}}function ny(r,t){r.uniform1fv(this.addr,t)}function iy(r,t){const e=ys(t,this.size,2);r.uniform2fv(this.addr,e)}function sy(r,t){const e=ys(t,this.size,3);r.uniform3fv(this.addr,e)}function ry(r,t){const e=ys(t,this.size,4);r.uniform4fv(this.addr,e)}function oy(r,t){const e=ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ay(r,t){const e=ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ly(r,t){const e=ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cy(r,t){r.uniform1iv(this.addr,t)}function hy(r,t){r.uniform2iv(this.addr,t)}function uy(r,t){r.uniform3iv(this.addr,t)}function dy(r,t){r.uniform4iv(this.addr,t)}function py(r,t){r.uniform1uiv(this.addr,t)}function fy(r,t){r.uniform2uiv(this.addr,t)}function my(r,t){r.uniform3uiv(this.addr,t)}function gy(r,t){r.uniform4uiv(this.addr,t)}function vy(r,t,e){const n=this.cache,i=t.length,s=Go(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zd,s[o])}function yy(r,t,e){const n=this.cache,i=t.length,s=Go(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Kd,s[o])}function xy(r,t,e){const n=this.cache,i=t.length,s=Go(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qd,s[o])}function _y(r,t,e){const n=this.cache,i=t.length,s=Go(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jd,s[o])}function by(r){switch(r){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return fy;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}class Sy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ey(e.type)}}class My{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=by(e.type)}}class wy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function _h(r,t){r.seq.push(t),r.map[t.id]=t}function Ey(r,t,e){const n=r.name,i=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),o=Da.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){_h(e,l===void 0?new Sy(a,r,t):new My(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new wy(a),_h(e,u)),e=u}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ey(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function bh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Ay=0;function Ty(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Cy(r){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(r);let n;switch(t===e?n="":t===Ys&&e===qs?n="LinearDisplayP3ToLinearSRGB":t===qs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),r){case vn:case ur:return[n,"LinearTransferOETF"];case ye:case No:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Sh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ty(r.getShaderSource(t),o)}else return i}function Ry(r,t){const e=Cy(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Py(r,t){let e;switch(t){case dd:e="Linear";break;case pd:e="Reinhard";break;case fd:e="OptimizedCineon";break;case md:e="ACESFilmic";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ly(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function Iy(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Oy(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Us(r){return r!==""}function Mh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(r){return r.replace(Uy,Ny)}const Dy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ny(r,t){let e=Wt[t];if(e===void 0){const n=Dy.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bl(e)}const ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(r){return r.replace(ky,Fy)}function Fy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ah(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function By(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function zy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dn:case Xn:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xn:t="ENVMAP_MODE_REFRACTION";break}return t}function Vy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hr:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function Gy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wy(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=By(e),l=zy(e),h=Hy(e),u=Vy(e),d=Gy(e),f=e.isWebGL2?"":Ly(e),p=Iy(s),m=i.createProgram();let v,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Us).join(`
`),v.length>0&&(v+=`
`),g=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Us).join(`
`),g.length>0&&(g+=`
`)):(v=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),g=[f,Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Wt.tonemapping_pars_fragment:"",e.toneMapping!==In?Py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Ry("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=Bl(o),o=Mh(o,e),o=wh(o,e),a=Bl(a),a=Mh(a,e),a=wh(a,e),o=Eh(o),a=Eh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+v+o,S=_+g+a,E=bh(i,i.VERTEX_SHADER,x),C=bh(i,i.FRAGMENT_SHADER,S);if(i.attachShader(m,E),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const b=i.getProgramInfoLog(m).trim(),y=i.getShaderInfoLog(E).trim(),M=i.getShaderInfoLog(C).trim();let I=!0,B=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,E,C);else{const U=Sh(i,E,"vertex"),G=Sh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+U+`
`+G)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(y===""||M==="")&&(B=!1);B&&(this.diagnostics={runnable:I,programLog:b,vertexShader:{log:y,prefix:v},fragmentShader:{log:M,prefix:g}})}i.deleteShader(E),i.deleteShader(C);let T;this.getUniforms=function(){return T===void 0&&(T=new So(i,m)),T};let N;return this.getAttributes=function(){return N===void 0&&(N=Oy(i,m)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ay++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=C,this}let $y=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xy(t),e.set(t,n)),n}}class Xy{constructor(t){this.id=$y++,this.code=t,this.usedTimes=0}}function qy(r,t,e,n,i,s,o){const a=new Fo,c=new jy,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return b===0?"uv":`uv${b}`}function v(b,y,M,I,B){const U=I.fog,G=B.geometry,j=b.isMeshStandardMaterial?I.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),ht=J&&J.mapping===vs?J.image.height:null,Q=p[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,V=ot!==void 0?ot.length:0;let et=0;G.morphAttributes.position!==void 0&&(et=1),G.morphAttributes.normal!==void 0&&(et=2),G.morphAttributes.color!==void 0&&(et=3);let St,wt,tt,A;if(Q){const se=ke[Q];St=se.vertexShader,wt=se.fragmentShader}else St=b.vertexShader,wt=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),A=c.getFragmentShaderID(b);const F=r.getRenderTarget(),H=B.isInstancedMesh===!0,X=!!b.map,dt=!!b.matcap,q=!!J,L=!!b.aoMap,$=!!b.lightMap,z=!!b.bumpMap,at=!!b.normalMap,W=!!b.displacementMap,nt=!!b.emissiveMap,lt=!!b.metalnessMap,ft=!!b.roughnessMap,Tt=b.anisotropy>0,zt=b.clearcoat>0,Jt=b.iridescence>0,O=b.sheen>0,w=b.transmission>0,K=Tt&&!!b.anisotropyMap,mt=zt&&!!b.clearcoatMap,pt=zt&&!!b.clearcoatNormalMap,gt=zt&&!!b.clearcoatRoughnessMap,It=Jt&&!!b.iridescenceMap,vt=Jt&&!!b.iridescenceThicknessMap,At=O&&!!b.sheenColorMap,k=O&&!!b.sheenRoughnessMap,yt=!!b.specularMap,ct=!!b.specularColorMap,kt=!!b.specularIntensityMap,Ut=w&&!!b.transmissionMap,Dt=w&&!!b.thicknessMap,Ot=!!b.gradientMap,D=!!b.alphaMap,_t=b.alphaTest>0,xt=!!b.alphaHash,Et=!!b.extensions,Mt=!!G.attributes.uv1,ut=!!G.attributes.uv2,Lt=!!G.attributes.uv3;let Ft=In;return b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ft=r.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:St,fragmentShader:wt,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:A,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:H,instancingColor:H&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:F===null?r.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:vn,map:X,matcap:dt,envMap:q,envMapMode:q&&J.mapping,envMapCubeUVHeight:ht,aoMap:L,lightMap:$,bumpMap:z,normalMap:at,displacementMap:d&&W,emissiveMap:nt,normalMapObjectSpace:at&&b.normalMapType===Ld,normalMapTangentSpace:at&&b.normalMapType===Zn,metalnessMap:lt,roughnessMap:ft,anisotropy:Tt,anisotropyMap:K,clearcoat:zt,clearcoatMap:mt,clearcoatNormalMap:pt,clearcoatRoughnessMap:gt,iridescence:Jt,iridescenceMap:It,iridescenceThicknessMap:vt,sheen:O,sheenColorMap:At,sheenRoughnessMap:k,specularMap:yt,specularColorMap:ct,specularIntensityMap:kt,transmission:w,transmissionMap:Ut,thicknessMap:Dt,gradientMap:Ot,opaque:b.transparent===!1&&b.blending===Si,alphaMap:D,alphaTest:_t,alphaHash:xt,combine:b.combine,mapUv:X&&m(b.map.channel),aoMapUv:L&&m(b.aoMap.channel),lightMapUv:$&&m(b.lightMap.channel),bumpMapUv:z&&m(b.bumpMap.channel),normalMapUv:at&&m(b.normalMap.channel),displacementMapUv:W&&m(b.displacementMap.channel),emissiveMapUv:nt&&m(b.emissiveMap.channel),metalnessMapUv:lt&&m(b.metalnessMap.channel),roughnessMapUv:ft&&m(b.roughnessMap.channel),anisotropyMapUv:K&&m(b.anisotropyMap.channel),clearcoatMapUv:mt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:k&&m(b.sheenRoughnessMap.channel),specularMapUv:yt&&m(b.specularMap.channel),specularColorMapUv:ct&&m(b.specularColorMap.channel),specularIntensityMapUv:kt&&m(b.specularIntensityMap.channel),transmissionMapUv:Ut&&m(b.transmissionMap.channel),thicknessMapUv:Dt&&m(b.thicknessMap.channel),alphaMapUv:D&&m(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(at||Tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:ut,vertexUv3s:Lt,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(X||D),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&M.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,useLegacyLights:r._useLegacyLights,decodeVideoTexture:X&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Et&&b.extensions.derivatives===!0,extensionFragDepth:Et&&b.extensions.fragDepth===!0,extensionDrawBuffers:Et&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const M in b.defines)y.push(M),y.push(b.defines[M]);return b.isRawShaderMaterial===!1&&(_(y,b),x(y,b),y.push(r.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function _(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function S(b){const y=p[b.type];let M;if(y){const I=ke[y];M=Bo.clone(I.uniforms)}else M=b.uniforms;return M}function E(b,y){let M;for(let I=0,B=l.length;I<B;I++){const U=l[I];if(U.cacheKey===y){M=U,++M.usedTimes;break}}return M===void 0&&(M=new Wy(r,y,b,s),l.push(M)),M}function C(b){if(--b.usedTimes===0){const y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function N(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:S,acquireProgram:E,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:N}}function Yy(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Zy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Th(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ch(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,p,m,v){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:m,group:v},r[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=m,g.group=v),t++,g}function a(u,d,f,p,m,v){const g=o(u,d,f,p,m,v);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function c(u,d,f,p,m,v){const g=o(u,d,f,p,m,v);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||Zy),n.length>1&&n.sort(d||Th),i.length>1&&i.sort(d||Th)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ch,r.set(n,[o])):i>=s.length?(o=new Ch,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ky(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ct};break;case"SpotLight":e={position:new R,direction:new R,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function Qy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let tx=0;function ex(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nx(r,t){const e=new Ky,n=Qy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new Gt,a=new Gt;function c(h,u){let d=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,v=0,g=0,_=0,x=0,S=0,E=0,C=0,T=0,N=0,b=0;h.sort(ex);const y=u===!0?Math.PI:1;for(let I=0,B=h.length;I<B;I++){const U=h[I],G=U.color,j=U.intensity,J=U.distance,ht=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=G.r*j*y,f+=G.g*j*y,p+=G.b*j*y;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],j);b++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){const ot=U.shadow,V=n.get(U);V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=ht,i.directionalShadowMatrix[m]=U.shadow.matrix,S++}i.directional[m]=Q,m++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(G).multiplyScalar(j*y),Q.distance=J,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[g]=Q;const ot=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,ot.updateMatrices(U),U.castShadow&&N++),i.spotLightMatrix[g]=ot.matrix,U.castShadow){const V=n.get(U);V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=ht,C++}g++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(G).multiplyScalar(j),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=Q,_++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*y),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ot=U.shadow,V=n.get(U);V.shadowBias=ot.bias,V.shadowNormalBias=ot.normalBias,V.shadowRadius=ot.radius,V.shadowMapSize=ot.mapSize,V.shadowCameraNear=ot.camera.near,V.shadowCameraFar=ot.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=ht,i.pointShadowMatrix[v]=U.shadow.matrix,E++}i.point[v]=Q,v++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(j*y),Q.groundColor.copy(U.groundColor).multiplyScalar(j*y),i.hemi[x]=Q,x++}}_>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==m||M.pointLength!==v||M.spotLength!==g||M.rectAreaLength!==_||M.hemiLength!==x||M.numDirectionalShadows!==S||M.numPointShadows!==E||M.numSpotShadows!==C||M.numSpotMaps!==T||M.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=_,i.point.length=v,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=b,M.directionalLength=m,M.pointLength=v,M.spotLength=g,M.rectAreaLength=_,M.hemiLength=x,M.numDirectionalShadows=S,M.numPointShadows=E,M.numSpotShadows=C,M.numSpotMaps=T,M.numLightProbes=b,i.version=tx++)}function l(h,u){let d=0,f=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const S=h[_];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(S.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:c,setupView:l,state:i}}function Rh(r,t){const e=new nx(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ix(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Rh(r,t),e.set(s,[c])):o>=a.length?(c=new Rh(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class mc extends Ie{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gc extends Ie{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ox(r,t,e){let n=new Ho;const i=new rt,s=new rt,o=new Qt,a=new mc({depthPacking:Pd}),c=new gc,l={},h=e.maxTextureSize,u={[Un]:Fe,[Fe]:Un,[dn]:dn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new qt;p.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Me(p,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let g=this.type;this.render=function(E,C,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;const N=r.getRenderTarget(),b=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),M=r.state;M.setBlending(Ln),M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);const I=g!==un&&this.type===un,B=g===un&&this.type!==un;for(let U=0,G=E.length;U<G;U++){const j=E[U],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const ht=J.getFrameExtents();if(i.multiply(ht),s.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ht.x),i.x=s.x*ht.x,J.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ht.y),i.y=s.y*ht.y,J.mapSize.y=s.y)),J.map===null||I===!0||B===!0){const ot=this.type!==un?{minFilter:ue,magFilter:ue}:{};J.map!==null&&J.map.dispose(),J.map=new sn(i.x,i.y,ot),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const Q=J.getViewportCount();for(let ot=0;ot<Q;ot++){const V=J.getViewport(ot);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),M.viewport(o),J.updateMatrices(j,ot),n=J.getFrustum(),S(C,T,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===un&&_(J,T),J.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(N,b,y)};function _(E,C){const T=t.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new sn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,T,d,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,T,f,m,null)}function x(E,C,T,N){let b=null;const y=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(y!==void 0)b=y;else if(b=T.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const M=b.uuid,I=C.uuid;let B=l[M];B===void 0&&(B={},l[M]=B);let U=B[I];U===void 0&&(U=b.clone(),B[I]=U),b=U}if(b.visible=C.visible,b.wireframe=C.wireframe,N===un?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const M=r.properties.get(b);M.light=T}return b}function S(E,C,T,N,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const I=t.update(E),B=E.material;if(Array.isArray(B)){const U=I.groups;for(let G=0,j=U.length;G<j;G++){const J=U[G],ht=B[J.materialIndex];if(ht&&ht.visible){const Q=x(E,ht,N,b);r.renderBufferDirect(T,null,I,Q,E,J)}}}else if(B.visible){const U=x(E,B,N,b);r.renderBufferDirect(T,null,I,U,E,null)}}const M=E.children;for(let I=0,B=M.length;I<B;I++)S(M[I],C,T,N,b)}}function ax(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const _t=new Qt;let xt=null;const Et=new Qt(0,0,0,0);return{setMask:function(Mt){xt!==Mt&&!D&&(r.colorMask(Mt,Mt,Mt,Mt),xt=Mt)},setLocked:function(Mt){D=Mt},setClear:function(Mt,ut,Lt,Ft,fe){fe===!0&&(Mt*=Ft,ut*=Ft,Lt*=Ft),_t.set(Mt,ut,Lt,Ft),Et.equals(_t)===!1&&(r.clearColor(Mt,ut,Lt,Ft),Et.copy(_t))},reset:function(){D=!1,xt=null,Et.set(-1,0,0,0)}}}function s(){let D=!1,_t=null,xt=null,Et=null;return{setTest:function(Mt){Mt?F(r.DEPTH_TEST):H(r.DEPTH_TEST)},setMask:function(Mt){_t!==Mt&&!D&&(r.depthMask(Mt),_t=Mt)},setFunc:function(Mt){if(xt!==Mt){switch(Mt){case id:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case wo:r.depthFunc(r.LEQUAL);break;case od:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case ld:r.depthFunc(r.GREATER);break;case cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=Mt}},setLocked:function(Mt){D=Mt},setClear:function(Mt){Et!==Mt&&(r.clearDepth(Mt),Et=Mt)},reset:function(){D=!1,_t=null,xt=null,Et=null}}}function o(){let D=!1,_t=null,xt=null,Et=null,Mt=null,ut=null,Lt=null,Ft=null,fe=null;return{setTest:function(se){D||(se?F(r.STENCIL_TEST):H(r.STENCIL_TEST))},setMask:function(se){_t!==se&&!D&&(r.stencilMask(se),_t=se)},setFunc:function(se,ln,Oe){(xt!==se||Et!==ln||Mt!==Oe)&&(r.stencilFunc(se,ln,Oe),xt=se,Et=ln,Mt=Oe)},setOp:function(se,ln,Oe){(ut!==se||Lt!==ln||Ft!==Oe)&&(r.stencilOp(se,ln,Oe),ut=se,Lt=ln,Ft=Oe)},setLocked:function(se){D=se},setClear:function(se){fe!==se&&(r.clearStencil(se),fe=se)},reset:function(){D=!1,_t=null,xt=null,Et=null,Mt=null,ut=null,Lt=null,Ft=null,fe=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},p=new WeakMap,m=[],v=null,g=!1,_=null,x=null,S=null,E=null,C=null,T=null,N=null,b=!1,y=null,M=null,I=null,B=null,U=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const ht=r.getParameter(r.VERSION);ht.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ht)[1]),j=J>=1):ht.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),j=J>=2);let Q=null,ot={};const V=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),St=new Qt().fromArray(V),wt=new Qt().fromArray(et);function tt(D,_t,xt,Et){const Mt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(D,ut),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<xt;Lt++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(_t,0,r.RGBA,1,1,Et,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(_t+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ut}const A={};A[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),A[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(A[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),A[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),F(r.DEPTH_TEST),c.setFunc(wo),W(!1),nt(rl),F(r.CULL_FACE),z(Ln);function F(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function H(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function X(D,_t){return f[D]!==_t?(r.bindFramebuffer(D,_t),f[D]=_t,n&&(D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=_t),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=_t)),!0):!1}function dt(D,_t){let xt=m,Et=!1;if(D)if(xt=p.get(_t),xt===void 0&&(xt=[],p.set(_t,xt)),D.isWebGLMultipleRenderTargets){const Mt=D.texture;if(xt.length!==Mt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Lt=Mt.length;ut<Lt;ut++)xt[ut]=r.COLOR_ATTACHMENT0+ut;xt.length=Mt.length,Et=!0}}else xt[0]!==r.COLOR_ATTACHMENT0&&(xt[0]=r.COLOR_ATTACHMENT0,Et=!0);else xt[0]!==r.BACK&&(xt[0]=r.BACK,Et=!0);Et&&(e.isWebGL2?r.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function q(D){return v!==D?(r.useProgram(D),v=D,!0):!1}const L={[mi]:r.FUNC_ADD,[ju]:r.FUNC_SUBTRACT,[Xu]:r.FUNC_REVERSE_SUBTRACT};if(n)L[cl]=r.MIN,L[hl]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(L[cl]=D.MIN_EXT,L[hl]=D.MAX_EXT)}const $={[qu]:r.ZERO,[Yu]:r.ONE,[Zu]:r.SRC_COLOR,[Jl]:r.SRC_ALPHA,[nd]:r.SRC_ALPHA_SATURATE,[td]:r.DST_COLOR,[Ku]:r.DST_ALPHA,[Ju]:r.ONE_MINUS_SRC_COLOR,[Kl]:r.ONE_MINUS_SRC_ALPHA,[ed]:r.ONE_MINUS_DST_COLOR,[Qu]:r.ONE_MINUS_DST_ALPHA};function z(D,_t,xt,Et,Mt,ut,Lt,Ft){if(D===Ln){g===!0&&(H(r.BLEND),g=!1);return}if(g===!1&&(F(r.BLEND),g=!0),D!==$u){if(D!==_||Ft!==b){if((x!==mi||C!==mi)&&(r.blendEquation(r.FUNC_ADD),x=mi,C=mi),Ft)switch(D){case Si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.ONE,r.ONE);break;case al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ll:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ll:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,T=null,N=null,_=D,b=Ft}return}Mt=Mt||_t,ut=ut||xt,Lt=Lt||Et,(_t!==x||Mt!==C)&&(r.blendEquationSeparate(L[_t],L[Mt]),x=_t,C=Mt),(xt!==S||Et!==E||ut!==T||Lt!==N)&&(r.blendFuncSeparate($[xt],$[Et],$[ut],$[Lt]),S=xt,E=Et,T=ut,N=Lt),_=D,b=!1}function at(D,_t){D.side===dn?H(r.CULL_FACE):F(r.CULL_FACE);let xt=D.side===Fe;_t&&(xt=!xt),W(xt),D.blending===Si&&D.transparent===!1?z(Ln):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const Et=D.stencilWrite;l.setTest(Et),Et&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?F(r.SAMPLE_ALPHA_TO_COVERAGE):H(r.SAMPLE_ALPHA_TO_COVERAGE)}function W(D){y!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),y=D)}function nt(D){D!==Vu?(F(r.CULL_FACE),D!==M&&(D===rl?r.cullFace(r.BACK):D===Gu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):H(r.CULL_FACE),M=D}function lt(D){D!==I&&(j&&r.lineWidth(D),I=D)}function ft(D,_t,xt){D?(F(r.POLYGON_OFFSET_FILL),(B!==_t||U!==xt)&&(r.polygonOffset(_t,xt),B=_t,U=xt)):H(r.POLYGON_OFFSET_FILL)}function Tt(D){D?F(r.SCISSOR_TEST):H(r.SCISSOR_TEST)}function zt(D){D===void 0&&(D=r.TEXTURE0+G-1),Q!==D&&(r.activeTexture(D),Q=D)}function Jt(D,_t,xt){xt===void 0&&(Q===null?xt=r.TEXTURE0+G-1:xt=Q);let Et=ot[xt];Et===void 0&&(Et={type:void 0,texture:void 0},ot[xt]=Et),(Et.type!==D||Et.texture!==_t)&&(Q!==xt&&(r.activeTexture(xt),Q=xt),r.bindTexture(D,_t||A[D]),Et.type=D,Et.texture=_t)}function O(){const D=ot[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(D){St.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function kt(D){wt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),wt.copy(D))}function Ut(D,_t){let xt=u.get(_t);xt===void 0&&(xt=new WeakMap,u.set(_t,xt));let Et=xt.get(D);Et===void 0&&(Et=r.getUniformBlockIndex(_t,D.name),xt.set(D,Et))}function Dt(D,_t){const Et=u.get(_t).get(D);h.get(_t)!==Et&&(r.uniformBlockBinding(_t,Et,D.__bindingPointIndex),h.set(_t,Et))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Q=null,ot={},f={},p=new WeakMap,m=[],v=null,g=!1,_=null,x=null,S=null,E=null,C=null,T=null,N=null,b=!1,y=null,M=null,I=null,B=null,U=null,St.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:F,disable:H,bindFramebuffer:X,drawBuffers:dt,useProgram:q,setBlending:z,setMaterial:at,setFlipSided:W,setCullFace:nt,setLineWidth:lt,setPolygonOffset:ft,setScissorTest:Tt,activeTexture:zt,bindTexture:Jt,unbindTexture:O,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:k,texImage3D:yt,updateUBOMapping:Ut,uniformBlockBinding:Dt,texStorage2D:vt,texStorage3D:At,texSubImage2D:mt,texSubImage3D:pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:It,scissor:ct,viewport:kt,reset:Ot}}function lx(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const v=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,w){return g?new OffscreenCanvas(O,w):Ks("canvas")}function x(O,w,K,mt){let pt=1;if((O.width>mt||O.height>mt)&&(pt=mt/Math.max(O.width,O.height)),pt<1||w===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const gt=w?To:Math.floor,It=gt(pt*O.width),vt=gt(pt*O.height);m===void 0&&(m=_(It,vt));const At=K?_(It,vt):m;return At.width=It,At.height=vt,At.getContext("2d").drawImage(O,0,0,It,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+It+"x"+vt+")."),At}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function S(O){return kl(O.width)&&kl(O.height)}function E(O){return a?!1:O.wrapS!==Pe||O.wrapT!==Pe||O.minFilter!==ue&&O.minFilter!==de}function C(O,w){return O.generateMipmaps&&w&&O.minFilter!==ue&&O.minFilter!==de}function T(O){r.generateMipmap(O)}function N(O,w,K,mt,pt=!1){if(a===!1)return w;if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let gt=w;if(w===r.RED&&(K===r.FLOAT&&(gt=r.R32F),K===r.HALF_FLOAT&&(gt=r.R16F),K===r.UNSIGNED_BYTE&&(gt=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(gt=r.R8UI),K===r.UNSIGNED_SHORT&&(gt=r.R16UI),K===r.UNSIGNED_INT&&(gt=r.R32UI),K===r.BYTE&&(gt=r.R8I),K===r.SHORT&&(gt=r.R16I),K===r.INT&&(gt=r.R32I)),w===r.RG&&(K===r.FLOAT&&(gt=r.RG32F),K===r.HALF_FLOAT&&(gt=r.RG16F),K===r.UNSIGNED_BYTE&&(gt=r.RG8)),w===r.RGBA){const It=pt?Xs:ee.getTransfer(mt);K===r.FLOAT&&(gt=r.RGBA32F),K===r.HALF_FLOAT&&(gt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(gt=It===ie?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function b(O,w,K){return C(O,K)===!0||O.isFramebufferTexture&&O.minFilter!==ue&&O.minFilter!==de?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function y(O){return O===ue||O===Eo||O===Ds?r.NEAREST:r.LINEAR}function M(O){const w=O.target;w.removeEventListener("dispose",M),B(w),w.isVideoTexture&&p.delete(w)}function I(O){const w=O.target;w.removeEventListener("dispose",I),G(w)}function B(O){const w=n.get(O);if(w.__webglInit===void 0)return;const K=O.source,mt=v.get(K);if(mt){const pt=mt[w.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&U(O),Object.keys(mt).length===0&&v.delete(K)}n.remove(O)}function U(O){const w=n.get(O);r.deleteTexture(w.__webglTexture);const K=O.source,mt=v.get(K);delete mt[w.__cacheKey],o.memory.textures--}function G(O){const w=O.texture,K=n.get(O),mt=n.get(w);if(mt.__webglTexture!==void 0&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(K.__webglFramebuffer[pt]))for(let gt=0;gt<K.__webglFramebuffer[pt].length;gt++)r.deleteFramebuffer(K.__webglFramebuffer[pt][gt]);else r.deleteFramebuffer(K.__webglFramebuffer[pt]);K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[pt])}else{if(Array.isArray(K.__webglFramebuffer))for(let pt=0;pt<K.__webglFramebuffer.length;pt++)r.deleteFramebuffer(K.__webglFramebuffer[pt]);else r.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let pt=0;pt<K.__webglColorRenderbuffer.length;pt++)K.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[pt]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let pt=0,gt=w.length;pt<gt;pt++){const It=n.get(w[pt]);It.__webglTexture&&(r.deleteTexture(It.__webglTexture),o.memory.textures--),n.remove(w[pt])}n.remove(w),n.remove(O)}let j=0;function J(){j=0}function ht(){const O=j;return O>=c&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+c),j+=1,O}function Q(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function ot(O,w){const K=n.get(O);if(O.isVideoTexture&&zt(O),O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(K,O,w);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function V(O,w){const K=n.get(O);if(O.version>0&&K.__version!==O.version){X(K,O,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function et(O,w){const K=n.get(O);if(O.version>0&&K.__version!==O.version){X(K,O,w);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function St(O,w){const K=n.get(O);if(O.version>0&&K.__version!==O.version){dt(K,O,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const wt={[Vs]:r.REPEAT,[Pe]:r.CLAMP_TO_EDGE,[Gs]:r.MIRRORED_REPEAT},tt={[ue]:r.NEAREST,[Eo]:r.NEAREST_MIPMAP_NEAREST,[Ds]:r.NEAREST_MIPMAP_LINEAR,[de]:r.LINEAR,[Ql]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},A={[Od]:r.NEVER,[zd]:r.ALWAYS,[Ud]:r.LESS,[Nd]:r.LEQUAL,[Dd]:r.EQUAL,[Bd]:r.GEQUAL,[kd]:r.GREATER,[Fd]:r.NOTEQUAL};function F(O,w,K){if(K?(r.texParameteri(O,r.TEXTURE_WRAP_S,wt[w.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,wt[w.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,wt[w.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,tt[w.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,tt[w.minFilter])):(r.texParameteri(O,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(O,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Pe||w.wrapT!==Pe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(O,r.TEXTURE_MAG_FILTER,y(w.magFilter)),r.texParameteri(O,r.TEXTURE_MIN_FILTER,y(w.minFilter)),w.minFilter!==ue&&w.minFilter!==de&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,A[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===ue||w.minFilter!==Ds&&w.minFilter!==qn||w.type===fn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===hs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(O,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function H(O,w){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",M));const mt=w.source;let pt=v.get(mt);pt===void 0&&(pt={},v.set(mt,pt));const gt=Q(w);if(gt!==O.__cacheKey){pt[gt]===void 0&&(pt[gt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pt[gt].usedTimes++;const It=pt[O.__cacheKey];It!==void 0&&(pt[O.__cacheKey].usedTimes--,It.usedTimes===0&&U(w)),O.__cacheKey=gt,O.__webglTexture=pt[gt].texture}return K}function X(O,w,K){let mt=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(mt=r.TEXTURE_3D);const pt=H(O,w),gt=w.source;e.bindTexture(mt,O.__webglTexture,r.TEXTURE0+K);const It=n.get(gt);if(gt.version!==It.__version||pt===!0){e.activeTexture(r.TEXTURE0+K);const vt=ee.getPrimaries(ee.workingColorSpace),At=w.colorSpace===qe?null:ee.getPrimaries(w.colorSpace),k=w.colorSpace===qe||vt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const yt=E(w)&&S(w.image)===!1;let ct=x(w.image,yt,!1,h);ct=Jt(w,ct);const kt=S(ct)||a,Ut=s.convert(w.format,w.colorSpace);let Dt=s.convert(w.type),Ot=N(w.internalFormat,Ut,Dt,w.colorSpace,w.isVideoTexture);F(mt,w,kt);let D;const _t=w.mipmaps,xt=a&&w.isVideoTexture!==!0,Et=It.__version===void 0||pt===!0,Mt=b(w,ct,kt);if(w.isDepthTexture)Ot=r.DEPTH_COMPONENT,a?w.type===fn?Ot=r.DEPTH_COMPONENT32F:w.type===Pn?Ot=r.DEPTH_COMPONENT24:w.type===Wn?Ot=r.DEPTH24_STENCIL8:Ot=r.DEPTH_COMPONENT16:w.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===$n&&Ot===r.DEPTH_COMPONENT&&w.type!==Uo&&w.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Pn,Dt=s.convert(w.type)),w.format===Ai&&Ot===r.DEPTH_COMPONENT&&(Ot=r.DEPTH_STENCIL,w.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wn,Dt=s.convert(w.type))),Et&&(xt?e.texStorage2D(r.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Ot,ct.width,ct.height,0,Ut,Dt,null));else if(w.isDataTexture)if(_t.length>0&&kt){xt&&Et&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,_t[0].width,_t[0].height);for(let ut=0,Lt=_t.length;ut<Lt;ut++)D=_t[ut],xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,D.width,D.height,Ut,Dt,D.data):e.texImage2D(r.TEXTURE_2D,ut,Ot,D.width,D.height,0,Ut,Dt,D.data);w.generateMipmaps=!1}else xt?(Et&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,Ut,Dt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,ct.width,ct.height,0,Ut,Dt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xt&&Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,_t[0].width,_t[0].height,ct.depth);for(let ut=0,Lt=_t.length;ut<Lt;ut++)D=_t[ut],w.format!==Xe?Ut!==null?xt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,D.width,D.height,ct.depth,Ut,D.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Ot,D.width,D.height,ct.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,D.width,D.height,ct.depth,Ut,Dt,D.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,Ot,D.width,D.height,ct.depth,0,Ut,Dt,D.data)}else{xt&&Et&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,_t[0].width,_t[0].height);for(let ut=0,Lt=_t.length;ut<Lt;ut++)D=_t[ut],w.format!==Xe?Ut!==null?xt?e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,D.width,D.height,Ut,D.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,Ot,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,D.width,D.height,Ut,Dt,D.data):e.texImage2D(r.TEXTURE_2D,ut,Ot,D.width,D.height,0,Ut,Dt,D.data)}else if(w.isDataArrayTexture)xt?(Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ut,Dt,ct.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,Ut,Dt,ct.data);else if(w.isData3DTexture)xt?(Et&&e.texStorage3D(r.TEXTURE_3D,Mt,Ot,ct.width,ct.height,ct.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ut,Dt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,Ut,Dt,ct.data);else if(w.isFramebufferTexture){if(Et)if(xt)e.texStorage2D(r.TEXTURE_2D,Mt,Ot,ct.width,ct.height);else{let ut=ct.width,Lt=ct.height;for(let Ft=0;Ft<Mt;Ft++)e.texImage2D(r.TEXTURE_2D,Ft,Ot,ut,Lt,0,Ut,Dt,null),ut>>=1,Lt>>=1}}else if(_t.length>0&&kt){xt&&Et&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,_t[0].width,_t[0].height);for(let ut=0,Lt=_t.length;ut<Lt;ut++)D=_t[ut],xt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Ut,Dt,D):e.texImage2D(r.TEXTURE_2D,ut,Ot,Ut,Dt,D);w.generateMipmaps=!1}else xt?(Et&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,ct.width,ct.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Dt,ct)):e.texImage2D(r.TEXTURE_2D,0,Ot,Ut,Dt,ct);C(w,kt)&&T(mt),It.__version=gt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function dt(O,w,K){if(w.image.length!==6)return;const mt=H(O,w),pt=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+K);const gt=n.get(pt);if(pt.version!==gt.__version||mt===!0){e.activeTexture(r.TEXTURE0+K);const It=ee.getPrimaries(ee.workingColorSpace),vt=w.colorSpace===qe?null:ee.getPrimaries(w.colorSpace),At=w.colorSpace===qe||It===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const k=w.isCompressedTexture||w.image[0].isCompressedTexture,yt=w.image[0]&&w.image[0].isDataTexture,ct=[];for(let ut=0;ut<6;ut++)!k&&!yt?ct[ut]=x(w.image[ut],!1,!0,l):ct[ut]=yt?w.image[ut].image:w.image[ut],ct[ut]=Jt(w,ct[ut]);const kt=ct[0],Ut=S(kt)||a,Dt=s.convert(w.format,w.colorSpace),Ot=s.convert(w.type),D=N(w.internalFormat,Dt,Ot,w.colorSpace),_t=a&&w.isVideoTexture!==!0,xt=gt.__version===void 0||mt===!0;let Et=b(w,kt,Ut);F(r.TEXTURE_CUBE_MAP,w,Ut);let Mt;if(k){_t&&xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,D,kt.width,kt.height);for(let ut=0;ut<6;ut++){Mt=ct[ut].mipmaps;for(let Lt=0;Lt<Mt.length;Lt++){const Ft=Mt[Lt];w.format!==Xe?Dt!==null?_t?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Ft.width,Ft.height,Dt,Ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,D,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Ft.width,Ft.height,Dt,Ot,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,D,Ft.width,Ft.height,0,Dt,Ot,Ft.data)}}}else{Mt=w.mipmaps,_t&&xt&&(Mt.length>0&&Et++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,D,ct[0].width,ct[0].height));for(let ut=0;ut<6;ut++)if(yt){_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ct[ut].width,ct[ut].height,Dt,Ot,ct[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,D,ct[ut].width,ct[ut].height,0,Dt,Ot,ct[ut].data);for(let Lt=0;Lt<Mt.length;Lt++){const fe=Mt[Lt].image[ut].image;_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,fe.width,fe.height,Dt,Ot,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,D,fe.width,fe.height,0,Dt,Ot,fe.data)}}else{_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt,Ot,ct[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,D,Dt,Ot,ct[ut]);for(let Lt=0;Lt<Mt.length;Lt++){const Ft=Mt[Lt];_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,Dt,Ot,Ft.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,D,Dt,Ot,Ft.image[ut])}}}C(w,Ut)&&T(r.TEXTURE_CUBE_MAP),gt.__version=pt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function q(O,w,K,mt,pt,gt){const It=s.convert(K.format,K.colorSpace),vt=s.convert(K.type),At=N(K.internalFormat,It,vt,K.colorSpace);if(!n.get(w).__hasExternalTextures){const yt=Math.max(1,w.width>>gt),ct=Math.max(1,w.height>>gt);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?e.texImage3D(pt,gt,At,yt,ct,w.depth,0,It,vt,null):e.texImage2D(pt,gt,At,yt,ct,0,It,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,O),Tt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,pt,n.get(K).__webglTexture,0,ft(w)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,pt,n.get(K).__webglTexture,gt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function L(O,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,O),w.depthBuffer&&!w.stencilBuffer){let mt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||Tt(w)){const pt=w.depthTexture;pt&&pt.isDepthTexture&&(pt.type===fn?mt=r.DEPTH_COMPONENT32F:pt.type===Pn&&(mt=r.DEPTH_COMPONENT24));const gt=ft(w);Tt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,mt,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,mt,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,mt,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,O)}else if(w.depthBuffer&&w.stencilBuffer){const mt=ft(w);K&&Tt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,r.DEPTH24_STENCIL8,w.width,w.height):Tt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,O)}else{const mt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let pt=0;pt<mt.length;pt++){const gt=mt[pt],It=s.convert(gt.format,gt.colorSpace),vt=s.convert(gt.type),At=N(gt.internalFormat,It,vt,gt.colorSpace),k=ft(w);K&&Tt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,k,At,w.width,w.height):Tt(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k,At,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,At,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ot(w.depthTexture,0);const mt=n.get(w.depthTexture).__webglTexture,pt=ft(w);if(w.depthTexture.format===$n)Tt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(w.depthTexture.format===Ai)Tt(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function z(O){const w=n.get(O),K=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");$(w.__webglFramebuffer,O)}else if(K){w.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[mt]),w.__webglDepthbuffer[mt]=r.createRenderbuffer(),L(w.__webglDepthbuffer[mt],O,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),L(w.__webglDepthbuffer,O,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(O,w,K){const mt=n.get(O);w!==void 0&&q(mt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&z(O)}function W(O){const w=O.texture,K=n.get(O),mt=n.get(w);O.addEventListener("dispose",I),O.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=w.version,o.memory.textures++);const pt=O.isWebGLCubeRenderTarget===!0,gt=O.isWebGLMultipleRenderTargets===!0,It=S(O)||a;if(pt){K.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[vt]=[];for(let At=0;At<w.mipmaps.length;At++)K.__webglFramebuffer[vt][At]=r.createFramebuffer()}else K.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)K.__webglFramebuffer[vt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(gt)if(i.drawBuffers){const vt=O.texture;for(let At=0,k=vt.length;At<k;At++){const yt=n.get(vt[At]);yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&Tt(O)===!1){const vt=gt?w:[w];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const k=vt[At];K.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[At]);const yt=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),kt=N(k.internalFormat,yt,ct,k.colorSpace,O.isXRRenderTarget===!0),Ut=ft(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,kt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,K.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),L(K.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){e.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),F(r.TEXTURE_CUBE_MAP,w,It);for(let vt=0;vt<6;vt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)q(K.__webglFramebuffer[vt][At],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else q(K.__webglFramebuffer[vt],O,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);C(w,It)&&T(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const vt=O.texture;for(let At=0,k=vt.length;At<k;At++){const yt=vt[At],ct=n.get(yt);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),F(r.TEXTURE_2D,yt,It),q(K.__webglFramebuffer,O,yt,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,0),C(yt,It)&&T(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?vt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,mt.__webglTexture),F(vt,w,It),a&&w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)q(K.__webglFramebuffer[At],O,w,r.COLOR_ATTACHMENT0,vt,At);else q(K.__webglFramebuffer,O,w,r.COLOR_ATTACHMENT0,vt,0);C(w,It)&&T(vt),e.unbindTexture()}O.depthBuffer&&z(O)}function nt(O){const w=S(O)||a,K=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let mt=0,pt=K.length;mt<pt;mt++){const gt=K[mt];if(C(gt,w)){const It=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,vt=n.get(gt).__webglTexture;e.bindTexture(It,vt),T(It),e.unbindTexture()}}}function lt(O){if(a&&O.samples>0&&Tt(O)===!1){const w=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],K=O.width,mt=O.height;let pt=r.COLOR_BUFFER_BIT;const gt=[],It=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(O),At=O.isWebGLMultipleRenderTargets===!0;if(At)for(let k=0;k<w.length;k++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let k=0;k<w.length;k++){gt.push(r.COLOR_ATTACHMENT0+k),O.depthBuffer&&gt.push(It);const yt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(yt===!1&&(O.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),At&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[k]),yt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[It]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[It])),At){const ct=n.get(w[k]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,K,mt,0,0,K,mt,pt,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let k=0;k<w.length;k++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,vt.__webglColorRenderbuffer[k]);const yt=n.get(w[k]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function ft(O){return Math.min(u,O.samples)}function Tt(O){const w=n.get(O);return a&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function zt(O){const w=o.render.frame;p.get(O)!==w&&(p.set(O,w),O.update())}function Jt(O,w){const K=O.colorSpace,mt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Ao||K!==vn&&K!==qe&&(ee.getTransfer(K)===ie?a===!1?t.has("EXT_sRGB")===!0&&mt===Xe?(O.format=Ao,O.minFilter=de,O.generateMipmaps=!1):w=hc.sRGBToLinear(w):(mt!==Xe||pt!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}this.allocateTextureUnit=ht,this.resetTextureUnits=J,this.setTexture2D=ot,this.setTexture2DArray=V,this.setTexture3D=et,this.setTextureCube=St,this.rebindTextures=at,this.setupRenderTarget=W,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Tt}function tp(r,t,e){const n=e.isWebGL2;function i(s,o=qe){let a;const c=ee.getTransfer(o);if(s===On)return r.UNSIGNED_BYTE;if(s===ec)return r.UNSIGNED_SHORT_4_4_4_4;if(s===nc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vd)return r.BYTE;if(s===yd)return r.SHORT;if(s===Uo)return r.UNSIGNED_SHORT;if(s===tc)return r.INT;if(s===Pn)return r.UNSIGNED_INT;if(s===fn)return r.FLOAT;if(s===hs)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xd)return r.ALPHA;if(s===Xe)return r.RGBA;if(s===_d)return r.LUMINANCE;if(s===bd)return r.LUMINANCE_ALPHA;if(s===$n)return r.DEPTH_COMPONENT;if(s===Ai)return r.DEPTH_STENCIL;if(s===Ao)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sd)return r.RED;if(s===ic)return r.RED_INTEGER;if(s===Md)return r.RG;if(s===sc)return r.RG_INTEGER;if(s===rc)return r.RGBA_INTEGER;if(s===mo||s===go||s===vo||s===yo)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ul||s===dl||s===pl||s===fl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ml||s===gl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ml)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vl||s===yl||s===xl||s===_l||s===bl||s===Sl||s===Ml||s===wl||s===El||s===Al||s===Tl||s===Cl||s===Rl||s===Pl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_l)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ml)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===El)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Al)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xo||s===Ll||s===Il)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===xo)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ll)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===Ol||s===Ul||s===Dl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===xo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ep extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rs extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const v=e.getJointPose(m,n),g=this._getHandJoint(l,m);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class np extends pe{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$n&&(n=Pn),n===void 0&&h===Ai&&(n=Wn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ue,this.minFilter=c!==void 0?c:ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hx extends yn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const m=e.getContextAttributes();let v=null,g=null;const _=[],x=[],S=new Te;S.layers.enable(1),S.viewport=new Qt;const E=new Te;E.layers.enable(2),E.viewport=new Qt;const C=[S,E],T=new ep;T.layers.enable(1),T.layers.enable(2);let N=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let et=_[V];return et===void 0&&(et=new Na,_[V]=et),et.getTargetRaySpace()},this.getControllerGrip=function(V){let et=_[V];return et===void 0&&(et=new Na,_[V]=et),et.getGripSpace()},this.getHand=function(V){let et=_[V];return et===void 0&&(et=new Na,_[V]=et),et.getHandSpace()};function y(V){const et=x.indexOf(V.inputSource);if(et===-1)return;const St=_[et];St!==void 0&&(St.update(V.inputSource,V.frame,l||o),St.dispatchEvent({type:V.type,data:V.inputSource}))}function M(){i.removeEventListener("select",y),i.removeEventListener("selectstart",y),i.removeEventListener("selectend",y),i.removeEventListener("squeeze",y),i.removeEventListener("squeezestart",y),i.removeEventListener("squeezeend",y),i.removeEventListener("end",M),i.removeEventListener("inputsourceschange",I);for(let V=0;V<_.length;V++){const et=x[V];et!==null&&(x[V]=null,_[V].disconnect(et))}N=null,b=null,t.setRenderTarget(v),f=null,d=null,u=null,i=null,g=null,ot.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",M),i.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),g=new sn(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,St=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ai:$n,St=m.stencil?Wn:Pn);const tt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),g=new sn(d.textureWidth,d.textureHeight,{format:Xe,type:On,depthTexture:new np(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const A=t.properties.get(g);A.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(V){for(let et=0;et<V.removed.length;et++){const St=V.removed[et],wt=x.indexOf(St);wt>=0&&(x[wt]=null,_[wt].disconnect(St))}for(let et=0;et<V.added.length;et++){const St=V.added[et];let wt=x.indexOf(St);if(wt===-1){for(let A=0;A<_.length;A++)if(A>=x.length){x.push(St),wt=A;break}else if(x[A]===null){x[A]=St,wt=A;break}if(wt===-1)break}const tt=_[wt];tt&&tt.connect(St)}}const B=new R,U=new R;function G(V,et,St){B.setFromMatrixPosition(et.matrixWorld),U.setFromMatrixPosition(St.matrixWorld);const wt=B.distanceTo(U),tt=et.projectionMatrix.elements,A=St.projectionMatrix.elements,F=tt[14]/(tt[10]-1),H=tt[14]/(tt[10]+1),X=(tt[9]+1)/tt[5],dt=(tt[9]-1)/tt[5],q=(tt[8]-1)/tt[0],L=(A[8]+1)/A[0],$=F*q,z=F*L,at=wt/(-q+L),W=at*-q;et.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(W),V.translateZ(at),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const nt=F+at,lt=H+at,ft=$-W,Tt=z+(wt-W),zt=X*H/lt*nt,Jt=dt*H/lt*nt;V.projectionMatrix.makePerspective(ft,Tt,zt,Jt,nt,lt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,et){et===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(et.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;T.near=E.near=S.near=V.near,T.far=E.far=S.far=V.far,(N!==T.near||b!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,b=T.far);const et=V.parent,St=T.cameras;j(T,et);for(let wt=0;wt<St.length;wt++)j(St[wt],et);St.length===2?G(T,S,E):T.projectionMatrix.copy(S.projectionMatrix),J(V,T,et)};function J(V,et,St){St===null?V.matrix.copy(et.matrixWorld):(V.matrix.copy(St.matrixWorld),V.matrix.invert(),V.matrix.multiply(et.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(et.projectionMatrix),V.projectionMatrixInverse.copy(et.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=us*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let ht=null;function Q(V,et){if(h=et.getViewerPose(l||o),p=et,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let wt=!1;St.length!==T.cameras.length&&(T.cameras.length=0,wt=!0);for(let tt=0;tt<St.length;tt++){const A=St[tt];let F=null;if(f!==null)F=f.getViewport(A);else{const X=u.getViewSubImage(d,A);F=X.viewport,tt===0&&(t.setRenderTargetTextures(g,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(g))}let H=C[tt];H===void 0&&(H=new Te,H.layers.enable(tt),H.viewport=new Qt,C[tt]=H),H.matrix.fromArray(A.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(A.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(F.x,F.y,F.width,F.height),tt===0&&(T.matrix.copy(H.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),wt===!0&&T.cameras.push(H)}}for(let St=0;St<_.length;St++){const wt=x[St],tt=_[St];wt!==null&&tt!==void 0&&tt.update(wt,et,l||o)}ht&&ht(V,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const ot=new Yd;ot.setAnimationLoop(Q),this.setAnimationLoop=function(V){ht=V},this.dispose=function(){}}}function ux(r,t){function e(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,jd(r)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function i(v,g,_,x,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),u(v,g)):g.isMeshPhongMaterial?(s(v,g),h(v,g)):g.isMeshStandardMaterial?(s(v,g),d(v,g),g.isMeshPhysicalMaterial&&f(v,g,S)):g.isMeshMatcapMaterial?(s(v,g),p(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),m(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&a(v,g)):g.isPointsMaterial?c(v,g,_,x):g.isSpriteMaterial?l(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,e(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Fe&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,e(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Fe&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,e(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,e(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const _=t.get(g).envMap;if(_&&(v.envMap.value=_,v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*x,e(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,v.aoMapTransform))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform))}function a(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,_,x){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*_,v.scale.value=x*.5,g.map&&(v.map.value=g.map,e(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function l(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function h(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function u(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function d(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,v.roughnessMapTransform)),t.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function f(v,g,_){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fe&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,v.specularIntensityMapTransform))}function p(v,g){g.matcap&&(v.matcap.value=g.matcap)}function m(v,g){const _=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const S=x.program;n.uniformBlockBinding(_,S)}function l(_,x){let S=i[_.id];S===void 0&&(p(_),S=h(_),i[_.id]=S,_.addEventListener("dispose",v));const E=x.program;n.updateUBOMapping(_,E);const C=t.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function h(_){const x=u();_.__bindingPointIndex=x;const S=r.createBuffer(),E=_.__size,C=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,E,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],S=_.uniforms,E=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,T=S.length;C<T;C++){const N=S[C];if(f(N,C,E)===!0){const b=N.__offset,y=Array.isArray(N.value)?N.value:[N.value];let M=0;for(let I=0;I<y.length;I++){const B=y[I],U=m(B);typeof B=="number"?(N.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,b+M,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=B.elements[0],N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=B.elements[0],N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=B.elements[0]):(B.toArray(N.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,N.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,x,S){const E=_.value;if(S[x]===void 0){if(typeof E=="number")S[x]=E;else{const C=Array.isArray(E)?E:[E],T=[];for(let N=0;N<C.length;N++)T.push(C[N].clone());S[x]=T}return!0}else if(typeof E=="number"){if(S[x]!==E)return S[x]=E,!0}else{const C=Array.isArray(S[x])?S[x]:[S[x]],T=Array.isArray(E)?E:[E];for(let N=0;N<C.length;N++){const b=C[N];if(b.equals(T[N])===!1)return b.copy(T[N]),!0}}return!1}function p(_){const x=_.uniforms;let S=0;const E=16;let C=0;for(let T=0,N=x.length;T<N;T++){const b=x[T],y={boundary:0,storage:0},M=Array.isArray(b.value)?b.value:[b.value];for(let I=0,B=M.length;I<B;I++){const U=M[I],G=m(U);y.boundary+=G.boundary,y.storage+=G.storage}if(b.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,T>0){C=S%E;const I=E-C;C!==0&&I-y.boundary<0&&(S+=E-C,b.__offset=S)}S+=y.storage}return C=S%E,C>0&&(S+=E-C),_.__size=S,_.__cache={},this}function m(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function v(_){const x=_.target;x.removeEventListener("dispose",v);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class ip{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),p=new Int32Array(4);let m=null,v=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const x=this;let S=!1,E=0,C=0,T=null,N=-1,b=null;const y=new Qt,M=new Qt;let I=null;const B=new Ct(0);let U=0,G=e.width,j=e.height,J=1,ht=null,Q=null;const ot=new Qt(0,0,G,j),V=new Qt(0,0,G,j);let et=!1;const St=new Ho;let wt=!1,tt=!1,A=null;const F=new Gt,H=new rt,X=new R,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return T===null?J:1}let L=n;function $(P,Y){for(let it=0;it<P.length;it++){const Z=P[it],st=e.getContext(Z,Y);if(st!==null)return st}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),L=$(Y,P),L===null)throw $(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let z,at,W,nt,lt,ft,Tt,zt,Jt,O,w,K,mt,pt,gt,It,vt,At,k,yt,ct,kt,Ut,Dt;function Ot(){z=new C0(L),at=new S0(L,z,t),z.init(at),kt=new tp(L,z,at),W=new ax(L,z,at),nt=new L0(L),lt=new Yy,ft=new lx(L,z,W,lt,at,kt,nt),Tt=new w0(x),zt=new T0(x),Jt=new Hm(L,at),Ut=new _0(L,z,Jt,at),O=new R0(L,Jt,nt,Ut),w=new D0(L,O,Jt,nt),k=new U0(L,at,ft),It=new M0(lt),K=new qy(x,Tt,zt,z,at,Ut,It),mt=new ux(x,lt),pt=new Jy,gt=new ix(z,at),At=new x0(x,Tt,zt,W,w,d,c),vt=new ox(x,w,at),Dt=new dx(L,nt,at,W),yt=new b0(L,z,nt,at),ct=new P0(L,z,nt,at),nt.programs=K.programs,x.capabilities=at,x.extensions=z,x.properties=lt,x.renderLists=pt,x.shadowMap=vt,x.state=W,x.info=nt}Ot();const D=new hx(x,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(G,j,!1))},this.getSize=function(P){return P.set(G,j)},this.setSize=function(P,Y,it=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,j=Y,e.width=Math.floor(P*J),e.height=Math.floor(Y*J),it===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(G*J,j*J).floor()},this.setDrawingBufferSize=function(P,Y,it){G=P,j=Y,J=it,e.width=Math.floor(P*it),e.height=Math.floor(Y*it),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(ot)},this.setViewport=function(P,Y,it,Z){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,Y,it,Z),W.viewport(y.copy(ot).multiplyScalar(J).floor())},this.getScissor=function(P){return P.copy(V)},this.setScissor=function(P,Y,it,Z){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,Y,it,Z),W.scissor(M.copy(V).multiplyScalar(J).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(P){W.setScissorTest(et=P)},this.setOpaqueSort=function(P){ht=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(P=!0,Y=!0,it=!0){let Z=0;if(P){let st=!1;if(T!==null){const Rt=T.texture.format;st=Rt===rc||Rt===sc||Rt===ic}if(st){const Rt=T.texture.type,Nt=Rt===On||Rt===Pn||Rt===Uo||Rt===Wn||Rt===ec||Rt===nc,Ht=At.getClearColor(),Vt=At.getClearAlpha(),Yt=Ht.r,Bt=Ht.g,jt=Ht.b;Nt?(f[0]=Yt,f[1]=Bt,f[2]=jt,f[3]=Vt,L.clearBufferuiv(L.COLOR,0,f)):(p[0]=Yt,p[1]=Bt,p[2]=jt,p[3]=Vt,L.clearBufferiv(L.COLOR,0,p))}else Z|=L.COLOR_BUFFER_BIT}Y&&(Z|=L.DEPTH_BUFFER_BIT),it&&(Z|=L.STENCIL_BUFFER_BIT),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),pt.dispose(),gt.dispose(),lt.dispose(),Tt.dispose(),zt.dispose(),w.dispose(),Ut.dispose(),Dt.dispose(),K.dispose(),D.dispose(),D.removeEventListener("sessionstart",se),D.removeEventListener("sessionend",ln),A&&(A.dispose(),A=null),Oe.stop()};function _t(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=nt.autoReset,Y=vt.enabled,it=vt.autoUpdate,Z=vt.needsUpdate,st=vt.type;Ot(),nt.autoReset=P,vt.enabled=Y,vt.autoUpdate=it,vt.needsUpdate=Z,vt.type=st}function Et(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){const Y=P.target;Y.removeEventListener("dispose",Mt),ut(Y)}function ut(P){Lt(P),lt.remove(P)}function Lt(P){const Y=lt.get(P).programs;Y!==void 0&&(Y.forEach(function(it){K.releaseProgram(it)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,it,Z,st,Rt){Y===null&&(Y=dt);const Nt=st.isMesh&&st.matrixWorld.determinant()<0,Ht=uf(P,Y,it,Z,st);W.setMaterial(Z,Nt);let Vt=it.index,Yt=1;if(Z.wireframe===!0){if(Vt=O.getWireframeAttribute(it),Vt===void 0)return;Yt=2}const Bt=it.drawRange,jt=it.attributes.position;let oe=Bt.start*Yt,ce=(Bt.start+Bt.count)*Yt;Rt!==null&&(oe=Math.max(oe,Rt.start*Yt),ce=Math.min(ce,(Rt.start+Rt.count)*Yt)),Vt!==null?(oe=Math.max(oe,0),ce=Math.min(ce,Vt.count)):jt!=null&&(oe=Math.max(oe,0),ce=Math.min(ce,jt.count));const Qe=ce-oe;if(Qe<0||Qe===1/0)return;Ut.setup(st,Z,Ht,it,Vt);let _n,me=yt;if(Vt!==null&&(_n=Jt.get(Vt),me=ct,me.setIndex(_n)),st.isMesh)Z.wireframe===!0?(W.setLineWidth(Z.wireframeLinewidth*q()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(st.isLine){let Zt=Z.linewidth;Zt===void 0&&(Zt=1),W.setLineWidth(Zt*q()),st.isLineSegments?me.setMode(L.LINES):st.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else st.isPoints?me.setMode(L.POINTS):st.isSprite&&me.setMode(L.TRIANGLES);if(st.isInstancedMesh)me.renderInstances(oe,Qe,st.count);else if(it.isInstancedBufferGeometry){const Zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,ua=Math.min(it.instanceCount,Zt);me.renderInstances(oe,Qe,ua)}else me.render(oe,Qe)},this.compile=function(P,Y){function it(Z,st,Rt){Z.transparent===!0&&Z.side===dn&&Z.forceSinglePass===!1?(Z.side=Fe,Z.needsUpdate=!0,br(Z,st,Rt),Z.side=Un,Z.needsUpdate=!0,br(Z,st,Rt),Z.side=dn):br(Z,st,Rt)}v=gt.get(P),v.init(),_.push(v),P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights(x._useLegacyLights),P.traverse(function(Z){const st=Z.material;if(st)if(Array.isArray(st))for(let Rt=0;Rt<st.length;Rt++){const Nt=st[Rt];it(Nt,P,Z)}else it(st,P,Z)}),_.pop(),v=null};let Ft=null;function fe(P){Ft&&Ft(P)}function se(){Oe.stop()}function ln(){Oe.start()}const Oe=new Yd;Oe.setAnimationLoop(fe),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(P){Ft=P,D.setAnimationLoop(P),P===null?Oe.stop():Oe.start()},D.addEventListener("sessionstart",se),D.addEventListener("sessionend",ln),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(Y),Y=D.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Y,T),v=gt.get(P,_.length),v.init(),_.push(v),F.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),St.setFromProjectionMatrix(F),tt=this.localClippingEnabled,wt=It.init(this.clippingPlanes,tt),m=pt.get(P,g.length),m.init(),g.push(m),zc(P,Y,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,Q),this.info.render.frame++,wt===!0&&It.beginShadows();const it=v.state.shadowsArray;if(vt.render(it,P,Y),wt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),At.render(m,P),v.setupLights(x._useLegacyLights),Y.isArrayCamera){const Z=Y.cameras;for(let st=0,Rt=Z.length;st<Rt;st++){const Nt=Z[st];Hc(m,P,Nt,Nt.viewport)}}else Hc(m,P,Y);T!==null&&(ft.updateMultisampleRenderTarget(T),ft.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(x,P,Y),Ut.resetDefaultState(),N=-1,b=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function zc(P,Y,it,Z){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||St.intersectsSprite(P)){Z&&X.setFromMatrixPosition(P.matrixWorld).applyMatrix4(F);const Nt=w.update(P),Ht=P.material;Ht.visible&&m.push(P,Nt,Ht,it,X.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||St.intersectsObject(P))){const Nt=w.update(P),Ht=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),X.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),X.copy(Nt.boundingSphere.center)),X.applyMatrix4(P.matrixWorld).applyMatrix4(F)),Array.isArray(Ht)){const Vt=Nt.groups;for(let Yt=0,Bt=Vt.length;Yt<Bt;Yt++){const jt=Vt[Yt],oe=Ht[jt.materialIndex];oe&&oe.visible&&m.push(P,Nt,oe,it,X.z,jt)}}else Ht.visible&&m.push(P,Nt,Ht,it,X.z,null)}}const Rt=P.children;for(let Nt=0,Ht=Rt.length;Nt<Ht;Nt++)zc(Rt[Nt],Y,it,Z)}function Hc(P,Y,it,Z){const st=P.opaque,Rt=P.transmissive,Nt=P.transparent;v.setupLightsView(it),wt===!0&&It.setGlobalState(x.clippingPlanes,it),Rt.length>0&&hf(st,Rt,Y,it),Z&&W.viewport(y.copy(Z)),st.length>0&&_r(st,Y,it),Rt.length>0&&_r(Rt,Y,it),Nt.length>0&&_r(Nt,Y,it),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function hf(P,Y,it,Z){const st=at.isWebGL2;A===null&&(A=new sn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?hs:On,minFilter:qn,samples:st?4:0})),x.getDrawingBufferSize(H),st?A.setSize(H.x,H.y):A.setSize(To(H.x),To(H.y));const Rt=x.getRenderTarget();x.setRenderTarget(A),x.getClearColor(B),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const Nt=x.toneMapping;x.toneMapping=In,_r(P,it,Z),ft.updateMultisampleRenderTarget(A),ft.updateRenderTargetMipmap(A);let Ht=!1;for(let Vt=0,Yt=Y.length;Vt<Yt;Vt++){const Bt=Y[Vt],jt=Bt.object,oe=Bt.geometry,ce=Bt.material,Qe=Bt.group;if(ce.side===dn&&jt.layers.test(Z.layers)){const _n=ce.side;ce.side=Fe,ce.needsUpdate=!0,Vc(jt,it,Z,oe,ce,Qe),ce.side=_n,ce.needsUpdate=!0,Ht=!0}}Ht===!0&&(ft.updateMultisampleRenderTarget(A),ft.updateRenderTargetMipmap(A)),x.setRenderTarget(Rt),x.setClearColor(B,U),x.toneMapping=Nt}function _r(P,Y,it){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let st=0,Rt=P.length;st<Rt;st++){const Nt=P[st],Ht=Nt.object,Vt=Nt.geometry,Yt=Z===null?Nt.material:Z,Bt=Nt.group;Ht.layers.test(it.layers)&&Vc(Ht,Y,it,Vt,Yt,Bt)}}function Vc(P,Y,it,Z,st,Rt){P.onBeforeRender(x,Y,it,Z,st,Rt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),st.onBeforeRender(x,Y,it,Z,P,Rt),st.transparent===!0&&st.side===dn&&st.forceSinglePass===!1?(st.side=Fe,st.needsUpdate=!0,x.renderBufferDirect(it,Y,Z,st,P,Rt),st.side=Un,st.needsUpdate=!0,x.renderBufferDirect(it,Y,Z,st,P,Rt),st.side=dn):x.renderBufferDirect(it,Y,Z,st,P,Rt),P.onAfterRender(x,Y,it,Z,st,Rt)}function br(P,Y,it){Y.isScene!==!0&&(Y=dt);const Z=lt.get(P),st=v.state.lights,Rt=v.state.shadowsArray,Nt=st.state.version,Ht=K.getParameters(P,st.state,Rt,Y,it),Vt=K.getProgramCacheKey(Ht);let Yt=Z.programs;Z.environment=P.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(P.isMeshStandardMaterial?zt:Tt).get(P.envMap||Z.environment),Yt===void 0&&(P.addEventListener("dispose",Mt),Yt=new Map,Z.programs=Yt);let Bt=Yt.get(Vt);if(Bt!==void 0){if(Z.currentProgram===Bt&&Z.lightsStateVersion===Nt)return Gc(P,Ht),Bt}else Ht.uniforms=K.getUniforms(P),P.onBuild(it,Ht,x),P.onBeforeCompile(Ht,x),Bt=K.acquireProgram(Ht,Vt),Yt.set(Vt,Bt),Z.uniforms=Ht.uniforms;const jt=Z.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(jt.clippingPlanes=It.uniform),Gc(P,Ht),Z.needsLights=pf(P),Z.lightsStateVersion=Nt,Z.needsLights&&(jt.ambientLightColor.value=st.state.ambient,jt.lightProbe.value=st.state.probe,jt.directionalLights.value=st.state.directional,jt.directionalLightShadows.value=st.state.directionalShadow,jt.spotLights.value=st.state.spot,jt.spotLightShadows.value=st.state.spotShadow,jt.rectAreaLights.value=st.state.rectArea,jt.ltc_1.value=st.state.rectAreaLTC1,jt.ltc_2.value=st.state.rectAreaLTC2,jt.pointLights.value=st.state.point,jt.pointLightShadows.value=st.state.pointShadow,jt.hemisphereLights.value=st.state.hemi,jt.directionalShadowMap.value=st.state.directionalShadowMap,jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,jt.spotShadowMap.value=st.state.spotShadowMap,jt.spotLightMatrix.value=st.state.spotLightMatrix,jt.spotLightMap.value=st.state.spotLightMap,jt.pointShadowMap.value=st.state.pointShadowMap,jt.pointShadowMatrix.value=st.state.pointShadowMatrix);const oe=Bt.getUniforms(),ce=So.seqWithValue(oe.seq,jt);return Z.currentProgram=Bt,Z.uniformsList=ce,Bt}function Gc(P,Y){const it=lt.get(P);it.outputColorSpace=Y.outputColorSpace,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function uf(P,Y,it,Z,st){Y.isScene!==!0&&(Y=dt),ft.resetTextureUnits();const Rt=Y.fog,Nt=Z.isMeshStandardMaterial?Y.environment:null,Ht=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:vn,Vt=(Z.isMeshStandardMaterial?zt:Tt).get(Z.envMap||Nt),Yt=Z.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Bt=!!it.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),jt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,ce=!!it.morphAttributes.color;let Qe=In;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Qe=x.toneMapping);const _n=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,me=_n!==void 0?_n.length:0,Zt=lt.get(Z),ua=v.state.lights;if(wt===!0&&(tt===!0||P!==b)){const We=P===b&&Z.id===N;It.setState(Z,P,We)}let ge=!1;Z.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==ua.state.version||Zt.outputColorSpace!==Ht||st.isInstancedMesh&&Zt.instancing===!1||!st.isInstancedMesh&&Zt.instancing===!0||st.isSkinnedMesh&&Zt.skinning===!1||!st.isSkinnedMesh&&Zt.skinning===!0||st.isInstancedMesh&&Zt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Zt.instancingColor===!1&&st.instanceColor!==null||Zt.envMap!==Vt||Z.fog===!0&&Zt.fog!==Rt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==It.numPlanes||Zt.numIntersection!==It.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Bt||Zt.morphTargets!==jt||Zt.morphNormals!==oe||Zt.morphColors!==ce||Zt.toneMapping!==Qe||at.isWebGL2===!0&&Zt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Zt.__version=Z.version);let ti=Zt.currentProgram;ge===!0&&(ti=br(Z,Y,st));let Wc=!1,bs=!1,da=!1;const Ue=ti.getUniforms(),ei=Zt.uniforms;if(W.useProgram(ti.program)&&(Wc=!0,bs=!0,da=!0),Z.id!==N&&(N=Z.id,bs=!0),Wc||b!==P){Ue.setValue(L,"projectionMatrix",P.projectionMatrix),Ue.setValue(L,"viewMatrix",P.matrixWorldInverse);const We=Ue.map.cameraPosition;We!==void 0&&We.setValue(L,X.setFromMatrixPosition(P.matrixWorld)),at.logarithmicDepthBuffer&&Ue.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ue.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,bs=!0,da=!0)}if(st.isSkinnedMesh){Ue.setOptional(L,st,"bindMatrix"),Ue.setOptional(L,st,"bindMatrixInverse");const We=st.skeleton;We&&(at.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ue.setValue(L,"boneTexture",We.boneTexture,ft),Ue.setValue(L,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pa=it.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&at.isWebGL2===!0)&&k.update(st,it,ti),(bs||Zt.receiveShadow!==st.receiveShadow)&&(Zt.receiveShadow=st.receiveShadow,Ue.setValue(L,"receiveShadow",st.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ei.envMap.value=Vt,ei.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),bs&&(Ue.setValue(L,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&df(ei,da),Rt&&Z.fog===!0&&mt.refreshFogUniforms(ei,Rt),mt.refreshMaterialUniforms(ei,Z,J,j,A),So.upload(L,Zt.uniformsList,ei,ft)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(So.upload(L,Zt.uniformsList,ei,ft),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ue.setValue(L,"center",st.center),Ue.setValue(L,"modelViewMatrix",st.modelViewMatrix),Ue.setValue(L,"normalMatrix",st.normalMatrix),Ue.setValue(L,"modelMatrix",st.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const We=Z.uniformsGroups;for(let fa=0,ff=We.length;fa<ff;fa++)if(at.isWebGL2){const $c=We[fa];Dt.update($c,ti),Dt.bind($c,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function df(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function pf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,Y,it){lt.get(P.texture).__webglTexture=Y,lt.get(P.depthTexture).__webglTexture=it;const Z=lt.get(P);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=it===void 0,Z.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const it=lt.get(P);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,it=0){T=P,E=Y,C=it;let Z=!0,st=null,Rt=!1,Nt=!1;if(P){const Vt=lt.get(P);Vt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Vt.__webglFramebuffer===void 0?ft.setupRenderTarget(P):Vt.__hasExternalTextures&&ft.rebindTextures(P,lt.get(P.texture).__webglTexture,lt.get(P.depthTexture).__webglTexture);const Yt=P.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Bt=lt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Bt[Y])?st=Bt[Y][it]:st=Bt[Y],Rt=!0):at.isWebGL2&&P.samples>0&&ft.useMultisampledRTT(P)===!1?st=lt.get(P).__webglMultisampledFramebuffer:Array.isArray(Bt)?st=Bt[it]:st=Bt,y.copy(P.viewport),M.copy(P.scissor),I=P.scissorTest}else y.copy(ot).multiplyScalar(J).floor(),M.copy(V).multiplyScalar(J).floor(),I=et;if(W.bindFramebuffer(L.FRAMEBUFFER,st)&&at.drawBuffers&&Z&&W.drawBuffers(P,st),W.viewport(y),W.scissor(M),W.setScissorTest(I),Rt){const Vt=lt.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,it)}else if(Nt){const Vt=lt.get(P.texture),Yt=Y||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,it||0,Yt)}N=-1},this.readRenderTargetPixels=function(P,Y,it,Z,st,Rt,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){W.bindFramebuffer(L.FRAMEBUFFER,Ht);try{const Vt=P.texture,Yt=Vt.format,Bt=Vt.type;if(Yt!==Xe&&kt.convert(Yt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=Bt===hs&&(z.has("EXT_color_buffer_half_float")||at.isWebGL2&&z.has("EXT_color_buffer_float"));if(Bt!==On&&kt.convert(Bt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===fn&&(at.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-Z&&it>=0&&it<=P.height-st&&L.readPixels(Y,it,Z,st,kt.convert(Yt),kt.convert(Bt),Rt)}finally{const Vt=T!==null?lt.get(T).__webglFramebuffer:null;W.bindFramebuffer(L.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(P,Y,it=0){const Z=Math.pow(2,-it),st=Math.floor(Y.image.width*Z),Rt=Math.floor(Y.image.height*Z);ft.setTexture2D(Y,0),L.copyTexSubImage2D(L.TEXTURE_2D,it,0,0,P.x,P.y,st,Rt),W.unbindTexture()},this.copyTextureToTexture=function(P,Y,it,Z=0){const st=Y.image.width,Rt=Y.image.height,Nt=kt.convert(it.format),Ht=kt.convert(it.type);ft.setTexture2D(it,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,it.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,it.unpackAlignment),Y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,P.x,P.y,st,Rt,Nt,Ht,Y.image.data):Y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Nt,Y.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,P.x,P.y,Nt,Ht,Y.image),Z===0&&it.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,it,Z,st=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=P.max.x-P.min.x+1,Nt=P.max.y-P.min.y+1,Ht=P.max.z-P.min.z+1,Vt=kt.convert(Z.format),Yt=kt.convert(Z.type);let Bt;if(Z.isData3DTexture)ft.setTexture3D(Z,0),Bt=L.TEXTURE_3D;else if(Z.isDataArrayTexture)ft.setTexture2DArray(Z,0),Bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ce=L.getParameter(L.UNPACK_SKIP_PIXELS),Qe=L.getParameter(L.UNPACK_SKIP_ROWS),_n=L.getParameter(L.UNPACK_SKIP_IMAGES),me=it.isCompressedTexture?it.mipmaps[0]:it.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,P.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,P.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,P.min.z),it.isDataTexture||it.isData3DTexture?L.texSubImage3D(Bt,st,Y.x,Y.y,Y.z,Rt,Nt,Ht,Vt,Yt,me.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Bt,st,Y.x,Y.y,Y.z,Rt,Nt,Ht,Vt,me.data)):L.texSubImage3D(Bt,st,Y.x,Y.y,Y.z,Rt,Nt,Ht,Vt,Yt,me),L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),st===0&&Z.generateMipmaps&&L.generateMipmap(Bt),W.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?ft.setTextureCube(P,0):P.isData3DTexture?ft.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ft.setTexture2DArray(P,0):ft.setTexture2D(P,0),W.unbindTexture()},this.resetState=function(){E=0,C=0,T=null,W.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===No?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===ur?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?jn:ac}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===jn?ye:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sp extends ip{}sp.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new $o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class jo{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ze()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new R;class Ye{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ve(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ve(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ve(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ve(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ye(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vc extends Ie{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const As=new R,Ji=new R,Ki=new R,Qi=new rt,Ts=new rt,op=new Gt,Gr=new R,Cs=new R,Wr=new R,Ph=new rt,ka=new rt,Lh=new rt;class ap extends te{constructor(t=new vc){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new qt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jo(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Ye(n,3,0,!1)),Zi.setAttribute("uv",new Ye(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),op.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;$r(Gr.set(-.5,-.5,0),Ki,o,Ji,i,s),$r(Cs.set(.5,-.5,0),Ki,o,Ji,i,s),$r(Wr.set(.5,.5,0),Ki,o,Ji,i,s),Ph.set(0,0),ka.set(1,0),Lh.set(1,1);let a=t.ray.intersectTriangle(Gr,Cs,Wr,!1,As);if(a===null&&($r(Cs.set(-.5,.5,0),Ki,o,Ji,i,s),ka.set(0,1),a=t.ray.intersectTriangle(Gr,Wr,Cs,!1,As),a===null))return;const c=t.ray.origin.distanceTo(As);c<t.near||c>t.far||e.push({distance:c,point:As.clone(),uv:He.getInterpolation(As,Gr,Cs,Wr,Ph,ka,Lh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(r,t,e,n,i,s){Qi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ts.x=s*Qi.x-i*Qi.y,Ts.y=i*Qi.x+s*Qi.y):Ts.copy(Qi),r.copy(t),r.x+=Ts.x,r.y+=Ts.y,r.applyMatrix4(op)}const jr=new R,Ih=new R;class lp extends te{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible&&(s-=s*e[n].hysteresis),t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){jr.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(jr);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){jr.setFromMatrixPosition(t.matrixWorld),Ih.setFromMatrixPosition(this.matrixWorld);const n=jr.distanceTo(Ih)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const Oh=new R,Uh=new Qt,Dh=new Qt,px=new R,Nh=new Gt,ts=new R,Fa=new Ke,kh=new Gt,Ba=new Pi;class cp extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Je),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)ts.fromBufferAttribute(e,n),this.applyBoneTransform(n,ts),this.boundingBox.expandByPoint(ts)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ke),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)ts.fromBufferAttribute(e,n),this.applyBoneTransform(n,ts),this.boundingSphere.expandByPoint(ts)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(i),t.ray.intersectsSphere(Fa)!==!1&&(kh.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ba)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Uh.fromBufferAttribute(i.attributes.skinIndex,t),Dh.fromBufferAttribute(i.attributes.skinWeight,t),Oh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Dh.getComponent(s);if(o!==0){const a=Uh.getComponent(s);Nh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(px.copy(Oh).applyMatrix4(Nh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class yc extends te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ls extends pe{constructor(t=null,e=1,n=1,i,s,o,a,c,l=ue,h=ue,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new Gt,fx=new Gt;class Xo{constructor(t=[],e=[]){this.uuid=Ze(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:fx;Fh.multiplyMatrices(a,e[s]),Fh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xo(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Hd(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ls(e,t,t,Xe,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new yc),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ps extends ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new Gt,Bh=new Gt,Xr=[],zh=new Je,mx=new Gt,Rs=new Me,Ps=new Ke;class hp extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),zh.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(zh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ke),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Ps.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,es),Bh.multiplyMatrices(n,es),Rs.matrixWorld=Bh,Rs.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=s,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Be extends Ie{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hh=new R,Vh=new R,Gh=new Gt,za=new Pi,qr=new Ke;class Yn extends te{constructor(t=new qt,e=new Be){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Hh.fromBufferAttribute(e,i-1),Vh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Hh.distanceTo(Vh);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=s,t.ray.intersectsSphere(qr)===!1)return;Gh.copy(i).invert(),za.copy(t.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,p=n.index,v=n.attributes.position;if(p!==null){const g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let x=g,S=_-1;x<S;x+=f){const E=p.getX(x),C=p.getX(x+1);if(l.fromBufferAttribute(v,E),h.fromBufferAttribute(v,C),za.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let x=g,S=_-1;x<S;x+=f){if(l.fromBufferAttribute(v,x),h.fromBufferAttribute(v,x+1),za.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Wh=new R,$h=new R;class xn extends Yn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Wh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wh.distanceTo($h);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class up extends Yn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class xc extends Ie{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jh=new Gt,zl=new Pi,Yr=new Ke,Zr=new R;class dp extends te{constructor(t=new qt,e=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;jh.copy(i).invert(),zl.copy(t.ray).applyMatrix4(jh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,m=f;p<m;p++){const v=l.getX(p);Zr.fromBufferAttribute(u,v),Xh(Zr,v,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,m=f;p<m;p++)Zr.fromBufferAttribute(u,p),Xh(Zr,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xh(r,t,e,n,i,s,o){const a=zl.distanceSqToPoint(r);if(a<e){const c=new R;zl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class gx extends pe{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:de,this.magFilter=s!==void 0?s:de,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class vx extends pe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ue,this.minFilter=ue,this.generateMipmaps=!1,this.needsUpdate=!0}}class qo extends pe{constructor(t,e,n,i,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class yx extends qo{constructor(t,e,n,i,s,o){super(t,e,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Pe}}class xx extends qo{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Dn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class _x extends pe{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new rt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],s=[],o=[],a=new R,c=new Gt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(le(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(le(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yo extends on{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pp extends Yo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _c(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Jr=new R,Ha=new _c,Va=new _c,Ga=new _c;class fp extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Jr.subVectors(i[0],i[1]).add(i[0]),l=Jr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Jr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),p<1e-4&&(p=m),v<1e-4&&(v=m),Ha.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,m,v),Va.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,m,v),Ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,m,v)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Va.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ha.calc(c),Va.calc(c),Ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function bx(r,t){const e=1-r;return e*e*t}function Sx(r,t){return 2*(1-r)*r*t}function Mx(r,t){return r*r*t}function Fs(r,t,e,n){return bx(r,t)+Sx(r,e)+Mx(r,n)}function wx(r,t){const e=1-r;return e*e*e*t}function Ex(r,t){const e=1-r;return 3*e*e*r*t}function Ax(r,t){return 3*(1-r)*r*r*t}function Tx(r,t){return r*r*r*t}function Bs(r,t,e,n,i){return wx(r,t)+Ex(r,e)+Ax(r,n)+Tx(r,i)}class bc extends on{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,i.x,s.x,o.x,a.x),Bs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mp extends on{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,i.x,s.x,o.x,a.x),Bs(t,i.y,s.y,o.y,a.y),Bs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sc extends on{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends on{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fs(t,i.x,s.x,o.x),Fs(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wc extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fs(t,i.x,s.x,o.x),Fs(t,i.y,s.y,o.y),Fs(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ec extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qh(a,c.x,l.x,h.x,u.x),qh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:pp,CatmullRomCurve3:fp,CubicBezierCurve:bc,CubicBezierCurve3:mp,EllipseCurve:Yo,LineCurve:Sc,LineCurve3:gp,QuadraticBezierCurve:Mc,QuadraticBezierCurve3:wc,SplineCurve:Ec});class vp extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Co[i.type]().fromJSON(i))}return this}}class Qs extends vp{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Mc(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new bc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ec(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Yo(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mr extends qt{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=le(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new rt,f=new R,p=new R,m=new R;let v=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:v=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-v,f.z=g*0,m.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(m.x,m.y,m.z);break;default:v=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-v,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),c.push(f.x,f.y,f.z),m.copy(p)}for(let _=0;_<=e;_++){const x=n+_*h*i,S=Math.sin(x),E=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*S,u.y=t[C].y,u.z=t[C].x*E,o.push(u.x,u.y,u.z),d.x=_/e,d.y=C/(t.length-1),a.push(d.x,d.y);const T=c[3*C+0]*S,N=c[3*C+1],b=c[3*C+0]*E;l.push(T,N,b)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const S=x+_*t.length,E=S,C=S+t.length,T=S+t.length+1,N=S+1;s.push(E,C,N),s.push(T,N,C)}this.setIndex(s),this.setAttribute("position",new Pt(o,3)),this.setAttribute("uv",new Pt(a,2)),this.setAttribute("normal",new Pt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.points,t.segments,t.phiStart,t.phiLength)}}class Zo extends mr{constructor(t=1,e=1,n=4,i=8){const s=new Qs;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Zo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Jo extends qt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new R,h=new rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xs extends qt{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const m=[],v=n/2;let g=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function _(){const S=new R,E=new R;let C=0;const T=(e-t)/n;for(let N=0;N<=s;N++){const b=[],y=N/s,M=y*(e-t)+t;for(let I=0;I<=i;I++){const B=I/i,U=B*c+a,G=Math.sin(U),j=Math.cos(U);E.x=M*G,E.y=-y*n+v,E.z=M*j,u.push(E.x,E.y,E.z),S.set(G,T,j).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-y),b.push(p++)}m.push(b)}for(let N=0;N<i;N++)for(let b=0;b<s;b++){const y=m[b][N],M=m[b+1][N],I=m[b+1][N+1],B=m[b][N+1];h.push(y,M,B),h.push(M,I,B),C+=6}l.addGroup(g,C,0),g+=C}function x(S){const E=p,C=new rt,T=new R;let N=0;const b=S===!0?t:e,y=S===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,v*y,0),d.push(0,y,0),f.push(.5,.5),p++;const M=p;for(let I=0;I<=i;I++){const U=I/i*c+a,G=Math.cos(U),j=Math.sin(U);T.x=b*j,T.y=v*y,T.z=b*G,u.push(T.x,T.y,T.z),d.push(0,y,0),C.x=G*.5+.5,C.y=j*.5*y+.5,f.push(C.x,C.y),p++}for(let I=0;I<i;I++){const B=E+I,U=M+I;S===!0?h.push(U,U+1,B):h.push(U+1,U,B),N+=3}l.addGroup(g,N,S===!0?1:2),g+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends xs{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn extends qt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new R,S=new R,E=new R;for(let C=0;C<e.length;C+=3)f(e[C+0],x),f(e[C+1],S),f(e[C+2],E),c(x,S,E,_)}function c(_,x,S,E){const C=E+1,T=[];for(let N=0;N<=C;N++){T[N]=[];const b=_.clone().lerp(S,N/C),y=x.clone().lerp(S,N/C),M=C-N;for(let I=0;I<=M;I++)I===0&&N===C?T[N][I]=b:T[N][I]=b.clone().lerp(y,I/M)}for(let N=0;N<C;N++)for(let b=0;b<2*(C-N)-1;b++){const y=Math.floor(b/2);b%2===0?(d(T[N][y+1]),d(T[N+1][y]),d(T[N][y])):(d(T[N][y+1]),d(T[N+1][y+1]),d(T[N+1][y]))}}function l(_){const x=new R;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(_),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function h(){const _=new R;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const S=v(_)/2/Math.PI+.5,E=g(_)/Math.PI+.5;o.push(S,1-E)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){const x=o[_+0],S=o[_+2],E=o[_+4],C=Math.max(x,S,E),T=Math.min(x,S,E);C>.9&&T<.1&&(x<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,x){const S=_*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function p(){const _=new R,x=new R,S=new R,E=new R,C=new rt,T=new rt,N=new rt;for(let b=0,y=0;b<s.length;b+=9,y+=6){_.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),C.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),N.set(o[y+4],o[y+5]),E.copy(_).add(x).add(S).divideScalar(3);const M=v(E);m(C,y+0,_,M),m(T,y+2,x,M),m(N,y+4,S,M)}}function m(_,x,S,E){E<0&&_.x===1&&(o[x]=_.x-1),S.x===0&&S.z===0&&(o[x]=E/2/Math.PI+.5)}function v(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.vertices,t.indices,t.radius,t.details)}}class Qo extends Kn{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}const Kr=new R,Qr=new R,Wa=new R,to=new He;class yp extends qt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Mi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:m,b:v,c:g}=to;if(m.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),to.getNormal(Wa),u[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){const x=(_+1)%3,S=u[_],E=u[x],C=to[h[_]],T=to[h[x]],N=`${S}_${E}`,b=`${E}_${S}`;b in d&&d[b]?(Wa.dot(d[b].normal)<=s&&(f.push(C.x,C.y,C.z),f.push(T.x,T.y,T.z)),d[b]=null):N in d||(d[N]={index0:l[_],index1:l[x],normal:Wa.clone()})}}for(const p in d)if(d[p]){const{index0:m,index1:v}=d[p];Kr.fromBufferAttribute(a,m),Qr.fromBufferAttribute(a,v),f.push(Kr.x,Kr.y,Kr.z),f.push(Qr.x,Qr.y,Qr.z)}this.setAttribute("position",new Pt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class wi extends Qs{constructor(t){super(t),this.uuid=Ze(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Qs().fromJSON(i))}return this}}const Cx={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=xp(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(n&&(s=Ox(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let p=e;p<i;p+=e)u=r[p],d=r[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return tr(s,o,e,a,c,f,0),o}};function xp(r,t,e,n,i){let s,o;if(i===Wx(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Yh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Yh(s,r[s],r[s+1],o);return o&&ta(o,o.next)&&(nr(o),o=o.next),o}function Ti(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ta(e,e.next)||re(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Fx(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Px(r,n,i,s):Rx(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),nr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Lx(Ti(r),t,e),tr(r,t,e,n,i,s,2)):o===2&&Ix(r,t,e,n,i,s):tr(Ti(r),t,e,n,i,s,1);break}}}function Rx(r){const t=r.prev,e=r,n=r.next;if(re(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&os(i,a,s,c,o,l,p.x,p.y)&&re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Px(r,t,e,n){const i=r.prev,s=r,o=r.next;if(re(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,m=a>c?a>l?a:l:c>l?c:l,v=h>u?h>d?h:d:u>d?u:d,g=Hl(f,p,t,e,n),_=Hl(m,v,t,e,n);let x=r.prevZ,S=r.nextZ;for(;x&&x.z>=g&&S&&S.z<=_;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&os(a,h,c,u,l,d,x.x,x.y)&&re(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=m&&S.y>=p&&S.y<=v&&S!==i&&S!==o&&os(a,h,c,u,l,d,S.x,S.y)&&re(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&os(a,h,c,u,l,d,x.x,x.y)&&re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=_;){if(S.x>=f&&S.x<=m&&S.y>=p&&S.y<=v&&S!==i&&S!==o&&os(a,h,c,u,l,d,S.x,S.y)&&re(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Lx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!ta(i,s)&&_p(i,n,n.next,s)&&er(i,s)&&er(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),nr(n),nr(n.next),n=r=s),n=n.next}while(n!==r);return Ti(n)}function Ix(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let c=bp(o,a);o=Ti(o,o.next),c=Ti(c,c.next),tr(o,t,e,n,i,s,0),tr(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ox(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=xp(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(zx(l));for(i.sort(Ux),s=0;s<i.length;s++)e=Dx(i[s],e);return e}function Ux(r,t){return r.x-t.x}function Dx(r,t){const e=Nx(r,t);if(!e)return t;const n=bp(e,r);return Ti(n,n.next),Ti(e,e.next)}function Nx(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&os(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),er(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&kx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function kx(r,t){return re(r.prev,r,t.prev)<0&&re(t.next,r,r.next)<0}function Fx(r,t,e,n){let i=r;do i.z===0&&(i.z=Hl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Bx(i)}function Bx(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Hl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function zx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function os(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Hx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Vx(r,t)&&(er(r,t)&&er(t,r)&&Gx(r,t)&&(re(r.prev,r,t.prev)||re(r,t.prev,t))||ta(r,t)&&re(r.prev,r,r.next)>0&&re(t.prev,t,t.next)>0)}function re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ta(r,t){return r.x===t.x&&r.y===t.y}function _p(r,t,e,n){const i=no(re(r,t,e)),s=no(re(r,t,n)),o=no(re(e,n,r)),a=no(re(e,n,t));return!!(i!==s&&o!==a||i===0&&eo(r,e,t)||s===0&&eo(r,n,t)||o===0&&eo(e,r,n)||a===0&&eo(e,t,n))}function eo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function no(r){return r>0?1:r<0?-1:0}function Vx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&_p(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function er(r,t){return re(r.prev,r,r.next)<0?re(r,t,r.next)>=0&&re(r,r.prev,t)>=0:re(r,t,r.prev)<0||re(r,r.next,t)<0}function Gx(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function bp(r,t){const e=new Vl(r.i,r.x,r.y),n=new Vl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yh(r,t,e,n){const i=new Vl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Vl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wx(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class gn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return gn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Zh(t),Jh(n,t);let o=t.length;e.forEach(Zh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Jh(n,e[c]);const a=Cx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Zh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Jh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ea extends qt{constructor(t=new wi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Pt(i,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:$x;let x,S=!1,E,C,T,N;g&&(x=g.getSpacedPoints(h),S=!0,d=!1,E=g.computeFrenetFrames(h,!1),C=new R,T=new R,N=new R),d||(v=0,f=0,p=0,m=0);const b=a.extractPoints(l);let y=b.shape;const M=b.holes;if(!gn.isClockWise(y)){y=y.reverse();for(let L=0,$=M.length;L<$;L++){const z=M[L];gn.isClockWise(z)&&(M[L]=z.reverse())}}const B=gn.triangulateShape(y,M),U=y;for(let L=0,$=M.length;L<$;L++){const z=M[L];y=y.concat(z)}function G(L,$,z){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector($,z)}const j=y.length,J=B.length;function ht(L,$,z){let at,W,nt;const lt=L.x-$.x,ft=L.y-$.y,Tt=z.x-L.x,zt=z.y-L.y,Jt=lt*lt+ft*ft,O=lt*zt-ft*Tt;if(Math.abs(O)>Number.EPSILON){const w=Math.sqrt(Jt),K=Math.sqrt(Tt*Tt+zt*zt),mt=$.x-ft/w,pt=$.y+lt/w,gt=z.x-zt/K,It=z.y+Tt/K,vt=((gt-mt)*zt-(It-pt)*Tt)/(lt*zt-ft*Tt);at=mt+lt*vt-L.x,W=pt+ft*vt-L.y;const At=at*at+W*W;if(At<=2)return new rt(at,W);nt=Math.sqrt(At/2)}else{let w=!1;lt>Number.EPSILON?Tt>Number.EPSILON&&(w=!0):lt<-Number.EPSILON?Tt<-Number.EPSILON&&(w=!0):Math.sign(ft)===Math.sign(zt)&&(w=!0),w?(at=-ft,W=lt,nt=Math.sqrt(Jt)):(at=lt,W=ft,nt=Math.sqrt(Jt/2))}return new rt(at/nt,W/nt)}const Q=[];for(let L=0,$=U.length,z=$-1,at=L+1;L<$;L++,z++,at++)z===$&&(z=0),at===$&&(at=0),Q[L]=ht(U[L],U[z],U[at]);const ot=[];let V,et=Q.concat();for(let L=0,$=M.length;L<$;L++){const z=M[L];V=[];for(let at=0,W=z.length,nt=W-1,lt=at+1;at<W;at++,nt++,lt++)nt===W&&(nt=0),lt===W&&(lt=0),V[at]=ht(z[at],z[nt],z[lt]);ot.push(V),et=et.concat(V)}for(let L=0;L<v;L++){const $=L/v,z=f*Math.cos($*Math.PI/2),at=p*Math.sin($*Math.PI/2)+m;for(let W=0,nt=U.length;W<nt;W++){const lt=G(U[W],Q[W],at);F(lt.x,lt.y,-z)}for(let W=0,nt=M.length;W<nt;W++){const lt=M[W];V=ot[W];for(let ft=0,Tt=lt.length;ft<Tt;ft++){const zt=G(lt[ft],V[ft],at);F(zt.x,zt.y,-z)}}}const St=p+m;for(let L=0;L<j;L++){const $=d?G(y[L],et[L],St):y[L];S?(T.copy(E.normals[0]).multiplyScalar($.x),C.copy(E.binormals[0]).multiplyScalar($.y),N.copy(x[0]).add(T).add(C),F(N.x,N.y,N.z)):F($.x,$.y,0)}for(let L=1;L<=h;L++)for(let $=0;$<j;$++){const z=d?G(y[$],et[$],St):y[$];S?(T.copy(E.normals[L]).multiplyScalar(z.x),C.copy(E.binormals[L]).multiplyScalar(z.y),N.copy(x[L]).add(T).add(C),F(N.x,N.y,N.z)):F(z.x,z.y,u/h*L)}for(let L=v-1;L>=0;L--){const $=L/v,z=f*Math.cos($*Math.PI/2),at=p*Math.sin($*Math.PI/2)+m;for(let W=0,nt=U.length;W<nt;W++){const lt=G(U[W],Q[W],at);F(lt.x,lt.y,u+z)}for(let W=0,nt=M.length;W<nt;W++){const lt=M[W];V=ot[W];for(let ft=0,Tt=lt.length;ft<Tt;ft++){const zt=G(lt[ft],V[ft],at);S?F(zt.x,zt.y+x[h-1].y,x[h-1].x+z):F(zt.x,zt.y,u+z)}}}wt(),tt();function wt(){const L=i.length/3;if(d){let $=0,z=j*$;for(let at=0;at<J;at++){const W=B[at];H(W[2]+z,W[1]+z,W[0]+z)}$=h+v*2,z=j*$;for(let at=0;at<J;at++){const W=B[at];H(W[0]+z,W[1]+z,W[2]+z)}}else{for(let $=0;$<J;$++){const z=B[$];H(z[2],z[1],z[0])}for(let $=0;$<J;$++){const z=B[$];H(z[0]+j*h,z[1]+j*h,z[2]+j*h)}}n.addGroup(L,i.length/3-L,0)}function tt(){const L=i.length/3;let $=0;A(U,$),$+=U.length;for(let z=0,at=M.length;z<at;z++){const W=M[z];A(W,$),$+=W.length}n.addGroup(L,i.length/3-L,1)}function A(L,$){let z=L.length;for(;--z>=0;){const at=z;let W=z-1;W<0&&(W=L.length-1);for(let nt=0,lt=h+v*2;nt<lt;nt++){const ft=j*nt,Tt=j*(nt+1),zt=$+at+ft,Jt=$+W+ft,O=$+W+Tt,w=$+at+Tt;X(zt,Jt,O,w)}}}function F(L,$,z){c.push(L),c.push($),c.push(z)}function H(L,$,z){dt(L),dt($),dt(z);const at=i.length/3,W=_.generateTopUV(n,i,at-3,at-2,at-1);q(W[0]),q(W[1]),q(W[2])}function X(L,$,z,at){dt(L),dt($),dt(at),dt($),dt(z),dt(at);const W=i.length/3,nt=_.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);q(nt[0]),q(nt[1]),q(nt[3]),q(nt[1]),q(nt[2]),q(nt[3])}function dt(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function q(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jx(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Co[i.type]().fromJSON(i)),new ea(n,t.options)}}const $x={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new rt(s,o),new rt(a,c),new rt(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new rt(o,1-c),new rt(l,1-u),new rt(d,1-p),new rt(m,1-g)]:[new rt(a,1-c),new rt(h,1-u),new rt(f,1-p),new rt(v,1-g)]}};function jx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class na extends Kn{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class gr extends Kn{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gr(t.radius,t.detail)}}class ia extends qt{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new R,p=new rt;for(let m=0;m<=i;m++){for(let v=0;v<=n;v++){const g=s+v/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let m=0;m<i;m++){const v=m*(n+1);for(let g=0;g<n;g++){const _=g+v,x=_,S=_+n+1,E=_+n+2,C=_+1;a.push(x,S,C),a.push(S,E,C)}}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sa extends qt{constructor(t=new wi([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Pt(i,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;gn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=p.length;v<g;v++){const _=p[v];gn.isClockWise(_)===!0&&(p[v]=_.reverse())}const m=gn.triangulateShape(f,p);for(let v=0,g=p.length;v<g;v++){const _=p[v];f=f.concat(_)}for(let v=0,g=f.length;v<g;v++){const _=f[v];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let v=0,g=m.length;v<g;v++){const _=m[v],x=_[0]+u,S=_[1]+u,E=_[2]+u;n.push(x,S,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Xx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new sa(n,t.curveSegments)}}function Xx(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class vr extends qt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],p=[],m=[],v=[];for(let g=0;g<=n;g++){const _=[],x=g/n;let S=0;g===0&&o===0?S=.5/e:g===n&&c===Math.PI&&(S=-.5/e);for(let E=0;E<=e;E++){const C=E/e;u.x=-t*Math.cos(i+C*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+C*s)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),v.push(C+S,1-x),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const x=h[g][_+1],S=h[g][_],E=h[g+1][_],C=h[g+1][_+1];(g!==0||o>0)&&f.push(x,S,C),(g!==n-1||c<Math.PI)&&f.push(S,E,C)}this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ra extends Kn{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ra(t.radius,t.detail)}}class oa extends qt{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const m=p/i*s,v=f/n*Math.PI*2;u.x=(t+e*Math.cos(v))*Math.cos(m),u.y=(t+e*Math.cos(v))*Math.sin(m),u.z=e*Math.sin(v),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const m=(i+1)*f+p-1,v=(i+1)*(f-1)+p-1,g=(i+1)*(f-1)+p,_=(i+1)*f+p;o.push(m,v,_),o.push(v,g,_)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class aa extends qt{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new R,d=new R,f=new R,p=new R,m=new R,v=new R,g=new R;for(let x=0;x<=n;++x){const S=x/n*s*Math.PI*2;_(S,s,o,t,f),_(S+.01,s,o,t,p),v.subVectors(p,f),g.addVectors(p,f),m.crossVectors(v,g),g.crossVectors(m,v),m.normalize(),g.normalize();for(let E=0;E<=i;++E){const C=E/i*Math.PI*2,T=-e*Math.cos(C),N=e*Math.sin(C);u.x=f.x+(T*g.x+N*m.x),u.y=f.y+(T*g.y+N*m.y),u.z=f.z+(T*g.z+N*m.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(E/i)}}for(let x=1;x<=n;x++)for(let S=1;S<=i;S++){const E=(i+1)*(x-1)+(S-1),C=(i+1)*x+(S-1),T=(i+1)*x+S,N=(i+1)*(x-1)+S;a.push(E,C,N),a.push(C,T,N)}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(h,2));function _(x,S,E,C,T){const N=Math.cos(x),b=Math.sin(x),y=E/S*x,M=Math.cos(y);T.x=C*(2+M)*.5*N,T.y=C*(2+M)*b*.5,T.z=C*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class la extends qt{constructor(t=new wc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new rt;let h=new R;const u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function m(){for(let x=0;x<e;x++)v(x);v(s===!1?e:0),_(),g()}function v(x){h=t.getPointAt(x/e,h);const S=o.normals[x],E=o.binormals[x];for(let C=0;C<=i;C++){const T=C/i*Math.PI*2,N=Math.sin(T),b=-Math.cos(T);c.x=b*S.x+N*E.x,c.y=b*S.y+N*E.y,c.z=b*S.z+N*E.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=e;x++)for(let S=1;S<=i;S++){const E=(i+1)*(x-1)+(S-1),C=(i+1)*x+(S-1),T=(i+1)*x+S,N=(i+1)*(x-1)+S;p.push(E,C,N),p.push(C,T,N)}}function _(){for(let x=0;x<=e;x++)for(let S=0;S<=i;S++)l.x=x/e,l.y=S/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new la(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ac extends qt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new R,s=new R;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,m=d+f;p<m;p+=3)for(let v=0;v<3;v++){const g=a.getX(p+v),_=a.getX(p+(v+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,_),Kh(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),Kh(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Kh(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Qh=Object.freeze({__proto__:null,BoxGeometry:Li,CapsuleGeometry:Zo,CircleGeometry:Jo,ConeGeometry:Ko,CylinderGeometry:xs,DodecahedronGeometry:Qo,EdgesGeometry:yp,ExtrudeGeometry:ea,IcosahedronGeometry:na,LatheGeometry:mr,OctahedronGeometry:gr,PlaneGeometry:fr,PolyhedronGeometry:Kn,RingGeometry:ia,ShapeGeometry:sa,SphereGeometry:vr,TetrahedronGeometry:ra,TorusGeometry:oa,TorusKnotGeometry:aa,TubeGeometry:la,WireframeGeometry:Ac});class Sp extends Ie{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Mp extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tc extends Ie{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wp extends Tc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ep extends Ie{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ap extends Ie{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Tp extends Ie{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Cp extends Ie{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rp extends Ie{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zn,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pp extends Be{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function _i(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Lp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ip(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Gl(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function Cc(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}function qx(r,t,e,n,i=30){const s=r.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<e||p>=n)){u.push(l.times[f]);for(let m=0;m<h;++m)d.push(l.values[f*h+m])}}u.length!==0&&(l.times=_i(u,l.times.constructor),l.values=_i(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function Yx(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let m;if(s<=a.times[0]){const g=h,_=u-h;m=a.values.slice(g,_)}else if(s>=a.times[p]){const g=p*u+h,_=g+u-h;m=a.values.slice(g,_)}else{const g=a.createInterpolant(),_=h,x=u-h;g.evaluate(s),m=g.resultBuffer.slice(_,x)}c==="quaternion"&&new Le().fromArray(m).normalize().conjugate().toArray(m);const v=l.times.length;for(let g=0;g<v;++g){const _=g*f+d;if(c==="quaternion")Le.multiplyQuaternionsFlat(l.values,_,m,0,l.values,_);else{const x=f-d*2;for(let S=0;S<x;++S)l.values[_+S]-=m[S]}}}return r.blendMode=oc,r}const Zx={convertArray:_i,isTypedArray:Lp,getKeyframeOrder:Ip,sortedArray:Gl,flattenJSON:Cc,subclip:qx,makeClipAdditive:Yx};class yr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Op extends yr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vi,endingEnd:vi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case yi:s=t,a=2*e-n;break;case js:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yi:o=t,c=2*n-e;break;case js:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),m=p*p,v=m*p,g=-d*v+2*d*m-d*p,_=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*p+1,x=(-1-f)*v+(1.5+f)*m+.5*p,S=f*v-f*m;for(let E=0;E!==a;++E)s[E]=g*o[h+E]+_*o[l+E]+x*o[c+E]+S*o[u+E];return s}}class Rc extends yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Up extends yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class an{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_i(e,this.TimeBufferType),this.values=_i(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_i(t.times,Array),values:_i(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Op(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Lp(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const m=e[u+p];if(m!==e[d+p]||m!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=$s;class Ii extends an{}Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ws;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class Pc extends an{}Pc.prototype.ValueTypeName="color";class ir extends an{}ir.prototype.ValueTypeName="number";class Dp extends yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Le.slerpFlat(s,0,o,l-a,o,l,c);return s}}class _s extends an{InterpolantFactoryMethodLinear(t){return new Dp(this.times,this.values,this.getValueSize(),t)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.DefaultInterpolation=$s;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Oi extends an{}Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Ws;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends an{}sr.prototype.ValueTypeName="vector";class rr{constructor(t,e=-1,n,i=Do){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ze(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Kx(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(an.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Ip(c);c=Gl(c,1,h),l=Gl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ir(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,m){if(f.length!==0){const v=[],g=[];Cc(f,v,g,p),v.length!==0&&m.push(new u(d,v,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)f[d[p].morphTargets[m]]=-1;for(const m in f){const v=[],g=[];for(let _=0;_!==d[p].morphTargets.length;++_){const x=d[p];v.push(x.time),g.push(x.morphTarget===m?1:0)}i.push(new ir(".morphTargetInfluence["+m+"]",v,g))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(sr,f+".position",d,"pos",i),n(_s,f+".quaternion",d,"rot",i),n(sr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Pc;case"quaternion":return _s;case"bool":case"boolean":return Ii;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Kx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Jx(r.type);if(r.times===void 0){const e=[],n=[];Cc(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Ci={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Lc{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Np=new Lc;class Ge{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ge.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class Qx extends Error{constructor(t,e){super(t),this.response=e}}class Nn extends Ge{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ci.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:i});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Tn[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,p=f!==0;let m=0;const v=new ReadableStream({start(g){_();function _(){u.read().then(({done:x,value:S})=>{if(x)g.close();else{m+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:f});for(let C=0,T=h.length;C<T;C++){const N=h[C];N.onProgress&&N.onProgress(E)}g.enqueue(S),_()}})}}});return new Response(v)}else throw new Qx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Ci.add(t,l);const h=Tn[t];delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Tn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class t_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Nn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=rr.parse(t[n]);e.push(i)}return e}}class e_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=[],a=new qo,c=new Nn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function h(u){c.load(t[u],function(d){const f=s.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=de),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else c.load(t,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let m=0;m<d.mipmapCount;m++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+m]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=de),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}class or extends Ge{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ci.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ks("img");function c(){h(),Ci.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class n_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=new pr;s.colorSpace=ye;const o=new or(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return s}}class i_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new ls,a=new Nn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Pe,o.wrapT=l.wrapT!==void 0?l.wrapT:Pe,o.magFilter=l.magFilter!==void 0?l.magFilter:de,o.minFilter=l.minFilter!==void 0?l.minFilter:de,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=qn),l.mipmapCount===1&&(o.minFilter=de),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,i),o}}class s_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=new pe,o=new or(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Qn extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class kp extends Qn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new Gt,tu=new R,eu=new R;class Ic{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class r_ extends Ic{constructor(){super(new Te(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Fp extends Qn{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new r_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nu=new Gt,Ls=new R,ja=new R;class o_ extends Ic{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}}class Bp extends Qn{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class a_ extends Ic{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends Qn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new a_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hp extends Qn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vp extends Qn{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Gp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new R)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}class Wp extends Qn{constructor(t=new Gp,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class ca extends Ge{constructor(t){super(t),this.textures={}}load(t,e,n,i){const s=this,o=new Nn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(s){return e[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),e[s]}const i=ca.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const o=t.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Ct().setHex(o.value);break;case"v2":i.uniforms[s].value=new rt().fromArray(o.value);break;case"v3":i.uniforms[s].value=new R().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Qt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Xt().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Gt().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)i.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new rt().fromArray(s)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:Sp,SpriteMaterial:vc,RawShaderMaterial:Mp,ShaderMaterial:rn,PointsMaterial:xc,MeshPhysicalMaterial:wp,MeshStandardMaterial:Tc,MeshPhongMaterial:Ep,MeshToonMaterial:Ap,MeshNormalMaterial:Tp,MeshLambertMaterial:Cp,MeshDepthMaterial:mc,MeshDistanceMaterial:gc,MeshBasicMaterial:Jn,MeshMatcapMaterial:Rp,LineDashedMaterial:Pp,LineBasicMaterial:Be,Material:Ie};return new e[t]}}class Wl{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Oc extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class $p extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Nn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const v=f.interleavedBuffers[p],g=s(f,v.buffer),_=is(v.type,g),x=new jo(_,v.stride);return x.uuid=v.uuid,e[p]=x,x}function s(f,p){if(n[p]!==void 0)return n[p];const v=f.arrayBuffers[p],g=new Uint32Array(v).buffer;return n[p]=g,g}const o=t.isInstancedBufferGeometry?new Oc:new qt,a=t.data.index;if(a!==void 0){const f=is(a.type,a.array);o.setIndex(new ne(f,1))}const c=t.data.attributes;for(const f in c){const p=c[f];let m;if(p.isInterleavedBufferAttribute){const v=i(t.data,p.data);m=new Ye(v,p.itemSize,p.offset,p.normalized)}else{const v=is(p.type,p.array),g=p.isInstancedBufferAttribute?ps:ne;m=new g(v,p.itemSize,p.normalized)}p.name!==void 0&&(m.name=p.name),p.usage!==void 0&&m.setUsage(p.usage),p.updateRange!==void 0&&(m.updateRange.offset=p.updateRange.offset,m.updateRange.count=p.updateRange.count),o.setAttribute(f,m)}const l=t.data.morphAttributes;if(l)for(const f in l){const p=l[f],m=[];for(let v=0,g=p.length;v<g;v++){const _=p[v];let x;if(_.isInterleavedBufferAttribute){const S=i(t.data,_.data);x=new Ye(S,_.itemSize,_.offset,_.normalized)}else{const S=is(_.type,_.array);x=new ne(S,_.itemSize,_.normalized)}_.name!==void 0&&(x.name=_.name),m.push(x)}o.morphAttributes[f]=m}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const m=u[f];o.addGroup(m.start,m.count,m.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new R;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Ke(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class l_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=this.path===""?Wl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Nn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}s.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Wl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const s=new Nn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,s,c,a,n),h=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,h),e!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),s=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,s),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,i,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const s=new wi().fromJSON(t[n]);e[s.uuid]=s}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),t!==void 0)for(let s=0,o=t.length;s<o;s++){const a=new Xo().fromJSON(t[s],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new $p;for(let s=0,o=t.length;s<o;s++){let a;const c=t[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Qh?a=Qh[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const s=new ca;s.setTextures(e);for(let o=0,a=t.length;o<a;o++){const c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],s=rr.parse(i);e[s.uuid]=s}return e}parseImages(t,e){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:is(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Lc(e);s=new or(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=t.length;l<h;l++){const u=t[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,m=d.length;p<m;p++){const v=d[p],g=a(v);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new ls(g.data,g.width,g.height)))}i[u.uuid]=new xi(f)}else{const f=a(u.url);i[u.uuid]=new xi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:is(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new or(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ls(p.data,p.width,p.height)))}n[c.uuid]=new xi(h)}else{const h=await s(c.url);n[c.uuid]=new xi(h)}}}return n}parseTextures(t,e){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(t!==void 0)for(let s=0,o=t.length;s<o;s++){const a=t[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=e[a.image],l=c.data;let h;Array.isArray(l)?(h=new pr,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new ls:h=new pe,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,c_)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],iu),h.wrapT=n(a.wrap[1],iu)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,su)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,su)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,s){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,m=d.length;p<m;p++){const v=d[p];n[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),f.push(n[v])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new rp,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Ct(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new $o(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Wo(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity);break;case"PerspectiveCamera":o=new Te(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Vo(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Hp(t.color,t.intensity);break;case"DirectionalLight":o=new zp(t.color,t.intensity);break;case"PointLight":o=new Bp(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Vp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Fp(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":o=new kp(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new Wp().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=c(t.material),o=new cp(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=c(t.material),o=new Me(h,u);break;case"InstancedMesh":h=a(t.geometry),u=c(t.material);const d=t.count,f=t.instanceMatrix,p=t.instanceColor;o=new hp(h,u,d),o.instanceMatrix=new ps(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new ps(new Float32Array(p.array),p.itemSize));break;case"LOD":o=new lp;break;case"Line":o=new Yn(a(t.geometry),c(t.material));break;case"LineLoop":o=new up(a(t.geometry),c(t.material));break;case"LineSegments":o=new xn(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new dp(a(t.geometry),c(t.material));break;case"Sprite":o=new ap(c(t.material));break;case"Group":o=new rs;break;case"Bone":o=new yc;break;default:o=new te}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,s))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(s[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],m=o.getObjectByProperty("uuid",p.object);m!==void 0&&o.addLevel(m,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const c_={UVMapping:Oo,CubeReflectionMapping:Dn,CubeRefractionMapping:Xn,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:Hs,CubeUVReflectionMapping:vs},iu={RepeatWrapping:Vs,ClampToEdgeWrapping:Pe,MirroredRepeatWrapping:Gs},su={NearestFilter:ue,NearestMipmapNearestFilter:Eo,NearestMipmapLinearFilter:Ds,LinearFilter:de,LinearMipmapNearestFilter:Ql,LinearMipmapLinearFilter:qn};class h_ extends Ge{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ci.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ci.add(t,c),e&&e(c),s.manager.itemEnd(t)}).catch(function(c){i&&i(c),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}let io;class Uc{static getContext(){return io===void 0&&(io=new(window.AudioContext||window.webkitAudioContext)),io}static setContext(t){io=t}}class u_ extends Ge{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Nn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const l=c.slice(0);Uc.getContext().decodeAudioData(l,function(u){e(u)},a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(t)}}}const ru=new Gt,ou=new Gt,oi=new Gt;class d_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Te,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Te,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,oi.copy(t.projectionMatrix);const i=e.eyeSep/2,s=i*e.near/e.focus,o=e.near*Math.tan(Mi*e.fov*.5)/e.zoom;let a,c;ou.elements[12]=-i,ru.elements[12]=i,a=-o*e.aspect+s,c=o*e.aspect+s,oi.elements[0]=2*e.near/(c-a),oi.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(oi),a=-o*e.aspect-s,c=o*e.aspect-s,oi.elements[0]=2*e.near/(c-a),oi.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(oi)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(ou),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ru)}}class jp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=au();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function au(){return(typeof performance>"u"?Date:performance).now()}const ai=new R,lu=new Le,p_=new R,li=new R;class f_ extends te{constructor(){super(),this.type="AudioListener",this.context=Uc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new jp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ai,lu,p_),li.set(0,0,-1).applyQuaternion(lu),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ai.x,i),e.positionY.linearRampToValueAtTime(ai.y,i),e.positionZ.linearRampToValueAtTime(ai.z,i),e.forwardX.linearRampToValueAtTime(li.x,i),e.forwardY.linearRampToValueAtTime(li.y,i),e.forwardZ.linearRampToValueAtTime(li.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(ai.x,ai.y,ai.z),e.setOrientation(li.x,li.y,li.z,n.x,n.y,n.z)}}class Xp extends te{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const ci=new R,cu=new Le,m_=new R,hi=new R;class g_ extends Xp{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ci,cu,m_),hi.set(0,0,1).applyQuaternion(cu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ci.x,n),e.positionY.linearRampToValueAtTime(ci.y,n),e.positionZ.linearRampToValueAtTime(ci.z,n),e.orientationX.linearRampToValueAtTime(hi.x,n),e.orientationY.linearRampToValueAtTime(hi.y,n),e.orientationZ.linearRampToValueAtTime(hi.z,n)}else e.setPosition(ci.x,ci.y,ci.z),e.setOrientation(hi.x,hi.y,hi.z)}}class v_{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class qp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Le.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Le.multiplyQuaternionsFlat(t,o,t,e,t,n),Le.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Dc="\\[\\]\\.:\\/",y_=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",x_="[^"+Dc.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",Nc),b_=/(WCOD+)?/.source.replace("WCOD",x_),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),M_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),w_=new RegExp("^"+__+b_+S_+M_+"$"),E_=["material","materials","bones","map"];class A_{constructor(t,e,n){const i=n||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Kt{constructor(t,e,n){this.path=e,this.parsedPath=n||Kt.parseTrackName(e),this.node=Kt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Kt.Composite(t,e,n):new Kt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(t){const e=w_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);E_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Kt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Kt.Composite=A_;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class T_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ze(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=t.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=e[f];if(p===void 0){p=c++,e[f]=p,t.push(d);for(let m=0,v=o;m!==v;++m)s[m].push(new Kt(d,n[m],i[m]))}else if(p<l){a=t[p];const m=--l,v=t[m];e[v.uuid]=p,t[p]=v,e[f]=m,t[m]=d;for(let g=0,_=o;g!==_;++g){const x=s[g],S=x[m];let E=x[p];x[p]=S,E===void 0&&(E=new Kt(d,n[g],i[g])),x[m]=E}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=e[l];if(h!==void 0&&h>=s){const u=s++,d=t[u];e[d.uuid]=h,t[h]=d,e[l]=u,t[u]=c;for(let f=0,p=i;f!==p;++f){const m=n[f],v=m[u],g=m[h];m[h]=v,m[u]=g}}}this.nCachedObjects_=s}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<s){const d=--s,f=t[d],p=--o,m=t[p];e[f.uuid]=u,t[u]=f,e[m.uuid]=d,t[d]=m,t.pop();for(let v=0,g=i;v!==g;++v){const _=n[v],x=_[d],S=_[p];_[u]=x,_[d]=S,_.pop()}}else{const d=--o,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,m=i;p!==m;++p){const v=n[p];v[u]=v[d],v.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=s.length,n[t]=i,o.push(t),a.push(e),s.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new Kt(p,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Yp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:vi,endingEnd:vi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Td,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case oc:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Do:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Cd;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Ad){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=yi,i.endingEnd=yi):(t?i.endingStart=this.zeroSlopeAtStart?yi:vi:i.endingStart=js,e?i.endingEnd=this.zeroSlopeAtEnd?yi:vi:i.endingEnd=js)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const C_=new Float32Array(1);class R_ extends yn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;p=new qp(Kt.create(n,f,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Rc(new Float32Array(2),new Float32Array(2),1,C_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?rr.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Do),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Yp(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?rr.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class kc{constructor(t){this.value=t}clone(){return new kc(this.value.clone===void 0?this.value:this.value.clone())}}let P_=0;class L_ extends yn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:P_++}),this.name="",this.usage=Zs,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++)this.uniforms.push(e[n].clone());return this}clone(){return new this.constructor().copy(this)}}class Ro extends jo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class I_{constructor(t,e,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}class O_{constructor(t,e,n=0,i=1/0){this.ray=new Pi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(hu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)$l(t[i],this,n,e);return n.sort(hu),n}}function hu(r,t){return r.distance-t.distance}function $l(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)$l(i[s],t,e,!0)}}class jl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class U_{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const uu=new rt;class D_{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=uu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,uu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const du=new R,so=new R;class Zp{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){du.subVectors(t,this.start),so.subVectors(this.end,this.start);const n=so.dot(so);let s=so.dot(du)/n;return e&&(s=le(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const pu=new R;class N_ extends te{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new qt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Pt(i,3));const s=new Be({fog:!1,toneMapped:!1});this.cone=new xn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),pu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(pu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Vn=new R,ro=new Gt,Xa=new Gt;class k_ extends xn{constructor(t){const e=Jp(t),n=new qt,i=[],s=[],o=new Ct(0,0,1),a=new Ct(0,1,0);for(let l=0;l<e.length;l++){const h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Pt(i,3)),n.setAttribute("color",new Pt(s,3));const c=new Be({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Xa.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(ro.multiplyMatrices(Xa,a.matrixWorld),Vn.setFromMatrixPosition(ro),i.setXYZ(o,Vn.x,Vn.y,Vn.z),ro.multiplyMatrices(Xa,a.parent.matrixWorld),Vn.setFromMatrixPosition(ro),i.setXYZ(o+1,Vn.x,Vn.y,Vn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jp(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,Jp(r.children[e]));return t}class F_ extends Me{constructor(t,e,n){const i=new vr(e,4,2),s=new Jn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const B_=new R,fu=new Ct,mu=new Ct;class z_ extends te{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new gr(e);i.rotateY(Math.PI*.5),this.material=new Jn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new ne(o,3)),this.add(new Me(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");fu.copy(this.light.color),mu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const s=n<i/2?fu:mu;e.setXYZ(n,s.r,s.g,s.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(B_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class H_ extends xn{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ct(n),i=new Ct(i);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const m=d===s?n:i;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const h=new qt;h.setAttribute("position",new Pt(c,3)),h.setAttribute("color",new Pt(l,3));const u=new Be({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class V_ extends xn{constructor(t=10,e=16,n=8,i=64,s=4473924,o=8947848){s=new Ct(s),o=new Ct(o);const a=[],c=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,p);const m=u&1?s:o;c.push(m.r,m.g,m.b),c.push(m.r,m.g,m.b)}for(let u=0;u<n;u++){const d=u&1?s:o,f=t-t/n*u;for(let p=0;p<i;p++){let m=p/i*(Math.PI*2),v=Math.sin(m)*f,g=Math.cos(m)*f;a.push(v,0,g),c.push(d.r,d.g,d.b),m=(p+1)/i*(Math.PI*2),v=Math.sin(m)*f,g=Math.cos(m)*f,a.push(v,0,g),c.push(d.r,d.g,d.b)}}const l=new qt;l.setAttribute("position",new Pt(a,3)),l.setAttribute("color",new Pt(c,3));const h=new Be({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const gu=new R,oo=new R,vu=new R;class G_ extends te{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new qt;i.setAttribute("position",new Pt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new Be({fog:!1,toneMapped:!1});this.lightPlane=new Yn(i,s),this.add(this.lightPlane),i=new qt,i.setAttribute("position",new Pt([0,0,0,0,0,1],3)),this.targetLine=new Yn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),gu.setFromMatrixPosition(this.light.matrixWorld),oo.setFromMatrixPosition(this.light.target.matrixWorld),vu.subVectors(oo,gu),this.lightPlane.lookAt(oo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(oo),this.targetLine.scale.z=vu.length()}}const ao=new R,ae=new zo;class W_ extends xn{constructor(t){const e=new qt,n=new Be({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,m){c(p),c(m)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new Pt(i,3)),e.setAttribute("color",new Pt(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Ct(16755200),h=new Ct(16711680),u=new Ct(43775),d=new Ct(16777215),f=new Ct(3355443);this.setColors(l,h,u,d,f)}setColors(t,e,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;ae.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),he("c",e,t,ae,0,0,-1),he("t",e,t,ae,0,0,1),he("n1",e,t,ae,-n,-i,-1),he("n2",e,t,ae,n,-i,-1),he("n3",e,t,ae,-n,i,-1),he("n4",e,t,ae,n,i,-1),he("f1",e,t,ae,-n,-i,1),he("f2",e,t,ae,n,-i,1),he("f3",e,t,ae,-n,i,1),he("f4",e,t,ae,n,i,1),he("u1",e,t,ae,n*.7,i*1.1,-1),he("u2",e,t,ae,-n*.7,i*1.1,-1),he("u3",e,t,ae,0,i*2,-1),he("cf1",e,t,ae,-n,0,1),he("cf2",e,t,ae,n,0,1),he("cf3",e,t,ae,0,-i,1),he("cf4",e,t,ae,0,i,1),he("cn1",e,t,ae,-n,0,-1),he("cn2",e,t,ae,n,0,-1),he("cn3",e,t,ae,0,-i,-1),he("cn4",e,t,ae,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function he(r,t,e,n,i,s,o){ao.set(i,s,o).unproject(n);const a=t[r];if(a!==void 0){const c=e.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],ao.x,ao.y,ao.z)}}const lo=new Je;class $_ extends xn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new qt;s.setIndex(new ne(n,1)),s.setAttribute("position",new ne(i,3)),super(s,new Be({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&lo.setFromObject(this.object),lo.isEmpty())return;const e=lo.min,n=lo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=e.x,s[4]=n.y,s[5]=n.z,s[6]=e.x,s[7]=e.y,s[8]=n.z,s[9]=n.x,s[10]=e.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=e.z,s[15]=e.x,s[16]=n.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=n.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class j_ extends xn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new qt;s.setIndex(new ne(n,1)),s.setAttribute("position",new Pt(i,3)),super(s,new Be({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class X_ extends Yn{constructor(t,e=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new qt;o.setAttribute("position",new Pt(s,3)),o.computeBoundingSphere(),super(o,new Be({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new qt;c.setAttribute("position",new Pt(a,3)),c.computeBoundingSphere(),this.add(new Me(c,new Jn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const yu=new R;let co,qa;class q_ extends te{constructor(t=new R(0,0,1),e=new R(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",co===void 0&&(co=new qt,co.setAttribute("position",new Pt([0,0,0,0,1,0],3)),qa=new xs(0,.5,1,5,1),qa.translate(0,-.5,0)),this.position.copy(e),this.line=new Yn(co,new Be({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Me(qa,new Jn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{yu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(yu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Y_ extends xn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qt;i.setAttribute("position",new Pt(e,3)),i.setAttribute("color",new Pt(n,3));const s=new Be({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Ct,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Z_{constructor(){this.type="ShapePath",this.color=new Ct,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Qs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const _=[];for(let x=0,S=g.length;x<S;x++){const E=g[x],C=new wi;C.curves=E.curves,_.push(C)}return _}function n(g,_){const x=_.length;let S=!1;for(let E=x-1,C=0;C<x;E=C++){let T=_[E],N=_[C],b=N.x-T.x,y=N.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=_[C],b=-b,N=_[E],y=-y),g.y<T.y||g.y>N.y)continue;if(g.y===T.y){if(g.x===T.x)return!0}else{const M=y*(g.x-T.x)-b*(g.y-T.y);if(M===0)return!0;if(M<0)continue;S=!S}}else{if(g.y!==T.y)continue;if(N.x<=g.x&&g.x<=T.x||T.x<=g.x&&g.x<=N.x)return!0}}return S}const i=gn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new wi,c.curves=a.curves,l.push(c),l;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],p=0,m;d[p]=void 0,f[p]=[];for(let g=0,_=s.length;g<_;g++)a=s[g],m=a.getPoints(),o=i(m),o=t?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new wi,p:m},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:m[0]});if(!d[0])return e(s);if(d.length>1){let g=!1,_=0;for(let x=0,S=d.length;x<S;x++)u[x]=[];for(let x=0,S=d.length;x<S;x++){const E=f[x];for(let C=0;C<E.length;C++){const T=E[C];let N=!0;for(let b=0;b<d.length;b++)n(T.p,d[b].p)&&(x!==b&&_++,N?(N=!1,u[b].push(T)):g=!0);N&&u[x].push(T)}}_>0&&g===!1&&(f=u)}let v;for(let g=0,_=d.length;g<_;g++){c=d[g].s,l.push(c),v=f[g];for(let x=0,S=v.length;x<S;x++)c.holes.push(v[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);const Eb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:md,AddEquation:mi,AddOperation:ud,AdditiveAnimationBlendMode:oc,AdditiveBlending:ol,AlphaFormat:xd,AlwaysCompare:zd,AlwaysDepth:sd,AlwaysStencilFunc:Id,AmbientLight:Hp,AnimationAction:Yp,AnimationClip:rr,AnimationLoader:t_,AnimationMixer:R_,AnimationObjectGroup:T_,AnimationUtils:Zx,ArcCurve:pp,ArrayCamera:ep,ArrowHelper:q_,Audio:Xp,AudioAnalyser:v_,AudioContext:Uc,AudioListener:f_,AudioLoader:u_,AxesHelper:Y_,BackSide:Fe,BasicDepthPacking:Rd,BasicShadowMap:yf,Bone:yc,BooleanKeyframeTrack:Ii,Box2:D_,Box3:Je,Box3Helper:j_,BoxGeometry:Li,BoxHelper:$_,BufferAttribute:ne,BufferGeometry:qt,BufferGeometryLoader:$p,ByteType:vd,Cache:Ci,Camera:zo,CameraHelper:W_,CanvasTexture:_x,CapsuleGeometry:Zo,CatmullRomCurve3:fp,CineonToneMapping:fd,CircleGeometry:Jo,ClampToEdgeWrapping:Pe,Clock:jp,Color:Ct,ColorKeyframeTrack:Pc,ColorManagement:ee,CompressedArrayTexture:yx,CompressedCubeTexture:xx,CompressedTexture:qo,CompressedTextureLoader:e_,ConeGeometry:Ko,CubeCamera:Xd,CubeReflectionMapping:Dn,CubeRefractionMapping:Xn,CubeTexture:pr,CubeTextureLoader:n_,CubeUVReflectionMapping:vs,CubicBezierCurve:bc,CubicBezierCurve3:mp,CubicInterpolant:Op,CullFaceBack:rl,CullFaceFront:Gu,CullFaceFrontBack:vf,CullFaceNone:Vu,Curve:on,CurvePath:vp,CustomBlending:$u,CustomToneMapping:gd,CylinderGeometry:xs,Cylindrical:U_,Data3DTexture:uc,DataArrayTexture:ko,DataTexture:ls,DataTextureLoader:i_,DataUtils:Am,DecrementStencilOp:Pf,DecrementWrapStencilOp:If,DefaultLoadingManager:Np,DepthFormat:$n,DepthStencilFormat:Ai,DepthTexture:np,DirectionalLight:zp,DirectionalLightHelper:G_,DiscreteInterpolant:Up,DisplayP3ColorSpace:No,DodecahedronGeometry:Qo,DoubleSide:dn,DstAlphaFactor:Ku,DstColorFactor:td,DynamicCopyUsage:Xf,DynamicDrawUsage:Hf,DynamicReadUsage:Wf,EdgesGeometry:yp,EllipseCurve:Yo,EqualCompare:Dd,EqualDepth:od,EqualStencilFunc:Nf,EquirectangularReflectionMapping:zs,EquirectangularRefractionMapping:Hs,Euler:dr,EventDispatcher:yn,ExtrudeGeometry:ea,FileLoader:Nn,Float16BufferAttribute:Im,Float32BufferAttribute:Pt,Float64BufferAttribute:Om,FloatType:fn,Fog:$o,FogExp2:Wo,FramebufferTexture:vx,FrontSide:Un,Frustum:Ho,GLBufferAttribute:I_,GLSL1:Yf,GLSL3:Nl,GreaterCompare:kd,GreaterDepth:ld,GreaterEqualCompare:Bd,GreaterEqualDepth:ad,GreaterEqualStencilFunc:zf,GreaterStencilFunc:Ff,GridHelper:H_,Group:rs,HalfFloatType:hs,HemisphereLight:kp,HemisphereLightHelper:z_,IcosahedronGeometry:na,ImageBitmapLoader:h_,ImageLoader:or,ImageUtils:hc,IncrementStencilOp:Rf,IncrementWrapStencilOp:Lf,InstancedBufferAttribute:ps,InstancedBufferGeometry:Oc,InstancedInterleavedBuffer:Ro,InstancedMesh:hp,Int16BufferAttribute:Pm,Int32BufferAttribute:Lm,Int8BufferAttribute:Tm,IntType:tc,InterleavedBuffer:jo,InterleavedBufferAttribute:Ye,Interpolant:yr,InterpolateDiscrete:Ws,InterpolateLinear:$s,InterpolateSmooth:_o,InvertStencilOp:Of,KeepStencilOp:bo,KeyframeTrack:an,LOD:lp,LatheGeometry:mr,Layers:Fo,LessCompare:Ud,LessDepth:rd,LessEqualCompare:Nd,LessEqualDepth:wo,LessEqualStencilFunc:kf,LessStencilFunc:Df,Light:Qn,LightProbe:Wp,Line:Yn,Line3:Zp,LineBasicMaterial:Be,LineCurve:Sc,LineCurve3:gp,LineDashedMaterial:Pp,LineLoop:up,LineSegments:xn,LinearDisplayP3ColorSpace:ur,LinearEncoding:ac,LinearFilter:de,LinearInterpolant:Rc,LinearMipMapLinearFilter:Mf,LinearMipMapNearestFilter:Sf,LinearMipmapLinearFilter:qn,LinearMipmapNearestFilter:Ql,LinearSRGBColorSpace:vn,LinearToneMapping:dd,LinearTransfer:Xs,Loader:Ge,LoaderUtils:Wl,LoadingManager:Lc,LoopOnce:Ad,LoopPingPong:Cd,LoopRepeat:Td,LuminanceAlphaFormat:bd,LuminanceFormat:_d,MOUSE:di,Material:Ie,MaterialLoader:ca,MathUtils:cc,Matrix3:Xt,Matrix4:Gt,MaxEquation:hl,Mesh:Me,MeshBasicMaterial:Jn,MeshDepthMaterial:mc,MeshDistanceMaterial:gc,MeshLambertMaterial:Cp,MeshMatcapMaterial:Rp,MeshNormalMaterial:Tp,MeshPhongMaterial:Ep,MeshPhysicalMaterial:wp,MeshStandardMaterial:Tc,MeshToonMaterial:Ap,MinEquation:cl,MirroredRepeatWrapping:Gs,MixOperation:hd,MultiplyBlending:ll,MultiplyOperation:hr,NearestFilter:ue,NearestMipMapLinearFilter:bf,NearestMipMapNearestFilter:_f,NearestMipmapLinearFilter:Ds,NearestMipmapNearestFilter:Eo,NeverCompare:Od,NeverDepth:id,NeverStencilFunc:Uf,NoBlending:Ln,NoColorSpace:qe,NoToneMapping:In,NormalAnimationBlendMode:Do,NormalBlending:Si,NotEqualCompare:Fd,NotEqualDepth:cd,NotEqualStencilFunc:Bf,NumberKeyframeTrack:ir,Object3D:te,ObjectLoader:l_,ObjectSpaceNormalMap:Ld,OctahedronGeometry:gr,OneFactor:Yu,OneMinusDstAlphaFactor:Qu,OneMinusDstColorFactor:ed,OneMinusSrcAlphaFactor:Kl,OneMinusSrcColorFactor:Ju,OrthographicCamera:Vo,P3Primaries:Ys,PCFShadowMap:Zl,PCFSoftShadowMap:Wu,PMREMGenerator:Fl,Path:Qs,PerspectiveCamera:Te,Plane:Cn,PlaneGeometry:fr,PlaneHelper:X_,PointLight:Bp,PointLightHelper:F_,Points:dp,PointsMaterial:xc,PolarGridHelper:V_,PolyhedronGeometry:Kn,PositionalAudio:g_,PropertyBinding:Kt,PropertyMixer:qp,QuadraticBezierCurve:Mc,QuadraticBezierCurve3:wc,Quaternion:Le,QuaternionKeyframeTrack:_s,QuaternionLinearInterpolant:Dp,RED_GREEN_RGTC2_Format:Ul,RED_RGTC1_Format:Ed,REVISION:Io,RGBADepthPacking:Pd,RGBAFormat:Xe,RGBAIntegerFormat:rc,RGBA_ASTC_10x10_Format:Cl,RGBA_ASTC_10x5_Format:El,RGBA_ASTC_10x6_Format:Al,RGBA_ASTC_10x8_Format:Tl,RGBA_ASTC_12x10_Format:Rl,RGBA_ASTC_12x12_Format:Pl,RGBA_ASTC_4x4_Format:vl,RGBA_ASTC_5x4_Format:yl,RGBA_ASTC_5x5_Format:xl,RGBA_ASTC_6x5_Format:_l,RGBA_ASTC_6x6_Format:bl,RGBA_ASTC_8x5_Format:Sl,RGBA_ASTC_8x6_Format:Ml,RGBA_ASTC_8x8_Format:wl,RGBA_BPTC_Format:xo,RGBA_ETC2_EAC_Format:gl,RGBA_PVRTC_2BPPV1_Format:fl,RGBA_PVRTC_4BPPV1_Format:pl,RGBA_S3TC_DXT1_Format:go,RGBA_S3TC_DXT3_Format:vo,RGBA_S3TC_DXT5_Format:yo,RGB_BPTC_SIGNED_Format:Ll,RGB_BPTC_UNSIGNED_Format:Il,RGB_ETC1_Format:wd,RGB_ETC2_Format:ml,RGB_PVRTC_2BPPV1_Format:dl,RGB_PVRTC_4BPPV1_Format:ul,RGB_S3TC_DXT1_Format:mo,RGFormat:Md,RGIntegerFormat:sc,RawShaderMaterial:Mp,Ray:Pi,Raycaster:O_,Rec709Primaries:qs,RectAreaLight:Vp,RedFormat:Sd,RedIntegerFormat:ic,ReinhardToneMapping:pd,RenderTarget:Wd,RepeatWrapping:Vs,ReplaceStencilOp:Cf,ReverseSubtractEquation:Xu,RingGeometry:ia,SIGNED_RED_GREEN_RGTC2_Format:Dl,SIGNED_RED_RGTC1_Format:Ol,SRGBColorSpace:ye,SRGBTransfer:ie,Scene:rp,ShaderChunk:Wt,ShaderLib:ke,ShaderMaterial:rn,ShadowMaterial:Sp,Shape:wi,ShapeGeometry:sa,ShapePath:Z_,ShapeUtils:gn,ShortType:yd,Skeleton:Xo,SkeletonHelper:k_,SkinnedMesh:cp,Source:xi,Sphere:Ke,SphereGeometry:vr,Spherical:jl,SphericalHarmonics3:Gp,SplineCurve:Ec,SpotLight:Fp,SpotLightHelper:N_,Sprite:ap,SpriteMaterial:vc,SrcAlphaFactor:Jl,SrcAlphaSaturateFactor:nd,SrcColorFactor:Zu,StaticCopyUsage:jf,StaticDrawUsage:Zs,StaticReadUsage:Gf,StereoCamera:d_,StreamCopyUsage:qf,StreamDrawUsage:Vf,StreamReadUsage:$f,StringKeyframeTrack:Oi,SubtractEquation:ju,SubtractiveBlending:al,TOUCH:pi,TangentSpaceNormalMap:Zn,TetrahedronGeometry:ra,Texture:pe,TextureLoader:s_,TorusGeometry:oa,TorusKnotGeometry:aa,Triangle:He,TriangleFanDrawMode:Af,TriangleStripDrawMode:Ef,TrianglesDrawMode:wf,TubeGeometry:la,TwoPassDoubleSide:xf,UVMapping:Oo,Uint16BufferAttribute:dc,Uint32BufferAttribute:pc,Uint8BufferAttribute:Cm,Uint8ClampedBufferAttribute:Rm,Uniform:kc,UniformsGroup:L_,UniformsLib:bt,UniformsUtils:Bo,UnsignedByteType:On,UnsignedInt248Type:Wn,UnsignedIntType:Pn,UnsignedShort4444Type:ec,UnsignedShort5551Type:nc,UnsignedShortType:Uo,VSMShadowMap:un,Vector2:rt,Vector3:R,Vector4:Qt,VectorKeyframeTrack:sr,VideoTexture:gx,WebGL1Renderer:sp,WebGL3DRenderTarget:fm,WebGLArrayRenderTarget:pm,WebGLCoordinateSystem:mn,WebGLCubeRenderTarget:qd,WebGLMultipleRenderTargets:mm,WebGLRenderTarget:sn,WebGLRenderer:ip,WebGLUtils:tp,WebGPUCoordinateSystem:Js,WireframeGeometry:Ac,WrapAroundEnding:js,ZeroCurvatureEnding:vi,ZeroFactor:qu,ZeroSlopeEnding:yi,ZeroStencilOp:Tf,_SRGBAFormat:Ao,createCanvasElement:Gd,sRGBEncoding:jn},Symbol.toStringTag,{value:"Module"})),xu={type:"change"},Ya={type:"start"},_u={type:"end"},ho=new Pi,bu=new Cn,J_=Math.cos(70*cc.DEG2RAD);class Ab extends yn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",w),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xu),n.update(),s=i.NONE},this.update=function(){const k=new R,yt=new Le().setFromUnitVectors(t.up,new R(0,1,0)),ct=yt.clone().invert(),kt=new R,Ut=new Le,Dt=new R,Ot=2*Math.PI;return function(_t=null){const xt=n.object.position;k.copy(xt).sub(n.target),k.applyQuaternion(yt),a.setFromVector3(k),n.autoRotate&&s===i.NONE&&M(b(_t)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Et=n.minAzimuthAngle,Mt=n.maxAzimuthAngle;isFinite(Et)&&isFinite(Mt)&&(Et<-Math.PI?Et+=Ot:Et>Math.PI&&(Et-=Ot),Mt<-Math.PI?Mt+=Ot:Mt>Math.PI&&(Mt-=Ot),Et<=Mt?a.theta=Math.max(Et,Math.min(Mt,a.theta)):a.theta=a.theta>(Et+Mt)/2?Math.max(Et,a.theta):Math.min(Mt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*l),k.setFromSpherical(a),k.applyQuaternion(ct),xt.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ut=!1;if(n.zoomToCursor&&C){let Lt=null;if(n.object.isPerspectiveCamera){const Ft=k.length();Lt=Q(Ft*l);const fe=Ft-Lt;n.object.position.addScaledVector(S,fe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ft=new R(E.x,E.y,0);Ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ut=!0;const fe=new R(E.x,E.y,0);fe.unproject(n.object),n.object.position.sub(fe).add(Ft),n.object.updateMatrixWorld(),Lt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Lt).add(n.object.position):(ho.origin.copy(n.object.position),ho.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ho.direction))<J_?t.lookAt(n.target):(bu.setFromNormalAndCoplanarPoint(n.object.up,n.target),ho.intersectPlane(bu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ut=!0);return l=1,C=!1,ut||kt.distanceToSquared(n.object.position)>o||8*(1-Ut.dot(n.object.quaternion))>o||Dt.distanceToSquared(n.target)>0?(n.dispatchEvent(xu),kt.copy(n.object.position),Ut.copy(n.object.quaternion),Dt.copy(n.target),ut=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pt),n.domElement.removeEventListener("pointerdown",lt),n.domElement.removeEventListener("pointercancel",Tt),n.domElement.removeEventListener("wheel",O),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",Tt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",w),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new jl,c=new jl;let l=1;const h=new R,u=new rt,d=new rt,f=new rt,p=new rt,m=new rt,v=new rt,g=new rt,_=new rt,x=new rt,S=new R,E=new rt;let C=!1;const T=[],N={};function b(k){return k!==null?2*Math.PI/60*n.autoRotateSpeed*k:2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function M(k){c.theta-=k}function I(k){c.phi-=k}const B=function(){const k=new R;return function(ct,kt){k.setFromMatrixColumn(kt,0),k.multiplyScalar(-ct),h.add(k)}}(),U=function(){const k=new R;return function(ct,kt){n.screenSpacePanning===!0?k.setFromMatrixColumn(kt,1):(k.setFromMatrixColumn(kt,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(ct),h.add(k)}}(),G=function(){const k=new R;return function(ct,kt){const Ut=n.domElement;if(n.object.isPerspectiveCamera){const Dt=n.object.position;k.copy(Dt).sub(n.target);let Ot=k.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ct*Ot/Ut.clientHeight,n.object.matrix),U(2*kt*Ot/Ut.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ct*(n.object.right-n.object.left)/n.object.zoom/Ut.clientWidth,n.object.matrix),U(kt*(n.object.top-n.object.bottom)/n.object.zoom/Ut.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ht(k){if(!n.zoomToCursor)return;C=!0;const yt=n.domElement.getBoundingClientRect(),ct=k.clientX-yt.left,kt=k.clientY-yt.top,Ut=yt.width,Dt=yt.height;E.x=ct/Ut*2-1,E.y=-(kt/Dt)*2+1,S.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function ot(k){u.set(k.clientX,k.clientY)}function V(k){ht(k),g.set(k.clientX,k.clientY)}function et(k){p.set(k.clientX,k.clientY)}function St(k){d.set(k.clientX,k.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const yt=n.domElement;M(2*Math.PI*f.x/yt.clientHeight),I(2*Math.PI*f.y/yt.clientHeight),u.copy(d),n.update()}function wt(k){_.set(k.clientX,k.clientY),x.subVectors(_,g),x.y>0?j(y()):x.y<0&&J(y()),g.copy(_),n.update()}function tt(k){m.set(k.clientX,k.clientY),v.subVectors(m,p).multiplyScalar(n.panSpeed),G(v.x,v.y),p.copy(m),n.update()}function A(k){ht(k),k.deltaY<0?J(y()):k.deltaY>0&&j(y()),n.update()}function F(k){let yt=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),yt=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),yt=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),yt=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),yt=!0;break}yt&&(k.preventDefault(),n.update())}function H(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const k=.5*(T[0].pageX+T[1].pageX),yt=.5*(T[0].pageY+T[1].pageY);u.set(k,yt)}}function X(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const k=.5*(T[0].pageX+T[1].pageX),yt=.5*(T[0].pageY+T[1].pageY);p.set(k,yt)}}function dt(){const k=T[0].pageX-T[1].pageX,yt=T[0].pageY-T[1].pageY,ct=Math.sqrt(k*k+yt*yt);g.set(0,ct)}function q(){n.enableZoom&&dt(),n.enablePan&&X()}function L(){n.enableZoom&&dt(),n.enableRotate&&H()}function $(k){if(T.length==1)d.set(k.pageX,k.pageY);else{const ct=At(k),kt=.5*(k.pageX+ct.x),Ut=.5*(k.pageY+ct.y);d.set(kt,Ut)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const yt=n.domElement;M(2*Math.PI*f.x/yt.clientHeight),I(2*Math.PI*f.y/yt.clientHeight),u.copy(d)}function z(k){if(T.length===1)m.set(k.pageX,k.pageY);else{const yt=At(k),ct=.5*(k.pageX+yt.x),kt=.5*(k.pageY+yt.y);m.set(ct,kt)}v.subVectors(m,p).multiplyScalar(n.panSpeed),G(v.x,v.y),p.copy(m)}function at(k){const yt=At(k),ct=k.pageX-yt.x,kt=k.pageY-yt.y,Ut=Math.sqrt(ct*ct+kt*kt);_.set(0,Ut),x.set(0,Math.pow(_.y/g.y,n.zoomSpeed)),j(x.y),g.copy(_)}function W(k){n.enableZoom&&at(k),n.enablePan&&z(k)}function nt(k){n.enableZoom&&at(k),n.enableRotate&&$(k)}function lt(k){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",ft),n.domElement.addEventListener("pointerup",Tt)),gt(k),k.pointerType==="touch"?K(k):zt(k))}function ft(k){n.enabled!==!1&&(k.pointerType==="touch"?mt(k):Jt(k))}function Tt(k){It(k),T.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",Tt)),n.dispatchEvent(_u),s=i.NONE}function zt(k){let yt;switch(k.button){case 0:yt=n.mouseButtons.LEFT;break;case 1:yt=n.mouseButtons.MIDDLE;break;case 2:yt=n.mouseButtons.RIGHT;break;default:yt=-1}switch(yt){case di.DOLLY:if(n.enableZoom===!1)return;V(k),s=i.DOLLY;break;case di.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;et(k),s=i.PAN}else{if(n.enableRotate===!1)return;ot(k),s=i.ROTATE}break;case di.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;ot(k),s=i.ROTATE}else{if(n.enablePan===!1)return;et(k),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ya)}function Jt(k){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;St(k);break;case i.DOLLY:if(n.enableZoom===!1)return;wt(k);break;case i.PAN:if(n.enablePan===!1)return;tt(k);break}}function O(k){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(k.preventDefault(),n.dispatchEvent(Ya),A(k),n.dispatchEvent(_u))}function w(k){n.enabled===!1||n.enablePan===!1||F(k)}function K(k){switch(vt(k),T.length){case 1:switch(n.touches.ONE){case pi.ROTATE:if(n.enableRotate===!1)return;H(),s=i.TOUCH_ROTATE;break;case pi.PAN:if(n.enablePan===!1)return;X(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(),s=i.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ya)}function mt(k){switch(vt(k),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;$(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;z(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;nt(k),n.update();break;default:s=i.NONE}}function pt(k){n.enabled!==!1&&k.preventDefault()}function gt(k){T.push(k)}function It(k){delete N[k.pointerId];for(let yt=0;yt<T.length;yt++)if(T[yt].pointerId==k.pointerId){T.splice(yt,1);return}}function vt(k){let yt=N[k.pointerId];yt===void 0&&(yt=new rt,N[k.pointerId]=yt),yt.set(k.pageX,k.pageY)}function At(k){const yt=k.pointerId===T[0].pointerId?T[1]:T[0];return N[yt.pointerId]}n.domElement.addEventListener("contextmenu",pt),n.domElement.addEventListener("pointerdown",lt),n.domElement.addEventListener("pointercancel",Tt),n.domElement.addEventListener("wheel",O,{passive:!1}),this.update()}}const Su=new Je,uo=new R;class Kp extends Oc{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Pt(t,3)),this.setAttribute("uv",new Pt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ro(e,6,1);return this.setAttribute("instanceStart",new Ye(n,3,0)),this.setAttribute("instanceEnd",new Ye(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ro(e,6,1);return this.setAttribute("instanceColorStart",new Ye(n,3,0)),this.setAttribute("instanceColorEnd",new Ye(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ac(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Su.setFromBufferAttribute(e),this.boundingBox.union(Su))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)uo.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(uo)),uo.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(uo));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new rt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ke.line={uniforms:Bo.merge([bt.common,bt.fog,bt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Qp extends rn{constructor(t){super({type:"LineMaterial",uniforms:Bo.clone(ke.line.uniforms),vertexShader:ke.line.vertexShader,fragmentShader:ke.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Mu=new R,wu=new R,we=new Qt,Ee=new Qt,cn=new Qt,Za=new R,Ja=new Gt,Ae=new Zp,Eu=new R,po=new Je,fo=new Ke,hn=new Qt;let pn,Ei;function Au(r,t,e){return hn.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),hn.multiplyScalar(1/hn.w),hn.x=Ei/e.width,hn.y=Ei/e.height,hn.applyMatrix4(r.projectionMatrixInverse),hn.multiplyScalar(1/hn.w),Math.abs(Math.max(hn.x,hn.y))}function K_(r,t){const e=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){Ae.start.fromBufferAttribute(i,a),Ae.end.fromBufferAttribute(s,a),Ae.applyMatrix4(e);const l=new R,h=new R;pn.distanceSqToSegment(Ae.start,Ae.end,h,l),h.distanceTo(l)<Ei*.5&&t.push({point:h,pointOnLine:l,distance:pn.origin.distanceTo(h),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function Q_(r,t,e){const n=t.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),u=-t.near;pn.at(1,cn),cn.w=1,cn.applyMatrix4(t.matrixWorldInverse),cn.applyMatrix4(n),cn.multiplyScalar(1/cn.w),cn.x*=s.x/2,cn.y*=s.y/2,cn.z=0,Za.copy(cn),Ja.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(we.fromBufferAttribute(c,d),Ee.fromBufferAttribute(l,d),we.w=1,Ee.w=1,we.applyMatrix4(Ja),Ee.applyMatrix4(Ja),we.z>u&&Ee.z>u)continue;if(we.z>u){const x=we.z-Ee.z,S=(we.z-u)/x;we.lerp(Ee,S)}else if(Ee.z>u){const x=Ee.z-we.z,S=(Ee.z-u)/x;Ee.lerp(we,S)}we.applyMatrix4(n),Ee.applyMatrix4(n),we.multiplyScalar(1/we.w),Ee.multiplyScalar(1/Ee.w),we.x*=s.x/2,we.y*=s.y/2,Ee.x*=s.x/2,Ee.y*=s.y/2,Ae.start.copy(we),Ae.start.z=0,Ae.end.copy(Ee),Ae.end.z=0;const m=Ae.closestPointToPointParameter(Za,!0);Ae.at(m,Eu);const v=cc.lerp(we.z,Ee.z,m),g=v>=-1&&v<=1,_=Za.distanceTo(Eu)<Ei*.5;if(g&&_){Ae.start.fromBufferAttribute(c,d),Ae.end.fromBufferAttribute(l,d),Ae.start.applyMatrix4(o),Ae.end.applyMatrix4(o);const x=new R,S=new R;pn.distanceSqToSegment(Ae.start,Ae.end,S,x),e.push({point:S,pointOnLine:x,distance:pn.origin.distanceTo(S),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}}class tb extends Me{constructor(t=new Kp,e=new Qp({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Mu.fromBufferAttribute(e,o),wu.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Mu.distanceTo(wu);const s=new Ro(i,2,1);return t.setAttribute("instanceDistanceStart",new Ye(s,1,0)),t.setAttribute("instanceDistanceEnd",new Ye(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;pn=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Ei=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),fo.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ei*.5;else{const u=Math.max(i.near,fo.distanceToPoint(pn.origin));l=Au(i,u,c.resolution)}if(fo.radius+=l,pn.intersectsSphere(fo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),po.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Ei*.5;else{const u=Math.max(i.near,po.distanceToPoint(pn.origin));h=Au(i,u,c.resolution)}po.expandByScalar(h),pn.intersectsBox(po)!==!1&&(n?K_(this,e):Q_(this,i,e))}}class eb extends Kp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Tb extends tb{constructor(t=new eb,e=new Qp({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const{abs:Ka}=Math,Cb=function(){let r=Number.MIN_SAFE_INTEGER;return function(){return Number.MAX_SAFE_INTEGER-1<=r&&(r=Number.MIN_SAFE_INTEGER),r+=1,r}}();function Fc(r){return typeof r=="string"?document.getElementById(r):r}function Rb(r,t="value"){return Fc(r).getAttribute(t)}function nb(r,t,e){const n=Fc(r);return e===!1?n.removeAttribute(t):n.setAttribute(t,e),n}function Pb(r,t=[]){const e=document.createElement(r);for(let n=0;n<t.length;n+=2)nb(e,t[n],t[n+1]);return e}function ib(r){return t=>(r(t),!1)}function Tu(r,t,e){const n=Fc(r);return n.addEventListener(t,ib(e)),n}function sb(r){return function(t){["Enter","NumpadEnter"].includes(t.code)&&r(t)}}function Lb(r,t,e){const n=Tu(r,t,e);return Tu(n,"keyup",sb(e)),n}function Ib(r){return`${r.y}-${r.m<10?"0":""}${r.m}-${r.d<10?"0":""}${r.d}`}function rb(r){let t=r<0?-1:1,e=Math.abs(r);for(;360<e;)e-=360;let n=Math.floor(e);const i=60*(e-n);let s=Math.floor(i),o=Math.round(100*(60*(i-s)))/100;return 60<=o&&(o-=60,s+=1),60<=s&&(s-=60,n+=1),{sign:t,degree:n,minute:s,second:o}}function Cu(r){const{sign:t,degree:e,minute:n,second:i}=rb(r);return`${t<0?"-":""}${e}° ${n}' ${i}"`}function Ob(r){return`${r.h} : ${r.m} : ${r.s}`}function Ub(r=0,t=0,e=0){return r*1609.344+t*.3048+e*.0254}function Db(r,t,e){return(Ka(r)+Ka(t)/60+Ka(e)/3600)*(r<0||t<0||e<0?-1:1)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=window,Bc=Mo.ShadowRoot&&(Mo.ShadyCSS===void 0||Mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tf=Symbol(),Ru=new WeakMap;let ob=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==tf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Bc&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Ru.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ru.set(e,t))}return t}toString(){return this.cssText}};const ab=r=>new ob(typeof r=="string"?r:r+"",void 0,tf),lb=(r,t)=>{Bc?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const n=document.createElement("style"),i=Mo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)})},Pu=Bc?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return ab(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qa;const Po=window,Lu=Po.trustedTypes,cb=Lu?Lu.emptyScript:"",Iu=Po.reactiveElementPolyfillSupport,Xl={toAttribute(r,t){switch(t){case Boolean:r=r?cb:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ef=(r,t)=>t!==r&&(t==t||r==r),tl={attribute:!0,type:String,converter:Xl,reflect:!1,hasChanged:ef},ql="finalized";let ns=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const i=this._$Ep(n,e);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,e=tl){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tl}static finalize(){if(this.hasOwnProperty(ql))return!1;this[ql]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(Pu(i))}else t!==void 0&&e.push(Pu(t));return e}static _$Ep(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return lb(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=tl){var i;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Xl).toAttribute(e,n.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Xl;this._$El=s,this[s]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ef)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ns[ql]=!0,ns.elementProperties=new Map,ns.elementStyles=[],ns.shadowRootOptions={mode:"open"},Iu==null||Iu({ReactiveElement:ns}),((Qa=Po.reactiveElementVersions)!==null&&Qa!==void 0?Qa:Po.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var el;const Lo=window,fs=Lo.trustedTypes,Ou=fs?fs.createPolicy("lit-html",{createHTML:r=>r}):void 0,Yl="$lit$",Gn=`lit$${(Math.random()+"").slice(9)}$`,nf="?"+Gn,hb=`<${nf}>`,Ri=document,ar=()=>Ri.createComment(""),lr=r=>r===null||typeof r!="object"&&typeof r!="function",sf=Array.isArray,ub=r=>sf(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",nl=`[ 	
\f\r]`,Is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uu=/-->/g,Du=/>/g,ui=RegExp(`>|${nl}(?:([^\\s"'>=/]+)(${nl}*=${nl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nu=/'/g,ku=/"/g,rf=/^(?:script|style|textarea|title)$/i,db=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),of=db(1),ms=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),Fu=new WeakMap,bi=Ri.createTreeWalker(Ri,129,null,!1);function af(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ou!==void 0?Ou.createHTML(t):t}const pb=(r,t)=>{const e=r.length-1,n=[];let i,s=t===2?"<svg>":"",o=Is;for(let a=0;a<e;a++){const c=r[a];let l,h,u=-1,d=0;for(;d<c.length&&(o.lastIndex=d,h=o.exec(c),h!==null);)d=o.lastIndex,o===Is?h[1]==="!--"?o=Uu:h[1]!==void 0?o=Du:h[2]!==void 0?(rf.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=ui):h[3]!==void 0&&(o=ui):o===ui?h[0]===">"?(o=i??Is,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?ui:h[3]==='"'?ku:Nu):o===ku||o===Nu?o=ui:o===Uu||o===Du?o=Is:(o=ui,i=void 0);const f=o===ui&&r[a+1].startsWith("/>")?" ":"";s+=o===Is?c+hb:u>=0?(n.push(l),c.slice(0,u)+Yl+c.slice(u)+Gn+f):c+Gn+(u===-2?(n.push(void 0),a):f)}return[af(r,s+(r[e]||"<?>")+(t===2?"</svg>":"")),n]};class cr{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,c=this.parts,[l,h]=pb(t,e);if(this.el=cr.createElement(l,n),bi.currentNode=this.el.content,e===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=bi.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(Yl)||d.startsWith(Gn)){const f=h[o++];if(u.push(d),f!==void 0){const p=i.getAttribute(f.toLowerCase()+Yl).split(Gn),m=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?mb:m[1]==="?"?vb:m[1]==="@"?yb:ha})}else c.push({type:6,index:s})}for(const d of u)i.removeAttribute(d)}if(rf.test(i.tagName)){const u=i.textContent.split(Gn),d=u.length-1;if(d>0){i.textContent=fs?fs.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],ar()),bi.nextNode(),c.push({type:2,index:++s});i.append(u[d],ar())}}}else if(i.nodeType===8)if(i.data===nf)c.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(Gn,u+1))!==-1;)c.push({type:7,index:s}),u+=Gn.length-1}s++}}static createElement(t,e){const n=Ri.createElement("template");return n.innerHTML=t,n}}function gs(r,t,e=r,n){var i,s,o,a;if(t===ms)return t;let c=n!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[n]:e._$Cl;const l=lr(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(r),c._$AT(r,e,n)),n!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=c:e._$Cl=c),c!==void 0&&(t=gs(r,c._$AS(r,t.values),c,n)),t}class fb{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Ri).importNode(n,!0);bi.currentNode=s;let o=bi.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new xr(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new xb(o,this,t)),this._$AV.push(h),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=bi.nextNode(),a++)}return bi.currentNode=Ri,s}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class xr{constructor(t,e,n,i){var s;this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gs(this,t,e),lr(t)?t===Se||t==null||t===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):t!==this._$AH&&t!==ms&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ub(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Se&&lr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ri.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=cr.createElement(af(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(n);else{const o=new fb(s,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(t){let e=Fu.get(t.strings);return e===void 0&&Fu.set(t.strings,e=new cr(t)),e}T(t){sf(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const s of t)i===e.length?e.push(n=new xr(this.k(ar()),this.k(ar()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ha{constructor(t,e,n,i,s){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=gs(this,t,e,0),o=!lr(t)||t!==this._$AH&&t!==ms,o&&(this._$AH=t);else{const a=t;let c,l;for(t=s[0],c=0;c<s.length-1;c++)l=gs(this,a[n+c],e,c),l===ms&&(l=this._$AH[c]),o||(o=!lr(l)||l!==this._$AH[c]),l===Se?t=Se:t!==Se&&(t+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(t)}j(t){t===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class mb extends ha{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Se?void 0:t}}const gb=fs?fs.emptyScript:"";class vb extends ha{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Se?this.element.setAttribute(this.name,gb):this.element.removeAttribute(this.name)}}class yb extends ha{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){var n;if((t=(n=gs(this,t,e,0))!==null&&n!==void 0?n:Se)===ms)return;const i=this._$AH,s=t===Se&&i!==Se||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Se&&(i===Se||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class xb{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){gs(this,t)}}const Bu=Lo.litHtmlPolyfillSupport;Bu==null||Bu(cr,xr),((el=Lo.litHtmlVersions)!==null&&el!==void 0?el:Lo.litHtmlVersions=[]).push("2.8.0");const _b=(r,t,e)=>{var n,i;const s=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:t;let o=s._$litPart$;if(o===void 0){const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new xr(t.insertBefore(ar(),a),a,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var il,sl;class cs extends ns{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_b(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ms}}cs.finalized=!0,cs._$litElement$=!0,(il=globalThis.litElementHydrateSupport)===null||il===void 0||il.call(globalThis,{LitElement:cs});const zu=globalThis.litElementPolyfillSupport;zu==null||zu({LitElement:cs});((sl=globalThis.litElementVersions)!==null&&sl!==void 0?sl:globalThis.litElementVersions=[]).push("3.3.3");(function(r){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=r,e.c=t,e.d=function(n,i,s){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:s})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var o in n)e.d(s,o,(function(a){return n[a]}).bind(null,o));return s},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=63)})({0:function(r,t,e){e.d(t,"b",function(){return c}),e.d(t,"c",function(){return n.a}),e.d(t,"a",function(){return N});var n=e(3);const i=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class o{constructor(y,M){if(M!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=y}get styleSheet(){return i&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,c=(b,...y)=>{const M=y.reduce((B,U,G)=>B+(j=>{if(j instanceof o)return j.cssText;if(typeof j=="number")return j;throw Error(`Value passed to 'css' function must be a 'css' function result: ${j}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(U)+b[G+1],b[0]);let I=a.get(M);return I===void 0&&a.set(M,I=new o(M,s)),I},l=i?b=>b:b=>b instanceof CSSStyleSheet?(y=>{let M="";for(const I of y.cssRules)M+=I.cssText;return(I=>new o(I+"",s))(M)})(b):b;var h,u,d,f;const p={toAttribute(b,y){switch(y){case Boolean:b=b?"":null;break;case Object:case Array:b=b==null?b:JSON.stringify(b)}return b},fromAttribute(b,y){let M=b;switch(y){case Boolean:M=b!==null;break;case Number:M=b===null?null:Number(b);break;case Object:case Array:try{M=JSON.parse(b)}catch{M=null}}return M}},m=(b,y)=>y!==b&&(y==y||b==b),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(y){var M;(M=this.v)!==null&&M!==void 0||(this.v=[]),this.v.push(y)}static get observedAttributes(){this.finalize();const y=[];return this.elementProperties.forEach((M,I)=>{const B=this.Πp(I,M);B!==void 0&&(this.Πm.set(B,I),y.push(B))}),y}static createProperty(y,M=v){if(M.state&&(M.attribute=!1),this.finalize(),this.elementProperties.set(y,M),!M.noAccessor&&!this.prototype.hasOwnProperty(y)){const I=typeof y=="symbol"?Symbol():"__"+y,B=this.getPropertyDescriptor(y,I,M);B!==void 0&&Object.defineProperty(this.prototype,y,B)}}static getPropertyDescriptor(y,M,I){return{get(){return this[M]},set(B){const U=this[y];this[M]=B,this.requestUpdate(y,U,I)},configurable:!0,enumerable:!0}}static getPropertyOptions(y){return this.elementProperties.get(y)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const y=Object.getPrototypeOf(this);if(y.finalize(),this.elementProperties=new Map(y.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const M=this.properties,I=[...Object.getOwnPropertyNames(M),...Object.getOwnPropertySymbols(M)];for(const B of I)this.createProperty(B,M[B])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(y){const M=[];if(Array.isArray(y)){const I=new Set(y.flat(1/0).reverse());for(const B of I)M.unshift(l(B))}else y!==void 0&&M.push(l(y));return M}static Πp(y,M){const I=M.attribute;return I===!1?void 0:typeof I=="string"?I:typeof y=="string"?y.toLowerCase():void 0}u(){var y;this.Πg=new Promise(M=>this.enableUpdating=M),this.L=new Map,this.Π_(),this.requestUpdate(),(y=this.constructor.v)===null||y===void 0||y.forEach(M=>M(this))}addController(y){var M,I;((M=this.ΠU)!==null&&M!==void 0?M:this.ΠU=[]).push(y),this.renderRoot!==void 0&&this.isConnected&&((I=y.hostConnected)===null||I===void 0||I.call(y))}removeController(y){var M;(M=this.ΠU)===null||M===void 0||M.splice(this.ΠU.indexOf(y)>>>0,1)}Π_(){this.constructor.elementProperties.forEach((y,M)=>{this.hasOwnProperty(M)&&(this.Πi.set(M,this[M]),delete this[M])})}createRenderRoot(){var y;const M=(y=this.shadowRoot)!==null&&y!==void 0?y:this.attachShadow(this.constructor.shadowRootOptions);return((I,B)=>{i?I.adoptedStyleSheets=B.map(U=>U instanceof CSSStyleSheet?U:U.styleSheet):B.forEach(U=>{const G=document.createElement("style");G.textContent=U.cssText,I.appendChild(G)})})(M,this.constructor.elementStyles),M}connectedCallback(){var y;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(y=this.ΠU)===null||y===void 0||y.forEach(M=>{var I;return(I=M.hostConnected)===null||I===void 0?void 0:I.call(M)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(y){}disconnectedCallback(){var y;(y=this.ΠU)===null||y===void 0||y.forEach(M=>{var I;return(I=M.hostDisconnected)===null||I===void 0?void 0:I.call(M)}),this.Πo=new Promise(M=>this.Πl=M)}attributeChangedCallback(y,M,I){this.K(y,I)}Πj(y,M,I=v){var B,U;const G=this.constructor.Πp(y,I);if(G!==void 0&&I.reflect===!0){const j=((U=(B=I.converter)===null||B===void 0?void 0:B.toAttribute)!==null&&U!==void 0?U:p.toAttribute)(M,I.type);this.Πh=y,j==null?this.removeAttribute(G):this.setAttribute(G,j),this.Πh=null}}K(y,M){var I,B,U;const G=this.constructor,j=G.Πm.get(y);if(j!==void 0&&this.Πh!==j){const J=G.getPropertyOptions(j),ht=J.converter,Q=(U=(B=(I=ht)===null||I===void 0?void 0:I.fromAttribute)!==null&&B!==void 0?B:typeof ht=="function"?ht:null)!==null&&U!==void 0?U:p.fromAttribute;this.Πh=j,this[j]=Q(M,J.type),this.Πh=null}}requestUpdate(y,M,I){let B=!0;y!==void 0&&(((I=I||this.constructor.getPropertyOptions(y)).hasChanged||m)(this[y],M)?(this.L.has(y)||this.L.set(y,M),I.reflect===!0&&this.Πh!==y&&(this.Πk===void 0&&(this.Πk=new Map),this.Πk.set(y,I))):B=!1),!this.isUpdatePending&&B&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(M){Promise.reject(M)}const y=this.performUpdate();return y!=null&&await y,!this.isUpdatePending}performUpdate(){var y;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((B,U)=>this[U]=B),this.Πi=void 0);let M=!1;const I=this.L;try{M=this.shouldUpdate(I),M?(this.willUpdate(I),(y=this.ΠU)===null||y===void 0||y.forEach(B=>{var U;return(U=B.hostUpdate)===null||U===void 0?void 0:U.call(B)}),this.update(I)):this.Π$()}catch(B){throw M=!1,this.Π$(),B}M&&this.E(I)}willUpdate(y){}E(y){var M;(M=this.ΠU)===null||M===void 0||M.forEach(I=>{var B;return(B=I.hostUpdated)===null||B===void 0?void 0:B.call(I)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(y)),this.updated(y)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(y){return!0}update(y){this.Πk!==void 0&&(this.Πk.forEach((M,I)=>this.Πj(I,this[I],M)),this.Πk=void 0),this.Π$()}updated(y){}firstUpdated(y){}}var _,x,S,E,C,T;g.finalized=!0,g.shadowRootOptions={mode:"open"},(u=(h=globalThis).reactiveElementPlatformSupport)===null||u===void 0||u.call(h,{ReactiveElement:g}),((d=(f=globalThis).reactiveElementVersions)!==null&&d!==void 0?d:f.reactiveElementVersions=[]).push("1.0.0-rc.1"),((_=(T=globalThis).litElementVersions)!==null&&_!==void 0?_:T.litElementVersions=[]).push("3.0.0-rc.1");class N extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var y,M;const I=super.createRenderRoot();return(y=(M=this.renderOptions).renderBefore)!==null&&y!==void 0||(M.renderBefore=I.firstChild),I}update(y){const M=this.render();super.update(y),this.Φt=Object(n.d)(M,this.renderRoot,this.renderOptions)}connectedCallback(){var y;super.connectedCallback(),(y=this.Φt)===null||y===void 0||y.setConnected(!0)}disconnectedCallback(){var y;super.disconnectedCallback(),(y=this.Φt)===null||y===void 0||y.setConnected(!1)}render(){return n.b}}N.finalized=!0,N._$litElement$=!0,(S=(x=globalThis).litElementHydrateSupport)===null||S===void 0||S.call(x,{LitElement:N}),(C=(E=globalThis).litElementPlatformSupport)===null||C===void 0||C.call(E,{LitElement:N})},1:function(r,t,e){e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s});const n=(o,a)=>a.kind==="method"&&a.descriptor&&!("value"in a.descriptor)?{...a,finisher(c){c.createProperty(a.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){typeof a.initializer=="function"&&(this[a.key]=a.initializer.call(this))},finisher(c){c.createProperty(a.key,o)}};function i(o){return(a,c)=>c!==void 0?((l,h,u)=>{h.constructor.createProperty(u,l)})(o,a,c):n(o,a)}function s(o){return i({...o,state:!0,attribute:!1})}},2:function(r,t,e){e.d(t,"a",function(){return n});const n=e(0).b`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},3:function(r,t,e){var n,i,s,o;e.d(t,"a",function(){return b}),e.d(t,"b",function(){return y}),e.d(t,"c",function(){return M}),e.d(t,"d",function(){return B});const a=globalThis.trustedTypes,c=a?a.createPolicy("lit-html",{createHTML:tt=>tt}):void 0,l=`lit$${(Math.random()+"").slice(9)}$`,h="?"+l,u=`<${h}>`,d=document,f=(tt="")=>d.createComment(tt),p=tt=>tt===null||typeof tt!="object"&&typeof tt!="function",m=Array.isArray,v=tt=>{var A;return m(tt)||typeof((A=tt)===null||A===void 0?void 0:A[Symbol.iterator])=="function"},g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,x=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,C=/"/g,T=/^(?:script|style|textarea)$/i,N=tt=>(A,...F)=>({_$litType$:tt,strings:A,values:F}),b=N(1),y=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),I=new WeakMap,B=(tt,A,F)=>{var H,X;const dt=(H=F==null?void 0:F.renderBefore)!==null&&H!==void 0?H:A;let q=dt._$litPart$;if(q===void 0){const L=(X=F==null?void 0:F.renderBefore)!==null&&X!==void 0?X:null;dt._$litPart$=q=new Q(A.insertBefore(f(),L),L,void 0,F)}return q.I(tt),q},U=d.createTreeWalker(d,129,null,!1),G=(tt,A)=>{const F=tt.length-1,H=[];let X,dt=A===2?"<svg>":"",q=g;for(let $=0;$<F;$++){const z=tt[$];let at,W,nt=-1,lt=0;for(;lt<z.length&&(q.lastIndex=lt,W=q.exec(z),W!==null);)lt=q.lastIndex,q===g?W[1]==="!--"?q=_:W[1]!==void 0?q=x:W[2]!==void 0?(T.test(W[2])&&(X=RegExp("</"+W[2],"g")),q=S):W[3]!==void 0&&(q=S):q===S?W[0]===">"?(q=X??g,nt=-1):W[1]===void 0?nt=-2:(nt=q.lastIndex-W[2].length,at=W[1],q=W[3]===void 0?S:W[3]==='"'?C:E):q===C||q===E?q=S:q===_||q===x?q=g:(q=S,X=void 0);const ft=q===S&&tt[$+1].startsWith("/>")?" ":"";dt+=q===g?z+u:nt>=0?(H.push(at),z.slice(0,nt)+"$lit$"+z.slice(nt)+l+ft):z+l+(nt===-2?(H.push(void 0),$):ft)}const L=dt+(tt[F]||"<?>")+(A===2?"</svg>":"");return[c!==void 0?c.createHTML(L):L,H]};class j{constructor({strings:A,_$litType$:F},H){let X;this.parts=[];let dt=0,q=0;const L=A.length-1,$=this.parts,[z,at]=G(A,F);if(this.el=j.createElement(z,H),U.currentNode=this.el.content,F===2){const W=this.el.content,nt=W.firstChild;nt.remove(),W.append(...nt.childNodes)}for(;(X=U.nextNode())!==null&&$.length<L;){if(X.nodeType===1){if(X.hasAttributes()){const W=[];for(const nt of X.getAttributeNames())if(nt.endsWith("$lit$")||nt.startsWith(l)){const lt=at[q++];if(W.push(nt),lt!==void 0){const ft=X.getAttribute(lt.toLowerCase()+"$lit$").split(l),Tt=/([.?@])?(.*)/.exec(lt);$.push({type:1,index:dt,name:Tt[2],strings:ft,ctor:Tt[1]==="."?V:Tt[1]==="?"?et:Tt[1]==="@"?St:ot})}else $.push({type:6,index:dt})}for(const nt of W)X.removeAttribute(nt)}if(T.test(X.tagName)){const W=X.textContent.split(l),nt=W.length-1;if(nt>0){X.textContent=a?a.emptyScript:"";for(let lt=0;lt<nt;lt++)X.append(W[lt],f()),U.nextNode(),$.push({type:2,index:++dt});X.append(W[nt],f())}}}else if(X.nodeType===8)if(X.data===h)$.push({type:2,index:dt});else{let W=-1;for(;(W=X.data.indexOf(l,W+1))!==-1;)$.push({type:7,index:dt}),W+=l.length-1}dt++}}static createElement(A,F){const H=d.createElement("template");return H.innerHTML=A,H}}function J(tt,A,F=tt,H){var X,dt,q,L;if(A===y)return A;let $=H!==void 0?(X=F.Σi)===null||X===void 0?void 0:X[H]:F.Σo;const z=p(A)?void 0:A._$litDirective$;return($==null?void 0:$.constructor)!==z&&((dt=$==null?void 0:$.O)===null||dt===void 0||dt.call($,!1),z===void 0?$=void 0:($=new z(tt),$.T(tt,F,H)),H!==void 0?((q=(L=F).Σi)!==null&&q!==void 0?q:L.Σi=[])[H]=$:F.Σo=$),$!==void 0&&(A=J(tt,$.S(tt,A.values),$,H)),A}class ht{constructor(A,F){this.l=[],this.N=void 0,this.D=A,this.M=F}u(A){var F;const{el:{content:H},parts:X}=this.D,dt=((F=A==null?void 0:A.creationScope)!==null&&F!==void 0?F:d).importNode(H,!0);U.currentNode=dt;let q=U.nextNode(),L=0,$=0,z=X[0];for(;z!==void 0;){if(L===z.index){let at;z.type===2?at=new Q(q,q.nextSibling,this,A):z.type===1?at=new z.ctor(q,z.name,z.strings,this,A):z.type===6&&(at=new wt(q,this,A)),this.l.push(at),z=X[++$]}L!==(z==null?void 0:z.index)&&(q=U.nextNode(),L++)}return dt}v(A){let F=0;for(const H of this.l)H!==void 0&&(H.strings!==void 0?(H.I(A,H,F),F+=H.strings.length-2):H.I(A[F])),F++}}class Q{constructor(A,F,H,X){this.type=2,this.N=void 0,this.A=A,this.B=F,this.M=H,this.options=X}setConnected(A){var F;(F=this.P)===null||F===void 0||F.call(this,A)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(A,F=this){A=J(this,A,F),p(A)?A===M||A==null||A===""?(this.H!==M&&this.R(),this.H=M):A!==this.H&&A!==y&&this.m(A):A._$litType$!==void 0?this._(A):A.nodeType!==void 0?this.$(A):v(A)?this.g(A):this.m(A)}k(A,F=this.B){return this.A.parentNode.insertBefore(A,F)}$(A){this.H!==A&&(this.R(),this.H=this.k(A))}m(A){const F=this.A.nextSibling;F!==null&&F.nodeType===3&&(this.B===null?F.nextSibling===null:F===this.B.previousSibling)?F.data=A:this.$(d.createTextNode(A)),this.H=A}_(A){var F;const{values:H,_$litType$:X}=A,dt=typeof X=="number"?this.C(A):(X.el===void 0&&(X.el=j.createElement(X.h,this.options)),X);if(((F=this.H)===null||F===void 0?void 0:F.D)===dt)this.H.v(H);else{const q=new ht(dt,this),L=q.u(this.options);q.v(H),this.$(L),this.H=q}}C(A){let F=I.get(A.strings);return F===void 0&&I.set(A.strings,F=new j(A)),F}g(A){m(this.H)||(this.H=[],this.R());const F=this.H;let H,X=0;for(const dt of A)X===F.length?F.push(H=new Q(this.k(f()),this.k(f()),this,this.options)):H=F[X],H.I(dt),X++;X<F.length&&(this.R(H&&H.B.nextSibling,X),F.length=X)}R(A=this.A.nextSibling,F){var H;for((H=this.P)===null||H===void 0||H.call(this,!1,!0,F);A&&A!==this.B;){const X=A.nextSibling;A.remove(),A=X}}}class ot{constructor(A,F,H,X,dt){this.type=1,this.H=M,this.N=void 0,this.V=void 0,this.element=A,this.name=F,this.M=X,this.options=dt,H.length>2||H[0]!==""||H[1]!==""?(this.H=Array(H.length-1).fill(M),this.strings=H):this.H=M}get tagName(){return this.element.tagName}I(A,F=this,H,X){const dt=this.strings;let q=!1;if(dt===void 0)A=J(this,A,F,0),q=!p(A)||A!==this.H&&A!==y,q&&(this.H=A);else{const L=A;let $,z;for(A=dt[0],$=0;$<dt.length-1;$++)z=J(this,L[H+$],F,$),z===y&&(z=this.H[$]),q||(q=!p(z)||z!==this.H[$]),z===M?A=M:A!==M&&(A+=(z??"")+dt[$+1]),this.H[$]=z}q&&!X&&this.W(A)}W(A){A===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,A??"")}}class V extends ot{constructor(){super(...arguments),this.type=3}W(A){this.element[this.name]=A===M?void 0:A}}class et extends ot{constructor(){super(...arguments),this.type=4}W(A){A&&A!==M?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class St extends ot{constructor(){super(...arguments),this.type=5}I(A,F=this){var H;if((A=(H=J(this,A,F,0))!==null&&H!==void 0?H:M)===y)return;const X=this.H,dt=A===M&&X!==M||A.capture!==X.capture||A.once!==X.once||A.passive!==X.passive,q=A!==M&&(X===M||dt);dt&&this.element.removeEventListener(this.name,this,X),q&&this.element.addEventListener(this.name,this,A),this.H=A}handleEvent(A){var F,H;typeof this.H=="function"?this.H.call((H=(F=this.options)===null||F===void 0?void 0:F.host)!==null&&H!==void 0?H:this.element,A):this.H.handleEvent(A)}}class wt{constructor(A,F,H){this.element=A,this.type=6,this.N=void 0,this.V=void 0,this.M=F,this.options=H}I(A){J(this,A)}}(i=(n=globalThis).litHtmlPlatformSupport)===null||i===void 0||i.call(n,j,Q),((s=(o=globalThis).litHtmlVersions)!==null&&s!==void 0?s:o.litHtmlVersions=[]).push("2.0.0-rc.2")},4:function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p};class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[s.a,n.b`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){var l;return n.c` ${!((l=this.icon)===null||l===void 0)&&l.indexOf("url")?n.c` ${this.icon} `:""}`}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed")),l=="color"&&this.color?this.style.color=this.color:l=="icon"&&u.indexOf("url")>-1&&this.setBackgroundImage(u)}setBackgroundImage(l){this.style.backgroundImage=l}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",a)},49:function(r,t,e){e.d(t,"a",function(){return l});var n=e(0),i=e(3);const s=h=>h??i.c;var o=e(1),a=e(2),c=(e(9),e(5),function(h,u,d,f){var p,m=arguments.length,v=m<3?u:f===null?f=Object.getOwnPropertyDescriptor(u,d):f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(h,u,d,f);else for(var g=h.length-1;g>=0;g--)(p=h[g])&&(v=(m<3?p(v):m>3?p(u,d,v):p(u,d))||v);return m>3&&v&&Object.defineProperty(u,d,v),v});class l extends n.a{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",u=>{var d,f;this.active&&this.type==="select"?this.closeSelectMenu(u):this.active||(this.active=!0,this.type==="select"||this.disabled||this.readonly||(f=(d=this.shadowRoot)===null||d===void 0?void 0:d.querySelector("input"))===null||f===void 0||f.focus())})}static get styles(){return[a.a,n.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px var(--spacing-l);
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 calc(var(--spacing-s) * -1);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* date */
        .date-icon {
          margin-left: -24px;
          pointer-events: none;
        }
        :host([type='date']) ::-webkit-calendar-picker-indicator {
          background: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return n.c`
      ${this.icon?n.c` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?n.c` <label class="label">${this.label}</label> `:""}
        <input
          .type="${this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step.toString()}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||this.type==="select"}"
          min="${s(this.min)}"
          max="${s(this.max)}"
          pattern="${s(this.pattern)}"
          name="${s(this.name)}"
          @input="${this.handleChange}"
          @focus="${()=>this.type==="select"||this.active?"":this.active=!0}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${this.type==="select"?n.c`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?n.c`
                  <kor-card
                    @click="${u=>{this.active=!1,u.stopPropagation()}}"
                    @wheel="${u=>u.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date -->
      ${this.type==="date"?n.c` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||this.type==="select"?"":n.c`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?n.c`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${this.type!=="number"||this.readonly?"":n.c`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${()=>this.handleIncrement("left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${()=>this.handleIncrement("right")}"
            ></kor-icon>
          `}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}handleChange(u){this.value=u.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleBlur(u){this.type==="number"&&this.validateMinMax(u.target.value),this.type!=="select"&&(this.active=!1)}handleIncrement(u){u==="left"?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):u==="right"&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(u){const d=u.target.assignedNodes();d.forEach(f=>{f.tagName==="KOR-MENU-ITEM"&&f.addEventListener("active-changed",p=>{p.target.active&&(d.forEach(m=>{m.active=!1}),p.target.active=!0,this.value=f.label,this.active=!1)})})}attributeChangedCallback(u,d,f){super.attributeChangedCallback(u,d,f),this.dispatchEvent(new Event(u+"-changed")),u==="active"&&this.active&&this.type==="select"&&this.handleMenu()}handleMenu(){const u=this.parentElement,d=()=>{this.active=!1,u==null||u.removeEventListener("wheel",d)};u==null||u.addEventListener("wheel",d)}closeSelectMenu(u){this.type==="select"&&this.active&&(u.stopImmediatePropagation(),this.active=!1)}validateMinMax(u){u&&(this.min&&u<parseInt(this.min)?this.value=this.min:this.max&&u>parseInt(this.max)?this.value=this.max:this.value=u.toString())}getStatusIcon(){let u;switch(this.status){case"error":u="cancel";break;case"warning":u="error";break;case"success":u="check_circle"}return u}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}c([Object(o.a)({type:String,reflect:!0})],l.prototype,"label",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"icon",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"value",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"name",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"type",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"status",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"condensed",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"active",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"readonly",void 0),c([Object(o.a)({type:Boolean,reflect:!0,attribute:"no-clear"})],l.prototype,"noClear",void 0),c([Object(o.a)({type:Boolean,reflect:!0})],l.prototype,"autofocus",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"pattern",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"min",void 0),c([Object(o.a)({type:String,reflect:!0})],l.prototype,"max",void 0),c([Object(o.a)({type:Number,reflect:!0})],l.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",l)},5:function(r,t,e){e.r(t);var n=e(4);e.d(t,"korIcon",function(){return n.a})},63:function(r,t,e){e.r(t);var n=e(49);e.d(t,"korInput",function(){return n.a})},8:function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),s=e(2),o=(e(5),function(c,l,h,u){var d,f=arguments.length,p=f<3?l:u===null?u=Object.getOwnPropertyDescriptor(l,h):u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(c,l,h,u);else for(var m=c.length-1;m>=0;m--)(d=c[m])&&(p=(f<3?d(p):f>3?d(l,h,p):d(l,h))||p);return f>3&&p&&Object.defineProperty(l,h,p),p});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[s.a,n.b`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return n.c`
      ${this.image?n.c` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?n.c`
                <div class="label">
                  ${this.icon?n.c` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":n.c` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${l=>this.emptyHeader=l.target.assignedNodes().length===0}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${l=>this.emptyFunctions=l.target.assignedNodes().length===0}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${l=>this.emptyFooter=l.target.assignedNodes().length===0}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(l,h,u){super.attributeChangedCallback(l,h,u),this.dispatchEvent(new Event(l+"-changed"))}}o([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),o([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),o([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),o([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),o([Object(i.b)()],a.prototype,"emptyHeader",void 0),o([Object(i.b)()],a.prototype,"emptyFunctions",void 0),o([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",a)},9:function(r,t,e){e.r(t);var n=e(8);e.d(t,"korCard",function(){return n.a})}});function bb(r){const t=`${r}`.replace(/^[^-.0-9]*/,"").replace(/[^.0-9SsWw]*$/,"");let e=t.startsWith("-")?-1:1;(t.includes("S")||t.includes("s")||t.includes("W")||t.includes("w"))&&(e=-1);const n=t.replace(/^[^.0-9]*/,"").split(/[^.0-9]+/);let i=parseFloat(n[0]),s=parseFloat(n[1]),o=parseFloat(n[2]);isNaN(i)&&(i=0),isNaN(s)&&(s=0),isNaN(o)&&(o=0);const a=Math.abs(i),c=Math.abs(s),l=Math.abs(o);return e*(a+c/60+l/3600)}function Sb(r,t,e){return t<r?r:t<e?t:e}class lf extends cs{constructor(){super(),this.disabled=!1,this.value=0,this.min=-360,this.max=360}render(){return of`
            <kor-input
                .disabled="${this.disabled}"
                type="text"
                label="Degrees : Minutes : Seconds"
                value="${Cu(this.value)}"
                no-clear
                tabindex="0"
                @blur="${this._blurHandler}"
                @keyup="${this._blurHandler}"
            ></kor-input>`}_blurHandler(t){(t.type=="blur"||t.type=="keyup"&&["Enter","NumpadEnter"].includes(t.code))&&(this.value=Sb(this.min,bb(t.target.value),this.max),this.shadowRoot.querySelector("kor-input").value=Cu(this.value))}}ma(lf,"properties",{value:{type:Number},min:{type:Number},max:{type:Number},disabled:{type:Boolean}});customElements.define("degree-input",lf);function Mb(r){const e=`${r}`.replace(/^[^0-9]*/,"").replace(/[^0-9]*$/,"").replace(/^[^0-9]*/,"").split(/[^0-9]+/);let n=parseInt(e[0],10),i=parseInt(e[1],10),s=parseInt(e[2],10);isNaN(n)&&(n=0),isNaN(i)&&(i=0),isNaN(s)&&(s=0),25*3600<n*3600+i*60+s&&(n=24,i=0,s=0);const o=Math.abs(n),a=Math.abs(i),c=Math.abs(s);return{h:o,m:a,s:c}}function Hu({h:r,m:t,s:e}){return`${r<10?"0":""}${r} : ${t<10?"0":""}${t} : ${e<10?"0":""}${e}`}class cf extends cs{constructor(){super(),this.value={h:0,m:0,s:0}}render(){return of`
            <kor-input
                type="text"
                label="Hours : Minutes : Seconds"
                value="${Hu(this.value)}"
                no-clear
                tabindex="0"
                @blur="${this._blurHandler}"
                @keyup="${this._blurHandler}"
            ></kor-input>`}_blurHandler(t){(t.type=="blur"||t.type=="keyup"&&["Enter","NumpadEnter"].includes(t.code))&&(this.value=Mb(t.target.value),this.shadowRoot.querySelector("kor-input").value=Hu(this.value))}}ma(cf,"properties",{value:{type:Object,reflect:!1}});customElements.define("time-input",cf);export{Eb as $,Hp as A,Fe as B,xs as C,i_ as D,Yo as E,fn as F,rs as G,hs as H,Rb as I,Cu as J,Ob as K,vn as L,Gt as M,qe as N,te as O,Bp as P,ib as Q,Vs as R,ye as S,s_ as T,vc as U,R as V,ip as W,fr as X,ap as Y,Wu as Z,q_ as _,Am as a,de as b,rt as c,rp as d,Qp as e,Me as f,vr as g,Tc as h,dn as i,zs as j,wp as k,Jn as l,eb as m,Tb as n,Te as o,Ab as p,rb as q,Ub as r,Db as s,nb as t,Fc as u,Pb as v,Ib as w,Lb as x,Tu as y,Cb as z};
