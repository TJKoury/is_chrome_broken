/* This file is automatically rebuilt by the Cesium build process. */
define(['./PrimitivePipeline-30824d2b', './createTaskProcessorWorker', './Transforms-d2b6be42', './Cartesian2-29c15ffd', './Check-ed9ffed2', './when-f31b6bd1', './Math-03750a0b', './RuntimeError-c7c236f3', './ComponentDatatype-2ec73936', './WebGLConstants-34c08bc0', './GeometryAttribute-8c2091fc', './GeometryAttributes-e973821e', './GeometryPipeline-a628aa57', './AttributeCompression-69f7b4c3', './EncodedCartesian3-3efd178b', './IndexDatatype-15184ec8', './IntersectionTests-14c69080', './Plane-01ea173f', './WebMercatorProjection-98814ec7'], function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Cartesian2, Check, when, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

});
