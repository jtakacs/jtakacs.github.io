import{L as Q,F as Z,n as X,o as Y,B as H,V as w,I as ee,p as F,q as I,r as z,s as te,t as k,m as ne,U as J,u as B,v as ie,w as T,x as D,y as se,z as oe,i as re,H as ae}from"./ScaleLine-8d997a55.js";class ve extends Q{constructor(e){super(e)}load(e,t,i,n){const o=this,r=new Z(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(s){const d=o.parse(JSON.parse(s));t&&t(d)},i,n)}parse(e){return new de(e)}}class de{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],n=le(e,t,this.data);for(let o=0,r=n.length;o<r;o++)i.push(...n[o].toShapes());return i}}function le(a,e,t){const i=Array.from(a),n=e/t.resolution,o=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,r=[];let s=0,d=0;for(let l=0;l<i.length;l++){const p=i[l];if(p===`
`)s=0,d-=o;else{const c=ce(p,n,s,d,t);s+=c.offsetX,r.push(c.path)}}return r}function ce(a,e,t,i,n){const o=n.glyphs[a]||n.glyphs["?"];if(!o){console.error('THREE.Font: character "'+a+'" does not exists in font family '+n.familyName+".");return}const r=new X;let s,d,l,p,c,g,A,O;if(o.o){const f=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let u=0,C=f.length;u<C;)switch(f[u++]){case"m":s=f[u++]*e+t,d=f[u++]*e+i,r.moveTo(s,d);break;case"l":s=f[u++]*e+t,d=f[u++]*e+i,r.lineTo(s,d);break;case"q":l=f[u++]*e+t,p=f[u++]*e+i,c=f[u++]*e+t,g=f[u++]*e+i,r.quadraticCurveTo(c,g,l,p);break;case"b":l=f[u++]*e+t,p=f[u++]*e+i,c=f[u++]*e+t,g=f[u++]*e+i,A=f[u++]*e+t,O=f[u++]*e+i,r.bezierCurveTo(c,g,A,O,l,p);break}}return{offsetX:o.ha*e,path:r}}class ge extends Y{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const n=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(n,t)}this.type="TextGeometry"}}const G=new H,U=new w;class $ extends ee{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new F(e,3)),this.setAttribute("uv",new F(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new I(t,6,1);return this.setAttribute("instanceStart",new z(i,3,0)),this.setAttribute("instanceEnd",new z(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new I(t,6,1);return this.setAttribute("instanceColorStart",new z(i,3,0)),this.setAttribute("instanceColorEnd",new z(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new te(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new H);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),G.setFromBufferAttribute(t),this.boundingBox.union(G))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new k),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let o=0,r=e.count;o<r;o++)U.fromBufferAttribute(e,o),n=Math.max(n,i.distanceToSquared(U)),U.fromBufferAttribute(t,o),n=Math.max(n,i.distanceToSquared(U));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}B.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};T.line={uniforms:J.merge([B.common,B.fog,B.line]),vertexShader:`
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
		`};class K extends ie{constructor(e){super({type:"LineMaterial",uniforms:J.clone(T.line.uniforms),vertexShader:T.line.vertexShader,fragmentShader:T.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const R=new w,N=new w,h=new D,m=new D,y=new D,P=new w,W=new se,v=new oe,V=new w,L=new H,M=new k,x=new D;let S,_;function q(a,e,t){return x.set(0,0,-e,1).applyMatrix4(a.projectionMatrix),x.multiplyScalar(1/x.w),x.x=_/t.width,x.y=_/t.height,x.applyMatrix4(a.projectionMatrixInverse),x.multiplyScalar(1/x.w),Math.abs(Math.max(x.x,x.y))}function fe(a,e){const t=a.matrixWorld,i=a.geometry,n=i.attributes.instanceStart,o=i.attributes.instanceEnd,r=Math.min(i.instanceCount,n.count);for(let s=0,d=r;s<d;s++){v.start.fromBufferAttribute(n,s),v.end.fromBufferAttribute(o,s),v.applyMatrix4(t);const l=new w,p=new w;S.distanceSqToSegment(v.start,v.end,p,l),p.distanceTo(l)<_*.5&&e.push({point:p,pointOnLine:l,distance:S.origin.distanceTo(p),object:a,face:null,faceIndex:s,uv:null,uv1:null})}}function ue(a,e,t){const i=e.projectionMatrix,o=a.material.resolution,r=a.matrixWorld,s=a.geometry,d=s.attributes.instanceStart,l=s.attributes.instanceEnd,p=Math.min(s.instanceCount,d.count),c=-e.near;S.at(1,y),y.w=1,y.applyMatrix4(e.matrixWorldInverse),y.applyMatrix4(i),y.multiplyScalar(1/y.w),y.x*=o.x/2,y.y*=o.y/2,y.z=0,P.copy(y),W.multiplyMatrices(e.matrixWorldInverse,r);for(let g=0,A=p;g<A;g++){if(h.fromBufferAttribute(d,g),m.fromBufferAttribute(l,g),h.w=1,m.w=1,h.applyMatrix4(W),m.applyMatrix4(W),h.z>c&&m.z>c)continue;if(h.z>c){const E=h.z-m.z,b=(h.z-c)/E;h.lerp(m,b)}else if(m.z>c){const E=m.z-h.z,b=(m.z-c)/E;m.lerp(h,b)}h.applyMatrix4(i),m.applyMatrix4(i),h.multiplyScalar(1/h.w),m.multiplyScalar(1/m.w),h.x*=o.x/2,h.y*=o.y/2,m.x*=o.x/2,m.y*=o.y/2,v.start.copy(h),v.start.z=0,v.end.copy(m),v.end.z=0;const f=v.closestPointToPointParameter(P,!0);v.at(f,V);const u=ae.lerp(h.z,m.z,f),C=u>=-1&&u<=1,j=P.distanceTo(V)<_*.5;if(C&&j){v.start.fromBufferAttribute(d,g),v.end.fromBufferAttribute(l,g),v.start.applyMatrix4(r),v.end.applyMatrix4(r);const E=new w,b=new w;S.distanceSqToSegment(v.start,v.end,b,E),t.push({point:b,pointOnLine:E,distance:S.origin.distanceTo(b),object:a,face:null,faceIndex:g,uv:null,uv1:null})}}}class pe extends re{constructor(e=new $,t=new K({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let r=0,s=0,d=t.count;r<d;r++,s+=2)R.fromBufferAttribute(t,r),N.fromBufferAttribute(i,r),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+R.distanceTo(N);const o=new I(n,2,1);return e.setAttribute("instanceDistanceStart",new z(o,1,0)),e.setAttribute("instanceDistanceEnd",new z(o,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;S=e.ray;const r=this.matrixWorld,s=this.geometry,d=this.material;_=d.linewidth+o,s.boundingSphere===null&&s.computeBoundingSphere(),M.copy(s.boundingSphere).applyMatrix4(r);let l;if(i)l=_*.5;else{const c=Math.max(n.near,M.distanceToPoint(S.origin));l=q(n,c,d.resolution)}if(M.radius+=l,S.intersectsSphere(M)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),L.copy(s.boundingBox).applyMatrix4(r);let p;if(i)p=_*.5;else{const c=Math.max(n.near,L.distanceToPoint(S.origin));p=q(n,c,d.resolution)}L.expandByScalar(p),S.intersectsBox(L)!==!1&&(i?fe(this,t):ue(this,n,t))}}class he extends ${constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class ye extends pe{constructor(e=new he,t=new K({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}export{ve as F,K as L,ge as T,he as a,ye as b};
