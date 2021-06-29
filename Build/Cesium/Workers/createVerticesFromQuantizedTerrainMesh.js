define(["./AxisAlignedBoundingBox-3819ab51","./Cartesian2-b4b7b0b3","./when-208fe5b0","./TerrainEncoding-ae55284b","./IndexDatatype-da7c58eb","./Math-8386669c","./Transforms-4e23335e","./Check-5e798bbf","./WebMercatorProjection-1b058022","./createTaskProcessorWorker","./AttributeCompression-9711314b","./ComponentDatatype-ce69354e","./WebGLConstants-76bb35d1","./RuntimeError-7f634f5d"],function(te,re,ne,ie,oe,ae,se,e,de,t,r,n,i,o){"use strict";function he(){e.DeveloperError.throwInstantiationError()}Object.defineProperties(he.prototype,{errorEvent:{get:e.DeveloperError.throwInstantiationError},credit:{get:e.DeveloperError.throwInstantiationError},tilingScheme:{get:e.DeveloperError.throwInstantiationError},ready:{get:e.DeveloperError.throwInstantiationError},readyPromise:{get:e.DeveloperError.throwInstantiationError},hasWaterMask:{get:e.DeveloperError.throwInstantiationError},hasVertexNormals:{get:e.DeveloperError.throwInstantiationError},availability:{get:e.DeveloperError.throwInstantiationError}});var a=[];he.getRegularGridIndices=function(e,t){var r=a[e];ne.defined(r)||(a[e]=r=[]);var n=r[t];return ne.defined(n)||g(e,t,n=e*t<ae.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6):r[t]=new Uint32Array((e-1)*(t-1)*6),0),n};var d=[];he.getRegularGridIndicesAndEdgeIndices=function(e,t){var r=d[e];ne.defined(r)||(d[e]=r=[]);var n,i,o,a,s=r[t];return ne.defined(s)||(n=he.getRegularGridIndices(e,t),i=(a=l(e,t)).westIndicesSouthToNorth,o=a.southIndicesEastToWest,e=a.eastIndicesNorthToSouth,a=a.northIndicesWestToEast,s=r[t]={indices:n,westIndicesSouthToNorth:i,southIndicesEastToWest:o,eastIndicesNorthToSouth:e,northIndicesWestToEast:a}),s};var I=[];function l(e,t){for(var r=new Array(t),n=new Array(e),i=new Array(t),o=new Array(e),a=0;a<e;++a)n[o[a]=a]=e*t-1-a;for(a=0;a<t;++a)i[a]=(a+1)*e-1,r[a]=(t-a-1)*e;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:i,northIndicesWestToEast:o}}function g(e,t,r,n){for(var i=0,o=0;o<t-1;++o){for(var a=0;a<e-1;++a){var s=i,d=s+e,h=d+1,c=s+1;r[n++]=s,r[n++]=d,r[n++]=c,r[n++]=c,r[n++]=d,r[n++]=h,++i}++i}}function s(e,t,r,n){for(var i=e[0],o=e.length,a=1;a<o;++a){var s=e[a];r[n++]=i,r[n++]=s,r[n++]=t,r[n++]=t,r[n++]=s,r[n++]=t+1,i=s,++t}return n}he.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){var r=I[e];ne.defined(r)||(I[e]=r=[]);var n,i,o,a,s,d,h,c,u=r[t];return ne.defined(u)||(o=(n=e*t)+(d=2*e+2*t),c=(i=(e-1)*(t-1)*6)+6*Math.max(0,d-4),a=(h=l(e,t)).westIndicesSouthToNorth,s=h.southIndicesEastToWest,d=h.eastIndicesNorthToSouth,h=h.northIndicesWestToEast,g(e,t,c=oe.IndexDatatype.createTypedArray(o,c),0),he.addSkirtIndices(a,s,d,h,n,c,i),u=r[t]={indices:c,westIndicesSouthToNorth:a,southIndicesEastToWest:s,eastIndicesNorthToSouth:d,northIndicesWestToEast:h,indexCountWithoutSkirts:i}),u},he.addSkirtIndices=function(e,t,r,n,i,o,a){a=s(e,i,o,a),a=s(t,i+=e.length,o,a),a=s(r,i+=t.length,o,a),s(n,i+=r.length,o,a)},he.heightmapTerrainQuality=.25,he.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*he.heightmapTerrainQuality/(t*r)},he.prototype.requestTileGeometry=e.DeveloperError.throwInstantiationError,he.prototype.getLevelMaximumGeometricError=e.DeveloperError.throwInstantiationError,he.prototype.getTileDataAvailable=e.DeveloperError.throwInstantiationError,he.prototype.loadTileDataAvailability=e.DeveloperError.throwInstantiationError;var ce=32767,ue=new re.Cartesian3,Ie=new re.Cartesian3,le=new re.Cartesian3,ge=new re.Cartographic,me=new re.Cartesian2;function Te(e,t,r,n,i,o,a,s,d){var h=Number.POSITIVE_INFINITY,c=i.north,u=i.south,I=i.east,l=i.west;I<l&&(I+=ae.CesiumMath.TWO_PI);for(var g=e.length,m=0;m<g;++m){var T=e[m],E=r[T],T=n[T];ge.longitude=ae.CesiumMath.lerp(l,I,T.x),ge.latitude=ae.CesiumMath.lerp(u,c,T.y),ge.height=E-t;E=o.cartographicToCartesian(ge,ue);se.Matrix4.multiplyByPoint(a,E,E),re.Cartesian3.minimumByComponent(E,s,s),re.Cartesian3.maximumByComponent(E,d,d),h=Math.min(h,ge.height)}return h}function Ee(e,t,r,n,i,o,a,s,d,h,c,u,I,l){var g=ne.defined(a),m=d.north,T=d.south,E=d.east,p=d.west;E<p&&(E+=ae.CesiumMath.TWO_PI);for(var f=r.length,y=0;y<f;++y){var v=r[y],N=i[v],w=o[v];ge.longitude=ae.CesiumMath.lerp(p,E,w.x)+I,ge.latitude=ae.CesiumMath.lerp(T,m,w.y)+l,ge.height=N-h;var b,S,N=s.cartographicToCartesian(ge,ue);g&&(me.x=a[v=2*v],me.y=a[1+v]),n.hasWebMercatorT&&(b=(de.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ge.latitude)-c)*u),n.hasGeodeticSurfaceNormals&&(S=s.geodeticSurfaceNormal(N)),t=n.encode(e,t,N,w,ge.height,me,b,S)}}function pe(e,t){var r;return"function"==typeof e.slice&&"function"!=typeof(r=e.slice()).sort&&(r=void 0),(r=!ne.defined(r)?Array.prototype.slice.call(e):r).sort(t),r}return t(function(e,t){var r,n,i=(Z=e.quantizedVertices).length/3,o=e.octEncodedNormals,a=e.westIndices.length+e.eastIndices.length+e.southIndices.length+e.northIndices.length,s=e.includeWebMercatorT,d=e.exaggeration,h=e.exaggerationRelativeHeight,c=1!==d,u=re.Rectangle.clone(e.rectangle),I=u.west,l=u.south,g=u.east,m=u.north,T=re.Ellipsoid.clone(e.ellipsoid),E=e.minimumHeight,p=e.maximumHeight,f=e.relativeToCenter,y=se.Transforms.eastNorthUpToFixedFrame(f,T),v=se.Matrix4.inverseTransformation(y,new se.Matrix4);s&&(r=de.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l),n=1/(de.WebMercatorProjection.geodeticLatitudeToMercatorAngle(m)-r));var N=Z.subarray(0,i),w=Z.subarray(i,2*i),b=Z.subarray(2*i,3*i),S=ne.defined(o),M=new Array(i),x=new Array(i),C=new Array(i),A=s?new Array(i):[],W=c?new Array(i):[],P=Ie;P.x=Number.POSITIVE_INFINITY,P.y=Number.POSITIVE_INFINITY,P.z=Number.POSITIVE_INFINITY;var D=le;D.x=Number.NEGATIVE_INFINITY,D.y=Number.NEGATIVE_INFINITY,D.z=Number.NEGATIVE_INFINITY;for(var k=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,H=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY,G=0;G<i;++G){var V=N[G],Y=w[G],O=V/ce,B=Y/ce,V=ae.CesiumMath.lerp(E,p,b[G]/ce);ge.longitude=ae.CesiumMath.lerp(I,g,O),ge.latitude=ae.CesiumMath.lerp(l,m,B),ge.height=V;k=Math.min(ge.longitude,k),F=Math.max(ge.longitude,F),H=Math.min(ge.latitude,H),_=Math.max(ge.latitude,_),Y=T.cartographicToCartesian(ge);M[G]=new re.Cartesian2(O,B),x[G]=V,C[G]=Y,s&&(A[G]=(de.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ge.latitude)-r)*n),c&&(W[G]=T.geodeticSurfaceNormal(Y)),se.Matrix4.multiplyByPoint(v,Y,ue),re.Cartesian3.minimumByComponent(ue,P,P),re.Cartesian3.maximumByComponent(ue,D,D)}var R,L=pe(e.westIndices,function(e,t){return M[e].y-M[t].y}),j=pe(e.eastIndices,function(e,t){return M[t].y-M[e].y}),U=pe(e.southIndices,function(e,t){return M[t].x-M[e].x}),z=pe(e.northIndices,function(e,t){return M[e].x-M[t].x});E<0&&(R=new ie.EllipsoidalOccluder(T).computeHorizonCullingPointPossiblyUnderEllipsoid(f,C,E));var q=Math.min(E,Te(e.westIndices,e.westSkirtHeight,x,M,u,T,v,P,D));q=Math.min(q,Te(e.southIndices,e.southSkirtHeight,x,M,u,T,v,P,D)),q=Math.min(q,Te(e.eastIndices,e.eastSkirtHeight,x,M,u,T,v,P,D)),q=Math.min(q,Te(e.northIndices,e.northSkirtHeight,x,M,u,T,v,P,D));for(var Q,K=new te.AxisAlignedBoundingBox(P,D,f),X=new ie.TerrainEncoding(f,K,q,p,y,S,s,c,d,h),Z=X.stride,J=new Float32Array(i*Z+a*Z),$=0,ee=0;ee<i;++ee)S&&(me.x=o[Q=2*ee],me.y=o[1+Q]),$=X.encode(J,$,C[ee],M[ee],x[ee],me,A[ee],W[ee]);return K=Math.max(0,2*(a-4)),q=e.indices.length+3*K,(y=oe.IndexDatatype.createTypedArray(i+a,q)).set(e.indices,0),K=d=1e-4*(F-k),q=-(a=h=1e-4*(_-H)),Ee(J,h=i*Z,L,X,x,M,o,T,u,e.westSkirtHeight,r,n,-d,0),Ee(J,h+=e.westIndices.length*Z,U,X,x,M,o,T,u,e.southSkirtHeight,r,n,0,q),Ee(J,h+=e.southIndices.length*Z,j,X,x,M,o,T,u,e.eastSkirtHeight,r,n,K,0),Ee(J,h+=e.eastIndices.length*Z,z,X,x,M,o,T,u,e.northSkirtHeight,r,n,0,a),he.addSkirtIndices(L,U,j,z,i,y,e.indices.length),t.push(J.buffer,y.buffer),{vertices:J.buffer,indices:y.buffer,westIndicesSouthToNorth:L,southIndicesEastToWest:U,eastIndicesNorthToSouth:j,northIndicesWestToEast:z,vertexStride:Z,center:f,minimumHeight:E,maximumHeight:p,occludeePointInScaledSpace:R,encoding:X,indexCountWithoutSkirts:e.indices.length}})});
