class Tile{
    constructor(x,y,level){
	this.x = x;
	this.y = y;
	this.level = level;
    }

    tile2dStr(){
	return "tile2d(" + this.x + "," + this.y + "," + this.level + ")";
    }
    
    toStr() {
	return "qaddr(" + this.x + "," + this.y + "," + this.level + ")";
    }
}

class NanocubeLayer{
    constructor(gl, shaderManager, minZoomLevel, maxZoomLevel, nanocube, containerMap){
	//
	this.glContext = gl;
	this.opacity = 1.0;
	this.minNormalizer = 0.0;
	this.maxNormalizer = 1.0;
	//
	this.vertexBuffer = new GLBuffer(this.glContext, this.glContext.ARRAY_BUFFER, "float32");
	this.indexBuffer  = new GLBuffer(this.glContext, this.glContext.ELEMENT_ARRAY_BUFFER, "uint16");
	this.shaderManager = shaderManager;

	//
	this.containerMap = containerMap;

	this.containerMap.on("moveend",(function(e){
	    var b = this.containerMap.getBounds();
	    var bounds = [[b._southWest.lng,b._southWest.lat],
			  [b._northEast.lng,b._northEast.lat]];
	    var zoom = this.containerMap.getZoom();
	    var ntiles = Math.pow(2,zoom);
	    
	    var tilelist = xyz(bounds,Math.min(zoom, 25));
	    tilelist.forEach(function(d){
		var ty = (ntiles-1)-d.y;
		//console.log("Tile: " + d.z + "," + d.x + "," + d.y);
	    });



	    // spvar.setCurrentView(tilelist);
	    // that.redraw(spvar);

            // if (that.autorenorm){
	    // 	heatmap.renormalize();
            // }
	    
	    // that.updateInfo();
            //console.log('moveend');
	}).bind(this));
	//this.tiles = [];
	// var tileStyles = [];
	// d3.selectAll(".leaflet-tile").each(function(d,i){
	//     tileStyles.push(d3.select(this).attr("style"))
	// });
	// tileStyles.forEach((function(d){
	//     var tile = new Tile();
	//     tile.init(d);
	//     this.tiles.push(tile);
	// }).bind(this));
	
	//
	this.nanocube = nanocube;
	
	//
	this.dataInitialized = false;
	this.enabled         = true;
	//
	//default color scale
	this.colormapTexture = this.glContext.createTexture();
	this.glContext.bindTexture(this.glContext.TEXTURE_2D, this.colormapTexture);
	// 3x1 pixel 1d texture
	var oneDTextureTexels = new Uint8Array([
	    255,247,236,255,
	    254,232,200,255,
	    253,212,158,255,
	    253,187,132,255,
	    252,141,89,255,
	    239,101,72,255,
	    215,48,31,255,
	    179,0,0,255
	]);

	var divergingTextureTexels = new Uint8Array([
	    215,48,39,255,
	    244,109,67,255,
	    253,174,97,255,
	    254,224,144,255,
	    224,243,248,255,
	    171,217,233,255,
	    116,173,209,255,
	    69,117,180,255]);
	
	this.glContext.texImage2D(this.glContext.TEXTURE_2D, 0, gl.RGBA, 8, 1, 0, this.glContext.RGBA, this.glContext.UNSIGNED_BYTE,
				  oneDTextureTexels);
    }

    //
    setOpacity(newValue){
	this.opacity = newValue;
    }

    renderData(){
	//console.log("Nanocube layer: render");
    }
}
