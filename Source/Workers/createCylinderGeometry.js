/* This file is automatically rebuilt by the Cesium build process. */
define(['./CylinderGeometry-f8f9f156', './when-f31b6bd1', './GeometryOffsetAttribute-f6456e72', './Check-ed9ffed2', './Transforms-d2b6be42', './Cartesian2-29c15ffd', './Math-03750a0b', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './CylinderGeometryLibrary-a5923d2f', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './IndexDatatype-15184ec8', './VertexFormat-44d61ac9'], function (CylinderGeometry, when, GeometryOffsetAttribute, Check, Transforms, Cartesian2, _Math, RuntimeError, ComponentDatatype, WebGLConstants, CylinderGeometryLibrary, GeometryAttribute, GeometryAttributes, IndexDatatype, VertexFormat) { 'use strict';

  function createCylinderGeometry(cylinderGeometry, offset) {
    if (when.defined(offset)) {
      cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
    }
    return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
  }

  return createCylinderGeometry;

});
