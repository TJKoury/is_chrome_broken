/* This file is automatically rebuilt by the Cesium build process. */
define(['./Cartesian2-29c15ffd', './when-f31b6bd1', './EllipseGeometry-ad1a3702', './Check-ed9ffed2', './Math-03750a0b', './GeometryOffsetAttribute-f6456e72', './Transforms-d2b6be42', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './EllipseGeometryLibrary-8d3cd089', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './GeometryInstance-eafa4aec', './GeometryPipeline-a628aa57', './AttributeCompression-69f7b4c3', './EncodedCartesian3-3efd178b', './IndexDatatype-15184ec8', './IntersectionTests-14c69080', './Plane-01ea173f', './VertexFormat-44d61ac9'], function (Cartesian2, when, EllipseGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

});
