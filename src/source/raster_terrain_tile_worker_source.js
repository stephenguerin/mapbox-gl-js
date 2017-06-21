'use strict';
const DEMPyramid = require('../geo/dem_pyramid').DEMPyramid;


class RasterTerrainTileWorkerSource {
    constructor(actor, layerIndex) {
        this.actor = actor;
        this.layerIndex = layerIndex;

        this.loading = {};
        this.loaded = {};
    }

    loadTile(params, callback) {
        const source = params.source,
            uid = params.uid;

        if (!this.loading[source])
            this.loading[source] = {};

        const dem = new DEMPyramid(uid);
        dem.loadFromImage(params.rawImageData);
        const transferrables = [];
        callback(null, dem.serialize(transferrables), transferrables);

    }

    // reloadTile(){
    //     console.log('reloadTile');
    // }

    // abortTile (){
    //     console.log('abortTile');
    // }

    // removeTile(){
    //     console.log('removeTile');
    // }

}

module.exports = RasterTerrainTileWorkerSource;