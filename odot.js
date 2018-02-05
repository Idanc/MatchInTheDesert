(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"odot_atlas_", frames: [[0,0,1280,840],[0,842,800,759]]}
];


// symbols:



(lib.HITLogo = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HITLogo();
	this.instance.parent = this;
	this.instance.setTransform(51,-4,0.102,0.102);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#008285").ss(1.5,1,1).p("ASUAAMgknAAA");
	this.shape.setTransform(-77.9,38.2);

	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "bold 20px 'Arial'", "#008285");
	this.text.name = "text";
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 246;
	this.text.parent = this;
	this.text.setTransform(37.3,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AMWG7IAAltMgrEAAAIAAlxMArEAAAIAAiXISZAAIAAN1g");
	this.shape_1.setTransform(-19.9,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.3,-4,392.3,86);


(lib.odot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hitBtn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			window.open("http://www.hit.ac.il/telem/overview", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("מכון טכנולוגי חולון", "bold 20px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 149;
	this.text.parent = this;
	this.text.setTransform(62.6,181.8);

	this.hitBtn = new lib.hit_btn();
	this.hitBtn.name = "hitBtn";
	this.hitBtn.parent = this;
	this.hitBtn.setTransform(89.5,177.8,1,1,0,0,0,63.6,41.8);
	new cjs.ButtonHelper(this.hitBtn, 0, 1, 2, false, new lib.hit_btn(), 3);

	this.text_1 = new cjs.Text(":פותח במסגרת פרויקט בקורסים\nסביבות לימוד אינטרקטיביות 1 & אנימציה, תשע\"ח", "bold 20px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 451;
	this.text_1.parent = this;
	this.text_1.setTransform(-0.1,66.7);

	this.text_2 = new cjs.Text("אפיון ופיתוח: איה קפלן ועידן צזנה", "bold 28px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 386;
	this.text_2.parent = this;
	this.text_2.setTransform(-0.1,-5);

	this.text_3 = new cjs.Text("מאצ' במדבר", "bold 28px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 33;
	this.text_3.lineWidth = 160;
	this.text_3.parent = this;
	this.text_3.setTransform(0,-95.6);

	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(101,-117,0.106,0.106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.hitBtn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odot_mc, new cjs.Rectangle(-227.7,-117,455.5,335), null);


// stage content:
(lib.odot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.odot_mc();
	this.instance.parent = this;
	this.instance.setTransform(282.6,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(329.8,243.5,455.5,335);
// library properties:
lib.properties = {
	id: '93482A9AC84CE6429D6B4BDB9393958F',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/odot_atlas_.png?1517838350895", id:"odot_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93482A9AC84CE6429D6B4BDB9393958F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;