/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */

define(['./Cartesian2-b4b7b0b3', './when-208fe5b0', './EllipseGeometry-4fd9b512', './Check-5e798bbf', './Math-8386669c', './GeometryOffsetAttribute-3497d4dd', './Transforms-4e23335e', './RuntimeError-7f634f5d', './ComponentDatatype-ce69354e', './WebGLConstants-76bb35d1', './EllipseGeometryLibrary-1a81de9e', './GeometryAttribute-02d80cc5', './GeometryAttributes-b0b294d8', './GeometryInstance-a1c3321e', './GeometryPipeline-f131a8f5', './AttributeCompression-9711314b', './EncodedCartesian3-21af0f3b', './IndexDatatype-da7c58eb', './IntersectionTests-383c3f8a', './Plane-6d0fd75c', './VertexFormat-7e57a3bd'], function (Cartesian2, when, EllipseGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

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
