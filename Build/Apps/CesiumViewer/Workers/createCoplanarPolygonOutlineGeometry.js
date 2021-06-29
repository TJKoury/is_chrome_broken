define(["./arrayRemoveDuplicates-3a9a9480","./Transforms-4e23335e","./Cartesian2-b4b7b0b3","./Check-5e798bbf","./ComponentDatatype-ce69354e","./CoplanarPolygonGeometryLibrary-36c672d4","./when-208fe5b0","./GeometryAttribute-02d80cc5","./GeometryAttributes-b0b294d8","./GeometryInstance-a1c3321e","./GeometryPipeline-f131a8f5","./IndexDatatype-da7c58eb","./PolygonGeometryLibrary-7a95b725","./Math-8386669c","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1","./OrientedBoundingBox-cb50d37e","./EllipsoidTangentPlane-1adf4184","./AxisAlignedBoundingBox-3819ab51","./IntersectionTests-383c3f8a","./Plane-6d0fd75c","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b","./ArcType-dc1c5aee","./EllipsoidRhumbLine-73a4e3eb","./PolygonPipeline-2dfc6d4a"],function(a,y,l,e,c,p,o,s,u,d,m,b,f,t,n,r,i,g,h,P,G,v,L,C,T,E){"use strict";function k(e){e=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.PolygonGeometryLibrary.computeHierarchyPackedLength(e)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,n){return n=o.defaultValue(n,0),t[n=f.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n)]=e.packedLength,t};var A={polygonHierarchy:{}};return k.unpack=function(e,t,n){t=o.defaultValue(t,0);var r=f.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;t=e[t];return(n=!o.defined(n)?new k(A):n)._polygonHierarchy=r,n.packedLength=t,n},k.createGeometry=function(e){var t=e._polygonHierarchy,e=t.positions,e=a.arrayRemoveDuplicates(e,l.Cartesian3.equalsEpsilon,!0);if(!(e.length<3)&&p.CoplanarPolygonGeometryLibrary.validOutline(e)){var n=f.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var r=[],o=0;o<n.length;o++){var i=new d.GeometryInstance({geometry:function(e){for(var t=e.length,n=new Float64Array(3*t),r=b.IndexDatatype.createTypedArray(t,2*t),o=0,i=0,a=0;a<t;a++){var y=e[a];n[o++]=y.x,n[o++]=y.y,n[o++]=y.z,r[i++]=a,r[i++]=(a+1)%t}var l=new u.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:c.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new s.Geometry({attributes:l,indices:r,primitiveType:s.PrimitiveType.LINES})}(n[o])});r.push(i)}e=m.GeometryPipeline.combineInstances(r)[0],t=y.BoundingSphere.fromPoints(t.positions);return new s.Geometry({attributes:e.attributes,indices:e.indices,primitiveType:e.primitiveType,boundingSphere:t})}}},function(e,t){return(e=o.defined(t)?k.unpack(e,t):e)._ellipsoid=l.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}});
