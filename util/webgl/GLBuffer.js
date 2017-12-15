class GLBuffer{
    constructor(gl, target, varType){
	this.glContext = gl;
	this.bufferID  = this.glContext.createBuffer();
	this.target    = target;
	this.size      = 0;
	this.varType   = varType;
    }

    setData(newData,usage){
	var serializedData = undefined;
	if(this.varType == "float32")
	    serializedData = new Float32Array(newData);
	else if(this.varType == "uint16")
	    serializedData = new Uint16Array(newData);
	else{
	    debugger
	    alert("Buffer type error!!!!!");
	    return undefined
	}

	var newSize = serializedData.byteLength;

	this.glContext.bufferData(this.target,serializedData,usage);	
	this.size = serializedData.byteLength;
    }

    bind(){
	this.glContext.bindBuffer(this.target,this.bufferID);
    }

    getSize(){
	return this.size;
    }

    dispose(){
	this.glContext.deleteBuffer(this.bufferID);
    }
}
