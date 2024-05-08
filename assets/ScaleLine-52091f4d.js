var mp=Object.defineProperty;var gp=(i,e,t)=>e in i?mp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var kc=(i,e,t)=>(gp(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="157",Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_p=0,Vc=1,vp=2,gd=1,yp=2,Hn=3,yi=0,Jt=1,Yn=2,gi=0,Sr=1,Hc=2,Wc=3,Xc=4,xp=5,pr=100,Ep=101,Mp=102,Yc=103,qc=104,Sp=200,Tp=201,wp=202,bp=203,_d=204,vd=205,Ap=206,Rp=207,Cp=208,Lp=209,Pp=210,Ip=0,Dp=1,Np=2,gl=3,Op=4,Up=5,Fp=6,zp=7,yd=0,Bp=1,Gp=2,_i=0,kp=1,Vp=2,Hp=3,Wp=4,Xp=5,xd=300,Pr=301,Ir=302,_l=303,vl=304,Xo=306,yl=1e3,xn=1001,xl=1002,Yt=1003,Zc=1004,ya=1005,hn=1006,Yp=1007,as=1008,vi=1009,qp=1010,Zp=1011,Xl=1012,Ed=1013,di=1014,fi=1015,ls=1016,Md=1017,Sd=1018,Oi=1020,jp=1021,En=1023,Kp=1024,$p=1025,Ui=1026,Dr=1027,Jp=1028,Td=1029,Qp=1030,wd=1031,bd=1033,xa=33776,Ea=33777,Ma=33778,Sa=33779,jc=35840,Kc=35841,$c=35842,Jc=35843,em=36196,Qc=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,Ta=36492,mh=36494,gh=36495,tm=36283,_h=36284,vh=36285,yh=36286,Ad=3e3,Fi=3001,nm=3200,im=3201,rm=0,sm=1,dn="",Ot="srgb",$n="srgb-linear",Yl="display-p3",Yo="display-p3-linear",Ro="linear",ht="srgb",Co="rec709",Lo="p3",wa=7680,om=519,am=512,lm=513,cm=514,hm=515,um=516,dm=517,fm=518,pm=519,El=35044,xh="300 es",Ml=1035,Zn=2e3,Po=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const ts=Math.PI/180,cs=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function ql(i,e){return(i%e+e)%e}function mm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function gm(i,e,t){return i!==e?(t-i)/(e-i):0}function ns(i,e,t){return(1-t)*i+t*e}function _m(i,e,t,n){return ns(i,e,1-Math.exp(-t*n))}function vm(i,e=1){return e-Math.abs(ql(i,e*2)-e)}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Em(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mm(i,e){return i+Math.random()*(e-i)}function Sm(i){return i*(.5-Math.random())}function Tm(i){i!==void 0&&(Eh=i);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wm(i){return i*ts}function bm(i){return i*cs}function Sl(i){return(i&i-1)===0&&i!==0}function Am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Io(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rd={DEG2RAD:ts,RAD2DEG:cs,generateUUID:In,clamp:wt,euclideanModulo:ql,mapLinear:mm,inverseLerp:gm,lerp:ns,damp:_m,pingpong:vm,smoothstep:ym,smootherstep:xm,randInt:Em,randFloat:Mm,randFloatSpread:Sm,seededRandom:Tm,degToRad:wm,radToDeg:bm,isPowerOfTwo:Sl,ceilPowerOfTwo:Am,floorPowerOfTwo:Io,setQuaternionFromProperEuler:Rm,normalize:at,denormalize:Rn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],x=r[7],S=r[2],R=r[5],T=r[8];return s[0]=o*_+a*y+l*S,s[3]=o*m+a*v+l*R,s[6]=o*p+a*x+l*T,s[1]=c*_+h*y+u*S,s[4]=c*m+h*v+u*R,s[7]=c*p+h*x+u*T,s[2]=d*_+f*y+g*S,s[5]=d*m+f*v+g*R,s[8]=d*p+f*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new je;function Cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){const i=hs("canvas");return i.style.display="block",i}const Mh={};function is(i){i in Mh||(Mh[i]=!0,console.warn(i))}const Sh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[$n]:{transfer:Ro,primaries:Co,toReference:i=>i,fromReference:i=>i},[Ot]:{transfer:ht,primaries:Co,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yo]:{transfer:Ro,primaries:Lo,toReference:i=>i.applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Sh)},[Yl]:{transfer:ht,primaries:Lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Sh).convertLinearToSRGB()}},Lm=new Set([$n,Yo]),lt={enabled:!0,_workingColorSpace:$n,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Os[e].toReference,r=Os[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Os[i].primaries},getTransfer:function(i){return i===dn?Ro:Os[i].transfer}};function Tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class Ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=hs("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pm=0,Pd=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=In(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ra(r[o].image)):s.push(Ra(r[o]))}else s=Ra(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class Zt extends Vi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=xn,r=xn,s=hn,o=as,a=En,l=vi,c=Zt.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=In(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?Ot:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yl:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yl:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Fi:Ad}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?Ot:dn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=xd;Zt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,S=(p+1)/2,R=(h+d)/4,T=(u+_)/4,P=(g+m)/4;return v>x&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=T/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=P/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=T/s,r=P/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?Ot:dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Id extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nm extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),R=Math.atan2(S,p*y);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,h=l*n+a*t-s*r,u=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new D,wh=new Gi;class Mi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox),Zi.applyMatrix4(e.matrixWorld),this.union(Zi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else r.boundingBox===null&&r.computeBoundingBox(),Zi.copy(r.boundingBox),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Us.subVectors(this.max,Vr),ji.subVectors(e.a,Vr),Ki.subVectors(e.b,Vr),$i.subVectors(e.c,Vr),ti.subVectors(Ki,ji),ni.subVectors($i,Ki),bi.subVectors(ji,$i);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!La(t,ji,Ki,$i,Us)||(t=[1,0,0,0,1,0,0,0,1],!La(t,ji,Ki,$i,Us))?!1:(Fs.crossVectors(ti,ni),t=[Fs.x,Fs.y,Fs.z],La(t,ji,Ki,$i,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,Zi=new Mi,ji=new D,Ki=new D,$i=new D,ti=new D,ni=new D,bi=new D,Vr=new D,Us=new D,Fs=new D,Ai=new D;function La(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ai.fromArray(i,s);const a=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Om=new Mi,Hr=new D,Pa=new D;class Ur{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Om.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Pa)),this.expandByPoint(Hr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Ia=new D,zs=new D,ii=new D,Da=new D,Bs=new D,Na=new D;class Zl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=ii.dot(this.direction),l=-ii.dot(zs),c=ii.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ia).addScaledVector(zs,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){Da.subVectors(t,e),Bs.subVectors(n,e),Na.crossVectors(Da,Bs);let o=this.direction.dot(Na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Bs.crossVectors(ii,Bs));if(l<0)return null;const c=a*this.direction.dot(Da.cross(ii));if(c<0||l+c>o)return null;const h=-a*ii.dot(Na);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Fm)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ri.crossVectors(n,tn),ri.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ri.crossVectors(n,tn)),ri.normalize(),Gs.crossVectors(tn,ri),r[0]=ri.x,r[4]=Gs.x,r[8]=tn.x,r[1]=ri.y,r[5]=Gs.y,r[9]=tn.y,r[2]=ri.z,r[6]=Gs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],S=n[15],R=r[0],T=r[4],P=r[8],E=r[12],b=r[1],U=r[5],Z=r[9],K=r[13],N=r[2],B=r[6],Y=r[10],k=r[14],ee=r[3],H=r[7],$=r[11],O=r[15];return s[0]=o*R+a*b+l*N+c*ee,s[4]=o*T+a*U+l*B+c*H,s[8]=o*P+a*Z+l*Y+c*$,s[12]=o*E+a*K+l*k+c*O,s[1]=h*R+u*b+d*N+f*ee,s[5]=h*T+u*U+d*B+f*H,s[9]=h*P+u*Z+d*Y+f*$,s[13]=h*E+u*K+d*k+f*O,s[2]=g*R+_*b+m*N+p*ee,s[6]=g*T+_*U+m*B+p*H,s[10]=g*P+_*Z+m*Y+p*$,s[14]=g*E+_*K+m*k+p*O,s[3]=y*R+v*b+x*N+S*ee,s[7]=y*T+v*U+x*B+S*H,s[11]=y*P+v*Z+x*Y+S*$,s[15]=y*E+v*K+x*k+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,S=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,R=t*y+n*v+r*x+s*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(_*d*s-u*m*s-_*r*f+n*m*f+u*r*p-n*d*p)*T,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*T,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*f-n*l*f)*T,e[4]=v*T,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=S*T,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,y=l*c,v=l*h,x=l*u,S=n.x,R=n.y,T=n.z;return r[0]=(1-(_+p))*S,r[1]=(f+x)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+v)*T,r[9]=(m-y)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(a===Zn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Po)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,f=(n+r)*h;let g,_;if(a===Zn)g=(o+s)*u,_=-2*u;else if(a===Po)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new D,mn=new Tt,Um=new D(0,0,0),Fm=new D(1,1,1),ri=new D,Gs=new D,tn=new D,bh=new Tt,Ah=new Gi;class qo{constructor(e=0,t=0,n=0,r=qo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qo.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zm=0;const Rh=new D,Qi=new Gi,Bn=new Tt,ks=new D,Wr=new D,Bm=new D,Gm=new Gi,Ch=new D(1,0,0),Lh=new D(0,1,0),Ph=new D(0,0,1),km={type:"added"},Vm={type:"removed"};class jt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new D,t=new qo,n=new Gi,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Wr,ks,this.up):Bn.lookAt(ks,Wr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(km)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new D(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,Gn=new D,Oa=new D,kn=new D,er=new D,tr=new D,Ih=new D,Ua=new D,Fa=new D,za=new D;let Vs=!1;class vn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),Gn.subVectors(n,t),Oa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Gn),l=gn.dot(Oa),c=Gn.dot(Gn),h=Gn.dot(Oa),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,r,s,o,a,l){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,kn),l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),Gn.subVectors(e,t),gn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,n),tr.subVectors(s,n),Ua.subVectors(e,n);const l=er.dot(Ua),c=tr.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Fa.subVectors(e,r);const h=er.dot(Fa),u=tr.dot(Fa);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(er,o);za.subVectors(e,s);const f=er.dot(za),g=tr.dot(za);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(tr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ih.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Ih,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hm=0;class Ss extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Sr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=ql(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ba(o,s,e+1/3),this.g=Ba(o,s,e),this.b=Ba(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return lt.fromWorkingColorSpace(zt.copy(this),e),Math.round(wt(zt.r*255,0,255))*65536+Math.round(wt(zt.g*255,0,255))*256+Math.round(wt(zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ot){lt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Hs);const n=ns(si.h,Hs.h,t),r=ns(si.s,Hs.s,t),s=ns(si.l,Hs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=Nd;class Od extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new D,Ws=new _e;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRange={offset:0,count:-1},this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ud extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fd extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wm=0;const an=new Tt,Ga=new jt,nr=new D,nn=new Mi,Xr=new Mi,Rt=new D;class Qt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Fd:Ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(nn.min,Xr.min),nn.expandByPoint(Rt),Rt.addVectors(nn.max,Xr.max),nn.expandByPoint(Rt)):(nn.expandByPoint(Xr.min),nn.expandByPoint(Xr.max))}nn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Rt.add(nr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new D,h[b]=new D;const u=new D,d=new D,f=new D,g=new _e,_=new _e,m=new _e,p=new D,y=new D;function v(b,U,Z){u.fromArray(r,b*3),d.fromArray(r,U*3),f.fromArray(r,Z*3),g.fromArray(o,b*2),_.fromArray(o,U*2),m.fromArray(o,Z*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(K),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(K),c[b].add(p),c[U].add(p),c[Z].add(p),h[b].add(y),h[U].add(y),h[Z].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,U=x.length;b<U;++b){const Z=x[b],K=Z.start,N=Z.count;for(let B=K,Y=K+N;B<Y;B+=3)v(n[B+0],n[B+1],n[B+2])}const S=new D,R=new D,T=new D,P=new D;function E(b){T.fromArray(s,b*3),P.copy(T);const U=c[b];S.copy(U),S.sub(T.multiplyScalar(T.dot(U))).normalize(),R.crossVectors(P,U);const K=R.dot(h[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=K}for(let b=0,U=x.length;b<U;++b){const Z=x[b],K=Z.start,N=Z.count;for(let B=K,Y=K+N;B<Y;B+=3)E(n[B+0]),E(n[B+1]),E(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new Tt,Ri=new Zl,Xs=new Ur,Nh=new D,ir=new D,rr=new D,sr=new D,ka=new D,Ys=new D,qs=new _e,Zs=new _e,js=new _e,Oh=new D,Uh=new D,Fh=new D,Ks=new D,$s=new D;class jn extends jt{constructor(e=new Qt,t=new Od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ka.fromBufferAttribute(u,e),o?Ys.addScaledVector(ka,h):Ys.addScaledVector(ka.sub(t),h))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Xs,Nh)===null||Ri.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,S=v;x<S;x+=3){const R=a.getX(x),T=a.getX(x+1),P=a.getX(x+2);r=Js(this,p,e,n,c,h,u,R,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=Js(this,o,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,S=v;x<S;x+=3){const R=x,T=x+1,P=x+2;r=Js(this,p,e,n,c,h,u,R,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;r=Js(this,o,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xm(i,e,t,n,r,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:i}}function Js(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,rr),i.getVertexPosition(c,sr);const h=Xm(i,e,t,n,ir,rr,sr,Ks);if(h){r&&(qs.fromBufferAttribute(r,a),Zs.fromBufferAttribute(r,l),js.fromBufferAttribute(r,c),h.uv=vn.getInterpolation(Ks,ir,rr,sr,qs,Zs,js,new _e)),s&&(qs.fromBufferAttribute(s,a),Zs.fromBufferAttribute(s,l),js.fromBufferAttribute(s,c),h.uv1=vn.getInterpolation(Ks,ir,rr,sr,qs,Zs,js,new _e),h.uv2=h.uv1),o&&(Oh.fromBufferAttribute(o,a),Uh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,c),h.normal=vn.getInterpolation(Ks,ir,rr,sr,Oh,Uh,Fh,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};vn.getNormal(ir,rr,sr,u.normal),h.face=u}return h}class Ts extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,m,p,y,v,x,S,R,T,P,E){const b=x/T,U=S/P,Z=x/2,K=S/2,N=R/2,B=T+1,Y=P+1;let k=0,ee=0;const H=new D;for(let $=0;$<Y;$++){const O=$*U-K;for(let V=0;V<B;V++){const oe=V*b-Z;H[_]=oe*y,H[m]=O*v,H[p]=N,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=R>0?1:-1,h.push(H.x,H.y,H.z),u.push(V/T),u.push(1-$/P),k+=1}}for(let $=0;$<P;$++)for(let O=0;O<T;O++){const V=d+O+B*$,oe=d+O+B*($+1),ae=d+(O+1)+B*($+1),he=d+(O+1)+B*$;l.push(V,oe,he),l.push(oe,ae,he),ee+=6}a.addGroup(f,ee,E),f+=ee,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Nr(i[t]);for(const r in n)e[r]=n[r]}return e}function Ym(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zd(i){return i.getRenderTarget()===null?i.outputColorSpace:lt.workingColorSpace}const jl={clone:Nr,merge:Xt};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends Bd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,ar=1;class jm extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(or,ar,e,t);r.layers=this.layers,this.add(r);const s=new yn(or,ar,e,t);s.layers=this.layers,this.add(s);const o=new yn(or,ar,e,t);o.layers=this.layers,this.add(o);const a=new yn(or,ar,e,t);a.layers=this.layers,this.add(a);const l=new yn(or,ar,e,t);l.layers=this.layers,this.add(l);const c=new yn(or,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gd extends Zt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Km extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?Ot:dn),this.texture=new Gd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ts(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:gi});s.uniforms.tEquirect.value=t;const o=new jn(r,s),a=t.minFilter;return t.minFilter===as&&(t.minFilter=hn),new jm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Va=new D,$m=new D,Jm=new je;class hi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Va.subVectors(n,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jm.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ur,Qs=new D;class kd{constructor(e=new hi,t=new hi,n=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+y).normalize(),n[3].setComponents(l-o,d-h,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),t===Zn)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(t===Po)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;i.bindBuffer(u,c),f.count===-1?i.bufferSubData(u,0,d):(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Kl extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),S=y+1+c*(p+1),R=y+1+c*p;f.push(v,x,R),f.push(x,S,R)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`
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
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,$g=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l_=`#if defined( USE_POINTS_UV )
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
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`#ifdef USE_MORPHTARGETS
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
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
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
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,F_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,T0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:rg,alphatest_pars_fragment:sg,aomap_fragment:og,aomap_pars_fragment:ag,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:dg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:_g,color_pars_fragment:vg,color_pars_vertex:yg,color_vertex:xg,common:Eg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:Tg,displacementmap_vertex:wg,emissivemap_fragment:bg,emissivemap_pars_fragment:Ag,colorspace_fragment:Rg,colorspace_pars_fragment:Cg,envmap_fragment:Lg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Xg,envmap_vertex:Ng,fog_vertex:Og,fog_pars_vertex:Ug,fog_fragment:Fg,fog_pars_fragment:zg,gradientmap_pars_fragment:Bg,lightmap_fragment:Gg,lightmap_pars_fragment:kg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Wg,lights_toon_fragment:Yg,lights_toon_pars_fragment:qg,lights_phong_fragment:Zg,lights_phong_pars_fragment:jg,lights_physical_fragment:Kg,lights_physical_pars_fragment:$g,lights_fragment_begin:Jg,lights_fragment_maps:Qg,lights_fragment_end:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:r_,map_fragment:s_,map_pars_fragment:o_,map_particle_fragment:a_,map_particle_pars_fragment:l_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:h_,morphcolor_vertex:u_,morphnormal_vertex:d_,morphtarget_pars_vertex:f_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:g_,normal_pars_fragment:__,normal_pars_vertex:v_,normal_vertex:y_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:T_,opaque_fragment:w_,packing:b_,premultiplied_alpha_fragment:A_,project_vertex:R_,dithering_fragment:C_,dithering_pars_fragment:L_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:N_,shadowmap_vertex:O_,shadowmask_pars_fragment:U_,skinbase_vertex:F_,skinning_pars_vertex:z_,skinning_vertex:B_,skinnormal_vertex:G_,specularmap_fragment:k_,specularmap_pars_fragment:V_,tonemapping_fragment:H_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:Y_,uv_pars_fragment:q_,uv_pars_vertex:Z_,uv_vertex:j_,worldpos_vertex:K_,background_vert:$_,background_frag:J_,backgroundCube_vert:Q_,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:r0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:y0,meshphong_frag:x0,meshphysical_vert:E0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:T0,points_vert:w0,points_frag:b0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:L0},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Kt={basic:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Xt([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Xt([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Xt([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Xt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Xt([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Kt.physical={uniforms:Xt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const eo={r:0,b:0,g:0};function P0(i,e,t,n,r,s,o){const a=new it(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xo)?(h===void 0&&(h=new jn(new Ts(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Nr(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=lt.getTransfer(v.colorSpace)!==ht,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new jn(new Kl(2,2),new xi({name:"BackgroundMaterial",uniforms:Nr(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(eo,zd(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function I0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(N,B,Y,k,ee){let H=!1;if(o){const $=_(k,Y,B);c!==$&&(c=$,f(c.object)),H=p(N,k,Y,ee),H&&y(N,k,Y,ee)}else{const $=B.wireframe===!0;(c.geometry!==k.id||c.program!==Y.id||c.wireframe!==$)&&(c.geometry=k.id,c.program=Y.id,c.wireframe=$,H=!0)}ee!==null&&t.update(ee,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,P(N,B,Y,k),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,B,Y){const k=Y.wireframe===!0;let ee=a[N.id];ee===void 0&&(ee={},a[N.id]=ee);let H=ee[B.id];H===void 0&&(H={},ee[B.id]=H);let $=H[k];return $===void 0&&($=m(d()),H[k]=$),$}function m(N){const B=[],Y=[],k=[];for(let ee=0;ee<r;ee++)B[ee]=0,Y[ee]=0,k[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:k,object:N,attributes:{},index:null}}function p(N,B,Y,k){const ee=c.attributes,H=B.attributes;let $=0;const O=Y.getAttributes();for(const V in O)if(O[V].location>=0){const ae=ee[V];let he=H[V];if(he===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;$++}return c.attributesNum!==$||c.index!==k}function y(N,B,Y,k){const ee={},H=B.attributes;let $=0;const O=Y.getAttributes();for(const V in O)if(O[V].location>=0){let ae=H[V];ae===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),ee[V]=he,$++}c.attributes=ee,c.attributesNum=$,c.index=k}function v(){const N=c.newAttributes;for(let B=0,Y=N.length;B<Y;B++)N[B]=0}function x(N){S(N,0)}function S(N,B){const Y=c.newAttributes,k=c.enabledAttributes,ee=c.attributeDivisors;Y[N]=1,k[N]===0&&(i.enableVertexAttribArray(N),k[N]=1),ee[N]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),ee[N]=B)}function R(){const N=c.newAttributes,B=c.enabledAttributes;for(let Y=0,k=B.length;Y<k;Y++)B[Y]!==N[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function T(N,B,Y,k,ee,H,$){$===!0?i.vertexAttribIPointer(N,B,Y,ee,H):i.vertexAttribPointer(N,B,Y,k,ee,H)}function P(N,B,Y,k){if(n.isWebGL2===!1&&(N.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ee=k.attributes,H=Y.getAttributes(),$=B.defaultAttributeValues;for(const O in H){const V=H[O];if(V.location>=0){let oe=ee[O];if(oe===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const ae=oe.normalized,he=oe.itemSize,we=t.get(oe);if(we===void 0)continue;const xe=we.buffer,Ee=we.type,Be=we.bytesPerElement,qe=n.isWebGL2===!0&&(Ee===i.INT||Ee===i.UNSIGNED_INT||oe.gpuType===Ed);if(oe.isInterleavedBufferAttribute){const Pe=oe.data,C=Pe.stride,ue=oe.offset;if(Pe.isInstancedInterleavedBuffer){for(let q=0;q<V.locationSize;q++)S(V.location+q,Pe.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let q=0;q<V.locationSize;q++)x(V.location+q);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let q=0;q<V.locationSize;q++)T(V.location+q,he/V.locationSize,Ee,ae,C*Be,(ue+he/V.locationSize*q)*Be,qe)}else{if(oe.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)S(V.location+Pe,oe.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)x(V.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Pe=0;Pe<V.locationSize;Pe++)T(V.location+Pe,he/V.locationSize,Ee,ae,he*Be,he/V.locationSize*Pe*Be,qe)}}else if($!==void 0){const ae=$[O];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}R()}function E(){Z();for(const N in a){const B=a[N];for(const Y in B){const k=B[Y];for(const ee in k)g(k[ee].object),delete k[ee];delete B[Y]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const B=a[N.id];for(const Y in B){const k=B[Y];for(const ee in k)g(k[ee].object),delete k[ee];delete B[Y]}delete a[N.id]}function U(N){for(const B in a){const Y=a[B];if(Y[N.id]===void 0)continue;const k=Y[N.id];for(const ee in k)g(k[ee].object),delete k[ee];delete Y[N.id]}}function Z(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:x,disableUnusedAttributes:R}}function D0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function N0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||e.has("OES_texture_float"),S=v&&x,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:R}}function O0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new hi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,v=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let S=0;S!==v;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function U0(i){let e=new WeakMap;function t(o,a){return a===_l?o.mapping=Pr:a===vl&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===_l||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Km(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class F0 extends Bd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,zh=[.125,.215,.35,.446,.526,.582],Di=20,Ha=new F0,Bh=new it;let Wa=null;const Ii=(1+Math.sqrt(5))/2,lr=1/Ii,Gh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ii,lr),new D(0,Ii,-lr),new D(lr,0,Ii),new D(-lr,0,Ii),new D(Ii,lr,0),new D(-Ii,lr,0)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ls,format:En,colorSpace:$n,depthBuffer:!1},r=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z0(s)),this._blurMaterial=B0(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,r){const a=new yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=_i,h.autoClear=!1;const f=new Od({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new jn(new Ts,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Bh),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;to(r,y*v,p>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gh[(r-1)%Gh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new jn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let y=0;for(let T=0;T<Di;++T){const P=T/_,E=Math.exp(-P*P/2);p.push(E),T===0?y+=E:T<m&&(y+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[r],S=3*x*(r>v-yr?r-v+yr:0),R=4*(this._cubeSize-x);to(t,S,R,3*x,2*x),l.setRenderTarget(t),l.render(u,Ha)}}function z0(i){const e=[],t=[],n=[];let r=i;const s=i-yr+1+zh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-yr?l=zh[o-i+yr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,P=R>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(E,_*g*R),v.set(d,m*g*R);const b=[R,R,R,R,R,R];x.set(b,p*g*R)}const S=new Qt;S.setAttribute("position",new Mn(y,_)),S.setAttribute("uv",new Mn(v,m)),S.setAttribute("faceIndex",new Mn(x,p)),e.push(S),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function B0(i,e,t){const n=new Float32Array(Di),r=new D(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$l(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Wh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function G0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_l||l===vl,h=l===Pr||l===Ir;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new kh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new kh(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function k0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function V0(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const S=y[v+0],R=y[v+1],T=y[v+2];d.push(S,R,R,T,T,S)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const S=v+0,R=v+1,T=v+2;d.push(S,R,R,T,T,S)}}else return;const m=new(Cd(d)?Fd:Ud)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function H0(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){i.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function W0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function X0(i,e){return i[0]-e[0]}function Y0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let N=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",N)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let P=0;y===!0&&(P=1),v===!0&&(P=2),x===!0&&(P=3);let E=h.attributes.position.count*P,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*b*4*g),Z=new Id(U,E,b,g);Z.type=fi,Z.needsUpdate=!0;const K=P*4;for(let B=0;B<g;B++){const Y=S[B],k=R[B],ee=T[B],H=E*b*4*B;for(let $=0;$<Y.count;$++){const O=$*K;y===!0&&(o.fromBufferAttribute(Y,$),U[H+O+0]=o.x,U[H+O+1]=o.y,U[H+O+2]=o.z,U[H+O+3]=0),v===!0&&(o.fromBufferAttribute(k,$),U[H+O+4]=o.x,U[H+O+5]=o.y,U[H+O+6]=o.z,U[H+O+7]=0),x===!0&&(o.fromBufferAttribute(ee,$),U[H+O+8]=o.x,U[H+O+9]=o.y,U[H+O+10]=o.z,U[H+O+11]=ee.itemSize===4?o.w:1)}}_={count:g,texture:Z,size:new _e(E,b)},s.set(h,_),h.addEventListener("dispose",N)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){const x=g[v];x[0]=v,x[1]=d[v]}g.sort(Y0);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(X0);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const x=a[v],S=x[0],R=x[1];S!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+v)!==_[S]&&h.setAttribute("morphTarget"+v,_[S]),m&&h.getAttribute("morphNormal"+v)!==m[S]&&h.setAttribute("morphNormal"+v,m[S]),r[v]=R,p+=R):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Z0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Hd=new Zt,Wd=new Id,Xd=new Nm,Yd=new Gd,Xh=[],Yh=[],qh=new Float32Array(16),Zh=new Float32Array(9),jh=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xh[r];if(s===void 0&&(s=new Float32Array(r),Xh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),At(t,n)}}function ev(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),At(t,n)}}function tv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),At(t,n)}}function nv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function hv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Hd,r)}function uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xd,r)}function dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yd,r)}function fv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wd,r)}function pv(i){switch(i){case 5126:return j0;case 35664:return K0;case 35665:return $0;case 35666:return J0;case 35674:return Q0;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(i,e){i.uniform1fv(this.addr,e)}function gv(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function _v(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function vv(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xv(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ev(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mv(i,e){i.uniform1iv(this.addr,e)}function Sv(i,e){i.uniform2iv(this.addr,e)}function Tv(i,e){i.uniform3iv(this.addr,e)}function wv(i,e){i.uniform4iv(this.addr,e)}function bv(i,e){i.uniform1uiv(this.addr,e)}function Av(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Cv(i,e){i.uniform4uiv(this.addr,e)}function Lv(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hd,s[o])}function Pv(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xd,s[o])}function Iv(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yd,s[o])}function Dv(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wd,s[o])}function Nv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return vv;case 35674:return yv;case 35675:return xv;case 35676:return Ev;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return Tv;case 35669:case 35673:return wv;case 5125:return bv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pv(t.type)}}class Uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nv(t.type)}}class Fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Kh(i,e){i.seq.push(e),i.map[e.id]=e}function zv(i,e,t){const n=i.name,r=n.length;for(Xa.lastIndex=0;;){const s=Xa.exec(n),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kh(t,c===void 0?new Ov(a,i,e):new Uv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Fv(a),Kh(t,u)),t=u}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zv(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function $h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Bv=0;function Gv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kv(i){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(i);let n;switch(e===t?n="":e===Lo&&t===Co?n="LinearDisplayP3ToLinearSRGB":e===Co&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),i){case $n:case Yo:return[n,"LinearTransferOETF"];case Ot:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Jh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gv(i.getShaderSource(e),o)}else return r}function Vv(i,e){const t=kv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hv(i,e){let t;switch(e){case kp:t="Linear";break;case Vp:t="Reinhard";break;case Hp:t="OptimizedCineon";break;case Wp:t="ACESFilmic";break;case Xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Xv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function Qh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(qv,jv)}const Zv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jv(i,e){let t=Xe[e];if(t===void 0){const n=Zv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Kv,$v)}function $v(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Bp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function ny(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jv(t),c=Qv(t),h=ey(t),u=ty(t),d=ny(t),f=t.isWebGL2?"":Wv(t),g=Xv(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`)):(m=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[f,nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_i?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Vv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Tl(o),o=Qh(o,t),o=eu(o,t),a=Tl(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,S=$h(r,r.VERTEX_SHADER,v),R=$h(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,S),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),b=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(R).trim();let Z=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,R);else{const N=Jh(r,S,"vertex"),B=Jh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+N+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||U==="")&&(K=!1);K&&(this.diagnostics={runnable:Z,programLog:E,vertexShader:{log:b,prefix:m},fragmentShader:{log:U,prefix:p}})}r.deleteShader(S),r.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new So(r,_)),T};let P;return this.getAttributes=function(){return P===void 0&&(P=Yv(r,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oy(e),t.set(e,n)),n}}class oy{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function ay(i,e,t,n,r,s,o){const a=new Dd,l=new sy,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,b,U,Z,K){const N=Z.fog,B=K.geometry,Y=E.isMeshStandardMaterial?Z.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),ee=k&&k.mapping===Xo?k.image.height:null,H=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,O=$!==void 0?$.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let oe,ae,he,we;if(H){const ct=Kt[H];oe=ct.vertexShader,ae=ct.fragmentShader}else oe=E.vertexShader,ae=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),we=l.getFragmentShaderID(E);const xe=i.getRenderTarget(),Ee=K.isInstancedMesh===!0,Be=!!E.map,qe=!!E.matcap,Pe=!!k,C=!!E.aoMap,ue=!!E.lightMap,q=!!E.bumpMap,se=!!E.normalMap,J=!!E.displacementMap,Ae=!!E.emissiveMap,ye=!!E.metalnessMap,Me=!!E.roughnessMap,Ie=E.anisotropy>0,Ze=E.clearcoat>0,Je=E.iridescence>0,A=E.sheen>0,M=E.transmission>0,z=Ie&&!!E.anisotropyMap,ie=Ze&&!!E.clearcoatMap,ne=Ze&&!!E.clearcoatNormalMap,re=Ze&&!!E.clearcoatRoughnessMap,Se=Je&&!!E.iridescenceMap,le=Je&&!!E.iridescenceThicknessMap,ce=A&&!!E.sheenColorMap,I=A&&!!E.sheenRoughnessMap,de=!!E.specularMap,Q=!!E.specularColorMap,Ue=!!E.specularIntensityMap,Le=M&&!!E.transmissionMap,De=M&&!!E.thicknessMap,Re=!!E.gradientMap,L=!!E.alphaMap,pe=E.alphaTest>0,fe=!!E.alphaHash,ve=!!E.extensions,me=!!B.attributes.uv1,te=!!B.attributes.uv2,be=!!B.attributes.uv3;let Fe=_i;return E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Fe=i.toneMapping),{isWebGL2:h,shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ae,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,instancing:Ee,instancingColor:Ee&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:$n,map:Be,matcap:qe,envMap:Pe,envMapMode:Pe&&k.mapping,envMapCubeUVHeight:ee,aoMap:C,lightMap:ue,bumpMap:q,normalMap:se,displacementMap:d&&J,emissiveMap:Ae,normalMapObjectSpace:se&&E.normalMapType===sm,normalMapTangentSpace:se&&E.normalMapType===rm,metalnessMap:ye,roughnessMap:Me,anisotropy:Ie,anisotropyMap:z,clearcoat:Ze,clearcoatMap:ie,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:Je,iridescenceMap:Se,iridescenceThicknessMap:le,sheen:A,sheenColorMap:ce,sheenRoughnessMap:I,specularMap:de,specularColorMap:Q,specularIntensityMap:Ue,transmission:M,transmissionMap:Le,thicknessMap:De,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Sr,alphaMap:L,alphaTest:pe,alphaHash:fe,combine:E.combine,mapUv:Be&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:ue&&_(E.lightMap.channel),bumpMapUv:q&&_(E.bumpMap.channel),normalMapUv:se&&_(E.normalMap.channel),displacementMapUv:J&&_(E.displacementMap.channel),emissiveMapUv:Ae&&_(E.emissiveMap.channel),metalnessMapUv:ye&&_(E.metalnessMap.channel),roughnessMapUv:Me&&_(E.roughnessMap.channel),anisotropyMapUv:z&&_(E.anisotropyMap.channel),clearcoatMapUv:ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:I&&_(E.sheenRoughnessMap.channel),specularMapUv:de&&_(E.specularMap.channel),specularColorMapUv:Q&&_(E.specularColorMap.channel),specularIntensityMapUv:Ue&&_(E.specularIntensityMap.channel),transmissionMapUv:Le&&_(E.transmissionMap.channel),thicknessMapUv:De&&_(E.thicknessMap.channel),alphaMapUv:L&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(se||Ie),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:te,vertexUv3s:be,pointsUvs:K.isPoints===!0&&!!B.attributes.uv&&(Be||L),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===Jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ve&&E.extensions.derivatives===!0,extensionFragDepth:ve&&E.extensions.fragDepth===!0,extensionDrawBuffers:ve&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(y(b,E),v(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const b=g[E.type];let U;if(b){const Z=Kt[b];U=jl.clone(Z.uniforms)}else U=E.uniforms;return U}function S(E,b){let U;for(let Z=0,K=c.length;Z<K;Z++){const N=c[Z];if(N.cacheKey===b){U=N,++U.usedTimes;break}}return U===void 0&&(U=new iy(i,b,E,s),c.push(U)),U}function R(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:P}}function ly(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ru(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||cy),n.length>1&&n.sort(d||iu),r.length>1&&r.sort(d||iu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function hy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ru,i.set(n,[o])):r>=s.length?(o=new ru,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new it};break;case"SpotLight":t={position:new D,direction:new D,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fy=0;function py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function my(i,e){const t=new uy,n=dy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,o=new Tt,a=new Tt;function l(h,u){let d=0,f=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,x=0,S=0,R=0,T=0,P=0,E=0;h.sort(py);const b=u===!0?Math.PI:1;for(let Z=0,K=h.length;Z<K;Z++){const N=h[Z],B=N.color,Y=N.intensity,k=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=B.r*Y*b,f+=B.g*Y*b,g+=B.b*Y*b;else if(N.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(N.sh.coefficients[H],Y);E++}else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const $=N.shadow,O=n.get(N);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.directionalShadow[_]=O,r.directionalShadowMap[_]=ee,r.directionalShadowMatrix[_]=N.shadow.matrix,x++}r.directional[_]=H,_++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(B).multiplyScalar(Y*b),H.distance=k,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,r.spot[p]=H;const $=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,$.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[p]=$.matrix,N.castShadow){const O=n.get(N);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.spotShadow[p]=O,r.spotShadowMap[p]=ee,R++}p++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(B).multiplyScalar(Y),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),r.rectArea[y]=H,y++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*b),H.distance=N.distance,H.decay=N.decay,N.castShadow){const $=N.shadow,O=n.get(N);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=ee,r.pointShadowMatrix[m]=N.shadow.matrix,S++}r.point[m]=H,m++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(Y*b),H.groundColor.copy(N.groundColor).multiplyScalar(Y*b),r.hemi[v]=H,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==x||U.numPointShadows!==S||U.numSpotShadows!==R||U.numSpotMaps!==T||U.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=x,U.numPointShadows=S,U.numSpotShadows=R,U.numSpotMaps=T,U.numLightProbes=E,r.version=fy++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(x.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function su(i,e){const t=new my(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gy(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new su(i,e),t.set(s,[l])):o>=a.length?(l=new su(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class _y extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;function Ey(i,e,t){let n=new kd;const r=new _e,s=new _e,o=new _t,a=new _y({depthPacking:im}),l=new vy,c={},h=t.maxTextureSize,u={[yi]:Jt,[Jt]:yi,[Yn]:Yn},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:yy,fragmentShader:xy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(S,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const P=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),U=i.state;U.setBlending(gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=p!==Hn&&this.type===Hn,K=p===Hn&&this.type!==Hn;for(let N=0,B=S.length;N<B;N++){const Y=S[N],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ee=k.getFrameExtents();if(r.multiply(ee),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,k.mapSize.y=s.y)),k.map===null||Z===!0||K===!0){const $=this.type!==Hn?{minFilter:Yt,magFilter:Yt}:{};k.map!==null&&k.map.dispose(),k.map=new Bi(r.x,r.y,$),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const H=k.getViewportCount();for(let $=0;$<H;$++){const O=k.getViewport($);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),U.viewport(o),k.updateMatrices(Y,$),n=k.getFrustum(),x(R,T,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Hn&&y(k,T),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,E,b)};function y(S,R){const T=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Bi(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,T,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,T,f,_,null)}function v(S,R,T,P){let E=null;const b=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)E=b;else if(E=T.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=E.uuid,Z=R.uuid;let K=c[U];K===void 0&&(K={},c[U]=K);let N=K[Z];N===void 0&&(N=E.clone(),K[Z]=N),E=N}if(E.visible=R.visible,E.wireframe=R.wireframe,P===Hn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=i.properties.get(E);U.light=T}return E}function x(S,R,T,P,E){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Hn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const Z=e.update(S),K=S.material;if(Array.isArray(K)){const N=Z.groups;for(let B=0,Y=N.length;B<Y;B++){const k=N[B],ee=K[k.materialIndex];if(ee&&ee.visible){const H=v(S,ee,P,E);i.renderBufferDirect(T,null,Z,H,S,k)}}}else if(K.visible){const N=v(S,K,P,E);i.renderBufferDirect(T,null,Z,N,S,null)}}const U=S.children;for(let Z=0,K=U.length;Z<K;Z++)x(U[Z],R,T,P,E)}}function My(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const pe=new _t;let fe=null;const ve=new _t(0,0,0,0);return{setMask:function(me){fe!==me&&!L&&(i.colorMask(me,me,me,me),fe=me)},setLocked:function(me){L=me},setClear:function(me,te,be,Fe,yt){yt===!0&&(me*=Fe,te*=Fe,be*=Fe),pe.set(me,te,be,Fe),ve.equals(pe)===!1&&(i.clearColor(me,te,be,Fe),ve.copy(pe))},reset:function(){L=!1,fe=null,ve.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,fe=null,ve=null;return{setTest:function(me){me?xe(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(me){pe!==me&&!L&&(i.depthMask(me),pe=me)},setFunc:function(me){if(fe!==me){switch(me){case Ip:i.depthFunc(i.NEVER);break;case Dp:i.depthFunc(i.ALWAYS);break;case Np:i.depthFunc(i.LESS);break;case gl:i.depthFunc(i.LEQUAL);break;case Op:i.depthFunc(i.EQUAL);break;case Up:i.depthFunc(i.GEQUAL);break;case Fp:i.depthFunc(i.GREATER);break;case zp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=me}},setLocked:function(me){L=me},setClear:function(me){ve!==me&&(i.clearDepth(me),ve=me)},reset:function(){L=!1,pe=null,fe=null,ve=null}}}function o(){let L=!1,pe=null,fe=null,ve=null,me=null,te=null,be=null,Fe=null,yt=null;return{setTest:function(ct){L||(ct?xe(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!L&&(i.stencilMask(ct),pe=ct)},setFunc:function(ct,wn,Vt){(fe!==ct||ve!==wn||me!==Vt)&&(i.stencilFunc(ct,wn,Vt),fe=ct,ve=wn,me=Vt)},setOp:function(ct,wn,Vt){(te!==ct||be!==wn||Fe!==Vt)&&(i.stencilOp(ct,wn,Vt),te=ct,be=wn,Fe=Vt)},setLocked:function(ct){L=ct},setClear:function(ct){yt!==ct&&(i.clearStencil(ct),yt=ct)},reset:function(){L=!1,pe=null,fe=null,ve=null,me=null,te=null,be=null,Fe=null,yt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,x=null,S=null,R=null,T=null,P=null,E=!1,b=null,U=null,Z=null,K=null,N=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,k=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=k>=2);let H=null,$={};const O=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),oe=new _t().fromArray(O),ae=new _t().fromArray(V);function he(L,pe,fe,ve){const me=new Uint8Array(4),te=i.createTexture();i.bindTexture(L,te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<fe;be++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(pe+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return te}const we={};we[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(gl),J(!1),Ae(Vc),xe(i.CULL_FACE),q(gi);function xe(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ee(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Be(L,pe){return f[L]!==pe?(i.bindFramebuffer(L,pe),f[L]=pe,n&&(L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function qe(L,pe){let fe=_,ve=!1;if(L)if(fe=g.get(pe),fe===void 0&&(fe=[],g.set(pe,fe)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(fe.length!==me.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let te=0,be=me.length;te<be;te++)fe[te]=i.COLOR_ATTACHMENT0+te;fe.length=me.length,ve=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,ve=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Pe(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const C={[pr]:i.FUNC_ADD,[Ep]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};if(n)C[Yc]=i.MIN,C[qc]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(C[Yc]=L.MIN_EXT,C[qc]=L.MAX_EXT)}const ue={[Sp]:i.ZERO,[Tp]:i.ONE,[wp]:i.SRC_COLOR,[_d]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[Cp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[bp]:i.ONE_MINUS_SRC_COLOR,[vd]:i.ONE_MINUS_SRC_ALPHA,[Lp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA};function q(L,pe,fe,ve,me,te,be,Fe){if(L===gi){p===!0&&(Ee(i.BLEND),p=!1);return}if(p===!1&&(xe(i.BLEND),p=!0),L!==xp){if(L!==y||Fe!==E){if((v!==pr||R!==pr)&&(i.blendEquation(i.FUNC_ADD),v=pr,R=pr),Fe)switch(L){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,S=null,T=null,P=null,y=L,E=Fe}return}me=me||pe,te=te||fe,be=be||ve,(pe!==v||me!==R)&&(i.blendEquationSeparate(C[pe],C[me]),v=pe,R=me),(fe!==x||ve!==S||te!==T||be!==P)&&(i.blendFuncSeparate(ue[fe],ue[ve],ue[te],ue[be]),x=fe,S=ve,T=te,P=be),y=L,E=!1}function se(L,pe){L.side===Yn?Ee(i.CULL_FACE):xe(i.CULL_FACE);let fe=L.side===Jt;pe&&(fe=!fe),J(fe),L.blending===Sr&&L.transparent===!1?q(gi):q(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ve=L.stencilWrite;c.setTest(ve),ve&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function Ae(L){L!==_p?(xe(i.CULL_FACE),L!==U&&(L===Vc?i.cullFace(i.BACK):L===vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),U=L}function ye(L){L!==Z&&(Y&&i.lineWidth(L),Z=L)}function Me(L,pe,fe){L?(xe(i.POLYGON_OFFSET_FILL),(K!==pe||N!==fe)&&(i.polygonOffset(pe,fe),K=pe,N=fe)):Ee(i.POLYGON_OFFSET_FILL)}function Ie(L){L?xe(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=i.TEXTURE0+B-1),H!==L&&(i.activeTexture(L),H=L)}function Je(L,pe,fe){fe===void 0&&(H===null?fe=i.TEXTURE0+B-1:fe=H);let ve=$[fe];ve===void 0&&(ve={type:void 0,texture:void 0},$[fe]=ve),(ve.type!==L||ve.texture!==pe)&&(H!==fe&&(i.activeTexture(fe),H=fe),i.bindTexture(L,pe||we[L]),ve.type=L,ve.texture=pe)}function A(){const L=$[H];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ue(L){ae.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function Le(L,pe){let fe=u.get(pe);fe===void 0&&(fe=new WeakMap,u.set(pe,fe));let ve=fe.get(L);ve===void 0&&(ve=i.getUniformBlockIndex(pe,L.name),fe.set(L,ve))}function De(L,pe){const ve=u.get(pe).get(L);h.get(pe)!==ve&&(i.uniformBlockBinding(pe,ve,L.__bindingPointIndex),h.set(pe,ve))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},H=null,$={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,x=null,S=null,R=null,T=null,P=null,E=!1,b=null,U=null,Z=null,K=null,N=null,oe.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:Ee,bindFramebuffer:Be,drawBuffers:qe,useProgram:Pe,setBlending:q,setMaterial:se,setFlipSided:J,setCullFace:Ae,setLineWidth:ye,setPolygonOffset:Me,setScissorTest:Ie,activeTexture:Ze,bindTexture:Je,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:I,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:le,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:ne,compressedTexSubImage2D:re,compressedTexSubImage3D:Se,scissor:Q,viewport:Ue,reset:Re}}function Sy(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return p?new OffscreenCanvas(A,M):hs("canvas")}function v(A,M,z,ie){let ne=1;if((A.width>ie||A.height>ie)&&(ne=ie/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=M?Io:Math.floor,Se=re(ne*A.width),le=re(ne*A.height);_===void 0&&(_=y(Se,le));const ce=z?y(Se,le):_;return ce.width=Se,ce.height=le,ce.getContext("2d").drawImage(A,0,0,Se,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+le+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Sl(A.width)&&Sl(A.height)}function S(A){return a?!1:A.wrapS!==xn||A.wrapT!==xn||A.minFilter!==Yt&&A.minFilter!==hn}function R(A,M){return A.generateMipmaps&&M&&A.minFilter!==Yt&&A.minFilter!==hn}function T(A){i.generateMipmap(A)}function P(A,M,z,ie,ne=!1){if(a===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=M;if(M===i.RED&&(z===i.FLOAT&&(re=i.R32F),z===i.HALF_FLOAT&&(re=i.R16F),z===i.UNSIGNED_BYTE&&(re=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.R8UI),z===i.UNSIGNED_SHORT&&(re=i.R16UI),z===i.UNSIGNED_INT&&(re=i.R32UI),z===i.BYTE&&(re=i.R8I),z===i.SHORT&&(re=i.R16I),z===i.INT&&(re=i.R32I)),M===i.RG&&(z===i.FLOAT&&(re=i.RG32F),z===i.HALF_FLOAT&&(re=i.RG16F),z===i.UNSIGNED_BYTE&&(re=i.RG8)),M===i.RGBA){const Se=ne?Ro:lt.getTransfer(ie);z===i.FLOAT&&(re=i.RGBA32F),z===i.HALF_FLOAT&&(re=i.RGBA16F),z===i.UNSIGNED_BYTE&&(re=Se===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(A,M,z){return R(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===Yt||A===Zc||A===ya?i.NEAREST:i.LINEAR}function U(A){const M=A.target;M.removeEventListener("dispose",U),K(M),M.isVideoTexture&&g.delete(M)}function Z(A){const M=A.target;M.removeEventListener("dispose",Z),B(M)}function K(A){const M=n.get(A);if(M.__webglInit===void 0)return;const z=A.source,ie=m.get(z);if(ie){const ne=ie[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(A),Object.keys(ie).length===0&&m.delete(z)}n.remove(A)}function N(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const z=A.source,ie=m.get(z);delete ie[M.__cacheKey],o.memory.textures--}function B(A){const M=A.texture,z=n.get(A),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(z.__webglFramebuffer[ne]))for(let re=0;re<z.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(z.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(z.__webglFramebuffer[ne]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ne])}else{if(Array.isArray(z.__webglFramebuffer))for(let ne=0;ne<z.__webglFramebuffer.length;ne++)i.deleteFramebuffer(z.__webglFramebuffer[ne]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ne=0;ne<z.__webglColorRenderbuffer.length;ne++)z.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ne]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,re=M.length;ne<re;ne++){const Se=n.get(M[ne]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(A)}let Y=0;function k(){Y=0}function ee(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){const z=n.get(A);if(A.isVideoTexture&&Ze(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(z,A,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function O(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Be(z,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function V(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Be(z,A,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function oe(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){qe(z,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const ae={[yl]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},he={[Yt]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Yp]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},we={[am]:i.NEVER,[pm]:i.ALWAYS,[lm]:i.LESS,[hm]:i.LEQUAL,[cm]:i.EQUAL,[fm]:i.GEQUAL,[um]:i.GREATER,[dm]:i.NOTEQUAL};function xe(A,M,z){if(z?(i.texParameteri(A,i.TEXTURE_WRAP_S,ae[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ae[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ae[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==xn||M.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Yt&&M.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Yt||M.minFilter!==ya&&M.minFilter!==as||M.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ee(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",U));const ie=M.source;let ne=m.get(ie);ne===void 0&&(ne={},m.set(ie,ne));const re=H(M);if(re!==A.__cacheKey){ne[re]===void 0&&(ne[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[re].usedTimes++;const Se=ne[A.__cacheKey];Se!==void 0&&(ne[A.__cacheKey].usedTimes--,Se.usedTimes===0&&N(M)),A.__cacheKey=re,A.__webglTexture=ne[re].texture}return z}function Be(A,M,z){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const ne=Ee(A,M),re=M.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+z);const Se=n.get(re);if(re.version!==Se.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const le=lt.getPrimaries(lt.workingColorSpace),ce=M.colorSpace===dn?null:lt.getPrimaries(M.colorSpace),I=M.colorSpace===dn||le===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const de=S(M)&&x(M.image)===!1;let Q=v(M.image,de,!1,h);Q=Je(M,Q);const Ue=x(Q)||a,Le=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Re=P(M.internalFormat,Le,De,M.colorSpace,M.isVideoTexture);xe(ie,M,Ue);let L;const pe=M.mipmaps,fe=a&&M.isVideoTexture!==!0,ve=Se.__version===void 0||ne===!0,me=E(M,Q,Ue);if(M.isDepthTexture)Re=i.DEPTH_COMPONENT,a?M.type===fi?Re=i.DEPTH_COMPONENT32F:M.type===di?Re=i.DEPTH_COMPONENT24:M.type===Oi?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:M.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ui&&Re===i.DEPTH_COMPONENT&&M.type!==Xl&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,De=s.convert(M.type)),M.format===Dr&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,De=s.convert(M.type))),ve&&(fe?t.texStorage2D(i.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,Le,De,null));else if(M.isDataTexture)if(pe.length>0&&Ue){fe&&ve&&t.texStorage2D(i.TEXTURE_2D,me,Re,pe[0].width,pe[0].height);for(let te=0,be=pe.length;te<be;te++)L=pe[te],fe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,L.width,L.height,Le,De,L.data):t.texImage2D(i.TEXTURE_2D,te,Re,L.width,L.height,0,Le,De,L.data);M.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(i.TEXTURE_2D,me,Re,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Le,De,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,Le,De,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Re,pe[0].width,pe[0].height,Q.depth);for(let te=0,be=pe.length;te<be;te++)L=pe[te],M.format!==En?Le!==null?fe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,L.width,L.height,Q.depth,Le,L.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Re,L.width,L.height,Q.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,L.width,L.height,Q.depth,Le,De,L.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Re,L.width,L.height,Q.depth,0,Le,De,L.data)}else{fe&&ve&&t.texStorage2D(i.TEXTURE_2D,me,Re,pe[0].width,pe[0].height);for(let te=0,be=pe.length;te<be;te++)L=pe[te],M.format!==En?Le!==null?fe?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,L.width,L.height,Le,L.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Re,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,L.width,L.height,Le,De,L.data):t.texImage2D(i.TEXTURE_2D,te,Re,L.width,L.height,0,Le,De,L.data)}else if(M.isDataArrayTexture)fe?(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Re,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Le,De,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,Le,De,Q.data);else if(M.isData3DTexture)fe?(ve&&t.texStorage3D(i.TEXTURE_3D,me,Re,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Le,De,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,Le,De,Q.data);else if(M.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(i.TEXTURE_2D,me,Re,Q.width,Q.height);else{let te=Q.width,be=Q.height;for(let Fe=0;Fe<me;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Re,te,be,0,Le,De,null),te>>=1,be>>=1}}else if(pe.length>0&&Ue){fe&&ve&&t.texStorage2D(i.TEXTURE_2D,me,Re,pe[0].width,pe[0].height);for(let te=0,be=pe.length;te<be;te++)L=pe[te],fe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,Le,De,L):t.texImage2D(i.TEXTURE_2D,te,Re,Le,De,L);M.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(i.TEXTURE_2D,me,Re,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,De,Q)):t.texImage2D(i.TEXTURE_2D,0,Re,Le,De,Q);R(M,Ue)&&T(ie),Se.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function qe(A,M,z){if(M.image.length!==6)return;const ie=Ee(A,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const re=n.get(ne);if(ne.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const Se=lt.getPrimaries(lt.workingColorSpace),le=M.colorSpace===dn?null:lt.getPrimaries(M.colorSpace),ce=M.colorSpace===dn||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const I=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!I&&!de?Q[te]=v(M.image[te],!1,!0,c):Q[te]=de?M.image[te].image:M.image[te],Q[te]=Je(M,Q[te]);const Ue=Q[0],Le=x(Ue)||a,De=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),L=P(M.internalFormat,De,Re,M.colorSpace),pe=a&&M.isVideoTexture!==!0,fe=re.__version===void 0||ie===!0;let ve=E(M,Ue,Le);xe(i.TEXTURE_CUBE_MAP,M,Le);let me;if(I){pe&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,L,Ue.width,Ue.height);for(let te=0;te<6;te++){me=Q[te].mipmaps;for(let be=0;be<me.length;be++){const Fe=me[be];M.format!==En?De!==null?pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Fe.width,Fe.height,De,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,L,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Fe.width,Fe.height,De,Re,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,L,Fe.width,Fe.height,0,De,Re,Fe.data)}}}else{me=M.mipmaps,pe&&fe&&(me.length>0&&ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,L,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(de){pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,De,Re,Q[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,Q[te].width,Q[te].height,0,De,Re,Q[te].data);for(let be=0;be<me.length;be++){const yt=me[be].image[te].image;pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,yt.width,yt.height,De,Re,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,L,yt.width,yt.height,0,De,Re,yt.data)}}else{pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Re,Q[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,De,Re,Q[te]);for(let be=0;be<me.length;be++){const Fe=me[be];pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,De,Re,Fe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,L,De,Re,Fe.image[te])}}}R(M,Le)&&T(i.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Pe(A,M,z,ie,ne,re){const Se=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ce=P(z.internalFormat,Se,le,z.colorSpace);if(!n.get(M).__hasExternalTextures){const de=Math.max(1,M.width>>re),Q=Math.max(1,M.height>>re);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,ce,de,Q,M.depth,0,Se,le,null):t.texImage2D(ne,re,ce,de,Q,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,n.get(z).__webglTexture,0,Me(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,n.get(z).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function C(A,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||Ie(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===fi?ie=i.DEPTH_COMPONENT32F:ne.type===di&&(ie=i.DEPTH_COMPONENT24));const re=Me(M);Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Me(M);z&&Ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<ie.length;ne++){const re=ie[ne],Se=s.convert(re.format,re.colorSpace),le=s.convert(re.type),ce=P(re.internalFormat,Se,le,re.colorSpace),I=Me(M);z&&Ie(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,ce,M.width,M.height):Ie(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,ne=Me(M);if(M.depthTexture.format===Ui)Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Dr)Ie(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function q(A){const M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),C(M.__webglDepthbuffer[ie],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),C(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,M,z){const ie=n.get(A);M!==void 0&&Pe(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&q(A)}function J(A){const M=A.texture,z=n.get(A),ie=n.get(M);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Se=x(A)||a;if(ne){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ce=0;ce<M.mipmaps.length;ce++)z.__webglFramebuffer[le][ce]=i.createFramebuffer()}else z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)z.__webglFramebuffer[le]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const le=A.texture;for(let ce=0,I=le.length;ce<I;ce++){const de=n.get(le[ce]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ie(A)===!1){const le=re?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<le.length;ce++){const I=le[ce];z.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const de=s.convert(I.format,I.colorSpace),Q=s.convert(I.type),Ue=P(I.internalFormat,de,Q,I.colorSpace,A.isXRRenderTarget===!0),Le=Me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),C(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(i.TEXTURE_CUBE_MAP,M,Se);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)Pe(z.__webglFramebuffer[le][ce],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce);else Pe(z.__webglFramebuffer[le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);R(M,Se)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const le=A.texture;for(let ce=0,I=le.length;ce<I;ce++){const de=le[ce],Q=n.get(de);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),xe(i.TEXTURE_2D,de,Se),Pe(z.__webglFramebuffer,A,de,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),R(de,Se)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ie.__webglTexture),xe(le,M,Se),a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)Pe(z.__webglFramebuffer[ce],A,M,i.COLOR_ATTACHMENT0,le,ce);else Pe(z.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,le,0);R(M,Se)&&T(le),t.unbindTexture()}A.depthBuffer&&q(A)}function Ae(A){const M=x(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,ne=z.length;ie<ne;ie++){const re=z[ie];if(R(re,M)){const Se=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(re).__webglTexture;t.bindTexture(Se,le),T(Se),t.unbindTexture()}}}function ye(A){if(a&&A.samples>0&&Ie(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,ie=A.height;let ne=i.COLOR_BUFFER_BIT;const re=[],Se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(A),ce=A.isWebGLMultipleRenderTargets===!0;if(ce)for(let I=0;I<M.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let I=0;I<M.length;I++){re.push(i.COLOR_ATTACHMENT0+I),A.depthBuffer&&re.push(Se);const de=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(de===!1&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[I]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),ce){const Q=n.get(M[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,ie,0,0,z,ie,ne,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let I=0;I<M.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,le.__webglColorRenderbuffer[I]);const de=n.get(M[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Me(A){return Math.min(u,A.samples)}function Ie(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(A){const M=o.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function Je(A,M){const z=A.colorSpace,ie=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ml||z!==$n&&z!==dn&&(lt.getTransfer(z)===ht?a===!1?e.has("EXT_sRGB")===!0&&ie===En?(A.format=Ml,A.minFilter=hn,A.generateMipmaps=!1):M=Ld.sRGBToLinear(M):(ie!==En||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=oe,this.rebindTextures=se,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ie}function Ty(i,e,t){const n=t.isWebGL2;function r(s,o=dn){let a;const l=lt.getTransfer(o);if(s===vi)return i.UNSIGNED_BYTE;if(s===Md)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Sd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===qp)return i.BYTE;if(s===Zp)return i.SHORT;if(s===Xl)return i.UNSIGNED_SHORT;if(s===Ed)return i.INT;if(s===di)return i.UNSIGNED_INT;if(s===fi)return i.FLOAT;if(s===ls)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jp)return i.ALPHA;if(s===En)return i.RGBA;if(s===Kp)return i.LUMINANCE;if(s===$p)return i.LUMINANCE_ALPHA;if(s===Ui)return i.DEPTH_COMPONENT;if(s===Dr)return i.DEPTH_STENCIL;if(s===Ml)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jp)return i.RED;if(s===Td)return i.RED_INTEGER;if(s===Qp)return i.RG;if(s===wd)return i.RG_INTEGER;if(s===bd)return i.RGBA_INTEGER;if(s===xa||s===Ea||s===Ma||s===Sa)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jc||s===Kc||s===$c||s===Jc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$c)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===em)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qc||s===eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qc)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===ch||s===hh||s===uh||s===dh||s===fh||s===ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===th)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ch)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fh)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ta||s===mh||s===gh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ta)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tm||s===_h||s===vh||s===yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ta)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class wy extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class no extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(by)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new no;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ay extends Zt{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=di),n===void 0&&h===Dr&&(n=Oi),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ry extends Vi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],v=[],x=new yn;x.layers.enable(1),x.viewport=new _t;const S=new yn;S.layers.enable(2),S.viewport=new _t;const R=[x,S],T=new wy;T.layers.enable(1),T.layers.enable(2);let P=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=y[O];return V===void 0&&(V=new Ya,y[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=y[O];return V===void 0&&(V=new Ya,y[O]=V),V.getGripSpace()},this.getHand=function(O){let V=y[O];return V===void 0&&(V=new Ya,y[O]=V),V.getHandSpace()};function b(O){const V=v.indexOf(O.inputSource);if(V===-1)return;const oe=y[V];oe!==void 0&&(oe.update(O.inputSource,O.frame,c||o),oe.dispatchEvent({type:O.type,data:O.inputSource}))}function U(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",Z);for(let O=0;O<y.length;O++){const V=v[O];V!==null&&(v[O]=null,y[O].disconnect(V))}P=null,E=null,e.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",U),r.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:f}),p=new Bi(f.framebufferWidth,f.framebufferHeight,{format:En,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,oe=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?Dr:Ui,oe=_.stencil?Oi:di);const he={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(he),r.updateRenderState({layers:[d]}),p=new Bi(d.textureWidth,d.textureHeight,{format:En,type:vi,depthTexture:new Ay(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(O){for(let V=0;V<O.removed.length;V++){const oe=O.removed[V],ae=v.indexOf(oe);ae>=0&&(v[ae]=null,y[ae].disconnect(oe))}for(let V=0;V<O.added.length;V++){const oe=O.added[V];let ae=v.indexOf(oe);if(ae===-1){for(let we=0;we<y.length;we++)if(we>=v.length){v.push(oe),ae=we;break}else if(v[we]===null){v[we]=oe,ae=we;break}if(ae===-1)break}const he=y[ae];he&&he.connect(oe)}}const K=new D,N=new D;function B(O,V,oe){K.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(oe.matrixWorld);const ae=K.distanceTo(N),he=V.projectionMatrix.elements,we=oe.projectionMatrix.elements,xe=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),Be=(he[9]+1)/he[5],qe=(he[9]-1)/he[5],Pe=(he[8]-1)/he[0],C=(we[8]+1)/we[0],ue=xe*Pe,q=xe*C,se=ae/(-Pe+C),J=se*-Pe;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(J),O.translateZ(se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Ae=xe+se,ye=Ee+se,Me=ue-J,Ie=q+(ae-J),Ze=Be*Ee/ye*Ae,Je=qe*Ee/ye*Ae;O.projectionMatrix.makePerspective(Me,Ie,Ze,Je,Ae,ye),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Y(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;T.near=S.near=x.near=O.near,T.far=S.far=x.far=O.far,(P!==T.near||E!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,E=T.far);const V=O.parent,oe=T.cameras;Y(T,V);for(let ae=0;ae<oe.length;ae++)Y(oe[ae],V);oe.length===2?B(T,x,S):T.projectionMatrix.copy(x.projectionMatrix),k(O,T,V)};function k(O,V,oe){oe===null?O.matrix.copy(V.matrixWorld):(O.matrix.copy(oe.matrixWorld),O.matrix.invert(),O.matrix.multiply(V.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=cs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let ee=null;function H(O,V){if(h=V.getViewerPose(c||o),g=V,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ae=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let he=0;he<oe.length;he++){const we=oe[he];let xe=null;if(f!==null)xe=f.getViewport(we);else{const Be=u.getViewSubImage(d,we);xe=Be.viewport,he===0&&(e.setRenderTargetTextures(p,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let Ee=R[he];Ee===void 0&&(Ee=new yn,Ee.layers.enable(he),Ee.viewport=new _t,R[he]=Ee),Ee.matrix.fromArray(we.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(we.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(xe.x,xe.y,xe.width,xe.height),he===0&&(T.matrix.copy(Ee.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ae===!0&&T.cameras.push(Ee)}}for(let oe=0;oe<y.length;oe++){const ae=v[oe],he=y[oe];ae!==null&&he!==void 0&&he.update(ae,V,c||o)}ee&&ee(O,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const $=new Vd;$.setAnimationLoop(H),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}}function Cy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ly(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(y,S);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),S=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,T=x.length;R<T;R++){const P=x[R];if(f(P,R,S)===!0){const E=P.__offset,b=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let Z=0;Z<b.length;Z++){const K=b[Z],N=_(K);typeof K=="number"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,E+U,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=K.elements[0],P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=K.elements[0],P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=K.elements[0]):(K.toArray(P.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,P.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,x){const S=y.value;if(x[v]===void 0){if(typeof S=="number")x[v]=S;else{const R=Array.isArray(S)?S:[S],T=[];for(let P=0;P<R.length;P++)T.push(R[P].clone());x[v]=T}return!0}else if(typeof S=="number"){if(x[v]!==S)return x[v]=S,!0}else{const R=Array.isArray(x[v])?x[v]:[x[v]],T=Array.isArray(S)?S:[S];for(let P=0;P<R.length;P++){const E=R[P];if(E.equals(T[P])===!1)return E.copy(T[P]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const S=16;let R=0;for(let T=0,P=v.length;T<P;T++){const E=v[T],b={boundary:0,storage:0},U=Array.isArray(E.value)?E.value:[E.value];for(let Z=0,K=U.length;Z<K;Z++){const N=U[Z],B=_(N);b.boundary+=B.boundary,b.storage+=B.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,T>0){R=x%S;const Z=S-R;R!==0&&Z-b.boundary<0&&(x+=S-R,E.__offset=x)}x+=b.storage}return R=x%S,R>0&&(x+=S-R),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Py{constructor(e={}){const{canvas:t=Cm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let x=!1,S=0,R=0,T=null,P=-1,E=null;const b=new _t,U=new _t;let Z=null;const K=new it(0);let N=0,B=t.width,Y=t.height,k=1,ee=null,H=null;const $=new _t(0,0,B,Y),O=new _t(0,0,B,Y);let V=!1;const oe=new kd;let ae=!1,he=!1,we=null;const xe=new Tt,Ee=new _e,Be=new D,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?k:1}let C=n;function ue(w,F){for(let W=0;W<w.length;W++){const G=w[W],X=t.getContext(G,F);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),C===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),C=ue(F,w),C===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let q,se,J,Ae,ye,Me,Ie,Ze,Je,A,M,z,ie,ne,re,Se,le,ce,I,de,Q,Ue,Le,De;function Re(){q=new k0(C),se=new N0(C,q,e),q.init(se),Ue=new Ty(C,q,se),J=new My(C,q,se),Ae=new W0(C),ye=new ly,Me=new Sy(C,q,J,ye,se,Ue,Ae),Ie=new U0(v),Ze=new G0(v),Je=new Qm(C,se),Le=new I0(C,q,Je,se),A=new V0(C,Je,Ae,Le),M=new Z0(C,A,Je,Ae),I=new q0(C,se,Me),Se=new O0(ye),z=new ay(v,Ie,Ze,q,se,Le,Se),ie=new Cy(v,ye),ne=new hy,re=new gy(q,se),ce=new P0(v,Ie,Ze,J,M,d,l),le=new Ey(v,M,se),De=new Ly(C,Ae,se,J),de=new D0(C,q,Ae,se),Q=new H0(C,q,Ae,se),Ae.programs=z.programs,v.capabilities=se,v.extensions=q,v.properties=ye,v.renderLists=ne,v.shadowMap=le,v.state=J,v.info=Ae}Re();const L=new Ry(v,C);this.xr=L,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(B,Y,!1))},this.getSize=function(w){return w.set(B,Y)},this.setSize=function(w,F,W=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Y=F,t.width=Math.floor(w*k),t.height=Math.floor(F*k),W===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(B*k,Y*k).floor()},this.setDrawingBufferSize=function(w,F,W){B=w,Y=F,k=W,t.width=Math.floor(w*W),t.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,F,W,G){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,F,W,G),J.viewport(b.copy($).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,F,W,G){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,F,W,G),J.scissor(U.copy(O).multiplyScalar(k).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){J.setScissorTest(V=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(w=!0,F=!0,W=!0){let G=0;if(w){let X=!1;if(T!==null){const Te=T.texture.format;X=Te===bd||Te===wd||Te===Td}if(X){const Te=T.texture.type,Oe=Te===vi||Te===di||Te===Xl||Te===Oi||Te===Md||Te===Sd,Ge=ce.getClearColor(),ke=ce.getClearAlpha(),Ke=Ge.r,ze=Ge.g,He=Ge.b;Oe?(f[0]=Ke,f[1]=ze,f[2]=He,f[3]=ke,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=Ke,g[1]=ze,g[2]=He,g[3]=ke,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}F&&(G|=C.DEPTH_BUFFER_BIT),W&&(G|=C.STENCIL_BUFFER_BIT),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ne.dispose(),re.dispose(),ye.dispose(),Ie.dispose(),Ze.dispose(),M.dispose(),Le.dispose(),De.dispose(),z.dispose(),L.dispose(),L.removeEventListener("sessionstart",ct),L.removeEventListener("sessionend",wn),we&&(we.dispose(),we=null),Vt.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Ae.autoReset,F=le.enabled,W=le.autoUpdate,G=le.needsUpdate,X=le.type;Re(),Ae.autoReset=w,le.enabled=F,le.autoUpdate=W,le.needsUpdate=G,le.type=X}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function me(w){const F=w.target;F.removeEventListener("dispose",me),te(F)}function te(w){be(w),ye.remove(w)}function be(w){const F=ye.get(w).programs;F!==void 0&&(F.forEach(function(W){z.releaseProgram(W)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,G,X,Te){F===null&&(F=qe);const Oe=X.isMesh&&X.matrixWorld.determinant()<0,Ge=up(w,F,W,G,X);J.setMaterial(G,Oe);let ke=W.index,Ke=1;if(G.wireframe===!0){if(ke=A.getWireframeAttribute(W),ke===void 0)return;Ke=2}const ze=W.drawRange,He=W.attributes.position;let dt=ze.start*Ke,gt=(ze.start+ze.count)*Ke;Te!==null&&(dt=Math.max(dt,Te.start*Ke),gt=Math.min(gt,(Te.start+Te.count)*Ke)),ke!==null?(dt=Math.max(dt,0),gt=Math.min(gt,ke.count)):He!=null&&(dt=Math.max(dt,0),gt=Math.min(gt,He.count));const on=gt-dt;if(on<0||on===1/0)return;Le.setup(X,G,Ge,W,ke);let On,xt=de;if(ke!==null&&(On=Je.get(ke),xt=Q,xt.setIndex(On)),X.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*Pe()),xt.setMode(C.LINES)):xt.setMode(C.TRIANGLES);else if(X.isLine){let $e=G.linewidth;$e===void 0&&($e=1),J.setLineWidth($e*Pe()),X.isLineSegments?xt.setMode(C.LINES):X.isLineLoop?xt.setMode(C.LINE_LOOP):xt.setMode(C.LINE_STRIP)}else X.isPoints?xt.setMode(C.POINTS):X.isSprite&&xt.setMode(C.TRIANGLES);if(X.isInstancedMesh)xt.renderInstances(dt,on,X.count);else if(W.isInstancedBufferGeometry){const $e=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ma=Math.min(W.instanceCount,$e);xt.renderInstances(dt,on,ma)}else xt.render(dt,on)},this.compile=function(w,F){function W(G,X,Te){G.transparent===!0&&G.side===Yn&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,Ns(G,X,Te),G.side=yi,G.needsUpdate=!0,Ns(G,X,Te),G.side=Yn):Ns(G,X,Te)}m=re.get(w),m.init(),y.push(m),w.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights),w.traverse(function(G){const X=G.material;if(X)if(Array.isArray(X))for(let Te=0;Te<X.length;Te++){const Oe=X[Te];W(Oe,w,G)}else W(X,w,G)}),y.pop(),m=null};let Fe=null;function yt(w){Fe&&Fe(w)}function ct(){Vt.stop()}function wn(){Vt.start()}const Vt=new Vd;Vt.setAnimationLoop(yt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(w){Fe=w,L.setAnimationLoop(w),w===null?Vt.stop():Vt.start()},L.addEventListener("sessionstart",ct),L.addEventListener("sessionend",wn),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(F),F=L.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,T),m=re.get(w,y.length),m.init(),y.push(m),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),oe.setFromProjectionMatrix(xe),he=this.localClippingEnabled,ae=Se.init(this.clippingPlanes,he),_=ne.get(w,p.length),_.init(),p.push(_),Oc(w,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ee,H),this.info.render.frame++,ae===!0&&Se.beginShadows();const W=m.state.shadowsArray;if(le.render(W,w,F),ae===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(_,w),m.setupLights(v._useLegacyLights),F.isArrayCamera){const G=F.cameras;for(let X=0,Te=G.length;X<Te;X++){const Oe=G[X];Uc(_,w,Oe,Oe.viewport)}}else Uc(_,w,F);T!==null&&(Me.updateMultisampleRenderTarget(T),Me.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,F),Le.resetDefaultState(),P=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Oc(w,F,W,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){G&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const Oe=M.update(w),Ge=w.material;Ge.visible&&_.push(w,Oe,Ge,W,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const Oe=M.update(w),Ge=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Be.copy(Oe.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Ge)){const ke=Oe.groups;for(let Ke=0,ze=ke.length;Ke<ze;Ke++){const He=ke[Ke],dt=Ge[He.materialIndex];dt&&dt.visible&&_.push(w,Oe,dt,W,Be.z,He)}}else Ge.visible&&_.push(w,Oe,Ge,W,Be.z,null)}}const Te=w.children;for(let Oe=0,Ge=Te.length;Oe<Ge;Oe++)Oc(Te[Oe],F,W,G)}function Uc(w,F,W,G){const X=w.opaque,Te=w.transmissive,Oe=w.transparent;m.setupLightsView(W),ae===!0&&Se.setGlobalState(v.clippingPlanes,W),Te.length>0&&hp(X,Te,F,W),G&&J.viewport(b.copy(G)),X.length>0&&Ds(X,F,W),Te.length>0&&Ds(Te,F,W),Oe.length>0&&Ds(Oe,F,W),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function hp(w,F,W,G){const X=se.isWebGL2;we===null&&(we=new Bi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?ls:vi,minFilter:as,samples:X?4:0})),v.getDrawingBufferSize(Ee),X?we.setSize(Ee.x,Ee.y):we.setSize(Io(Ee.x),Io(Ee.y));const Te=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(K),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=_i,Ds(w,W,G),Me.updateMultisampleRenderTarget(we),Me.updateRenderTargetMipmap(we);let Ge=!1;for(let ke=0,Ke=F.length;ke<Ke;ke++){const ze=F[ke],He=ze.object,dt=ze.geometry,gt=ze.material,on=ze.group;if(gt.side===Yn&&He.layers.test(G.layers)){const On=gt.side;gt.side=Jt,gt.needsUpdate=!0,Fc(He,W,G,dt,gt,on),gt.side=On,gt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Me.updateMultisampleRenderTarget(we),Me.updateRenderTargetMipmap(we)),v.setRenderTarget(Te),v.setClearColor(K,N),v.toneMapping=Oe}function Ds(w,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Te=w.length;X<Te;X++){const Oe=w[X],Ge=Oe.object,ke=Oe.geometry,Ke=G===null?Oe.material:G,ze=Oe.group;Ge.layers.test(W.layers)&&Fc(Ge,F,W,ke,Ke,ze)}}function Fc(w,F,W,G,X,Te){w.onBeforeRender(v,F,W,G,X,Te),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,F,W,G,w,Te),X.transparent===!0&&X.side===Yn&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,v.renderBufferDirect(W,F,G,X,w,Te),X.side=yi,X.needsUpdate=!0,v.renderBufferDirect(W,F,G,X,w,Te),X.side=Yn):v.renderBufferDirect(W,F,G,X,w,Te),w.onAfterRender(v,F,W,G,X,Te)}function Ns(w,F,W){F.isScene!==!0&&(F=qe);const G=ye.get(w),X=m.state.lights,Te=m.state.shadowsArray,Oe=X.state.version,Ge=z.getParameters(w,X.state,Te,F,W),ke=z.getProgramCacheKey(Ge);let Ke=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?Ze:Ie).get(w.envMap||G.environment),Ke===void 0&&(w.addEventListener("dispose",me),Ke=new Map,G.programs=Ke);let ze=Ke.get(ke);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===Oe)return zc(w,Ge),ze}else Ge.uniforms=z.getUniforms(w),w.onBuild(W,Ge,v),w.onBeforeCompile(Ge,v),ze=z.acquireProgram(Ge,ke),Ke.set(ke,ze),G.uniforms=Ge.uniforms;const He=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Se.uniform),zc(w,Ge),G.needsLights=fp(w),G.lightsStateVersion=Oe,G.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix);const dt=ze.getUniforms(),gt=So.seqWithValue(dt.seq,He);return G.currentProgram=ze,G.uniformsList=gt,ze}function zc(w,F){const W=ye.get(w);W.outputColorSpace=F.outputColorSpace,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function up(w,F,W,G,X){F.isScene!==!0&&(F=qe),Me.resetTextureUnits();const Te=F.fog,Oe=G.isMeshStandardMaterial?F.environment:null,Ge=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$n,ke=(G.isMeshStandardMaterial?Ze:Ie).get(G.envMap||Oe),Ke=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color;let on=_i;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(on=v.toneMapping);const On=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=On!==void 0?On.length:0,$e=ye.get(G),ma=m.state.lights;if(ae===!0&&(he===!0||w!==E)){const en=w===E&&G.id===P;Se.setState(G,w,en)}let Et=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ma.state.version||$e.outputColorSpace!==Ge||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||$e.envMap!==ke||G.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==Ke||$e.vertexTangents!==ze||$e.morphTargets!==He||$e.morphNormals!==dt||$e.morphColors!==gt||$e.toneMapping!==on||se.isWebGL2===!0&&$e.morphTargetsCount!==xt)&&(Et=!0):(Et=!0,$e.__version=G.version);let Ti=$e.currentProgram;Et===!0&&(Ti=Ns(G,F,X));let Bc=!1,kr=!1,ga=!1;const Ht=Ti.getUniforms(),wi=$e.uniforms;if(J.useProgram(Ti.program)&&(Bc=!0,kr=!0,ga=!0),G.id!==P&&(P=G.id,kr=!0),Bc||E!==w){Ht.setValue(C,"projectionMatrix",w.projectionMatrix),Ht.setValue(C,"viewMatrix",w.matrixWorldInverse);const en=Ht.map.cameraPosition;en!==void 0&&en.setValue(C,Be.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&Ht.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ht.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,kr=!0,ga=!0)}if(X.isSkinnedMesh){Ht.setOptional(C,X,"bindMatrix"),Ht.setOptional(C,X,"bindMatrixInverse");const en=X.skeleton;en&&(se.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ht.setValue(C,"boneTexture",en.boneTexture,Me),Ht.setValue(C,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _a=W.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&se.isWebGL2===!0)&&I.update(X,W,Ti),(kr||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Ht.setValue(C,"receiveShadow",X.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=ke,wi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),kr&&(Ht.setValue(C,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&dp(wi,ga),Te&&G.fog===!0&&ie.refreshFogUniforms(wi,Te),ie.refreshMaterialUniforms(wi,G,k,Y,we),So.upload(C,$e.uniformsList,wi,Me)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(So.upload(C,$e.uniformsList,wi,Me),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ht.setValue(C,"center",X.center),Ht.setValue(C,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(C,"normalMatrix",X.normalMatrix),Ht.setValue(C,"modelMatrix",X.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let va=0,pp=en.length;va<pp;va++)if(se.isWebGL2){const Gc=en[va];De.update(Gc,Ti),De.bind(Gc,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function dp(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function fp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,W){ye.get(w.texture).__webglTexture=F,ye.get(w.depthTexture).__webglTexture=W;const G=ye.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const W=ye.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){T=w,S=F,R=W;let G=!0,X=null,Te=!1,Oe=!1;if(w){const ke=ye.get(w);ke.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(C.FRAMEBUFFER,null),G=!1):ke.__webglFramebuffer===void 0?Me.setupRenderTarget(w):ke.__hasExternalTextures&&Me.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const ze=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?X=ze[F][W]:X=ze[F],Te=!0):se.isWebGL2&&w.samples>0&&Me.useMultisampledRTT(w)===!1?X=ye.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[W]:X=ze,b.copy(w.viewport),U.copy(w.scissor),Z=w.scissorTest}else b.copy($).multiplyScalar(k).floor(),U.copy(O).multiplyScalar(k).floor(),Z=V;if(J.bindFramebuffer(C.FRAMEBUFFER,X)&&se.drawBuffers&&G&&J.drawBuffers(w,X),J.viewport(b),J.scissor(U),J.setScissorTest(Z),Te){const ke=ye.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,W)}else if(Oe){const ke=ye.get(w.texture),Ke=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,Ke)}P=-1},this.readRenderTargetPixels=function(w,F,W,G,X,Te,Oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){J.bindFramebuffer(C.FRAMEBUFFER,Ge);try{const ke=w.texture,Ke=ke.format,ze=ke.type;if(Ke!==En&&Ue.convert(Ke)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===ls&&(q.has("EXT_color_buffer_half_float")||se.isWebGL2&&q.has("EXT_color_buffer_float"));if(ze!==vi&&Ue.convert(ze)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===fi&&(se.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&W>=0&&W<=w.height-X&&C.readPixels(F,W,G,X,Ue.convert(Ke),Ue.convert(ze),Te)}finally{const ke=T!==null?ye.get(T).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,F,W=0){const G=Math.pow(2,-W),X=Math.floor(F.image.width*G),Te=Math.floor(F.image.height*G);Me.setTexture2D(F,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,w.x,w.y,X,Te),J.unbindTexture()},this.copyTextureToTexture=function(w,F,W,G=0){const X=F.image.width,Te=F.image.height,Oe=Ue.convert(W.format),Ge=Ue.convert(W.type);Me.setTexture2D(W,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,w.x,w.y,X,Te,Oe,Ge,F.image.data):F.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Oe,F.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,G,w.x,w.y,Oe,Ge,F.image),G===0&&W.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W,G,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=w.max.x-w.min.x+1,Oe=w.max.y-w.min.y+1,Ge=w.max.z-w.min.z+1,ke=Ue.convert(G.format),Ke=Ue.convert(G.type);let ze;if(G.isData3DTexture)Me.setTexture3D(G,0),ze=C.TEXTURE_3D;else if(G.isDataArrayTexture)Me.setTexture2DArray(G,0),ze=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const He=C.getParameter(C.UNPACK_ROW_LENGTH),dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gt=C.getParameter(C.UNPACK_SKIP_PIXELS),on=C.getParameter(C.UNPACK_SKIP_ROWS),On=C.getParameter(C.UNPACK_SKIP_IMAGES),xt=W.isCompressedTexture?W.mipmaps[0]:W.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?C.texSubImage3D(ze,X,F.x,F.y,F.z,Te,Oe,Ge,ke,Ke,xt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(ze,X,F.x,F.y,F.z,Te,Oe,Ge,ke,xt.data)):C.texSubImage3D(ze,X,F.x,F.y,F.z,Te,Oe,Ge,ke,Ke,xt),C.pixelStorei(C.UNPACK_ROW_LENGTH,He),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,on),C.pixelStorei(C.UNPACK_SKIP_IMAGES,On),X===0&&G.generateMipmaps&&C.generateMipmap(ze),J.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Me.setTextureCube(w,0):w.isData3DTexture?Me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Me.setTexture2DArray(w,0):Me.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){S=0,R=0,T=null,J.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Yo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Fi:Ad}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?Ot:$n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Iy extends Py{}Iy.prototype.isWebGL1Renderer=!0;class Gw extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Dy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new D;class pi{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qd extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new D,au=new D,lu=new Tt,qa=new Zl,io=new Ur;class Ny extends jt{constructor(e=new Qt,t=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ou.fromBufferAttribute(t,r-1),au.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ou.distanceTo(au);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;lu.copy(r).invert(),qa.copy(e.ray).applyMatrix4(lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,x=y-1;v<x;v+=f){const S=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,R),qa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,x=y-1;v<x;v+=f){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),qa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const cu=new D,hu=new D;class Oy extends Ny{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)cu.fromBufferAttribute(t,r),hu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+cu.distanceTo(hu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kw extends Zt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new _e:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new Tt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(wt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends Nn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new _e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Uy extends Jl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ql(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ro=new D,Za=new Ql,ja=new Ql,Ka=new Ql;class Fy extends Nn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ro.subVectors(r[0],r[1]).add(r[0]),c=ro);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Za.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Za.calc(l),ja.calc(l),Ka.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function zy(i,e){const t=1-i;return t*t*e}function By(i,e){return 2*(1-i)*i*e}function Gy(i,e){return i*i*e}function rs(i,e,t,n){return zy(i,e)+By(i,t)+Gy(i,n)}function ky(i,e){const t=1-i;return t*t*t*e}function Vy(i,e){const t=1-i;return 3*t*t*i*e}function Hy(i,e){return 3*(1-i)*i*i*e}function Wy(i,e){return i*i*i*e}function ss(i,e,t,n,r){return ky(i,e)+Vy(i,t)+Hy(i,n)+Wy(i,r)}class Zd extends Nn{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ss(e,r.x,s.x,o.x,a.x),ss(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xy extends Nn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ss(e,r.x,s.x,o.x,a.x),ss(e,r.y,s.y,o.y,a.y),ss(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jd extends Nn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yy extends Nn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Nn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rs(e,r.x,s.x,o.x),rs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qy extends Nn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(rs(e,r.x,s.x,o.x),rs(e,r.y,s.y,o.y),rs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(uu(a,l.x,c.x,h.x,u.x),uu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Uy,CatmullRomCurve3:Fy,CubicBezierCurve:Zd,CubicBezierCurve3:Xy,EllipseCurve:Jl,LineCurve:jd,LineCurve3:Yy,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:qy,SplineCurve:$d});class Zy extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new wl[r.type]().fromJSON(r))}return this}}class bl extends Zy{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new jd(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Kd(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Zd(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Jl(e,t,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jd extends Qt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(){const x=new D,S=new D;let R=0;const T=(t-e)/n;for(let P=0;P<=s;P++){const E=[],b=P/s,U=b*(t-e)+e;for(let Z=0;Z<=r;Z++){const K=Z/r,N=K*l+a,B=Math.sin(N),Y=Math.cos(N);S.x=U*B,S.y=-b*n+m,S.z=U*Y,u.push(S.x,S.y,S.z),x.set(B,T,Y).normalize(),d.push(x.x,x.y,x.z),f.push(K,1-b),E.push(g++)}_.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const b=_[E][P],U=_[E+1][P],Z=_[E+1][P+1],K=_[E][P+1];h.push(b,U,K),h.push(U,Z,K),R+=6}c.addGroup(p,R,0),p+=R}function v(x){const S=g,R=new _e,T=new D;let P=0;const E=x===!0?e:t,b=x===!0?1:-1;for(let Z=1;Z<=r;Z++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const U=g;for(let Z=0;Z<=r;Z++){const N=Z/r*l+a,B=Math.cos(N),Y=Math.sin(N);T.x=E*Y,T.y=m*b,T.z=E*B,u.push(T.x,T.y,T.z),d.push(0,b,0),R.x=B*.5+.5,R.y=Y*.5*b+.5,f.push(R.x,R.y),g++}for(let Z=0;Z<r;Z++){const K=S+Z,N=U+Z;x===!0?h.push(N,N+1,K):h.push(N+1,N,K),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends bl{constructor(e){super(e),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new bl().fromJSON(r))}return this}}const jy={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Qd(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=ex(i,e,s,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<r;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return us(s,o,t,a,l,f,0),o}};function Qd(i,e,t,n,r){let s,o;if(r===ux(i,e,t,n)>0)for(s=e;s<t;s+=n)o=du(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=du(s,i[s],i[s+1],o);return o&&jo(o,o.next)&&(fs(o),o=o.next),o}function ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||ut(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(i,e,t,n,r,s,o){if(!i)return;!o&&s&&sx(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?$y(i,n,r,s):Ky(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Jy(ki(i),e,t),us(i,e,t,n,r,s,2)):o===2&&Qy(i,e,t,n,r,s):us(ki(i),e,t,n,r,s,1);break}}}function Ky(i){const e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&xr(r,a,s,l,o,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $y(i,e,t,n){const r=i.prev,s=i,o=i.next;if(ut(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Al(f,g,e,t,n),y=Al(_,m,e,t,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&xr(a,h,l,u,c,d,v.x,v.y)&&ut(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&xr(a,h,l,u,c,d,x.x,x.y)&&ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&xr(a,h,l,u,c,d,v.x,v.y)&&ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&xr(a,h,l,u,c,d,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jy(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!jo(r,s)&&ef(r,n,n.next,s)&&ds(r,s)&&ds(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),fs(n),fs(n.next),n=i=s),n=n.next}while(n!==i);return ki(n)}function Qy(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let l=tf(o,a);o=ki(o,o.next),l=ki(l,l.next),us(o,e,t,n,r,s,0),us(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ex(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Qd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(ax(c));for(r.sort(tx),s=0;s<r.length;s++)t=nx(r[s],t);return t}function tx(i,e){return i.x-e.x}function nx(i,e){const t=ix(i,e);if(!t)return e;const n=tf(t,i);return ki(n,n.next),ki(t,t.next)}function ix(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&xr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),ds(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&rx(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function rx(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function sx(i,e,t,n){let r=i;do r.z===0&&(r.z=Al(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ox(r)}function ox(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Al(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ax(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function lx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cx(i,e)&&(ds(i,e)&&ds(e,i)&&hx(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||jo(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jo(i,e){return i.x===e.x&&i.y===e.y}function ef(i,e,t,n){const r=oo(ut(i,e,t)),s=oo(ut(i,e,n)),o=oo(ut(t,n,i)),a=oo(ut(t,n,e));return!!(r!==s&&o!==a||r===0&&so(i,t,e)||s===0&&so(i,n,e)||o===0&&so(t,i,n)||a===0&&so(t,e,n))}function so(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function cx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ds(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function hx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tf(i,e){const t=new Rl(i.i,i.x,i.y),n=new Rl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function du(i,e,t,n){const r=new Rl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ux(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class wr{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return wr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];fu(e),pu(n,e);let o=e.length;t.forEach(fu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,pu(n,t[l]);const a=jy.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ec extends Qt{constructor(e=new To([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:dx;let v,x=!1,S,R,T,P;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,S=p.computeFrenetFrames(h,!1),R=new D,T=new D,P=new D),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(c);let b=E.shape;const U=E.holes;if(!wr.isClockWise(b)){b=b.reverse();for(let C=0,ue=U.length;C<ue;C++){const q=U[C];wr.isClockWise(q)&&(U[C]=q.reverse())}}const K=wr.triangulateShape(b,U),N=b;for(let C=0,ue=U.length;C<ue;C++){const q=U[C];b=b.concat(q)}function B(C,ue,q){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ue,q)}const Y=b.length,k=K.length;function ee(C,ue,q){let se,J,Ae;const ye=C.x-ue.x,Me=C.y-ue.y,Ie=q.x-C.x,Ze=q.y-C.y,Je=ye*ye+Me*Me,A=ye*Ze-Me*Ie;if(Math.abs(A)>Number.EPSILON){const M=Math.sqrt(Je),z=Math.sqrt(Ie*Ie+Ze*Ze),ie=ue.x-Me/M,ne=ue.y+ye/M,re=q.x-Ze/z,Se=q.y+Ie/z,le=((re-ie)*Ze-(Se-ne)*Ie)/(ye*Ze-Me*Ie);se=ie+ye*le-C.x,J=ne+Me*le-C.y;const ce=se*se+J*J;if(ce<=2)return new _e(se,J);Ae=Math.sqrt(ce/2)}else{let M=!1;ye>Number.EPSILON?Ie>Number.EPSILON&&(M=!0):ye<-Number.EPSILON?Ie<-Number.EPSILON&&(M=!0):Math.sign(Me)===Math.sign(Ze)&&(M=!0),M?(se=-Me,J=ye,Ae=Math.sqrt(Je)):(se=ye,J=Me,Ae=Math.sqrt(Je/2))}return new _e(se/Ae,J/Ae)}const H=[];for(let C=0,ue=N.length,q=ue-1,se=C+1;C<ue;C++,q++,se++)q===ue&&(q=0),se===ue&&(se=0),H[C]=ee(N[C],N[q],N[se]);const $=[];let O,V=H.concat();for(let C=0,ue=U.length;C<ue;C++){const q=U[C];O=[];for(let se=0,J=q.length,Ae=J-1,ye=se+1;se<J;se++,Ae++,ye++)Ae===J&&(Ae=0),ye===J&&(ye=0),O[se]=ee(q[se],q[Ae],q[ye]);$.push(O),V=V.concat(O)}for(let C=0;C<m;C++){const ue=C/m,q=f*Math.cos(ue*Math.PI/2),se=g*Math.sin(ue*Math.PI/2)+_;for(let J=0,Ae=N.length;J<Ae;J++){const ye=B(N[J],H[J],se);xe(ye.x,ye.y,-q)}for(let J=0,Ae=U.length;J<Ae;J++){const ye=U[J];O=$[J];for(let Me=0,Ie=ye.length;Me<Ie;Me++){const Ze=B(ye[Me],O[Me],se);xe(Ze.x,Ze.y,-q)}}}const oe=g+_;for(let C=0;C<Y;C++){const ue=d?B(b[C],V[C],oe):b[C];x?(T.copy(S.normals[0]).multiplyScalar(ue.x),R.copy(S.binormals[0]).multiplyScalar(ue.y),P.copy(v[0]).add(T).add(R),xe(P.x,P.y,P.z)):xe(ue.x,ue.y,0)}for(let C=1;C<=h;C++)for(let ue=0;ue<Y;ue++){const q=d?B(b[ue],V[ue],oe):b[ue];x?(T.copy(S.normals[C]).multiplyScalar(q.x),R.copy(S.binormals[C]).multiplyScalar(q.y),P.copy(v[C]).add(T).add(R),xe(P.x,P.y,P.z)):xe(q.x,q.y,u/h*C)}for(let C=m-1;C>=0;C--){const ue=C/m,q=f*Math.cos(ue*Math.PI/2),se=g*Math.sin(ue*Math.PI/2)+_;for(let J=0,Ae=N.length;J<Ae;J++){const ye=B(N[J],H[J],se);xe(ye.x,ye.y,u+q)}for(let J=0,Ae=U.length;J<Ae;J++){const ye=U[J];O=$[J];for(let Me=0,Ie=ye.length;Me<Ie;Me++){const Ze=B(ye[Me],O[Me],se);x?xe(Ze.x,Ze.y+v[h-1].y,v[h-1].x+q):xe(Ze.x,Ze.y,u+q)}}}ae(),he();function ae(){const C=r.length/3;if(d){let ue=0,q=Y*ue;for(let se=0;se<k;se++){const J=K[se];Ee(J[2]+q,J[1]+q,J[0]+q)}ue=h+m*2,q=Y*ue;for(let se=0;se<k;se++){const J=K[se];Ee(J[0]+q,J[1]+q,J[2]+q)}}else{for(let ue=0;ue<k;ue++){const q=K[ue];Ee(q[2],q[1],q[0])}for(let ue=0;ue<k;ue++){const q=K[ue];Ee(q[0]+Y*h,q[1]+Y*h,q[2]+Y*h)}}n.addGroup(C,r.length/3-C,0)}function he(){const C=r.length/3;let ue=0;we(N,ue),ue+=N.length;for(let q=0,se=U.length;q<se;q++){const J=U[q];we(J,ue),ue+=J.length}n.addGroup(C,r.length/3-C,1)}function we(C,ue){let q=C.length;for(;--q>=0;){const se=q;let J=q-1;J<0&&(J=C.length-1);for(let Ae=0,ye=h+m*2;Ae<ye;Ae++){const Me=Y*Ae,Ie=Y*(Ae+1),Ze=ue+se+Me,Je=ue+J+Me,A=ue+J+Ie,M=ue+se+Ie;Be(Ze,Je,A,M)}}}function xe(C,ue,q){l.push(C),l.push(ue),l.push(q)}function Ee(C,ue,q){qe(C),qe(ue),qe(q);const se=r.length/3,J=y.generateTopUV(n,r,se-3,se-2,se-1);Pe(J[0]),Pe(J[1]),Pe(J[2])}function Be(C,ue,q,se){qe(C),qe(ue),qe(se),qe(ue),qe(q),qe(se);const J=r.length/3,Ae=y.generateSideWallUV(n,r,J-6,J-3,J-2,J-1);Pe(Ae[0]),Pe(Ae[1]),Pe(Ae[3]),Pe(Ae[1]),Pe(Ae[2]),Pe(Ae[3])}function qe(C){r.push(l[C*3+0]),r.push(l[C*3+1]),r.push(l[C*3+2])}function Pe(C){s.push(C.x),s.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wl[r.type]().fromJSON(r)),new ec(n,e.options)}}const dx={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-u),new _e(d,1-g),new _e(_,1-p)]:[new _e(a,1-l),new _e(h,1-u),new _e(f,1-g),new _e(m,1-p)]}};function fx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nf extends Qt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const R=S/t;u.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const v=h[p][y+1],x=h[p][y],S=h[p+1][y],R=h[p+1][y+1];(p!==0||o>0)&&f.push(v,x,R),(p!==n-1||l<Math.PI)&&f.push(x,S,R)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class px extends Qt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),y=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),mu(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),mu(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new mt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mu(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}const Do={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const gx=new mx;class ws{constructor(e){this.manager=e!==void 0?e:gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class _x extends Error{constructor(e,t){super(e),this.response=t}}class vx extends ws{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Do.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:r});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,T=h.length;R<T;R++){const P=h[R];P.onProgress&&P.onProgress(S)}p.enqueue(x),y()}})}}});return new Response(m)}else throw new _x(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Do.add(e,c);const h=Vn[e];delete Vn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Vn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yx extends ws{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Do.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=hs("img");function l(){h(),Do.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vw extends ws{constructor(e){super(e)}load(e,t,n,r){const s=new Zt,o=new yx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class xx extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hw extends xx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ex extends Qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Cl extends Dy{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class gu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _u=new D,ao=new D;class Mx{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_u.subVectors(e,this.start),ao.subVectors(this.end,this.start);const n=ao.dot(ao);let s=ao.dot(_u)/n;return t&&(s=wt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Ww extends Oy{constructor(e=10,t=16,n=8,r=64,s=4473924,o=8947848){s=new it(s),o=new it(o);const a=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const _=u&1?s:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?s:o,f=e-e/n*u;for(let g=0;g<r;g++){let _=g/r*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f;a.push(m,0,p),l.push(d.r,d.g,d.b),_=(g+1)/r*(Math.PI*2),m=Math.sin(_)*f,p=Math.cos(_)*f,a.push(m,0,p),l.push(d.r,d.g,d.b)}}const c=new Qt;c.setAttribute("position",new mt(a,3)),c.setAttribute("color",new mt(l,3));const h=new qd({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sx{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new bl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let v=0,x=p.length;v<x;v++){const S=p[v],R=new To;R.curves=S.curves,y.push(R)}return y}function n(p,y){const v=y.length;let x=!1;for(let S=v-1,R=0;R<v;S=R++){let T=y[S],P=y[R],E=P.x-T.x,b=P.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=y[R],E=-E,P=y[S],b=-b),p.y<T.y||p.y>P.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const U=b*(p.x-T.x)-E*(p.y-T.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(p.y!==T.y)continue;if(P.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=P.x)return!0}}return x}const r=wr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new To,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,_;d[g]=void 0,f[g]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new To,p:_},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){const S=f[v];for(let R=0;R<S.length;R++){const T=S[R];let P=!0;for(let E=0;E<d.length;E++)n(T.p,d[E].p)&&(v!==E&&y++,P?(P=!1,u[E].push(T)):p=!0);P&&u[v].push(T)}}y>0&&p===!1&&(f=u)}let m;for(let p=0,y=d.length;p<y;p++){l=d[p].s,c.push(l),m=f[p];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const vu={type:"change"},$a={type:"start"},yu={type:"end"},lo=new Zl,xu=new hi,Tx=Math.cos(70*Rd.DEG2RAD);class Xw extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",M),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vu),n.update(),s=r.NONE},this.update=function(){const I=new D,de=new Gi().setFromUnitVectors(e.up,new D(0,1,0)),Q=de.clone().invert(),Ue=new D,Le=new Gi,De=new D,Re=2*Math.PI;return function(pe=null){const fe=n.object.position;I.copy(fe).sub(n.target),I.applyQuaternion(de),a.setFromVector3(I),n.autoRotate&&s===r.NONE&&U(E(pe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ve=n.minAzimuthAngle,me=n.maxAzimuthAngle;isFinite(ve)&&isFinite(me)&&(ve<-Math.PI?ve+=Re:ve>Math.PI&&(ve-=Re),me<-Math.PI?me+=Re:me>Math.PI&&(me-=Re),ve<=me?a.theta=Math.max(ve,Math.min(me,a.theta)):a.theta=a.theta>(ve+me)/2?Math.max(ve,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=H(a.radius):a.radius=H(a.radius*c),I.setFromSpherical(a),I.applyQuaternion(Q),fe.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let te=!1;if(n.zoomToCursor&&R){let be=null;if(n.object.isPerspectiveCamera){const Fe=I.length();be=H(Fe*c);const yt=Fe-be;n.object.position.addScaledVector(x,yt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Fe=new D(S.x,S.y,0);Fe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),te=!0;const yt=new D(S.x,S.y,0);yt.unproject(n.object),n.object.position.sub(yt).add(Fe),n.object.updateMatrixWorld(),be=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(be).add(n.object.position):(lo.origin.copy(n.object.position),lo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lo.direction))<Tx?e.lookAt(n.target):(xu.setFromNormalAndCoplanarPoint(n.object.up,n.target),lo.intersectPlane(xu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),te=!0);return c=1,R=!1,te||Ue.distanceToSquared(n.object.position)>o||8*(1-Le.dot(n.object.quaternion))>o||De.distanceToSquared(n.target)>0?(n.dispatchEvent(vu),Ue.copy(n.object.position),Le.copy(n.object.quaternion),De.copy(n.target),te=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",Ie),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ie),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gu,l=new gu;let c=1;const h=new D,u=new _e,d=new _e,f=new _e,g=new _e,_=new _e,m=new _e,p=new _e,y=new _e,v=new _e,x=new D,S=new _e;let R=!1;const T=[],P={};function E(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function U(I){l.theta-=I}function Z(I){l.phi-=I}const K=function(){const I=new D;return function(Q,Ue){I.setFromMatrixColumn(Ue,0),I.multiplyScalar(-Q),h.add(I)}}(),N=function(){const I=new D;return function(Q,Ue){n.screenSpacePanning===!0?I.setFromMatrixColumn(Ue,1):(I.setFromMatrixColumn(Ue,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Q),h.add(I)}}(),B=function(){const I=new D;return function(Q,Ue){const Le=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;I.copy(De).sub(n.target);let Re=I.length();Re*=Math.tan(n.object.fov/2*Math.PI/180),K(2*Q*Re/Le.clientHeight,n.object.matrix),N(2*Ue*Re/Le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(Q*(n.object.right-n.object.left)/n.object.zoom/Le.clientWidth,n.object.matrix),N(Ue*(n.object.top-n.object.bottom)/n.object.zoom/Le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(I){if(!n.zoomToCursor)return;R=!0;const de=n.domElement.getBoundingClientRect(),Q=I.clientX-de.left,Ue=I.clientY-de.top,Le=de.width,De=de.height;S.x=Q/Le*2-1,S.y=-(Ue/De)*2+1,x.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function H(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function $(I){u.set(I.clientX,I.clientY)}function O(I){ee(I),p.set(I.clientX,I.clientY)}function V(I){g.set(I.clientX,I.clientY)}function oe(I){d.set(I.clientX,I.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;U(2*Math.PI*f.x/de.clientHeight),Z(2*Math.PI*f.y/de.clientHeight),u.copy(d),n.update()}function ae(I){y.set(I.clientX,I.clientY),v.subVectors(y,p),v.y>0?Y(b()):v.y<0&&k(b()),p.copy(y),n.update()}function he(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function we(I){ee(I),I.deltaY<0?k(b()):I.deltaY>0&&Y(b()),n.update()}function xe(I){let de=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),de=!0;break}de&&(I.preventDefault(),n.update())}function Ee(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const I=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);u.set(I,de)}}function Be(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const I=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);g.set(I,de)}}function qe(){const I=T[0].pageX-T[1].pageX,de=T[0].pageY-T[1].pageY,Q=Math.sqrt(I*I+de*de);p.set(0,Q)}function Pe(){n.enableZoom&&qe(),n.enablePan&&Be()}function C(){n.enableZoom&&qe(),n.enableRotate&&Ee()}function ue(I){if(T.length==1)d.set(I.pageX,I.pageY);else{const Q=ce(I),Ue=.5*(I.pageX+Q.x),Le=.5*(I.pageY+Q.y);d.set(Ue,Le)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;U(2*Math.PI*f.x/de.clientHeight),Z(2*Math.PI*f.y/de.clientHeight),u.copy(d)}function q(I){if(T.length===1)_.set(I.pageX,I.pageY);else{const de=ce(I),Q=.5*(I.pageX+de.x),Ue=.5*(I.pageY+de.y);_.set(Q,Ue)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function se(I){const de=ce(I),Q=I.pageX-de.x,Ue=I.pageY-de.y,Le=Math.sqrt(Q*Q+Ue*Ue);y.set(0,Le),v.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),Y(v.y),p.copy(y)}function J(I){n.enableZoom&&se(I),n.enablePan&&q(I)}function Ae(I){n.enableZoom&&se(I),n.enableRotate&&ue(I)}function ye(I){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",Ie)),re(I),I.pointerType==="touch"?z(I):Ze(I))}function Me(I){n.enabled!==!1&&(I.pointerType==="touch"?ie(I):Je(I))}function Ie(I){Se(I),T.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ie)),n.dispatchEvent(yu),s=r.NONE}function Ze(I){let de;switch(I.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Xi.DOLLY:if(n.enableZoom===!1)return;O(I),s=r.DOLLY;break;case Xi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;V(I),s=r.PAN}else{if(n.enableRotate===!1)return;$(I),s=r.ROTATE}break;case Xi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;$(I),s=r.ROTATE}else{if(n.enablePan===!1)return;V(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($a)}function Je(I){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;oe(I);break;case r.DOLLY:if(n.enableZoom===!1)return;ae(I);break;case r.PAN:if(n.enablePan===!1)return;he(I);break}}function A(I){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(I.preventDefault(),n.dispatchEvent($a),we(I),n.dispatchEvent(yu))}function M(I){n.enabled===!1||n.enablePan===!1||xe(I)}function z(I){switch(le(I),T.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;Ee(),s=r.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;Be(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent($a)}function ie(I){switch(le(I),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;q(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(I),n.update();break;default:s=r.NONE}}function ne(I){n.enabled!==!1&&I.preventDefault()}function re(I){T.push(I)}function Se(I){delete P[I.pointerId];for(let de=0;de<T.length;de++)if(T[de].pointerId==I.pointerId){T.splice(de,1);return}}function le(I){let de=P[I.pointerId];de===void 0&&(de=new _e,P[I.pointerId]=de),de.set(I.pageX,I.pageY)}function ce(I){const de=I.pointerId===T[0].pointerId?T[1]:T[0];return P[de.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",Ie),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}class Yw extends ws{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new vx(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new wx(e)}}class wx{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=bx(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function bx(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=Ax(h,r,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function Ax(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new Sx;let a,l,c,h,u,d,f,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*e+t,l=_[m++]*e+n,o.moveTo(a,l);break;case"l":a=_[m++]*e+t,l=_[m++]*e+n,o.lineTo(a,l);break;case"q":c=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,d=_[m++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,d=_[m++]*e+n,f=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:s.ha*e,path:o}}class qw extends ec{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const Eu=new Mi,co=new D;class rf extends Ex{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new mt(e,3)),this.setAttribute("uv",new mt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Cl(t,6,1);return this.setAttribute("instanceStart",new pi(n,3,0)),this.setAttribute("instanceEnd",new pi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Cl(t,6,1);return this.setAttribute("instanceColorStart",new pi(n,3,0)),this.setAttribute("instanceColorEnd",new pi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new px(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Eu.setFromBufferAttribute(t),this.boundingBox.union(Eu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)co.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(co)),co.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(co));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _e(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kt.line={uniforms:jl.merge([ge.common,ge.fog,ge.line]),vertexShader:`
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
		`};class sf extends xi{constructor(e){super({type:"LineMaterial",uniforms:jl.clone(Kt.line.uniforms),vertexShader:Kt.line.vertexShader,fragmentShader:Kt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Mu=new D,Su=new D,Pt=new _t,It=new _t,bn=new _t,Ja=new D,Qa=new Tt,Dt=new Mx,Tu=new D,ho=new Mi,uo=new Ur,An=new _t;let Cn,zi;function wu(i,e,t){return An.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),An.multiplyScalar(1/An.w),An.x=zi/t.width,An.y=zi/t.height,An.applyMatrix4(i.projectionMatrixInverse),An.multiplyScalar(1/An.w),Math.abs(Math.max(An.x,An.y))}function Rx(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Dt.start.fromBufferAttribute(r,a),Dt.end.fromBufferAttribute(s,a),Dt.applyMatrix4(t);const c=new D,h=new D;Cn.distanceSqToSegment(Dt.start,Dt.end,h,c),h.distanceTo(c)<zi*.5&&e.push({point:h,pointOnLine:c,distance:Cn.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Cx(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Cn.at(1,bn),bn.w=1,bn.applyMatrix4(e.matrixWorldInverse),bn.applyMatrix4(n),bn.multiplyScalar(1/bn.w),bn.x*=s.x/2,bn.y*=s.y/2,bn.z=0,Ja.copy(bn),Qa.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(Pt.fromBufferAttribute(l,d),It.fromBufferAttribute(c,d),Pt.w=1,It.w=1,Pt.applyMatrix4(Qa),It.applyMatrix4(Qa),Pt.z>u&&It.z>u)continue;if(Pt.z>u){const v=Pt.z-It.z,x=(Pt.z-u)/v;Pt.lerp(It,x)}else if(It.z>u){const v=It.z-Pt.z,x=(It.z-u)/v;It.lerp(Pt,x)}Pt.applyMatrix4(n),It.applyMatrix4(n),Pt.multiplyScalar(1/Pt.w),It.multiplyScalar(1/It.w),Pt.x*=s.x/2,Pt.y*=s.y/2,It.x*=s.x/2,It.y*=s.y/2,Dt.start.copy(Pt),Dt.start.z=0,Dt.end.copy(It),Dt.end.z=0;const _=Dt.closestPointToPointParameter(Ja,!0);Dt.at(_,Tu);const m=Rd.lerp(Pt.z,It.z,_),p=m>=-1&&m<=1,y=Ja.distanceTo(Tu)<zi*.5;if(p&&y){Dt.start.fromBufferAttribute(l,d),Dt.end.fromBufferAttribute(c,d),Dt.start.applyMatrix4(o),Dt.end.applyMatrix4(o);const v=new D,x=new D;Cn.distanceSqToSegment(Dt.start,Dt.end,x,v),t.push({point:x,pointOnLine:v,distance:Cn.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Lx extends jn{constructor(e=new rf,t=new sf({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Mu.fromBufferAttribute(t,o),Su.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Mu.distanceTo(Su);const s=new Cl(r,2,1);return e.setAttribute("instanceDistanceStart",new pi(s,1,0)),e.setAttribute("instanceDistanceEnd",new pi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Cn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;zi=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),uo.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=zi*.5;else{const u=Math.max(r.near,uo.distanceToPoint(Cn.origin));c=wu(r,u,l.resolution)}if(uo.radius+=c,Cn.intersectsSphere(uo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ho.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=zi*.5;else{const u=Math.max(r.near,ho.distanceToPoint(Cn.origin));h=wu(r,u,l.resolution)}ho.expandByScalar(h),Cn.intersectsBox(ho)!==!1&&(n?Rx(this,t):Cx(this,r,t))}}class Px extends rf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Zw extends Lx{constructor(e=new Px,t=new sf({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class Ix{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Si=Ix,ps={PROPERTYCHANGE:"propertychange"};class Dx{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}const tc=Dx;function Ko(i,e){return i>e?1:i<e?-1:0}function nc(i,e,t){if(i[0]<=e)return 0;const n=i.length;if(e<=i[n-1])return n-1;if(typeof t=="function"){for(let r=1;r<n;++r){const s=i[r];if(s===e)return r;if(s<e)return t(e,i[r-1],s)>0?r-1:r}return n-1}if(t>0){for(let r=1;r<n;++r)if(i[r]<e)return r-1;return n-1}if(t<0){for(let r=1;r<n;++r)if(i[r]<=e)return r;return n-1}for(let r=1;r<n;++r){if(i[r]==e)return r;if(i[r]<e)return i[r-1]-e<e-i[r]?r-1:r}return n-1}function Nx(i,e){const t=Array.isArray(e)?e:[e],n=t.length;for(let r=0;r<n;r++)i[i.length]=t[r]}function $o(i,e){const t=i.length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0}function Ox(i,e,t){const n=e||Ko;return i.every(function(r,s){if(s===0)return!0;const o=n(i[s-1],r);return!(o>0||t&&o===0)})}function No(){return!0}function Jo(){return!1}function Oo(){}function Ux(i){let e=!1,t,n,r;return function(){const s=Array.prototype.slice.call(arguments);return(!e||this!==r||!$o(s,n))&&(e=!0,r=this,n=s,t=i.apply(this,arguments)),t}}function Fx(i){function e(){let t;try{t=i()}catch(n){return Promise.reject(n)}return t instanceof Promise?t:Promise.resolve(t)}return e()}function Qo(i){for(const e in i)delete i[e]}function of(i){let e;for(e in i)return!1;return!e}class zx extends tc{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;const n=this.listeners_||(this.listeners_={}),r=n[e]||(n[e]=[]);r.includes(t)||r.push(t)}dispatchEvent(e){const t=typeof e=="string",n=t?e:e.type,r=this.listeners_&&this.listeners_[n];if(!r)return;const s=t?new Si(e):e;s.target||(s.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});n in o||(o[n]=0,a[n]=0),++o[n];let l;for(let c=0,h=r.length;c<h;++c)if("handleEvent"in r[c]?l=r[c].handleEvent(s):l=r[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[n]===0){let c=a[n];for(delete a[n];c--;)this.removeEventListener(n,Oo);delete o[n]}return l}disposeInternal(){this.listeners_&&Qo(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;const n=this.listeners_[e];if(!n)return;const r=n.indexOf(t);r!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[r]=Oo,++this.pendingRemovals_[e]):(n.splice(r,1),n.length===0&&delete this.listeners_[e]))}}const ea=zx,Ye={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function st(i,e,t,n,r){if(n&&n!==i&&(t=t.bind(n)),r){const o=t;t=function(){i.removeEventListener(e,t),o.apply(this,arguments)}}const s={target:i,type:e,listener:t};return i.addEventListener(e,t),s}function Uo(i,e,t,n){return st(i,e,t,n,!0)}function vt(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),Qo(i))}class ta extends ea{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(Ye.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){const n=e.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=st(this,e[s],t);return r}return st(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){const r=e.length;n=new Array(r);for(let s=0;s<r;++s)n[s]=Uo(this,e[s],t)}else n=Uo(this,e,t);return t.ol_key=n,n}unInternal(e,t){const n=t.ol_key;if(n)Bx(n);else if(Array.isArray(e))for(let r=0,s=e.length;r<s;++r)this.removeEventListener(e[r],t);else this.removeEventListener(e,t)}}ta.prototype.on;ta.prototype.once;ta.prototype.un;function Bx(i){if(Array.isArray(i))for(let e=0,t=i.length;e<t;++e)vt(i[e]);else vt(i)}const af=ta;function tt(){throw new Error("Unimplemented abstract method.")}let Gx=0;function qt(i){return i.ol_uid||(i.ol_uid=String(++Gx))}class bu extends Si{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class kx extends af{constructor(e){super(),this.on,this.once,this.un,qt(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new bu(n,e,t)),n=ps.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new bu(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){const r=this.values_||(this.values_={});if(n)r[e]=t;else{const s=r[e];r[e]=t,s!==t&&this.notify(e,s)}}setProperties(e,t){for(const n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){const n=this.values_[e];delete this.values_[e],of(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}const Qn=kx,un={ADD:"add",REMOVE:"remove"},Au={LENGTH:"length"};class fo extends Si{constructor(e,t,n){super(e),this.element=t,this.index=n}}class Vx extends Qn{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e||[],this.unique_)for(let n=0,r=this.array_.length;n<r;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(Au.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new fo(un.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){const t=this.array_;for(let n=0,r=t.length;n<r;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;const t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new fo(un.REMOVE,t,e)),t}setAt(e,t){const n=this.getLength();if(e>=n){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);const r=this.array_[e];this.array_[e]=t,this.dispatchEvent(new fo(un.REMOVE,r,e)),this.dispatchEvent(new fo(un.ADD,t,e))}updateLength_(){this.set(Au.LENGTH,this.array_.length)}assertUnique_(e,t){for(let n=0,r=this.array_.length;n<r;++n)if(this.array_[n]===e&&n!==t)throw new Error("Duplicate item added to a unique collection")}}const Kn=Vx;function ot(i,e){if(!i)throw new Error(e)}new Array(6);function br(){return[1,0,0,1,0,0]}function ln(i,e){const t=e[0],n=e[1];return e[0]=i[0]*t+i[2]*n+i[4],e[1]=i[1]*t+i[3]*n+i[5],e}function ms(i,e,t,n,r,s,o,a){const l=Math.sin(s),c=Math.cos(s);return i[0]=n*c,i[1]=r*l,i[2]=-n*l,i[3]=r*c,i[4]=o*n*c-a*n*l+e,i[5]=o*r*l+a*r*c+t,i}function lf(i,e){const t=Hx(e);ot(t!==0,"Transformation matrix cannot be inverted");const n=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5];return i[0]=o/t,i[1]=-r/t,i[2]=-s/t,i[3]=n/t,i[4]=(s*l-o*a)/t,i[5]=-(n*l-r*a)/t,i}function Hx(i){return i[0]*i[3]-i[1]*i[2]}const Ru=[1e6,1e6,1e6,1e6,2,2];function Wx(i){return"matrix("+i.map((t,n)=>Math.round(t*Ru[n])/Ru[n]).join(", ")+")"}const Nt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Cu(i){const e=Hi();for(let t=0,n=i.length;t<n;++t)wo(e,i[t]);return e}function Xx(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i.slice()}function cf(i,e,t){let n,r;return e<i[0]?n=i[0]-e:i[2]<e?n=e-i[2]:n=0,t<i[1]?r=i[1]-t:i[3]<t?r=t-i[3]:r=0,n*n+r*r}function ic(i,e){return hf(i,e[0],e[1])}function Yx(i,e){return i[0]<=e[0]&&e[2]<=i[2]&&i[1]<=e[1]&&e[3]<=i[3]}function hf(i,e,t){return i[0]<=e&&e<=i[2]&&i[1]<=t&&t<=i[3]}function Lu(i,e){const t=i[0],n=i[1],r=i[2],s=i[3],o=e[0],a=e[1];let l=Nt.UNKNOWN;return o<t?l=l|Nt.LEFT:o>r&&(l=l|Nt.RIGHT),a<n?l=l|Nt.BELOW:a>s&&(l=l|Nt.ABOVE),l===Nt.UNKNOWN&&(l=Nt.INTERSECTING),l}function Hi(){return[1/0,1/0,-1/0,-1/0]}function bs(i,e,t,n,r){return r?(r[0]=i,r[1]=e,r[2]=t,r[3]=n,r):[i,e,t,n]}function na(i){return bs(1/0,1/0,-1/0,-1/0,i)}function qx(i,e){const t=i[0],n=i[1];return bs(t,n,t,n,e)}function Zx(i,e,t,n,r){const s=na(r);return uf(s,i,e,t,n)}function Ll(i,e){return i[0]==e[0]&&i[2]==e[2]&&i[1]==e[1]&&i[3]==e[3]}function jx(i,e){return e[0]<i[0]&&(i[0]=e[0]),e[2]>i[2]&&(i[2]=e[2]),e[1]<i[1]&&(i[1]=e[1]),e[3]>i[3]&&(i[3]=e[3]),i}function wo(i,e){e[0]<i[0]&&(i[0]=e[0]),e[0]>i[2]&&(i[2]=e[0]),e[1]<i[1]&&(i[1]=e[1]),e[1]>i[3]&&(i[3]=e[1])}function uf(i,e,t,n,r){for(;t<n;t+=r)Kx(i,e[t],e[t+1]);return i}function Kx(i,e,t){i[0]=Math.min(i[0],e),i[1]=Math.min(i[1],t),i[2]=Math.max(i[2],e),i[3]=Math.max(i[3],t)}function df(i,e){let t;return t=e(ia(i)),t||(t=e(ra(i)),t)||(t=e(sa(i)),t)||(t=e(Wi(i)),t)?t:!1}function Pl(i){let e=0;return oa(i)||(e=St(i)*fn(i)),e}function ia(i){return[i[0],i[1]]}function ra(i){return[i[2],i[1]]}function gs(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function $x(i,e){let t;if(e==="bottom-left")t=ia(i);else if(e==="bottom-right")t=ra(i);else if(e==="top-left")t=Wi(i);else if(e==="top-right")t=sa(i);else throw new Error("Invalid corner");return t}function Il(i,e,t,n,r){const[s,o,a,l,c,h,u,d]=Dl(i,e,t,n);return bs(Math.min(s,a,c,u),Math.min(o,l,h,d),Math.max(s,a,c,u),Math.max(o,l,h,d),r)}function Dl(i,e,t,n){const r=e*n[0]/2,s=e*n[1]/2,o=Math.cos(t),a=Math.sin(t),l=r*o,c=r*a,h=s*o,u=s*a,d=i[0],f=i[1];return[d-l+u,f-c-h,d-l-u,f-c+h,d+l-u,f+c+h,d+l+u,f+c-h,d-l+u,f-c-h]}function fn(i){return i[3]-i[1]}function os(i,e,t){const n=t||Hi();return As(i,e)?(i[0]>e[0]?n[0]=i[0]:n[0]=e[0],i[1]>e[1]?n[1]=i[1]:n[1]=e[1],i[2]<e[2]?n[2]=i[2]:n[2]=e[2],i[3]<e[3]?n[3]=i[3]:n[3]=e[3]):na(n),n}function Wi(i){return[i[0],i[3]]}function sa(i){return[i[2],i[3]]}function St(i){return i[2]-i[0]}function As(i,e){return i[0]<=e[2]&&i[2]>=e[0]&&i[1]<=e[3]&&i[3]>=e[1]}function oa(i){return i[2]<i[0]||i[3]<i[1]}function Jx(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i}function Qx(i,e,t){let n=!1;const r=Lu(i,e),s=Lu(i,t);if(r===Nt.INTERSECTING||s===Nt.INTERSECTING)n=!0;else{const o=i[0],a=i[1],l=i[2],c=i[3],h=e[0],u=e[1],d=t[0],f=t[1],g=(f-u)/(d-h);let _,m;s&Nt.ABOVE&&!(r&Nt.ABOVE)&&(_=d-(f-c)/g,n=_>=o&&_<=l),!n&&s&Nt.RIGHT&&!(r&Nt.RIGHT)&&(m=f-(d-l)*g,n=m>=a&&m<=c),!n&&s&Nt.BELOW&&!(r&Nt.BELOW)&&(_=d-(f-a)/g,n=_>=o&&_<=l),!n&&s&Nt.LEFT&&!(r&Nt.LEFT)&&(m=f-(d-o)*g,n=m>=a&&m<=c)}return n}const Or={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class eE{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Or[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const ff=eE,Rs=6378137,Er=Math.PI*Rs,tE=[-Er,-Er,Er,Er],nE=[-180,-85,180,85],po=Rs*Math.log(Math.tan(Math.PI/2));class cr extends ff{constructor(e){super({code:e,units:"m",extent:tE,global:!0,worldExtent:nE,getPointResolution:function(t,n){return t/Math.cosh(n[1]/Rs)}})}}const Pu=[new cr("EPSG:3857"),new cr("EPSG:102100"),new cr("EPSG:102113"),new cr("EPSG:900913"),new cr("http://www.opengis.net/def/crs/EPSG/0/3857"),new cr("http://www.opengis.net/gml/srs/epsg.xml#3857")];function iE(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t){e[r]=Er*i[r]/180;let s=Rs*Math.log(Math.tan(Math.PI*(+i[r+1]+90)/360));s>po?s=po:s<-po&&(s=-po),e[r+1]=s}return e}function rE(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let r=0;r<n;r+=t)e[r]=180*i[r]/Er,e[r+1]=360*Math.atan(Math.exp(i[r+1]/Rs))/Math.PI-90;return e}const sE=6378137,Iu=[-180,-90,180,90],oE=Math.PI*sE/180;class Li extends ff{constructor(e,t){super({code:e,units:"degrees",extent:Iu,axisOrientation:t,global:!0,metersPerUnit:oE,worldExtent:Iu})}}const Du=[new Li("CRS:84"),new Li("EPSG:4326","neu"),new Li("urn:ogc:def:crs:OGC:1.3:CRS84"),new Li("urn:ogc:def:crs:OGC:2:84"),new Li("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new Li("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Li("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let Nl={};function aE(i){return Nl[i]||Nl[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function lE(i,e){Nl[i]=e}let Ar={};function Fo(i,e,t){const n=i.getCode(),r=e.getCode();n in Ar||(Ar[n]={}),Ar[n][r]=t}function cE(i,e){let t;return i in Ar&&e in Ar[i]&&(t=Ar[i][e]),t}function Lt(i,e,t){return Math.min(Math.max(i,e),t)}function hE(i,e,t,n,r,s){const o=r-t,a=s-n;if(o!==0||a!==0){const l=((i-t)*o+(e-n)*a)/(o*o+a*a);l>1?(t=r,n=s):l>0&&(t+=o*l,n+=a*l)}return Rr(i,e,t,n)}function Rr(i,e,t,n){const r=t-i,s=n-e;return r*r+s*s}function uE(i){const e=i.length;for(let n=0;n<e;n++){let r=n,s=Math.abs(i[n][n]);for(let a=n+1;a<e;a++){const l=Math.abs(i[a][n]);l>s&&(s=l,r=a)}if(s===0)return null;const o=i[r];i[r]=i[n],i[n]=o;for(let a=n+1;a<e;a++){const l=-i[a][n]/i[n][n];for(let c=n;c<e+1;c++)n==c?i[a][c]=0:i[a][c]+=l*i[n][c]}}const t=new Array(e);for(let n=e-1;n>=0;n--){t[n]=i[n][e]/i[n][n];for(let r=n-1;r>=0;r--)i[r][e]-=i[r][n]*t[n]}return t}function bo(i){return i*Math.PI/180}function Cr(i,e){const t=i%e;return t*e<0?t+e:t}function dE(i,e,t){return i+t*(e-i)}function pf(i,e){const t=Math.pow(10,e);return Math.round(i*t)/t}function mo(i,e){return Math.floor(pf(i,e))}function go(i,e){return Math.ceil(pf(i,e))}function fE(i,e){return i[0]+=+e[0],i[1]+=+e[1],i}function zo(i,e){let t=!0;for(let n=i.length-1;n>=0;--n)if(i[n]!=e[n]){t=!1;break}return t}function rc(i,e){const t=Math.cos(e),n=Math.sin(e),r=i[0]*t-i[1]*n,s=i[1]*t+i[0]*n;return i[0]=r,i[1]=s,i}function pE(i,e){return i[0]*=e,i[1]*=e,i}function mE(i,e){if(e.canWrapX()){const t=St(e.getExtent()),n=gE(i,e,t);n&&(i[0]-=n*t)}return i}function gE(i,e,t){const n=e.getExtent();let r=0;return e.canWrapX()&&(i[0]<n[0]||i[0]>n[2])&&(t=t||St(n),r=Math.floor((i[0]-n[0])/t)),r}const _E=63710088e-1;function Nu(i,e,t){t=t||_E;const n=bo(i[1]),r=bo(e[1]),s=(r-n)/2,o=bo(e[0]-i[0])/2,a=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(n)*Math.cos(r);return 2*t*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}const mf={info:1,warn:2,error:3,none:4};let vE=mf.info;function gf(...i){vE>mf.warn||console.warn(...i)}let Ol=!0;function yE(i){Ol=!(i===void 0?!0:i)}function sc(i,e){if(e!==void 0){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];e=e}else e=i.slice();return e}function _f(i,e){if(e!==void 0&&i!==e){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];i=e}return i}function xE(i){lE(i.getCode(),i),Fo(i,i,sc)}function EE(i){i.forEach(xE)}function Sn(i){return typeof i=="string"?aE(i):i||null}function Bo(i,e,t,n){i=Sn(i);let r;const s=i.getPointResolutionFunc();if(s){if(r=s(e,t),n&&n!==i.getUnits()){const o=i.getMetersPerUnit();o&&(r=r*o/Or[n])}}else{const o=i.getUnits();if(o=="degrees"&&!n||n=="degrees")r=e;else{const a=ac(i,Sn("EPSG:4326"));if(a===_f&&o!=="degrees")r=e*i.getMetersPerUnit();else{let c=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];c=a(c,c,2);const h=Nu(c.slice(0,2),c.slice(2,4)),u=Nu(c.slice(4,6),c.slice(6,8));r=(h+u)/2}const l=n?Or[n]:i.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function Ou(i){EE(i),i.forEach(function(e){i.forEach(function(t){e!==t&&Fo(e,t,sc)})})}function ME(i,e,t,n){i.forEach(function(r){e.forEach(function(s){Fo(r,s,t),Fo(s,r,n)})})}function oc(i,e){return i?typeof i=="string"?Sn(i):i:Sn(e)}function mr(i,e){if(i===e)return!0;const t=i.getUnits()===e.getUnits();return(i.getCode()===e.getCode()||ac(i,e)===sc)&&t}function ac(i,e){const t=i.getCode(),n=e.getCode();let r=cE(t,n);return r||(r=_f),r}function Go(i,e){const t=Sn(i),n=Sn(e);return ac(t,n)}function SE(i,e,t){return Go(e,t)(i,void 0,i.length)}function Ul(i,e){return i}function Wn(i,e){return Ol&&!zo(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(Ol=!1,gf("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),i}function TE(i,e){return i}function Mr(i,e){return i}function wE(){Ou(Pu),Ou(Du),ME(Du,Pu,iE,rE)}wE();function bE(i,e,t,n,r,s){s=s||[];let o=0;for(let a=e;a<t;a+=n){const l=i[a],c=i[a+1];s[o++]=r[0]*l+r[2]*c+r[4],s[o++]=r[1]*l+r[3]*c+r[5]}return s&&s.length!=o&&(s.length=o),s}function AE(i,e,t,n,r,s,o){o=o||[];const a=Math.cos(r),l=Math.sin(r),c=s[0],h=s[1];let u=0;for(let d=e;d<t;d+=n){const f=i[d]-c,g=i[d+1]-h;o[u++]=c+f*a-g*l,o[u++]=h+f*l+g*a;for(let _=d+2;_<d+n;++_)o[u++]=i[_]}return o&&o.length!=u&&(o.length=u),o}function RE(i,e,t,n,r,s,o,a){a=a||[];const l=o[0],c=o[1];let h=0;for(let u=e;u<t;u+=n){const d=i[u]-l,f=i[u+1]-c;a[h++]=l+r*d,a[h++]=c+s*f;for(let g=u+2;g<u+n;++g)a[h++]=i[g]}return a&&a.length!=h&&(a.length=h),a}function CE(i,e,t,n,r,s,o){o=o||[];let a=0;for(let l=e;l<t;l+=n){o[a++]=i[l]+r,o[a++]=i[l+1]+s;for(let c=l+2;c<l+n;++c)o[a++]=i[c]}return o&&o.length!=a&&(o.length=a),o}const Uu=br();class LE extends Qn{constructor(){super(),this.extent_=Hi(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Ux((e,t,n)=>{if(!n)return this.getSimplifiedGeometry(t);const r=this.clone();return r.applyTransform(n),r.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return tt()}closestPointXY(e,t,n,r){return tt()}containsXY(e,t){const n=this.getClosestPoint([e,t]);return n[0]===e&&n[1]===t}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return tt()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&na(t),this.extentRevision_=this.getRevision()}return Jx(this.extent_,e)}rotate(e,t){tt()}scale(e,t,n){tt()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return tt()}getType(){return tt()}applyTransform(e){tt()}intersectsExtent(e){return tt()}translate(e,t){tt()}transform(e,t){const n=Sn(e),r=n.getUnits()=="tile-pixels"?function(s,o,a){const l=n.getExtent(),c=n.getWorldExtent(),h=fn(c)/fn(l);return ms(Uu,c[0],c[3],h,-h,0,0,0),bE(s,0,s.length,a,Uu,o),Go(n,t)(s,o,a)}:Go(n,t);return this.applyTransform(r),this}}const PE=LE;class IE extends PE{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return Zx(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return tt()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=Fu(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){tt()}setLayout(e,t,n){let r;if(e)r=Fu(e);else{for(let s=0;s<n;++s){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}r=t.length,e=DE(r)}this.layout=e,this.stride=r}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();AE(n,0,n.length,r,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||(n=gs(this.getExtent()));const r=this.getFlatCoordinates();if(r){const s=this.getStride();RE(r,0,r.length,s,e,t,n,r),this.changed()}}translate(e,t){const n=this.getFlatCoordinates();if(n){const r=this.getStride();CE(n,0,n.length,r,e,t,n),this.changed()}}}function DE(i){let e;return i==2?e="XY":i==3?e="XYZ":i==4&&(e="XYZM"),e}function Fu(i){let e;return i=="XY"?e=2:i=="XYZ"||i=="XYM"?e=3:i=="XYZM"&&(e=4),e}const lc=IE;function zu(i,e,t,n,r,s,o){const a=i[e],l=i[e+1],c=i[t]-a,h=i[t+1]-l;let u;if(c===0&&h===0)u=e;else{const d=((r-a)*c+(s-l)*h)/(c*c+h*h);if(d>1)u=t;else if(d>0){for(let f=0;f<n;++f)o[f]=dE(i[e+f],i[t+f],d);o.length=n;return}else u=e}for(let d=0;d<n;++d)o[d]=i[u+d];o.length=n}function vf(i,e,t,n,r){let s=i[e],o=i[e+1];for(e+=n;e<t;e+=n){const a=i[e],l=i[e+1],c=Rr(s,o,a,l);c>r&&(r=c),s=a,o=l}return r}function NE(i,e,t,n,r){for(let s=0,o=t.length;s<o;++s){const a=t[s];r=vf(i,e,a,n,r),e=a}return r}function yf(i,e,t,n,r,s,o,a,l,c,h){if(e==t)return c;let u,d;if(r===0){if(d=Rr(o,a,i[e],i[e+1]),d<c){for(u=0;u<n;++u)l[u]=i[e+u];return l.length=n,d}return c}h=h||[NaN,NaN];let f=e+n;for(;f<t;)if(zu(i,f-n,f,n,o,a,h),d=Rr(o,a,h[0],h[1]),d<c){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n,f+=n}else f+=n*Math.max((Math.sqrt(d)-Math.sqrt(c))/r|0,1);if(s&&(zu(i,t-n,e,n,o,a,h),d=Rr(o,a,h[0],h[1]),d<c)){for(c=d,u=0;u<n;++u)l[u]=h[u];l.length=n}return c}function OE(i,e,t,n,r,s,o,a,l,c,h){h=h||[NaN,NaN];for(let u=0,d=t.length;u<d;++u){const f=t[u];c=yf(i,e,f,n,r,s,o,a,l,c,h),e=f}return c}function UE(i,e,t,n){for(let r=0,s=t.length;r<s;++r)i[e++]=t[r];return e}function xf(i,e,t,n){for(let r=0,s=t.length;r<s;++r){const o=t[r];for(let a=0;a<n;++a)i[e++]=o[a]}return e}function FE(i,e,t,n,r){r=r||[];let s=0;for(let o=0,a=t.length;o<a;++o){const l=xf(i,e,t[o],n);r[s++]=l,e=l}return r.length=s,r}function zE(i,e,t,n,r,s,o){const a=(t-e)/n;if(a<3){for(;e<t;e+=n)s[o++]=i[e],s[o++]=i[e+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const c=[e,t-n];let h=0;for(;c.length>0;){const u=c.pop(),d=c.pop();let f=0;const g=i[d],_=i[d+1],m=i[u],p=i[u+1];for(let y=d+n;y<u;y+=n){const v=i[y],x=i[y+1],S=hE(v,x,g,_,m,p);S>f&&(h=y,f=S)}f>r&&(l[(h-e)/n]=1,d+n<h&&c.push(d,h),h+n<u&&c.push(h,u))}for(let u=0;u<a;++u)l[u]&&(s[o++]=i[e+u*n],s[o++]=i[e+u*n+1]);return o}function hr(i,e){return e*Math.round(i/e)}function BE(i,e,t,n,r,s,o){if(e==t)return o;let a=hr(i[e],r),l=hr(i[e+1],r);e+=n,s[o++]=a,s[o++]=l;let c,h;do if(c=hr(i[e],r),h=hr(i[e+1],r),e+=n,e==t)return s[o++]=c,s[o++]=h,o;while(c==a&&h==l);for(;e<t;){const u=hr(i[e],r),d=hr(i[e+1],r);if(e+=n,u==c&&d==h)continue;const f=c-a,g=h-l,_=u-a,m=d-l;if(f*m==g*_&&(f<0&&_<f||f==_||f>0&&_>f)&&(g<0&&m<g||g==m||g>0&&m>g)){c=u,h=d;continue}s[o++]=c,s[o++]=h,a=c,l=h,c=u,h=d}return s[o++]=c,s[o++]=h,o}function GE(i,e,t,n,r,s,o,a){for(let l=0,c=t.length;l<c;++l){const h=t[l];o=BE(i,e,h,n,r,s,o),a.push(o),e=h}return o}function Ef(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let o=e;o<t;o+=n)r[s++]=i.slice(o,o+n);return r.length=s,r}function kE(i,e,t,n,r){r=r!==void 0?r:[];let s=0;for(let o=0,a=t.length;o<a;++o){const l=t[o];r[s++]=Ef(i,e,l,n,r[s]),e=l}return r.length=s,r}function Mf(i,e,t,n){let r=0,s=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];r+=o*a-s*l,s=a,o=l}return r/2}function VE(i,e,t,n){let r=0;for(let s=0,o=t.length;s<o;++s){const a=t[s];r+=Mf(i,e,a,n),e=a}return r}class ko extends lc{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new ko(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,r){return r<cf(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(vf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),yf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,r))}getArea(){return Mf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Ef(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const t=[];return t.length=zE(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new ko(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=xf(this.flatCoordinates,0,e,this.stride),this.changed()}}const Bu=ko;class cc extends lc{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new cc(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,r){const s=this.flatCoordinates,o=Rr(e,t,s[0],s[1]);if(o<r){const a=this.stride;for(let l=0;l<a;++l)n[l]=s[l];return n.length=a,o}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return qx(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return hf(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=UE(this.flatCoordinates,0,e,this.stride),this.changed()}}const HE=cc;function WE(i,e,t,n,r){return!df(r,function(o){return!Ni(i,e,t,n,o[0],o[1])})}function Ni(i,e,t,n,r,s){let o=0,a=i[t-n],l=i[t-n+1];for(;e<t;e+=n){const c=i[e],h=i[e+1];l<=s?h>s&&(c-a)*(s-l)-(r-a)*(h-l)>0&&o++:h<=s&&(c-a)*(s-l)-(r-a)*(h-l)<0&&o--,a=c,l=h}return o!==0}function Sf(i,e,t,n,r,s){if(t.length===0||!Ni(i,e,t[0],n,r,s))return!1;for(let o=1,a=t.length;o<a;++o)if(Ni(i,t[o-1],t[o],n,r,s))return!1;return!0}function XE(i,e,t,n,r,s,o){let a,l,c,h,u,d,f;const g=r[s+1],_=[];for(let y=0,v=t.length;y<v;++y){const x=t[y];for(h=i[x-n],d=i[x-n+1],a=e;a<x;a+=n)u=i[a],f=i[a+1],(g<=d&&f<=g||d<=g&&g<=f)&&(c=(g-d)/(f-d)*(u-h)+h,_.push(c)),h=u,d=f}let m=NaN,p=-1/0;for(_.sort(Ko),h=_[0],a=1,l=_.length;a<l;++a){u=_[a];const y=Math.abs(u-h);y>p&&(c=(h+u)/2,Sf(i,e,t,n,c,g)&&(m=c,p=y)),h=u}return isNaN(m)&&(m=r[s]),o?(o.push(m,g,p),o):[m,g,p]}function YE(i,e,t,n,r){let s;for(e+=n;e<t;e+=n)if(s=r(i.slice(e-n,e),i.slice(e,e+n)),s)return s;return!1}function Tf(i,e,t,n,r){const s=uf(Hi(),i,e,t,n);return As(r,s)?Yx(r,s)||s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:YE(i,e,t,n,function(o,a){return Qx(r,o,a)}):!1}function wf(i,e,t,n,r){return!!(Tf(i,e,t,n,r)||Ni(i,e,t,n,r[0],r[1])||Ni(i,e,t,n,r[0],r[3])||Ni(i,e,t,n,r[2],r[1])||Ni(i,e,t,n,r[2],r[3]))}function qE(i,e,t,n,r){if(!wf(i,e,t[0],n,r))return!1;if(t.length===1)return!0;for(let s=1,o=t.length;s<o;++s)if(WE(i,t[s-1],t[s],n,r)&&!Tf(i,t[s-1],t[s],n,r))return!1;return!0}function ZE(i,e,t,n){for(;e<t-n;){for(let r=0;r<n;++r){const s=i[e+r];i[e+r]=i[t-n+r],i[t-n+r]=s}e+=n,t-=n}}function bf(i,e,t,n){let r=0,s=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];r+=(a-s)*(l+o),s=a,o=l}return r===0?void 0:r>0}function jE(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,o=t.length;s<o;++s){const a=t[s],l=bf(i,e,a,n);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;e=a}return!0}function Gu(i,e,t,n,r){r=r!==void 0?r:!1;for(let s=0,o=t.length;s<o;++s){const a=t[s],l=bf(i,e,a,n);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&ZE(i,e,a,n),e=a}return e}class _s extends lc{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?Nx(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new _s(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,r){return r<cf(this.getExtent(),e,t)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(NE(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),OE(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,r))}containsXY(e,t){return Sf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return VE(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),Gu(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,kE(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=gs(this.getExtent());this.flatInteriorPoint_=XE(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new HE(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new Bu(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,t=this.flatCoordinates,n=this.ends_,r=[];let s=0;for(let o=0,a=n.length;o<a;++o){const l=n[o],c=new Bu(t.slice(s,l),e);r.push(c),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;jE(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Gu(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=GE(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,n),new _s(t,"XY",n)}getType(){return"Polygon"}intersectsExtent(e){return qE(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=FE(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}function ku(i){if(oa(i))throw new Error("Cannot create polygon from empty extent");const e=i[0],t=i[1],n=i[2],r=i[3],s=[e,t,e,r,n,r,n,t,e,t];return new _s(s,"XY",[s.length])}const Ln={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},Qe={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4},vs={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var Ut={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"]};Ut.whitepoint={2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}};Ut.max=Ut.whitepoint[2].D65;Ut.rgb=function(i,e){e=e||Ut.whitepoint[2].E;var t=i[0]/e[0],n=i[1]/e[1],r=i[2]/e[2],s,o,a;return s=t*3.240969941904521+n*-1.537383177570093+r*-.498610760293,o=t*-.96924363628087+n*1.87596750150772+r*.041555057407175,a=t*.055630079696993+n*-.20397695888897+r*1.056971514242878,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s=s*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[s*255,o*255,a*255]};vs.xyz=function(i,e){var t=i[0]/255,n=i[1]/255,r=i[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92;var s=t*.41239079926595+n*.35758433938387+r*.18048078840183,o=t*.21263900587151+n*.71516867876775+r*.072192315360733,a=t*.019330818715591+n*.11919477979462+r*.95053215224966;return e=e||Ut.whitepoint[2].E,[s*e[0],o*e[1],a*e[2]]};const hc={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(i,e,t){var n,r,s,o,a,l,c,h,u,d,f,g,_;if(s=i[0],o=i[1],a=i[2],s===0)return[0,0,0];var m=.0011070564598794539;return e=e||"D65",t=t||2,u=Ut.whitepoint[t][e][0],d=Ut.whitepoint[t][e][1],f=Ut.whitepoint[t][e][2],g=4*u/(u+15*d+3*f),_=9*d/(u+15*d+3*f),n=o/(13*s)+g||0,r=a/(13*s)+_||0,c=s>8?d*Math.pow((s+16)/116,3):d*s*m,l=c*9*n/(4*r)||0,h=c*(12-3*n-20*r)/(4*r)||0,[l,c,h]}};Ut.luv=function(i,e,t){var n,r,s,o,a,l,c,h,u,d,f,g,_,m=.008856451679035631,p=903.2962962962961;e=e||"D65",t=t||2,u=Ut.whitepoint[t][e][0],d=Ut.whitepoint[t][e][1],f=Ut.whitepoint[t][e][2],g=4*u/(u+15*d+3*f),_=9*d/(u+15*d+3*f),l=i[0],c=i[1],h=i[2],n=4*l/(l+15*c+3*h)||0,r=9*c/(l+15*c+3*h)||0;var y=c/d;return s=y<=m?p*y:116*Math.pow(y,1/3)-16,o=13*s*(n-g),a=13*s*(r-_),[s,o,a]};var Af={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(i){var e=i[0],t=i[1],n=i[2],r,s,o;return o=n/360*2*Math.PI,r=t*Math.cos(o),s=t*Math.sin(o),[e,r,s]},xyz:function(i){return hc.xyz(Af.luv(i))}};hc.lchuv=function(i){var e=i[0],t=i[1],n=i[2],r=Math.sqrt(t*t+n*n),s=Math.atan2(n,t),o=s*360/2/Math.PI;return o<0&&(o+=360),[e,r,o]};Ut.lchuv=function(i){return hc.lchuv(Ut.luv(i))};const Vu={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var Hu={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function KE(i){var h,u;var e,t=[],n=1,r;if(typeof i=="number")return{space:"rgb",values:[i>>>16,(i&65280)>>>8,i&255],alpha:1};if(typeof i=="number")return{space:"rgb",values:[i>>>16,(i&65280)>>>8,i&255],alpha:1};if(i=String(i).toLowerCase(),Vu[i])t=Vu[i].slice(),r="rgb";else if(i==="transparent")n=0,r="rgb",t=[0,0,0];else if(i[0]==="#"){var s=i.slice(1),o=s.length,a=o<=4;n=1,a?(t=[parseInt(s[0]+s[0],16),parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16)],o===4&&(n=parseInt(s[3]+s[3],16)/255)):(t=[parseInt(s[0]+s[1],16),parseInt(s[2]+s[3],16),parseInt(s[4]+s[5],16)],o===8&&(n=parseInt(s[6]+s[7],16)/255)),t[0]||(t[0]=0),t[1]||(t[1]=0),t[2]||(t[2]=0),r="rgb"}else if(e=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(i)){var l=e[1];r=l.replace(/a$/,"");var c=r==="cmyk"?4:r==="gray"?1:3;t=e[2].trim().split(/\s*[,\/]\s*|\s+/),r==="color"&&(r=t.shift()),t=t.map(function(d,f){if(d[d.length-1]==="%")return d=parseFloat(d)/100,f===3?d:r==="rgb"?d*255:r[0]==="h"||r[0]==="l"&&!f?d*100:r==="lab"?d*125:r==="lch"?f<2?d*150:d*360:r[0]==="o"&&!f?d:r==="oklab"?d*.4:r==="oklch"?f<2?d*.4:d*360:d;if(r[f]==="h"||f===2&&r[r.length-1]==="h"){if(Hu[d]!==void 0)return Hu[d];if(d.endsWith("deg"))return parseFloat(d);if(d.endsWith("turn"))return parseFloat(d)*360;if(d.endsWith("grad"))return parseFloat(d)*360/400;if(d.endsWith("rad"))return parseFloat(d)*180/Math.PI}return d==="none"?0:parseFloat(d)}),n=t.length>c?t.pop():1}else/[0-9](?:\s|\/|,)/.test(i)&&(t=i.match(/([0-9]+)/g).map(function(d){return parseFloat(d)}),r=((u=(h=i.match(/([a-z])/ig))==null?void 0:h.join(""))==null?void 0:u.toLowerCase())||"rgb");return{space:r,values:t,alpha:n}}const el={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(i){var e=i[0]/360,t=i[1]/100,n=i[2]/100,r,s,o,a,l,c=0;if(t===0)return l=n*255,[l,l,l];for(s=n<.5?n*(1+t):n+t-n*t,r=2*n-s,a=[0,0,0];c<3;)o=e+1/3*-(c-1),o<0?o++:o>1&&o--,l=6*o<1?r+(s-r)*6*o:2*o<1?s:3*o<2?r+(s-r)*(2/3-o)*6:r,a[c++]=l*255;return a}};vs.hsl=function(i){var e=i[0]/255,t=i[1]/255,n=i[2]/255,r=Math.min(e,t,n),s=Math.max(e,t,n),o=s-r,a,l,c;return s===r?a=0:e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:n===s&&(a=4+(e-t)/o),a=Math.min(a*60,360),a<0&&(a+=360),c=(r+s)/2,s===r?l=0:c<=.5?l=o/(s+r):l=o/(2-s-r),[a,l*100,c*100]};function $E(i){Array.isArray(i)&&i.raw&&(i=String.raw(...arguments)),i instanceof Number&&(i=+i);var e,t=KE(i);if(!t.space)return[];const n=t.space[0]==="h"?el.min:vs.min,r=t.space[0]==="h"?el.max:vs.max;return e=Array(3),e[0]=Math.min(Math.max(t.values[0],n[0]),r[0]),e[1]=Math.min(Math.max(t.values[1],n[1]),r[1]),e[2]=Math.min(Math.max(t.values[2],n[2]),r[2]),t.space[0]==="h"&&(e=el.rgb(e)),e.push(Math.min(Math.max(t.alpha,0),1)),e}function JE(i){return typeof i=="string"?i:dc(i)}const QE=1024,Yr={};let tl=0;function eM(i){if(i.length===4)return i;const e=i.slice();return e[3]=1,e}function Wu(i){const e=Ut.lchuv(vs.xyz(i));return e[3]=i[3],e}function tM(i){const e=Ut.rgb(Af.xyz(i));return e[3]=i[3],e}function uc(i){if(Yr.hasOwnProperty(i))return Yr[i];if(tl>=QE){let t=0;for(const n in Yr)t++&3||(delete Yr[n],--tl)}const e=$E(i);if(e.length!==4)throw new Error('Failed to parse "'+i+'" as color');for(const t of e)if(isNaN(t))throw new Error('Failed to parse "'+i+'" as color');return Rf(e),Yr[i]=e,++tl,e}function ys(i){return Array.isArray(i)?i:uc(i)}function Rf(i){return i[0]=Lt(i[0]+.5|0,0,255),i[1]=Lt(i[1]+.5|0,0,255),i[2]=Lt(i[2]+.5|0,0,255),i[3]=Lt(i[3],0,1),i}function dc(i){let e=i[0];e!=(e|0)&&(e=e+.5|0);let t=i[1];t!=(t|0)&&(t=t+.5|0);let n=i[2];n!=(n|0)&&(n=n+.5|0);const r=i[3]===void 0?1:Math.round(i[3]*1e3)/1e3;return"rgba("+e+","+t+","+n+","+r+")"}function nM(i){try{return uc(i),!0}catch{return!1}}const Ei=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",iM=Ei.includes("firefox"),rM=Ei.includes("safari")&&!Ei.includes("chrom");rM&&(Ei.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Ei));const sM=Ei.includes("webkit")&&!Ei.includes("edge"),Cf=Ei.includes("macintosh"),Lf=typeof devicePixelRatio<"u"?devicePixelRatio:1,oM=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Pf=typeof Image<"u"&&Image.prototype.decode,If=function(){let i=!1;try{const e=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return i}();function pn(i,e,t,n){let r;return t&&t.length?r=t.shift():oM?r=new OffscreenCanvas(i||300,e||300):r=document.createElement("canvas"),i&&(r.width=i),e&&(r.height=e),r.getContext("2d",n)}let nl;function Fl(){return nl||(nl=pn(1,1)),nl}function fc(i){const e=i.canvas;e.width=1,e.height=1,i.clearRect(0,0,1,1)}function Xu(i,e){const t=e.parentNode;t&&t.replaceChild(i,e)}function zl(i){return i&&i.parentNode?i.parentNode.removeChild(i):null}function aM(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function lM(i,e){const t=i.childNodes;for(let n=0;;++n){const r=t[n],s=e[n];if(!r&&!s)break;if(r!==s){if(!r){i.appendChild(s);continue}if(!s){i.removeChild(r),--n;continue}i.insertBefore(s,r)}}}function cM(i,e,t){const n=i;let r=!0,s=!1,o=!1;const a=[Uo(n,Ye.LOAD,function(){o=!0,s||e()})];return n.src&&Pf?(s=!0,n.decode().then(function(){r&&e()}).catch(function(l){r&&(o?e():t())})):a.push(Uo(n,Ye.ERROR,t)),function(){r=!1,a.forEach(vt)}}function hM(i,e){return new Promise((t,n)=>{function r(){o(),t(i)}function s(){o(),n(new Error("Image load error"))}function o(){i.removeEventListener("load",r),i.removeEventListener("error",s)}i.addEventListener("load",r),i.addEventListener("error",s),e&&(i.src=e)})}function uM(i,e){return e&&(i.src=e),i.src&&Pf?new Promise((t,n)=>i.decode().then(()=>t(i)).catch(r=>i.complete&&i.width?t(i):n(r))):hM(i)}class dM{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const t in this.cache_){const n=this.cache_[t];!(e++&3)&&!n.hasListener()&&(delete this.cache_[t],delete this.patternCache_[t],--this.cacheSize_)}}}get(e,t,n){const r=il(e,t,n);return r in this.cache_?this.cache_[r]:null}getPattern(e,t,n){const r=il(e,t,n);return r in this.patternCache_?this.patternCache_[r]:null}set(e,t,n,r,s){const o=il(e,t,n),a=o in this.cache_;this.cache_[o]=r,s&&(r.getImageState()===Qe.IDLE&&r.load(),r.getImageState()===Qe.LOADING?r.ready().then(()=>{this.patternCache_[o]=Fl().createPattern(r.getImage(1),"repeat")}):this.patternCache_[o]=Fl().createPattern(r.getImage(1),"repeat")),a||++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function il(i,e,t){const n=t?ys(t):"null";return e+":"+i+":"+n}const Pn=new dM;let qr=null;class fM extends ea{constructor(e,t,n,r,s){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=n,this.canvas_={},this.color_=s,this.imageState_=r===void 0?Qe.IDLE:r,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===Qe.LOADED){qr||(qr=pn(1,1,void 0,{willReadFrequently:!0})),qr.drawImage(this.image_,0,0);try{qr.getImageData(0,0,1,1),this.tainted_=!1}catch{qr=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(Ye.CHANGE)}handleImageError_(){this.imageState_=Qe.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=Qe.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const e=this.size_[0],t=this.size_[1],n=pn(e,t);n.fillRect(0,0,e,t),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===Qe.IDLE){this.image_||this.initializeImage_(),this.imageState_=Qe.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&uM(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==Qe.LOADED)return;const t=this.image_,n=document.createElement("canvas");n.width=Math.ceil(t.width*e),n.height=Math.ceil(t.height*e);const r=n.getContext("2d");r.scale(e,e),r.drawImage(t,0,0),r.globalCompositeOperation="multiply",r.fillStyle=JE(this.color_),r.fillRect(0,0,n.width/e,n.height/e),r.globalCompositeOperation="destination-in",r.drawImage(t,0,0),this.canvas_[e]=n}ready(){return this.ready_||(this.ready_=new Promise(e=>{this.imageState_===Qe.LOADED||this.imageState_===Qe.ERROR?e():this.addEventListener(Ye.CHANGE,function t(){(this.imageState_===Qe.LOADED||this.imageState_===Qe.ERROR)&&(this.removeEventListener(Ye.CHANGE,t),e())})})),this.ready_}}function pc(i,e,t,n,r,s){let o=e===void 0?void 0:Pn.get(e,t,r);return o||(o=new fM(i,i instanceof HTMLImageElement?i.src||void 0:e,t,n,r),Pn.set(e,t,r,o,s)),s&&o&&!Pn.getPattern(e,t,r)&&Pn.set(e,t,r,o,s),o}class mc{constructor(e){e=e||{},this.patternImage_=null,this.color_=null,e.color!==void 0&&this.setColor(e.color)}clone(){const e=this.getColor();return new mc({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){if(e!==null&&typeof e=="object"&&"src"in e){const t=pc(null,e.src,"anonymous",void 0,e.offset?null:e.color?e.color:null,!(e.offset&&e.size));t.ready().then(()=>{this.patternImage_=null}),t.getImageState()===Qe.IDLE&&t.load(),t.getImageState()===Qe.LOADING&&(this.patternImage_=t)}this.color_=e}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}}const gc=mc;class _c{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}clone(){const e=this.getColor();return new _c({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setWidth(e){this.width_=e}}const Df=_c;function Yu(i){return i[0]>0&&i[1]>0}function pM(i,e,t){return t===void 0&&(t=[0,0]),t[0]=i[0]*e+.5|0,t[1]=i[1]*e+.5|0,t}function sn(i,e){return Array.isArray(i)?i:(e===void 0?e=[i,i]:(e[0]=i,e[1]=i),e)}class vc{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=sn(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new vc({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return tt()}getImage(e){return tt()}getHitDetectionImage(){return tt()}getPixelRatio(e){return 1}getImageState(){return tt()}getImageSize(){return tt()}getOrigin(){return tt()}getSize(){return tt()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=sn(e)}listenImageChange(e){tt()}load(){tt()}unlistenImageChange(e){tt()}ready(){return Promise.resolve()}}const Nf=vc;function qu(i){return i?Array.isArray(i)?dc(i):typeof i=="object"&&"src"in i?mM(i):i:null}function mM(i){if(!i.offset||!i.size)return Pn.getPattern(i.src,"anonymous",i.color);const e=i.src+":"+i.offset,t=Pn.getPattern(e,void 0,i.color);if(t)return t;const n=Pn.get(i.src,"anonymous",null);if(n.getImageState()!==Qe.LOADED)return null;const r=pn(i.size[0],i.size[1]);return r.drawImage(n.getImage(1),i.offset[0],i.offset[1],i.size[0],i.size[1],0,0,i.size[0],i.size[1]),pc(r.canvas,e,void 0,Qe.LOADED,i.color,!0),Pn.getPattern(e,void 0,i.color)}const _o="ol-hidden",Cs="ol-unselectable",yc="ol-control",Zu="ol-collapsed",ju="#000",Ku="round",$u="round",gM=10,_M="#000",vM=1,yM=new Qn;class xc extends Nf{constructor(e){super({opacity:1,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius_=e.radius,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?Qe.LOADING:Qe.LOADED,this.imageState_===Qe.LOADING&&this.ready().then(()=>this.imageState_=Qe.LOADED),this.render()}clone(){const e=this.getScale(),t=new xc({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}getAnchor(){const e=this.size_,t=this.getDisplacement(),n=this.getScaleArray();return[e[0]/2-t[0]/n[0],e[1]/2+t[1]/n[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let t=this.canvases_[e];if(!t){const n=this.renderOptions_,r=pn(n.size*e,n.size*e);this.draw_(n,r,e),t=r.canvas,this.canvases_[e]=t}return t}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,n){if(t===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return t;let r=this.radius_,s=this.radius2_===void 0?r:this.radius2_;if(r<s){const R=r;r=s,s=R}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=s*Math.sin(a),c=Math.sqrt(s*s-l*l),h=r-c,u=Math.sqrt(l*l+h*h),d=u/l;if(e==="miter"&&d<=n)return d*t;const f=t/2/d,g=t/2*(h/u),m=Math.sqrt((r+f)*(r+f)+g*g)-r;if(this.radius2_===void 0||e==="bevel")return m*2;const p=r*Math.sin(a),y=Math.sqrt(r*r-p*p),v=s-y,S=Math.sqrt(p*p+v*v)/p;if(S<=n){const R=S*t/2-s-r;return 2*Math.max(m,R)}return m*2}createRenderOptions(){let e=Ku,t=$u,n=0,r=null,s=0,o,a=0;this.stroke_&&(o=qu(this.stroke_.getColor()??_M),a=this.stroke_.getWidth()??vM,r=this.stroke_.getLineDash(),s=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??$u,e=this.stroke_.getLineCap()??Ku,n=this.stroke_.getMiterLimit()??gM);const l=this.calculateLineJoinSize_(t,a,n),c=Math.max(this.radius_,this.radius2_||0),h=Math.ceil(2*c+l);return{strokeStyle:o,strokeWidth:a,size:h,lineCap:e,lineDash:r,lineDashOffset:s,lineJoin:t,miterLimit:n}}render(){this.renderOptions_=this.createRenderOptions();const e=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,n){if(t.scale(n,n),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let r=this.fill_.getColor();r===null&&(r=ju),t.fillStyle=qu(r),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let n=this.fill_.getColor(),r=0;typeof n=="string"&&(n=ys(n)),n===null?r=1:Array.isArray(n)&&(r=n.length===4?n[3]:1),r===0&&(t=pn(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_;const n=this.radius_;if(t===1/0)e.arc(0,0,n,0,2*Math.PI);else{const r=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(t*=2);const s=this.angle_-Math.PI/2,o=2*Math.PI/t;for(let a=0;a<t;a++){const l=s+a*o,c=a%2===0?n:r;e.lineTo(c*Math.cos(l),c*Math.sin(l))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=ju,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}}const Of=xc;class Ec extends Of{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){const e=this.getScale(),t=new Ec({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}setRadius(e){this.radius_=e,this.render()}}const Uf=Ec;class aa{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=Ju,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new aa({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=Ju,this.geometry_=e}setZIndex(e){this.zIndex_=e}}function xM(i){let e;if(typeof i=="function")e=i;else{let t;Array.isArray(i)?t=i:(ot(typeof i.getZIndex=="function","Expected an `Style` or an array of `Style`"),t=[i]),e=function(){return t}}return e}let rl=null;function EM(i,e){if(!rl){const t=new gc({color:"rgba(255,255,255,0.4)"}),n=new Df({color:"#3399CC",width:1.25});rl=[new aa({image:new Uf({fill:t,stroke:n,radius:5}),fill:t,stroke:n})]}return rl}function Ju(i){return i.getGeometry()}const Ao=aa,MM="#333";class Mc{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=sn(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new gc({color:MM}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Mc({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=sn(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}}const SM=Mc,rt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class TM extends Qn{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[rt.OPACITY]=e.opacity!==void 0?e.opacity:1,ot(typeof t[rt.OPACITY]=="number","Layer opacity must be a number"),t[rt.VISIBLE]=e.visible!==void 0?e.visible:!0,t[rt.Z_INDEX]=e.zIndex,t[rt.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[rt.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[rt.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[rt.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const t=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return t.opacity=Lt(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return tt()}getLayerStatesArray(e){return tt()}getExtent(){return this.get(rt.EXTENT)}getMaxResolution(){return this.get(rt.MAX_RESOLUTION)}getMinResolution(){return this.get(rt.MIN_RESOLUTION)}getMinZoom(){return this.get(rt.MIN_ZOOM)}getMaxZoom(){return this.get(rt.MAX_ZOOM)}getOpacity(){return this.get(rt.OPACITY)}getSourceState(){return tt()}getVisible(){return this.get(rt.VISIBLE)}getZIndex(){return this.get(rt.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(rt.EXTENT,e)}setMaxResolution(e){this.set(rt.MAX_RESOLUTION,e)}setMinResolution(e){this.set(rt.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(rt.MAX_ZOOM,e)}setMinZoom(e){this.set(rt.MIN_ZOOM,e)}setOpacity(e){ot(typeof e=="number","Layer opacity must be a number"),this.set(rt.OPACITY,e)}setVisible(e){this.set(rt.VISIBLE,e)}setZIndex(e){this.set(rt.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Ff=TM,cn={ANIMATING:0,INTERACTING:1},_n={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},wM=42,Sc=256;function Qu(i,e,t){return function(n,r,s,o,a){if(!n)return;if(!r&&!e)return n;const l=e?0:s[0]*r,c=e?0:s[1]*r,h=a?a[0]:0,u=a?a[1]:0;let d=i[0]+l/2+h,f=i[2]-l/2+h,g=i[1]+c/2+u,_=i[3]-c/2+u;d>f&&(d=(f+d)/2,f=d),g>_&&(g=(_+g)/2,_=g);let m=Lt(n[0],d,f),p=Lt(n[1],g,_);if(o&&t&&r){const y=30*r;m+=-y*Math.log(1+Math.max(0,d-n[0])/y)+y*Math.log(1+Math.max(0,n[0]-f)/y),p+=-y*Math.log(1+Math.max(0,g-n[1])/y)+y*Math.log(1+Math.max(0,n[1]-_)/y)}return[m,p]}}function bM(i){return i}function Tc(i,e,t,n){const r=St(e)/t[0],s=fn(e)/t[1];return n?Math.min(i,Math.max(r,s)):Math.min(i,Math.min(r,s))}function wc(i,e,t){let n=Math.min(i,e);const r=50;return n*=Math.log(1+r*Math.max(0,i/e-1))/r+1,t&&(n=Math.max(n,t),n/=Math.log(1+r*Math.max(0,t/i-1))/r+1),Lt(n,t/2,e*2)}function AM(i,e,t,n){return e=e!==void 0?e:!0,function(r,s,o,a){if(r!==void 0){const l=i[0],c=i[i.length-1],h=t?Tc(l,t,o,n):l;if(a)return e?wc(r,h,c):Lt(r,c,h);const u=Math.min(h,r),d=Math.floor(nc(i,u,s));return i[d]>h&&d<i.length-1?i[d+1]:i[d]}}}function RM(i,e,t,n,r,s){return n=n!==void 0?n:!0,t=t!==void 0?t:0,function(o,a,l,c){if(o!==void 0){const h=r?Tc(e,r,l,s):e;if(c)return n?wc(o,h,t):Lt(o,t,h);const u=1e-9,d=Math.ceil(Math.log(e/h)/Math.log(i)-u),f=-a*(.5-u)+.5,g=Math.min(h,o),_=Math.floor(Math.log(e/g)/Math.log(i)+f),m=Math.max(d,_),p=e/Math.pow(i,m);return Lt(p,t,h)}}}function ed(i,e,t,n,r){return t=t!==void 0?t:!0,function(s,o,a,l){if(s!==void 0){const c=n?Tc(i,n,a,r):i;return!t||!l?Lt(s,e,c):wc(s,c,e)}}}function bc(i){if(i!==void 0)return 0}function td(i){if(i!==void 0)return i}function CM(i){const e=2*Math.PI/i;return function(t,n){if(n)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t}}function LM(i){const e=i===void 0?bo(5):i;return function(t,n){return n||t===void 0?t:Math.abs(t)<=e?0:t}}function zf(i){return Math.pow(i,3)}function zr(i){return 1-zf(1-i)}function PM(i){return 3*i*i-2*i*i*i}function IM(i){return i}const sl=0;class DM extends Qn{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=oc(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&yE(),e.center&&(e.center=Wn(e.center,this.projection_)),e.extent&&(e.extent=Mr(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const t=Object.assign({},e);for(const a in _n)delete t[a];this.setProperties(t,!0);const n=OM(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;const r=NM(e),s=n.constraint,o=UM(e);this.constraints_={center:r,resolution:s,rotation:o},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;const n=this.getCenterInternal();if(n){const r=e||[0,0,0,0];t=t||[0,0,0,0];const s=this.getResolution(),o=s/2*(r[3]-t[3]+t[1]-r[1]),a=s/2*(r[0]-t[0]+t[2]-r[2]);this.setCenterInternal([n[0]+o,n[1]-a])}}getUpdatedOptions_(e){const t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const t=new Array(arguments.length);for(let n=0;n<t.length;++n){let r=arguments[n];r.center&&(r=Object.assign({},r),r.center=Wn(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=Wn(r.anchor,this.getProjection())),t[n]=r}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]=="function"&&(n=arguments[t-1],--t);let r=0;for(;r<t&&!this.isDef();++r){const h=arguments[r];h.center&&this.setCenterInternal(h.center),h.zoom!==void 0?this.setZoom(h.zoom):h.resolution&&this.setResolution(h.resolution),h.rotation!==void 0&&this.setRotation(h.rotation)}if(r===t){n&&vo(n,!0);return}let s=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const c=[];for(;r<t;++r){const h=arguments[r],u={start:s,complete:!1,anchor:h.anchor,duration:h.duration!==void 0?h.duration:1e3,easing:h.easing||PM,callback:n};if(h.center&&(u.sourceCenter=o,u.targetCenter=h.center.slice(),o=u.targetCenter),h.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(h.zoom),a=u.targetResolution):h.resolution&&(u.sourceResolution=a,u.targetResolution=h.resolution,a=u.targetResolution),h.rotation!==void 0){u.sourceRotation=l;const d=Cr(h.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+d,l=u.targetRotation}FM(u)?u.complete=!0:s+=u.duration,c.push(u)}this.animations_.push(c),this.setHint(cn.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[cn.ANIMATING]>0}getInteracting(){return this.hints_[cn.INTERACTING]>0}cancelAnimations(){this.setHint(cn.ANIMATING,-this.hints_[cn.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){const r=this.animations_[t];if(r[0].callback&&vo(r[0].callback,!1),!e)for(let s=0,o=r.length;s<o;++s){const a=r[s];if(!a.complete){e=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let t=!1;for(let n=this.animations_.length-1;n>=0;--n){const r=this.animations_[n];let s=!0;for(let o=0,a=r.length;o<a;++o){const l=r[o];if(l.complete)continue;const c=e-l.start;let h=l.duration>0?c/l.duration:1;h>=1?(l.complete=!0,h=1):s=!1;const u=l.easing(h);if(l.sourceCenter){const d=l.sourceCenter[0],f=l.sourceCenter[1],g=l.targetCenter[0],_=l.targetCenter[1];this.nextCenter_=l.targetCenter;const m=d+u*(g-d),p=f+u*(_-f);this.targetCenter_=[m,p]}if(l.sourceResolution&&l.targetResolution){const d=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const f=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(d,0,f,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=u===1?Cr(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const f=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(f,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),t=!0,!l.complete)break}if(s){this.animations_[n]=null,this.setHint(cn.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=r[0].callback;o&&vo(o,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n;const r=this.getCenterInternal();return r!==void 0&&(n=[r[0]-t[0],r[1]-t[1]],rc(n,e-this.getRotation()),fE(n,t)),n}calculateCenterZoom(e,t){let n;const r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){const o=t[0]-e*(t[0]-r[0])/s,a=t[1]-e*(t[1]-r[1])/s;n=[o,a]}return n}getViewportSize_(e){const t=this.viewportSize_;if(e){const n=t[0],r=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(r*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(r*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&Ul(e,this.getProjection())}getCenterInternal(){return this.get(_n.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const t=this.calculateExtentInternal(e);return TE(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const t=this.getCenterInternal();ot(t,"The view center is not defined");const n=this.getResolution();ot(n!==void 0,"The view resolution is not defined");const r=this.getRotation();return ot(r!==void 0,"The view rotation is not defined"),Il(t,n,r,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(_n.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Mr(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();const n=St(e)/t[0],r=fn(e)/t[1];return Math.max(n,r)}getResolutionForValueFunction(e){e=e||2;const t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,r=Math.log(t/n)/Math.log(e);return function(s){return t/Math.pow(e,s*r)}}getRotation(){return this.get(_n.ROTATION)}getValueForResolutionFunction(e){const t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(n/r)/t;return function(o){return Math.log(n/o)/t/s}}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e);const n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){const e=this.getProjection(),t=this.getResolution(),n=this.getRotation();let r=this.getCenterInternal();const s=this.padding_;if(s){const o=this.getViewportSizeMinusPadding_();r=ol(r,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],t,n)}return{center:r.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,r;if(this.resolutions_){const s=nc(this.resolutions_,e,1);t=s,n=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=n/this.resolutions_[s+1]}else n=this.maxResolution_,r=this.zoomFactor_;return t+Math.log(n/e)/Math.log(r)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const t=Lt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(n,Lt(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let n;if(ot(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){ot(!oa(e),"Cannot fit empty extent provided as `geometry`");const r=Mr(e,this.getProjection());n=ku(r)}else if(e.getType()==="Circle"){const r=Mr(e.getExtent(),this.getProjection());n=ku(r),n.rotate(this.getRotation(),gs(r))}else n=e;this.fitInternal(n,t)}rotatedExtentForGeometry(e){const t=this.getRotation(),n=Math.cos(t),r=Math.sin(-t),s=e.getFlatCoordinates(),o=e.getStride();let a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u=0,d=s.length;u<d;u+=o){const f=s[u]*n-s[u+1]*r,g=s[u]*r+s[u+1]*n;a=Math.min(a,f),l=Math.min(l,g),c=Math.max(c,f),h=Math.max(h,g)}return[a,l,c,h]}fitInternal(e,t){t=t||{};let n=t.size;n||(n=this.getViewportSizeMinusPadding_());const r=t.padding!==void 0?t.padding:[0,0,0,0],s=t.nearest!==void 0?t.nearest:!1;let o;t.minResolution!==void 0?o=t.minResolution:t.maxZoom!==void 0?o=this.getResolutionForZoom(t.maxZoom):o=0;const a=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(a,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,s?0:1);const c=this.getRotation(),h=Math.sin(c),u=Math.cos(c),d=gs(a);d[0]+=(r[1]-r[3])/2*l,d[1]+=(r[0]-r[2])/2*l;const f=d[0]*u-d[1]*h,g=d[1]*u+d[0]*h,_=this.getConstrainedCenter([f,g],l),m=t.callback?t.callback:Oo;t.duration!==void 0?this.animateInternal({resolution:l,center:_,duration:t.duration,easing:t.easing},m):(this.targetResolution_=l,this.targetCenter_=_,this.applyTargetState_(!1,!0),vo(m,!0))}centerOn(e,t,n){this.centerOnInternal(Wn(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(ol(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,r){let s;const o=this.padding_;if(o&&e){const a=this.getViewportSizeMinusPadding_(-n),l=ol(e,r,[a[0]/2+o[3],a[1]/2+o[0]],t,n);s=[e[0]-l[0],e[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const t=Ul(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){const t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&Wn(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*e,0,r,n);t&&(this.targetCenter_=this.calculateCenterZoom(s,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=Wn(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){const n=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(r,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&Wn(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){const n=this.getAnimating()||this.getInteracting()||t,r=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,0,s,n),a=this.constraints_.center(this.targetCenter_,o,s,n,this.calculateCenterShift(this.targetCenter_,o,r,s));this.get(_n.ROTATION)!==r&&this.set(_n.ROTATION,r),this.get(_n.RESOLUTION)!==o&&(this.set(_n.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(_n.CENTER)||!zo(this.get(_n.CENTER),a))&&this.set(_n.CENTER,a),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e!==void 0?e:200;const r=t||0,s=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(s),a=this.constraints_.resolution(this.targetResolution_,r,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,s,o));if(e===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}n=n||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==s||!this.getCenterInternal()||!zo(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:a,duration:e,easing:zr,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(cn.INTERACTING,1)}endInteraction(e,t,n){n=n&&Wn(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(cn.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){const n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){const n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t=t||0;const n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}}function vo(i,e){setTimeout(function(){i(e)},0)}function NM(i){if(i.extent!==void 0){const t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return Qu(i.extent,i.constrainOnlyCenter,t)}const e=oc(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){const t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,Qu(t,!1,!1)}return bM}function OM(i){let e,t,n,o=i.minZoom!==void 0?i.minZoom:sl,a=i.maxZoom!==void 0?i.maxZoom:28;const l=i.zoomFactor!==void 0?i.zoomFactor:2,c=i.multiWorld!==void 0?i.multiWorld:!1,h=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,u=i.showFullExtent!==void 0?i.showFullExtent:!1,d=oc(i.projection,"EPSG:3857"),f=d.getExtent();let g=i.constrainOnlyCenter,_=i.extent;if(!c&&!_&&d.isGlobal()&&(g=!1,_=f),i.resolutions!==void 0){const m=i.resolutions;t=m[o],n=m[a]!==void 0?m[a]:m[m.length-1],i.constrainResolution?e=AM(m,h,!g&&_,u):e=ed(t,n,h,!g&&_,u)}else{const p=(f?Math.max(St(f),fn(f)):360*Or.degrees/d.getMetersPerUnit())/Sc/Math.pow(2,sl),y=p/Math.pow(2,28-sl);t=i.maxResolution,t!==void 0?o=0:t=p/Math.pow(l,o),n=i.minResolution,n===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?n=t/Math.pow(l,a):n=p/Math.pow(l,a):n=y),a=o+Math.floor(Math.log(t/n)/Math.log(l)),n=t/Math.pow(l,a-o),i.constrainResolution?e=RM(l,t,n,h,!g&&_,u):e=ed(t,n,h,!g&&_,u)}return{constraint:e,maxResolution:t,minResolution:n,minZoom:o,zoomFactor:l}}function UM(i){if(i.enableRotation!==void 0?i.enableRotation:!0){const t=i.constrainRotation;return t===void 0||t===!0?LM():t===!1?td:typeof t=="number"?CM(t):td}return bc}function FM(i){return!(i.sourceCenter&&i.targetCenter&&!zo(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function ol(i,e,t,n,r){const s=Math.cos(-r);let o=Math.sin(-r),a=i[0]*s-i[1]*o,l=i[1]*s+i[0]*o;a+=(e[0]/2-t[0])*n,l+=(t[1]-e[1]/2)*n,o=-o;const c=a*s-l*o,h=l*s+a*o;return[c,h]}const qn=DM;class zM extends Ff{constructor(e){const t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(rt.SOURCE,this.handleSourcePropertyChange_);const n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(rt.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(vt(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=st(e,Ye.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t;const n=this.getMapInternal();!e&&n&&(e=n.getView()),e instanceof qn?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let r;t.layerStatesArray?r=t.layerStatesArray.find(o=>o.layer===this):r=this.getLayerState();const s=this.getExtent();return Ac(r,t.viewState)&&(!s||As(s,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t;const n=this.getSource();if(n&&(t=n.getAttributions()),!t)return[];const r=e instanceof qn?e.getViewStateAndExtent():e;let s=t(r);return Array.isArray(s)||(s=[s]),s}render(e,t){const n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(e,t){}renderDeferred(e){const t=this.getRenderer();t&&t.renderDeferred(e)}setMapInternal(e){e||this.unrender(),this.set(rt.MAP,e)}getMapInternal(){return this.get(rt.MAP)}setMap(e){this.mapPrecomposeKey_&&(vt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(vt(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=st(e,Ln.PRECOMPOSE,function(t){const r=t.frameState.layerStatesArray,s=this.getLayerState(!1);ot(!r.some(function(o){return o.layer===s.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),r.push(s)},this),this.mapRenderKey_=st(this,Ye.CHANGE,e.render,e),this.changed())}setSource(e){this.set(rt.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function Ac(i,e){if(!i.visible)return!1;const t=e.resolution;if(t<i.minResolution||t>=i.maxResolution)return!1;const n=e.zoom;return n>i.minZoom&&n<=i.maxZoom}const la=zM;function BM(i,e,t,n,r){Bf(i,e,t||0,n||i.length-1,r||GM)}function Bf(i,e,t,n,r){for(;n>t;){if(n-t>600){var s=n-t+1,o=e-t+1,a=Math.log(s),l=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*l*(s-l)/s)*(o-s/2<0?-1:1),h=Math.max(t,Math.floor(e-o*l/s+c)),u=Math.min(n,Math.floor(e+(s-o)*l/s+c));Bf(i,e,h,u,r)}var d=i[e],f=t,g=n;for(Zr(i,t,e),r(i[n],d)>0&&Zr(i,t,n);f<g;){for(Zr(i,f,g),f++,g--;r(i[f],d)<0;)f++;for(;r(i[g],d)>0;)g--}r(i[t],d)===0?Zr(i,t,g):(g++,Zr(i,g,n)),g<=e&&(t=g+1),e<=g&&(n=g-1)}}function Zr(i,e,t){var n=i[e];i[e]=i[t],i[t]=n}function GM(i,e){return i<e?-1:i>e?1:0}class kM{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data;const n=[];if(!xo(e,t))return n;const r=this.toBBox,s=[];for(;t;){for(let o=0;o<t.children.length;o++){const a=t.children[o],l=t.leaf?r(a):a;xo(e,l)&&(t.leaf?n.push(a):ll(e,l)?this._all(a,n):s.push(a))}t=s.pop()}return n}collides(e){let t=this.data;if(!xo(e,t))return!1;const n=[];for(;t;){for(let r=0;r<t.children.length;r++){const s=t.children[r],o=t.leaf?this.toBBox(s):s;if(xo(e,o)){if(t.leaf||ll(e,o))return!0;n.push(s)}}t=n.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let n=0;n<e.length;n++)this.insert(e[n]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const n=this.data;this.data=t,t=n}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=gr([]),this}remove(e,t){if(!e)return this;let n=this.data;const r=this.toBBox(e),s=[],o=[];let a,l,c;for(;n||s.length;){if(n||(n=s.pop(),l=s[s.length-1],a=o.pop(),c=!0),n.leaf){const h=VM(e,n.children,t);if(h!==-1)return n.children.splice(h,1),s.push(n),this._condense(s),this}!c&&!n.leaf&&ll(n,r)?(s.push(n),o.push(a),a=0,l=n,n=n.children[0]):l?(a++,n=l.children[a],c=!1):n=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){const n=[];for(;e;)e.leaf?t.push(...e.children):n.push(...e.children),e=n.pop();return t}_build(e,t,n,r){const s=n-t+1;let o=this._maxEntries,a;if(s<=o)return a=gr(e.slice(t,n+1)),ur(a,this.toBBox),a;r||(r=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,r-1))),a=gr([]),a.leaf=!1,a.height=r;const l=Math.ceil(s/o),c=l*Math.ceil(Math.sqrt(o));nd(e,t,n,c,this.compareMinX);for(let h=t;h<=n;h+=c){const u=Math.min(h+c-1,n);nd(e,h,u,l,this.compareMinY);for(let d=h;d<=u;d+=l){const f=Math.min(d+l-1,u);a.children.push(this._build(e,d,f,r-1))}}return ur(a,this.toBBox),a}_chooseSubtree(e,t,n,r){for(;r.push(t),!(t.leaf||r.length-1===n);){let s=1/0,o=1/0,a;for(let l=0;l<t.children.length;l++){const c=t.children[l],h=al(c),u=XM(e,c)-h;u<o?(o=u,s=h<s?h:s,a=c):u===o&&h<s&&(s=h,a=c)}t=a||t.children[0]}return t}_insert(e,t,n){const r=n?e:this.toBBox(e),s=[],o=this._chooseSubtree(r,this.data,t,s);for(o.children.push(e),Qr(o,r);t>=0&&s[t].children.length>this._maxEntries;)this._split(s,t),t--;this._adjustParentBBoxes(r,s,t)}_split(e,t){const n=e[t],r=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,r);const o=this._chooseSplitIndex(n,s,r),a=gr(n.children.splice(o,n.children.length-o));a.height=n.height,a.leaf=n.leaf,ur(n,this.toBBox),ur(a,this.toBBox),t?e[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=gr([e,t]),this.data.height=e.height+1,this.data.leaf=!1,ur(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let r,s=1/0,o=1/0;for(let a=t;a<=n-t;a++){const l=Jr(e,0,a,this.toBBox),c=Jr(e,a,n,this.toBBox),h=YM(l,c),u=al(l)+al(c);h<s?(s=h,r=a,o=u<o?u:o):h===s&&u<o&&(o=u,r=a)}return r||n-t}_chooseSplitAxis(e,t,n){const r=e.leaf?this.compareMinX:HM,s=e.leaf?this.compareMinY:WM,o=this._allDistMargin(e,t,n,r),a=this._allDistMargin(e,t,n,s);o<a&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);const s=this.toBBox,o=Jr(e,0,t,s),a=Jr(e,n-t,n,s);let l=yo(o)+yo(a);for(let c=t;c<n-t;c++){const h=e.children[c];Qr(o,e.leaf?s(h):h),l+=yo(o)}for(let c=n-t-1;c>=t;c--){const h=e.children[c];Qr(a,e.leaf?s(h):h),l+=yo(a)}return l}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)Qr(t[r],e)}_condense(e){for(let t=e.length-1,n;t>=0;t--)e[t].children.length===0?t>0?(n=e[t-1].children,n.splice(n.indexOf(e[t]),1)):this.clear():ur(e[t],this.toBBox)}}function VM(i,e,t){if(!t)return e.indexOf(i);for(let n=0;n<e.length;n++)if(t(i,e[n]))return n;return-1}function ur(i,e){Jr(i,0,i.children.length,e,i)}function Jr(i,e,t,n,r){r||(r=gr(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s=e;s<t;s++){const o=i.children[s];Qr(r,i.leaf?n(o):o)}return r}function Qr(i,e){return i.minX=Math.min(i.minX,e.minX),i.minY=Math.min(i.minY,e.minY),i.maxX=Math.max(i.maxX,e.maxX),i.maxY=Math.max(i.maxY,e.maxY),i}function HM(i,e){return i.minX-e.minX}function WM(i,e){return i.minY-e.minY}function al(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function yo(i){return i.maxX-i.minX+(i.maxY-i.minY)}function XM(i,e){return(Math.max(e.maxX,i.maxX)-Math.min(e.minX,i.minX))*(Math.max(e.maxY,i.maxY)-Math.min(e.minY,i.minY))}function YM(i,e){const t=Math.max(i.minX,e.minX),n=Math.max(i.minY,e.minY),r=Math.min(i.maxX,e.maxX),s=Math.min(i.maxY,e.maxY);return Math.max(0,r-t)*Math.max(0,s-n)}function ll(i,e){return i.minX<=e.minX&&i.minY<=e.minY&&e.maxX<=i.maxX&&e.maxY<=i.maxY}function xo(i,e){return e.minX<=i.maxX&&e.minY<=i.maxY&&e.maxX>=i.minX&&e.maxY>=i.minY}function gr(i){return{children:i,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function nd(i,e,t,n,r){const s=[e,t];for(;s.length;){if(t=s.pop(),e=s.pop(),t-e<=n)continue;const o=e+Math.ceil((t-e)/n/2)*n;BM(i,o,e,t,r),s.push(e,o,o,t)}}function id(i,e,t,n){return t!==void 0&&n!==void 0?[t/i,n/e]:t!==void 0?t/i:n!==void 0?n/e:1}class Rc extends Nf{constructor(e){e=e||{};const t=e.opacity!==void 0?e.opacity:1,n=e.rotation!==void 0?e.rotation:0,r=e.scale!==void 0?e.scale:1,s=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:t,rotation:n,scale:r,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:s,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null;const o=e.img!==void 0?e.img:null;let a=e.src;ot(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||qt(o)),ot(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),ot(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(e.src!==void 0?l=Qe.IDLE:o!==void 0&&(o instanceof HTMLImageElement?o.complete?l=o.src?Qe.LOADED:Qe.IDLE:l=Qe.LOADING:l=Qe.LOADED),this.color_=e.color!==void 0?ys(e.color):null,this.iconImage_=pc(o,a,this.crossOrigin_,l,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,e.width!==void 0||e.height!==void 0){let c,h;if(e.size)[c,h]=e.size;else{const u=this.getImage(1);if(u.width&&u.height)c=u.width,h=u.height;else if(u instanceof HTMLImageElement){this.initialOptions_=e;const d=()=>{if(this.unlistenImageChange(d),!this.initialOptions_)return;const f=this.iconImage_.getSize();this.setScale(id(f[0],f[1],e.width,e.height))};this.listenImageChange(d);return}}c!==void 0&&this.setScale(id(c,h,e.width,e.height))}}clone(){let e,t,n;return this.initialOptions_?(t=this.initialOptions_.width,n=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new Rc({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:t,height:n,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;const r=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!r)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=r[0]),this.anchorYUnits_=="fraction"&&(e[1]*=r[1])}if(this.anchorOrigin_!="top-left"){if(!r)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+r[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+r[1])}this.normalizedAnchor_=e}const t=this.getDisplacement(),n=this.getScaleArray();return[e[0]-t[0]/n[0],e[1]+t[1]/n[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){const t=this.getSize(),n=this.iconImage_.getSize();if(!t||!n)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=n[0]-t[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=n[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==Qe.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){const e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==Qe.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(Ye.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(Ye.CHANGE,e)}ready(){return this.iconImage_.ready()}}const qM=Rc;let Br=0;const Gr=0,ft=1<<Br++,Ce=1<<Br++,rn=1<<Br++,Ct=1<<Br++,Jn=1<<Br++,Bt=Math.pow(2,Br)-1,Gf={[ft]:"boolean",[Ce]:"number",[rn]:"string",[Ct]:"color",[Jn]:"number[]"},ZM=Object.keys(Gf).map(Number).sort(Ko);function kt(i){const e=[];for(const t of ZM)jM(i,t)&&e.push(Gf[t]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function jM(i,e){return(i&e)===e}function Dn(i,e){return!!(i&e)}function ca(i,e){return i===e}class mi{constructor(e,t){this.type=e,this.value=t}}class KM{constructor(e,t,...n){this.type=e,this.operator=t,this.args=n}}function kf(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,style:{}}}function $M(i){switch(i){case"string":return rn;case"color":return Ct;case"number":return Ce;case"boolean":return ft;case"number[]":return Jn;default:throw new Error(`Unrecognized type hint: ${i}`)}}function nt(i,e,t){switch(typeof i){case"boolean":return new mi(ft,i);case"number":return new mi(Ce,i);case"string":{let r=rn;return nM(i)&&(r|=Ct),ca(r&t,Gr)||(r&=t),new mi(r,i)}}if(!Array.isArray(i))throw new Error("Expression must be an array or a primitive value");if(i.length===0)throw new Error("Empty expression");if(typeof i[0]=="string")return cS(i,e,t);for(const r of i)if(typeof r!="number")throw new Error("Expected an array of numbers");let n=Jn;return(i.length===3||i.length===4)&&(n|=Ct),t&&(n&=t),new mi(n,i)}const j={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string"},JM={[j.Get]:Ve(([i,e])=>e!==void 0?$M(e.value):Bt,We(1,2),QM),[j.Var]:Ve(([i])=>i.type,We(1,1),eS),[j.Id]:Ve(Ce|rn,jr,tS),[j.Concat]:Ve(rn,We(2,1/0),et(Bt)),[j.GeometryType]:Ve(rn,jr,nS),[j.Resolution]:Ve(Ce,jr),[j.Zoom]:Ve(Ce,jr),[j.Time]:Ve(Ce,jr),[j.Any]:Ve(ft,We(2,1/0),et(ft)),[j.All]:Ve(ft,We(2,1/0),et(ft)),[j.Not]:Ve(ft,We(1,1),et(ft)),[j.Equal]:Ve(ft,We(2,2),et(Bt),oi),[j.NotEqual]:Ve(ft,We(2,2),et(Bt),oi),[j.GreaterThan]:Ve(ft,We(2,2),et(Bt),oi),[j.GreaterThanOrEqualTo]:Ve(ft,We(2,2),et(Bt),oi),[j.LessThan]:Ve(ft,We(2,2),et(Bt),oi),[j.LessThanOrEqualTo]:Ve(ft,We(2,2),et(Bt),oi),[j.Multiply]:Ve(i=>{let e=Ce|Ct;for(let t=0;t<i.length;t++)e&=i[t].type;return e},We(2,1/0),et(Ce|Ct),oi),[j.Coalesce]:Ve(i=>{let e=Bt;for(let t=1;t<i.length;t+=2)e&=i[t].type;return e&=i[i.length-1].type,e},We(2,1/0),et(Bt),oi),[j.Divide]:Ve(Ce,We(2,2),et(Ce)),[j.Add]:Ve(Ce,We(2,1/0),et(Ce)),[j.Subtract]:Ve(Ce,We(2,2),et(Ce)),[j.Clamp]:Ve(Ce,We(3,3),et(Ce)),[j.Mod]:Ve(Ce,We(2,2),et(Ce)),[j.Pow]:Ve(Ce,We(2,2),et(Ce)),[j.Abs]:Ve(Ce,We(1,1),et(Ce)),[j.Floor]:Ve(Ce,We(1,1),et(Ce)),[j.Ceil]:Ve(Ce,We(1,1),et(Ce)),[j.Round]:Ve(Ce,We(1,1),et(Ce)),[j.Sin]:Ve(Ce,We(1,1),et(Ce)),[j.Cos]:Ve(Ce,We(1,1),et(Ce)),[j.Atan]:Ve(Ce,We(1,2),et(Ce)),[j.Sqrt]:Ve(Ce,We(1,1),et(Ce)),[j.Match]:Ve(i=>{let e=Bt;for(let t=2;t<i.length;t+=2)e&=i[t].type;return e&=i[i.length-1].type,e},We(4,1/0),rd,rS),[j.Between]:Ve(ft,We(3,3),et(Ce)),[j.Interpolate]:Ve(i=>{let e=Ct|Ce;for(let t=3;t<i.length;t+=2)e&=i[t].type;return e},We(6,1/0),rd,sS),[j.Case]:Ve(i=>{let e=Bt;for(let t=1;t<i.length;t+=2)e&=i[t].type;return e&=i[i.length-1].type,e},We(3,1/0),iS,oS),[j.In]:Ve(ft,We(2,2),aS),[j.Number]:Ve(Ce,We(1,1/0),et(Bt)),[j.String]:Ve(rn,We(1,1/0),et(Bt)),[j.Array]:Ve(i=>i.length===3||i.length===4?Jn|Ct:Jn,We(1,1/0),et(Ce)),[j.Color]:Ve(Ct,We(1,4),et(Ce)),[j.Band]:Ve(Ce,We(1,3),et(Ce)),[j.Palette]:Ve(Ct,We(2,2),lS),[j.ToString]:Ve(rn,We(1,1),et(ft|Ce|rn|Ct))};function QM(i,e){const t=nt(i[1],e);if(!(t instanceof mi))throw new Error("Expected a literal argument for get operation");if(typeof t.value!="string")throw new Error("Expected a string argument for get operation");if(e.properties.add(t.value),i.length===3){const n=nt(i[2],e);return[t,n]}return[t]}function eS(i,e,t,n){const r=i[1];if(typeof r!="string")throw new Error("Expected a string argument for var operation");if(e.variables.add(r),!("variables"in e.style)||e.style.variables[r]===void 0)return[new mi(Bt,r)];const s=e.style.variables[r],o=nt(s,e);if(o.value=r,n&&!Dn(n,o.type))throw new Error(`The variable ${r} has type ${kt(o.type)} but the following type was expected: ${kt(n)}`);return[o]}function tS(i,e){e.featureId=!0}function nS(i,e){e.geometryType=!0}function jr(i,e){const t=i[0];if(i.length!==1)throw new Error(`Expected no arguments for ${t} operation`);return[]}function We(i,e){return function(t,n){const r=t[0],s=t.length-1;if(i===e){if(s!==i){const o=i===1?"":"s";throw new Error(`Expected ${i} argument${o} for ${r}, got ${s}`)}}else if(s<i||s>e){const o=e===1/0?`${i} or more`:`${i} to ${e}`;throw new Error(`Expected ${o} arguments for ${r}, got ${s}`)}}}function et(i){return function(e,t){const n=e[0],r=e.length-1,s=new Array(r);for(let o=0;o<r;++o){const a=nt(e[o+1],t);if(!Dn(i,a.type)){const l=kt(i),c=kt(a.type);throw new Error(`Unexpected type for argument ${o} of ${n} operation, got ${l} but expected ${c}`)}a.type&=i,s[o]=a}return s}}function oi(i,e,t){const n=i[0],r=i.length-1;let s=Bt;for(let a=0;a<t.length;++a)s&=t[a].type;if(s===Gr)throw new Error(`No common type could be found for arguments of ${n} operation`);const o=new Array(r);for(let a=0;a<r;++a)o[a]=nt(i[a+1],e,s);return o}function iS(i,e){const t=i[0],n=i.length-1;if(n%2===0)throw new Error(`An odd amount of arguments was expected for operation ${t}, got ${JSON.stringify(n)} instead`)}function rd(i,e){const t=i[0],n=i.length-1;if(n%2===1)throw new Error(`An even amount of arguments was expected for operation ${t}, got ${JSON.stringify(n)} instead`)}function rS(i,e,t,n){const r=i.length-1;let o=nt(i[1],e).type;const a=nt(i[i.length-1],e);let l=n!==void 0?n&a.type:a.type;const c=new Array(r-2);for(let u=0;u<r-2;u+=2){const d=nt(i[u+2],e),f=nt(i[u+3],e);o&=d.type,l&=f.type,c[u]=d,c[u+1]=f}const h=rn|Ce|ft;if(!Dn(h,o))throw new Error(`Expected an input of type ${kt(h)} for the interpolate operation, got ${kt(o)} instead`);if(ca(l,Gr))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(i));for(let u=0;u<r-2;u+=2){const d=nt(i[u+2],e,o),f=nt(i[u+3],e,l);c[u]=d,c[u+1]=f}return[nt(i[1],e,o),...c,nt(i[i.length-1],e,l)]}function sS(i,e,t,n){const r=i[1];let s;switch(r[0]){case"linear":s=1;break;case"exponential":if(s=r[1],typeof s!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`);break;default:s=null}if(!s)throw new Error(`Invalid interpolation type: ${JSON.stringify(r)}`);s=nt(s,e);let o=nt(i[2],e);if(!Dn(Ce,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${kt(o.type)} instead`);o=nt(i[2],e,Ce);const a=new Array(i.length-3);for(let l=0;l<a.length;l+=2){let c=nt(i[l+3],e);if(!Dn(Ce,c.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${kt(c.type)} at position ${l+2} instead`);let h=nt(i[l+4],e);if(!Dn(Ce|Ct,h.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${kt(h.type)} at position ${l+3} instead`);c=nt(i[l+3],e,Ce),h=nt(i[l+4],e,Ce|Ct),a[l]=c,a[l+1]=h}return[s,o,...a]}function oS(i,e,t,n){const r=nt(i[i.length-1],e);let s=n!==void 0?n&r.type:r.type;const o=new Array(i.length-1);for(let a=0;a<o.length-1;a+=2){const l=nt(i[a+1],e),c=nt(i[a+2],e);if(!Dn(ft,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${kt(l.type)} at position ${a} instead`);s&=c.type,o[a]=l,o[a+1]=c}if(ca(s,Gr))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(i));for(let a=0;a<o.length-1;a+=2)o[a+1]=nt(i[a+2],e,s);return o[o.length-1]=nt(i[i.length-1],e,s),o}function aS(i,e){let t=i[2];if(!Array.isArray(t))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof t[0]=="string"){if(t[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(t[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');t=t[1]}let n=rn|Ce;const r=new Array(t.length);for(let o=0;o<r.length;o++){const a=nt(t[o],e);n&=a.type,r[o]=a}if(ca(n,Gr))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(i));return[nt(i[1],e,n),...r]}function lS(i,e){const t=nt(i[1],e,Ce);if(t.type!==Ce)throw new Error(`The first argument of palette must be an number, got ${kt(t.type)} instead`);const n=i[2];if(!Array.isArray(n))throw new Error("The second argument of palette must be an array");const r=new Array(n.length);for(let s=0;s<r.length;s++){const o=nt(n[s],e,Ct);if(!(o instanceof mi))throw new Error(`The palette color at index ${s} must be a literal value`);if(!Dn(o.type,Ct))throw new Error(`The palette color at index ${s} should be of type color, got ${kt(o.type)} instead`);r[s]=o}return[t,...r]}function Ve(i,...e){return function(t,n,r){const s=t[0];let o=[];for(let l=0;l<e.length;l++)o=e[l](t,n,o,r)||o;let a=typeof i=="function"?i(o):i;if(r!==void 0){if(!Dn(a,r))throw new Error(`The following expression was expected to return ${kt(r)}, but returns ${kt(a)} instead: ${JSON.stringify(t)}`);a&=r}if(a===Gr)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(t)}`);return new KM(a,s,...o)}}function cS(i,e,t){const n=i[0],r=JM[n];if(!r)throw new Error(`Unknown operator: ${n}`);return r(i,e,t)}function Vf(i){if(!i)return"";const e=i.getType();switch(e){case"Point":case"LineString":case"Polygon":return e;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return e.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return Vf(i.getGeometries()[0]);default:return""}}function Hf(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function ei(i,e,t){const n=nt(i,t);if(!Dn(e,n.type)){const r=kt(e),s=kt(n.type);throw new Error(`Expected expression to be of type ${r}, got ${s}`)}return Tn(n)}function Tn(i,e){if(i instanceof mi){if(i.type===Ct&&typeof i.value=="string"){const n=uc(i.value);return function(){return n}}return function(){return i.value}}const t=i.operator;switch(t){case j.Number:case j.String:case j.Coalesce:return hS(i);case j.Get:case j.Var:return uS(i);case j.Id:return n=>n.featureId;case j.GeometryType:return n=>n.geometryType;case j.Concat:{const n=i.args.map(r=>Tn(r));return r=>"".concat(...n.map(s=>s(r).toString()))}case j.Resolution:return n=>n.resolution;case j.Any:case j.All:case j.Between:case j.In:case j.Not:return fS(i);case j.Equal:case j.NotEqual:case j.LessThan:case j.LessThanOrEqualTo:case j.GreaterThan:case j.GreaterThanOrEqualTo:return dS(i);case j.Multiply:case j.Divide:case j.Add:case j.Subtract:case j.Clamp:case j.Mod:case j.Pow:case j.Abs:case j.Floor:case j.Ceil:case j.Round:case j.Sin:case j.Cos:case j.Atan:case j.Sqrt:return pS(i);case j.Case:return mS(i);case j.Match:return gS(i);case j.Interpolate:return _S(i);case j.ToString:return vS(i);default:throw new Error(`Unsupported operator ${t}`)}}function hS(i,e){const t=i.operator,n=i.args.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Tn(i.args[s]);switch(t){case j.Coalesce:return s=>{for(let o=0;o<n;++o){const a=r[o](s);if(typeof a<"u"&&a!==null)return a}throw new Error("Expected one of the values to be non-null")};case j.Number:case j.String:return s=>{for(let o=0;o<n;++o){const a=r[o](s);if(typeof a===t)return a}throw new Error(`Expected one of the values to be a ${t}`)};default:throw new Error(`Unsupported assertion operator ${t}`)}}function uS(i,e){const n=i.args[0].value;switch(i.operator){case j.Get:return r=>r.properties[n];case j.Var:return r=>r.variables[n];default:throw new Error(`Unsupported accessor operator ${i.operator}`)}}function dS(i,e){const t=i.operator,n=Tn(i.args[0]),r=Tn(i.args[1]);switch(t){case j.Equal:return s=>n(s)===r(s);case j.NotEqual:return s=>n(s)!==r(s);case j.LessThan:return s=>n(s)<r(s);case j.LessThanOrEqualTo:return s=>n(s)<=r(s);case j.GreaterThan:return s=>n(s)>r(s);case j.GreaterThanOrEqualTo:return s=>n(s)>=r(s);default:throw new Error(`Unsupported comparison operator ${t}`)}}function fS(i,e){const t=i.operator,n=i.args.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Tn(i.args[s]);switch(t){case j.Any:return s=>{for(let o=0;o<n;++o)if(r[o](s))return!0;return!1};case j.All:return s=>{for(let o=0;o<n;++o)if(!r[o](s))return!1;return!0};case j.Between:return s=>{const o=r[0](s),a=r[1](s),l=r[2](s);return o>=a&&o<=l};case j.In:return s=>{const o=r[0](s);for(let a=1;a<n;++a)if(o===r[a](s))return!0;return!1};case j.Not:return s=>!r[0](s);default:throw new Error(`Unsupported logical operator ${t}`)}}function pS(i,e){const t=i.operator,n=i.args.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Tn(i.args[s]);switch(t){case j.Multiply:return s=>{let o=1;for(let a=0;a<n;++a)o*=r[a](s);return o};case j.Divide:return s=>r[0](s)/r[1](s);case j.Add:return s=>{let o=0;for(let a=0;a<n;++a)o+=r[a](s);return o};case j.Subtract:return s=>r[0](s)-r[1](s);case j.Clamp:return s=>{const o=r[0](s),a=r[1](s);if(o<a)return a;const l=r[2](s);return o>l?l:o};case j.Mod:return s=>r[0](s)%r[1](s);case j.Pow:return s=>Math.pow(r[0](s),r[1](s));case j.Abs:return s=>Math.abs(r[0](s));case j.Floor:return s=>Math.floor(r[0](s));case j.Ceil:return s=>Math.ceil(r[0](s));case j.Round:return s=>Math.round(r[0](s));case j.Sin:return s=>Math.sin(r[0](s));case j.Cos:return s=>Math.cos(r[0](s));case j.Atan:return n===2?s=>Math.atan2(r[0](s),r[1](s)):s=>Math.atan(r[0](s));case j.Sqrt:return s=>Math.sqrt(r[0](s));default:throw new Error(`Unsupported numeric operator ${t}`)}}function mS(i,e){const t=i.args.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Tn(i.args[r]);return r=>{for(let s=0;s<t-1;s+=2)if(n[s](r))return n[s+1](r);return n[t-1](r)}}function gS(i,e){const t=i.args.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Tn(i.args[r]);return r=>{const s=n[0](r);for(let o=1;o<t;o+=2)if(s===n[o](r))return n[o+1](r);return n[t-1](r)}}function _S(i,e){const t=i.args.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Tn(i.args[r]);return r=>{const s=n[0](r),o=n[1](r);let a,l;for(let c=2;c<t;c+=2){const h=n[c](r);let u=n[c+1](r);const d=Array.isArray(u);if(d&&(u=eM(u)),h>=o)return c===2?u:d?yS(s,o,a,l,h,u):es(s,o,a,l,h,u);a=h,l=u}return l}}function vS(i,e){const t=i.operator,n=i.args.length,r=new Array(n);for(let s=0;s<n;++s)r[s]=Tn(i.args[s]);switch(t){case j.ToString:return s=>{const o=r[0](s);return i.args[0].type===Ct?dc(o):o.toString()};default:throw new Error(`Unsupported convert operator ${t}`)}}function es(i,e,t,n,r,s){const o=r-t;if(o===0)return n;const a=e-t,l=i===1?a/o:(Math.pow(i,a)-1)/(Math.pow(i,o)-1);return n+l*(s-n)}function yS(i,e,t,n,r,s){if(r-t===0)return n;const a=Wu(n),l=Wu(s);let c=l[2]-a[2];c>180?c-=360:c<-180&&(c+=360);const h=[es(i,e,t,a[0],r,l[0]),es(i,e,t,a[1],r,l[1]),a[2]+es(i,e,t,0,r,c),es(i,e,t,n[3],r,s[3])];return Rf(tM(h))}function xS(i){return!0}function ES(i){const e=kf(),t=MS(i,e),n=Hf();return function(r,s){if(n.properties=r.getPropertiesInternal(),n.resolution=s,e.featureId){const o=r.getId();o!==void 0?n.featureId=o:n.featureId=null}return e.geometryType&&(n.geometryType=Vf(r.getGeometry())),t(n)}}function sd(i){const e=kf(),t=i.length,n=new Array(t);for(let o=0;o<t;++o)n[o]=Bl(i[o],e);const r=Hf(),s=new Array(t);return function(o,a){if(r.properties=o.getPropertiesInternal(),r.resolution=a,e.featureId){const c=o.getId();c!==void 0?r.featureId=c:r.featureId=null}let l=0;for(let c=0;c<t;++c){const h=n[c](r);h&&(s[l]=h,l+=1)}return s.length=l,s}}function MS(i,e){const t=i.length,n=new Array(t);for(let r=0;r<t;++r){const s=i[r],o="filter"in s?ei(s.filter,ft,e):xS;let a;if(Array.isArray(s.style)){const l=s.style.length;a=new Array(l);for(let c=0;c<l;++c)a[c]=Bl(s.style[c],e)}else a=[Bl(s.style,e)];n[r]={filter:o,styles:a}}return function(r){const s=[];let o=!1;for(let a=0;a<t;++a){const l=n[a].filter;if(l(r)&&!(i[a].else&&o)){o=!0;for(const c of n[a].styles){const h=c(r);h&&s.push(h)}}}return s}}function Bl(i,e){const t=xs(i,"",e),n=Es(i,"",e),r=SS(i,e),s=TS(i,e),o=$t(i,"z-index",e);if(!t&&!n&&!r&&!s&&!of(i))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(i));const a=new Ao;return function(l){let c=!0;if(t){const h=t(l);h&&(c=!1),a.setFill(h)}if(n){const h=n(l);h&&(c=!1),a.setStroke(h)}if(r){const h=r(l);h&&(c=!1),a.setText(h)}if(s){const h=s(l);h&&(c=!1),a.setImage(h)}return o&&a.setZIndex(o(l)),c?null:a}}function xs(i,e,t){let n;if(e+"fill-pattern-src"in i?n=RS(i,e+"fill-",t):n=Cc(i,e+"fill-color",t),!n)return null;const r=new gc;return function(s){const o=n(s);return o==="none"?null:(r.setColor(o),r)}}function Es(i,e,t){const n=$t(i,e+"stroke-width",t),r=Cc(i,e+"stroke-color",t);if(!n&&!r)return null;const s=Xn(i,e+"stroke-line-cap",t),o=Xn(i,e+"stroke-line-join",t),a=Wf(i,e+"stroke-line-dash",t),l=$t(i,e+"stroke-line-dash-offset",t),c=$t(i,e+"stroke-miter-limit",t),h=new Df;return function(u){if(r){const d=r(u);if(d==="none")return null;h.setColor(d)}if(n&&h.setWidth(n(u)),s){const d=s(u);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");h.setLineCap(d)}if(o){const d=o(u);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");h.setLineJoin(d)}return a&&h.setLineDash(a(u)),l&&h.setLineDashOffset(l(u)),c&&h.setMiterLimit(c(u)),h}}function SS(i,e){const t="text-",n=Xn(i,t+"value",e);if(!n)return null;const r=xs(i,t,e),s=xs(i,t+"background-",e),o=Es(i,t,e),a=Es(i,t+"background-",e),l=Xn(i,t+"font",e),c=$t(i,t+"max-angle",e),h=$t(i,t+"offset-x",e),u=$t(i,t+"offset-y",e),d=Ms(i,t+"overflow",e),f=Xn(i,t+"placement",e),g=$t(i,t+"repeat",e),_=ha(i,t+"scale",e),m=Ms(i,t+"rotate-with-view",e),p=$t(i,t+"rotation",e),y=Xn(i,t+"align",e),v=Xn(i,t+"justify",e),x=Xn(i,t+"baseline",e),S=Wf(i,t+"padding",e),R=ua(i,t+"declutter-mode"),T=new SM({declutterMode:R});return function(P){if(T.setText(n(P)),r&&T.setFill(r(P)),s&&T.setBackgroundFill(s(P)),o&&T.setStroke(o(P)),a&&T.setBackgroundStroke(a(P)),l&&T.setFont(l(P)),c&&T.setMaxAngle(c(P)),h&&T.setOffsetX(h(P)),u&&T.setOffsetY(u(P)),d&&T.setOverflow(d(P)),f){const E=f(P);if(E!=="point"&&E!=="line")throw new Error("Expected point or line for text-placement");T.setPlacement(E)}if(g&&T.setRepeat(g(P)),_&&T.setScale(_(P)),m&&T.setRotateWithView(m(P)),p&&T.setRotation(p(P)),y){const E=y(P);if(E!=="left"&&E!=="center"&&E!=="right"&&E!=="end"&&E!=="start")throw new Error("Expected left, right, center, start, or end for text-align");T.setTextAlign(E)}if(v){const E=v(P);if(E!=="left"&&E!=="right"&&E!=="center")throw new Error("Expected left, right, or center for text-justify");T.setJustify(E)}if(x){const E=x(P);if(E!=="bottom"&&E!=="top"&&E!=="middle"&&E!=="alphabetic"&&E!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");T.setTextBaseline(E)}return S&&T.setPadding(S(P)),T}}function TS(i,e){return"icon-src"in i?wS(i,e):"shape-points"in i?bS(i,e):"circle-radius"in i?AS(i,e):null}function wS(i,e){const t="icon-",n=t+"src",r=Xf(i[n],n),s=Vo(i,t+"anchor",e),o=ha(i,t+"scale",e),a=$t(i,t+"opacity",e),l=Vo(i,t+"displacement",e),c=$t(i,t+"rotation",e),h=Ms(i,t+"rotate-with-view",e),u=ad(i,t+"anchor-origin"),d=ld(i,t+"anchor-x-units"),f=ld(i,t+"anchor-y-units"),g=IS(i,t+"color"),_=LS(i,t+"cross-origin"),m=PS(i,t+"offset"),p=ad(i,t+"offset-origin"),y=Ho(i,t+"width"),v=Ho(i,t+"height"),x=CS(i,t+"size"),S=ua(i,t+"declutter-mode"),R=new qM({src:r,anchorOrigin:u,anchorXUnits:d,anchorYUnits:f,color:g,crossOrigin:_,offset:m,offsetOrigin:p,height:v,width:y,size:x,declutterMode:S});return function(T){return a&&R.setOpacity(a(T)),l&&R.setDisplacement(l(T)),c&&R.setRotation(c(T)),h&&R.setRotateWithView(h(T)),o&&R.setScale(o(T)),s&&R.setAnchor(s(T)),R}}function bS(i,e){const t="shape-",n=t+"points",r=t+"radius",s=Gl(i[n],n),o=Gl(i[r],r),a=xs(i,t,e),l=Es(i,t,e),c=ha(i,t+"scale",e),h=Vo(i,t+"displacement",e),u=$t(i,t+"rotation",e),d=Ms(i,t+"rotate-with-view",e),f=Ho(i,t+"radius2"),g=Ho(i,t+"angle"),_=ua(i,t+"declutter-mode"),m=new Of({points:s,radius:o,radius2:f,angle:g,declutterMode:_});return function(p){return a&&m.setFill(a(p)),l&&m.setStroke(l(p)),h&&m.setDisplacement(h(p)),u&&m.setRotation(u(p)),d&&m.setRotateWithView(d(p)),c&&m.setScale(c(p)),m}}function AS(i,e){const t="circle-",n=xs(i,t,e),r=Es(i,t,e),s=$t(i,t+"radius",e),o=ha(i,t+"scale",e),a=Vo(i,t+"displacement",e),l=$t(i,t+"rotation",e),c=Ms(i,t+"rotate-with-view",e),h=ua(i,t+"declutter-mode"),u=new Uf({radius:5,declutterMode:h});return function(d){return s&&u.setRadius(s(d)),n&&u.setFill(n(d)),r&&u.setStroke(r(d)),a&&u.setDisplacement(a(d)),l&&u.setRotation(l(d)),c&&u.setRotateWithView(c(d)),o&&u.setScale(o(d)),u}}function $t(i,e,t){if(!(e in i))return;const n=ei(i[e],Ce,t);return function(r){return Gl(n(r),e)}}function Xn(i,e,t){if(!(e in i))return null;const n=ei(i[e],rn,t);return function(r){return Xf(n(r),e)}}function RS(i,e,t){const n=Xn(i,e+"pattern-src",t),r=od(i,e+"pattern-offset",t),s=od(i,e+"pattern-size",t),o=Cc(i,e+"color",t);return function(a){return{src:n(a),offset:r&&r(a),size:s&&s(a),color:o&&o(a)}}}function Ms(i,e,t){if(!(e in i))return null;const n=ei(i[e],ft,t);return function(r){const s=n(r);if(typeof s!="boolean")throw new Error(`Expected a boolean for ${e}`);return s}}function Cc(i,e,t){if(!(e in i))return null;const n=ei(i[e],Ct|rn,t);return function(r){return Yf(n(r),e)}}function Wf(i,e,t){if(!(e in i))return null;const n=ei(i[e],Jn,t);return function(r){return Ls(n(r),e)}}function Vo(i,e,t){if(!(e in i))return null;const n=ei(i[e],Jn,t);return function(r){const s=Ls(n(r),e);if(s.length!==2)throw new Error(`Expected two numbers for ${e}`);return s}}function od(i,e,t){if(!(e in i))return null;const n=ei(i[e],Jn,t);return function(r){return qf(n(r),e)}}function ha(i,e,t){if(!(e in i))return null;const n=ei(i[e],Jn|Ce,t);return function(r){return DS(n(r),e)}}function Ho(i,e){const t=i[e];if(t!==void 0){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}}function CS(i,e){const t=i[e];if(t!==void 0){if(typeof t=="number")return sn(t);if(!Array.isArray(t))throw new Error(`Expected a number or size array for ${e}`);if(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return t}}function LS(i,e){const t=i[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}}function ad(i,e){const t=i[e];if(t!==void 0){if(t!=="bottom-left"&&t!=="bottom-right"&&t!=="top-left"&&t!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return t}}function ld(i,e){const t=i[e];if(t!==void 0){if(t!=="pixels"&&t!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return t}}function PS(i,e){const t=i[e];if(t!==void 0)return Ls(t,e)}function ua(i,e){const t=i[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);if(t!=="declutter"&&t!=="obstacle"&&t!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return t}}function IS(i,e){const t=i[e];if(t!==void 0)return Yf(t,e)}function Ls(i,e){if(!Array.isArray(i))throw new Error(`Expected an array for ${e}`);const t=i.length;for(let n=0;n<t;++n)if(typeof i[n]!="number")throw new Error(`Expected an array of numbers for ${e}`);return i}function Xf(i,e){if(typeof i!="string")throw new Error(`Expected a string for ${e}`);return i}function Gl(i,e){if(typeof i!="number")throw new Error(`Expected a number for ${e}`);return i}function Yf(i,e){if(typeof i=="string")return i;const t=Ls(i,e),n=t.length;if(n<3||n>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return t}function qf(i,e){const t=Ls(i,e);if(t.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return t}function DS(i,e){return typeof i=="number"?i:qf(i,e)}const cd={RENDER_ORDER:"renderOrder"};class NS extends la{constructor(e){e=e||{};const t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter?String(e.declutter):void 0,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(cd.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e,t){const n=this.getDeclutter();n in e.declutter||(e.declutter[n]=new kM(9)),this.getRenderer().renderDeclutter(e,t)}setRenderOrder(e){this.set(cd.RENDER_ORDER,e)}setStyle(e){this.style_=OS(e),this.styleFunction_=e===null?void 0:xM(this.style_),this.changed()}}function OS(i){if(i===void 0)return EM;if(!i)return null;if(typeof i=="function"||i instanceof Ao)return i;if(!Array.isArray(i))return sd([i]);if(i.length===0)return[];const e=i.length,t=i[0];if(t instanceof Ao){const r=new Array(e);for(let s=0;s<e;++s){const o=i[s];if(!(o instanceof Ao))throw new Error("Expected a list of style instances");r[s]=o}return r}if("style"in t){const r=new Array(e);for(let s=0;s<e;++s){const o=i[s];if(!("style"in o))throw new Error("Expected a list of rules with a style property");r[s]=o}return ES(r)}return sd(i)}const US=NS;class FS extends af{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.declutterExecutorGroup=null}getFeatures(e){return tt()}getData(e){return null}prepareFrame(e){return tt()}renderFrame(e,t){return tt()}loadedTileCallback(e,t,n){e[t]||(e[t]={}),e[t][n.tileCoord.toString()]=n}createLoadedTileFinder(e,t,n){return(r,s)=>{const o=this.loadedTileCallback.bind(this,n,r);return e.forEachLoadedTile(t,r,s,o)}}forEachFeatureAtCoordinate(e,t,n,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const t=e.target;(t.getState()===Qe.LOADED||t.getState()===Qe.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=Qe.LOADED&&t!=Qe.ERROR&&e.addEventListener(Ye.CHANGE,this.boundHandleImageChange_),t==Qe.IDLE&&(e.load(),t=e.getState()),t==Qe.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}renderDeferred(e){}disposeInternal(){delete this.layer_,super.disposeInternal()}}const zS=FS;class BS extends Si{constructor(e,t,n,r){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=r}}const Zf=BS;class GS{constructor(){kc(this,"pushMethodArgs_",(...e)=>(this.instructions_[this.zIndex+this.offset_].push(e),this));this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy(CanvasRenderingContext2D.prototype,{get:(e,t)=>{if(typeof Fl()[t]=="function")return this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(t),this.pushMethodArgs_},set:(e,t,n)=>(this.instructions_[this.zIndex+this.offset_]||(this.instructions_[this.zIndex+this.offset_]=[]),this.instructions_[this.zIndex+this.offset_].push(t,n),!0)})}getContext(){return this.context_}draw(e){this.instructions_.forEach(t=>{for(let n=0,r=t.length;n<r;n+=2){const s=t[n],o=t[n+1];if(typeof e[s]=="function")e[s](...o);else{if(typeof o=="function"){e[s]=o(e);continue}e[s]=o}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}}const kS=GS;let _r=null;function VS(){_r=pn(1,1,void 0,{willReadFrequently:!0})}class HS extends zS{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=br(),this.pixelTransform=br(),this.inversePixelTransform=br(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,t,n){_r||VS(),_r.clearRect(0,0,1,1);let r;try{_r.drawImage(e,t,n,1,1,0,0,1,1),r=_r.getImageData(0,0,1,1).data}catch{return _r=null,null}return r}getBackground(e){let n=this.getLayer().getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0}useContainer(e,t,n){const r=this.getLayer().getClassName();let s,o;if(e&&e.className===r&&(!n||e&&e.style.backgroundColor&&$o(ys(e.style.backgroundColor),ys(n)))){const a=e.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===t?(this.container=e,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){s=document.createElement("div"),s.className=r;let a=s.style;a.position="absolute",a.width="100%",a.height="100%",o=pn();const l=o.canvas;s.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=s,this.context=o}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){const r=Wi(n),s=sa(n),o=ra(n),a=ia(n);ln(t.coordinateToPixelTransform,r),ln(t.coordinateToPixelTransform,s),ln(t.coordinateToPixelTransform,o),ln(t.coordinateToPixelTransform,a);const l=this.inversePixelTransform;ln(l,r),ln(l,s),ln(l,o),ln(l,a),e.save(),e.beginPath(),e.moveTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.clip()}dispatchRenderEvent_(e,t,n){const r=this.getLayer();if(r.hasListener(e)){const s=new Zf(e,this.inversePixelTransform,n,t);r.dispatchEvent(s)}}preRender(e,t){this.frameState=t,!t.declutter&&this.dispatchRenderEvent_(Ln.PRERENDER,e,t)}postRender(e,t){t.declutter||this.dispatchRenderEvent_(Ln.POSTRENDER,e,t)}renderDeferredInternal(e){}getRenderContext(e){return e.declutter&&!this.deferredContext_&&(this.deferredContext_=new kS),e.declutter?this.deferredContext_.getContext():this.context}renderDeferred(e){e.declutter&&(this.dispatchRenderEvent_(Ln.PRERENDER,this.context,e),e.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(e),this.dispatchRenderEvent_(Ln.POSTRENDER,this.context,e))}getRenderTransform(e,t,n,r,s,o,a){const l=s/2,c=o/2,h=r/t,u=-h,d=-e[0]+a,f=-e[1];return ms(this.tempTransform,l,c,h,u,-n,d,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}}const WS=HS;class XS extends Qn{constructor(e){super(),this.projection=Sn(e.projection),this.attributions_=hd(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const t=this;this.viewPromise_=new Promise(function(n,r){t.viewResolver=n,t.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=hd(e),this.changed()}setState(e){this.state_=e,this.changed()}}function hd(i){return i?Array.isArray(i)?function(e){return i}:typeof i=="function"?i:function(e){return[i]}:null}const YS=XS,Ne={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class qS extends ea{constructor(e,t,n){super(),n=n||{},this.tileCoord=e,this.state=t,this.interimTile=null,this.key="",this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(Ye.CHANGE)}release(){this.state===Ne.ERROR&&this.setState(Ne.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let e=this.interimTile;if(!e)return this;do{if(e.getState()==Ne.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){let e=this.interimTile;if(!e)return;let t=this;do{if(e.getState()==Ne.LOADED){e.interimTile=null;break}e.getState()==Ne.LOADING?t=e:e.getState()==Ne.IDLE?t.interimTile=e.interimTile:t=e,e=t.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==Ne.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){tt()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;const r=t-n+1e3/60;return r>=this.transition_?1:zf(r/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}const jf=qS;class ZS extends jf{constructor(e,t,n,r,s,o){super(e,t,o),this.crossOrigin_=r,this.src_=n,this.key=n,this.image_=new Image,r!==null&&(this.image_.crossOrigin=r),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(e){this.image_=e,this.state=Ne.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=Ne.ERROR,this.unlistenImage_(),this.image_=jS(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=Ne.LOADED:this.state=Ne.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==Ne.ERROR&&(this.state=Ne.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==Ne.IDLE&&(this.state=Ne.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=cM(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function jS(){const i=pn(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}const Kf=ZS;class KS{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;const r=this.points_[t+2]-this.points_[n+2];if(r<1e3/60)return!1;const s=this.points_[t]-this.points_[n],o=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(o,s),this.initialVelocity_=Math.sqrt(s*s+o*o)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}const $S=KS;class JS extends tc{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){tt()}calculateMatrices2D(e){const t=e.viewState,n=e.coordinateToPixelTransform,r=e.pixelToCoordinateTransform;ms(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),lf(r,n)}forEachFeatureAtCoordinate(e,t,n,r,s,o,a,l){let c;const h=t.viewState;function u(x,S,R,T){return s.call(o,S,x?R:null,T)}const d=h.projection,f=mE(e.slice(),d),g=[[0,0]];if(d.canWrapX()&&r){const x=d.getExtent(),S=St(x);g.push([-S,0],[S,0])}const _=t.layerStatesArray,m=_.length,p=[],y=[];for(let x=0;x<g.length;x++)for(let S=m-1;S>=0;--S){const R=_[S],T=R.layer;if(T.hasRenderer()&&Ac(R,h)&&a.call(l,T)){const P=T.getRenderer(),E=T.getSource();if(P&&E){const b=E.getWrapX()?f:e,U=u.bind(null,R.managed);y[0]=b[0]+g[x][0],y[1]=b[1]+g[x][1],c=P.forEachFeatureAtCoordinate(y,t,n,U,p)}if(c)return c}}if(p.length===0)return;const v=1/p.length;return p.forEach((x,S)=>x.distanceSq+=S*v),p.sort((x,S)=>x.distanceSq-S.distanceSq),p.some(x=>c=x.callback(x.feature,x.layer,x.geometry)),c}hasFeatureAtCoordinate(e,t,n,r,s,o){return this.forEachFeatureAtCoordinate(e,t,n,r,No,this,s,o)!==void 0}getMap(){return this.map_}renderFrame(e){tt()}scheduleExpireIconCache(e){Pn.canExpireCache()&&e.postRenderFunctions.push(QS)}}function QS(i,e){Pn.expire()}const eT=JS;class tT extends eT{constructor(e){super(e),this.fontChangeListenerKey_=st(yM,ps.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Cs+" ol-layers";const n=e.getViewport();n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(e,t){const n=this.getMap();if(n.hasListener(e)){const r=new Zf(e,void 0,t);n.dispatchEvent(r)}}disposeInternal(){vt(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Ln.PRECOMPOSE,e);const t=e.layerStatesArray.sort(function(a,l){return a.zIndex-l.zIndex});t.some(a=>a.layer instanceof US&&a.layer.getDeclutter())&&(e.declutter={});const r=e.viewState;this.children_.length=0;const s=[];let o=null;for(let a=0,l=t.length;a<l;++a){const c=t[a];e.layerIndex=a;const h=c.layer,u=h.getSourceState();if(!Ac(c,r)||u!="ready"&&u!="undefined"){h.unrender();continue}const d=h.render(e,o);d&&(d!==o&&(this.children_.push(d),o=d),s.push(c))}this.declutter(e,s),lM(this.element_,this.children_),this.dispatchRenderEvent(Ln.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}declutter(e,t){for(let n=t.length-1;n>=0;--n){const r=t[n],s=r.layer;s.getDeclutter()&&s.renderDeclutter(e,r)}t.forEach(n=>n.layer.renderDeferred(e))}}const nT=tT;class ui extends Si{constructor(e,t){super(e),this.layer=t}}const cl={LAYERS:"layers"};class Lc extends Ff{constructor(e){e=e||{};const t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(cl.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new Kn(n.slice(),{unique:!0}):ot(typeof n.getArray=="function","Expected `layers` to be an array or a `Collection`"):n=new Kn(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(vt),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(st(e,un.ADD,this.handleLayersAdd_,this),st(e,un.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(vt);Qo(this.listenerKeys_);const t=e.getArray();for(let n=0,r=t.length;n<r;n++){const s=t[n];this.registerLayerListeners_(s),this.dispatchEvent(new ui("addlayer",s))}this.changed()}registerLayerListeners_(e){const t=[st(e,ps.PROPERTYCHANGE,this.handleLayerChange_,this),st(e,Ye.CHANGE,this.handleLayerChange_,this)];e instanceof Lc&&t.push(st(e,"addlayer",this.handleLayerGroupAdd_,this),st(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[qt(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new ui("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new ui("removelayer",e.layer))}handleLayersAdd_(e){const t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new ui("addlayer",t)),this.changed()}handleLayersRemove_(e){const t=e.element,n=qt(t);this.listenerKeys_[n].forEach(vt),delete this.listenerKeys_[n],this.dispatchEvent(new ui("removelayer",t)),this.changed()}getLayers(){return this.get(cl.LAYERS)}setLayers(e){const t=this.getLayers();if(t){const n=t.getArray();for(let r=0,s=n.length;r<s;++r)this.dispatchEvent(new ui("removelayer",n[r]))}this.set(cl.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){const t=e!==void 0?e:[],n=t.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(t)});const r=this.getLayerState();let s=r.zIndex;!e&&r.zIndex===void 0&&(s=0);for(let o=n,a=t.length;o<a;o++){const l=t[o];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=os(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return t}getSourceState(){return"ready"}}const da=Lc;class iT extends Si{constructor(e,t,n){super(e),this.map=t,this.frameState=n!==void 0?n:null}}const vr=iT;class rT extends vr{constructor(e,t,n,r,s,o){super(e,t,s),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const li=rT,pt={SINGLECLICK:"singleclick",CLICK:Ye.CLICK,DBLCLICK:Ye.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},kl={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class sT extends ea{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;const n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=st(n,kl.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=st(n,kl.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(Ye.TOUCHMOVE,this.boundHandleTouchMove_,If?{passive:!1}:!1)}emulateClick_(e){let t=new li(pt.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new li(pt.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const n=new li(pt.SINGLECLICK,this.map_,e);this.dispatchEvent(n)},250)}updateActivePointers_(e){const t=e,n=t.pointerId;if(t.type==pt.POINTERUP||t.type==pt.POINTERCANCEL){delete this.trackedTouches_[n];for(const r in this.trackedTouches_)if(this.trackedTouches_[r].target!==t.target){delete this.trackedTouches_[r];break}}else(t.type==pt.POINTERDOWN||t.type==pt.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const t=new li(pt.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(vt),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const t=new li(pt.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const n=this.map_.getOwnerDocument();this.dragListenerKeys_.push(st(n,pt.POINTERMOVE,this.handlePointerMove_,this),st(n,pt.POINTERUP,this.handlePointerUp_,this),st(this.element_,pt.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==n&&this.dragListenerKeys_.push(st(this.element_.getRootNode(),pt.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const t=new li(pt.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new li(pt.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){const t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(vt(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(Ye.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(vt(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(vt),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const oT=sT,ci={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Gt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},Wo=1/0;class aT{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Qo(this.queuedElements_)}dequeue(){const e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));const r=this.keyFunction_(n);return delete this.queuedElements_[r],n}enqueue(e){ot(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const t=this.priorityFunction_(e);return t!=Wo?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const t=this.elements_,n=this.priorities_,r=t.length,s=t[e],o=n[e],a=e;for(;e<r>>1;){const l=this.getLeftChildIndex_(e),c=this.getRightChildIndex_(e),h=c<r&&n[c]<n[l]?c:l;t[e]=t[h],n[e]=n[h],e=h}t[e]=s,n[e]=o,this.siftDown_(a,e)}siftDown_(e,t){const n=this.elements_,r=this.priorities_,s=n[t],o=r[t];for(;t>e;){const a=this.getParentIndex_(t);if(r[a]>o)n[t]=n[a],r[t]=r[a],t=a;else break}n[t]=s,r[t]=o}reprioritize(){const e=this.priorityFunction_,t=this.elements_,n=this.priorities_;let r=0;const s=t.length;let o,a,l;for(a=0;a<s;++a)o=t[a],l=e(o),l==Wo?delete this.queuedElements_[this.keyFunction_(o)]:(n[r]=l,t[r++]=o);t.length=r,n.length=r,this.heapify_()}}const lT=aT;class cT extends lT{constructor(e,t){super(function(n){return e.apply(null,n)},function(n){return n[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const t=super.enqueue(e);return t&&e[0].addEventListener(Ye.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const t=e.target,n=t.getState();if(n===Ne.LOADED||n===Ne.ERROR||n===Ne.EMPTY){n!==Ne.ERROR&&t.removeEventListener(Ye.CHANGE,this.boundHandleTileChange_);const r=t.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0,r,s,o;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;)s=this.dequeue()[0],o=s.getKey(),r=s.getState(),r===Ne.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++n,s.load())}}const hT=cT;function uT(i,e,t,n,r){if(!i||!(t in i.wantedTiles)||!i.wantedTiles[t][e.getKey()])return Wo;const s=i.viewState.center,o=n[0]-s[0],a=n[1]-s[1];return 65536*Math.log(r)+Math.sqrt(o*o+a*a)/r}class dT extends Qn{constructor(e){super();const t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){zl(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&zl(this.element);for(let t=0,n=this.listenerKeys.length;t<n;++t)vt(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==Oo&&this.listenerKeys.push(st(e,ci.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}const fa=dT;class fT extends fa{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const t=e.className!==void 0?e.className:"ol-attribution",n=e.tipLabel!==void 0?e.tipLabel:"Attributions",r=e.expandClassName!==void 0?e.expandClassName:t+"-expand",s=e.collapseLabel!==void 0?e.collapseLabel:"›",o=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=o):this.collapseLabel_=s;const a=e.label!==void 0?e.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=r):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(Ye.CLICK,this.handleClick_.bind(this),!1);const c=t+" "+Cs+" "+yc+(this.collapsed_&&this.collapsible_?" "+Zu:"")+(this.collapsible_?"":" ol-uncollapsible"),h=this.element;h.className=c,h.appendChild(this.toggleButton_),h.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const t=Array.from(new Set(this.getMap().getAllLayers().flatMap(r=>r.getAttributions(e)))),n=!this.getMap().getAllLayers().some(r=>r.getSource()&&r.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(n),t}async updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=await Promise.all(this.collectSourceAttributions_(e).map(r=>Fx(()=>r))),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!$o(t,this.renderedAttributions_)){aM(this.ulElement_);for(let r=0,s=t.length;r<s;++r){const o=document.createElement("li");o.innerHTML=t[r],this.ulElement_.appendChild(o)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(Zu),this.collapsed_?Xu(this.collapseLabel_,this.label_):Xu(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}const pT=fT;class mT extends fa{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const t=e.className!==void 0?e.className:"ol-rotate",n=e.label!==void 0?e.label:"⇧",r=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof n=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(r));const s=e.tipLabel?e.tipLabel:"Reset rotation",o=document.createElement("button");o.className=t+"-reset",o.setAttribute("type","button"),o.title=s,o.appendChild(this.label_),o.addEventListener(Ye.CLICK,this.handleClick_.bind(this),!1);const a=t+" "+Cs+" "+yc,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(_o)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const t=this.getMap().getView();if(!t)return;const n=t.getRotation();n!==void 0&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:zr}):t.setRotation(0))}render(e){const t=e.frameState;if(!t)return;const n=t.viewState.rotation;if(n!=this.rotation_){const r="rotate("+n+"rad)";if(this.autoHide_){const s=this.element.classList.contains(_o);!s&&n===0?this.element.classList.add(_o):s&&n!==0&&this.element.classList.remove(_o)}this.label_.style.transform=r}this.rotation_=n}}const gT=mT;class _T extends fa{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const t=e.className!==void 0?e.className:"ol-zoom",n=e.delta!==void 0?e.delta:1,r=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",s=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",o=e.zoomInLabel!==void 0?e.zoomInLabel:"+",a=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",c=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=l,h.appendChild(typeof o=="string"?document.createTextNode(o):o),h.addEventListener(Ye.CLICK,this.handleClick_.bind(this,n),!1);const u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=c,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener(Ye.CLICK,this.handleClick_.bind(this,-n),!1);const d=t+" "+Cs+" "+yc,f=this.element;f.className=d,f.appendChild(h),f.appendChild(u),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const n=this.getMap().getView();if(!n)return;const r=n.getZoom();if(r!==void 0){const s=n.getConstrainedZoom(r+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:s,duration:this.duration_,easing:zr})):n.setZoom(s)}}}const vT=_T;function yT(i){i=i||{};const e=new Kn;return(i.zoom!==void 0?i.zoom:!0)&&e.push(new vT(i.zoomOptions)),(i.rotate!==void 0?i.rotate:!0)&&e.push(new gT(i.rotateOptions)),(i.attribution!==void 0?i.attribution:!0)&&e.push(new pT(i.attributionOptions)),e}const ud={ACTIVE:"active"};class xT extends Qn{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(ud.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(ud.ACTIVE,e)}setMap(e){this.map_=e}}function ET(i,e,t){const n=i.getCenterInternal();if(n){const r=[n[0]+e[0],n[1]+e[1]];i.animateInternal({duration:t!==void 0?t:250,easing:IM,center:i.getConstrainedCenter(r)})}}function Pc(i,e,t,n){const r=i.getZoom();if(r===void 0)return;const s=i.getConstrainedZoom(r+e),o=i.getResolutionForZoom(s);i.getAnimating()&&i.cancelAnimations(),i.animate({resolution:o,anchor:t,duration:n!==void 0?n:250,easing:zr})}const Ps=xT;class MT extends Ps{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==pt.DBLCLICK){const n=e.originalEvent,r=e.map,s=e.coordinate,o=n.shiftKey?-this.delta_:this.delta_,a=r.getView();Pc(a,o,s,this.duration_),n.preventDefault(),t=!0}return!t}}const ST=MT;class TT extends Ps{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==pt.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==pt.POINTERUP){const n=this.handleUpEvent(e);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(e.type==pt.POINTERDOWN){const n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==pt.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Ic(i){const e=i.length;let t=0,n=0;for(let r=0;r<e;r++)t+=i[r].clientX,n+=i[r].clientY;return{clientX:t/e,clientY:n/e}}const Is=TT;function Vl(i){const e=arguments;return function(t){let n=!0;for(let r=0,s=e.length;r<s&&(n=n&&e[r](t),!!n);++r);return n}}const wT=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},bT=function(i){const e=i.map.getTargetElement(),t=i.map.getOwnerDocument().activeElement;return e.contains(t)},$f=function(i){return i.map.getTargetElement().hasAttribute("tabindex")?bT(i):!0},AT=No,Jf=function(i){const e=i.originalEvent;return e.button==0&&!(sM&&Cf&&e.ctrlKey)},Qf=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},RT=function(i){const e=i.originalEvent;return Cf?e.metaKey:e.ctrlKey},CT=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},ep=function(i){const e=i.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},hl=function(i){const e=i.originalEvent;return ot(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},LT=function(i){const e=i.originalEvent;return ot(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class PT extends Is{constructor(e){super({stopDown:Jo}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const t=e.condition?e.condition:Vl(Qf,LT);this.condition_=e.onFocusOnly?Vl($f,t):t,this.noKinetic_=!1}handleDragEvent(e){const t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());const n=this.targetPointers,r=t.getEventPixel(Ic(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){const s=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],a=e.map.getView();pE(s,a.getResolution()),rc(s,a.getRotation()),a.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){const t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),o=n.getCenterInternal(),a=t.getPixelFromCoordinateInternal(o),l=t.getCoordinateFromPixelInternal([a[0]-r*Math.cos(s),a[1]-r*Math.sin(s)]);n.animateInternal({center:n.getConstrainedCenter(l),duration:500,easing:zr})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const n=e.map.getView();return this.lastCentroid=null,n.getAnimating()&&n.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}const IT=PT;class DT extends Is{constructor(e){e=e||{},super({stopDown:Jo}),this.condition_=e.condition?e.condition:wT,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!hl(e))return;const t=e.map,n=t.getView();if(n.getConstraints().rotation===bc)return;const r=t.getSize(),s=e.pixel,o=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;n.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(e){return hl(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return hl(e)&&Jf(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}const NT=DT;class OT extends tc{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,t=this.endPixel_,n="px",r=this.element_.style;r.left=Math.min(e[0],t[0])+n,r.top=Math.min(e[1],t[1])+n,r.width=Math.abs(t[0]-e[0])+n,r.height=Math.abs(t[1]-e[1])+n}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const e=this.startPixel_,t=this.endPixel_,r=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new _s([r])}getGeometry(){return this.geometry_}}const UT=OT,Eo={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class ul extends Si{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}}class FT extends Is{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new UT(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:Jf,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){const r=n[0]-t[0],s=n[1]-t[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new ul(Eo.BOXDRAG,e.coordinate,e))}handleUpEvent(e){this.box_.setMap(null);const t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new ul(t?Eo.BOXEND:Eo.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new ul(Eo.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}}const zT=FT;class BT extends zT{constructor(e){e=e||{};const t=e.condition?e.condition:CT;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const n=this.getMap().getView();let r=this.getGeometry();if(this.out_){const s=n.rotatedExtentForGeometry(r),o=n.getResolutionForExtentInternal(s),a=n.getResolution()/o;r=r.clone(),r.scale(a*a)}n.fitInternal(r,{duration:this.duration_,easing:zr})}}const GT=BT,Pi={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class kT extends Ps{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return Qf(t)&&ep(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==Ye.KEYDOWN){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==Pi.DOWN||r==Pi.LEFT||r==Pi.RIGHT||r==Pi.UP)){const o=e.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,c=0;r==Pi.DOWN?c=-a:r==Pi.LEFT?l=-a:r==Pi.RIGHT?l=a:c=a;const h=[l,c];rc(h,o.getRotation()),ET(o,h,this.duration_),n.preventDefault(),t=!0}}return!t}}const VT=kT;class HT extends Ps{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!RT(t)&&ep(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==Ye.KEYDOWN||e.type==Ye.KEYPRESS){const n=e.originalEvent,r=n.key;if(this.condition_(e)&&(r==="+"||r==="-")){const s=e.map,o=r==="+"?this.delta_:-this.delta_,a=s.getView();Pc(a,o,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}}const WT=HT;class XT extends Ps{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const t=e.condition?e.condition:AT;this.condition_=e.onFocusOnly?Vl($f,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==Ye.WHEEL)return!0;const n=e.map,r=e.originalEvent;r.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let s;if(e.type==Ye.WHEEL&&(s=r.deltaY,iM&&r.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(s/=Lf),r.deltaMode===WheelEvent.DOM_DELTA_LINE&&(s*=40)),s===0)return!1;this.lastDelta_=s;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(s)<4?"trackpad":"wheel");const a=n.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-s/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=s;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,n),l),!1}handleWheelZoom_(e){const t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-Lt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),Pc(t,n,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}const YT=XT;class qT extends Is{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Jo),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0;const n=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-n.clientY,r.clientX-n.clientX);if(this.lastAngle_!==void 0){const l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=l}this.lastAngle_=s;const o=e.map,a=o.getView();a.getConstraints().rotation!==bc&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(Ic(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const ZT=qT;class jT extends Is{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=Jo),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1;const n=this.targetPointers[0],r=this.targetPointers[1],s=n.clientX-r.clientX,o=n.clientY-r.clientY,a=Math.sqrt(s*s+o*o);this.lastDistance_!==void 0&&(t=this.lastDistance_/a),this.lastDistance_=a;const l=e.map,c=l.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Ic(this.targetPointers))),l.render(),c.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const n=e.map.getView(),r=this.lastScaleDelta_>1?1:-1;return n.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}const KT=jT;function $T(i){i=i||{};const e=new Kn,t=new $S(-.005,.05,100);return(i.altShiftDragRotate!==void 0?i.altShiftDragRotate:!0)&&e.push(new NT),(i.doubleClickZoom!==void 0?i.doubleClickZoom:!0)&&e.push(new ST({delta:i.zoomDelta,duration:i.zoomDuration})),(i.dragPan!==void 0?i.dragPan:!0)&&e.push(new IT({onFocusOnly:i.onFocusOnly,kinetic:t})),(i.pinchRotate!==void 0?i.pinchRotate:!0)&&e.push(new ZT),(i.pinchZoom!==void 0?i.pinchZoom:!0)&&e.push(new KT({duration:i.zoomDuration})),(i.keyboard!==void 0?i.keyboard:!0)&&(e.push(new VT),e.push(new WT({delta:i.zoomDelta,duration:i.zoomDuration}))),(i.mouseWheelZoom!==void 0?i.mouseWheelZoom:!0)&&e.push(new YT({onFocusOnly:i.onFocusOnly,duration:i.zoomDuration})),(i.shiftDragZoom!==void 0?i.shiftDragZoom:!0)&&e.push(new GT({duration:i.zoomDuration})),e}function tp(i){if(i instanceof la){i.setMapInternal(null);return}i instanceof da&&i.getLayers().forEach(tp)}function np(i,e){if(i instanceof la){i.setMapInternal(e);return}if(i instanceof da){const t=i.getLayers().getArray();for(let n=0,r=t.length;n<r;++n)np(t[n],e)}}let JT=class extends Qn{constructor(e){super(),e=e||{},this.on,this.once,this.un;const t=QT(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:Lf,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=br(),this.pixelToCoordinateTransform_=br(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=t.controls||yT(),this.interactions=t.interactions||$T({onFocusOnly:!0}),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new hT(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Gt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Gt.VIEW,this.handleViewChanged_),this.addChangeListener(Gt.SIZE,this.handleSizeChanged_),this.addChangeListener(Gt.TARGET,this.handleTargetChanged_),this.setProperties(t.values);const n=this;e.view&&!(e.view instanceof qn)&&e.view.then(function(r){n.setView(new qn(r))}),this.controls.addEventListener(un.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(un.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(un.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(un.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(un.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(un.REMOVE,r=>{const s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){np(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;const r=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const s=n.hitTolerance!==void 0?n.hitTolerance:0,o=n.layerFilter!==void 0?n.layerFilter:No,a=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,a,t,null,o,null)}getFeaturesAtPixel(e,t){const n=[];return this.forEachFeatureAtPixel(e,function(r){n.push(r)},t),n}getAllLayers(){const e=[];function t(n){n.forEach(function(r){r instanceof da?t(r.getLayers()):e.push(r)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;const n=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};const r=t.layerFilter!==void 0?t.layerFilter:No,s=t.hitTolerance!==void 0?t.hitTolerance:0,o=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,s,o,r,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const n=this.viewport_.getBoundingClientRect(),r=this.getSize(),s=n.width/r[0],o=n.height/r[1],a="changedTouches"in e?e.changedTouches[0]:e;return[(a.clientX-n.left)/s,(a.clientY-n.top)/o]}getTarget(){return this.get(Gt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return Ul(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const t=this.frameState_;return t?ln(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Gt.LAYERGROUP)}setLayers(e){const t=this.getLayerGroup();if(e instanceof Kn){t.setLayers(e);return}const n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t];if(!r.visible)continue;const s=r.layer.getRenderer();if(s&&!s.ready)return!0;const o=r.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(e){const t=Wn(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){const t=this.frameState_;return t?ln(t.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Gt.SIZE)}getView(){return this.get(Gt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,r){return uT(this.frameState_,e,t,n,r)}handleBrowserEvent(e,t){t=t||e.type;const n=new li(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;const t=e.originalEvent,n=t.type;if(n===kl.POINTERDOWN||n===Ye.WHEEL||n===Ye.KEYDOWN){const r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,o=t.target;if(this.overlayContainerStopEvent_.contains(o)||!(s===r?r.documentElement:s).contains(o))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){const o=r[s];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let r=this.maxTilesLoading_,s=r;if(e){const o=e.viewHints;if(o[cn.ANIMATING]||o[cn.INTERACTING]){const a=Date.now()-e.time>8;r=a?0:8,s=a?0:2}}t.getTilesLoading()<r&&(t.reprioritize(),t.loadMoreTiles(r,s))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Ln.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Ln.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new vr(ci.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new vr(ci.LOADSTART,this,e))));const n=this.postRenderFunctions_;for(let r=0,s=n.length;r<s;++r)n[r](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let n=0,r=this.targetChangeHandlerKeys_.length;n<r;++n)vt(this.targetChangeHandlerKeys_[n]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(Ye.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(Ye.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,zl(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const n=this.targetElement_.getRootNode();n instanceof ShadowRoot&&this.resizeObserver_.unobserve(n.host),this.setSize(void 0)}const e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new nT(this)),this.mapBrowserEventHandler_=new oT(this,this.moveTolerance_);for(const s in pt)this.mapBrowserEventHandler_.addEventListener(pt[s],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(Ye.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(Ye.WHEEL,this.boundHandleBrowserEvent_,If?{passive:!1}:!1);const n=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.targetChangeHandlerKeys_=[st(n,Ye.KEYDOWN,this.handleBrowserEvent,this),st(n,Ye.KEYPRESS,this.handleBrowserEvent,this)];const r=t.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_.observe(t)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(vt(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(vt(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=st(e,ps.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=st(e,Ye.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(vt),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new ui("addlayer",e)),this.layerGroupPropertyListenerKeys_=[st(e,ps.PROPERTYCHANGE,this.render,this),st(e,Ye.CHANGE,this.render,this),st(e,"addlayer",this.handleLayerAdd_,this),st(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const r=e[t].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){tp(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const t=this.getSize(),n=this.getView(),r=this.frameState_;let s=null;if(t!==void 0&&Yu(t)&&n&&n.isDef()){const o=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=n.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:Il(a.center,a.resolution,a.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:qt(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;s.nextExtent=Il(a.nextCenter,a.nextResolution,l,t)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!oa(this.previousExtent_)&&!Ll(s.extent,this.previousExtent_))&&(this.dispatchEvent(new vr(ci.MOVESTART,this,r)),this.previousExtent_=na(this.previousExtent_)),this.previousExtent_&&!s.viewHints[cn.ANIMATING]&&!s.viewHints[cn.INTERACTING]&&!Ll(s.extent,this.previousExtent_)&&(this.dispatchEvent(new vr(ci.MOVEEND,this,s)),Xx(s.extent,this.previousExtent_))),this.dispatchEvent(new vr(ci.POSTRENDER,this,s)),this.renderComplete_=this.hasListener(ci.LOADSTART)||this.hasListener(ci.LOADEND)||this.hasListener(Ln.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const t=this.getLayerGroup();t&&this.handleLayerRemove_(new ui("removelayer",t)),this.set(Gt.LAYERGROUP,e)}setSize(e){this.set(Gt.SIZE,e)}setTarget(e){this.set(Gt.TARGET,e)}setView(e){if(!e||e instanceof qn){this.set(Gt.VIEW,e);return}this.set(Gt.VIEW,new qn);const t=this;e.then(function(n){t.setView(new qn(n))})}updateSize(){const e=this.getTargetElement();let t;if(e){const r=getComputedStyle(e),s=e.offsetWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.paddingLeft)-parseFloat(r.paddingRight)-parseFloat(r.borderRightWidth),o=e.offsetHeight-parseFloat(r.borderTopWidth)-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom)-parseFloat(r.borderBottomWidth);!isNaN(s)&&!isNaN(o)&&(t=[s,o],!Yu(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&gf("No map visible because the map container's width or height are 0."))}const n=this.getSize();t&&(!n||!$o(t,n))&&(this.setSize(t),this.updateViewportSize_(t))}updateViewportSize_(e){const t=this.getView();t&&t.setViewportSize(e)}};function QT(i){let e=null;i.keyboardEventTarget!==void 0&&(e=typeof i.keyboardEventTarget=="string"?document.getElementById(i.keyboardEventTarget):i.keyboardEventTarget);const t={},n=i.layers&&typeof i.layers.getLayers=="function"?i.layers:new da({layers:i.layers});t[Gt.LAYERGROUP]=n,t[Gt.TARGET]=i.target,t[Gt.VIEW]=i.view instanceof qn?i.view:new qn;let r;i.controls!==void 0&&(Array.isArray(i.controls)?r=new Kn(i.controls.slice()):(ot(typeof i.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=i.controls));let s;i.interactions!==void 0&&(Array.isArray(i.interactions)?s=new Kn(i.interactions.slice()):(ot(typeof i.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=i.interactions));let o;return i.overlays!==void 0?Array.isArray(i.overlays)?o=new Kn(i.overlays.slice()):(ot(typeof i.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=i.overlays):o=new Kn,{controls:r,interactions:s,keyboardEventTarget:e,overlays:o,values:t}}const Kw=JT;class ew{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){const n=this.entries_[e];return ot(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_||(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n),n.value_}remove(e){const t=this.entries_[e];return ot(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){var t;return(t=this.entries_[e])==null?void 0:t.value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){ot(!(e in this.entries_),"Tried to set a value for a key that is used already");const n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}}const tw=ew;function dd(i,e,t,n){return n!==void 0?(n[0]=i,n[1]=e,n[2]=t,n):[i,e,t]}function pa(i,e,t){return i+"/"+e+"/"+t}function ip(i){return pa(i[0],i[1],i[2])}function nw(i){return i.split("/").map(Number)}function iw(i){return(i[1]<<i[0])+i[2]}function rw(i,e){const t=i[0],n=i[1],r=i[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;const s=e.getFullTileRange(t);return s?s.containsXY(n,r):!0}class sw extends tw{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),n=nw(e)[0];this.forEach(r=>{r.tileCoord[0]!==n&&(this.remove(ip(r.tileCoord)),r.release())})}}const rp=sw;class sp{constructor(e,t,n,r){this.minX=e,this.maxX=t,this.minY=n,this.maxY=r}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function dr(i,e,t,n,r){return r!==void 0?(r.minX=i,r.maxX=e,r.minY=t,r.maxY=n,r):new sp(i,e,t,n)}const op=sp,Mo={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class ow extends la{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(Mo.PRELOAD)}setPreload(e){this.set(Mo.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(Mo.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(Mo.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}const aw=ow,lw=.5,cw=10,fd=.25;class hw{constructor(e,t,n,r,s,o){this.sourceProj_=e,this.targetProj_=t;let a={};const l=Go(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){const v=y[0]+"/"+y[1];return a[v]||(a[v]=l(y)),a[v]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&St(r)>=St(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?St(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?St(this.targetProj_.getExtent()):null;const c=Wi(n),h=sa(n),u=ra(n),d=ia(n),f=this.transformInv_(c),g=this.transformInv_(h),_=this.transformInv_(u),m=this.transformInv_(d),p=cw+(o?Math.max(0,Math.ceil(Math.log2(Pl(n)/(o*o*256*256)))):0);if(this.addQuad_(c,h,u,d,f,g,_,m,p),this.wrapsXInSource_){let y=1/0;this.triangles_.forEach(function(v,x,S){y=Math.min(y,v.source[0][0],v.source[1][0],v.source[2][0])}),this.triangles_.forEach(v=>{if(Math.max(v.source[0][0],v.source[1][0],v.source[2][0])-y>this.sourceWorldWidth_/2){const x=[[v.source[0][0],v.source[0][1]],[v.source[1][0],v.source[1][1]],[v.source[2][0],v.source[2][1]]];x[0][0]-y>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-y>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-y>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const S=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-S<this.sourceWorldWidth_/2&&(v.source=x)}})}a={}}addTriangle_(e,t,n,r,s,o){this.triangles_.push({source:[r,s,o],target:[e,t,n]})}addQuad_(e,t,n,r,s,o,a,l,c){const h=Cu([s,o,a,l]),u=this.sourceWorldWidth_?St(h)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&u>.5&&u<1;let g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const m=Cu([e,t,n,r]);g=St(m)/this.targetWorldWidth_>fd||g}!f&&this.sourceProj_.isGlobal()&&u&&(g=u>fd||g)}if(!g&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!As(h,this.maxSourceExtent_))return;let _=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(_=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(c>0){if(!g){const m=[(e[0]+n[0])/2,(e[1]+n[1])/2],p=this.transformInv_(m);let y;f?y=(Cr(s[0],d)+Cr(a[0],d))/2-Cr(p[0],d):y=(s[0]+a[0])/2-p[0];const v=(s[1]+a[1])/2-p[1];g=y*y+v*v>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){const m=[(t[0]+n[0])/2,(t[1]+n[1])/2],p=this.transformInv_(m),y=[(r[0]+e[0])/2,(r[1]+e[1])/2],v=this.transformInv_(y);this.addQuad_(e,t,m,y,s,o,p,v,c-1),this.addQuad_(y,m,n,r,v,p,a,l,c-1)}else{const m=[(e[0]+t[0])/2,(e[1]+t[1])/2],p=this.transformInv_(m),y=[(n[0]+r[0])/2,(n[1]+r[1])/2],v=this.transformInv_(y);this.addQuad_(e,m,y,r,s,p,v,l,c-1),this.addQuad_(m,t,n,y,p,o,a,v,c-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(e,n,r,s,a,l),_&14||this.addTriangle_(e,n,t,s,a,o),_&&(_&13||this.addTriangle_(t,r,e,o,l,s),_&7||this.addTriangle_(t,r,n,o,l,a))}calculateSourceExtent(){const e=Hi();return this.triangles_.forEach(function(t,n,r){const s=t.source;wo(e,s[0]),wo(e,s[1]),wo(e,s[2])}),e}getTriangles(){return this.triangles_}}const uw=hw;let dl;const Lr=[];function pd(i,e,t,n,r){i.beginPath(),i.moveTo(0,0),i.lineTo(e,t),i.lineTo(n,r),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(e,n)+1,Math.max(t,r)),i.restore()}function fl(i,e){return Math.abs(i[e*4]-210)>2||Math.abs(i[e*4+3]-.75*255)>2}function dw(){if(dl===void 0){const i=pn(6,6,Lr);i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",pd(i,4,5,4,0),pd(i,4,5,0,5);const e=i.getImageData(0,0,3,3).data;dl=fl(e,0)||fl(e,4)||fl(e,8),fc(i),Lr.push(i.canvas)}return dl}function md(i,e,t,n){const r=SE(t,e,i);let s=Bo(e,n,t);const o=e.getMetersPerUnit();o!==void 0&&(s*=o);const a=i.getMetersPerUnit();a!==void 0&&(s/=a);const l=i.getExtent();if(!l||ic(l,r)){const c=Bo(i,s,r)/s;isFinite(c)&&c>0&&(s/=c)}return s}function fw(i,e,t,n){const r=gs(t);let s=md(i,e,r,n);return(!isFinite(s)||s<=0)&&df(t,function(o){return s=md(i,e,o,n),isFinite(s)&&s>0}),s}function pw(i,e,t,n,r,s,o,a,l,c,h,u,d,f){const g=pn(Math.round(t*i),Math.round(t*e),Lr);if(u||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(t,t);function _(S){return Math.round(S*t)/t}g.globalCompositeOperation="lighter";const m=Hi();l.forEach(function(S,R,T){jx(m,S.extent)});let p;const y=t/n,v=(u?1:1+Math.pow(2,-24))/y;if(!d||l.length!==1||c!==0){if(p=pn(Math.round(St(m)*y),Math.round(fn(m)*y),Lr),u||(p.imageSmoothingEnabled=!1),r&&f){const S=(r[0]-m[0])*y,R=-(r[3]-m[3])*y,T=St(r)*y,P=fn(r)*y;p.rect(S,R,T,P),p.clip()}l.forEach(function(S,R,T){const P=(S.extent[0]-m[0])*y,E=-(S.extent[3]-m[3])*y,b=St(S.extent)*y,U=fn(S.extent)*y;S.image.width>0&&S.image.height>0&&p.drawImage(S.image,c,c,S.image.width-2*c,S.image.height-2*c,u?P:Math.round(P),u?E:Math.round(E),u?b:Math.round(P+b)-Math.round(P),u?U:Math.round(E+U)-Math.round(E))})}const x=Wi(o);return a.getTriangles().forEach(function(S,R,T){const P=S.source,E=S.target;let b=P[0][0],U=P[0][1],Z=P[1][0],K=P[1][1],N=P[2][0],B=P[2][1];const Y=_((E[0][0]-x[0])/s),k=_(-(E[0][1]-x[1])/s),ee=_((E[1][0]-x[0])/s),H=_(-(E[1][1]-x[1])/s),$=_((E[2][0]-x[0])/s),O=_(-(E[2][1]-x[1])/s),V=b,oe=U;b=0,U=0,Z-=V,K-=oe,N-=V,B-=oe;const ae=[[Z,K,0,0,ee-Y],[N,B,0,0,$-Y],[0,0,Z,K,H-k],[0,0,N,B,O-k]],he=uE(ae);if(!he)return;if(g.save(),g.beginPath(),dw()||!u){g.moveTo(ee,H);const xe=4,Ee=Y-ee,Be=k-H;for(let qe=0;qe<xe;qe++)g.lineTo(ee+_((qe+1)*Ee/xe),H+_(qe*Be/(xe-1))),qe!=xe-1&&g.lineTo(ee+_((qe+1)*Ee/xe),H+_((qe+1)*Be/(xe-1)));g.lineTo($,O)}else g.moveTo(ee,H),g.lineTo(Y,k),g.lineTo($,O);g.clip(),g.transform(he[0],he[2],he[1],he[3],Y,k),g.translate(m[0]-V,m[3]-oe);let we;if(p)we=p.canvas,g.scale(v,-v);else{const xe=l[0],Ee=xe.extent;we=xe.image,g.scale(St(Ee)/we.width,-fn(Ee)/we.height)}g.drawImage(we,0,0),g.restore()}),p&&(fc(p),Lr.push(p.canvas)),h&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(S,R,T){const P=S.target,E=(P[0][0]-x[0])/s,b=-(P[0][1]-x[1])/s,U=(P[1][0]-x[0])/s,Z=-(P[1][1]-x[1])/s,K=(P[2][0]-x[0])/s,N=-(P[2][1]-x[1])/s;g.beginPath(),g.moveTo(U,Z),g.lineTo(E,b),g.lineTo(K,N),g.closePath(),g.stroke()}),g.restore()),g.canvas}class mw extends jf{constructor(e,t,n,r,s,o,a,l,c,h,u,d){super(s,Ne.IDLE,d),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=r,this.wrappedTileCoord_=o||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const f=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let _=this.sourceTileGrid_.getExtent();const m=g?os(f,g):f;if(Pl(m)===0){this.state=Ne.EMPTY;return}const p=e.getExtent();p&&(_?_=os(_,p):_=p);const y=r.getResolution(this.wrappedTileCoord_[0]),v=fw(e,n,m,y);if(!isFinite(v)||v<=0){this.state=Ne.EMPTY;return}const x=h!==void 0?h:lw;if(this.triangulation_=new uw(e,n,m,_,v*x,y),this.triangulation_.getTriangles().length===0){this.state=Ne.EMPTY;return}this.sourceZ_=t.getZForResolution(v);let S=this.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(S[1]=Lt(S[1],_[1],_[3]),S[3]=Lt(S[3],_[1],_[3])):S=os(S,_)),!Pl(S))this.state=Ne.EMPTY;else{const R=t.getTileRangeForExtentAndZ(S,this.sourceZ_);for(let T=R.minX;T<=R.maxX;T++)for(let P=R.minY;P<=R.maxY;P++){const E=c(this.sourceZ_,T,P,a);E&&this.sourceTiles_.push(E)}this.sourceTiles_.length===0&&(this.state=Ne.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(t=>{t&&t.getState()==Ne.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),image:t.getImage()})}),this.sourceTiles_.length=0,e.length===0)this.state=Ne.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),r=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(t),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=pw(r,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=Ne.LOADED}this.changed()}load(){if(this.state==Ne.IDLE){this.state=Ne.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(t=>{const n=t.getState();if(n==Ne.IDLE||n==Ne.LOADING){e++;const r=st(t,Ye.CHANGE,function(s){const o=t.getState();(o==Ne.LOADED||o==Ne.ERROR||o==Ne.EMPTY)&&(vt(r),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(r)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t,n,r){t.getState()==Ne.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(vt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(fc(this.canvas_.getContext("2d")),Lr.push(this.canvas_),this.canvas_=null),super.release()}}const Hl=mw;class gw extends WS{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=Hi(),this.tmpTileRange_=new op(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),n=e.getState(),r=t.getUseInterimTilesOnError();return n==Ne.LOADED||n==Ne.EMPTY||n==Ne.ERROR&&!r}getTile(e,t,n,r){const s=r.pixelRatio,o=r.viewState.projection,a=this.getLayer();let c=a.getSource().getTile(e,t,n,s,o);return c.getState()==Ne.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(c)||(c=c.getInterimTile()),c}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),r=ln(t.pixelToCoordinateTransform,e.slice()),s=n.getExtent();if(s&&!ic(s,r))return null;const o=t.pixelRatio,a=t.viewState.projection,l=t.viewState,c=n.getRenderSource(),h=c.getTileGridForProjection(l.projection),u=c.getTilePixelRatio(t.pixelRatio);for(let d=h.getZForResolution(l.resolution);d>=h.getMinZoom();--d){const f=h.getTileCoordForCoordAndZ(r,d),g=c.getTile(d,f[1],f[2],o,a);if(!(g instanceof Kf||g instanceof Hl)||g instanceof Hl&&g.getState()===Ne.EMPTY)return null;if(g.getState()!==Ne.LOADED)continue;const _=h.getOrigin(d),m=sn(h.getTileSize(d)),p=h.getResolution(d),y=Math.floor(u*((r[0]-_[0])/p-f[1]*m[0])),v=Math.floor(u*((_[1]-r[1])/p-f[2]*m[1])),x=Math.round(u*c.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),y+x,v+x)}return null}loadedTileCallback(e,t,n){return this.isDrawableTile(n)?super.loadedTileCallback(e,t,n):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const n=e.layerStatesArray[e.layerIndex],r=e.viewState,s=r.projection,o=r.resolution,a=r.center,l=r.rotation,c=e.pixelRatio,h=this.getLayer(),u=h.getSource(),d=u.getRevision(),f=u.getTileGridForProjection(s),g=f.getZForResolution(o,u.zDirection),_=f.getResolution(g);let m=e.extent;const p=e.viewState.resolution,y=u.getTilePixelRatio(c),v=Math.round(St(m)/p*c),x=Math.round(fn(m)/p*c),S=n.extent&&Mr(n.extent);S&&(m=os(m,Mr(n.extent)));const R=_*v/2/y,T=_*x/2/y,P=[a[0]-R,a[1]-T,a[0]+R,a[1]+T],E=f.getTileRangeForExtentAndZ(m,g),b={};b[g]={};const U=this.createLoadedTileFinder(u,s,b),Z=this.tmpExtent,K=this.tmpTileRange_;this.newTiles_=!1;const N=l?Dl(r.center,p,l,e.size):void 0;for(let oe=E.minX;oe<=E.maxX;++oe)for(let ae=E.minY;ae<=E.maxY;++ae){if(l&&!f.tileCoordIntersectsViewport([g,oe,ae],N))continue;const he=this.getTile(g,oe,ae,e);if(this.isDrawableTile(he)){const Ee=qt(this);if(he.getState()==Ne.LOADED){b[g][he.tileCoord.toString()]=he;let Be=he.inTransition(Ee);Be&&n.opacity!==1&&(he.endTransition(Ee),Be=!1),!this.newTiles_&&(Be||!this.renderedTiles.includes(he))&&(this.newTiles_=!0)}if(he.getAlpha(Ee,e.time)===1)continue}const we=f.getTileCoordChildTileRange(he.tileCoord,K,Z);let xe=!1;we&&(xe=U(g+1,we)),xe||f.forEachTileCoordParentTileRange(he.tileCoord,U,K,Z)}const B=_/o*c/y;ms(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,l,-v/2,-x/2);const Y=Wx(this.pixelTransform);this.useContainer(t,Y,this.getBackground(e));const k=this.getRenderContext(e),ee=this.context.canvas;lf(this.inversePixelTransform,this.pixelTransform),ms(this.tempTransform,v/2,x/2,B,B,0,-v/2,-x/2),ee.width!=v||ee.height!=x?(ee.width=v,ee.height=x):this.containerReused||k.clearRect(0,0,v,x),S&&this.clipUnrotated(k,e,S),u.getInterpolate()||(k.imageSmoothingEnabled=!1),this.preRender(k,e),this.renderedTiles.length=0;let H=Object.keys(b).map(Number);H.sort(Ko);let $,O,V;n.opacity===1&&(!this.containerReused||u.getOpaque(e.viewState.projection))?H=H.reverse():($=[],O=[]);for(let oe=H.length-1;oe>=0;--oe){const ae=H[oe],he=u.getTilePixelSize(ae,c,s),xe=f.getResolution(ae)/_,Ee=he[0]*xe*B,Be=he[1]*xe*B,qe=f.getTileCoordForCoordAndZ(Wi(P),ae),Pe=f.getTileCoordExtent(qe),C=ln(this.tempTransform,[y*(Pe[0]-P[0])/_,y*(P[3]-Pe[3])/_]),ue=y*u.getGutterForProjection(s),q=b[ae];for(const se in q){const J=q[se],Ae=J.tileCoord,ye=qe[1]-Ae[1],Me=Math.round(C[0]-(ye-1)*Ee),Ie=qe[2]-Ae[2],Ze=Math.round(C[1]-(Ie-1)*Be),Je=Math.round(C[0]-ye*Ee),A=Math.round(C[1]-Ie*Be),M=Me-Je,z=Ze-A,ie=g===ae,ne=ie&&J.getAlpha(qt(this),e.time)!==1;let re=!1;if(!ne)if($){V=[Je,A,Je+M,A,Je+M,A+z,Je,A+z];for(let Se=0,le=$.length;Se<le;++Se)if(g!==ae&&ae<O[Se]){const ce=$[Se];As([Je,A,Je+M,A+z],[ce[0],ce[3],ce[4],ce[7]])&&(re||(k.save(),re=!0),k.beginPath(),k.moveTo(V[0],V[1]),k.lineTo(V[2],V[3]),k.lineTo(V[4],V[5]),k.lineTo(V[6],V[7]),k.moveTo(ce[6],ce[7]),k.lineTo(ce[4],ce[5]),k.lineTo(ce[2],ce[3]),k.lineTo(ce[0],ce[1]),k.clip())}$.push(V),O.push(ae)}else k.clearRect(Je,A,M,z);this.drawTileImage(J,e,Je,A,M,z,ue,ie),$&&!ne?(re&&k.restore(),this.renderedTiles.unshift(J)):this.renderedTiles.push(J),this.updateUsedTiles(e.usedTiles,u,J)}}return this.renderedRevision=d,this.renderedResolution=_,this.extentChanged=!this.renderedExtent_||!Ll(this.renderedExtent_,P),this.renderedExtent_=P,this.renderedPixelRatio=c,this.renderedProjection=s,this.manageTilePyramid(e,u,f,c,s,m,g,h.getPreload()),this.scheduleExpireCache(e,u),this.postRender(this.context,e),n.extent&&k.restore(),k.imageSmoothingEnabled=!0,Y!==ee.style.transform&&(ee.style.transform=Y),this.container}drawTileImage(e,t,n,r,s,o,a,l){const c=this.getTileImage(e);if(!c)return;const h=this.getRenderContext(t),u=qt(this),d=t.layerStatesArray[t.layerIndex],f=d.opacity*(l?e.getAlpha(u,t.time):1),g=f!==h.globalAlpha;g&&(h.save(),h.globalAlpha=f),h.drawImage(c,a,a,c.width-2*a,c.height-2*a,n,r,s,o),g&&h.restore(),f!==d.opacity?t.animate=!0:l&&e.endTransition(u)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const n=(function(r,s,o){const a=qt(r);a in o.usedTiles&&r.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,t);e.postRenderFunctions.push(n)}}updateUsedTiles(e,t,n){const r=qt(t);r in e||(e[r]={}),e[r][n.getKey()]=!0}manageTilePyramid(e,t,n,r,s,o,a,l,c){const h=qt(t);h in e.wantedTiles||(e.wantedTiles[h]={});const u=e.wantedTiles[h],d=e.tileQueue,f=n.getMinZoom(),g=e.viewState.rotation,_=g?Dl(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let m=0,p,y,v,x,S,R;for(R=f;R<=a;++R)for(y=n.getTileRangeForExtentAndZ(o,R,y),v=n.getResolution(R),x=y.minX;x<=y.maxX;++x)for(S=y.minY;S<=y.maxY;++S)g&&!n.tileCoordIntersectsViewport([R,x,S],_)||(a-R<=l?(++m,p=t.getTile(R,x,S,r,s),p.getState()==Ne.IDLE&&(u[p.getKey()]=!0,d.isKeyQueued(p.getKey())||d.enqueue([p,h,n.getTileCoordCenter(p.tileCoord),v])),c!==void 0&&c(p)):t.useTile(R,x,S,s));t.updateCacheSize(m,s)}}const _w=gw;class vw extends aw{constructor(e){super(e)}createRenderer(){return new _w(this)}}const $w=vw,pl={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},fr=[0,0,0],ai=5;class yw{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,ot(Ox(this.resolutions_,(r,s)=>s-r,!0),"`resolutions` must be sorted in descending order");let t;if(!e.origins){for(let r=0,s=this.resolutions_.length-1;r<s;++r)if(!t)t=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,ot(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const n=e.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Wi(n)),ot(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,ot(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:Sc,ot(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((r,s)=>{const o=new op(Math.min(0,r[0]),Math.max(r[0]-1,-1),Math.min(0,r[1]),Math.max(r[1]-1,-1));if(n){const a=this.getTileRangeForExtentAndZ(n,s);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):n&&this.calculateTileRanges_(n)}forEachTileCoord(e,t,n){const r=this.getTileRangeForExtentAndZ(e,t);for(let s=r.minX,o=r.maxX;s<=o;++s)for(let a=r.minY,l=r.maxY;a<=l;++a)n([t,s,a])}forEachTileCoordParentTileRange(e,t,n,r){let s,o,a,l=null,c=e[0]-1;for(this.zoomFactor_===2?(o=e[1],a=e[2]):l=this.getTileCoordExtent(e,r);c>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),s=dr(o,o,a,a,n)):s=this.getTileRangeForExtentAndZ(l,c,n),t(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const s=e[1]*2,o=e[2]*2;return dr(s,s+1,o,o+1,t)}const r=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;const r=e[0],s=e[1],o=e[2];if(t===r)return dr(s,o,s,o,n);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,t-r),c=Math.floor(s*l),h=Math.floor(o*l);if(t<r)return dr(c,c,h,h,n);const u=Math.floor(l*(s+1))-1,d=Math.floor(l*(o+1))-1;return dr(c,u,h,d,n)}const a=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,fr);const r=fr[1],s=fr[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,fr);const o=fr[1],a=fr[2];return dr(r,o,s,a,n)}getTileCoordCenter(e){const t=this.getOrigin(e[0]),n=this.getResolution(e[0]),r=sn(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*r[0]*n,t[1]-(e[2]+.5)*r[1]*n]}getTileCoordExtent(e,t){const n=this.getOrigin(e[0]),r=this.getResolution(e[0]),s=sn(this.getTileSize(e[0]),this.tmpSize_),o=n[0]+e[1]*s[0]*r,a=n[1]-(e[2]+1)*s[1]*r,l=o+s[0]*r,c=a+s[1]*r;return bs(o,a,l,c,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,r,s){const o=this.getZForResolution(n),a=n/this.getResolution(o),l=this.getOrigin(o),c=sn(this.getTileSize(o),this.tmpSize_);let h=a*(e-l[0])/n/c[0],u=a*(l[1]-t)/n/c[1];return r?(h=go(h,ai)-1,u=go(u,ai)-1):(h=mo(h,ai),u=mo(u,ai)),dd(o,h,u,s)}getTileCoordForXYAndZ_(e,t,n,r,s){const o=this.getOrigin(n),a=this.getResolution(n),l=sn(this.getTileSize(n),this.tmpSize_);let c=(e-o[0])/a/l[0],h=(o[1]-t)/a/l[1];return r?(c=go(c,ai)-1,h=go(h,ai)-1):(c=mo(c,ai),h=mo(h,ai)),dd(n,c,h,s)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){const n=nc(this.resolutions_,e,t||0);return Lt(n,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return wf(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const t=this.resolutions_.length,n=new Array(t);for(let r=this.minZoom;r<t;++r)n[r]=this.getTileRangeForExtentAndZ(e,r);this.fullTileRanges_=n}}const ap=yw;function lp(i){let e=i.getDefaultTileGrid();return e||(e=Sw(i),i.setDefaultTileGrid(e)),e}function xw(i,e,t){const n=e[0],r=i.getTileCoordCenter(e),s=Dc(t);if(!ic(s,r)){const o=St(s),a=Math.ceil((s[0]-r[0])/o);return r[0]+=o*a,i.getTileCoordForCoordAndZ(r,n)}return e}function Ew(i,e,t,n){n=n!==void 0?n:"top-left";const r=cp(i,e,t);return new ap({extent:i,origin:$x(i,n),resolutions:r,tileSize:t})}function Mw(i){const e=i||{},t=e.extent||Sn("EPSG:3857").getExtent(),n={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:cp(t,e.maxZoom,e.tileSize,e.maxResolution)};return new ap(n)}function cp(i,e,t,n){e=e!==void 0?e:wM,t=sn(t!==void 0?t:Sc);const r=fn(i),s=St(i);n=n>0?n:Math.max(s/t[0],r/t[1]);const o=e+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=n/Math.pow(2,l);return a}function Sw(i,e,t,n){const r=Dc(i);return Ew(r,e,t,n)}function Dc(i){i=Sn(i);let e=i.getExtent();if(!e){const t=180*Or.degrees/i.getMetersPerUnit();e=bs(-t,-t,t,t)}return e}class Tw extends YS{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const t=[256,256];this.tileGrid&&sn(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tileCache=new rp(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,t){const n=this.getTileCacheForProjection(e);n&&n.expireCache(t)}forEachLoadedTile(e,t,n,r){const s=this.getTileCacheForProjection(e);if(!s)return!1;let o=!0,a,l,c;for(let h=n.minX;h<=n.maxX;++h)for(let u=n.minY;u<=n.maxY;++u)l=pa(t,h,u),c=!1,s.containsKey(l)&&(a=s.get(l),c=a.getState()===Ne.LOADED,c&&(c=r(a)!==!1)),c||(o=!1);return o}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,r,s){return tt()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:lp(e)}getTileCacheForProjection(e){const t=this.getProjection();return ot(t===null||mr(t,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){const r=this.getTileGridForProjection(n),s=this.getTilePixelRatio(t),o=sn(r.getTileSize(e),this.tmpSize);return s==1?o:pM(o,s,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){t=t!==void 0?t:this.getProjection();const n=this.getTileGridForProjection(t);return this.getWrapX()&&t.isGlobal()&&(e=xw(n,e,t)),rw(e,n)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,t){const n=this.getTileCacheForProjection(t);e>n.highWaterMark&&(n.highWaterMark=e)}useTile(e,t,n,r){}}class ww extends Si{constructor(e,t){super(e),this.tile=t}}const bw=Tw;function Aw(i,e){const t=/\{z\}/g,n=/\{x\}/g,r=/\{y\}/g,s=/\{-y\}/g;return function(o,a,l){if(o)return i.replace(t,o[0].toString()).replace(n,o[1].toString()).replace(r,o[2].toString()).replace(s,function(){const c=o[0],h=e.getFullTileRange(c);if(!h)throw new Error("The {-y} placeholder requires a tile grid with extent");return(h.getHeight()-o[2]-1).toString()})}}function Rw(i,e){const t=i.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=Aw(i[r],e);return Cw(n)}function Cw(i){return i.length===1?i[0]:function(e,t,n){if(!e)return;const r=iw(e),s=Cr(r,i.length);return i[s](e,t,n)}}function Lw(i){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(i);if(t){const n=t[1].charCodeAt(0),r=t[2].charCodeAt(0);let s;for(s=n;s<=r;++s)e.push(i.replace(t[0],String.fromCharCode(s)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(i),t){const n=parseInt(t[2],10);for(let r=parseInt(t[1],10);r<=n;r++)e.push(i.replace(t[0],r.toString()));return e}return e.push(i),e}class Nc extends bw{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Nc.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=qt(t),r=t.getState();let s;r==Ne.LOADING?(this.tileLoadingKeys_[n]=!0,s=pl.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=r==Ne.ERROR?pl.TILELOADERROR:r==Ne.LOADED?pl.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new ww(s,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=Lw(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(Rw(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const r=pa(e,t,n);this.tileCache.containsKey(r)&&this.tileCache.get(r)}}const Pw=Nc;class Iw extends Pw{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:Dw,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:Kf,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?t:{});for(const r in this.tileCacheForProjection){const s=this.tileCacheForProjection[r];s.expireCache(s==n?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!mr(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!mr(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||mr(t,e)))return this.tileGrid;const n=qt(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=lp(e)),this.tileGridForProjection[n]}getTileCacheForProjection(e){const t=this.getProjection();if(!t||mr(t,e))return this.tileCache;const n=qt(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new rp(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]}createTile_(e,t,n,r,s,o){const a=[e,t,n],l=this.getTileCoordForTileUrlFunction(a,s),c=l?this.tileUrlFunction(l,r,s):void 0,h=new this.tileClass(a,c!==void 0?Ne.IDLE:Ne.EMPTY,c!==void 0?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=o,h.addEventListener(Ye.CHANGE,this.handleTileChange.bind(this)),h}getTile(e,t,n,r,s){const o=this.getProjection();if(!o||!s||mr(o,s))return this.getTileInternal(e,t,n,r,o||s);const a=this.getTileCacheForProjection(s),l=[e,t,n];let c;const h=ip(l);a.containsKey(h)&&(c=a.get(h));const u=this.getKey();if(c&&c.key==u)return c;const d=this.getTileGridForProjection(o),f=this.getTileGridForProjection(s),g=this.getTileCoordForTileUrlFunction(l,s),_=new Hl(o,d,s,f,l,g,this.getTilePixelRatio(r),this.getGutter(),(m,p,y,v)=>this.getTileInternal(m,p,y,v,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return _.key=u,c?(_.interimTile=c,_.refreshInterimChain(),a.replace(h,_)):a.set(h,_),_}getTileInternal(e,t,n,r,s){let o=null;const a=pa(e,t,n),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(e,t,n,r,s,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const c=o;o=this.createTile_(e,t,n,r,s,l),c.getState()==Ne.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const n=Sn(e);if(n){const r=qt(n);r in this.tileGridForProjection||(this.tileGridForProjection[r]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function Dw(i,e){i.getImage().src=e}const Nw=Iw;class Ow extends Nw{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",n=e.tileGrid!==void 0?e.tileGrid:Mw({extent:Dc(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}const Jw=Ow,ml="units",Uw=[1,2,5],Kr=25.4/.28;class Fw extends fa{constructor(e){e=e||{};const t=document.createElement("div");t.style.pointerEvents="none",super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;const n=e.className!==void 0?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=n+"-inner",this.element.className=n+" "+Cs,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth!==void 0?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(ml,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(ml)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(ml,e)}setDpi(e){this.dpi_=e}updateElement_(){const e=this.viewState_;if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=e.center,n=e.projection,r=this.getUnits(),s=r=="degrees"?"degrees":"m";let o=Bo(n,e.resolution,t,s);const a=this.minWidth_*(this.dpi_||Kr)/Kr,l=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||Kr)/Kr:void 0;let c=a*o,h="";if(r=="degrees"){const v=Or.degrees;c*=v,c<v/60?(h="″",o*=3600):c<v?(h="′",o*=60):h="°"}else if(r=="imperial")c<.9144?(h="in",o/=.0254):c<1609.344?(h="ft",o/=.3048):(h="mi",o/=1609.344);else if(r=="nautical")o/=1852,h="NM";else if(r=="metric")c<1e-6?(h="nm",o*=1e9):c<.001?(h="μm",o*=1e6):c<1?(h="mm",o*=1e3):c<1e3?h="m":(h="km",o/=1e3);else if(r=="us")c<.9144?(h="in",o*=39.37):c<1609.344?(h="ft",o/=.30480061):(h="mi",o/=1609.3472);else throw new Error("Invalid units");let u=3*Math.floor(Math.log(a*o)/Math.log(10)),d,f,g,_,m,p;for(;;){g=Math.floor(u/3);const v=Math.pow(10,g);if(d=Uw[(u%3+3)%3]*v,f=Math.round(d/o),isNaN(f)){this.element.style.display="none",this.renderedVisible_=!1;return}if(l!==void 0&&f>=l){d=_,f=m,g=p;break}else if(f>=a)break;_=d,m=f,p=g,++u}const y=this.scaleBar_?this.createScaleBar(f,d,h):d.toFixed(g<0?-g:0)+" "+h;this.renderedHTML_!=y&&(this.innerElement_.innerHTML=y,this.renderedHTML_=y),this.renderedWidth_!=f&&(this.innerElement_.style.width=f+"px",this.renderedWidth_=f),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,t,n){const r=this.getScaleForResolution(),s=r<1?Math.round(1/r).toLocaleString()+" : 1":"1 : "+Math.round(r).toLocaleString(),o=this.scaleBarSteps_,a=e/o,l=[this.createMarker("absolute")];for(let h=0;h<o;++h){const u=h%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";l.push(`<div><div class="ol-scale-singlebar ${u}" style="width: ${a}px;"></div>`+this.createMarker("relative")+(h%2===0||o===2?this.createStepText(h,e,!1,t,n):"")+"</div>")}return l.push(this.createStepText(o,e,!0,t,n)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+s+"</div>":"")+l.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e==="absolute"?3:-10}px;"></div>`}createStepText(e,t,n,r,s){const a=(e===0?0:Math.round(r/this.scaleBarSteps_*e*100)/100)+(e===0?"":" "+s),l=e===0?-3:t/this.scaleBarSteps_*-1,c=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${l}px;text-align: ${e===0?"left":"center"};min-width: ${c}px;left: ${n?t+"px":"unset"};">`+a+"</div>"}getScaleForResolution(){const e=Bo(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),t=this.dpi_||Kr,n=1e3/25.4;return e*n*t}render(e){const t=e.frameState;t?this.viewState_=t.viewState:this.viewState_=null,this.updateElement_()}}const Qw=Fw;export{Hw as A,kw as C,Yn as D,Jl as E,Yw as F,no as G,sf as L,Kw as M,Xw as O,yn as P,Ot as S,Vw as T,D as V,Py as W,Jw as X,Gw as a,nf as b,Qw as c,yT as d,$w as e,qn as f,Od as g,jn as h,jt as i,Px as j,Zw as k,qw as l,Ww as m,Jd as n,_e as o};
