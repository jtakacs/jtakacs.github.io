(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gr="157",Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r2=0,Ur=1,s2=2,xo=1,_o=2,je=3,ci=0,ve=1,Be=2,li=0,tn=1,Ir=2,Nr=3,Zr=4,o2=5,Ji=100,l2=101,u2=102,Fr=103,Or=104,d2=200,c2=201,h2=202,m2=203,go=204,To=205,f2=206,p2=207,x2=208,_2=209,g2=210,T2=0,v2=1,M2=2,lr=3,S2=4,E2=5,y2=6,b2=7,vo=0,A2=1,w2=2,ui=0,z2=1,R2=2,C2=3,L2=4,P2=5,Mo=300,nn=301,an=302,ur=303,dr=304,ca=306,cr=1e3,Ue=1001,hr=1002,ge=1003,Br=1004,ba=1005,ze=1006,D2=1007,Mn=1008,di=1009,U2=1010,I2=1011,Tr=1012,So=1013,si=1014,oi=1015,Sn=1016,Eo=1017,yo=1018,Mi=1020,N2=1021,Ie=1023,Z2=1024,F2=1025,Si=1026,rn=1027,O2=1028,bo=1029,B2=1030,Ao=1031,wo=1033,Aa=33776,wa=33777,za=33778,Ra=33779,Hr=35840,Gr=35841,Vr=35842,kr=35843,H2=36196,Wr=37492,Xr=37496,Yr=37808,qr=37809,jr=37810,Kr=37811,$r=37812,Jr=37813,Qr=37814,ts=37815,es=37816,is=37817,ns=37818,as=37819,rs=37820,ss=37821,Ca=36492,os=36494,ls=36495,G2=36283,us=36284,ds=36285,cs=36286,zo=3e3,Ei=3001,V2=3200,k2=3201,Ro=0,W2=1,Ce="",ae="srgb",Qe="srgb-linear",vr="display-p3",ha="display-p3-linear",ra="linear",Yt="srgb",sa="rec709",oa="p3",La=7680,X2=519,Y2=512,q2=513,j2=514,K2=515,$2=516,J2=517,Q2=518,t0=519,mr=35044,hs="300 es",fr=1035,Ke=2e3,la=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ms=1234567;const gn=Math.PI/180,En=180/Math.PI;function $e(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[i&255]+he[i>>8&255]+he[i>>16&255]+he[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Mr(n,t){return(n%t+t)%t}function e0(n,t,e,i,a){return i+(n-t)*(a-i)/(e-t)}function i0(n,t,e){return n!==t?(e-n)/(t-n):0}function Tn(n,t,e){return(1-e)*n+e*t}function n0(n,t,e,i){return Tn(n,t,1-Math.exp(-e*i))}function a0(n,t=1){return t-Math.abs(Mr(n,t*2)-t)}function r0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function s0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function o0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function l0(n,t){return n+Math.random()*(t-n)}function u0(n){return n*(.5-Math.random())}function d0(n){n!==void 0&&(ms=n);let t=ms+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c0(n){return n*gn}function h0(n){return n*En}function pr(n){return(n&n-1)===0&&n!==0}function m0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ua(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function f0(n,t,e,i,a){const r=Math.cos,o=Math.sin,s=r(e/2),l=o(e/2),u=r((t+i)/2),d=o((t+i)/2),h=r((t-i)/2),m=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(a){case"XYX":n.set(s*d,l*h,l*m,s*u);break;case"YZY":n.set(l*m,s*d,l*h,s*u);break;case"ZXZ":n.set(l*h,l*m,s*d,s*u);break;case"XZX":n.set(s*d,l*_,l*p,s*u);break;case"YXY":n.set(l*p,s*d,l*_,s*u);break;case"ZYZ":n.set(l*_,l*p,s*d,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const p0={DEG2RAD:gn,RAD2DEG:En,generateUUID:$e,clamp:de,euclideanModulo:Mr,mapLinear:e0,inverseLerp:i0,lerp:Tn,damp:n0,pingpong:a0,smoothstep:r0,smootherstep:s0,randInt:o0,randFloat:l0,randFloatSpread:u0,seededRandom:d0,degToRad:c0,radToDeg:h0,isPowerOfTwo:pr,ceilPowerOfTwo:m0,floorPowerOfTwo:ua,setQuaternionFromProperEuler:f0,normalize:Vt,denormalize:He};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*a+t.x,this.y=r*a+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,a,r,o,s,l,u){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,r,o,s,l,u)}set(t,e,i,a,r,o,s,l,u){const d=this.elements;return d[0]=t,d[1]=a,d[2]=s,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,r=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],d=i[4],h=i[7],m=i[2],p=i[5],_=i[8],g=a[0],f=a[3],c=a[6],z=a[1],v=a[4],E=a[7],w=a[2],L=a[5],b=a[8];return r[0]=o*g+s*z+l*w,r[3]=o*f+s*v+l*L,r[6]=o*c+s*E+l*b,r[1]=u*g+d*z+h*w,r[4]=u*f+d*v+h*L,r[7]=u*c+d*E+h*b,r[2]=m*g+p*z+_*w,r[5]=m*f+p*v+_*L,r[8]=m*c+p*E+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],u=t[7],d=t[8];return e*o*d-e*s*u-i*r*d+i*s*l+a*r*u-a*o*l}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],u=t[7],d=t[8],h=d*o-s*u,m=s*l-d*r,p=u*r-o*l,_=e*h+i*m+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(a*u-d*i)*g,t[2]=(s*i-a*o)*g,t[3]=m*g,t[4]=(d*e-a*l)*g,t[5]=(a*r-s*e)*g,t[6]=p*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,r,o,s){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*s)+o+t,-a*u,a*l,-a*(-u*o+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Zt;function Co(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x0(){const n=yn("canvas");return n.style.display="block",n}const fs={};function vn(n){n in fs||(fs[n]=!0,console.warn(n))}const ps=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xs=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rn={[Qe]:{transfer:ra,primaries:sa,toReference:n=>n,fromReference:n=>n},[ae]:{transfer:Yt,primaries:sa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ha]:{transfer:ra,primaries:oa,toReference:n=>n.applyMatrix3(xs),fromReference:n=>n.applyMatrix3(ps)},[vr]:{transfer:Yt,primaries:oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xs),fromReference:n=>n.applyMatrix3(ps).convertLinearToSRGB()}},_0=new Set([Qe,ha]),kt={enabled:!0,_workingColorSpace:Qe,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Rn[t].toReference,a=Rn[e].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Rn[n].primaries},getTransfer:function(n){return n===Ce?ra:Rn[n].transfer}};function en(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Lo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=yn("canvas")),Pi.width=t.width,Pi.height=t.height;const i=Pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yn("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=en(r[o]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(en(e[i]/255)*255):e[i]=en(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let g0=0;class Po{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=$e(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(Ua(a[o].image)):r.push(Ua(a[o]))}else r=Ua(a);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Me extends zi{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,i=Ue,a=Ue,r=ze,o=Mn,s=Ie,l=di,u=Me.DEFAULT_ANISOTROPY,d=Ce){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=$e(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(vn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ei?ae:Ce),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ae?Ei:zo}set encoding(t){vn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?ae:Ce}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Mo;Me.DEFAULT_ANISOTROPY=1;class qt{constructor(t=0,e=0,i=0,a=1){qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*a+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*a+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*a+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,r;const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],f=l[6],c=l[10];if(Math.abs(d-m)<.01&&Math.abs(h-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+m)<.1&&Math.abs(h+g)<.1&&Math.abs(_+f)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,E=(p+1)/2,w=(c+1)/2,L=(d+m)/4,b=(h+g)/4,F=(_+f)/4;return v>E&&v>w?v<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(v),a=L/i,r=b/i):E>w?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=L/a,r=F/a):w<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(w),i=b/r,a=F/r),this.set(i,a,r,e),this}let z=Math.sqrt((f-_)*(f-_)+(h-g)*(h-g)+(m-d)*(m-d));return Math.abs(z)<.001&&(z=1),this.x=(f-_)/z,this.y=(h-g)/z,this.z=(m-d)/z,this.w=Math.acos((u+p+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v0 extends zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qt(0,0,t,e),this.scissorTest=!1,this.viewport=new qt(0,0,t,e);const a={width:t,height:e,depth:1};i.encoding!==void 0&&(vn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?ae:Ce),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Me(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends v0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Do extends Me{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M0 extends Me{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,r,o,s){let l=i[a+0],u=i[a+1],d=i[a+2],h=i[a+3];const m=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(s===0){t[e+0]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h;return}if(s===1){t[e+0]=m,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==m||u!==p||d!==_){let f=1-s;const c=l*m+u*p+d*_+h*g,z=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const w=Math.sqrt(v),L=Math.atan2(w,c*z);f=Math.sin(f*L)/w,s=Math.sin(s*L)/w}const E=s*z;if(l=l*f+m*E,u=u*f+p*E,d=d*f+_*E,h=h*f+g*E,f===1-s){const w=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=w,u*=w,d*=w,h*=w}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,a,r,o){const s=i[a],l=i[a+1],u=i[a+2],d=i[a+3],h=r[o],m=r[o+1],p=r[o+2],_=r[o+3];return t[e]=s*_+d*h+l*p-u*m,t[e+1]=l*_+d*m+u*h-s*p,t[e+2]=u*_+d*p+s*m-l*h,t[e+3]=d*_-s*h-l*m-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,a=t._y,r=t._z,o=t._order,s=Math.cos,l=Math.sin,u=s(i/2),d=s(a/2),h=s(r/2),m=l(i/2),p=l(a/2),_=l(r/2);switch(o){case"XYZ":this._x=m*d*h+u*p*_,this._y=u*p*h-m*d*_,this._z=u*d*_+m*p*h,this._w=u*d*h-m*p*_;break;case"YXZ":this._x=m*d*h+u*p*_,this._y=u*p*h-m*d*_,this._z=u*d*_-m*p*h,this._w=u*d*h+m*p*_;break;case"ZXY":this._x=m*d*h-u*p*_,this._y=u*p*h+m*d*_,this._z=u*d*_+m*p*h,this._w=u*d*h-m*p*_;break;case"ZYX":this._x=m*d*h-u*p*_,this._y=u*p*h+m*d*_,this._z=u*d*_-m*p*h,this._w=u*d*h+m*p*_;break;case"YZX":this._x=m*d*h+u*p*_,this._y=u*p*h+m*d*_,this._z=u*d*_-m*p*h,this._w=u*d*h-m*p*_;break;case"XZY":this._x=m*d*h-u*p*_,this._y=u*p*h-m*d*_,this._z=u*d*_+m*p*h,this._w=u*d*h+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],r=e[8],o=e[1],s=e[5],l=e[9],u=e[2],d=e[6],h=e[10],m=i+s+h;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(o-a)*p}else if(i>s&&i>h){const p=2*Math.sqrt(1+i-s-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+o)/p,this._z=(r+u)/p}else if(s>h){const p=2*Math.sqrt(1+s-i-h);this._w=(r-u)/p,this._x=(a+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-s);this._w=(o-a)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,r=t._z,o=t._w,s=e._x,l=e._y,u=e._z,d=e._w;return this._x=i*d+o*s+a*u-r*l,this._y=a*d+o*l+r*s-i*u,this._z=r*d+o*u+i*l-a*s,this._w=o*d-i*s-a*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,o=this._w;let s=o*t._w+i*t._x+a*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=i,this._y=a,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,s),h=Math.sin((1-e)*d)/u,m=Math.sin(e*d)/u;return this._w=o*h+this._w*m,this._x=i*h+this._x*m,this._y=a*h+this._y*m,this._z=r*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),i*Math.sin(r),i*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_s.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_s.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*a,this.y=r[1]*e+r[4]*i+r[7]*a,this.z=r[2]*e+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*a+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*a+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*a+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,r=t.x,o=t.y,s=t.z,l=t.w,u=l*e+o*a-s*i,d=l*i+s*e-r*a,h=l*a+r*i-o*e,m=-r*e-o*i-s*a;return this.x=u*l+m*-r+d*-s-h*-o,this.y=d*l+m*-o+h*-r-u*-s,this.z=h*l+m*-s+u*-o-d*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*a,this.y=r[1]*e+r[5]*i+r[9]*a,this.z=r[2]*e+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,r=t.z,o=e.x,s=e.y,l=e.z;return this.x=a*l-r*s,this.y=r*o-i*l,this.z=i*s-a*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new C,_s=new bi;class bn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Di.copy(t.boundingBox),Di.applyMatrix4(t.matrixWorld),this.union(Di);else{const a=t.geometry;if(a!==void 0)if(e&&a.attributes!==void 0&&a.attributes.position!==void 0){const r=a.attributes.position;for(let o=0,s=r.count;o<s;o++)ke.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ke)}else a.boundingBox===null&&a.computeBoundingBox(),Di.copy(a.boundingBox),Di.applyMatrix4(t.matrixWorld),this.union(Di)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(un),Cn.subVectors(this.max,un),Ui.subVectors(t.a,un),Ii.subVectors(t.b,un),Ni.subVectors(t.c,un),ti.subVectors(Ii,Ui),ei.subVectors(Ni,Ii),pi.subVectors(Ui,Ni);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-pi.z,pi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,pi.z,0,-pi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-pi.y,pi.x,0];return!Na(e,Ui,Ii,Ni,Cn)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Ui,Ii,Ni,Cn))?!1:(Ln.crossVectors(ti,ei),e=[Ln.x,Ln.y,Ln.z],Na(e,Ui,Ii,Ni,Cn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new C,new C,new C,new C,new C,new C,new C,new C],ke=new C,Di=new bn,Ui=new C,Ii=new C,Ni=new C,ti=new C,ei=new C,pi=new C,un=new C,Cn=new C,Ln=new C,xi=new C;function Na(n,t,e,i,a){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);const s=a.x*Math.abs(xi.x)+a.y*Math.abs(xi.y)+a.z*Math.abs(xi.z),l=t.dot(xi),u=e.dot(xi),d=i.dot(xi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>s)return!1}return!0}const S0=new bn,dn=new C,Za=new C;class ma{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):S0.setFromPoints(t).getCenter(i);let a=0;for(let r=0,o=t.length;r<o;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dn.subVectors(t,this.center);const e=dn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(dn,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dn.copy(t.center).add(Za)),this.expandByPoint(dn.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new C,Fa=new C,Pn=new C,ii=new C,Oa=new C,Dn=new C,Ba=new C;class Sr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Fa.copy(t).add(e).multiplyScalar(.5),Pn.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Fa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pn),s=ii.dot(this.direction),l=-ii.dot(Pn),u=ii.lengthSq(),d=Math.abs(1-o*o);let h,m,p,_;if(d>0)if(h=o*l-s,m=o*s-l,_=r*d,h>=0)if(m>=-_)if(m<=_){const g=1/d;h*=g,m*=g,p=h*(h+o*m+2*s)+m*(o*h+m+2*l)+u}else m=r,h=Math.max(0,-(o*m+s)),p=-h*h+m*(m+2*l)+u;else m=-r,h=Math.max(0,-(o*m+s)),p=-h*h+m*(m+2*l)+u;else m<=-_?(h=Math.max(0,-(-o*r+s)),m=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+m*(m+2*l)+u):m<=_?(h=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+u):(h=Math.max(0,-(o*r+s)),m=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+m*(m+2*l)+u);else m=o>0?-r:r,h=Math.max(0,-(o*m+s)),p=-h*h+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Fa).addScaledVector(Pn,m),p}intersectSphere(t,e){We.subVectors(t.center,this.origin);const i=We.dot(this.direction),a=We.dot(We)-i*i,r=t.radius*t.radius;if(a>r)return null;const o=Math.sqrt(r-a),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,r,o,s,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,m=this.origin;return u>=0?(i=(t.min.x-m.x)*u,a=(t.max.x-m.x)*u):(i=(t.max.x-m.x)*u,a=(t.min.x-m.x)*u),d>=0?(r=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(r=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),i>o||r>a||((r>i||isNaN(i))&&(i=r),(o<a||isNaN(a))&&(a=o),h>=0?(s=(t.min.z-m.z)*h,l=(t.max.z-m.z)*h):(s=(t.max.z-m.z)*h,l=(t.min.z-m.z)*h),i>l||s>a)||((s>i||i!==i)&&(i=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,i,a,r){Oa.subVectors(e,t),Dn.subVectors(i,t),Ba.crossVectors(Oa,Dn);let o=this.direction.dot(Ba),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=s*this.direction.dot(Dn.crossVectors(ii,Dn));if(l<0)return null;const u=s*this.direction.dot(Oa.cross(ii));if(u<0||l+u>o)return null;const d=-s*ii.dot(Ba);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,a,r,o,s,l,u,d,h,m,p,_,g,f){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,r,o,s,l,u,d,h,m,p,_,g,f)}set(t,e,i,a,r,o,s,l,u,d,h,m,p,_,g,f){const c=this.elements;return c[0]=t,c[4]=e,c[8]=i,c[12]=a,c[1]=r,c[5]=o,c[9]=s,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=m,c[3]=p,c[7]=_,c[11]=g,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,r=t.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(a),u=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const m=o*d,p=o*h,_=s*d,g=s*h;e[0]=l*d,e[4]=-l*h,e[8]=u,e[1]=p+_*u,e[5]=m-g*u,e[9]=-s*l,e[2]=g-m*u,e[6]=_+p*u,e[10]=o*l}else if(t.order==="YXZ"){const m=l*d,p=l*h,_=u*d,g=u*h;e[0]=m+g*s,e[4]=_*s-p,e[8]=o*u,e[1]=o*h,e[5]=o*d,e[9]=-s,e[2]=p*s-_,e[6]=g+m*s,e[10]=o*l}else if(t.order==="ZXY"){const m=l*d,p=l*h,_=u*d,g=u*h;e[0]=m-g*s,e[4]=-o*h,e[8]=_+p*s,e[1]=p+_*s,e[5]=o*d,e[9]=g-m*s,e[2]=-o*u,e[6]=s,e[10]=o*l}else if(t.order==="ZYX"){const m=o*d,p=o*h,_=s*d,g=s*h;e[0]=l*d,e[4]=_*u-p,e[8]=m*u+g,e[1]=l*h,e[5]=g*u+m,e[9]=p*u-_,e[2]=-u,e[6]=s*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,p=o*u,_=s*l,g=s*u;e[0]=l*d,e[4]=g-m*h,e[8]=_*h+p,e[1]=h,e[5]=o*d,e[9]=-s*d,e[2]=-u*d,e[6]=p*h+_,e[10]=m-g*h}else if(t.order==="XZY"){const m=o*l,p=o*u,_=s*l,g=s*u;e[0]=l*d,e[4]=-h,e[8]=u*d,e[1]=m*h+g,e[5]=o*d,e[9]=p*h-_,e[2]=_*h-p,e[6]=s*d,e[10]=g*h+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E0,t,y0)}lookAt(t,e,i){const a=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),ni.crossVectors(i,Ee),ni.lengthSq()===0&&(Math.abs(i.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),ni.crossVectors(i,Ee)),ni.normalize(),Un.crossVectors(Ee,ni),a[0]=ni.x,a[4]=Un.x,a[8]=Ee.x,a[1]=ni.y,a[5]=Un.y,a[9]=Ee.y,a[2]=ni.z,a[6]=Un.z,a[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,r=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],d=i[1],h=i[5],m=i[9],p=i[13],_=i[2],g=i[6],f=i[10],c=i[14],z=i[3],v=i[7],E=i[11],w=i[15],L=a[0],b=a[4],F=a[8],T=a[12],y=a[1],V=a[5],k=a[9],$=a[13],P=a[2],O=a[6],X=a[10],W=a[14],nt=a[3],K=a[7],q=a[11],D=a[15];return r[0]=o*L+s*y+l*P+u*nt,r[4]=o*b+s*V+l*O+u*K,r[8]=o*F+s*k+l*X+u*q,r[12]=o*T+s*$+l*W+u*D,r[1]=d*L+h*y+m*P+p*nt,r[5]=d*b+h*V+m*O+p*K,r[9]=d*F+h*k+m*X+p*q,r[13]=d*T+h*$+m*W+p*D,r[2]=_*L+g*y+f*P+c*nt,r[6]=_*b+g*V+f*O+c*K,r[10]=_*F+g*k+f*X+c*q,r[14]=_*T+g*$+f*W+c*D,r[3]=z*L+v*y+E*P+w*nt,r[7]=z*b+v*V+E*O+w*K,r[11]=z*F+v*k+E*X+w*q,r[15]=z*T+v*$+E*W+w*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],r=t[12],o=t[1],s=t[5],l=t[9],u=t[13],d=t[2],h=t[6],m=t[10],p=t[14],_=t[3],g=t[7],f=t[11],c=t[15];return _*(+r*l*h-a*u*h-r*s*m+i*u*m+a*s*p-i*l*p)+g*(+e*l*p-e*u*m+r*o*m-a*o*p+a*u*d-r*l*d)+f*(+e*u*h-e*s*p-r*o*h+i*o*p+r*s*d-i*u*d)+c*(-a*s*d-e*l*h+e*s*m+a*o*h-i*o*m+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],u=t[7],d=t[8],h=t[9],m=t[10],p=t[11],_=t[12],g=t[13],f=t[14],c=t[15],z=h*f*u-g*m*u+g*l*p-s*f*p-h*l*c+s*m*c,v=_*m*u-d*f*u-_*l*p+o*f*p+d*l*c-o*m*c,E=d*g*u-_*h*u+_*s*p-o*g*p-d*s*c+o*h*c,w=_*h*l-d*g*l-_*s*m+o*g*m+d*s*f-o*h*f,L=e*z+i*v+a*E+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/L;return t[0]=z*b,t[1]=(g*m*r-h*f*r-g*a*p+i*f*p+h*a*c-i*m*c)*b,t[2]=(s*f*r-g*l*r+g*a*u-i*f*u-s*a*c+i*l*c)*b,t[3]=(h*l*r-s*m*r-h*a*u+i*m*u+s*a*p-i*l*p)*b,t[4]=v*b,t[5]=(d*f*r-_*m*r+_*a*p-e*f*p-d*a*c+e*m*c)*b,t[6]=(_*l*r-o*f*r-_*a*u+e*f*u+o*a*c-e*l*c)*b,t[7]=(o*m*r-d*l*r+d*a*u-e*m*u-o*a*p+e*l*p)*b,t[8]=E*b,t[9]=(_*h*r-d*g*r-_*i*p+e*g*p+d*i*c-e*h*c)*b,t[10]=(o*g*r-_*s*r+_*i*u-e*g*u-o*i*c+e*s*c)*b,t[11]=(d*s*r-o*h*r-d*i*u+e*h*u+o*i*p-e*s*p)*b,t[12]=w*b,t[13]=(d*g*a-_*h*a+_*i*m-e*g*m-d*i*f+e*h*f)*b,t[14]=(_*s*a-o*g*a-_*i*l+e*g*l+o*i*f-e*s*f)*b,t[15]=(o*h*a-d*s*a+d*i*l-e*h*l-o*i*m+e*s*m)*b,this}scale(t){const e=this.elements,i=t.x,a=t.y,r=t.z;return e[0]*=i,e[4]*=a,e[8]*=r,e[1]*=i,e[5]*=a,e[9]*=r,e[2]*=i,e[6]*=a,e[10]*=r,e[3]*=i,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),r=1-i,o=t.x,s=t.y,l=t.z,u=r*o,d=r*s;return this.set(u*o+i,u*s-a*l,u*l+a*s,0,u*s+a*l,d*s+i,d*l-a*o,0,u*l-a*s,d*l+a*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,r,o){return this.set(1,i,r,0,t,1,o,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,r=e._x,o=e._y,s=e._z,l=e._w,u=r+r,d=o+o,h=s+s,m=r*u,p=r*d,_=r*h,g=o*d,f=o*h,c=s*h,z=l*u,v=l*d,E=l*h,w=i.x,L=i.y,b=i.z;return a[0]=(1-(g+c))*w,a[1]=(p+E)*w,a[2]=(_-v)*w,a[3]=0,a[4]=(p-E)*L,a[5]=(1-(m+c))*L,a[6]=(f+z)*L,a[7]=0,a[8]=(_+v)*b,a[9]=(f-z)*b,a[10]=(1-(m+g))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let r=Zi.set(a[0],a[1],a[2]).length();const o=Zi.set(a[4],a[5],a[6]).length(),s=Zi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Pe.copy(this);const u=1/r,d=1/o,h=1/s;return Pe.elements[0]*=u,Pe.elements[1]*=u,Pe.elements[2]*=u,Pe.elements[4]*=d,Pe.elements[5]*=d,Pe.elements[6]*=d,Pe.elements[8]*=h,Pe.elements[9]*=h,Pe.elements[10]*=h,e.setFromRotationMatrix(Pe),i.x=r,i.y=o,i.z=s,this}makePerspective(t,e,i,a,r,o,s=Ke){const l=this.elements,u=2*r/(e-t),d=2*r/(i-a),h=(e+t)/(e-t),m=(i+a)/(i-a);let p,_;if(s===Ke)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(s===la)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,a,r,o,s=Ke){const l=this.elements,u=1/(e-t),d=1/(i-a),h=1/(o-r),m=(e+t)*u,p=(i+a)*d;let _,g;if(s===Ke)_=(o+r)*h,g=-2*h;else if(s===la)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new C,Pe=new Kt,E0=new C(0,0,0),y0=new C(1,1,1),ni=new C,Un=new C,Ee=new C,gs=new Kt,Ts=new bi;class fa{constructor(t=0,e=0,i=0,a=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,r=a[0],o=a[4],s=a[8],l=a[1],u=a[5],d=a[9],h=a[2],m=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(de(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gs,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ts.setFromEuler(this),this.setFromQuaternion(Ts,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let b0=0;const vs=new C,Fi=new bi,Xe=new Kt,In=new C,cn=new C,A0=new C,w0=new bi,Ms=new C(1,0,0),Ss=new C(0,1,0),Es=new C(0,0,1),z0={type:"added"},R0={type:"removed"};class ce extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=$e(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new C,e=new fa,i=new bi,a=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Zt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Ms,t)}rotateY(t){return this.rotateOnAxis(Ss,t)}rotateZ(t){return this.rotateOnAxis(Es,t)}translateOnAxis(t,e){return vs.copy(t).applyQuaternion(this.quaternion),this.position.add(vs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ms,t)}translateY(t){return this.translateOnAxis(Ss,t)}translateZ(t){return this.translateOnAxis(Es,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?In.copy(t):In.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(cn,In,this.up):Xe.lookAt(In,cn,this.up),this.quaternion.setFromRotationMatrix(Xe),a&&(Xe.extractRotation(a.matrixWorld),Fi.setFromRotationMatrix(Xe),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(z0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let a=0,r=this.children.length;a<r;a++){const o=this.children[a].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,t,A0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,w0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++){const s=a[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(r(t.materials,this.material[l]));a.material=s}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(r(t.animations,l))}}if(e){const s=o(t.geometries),l=o(t.materials),u=o(t.textures),d=o(t.images),h=o(t.shapes),m=o(t.skeletons),p=o(t.animations),_=o(t.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function o(s){const l=[];for(const u in s){const d=s[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}ce.DEFAULT_UP=new C(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const De=new C,Ye=new C,Ha=new C,qe=new C,Oi=new C,Bi=new C,ys=new C,Ga=new C,Va=new C,ka=new C;let Nn=!1;class Re{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),De.subVectors(t,e),a.cross(De);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,i,a,r){De.subVectors(a,e),Ye.subVectors(i,e),Ha.subVectors(t,e);const o=De.dot(De),s=De.dot(Ye),l=De.dot(Ha),u=Ye.dot(Ye),d=Ye.dot(Ha),h=o*u-s*s;if(h===0)return r.set(-2,-1,-1);const m=1/h,p=(u*l-s*d)*m,_=(o*d-s*l)*m;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,qe),qe.x>=0&&qe.y>=0&&qe.x+qe.y<=1}static getUV(t,e,i,a,r,o,s,l){return Nn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nn=!0),this.getInterpolation(t,e,i,a,r,o,s,l)}static getInterpolation(t,e,i,a,r,o,s,l){return this.getBarycoord(t,e,i,a,qe),l.setScalar(0),l.addScaledVector(r,qe.x),l.addScaledVector(o,qe.y),l.addScaledVector(s,qe.z),l}static isFrontFacing(t,e,i,a){return De.subVectors(i,e),Ye.subVectors(t,e),De.cross(Ye).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),De.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Re.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Re.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,a,r){return Nn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nn=!0),Re.getInterpolation(t,this.a,this.b,this.c,e,i,a,r)}getInterpolation(t,e,i,a,r){return Re.getInterpolation(t,this.a,this.b,this.c,e,i,a,r)}containsPoint(t){return Re.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Re.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,r=this.c;let o,s;Oi.subVectors(a,i),Bi.subVectors(r,i),Ga.subVectors(t,i);const l=Oi.dot(Ga),u=Bi.dot(Ga);if(l<=0&&u<=0)return e.copy(i);Va.subVectors(t,a);const d=Oi.dot(Va),h=Bi.dot(Va);if(d>=0&&h<=d)return e.copy(a);const m=l*h-d*u;if(m<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Oi,o);ka.subVectors(t,r);const p=Oi.dot(ka),_=Bi.dot(ka);if(_>=0&&p<=_)return e.copy(r);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return s=u/(u-_),e.copy(i).addScaledVector(Bi,s);const f=d*_-p*h;if(f<=0&&h-d>=0&&p-_>=0)return ys.subVectors(r,a),s=(h-d)/(h-d+(p-_)),e.copy(a).addScaledVector(ys,s);const c=1/(f+g+m);return o=g*c,s=m*c,e.copy(i).addScaledVector(Oi,o).addScaledVector(Bi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let C0=0;class Ri extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=$e(),this.name="",this.type="Material",this.blending=tn,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=To,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tn&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(e){const r=a(t.textures),o=a(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Zn={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,kt.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=kt.workingColorSpace){if(t=Mr(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return kt.toWorkingColorSpace(this,a),this}setStyle(t,e=ae){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const i=Io[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=en(t.r),this.g=en(t.g),this.b=en(t.b),this}copyLinearToSRGB(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return kt.fromWorkingColorSpace(me.copy(this),t),Math.round(de(me.r*255,0,255))*65536+Math.round(de(me.g*255,0,255))*256+Math.round(de(me.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(me.copy(this),e);const i=me.r,a=me.g,r=me.b,o=Math.max(i,a,r),s=Math.min(i,a,r);let l,u;const d=(s+o)/2;if(s===o)l=0,u=0;else{const h=o-s;switch(u=d<=.5?h/(o+s):h/(2-o-s),o){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=ae){kt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,i=me.g,a=me.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Zn);const i=Tn(ai.h,Zn.h,e),a=Tn(ai.s,Zn.s,e),r=Tn(ai.l,Zn.l,e);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*a,this.g=r[1]*e+r[4]*i+r[7]*a,this.b=r[2]*e+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Bt;Bt.NAMES=Io;class Er extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new C,Fn=new Tt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mr,this.updateRange={offset:0,count:-1},this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix3(t),this.setXY(e,Fn.x,Fn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=He(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Vt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=He(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=He(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=He(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=He(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,r){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class No extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zo extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let L0=0;const we=new Kt,Xa=new ce,Hi=new C,ye=new bn,hn=new bn,le=new C;class Le extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=$e(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Co(t)?Zo:No)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,i){return we.makeTranslation(t,e,i),this.applyMatrix4(we),this}scale(t,e,i){return we.makeScale(t,e,i),this.applyMatrix4(we),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const r=e[i];ye.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const s=e[r];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(ye.min,hn.min),ye.expandByPoint(le),le.addVectors(ye.max,hn.max),ye.expandByPoint(le)):(ye.expandByPoint(hn.min),ye.expandByPoint(hn.max))}ye.getCenter(i);let a=0;for(let r=0,o=t.count;r<o;r++)le.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(le));if(e)for(let r=0,o=e.length;r<o;r++){const s=e[r],l=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)le.fromBufferAttribute(s,u),l&&(Hi.fromBufferAttribute(t,u),le.add(Hi)),a=Math.max(a,i.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,a=e.position.array,r=e.normal.array,o=e.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let y=0;y<s;y++)u[y]=new C,d[y]=new C;const h=new C,m=new C,p=new C,_=new Tt,g=new Tt,f=new Tt,c=new C,z=new C;function v(y,V,k){h.fromArray(a,y*3),m.fromArray(a,V*3),p.fromArray(a,k*3),_.fromArray(o,y*2),g.fromArray(o,V*2),f.fromArray(o,k*2),m.sub(h),p.sub(h),g.sub(_),f.sub(_);const $=1/(g.x*f.y-f.x*g.y);isFinite($)&&(c.copy(m).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar($),z.copy(p).multiplyScalar(g.x).addScaledVector(m,-f.x).multiplyScalar($),u[y].add(c),u[V].add(c),u[k].add(c),d[y].add(z),d[V].add(z),d[k].add(z))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let y=0,V=E.length;y<V;++y){const k=E[y],$=k.start,P=k.count;for(let O=$,X=$+P;O<X;O+=3)v(i[O+0],i[O+1],i[O+2])}const w=new C,L=new C,b=new C,F=new C;function T(y){b.fromArray(r,y*3),F.copy(b);const V=u[y];w.copy(V),w.sub(b.multiplyScalar(b.dot(V))).normalize(),L.crossVectors(F,V);const $=L.dot(d[y])<0?-1:1;l[y*4]=w.x,l[y*4+1]=w.y,l[y*4+2]=w.z,l[y*4+3]=$}for(let y=0,V=E.length;y<V;++y){const k=E[y],$=k.start,P=k.count;for(let O=$,X=$+P;O<X;O+=3)T(i[O+0]),T(i[O+1]),T(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const a=new C,r=new C,o=new C,s=new C,l=new C,u=new C,d=new C,h=new C;if(t)for(let m=0,p=t.count;m<p;m+=3){const _=t.getX(m+0),g=t.getX(m+1),f=t.getX(m+2);a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),d.subVectors(o,r),h.subVectors(a,r),d.cross(h),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,f),s.add(d),l.add(d),u.add(d),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let m=0,p=e.count;m<p;m+=3)a.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,r),h.subVectors(a,r),d.cross(h),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(s,l){const u=s.array,d=s.itemSize,h=s.normalized,m=new u.constructor(l.length*d);let p=0,_=0;for(let g=0,f=l.length;g<f;g++){s.isInterleavedBufferAttribute?p=l[g]*s.data.stride+s.offset:p=l[g]*d;for(let c=0;c<d;c++)m[_++]=u[p++]}return new Ze(m,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,a=this.attributes;for(const s in a){const l=a[s],u=t(l,i);e.setAttribute(s,u)}const r=this.morphAttributes;for(const s in r){const l=[],u=r[s];for(let d=0,h=u.length;d<h;d++){const m=u[d],p=t(m,i);l.push(p)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,m=u.length;h<m;h++){const p=u[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const u in a){const d=a[u];this.setAttribute(u,d.clone(e))}const r=t.morphAttributes;for(const u in r){const d=[],h=r[u];for(let m=0,p=h.length;m<p;m++)d.push(h[m].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bs=new Kt,_i=new Sr,On=new ma,As=new C,Gi=new C,Vi=new C,ki=new C,Ya=new C,Bn=new C,Hn=new Tt,Gn=new Tt,Vn=new Tt,ws=new C,zs=new C,Rs=new C,kn=new C,Wn=new C;class Ne extends ce{constructor(t=new Le,e=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const s=this.morphTargetInfluences;if(r&&s){Bn.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=s[l],h=r[l];d!==0&&(Ya.fromBufferAttribute(h,t),o?Bn.addScaledVector(Ya,d):Bn.addScaledVector(Ya.sub(e),d))}e.add(Bn)}return e}raycast(t,e){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),On.copy(i.boundingSphere),On.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(On.containsPoint(_i.origin)===!1&&(_i.intersectSphere(On,As)===null||_i.origin.distanceToSquared(As)>(t.far-t.near)**2))&&(bs.copy(r).invert(),_i.copy(t.ray).applyMatrix4(bs),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let a;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,m=r.groups,p=r.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],c=o[f.materialIndex],z=Math.max(f.start,p.start),v=Math.min(s.count,Math.min(f.start+f.count,p.start+p.count));for(let E=z,w=v;E<w;E+=3){const L=s.getX(E),b=s.getX(E+1),F=s.getX(E+2);a=Xn(this,c,t,i,u,d,h,L,b,F),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const _=Math.max(0,p.start),g=Math.min(s.count,p.start+p.count);for(let f=_,c=g;f<c;f+=3){const z=s.getX(f),v=s.getX(f+1),E=s.getX(f+2);a=Xn(this,o,t,i,u,d,h,z,v,E),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],c=o[f.materialIndex],z=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=z,w=v;E<w;E+=3){const L=E,b=E+1,F=E+2;a=Xn(this,c,t,i,u,d,h,L,b,F),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,c=g;f<c;f+=3){const z=f,v=f+1,E=f+2;a=Xn(this,o,t,i,u,d,h,z,v,E),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function P0(n,t,e,i,a,r,o,s){let l;if(t.side===ve?l=i.intersectTriangle(o,r,a,!0,s):l=i.intersectTriangle(a,r,o,t.side===ci,s),l===null)return null;Wn.copy(s),Wn.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Wn);return u<e.near||u>e.far?null:{distance:u,point:Wn.clone(),object:n}}function Xn(n,t,e,i,a,r,o,s,l,u){n.getVertexPosition(s,Gi),n.getVertexPosition(l,Vi),n.getVertexPosition(u,ki);const d=P0(n,t,e,i,Gi,Vi,ki,kn);if(d){a&&(Hn.fromBufferAttribute(a,s),Gn.fromBufferAttribute(a,l),Vn.fromBufferAttribute(a,u),d.uv=Re.getInterpolation(kn,Gi,Vi,ki,Hn,Gn,Vn,new Tt)),r&&(Hn.fromBufferAttribute(r,s),Gn.fromBufferAttribute(r,l),Vn.fromBufferAttribute(r,u),d.uv1=Re.getInterpolation(kn,Gi,Vi,ki,Hn,Gn,Vn,new Tt),d.uv2=d.uv1),o&&(ws.fromBufferAttribute(o,s),zs.fromBufferAttribute(o,l),Rs.fromBufferAttribute(o,u),d.normal=Re.getInterpolation(kn,Gi,Vi,ki,ws,zs,Rs,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c:u,normal:new C,materialIndex:0};Re.getNormal(Gi,Vi,ki,h.normal),d.face=h}return d}class An extends Le{constructor(t=1,e=1,i=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:r,depthSegments:o};const s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],d=[],h=[];let m=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,a,o,2),_("x","z","y",1,-1,t,i,-e,a,o,3),_("x","y","z",1,-1,t,e,i,a,r,4),_("x","y","z",-1,-1,t,e,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(h,2));function _(g,f,c,z,v,E,w,L,b,F,T){const y=E/b,V=w/F,k=E/2,$=w/2,P=L/2,O=b+1,X=F+1;let W=0,nt=0;const K=new C;for(let q=0;q<X;q++){const D=q*V-$;for(let B=0;B<O;B++){const ut=B*y-k;K[g]=ut*z,K[f]=D*v,K[c]=P,u.push(K.x,K.y,K.z),K[g]=0,K[f]=0,K[c]=L>0?1:-1,d.push(K.x,K.y,K.z),h.push(B/b),h.push(1-q/F),W+=1}}for(let q=0;q<F;q++)for(let D=0;D<b;D++){const B=m+D+O*q,ut=m+D+O*(q+1),ct=m+(D+1)+O*(q+1),ht=m+(D+1)+O*q;l.push(B,ut,ht),l.push(ut,ct,ht),nt+=6}s.addGroup(p,nt,T),p+=nt,m+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sn(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const a=n[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function _e(n){const t={};for(let e=0;e<n.length;e++){const i=sn(n[e]);for(const a in i)t[a]=i[a]}return t}function D0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fo(n){return n.getRenderTarget()===null?n.outputColorSpace:kt.workingColorSpace}const U0={clone:sn,merge:_e};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sn(t.uniforms),this.uniformsGroups=D0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?e.uniforms[a]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[a]={type:"m4",value:o.toArray()}:e.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Oo extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class be extends Oo{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=En*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return En*2*Math.atan(Math.tan(gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,a,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gn*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*a/l,e-=o.offsetY*i/u,a*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Z0 extends ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new be(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const r=new be(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new be(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const s=new be(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const l=new be(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const u=new be(Wi,Xi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,r,o,s,l]=e;for(const u of e)this.remove(u);if(t===Ke)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,u,d]=this.children,h=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,r),t.setRenderTarget(i,1,a),t.render(e,o),t.setRenderTarget(i,2,a),t.render(e,s),t.setRenderTarget(i,3,a),t.render(e,l),t.setRenderTarget(i,4,a),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,a),t.render(e,d),t.setRenderTarget(h,m,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bo extends Me{constructor(t,e,i,a,r,o,s,l,u,d){t=t!==void 0?t:[],e=e!==void 0?e:nn,super(t,e,i,a,r,o,s,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class F0 extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];e.encoding!==void 0&&(vn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?ae:Ce),this.texture=new Bo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new An(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ve,blending:li});r.uniforms.tEquirect.value=e;const o=new Ne(a,r),s=e.minFilter;return e.minFilter===Mn&&(e.minFilter=ze),new Z0(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,a){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,a);t.setRenderTarget(r)}}const qa=new C,O0=new C,B0=new Zt;class ri{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=qa.subVectors(i,e).cross(O0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qa),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||B0.getNormalMatrix(t),a=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ma,Yn=new C;class yr{constructor(t=new ri,e=new ri,i=new ri,a=new ri,r=new ri,o=new ri){this.planes=[t,e,i,a,r,o]}set(t,e,i,a,r,o){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(i),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ke){const i=this.planes,a=t.elements,r=a[0],o=a[1],s=a[2],l=a[3],u=a[4],d=a[5],h=a[6],m=a[7],p=a[8],_=a[9],g=a[10],f=a[11],c=a[12],z=a[13],v=a[14],E=a[15];if(i[0].setComponents(l-r,m-u,f-p,E-c).normalize(),i[1].setComponents(l+r,m+u,f+p,E+c).normalize(),i[2].setComponents(l+o,m+d,f+_,E+z).normalize(),i[3].setComponents(l-o,m-d,f-_,E-z).normalize(),i[4].setComponents(l-s,m-h,f-g,E-v).normalize(),e===Ke)i[5].setComponents(l+s,m+h,f+g,E+v).normalize();else if(e===la)i[5].setComponents(s,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Yn.x=a.normal.x>0?t.max.x:t.min.x,Yn.y=a.normal.y>0?t.max.y:t.min.y,Yn.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Yn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ho(){let n=null,t=!1,e=null,i=null;function a(r,o){e(r,o),i=n.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(a),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function H0(n,t){const e=t.isWebGL2,i=new WeakMap;function a(u,d){const h=u.array,m=u.usage,p=n.createBuffer();n.bindBuffer(d,p),n.bufferData(d,h,m),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function r(u,d,h){const m=d.array,p=d.updateRange;n.bindBuffer(h,u),p.count===-1?n.bufferSubData(h,0,m):(e?n.bufferSubData(h,p.offset*m.BYTES_PER_ELEMENT,m,p.offset,p.count):n.bufferSubData(h,p.offset*m.BYTES_PER_ELEMENT,m.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const m=i.get(u);(!m||m.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,a(u,d)):h.version<u.version&&(r(h.buffer,u,d),h.version=u.version)}return{get:o,remove:s,update:l}}class pa extends Le{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const r=t/2,o=e/2,s=Math.floor(i),l=Math.floor(a),u=s+1,d=l+1,h=t/s,m=e/l,p=[],_=[],g=[],f=[];for(let c=0;c<d;c++){const z=c*m-o;for(let v=0;v<u;v++){const E=v*h-r;_.push(E,-z,0),g.push(0,0,1),f.push(v/s),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let z=0;z<s;z++){const v=z+u*c,E=z+u*(c+1),w=z+1+u*(c+1),L=z+1+u*c;p.push(v,E,L),p.push(E,w,L)}this.setIndex(p),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.widthSegments,t.heightSegments)}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
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
#endif`,tl=`#ifdef USE_BUMPMAP
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
#endif`,el=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,il=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ol=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ll=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ul=`#define PI 3.141592653589793
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
} // validated`,dl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cl=`vec3 transformedNormal = objectNormal;
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
#endif`,hl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ml=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xl="gl_FragColor = linearToOutputTexel( gl_FragColor );",_l=`
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
}`,gl=`#ifdef USE_ENVMAP
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
#endif`,Tl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vl=`#ifdef USE_ENVMAP
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
#endif`,Ml=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sl=`#ifdef USE_ENVMAP
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
#endif`,El=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Al=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wl=`#ifdef USE_GRADIENTMAP
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
}`,zl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ll=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pl=`uniform bool receiveShadow;
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
#endif`,Dl=`#ifdef USE_ENVMAP
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
#endif`,Ul=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Il=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fl=`PhysicalMaterial material;
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
#endif`,Ol=`struct PhysicalMaterial {
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
}`,Bl=`
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
#endif`,Hl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ql=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kl=`#if defined( USE_POINTS_UV )
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
#endif`,$l=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ql=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tu=`#ifdef USE_MORPHNORMALS
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
#endif`,eu=`#ifdef USE_MORPHTARGETS
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
#endif`,iu=`#ifdef USE_MORPHTARGETS
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
#endif`,nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lu=`#ifdef USE_NORMALMAP
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
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yu=`float getShadowMask() {
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
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
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
#endif`,wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Uu=`#ifdef USE_TRANSMISSION
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`#include <common>
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
}`,Xu=`#if DEPTH_PACKING == 3200
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
}`,Yu=`#define DISTANCE
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
}`,qu=`#define DISTANCE
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ku=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`uniform float scale;
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
}`,Ju=`uniform vec3 diffuse;
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
}`,Qu=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,l1=`#define PHONG
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
}`,u1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,h1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:G0,alphahash_pars_fragment:V0,alphamap_fragment:k0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:q0,aomap_pars_fragment:j0,begin_vertex:K0,beginnormal_vertex:$0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:tl,clipping_planes_fragment:el,clipping_planes_pars_fragment:il,clipping_planes_pars_vertex:nl,clipping_planes_vertex:al,color_fragment:rl,color_pars_fragment:sl,color_pars_vertex:ol,color_vertex:ll,common:ul,cube_uv_reflection_fragment:dl,defaultnormal_vertex:cl,displacementmap_pars_vertex:hl,displacementmap_vertex:ml,emissivemap_fragment:fl,emissivemap_pars_fragment:pl,colorspace_fragment:xl,colorspace_pars_fragment:_l,envmap_fragment:gl,envmap_common_pars_fragment:Tl,envmap_pars_fragment:vl,envmap_pars_vertex:Ml,envmap_physical_pars_fragment:Dl,envmap_vertex:Sl,fog_vertex:El,fog_pars_vertex:yl,fog_fragment:bl,fog_pars_fragment:Al,gradientmap_pars_fragment:wl,lightmap_fragment:zl,lightmap_pars_fragment:Rl,lights_lambert_fragment:Cl,lights_lambert_pars_fragment:Ll,lights_pars_begin:Pl,lights_toon_fragment:Ul,lights_toon_pars_fragment:Il,lights_phong_fragment:Nl,lights_phong_pars_fragment:Zl,lights_physical_fragment:Fl,lights_physical_pars_fragment:Ol,lights_fragment_begin:Bl,lights_fragment_maps:Hl,lights_fragment_end:Gl,logdepthbuf_fragment:Vl,logdepthbuf_pars_fragment:kl,logdepthbuf_pars_vertex:Wl,logdepthbuf_vertex:Xl,map_fragment:Yl,map_pars_fragment:ql,map_particle_fragment:jl,map_particle_pars_fragment:Kl,metalnessmap_fragment:$l,metalnessmap_pars_fragment:Jl,morphcolor_vertex:Ql,morphnormal_vertex:tu,morphtarget_pars_vertex:eu,morphtarget_vertex:iu,normal_fragment_begin:nu,normal_fragment_maps:au,normal_pars_fragment:ru,normal_pars_vertex:su,normal_vertex:ou,normalmap_pars_fragment:lu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:cu,iridescence_pars_fragment:hu,opaque_fragment:mu,packing:fu,premultiplied_alpha_fragment:pu,project_vertex:xu,dithering_fragment:_u,dithering_pars_fragment:gu,roughnessmap_fragment:Tu,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:Mu,shadowmap_pars_vertex:Su,shadowmap_vertex:Eu,shadowmask_pars_fragment:yu,skinbase_vertex:bu,skinning_pars_vertex:Au,skinning_vertex:wu,skinnormal_vertex:zu,specularmap_fragment:Ru,specularmap_pars_fragment:Cu,tonemapping_fragment:Lu,tonemapping_pars_fragment:Pu,transmission_fragment:Du,transmission_pars_fragment:Uu,uv_pars_fragment:Iu,uv_pars_vertex:Nu,uv_vertex:Zu,worldpos_vertex:Fu,background_vert:Ou,background_frag:Bu,backgroundCube_vert:Hu,backgroundCube_frag:Gu,cube_vert:Vu,cube_frag:ku,depth_vert:Wu,depth_frag:Xu,distanceRGBA_vert:Yu,distanceRGBA_frag:qu,equirect_vert:ju,equirect_frag:Ku,linedashed_vert:$u,linedashed_frag:Ju,meshbasic_vert:Qu,meshbasic_frag:t1,meshlambert_vert:e1,meshlambert_frag:i1,meshmatcap_vert:n1,meshmatcap_frag:a1,meshnormal_vert:r1,meshnormal_frag:s1,meshphong_vert:o1,meshphong_frag:l1,meshphysical_vert:u1,meshphysical_frag:d1,meshtoon_vert:c1,meshtoon_frag:h1,points_vert:m1,points_frag:f1,shadow_vert:p1,shadow_frag:x1,sprite_vert:_1,sprite_frag:g1},ot={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Oe={basic:{uniforms:_e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:_e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:_e([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:_e([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:_e([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:_e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:_e([ot.points,ot.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:_e([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:_e([ot.common,ot.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:_e([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:_e([ot.sprite,ot.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:_e([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:_e([ot.lights,ot.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Oe.physical={uniforms:_e([Oe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const qn={r:0,b:0,g:0};function T1(n,t,e,i,a,r,o){const s=new Bt(0);let l=r===!0?0:1,u,d,h=null,m=0,p=null;function _(f,c){let z=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?e:t).get(v)),v===null?g(s,l):v&&v.isColor&&(g(v,1),z=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||z)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ca)?(d===void 0&&(d=new Ne(new An(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:sn(Oe.backgroundCube.uniforms),vertexShader:Oe.backgroundCube.vertexShader,fragmentShader:Oe.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=kt.getTransfer(v.colorSpace)!==Yt,(h!==v||m!==v.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=v,m=v.version,p=n.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ne(new pa(2,2),new Ai({name:"BackgroundMaterial",uniforms:sn(Oe.background.uniforms),vertexShader:Oe.background.vertexShader,fragmentShader:Oe.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=kt.getTransfer(v.colorSpace)!==Yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||m!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,m=v.version,p=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function g(f,c){f.getRGB(qn,Fo(n)),i.buffers.color.setClear(qn.r,qn.g,qn.b,c,o)}return{getClearColor:function(){return s},setClearColor:function(f,c=1){s.set(f),l=c,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(s,l)},render:_}}function v1(n,t,e,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,s={},l=f(null);let u=l,d=!1;function h(P,O,X,W,nt){let K=!1;if(o){const q=g(W,X,O);u!==q&&(u=q,p(u.object)),K=c(P,W,X,nt),K&&z(P,W,X,nt)}else{const q=O.wireframe===!0;(u.geometry!==W.id||u.program!==X.id||u.wireframe!==q)&&(u.geometry=W.id,u.program=X.id,u.wireframe=q,K=!0)}nt!==null&&e.update(nt,n.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,F(P,O,X,W),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function m(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,O,X){const W=X.wireframe===!0;let nt=s[P.id];nt===void 0&&(nt={},s[P.id]=nt);let K=nt[O.id];K===void 0&&(K={},nt[O.id]=K);let q=K[W];return q===void 0&&(q=f(m()),K[W]=q),q}function f(P){const O=[],X=[],W=[];for(let nt=0;nt<a;nt++)O[nt]=0,X[nt]=0,W[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:W,object:P,attributes:{},index:null}}function c(P,O,X,W){const nt=u.attributes,K=O.attributes;let q=0;const D=X.getAttributes();for(const B in D)if(D[B].location>=0){const ct=nt[B];let ht=K[B];if(ht===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor)),ct===void 0||ct.attribute!==ht||ht&&ct.data!==ht.data)return!0;q++}return u.attributesNum!==q||u.index!==W}function z(P,O,X,W){const nt={},K=O.attributes;let q=0;const D=X.getAttributes();for(const B in D)if(D[B].location>=0){let ct=K[B];ct===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor));const ht={};ht.attribute=ct,ct&&ct.data&&(ht.data=ct.data),nt[B]=ht,q++}u.attributes=nt,u.attributesNum=q,u.index=W}function v(){const P=u.newAttributes;for(let O=0,X=P.length;O<X;O++)P[O]=0}function E(P){w(P,0)}function w(P,O){const X=u.newAttributes,W=u.enabledAttributes,nt=u.attributeDivisors;X[P]=1,W[P]===0&&(n.enableVertexAttribArray(P),W[P]=1),nt[P]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),nt[P]=O)}function L(){const P=u.newAttributes,O=u.enabledAttributes;for(let X=0,W=O.length;X<W;X++)O[X]!==P[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function b(P,O,X,W,nt,K,q){q===!0?n.vertexAttribIPointer(P,O,X,nt,K):n.vertexAttribPointer(P,O,X,W,nt,K)}function F(P,O,X,W){if(i.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const nt=W.attributes,K=X.getAttributes(),q=O.defaultAttributeValues;for(const D in K){const B=K[D];if(B.location>=0){let ut=nt[D];if(ut===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),ut!==void 0){const ct=ut.normalized,ht=ut.itemSize,Et=e.get(ut);if(Et===void 0)continue;const Ct=Et.buffer,vt=Et.type,Ht=Et.bytesPerElement,ue=i.isWebGL2===!0&&(vt===n.INT||vt===n.UNSIGNED_INT||ut.gpuType===So);if(ut.isInterleavedBufferAttribute){const Dt=ut.data,I=Dt.stride,ie=ut.offset;if(Dt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)w(B.location+Mt,Dt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)E(B.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let Mt=0;Mt<B.locationSize;Mt++)b(B.location+Mt,ht/B.locationSize,vt,ct,I*Ht,(ie+ht/B.locationSize*Mt)*Ht,ue)}else{if(ut.isInstancedBufferAttribute){for(let Dt=0;Dt<B.locationSize;Dt++)w(B.location+Dt,ut.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Dt=0;Dt<B.locationSize;Dt++)E(B.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let Dt=0;Dt<B.locationSize;Dt++)b(B.location+Dt,ht/B.locationSize,vt,ct,ht*Ht,ht/B.locationSize*Dt*Ht,ue)}}else if(q!==void 0){const ct=q[D];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(B.location,ct);break;case 3:n.vertexAttrib3fv(B.location,ct);break;case 4:n.vertexAttrib4fv(B.location,ct);break;default:n.vertexAttrib1fv(B.location,ct)}}}}L()}function T(){k();for(const P in s){const O=s[P];for(const X in O){const W=O[X];for(const nt in W)_(W[nt].object),delete W[nt];delete O[X]}delete s[P]}}function y(P){if(s[P.id]===void 0)return;const O=s[P.id];for(const X in O){const W=O[X];for(const nt in W)_(W[nt].object),delete W[nt];delete O[X]}delete s[P.id]}function V(P){for(const O in s){const X=s[O];if(X[P.id]===void 0)continue;const W=X[P.id];for(const nt in W)_(W[nt].object),delete W[nt];delete X[P.id]}}function k(){$(),d=!0,u!==l&&(u=l,p(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:$,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:E,disableUnusedAttributes:L}}function M1(n,t,e,i){const a=i.isWebGL2;let r;function o(u){r=u}function s(u,d){n.drawArrays(r,u,d),e.update(d,r,1)}function l(u,d,h){if(h===0)return;let m,p;if(a)m=n,p="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,u,d,h),e.update(d,r,h)}this.setMode=o,this.render=s,this.renderInstances=l}function S1(n,t,e){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),c=n.getParameter(n.MAX_VARYING_VECTORS),z=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,E=o||t.has("OES_texture_float"),w=v&&E,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:a,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:z,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:L}}function E1(n){const t=this;let e=null,i=0,a=!1,r=!1;const o=new ri,s=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const p=h.length!==0||m||i!==0||a;return a=m,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,m){e=d(h,m,0)},this.setState=function(h,m,p){const _=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,c=n.get(h);if(!a||_===null||_.length===0||r&&!f)r?d(null):u();else{const z=r?0:i,v=z*4;let E=c.clippingState||null;l.value=E,E=d(_,m,v,p);for(let w=0;w!==v;++w)E[w]=e[w];c.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=z}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,m,p,_){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const c=p+g*4,z=m.matrixWorldInverse;s.getNormalMatrix(z),(f===null||f.length<c)&&(f=new Float32Array(c));for(let v=0,E=p;v!==g;++v,E+=4)o.copy(h[v]).applyMatrix4(z,s),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function y1(n){let t=new WeakMap;function e(o,s){return s===ur?o.mapping=nn:s===dr&&(o.mapping=an),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ur||s===dr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new F0(l.height/2);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",a),e(u.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class b1 extends Oo{constructor(t=-1,e=1,i=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,o=i+t,s=a+e,l=a-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Cs=[.125,.215,.35,.446,.526,.582],vi=20,ja=new b1,Ls=new Bt;let Ka=null;const Ti=(1+Math.sqrt(5))/2,Yi=1/Ti,Ps=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ti,Yi),new C(0,Ti,-Yi),new C(Yi,0,Ti),new C(-Yi,0,Ti),new C(Ti,Yi,0),new C(-Ti,Yi,0)];class Ds{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){Ka=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ns(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka),t.scissorTest=!1,jn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nn||t.mapping===an?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Sn,format:Ie,colorSpace:Qe,depthBuffer:!1},a=Us(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(r)),this._blurMaterial=w1(r,t,e)}return a}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,i,a){const s=new be(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Ls),d.toneMapping=ui,d.autoClear=!1;const p=new Er({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),_=new Ne(new An,p);let g=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(Ls),g=!0);for(let c=0;c<6;c++){const z=c%3;z===0?(s.up.set(0,l[c],0),s.lookAt(u[c],0,0)):z===1?(s.up.set(0,0,l[c]),s.lookAt(0,u[c],0)):(s.up.set(0,l[c],0),s.lookAt(0,0,u[c]));const v=this._cubeSize;jn(a,z*v,c>2?v:0,v,v),d.setRenderTarget(a),g&&d.render(_,s),d.render(t,s)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=h,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===nn||t.mapping===an;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ns()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Is());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;jn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ja)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ps[(a-1)%Ps.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,a,"latitudinal",r),this._halfBlur(o,t,i,i,a,"longitudinal",r)}_halfBlur(t,e,i,a,r,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ne(this._lodPlanes[a],u),m=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=r/_,f=isFinite(r)?1+Math.floor(d*g):vi;f>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vi}`);const c=[];let z=0;for(let b=0;b<vi;++b){const F=b/g,T=Math.exp(-F*F/2);c.push(T),b===0?z+=T:b<f&&(z+=2*T)}for(let b=0;b<c.length;b++)c[b]=c[b]/z;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=c,m.latitudinal.value=o==="latitudinal",s&&(m.poleAxis.value=s);const{_lodMax:v}=this;m.dTheta.value=_,m.mipInt.value=v-i;const E=this._sizeLods[a],w=3*E*(a>v-Qi?a-v+Qi:0),L=4*(this._cubeSize-E);jn(e,w,L,3*E,2*E),l.setRenderTarget(e),l.render(h,ja)}}function A1(n){const t=[],e=[],i=[];let a=n;const r=n-Qi+1+Cs.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);e.push(s);let l=1/s;o>n-Qi?l=Cs[o-n+Qi-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),d=-u,h=1+u,m=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,g=3,f=2,c=1,z=new Float32Array(g*_*p),v=new Float32Array(f*_*p),E=new Float32Array(c*_*p);for(let L=0;L<p;L++){const b=L%3*2/3-1,F=L>2?0:-1,T=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];z.set(T,g*_*L),v.set(m,f*_*L);const y=[L,L,L,L,L,L];E.set(y,c*_*L)}const w=new Le;w.setAttribute("position",new Ze(z,g)),w.setAttribute("uv",new Ze(v,f)),w.setAttribute("faceIndex",new Ze(E,c)),t.push(w),a>Qi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Us(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jn(n,t,e,i,a){n.viewport.set(t,e,i,a),n.scissor.set(t,e,i,a)}function w1(n,t,e){const i=new Float32Array(vi),a=new C(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:br(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Is(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ns(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function br(){return`

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
	`}function z1(n){let t=new WeakMap,e=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===ur||l===dr,d=l===nn||l===an;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new Ds(n)),h=u?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&a(h)){e===null&&(e=new Ds(n));const m=u?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,m),s.addEventListener("dispose",r),m.texture}else return null}}}return s}function a(s){let l=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&l++;return l===u}function r(s){const l=s.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function R1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const a=e(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function C1(n,t,e,i){const a={},r=new WeakMap;function o(h){const m=h.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const g=m.morphAttributes[_];for(let f=0,c=g.length;f<c;f++)t.remove(g[f])}m.removeEventListener("dispose",o),delete a[m.id];const p=r.get(m);p&&(t.remove(p),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function s(h,m){return a[m.id]===!0||(m.addEventListener("dispose",o),a[m.id]=!0,e.memory.geometries++),m}function l(h){const m=h.attributes;for(const _ in m)t.update(m[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let f=0,c=g.length;f<c;f++)t.update(g[f],n.ARRAY_BUFFER)}}function u(h){const m=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const z=p.array;g=p.version;for(let v=0,E=z.length;v<E;v+=3){const w=z[v+0],L=z[v+1],b=z[v+2];m.push(w,L,L,b,b,w)}}else if(_!==void 0){const z=_.array;g=_.version;for(let v=0,E=z.length/3-1;v<E;v+=3){const w=v+0,L=v+1,b=v+2;m.push(w,L,L,b,b,w)}}else return;const f=new(Co(m)?Zo:No)(m,1);f.version=g;const c=r.get(h);c&&t.remove(c),r.set(h,f)}function d(h){const m=r.get(h);if(m){const p=h.index;p!==null&&m.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:d}}function L1(n,t,e,i){const a=i.isWebGL2;let r;function o(m){r=m}let s,l;function u(m){s=m.type,l=m.bytesPerElement}function d(m,p){n.drawElements(r,p,s,m*l),e.update(p,r,1)}function h(m,p,_){if(_===0)return;let g,f;if(a)g=n,f="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](r,p,s,m*l,_),e.update(p,r,_)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function P1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=s*(r/3);break;case n.LINES:e.lines+=s*(r/2);break;case n.LINE_STRIP:e.lines+=s*(r-1);break;case n.LINE_LOOP:e.lines+=s*r;break;case n.POINTS:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function D1(n,t){return n[0]-t[0]}function U1(n,t){return Math.abs(t[1])-Math.abs(n[1])}function I1(n,t,e){const i={},a=new Float32Array(8),r=new WeakMap,o=new qt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,d,h){const m=u.morphTargetInfluences;if(t.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let f=r.get(d);if(f===void 0||f.count!==g){let O=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var p=O;f!==void 0&&f.texture.dispose();const v=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let T=0;v===!0&&(T=1),E===!0&&(T=2),w===!0&&(T=3);let y=d.attributes.position.count*T,V=1;y>t.maxTextureSize&&(V=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const k=new Float32Array(y*V*4*g),$=new Do(k,y,V,g);$.type=oi,$.needsUpdate=!0;const P=T*4;for(let X=0;X<g;X++){const W=L[X],nt=b[X],K=F[X],q=y*V*4*X;for(let D=0;D<W.count;D++){const B=D*P;v===!0&&(o.fromBufferAttribute(W,D),k[q+B+0]=o.x,k[q+B+1]=o.y,k[q+B+2]=o.z,k[q+B+3]=0),E===!0&&(o.fromBufferAttribute(nt,D),k[q+B+4]=o.x,k[q+B+5]=o.y,k[q+B+6]=o.z,k[q+B+7]=0),w===!0&&(o.fromBufferAttribute(K,D),k[q+B+8]=o.x,k[q+B+9]=o.y,k[q+B+10]=o.z,k[q+B+11]=K.itemSize===4?o.w:1)}}f={count:g,texture:$,size:new Tt(y,V)},r.set(d,f),d.addEventListener("dispose",O)}let c=0;for(let v=0;v<m.length;v++)c+=m[v];const z=d.morphTargetsRelative?1:1-c;h.getUniforms().setValue(n,"morphTargetBaseInfluence",z),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let g=i[d.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];i[d.id]=g}for(let E=0;E<_;E++){const w=g[E];w[0]=E,w[1]=m[E]}g.sort(U1);for(let E=0;E<8;E++)E<_&&g[E][1]?(s[E][0]=g[E][0],s[E][1]=g[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(D1);const f=d.morphAttributes.position,c=d.morphAttributes.normal;let z=0;for(let E=0;E<8;E++){const w=s[E],L=w[0],b=w[1];L!==Number.MAX_SAFE_INTEGER&&b?(f&&d.getAttribute("morphTarget"+E)!==f[L]&&d.setAttribute("morphTarget"+E,f[L]),c&&d.getAttribute("morphNormal"+E)!==c[L]&&d.setAttribute("morphNormal"+E,c[L]),a[E]=b,z+=b):(f&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),c&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),a[E]=0)}const v=d.morphTargetsRelative?1:1-z;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function N1(n,t,e,i){let a=new WeakMap;function r(l){const u=i.render.frame,d=l.geometry,h=t.get(l,d);if(a.get(h)!==u&&(t.update(h),a.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;a.get(m)!==u&&(m.update(),a.set(m,u))}return h}function o(){a=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Go=new Me,Vo=new Do,ko=new M0,Wo=new Bo,Zs=[],Fs=[],Os=new Float32Array(16),Bs=new Float32Array(9),Hs=new Float32Array(4);function on(n,t,e){const i=n[0];if(i<=0||i>0)return n;const a=t*e;let r=Zs[a];if(r===void 0&&(r=new Float32Array(a),Zs[a]=r),t!==0){i.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=e,n[o].toArray(r,s)}return r}function re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xa(n,t){let e=Fs[t];e===void 0&&(e=new Int32Array(t),Fs[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Z1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;n.uniform2fv(this.addr,t),se(e,t)}}function O1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;n.uniform3fv(this.addr,t),se(e,t)}}function B1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;n.uniform4fv(this.addr,t),se(e,t)}}function H1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,i))return;Hs.set(i),n.uniformMatrix2fv(this.addr,!1,Hs),se(e,i)}}function G1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,i))return;Bs.set(i),n.uniformMatrix3fv(this.addr,!1,Bs),se(e,i)}}function V1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,i))return;Os.set(i),n.uniformMatrix4fv(this.addr,!1,Os),se(e,i)}}function k1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function W1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;n.uniform2iv(this.addr,t),se(e,t)}}function X1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;n.uniform3iv(this.addr,t),se(e,t)}}function Y1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;n.uniform4iv(this.addr,t),se(e,t)}}function q1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function j1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;n.uniform2uiv(this.addr,t),se(e,t)}}function K1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;n.uniform3uiv(this.addr,t),se(e,t)}}function $1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;n.uniform4uiv(this.addr,t),se(e,t)}}function J1(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture2D(t||Go,a)}function Q1(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||ko,a)}function td(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Wo,a)}function ed(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Vo,a)}function id(n){switch(n){case 5126:return Z1;case 35664:return F1;case 35665:return O1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return Y1;case 5125:return q1;case 36294:return j1;case 36295:return K1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return td;case 36289:case 36303:case 36311:case 36292:return ed}}function nd(n,t){n.uniform1fv(this.addr,t)}function ad(n,t){const e=on(t,this.size,2);n.uniform2fv(this.addr,e)}function rd(n,t){const e=on(t,this.size,3);n.uniform3fv(this.addr,e)}function sd(n,t){const e=on(t,this.size,4);n.uniform4fv(this.addr,e)}function od(n,t){const e=on(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ld(n,t){const e=on(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ud(n,t){const e=on(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dd(n,t){n.uniform1iv(this.addr,t)}function cd(n,t){n.uniform2iv(this.addr,t)}function hd(n,t){n.uniform3iv(this.addr,t)}function md(n,t){n.uniform4iv(this.addr,t)}function fd(n,t){n.uniform1uiv(this.addr,t)}function pd(n,t){n.uniform2uiv(this.addr,t)}function xd(n,t){n.uniform3uiv(this.addr,t)}function _d(n,t){n.uniform4uiv(this.addr,t)}function gd(n,t,e){const i=this.cache,a=t.length,r=xa(e,a);re(i,r)||(n.uniform1iv(this.addr,r),se(i,r));for(let o=0;o!==a;++o)e.setTexture2D(t[o]||Go,r[o])}function Td(n,t,e){const i=this.cache,a=t.length,r=xa(e,a);re(i,r)||(n.uniform1iv(this.addr,r),se(i,r));for(let o=0;o!==a;++o)e.setTexture3D(t[o]||ko,r[o])}function vd(n,t,e){const i=this.cache,a=t.length,r=xa(e,a);re(i,r)||(n.uniform1iv(this.addr,r),se(i,r));for(let o=0;o!==a;++o)e.setTextureCube(t[o]||Wo,r[o])}function Md(n,t,e){const i=this.cache,a=t.length,r=xa(e,a);re(i,r)||(n.uniform1iv(this.addr,r),se(i,r));for(let o=0;o!==a;++o)e.setTexture2DArray(t[o]||Vo,r[o])}function Sd(n){switch(n){case 5126:return nd;case 35664:return ad;case 35665:return rd;case 35666:return sd;case 35674:return od;case 35675:return ld;case 35676:return ud;case 5124:case 35670:return dd;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return md;case 5125:return fd;case 36294:return pd;case 36295:return xd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return Md}}class Ed{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=id(e.type)}}class yd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Sd(e.type)}}class bd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,e[s.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Gs(n,t){n.seq.push(t),n.map[t.id]=t}function Ad(n,t,e){const i=n.name,a=i.length;for($a.lastIndex=0;;){const r=$a.exec(i),o=$a.lastIndex;let s=r[1];const l=r[2]==="]",u=r[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===a){Gs(e,u===void 0?new Ed(s,n,t):new yd(s,n,t));break}else{let h=e.map[s];h===void 0&&(h=new bd(s),Gs(e,h)),e=h}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(e,a),o=t.getUniformLocation(e,r.name);Ad(r,o,this)}}setValue(t,e,i,a){const r=this.map[e];r!==void 0&&r.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let r=0,o=e.length;r!==o;++r){const s=e[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in e&&i.push(o)}return i}}function Vs(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let wd=0;function zd(n,t){const e=n.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return i.join(`
`)}function Rd(n){const t=kt.getPrimaries(kt.workingColorSpace),e=kt.getPrimaries(n);let i;switch(t===e?i="":t===oa&&e===sa?i="LinearDisplayP3ToLinearSRGB":t===sa&&e===oa&&(i="LinearSRGBToLinearDisplayP3"),n){case Qe:case ha:return[i,"LinearTransferOETF"];case ae:case vr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ks(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),a=n.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+zd(n.getShaderSource(t),o)}else return a}function Cd(n,t){const e=Rd(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ld(n,t){let e;switch(t){case z2:e="Linear";break;case R2:e="Reinhard";break;case C2:e="OptimizedCineon";break;case L2:e="ACESFilmic";break;case P2:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Pd(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_n).join(`
`)}function Dd(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ud(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(t,a),o=r.name;let s=1;r.type===n.FLOAT_MAT2&&(s=2),r.type===n.FLOAT_MAT3&&(s=3),r.type===n.FLOAT_MAT4&&(s=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:s}}return e}function _n(n){return n!==""}function Ws(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xs(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Id=/^[ \t]*#include +<([\w\d./]+)>/gm;function xr(n){return n.replace(Id,Zd)}const Nd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zd(n,t){let e=It[t];if(e===void 0){const i=Nd.get(t);if(i!==void 0)e=It[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xr(e)}const Fd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ys(n){return n.replace(Fd,Od)}function Od(n,t,e,i){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function qs(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bd(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===_o?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function Hd(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nn:case an:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gd(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case an:t="ENVMAP_MODE_REFRACTION";break}return t}function Vd(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vo:t="ENVMAP_BLENDING_MULTIPLY";break;case A2:t="ENVMAP_BLENDING_MIX";break;case w2:t="ENVMAP_BLENDING_ADD";break}return t}function kd(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Wd(n,t,e,i){const a=n.getContext(),r=e.defines;let o=e.vertexShader,s=e.fragmentShader;const l=Bd(e),u=Hd(e),d=Gd(e),h=Vd(e),m=kd(e),p=e.isWebGL2?"":Pd(e),_=Dd(r),g=a.createProgram();let f,c,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_n).join(`
`),f.length>0&&(f+=`
`),c=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_n).join(`
`),c.length>0&&(c+=`
`)):(f=[qs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_n).join(`
`),c=[p,qs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?It.tonemapping_pars_fragment:"",e.toneMapping!==ui?Ld("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Cd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_n).join(`
`)),o=xr(o),o=Ws(o,e),o=Xs(o,e),s=xr(s),s=Ws(s,e),s=Xs(s,e),o=Ys(o),s=Ys(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",e.glslVersion===hs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=z+f+o,E=z+c+s,w=Vs(a,a.VERTEX_SHADER,v),L=Vs(a,a.FRAGMENT_SHADER,E);if(a.attachShader(g,w),a.attachShader(g,L),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g),n.debug.checkShaderErrors){const T=a.getProgramInfoLog(g).trim(),y=a.getShaderInfoLog(w).trim(),V=a.getShaderInfoLog(L).trim();let k=!0,$=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,g,w,L);else{const P=ks(a,w,"vertex"),O=ks(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+P+`
`+O)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(y===""||V==="")&&($=!1);$&&(this.diagnostics={runnable:k,programLog:T,vertexShader:{log:y,prefix:f},fragmentShader:{log:V,prefix:c}})}a.deleteShader(w),a.deleteShader(L);let b;this.getUniforms=function(){return b===void 0&&(b=new aa(a,g)),b};let F;return this.getAttributes=function(){return F===void 0&&(F=Ud(a,g)),F},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=L,this}let Xd=0;class Yd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qd(t),e.set(t,i)),i}}class qd{constructor(t){this.id=Xd++,this.code=t,this.usedTimes=0}}function jd(n,t,e,i,a,r,o){const s=new Uo,l=new Yd,u=[],d=a.isWebGL2,h=a.logarithmicDepthBuffer,m=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return T===0?"uv":`uv${T}`}function f(T,y,V,k,$){const P=k.fog,O=$.geometry,X=T.isMeshStandardMaterial?k.environment:null,W=(T.isMeshStandardMaterial?e:t).get(T.envMap||X),nt=W&&W.mapping===ca?W.image.height:null,K=_[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,D=q!==void 0?q.length:0;let B=0;O.morphAttributes.position!==void 0&&(B=1),O.morphAttributes.normal!==void 0&&(B=2),O.morphAttributes.color!==void 0&&(B=3);let ut,ct,ht,Et;if(K){const Xt=Oe[K];ut=Xt.vertexShader,ct=Xt.fragmentShader}else ut=T.vertexShader,ct=T.fragmentShader,l.update(T),ht=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const Ct=n.getRenderTarget(),vt=$.isInstancedMesh===!0,Ht=!!T.map,ue=!!T.matcap,Dt=!!W,I=!!T.aoMap,ie=!!T.lightMap,Mt=!!T.bumpMap,Lt=!!T.normalMap,wt=!!T.displacementMap,Wt=!!T.emissiveMap,Nt=!!T.metalnessMap,Pt=!!T.roughnessMap,Gt=T.anisotropy>0,ne=T.clearcoat>0,oe=T.iridescence>0,S=T.sheen>0,x=T.transmission>0,Z=Gt&&!!T.anisotropyMap,Q=ne&&!!T.clearcoatMap,J=ne&&!!T.clearcoatNormalMap,tt=ne&&!!T.clearcoatRoughnessMap,xt=oe&&!!T.iridescenceMap,at=oe&&!!T.iridescenceThicknessMap,dt=S&&!!T.sheenColorMap,R=S&&!!T.sheenRoughnessMap,et=!!T.specularMap,Y=!!T.specularColorMap,yt=!!T.specularIntensityMap,_t=x&&!!T.transmissionMap,gt=x&&!!T.thicknessMap,pt=!!T.gradientMap,A=!!T.alphaMap,rt=T.alphaTest>0,it=!!T.alphaHash,lt=!!T.extensions,st=!!O.attributes.uv1,j=!!O.attributes.uv2,ft=!!O.attributes.uv3;let bt=ui;return T.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(bt=n.toneMapping),{isWebGL2:d,shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:ut,fragmentShader:ct,defines:T.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,instancing:vt,instancingColor:vt&&$.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Qe,map:Ht,matcap:ue,envMap:Dt,envMapMode:Dt&&W.mapping,envMapCubeUVHeight:nt,aoMap:I,lightMap:ie,bumpMap:Mt,normalMap:Lt,displacementMap:m&&wt,emissiveMap:Wt,normalMapObjectSpace:Lt&&T.normalMapType===W2,normalMapTangentSpace:Lt&&T.normalMapType===Ro,metalnessMap:Nt,roughnessMap:Pt,anisotropy:Gt,anisotropyMap:Z,clearcoat:ne,clearcoatMap:Q,clearcoatNormalMap:J,clearcoatRoughnessMap:tt,iridescence:oe,iridescenceMap:xt,iridescenceThicknessMap:at,sheen:S,sheenColorMap:dt,sheenRoughnessMap:R,specularMap:et,specularColorMap:Y,specularIntensityMap:yt,transmission:x,transmissionMap:_t,thicknessMap:gt,gradientMap:pt,opaque:T.transparent===!1&&T.blending===tn,alphaMap:A,alphaTest:rt,alphaHash:it,combine:T.combine,mapUv:Ht&&g(T.map.channel),aoMapUv:I&&g(T.aoMap.channel),lightMapUv:ie&&g(T.lightMap.channel),bumpMapUv:Mt&&g(T.bumpMap.channel),normalMapUv:Lt&&g(T.normalMap.channel),displacementMapUv:wt&&g(T.displacementMap.channel),emissiveMapUv:Wt&&g(T.emissiveMap.channel),metalnessMapUv:Nt&&g(T.metalnessMap.channel),roughnessMapUv:Pt&&g(T.roughnessMap.channel),anisotropyMapUv:Z&&g(T.anisotropyMap.channel),clearcoatMapUv:Q&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:J&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:R&&g(T.sheenRoughnessMap.channel),specularMapUv:et&&g(T.specularMap.channel),specularColorMapUv:Y&&g(T.specularColorMap.channel),specularIntensityMapUv:yt&&g(T.specularIntensityMap.channel),transmissionMapUv:_t&&g(T.transmissionMap.channel),thicknessMapUv:gt&&g(T.thicknessMap.channel),alphaMapUv:A&&g(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Lt||Gt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:j,vertexUv3s:ft,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(Ht||A),fog:!!P,useFog:T.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:B,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&kt.getTransfer(T.map.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Be,flipSided:T.side===ve,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:lt&&T.extensions.derivatives===!0,extensionFragDepth:lt&&T.extensions.fragDepth===!0,extensionDrawBuffers:lt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function c(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)y.push(V),y.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(z(y,T),v(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function z(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){s.disableAll(),y.isWebGL2&&s.enable(0),y.supportsVertexTextures&&s.enable(1),y.instancing&&s.enable(2),y.instancingColor&&s.enable(3),y.matcap&&s.enable(4),y.envMap&&s.enable(5),y.normalMapObjectSpace&&s.enable(6),y.normalMapTangentSpace&&s.enable(7),y.clearcoat&&s.enable(8),y.iridescence&&s.enable(9),y.alphaTest&&s.enable(10),y.vertexColors&&s.enable(11),y.vertexAlphas&&s.enable(12),y.vertexUv1s&&s.enable(13),y.vertexUv2s&&s.enable(14),y.vertexUv3s&&s.enable(15),y.vertexTangents&&s.enable(16),y.anisotropy&&s.enable(17),T.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.skinning&&s.enable(4),y.morphTargets&&s.enable(5),y.morphNormals&&s.enable(6),y.morphColors&&s.enable(7),y.premultipliedAlpha&&s.enable(8),y.shadowMapEnabled&&s.enable(9),y.useLegacyLights&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),T.push(s.mask)}function E(T){const y=_[T.type];let V;if(y){const k=Oe[y];V=U0.clone(k.uniforms)}else V=T.uniforms;return V}function w(T,y){let V;for(let k=0,$=u.length;k<$;k++){const P=u[k];if(P.cacheKey===y){V=P,++V.usedTimes;break}}return V===void 0&&(V=new Wd(n,y,T,r),u.push(V)),V}function L(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function b(T){l.remove(T)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:E,acquireProgram:w,releaseProgram:L,releaseShaderCache:b,programs:u,dispose:F}}function Kd(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,s){n.get(r)[o]=s}function a(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:a}}function $d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function js(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ks(){const n=[];let t=0;const e=[],i=[],a=[];function r(){t=0,e.length=0,i.length=0,a.length=0}function o(h,m,p,_,g,f){let c=n[t];return c===void 0?(c={id:h.id,object:h,geometry:m,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},n[t]=c):(c.id=h.id,c.object=h,c.geometry=m,c.material=p,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=g,c.group=f),t++,c}function s(h,m,p,_,g,f){const c=o(h,m,p,_,g,f);p.transmission>0?i.push(c):p.transparent===!0?a.push(c):e.push(c)}function l(h,m,p,_,g,f){const c=o(h,m,p,_,g,f);p.transmission>0?i.unshift(c):p.transparent===!0?a.unshift(c):e.unshift(c)}function u(h,m){e.length>1&&e.sort(h||$d),i.length>1&&i.sort(m||js),a.length>1&&a.sort(m||js)}function d(){for(let h=t,m=n.length;h<m;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:a,init:r,push:s,unshift:l,finish:d,sort:u}}function Jd(){let n=new WeakMap;function t(i,a){const r=n.get(i);let o;return r===void 0?(o=new Ks,n.set(i,[o])):a>=r.length?(o=new Ks,r.push(o)):o=r[a],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qd(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Bt};break;case"SpotLight":e={position:new C,direction:new C,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function tc(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ec=0;function ic(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nc(n,t){const e=new Qd,i=tc(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new C);const r=new C,o=new Kt,s=new Kt;function l(d,h){let m=0,p=0,_=0;for(let k=0;k<9;k++)a.probe[k].set(0,0,0);let g=0,f=0,c=0,z=0,v=0,E=0,w=0,L=0,b=0,F=0,T=0;d.sort(ic);const y=h===!0?Math.PI:1;for(let k=0,$=d.length;k<$;k++){const P=d[k],O=P.color,X=P.intensity,W=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=O.r*X*y,p+=O.g*X*y,_+=O.b*X*y;else if(P.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(P.sh.coefficients[K],X);T++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const q=P.shadow,D=i.get(P);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,a.directionalShadow[g]=D,a.directionalShadowMap[g]=nt,a.directionalShadowMatrix[g]=P.shadow.matrix,E++}a.directional[g]=K,g++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(O).multiplyScalar(X*y),K.distance=W,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,a.spot[c]=K;const q=P.shadow;if(P.map&&(a.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&F++),a.spotLightMatrix[c]=q.matrix,P.castShadow){const D=i.get(P);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,a.spotShadow[c]=D,a.spotShadowMap[c]=nt,L++}c++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(O).multiplyScalar(X),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),a.rectArea[z]=K,z++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*y),K.distance=P.distance,K.decay=P.decay,P.castShadow){const q=P.shadow,D=i.get(P);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,a.pointShadow[f]=D,a.pointShadowMap[f]=nt,a.pointShadowMatrix[f]=P.shadow.matrix,w++}a.point[f]=K,f++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(X*y),K.groundColor.copy(P.groundColor).multiplyScalar(X*y),a.hemi[v]=K,v++}}z>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ot.LTC_FLOAT_1,a.rectAreaLTC2=ot.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ot.LTC_HALF_1,a.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=m,a.ambient[1]=p,a.ambient[2]=_;const V=a.hash;(V.directionalLength!==g||V.pointLength!==f||V.spotLength!==c||V.rectAreaLength!==z||V.hemiLength!==v||V.numDirectionalShadows!==E||V.numPointShadows!==w||V.numSpotShadows!==L||V.numSpotMaps!==b||V.numLightProbes!==T)&&(a.directional.length=g,a.spot.length=c,a.rectArea.length=z,a.point.length=f,a.hemi.length=v,a.directionalShadow.length=E,a.directionalShadowMap.length=E,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=E,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=L+b-F,a.spotLightMap.length=b,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=T,V.directionalLength=g,V.pointLength=f,V.spotLength=c,V.rectAreaLength=z,V.hemiLength=v,V.numDirectionalShadows=E,V.numPointShadows=w,V.numSpotShadows=L,V.numSpotMaps=b,V.numLightProbes=T,a.version=ec++)}function u(d,h){let m=0,p=0,_=0,g=0,f=0;const c=h.matrixWorldInverse;for(let z=0,v=d.length;z<v;z++){const E=d[z];if(E.isDirectionalLight){const w=a.directional[m];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(c),m++}else if(E.isSpotLight){const w=a.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(c),_++}else if(E.isRectAreaLight){const w=a.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(c),s.identity(),o.copy(E.matrixWorld),o.premultiply(c),s.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const w=a.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(c),p++}else if(E.isHemisphereLight){const w=a.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(c),f++}}}return{setup:l,setupView:u,state:a}}function $s(n,t){const e=new nc(n,t),i=[],a=[];function r(){i.length=0,a.length=0}function o(h){i.push(h)}function s(h){a.push(h)}function l(h){e.setup(i,h)}function u(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:a,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function ac(n,t){let e=new WeakMap;function i(r,o=0){const s=e.get(r);let l;return s===void 0?(l=new $s(n,t),e.set(r,[l])):o>=s.length?(l=new $s(n,t),s.push(l)):l=s[o],l}function a(){e=new WeakMap}return{get:i,dispose:a}}class rc extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sc extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lc=`uniform sampler2D shadow_pass;
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
}`;function uc(n,t,e){let i=new yr;const a=new Tt,r=new Tt,o=new qt,s=new rc({depthPacking:k2}),l=new sc,u={},d=e.maxTextureSize,h={[ci]:ve,[ve]:ci,[Be]:Be},m=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:oc,fragmentShader:lc}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new Le;_.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(_,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let c=this.type;this.render=function(w,L,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const F=n.getRenderTarget(),T=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),V=n.state;V.setBlending(li),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=c!==je&&this.type===je,$=c===je&&this.type!==je;for(let P=0,O=w.length;P<O;P++){const X=w[P],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const nt=W.getFrameExtents();if(a.multiply(nt),r.copy(W.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/nt.x),a.x=r.x*nt.x,W.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/nt.y),a.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||k===!0||$===!0){const q=this.type!==je?{minFilter:ge,magFilter:ge}:{};W.map!==null&&W.map.dispose(),W.map=new yi(a.x,a.y,q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const K=W.getViewportCount();for(let q=0;q<K;q++){const D=W.getViewport(q);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),V.viewport(o),W.updateMatrices(X,q),i=W.getFrustum(),E(L,b,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===je&&z(W,b),W.needsUpdate=!1}c=this.type,f.needsUpdate=!1,n.setRenderTarget(F,T,y)};function z(w,L){const b=t.update(g);m.defines.VSM_SAMPLES!==w.blurSamples&&(m.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(a.x,a.y)),m.uniforms.shadow_pass.value=w.map.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,b,m,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,b,p,g,null)}function v(w,L,b,F){let T=null;const y=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)T=y;else if(T=b.isPointLight===!0?l:s,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const V=T.uuid,k=L.uuid;let $=u[V];$===void 0&&($={},u[V]=$);let P=$[k];P===void 0&&(P=T.clone(),$[k]=P),T=P}if(T.visible=L.visible,T.wireframe=L.wireframe,F===je?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:h[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=n.properties.get(T);V.light=b}return T}function E(w,L,b,F,T){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===je)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const k=t.update(w),$=w.material;if(Array.isArray($)){const P=k.groups;for(let O=0,X=P.length;O<X;O++){const W=P[O],nt=$[W.materialIndex];if(nt&&nt.visible){const K=v(w,nt,F,T);n.renderBufferDirect(b,null,k,K,w,W)}}}else if($.visible){const P=v(w,$,F,T);n.renderBufferDirect(b,null,k,P,w,null)}}const V=w.children;for(let k=0,$=V.length;k<$;k++)E(V[k],L,b,F,T)}}function dc(n,t,e){const i=e.isWebGL2;function a(){let A=!1;const rt=new qt;let it=null;const lt=new qt(0,0,0,0);return{setMask:function(st){it!==st&&!A&&(n.colorMask(st,st,st,st),it=st)},setLocked:function(st){A=st},setClear:function(st,j,ft,bt,Jt){Jt===!0&&(st*=bt,j*=bt,ft*=bt),rt.set(st,j,ft,bt),lt.equals(rt)===!1&&(n.clearColor(st,j,ft,bt),lt.copy(rt))},reset:function(){A=!1,it=null,lt.set(-1,0,0,0)}}}function r(){let A=!1,rt=null,it=null,lt=null;return{setTest:function(st){st?Ct(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(st){rt!==st&&!A&&(n.depthMask(st),rt=st)},setFunc:function(st){if(it!==st){switch(st){case T2:n.depthFunc(n.NEVER);break;case v2:n.depthFunc(n.ALWAYS);break;case M2:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case S2:n.depthFunc(n.EQUAL);break;case E2:n.depthFunc(n.GEQUAL);break;case y2:n.depthFunc(n.GREATER);break;case b2:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=st}},setLocked:function(st){A=st},setClear:function(st){lt!==st&&(n.clearDepth(st),lt=st)},reset:function(){A=!1,rt=null,it=null,lt=null}}}function o(){let A=!1,rt=null,it=null,lt=null,st=null,j=null,ft=null,bt=null,Jt=null;return{setTest:function(Xt){A||(Xt?Ct(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(Xt){rt!==Xt&&!A&&(n.stencilMask(Xt),rt=Xt)},setFunc:function(Xt,Fe,fe){(it!==Xt||lt!==Fe||st!==fe)&&(n.stencilFunc(Xt,Fe,fe),it=Xt,lt=Fe,st=fe)},setOp:function(Xt,Fe,fe){(j!==Xt||ft!==Fe||bt!==fe)&&(n.stencilOp(Xt,Fe,fe),j=Xt,ft=Fe,bt=fe)},setLocked:function(Xt){A=Xt},setClear:function(Xt){Jt!==Xt&&(n.clearStencil(Xt),Jt=Xt)},reset:function(){A=!1,rt=null,it=null,lt=null,st=null,j=null,ft=null,bt=null,Jt=null}}}const s=new a,l=new r,u=new o,d=new WeakMap,h=new WeakMap;let m={},p={},_=new WeakMap,g=[],f=null,c=!1,z=null,v=null,E=null,w=null,L=null,b=null,F=null,T=!1,y=null,V=null,k=null,$=null,P=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(nt)[1]),X=W>=1):nt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),X=W>=2);let K=null,q={};const D=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),ut=new qt().fromArray(D),ct=new qt().fromArray(B);function ht(A,rt,it,lt){const st=new Uint8Array(4),j=n.createTexture();n.bindTexture(A,j),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<it;ft++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(rt,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(rt+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return j}const Et={};Et[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Et[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ct(n.DEPTH_TEST),l.setFunc(lr),wt(!1),Wt(Ur),Ct(n.CULL_FACE),Mt(li);function Ct(A){m[A]!==!0&&(n.enable(A),m[A]=!0)}function vt(A){m[A]!==!1&&(n.disable(A),m[A]=!1)}function Ht(A,rt){return p[A]!==rt?(n.bindFramebuffer(A,rt),p[A]=rt,i&&(A===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=rt),A===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=rt)),!0):!1}function ue(A,rt){let it=g,lt=!1;if(A)if(it=_.get(rt),it===void 0&&(it=[],_.set(rt,it)),A.isWebGLMultipleRenderTargets){const st=A.texture;if(it.length!==st.length||it[0]!==n.COLOR_ATTACHMENT0){for(let j=0,ft=st.length;j<ft;j++)it[j]=n.COLOR_ATTACHMENT0+j;it.length=st.length,lt=!0}}else it[0]!==n.COLOR_ATTACHMENT0&&(it[0]=n.COLOR_ATTACHMENT0,lt=!0);else it[0]!==n.BACK&&(it[0]=n.BACK,lt=!0);lt&&(e.isWebGL2?n.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function Dt(A){return f!==A?(n.useProgram(A),f=A,!0):!1}const I={[Ji]:n.FUNC_ADD,[l2]:n.FUNC_SUBTRACT,[u2]:n.FUNC_REVERSE_SUBTRACT};if(i)I[Fr]=n.MIN,I[Or]=n.MAX;else{const A=t.get("EXT_blend_minmax");A!==null&&(I[Fr]=A.MIN_EXT,I[Or]=A.MAX_EXT)}const ie={[d2]:n.ZERO,[c2]:n.ONE,[h2]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[g2]:n.SRC_ALPHA_SATURATE,[x2]:n.DST_COLOR,[f2]:n.DST_ALPHA,[m2]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[_2]:n.ONE_MINUS_DST_COLOR,[p2]:n.ONE_MINUS_DST_ALPHA};function Mt(A,rt,it,lt,st,j,ft,bt){if(A===li){c===!0&&(vt(n.BLEND),c=!1);return}if(c===!1&&(Ct(n.BLEND),c=!0),A!==o2){if(A!==z||bt!==T){if((v!==Ji||L!==Ji)&&(n.blendEquation(n.FUNC_ADD),v=Ji,L=Ji),bt)switch(A){case tn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.ONE,n.ONE);break;case Nr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case tn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,w=null,b=null,F=null,z=A,T=bt}return}st=st||rt,j=j||it,ft=ft||lt,(rt!==v||st!==L)&&(n.blendEquationSeparate(I[rt],I[st]),v=rt,L=st),(it!==E||lt!==w||j!==b||ft!==F)&&(n.blendFuncSeparate(ie[it],ie[lt],ie[j],ie[ft]),E=it,w=lt,b=j,F=ft),z=A,T=!1}function Lt(A,rt){A.side===Be?vt(n.CULL_FACE):Ct(n.CULL_FACE);let it=A.side===ve;rt&&(it=!it),wt(it),A.blending===tn&&A.transparent===!1?Mt(li):Mt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),s.setMask(A.colorWrite);const lt=A.stencilWrite;u.setTest(lt),lt&&(u.setMask(A.stencilWriteMask),u.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),u.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Pt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ct(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(A){y!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),y=A)}function Wt(A){A!==r2?(Ct(n.CULL_FACE),A!==V&&(A===Ur?n.cullFace(n.BACK):A===s2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),V=A}function Nt(A){A!==k&&(X&&n.lineWidth(A),k=A)}function Pt(A,rt,it){A?(Ct(n.POLYGON_OFFSET_FILL),($!==rt||P!==it)&&(n.polygonOffset(rt,it),$=rt,P=it)):vt(n.POLYGON_OFFSET_FILL)}function Gt(A){A?Ct(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function ne(A){A===void 0&&(A=n.TEXTURE0+O-1),K!==A&&(n.activeTexture(A),K=A)}function oe(A,rt,it){it===void 0&&(K===null?it=n.TEXTURE0+O-1:it=K);let lt=q[it];lt===void 0&&(lt={type:void 0,texture:void 0},q[it]=lt),(lt.type!==A||lt.texture!==rt)&&(K!==it&&(n.activeTexture(it),K=it),n.bindTexture(A,rt||Et[A]),lt.type=A,lt.texture=rt)}function S(){const A=q[K];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function R(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(A){ut.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ut.copy(A))}function yt(A){ct.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ct.copy(A))}function _t(A,rt){let it=h.get(rt);it===void 0&&(it=new WeakMap,h.set(rt,it));let lt=it.get(A);lt===void 0&&(lt=n.getUniformBlockIndex(rt,A.name),it.set(A,lt))}function gt(A,rt){const lt=h.get(rt).get(A);d.get(rt)!==lt&&(n.uniformBlockBinding(rt,lt,A.__bindingPointIndex),d.set(rt,lt))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},K=null,q={},p={},_=new WeakMap,g=[],f=null,c=!1,z=null,v=null,E=null,w=null,L=null,b=null,F=null,T=!1,y=null,V=null,k=null,$=null,P=null,ut.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:Ct,disable:vt,bindFramebuffer:Ht,drawBuffers:ue,useProgram:Dt,setBlending:Mt,setMaterial:Lt,setFlipSided:wt,setCullFace:Wt,setLineWidth:Nt,setPolygonOffset:Pt,setScissorTest:Gt,activeTexture:ne,bindTexture:oe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:Z,texImage2D:R,texImage3D:et,updateUBOMapping:_t,uniformBlockBinding:gt,texStorage2D:at,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:J,compressedTexSubImage2D:tt,compressedTexSubImage3D:xt,scissor:Y,viewport:yt,reset:pt}}function cc(n,t,e,i,a,r,o){const s=a.isWebGL2,l=a.maxTextures,u=a.maxCubemapSize,d=a.maxTextureSize,h=a.maxSamples,m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(S,x){return c?new OffscreenCanvas(S,x):yn("canvas")}function v(S,x,Z,Q){let J=1;if((S.width>Q||S.height>Q)&&(J=Q/Math.max(S.width,S.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const tt=x?ua:Math.floor,xt=tt(J*S.width),at=tt(J*S.height);g===void 0&&(g=z(xt,at));const dt=Z?z(xt,at):g;return dt.width=xt,dt.height=at,dt.getContext("2d").drawImage(S,0,0,xt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xt+"x"+at+")."),dt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return pr(S.width)&&pr(S.height)}function w(S){return s?!1:S.wrapS!==Ue||S.wrapT!==Ue||S.minFilter!==ge&&S.minFilter!==ze}function L(S,x){return S.generateMipmaps&&x&&S.minFilter!==ge&&S.minFilter!==ze}function b(S){n.generateMipmap(S)}function F(S,x,Z,Q,J=!1){if(s===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tt=x;if(x===n.RED&&(Z===n.FLOAT&&(tt=n.R32F),Z===n.HALF_FLOAT&&(tt=n.R16F),Z===n.UNSIGNED_BYTE&&(tt=n.R8)),x===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(tt=n.R8UI),Z===n.UNSIGNED_SHORT&&(tt=n.R16UI),Z===n.UNSIGNED_INT&&(tt=n.R32UI),Z===n.BYTE&&(tt=n.R8I),Z===n.SHORT&&(tt=n.R16I),Z===n.INT&&(tt=n.R32I)),x===n.RG&&(Z===n.FLOAT&&(tt=n.RG32F),Z===n.HALF_FLOAT&&(tt=n.RG16F),Z===n.UNSIGNED_BYTE&&(tt=n.RG8)),x===n.RGBA){const xt=J?ra:kt.getTransfer(Q);Z===n.FLOAT&&(tt=n.RGBA32F),Z===n.HALF_FLOAT&&(tt=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(tt=xt===Yt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(S,x,Z){return L(S,Z)===!0||S.isFramebufferTexture&&S.minFilter!==ge&&S.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function y(S){return S===ge||S===Br||S===ba?n.NEAREST:n.LINEAR}function V(S){const x=S.target;x.removeEventListener("dispose",V),$(x),x.isVideoTexture&&_.delete(x)}function k(S){const x=S.target;x.removeEventListener("dispose",k),O(x)}function $(S){const x=i.get(S);if(x.__webglInit===void 0)return;const Z=S.source,Q=f.get(Z);if(Q){const J=Q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(S),Object.keys(Q).length===0&&f.delete(Z)}i.remove(S)}function P(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const Z=S.source,Q=f.get(Z);delete Q[x.__cacheKey],o.memory.textures--}function O(S){const x=S.texture,Z=i.get(S),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(Z.__webglFramebuffer[J]))for(let tt=0;tt<Z.__webglFramebuffer[J].length;tt++)n.deleteFramebuffer(Z.__webglFramebuffer[J][tt]);else n.deleteFramebuffer(Z.__webglFramebuffer[J]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[J])}else{if(Array.isArray(Z.__webglFramebuffer))for(let J=0;J<Z.__webglFramebuffer.length;J++)n.deleteFramebuffer(Z.__webglFramebuffer[J]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let J=0;J<Z.__webglColorRenderbuffer.length;J++)Z.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[J]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,tt=x.length;J<tt;J++){const xt=i.get(x[J]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(x[J])}i.remove(x),i.remove(S)}let X=0;function W(){X=0}function nt(){const S=X;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),X+=1,S}function K(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function q(S,x){const Z=i.get(S);if(S.isVideoTexture&&ne(S),S.isRenderTargetTexture===!1&&S.version>0&&Z.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(Z,S,x);return}}e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+x)}function D(S,x){const Z=i.get(S);if(S.version>0&&Z.__version!==S.version){Ht(Z,S,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+x)}function B(S,x){const Z=i.get(S);if(S.version>0&&Z.__version!==S.version){Ht(Z,S,x);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+x)}function ut(S,x){const Z=i.get(S);if(S.version>0&&Z.__version!==S.version){ue(Z,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+x)}const ct={[cr]:n.REPEAT,[Ue]:n.CLAMP_TO_EDGE,[hr]:n.MIRRORED_REPEAT},ht={[ge]:n.NEAREST,[Br]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[D2]:n.LINEAR_MIPMAP_NEAREST,[Mn]:n.LINEAR_MIPMAP_LINEAR},Et={[Y2]:n.NEVER,[t0]:n.ALWAYS,[q2]:n.LESS,[K2]:n.LEQUAL,[j2]:n.EQUAL,[Q2]:n.GEQUAL,[$2]:n.GREATER,[J2]:n.NOTEQUAL};function Ct(S,x,Z){if(Z?(n.texParameteri(S,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ct[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ht[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ht[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Ue||x.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,y(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,y(x.minFilter)),x.minFilter!==ge&&x.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ge||x.minFilter!==ba&&x.minFilter!==Mn||x.type===oi&&t.has("OES_texture_float_linear")===!1||s===!1&&x.type===Sn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function vt(S,x){let Z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",V));const Q=x.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const tt=K(x);if(tt!==S.__cacheKey){J[tt]===void 0&&(J[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),J[tt].usedTimes++;const xt=J[S.__cacheKey];xt!==void 0&&(J[S.__cacheKey].usedTimes--,xt.usedTimes===0&&P(x)),S.__cacheKey=tt,S.__webglTexture=J[tt].texture}return Z}function Ht(S,x,Z){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const J=vt(S,x),tt=x.source;e.bindTexture(Q,S.__webglTexture,n.TEXTURE0+Z);const xt=i.get(tt);if(tt.version!==xt.__version||J===!0){e.activeTexture(n.TEXTURE0+Z);const at=kt.getPrimaries(kt.workingColorSpace),dt=x.colorSpace===Ce?null:kt.getPrimaries(x.colorSpace),R=x.colorSpace===Ce||at===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const et=w(x)&&E(x.image)===!1;let Y=v(x.image,et,!1,d);Y=oe(x,Y);const yt=E(Y)||s,_t=r.convert(x.format,x.colorSpace);let gt=r.convert(x.type),pt=F(x.internalFormat,_t,gt,x.colorSpace,x.isVideoTexture);Ct(Q,x,yt);let A;const rt=x.mipmaps,it=s&&x.isVideoTexture!==!0,lt=xt.__version===void 0||J===!0,st=T(x,Y,yt);if(x.isDepthTexture)pt=n.DEPTH_COMPONENT,s?x.type===oi?pt=n.DEPTH_COMPONENT32F:x.type===si?pt=n.DEPTH_COMPONENT24:x.type===Mi?pt=n.DEPTH24_STENCIL8:pt=n.DEPTH_COMPONENT16:x.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Si&&pt===n.DEPTH_COMPONENT&&x.type!==Tr&&x.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=si,gt=r.convert(x.type)),x.format===rn&&pt===n.DEPTH_COMPONENT&&(pt=n.DEPTH_STENCIL,x.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Mi,gt=r.convert(x.type))),lt&&(it?e.texStorage2D(n.TEXTURE_2D,1,pt,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,pt,Y.width,Y.height,0,_t,gt,null));else if(x.isDataTexture)if(rt.length>0&&yt){it&&lt&&e.texStorage2D(n.TEXTURE_2D,st,pt,rt[0].width,rt[0].height);for(let j=0,ft=rt.length;j<ft;j++)A=rt[j],it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,A.width,A.height,_t,gt,A.data):e.texImage2D(n.TEXTURE_2D,j,pt,A.width,A.height,0,_t,gt,A.data);x.generateMipmaps=!1}else it?(lt&&e.texStorage2D(n.TEXTURE_2D,st,pt,Y.width,Y.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,_t,gt,Y.data)):e.texImage2D(n.TEXTURE_2D,0,pt,Y.width,Y.height,0,_t,gt,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,pt,rt[0].width,rt[0].height,Y.depth);for(let j=0,ft=rt.length;j<ft;j++)A=rt[j],x.format!==Ie?_t!==null?it?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,A.width,A.height,Y.depth,_t,A.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,pt,A.width,A.height,Y.depth,0,A.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,A.width,A.height,Y.depth,_t,gt,A.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,pt,A.width,A.height,Y.depth,0,_t,gt,A.data)}else{it&&lt&&e.texStorage2D(n.TEXTURE_2D,st,pt,rt[0].width,rt[0].height);for(let j=0,ft=rt.length;j<ft;j++)A=rt[j],x.format!==Ie?_t!==null?it?e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,A.width,A.height,_t,A.data):e.compressedTexImage2D(n.TEXTURE_2D,j,pt,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,A.width,A.height,_t,gt,A.data):e.texImage2D(n.TEXTURE_2D,j,pt,A.width,A.height,0,_t,gt,A.data)}else if(x.isDataArrayTexture)it?(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,pt,Y.width,Y.height,Y.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,_t,gt,Y.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,Y.width,Y.height,Y.depth,0,_t,gt,Y.data);else if(x.isData3DTexture)it?(lt&&e.texStorage3D(n.TEXTURE_3D,st,pt,Y.width,Y.height,Y.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,_t,gt,Y.data)):e.texImage3D(n.TEXTURE_3D,0,pt,Y.width,Y.height,Y.depth,0,_t,gt,Y.data);else if(x.isFramebufferTexture){if(lt)if(it)e.texStorage2D(n.TEXTURE_2D,st,pt,Y.width,Y.height);else{let j=Y.width,ft=Y.height;for(let bt=0;bt<st;bt++)e.texImage2D(n.TEXTURE_2D,bt,pt,j,ft,0,_t,gt,null),j>>=1,ft>>=1}}else if(rt.length>0&&yt){it&&lt&&e.texStorage2D(n.TEXTURE_2D,st,pt,rt[0].width,rt[0].height);for(let j=0,ft=rt.length;j<ft;j++)A=rt[j],it?e.texSubImage2D(n.TEXTURE_2D,j,0,0,_t,gt,A):e.texImage2D(n.TEXTURE_2D,j,pt,_t,gt,A);x.generateMipmaps=!1}else it?(lt&&e.texStorage2D(n.TEXTURE_2D,st,pt,Y.width,Y.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,gt,Y)):e.texImage2D(n.TEXTURE_2D,0,pt,_t,gt,Y);L(x,yt)&&b(Q),xt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ue(S,x,Z){if(x.image.length!==6)return;const Q=vt(S,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+Z);const tt=i.get(J);if(J.version!==tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+Z);const xt=kt.getPrimaries(kt.workingColorSpace),at=x.colorSpace===Ce?null:kt.getPrimaries(x.colorSpace),dt=x.colorSpace===Ce||xt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const R=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!R&&!et?Y[j]=v(x.image[j],!1,!0,u):Y[j]=et?x.image[j].image:x.image[j],Y[j]=oe(x,Y[j]);const yt=Y[0],_t=E(yt)||s,gt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),A=F(x.internalFormat,gt,pt,x.colorSpace),rt=s&&x.isVideoTexture!==!0,it=tt.__version===void 0||Q===!0;let lt=T(x,yt,_t);Ct(n.TEXTURE_CUBE_MAP,x,_t);let st;if(R){rt&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,A,yt.width,yt.height);for(let j=0;j<6;j++){st=Y[j].mipmaps;for(let ft=0;ft<st.length;ft++){const bt=st[ft];x.format!==Ie?gt!==null?rt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,A,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,bt.width,bt.height,gt,pt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,A,bt.width,bt.height,0,gt,pt,bt.data)}}}else{st=x.mipmaps,rt&&it&&(st.length>0&&lt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,A,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(et){rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,gt,pt,Y[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,A,Y[j].width,Y[j].height,0,gt,pt,Y[j].data);for(let ft=0;ft<st.length;ft++){const Jt=st[ft].image[j].image;rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Jt.width,Jt.height,gt,pt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,A,Jt.width,Jt.height,0,gt,pt,Jt.data)}}else{rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt,pt,Y[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,A,gt,pt,Y[j]);for(let ft=0;ft<st.length;ft++){const bt=st[ft];rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,gt,pt,bt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,A,gt,pt,bt.image[j])}}}L(x,_t)&&b(n.TEXTURE_CUBE_MAP),tt.__version=J.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Dt(S,x,Z,Q,J,tt){const xt=r.convert(Z.format,Z.colorSpace),at=r.convert(Z.type),dt=F(Z.internalFormat,xt,at,Z.colorSpace);if(!i.get(x).__hasExternalTextures){const et=Math.max(1,x.width>>tt),Y=Math.max(1,x.height>>tt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,dt,et,Y,x.depth,0,xt,at,null):e.texImage2D(J,tt,dt,et,Y,0,xt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Gt(x)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,i.get(Z).__webglTexture,0,Pt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,i.get(Z).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(S,x,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let Q=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Gt(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===oi?Q=n.DEPTH_COMPONENT32F:J.type===si&&(Q=n.DEPTH_COMPONENT24));const tt=Pt(x);Gt(x)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,Q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,Q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Pt(x);Z&&Gt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):Gt(x)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<Q.length;J++){const tt=Q[J],xt=r.convert(tt.format,tt.colorSpace),at=r.convert(tt.type),dt=F(tt.internalFormat,xt,at,tt.colorSpace),R=Pt(x);Z&&Gt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,dt,x.width,x.height):Gt(x)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,dt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,dt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,J=Pt(x);if(x.depthTexture.format===Si)Gt(x)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===rn)Gt(x)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Mt(S){const x=i.get(S),Z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ie(x.__webglFramebuffer,S)}else if(Z){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),I(x.__webglDepthbuffer[Q],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),I(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(S,x,Z){const Q=i.get(S);x!==void 0&&Dt(Q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Mt(S)}function wt(S){const x=S.texture,Z=i.get(S),Q=i.get(x);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++);const J=S.isWebGLCubeRenderTarget===!0,tt=S.isWebGLMultipleRenderTargets===!0,xt=E(S)||s;if(J){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(s&&x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer[at]=[];for(let dt=0;dt<x.mipmaps.length;dt++)Z.__webglFramebuffer[at][dt]=n.createFramebuffer()}else Z.__webglFramebuffer[at]=n.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)Z.__webglFramebuffer[at]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(tt)if(a.drawBuffers){const at=S.texture;for(let dt=0,R=at.length;dt<R;dt++){const et=i.get(at[dt]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&Gt(S)===!1){const at=tt?x:[x];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){const R=at[dt];Z.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[dt]);const et=r.convert(R.format,R.colorSpace),Y=r.convert(R.type),yt=F(R.internalFormat,et,Y,R.colorSpace,S.isXRRenderTarget===!0),_t=Pt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,yt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),I(Z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,x,xt);for(let at=0;at<6;at++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Dt(Z.__webglFramebuffer[at][dt],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else Dt(Z.__webglFramebuffer[at],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);L(x,xt)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const at=S.texture;for(let dt=0,R=at.length;dt<R;dt++){const et=at[dt],Y=i.get(et);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture),Ct(n.TEXTURE_2D,et,xt),Dt(Z.__webglFramebuffer,S,et,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),L(et,xt)&&b(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?at=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Q.__webglTexture),Ct(at,x,xt),s&&x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Dt(Z.__webglFramebuffer[dt],S,x,n.COLOR_ATTACHMENT0,at,dt);else Dt(Z.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,at,0);L(x,xt)&&b(at),e.unbindTexture()}S.depthBuffer&&Mt(S)}function Wt(S){const x=E(S)||s,Z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,J=Z.length;Q<J;Q++){const tt=Z[Q];if(L(tt,x)){const xt=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(tt).__webglTexture;e.bindTexture(xt,at),b(xt),e.unbindTexture()}}}function Nt(S){if(s&&S.samples>0&&Gt(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],Z=S.width,Q=S.height;let J=n.COLOR_BUFFER_BIT;const tt=[],xt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(S),dt=S.isWebGLMultipleRenderTargets===!0;if(dt)for(let R=0;R<x.length;R++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let R=0;R<x.length;R++){tt.push(n.COLOR_ATTACHMENT0+R),S.depthBuffer&&tt.push(xt);const et=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(et===!1&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),dt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[R]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xt])),dt){const Y=i.get(x[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,J,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let R=0;R<x.length;R++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,at.__webglColorRenderbuffer[R]);const et=i.get(x[R]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Pt(S){return Math.min(h,S.samples)}function Gt(S){const x=i.get(S);return s&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(S){const x=o.render.frame;_.get(S)!==x&&(_.set(S,x),S.update())}function oe(S,x){const Z=S.colorSpace,Q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===fr||Z!==Qe&&Z!==Ce&&(kt.getTransfer(Z)===Yt?s===!1?t.has("EXT_sRGB")===!0&&Q===Ie?(S.format=fr,S.minFilter=ze,S.generateMipmaps=!1):x=Lo.sRGBToLinear(x):(Q!==Ie||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),x}this.allocateTextureUnit=nt,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=ut,this.rebindTextures=Lt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Gt}function hc(n,t,e){const i=e.isWebGL2;function a(r,o=Ce){let s;const l=kt.getTransfer(o);if(r===di)return n.UNSIGNED_BYTE;if(r===Eo)return n.UNSIGNED_SHORT_4_4_4_4;if(r===yo)return n.UNSIGNED_SHORT_5_5_5_1;if(r===U2)return n.BYTE;if(r===I2)return n.SHORT;if(r===Tr)return n.UNSIGNED_SHORT;if(r===So)return n.INT;if(r===si)return n.UNSIGNED_INT;if(r===oi)return n.FLOAT;if(r===Sn)return i?n.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===N2)return n.ALPHA;if(r===Ie)return n.RGBA;if(r===Z2)return n.LUMINANCE;if(r===F2)return n.LUMINANCE_ALPHA;if(r===Si)return n.DEPTH_COMPONENT;if(r===rn)return n.DEPTH_STENCIL;if(r===fr)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===O2)return n.RED;if(r===bo)return n.RED_INTEGER;if(r===B2)return n.RG;if(r===Ao)return n.RG_INTEGER;if(r===wo)return n.RGBA_INTEGER;if(r===Aa||r===wa||r===za||r===Ra)if(l===Yt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hr||r===Gr||r===Vr||r===kr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Hr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===H2)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wr||r===Xr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Wr)return l===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Xr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yr||r===qr||r===jr||r===Kr||r===$r||r===Jr||r===Qr||r===ts||r===es||r===is||r===ns||r===as||r===rs||r===ss)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Yr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$r)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qr)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ts)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===es)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===is)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ns)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===as)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rs)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ss)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ca||r===os||r===ls)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Ca)return l===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===os)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ls)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===G2||r===us||r===ds||r===cs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(r===us)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?i?n.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:a}}class mc extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kn extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fc={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,r=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,i),c=this._getHandJoint(u,g);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],m=d.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&m>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(fc)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class pc extends Me{constructor(t,e,i,a,r,o,s,l,u,d){if(d=d!==void 0?d:Si,d!==Si&&d!==rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Si&&(i=si),i===void 0&&d===rn&&(i=Mi),super(null,a,r,o,s,l,d,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xc extends zi{constructor(t,e){super();const i=this;let a=null,r=1,o=null,s="local-floor",l=1,u=null,d=null,h=null,m=null,p=null,_=null;const g=e.getContextAttributes();let f=null,c=null;const z=[],v=[],E=new be;E.layers.enable(1),E.viewport=new qt;const w=new be;w.layers.enable(2),w.viewport=new qt;const L=[E,w],b=new mc;b.layers.enable(1),b.layers.enable(2);let F=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=z[D];return B===void 0&&(B=new Ja,z[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=z[D];return B===void 0&&(B=new Ja,z[D]=B),B.getGripSpace()},this.getHand=function(D){let B=z[D];return B===void 0&&(B=new Ja,z[D]=B),B.getHandSpace()};function y(D){const B=v.indexOf(D.inputSource);if(B===-1)return;const ut=z[B];ut!==void 0&&(ut.update(D.inputSource,D.frame,u||o),ut.dispatchEvent({type:D.type,data:D.inputSource}))}function V(){a.removeEventListener("select",y),a.removeEventListener("selectstart",y),a.removeEventListener("selectend",y),a.removeEventListener("squeeze",y),a.removeEventListener("squeezestart",y),a.removeEventListener("squeezeend",y),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",k);for(let D=0;D<z.length;D++){const B=v[D];B!==null&&(v[D]=null,z[D].disconnect(B))}F=null,T=null,t.setRenderTarget(f),p=null,m=null,h=null,a=null,c=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(D){if(a=D,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",y),a.addEventListener("selectstart",y),a.addEventListener("selectend",y),a.addEventListener("squeeze",y),a.addEventListener("squeezestart",y),a.addEventListener("squeezeend",y),a.addEventListener("end",V),a.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,B),a.updateRenderState({baseLayer:p}),c=new yi(p.framebufferWidth,p.framebufferHeight,{format:Ie,type:di,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let B=null,ut=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=g.stencil?rn:Si,ut=g.stencil?Mi:si);const ht={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(a,e),m=h.createProjectionLayer(ht),a.updateRenderState({layers:[m]}),c=new yi(m.textureWidth,m.textureHeight,{format:Ie,type:di,depthTexture:new pc(m.textureWidth,m.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Et=t.properties.get(c);Et.__ignoreDepthValues=m.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await a.requestReferenceSpace(s),q.setContext(a),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function k(D){for(let B=0;B<D.removed.length;B++){const ut=D.removed[B],ct=v.indexOf(ut);ct>=0&&(v[ct]=null,z[ct].disconnect(ut))}for(let B=0;B<D.added.length;B++){const ut=D.added[B];let ct=v.indexOf(ut);if(ct===-1){for(let Et=0;Et<z.length;Et++)if(Et>=v.length){v.push(ut),ct=Et;break}else if(v[Et]===null){v[Et]=ut,ct=Et;break}if(ct===-1)break}const ht=z[ct];ht&&ht.connect(ut)}}const $=new C,P=new C;function O(D,B,ut){$.setFromMatrixPosition(B.matrixWorld),P.setFromMatrixPosition(ut.matrixWorld);const ct=$.distanceTo(P),ht=B.projectionMatrix.elements,Et=ut.projectionMatrix.elements,Ct=ht[14]/(ht[10]-1),vt=ht[14]/(ht[10]+1),Ht=(ht[9]+1)/ht[5],ue=(ht[9]-1)/ht[5],Dt=(ht[8]-1)/ht[0],I=(Et[8]+1)/Et[0],ie=Ct*Dt,Mt=Ct*I,Lt=ct/(-Dt+I),wt=Lt*-Dt;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(wt),D.translateZ(Lt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Wt=Ct+Lt,Nt=vt+Lt,Pt=ie-wt,Gt=Mt+(ct-wt),ne=Ht*vt/Nt*Wt,oe=ue*vt/Nt*Wt;D.projectionMatrix.makePerspective(Pt,Gt,ne,oe,Wt,Nt),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function X(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(a===null)return;b.near=w.near=E.near=D.near,b.far=w.far=E.far=D.far,(F!==b.near||T!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,T=b.far);const B=D.parent,ut=b.cameras;X(b,B);for(let ct=0;ct<ut.length;ct++)X(ut[ct],B);ut.length===2?O(b,E,w):b.projectionMatrix.copy(E.projectionMatrix),W(D,b,B)};function W(D,B,ut){ut===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(ut.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=En*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(D){l=D,m!==null&&(m.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let nt=null;function K(D,B){if(d=B.getViewerPose(u||o),_=B,d!==null){const ut=d.views;p!==null&&(t.setRenderTargetFramebuffer(c,p.framebuffer),t.setRenderTarget(c));let ct=!1;ut.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let ht=0;ht<ut.length;ht++){const Et=ut[ht];let Ct=null;if(p!==null)Ct=p.getViewport(Et);else{const Ht=h.getViewSubImage(m,Et);Ct=Ht.viewport,ht===0&&(t.setRenderTargetTextures(c,Ht.colorTexture,m.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(c))}let vt=L[ht];vt===void 0&&(vt=new be,vt.layers.enable(ht),vt.viewport=new qt,L[ht]=vt),vt.matrix.fromArray(Et.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Et.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(b.matrix.copy(vt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(vt)}}for(let ut=0;ut<z.length;ut++){const ct=v[ut],ht=z[ut];ct!==null&&ht!==void 0&&ht.update(ct,B,u||o)}nt&&nt(D,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const q=new Ho;q.setAnimationLoop(K),this.setAnimationLoop=function(D){nt=D},this.dispose=function(){}}}function _c(n,t){function e(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Fo(n)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function a(f,c,z,v,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(f,c):c.isMeshToonMaterial?(r(f,c),h(f,c)):c.isMeshPhongMaterial?(r(f,c),d(f,c)):c.isMeshStandardMaterial?(r(f,c),m(f,c),c.isMeshPhysicalMaterial&&p(f,c,E)):c.isMeshMatcapMaterial?(r(f,c),_(f,c)):c.isMeshDepthMaterial?r(f,c):c.isMeshDistanceMaterial?(r(f,c),g(f,c)):c.isMeshNormalMaterial?r(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?l(f,c,z,v):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,e(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===ve&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,e(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===ve&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,e(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,e(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const z=t.get(c).envMap;if(z&&(f.envMap.value=z,f.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*v,e(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,z,v){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*z,f.scale.value=v*.5,c.map&&(f.map.value=c.map,e(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function h(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function m(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,f.roughnessMapTransform)),t.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function p(f,c,z){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ve&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=z.texture,f.transmissionSamplerSize.value.set(z.width,z.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,c){c.matcap&&(f.matcap.value=c.matcap)}function g(f,c){const z=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(z.matrixWorld),f.nearDistance.value=z.shadow.camera.near,f.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function gc(n,t,e,i){let a={},r={},o=[];const s=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(z,v){const E=v.program;i.uniformBlockBinding(z,E)}function u(z,v){let E=a[z.id];E===void 0&&(_(z),E=d(z),a[z.id]=E,z.addEventListener("dispose",f));const w=v.program;i.updateUBOMapping(z,w);const L=t.render.frame;r[z.id]!==L&&(m(z),r[z.id]=L)}function d(z){const v=h();z.__bindingPointIndex=v;const E=n.createBuffer(),w=z.__size,L=z.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function h(){for(let z=0;z<s;z++)if(o.indexOf(z)===-1)return o.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(z){const v=a[z.id],E=z.uniforms,w=z.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,b=E.length;L<b;L++){const F=E[L];if(p(F,L,w)===!0){const T=F.__offset,y=Array.isArray(F.value)?F.value:[F.value];let V=0;for(let k=0;k<y.length;k++){const $=y[k],P=g($);typeof $=="number"?(F.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,T+V,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=$.elements[0],F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=$.elements[0],F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=$.elements[0]):($.toArray(F.__data,V),V+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(z,v,E){const w=z.value;if(E[v]===void 0){if(typeof w=="number")E[v]=w;else{const L=Array.isArray(w)?w:[w],b=[];for(let F=0;F<L.length;F++)b.push(L[F].clone());E[v]=b}return!0}else if(typeof w=="number"){if(E[v]!==w)return E[v]=w,!0}else{const L=Array.isArray(E[v])?E[v]:[E[v]],b=Array.isArray(w)?w:[w];for(let F=0;F<L.length;F++){const T=L[F];if(T.equals(b[F])===!1)return T.copy(b[F]),!0}}return!1}function _(z){const v=z.uniforms;let E=0;const w=16;let L=0;for(let b=0,F=v.length;b<F;b++){const T=v[b],y={boundary:0,storage:0},V=Array.isArray(T.value)?T.value:[T.value];for(let k=0,$=V.length;k<$;k++){const P=V[k],O=g(P);y.boundary+=O.boundary,y.storage+=O.storage}if(T.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,b>0){L=E%w;const k=w-L;L!==0&&k-y.boundary<0&&(E+=w-L,T.__offset=E)}E+=y.storage}return L=E%w,L>0&&(E+=w-L),z.__size=E,z.__cache={},this}function g(z){const v={boundary:0,storage:0};return typeof z=="number"?(v.boundary=4,v.storage=4):z.isVector2?(v.boundary=8,v.storage=8):z.isVector3||z.isColor?(v.boundary=16,v.storage=12):z.isVector4?(v.boundary=16,v.storage=16):z.isMatrix3?(v.boundary=48,v.storage=48):z.isMatrix4?(v.boundary=64,v.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),v}function f(z){const v=z.target;v.removeEventListener("dispose",f);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(a[v.id]),delete a[v.id],delete r[v.id]}function c(){for(const z in a)n.deleteBuffer(a[z]);o=[],a={},r={}}return{bind:l,update:u,dispose:c}}class Xo{constructor(t={}){const{canvas:e=x0(),context:i=null,depth:a=!0,stencil:r=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const c=[],z=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const v=this;let E=!1,w=0,L=0,b=null,F=-1,T=null;const y=new qt,V=new qt;let k=null;const $=new Bt(0);let P=0,O=e.width,X=e.height,W=1,nt=null,K=null;const q=new qt(0,0,O,X),D=new qt(0,0,O,X);let B=!1;const ut=new yr;let ct=!1,ht=!1,Et=null;const Ct=new Kt,vt=new Tt,Ht=new C,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return b===null?W:1}let I=i;function ie(M,U){for(let H=0;H<M.length;H++){const N=M[H],G=e.getContext(N,U);if(G!==null)return G}return null}try{const M={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gr}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=ie(U,M),I===null)throw ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Mt,Lt,wt,Wt,Nt,Pt,Gt,ne,oe,S,x,Z,Q,J,tt,xt,at,dt,R,et,Y,yt,_t,gt;function pt(){Mt=new R1(I),Lt=new S1(I,Mt,t),Mt.init(Lt),yt=new hc(I,Mt,Lt),wt=new dc(I,Mt,Lt),Wt=new P1(I),Nt=new Kd,Pt=new cc(I,Mt,wt,Nt,Lt,yt,Wt),Gt=new y1(v),ne=new z1(v),oe=new H0(I,Lt),_t=new v1(I,Mt,oe,Lt),S=new C1(I,oe,Wt,_t),x=new N1(I,S,oe,Wt),R=new I1(I,Lt,Pt),xt=new E1(Nt),Z=new jd(v,Gt,ne,Mt,Lt,_t,xt),Q=new _c(v,Nt),J=new Jd,tt=new ac(Mt,Lt),dt=new T1(v,Gt,ne,wt,x,m,l),at=new uc(v,x,Lt),gt=new gc(I,Wt,Lt,wt),et=new M1(I,Mt,Wt,Lt),Y=new L1(I,Mt,Wt,Lt),Wt.programs=Z.programs,v.capabilities=Lt,v.extensions=Mt,v.properties=Nt,v.renderLists=J,v.shadowMap=at,v.state=wt,v.info=Wt}pt();const A=new xc(v,I);this.xr=A,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(O,X,!1))},this.getSize=function(M){return M.set(O,X)},this.setSize=function(M,U,H=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,X=U,e.width=Math.floor(M*W),e.height=Math.floor(U*W),H===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(O*W,X*W).floor()},this.setDrawingBufferSize=function(M,U,H){O=M,X=U,W=H,e.width=Math.floor(M*H),e.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,U,H,N){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,U,H,N),wt.viewport(y.copy(q).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy(D)},this.setScissor=function(M,U,H,N){M.isVector4?D.set(M.x,M.y,M.z,M.w):D.set(M,U,H,N),wt.scissor(V.copy(D).multiplyScalar(W).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(M){wt.setScissorTest(B=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(M=!0,U=!0,H=!0){let N=0;if(M){let G=!1;if(b!==null){const mt=b.texture.format;G=mt===wo||mt===Ao||mt===bo}if(G){const mt=b.texture.type,St=mt===di||mt===si||mt===Tr||mt===Mi||mt===Eo||mt===yo,zt=dt.getClearColor(),Rt=dt.getClearAlpha(),Ft=zt.r,At=zt.g,Ut=zt.b;St?(p[0]=Ft,p[1]=At,p[2]=Ut,p[3]=Rt,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Ft,_[1]=At,_[2]=Ut,_[3]=Rt,I.clearBufferiv(I.COLOR,0,_))}else N|=I.COLOR_BUFFER_BIT}U&&(N|=I.DEPTH_BUFFER_BIT),H&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),J.dispose(),tt.dispose(),Nt.dispose(),Gt.dispose(),ne.dispose(),x.dispose(),_t.dispose(),gt.dispose(),Z.dispose(),A.dispose(),A.removeEventListener("sessionstart",Xt),A.removeEventListener("sessionend",Fe),Et&&(Et.dispose(),Et=null),fe.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Wt.autoReset,U=at.enabled,H=at.autoUpdate,N=at.needsUpdate,G=at.type;pt(),Wt.autoReset=M,at.enabled=U,at.autoUpdate=H,at.needsUpdate=N,at.type=G}function lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const U=M.target;U.removeEventListener("dispose",st),j(U)}function j(M){ft(M),Nt.remove(M)}function ft(M){const U=Nt.get(M).programs;U!==void 0&&(U.forEach(function(H){Z.releaseProgram(H)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,N,G,mt){U===null&&(U=ue);const St=G.isMesh&&G.matrixWorld.determinant()<0,zt=e2(M,U,H,N,G);wt.setMaterial(N,St);let Rt=H.index,Ft=1;if(N.wireframe===!0){if(Rt=S.getWireframeAttribute(H),Rt===void 0)return;Ft=2}const At=H.drawRange,Ut=H.attributes.position;let jt=At.start*Ft,$t=(At.start+At.count)*Ft;mt!==null&&(jt=Math.max(jt,mt.start*Ft),$t=Math.min($t,(mt.start+mt.count)*Ft)),Rt!==null?(jt=Math.max(jt,0),$t=Math.min($t,Rt.count)):Ut!=null&&(jt=Math.max(jt,0),$t=Math.min($t,Ut.count));const Ae=$t-jt;if(Ae<0||Ae===1/0)return;_t.setup(G,N,zt,H,Rt);let Ge,Qt=et;if(Rt!==null&&(Ge=oe.get(Rt),Qt=Y,Qt.setIndex(Ge)),G.isMesh)N.wireframe===!0?(wt.setLineWidth(N.wireframeLinewidth*Dt()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(G.isLine){let Ot=N.linewidth;Ot===void 0&&(Ot=1),wt.setLineWidth(Ot*Dt()),G.isLineSegments?Qt.setMode(I.LINES):G.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else G.isPoints?Qt.setMode(I.POINTS):G.isSprite&&Qt.setMode(I.TRIANGLES);if(G.isInstancedMesh)Qt.renderInstances(jt,Ae,G.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ma=Math.min(H.instanceCount,Ot);Qt.renderInstances(jt,Ae,Ma)}else Qt.render(jt,Ae)},this.compile=function(M,U){function H(N,G,mt){N.transparent===!0&&N.side===Be&&N.forceSinglePass===!1?(N.side=ve,N.needsUpdate=!0,zn(N,G,mt),N.side=ci,N.needsUpdate=!0,zn(N,G,mt),N.side=Be):zn(N,G,mt)}f=tt.get(M),f.init(),z.push(f),M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(v._useLegacyLights),M.traverse(function(N){const G=N.material;if(G)if(Array.isArray(G))for(let mt=0;mt<G.length;mt++){const St=G[mt];H(St,M,N)}else H(G,M,N)}),z.pop(),f=null};let bt=null;function Jt(M){bt&&bt(M)}function Xt(){fe.stop()}function Fe(){fe.start()}const fe=new Ho;fe.setAnimationLoop(Jt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(M){bt=M,A.setAnimationLoop(M),M===null?fe.stop():fe.start()},A.addEventListener("sessionstart",Xt),A.addEventListener("sessionend",Fe),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(U),U=A.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,b),f=tt.get(M,z.length),f.init(),z.push(f),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ut.setFromProjectionMatrix(Ct),ht=this.localClippingEnabled,ct=xt.init(this.clippingPlanes,ht),g=J.get(M,c.length),g.init(),c.push(g),zr(M,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(nt,K),this.info.render.frame++,ct===!0&&xt.beginShadows();const H=f.state.shadowsArray;if(at.render(H,M,U),ct===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(g,M),f.setupLights(v._useLegacyLights),U.isArrayCamera){const N=U.cameras;for(let G=0,mt=N.length;G<mt;G++){const St=N[G];Rr(g,M,St,St.viewport)}}else Rr(g,M,U);b!==null&&(Pt.updateMultisampleRenderTarget(b),Pt.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(v,M,U),_t.resetDefaultState(),F=-1,T=null,z.pop(),z.length>0?f=z[z.length-1]:f=null,c.pop(),c.length>0?g=c[c.length-1]:g=null};function zr(M,U,H,N){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ut.intersectsSprite(M)){N&&Ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const St=x.update(M),zt=M.material;zt.visible&&g.push(M,St,zt,H,Ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ut.intersectsObject(M))){const St=x.update(M),zt=M.material;if(N&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ht.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ht.copy(St.boundingSphere.center)),Ht.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Rt=St.groups;for(let Ft=0,At=Rt.length;Ft<At;Ft++){const Ut=Rt[Ft],jt=zt[Ut.materialIndex];jt&&jt.visible&&g.push(M,St,jt,H,Ht.z,Ut)}}else zt.visible&&g.push(M,St,zt,H,Ht.z,null)}}const mt=M.children;for(let St=0,zt=mt.length;St<zt;St++)zr(mt[St],U,H,N)}function Rr(M,U,H,N){const G=M.opaque,mt=M.transmissive,St=M.transparent;f.setupLightsView(H),ct===!0&&xt.setGlobalState(v.clippingPlanes,H),mt.length>0&&t2(G,mt,U,H),N&&wt.viewport(y.copy(N)),G.length>0&&wn(G,U,H),mt.length>0&&wn(mt,U,H),St.length>0&&wn(St,U,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function t2(M,U,H,N){const G=Lt.isWebGL2;Et===null&&(Et=new yi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Sn:di,minFilter:Mn,samples:G?4:0})),v.getDrawingBufferSize(vt),G?Et.setSize(vt.x,vt.y):Et.setSize(ua(vt.x),ua(vt.y));const mt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor($),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const St=v.toneMapping;v.toneMapping=ui,wn(M,H,N),Pt.updateMultisampleRenderTarget(Et),Pt.updateRenderTargetMipmap(Et);let zt=!1;for(let Rt=0,Ft=U.length;Rt<Ft;Rt++){const At=U[Rt],Ut=At.object,jt=At.geometry,$t=At.material,Ae=At.group;if($t.side===Be&&Ut.layers.test(N.layers)){const Ge=$t.side;$t.side=ve,$t.needsUpdate=!0,Cr(Ut,H,N,jt,$t,Ae),$t.side=Ge,$t.needsUpdate=!0,zt=!0}}zt===!0&&(Pt.updateMultisampleRenderTarget(Et),Pt.updateRenderTargetMipmap(Et)),v.setRenderTarget(mt),v.setClearColor($,P),v.toneMapping=St}function wn(M,U,H){const N=U.isScene===!0?U.overrideMaterial:null;for(let G=0,mt=M.length;G<mt;G++){const St=M[G],zt=St.object,Rt=St.geometry,Ft=N===null?St.material:N,At=St.group;zt.layers.test(H.layers)&&Cr(zt,U,H,Rt,Ft,At)}}function Cr(M,U,H,N,G,mt){M.onBeforeRender(v,U,H,N,G,mt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(v,U,H,N,M,mt),G.transparent===!0&&G.side===Be&&G.forceSinglePass===!1?(G.side=ve,G.needsUpdate=!0,v.renderBufferDirect(H,U,N,G,M,mt),G.side=ci,G.needsUpdate=!0,v.renderBufferDirect(H,U,N,G,M,mt),G.side=Be):v.renderBufferDirect(H,U,N,G,M,mt),M.onAfterRender(v,U,H,N,G,mt)}function zn(M,U,H){U.isScene!==!0&&(U=ue);const N=Nt.get(M),G=f.state.lights,mt=f.state.shadowsArray,St=G.state.version,zt=Z.getParameters(M,G.state,mt,U,H),Rt=Z.getProgramCacheKey(zt);let Ft=N.programs;N.environment=M.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(M.isMeshStandardMaterial?ne:Gt).get(M.envMap||N.environment),Ft===void 0&&(M.addEventListener("dispose",st),Ft=new Map,N.programs=Ft);let At=Ft.get(Rt);if(At!==void 0){if(N.currentProgram===At&&N.lightsStateVersion===St)return Lr(M,zt),At}else zt.uniforms=Z.getUniforms(M),M.onBuild(H,zt,v),M.onBeforeCompile(zt,v),At=Z.acquireProgram(zt,Rt),Ft.set(Rt,At),N.uniforms=zt.uniforms;const Ut=N.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=xt.uniform),Lr(M,zt),N.needsLights=n2(M),N.lightsStateVersion=St,N.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix);const jt=At.getUniforms(),$t=aa.seqWithValue(jt.seq,Ut);return N.currentProgram=At,N.uniformsList=$t,At}function Lr(M,U){const H=Nt.get(M);H.outputColorSpace=U.outputColorSpace,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function e2(M,U,H,N,G){U.isScene!==!0&&(U=ue),Pt.resetTextureUnits();const mt=U.fog,St=N.isMeshStandardMaterial?U.environment:null,zt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qe,Rt=(N.isMeshStandardMaterial?ne:Gt).get(N.envMap||St),Ft=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,At=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ut=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,$t=!!H.morphAttributes.color;let Ae=ui;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const Ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Ge!==void 0?Ge.length:0,Ot=Nt.get(N),Ma=f.state.lights;if(ct===!0&&(ht===!0||M!==T)){const Se=M===T&&N.id===F;xt.setState(N,M,Se)}let te=!1;N.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ma.state.version||Ot.outputColorSpace!==zt||G.isInstancedMesh&&Ot.instancing===!1||!G.isInstancedMesh&&Ot.instancing===!0||G.isSkinnedMesh&&Ot.skinning===!1||!G.isSkinnedMesh&&Ot.skinning===!0||G.isInstancedMesh&&Ot.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ot.instancingColor===!1&&G.instanceColor!==null||Ot.envMap!==Rt||N.fog===!0&&Ot.fog!==mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==xt.numPlanes||Ot.numIntersection!==xt.numIntersection)||Ot.vertexAlphas!==Ft||Ot.vertexTangents!==At||Ot.morphTargets!==Ut||Ot.morphNormals!==jt||Ot.morphColors!==$t||Ot.toneMapping!==Ae||Lt.isWebGL2===!0&&Ot.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Ot.__version=N.version);let mi=Ot.currentProgram;te===!0&&(mi=zn(N,U,G));let Pr=!1,ln=!1,Sa=!1;const pe=mi.getUniforms(),fi=Ot.uniforms;if(wt.useProgram(mi.program)&&(Pr=!0,ln=!0,Sa=!0),N.id!==F&&(F=N.id,ln=!0),Pr||T!==M){pe.setValue(I,"projectionMatrix",M.projectionMatrix),pe.setValue(I,"viewMatrix",M.matrixWorldInverse);const Se=pe.map.cameraPosition;Se!==void 0&&Se.setValue(I,Ht.setFromMatrixPosition(M.matrixWorld)),Lt.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&pe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,ln=!0,Sa=!0)}if(G.isSkinnedMesh){pe.setOptional(I,G,"bindMatrix"),pe.setOptional(I,G,"bindMatrixInverse");const Se=G.skeleton;Se&&(Lt.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),pe.setValue(I,"boneTexture",Se.boneTexture,Pt),pe.setValue(I,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ea=H.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&Lt.isWebGL2===!0)&&R.update(G,H,mi),(ln||Ot.receiveShadow!==G.receiveShadow)&&(Ot.receiveShadow=G.receiveShadow,pe.setValue(I,"receiveShadow",G.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(fi.envMap.value=Rt,fi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ln&&(pe.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&i2(fi,Sa),mt&&N.fog===!0&&Q.refreshFogUniforms(fi,mt),Q.refreshMaterialUniforms(fi,N,W,X,Et),aa.upload(I,Ot.uniformsList,fi,Pt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(aa.upload(I,Ot.uniformsList,fi,Pt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&pe.setValue(I,"center",G.center),pe.setValue(I,"modelViewMatrix",G.modelViewMatrix),pe.setValue(I,"normalMatrix",G.normalMatrix),pe.setValue(I,"modelMatrix",G.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Se=N.uniformsGroups;for(let ya=0,a2=Se.length;ya<a2;ya++)if(Lt.isWebGL2){const Dr=Se[ya];gt.update(Dr,mi),gt.bind(Dr,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function i2(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function n2(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,U,H){Nt.get(M.texture).__webglTexture=U,Nt.get(M.depthTexture).__webglTexture=H;const N=Nt.get(M);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const H=Nt.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){b=M,w=U,L=H;let N=!0,G=null,mt=!1,St=!1;if(M){const Rt=Nt.get(M);Rt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):Rt.__webglFramebuffer===void 0?Pt.setupRenderTarget(M):Rt.__hasExternalTextures&&Pt.rebindTextures(M,Nt.get(M.texture).__webglTexture,Nt.get(M.depthTexture).__webglTexture);const Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const At=Nt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[U])?G=At[U][H]:G=At[U],mt=!0):Lt.isWebGL2&&M.samples>0&&Pt.useMultisampledRTT(M)===!1?G=Nt.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[H]:G=At,y.copy(M.viewport),V.copy(M.scissor),k=M.scissorTest}else y.copy(q).multiplyScalar(W).floor(),V.copy(D).multiplyScalar(W).floor(),k=B;if(wt.bindFramebuffer(I.FRAMEBUFFER,G)&&Lt.drawBuffers&&N&&wt.drawBuffers(M,G),wt.viewport(y),wt.scissor(V),wt.setScissorTest(k),mt){const Rt=Nt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,H)}else if(St){const Rt=Nt.get(M.texture),Ft=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,H||0,Ft)}F=-1},this.readRenderTargetPixels=function(M,U,H,N,G,mt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(zt=zt[St]),zt){wt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Rt=M.texture,Ft=Rt.format,At=Rt.type;if(Ft!==Ie&&yt.convert(Ft)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=At===Sn&&(Mt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(At!==di&&yt.convert(At)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===oi&&(Lt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-N&&H>=0&&H<=M.height-G&&I.readPixels(U,H,N,G,yt.convert(Ft),yt.convert(At),mt)}finally{const Rt=b!==null?Nt.get(b).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(M,U,H=0){const N=Math.pow(2,-H),G=Math.floor(U.image.width*N),mt=Math.floor(U.image.height*N);Pt.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,M.x,M.y,G,mt),wt.unbindTexture()},this.copyTextureToTexture=function(M,U,H,N=0){const G=U.image.width,mt=U.image.height,St=yt.convert(H.format),zt=yt.convert(H.type);Pt.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,M.x,M.y,G,mt,St,zt,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,M.x,M.y,St,zt,U.image),N===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H,N,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=M.max.x-M.min.x+1,St=M.max.y-M.min.y+1,zt=M.max.z-M.min.z+1,Rt=yt.convert(N.format),Ft=yt.convert(N.type);let At;if(N.isData3DTexture)Pt.setTexture3D(N,0),At=I.TEXTURE_3D;else if(N.isDataArrayTexture)Pt.setTexture2DArray(N,0),At=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ut=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=I.getParameter(I.UNPACK_SKIP_PIXELS),Ae=I.getParameter(I.UNPACK_SKIP_ROWS),Ge=I.getParameter(I.UNPACK_SKIP_IMAGES),Qt=H.isCompressedTexture?H.mipmaps[0]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(At,G,U.x,U.y,U.z,mt,St,zt,Rt,Ft,Qt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(At,G,U.x,U.y,U.z,mt,St,zt,Rt,Qt.data)):I.texSubImage3D(At,G,U.x,U.y,U.z,mt,St,zt,Rt,Ft,Qt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge),G===0&&N.generateMipmaps&&I.generateMipmap(At),wt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Pt.setTextureCube(M,0):M.isData3DTexture?Pt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pt.setTexture2DArray(M,0):Pt.setTexture2D(M,0),wt.unbindTexture()},this.resetState=function(){w=0,L=0,b=null,wt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vr?"display-p3":"srgb",e.unpackColorSpace=kt.workingColorSpace===ha?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ae?Ei:zo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?ae:Qe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Tc extends Xo{}Tc.prototype.isWebGL1Renderer=!0;class vc extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Mc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$e()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let a=0,r=this.stride;a<r;a++)this.array[t+a]=e.array[i+a];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xe=new C;class da{constructor(t,e,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=He(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=He(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=He(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=He(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,e,i,a,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[a+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new da(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yo extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const mn=new C,ji=new C,Ki=new C,$i=new Tt,fn=new Tt,qo=new Kt,$n=new C,pn=new C,Jn=new C,Js=new Tt,Qa=new Tt,Qs=new Tt;class Sc extends ce{constructor(t=new Yo){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mc(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new da(i,3,0,!1)),qi.setAttribute("uv",new da(i,2,3,!1))}this.geometry=qi,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),qo.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const o=this.center;Qn($n.set(-.5,-.5,0),Ki,o,ji,a,r),Qn(pn.set(.5,-.5,0),Ki,o,ji,a,r),Qn(Jn.set(.5,.5,0),Ki,o,ji,a,r),Js.set(0,0),Qa.set(1,0),Qs.set(1,1);let s=t.ray.intersectTriangle($n,pn,Jn,!1,mn);if(s===null&&(Qn(pn.set(-.5,.5,0),Ki,o,ji,a,r),Qa.set(0,1),s=t.ray.intersectTriangle($n,Jn,pn,!1,mn),s===null))return;const l=t.ray.origin.distanceTo(mn);l<t.near||l>t.far||e.push({distance:l,point:mn.clone(),uv:Re.getInterpolation(mn,$n,pn,Jn,Js,Qa,Qs,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qn(n,t,e,i,a,r){$i.subVectors(n,e).addScalar(.5).multiply(i),a!==void 0?(fn.x=r*$i.x-a*$i.y,fn.y=a*$i.x+r*$i.y):fn.copy($i),n.copy(t),n.x+=fn.x,n.y+=fn.y,n.applyMatrix4(qo)}class Ar extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const to=new C,eo=new C,io=new Kt,tr=new Sr,ta=new ma;class jo extends ce{constructor(t=new Le,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,r=e.count;a<r;a++)to.fromBufferAttribute(e,a-1),eo.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=to.distanceTo(eo);t.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(a),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;io.copy(a).invert(),tr.copy(t.ray).applyMatrix4(io);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=new C,d=new C,h=new C,m=new C,p=this.isLineSegments?2:1,_=i.index,f=i.attributes.position;if(_!==null){const c=Math.max(0,o.start),z=Math.min(_.count,o.start+o.count);for(let v=c,E=z-1;v<E;v+=p){const w=_.getX(v),L=_.getX(v+1);if(u.fromBufferAttribute(f,w),d.fromBufferAttribute(f,L),tr.distanceSqToSegment(u,d,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(m);F<t.near||F>t.far||e.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),z=Math.min(f.count,o.start+o.count);for(let v=c,E=z-1;v<E;v+=p){if(u.fromBufferAttribute(f,v),d.fromBufferAttribute(f,v+1),tr.distanceSqToSegment(u,d,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(m);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const no=new C,ao=new C;class Ec extends jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let a=0,r=e.count;a<r;a+=2)no.fromBufferAttribute(e,a),ao.fromBufferAttribute(e,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+no.distanceTo(ao);t.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _a extends Le{constructor(t=1,e=1,i=1,a=32,r=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:l};const u=this;a=Math.floor(a),r=Math.floor(r);const d=[],h=[],m=[],p=[];let _=0;const g=[],f=i/2;let c=0;z(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(m,3)),this.setAttribute("uv",new Te(p,2));function z(){const E=new C,w=new C;let L=0;const b=(e-t)/i;for(let F=0;F<=r;F++){const T=[],y=F/r,V=y*(e-t)+t;for(let k=0;k<=a;k++){const $=k/a,P=$*l+s,O=Math.sin(P),X=Math.cos(P);w.x=V*O,w.y=-y*i+f,w.z=V*X,h.push(w.x,w.y,w.z),E.set(O,b,X).normalize(),m.push(E.x,E.y,E.z),p.push($,1-y),T.push(_++)}g.push(T)}for(let F=0;F<a;F++)for(let T=0;T<r;T++){const y=g[T][F],V=g[T+1][F],k=g[T+1][F+1],$=g[T][F+1];d.push(y,V,$),d.push(V,k,$),L+=6}u.addGroup(c,L,0),c+=L}function v(E){const w=_,L=new Tt,b=new C;let F=0;const T=E===!0?t:e,y=E===!0?1:-1;for(let k=1;k<=a;k++)h.push(0,f*y,0),m.push(0,y,0),p.push(.5,.5),_++;const V=_;for(let k=0;k<=a;k++){const P=k/a*l+s,O=Math.cos(P),X=Math.sin(P);b.x=T*X,b.y=f*y,b.z=T*O,h.push(b.x,b.y,b.z),m.push(0,y,0),L.x=O*.5+.5,L.y=X*.5*y+.5,p.push(L.x,L.y),_++}for(let k=0;k<a;k++){const $=w+k,P=V+k;E===!0?d.push(P,P+1,$):d.push(P+1,P,$),F+=3}u.addGroup(c,F,E===!0?1:2),c+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yc extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ko extends yc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ro={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class bc{constructor(t,e,i){const a=this;let r=!1,o=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){s++,r===!1&&a.onStart!==void 0&&a.onStart(d,o,s),r=!0},this.itemEnd=function(d){o++,a.onProgress!==void 0&&a.onProgress(d,o,s),o===s&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return u.push(d,h),this},this.removeHandler=function(d){const h=u.indexOf(d);return h!==-1&&u.splice(h,2),this},this.getHandler=function(d){for(let h=0,m=u.length;h<m;h+=2){const p=u[h],_=u[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const Ac=new bc;class wr{constructor(t){this.manager=t!==void 0?t:Ac,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,r){i.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";class wc extends wr{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ro.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const s=yn("img");function l(){d(),ro.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(h){d(),a&&a(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class zc extends wr{constructor(t){super(t)}load(t,e,i,a){const r=new Me,o=new wc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},i,a),r}}class $o extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const er=new Kt,so=new C,oo=new C;class Rc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;so.setFromMatrixPosition(t.matrixWorld),e.position.copy(so),oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oo),e.updateMatrixWorld(),er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lo=new Kt,xn=new C,ir=new C;class Cc extends Rc{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,a=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xn.setFromMatrixPosition(t.matrixWorld),i.position.copy(xn),ir.copy(i.position),ir.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ir),i.updateMatrixWorld(),a.makeTranslation(-xn.x,-xn.y,-xn.z),lo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo)}}class Lc extends $o{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pc extends $o{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class uo{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const co=new C;let ea,nr;class Dc extends ce{constructor(t=new C(0,0,1),e=new C(0,0,0),i=1,a=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",ea===void 0&&(ea=new Le,ea.setAttribute("position",new Te([0,0,0,0,1,0],3)),nr=new _a(0,.5,1,5,1),nr.translate(0,-.5,0)),this.position.copy(e),this.line=new jo(ea,new Ar({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ne(nr,new Er({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{co.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(co,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Uc extends Ec{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Le;a.setAttribute("position",new Te(e,3)),a.setAttribute("color",new Te(i,3));const r=new Ar({vertexColors:!0,toneMapped:!1});super(a,r),this.type="AxesHelper"}setColors(t,e,i){const a=new Bt,r=this.geometry.attributes.color.array;return a.set(t),a.toArray(r,0),a.toArray(r,3),a.set(e),a.toArray(r,6),a.toArray(r,9),a.set(i),a.toArray(r,12),a.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);const ho={type:"change"},ar={type:"start"},mo={type:"end"},ia=new Sr,fo=new ri,Ic=Math.cos(70*p0.DEG2RAD);class Nc extends zi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",x),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ho),i.update(),r=a.NONE},this.update=function(){const R=new C,et=new bi().setFromUnitVectors(t.up,new C(0,1,0)),Y=et.clone().invert(),yt=new C,_t=new bi,gt=new C,pt=2*Math.PI;return function(rt=null){const it=i.object.position;R.copy(it).sub(i.target),R.applyQuaternion(et),s.setFromVector3(R),i.autoRotate&&r===a.NONE&&V(T(rt)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let lt=i.minAzimuthAngle,st=i.maxAzimuthAngle;isFinite(lt)&&isFinite(st)&&(lt<-Math.PI?lt+=pt:lt>Math.PI&&(lt-=pt),st<-Math.PI?st+=pt:st>Math.PI&&(st-=pt),lt<=st?s.theta=Math.max(lt,Math.min(st,s.theta)):s.theta=s.theta>(lt+st)/2?Math.max(lt,s.theta):Math.min(st,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&L||i.object.isOrthographicCamera?s.radius=K(s.radius):s.radius=K(s.radius*u),R.setFromSpherical(s),R.applyQuaternion(Y),it.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let j=!1;if(i.zoomToCursor&&L){let ft=null;if(i.object.isPerspectiveCamera){const bt=R.length();ft=K(bt*u);const Jt=bt-ft;i.object.position.addScaledVector(E,Jt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const bt=new C(w.x,w.y,0);bt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),j=!0;const Jt=new C(w.x,w.y,0);Jt.unproject(i.object),i.object.position.sub(Jt).add(bt),i.object.updateMatrixWorld(),ft=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ft!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ft).add(i.object.position):(ia.origin.copy(i.object.position),ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ia.direction))<Ic?t.lookAt(i.target):(fo.setFromNormalAndCoplanarPoint(i.object.up,i.target),ia.intersectPlane(fo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),j=!0);return u=1,L=!1,j||yt.distanceToSquared(i.object.position)>o||8*(1-_t.dot(i.object.quaternion))>o||gt.distanceToSquared(i.target)>0?(i.dispatchEvent(ho),yt.copy(i.object.position),_t.copy(i.object.quaternion),gt.copy(i.target),j=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",Nt),i.domElement.removeEventListener("pointercancel",Gt),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",Pt),i.domElement.removeEventListener("pointerup",Gt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",x),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const o=1e-6,s=new uo,l=new uo;let u=1;const d=new C,h=new Tt,m=new Tt,p=new Tt,_=new Tt,g=new Tt,f=new Tt,c=new Tt,z=new Tt,v=new Tt,E=new C,w=new Tt;let L=!1;const b=[],F={};function T(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function V(R){l.theta-=R}function k(R){l.phi-=R}const $=function(){const R=new C;return function(Y,yt){R.setFromMatrixColumn(yt,0),R.multiplyScalar(-Y),d.add(R)}}(),P=function(){const R=new C;return function(Y,yt){i.screenSpacePanning===!0?R.setFromMatrixColumn(yt,1):(R.setFromMatrixColumn(yt,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Y),d.add(R)}}(),O=function(){const R=new C;return function(Y,yt){const _t=i.domElement;if(i.object.isPerspectiveCamera){const gt=i.object.position;R.copy(gt).sub(i.target);let pt=R.length();pt*=Math.tan(i.object.fov/2*Math.PI/180),$(2*Y*pt/_t.clientHeight,i.object.matrix),P(2*yt*pt/_t.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(Y*(i.object.right-i.object.left)/i.object.zoom/_t.clientWidth,i.object.matrix),P(yt*(i.object.top-i.object.bottom)/i.object.zoom/_t.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function nt(R){if(!i.zoomToCursor)return;L=!0;const et=i.domElement.getBoundingClientRect(),Y=R.clientX-et.left,yt=R.clientY-et.top,_t=et.width,gt=et.height;w.x=Y/_t*2-1,w.y=-(yt/gt)*2+1,E.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function q(R){h.set(R.clientX,R.clientY)}function D(R){nt(R),c.set(R.clientX,R.clientY)}function B(R){_.set(R.clientX,R.clientY)}function ut(R){m.set(R.clientX,R.clientY),p.subVectors(m,h).multiplyScalar(i.rotateSpeed);const et=i.domElement;V(2*Math.PI*p.x/et.clientHeight),k(2*Math.PI*p.y/et.clientHeight),h.copy(m),i.update()}function ct(R){z.set(R.clientX,R.clientY),v.subVectors(z,c),v.y>0?X(y()):v.y<0&&W(y()),c.copy(z),i.update()}function ht(R){g.set(R.clientX,R.clientY),f.subVectors(g,_).multiplyScalar(i.panSpeed),O(f.x,f.y),_.copy(g),i.update()}function Et(R){nt(R),R.deltaY<0?W(y()):R.deltaY>0&&X(y()),i.update()}function Ct(R){let et=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),et=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),et=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),et=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),et=!0;break}et&&(R.preventDefault(),i.update())}function vt(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),et=.5*(b[0].pageY+b[1].pageY);h.set(R,et)}}function Ht(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),et=.5*(b[0].pageY+b[1].pageY);_.set(R,et)}}function ue(){const R=b[0].pageX-b[1].pageX,et=b[0].pageY-b[1].pageY,Y=Math.sqrt(R*R+et*et);c.set(0,Y)}function Dt(){i.enableZoom&&ue(),i.enablePan&&Ht()}function I(){i.enableZoom&&ue(),i.enableRotate&&vt()}function ie(R){if(b.length==1)m.set(R.pageX,R.pageY);else{const Y=dt(R),yt=.5*(R.pageX+Y.x),_t=.5*(R.pageY+Y.y);m.set(yt,_t)}p.subVectors(m,h).multiplyScalar(i.rotateSpeed);const et=i.domElement;V(2*Math.PI*p.x/et.clientHeight),k(2*Math.PI*p.y/et.clientHeight),h.copy(m)}function Mt(R){if(b.length===1)g.set(R.pageX,R.pageY);else{const et=dt(R),Y=.5*(R.pageX+et.x),yt=.5*(R.pageY+et.y);g.set(Y,yt)}f.subVectors(g,_).multiplyScalar(i.panSpeed),O(f.x,f.y),_.copy(g)}function Lt(R){const et=dt(R),Y=R.pageX-et.x,yt=R.pageY-et.y,_t=Math.sqrt(Y*Y+yt*yt);z.set(0,_t),v.set(0,Math.pow(z.y/c.y,i.zoomSpeed)),X(v.y),c.copy(z)}function wt(R){i.enableZoom&&Lt(R),i.enablePan&&Mt(R)}function Wt(R){i.enableZoom&&Lt(R),i.enableRotate&&ie(R)}function Nt(R){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Pt),i.domElement.addEventListener("pointerup",Gt)),tt(R),R.pointerType==="touch"?Z(R):ne(R))}function Pt(R){i.enabled!==!1&&(R.pointerType==="touch"?Q(R):oe(R))}function Gt(R){xt(R),b.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Pt),i.domElement.removeEventListener("pointerup",Gt)),i.dispatchEvent(mo),r=a.NONE}function ne(R){let et;switch(R.button){case 0:et=i.mouseButtons.LEFT;break;case 1:et=i.mouseButtons.MIDDLE;break;case 2:et=i.mouseButtons.RIGHT;break;default:et=-1}switch(et){case Ci.DOLLY:if(i.enableZoom===!1)return;D(R),r=a.DOLLY;break;case Ci.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;B(R),r=a.PAN}else{if(i.enableRotate===!1)return;q(R),r=a.ROTATE}break;case Ci.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;q(R),r=a.ROTATE}else{if(i.enablePan===!1)return;B(R),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&i.dispatchEvent(ar)}function oe(R){switch(r){case a.ROTATE:if(i.enableRotate===!1)return;ut(R);break;case a.DOLLY:if(i.enableZoom===!1)return;ct(R);break;case a.PAN:if(i.enablePan===!1)return;ht(R);break}}function S(R){i.enabled===!1||i.enableZoom===!1||r!==a.NONE||(R.preventDefault(),i.dispatchEvent(ar),Et(R),i.dispatchEvent(mo))}function x(R){i.enabled===!1||i.enablePan===!1||Ct(R)}function Z(R){switch(at(R),b.length){case 1:switch(i.touches.ONE){case Li.ROTATE:if(i.enableRotate===!1)return;vt(),r=a.TOUCH_ROTATE;break;case Li.PAN:if(i.enablePan===!1)return;Ht(),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(i.touches.TWO){case Li.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Dt(),r=a.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&i.dispatchEvent(ar)}function Q(R){switch(at(R),r){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;ie(R),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;Mt(R),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;wt(R),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(R),i.update();break;default:r=a.NONE}}function J(R){i.enabled!==!1&&R.preventDefault()}function tt(R){b.push(R)}function xt(R){delete F[R.pointerId];for(let et=0;et<b.length;et++)if(b[et].pointerId==R.pointerId){b.splice(et,1);return}}function at(R){let et=F[R.pointerId];et===void 0&&(et=new Tt,F[R.pointerId]=et),et.set(R.pageX,R.pageY)}function dt(R){const et=R.pointerId===b[0].pointerId?b[1]:b[0];return F[et.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",Nt),i.domElement.addEventListener("pointercancel",Gt),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}const Zc=function(){const n=new zc;return function(t,e=!1){const i=n.load(t);return e===!1?i.colorSpace=ae:i.colorSpace=e,i}}(),{PI:Fc,sin:Hc,cos:Gc}=Math,_r=Fc/180,Oc=new C(0,0,0);new C(1,0,0);new C(0,1,0);new C(0,0,1);const Je=new vc;Je.add(new Uc(100));Je.add(new Pc(16777215,.5));const ga=new Lc(16777215,10,1e3,1);ga.castShadow=!0;const Jo=new Sc(new Yo({map:Zc("textures/sun.png")}));let rr=1;Jo.scale.set(rr,rr,rr);ga.add(Jo);Je.add(ga);const Ta=new Ne(new pa(100,100),new Ko({color:16777215,side:Be}));Ta.castShadow=!1;Ta.receiveShadow=!0;Ta.rotateX(90*_r);Je.add(Ta);const va=new Ne(new _a(.1,.1,1,32,1,!1),new Ko({color:14596231}));va.castShadow=!0;va.receiveShadow=!0;va.position.y=.5;Je.add(va);const wi=new be(45,window.innerWidth/window.innerHeight,.1,1e3);wi.position.set(7,10,7);Je.add(wi);wi.updateProjectionMatrix();const hi=new Xo({canvas:document.querySelector("#canvas"),logarithmicDepthBuffer:!0,outputColorSpace:ae,antialias:!0,autoClear:!1});hi.setSize(window.innerWidth,window.innerHeight);hi.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1);hi.setClearColor(0,0);hi.shadowMap.enabled=!0;hi.shadowMap.type=_o;const Bc=new Nc(wi,hi.domElement);window.addEventListener("resize",function(){const n=window.innerWidth,t=window.innerHeight;wi.aspect=n/t,wi.updateProjectionMatrix(),hi.setSize(n,t)});let na=0,po=0,sr;function Qo(n){Bc.update(),hi.render(Je,wi);const t=n-po;if(1e3/60<=t){po=n;const e=or[na].altitude,i=or[na].azimuth;na=(na+1)%or.length;const a=new C().setFromSphericalCoords(10,(90-e)*_r,-i*_r);Je.remove(sr),sr=new Dc(a.clone().normalize(),Oc,10,16711935),Je.add(sr),ga.position.copy(a)}requestAnimationFrame(Qo)}requestAnimationFrame(Qo);const or=[{index:0,time:"2024-12-21T00:00:00Z",altitude:35.27234832884122,azimuth:14.46317480775193},{index:1,time:"2024-12-21T00:01:00Z",altitude:35.28535447607304,azimuth:14.182826793657293},{index:2,time:"2024-12-21T00:02:00Z",altitude:35.29811123855383,azimuth:13.902416958632793},{index:3,time:"2024-12-21T00:03:00Z",altitude:35.310618255849484,azimuth:13.621946444246152},{index:4,time:"2024-12-21T00:04:00Z",altitude:35.32287517433951,azimuth:13.341416397042302},{index:5,time:"2024-12-21T00:05:00Z",altitude:35.33488164724098,azimuth:13.060827968464748},{index:6,time:"2024-12-21T00:06:00Z",altitude:35.346637342431194,azimuth:12.78018212655301},{index:7,time:"2024-12-21T00:07:00Z",altitude:35.35814191110934,azimuth:12.499480408606207},{index:8,time:"2024-12-21T00:08:00Z",altitude:35.36939503511397,azimuth:12.218723792032756},{index:9,time:"2024-12-21T00:09:00Z",altitude:35.380396395247175,azimuth:11.937913446937822},{index:10,time:"2024-12-21T00:10:00Z",altitude:35.39114567926418,azimuth:11.657050547848632},{index:11,time:"2024-12-21T00:11:00Z",altitude:35.401642581893825,azimuth:11.376136273645267},{index:12,time:"2024-12-21T00:12:00Z",altitude:35.411886804859655,azimuth:11.095171807476563},{index:13,time:"2024-12-21T00:13:00Z",altitude:35.42187805690097,azimuth:10.814158336654803},{index:14,time:"2024-12-21T00:14:00Z",altitude:35.431616053793405,azimuth:10.5330970525482},{index:15,time:"2024-12-21T00:15:00Z",altitude:35.441100518368316,azimuth:10.251989150500584},{index:16,time:"2024-12-21T00:16:00Z",altitude:35.45033118053159,azimuth:9.970835829751406},{index:17,time:"2024-12-21T00:17:00Z",altitude:35.45930778321724,azimuth:9.68963810474563},{index:18,time:"2024-12-21T00:18:00Z",altitude:35.46803005849874,azimuth:9.408397559303923},{index:19,time:"2024-12-21T00:19:00Z",altitude:35.47649776372321,azimuth:9.127115215169756},{index:20,time:"2024-12-21T00:20:00Z",altitude:35.484710657280075,azimuth:8.845792286147176},{index:21,time:"2024-12-21T00:21:00Z",altitude:35.492668504724094,azimuth:8.564429989408604},{index:22,time:"2024-12-21T00:22:00Z",altitude:35.50037107879024,azimuth:8.28302954545128},{index:23,time:"2024-12-21T00:23:00Z",altitude:35.507818159411,azimuth:8.001592177944378},{index:24,time:"2024-12-21T00:24:00Z",altitude:35.515009533730854,azimuth:7.720119113678465},{index:25,time:"2024-12-21T00:25:00Z",altitude:35.521944996122194,azimuth:7.438611582418654},{index:26,time:"2024-12-21T00:26:00Z",altitude:35.528624348198846,azimuth:7.157070816853239},{index:27,time:"2024-12-21T00:27:00Z",altitude:35.53504739883116,azimuth:6.875498052438569},{index:28,time:"2024-12-21T00:28:00Z",altitude:35.54121396415844,azimuth:6.593894527352302},{index:29,time:"2024-12-21T00:29:00Z",altitude:35.547123871479826,azimuth:6.312261293480861},{index:30,time:"2024-12-21T00:30:00Z",altitude:35.552776943586544,azimuth:6.030599971768476},{index:31,time:"2024-12-21T00:31:00Z",altitude:35.55817302255181,azimuth:5.748911619006159},{index:32,time:"2024-12-21T00:32:00Z",altitude:35.56331195371827,azimuth:5.467197483113858},{index:33,time:"2024-12-21T00:33:00Z",altitude:35.56819358975834,azimuth:5.1854588141742814},{index:34,time:"2024-12-21T00:34:00Z",altitude:35.57281779068454,azimuth:4.903696864343704},{index:35,time:"2024-12-21T00:35:00Z",altitude:35.577184423859144,azimuth:4.6219128877611055},{index:36,time:"2024-12-21T00:36:00Z",altitude:35.581293364003955,azimuth:4.340108140429319},{index:37,time:"2024-12-21T00:37:00Z",altitude:35.58514449320927,azimuth:4.058283880097204},{index:38,time:"2024-12-21T00:38:00Z",altitude:35.588737700942275,azimuth:3.7764413661620333},{index:39,time:"2024-12-21T00:39:00Z",altitude:35.592072884054616,azimuth:3.4945818595859937},{index:40,time:"2024-12-21T00:40:00Z",altitude:35.59514994876684,azimuth:3.2127064337572806},{index:41,time:"2024-12-21T00:41:00Z",altitude:35.59796880259515,azimuth:2.9308167304070776},{index:42,time:"2024-12-21T00:42:00Z",altitude:35.60052936673737,azimuth:2.6489138254950335},{index:43,time:"2024-12-21T00:43:00Z",altitude:35.60283156765246,azimuth:2.366998985103957},{index:44,time:"2024-12-21T00:44:00Z",altitude:35.604875339215816,azimuth:2.08507347631734},{index:45,time:"2024-12-21T00:45:00Z",altitude:35.606660622723886,azimuth:1.8031385671203366},{index:46,time:"2024-12-21T00:46:00Z",altitude:35.60818736689815,azimuth:1.5211955263145336},{index:47,time:"2024-12-21T00:47:00Z",altitude:35.60945552788918,azimuth:1.2392456233907712},{index:48,time:"2024-12-21T00:48:00Z",altitude:35.61046506927957,azimuth:.9572901284091564},{index:49,time:"2024-12-21T00:49:00Z",altitude:35.611215962086575,azimuth:.6753303119049309},{index:50,time:"2024-12-21T00:50:00Z",altitude:35.6117081847642,azimuth:.39336744479433217},{index:51,time:"2024-12-21T00:51:00Z",altitude:35.611941723274604,azimuth:.11140260918608838},{index:52,time:"2024-12-21T00:52:00Z",altitude:35.611916570636225,azimuth:359.8294374545199},{index:53,time:"2024-12-21T00:53:00Z",altitude:35.611632727863764,azimuth:359.5474730630995},{index:54,time:"2024-12-21T00:54:00Z",altitude:35.61109020316842,azimuth:359.2655107062299},{index:55,time:"2024-12-21T00:55:00Z",altitude:35.61028901220047,azimuth:358.9835516550293},{index:56,time:"2024-12-21T00:56:00Z",altitude:35.60922917804816,azimuth:358.7015971803347},{index:57,time:"2024-12-21T00:57:00Z",altitude:35.60791073123622,azimuth:358.41964855260807},{index:58,time:"2024-12-21T00:58:00Z",altitude:35.606333709723586,azimuth:358.1377070418158},{index:59,time:"2024-12-21T00:59:00Z",altitude:35.60449815890052,azimuth:357.8557739173016},{index:60,time:"2024-12-21T01:00:00Z",altitude:35.602404131585494,azimuth:357.57385044770103},{index:61,time:"2024-12-21T01:01:00Z",altitude:35.600051688021544,azimuth:357.2919379008416},{index:62,time:"2024-12-21T01:02:00Z",altitude:35.59744089403449,azimuth:357.01003735459665},{index:63,time:"2024-12-21T01:03:00Z",altitude:35.59457182820411,azimuth:356.7281504528819},{index:64,time:"2024-12-21T01:04:00Z",altitude:35.59144457135439,azimuth:356.4462782713712},{index:65,time:"2024-12-21T01:05:00Z",altitude:35.588059213377825,azimuth:356.1644220735479},{index:66,time:"2024-12-21T01:06:00Z",altitude:35.584415851563904,azimuth:355.8825831215076},{index:67,time:"2024-12-21T01:07:00Z",altitude:35.580514590593346,azimuth:355.60076267591637},{index:68,time:"2024-12-21T01:08:00Z",altitude:35.576355542529406,azimuth:355.3189619958425},{index:69,time:"2024-12-21T01:09:00Z",altitude:35.57193882681105,azimuth:355.0371823387084},{index:70,time:"2024-12-21T01:10:00Z",altitude:35.56726457024329,azimuth:354.7554249601288},{index:71,time:"2024-12-21T01:11:00Z",altitude:35.56233290698927,azimuth:354.4736911138611},{index:72,time:"2024-12-21T01:12:00Z",altitude:35.557143978559594,azimuth:354.191982051645},{index:73,time:"2024-12-21T01:13:00Z",altitude:35.55169793380339,azimuth:353.91029902315495},{index:74,time:"2024-12-21T01:14:00Z",altitude:35.545994924986346,azimuth:353.6286430869826},{index:75,time:"2024-12-21T01:15:00Z",altitude:35.5400351232493,azimuth:353.3470158660158},{index:76,time:"2024-12-21T01:16:00Z",altitude:35.533818695651355,azimuth:353.0654184141352},{index:77,time:"2024-12-21T01:17:00Z",altitude:35.52734582028237,azimuth:352.7838519715887},{index:78,time:"2024-12-21T01:18:00Z",altitude:35.52061668251172,azimuth:352.5023177759988},{index:79,time:"2024-12-21T01:19:00Z",altitude:35.51363147497555,azimuth:352.2208170622746},{index:80,time:"2024-12-21T01:20:00Z",altitude:35.50639039756344,azimuth:351.93935106251877},{index:81,time:"2024-12-21T01:21:00Z",altitude:35.49889365740419,azimuth:351.657921005921},{index:82,time:"2024-12-21T01:22:00Z",altitude:35.49114146885054,azimuth:351.3765281186376},{index:83,time:"2024-12-21T01:23:00Z",altitude:35.483134053464575,azimuth:351.0951736237064},{index:84,time:"2024-12-21T01:24:00Z",altitude:35.47487164000242,azimuth:350.8138587409612},{index:85,time:"2024-12-21T01:25:00Z",altitude:35.466354458601536,azimuth:350.5325844983276},{index:86,time:"2024-12-21T01:26:00Z",altitude:35.45758276377851,azimuth:350.25135248609746},{index:87,time:"2024-12-21T01:27:00Z",altitude:35.448556800146505,azimuth:349.97016372523603},{index:88,time:"2024-12-21T01:28:00Z",altitude:35.439276825071,azimuth:349.68901942172045},{index:89,time:"2024-12-21T01:29:00Z",altitude:35.42974310302551,azimuth:349.40792077780475},{index:90,time:"2024-12-21T01:30:00Z",altitude:35.41995590557351,azimuth:349.1268689919385},{index:91,time:"2024-12-21T01:31:00Z",altitude:35.409915511350135,azimuth:348.8458652586856},{index:92,time:"2024-12-21T01:32:00Z",altitude:35.39962220604221,azimuth:348.56491076861545},{index:93,time:"2024-12-21T01:33:00Z",altitude:35.38907628236794,azimuth:348.2840067081962},{index:94,time:"2024-12-21T01:34:00Z",altitude:35.37827804005689,azimuth:348.00315425970973},{index:95,time:"2024-12-21T01:35:00Z",altitude:35.36722778583017,azimuth:347.72235460118054},{index:96,time:"2024-12-21T01:36:00Z",altitude:35.3559258257156,azimuth:347.44160871803274},{index:97,time:"2024-12-21T01:37:00Z",altitude:35.34437249550784,azimuth:347.1609181559454},{index:98,time:"2024-12-21T01:38:00Z",altitude:35.332568115277134,azimuth:346.8802838912986},{index:99,time:"2024-12-21T01:39:00Z",altitude:35.32051301949111,azimuth:346.5997070841019},{index:100,time:"2024-12-21T01:40:00Z",altitude:35.30820754949725,azimuth:346.3191888896252},{index:101,time:"2024-12-21T01:41:00Z",altitude:35.29565205349961,azimuth:346.03873045831745},{index:102,time:"2024-12-21T01:42:00Z",altitude:35.28284688653635,azimuth:345.7583329357421},{index:103,time:"2024-12-21T01:43:00Z",altitude:35.26979241045437,azimuth:345.4779974624708},{index:104,time:"2024-12-21T01:44:00Z",altitude:35.256488993884226,azimuth:345.1977251739851},{index:105,time:"2024-12-21T01:45:00Z",altitude:35.242937012215585,azimuth:344.91751720060535},{index:106,time:"2024-12-21T01:46:00Z",altitude:35.22913684757256,azimuth:344.63737466742015},{index:107,time:"2024-12-21T01:47:00Z",altitude:35.2150888792842,azimuth:344.35729850640496},{index:108,time:"2024-12-21T01:48:00Z",altitude:35.20079352170358,azimuth:344.0772902075094},{index:109,time:"2024-12-21T01:49:00Z",altitude:35.18625116766162,azimuth:343.7973506917461},{index:110,time:"2024-12-21T01:50:00Z",altitude:35.17146222595517,azimuth:343.5174810624043},{index:111,time:"2024-12-21T01:51:00Z",altitude:35.156427111980165,azimuth:343.23768241709286},{index:112,time:"2024-12-21T01:52:00Z",altitude:35.14114624770672,azimuth:342.95795584771554},{index:113,time:"2024-12-21T01:53:00Z",altitude:35.12562006164801,azimuth:342.67830244033917},{index:114,time:"2024-12-21T01:54:00Z",altitude:35.10984898883483,azimuth:342.398723275172},{index:115,time:"2024-12-21T01:55:00Z",altitude:35.093833470783245,azimuth:342.1192194264277},{index:116,time:"2024-12-21T01:56:00Z",altitude:35.07757395546914,azimuth:341.83979196231337},{index:117,time:"2024-12-21T01:57:00Z",altitude:35.06107089729487,azimuth:341.560441944895},{index:118,time:"2024-12-21T01:58:00Z",altitude:35.04432475706278,azimuth:341.28117043008035},{index:119,time:"2024-12-21T01:59:00Z",altitude:35.02733599046875,azimuth:341.00197828031037},{index:120,time:"2024-12-21T02:00:00Z",altitude:35.01010509380365,azimuth:340.7228669133173},{index:121,time:"2024-12-21T02:01:00Z",altitude:34.99263253557061,azimuth:340.44383717877537},{index:122,time:"2024-12-21T02:02:00Z",altitude:34.9749188018585,azimuth:340.16489010712826},{index:123,time:"2024-12-21T02:03:00Z",altitude:34.956964384999104,azimuth:339.88602672227387},{index:124,time:"2024-12-21T02:04:00Z",altitude:34.93876978353575,azimuth:339.60724804150453},{index:125,time:"2024-12-21T02:05:00Z",altitude:34.920335502192046,azimuth:339.3285550754567},{index:126,time:"2024-12-21T02:06:00Z",altitude:34.901662051838585,azimuth:339.0499488280311},{index:127,time:"2024-12-21T02:07:00Z",altitude:34.88274994945904,azimuth:338.771430296316},{index:128,time:"2024-12-21T02:08:00Z",altitude:34.86359971811798,azimuth:338.4930004705369},{index:129,time:"2024-12-21T02:09:00Z",altitude:34.844211886928605,azimuth:338.2146603340104},{index:130,time:"2024-12-21T02:10:00Z",altitude:34.82458697777913,azimuth:337.9364106765167},{index:131,time:"2024-12-21T02:11:00Z",altitude:34.80472555809365,azimuth:337.6582528404755},{index:132,time:"2024-12-21T02:12:00Z",altitude:34.78462816184494,azimuth:337.38018760145934},{index:133,time:"2024-12-21T02:13:00Z",altitude:34.76429534199656,azimuth:337.10221591448664},{index:134,time:"2024-12-21T02:14:00Z",altitude:34.7437276573875,azimuth:336.8243387273432},{index:135,time:"2024-12-21T02:15:00Z",altitude:34.72292567269823,azimuth:336.5465569805421},{index:136,time:"2024-12-21T02:16:00Z",altitude:34.70188995841597,azimuth:336.2688716072768},{index:137,time:"2024-12-21T02:17:00Z",altitude:34.680621090798965,azimuth:335.9912835333627},{index:138,time:"2024-12-21T02:18:00Z",altitude:34.65911965183906,azimuth:335.7137936771656},{index:139,time:"2024-12-21T02:19:00Z",altitude:34.637386229227054,azimuth:335.436402949565},{index:140,time:"2024-12-21T02:20:00Z",altitude:34.61542141631746,azimuth:335.15911225391784},{index:141,time:"2024-12-21T02:21:00Z",altitude:34.59322579713085,azimuth:334.8819223001636},{index:142,time:"2024-12-21T02:22:00Z",altitude:34.57080000600248,azimuth:334.6048343481544},{index:143,time:"2024-12-21T02:23:00Z",altitude:34.548144638249724,azimuth:334.327849092445},{index:144,time:"2024-12-21T02:24:00Z",altitude:34.525260309511744,azimuth:334.05096740576863},{index:145,time:"2024-12-21T02:25:00Z",altitude:34.50214764090502,azimuth:333.7741901530724},{index:146,time:"2024-12-21T02:26:00Z",altitude:34.47880725898707,azimuth:333.4975181914892},{index:147,time:"2024-12-21T02:27:00Z",altitude:34.45523979572008,azimuth:333.2209523703082},{index:148,time:"2024-12-21T02:28:00Z",altitude:34.43144588843197,azimuth:332.94449353092045},{index:149,time:"2024-12-21T02:29:00Z",altitude:34.40742617977731,azimuth:332.6681425067657},{index:150,time:"2024-12-21T02:30:00Z",altitude:34.38318131769991,azimuth:332.3919001233019},{index:151,time:"2024-12-21T02:31:00Z",altitude:34.35871195539641,azimuth:332.1157671979887},{index:152,time:"2024-12-21T02:32:00Z",altitude:34.334018734643,azimuth:331.83974435517797},{index:153,time:"2024-12-21T02:33:00Z",altitude:34.30910235213913,azimuth:331.5638327663537},{index:154,time:"2024-12-21T02:34:00Z",altitude:34.28396346011937,azimuth:331.28803303956715},{index:155,time:"2024-12-21T02:35:00Z",altitude:34.25860273240007,azimuth:331.0123459598605},{index:156,time:"2024-12-21T02:36:00Z",altitude:34.23302084785285,azimuth:330.73677230405997},{index:157,time:"2024-12-21T02:37:00Z",altitude:34.207218490369875,azimuth:330.4613128407932},{index:158,time:"2024-12-21T02:38:00Z",altitude:34.18119634882027,azimuth:330.1859683304131},{index:159,time:"2024-12-21T02:39:00Z",altitude:34.15495511701539,azimuth:329.9107395250173},{index:160,time:"2024-12-21T02:40:00Z",altitude:34.12849549366426,azimuth:329.6356271683667},{index:161,time:"2024-12-21T02:41:00Z",altitude:34.10181818233912,azimuth:329.3606319959131},{index:162,time:"2024-12-21T02:42:00Z",altitude:34.074923891430565,azimuth:329.08575473471876},{index:163,time:"2024-12-21T02:43:00Z",altitude:34.047813334112945,azimuth:328.8109961034853},{index:164,time:"2024-12-21T02:44:00Z",altitude:34.020487209904,azimuth:328.5363566283619},{index:165,time:"2024-12-21T02:45:00Z",altitude:33.99294627806635,azimuth:328.2618373795077},{index:166,time:"2024-12-21T02:46:00Z",altitude:33.96519124762581,azimuth:327.98743886611555},{index:167,time:"2024-12-21T02:47:00Z",altitude:33.9372228504808,azimuth:327.71316177310257},{index:168,time:"2024-12-21T02:48:00Z",altitude:33.909041823109185,azimuth:327.4390067768772},{index:169,time:"2024-12-21T02:49:00Z",altitude:33.88064890652937,azimuth:327.1649745453328},{index:170,time:"2024-12-21T02:50:00Z",altitude:33.85204484626161,azimuth:326.89106573784636},{index:171,time:"2024-12-21T02:51:00Z",altitude:33.82323039228556,azimuth:326.61728100524164},{index:172,time:"2024-12-21T02:52:00Z",altitude:33.7942062989993,azimuth:326.3436209897701},{index:173,time:"2024-12-21T02:53:00Z",altitude:33.76497332517976,azimuth:326.0700863251035},{index:174,time:"2024-12-21T02:54:00Z",altitude:33.73553223394386,azimuth:325.796677636336},{index:175,time:"2024-12-21T02:55:00Z",altitude:33.70588377275658,azimuth:325.52339535675486},{index:176,time:"2024-12-21T02:56:00Z",altitude:33.67602875304912,azimuth:325.2502404607084},{index:177,time:"2024-12-21T02:57:00Z",altitude:33.6459679308996,azimuth:324.97721336416066},{index:178,time:"2024-12-21T02:58:00Z",altitude:33.6157020863728,azimuth:324.70431465772623},{index:179,time:"2024-12-21T02:59:00Z",altitude:33.585232003668104,azimuth:324.43154492336805},{index:180,time:"2024-12-21T03:00:00Z",altitude:33.55455847107954,azimuth:324.1589047343988},{index:181,time:"2024-12-21T03:01:00Z",altitude:33.52368228095699,azimuth:323.8863946554888},{index:182,time:"2024-12-21T03:02:00Z",altitude:33.4926042296641,azimuth:323.6140152426481},{index:183,time:"2024-12-21T03:03:00Z",altitude:33.46132511753593,azimuth:323.34176704320834},{index:184,time:"2024-12-21T03:04:00Z",altitude:33.42984574883997,azimuth:323.0696505958334},{index:185,time:"2024-12-21T03:05:00Z",altitude:33.39816693173733,azimuth:322.79766643053176},{index:186,time:"2024-12-21T03:06:00Z",altitude:33.366289456798484,azimuth:322.52581488639413},{index:187,time:"2024-12-21T03:07:00Z",altitude:33.334214182594664,azimuth:322.2540968406395},{index:188,time:"2024-12-21T03:08:00Z",altitude:33.30194190741055,azimuth:321.98251261492925},{index:189,time:"2024-12-21T03:09:00Z",altitude:33.26947345456906,azimuth:321.71106270458677},{index:190,time:"2024-12-21T03:10:00Z",altitude:33.236809651080755,azimuth:321.4397475962551},{index:191,time:"2024-12-21T03:11:00Z",altitude:33.20395132760534,azimuth:321.16856776791514},{index:192,time:"2024-12-21T03:12:00Z",altitude:33.17089931841207,azimuth:320.8975236888977},{index:193,time:"2024-12-21T03:13:00Z",altitude:33.13765446133905,azimuth:320.626615819884},{index:194,time:"2024-12-21T03:14:00Z",altitude:33.10421759775047,azimuth:320.35584461289284},{index:195,time:"2024-12-21T03:15:00Z",altitude:33.07058957249836,azimuth:320.0852105113024},{index:196,time:"2024-12-21T03:16:00Z",altitude:33.036771233884096,azimuth:319.8147139498715},{index:197,time:"2024-12-21T03:17:00Z",altitude:33.00276341074894,azimuth:319.5443551734891},{index:198,time:"2024-12-21T03:18:00Z",altitude:32.96856700377724,azimuth:319.27413496224904},{index:199,time:"2024-12-21T03:19:00Z",altitude:32.93418284863035,azimuth:319.00405354371395},{index:200,time:"2024-12-21T03:20:00Z",altitude:32.89961180700159,azimuth:318.73411131821706},{index:201,time:"2024-12-21T03:21:00Z",altitude:32.86485474382886,azimuth:318.4643086774838},{index:202,time:"2024-12-21T03:22:00Z",altitude:32.82991252726192,azimuth:318.19464600469934},{index:203,time:"2024-12-21T03:23:00Z",altitude:32.79478602861609,azimuth:317.92512367446943},{index:204,time:"2024-12-21T03:24:00Z",altitude:32.759476122339585,azimuth:317.65574205288834},{index:205,time:"2024-12-21T03:25:00Z",altitude:32.72398368596724,azimuth:317.3865014975012},{index:206,time:"2024-12-21T03:26:00Z",altitude:32.688309600088445,azimuth:317.11740235737466},{index:207,time:"2024-12-21T03:27:00Z",altitude:32.65245474830005,azimuth:316.84844497305596},{index:208,time:"2024-12-21T03:28:00Z",altitude:32.61642001717575,azimuth:316.57962967665156},{index:209,time:"2024-12-21T03:29:00Z",altitude:32.58020627187657,azimuth:316.31095661167996},{index:210,time:"2024-12-21T03:30:00Z",altitude:32.54381445336937,azimuth:316.04242645366503},{index:211,time:"2024-12-21T03:31:00Z",altitude:32.50724543268765,azimuth:315.77403932919697},{index:212,time:"2024-12-21T03:32:00Z",altitude:32.470500107906304,azimuth:315.50579553668535},{index:213,time:"2024-12-21T03:33:00Z",altitude:32.43357937987687,azimuth:315.23769536615185},{index:214,time:"2024-12-21T03:34:00Z",altitude:32.39648415219218,azimuth:314.9697390992748},{index:215,time:"2024-12-21T03:35:00Z",altitude:32.35921533114929,azimuth:314.7019270094191},{index:216,time:"2024-12-21T03:36:00Z",altitude:32.32177382570957,azimuth:314.4342593616489},{index:217,time:"2024-12-21T03:37:00Z",altitude:32.284160547459216,azimuth:314.16673641273866},{index:218,time:"2024-12-21T03:38:00Z",altitude:32.246376410573,azimuth:313.89935841121144},{index:219,time:"2024-12-21T03:39:00Z",altitude:32.20842233177871,azimuth:313.63212559737815},{index:220,time:"2024-12-21T03:40:00Z",altitude:32.17029920469844,azimuth:313.3650380243085},{index:221,time:"2024-12-21T03:41:00Z",altitude:32.13200800217296,azimuth:313.0980962741048},{index:222,time:"2024-12-21T03:42:00Z",altitude:32.09354962285258,azimuth:312.83130038342335},{index:223,time:"2024-12-21T03:43:00Z",altitude:32.054924993295735,azimuth:312.5646505599448},{index:224,time:"2024-12-21T03:44:00Z",altitude:32.016135042424104,azimuth:312.2981470032501},{index:225,time:"2024-12-21T03:45:00Z",altitude:31.977180701487526,azimuth:312.0317899048636},{index:226,time:"2024-12-21T03:46:00Z",altitude:31.93806290402976,azimuth:311.76557944829744},{index:227,time:"2024-12-21T03:47:00Z",altitude:31.89878258584924,azimuth:311.4995158090643},{index:228,time:"2024-12-21T03:48:00Z",altitude:31.859340684962106,azimuth:311.2335991547035},{index:229,time:"2024-12-21T03:49:00Z",altitude:31.81973814156724,azimuth:310.9678296448213},{index:230,time:"2024-12-21T03:50:00Z",altitude:31.779975898012534,azimuth:310.7022074311371},{index:231,time:"2024-12-21T03:51:00Z",altitude:31.740054871935673,azimuth:310.436732479543},{index:232,time:"2024-12-21T03:52:00Z",altitude:31.699976063406165,azimuth:310.17140528206215},{index:233,time:"2024-12-21T03:53:00Z",altitude:31.659740394284107,azimuth:309.9062257888579},{index:234,time:"2024-12-21T03:54:00Z",altitude:31.61934881514941,azimuth:309.6411941203865},{index:235,time:"2024-12-21T03:55:00Z",altitude:31.578802278550786,azimuth:309.37631038936684},{index:236,time:"2024-12-21T03:56:00Z",altitude:31.53810173897188,azimuth:309.11157470082424},{index:237,time:"2024-12-21T03:57:00Z",altitude:31.497248152798903,azimuth:308.84698715214046},{index:238,time:"2024-12-21T03:58:00Z",altitude:31.456242478284125,azimuth:308.58254783307825},{index:239,time:"2024-12-21T03:59:00Z",altitude:31.415085675509573,azimuth:308.318256825805},{index:240,time:"2024-12-21T04:00:00Z",altitude:31.373778706354788,azimuth:308.05411420494374},{index:241,time:"2024-12-21T04:01:00Z",altitude:31.33232253446541,azimuth:307.79012003762546},{index:242,time:"2024-12-21T04:02:00Z",altitude:31.29071809726847,azimuth:307.5262742066346},{index:243,time:"2024-12-21T04:03:00Z",altitude:31.24896641763112,azimuth:307.26257711804294},{index:244,time:"2024-12-21T04:04:00Z",altitude:31.20706843643742,azimuth:306.9990286397072},{index:245,time:"2024-12-21T04:05:00Z",altitude:31.16502512405311,azimuth:306.73562880912925},{index:246,time:"2024-12-21T04:06:00Z",altitude:31.122837452436823,azimuth:306.4723776564761},{index:247,time:"2024-12-21T04:07:00Z",altitude:31.08050639511575,azimuth:306.20927520467404},{index:248,time:"2024-12-21T04:08:00Z",altitude:31.038032927143895,azimuth:305.94632146939233},{index:249,time:"2024-12-21T04:09:00Z",altitude:30.99541802507935,azimuth:305.6835164591444},{index:250,time:"2024-12-21T04:10:00Z",altitude:30.952662666942945,azimuth:305.42086017527333},{index:251,time:"2024-12-21T04:11:00Z",altitude:30.909767832194845,azimuth:305.1583526120461},{index:252,time:"2024-12-21T04:12:00Z",altitude:30.86673450169445,azimuth:304.89599375664545},{index:253,time:"2024-12-21T04:13:00Z",altitude:30.823563657677166,azimuth:304.6337835892637},{index:254,time:"2024-12-21T04:14:00Z",altitude:30.78025625463014,azimuth:304.3717219074239},{index:255,time:"2024-12-21T04:15:00Z",altitude:30.736813335516175,azimuth:304.10980902885194},{index:256,time:"2024-12-21T04:16:00Z",altitude:30.693235857503552,azimuth:303.8480447371697},{index:257,time:"2024-12-21T04:17:00Z",altitude:30.64952480800266,azimuth:303.58642898493537},{index:258,time:"2024-12-21T04:18:00Z",altitude:30.60568117563884,azimuth:303.32496171789757},{index:259,time:"2024-12-21T04:19:00Z",altitude:30.56170595022438,azimuth:303.0636428750536},{index:260,time:"2024-12-21T04:20:00Z",altitude:30.517600122730432,azimuth:302.8024723887067},{index:261,time:"2024-12-21T04:21:00Z",altitude:30.47336468525508,azimuth:302.54145018449924},{index:262,time:"2024-12-21T04:22:00Z",altitude:30.42900063099159,azimuth:302.2805761814461},{index:263,time:"2024-12-21T04:23:00Z",altitude:30.384508954200207,azimuth:302.0198502919887},{index:264,time:"2024-12-21T04:24:00Z",altitude:30.33989065018258,azimuth:301.7592724220617},{index:265,time:"2024-12-21T04:25:00Z",altitude:30.295146685205072,azimuth:301.4988422965425},{index:266,time:"2024-12-21T04:26:00Z",altitude:30.25027811656127,azimuth:301.23856015769337},{index:267,time:"2024-12-21T04:27:00Z",altitude:30.205285912533924,azimuth:300.97842571747816},{index:268,time:"2024-12-21T04:28:00Z",altitude:30.160171072290012,azimuth:300.71843885620285},{index:269,time:"2024-12-21T04:29:00Z",altitude:30.114934595888982,azimuth:300.4585994478671},{index:270,time:"2024-12-21T04:30:00Z",altitude:30.069577484258204,azimuth:300.1989073602326},{index:271,time:"2024-12-21T04:31:00Z",altitude:30.024100739166588,azimuth:299.9393624548777},{index:272,time:"2024-12-21T04:32:00Z",altitude:29.978505363195072,azimuth:299.679964587234},{index:273,time:"2024-12-21T04:33:00Z",altitude:29.93279235970692,azimuth:299.420713606622},{index:274,time:"2024-12-21T04:34:00Z",altitude:29.886962732822873,azimuth:299.1616093563112},{index:275,time:"2024-12-21T04:35:00Z",altitude:29.841017487396456,azimuth:298.9026516735819},{index:276,time:"2024-12-21T04:36:00Z",altitude:29.794957598062258,azimuth:298.6438402162679},{index:277,time:"2024-12-21T04:37:00Z",altitude:29.748784132821417,azimuth:298.3851751568539},{index:278,time:"2024-12-21T04:38:00Z",altitude:29.702498067713314,azimuth:298.1266561413141},{index:279,time:"2024-12-21T04:39:00Z",altitude:29.656100410248715,azimuth:297.8682829834054},{index:280,time:"2024-12-21T04:40:00Z",altitude:29.60959216853512,azimuth:297.6100554911133},{index:281,time:"2024-12-21T04:41:00Z",altitude:29.562974351253487,azimuth:297.3519734667141},{index:282,time:"2024-12-21T04:42:00Z",altitude:29.51624796763507,azimuth:297.0940367068361},{index:283,time:"2024-12-21T04:43:00Z",altitude:29.469414027434098,azimuth:296.8362450024981},{index:284,time:"2024-12-21T04:44:00Z",altitude:29.422473540899524,azimuth:296.5785981391403},{index:285,time:"2024-12-21T04:45:00Z",altitude:29.375427518753924,azimuth:296.3210958966955},{index:286,time:"2024-12-21T04:46:00Z",altitude:29.3282769721703,azimuth:296.0637380496446},{index:287,time:"2024-12-21T04:47:00Z",altitude:29.2810228810243,azimuth:295.80652419462626},{index:288,time:"2024-12-21T04:48:00Z",altitude:29.23366632068438,azimuth:295.54945444028823},{index:289,time:"2024-12-21T04:49:00Z",altitude:29.18620827186868,azimuth:295.29252837248475},{index:290,time:"2024-12-21T04:50:00Z",altitude:29.138649747302317,azimuth:295.0357457443474},{index:291,time:"2024-12-21T04:51:00Z",altitude:29.090991760034886,azimuth:294.7791063037729},{index:292,time:"2024-12-21T04:52:00Z",altitude:29.04323532342545,azimuth:294.52260979351774},{index:293,time:"2024-12-21T04:53:00Z",altitude:28.995381451110397,azimuth:294.26625595119975},{index:294,time:"2024-12-21T04:54:00Z",altitude:28.947431156989737,azimuth:294.0100445093976},{index:295,time:"2024-12-21T04:55:00Z",altitude:28.89938545519502,azimuth:293.7539751956512},{index:296,time:"2024-12-21T04:56:00Z",altitude:28.851245360076252,azimuth:293.49804773256153},{index:297,time:"2024-12-21T04:57:00Z",altitude:28.803011886170303,azimuth:293.2422618377921},{index:298,time:"2024-12-21T04:58:00Z",altitude:28.754686048187274,azimuth:292.98661722416364},{index:299,time:"2024-12-21T04:59:00Z",altitude:28.70626882848466,azimuth:292.73111342838433},{index:300,time:"2024-12-21T05:00:00Z",altitude:28.65776130697645,azimuth:292.4757504963431},{index:301,time:"2024-12-21T05:01:00Z",altitude:28.60916446631278,azimuth:292.2205279551873},{index:302,time:"2024-12-21T05:02:00Z",altitude:28.560479321662818,azimuth:291.96544549877905},{index:303,time:"2024-12-21T05:03:00Z",altitude:28.51170688825505,azimuth:291.7105028163552},{index:304,time:"2024-12-21T05:04:00Z",altitude:28.46284818135798,azimuth:291.45569959258506},{index:305,time:"2024-12-21T05:05:00Z",altitude:28.4139042162631,azimuth:291.20103550764026},{index:306,time:"2024-12-21T05:06:00Z",altitude:28.364876008261103,azimuth:290.94651023722724},{index:307,time:"2024-12-21T05:07:00Z",altitude:28.315764572619184,azimuth:290.6921234526255},{index:308,time:"2024-12-21T05:08:00Z",altitude:28.2665709245635,azimuth:290.4378748207504},{index:309,time:"2024-12-21T05:09:00Z",altitude:28.21729607926147,azimuth:290.1837640042148},{index:310,time:"2024-12-21T05:10:00Z",altitude:28.167941018678796,azimuth:289.92979049111534},{index:311,time:"2024-12-21T05:11:00Z",altitude:28.118506823986834,azimuth:289.67595427616044},{index:312,time:"2024-12-21T05:12:00Z",altitude:28.068994476984418,azimuth:289.42225483897346},{index:313,time:"2024-12-21T05:13:00Z",altitude:28.01940499239869,azimuth:289.16869182540455},{index:314,time:"2024-12-21T05:14:00Z",altitude:27.96973938479629,azimuth:288.91526487722456},{index:315,time:"2024-12-21T05:15:00Z",altitude:27.91999866856693,azimuth:288.6619736321868},{index:316,time:"2024-12-21T05:16:00Z",altitude:27.870183857907158,azimuth:288.40881772408835},{index:317,time:"2024-12-21T05:17:00Z",altitude:27.8202959667995,azimuth:288.1557967828072},{index:318,time:"2024-12-21T05:18:00Z",altitude:27.77033600899192,azimuth:287.90291043433996},{index:319,time:"2024-12-21T05:19:00Z",altitude:27.720304997981202,azimuth:287.6501583008579},{index:320,time:"2024-12-21T05:20:00Z",altitude:27.670203946998956,azimuth:287.3975400007765},{index:321,time:"2024-12-21T05:21:00Z",altitude:27.620033835326623,azimuth:287.14505497953},{index:322,time:"2024-12-21T05:22:00Z",altitude:27.569795742884416,azimuth:286.8927031867163},{index:323,time:"2024-12-21T05:23:00Z",altitude:27.519490648374955,azimuth:286.64048406037904},{index:324,time:"2024-12-21T05:24:00Z",altitude:27.46911956378065,azimuth:286.38839720433003},{index:325,time:"2024-12-21T05:25:00Z",altitude:27.4186835007253,azimuth:286.1364422188356},{index:326,time:"2024-12-21T05:26:00Z",altitude:27.368183470461254,azimuth:285.8846187006841},{index:327,time:"2024-12-21T05:27:00Z",altitude:27.3176204838541,azimuth:285.63292624324146},{index:328,time:"2024-12-21T05:28:00Z",altitude:27.26699555136402,azimuth:285.38136443648807},{index:329,time:"2024-12-21T05:29:00Z",altitude:27.216309683026758,azimuth:285.12993286705404},{index:330,time:"2024-12-21T05:30:00Z",altitude:27.165563888440072,azimuth:284.8786311182794},{index:331,time:"2024-12-21T05:31:00Z",altitude:27.114759176750088,azimuth:284.6274587702739},{index:332,time:"2024-12-21T05:32:00Z",altitude:27.063896522507463,azimuth:284.37641523165604},{index:333,time:"2024-12-21T05:33:00Z",altitude:27.01297700211335,azimuth:284.12550041285766},{index:334,time:"2024-12-21T05:34:00Z",altitude:26.962001589167464,azimuth:283.8747137161496},{index:335,time:"2024-12-21T05:35:00Z",altitude:26.910971290843655,azimuth:283.62405470914916},{index:336,time:"2024-12-21T05:36:00Z",altitude:26.85988711377895,azimuth:283.37352295644234},{index:337,time:"2024-12-21T05:37:00Z",altitude:26.808750064068352,azimuth:283.1231180196783},{index:338,time:"2024-12-21T05:38:00Z",altitude:26.757561147240043,azimuth:282.87283945756803},{index:339,time:"2024-12-21T05:39:00Z",altitude:26.706321368250872,azimuth:282.62268682598005},{index:340,time:"2024-12-21T05:40:00Z",altitude:26.655031731460575,azimuth:282.372659677933},{index:341,time:"2024-12-21T05:41:00Z",altitude:26.603693240629003,azimuth:282.1227575636979},{index:342,time:"2024-12-21T05:42:00Z",altitude:26.552306898890677,azimuth:281.87298003079013},{index:343,time:"2024-12-21T05:43:00Z",altitude:26.500873708750937,azimuth:281.6233266240649},{index:344,time:"2024-12-21T05:44:00Z",altitude:26.449394637528137,azimuth:281.37379671843655},{index:345,time:"2024-12-21T05:45:00Z",altitude:26.397870755454104,azimuth:281.12439018816093},{index:346,time:"2024-12-21T05:46:00Z",altitude:26.346303028541623,azimuth:280.875106402937},{index:347,time:"2024-12-21T05:47:00Z",altitude:26.294692456619487,azimuth:280.62594489733027},{index:348,time:"2024-12-21T05:48:00Z",altitude:26.243040038810815,azimuth:280.3769052034342},{index:349,time:"2024-12-21T05:49:00Z",altitude:26.19134677352244,azimuth:280.1279868509277},{index:350,time:"2024-12-21T05:50:00Z",altitude:26.139613658434556,azimuth:279.8791893671318},{index:351,time:"2024-12-21T05:51:00Z",altitude:26.08784169048478,azimuth:279.6305122770417},{index:352,time:"2024-12-21T05:52:00Z",altitude:26.036031865852998,azimuth:279.38195510335885},{index:353,time:"2024-12-21T05:53:00Z",altitude:25.984185179951194,azimuth:279.1335173665475},{index:354,time:"2024-12-21T05:54:00Z",altitude:25.932302627412458,azimuth:278.88519858488604},{index:355,time:"2024-12-21T05:55:00Z",altitude:25.880385167253394,azimuth:278.63699810811767},{index:356,time:"2024-12-21T05:56:00Z",altitude:25.828433862130627,azimuth:278.38891578310097},{index:357,time:"2024-12-21T05:57:00Z",altitude:25.77644966946011,azimuth:278.1409509553259},{index:358,time:"2024-12-21T05:58:00Z",altitude:25.724433580628737,azimuth:277.89310313472765},{index:359,time:"2024-12-21T05:59:00Z",altitude:25.672386586178927,azimuth:277.6453718292497},{index:360,time:"2024-12-21T06:00:00Z",altitude:25.620309675799433,azimuth:277.39775654489995},{index:361,time:"2024-12-21T06:01:00Z",altitude:25.568203838315185,azimuth:277.15025678579974},{index:362,time:"2024-12-21T06:02:00Z",altitude:25.516070061674633,azimuth:276.9028720542214},{index:363,time:"2024-12-21T06:03:00Z",altitude:25.4639093329346,azimuth:276.6556018506131},{index:364,time:"2024-12-21T06:04:00Z",altitude:25.41172263825168,azimuth:276.40844567365326},{index:365,time:"2024-12-21T06:05:00Z",altitude:25.359510962873586,azimuth:276.1614030203045},{index:366,time:"2024-12-21T06:06:00Z",altitude:25.30727525609183,azimuth:275.91447322030604},{index:367,time:"2024-12-21T06:07:00Z",altitude:25.255016571345838,azimuth:275.66765609841786},{index:368,time:"2024-12-21T06:08:00Z",altitude:25.202735856064407,azimuth:275.4209509810525},{index:369,time:"2024-12-21T06:09:00Z",altitude:25.15043409173864,azimuth:275.1743573586701},{index:370,time:"2024-12-21T06:10:00Z",altitude:25.098112258890765,azimuth:274.9278747201939},{index:371,time:"2024-12-21T06:11:00Z",altitude:25.04577133706609,azimuth:274.6815025530635},{index:372,time:"2024-12-21T06:12:00Z",altitude:24.99341230482509,azimuth:274.43524034328607},{index:373,time:"2024-12-21T06:13:00Z",altitude:24.941036139730365,azimuth:274.1890875754638},{index:374,time:"2024-12-21T06:14:00Z",altitude:24.888643818334025,azimuth:273.94304373282324},{index:375,time:"2024-12-21T06:15:00Z",altitude:24.836236316168943,azimuth:273.697108297261},{index:376,time:"2024-12-21T06:16:00Z",altitude:24.783814607742883,azimuth:273.4512807494028},{index:377,time:"2024-12-21T06:17:00Z",altitude:24.7313796313596,azimuth:273.2055604038899},{index:378,time:"2024-12-21T06:18:00Z",altitude:24.678932429759303,azimuth:272.959947068418},{index:379,time:"2024-12-21T06:19:00Z",altitude:24.626473939144883,azimuth:272.71444005516366},{index:380,time:"2024-12-21T06:20:00Z",altitude:24.574005129811894,azimuth:272.46903883999664},{index:381,time:"2024-12-21T06:21:00Z",altitude:24.521526970972157,azimuth:272.22374289766356},{index:382,time:"2024-12-21T06:22:00Z",altitude:24.4690404307562,azimuth:271.9785517018815},{index:383,time:"2024-12-21T06:23:00Z",altitude:24.416546476192295,azimuth:271.7334647253221},{index:384,time:"2024-12-21T06:24:00Z",altitude:24.3640460732077,azimuth:271.4884814396986},{index:385,time:"2024-12-21T06:25:00Z",altitude:24.311540186609054,azimuth:271.2436013157542},{index:386,time:"2024-12-21T06:26:00Z",altitude:24.259029780083445,azimuth:270.9988238233476},{index:387,time:"2024-12-21T06:27:00Z",altitude:24.206515816178946,azimuth:270.754148431441},{index:388,time:"2024-12-21T06:28:00Z",altitude:24.153999256306186,azimuth:270.5095746081861},{index:389,time:"2024-12-21T06:29:00Z",altitude:24.10148102550214,azimuth:270.2651016570124},{index:390,time:"2024-12-21T06:30:00Z",altitude:24.04896215329486,azimuth:270.02072937235806},{index:391,time:"2024-12-21T06:31:00Z",altitude:23.99644356239486,azimuth:269.7764570561077},{index:392,time:"2024-12-21T06:32:00Z",altitude:23.94392620955053,azimuth:269.53228417342086},{index:393,time:"2024-12-21T06:33:00Z",altitude:23.89141105032072,azimuth:269.28821018878836},{index:394,time:"2024-12-21T06:34:00Z",altitude:23.838899039068586,azimuth:269.0442345660778},{index:395,time:"2024-12-21T06:35:00Z",altitude:23.786391128955977,azimuth:268.80035676858296},{index:396,time:"2024-12-21T06:36:00Z",altitude:23.733888271931306,azimuth:268.55657625904047},{index:397,time:"2024-12-21T06:37:00Z",altitude:23.681391418720235,azimuth:268.31289249966017},{index:398,time:"2024-12-21T06:38:00Z",altitude:23.628901518818736,azimuth:268.0693049521658},{index:399,time:"2024-12-21T06:39:00Z",altitude:23.57641952048781,azimuth:267.82581307784284},{index:400,time:"2024-12-21T06:40:00Z",altitude:23.52394633556056,azimuth:267.5824161743842},{index:401,time:"2024-12-21T06:41:00Z",altitude:23.471482980165582,azimuth:267.3391140286709},{index:402,time:"2024-12-21T06:42:00Z",altitude:23.41903036361327,azimuth:267.0959059375961},{index:403,time:"2024-12-21T06:43:00Z",altitude:23.366589429133082,azimuth:266.85279136097773},{index:404,time:"2024-12-21T06:44:00Z",altitude:23.31416111867362,azimuth:266.6097697583361},{index:405,time:"2024-12-21T06:45:00Z",altitude:23.261746372897647,azimuth:266.3668405889394},{index:406,time:"2024-12-21T06:46:00Z",altitude:23.209346131176773,azimuth:266.12400331184796},{index:407,time:"2024-12-21T06:47:00Z",altitude:23.156961331581094,azimuth:265.8812573859345},{index:408,time:"2024-12-21T06:48:00Z",altitude:23.10459291086892,azimuth:265.6386022699042},{index:409,time:"2024-12-21T06:49:00Z",altitude:23.05224180448194,azimuth:265.39603742233925},{index:410,time:"2024-12-21T06:50:00Z",altitude:22.999908946539005,azimuth:265.1535623017377},{index:411,time:"2024-12-21T06:51:00Z",altitude:22.947595234756076,azimuth:264.9111762040402},{index:412,time:"2024-12-21T06:52:00Z",altitude:22.895301670734067,azimuth:264.6688789126951},{index:413,time:"2024-12-21T06:53:00Z",altitude:22.843029149488704,azimuth:264.4266697235522},{index:414,time:"2024-12-21T06:54:00Z",altitude:22.79077859976598,azimuth:264.1845480950512},{index:415,time:"2024-12-21T06:55:00Z",altitude:22.738550948947324,azimuth:263.942513485681},{index:416,time:"2024-12-21T06:56:00Z",altitude:22.686347123045202,azimuth:263.700565354023},{index:417,time:"2024-12-21T06:57:00Z",altitude:22.63416804669723,azimuth:263.45870315878807},{index:418,time:"2024-12-21T06:58:00Z",altitude:22.582014643157915,azimuth:263.2169263588416},{index:419,time:"2024-12-21T06:59:00Z",altitude:22.52988783428789,azimuth:262.97523441321607},{index:420,time:"2024-12-21T07:00:00Z",altitude:22.47778854054948,azimuth:262.73362678115353},{index:421,time:"2024-12-21T07:01:00Z",altitude:22.425717681002205,azimuth:262.4921029221465},{index:422,time:"2024-12-21T07:02:00Z",altitude:22.373676138406264,azimuth:262.25066213408286},{index:423,time:"2024-12-21T07:03:00Z",altitude:22.321664898780575,azimuth:262.00930420080545},{index:424,time:"2024-12-21T07:04:00Z",altitude:22.269684842016527,azimuth:261.7680284207548},{index:425,time:"2024-12-21T07:05:00Z",altitude:22.217736881482487,azimuth:261.52683425466904},{index:426,time:"2024-12-21T07:06:00Z",altitude:22.16582192910107,azimuth:261.285721163643},{index:427,time:"2024-12-21T07:07:00Z",altitude:22.113940895352368,azimuth:261.0446886092029},{index:428,time:"2024-12-21T07:08:00Z",altitude:22.062094689256977,azimuth:260.8037360532873},{index:429,time:"2024-12-21T07:09:00Z",altitude:22.01028421837918,azimuth:260.56286295832064},{index:430,time:"2024-12-21T07:10:00Z",altitude:21.958510388810193,azimuth:260.322068787195},{index:431,time:"2024-12-21T07:11:00Z",altitude:21.90677410517048,azimuth:260.0813530033389},{index:432,time:"2024-12-21T07:12:00Z",altitude:21.85507627059434,azimuth:259.84071507070433},{index:433,time:"2024-12-21T07:13:00Z",altitude:21.803417786732265,azimuth:259.6001544538355},{index:434,time:"2024-12-21T07:14:00Z",altitude:21.751799519135975,azimuth:259.35967045662056},{index:435,time:"2024-12-21T07:15:00Z",altitude:21.700222435681514,azimuth:259.11926286732216},{index:436,time:"2024-12-21T07:16:00Z",altitude:21.648687398885162,azimuth:258.87893099106},{index:437,time:"2024-12-21T07:17:00Z",altitude:21.5971953043736,azimuth:258.63867429490836},{index:438,time:"2024-12-21T07:18:00Z",altitude:21.545747046249573,azimuth:258.39849224663203},{index:439,time:"2024-12-21T07:19:00Z",altitude:21.494343517086673,azimuth:258.15838431471826},{index:440,time:"2024-12-21T07:20:00Z",altitude:21.44298560792552,azimuth:257.9183499684148},{index:441,time:"2024-12-21T07:21:00Z",altitude:21.39167420826451,azimuth:257.6783886777427},{index:442,time:"2024-12-21T07:22:00Z",altitude:21.34041020605083,azimuth:257.4384999135093},{index:443,time:"2024-12-21T07:23:00Z",altitude:21.2891944876763,azimuth:257.198683147344},{index:444,time:"2024-12-21T07:24:00Z",altitude:21.238027937973595,azimuth:256.9589378517356},{index:445,time:"2024-12-21T07:25:00Z",altitude:21.186911405947484,azimuth:256.7192633393525},{index:446,time:"2024-12-21T07:26:00Z",altitude:21.135845841834936,azimuth:256.4796594058511},{index:447,time:"2024-12-21T07:27:00Z",altitude:21.084832091450725,azimuth:256.24012536566613},{index:448,time:"2024-12-21T07:28:00Z",altitude:21.033871033313982,azimuth:256.00066069490754},{index:449,time:"2024-12-21T07:29:00Z",altitude:20.982963544346646,azimuth:255.7612648706371},{index:450,time:"2024-12-21T07:30:00Z",altitude:20.93211049986947,azimuth:255.52193737090334},{index:451,time:"2024-12-21T07:31:00Z",altitude:20.88131277359825,azimuth:255.28267767477718},{index:452,time:"2024-12-21T07:32:00Z",altitude:20.830571237633876,azimuth:255.04348526235762},{index:453,time:"2024-12-21T07:33:00Z",altitude:20.779886762454773,azimuth:254.80435961478952},{index:454,time:"2024-12-21T07:34:00Z",altitude:20.72926021691192,azimuth:254.56530021429288},{index:455,time:"2024-12-21T07:35:00Z",altitude:20.67869246822515,azimuth:254.3263065441973},{index:456,time:"2024-12-21T07:36:00Z",altitude:20.628184348126677,azimuth:254.0873779287632},{index:457,time:"2024-12-21T07:37:00Z",altitude:20.57773678828168,azimuth:253.84851417398562},{index:458,time:"2024-12-21T07:38:00Z",altitude:20.52735061708179,azimuth:253.60971460638245},{index:459,time:"2024-12-21T07:39:00Z",altitude:20.47702669514749,azimuth:253.37097871389133},{index:460,time:"2024-12-21T07:40:00Z",altitude:20.42676588143042,azimuth:253.1323059856412},{index:461,time:"2024-12-21T07:41:00Z",altitude:20.376569033209663,azimuth:252.89369591198601},{index:462,time:"2024-12-21T07:42:00Z",altitude:20.326437006087637,azimuth:252.65514798453702},{index:463,time:"2024-12-21T07:43:00Z",altitude:20.276370653981328,azimuth:252.41666169617122},{index:464,time:"2024-12-21T07:44:00Z",altitude:20.226370829113073,azimuth:252.17823654103987},{index:465,time:"2024-12-21T07:45:00Z",altitude:20.176438382007017,azimuth:251.93987201460098},{index:466,time:"2024-12-21T07:46:00Z",altitude:20.126574161483965,azimuth:251.70156761364643},{index:467,time:"2024-12-21T07:47:00Z",altitude:20.07677898128649,azimuth:251.46332267657837},{index:468,time:"2024-12-21T07:48:00Z",altitude:20.02705375358585,azimuth:251.22513702240423},{index:469,time:"2024-12-21T07:49:00Z",altitude:19.977399288632714,azimuth:250.98700999222115},{index:470,time:"2024-12-21T07:50:00Z",altitude:19.927816428364398,azimuth:250.7489410883243},{index:471,time:"2024-12-21T07:51:00Z",altitude:19.87830601297567,azimuth:250.5109298144063},{index:472,time:"2024-12-21T07:52:00Z",altitude:19.828868880922357,azimuth:250.27297567562414},{index:473,time:"2024-12-21T07:53:00Z",altitude:19.779505868903897,azimuth:250.03507817856584},{index:474,time:"2024-12-21T07:54:00Z",altitude:19.730217811868176,azimuth:249.79723683132238},{index:475,time:"2024-12-21T07:55:00Z",altitude:19.6810055429941,azimuth:249.55945114345445},{index:476,time:"2024-12-21T07:56:00Z",altitude:19.631869893695114,azimuth:249.32172062605804},{index:477,time:"2024-12-21T07:57:00Z",altitude:19.582811693602828,azimuth:249.08404479173532},{index:478,time:"2024-12-21T07:58:00Z",altitude:19.533831770570078,azimuth:248.84642315465848},{index:479,time:"2024-12-21T07:59:00Z",altitude:19.484930917891905,azimuth:248.60885507126198},{index:480,time:"2024-12-21T08:00:00Z",altitude:19.43611002541265,azimuth:248.37134037745128},{index:481,time:"2024-12-21T08:01:00Z",altitude:19.38736988277617,azimuth:248.1338784328157},{index:482,time:"2024-12-21T08:02:00Z",altitude:19.338711310633713,azimuth:247.89646875788003},{index:483,time:"2024-12-21T08:03:00Z",altitude:19.290135127817333,azimuth:247.6591108747887},{index:484,time:"2024-12-21T08:04:00Z",altitude:19.24164215133573,azimuth:247.42180430733353},{index:485,time:"2024-12-21T08:05:00Z",altitude:19.193233196369853,azimuth:247.1845485809816},{index:486,time:"2024-12-21T08:06:00Z",altitude:19.14490907626411,azimuth:246.94734322288102},{index:487,time:"2024-12-21T08:07:00Z",altitude:19.0966706025163,azimuth:246.71018776185977},{index:488,time:"2024-12-21T08:08:00Z",altitude:19.048518584774637,azimuth:246.4730817284604},{index:489,time:"2024-12-21T08:09:00Z",altitude:19.000453830832505,azimuth:246.23602465496234},{index:490,time:"2024-12-21T08:10:00Z",altitude:18.952477114478967,azimuth:245.99901591647915},{index:491,time:"2024-12-21T08:11:00Z",altitude:18.90458930411029,azimuth:245.7620553666171},{index:492,time:"2024-12-21T08:12:00Z",altitude:18.856791169708277,azimuth:245.52514238398524},{index:493,time:"2024-12-21T08:13:00Z",altitude:18.809083511570545,azimuth:245.2882765079197},{index:494,time:"2024-12-21T08:14:00Z",altitude:18.761467128100637,azimuth:245.05145727954155},{index:495,time:"2024-12-21T08:15:00Z",altitude:18.71394281580489,azimuth:244.81468424179073},{index:496,time:"2024-12-21T08:16:00Z",altitude:18.666511369286912,azimuth:244.57795693944618},{index:497,time:"2024-12-21T08:17:00Z",altitude:18.61917358123869,azimuth:244.34127491913},{index:498,time:"2024-12-21T08:18:00Z",altitude:18.571930242431215,azimuth:244.1046377293091},{index:499,time:"2024-12-21T08:19:00Z",altitude:18.524782141709995,azimuth:243.86804492032095},{index:500,time:"2024-12-21T08:20:00Z",altitude:18.477730065990556,azimuth:243.63149604439954},{index:501,time:"2024-12-21T08:21:00Z",altitude:18.430774768795587,azimuth:243.3949904971008},{index:502,time:"2024-12-21T08:22:00Z",altitude:18.383917096122182,azimuth:243.15852815161935},{index:503,time:"2024-12-21T08:23:00Z",altitude:18.337157797528363,azimuth:242.92210840731767},{index:504,time:"2024-12-21T08:24:00Z",altitude:18.290497652129414,azimuth:242.6857308240939},{index:505,time:"2024-12-21T08:25:00Z",altitude:18.24393743707073,azimuth:242.44939496378294},{index:506,time:"2024-12-21T08:26:00Z",altitude:18.197477927522986,azimuth:242.2131003901802},{index:507,time:"2024-12-21T08:27:00Z",altitude:18.151119896677695,azimuth:241.97684666906648},{index:508,time:"2024-12-21T08:28:00Z",altitude:18.1048641157366,azimuth:241.7406333682039},{index:509,time:"2024-12-21T08:29:00Z",altitude:18.058711353903906,azimuth:241.5044600573433},{index:510,time:"2024-12-21T08:30:00Z",altitude:18.012662378380337,azimuth:241.2683263082423},{index:511,time:"2024-12-21T08:31:00Z",altitude:17.96671795435843,azimuth:241.03223169469035},{index:512,time:"2024-12-21T08:32:00Z",altitude:17.920878814310633,azimuth:240.79617563423034},{index:513,time:"2024-12-21T08:33:00Z",altitude:17.87514578086132,azimuth:240.5601580212946},{index:514,time:"2024-12-21T08:34:00Z",altitude:17.82951958235229,azimuth:240.32417827748196},{index:515,time:"2024-12-21T08:35:00Z",altitude:17.784000975863364,azimuth:240.08823598477952},{index:516,time:"2024-12-21T08:36:00Z",altitude:17.738590716422973,azimuth:239.85233072722465},{index:517,time:"2024-12-21T08:37:00Z",altitude:17.6932895570099,azimuth:239.616462090963},{index:518,time:"2024-12-21T08:38:00Z",altitude:17.648098248537153,azimuth:239.38062966421288},{index:519,time:"2024-12-21T08:39:00Z",altitude:17.60301753985335,azimuth:239.14483303732123},{index:520,time:"2024-12-21T08:40:00Z",altitude:17.558048177726572,azimuth:238.90907180272754},{index:521,time:"2024-12-21T08:41:00Z",altitude:17.513190906845942,azimuth:238.67334555502106},{index:522,time:"2024-12-21T08:42:00Z",altitude:17.4684464698045,azimuth:238.43765389089936},{index:523,time:"2024-12-21T08:43:00Z",altitude:17.423815607101883,azimuth:238.2019964092314},{index:524,time:"2024-12-21T08:44:00Z",altitude:17.37929902731563,azimuth:237.96637255303213},{index:525,time:"2024-12-21T08:45:00Z",altitude:17.334897526425074,azimuth:237.73078224146926},{index:526,time:"2024-12-21T08:46:00Z",altitude:17.290611808698635,azimuth:237.49522492188177},{index:527,time:"2024-12-21T08:47:00Z",altitude:17.246442606165655,azimuth:237.25970020180088},{index:528,time:"2024-12-21T08:48:00Z",altitude:17.202390648717415,azimuth:237.02420769093706},{index:529,time:"2024-12-21T08:49:00Z",altitude:17.158456664100907,azimuth:236.7887470011947},{index:530,time:"2024-12-21T08:50:00Z",altitude:17.114641377914545,azimuth:236.5533177466996},{index:531,time:"2024-12-21T08:51:00Z",altitude:17.070945513597632,azimuth:236.31791954379057},{index:532,time:"2024-12-21T08:52:00Z",altitude:17.027369792420632,azimuth:236.0825520110169},{index:533,time:"2024-12-21T08:53:00Z",altitude:16.98391493347983,azimuth:235.84721476915823},{index:534,time:"2024-12-21T08:54:00Z",altitude:16.94058165369155,azimuth:235.61190744124286},{index:535,time:"2024-12-21T08:55:00Z",altitude:16.8973706388493,azimuth:235.37662949479304},{index:536,time:"2024-12-21T08:56:00Z",altitude:16.8542826594282,azimuth:235.1413808728399},{index:537,time:"2024-12-21T08:57:00Z",altitude:16.811318396736798,azimuth:234.90616104739777},{index:538,time:"2024-12-21T08:58:00Z",altitude:16.76847855888606,azimuth:234.67096965051854},{index:539,time:"2024-12-21T08:59:00Z",altitude:16.72576385176408,azimuth:234.4358063165161},{index:540,time:"2024-12-21T09:00:00Z",altitude:16.683174979030298,azimuth:234.20067068198392},{index:541,time:"2024-12-21T09:01:00Z",altitude:16.64071264210982,azimuth:233.96556238581383},{index:542,time:"2024-12-21T09:02:00Z",altitude:16.59837754018359,azimuth:233.73048106919117},{index:543,time:"2024-12-21T09:03:00Z",altitude:16.5561703701777,azimuth:233.4954263755854},{index:544,time:"2024-12-21T09:04:00Z",altitude:16.514091826758687,azimuth:233.2603979507741},{index:545,time:"2024-12-21T09:05:00Z",altitude:16.472142602327008,azimuth:233.02539544285622},{index:546,time:"2024-12-21T09:06:00Z",altitude:16.430323359009503,azimuth:232.79041834469436},{index:547,time:"2024-12-21T09:07:00Z",altitude:16.388634840726727,azimuth:232.55546662412993},{index:548,time:"2024-12-21T09:08:00Z",altitude:16.3470777049424,azimuth:232.3205397786576},{index:549,time:"2024-12-21T09:09:00Z",altitude:16.30565263490547,azimuth:232.08563746567523},{index:550,time:"2024-12-21T09:10:00Z",altitude:16.264360311554494,azimuth:231.85075934490283},{index:551,time:"2024-12-21T09:11:00Z",altitude:16.223201413512683,azimuth:231.61590507840617},{index:552,time:"2024-12-21T09:12:00Z",altitude:16.182176617081208,azimuth:231.3810743306085},{index:553,time:"2024-12-21T09:13:00Z",altitude:16.141286596229257,azimuth:231.14626676828448},{index:554,time:"2024-12-21T09:14:00Z",altitude:16.100532022583977,azimuth:230.91148206055288},{index:555,time:"2024-12-21T09:15:00Z",altitude:16.059913565424377,azimuth:230.6767198788927},{index:556,time:"2024-12-21T09:16:00Z",altitude:16.019431891675566,azimuth:230.4419798971597},{index:557,time:"2024-12-21T09:17:00Z",altitude:15.979087638890528,azimuth:230.20726163418826},{index:558,time:"2024-12-21T09:18:00Z",altitude:15.938881523362667,azimuth:229.97256508334814},{index:559,time:"2024-12-21T09:19:00Z",altitude:15.898814177798036,azimuth:229.73788976819702},{index:560,time:"2024-12-21T09:20:00Z",altitude:15.858886259616522,azimuth:229.50323537208885},{index:561,time:"2024-12-21T09:21:00Z",altitude:15.819098423837174,azimuth:229.2686015807364},{index:562,time:"2024-12-21T09:22:00Z",altitude:15.779451323077971,azimuth:229.0339880822604},{index:563,time:"2024-12-21T09:23:00Z",altitude:15.739945607539992,azimuth:228.7993945671479},{index:564,time:"2024-12-21T09:24:00Z",altitude:15.700581925006228,azimuth:228.56482072829587},{index:565,time:"2024-12-21T09:25:00Z",altitude:15.66136092082683,azimuth:228.3302662609752},{index:566,time:"2024-12-21T09:26:00Z",altitude:15.622283237917825,azimuth:228.09573086287435},{index:567,time:"2024-12-21T09:27:00Z",altitude:15.583349516745441,azimuth:227.86121423405675},{index:568,time:"2024-12-21T09:28:00Z",altitude:15.544560395325517,azimuth:227.62671607700912},{index:569,time:"2024-12-21T09:29:00Z",altitude:15.505916483344292,azimuth:227.39223593937544},{index:570,time:"2024-12-21T09:30:00Z",altitude:15.467418465708471,azimuth:227.1577738428991},{index:571,time:"2024-12-21T09:31:00Z",altitude:15.429066947058626,azimuth:226.92332934003068},{index:572,time:"2024-12-21T09:32:00Z",altitude:15.390862555510733,azimuth:226.68890214287092},{index:573,time:"2024-12-21T09:33:00Z",altitude:15.352805916683213,azimuth:226.4544919659164},{index:574,time:"2024-12-21T09:34:00Z",altitude:15.314897653690931,azimuth:226.2200985260731},{index:575,time:"2024-12-21T09:35:00Z",altitude:15.277138387138674,azimuth:225.9857215426693},{index:576,time:"2024-12-21T09:36:00Z",altitude:15.23952873511108,azimuth:225.75136073744454},{index:577,time:"2024-12-21T09:37:00Z",altitude:15.202069313162708,azimuth:225.51701583454044},{index:578,time:"2024-12-21T09:38:00Z",altitude:15.164760734310905,azimuth:225.28268656050753},{index:579,time:"2024-12-21T09:39:00Z",altitude:15.127603609030476,azimuth:225.04837264432467},{index:580,time:"2024-12-21T09:40:00Z",altitude:15.090598520480638,azimuth:224.81407366028157},{index:581,time:"2024-12-21T09:41:00Z",altitude:15.053746123645585,azimuth:224.5797896563777},{index:582,time:"2024-12-21T09:42:00Z",altitude:15.017046996451203,azimuth:224.34552021171947},{index:583,time:"2024-12-21T09:43:00Z",altitude:14.980501739109746,azimuth:224.11126506493758},{index:584,time:"2024-12-21T09:44:00Z",altitude:14.944110949245658,azimuth:223.87702395706523},{index:585,time:"2024-12-21T09:45:00Z",altitude:14.90787522188836,azimuth:223.64279663154403},{index:586,time:"2024-12-21T09:46:00Z",altitude:14.871795149466903,azimuth:223.40858283424222},{index:587,time:"2024-12-21T09:47:00Z",altitude:14.835871321799205,azimuth:223.17438231343735},{index:588,time:"2024-12-21T09:48:00Z",altitude:14.800104326082169,azimuth:222.94019481980484},{index:589,time:"2024-12-21T09:49:00Z",altitude:14.764494746885381,azimuth:222.7060201064288},{index:590,time:"2024-12-21T09:50:00Z",altitude:14.729043166144505,azimuth:222.47185792881152},{index:591,time:"2024-12-21T09:51:00Z",altitude:14.693750139539524,azimuth:222.2377078878598},{index:592,time:"2024-12-21T09:52:00Z",altitude:14.65861629103819,azimuth:222.00357005787848},{index:593,time:"2024-12-21T09:53:00Z",altitude:14.623642170901695,azimuth:221.7694440445722},{index:594,time:"2024-12-21T09:54:00Z",altitude:14.588828350441156,azimuth:221.53532961305498},{index:595,time:"2024-12-21T09:55:00Z",altitude:14.554175398289397,azimuth:221.3012265308272},{index:596,time:"2024-12-21T09:56:00Z",altitude:14.519683880394528,azimuth:221.0671345677853},{index:597,time:"2024-12-21T09:57:00Z",altitude:14.485354360013442,azimuth:220.8330534962303},{index:598,time:"2024-12-21T09:58:00Z",altitude:14.451187397702233,azimuth:220.5989830908552},{index:599,time:"2024-12-21T09:59:00Z",altitude:14.417183551305635,azimuth:220.364923128726},{index:600,time:"2024-12-21T10:00:00Z",altitude:14.383343375951652,azimuth:220.1308733892973},{index:601,time:"2024-12-21T10:01:00Z",altitude:14.34966742404454,azimuth:219.8968336544163},{index:602,time:"2024-12-21T10:02:00Z",altitude:14.316156222839151,azimuth:219.66280355138045},{index:603,time:"2024-12-21T10:03:00Z",altitude:14.282810364206222,azimuth:219.4287831806429},{index:604,time:"2024-12-21T10:04:00Z",altitude:14.249630369797442,azimuth:219.19477217423108},{index:605,time:"2024-12-21T10:05:00Z",altitude:14.21661678103627,azimuth:218.9607703234938},{index:606,time:"2024-12-21T10:06:00Z",altitude:14.18377013657698,azimuth:218.7267774221181},{index:607,time:"2024-12-21T10:07:00Z",altitude:14.151090972304086,azimuth:218.49279326617804},{index:608,time:"2024-12-21T10:08:00Z",altitude:14.118579821317473,azimuth:218.2588176540805},{index:609,time:"2024-12-21T10:09:00Z",altitude:14.086237213930874,azimuth:218.02485038660717},{index:610,time:"2024-12-21T10:10:00Z",altitude:14.054063677657613,azimuth:217.79089126686478},{index:611,time:"2024-12-21T10:11:00Z",altitude:14.022059737209183,azimuth:217.5569401003264},{index:612,time:"2024-12-21T10:12:00Z",altitude:13.990225914481114,azimuth:217.32299669478184},{index:613,time:"2024-12-21T10:13:00Z",altitude:13.958562728550932,azimuth:217.08906086037416},{index:614,time:"2024-12-21T10:14:00Z",altitude:13.927070674605801,azimuth:216.85513225270003},{index:615,time:"2024-12-21T10:15:00Z",altitude:13.895750308291383,azimuth:216.6212110002671},{index:616,time:"2024-12-21T10:16:00Z",altitude:13.864602119001058,azimuth:216.38729676331937},{index:617,time:"2024-12-21T10:17:00Z",altitude:13.83362661445111,azimuth:216.15338936127955},{index:618,time:"2024-12-21T10:18:00Z",altitude:13.802824299497026,azimuth:215.9194886158663},{index:619,time:"2024-12-21T10:19:00Z",altitude:13.772195676127286,azimuth:215.68559435110052},{index:620,time:"2024-12-21T10:20:00Z",altitude:13.741741243456756,azimuth:215.45170639330672},{index:621,time:"2024-12-21T10:21:00Z",altitude:13.711461497718451,azimuth:215.2178245711021},{index:622,time:"2024-12-21T10:22:00Z",altitude:13.681356932253962,azimuth:214.98394871537468},{index:623,time:"2024-12-21T10:23:00Z",altitude:13.651428037507484,azimuth:214.75007865928902},{index:624,time:"2024-12-21T10:24:00Z",altitude:13.621675301019941,azimuth:214.5162142382915},{index:625,time:"2024-12-21T10:25:00Z",altitude:13.592099187647376,azimuth:214.28235513328283},{index:626,time:"2024-12-21T10:26:00Z",altitude:13.562700218760726,azimuth:214.04850149783624},{index:627,time:"2024-12-21T10:27:00Z",altitude:13.533478853250424,azimuth:213.81465301735304},{index:628,time:"2024-12-21T10:28:00Z",altitude:13.504435566964123,azimuth:213.58080953629388},{index:629,time:"2024-12-21T10:29:00Z",altitude:13.475570832806202,azimuth:213.34697090134244},{index:630,time:"2024-12-21T10:30:00Z",altitude:13.446885120732224,azimuth:213.11313696141048},{index:631,time:"2024-12-21T10:31:00Z",altitude:13.418378897742915,azimuth:212.8793075676416},{index:632,time:"2024-12-21T10:32:00Z",altitude:13.390052627875741,azimuth:212.6454825733924},{index:633,time:"2024-12-21T10:33:00Z",altitude:13.361906772196532,azimuth:212.41166183421475},{index:634,time:"2024-12-21T10:34:00Z",altitude:13.333941788793132,azimuth:212.17784520785332},{index:635,time:"2024-12-21T10:35:00Z",altitude:13.306158132770644,azimuth:211.94403255425732},{index:636,time:"2024-12-21T10:36:00Z",altitude:13.27855623779544,azimuth:211.71022357877882},{index:637,time:"2024-12-21T10:37:00Z",altitude:13.251136589996824,azimuth:211.47641845925688},{index:638,time:"2024-12-21T10:38:00Z",altitude:13.223899616915208,azimuth:211.2426169053772},{index:639,time:"2024-12-21T10:39:00Z",altitude:13.196845761647756,azimuth:211.00881878575953},{index:640,time:"2024-12-21T10:40:00Z",altitude:13.169975464271447,azimuth:210.77502397115967},{index:641,time:"2024-12-21T10:41:00Z",altitude:13.143289161836943,azimuth:210.54123233446708},{index:642,time:"2024-12-21T10:42:00Z",altitude:13.116787288364048,azimuth:210.30744375071438},{index:643,time:"2024-12-21T10:43:00Z",altitude:13.090470274833283,azimuth:210.07365809705198},{index:644,time:"2024-12-21T10:44:00Z",altitude:13.06433854917792,azimuth:209.83987525272835},{index:645,time:"2024-12-21T10:45:00Z",altitude:13.038392536278897,azimuth:209.6060950990919},{index:646,time:"2024-12-21T10:46:00Z",altitude:13.012632657959417,azimuth:209.3723175195928},{index:647,time:"2024-12-21T10:47:00Z",altitude:12.987059315891628,azimuth:209.138542243003},{index:648,time:"2024-12-21T10:48:00Z",altitude:12.961672960057248,azimuth:208.90476947043135},{index:649,time:"2024-12-21T10:49:00Z",altitude:12.936473985851915,azimuth:208.6709989347676},{index:650,time:"2024-12-21T10:50:00Z",altitude:12.911462802799626,azimuth:208.43723052772955},{index:651,time:"2024-12-21T10:51:00Z",altitude:12.886639817331153,azimuth:208.20346414305172},{index:652,time:"2024-12-21T10:52:00Z",altitude:12.86200543278278,azimuth:207.96969967652106},{index:653,time:"2024-12-21T10:53:00Z",altitude:12.8375600493853,azimuth:207.73593702592018},{index:654,time:"2024-12-21T10:54:00Z",altitude:12.813304064262862,azimuth:207.50217609106394},{index:655,time:"2024-12-21T10:55:00Z",altitude:12.789237871421657,azimuth:207.26841677373767},{index:656,time:"2024-12-21T10:56:00Z",altitude:12.765361861749458,azimuth:207.03465897773924},{index:657,time:"2024-12-21T10:57:00Z",altitude:12.741676423004439,azimuth:206.8009026088172},{index:658,time:"2024-12-21T10:58:00Z",altitude:12.71818193981416,azimuth:206.56714757470675},{index:659,time:"2024-12-21T10:59:00Z",altitude:12.694878778103709,azimuth:206.33339362833175},{index:660,time:"2024-12-21T11:00:00Z",altitude:12.671767347468261,azimuth:206.09964099479572},{index:661,time:"2024-12-21T11:01:00Z",altitude:12.648848007411027,azimuth:205.86588943090385},{index:662,time:"2024-12-21T11:02:00Z",altitude:12.626121129969414,azimuth:205.63213885212167},{index:663,time:"2024-12-21T11:03:00Z",altitude:12.603587084018622,azimuth:205.39838917581187},{index:664,time:"2024-12-21T11:04:00Z",altitude:12.581246235266935,azimuth:205.16464032122903},{index:665,time:"2024-12-21T11:05:00Z",altitude:12.559098946251256,azimuth:204.9308922095199},{index:666,time:"2024-12-21T11:06:00Z",altitude:12.537145576330772,azimuth:204.69714476369964},{index:667,time:"2024-12-21T11:07:00Z",altitude:12.51538648168048,azimuth:204.463397908628},{index:668,time:"2024-12-21T11:08:00Z",altitude:12.49382201528706,azimuth:204.22965157100796},{index:669,time:"2024-12-21T11:09:00Z",altitude:12.472452526944743,azimuth:203.995905679386},{index:670,time:"2024-12-21T11:10:00Z",altitude:12.451278349116226,azimuth:203.76216000738762},{index:671,time:"2024-12-21T11:11:00Z",altitude:12.430299853587977,azimuth:203.528414800635},{index:672,time:"2024-12-21T11:12:00Z",altitude:12.409517366279207,azimuth:203.29466983635245},{index:673,time:"2024-12-21T11:13:00Z",altitude:12.388931224158826,azimuth:203.06092505027823},{index:674,time:"2024-12-21T11:14:00Z",altitude:12.36854176097606,azimuth:202.82718037990406},{index:675,time:"2024-12-21T11:15:00Z",altitude:12.348349307256761,azimuth:202.59343576447495},{index:676,time:"2024-12-21T11:16:00Z",altitude:12.328354190299045,azimuth:202.35969114498172},{index:677,time:"2024-12-21T11:17:00Z",altitude:12.308556734168377,azimuth:202.12594646414345},{index:678,time:"2024-12-21T11:18:00Z",altitude:12.288957259691381,azimuth:201.89220166637702},{index:679,time:"2024-12-21T11:19:00Z",altitude:12.269556084452491,azimuth:201.6584566977963},{index:680,time:"2024-12-21T11:20:00Z",altitude:12.250353522790192,azimuth:201.42471150620926},{index:681,time:"2024-12-21T11:21:00Z",altitude:12.231349873115855,azimuth:201.19096588435696},{index:682,time:"2024-12-21T11:22:00Z",altitude:12.212545468745217,azimuth:200.9572200968246},{index:683,time:"2024-12-21T11:23:00Z",altitude:12.1939406014402,azimuth:200.72347393964523},{index:684,time:"2024-12-21T11:24:00Z",altitude:12.175535572508146,azimuth:200.48972736721592},{index:685,time:"2024-12-21T11:25:00Z",altitude:12.157330679986796,azimuth:200.25598033553203},{index:686,time:"2024-12-21T11:26:00Z",altitude:12.139326218641322,azimuth:200.02223280218487},{index:687,time:"2024-12-21T11:27:00Z",altitude:12.121522479960944,azimuth:199.78848472635835},{index:688,time:"2024-12-21T11:28:00Z",altitude:12.103919752154084,azimuth:199.55473606880255},{index:689,time:"2024-12-21T11:29:00Z",altitude:12.086518320143645,azimuth:199.32098679180856},{index:690,time:"2024-12-21T11:30:00Z",altitude:12.069318465563622,azimuth:199.08723685919995},{index:691,time:"2024-12-21T11:31:00Z",altitude:12.05232046675659,azimuth:198.85348623633595},{index:692,time:"2024-12-21T11:32:00Z",altitude:12.035524587573859,azimuth:198.61973473333492},{index:693,time:"2024-12-21T11:33:00Z",altitude:12.018931122286288,azimuth:198.3859826320284},{index:694,time:"2024-12-21T11:34:00Z",altitude:12.002540328005065,azimuth:198.15222974548786},{index:695,time:"2024-12-21T11:35:00Z",altitude:11.986352469865839,azimuth:197.9184760450053},{index:696,time:"2024-12-21T11:36:00Z",altitude:11.970367809691892,azimuth:197.68472150329376},{index:697,time:"2024-12-21T11:37:00Z",altitude:11.954586605993574,azimuth:197.4509660945124},{index:698,time:"2024-12-21T11:38:00Z",altitude:11.93900911396223,azimuth:197.21720979421232},{index:699,time:"2024-12-21T11:39:00Z",altitude:11.92363558546959,azimuth:196.98345257936066},{index:700,time:"2024-12-21T11:40:00Z",altitude:11.908466269061561,azimuth:196.74969442828066},{index:701,time:"2024-12-21T11:41:00Z",altitude:11.89350140995791,azimuth:196.5159353206807},{index:702,time:"2024-12-21T11:42:00Z",altitude:11.878741250046243,azimuth:196.28217523759224},{index:703,time:"2024-12-21T11:43:00Z",altitude:11.864186027881638,azimuth:196.04841416139905},{index:704,time:"2024-12-21T11:44:00Z",altitude:11.849835969127605,azimuth:195.81465191902964},{index:705,time:"2024-12-21T11:45:00Z",altitude:11.835691324906492,azimuth:195.5808888089614},{index:706,time:"2024-12-21T11:46:00Z",altitude:11.82175231406201,azimuth:195.34712466071065},{index:707,time:"2024-12-21T11:47:00Z",altitude:11.8080191617834,azimuth:195.1133594618068},{index:708,time:"2024-12-21T11:48:00Z",altitude:11.794492089910648,azimuth:194.8795932010135},{index:709,time:"2024-12-21T11:49:00Z",altitude:11.781171316932433,azimuth:194.6458258683232},{index:710,time:"2024-12-21T11:50:00Z",altitude:11.768057057984038,azimuth:194.4120574549524},{index:711,time:"2024-12-21T11:51:00Z",altitude:11.75514952484381,azimuth:194.17828795330863},{index:712,time:"2024-12-21T11:52:00Z",altitude:11.74244892593036,azimuth:193.9445173569684},{index:713,time:"2024-12-21T11:53:00Z",altitude:11.729955466300352,azimuth:193.71074566066682},{index:714,time:"2024-12-21T11:54:00Z",altitude:11.717669347646714,azimuth:193.4769728602929},{index:715,time:"2024-12-21T11:55:00Z",altitude:11.705590760265984,azimuth:193.24319879610567},{index:716,time:"2024-12-21T11:56:00Z",altitude:11.693719915312615,azimuth:193.00942377971714},{index:717,time:"2024-12-21T11:57:00Z",altitude:11.682056996203269,azimuth:192.77564765358494},{index:718,time:"2024-12-21T11:58:00Z",altitude:11.670602191149394,azimuth:192.54187041798866},{index:719,time:"2024-12-21T11:59:00Z",altitude:11.659355684986021,azimuth:192.3080920742538},{index:720,time:"2024-12-21T12:00:00Z",altitude:11.648317659169967,azimuth:192.07431262474063},{index:721,time:"2024-12-21T12:01:00Z",altitude:11.637488291778254,azimuth:191.84053207283876},{index:722,time:"2024-12-21T12:02:00Z",altitude:11.626867757505476,azimuth:191.60675042293778},{index:723,time:"2024-12-21T12:03:00Z",altitude:11.616456227661356,azimuth:191.3729676803975},{index:724,time:"2024-12-21T12:04:00Z",altitude:11.606253870169201,azimuth:191.13918385154122},{index:725,time:"2024-12-21T12:05:00Z",altitude:11.59626084956459,azimuth:190.90539894365},{index:726,time:"2024-12-21T12:06:00Z",altitude:11.58647732050285,azimuth:190.67161280816612},{index:727,time:"2024-12-21T12:07:00Z",altitude:11.576903453857165,azimuth:190.4378257677133},{index:728,time:"2024-12-21T12:08:00Z",altitude:11.567539397356668,azimuth:190.20403767553523},{index:729,time:"2024-12-21T12:09:00Z",altitude:11.558385301965433,azimuth:189.97024854250878},{index:730,time:"2024-12-21T12:10:00Z",altitude:11.549441315249908,azimuth:189.73645838035242},{index:731,time:"2024-12-21T12:11:00Z",altitude:11.540707581377806,azimuth:189.5026672016197},{index:732,time:"2024-12-21T12:12:00Z",altitude:11.532184241116752,azimuth:189.268875019688},{index:733,time:"2024-12-21T12:13:00Z",altitude:11.523871431832532,azimuth:189.03508184873454},{index:734,time:"2024-12-21T12:14:00Z",altitude:11.515769287487043,azimuth:188.801287703702},{index:735,time:"2024-12-21T12:15:00Z",altitude:11.507877938637348,azimuth:188.56749260029196},{index:736,time:"2024-12-21T12:16:00Z",altitude:11.500197512434582,azimuth:188.33369655495758},{index:737,time:"2024-12-21T12:17:00Z",altitude:11.492728127684293,azimuth:188.09989942809713},{index:738,time:"2024-12-21T12:18:00Z",altitude:11.485469914738092,azimuth:187.86610155112717},{index:739,time:"2024-12-21T12:19:00Z",altitude:11.478422985440314,azimuth:187.6323027858177},{index:740,time:"2024-12-21T12:20:00Z",altitude:11.471587453303908,azimuth:187.39850315139816},{index:741,time:"2024-12-21T12:21:00Z",altitude:11.464963428428415,azimuth:187.16470266771836},{index:742,time:"2024-12-21T12:22:00Z",altitude:11.458551017500175,azimuth:186.93090135527638},{index:743,time:"2024-12-21T12:23:00Z",altitude:11.452350323789958,azimuth:186.69709923515313},{index:744,time:"2024-12-21T12:24:00Z",altitude:11.446361447153132,azimuth:186.46329632903917},{index:745,time:"2024-12-21T12:25:00Z",altitude:11.440584484027406,azimuth:186.22949265916927},{index:746,time:"2024-12-21T12:26:00Z",altitude:11.435019527433044,azimuth:185.9956882483501},{index:747,time:"2024-12-21T12:27:00Z",altitude:11.429666666970656,azimuth:185.76188311989026},{index:748,time:"2024-12-21T12:28:00Z",altitude:11.424525988821555,azimuth:185.5280772976334},{index:749,time:"2024-12-21T12:29:00Z",altitude:11.41959757251227,azimuth:185.29427064911224},{index:750,time:"2024-12-21T12:30:00Z",altitude:11.414881503990925,azimuth:185.06046351267486},{index:751,time:"2024-12-21T12:31:00Z",altitude:11.410377855797861,azimuth:184.82665575678558},{index:752,time:"2024-12-21T12:32:00Z",altitude:11.406086700426147,azimuth:184.59284740712187},{index:753,time:"2024-12-21T12:33:00Z",altitude:11.402008106944756,azimuth:184.35903848975713},{index:754,time:"2024-12-21T12:34:00Z",altitude:11.398142140998026,azimuth:184.12522903115922},{index:755,time:"2024-12-21T12:35:00Z",altitude:11.394488864805256,azimuth:183.8914190581776},{index:756,time:"2024-12-21T12:36:00Z",altitude:11.391048337159873,azimuth:183.65760859801338},{index:757,time:"2024-12-21T12:37:00Z",altitude:11.387820613428634,azimuth:183.42379767818807},{index:758,time:"2024-12-21T12:38:00Z",altitude:11.384805745551274,azimuth:183.18998632653492},{index:759,time:"2024-12-21T12:39:00Z",altitude:11.382003782040245,azimuth:182.95617457119093},{index:760,time:"2024-12-21T12:40:00Z",altitude:11.379414766315273,azimuth:182.7223622837866},{index:761,time:"2024-12-21T12:41:00Z",altitude:11.37703874350423,azimuth:182.4885498065237},{index:762,time:"2024-12-21T12:42:00Z",altitude:11.374875750026808,azimuth:182.25473701151793},{index:763,time:"2024-12-21T12:43:00Z",altitude:11.372925820680846,azimuth:182.02092392787608},{index:764,time:"2024-12-21T12:44:00Z",altitude:11.371188986834577,azimuth:181.7871105848861},{index:765,time:"2024-12-21T12:45:00Z",altitude:11.369665276426375,azimuth:181.55329701200884},{index:766,time:"2024-12-21T12:46:00Z",altitude:11.368354713964603,azimuth:181.31948323887048},{index:767,time:"2024-12-21T12:47:00Z",altitude:11.367257320527136,azimuth:181.08566929522647},{index:768,time:"2024-12-21T12:48:00Z",altitude:11.366373113761327,azimuth:180.8518552109372},{index:769,time:"2024-12-21T12:49:00Z",altitude:11.365702107883735,azimuth:180.61804101595507},{index:770,time:"2024-12-21T12:50:00Z",altitude:11.365244313680089,azimuth:180.38422674031622},{index:771,time:"2024-12-21T12:51:00Z",altitude:11.364999738412621,azimuth:180.15041225732892},{index:772,time:"2024-12-21T12:52:00Z",altitude:11.364968386332977,azimuth:179.91659791066095},{index:773,time:"2024-12-21T12:53:00Z",altitude:11.36515025769829,azimuth:179.68278357366714},{index:774,time:"2024-12-21T12:54:00Z",altitude:11.365545349569958,azimuth:179.44896927647358},{index:775,time:"2024-12-21T12:55:00Z",altitude:11.366153655578426,azimuth:179.21515504917076},{index:776,time:"2024-12-21T12:56:00Z",altitude:11.366975165923131,azimuth:178.9813409218013},{index:777,time:"2024-12-21T12:57:00Z",altitude:11.368009867372525,azimuth:178.74752692435175},{index:778,time:"2024-12-21T12:58:00Z",altitude:11.36925774326423,azimuth:178.5137130867222},{index:779,time:"2024-12-21T12:59:00Z",altitude:11.370718773505406,azimuth:178.27989943869377},{index:780,time:"2024-12-21T13:00:00Z",altitude:11.372392934572664,azimuth:178.04608600992066},{index:781,time:"2024-12-21T13:01:00Z",altitude:11.374280199512455,azimuth:177.81227282992268},{index:782,time:"2024-12-21T13:02:00Z",altitude:11.376380539421042,azimuth:177.57845977126328},{index:783,time:"2024-12-21T13:03:00Z",altitude:11.378693917668484,azimuth:177.3446471766693},{index:784,time:"2024-12-21T13:04:00Z",altitude:11.381220298349318,azimuth:177.1108349183009},{index:785,time:"2024-12-21T13:05:00Z",altitude:11.38395964079203,azimuth:176.87702302489527},{index:786,time:"2024-12-21T13:06:00Z",altitude:11.386911900896743,azimuth:176.6432115249197},{index:787,time:"2024-12-21T13:07:00Z",altitude:11.390077031135206,azimuth:176.40940044659948},{index:788,time:"2024-12-21T13:08:00Z",altitude:11.39345498055181,azimuth:176.17558981784651},{index:789,time:"2024-12-21T13:09:00Z",altitude:11.397045694763476,azimuth:175.94177966629346},{index:790,time:"2024-12-21T13:10:00Z",altitude:11.40084911596081,azimuth:175.70797001922267},{index:791,time:"2024-12-21T13:11:00Z",altitude:11.404865182908043,azimuth:175.47416090359349},{index:792,time:"2024-12-21T13:12:00Z",altitude:11.40909383094434,azimuth:175.2403523459769},{index:793,time:"2024-12-21T13:13:00Z",altitude:11.413534991983617,azimuth:175.00654437258135},{index:794,time:"2024-12-21T13:14:00Z",altitude:11.418188597707744,azimuth:174.7727368524123},{index:795,time:"2024-12-21T13:15:00Z",altitude:11.423054566942433,azimuth:174.53893012439346},{index:796,time:"2024-12-21T13:16:00Z",altitude:11.428132824380844,azimuth:174.30512405667235},{index:797,time:"2024-12-21T13:17:00Z",altitude:11.433423288244938,azimuth:174.07131867371348},{index:798,time:"2024-12-21T13:18:00Z",altitude:11.438925873335904,azimuth:173.83751399948645},{index:799,time:"2024-12-21T13:19:00Z",altitude:11.44464049103484,azimuth:173.6037100574577},{index:800,time:"2024-12-21T13:20:00Z",altitude:11.450567049303208,azimuth:173.36990687058264},{index:801,time:"2024-12-21T13:21:00Z",altitude:11.456705452684195,azimuth:173.13610446127444},{index:802,time:"2024-12-21T13:22:00Z",altitude:11.463055602303887,azimuth:172.90230285137423},{index:803,time:"2024-12-21T13:23:00Z",altitude:11.469617395872177,azimuth:172.668502062139},{index:804,time:"2024-12-21T13:24:00Z",altitude:11.47639072768322,azimuth:172.43470211424017},{index:805,time:"2024-12-21T13:25:00Z",altitude:11.48337549337151,azimuth:172.20090287095763},{index:806,time:"2024-12-21T13:26:00Z",altitude:11.490571571037433,azimuth:171.9671046652283},{index:807,time:"2024-12-21T13:27:00Z",altitude:11.497978849348836,azimuth:171.73330735903443},{index:808,time:"2024-12-21T13:28:00Z",altitude:11.505597208950274,azimuth:171.49951097045368},{index:809,time:"2024-12-21T13:29:00Z",altitude:11.513426527077353,azimuth:171.2657155168521},{index:810,time:"2024-12-21T13:30:00Z",altitude:11.52146667755765,azimuth:171.03192101488418},{index:811,time:"2024-12-21T13:31:00Z",altitude:11.52971753081163,azimuth:170.79812748047976},{index:812,time:"2024-12-21T13:32:00Z",altitude:11.538178953854446,azimuth:170.56433492881558},{index:813,time:"2024-12-21T13:33:00Z",altitude:11.546850810297851,azimuth:170.33054337428425},{index:814,time:"2024-12-21T13:34:00Z",altitude:11.555732960351232,azimuth:170.0967528304875},{index:815,time:"2024-12-21T13:35:00Z",altitude:11.5648252608227,azimuth:169.862963310228},{index:816,time:"2024-12-21T13:36:00Z",altitude:11.574127571428901,azimuth:169.6291746687177},{index:817,time:"2024-12-21T13:37:00Z",altitude:11.583639729706688,azimuth:169.39538723059164},{index:818,time:"2024-12-21T13:38:00Z",altitude:11.593361588438347,azimuth:169.16160084934734},{index:819,time:"2024-12-21T13:39:00Z",altitude:11.603292990844771,azimuth:168.9278155343607},{index:820,time:"2024-12-21T13:40:00Z",altitude:11.613433776754862,azimuth:168.69403129409318},{index:821,time:"2024-12-21T13:41:00Z",altitude:11.623783782606848,azimuth:168.46024813608474},{index:822,time:"2024-12-21T13:42:00Z",altitude:11.6343428414496,azimuth:168.2264660669466},{index:823,time:"2024-12-21T13:43:00Z",altitude:11.64511078294497,azimuth:167.9926850923333},{index:824,time:"2024-12-21T13:44:00Z",altitude:11.656087433370514,azimuth:167.7589052169075},{index:825,time:"2024-12-21T13:45:00Z",altitude:11.667272615620732,azimuth:167.52512644434123},{index:826,time:"2024-12-21T13:46:00Z",altitude:11.678666149208619,azimuth:167.29134877730374},{index:827,time:"2024-12-21T13:47:00Z",altitude:11.690267858117863,azimuth:167.05757206067256},{index:828,time:"2024-12-21T13:48:00Z",altitude:11.702077539547123,azimuth:166.82379660854969},{index:829,time:"2024-12-21T13:49:00Z",altitude:11.714095010589956,azimuth:166.59002226368628},{index:830,time:"2024-12-21T13:50:00Z",altitude:11.726320077257096,azimuth:166.35624902452497},{index:831,time:"2024-12-21T13:51:00Z",altitude:11.73875254219047,azimuth:166.1224768883871},{index:832,time:"2024-12-21T13:52:00Z",altitude:11.751392204663315,azimuth:165.88870585149596},{index:833,time:"2024-12-21T13:53:00Z",altitude:11.76423886058507,azimuth:165.6549359089147},{index:834,time:"2024-12-21T13:54:00Z",altitude:11.77729230250126,azimuth:165.42116705457488},{index:835,time:"2024-12-21T13:55:00Z",altitude:11.790552319598657,azimuth:165.18739928121312},{index:836,time:"2024-12-21T13:56:00Z",altitude:11.804018697705263,azimuth:164.95363258039927},{index:837,time:"2024-12-21T13:57:00Z",altitude:11.817691219295476,azimuth:164.71986694247528},{index:838,time:"2024-12-21T13:58:00Z",altitude:11.831569663490395,azimuth:164.4861023565784},{index:839,time:"2024-12-21T13:59:00Z",altitude:11.845653815575783,azimuth:164.2523386538391},{index:840,time:"2024-12-21T14:00:00Z",altitude:11.859943429088968,azimuth:164.01857613438733},{index:841,time:"2024-12-21T14:01:00Z",altitude:11.874438282486935,azimuth:163.78481462683075},{index:842,time:"2024-12-21T14:02:00Z",altitude:11.889138141510509,azimuth:163.5510541152389},{index:843,time:"2024-12-21T14:03:00Z",altitude:11.904042768563334,azimuth:163.31729458236296},{index:844,time:"2024-12-21T14:04:00Z",altitude:11.919151922714605,azimuth:163.0835360096259},{index:845,time:"2024-12-21T14:05:00Z",altitude:11.93446535970083,azimuth:162.84977837712455},{index:846,time:"2024-12-21T14:06:00Z",altitude:11.949982831930072,azimuth:162.61602166359683},{index:847,time:"2024-12-21T14:07:00Z",altitude:11.965704088485905,azimuth:162.3822658463956},{index:848,time:"2024-12-21T14:08:00Z",altitude:11.981628875129902,azimuth:162.14851090148323},{index:849,time:"2024-12-21T14:09:00Z",altitude:11.99775693430418,azimuth:161.91475680342745},{index:850,time:"2024-12-21T14:10:00Z",altitude:12.014088016154068,azimuth:161.68100336863495},{index:851,time:"2024-12-21T14:11:00Z",altitude:12.030621834594644,azimuth:161.4472508822741},{index:852,time:"2024-12-21T14:12:00Z",altitude:12.047358133015086,azimuth:161.21349915785876},{index:853,time:"2024-12-21T14:13:00Z",altitude:12.064296640617394,azimuth:160.97974816417246},{index:854,time:"2024-12-21T14:14:00Z",altitude:12.081437083303298,azimuth:160.74599786850195},{index:855,time:"2024-12-21T14:15:00Z",altitude:12.098779183677252,azimuth:160.51224823663307},{index:856,time:"2024-12-21T14:16:00Z",altitude:12.116322661049132,azimuth:160.27849923284694},{index:857,time:"2024-12-21T14:17:00Z",altitude:12.134067231439081,azimuth:160.04475081989304},{index:858,time:"2024-12-21T14:18:00Z",altitude:12.152012607582122,azimuth:159.8110029589637},{index:859,time:"2024-12-21T14:19:00Z",altitude:12.170158498931649,azimuth:159.5772556096861},{index:860,time:"2024-12-21T14:20:00Z",altitude:12.188504611661916,azimuth:159.34350873012536},{index:861,time:"2024-12-21T14:21:00Z",altitude:12.207050661176156,azimuth:159.1097621200182},{index:862,time:"2024-12-21T14:22:00Z",altitude:12.225796322234721,azimuth:158.87601604768471},{index:863,time:"2024-12-21T14:23:00Z",altitude:12.244741303571654,azimuth:158.64227030963386},{index:864,time:"2024-12-21T14:24:00Z",altitude:12.263885298290836,azimuth:158.4085248574757},{index:865,time:"2024-12-21T14:25:00Z",altitude:12.283227996240342,azimuth:158.17477964115554},{index:866,time:"2024-12-21T14:26:00Z",altitude:12.30276908401553,azimuth:157.9410346089575},{index:867,time:"2024-12-21T14:27:00Z",altitude:12.32250824496272,azimuth:157.7072897074978},{index:868,time:"2024-12-21T14:28:00Z",altitude:12.34244515918463,azimuth:157.47354488169967},{index:869,time:"2024-12-21T14:29:00Z",altitude:12.362579503545941,azimuth:157.23980007476834},{index:870,time:"2024-12-21T14:30:00Z",altitude:12.382910951676964,azimuth:157.0060552281886},{index:871,time:"2024-12-21T14:31:00Z",altitude:12.403439173977343,azimuth:156.7723102817224},{index:872,time:"2024-12-21T14:32:00Z",altitude:12.424163851584556,azimuth:156.53856501664464},{index:873,time:"2024-12-21T14:33:00Z",altitude:12.445084620659882,azimuth:156.30481968267546},{index:874,time:"2024-12-21T14:34:00Z",altitude:12.466201155774957,azimuth:156.07107405754235},{index:875,time:"2024-12-21T14:35:00Z",altitude:12.48751311445828,azimuth:155.8373280739414},{index:876,time:"2024-12-21T14:36:00Z",altitude:12.509020151035239,azimuth:155.6035816627445},{index:877,time:"2024-12-21T14:37:00Z",altitude:12.530721916628877,azimuth:155.36983475303285},{index:878,time:"2024-12-21T14:38:00Z",altitude:12.5526180591693,azimuth:155.13608727203754},{index:879,time:"2024-12-21T14:39:00Z",altitude:12.574708223394492,azimuth:154.90233914517412},{index:880,time:"2024-12-21T14:40:00Z",altitude:12.596992050860338,azimuth:154.6685902959793},{index:881,time:"2024-12-21T14:41:00Z",altitude:12.619469179940818,azimuth:154.43484064615166},{index:882,time:"2024-12-21T14:42:00Z",altitude:12.642139245838418,azimuth:154.20109011548826},{index:883,time:"2024-12-21T14:43:00Z",altitude:12.665001880584775,azimuth:153.96733862191977},{index:884,time:"2024-12-21T14:44:00Z",altitude:12.68805672857436,azimuth:153.73358592471206},{index:885,time:"2024-12-21T14:45:00Z",altitude:12.711303384600383,azimuth:153.49983225145593},{index:886,time:"2024-12-21T14:46:00Z",altitude:12.734741486618288,azimuth:153.2660773575881},{index:887,time:"2024-12-21T14:47:00Z",altitude:12.758370654041789,azimuth:153.03232115335692},{index:888,time:"2024-12-21T14:48:00Z",altitude:12.782190503145333,azimuth:152.7985635470496},{index:889,time:"2024-12-21T14:49:00Z",altitude:12.806200647068858,azimuth:152.56480444499283},{index:890,time:"2024-12-21T14:50:00Z",altitude:12.830400695822226,azimuth:152.33104375155327},{index:891,time:"2024-12-21T14:51:00Z",altitude:12.854790256292441,azimuth:152.09728136911482},{index:892,time:"2024-12-21T14:52:00Z",altitude:12.879368932250747,azimuth:151.8635171980563},{index:893,time:"2024-12-21T14:53:00Z",altitude:12.90413632435737,azimuth:151.62975113675247},{index:894,time:"2024-12-21T14:54:00Z",altitude:12.92909203016687,azimuth:151.39598308157073},{index:895,time:"2024-12-21T14:55:00Z",altitude:12.9542356610573,azimuth:151.16221277010334},{index:896,time:"2024-12-21T14:56:00Z",altitude:12.979566774673883,azimuth:150.92844040814285},{index:897,time:"2024-12-21T14:57:00Z",altitude:13.005084976090084,azimuth:150.69466572919785},{index:898,time:"2024-12-21T14:58:00Z",altitude:13.03078985050262,azimuth:150.4608886214702},{index:899,time:"2024-12-21T14:59:00Z",altitude:13.056680980035702,azimuth:150.22710897108394},{index:900,time:"2024-12-21T15:00:00Z",altitude:13.082757943746648,azimuth:149.99332666208187},{index:901,time:"2024-12-21T15:01:00Z",altitude:13.109020317630302,azimuth:149.7595415764345},{index:902,time:"2024-12-21T15:02:00Z",altitude:13.135467674627321,azimuth:149.5257535940139},{index:903,time:"2024-12-21T15:03:00Z",altitude:13.162099584631898,azimuth:149.29196259257404},{index:904,time:"2024-12-21T15:04:00Z",altitude:13.1889156144971,azimuth:149.05816844775254},{index:905,time:"2024-12-21T15:05:00Z",altitude:13.215915328040163,azimuth:148.82437103307325},{index:906,time:"2024-12-21T15:06:00Z",altitude:13.243098304338883,azimuth:148.590570063153},{index:907,time:"2024-12-21T15:07:00Z",altitude:13.270464064709335,azimuth:148.35676572076218},{index:908,time:"2024-12-21T15:08:00Z",altitude:13.298012182071302,azimuth:148.1229577162237},{index:909,time:"2024-12-21T15:09:00Z",altitude:13.325742208171498,azimuth:147.88914591446928},{index:910,time:"2024-12-21T15:10:00Z",altitude:13.353653691757483,azimuth:147.65533017824959},{index:911,time:"2024-12-21T15:11:00Z",altitude:13.381746178583306,azimuth:147.4215103681365},{index:912,time:"2024-12-21T15:12:00Z",altitude:13.410019211415001,azimuth:147.1876863425272},{index:913,time:"2024-12-21T15:13:00Z",altitude:13.43847233003905,azimuth:146.95385795762397},{index:914,time:"2024-12-21T15:14:00Z",altitude:13.467105071270689,azimuth:146.72002506741612},{index:915,time:"2024-12-21T15:15:00Z",altitude:13.495916968960287,azimuth:146.48618752367872},{index:916,time:"2024-12-21T15:16:00Z",altitude:13.52490755399811,azimuth:146.25234517598346},{index:917,time:"2024-12-21T15:17:00Z",altitude:13.55407637394265,azimuth:146.0184977148644},{index:918,time:"2024-12-21T15:18:00Z",altitude:13.583422914671718,azimuth:145.7846452990394},{index:919,time:"2024-12-21T15:19:00Z",altitude:13.612946717745695,azimuth:145.55078761456025},{index:920,time:"2024-12-21T15:20:00Z",altitude:13.642647302293646,azimuth:145.31692450205674},{index:921,time:"2024-12-21T15:21:00Z",altitude:13.672524184526198,azimuth:145.08305579987746},{index:922,time:"2024-12-21T15:22:00Z",altitude:13.702576877736195,azimuth:144.84918134413542},{index:923,time:"2024-12-21T15:23:00Z",altitude:13.732804892312565,azimuth:144.61530096865195},{index:924,time:"2024-12-21T15:24:00Z",altitude:13.763207735741776,azimuth:144.38141450499583},{index:925,time:"2024-12-21T15:25:00Z",altitude:13.793784912621316,azimuth:144.14752178243174},{index:926,time:"2024-12-21T15:26:00Z",altitude:13.824535924661104,azimuth:143.91362262795977},{index:927,time:"2024-12-21T15:27:00Z",altitude:13.855460270697272,azimuth:143.67971686626342},{index:928,time:"2024-12-21T15:28:00Z",altitude:13.886557446693429,azimuth:143.44580431975064},{index:929,time:"2024-12-21T15:29:00Z",altitude:13.917826966780128,azimuth:143.21188465164335},{index:930,time:"2024-12-21T15:30:00Z",altitude:13.949268279271076,azimuth:142.9779579934307},{index:931,time:"2024-12-21T15:31:00Z",altitude:13.980880892479334,azimuth:142.74402400372557},{index:932,time:"2024-12-21T15:32:00Z",altitude:14.01266429096895,azimuth:142.5100824956737},{index:933,time:"2024-12-21T15:33:00Z",altitude:14.044617956474811,azimuth:142.2761332800824},{index:934,time:"2024-12-21T15:34:00Z",altitude:14.076741367908753,azimuth:142.04217616542678},{index:935,time:"2024-12-21T15:35:00Z",altitude:14.109034001365707,azimuth:141.8082109578574},{index:936,time:"2024-12-21T15:36:00Z",altitude:14.14149533013373,azimuth:141.57423746117934},{index:937,time:"2024-12-21T15:37:00Z",altitude:14.174124824702545,azimuth:141.34025547684294},{index:938,time:"2024-12-21T15:38:00Z",altitude:14.206921952770463,azimuth:141.10626480394703},{index:939,time:"2024-12-21T15:39:00Z",altitude:14.239886179250458,azimuth:140.87226523924608},{index:940,time:"2024-12-21T15:40:00Z",altitude:14.273016988551014,azimuth:140.63825642022059},{index:941,time:"2024-12-21T15:41:00Z",altitude:14.306313795612722,azimuth:140.40423845270954},{index:942,time:"2024-12-21T15:42:00Z",altitude:14.339776079205333,azimuth:140.17021096946638},{index:943,time:"2024-12-21T15:43:00Z",altitude:14.373403293186593,azimuth:139.9361737577859},{index:944,time:"2024-12-21T15:44:00Z",altitude:14.407194888672368,azimuth:139.70212660257556},{index:945,time:"2024-12-21T15:45:00Z",altitude:14.441150314042797,azimuth:139.46806928636516},{index:946,time:"2024-12-21T15:46:00Z",altitude:14.475269014948713,azimuth:139.2340015893144},{index:947,time:"2024-12-21T15:47:00Z",altitude:14.509550434321344,azimuth:138.99992328919922},{index:948,time:"2024-12-21T15:48:00Z",altitude:14.543994012382145,azimuth:138.76583416139664},{index:949,time:"2024-12-21T15:49:00Z",altitude:14.57859918664904,azimuth:138.5317339788952},{index:950,time:"2024-12-21T15:50:00Z",altitude:14.613365391943553,azimuth:138.2976225122984},{index:951,time:"2024-12-21T15:51:00Z",altitude:14.648292083872846,azimuth:138.06349937282644},{index:952,time:"2024-12-21T15:52:00Z",altitude:14.683378645054997,azimuth:137.8293646402524},{index:953,time:"2024-12-21T15:53:00Z",altitude:14.718624525640235,azimuth:137.59521792100628},{index:954,time:"2024-12-21T15:54:00Z",altitude:14.754029149750274,azimuth:137.36105897610065},{index:955,time:"2024-12-21T15:55:00Z",altitude:14.78959193885409,azimuth:137.12688756413385},{index:956,time:"2024-12-21T15:56:00Z",altitude:14.825312311774356,azimuth:136.89270344130009},{index:957,time:"2024-12-21T15:57:00Z",altitude:14.861189684694448,azimuth:136.6585063613948},{index:958,time:"2024-12-21T15:58:00Z",altitude:14.897223471167502,azimuth:136.4242960758093},{index:959,time:"2024-12-21T15:59:00Z",altitude:14.93341308212687,azimuth:136.19007233351311},{index:960,time:"2024-12-21T16:00:00Z",altitude:14.969757925892747,azimuth:135.95583488106527},{index:961,time:"2024-12-21T16:01:00Z",altitude:15.006257408178314,azimuth:135.72158346262552},{index:962,time:"2024-12-21T16:02:00Z",altitude:15.042910956729761,azimuth:135.48731766284808},{index:963,time:"2024-12-21T16:03:00Z",altitude:15.079717922919716,azimuth:135.25303753523352},{index:964,time:"2024-12-21T16:04:00Z",altitude:15.116677729224104,azimuth:135.01874265960896},{index:965,time:"2024-12-21T16:05:00Z",altitude:15.153789771017257,azimuth:134.78443277048925},{index:966,time:"2024-12-21T16:06:00Z",altitude:15.19105344111336,azimuth:134.5501075999529},{index:967,time:"2024-12-21T16:07:00Z",altitude:15.228468129767327,azimuth:134.315766877688},{index:968,time:"2024-12-21T16:08:00Z",altitude:15.266033224690446,azimuth:134.08141033094654},{index:969,time:"2024-12-21T16:09:00Z",altitude:15.303748111051178,azimuth:133.8470376845909},{index:970,time:"2024-12-21T16:10:00Z",altitude:15.34161217149078,azimuth:133.61264866104923},{index:971,time:"2024-12-21T16:11:00Z",altitude:15.379624786124745,azimuth:133.3782429803575},{index:972,time:"2024-12-21T16:12:00Z",altitude:15.417785332557482,azimuth:133.14382036012137},{index:973,time:"2024-12-21T16:13:00Z",altitude:15.456093185883804,azimuth:132.90938051555852},{index:974,time:"2024-12-21T16:14:00Z",altitude:15.494547744538714,azimuth:132.67492300223665},{index:975,time:"2024-12-21T16:15:00Z",altitude:15.533148327059891,azimuth:132.44044784497623},{index:976,time:"2024-12-21T16:16:00Z",altitude:15.57189432681128,azimuth:132.2059545945562},{index:977,time:"2024-12-21T16:17:00Z",altitude:15.610785108947404,azimuth:131.97144295655946},{index:978,time:"2024-12-21T16:18:00Z",altitude:15.649820036159161,azimuth:131.7369126341587},{index:979,time:"2024-12-21T16:19:00Z",altitude:15.688998468681248,azimuth:131.5023633281245},{index:980,time:"2024-12-21T16:20:00Z",altitude:15.728319764297881,azimuth:131.26779473684067},{index:981,time:"2024-12-21T16:21:00Z",altitude:15.767783278353237,azimuth:131.0332065562943},{index:982,time:"2024-12-21T16:22:00Z",altitude:15.807388363761413,azimuth:130.79859848006743},{index:983,time:"2024-12-21T16:23:00Z",altitude:15.847134371012887,azimuth:130.56397019935022},{index:984,time:"2024-12-21T16:24:00Z",altitude:15.887020648180272,azimuth:130.32932140295725},{index:985,time:"2024-12-21T16:25:00Z",altitude:15.927046567815022,azimuth:130.09465161995172},{index:986,time:"2024-12-21T16:26:00Z",altitude:15.967211419508072,azimuth:129.8599608490716},{index:987,time:"2024-12-21T16:27:00Z",altitude:16.00751457092675,azimuth:129.62524861463444},{index:988,time:"2024-12-21T16:28:00Z",altitude:16.047955360563382,azimuth:129.3905145959291},{index:989,time:"2024-12-21T16:29:00Z",altitude:16.088533124537502,azimuth:129.1557584698602},{index:990,time:"2024-12-21T16:30:00Z",altitude:16.129247196601916,azimuth:128.92097991096372},{index:991,time:"2024-12-21T16:31:00Z",altitude:16.17009690814878,azimuth:128.68617859142287},{index:992,time:"2024-12-21T16:32:00Z",altitude:16.211081588220377,azimuth:128.4513541810562},{index:993,time:"2024-12-21T16:33:00Z",altitude:16.25220056351802,azimuth:128.21650634731728},{index:994,time:"2024-12-21T16:34:00Z",altitude:16.293453158408923,azimuth:127.98163475530595},{index:995,time:"2024-12-21T16:35:00Z",altitude:16.334838694932042,azimuth:127.74673906778523},{index:996,time:"2024-12-21T16:36:00Z",altitude:16.376356520691537,azimuth:127.51181878764369},{index:997,time:"2024-12-21T16:37:00Z",altitude:16.418005897421985,azimuth:127.2768738879914},{index:998,time:"2024-12-21T16:38:00Z",altitude:16.459786168027126,azimuth:127.0419038670584},{index:999,time:"2024-12-21T16:39:00Z",altitude:16.501696645320948,azimuth:126.80690837826427},{index:1e3,time:"2024-12-21T16:40:00Z",altitude:16.54373663983347,azimuth:126.57188707269259},{index:1001,time:"2024-12-21T16:41:00Z",altitude:16.585905459816495,azimuth:126.33683959910884},{index:1002,time:"2024-12-21T16:42:00Z",altitude:16.62820241124943,azimuth:126.10176560397802},{index:1003,time:"2024-12-21T16:43:00Z",altitude:16.670626797849224,azimuth:125.86666473145851},{index:1004,time:"2024-12-21T16:44:00Z",altitude:16.713177921080483,azimuth:125.63153662339644},{index:1005,time:"2024-12-21T16:45:00Z",altitude:16.75585508016101,azimuth:125.39638091934505},{index:1006,time:"2024-12-21T16:46:00Z",altitude:16.798657572068382,azimuth:125.16119725657705},{index:1007,time:"2024-12-21T16:47:00Z",altitude:16.841584720375565,azimuth:124.92598511235312},{index:1008,time:"2024-12-21T16:48:00Z",altitude:16.884635760036833,azimuth:124.69074443482855},{index:1009,time:"2024-12-21T16:49:00Z",altitude:16.92781001010588,azimuth:124.45547469672688},{index:1010,time:"2024-12-21T16:50:00Z",altitude:16.97110675868208,azimuth:124.22017552624227},{index:1011,time:"2024-12-21T16:51:00Z",altitude:17.014525291669422,azimuth:123.98484654929152},{index:1012,time:"2024-12-21T16:52:00Z",altitude:17.058064892775388,azimuth:123.7494873895686},{index:1013,time:"2024-12-21T16:53:00Z",altitude:17.10172484352824,azimuth:123.51409766850102},{index:1014,time:"2024-12-21T16:54:00Z",altitude:17.14550442327474,azimuth:123.27867700531071},{index:1015,time:"2024-12-21T16:55:00Z",altitude:17.189402909197355,azimuth:123.04322501697125},{index:1016,time:"2024-12-21T16:56:00Z",altitude:17.233419576313064,azimuth:122.80774131826266},{index:1017,time:"2024-12-21T16:57:00Z",altitude:17.277553697489623,azimuth:122.57222552173354},{index:1018,time:"2024-12-21T16:58:00Z",altitude:17.321804543444596,azimuth:122.33667723775531},{index:1019,time:"2024-12-21T16:59:00Z",altitude:17.366171412549694,azimuth:122.10109591650877},{index:1020,time:"2024-12-21T17:00:00Z",altitude:17.410653511755307,azimuth:121.86548147991445},{index:1021,time:"2024-12-21T17:01:00Z",altitude:17.45525013509953,azimuth:121.62983337382902},{index:1022,time:"2024-12-21T17:02:00Z",altitude:17.499960544793126,azimuth:121.39415119990369},{index:1023,time:"2024-12-21T17:03:00Z",altitude:17.544784000940975,azimuth:121.15843455762145},{index:1024,time:"2024-12-21T17:04:00Z",altitude:17.589719761547315,azimuth:120.92268304431813},{index:1025,time:"2024-12-21T17:05:00Z",altitude:17.634767082520966,azimuth:120.68689625520352},{index:1026,time:"2024-12-21T17:06:00Z",altitude:17.679925217684794,azimuth:120.45107378336037},{index:1027,time:"2024-12-21T17:07:00Z",altitude:17.72519341878635,azimuth:120.21521521973774},{index:1028,time:"2024-12-21T17:08:00Z",altitude:17.77057093550153,azimuth:119.97932015318004},{index:1029,time:"2024-12-21T17:09:00Z",altitude:17.816057015440744,azimuth:119.74338817044338},{index:1030,time:"2024-12-21T17:10:00Z",altitude:17.861650934766573,azimuth:119.507418697957},{index:1031,time:"2024-12-21T17:11:00Z",altitude:17.907351875842537,azimuth:119.27141163474634},{index:1032,time:"2024-12-21T17:12:00Z",altitude:17.95315911066883,azimuth:119.035366403121},{index:1033,time:"2024-12-21T17:13:00Z",altitude:17.99907187867484,azimuth:118.79928258154911},{index:1034,time:"2024-12-21T17:14:00Z",altitude:18.045089417265938,azimuth:118.56315974643819},{index:1035,time:"2024-12-21T17:15:00Z",altitude:18.09121096182706,azimuth:118.32699747216519},{index:1036,time:"2024-12-21T17:16:00Z",altitude:18.1374357457286,azimuth:118.09079533109441},{index:1037,time:"2024-12-21T17:17:00Z",altitude:18.18376300033564,azimuth:117.85455289357853},{index:1038,time:"2024-12-21T17:18:00Z",altitude:18.230191955017425,azimuth:117.61826972795868},{index:1039,time:"2024-12-21T17:19:00Z",altitude:18.27672183715222,azimuth:117.38194540058812},{index:1040,time:"2024-12-21T17:20:00Z",altitude:18.323351872131877,azimuth:117.1455794758566},{index:1041,time:"2024-12-21T17:21:00Z",altitude:18.370081314739217,azimuth:116.90917135765149},{index:1042,time:"2024-12-21T17:22:00Z",altitude:18.416909323755167,azimuth:116.67272092347005},{index:1043,time:"2024-12-21T17:23:00Z",altitude:18.463835149963437,azimuth:116.4362275733398},{index:1044,time:"2024-12-21T17:24:00Z",altitude:18.51085801089164,azimuth:116.19969086386784},{index:1045,time:"2024-12-21T17:25:00Z",altitude:18.557977122121237,azimuth:115.96311034973608},{index:1046,time:"2024-12-21T17:26:00Z",altitude:18.605191697292156,azimuth:115.72648558372565},{index:1047,time:"2024-12-21T17:27:00Z",altitude:18.652500948107264,azimuth:115.48981611674323},{index:1048,time:"2024-12-21T17:28:00Z",altitude:18.699904084342585,azimuth:115.2531014978176},{index:1049,time:"2024-12-21T17:29:00Z",altitude:18.747400313855167,azimuth:115.0163412741091},{index:1050,time:"2024-12-21T17:30:00Z",altitude:18.794988842588616,azimuth:114.77953499092995},{index:1051,time:"2024-12-21T17:31:00Z",altitude:18.84266887457742,azimuth:114.54268219177122},{index:1052,time:"2024-12-21T17:32:00Z",altitude:18.890439644019644,azimuth:114.30578225943326},{index:1053,time:"2024-12-21T17:33:00Z",altitude:18.938300287092016,azimuth:114.06883505148478},{index:1054,time:"2024-12-21T17:34:00Z",altitude:18.986250034155695,azimuth:113.83183994714913},{index:1055,time:"2024-12-21T17:35:00Z",altitude:19.0342880816853,azimuth:113.59479648273519},{index:1056,time:"2024-12-21T17:36:00Z",altitude:19.08241362428791,azimuth:113.35770419276653},{index:1057,time:"2024-12-21T17:37:00Z",altitude:19.130625854700043,azimuth:113.12056261004447},{index:1058,time:"2024-12-21T17:38:00Z",altitude:19.178923963804085,azimuth:112.8833712656164},{index:1059,time:"2024-12-21T17:39:00Z",altitude:19.227307140625438,azimuth:112.64612968883749},{index:1060,time:"2024-12-21T17:40:00Z",altitude:19.275774572348773,azimuth:112.40883740734016},{index:1061,time:"2024-12-21T17:41:00Z",altitude:19.32432544431504,azimuth:112.17149394709709},{index:1062,time:"2024-12-21T17:42:00Z",altitude:19.37295894003867,azimuth:111.93409883238606},{index:1063,time:"2024-12-21T17:43:00Z",altitude:19.42167424120321,azimuth:111.69665158585943},{index:1064,time:"2024-12-21T17:44:00Z",altitude:19.470470560425365,azimuth:111.45915156923897},{index:1065,time:"2024-12-21T17:45:00Z",altitude:19.519347010319557,azimuth:111.22159862041995},{index:1066,time:"2024-12-21T17:46:00Z",altitude:19.568302799828693,azimuth:110.98399209794887},{index:1067,time:"2024-12-21T17:47:00Z",altitude:19.617337103403116,azimuth:110.74633151802716},{index:1068,time:"2024-12-21T17:48:00Z",altitude:19.66644909370325,azimuth:110.50861639527677},{index:1069,time:"2024-12-21T17:49:00Z",altitude:19.715637941604843,azimuth:110.27084624276416},{index:1070,time:"2024-12-21T17:50:00Z",altitude:19.764902816201584,azimuth:110.03302057203658},{index:1071,time:"2024-12-21T17:51:00Z",altitude:19.81424288481512,azimuth:109.79513889312328},{index:1072,time:"2024-12-21T17:52:00Z",altitude:19.863657313003888,azimuth:109.55720071454236},{index:1073,time:"2024-12-21T17:53:00Z",altitude:19.913145264567152,azimuth:109.31920554333117},{index:1074,time:"2024-12-21T17:54:00Z",altitude:19.962705901549196,azimuth:109.08115288507516},{index:1075,time:"2024-12-21T17:55:00Z",altitude:20.0123384175524,azimuth:108.84304208423433},{index:1076,time:"2024-12-21T17:56:00Z",altitude:20.062041904578294,azimuth:108.60487296282749},{index:1077,time:"2024-12-21T17:57:00Z",altitude:20.111815552708947,azimuth:108.36664486251964},{index:1078,time:"2024-12-21T17:58:00Z",altitude:20.161658517043698,azimuth:108.12835728322888},{index:1079,time:"2024-12-21T17:59:00Z",altitude:20.211569950964513,azimuth:107.89000972349167},{index:1080,time:"2024-12-21T18:00:00Z",altitude:20.26154900613992,azimuth:107.65160168049401},{index:1081,time:"2024-12-21T18:01:00Z",altitude:20.311594832529078,azimuth:107.41313265010265},{index:1082,time:"2024-12-21T18:02:00Z",altitude:20.361706578390496,azimuth:107.1746021268741},{index:1083,time:"2024-12-21T18:03:00Z",altitude:20.411883390292022,azimuth:106.93600960405816},{index:1084,time:"2024-12-21T18:04:00Z",altitude:20.46212441311333,azimuth:106.69735457363653},{index:1085,time:"2024-12-21T18:05:00Z",altitude:20.512428790050937,azimuth:106.45863652635032},{index:1086,time:"2024-12-21T18:06:00Z",altitude:20.562795696420533,azimuth:106.21985479157624},{index:1087,time:"2024-12-21T18:07:00Z",altitude:20.613224204533736,azimuth:105.98100917782057},{index:1088,time:"2024-12-21T18:08:00Z",altitude:20.663713486335208,azimuth:105.74209901210313},{index:1089,time:"2024-12-21T18:09:00Z",altitude:20.714262678362328,azimuth:105.50312378036732},{index:1090,time:"2024-12-21T18:10:00Z",altitude:20.764870915507235,azimuth:105.26408296739397},{index:1091,time:"2024-12-21T18:11:00Z",altitude:20.815537331019307,azimuth:105.02497605684182},{index:1092,time:"2024-12-21T18:12:00Z",altitude:20.866261056510083,azimuth:104.7858025312759},{index:1093,time:"2024-12-21T18:13:00Z",altitude:20.91704122196208,azimuth:104.54656187217893},{index:1094,time:"2024-12-21T18:14:00Z",altitude:20.9678769557378,azimuth:104.30725355996155},{index:1095,time:"2024-12-21T18:15:00Z",altitude:21.018767384583665,azimuth:104.06787707399623},{index:1096,time:"2024-12-21T18:16:00Z",altitude:21.06971163363376,azimuth:103.82843189265276},{index:1097,time:"2024-12-21T18:17:00Z",altitude:21.120708860634252,azimuth:103.58891733267146},{index:1098,time:"2024-12-21T18:18:00Z",altitude:21.171758119128132,azimuth:103.34933319166527},{index:1099,time:"2024-12-21T18:19:00Z",altitude:21.222858563641847,azimuth:103.1096787844943},{index:1100,time:"2024-12-21T18:20:00Z",altitude:21.27400931293542,azimuth:102.86995358569825},{index:1101,time:"2024-12-21T18:21:00Z",altitude:21.32520948419707,azimuth:102.63015706889277},{index:1102,time:"2024-12-21T18:22:00Z",altitude:21.376458193039507,azimuth:102.39028870683997},{index:1103,time:"2024-12-21T18:23:00Z",altitude:21.42775455351649,azimuth:102.15034797142654},{index:1104,time:"2024-12-21T18:24:00Z",altitude:21.479097678120237,azimuth:101.91033433373003},{index:1105,time:"2024-12-21T18:25:00Z",altitude:21.53048667779664,azimuth:101.67024726400324},{index:1106,time:"2024-12-21T18:26:00Z",altitude:21.581920661942743,azimuth:101.43008623174087},{index:1107,time:"2024-12-21T18:27:00Z",altitude:21.63339873842319,azimuth:101.18985070565846},{index:1108,time:"2024-12-21T18:28:00Z",altitude:21.684920013566828,azimuth:100.94954015376422},{index:1109,time:"2024-12-21T18:29:00Z",altitude:21.736483626772735,azimuth:100.7091538821237},{index:1110,time:"2024-12-21T18:30:00Z",altitude:21.788088612178058,azimuth:100.46869167972991},{index:1111,time:"2024-12-21T18:31:00Z",altitude:21.83973410612353,azimuth:100.2281528513732},{index:1112,time:"2024-12-21T18:32:00Z",altitude:21.891419208882574,azimuth:99.98753686238678},{index:1113,time:"2024-12-21T18:33:00Z",altitude:21.943143019234096,azimuth:99.74684317748768},{index:1114,time:"2024-12-21T18:34:00Z",altitude:21.99490463446644,azimuth:99.50607126081566},{index:1115,time:"2024-12-21T18:35:00Z",altitude:22.046703150381575,azimuth:99.2652205759716},{index:1116,time:"2024-12-21T18:36:00Z",altitude:22.098537661304476,azimuth:99.02429058603207},{index:1117,time:"2024-12-21T18:37:00Z",altitude:22.15040726009221,azimuth:98.78328075356569},{index:1118,time:"2024-12-21T18:38:00Z",altitude:22.202311038139385,azimuth:98.54219054066695},{index:1119,time:"2024-12-21T18:39:00Z",altitude:22.254248085380745,azimuth:98.30101940900252},{index:1120,time:"2024-12-21T18:40:00Z",altitude:22.30621752515985,azimuth:98.05976665802574},{index:1121,time:"2024-12-21T18:41:00Z",altitude:22.358218374828066,azimuth:97.818432072118},{index:1122,time:"2024-12-21T18:42:00Z",altitude:22.410249754829305,azimuth:97.57701495003887},{index:1123,time:"2024-12-21T18:43:00Z",altitude:22.462310749342212,azimuth:97.33551475195739},{index:1124,time:"2024-12-21T18:44:00Z",altitude:22.514400441126057,azimuth:97.09393093772795},{index:1125,time:"2024-12-21T18:45:00Z",altitude:22.56651791152642,azimuth:96.85226296692576},{index:1126,time:"2024-12-21T18:46:00Z",altitude:22.61866224047806,azimuth:96.61051029889497},{index:1127,time:"2024-12-21T18:47:00Z",altitude:22.670832506515666,azimuth:96.36867239276062},{index:1128,time:"2024-12-21T18:48:00Z",altitude:22.72302778678341,azimuth:96.12674870744729},{index:1129,time:"2024-12-21T18:49:00Z",altitude:22.77524715703952,azimuth:95.88473870172037},{index:1130,time:"2024-12-21T18:50:00Z",altitude:22.82748969166099,azimuth:95.64264183422743},{index:1131,time:"2024-12-21T18:51:00Z",altitude:22.879754498705918,azimuth:95.40045740109437},{index:1132,time:"2024-12-21T18:52:00Z",altitude:22.932040579728753,azimuth:95.15818518556603},{index:1133,time:"2024-12-21T18:53:00Z",altitude:22.984347040052324,azimuth:94.91582448371778},{index:1134,time:"2024-12-21T18:54:00Z",altitude:23.03667294861228,azimuth:94.6733747539791},{index:1135,time:"2024-12-21T18:55:00Z",altitude:23.089017373005095,azimuth:94.43083545478926},{index:1136,time:"2024-12-21T18:56:00Z",altitude:23.141379379493035,azimuth:94.18820604464014},{index:1137,time:"2024-12-21T18:57:00Z",altitude:23.193758033009065,azimuth:93.94548598211922},{index:1138,time:"2024-12-21T18:58:00Z",altitude:23.246152397166778,azimuth:93.70267472593042},{index:1139,time:"2024-12-21T18:59:00Z",altitude:23.298561534271748,azimuth:93.45977173490866},{index:1140,time:"2024-12-21T19:00:00Z",altitude:23.35098450532512,azimuth:93.2167764680712},{index:1141,time:"2024-12-21T19:01:00Z",altitude:23.40342037002971,azimuth:92.97368838465644},{index:1142,time:"2024-12-21T19:02:00Z",altitude:23.45586822197361,azimuth:92.73050678104603},{index:1143,time:"2024-12-21T19:03:00Z",altitude:23.5083270479543,azimuth:92.48723144312092},{index:1144,time:"2024-12-21T19:04:00Z",altitude:23.560795939002283,azimuth:92.24386166789692},{index:1145,time:"2024-12-21T19:05:00Z",altitude:23.613273949713918,azimuth:92.00039691578682},{index:1146,time:"2024-12-21T19:06:00Z",altitude:23.66576013343535,azimuth:91.75683664755002},{index:1147,time:"2024-12-21T19:07:00Z",altitude:23.718253542258587,azimuth:91.51318032438095},{index:1148,time:"2024-12-21T19:08:00Z",altitude:23.770753227041215,azimuth:91.26942740789009},{index:1149,time:"2024-12-21T19:09:00Z",altitude:23.823258237403866,azimuth:91.0255773601867},{index:1150,time:"2024-12-21T19:10:00Z",altitude:23.875767621749016,azimuth:90.78162964386519},{index:1151,time:"2024-12-21T19:11:00Z",altitude:23.92828042725893,azimuth:90.5375837220871},{index:1152,time:"2024-12-21T19:12:00Z",altitude:23.980795699914243,azimuth:90.29343905856915},{index:1153,time:"2024-12-21T19:13:00Z",altitude:24.033312484493138,azimuth:90.04919511766072},{index:1154,time:"2024-12-21T19:14:00Z",altitude:24.085829859803503,azimuth:89.80485120046315},{index:1155,time:"2024-12-21T19:15:00Z",altitude:24.138346797823775,azimuth:89.56040710033558},{index:1156,time:"2024-12-21T19:16:00Z",altitude:24.190862375006578,azimuth:89.3158621198579},{index:1157,time:"2024-12-21T19:17:00Z",altitude:24.243375631425184,azimuth:89.07121572617785},{index:1158,time:"2024-12-21T19:18:00Z",altitude:24.29588560600108,azimuth:88.82646738722075},{index:1159,time:"2024-12-21T19:19:00Z",altitude:24.348391336509973,azimuth:88.58161657173864},{index:1160,time:"2024-12-21T19:20:00Z",altitude:24.40089185958943,azimuth:88.33666274935383},{index:1161,time:"2024-12-21T19:21:00Z",altitude:24.453386210748892,azimuth:88.09160539059077},{index:1162,time:"2024-12-21T19:22:00Z",altitude:24.50587342438258,azimuth:87.84644396689582},{index:1163,time:"2024-12-21T19:23:00Z",altitude:24.55835253377586,azimuth:87.60117795068743},{index:1164,time:"2024-12-21T19:24:00Z",altitude:24.610822571112116,azimuth:87.35580681540547},{index:1165,time:"2024-12-21T19:25:00Z",altitude:24.663282602657503,azimuth:87.11032987089943},{index:1166,time:"2024-12-21T19:26:00Z",altitude:24.715731588075244,azimuth:86.86474692192617},{index:1167,time:"2024-12-21T19:27:00Z",altitude:24.76816859148778,azimuth:86.6190572806103},{index:1168,time:"2024-12-21T19:28:00Z",altitude:24.820592640775878,azimuth:86.37326042480659},{index:1169,time:"2024-12-21T19:29:00Z",altitude:24.873002762771787,azimuth:86.12735583355506},{index:1170,time:"2024-12-21T19:30:00Z",altitude:24.925397983266443,azimuth:85.88134298713291},{index:1171,time:"2024-12-21T19:31:00Z",altitude:24.977777327016774,azimuth:85.63522136710523},{index:1172,time:"2024-12-21T19:32:00Z",altitude:25.030139817758442,azimuth:85.38899045635188},{index:1173,time:"2024-12-21T19:33:00Z",altitude:25.082484478218326,azimuth:85.142649739096},{index:1174,time:"2024-12-21T19:34:00Z",altitude:25.134810330123354,azimuth:84.89619870095026},{index:1175,time:"2024-12-21T19:35:00Z",altitude:25.187116394206654,azimuth:84.64963682897623},{index:1176,time:"2024-12-21T19:36:00Z",altitude:25.239401725273787,azimuth:84.40296344626587},{index:1177,time:"2024-12-21T19:37:00Z",altitude:25.291665271993804,azimuth:84.1561783736542},{index:1178,time:"2024-12-21T19:38:00Z",altitude:25.343906087258645,azimuth:83.90928093737396},{index:1179,time:"2024-12-21T19:39:00Z",altitude:25.3961231879462,azimuth:83.66227063061793},{index:1180,time:"2024-12-21T19:40:00Z",altitude:25.44831558999982,azimuth:83.4151469482022},{index:1181,time:"2024-12-21T19:41:00Z",altitude:25.500482308437835,azimuth:83.16790938661435},{index:1182,time:"2024-12-21T19:42:00Z",altitude:25.552622357360573,azimuth:82.92055744407406},{index:1183,time:"2024-12-21T19:43:00Z",altitude:25.604734749965182,azimuth:82.6730906205574},{index:1184,time:"2024-12-21T19:44:00Z",altitude:25.656818498559428,azimuth:82.42550841782737},{index:1185,time:"2024-12-21T19:45:00Z",altitude:25.70887261457045,azimuth:82.17781033948789},{index:1186,time:"2024-12-21T19:46:00Z",altitude:25.76089610855396,azimuth:81.92999589103775},{index:1187,time:"2024-12-21T19:47:00Z",altitude:25.812888025061156,azimuth:81.68206441360927},{index:1188,time:"2024-12-21T19:48:00Z",altitude:25.864847303220095,azimuth:81.43401574908533},{index:1189,time:"2024-12-21T19:49:00Z",altitude:25.91677298592737,azimuth:81.18584924264174},{index:1190,time:"2024-12-21T19:50:00Z",altitude:25.96866408038007,azimuth:80.93756440773801},{index:1191,time:"2024-12-21T19:51:00Z",altitude:26.020519592971482,azimuth:80.68916075990492},{index:1192,time:"2024-12-21T19:52:00Z",altitude:26.072338529292928,azimuth:80.44063781683622},{index:1193,time:"2024-12-21T19:53:00Z",altitude:26.124119894156625,azimuth:80.1919950983834},{index:1194,time:"2024-12-21T19:54:00Z",altitude:26.17586269159777,azimuth:79.9432321266491},{index:1195,time:"2024-12-21T19:55:00Z",altitude:26.227565924898492,azimuth:79.69434842597713},{index:1196,time:"2024-12-21T19:56:00Z",altitude:26.279228596588975,azimuth:79.44534352305273},{index:1197,time:"2024-12-21T19:57:00Z",altitude:26.330849708471778,azimuth:79.19621694689285},{index:1198,time:"2024-12-21T19:58:00Z",altitude:26.382428261624323,azimuth:78.94696822894048},{index:1199,time:"2024-12-21T19:59:00Z",altitude:26.433963290963867,azimuth:78.69759673580634},{index:1200,time:"2024-12-21T20:00:00Z",altitude:26.485453727056427,azimuth:78.44810233828986},{index:1201,time:"2024-12-21T20:01:00Z",altitude:26.536898603473023,azimuth:78.19848440812413},{index:1202,time:"2024-12-21T20:02:00Z",altitude:26.588296918547364,azimuth:77.948742486797},{index:1203,time:"2024-12-21T20:03:00Z",altitude:26.63964766996277,azimuth:77.69887611841389},{index:1204,time:"2024-12-21T20:04:00Z",altitude:26.690949854764593,azimuth:77.44888484975034},{index:1205,time:"2024-12-21T20:05:00Z",altitude:26.742202469371605,azimuth:77.19876823031105},{index:1206,time:"2024-12-21T20:06:00Z",altitude:26.79340450959286,azimuth:76.94852581236341},{index:1207,time:"2024-12-21T20:07:00Z",altitude:26.844554970644516,azimuth:76.69815715097118},{index:1208,time:"2024-12-21T20:08:00Z",altitude:26.89565284716197,azimuth:76.44766180405281},{index:1209,time:"2024-12-21T20:09:00Z",altitude:26.946697133211803,azimuth:76.19703933244122},{index:1210,time:"2024-12-21T20:10:00Z",altitude:26.997686856482144,azimuth:75.94628913173258},{index:1211,time:"2024-12-21T20:11:00Z",altitude:27.048620941574466,azimuth:75.69541110495716},{index:1212,time:"2024-12-21T20:12:00Z",altitude:27.09949841515623,azimuth:75.44440465383397},{index:1213,time:"2024-12-21T20:13:00Z",altitude:27.1503182691804,azimuth:75.19326935126408},{index:1214,time:"2024-12-21T20:14:00Z",altitude:27.201079495112324,azimuth:74.94200477327084},{index:1215,time:"2024-12-21T20:15:00Z",altitude:27.2517810839427,azimuth:74.6906104990606},{index:1216,time:"2024-12-21T20:16:00Z",altitude:27.302422026201874,azimuth:74.43908611107724},{index:1217,time:"2024-12-21T20:17:00Z",altitude:27.35300131197678,azimuth:74.18743119504506},{index:1218,time:"2024-12-21T20:18:00Z",altitude:27.403517930930708,azimuth:73.93564533999887},{index:1219,time:"2024-12-21T20:19:00Z",altitude:27.453970872316773,azimuth:73.68372813834539},{index:1220,time:"2024-12-21T20:20:00Z",altitude:27.504359124992014,azimuth:73.43167918592341},{index:1221,time:"2024-12-21T20:21:00Z",altitude:27.55468171115732,azimuth:73.17949791289827},{index:1222,time:"2024-12-21T20:22:00Z",altitude:27.60493755144917,azimuth:72.92718426026896},{index:1223,time:"2024-12-21T20:23:00Z",altitude:27.65512566741009,azimuth:72.67473766536702},{index:1224,time:"2024-12-21T20:24:00Z",altitude:27.70524504649057,azimuth:72.42215773819309},{index:1225,time:"2024-12-21T20:25:00Z",altitude:27.755294675835213,azimuth:72.16944409239527},{index:1226,time:"2024-12-21T20:26:00Z",altitude:27.805273542297517,azimuth:71.91659634533124},{index:1227,time:"2024-12-21T20:27:00Z",altitude:27.85518063245506,azimuth:71.66361411812953},{index:1228,time:"2024-12-21T20:28:00Z",altitude:27.905014932629886,azimuth:71.41049703572592},{index:1229,time:"2024-12-21T20:29:00Z",altitude:27.95477542890883,azimuth:71.15724472690123},{index:1230,time:"2024-12-21T20:30:00Z",altitude:28.004461107160232,azimuth:70.90385682433758},{index:1231,time:"2024-12-21T20:31:00Z",altitude:28.054070953048324,azimuth:70.65033296468773},{index:1232,time:"2024-12-21T20:32:00Z",altitude:28.103603985244398,azimuth:70.3966726184659},{index:1233,time:"2024-12-21T20:33:00Z",altitude:28.153059122639274,azimuth:70.14287577055715},{index:1234,time:"2024-12-21T20:34:00Z",altitude:28.202435383650666,azimuth:69.88894189970985},{index:1235,time:"2024-12-21T20:35:00Z",altitude:28.251731753326403,azimuth:69.63487065889186},{index:1236,time:"2024-12-21T20:36:00Z",altitude:28.300947216613004,azimuth:69.38066170524857},{index:1237,time:"2024-12-21T20:37:00Z",altitude:28.350080758366442,azimuth:69.12631470019724},{index:1238,time:"2024-12-21T20:38:00Z",altitude:28.399131363380057,azimuth:68.87182930943446},{index:1239,time:"2024-12-21T20:39:00Z",altitude:28.448098016395754,azimuth:68.61720520303058},{index:1240,time:"2024-12-21T20:40:00Z",altitude:28.49697970213364,azimuth:68.36244205543096},{index:1241,time:"2024-12-21T20:41:00Z",altitude:28.545775405302507,azimuth:68.10753954555558},{index:1242,time:"2024-12-21T20:42:00Z",altitude:28.594484110630095,azimuth:67.85249735679913},{index:1243,time:"2024-12-21T20:43:00Z",altitude:28.643104802874042,azimuth:67.59731517713064},{index:1244,time:"2024-12-21T20:44:00Z",altitude:28.691636499364474,azimuth:67.34199252784448},{index:1245,time:"2024-12-21T20:45:00Z",altitude:28.740078119907928,azimuth:67.08652944855626},{index:1246,time:"2024-12-21T20:46:00Z",altitude:28.78842868206687,azimuth:66.83092547001576},{index:1247,time:"2024-12-21T20:47:00Z",altitude:28.836687170949943,azimuth:66.57518029888344},{index:1248,time:"2024-12-21T20:48:00Z",altitude:28.884852571809418,azimuth:66.31929364660655},{index:1249,time:"2024-12-21T20:49:00Z",altitude:28.932923870060524,azimuth:66.06326522948184},{index:1250,time:"2024-12-21T20:50:00Z",altitude:28.980900051300914,azimuth:65.80709476871931},{index:1251,time:"2024-12-21T20:51:00Z",altitude:29.028780101336352,azimuth:65.55078199047453},{index:1252,time:"2024-12-21T20:52:00Z",altitude:29.076563006204147,azimuth:65.29432662589402},{index:1253,time:"2024-12-21T20:53:00Z",altitude:29.124247752194282,azimuth:65.03772841117237},{index:1254,time:"2024-12-21T20:54:00Z",altitude:29.171833325869823,azimuth:64.78098708761628},{index:1255,time:"2024-12-21T20:55:00Z",altitude:29.219318745899244,azimuth:64.52410222938288},{index:1256,time:"2024-12-21T20:56:00Z",altitude:29.266702935787375,azimuth:64.26707393261037},{index:1257,time:"2024-12-21T20:57:00Z",altitude:29.31398491493708,azimuth:64.00990178200205},{index:1258,time:"2024-12-21T20:58:00Z",altitude:29.36116367124649,azimuth:63.752585539759046},{index:1259,time:"2024-12-21T20:59:00Z",altitude:29.40823819300827,azimuth:63.495124973422705},{index:1260,time:"2024-12-21T21:00:00Z",altitude:29.45520746893239,azimuth:63.23751985593167},{index:1261,time:"2024-12-21T21:01:00Z",altitude:29.502070488167867,azimuth:62.979769965685406},{index:1262,time:"2024-12-21T21:02:00Z",altitude:29.548826240329632,azimuth:62.72187508658118},{index:1263,time:"2024-12-21T21:03:00Z",altitude:29.595473715525618,azimuth:62.46383500805102},{index:1264,time:"2024-12-21T21:04:00Z",altitude:29.642011904379423,azimuth:62.20564952512367},{index:1265,time:"2024-12-21T21:05:00Z",altitude:29.688439798052865,azimuth:61.94731843848793},{index:1266,time:"2024-12-21T21:06:00Z",altitude:29.734756419294154,azimuth:61.68884138115658},{index:1267,time:"2024-12-21T21:07:00Z",altitude:29.780960698312,azimuth:61.43021851187612},{index:1268,time:"2024-12-21T21:08:00Z",altitude:29.82705165913851,azimuth:61.171449475297756},{index:1269,time:"2024-12-21T21:09:00Z",altitude:29.873028295354978,azimuth:60.91253409518464},{index:1270,time:"2024-12-21T21:10:00Z",altitude:29.918889601214804,azimuth:60.65347220117836},{index:1271,time:"2024-12-21T21:11:00Z",altitude:29.96463457166748,azimuth:60.39426362886167},{index:1272,time:"2024-12-21T21:12:00Z",altitude:30.010262202383846,azimuth:60.134908219814285},{index:1273,time:"2024-12-21T21:13:00Z",altitude:30.055771489783847,azimuth:59.87540582165655},{index:1274,time:"2024-12-21T21:14:00Z",altitude:30.101161431066817,azimuth:59.61575628807954},{index:1275,time:"2024-12-21T21:15:00Z",altitude:30.146431024236307,azimuth:59.35595947890721},{index:1276,time:"2024-12-21T21:16:00Z",altitude:30.191579268125235,azimuth:59.0960152601569},{index:1277,time:"2024-12-21T21:17:00Z",altitude:30.236605192577407,azimuth:58.83592332961713},{index:1278,time:"2024-12-21T21:18:00Z",altitude:30.28150773778865,azimuth:58.5756839146134},{index:1279,time:"2024-12-21T21:19:00Z",altitude:30.326285935490603,azimuth:58.31529672561674},{index:1280,time:"2024-12-21T21:20:00Z",altitude:30.370938788121002,azimuth:58.05476165384984},{index:1281,time:"2024-12-21T21:21:00Z",altitude:30.415465299094535,azimuth:57.79407859692551},{index:1282,time:"2024-12-21T21:22:00Z",altitude:30.45986447282274,azimuth:57.533247458945986},{index:1283,time:"2024-12-21T21:23:00Z",altitude:30.50413531475171,azimuth:57.27226815049797},{index:1284,time:"2024-12-21T21:24:00Z",altitude:30.54827683138247,azimuth:57.011140588750195},{index:1285,time:"2024-12-21T21:25:00Z",altitude:30.592288030309266,azimuth:56.749864697448054},{index:1286,time:"2024-12-21T21:26:00Z",altitude:30.636167920240133,azimuth:56.488440407011936},{index:1287,time:"2024-12-21T21:27:00Z",altitude:30.679915511036373,azimuth:56.22686765452594},{index:1288,time:"2024-12-21T21:28:00Z",altitude:30.723529813732583,azimuth:55.96514638384242},{index:1289,time:"2024-12-21T21:29:00Z",altitude:30.76700986968615,azimuth:55.70327636992677},{index:1290,time:"2024-12-21T21:30:00Z",altitude:30.810354634070027,azimuth:55.441257921422334},{index:1291,time:"2024-12-21T21:31:00Z",altitude:30.853563150838443,azimuth:55.179090827107295},{index:1292,time:"2024-12-21T21:32:00Z",altitude:30.896634436044856,azimuth:54.91677505822783},{index:1293,time:"2024-12-21T21:33:00Z",altitude:30.939567507077122,azimuth:54.65431059297316},{index:1294,time:"2024-12-21T21:34:00Z",altitude:30.982361382685347,azimuth:54.391697416539934},{index:1295,time:"2024-12-21T21:35:00Z",altitude:31.025015083012125,azimuth:54.128935521182626},{index:1296,time:"2024-12-21T21:36:00Z",altitude:31.067527629626174,azimuth:53.86602490624478},{index:1297,time:"2024-12-21T21:37:00Z",altitude:31.10989804555633,azimuth:53.60296557818844},{index:1298,time:"2024-12-21T21:38:00Z",altitude:31.15212535532153,azimuth:53.33975755064897},{index:1299,time:"2024-12-21T21:39:00Z",altitude:31.194208584961004,azimuth:53.07640084448952},{index:1300,time:"2024-12-21T21:40:00Z",altitude:31.236146790141017,azimuth:52.81289531109064},{index:1301,time:"2024-12-21T21:41:00Z",altitude:31.27793894380412,azimuth:52.549241339227216},{index:1302,time:"2024-12-21T21:42:00Z",altitude:31.319584104922274,azimuth:52.28543879501381},{index:1303,time:"2024-12-21T21:43:00Z",altitude:31.361081305951444,azimuth:52.02148772858153},{index:1304,time:"2024-12-21T21:44:00Z",altitude:31.40242958103652,azimuth:51.757388197465666},{index:1305,time:"2024-12-21T21:45:00Z",altitude:31.443627966042897,azimuth:51.4931402666577},{index:1306,time:"2024-12-21T21:46:00Z",altitude:31.484675498587663,azimuth:51.228744008658325},{index:1307,time:"2024-12-21T21:47:00Z",altitude:31.525571218076568,azimuth:50.964199503497476},{index:1308,time:"2024-12-21T21:48:00Z",altitude:31.56631416573877,azimuth:50.69950683876737},{index:1309,time:"2024-12-21T21:49:00Z",altitude:31.606903384659876,azimuth:50.43466610966731},{index:1310,time:"2024-12-21T21:50:00Z",altitude:31.647337919814202,azimuth:50.16967741905498},{index:1311,time:"2024-12-21T21:51:00Z",altitude:31.68761684505749,azimuth:49.90454069963636},{index:1312,time:"2024-12-21T21:52:00Z",altitude:31.72773915523499,azimuth:49.63925642521751},{index:1313,time:"2024-12-21T21:53:00Z",altitude:31.767703928262137,azimuth:49.3738245440758},{index:1314,time:"2024-12-21T21:54:00Z",altitude:31.807510217024483,azimuth:49.108245190007246},{index:1315,time:"2024-12-21T21:55:00Z",altitude:31.847157076474666,azimuth:48.8425185046214},{index:1316,time:"2024-12-21T21:56:00Z",altitude:31.886643563666556,azimuth:48.576644637382806},{index:1317,time:"2024-12-21T21:57:00Z",altitude:31.925968737788956,azimuth:48.3106237456588},{index:1318,time:"2024-12-21T21:58:00Z",altitude:31.96513166020336,azimuth:48.04445599473918},{index:1319,time:"2024-12-21T21:59:00Z",altitude:32.004131394481995,azimuth:47.778141557855385},{index:1320,time:"2024-12-21T22:00:00Z",altitude:32.04296700644198,azimuth:47.511680616225156},{index:1321,time:"2024-12-21T22:01:00Z",altitude:32.081637564179644,azimuth:47.245073359097944},{index:1322,time:"2024-12-21T22:02:00Z",altitude:32.12014216387362,azimuth:46.978319804843366},{index:1323,time:"2024-12-21T22:03:00Z",altitude:32.15847982665461,azimuth:46.71142051657295},{index:1324,time:"2024-12-21T22:04:00Z",altitude:32.196649653560364,azimuth:46.44437552892848},{index:1325,time:"2024-12-21T22:05:00Z",altitude:32.23465072217866,azimuth:46.177185063532605},{index:1326,time:"2024-12-21T22:06:00Z",altitude:32.2724821125667,azimuth:45.90984935014538},{index:1327,time:"2024-12-21T22:07:00Z",altitude:32.310142907280564,azimuth:45.6423686267453},{index:1328,time:"2024-12-21T22:08:00Z",altitude:32.347632191421035,azimuth:45.37474313949821},{index:1329,time:"2024-12-21T22:09:00Z",altitude:32.38494905266255,azimuth:45.1069731428438},{index:1330,time:"2024-12-21T22:10:00Z",altitude:32.42209258129921,azimuth:44.839058899463275},{index:1331,time:"2024-12-21T22:11:00Z",altitude:32.45906187027495,azimuth:44.571000680357685},{index:1332,time:"2024-12-21T22:12:00Z",altitude:32.495856015229094,azimuth:44.302798764819585},{index:1333,time:"2024-12-21T22:13:00Z",altitude:32.53247411452708,azimuth:44.03445344050872},{index:1334,time:"2024-12-21T22:14:00Z",altitude:32.56891529368154,azimuth:43.765964823344},{index:1335,time:"2024-12-21T22:15:00Z",altitude:32.605178607763094,azimuth:43.49733357778832},{index:1336,time:"2024-12-21T22:16:00Z",altitude:32.641263188053045,azimuth:43.22855983666167},{index:1337,time:"2024-12-21T22:17:00Z",altitude:32.677168144221326,azimuth:42.9596439211998},{index:1338,time:"2024-12-21T22:18:00Z",altitude:32.712892588862154,azimuth:42.690586161072005},{index:1339,time:"2024-12-21T22:19:00Z",altitude:32.748435637531195,azimuth:42.421386894413104},{index:1340,time:"2024-12-21T22:20:00Z",altitude:32.78379640878284,azimuth:42.15204646785465},{index:1341,time:"2024-12-21T22:21:00Z",altitude:32.81897402421112,azimuth:41.88256523652937},{index:1342,time:"2024-12-21T22:22:00Z",altitude:32.8539676084905,azimuth:41.61294356407565},{index:1343,time:"2024-12-21T22:23:00Z",altitude:32.88877628941426,azimuth:41.34318182266105},{index:1344,time:"2024-12-21T22:24:00Z",altitude:32.9233991979309,azimuth:41.07328039301887},{index:1345,time:"2024-12-21T22:25:00Z",altitude:32.95783549121449,azimuth:40.80323948332432},{index:1346,time:"2024-12-21T22:26:00Z",altitude:32.992084260468275,azimuth:40.5330598535729},{index:1347,time:"2024-12-21T22:27:00Z",altitude:33.026144669505065,azimuth:40.26274172919721},{index:1348,time:"2024-12-21T22:28:00Z",altitude:33.06001586230038,azimuth:39.99228552525703},{index:1349,time:"2024-12-21T22:29:00Z",altitude:33.09369698618817,azimuth:39.72169166540547},{index:1350,time:"2024-12-21T22:30:00Z",altitude:33.127187191898045,azimuth:39.450960581920484},{index:1351,time:"2024-12-21T22:31:00Z",altitude:33.16048563359432,azimuth:39.180092715721756},{index:1352,time:"2024-12-21T22:32:00Z",altitude:33.19359146891763,azimuth:38.909088516366886},{index:1353,time:"2024-12-21T22:33:00Z",altitude:33.22650385902681,azimuth:38.63794844204559},{index:1354,time:"2024-12-21T22:34:00Z",altitude:33.259221968637355,azimuth:38.36667295959931},{index:1355,time:"2024-12-21T22:35:00Z",altitude:33.29174496606012,azimuth:38.09526254454007},{index:1356,time:"2024-12-21T22:36:00Z",altitude:33.3240720448538,azimuth:37.8237174989172},{index:1357,time:"2024-12-21T22:37:00Z",altitude:33.35620233729363,azimuth:37.55203867970994},{index:1358,time:"2024-12-21T22:38:00Z",altitude:33.38813504446587,azimuth:37.28022640639166},{index:1359,time:"2024-12-21T22:39:00Z",altitude:33.419869349473245,azimuth:37.00828118914064},{index:1360,time:"2024-12-21T22:40:00Z",altitude:33.45140443921927,azimuth:36.736203546792986},{index:1361,time:"2024-12-21T22:41:00Z",altitude:33.48273950444705,azimuth:36.463994006855984},{index:1362,time:"2024-12-21T22:42:00Z",altitude:33.513873739778276,azimuth:36.19165310552181},{index:1363,time:"2024-12-21T22:43:00Z",altitude:33.54480634375586,azimuth:35.91918138764666},{index:1364,time:"2024-12-21T22:44:00Z",altitude:33.57553651888529,azimuth:35.64657940674286},{index:1365,time:"2024-12-21T22:45:00Z",altitude:33.606063471674226,azimuth:35.37384772498273},{index:1366,time:"2024-12-21T22:46:00Z",altitude:33.63638641267138,azimuth:35.10098691320845},{index:1367,time:"2024-12-21T22:47:00Z",altitude:33.666504576636115,azimuth:34.827997367813616},{index:1368,time:"2024-12-21T22:48:00Z",altitude:33.69641714193331,azimuth:34.55488004303449},{index:1369,time:"2024-12-21T22:49:00Z",altitude:33.726123351749685,azimuth:34.281635352618395},{index:1370,time:"2024-12-21T22:50:00Z",altitude:33.75562243321045,azimuth:34.00826390196884},{index:1371,time:"2024-12-21T22:51:00Z",altitude:33.78491361768913,azimuth:33.73476630508397},{index:1372,time:"2024-12-21T22:52:00Z",altitude:33.81399614084269,azimuth:33.461143184593524},{index:1373,time:"2024-12-21T22:53:00Z",altitude:33.842869242657905,azimuth:33.18739517169486},{index:1374,time:"2024-12-21T22:54:00Z",altitude:33.87153216748601,azimuth:32.91352290619336},{index:1375,time:"2024-12-21T22:55:00Z",altitude:33.89998416408899,azimuth:32.639527036435055},{index:1376,time:"2024-12-21T22:56:00Z",altitude:33.928224485674185,azimuth:32.365408219345035},{index:1377,time:"2024-12-21T22:57:00Z",altitude:33.95625238994039,azimuth:32.09116712035922},{index:1378,time:"2024-12-21T22:58:00Z",altitude:33.984067139112916,azimuth:31.816804413455227},{index:1379,time:"2024-12-21T22:59:00Z",altitude:34.011668018424416,azimuth:31.54232059699678},{index:1380,time:"2024-12-21T23:00:00Z",altitude:34.03905426226422,azimuth:31.26771673004375},{index:1381,time:"2024-12-21T23:01:00Z",altitude:34.06622516526655,azimuth:30.992993327995674},{index:1382,time:"2024-12-21T23:02:00Z",altitude:34.0931800081754,azimuth:30.71815109870984},{index:1383,time:"2024-12-21T23:03:00Z",altitude:34.11991807646591,azimuth:30.44319075844896},{index:1384,time:"2024-12-21T23:04:00Z",altitude:34.14643866038314,azimuth:30.168113031865257},{index:1385,time:"2024-12-21T23:05:00Z",altitude:34.17274105497995,azimuth:29.89291865199793},{index:1386,time:"2024-12-21T23:06:00Z",altitude:34.19882456015867,azimuth:29.617608360228314},{index:1387,time:"2024-12-21T23:07:00Z",altitude:34.224688480711755,azimuth:29.34218290624088},{index:1388,time:"2024-12-21T23:08:00Z",altitude:34.25033212636015,azimuth:29.066643048008952},{index:1389,time:"2024-12-21T23:09:00Z",altitude:34.27575481179124,azimuth:28.790989551779205},{index:1390,time:"2024-12-21T23:10:00Z",altitude:34.30095587352333,azimuth:28.515223007079996},{index:1391,time:"2024-12-21T23:11:00Z",altitude:34.3259346025027,azimuth:28.23934456638718},{index:1392,time:"2024-12-21T23:12:00Z",altitude:34.35069034552819,azimuth:27.96335483566951},{index:1393,time:"2024-12-21T23:13:00Z",altitude:34.375222437550555,azimuth:27.68725461390123},{index:1394,time:"2024-12-21T23:14:00Z",altitude:34.399530218684845,azimuth:27.411044708141535},{index:1395,time:"2024-12-21T23:15:00Z",altitude:34.4236130342479,azimuth:27.134725933512488},{index:1396,time:"2024-12-21T23:16:00Z",altitude:34.44747023479559,azimuth:26.85829911317599},{index:1397,time:"2024-12-21T23:17:00Z",altitude:34.47110117616236,azimuth:26.58176507828223},{index:1398,time:"2024-12-21T23:18:00Z",altitude:34.494505219500546,azimuth:26.305124667918967},{index:1399,time:"2024-12-21T23:19:00Z",altitude:34.51768173131768,azimuth:26.028378729079183},{index:1400,time:"2024-12-21T23:20:00Z",altitude:34.540630083512255,azimuth:25.75152811664211},{index:1401,time:"2024-12-21T23:21:00Z",altitude:34.563349668570766,azimuth:25.474573507568884},{index:1402,time:"2024-12-21T23:22:00Z",altitude:34.58583983882273,azimuth:25.197516143743446},{index:1403,time:"2024-12-21T23:23:00Z",altitude:34.60809999788108,azimuth:24.920356717717805},{index:1404,time:"2024-12-21T23:24:00Z",altitude:34.6301295395897,azimuth:24.64309611541195},{index:1405,time:"2024-12-21T23:25:00Z",altitude:34.651927863373004,azimuth:24.36573523037457},{index:1406,time:"2024-12-21T23:26:00Z",altitude:34.67349437427084,azimuth:24.08827496375733},{index:1407,time:"2024-12-21T23:27:00Z",altitude:34.694828482974195,azimuth:23.81071622427392},{index:1408,time:"2024-12-21T23:28:00Z",altitude:34.71592960586261,azimuth:23.533059928138087},{index:1409,time:"2024-12-21T23:29:00Z",altitude:34.7367971650412,azimuth:23.25530699899899},{index:1410,time:"2024-12-21T23:30:00Z",altitude:34.7574305883754,azimuth:22.977458367902724},{index:1411,time:"2024-12-21T23:31:00Z",altitude:34.777829309525444,azimuth:22.699514973252786},{index:1412,time:"2024-12-21T23:32:00Z",altitude:34.79799278142457,azimuth:22.42147757427103},{index:1413,time:"2024-12-21T23:33:00Z",altitude:34.81792042238977,azimuth:22.14334749675125},{index:1414,time:"2024-12-21T23:34:00Z",altitude:34.8376116972807,azimuth:21.86512551437629},{index:1415,time:"2024-12-21T23:35:00Z",altitude:34.85706606329146,azimuth:21.586812594378163},{index:1416,time:"2024-12-21T23:36:00Z",altitude:34.87628298358823,azimuth:21.308409711023398},{index:1417,time:"2024-12-21T23:37:00Z",altitude:34.89526192733928,azimuth:21.029917845607944},{index:1418,time:"2024-12-21T23:38:00Z",altitude:34.914002369752566,azimuth:20.75133798634183},{index:1419,time:"2024-12-21T23:39:00Z",altitude:34.93250379210542,azimuth:20.47267112834361},{index:1420,time:"2024-12-21T23:40:00Z",altitude:34.9507656817819,azimuth:20.193918273517138},{index:1421,time:"2024-12-21T23:41:00Z",altitude:34.96878753230123,azimuth:19.915080430551015},{index:1422,time:"2024-12-21T23:42:00Z",altitude:34.98656884335472,azimuth:19.636158614793388},{index:1423,time:"2024-12-21T23:43:00Z",altitude:35.00410912083412,azimuth:19.357153848242024},{index:1424,time:"2024-12-21T23:44:00Z",altitude:35.02140788838582,azimuth:19.078066972257563},{index:1425,time:"2024-12-21T23:45:00Z",altitude:35.038464641203205,azimuth:18.798899396152315},{index:1426,time:"2024-12-21T23:46:00Z",altitude:35.05527891565745,azimuth:18.51965197425842},{index:1427,time:"2024-12-21T23:47:00Z",altitude:35.07185024276709,azimuth:18.240325754378638},{index:1428,time:"2024-12-21T23:48:00Z",altitude:35.08817815991075,azimuth:17.96092179057832},{index:1429,time:"2024-12-21T23:49:00Z",altitude:35.10426221085661,azimuth:17.68144114312861},{index:1430,time:"2024-12-21T23:50:00Z",altitude:35.12010194579169,azimuth:17.401884878447284},{index:1431,time:"2024-12-21T23:51:00Z",altitude:35.13569692135229,azimuth:17.122254069011216},{index:1432,time:"2024-12-21T23:52:00Z",altitude:35.15104670065425,azimuth:16.842549793267615},{index:1433,time:"2024-12-21T23:53:00Z",altitude:35.16615085332094,azimuth:16.562773135573636},{index:1434,time:"2024-12-21T23:54:00Z",altitude:35.181008955511516,azimuth:16.28292518612754},{index:1435,time:"2024-12-21T23:55:00Z",altitude:35.19562059966439,azimuth:16.003006853166852},{index:1436,time:"2024-12-21T23:56:00Z",altitude:35.20998535550123,azimuth:15.723019613693479},{index:1437,time:"2024-12-21T23:57:00Z",altitude:35.22410282883845,azimuth:15.442964387261569},{index:1438,time:"2024-12-21T23:58:00Z",altitude:35.23797262225922,azimuth:15.162842286613019},{index:1439,time:"2024-12-21T23:59:00Z",altitude:35.25159434502135,azimuth:14.882654429911646},{index:1440,time:"2024-12-22T00:00:00Z",altitude:35.26496761308308,azimuth:14.602401940668917}];
