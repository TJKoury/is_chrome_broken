define(["./when-208fe5b0","./Cartesian2-b4b7b0b3","./arrayRemoveDuplicates-3a9a9480","./BoundingRectangle-1b86dafd","./Transforms-4e23335e","./ComponentDatatype-ce69354e","./PolylineVolumeGeometryLibrary-471c7c27","./Check-5e798bbf","./GeometryAttribute-02d80cc5","./GeometryAttributes-b0b294d8","./GeometryPipeline-f131a8f5","./IndexDatatype-da7c58eb","./Math-8386669c","./PolygonPipeline-2dfc6d4a","./VertexFormat-7e57a3bd","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1","./EllipsoidTangentPlane-1adf4184","./AxisAlignedBoundingBox-3819ab51","./IntersectionTests-383c3f8a","./Plane-6d0fd75c","./PolylinePipeline-d5df0f57","./EllipsoidGeodesic-92f0d3cc","./EllipsoidRhumbLine-73a4e3eb","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b"],function(u,c,r,a,A,T,o,e,G,R,D,I,i,B,g,t,n,l,s,d,p,y,m,h,f,b){"use strict";var v={};function O(e,t){u.defined(v[e])||(v[e]=!0,console.warn(u.defaultValue(t,e)))}function E(e){var t=(e=u.defaultValue(e,u.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(u.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=u.defaultValue(e.cornerType,o.CornerType.ROUNDED),this._vertexFormat=g.VertexFormat.clone(u.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT)),this._granularity=u.defaultValue(e.granularity,i.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";t=1+t.length*c.Cartesian3.packedLength;t+=1+n.length*c.Cartesian2.packedLength,this.packedLength=t+c.Ellipsoid.packedLength+g.VertexFormat.packedLength+2}O.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",O.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",O.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",O.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",E.pack=function(e,t,n){var i;n=u.defaultValue(n,0);var r=e._positions,a=r.length;for(t[n++]=a,i=0;i<a;++i,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(r[i],t,n);var o=e._shape,a=o.length;for(t[n++]=a,i=0;i<a;++i,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[i],t,n);return c.Ellipsoid.pack(e._ellipsoid,t,n),n+=c.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var P=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),x=new g.VertexFormat,_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:P,vertexFormat:x,cornerType:void 0,granularity:void 0};E.unpack=function(e,t,n){t=u.defaultValue(t,0);for(var i=e[t++],r=new Array(i),a=0;a<i;++a,t+=c.Cartesian3.packedLength)r[a]=c.Cartesian3.unpack(e,t);var i=e[t++],o=new Array(i);for(a=0;a<i;++a,t+=c.Cartesian2.packedLength)o[a]=c.Cartesian2.unpack(e,t);var l=c.Ellipsoid.unpack(e,t,P);t+=c.Ellipsoid.packedLength;var s=g.VertexFormat.unpack(e,t,x);t+=g.VertexFormat.packedLength;var d=e[t++],p=e[t];return u.defined(n)?(n._positions=r,n._shape=o,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(s,n._vertexFormat),n._cornerType=d,n._granularity=p,n):(_.polylinePositions=r,_.shapePositions=o,_.cornerType=d,_.granularity=p,new E(_))};var k=new a.BoundingRectangle;return E.createGeometry=function(e){var t=e._positions,n=r.arrayRemoveDuplicates(t,c.Cartesian3.equalsEpsilon),i=e._shape,i=o.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(i);if(!(n.length<2||i.length<3)){B.PolygonPipeline.computeWindingOrder2D(i)===B.WindingOrder.CLOCKWISE&&i.reverse();t=a.BoundingRectangle.fromPoints(i,k);return function(e,t,n,i){var r=new R.GeometryAttributes;i.position&&(r.position=new G.GeometryAttribute({componentDatatype:T.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var a,o,l,s,d,p=t.length,u=e.length/3,c=(u-2*p)/(2*p),g=B.PolygonPipeline.triangulate(t),y=(c-1)*p*6+2*g.length,m=I.IndexDatatype.createTypedArray(u,y),h=2*p,f=0;for(C=0;C<c-1;C++){for(a=0;a<p-1;a++)d=(o=2*a+C*p*2)+h,s=(l=o+1)+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=d;s=(l=(o=2*p-2+C*p*2)+1)+h,d=o+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=d}if(i.st||i.tangent||i.bitangent){for(var b,v,E=new Float32Array(2*u),P=1/(c-1),x=1/n.height,_=n.height/2,k=0,C=0;C<c;C++){for(v=x*(t[0].y+_),E[k++]=b=C*P,E[k++]=v,a=1;a<p;a++)v=x*(t[a].y+_),E[k++]=b,E[k++]=v,E[k++]=b,E[k++]=v;v=x*(t[0].y+_),E[k++]=b,E[k++]=v}for(a=0;a<p;a++)v=x*(t[a].y+_),E[k++]=b=0,E[k++]=v;for(a=0;a<p;a++)v=x*(t[a].y+_),E[k++]=b=(c-1)*P,E[k++]=v;r.st=new G.GeometryAttribute({componentDatatype:T.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(E)})}var V=u-2*p;for(C=0;C<g.length;C+=3){var L=g[C]+V,w=g[C+1]+V,F=g[C+2]+V;m[f++]=L,m[f++]=w,m[f++]=F,m[f++]=F+p,m[f++]=w+p,m[f++]=L+p}if(e=new G.Geometry({attributes:r,indices:m,boundingSphere:A.BoundingSphere.fromVertices(e),primitiveType:G.PrimitiveType.TRIANGLES}),i.normal&&(e=D.GeometryPipeline.computeNormal(e)),i.tangent||i.bitangent){try{e=D.GeometryPipeline.computeTangentAndBitangent(e)}catch(e){O("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(e.attributes.tangent=void 0),i.bitangent||(e.attributes.bitangent=void 0),i.st||(e.attributes.st=void 0)}return e}(o.PolylineVolumeGeometryLibrary.computePositions(n,i,t,e,!0),i,t,e._vertexFormat)}},function(e,t){return(e=u.defined(t)?E.unpack(e,t):e)._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),E.createGeometry(e)}});
