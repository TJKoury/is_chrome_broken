/* This file is automatically rebuilt by the Cesium build process. */
define(['./BoxGeometry-ad201ccf', './when-f31b6bd1', './GeometryOffsetAttribute-f6456e72', './Check-ed9ffed2', './Transforms-d2b6be42', './Cartesian2-29c15ffd', './Math-03750a0b', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './VertexFormat-44d61ac9'], function (BoxGeometry, when, GeometryOffsetAttribute, Check, Transforms, Cartesian2, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (when.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

});
