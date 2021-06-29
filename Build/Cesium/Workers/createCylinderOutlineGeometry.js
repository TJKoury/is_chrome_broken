define(["./GeometryOffsetAttribute-3497d4dd","./Transforms-4e23335e","./Cartesian2-b4b7b0b3","./Check-5e798bbf","./ComponentDatatype-ce69354e","./CylinderGeometryLibrary-6ad5dbcf","./when-208fe5b0","./GeometryAttribute-02d80cc5","./GeometryAttributes-b0b294d8","./IndexDatatype-da7c58eb","./Math-8386669c","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1"],function(c,p,y,t,_,h,A,v,R,G,e,i,r){"use strict";var O=new y.Cartesian2;function s(t){var e=(t=A.defaultValue(t,A.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,r=t.bottomRadius,a=A.defaultValue(t.slices,128),n=Math.max(A.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=r,this._slices=a,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}s.packedLength=6,s.pack=function(t,e,i){return i=A.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=A.defaultValue(t._offsetAttribute,-1),e};var f={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return s.unpack=function(t,e,i){e=A.defaultValue(e,0);var r=t[e++],a=t[e++],n=t[e++],o=t[e++],u=t[e++],e=t[e];return A.defined(i)?(i._length=r,i._topRadius=a,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===e?void 0:e,i):(f.length=r,f.topRadius=a,f.bottomRadius=n,f.slices=o,f.numberOfVerticalLines=u,f.offsetAttribute=-1===e?void 0:e,new s(f))},s.createGeometry=function(t){var e=t._length,i=t._topRadius,r=t._bottomRadius,a=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||r<0||0===i&&0===r)){var o,u,s=2*a,f=h.CylinderGeometryLibrary.computePositions(e,i,r,a,!1),d=2*a;0<n&&(o=Math.min(n,a),u=Math.round(a/o),d+=o);for(var b=G.IndexDatatype.createTypedArray(s,2*d),l=0,m=0;m<a-1;m++)b[l++]=m,b[l++]=m+1,b[l++]=m+a,b[l++]=m+1+a;if(b[l++]=a-1,b[l++]=0,b[l++]=a+a-1,b[l++]=a,0<n)for(m=0;m<a;m+=u)b[l++]=m,b[l++]=m+a;n=new R.GeometryAttributes;n.position=new v.GeometryAttribute({componentDatatype:_.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),O.x=.5*e,O.y=Math.max(r,i);i=new p.BoundingSphere(y.Cartesian3.ZERO,y.Cartesian2.magnitude(O));return A.defined(t._offsetAttribute)&&(e=f.length,f=new Uint8Array(e/3),e=t._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1,c.arrayFill(f,e),n.applyOffset=new v.GeometryAttribute({componentDatatype:_.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})),new v.Geometry({attributes:n,indices:b,primitiveType:v.PrimitiveType.LINES,boundingSphere:i,offsetAttribute:t._offsetAttribute})}},function(t,e){return A.defined(e)&&(t=s.unpack(t,e)),s.createGeometry(t)}});
