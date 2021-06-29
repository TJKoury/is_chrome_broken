/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-f31b6bd1', './FrustumGeometry-881d1438', './Transforms-d2b6be42', './Cartesian2-29c15ffd', './Check-ed9ffed2', './Math-03750a0b', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './Plane-01ea173f', './VertexFormat-44d61ac9'], function (when, FrustumGeometry, Transforms, Cartesian2, Check, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (when.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

});
