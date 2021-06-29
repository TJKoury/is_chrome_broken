/* This file is automatically rebuilt by the Cesium build process. */
define(['./Cartesian2-29c15ffd', './when-f31b6bd1', './EllipseOutlineGeometry-d07d5772', './Check-ed9ffed2', './Math-03750a0b', './GeometryOffsetAttribute-f6456e72', './Transforms-d2b6be42', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './EllipseGeometryLibrary-8d3cd089', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './IndexDatatype-15184ec8'], function (Cartesian2, when, EllipseOutlineGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, IndexDatatype) { 'use strict';

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseOutlineGeometry;

});
