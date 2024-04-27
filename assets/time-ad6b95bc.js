var Fl=Object.defineProperty;var Bl=(r,t,e)=>t in r?Fl(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var kr=(r,t,e)=>(Bl(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();(function(r){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=r,e.c=t,e.d=function(n,i,o){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:o})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var l in n)e.d(o,l,(function(a){return n[a]}).bind(null,l));return o},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=83)})([function(r,t,e){e.d(t,"b",function(){return h}),e.d(t,"c",function(){return n.a}),e.d(t,"a",function(){return V});var n=e(3);const i=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol();class l{constructor(_,x){if(x!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=_}get styleSheet(){return i&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,h=(b,..._)=>{const x=_.reduce((F,R,H)=>F+($=>{if($ instanceof l)return $.cssText;if(typeof $=="number")return $;throw Error(`Value passed to 'css' function must be a 'css' function result: ${$}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(R)+b[H+1],b[0]);let T=a.get(x);return T===void 0&&a.set(x,T=new l(x,o)),T},s=i?b=>b:b=>b instanceof CSSStyleSheet?(_=>{let x="";for(const T of _.cssRules)x+=T.cssText;return(T=>new l(T+"",o))(x)})(b):b;var c,d,u,p;const f={toAttribute(b,_){switch(_){case Boolean:b=b?"":null;break;case Object:case Array:b=b==null?b:JSON.stringify(b)}return b},fromAttribute(b,_){let x=b;switch(_){case Boolean:x=b!==null;break;case Number:x=b===null?null:Number(b);break;case Object:case Array:try{x=JSON.parse(b)}catch{x=null}}return x}},g=(b,_)=>_!==b&&(_==_||b==b),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(_){var x;(x=this.v)!==null&&x!==void 0||(this.v=[]),this.v.push(_)}static get observedAttributes(){this.finalize();const _=[];return this.elementProperties.forEach((x,T)=>{const F=this.Πp(T,x);F!==void 0&&(this.Πm.set(F,T),_.push(F))}),_}static createProperty(_,x=v){if(x.state&&(x.attribute=!1),this.finalize(),this.elementProperties.set(_,x),!x.noAccessor&&!this.prototype.hasOwnProperty(_)){const T=typeof _=="symbol"?Symbol():"__"+_,F=this.getPropertyDescriptor(_,T,x);F!==void 0&&Object.defineProperty(this.prototype,_,F)}}static getPropertyDescriptor(_,x,T){return{get(){return this[x]},set(F){const R=this[_];this[x]=F,this.requestUpdate(_,R,T)},configurable:!0,enumerable:!0}}static getPropertyOptions(_){return this.elementProperties.get(_)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const _=Object.getPrototypeOf(this);if(_.finalize(),this.elementProperties=new Map(_.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const x=this.properties,T=[...Object.getOwnPropertyNames(x),...Object.getOwnPropertySymbols(x)];for(const F of T)this.createProperty(F,x[F])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(_){const x=[];if(Array.isArray(_)){const T=new Set(_.flat(1/0).reverse());for(const F of T)x.unshift(s(F))}else _!==void 0&&x.push(s(_));return x}static Πp(_,x){const T=x.attribute;return T===!1?void 0:typeof T=="string"?T:typeof _=="string"?_.toLowerCase():void 0}u(){var _;this.Πg=new Promise(x=>this.enableUpdating=x),this.L=new Map,this.Π_(),this.requestUpdate(),(_=this.constructor.v)===null||_===void 0||_.forEach(x=>x(this))}addController(_){var x,T;((x=this.ΠU)!==null&&x!==void 0?x:this.ΠU=[]).push(_),this.renderRoot!==void 0&&this.isConnected&&((T=_.hostConnected)===null||T===void 0||T.call(_))}removeController(_){var x;(x=this.ΠU)===null||x===void 0||x.splice(this.ΠU.indexOf(_)>>>0,1)}Π_(){this.constructor.elementProperties.forEach((_,x)=>{this.hasOwnProperty(x)&&(this.Πi.set(x,this[x]),delete this[x])})}createRenderRoot(){var _;const x=(_=this.shadowRoot)!==null&&_!==void 0?_:this.attachShadow(this.constructor.shadowRootOptions);return((T,F)=>{i?T.adoptedStyleSheets=F.map(R=>R instanceof CSSStyleSheet?R:R.styleSheet):F.forEach(R=>{const H=document.createElement("style");H.textContent=R.cssText,T.appendChild(H)})})(x,this.constructor.elementStyles),x}connectedCallback(){var _;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(_=this.ΠU)===null||_===void 0||_.forEach(x=>{var T;return(T=x.hostConnected)===null||T===void 0?void 0:T.call(x)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(_){}disconnectedCallback(){var _;(_=this.ΠU)===null||_===void 0||_.forEach(x=>{var T;return(T=x.hostDisconnected)===null||T===void 0?void 0:T.call(x)}),this.Πo=new Promise(x=>this.Πl=x)}attributeChangedCallback(_,x,T){this.K(_,T)}Πj(_,x,T=v){var F,R;const H=this.constructor.Πp(_,T);if(H!==void 0&&T.reflect===!0){const $=((R=(F=T.converter)===null||F===void 0?void 0:F.toAttribute)!==null&&R!==void 0?R:f.toAttribute)(x,T.type);this.Πh=_,$==null?this.removeAttribute(H):this.setAttribute(H,$),this.Πh=null}}K(_,x){var T,F,R;const H=this.constructor,$=H.Πm.get(_);if($!==void 0&&this.Πh!==$){const Y=H.getPropertyOptions($),ot=Y.converter,Z=(R=(F=(T=ot)===null||T===void 0?void 0:T.fromAttribute)!==null&&F!==void 0?F:typeof ot=="function"?ot:null)!==null&&R!==void 0?R:f.fromAttribute;this.Πh=$,this[$]=Z(x,Y.type),this.Πh=null}}requestUpdate(_,x,T){let F=!0;_!==void 0&&(((T=T||this.constructor.getPropertyOptions(_)).hasChanged||g)(this[_],x)?(this.L.has(_)||this.L.set(_,x),T.reflect===!0&&this.Πh!==_&&(this.Πk===void 0&&(this.Πk=new Map),this.Πk.set(_,T))):F=!1),!this.isUpdatePending&&F&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(x){Promise.reject(x)}const _=this.performUpdate();return _!=null&&await _,!this.isUpdatePending}performUpdate(){var _;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((F,R)=>this[R]=F),this.Πi=void 0);let x=!1;const T=this.L;try{x=this.shouldUpdate(T),x?(this.willUpdate(T),(_=this.ΠU)===null||_===void 0||_.forEach(F=>{var R;return(R=F.hostUpdate)===null||R===void 0?void 0:R.call(F)}),this.update(T)):this.Π$()}catch(F){throw x=!1,this.Π$(),F}x&&this.E(T)}willUpdate(_){}E(_){var x;(x=this.ΠU)===null||x===void 0||x.forEach(T=>{var F;return(F=T.hostUpdated)===null||F===void 0?void 0:F.call(T)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(_)),this.updated(_)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(_){return!0}update(_){this.Πk!==void 0&&(this.Πk.forEach((x,T)=>this.Πj(T,this[T],x)),this.Πk=void 0),this.Π$()}updated(_){}firstUpdated(_){}}var A,S,C,P,U,L;m.finalized=!0,m.shadowRootOptions={mode:"open"},(d=(c=globalThis).reactiveElementPlatformSupport)===null||d===void 0||d.call(c,{ReactiveElement:m}),((u=(p=globalThis).reactiveElementVersions)!==null&&u!==void 0?u:p.reactiveElementVersions=[]).push("1.0.0-rc.1"),((A=(L=globalThis).litElementVersions)!==null&&A!==void 0?A:L.litElementVersions=[]).push("3.0.0-rc.1");class V extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var _,x;const T=super.createRenderRoot();return(_=(x=this.renderOptions).renderBefore)!==null&&_!==void 0||(x.renderBefore=T.firstChild),T}update(_){const x=this.render();super.update(_),this.Φt=Object(n.d)(x,this.renderRoot,this.renderOptions)}connectedCallback(){var _;super.connectedCallback(),(_=this.Φt)===null||_===void 0||_.setConnected(!0)}disconnectedCallback(){var _;super.disconnectedCallback(),(_=this.Φt)===null||_===void 0||_.setConnected(!1)}render(){return n.b}}V.finalized=!0,V._$litElement$=!0,(C=(S=globalThis).litElementHydrateSupport)===null||C===void 0||C.call(S,{LitElement:V}),(U=(P=globalThis).litElementPlatformSupport)===null||U===void 0||U.call(P,{LitElement:V})},function(r,t,e){e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});const n=(l,a)=>a.kind==="method"&&a.descriptor&&!("value"in a.descriptor)?{...a,finisher(h){h.createProperty(a.key,l)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){typeof a.initializer=="function"&&(this[a.key]=a.initializer.call(this))},finisher(h){h.createProperty(a.key,l)}};function i(l){return(a,h)=>h!==void 0?((s,c,d)=>{c.constructor.createProperty(d,s)})(l,a,h):n(l,a)}function o(l){return i({...l,state:!0,attribute:!1})}},function(r,t,e){e.d(t,"a",function(){return n});const n=e(0).b`
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
`},function(r,t,e){var n,i,o,l;e.d(t,"a",function(){return b}),e.d(t,"b",function(){return _}),e.d(t,"c",function(){return x}),e.d(t,"d",function(){return F});const a=globalThis.trustedTypes,h=a?a.createPolicy("lit-html",{createHTML:K=>K}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,d=`<${c}>`,u=document,p=(K="")=>u.createComment(K),f=K=>K===null||typeof K!="object"&&typeof K!="function",g=Array.isArray,v=K=>{var E;return g(K)||typeof((E=K)===null||E===void 0?void 0:E[Symbol.iterator])=="function"},m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,U=/"/g,L=/^(?:script|style|textarea)$/i,V=K=>(E,...I)=>({_$litType$:K,strings:E,values:I}),b=V(1),_=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),T=new WeakMap,F=(K,E,I)=>{var B,G;const ht=(B=I==null?void 0:I.renderBefore)!==null&&B!==void 0?B:E;let X=ht._$litPart$;if(X===void 0){const N=(G=I==null?void 0:I.renderBefore)!==null&&G!==void 0?G:null;ht._$litPart$=X=new Z(E.insertBefore(p(),N),N,void 0,I)}return X.I(K),X},R=u.createTreeWalker(u,129,null,!1),H=(K,E)=>{const I=K.length-1,B=[];let G,ht=E===2?"<svg>":"",X=m;for(let at=0;at<I;at++){const et=K[at];let wt,it,lt=-1,bt=0;for(;bt<et.length&&(X.lastIndex=bt,it=X.exec(et),it!==null);)bt=X.lastIndex,X===m?it[1]==="!--"?X=A:it[1]!==void 0?X=S:it[2]!==void 0?(L.test(it[2])&&(G=RegExp("</"+it[2],"g")),X=C):it[3]!==void 0&&(X=C):X===C?it[0]===">"?(X=G??m,lt=-1):it[1]===void 0?lt=-2:(lt=X.lastIndex-it[2].length,wt=it[1],X=it[3]===void 0?C:it[3]==='"'?U:P):X===U||X===P?X=C:X===A||X===S?X=m:(X=C,G=void 0);const Mt=X===C&&K[at+1].startsWith("/>")?" ":"";ht+=X===m?et+d:lt>=0?(B.push(wt),et.slice(0,lt)+"$lit$"+et.slice(lt)+s+Mt):et+s+(lt===-2?(B.push(void 0),at):Mt)}const N=ht+(K[I]||"<?>")+(E===2?"</svg>":"");return[h!==void 0?h.createHTML(N):N,B]};class ${constructor({strings:E,_$litType$:I},B){let G;this.parts=[];let ht=0,X=0;const N=E.length-1,at=this.parts,[et,wt]=H(E,I);if(this.el=$.createElement(et,B),R.currentNode=this.el.content,I===2){const it=this.el.content,lt=it.firstChild;lt.remove(),it.append(...lt.childNodes)}for(;(G=R.nextNode())!==null&&at.length<N;){if(G.nodeType===1){if(G.hasAttributes()){const it=[];for(const lt of G.getAttributeNames())if(lt.endsWith("$lit$")||lt.startsWith(s)){const bt=wt[X++];if(it.push(lt),bt!==void 0){const Mt=G.getAttribute(bt.toLowerCase()+"$lit$").split(s),Ot=/([.?@])?(.*)/.exec(bt);at.push({type:1,index:ht,name:Ot[2],strings:Mt,ctor:Ot[1]==="."?z:Ot[1]==="?"?tt:Ot[1]==="@"?_t:nt})}else at.push({type:6,index:ht})}for(const lt of it)G.removeAttribute(lt)}if(L.test(G.tagName)){const it=G.textContent.split(s),lt=it.length-1;if(lt>0){G.textContent=a?a.emptyScript:"";for(let bt=0;bt<lt;bt++)G.append(it[bt],p()),R.nextNode(),at.push({type:2,index:++ht});G.append(it[lt],p())}}}else if(G.nodeType===8)if(G.data===c)at.push({type:2,index:ht});else{let it=-1;for(;(it=G.data.indexOf(s,it+1))!==-1;)at.push({type:7,index:ht}),it+=s.length-1}ht++}}static createElement(E,I){const B=u.createElement("template");return B.innerHTML=E,B}}function Y(K,E,I=K,B){var G,ht,X,N;if(E===_)return E;let at=B!==void 0?(G=I.Σi)===null||G===void 0?void 0:G[B]:I.Σo;const et=f(E)?void 0:E._$litDirective$;return(at==null?void 0:at.constructor)!==et&&((ht=at==null?void 0:at.O)===null||ht===void 0||ht.call(at,!1),et===void 0?at=void 0:(at=new et(K),at.T(K,I,B)),B!==void 0?((X=(N=I).Σi)!==null&&X!==void 0?X:N.Σi=[])[B]=at:I.Σo=at),at!==void 0&&(E=Y(K,at.S(K,E.values),at,B)),E}class ot{constructor(E,I){this.l=[],this.N=void 0,this.D=E,this.M=I}u(E){var I;const{el:{content:B},parts:G}=this.D,ht=((I=E==null?void 0:E.creationScope)!==null&&I!==void 0?I:u).importNode(B,!0);R.currentNode=ht;let X=R.nextNode(),N=0,at=0,et=G[0];for(;et!==void 0;){if(N===et.index){let wt;et.type===2?wt=new Z(X,X.nextSibling,this,E):et.type===1?wt=new et.ctor(X,et.name,et.strings,this,E):et.type===6&&(wt=new yt(X,this,E)),this.l.push(wt),et=G[++at]}N!==(et==null?void 0:et.index)&&(X=R.nextNode(),N++)}return ht}v(E){let I=0;for(const B of this.l)B!==void 0&&(B.strings!==void 0?(B.I(E,B,I),I+=B.strings.length-2):B.I(E[I])),I++}}class Z{constructor(E,I,B,G){this.type=2,this.N=void 0,this.A=E,this.B=I,this.M=B,this.options=G}setConnected(E){var I;(I=this.P)===null||I===void 0||I.call(this,E)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(E,I=this){E=Y(this,E,I),f(E)?E===x||E==null||E===""?(this.H!==x&&this.R(),this.H=x):E!==this.H&&E!==_&&this.m(E):E._$litType$!==void 0?this._(E):E.nodeType!==void 0?this.$(E):v(E)?this.g(E):this.m(E)}k(E,I=this.B){return this.A.parentNode.insertBefore(E,I)}$(E){this.H!==E&&(this.R(),this.H=this.k(E))}m(E){const I=this.A.nextSibling;I!==null&&I.nodeType===3&&(this.B===null?I.nextSibling===null:I===this.B.previousSibling)?I.data=E:this.$(u.createTextNode(E)),this.H=E}_(E){var I;const{values:B,_$litType$:G}=E,ht=typeof G=="number"?this.C(E):(G.el===void 0&&(G.el=$.createElement(G.h,this.options)),G);if(((I=this.H)===null||I===void 0?void 0:I.D)===ht)this.H.v(B);else{const X=new ot(ht,this),N=X.u(this.options);X.v(B),this.$(N),this.H=X}}C(E){let I=T.get(E.strings);return I===void 0&&T.set(E.strings,I=new $(E)),I}g(E){g(this.H)||(this.H=[],this.R());const I=this.H;let B,G=0;for(const ht of E)G===I.length?I.push(B=new Z(this.k(p()),this.k(p()),this,this.options)):B=I[G],B.I(ht),G++;G<I.length&&(this.R(B&&B.B.nextSibling,G),I.length=G)}R(E=this.A.nextSibling,I){var B;for((B=this.P)===null||B===void 0||B.call(this,!1,!0,I);E&&E!==this.B;){const G=E.nextSibling;E.remove(),E=G}}}class nt{constructor(E,I,B,G,ht){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=E,this.name=I,this.M=G,this.options=ht,B.length>2||B[0]!==""||B[1]!==""?(this.H=Array(B.length-1).fill(x),this.strings=B):this.H=x}get tagName(){return this.element.tagName}I(E,I=this,B,G){const ht=this.strings;let X=!1;if(ht===void 0)E=Y(this,E,I,0),X=!f(E)||E!==this.H&&E!==_,X&&(this.H=E);else{const N=E;let at,et;for(E=ht[0],at=0;at<ht.length-1;at++)et=Y(this,N[B+at],I,at),et===_&&(et=this.H[at]),X||(X=!f(et)||et!==this.H[at]),et===x?E=x:E!==x&&(E+=(et??"")+ht[at+1]),this.H[at]=et}X&&!G&&this.W(E)}W(E){E===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,E??"")}}class z extends nt{constructor(){super(...arguments),this.type=3}W(E){this.element[this.name]=E===x?void 0:E}}class tt extends nt{constructor(){super(...arguments),this.type=4}W(E){E&&E!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class _t extends nt{constructor(){super(...arguments),this.type=5}I(E,I=this){var B;if((E=(B=Y(this,E,I,0))!==null&&B!==void 0?B:x)===_)return;const G=this.H,ht=E===x&&G!==x||E.capture!==G.capture||E.once!==G.once||E.passive!==G.passive,X=E!==x&&(G===x||ht);ht&&this.element.removeEventListener(this.name,this,G),X&&this.element.addEventListener(this.name,this,E),this.H=E}handleEvent(E){var I,B;typeof this.H=="function"?this.H.call((B=(I=this.options)===null||I===void 0?void 0:I.host)!==null&&B!==void 0?B:this.element,E):this.H.handleEvent(E)}}class yt{constructor(E,I,B){this.element=E,this.type=6,this.N=void 0,this.V=void 0,this.M=I,this.options=B}I(E){Y(this,E)}}(i=(n=globalThis).litHtmlPlatformSupport)===null||i===void 0||i.call(n,$,Z),((o=(l=globalThis).litHtmlVersions)!==null&&o!==void 0?o:l.litHtmlVersions=[]).push("2.0.0-rc.2")},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,n.b`
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
      `]}render(){var s;return n.c` ${!((s=this.icon)===null||s===void 0)&&s.indexOf("url")?n.c` ${this.icon} `:""}`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="color"&&this.color?this.style.color=this.color:s=="icon"&&d.indexOf("url")>-1&&this.setBackgroundImage(d)}setBackgroundImage(s){this.style.backgroundImage=s}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",a)},function(r,t,e){e.r(t);var n=e(4);e.d(t,"korIcon",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[o.a,n.b`
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
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="color"&&this.color&&(this.style.color=this.color)}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",a)},function(r,t,e){e.r(t);var n=e(6);e.d(t,"korText",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
            @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${s=>this.emptyFunctions=s.target.assignedNodes().length===0}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",a)},function(r,t,e){e.r(t);var n=e(8);e.d(t,"korCard",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"logo",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(9),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
        @click="${s=>s.stopPropagation()}"
        @wheel="${s=>s.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${s=>this.emptyFunctions=s.target.assignedNodes().length===0}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s==="target"&&this.target?this.targetObserver():s==="visible"&&this.visible&&this.visibleObserver()}targetObserver(){const s=typeof this.target=="string"?document.querySelector(this.target):this.target;s&&s.addEventListener("click",()=>this.handlePosition(s))}visibleObserver(){const s=typeof this.target=="string"?document.querySelector(this.target):this.target;s&&(this.handlePosition(s),!this.sticky&&this.target&&this.addDocListener(s))}handlePosition(s){if(!s)return;let c=this,d=s.getBoundingClientRect();if(c.visible=!0,c.position.startsWith("bottom"))c.style.top=d.top+d.height+8+"px";else if(c.position.startsWith("top"))c.style.top=d.top-c.clientHeight-8+"px";else{c.style.top=d.top+d.height/2-c.clientHeight/2+"px",parseInt(c.style.top)<0&&(c.style.top="8px");const u=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(c.style.top)+c.clientHeight>u&&(c.style.top=u-c.clientHeight-8+"px")}c.position.startsWith("right")?c.style.left=d.left+d.width+8+"px":c.position.startsWith("left")?c.style.left=d.left-c.clientWidth-8+"px":c.style.left=d.left+d.width/2-c.clientWidth/2+"px"}addDocListener(s){let c=d=>{(d.composedPath()[0]!==s&&d.target!==s&&d.type==="click"||d.type==="wheel")&&(this.visible=!1,document.removeEventListener("click",c),document.removeEventListener("wheel",c))};document.addEventListener("click",c),document.addEventListener("wheel",c)}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"target",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(9),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
          @click="${s=>this.handleCollapse(s)}"
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
                @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var s,c,d;const u=(d=(c=(s=this.shadowRoot)===null||s===void 0?void 0:s.querySelector("kor-card"))===null||c===void 0?void 0:c.shadowRoot)===null||d===void 0?void 0:d.querySelector(".top");u&&(u.style.padding="0")},0)}handleCollapse(s){this.expanded&&(this.expanded=!1,s.stopPropagation())}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"expanded",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyBody",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}getInitials(s){const c=s.match(/\b\w/g)||[];return(c.shift()||"")+(c.pop()||"").toUpperCase()}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}getStatusIcon(){let s;switch(this.status){case"error":s="cancel";break;case"warning":s="error";break;case"success":s="check_circle"}return s}}l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",a)},function(r,t,e){e.d(t,"a",function(){return o});var n=e(0),i=e(2);class o extends n.a{static get styles(){return[i.a,n.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return n.c` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",o)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}firstItem(){var s;let c,d;return d=Array.prototype.slice.call((s=this.parentElement)===null||s===void 0?void 0:s.children),c=d.indexOf(this)==0,c}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.color="primary"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[o.a,n.b`
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
      `]}render(){return n.c`<div class="line"></div>`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(9),e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
        @click="${s=>s.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
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
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s==="visible"&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let s={height:void 0,width:void 0};switch(this.position){case"left":case"right":s.height="100%",s.width=this.width;break;case"top":case"bottom":s.height=this.height,s.width="100%"}return s}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[o.a,n.b`
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
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s==="columns"?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:s==="rows"&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"columns",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"src",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"alt",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"fit",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"legend",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"legend-position"})],a.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="toggle"&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(9),e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
        @click="${s=>s.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
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
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s==="visible"&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"height",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"width",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",a)},function(r,t,e){e.d(t,"a",function(){return o});var n=e(0),i=e(2);e(27);class o extends n.a{static get styles(){return[i.a,n.b`
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
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",o)},function(r,t,e){e.r(t);var n=e(10);e.d(t,"korAppBar",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[o.a,n.b`
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
      `]}render(){return n.c`<slot></slot>`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(9),e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
        @click="${s=>s.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
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
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sticky",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"theme",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"padding",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(9),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${s=>this.emptyFunctions=s.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}getStatusIcon(){let s;switch(this.status){case"error":s="cancel";break;case"warning":s="error";break;case"success":s="check_circle"}return s}getSize(){let s;switch(this.size){case"s":s=48;break;case"m":s=64;break;case"l":s=80;break;default:s=0}return s}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"status",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"radial",void 0),l([Object(i.a)({type:Boolean,reflect:!0,attribute:"show-progress"})],a.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var s;let c=(s=this.parentElement)===null||s===void 0?void 0:s.childNodes;c==null||c.forEach(d=>{d.active=!1}),this.active=!0}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[o.a,n.b`
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
                      @blur="${s=>this.handleInput(parseFloat(s.target.value))}"
                      @keypress="${s=>s.key==="Enter"?this.handleInput(parseFloat(s.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${s=>this.handleThumbDrag(s)}"
          @touchstart="${s=>this.handleThumbDrag(s)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s!=="value"&&s!=="min"&&s!=="max"||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(s){s>=this.min&&s<=this.max?this.value=s:s<this.min?this.value=this.min:s>this.max&&(this.value=this.max)}handleThumbPosition(){var s;const c=(s=this.shadowRoot)===null||s===void 0?void 0:s.querySelector(".thumb"),d=(this.value-this.min)/(this.max-this.min)*100;c&&d>=0&&d<=100&&(c.style.left=d+"%")}handleThumbDrag(s){const c=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let d=s.type==="mousedown"?s.clientX:s.touches[0].clientX;const u=f=>{f.preventDefault();const g=f.type==="mousemove"?f.clientX:f.touches[0].clientX,v=g-d;if(v>c||-1*v>c){const m=Math.floor(v<0?-1*v:v),A=Math.round(m/c),S=v>0?this.value+this.step*A:this.value-this.step*A;S<=this.max&&S>=this.min&&(this.value=S,d=g)}},p=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("touchmove",u),window.removeEventListener("mouseup",p),window.removeEventListener("touchend",p)};window.addEventListener("mousemove",u),window.addEventListener("touchmove",u),window.addEventListener("mouseup",p),window.addEventListener("touchend",p)}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"value",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"min",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"max",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"step",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}getSize(){let s;switch(this.size){case"s":s=24;break;case"m":s=32;break;case"l":s=40}return s}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}handleOrientation(){this.childNodes.forEach(s=>{s.orientation=this.orientation})}handleItems(){let s,c;s=Array.prototype.slice.call(this.children),c=this.children.length,s.forEach(d=>{d.first=d.index==1,d.last=d.index==c})}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var s;((s=this.parentElement)===null||s===void 0?void 0:s.childNodes).forEach(c=>{c.active=!1}),this.active=!0})}getIndex(){var s;let c;c=Array.prototype.slice.call((s=this.parentElement)===null||s===void 0?void 0:s.children),this.index=c.indexOf(this)+1}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"info",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"index",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"first",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"last",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",a)},function(r,t,e){e.d(t,"a",function(){return o});var n=e(0),i=e(2);class o extends n.a{static get styles(){return[i.a,n.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return n.c` <slot></slot> `}attributeChangedCallback(a,h,s){super.attributeChangedCallback(a,h,s),this.dispatchEvent(new Event(a+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",o)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var s;((s=this.parentElement)===null||s===void 0?void 0:s.childNodes).forEach(c=>{c.active=!1}),this.active=!0}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var s;((s=this.closest("kor-tabs"))===null||s===void 0?void 0:s.querySelectorAll("kor-tab-item")).forEach(c=>{c.active=!1}),this.active=!0}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"condensed",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,n.b`
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
    `}handleOrientation(){this.childNodes.forEach(s=>{s.orientation=this.orientation})}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var s,c;this.active=!0,(c=(s=this.shadowRoot)===null||s===void 0?void 0:s.querySelector("textarea"))===null||c===void 0||c.focus()})}static get styles(){return[o.a,n.b`
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
    `}handleChange(s){this.value=s.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"value",void 0),l([Object(i.a)({type:Number,reflect:!0})],a.prototype,"rows",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"readonly",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="toggle"&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"toggle",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(48),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
          @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${s=>this.emptyFunctions=s.target.assignedNodes().length===0}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s==="target"&&this.target&&this.targetObserver()}targetObserver(){let s;const c=typeof this.target=="string"?document.querySelector(this.target):this.target;c&&(c.addEventListener("mouseover",()=>{s=setTimeout(()=>this.visible=!0,500)}),c.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(s)}))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"position",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"target",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"visible",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",a)},function(r,t,e){e.r(t);var n=e(11);e.d(t,"korPopover",function(){return n.a})},function(r,t,e){e.d(t,"a",function(){return s});var n=e(0),i=e(3);const o=c=>c??i.c;var l=e(1),a=e(2),h=(e(9),e(5),function(c,d,u,p){var f,g=arguments.length,v=g<3?d:p===null?p=Object.getOwnPropertyDescriptor(d,u):p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(c,d,u,p);else for(var m=c.length-1;m>=0;m--)(f=c[m])&&(v=(g<3?f(v):g>3?f(d,u,v):f(d,u))||v);return g>3&&v&&Object.defineProperty(d,u,v),v});class s extends n.a{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",d=>{var u,p;this.active&&this.type==="select"?this.closeSelectMenu(d):this.active||(this.active=!0,this.type==="select"||this.disabled||this.readonly||(p=(u=this.shadowRoot)===null||u===void 0?void 0:u.querySelector("input"))===null||p===void 0||p.focus())})}static get styles(){return[a.a,n.b`
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
          min="${o(this.min)}"
          max="${o(this.max)}"
          pattern="${o(this.pattern)}"
          name="${o(this.name)}"
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
                    @click="${d=>{this.active=!1,d.stopPropagation()}}"
                    @wheel="${d=>d.stopPropagation()}"
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
    `}handleChange(d){this.value=d.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleBlur(d){this.type==="number"&&this.validateMinMax(d.target.value),this.type!=="select"&&(this.active=!1)}handleIncrement(d){d==="left"?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):d==="right"&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(d){const u=d.target.assignedNodes();u.forEach(p=>{p.tagName==="KOR-MENU-ITEM"&&p.addEventListener("active-changed",f=>{f.target.active&&(u.forEach(g=>{g.active=!1}),f.target.active=!0,this.value=p.label,this.active=!1)})})}attributeChangedCallback(d,u,p){super.attributeChangedCallback(d,u,p),this.dispatchEvent(new Event(d+"-changed")),d==="active"&&this.active&&this.type==="select"&&this.handleMenu()}handleMenu(){const d=this.parentElement,u=()=>{this.active=!1,d==null||d.removeEventListener("wheel",u)};d==null||d.addEventListener("wheel",u)}closeSelectMenu(d){this.type==="select"&&this.active&&(d.stopImmediatePropagation(),this.active=!1)}validateMinMax(d){d&&(this.min&&d<parseInt(this.min)?this.value=this.min:this.max&&d>parseInt(this.max)?this.value=this.max:this.value=d.toString())}getStatusIcon(){let d;switch(this.status){case"error":d="cancel";break;case"warning":d="error";break;case"success":d="check_circle"}return d}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}h([Object(l.a)({type:String,reflect:!0})],s.prototype,"label",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"icon",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"value",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"name",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"type",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"status",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),h([Object(l.a)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"pattern",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"min",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"max",void 0),h([Object(l.a)({type:Number,reflect:!0})],s.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",s)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{static get styles(){return[o.a,n.b`
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
      `]}render(){return n.c` <slot></slot> `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){var s,c;let d,u;d=this.closest("kor-table"),!((s=d)===null||s===void 0)&&s.readonly||this.slot=="header"||(u=(c=this.parentElement)===null||c===void 0?void 0:c.childNodes,u==null||u.forEach(p=>{p.active=!1}),this.active=!0)}handleColumns(){const s=this.closest("kor-table");this.style.gridTemplateColumns=s.columns,s==null||s.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=s.columns})}}l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"active",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",a)},function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),e(7),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[o.a,n.b`
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
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="grid-cols"&&(this.style.gridColumn="span "+this.gridCols),s=="sortable"&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){var s;if(this.sorted)this.sortDirection=this.sortDirection=="asc"?"desc":"asc";else{let c=(s=this.parentElement)===null||s===void 0?void 0:s.childNodes;c==null||c.forEach(d=>{d.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}l([Object(i.a)({type:Number,reflect:!0,attribute:"grid-cols"})],a.prototype,"gridCols",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"alignment",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"head",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sorted",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"sortable",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"sort-direction"})],a.prototype,"sortDirection",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",a)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(r,t,e){e.r(t),e.d(t,"korAccordion",function(){return n.a}),e.d(t,"korAppBar",function(){return i.a}),e.d(t,"korAvatar",function(){return o.a}),e.d(t,"korBadge",function(){return l.a}),e.d(t,"korBreadcrumbs",function(){return a.a}),e.d(t,"korBreadcrumbItem",function(){return h.a}),e.d(t,"korButton",function(){return s.a}),e.d(t,"korCard",function(){return c.a}),e.d(t,"korCheckbox",function(){return d.a}),e.d(t,"korDivider",function(){return u.a}),e.d(t,"korDrawer",function(){return p.a}),e.d(t,"korEmptyState",function(){return f.a}),e.d(t,"korGrid",function(){return g.a}),e.d(t,"korImage",function(){return v.a}),e.d(t,"korIcon",function(){return m.a}),e.d(t,"korInput",function(){return A.a}),e.d(t,"korMenuItem",function(){return S.a}),e.d(t,"korModal",function(){return C.a}),e.d(t,"korNavbar",function(){return P.a}),e.d(t,"korNotifications",function(){return U.a}),e.d(t,"korNotificationItem",function(){return L.a}),e.d(t,"korPage",function(){return V.a}),e.d(t,"korPane",function(){return b.a}),e.d(t,"korPopover",function(){return _.a}),e.d(t,"korProgressBar",function(){return x.a}),e.d(t,"korRadioButton",function(){return T.a}),e.d(t,"korSlider",function(){return F.a}),e.d(t,"korSpinner",function(){return R.a}),e.d(t,"korStepper",function(){return H.a}),e.d(t,"korStepperItem",function(){return $.a}),e.d(t,"korSwipeActions",function(){return Z}),e.d(t,"korSwipeAction",function(){return tt}),e.d(t,"korSwitch",function(){return _t.a}),e.d(t,"korSwitchItem",function(){return yt.a}),e.d(t,"korTabItem",function(){return K.a}),e.d(t,"korTable",function(){return E.a}),e.d(t,"korTableRow",function(){return I.a}),e.d(t,"korTableCell",function(){return B.a}),e.d(t,"korTabs",function(){return G.a}),e.d(t,"korTag",function(){return ht.a}),e.d(t,"korText",function(){return X.a}),e.d(t,"korTextarea",function(){return N.a}),e.d(t,"korToggle",function(){return at.a}),e.d(t,"korTool",function(){return et.a}),e.d(t,"korTooltip",function(){return wt.a});var n=e(12),i=e(10),o=e(13),l=e(14),a=e(15),h=e(16),s=e(17),c=e(8),d=e(18),u=e(19),p=e(20),f=e(21),g=e(22),v=e(23),m=e(4),A=e(49),S=e(24),C=e(25),P=e(26),U=e(28),L=e(29),V=e(30),b=e(31),_=e(11),x=e(32),T=e(33),F=e(34),R=e(35),H=e(36),$=e(37),Y=e(0),ot=e(2);class Z extends Y.a{static get styles(){return[ot.a,Y.b`
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
      `]}render(){return Y.c`
      <slot
        name="left"
        @slotchange="${lt=>this.setSlotWidth(lt.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${lt=>this.setSlotWidth(lt.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(lt){lt.assignedNodes().length>0?lt.style.minWidth="100%":lt.style.minWidth="unset"}handleTouchEnd(){const lt=this.scrollLeft-this.clientWidth;lt<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):lt>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var lt,bt;const Mt=(lt=this.shadowRoot)===null||lt===void 0?void 0:lt.querySelector('slot[name="left"]'),Ot=(bt=this.shadowRoot)===null||bt===void 0?void 0:bt.querySelector('slot[name="right"]'),qt=this.scrollLeft-this.clientWidth;Mt&&(Mt.style.opacity=-1*qt/this.clientWidth*3>1?1:.5),Ot&&(Ot.style.opacity=1*qt/this.clientWidth*3>1?1:.5)}getSlotOpacity(lt){const bt=lt==="left"?-1:1,Mt=(this.scrollLeft-this.clientWidth)*bt/this.clientWidth*3;return Mt>1?1:Mt<0?0:Mt}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",Z);var nt=e(1),z=function(it,lt,bt,Mt){var Ot,qt=arguments.length,Yt=qt<3?lt:Mt===null?Mt=Object.getOwnPropertyDescriptor(lt,bt):Mt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Yt=Reflect.decorate(it,lt,bt,Mt);else for(var w=it.length-1;w>=0;w--)(Ot=it[w])&&(Yt=(qt<3?Ot(Yt):qt>3?Ot(lt,bt,Yt):Ot(lt,bt))||Yt);return qt>3&&Yt&&Object.defineProperty(lt,bt,Yt),Yt};class tt extends Y.a{static get styles(){return[ot.a,Y.b`
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
      `]}render(){return Y.c` <kor-icon .icon="${this.icon}"></kor-icon> `}attributeChangedCallback(lt,bt,Mt){super.attributeChangedCallback(lt,bt,Mt),this.dispatchEvent(new Event(lt+"-changed")),lt==="bg-color"&&Mt!==bt&&(this.style.backgroundColor=Mt)}connectedCallback(){super.connectedCallback()}}z([Object(nt.a)({reflect:!0})],tt.prototype,"icon",void 0),z([Object(nt.a)({reflect:!0,attribute:"bg-color"})],tt.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",tt);var _t=e(38),yt=e(39),K=e(40),E=e(41),I=e(50),B=e(51),G=e(42),ht=e(43),X=e(6),N=e(44),at=e(45),et=e(46),wt=e(47)}]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Is="157",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zl=0,Zs=1,Hl=2,Ga=1,Gl=2,Ye=3,mn=0,Se=1,Ke=2,un=0,si=1,Js=2,Qs=3,to=4,Vl=5,ni=100,Wl=101,$l=102,eo=103,no=104,jl=200,Xl=201,ql=202,Yl=203,Va=204,Wa=205,Kl=206,Zl=207,Jl=208,Ql=209,tc=210,ec=0,nc=1,ic=2,Es=3,rc=4,sc=5,oc=6,ac=7,$a=0,lc=1,cc=2,fn=0,hc=1,dc=2,uc=3,fc=4,pc=5,ja=300,li=301,ci=302,Ms=303,ws=304,Rr=306,Ts=1e3,Ae=1001,As=1002,de=1003,io=1004,Fr=1005,be=1006,mc=1007,hi=1008,pn=1009,gc=1010,vc=1011,Ns=1012,Xa=1013,cn=1014,hn=1015,Di=1016,qa=1017,Ya=1018,Tn=1020,_c=1021,Ne=1023,bc=1024,xc=1025,An=1026,di=1027,yc=1028,Ka=1029,Sc=1030,Za=1031,Ja=1033,Br=33776,zr=33777,Hr=33778,Gr=33779,ro=35840,so=35841,oo=35842,ao=35843,Ec=36196,lo=37492,co=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,vo=37814,_o=37815,bo=37816,xo=37817,yo=37818,So=37819,Eo=37820,Mo=37821,Vr=36492,wo=36494,To=36495,Mc=36283,Ao=36284,Ro=36285,Co=36286,Qa=3e3,Rn=3001,wc=3200,Tc=3201,tl=0,Ac=1,De="",ue="srgb",tn="srgb-linear",ks="display-p3",Cr="display-p3-linear",br="linear",Zt="srgb",xr="rec709",yr="p3",Wr=7680,Rc=519,Cc=512,Pc=513,Lc=514,Dc=515,Oc=516,Uc=517,Ic=518,Nc=519,Rs=35044,Po="300 es",Cs=1035,Je=2e3,Sr=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,l=i.length;o<l;o++)i[o].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const Ci=Math.PI/180,Oi=180/Math.PI;function Qe(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[r&255]+fe[r>>8&255]+fe[r>>16&255]+fe[r>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function ne(r,t,e){return Math.max(t,Math.min(e,r))}function Fs(r,t){return(r%t+t)%t}function kc(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Fc(r,t,e){return r!==t?(e-r)/(t-r):0}function Pi(r,t,e){return(1-e)*r+e*t}function Bc(r,t,e,n){return Pi(r,t,1-Math.exp(-e*n))}function zc(r,t=1){return t-Math.abs(Fs(r,t*2)-t)}function Hc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Gc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Vc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Wc(r,t){return r+Math.random()*(t-r)}function $c(r){return r*(.5-Math.random())}function jc(r){r!==void 0&&(Lo=r);let t=Lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xc(r){return r*Ci}function qc(r){return r*Oi}function Ps(r){return(r&r-1)===0&&r!==0}function Yc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Er(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kc(r,t,e,n,i){const o=Math.cos,l=Math.sin,a=o(e/2),h=l(e/2),s=o((t+n)/2),c=l((t+n)/2),d=o((t-n)/2),u=l((t-n)/2),p=o((n-t)/2),f=l((n-t)/2);switch(i){case"XYX":r.set(a*c,h*d,h*u,a*s);break;case"YZY":r.set(h*u,a*c,h*d,a*s);break;case"ZXZ":r.set(h*d,h*u,a*c,a*s);break;case"XZX":r.set(a*c,h*f,h*p,a*s);break;case"YXY":r.set(h*p,a*c,h*f,a*s);break;case"ZYZ":r.set(h*f,h*p,a*c,a*s);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Ci,RAD2DEG:Oi,generateUUID:Qe,clamp:ne,euclideanModulo:Fs,mapLinear:kc,inverseLerp:Fc,lerp:Pi,damp:Bc,pingpong:zc,smoothstep:Hc,smootherstep:Gc,randInt:Vc,randFloat:Wc,randFloatSpread:$c,seededRandom:jc,degToRad:Xc,radToDeg:qc,isPowerOfTwo:Ps,ceilPowerOfTwo:Yc,floorPowerOfTwo:Er,setQuaternionFromProperEuler:Kc,normalize:jt,denormalize:ze};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*i+t.x,this.y=o*i+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,o,l,a,h,s){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,l,a,h,s)}set(t,e,n,i,o,l,a,h,s){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=o,c[5]=h,c[6]=n,c[7]=l,c[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,l=n[0],a=n[3],h=n[6],s=n[1],c=n[4],d=n[7],u=n[2],p=n[5],f=n[8],g=i[0],v=i[3],m=i[6],A=i[1],S=i[4],C=i[7],P=i[2],U=i[5],L=i[8];return o[0]=l*g+a*A+h*P,o[3]=l*v+a*S+h*U,o[6]=l*m+a*C+h*L,o[1]=s*g+c*A+d*P,o[4]=s*v+c*S+d*U,o[7]=s*m+c*C+d*L,o[2]=u*g+p*A+f*P,o[5]=u*v+p*S+f*U,o[8]=u*m+p*C+f*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],a=t[5],h=t[6],s=t[7],c=t[8];return e*l*c-e*a*s-n*o*c+n*a*h+i*o*s-i*l*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],a=t[5],h=t[6],s=t[7],c=t[8],d=c*l-a*s,u=a*h-c*o,p=s*o-l*h,f=e*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return t[0]=d*g,t[1]=(i*s-c*n)*g,t[2]=(a*n-i*l)*g,t[3]=u*g,t[4]=(c*e-i*h)*g,t[5]=(i*o-a*e)*g,t[6]=p*g,t[7]=(n*h-s*e)*g,t[8]=(l*e-n*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,l,a){const h=Math.cos(o),s=Math.sin(o);return this.set(n*h,n*s,-n*(h*l+s*a)+l+t,-i*s,i*h,-i*(-s*l+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Gt;function el(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ui(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jc(){const r=Ui("canvas");return r.style.display="block",r}const Do={};function Li(r){r in Do||(Do[r]=!0,console.warn(r))}const Oo=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uo=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[tn]:{transfer:br,primaries:xr,toReference:r=>r,fromReference:r=>r},[ue]:{transfer:Zt,primaries:xr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Cr]:{transfer:br,primaries:yr,toReference:r=>r.applyMatrix3(Uo),fromReference:r=>r.applyMatrix3(Oo)},[ks]:{transfer:Zt,primaries:yr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Uo),fromReference:r=>r.applyMatrix3(Oo).convertLinearToSRGB()}},Qc=new Set([tn,Cr]),Xt={enabled:!0,_workingColorSpace:tn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Wi[t].toReference,i=Wi[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Wi[r].primaries},getTransfer:function(r){return r===De?br:Wi[r].transfer}};function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nn;class nl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nn===void 0&&(Nn=Ui("canvas")),Nn.width=t.width,Nn.height=t.height;const n=Nn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Nn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ui("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let l=0;l<o.length;l++)o[l]=oi(o[l]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let th=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Qe(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let l=0,a=i.length;l<a;l++)i[l].isDataTexture?o.push(Xr(i[l].image)):o.push(Xr(i[l]))}else o=Xr(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Xr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class xe extends On{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Ae,i=Ae,o=be,l=hi,a=Ne,h=pn,s=xe.DEFAULT_ANISOTROPY,c=De){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Qe(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=l,this.anisotropy=s,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Rn?ue:De),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ja)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case Ae:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case Ae:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?Rn:Qa}set encoding(t){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Rn?ue:De}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=ja;xe.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*i+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*i+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*i+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*i+l[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const h=t.elements,s=h[0],c=h[4],d=h[8],u=h[1],p=h[5],f=h[9],g=h[2],v=h[6],m=h[10];if(Math.abs(c-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-v)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+v)<.1&&Math.abs(s+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(s+1)/2,C=(p+1)/2,P=(m+1)/2,U=(c+u)/4,L=(d+g)/4,V=(f+v)/4;return S>C&&S>P?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=U/n,o=L/n):C>P?C<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(C),n=U/i,o=V/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=L/o,i=V/o),this.set(n,i,o,e),this}let A=Math.sqrt((v-f)*(v-f)+(d-g)*(d-g)+(u-c)*(u-c));return Math.abs(A)<.001&&(A=1),this.x=(v-f)/A,this.y=(d-g)/A,this.z=(u-c)/A,this.w=Math.acos((s+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?ue:De),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,l,a){let h=n[i+0],s=n[i+1],c=n[i+2],d=n[i+3];const u=o[l+0],p=o[l+1],f=o[l+2],g=o[l+3];if(a===0){t[e+0]=h,t[e+1]=s,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=f,t[e+3]=g;return}if(d!==g||h!==u||s!==p||c!==f){let v=1-a;const m=h*u+s*p+c*f+d*g,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const P=Math.sqrt(S),U=Math.atan2(P,m*A);v=Math.sin(v*U)/P,a=Math.sin(a*U)/P}const C=a*A;if(h=h*v+u*C,s=s*v+p*C,c=c*v+f*C,d=d*v+g*C,v===1-a){const P=1/Math.sqrt(h*h+s*s+c*c+d*d);h*=P,s*=P,c*=P,d*=P}}t[e]=h,t[e+1]=s,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,l){const a=n[i],h=n[i+1],s=n[i+2],c=n[i+3],d=o[l],u=o[l+1],p=o[l+2],f=o[l+3];return t[e]=a*f+c*d+h*p-s*u,t[e+1]=h*f+c*u+s*d-a*p,t[e+2]=s*f+c*p+a*u-h*d,t[e+3]=c*f-a*d-h*u-s*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,o=t._z,l=t._order,a=Math.cos,h=Math.sin,s=a(n/2),c=a(i/2),d=a(o/2),u=h(n/2),p=h(i/2),f=h(o/2);switch(l){case"XYZ":this._x=u*c*d+s*p*f,this._y=s*p*d-u*c*f,this._z=s*c*f+u*p*d,this._w=s*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+s*p*f,this._y=s*p*d-u*c*f,this._z=s*c*f-u*p*d,this._w=s*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-s*p*f,this._y=s*p*d+u*c*f,this._z=s*c*f+u*p*d,this._w=s*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-s*p*f,this._y=s*p*d+u*c*f,this._z=s*c*f-u*p*d,this._w=s*c*d+u*p*f;break;case"YZX":this._x=u*c*d+s*p*f,this._y=s*p*d+u*c*f,this._z=s*c*f-u*p*d,this._w=s*c*d-u*p*f;break;case"XZY":this._x=u*c*d-s*p*f,this._y=s*p*d-u*c*f,this._z=s*c*f+u*p*d,this._w=s*c*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],l=e[1],a=e[5],h=e[9],s=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-h)*p,this._y=(o-s)*p,this._z=(l-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(c-h)/p,this._x=.25*p,this._y=(i+l)/p,this._z=(o+s)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(o-s)/p,this._x=(i+l)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(l-i)/p,this._x=(o+s)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,l=t._w,a=e._x,h=e._y,s=e._z,c=e._w;return this._x=n*c+l*a+i*s-o*h,this._y=i*c+l*h+o*a-n*s,this._z=o*c+l*s+n*h-i*a,this._w=l*c-n*a-i*h-o*s,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,l=this._w;let a=l*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=l,this._x=n,this._y=i,this._z=o,this;const h=1-a*a;if(h<=Number.EPSILON){const p=1-e;return this._w=p*l+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this._onChangeCallback(),this}const s=Math.sqrt(h),c=Math.atan2(s,a),d=Math.sin((1-e)*c)/s,u=Math.sin(e*c)/s;return this._w=l*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,l=t.y,a=t.z,h=t.w,s=h*e+l*i-a*n,c=h*n+a*e-o*i,d=h*i+o*n-l*e,u=-o*e-l*n-a*i;return this.x=s*h+u*-o+c*-a-d*-l,this.y=c*h+u*-l+d*-o-s*-a,this.z=d*h+u*-a+s*-l-c*-o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,l=e.x,a=e.y,h=e.z;return this.x=i*h-o*a,this.y=o*l-n*h,this.z=n*a-i*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new k,Io=new Pn;class Fi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),kn.copy(t.boundingBox),kn.applyMatrix4(t.matrixWorld),this.union(kn);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const o=i.attributes.position;for(let l=0,a=o.count;l<a;l++)Ve.fromBufferAttribute(o,l).applyMatrix4(t.matrixWorld),this.expandByPoint(Ve)}else i.boundingBox===null&&i.computeBoundingBox(),kn.copy(i.boundingBox),kn.applyMatrix4(t.matrixWorld),this.union(kn)}const n=t.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),$i.subVectors(this.max,bi),Fn.subVectors(t.a,bi),Bn.subVectors(t.b,bi),zn.subVectors(t.c,bi),en.subVectors(Bn,Fn),nn.subVectors(zn,Bn),_n.subVectors(Fn,zn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-_n.z,_n.y,en.z,0,-en.x,nn.z,0,-nn.x,_n.z,0,-_n.x,-en.y,en.x,0,-nn.y,nn.x,0,-_n.y,_n.x,0];return!Yr(e,Fn,Bn,zn,$i)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,Fn,Bn,zn,$i))?!1:(ji.crossVectors(en,nn),e=[ji.x,ji.y,ji.z],Yr(e,Fn,Bn,zn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ge[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ge[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ge[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ge[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ge[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ge[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ge[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ge[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ge),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ge=[new k,new k,new k,new k,new k,new k,new k,new k],Ve=new k,kn=new Fi,Fn=new k,Bn=new k,zn=new k,en=new k,nn=new k,_n=new k,bi=new k,$i=new k,ji=new k,bn=new k;function Yr(r,t,e,n,i){for(let o=0,l=r.length-3;o<=l;o+=3){bn.fromArray(r,o);const a=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),h=t.dot(bn),s=e.dot(bn),c=n.dot(bn);if(Math.max(-Math.max(h,s,c),Math.min(h,s,c))>a)return!1}return!0}const rh=new Fi,xi=new k,Kr=new k;class Bs{constructor(t=new k,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rh.setFromPoints(t).getCenter(n);let i=0;for(let o=0,l=t.length;o<l;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(Kr)),this.expandByPoint(xi.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new k,Zr=new k,Xi=new k,rn=new k,Jr=new k,qi=new k,Qr=new k;class sl{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zr.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(Zr);const o=t.distanceTo(e)*.5,l=-this.direction.dot(Xi),a=rn.dot(this.direction),h=-rn.dot(Xi),s=rn.lengthSq(),c=Math.abs(1-l*l);let d,u,p,f;if(c>0)if(d=l*h-a,u=l*a-h,f=o*c,d>=0)if(u>=-f)if(u<=f){const g=1/c;d*=g,u*=g,p=d*(d+l*u+2*a)+u*(l*d+u+2*h)+s}else u=o,d=Math.max(0,-(l*u+a)),p=-d*d+u*(u+2*h)+s;else u=-o,d=Math.max(0,-(l*u+a)),p=-d*d+u*(u+2*h)+s;else u<=-f?(d=Math.max(0,-(-l*o+a)),u=d>0?-o:Math.min(Math.max(-o,-h),o),p=-d*d+u*(u+2*h)+s):u<=f?(d=0,u=Math.min(Math.max(-o,-h),o),p=u*(u+2*h)+s):(d=Math.max(0,-(l*o+a)),u=d>0?o:Math.min(Math.max(-o,-h),o),p=-d*d+u*(u+2*h)+s);else u=l>0?-o:o,d=Math.max(0,-(l*u+a)),p=-d*d+u*(u+2*h)+s;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zr).addScaledVector(Xi,u),p}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,o=t.radius*t.radius;if(i>o)return null;const l=Math.sqrt(o-i),a=n-l,h=n+l;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,l,a,h;const s=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return s>=0?(n=(t.min.x-u.x)*s,i=(t.max.x-u.x)*s):(n=(t.max.x-u.x)*s,i=(t.min.x-u.x)*s),c>=0?(o=(t.min.y-u.y)*c,l=(t.max.y-u.y)*c):(o=(t.max.y-u.y)*c,l=(t.min.y-u.y)*c),n>l||o>i||((o>n||isNaN(n))&&(n=o),(l<i||isNaN(i))&&(i=l),d>=0?(a=(t.min.z-u.z)*d,h=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,h=(t.min.z-u.z)*d),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,i,o){Jr.subVectors(e,t),qi.subVectors(n,t),Qr.crossVectors(Jr,qi);let l=this.direction.dot(Qr),a;if(l>0){if(i)return null;a=1}else if(l<0)a=-1,l=-l;else return null;rn.subVectors(this.origin,t);const h=a*this.direction.dot(qi.crossVectors(rn,qi));if(h<0)return null;const s=a*this.direction.dot(Jr.cross(rn));if(s<0||h+s>l)return null;const c=-a*rn.dot(Qr);return c<0?null:this.at(c/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,o,l,a,h,s,c,d,u,p,f,g,v){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,l,a,h,s,c,d,u,p,f,g,v)}set(t,e,n,i,o,l,a,h,s,c,d,u,p,f,g,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=l,m[9]=a,m[13]=h,m[2]=s,m[6]=c,m[10]=d,m[14]=u,m[3]=p,m[7]=f,m[11]=g,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hn.setFromMatrixColumn(t,0).length(),o=1/Hn.setFromMatrixColumn(t,1).length(),l=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,l=Math.cos(n),a=Math.sin(n),h=Math.cos(i),s=Math.sin(i),c=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=l*c,p=l*d,f=a*c,g=a*d;e[0]=h*c,e[4]=-h*d,e[8]=s,e[1]=p+f*s,e[5]=u-g*s,e[9]=-a*h,e[2]=g-u*s,e[6]=f+p*s,e[10]=l*h}else if(t.order==="YXZ"){const u=h*c,p=h*d,f=s*c,g=s*d;e[0]=u+g*a,e[4]=f*a-p,e[8]=l*s,e[1]=l*d,e[5]=l*c,e[9]=-a,e[2]=p*a-f,e[6]=g+u*a,e[10]=l*h}else if(t.order==="ZXY"){const u=h*c,p=h*d,f=s*c,g=s*d;e[0]=u-g*a,e[4]=-l*d,e[8]=f+p*a,e[1]=p+f*a,e[5]=l*c,e[9]=g-u*a,e[2]=-l*s,e[6]=a,e[10]=l*h}else if(t.order==="ZYX"){const u=l*c,p=l*d,f=a*c,g=a*d;e[0]=h*c,e[4]=f*s-p,e[8]=u*s+g,e[1]=h*d,e[5]=g*s+u,e[9]=p*s-f,e[2]=-s,e[6]=a*h,e[10]=l*h}else if(t.order==="YZX"){const u=l*h,p=l*s,f=a*h,g=a*s;e[0]=h*c,e[4]=g-u*d,e[8]=f*d+p,e[1]=d,e[5]=l*c,e[9]=-a*c,e[2]=-s*c,e[6]=p*d+f,e[10]=u-g*d}else if(t.order==="XZY"){const u=l*h,p=l*s,f=a*h,g=a*s;e[0]=h*c,e[4]=-d,e[8]=s*c,e[1]=u*d+g,e[5]=l*c,e[9]=p*d-f,e[2]=f*d-p,e[6]=a*c,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sh,t,oh)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),sn.crossVectors(n,we),sn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),sn.crossVectors(n,we)),sn.normalize(),Yi.crossVectors(we,sn),i[0]=sn.x,i[4]=Yi.x,i[8]=we.x,i[1]=sn.y,i[5]=Yi.y,i[9]=we.y,i[2]=sn.z,i[6]=Yi.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,l=n[0],a=n[4],h=n[8],s=n[12],c=n[1],d=n[5],u=n[9],p=n[13],f=n[2],g=n[6],v=n[10],m=n[14],A=n[3],S=n[7],C=n[11],P=n[15],U=i[0],L=i[4],V=i[8],b=i[12],_=i[1],x=i[5],T=i[9],F=i[13],R=i[2],H=i[6],$=i[10],Y=i[14],ot=i[3],Z=i[7],nt=i[11],z=i[15];return o[0]=l*U+a*_+h*R+s*ot,o[4]=l*L+a*x+h*H+s*Z,o[8]=l*V+a*T+h*$+s*nt,o[12]=l*b+a*F+h*Y+s*z,o[1]=c*U+d*_+u*R+p*ot,o[5]=c*L+d*x+u*H+p*Z,o[9]=c*V+d*T+u*$+p*nt,o[13]=c*b+d*F+u*Y+p*z,o[2]=f*U+g*_+v*R+m*ot,o[6]=f*L+g*x+v*H+m*Z,o[10]=f*V+g*T+v*$+m*nt,o[14]=f*b+g*F+v*Y+m*z,o[3]=A*U+S*_+C*R+P*ot,o[7]=A*L+S*x+C*H+P*Z,o[11]=A*V+S*T+C*$+P*nt,o[15]=A*b+S*F+C*Y+P*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],l=t[1],a=t[5],h=t[9],s=t[13],c=t[2],d=t[6],u=t[10],p=t[14],f=t[3],g=t[7],v=t[11],m=t[15];return f*(+o*h*d-i*s*d-o*a*u+n*s*u+i*a*p-n*h*p)+g*(+e*h*p-e*s*u+o*l*u-i*l*p+i*s*c-o*h*c)+v*(+e*s*d-e*a*p-o*l*d+n*l*p+o*a*c-n*s*c)+m*(-i*a*c-e*h*d+e*a*u+i*l*d-n*l*u+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],l=t[4],a=t[5],h=t[6],s=t[7],c=t[8],d=t[9],u=t[10],p=t[11],f=t[12],g=t[13],v=t[14],m=t[15],A=d*v*s-g*u*s+g*h*p-a*v*p-d*h*m+a*u*m,S=f*u*s-c*v*s-f*h*p+l*v*p+c*h*m-l*u*m,C=c*g*s-f*d*s+f*a*p-l*g*p-c*a*m+l*d*m,P=f*d*h-c*g*h-f*a*u+l*g*u+c*a*v-l*d*v,U=e*A+n*S+i*C+o*P;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return t[0]=A*L,t[1]=(g*u*o-d*v*o-g*i*p+n*v*p+d*i*m-n*u*m)*L,t[2]=(a*v*o-g*h*o+g*i*s-n*v*s-a*i*m+n*h*m)*L,t[3]=(d*h*o-a*u*o-d*i*s+n*u*s+a*i*p-n*h*p)*L,t[4]=S*L,t[5]=(c*v*o-f*u*o+f*i*p-e*v*p-c*i*m+e*u*m)*L,t[6]=(f*h*o-l*v*o-f*i*s+e*v*s+l*i*m-e*h*m)*L,t[7]=(l*u*o-c*h*o+c*i*s-e*u*s-l*i*p+e*h*p)*L,t[8]=C*L,t[9]=(f*d*o-c*g*o-f*n*p+e*g*p+c*n*m-e*d*m)*L,t[10]=(l*g*o-f*a*o+f*n*s-e*g*s-l*n*m+e*a*m)*L,t[11]=(c*a*o-l*d*o-c*n*s+e*d*s+l*n*p-e*a*p)*L,t[12]=P*L,t[13]=(c*g*i-f*d*i+f*n*u-e*g*u-c*n*v+e*d*v)*L,t[14]=(f*a*i-l*g*i-f*n*h+e*g*h+l*n*v-e*a*v)*L,t[15]=(l*d*i-c*a*i+c*n*h-e*d*h-l*n*u+e*a*u)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,l=t.x,a=t.y,h=t.z,s=o*l,c=o*a;return this.set(s*l+n,s*a-i*h,s*h+i*a,0,s*a+i*h,c*a+n,c*h-i*l,0,s*h-i*a,c*h+i*l,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,l){return this.set(1,n,o,0,t,1,l,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,l=e._y,a=e._z,h=e._w,s=o+o,c=l+l,d=a+a,u=o*s,p=o*c,f=o*d,g=l*c,v=l*d,m=a*d,A=h*s,S=h*c,C=h*d,P=n.x,U=n.y,L=n.z;return i[0]=(1-(g+m))*P,i[1]=(p+C)*P,i[2]=(f-S)*P,i[3]=0,i[4]=(p-C)*U,i[5]=(1-(u+m))*U,i[6]=(v+A)*U,i[7]=0,i[8]=(f+S)*L,i[9]=(v-A)*L,i[10]=(1-(u+g))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Hn.set(i[0],i[1],i[2]).length();const l=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Ue.copy(this);const s=1/o,c=1/l,d=1/a;return Ue.elements[0]*=s,Ue.elements[1]*=s,Ue.elements[2]*=s,Ue.elements[4]*=c,Ue.elements[5]*=c,Ue.elements[6]*=c,Ue.elements[8]*=d,Ue.elements[9]*=d,Ue.elements[10]*=d,e.setFromRotationMatrix(Ue),n.x=o,n.y=l,n.z=a,this}makePerspective(t,e,n,i,o,l,a=Je){const h=this.elements,s=2*o/(e-t),c=2*o/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,f;if(a===Je)p=-(l+o)/(l-o),f=-2*l*o/(l-o);else if(a===Sr)p=-l/(l-o),f=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=s,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=c,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=f,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,o,l,a=Je){const h=this.elements,s=1/(e-t),c=1/(n-i),d=1/(l-o),u=(e+t)*s,p=(n+i)*c;let f,g;if(a===Je)f=(l+o)*d,g=-2*d;else if(a===Sr)f=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*s,h[4]=0,h[8]=0,h[12]=-u,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=g,h[14]=-f,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hn=new k,Ue=new te,sh=new k(0,0,0),oh=new k(1,1,1),sn=new k,Yi=new k,we=new k,No=new te,ko=new Pn;class Pr{constructor(t=0,e=0,n=0,i=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],l=i[4],a=i[8],h=i[1],s=i[5],c=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(u,s),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(h,s)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-l,s)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,s));break;case"YZX":this._z=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,s),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,s),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ah=0;const Fo=new k,Gn=new Pn,$e=new te,Ki=new k,yi=new k,lh=new k,ch=new Pn,Bo=new k(1,0,0),zo=new k(0,1,0),Ho=new k(0,0,1),hh={type:"added"},dh={type:"removed"};class ye extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Qe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new k,e=new Pr,n=new Pn,i=new k(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Gt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(Bo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(yi,Ki,this.up):$e.lookAt(Ki,yi,this.up),this.quaternion.setFromRotationMatrix($e),i&&($e.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix($e),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,o=this.children.length;i<o;i++){const l=this.children[i].getObjectsByProperty(t,e);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,l=i.length;o<l;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function o(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let s=0,c=h.length;s<c;s++){const d=h[s];o(t.shapes,d)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,s=this.material.length;h<s;h++)a.push(o(t.materials,this.material[h]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(o(t.animations,h))}}if(e){const a=l(t.geometries),h=l(t.materials),s=l(t.textures),c=l(t.images),d=l(t.shapes),u=l(t.skeletons),p=l(t.animations),f=l(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),s.length>0&&(n.textures=s),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function l(a){const h=[];for(const s in a){const c=a[s];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new k(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ie=new k,je=new k,ts=new k,Xe=new k,Vn=new k,Wn=new k,Go=new k,es=new k,ns=new k,is=new k;let Zi=!1;class Pe{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ie.subVectors(t,e),i.cross(Ie);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ie.subVectors(i,e),je.subVectors(n,e),ts.subVectors(t,e);const l=Ie.dot(Ie),a=Ie.dot(je),h=Ie.dot(ts),s=je.dot(je),c=je.dot(ts),d=l*s-a*a;if(d===0)return o.set(-2,-1,-1);const u=1/d,p=(s*h-a*c)*u,f=(l*c-a*h)*u;return o.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xe),Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getUV(t,e,n,i,o,l,a,h){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(t,e,n,i,o,l,a,h)}static getInterpolation(t,e,n,i,o,l,a,h){return this.getBarycoord(t,e,n,i,Xe),h.setScalar(0),h.addScaledVector(o,Xe.x),h.addScaledVector(l,Xe.y),h.addScaledVector(a,Xe.z),h}static isFrontFacing(t,e,n,i){return Ie.subVectors(n,e),je.subVectors(t,e),Ie.cross(je).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),je.subVectors(this.a,this.b),Ie.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),Pe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return Pe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Pe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let l,a;Vn.subVectors(i,n),Wn.subVectors(o,n),es.subVectors(t,n);const h=Vn.dot(es),s=Wn.dot(es);if(h<=0&&s<=0)return e.copy(n);ns.subVectors(t,i);const c=Vn.dot(ns),d=Wn.dot(ns);if(c>=0&&d<=c)return e.copy(i);const u=h*d-c*s;if(u<=0&&h>=0&&c<=0)return l=h/(h-c),e.copy(n).addScaledVector(Vn,l);is.subVectors(t,o);const p=Vn.dot(is),f=Wn.dot(is);if(f>=0&&p<=f)return e.copy(o);const g=p*s-h*f;if(g<=0&&s>=0&&f<=0)return a=s/(s-f),e.copy(n).addScaledVector(Wn,a);const v=c*f-p*d;if(v<=0&&d-c>=0&&p-f>=0)return Go.subVectors(o,i),a=(d-c)/(d-c+(p-f)),e.copy(i).addScaledVector(Go,a);const m=1/(v+g+u);return l=g*m,a=u*m,e.copy(n).addScaledVector(Vn,l).addScaledVector(Wn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let uh=0;class gi extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Qe(),this.name="",this.type="Material",this.blending=si,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const l=[];for(const a in o){const h=o[a];delete h.metadata,l.push(h)}return l}if(e){const o=i(t.textures),l=i(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function rs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Fs(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=rs(l,o,t+1/3),this.g=rs(l,o,t),this.b=rs(l,o,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=i[1],a=i[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Xt.fromWorkingColorSpace(pe.copy(this),t),Math.round(ne(pe.r*255,0,255))*65536+Math.round(ne(pe.g*255,0,255))*256+Math.round(ne(pe.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,i=pe.g,o=pe.b,l=Math.max(n,i,o),a=Math.min(n,i,o);let h,s;const c=(a+l)/2;if(a===l)h=0,s=0;else{const d=l-a;switch(s=c<=.5?d/(l+a):d/(2-l-a),l){case n:h=(i-o)/d+(i<o?6:0);break;case i:h=(o-n)/d+2;break;case o:h=(n-i)/d+4;break}h/=6}return t.h=h,t.s=s,t.l=c,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=ue){Xt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,i=pe.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(on),this.setHSL(on.h+t,on.s+e,on.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(Ji);const n=Pi(on.h,Ji.h,e),i=Pi(on.s,Ji.s,e),o=Pi(on.l,Ji.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new $t;$t.NAMES=al;class ll extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=fh();function fh(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let h=0;h<256;++h){const s=h-127;s<-27?(n[h]=0,n[h|256]=32768,i[h]=24,i[h|256]=24):s<-14?(n[h]=1024>>-s-14,n[h|256]=1024>>-s-14|32768,i[h]=-s-1,i[h|256]=-s-1):s<=15?(n[h]=s+15<<10,n[h|256]=s+15<<10|32768,i[h]=13,i[h|256]=13):s<128?(n[h]=31744,n[h|256]=64512,i[h]=24,i[h|256]=24):(n[h]=31744,n[h|256]=64512,i[h]=13,i[h|256]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),a=new Uint32Array(64);for(let h=1;h<1024;++h){let s=h<<13,c=0;for(;!(s&8388608);)s<<=1,c-=8388608;s&=-8388609,c+=947912704,o[h]=s|c}for(let h=1024;h<2048;++h)o[h]=939524096+(h-1024<<13);for(let h=1;h<31;++h)l[h]=h<<23;l[31]=1199570944,l[32]=2147483648;for(let h=33;h<63;++h)l[h]=2147483648+(h-32<<23);l[63]=3347054592;for(let h=1;h<64;++h)h!==32&&(a[h]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:l,offsetTable:a}}function ph(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ne(r,-65504,65504),Ze.floatView[0]=r;const t=Ze.uint32View[0],e=t>>23&511;return Ze.baseTable[e]+((t&8388607)>>Ze.shiftTable[e])}function mh(r){const t=r>>10;return Ze.uint32View[0]=Ze.mantissaTable[Ze.offsetTable[t]+(r&1023)]+Ze.exponentTable[t],Ze.floatView[0]}const Gm={toHalfFloat:ph,fromHalfFloat:mh},oe=new k,Qi=new Lt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rs,this.updateRange={offset:0,count:-1},this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ze(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ze(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ze(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ze(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),o=jt(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class cl extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gh=0;const Ce=new te,ss=new ye,$n=new k,Te=new Fi,Si=new Fi,ce=new k;class Oe extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Qe(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(el(t)?hl:cl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return ss.lookAt(t),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Te.setFromBufferAttribute(o),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const a=e[o];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(ce.addVectors(Te.min,Si.min),Te.expandByPoint(ce),ce.addVectors(Te.max,Si.max),Te.expandByPoint(ce)):(Te.expandByPoint(Si.min),Te.expandByPoint(Si.max))}Te.getCenter(n);let i=0;for(let o=0,l=t.count;o<l;o++)ce.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let o=0,l=e.length;o<l;o++){const a=e[o],h=this.morphTargetsRelative;for(let s=0,c=a.count;s<c;s++)ce.fromBufferAttribute(a,s),h&&($n.fromBufferAttribute(t,s),ce.add($n)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,l=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,s=[],c=[];for(let _=0;_<a;_++)s[_]=new k,c[_]=new k;const d=new k,u=new k,p=new k,f=new Lt,g=new Lt,v=new Lt,m=new k,A=new k;function S(_,x,T){d.fromArray(i,_*3),u.fromArray(i,x*3),p.fromArray(i,T*3),f.fromArray(l,_*2),g.fromArray(l,x*2),v.fromArray(l,T*2),u.sub(d),p.sub(d),g.sub(f),v.sub(f);const F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(F),A.copy(p).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(F),s[_].add(m),s[x].add(m),s[T].add(m),c[_].add(A),c[x].add(A),c[T].add(A))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let _=0,x=C.length;_<x;++_){const T=C[_],F=T.start,R=T.count;for(let H=F,$=F+R;H<$;H+=3)S(n[H+0],n[H+1],n[H+2])}const P=new k,U=new k,L=new k,V=new k;function b(_){L.fromArray(o,_*3),V.copy(L);const x=s[_];P.copy(x),P.sub(L.multiplyScalar(L.dot(x))).normalize(),U.crossVectors(V,x);const F=U.dot(c[_])<0?-1:1;h[_*4]=P.x,h[_*4+1]=P.y,h[_*4+2]=P.z,h[_*4+3]=F}for(let _=0,x=C.length;_<x;++_){const T=C[_],F=T.start,R=T.count;for(let H=F,$=F+R;H<$;H+=3)b(n[H+0]),b(n[H+1]),b(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new k,o=new k,l=new k,a=new k,h=new k,s=new k,c=new k,d=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){const f=t.getX(u+0),g=t.getX(u+1),v=t.getX(u+2);i.fromBufferAttribute(e,f),o.fromBufferAttribute(e,g),l.fromBufferAttribute(e,v),c.subVectors(l,o),d.subVectors(i,o),c.cross(d),a.fromBufferAttribute(n,f),h.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),a.add(c),h.add(c),s.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(v,s.x,s.y,s.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),l.fromBufferAttribute(e,u+2),c.subVectors(l,o),d.subVectors(i,o),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(a,h){const s=a.array,c=a.itemSize,d=a.normalized,u=new s.constructor(h.length*c);let p=0,f=0;for(let g=0,v=h.length;g<v;g++){a.isInterleavedBufferAttribute?p=h[g]*a.data.stride+a.offset:p=h[g]*c;for(let m=0;m<c;m++)u[f++]=s[p++]}return new ke(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],s=t(h,n);e.setAttribute(a,s)}const o=this.morphAttributes;for(const a in o){const h=[],s=o[a];for(let c=0,d=s.length;c<d;c++){const u=s[c],p=t(u,n);h.push(p)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,h=l.length;a<h;a++){const s=l[a];e.addGroup(s.start,s.count,s.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const s in h)h[s]!==void 0&&(t[s]=h[s]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const s=n[h];t.data.attributes[h]=s.toJSON(t.data)}const i={};let o=!1;for(const h in this.morphAttributes){const s=this.morphAttributes[h],c=[];for(let d=0,u=s.length;d<u;d++){const p=s[d];c.push(p.toJSON(t.data))}c.length>0&&(i[h]=c,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const s in i){const c=i[s];this.setAttribute(s,c.clone(e))}const o=t.morphAttributes;for(const s in o){const c=[],d=o[s];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(e));this.morphAttributes[s]=c}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let s=0,c=l.length;s<c;s++){const d=l[s];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new te,xn=new sl,tr=new Bs,Wo=new k,jn=new k,Xn=new k,qn=new k,os=new k,er=new k,nr=new Lt,ir=new Lt,rr=new Lt,$o=new k,jo=new k,Xo=new k,sr=new k,or=new k;class dn extends ye{constructor(t=new Oe,e=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){er.set(0,0,0);for(let h=0,s=o.length;h<s;h++){const c=a[h],d=o[h];c!==0&&(os.fromBufferAttribute(d,t),l?er.addScaledVector(os,c):er.addScaledVector(os.sub(e),c))}e.add(er)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(o),xn.copy(t.ray).recast(t.near),!(tr.containsPoint(xn.origin)===!1&&(xn.intersectSphere(tr,Wo)===null||xn.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(Vo.copy(o).invert(),xn.copy(t.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,l=this.material,a=o.index,h=o.attributes.position,s=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(l))for(let f=0,g=u.length;f<g;f++){const v=u[f],m=l[v.materialIndex],A=Math.max(v.start,p.start),S=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let C=A,P=S;C<P;C+=3){const U=a.getX(C),L=a.getX(C+1),V=a.getX(C+2);i=ar(this,m,t,n,s,c,d,U,L,V),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let v=f,m=g;v<m;v+=3){const A=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);i=ar(this,l,t,n,s,c,d,A,S,C),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(l))for(let f=0,g=u.length;f<g;f++){const v=u[f],m=l[v.materialIndex],A=Math.max(v.start,p.start),S=Math.min(h.count,Math.min(v.start+v.count,p.start+p.count));for(let C=A,P=S;C<P;C+=3){const U=C,L=C+1,V=C+2;i=ar(this,m,t,n,s,c,d,U,L,V),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),g=Math.min(h.count,p.start+p.count);for(let v=f,m=g;v<m;v+=3){const A=v,S=v+1,C=v+2;i=ar(this,l,t,n,s,c,d,A,S,C),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}}function vh(r,t,e,n,i,o,l,a){let h;if(t.side===Se?h=n.intersectTriangle(l,o,i,!0,a):h=n.intersectTriangle(i,o,l,t.side===mn,a),h===null)return null;or.copy(a),or.applyMatrix4(r.matrixWorld);const s=e.ray.origin.distanceTo(or);return s<e.near||s>e.far?null:{distance:s,point:or.clone(),object:r}}function ar(r,t,e,n,i,o,l,a,h,s){r.getVertexPosition(a,jn),r.getVertexPosition(h,Xn),r.getVertexPosition(s,qn);const c=vh(r,t,e,n,jn,Xn,qn,sr);if(c){i&&(nr.fromBufferAttribute(i,a),ir.fromBufferAttribute(i,h),rr.fromBufferAttribute(i,s),c.uv=Pe.getInterpolation(sr,jn,Xn,qn,nr,ir,rr,new Lt)),o&&(nr.fromBufferAttribute(o,a),ir.fromBufferAttribute(o,h),rr.fromBufferAttribute(o,s),c.uv1=Pe.getInterpolation(sr,jn,Xn,qn,nr,ir,rr,new Lt),c.uv2=c.uv1),l&&($o.fromBufferAttribute(l,a),jo.fromBufferAttribute(l,h),Xo.fromBufferAttribute(l,s),c.normal=Pe.getInterpolation(sr,jn,Xn,qn,$o,jo,Xo,new k),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:h,c:s,normal:new k,materialIndex:0};Pe.getNormal(jn,Xn,qn,d.normal),c.face=d}return c}class Bi extends Oe{constructor(t=1,e=1,n=1,i=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:l};const a=this;i=Math.floor(i),o=Math.floor(o),l=Math.floor(l);const h=[],s=[],c=[],d=[];let u=0,p=0;f("z","y","x",-1,-1,n,e,t,l,o,0),f("z","y","x",1,-1,n,e,-t,l,o,1),f("x","z","y",1,1,t,n,e,i,l,2),f("x","z","y",1,-1,t,n,-e,i,l,3),f("x","y","z",1,-1,t,e,n,i,o,4),f("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(h),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(d,2));function f(g,v,m,A,S,C,P,U,L,V,b){const _=C/L,x=P/V,T=C/2,F=P/2,R=U/2,H=L+1,$=V+1;let Y=0,ot=0;const Z=new k;for(let nt=0;nt<$;nt++){const z=nt*x-F;for(let tt=0;tt<H;tt++){const _t=tt*_-T;Z[g]=_t*A,Z[v]=z*S,Z[m]=R,s.push(Z.x,Z.y,Z.z),Z[g]=0,Z[v]=0,Z[m]=U>0?1:-1,c.push(Z.x,Z.y,Z.z),d.push(tt/L),d.push(1-nt/V),Y+=1}}for(let nt=0;nt<V;nt++)for(let z=0;z<L;z++){const tt=u+z+H*nt,_t=u+z+H*(nt+1),yt=u+(z+1)+H*(nt+1),K=u+(z+1)+H*nt;h.push(tt,_t,K),h.push(_t,yt,K),ot+=6}a.addGroup(p,ot,b),p+=ot,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _e(r){const t={};for(let e=0;e<r.length;e++){const n=ui(r[e]);for(const i in n)t[i]=n[i]}return t}function _h(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function dl(r){return r.getRenderTarget()===null?r.outputColorSpace:Xt.workingColorSpace}const bh={clone:ui,merge:_e};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=_h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?e.uniforms[i]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[i]={type:"m4",value:l.toArray()}:e.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ul extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Je}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends ul{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,s=l.fullHeight;o+=l.offsetX*i/h,e-=l.offsetY*n/s,i*=l.width/h,n*=l.height/s}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yn=-90,Kn=1;class Sh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Le(Yn,Kn,t,e);i.layers=this.layers,this.add(i);const o=new Le(Yn,Kn,t,e);o.layers=this.layers,this.add(o);const l=new Le(Yn,Kn,t,e);l.layers=this.layers,this.add(l);const a=new Le(Yn,Kn,t,e);a.layers=this.layers,this.add(a);const h=new Le(Yn,Kn,t,e);h.layers=this.layers,this.add(h);const s=new Le(Yn,Kn,t,e);s.layers=this.layers,this.add(s)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,l,a,h]=e;for(const s of e)this.remove(s);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const s of e)this.add(s),s.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,a,h,s,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,l),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,s),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(d,u,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class fl extends xe{constructor(t,e,n,i,o,l,a,h,s,c){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,i,o,l,a,h,s,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eh extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Rn?ue:De),this.texture=new fl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),o=new Ln({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:un});o.uniforms.tEquirect.value=e;const l=new dn(i,o),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=be),new Sh(1,10,this).update(t,l),e.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,i);t.setRenderTarget(o)}}const as=new k,Mh=new k,wh=new Gt;class an{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=as.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(as),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wh.getNormalMatrix(t),i=this.coplanarPoint(as).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Bs,lr=new k;class zs{constructor(t=new an,e=new an,n=new an,i=new an,o=new an,l=new an){this.planes=[t,e,n,i,o,l]}set(t,e,n,i,o,l){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je){const n=this.planes,i=t.elements,o=i[0],l=i[1],a=i[2],h=i[3],s=i[4],c=i[5],d=i[6],u=i[7],p=i[8],f=i[9],g=i[10],v=i[11],m=i[12],A=i[13],S=i[14],C=i[15];if(n[0].setComponents(h-o,u-s,v-p,C-m).normalize(),n[1].setComponents(h+o,u+s,v+p,C+m).normalize(),n[2].setComponents(h+l,u+c,v+f,C+A).normalize(),n[3].setComponents(h-l,u-c,v-f,C-A).normalize(),n[4].setComponents(h-a,u-d,v-g,C-S).normalize(),e===Je)n[5].setComponents(h+a,u+d,v+g,C+S).normalize();else if(e===Sr)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(lr.x=i.normal.x>0?t.max.x:t.min.x,lr.y=i.normal.y>0?t.max.y:t.min.y,lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let r=null,t=!1,e=null,n=null;function i(o,l){e(o,l),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){r=o}}}function Th(r,t){const e=t.isWebGL2,n=new WeakMap;function i(s,c){const d=s.array,u=s.usage,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,d,u),s.onUploadCallback();let f;if(d instanceof Float32Array)f=r.FLOAT;else if(d instanceof Uint16Array)if(s.isFloat16BufferAttribute)if(e)f=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=r.SHORT;else if(d instanceof Uint32Array)f=r.UNSIGNED_INT;else if(d instanceof Int32Array)f=r.INT;else if(d instanceof Int8Array)f=r.BYTE;else if(d instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:s.version}}function o(s,c,d){const u=c.array,p=c.updateRange;r.bindBuffer(d,s),p.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function l(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=n.get(s);c&&(r.deleteBuffer(c.buffer),n.delete(s))}function h(s,c){if(s.isGLBufferAttribute){const u=n.get(s);(!u||u.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const d=n.get(s);d===void 0?n.set(s,i(s,c)):d.version<s.version&&(o(d.buffer,s,c),d.version=s.version)}return{get:l,remove:a,update:h}}class Hs extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,l=e/2,a=Math.floor(n),h=Math.floor(i),s=a+1,c=h+1,d=t/a,u=e/h,p=[],f=[],g=[],v=[];for(let m=0;m<c;m++){const A=m*u-l;for(let S=0;S<s;S++){const C=S*d-o;f.push(C,-A,0),g.push(0,0,1),v.push(S/a),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let A=0;A<a;A++){const S=A+s*m,C=A+s*(m+1),P=A+1+s*(m+1),U=A+1+s*m;p.push(S,C,U),p.push(C,P,U)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
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
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
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
#endif`,Bh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kh=`vec3 transformedNormal = objectNormal;
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
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`
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
}`,id=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
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
#endif`,Md=`struct PhysicalMaterial {
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
}`,wd=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Id=`#if defined( USE_POINTS_UV )
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
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,su=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cu=`float getShadowMask() {
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
}`,hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,du=`#ifdef USE_SKINNING
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
#endif`,uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fu=`#ifdef USE_SKINNING
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
#endif`,pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_u=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#ifdef USE_TRANSMISSION
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
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wu=`uniform sampler2D t2D;
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
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Au=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`#include <common>
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
}`,Lu=`#if DEPTH_PACKING == 3200
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
}`,Du=`#define DISTANCE
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
}`,Ou=`#define DISTANCE
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`uniform float scale;
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
}`,ku=`uniform vec3 diffuse;
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
}`,Fu=`#include <common>
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
}`,Bu=`uniform vec3 diffuse;
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
}`,zu=`#define LAMBERT
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
}`,Hu=`#define LAMBERT
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
}`,Gu=`#define MATCAP
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
}`,Vu=`#define MATCAP
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
}`,Wu=`#define NORMAL
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
}`,$u=`#define NORMAL
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
}`,ju=`#define PHONG
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
}`,Xu=`#define PHONG
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
}`,qu=`#define STANDARD
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
}`,Yu=`#define STANDARD
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
}`,Ku=`#define TOON
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
}`,Zu=`#define TOON
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
}`,Ju=`uniform float size;
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
}`,Qu=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,ef=`uniform vec3 color;
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
}`,nf=`uniform float rotation;
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
}`,rf=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Ah,alphahash_pars_fragment:Rh,alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Lh,alphatest_pars_fragment:Dh,aomap_fragment:Oh,aomap_pars_fragment:Uh,begin_vertex:Ih,beginnormal_vertex:Nh,bsdfs:kh,iridescence_fragment:Fh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Vh,color_fragment:Wh,color_pars_fragment:$h,color_pars_vertex:jh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:Zh,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:rd,envmap_pars_fragment:sd,envmap_pars_vertex:od,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:dd,gradientmap_pars_fragment:ud,lightmap_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:vd,lights_toon_fragment:bd,lights_toon_pars_fragment:xd,lights_phong_fragment:yd,lights_phong_pars_fragment:Sd,lights_physical_fragment:Ed,lights_physical_pars_fragment:Md,lights_fragment_begin:wd,lights_fragment_maps:Td,lights_fragment_end:Ad,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Dd,map_pars_fragment:Od,map_particle_fragment:Ud,map_particle_pars_fragment:Id,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:kd,morphcolor_vertex:Fd,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:Hd,normal_fragment_begin:Gd,normal_fragment_maps:Vd,normal_pars_fragment:Wd,normal_pars_vertex:$d,normal_vertex:jd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:Qd,premultiplied_alpha_fragment:tu,project_vertex:eu,dithering_fragment:nu,dithering_pars_fragment:iu,roughnessmap_fragment:ru,roughnessmap_pars_fragment:su,shadowmap_pars_fragment:ou,shadowmap_pars_vertex:au,shadowmap_vertex:lu,shadowmask_pars_fragment:cu,skinbase_vertex:hu,skinning_pars_vertex:du,skinning_vertex:uu,skinnormal_vertex:fu,specularmap_fragment:pu,specularmap_pars_fragment:mu,tonemapping_fragment:gu,tonemapping_pars_fragment:vu,transmission_fragment:_u,transmission_pars_fragment:bu,uv_pars_fragment:xu,uv_pars_vertex:yu,uv_vertex:Su,worldpos_vertex:Eu,background_vert:Mu,background_frag:wu,backgroundCube_vert:Tu,backgroundCube_frag:Au,cube_vert:Ru,cube_frag:Cu,depth_vert:Pu,depth_frag:Lu,distanceRGBA_vert:Du,distanceRGBA_frag:Ou,equirect_vert:Uu,equirect_frag:Iu,linedashed_vert:Nu,linedashed_frag:ku,meshbasic_vert:Fu,meshbasic_frag:Bu,meshlambert_vert:zu,meshlambert_frag:Hu,meshmatcap_vert:Gu,meshmatcap_frag:Vu,meshnormal_vert:Wu,meshnormal_frag:$u,meshphong_vert:ju,meshphong_frag:Xu,meshphysical_vert:qu,meshphysical_frag:Yu,meshtoon_vert:Ku,meshtoon_frag:Zu,points_vert:Ju,points_frag:Qu,shadow_vert:tf,shadow_frag:ef,sprite_vert:nf,sprite_frag:rf},xt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Be={basic:{uniforms:_e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:_e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:_e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:_e([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:_e([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:_e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:_e([xt.points,xt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:_e([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:_e([xt.common,xt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:_e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:_e([xt.sprite,xt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:_e([xt.common,xt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:_e([xt.lights,xt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Be.physical={uniforms:_e([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const cr={r:0,b:0,g:0};function sf(r,t,e,n,i,o,l){const a=new $t(0);let h=o===!0?0:1,s,c,d=null,u=0,p=null;function f(v,m){let A=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?e:t).get(S)),S===null?g(a,h):S&&S.isColor&&(g(S,1),A=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Rr)?(c===void 0&&(c=new dn(new Bi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ui(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Zt,(d!==S||u!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(s===void 0&&(s=new dn(new Hs(2,2),new Ln({name:"BackgroundMaterial",uniforms:ui(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(s)),s.material.uniforms.t2D.value=S,s.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,s.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Zt,S.matrixAutoUpdate===!0&&S.updateMatrix(),s.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==r.toneMapping)&&(s.material.needsUpdate=!0,d=S,u=S.version,p=r.toneMapping),s.layers.enableAll(),v.unshift(s,s.geometry,s.material,0,0,null))}function g(v,m){v.getRGB(cr,dl(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,m,l)}return{getClearColor:function(){return a},setClearColor:function(v,m=1){a.set(v),h=m,g(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,g(a,h)},render:f}}function of(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),l=n.isWebGL2||o!==null,a={},h=v(null);let s=h,c=!1;function d(R,H,$,Y,ot){let Z=!1;if(l){const nt=g(Y,$,H);s!==nt&&(s=nt,p(s.object)),Z=m(R,Y,$,ot),Z&&A(R,Y,$,ot)}else{const nt=H.wireframe===!0;(s.geometry!==Y.id||s.program!==$.id||s.wireframe!==nt)&&(s.geometry=Y.id,s.program=$.id,s.wireframe=nt,Z=!0)}ot!==null&&e.update(ot,r.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,V(R,H,$,Y),ot!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function u(){return n.isWebGL2?r.createVertexArray():o.createVertexArrayOES()}function p(R){return n.isWebGL2?r.bindVertexArray(R):o.bindVertexArrayOES(R)}function f(R){return n.isWebGL2?r.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function g(R,H,$){const Y=$.wireframe===!0;let ot=a[R.id];ot===void 0&&(ot={},a[R.id]=ot);let Z=ot[H.id];Z===void 0&&(Z={},ot[H.id]=Z);let nt=Z[Y];return nt===void 0&&(nt=v(u()),Z[Y]=nt),nt}function v(R){const H=[],$=[],Y=[];for(let ot=0;ot<i;ot++)H[ot]=0,$[ot]=0,Y[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:Y,object:R,attributes:{},index:null}}function m(R,H,$,Y){const ot=s.attributes,Z=H.attributes;let nt=0;const z=$.getAttributes();for(const tt in z)if(z[tt].location>=0){const yt=ot[tt];let K=Z[tt];if(K===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),yt===void 0||yt.attribute!==K||K&&yt.data!==K.data)return!0;nt++}return s.attributesNum!==nt||s.index!==Y}function A(R,H,$,Y){const ot={},Z=H.attributes;let nt=0;const z=$.getAttributes();for(const tt in z)if(z[tt].location>=0){let yt=Z[tt];yt===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor));const K={};K.attribute=yt,yt&&yt.data&&(K.data=yt.data),ot[tt]=K,nt++}s.attributes=ot,s.attributesNum=nt,s.index=Y}function S(){const R=s.newAttributes;for(let H=0,$=R.length;H<$;H++)R[H]=0}function C(R){P(R,0)}function P(R,H){const $=s.newAttributes,Y=s.enabledAttributes,ot=s.attributeDivisors;$[R]=1,Y[R]===0&&(r.enableVertexAttribArray(R),Y[R]=1),ot[R]!==H&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,H),ot[R]=H)}function U(){const R=s.newAttributes,H=s.enabledAttributes;for(let $=0,Y=H.length;$<Y;$++)H[$]!==R[$]&&(r.disableVertexAttribArray($),H[$]=0)}function L(R,H,$,Y,ot,Z,nt){nt===!0?r.vertexAttribIPointer(R,H,$,ot,Z):r.vertexAttribPointer(R,H,$,Y,ot,Z)}function V(R,H,$,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const ot=Y.attributes,Z=$.getAttributes(),nt=H.defaultAttributeValues;for(const z in Z){const tt=Z[z];if(tt.location>=0){let _t=ot[z];if(_t===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),_t!==void 0){const yt=_t.normalized,K=_t.itemSize,E=e.get(_t);if(E===void 0)continue;const I=E.buffer,B=E.type,G=E.bytesPerElement,ht=n.isWebGL2===!0&&(B===r.INT||B===r.UNSIGNED_INT||_t.gpuType===Xa);if(_t.isInterleavedBufferAttribute){const X=_t.data,N=X.stride,at=_t.offset;if(X.isInstancedInterleavedBuffer){for(let et=0;et<tt.locationSize;et++)P(tt.location+et,X.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let et=0;et<tt.locationSize;et++)C(tt.location+et);r.bindBuffer(r.ARRAY_BUFFER,I);for(let et=0;et<tt.locationSize;et++)L(tt.location+et,K/tt.locationSize,B,yt,N*G,(at+K/tt.locationSize*et)*G,ht)}else{if(_t.isInstancedBufferAttribute){for(let X=0;X<tt.locationSize;X++)P(tt.location+X,_t.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let X=0;X<tt.locationSize;X++)C(tt.location+X);r.bindBuffer(r.ARRAY_BUFFER,I);for(let X=0;X<tt.locationSize;X++)L(tt.location+X,K/tt.locationSize,B,yt,K*G,K/tt.locationSize*X*G,ht)}}else if(nt!==void 0){const yt=nt[z];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(tt.location,yt);break;case 3:r.vertexAttrib3fv(tt.location,yt);break;case 4:r.vertexAttrib4fv(tt.location,yt);break;default:r.vertexAttrib1fv(tt.location,yt)}}}}U()}function b(){T();for(const R in a){const H=a[R];for(const $ in H){const Y=H[$];for(const ot in Y)f(Y[ot].object),delete Y[ot];delete H[$]}delete a[R]}}function _(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const $ in H){const Y=H[$];for(const ot in Y)f(Y[ot].object),delete Y[ot];delete H[$]}delete a[R.id]}function x(R){for(const H in a){const $=a[H];if($[R.id]===void 0)continue;const Y=$[R.id];for(const ot in Y)f(Y[ot].object),delete Y[ot];delete $[R.id]}}function T(){F(),c=!0,s!==h&&(s=h,p(s.object))}function F(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:d,reset:T,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:_,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:C,disableUnusedAttributes:U}}function af(r,t,e,n){const i=n.isWebGL2;let o;function l(s){o=s}function a(s,c){r.drawArrays(o,s,c),e.update(c,o,1)}function h(s,c,d){if(d===0)return;let u,p;if(i)u=r,p="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](o,s,c,d),e.update(c,o,d)}this.setMode=l,this.render=a,this.renderInstances=h}function lf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const h=o(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const s=l||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,C=l||t.has("OES_texture_float"),P=S&&C,U=l?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:s,getMaxAnisotropy:i,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:C,floatVertexTextures:P,maxSamples:U}}function cf(r){const t=this;let e=null,n=0,i=!1,o=!1;const l=new an,a=new Gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,p){const f=d.clippingPlanes,g=d.clipIntersection,v=d.clipShadows,m=r.get(d);if(!i||f===null||f.length===0||o&&!v)o?c(null):s();else{const A=o?0:n,S=A*4;let C=m.clippingState||null;h.value=C,C=c(f,u,S,p);for(let P=0;P!==S;++P)C[P]=e[P];m.clippingState=C,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function s(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,p,f){const g=d!==null?d.length:0;let v=null;if(g!==0){if(v=h.value,f!==!0||v===null){const m=p+g*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(v===null||v.length<m)&&(v=new Float32Array(m));for(let S=0,C=p;S!==g;++S,C+=4)l.copy(d[S]).applyMatrix4(A,a),l.normal.toArray(v,C),v[C+3]=l.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,v}}function hf(r){let t=new WeakMap;function e(l,a){return a===Ms?l.mapping=li:a===ws&&(l.mapping=ci),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Ms||a===ws)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const s=new Eh(h.height/2);return s.fromEquirectangularTexture(r,l),t.set(l,s),l.addEventListener("dispose",i),e(s.texture,l.mapping)}else return null}}return l}function i(l){const a=l.target;a.removeEventListener("dispose",i);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class df extends ul{constructor(t=-1,e=1,n=1,i=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,l=n+t,a=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=s*this.view.offsetX,l=o+s*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,qo=[.125,.215,.35,.446,.526,.582],Mn=20,ls=new df,Yo=new $t;let cs=null;const En=(1+Math.sqrt(5))/2,Zn=1/En,Ko=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,En,Zn),new k(0,En,-Zn),new k(Zn,0,En),new k(-Zn,0,En),new k(En,Zn,0),new k(-En,Zn,0)];class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cs=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cs),t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Di,format:Ne,colorSpace:tn,depthBuffer:!1},i=Jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(o)),this._blurMaterial=ff(o,t,e)}return i}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,ls)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),h=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(Yo),c.toneMapping=fn,c.autoClear=!1;const p=new ll({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),f=new dn(new Bi,p);let g=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,g=!0):(p.color.copy(Yo),g=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,h[m],0),a.lookAt(s[m],0,0)):A===1?(a.up.set(0,0,h[m]),a.lookAt(0,s[m],0)):(a.up.set(0,h[m],0),a.lookAt(0,0,s[m]));const S=this._cubeSize;hr(i,A*S,m>2?S:0,S,S),c.setRenderTarget(i),g&&c.render(f,a),c.render(t,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===li||t.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const o=i?this._cubemapMaterial:this._equirectMaterial,l=new dn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const h=this._cubeSize;hr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Ko[(i-1)%Ko.length];this._blur(t,i-1,i,o,l)}e.autoClear=n}_blur(t,e,n,i,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,i,"latitudinal",o),this._halfBlur(l,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,l,a){const h=this._renderer,s=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new dn(this._lodPlanes[i],s),u=s.uniforms,p=this._sizeLods[n]-1,f=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Mn-1),g=o/f,v=isFinite(o)?1+Math.floor(c*g):Mn;v>Mn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mn}`);const m=[];let A=0;for(let L=0;L<Mn;++L){const V=L/g,b=Math.exp(-V*V/2);m.push(b),L===0?A+=b:L<v&&(A+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/A;u.envMap.value=t.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=l==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=f,u.mipInt.value=S-n;const C=this._sizeLods[i],P=3*C*(i>S-ri?i-S+ri:0),U=4*(this._cubeSize-C);hr(e,P,U,3*C,2*C),h.setRenderTarget(e),h.render(d,ls)}}function uf(r){const t=[],e=[],n=[];let i=r;const o=r-ri+1+qo.length;for(let l=0;l<o;l++){const a=Math.pow(2,i);e.push(a);let h=1/a;l>r-ri?h=qo[l-r+ri-1]:l===0&&(h=0),n.push(h);const s=1/(a-2),c=-s,d=1+s,u=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,f=6,g=3,v=2,m=1,A=new Float32Array(g*f*p),S=new Float32Array(v*f*p),C=new Float32Array(m*f*p);for(let U=0;U<p;U++){const L=U%3*2/3-1,V=U>2?0:-1,b=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];A.set(b,g*f*U),S.set(u,v*f*U);const _=[U,U,U,U,U,U];C.set(_,m*f*U)}const P=new Oe;P.setAttribute("position",new ke(A,g)),P.setAttribute("uv",new ke(S,v)),P.setAttribute("faceIndex",new ke(C,m)),t.push(P),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jo(r,t,e){const n=new Cn(r,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ff(r,t,e){const n=new Float32Array(Mn),i=new k(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Qo(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function ta(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function pf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,s=h===Ms||h===ws,c=h===li||h===ci;if(s||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Zo(r)),d=s?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(s&&d&&d.height>0||c&&d&&i(d)){e===null&&(e=new Zo(r));const u=s?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",o),u.texture}else return null}}}return a}function i(a){let h=0;const s=6;for(let c=0;c<s;c++)a[c]!==void 0&&h++;return h===s}function o(a){const h=a.target;h.removeEventListener("dispose",o);const s=t.get(h);s!==void 0&&(t.delete(h),s.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function mf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gf(r,t,e,n){const i={},o=new WeakMap;function l(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const f in u.attributes)t.remove(u.attributes[f]);for(const f in u.morphAttributes){const g=u.morphAttributes[f];for(let v=0,m=g.length;v<m;v++)t.remove(g[v])}u.removeEventListener("dispose",l),delete i[u.id];const p=o.get(u);p&&(t.remove(p),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",l),i[u.id]=!0,e.memory.geometries++),u}function h(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const f in p){const g=p[f];for(let v=0,m=g.length;v<m;v++)t.update(g[v],r.ARRAY_BUFFER)}}function s(d){const u=[],p=d.index,f=d.attributes.position;let g=0;if(p!==null){const A=p.array;g=p.version;for(let S=0,C=A.length;S<C;S+=3){const P=A[S+0],U=A[S+1],L=A[S+2];u.push(P,U,U,L,L,P)}}else if(f!==void 0){const A=f.array;g=f.version;for(let S=0,C=A.length/3-1;S<C;S+=3){const P=S+0,U=S+1,L=S+2;u.push(P,U,U,L,L,P)}}else return;const v=new(el(u)?hl:cl)(u,1);v.version=g;const m=o.get(d);m&&t.remove(m),o.set(d,v)}function c(d){const u=o.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&s(d)}else s(d);return o.get(d)}return{get:a,update:h,getWireframeAttribute:c}}function vf(r,t,e,n){const i=n.isWebGL2;let o;function l(u){o=u}let a,h;function s(u){a=u.type,h=u.bytesPerElement}function c(u,p){r.drawElements(o,p,a,u*h),e.update(p,o,1)}function d(u,p,f){if(f===0)return;let g,v;if(i)g=r,v="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](o,p,a,u*h,f),e.update(p,o,f)}this.setMode=l,this.setIndex=s,this.render=c,this.renderInstances=d}function _f(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,a){switch(e.calls++,l){case r.TRIANGLES:e.triangles+=a*(o/3);break;case r.LINES:e.lines+=a*(o/2);break;case r.LINE_STRIP:e.lines+=a*(o-1);break;case r.LINE_LOOP:e.lines+=a*o;break;case r.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bf(r,t){return r[0]-t[0]}function xf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function yf(r,t,e){const n={},i=new Float32Array(8),o=new WeakMap,l=new Jt,a=[];for(let s=0;s<8;s++)a[s]=[s,0];function h(s,c,d){const u=s.morphTargetInfluences;if(t.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=p!==void 0?p.length:0;let g=o.get(c);if(g===void 0||g.count!==f){let R=function(){T.dispose(),o.delete(c),c.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const A=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let V=0;A===!0&&(V=1),S===!0&&(V=2),C===!0&&(V=3);let b=c.attributes.position.count*V,_=1;b>t.maxTextureSize&&(_=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const x=new Float32Array(b*_*4*f),T=new rl(x,b,_,f);T.type=hn,T.needsUpdate=!0;const F=V*4;for(let H=0;H<f;H++){const $=P[H],Y=U[H],ot=L[H],Z=b*_*4*H;for(let nt=0;nt<$.count;nt++){const z=nt*F;A===!0&&(l.fromBufferAttribute($,nt),x[Z+z+0]=l.x,x[Z+z+1]=l.y,x[Z+z+2]=l.z,x[Z+z+3]=0),S===!0&&(l.fromBufferAttribute(Y,nt),x[Z+z+4]=l.x,x[Z+z+5]=l.y,x[Z+z+6]=l.z,x[Z+z+7]=0),C===!0&&(l.fromBufferAttribute(ot,nt),x[Z+z+8]=l.x,x[Z+z+9]=l.y,x[Z+z+10]=l.z,x[Z+z+11]=ot.itemSize===4?l.w:1)}}g={count:f,texture:T,size:new Lt(b,_)},o.set(c,g),c.addEventListener("dispose",R)}let v=0;for(let A=0;A<u.length;A++)v+=u[A];const m=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=u===void 0?0:u.length;let f=n[c.id];if(f===void 0||f.length!==p){f=[];for(let S=0;S<p;S++)f[S]=[S,0];n[c.id]=f}for(let S=0;S<p;S++){const C=f[S];C[0]=S,C[1]=u[S]}f.sort(xf);for(let S=0;S<8;S++)S<p&&f[S][1]?(a[S][0]=f[S][0],a[S][1]=f[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(bf);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const C=a[S],P=C[0],U=C[1];P!==Number.MAX_SAFE_INTEGER&&U?(g&&c.getAttribute("morphTarget"+S)!==g[P]&&c.setAttribute("morphTarget"+S,g[P]),v&&c.getAttribute("morphNormal"+S)!==v[P]&&c.setAttribute("morphNormal"+S,v[P]),i[S]=U,m+=U):(g&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),i[S]=0)}const A=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",A),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:h}}function Sf(r,t,e,n){let i=new WeakMap;function o(h){const s=n.render.frame,c=h.geometry,d=t.get(h,c);if(i.get(d)!==s&&(t.update(d),i.set(d,s)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),i.get(h)!==s&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),i.set(h,s))),h.isSkinnedMesh){const u=h.skeleton;i.get(u)!==s&&(u.update(),i.set(u,s))}return d}function l(){i=new WeakMap}function a(h){const s=h.target;s.removeEventListener("dispose",a),e.remove(s.instanceMatrix),s.instanceColor!==null&&e.remove(s.instanceColor)}return{update:o,dispose:l}}const ml=new xe,gl=new rl,vl=new ih,_l=new fl,ea=[],na=[],ia=new Float32Array(16),ra=new Float32Array(9),sa=new Float32Array(4);function vi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let o=ea[i];if(o===void 0&&(o=new Float32Array(i),ea[i]=o),t!==0){n.toArray(o,0);for(let l=1,a=0;l!==t;++l)a+=e,r[l].toArray(o,a)}return o}function ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Lr(r,t){let e=na[t];e===void 0&&(e=new Int32Array(t),na[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ef(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Mf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;r.uniform2fv(this.addr,t),le(e,t)}}function wf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;r.uniform3fv(this.addr,t),le(e,t)}}function Tf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;r.uniform4fv(this.addr,t),le(e,t)}}function Af(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;sa.set(n),r.uniformMatrix2fv(this.addr,!1,sa),le(e,n)}}function Rf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;ra.set(n),r.uniformMatrix3fv(this.addr,!1,ra),le(e,n)}}function Cf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ae(e,n))return;ia.set(n),r.uniformMatrix4fv(this.addr,!1,ia),le(e,n)}}function Pf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Lf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;r.uniform2iv(this.addr,t),le(e,t)}}function Df(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;r.uniform3iv(this.addr,t),le(e,t)}}function Of(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;r.uniform4iv(this.addr,t),le(e,t)}}function Uf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function If(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;r.uniform2uiv(this.addr,t),le(e,t)}}function Nf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;r.uniform3uiv(this.addr,t),le(e,t)}}function kf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;r.uniform4uiv(this.addr,t),le(e,t)}}function Ff(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ml,i)}function Bf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vl,i)}function zf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_l,i)}function Hf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gl,i)}function Gf(r){switch(r){case 5126:return Ef;case 35664:return Mf;case 35665:return wf;case 35666:return Tf;case 35674:return Af;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Pf;case 35667:case 35671:return Lf;case 35668:case 35672:return Df;case 35669:case 35673:return Of;case 5125:return Uf;case 36294:return If;case 36295:return Nf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Vf(r,t){r.uniform1fv(this.addr,t)}function Wf(r,t){const e=vi(t,this.size,2);r.uniform2fv(this.addr,e)}function $f(r,t){const e=vi(t,this.size,3);r.uniform3fv(this.addr,e)}function jf(r,t){const e=vi(t,this.size,4);r.uniform4fv(this.addr,e)}function Xf(r,t){const e=vi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qf(r,t){const e=vi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Yf(r,t){const e=vi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Kf(r,t){r.uniform1iv(this.addr,t)}function Zf(r,t){r.uniform2iv(this.addr,t)}function Jf(r,t){r.uniform3iv(this.addr,t)}function Qf(r,t){r.uniform4iv(this.addr,t)}function tp(r,t){r.uniform1uiv(this.addr,t)}function ep(r,t){r.uniform2uiv(this.addr,t)}function np(r,t){r.uniform3uiv(this.addr,t)}function ip(r,t){r.uniform4uiv(this.addr,t)}function rp(r,t,e){const n=this.cache,i=t.length,o=Lr(e,i);ae(n,o)||(r.uniform1iv(this.addr,o),le(n,o));for(let l=0;l!==i;++l)e.setTexture2D(t[l]||ml,o[l])}function sp(r,t,e){const n=this.cache,i=t.length,o=Lr(e,i);ae(n,o)||(r.uniform1iv(this.addr,o),le(n,o));for(let l=0;l!==i;++l)e.setTexture3D(t[l]||vl,o[l])}function op(r,t,e){const n=this.cache,i=t.length,o=Lr(e,i);ae(n,o)||(r.uniform1iv(this.addr,o),le(n,o));for(let l=0;l!==i;++l)e.setTextureCube(t[l]||_l,o[l])}function ap(r,t,e){const n=this.cache,i=t.length,o=Lr(e,i);ae(n,o)||(r.uniform1iv(this.addr,o),le(n,o));for(let l=0;l!==i;++l)e.setTexture2DArray(t[l]||gl,o[l])}function lp(r){switch(r){case 5126:return Vf;case 35664:return Wf;case 35665:return $f;case 35666:return jf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Kf;case 35667:case 35671:return Zf;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return ap}}class cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Gf(e.type)}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=lp(e.type)}}class dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,l=i.length;o!==l;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function oa(r,t){r.seq.push(t),r.map[t.id]=t}function up(r,t,e){const n=r.name,i=n.length;for(hs.lastIndex=0;;){const o=hs.exec(n),l=hs.lastIndex;let a=o[1];const h=o[2]==="]",s=o[3];if(h&&(a=a|0),s===void 0||s==="["&&l+2===i){oa(e,s===void 0?new cp(a,r,t):new hp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new dp(a),oa(e,d)),e=d}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),l=t.getUniformLocation(e,o.name);up(o,l,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,l=e.length;o!==l;++o){const a=e[o],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const l=t[i];l.id in e&&n.push(l)}return n}}function aa(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let fp=0;function pp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=i;l<o;l++){const a=l+1;n.push(`${a===t?">":" "} ${a}: ${e[l]}`)}return n.join(`
`)}function mp(r){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(r);let n;switch(t===e?n="":t===yr&&e===xr?n="LinearDisplayP3ToLinearSRGB":t===xr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),r){case tn:case Cr:return[n,"LinearTransferOETF"];case ue:case ks:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function la(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+pp(r.getShaderSource(t),l)}else return i}function gp(r,t){const e=mp(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vp(r,t){let e;switch(t){case hc:e="Linear";break;case dc:e="Reinhard";break;case uc:e="OptimizedCineon";break;case fc:e="ACESFilmic";break;case pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _p(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function bp(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xp(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=r.getActiveAttrib(t,i),l=o.name;let a=1;o.type===r.FLOAT_MAT2&&(a=2),o.type===r.FLOAT_MAT3&&(a=3),o.type===r.FLOAT_MAT4&&(a=4),e[l]={type:o.type,location:r.getAttribLocation(t,l),locationSize:a}}return e}function Ri(r){return r!==""}function ca(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ha(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ls(r){return r.replace(yp,Ep)}const Sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ep(r,t){let e=Ht[t];if(e===void 0){const n=Sp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ls(e)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(r){return r.replace(Mp,wp)}function wp(r,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ua(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tp(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ye&&(t="SHADOWMAP_TYPE_VSM"),t}function Ap(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Cp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case lc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function Pp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lp(r,t,e,n){const i=r.getContext(),o=e.defines;let l=e.vertexShader,a=e.fragmentShader;const h=Tp(e),s=Ap(e),c=Rp(e),d=Cp(e),u=Pp(e),p=e.isWebGL2?"":_p(e),f=bp(o),g=i.createProgram();let v,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ri).join(`
`),v.length>0&&(v+=`
`),m=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ri).join(`
`),m.length>0&&(m+=`
`)):(v=[ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),m=[p,ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+s:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==fn?vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,gp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),l=Ls(l),l=ca(l,e),l=ha(l,e),a=Ls(a),a=ca(a,e),a=ha(a,e),l=da(l),a=da(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=A+v+l,C=A+m+a,P=aa(i,i.VERTEX_SHADER,S),U=aa(i,i.FRAGMENT_SHADER,C);if(i.attachShader(g,P),i.attachShader(g,U),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const b=i.getProgramInfoLog(g).trim(),_=i.getShaderInfoLog(P).trim(),x=i.getShaderInfoLog(U).trim();let T=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(T=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,P,U);else{const R=la(i,P,"vertex"),H=la(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+R+`
`+H)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(_===""||x==="")&&(F=!1);F&&(this.diagnostics={runnable:T,programLog:b,vertexShader:{log:_,prefix:v},fragmentShader:{log:x,prefix:m}})}i.deleteShader(P),i.deleteShader(U);let L;this.getUniforms=function(){return L===void 0&&(L=new vr(i,g)),L};let V;return this.getAttributes=function(){return V===void 0&&(V=xp(i,g)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=U,this}let Dp=0;class Op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Up(t),e.set(t,n)),n}}class Up{constructor(t){this.id=Dp++,this.code=t,this.usedTimes=0}}function Ip(r,t,e,n,i,o,l){const a=new ol,h=new Op,s=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function v(b,_,x,T,F){const R=T.fog,H=F.geometry,$=b.isMeshStandardMaterial?T.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),ot=Y&&Y.mapping===Rr?Y.image.height:null,Z=f[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,z=nt!==void 0?nt.length:0;let tt=0;H.morphAttributes.position!==void 0&&(tt=1),H.morphAttributes.normal!==void 0&&(tt=2),H.morphAttributes.color!==void 0&&(tt=3);let _t,yt,K,E;if(Z){const Kt=Be[Z];_t=Kt.vertexShader,yt=Kt.fragmentShader}else _t=b.vertexShader,yt=b.fragmentShader,h.update(b),K=h.getVertexShaderID(b),E=h.getFragmentShaderID(b);const I=r.getRenderTarget(),B=F.isInstancedMesh===!0,G=!!b.map,ht=!!b.matcap,X=!!Y,N=!!b.aoMap,at=!!b.lightMap,et=!!b.bumpMap,wt=!!b.normalMap,it=!!b.displacementMap,lt=!!b.emissiveMap,bt=!!b.metalnessMap,Mt=!!b.roughnessMap,Ot=b.anisotropy>0,qt=b.clearcoat>0,Yt=b.iridescence>0,w=b.sheen>0,y=b.transmission>0,q=Ot&&!!b.anisotropyMap,dt=qt&&!!b.clearcoatMap,ct=qt&&!!b.clearcoatNormalMap,ut=qt&&!!b.clearcoatRoughnessMap,Ct=Yt&&!!b.iridescenceMap,mt=Yt&&!!b.iridescenceThicknessMap,Et=w&&!!b.sheenColorMap,O=w&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,It=!!b.specularIntensityMap,Pt=y&&!!b.transmissionMap,Dt=y&&!!b.thicknessMap,Rt=!!b.gradientMap,D=!!b.alphaMap,gt=b.alphaTest>0,pt=!!b.alphaHash,St=!!b.extensions,vt=!!H.attributes.uv1,st=!!H.attributes.uv2,At=!!H.attributes.uv3;let Nt=fn;return b.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=r.toneMapping),{isWebGL2:c,shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:yt,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:E,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:B,instancingColor:B&&F.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:I===null?r.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tn,map:G,matcap:ht,envMap:X,envMapMode:X&&Y.mapping,envMapCubeUVHeight:ot,aoMap:N,lightMap:at,bumpMap:et,normalMap:wt,displacementMap:u&&it,emissiveMap:lt,normalMapObjectSpace:wt&&b.normalMapType===Ac,normalMapTangentSpace:wt&&b.normalMapType===tl,metalnessMap:bt,roughnessMap:Mt,anisotropy:Ot,anisotropyMap:q,clearcoat:qt,clearcoatMap:dt,clearcoatNormalMap:ct,clearcoatRoughnessMap:ut,iridescence:Yt,iridescenceMap:Ct,iridescenceThicknessMap:mt,sheen:w,sheenColorMap:Et,sheenRoughnessMap:O,specularMap:ft,specularColorMap:rt,specularIntensityMap:It,transmission:y,transmissionMap:Pt,thicknessMap:Dt,gradientMap:Rt,opaque:b.transparent===!1&&b.blending===si,alphaMap:D,alphaTest:gt,alphaHash:pt,combine:b.combine,mapUv:G&&g(b.map.channel),aoMapUv:N&&g(b.aoMap.channel),lightMapUv:at&&g(b.lightMap.channel),bumpMapUv:et&&g(b.bumpMap.channel),normalMapUv:wt&&g(b.normalMap.channel),displacementMapUv:it&&g(b.displacementMap.channel),emissiveMapUv:lt&&g(b.emissiveMap.channel),metalnessMapUv:bt&&g(b.metalnessMap.channel),roughnessMapUv:Mt&&g(b.roughnessMap.channel),anisotropyMapUv:q&&g(b.anisotropyMap.channel),clearcoatMapUv:dt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:O&&g(b.sheenRoughnessMap.channel),specularMapUv:ft&&g(b.specularMap.channel),specularColorMapUv:rt&&g(b.specularColorMap.channel),specularIntensityMapUv:It&&g(b.specularIntensityMap.channel),transmissionMapUv:Pt&&g(b.transmissionMap.channel),thicknessMapUv:Dt&&g(b.thicknessMap.channel),alphaMapUv:D&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(wt||Ot),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:vt,vertexUv2s:st,vertexUv3s:At,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(G||D),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:G&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===Zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ke,flipSided:b.side===Se,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:St&&b.extensions.derivatives===!0,extensionFragDepth:St&&b.extensions.fragDepth===!0,extensionDrawBuffers:St&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const x in b.defines)_.push(x),_.push(b.defines[x]);return b.isRawShaderMaterial===!1&&(A(_,b),S(_,b),_.push(r.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function A(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){a.disableAll(),_.isWebGL2&&a.enable(0),_.supportsVertexTextures&&a.enable(1),_.instancing&&a.enable(2),_.instancingColor&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function C(b){const _=f[b.type];let x;if(_){const T=Be[_];x=bh.clone(T.uniforms)}else x=b.uniforms;return x}function P(b,_){let x;for(let T=0,F=s.length;T<F;T++){const R=s[T];if(R.cacheKey===_){x=R,++x.usedTimes;break}}return x===void 0&&(x=new Lp(r,_,b,o),s.push(x)),x}function U(b){if(--b.usedTimes===0){const _=s.indexOf(b);s[_]=s[s.length-1],s.pop(),b.destroy()}}function L(b){h.remove(b)}function V(){h.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:C,acquireProgram:P,releaseProgram:U,releaseShaderCache:L,programs:s,dispose:V}}function Np(){let r=new WeakMap;function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function e(o){r.delete(o)}function n(o,l,a){r.get(o)[l]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function kp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fa(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pa(){const r=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function l(d,u,p,f,g,v){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:f,renderOrder:d.renderOrder,z:g,group:v},r[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=f,m.renderOrder=d.renderOrder,m.z=g,m.group=v),t++,m}function a(d,u,p,f,g,v){const m=l(d,u,p,f,g,v);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function h(d,u,p,f,g,v){const m=l(d,u,p,f,g,v);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function s(d,u){e.length>1&&e.sort(d||kp),n.length>1&&n.sort(u||fa),i.length>1&&i.sort(u||fa)}function c(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:h,finish:c,sort:s}}function Fp(){let r=new WeakMap;function t(n,i){const o=r.get(n);let l;return o===void 0?(l=new pa,r.set(n,[l])):i>=o.length?(l=new pa,o.push(l)):l=o[i],l}function e(){r=new WeakMap}return{get:t,dispose:e}}function Bp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new $t};break;case"SpotLight":e={position:new k,direction:new k,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function zp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Hp=0;function Gp(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Vp(r,t){const e=new Bp,n=zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const o=new k,l=new te,a=new te;function h(c,d){let u=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,v=0,m=0,A=0,S=0,C=0,P=0,U=0,L=0,V=0,b=0;c.sort(Gp);const _=d===!0?Math.PI:1;for(let T=0,F=c.length;T<F;T++){const R=c[T],H=R.color,$=R.intensity,Y=R.distance,ot=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*$*_,p+=H.g*$*_,f+=H.b*$*_;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],$);b++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*_),R.castShadow){const nt=R.shadow,z=n.get(R);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.directionalShadow[g]=z,i.directionalShadowMap[g]=ot,i.directionalShadowMatrix[g]=R.shadow.matrix,C++}i.directional[g]=Z,g++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(H).multiplyScalar($*_),Z.distance=Y,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[m]=Z;const nt=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,nt.updateMatrices(R),R.castShadow&&V++),i.spotLightMatrix[m]=nt.matrix,R.castShadow){const z=n.get(R);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.spotShadow[m]=z,i.spotShadowMap[m]=ot,U++}m++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy(H).multiplyScalar($),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=Z,A++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*_),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const nt=R.shadow,z=n.get(R);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,z.shadowCameraNear=nt.camera.near,z.shadowCameraFar=nt.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=ot,i.pointShadowMatrix[v]=R.shadow.matrix,P++}i.point[v]=Z,v++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar($*_),Z.groundColor.copy(R.groundColor).multiplyScalar($*_),i.hemi[S]=Z,S++}}A>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==m||x.rectAreaLength!==A||x.hemiLength!==S||x.numDirectionalShadows!==C||x.numPointShadows!==P||x.numSpotShadows!==U||x.numSpotMaps!==L||x.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=A,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=U+L-V,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=b,x.directionalLength=g,x.pointLength=v,x.spotLength=m,x.rectAreaLength=A,x.hemiLength=S,x.numDirectionalShadows=C,x.numPointShadows=P,x.numSpotShadows=U,x.numSpotMaps=L,x.numLightProbes=b,i.version=Hp++)}function s(c,d){let u=0,p=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let A=0,S=c.length;A<S;A++){const C=c[A];if(C.isDirectionalLight){const P=i.directional[u];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(m),u++}else if(C.isSpotLight){const P=i.spot[f];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(m),f++}else if(C.isRectAreaLight){const P=i.rectArea[g];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(m),a.identity(),l.copy(C.matrixWorld),l.premultiply(m),a.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),g++}else if(C.isPointLight){const P=i.point[p];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(m),p++}else if(C.isHemisphereLight){const P=i.hemi[v];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(m),v++}}}return{setup:h,setupView:s,state:i}}function ma(r,t){const e=new Vp(r,t),n=[],i=[];function o(){n.length=0,i.length=0}function l(d){n.push(d)}function a(d){i.push(d)}function h(d){e.setup(n,d)}function s(d){e.setupView(n,d)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:h,setupLightsView:s,pushLight:l,pushShadow:a}}function Wp(r,t){let e=new WeakMap;function n(o,l=0){const a=e.get(o);let h;return a===void 0?(h=new ma(r,t),e.set(o,[h])):l>=a.length?(h=new ma(r,t),a.push(h)):h=a[l],h}function i(){e=new WeakMap}return{get:n,dispose:i}}class $p extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`;function Yp(r,t,e){let n=new zs;const i=new Lt,o=new Lt,l=new Jt,a=new $p({depthPacking:Tc}),h=new jp,s={},c=e.maxTextureSize,d={[mn]:Se,[Se]:mn,[Ke]:Ke},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const f=new Oe;f.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dn(f,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let m=this.type;this.render=function(P,U,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const V=r.getRenderTarget(),b=r.getActiveCubeFace(),_=r.getActiveMipmapLevel(),x=r.state;x.setBlending(un),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const T=m!==Ye&&this.type===Ye,F=m===Ye&&this.type!==Ye;for(let R=0,H=P.length;R<H;R++){const $=P[R],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ot=Y.getFrameExtents();if(i.multiply(ot),o.copy(Y.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(o.x=Math.floor(c/ot.x),i.x=o.x*ot.x,Y.mapSize.x=o.x),i.y>c&&(o.y=Math.floor(c/ot.y),i.y=o.y*ot.y,Y.mapSize.y=o.y)),Y.map===null||T===!0||F===!0){const nt=this.type!==Ye?{minFilter:de,magFilter:de}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Cn(i.x,i.y,nt),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const Z=Y.getViewportCount();for(let nt=0;nt<Z;nt++){const z=Y.getViewport(nt);l.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),x.viewport(l),Y.updateMatrices($,nt),n=Y.getFrustum(),C(U,L,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ye&&A(Y,L),Y.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(V,b,_)};function A(P,U){const L=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Cn(i.x,i.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(U,null,L,u,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(U,null,L,p,g,null)}function S(P,U,L,V){let b=null;const _=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(_!==void 0)b=_;else if(b=L.isPointLight===!0?h:a,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const x=b.uuid,T=U.uuid;let F=s[x];F===void 0&&(F={},s[x]=F);let R=F[T];R===void 0&&(R=b.clone(),F[T]=R),b=R}if(b.visible=U.visible,b.wireframe=U.wireframe,V===Ye?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:d[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const x=r.properties.get(b);x.light=L}return b}function C(P,U,L,V,b){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ye)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const T=t.update(P),F=P.material;if(Array.isArray(F)){const R=T.groups;for(let H=0,$=R.length;H<$;H++){const Y=R[H],ot=F[Y.materialIndex];if(ot&&ot.visible){const Z=S(P,ot,V,b);r.renderBufferDirect(L,null,T,Z,P,Y)}}}else if(F.visible){const R=S(P,F,V,b);r.renderBufferDirect(L,null,T,R,P,null)}}const x=P.children;for(let T=0,F=x.length;T<F;T++)C(x[T],U,L,V,b)}}function Kp(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const gt=new Jt;let pt=null;const St=new Jt(0,0,0,0);return{setMask:function(vt){pt!==vt&&!D&&(r.colorMask(vt,vt,vt,vt),pt=vt)},setLocked:function(vt){D=vt},setClear:function(vt,st,At,Nt,ie){ie===!0&&(vt*=Nt,st*=Nt,At*=Nt),gt.set(vt,st,At,Nt),St.equals(gt)===!1&&(r.clearColor(vt,st,At,Nt),St.copy(gt))},reset:function(){D=!1,pt=null,St.set(-1,0,0,0)}}}function o(){let D=!1,gt=null,pt=null,St=null;return{setTest:function(vt){vt?I(r.DEPTH_TEST):B(r.DEPTH_TEST)},setMask:function(vt){gt!==vt&&!D&&(r.depthMask(vt),gt=vt)},setFunc:function(vt){if(pt!==vt){switch(vt){case ec:r.depthFunc(r.NEVER);break;case nc:r.depthFunc(r.ALWAYS);break;case ic:r.depthFunc(r.LESS);break;case Es:r.depthFunc(r.LEQUAL);break;case rc:r.depthFunc(r.EQUAL);break;case sc:r.depthFunc(r.GEQUAL);break;case oc:r.depthFunc(r.GREATER);break;case ac:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=vt}},setLocked:function(vt){D=vt},setClear:function(vt){St!==vt&&(r.clearDepth(vt),St=vt)},reset:function(){D=!1,gt=null,pt=null,St=null}}}function l(){let D=!1,gt=null,pt=null,St=null,vt=null,st=null,At=null,Nt=null,ie=null;return{setTest:function(Kt){D||(Kt?I(r.STENCIL_TEST):B(r.STENCIL_TEST))},setMask:function(Kt){gt!==Kt&&!D&&(r.stencilMask(Kt),gt=Kt)},setFunc:function(Kt,Fe,me){(pt!==Kt||St!==Fe||vt!==me)&&(r.stencilFunc(Kt,Fe,me),pt=Kt,St=Fe,vt=me)},setOp:function(Kt,Fe,me){(st!==Kt||At!==Fe||Nt!==me)&&(r.stencilOp(Kt,Fe,me),st=Kt,At=Fe,Nt=me)},setLocked:function(Kt){D=Kt},setClear:function(Kt){ie!==Kt&&(r.clearStencil(Kt),ie=Kt)},reset:function(){D=!1,gt=null,pt=null,St=null,vt=null,st=null,At=null,Nt=null,ie=null}}}const a=new i,h=new o,s=new l,c=new WeakMap,d=new WeakMap;let u={},p={},f=new WeakMap,g=[],v=null,m=!1,A=null,S=null,C=null,P=null,U=null,L=null,V=null,b=!1,_=null,x=null,T=null,F=null,R=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ot)[1]),$=Y>=1):ot.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),$=Y>=2);let Z=null,nt={};const z=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),_t=new Jt().fromArray(z),yt=new Jt().fromArray(tt);function K(D,gt,pt,St){const vt=new Uint8Array(4),st=r.createTexture();r.bindTexture(D,st),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<pt;At++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(gt,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(gt+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return st}const E={};E[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),E[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(E[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),E[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),h.setClear(1),s.setClear(0),I(r.DEPTH_TEST),h.setFunc(Es),it(!1),lt(Zs),I(r.CULL_FACE),et(un);function I(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function B(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function G(D,gt){return p[D]!==gt?(r.bindFramebuffer(D,gt),p[D]=gt,n&&(D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=gt),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=gt)),!0):!1}function ht(D,gt){let pt=g,St=!1;if(D)if(pt=f.get(gt),pt===void 0&&(pt=[],f.set(gt,pt)),D.isWebGLMultipleRenderTargets){const vt=D.texture;if(pt.length!==vt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let st=0,At=vt.length;st<At;st++)pt[st]=r.COLOR_ATTACHMENT0+st;pt.length=vt.length,St=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,St=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,St=!0);St&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function X(D){return v!==D?(r.useProgram(D),v=D,!0):!1}const N={[ni]:r.FUNC_ADD,[Wl]:r.FUNC_SUBTRACT,[$l]:r.FUNC_REVERSE_SUBTRACT};if(n)N[eo]=r.MIN,N[no]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(N[eo]=D.MIN_EXT,N[no]=D.MAX_EXT)}const at={[jl]:r.ZERO,[Xl]:r.ONE,[ql]:r.SRC_COLOR,[Va]:r.SRC_ALPHA,[tc]:r.SRC_ALPHA_SATURATE,[Jl]:r.DST_COLOR,[Kl]:r.DST_ALPHA,[Yl]:r.ONE_MINUS_SRC_COLOR,[Wa]:r.ONE_MINUS_SRC_ALPHA,[Ql]:r.ONE_MINUS_DST_COLOR,[Zl]:r.ONE_MINUS_DST_ALPHA};function et(D,gt,pt,St,vt,st,At,Nt){if(D===un){m===!0&&(B(r.BLEND),m=!1);return}if(m===!1&&(I(r.BLEND),m=!0),D!==Vl){if(D!==A||Nt!==b){if((S!==ni||U!==ni)&&(r.blendEquation(r.FUNC_ADD),S=ni,U=ni),Nt)switch(D){case si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Js:r.blendFunc(r.ONE,r.ONE);break;case Qs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case to:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Js:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case to:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}C=null,P=null,L=null,V=null,A=D,b=Nt}return}vt=vt||gt,st=st||pt,At=At||St,(gt!==S||vt!==U)&&(r.blendEquationSeparate(N[gt],N[vt]),S=gt,U=vt),(pt!==C||St!==P||st!==L||At!==V)&&(r.blendFuncSeparate(at[pt],at[St],at[st],at[At]),C=pt,P=St,L=st,V=At),A=D,b=!1}function wt(D,gt){D.side===Ke?B(r.CULL_FACE):I(r.CULL_FACE);let pt=D.side===Se;gt&&(pt=!pt),it(pt),D.blending===si&&D.transparent===!1?et(un):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),a.setMask(D.colorWrite);const St=D.stencilWrite;s.setTest(St),St&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?I(r.SAMPLE_ALPHA_TO_COVERAGE):B(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(D){_!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),_=D)}function lt(D){D!==zl?(I(r.CULL_FACE),D!==x&&(D===Zs?r.cullFace(r.BACK):D===Hl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):B(r.CULL_FACE),x=D}function bt(D){D!==T&&($&&r.lineWidth(D),T=D)}function Mt(D,gt,pt){D?(I(r.POLYGON_OFFSET_FILL),(F!==gt||R!==pt)&&(r.polygonOffset(gt,pt),F=gt,R=pt)):B(r.POLYGON_OFFSET_FILL)}function Ot(D){D?I(r.SCISSOR_TEST):B(r.SCISSOR_TEST)}function qt(D){D===void 0&&(D=r.TEXTURE0+H-1),Z!==D&&(r.activeTexture(D),Z=D)}function Yt(D,gt,pt){pt===void 0&&(Z===null?pt=r.TEXTURE0+H-1:pt=Z);let St=nt[pt];St===void 0&&(St={type:void 0,texture:void 0},nt[pt]=St),(St.type!==D||St.texture!==gt)&&(Z!==pt&&(r.activeTexture(pt),Z=pt),r.bindTexture(D,gt||E[D]),St.type=D,St.texture=gt)}function w(){const D=nt[Z];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(D){_t.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),_t.copy(D))}function It(D){yt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),yt.copy(D))}function Pt(D,gt){let pt=d.get(gt);pt===void 0&&(pt=new WeakMap,d.set(gt,pt));let St=pt.get(D);St===void 0&&(St=r.getUniformBlockIndex(gt,D.name),pt.set(D,St))}function Dt(D,gt){const St=d.get(gt).get(D);c.get(gt)!==St&&(r.uniformBlockBinding(gt,St,D.__bindingPointIndex),c.set(gt,St))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,nt={},p={},f=new WeakMap,g=[],v=null,m=!1,A=null,S=null,C=null,P=null,U=null,L=null,V=null,b=!1,_=null,x=null,T=null,F=null,R=null,_t.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),h.reset(),s.reset()}return{buffers:{color:a,depth:h,stencil:s},enable:I,disable:B,bindFramebuffer:G,drawBuffers:ht,useProgram:X,setBlending:et,setMaterial:wt,setFlipSided:it,setCullFace:lt,setLineWidth:bt,setPolygonOffset:Mt,setScissorTest:Ot,activeTexture:qt,bindTexture:Yt,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:O,texImage3D:ft,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:mt,texStorage3D:Et,texSubImage2D:dt,texSubImage3D:ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ct,scissor:rt,viewport:It,reset:Rt}}function Zp(r,t,e,n,i,o,l){const a=i.isWebGL2,h=i.maxTextures,s=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let g;const v=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,y){return m?new OffscreenCanvas(w,y):Ui("canvas")}function S(w,y,q,dt){let ct=1;if((w.width>dt||w.height>dt)&&(ct=dt/Math.max(w.width,w.height)),ct<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ut=y?Er:Math.floor,Ct=ut(ct*w.width),mt=ut(ct*w.height);g===void 0&&(g=A(Ct,mt));const Et=q?A(Ct,mt):g;return Et.width=Ct,Et.height=mt,Et.getContext("2d").drawImage(w,0,0,Ct,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ct+"x"+mt+")."),Et}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function C(w){return Ps(w.width)&&Ps(w.height)}function P(w){return a?!1:w.wrapS!==Ae||w.wrapT!==Ae||w.minFilter!==de&&w.minFilter!==be}function U(w,y){return w.generateMipmaps&&y&&w.minFilter!==de&&w.minFilter!==be}function L(w){r.generateMipmap(w)}function V(w,y,q,dt,ct=!1){if(a===!1)return y;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut=y;if(y===r.RED&&(q===r.FLOAT&&(ut=r.R32F),q===r.HALF_FLOAT&&(ut=r.R16F),q===r.UNSIGNED_BYTE&&(ut=r.R8)),y===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.R8UI),q===r.UNSIGNED_SHORT&&(ut=r.R16UI),q===r.UNSIGNED_INT&&(ut=r.R32UI),q===r.BYTE&&(ut=r.R8I),q===r.SHORT&&(ut=r.R16I),q===r.INT&&(ut=r.R32I)),y===r.RG&&(q===r.FLOAT&&(ut=r.RG32F),q===r.HALF_FLOAT&&(ut=r.RG16F),q===r.UNSIGNED_BYTE&&(ut=r.RG8)),y===r.RGBA){const Ct=ct?br:Xt.getTransfer(dt);q===r.FLOAT&&(ut=r.RGBA32F),q===r.HALF_FLOAT&&(ut=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ut=Ct===Zt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(w,y,q){return U(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==de&&w.minFilter!==be?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function _(w){return w===de||w===io||w===Fr?r.NEAREST:r.LINEAR}function x(w){const y=w.target;y.removeEventListener("dispose",x),F(y),y.isVideoTexture&&f.delete(y)}function T(w){const y=w.target;y.removeEventListener("dispose",T),H(y)}function F(w){const y=n.get(w);if(y.__webglInit===void 0)return;const q=w.source,dt=v.get(q);if(dt){const ct=dt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&R(w),Object.keys(dt).length===0&&v.delete(q)}n.remove(w)}function R(w){const y=n.get(w);r.deleteTexture(y.__webglTexture);const q=w.source,dt=v.get(q);delete dt[y.__cacheKey],l.memory.textures--}function H(w){const y=w.texture,q=n.get(w),dt=n.get(y);if(dt.__webglTexture!==void 0&&(r.deleteTexture(dt.__webglTexture),l.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(q.__webglFramebuffer[ct]))for(let ut=0;ut<q.__webglFramebuffer[ct].length;ut++)r.deleteFramebuffer(q.__webglFramebuffer[ct][ut]);else r.deleteFramebuffer(q.__webglFramebuffer[ct]);q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[ct])}else{if(Array.isArray(q.__webglFramebuffer))for(let ct=0;ct<q.__webglFramebuffer.length;ct++)r.deleteFramebuffer(q.__webglFramebuffer[ct]);else r.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ct=0;ct<q.__webglColorRenderbuffer.length;ct++)q.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[ct]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ct=0,ut=y.length;ct<ut;ct++){const Ct=n.get(y[ct]);Ct.__webglTexture&&(r.deleteTexture(Ct.__webglTexture),l.memory.textures--),n.remove(y[ct])}n.remove(y),n.remove(w)}let $=0;function Y(){$=0}function ot(){const w=$;return w>=h&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+h),$+=1,w}function Z(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function nt(w,y){const q=n.get(w);if(w.isVideoTexture&&qt(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){const dt=w.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(q,w,y);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+y)}function z(w,y){const q=n.get(w);if(w.version>0&&q.__version!==w.version){G(q,w,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+y)}function tt(w,y){const q=n.get(w);if(w.version>0&&q.__version!==w.version){G(q,w,y);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+y)}function _t(w,y){const q=n.get(w);if(w.version>0&&q.__version!==w.version){ht(q,w,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+y)}const yt={[Ts]:r.REPEAT,[Ae]:r.CLAMP_TO_EDGE,[As]:r.MIRRORED_REPEAT},K={[de]:r.NEAREST,[io]:r.NEAREST_MIPMAP_NEAREST,[Fr]:r.NEAREST_MIPMAP_LINEAR,[be]:r.LINEAR,[mc]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},E={[Cc]:r.NEVER,[Nc]:r.ALWAYS,[Pc]:r.LESS,[Dc]:r.LEQUAL,[Lc]:r.EQUAL,[Ic]:r.GEQUAL,[Oc]:r.GREATER,[Uc]:r.NOTEQUAL};function I(w,y,q){if(q?(r.texParameteri(w,r.TEXTURE_WRAP_S,yt[y.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,yt[y.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,yt[y.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,K[y.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,K[y.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Ae||y.wrapT!==Ae)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,_(y.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,_(y.minFilter)),y.minFilter!==de&&y.minFilter!==be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,E[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const dt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===de||y.minFilter!==Fr&&y.minFilter!==hi||y.type===hn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Di&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(w,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function B(w,y){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",x));const dt=y.source;let ct=v.get(dt);ct===void 0&&(ct={},v.set(dt,ct));const ut=Z(y);if(ut!==w.__cacheKey){ct[ut]===void 0&&(ct[ut]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,q=!0),ct[ut].usedTimes++;const Ct=ct[w.__cacheKey];Ct!==void 0&&(ct[w.__cacheKey].usedTimes--,Ct.usedTimes===0&&R(y)),w.__cacheKey=ut,w.__webglTexture=ct[ut].texture}return q}function G(w,y,q){let dt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=r.TEXTURE_3D);const ct=B(w,y),ut=y.source;e.bindTexture(dt,w.__webglTexture,r.TEXTURE0+q);const Ct=n.get(ut);if(ut.version!==Ct.__version||ct===!0){e.activeTexture(r.TEXTURE0+q);const mt=Xt.getPrimaries(Xt.workingColorSpace),Et=y.colorSpace===De?null:Xt.getPrimaries(y.colorSpace),O=y.colorSpace===De||mt===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const ft=P(y)&&C(y.image)===!1;let rt=S(y.image,ft,!1,c);rt=Yt(y,rt);const It=C(rt)||a,Pt=o.convert(y.format,y.colorSpace);let Dt=o.convert(y.type),Rt=V(y.internalFormat,Pt,Dt,y.colorSpace,y.isVideoTexture);I(dt,y,It);let D;const gt=y.mipmaps,pt=a&&y.isVideoTexture!==!0,St=Ct.__version===void 0||ct===!0,vt=b(y,rt,It);if(y.isDepthTexture)Rt=r.DEPTH_COMPONENT,a?y.type===hn?Rt=r.DEPTH_COMPONENT32F:y.type===cn?Rt=r.DEPTH_COMPONENT24:y.type===Tn?Rt=r.DEPTH24_STENCIL8:Rt=r.DEPTH_COMPONENT16:y.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===An&&Rt===r.DEPTH_COMPONENT&&y.type!==Ns&&y.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=cn,Dt=o.convert(y.type)),y.format===di&&Rt===r.DEPTH_COMPONENT&&(Rt=r.DEPTH_STENCIL,y.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Tn,Dt=o.convert(y.type))),St&&(pt?e.texStorage2D(r.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Rt,rt.width,rt.height,0,Pt,Dt,null));else if(y.isDataTexture)if(gt.length>0&&It){pt&&St&&e.texStorage2D(r.TEXTURE_2D,vt,Rt,gt[0].width,gt[0].height);for(let st=0,At=gt.length;st<At;st++)D=gt[st],pt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,D.width,D.height,Pt,Dt,D.data):e.texImage2D(r.TEXTURE_2D,st,Rt,D.width,D.height,0,Pt,Dt,D.data);y.generateMipmaps=!1}else pt?(St&&e.texStorage2D(r.TEXTURE_2D,vt,Rt,rt.width,rt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,Pt,Dt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,rt.width,rt.height,0,Pt,Dt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pt&&St&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Rt,gt[0].width,gt[0].height,rt.depth);for(let st=0,At=gt.length;st<At;st++)D=gt[st],y.format!==Ne?Pt!==null?pt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,D.width,D.height,rt.depth,Pt,D.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Rt,D.width,D.height,rt.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,D.width,D.height,rt.depth,Pt,Dt,D.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Rt,D.width,D.height,rt.depth,0,Pt,Dt,D.data)}else{pt&&St&&e.texStorage2D(r.TEXTURE_2D,vt,Rt,gt[0].width,gt[0].height);for(let st=0,At=gt.length;st<At;st++)D=gt[st],y.format!==Ne?Pt!==null?pt?e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,D.width,D.height,Pt,D.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Rt,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,D.width,D.height,Pt,Dt,D.data):e.texImage2D(r.TEXTURE_2D,st,Rt,D.width,D.height,0,Pt,Dt,D.data)}else if(y.isDataArrayTexture)pt?(St&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Pt,Dt,rt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,Pt,Dt,rt.data);else if(y.isData3DTexture)pt?(St&&e.texStorage3D(r.TEXTURE_3D,vt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Pt,Dt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,Pt,Dt,rt.data);else if(y.isFramebufferTexture){if(St)if(pt)e.texStorage2D(r.TEXTURE_2D,vt,Rt,rt.width,rt.height);else{let st=rt.width,At=rt.height;for(let Nt=0;Nt<vt;Nt++)e.texImage2D(r.TEXTURE_2D,Nt,Rt,st,At,0,Pt,Dt,null),st>>=1,At>>=1}}else if(gt.length>0&&It){pt&&St&&e.texStorage2D(r.TEXTURE_2D,vt,Rt,gt[0].width,gt[0].height);for(let st=0,At=gt.length;st<At;st++)D=gt[st],pt?e.texSubImage2D(r.TEXTURE_2D,st,0,0,Pt,Dt,D):e.texImage2D(r.TEXTURE_2D,st,Rt,Pt,Dt,D);y.generateMipmaps=!1}else pt?(St&&e.texStorage2D(r.TEXTURE_2D,vt,Rt,rt.width,rt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,Dt,rt)):e.texImage2D(r.TEXTURE_2D,0,Rt,Pt,Dt,rt);U(y,It)&&L(dt),Ct.__version=ut.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ht(w,y,q){if(y.image.length!==6)return;const dt=B(w,y),ct=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+q);const ut=n.get(ct);if(ct.version!==ut.__version||dt===!0){e.activeTexture(r.TEXTURE0+q);const Ct=Xt.getPrimaries(Xt.workingColorSpace),mt=y.colorSpace===De?null:Xt.getPrimaries(y.colorSpace),Et=y.colorSpace===De||Ct===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const O=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,rt=[];for(let st=0;st<6;st++)!O&&!ft?rt[st]=S(y.image[st],!1,!0,s):rt[st]=ft?y.image[st].image:y.image[st],rt[st]=Yt(y,rt[st]);const It=rt[0],Pt=C(It)||a,Dt=o.convert(y.format,y.colorSpace),Rt=o.convert(y.type),D=V(y.internalFormat,Dt,Rt,y.colorSpace),gt=a&&y.isVideoTexture!==!0,pt=ut.__version===void 0||dt===!0;let St=b(y,It,Pt);I(r.TEXTURE_CUBE_MAP,y,Pt);let vt;if(O){gt&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,St,D,It.width,It.height);for(let st=0;st<6;st++){vt=rt[st].mipmaps;for(let At=0;At<vt.length;At++){const Nt=vt[At];y.format!==Ne?Dt!==null?gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Nt.width,Nt.height,Dt,Nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,D,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,Nt.width,Nt.height,Dt,Rt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,D,Nt.width,Nt.height,0,Dt,Rt,Nt.data)}}}else{vt=y.mipmaps,gt&&pt&&(vt.length>0&&St++,e.texStorage2D(r.TEXTURE_CUBE_MAP,St,D,rt[0].width,rt[0].height));for(let st=0;st<6;st++)if(ft){gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,rt[st].width,rt[st].height,Dt,Rt,rt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,D,rt[st].width,rt[st].height,0,Dt,Rt,rt[st].data);for(let At=0;At<vt.length;At++){const ie=vt[At].image[st].image;gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,ie.width,ie.height,Dt,Rt,ie.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,D,ie.width,ie.height,0,Dt,Rt,ie.data)}}else{gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Rt,rt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,D,Dt,Rt,rt[st]);for(let At=0;At<vt.length;At++){const Nt=vt[At];gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Dt,Rt,Nt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,D,Dt,Rt,Nt.image[st])}}}U(y,Pt)&&L(r.TEXTURE_CUBE_MAP),ut.__version=ct.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function X(w,y,q,dt,ct,ut){const Ct=o.convert(q.format,q.colorSpace),mt=o.convert(q.type),Et=V(q.internalFormat,Ct,mt,q.colorSpace);if(!n.get(y).__hasExternalTextures){const ft=Math.max(1,y.width>>ut),rt=Math.max(1,y.height>>ut);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,ut,Et,ft,rt,y.depth,0,Ct,mt,null):e.texImage2D(ct,ut,Et,ft,rt,0,Ct,mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),Ot(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ct,n.get(q).__webglTexture,0,Mt(y)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,ct,n.get(q).__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function N(w,y,q){if(r.bindRenderbuffer(r.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let dt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(q||Ot(y)){const ct=y.depthTexture;ct&&ct.isDepthTexture&&(ct.type===hn?dt=r.DEPTH_COMPONENT32F:ct.type===cn&&(dt=r.DEPTH_COMPONENT24));const ut=Mt(y);Ot(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,dt,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,dt,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,dt,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const dt=Mt(y);q&&Ot(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,r.DEPTH24_STENCIL8,y.width,y.height):Ot(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const dt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ct=0;ct<dt.length;ct++){const ut=dt[ct],Ct=o.convert(ut.format,ut.colorSpace),mt=o.convert(ut.type),Et=V(ut.internalFormat,Ct,mt,ut.colorSpace),O=Mt(y);q&&Ot(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,Et,y.width,y.height):Ot(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,Et,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Et,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt(y.depthTexture,0);const dt=n.get(y.depthTexture).__webglTexture,ct=Mt(y);if(y.depthTexture.format===An)Ot(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0);else if(y.depthTexture.format===di)Ot(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function et(w){const y=n.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,w)}else if(q){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]=r.createRenderbuffer(),N(y.__webglDepthbuffer[dt],w,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),N(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(w,y,q){const dt=n.get(w);y!==void 0&&X(dt.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&et(w)}function it(w){const y=w.texture,q=n.get(w),dt=n.get(y);w.addEventListener("dispose",T),w.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=y.version,l.memory.textures++);const ct=w.isWebGLCubeRenderTarget===!0,ut=w.isWebGLMultipleRenderTargets===!0,Ct=C(w)||a;if(ct){q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(a&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[mt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)q.__webglFramebuffer[mt][Et]=r.createFramebuffer()}else q.__webglFramebuffer[mt]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)q.__webglFramebuffer[mt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(ut)if(i.drawBuffers){const mt=w.texture;for(let Et=0,O=mt.length;Et<O;Et++){const ft=n.get(mt[Et]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ot(w)===!1){const mt=ut?y:[y];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<mt.length;Et++){const O=mt[Et];q.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const ft=o.convert(O.format,O.colorSpace),rt=o.convert(O.type),It=V(O.internalFormat,ft,rt,O.colorSpace,w.isXRRenderTarget===!0),Pt=Mt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,It,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),N(q.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),I(r.TEXTURE_CUBE_MAP,y,Ct);for(let mt=0;mt<6;mt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)X(q.__webglFramebuffer[mt][Et],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else X(q.__webglFramebuffer[mt],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);U(y,Ct)&&L(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const mt=w.texture;for(let Et=0,O=mt.length;Et<O;Et++){const ft=mt[Et],rt=n.get(ft);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),I(r.TEXTURE_2D,ft,Ct),X(q.__webglFramebuffer,w,ft,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),U(ft,Ct)&&L(r.TEXTURE_2D)}e.unbindTexture()}else{let mt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?mt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,dt.__webglTexture),I(mt,y,Ct),a&&y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)X(q.__webglFramebuffer[Et],w,y,r.COLOR_ATTACHMENT0,mt,Et);else X(q.__webglFramebuffer,w,y,r.COLOR_ATTACHMENT0,mt,0);U(y,Ct)&&L(mt),e.unbindTexture()}w.depthBuffer&&et(w)}function lt(w){const y=C(w)||a,q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let dt=0,ct=q.length;dt<ct;dt++){const ut=q[dt];if(U(ut,y)){const Ct=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,mt=n.get(ut).__webglTexture;e.bindTexture(Ct,mt),L(Ct),e.unbindTexture()}}}function bt(w){if(a&&w.samples>0&&Ot(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],q=w.width,dt=w.height;let ct=r.COLOR_BUFFER_BIT;const ut=[],Ct=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=n.get(w),Et=w.isWebGLMultipleRenderTargets===!0;if(Et)for(let O=0;O<y.length;O++)e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let O=0;O<y.length;O++){ut.push(r.COLOR_ATTACHMENT0+O),w.depthBuffer&&ut.push(Ct);const ft=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(ft===!1&&(w.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),Et&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,mt.__webglColorRenderbuffer[O]),ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ct]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ct])),Et){const rt=n.get(y[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,q,dt,0,0,q,dt,ct,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let O=0;O<y.length;O++){e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,mt.__webglColorRenderbuffer[O]);const ft=n.get(y[O]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function Mt(w){return Math.min(d,w.samples)}function Ot(w){const y=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qt(w){const y=l.render.frame;f.get(w)!==y&&(f.set(w,y),w.update())}function Yt(w,y){const q=w.colorSpace,dt=w.format,ct=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Cs||q!==tn&&q!==De&&(Xt.getTransfer(q)===Zt?a===!1?t.has("EXT_sRGB")===!0&&dt===Ne?(w.format=Cs,w.minFilter=be,w.generateMipmaps=!1):y=nl.sRGBToLinear(y):(dt!==Ne||ct!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}this.allocateTextureUnit=ot,this.resetTextureUnits=Y,this.setTexture2D=nt,this.setTexture2DArray=z,this.setTexture3D=tt,this.setTextureCube=_t,this.rebindTextures=wt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ot}function Jp(r,t,e){const n=e.isWebGL2;function i(o,l=De){let a;const h=Xt.getTransfer(l);if(o===pn)return r.UNSIGNED_BYTE;if(o===qa)return r.UNSIGNED_SHORT_4_4_4_4;if(o===Ya)return r.UNSIGNED_SHORT_5_5_5_1;if(o===gc)return r.BYTE;if(o===vc)return r.SHORT;if(o===Ns)return r.UNSIGNED_SHORT;if(o===Xa)return r.INT;if(o===cn)return r.UNSIGNED_INT;if(o===hn)return r.FLOAT;if(o===Di)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===_c)return r.ALPHA;if(o===Ne)return r.RGBA;if(o===bc)return r.LUMINANCE;if(o===xc)return r.LUMINANCE_ALPHA;if(o===An)return r.DEPTH_COMPONENT;if(o===di)return r.DEPTH_STENCIL;if(o===Cs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===yc)return r.RED;if(o===Ka)return r.RED_INTEGER;if(o===Sc)return r.RG;if(o===Za)return r.RG_INTEGER;if(o===Ja)return r.RGBA_INTEGER;if(o===Br||o===zr||o===Hr||o===Gr)if(h===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ro||o===so||o===oo||o===ao)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ro)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===so)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ec)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===lo||o===co)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===lo)return h===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===co)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ho||o===uo||o===fo||o===po||o===mo||o===go||o===vo||o===_o||o===bo||o===xo||o===yo||o===So||o===Eo||o===Mo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===ho)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===uo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===po)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===go)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===_o)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===bo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===So)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Eo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Mo)return h===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Vr||o===wo||o===To)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===Vr)return h===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===wo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===To)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Mc||o===Ao||o===Ro||o===Co)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ro)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Co)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Tn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[o]!==void 0?r[o]:null}return{convert:i}}class Qp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dr extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,l=null;const a=this._targetRay,h=this._grip,s=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(s&&t.hand){l=!0;for(const g of t.hand.values()){const v=e.getJointPose(g,n),m=this._getHandJoint(s,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const c=s.joints["index-finger-tip"],d=s.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;s.inputState.pinching&&u>p+f?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!s.inputState.pinching&&u<=p-f&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=o!==null),s!==null&&(s.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class em extends xe{constructor(t,e,n,i,o,l,a,h,s,c){if(c=c!==void 0?c:An,c!==An&&c!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===An&&(n=cn),n===void 0&&c===di&&(n=Tn),super(null,i,o,l,a,h,c,n,s),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=h!==void 0?h:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nm extends On{constructor(t,e){super();const n=this;let i=null,o=1,l=null,a="local-floor",h=1,s=null,c=null,d=null,u=null,p=null,f=null;const g=e.getContextAttributes();let v=null,m=null;const A=[],S=[],C=new Le;C.layers.enable(1),C.viewport=new Jt;const P=new Le;P.layers.enable(2),P.viewport=new Jt;const U=[C,P],L=new Qp;L.layers.enable(1),L.layers.enable(2);let V=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let tt=A[z];return tt===void 0&&(tt=new ds,A[z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(z){let tt=A[z];return tt===void 0&&(tt=new ds,A[z]=tt),tt.getGripSpace()},this.getHand=function(z){let tt=A[z];return tt===void 0&&(tt=new ds,A[z]=tt),tt.getHandSpace()};function _(z){const tt=S.indexOf(z.inputSource);if(tt===-1)return;const _t=A[tt];_t!==void 0&&(_t.update(z.inputSource,z.frame,s||l),_t.dispatchEvent({type:z.type,data:z.inputSource}))}function x(){i.removeEventListener("select",_),i.removeEventListener("selectstart",_),i.removeEventListener("selectend",_),i.removeEventListener("squeeze",_),i.removeEventListener("squeezestart",_),i.removeEventListener("squeezeend",_),i.removeEventListener("end",x),i.removeEventListener("inputsourceschange",T);for(let z=0;z<A.length;z++){const tt=S[z];tt!==null&&(S[z]=null,A[z].disconnect(tt))}V=null,b=null,t.setRenderTarget(v),p=null,u=null,d=null,i=null,m=null,nt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||l},this.setReferenceSpace=function(z){s=z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",_),i.addEventListener("selectstart",_),i.addEventListener("selectend",_),i.addEventListener("squeeze",_),i.addEventListener("squeezestart",_),i.addEventListener("squeezeend",_),i.addEventListener("end",x),i.addEventListener("inputsourceschange",T),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),m=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Ne,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,_t=null,yt=null;g.depth&&(yt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?di:An,_t=g.stencil?Tn:cn);const K={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:o};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(K),i.updateRenderState({layers:[u]}),m=new Cn(u.textureWidth,u.textureHeight,{format:Ne,type:pn,depthTexture:new em(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const E=t.properties.get(m);E.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(h),s=null,l=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function T(z){for(let tt=0;tt<z.removed.length;tt++){const _t=z.removed[tt],yt=S.indexOf(_t);yt>=0&&(S[yt]=null,A[yt].disconnect(_t))}for(let tt=0;tt<z.added.length;tt++){const _t=z.added[tt];let yt=S.indexOf(_t);if(yt===-1){for(let E=0;E<A.length;E++)if(E>=S.length){S.push(_t),yt=E;break}else if(S[E]===null){S[E]=_t,yt=E;break}if(yt===-1)break}const K=A[yt];K&&K.connect(_t)}}const F=new k,R=new k;function H(z,tt,_t){F.setFromMatrixPosition(tt.matrixWorld),R.setFromMatrixPosition(_t.matrixWorld);const yt=F.distanceTo(R),K=tt.projectionMatrix.elements,E=_t.projectionMatrix.elements,I=K[14]/(K[10]-1),B=K[14]/(K[10]+1),G=(K[9]+1)/K[5],ht=(K[9]-1)/K[5],X=(K[8]-1)/K[0],N=(E[8]+1)/E[0],at=I*X,et=I*N,wt=yt/(-X+N),it=wt*-X;tt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(it),z.translateZ(wt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const lt=I+wt,bt=B+wt,Mt=at-it,Ot=et+(yt-it),qt=G*B/bt*lt,Yt=ht*B/bt*lt;z.projectionMatrix.makePerspective(Mt,Ot,qt,Yt,lt,bt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function $(z,tt){tt===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(tt.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;L.near=P.near=C.near=z.near,L.far=P.far=C.far=z.far,(V!==L.near||b!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,b=L.far);const tt=z.parent,_t=L.cameras;$(L,tt);for(let yt=0;yt<_t.length;yt++)$(_t[yt],tt);_t.length===2?H(L,C,P):L.projectionMatrix.copy(C.projectionMatrix),Y(z,L,tt)};function Y(z,tt,_t){_t===null?z.matrix.copy(tt.matrixWorld):(z.matrix.copy(_t.matrixWorld),z.matrix.invert(),z.matrix.multiply(tt.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Oi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return h},this.setFoveation=function(z){h=z,u!==null&&(u.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let ot=null;function Z(z,tt){if(c=tt.getViewerPose(s||l),f=tt,c!==null){const _t=c.views;p!==null&&(t.setRenderTargetFramebuffer(m,p.framebuffer),t.setRenderTarget(m));let yt=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,yt=!0);for(let K=0;K<_t.length;K++){const E=_t[K];let I=null;if(p!==null)I=p.getViewport(E);else{const G=d.getViewSubImage(u,E);I=G.viewport,K===0&&(t.setRenderTargetTextures(m,G.colorTexture,u.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(m))}let B=U[K];B===void 0&&(B=new Le,B.layers.enable(K),B.viewport=new Jt,U[K]=B),B.matrix.fromArray(E.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(E.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(I.x,I.y,I.width,I.height),K===0&&(L.matrix.copy(B.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),yt===!0&&L.cameras.push(B)}}for(let _t=0;_t<A.length;_t++){const yt=S[_t],K=A[_t];yt!==null&&K!==void 0&&K.update(yt,tt,s||l)}ot&&ot(z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),f=null}const nt=new pl;nt.setAnimationLoop(Z),this.setAnimationLoop=function(z){ot=z},this.dispose=function(){}}}function im(r,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,dl(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function i(v,m,A,S,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),d(v,m)):m.isMeshPhongMaterial?(o(v,m),c(v,m)):m.isMeshStandardMaterial?(o(v,m),u(v,m),m.isMeshPhysicalMaterial&&p(v,m,C)):m.isMeshMatcapMaterial?(o(v,m),f(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),g(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(l(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?h(v,m,A,S):m.isSpriteMaterial?s(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Se&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Se&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const A=t.get(m).envMap;if(A&&(v.envMap.value=A,v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap){v.lightMap.value=m.lightMap;const S=r._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=m.lightMapIntensity*S,e(m.lightMap,v.lightMapTransform)}m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,A,S){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*A,v.scale.value=S*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function s(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function u(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),t.get(m).envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,A){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Se&&v.clearcoatNormalScale.value.negate())),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function f(v,m){m.matcap&&(v.matcap.value=m.matcap)}function g(v,m){const A=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(r,t,e,n){let i={},o={},l=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(A,S){const C=S.program;n.uniformBlockBinding(A,C)}function s(A,S){let C=i[A.id];C===void 0&&(f(A),C=c(A),i[A.id]=C,A.addEventListener("dispose",v));const P=S.program;n.updateUBOMapping(A,P);const U=t.render.frame;o[A.id]!==U&&(u(A),o[A.id]=U)}function c(A){const S=d();A.__bindingPointIndex=S;const C=r.createBuffer(),P=A.__size,U=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,P,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,C),C}function d(){for(let A=0;A<a;A++)if(l.indexOf(A)===-1)return l.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){const S=i[A.id],C=A.uniforms,P=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let U=0,L=C.length;U<L;U++){const V=C[U];if(p(V,U,P)===!0){const b=V.__offset,_=Array.isArray(V.value)?V.value:[V.value];let x=0;for(let T=0;T<_.length;T++){const F=_[T],R=g(F);typeof F=="number"?(V.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,b+x,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=F.elements[0],V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=F.elements[0],V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=F.elements[0]):(F.toArray(V.__data,x),x+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,V.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(A,S,C){const P=A.value;if(C[S]===void 0){if(typeof P=="number")C[S]=P;else{const U=Array.isArray(P)?P:[P],L=[];for(let V=0;V<U.length;V++)L.push(U[V].clone());C[S]=L}return!0}else if(typeof P=="number"){if(C[S]!==P)return C[S]=P,!0}else{const U=Array.isArray(C[S])?C[S]:[C[S]],L=Array.isArray(P)?P:[P];for(let V=0;V<U.length;V++){const b=U[V];if(b.equals(L[V])===!1)return b.copy(L[V]),!0}}return!1}function f(A){const S=A.uniforms;let C=0;const P=16;let U=0;for(let L=0,V=S.length;L<V;L++){const b=S[L],_={boundary:0,storage:0},x=Array.isArray(b.value)?b.value:[b.value];for(let T=0,F=x.length;T<F;T++){const R=x[T],H=g(R);_.boundary+=H.boundary,_.storage+=H.storage}if(b.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=C,L>0){U=C%P;const T=P-U;U!==0&&T-_.boundary<0&&(C+=P-U,b.__offset=C)}C+=_.storage}return U=C%P,U>0&&(C+=P-U),A.__size=C,A.__cache={},this}function g(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function v(A){const S=A.target;S.removeEventListener("dispose",v);const C=l.indexOf(S.__bindingPointIndex);l.splice(C,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function m(){for(const A in i)r.deleteBuffer(i[A]);l=[],i={},o={}}return{bind:h,update:s,dispose:m}}class sm{constructor(t={}){const{canvas:e=Jc(),context:n=null,depth:i=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:s=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=l;const p=new Uint32Array(4),f=new Int32Array(4);let g=null,v=null;const m=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const S=this;let C=!1,P=0,U=0,L=null,V=-1,b=null;const _=new Jt,x=new Jt;let T=null;const F=new $t(0);let R=0,H=e.width,$=e.height,Y=1,ot=null,Z=null;const nt=new Jt(0,0,H,$),z=new Jt(0,0,H,$);let tt=!1;const _t=new zs;let yt=!1,K=!1,E=null;const I=new te,B=new Lt,G=new k,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function X(){return L===null?Y:1}let N=n;function at(M,W){for(let J=0;J<M.length;J++){const j=M[J],Q=e.getContext(j,W);if(Q!==null)return Q}return null}try{const M={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Is}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){const W=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&W.shift(),N=at(W,M),N===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let et,wt,it,lt,bt,Mt,Ot,qt,Yt,w,y,q,dt,ct,ut,Ct,mt,Et,O,ft,rt,It,Pt,Dt;function Rt(){et=new mf(N),wt=new lf(N,et,t),et.init(wt),It=new Jp(N,et,wt),it=new Kp(N,et,wt),lt=new _f(N),bt=new Np,Mt=new Zp(N,et,it,bt,wt,It,lt),Ot=new hf(S),qt=new pf(S),Yt=new Th(N,wt),Pt=new of(N,et,Yt,wt),w=new gf(N,Yt,lt,Pt),y=new Sf(N,w,Yt,lt),O=new yf(N,wt,Mt),Ct=new cf(bt),q=new Ip(S,Ot,qt,et,wt,Pt,Ct),dt=new im(S,bt),ct=new Fp,ut=new Wp(et,wt),Et=new sf(S,Ot,qt,it,y,u,h),mt=new Yp(S,y,wt),Dt=new rm(N,lt,wt,it),ft=new af(N,et,lt,wt),rt=new vf(N,et,lt,wt),lt.programs=q.programs,S.capabilities=wt,S.extensions=et,S.properties=bt,S.renderLists=ct,S.shadowMap=mt,S.state=it,S.info=lt}Rt();const D=new nm(S,N);this.xr=D,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(H,$,!1))},this.getSize=function(M){return M.set(H,$)},this.setSize=function(M,W,J=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,$=W,e.width=Math.floor(M*Y),e.height=Math.floor(W*Y),J===!0&&(e.style.width=M+"px",e.style.height=W+"px"),this.setViewport(0,0,M,W)},this.getDrawingBufferSize=function(M){return M.set(H*Y,$*Y).floor()},this.setDrawingBufferSize=function(M,W,J){H=M,$=W,Y=J,e.width=Math.floor(M*J),e.height=Math.floor(W*J),this.setViewport(0,0,M,W)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(nt)},this.setViewport=function(M,W,J,j){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,W,J,j),it.viewport(_.copy(nt).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(z)},this.setScissor=function(M,W,J,j){M.isVector4?z.set(M.x,M.y,M.z,M.w):z.set(M,W,J,j),it.scissor(x.copy(z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){it.setScissorTest(tt=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){Z=M},this.getClearColor=function(M){return M.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(M=!0,W=!0,J=!0){let j=0;if(M){let Q=!1;if(L!==null){const Tt=L.texture.format;Q=Tt===Ja||Tt===Za||Tt===Ka}if(Q){const Tt=L.texture.type,Ut=Tt===pn||Tt===cn||Tt===Ns||Tt===Tn||Tt===qa||Tt===Ya,Ft=Et.getClearColor(),Bt=Et.getClearAlpha(),Vt=Ft.r,kt=Ft.g,zt=Ft.b;Ut?(p[0]=Vt,p[1]=kt,p[2]=zt,p[3]=Bt,N.clearBufferuiv(N.COLOR,0,p)):(f[0]=Vt,f[1]=kt,f[2]=zt,f[3]=Bt,N.clearBufferiv(N.COLOR,0,f))}else j|=N.COLOR_BUFFER_BIT}W&&(j|=N.DEPTH_BUFFER_BIT),J&&(j|=N.STENCIL_BUFFER_BIT),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ct.dispose(),ut.dispose(),bt.dispose(),Ot.dispose(),qt.dispose(),y.dispose(),Pt.dispose(),Dt.dispose(),q.dispose(),D.dispose(),D.removeEventListener("sessionstart",Kt),D.removeEventListener("sessionend",Fe),E&&(E.dispose(),E=null),me.stop()};function gt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=lt.autoReset,W=mt.enabled,J=mt.autoUpdate,j=mt.needsUpdate,Q=mt.type;Rt(),lt.autoReset=M,mt.enabled=W,mt.autoUpdate=J,mt.needsUpdate=j,mt.type=Q}function St(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vt(M){const W=M.target;W.removeEventListener("dispose",vt),st(W)}function st(M){At(M),bt.remove(M)}function At(M){const W=bt.get(M).programs;W!==void 0&&(W.forEach(function(J){q.releaseProgram(J)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,W,J,j,Q,Tt){W===null&&(W=ht);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=Ul(M,W,J,j,Q);it.setMaterial(j,Ut);let Bt=J.index,Vt=1;if(j.wireframe===!0){if(Bt=w.getWireframeAttribute(J),Bt===void 0)return;Vt=2}const kt=J.drawRange,zt=J.attributes.position;let Qt=kt.start*Vt,ee=(kt.start+kt.count)*Vt;Tt!==null&&(Qt=Math.max(Qt,Tt.start*Vt),ee=Math.min(ee,(Tt.start+Tt.count)*Vt)),Bt!==null?(Qt=Math.max(Qt,0),ee=Math.min(ee,Bt.count)):zt!=null&&(Qt=Math.max(Qt,0),ee=Math.min(ee,zt.count));const Re=ee-Qt;if(Re<0||Re===1/0)return;Pt.setup(Q,j,Ft,J,Bt);let He,re=ft;if(Bt!==null&&(He=Yt.get(Bt),re=rt,re.setIndex(He)),Q.isMesh)j.wireframe===!0?(it.setLineWidth(j.wireframeLinewidth*X()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(Q.isLine){let Wt=j.linewidth;Wt===void 0&&(Wt=1),it.setLineWidth(Wt*X()),Q.isLineSegments?re.setMode(N.LINES):Q.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else Q.isPoints?re.setMode(N.POINTS):Q.isSprite&&re.setMode(N.TRIANGLES);if(Q.isInstancedMesh)re.renderInstances(Qt,Re,Q.count);else if(J.isInstancedBufferGeometry){const Wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Or=Math.min(J.instanceCount,Wt);re.renderInstances(Qt,Re,Or)}else re.render(Qt,Re)},this.compile=function(M,W){function J(j,Q,Tt){j.transparent===!0&&j.side===Ke&&j.forceSinglePass===!1?(j.side=Se,j.needsUpdate=!0,Vi(j,Q,Tt),j.side=mn,j.needsUpdate=!0,Vi(j,Q,Tt),j.side=Ke):Vi(j,Q,Tt)}v=ut.get(M),v.init(),A.push(v),M.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights(S._useLegacyLights),M.traverse(function(j){const Q=j.material;if(Q)if(Array.isArray(Q))for(let Tt=0;Tt<Q.length;Tt++){const Ut=Q[Tt];J(Ut,M,j)}else J(Q,M,j)}),A.pop(),v=null};let Nt=null;function ie(M){Nt&&Nt(M)}function Kt(){me.stop()}function Fe(){me.start()}const me=new pl;me.setAnimationLoop(ie),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(M){Nt=M,D.setAnimationLoop(M),M===null?me.stop():me.start()},D.addEventListener("sessionstart",Kt),D.addEventListener("sessionend",Fe),this.render=function(M,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(W),W=D.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,W,L),v=ut.get(M,A.length),v.init(),A.push(v),I.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),_t.setFromProjectionMatrix(I),K=this.localClippingEnabled,yt=Ct.init(this.clippingPlanes,K),g=ct.get(M,m.length),g.init(),m.push(g),$s(M,W,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ot,Z),this.info.render.frame++,yt===!0&&Ct.beginShadows();const J=v.state.shadowsArray;if(mt.render(J,M,W),yt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(g,M),v.setupLights(S._useLegacyLights),W.isArrayCamera){const j=W.cameras;for(let Q=0,Tt=j.length;Q<Tt;Q++){const Ut=j[Q];js(g,M,Ut,Ut.viewport)}}else js(g,M,W);L!==null&&(Mt.updateMultisampleRenderTarget(L),Mt.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,W),Pt.resetDefaultState(),V=-1,b=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function $s(M,W,J,j){if(M.visible===!1)return;if(M.layers.test(W.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(W);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||_t.intersectsSprite(M)){j&&G.setFromMatrixPosition(M.matrixWorld).applyMatrix4(I);const Ut=y.update(M),Ft=M.material;Ft.visible&&g.push(M,Ut,Ft,J,G.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||_t.intersectsObject(M))){const Ut=y.update(M),Ft=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),G.copy(M.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),G.copy(Ut.boundingSphere.center)),G.applyMatrix4(M.matrixWorld).applyMatrix4(I)),Array.isArray(Ft)){const Bt=Ut.groups;for(let Vt=0,kt=Bt.length;Vt<kt;Vt++){const zt=Bt[Vt],Qt=Ft[zt.materialIndex];Qt&&Qt.visible&&g.push(M,Ut,Qt,J,G.z,zt)}}else Ft.visible&&g.push(M,Ut,Ft,J,G.z,null)}}const Tt=M.children;for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++)$s(Tt[Ut],W,J,j)}function js(M,W,J,j){const Q=M.opaque,Tt=M.transmissive,Ut=M.transparent;v.setupLightsView(J),yt===!0&&Ct.setGlobalState(S.clippingPlanes,J),Tt.length>0&&Ol(Q,Tt,W,J),j&&it.viewport(_.copy(j)),Q.length>0&&Gi(Q,W,J),Tt.length>0&&Gi(Tt,W,J),Ut.length>0&&Gi(Ut,W,J),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ol(M,W,J,j){const Q=wt.isWebGL2;E===null&&(E=new Cn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?Di:pn,minFilter:hi,samples:Q?4:0})),S.getDrawingBufferSize(B),Q?E.setSize(B.x,B.y):E.setSize(Er(B.x),Er(B.y));const Tt=S.getRenderTarget();S.setRenderTarget(E),S.getClearColor(F),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Ut=S.toneMapping;S.toneMapping=fn,Gi(M,J,j),Mt.updateMultisampleRenderTarget(E),Mt.updateRenderTargetMipmap(E);let Ft=!1;for(let Bt=0,Vt=W.length;Bt<Vt;Bt++){const kt=W[Bt],zt=kt.object,Qt=kt.geometry,ee=kt.material,Re=kt.group;if(ee.side===Ke&&zt.layers.test(j.layers)){const He=ee.side;ee.side=Se,ee.needsUpdate=!0,Xs(zt,J,j,Qt,ee,Re),ee.side=He,ee.needsUpdate=!0,Ft=!0}}Ft===!0&&(Mt.updateMultisampleRenderTarget(E),Mt.updateRenderTargetMipmap(E)),S.setRenderTarget(Tt),S.setClearColor(F,R),S.toneMapping=Ut}function Gi(M,W,J){const j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Tt=M.length;Q<Tt;Q++){const Ut=M[Q],Ft=Ut.object,Bt=Ut.geometry,Vt=j===null?Ut.material:j,kt=Ut.group;Ft.layers.test(J.layers)&&Xs(Ft,W,J,Bt,Vt,kt)}}function Xs(M,W,J,j,Q,Tt){M.onBeforeRender(S,W,J,j,Q,Tt),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Q.onBeforeRender(S,W,J,j,M,Tt),Q.transparent===!0&&Q.side===Ke&&Q.forceSinglePass===!1?(Q.side=Se,Q.needsUpdate=!0,S.renderBufferDirect(J,W,j,Q,M,Tt),Q.side=mn,Q.needsUpdate=!0,S.renderBufferDirect(J,W,j,Q,M,Tt),Q.side=Ke):S.renderBufferDirect(J,W,j,Q,M,Tt),M.onAfterRender(S,W,J,j,Q,Tt)}function Vi(M,W,J){W.isScene!==!0&&(W=ht);const j=bt.get(M),Q=v.state.lights,Tt=v.state.shadowsArray,Ut=Q.state.version,Ft=q.getParameters(M,Q.state,Tt,W,J),Bt=q.getProgramCacheKey(Ft);let Vt=j.programs;j.environment=M.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(M.isMeshStandardMaterial?qt:Ot).get(M.envMap||j.environment),Vt===void 0&&(M.addEventListener("dispose",vt),Vt=new Map,j.programs=Vt);let kt=Vt.get(Bt);if(kt!==void 0){if(j.currentProgram===kt&&j.lightsStateVersion===Ut)return qs(M,Ft),kt}else Ft.uniforms=q.getUniforms(M),M.onBuild(J,Ft,S),M.onBeforeCompile(Ft,S),kt=q.acquireProgram(Ft,Bt),Vt.set(Bt,kt),j.uniforms=Ft.uniforms;const zt=j.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(zt.clippingPlanes=Ct.uniform),qs(M,Ft),j.needsLights=Nl(M),j.lightsStateVersion=Ut,j.needsLights&&(zt.ambientLightColor.value=Q.state.ambient,zt.lightProbe.value=Q.state.probe,zt.directionalLights.value=Q.state.directional,zt.directionalLightShadows.value=Q.state.directionalShadow,zt.spotLights.value=Q.state.spot,zt.spotLightShadows.value=Q.state.spotShadow,zt.rectAreaLights.value=Q.state.rectArea,zt.ltc_1.value=Q.state.rectAreaLTC1,zt.ltc_2.value=Q.state.rectAreaLTC2,zt.pointLights.value=Q.state.point,zt.pointLightShadows.value=Q.state.pointShadow,zt.hemisphereLights.value=Q.state.hemi,zt.directionalShadowMap.value=Q.state.directionalShadowMap,zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,zt.spotShadowMap.value=Q.state.spotShadowMap,zt.spotLightMatrix.value=Q.state.spotLightMatrix,zt.spotLightMap.value=Q.state.spotLightMap,zt.pointShadowMap.value=Q.state.pointShadowMap,zt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Qt=kt.getUniforms(),ee=vr.seqWithValue(Qt.seq,zt);return j.currentProgram=kt,j.uniformsList=ee,kt}function qs(M,W){const J=bt.get(M);J.outputColorSpace=W.outputColorSpace,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Ul(M,W,J,j,Q){W.isScene!==!0&&(W=ht),Mt.resetTextureUnits();const Tt=W.fog,Ut=j.isMeshStandardMaterial?W.environment:null,Ft=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:tn,Bt=(j.isMeshStandardMaterial?qt:Ot).get(j.envMap||Ut),Vt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,kt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,ee=!!J.morphAttributes.color;let Re=fn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=S.toneMapping);const He=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,re=He!==void 0?He.length:0,Wt=bt.get(j),Or=v.state.lights;if(yt===!0&&(K===!0||M!==b)){const Me=M===b&&j.id===V;Ct.setState(j,M,Me)}let se=!1;j.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Or.state.version||Wt.outputColorSpace!==Ft||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Wt.envMap!==Bt||j.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ct.numPlanes||Wt.numIntersection!==Ct.numIntersection)||Wt.vertexAlphas!==Vt||Wt.vertexTangents!==kt||Wt.morphTargets!==zt||Wt.morphNormals!==Qt||Wt.morphColors!==ee||Wt.toneMapping!==Re||wt.isWebGL2===!0&&Wt.morphTargetsCount!==re)&&(se=!0):(se=!0,Wt.__version=j.version);let gn=Wt.currentProgram;se===!0&&(gn=Vi(j,W,Q));let Ys=!1,_i=!1,Ur=!1;const ge=gn.getUniforms(),vn=Wt.uniforms;if(it.useProgram(gn.program)&&(Ys=!0,_i=!0,Ur=!0),j.id!==V&&(V=j.id,_i=!0),Ys||b!==M){ge.setValue(N,"projectionMatrix",M.projectionMatrix),ge.setValue(N,"viewMatrix",M.matrixWorldInverse);const Me=ge.map.cameraPosition;Me!==void 0&&Me.setValue(N,G.setFromMatrixPosition(M.matrixWorld)),wt.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ge.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,_i=!0,Ur=!0)}if(Q.isSkinnedMesh){ge.setOptional(N,Q,"bindMatrix"),ge.setOptional(N,Q,"bindMatrixInverse");const Me=Q.skeleton;Me&&(wt.floatVertexTextures?(Me.boneTexture===null&&Me.computeBoneTexture(),ge.setValue(N,"boneTexture",Me.boneTexture,Mt),ge.setValue(N,"boneTextureSize",Me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ir=J.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&wt.isWebGL2===!0)&&O.update(Q,J,gn),(_i||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,ge.setValue(N,"receiveShadow",Q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vn.envMap.value=Bt,vn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),_i&&(ge.setValue(N,"toneMappingExposure",S.toneMappingExposure),Wt.needsLights&&Il(vn,Ur),Tt&&j.fog===!0&&dt.refreshFogUniforms(vn,Tt),dt.refreshMaterialUniforms(vn,j,Y,$,E),vr.upload(N,Wt.uniformsList,vn,Mt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vr.upload(N,Wt.uniformsList,vn,Mt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ge.setValue(N,"center",Q.center),ge.setValue(N,"modelViewMatrix",Q.modelViewMatrix),ge.setValue(N,"normalMatrix",Q.normalMatrix),ge.setValue(N,"modelMatrix",Q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Me=j.uniformsGroups;for(let Nr=0,kl=Me.length;Nr<kl;Nr++)if(wt.isWebGL2){const Ks=Me[Nr];Dt.update(Ks,gn),Dt.bind(Ks,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function Il(M,W){M.ambientLightColor.needsUpdate=W,M.lightProbe.needsUpdate=W,M.directionalLights.needsUpdate=W,M.directionalLightShadows.needsUpdate=W,M.pointLights.needsUpdate=W,M.pointLightShadows.needsUpdate=W,M.spotLights.needsUpdate=W,M.spotLightShadows.needsUpdate=W,M.rectAreaLights.needsUpdate=W,M.hemisphereLights.needsUpdate=W}function Nl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,W,J){bt.get(M.texture).__webglTexture=W,bt.get(M.depthTexture).__webglTexture=J;const j=bt.get(M);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,W){const J=bt.get(M);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(M,W=0,J=0){L=M,P=W,U=J;let j=!0,Q=null,Tt=!1,Ut=!1;if(M){const Bt=bt.get(M);Bt.__useDefaultFramebuffer!==void 0?(it.bindFramebuffer(N.FRAMEBUFFER,null),j=!1):Bt.__webglFramebuffer===void 0?Mt.setupRenderTarget(M):Bt.__hasExternalTextures&&Mt.rebindTextures(M,bt.get(M.texture).__webglTexture,bt.get(M.depthTexture).__webglTexture);const Vt=M.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ut=!0);const kt=bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?Q=kt[W][J]:Q=kt[W],Tt=!0):wt.isWebGL2&&M.samples>0&&Mt.useMultisampledRTT(M)===!1?Q=bt.get(M).__webglMultisampledFramebuffer:Array.isArray(kt)?Q=kt[J]:Q=kt,_.copy(M.viewport),x.copy(M.scissor),T=M.scissorTest}else _.copy(nt).multiplyScalar(Y).floor(),x.copy(z).multiplyScalar(Y).floor(),T=tt;if(it.bindFramebuffer(N.FRAMEBUFFER,Q)&&wt.drawBuffers&&j&&it.drawBuffers(M,Q),it.viewport(_),it.scissor(x),it.setScissorTest(T),Tt){const Bt=bt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,J)}else if(Ut){const Bt=bt.get(M.texture),Vt=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.__webglTexture,J||0,Vt)}V=-1},this.readRenderTargetPixels=function(M,W,J,j,Q,Tt,Ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){it.bindFramebuffer(N.FRAMEBUFFER,Ft);try{const Bt=M.texture,Vt=Bt.format,kt=Bt.type;if(Vt!==Ne&&It.convert(Vt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=kt===Di&&(et.has("EXT_color_buffer_half_float")||wt.isWebGL2&&et.has("EXT_color_buffer_float"));if(kt!==pn&&It.convert(kt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===hn&&(wt.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=M.width-j&&J>=0&&J<=M.height-Q&&N.readPixels(W,J,j,Q,It.convert(Vt),It.convert(kt),Tt)}finally{const Bt=L!==null?bt.get(L).__webglFramebuffer:null;it.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(M,W,J=0){const j=Math.pow(2,-J),Q=Math.floor(W.image.width*j),Tt=Math.floor(W.image.height*j);Mt.setTexture2D(W,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,M.x,M.y,Q,Tt),it.unbindTexture()},this.copyTextureToTexture=function(M,W,J,j=0){const Q=W.image.width,Tt=W.image.height,Ut=It.convert(J.format),Ft=It.convert(J.type);Mt.setTexture2D(J,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,j,M.x,M.y,Q,Tt,Ut,Ft,W.image.data):W.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,j,M.x,M.y,W.mipmaps[0].width,W.mipmaps[0].height,Ut,W.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,j,M.x,M.y,Ut,Ft,W.image),j===0&&J.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),it.unbindTexture()},this.copyTextureToTexture3D=function(M,W,J,j,Q=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=M.max.x-M.min.x+1,Ut=M.max.y-M.min.y+1,Ft=M.max.z-M.min.z+1,Bt=It.convert(j.format),Vt=It.convert(j.type);let kt;if(j.isData3DTexture)Mt.setTexture3D(j,0),kt=N.TEXTURE_3D;else if(j.isDataArrayTexture)Mt.setTexture2DArray(j,0),kt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const zt=N.getParameter(N.UNPACK_ROW_LENGTH),Qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ee=N.getParameter(N.UNPACK_SKIP_PIXELS),Re=N.getParameter(N.UNPACK_SKIP_ROWS),He=N.getParameter(N.UNPACK_SKIP_IMAGES),re=J.isCompressedTexture?J.mipmaps[0]:J.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),J.isDataTexture||J.isData3DTexture?N.texSubImage3D(kt,Q,W.x,W.y,W.z,Tt,Ut,Ft,Bt,Vt,re.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(kt,Q,W.x,W.y,W.z,Tt,Ut,Ft,Bt,re.data)):N.texSubImage3D(kt,Q,W.x,W.y,W.z,Tt,Ut,Ft,Bt,Vt,re),N.pixelStorei(N.UNPACK_ROW_LENGTH,zt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He),Q===0&&j.generateMipmaps&&N.generateMipmap(kt),it.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Mt.setTextureCube(M,0):M.isData3DTexture?Mt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Mt.setTexture2DArray(M,0):Mt.setTexture2D(M,0),it.unbindTexture()},this.resetState=function(){P=0,U=0,L=null,it.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ks?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Cr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?Rn:Qa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Rn?ue:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class om extends sm{}om.prototype.isWebGL1Renderer=!0;class Vm extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class bl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qe()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ve=new k;class Mr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ze(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ze(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ze(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ze(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),o=jt(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class am extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Jn;const Ei=new k,Qn=new k,ti=new k,ei=new Lt,Mi=new Lt,xl=new te,ur=new k,wi=new k,fr=new k,ga=new Lt,us=new Lt,va=new Lt;class Wm extends ye{constructor(t=new am){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bl(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new Mr(n,3,0,!1)),Jn.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),xl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ti.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const l=this.center;pr(ur.set(-.5,-.5,0),ti,l,Qn,i,o),pr(wi.set(.5,-.5,0),ti,l,Qn,i,o),pr(fr.set(.5,.5,0),ti,l,Qn,i,o),ga.set(0,0),us.set(1,0),va.set(1,1);let a=t.ray.intersectTriangle(ur,wi,fr,!1,Ei);if(a===null&&(pr(wi.set(-.5,.5,0),ti,l,Qn,i,o),us.set(0,1),a=t.ray.intersectTriangle(ur,fr,wi,!1,Ei),a===null))return;const h=t.ray.origin.distanceTo(Ei);h<t.near||h>t.far||e.push({distance:h,point:Ei.clone(),uv:Pe.getInterpolation(Ei,ur,wi,fr,ga,us,va,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(r,t,e,n,i,o){ei.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Mi.x=o*ei.x-i*ei.y,Mi.y=i*ei.x+o*ei.y):Mi.copy(ei),r.copy(t),r.x+=Mi.x,r.y+=Mi.y,r.applyMatrix4(xl)}class lm extends xe{constructor(t=null,e=1,n=1,i,o,l,a,h,s=de,c=de,d,u){super(null,l,a,h,s,c,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let l=1;l<=t;l++)n=this.getPoint(l/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let l;e?l=e:l=t*n[o-1];let a=0,h=o-1,s;for(;a<=h;)if(i=Math.floor(a+(h-a)/2),s=n[i]-l,s<0)a=i+1;else if(s>0)h=i-1;else{h=i;break}if(i=h,n[i]===l)return i/(o-1);const c=n[i],u=n[i+1]-c,p=(l-c)/u;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const l=this.getPoint(i),a=this.getPoint(o),h=e||(l.isVector2?new Lt:new k);return h.copy(a).sub(l).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,i=[],o=[],l=[],a=new k,h=new te;for(let p=0;p<=t;p++){const f=p/t;i[p]=this.getTangentAt(f,new k)}o[0]=new k,l[0]=new k;let s=Number.MAX_VALUE;const c=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=s&&(s=c,n.set(1,0,0)),d<=s&&(s=d,n.set(0,1,0)),u<=s&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),l[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),l[p]=l[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ne(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(h.makeRotationAxis(a,f))}l[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos(ne(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let f=1;f<=t;f++)o[f].applyMatrix4(h.makeRotationAxis(i[f],p*f)),l[f].crossVectors(i[f],o[f])}return{tangents:i,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $m extends cm{constructor(t=0,e=0,n=1,i=1,o=0,l=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=a,this.aRotation=h}getPoint(t,e){const n=e||new Lt,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(l?o=0:o=i),this.aClockwise===!0&&!l&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let h=this.aX+this.xRadius*Math.cos(a),s=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=h-this.aX,p=s-this.aY;h=u*c-p*d+this.aX,s=u*d+p*c+this.aY}return n.set(h,s)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yl extends Oe{constructor(t=1,e=1,n=1,i=32,o=1,l=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:l,thetaStart:a,thetaLength:h};const s=this;i=Math.floor(i),o=Math.floor(o);const c=[],d=[],u=[],p=[];let f=0;const g=[],v=n/2;let m=0;A(),l===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2));function A(){const C=new k,P=new k;let U=0;const L=(e-t)/n;for(let V=0;V<=o;V++){const b=[],_=V/o,x=_*(e-t)+t;for(let T=0;T<=i;T++){const F=T/i,R=F*h+a,H=Math.sin(R),$=Math.cos(R);P.x=x*H,P.y=-_*n+v,P.z=x*$,d.push(P.x,P.y,P.z),C.set(H,L,$).normalize(),u.push(C.x,C.y,C.z),p.push(F,1-_),b.push(f++)}g.push(b)}for(let V=0;V<i;V++)for(let b=0;b<o;b++){const _=g[b][V],x=g[b+1][V],T=g[b+1][V+1],F=g[b][V+1];c.push(_,x,F),c.push(x,T,F),U+=6}s.addGroup(m,U,0),m+=U}function S(C){const P=f,U=new Lt,L=new k;let V=0;const b=C===!0?t:e,_=C===!0?1:-1;for(let T=1;T<=i;T++)d.push(0,v*_,0),u.push(0,_,0),p.push(.5,.5),f++;const x=f;for(let T=0;T<=i;T++){const R=T/i*h+a,H=Math.cos(R),$=Math.sin(R);L.x=b*$,L.y=v*_,L.z=b*H,d.push(L.x,L.y,L.z),u.push(0,_,0),U.x=H*.5+.5,U.y=$*.5*_+.5,p.push(U.x,U.y),f++}for(let T=0;T<i;T++){const F=P+T,R=x+T;C===!0?c.push(R,R+1,F):c.push(R+1,R,F),V+=3}s.addGroup(m,V,C===!0?1:2),m+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sl extends Oe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:l,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(l+a,Math.PI);let s=0;const c=[],d=new k,u=new k,p=[],f=[],g=[],v=[];for(let m=0;m<=n;m++){const A=[],S=m/n;let C=0;m===0&&l===0?C=.5/e:m===n&&h===Math.PI&&(C=-.5/e);for(let P=0;P<=e;P++){const U=P/e;d.x=-t*Math.cos(i+U*o)*Math.sin(l+S*a),d.y=t*Math.cos(l+S*a),d.z=t*Math.sin(i+U*o)*Math.sin(l+S*a),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),v.push(U+C,1-S),A.push(s++)}c.push(A)}for(let m=0;m<n;m++)for(let A=0;A<e;A++){const S=c[m][A+1],C=c[m][A],P=c[m+1][A],U=c[m+1][A+1];(m!==0||l>0)&&p.push(S,C,U),(m!==n-1||h<Math.PI)&&p.push(C,P,U)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jm extends Oe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new k,o=new k;if(t.index!==null){const l=t.attributes.position,a=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:a.count,materialIndex:0}]);for(let s=0,c=h.length;s<c;++s){const d=h[s],u=d.start,p=d.count;for(let f=u,g=u+p;f<g;f+=3)for(let v=0;v<3;v++){const m=a.getX(f+v),A=a.getX(f+(v+1)%3);i.fromBufferAttribute(l,m),o.fromBufferAttribute(l,A),_a(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}}else{const l=t.attributes.position;for(let a=0,h=l.count/3;a<h;a++)for(let s=0;s<3;s++){const c=3*a+s,d=3*a+(s+1)%3;i.fromBufferAttribute(l,c),o.fromBufferAttribute(l,d),_a(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new Ee(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function _a(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class hm extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xm extends hm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const wr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dm{constructor(t,e,n){const i=this;let o=!1,l=0,a=0,h;const s=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,o===!1&&i.onStart!==void 0&&i.onStart(c,l,a),o=!0},this.itemEnd=function(c){l++,i.onProgress!==void 0&&i.onProgress(c,l,a),l===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,d){return s.push(c,d),this},this.removeHandler=function(c){const d=s.indexOf(c);return d!==-1&&s.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=s.length;d<u;d+=2){const p=s[d],f=s[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}}const um=new dm;class zi{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const qe={};class fm extends Error{constructor(t,e){super(t),this.response=e}}class pm extends zi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=wr.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(qe[t]!==void 0){qe[t].push({onLoad:e,onProgress:n,onError:i});return}qe[t]=[],qe[t].push({onLoad:e,onProgress:n,onError:i});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,h=this.responseType;fetch(l).then(s=>{if(s.status===200||s.status===0){if(s.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||s.body===void 0||s.body.getReader===void 0)return s;const c=qe[t],d=s.body.getReader(),u=s.headers.get("Content-Length")||s.headers.get("X-File-Size"),p=u?parseInt(u):0,f=p!==0;let g=0;const v=new ReadableStream({start(m){A();function A(){d.read().then(({done:S,value:C})=>{if(S)m.close();else{g+=C.byteLength;const P=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let U=0,L=c.length;U<L;U++){const V=c[U];V.onProgress&&V.onProgress(P)}m.enqueue(C),A()}})}}});return new Response(v)}else throw new fm(`fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`,s)}).then(s=>{switch(h){case"arraybuffer":return s.arrayBuffer();case"blob":return s.blob();case"document":return s.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return s.json();default:if(a===void 0)return s.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return s.arrayBuffer().then(f=>p.decode(f))}}}).then(s=>{wr.add(t,s);const c=qe[t];delete qe[t];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onLoad&&p.onLoad(s)}}).catch(s=>{const c=qe[t];if(c===void 0)throw this.manager.itemError(t),s;delete qe[t];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onError&&p.onError(s)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class mm extends zi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=wr.get(t);if(l!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0),l;const a=Ui("img");function h(){c(),wr.add(t,this),e&&e(this),o.manager.itemEnd(t)}function s(d){c(),i&&i(d),o.manager.itemError(t),o.manager.itemEnd(t)}function c(){a.removeEventListener("load",h,!1),a.removeEventListener("error",s,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",s,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class qm extends zi{constructor(t){super(t)}load(t,e,n,i){const o=this,l=new lm,a=new pm(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(o.withCredentials),a.load(t,function(h){let s;try{s=o.parse(h)}catch(c){if(i!==void 0)i(c);else{console.error(c);return}}s.image!==void 0?l.image=s.image:s.data!==void 0&&(l.image.width=s.width,l.image.height=s.height,l.image.data=s.data),l.wrapS=s.wrapS!==void 0?s.wrapS:Ae,l.wrapT=s.wrapT!==void 0?s.wrapT:Ae,l.magFilter=s.magFilter!==void 0?s.magFilter:be,l.minFilter=s.minFilter!==void 0?s.minFilter:be,l.anisotropy=s.anisotropy!==void 0?s.anisotropy:1,s.colorSpace!==void 0?l.colorSpace=s.colorSpace:s.encoding!==void 0&&(l.encoding=s.encoding),s.flipY!==void 0&&(l.flipY=s.flipY),s.format!==void 0&&(l.format=s.format),s.type!==void 0&&(l.type=s.type),s.mipmaps!==void 0&&(l.mipmaps=s.mipmaps,l.minFilter=hi),s.mipmapCount===1&&(l.minFilter=be),s.generateMipmaps!==void 0&&(l.generateMipmaps=s.generateMipmaps),l.needsUpdate=!0,e&&e(l,s)},n,i),l}}class Ym extends zi{constructor(t){super(t)}load(t,e,n,i){const o=new xe,l=new mm(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class El extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const fs=new te,ba=new k,xa=new k;class gm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ba.setFromMatrixPosition(t.matrixWorld),e.position.copy(ba),xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xa),e.updateMatrixWorld(),fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ya=new te,Ti=new k,ps=new k;class vm extends gm{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),ps.copy(n.position),ps.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ps),n.updateMatrixWorld(),i.makeTranslation(-Ti.x,-Ti.y,-Ti.z),ya.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya)}}class Km extends El{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zm extends El{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jm extends Oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Qm extends bl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Sa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ea=new k,mr=new k;class tg{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ea.subVectors(t,this.start),mr.subVectors(this.end,this.start);const n=mr.dot(mr);let o=mr.dot(Ea)/n;return e&&(o=ne(o,0,1)),o}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Is);const Ma={type:"change"},ms={type:"start"},wa={type:"end"},gr=new sl,Ta=new an,_m=Math.cos(70*Zc.DEG2RAD);class eg extends On{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",y),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ma),n.update(),o=i.NONE},this.update=function(){const O=new k,ft=new Pn().setFromUnitVectors(t.up,new k(0,1,0)),rt=ft.clone().invert(),It=new k,Pt=new Pn,Dt=new k,Rt=2*Math.PI;return function(gt=null){const pt=n.object.position;O.copy(pt).sub(n.target),O.applyQuaternion(ft),a.setFromVector3(O),n.autoRotate&&o===i.NONE&&x(b(gt)),n.enableDamping?(a.theta+=h.theta*n.dampingFactor,a.phi+=h.phi*n.dampingFactor):(a.theta+=h.theta,a.phi+=h.phi);let St=n.minAzimuthAngle,vt=n.maxAzimuthAngle;isFinite(St)&&isFinite(vt)&&(St<-Math.PI?St+=Rt:St>Math.PI&&(St-=Rt),vt<-Math.PI?vt+=Rt:vt>Math.PI&&(vt-=Rt),St<=vt?a.theta=Math.max(St,Math.min(vt,a.theta)):a.theta=a.theta>(St+vt)/2?Math.max(St,a.theta):Math.min(vt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.zoomToCursor&&U||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*s),O.setFromSpherical(a),O.applyQuaternion(rt),pt.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),c.set(0,0,0));let st=!1;if(n.zoomToCursor&&U){let At=null;if(n.object.isPerspectiveCamera){const Nt=O.length();At=Z(Nt*s);const ie=Nt-At;n.object.position.addScaledVector(C,ie),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Nt=new k(P.x,P.y,0);Nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/s)),n.object.updateProjectionMatrix(),st=!0;const ie=new k(P.x,P.y,0);ie.unproject(n.object),n.object.position.sub(ie).add(Nt),n.object.updateMatrixWorld(),At=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(gr.origin.copy(n.object.position),gr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(gr.direction))<_m?t.lookAt(n.target):(Ta.setFromNormalAndCoplanarPoint(n.object.up,n.target),gr.intersectPlane(Ta,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/s)),n.object.updateProjectionMatrix(),st=!0);return s=1,U=!1,st||It.distanceToSquared(n.object.position)>l||8*(1-Pt.dot(n.object.quaternion))>l||Dt.distanceToSquared(n.target)>0?(n.dispatchEvent(Ma),It.copy(n.object.position),Pt.copy(n.object.quaternion),Dt.copy(n.target),st=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ct),n.domElement.removeEventListener("pointerdown",bt),n.domElement.removeEventListener("pointercancel",Ot),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",Mt),n.domElement.removeEventListener("pointerup",Ot),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",y),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=i.NONE;const l=1e-6,a=new Sa,h=new Sa;let s=1;const c=new k,d=new Lt,u=new Lt,p=new Lt,f=new Lt,g=new Lt,v=new Lt,m=new Lt,A=new Lt,S=new Lt,C=new k,P=new Lt;let U=!1;const L=[],V={};function b(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function x(O){h.theta-=O}function T(O){h.phi-=O}const F=function(){const O=new k;return function(rt,It){O.setFromMatrixColumn(It,0),O.multiplyScalar(-rt),c.add(O)}}(),R=function(){const O=new k;return function(rt,It){n.screenSpacePanning===!0?O.setFromMatrixColumn(It,1):(O.setFromMatrixColumn(It,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(rt),c.add(O)}}(),H=function(){const O=new k;return function(rt,It){const Pt=n.domElement;if(n.object.isPerspectiveCamera){const Dt=n.object.position;O.copy(Dt).sub(n.target);let Rt=O.length();Rt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*rt*Rt/Pt.clientHeight,n.object.matrix),R(2*It*Rt/Pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(rt*(n.object.right-n.object.left)/n.object.zoom/Pt.clientWidth,n.object.matrix),R(It*(n.object.top-n.object.bottom)/n.object.zoom/Pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?s/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?s*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ot(O){if(!n.zoomToCursor)return;U=!0;const ft=n.domElement.getBoundingClientRect(),rt=O.clientX-ft.left,It=O.clientY-ft.top,Pt=ft.width,Dt=ft.height;P.x=rt/Pt*2-1,P.y=-(It/Dt)*2+1,C.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function nt(O){d.set(O.clientX,O.clientY)}function z(O){ot(O),m.set(O.clientX,O.clientY)}function tt(O){f.set(O.clientX,O.clientY)}function _t(O){u.set(O.clientX,O.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ft=n.domElement;x(2*Math.PI*p.x/ft.clientHeight),T(2*Math.PI*p.y/ft.clientHeight),d.copy(u),n.update()}function yt(O){A.set(O.clientX,O.clientY),S.subVectors(A,m),S.y>0?$(_()):S.y<0&&Y(_()),m.copy(A),n.update()}function K(O){g.set(O.clientX,O.clientY),v.subVectors(g,f).multiplyScalar(n.panSpeed),H(v.x,v.y),f.copy(g),n.update()}function E(O){ot(O),O.deltaY<0?Y(_()):O.deltaY>0&&$(_()),n.update()}function I(O){let ft=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ft=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ft=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ft=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ft=!0;break}ft&&(O.preventDefault(),n.update())}function B(){if(L.length===1)d.set(L[0].pageX,L[0].pageY);else{const O=.5*(L[0].pageX+L[1].pageX),ft=.5*(L[0].pageY+L[1].pageY);d.set(O,ft)}}function G(){if(L.length===1)f.set(L[0].pageX,L[0].pageY);else{const O=.5*(L[0].pageX+L[1].pageX),ft=.5*(L[0].pageY+L[1].pageY);f.set(O,ft)}}function ht(){const O=L[0].pageX-L[1].pageX,ft=L[0].pageY-L[1].pageY,rt=Math.sqrt(O*O+ft*ft);m.set(0,rt)}function X(){n.enableZoom&&ht(),n.enablePan&&G()}function N(){n.enableZoom&&ht(),n.enableRotate&&B()}function at(O){if(L.length==1)u.set(O.pageX,O.pageY);else{const rt=Et(O),It=.5*(O.pageX+rt.x),Pt=.5*(O.pageY+rt.y);u.set(It,Pt)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ft=n.domElement;x(2*Math.PI*p.x/ft.clientHeight),T(2*Math.PI*p.y/ft.clientHeight),d.copy(u)}function et(O){if(L.length===1)g.set(O.pageX,O.pageY);else{const ft=Et(O),rt=.5*(O.pageX+ft.x),It=.5*(O.pageY+ft.y);g.set(rt,It)}v.subVectors(g,f).multiplyScalar(n.panSpeed),H(v.x,v.y),f.copy(g)}function wt(O){const ft=Et(O),rt=O.pageX-ft.x,It=O.pageY-ft.y,Pt=Math.sqrt(rt*rt+It*It);A.set(0,Pt),S.set(0,Math.pow(A.y/m.y,n.zoomSpeed)),$(S.y),m.copy(A)}function it(O){n.enableZoom&&wt(O),n.enablePan&&et(O)}function lt(O){n.enableZoom&&wt(O),n.enableRotate&&at(O)}function bt(O){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",Mt),n.domElement.addEventListener("pointerup",Ot)),ut(O),O.pointerType==="touch"?q(O):qt(O))}function Mt(O){n.enabled!==!1&&(O.pointerType==="touch"?dt(O):Yt(O))}function Ot(O){Ct(O),L.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",Mt),n.domElement.removeEventListener("pointerup",Ot)),n.dispatchEvent(wa),o=i.NONE}function qt(O){let ft;switch(O.button){case 0:ft=n.mouseButtons.LEFT;break;case 1:ft=n.mouseButtons.MIDDLE;break;case 2:ft=n.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case Un.DOLLY:if(n.enableZoom===!1)return;z(O),o=i.DOLLY;break;case Un.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;tt(O),o=i.PAN}else{if(n.enableRotate===!1)return;nt(O),o=i.ROTATE}break;case Un.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;nt(O),o=i.ROTATE}else{if(n.enablePan===!1)return;tt(O),o=i.PAN}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(ms)}function Yt(O){switch(o){case i.ROTATE:if(n.enableRotate===!1)return;_t(O);break;case i.DOLLY:if(n.enableZoom===!1)return;yt(O);break;case i.PAN:if(n.enablePan===!1)return;K(O);break}}function w(O){n.enabled===!1||n.enableZoom===!1||o!==i.NONE||(O.preventDefault(),n.dispatchEvent(ms),E(O),n.dispatchEvent(wa))}function y(O){n.enabled===!1||n.enablePan===!1||I(O)}function q(O){switch(mt(O),L.length){case 1:switch(n.touches.ONE){case In.ROTATE:if(n.enableRotate===!1)return;B(),o=i.TOUCH_ROTATE;break;case In.PAN:if(n.enablePan===!1)return;G(),o=i.TOUCH_PAN;break;default:o=i.NONE}break;case 2:switch(n.touches.TWO){case In.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(),o=i.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(),o=i.TOUCH_DOLLY_ROTATE;break;default:o=i.NONE}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(ms)}function dt(O){switch(mt(O),o){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;et(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;lt(O),n.update();break;default:o=i.NONE}}function ct(O){n.enabled!==!1&&O.preventDefault()}function ut(O){L.push(O)}function Ct(O){delete V[O.pointerId];for(let ft=0;ft<L.length;ft++)if(L[ft].pointerId==O.pointerId){L.splice(ft,1);return}}function mt(O){let ft=V[O.pointerId];ft===void 0&&(ft=new Lt,V[O.pointerId]=ft),ft.set(O.pageX,O.pageY)}function Et(O){const ft=O.pointerId===L[0].pointerId?L[1]:L[0];return V[ft.pointerId]}n.domElement.addEventListener("contextmenu",ct),n.domElement.addEventListener("pointerdown",bt),n.domElement.addEventListener("pointercancel",Ot),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const{abs:gs}=Math,ng=function(){let r=Number.MIN_SAFE_INTEGER;return function(){return Number.MAX_SAFE_INTEGER-1<=r&&(r=Number.MIN_SAFE_INTEGER),r+=1,r}}();function Vs(r){return typeof r=="string"?document.getElementById(r):r}function ig(r,t="value"){return Vs(r).getAttribute(t)}function bm(r,t,e){const n=Vs(r);return e===!1?n.removeAttribute(t):n.setAttribute(t,e),n}function rg(r,t=[]){const e=document.createElement(r);for(let n=0;n<t.length;n+=2)bm(e,t[n],t[n+1]);return e}function xm(r){return t=>(r(t),!1)}function Aa(r,t,e){const n=Vs(r);return n.addEventListener(t,xm(e)),n}function ym(r){return function(t){["Enter","NumpadEnter"].includes(t.code)&&r(t)}}function sg(r,t,e){const n=Aa(r,t,e);return Aa(n,"keyup",ym(e)),n}function og(r){return`${r.y}-${r.m<10?"0":""}${r.m}-${r.d<10?"0":""}${r.d}`}function Sm(r){let t=r<0?-1:1,e=Math.abs(r);for(;360<e;)e-=360;let n=Math.floor(e);const i=60*(e-n);let o=Math.floor(i),l=Math.round(100*(60*(i-o)))/100;return 60<=l&&(l-=60,o+=1),60<=o&&(o-=60,n+=1),{sign:t,degree:n,minute:o,second:l}}function Ra(r){const{sign:t,degree:e,minute:n,second:i}=Sm(r);return`${t<0?"-":""}${e}° ${n}' ${i}"`}function ag(r){return`${r.h} : ${r.m} : ${r.s}`}function lg(r=0,t=0,e=0){return r*1609.344+t*.3048+e*.0254}function cg(r,t,e){return(gs(r)+gs(t)/60+gs(e)/3600)*(r<0||t<0||e<0?-1:1)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=window,Ws=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ml=Symbol(),Ca=new WeakMap;let Em=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ws&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Ca.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ca.set(e,t))}return t}toString(){return this.cssText}};const Mm=r=>new Em(typeof r=="string"?r:r+"",void 0,Ml),wm=(r,t)=>{Ws?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const n=document.createElement("style"),i=_r.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)})},Pa=Ws?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Mm(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vs;const Tr=window,La=Tr.trustedTypes,Tm=La?La.emptyScript:"",Da=Tr.reactiveElementPolyfillSupport,Ds={toAttribute(r,t){switch(t){case Boolean:r=r?Tm:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},wl=(r,t)=>t!==r&&(t==t||r==r),_s={attribute:!0,type:String,converter:Ds,reflect:!1,hasChanged:wl},Os="finalized";let ii=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const i=this._$Ep(n,e);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,e=_s){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_s}static finalize(){if(this.hasOwnProperty(Os))return!1;this[Os]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(Pa(i))}else t!==void 0&&e.push(Pa(t));return e}static _$Ep(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wm(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=_s){var i;const o=this.constructor._$Ep(t,n);if(o!==void 0&&n.reflect===!0){const l=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Ds).toAttribute(e,n.type);this._$El=t,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const l=i.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?l.converter:Ds;this._$El=o,this[o]=a.fromAttribute(e,l.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||wl)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ii[Os]=!0,ii.elementProperties=new Map,ii.elementStyles=[],ii.shadowRootOptions={mode:"open"},Da==null||Da({ReactiveElement:ii}),((vs=Tr.reactiveElementVersions)!==null&&vs!==void 0?vs:Tr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bs;const Ar=window,fi=Ar.trustedTypes,Oa=fi?fi.createPolicy("lit-html",{createHTML:r=>r}):void 0,Us="$lit$",ln=`lit$${(Math.random()+"").slice(9)}$`,Tl="?"+ln,Am=`<${Tl}>`,Dn=document,Ii=()=>Dn.createComment(""),Ni=r=>r===null||typeof r!="object"&&typeof r!="function",Al=Array.isArray,Rm=r=>Al(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",xs=`[ 	
\f\r]`,Ai=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ua=/-->/g,Ia=/>/g,Sn=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Na=/'/g,ka=/"/g,Rl=/^(?:script|style|textarea|title)$/i,Cm=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Cl=Cm(1),pi=Symbol.for("lit-noChange"),he=Symbol.for("lit-nothing"),Fa=new WeakMap,wn=Dn.createTreeWalker(Dn,129,null,!1);function Pl(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(t):t}const Pm=(r,t)=>{const e=r.length-1,n=[];let i,o=t===2?"<svg>":"",l=Ai;for(let a=0;a<e;a++){const h=r[a];let s,c,d=-1,u=0;for(;u<h.length&&(l.lastIndex=u,c=l.exec(h),c!==null);)u=l.lastIndex,l===Ai?c[1]==="!--"?l=Ua:c[1]!==void 0?l=Ia:c[2]!==void 0?(Rl.test(c[2])&&(i=RegExp("</"+c[2],"g")),l=Sn):c[3]!==void 0&&(l=Sn):l===Sn?c[0]===">"?(l=i??Ai,d=-1):c[1]===void 0?d=-2:(d=l.lastIndex-c[2].length,s=c[1],l=c[3]===void 0?Sn:c[3]==='"'?ka:Na):l===ka||l===Na?l=Sn:l===Ua||l===Ia?l=Ai:(l=Sn,i=void 0);const p=l===Sn&&r[a+1].startsWith("/>")?" ":"";o+=l===Ai?h+Am:d>=0?(n.push(s),h.slice(0,d)+Us+h.slice(d)+ln+p):h+ln+(d===-2?(n.push(void 0),a):p)}return[Pl(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),n]};class ki{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,l=0;const a=t.length-1,h=this.parts,[s,c]=Pm(t,e);if(this.el=ki.createElement(s,n),wn.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=wn.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith(Us)||u.startsWith(ln)){const p=c[l++];if(d.push(u),p!==void 0){const f=i.getAttribute(p.toLowerCase()+Us).split(ln),g=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:g[2],strings:f,ctor:g[1]==="."?Dm:g[1]==="?"?Um:g[1]==="@"?Im:Dr})}else h.push({type:6,index:o})}for(const u of d)i.removeAttribute(u)}if(Rl.test(i.tagName)){const d=i.textContent.split(ln),u=d.length-1;if(u>0){i.textContent=fi?fi.emptyScript:"";for(let p=0;p<u;p++)i.append(d[p],Ii()),wn.nextNode(),h.push({type:2,index:++o});i.append(d[u],Ii())}}}else if(i.nodeType===8)if(i.data===Tl)h.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(ln,d+1))!==-1;)h.push({type:7,index:o}),d+=ln.length-1}o++}}static createElement(t,e){const n=Dn.createElement("template");return n.innerHTML=t,n}}function mi(r,t,e=r,n){var i,o,l,a;if(t===pi)return t;let h=n!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[n]:e._$Cl;const s=Ni(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==s&&((o=h==null?void 0:h._$AO)===null||o===void 0||o.call(h,!1),s===void 0?h=void 0:(h=new s(r),h._$AT(r,e,n)),n!==void 0?((l=(a=e)._$Co)!==null&&l!==void 0?l:a._$Co=[])[n]=h:e._$Cl=h),h!==void 0&&(t=mi(r,h._$AS(r,t.values),h,n)),t}class Lm{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Dn).importNode(n,!0);wn.currentNode=o;let l=wn.nextNode(),a=0,h=0,s=i[0];for(;s!==void 0;){if(a===s.index){let c;s.type===2?c=new Hi(l,l.nextSibling,this,t):s.type===1?c=new s.ctor(l,s.name,s.strings,this,t):s.type===6&&(c=new Nm(l,this,t)),this._$AV.push(c),s=i[++h]}a!==(s==null?void 0:s.index)&&(l=wn.nextNode(),a++)}return wn.currentNode=Dn,o}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Hi{constructor(t,e,n,i){var o;this.type=2,this._$AH=he,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=mi(this,t,e),Ni(t)?t===he||t==null||t===""?(this._$AH!==he&&this._$AR(),this._$AH=he):t!==this._$AH&&t!==pi&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Rm(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==he&&Ni(this._$AH)?this._$AA.nextSibling.data=t:this.$(Dn.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ki.createElement(Pl(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(n);else{const l=new Lm(o,this),a=l.u(this.options);l.v(n),this.$(a),this._$AH=l}}_$AC(t){let e=Fa.get(t.strings);return e===void 0&&Fa.set(t.strings,e=new ki(t)),e}T(t){Al(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new Hi(this.k(Ii()),this.k(Ii()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Dr{constructor(t,e,n,i,o){this.type=1,this._$AH=he,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=he}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const o=this.strings;let l=!1;if(o===void 0)t=mi(this,t,e,0),l=!Ni(t)||t!==this._$AH&&t!==pi,l&&(this._$AH=t);else{const a=t;let h,s;for(t=o[0],h=0;h<o.length-1;h++)s=mi(this,a[n+h],e,h),s===pi&&(s=this._$AH[h]),l||(l=!Ni(s)||s!==this._$AH[h]),s===he?t=he:t!==he&&(t+=(s??"")+o[h+1]),this._$AH[h]=s}l&&!i&&this.j(t)}j(t){t===he?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Dm extends Dr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===he?void 0:t}}const Om=fi?fi.emptyScript:"";class Um extends Dr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==he?this.element.setAttribute(this.name,Om):this.element.removeAttribute(this.name)}}class Im extends Dr{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=mi(this,t,e,0))!==null&&n!==void 0?n:he)===pi)return;const i=this._$AH,o=t===he&&i!==he||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,l=t!==he&&(i===he||o);o&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Nm{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){mi(this,t)}}const Ba=Ar.litHtmlPolyfillSupport;Ba==null||Ba(ki,Hi),((bs=Ar.litHtmlVersions)!==null&&bs!==void 0?bs:Ar.litHtmlVersions=[]).push("2.8.0");const km=(r,t,e)=>{var n,i;const o=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:t;let l=o._$litPart$;if(l===void 0){const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=l=new Hi(t.insertBefore(Ii(),a),a,void 0,e??{})}return l._$AI(r),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ys,Ss;class ai extends ii{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=km(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return pi}}ai.finalized=!0,ai._$litElement$=!0,(ys=globalThis.litElementHydrateSupport)===null||ys===void 0||ys.call(globalThis,{LitElement:ai});const za=globalThis.litElementPolyfillSupport;za==null||za({LitElement:ai});((Ss=globalThis.litElementVersions)!==null&&Ss!==void 0?Ss:globalThis.litElementVersions=[]).push("3.3.3");(function(r){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=r,e.c=t,e.d=function(n,i,o){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:o})},e.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var l in n)e.d(o,l,(function(a){return n[a]}).bind(null,l));return o},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=63)})({0:function(r,t,e){e.d(t,"b",function(){return h}),e.d(t,"c",function(){return n.a}),e.d(t,"a",function(){return V});var n=e(3);const i=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol();class l{constructor(_,x){if(x!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=_}get styleSheet(){return i&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,h=(b,..._)=>{const x=_.reduce((F,R,H)=>F+($=>{if($ instanceof l)return $.cssText;if(typeof $=="number")return $;throw Error(`Value passed to 'css' function must be a 'css' function result: ${$}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(R)+b[H+1],b[0]);let T=a.get(x);return T===void 0&&a.set(x,T=new l(x,o)),T},s=i?b=>b:b=>b instanceof CSSStyleSheet?(_=>{let x="";for(const T of _.cssRules)x+=T.cssText;return(T=>new l(T+"",o))(x)})(b):b;var c,d,u,p;const f={toAttribute(b,_){switch(_){case Boolean:b=b?"":null;break;case Object:case Array:b=b==null?b:JSON.stringify(b)}return b},fromAttribute(b,_){let x=b;switch(_){case Boolean:x=b!==null;break;case Number:x=b===null?null:Number(b);break;case Object:case Array:try{x=JSON.parse(b)}catch{x=null}}return x}},g=(b,_)=>_!==b&&(_==_||b==b),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(_){var x;(x=this.v)!==null&&x!==void 0||(this.v=[]),this.v.push(_)}static get observedAttributes(){this.finalize();const _=[];return this.elementProperties.forEach((x,T)=>{const F=this.Πp(T,x);F!==void 0&&(this.Πm.set(F,T),_.push(F))}),_}static createProperty(_,x=v){if(x.state&&(x.attribute=!1),this.finalize(),this.elementProperties.set(_,x),!x.noAccessor&&!this.prototype.hasOwnProperty(_)){const T=typeof _=="symbol"?Symbol():"__"+_,F=this.getPropertyDescriptor(_,T,x);F!==void 0&&Object.defineProperty(this.prototype,_,F)}}static getPropertyDescriptor(_,x,T){return{get(){return this[x]},set(F){const R=this[_];this[x]=F,this.requestUpdate(_,R,T)},configurable:!0,enumerable:!0}}static getPropertyOptions(_){return this.elementProperties.get(_)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const _=Object.getPrototypeOf(this);if(_.finalize(),this.elementProperties=new Map(_.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const x=this.properties,T=[...Object.getOwnPropertyNames(x),...Object.getOwnPropertySymbols(x)];for(const F of T)this.createProperty(F,x[F])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(_){const x=[];if(Array.isArray(_)){const T=new Set(_.flat(1/0).reverse());for(const F of T)x.unshift(s(F))}else _!==void 0&&x.push(s(_));return x}static Πp(_,x){const T=x.attribute;return T===!1?void 0:typeof T=="string"?T:typeof _=="string"?_.toLowerCase():void 0}u(){var _;this.Πg=new Promise(x=>this.enableUpdating=x),this.L=new Map,this.Π_(),this.requestUpdate(),(_=this.constructor.v)===null||_===void 0||_.forEach(x=>x(this))}addController(_){var x,T;((x=this.ΠU)!==null&&x!==void 0?x:this.ΠU=[]).push(_),this.renderRoot!==void 0&&this.isConnected&&((T=_.hostConnected)===null||T===void 0||T.call(_))}removeController(_){var x;(x=this.ΠU)===null||x===void 0||x.splice(this.ΠU.indexOf(_)>>>0,1)}Π_(){this.constructor.elementProperties.forEach((_,x)=>{this.hasOwnProperty(x)&&(this.Πi.set(x,this[x]),delete this[x])})}createRenderRoot(){var _;const x=(_=this.shadowRoot)!==null&&_!==void 0?_:this.attachShadow(this.constructor.shadowRootOptions);return((T,F)=>{i?T.adoptedStyleSheets=F.map(R=>R instanceof CSSStyleSheet?R:R.styleSheet):F.forEach(R=>{const H=document.createElement("style");H.textContent=R.cssText,T.appendChild(H)})})(x,this.constructor.elementStyles),x}connectedCallback(){var _;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(_=this.ΠU)===null||_===void 0||_.forEach(x=>{var T;return(T=x.hostConnected)===null||T===void 0?void 0:T.call(x)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(_){}disconnectedCallback(){var _;(_=this.ΠU)===null||_===void 0||_.forEach(x=>{var T;return(T=x.hostDisconnected)===null||T===void 0?void 0:T.call(x)}),this.Πo=new Promise(x=>this.Πl=x)}attributeChangedCallback(_,x,T){this.K(_,T)}Πj(_,x,T=v){var F,R;const H=this.constructor.Πp(_,T);if(H!==void 0&&T.reflect===!0){const $=((R=(F=T.converter)===null||F===void 0?void 0:F.toAttribute)!==null&&R!==void 0?R:f.toAttribute)(x,T.type);this.Πh=_,$==null?this.removeAttribute(H):this.setAttribute(H,$),this.Πh=null}}K(_,x){var T,F,R;const H=this.constructor,$=H.Πm.get(_);if($!==void 0&&this.Πh!==$){const Y=H.getPropertyOptions($),ot=Y.converter,Z=(R=(F=(T=ot)===null||T===void 0?void 0:T.fromAttribute)!==null&&F!==void 0?F:typeof ot=="function"?ot:null)!==null&&R!==void 0?R:f.fromAttribute;this.Πh=$,this[$]=Z(x,Y.type),this.Πh=null}}requestUpdate(_,x,T){let F=!0;_!==void 0&&(((T=T||this.constructor.getPropertyOptions(_)).hasChanged||g)(this[_],x)?(this.L.has(_)||this.L.set(_,x),T.reflect===!0&&this.Πh!==_&&(this.Πk===void 0&&(this.Πk=new Map),this.Πk.set(_,T))):F=!1),!this.isUpdatePending&&F&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(x){Promise.reject(x)}const _=this.performUpdate();return _!=null&&await _,!this.isUpdatePending}performUpdate(){var _;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((F,R)=>this[R]=F),this.Πi=void 0);let x=!1;const T=this.L;try{x=this.shouldUpdate(T),x?(this.willUpdate(T),(_=this.ΠU)===null||_===void 0||_.forEach(F=>{var R;return(R=F.hostUpdate)===null||R===void 0?void 0:R.call(F)}),this.update(T)):this.Π$()}catch(F){throw x=!1,this.Π$(),F}x&&this.E(T)}willUpdate(_){}E(_){var x;(x=this.ΠU)===null||x===void 0||x.forEach(T=>{var F;return(F=T.hostUpdated)===null||F===void 0?void 0:F.call(T)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(_)),this.updated(_)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(_){return!0}update(_){this.Πk!==void 0&&(this.Πk.forEach((x,T)=>this.Πj(T,this[T],x)),this.Πk=void 0),this.Π$()}updated(_){}firstUpdated(_){}}var A,S,C,P,U,L;m.finalized=!0,m.shadowRootOptions={mode:"open"},(d=(c=globalThis).reactiveElementPlatformSupport)===null||d===void 0||d.call(c,{ReactiveElement:m}),((u=(p=globalThis).reactiveElementVersions)!==null&&u!==void 0?u:p.reactiveElementVersions=[]).push("1.0.0-rc.1"),((A=(L=globalThis).litElementVersions)!==null&&A!==void 0?A:L.litElementVersions=[]).push("3.0.0-rc.1");class V extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var _,x;const T=super.createRenderRoot();return(_=(x=this.renderOptions).renderBefore)!==null&&_!==void 0||(x.renderBefore=T.firstChild),T}update(_){const x=this.render();super.update(_),this.Φt=Object(n.d)(x,this.renderRoot,this.renderOptions)}connectedCallback(){var _;super.connectedCallback(),(_=this.Φt)===null||_===void 0||_.setConnected(!0)}disconnectedCallback(){var _;super.disconnectedCallback(),(_=this.Φt)===null||_===void 0||_.setConnected(!1)}render(){return n.b}}V.finalized=!0,V._$litElement$=!0,(C=(S=globalThis).litElementHydrateSupport)===null||C===void 0||C.call(S,{LitElement:V}),(U=(P=globalThis).litElementPlatformSupport)===null||U===void 0||U.call(P,{LitElement:V})},1:function(r,t,e){e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});const n=(l,a)=>a.kind==="method"&&a.descriptor&&!("value"in a.descriptor)?{...a,finisher(h){h.createProperty(a.key,l)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){typeof a.initializer=="function"&&(this[a.key]=a.initializer.call(this))},finisher(h){h.createProperty(a.key,l)}};function i(l){return(a,h)=>h!==void 0?((s,c,d)=>{c.constructor.createProperty(d,s)})(l,a,h):n(l,a)}function o(l){return i({...l,state:!0,attribute:!1})}},2:function(r,t,e){e.d(t,"a",function(){return n});const n=e(0).b`
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
`},3:function(r,t,e){var n,i,o,l;e.d(t,"a",function(){return b}),e.d(t,"b",function(){return _}),e.d(t,"c",function(){return x}),e.d(t,"d",function(){return F});const a=globalThis.trustedTypes,h=a?a.createPolicy("lit-html",{createHTML:K=>K}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,d=`<${c}>`,u=document,p=(K="")=>u.createComment(K),f=K=>K===null||typeof K!="object"&&typeof K!="function",g=Array.isArray,v=K=>{var E;return g(K)||typeof((E=K)===null||E===void 0?void 0:E[Symbol.iterator])=="function"},m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,U=/"/g,L=/^(?:script|style|textarea)$/i,V=K=>(E,...I)=>({_$litType$:K,strings:E,values:I}),b=V(1),_=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),T=new WeakMap,F=(K,E,I)=>{var B,G;const ht=(B=I==null?void 0:I.renderBefore)!==null&&B!==void 0?B:E;let X=ht._$litPart$;if(X===void 0){const N=(G=I==null?void 0:I.renderBefore)!==null&&G!==void 0?G:null;ht._$litPart$=X=new Z(E.insertBefore(p(),N),N,void 0,I)}return X.I(K),X},R=u.createTreeWalker(u,129,null,!1),H=(K,E)=>{const I=K.length-1,B=[];let G,ht=E===2?"<svg>":"",X=m;for(let at=0;at<I;at++){const et=K[at];let wt,it,lt=-1,bt=0;for(;bt<et.length&&(X.lastIndex=bt,it=X.exec(et),it!==null);)bt=X.lastIndex,X===m?it[1]==="!--"?X=A:it[1]!==void 0?X=S:it[2]!==void 0?(L.test(it[2])&&(G=RegExp("</"+it[2],"g")),X=C):it[3]!==void 0&&(X=C):X===C?it[0]===">"?(X=G??m,lt=-1):it[1]===void 0?lt=-2:(lt=X.lastIndex-it[2].length,wt=it[1],X=it[3]===void 0?C:it[3]==='"'?U:P):X===U||X===P?X=C:X===A||X===S?X=m:(X=C,G=void 0);const Mt=X===C&&K[at+1].startsWith("/>")?" ":"";ht+=X===m?et+d:lt>=0?(B.push(wt),et.slice(0,lt)+"$lit$"+et.slice(lt)+s+Mt):et+s+(lt===-2?(B.push(void 0),at):Mt)}const N=ht+(K[I]||"<?>")+(E===2?"</svg>":"");return[h!==void 0?h.createHTML(N):N,B]};class ${constructor({strings:E,_$litType$:I},B){let G;this.parts=[];let ht=0,X=0;const N=E.length-1,at=this.parts,[et,wt]=H(E,I);if(this.el=$.createElement(et,B),R.currentNode=this.el.content,I===2){const it=this.el.content,lt=it.firstChild;lt.remove(),it.append(...lt.childNodes)}for(;(G=R.nextNode())!==null&&at.length<N;){if(G.nodeType===1){if(G.hasAttributes()){const it=[];for(const lt of G.getAttributeNames())if(lt.endsWith("$lit$")||lt.startsWith(s)){const bt=wt[X++];if(it.push(lt),bt!==void 0){const Mt=G.getAttribute(bt.toLowerCase()+"$lit$").split(s),Ot=/([.?@])?(.*)/.exec(bt);at.push({type:1,index:ht,name:Ot[2],strings:Mt,ctor:Ot[1]==="."?z:Ot[1]==="?"?tt:Ot[1]==="@"?_t:nt})}else at.push({type:6,index:ht})}for(const lt of it)G.removeAttribute(lt)}if(L.test(G.tagName)){const it=G.textContent.split(s),lt=it.length-1;if(lt>0){G.textContent=a?a.emptyScript:"";for(let bt=0;bt<lt;bt++)G.append(it[bt],p()),R.nextNode(),at.push({type:2,index:++ht});G.append(it[lt],p())}}}else if(G.nodeType===8)if(G.data===c)at.push({type:2,index:ht});else{let it=-1;for(;(it=G.data.indexOf(s,it+1))!==-1;)at.push({type:7,index:ht}),it+=s.length-1}ht++}}static createElement(E,I){const B=u.createElement("template");return B.innerHTML=E,B}}function Y(K,E,I=K,B){var G,ht,X,N;if(E===_)return E;let at=B!==void 0?(G=I.Σi)===null||G===void 0?void 0:G[B]:I.Σo;const et=f(E)?void 0:E._$litDirective$;return(at==null?void 0:at.constructor)!==et&&((ht=at==null?void 0:at.O)===null||ht===void 0||ht.call(at,!1),et===void 0?at=void 0:(at=new et(K),at.T(K,I,B)),B!==void 0?((X=(N=I).Σi)!==null&&X!==void 0?X:N.Σi=[])[B]=at:I.Σo=at),at!==void 0&&(E=Y(K,at.S(K,E.values),at,B)),E}class ot{constructor(E,I){this.l=[],this.N=void 0,this.D=E,this.M=I}u(E){var I;const{el:{content:B},parts:G}=this.D,ht=((I=E==null?void 0:E.creationScope)!==null&&I!==void 0?I:u).importNode(B,!0);R.currentNode=ht;let X=R.nextNode(),N=0,at=0,et=G[0];for(;et!==void 0;){if(N===et.index){let wt;et.type===2?wt=new Z(X,X.nextSibling,this,E):et.type===1?wt=new et.ctor(X,et.name,et.strings,this,E):et.type===6&&(wt=new yt(X,this,E)),this.l.push(wt),et=G[++at]}N!==(et==null?void 0:et.index)&&(X=R.nextNode(),N++)}return ht}v(E){let I=0;for(const B of this.l)B!==void 0&&(B.strings!==void 0?(B.I(E,B,I),I+=B.strings.length-2):B.I(E[I])),I++}}class Z{constructor(E,I,B,G){this.type=2,this.N=void 0,this.A=E,this.B=I,this.M=B,this.options=G}setConnected(E){var I;(I=this.P)===null||I===void 0||I.call(this,E)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(E,I=this){E=Y(this,E,I),f(E)?E===x||E==null||E===""?(this.H!==x&&this.R(),this.H=x):E!==this.H&&E!==_&&this.m(E):E._$litType$!==void 0?this._(E):E.nodeType!==void 0?this.$(E):v(E)?this.g(E):this.m(E)}k(E,I=this.B){return this.A.parentNode.insertBefore(E,I)}$(E){this.H!==E&&(this.R(),this.H=this.k(E))}m(E){const I=this.A.nextSibling;I!==null&&I.nodeType===3&&(this.B===null?I.nextSibling===null:I===this.B.previousSibling)?I.data=E:this.$(u.createTextNode(E)),this.H=E}_(E){var I;const{values:B,_$litType$:G}=E,ht=typeof G=="number"?this.C(E):(G.el===void 0&&(G.el=$.createElement(G.h,this.options)),G);if(((I=this.H)===null||I===void 0?void 0:I.D)===ht)this.H.v(B);else{const X=new ot(ht,this),N=X.u(this.options);X.v(B),this.$(N),this.H=X}}C(E){let I=T.get(E.strings);return I===void 0&&T.set(E.strings,I=new $(E)),I}g(E){g(this.H)||(this.H=[],this.R());const I=this.H;let B,G=0;for(const ht of E)G===I.length?I.push(B=new Z(this.k(p()),this.k(p()),this,this.options)):B=I[G],B.I(ht),G++;G<I.length&&(this.R(B&&B.B.nextSibling,G),I.length=G)}R(E=this.A.nextSibling,I){var B;for((B=this.P)===null||B===void 0||B.call(this,!1,!0,I);E&&E!==this.B;){const G=E.nextSibling;E.remove(),E=G}}}class nt{constructor(E,I,B,G,ht){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=E,this.name=I,this.M=G,this.options=ht,B.length>2||B[0]!==""||B[1]!==""?(this.H=Array(B.length-1).fill(x),this.strings=B):this.H=x}get tagName(){return this.element.tagName}I(E,I=this,B,G){const ht=this.strings;let X=!1;if(ht===void 0)E=Y(this,E,I,0),X=!f(E)||E!==this.H&&E!==_,X&&(this.H=E);else{const N=E;let at,et;for(E=ht[0],at=0;at<ht.length-1;at++)et=Y(this,N[B+at],I,at),et===_&&(et=this.H[at]),X||(X=!f(et)||et!==this.H[at]),et===x?E=x:E!==x&&(E+=(et??"")+ht[at+1]),this.H[at]=et}X&&!G&&this.W(E)}W(E){E===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,E??"")}}class z extends nt{constructor(){super(...arguments),this.type=3}W(E){this.element[this.name]=E===x?void 0:E}}class tt extends nt{constructor(){super(...arguments),this.type=4}W(E){E&&E!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class _t extends nt{constructor(){super(...arguments),this.type=5}I(E,I=this){var B;if((E=(B=Y(this,E,I,0))!==null&&B!==void 0?B:x)===_)return;const G=this.H,ht=E===x&&G!==x||E.capture!==G.capture||E.once!==G.once||E.passive!==G.passive,X=E!==x&&(G===x||ht);ht&&this.element.removeEventListener(this.name,this,G),X&&this.element.addEventListener(this.name,this,E),this.H=E}handleEvent(E){var I,B;typeof this.H=="function"?this.H.call((B=(I=this.options)===null||I===void 0?void 0:I.host)!==null&&B!==void 0?B:this.element,E):this.H.handleEvent(E)}}class yt{constructor(E,I,B){this.element=E,this.type=6,this.N=void 0,this.V=void 0,this.M=I,this.options=B}I(E){Y(this,E)}}(i=(n=globalThis).litHtmlPlatformSupport)===null||i===void 0||i.call(n,$,Z),((o=(l=globalThis).litHtmlVersions)!==null&&o!==void 0?o:l.litHtmlVersions=[]).push("2.0.0-rc.2")},4:function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f};class a extends n.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,n.b`
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
      `]}render(){var s;return n.c` ${!((s=this.icon)===null||s===void 0)&&s.indexOf("url")?n.c` ${this.icon} `:""}`}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed")),s=="color"&&this.color?this.style.color=this.color:s=="icon"&&d.indexOf("url")>-1&&this.setBackgroundImage(d)}setBackgroundImage(s){this.style.backgroundImage=s}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"color",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"size",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"button",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",a)},49:function(r,t,e){e.d(t,"a",function(){return s});var n=e(0),i=e(3);const o=c=>c??i.c;var l=e(1),a=e(2),h=(e(9),e(5),function(c,d,u,p){var f,g=arguments.length,v=g<3?d:p===null?p=Object.getOwnPropertyDescriptor(d,u):p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(c,d,u,p);else for(var m=c.length-1;m>=0;m--)(f=c[m])&&(v=(g<3?f(v):g>3?f(d,u,v):f(d,u))||v);return g>3&&v&&Object.defineProperty(d,u,v),v});class s extends n.a{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",d=>{var u,p;this.active&&this.type==="select"?this.closeSelectMenu(d):this.active||(this.active=!0,this.type==="select"||this.disabled||this.readonly||(p=(u=this.shadowRoot)===null||u===void 0?void 0:u.querySelector("input"))===null||p===void 0||p.focus())})}static get styles(){return[a.a,n.b`
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
          min="${o(this.min)}"
          max="${o(this.max)}"
          pattern="${o(this.pattern)}"
          name="${o(this.name)}"
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
                    @click="${d=>{this.active=!1,d.stopPropagation()}}"
                    @wheel="${d=>d.stopPropagation()}"
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
    `}handleChange(d){this.value=d.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleBlur(d){this.type==="number"&&this.validateMinMax(d.target.value),this.type!=="select"&&(this.active=!1)}handleIncrement(d){d==="left"?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):d==="right"&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(d){const u=d.target.assignedNodes();u.forEach(p=>{p.tagName==="KOR-MENU-ITEM"&&p.addEventListener("active-changed",f=>{f.target.active&&(u.forEach(g=>{g.active=!1}),f.target.active=!0,this.value=p.label,this.active=!1)})})}attributeChangedCallback(d,u,p){super.attributeChangedCallback(d,u,p),this.dispatchEvent(new Event(d+"-changed")),d==="active"&&this.active&&this.type==="select"&&this.handleMenu()}handleMenu(){const d=this.parentElement,u=()=>{this.active=!1,d==null||d.removeEventListener("wheel",u)};d==null||d.addEventListener("wheel",u)}closeSelectMenu(d){this.type==="select"&&this.active&&(d.stopImmediatePropagation(),this.active=!1)}validateMinMax(d){d&&(this.min&&d<parseInt(this.min)?this.value=this.min:this.max&&d>parseInt(this.max)?this.value=this.max:this.value=d.toString())}getStatusIcon(){let d;switch(this.status){case"error":d="cancel";break;case"warning":d="error";break;case"success":d="check_circle"}return d}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}}h([Object(l.a)({type:String,reflect:!0})],s.prototype,"label",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"icon",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"value",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"name",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"type",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"status",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),h([Object(l.a)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),h([Object(l.a)({type:Boolean,reflect:!0})],s.prototype,"autofocus",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"pattern",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"min",void 0),h([Object(l.a)({type:String,reflect:!0})],s.prototype,"max",void 0),h([Object(l.a)({type:Number,reflect:!0})],s.prototype,"step",void 0),window.customElements.get("kor-input")||window.customElements.define("kor-input",s)},5:function(r,t,e){e.r(t);var n=e(4);e.d(t,"korIcon",function(){return n.a})},63:function(r,t,e){e.r(t);var n=e(49);e.d(t,"korInput",function(){return n.a})},8:function(r,t,e){e.d(t,"a",function(){return a});var n=e(0),i=e(1),o=e(2),l=(e(5),function(h,s,c,d){var u,p=arguments.length,f=p<3?s:d===null?d=Object.getOwnPropertyDescriptor(s,c):d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(h,s,c,d);else for(var g=h.length-1;g>=0;g--)(u=h[g])&&(f=(p<3?u(f):p>3?u(s,c,f):u(s,c))||f);return p>3&&f&&Object.defineProperty(s,c,f),f});class a extends n.a{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,n.b`
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
            @slotchange="${s=>this.emptyHeader=s.target.assignedNodes().length===0}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${s=>this.emptyFunctions=s.target.assignedNodes().length===0}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${s=>this.emptyFooter=s.target.assignedNodes().length===0}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(s,c,d){super.attributeChangedCallback(s,c,d),this.dispatchEvent(new Event(s+"-changed"))}}l([Object(i.a)({type:String,reflect:!0})],a.prototype,"label",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"icon",void 0),l([Object(i.a)({type:String,reflect:!0})],a.prototype,"image",void 0),l([Object(i.a)({type:String,reflect:!0,attribute:"flex-direction"})],a.prototype,"flexDirection",void 0),l([Object(i.a)({type:Boolean,reflect:!0})],a.prototype,"flat",void 0),l([Object(i.b)()],a.prototype,"emptyHeader",void 0),l([Object(i.b)()],a.prototype,"emptyFunctions",void 0),l([Object(i.b)()],a.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",a)},9:function(r,t,e){e.r(t);var n=e(8);e.d(t,"korCard",function(){return n.a})}});function Fm(r){const t=`${r}`.replace(/^[^-.0-9]*/,"").replace(/[^.0-9SsWw]*$/,"");let e=t.startsWith("-")?-1:1;(t.includes("S")||t.includes("s")||t.includes("W")||t.includes("w"))&&(e=-1);const n=t.replace(/^[^.0-9]*/,"").split(/[^.0-9]+/);let i=parseFloat(n[0]),o=parseFloat(n[1]),l=parseFloat(n[2]);isNaN(i)&&(i=0),isNaN(o)&&(o=0),isNaN(l)&&(l=0);const a=Math.abs(i),h=Math.abs(o),s=Math.abs(l);return e*(a+h/60+s/3600)}function Bm(r,t,e){return t<r?r:t<e?t:e}class Ll extends ai{constructor(){super(),this.disabled=!1,this.value=0,this.min=-360,this.max=360}render(){return Cl`
            <kor-input
                .disabled="${this.disabled}"
                type="text"
                label="Degrees : Minutes : Seconds"
                value="${Ra(this.value)}"
                no-clear
                tabindex="0"
                @blur="${this._blurHandler}"
                @keyup="${this._blurHandler}"
            ></kor-input>`}_blurHandler(t){(t.type=="blur"||t.type=="keyup"&&["Enter","NumpadEnter"].includes(t.code))&&(this.value=Bm(this.min,Fm(t.target.value),this.max),this.shadowRoot.querySelector("kor-input").value=Ra(this.value))}}kr(Ll,"properties",{value:{type:Number},min:{type:Number},max:{type:Number},disabled:{type:Boolean}});customElements.define("degree-input",Ll);function zm(r){const e=`${r}`.replace(/^[^0-9]*/,"").replace(/[^0-9]*$/,"").replace(/^[^0-9]*/,"").split(/[^0-9]+/);let n=parseInt(e[0],10),i=parseInt(e[1],10),o=parseInt(e[2],10);isNaN(n)&&(n=0),isNaN(i)&&(i=0),isNaN(o)&&(o=0),25*3600<n*3600+i*60+o&&(n=24,i=0,o=0);const l=Math.abs(n),a=Math.abs(i),h=Math.abs(o);return{h:l,m:a,s:h}}function Ha({h:r,m:t,s:e}){return`${r<10?"0":""}${r} : ${t<10?"0":""}${t} : ${e<10?"0":""}${e}`}class Dl extends ai{constructor(){super(),this.value={h:0,m:0,s:0}}render(){return Cl`
            <kor-input
                type="text"
                label="Hours : Minutes : Seconds"
                value="${Ha(this.value)}"
                no-clear
                tabindex="0"
                @blur="${this._blurHandler}"
                @keyup="${this._blurHandler}"
            ></kor-input>`}_blurHandler(t){(t.type=="blur"||t.type=="keyup"&&["Enter","NumpadEnter"].includes(t.code))&&(this.value=zm(t.target.value),this.shadowRoot.querySelector("kor-input").value=Ha(this.value))}}kr(Dl,"properties",{value:{type:Object,reflect:!1}});customElements.define("time-input",Dl);export{Aa as $,Zm as A,Fi as B,yl as C,qm as D,$m as E,Ee as F,dr as G,Di as H,Jm as I,lg as J,cg as K,tg as L,te as M,De as N,ye as O,Km as P,bm as Q,Ts as R,Bs as S,Ym as T,bh as U,k as V,jm as W,Vs as X,rg as Y,og as Z,sg as _,Qm as a,ng as a0,ig as a1,Ra as a2,ag as a3,xm as a4,Wm as a5,am as a6,Hs as a7,Gl as a8,Mr as b,Lt as c,xt as d,Ln as e,Be as f,Jt as g,dn as h,Zc as i,hn as j,Gm as k,tn as l,be as m,ue as n,Vm as o,Sl as p,hm as q,Ke as r,Ms as s,Xm as t,ll as u,Se as v,Le as w,sm as x,eg as y,Sm as z};
