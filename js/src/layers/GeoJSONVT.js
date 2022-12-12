// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const L = require('../leaflet.js');
const layer = require('./Layer.js');
const { geoJSONVT } = require('leaflet-geojson-vt');


export class LeafletGeoJSONVTModel extends layer.LeafletUILayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletGeoJSONVTView',
      _model_name: 'LeafletGeoJSONVTModel',
      data: {},
      max_zoom: 24,
      tolerance: 3,
      extent: 4096,
      buffer: 64,
      debug: 0,
      lineMetrics: false,
      index_max_zoom: 4, 
      index_max_points: 100000,
      solid_children: false,

    };
  }
}

export class LeafletGeoJSONVTView extends layer.LeafletUILayerView {
  create_obj() {
    this.obj = geoJSONVT(this.model.get('data'), this.get_vt_options());
  }

   get_vt_options() {
    const options = this.get_options();
    options.use = L[options.use];
    return options;
  } 

}
