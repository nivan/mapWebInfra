class RenderingLayer{
    constructor(gl,shaderManager,minZoomLevel,maxZoomLevel){
	//
	this.glContext     = gl;
	this.dataInfo      = {};
	
	//
	this.vertexBuffer    = new GLBuffer(this.glContext, this.glContext.ARRAY_BUFFER, "float32");
	this.shaderManager   = shaderManager;
	this.dataInitialized = false;
	this.enabled         = true;
    }

    setEnabled(v){
	this.enabled = v;
    }

    setData(newData){
    }

    renderData(){
    }
}
