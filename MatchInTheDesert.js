(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"MatchInTheDesert_atlas_", frames: [[415,1204,250,318],[0,0,800,1202],[802,986,680,1024],[802,0,718,984],[0,1204,413,599],[415,1524,220,292],[0,2012,960,620]]}
];


// symbols:



(lib.churchillPeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gandiPeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.juliusPeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mariePeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.napoleonPeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.oprahPeople = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.skybg = function() {
	this.spriteSheet = ss["MatchInTheDesert_atlas_"];
	this.gotoAndStop(6);
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


(lib.tutorialRestart_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AA9gnQAOASAAAYQAAAfgWAVQgWAWgfAAQgeABgWgWQgWgWAAgfQABgeAWgWQADgDAEgDAgYgcIAAgwIgwAA");
	this.shape.setTransform(7.5,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0BwIAAjfIDoAAIAADfg");
	this.shape_1.setTransform(8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-2,19,19.5);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-3.6,-4.4,23.3,22.4)];


(lib.tutorialPressKey_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AidC8QgNgBgLgIQgJgKAAgOIAAk0QAAgOAJgKQALgKANAAIE7AAQAOAAAJAKQAJAKAAAOIAAE0QAAAOgJAKQgJAIgOABg");
	this.shape.setTransform(19.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialPressKey_mc, rect = new cjs.Rectangle(0,0,38.1,37.5), [rect]);


(lib.tutorialPause_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAxg5IAABzAgwg5IAABz");
	this.shape.setTransform(4.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLhUICXBUIiXBWg");
	this.shape_1.setTransform(6.2,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,14.9,16.6);
p.frameBounds = [rect, new cjs.Rectangle(-1.3,-2.6,15.1,17.1)];


(lib.tutorialOpen_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#272727").ss(1.5,1,1).p("AAlBWIAAirAAABBIAAiBAgkAuIAAha");
	this.shape.setTransform(8.8,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#272727").ss(1.5,1,1).p("ABXCzIAAACIhKAAQgZAAgUgHQgKgEgIgFQgigWgCg4IAAitQADhNBCgOQAOgDAQAAIBKAA");
	this.shape_1.setTransform(8.7,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANC1QgZAAgTgHQgKgDgJgGQgigWgCg4IAAitQADhNBCgOQAOgDAQAAIBJAAIAAFoIAAABg");
	this.shape_2.setTransform(8.7,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,19.3,38.2);
p.frameBounds = [rect];


(lib.tutorialHouseText_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("בית", "25px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialHouseText_mc, rect = new cjs.Rectangle(0,0,104,32), [rect]);


(lib.tutorialClose_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAAIgwgwAAxAxIgxgxIgwAxAAxgwIgxAw");
	this.shape.setTransform(4.9,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0BwIAAjfIDpAAIAADfg");
	this.shape_1.setTransform(5.4,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,14.8,14.8);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-6.3,-5.8,23.3,22.4)];


(lib.tutorialBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layers
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7247").s().p("AgtUvIgJAAIAAgWQgXALgyAAQhYAAg1gTQgOgGgCABQgCACAAAPQAAAHgIAEQgKADgZAAQghAAgggNQgjgPgTgFQgBALgMAJQgQALgaAAQggAAgUgIQgRgHgGgLQgbAKgbAAIgCAAQg8gCgQgCQgpgEgYgJQgHAIgBARQAAAFghAAQgSAAgugKQgygLgDgJIABAEQACAEAAACQAAAJgaAHQgdAIgnAAQgfAAgYgEQgdgFgBgJQAAgHAOgIQgLACgWAAQgbAAgcgGQgTgDgcgJIgnAAQgMAHgWAFQgVAFgVAAQgZAAgdgGIgmgIIgJAAQgCAJgYAGQgXAGggAAQhOAAgcgOQgEAAgHgDQgKgDgGAAQAAAUgHAFIgEADIAAhzIZRAAIAAABIALgBIAWAAIadAAIAABuQgfgEgUgIQgIAIAAARQgBAFghAAQgSAAgugKQgygLgDgJIACAEIACAGQAAAJgaAHQgRAFgVACQgPABgQAAIgFAAQgcAAgWgEQgegFAAgJQAAgHAOgIQgLACgWAAQgcAAgbgGQgTgDgbgJIgoAAQgKAHgYAFQgVAFgVAAQgZAAgdgGIglgIIgLAAQAAAJgXAGQgYAGghAAQhMAAgcgOQgFAAgJgDQgIgDgGAAQgBAUgGAFQgLAKgvAAQgWAAgmgGQgpgHgTAAQgfAAgJAOQgHAOgeAAQhFAAhAgeQgKAFAAAHQABADgSAAQg7AAglgJQgYgHgKgJIABAQQAAAFgFAFQgJAFgRAAQg4AAgVgDQgugFgPgQQgCAQgOAIQgMAIgfABIgCAAgAgqypIgIAAIAAgVQgXALgyAAQhbAAg1gTQgOgGgCABQgCABAAAQQABAHgKADQgJADgaAAQggAAgigMQgigPgUgFQAAAKgNAJQgQALgbAAQgfAAgVgIQgRgHgGgKQgbAJgcAAIgBAAQg9gCgRgBQgpgEgYgJQgHAIgBAQQAAAFgiAAQgSAAgvgJQgygLgDgKIABAFIACAGQAAAIgaAHQgdAJgpAAQgeAAgZgFQgdgFAAgJQAAgGANgIQgLACgXAAQgcAAgcgGQgTgDgbgJIgpABQgKAHgXAEQgVAFgVAAQgaAAgdgGIgmgIIgLAAQAAAJgYAGQgYAGghAAQhOAAgbgOQgGAAgHgDQgHgCgGAAIAAhVMA0PAAAIAABnQgRgEgMgEQgJAIAAAQQAAAFghAAQgTAAgugJQgygLgDgKIABAFIACAGQAAAIgaAHQgdAJgpAAQgfAAgZgFQgdgFAAgJQAAgGAOgIQgMACgVAAQgdAAgcgGQgSgDgcgJIgpABQgKAHgXAEQgWAFgVAAQgaAAgdgGIglgIIgLAAQAAAJgZAGQgXAGggAAQhPAAgcgOQgEAAgJgDQgJgDgFAAQgBAUgHAFQgLAJgvAAQgXAAgmgGQgogGgUAAQghAAgHANQgIAOgfAAQhGAAhBgdQgKAFAAAHQACACgTAAQg7AAgkgJQgagGgKgJIABAPQAAAGgGAEQgIAFgRAAQg4AAgWgCQgtgFgRgQQgCAQgOAHQgMAIgfABIgDAAg");
	this.shape.setTransform(4.7,154.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("ALIUqQg4gGg2glQgJAIABAKQAAAEgSAAQg5AAgjgNQgZgKgJgNQACAHABAQQgBAJgGAGQgIAGgQAAQgwABgbgGQgsgKgPgYQgnAkgWABQguAEgggFIgXgIIAAgaQgXALgeAAQgJAAgOgCQgUAbg8gBQhXAAgygcQgNgIgCABQgBACgBAYQAAAKgIAFQgLAEgYAAQggABgggTQghgWgTgHQAAAQgMANQgPAQgaAAQgfgBgUgKQgQgLgEgPQgbANgZAAIgDAAIhMgFQgngGgXgOQgLAUgDARQgFAHgiAAQgQAAgogOQgogQgFgOQAAADACADQACAFAAAEQAAAMgZAMQgdAMgnAAQgdAAgYgHQgdgIAAgNQAAgJAOgMQgJADgXAAQgcAAgbgIQgRgGgbgNIgnABQgLAKgVAIQgVAGgTAAQgaAAgcgHIgkgNIgLAAQgBANgXAJQgWAJggAAQgdAAgZgJQgbgIgQgMIgeAAQgBAMgFAYQAAAEgSAFQgSAFgUAAQgYABglgKIgdgFIAAg6IAEgDQAHgFAAgVQAGAAAKAEQAHADAEAAQAcAOBOAAQAgAAAXgGQAYgGACgKIAJAAIAmAJQAdAGAZAAQAVAAAVgFQAWgFAMgHIAnAAQAcAIATAEQAcAGAbAAQAWAAALgCQgOAIAAAGQABAJAdAGQAYAEAfAAQAnAAAdgJQAagGAAgJQAAgDgCgDIgBgFQADAKAyALQAuAJASABQAhAAAAgGQABgQAHgJQAYAKApAEQAQACA8ABIACAAQAbAAAbgJQAGALARAGQAUAJAgAAQAaAAAQgLQAMgKABgKQATAFAjAPQAgAMAhAAQAZAAAKgDQAIgDAAgHQAAgPACgCQACgBAOAFQA1AUBYAAQAyAAAXgLIAAAWIAJAAIACAAQAfgBAMgIQAOgIACgQQAPAQAuAFQAVACA4ABQARAAAJgGQAFgEAAgGIgBgPQAKAJAYAGQAlAKA7gBQASABgBgDQAAgHAKgGQBAAfBFAAQAegBAHgOQAJgNAfAAQATAAApAGQAmAHAWgBQAvAAALgJQAGgFABgVQAGAAAIAEQAJADAFAAQAcAOBMAAQAhAAAYgGQAXgGAAgKIALAAIAlAJQAdAGAZAAQAVAAAVgFQAYgFAKgHIAoAAQAbAIATAEQAbAGAcAAQAWAAALgCQgOAIAAAGQAAAJAeAGQAWAEAcAAQgLAKgVAHQgVAGgTAAQgaAAgcgHIgjgNIgMAAQgBANgWAJQgXAJgfAAQgdAAgagJQgagIgQgMIggAAQABAMgGAYQAAAEgRAFQgTAFgUAAQgXABglgKQgogJgTAAQgfAAgHAVQgFAPgUADIgMABIgUgBgAYPUeQgcgIAAgNQAAgJANgMQgJADgWAAQgdAAgagIQgSgGgbgNIgDAAQAVgBARgGQAagGAAgJIgCgGIgCgFQADAKAyALQAuAJASABQAhAAABgGQAAgQAIgJQAUAIAfAFIAABRQgdAMgnAAQgdAAgYgHgAJlzJQgJAIABAKQAAAEgTAAQg5AAgjgNQgagJgJgOQACAHAAAQQAAAIgGAGQgIAHgQAAQgxAAgcgGQgsgJgQgXQgmAigXACQguAFgggGIgYgIIAAgZQgWAKgfAAIgWgBQgVAZg8AAQhZAAgzgcQgNgHgBACQgCAAAAAYQAAAKgJAEQgKAFgZAAQggAAghgRQghgWgSgIQAAAPgOAOQgPAQgbAAQgeAAgUgMQgRgLgFgOQgbANgZAAIgCAAIhNgFQgngGgXgOQgMAUgDAQQgEAIgjAAQgRAAgogPQgQgGgLgGIgFACQgZAKgfACQggACgTgEQgRgEgQgIQgQgJgRgGQgKADgWABQgcgBgbgHQgSgGgbgMIgnAAQgMAKgVAIQgWAFgSABQgaAAgdgIIgjgNIgMABQAAANgYAJQgXAIggABQgdAAgbgJQgZgIgRgMIggAAQAAALgEAYQAAAEgSAEQgTAGgWAAQgWAAglgJIgQgDIAAhnQAGABAHACQAHADAGAAQAbANBOAAQAhABAYgGQAYgGAAgJIALAAIAmAIQAdAGAaAAQAVAAAVgFQAXgFAKgGIApgBQAbAIATAEQAcAFAcABQAXAAALgCQgNAHAAAHQAAAJAdAFQAZAFAegBQApAAAdgIQAagHAAgIIgCgGIgBgFQADAKAyALQAvAJASAAQAiAAAAgFQABgRAHgIQAYAKApAEQARABA9ACIABAAQAcAAAbgJQAGAKARAHQAVAIAfAAQAbAAAQgLQANgJAAgKQAUAFAiAPQAiAMAggBQAaAAAJgCQAKgEgBgGQAAgQACgBQACgBAOAFQA1AUBbAAQAyAAAXgMIAAAWIAIAAIADAAQAfgBAMgIQAOgHACgQQARAQAtAEQAWADA4AAQARAAAIgFQAGgFAAgFIgBgPQAKAJAaAGQAkAJA7AAQATAAgCgCQAAgIAKgFQBBAeBGAAQAfAAAIgOQAHgNAhAAQAUAAAoAGQAmAGAXAAQAvAAALgKQAHgEABgUQAFAAAJADQAJADAEAAQAcANBPAAQAgABAXgGQAZgGAAgJIALAAIAlAIQAdAGAaAAQAVAAAWgFQAXgFAKgGIApgBQAcAIASAEQAcAFAdABQAVAAAMgCQgOAHAAAHQAAAJAdAFQAZAFAfgBQApAAAdgIQAagHAAgIIgCgGIgBgFQADAKAyALQAuAJATAAQAhAAAAgFQAAgRAJgIQAMAFARADIAABfQgWAHgNgGIgagLIhDgcQg7gZALATQAMAUg+gUIgVgJIgnAAQgMAKgVAIQgWAFgSABQgaAAgdgIIgkgNIgLABQgBANgXAJQgXAIghABQgcAAgcgJQgZgIgQgMIggAAQAAALgEAYQgBAEgRAEQgTAGgWAAQgWAAgmgJQgngJgUAAQgeAAgIAUQgHATgfAAQhEAAg/grg");
	this.shape_1.setTransform(4.7,161.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48749").s().p("ALoULQAUgEAFgPQAHgUAfAAQATAAAoAJQAlAJAXAAQAUAAATgGQARgFAAgDQAGgYgBgNIAgAAQAQANAaAIQAaAJAdAAQAfAAAXgJQAWgJABgNIAMgBIAjANQAcAIAaAAQATAAAVgGQAVgIALgJIAFAAQAQAAAPgCIADAAQAbANASAGQAaAIAdAAQAWAAAJgEQgNANAAAJQAAANAcAIQAYAHAdAAQAnAAAdgMIAAARgA6HULIAAgkIAdAGQAlAJAYAAQAUAAASgGQASgFAAgDQAFgYABgNIAeAAQAQANAbAIQAZAJAdAAQAgAAAWgJQAXgJABgNIALgBIAkANQAcAIAaAAQATAAAVgGQAVgIALgKIAngBQAbANARAGQAbAIAcAAQAXAAAJgEQgOANAAAJQAAANAdAIQAYAHAdAAQAnAAAdgMQAZgMAAgMQAAgEgCgFQgCgDAAgDQAFAOAoAPQAoAPAQAAQAiAAAFgIQADgQALgUQAXAOAnAGIBMAFIADAAQAZAAAbgOQAEAPAQALQAUALAfAAQAaAAAPgPQAMgOAAgQQATAIAhAWQAgASAgAAQAYAAALgFQAIgEAAgLQABgXABgCQACgBANAHQAyAdBXAAQA8AAAUgaQAOACAJAAQAeAAAXgLIAAAaIAXAHQAgAGAugEQAWgCAngjQAPAYAsAKQAbAFAwAAQAQAAAIgHQAGgGABgJQgBgPgCgHQAJANAZAJQAjAOA5AAQASAAAAgFQgBgJAJgJQA2AmA4AGgAgRyWIgLAAIgWABIwBgpIpUASIAAgyIAQADQAlAJAWAAQAWAAATgGQASgEAAgEQAEgYAAgMIAgAAQARANAZAIQAbAIAdAAQAgAAAXgJQAYgIAAgNIAMgBIAjANQAdAHAaAAQASAAAWgGQAVgHAMgKIAngBQAbANASAFQAbAIAcAAQAWAAAKgDQARAGAQAJQAQAIARAEQATAEAggCQAfgCAZgKIAFgCQALAGAQAGQAoAPARAAQAjAAAEgIQADgQAMgUQAXAOAnAGIBNAFIACAAQAZAAAbgNQAFAOARALQAUALAeAAQAbAAAPgQQAOgNAAgPQASAIAhAVQAhASAgAAQAZAAAKgFQAJgEAAgLQAAgXACgBQABgCANAIQAzAcBZAAQA8AAAVgaIAWACQAfAAAWgLIAAAaIAYAHQAgAGAugEQAXgCAmgjQAQAYAsAJQAcAGAxAAQAQAAAIgHQAGgGAAgJQAAgPgCgHQAJAOAaAIQAjAOA5AAQATAAAAgEQgBgKAJgIQA/ArBEAAQAfAAAHgTQAIgUAeAAQAUAAAnAJQAmAJAWAAQAWAAATgGQARgEABgEQAEgYAAgMIAgAAQAQANAZAIQAcAIAcAAQAhAAAXgJQAXgIABgNIALgBIAkANQAdAHAaAAQASAAAWgGQAVgHAMgKIAngBIAVAJQA+AVgMgUQgLgUA7AaIBDAcIAaAKQANAGAWgGIAAAZI6ZAmg");
	this.shape_2.setTransform(4.7,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// alphaEffect
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.6)","rgba(229,204,176,0.6)"],[0,0.537],-2.1,84.1,0,-2.1,84.1,700.2).s().p("EgaHArCMAAAhWDMA0PAAAMAAABWDg");
	this.shape_3.setTransform(4.7,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// hills1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FBD193","#C7775F"],[0,1],245.4,11.1,245.4,-351.6).s().p("A6HK5IAA1mQDFgLCwAAQIiAAIwA1QFWAiI8BQQIvBPD8AZICLALIAARXg");
	this.shape_4.setTransform(4.7,223.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// hills2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FBC87D","#C7775F"],[0,1],160.2,42.7,160.2,-184.5).s().p("A6HNnIAA7FQBngIBiAAQDQAAD1AgQCWAWEYAzQEfA2CLATQDtAhDGAAQDYAAEVghQCxgVE+g0QELgrCPgVIAAakg");
	this.shape_5.setTransform(4.7,206.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["MatchInTheDesert_atlas_"],6), null, new cjs.Matrix2D(1,0,0,1,-484.5,-313.7)).s().p("EgaHArCMAAAhWDMA0PAAAMAAABWDg");
	this.shape_6.setTransform(4.7,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialBG_mc, rect = new cjs.Rectangle(-162.5,-256.7,334.4,550.9), [rect]);


(lib.tutorial_viAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,51,0)").s().p("AgdDXIinmtIA+AAIBwE3QANAmAJAhQAKgkANgjIB0k3IA6AAIipGtg");
	this.shape.setTransform(62.3,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(34,181,115,0)","rgba(11,156,91,0)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMIgkAjQgrAngQAAQgRAAgjgug");
	this.shape_1.setTransform(63.4,62.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(34,181,115,0.024)","rgba(11,156,91,0.024)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_2.setTransform(63.4,62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(34,181,115,0.047)","rgba(11,156,91,0.047)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_3.setTransform(63.4,62.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(34,181,115,0.067)","rgba(11,156,91,0.067)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_4.setTransform(63.4,62.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(34,181,115,0.09)","rgba(11,156,91,0.09)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_5.setTransform(63.4,62.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(34,181,115,0.114)","rgba(11,156,91,0.114)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_6.setTransform(63.4,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(34,181,115,0.137)","rgba(11,156,91,0.137)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_7.setTransform(63.4,62.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(34,181,115,0.161)","rgba(11,156,91,0.161)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_8.setTransform(63.4,62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(34,181,115,0.18)","rgba(11,156,91,0.18)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_9.setTransform(63.4,62.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(34,181,115,0.204)","rgba(11,156,91,0.204)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_10.setTransform(63.4,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(34,181,115,0.227)","rgba(11,156,91,0.227)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_11.setTransform(63.4,62.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(34,181,115,0.251)","rgba(11,156,91,0.251)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_12.setTransform(63.4,62.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(34,181,115,0.275)","rgba(11,156,91,0.275)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_13.setTransform(63.4,62.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(34,181,115,0.294)","rgba(11,156,91,0.294)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_14.setTransform(63.4,62.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(34,181,115,0.318)","rgba(11,156,91,0.318)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_15.setTransform(63.4,62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(34,181,115,0.341)","rgba(11,156,91,0.341)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_16.setTransform(63.4,62.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(34,181,115,0.365)","rgba(11,156,91,0.365)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_17.setTransform(63.4,62.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(34,181,115,0.388)","rgba(11,156,91,0.388)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_18.setTransform(63.4,62.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(34,181,115,0.408)","rgba(11,156,91,0.408)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_19.setTransform(63.4,62.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(34,181,115,0.431)","rgba(11,156,91,0.431)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_20.setTransform(63.4,62.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(34,181,115,0.455)","rgba(11,156,91,0.455)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_21.setTransform(63.4,62.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(34,181,115,0.478)","rgba(11,156,91,0.478)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_22.setTransform(63.4,62.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(34,181,115,0.502)","rgba(11,156,91,0.502)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_23.setTransform(63.4,62.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(34,181,115,0.522)","rgba(11,156,91,0.522)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_24.setTransform(63.4,62.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(34,181,115,0.545)","rgba(11,156,91,0.545)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_25.setTransform(63.4,62.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(34,181,115,0.569)","rgba(11,156,91,0.569)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_26.setTransform(63.4,62.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(34,181,115,0.592)","rgba(11,156,91,0.592)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_27.setTransform(63.4,62.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(34,181,115,0.612)","rgba(11,156,91,0.612)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_28.setTransform(63.4,62.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(34,181,115,0.635)","rgba(11,156,91,0.635)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_29.setTransform(63.4,62.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(34,181,115,0.659)","rgba(11,156,91,0.659)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_30.setTransform(63.4,62.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(34,181,115,0.682)","rgba(11,156,91,0.682)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_31.setTransform(63.4,62.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(34,181,115,0.706)","rgba(11,156,91,0.706)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_32.setTransform(63.4,62.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(34,181,115,0.725)","rgba(11,156,91,0.725)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_33.setTransform(63.4,62.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(34,181,115,0.749)","rgba(11,156,91,0.749)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_34.setTransform(63.4,62.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(34,181,115,0.773)","rgba(11,156,91,0.773)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_35.setTransform(63.4,62.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(34,181,115,0.796)","rgba(11,156,91,0.796)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_36.setTransform(63.4,62.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(34,181,115,0.82)","rgba(11,156,91,0.82)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_37.setTransform(63.4,62.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(34,181,115,0.839)","rgba(11,156,91,0.839)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_38.setTransform(63.4,62.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(34,181,115,0.863)","rgba(11,156,91,0.863)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_39.setTransform(63.4,62.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(34,181,115,0.886)","rgba(11,156,91,0.886)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_40.setTransform(63.4,62.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(34,181,115,0.91)","rgba(11,156,91,0.91)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_41.setTransform(63.4,62.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(34,181,115,0.933)","rgba(11,156,91,0.933)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_42.setTransform(63.4,62.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(34,181,115,0.953)","rgba(11,156,91,0.953)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_43.setTransform(63.4,62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(34,181,115,0.976)","rgba(11,156,91,0.976)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_44.setTransform(63.4,62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMIgkAjQgrAngQAAQgRAAgjgug");
	this.shape_45.setTransform(63.4,62.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(34,181,115,0.949)","rgba(11,156,91,0.949)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_46.setTransform(63.4,62.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(34,181,115,0.894)","rgba(11,156,91,0.894)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_47.setTransform(63.4,62.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(34,181,115,0.843)","rgba(11,156,91,0.843)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_48.setTransform(63.4,62.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(34,181,115,0.788)","rgba(11,156,91,0.788)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_49.setTransform(63.4,62.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(34,181,115,0.737)","rgba(11,156,91,0.737)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_50.setTransform(63.4,62.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(34,181,115,0.631)","rgba(11,156,91,0.631)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_51.setTransform(63.4,62.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(34,181,115,0.58)","rgba(11,156,91,0.58)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_52.setTransform(63.4,62.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(34,181,115,0.525)","rgba(11,156,91,0.525)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_53.setTransform(63.4,62.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(34,181,115,0.475)","rgba(11,156,91,0.475)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_54.setTransform(63.4,62.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(34,181,115,0.42)","rgba(11,156,91,0.42)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_55.setTransform(63.4,62.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(34,181,115,0.369)","rgba(11,156,91,0.369)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_56.setTransform(63.4,62.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(34,181,115,0.263)","rgba(11,156,91,0.263)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_57.setTransform(63.4,62.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(34,181,115,0.212)","rgba(11,156,91,0.212)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_58.setTransform(63.4,62.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(34,181,115,0.157)","rgba(11,156,91,0.157)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_59.setTransform(63.4,62.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(34,181,115,0.106)","rgba(11,156,91,0.106)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_60.setTransform(63.4,62.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(34,181,115,0.051)","rgba(11,156,91,0.051)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_61.setTransform(63.4,62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},27).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},5).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(42.6,40.2,39.3,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(35.6,41.1,55.8,43.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorial_magnifyingGlass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2A043").s().p("AlZJRQB4AABvguQBqgtBShTQBShSAthqQAuhuAAh5QAAh4guhuQguhrhRhRQhQhShsgtQhugvh5AAIAAhiQCNAACAA2QB9A1BfBfQBeBfA1B9QA2CAAACMQAACNg2CAQg0B8hfBgQhgBgh8A0QhqAthzAIQgYABgYAAg");
	this.shape.setTransform(-1,-12,0.203,0.203,-41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A4639").s().p("AgXAYIAAgtQAXAAAYgCIAAAvg");
	this.shape_1.setTransform(3.8,3.1,0.203,0.203,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A4639").s().p("AgxHEIAAuHIBjAAIAAOHg");
	this.shape_2.setTransform(11.7,11.1,0.203,0.203,-41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2A043").s().p("Ag/AoIAAhPIB/AAIAABPg");
	this.shape_3.setTransform(5.3,3.5,0.203,0.203,-41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2A043").s().p("Ag/AoIAAhPIB/AAIAABPg");
	this.shape_4.setTransform(18.6,18.4,0.203,0.203,-41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8CA4B").s().p("AkMJ9Qh8g0hghgQhfhgg1h8Qg2iAAAiNQAAiMA2iAQA1h9BfhfQBfhfB9g1QCAg2CMAAQCNAACAA2QB9A1BfBfQBfBfA1B9QA2CAAACMQAACNg2CAQg1B8hfBgQhgBgh8A0Qh/A2iOAAQiMAAiAg2gAjmohQhrAthSBSQhRBRguBrQguBuAAB4QAAB5AuBuQAuBqBRBSQBTBTBqAtQBwAuB2AAQB3AABwguQBqgtBThTQBRhSAuhqQAuhuAAh5QAAh4guhuQguhrhRhRQhShShrgtQhugvh5AAQh3AAhvAvg");
	this.shape_5.setTransform(-6.3,-7.3,0.203,0.203,-41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#745E48").s().p("AguAwIAAhfIBdAAIAABfg");
	this.shape_6.setTransform(3.1,3.1,0.203,0.203,-41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#745E48").s().p("AhjHEIAAuHIDHAAIAAOHg");
	this.shape_7.setTransform(11,11.8,0.203,0.203,-41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8CA4B").s().p("Ah/AoIAAhPID/AAIAABPg");
	this.shape_8.setTransform(4.3,4.4,0.203,0.203,-41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8CA4B").s().p("Ah/AoIAAhPID/AAIAABPg");
	this.shape_9.setTransform(17.6,19.3,0.203,0.203,-41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7E2E8").s().p("Aj4BCQAthqBShSQBThTBogrQBtgvB5AAQAAB5gvBtQgsBphTBSQhQBShrAtQhtAvh5AAQAAh5Avhtg");
	this.shape_10.setTransform(-14.7,-7.8,0.203,0.203,-41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4DBE7").s().p("AgFB4QgYgCgVgJQgWgLgQgSQgRgSgIgXQgHgWABgXQACgXAKgVQAKgWASgQQASgRAXgIQAWgHAWABQAYABAVAKQAWAKARATQAQASAIAXQAHAWgBAWQgBAYgKAVQgKAWgTAQQgSAQgWAIQgTAHgUAAIgGAAg");
	this.shape_11.setTransform(-6.3,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_magnifyingGlass_mc, rect = new cjs.Rectangle(-20.3,-21.3,40.5,43), [rect]);


(lib.tutorial_keyboardKey_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F2F2").s().p("AoHJtQgzAAgkgkQglglAAgzIAAvCQAAg3AlgwQAng0AwAAIQPAAQAxAAAnA0QAkAwAAA3IAAPCQAAAzgkAlQglAkgzAAg");
	this.shape.setTransform(8.6,8.3,0.134,0.134);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E8").s().p("AoUJ9Qg1ABglgmQgmglAAg1IAAvcQAAg4AmgxQAng1AzAAIQpAAQAzAAAnA1QAmAxAAA4IAAPcQAAA1gmAlQglAmg1gBg");
	this.shape_1.setTransform(9,8.6,0.134,0.134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhNBdQgGAAgFgFQgFgFAAgGIAAiYQAAgHAFgEQAFgGAGAAICbAAQAGAAAGAGQAEAEAAAHIAACYQAAAGgEAFQgGAFgGAAg");
	this.shape_2.setTransform(9.6,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_keyboardKey_mc, rect = new cjs.Rectangle(0,0,19,18.5), [rect]);


(lib.tutorial_bubbleText_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bubbleText = new cjs.Text("", "25px 'Arial'");
	this.bubbleText.name = "bubbleText";
	this.bubbleText.textAlign = "center";
	this.bubbleText.lineHeight = 28;
	this.bubbleText.lineWidth = 130;
	this.bubbleText.parent = this;
	this.bubbleText.setTransform(48.6,1.4,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.bubbleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_bubbleText_mc, rect = new cjs.Rectangle(0,0,97.1,23.2), [rect]);


(lib.tutorial_upperHand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AgmAOQgBgpAJgMQAJgMAMgBIAGAAQAJABAJALQgMgCgHADQgMAFgEAQQgGAVAEAVQABAKADAGIAEACIALADQASAEAXgCIgHgIQgLgJgQAAQgJAAgBgDQgBgCAFgDQADgDAHgCQAIgBAGABQALADgIgdIgHgVIgDgKQAFAHAEAKQALAXADAbQACANgBAJIgHABIgxADIgSABQgDgTAAgVg");
	this.shape.setTransform(5.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC768").s().p("AgHAwIgLgDIgDgCQgDgGgCgKQgDgVAGgVQAEgQAMgFQAHgDALACIAEAKIAHAVQAIAdgLgDQgHgBgHABQgGACgFADQgFADACACQABADAIAAQAQAAAMAJIAHAIIgPABQgPAAgMgDgAgHgxIgFAAQgMABgKAMQAMgQAPADg");
	this.shape_1.setTransform(5.8,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD6AF").s().p("AgUBHIAAAAIABgBIAAgBQAFgJAAgNIgChTIgBgqIAwgDIAAABQgLAFgJAHQgMALgDAOQgEASgBAaIgBAlQAAAQgCAHQgEALgMAJIgCABQAGgGAEgFg");
	this.shape_2.setTransform(5.6,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0D9AB").s().p("AgRAnQgIgGgCgFQgBgFAEgFIAGgLQAEgHAAgEQgKAJgIADQgIADgDgEQgCgBABgFIADgFIABgCIABgCIgBACQgCAEAAACQABAEAFAAQAEAAAJgEIAKgIQACADgBAFQgCAGgDADQgEADgBAEIgCAJQAAAFAEACQADACADgBQACgBAHgKIAHgNIACgCIAAACIgEAJIgHAKIgEAGIgCADQACACAGAAIAHgBQACAAAGgJIAHgLIABgCIABABIgEAIQgFAIgFAFQAWAAALgnQAEgNACgQIABgNIgBATIgBANIgBAFQgFAdgTANQgJAHgJAAIgCABQgIAAgHgFg");
	this.shape_3.setTransform(4.5,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4854E").s().p("AgOBzIACgEIAEgGIAHgKIAEgIIAAgCIgCACIgHANQgHAKgCABQgDABgDgCQgEgCAAgFIACgKQABgDAEgDQADgEACgGQABgGgCgCIgKAHQgJAGgEAAQgFAAgBgEQAAgDACgEIABgCQAEgHAIgIIAJgJQAMgJAEgLQACgHAAgQIABgkQABgbADgSQADgOAOgLQAIgHALgFQACAZABAxQACA/gCAfIABgSIgBANQgCAPgEANQgLApgWAAQAFgFAFgJIAEgHIgBgBIgBABIgHALQgGAJgCABIgHABQgGAAgCgCg");
	this.shape_4.setTransform(4.6,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_upperHand_mc, rect = new cjs.Rectangle(0,0,9.4,34.3), [rect]);


(lib.tutorial_underHand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AgmAOQgBgpAJgMQAJgMAMgBIAGAAQAJABAJALQgMgCgHADQgMAFgEAQQgGAVAEAVQABAKADAGIAEACIALADQASAEAXgCIgHgIQgLgJgQAAQgJAAgBgDQgBgCAFgDQADgDAHgCQAIgBAGABQALADgIgdIgHgVIgDgKQAFAHAEAKQALAXADAbQACANgBAJIgHABIgxADIgSABQgDgTAAgVg");
	this.shape.setTransform(5.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC768").s().p("AgHAwIgLgDIgDgCQgDgGgCgKQgDgVAGgVQAEgQAMgFQAHgDALACIAEAKIAHAVQAIAdgLgDQgHgBgHABQgGACgFADQgFADACACQABADAIAAQAQAAAMAJIAHAIIgPABQgPAAgMgDgAgHgxIgFAAQgMABgKAMQAMgQAPADg");
	this.shape_1.setTransform(5.8,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD6AF").s().p("AgOBzIACgEIAEgGIAHgKIAEgIIAAgCIgCACIgHANQgHAKgCABQgDABgDgCQgEgCAAgFIACgKQABgDAEgDQADgEACgGQABgGgCgCIgKAHQgJAGgEAAQgFAAgBgEQAAgDACgEIABgCQAEgHAIgIIAJgJQAMgJAEgLQACgHAAgQIABgkQABgbADgSQADgOAOgLQAIgHALgFQACAZABAxQACA/gCAfIABgSIgBANQgCAPgEANQgLApgWAAQAFgFAFgJIAEgHIgBgBIgBABIgHALQgGAJgCABIgHABQgGAAgCgCg");
	this.shape_2.setTransform(4.6,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4854E").s().p("AgRBzQgIgGgCgFQgBgFAEgFIAGgLQAEgHAAgFQgKAKgIADQgIADgDgEQgCgBABgFIADgGIABgCIABgCIgBACQgCAEAAADQABAEAFAAQAEAAAJgFIAKgIQACADgBAGQgCAGgDADQgEADgBAEIgCAJQAAAFAEACQADACADgBQACgBAHgKIAHgNIACgCIAAACIgEAJIgHAKIgEAGIgCADQACACAGAAIAHgBQACAAAGgJIAHgLIABgCIABABIgEAIQgFAIgFAFQAWAAALgoQAEgNACgQIABgNIgBATIgBANIgBAFQgFAegTANQgJAHgJAAIgCABQgIAAgHgFgAgKAiIABgBIAAgBIABgBQAEgJAAgNIgChTIgBgqIAwgDIAAACQgLAEgIAHQgOAMgDAOQgDASgCAaIAAAkQAAARgCAGQgDAMgNAJIgBABQAGgGADgFg");
	this.shape_3.setTransform(4.5,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_underHand_mc, rect = new cjs.Rectangle(0,0,9.4,34.3), [rect]);


(lib.tutorial_tailFoxBall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCCEA4","#FCD8B7"],[0,1],-19.9,0,20,0).s().p("ACMCIQhKgEhHgSQhagVhMgnIARAGIgdg8IBDgKIhFgaIA3goIhEgDIA3g6QAsAAAjACQAqAEAfAKQAmANAfAaQBKA/AvCcIgPABIgsgCg");
	this.shape.setTransform(38.9,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4854E").s().p("ABQBdQgkgOgxgmIgMgJQhFg0gigwQgFgFgFgIIgBgBIgEgJID1gIIgBACIg3A6IBDADIg2AnIBFAZIhDALIAcA8IgRgGg");
	this.shape_1.setTransform(13.6,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCDA1").s().p("Ag4gyIgFgLQAFAJAEAEQAjAwBDA0IAMAKQhBgwg1hAg");
	this.shape_2.setTransform(6.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_tailFoxBall_mc, rect = new cjs.Rectangle(0,0,58.8,27.7), [rect]);


(lib.tutorial_tailBottomShirt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEBBA9").s().p("AAwBWQgEAAgDgEIgkgwQgCgEABgEQABgEADgCQADgCAEAAIAAAAQAFABACADIAUAcIAPAUQADAEgBAEQAAAEgEACIgCACIgEABIgBgBgAgVgNQgEgBgCgDQgSgdgMgZQgCgEABgEIABgBQABgDADgCIAFgBIADABQAEABACAEIAQAfIANAVQACAEgBAEQgBAEgEACIgEABIgBAAIgCAAg");
	this.shape.setTransform(10.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9A999").s().p("ABNCJQgEgBgCgDIgVgbIADgBQADgDABgEQAAgEgCgDIgQgVIAFAAQAEAAADADIAjAwQADADAAAEQgBAEgDADQgDACgEAAIgBAAgAAFAoQgEAAgCgEIgUgdIAFgCQADgCABgDQABgEgCgDIgMgVIAAAAQAEABACADIAiAxQACADgBAEQAAAEgEADQgDgBgEACgAg+g8QgFgBgCgEQgPgagDgQQgEgXARgFQAEgCAEACQADABACAEQABAEgBAEQgCAEgEABQgBACABAFQADANANAWQACAEgBAEIgBACIgEABQgEACgBACIgBABIgBgBg");
	this.shape_1.setTransform(11.1,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAB35D").s().p("AgUAsQgugCgogEIAEgaIAAABQAMAHAWADQAVAEAZgCQAYgBAWgGQAXgGAOgLIABAAIABgBIACAAIAAAAIABgBIABgBIABgCIAAAAIABgBIABgBQAFgHAEgJIAJgXIAOAAIAFBTQgYAIg2AAIgxgCg");
	this.shape_2.setTransform(10.7,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC768").s().p("Ag9AkQgWgEgMgHIALg+IAXAAIB7AKIAigFIgJAWQgEAKgFAGIgBABIgBAAIgBABIgBACIgBAAIgBABIAAABIgBAAIgBABIgBABQgOALgXAGQgWAGgZABIgOAAQgRAAgPgCg");
	this.shape_3.setTransform(10,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_tailBottomShirt_mc, rect = new cjs.Rectangle(0,-16.2,21.4,27.4), [rect]);


(lib.tutorial_tail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4854E").s().p("AAsA7IgDgCIgBgBQgYgOgcgeQgcgbgJgUIgBgEIAeALIAAghIARAgIAPgdIAEAhIAZgfIAEAqIAGBMIgHgDg");
	this.shape.setTransform(10.7,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCDAB9").s().p("ABKCDIgCgBIAEACgAArAOIgQAdIgQggIgBAhIgdgKIABADQgUgggOgnQgNgigGgjIgDgVIgBgHQBMANAhAgQAOANAJASQAGAPAEAUIAFAkIgYAfg");
	this.shape_1.setTransform(7.6,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_tail_mc, rect = new cjs.Rectangle(0,0,15.9,26.8), [rect]);


(lib.tutorial_legUnderHip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56311F").s().p("AglB4IgRghIABgeQADhOARhVIA4gcIAaA2QAGANgBANQgCAqgeAUQgMAJAIAEQAFACAPAAQAJAAAAAcIgCAkIAAADIgmAsQgVAAgXgOg");
	this.shape.setTransform(9.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A2B1E").s().p("AgaB+QgVgWgHgWIgZjBIBAAAQgRBVgDBNIgBAfIARAgQAWAPAWAAIAAAMIgNABQgVAAgRgQgAA/BSIACgkQAAgdgJAAQgPAAgFgCQgIgDAMgJQAegUACgqQABgNgGgNIgag2QAQgIAXASIAAA1QgDAqgFAlIgHBDIgBAMg");
	this.shape_1.setTransform(8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_legUnderHip_mc, rect = new cjs.Rectangle(0,-3,16.1,28.5), [rect]);


(lib.tutorial_legAboveHip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884F34").s().p("AglB4IgRghIABgeQADhOARhVIA4gcIAaA2QAGANgBANQgCAqgeAUQgMAJAIAEQAFACAPAAQAJAAAAAcIgCAkIAAADIgmAsQgVAAgXgOg");
	this.shape.setTransform(9.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#774631").s().p("AgaB+QgVgWgHgWIgZjBIBAAAQgRBVgDBNIgBAfIARAgQAWAPAWAAIAAAMIgNABQgVAAgRgQgAA/BSIACgkQAAgdgJAAQgPAAgFgCQgIgDAMgJQAegUACgqQABgNgGgNIgag2QAQgIAXASIAAA1QgDAqgFAlIgHBDIgBAMg");
	this.shape_1.setTransform(8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_legAboveHip_mc, rect = new cjs.Rectangle(0,-3,16.1,28.5), [rect]);


(lib.tutorial_foxHead_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB1A0").s().p("AgRBqQgJgBgHgEQgGgDAAgEQABgDAHgCQAHgBAJABQAKACAFADQAGAEgBADQAAAEgGABIgHABIgJgBgAAOhPIgDgBIgEgCIAAAAIgBAAIAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQABgEADgDQACgEADgDQAEgEADAAIAEAAQACABAEAFIAFAHIAKARIgBADIgBABQgMgCgSgFgAgthMQAAgIABgEQABgHAGgCQADgBADACIAFAEIAJALQgOADgOAFIAAgDg");
	this.shape.setTransform(17.1,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583533").s().p("AhvBsIgEgHQgDgKADgGIAAAAIAAgBIACgCIAEgDIAGgCIABAAIADADQACADABAEIABACIgBAFQgBAEgCAEQgFAGgGAAIgBAAgAADBoQgDAAAAgEQgCgEABgFQAAgFACgEQADgDADABQADAAABAEQABAEAAAFQgBAFgDADQgCADgDAAIAAAAgAB1glIgEgHIgLgSIgHgNIgJgLQgEgEgDAAQgFgBgDADIgFAFIgFAGIgJANIgCAFIAAAAIgBAFQgNgQgNgFQgLgDgIAJIACgJQACgGADgCIACgCIAEgBQAEAAACACQANAHAMATIABABIAAgBIADgIQAGgNAHgLIAHgIQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQADgDAEgBQADAAACACIABAAIABABQAGAEAFALIABABIAAABQAHALAEANQAFANABANg");
	this.shape_1.setTransform(11.8,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCDAB9").s().p("AgMBoQgCgHgDgDIgHgGQgVgFgTgKQgUgLgPgPQgOgPgKgQIgEgIQgEgHgCgEIAEAGQAGABAGgGQACgEABgDIABAAQAOAAANgFQARgFATgPIAfgbQARgPAPgKQAUgLATgDQASgEARACQATADAPAIIAAABQAHAPADAQQAEAQgBARQgBARgFAPQgEANgJARIgQAdIgGANIgEAGQgFAFgIADQgOAFgHAAIhDAHgAADAUQgGACgBADQAAAEAFADQAHAEAJABQAJACAHgCQAHgBAAgEQABgDgGgEQgGgDgKgCIgIAAIgIAAgAgQgVQgDADAAAFQgBAGACADQABAEADAAQADAAACgCQADgDABgGQAAgFgBgEQgBgDgDgBIgBAAQgCAAgDADg");
	this.shape_2.setTransform(13.6,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4854E").s().p("AgVChQgCgMAJgSIBDgHQAIAAANgFQAIgDAFgFIgCAIQgGAeALALIg3AHQgTACgNAAQgXAAgBgIgAhzARIgBAAIABgGIgBgBQgBgEgCgDIACgBQAHgEAFgLIAIgRIAHgRQASggAfgUIAQgKQACgRAGgUIABAAIACgJQACgGADgCIADgCIgCACQgDACgCAGIgCAJQAIgKAKAEQANAEANARIABgFIABgCIABgDIAJgOIAFgGIAFgFQADgDAFABQADABAEAEIAJALIAHAMIALATIADAPIABAIIAAABQAOAPAJASIgBAAQgPgIgTgDQgRgCgSAEQgTADgUALQgPAKgRAPIgfAbQgTAOgRAFQgMAFgMAAIgDAAgAAviQQgDADgCAEQgDADgBAEQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABIAAABIABAAIAAAAIAEACIADABQASAFAMACIABgBIABgDIgKgRIgFgHQgEgFgCgBIgEAAQgDAAgEAEgAgEiLQgGACgBAHQgBAEAAAIIAAADQANgGAOgCIgJgLIgFgEIgDgBIgCAAg");
	this.shape_3.setTransform(13.8,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_foxHead_mc, rect = new cjs.Rectangle(0,0,27,35.5), [rect]);


(lib.tutorial_footUnder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393A3A").s().p("AhDAZIABgEIAEgPQAEgJAFgIQAJgMAPgGQAIgDAIgBIABAAQAHgBAHAAIAIABIAWAHIABABQAOAHAIANIABABIAFAJIACADIAAACIABABQAGAOgCADQgDADgRACQgRACgVAAIgFAAQgyAAgWgKg");
	this.shape.setTransform(6.8,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_footUnder_mc, rect = new cjs.Rectangle(0,0,13.7,7), [rect]);


(lib.tutorial_footAbove_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6D6E").s().p("AgIAEQgDgBAAgDQAAgCADgBQAEgCAEAAQAFAAAEACQADABAAACQAAADgDABQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(3.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4040").s().p("AhDAZIABgEIAAgCQAxAMAhgGQAPgCAHgGQAGgFABgFIgBgEQgDgQgVgMIgOgHIgGgCIACAAIAIABIAWAHIABAAQAOAIAIAMIABACIAFAIIACAEIAAABIABABQAGAPgCACQgDADgRACQgRACgVABIgFAAQgyAAgWgKg");
	this.shape_1.setTransform(6.8,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B4C4C").s().p("Ag2AXIgBACIAEgPQAEgKAFgHQAJgMAQgHQAHgDAIgBIABAAQAGgBAIABIgDAAIAIACIANAHQAVAMAEAQIAAAEQgBAFgGAFQgHAGgPACQgLACgNAAQgZAAgggIgAgcgLQgDABgBADQABACADACQADABAGAAQAFAAAEgBQADgCAAgCQAAgDgDgBQgEgCgFAAQgGAAgDACg");
	this.shape_2.setTransform(5.7,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_footAbove_mc, rect = new cjs.Rectangle(0,0,13.7,7), [rect]);


(lib.oprahP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("אופרה וינפרי", "bold 25px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(45.7,29.8);

	this.instance = new lib.oprahPeople();
	this.instance.parent = this;
	this.instance.setTransform(-110,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.oprahP, rect = new cjs.Rectangle(-110,-146,220,292), [rect]);


(lib.napoleonP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("נפוליאון בונפרטה", "bold 50px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 219;
	this.text.parent = this;
	this.text.setTransform(111.5,-288.7);

	this.instance = new lib.napoleonPeople();
	this.instance.parent = this;
	this.instance.setTransform(-207,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.napoleonP, rect = new cjs.Rectangle(-207,-300,429.9,599), [rect]);


(lib.marieP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("מארי אנטואנט", "bold 75px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 86;
	this.text.lineWidth = 377;
	this.text.parent = this;
	this.text.setTransform(214.8,-490);

	this.instance = new lib.mariePeople();
	this.instance.parent = this;
	this.instance.setTransform(-359,-492);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.marieP, rect = new cjs.Rectangle(-359,-492,764.5,984), [rect]);


(lib.juliusP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("יוליוס קיסר", "bold 85px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 97;
	this.text.lineWidth = 279;
	this.text.parent = this;
	this.text.setTransform(216.1,219);

	this.instance = new lib.juliusPeople();
	this.instance.parent = this;
	this.instance.setTransform(-340,-512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.juliusP, rect = new cjs.Rectangle(-340,-512,697.8,1024), [rect]);


(lib.gandiP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("מוהנדס קרמצ'נד גנדי", "bold 90px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 103;
	this.text.lineWidth = 334;
	this.text.parent = this;
	this.text.setTransform(-198.5,266.8);

	this.instance = new lib.gandiPeople();
	this.instance.parent = this;
	this.instance.setTransform(-400,-601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gandiP, rect = new cjs.Rectangle(-400,-601,800,1202), [rect]);


(lib.churchillP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("וינסטון צ'רצ'יל", "bold 25px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(73,92);

	this.instance = new lib.churchillPeople();
	this.instance.parent = this;
	this.instance.setTransform(-125,-159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.churchillP, rect = new cjs.Rectangle(-125,-159,250,318), [rect]);


(lib.upperHand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AB3EPQhZhMh/ABQhIgBgMgTQgLgSAlgXQAlgXA2gLQA+gMAyANQBaAYhBjpQgVhKghhZIgdhLQAqAyAhBNQBSC1AaDRQAOBpgDBGQgUgmgtgmg");
	this.shape.setTransform(7.1,5.8,0.125,0.13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAB35D").s().p("Ak2BqQgJlFBGhaQBKhfBhgIQBrgJBYBrQhYgThBAaQhgAlgjB9QgvCpAcCgQAOBQAXAuIAdAMQAnAOAwALQCaAhC/gPIgBANIpXAkQgSiRgEijg");
	this.shape_1.setTransform(5.5,5.4,0.125,0.13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC768").s().p("Ak2BqQgJlFBGhaQBdh4B6ASQCIAVBbDLQBRC2AbDRQANBpgDBFIpXAkQgSiRgEijg");
	this.shape_2.setTransform(5.5,5.4,0.125,0.13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCD6AF").s().p("AidJhQAkhEAAhkQAAh7gRoOIgRn3IF9AAQAHAdALCJQhXAjhDA3QhsBYgYBvQgcCIgNDOQgICKAACSQAACBgQAyQgeBdhqBGQA8g3Aagwg");
	this.shape_3.setTransform(5.6,17.6,0.125,0.13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0D9AB").s().p("AiQEqQhAgngLgrQgIgiAZguQAkg3AQgdQAegzAAgoQhLBLhCAaQg9AXgbgbQgPgOAKgjQAJggAdgsIgIARQgSAeADAXQAEAfAnAAQAlAABCgpIBTg7QARASgNAwQgNAugaAaQgZAZgMAbQgNAcgDAqQgEAnAhASQAcAPAXgJQARgGA4hPQAxhGAPgeQAKgTACADQABACAAAPQAAAIgnA3Ig6BPQgaAlgFAJQgNAVACAHQAPAPAwAAQAmgBAZgHQAQgFAthDQAlg3AQgfQAIgQAFAEQACACAAAFIgeA7QgmBDgmAmQCsAABZk6QAdhjAQh3IALhkQgFDFgQBYQgpDhiYBqQhFAxhLAFIgRABQhEAAg8gmg");
	this.shape_4.setTransform(4.5,29.9,0.125,0.13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4854E").s().p("AiRPDQhAgngLgrQgIgiAZguQAkg3AQgdQAegzAAgpQhLBMhCAaQg9AXgbgbQgYgYAohKQAlhGBGhFQBchPAlgwQA9hRAAh+QAAh7gRoOIgRn3IF9AAQAaBoASJ2QATKjgkDNQgpDiiYBqQhFAxhLAFIgRABQhEAAg8gmg");
	this.shape_5.setTransform(4.5,21.3,0.125,0.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.upperHand_mc, rect = new cjs.Rectangle(0,0,9.4,34.3), [rect]);


(lib.underHand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AB3EPQhZhMh/ABQhIgBgMgTQgLgSAlgXQAlgXA2gLQA+gMAyANQBaAYhBjpQgVhKghhZIgdhLQAqAyAhBNQBSC1AaDRQAOBpgDBGQgUgmgtgmg");
	this.shape.setTransform(7.1,5.8,0.125,0.13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAB35D").s().p("Ak2BqQgJlFBGhaQBKhfBhgIQBrgJBYBrQhYgThBAaQhgAlgjB9QgvCpAcCgQAOBQAXAuIAdAMQAnAOAwALQCaAhC/gPIgBANIpXAkQgSiRgEijg");
	this.shape_1.setTransform(5.5,5.4,0.125,0.13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC768").s().p("Ak2BqQgJlFBGhaQBdh4B6ASQCIAVBbDLQBRC2AbDRQANBpgDBFIpXAkQgSiRgEijg");
	this.shape_2.setTransform(5.5,5.4,0.125,0.13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCD6AF").s().p("AgOBzIACgEIAEgGIAHgKIAEgIIAAgCIgCACIgHANQgHAKgCABQgDABgDgCQgEgCAAgFIACgKQABgDAEgDQADgEACgGQABgGgCgCIgKAHQgJAGgEAAQgFAAgBgEQAAgDACgEIABgCQAEgHAIgIIAJgJQAMgJAEgLQACgHAAgQIABgkQABgbADgSQADgOAOgLQAIgHALgFQACAZABAxQACA/gCAfIABgSIgBANQgCAPgEANQgLApgWAAQAFgFAFgJIAEgHIgBgBIgBABIgHALQgGAJgCABIgHABQgGAAgCgCg");
	this.shape_3.setTransform(4.6,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4854E").s().p("AgRB9QgIgGgCgFQgBgFAEgFIAGgLQAEgHAAgFQgKAKgIADQgIADgDgEQgCgBABgFIADgGIABgCIABgCIgBACQgCAEAAADQABAEAFAAQAEAAAJgFIAKgIQACADgBAGQgCAGgDADQgEADgBAEIgCAJQAAAFAEACQADACADgBQACgBAHgKIAHgNIACgCIAAACIgEAJIgHAKIgEAGIgCADQACACAGAAIAHgBQACAAAGgJIAHgLIABgCIABABIgEAIQgFAIgFAFQAWAAALgoQAEgNACgQIABgNIgBATIgBANIgBAFQgFAegTANQgJAHgJAAIgCABQgIAAgHgFgAgKAsIABgBIAAgBIABgBQAEgJAAgNIgChTIgChBIAvAAQABAGABAQQgLAEgIAHQgOAMgDAOQgDASgCAaIAAAkQAAARgCAGQgDAMgNAJIgBABQAGgGADgFg");
	this.shape_4.setTransform(4.5,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.4,34.3);
p.frameBounds = [rect, rect, rect];


(lib.tailFoxBall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCCEA4","#FCD8B7"],[0,1],-19.9,0,20,0).s().p("ACMCIQhKgEhHgSQhagVhMgnIARAGIgdg8IBDgKIhFgaIA3goIhEgDIA3g6QAsAAAjACQAqAEAfAKQAmANAfAaQBKA/AvCcIgPABIgsgCg");
	this.shape.setTransform(38.9,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4854E").s().p("ABQBdQgkgOgxgmIgMgJQhFg0gigwQgFgFgFgIIgBgBIgEgJID1gIIgBACIg3A6IBDADIg2AnIBFAZIhDALIAcA8IgRgGg");
	this.shape_1.setTransform(13.6,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCDA1").s().p("Ag4gyIgFgLQAFAJAEAEQAjAwBDA0IAMAKQhBgwg1hAg");
	this.shape_2.setTransform(6.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tailFoxBall_mc, rect = new cjs.Rectangle(0,0,58.8,27.7), [rect]);


(lib.tailBottomShirt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEBBA9").s().p("AAwBWQgEAAgDgEIgkgwQgCgEABgEQABgEADgCQADgCAEAAIAAAAQAFABACADIAUAcIAPAUQADAEgBAEQAAAEgEACIgCACIgEABIgBgBgAgVgNQgEgBgCgDQgSgdgMgZQgCgEABgEIABgBQABgDADgCIAFgBIADABQAEABACAEIAQAfIANAVQACAEgBAEQgBAEgEACIgEABIgBAAIgCAAg");
	this.shape.setTransform(10.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9A999").s().p("ABNCJQgEgBgCgDIgVgbIADgBQADgDABgEQAAgEgCgDIgQgVIAFAAQAEAAADADIAjAwQADADAAAEQgBAEgDADQgDACgEAAIgBAAgAAFAoQgEAAgCgEIgUgdIAFgCQADgCABgDQABgEgCgDIgMgVIAAAAQAEABACADIAiAxQACADgBAEQAAAEgEADQgDgBgEACgAg+g8QgFgBgCgEQgPgagDgQQgEgXARgFQAEgCAEACQADABACAEQABAEgBAEQgCAEgEABQgBACABAFQADANANAWQACAEgBAEIgBACIgEABQgEACgBACIgBABIgBgBg");
	this.shape_1.setTransform(11.1,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAB35D").s().p("AgUAsQgugCgogEIAEgaIAAABQAMAHAWADQAVAEAZgCQAYgBAWgGQAXgGAOgLIABAAIABgBIACAAIAAAAIABgBIABgBIABgCIAAAAIABgBIABgBQAFgHAEgJIAJgXIAOAAIAFBTQgYAIg2AAIgxgCg");
	this.shape_2.setTransform(10.7,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC768").s().p("Ag9AkQgWgEgMgHIALg+IAXAAIB7AKIAigFIgJAWQgEAKgFAGIgBABIgBAAIgBABIgBACIgBAAIgBABIAAABIgBAAIgBABIgBABQgOALgXAGQgWAGgZABIgOAAQgRAAgPgCg");
	this.shape_3.setTransform(10,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tailBottomShirt_mc, rect = new cjs.Rectangle(0,-16.2,21.4,27.4), [rect]);


(lib.tail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4854E").s().p("AE9G1QjBhwjkjlQjujuhEigIDwBPIAJj+ICBD2IB7jgIAqD8IDCjtIBUOWQg6gVgkgUg");
	this.shape.setTransform(10.7,20.5,0.125,0.13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCDAB9").s().p("AI3PvQqxm1k+tJQhjkIgykQQgQhVgJhMIgFg6QJfBpEJD0QBxBoBCCKQA0BvAfCfQA5EdAeHiQAPDxADC4g");
	this.shape_1.setTransform(7.8,13.3,0.125,0.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15.9,26.8);
p.frameBounds = [rect, rect, rect];


(lib.legUnderHip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56311F").s().p("AglB4IgRghIABgeQADhOARhVIA4gcIAaA2QAGANgBANQgCAqgeAUQgMAJAIAEQAFACAPAAQAJAAAAAcIgCAkIAAADIgmAsQgVAAgXgOg");
	this.shape.setTransform(9.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A2B1E").s().p("AgaB+QgVgWgHgWIgZjBIBAAAQgRBVgDBNIgBAfIARAgQAWAPAWAAIAAAMIgNABQgVAAgRgQgAA/BSIACgkQAAgdgJAAQgPAAgFgCQgIgDAMgJQAegUACgqQABgNgGgNIgag2QAQgIAXASIAAA1QgDAqgFAlIgHBDIgBAMg");
	this.shape_1.setTransform(8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legUnderHip_mc, rect = new cjs.Rectangle(0,-3,16.1,28.5), [rect]);


(lib.legAboveHip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884F34").s().p("AglB4IgRghIABgeQADhOARhVIA4gcIAaA2QAGANgBANQgCAqgeAUQgMAJAIAEQAFACAPAAQAJAAAAAcIgCAkIAAADIgmAsQgVAAgXgOg");
	this.shape.setTransform(9.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#774631").s().p("AgaB+QgVgWgHgWIgZjBIBAAAQgRBVgDBNIgBAfIARAgQAWAPAWAAIAAAMIgNABQgVAAgRgQgAA/BSIACgkQAAgdgJAAQgPAAgFgCQgIgDAMgJQAegUACgqQABgNgGgNIgag2QAQgIAXASIAAA1QgDAqgFAlIgHBDIgBAMg");
	this.shape_1.setTransform(8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legAboveHip_mc, rect = new cjs.Rectangle(0,-3,16.1,28.5), [rect]);


(lib.foxHead_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB1A0").s().p("AhXBlIgcgEQgTgDgKgGIgFgDIgBABIgEgCIgGgDQgKgOAEgXQABgdAQggQAKggAVgbQAZgeAdgHQALgEANABQAbADAgAfQATARAeAiQA3A5ArA5QAEAPgDAKIgNAIIgrABQhVAAhxgQg");
	this.shape.setTransform(19.8,5.2,0.125,0.13,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#583533").s().p("AEeD0QhPhhhIhPIhNhSQgtgvglgeQgfgZgfgBQgigBgbAcQgQASgQAbIgaAvQgfA8gxB7IAAgCIAGgoQACgfAMgoQAahnAthVQAOghAbgnQAJgOAKgKQAZgcAcgEQAWgEAYAJIAGABIANAIQA0AZAwBMIAAACIAGAGIABACQBHBOAzBdQAzBeAbBkQgDAAgCgCgAkiC6IAFgBIgBACg");
	this.shape_1.setTransform(20.5,3.3,0.125,0.13,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB1A0").s().p("Ah+AvQg1gUAAgbQAAgbA1gSQA1gUBJAAQBLAAA1AUQA1ASgBAbQABAbg1AUQg1AThLAAQhJAAg1gTg");
	this.shape_2.setTransform(15.4,24.1,0.125,0.13,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#583533").s().p("AhOgpIACgGIgCgBQADgKAIgLQAMgPAWgOIAngYIAIADQAxAPALA1IAFAMQAPAxgfA1QgfA2gxAGQhUhnAXg9g");
	this.shape_3.setTransform(1,20,0.125,0.13,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#583533").s().p("AgmBEQgRgcAAgoQAAgnARgcQAQgdAWAAQAXAAAQAdQAQAcAAAnQAAAogQAcQgQAdgXAAQgWAAgQgdg");
	this.shape_4.setTransform(12.2,20,0.125,0.13,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4854E").s().p("Au1NAIgDgBQAEgKAIgLQALgPAWgOIAogXQAWgNAMgMQAvguAehaQAMgnAZhlQAWhZATgyQBkkIDUjCQDWjDEOhJIAdgIIAAgBIAGgoQADgcALgqQAahnAshTQAQgkAYgjQAKgOAJgKQAZgbAcgFQAXgEAWAJIAGABIANAIQA0AXAwBNIAAACIAFAEIABACIABABQBGBOAyBcQAyBdAbBjIANA5IACALQCBBeBcCDIgHgCQiCgsiQAFQiKAEiIAvQiYA0iKBoQh3Bbh1CKQi/DhgTAUQh/CGh8BBQhkA0hqALQgcADgbAAQgzAAgwgLg");
	this.shape_5.setTransform(13.8,11,0.125,0.13,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB1A0").s().p("AhbByIgIgEQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgCQgNgPAEgeQgOhAADggQAEg1AqgUQAWgKAcAJQATAGAZASQAqAcBDBCQAFAFgFAGQgGAFgFgFIgBAJQgDAXgVAPQgNAJgcAKQgrAQgnAJIgbAGIgOABQgJAAgGgCg");
	this.shape_6.setTransform(14,6.1,0.125,0.13,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#583533").s().p("ADBB9QiIiBh4gTQhdgPgxBRQAFgvAFgYQAIgsATgXQATgWAagHQAZgHAZAKQBrAoB5B+QAbAdATAZIAFATQABAFgFADIgEACQgDAAgCgDg");
	this.shape_7.setTransform(14.8,3.6,0.125,0.13,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4854E").s().p("AkBEGIAAAIQAAAEgDAAQgEAAAAgEQgRicAgjfIABgDQAFgwAFgZQAIgsATgXQARgVAcgBQAVgBAfALQCCAxBkBpQAcAeATAZQA6BIAZBHQAUAIAEAXQAEAXgNASQgRAZgtATQgMAFg+AUQhcAehkAKQhGAGgZAAIgEAAQg4AAgjgNg");
	this.shape_8.setTransform(14.9,5.8,0.125,0.13,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCDAB9").s().p("AgRCQIgHgGQgVgGgTgKQgUgLgPgPQgOgOgKgRIgEgIQgJgOAEgHIAAgBIACgCIAFgDIAGgDIAEgCQAHgFAFgKIAHgQIAIgRQATgiAfgUQAggWAjgDIABgFQABgDACgFQAGgNAHgKIAGgIIADgCQAEgDADgBQADAAADACIABAAIABABQAGAEAEALIABABIAAAAIAAAAQAIANAFAQQAEAPAAAPQAOAOAJASIAAABQAHAPADAQQAEAPgBARQgBARgFAQQgEANgJARIgQAdIgGANQgEAJgNAFQgNAFgIABIhDAGQgCgGgDgDg");
	this.shape_9.setTransform(13.6,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4854E").s().p("Ag4AfQgCgMAKgTQAJgRAZABQAZACALgGQAUgKAJgHQABAAAAgBQABAAAAAAQABgBABAAQAAABABAAIACABIgCAHQgEALgCAJQgGAdALALIg3AHQgSADgNAAQgYAAgBgJg");
	this.shape_10.setTransform(17.3,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.foxHead_mc, rect = new cjs.Rectangle(0,0,27,35.5), [rect]);


(lib.footUnder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393A3A").s().p("AhDAZIABgEIAEgPQAEgJAFgIQAJgMAPgGQAIgDAIgBIABAAQAHgBAHAAIAIABIAWAHIABABQAOAHAIANIABABIAFAJIACADIAAACIABABQAGAOgCADQgDADgRACQgRACgVAAIgFAAQgyAAgWgKg");
	this.shape.setTransform(6.8,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footUnder_mc, rect = new cjs.Rectangle(0,0,13.7,7), [rect]);


(lib.footAbove_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6D6E").s().p("AgIAEQgDgBAAgDQAAgCADgBQAEgCAEAAQAFAAAEACQADABAAACQAAADgDABQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(3.7,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4040").s().p("AhDAZIABgEIAAgCQAxAMAhgGQAPgCAHgGQAGgFABgFIgBgEQgDgQgVgMIgOgHIgGgCIACAAIAIABIAWAHIABAAQAOAIAIAMIABACIAFAIIACAEIAAABIABABQAGAPgCACQgDADgRACQgRACgVABIgFAAQgyAAgWgKg");
	this.shape_1.setTransform(6.8,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B4C4C").s().p("Ag2AXIgBACIAEgPQAEgKAFgHQAJgMAQgHQAHgDAIgBIABAAQAGgBAIABIgDAAIAIACIANAHQAVAMAEAQIAAAEQgBAFgGAFQgHAGgPACQgLACgNAAQgZAAgggIgAgcgLQgDABgBADQABACADACQADABAGAAQAFAAAEgBQADgCAAgCQAAgDgDgBQgEgCgFAAQgGAAgDACg");
	this.shape_2.setTransform(5.7,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.footAbove_mc, rect = new cjs.Rectangle(0,0,13.7,7), [rect]);


(lib.seychelleFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#337B40").s().p("AinAeIFPg7IAAA7g");
	this.shape.setTransform(0,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACog8IAAA8IlPA9g");
	this.shape_1.setTransform(0,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C41D32").s().p("ABKhhIBeAAIAABLIlPB4g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4D75D").s().p("AAAhhIB5AAIjxDDg");
	this.shape_3.setTransform(-4.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223E84").s().p("Ag7hhIB3AAIh3DDg");
	this.shape_4.setTransform(-10.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seychelleFlag, rect = new cjs.Rectangle(-16.7,-9.8,33.6,19.6), [rect]);


(lib.palauFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7DE29").s().p("AgpAqQgRgRAAgZQAAgXARgRQARgSAYAAQAYAAARASQASARAAAXQAAAZgSARQgRARgYAAQgYAAgRgRg");
	this.shape.setTransform(-3.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#65AAD3").s().p("AinBiIAAjDIFPAAIAADDgAhHgoQgRAQAAAYQAAAZARAQQARARAYAAQAZAAAQgRQARgQAAgZQAAgYgRgQQgQgSgZAAQgYAAgRASg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.palauFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


(lib.nepalFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAvIgKAHIACgNIgNACIAIgKIgMgEIAMgGIgIgJIANABIgCgMIAKAHIAEgLIAFALIAKgHIgCAMIANgBIgIAJIAMAGIgMAEIAIAKIgNgCIACANIgKgHIgFALgAgTghQgIgIAAgMQAEAKAJAFIACgBIgFgEIAGgCIgDgEIAGABIgBgHIAFAEIACgGIACAEIAEgEIABAGIAFgEIgBAHIAGgBIgDAEIAGACIgFAEIACABQAJgFAEgKQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape.setTransform(-4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC0030").s().p("AhFBdIAAi5ICLBXIhiAAIBiBigAgiBJIAFgLIAKAHIgBgMIAMABIgIgKIAMgEIgMgFIAIgKIgMABIABgMIgKAHIgFgLIgEALIgLgHIACAMIgNgBIAIAKIgLAFIALAEIgIAKIANgBIgCAMIALgHgAg1gSQAHAIAMAAQALAAAJgIQAIgIAAgLQgEAKgIAEIgDgBIAFgEIgGgBIADgFIgGABIABgGIgFADIgBgGIgEAFIgDgFIgBAGIgGgDIABAGIgGgBIAEAFIgHABIAGAEIgDABQgJgEgEgKQAAALAJAIg");
	this.shape_1.setTransform(-0.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#22368F").s().p("AhNBiIAAjDICbBhIhmAAIBiBigABBBeIhihhIBiAAIiKhXIAAC4ICKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nepalFlag, rect = new cjs.Rectangle(-7.8,-9.7,15.6,19.6), [rect]);


(lib.mongoliaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5EB2E").s().p("AARA/IAAhCIAOAAIAABCgAgNA2IAbAAIgOAJgAgeA/IAAhCIAOAAIAABCgAgNA0IAAgGIAbAAIAAAGgAgEAqQgCgDAAgCQAAgHAGAAQAHAAAAAHQAAAHgHAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgAgCAlQAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgJAnQgEgEAAgGQAAgGAEgEIAEgCQgCABAAAEQAAADACACIADACIgDACQgCACAAAEQAAADACACIgEgDgAAIAlQAAgGgFgCQAFgBAAgGIgBgFIADACQAEAEAAAGQAAAGgEAEIgDACIABgEgAAAAdQgGAAAAgHQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAAAAAQAHAAAAAHQAAAHgHAAgAgCAWQAAAAAAABQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABgAgNAMIAAgFIAbAAIAAAFgAgNgDIAbAAIgOAHgAgKgLQgEgEAAgGIAAgBIADAFQAFAFAGAAQAHAAAFgFIADgFIAAABQAAAGgEAEQgFAFgGAAQgGAAgEgFgAgHgSQgDgDAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDgAgGgvIACgEIgBgCIACgCIAAACIABACIgBACIAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBAAIAAgBIAAgBIAAgEIABgDIAAgCIAAgDIAAACIABACIACAFIgBADIgBABIAAABIACABQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBgCIABgCIAAgCIACACIgBACIACAEQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(-11.2,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63ACCC").s().p("Ag3BiIAAjDIBvAAIAADDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9002A").s().p("AA4BiIAAjDIBwAAIAADDgAinBiIAAjDIBwAAIAADDgAheA7IAOAAIAAhCIgOAAgAhvA7IAOgJIgcAAgAiOA7IAOAAIAAhCIgOAAgAh9AwIAcAAIAAgGIgcAAgAh2AhQAAACACADQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQAHAAAAgHQAAgHgHAAQgHAAAAAHgAh5APQgEAEAAAGQAAAGAEAEIAEADQgCgCAAgDQAAgEACgCIADgCIgDgCQgCgCAAgDQAAgEACgBIgEACgAhnASQAAAGgFABQAFACAAAGIgBAEIADgCQAEgEAAgGQAAgGgEgEIgDgCIABAFgAh0ANQgCACAAADQAAAHAHAAIAAAAQAHAAAAgHQAAgHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABgAh9AIIAcAAIAAgFIgcAAgAhvAAIAOgHIgcAAgAh+gZQAAAGAEAEQAEAFAHAAQAGAAAFgFQAEgEAAgGIAAgBIgDAFQgFAFgHAAQgHAAgFgFIgDgFgAh3glQgDADAAAEQAAAFADADQADADAFAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgEgFAAQgFAAgDAEgAh1g5IABACIgCAEQAAAHAHAAQAHAAAAgHIgCgEIABgCIgCgCIAAACIgBACIABACIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCgBIAAgBIABgBIABgDIgCgFIgCgCIABgCIgBADIAAACIgBADIAAAEIAAABIAAABIABAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIABgCIgBgCIAAgCIgCACgAhyAhQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAhyASQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mongoliaFlag, rect = new cjs.Rectangle(-16.7,-9.7,33.6,19.6), [rect]);


(lib.kenyaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A680B").s().p("AinAdIAAg5ICOAAIgKATIABABIAMgUIADAAIAFAIQAIALAGAAQAEAAAHgLIAGgIIADAAIALAUIADgBIgMgTICSAAIAAA5g");
	this.shape.setTransform(0,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA0017").s().p("AgOAwIgFgJIgBgCIgCgDIgCgFQAHgQAAgNQAAgMgHgQIACgFIACgDIABgCIAFgJQAHgKAGgBIABAAIAAABIAAAzQAFgKgBgQIAAgGQgBgMgCgHQAEABAGAJIAGAJIABACIACADIACAFQgHAPABANQgBAOAHAPIgCAFIgCADIgBACIgGAJQgHALgEAAQgGAAgIgLgAAAA6QAEgHAAgMIAAgGQAAgKgCgJIgCgHgAgEAOQgCAJgBAKIABAGQAAAMAFAHIAAgzgAgGAAQAAAHAGAAQADAAAAgHQAAgGgDAAQgGAAAAAGgAgGgmIgBAGQAAAQAGAKIAAg0QgFAIAAAMgAAWAdQAGgQAAgNQAAgMgGgQICSAAIAAA5gAAWAdIAAAAgAinAdIAAg5ICPAAQgGAPAAANQAAAOAGAPg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAiQgBgOAHgPQAGARAAAMQAAANgGAQQgHgPABgOgAgeAiQAAgOAGgPQAHARAAAMQAAANgHAQQgGgPAAgOgAAXgEIAAAAQADgCAEgFIAEgIQADgIABgHQgKAJgEAJQgEAHAAADIgBACIgCAAIgGgIQgGgKgEgBIgBgBIAAABIAAgBIgBAAQgGACgHAKIgFAIIgDAAIgBgCQABgCgEgIQgEgJgKgIIAAgBQACAMAGALQAEAFADACIABAAIiPAAIAAg7IFPAAIAAA7g");
	this.shape_2.setTransform(0,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAsIgDAAIABgCIACgDIACgFICSAAIAAAKIiSAAIAMATIgDABgAgjA/IAKgTIiOAAIAAgKICPAAIACAFIACADIABACIgDAAIgMAUgAAAAMIACAHQACAIAAAKIAAAHQAAAMgEAHgAgGAsIgBgHQABgKACgIIADgHIAAAzQgFgHAAgMgAgGAEQAAgFAGAAQADAAAAAFQAAAIgDAAQgGAAAAgIgAAAg1IAAAAIABAAQACAIABALIAAAHQABAPgFALgAgHgbIABgHQAAgLAFgIIAAA0QgGgLAAgPgAAWgYIgCgEIgCgDIgBgDIACAAIABgBQAAgEAEgGQAEgJAKgJQgBAHgDAHIgEAIQgEAGgDABIAAAAICRAAIAAAKgAingYIAAgKICPAAIgBAAQgDgBgEgGQgGgLgCgLIAAABQAKAIAEAJQAEAHgBADIABABIADAAIgBADIgCADIgCAEg");
	this.shape_3.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kenyaFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


(lib.guyanaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3D02F").s().p("AAAAAIiJhQIETBQIkTBRg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC0030").s().p("AhJhWICTBWIiTBXg");
	this.shape_1.setTransform(-9.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJBRIEUhRIkUhQIgegRIFPBhIlPBig");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhTBXICUhXIiUhWIAAgLIAeARICJBQIiJBRIgeARg");
	this.shape_3.setTransform(-8.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#419E4B").s().p("AinBiIFPhiIlPhhIFPAAIAABhIAABig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.guyanaFlag, rect = new cjs.Rectangle(-16.7,-9.8,33.6,19.6), [rect]);


(lib.ethiopiaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BA2D7").s().p("AghAjIgDgCQgMgOAAgTQAAgSAMgOIADgCQANgOAUAAQAVAAANAOIADACQAMAOAAASQAAATgMAOIgDACQgNAOgVAAQgUAAgNgOgAAAAnIABAAIAAgVIgBAAgAAXAgIgCgGIgSgNIAIgGIgCgDIgXASIgCAFIAQgMgAgNAFIgJAbIAEgEIAHgWIAIAGIADgCIgYgRIgGAAgAAQAVIAFADIgHgTIAXgQIgGAAIgSAMIgDgIIgEAAgAAQAGIAVAHIABgCIgVgGgAglALIABACIAUgHIAAgBgAgggIIAXAAIgDAIIADACIAJgcIgCgFIgGAUIgdAAgAgEgIIAdAAIAFgDIgWAAIgIgbIgBAFIAGAWIgIAAgAAKgOIABABIAMgRIgBgBgAgXgeIAMARIACgBIgNgRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D6C41").s().p("AAlAhIgCgCQgOgOgVgBQgTABgOAOIgCACIiEAAIAAhAIFPAAIAABAg");
	this.shape_1.setTransform(0,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2DD30").s().p("AAAAnIAAgVIABAAIAAAVgAAlAhQAMgOAAgTQAAgSgMgOICDAAIAABBgAinAhIAAhBICEAAQgNAOAAASQAAATANAOgAAAAPIgQAMIACgFIAXgSIACADIgIAGIASANIACAGgAgNAFIgRgMIAGAAIAYARIgDACIgHgGIgHAWIgFAEgAAQAVIgJgcIADAAIADAIIATgMIAFAAIgXAQIAHATgAARAGIAAgBIAVAGIgBACgAgkALIAUgGIAAABIgUAHgAgMAAIADgIIgXAAIgEgDIAcAAIAHgUIABAFIgJAcgAgEgIIABgDIAIAAIgGgWIABgFIAJAbIAVAAIgFADgAAKgOIAMgRIACABIgNARgAgXgeIACgBIAMARIgBABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D03633").s().p("AinAhIAAhAICEAAIACACQAOANATAAQAVAAAOgNIACgCICDAAIAABAg");
	this.shape_3.setTransform(0,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ethiopiaFlag, rect = new cjs.Rectangle(-16.8,-9.7,33.6,19.6), [rect]);


(lib.chileFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C22623").s().p("AinAxIAAhhIBiAAIDtAAIAABhg");
	this.shape.setTransform(-0.1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2530A9").s().p("AgwAxIAAhhIBhAAIAABhgAAOAUIgFgRIAOgJIgSAAIgFgRIgFARIgSAAIAPAJIgGARIAOgKg");
	this.shape_1.setTransform(-11.9,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRAxIAAhhIDsAAIAABhgAiDAKIgOAKIAFgRIgOgJIASAAIAFgRIAGARIASAAIgPAJIAGARg");
	this.shape_2.setTransform(1.2,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chileFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


(lib.restartThisGame_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/AyQgXgZAAgyIgBgwIAmAAIAAAmIABAWIAAAJQAKAAAHgEQAHgFACgIQACgHABgTIACgaIAkAAIgCAkQgBANgCAIQgCAIgFAIQgGAGgLAGQgNAFgTACQADAMALAHQALAHAOAAQAWABANgOQAMgOADgmIAEg1IAlAAIgEA3QgDAigIARQgJARgTAMQgTAMgcAAQgnAAgWgYg");
	this.shape.setTransform(116.5,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBJIAAhLQAAgTgIgKQgIgKgWAAQgLAAgIACIAABwIgnAAIAAiNQAbgEAbAAQAhAAARAIQARAJAHAOQAHAOAAAXIAABNg");
	this.shape_1.setTransform(97.8,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BkIAAiCIAmAAIAACCgAAAAtIAAgbQABgLADgHQACgIAJgLIADgFQAIgKgBgPIAAgSIhYAAIAAggIB/AAIAAAlQAAAVgCAJQgBAJgHAIIgFAJQgHAJgBAGQgCAFAAAGIAAAZg");
	this.shape_2.setTransform(81.4,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/AyQgXgZAAgyIgBgwIAmAAIAAAmIABAWIAAAJQAKAAAHgEQAHgFACgIQACgHABgTIACgaIAkAAIgCAkQgBANgCAIQgCAIgFAIQgGAGgLAGQgNAFgTACQADAMALAHQALAHAOAAQAWABANgOQAMgOADgmIAEg1IAlAAIgEA3QgDAigIARQgJARgTAMQgTAMgcAAQgnAAgWgYg");
	this.shape_3.setTransform(55.4,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBJIAAiQIAnAAIAACQg");
	this.shape_4.setTransform(41.5,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhGBJIAAghIBPAAIAAgmQAAgXgKgKQgKgKgZAAQgPAAgSADIgDgeQAVgEAVAAQAoAAASAQQATAQAAAkIAAAsIAaAAIAAAhg");
	this.shape_5.setTransform(29.8,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#E29559","#E2A16E"],[0.78,0.945],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_6.setTransform(70.1,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB47A").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_7.setTransform(70,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#E29559","#E2A16E"],[0.678,0.886],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_8.setTransform(70.1,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D99968").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_9.setTransform(70,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#E29559","#BB8459"],[0.792,1],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_10.setTransform(70.1,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#875E3F").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_11.setTransform(70,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.247)").s().p("An4DNQhVAAg8g9Qg8g7AAhVQAAhUA8g8QA8g8BVAAIPxAAQBVAAA7A8QA9A8AABUQAABVg9A7Qg7A9hVAAgAqHiOQg7A7AABTQAABUA7A7QA7A7BUABIPxAAQBUgBA7g7QA7g7ABhUQgBhTg7g7Qg7g7hUAAIvxAAQhUAAg7A7g");
	this.shape_12.setTransform(70,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.498)").s().p("An4DLQhUgBg7g7Qg7g7AAhUQAAhTA7g7QA7g7BUAAIPxAAQBUAAA7A7QA7A7ABBTQgBBUg7A7Qg7A7hUABgAqGiNQg6A7AABSQAABTA6A6QA7A7BTAAIPxAAQBTAAA6g7QA7g6AAhTQAAhSg7g7Qg6g6hTAAIvxAAQhTAAg7A6g");
	this.shape_13.setTransform(70,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("An4DFQhSAAg6g6Qg5g5gBhSQABhRA5g6QA6g5BSgBIPxAAQBSABA5A5QA6A6AABRQAABSg6A5Qg5A6hSAAg");
	this.shape_14.setTransform(70,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.749)").s().p("An4DIQhTAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BTAAIPxAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAgAqEiLQg5A6gBBRQABBSA5A5QA6A6BSAAIPxAAQBSAAA5g6QA6g5AAhSQAAhRg6g6Qg5g5hSgBIvxAAQhSABg6A5g");
	this.shape_15.setTransform(70,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,142,41);
p.frameBounds = [rect, rect, rect];


(lib.redMark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("*", "35px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(8.8,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.redMark_mc, rect = new cjs.Rectangle(0,0,17.6,43.1), [rect]);


(lib.feedback_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape.setTransform(0,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(0,-19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAOQgFgGgBgIQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAIgGAGQgFAHgJgBQgIABgGgHg");
	this.shape_2.setTransform(0,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_3.setTransform(0,-7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AiViVIErAAIiWErg");
	this.shape_4.setTransform(0,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiViVIErAAIiWErg");
	this.shape_5.setTransform(0,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FCE9CD","#DECEB5"],[0.8,1],15.3,-16.8,0,17.4,-16.8,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FCE9CD","#DECEB5"],[0.8,1],-17.1,16,0,-15.1,16,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#DECEB5","#FCE9CD"],[0.78,1],-16.9,16,0,-15.1,16,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjDGCQhmAAAAhmIAAo3QAAhmBmAAIGHAAQBmAAAABmIAAI3QAABmhmAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.749)").s().p("AjDGFQhpAAAAhpIAAo3QAAhpBpAAIGHAAQBpAAAABpIAAI3QAABphpAAgAkpkbIAAI3QAABmBmAAIGHAAQBmAAAAhmIAAo3QAAhmhmAAImHAAQhmAAAABmg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.498)").s().p("AjDGHQhrAAAAhrIAAo3QAAhrBrAAIGHAAQBrAAAABrIAAI3QAABrhrAAgAkskbIAAI3QAABpBpAAIGHAAQBpAAAAhpIAAo3QAAhphpAAImHAAQhpAAAABpg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.247)").s().p("AjDGKQhuAAAAhuIAAo3QAAhuBuAAIGHAAQBuAAAABuIAAI3QAABuhuAAgAkukbIAAI3QAABrBrAAIGHAAQBrAAAAhrIAAo3QAAhrhrAAImHAAIAAAAQhrAAAABrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-39.3,61.2,78.8);
p.frameBounds = [rect, rect, rect];


(lib.bubbleList_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.bubbleList_mc, rect = null, [rect]);


(lib.backToChooseGame_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1A3QgVgVAAghQAAgiAVgUQAUgWAhAAQAXAAAQAKQAQAKAKAQQAKARAAAWQAAAggVAWQgVAWghAAQggAAgVgVgAgagfQgJANAAASQAAAUAKAMQAKAMAPABQAQgBAKgMQAKgMAAgUQAAgTgKgNQgKgMgQABQgQgBgKANg");
	this.shape.setTransform(86.4,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTApIAAhQIAnAAIAABQg");
	this.shape_1.setTransform(73.9,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBJIAAiQIAnAAIAACQg");
	this.shape_2.setTransform(66.3,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDBJIAAiNQAbgEAbAAQAhAAARAIQARAJAHAOQAHAOAAAXIAABNgAgcgnIAABPIA5AAIAAgqQAAgTgIgKQgIgKgWAAQgLAAgIACg");
	this.shape_3.setTransform(54,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E29559","#E2A16E"],[0.78,0.945],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_4.setTransform(70.1,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB47A").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_5.setTransform(70,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#E29559","#E2A16E"],[0.678,0.886],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_6.setTransform(70.1,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D99968").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_7.setTransform(70,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#E29559","#BB8459"],[0.792,1],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_8.setTransform(70.1,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#875E3F").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_9.setTransform(70,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("An4DFQhSAAg6g6Qg5g5gBhSQABhRA5g6QA6g5BSgBIPxAAQBSABA5A5QA6A6AABRQAABSg6A5Qg5A6hSAAg");
	this.shape_10.setTransform(70,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.749)").s().p("An4DIQhTAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BTAAIPxAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAgAqEiLQg5A6gBBRQABBSA5A5QA6A6BSAAIPxAAQBSAAA5g6QA6g5AAhSQAAhRg6g6Qg5g5hSgBIvxAAQhSABg6A5g");
	this.shape_11.setTransform(70,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.498)").s().p("An4DLQhUgBg7g7Qg7g7AAhUQAAhTA7g7QA7g7BUAAIPxAAQBUAAA7A7QA7A7ABBTQgBBUg7A7Qg7A7hUABgAqGiNQg6A7AABSQAABTA6A6QA7A7BTAAIPxAAQBTAAA6g7QA7g6AAhTQAAhSg7g7Qg6g6hTAAIvxAAQhTAAg7A6g");
	this.shape_12.setTransform(70,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.247)").s().p("An4DNQhVAAg8g9Qg8g7AAhVQAAhUA8g8QA8g8BVAAIPxAAQBVAAA7A8QA9A8AABUQAABVg9A7Qg7A9hVAAgAqHiOQg7A7AABTQAABUA7A7QA7A7BUABIPxAAQBUgBA7g7QA7g7ABhUQgBhTg7g7Qg7g7hUAAIvxAAQhUAAg7A7g");
	this.shape_13.setTransform(70,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,142,41);
p.frameBounds = [rect, rect, rect];


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.choose_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.text = new cjs.Text("התחל משחק", "17px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(52.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E29559","#E2A16E"],[0.78,0.945],1.1,-0.2,0,1.1,-0.2,62.7).s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
	this.shape.setTransform(52.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB47A").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape_1.setTransform(52.6,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E29559","#E2A16E"],[0.69,0.859],1.1,-0.2,0,1.1,-0.2,62.7).s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
	this.shape_2.setTransform(52.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D99968").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape_3.setTransform(52.6,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9782F").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape_4.setTransform(52.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E29559").s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
	this.shape_5.setTransform(52.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Al3C9QhPAAg3g4Qg3g3AAhOQAAhNA3g4QA3g3BPAAILvAAQBPAAA3A3QA3A4AABNQAABOg3A3Qg3A4hPAAg");
	this.shape_6.setTransform(52.6,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.749)").s().p("Al3C/QhQAAg3g4Qg4g4gBhPQABhOA4g4QA3g4BQAAILvAAQBQAAA3A4QA4A4AABOQAABPg4A4Qg3A4hQAAgAn9iFQg3A4AABNQAABOA3A3QA3A4BPAAILvAAQBPAAA3g4QA3g3AAhOQAAhNg3g4Qg3g3hPAAIrvAAQhPAAg3A3g");
	this.shape_7.setTransform(52.6,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("Al3DCQhRAAg4g6Qg5g4AAhQQAAhPA5g5QA4g5BRAAILvAAQBRAAA4A5QA5A5AABPQAABQg5A4Qg4A6hRAAgAn+iGQg4A4gBBOQABBPA4A4QA3A4BQAAILvAAQBQAAA3g4QA4g4AAhPQAAhOg4g4Qg3g4hQAAIrvAAQhQAAg3A4g");
	this.shape_8.setTransform(52.6,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.247)").s().p("Al3DEQhSAAg5g6Qg5g5AAhRQAAhQA5g6QA5g5BSAAILvAAQBSAAA5A5QA5A6AABQQAABRg5A5Qg5A6hSAAgAoAiIQg5A5AABPQAABQA5A4QA4A6BRAAILvAAQBRAAA4g6QA5g4AAhQQAAhPg5g5Qg4g5hRAAIrvAAQhRAAg4A5g");
	this.shape_9.setTransform(52.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.7,-2.8,114.5,39.3);
p.frameBounds = [rect, rect, rect];


(lib.zoomWindowPic_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2CBBE").ss(5,1,1).p("EAxrgxqMAAABjVMhjVAAAMAAAhjVg");
	this.shape.setTransform(0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgxqAxrMAAAhjVMBjVAAAMAAABjVg");
	this.shape_1.setTransform(0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomWindowPic_mc, rect = new cjs.Rectangle(-320.4,-319.7,640.8,640.8), [rect]);


(lib.xZoomWindow_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AAAAAIigigAAAAAIigChAChigIihCgACgChIigih");
	this.shape.setTransform(16.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Am+E3IAAptIN9AAIAAJtg");
	this.shape_1.setTransform(16.9,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,42.2,42.2);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-27.8,-13.3,89.5,62.2)];


(lib.waterDrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(30,123,225,0)").s().p("Ak2KcQiKg3hphlQgogmgigrQg2hFgDhAQgDhBgKibQgJiaAuh2QAwh2BRiWQBTiXCKg3QCOg4CbAAQCbAACPA4QCKA4BpBjQBrBlAlCBQAlB+gMCSQgLCQgMBrQgKBsgrA7QgpA5g0AwQhpBliKA3QiPA4iaABQicgBiOg4g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(30,123,225,0.043)").s().p("AklKeQiKg0hqhiQgrgogmgrQg6hGgFhEIgPjfQgIibAuh3QAwh3BSiUQBUiVCJg2QCNg4CbAAQCaABCNA3QCJA1BnBhQBpBjAlB9QAoB+gJCSQgJCQgLBtQgKBugsA+QgpA9g2AzQhmBiiGA2QiMA5iXABQiXgBiPg2g");
	this.shape_1.setTransform(-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(30,123,225,0.082)").s().p("AkUKhQiKgyhqhgQgugogrgtQg+hGgHhIQgHhHgJibQgJibAvh5QAwh4BTiSQBUiTCJg2QCNg3CZAAQCaACCMA0QCHA1BlBfQBmBgAmB6QArB9gHCSQgGCPgLBxQgJBwgsBBQgqBAg4A2QhjBgiCA1QiJA4iUABQiTgBiPgyg");
	this.shape_2.setTransform(-0.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(30,123,225,0.122)").s().p("AkDKjQiLgvhrheQgxgogvgvQhBhHgJhKQgJhLgJicQgIibAvh5QAwh6BUiQQBUiSCIg1QCMg2CaABQCZACCJAzQCGAyBjBdQBlBdAmB4QAtB8gECSQgDCQgLByQgJBygsBFQgqBDg6A5QhhBdh+A0QiGA5iQABQiPgBiPgwg");
	this.shape_3.setTransform(-0.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,123,225,0.161)").s().p("AjzKmQiMgthqhcQg0gog0gxQhEhIgLhNQgLhOgJicQgIibAwh7QAxh6BUiPQBViQCHg0QCLg2CZACQCZACCIAxQCEAxBiBaQBiBcAnB0QAvB8gCCSQAACQgKB0QgJB0gtBIQgqBHg8A7QheBbh7AzQiCA5iNABQiLgBiQgtg");
	this.shape_4.setTransform(-0.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(30,123,225,0.196)").s().p("AjjKoQiMgqhrhaQg3gpg4gzQhIhIgNhQQgNhRgIicQgHicAwh7QAwh8BViNQBWiPCGgzQCLg2CYADQCYACCHAwQCDAvBgBYQBgBaAnBxQAyB8AACRQACCQgJB2QgJB2gtBMQgrBKg9A9QhcBZh3AyQh/A5iJABQiIAAiQgrg");
	this.shape_5.setTransform(-0.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(30,123,225,0.235)").s().p("AjVKqQiNgnhrhYQg5gqg8g0QhMhJgOhTQgPhUgIicQgHicAwh9QAxh8BViMQBXiNCGgzQCKg0CXACQCYADCFAuQCCAuBeBWQBeBXAoBvQAzB7ADCRQAFCQgJB4QgIB4guBQQgsBNg+A/QhZBWh0AyQh9A5iFABQiFAAiQgpg");
	this.shape_6.setTransform(-0.7,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(30,123,225,0.271)").s().p("AjHKsQiNglhrhWQg8gqhAg2QhPhJgQhWQgRhXgIidQgGibAwh+QAxh9BWiLQBXiLCGgzQCJg0CXAEQCXADCEAsQCAAsBcBUQBdBVAoBsQA1B7AGCRQAHCQgJB6QgHB6gvBTQgsBQhABBQhXBVhwAxQh6A4iCACQiBAAiRgng");
	this.shape_7.setTransform(-0.7,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(30,123,225,0.306)").s().p("Ai5KuQiOgjhshUQg/gqhDg3QhShKgShZQgThagHidQgGicAwh/QAyh9BWiKQBXiKCFgyQCJgzCXAEQCWADCCArQCAAqBaBTQBbBTAoBpQA4B6AICRQAJCQgIB8QgIB8gvBWQgsBThCBDQhUBThsAwQh4A5h/ABQh+AAiQgkg");
	this.shape_8.setTransform(-0.7,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(30,123,225,0.341)").s().p("AisKxQiOghhshTQhCgqhHg5QhVhKgUhbQgUhdgHidQgGidAxiAQAxh+BXiIQBYiJCFgxQCIgzCWAEQCVAFCCApQB+AoBZBRQBZBRAoBnQA6B5AKCRQALCQgHB+QgHB9gwBZQgsBWhEBGQhSBQhpAwQh1A4h7ACQh7AAiRghg");
	this.shape_9.setTransform(-0.7,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(30,123,225,0.373)").s().p("AifKyQiPgehshRQhEgrhLg6QhYhLgWheQgWhfgGieQgGicAxiBQAyh/BXiHQBZiHCEgxQCHgyCWAEQCVAFCAAoQB9AnBXBPQBXBPApBkQA8B4AMCRQAOCRgIB/QgGCAgwBbQgtBZhFBIQhPBOhmAwQhzA4h4ACQh4AAiRggg");
	this.shape_10.setTransform(-0.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(30,123,225,0.404)").s().p("AiTK1QiPgdhthPQhGgrhPg7QhbhMgXhgQgYhjgGidQgFidAxiCQAyiABYiFQBZiGCEgxQCGgxCVAFQCVAFB/AmQB8AmBVBNQBWBNApBiQA+B4AOCQQAQCRgHCBQgGCCgxBeQgtBchGBJQhOBNhjAvQhwA4h1ACIgDAAQh0AAiPgdg");
	this.shape_11.setTransform(-0.6,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(30,123,225,0.439)").s().p("AiHK3QiPgbhthNQhIgshTg9QhehMgZhjQgZhlgGidQgFidAyiDQAyiBBYiEQBZiFCEgvQCGgxCUAFQCUAGB+AlQB7AkBUBLQBUBLAqBgQA/B3AQCQQASCRgGCDQgGCDgxBiQguBehHBLQhMBLhfAuQhuA4hyACIgFAAQhxAAiOgag");
	this.shape_12.setTransform(-0.6,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(30,123,225,0.467)").s().p("Ah8K5QiPgZhthLQhLgshWg/QhhhMgahlQgbhogFieQgFidAyiDQAyiCBZiDQBZiDCDgwQCGgwCUAGQCTAGB9AjQB6AjBSBJQBTBKAqBdQBBB3ASCQQAUCRgGCFQgGCEgxBkQguBhhJBOQhJBJhdAtQhrA4hwACIgEAAQhuAAiPgYg");
	this.shape_13.setTransform(-0.6,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(30,123,225,0.498)").s().p("AhwK6QiQgWhthKQhNgshZhAQhkhNgchoQgchqgFieQgFidAyiEQAziDBZiBQBaiDCCguQCFgwCUAGQCTAGB7AiQB5AiBRBHQBRBIAqBbQBDB2AUCRQAWCSgFCFQgGCGgxBnQgvBjhKBQQhHBHhaAtQhpA4htACIgEAAQhsAAiOgXg");
	this.shape_14.setTransform(-0.6,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(30,123,225,0.525)").s().p("AhlK8QiQgUhuhJQhPgthchAQhmhOgdhqQgfhsgFieQgEieAziFQAyiDBaiBQBaiBCCguQCFgvCTAGQCTAGB6AhQB4AhBPBGQBQBGAqBZQBFB1AWCRQAYCSgGCGQgFCIgxBpQgvBnhMBQQhFBGhXAsQhnA4hqADIgFAAQhpAAiOgVg");
	this.shape_15.setTransform(-0.6,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(30,123,225,0.557)").s().p("AhaK+QiRgThuhHQhRgshfhDQhphOgfhsQgfhugFifQgEidAziHQAyiDBbiAQBaiACCgtQCEgvCTAGQCSAHB5AgQB3AfBOBFQBOBEArBXQBGB1AYCQQAaCSgFCIQgFCKgyBsQgvBohNBTQhEBDhUAsQhkA4hoADIgFAAQhnAAiNgTg");
	this.shape_16.setTransform(-0.5,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(30,123,225,0.584)").s().p("AhQLAQiRgRhuhGQhUgthihDQhrhPgghuQghhxgFifQgDidAziHQAyiFBbh+QBbh/CCgtQCDguCSAGQCSAIB4AeQB2AeBNBDQBMBDArBVQBIB0AaCQQAcCTgFCJQgECLgzBuQgwBrhOBUQhBBChSAsQhiA4hlACIgLAAQhiAAiKgQg");
	this.shape_17.setTransform(-0.5,-0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(30,123,225,0.608)").s().p("AhGLBQiRgPhvhFQhVgthlhEQhuhPghhwQgjh0gEieQgDieAziIQAziFBbh9QBch9CAguQCDguCSAIQCSAHB3AeQB1AcBLBCQBLBBAsBTQBJB0AbCQQAeCSgECLQgFCMgyBxQgwBthQBWQg/BBhPAqQhhA4hiADIgNAAQhfAAiJgPg");
	this.shape_18.setTransform(-0.5,-0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(30,123,225,0.635)").s().p("Ag9LDQiRgNhvhEQhXgthohGQhwhPgjhyQgjh2gEieQgDieAziJQAziGBbh8QBch9CBgsQCCgtCSAHQCRAIB2AcQB0AcBKBAQBKA/AsBRQBLB0AdCQQAfCSgECNQgECNgzBzQgwBwhRBXQg+A/hMAqQhfA4hgADIgGAAQhgAAiNgNg");
	this.shape_19.setTransform(-0.4,-0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(30,123,225,0.659)").s().p("AgzLEQiSgLhvhCQhZguhrhHQhyhQgkh0Qglh3gDifQgDieA0iJQAziHBbh7QBdh8CAgsQCBgtCSAIQCQAIB1AcQB0AaBJA/QBIA+AsBPQBNBzAeCQQAhCTgECNQgDCPg0B1QgwByhSBZQg8A9hKAqQhdA4hdADIgPAAQhbAAiHgMg");
	this.shape_20.setTransform(-0.4,-0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(30,123,225,0.682)").s().p("AgqLGQiTgKhvhBQhaguhuhHQh0hRglh2Qgmh5gEifQgDieA1iKQAziHBch6QBch7CAgsQCBgsCRAIQCRAIB0AaQByAaBIA9QBHA9AtBNQBNBzAhCQQAiCSgDCPQgECQg0B4QgwBzhTBbQg6A8hJApQhaA4hcADIgQAAQhZAAiFgKg");
	this.shape_21.setTransform(-0.4,-0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(30,123,225,0.706)").s().p("AgiLHQiSgIhwhAQhcguhwhJQh3hQgmh4Qgnh7gDifQgDifA0iLQA0iHBch5QBdh6CAgrQCAgtCRAJQCQAJBzAZQByAYBHA8QBGA7AsBMQBPBzAiCPQAkCTgDCQQgDCSg1B5QgxB1hTBcQg5A7hGApQhZA4hZADIgSAAQhWAAiFgJg");
	this.shape_22.setTransform(-0.3,-0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(30,123,225,0.729)").s().p("AgZLJQiTgIhwg+QhdguhzhKQh5hRgnh5Qgoh+gDifQgDieA1iMQAziIBdh4QBdh5B/grQCBgsCQAJQCPAJBzAYQBxAYBGA6QBEA6AtBKQBRBzAjCPQAlCTgDCRQgDCTg0B7QgxB3hVBdQg3A6hEAoQhYA4hXADIgVABQhUAAiBgHg");
	this.shape_23.setTransform(-0.3,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(30,123,225,0.749)").s().p("AgRLKQiUgGhvg9Qhggvh1hKQh6hSgoh7Qgqh/gDifQgCifA1iMQAziIBdh4QBeh4B/grQCAgrCQAJQCPAJBxAYQBwAWBFA6QBEA4AtBJQBSByAkCPQAnCTgDCSQgCCUg1B9QgyB5hVBfQg2A4hCAoQhWA4hVADIgiAAQhPAAh3gFg");
	this.shape_24.setTransform(-0.3,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(30,123,225,0.769)").s().p("AgKLMQiTgFhwg8Qhhgvh3hMQh8hRgqh9QgqiAgDigQgCifA1iMQAziJBeh3QBeh3B+grQCAgrCQAKQCOAJBxAWQBwAWBEA4QBCA4AtBHQBTBxAmCQQAoCTgCCTQgDCVg1B/QgxB7hXBgQg0A3hAAnQhUA4hTADIghAAQhPAAh4gDg");
	this.shape_25.setTransform(-0.3,-0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(30,123,225,0.788)").s().p("AgDLNQiTgEhwg7Qhjgvh5hMQh+hSgqh+QgsiDgCifQgCifA1iNQAziKBeh2QBeh2B/gqQB/grCPAKQCPAJBwAWQBuAVBEA3QBBA2AtBGQBUBxAnCPQAqCTgCCVQgCCWg2CAQgyB9hXBhQgzA2g+AnQhTA4hRADIg3AAQhIAAhngCg");
	this.shape_26.setTransform(-0.2,-0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(30,123,225,0.808)").s().p("AAELOQiTgChwg7Qhkgvh7hNQiAhSgsiAQgsiEgCifQgCifA1iOQA0iKBeh1QBeh2B+gqQB/gqCPAKQCOAKBwAUQBuAUBCA2QBBA2AtBEQBVBxAoCPQArCTgCCWQgCCWg1CDQgyB+hZBiQgyA1g8AmQhRA5hPADIg+AAIingBg");
	this.shape_27.setTransform(-0.2,-0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(30,123,225,0.827)").s().p("AAKLPQiTgBhwg6Qhlgvh+hOQiBhTgsiBQguiFgCigQgCifA2iOQA0iKBeh1QBeh1B+gpQB/gqCPAKQCOAKBuAUQBuATBBA1QBAA0AtBDQBXBxApCPQAsCTgCCXQgCCXg1CEQgzCAhZBjQgwA0g7AmQhQA4hOADIh3ABIhsAAg");
	this.shape_28.setTransform(-0.2,-0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(30,123,225,0.843)").s().p("AjzKXQhmgwiAhOQiDhTgtiDQguiGgCigQgBifA1iPQA0iLBfh0QBeh0B+gpQB+gqCPAKQCNALBuATQBtASBBA0QA/A0AtBBQBYBxAqCPQAtCTgBCXQgCCZg2CFQgzCChZBkQgwAyg4AmQhPA4hMAEQhOABiUAAQiUAAhwg4g");
	this.shape_29.setTransform(-0.2,-0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(30,123,225,0.859)").s().p("AjtKZQhogviBhPQiEhUguiDQgwiIgBigQgBifA1iQQA0iLBfhzQBfh0B+gpQB9gpCPAKQCNALBuASQBsASBAAzQA+AzAuBAQBYBwArCPQAvCTgCCZQgBCZg3CHQgyCDhbBlQguAxg3AmQhOA4hLADIjgADIgIAAQiPAAhtg3g");
	this.shape_30.setTransform(-0.2,-0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(30,123,225,0.875)").s().p("AjoKcQhogwiDhQQiGhUguiEQgxiJgBihQgBifA2iQQA0iLBfhzQBfhzB9goQB+gqCOALQCNALBtARQBsARA/AzQA9AxAuBAQBZBvAsCPQAwCTgCCaQgBCag2CIQgzCEhbBmQguAxg1AlQhNA4hJAEIjfADIgNAAQiMAAhsg0g");
	this.shape_31.setTransform(-0.2,-0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(30,123,225,0.89)").s().p("AjjKeQhqgwiEhRQiHhUgviFQgxiLgCigQgBifA2iRQA0iMBghxQBfhzB9goQB9gpCOAKQCNAMBtAQQBrARA+AyQA9AwAuA+QBaBwAtCPQAxCTgCCaQgBCbg2CKQg0CFhbBmQgtAwg0AmQhLA4hIADIjeAFIgQAAQiKAAhrgzg");
	this.shape_32.setTransform(-0.1,-0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(30,123,225,0.902)").s().p("AjeKfQhrgwiFhRQiJhUgwiHQgyiLgBigQAAigA2iRQA0iMBfhxQBghyB9goQB9gpCOALQCMALBsARQBrAPA9AxQA8AwAuA9QBbBwAuCOQAyCUgBCaQgBCcg3CLQgzCGhdBoQgrAvgzAlQhLA4hGADIjdAGIgVAAQiHAAhpgyg");
	this.shape_33.setTransform(-0.1,-0.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(30,123,225,0.914)").s().p("AjaKhQhsgwiHhSQiJhUgxiIQgyiMgBihQgBifA2iRQA0iNBghxQBghxB9goQB8goCOAKQCMAMBsAQQBqAPA9AwQA7AvAvA9QBbBvAvCOQAzCUgBCbQgBCcg3CMQg0CIhcBoQgrAugyAlQhJA4hGADIjcAHIgXABQiGAAhogxg");
	this.shape_34.setTransform(-0.1,-0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(30,123,225,0.925)").s().p("AjWKjQhsgwiJhSQiKhVgxiJQgziNgBihQgBifA3iRQA0iNBghxQBghxB8gnQB9gpCNAMQCMALBrAPQBqAPA9AwQA6AuAvA7QBcBvAwCPQAzCTgBCcQgBCdg3CNQg0CJhdBpQgqAugwAkQhJA4hEADIjbAIIgcAAQiDAAhngvg");
	this.shape_35.setTransform(-0.1,-0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(30,123,225,0.937)").s().p("AjSKkQhtgwiKhTQiLhUgyiKQgziOgBihQgBifA3iSQA0iNBghwQBghxB8gnQB9goCNALQCMAMBrAPQBpAOA8AvQA6AuAvA6QBdBvAwCOQA0CUgBCcQgBCeg3COQgzCJheBqQgpAtgwAkQhIA4hDAEQhFABiVAHIghAAQiAAAhlgug");
	this.shape_36.setTransform(-0.1,-0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(30,123,225,0.949)").s().p("AjOKmQhugxiLhTQiMhVgyiKQg1iPAAihQgBigA3iSQA0iNBghvQBhhwB8goQB8goCNAMQCMALBqAPQBpAOA8AuQA5AtAvA6QBdBuAyCPQA0CTgBCeQAACeg3CPQg0CKhfBqQgoAtgvAkQhHA4hCADQhEACiVAHIgkABQh+AAhkgtg");
	this.shape_37.setTransform(-0.1,-0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(30,123,225,0.957)").s().p("AjLKnQhugwiNhUQiNhVgziLQg0iQgBigQAAigA3iSQA0iOBhhvQBghwB8gnQB8goCNAMQCMAMBpAOQBqANA6AuQA5AsAvA6QBeBuAyCPQA1CTAACeQgBCeg4CQQgzCLhfBrQgoAsgtAjQhHA4hBAEQhDACiWAHIgmABQh9AAhjgsg");
	this.shape_38.setTransform(0,-0.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(30,123,225,0.965)").s().p("AjIKoQhvgwiNhUQiOhVgziMQg1iRgBigQAAigA3iTQA1iNBghvQBghwB8gnQB8gnCNALQCMAMBpAOQBoANA7AtQA4AsAwA5QBeBuAzCPQA1CTAACeQgBCfg4CRQgzCLhgBsQgnArgsAkQhGA4hBADQhDACiUAIIgpABQh8AAhigrg");
	this.shape_39.setTransform(0,-0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(30,123,225,0.973)").s().p("AjFKpQhwgxiOhUQiPhVgziMQg1iSgBigQAAigA3iTQA0iOBhhuQBghwB8gnQB8gnCNAMQCLAMBpANQBpANA6AtQA4ArAvA5QBfBuAzCOQA2CUAACeQgBCgg3CRQg1CMhfBsQgnArgsAjQhFA4hAAEQhCACiVAIIgrACQh7AAhggrg");
	this.shape_40.setTransform(0,-0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(30,123,225,0.98)").s().p("AjDKqQhwgxiPhUQiPhVg0iNQg1iSgBihQAAigA3iTQA0iOBhhuQBhhvB7gnQB8gnCNAMQCLAMBpANQBoAMA6AtQA4ArAvA4QBfBuAzCOQA3CUAACfQgBCfg3CSQg0CNhgBsQgnArgrAjQhFA4g/AEQhBABiVAKIguABQh5AAhggqg");
	this.shape_41.setTransform(0,-0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(30,123,225,0.984)").s().p("AjBKrQhxgxiPhVQiQhVgziNQg3iSAAihQAAigA3iTQA0iOBhhuQBhhvB8gnQB7gnCNAMQCLAMBpANQBoAMA5AsQA4ArAvA3QBgBuAzCPQA3CTAACfQAACgg4CTQg0CNhgBsQgmArgrAjQhEA4g/ADQhBACiVAKQgZABgXAAQh4AAhfgpg");
	this.shape_42.setTransform(0,-0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(30,123,225,0.988)").s().p("Ai/KrQhxgxiQhVQiQhVg0iOQg3iSAAihQAAigA3iTQA1iOBghuQBhhvB8gmQB7goCNAMQCLANBoAMQBoAMA6AsQA3ArAvA3QBgBtA0CPQA3CTAACgQAACgg4CTQg0CNhgBtQgmAqgrAjQhEA4g+AEQhAACiVAKQgZABgXAAQh4AAhfgpg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(30,123,225,0.992)").s().p("Ai+KsQhygxiPhVQiRhVg0iOQg3iTAAihQAAigA3iUQA1iOBghuQBhhuB8gnQB7gnCMAMQCMANBoAMQBoAMA5AsQA3AqAvA3QBgBtA0CPQA4CTAACgQAACgg4CTQg0COhhBtQglAqgqAjQhEA4g+AEQhAACiVAKQgaACgYAAQh3AAhegpg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(30,123,225,0.996)").s().p("Ai9KtQhygxiPhWQiShVg0iOQg3iUAAigQAAigA3iUQA0iOBhhuQBihuB7gnQB7gnCMAMQCMANBnAMQBpAMA4ArQA3AqAwA3QBgBtA0CPQA4CTAACgQAAChg4CTQg0COhhBuQglApgqAjQhEA4g9AEQhAACiVAKQgaACgYAAQh3AAhegog");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E7BE1").s().p("Ai8KsQhygxiQhVQiShVg0iPQg3iTAAihQAAigA3iUQA0iOBhhuQBihuB7gmQB7gnCMAMQCMAMBnAMQBoAMA5ArQA3ArAwA2QBgBtA0CPQA4CTAACgQAAChg4CTQg0CPhhBtQglAqgpAjQhEA4g+ADQg+ACiWALQgbACgZAAQh2AAhdgpg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E7BE1").s().p("Ai7KtQhzgxiQhWQiRhVg1iPQg3iTAAihQAAigA3iUQA0iOBhhuQBihuB7gmQB7gnCMAMQCMAMBnAMQBoAMA5ArQA2AqAwA2QBhBuA0COQA4CUAACgQAAChg4CTQg0CPhhBtQglAqgpAjQhDA4g+ADQg/ACiVALQgbACgaAAQh1AAhdgog");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E7BE1").s().p("Ai8KtQhxgxiQhWQiShVg0iPQg3iTgBihQAAigA3iTQA0iOBhhuQBihuB7gnQB7gnCNAMQCLANBnAMQBoAMA6AsQA3ArAvA2QBgBuA1CNQA3CTAACfQAAChg4CTQg0CPhhBtQgmAqgqAjQhEA4g+AEQg/ACiUAKQgaACgZAAQh2AAhdgog");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E7BE1").s().p("Ai9KtQhxgxiPhWQiRhWg1iOQg3iTgBihQgBigA3iTQA1iOBhhuQBhhtB8gnQB7goCMAMQCLAMBoAOQBoAMA6AtQA3AsAwA2QBgBtA0CNQA3CSAACeQAAChg4CTQg1COhgBtQgnArgrAkQhFA4g/ADQg/ACiTAKQgZACgZAAQh1AAhdgog");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E7BE1").s().p("Ai+KsQhvgwiQhXQiQhWg1iNQg3iTgBihQgCigA3iTQA0iOBihtQBhhuB8gnQB7gnCMALQCLAMBpAOQBnANA7AuQA4AtAwA3QBfBsAzCMQA3CRAACdQAACgg4CTQg1COhgBuQgoArgsAkQhGA4hAADQg+ACiTAKQgYACgXAAQh2AAhdgpg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E7BE1").s().p("Ai/KsQhugxiPhWQiQhXg1iNQg2iRgDihQgDihA3iSQA1iOBhhuQBhhtB8goQB8gnCMALQCLAMBpAPQBoAOA6AvQA5AtAwA4QBfBsAzCLQA2CPAACcQAACgg4CSQg1COhgBuQgpAsguAkQhGA4hBADQg/ACiQAKQgZABgXAAQh1AAhcgog");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E7BE1").s().p("AjAKsQhugxiOhXQiQhWg0iNQg3iRgDihQgDigA2iTQA1iOBhhtQBihuB8gnQB7goCNALQCLAMBoAPQBoAPA8AxQA5AuAxA4QBeBsAyCJQA1CPAACZQAACgg4CSQg0COhhBuQgpAtgwAlQhHA3hDAEQg+ACiPAJIgtABQh1AAhcgog");
	this.shape_52.setTransform(0.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E7BE1").s().p("AjBKsQhtgxiNhXQiPhXg1iMQg2iRgFihQgEigA3iSQA0iOBihtQBhhtB9goQB7gpCNALQCLAMBoARQBpAQA8AxQA6AwAxA5QBeBrAxCIQA0CNAACYQAACfg3CSQg1COhhBtQgrAvgxAlQhJA3hEAEQg+ABiNAJIgrABQh1AAhbgog");
	this.shape_53.setTransform(0.1,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E7BE1").s().p("AjDKrQhrgwiNhYQiOhXg0iMQg3iQgGihQgFigA3iRQA0iOBihtQBihtB9gpQB7goCMAKQCMAMBoARQBpASA9AzQA7AxAxA5QBdBrAxCGQAzCLAACWQAACfg4CSQg0COhiBtQgsAwgzAlQhJA4hGADQg/ACiKAIIgpABQh1AAhbgpg");
	this.shape_54.setTransform(0.1,-0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E7BE1").s().p("AjFKrQhpgxiMhYQiOhXg0iLQg2iQgHigQgHihA3iRQA1iNBhhtQBihtB9gpQB8gpCMAKQCLALBpATQBpATA+A0QA8AzAyA6QBcBqAwCFQAyCJAACUQAACeg4CSQg0CNhiBtQgtAyg2AlQhLA4hIADQg+ACiIAIIgmABQh1AAhbgpg");
	this.shape_55.setTransform(0.1,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E7BE1").s().p("AjGKqQhngwiMhZQiNhYg0iKQg2iOgIihQgIihA2iQQA1iOBihsQBihtB9gqQB8gpCMAKQCLALBqAUQBpAUA+A3QA9A0AzA7QBcBqAuCCQAxCHAACSQAACdg4CRQg0COhiBsQgvA0g4AmQhNA4hKADQg+ABiFAIIgkABQh1AAhZgqg");
	this.shape_56.setTransform(0.1,-0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E7BE1").s().p("AjIKpQhmgwiKhZQiMhZg0iJQg3iNgJihQgKigA3iRQA1iNBihsQBihtB9gqQB8gqCMAKQCLAKBqAWQBqAWA/A4QA+A3AzA8QBcBoAsCBQAwCEAACPQAACeg3CQQg1CNhhBtQgyA1g7AnQhOA3hMADQg+ACiDAHIgeABQh1AAhagrg");
	this.shape_57.setTransform(0.2,-0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E7BE1").s().p("AjKKpQhjgwiKhZQiLhag0iIQg2iNgLigQgLihA2iQQA1iMBihtQBihtB+gqQB8gqCMAKQCLAJBrAYQBpAXBBA7QA/A5A0A9QBaBnAsB/QAuCCAACLQAACdg3CQQg1CNhiBsQgzA3g+AoQhQA3hPADQg9ABiAAHIgcAAQh1AAhYgqg");
	this.shape_58.setTransform(0.2,-0.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1E7BE1").s().p("AjMKoQhhgwiJhaQiJhag1iHQg2iLgMihQgNihA2iPQA1iMBihtQBjhsB+grQB8grCMAJQCLAKBrAZQBqAaBCA9QBBA7A0A+QBZBmAqB8QAtB/AACJQABCcg4CPQg1CNhiBsQg1A6hCAoQhSA3hSACQg8ACh9AGIgXAAQh1AAhYgrg");
	this.shape_59.setTransform(0.2,-0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1E7BE1").s().p("AjPKoQhegwiHhbQiJhag0iHQg2iKgPigQgOihA2iPQA1iMBjhsQBihsB+grQB9gsCMAJQCLAJBrAbQBrAcBDA/QBCA+A1A/QBYBmApB5QArB8AACFQABCbg4COQg1CNhiBsQg4A8hFApQhVA3hUADQg9ABh4AFIgUAAQh1AAhXgrg");
	this.shape_60.setTransform(0.2,-0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1E7BE1").s().p("AjSKnQhbgwiGhbQiHhcg0iFQg2iJgRigQgRihA2iOQA1iMBjhrQBjhsB/gsQB9gsCMAIQCLAIBrAeQBrAeBFBCQBEBBA2BAQBWBlAnB2QAqB4AACBQAACbg3CNQg1CNhiBrQg7A/hJAqQhYA3hYACQg7ABh1AFIgMAAQh3AAhXgsg");
	this.shape_61.setTransform(0.2,-0.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1E7BE1").s().p("AjUKmQhYgwiFhcQiGhcg0iEQg2iHgTihQgTihA2iNQA1iLBjhsQBjhsB/gsQB+gtCMAIQCLAHBrAhQBsAgBHBFQBFBEA3BCQBVBjAlBzQAoB1AAB9QAACZg3CNQg1CMhjBsQg+BBhNArQhaA3hcACIiqAEIgKAAQh2AAhUgsg");
	this.shape_62.setTransform(0.2,-0.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1E7BE1").s().p("AjXKkQhVgviEhdQiEhdg0iCQg1iGgWihQgVigA1iNQA2iLBjhrQBjhsCAgtQB+guCMAHQCLAHBsAkQBsAiBIBJQBHBIA4BDQBVBiAjBvQAlBxAAB4QAACYg3CNQg1CLhjBsQhBBEhSAsQhdA3hgACIikADIgDAAQh4AAhTgug");
	this.shape_63.setTransform(0.2,-0.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1E7BE1").s().p("AjbKkQhRgviBheQiDheg0iBQg1iEgYihQgZihA2iLQA1iLBkhrQBjhrCBguQB+gvCMAHQCLAGBsAmQBtAmBKBNQBKBLA5BFQBSBgAhBrQAjBsAAB0QAACXg3CLQg1CMhjBrQhFBIhXAsQhgA3hkACIifACQh2AAhRgug");
	this.shape_64.setTransform(0.2,-0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1E7BE1").s().p("AjeKiQhNguiAhgQiBhfg0h/Qg0iCgcigQgbihA1iLQA2iKBkhrQBjhrCBgvQB/gvCLAGQCLAFBuApQBtApBMBRQBMBPA6BHQBRBfAfBmQAgBoAABuQAACWg2CKQg1CLhkBrQhJBMhcAtQhkA3hpACIiYABQhygChNgug");
	this.shape_65.setTransform(0.2,-0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1E7BE1").s().p("AgrLSQhugEhIgtQhJgvh+hgQh/hgg0h9Qg0iBgfigQgeihA1iJQA2iKBkhrQBkhqCCgxQB+gwCMAFQCLAFBuAtQBtAsBPBVQBOBTA8BJQBPBdAcBiQAdBjAABoQABCVg3CJQg1CLhkBqQhNBQhiAvQhoA2htACIhCAAIhQAAg");
	this.shape_66.setTransform(0.2,-0.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1E7BE1").s().p("Ag4LRQhpgFhEguQhEguh9hhQh8hhg0h8Qg0h+giigQgiihA1iIQA2iKBkhqQBlhqCCgyQB/gwCMAEQCLADBuAxQBuAwBSBZQBRBYA8BLQBOBcAZBdQAaBdAABiQABCTg2CIQg2CKhkBqQhRBUhpAxQhsA2hzABIiKgBg");
	this.shape_67.setTransform(0.2,-0.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E7BE1").s().p("AhGLQQhkgHg/gsQg/guh6hjQh6hig0h6Qg0h7gmihQglihA0iHQA2iJBlhqQBlhpCDgzQCAgyCLADQCLADBvA0QBvA0BUBfQBUBdA+BNQBLBZAXBYQAXBYAABbQABCSg3CHQg1CJhlBqQhWBZhvAxQhxA2h4ABQg4AAhLgDg");
	this.shape_68.setTransform(0.1,-0.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1E7BE1").s().p("AhVLPQhfgIg6gtQg6gth3hkQh4hkg0h3Qgzh6gqigQgpihA0iGQA2iIBmhpQBlhpCEg1QCAgzCLADQCLABBwA5QBwA4BXBkQBWBiBABPQBJBYATBSQAUBRAABUQABCRg2CFQg2CJhlBqQhbBdh3AzQh1A2h/ABQg1AAhFgFg");
	this.shape_69.setTransform(0.1,-0.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1E7BE1").s().p("AhkLOQhZgKg1gsIiqiTQh1hlgzh1Qg0h3gtigQguihA0iFQA3iHBmhpQBlhpCFg1QCAg0CLABQCLABBxA9QBxA8BaBpQBZBoBCBSQBGBVAQBNQAQBKAABMQABCQg2CEQg1CIhmBpQhgBjh+A0Qh7A2iFAAQg1AAg8gGg");
	this.shape_70.setTransform(0.1,-0.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1E7BE1").s().p("Ah0LNQhUgMgvgsQgugshzhnQhyhog0hyQgzh0gyigQgyihA0iDQA3iHBmhpQBmhoCGg3QCBg2CLABQCLAABxBBQByBBBdBwQBdBtBDBUQBEBTAMBGQANBEAABFQABCNg2CDQg1CIhnBoQhmBoiGA3QiAA1iKAAQg1AAg0gIg");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1E7BE1").s().p("Ah7LLQhWgOgxguQgvgshvhkQhwhmgyhxQgxhygwifQgxiiA0iDQA2iGBmhqQBlhqCGg3QCCg2CLABQCMgBByBCQBzBABdBwQBeBtBCBVQBDBWALBJQAMBGgBBGQABCMg1CAQg1CFhlBmQhmBoiGA3QiBA1iLAAQg5AAg3gKg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1E7BE1").s().p("AiDLJQhXgPg0gwQgugshshjQhuhkgvhvQgwhwgvifQguiiAziBQA2iGBlhsQBlhsCFg2QCCg2CNAAQCMgBB0BCQBzBABeBuQBeBtBBBYQBBBXALBLQALBKgBBIQAACKg1B9Qg0CChjBkQhmBoiGA2QiCA2iLAAQg9AAg8gMg");
	this.shape_73.setTransform(-0.1,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1E7BE1").s().p("AiKLHQhagRg1gyQgugshphgQhshjgthtQguhtgtigQgtihAziBQA2iFBkhuQBkhtCGg3QCCg2CNAAQCNAAB1BAQB0BABfBuQBeBtBABZQBABZAKBOQAKBNgCBJQAACKg0B6Qg0B+hhBiQhmBoiHA2QiCA2iMAAQhBAAg/gOg");
	this.shape_74.setTransform(-0.1,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1E7BE1").s().p("AiRLFQhcgTg5g1QgtgrhmhdQhphigshrQgrhrgsigQgrigAziBQA1iFBjhvQBjhvCGg3QCEg2CNAAQCOgBB2BBQB1A/BfBuQBfBsA+BbQBABaAIBSQAJBQgCBLQgBCIgzB3Qg0B7hfBgQhmBoiHA2QiCA2iNAAQhFAAhCgQg");
	this.shape_75.setTransform(-0.1,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1E7BE1").s().p("AiZLEQhegVg6g3QgtgrhjhbQhnhhgqhpQgphpgqifQgqigAziBQA1iEBihxQBihxCHg3QCDg2CPAAQCOgBB3BBQB2A/BgBtQBfBsA9BcQA+BcAIBVQAIBTgCBMQgCCHgzB0QgzB5hdBdQhmBniHA3QiDA2iOAAQhJAAhGgRg");
	this.shape_76.setTransform(-0.2,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1E7BE1").s().p("AigLCQhggXg9g5QgtgshfhYQhkhfgohnQgohngpifQgoigAziAQA1iDBhhzQBihzCGg3QCEg3CPABQCPAAB4A/QB3A/BgBtQBhBrA8BeQA8BeAHBYQAHBWgDBNQgCCFgzByQgyB1hbBcQhmBniHA3QiEA2iOAAQhNAAhKgTg");
	this.shape_77.setTransform(-0.2,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1E7BE1").s().p("AinLAQhjgZg/g7IiJiBQhihegmhlQgmhlgnifQgmigAyh/QA1iDBgh0QBhh1CHg3QCFg3CPABQCPgBB6BAQB4A+BgBsQBhBsA7BgQA8BfAFBbQAGBZgDBPQgCCEgzBvQgyBxhYBaQhnBniHA3QiEA2iPAAQhRAAhNgVg");
	this.shape_78.setTransform(-0.2,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1E7BE1").s().p("AivK9QhkgZhCg+IiFh+QhghcgkhkQgjhkgmidQgligAyh+QA0iCBgh3QBgh3CHg3QCFg3CQABQCQgBB7BAQB5A9BhBsQBiBrA5BiQA6BhAFBeQAFBcgDBRQgDCCgyBsQgyBvhWBXQhnBniIA2QiEA3iQAAQhVAAhRgYg");
	this.shape_79.setTransform(-0.3,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1E7BE1").s().p("Ai2K8QhngchEhAIiCh8QhdhagihiQgihhgkieQgjifAyh+QA0iBBfh5QBfh5CHg3QCGg3CQABQCRAAB8A+QB6A+BhBrQBiBrA5BkQA5BiAEBhQAEBegEBTQgECBgxBpQgxBshVBVQhnBniHA2QiGA3iQAAQhZAAhUgZg");
	this.shape_80.setTransform(-0.3,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1E7BE1").s().p("Ai+K6QhpgehGhCIh/h5QhahZghhfQgfhggjieQgiieAyh+QA0iBBeh6QBfh6CHg3QCGg3CRAAQCSgBB9A/QB7A9BiBqQBiBrA3BmQA4BkADBkQADBhgFBVQgDCAgxBmQgxBohTBTQhnBniHA2QiGA3iRAAQhdAAhYgbg");
	this.shape_81.setTransform(-0.3,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1E7BE1").s().p("AjFK4QhrgghJhDIh7h3QhYhYgfhdQgdheghieQggieAxh9QA0iABdh8QBeh8CHg3QCHg3CSAAQCSgBB+A/QB8A8BiBqQBjBqA2BoQA3BmACBnQACBkgFBWQgEB+gxBkQgwBlhRBRQhnBniIA2QiGA3iRAAQhiAAhbgdg");
	this.shape_82.setTransform(-0.3,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1E7BE1").s().p("AjNK2QhtghhLhGIh4h0QhWhXgchbQgchcgfidQgfieAxh9QA0iABch9QBdh/CIg2QCHg3CTAAQCSAACAA9QB9A9BjBpQBjBpA1BqQA1BoABBqQABBngFBYQgFB9gwBgQgvBjhPBOQhoBmiHA3QiHA3iSAAQhmAAhfgfg");
	this.shape_83.setTransform(-0.3,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1E7BE1").s().p("AjVKzQhwgihNhJIh0hwQhThWgbhZQgahageidQgcieAwh8QA0h/Bbh/QBciACIg3QCIg3CTAAQCTAACBA9QB+A7BjBqQBkBpA0BrQA0BqAABtQAABqgGBZQgFB8gwBdQguBghNBLQhoBniIA3QiHA3iTAAQhqgBhighg");
	this.shape_84.setTransform(-0.3,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1E7BE1").s().p("AjdKxQhygkhPhKIhxhvQhRhUgYhXQgYhYgdidQgbidAxh8QAzh9BbiCQBbiCCIg3QCIg3CUAAQCUAACCA9QB/A7BjBpQBlBpAzBtQAzBqgBBxQgBBtgHBbQgFB7gwBaQguBchLBJQhnBniJA3QiIA3iTAAQhugBhmgjg");
	this.shape_85.setTransform(-0.3,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1E7BE1").s().p("AjmKwQhzgmhShOQgrgphChDQhPhSgWhVQgWhWgbicQgZieAwh7QAzh9BaiDQBbiECIg3QCIg3CVAAQCUAACDA8QCBA8BjBoQBmBoAxBvQAxBtgCBzQgBBxgHBbQgGB5gvBZQguBYhJBHQhoBmiIA3QiJA3iTABQhzgBhqgkg");
	this.shape_86.setTransform(-0.2,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1E7BE1").s().p("AjtKuQh2gohUhQQgrgog/hAQhMhSgVhSQgUhVgZicQgYidAwh6QAzh9BZiFQBaiGCIg3QCJg3CWAAQCVAACEA8QCBA6BkBpQBmBnAwBxQAxBugDB3QgDBzgHBeQgHB4guBUQguBXhGBEQhoBmiJA3QiJA3iVABQh2gBhtgmg");
	this.shape_87.setTransform(-0.2,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1E7BE1").s().p("Aj2KrQh4gphWhRQgqgpg8g+QhKhQgThQQgShSgXidQgXicAwh7QAyh7BZiHQBZiHCIg4QCKg3CWAAQCWAACFA8QCCA6BlBnQBnBoAuByQAwBxgEB5QgEB3gIBfQgHB2guBSQgtBShEBDQhoBmiJA3QiKA3iVABQh7gBhxgpg");
	this.shape_88.setTransform(-0.2,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1E7BE1").s().p("Aj+KpQh6grhZhUQgpgog5g7QhHhPgRhOQgRhQgVidQgVibAwh7QAyh7BXiIQBZiJCIg4QCLg3CWAAQCWAACHA7QCDA6BlBnQBnBoAuBzQAuBzgFB8QgFB5gIBiQgHB1guBOQgsBQhDBAQhoBmiJA3QiKA4iWAAQh/gBh1grg");
	this.shape_89.setTransform(-0.2,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1E7BE1").s().p("AkFKnQh9gshbhXQgqgog1g4QhFhOgPhMQgOhOgUicQgTicAvh5QAyh7BXiKQBXiLCJg4QCLg3CXAAQCXAACIA6QCEA7BmBmQBnBnAtB2QAsBzgGCAQgFB9gJBiQgIB0gtBMQgsBMhBA+QhoBmiJA3QiLA3iWABQiDgBh4gtg");
	this.shape_90.setTransform(-0.2,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1E7BE1").s().p("AkOKmQh+gvhehYQgpgogzg3QhChMgNhKQgMhMgTicQgRicAvh4QAyh6BViMQBXiNCJg3QCMg4CXAAQCYAACJA6QCFA6BmBlQBpBoArB3QArB2gHCCQgGCAgJBkQgJBygtBKQgrBIg/A8QhoBmiJA3QiMA3iXABQiHgBh8gug");
	this.shape_91.setTransform(-0.1,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1E7BE1").s().p("AkWKkQiAgwhghcQgpgogvgzQhAhKgLhJQgLhJgRidQgPiaAvh5QAxh5BViOQBWiPCJg3QCMg4CYAAQCZAACKA6QCGA5BnBlQBoBnAqB5QArB4gICFQgICDgKBmQgIBwgtBGQgqBGg9A6QhpBmiJA2QiMA4iYABQiLgBiAgwg");
	this.shape_92.setTransform(-0.1,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1E7BE1").s().p("AkeKhQiDgxhiheQgpgngsgxQg9hKgJhGQgJhIgPibQgOibAvh3QAxh5BUiQQBViRCJg3QCNg4CZAAQCZAACLA5QCHA5BnBlQBqBmAoB7QAqB5gJCKQgJCGgKBmQgJBwgsBDQgrBDg6A3QhpBmiJA2QiNA4iZABQiPgBiDgzg");
	this.shape_93.setTransform(-0.1,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1E7BE1").s().p("AkmKfQiFgzhlhfQgogogpgvQg7hIgHhEIgUjgQgMicAuh3QAxh3BTiSQBViTCJg3QCNg4CaAAQCaAACMA5QCIA5BoBkQBqBmAnB8QAoB7gKCMQgKCJgKBpQgKBugsBAQgpBAg5A1QhoBmiKA2QiNA4iaABQiTgBiHg1g");
	this.shape_94.setTransform(-0.1,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1E7BE1").s().p("AkuKeQiIg2hnhiQgogmglgtQg5hHgFhCIgQjeQgLibAuh2QAxh4BSiTQBUiVCJg3QCOg4CaAAQCbAACNA5QCJA3BoBlQBrBlAmB/QAnB8gLCQQgLCMgLBpQgKBtgrA+QgpA9g3AyQhpBliJA3QiOA4iaABQiYgBiKg2g");

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1E7BE1").s().p("Ak2KcQiKg3hphlQgogmgigrQg2hFgDhAQgDhBgKibQgJiaAuh2QAwh2BRiWQBTiXCKg3QCOg4CbAAQCbAACPA4QCKA4BpBjQBrBlAlCBQAlB+gMCSQgLCQgMBrQgKBsgrA7QgpA5g0AwQhpBliKA3QiPA4iaABQicgBiOg4g");

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1E7BE1").s().p("AkoKcQiKg1hqhiQgsgogkgtQg4hGgFhEIgPjeQgIiWAshzQAvh2BPiRQBSiSCIg6QCNg7CZgCQCZgCCPA0QCLAzBqBiQBsBjAnB/QAoB+gJCSQgJCPgLBtQgKBtgsA9QgqA7g2AzQhpBliIA3QiMA5iXABQiYAAiLg2g");
	this.shape_97.setTransform(-0.2,0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1E7BE1").s().p("AkbKbQiJgyhrhhQgwgogngvQg6hIgHhGQgGhHgKiaQgIiSArhxQAth0BOiNQBQiPCGg8QCMg9CXgEQCXgFCQAwQCLAvBrBgQBtBhAqB/QArB9gHCRQgHCPgKBuQgKBvgsA/QgrA+g5A1QhpBkiFA4QiKA5iUACQiTAAiJg0g");
	this.shape_98.setTransform(-0.3,0.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1E7BE1").s().p("AkNKcQiJgxhsheQgzgpgqgyQg8hJgJhKQgIhJgJiaQgIiOAphuQAshzBMiJQBPiKCFg/QCJhACWgGQCVgHCQAsQCNArBrBeQBuBfAtB+QAtB8gFCRQgECOgKBwQgJBwgtBCQgsBAg7A3QhpBkiDA4QiHA6iRADIgDAAQiOAAiEgxg");
	this.shape_99.setTransform(-0.4,0.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1E7BE1").s().p("AkAKcQiJguhthdQg2gqgtg0Qg9hLgLhMQgLhMgIiZQgIiKAohsQAqhxBLiGQBNiGCDhBQCIhCCUgJQCUgICQAnQCNAmBsBcQBvBeAvB9QAwB7gCCRQgBCOgKBxQgJByguBDQgsBDg9A5QhpBkiBA5QiFA6iNADIgGAAQiJAAiAgug");
	this.shape_100.setTransform(-0.5,0.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1E7BE1").s().p("AjyKcQiKgshthbQg6gqgwg3Qg/hMgNhPQgMhPgJiZQgHiGAnhpQAohwBKiBQBLiCCChEQCGhFCSgLQCSgKCRAjQCOAiBtBaQBwBcAxB8QAyB6ABCRQABCNgJBzQgIBzgvBGQgtBFg/A7QhqBkh+A5QiDA7iJAEIgJAAQiEAAh7gsg");
	this.shape_101.setTransform(-0.6,1.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1E7BE1").s().p("AjlKdQiKgqhuhZQg+grgyg5QhBhOgPhSQgOhRgIiZQgHiCAlhnQAnhvBIh9QBKh+CAhGQCEhHCRgNQCQgNCRAfQCPAeBuBYQBxBaA0B7QA0B6AECQQADCNgIB0QgIB1gwBIQguBIhBA8QhqBkh8A6QiAA8iGAEIgMAAQh+AAh3gpg");
	this.shape_102.setTransform(-0.7,1.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1E7BE1").s().p("AjZKeQiJgohvhXQhCgsg1g7QhChQgRhVQgRhUgHiYQgHh+AkhkQAlhuBHh5QBIh6B+hJQCDhJCPgPQCOgPCSAaQCPAaBvBXQByBYA3B6QA3B5AGCQQAGCMgIB2QgIB2gwBKQgvBLhEA+QhpBjh6A7Qh+A8iCAEIgUABQh3AAhwgmg");
	this.shape_103.setTransform(-0.7,1.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1E7BE1").s().p("AjNKfQiJglhwhWQhFgsg3g+QhFhRgThYQgShXgHiYQgGh6AhhhQAlhtBFh1QBGh1B9hMQCBhMCNgRQCNgRCSAWQCQAVBwBVQByBXA6B4QA5B5AJCPQAJCMgIB3QgHB4gyBNQgvBNhGBAQhqBjh3A7Qh7A9h/AFIgYAAQhxAAhsgjg");
	this.shape_104.setTransform(-0.7,1.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1E7BE1").s().p("AjAKgQiJgjhxhUQhJgtg6hBQhGhSgVhbQgVhagGiXQgGh2AghfQAjhrBDhxQBFhxB8hPQB/hOCLgTQCLgUCTASQCRARBwBTQB0BVA8B4QA8B4ALCPQALCLgHB5QgHB5gyBPQgxBPhIBCQhpBjh2A8Qh4A+h8AFIgbAAQhrAAhnggg");
	this.shape_105.setTransform(-0.7,1.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1E7BE1").s().p("Ai0KhQiJghhxhSQhNgtg9hEQhIhUgXhdQgWhdgGiWQgGhyAfhdQAhhqBChtQBDhtB6hRQB+hRCJgVQCJgVCUANQCRANBxBRQB1BTA+B3QA/B3AOCOQAOCMgHB5QgHB7gyBSQgyBRhKBEQhqBjhzA9Qh2A+h4AFIgeABQhnAAhigeg");
	this.shape_106.setTransform(-0.7,1.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1E7BE1").s().p("AioKjQiJgfhyhQQhQguhAhGQhKhWgZhgQgYhfgGiXQgFhuAdhZQAghpBAhpQBChpB4hUQB8hTCIgYQCHgXCUAJQCSAJByBPQB2BRBBB2QBBB2ARCPQAQCLgGB7QgHB8gzBUQgzBUhMBGQhqBjhwA9Qh0A+h0AGIgjABQhgAAhegbg");
	this.shape_107.setTransform(-0.6,1.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1E7BE1").s().p("AicKlQiJgchzhOQhUgwhChIQhMhXgbhkQgahhgFiWQgFhqAchXQAehoA/hlQA/hlB3hWQB7hWCFgZQCHgaCTAFQCTAEBzBOQB3BPBDB1QBEB1ATCPQATCLgGB8QgGB9g0BXQg0BWhOBIQhpBjhvA9QhxA/hxAHIgmABQhbAAhZgZg");
	this.shape_108.setTransform(-0.6,1.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1E7BE1").s().p("AiQKoQiJgahzhNQhYgvhFhLQhOhZgchmQgchlgGiVQgEhmAahVQAdhmA9hhQA/hhB1hZQB4hYCEgcQCFgbCUAAQCUAAB0BMQB3BNBGB1QBGB0AWCOQAVCLgFB9QgFB/g1BZQg1BZhQBKQhqBihsA+QhvBAhtAHIgqABQhWAAhUgWg");
	this.shape_109.setTransform(-0.6,1.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1E7BE1").s().p("AiEKrQiJgXh0hLQhbgxhIhNQhQhagehqQgehngFiVQgEhiAZhSQAbhlA8hdQA8hcB0hcQB3hbCCgdQCDgeCVgEQCUgFB1BLQB4BLBJB0QBIBzAZCOQAXCKgEB/QgFCBg2BbQg2BbhSBMQhqBihqA+QhsBBhqAHQgXACgXAAQhQAAhPgUg");
	this.shape_110.setTransform(-0.5,1.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1E7BE1").s().p("Ah4KvQiJgWh1hJQhfgxhKhQQhShcgghsQgghqgFiVQgDheAXhPQAahkA6hYQA7hZByheQB1hdCBggQCBggCVgIQCVgJB2BIQB5BKBLBzQBLByAbCOQAaCJgECBQgECCg3BdQg2BehVBOQhqBihoA/QhqBBhmAIQgZABgZAAQhKAAhKgQg");
	this.shape_111.setTransform(-0.5,1.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1E7BE1").s().p("AhsKyQiJgTh2hIQhigyhNhSQhUhdgihvQgihtgEiUQgDhaAVhNQAZhjA4hUQA6hVBwhgQB0hgB+giQCAgiCVgNQCWgNB3BHQB6BIBNByQBOByAeCMQAcCKgDCBQgFCEg3BgQg3BghXBQQhqBihlA/QhoBChiAIQgcADgcAAQhEAAhEgPg");
	this.shape_112.setTransform(-0.4,1.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1E7BE1").s().p("AhfK2QiJgRh3hGQhmgyhQhVQhWhfgkhyQgkhvgDiUQgDhWAUhLQAXhhA3hQQA4hRBvhjQByhiB8gkQB+gkCWgRQCXgSB3BFQB7BGBQBxQBRBxAgCNQAfCJgDCDQgECFg4BiQg5BjhYBRQhqBihkBAQhlBChfAJQgeADgeAAQg+AAg+gMg");
	this.shape_113.setTransform(-0.4,1.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1E7BE1").s().p("AhUK6QiIgPh4hEQhqgzhShYQhXhggnh1QgmhygDiTQgChSAShIQAWhgA1hNQA2hMBuhmQBwhkB7gnQB8gmCWgVQCYgWB4BEQB8BEBTBwQBTBwAiCMQAiCJgDCEQgDCHg5BkQg5BlhbBUQhqBhhhBBQhjBDhbAJQgiAEghAAQg4AAg4gKg");
	this.shape_114.setTransform(-0.4,1.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1E7BE1").s().p("AhIK9QiJgMh5hCQhtg0hVhaQhZhigoh4Qgoh0gDiTQgChPARhFQAUheA0hJQA0hIBthoQBuhnB5gpQB7goCWgaQCYgaB5BCQB+BCBVBvQBVBvAmCMQAkCJgCCFQgECJg6BmQg6BohdBVQhqBihfBBQhgBDhYAKQglAEglAAQgwAAgxgIg");
	this.shape_115.setTransform(-0.3,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1E7BE1").s().p("Ag8LBQiJgKh5hAQhxg1hYhcQhbhkgqh7Qgqh3gCiSQgChLAPhCQATheAyhEQAzhEBrhrQBshpB4grQB4grCYgeQCYgeB6BAQB+BABYBuQBYBvAoCMQAnCHgCCIQgDCKg6BoQg7BrhgBXQhqBhhcBCQheBEhUAKQgpAFgoAAQgqAAgqgGg");
	this.shape_116.setTransform(-0.2,0.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1E7BE1").s().p("AgwLFQiJgIh6g/Qh0g1hbhfQhchlgth9Qgsh7gCiRQgBhHAOhAQARhcAxhAQAxhABphuQBrhsB2gtQB3gsCXgiQCagjB7A+QB/A/BaBtQBbBuAqCLQApCHgBCJQgCCLg8BsQg8BshhBZQhqBhhaBDQhcBEhQALQgtAGgtAAQgiAAgjgEg");
	this.shape_117.setTransform(-0.2,0.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1E7BE1").s().p("AgkLJQiJgGh7g8Qh4g2hdhiQhehmgviBQguh9gBiQQgBhDAMg+QAQhbAvg8QAwg8BnhwQBqhuBzgvQB2gvCYgnQCagmB8A8QCAA9BdBsQBcBtAuCLQArCHAACKQgDCNg8BtQg8BvhkBbQhqBhhYBDQhZBFhNALQgwAIgxAAQgbAAgcgDg");
	this.shape_118.setTransform(-0.2,0.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1E7BE1").s().p("AgYLNQiJgEh8g6Qh8g3hghkQhghogwiEQgwh/gBiRQAAg/ALg7QAOhZAtg4QAug4BmhzQBohwBygyQBzgwCZgrQCbgrB8A6QCBA7BfBrQBgBsAwCLQAuCHAACLQgCCPg9BvQg9ByhmBdQhqBhhWBDQhWBGhKALQg1AKg2AAIgmgCg");
	this.shape_119.setTransform(-0.1,0.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1E7BE1").s().p("AgNLRQiIgCh9g5Qh/g3hjhmQhhhqgziGQgyiDgBiQQABg7AIg4QANhYAtg1ICRipQBlhzBwgzQBygzCagvQCbgvB9A4QCCA5BiBrQBiBrAyCKQAxCGABCOQgCCPg9BzQg/B0hoBeQhqBhhUBEQhUBGhGAMQg5ALg8AAIgWAAg");
	this.shape_120.setTransform(0,0.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1E7BE1").s().p("AkHKeQiCg4hmhpQhjhrg1iJQg0iFAAiQQABg3AHg2QALhXArgwQArgvBih4QBlh2Bug1QBwg1Cag0QCcgzB+A2QCDA4BkBpQBlBrA1CKQAzCFABCQQgBCQg/B1Qg/B2hqBhQhqBghRBFQhSBHhDAMQhBAOhDAAIgCAAQiHAAh9g3g");

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1E7BE1").s().p("AkDKeQiDg4hnhoQhlhqg1iKQg0iGAAiQQABg7AJg6QANhZAsgyQAugyBjh1QBmhyBvgzQBxgzCYgxQCagxB7A2QCAA3BiBoQBlBqA1CLQAzCGABCQQgBCRg+B2Qg/B3hqBhQhnBfhQBDQhRBGhCAMQhBANhHABIgEAAQiHAAh6g2g");
	this.shape_122.setTransform(0,0.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1E7BE1").s().p("AkAKdQiCg3hphnQhnhpg1iLQg0iFAAiSQAAg/AMg+QAPhbAug1ICUimQBmhvBxgwQBygwCWguQCYgvB5A2QB8A2BgBlQBlBsA0CJQA0CHABCRQgBCSg+B3Qg/B4hpBiQhkBchOBDQhRBFhCAMQhBAMhLABIgEAAQiGAAh6g2g");
	this.shape_123.setTransform(0,0.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1E7BE1").s().p("Aj+KdQiBg3hqhmQhphpg0iKQg1iHAAiRQAAhEANhBQARheAwg3ICYilQBnhsByguQBzgtCUgsQCWgsB1A1QB6A2BeBjQBlBrA0CLQA0CHABCSQgBCSg+B4Qg+B6hoBiQhjBahMBAQhQBFhCAMQhBAMhOABIgHAAQiFAAh5g1g");
	this.shape_124.setTransform(0,0.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1E7BE1").s().p("Aj6KdQiBg3hshmQhrhng0iLQg1iHAAiSQAAhIAPhFQAThgAyg6QA0g5BnhrQBnhpB0grQB0grCSgpQCUgpBzA0QB3A2BbBhQBlBrA0CLQA0CHABCTQgBCTg+B5Qg9B7hoBiQhgBYhLA/QhPBFhBALQhBALhRACIgLAAQiEAAh2g0g");
	this.shape_125.setTransform(0,0.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#1E7BE1").s().p("Aj3KdQiAg2huhmQhthmg0iLQg1iIAAiSQAAhNAShIQAThiA1g9QA2g8BohnQBphmB0gpQB2goCPgmQCSgnBwA0QB0A1BZBfQBlBrA0CLQA0CIABCTQgBCUg9B7Qg+B7hnBjQhdBWhJA+QhPBDhBALQhBALhUACIgMAAQiEAAh1gzg");
	this.shape_126.setTransform(0,0.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1E7BE1").s().p("Aj1KdQh/g3hvhkQhvhmg0iKQg1iJAAiTQAAhRAUhMQAUhlA4g+QA4g/BohkQBqhjB2gmQB2glCOgkQCQglBtA0QBxA0BXBeQBkBrA1CLQA0CJABCTQgBCVg9B8Qg8B8hpBkQhZBThIA9QhOBDhBAKQhBALhXACIgPAAQiCAAh1gyg");
	this.shape_127.setTransform(0,0.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1E7BE1").s().p("AjxKcQh/g2hxhjQhwhlg1iLQg1iJAAiUQAAhVAVhQQAXhnA5hBQA6hBBqhhQBrhgB3gjQB3giCMgiQCNgiBsAzQBtA0BVBbQBkBsA1CLQA1CJAACVQAACUg+B+Qg8B9hnBkQhXBRhGA8QhNBChCAKQhAAKhbADIgPABQiDAAhzgzg");
	this.shape_128.setTransform(0,0.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1E7BE1").s().p("AjuKcQh+g1h0hjQhxhlg1iKQg1iKAAiVQAAhZAXhUQAYhoA9hEQA7hEBrhdQBrhdB5ggQB5ggCJggQCMgfBnAzQBrAzBTBZQBkBrA0CMQA2CKAACVQgBCWg8B+Qg8B+hnBlQhUBPhFA6QhNBBhAAKQhBAKheAEIgRAAQiDAAhxgyg");
	this.shape_129.setTransform(0,0.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1E7BE1").s().p("AjsKcQh8g2h2hhQhzhkg1iLQg1iKAAiWQAAhdAZhYQAahrA+hGQA+hGBshaQBthaB5gdQB6geCHgdQCKgcBlAyQBnAzBRBXQBkBrA0CMQA2CLAACVQgBCWg8CAQg7B/hnBlQhSBNhCA5QhMBBhBAJQhBAKhhAEIgUAAQiBAAhxgxg");
	this.shape_130.setTransform(0,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1E7BE1").s().p("AjoKcQh9g1h2hhQh2hjg1iLQg1iLAAiWQAAhiAbhbQAbhtBBhJQBBhIBshYQBthWB7gbQB7gbCGgaQCHgaBiAyQBlAyBOBVQBkBsA0CLQA2CLAACXQAACXg8CBQg8CAhmBlQhPBLhAA3QhNBBhAAJQhAAJhkAEIgXAAQiBAAhugwg");
	this.shape_131.setTransform(0,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1E7BE1").s().p("AjlKcQh8g1h4hhQh4hhg0iMQg2iLAAiXQAAhmAdhfQAdhvBDhLQBChLBuhUQBuhTB8gZQB8gYCEgYQCEgYBgAyQBiAyBMBSQBkBsA0CMQA2CMAACXQAACXg8CDQg7CBhlBmQhNBIg/A2QhLBAhAAJQhBAIhoAFIgYAAQiAAAhtgvg");
	this.shape_132.setTransform(0,0.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1E7BE1").s().p("AjjKcQh7g1h6hgQh5hgg0iMQg2iMAAiYQAAhpAehjQAfhyBFhNQBFhOBvhRQBvhQB9gWID/gqQCCgWBeAyQBeAxBKBQQBkBsA0CNQA2CMAACYQAACYg8CDQg6CChlBnQhKBGg9A1QhMA/hAAIQg/AIhsAFIgbABQh+AAhtgvg");
	this.shape_133.setTransform(0,1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#1E7BE1").s().p("AjfKcQh7g1h8heQh7hgg0iMQg2iNAAiYQAAhuAghnQAih0BGhQQBHhQBvhNQBwhNB/gTID+gmQCBgSBZAwQBcAxBJBPQBiBsA1CMQA2CNAACYQAACZg7CEQg7CDhlBoQhGBEg9AzQhJA/hAAIQhAAHhuAGIgcAAQh/AAhrgug");
	this.shape_134.setTransform(0,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1E7BE1").s().p("AjcKbQh6g0h+heQh9hfg0iMQg2iNAAiZQAAhyAjhrQAih2BIhSQBKhTBwhKQBxhKCAgQID8ghQB/gQBYAwQBYAwBHBNQBiBsA1CNQA2CNAACZQAACag7CFQg6CEhlBoQhDBCg7AyQhJA+hAAIQg/AHhzAGIgdABQh+AAhqgvg");
	this.shape_135.setTransform(0,1.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1E7BE1").s().p("AjaKbQh5gzh+heQiAheg0iMQg2iOAAiZQAAh3AkhuQAlh4BKhVQBMhVBxhHQByhHCAgOID8gbQB9gOBVAwQBVAwBFBKQBiBsA0CNQA3COAACaQAACag7CHQg5CFhkBoQhBBAg5AwQhJA+g/AHQhAAHh2AGIggABQh8AAhqgug");
	this.shape_136.setTransform(0,1.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1E7BE1").s().p("AjWKcQh5g0iAhdQiChdg0iMQg2iPAAiaQAAh7AmhxQAmh7BNhXQBOhYByhEQBzhDCBgMID8gVQB6gMBSAwQBSAvBDBIQBiBtA0CNQA3COAACbQAACag6CIQg5CGhkBpQg+A9g4AwQhIA9hAAHQg/AGh4AGIgjABQh8AAhngsg");
	this.shape_137.setTransform(0,1.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1E7BE1").s().p("AjTKcQh4g0iDhbQiDhdg0iNQg2iPAAiaQAAh/Aoh2QAnh9BPhZQBQhaB0hBQB0hACCgJID7gRQB5gJBPAvQBOAvBBBGQBhBtA1CNQA3CPAACbQAACbg6CKQg5CHhjBpQg7A7g2AuQhIA9g/AGQg/AGh8AHIglABQh7AAhmgsg");
	this.shape_138.setTransform(0,1.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1E7BE1").s().p("AjRKcQh3gziEhbQiFhbg0iNQg2iQAAibQAAiDAqh6QAph/BRhcQBShdB1g9QB0g9CFgGID5gMQB2gGBMAvQBMAtA/BFQBhBsA1COQA3CPAACcQAACcg6CLQg4CIhjBqQg4A4g1AtQhHA8g/AGQhAAFh+AIIgnABQh6AAhmgsg");
	this.shape_139.setTransform(0,1.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1E7BE1").s().p("AjNKcQh2gyiHhbQiGhag0iOQg3iQAAicQAAiHAsh9QAriBBThfQBUhfB2g6QB1g6CGgEID4gGQB0gEBKAuQBJAuA8BCQBhBtA1CNQA3CQAACdQAACcg6CMQg3CJhiBqQg2A3g0ArQhGA8g/AFIjBANIgoABQh6AAhkgrg");
	this.shape_140.setTransform(0,1.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1E7BE1").s().p("AjKKdQh2gziIhZQiIhag0iNQg3iRAAidQAAiLAuiBQAsiEBWhhQBWhhB2g3QB3g3CGgBID4gBQBygBBHAtQBGAtA6BAQBhBtA1COQA3CRAACdQAACdg5CNQg3CKhiBrQgzA0gyAqQhGA7g/AFIjEANIgqABQh5AAhjgqg");
	this.shape_141.setTransform(0,1.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1E7BE1").s().p("AjIKfQh0gyiKhZQiKhZg0iNQg3iSAAidQAAiQAviFQAuiFBZhkQBYhkB3gzQB4g0CHACID3ADQBwACBEAtQBDAsA4A/QBhBtA0CNQA4CSAACeQAACdg5CPQg3CKhiBsQgwAygwApQhEA6g/AFIjIANIgrABQh5AAhjgqg");
	this.shape_142.setTransform(0,1.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1E7BE1").s().p("AjEKjQh1gyiLhYQiMhYg0iOQg3iSAAifQAAiTAxiIQAwiIBbhmQBahnB4gwQB4gxCKAEID2AKQBtADBBAtQBAAsA2A8QBhBtA0COQA4CSAACeQAACfg5CQQg2CLhiBsQgsAwgvAoQhEA5g/AFIjKAMQgZACgXAAQh3AAhggpg");
	this.shape_143.setTransform(0,0.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1E7BE1").s().p("AjBKmQh0gxiNhYQiOhXg0iOQg3iSAAigQAAiXAziMQAyiKBchpQBdhpB5gtQB6gtCKAGID0APQBsAGA/AsQA8AsA0A6QBhBtA0COQA4CSAACfQAACgg5CRQg1CMhhBtQgrAugsAlQhEA6g/AEQg/ADiPAJQgZACgYAAQh2AAhfgpg");
	this.shape_144.setTransform(0,0.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1E7BE1").s().p("Ai/KqQhygyiPhWQiQhWg0iPQg3iSAAihQAAicA1iPQAziNBfhrQBehrB7gqQB6gqCLAJQCKAKBqAKQBqAJA8AsQA5AqAyA4QBhBuA0COQA4CTAACfQAAChg5CSQg0CNhhBtQgoAsgrAkQhEA5g9AEQhAACiRAKQgaACgZAAQh2AAhfgog");
	this.shape_145.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-72.5,140,145);
p.frameBounds = [rect, new cjs.Rectangle(-70,-72.5,139.7,145), new cjs.Rectangle(-70,-72.5,139.4,144.9), new cjs.Rectangle(-69.9,-72.4,139.1,144.8), new cjs.Rectangle(-69.9,-72.4,138.8,144.7), new cjs.Rectangle(-70,-72.4,138.7,144.7), new cjs.Rectangle(-70,-72.4,138.6,144.6), new cjs.Rectangle(-70,-72.4,138.6,144.5), rect=new cjs.Rectangle(-69.9,-72.4,138.6,144.5), rect, rect=new cjs.Rectangle(-69.9,-72.4,138.6,144.4), rect, new cjs.Rectangle(-69.9,-72.4,138.7,144.3), new cjs.Rectangle(-69.9,-72.4,138.7,144.2), new cjs.Rectangle(-69.9,-72.4,138.8,144.2), new cjs.Rectangle(-70,-72.4,138.9,144.2), new cjs.Rectangle(-70,-72.4,139,144.2), new cjs.Rectangle(-69.9,-72.4,139,144.1), new cjs.Rectangle(-69.9,-72.4,139,144), rect=new cjs.Rectangle(-69.9,-72.4,139.1,144), rect, new cjs.Rectangle(-69.9,-72.4,139.2,143.9), new cjs.Rectangle(-69.9,-72.4,139.2,144), rect=new cjs.Rectangle(-69.9,-72.4,139.3,143.9), rect, rect=new cjs.Rectangle(-69.9,-72.4,139.4,143.8), rect, rect=new cjs.Rectangle(-69.9,-72.4,139.5,143.9), rect, new cjs.Rectangle(-70,-72.4,139.6,143.9), new cjs.Rectangle(-70,-72.4,139.7,144), new cjs.Rectangle(-70,-72.4,139.7,144.1), new cjs.Rectangle(-70,-72.4,139.7,144.2), new cjs.Rectangle(-70,-72.4,139.8,144.3), rect=new cjs.Rectangle(-70,-72.4,139.8,144.4), rect, new cjs.Rectangle(-70,-72.4,139.9,144.5), rect=new cjs.Rectangle(-70,-72.4,139.9,144.6), rect, new cjs.Rectangle(-70,-72.4,139.9,144.7), new cjs.Rectangle(-70,-72.4,140,144.7), rect=new cjs.Rectangle(-70,-72.5,140,144.9), rect, rect, rect, rect=new cjs.Rectangle(-70,-72.5,140,145), rect, rect, rect, rect, new cjs.Rectangle(-69.9,-72.5,140,145), rect=new cjs.Rectangle(-69.9,-72.4,139.9,144.9), rect, new cjs.Rectangle(-69.8,-72.4,139.9,144.9), new cjs.Rectangle(-69.8,-72.5,139.9,144.9), new cjs.Rectangle(-69.8,-72.4,139.8,144.8), new cjs.Rectangle(-69.7,-72.4,139.8,144.8), new cjs.Rectangle(-69.7,-72.4,139.7,144.8), new cjs.Rectangle(-69.7,-72.4,139.7,144.7), new cjs.Rectangle(-69.6,-72.4,139.7,144.7), new cjs.Rectangle(-69.6,-72.4,139.6,144.7), new cjs.Rectangle(-69.6,-72.4,139.6,144.6), rect=new cjs.Rectangle(-69.5,-72.4,139.6,144.5), rect, rect, rect, rect=new cjs.Rectangle(-69.6,-72.4,139.6,144.4), rect, new cjs.Rectangle(-69.7,-72.4,139.7,144.5), new cjs.Rectangle(-69.7,-72.4,139.7,144.6), new cjs.Rectangle(-69.8,-72.4,139.8,144.7), new cjs.Rectangle(-69.9,-72.4,139.9,144.8), new cjs.Rectangle(-70,-72.5,140,145), new cjs.Rectangle(-70,-72.5,139.9,145), new cjs.Rectangle(-69.9,-72.5,139.8,145), new cjs.Rectangle(-69.9,-72.5,139.7,145), rect=new cjs.Rectangle(-69.9,-72.5,139.5,145), rect, rect=new cjs.Rectangle(-69.8,-72.5,139.3,145), rect, new cjs.Rectangle(-69.8,-72.5,139.2,145), rect=new cjs.Rectangle(-69.8,-72.5,139.1,145), rect, rect=new cjs.Rectangle(-69.8,-72.5,139,145), rect, rect=new cjs.Rectangle(-69.8,-72.5,139.1,145), rect, rect, rect, rect=new cjs.Rectangle(-69.8,-72.5,139.3,145), rect, new cjs.Rectangle(-69.8,-72.5,139.4,145), new cjs.Rectangle(-69.8,-72.5,139.5,145), new cjs.Rectangle(-69.9,-72.5,139.6,145), new cjs.Rectangle(-69.8,-72.5,139.6,145), new cjs.Rectangle(-69.9,-72.5,139.7,145), new cjs.Rectangle(-69.9,-72.5,139.9,145), new cjs.Rectangle(-70,-72.5,140,145), new cjs.Rectangle(-70,-72,139.7,144.5), new cjs.Rectangle(-70,-71.5,139.4,143.9), new cjs.Rectangle(-70,-71,139.2,143.4), new cjs.Rectangle(-69.9,-70.5,138.9,142.9), new cjs.Rectangle(-70,-70.1,138.7,142.4), new cjs.Rectangle(-70,-69.7,138.6,142), new cjs.Rectangle(-70,-69.4,138.6,141.6), new cjs.Rectangle(-70,-69.1,138.6,141.2), new cjs.Rectangle(-70,-68.8,138.6,140.9), new cjs.Rectangle(-70,-68.6,138.7,140.6), new cjs.Rectangle(-69.9,-68.4,138.7,140.5), new cjs.Rectangle(-69.9,-68.4,138.8,140.4), new cjs.Rectangle(-70,-68.4,138.9,140.4), new cjs.Rectangle(-70,-68.6,138.9,140.6), new cjs.Rectangle(-70,-68.8,139,140.7), new cjs.Rectangle(-70,-69,139.1,141), new cjs.Rectangle(-70,-69.3,139.2,141.1), new cjs.Rectangle(-69.9,-69.6,139.2,141.5), new cjs.Rectangle(-69.9,-69.9,139.4,141.9), new cjs.Rectangle(-69.9,-70.3,139.5,142.3), new cjs.Rectangle(-70,-70.7,139.6,142.7), new cjs.Rectangle(-70,-71.1,139.7,143.1), new cjs.Rectangle(-70,-71.5,139.8,143.7), new cjs.Rectangle(-70,-72,139.9,144.3), new cjs.Rectangle(-70,-72.4,140,145), new cjs.Rectangle(-70,-72.3,140,144.8), new cjs.Rectangle(-70,-72.1,140,144.6), new cjs.Rectangle(-70,-71.9,140,144.4), new cjs.Rectangle(-70,-71.7,140,144.2), new cjs.Rectangle(-70,-71.5,140,144), new cjs.Rectangle(-70,-71.4,140,143.9), new cjs.Rectangle(-70,-71.2,140,143.7), new cjs.Rectangle(-70,-71,140,143.5), new cjs.Rectangle(-70,-70.9,140,143.5), new cjs.Rectangle(-70,-70.7,140,143.2), new cjs.Rectangle(-70,-70.6,140,143.1), new cjs.Rectangle(-70,-70.5,140,143), new cjs.Rectangle(-70,-70.3,140,142.8), new cjs.Rectangle(-70,-70.2,140,142.7), new cjs.Rectangle(-70,-70.1,140,142.6), new cjs.Rectangle(-70,-70,140,142.5), new cjs.Rectangle(-70,-69.9,140,142.4), rect=new cjs.Rectangle(-70,-69.8,140,142.3), rect, rect, new cjs.Rectangle(-70,-70.1,140,142.6), new cjs.Rectangle(-70,-70.7,140,143.2), new cjs.Rectangle(-70,-71.3,140,143.8), new cjs.Rectangle(-70,-71.8,140,144.3), new cjs.Rectangle(-70,-72.5,140,145)];


(lib.viAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_198 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(34,181,115,0)","rgba(11,156,91,0)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape.setTransform(63.5,106.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(34,181,115,0.11)","rgba(11,156,91,0.11)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_1.setTransform(63.5,106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(34,181,115,0.224)","rgba(11,156,91,0.224)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_2.setTransform(63.5,106.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(34,181,115,0.333)","rgba(11,156,91,0.333)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_3.setTransform(63.5,106.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(34,181,115,0.443)","rgba(11,156,91,0.443)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_4.setTransform(63.5,106.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(34,181,115,0.557)","rgba(11,156,91,0.557)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_5.setTransform(63.5,106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(34,181,115,0.667)","rgba(11,156,91,0.667)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_6.setTransform(63.5,106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(34,181,115,0.776)","rgba(11,156,91,0.776)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_7.setTransform(63.5,106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(34,181,115,0.89)","rgba(11,156,91,0.89)"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_8.setTransform(63.5,106.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#22B573","#0B9C5B"],[0,1],-11.3,0,11.3,0).s().p("AhBBFQgNgRgMgYQgOgZgFgQQgGgUAGgBQAMgCAbAeQAOAOALAPIAFgFIAQgNQAbgVAcgTIAIgHIAXgRQA7gpgKASQgEAIgVAcQgXAcgaAcIgEAEIgiAnIgFAEIgOAPQgSAQgHAAQgGAAgOgTg");
	this.shape_9.setTransform(63.5,106.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#22B573","#0B9C5B"],[0,1],-12.6,0,12.5,0).s().p("AhJBNQgOgTgOgbQgPgbgGgTQgHgWAIgBQANgDAeAiQAPAPAMARIAGgFIASgOIA9guIAKgHIAZgTQBCgugLAVQgFAJgYAeQgZAfgdAgIgEAFIgmArIgGAFIgPAQQgUASgIAAQgHAAgQgVg");
	this.shape_10.setTransform(63.5,103.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#22B573","#0B9C5B"],[0,1],-13.8,0,13.8,0).s().p("AhQBVQgPgVgQgeQgQgegHgUQgHgYAIgBQAOgDAhAkQARASANASIAGgFIAVgQQAhgaAigYIAKgJIAcgUQBIgzgMAXQgFAKgaAhQgcAjggAjIgEAFIgqAvIgGAGIgSARQgVAUgJAAQgIAAgRgXg");
	this.shape_11.setTransform(63.5,99.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#22B573","#0B9C5B"],[0,1],-14.9,0,15,0).s().p("AhXBcQgQgWgRghQgSgggHgWQgIgaAJgCQAPgDAkAoQASASAPAUIAGgFIAXgRQAkgdAkgaIAMgJIAegWQBOg3gNAYQgFALgdAlQgeAlgjAmIgEAFIguA0IgGAGIgTATQgYAVgJAAQgJAAgTgZg");
	this.shape_12.setTransform(63.4,96.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#22B573","#0B9C5B"],[0,1],-16.1,0,16.2,0).s().p("AhdBjQgSgYgSgjQgTgjgIgYQgJgcAKgBQAQgDAnAqQATAUAQAWIAHgGIAYgTQAngeAogdIAMgJIAggYQBVg7gOAaQgGAMgfAnQggAogmApIgFAGIgxA3IgHAHIgUAUQgaAXgKAAQgJAAgUgbg");
	this.shape_13.setTransform(63.4,93.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#22B573","#0B9C5B"],[0,1],-17.2,0,17.2,0).s().p("AhkBqQgTgagTglQgUgmgJgZQgJgeAKgCQASgDApAtQAVAWARAXIAHgGIAagUQAqghAqgeIAMgKIAjgZQBahAgPAcQgGAMghAqQgiArgoAsIgGAGIg0A7IgIAHIgWAWQgbAZgKAAQgKAAgWgdg");
	this.shape_14.setTransform(63.4,90.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#22B573","#0B9C5B"],[0,1],-18.2,0,18.3,0).s().p("AhqBwQgUgbgVgoQgVgngJgcQgKgfALgCQATgEAsAwQAWAXASAZIAHgHIAbgVQAtgjAsggIAOgKIAlgbQBfhDgPAeQgHAMgjAtQglAtgqAvIgGAGIg4A/IgHAHIgXAXQgdAagLAAQgLAAgXgeg");
	this.shape_15.setTransform(63.4,88.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#22B573","#0B9C5B"],[0,1],-19.2,0,19.2,0).s().p("AhvB2QgWgdgVgpQgXgqgJgdQgLghAMgCQATgDAuAyQAYAYATAaIAIgHIAcgWQAvglAvgiIAOgLIAngcQBlhHgRAgQgHANglAvQgmAwgtAxIgGAHIg7BCIgIAIIgYAYQgfAbgLAAQgLAAgYggg");
	this.shape_16.setTransform(63.4,85.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#22B573","#0B9C5B"],[0,1],-20.1,0,20.1,0).s().p("Ah1B8QgWgfgXgrQgXgsgKgeQgLgjAMgCQAUgEAxA1QAYAZAUAbIAIgGIAegYQAxgnAygjIAPgMIAogdQBqhKgSAgQgHAPgnAxQgoAygvA0IgGAHIg+BFIgJAIIgZAZQggAdgMAAQgMAAgZghg");
	this.shape_17.setTransform(63.4,83.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#22B573","#0B9C5B"],[0,1],-21,0,21,0).s().p("Ah6CBQgXgggYgtQgZgugKgfQgLglAMgCQAWgEAyA3QAaAbAUAcIAJgHIAfgZQA0goAzglIAQgMIAqgfQBuhNgSAiQgIAPgpAzQgpA0gxA2IgGAIIhBBIIgJAJIgbAaQghAegMAAQgNAAgagjg");
	this.shape_18.setTransform(63.4,80.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#22B573","#0B9C5B"],[0,1],-21.8,0,21.8,0).s().p("Ah/CGQgYghgZgvQgZgvgLghQgMgmANgCQAXgEA0A5QAaAcAWAdIAJgHIAggaQA2gqA1gmIAQgNIAtggQByhQgTAjQgIAQgqA1QgsA2gyA5IgHAHIhDBLIgKAJIgbAbQgjAggMAAQgOAAgbglg");
	this.shape_19.setTransform(63.4,78.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#22B573","#0B9C5B"],[0,1],-22.6,0,22.6,0).s().p("AiDCLQgZgigagxQgagxgLgiQgNgnAOgDQAXgEA2A7QAbAdAXAeIAJgHIAigbQA3grA3goIARgNIAughQB2hTgTAlQgJAPgsA4QgtA4g0A6IgHAIIhFBNIgKAKIgdAcQgjAggNAAQgOAAgcglg");
	this.shape_20.setTransform(63.4,76.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#22B573","#0B9C5B"],[0,1],-23.3,0,23.3,0).s().p("AiHCPQgagjgbgyQgbgzgLgjQgNgoAOgDQAYgEA4A9QAcAeAXAfIAJgIIAjgbQA5gtA5gpIASgNIAvgiQB5hWgTAmQgJAQgtA5QgvA6g1A8IgIAIIhHBQIgLAKQgQARgNAMQglAhgNAAQgOAAgdgng");
	this.shape_21.setTransform(63.4,74.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#22B573","#0B9C5B"],[0,1],-24,0,23.9,0).s().p("AiLCTQgbgkgbg0Qgcg0gMgkQgNgpAOgDQAZgEA5A/QAdAeAYAgIAKgIIAkgcQA7guA6gqIASgOIAxgjQB9hYgVAnQgJARguA6QgwA8g3A9IgIAJQgrAwgfAiIgKAKIgeAeQgmAigOAAQgOAAgegog");
	this.shape_22.setTransform(63.4,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#22B573","#0B9C5B"],[0,1],-24.6,0,24.6,0).s().p("AiPCXQgbglgcg1Qgdg2gMglQgNgqAOgDQAagEA7BAQAdAfAZAhIAJgIIAlgdQA9gvA8grIASgOIAygkQCAhbgVAoQgJARgwA8QgxA9g4BAIgIAJQgsAxggAjIgKAKIggAfQgmAjgOAAQgPAAgfgpg");
	this.shape_23.setTransform(63.4,71.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#22B573","#0B9C5B"],[0,1],-25.2,0,25.1,0).s().p("AiSCbQgcgmgdg2Qgdg3gMgmQgOgrAPgDQAagFA8BCQAeAgAZAhIAKgHIAmgeQA+gwA9gtIATgOIAzglQCDhcgVAoQgKASgwA9QgzA/g6BBIgHAJQgtAyghAkIgLAKIggAgQgnAjgPAAQgPAAgfgpg");
	this.shape_24.setTransform(63.4,69.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#22B573","#0B9C5B"],[0,1],-25.7,0,25.6,0).s().p("AiVCeQgdgngdg3Qgeg4gMgmQgOgtAPgCQAagFA+BDQAfAhAZAiIAKgIIAngfQA/gxA/gtIATgPIA0glQCFhfgVAqQgKASgyA+QgzBAg7BCIgIAKQguAzghAkIgLALQgSATgPANQgoAkgPAAQgPAAgggqg");
	this.shape_25.setTransform(63.4,68.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#22B573","#0B9C5B"],[0,1],-26.1,0,26.1,0).s().p("AiYCgQgdgngeg4Qgeg5gMgnQgPgtAQgDQAagFA/BEQAgAhAZAjIALgIIAngfQBAgyBAguIATgPIA1gmQCIhggWAqQgKASgyBAQg0BBg8BDIgIAKQgvA0giAlIgLALIghAgQgpAmgPAAQgQAAghgsg");
	this.shape_26.setTransform(63.4,67.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#22B573","#0B9C5B"],[0,1],-26.5,0,26.5,0).s().p("AiaCjQgdgogfg5Qgeg6gNgoQgPguAQgDQAbgEBABFQAgAiAaAjIAKgIIAoggQBBgzBBgvIAUgPIA1gmQCLhigXArQgKATgzBAQg1BCg9BFIgIAJQgwA1giAmIgLALIgiAhQgqAmgPAAQgQAAghgsg");
	this.shape_27.setTransform(63.4,66.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#22B573","#0B9C5B"],[0,1],-26.9,0,26.8,0).s().p("AicClQgegogfg6Qgfg7gNgoQgPguAQgDQAcgFBABGQAhAiAaAkIALgIIAoggQBCg0BCgwIAUgPIA2gnQCMhjgWAsQgLATg0BBQg1BDg+BFIgIAKQgwA2gjAmIgMALQgSATgQAOQgqAngPAAQgRAAghgtg");
	this.shape_28.setTransform(63.4,65.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.1,0,27.2,0).s().p("AidCnQgegpggg7Qgfg7gNgpQgPgvAQgCQAcgFBBBGQAhAjAbAkIAKgIIApggQBDg1BCgwIAUgPIA3gnQCOhkgXArQgKATg1BDQg2BDg+BGIgJAKQgxA3gjAmIgLALIgjAiQgqAngQAAQgRAAghgtg");
	this.shape_29.setTransform(63.4,64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.4,0,27.4,0).s().p("AifCoQgfgpgfg7Qggg8gNgpQgPgvAQgDQAcgFBCBHQAhAjAbAlIALgJIApggQBEg1BDgxIAUgPIA3goQCPhkgXAsQgKATg2BDQg2BEg/BHIgJAJQgxA4gjAmIgMAMIgjAiQgrAngPAAQgRAAgigug");
	this.shape_30.setTransform(63.4,63.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.6,0,27.6,0).s().p("AigCpQgfgpggg8Qgfg8gOgpQgPgwAQgDQAcgFBDBIQAhAjAbAlIALgIIAqghQBEg1BDgxIAUgQIA4goQCQhlgXAsQgLAUg1BDQg3BEhABIIgIAKQgyA3gjAnIgMAMQgTAUgQAOQgrAngQAAQgRAAgigug");
	this.shape_31.setTransform(63.4,63.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.7,0,27.7,0).s().p("AihCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAhAkAcAlIALgJIAqghQBEg1BDgxIAVgQIA4goQCQhmgXAtQgKATg2BEQg3BFhABHIgJAKQgxA4gkAnIgMAMIgkAiQgrAngQAAQgRAAgigtg");
	this.shape_32.setTransform(63.4,63);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqgfg8Qggg8gOgqQgPgwAQgDQAdgFBCBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCQhmgXAtQgLATg1BEQg4BFhABIIgIAKQgyA4gkAnIgMAMIgkAiQgrAogQAAQgRAAgjgug");
	this.shape_33.setTransform(63.4,62.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#22B573","#0B9C5B"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_34.setTransform(63.4,62.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(34,181,115,0.996)","rgba(11,156,91,0.996)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_35.setTransform(63.4,62.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(34,181,115,0.988)","rgba(11,156,91,0.988)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_36.setTransform(63.4,62.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(34,181,115,0.984)","rgba(11,156,91,0.984)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_37.setTransform(63.4,62.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(34,181,115,0.976)","rgba(11,156,91,0.976)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_38.setTransform(63.4,62.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(34,181,115,0.969)","rgba(11,156,91,0.969)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_39.setTransform(63.4,62.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(34,181,115,0.961)","rgba(11,156,91,0.961)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_40.setTransform(63.4,62.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(34,181,115,0.949)","rgba(11,156,91,0.949)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_41.setTransform(63.4,62.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(34,181,115,0.937)","rgba(11,156,91,0.937)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_42.setTransform(63.4,62.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(34,181,115,0.925)","rgba(11,156,91,0.925)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_43.setTransform(63.4,62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(34,181,115,0.91)","rgba(11,156,91,0.91)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_44.setTransform(63.4,62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(34,181,115,0.894)","rgba(11,156,91,0.894)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_45.setTransform(63.4,62.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(34,181,115,0.878)","rgba(11,156,91,0.878)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_46.setTransform(63.4,62.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(34,181,115,0.859)","rgba(11,156,91,0.859)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_47.setTransform(63.4,62.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(34,181,115,0.839)","rgba(11,156,91,0.839)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_48.setTransform(63.4,62.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(34,181,115,0.82)","rgba(11,156,91,0.82)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_49.setTransform(63.4,62.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(34,181,115,0.796)","rgba(11,156,91,0.796)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_50.setTransform(63.4,62.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(34,181,115,0.773)","rgba(11,156,91,0.773)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_51.setTransform(63.4,62.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(34,181,115,0.749)","rgba(11,156,91,0.749)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_52.setTransform(63.4,62.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(34,181,115,0.725)","rgba(11,156,91,0.725)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_53.setTransform(63.4,62.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(34,181,115,0.698)","rgba(11,156,91,0.698)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_54.setTransform(63.4,62.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(34,181,115,0.671)","rgba(11,156,91,0.671)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_55.setTransform(63.4,62.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(34,181,115,0.639)","rgba(11,156,91,0.639)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_56.setTransform(63.4,62.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(34,181,115,0.608)","rgba(11,156,91,0.608)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_57.setTransform(63.4,62.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(34,181,115,0.576)","rgba(11,156,91,0.576)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_58.setTransform(63.4,62.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(34,181,115,0.545)","rgba(11,156,91,0.545)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_59.setTransform(63.4,62.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(34,181,115,0.51)","rgba(11,156,91,0.51)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_60.setTransform(63.4,62.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(34,181,115,0.475)","rgba(11,156,91,0.475)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_61.setTransform(63.4,62.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(34,181,115,0.439)","rgba(11,156,91,0.439)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_62.setTransform(63.4,62.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(34,181,115,0.4)","rgba(11,156,91,0.4)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_63.setTransform(63.4,62.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(34,181,115,0.361)","rgba(11,156,91,0.361)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_64.setTransform(63.4,62.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(34,181,115,0.318)","rgba(11,156,91,0.318)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_65.setTransform(63.4,62.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(34,181,115,0.278)","rgba(11,156,91,0.278)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_66.setTransform(63.4,62.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(34,181,115,0.235)","rgba(11,156,91,0.235)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_67.setTransform(63.4,62.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(34,181,115,0.188)","rgba(11,156,91,0.188)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_68.setTransform(63.4,62.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(34,181,115,0.145)","rgba(11,156,91,0.145)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_69.setTransform(63.4,62.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(34,181,115,0.098)","rgba(11,156,91,0.098)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_70.setTransform(63.4,62.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(34,181,115,0.051)","rgba(11,156,91,0.051)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMQgUAUgQAPQgrAngQAAQgRAAgjgug");
	this.shape_71.setTransform(63.4,62.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(34,181,115,0)","rgba(11,156,91,0)"],[0,1],-27.8,0,27.8,0).s().p("AiiCrQgfgqggg8Qggg8gNgqQgQgwARgDQAcgFBDBIQAiAkAbAlIALgJIAqghQBFg1BEgyIAUgPIA5gpQCRhmgYAtQgKATg2BEQg4BFhABIIgIAKQgyA4gkAnIgMAMIgkAjQgrAngQAAQgRAAgjgug");
	this.shape_72.setTransform(63.4,62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},55).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},40).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(52.2,97.7,22.6,17.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(50.9,93.2,25.2,19.7), new cjs.Rectangle(49.7,89,27.6,21.6), new cjs.Rectangle(48.4,84.9,30.1,23.4), new cjs.Rectangle(47.3,81.1,32.3,25.2), new cjs.Rectangle(46.2,77.4,34.5,26.9), new cjs.Rectangle(45.2,73.9,36.6,28.5), new cjs.Rectangle(44.2,70.5,38.5,30), new cjs.Rectangle(43.3,67.3,40.3,31.5), new cjs.Rectangle(42.4,64.4,42.1,32.8), new cjs.Rectangle(41.6,61.6,43.7,34.1), new cjs.Rectangle(40.8,58.9,45.3,35.3), new cjs.Rectangle(40.1,56.5,46.7,36.3), new cjs.Rectangle(39.4,54.2,48.1,37.5), new cjs.Rectangle(38.8,52.1,49.3,38.4), new cjs.Rectangle(38.3,50.2,50.3,39.3), new cjs.Rectangle(37.8,48.5,51.4,40), new cjs.Rectangle(37.3,47,52.3,40.8), new cjs.Rectangle(36.9,45.6,53.1,41.4), new cjs.Rectangle(36.5,44.4,53.8,41.9), new cjs.Rectangle(36.2,43.4,54.4,42.4), new cjs.Rectangle(36,42.6,54.8,42.8), new cjs.Rectangle(35.8,41.9,55.3,43.1), new cjs.Rectangle(35.7,41.4,55.5,43.3), new cjs.Rectangle(35.6,41.2,55.7,43.4), rect=new cjs.Rectangle(35.6,41.1,55.8,43.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magnifying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2A043").s().p("AlZJRQB4AABvguQBqgtBShTQBShSAthqQAuhuAAh5QAAh4guhuQguhrhRhRQhQhShsgtQhugvh5AAIAAhiQCNAACAA2QB9A1BfBfQBeBfA1B9QA2CAAACMQAACNg2CAQg0B8hfBgQhgBgh8A0QhqAthzAIQgYABgYAAg");
	this.shape.setTransform(-1,-12,0.203,0.203,-41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A4639").s().p("AgXAYIAAgtQAXAAAYgCIAAAvg");
	this.shape_1.setTransform(3.8,3.1,0.203,0.203,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A4639").s().p("AgxHEIAAuHIBjAAIAAOHg");
	this.shape_2.setTransform(11.7,11.1,0.203,0.203,-41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2A043").s().p("Ag/AoIAAhPIB/AAIAABPg");
	this.shape_3.setTransform(5.3,3.5,0.203,0.203,-41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2A043").s().p("Ag/AoIAAhPIB/AAIAABPg");
	this.shape_4.setTransform(18.6,18.4,0.203,0.203,-41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8CA4B").s().p("AkMJ9Qh8g0hghgQhfhgg1h8Qg2iAAAiNQAAiMA2iAQA1h9BfhfQBfhfB9g1QCAg2CMAAQCNAACAA2QB9A1BfBfQBfBfA1B9QA2CAAACMQAACNg2CAQg1B8hfBgQhgBgh8A0Qh/A2iOAAQiMAAiAg2gAjmohQhrAthSBSQhRBRguBrQguBuAAB4QAAB5AuBuQAuBqBRBSQBTBTBqAtQBwAuB2AAQB3AABwguQBqgtBThTQBRhSAuhqQAuhuAAh5QAAh4guhuQguhrhRhRQhShShrgtQhugvh5AAQh3AAhvAvg");
	this.shape_5.setTransform(-6.3,-7.3,0.203,0.203,-41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#745E48").s().p("AguAwIAAhfIBdAAIAABfg");
	this.shape_6.setTransform(3.1,3.1,0.203,0.203,-41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#745E48").s().p("AhjHEIAAuHIDHAAIAAOHg");
	this.shape_7.setTransform(11,11.8,0.203,0.203,-41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8CA4B").s().p("Ah/AoIAAhPID/AAIAABPg");
	this.shape_8.setTransform(4.3,4.4,0.203,0.203,-41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8CA4B").s().p("Ah/AoIAAhPID/AAIAABPg");
	this.shape_9.setTransform(17.6,19.3,0.203,0.203,-41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7E2E8").s().p("Aj4BCQAthqBShSQBThTBogrQBtgvB5AAQAAB5gvBtQgsBphTBSQhQBShrAtQhtAvh5AAQAAh5Avhtg");
	this.shape_10.setTransform(-14.7,-7.8,0.203,0.203,-41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4DBE7").s().p("AgFB4QgYgCgVgJQgWgLgQgSQgRgSgIgXQgHgWABgXQACgXAKgVQAKgWASgQQASgRAXgIQAWgHAWABQAYABAVAKQAWAKARATQAQASAIAXQAHAWgBAWQgBAYgKAVQgKAWgTAQQgSAQgWAIQgTAHgUAAIgGAAg");
	this.shape_11.setTransform(-6.3,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnifying, rect = new cjs.Rectangle(-20.3,-21.3,40.5,43), [rect]);


(lib.bubbleText_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bubbleText = new cjs.Text("", "25px 'Arial'");
	this.bubbleText.name = "bubbleText";
	this.bubbleText.textAlign = "center";
	this.bubbleText.lineHeight = 28;
	this.bubbleText.lineWidth = 130;
	this.bubbleText.parent = this;
	this.bubbleText.setTransform(48.6,1.4,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.bubbleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbleText_mc, rect = new cjs.Rectangle(0,0,97.1,23.2), [rect]);


(lib.bubbleCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0)").s().p("AjyI+QhwgvhWhXQhXhVgvhxQgxhzAAh/QAAh+Axh0QAvhvBXhXQBWhWBwgwQB0gwB+gBQB/ABB0AwQBwAwBWBWQBWBXAvBvQAyB0AAB+QAAB/gyBzQgvBxhWBVQhWBXhwAvQh0Ayh/AAQh+AAh0gyg");
	this.shape.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,124.8,124.7);
p.frameBounds = [rect, rect, rect, rect];


(lib.stageBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EijoBS5MAAAilxMFHRAAAMAAAClxg");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stageBG_mc, rect = new cjs.Rectangle(-1047.4,-530.4,2094.7,1061), [rect]);


(lib.skyBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.skybg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyBG_mc, rect = new cjs.Rectangle(0,0,960,620), [rect]);


(lib.platform2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7247").s().p("AAABfIgIAAIAAgfQgcAQg5AAQhpAAg8gbQgRgIgCACQgCABAAAWQAAAKgKAEQgLAFgdAAQgnAAgmgRQgogVgWgIQAAAPgPANQgSAPggAAQgkAAgYgLQgTgKgIgOQgfANggAAIgBAAQhHgDgSgCQgwgGgcgNQgJAMAAAXQAAAHgnAAQgVAAg2gOQg6gPgEgNIACAGQACAGAAADQAAALgeALQgiALguAAQgkAAgcgGQgigHAAgNQAAgJAPgLQgMADgaAAQggAAghgIQgWgFgfgMIgvAAQgNAKgaAHQgYAGgYAAQgfAAgggIIgsgLIgNAAQgBANgbAIQgbAIgmAAQhaAAgggUQgGABgJgFQgLgEgHAAQAAAcgHAHQgPANg0AAQgaAAgugIQgtgJgYAAQglAAgJATQgJATgkAAQhPAAhMgpQgLAHABAKQABADgXAAQhEAAgqgMQgdgJgLgNIABAWQAAAIgHAGQgJAHgUAAQhBAAgZgEQg0gGgTgXQgCAXgQAKQgRAMgPgNIgTgRQgcAQg5AAQhoAAg+gbQgQgIgBACQgCABAAAWQAAAKgLAEQgLAFgdAAQgoAAglgRQgogVgWgIQAAAPgOANQgTAPggAAQgkAAgYgLQgTgKgHgOQgfANggAAIgCAAQhGgDgUgCQgvgGgbgNQgJAMgBAXQAAAHgnAAQgVAAg2gOQg5gPgEgNIABAGQADAGAAADQAAALgfALQgiALguAAQgkAAgcgGQgjgHAAgNQAAgJARgLQgNADgaAAQggAAgggIQgWgFgggMIgvAAQgMAKgbAHQgYAGgYAAQgeAAghgIIgsgLIgNAAQAAANgcAIQgbAIgmAAQhaAAgggUQgGABgKgFQgJgEgHAAQgBAcgHAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgKATQgJATgjAAQhQAAhLgpQgLAHAAAKQABADgWAAQhEAAgqgMQgdgJgMgNIACAWQAAAIgIAGQgJAHgUAAQhBAAgZgEIgRgDIAAgNQAAhAA6guQA7guBTAAMCj/AAAQBTAAA7AuQA6AuAABAIAAARQhRgDg0gXQgQgIgCACQgDABAAAWQAAAKgKAEQgMAFgcAAQgnAAgmgRQgngVgXgIQAAAPgOANIgOAJQgPAGgVAAQgkAAgYgLQgVgKgGgOQgfANgfAAIgDAAQhGgDgUgCQgvgGgbgNQgJAMgBAXQAAAHgnAAQgUAAg3gOQg6gPgDgNIABAGIACAJQAAALgeALQgiALgtAAQgkAAgegGQghgHAAgNQAAgJAQgLQgNADgZAAQghAAgfgIQgXgFgggMIgvAAQgMAKgbAHQgYAGgYAAQgeAAghgIIgrgLIgNAAQgBANgcAIQgbAIgmAAQhZAAghgUQgFABgKgFQgLgEgGAAQAAAcgIAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgKATQgIATgkAAQhQAAhLgpQgMAHABAKQABADgWAAQhEAAgqgMQgdgJgMgNIACAWQAAAIgHAGQgKAHgTAAQhCAAgZgEQg0gGgSgXQgDAXgQAKQgQAMgPgNIgUgRQgbAQg6AAQhnAAg9gbQgRgIgCACQgCABAAAWQAAAKgLAEQgLAFgdAAQgnAAglgRQgngVgXgIQAAAPgPANQgTAPgfAAQgkAAgYgLQgUgKgGgOQggANggAAIgBAAQhGgDgUgCQgwgGgbgNQgKAMAAAXQAAAHgnAAQgVAAg1gOQg6gPgEgNIACAGIACAJQAAALgeALQgiALgvAAQgjAAgdgGQgigHAAgNQAAgJARgLQgOADgZAAQghAAgggIQgVgFghgMIgvAAQgMAKgaAHQgZAGgYAAQgeAAghgIIgsgLIgMAAQgBANgbAIQgcAIglAAQhaAAgggUQgGABgKgFQgKgEgHAAQgBAcgHAHQgNANg2AAQgaAAgsgIQgvgJgXAAQglAAgJATQgJATgjAAQhRAAhLgpQgMAHABAKQABADgVAAQhFAAgqgMQgdgJgMgNIACAWQAAAIgHAGQgKAHgTAAQhBAAgZgEQg1gGgSgXQgDAXgQAKQgPAMgkABIgDAAg");
	this.shape.setTransform(549.2,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("AL0A9QgLALACAOQAAAGgWAAQhCAAgogTQgdgNgLgTQADAKAAAWQAAAMgIAIQgJAKgTAAQg3AAghgIQgzgNgSgiQgtAygaACQg1AGglgIIgbgLIAAgkQgaAPgkAAQgLAAgPgCQgXAkhHAAQhlAAg7gnQgPgLgCACQgBACAAAhQAAAOgLAHQgLAGgdAAQgmAAglgZQgmgegWgLQAAAWgPASQgRAXgfAAQgjAAgXgQQgUgPgFgVQgfATgeAAIgCAAQhGgFgTgDQgtgIgagTQgOAbgDAYQgFAKgoAAQgUAAgugUQgTgJgMgJIgGADQgdAOgkADQglADgVgGQgVgGgSgLQgSgMgTgJQgLAFgaAAQggAAgfgMQgVgIgfgRIguABQgNAPgZAJQgYAJgWAAQgdAAgigLIgpgSIgNABQgBATgbAMQgbAMglAAQggAAgggLQgegMgTgSIgkAAQAAARgFAiQAAAFgVAHQgWAIgYAAQgaAAgsgNQgtgMgXAAQgjAAgJAcQgIAbgjAAQhOAAhKg9QgLALACAOQAAAGgVAAQhCAAgpgTQgcgNgLgTQACAKAAAWQAAAMgHAIQgJAKgUAAQg2AAgigIQgzgNgSgiQgsAygaACQg1AGgmgIIgbgLIAAgkQgaAPgkAAQgLAAgPgCQgXAkhHAAQhmAAg7gnQgPgLgCACQgBACAAAhQAAAOgKAHQgMAGgcAAQgmAAglgZQgmgegXgLQAAAWgOASQgRAXgfAAQgkAAgXgQQgUgPgFgVQgfATgeAAIgCAAQhGgFgSgDQgugIgagTQgOAbgQAFQgVAHgWAFQgXAGgngPQgogQgGgTQAAAEADAEQADAIAAAFQAAARgWAKQgVAJgWgTQgWgVgNAKQgOAJgXgMQgYgMgcgKQgKAFgbAAQggAAgfgMQgUgIgggRIguABQgMAPgaAJQgYAJgVAAQgeAAgigLIgpgSIgNABQgBATgbAMQgaAMglAAQghAAgggLQgdgMgTgSIgkAAQAAARgGAiQAAAFgVAHQgVAIgZAAQgZAAgtgNQgtgMgWAAQgkAAgIAcQgJAbgiAAQhPAAhKg9QgLALACAOQAAAGgVAAQhCAAgpgTQgcgNgLgTQACAKAAAWQAAAMgHAIQgJAKgUAAQg2AAghgIIgTgGQgogoAAg1IAAgeQAAgjARgeMCpdgAWQAhAmAAAxIAAAeQAAA+g2AtIgOgIQgTgPgGgVQgeATgfAAIgCAAQhGgFgSgDQgugIgagTQgMAXh7AAQgogHgFgQQgIADgVACQgUADgEgBIgsgEIgRAKQgJAFghgBQghgCAGgNQgLAFgaAAQghAAgfgMQgUgIgggRIgtABQgNAPgZAJQgYAJgWAAQgeAAghgLIgqgSIgNABQgBATgbAMQgaAMglAAQghAAgfgLQgfgMgSgSIgkAAQAAARgGAiQAAAFgUAHQgWAIgZAAQgaAAgsgNQgsgMgXAAQgkAAgRATQgTATg6gBQg6gBgzgqQgLALACAOQAAAGgWAAQhCAAgpgTQgcgNgLgTQACAKAAAWQAAAMgHAIQgJAKgUAAQg2AAghgIQgzgNgSgiQgtAygaACQg1AGglgIIgbgLIAAgkQgbAPgjAAQgLAAgQgCQgXAkhGAAQhmAAg7gnQgPgLgDACQgBACAAAhQAAAOgKAHQgMAGgcAAQgmAAglgZQgmgegXgLQAAAWgOASQgRAXgfAAQgkAAgXgQQgTgPgGgVQgeATgeAAIgDAAQhFgFgTgDQgugIgagTQgNAbgqgOQg8AogRgOIgRgIQgagMgFgTIACALQABAGglAUQglAVgUgLIgegPQgKgFhDgjQhEgjANAbQANAchHgdIgYgNIguABQgNAPgZAJQgYAJgWAAQgdAAgigLIgqgSIgMABQgBATgcAMQgaAMglAAQggAAgggLQgegMgTgSIgkAAQAAARgFAiQAAAFgVAHQgWAIgZAAQgZAAgsgNQgtgMgXAAQgjAAgJAcQgIAbgjAAQhPAAhJg9g");
	this.shape_1.setTransform(549.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48749").s().p("EAsAABSIgZABIp3g7MghMAA7IAAgBIgNAAIgYABIyeg7I4mA7IAAgBIgZABIwKhAIxlAqIgBgFIkqAAQhTAAg7guQgKgIgIgHIATAFQAhAHA2AAQAUAAAJgJQAHgIAAgMQAAgWgCgJQALATAcAMQApATBCAAQAVAAAAgGQgCgOALgLQBKA8BPAAQAiAAAJgaQAIgcAkAAQAWAAAtANQAtAMAZAAQAZAAAVgIQAVgHAAgFQAGghAAgSIAkAAQATASAdAMQAgAMAhAAQAlAAAagNQAbgMABgTIANgBIApASQAiAMAegBQAVABAYgKQAagJAMgOIAugCQAgASAUAHQAfAMAgAAQAbAAAKgFQAcALAYALQAXAMAOgJQANgJAWAUQAWASAVgIQAWgJAAgSQAAgFgDgHQgDgEAAgFQAGAUAoAPQAnAPAXgFQAWgGAVgHQAQgFAOgbQAaAUAuAIQASACBGAFIACAAQAeAAAfgTQAFAVAUAPQAXAPAkAAQAfAAARgVQAOgTAAgWQAXALAmAfQAlAYAmAAQAcAAAMgHQAKgGAAgOQAAggABgCQACgDAPALQA7AmBmAAQBHAAAXgjQAPACALAAQAkAAAagOIAAAkIAbAJQAmAJA1gHQAagCAsgxQASAjAzAMQAiAHA2AAQAUAAAJgJQAHgIAAgMQAAgWgCgJQALATAcAMQApATBCAAQAVAAAAgGQgCgOALgLQBKA8BOAAQAjAAAIgaQAJgcAjAAQAXAAAtANQAsAMAaAAQAYAAAWgIQAVgHAAgFQAFghAAgSIAkAAQATASAeAMQAgAMAgAAQAlAAAbgNQAbgMABgTIANgBIApASQAiAMAdgBQAWABAYgKQAZgJANgOIAugCQAfASAVAHQAfAMAgAAQAaAAALgFQATAJASAMQASAMAVAFQAVAHAlgDQAkgEAdgOIAGgDQAMAJATAJQAuATAUABQAoAAAFgKQADgYAOgbQAaAUAtAIQATACBGAFIACAAQAeAAAfgTQAFAVAUAPQAXAPAjAAQAfAAARgVQAPgTAAgWQAWALAmAfQAlAYAmAAQAdAAALgHQALgGAAgOQAAggABgCQACgDAPALQA7AmBlAAQBHAAAXgjQAPACALAAQAkAAAagOIAAAkIAbAJQAlAJA1gHQAagCAtgxQASAjAzAMQAhAHA3AAQATAAAJgJQAIgIAAgMQAAgWgDgJQALATAdAMQAoATBCAAQAWAAAAgGQgCgOALgLQBJA8BPAAQAjAAAIgaQAJgcAjAAQAXAAAtANQAsAMAZAAQAZAAAWgIQAVgHAAgFQAFghAAgSIAkAAQATASAeAMQAgAMAgAAQAlAAAagNQAcgMABgTIAMgBIAqASQAiAMAdgBQAWABAYgKQAZgJANgOIAugCIAYANQBHAegNgdQgNgcBEAkQBDAjAKAFIAeAPQAUAKAlgTQAlgVgBgGIgCgLQAFAUAaALIARAIQARANA8gnQAqAOANgbQAaAUAuAIQATACBFAFIADAAQAeAAAegTQAGAVATAPQAXAPAkAAQAfAAARgVQAOgTAAgWQAXALAmAfQAlAYAmAAQAcAAAMgHQAKgGAAgOQAAggABgCQADgDAPALQA7AmBmAAQBGAAAXgjQAQACALAAQAjAAAbgOIAAAkIAbAJQAlAJA1gHQAagCAtgxQASAjAzAMQAhAHA2AAQAUAAAJgJQAHgIAAgMQAAgWgCgJQALATAcAMQApATBCAAQAWAAAAgGQgCgOALgLQAzApA6ABQA6ABATgSQARgTAkAAQAXAAAsANQAsAMAaAAQAZAAAWgIQAUgHAAgFQAGghAAgSIAkAAQASASAfAMQAfAMAhAAQAlAAAagNQAbgMABgTIANgBIAqASQAhAMAegBQAWABAYgKQAZgJANgOIAtgCQAgASAUAHQAfAMAhAAQAaAAALgFQgGANAhACQAhABAJgFIARgKIAsAEQAEABAUgDQAVgCAIgDQAFAQAoAHQB7ABAMgYQAaAUAuAIQASACBGAFIACAAQAfAAAegTQAGAVATAPIAOAHIgEADQg7AuhTAAIhGAAIrkg0I5dBPg");
	this.shape_2.setTransform(548.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.platform2_mc, rect = new cjs.Rectangle(4.4,0.2,1089.6,37.1), [rect]);


(lib.platform1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7247").s().p("AgDBhIgJAAIAAgfQgbAQg5AAQhlAAg9gcQgPgHgDABQgCACAAAWQAAAKgKAFQgKAEgdAAQgmAAgmgRQgmgWgXgHQAAAPgOANQgTAQgeAAQgkAAgXgMQgTgKgHgPQgfAOgfAAIgCAAQhFgDgTgCQgugGgcgNQgIALgBAYQAAAHglAAQgWAAg0gOQg5gPgEgOIABAGQADAGAAADQABAMgfALQghAMguAAQgiAAgcgHQgigHABgNQAAgJAPgMQgMADgaAAQgfAAgggIQgWgFgggMIgtAAQgNAKgZAHQgXAHgZAAQgdAAgggIIgsgMIgLAAQgCANgbAJQgbAIglAAQhYAAgggUQgFAAgJgFQgLgEgGAAQAAAdgIAHQgOANg0AAQgZAAgtgIQgsgJgYAAQgkAAgIATQgKAUgjAAQhOAAhKgrQgLAIAAAKQACADgWAAQhEAAgogMQgdgKgMgMIACAWQAAAIgGAGQgKAHgUAAQg/AAgZgEQgzgGgSgXQgDAXgPAKQgQAMgQgNIgTgRQgbAQg4AAQhmAAg8gcQgRgHgBABQgCACAAAWQAAAKgKAFQgLAEgdAAQgmAAglgRQgmgWgYgHQABAPgOANQgTAQgeAAQgkAAgXgMQgTgKgHgPQgfAOgfAAIgBAAQhGgDgTgCQgvgGgagNQgKALAAAYQAAAHgnAAQgTAAg2gOQg4gPgFgOIACAGQADAGAAADQAAAMgeALQgiAMgsAAQgkAAgbgHQgjgHAAgNQAAgJARgMQgMADgaAAQgfAAgggIQgWgFgfgMIgvAAQgMAKgaAHQgYAHgXAAQgdAAghgIIgrgMIgMAAQAAANgcAJQgbAIglAAQhZAAgfgUQgFAAgKgFQgKgEgGAAQgBAdgIAHQgOANg0AAQgYAAgugIQgsgJgXAAQglAAgIATQgJAUgjAAQhPAAhJgrQgMAIACAKQAAADgWAAQhDAAgogMQgdgKgMgMIACAWQgBAIgGAGQgKAHgTAAQhAAAgZgEQgzgGgSgXQgCAXgRAKQgPAMgiABIgDAAIgJAAIgKAAIAAi/IAKgBIAMAAIAagBMAqQAAAIAAABIAagBMAqRAAAIAAABIAMAAIAYgBMAqSAAAIAAABIAYgBMAqTAAAQASAAARABIAACZIgYgCQgFAGgGAEQgcAQg4AAQhmAAg8gcQgQgHgCABQgCACAAAWQAAAKgLAFQgLAEgbAAQgnAAgmgRQgmgWgWgHQAAAPgPANQgFAFgIAEQgPAHgVAAQgkAAgWgMQgUgKgHgPQgeAOgfAAIgCAAQhFgDgUgCQgugGgbgNQgJALAAAYQAAAHgmAAQgVAAg1gOQg4gPgEgOIABAGQACAGAAADQAAAMgeALQggAMguAAQgjAAgdgHQghgHAAgNQAAgJAQgMQgMADgaAAQgfAAgggIQgVgFghgMIgtAAQgMAKgaAHQgYAHgXAAQgdAAghgIIgrgMIgMAAQgBANgbAJQgcAIglAAQhXAAgggUQgFAAgLgFQgJgEgHAAQAAAdgHAHQgOANg1AAQgYAAgtgIQgugJgWAAQglAAgJATQgIAUgjAAQhPAAhKgrQgKAIAAAKQABADgWAAQhDAAgpgMQgcgKgMgMIACAWQAAAIgHAGQgJAHgTAAQhBAAgYgEQg0gGgSgXQgCAXgRAKQgPAMgPgNIgTgRQgcAQg4AAQhlAAg9gcQgPgHgCABQgCACgBAWQABAKgKAFQgMAEgdAAQglAAgmgRQgmgWgXgHQAAAPgOANQgSAQgfAAQgkAAgWgMQgVgKgGgPQgfAOgeAAIgCAAQhGgDgSgCQgvgGgbgNQgKALAAAYQAAAHgmAAQgVAAg1gOQg4gPgDgOIABAGIACAJQAAAMgdALQgiAMgtAAQgjAAgdgHQghgHgBgNQAAgJARgMQgMADgaAAQghAAgegIQgWgFgfgMIguAAQgMAKgaAHQgZAHgXAAQgeAAgggIIgqgMIgNAAQAAANgbAJQgbAIgmAAQhXAAgggUQgGAAgKgFQgKgEgGAAQgBAdgHAHQgOANg0AAQgZAAgtgIQgugJgVAAQglAAgJATQgJAUgiAAQhPAAhKgrQgLAIABAKQABADgWAAQhDAAgqgMQgcgKgLgMIABAWQAAAIgGAGQgLAHgSAAQhBAAgYgEQgzgGgSgXQgCAXgQAKQgQAMgiABIgDAAg");
	this.shape.setTransform(549.6,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("EA4ZABIQgKAMABAOQAAAHgUAAQhCgBgogTQgcgNgLgTQADAKAAAWQAAANgHAIQgJAKgUAAQg1AAgggIQgzgNgRgjQgtAzgZACQgzAGglgJIgbgKIAAglQgaAQgiAAQgMAAgPgDQgWAlhFAAQhlAAg5gpQgPgLgCADQgBACgBAhQAAAPgKAGQgMAIgbgBQglABgkgaQgmgggWgKQAAAWgOATQgRAWgfABQgiAAgXgQQgUgQgEgVQgfATgdAAIgDAAQhFgFgRgDQgtgHgagUQgNAbgDAZQgGAKgmAAQgTAAgugVQgugVgGgUQAAAEACAEQACAIAAAFQAAARgcAQQgiASgrAAQgiAAgbgKQghgLAAgSQAAgNAPgTQgLAGgZAAQggAAgegMQgVgJgfgRIgsACQgNAOgYAKQgYAJgWAAQgcAAgigLIgogTIgNABQAAAUgbAMQgaANgkgBQggABgfgMQgdgNgTgRIgkAAQAAARgFAiQAAAGgVAGQgVAJgYAAQgaAAgqgOQgtgMgWAAQgjAAgJAdQgIAbghAAQhOAAhIg/QgKAMABAOQAAAHgUAAQhCgBgogTQgbgNgLgTQACAKAAAWQAAANgHAIQgJAKgTAAQg2AAgfgIQgzgNgSgjQgsAzgZACQg0AGglgJIgagKIAAglQgaAQgjAAQgLAAgPgDQgXAlhFAAQhjAAg6gpQgPgLgCADQgCACAAAhQAAAPgKAGQgMAIgbgBQglABgkgaQgngggVgKQAAAWgOATQgRAWgeABQgjAAgXgQQgTgQgFgVQgeATgeAAIgDAAQhEgFgSgDQgtgHgagUQgMAbgEAZQgFAKgnAAQgTAAgtgVQgvgVgGgUQABAEACAEQACAIAAAFQAAARgdAQQghASgsAAQgiAAgbgKQgggLgBgSQAAgNAQgTQgLAGgZAAQghAAgegMQgUgJgfgRIgtACQgMAOgZAKQgXAJgWAAQgdAAghgLIgpgTIgNABQAAAUgbAMQgZANglgBQggABgegMQgfgNgSgRIgjAAQAAARgGAiQAAAGgUAGQgWAJgXAAQgaAAgrgOQgsgMgXAAQgiAAgJAdQgIAbgiAAQhNAAhJg/QgKAMABAOQABAHgVAAQhBgBgogTQgcgNgLgTQADAKAAAWQAAANgIAIQgIAKgUAAQg2AAgfgIQgygNgTgjQgsAzgZACQg0AGgkgJIgbgKIAAglQgaAQgjAAQgLAAgPgDQgXAlhFAAQhkAAg6gpQgPgLgCADQgBACAAAhQAAAPgLAGQgLAIgbgBQgmABgjgaQgngggWgKQAAAWgOATQgRAWgeABQgjAAgWgQQgUgQgFgVQgeATgdAAIgDAAQhEgFgSgDQgugHgZgUQgNAbgDAZQgGAKgnAAQgTAAgtgVQgvgVgFgUQAAAEACAEQADAIAAAFQgBARgdAQQggASgtAAQghAAgbgKQghgLAAgSQAAgNAPgTQgLAGgZAAQghAAgegMQgTgJgggRIgsACQgMAOgZAKQgZAJgVAAQgdAAghgLIgogTIgNABQgBAUgbAMQgZANgkgBQghABgegMQgegNgTgRIgjAAQAAARgGAiQAAAGgUAGQgVAJgYAAQgaAAgqgOQgtgMgWAAQgjAAgIAdQgJAbgiAAQhMAAhJg/QgKAMABAOQAAAHgVAAQhBgBgogTQgcgNgLgTQADAKAAAWQAAANgIAIQgIAKgUAAQg1AAgggIQgygNgSgjQgtAzgYACQgkAEgcgCIAAj5MCrvAAAIAAEAQgTgGgUgOQgmgggVgKQgBAWgOATQgQAWgfABQgjAAgWgQQgUgQgFgVQgeATgdAAIgDAAQhFgFgSgDQgtgHgZgUQgNAbgDAZQgGAKgnAAQgTAAgtgVQgugVgGgUQAAAEACAEQADAIAAAFQAAARgeAQQghASgsAAQghAAgbgKQghgLAAgSQAAgNAQgTQgMAGgZAAQghAAgegMQgTgJgggRIgsACQgMAOgZAKQgZAJgVAAQgcAAgigLIgogTIgNABQgBAUgbAMQgaANgkgBQggABgfgMQgdgNgTgRIgjAAQAAARgGAiQAAAGgUAGQgVAJgYAAQgZAAgrgOQgtgMgWAAQgjAAgJAdQgIAbgiAAQhMAAhJg/g");
	this.shape_1.setTransform(549.6,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48749").s().p("EhV3ABmIAAjLMCrvAAAIAADLg");
	this.shape_2.setTransform(549.6,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.platform1_mc, rect = new cjs.Rectangle(0,0,1099.2,31.1), [rect]);


(lib.matchInstruction_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instructionText = new cjs.Text("התאימו בין המדינה לדגל שלה", "13px 'Arial'");
	this.instructionText.name = "instructionText";
	this.instructionText.textAlign = "center";
	this.instructionText.lineHeight = 50;
	this.instructionText.lineWidth = 398;
	this.instructionText.parent = this;
	this.instructionText.setTransform(-1.9,-22.9,2.112,2.112);

	this.timeline.addTween(cjs.Tween.get(this.instructionText).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(201,137,90,0.498)").s().p("EhHcAIgQjwgJg2hgIAAvWMCYFAAAIAAI5MiE1AAAQnCAah7D6Qh4DyjlAAIgQAAg");
	this.shape.setTransform(-6.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.matchInstruction_mc, rect = new cjs.Rectangle(-493.4,-32.7,973.4,108.8), [rect]);


(lib.ladder2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(166,124,82,0.349)").s().p("Aida2IAAhMIE7AAIAABMgAidViIAAhLIE7AAIAABLgAidQTIAAhMIE7AAIAABMgAidLDIAAhMIE7AAIAABMgAidFzIAAhLIE7AAIAABLgAidAkIAAhLIE7AAIAABLgAidkqIAAhMIE7AAIAABMgAidp6IAAhLIE7AAIAABLgAidvKIAAhLIE7AAIAABLgAid0ZIAAhMIE7AAIAABMgAid5pIAAhMIE7AAIAABMg");
	this.shape.setTransform(23.2,149.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(140,98,57,0.349)").s().p("ACpc0QgLgSAAgaIAAhbIAAhLIAAkJIAAhLIAAkEIAAhLIAAkEIAAhMIAAkEIAAhMIAAkEIAAhKIAAkEIAAhLIAAkEIAAhMIAAkEIAAhMIAAkEIAAhLIAAkEIAAhMIAAiJIBKAAMAAAA5OQAAAagLASQgLASgPAAQgPAAgLgSgAjcc0QgLgSAAgaMAAAg5OIBKAAIAACJIAABMIAAEEIAABLIAAEEIAABMIAAEEIAABMIAAEEIAABLIAAEEIAABKIAAEEIAABMIAAEEIAABMIAAEEIAABLIAAEEIAABLIAAEJIAABLIAABbQAAAagLASQgLASgPAAQgPAAgLgSg");
	this.shape_1.setTransform(23.2,150.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ladder2_mc, rect = new cjs.Rectangle(0,-35.7,46.4,372.5), [rect]);


(lib.keyboardKey_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F2F2").s().p("AoHJtQgzAAgkgkQglglAAgzIAAvCQAAg3AlgwQAng0AwAAIQPAAQAxAAAnA0QAkAwAAA3IAAPCQAAAzgkAlQglAkgzAAg");
	this.shape.setTransform(8.6,8.3,0.134,0.134);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E8").s().p("AoUJ9Qg1ABglgmQgmglAAg1IAAvcQAAg4AmgxQAng1AzAAIQpAAQAzAAAnA1QAmAxAAA4IAAPcQAAA1gmAlQglAmg1gBg");
	this.shape_1.setTransform(9,8.6,0.134,0.134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1DFDF").s().p("AhNBdQgHgBgEgEQgFgFAAgHIAAiXQAAgHAFgEQAEgGAHAAICbAAQAGAAAGAGQAEAEAAAHIAACXQAAAHgEAFQgGAEgGABg");
	this.shape_2.setTransform(9.6,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.keyboardKey_mc, rect = new cjs.Rectangle(0,0,19,18.5), [rect]);


(lib.jarBrown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B67E5F").s().p("A3tc9MAAAg9UMAvbAAAMAAABAvQ3Zol4CFKg");
	this.shape.setTransform(151.8,207.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67E5F").s().p("A3tdCMAAAg9XMAvbAAAMAAABArQ3Zoh4CFNg");
	this.shape_1.setTransform(151.8,207);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B67E5F").s().p("A3tdIMAAAg9bMAvbAAAMAAABAnQ3aod4BFRg");
	this.shape_2.setTransform(151.8,206.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B67E5F").s().p("A3tdNMAAAg9fMAvbAAAMAAABAkQ3boa4AFVg");
	this.shape_3.setTransform(151.8,206.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B67E5F").s().p("A3tdUMAAAg9kMAvbAAAMAAABAhQ3boX4AFag");
	this.shape_4.setTransform(151.8,206.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B67E5F").s().p("A3tdZMAAAg9nMAvbAAAMAAABAdQ3coT3/Fdg");
	this.shape_5.setTransform(151.8,206.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B67E5F").s().p("A3tdfMAAAg9rMAvbAAAMAAABAZQ3doP3+Fhg");
	this.shape_6.setTransform(151.8,206.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B67E5F").s().p("A3tdkMAAAg9uMAvbAAAMAAABAVQ3doL3+Fkg");
	this.shape_7.setTransform(151.8,205.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B67E5F").s().p("A3tdpMAAAg9xMAvbAAAMAAABARQ3eoH39Fng");
	this.shape_8.setTransform(151.8,205.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B67E5F").s().p("A3tdvMAAAg91MAvbAAAMAAABANQ3foD38Frg");
	this.shape_9.setTransform(151.8,205.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B67E5F").s().p("A3td0MAAAg95MAvbAAAMAAABAKQ3goA37Fvg");
	this.shape_10.setTransform(151.8,205.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B67E5F").s().p("A3td7MAAAg9+MAvbAAAMAAABAHQ3hn936F0g");
	this.shape_11.setTransform(151.8,205.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B67E5F").s().p("A3teAMAAAg+BMAvbAAAMAAABADQ3hn536F3g");
	this.shape_12.setTransform(151.8,205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B67E5F").s().p("A3teGMAAAg+FMAvbAAAMAAAA//Q3in135F7g");
	this.shape_13.setTransform(151.8,204.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B67E5F").s().p("A3teLMAAAg+IMAvbAAAMAAAA/7Q3inx35F+g");
	this.shape_14.setTransform(151.8,204.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B67E5F").s().p("A3teQMAAAg+LMAvbAAAMAAAA/3Q3jnt34GBg");
	this.shape_15.setTransform(151.8,204.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B67E5F").s().p("A3teWMAAAg+PMAvbAAAMAAAA/zQ3knp33GFg");
	this.shape_16.setTransform(151.8,204.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B67E5F").s().p("A3tebMAAAg+TMAvbAAAMAAAA/wQ3lnm32GJg");
	this.shape_17.setTransform(151.8,204.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B67E5F").s().p("A3teiMAAAg+YMAvbAAAMAAAA/sQ3lni32GOg");
	this.shape_18.setTransform(151.8,203.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B67E5F").s().p("A3tenMAAAg+bMAvbAAAMAAAA/pQ3nnf30GRg");
	this.shape_19.setTransform(151.8,203.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B67E5F").s().p("A3tesMAAAg+eMAvbAAAMAAAA/lQ3nnb30GUg");
	this.shape_20.setTransform(151.8,203.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B67E5F").s().p("A3teyMAAAg+iMAvbAAAMAAAA/hQ3onX3zGYg");
	this.shape_21.setTransform(151.8,203.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B67E5F").s().p("A3te3MAAAg+lMAvbAAAMAAAA/dQ3pnT3yGbg");
	this.shape_22.setTransform(151.8,203.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B67E5F").s().p("A3te9MAAAg+pMAvbAAAMAAAA/ZQ3pnP3yGfg");
	this.shape_23.setTransform(151.8,202.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B67E5F").s().p("A3tfCMAAAg+tMAvbAAAMAAAA/XQ3qnN3xGjg");
	this.shape_24.setTransform(151.8,202.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B67E5F").s().p("A3tfIMAAAg+xMAvbAAAMAAAA/SQ3qnI3xGng");
	this.shape_25.setTransform(151.8,202.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B67E5F").s().p("A3tfOMAAAg+1MAvbAAAMAAAA/PQ3rnF3wGrg");
	this.shape_26.setTransform(151.8,202.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B67E5F").s().p("A3tfTMAAAg+4MAvbAAAMAAAA/LQ3snB3vGug");
	this.shape_27.setTransform(151.8,202.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B67E5F").s().p("A3tfZMAAAg+8MAvbAAAMAAAA/HQ3tm93uGyg");
	this.shape_28.setTransform(151.8,202);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B67E5F").s().p("A3tfeMAAAg+/MAvbAAAMAAAA/DQ3um53tG1g");
	this.shape_29.setTransform(151.8,201.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B67E5F").s().p("A3t/hMAvbAAAMAAAA+/Q3um13tG5g");
	this.shape_30.setTransform(151.8,201.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B67E5F").s().p("A3t/jMAvbAAAMAAAA+8Q3umy3tG9g");
	this.shape_31.setTransform(151.8,202);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B67E5F").s().p("A3t/lMAvbAAAMAAAA+4Q3vmu3sHBg");
	this.shape_32.setTransform(151.8,202.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B67E5F").s().p("A3t/nMAvbAAAMAAAA+1Q3vmr3sHFg");
	this.shape_33.setTransform(151.8,202.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B67E5F").s().p("A3t/pMAvbAAAMAAAA+xQ3wmn3rHIg");
	this.shape_34.setTransform(151.8,202.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B67E5F").s().p("A3t/rMAvbAAAMAAAA+tQ3xmj3qHNg");
	this.shape_35.setTransform(151.8,202.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B67E5F").s().p("A3t/sMAvbAAAMAAAA+pQ3xmf3qHPg");
	this.shape_36.setTransform(151.8,202.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B67E5F").s().p("A3t/uMAvbAAAMAAAA+lQ3zmb3oHTg");
	this.shape_37.setTransform(151.8,203.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B67E5F").s().p("A3t/wMAvbAAAMAAAA+iQ3zmY3oHXg");
	this.shape_38.setTransform(151.8,203.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B67E5F").s().p("A3t/yMAvbAAAMAAAA+eQ30mU3nHbg");
	this.shape_39.setTransform(151.8,203.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B67E5F").s().p("A3t/0MAvbAAAMAAAA+bQ31mR3mHfg");
	this.shape_40.setTransform(151.8,203.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B67E5F").s().p("A3t/2MAvbAAAMAAAA+YQ31mO3mHig");
	this.shape_41.setTransform(151.8,203.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B67E5F").s().p("A3t/4MAvbAAAMAAAA+TQ32mJ3lHmg");
	this.shape_42.setTransform(151.8,204.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B67E5F").s().p("A3t/5MAvbAAAMAAAA+PQ33mF3kHpg");
	this.shape_43.setTransform(151.8,204.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B67E5F").s().p("A3t/7MAvbAAAMAAAA+LQ33mB3kHtg");
	this.shape_44.setTransform(151.8,204.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B67E5F").s().p("A3t/9MAvbAAAMAAAA+IQ34l+3jHxg");
	this.shape_45.setTransform(151.8,204.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B67E5F").s().p("A3t//MAvbAAAMAAAA+FQ35l73iH1g");
	this.shape_46.setTransform(151.8,204.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B67E5F").s().p("EgXtggBMAvbAAAMAAAA+BQ36l33hH5g");
	this.shape_47.setTransform(151.8,205);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B67E5F").s().p("EgXtggDMAvbAAAMAAAA9+Q37l03gH9g");
	this.shape_48.setTransform(151.8,205.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B67E5F").s().p("EgXtggFMAvbAAAMAAAA95Q37lv3gIAg");
	this.shape_49.setTransform(151.8,205.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B67E5F").s().p("EgXtggGMAvbAAAMAAAA91Q38lr3fIDg");
	this.shape_50.setTransform(151.8,205.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B67E5F").s().p("EgXtggIMAvbAAAMAAAA9xQ38ln3fIHg");
	this.shape_51.setTransform(151.8,205.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B67E5F").s().p("EgXtggKMAvbAAAMAAAA9uQ39lk3eILg");
	this.shape_52.setTransform(151.8,205.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B67E5F").s().p("EgXtggMMAvbAAAMAAAA9rQ3+lh3dIPg");
	this.shape_53.setTransform(151.8,206.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B67E5F").s().p("EgXtggOMAvbAAAMAAAA9nQ3/ld3cITg");
	this.shape_54.setTransform(151.8,206.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B67E5F").s().p("EgXtggQMAvbAAAMAAAA9kQ3/la3cIXg");
	this.shape_55.setTransform(151.8,206.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B67E5F").s().p("EgXtggSMAvbAAAMAAAA9fQ4BlV3aIag");
	this.shape_56.setTransform(151.8,206.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B67E5F").s().p("EgXtggTMAvbAAAMAAAA9bQ4BlR3aIdg");
	this.shape_57.setTransform(151.8,206.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B67E5F").s().p("EgXtggVMAvbAAAMAAAA9XQ4ClN3ZIhg");
	this.shape_58.setTransform(151.8,207);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B67E5F").s().p("EgXtggXMAvbAAAMAAAA9UQ4DlK3YIlg");
	this.shape_59.setTransform(151.8,207.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B67E5F").s().p("A3tc/MAAAg9UMAvbAAAMAAAA9MQkug7ktgYQzLiCyxG0IgEjXg");
	this.shape_60.setTransform(151.8,207);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B67E5F").s().p("A3tdBMAAAg9UMAvbAAAMAAAA9EQkpg0kogSQzNiIy1GwIgIjSg");
	this.shape_61.setTransform(151.8,206.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B67E5F").s().p("A3tdEMAAAg9UMAvbAAAMAAAA87QkkgtkjgLQzQiPy3GtIgNjNg");
	this.shape_62.setTransform(151.8,206.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B67E5F").s().p("A3tdGMAAAg9UMAvbAAAMAAAA8zQkfgmkdgFQzTiVy8GqIgQjJg");
	this.shape_63.setTransform(151.8,206.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B67E5F").s().p("A3tdIMAAAg9UMAvbAAAMAAAA8rQkagfkYACQzVicy/GnIgVjFg");
	this.shape_64.setTransform(151.8,206.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B67E5F").s().p("A3tdKMAAAg9UMAvbAAAMAAAA8iQkUgXkTAIQzYiizDGkIgZjBg");
	this.shape_65.setTransform(151.8,205.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B67E5F").s().p("A3tdMMAAAg9UMAvbAAAMAAAA8aQkPgQkOAOQzaiozHGgIgdi8g");
	this.shape_66.setTransform(151.8,205.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B67E5F").s().p("A3tdPMAAAg9UMAvbAAAMAAAA8RQkKgJkJAVQzdiuzKGcIghi3g");
	this.shape_67.setTransform(151.8,205.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B67E5F").s().p("A3tdRMAAAg9UMAvbAAAMAAAA8JQkFgCkEAbQzfi0zNGZIgmizg");
	this.shape_68.setTransform(151.8,205.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B67E5F").s().p("A3tdTMAAAg9UMAvbAAAMAAAA8BQkAAFj/AiQzii7zRGWIgpivg");
	this.shape_69.setTransform(151.8,205);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B67E5F").s().p("A3tdVMAAAg9UMAvbAAAMAAAA75Qj7AMj6ApQzkjCzUGTIguirg");
	this.shape_70.setTransform(151.8,204.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B67E5F").s().p("A3tdYMAAAg9UMAvbAAAMAAAA7wQj2ATj1AvQzmjIzZGPIgxilg");
	this.shape_71.setTransform(151.8,204.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B67E5F").s().p("A3tdaMAAAg9UMAvbAAAMAAAA7nQjxAbjvA1QzpjOzcGMIg2ihg");
	this.shape_72.setTransform(151.8,204.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B67E5F").s().p("A3tdcMAAAg9UMAvbAAAMAAAA7gQjsAhjqA7QzrjUzgGJIg6idg");
	this.shape_73.setTransform(151.8,204.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B67E5F").s().p("A3tdeMAAAg9UMAvbAAAMAAAA7XQjmApjlBCQzujazkGFIg+iZg");
	this.shape_74.setTransform(151.8,203.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B67E5F").s().p("A3tdgMAAAg9UMAvbAAAMAAAA7PQjiAvjfBKQzxjhzmGCIhDiVg");
	this.shape_75.setTransform(151.8,203.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B67E5F").s().p("A3tdjMAAAg9UMAvbAAAMAAAA7GQjdA3jbBPQzyjnzrF+IhGiPg");
	this.shape_76.setTransform(151.8,203.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B67E5F").s().p("A3tdlMAAAg9UMAvbAAAMAAAA6+QjXA9jWBXQz1juzuF7IhLiLg");
	this.shape_77.setTransform(151.8,203.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B67E5F").s().p("A3tdnMAAAg9UMAvbAAAMAAAA62QjSBFjRBcQz4j0zyF4IhOiHg");
	this.shape_78.setTransform(151.8,203);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B67E5F").s().p("A3tdpMAAAg9UMAvbAAAMAAAA6uQjNBMjMBjQz6j7z1F1IhTiDg");
	this.shape_79.setTransform(151.8,202.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B67E5F").s().p("A3tdsMAAAg9UMAvbAAAMAAAA6lQjIBTjGBpQz+kBz4FxIhXh9g");
	this.shape_80.setTransform(151.8,202.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B67E5F").s().p("A3tduMAAAg9UMAvbAAAMAAAA6cQjCBajCBxQz/kIz9FuIhbh5g");
	this.shape_81.setTransform(151.8,202.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B67E5F").s().p("A3tdwMAAAg9UMAvbAAAMAAAA6UQi+Bii8B2Q0CkO0AFrIhfh1g");
	this.shape_82.setTransform(151.8,202.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B67E5F").s().p("A3tdyMAAAg9UMAvbAAAMAAAA6MQi4Boi4B+Q0EkU0DFnQgyg6gyg3g");
	this.shape_83.setTransform(151.8,201.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B67E5F").s().p("A3td0MAAAg9UMAvbAAAMAAAA6EQi0BwiyCDQ0Hka0HFjQgzg3g0g1g");
	this.shape_84.setTransform(151.8,201.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B67E5F").s().p("A3td3MAAAg9UMAvbAAAMAAAA57QiuB2iuCLQ0Jkh0LFgQg1g1g2gyg");
	this.shape_85.setTransform(151.8,201.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B67E5F").s().p("A3td5MAAAg9UMAvbAAAMAAAA5zQipB9ioCRQ0Mkn0OFdQg4gzg4gwg");
	this.shape_86.setTransform(151.8,201.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B67E5F").s().p("A3td7MAAAg9UMAvbAAAMAAAA5rQikCEijCYQ0Pku0RFaQg6gxg6gug");
	this.shape_87.setTransform(151.8,201);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B67E5F").s().p("A3td9MAAAg9UMAvbAAAMAAAA5jQifCLidCeQ0Rkz0WFVQg8gug8gsg");
	this.shape_88.setTransform(151.8,200.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B67E5F").s().p("A3td/MAAAg9UMAvbAAAMAAAA5aQiaCUiYCkQ0Uk60ZFTQg9gtg/gqg");
	this.shape_89.setTransform(151.8,200.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B67E5F").s().p("A3teCMAAAg9UMAvbAAAMAAAA5RQiVCaiTCrQ0XlA0bFPQhAgqhBgng");
	this.shape_90.setTransform(151.8,200.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B67E5F").s().p("A3teEMAAAg9UMAvbAAAMAAAA5KQiPCgiPCyQ0ZlH0gFMQhCgohCglg");
	this.shape_91.setTransform(151.8,200.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B67E5F").s().p("A1kfNQhEgmhFgjMAAAg9UMAvbAAAMAAAA5BQiKCoiKC4Q0blO0jFKg");
	this.shape_92.setTransform(151.8,200.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B67E5F").s().p("A1gfGQhHgkhGghMAAAg9UMAvbAAAMAAAA45QiGCviEC+Q0dlT0nFGg");
	this.shape_93.setTransform(151.8,200.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B67E5F").s().p("A1ce+QhJghhIgeMAAAg9UMAvbAAAMAAAA4wQiAC2iADFQ0gla0qFCg");
	this.shape_94.setTransform(151.8,200.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B67E5F").s().p("A1Ye3QhKgfhLgcMAAAg9UMAvbAAAMAAAA4oQh7C+h6DLQ0ilg0vE+g");
	this.shape_95.setTransform(151.8,200.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B67E5F").s().p("A1UewQhMgdhNgaMAAAg9UMAvbAAAMAAAA4gQh2DEh1DSQ0llm0yE7g");
	this.shape_96.setTransform(151.8,201.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B67E5F").s().p("A1QepQhOgahPgYMAAAg9UMAvbAAAMAAAA4XQhxDMhwDYQ0nls02E3g");
	this.shape_97.setTransform(151.8,201.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B67E5F").s().p("A1MeiQhQgZhRgVMAAAg9UMAvbAAAMAAAA4PQhsDThrDfQ0qlz05E0g");
	this.shape_98.setTransform(151.8,201.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B67E5F").s().p("A1HebQhTgWhTgTMAAAg9UMAvbAAAMAAAA4GQhmDahnDlQ0sl508Exg");
	this.shape_99.setTransform(151.8,201.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B67E5F").s().p("A1DeUQhVgUhVgRMAAAg9UMAvbAAAMAAAA3/QhiDghgDsQ0vmA1AEug");
	this.shape_100.setTransform(151.8,202.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B67E5F").s().p("A0/eNQhXgShXgPMAAAg9UMAvbAAAMAAAA32QhdDohbDzQ0zmH1CErg");
	this.shape_101.setTransform(151.8,202.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B67E5F").s().p("A07eGQhZgQhZgMMAAAg9UMAvbAAAMAAAA3tQhXDvhWD5Q01mM1HEng");
	this.shape_102.setTransform(151.8,202.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B67E5F").s().p("A03d/QhagOhcgKMAAAg9UMAvbAAAMAAAA3mQhSD2hRD/Q04mT1KEkg");
	this.shape_103.setTransform(151.8,203);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B67E5F").s().p("A0zd3QhdgLhdgIMAAAg9UMAvbAAAMAAAA3dQhND9hMEHQ06ma1OEgg");
	this.shape_104.setTransform(151.8,203.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B67E5F").s().p("A0udwQhfgJhggFMAAAg9UMAvbAAAMAAAA3UQhIEFhHEMQ08mg1REdg");
	this.shape_105.setTransform(151.8,203.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B67E5F").s().p("A0rdpQhhgHhhgDMAAAg9UMAvbAAAMAAAA3NQhDELhCETQ0/mm1VEZg");
	this.shape_106.setTransform(151.8,203.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B67E5F").s().p("A0mdjQhkgGhjgBMAAAg9UMAvbAAAMAAAA3FQg9ESg+EZQ1Bms1YEXg");
	this.shape_107.setTransform(151.8,204.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B67E5F").s().p("A0idcQhlgDhmABMAAAg9UMAvbAAAMAAAA27Qg5Eag4EgQ1Emz1bEUg");
	this.shape_108.setTransform(151.8,204.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B67E5F").s().p("A0edUQhngBhoAEMAAAg9UMAvbAAAMAAAA20Qg0EggyEnQ1Gm51gEPg");
	this.shape_109.setTransform(151.8,204.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B67E5F").s().p("A0adNQhpAChqAGMAAAg9UMAvbAAAMAAAA2rIhcJUQ1Jm/1jEMg");
	this.shape_110.setTransform(151.8,204.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B67E5F").s().p("A0WdGQhrADhsAJMAAAg9UMAvbAAAMAAAA2iIhRJjQ1MnG1nEJg");
	this.shape_111.setTransform(151.8,205.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B67E5F").s().p("A0Rc/QhuAGhuAKMAAAg9UMAvbAAAMAAAA2bIhHJvQ1PnM1pEGg");
	this.shape_112.setTransform(151.8,205.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B67E5F").s().p("A0Oc4QhvAIhwANMAAAg9UMAvbAAAMAAAA2SIg+J9Q1QnS1uECg");
	this.shape_113.setTransform(151.8,205.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B67E5F").s().p("A0JcxQhyAKhyAPMAAAg9UMAvbAAAMAAAA2KIgzKLQ1TnZ1xD/g");
	this.shape_114.setTransform(151.8,205.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B67E5F").s().p("A0FcqQh0AMh0ARMAAAg9UMAvbAAAMAAAA2CIgpKYQ1Wne10D7g");
	this.shape_115.setTransform(151.8,206.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B67E5F").s().p("A0BcjQh1APh3ATMAAAg9UMAvbAAAMAAAA15IgfKmQ1Xnl15D4g");
	this.shape_116.setTransform(151.8,206.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B67E5F").s().p("Az9ccQh3AQh5AWMAAAg9UMAvbAAAMAAAA1xIgUK0Q1bns18D1g");
	this.shape_117.setTransform(151.8,206.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B67E5F").s().p("Az4cVQh6ATh7AYMAAAg9UMAvbAAAMAAAA1oIgKLBQ1dny1/Dyg");
	this.shape_118.setTransform(151.8,206.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B67E5F").s().p("A3tc9MAAAg9UMAvbAAAMAAABAvQ3Yol4DFKg");
	this.shape_119.setTransform(151.8,207.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},18).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,303.6,414.4);
p.frameBounds = [rect, new cjs.Rectangle(0,0,303.6,414.1), new cjs.Rectangle(0,0,303.6,413.7), new cjs.Rectangle(0,0,303.6,413.3), new cjs.Rectangle(0,0,303.6,412.9), new cjs.Rectangle(0,0,303.6,412.6), new cjs.Rectangle(0,0,303.6,412.2), new cjs.Rectangle(0,0,303.6,411.8), new cjs.Rectangle(0,0,303.6,411.5), new cjs.Rectangle(0,0,303.6,411.1), new cjs.Rectangle(0,0,303.6,410.7), new cjs.Rectangle(0,0,303.6,410.3), new cjs.Rectangle(0,0,303.6,410), new cjs.Rectangle(0,0,303.6,409.6), new cjs.Rectangle(0,0,303.6,409.2), new cjs.Rectangle(0,0,303.6,408.9), new cjs.Rectangle(0,0,303.6,408.5), new cjs.Rectangle(0,0,303.6,408.1), new cjs.Rectangle(0,0,303.6,407.7), new cjs.Rectangle(0,0,303.6,407.4), new cjs.Rectangle(0,0,303.6,407), new cjs.Rectangle(0,0,303.6,406.6), new cjs.Rectangle(0,0,303.6,406.3), new cjs.Rectangle(0,0,303.6,405.9), new cjs.Rectangle(0,0,303.6,405.5), new cjs.Rectangle(0,0,303.6,405.1), new cjs.Rectangle(0,0,303.6,404.8), new cjs.Rectangle(0,0,303.6,404.4), new cjs.Rectangle(0,0,303.6,404), rect=new cjs.Rectangle(0,0,303.6,403.7), rect, new cjs.Rectangle(0,0,303.6,404), new cjs.Rectangle(0,0,303.6,404.4), new cjs.Rectangle(0,0,303.6,404.8), new cjs.Rectangle(0,0,303.6,405.1), new cjs.Rectangle(0,0,303.6,405.5), new cjs.Rectangle(0,0,303.6,405.9), new cjs.Rectangle(0,0,303.6,406.3), new cjs.Rectangle(0,0,303.6,406.6), new cjs.Rectangle(0,0,303.6,407), new cjs.Rectangle(0,0,303.6,407.4), new cjs.Rectangle(0,0,303.6,407.7), new cjs.Rectangle(0,0,303.6,408.1), new cjs.Rectangle(0,0,303.6,408.5), new cjs.Rectangle(0,0,303.6,408.9), new cjs.Rectangle(0,0,303.6,409.2), new cjs.Rectangle(0,0,303.6,409.6), new cjs.Rectangle(0,0,303.6,410), new cjs.Rectangle(0,0,303.6,410.3), new cjs.Rectangle(0,0,303.6,410.7), new cjs.Rectangle(0,0,303.6,411.1), new cjs.Rectangle(0,0,303.6,411.5), new cjs.Rectangle(0,0,303.6,411.8), new cjs.Rectangle(0,0,303.6,412.2), new cjs.Rectangle(0,0,303.6,412.6), new cjs.Rectangle(0,0,303.6,412.9), new cjs.Rectangle(0,0,303.6,413.3), new cjs.Rectangle(0,0,303.6,413.7), new cjs.Rectangle(0,0,303.6,414.1), rect=new cjs.Rectangle(0,0,303.6,414.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,303.6,414), new cjs.Rectangle(0,0,303.6,413.5), new cjs.Rectangle(0,0,303.6,413.1), new cjs.Rectangle(0,0,303.6,412.6), new cjs.Rectangle(0,0,303.6,412.2), new cjs.Rectangle(0,0,303.6,411.8), new cjs.Rectangle(0,0,303.6,411.3), new cjs.Rectangle(0,0,303.6,410.9), new cjs.Rectangle(0,0,303.6,410.4), new cjs.Rectangle(0,0,303.6,410), new cjs.Rectangle(0,0,303.6,409.5), new cjs.Rectangle(0,0,303.6,409.1), new cjs.Rectangle(0,0,303.6,408.7), new cjs.Rectangle(0,0,303.6,408.2), new cjs.Rectangle(0,0,303.6,407.8), new cjs.Rectangle(0,0,303.6,407.3), new cjs.Rectangle(0,0,303.6,406.9), new cjs.Rectangle(0,0,303.6,406.4), new cjs.Rectangle(0,0,303.6,406), new cjs.Rectangle(0,0,303.6,405.5), new cjs.Rectangle(0,0,303.6,405.1), new cjs.Rectangle(0,0,303.6,404.7), new cjs.Rectangle(0,0,303.6,404.2), new cjs.Rectangle(0,0,303.6,403.8), new cjs.Rectangle(0,0,303.6,403.3), new cjs.Rectangle(0,0,303.6,402.9), new cjs.Rectangle(0,0,303.6,402.4), new cjs.Rectangle(0,0,303.6,402), new cjs.Rectangle(0,0,303.6,401.5), new cjs.Rectangle(0,0,303.6,401.1), new cjs.Rectangle(0,0,303.6,400.7), rect=new cjs.Rectangle(0,0,303.6,400.2), rect, new cjs.Rectangle(0,0,303.6,400.7), new cjs.Rectangle(0,0,303.6,401.3), new cjs.Rectangle(0,0,303.6,401.8), new cjs.Rectangle(0,0,303.6,402.3), new cjs.Rectangle(0,0,303.6,402.8), new cjs.Rectangle(0,0,303.6,403.4), new cjs.Rectangle(0,0,303.6,403.9), new cjs.Rectangle(0,0,303.6,404.4), new cjs.Rectangle(0,0,303.6,404.9), new cjs.Rectangle(0,0,303.6,405.5), new cjs.Rectangle(0,0,303.6,406), new cjs.Rectangle(0,0,303.6,406.5), new cjs.Rectangle(0,0,303.6,407.1), new cjs.Rectangle(0,0,303.6,407.6), new cjs.Rectangle(0,0,303.6,408.1), new cjs.Rectangle(0,0,303.6,408.6), new cjs.Rectangle(0,0,303.6,409.2), new cjs.Rectangle(0,0,303.6,409.7), new cjs.Rectangle(0,0,303.6,410.2), new cjs.Rectangle(0,0,303.6,410.7), new cjs.Rectangle(0,0,303.6,411.3), new cjs.Rectangle(0,0,303.6,411.8), new cjs.Rectangle(0,0,303.6,412.3), new cjs.Rectangle(0,0,303.6,412.8), new cjs.Rectangle(0,0,303.6,413.4), new cjs.Rectangle(0,0,303.6,413.9), rect=new cjs.Rectangle(0,0,303.6,414.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.DesertBG1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBD193","#C7775F"],[0,1],149.1,4.1,149.1,-161.4).s().p("EgsxAFoIAAorIBVAAQEOAAEpgUQDCgOE8ggQFZgjCHgLQEHgUDUAAQFGAAFOAYQDMAQFVAkQFOAkCWAMQEDASDagKQCrgHDCgaQBagND6gpQDVgjCHgQQDKgXDAgDIAALPg");
	this.shape.setTransform(457.1,218.8,1,1,0,0,0,0,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FBC87D","#C7775F"],[0,1],98.3,16.3,98.3,-87.4).s().p("EgsxAG6IAAtyIArgBQBpAAB8AOIDnAgQCcAUCCALQC4AODNAAQBmAABygMQBDgICEgTQCCgUBHgIQBygMBqAAQB8AACSAPQBaAKCoAXQCqAZBTAJQCOAPB2AAQCAAACmgPQBpgKC+gYQDKgZBTgIQCZgPBsAAQCZAAEfAbIDPATQBtAJBGAAQC9AADQgaICagTQBVgJBOgBIAANng");
	this.shape_1.setTransform(457.1,182.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBC87D","#C7775F"],[0,1],93.1,112.1,90.1,15.9).s().p("EgsxAFeIAAqaQCFAHCYgCQCSgBEogOQErgOCZgBQEAgEDSASQD4AVDUABQCXAAC8gLQD8gOAvgBQCsgGCnAKQHmAeFzACQGuACE8giQEPgdFFAKQBZACCeAIQCOAIA8ABIAAKlg");
	this.shape_2.setTransform(457.1,187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIgCAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_3.setTransform(735,127.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.498)").s().p("AmVBpQg+ggA+hHQAEgCAFgBQAAgCAEgBIAAgBIABgBIABgEIAAAEIABABIgBAAIACABQAEABAAACQAFABADABQADADAAACIgBADIAGAAIAAgOIgBgBIAAAAIABgBIACAAIAAgBQAAgDAFgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAIAAgBIABgBIAAgCIABAAIAAACIAAABIAAABQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQAEABAAADIAAABIABAAIACABIAAAAIgCABIAAAJIAFAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgFATgEQALgCAHgDIAAgBIACgBIAAgGIABAAIABAGIABABIAAABQAIADAKACQATAEAAAFIAAACIADAAQgCgCAAgCQAAgHAJgGQAKgFANAAIACgEIABgBIABgJIACAJIAAABIADAEQAKAAAHADQAIADAEAFIAAgKIgCAAIAAgCIACAAIAAgOIgCAAIAAAAIACAAIAAgBIABAAIAAgFIABAAIAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIADgCIAAgCIgCAAIABAAIACgBIgBgBIABACIAAAAIAAACIADACQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAABIAAAAIAAAFIACAAIAAABIABAAIAAAAIgCAAIAAAOIADAAIAAACIgDAAIABAOIADAAIAAACIgDAAIABAFIAJAAQgEgDAAgFQAAgIANgIQANgHAYgEQAdgFAUgJIgBgCQAAgCAFgBIABgOIACAAIACAOQAEABAAACIgBACQAVAJAdAFQAIABAHADIAAgqIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIADAAIAAgBQAAgFAIgCIAHgEIgBAAIABgBIABgEIAAAAIAAAEQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIgBAAIAHAEQAIACAAAFIAAABIADAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAAbQAKgPAYgHQAUgGAPgLQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgDAGgCIABgNIAEAAIACANQAFACAAADQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAPALAUAGQARAFAKAKQAKAJAAAKQAAAHgDAFIATAAIAAgCQAAgKANgHQAMgIATgBIAEgFIAAAAIACgOIAAAAIADAOIADAFQATABANAIQANAHAAAKQAAAEgDAEIASAAIAAAEIgIAAIAAATIASAAIABgbIgFAAIAAgDIAFAAIABgZIgEAAIAAgEIAEAAIABgWIgEAAIAAgCIACAAIAAgBIACAAIAAgJIgCAAIAAAAIAEAAIgBgCQAAgDAGgBIAEgDIAAAAIAAgBIABgCIABACIAAABIAAAAIAEADQAFABAAADIgBACIAEAAIAAAAIgCAAIAAAJIACAAIAAABIADAAIAAACIgEAAIAAAWIAEAAIAAAEIgEAAIACAZIAFAAIAAADIgFAAIABAbIAJAAIAAgxIgBAAQAAAAgBAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAFAAIAAgCQAAgHALgEQAHgCAEgDIgBgBQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABgGIABAAIABAGQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBABQAFADAGACQANAEAAAHIgBACIAEAAQABAAABAAQABAAAAAAQAAAAABABQAAAAAAABIAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgBAAgBAAIAAAxIAFAAIAABggAlegBIAAAFIAEAAIAAgFIgBgDQgBAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAgAlpgBIAAAFIAKAAIAAgFQAAgDgFgBQgFABAAADgAlugBIAAAFIAEAAIAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAgAGjgdIAAANIAKAAIAAgNQAAgFgFgCQgFACAAAFgAGLgjQgDACAAADIAAAOIAXAAIAAgOQAAgGgMgCQgFABgDACgAF7gdIAAANIAJAAIAAgNQAAgFgFgCQgEACAAAFgAi1gkIACAAIAAgEIgCAAgAi3gkIACAAIAAgEIgCAAgAi5gkIABAAIAAgEIgBAAgAi7gkIAAAAIAAgEIAAAAgAi+gkIABAAIAAgEIgBAAgAAig/IAAAIIAFAAIAAgIQAAgFgDAAQgCAAAAAFgAAPhBIAAAKIAQAAIAAgKQAAgEgIgBQgIABAAAEgAAHg/IAAAIIAGAAIAAgIQAAgFgDAAQgDABAAAEgAFmhSIAAAHIACAAIAAgHIgBgBgAFihSIAAAHIACAAIAAgHIgBgBIAAAAgAFehSIAAAHIACAAIAAgHIgBgBgAFahSIAAAHIACAAIAAgHIgBgBIAAAAIgBABgAFWhSIAAAHIACAAIAAgHIgBgBIgBAAIAAABg");
	this.shape_4.setTransform(699.9,137.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DesertBG1_mc, rect = new cjs.Rectangle(170.5,126.7,573.1,99.9), [rect]);


(lib.blendingAlpha_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.6)","rgba(229,204,176,0.6)"],[0,0.537],1.9,113.3,0,1.9,113.3,771.4).s().p("Eg6FAyyMAAAhljMB0LAAAMAAABljg");
	this.shape.setTransform(371.8,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blendingAlpha_mc, rect = new cjs.Rectangle(0,0,743.7,650), [rect]);


(lib.tutorialPause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.switchSym = new lib.tutorialPause_mc();
	this.switchSym.name = "switchSym";
	this.switchSym.parent = this;
	this.switchSym.setTransform(4.9,5.8,1,1,0,0,0,4.9,5.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah0BwIAAjfIDpAAIAADfg");
	this.shape.setTransform(5.4,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.switchSym}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,14.9,16.6);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-6.3,-5.8,23.3,22.4)];


(lib.tutorial_vi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.vi = new lib.tutorial_viAnim_mc();
	this.vi.name = "vi";
	this.vi.parent = this;
	this.vi.setTransform(0.3,0.8,1,1,0,0,0,62.3,61.6);

	this.timeline.addTween(cjs.Tween.get(this.vi).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_vi_mc, rect = new cjs.Rectangle(-19.4,-20.6,39.3,43), [rect]);


(lib.tutorial_magnifyingGlassBubble_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tutorial_magnifyingGlass_mc();
	this.instance.parent = this;
	this.instance.setTransform(1.1,-6.4,0.365,0.365,0,0,0,0,-0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],0.8,4.1,0,0.8,4.1,39.5).s().p("AheBOQgQgMgPgQQgxg1gChMQAQgGASgEQBDgRBHAAQBLAABIATQARAEARAGQgDBLgwA0QgQAQgQAMQgqAdg0AAQg0AAgqgdg");
	this.shape.setTransform(1.3,-15.4,1,1,0,0,0,0.1,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],0.8,4.1,0,0.8,4.1,39.5).s().p("AheBOQgQgMgPgQQgxg1gChMQAQgGASgEQBDgRBHAAQBLAABIATQARAEARAGQgDBLgwA0QgQAQgQAMQgqAdg0AAQg0AAgqgdg");
	this.shape_1.setTransform(1.3,-15.4,1,1,0,0,0,0.1,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53B2E9").s().p("AhjBRIAAAAQgSgNgQgRQgzg3gChQIAIAAIAAABIAAAAIABgBQAQgGASgEQBDgRBIABQAxAAAvAHQAaAFAaAGIAXAHIALADIABAAIAAABIABABIAAgBIAHAAQgDBOgzA2IAAAAQgQARgRANIAAAAQgtAeg3ABQg3gBgsgeg");
	this.shape_2.setTransform(1.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_magnifyingGlassBubble_mc, rect = new cjs.Rectangle(-17.5,-15.4,37.4,22.4), [rect]);


(lib.tutorial_bubbleHitColor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(16).call(this.frame_45).wait(1));

	// Layer_1
	this.bubbleTextMC = new lib.tutorial_bubbleText_mc();
	this.bubbleTextMC.name = "bubbleTextMC";
	this.bubbleTextMC.parent = this;
	this.bubbleTextMC.setTransform(62.4,60.7,1,1,0,0,0,48.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.bubbleTextMC).wait(46));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AFE2FF").ss(2,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape.setTransform(62.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AFE2FE").ss(2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_1.setTransform(62.4,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B1E3FB").ss(2.1,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_2.setTransform(62.4,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B3E3F6").ss(2.2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_3.setTransform(62.4,62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B6E4EF").ss(2.4,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_4.setTransform(62.4,62.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B9E5E7").ss(2.6,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_5.setTransform(62.4,62.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BEE7DC").ss(2.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_6.setTransform(62.4,62.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C3E9D0").ss(3.2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_7.setTransform(62.4,62.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C9EBC1").ss(3.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_8.setTransform(62.4,62.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D0EDB0").ss(3.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_9.setTransform(62.4,62.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D8F09E").ss(4.3,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_10.setTransform(62.4,62.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E0F38A").ss(4.8,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_11.setTransform(62.4,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EAF673").ss(5.3,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_12.setTransform(62.4,62.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F4F95B").ss(5.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_13.setTransform(62.4,62.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFD41").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_14.setTransform(62.4,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FEFD41").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_15.setTransform(62.4,62.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FBFD40").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_16.setTransform(62.4,62.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6FD3F").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_17.setTransform(62.4,62.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#EFFD3D").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_18.setTransform(62.4,62.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E6FD3B").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_19.setTransform(62.4,62.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DCFD38").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_20.setTransform(62.4,62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CFFE35").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_21.setTransform(62.4,62.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C0FE32").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_22.setTransform(62.4,62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#AFFE2E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_23.setTransform(62.4,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#9DFE29").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_24.setTransform(62.4,62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#88FE24").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_25.setTransform(62.4,62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#71FE1E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_26.setTransform(62.4,62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59FF18").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_27.setTransform(62.4,62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3EFF12").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_28.setTransform(62.4,62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFC41").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_29.setTransform(62.4,62.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFF840").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_30.setTransform(62.4,62.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFF13E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_31.setTransform(62.4,62.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFE83C").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_32.setTransform(62.4,62.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFDD39").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_33.setTransform(62.4,62.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFCF35").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_34.setTransform(62.4,62.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFBE31").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_35.setTransform(62.4,62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA2C").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_36.setTransform(62.4,62.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF9426").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_37.setTransform(62.4,62.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF7C20").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_38.setTransform(62.4,62.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF6119").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_39.setTransform(62.4,62.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF4311").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_40.setTransform(62.4,62.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF2309").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_41.setTransform(62.4,62.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_42.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjyI+QhwgvhWhXQhXhVgvhxQgxhzAAh/QAAh+Axh0QAvhvBXhXQBWhWBwgwQB0gwB+gBQB/ABB0AwQBwAwBWBWQBWBXAvBvQAyB0AAB+QAAB/gyBzQgvBxhWBVQhWBXhwAvQh0Ayh/AAQh+AAh0gyg");
	this.shape_43.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,126.8,126.7);
p.frameBounds = [rect, rect, new cjs.Rectangle(-1,-1,126.9,126.8), new cjs.Rectangle(-1.1,-1.1,127,126.9), new cjs.Rectangle(-1.1,-1.1,127.1,127), new cjs.Rectangle(-1.2,-1.2,127.3,127.2), new cjs.Rectangle(-1.4,-1.4,127.6,127.5), new cjs.Rectangle(-1.5,-1.5,127.9,127.8), new cjs.Rectangle(-1.7,-1.7,128.2,128.1), new cjs.Rectangle(-1.9,-1.9,128.6,128.5), new cjs.Rectangle(-2.1,-2.1,129.1,129), new cjs.Rectangle(-2.4,-2.4,129.6,129.5), new cjs.Rectangle(-2.6,-2.6,130.1,130), new cjs.Rectangle(-2.9,-2.9,130.7,130.6), rect=new cjs.Rectangle(-3.2,-3.2,131.3,131.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1,-1,126.8,126.7)];


(lib.tutorial_underHandAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tutorial_underHand_mc();
	this.instance.parent = this;
	this.instance.setTransform(22.6,35.2,1,1,8.3,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:33.7},7).to({rotation:8.3},8).to({regX:5.1,regY:2.5,rotation:-23.1,x:22.8,y:35.3},8).to({regX:5,regY:2.4,rotation:8.3,x:22.6,y:35.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(13.1,32.1,14.3,35.2);
p.frameBounds = [rect, new cjs.Rectangle(12.1,32.8,13.7,33.6), new cjs.Rectangle(10.4,32.7,15.1,33.1), new cjs.Rectangle(8.9,32.8,16.5,32.6), new cjs.Rectangle(7.3,32.8,17.9,31.8), new cjs.Rectangle(5.8,32.8,19.3,31.1), new cjs.Rectangle(4.3,32.8,20.7,30.2), new cjs.Rectangle(0.8,30.5,26.8,33.7), new cjs.Rectangle(4.1,32.7,20.8,30), new cjs.Rectangle(5.4,32.7,19.6,30.8), new cjs.Rectangle(6.7,32.8,18.4,31.6), new cjs.Rectangle(8,32.8,17.2,32.2), new cjs.Rectangle(9.4,32.7,16,32.8), new cjs.Rectangle(10.8,32.8,14.7,33.2), new cjs.Rectangle(12.3,32.8,13.5,33.6), new cjs.Rectangle(13.1,32.1,14.3,35.2), new cjs.Rectangle(15.6,32.9,10.9,34.2), new cjs.Rectangle(17.6,32.9,9.5,34.2), new cjs.Rectangle(19.3,32.9,8.8,34.2), new cjs.Rectangle(19.7,32.9,10.3,34.1), new cjs.Rectangle(19.7,32.9,12,33.8), new cjs.Rectangle(19.8,33,13.7,33.3), new cjs.Rectangle(19.8,33.1,15.4,32.8), new cjs.Rectangle(17.1,31.3,22.1,35.2), new cjs.Rectangle(19.7,32.9,15.4,32.7), new cjs.Rectangle(19.6,32.9,13.8,33.3), new cjs.Rectangle(19.6,32.8,12,33.8), new cjs.Rectangle(19.6,32.8,10.3,34.1), new cjs.Rectangle(19.2,32.8,8.8,34.2), new cjs.Rectangle(17.5,32.7,9.5,34.2), new cjs.Rectangle(15.6,32.7,10.9,34.2), new cjs.Rectangle(13.1,32.1,14.3,35.2)];


(lib.tutorial_tailAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_tail_mc();
	this.instance.parent = this;
	this.instance.setTransform(19.6,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19.6,8.7,15.8,26.8);
p.frameBounds = [rect, new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.4,24.3), new cjs.Rectangle(19.6,8.7,19.6,24.1), new cjs.Rectangle(19.6,8.7,19.9,23.9), new cjs.Rectangle(19.6,6.1,20,28.9), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.6,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.2,27.2), new cjs.Rectangle(19.6,8.7,14.6,27.5), new cjs.Rectangle(19.6,8.7,13.9,27.8), new cjs.Rectangle(19.6,8.7,13.5,28.1), new cjs.Rectangle(19.5,8.7,13.3,28.2), new cjs.Rectangle(19.5,8.7,13.2,28.4), new cjs.Rectangle(19.5,8.7,13,28.4), new cjs.Rectangle(16.5,8.7,18.8,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(19.6,8.7,13.2,28.4), new cjs.Rectangle(19.5,8.7,13.3,28.2), new cjs.Rectangle(19.6,8.7,13.5,28.1), new cjs.Rectangle(19.6,8.7,13.9,27.8), new cjs.Rectangle(19.6,8.6,14.6,27.4), new cjs.Rectangle(19.6,8.6,15.2,27.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.4,24.3), new cjs.Rectangle(19.6,8.7,19.6,24.1), new cjs.Rectangle(19.6,8.7,19.9,23.9), new cjs.Rectangle(19.6,6.1,20,28.9), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.6,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.2,27.2), new cjs.Rectangle(19.6,8.7,14.6,27.5), new cjs.Rectangle(19.6,8.7,13.9,27.8), new cjs.Rectangle(19.6,8.7,13.5,28.1), new cjs.Rectangle(19.5,8.7,13.3,28.2), new cjs.Rectangle(19.5,8.7,13.2,28.4), new cjs.Rectangle(19.5,8.7,13,28.4), new cjs.Rectangle(16.5,8.7,18.8,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(19.5,8.7,13.2,28.3), new cjs.Rectangle(19.6,8.7,13.4,28.1), new cjs.Rectangle(19.6,8.7,13.7,27.9), new cjs.Rectangle(19.6,8.7,14.3,27.6), new cjs.Rectangle(19.6,8.6,15,27.3), new cjs.Rectangle(19.6,8.7,15.8,26.8)];


(lib.tutorial_legUnderKnee_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56311F").s().p("AAjBrQgHgLgTgRIgbgaQgfg4gBhlIAAgFIBjAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIAAgDIAAAFIgIBpIgHBtg");
	this.shape.setTransform(9.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A2B1E").s().p("AArB+QgFACgYgDQgXgDgQgcIgBgNIgHgxQgLhNgFhJQATgVgEAcIAAAFQABBlAeA4IAbAaQATARAHALIAAADIAAAUQgBgFgGADg");
	this.shape_1.setTransform(8.2,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#774631").s().p("AAAABIAAgCIABAAIgBACIAAABIAAgBg");
	this.shape_2.setTransform(14.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#884F34").s().p("AADAYIgGgvIAGAvIAAAAg");
	this.shape_3.setTransform(5.2,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(32));

	// Layer_2
	this.instance = new lib.tutorial_footUnder_mc();
	this.instance.parent = this;
	this.instance.setTransform(10.6,22.8,1,1,0,0,0,10.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.7,rotation:23.7,x:10.7},4).to({regX:10.6,rotation:0,x:10.6},4).to({rotation:8.5,x:10.7,y:22.7},7).wait(1).to({rotation:0,x:10.6,y:22.8},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1.6,14.8,28.3);
p.frameBounds = [rect, new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.3,-1.6,15.1,28.3), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.7,-1.6,15.5,29.2), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.3,-1.6,15.2,28.2), new cjs.Rectangle(-0.2,-1.6,15,28), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, new cjs.Rectangle(0,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,15,28.1), new cjs.Rectangle(-0.2,-1.6,15.1,28.1), new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.4,-1.6,15.3,28.6), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorial_legUnder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_1
	this.ikNode_36 = new lib.tutorial_legUnderKnee_mc();
	this.ikNode_36.name = "ikNode_36";
	this.ikNode_36.parent = this;
	this.ikNode_36.setTransform(9.6,19.5,1,1,0,0,0,9.6,0);

	this.ikNode_35 = new lib.tutorial_legUnderHip_mc();
	this.ikNode_35.name = "ikNode_35";
	this.ikNode_35.parent = this;
	this.ikNode_35.setTransform(9.2,3.6,1,1,0,0,0,8.8,3.6);

	this.ikNode_44 = new lib.tutorial_legUnderKnee_mc();
	this.ikNode_44.name = "ikNode_44";
	this.ikNode_44.parent = this;
	this.ikNode_44.setTransform(10.4,20.1,0.996,0.996,-31.5,0,0,8.8,1);

	this.ikNode_43 = new lib.tutorial_legUnderHip_mc();
	this.ikNode_43.name = "ikNode_43";
	this.ikNode_43.parent = this;
	this.ikNode_43.setTransform(9.6,3.5,0.998,0.998,-1.3,0,0,9.3,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_35,p:{rotation:0,x:9.2,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:0,x:9.6,y:19.5,regX:9.6}}]}).to({state:[{t:this.ikNode_35,p:{rotation:2.2,x:9.1,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-3.8,x:9.1,y:19.4,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:4.4,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-7.5,x:8.5,y:19.3,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:6.6,x:9,y:3.6,regY:3.5,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-11.3,x:7.9,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:8.8,x:9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-15,x:7.2,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:11,x:9,y:3.8,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-18.8,x:6.7,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:13.2,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-22.6,x:6.1,y:18.9,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:11.3,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.7}},{t:this.ikNode_36,p:{rotation:-23.6,x:6.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:9.5,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-24.5,x:7.2,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:7.6,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-25.5,x:7.6,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:5.7,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-26.5,x:8.1,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:3.9,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-27.5,x:8.5,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:2,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-28.5,x:9.1,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:0.1,x:9,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-29.5,x:9.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:-1.7,x:9,y:3.6,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-30.5,x:10.1,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:-3.6,x:9.1,y:3.5,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-31.5,x:10.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:-1.3,x:9.6,y:3.5}},{t:this.ikNode_44,p:{rotation:-31.5,x:10.4,y:20.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:6.5,x:9.4,y:3.5}},{t:this.ikNode_44,p:{rotation:-34.6,x:8.1,y:20,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:14.2,x:9.3,y:3.5}},{t:this.ikNode_44,p:{rotation:-37.6,x:5.9,y:19.7,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.9,x:9.2,y:3.5}},{t:this.ikNode_44,p:{rotation:-40.7,x:3.7,y:19,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:29.6,x:9,y:3.6}},{t:this.ikNode_44,p:{rotation:-43.7,x:1.6,y:18,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.3,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-27.8,x:0.6,y:17.5,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:37,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-11.9,x:-0.3,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:40.7,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:4,x:-1.1,y:15.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:38.4,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:5.3,x:-0.9,y:16.3,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:36.1,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.7,x:-0.5,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.8,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:8,x:-0.1,y:17.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:27.6,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.2,x:1.3,y:17.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.4,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:4.4,x:2.9,y:18.4,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:15.2,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:2.5,x:4.5,y:18.9,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:9.1,x:8.9,y:3.6}},{t:this.ikNode_44,p:{rotation:0.7,x:6.1,y:19.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:2.9,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-1.1,x:7.7,y:19.3,regX:8.7,regY:1.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-3,16.4,49.1);
p.frameBounds = [rect, new cjs.Rectangle(-0.6,-3.2,17.2,49.9), new cjs.Rectangle(-1.4,-3.6,18.2,50.6), new cjs.Rectangle(-2.2,-3.9,19.9,51.1), new cjs.Rectangle(-3.1,-4.1,21.6,51.5), new cjs.Rectangle(-3.8,-4.4,23.1,51.8), new cjs.Rectangle(-4.6,-4.7,24.7,51.9), new cjs.Rectangle(-4,-4.5,24.9,51.8), new cjs.Rectangle(-3.4,-4.2,25.2,51.5), new cjs.Rectangle(-2.7,-4,25.3,51.2), new cjs.Rectangle(-2,-3.8,25.6,51.1), new cjs.Rectangle(-1.3,-3.5,25.7,50.7), new cjs.Rectangle(-0.6,-3.2,25.9,50.3), new cjs.Rectangle(0.2,-3,26,49.9), new cjs.Rectangle(0,-3.3,27.1,50.1), new cjs.Rectangle(-0.2,-3.5,28.1,50.2), new cjs.Rectangle(0.2,-2.8,27.8,49.3), new cjs.Rectangle(-2.3,-3.5,28.8,49.6), new cjs.Rectangle(-5.1,-4.6,30.4,49.8), new cjs.Rectangle(-7.7,-5.6,31.7,49.7), new cjs.Rectangle(-10,-6.3,32.7,48.9), new cjs.Rectangle(-10.9,-6.6,29,50.7), new cjs.Rectangle(-11.7,-6.9,29.9,50.3), new cjs.Rectangle(-12.5,-7.1,30.7,48.7), new cjs.Rectangle(-12,-6.9,30.2,49), new cjs.Rectangle(-12.2,-6.7,30.2,49.2), new cjs.Rectangle(-12.3,-6.5,30.2,49.6), new cjs.Rectangle(-10.1,-6,27.9,49.8), new cjs.Rectangle(-7.8,-5.4,25.3,49.7), new cjs.Rectangle(-5.9,-4.7,23,49.2), new cjs.Rectangle(-3.8,-3.8,20.3,48.5), new cjs.Rectangle(-1.2,-3,17.4,47.9)];


(lib.tutorial_legAboveKnee_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tutorial_footAbove_mc();
	this.instance.parent = this;
	this.instance.setTransform(10.6,22.8,1,1,0,0,0,10.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.7,rotation:23.7,x:10.7},4).to({regX:10.6,rotation:0,x:10.6},4).to({rotation:8.5,x:10.7,y:22.7},7).wait(1).to({rotation:0,x:10.6,y:22.8},0).wait(16));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884F34").s().p("AgqBNIgHgxIAVBYIgOgngAAjBlQgHgLgTgRIgbgaQgfg4gBhlIAAgFIBjAAIAAADQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAAgDIAAAFIgIBqIgHBsg");
	this.shape.setTransform(9.8,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#774631").s().p("AgVB7IgUhYQgLhNgFhJQATgUgEAbIAAAFQABBlAeA4IAbAaQATARAHALIAAADIgDAMIgwAAIgBAAIgFACQgDAAgDgCgAA4hpIABgDIABAAIgBADIAAABIgBgBg");
	this.shape_1.setTransform(9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1.6,14.8,28.3);
p.frameBounds = [rect, new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.3,-1.6,15.1,28.3), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.7,-1.6,15.5,29.2), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.3,-1.6,15.2,28.2), new cjs.Rectangle(-0.2,-1.6,15,28), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, new cjs.Rectangle(0,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,15,28.1), new cjs.Rectangle(-0.2,-1.6,15.1,28.1), new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.4,-1.6,15.3,28.6), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorial_legAbove_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_1
	this.ikNode_44 = new lib.tutorial_legAboveKnee_mc();
	this.ikNode_44.name = "ikNode_44";
	this.ikNode_44.parent = this;
	this.ikNode_44.setTransform(10.4,20.1,0.996,0.996,-31.5,0,0,8.8,1);

	this.ikNode_43 = new lib.tutorial_legAboveHip_mc();
	this.ikNode_43.name = "ikNode_43";
	this.ikNode_43.parent = this;
	this.ikNode_43.setTransform(9.6,3.5,0.998,0.998,-1.3,0,0,9.3,3.1);

	this.ikNode_46 = new lib.tutorial_legAboveKnee_mc();
	this.ikNode_46.name = "ikNode_46";
	this.ikNode_46.parent = this;
	this.ikNode_46.setTransform(9.6,19.5,1,1,0,0,0,9.6,0);

	this.ikNode_45 = new lib.tutorial_legAboveHip_mc();
	this.ikNode_45.name = "ikNode_45";
	this.ikNode_45.parent = this;
	this.ikNode_45.setTransform(9.2,3.6,1,1,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_43,p:{rotation:-1.3,x:9.6,y:3.5}},{t:this.ikNode_44,p:{rotation:-31.5,x:10.4,y:20.1,regX:8.8,regY:1}}]}).to({state:[{t:this.ikNode_43,p:{rotation:6.5,x:9.4,y:3.5}},{t:this.ikNode_44,p:{rotation:-34.6,x:8.1,y:20,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:14.2,x:9.3,y:3.5}},{t:this.ikNode_44,p:{rotation:-37.6,x:5.9,y:19.7,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.9,x:9.2,y:3.5}},{t:this.ikNode_44,p:{rotation:-40.7,x:3.7,y:19,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:29.6,x:9,y:3.6}},{t:this.ikNode_44,p:{rotation:-43.7,x:1.6,y:18,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.3,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-27.8,x:0.6,y:17.5,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:37,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-11.9,x:-0.3,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:40.7,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:4,x:-1.1,y:15.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:38.4,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:5.3,x:-0.9,y:16.3,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:36.1,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.7,x:-0.5,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.8,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:8,x:-0.1,y:17.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:27.6,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.2,x:1.3,y:17.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.4,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:4.4,x:2.9,y:18.4,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:15.2,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:2.5,x:4.5,y:18.9,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:9.1,x:8.9,y:3.6}},{t:this.ikNode_44,p:{rotation:0.7,x:6.1,y:19.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:2.9,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-1.1,x:7.7,y:19.3,regX:8.7,regY:1.1}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:0,x:9.2,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:0,x:9.6,y:19.5,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:2.2,x:9.1,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-3.8,x:9.1,y:19.4,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:4.4,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-7.5,x:8.5,y:19.3,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:6.6,x:9,y:3.6,regY:3.5,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-11.3,x:7.9,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:8.8,x:9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-15,x:7.2,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:11,x:9,y:3.8,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-18.8,x:6.7,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:13.2,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-22.6,x:6.1,y:18.9,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:11.3,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.7}},{t:this.ikNode_46,p:{rotation:-23.6,x:6.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:9.5,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-24.5,x:7.2,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:7.6,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-25.5,x:7.6,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:5.7,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-26.5,x:8.1,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:3.9,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-27.5,x:8.5,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:2,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-28.5,x:9.1,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:0.1,x:9,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-29.5,x:9.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:-1.7,x:9,y:3.6,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-30.5,x:10.1,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:-3.6,x:9.1,y:3.5,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-31.5,x:10.6,y:19,regX:9.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,-2.8,27.8,49.3);
p.frameBounds = [rect, new cjs.Rectangle(-2.3,-3.5,28.8,49.6), new cjs.Rectangle(-5.1,-4.6,30.4,49.8), new cjs.Rectangle(-7.7,-5.6,31.7,49.7), new cjs.Rectangle(-10,-6.3,32.7,48.9), new cjs.Rectangle(-10.9,-6.6,29,50.7), new cjs.Rectangle(-11.7,-6.9,29.9,50.3), new cjs.Rectangle(-12.5,-7.1,30.7,48.7), new cjs.Rectangle(-12,-6.9,30.2,49), new cjs.Rectangle(-12.2,-6.7,30.2,49.2), new cjs.Rectangle(-12.3,-6.5,30.2,49.6), new cjs.Rectangle(-10.1,-6,27.9,49.8), new cjs.Rectangle(-7.8,-5.4,25.3,49.7), new cjs.Rectangle(-5.9,-4.7,23,49.2), new cjs.Rectangle(-3.8,-3.8,20.3,48.5), new cjs.Rectangle(-1.2,-3,17.4,47.9), new cjs.Rectangle(0,-3,16.4,49.1), new cjs.Rectangle(-0.6,-3.2,17.2,49.9), new cjs.Rectangle(-1.4,-3.6,18.2,50.6), new cjs.Rectangle(-2.2,-3.9,19.8,51.1), new cjs.Rectangle(-3.1,-4.1,21.4,51.5), new cjs.Rectangle(-3.8,-4.4,22.9,51.8), new cjs.Rectangle(-4.6,-4.7,24.7,51.9), new cjs.Rectangle(-4,-4.5,24.9,51.8), new cjs.Rectangle(-3.4,-4.2,25.2,51.5), new cjs.Rectangle(-2.7,-4,25.3,51.2), new cjs.Rectangle(-2,-3.8,25.6,51.1), new cjs.Rectangle(-1.3,-3.5,25.7,50.7), new cjs.Rectangle(-0.6,-3.2,25.9,50.3), new cjs.Rectangle(0.2,-3,26,49.9), new cjs.Rectangle(0,-3.3,27.1,50.1), new cjs.Rectangle(-0.2,-3.5,28.1,50.2)];


(lib.tutorial_headHandTopShirt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AA+BoQACgngCgJQgBgJAAgXQAAgYgEgiQgEgkgLgaIgQgjQgLAJgUAGQgXAHgagCIgPgCIgGgBIgDgNQAYAEAXAAIAXgCIANgDQALgDAIgEIAHgEIABABQADACADAGIAEALIAGARIAEAMIAJAnIAEAUIAAADQAHAnAFApIABAMIABAdIgKAvQAHgpgOAFg");
	this.shape.setTransform(22.1,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC768").s().p("AhaBbIAgjNIAMACQAQADAPAAQASAAAQgCIgWACQgXABgYgFIADANIAGABIAPACQAaACAWgHQAVgGALgJIAQAkQALAZAEAkQAEAiAAAYQAAAXABAJQABAKgBAmg");
	this.shape_1.setTransform(19.3,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

	// Layer_4
	this.instance = new lib.tutorial_foxHead_mc();
	this.instance.parent = this;
	this.instance.setTransform(20.3,32.3,1,1,6.9,0,0,18.4,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B67E5F").s().p("AgVG1IgHgBIglh0IAeh8QhBgagzgcIgBgIQgKg1AChHQAQiIBIg1IACgBQAOhLgFhnQgBgmAFgZQAZgLAggEIABAAQAggDAZAGQAFAZgBAmQgFBoAPBIIABABQBIAmARCGQABBGgJA2QgdCmg0CFIgMAJQgSAPgVAHQgLADgLABIgKABIgLgBg");
	this.shape_2.setTransform(31.2,41.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.7,-2,45.8,87.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorial_foxBallJump3_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B67E5F").s().p("AgngcIAOgKQAUAIASATQASAQAIATQABAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgIAIg");
	this.shape.setTransform(59.7,53.3);

	this.instance = new lib.tutorial_tailFoxBall_mc();
	this.instance.parent = this;
	this.instance.setTransform(19.2,71.5,0.726,0.726,-139.3,0,0,58.8,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67E5F").s().p("AgIAfQAHhZhCiHQAgASAcAcQBLBMAABpIAAAJQgDBWg1BBQgbhJAHhag");
	this.shape_1.setTransform(59.4,67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FC915C","#F4854E"],[0,1],24.2,0,-18.6,0).s().p("AAzCOQgehDhKgVQh+gkgGjMQBIhABjAAQBBAAA3AdQBCCIgHBYQgHBbAcBIQgJAMgLALQgrArg2ATQABhAgTgtg");
	this.shape_2.setTransform(42,69.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FCDDBF","#FCD6B2"],[0,1],14.8,-8.5,-14.8,8.6).s().p("AgGDQQgxgSgogoQhLhMAAhpQAAhrBLhMIAMgLQAGDNB9AjQBLAVAeBDQATAtgBBAQgnANgtAAQgzAAgqgRg");
	this.shape_3.setTransform(31.8,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_foxBallJump3_mccopy, rect = new cjs.Rectangle(6.1,44.6,60.2,70), [rect]);


(lib.tutorial_foxBallJump2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_foxBallJump3_mccopy();
	this.instance.parent = this;
	this.instance.setTransform(49.2,72.3,1,1,0,0,0,39.6,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19,cjs.Ease.sineOut).to({rotation:720},20,cjs.Ease.sineIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15.7,44.4,60.2,70);
p.frameBounds = [rect, new cjs.Rectangle(18.9,45,59.6,63), new cjs.Rectangle(13,46.1,65.1,51.6), new cjs.Rectangle(7.5,47.2,69.7,51.5), new cjs.Rectangle(12.4,42.3,64.1,59), new cjs.Rectangle(24.1,37.7,51.5,63.6), new cjs.Rectangle(23,30.8,51.6,69.4), new cjs.Rectangle(21.4,32.6,56.1,67.2), new cjs.Rectangle(19.8,41.4,61.2,57.6), new cjs.Rectangle(20.8,46.7,66.2,51.6), new cjs.Rectangle(21.4,45.8,69.6,51.6), new cjs.Rectangle(21.6,44.9,67.9,55), new cjs.Rectangle(22.1,42.9,62.3,60), new cjs.Rectangle(22.7,42.8,54.5,61.7), new cjs.Rectangle(23.1,43.4,51.5,65.2), new cjs.Rectangle(23.6,44.2,51.6,67.6), new cjs.Rectangle(23.9,44.2,51.6,69.1), new cjs.Rectangle(24.1,44.3,51.6,69.6), new cjs.Rectangle(24.2,44.4,51.6,69.6), new cjs.Rectangle(15.7,44.4,60.2,70), new cjs.Rectangle(24.4,44.5,51.6,69.5), new cjs.Rectangle(23.8,44.5,52.3,69.3), new cjs.Rectangle(22.4,44.6,53.8,68.6), new cjs.Rectangle(20.9,44.7,56.3,67), new cjs.Rectangle(19.2,45,59.1,63.9), new cjs.Rectangle(17.7,45.5,61,58.6), new cjs.Rectangle(15.4,45.9,63.1,51.5), new cjs.Rectangle(10,46.4,67.4,51.6), new cjs.Rectangle(7.5,47.1,69.6,51.6), new cjs.Rectangle(9.3,44.3,67.7,55.6), new cjs.Rectangle(16.1,41,60.2,60.6), new cjs.Rectangle(23.9,36.3,51.6,64.9), new cjs.Rectangle(23,30.8,51.6,69.5), new cjs.Rectangle(21.5,32.6,55.9,67.4), new cjs.Rectangle(19.8,41.9,61.3,57.1), new cjs.Rectangle(21.2,46.5,67.3,51.6), new cjs.Rectangle(21.5,45.4,69.2,52.6), new cjs.Rectangle(22.2,42.8,61.3,60.3), new cjs.Rectangle(23.2,43.6,51.6,65.8), new cjs.Rectangle(15.7,44.4,60.2,70)];


(lib.underHandAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.underHand_mc();
	this.instance.parent = this;
	this.instance.setTransform(22.6,35.2,1,1,8.3,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:33.7},7).to({rotation:8.3},8).to({regX:5.1,regY:2.5,rotation:-23.1,x:22.8,y:35.3},8).to({regX:5,regY:2.4,rotation:8.3,x:22.6,y:35.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(13.1,32.4,14.3,34.9);
p.frameBounds = [rect, new cjs.Rectangle(12.1,32.8,13.7,33.5), new cjs.Rectangle(10.4,32.8,15.1,33), new cjs.Rectangle(8.9,32.8,16.4,32.6), new cjs.Rectangle(7.3,32.8,17.9,31.8), new cjs.Rectangle(5.8,32.9,19.3,30.9), new cjs.Rectangle(4.3,32.8,20.6,30.2), new cjs.Rectangle(0.8,31.4,26.8,32.6), new cjs.Rectangle(4.1,32.8,20.8,30), new cjs.Rectangle(5.4,32.8,19.7,30.8), new cjs.Rectangle(6.7,32.8,18.4,31.6), new cjs.Rectangle(8,32.9,17.1,32.2), new cjs.Rectangle(9.4,32.8,16,32.7), new cjs.Rectangle(10.8,32.8,14.7,33.2), new cjs.Rectangle(12.3,32.9,13.5,33.5), new cjs.Rectangle(13.1,32.4,14.3,34.9), new cjs.Rectangle(15.6,32.9,10.9,34.1), new cjs.Rectangle(17.6,32.9,9.5,34.2), new cjs.Rectangle(19.3,32.9,8.8,34.2), new cjs.Rectangle(19.6,32.9,10.3,34.1), new cjs.Rectangle(19.8,32.9,11.9,33.8), new cjs.Rectangle(19.9,33,13.7,33.3), new cjs.Rectangle(19.8,33,15.4,32.8), new cjs.Rectangle(18.5,31.3,20.3,35.2), new cjs.Rectangle(19.7,32.8,15.4,32.8), new cjs.Rectangle(19.7,32.9,13.7,33.3), new cjs.Rectangle(19.7,32.8,11.9,33.8), new cjs.Rectangle(19.5,32.8,10.3,34.1), new cjs.Rectangle(19.2,32.7,8.8,34.3), new cjs.Rectangle(17.5,32.7,9.5,34.2), new cjs.Rectangle(15.6,32.7,10.9,34.1), new cjs.Rectangle(13.1,32.4,14.3,34.9)];


(lib.tailAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tail_mc();
	this.instance.parent = this;
	this.instance.setTransform(19.6,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19.6,8.7,15.8,26.8);
p.frameBounds = [rect, new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.7,8.8,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.3,24.3), new cjs.Rectangle(19.6,8.8,19.7,24), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,6.2,20,28.8), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.7,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25.1), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.1,27.2), new cjs.Rectangle(19.6,8.7,14.5,27.5), new cjs.Rectangle(19.6,8.8,13.9,27.8), new cjs.Rectangle(19.6,8.8,13.5,28), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(16.5,8.7,18.6,28.4), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.7,8.7,13.1,28.4), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13.5,28), new cjs.Rectangle(19.6,8.7,13.9,27.8), new cjs.Rectangle(19.6,8.6,14.5,27.4), new cjs.Rectangle(19.6,8.6,15.1,27.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.7,8.8,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.3,24.3), new cjs.Rectangle(19.6,8.8,19.7,24), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,6.2,20,28.8), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.7,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25.1), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.1,27.2), new cjs.Rectangle(19.6,8.7,14.5,27.5), new cjs.Rectangle(19.6,8.8,13.9,27.8), new cjs.Rectangle(19.6,8.8,13.5,28), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(16.5,8.7,18.6,28.4), new cjs.Rectangle(19.6,8.6,13.1,28.4), new cjs.Rectangle(19.6,8.7,13.2,28.3), new cjs.Rectangle(19.6,8.7,13.4,28.1), new cjs.Rectangle(19.6,8.7,13.8,27.9), new cjs.Rectangle(19.6,8.7,14.3,27.6), new cjs.Rectangle(19.6,8.6,15,27.2), new cjs.Rectangle(19.6,8.7,15.8,26.8)];


(lib.legUnderKnee_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56311F").s().p("AAjBrQgHgLgTgRIgbgaQgfg4gBhlIAAgFIBjAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIAAgDIAAAFIgIBpIgHBtg");
	this.shape.setTransform(9.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A2B1E").s().p("AArB+QgFACgYgDQgXgDgQgcIgBgNIgHgxQgLhNgFhJQATgVgEAcIAAAFQABBlAeA4IAbAaQATARAHALIAAADIAAAUQgBgFgGADg");
	this.shape_1.setTransform(8.2,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#774631").s().p("AAAABIAAgCIABAAIgBACIAAABIAAgBg");
	this.shape_2.setTransform(14.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#884F34").s().p("AADAYIgGgvIAGAvIAAAAg");
	this.shape_3.setTransform(5.2,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(32));

	// Layer_2
	this.instance = new lib.footUnder_mc();
	this.instance.parent = this;
	this.instance.setTransform(10.6,22.8,1,1,0,0,0,10.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.7,rotation:23.7,x:10.7},4).to({regX:10.6,rotation:0,x:10.6},4).to({rotation:8.5,x:10.7,y:22.7},7).wait(1).to({rotation:0,x:10.6,y:22.8},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1.6,14.8,28.3);
p.frameBounds = [rect, new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.3,-1.6,15.1,28.3), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.7,-1.6,15.5,29.2), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.3,-1.6,15.2,28.2), new cjs.Rectangle(-0.2,-1.6,15,28), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, new cjs.Rectangle(0,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,15,28.1), new cjs.Rectangle(-0.2,-1.6,15.1,28.1), new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.4,-1.6,15.3,28.6), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.legUnder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_1
	this.ikNode_36 = new lib.legUnderKnee_mc();
	this.ikNode_36.name = "ikNode_36";
	this.ikNode_36.parent = this;
	this.ikNode_36.setTransform(9.6,19.5,1,1,0,0,0,9.6,0);

	this.ikNode_35 = new lib.legUnderHip_mc();
	this.ikNode_35.name = "ikNode_35";
	this.ikNode_35.parent = this;
	this.ikNode_35.setTransform(9.2,3.6,1,1,0,0,0,8.8,3.6);

	this.ikNode_44 = new lib.legUnderKnee_mc();
	this.ikNode_44.name = "ikNode_44";
	this.ikNode_44.parent = this;
	this.ikNode_44.setTransform(10.4,20.1,0.996,0.996,-31.5,0,0,8.8,1);

	this.ikNode_43 = new lib.legUnderHip_mc();
	this.ikNode_43.name = "ikNode_43";
	this.ikNode_43.parent = this;
	this.ikNode_43.setTransform(9.6,3.5,0.998,0.998,-1.3,0,0,9.3,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_35,p:{rotation:0,x:9.2,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:0,x:9.6,y:19.5,regX:9.6}}]}).to({state:[{t:this.ikNode_35,p:{rotation:2.2,x:9.1,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-3.8,x:9.1,y:19.4,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:4.4,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-7.5,x:8.5,y:19.3,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:6.6,x:9,y:3.6,regY:3.5,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-11.3,x:7.9,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:8.8,x:9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-15,x:7.2,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:11,x:9,y:3.8,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-18.8,x:6.7,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:13.2,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-22.6,x:6.1,y:18.9,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:11.3,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.7}},{t:this.ikNode_36,p:{rotation:-23.6,x:6.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:9.5,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-24.5,x:7.2,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:7.6,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-25.5,x:7.6,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:5.7,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-26.5,x:8.1,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:3.9,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-27.5,x:8.5,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:2,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-28.5,x:9.1,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:0.1,x:9,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-29.5,x:9.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:-1.7,x:9,y:3.6,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_36,p:{rotation:-30.5,x:10.1,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_35,p:{rotation:-3.6,x:9.1,y:3.5,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_36,p:{rotation:-31.5,x:10.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:-1.3,x:9.6,y:3.5}},{t:this.ikNode_44,p:{rotation:-31.5,x:10.4,y:20.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:6.5,x:9.4,y:3.5}},{t:this.ikNode_44,p:{rotation:-34.6,x:8.1,y:20,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:14.2,x:9.3,y:3.5}},{t:this.ikNode_44,p:{rotation:-37.6,x:5.9,y:19.7,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.9,x:9.2,y:3.5}},{t:this.ikNode_44,p:{rotation:-40.7,x:3.7,y:19,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:29.6,x:9,y:3.6}},{t:this.ikNode_44,p:{rotation:-43.7,x:1.6,y:18,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.3,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-27.8,x:0.6,y:17.5,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:37,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-11.9,x:-0.3,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:40.7,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:4,x:-1.1,y:15.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:38.4,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:5.3,x:-0.9,y:16.3,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:36.1,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.7,x:-0.5,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.8,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:8,x:-0.1,y:17.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:27.6,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.2,x:1.3,y:17.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.4,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:4.4,x:2.9,y:18.4,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:15.2,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:2.5,x:4.5,y:18.9,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:9.1,x:8.9,y:3.6}},{t:this.ikNode_44,p:{rotation:0.7,x:6.1,y:19.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:2.9,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-1.1,x:7.7,y:19.3,regX:8.7,regY:1.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-3,16.4,49.1);
p.frameBounds = [rect, new cjs.Rectangle(-0.6,-3.2,17.2,49.9), new cjs.Rectangle(-1.4,-3.6,18.2,50.6), new cjs.Rectangle(-2.2,-3.9,19.9,51.1), new cjs.Rectangle(-3.1,-4.1,21.6,51.5), new cjs.Rectangle(-3.8,-4.4,23.1,51.8), new cjs.Rectangle(-4.6,-4.7,24.7,51.9), new cjs.Rectangle(-4,-4.5,24.9,51.8), new cjs.Rectangle(-3.4,-4.2,25.2,51.5), new cjs.Rectangle(-2.7,-4,25.3,51.2), new cjs.Rectangle(-2,-3.8,25.6,51.1), new cjs.Rectangle(-1.3,-3.5,25.7,50.7), new cjs.Rectangle(-0.6,-3.2,25.9,50.3), new cjs.Rectangle(0.2,-3,26,49.9), new cjs.Rectangle(0,-3.3,27.1,50.1), new cjs.Rectangle(-0.2,-3.5,28.1,50.2), new cjs.Rectangle(0.2,-2.8,27.8,49.3), new cjs.Rectangle(-2.3,-3.5,28.8,49.6), new cjs.Rectangle(-5.1,-4.6,30.4,49.8), new cjs.Rectangle(-7.7,-5.6,31.7,49.7), new cjs.Rectangle(-10,-6.3,32.7,48.9), new cjs.Rectangle(-10.9,-6.6,29,50.7), new cjs.Rectangle(-11.7,-6.9,29.9,50.3), new cjs.Rectangle(-12.5,-7.1,30.7,48.7), new cjs.Rectangle(-12,-6.9,30.2,49), new cjs.Rectangle(-12.2,-6.7,30.2,49.2), new cjs.Rectangle(-12.3,-6.5,30.2,49.6), new cjs.Rectangle(-10.1,-6,27.9,49.8), new cjs.Rectangle(-7.8,-5.4,25.3,49.7), new cjs.Rectangle(-5.9,-4.7,23,49.2), new cjs.Rectangle(-3.8,-3.8,20.3,48.5), new cjs.Rectangle(-1.2,-3,17.4,47.9)];


(lib.legAboveKnee_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.footAbove_mc();
	this.instance.parent = this;
	this.instance.setTransform(10.6,22.8,1,1,0,0,0,10.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.7,rotation:23.7,x:10.7},4).to({regX:10.6,rotation:0,x:10.6},4).to({rotation:8.5,x:10.7,y:22.7},7).wait(1).to({rotation:0,x:10.6,y:22.8},0).wait(16));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#884F34").s().p("AgqBNIgHgxIAVBYIgOgngAAjBlQgHgLgTgRIgbgaQgfg4gBhlIAAgFIBjAAIAAADQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAAgDIAAAFIgIBqIgHBsg");
	this.shape.setTransform(9.8,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#774631").s().p("AgVB7IgUhYQgLhNgFhJQATgUgEAbIAAAFQABBlAeA4IAbAaQATARAHALIAAADIgDAMIgwAAIgBAAIgFACQgDAAgDgCgAA4hpIABgDIABAAIgBADIAAABIgBgBg");
	this.shape_1.setTransform(9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1.6,14.8,28.3);
p.frameBounds = [rect, new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.3,-1.6,15.1,28.3), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.7,-1.6,15.5,29.2), new cjs.Rectangle(-0.3,-1.6,15.2,28.4), new cjs.Rectangle(-0.3,-1.6,15.2,28.2), new cjs.Rectangle(-0.2,-1.6,15,28), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, new cjs.Rectangle(0,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,14.9,28.2), new cjs.Rectangle(-0.1,-1.6,15,28.1), new cjs.Rectangle(-0.2,-1.6,15.1,28.1), new cjs.Rectangle(-0.2,-1.6,15,28.1), new cjs.Rectangle(-0.4,-1.6,15.3,28.6), rect=new cjs.Rectangle(0,-1.6,14.8,28.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.legAbove_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_1
	this.ikNode_44 = new lib.legAboveKnee_mc();
	this.ikNode_44.name = "ikNode_44";
	this.ikNode_44.parent = this;
	this.ikNode_44.setTransform(10.4,20.1,0.996,0.996,-31.5,0,0,8.8,1);

	this.ikNode_43 = new lib.legAboveHip_mc();
	this.ikNode_43.name = "ikNode_43";
	this.ikNode_43.parent = this;
	this.ikNode_43.setTransform(9.6,3.5,0.998,0.998,-1.3,0,0,9.3,3.1);

	this.ikNode_46 = new lib.legAboveKnee_mc();
	this.ikNode_46.name = "ikNode_46";
	this.ikNode_46.parent = this;
	this.ikNode_46.setTransform(9.6,19.5,1,1,0,0,0,9.6,0);

	this.ikNode_45 = new lib.legAboveHip_mc();
	this.ikNode_45.name = "ikNode_45";
	this.ikNode_45.parent = this;
	this.ikNode_45.setTransform(9.2,3.6,1,1,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_43,p:{rotation:-1.3,x:9.6,y:3.5}},{t:this.ikNode_44,p:{rotation:-31.5,x:10.4,y:20.1,regX:8.8,regY:1}}]}).to({state:[{t:this.ikNode_43,p:{rotation:6.5,x:9.4,y:3.5}},{t:this.ikNode_44,p:{rotation:-34.6,x:8.1,y:20,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:14.2,x:9.3,y:3.5}},{t:this.ikNode_44,p:{rotation:-37.6,x:5.9,y:19.7,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.9,x:9.2,y:3.5}},{t:this.ikNode_44,p:{rotation:-40.7,x:3.7,y:19,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:29.6,x:9,y:3.6}},{t:this.ikNode_44,p:{rotation:-43.7,x:1.6,y:18,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.3,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-27.8,x:0.6,y:17.5,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:37,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-11.9,x:-0.3,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:40.7,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:4,x:-1.1,y:15.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:38.4,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:5.3,x:-0.9,y:16.3,regX:8.7,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:36.1,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.7,x:-0.5,y:16.6,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:33.8,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:8,x:-0.1,y:17.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:27.6,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:6.2,x:1.3,y:17.8,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:21.4,x:9,y:3.7}},{t:this.ikNode_44,p:{rotation:4.4,x:2.9,y:18.4,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:15.2,x:8.9,y:3.7}},{t:this.ikNode_44,p:{rotation:2.5,x:4.5,y:18.9,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:9.1,x:8.9,y:3.6}},{t:this.ikNode_44,p:{rotation:0.7,x:6.1,y:19.1,regX:8.8,regY:1}}]},1).to({state:[{t:this.ikNode_43,p:{rotation:2.9,x:9.1,y:3.6}},{t:this.ikNode_44,p:{rotation:-1.1,x:7.7,y:19.3,regX:8.7,regY:1.1}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:0,x:9.2,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:0,x:9.6,y:19.5,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:2.2,x:9.1,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-3.8,x:9.1,y:19.4,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:4.4,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-7.5,x:8.5,y:19.3,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:6.6,x:9,y:3.6,regY:3.5,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-11.3,x:7.9,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:8.8,x:9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-15,x:7.2,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:11,x:9,y:3.8,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-18.8,x:6.7,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:13.2,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-22.6,x:6.1,y:18.9,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:11.3,x:8.9,y:3.7,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.7}},{t:this.ikNode_46,p:{rotation:-23.6,x:6.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:9.5,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-24.5,x:7.2,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:7.6,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-25.5,x:7.6,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:5.7,x:8.9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-26.5,x:8.1,y:19.2,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:3.9,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-27.5,x:8.5,y:19.1,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:2,x:9,y:3.7,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-28.5,x:9.1,y:19,regX:9.7}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:0.1,x:9,y:3.6,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-29.5,x:9.6,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:-1.7,x:9,y:3.6,regY:3.6,scaleX:0.999,scaleY:0.999,regX:8.8}},{t:this.ikNode_46,p:{rotation:-30.5,x:10.1,y:19,regX:9.6}}]},1).to({state:[{t:this.ikNode_45,p:{rotation:-3.6,x:9.1,y:3.5,regY:3.6,scaleX:1,scaleY:1,regX:8.8}},{t:this.ikNode_46,p:{rotation:-31.5,x:10.6,y:19,regX:9.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,-2.8,27.8,49.3);
p.frameBounds = [rect, new cjs.Rectangle(-2.3,-3.5,28.8,49.6), new cjs.Rectangle(-5.1,-4.6,30.4,49.8), new cjs.Rectangle(-7.7,-5.6,31.7,49.7), new cjs.Rectangle(-10,-6.3,32.7,48.9), new cjs.Rectangle(-10.9,-6.6,29,50.7), new cjs.Rectangle(-11.7,-6.9,29.9,50.3), new cjs.Rectangle(-12.5,-7.1,30.7,48.7), new cjs.Rectangle(-12,-6.9,30.2,49), new cjs.Rectangle(-12.2,-6.7,30.2,49.2), new cjs.Rectangle(-12.3,-6.5,30.2,49.6), new cjs.Rectangle(-10.1,-6,27.9,49.8), new cjs.Rectangle(-7.8,-5.4,25.3,49.7), new cjs.Rectangle(-5.9,-4.7,23,49.2), new cjs.Rectangle(-3.8,-3.8,20.3,48.5), new cjs.Rectangle(-1.2,-3,17.4,47.9), new cjs.Rectangle(0,-3,16.4,49.1), new cjs.Rectangle(-0.6,-3.2,17.2,49.9), new cjs.Rectangle(-1.4,-3.6,18.2,50.6), new cjs.Rectangle(-2.2,-3.9,19.8,51.1), new cjs.Rectangle(-3.1,-4.1,21.4,51.5), new cjs.Rectangle(-3.8,-4.4,22.9,51.8), new cjs.Rectangle(-4.6,-4.7,24.7,51.9), new cjs.Rectangle(-4,-4.5,24.9,51.8), new cjs.Rectangle(-3.4,-4.2,25.2,51.5), new cjs.Rectangle(-2.7,-4,25.3,51.2), new cjs.Rectangle(-2,-3.8,25.6,51.1), new cjs.Rectangle(-1.3,-3.5,25.7,50.7), new cjs.Rectangle(-0.6,-3.2,25.9,50.3), new cjs.Rectangle(0.2,-3,26,49.9), new cjs.Rectangle(0,-3.3,27.1,50.1), new cjs.Rectangle(-0.2,-3.5,28.1,50.2)];


(lib.headHandTopShirt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB35D").s().p("AA+BoQACgngCgJQgBgJAAgXQAAgYgEgiQgEgkgLgaIgQgjQgLAJgUAGQgXAHgagCIgPgCIgGgBIgDgNQAYAEAXAAIAXgCIANgDQALgDAIgEIAHgEIABABQADACADAGIAEALIAGARIAEAMIAJAnIAEAUIAAADQAHAnAFApIABAMIABAdIgKAvQAHgpgOAFg");
	this.shape.setTransform(22.1,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC768").s().p("AhaBbIAgjNIAMACQAQADAPAAQASAAAQgCIgWACQgXABgYgFIADANIAGABIAPACQAaACAWgHQAVgGALgJIAQAkQALAZAEAkQAEAiAAAYQAAAXABAJQABAKgBAmg");
	this.shape_1.setTransform(19.3,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(32));

	// Layer_4
	this.instance = new lib.foxHead_mc();
	this.instance.parent = this;
	this.instance.setTransform(20.3,32.3,1,1,6.9,0,0,18.4,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B67E5F").s().p("AgVG1IgHgBIglh0IAeh8QhBgagzgcIgBgIQgKg1AChHQAQiIBIg1IACgBQAOhLgFhnQgBgmAFgZQAZgLAggEIABAAQAggDAZAGQAFAZgBAmQgFBoAPBIIABABQBIAmARCGQABBGgJA2QgdCmg0CFIgMAJQgSAPgVAHQgLADgLABIgKABIgLgBg");
	this.shape_2.setTransform(31.2,41.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.3,-2,45.1,87.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.foxBallJump3_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B67E5F").s().p("AgngcIAOgKQAUAIASATQASAQAIATQABAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgIAIg");
	this.shape.setTransform(59.7,53.3);

	this.instance = new lib.tailFoxBall_mc();
	this.instance.parent = this;
	this.instance.setTransform(19.2,71.5,0.726,0.726,-139.3,0,0,58.8,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67E5F").s().p("AgIAfQAHhZhCiHQAgASAcAcQBLBMAABpIAAAJQgDBWg1BBQgbhJAHhag");
	this.shape_1.setTransform(59.4,67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FC915C","#F4854E"],[0,1],24.2,0,-18.6,0).s().p("AAzCOQgehDhKgVQh+gkgGjMQBIhABjAAQBBAAA3AdQBCCIgHBYQgHBbAcBIQgJAMgLALQgrArg2ATQABhAgTgtg");
	this.shape_2.setTransform(42,69.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FCDDBF","#FCD6B2"],[0,1],14.8,-8.5,-14.8,8.6).s().p("AgGDQQgxgSgogoQhLhMAAhpQAAhrBLhMIAMgLQAGDNB9AjQBLAVAeBDQATAtgBBAQgnANgtAAQgzAAgqgRg");
	this.shape_3.setTransform(31.8,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.foxBallJump3_mccopy, rect = new cjs.Rectangle(6.1,44.6,60.2,70), [rect]);


(lib.foxBallJump2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foxBallJump3_mccopy();
	this.instance.parent = this;
	this.instance.setTransform(49.2,72.3,1,1,0,0,0,39.6,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19,cjs.Ease.sineOut).to({rotation:720},20,cjs.Ease.sineIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15.7,44.4,60.2,70);
p.frameBounds = [rect, new cjs.Rectangle(18.9,45,59.6,63), new cjs.Rectangle(13,46.1,65.1,51.6), new cjs.Rectangle(7.5,47.2,69.7,51.5), new cjs.Rectangle(12.4,42.3,64.1,59), new cjs.Rectangle(24.1,37.7,51.5,63.6), new cjs.Rectangle(23,30.8,51.6,69.4), new cjs.Rectangle(21.4,32.6,56.1,67.2), new cjs.Rectangle(19.8,41.4,61.2,57.6), new cjs.Rectangle(20.8,46.7,66.2,51.6), new cjs.Rectangle(21.4,45.8,69.6,51.6), new cjs.Rectangle(21.6,44.9,67.9,55), new cjs.Rectangle(22.1,42.9,62.3,60), new cjs.Rectangle(22.7,42.8,54.5,61.7), new cjs.Rectangle(23.1,43.4,51.5,65.2), new cjs.Rectangle(23.6,44.2,51.6,67.6), new cjs.Rectangle(23.9,44.2,51.6,69.1), new cjs.Rectangle(24.1,44.3,51.6,69.6), new cjs.Rectangle(24.2,44.4,51.6,69.6), new cjs.Rectangle(15.7,44.4,60.2,70), new cjs.Rectangle(24.4,44.5,51.6,69.5), new cjs.Rectangle(23.8,44.5,52.3,69.3), new cjs.Rectangle(22.4,44.6,53.8,68.6), new cjs.Rectangle(20.9,44.7,56.3,67), new cjs.Rectangle(19.2,45,59.1,63.9), new cjs.Rectangle(17.7,45.5,61,58.6), new cjs.Rectangle(15.4,45.9,63.1,51.5), new cjs.Rectangle(10,46.4,67.4,51.6), new cjs.Rectangle(7.5,47.1,69.6,51.6), new cjs.Rectangle(9.3,44.3,67.7,55.6), new cjs.Rectangle(16.1,41,60.2,60.6), new cjs.Rectangle(23.9,36.3,51.6,64.9), new cjs.Rectangle(23,30.8,51.6,69.5), new cjs.Rectangle(21.5,32.6,55.9,67.4), new cjs.Rectangle(19.8,41.9,61.3,57.1), new cjs.Rectangle(21.2,46.5,67.3,51.6), new cjs.Rectangle(21.5,45.4,69.2,52.6), new cjs.Rectangle(22.2,42.8,61.3,60.3), new cjs.Rectangle(23.2,43.6,51.6,65.8), new cjs.Rectangle(15.7,44.4,60.2,70)];


(lib.foxBallJump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// Layer_1
	this.instance = new lib.foxBallJump2_mc();
	this.instance.parent = this;
	this.instance.setTransform(-6.3,48.6,1,1,0,0,0,45.7,79.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,y:-99.7},16,cjs.Ease.get(1)).wait(1).to({rotation:361.2,y:-99.2},0).wait(1).to({rotation:365,y:-97.7},0).wait(1).to({rotation:371.2,y:-95.1},0).wait(1).to({rotation:379.9,y:-91.5},0).wait(1).to({rotation:391.1,y:-86.9},0).wait(1).to({rotation:404.8,x:-6.4,y:-81.2},0).wait(1).to({rotation:421,y:-74.6},0).wait(1).to({rotation:439.7,y:-66.9},0).wait(1).to({rotation:460.9,y:-58.1},0).wait(1).to({rotation:484.6,y:-48.4},0).wait(1).to({rotation:510.7,x:-6.3,y:-37.7},0).wait(1).to({rotation:539.4,y:-25.9},0).wait(1).to({rotation:570.5,y:-13.1},0).wait(1).to({rotation:604.2,x:-6.2,y:0.8},0).wait(1).to({rotation:640.3,y:15.7},0).wait(1).to({rotation:678.9,x:-6.3,y:31.7},0).wait(1).to({rotation:720,y:48.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.4,13.6,60.2,70);
p.frameBounds = [rect, new cjs.Rectangle(-30.9,1.2,61.4,56.3), new cjs.Rectangle(-40.5,-8.5,69.5,51.5), new cjs.Rectangle(-37,-25.8,61.9,60), new cjs.Rectangle(-32.7,-47.3,51.7,67), new cjs.Rectangle(-37.9,-64.2,53.7,68.6), new cjs.Rectangle(-43,-70.2,61,58.5), new cjs.Rectangle(-42.4,-78.9,66.7,51.6), new cjs.Rectangle(-41.3,-92.8,69.6,51.6), new cjs.Rectangle(-39.1,-105.5,66.1,57.5), new cjs.Rectangle(-36.4,-115.6,58.5,61.1), new cjs.Rectangle(-33.8,-122.3,51.5,63.8), new cjs.Rectangle(-31.7,-126.5,51.7,67), new cjs.Rectangle(-29.8,-130.2,51.6,68.9), new cjs.Rectangle(-28.7,-132.8,51.5,69.6), new cjs.Rectangle(-27.9,-134.2,51.6,69.6), new cjs.Rectangle(-36.4,-134.8,60.2,70), new cjs.Rectangle(-27.5,-134.2,51.6,69.5), new cjs.Rectangle(-27.7,-132.2,52.4,69.3), new cjs.Rectangle(-28.5,-129.2,54,68.5), new cjs.Rectangle(-29.3,-124.6,57,66.5), new cjs.Rectangle(-30.2,-118.3,59.9,62.4), new cjs.Rectangle(-30.9,-110.5,61.6,55.6), new cjs.Rectangle(-35.3,-101.1,65.6,51.6), new cjs.Rectangle(-39.9,-90.1,69.2,51.6), new cjs.Rectangle(-40.8,-80.3,68.4,54), new cjs.Rectangle(-36.2,-72.4,60.8,60.4), new cjs.Rectangle(-31.4,-66.5,51.6,65.5), new cjs.Rectangle(-36.3,-60.4,51.6,69.6), new cjs.Rectangle(-42.2,-44.1,59.8,62.6), new cjs.Rectangle(-42.6,-24.9,66.3,51.6), new cjs.Rectangle(-40.4,-16,68.6,53.8), new cjs.Rectangle(-34.8,-5.4,53.2,62), new cjs.Rectangle(-36.4,13.6,60.2,70)];


(lib.duoBubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(43,175,43,0)").s().p("AgdBlQgDAAgEgdQgDgeAAgqIAAAAQAAgpADgdQAEgeADAAIA7AAQADAAAEAeQADAdAAApIAAAAQAAAqgDAeQgEAdgDAAg");
	this.shape.setTransform(139.1,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(43,175,43,0.035)").s().p("AgmBlQgFAAgEgdQgEgeABgqIAAAAQgBgpAEgdQAEgeAFAAIBNAAQAFAAAEAeQAEAdgBApIAAAAQABAqgEAeQgEAdgFAAg");
	this.shape_1.setTransform(139.1,64.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(43,175,43,0.067)").s().p("AgvBlQgGAAgFgdQgFgeAAgqIAAAAQAAgpAFgdQAFgeAGAAIBfAAQAGAAAFAeQAFAdAAApIAAAAQAAAqgFAeQgFAdgGAAg");
	this.shape_2.setTransform(139.1,64.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(43,175,43,0.102)").s().p("Ag4BlQgIAAgFgdQgGgeAAgqIAAAAQAAgpAGgdQAFgeAIAAIBxAAQAIAAAFAeQAGAdAAApIAAAAQAAAqgGAeQgFAdgIAAg");
	this.shape_3.setTransform(139.1,64.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(43,175,43,0.133)").s().p("AhBBlQgJAAgHgdQgGgeAAgqIAAAAQAAgpAGgdQAHgeAJAAICDAAQAJAAAHAeQAHAdgBApIAAAAQABAqgHAeQgHAdgJAAg");
	this.shape_4.setTransform(139.1,64.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(43,175,43,0.169)").s().p("AhKBlQgLAAgHgdQgIgeAAgqIAAAAQAAgpAIgdQAHgeALAAICVAAQALAAAHAeQAIAdAAApIAAAAQAAAqgIAeQgHAdgLAAg");
	this.shape_5.setTransform(139.1,64.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(43,175,43,0.2)").s().p("AhTBlQgMAAgJgdQgIgeAAgqIAAAAQAAgpAIgdQAJgeAMAAICnAAQAMAAAIAeQAJAdAAApIAAAAQAAAqgJAeQgIAdgMAAg");
	this.shape_6.setTransform(139.1,64.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(43,175,43,0.235)").s().p("AhdBlQgNAAgIgdQgKgeAAgqIAAAAQAAgpAKgdQAIgeANAAIC7AAQANAAAIAeQAKAdAAApIAAAAQAAAqgKAeQgIAdgNAAg");
	this.shape_7.setTransform(139.1,64.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(43,175,43,0.267)").s().p("AhmBlQgNAAgLgdQgKgeAAgqIAAAAQAAgpAKgdQALgeANAAIDNAAQAOAAAKAeQAKAdAAApIAAAAQAAAqgKAeQgKAdgOAAg");
	this.shape_8.setTransform(139.1,64.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(43,175,43,0.302)").s().p("AhvBlQgPAAgLgdQgLgeAAgqIAAAAQAAgpALgdQALgeAPAAIDfAAQAPAAAMAeQALAdgBApIAAAAQABAqgLAeQgMAdgPAAg");
	this.shape_9.setTransform(139.1,64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(43,175,43,0.333)").s().p("Ah4BlQgQAAgMgdQgMgeAAgqIAAAAQAAgpAMgdQAMgeAQAAIDxAAQARAAALAeQAMAdAAApIAAAAQAAAqgMAeQgLAdgRAAg");
	this.shape_10.setTransform(139.1,64.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(43,175,43,0.369)").s().p("AiBBlQgSAAgNgdQgNgeAAgqIAAAAQAAgpANgdQANgeASAAIEDAAQASAAANAeQANAdAAApIAAAAQAAAqgNAeQgNAdgSAAg");
	this.shape_11.setTransform(139.1,64.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(43,175,43,0.4)").s().p("AiKBlQgUAAgNgdQgOgeAAgqIAAAAQAAgpAOgdQANgeAUAAIEVAAQAUAAAOAeQANAdAAApIAAAAQAAAqgNAeQgOAdgUAAg");
	this.shape_12.setTransform(139.1,64.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(43,175,43,0.435)").s().p("AiTBlQgVAAgPgdQgOgeAAgqIAAAAQAAgpAOgdQAPgeAVAAIEnAAQAVAAAOAeQAPAdAAApIAAAAQAAAqgPAeQgOAdgVAAg");
	this.shape_13.setTransform(139.1,64.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(43,175,43,0.467)").s().p("AicBlQgWAAgPgdQgQgegBgqIAAAAQABgpAQgdQAPgeAWAAIE6AAQAWAAAPAeQAQAdAAApIAAAAQAAAqgQAeQgPAdgWAAg");
	this.shape_14.setTransform(139.1,64.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(43,175,43,0.502)").s().p("AilBlQgYAAgQgdQgRgeAAgqIAAAAQAAgpARgdQAQgeAYAAIFLAAQAYAAAQAeQARAdAAApIAAAAQAAAqgRAeQgQAdgYAAg");
	this.shape_15.setTransform(139.1,64.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(43,175,43,0.533)").s().p("AivBlQgYAAgSgdQgRgeAAgqIAAAAQAAgpARgdQASgeAYAAIFeAAQAZAAARAeQASAdAAApIAAAAQAAAqgSAeQgRAdgZAAg");
	this.shape_16.setTransform(139.1,64.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(43,175,43,0.565)").s().p("Ai4BlQgaAAgSgdQgSgeAAgqIAAAAQAAgpASgdQASgeAaAAIFxAAQAZAAATAeQASAdAAApIAAAAQAAAqgSAeQgTAdgZAAg");
	this.shape_17.setTransform(139.1,64.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(43,175,43,0.6)").s().p("AjBBlQgbAAgTgdQgTgeAAgqIAAAAQAAgpATgdQATgeAbAAIGDAAQAbAAATAeQATAdAAApIAAAAQAAAqgTAeQgTAdgbAAg");
	this.shape_18.setTransform(139.1,64.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(43,175,43,0.631)").s().p("AjKBlQgcAAgUgdQgUgegBgqIAAAAQABgpAUgdQAUgeAcAAIGVAAQAdAAATAeQAVAdAAApIAAAAQAAAqgVAeQgTAdgdAAg");
	this.shape_19.setTransform(139.1,64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(43,175,43,0.667)").s().p("AjTBlQgeAAgVgdQgVgeAAgqIAAAAQAAgpAVgdQAVgeAeAAIGnAAQAeAAAVAeQAVAdAAApIAAAAQAAAqgVAeQgVAdgeAAg");
	this.shape_20.setTransform(139.1,64.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(43,175,43,0.698)").s().p("AjcBlQgfAAgWgdQgWgeAAgqIAAAAQAAgpAWgdQAWgeAfAAIG5AAQAfAAAWAeQAWAdAAApIAAAAQAAAqgWAeQgWAdgfAAg");
	this.shape_21.setTransform(139.1,64.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(43,175,43,0.733)").s().p("AjlBlQghAAgWgdQgXgeAAgqIAAAAQAAgpAXgdQAWgeAhAAIHLAAQAgAAAXAeQAXAdAAApIAAAAQAAAqgXAeQgXAdggAAg");
	this.shape_22.setTransform(139.1,64.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(43,175,43,0.765)").s().p("AjuBlQgiAAgYgdQgXgeAAgqIAAAAQAAgpAXgdQAYgeAiAAIHdAAQAiAAAYAeQAXAdAAApIAAAAQAAAqgXAeQgYAdgiAAg");
	this.shape_23.setTransform(139.1,64.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(43,175,43,0.8)").s().p("Aj3BlQgjAAgZgdQgZgeABgqIAAAAQgBgpAZgdQAZgeAjAAIHvAAQAjAAAZAeQAYAdAAApIAAAAQAAAqgYAeQgZAdgjAAg");
	this.shape_24.setTransform(139.1,64.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(43,175,43,0.831)").s().p("AkBBlQgkAAgZgdQgageAAgqIAAAAQAAgpAagdQAZgeAkAAIIDAAQAkAAAZAeQAaAdAAApIAAAAQAAAqgaAeQgZAdgkAAg");
	this.shape_25.setTransform(139.1,64.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(43,175,43,0.867)").s().p("AkKBlQglAAgbgdQgageAAgqIAAAAQAAgpAagdQAbgeAlAAIIVAAQAlAAAaAeQAbAdAAApIAAAAQAAAqgbAeQgaAdglAAg");
	this.shape_26.setTransform(139.1,64.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(43,175,43,0.898)").s().p("AkTBlQgnAAgbgdQgbgeAAgqIAAAAQAAgpAbgdQAbgeAnAAIInAAQAmAAAcAeQAbAdAAApIAAAAQAAAqgbAeQgcAdgmAAg");
	this.shape_27.setTransform(139.1,64.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(43,175,43,0.933)").s().p("AkcBlQgoAAgcgdQgcgeAAgqIAAAAQAAgpAcgdQAcgeAoAAII5AAQAoAAAcAeQAcAdAAApIAAAAQAAAqgcAeQgcAdgoAAg");
	this.shape_28.setTransform(139.1,64.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(43,175,43,0.965)").s().p("AklBlQgpAAgdgdQgegeAAgqIAAAAQAAgpAegdQAdgeApAAIJLAAQApAAAdAeQAeAdAAApIAAAAQAAAqgeAeQgdAdgpAAg");
	this.shape_29.setTransform(139.1,64.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2BAF2B").s().p("AkuBlQgrAAgegdQgegeAAgqIAAAAQAAgpAegdQAegeArAAIJdAAQArAAAeAeQAeAdAAApIAAAAQAAAqgeAeQgeAdgrAAg");
	this.shape_30.setTransform(139.1,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},149).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer_3
	this.redMark0 = new lib.redMark_mc();
	this.redMark0.name = "redMark0";
	this.redMark0.parent = this;
	this.redMark0.setTransform(115.7,21.6,1,1,0,0,0,8.8,21.6);

	this.redMark1 = new lib.redMark_mc();
	this.redMark1.name = "redMark1";
	this.redMark1.parent = this;
	this.redMark1.setTransform(269,21.6,1,1,0,0,0,8.8,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.redMark1},{t:this.redMark0}]},179).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(135.1,54.4,7.9,20.3), new cjs.Rectangle(133.9,54.4,10.3,20.3), new cjs.Rectangle(132.7,54.4,12.8,20.3), new cjs.Rectangle(131.5,54.4,15.2,20.3), new cjs.Rectangle(130.2,54.4,17.7,20.3), new cjs.Rectangle(129,54.4,20.1,20.3), new cjs.Rectangle(127.8,54.4,22.5,20.3), new cjs.Rectangle(126.6,54.4,25,20.3), new cjs.Rectangle(125.4,54.4,27.4,20.3), new cjs.Rectangle(124.1,54.4,29.9,20.3), new cjs.Rectangle(122.9,54.4,32.3,20.3), new cjs.Rectangle(121.7,54.4,34.7,20.3), new cjs.Rectangle(120.5,54.4,37.2,20.3), new cjs.Rectangle(119.3,54.4,39.7,20.3), new cjs.Rectangle(118,54.4,42.1,20.3), new cjs.Rectangle(116.8,54.4,44.6,20.3), new cjs.Rectangle(115.6,54.4,47,20.3), new cjs.Rectangle(114.4,54.4,49.4,20.3), new cjs.Rectangle(113.2,54.4,51.9,20.3), new cjs.Rectangle(111.9,54.4,54.3,20.3), new cjs.Rectangle(110.7,54.4,56.7,20.3), new cjs.Rectangle(109.5,54.4,59.2,20.3), new cjs.Rectangle(108.3,54.4,61.7,20.3), new cjs.Rectangle(107.1,54.4,64.1,20.3), new cjs.Rectangle(105.8,54.4,66.5,20.3), new cjs.Rectangle(104.6,54.4,69,20.3), new cjs.Rectangle(103.4,54.4,71.4,20.3), new cjs.Rectangle(102.2,54.4,73.9,20.3), new cjs.Rectangle(101,54.4,76.2,20.3), new cjs.Rectangle(99.7,54.4,78.7,20.3), new cjs.Rectangle(98.5,0,179.3,74.7)];


(lib.bubbleDiagnosticList_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg00AbrMAAAg3VMBppAAAMAAAA3Vg");
	mask.setTransform(0,161.8);

	// Layer_1
	this.bubbleListAnim = new lib.bubbleList_mc();
	this.bubbleListAnim.name = "bubbleListAnim";
	this.bubbleListAnim.parent = this;
	this.bubbleListAnim.setTransform(0.1,293.4,1,1,0,0,0,317.4,285.6);

	var maskedShapeInstanceList = [this.bubbleListAnim];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bubbleListAnim).to({y:32.3},8).to({y:293.4},8).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCCA1").s().p("Eg2iAbrMAAAg3VMBtFAAAMAAAA3Vg");
	this.shape.setTransform(0,161.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-349.1,-15.3,698.3,354.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.zoomWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xZoomWindow = new lib.xZoomWindow_btn();
	this.xZoomWindow.name = "xZoomWindow";
	this.xZoomWindow.parent = this;
	this.xZoomWindow.setTransform(-194.1,-213.3,0.461,0.461,0,0,0,16,16);
	new cjs.ButtonHelper(this.xZoomWindow, 0, 1, 2, false, new lib.xZoomWindow_btn(), 3);

	this.zoomWindowPic = new lib.zoomWindowPic_mc();
	this.zoomWindowPic.name = "zoomWindowPic";
	this.zoomWindowPic.parent = this;
	this.zoomWindowPic.setTransform(0.2,10.9,0.669,0.669);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2CBBE").ss(5,1,1).p("EghMABwIAAjiMBCVAAAIAEDlIgEgDg");
	this.shape.setTransform(0,-212.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2CBBE").s().p("EghKABxIAAjhMBCVAAAIAADhg");
	this.shape_1.setTransform(-0.2,-213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.zoomWindowPic},{t:this.xZoomWindow}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomWindow, rect = new cjs.Rectangle(-215,-226.8,430,452.5), [rect]);


(lib.vi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.viAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.8,1,1,0,0,0,62.3,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vi, rect = null, [rect]);


(lib.magGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.magnifying();
	this.instance.parent = this;
	this.instance.setTransform(1.1,-6.4,0.365,0.365,0,0,0,0,-0.4);
	this.instance.filters = [new cjs.ColorFilter(0.95, 0.95, 0.95, 1, 0, 0, 0, 0)];
	this.instance.cache(-22,-23,45,47);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],0.8,4.1,0,0.8,4.1,39.5).s().p("AheBOQgQgMgPgQQgxg1gChMQAQgGASgEQBDgRBHAAQBLAABIATQARAEARAGQgDBLgwA0QgQAQgQAMQgqAdg0AAQg0AAgqgdg");
	this.shape.setTransform(1.3,-15.4,1,1,0,0,0,0.1,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],0.8,4.1,0,0.8,4.1,39.5).s().p("AheBOQgQgMgPgQQgxg1gChMQAQgGASgEQBDgRBHAAQBLAABIATQARAEARAGQgDBLgwA0QgQAQgQAMQgqAdg0AAQg0AAgqgdg");
	this.shape_1.setTransform(1.3,-15.4,1,1,0,0,0,0.1,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53B2E9").s().p("AhjBRIAAAAQgSgNgQgRQgzg3gChQIAIAAIAAABIAAAAIABgBQAQgGASgEQBDgRBIABQAxAAAvAHQAaAFAaAGIAXAHIALADIABAAIAAABIABABIAAgBIAHAAQgDBOgzA2IAAAAQgQARgRANIAAAAQgtAeg3ABQg3gBgsgeg");
	this.shape_2.setTransform(1.2,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.magGlass, rect = new cjs.Rectangle(-17.5,-15.4,37.4,22.4), [rect]);


(lib.bubbleHitColor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(1));

	// Layer_1
	this.bubbleTextMC = new lib.bubbleText_mc();
	this.bubbleTextMC.name = "bubbleTextMC";
	this.bubbleTextMC.parent = this;
	this.bubbleTextMC.setTransform(62.4,60.7,1,1,0,0,0,48.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.bubbleTextMC).wait(45));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AFE2FF").ss(2,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape.setTransform(62.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AFE2FE").ss(2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_1.setTransform(62.4,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B1E3FB").ss(2.1,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_2.setTransform(62.4,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B3E3F6").ss(2.2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_3.setTransform(62.4,62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B6E4EF").ss(2.4,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_4.setTransform(62.4,62.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B9E5E7").ss(2.6,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_5.setTransform(62.4,62.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BEE7DC").ss(2.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_6.setTransform(62.4,62.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C3E9D0").ss(3.2,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_7.setTransform(62.4,62.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C9EBC1").ss(3.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_8.setTransform(62.4,62.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D0EDB0").ss(3.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_9.setTransform(62.4,62.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D8F09E").ss(4.3,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_10.setTransform(62.4,62.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E0F38A").ss(4.8,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_11.setTransform(62.4,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EAF673").ss(5.3,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_12.setTransform(62.4,62.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F4F95B").ss(5.9,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_13.setTransform(62.4,62.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFD41").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_14.setTransform(62.4,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FEFD41").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_15.setTransform(62.4,62.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FBFD40").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_16.setTransform(62.4,62.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6FD3F").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_17.setTransform(62.4,62.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#EFFD3D").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_18.setTransform(62.4,62.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E6FD3B").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_19.setTransform(62.4,62.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DCFD38").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_20.setTransform(62.4,62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CFFE35").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_21.setTransform(62.4,62.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C0FE32").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_22.setTransform(62.4,62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#AFFE2E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_23.setTransform(62.4,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#9DFE29").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_24.setTransform(62.4,62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#88FE24").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_25.setTransform(62.4,62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#71FE1E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_26.setTransform(62.4,62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59FF18").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_27.setTransform(62.4,62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3EFF12").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_28.setTransform(62.4,62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFC41").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_29.setTransform(62.4,62.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFF840").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_30.setTransform(62.4,62.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFF13E").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_31.setTransform(62.4,62.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFE83C").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_32.setTransform(62.4,62.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFDD39").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_33.setTransform(62.4,62.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFCF35").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_34.setTransform(62.4,62.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFBE31").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_35.setTransform(62.4,62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA2C").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_36.setTransform(62.4,62.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF9426").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_37.setTransform(62.4,62.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF7C20").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_38.setTransform(62.4,62.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF6119").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_39.setTransform(62.4,62.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF4311").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_40.setTransform(62.4,62.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF2309").ss(6.5,1,1).p("ApvAAQAAh9Axh1QAvhwBXhWQBWhWBwgwQB0gxB+AAQB/AAB0AxQBwAwBWBWQBWBWAvBwQAyB1AAB9QAAB+gyB0QgvBwhWBXQhWBWhwAwQh0Axh/AAQh+AAh0gxQhwgwhWhWQhXhXgvhwQgxh0AAh+g");
	this.shape_41.setTransform(62.4,62.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(6.5,1,1).p("ApvAAQAAB+AxB0QAvBwBXBXQBWBWBwAwQB0AxB+AAQB/AAB0gxQBwgwBWhWQBWhXAvhwQAyh0AAh+QAAh9gyh1QgvhwhWhWQhWhWhwgwQh0gxh/AAQh+AAh0AxQhwAwhWBWQhXBWgvBwQgxB1AAB9g");
	this.shape_42.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// Layer_2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjyI+QhwgvhWhXQhXhVgvhxQgxhzAAh/QAAh+Axh0QAvhvBXhXQBWhWBwgwQB0gwB+gBQB/ABB0AwQBwAwBWBWQBWBXAvBvQAyB0AAB+QAAB/gyBzQgvBxhWBVQhWBXhwAvQh0Ayh/AAQh+AAh0gyg");
	this.shape_43.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,126.8,126.7);
p.frameBounds = [rect, rect, new cjs.Rectangle(-1,-1,126.9,126.8), new cjs.Rectangle(-1.1,-1.1,127,126.9), new cjs.Rectangle(-1.1,-1.1,127.1,127), new cjs.Rectangle(-1.2,-1.2,127.3,127.2), new cjs.Rectangle(-1.4,-1.4,127.6,127.5), new cjs.Rectangle(-1.5,-1.5,127.9,127.8), new cjs.Rectangle(-1.7,-1.7,128.2,128.1), new cjs.Rectangle(-1.9,-1.9,128.6,128.5), new cjs.Rectangle(-2.1,-2.1,129.1,129), new cjs.Rectangle(-2.4,-2.4,129.6,129.5), new cjs.Rectangle(-2.6,-2.6,130.1,130), new cjs.Rectangle(-2.9,-2.9,130.7,130.6), rect=new cjs.Rectangle(-3.2,-3.2,131.3,131.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bubbleHit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_130 = function() {
		this.stop();
		this.bubbleColorChange.gotoAndStop(0);
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_220 = function() {
		this.stop();
		this.bubbleColorChange.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(71).call(this.frame_130).wait(19).call(this.frame_149).wait(71).call(this.frame_220).wait(1));

	// Layer_1
	this.bubbleColorChange = new lib.bubbleHitColor_mc();
	this.bubbleColorChange.name = "bubbleColorChange";
	this.bubbleColorChange.parent = this;
	this.bubbleColorChange.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.bubbleColorChange).to({y:16.4},14,cjs.Ease.get(1)).to({y:62.4},15,cjs.Ease.get(-1)).wait(1).to({y:16.4},14,cjs.Ease.get(1)).to({y:62.4},15,cjs.Ease.get(-1)).wait(1).to({y:16.4},14,cjs.Ease.get(1)).to({y:62.4},15,cjs.Ease.get(-1)).wait(1).to({regX:62.3,rotation:-10},5).to({regX:62.4,rotation:0},5).to({rotation:10},5).to({rotation:0},5).to({regX:62.3,rotation:-10},5).to({regX:62.4,rotation:0},5).to({rotation:10},5).to({rotation:0},5).to({_off:true},1).wait(18).to({_off:false},0).wait(31).to({regX:62.3,rotation:-10},5).to({regX:62.4,rotation:0},5).to({rotation:10},5).to({rotation:0},5).to({regX:62.3,rotation:-10},5).to({regX:62.4,rotation:0},5).to({rotation:10},5).to({rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,126.8,126.7);
p.frameBounds = [rect, new cjs.Rectangle(-1,-7.3,126.8,126.7), new cjs.Rectangle(-1,-13.2,126.8,126.7), new cjs.Rectangle(-1,-18.6,126.8,126.7), new cjs.Rectangle(-1,-23.5,126.8,126.7), new cjs.Rectangle(-1,-28,126.8,126.7), new cjs.Rectangle(-1,-32,126.8,126.7), new cjs.Rectangle(-1,-35.5,126.8,126.7), new cjs.Rectangle(-1,-38.5,126.8,126.7), new cjs.Rectangle(-1,-41.1,126.8,126.7), new cjs.Rectangle(-1,-43.2,126.8,126.7), new cjs.Rectangle(-1,-44.9,126.8,126.7), new cjs.Rectangle(-1,-46,126.8,126.7), new cjs.Rectangle(-1,-46.7,126.8,126.7), new cjs.Rectangle(-1,-47,126.8,126.7), new cjs.Rectangle(-1,-46.8,126.8,126.7), new cjs.Rectangle(-1,-46.2,126.8,126.7), new cjs.Rectangle(-1,-45.1,126.8,126.7), new cjs.Rectangle(-1,-43.7,126.8,126.7), new cjs.Rectangle(-1,-41.9,126.8,126.7), new cjs.Rectangle(-1,-39.6,126.8,126.7), new cjs.Rectangle(-1,-37,126.8,126.7), new cjs.Rectangle(-1,-33.9,126.8,126.7), new cjs.Rectangle(-1,-30.4,126.8,126.7), new cjs.Rectangle(-1,-26.5,126.8,126.7), new cjs.Rectangle(-1,-22.2,126.8,126.7), new cjs.Rectangle(-1,-17.5,126.8,126.7), new cjs.Rectangle(-1,-12.4,126.8,126.7), new cjs.Rectangle(-1,-6.9,126.8,126.7), rect=new cjs.Rectangle(-1,-1,126.8,126.7), rect, new cjs.Rectangle(-1,-7.3,126.8,126.7), new cjs.Rectangle(-1,-13.2,126.8,126.7), new cjs.Rectangle(-1,-18.6,126.8,126.7), new cjs.Rectangle(-1,-23.5,126.8,126.7), new cjs.Rectangle(-1,-28,126.8,126.7), new cjs.Rectangle(-1,-32,126.8,126.7), new cjs.Rectangle(-1,-35.5,126.8,126.7), new cjs.Rectangle(-1,-38.5,126.8,126.7), new cjs.Rectangle(-1,-41.1,126.8,126.7), new cjs.Rectangle(-1,-43.2,126.8,126.7), new cjs.Rectangle(-1,-44.9,126.8,126.7), new cjs.Rectangle(-1,-46,126.8,126.7), new cjs.Rectangle(-1,-46.7,126.8,126.7), new cjs.Rectangle(-1,-47,126.8,126.7), new cjs.Rectangle(-1,-46.8,126.8,126.7), new cjs.Rectangle(-1,-46.2,126.8,126.7), new cjs.Rectangle(-1,-45.1,126.8,126.7), new cjs.Rectangle(-1,-43.7,126.8,126.7), new cjs.Rectangle(-1,-41.9,126.8,126.7), new cjs.Rectangle(-1,-39.6,126.8,126.7), new cjs.Rectangle(-1,-37,126.8,126.7), new cjs.Rectangle(-1,-33.9,126.8,126.7), new cjs.Rectangle(-1,-30.4,126.8,126.7), new cjs.Rectangle(-1,-26.5,126.8,126.7), new cjs.Rectangle(-1,-22.2,126.8,126.7), new cjs.Rectangle(-1,-17.5,126.8,126.7), new cjs.Rectangle(-1,-12.4,126.8,126.7), new cjs.Rectangle(-1,-6.9,126.8,126.7), rect=new cjs.Rectangle(-1,-1,126.8,126.7), rect, new cjs.Rectangle(-1,-7.3,126.8,126.7), new cjs.Rectangle(-1,-13.2,126.8,126.7), new cjs.Rectangle(-1,-18.6,126.8,126.7), new cjs.Rectangle(-1,-23.5,126.8,126.7), new cjs.Rectangle(-1,-28,126.8,126.7), new cjs.Rectangle(-1,-32,126.8,126.7), new cjs.Rectangle(-1,-35.5,126.8,126.7), new cjs.Rectangle(-1,-38.5,126.8,126.7), new cjs.Rectangle(-1,-41.1,126.8,126.7), new cjs.Rectangle(-1,-43.2,126.8,126.7), new cjs.Rectangle(-1,-44.9,126.8,126.7), new cjs.Rectangle(-1,-46,126.8,126.7), new cjs.Rectangle(-1,-46.7,126.8,126.7), new cjs.Rectangle(-1,-47,126.8,126.7), new cjs.Rectangle(-1,-46.8,126.8,126.7), new cjs.Rectangle(-1,-46.2,126.8,126.7), new cjs.Rectangle(-1,-45.1,126.8,126.7), new cjs.Rectangle(-1,-43.7,126.8,126.7), new cjs.Rectangle(-1,-41.9,126.8,126.7), new cjs.Rectangle(-1,-39.6,126.8,126.7), new cjs.Rectangle(-1,-37,126.8,126.7), new cjs.Rectangle(-1,-33.9,126.8,126.7), new cjs.Rectangle(-1,-30.4,126.8,126.7), new cjs.Rectangle(-1,-26.5,126.8,126.7), new cjs.Rectangle(-1,-22.2,126.8,126.7), new cjs.Rectangle(-1,-17.5,126.8,126.7), new cjs.Rectangle(-1,-12.4,126.8,126.7), new cjs.Rectangle(-1,-6.9,126.8,126.7), rect=new cjs.Rectangle(-1,-1,126.8,126.7), rect, new cjs.Rectangle(-0.9,-1,126.8,126.7), rect=new cjs.Rectangle(-0.9,-0.9,126.7,126.7), rect, new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11.1,146.9,146.8), new cjs.Rectangle(-0.8,-1,126.7,126.7), new cjs.Rectangle(-0.8,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.8,-1,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11,146.9,146.8), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-0.9,-1,126.8,126.7), rect=new cjs.Rectangle(-0.9,-0.9,126.7,126.7), rect, new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11.1,146.9,146.8), new cjs.Rectangle(-0.8,-1,126.7,126.7), new cjs.Rectangle(-0.8,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.8,-1,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11,146.9,146.8), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-1,-1,126.8,126.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-0.9,-1,126.8,126.7), rect=new cjs.Rectangle(-0.9,-0.9,126.7,126.7), rect, new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11.1,146.9,146.8), new cjs.Rectangle(-0.8,-1,126.7,126.7), new cjs.Rectangle(-0.8,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.8,-1,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11,146.9,146.8), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-0.9,-1,126.8,126.7), rect=new cjs.Rectangle(-0.9,-0.9,126.7,126.7), rect, new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11.1,146.9,146.8), new cjs.Rectangle(-0.8,-1,126.7,126.7), new cjs.Rectangle(-0.8,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.8,-1,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-1,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.8,126.7), new cjs.Rectangle(-11,-11,146.9,146.8), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-0.9,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.7,126.7), new cjs.Rectangle(-1,-0.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7)];


(lib.bubbleM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(178).call(this.frame_178).wait(1));

	// Layer 1
	this.bubbleHit = new lib.bubbleHit_mc();
	this.bubbleHit.name = "bubbleHit";
	this.bubbleHit.parent = this;
	this.bubbleHit.setTransform(0.1,0.1,1,1,0,0,0,62.4,62.4);
	this.bubbleHit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bubbleHit).wait(149).to({alpha:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.3,-63.3,126.8,126.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ladder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ladder2_mc();
	this.instance.parent = this;
	this.instance.setTransform(23.2,167,1,1,0,0,0,23.2,167);
	this.instance.filters = [new cjs.ColorFilter(1, 0.8984375, 0.8984375, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-38,50,377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ladder_mc, rect = new cjs.Rectangle(0,-35.7,46.4,372.5), [rect]);


(lib.keyboardInstructions_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text(":מקשי המקלדת", "bold 12px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 101;
	this.text.parent = this;
	this.text.setTransform(348.3,71.8,1.962,1.962);

	this.text_1 = new cjs.Text("תנועה", "10px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 27;
	this.text_1.parent = this;
	this.text_1.setTransform(162.4,76.1,1.962,1.962);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B7273").s().p("AkeCVIAAkpII9AAIAAEpg");
	this.shape.setTransform(106.3,90.2,0.262,0.263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B7273").s().p("AiuAAIFdlXIAAKvg");
	this.shape_1.setTransform(96.1,90.5,0.262,0.263);

	this.instance = new lib.keyboardKey_mc();
	this.instance.parent = this;
	this.instance.setTransform(103.8,90.6,1.962,1.962,0,0,0,9.5,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B7273").s().p("AkeCVIAAkpII9AAIAAEpg");
	this.shape_2.setTransform(218,89.6,0.262,0.262);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7273").s().p("AiulXIFdFXIldFYg");
	this.shape_3.setTransform(228.2,89.9,0.262,0.262);

	this.instance_1 = new lib.keyboardKey_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.6,90.1,1.962,1.962,0,0,0,9.5,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(201,137,90,0.498)").s().p("AuUElQhbAAAAhcIAAmQQAAhdBbAAIcpAAQBbAAAABdIAAGQQAABchbAAg");
	this.shape_4.setTransform(161.2,89.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B7273").s().p("AmjADIAAgGINHAAIAAAGg");
	this.shape_5.setTransform(-86.1,96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B7273").s().p("ABlAqIAAhBIgrAAIAAgSIA2AAQAGAAACAGQABADAAAJIAABBgAAZAqIAAhBIgMAAIAAgSIAaAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABIABAFIAABLgAgTAqIAAhBIgMAAIAAgSIAZAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABIABAFIAABLgAhCAqIAAhBIgiAAIAABBIgUAAIAAgzIAGgOIgGAAIAAgSIBBAAQAJAAAAAIIAABLg");
	this.shape_6.setTransform(-84.2,87.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F2F2").s().p("AmeCbQgpAAgdgJQgdgKAAgMIAAjvQAAgOAdgMQAfgNAnAAIM9AAQAnAAAfANQAdAMAAAOIAADvQAAAMgdAKQgdAJgpAAg");
	this.shape_7.setTransform(-85.3,88.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E9E8").s().p("AmfCjQgpAAgdgKQgegJAAgOIAAj7QAAgOAegNQAegNAoAAIM/AAQAnAAAfANQAeANAAAOIAAD7QAAAOgeAJQgdAKgpAAg");
	this.shape_8.setTransform(-84.2,89);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1DFDF").s().p("Am3CsQgmAAgbgJQgbgJAAgMIAAkbQAAgMAbgJQAbgJAmAAINvAAQAmAAAbAJQAbAJAAAMIAAEbQAAAMgbAJQgbAJgmAAg");
	this.shape_9.setTransform(-82.8,89.9);

	this.text_2 = new cjs.Text("קפיצה", "10px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 25;
	this.text_2.parent = this;
	this.text_2.setTransform(2.9,75.7,1.962,1.962);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(201,137,90,0.498)").s().p("AuUElQhbAAAAhcIAAmQQAAhdBbAAIcqAAQBaAAAABdIAAGQQAABchaAAg");
	this.shape_10.setTransform(-53.9,89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B7273").s().p("AiUEfIAAo9IEqAAIAAI9g");
	this.shape_11.setTransform(-242.2,86.7,0.261,0.261,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B7273").s().p("AlXCvIFXldIFYFdg");
	this.shape_12.setTransform(-242.5,96.8,0.261,0.261,180);

	this.instance_2 = new lib.keyboardKey_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-242.7,90.1,1.962,1.962,0,0,0,9.5,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B7273").s().p("AiUEfIAAo9IEqAAIAAI9g");
	this.shape_13.setTransform(-198.2,93,0.262,0.262);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B7273").s().p("AlXCvIFXldIFYFdg");
	this.shape_14.setTransform(-197.9,82.8,0.262,0.262);

	this.instance_3 = new lib.keyboardKey_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-197.3,90.1,1.962,1.962,0,0,0,9.5,9.3);

	this.text_3 = new cjs.Text("מעבר בין משטחים", "10px 'Arial'", "#333333");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 13;
	this.text_3.lineWidth = 72;
	this.text_3.parent = this;
	this.text_3.setTransform(-270.9,76.6,1.962,1.962);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(201,137,90,0.498)").s().p("AyZElQhcAAABhcIAAmQQgBhdBcAAMAk1AAAQBaAAAABdIAAGQQAABchaAAg");
	this.shape_15.setTransform(-295.3,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.text_3},{t:this.instance_3},{t:this.shape_14},{t:this.shape_13},{t:this.instance_2},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.text_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.keyboardInstructions_mc, rect = new cjs.Rectangle(-422.3,60.1,873.6,58.7), [rect]);


(lib.jar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpZIQh6gPhogwQgkgQgigSQkunZiqpZQg4jGAJkDQBfn1GoisQAEgCAFAAQBWkRgdmAQgJiKAdhgQCUgeC9AAQCxAACIAWQARACgBAPQgBAQBDACQAzACA8AGIAmAEQBSAKBABOQBtDIhLD/QgtCag1CPQgXA7gXA5QFqDmgvJFQgVEBhRDTQinG1jbGCQigBqjnAAQhEAAhLgJgAFf0dIgBAJIAAAAQgbFsBhDxQA8h7AwiGIAMglQA0iYgRhNQgOg7gvhQQgQgZgaAAQguAAhLBJg");
	mask.setTransform(-3.6,-18.1);

	// Layer_2
	this.brown = new lib.jarBrown_mc();
	this.brown.name = "brown";
	this.brown.parent = this;
	this.brown.setTransform(-1.6,-179.7,0.865,0.865,0,0,0,151.7,0);

	var maskedShapeInstanceList = [this.brown];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.brown).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F7BE1","#1585EB","#1F7BE1","#1585EB","#1F7BE1","#1585EB","#1F7BE1","#1585EB","#1F7BE1","#0099FF","#3366CC","#3366CC"],[0,0.153,0.282,0.396,0.533,0.631,0.733,0.824,0.922,1,1,1],5.7,-158.3,5.6,170.7).s().p("AhpZIQh6gPhogwQgkgQgigSQkunZiqpZQg4jGAJkDQBfn1GoisQAEgCAFAAQBWkRgdmAQgJiKAdhgQCUgeC9AAQCxAACIAWQARACgBAPQgBAQBDACQAzACA8AGIAmAEQBSAKBABOQBtDIhLD/QgtCag1CPQgXA7gXA5QFqDmgvJFQgVEBhRDTQinG1jbGCQigBqjnAAQhEAAhLgJgAFf0dIgBAJIAAAAQgbFsBhDxQA8h7AwiGIAMglQA0iYgRhNQgOg7gvhQQgQgZgaAAQguAAhLBJg");
	this.shape.setTransform(-3.6,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jar, rect = new cjs.Rectangle(-95.8,-179.7,184.5,323.4), [rect]);


(lib.gameBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gameTitle
	this.gameTitle = new cjs.Text("game name", "bold 14px 'Arial'");
	this.gameTitle.name = "gameTitle";
	this.gameTitle.textAlign = "center";
	this.gameTitle.lineHeight = 51;
	this.gameTitle.lineWidth = 954;
	this.gameTitle.parent = this;
	this.gameTitle.setTransform(-0.8,-316.9);

	this.timeline.addTween(cjs.Tween.get(this.gameTitle).wait(1));

	// keyboard
	this.instance = new lib.keyboardInstructions_mc();
	this.instance.parent = this;
	this.instance.setTransform(-2,-233,0.553,0.553,0,0,0,10.2,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// instruction
	this.instructionBar = new lib.matchInstruction_mc();
	this.instructionBar.name = "instructionBar";
	this.instructionBar.parent = this;
	this.instructionBar.setTransform(7.5,-262.8,0.985,0.985);

	this.timeline.addTween(cjs.Tween.get(this.instructionBar).wait(1));

	// layers
	this.platform2 = new lib.platform2_mc();
	this.platform2.name = "platform2";
	this.platform2.parent = this;
	this.platform2.setTransform(477.4,21.5,0.867,0.704,0,0,0,1099.2,0.1);

	this.platform1 = new lib.platform1_mc();
	this.platform1.name = "platform1";
	this.platform1.parent = this;
	this.platform1.setTransform(480.4,295.3,0.874,0.706,0,0,0,1099,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.platform1},{t:this.platform2}]}).wait(1));

	// objects
	this.instance_1 = new lib.ladder_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(285.8,154.5,0.755,0.815,0,0,0,23.3,167.1);

	this.instance_2 = new lib.ladder_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-281.9,154.5,0.755,0.815,0,0,0,23.1,167.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// hills
	this.instance_3 = new lib.DesertBG1_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(480.5,97.8,1.675,2.192,0,0,0,743.6,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// alphaEffect
	this.instance_4 = new lib.blendingAlpha_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,294.8,1.291,0.908,0,0,0,372.1,649.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// whiteLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhNBACbIAAk1MCaDAAAIAAE1g");
	this.shape.setTransform(0.3,-310.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.instance_5 = new lib.skyBG_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.3,-26.3,1,1,0,0,0,480.1,299.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameBG_mc, rect = new cjs.Rectangle(-492.7,-326.1,986.1,636.9), [rect]);


(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.gameBG = new lib.gameBG_mc();
	this.gameBG.name = "gameBG";
	this.gameBG.parent = this;
	this.gameBG.setTransform(0,0,1,1.002);

	this.timeline.addTween(cjs.Tween.get(this.gameBG).wait(1));

}).prototype = getMCSymbolPrototype(lib.game, rect = new cjs.Rectangle(-492.8,-326.7,986.1,638.1), [rect]);


(lib.tutorialHouse_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_magnifyingGlassBubble_mc();
	this.instance.parent = this;
	this.instance.setTransform(42.9,11.2,1,1,0,0,0,1.2,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C5B32").s().p("ADqADIAAgFIB8AAIAAAFgAllADIAAgFIGZAAIAAAFg");
	this.shape.setTransform(41.9,104.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977449").s().p("AgxAcIBjABIgCB7IgCh3IhaAAIgBB0IBdADIhgACgAgxiYIBjAAIgCB7IgCh3IhaABIgBB0IBdACIhgACg");
	this.shape_1.setTransform(56.2,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBBB87").s().p("ADqF2IgMAAIAAlyIifAAIAAFyIgLAAImHAAIAAmdIFTlOIFUFOIAAGdgAkQD6IEkAAIAAjIIkkAAgAg2hbIBtAAIAAiPIhtAAg");
	this.shape_2.setTransform(41.9,64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0D0EB").s().p("AgLDlIAAinIB5AAIAACngAiVDlIAAinIB6AAIAACngAA/hsIAAh4IBXAAIAAB4g");
	this.shape_3.setTransform(31.3,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B89462").s().p("ADqGSIAAgaIBqAAIACAAQAGAAAFAFQAFAEAAAGIAAALgAllGSIAAgLQAAgGAFgEQAFgFAGAAIACAAIGHAAIAAAagABPF4IAAlhIB/AAIAAFhgABdFcIBigCIACh7IhlAAgABdCnIBigCIACh7IhlgBgABhFYIABh0IBaAAIADB2gABhCjIABh0IBagBIADB3gAAAlzIlTFOIAAghIFTlLIFUFLIAAAhg");
	this.shape_4.setTransform(41.9,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#533413").s().p("AA9F3IAAgHIAAgZIALAAIAAAIIAQAAIAAgIIB/AAIAAAIIAQAAIAAgIIAMAAIAAAZIAAAHgAjyl2IBGAAIAAAiIhGBGg");
	this.shape_5.setTransform(41,67.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#674621").s().p("ADOG1IAAgIIAAlhIh/AAIAAFhIAAAIIgQAAIAAgIIAAlyICfAAIAAFyIAAAIgAkQExIAAjIIEkAAIAADIgAh1EgIB4AAIAAinIh4AAgAkAEgIB6AAIAAinIh6AAgAFVgQIgBgBIlUlLIlTFLIgBABIhOAAICnioIBGhGIC1i2IGjGkgAg2glIAAiPIBtAAIAACPgAgrgwIBXAAIAAh4IhXAAgAi1kgIhGAAIgBAAQgHAAgFgEQgEgFAAgHIAAgbQAAgGAEgFQAFgFAHAAIBJAAQAHAAAFAFQAEAFAAAGIAAAbQAAAHgEAFQgFAEgHAAg");
	this.shape_6.setTransform(41.9,58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialHouse_mc, rect = new cjs.Rectangle(0,0,83.9,104.8), [rect]);


(lib.tutorialBubbleHit2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_2
	this.instance = new lib.tutorialHouse_mc();
	this.instance.parent = this;
	this.instance.setTransform(62.2,53.1,1,1,0,0,0,41.9,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:62.4,y:7.2},14,cjs.Ease.get(1)).to({x:62.2,y:53.1},15,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.bubbleColorChange = new lib.tutorial_bubbleHitColor_mc();
	this.bubbleColorChange.name = "bubbleColorChange";
	this.bubbleColorChange.parent = this;
	this.bubbleColorChange.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.bubbleColorChange).to({y:16.4},14,cjs.Ease.get(1)).to({y:62.4},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,126.8,126.7);
p.frameBounds = [rect, new cjs.Rectangle(-1,-7.3,126.8,126.7), new cjs.Rectangle(-1,-13.2,126.8,126.7), new cjs.Rectangle(-1,-18.6,126.8,126.7), new cjs.Rectangle(-1,-23.5,126.8,126.7), new cjs.Rectangle(-1,-28,126.8,126.7), new cjs.Rectangle(-1,-32,126.8,126.7), new cjs.Rectangle(-1,-35.5,126.8,126.7), new cjs.Rectangle(-1,-38.5,126.8,126.7), new cjs.Rectangle(-1,-41.1,126.8,126.7), new cjs.Rectangle(-1,-43.2,126.8,126.7), new cjs.Rectangle(-1,-44.9,126.8,126.7), new cjs.Rectangle(-1,-46,126.8,126.7), new cjs.Rectangle(-1,-46.7,126.8,126.7), new cjs.Rectangle(-1,-47,126.8,126.7), new cjs.Rectangle(-1,-46.8,126.8,126.7), new cjs.Rectangle(-1,-46.2,126.8,126.7), new cjs.Rectangle(-1,-45.1,126.8,126.7), new cjs.Rectangle(-1,-43.7,126.8,126.7), new cjs.Rectangle(-1,-41.9,126.8,126.7), new cjs.Rectangle(-1,-39.6,126.8,126.7), new cjs.Rectangle(-1,-37,126.8,126.7), new cjs.Rectangle(-1,-33.9,126.8,126.7), new cjs.Rectangle(-1,-30.4,126.8,126.7), new cjs.Rectangle(-1,-26.5,126.8,126.7), new cjs.Rectangle(-1,-22.2,126.8,126.7), new cjs.Rectangle(-1,-17.5,126.8,126.7), new cjs.Rectangle(-1,-12.4,126.8,126.7), new cjs.Rectangle(-1,-6.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7)];


(lib.tutorialBubbleHit1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer_6
	this.instance = new lib.tutorialHouseText_mc();
	this.instance.parent = this;
	this.instance.setTransform(61.9,60.5,1,1,0,0,0,52,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:62.4,y:14.9},14,cjs.Ease.get(1)).to({x:61.9,y:60.5},15,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.bubbleColorChange = new lib.tutorial_bubbleHitColor_mc();
	this.bubbleColorChange.name = "bubbleColorChange";
	this.bubbleColorChange.parent = this;
	this.bubbleColorChange.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.bubbleColorChange).to({y:16.4},14,cjs.Ease.get(1)).to({y:62.4},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,126.8,126.7);
p.frameBounds = [rect, new cjs.Rectangle(-1,-7.3,126.8,126.7), new cjs.Rectangle(-1,-13.2,126.8,126.7), new cjs.Rectangle(-1,-18.6,126.8,126.7), new cjs.Rectangle(-1,-23.5,126.8,126.7), new cjs.Rectangle(-1,-28,126.8,126.7), new cjs.Rectangle(-1,-32,126.8,126.7), new cjs.Rectangle(-1,-35.5,126.8,126.7), new cjs.Rectangle(-1,-38.5,126.8,126.7), new cjs.Rectangle(-1,-41.1,126.8,126.7), new cjs.Rectangle(-1,-43.2,126.8,126.7), new cjs.Rectangle(-1,-44.9,126.8,126.7), new cjs.Rectangle(-1,-46,126.8,126.7), new cjs.Rectangle(-1,-46.7,126.8,126.7), new cjs.Rectangle(-1,-47,126.8,126.7), new cjs.Rectangle(-1,-46.8,126.8,126.7), new cjs.Rectangle(-1,-46.2,126.8,126.7), new cjs.Rectangle(-1,-45.1,126.8,126.7), new cjs.Rectangle(-1,-43.7,126.8,126.7), new cjs.Rectangle(-1,-41.9,126.8,126.7), new cjs.Rectangle(-1,-39.6,126.8,126.7), new cjs.Rectangle(-1,-37,126.8,126.7), new cjs.Rectangle(-1,-33.9,126.8,126.7), new cjs.Rectangle(-1,-30.4,126.8,126.7), new cjs.Rectangle(-1,-26.5,126.8,126.7), new cjs.Rectangle(-1,-22.2,126.8,126.7), new cjs.Rectangle(-1,-17.5,126.8,126.7), new cjs.Rectangle(-1,-12.4,126.8,126.7), new cjs.Rectangle(-1,-6.9,126.8,126.7), new cjs.Rectangle(-1,-1,126.8,126.7)];


(lib.tutorialBubble2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.bubbleHit = new lib.tutorialBubbleHit2_mc();
	this.bubbleHit.name = "bubbleHit";
	this.bubbleHit.parent = this;
	this.bubbleHit.setTransform(0.1,0.1,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.bubbleHit).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialBubble2_mc, rect = new cjs.Rectangle(-63.3,-63.3,126.8,126.7), [rect]);


(lib.tutorialBubble1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.bubbleHit = new lib.tutorialBubbleHit1_mc();
	this.bubbleHit.name = "bubbleHit";
	this.bubbleHit.parent = this;
	this.bubbleHit.setTransform(0.1,0.1,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.bubbleHit).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialBubble1_mc, rect = new cjs.Rectangle(-63.3,-63.3,126.8,126.7), [rect]);


(lib.tutorial_upperBody_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tutorial_upperHand_mc();
	this.instance.parent = this;
	this.instance.setTransform(20.7,37.1,1,1,0.8,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.1,regY:2.5,rotation:-14,x:20.5},7).to({regX:5,regY:2.4,rotation:0.8,x:20.7},8).to({rotation:33.7,x:20.8,y:37.3},8).to({rotation:0.8,x:20.7,y:37.1},8).wait(1));

	// tailBottomShirt
	this.instance_1 = new lib.tutorial_tailBottomShirt_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,54.5,1,1,-4.2,0,0,10.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	// Layer_3
	this.tail = new lib.tutorial_tailAnim_mc();
	this.tail.name = "tail";
	this.tail.parent = this;
	this.tail.setTransform(28.5,58.1,1,1,-9.3,0,0,19.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(32));

	// headHandTopShirt
	this.instance_2 = new lib.tutorial_headHandTopShirt_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.2,54.6,1,1,-3.7,0,0,19.1,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.4,x:19.3},7).to({rotation:-3.7,x:19.2},8).to({rotation:-6.4,x:19.3},8).to({rotation:-3.7,x:19.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.4,-3.7,49.1,89.5);
p.frameBounds = [rect, new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.9,-2.9,47.4,87.6), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.4,-3,47.9,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-0.4,-4.7,51.3,90.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.4,-3.7,49.1,89.5), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(0.6,-3,47.7,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.3,-3.1,48,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-1,-4.7,51.9,90.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.4,-3.7,49.1,89.5)];


(lib.tutorial_teleportRotationFox_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_foxBallJump3_mccopy();
	this.instance.parent = this;
	this.instance.setTransform(41.8,70.1,1,1,0,0,0,41.8,70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},14,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.1,44.4,60.2,70);
p.frameBounds = [rect, new cjs.Rectangle(14.7,44.4,51.6,69.5), new cjs.Rectangle(13.2,44.2,53.1,69.1), new cjs.Rectangle(11,44,55.9,67.3), new cjs.Rectangle(8.5,43.7,59.6,63.1), new cjs.Rectangle(6.4,43.5,61.7,55), new cjs.Rectangle(0.4,43.1,66.6,51.6), new cjs.Rectangle(-2.1,43,69.6,51.6), new cjs.Rectangle(4.2,37.1,63.9,59.1), new cjs.Rectangle(17.1,31,51.5,65.1), new cjs.Rectangle(17.3,26.4,52,69.4), new cjs.Rectangle(15.3,39.5,61.4,57.1), new cjs.Rectangle(16.3,45.6,69.5,51.6), new cjs.Rectangle(15.3,43.6,58,61.1), new cjs.Rectangle(6.1,44.4,60.2,70)];


(lib.tutorial_TeleportFoxShrink_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Layer_1
	this.instance = new lib.tutorial_teleportRotationFox_mc();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,38.6,1.002,0.999,0,0,0,35.9,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.8,regY:79.4,scaleX:0.05,scaleY:0.05,alpha:0.199},13,cjs.Ease.get(-1)).to({_off:true},1).wait(1).to({_off:false,x:1.4,y:-395.3},0).to({regX:35.9,regY:79.1,scaleX:1,scaleY:1,x:-0.7,y:-383.5,alpha:1},14,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.6,4,60.3,69.9);
p.frameBounds = [rect, new cjs.Rectangle(-21.8,4.2,51.4,69.1), new cjs.Rectangle(-21.5,4.8,50.5,67.9), new cjs.Rectangle(-20.8,5.8,49,66), new cjs.Rectangle(-20,7.1,47,63.3), new cjs.Rectangle(-19,8.9,44.4,59.7), new cjs.Rectangle(-17.7,11.1,41.2,55.4), new cjs.Rectangle(-16.1,13.6,37.3,50.3), new cjs.Rectangle(-14.3,16.5,33,44.4), new cjs.Rectangle(-12.2,19.9,28.1,37.7), new cjs.Rectangle(-10,23.4,22.5,30.3), new cjs.Rectangle(-7.5,27.5,16.4,22), new cjs.Rectangle(-4.7,32.1,9.7,13), new cjs.Rectangle(-2.1,36.9,2.8,3.2), null, new cjs.Rectangle(0,-396.9,2.8,3.3), new cjs.Rectangle(-2.7,-399.8,9.2,12.4), new cjs.Rectangle(-5.4,-402.5,15.5,20.8), new cjs.Rectangle(-8.1,-405.2,21.2,28.6), new cjs.Rectangle(-10.5,-407.4,26.5,35.8), new cjs.Rectangle(-12.6,-409.6,31.3,42.1), new cjs.Rectangle(-14.6,-411.4,35.6,47.9), new cjs.Rectangle(-16.3,-413,39.4,53), new cjs.Rectangle(-17.8,-414.4,42.6,57.3), new cjs.Rectangle(-19,-415.6,45.4,61), new cjs.Rectangle(-20.1,-416.6,47.6,64.1), new cjs.Rectangle(-20.8,-417.4,49.4,66.5), new cjs.Rectangle(-21.4,-417.9,50.6,68.1), new cjs.Rectangle(-21.8,-418.2,51.4,69.2), new cjs.Rectangle(-30.6,-418.1,60.3,69.9), null];


(lib.tutorial_TeleportFox_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.teleportFoxAnim = new lib.tutorial_TeleportFoxShrink_mc();
	this.teleportFoxAnim.name = "teleportFoxAnim";
	this.teleportFoxAnim.parent = this;
	this.teleportFoxAnim.setTransform(-2.2,21.7,0.916,0.916,0,0,0,-0.5,38.8);

	this.timeline.addTween(cjs.Tween.get(this.teleportFoxAnim).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_TeleportFox_mc, rect = new cjs.Rectangle(-29.7,-10.1,55.1,64), [rect]);


(lib.tutorial_foxBodyAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// torso
	this.upperBody = new lib.tutorial_upperBody_mc();
	this.upperBody.name = "upperBody";
	this.upperBody.parent = this;
	this.upperBody.setTransform(-0.8,0.1,1,1,-2.8,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.upperBody).wait(1));

	// upperLeg
	this.legAbove = new lib.tutorial_legAbove_mc();
	this.legAbove.name = "legAbove";
	this.legAbove.parent = this;
	this.legAbove.setTransform(23.4,61,1,1,2.8,0,0,9.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.legAbove).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B67E5F").s().p("AA+CNQgSgDgPgIIgNgFQgjhFgfhRQgVg2gRg9QA1AYBCATQBAA5gGBHIgXBuIgEAAg");
	this.shape.setTransform(27.4,69.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// underLeg
	this.legUnder = new lib.tutorial_legUnder_mc();
	this.legUnder.name = "legUnder";
	this.legUnder.parent = this;
	this.legUnder.setTransform(23.4,61,1,1,2.8,0,0,9.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.legUnder).wait(1));

	// underHand
	this.instance = new lib.tutorial_underHandAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(6.3,5.6,1,1,-2.8,0,0,10.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_foxBodyAnimation, rect = new cjs.Rectangle(1.4,-5.8,51.5,107.7), [rect]);


(lib.upperBody_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.upperHand_mc();
	this.instance.parent = this;
	this.instance.setTransform(20.7,37.1,1,1,0.8,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.1,regY:2.5,rotation:-14,x:20.5},7).to({regX:5,regY:2.4,rotation:0.8,x:20.7},8).to({rotation:33.7,x:20.8,y:37.3},8).to({rotation:0.8,x:20.7,y:37.1},8).wait(1));

	// tailBottomShirt
	this.instance_1 = new lib.tailBottomShirt_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,54.5,1,1,-4.2,0,0,10.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	// Layer_3
	this.instance_2 = new lib.tailAnim_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.5,58.1,1,1,-9.3,0,0,19.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32));

	// headHandTopShirt
	this.instance_3 = new lib.headHandTopShirt_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.2,54.6,1,1,-3.7,0,0,19.1,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.4,x:19.3},7).to({rotation:-3.7,x:19.2},8).to({rotation:-6.4,x:19.3},8).to({rotation:-3.7,x:19.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,-3.7,48.7,89.5);
p.frameBounds = [rect, new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.9,-2.9,47.4,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.3,-3,48,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-0.3,-4.7,51.2,90.6), new cjs.Rectangle(0,-3.1,48.3,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.8,-3.7,48.7,89.5), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(0.6,-3,47.7,87.6), new cjs.Rectangle(0.4,-3,47.9,87.6), new cjs.Rectangle(0.3,-3.1,48,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-1,-4.7,51.9,90.6), new cjs.Rectangle(0,-3.1,48.3,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.8,-3.7,48.7,89.5)];


(lib.teleportRotationFox_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foxBallJump3_mccopy();
	this.instance.parent = this;
	this.instance.setTransform(41.8,70.1,1,1,0,0,0,41.8,70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},14,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.1,44.4,60.2,70);
p.frameBounds = [rect, new cjs.Rectangle(14.7,44.4,51.6,69.5), new cjs.Rectangle(13.2,44.2,53.1,69.1), new cjs.Rectangle(11,44,55.9,67.3), new cjs.Rectangle(8.5,43.7,59.6,63.1), new cjs.Rectangle(6.4,43.5,61.7,55), new cjs.Rectangle(0.4,43.1,66.6,51.6), new cjs.Rectangle(-2.1,43,69.6,51.6), new cjs.Rectangle(4.2,37.1,63.9,59.1), new cjs.Rectangle(17.1,31,51.5,65.1), new cjs.Rectangle(17.3,26.4,52,69.4), new cjs.Rectangle(15.3,39.5,61.4,57.1), new cjs.Rectangle(16.3,45.6,69.5,51.6), new cjs.Rectangle(15.3,43.6,58,61.1), new cjs.Rectangle(6.1,44.4,60.2,70)];


(lib.teleportFoxShrink_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.teleportRotationFox_mc();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,38.6,1.002,0.999,0,0,0,35.9,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.8,regY:79.4,scaleX:0.05,scaleY:0.05,alpha:0.199},13,cjs.Ease.get(-1)).to({_off:true},1).wait(1).to({_off:false},0).to({regX:35.9,regY:79.1,scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.6,4,60.3,69.9);
p.frameBounds = [rect, new cjs.Rectangle(-21.8,4.2,51.4,69.1), new cjs.Rectangle(-21.5,4.8,50.5,67.9), new cjs.Rectangle(-20.8,5.8,49,66), new cjs.Rectangle(-20,7.1,47,63.3), new cjs.Rectangle(-19,8.9,44.4,59.7), new cjs.Rectangle(-17.7,11.1,41.2,55.4), new cjs.Rectangle(-16.1,13.6,37.3,50.3), new cjs.Rectangle(-14.3,16.5,33,44.4), new cjs.Rectangle(-12.2,19.9,28.1,37.7), new cjs.Rectangle(-10,23.4,22.5,30.3), new cjs.Rectangle(-7.5,27.5,16.4,22), new cjs.Rectangle(-4.7,32.1,9.7,13), new cjs.Rectangle(-2.1,36.9,2.8,3.2), null, new cjs.Rectangle(-2.1,36.9,2.8,3.2), new cjs.Rectangle(-4.5,32.4,9.1,12.4), new cjs.Rectangle(-7,28.1,15.5,20.7), new cjs.Rectangle(-9.4,24.1,21.2,28.6), new cjs.Rectangle(-11.6,20.7,26.5,35.7), new cjs.Rectangle(-13.5,17.5,31.3,42.1), new cjs.Rectangle(-15.3,14.6,35.6,47.8), new cjs.Rectangle(-16.9,12,39.3,53), new cjs.Rectangle(-18.2,9.8,42.6,57.3), new cjs.Rectangle(-19.3,8,45.4,61), new cjs.Rectangle(-20.2,6.5,47.6,64.1), new cjs.Rectangle(-20.9,5.2,49.3,66.5), new cjs.Rectangle(-21.5,4.4,50.6,68.1), new cjs.Rectangle(-21.8,3.9,51.4,69.1), new cjs.Rectangle(-30.6,4,60.3,69.9)];


(lib.teleportFox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.teleportFoxShrink_mc();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,21.7,0.916,0.916,0,0,0,-0.5,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.teleportFox, rect = new cjs.Rectangle(-29.7,-10.1,55.1,64), [rect]);


(lib.foxBodyAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// torso
	this.instance = new lib.upperBody_mc();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0.1,1,1,-2.8,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// upperLeg
	this.instance_1 = new lib.legAbove_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.4,61,1,1,2.8,0,0,9.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B67E5F").s().p("AA+CNQgSgDgPgIIgNgFQgjhFgfhRQgVg2gRg9QA1AYBCATQBAA5gGBHIgXBuIgEAAg");
	this.shape.setTransform(27.4,69.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// underLeg
	this.instance_2 = new lib.legUnder_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.4,61,1,1,2.8,0,0,9.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// underHand
	this.instance_3 = new lib.underHandAnim_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.3,5.6,1,1,-2.8,0,0,10.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.foxBodyAnimation, rect = new cjs.Rectangle(1.5,-5.8,51.3,107.7), [rect]);


(lib.DiagnosticFeedback_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("ההתאמות שלא הצלחת בניסיון ראשון*", "bold 25px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 945;
	this.text.parent = this;
	this.text.setTransform(1.6,-113.5,1.006,1);

	this.text_1 = new cjs.Text(":ההתאמות שלך", "bold 28px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 945;
	this.text_1.parent = this;
	this.text_1.setTransform(1.6,-148.8,1.006,1);

	this.grade = new cjs.Text("ןויצ", "bold 28px 'Arial'");
	this.grade.name = "grade";
	this.grade.textAlign = "right";
	this.grade.lineHeight = 33;
	this.grade.lineWidth = 50;
	this.grade.parent = this;
	this.grade.setTransform(-2,-210.7);

	this.text_2 = new cjs.Text(":ציון", "25px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 50;
	this.text_2.parent = this;
	this.text_2.setTransform(27,-208.7);

	this.gameName = new cjs.Text("קחשמה םש", "35px 'Arial'");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 41;
	this.gameName.lineWidth = 951;
	this.gameName.parent = this;
	this.gameName.setTransform(1.6,-265);

	this.text_3 = new cjs.Text("סיימת את המשחק", "30px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 36;
	this.text_3.lineWidth = 951;
	this.text_3.parent = this;
	this.text_3.setTransform(1.6,-302.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.gameName},{t:this.text_2},{t:this.grade},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_5
	this.backToStartBtn = new lib.backToChooseGame_btn();
	this.backToStartBtn.name = "backToStartBtn";
	this.backToStartBtn.parent = this;
	this.backToStartBtn.setTransform(-384.8,-199.9);
	new cjs.ButtonHelper(this.backToStartBtn, 0, 1, 2);

	this.restartGameBtn = new lib.restartThisGame_btn();
	this.restartGameBtn.name = "restartGameBtn";
	this.restartGameBtn.parent = this;
	this.restartGameBtn.setTransform(-314.8,-227.6,1,1,0,0,0,70,19.5);
	new cjs.ButtonHelper(this.restartGameBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.restartGameBtn},{t:this.backToStartBtn}]}).wait(1));

	// Layer_4
	this.upBtn = new lib.feedback_btn();
	this.upBtn.name = "upBtn";
	this.upBtn.parent = this;
	this.upBtn.setTransform(395.2,36,1,1,180);
	new cjs.ButtonHelper(this.upBtn, 0, 1, 2);

	this.downBtn = new lib.feedback_btn();
	this.downBtn.name = "downBtn";
	this.downBtn.parent = this;
	this.downBtn.setTransform(395.2,178.1);
	new cjs.ButtonHelper(this.downBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.downBtn},{t:this.upBtn}]}).wait(1));

	// Layer_3
	this.bubbleList = new lib.bubbleDiagnosticList_mc();
	this.bubbleList.name = "bubbleList";
	this.bubbleList.parent = this;
	this.bubbleList.setTransform(-7.4,227.5,1,1,0,0,0,-7.4,271.6);

	this.timeline.addTween(cjs.Tween.get(this.bubbleList).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE3BE").s().p("EhK/AwbMAAAhg1MCV/AAAMAAABg1g");
	this.shape.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.DiagnosticFeedback_mc, rect = new cjs.Rectangle(-480,-324.8,960.1,619.9), [rect]);


(lib.tutorial_foxWalking_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.foxMove = new lib.tutorial_foxBodyAnimation();
	this.foxMove.name = "foxMove";
	this.foxMove.parent = this;
	this.foxMove.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.foxMove).to({y:2.4},5).wait(2).to({y:3.7},3).to({y:0.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.4,-4.9,51.5,107.7);
p.frameBounds = [rect, new cjs.Rectangle(1.5,-3.2,49.9,105.5), new cjs.Rectangle(1.5,-2.9,49.9,105.5), new cjs.Rectangle(1.5,-2.6,49.9,105.5), new cjs.Rectangle(1.5,-2.3,49.9,105.5), rect=new cjs.Rectangle(1.4,-3.4,51.5,107.7), rect, rect, new cjs.Rectangle(1.5,-1.5,49.9,105.5), new cjs.Rectangle(1.5,-1.1,49.9,105.5), new cjs.Rectangle(1.4,-2.1,51.5,107.7), new cjs.Rectangle(1.5,-1.2,49.9,105.5), new cjs.Rectangle(1.5,-1.8,49.9,105.5), new cjs.Rectangle(1.5,-2.3,49.9,105.5), new cjs.Rectangle(1.5,-2.9,49.9,105.5), new cjs.Rectangle(1.4,-4.9,51.5,107.7)];


(lib.foxWalking_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foxBodyAnimation();
	this.instance.parent = this;
	this.instance.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.4},5).wait(2).to({y:3.7},3).to({y:0.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,-4.9,51.3,107.7);
p.frameBounds = [rect, new cjs.Rectangle(1.5,-3.2,50,105.5), new cjs.Rectangle(1.5,-2.9,50,105.5), new cjs.Rectangle(1.5,-2.6,50,105.5), new cjs.Rectangle(1.5,-2.3,50,105.5), rect=new cjs.Rectangle(1.5,-3.4,51.3,107.7), rect, rect, new cjs.Rectangle(1.5,-1.5,50,105.5), new cjs.Rectangle(1.5,-1.1,50,105.5), new cjs.Rectangle(1.5,-2.1,51.3,107.7), new cjs.Rectangle(1.5,-1.2,50,105.5), new cjs.Rectangle(1.5,-1.8,50,105.5), new cjs.Rectangle(1.5,-2.3,50,105.5), new cjs.Rectangle(1.5,-2.9,50,105.5), new cjs.Rectangle(1.5,-4.9,51.3,107.7)];


(lib.fox3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A999").s().p("AiOClQAAgFADgDIArgpQADgDAEAAIAFABIgBABQgDADAAAEQAAAEADADIACABIgdAeIgCgDQgDgDgEAAQgEAAgDADIgNAMIgBgEgAg6BQQAAgFADgDIAogsQACgEAEAAQAEAAACACIAAAAQgDAEAAAEQAAAEADADIACABIgbAeIgBgCQgDgCgEAAQgEAAgDADIgNAOQgCgCAAgDgAAUgKQAAgEACgEIAlgvQADgDAEgBQAEAAADACIgCACQgCADAAAEQABAFADACIAAAAIgYAgIgBAAQgDgDgEABQgEAAgDADIgLAOQgCgDgBgDgABdhqQAAgEACgEIAhgxQACgEAEgBQAEgBAEADIgCADQgDAEABAEQABAEAEACIAAAAIgWAiIgBgBQgDgCgEABQgEABgDADIgJANQgDgCgBgEg");
	this.shape.setTransform(21.9,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEBBA9").s().p("AitDZQgEAAgDgDQgCgDAAgEQAAgEADgDIAfgcIANgMQADgDAEAAQAEAAADADIACACIABAFQAAAEgDADIgsApQgDACgEAAIgBAAgAhaCFIgCgBQgDgDAAgFQAAgEADgDIABAAIAcgdIANgOQADgEAEAAQAEAAADADIABACQACACAAADQABAEgDADIgqAsQgDADgFAAIAAAAIgFgBgAgIAsIgBgBQgDgDgBgEQAAgEADgDIABgBIAZgdIAMgOQACgDAEgBQAFAAADADIAAAAQADACAAAEQABAEgDAEIgnAtQgDADgDAAIgBAAQgDAAgCgCgABDgwIgBAAQgDgDgBgEQAAgEACgDIACgCIAYghIAKgNQACgEAEAAQAEgBAEACIAAAAQADADABAEQAAAEgCADQgRAZgTAYQgCADgEABIgCAAQgDAAgCgCgACIiSIAAAAQgDgDgBgEQgBgEACgDIACgEIAdgvQACgEAEgBQAEgBAEACQAEACABAEQABAEgCAEQgPAagRAaQgCADgFABIgCAAQgCAAgDgBg");
	this.shape_1.setTransform(22.6,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(3));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AEA1").s().p("Ai9ALQiBgwEHAAQCCgBCeAKQg2AchQAUQhIAShAAAQhRAAhHgbg");
	this.shape_2.setTransform(22.4,28.2,0.127,0.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#553334").s().p("AhSAqQgkgOAAgWQgCgVAjgSQAigRAygDQAwgCAjAOQAkAOABAWQABAVghASQgjARgyACIgNABQgoAAgfgMg");
	this.shape_3.setTransform(22.4,23.8,0.127,0.127);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AEA1").s().p("AAyB/QghgFgjgYQgigXgXgeQgWgXgRgaQgVghgEgXIgCgLQABgUAGgIQAFgHAMgDQASgLAkgEQATgCAgAAQBAgCASACQA0AGANAhQAHAQgBAYQAAANgFAcQgFAjgJAeQgFAbgMARQgDAGgHAFQgNAOgVAAIgLgBg");
	this.shape_4.setTransform(31.6,3.2,0.127,0.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AEA1").s().p("AheByQgGgEgEgHQgNgUgEgYQgIgXgHgqQgEggAAgJQgCgYAHgQQAOghA0gGQASgCA/ACIA0ACQAjADATALQAMAFAFAGQAFAIABAUIgCALQgDAXgVAhQgRAagWAXQgXAegiAXQgjAYghAFIgLABQgUAAgOgOg");
	this.shape_5.setTransform(9.5,5.7,0.127,0.127);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#543B3F").s().p("AB0AkQgihVAIhdQh7A+i3AMQBRg5BLgbQBQgeBBABQAUgDASAEQAhABARAfIABAAIAGANIAHAXQAEAOAAANIADAbQASBsAFCFQhDg+gihVg");
	this.shape_6.setTransform(32.4,1.6,0.127,0.127);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#543B3F").s().p("AjABTQgThnABg6QAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQABgeAGgVQAEgMAGgHIAAgCQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQALgLAOAAQBVgkCBAaQBZARBHAcQhTAlhbAMQhaANhagMQAKBDgHBCQgHBGgZA+g");
	this.shape_7.setTransform(9.1,4.7,0.127,0.127);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AEA1").s().p("AhSAYQghgJgBgPQABgNAhgKQAjgLAvABQAwgBAjALQAhAKAAANQAAAPghAJQgjALgwAAQgvAAgjgLg");
	this.shape_8.setTransform(12.7,23,0.127,0.127);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7AEA1").s().p("AhRAZQgigKAAgPQAAgNAigLQAigKAvAAQAwAAAiAKQAiALAAANQAAAPgiAKQgiAKgwAAQgvAAgigKg");
	this.shape_9.setTransform(31.6,22.2,0.127,0.127);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#553334").s().p("AggBJQgOgeAAgrQAAgqAOgeQANgfATAAQAUAAAOAfQANAeAAAqQAAArgNAeQgOAfgUAAQgTAAgNgfg");
	this.shape_10.setTransform(29.9,19.2,0.127,0.127);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#553334").s().p("AggBJQgOgeAAgrQAAgqAOgeQAOgfASAAQAUAAAOAfQANAeAAAqQAAArgNAeQgOAfgUAAQgSAAgOgfg");
	this.shape_11.setTransform(13.9,20.1,0.127,0.127);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4864F").s().p("ABZNWQgRhsgFgUQgGgdgniBQgghsgjhKQgthfg8hCQhFhMhegpQhdgphogBQidgCjPBzQhBAkg+AsIgxAkQgfm3gThhIgUhnQgUhoABg6QAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABgeAGgVQAEgMAHgHIAAgCQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQALgLAOAAQBVgkCBAaQBZARBIAcQAzAUAuAaIASgJQA5gbBOgYQAqgNBhgaQDUg4BlgTQCegeCEAHQCcAJB9A9IArgkQAugmAuggQBQg4BMgcQBRgdBBAAQATgDATAFQAgAAASAfIABAAIAGAOIAGAXQAEANABAOIADAaQARBtAFCGIAPLbQhDgphXgqQiuhUhigFQhfgFhiAtQhQAlhXBLQhqBahECbQhOCyAADRQAAAGgGABIgBAAQgFAAgBgFg");
	this.shape_12.setTransform(20.9,10.2,0.127,0.127);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCD6AF").s().p("AkTSxQkYg6kPikQj3iVjajgIgGgGIgCgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAegiAPgWQAXggAOgfQATgsANgyQAIgdAGgdQA9ksgclYQgMiOgmi+IgMhAQgUhoABg6QAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgeAGgVQAEgMAHgHIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQALgLAOAAQBVgkCBAaQCdAfBlA8QA8gfBTgaQAvgPBmgbQDUg4BlgTQCegeCEAHQCcAJB9A9QBUhHA2glQBPg2BKgcQBRgdBBAAQATgDATAFQAgAAASAfIABAAIAGAOIAGAXQAEANABAOIADAaQAUB/ADCgQADBygFDmQgBDPARCJQAVCqA2CIQApBoBMBoIAkAvQAEgDAEAFQAEAFgEAFQiMCuhLBVQh9CMh0BhQjyDJkXA/QiRAhiWAAQiUAAiaggg");
	this.shape_13.setTransform(21.9,14.9,0.127,0.127);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAB35D").s().p("AiRBeQkjgLjUhUQhDgbgygfIgmgZIK3AsQGhgxHvgFQhJAChmAfIjSBEQkPBYjxAAIg0gBg");
	this.shape_14.setTransform(23.1,32.5,0.127,0.127);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC768").s().p("AyBTLQApudC8tnQA8kQBCjrIA3i0IEwAgQFJAfB2AAQB5AAFQgfQCogQCQgQICLMVQCcOhBRLFQidA+tOASQj6AGjZAAQn7AAlJgeg");
	this.shape_15.setTransform(22,47.3,0.127,0.127);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F4040").s().p("AoYC+IAKgrQGFBdEGgsQB1gUA6gtQA7gugNg+Qgbh7ihhdQgygeg8gXIgzgTQCHAFB0A3QB7A7A/BjQAgAyAjBMQAyBugUAVQgVAXiFAQQiDAQirABIgkAAQmQAAivhMg");
	this.shape_16.setTransform(8.4,98.8,0.127,0.127);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6D6E").s().p("AhEAeQgcgMAAgSQAAgRAcgMQAdgNAnAAQAoAAAcANQAdAMAAARQAAASgdAMQgcANgoAAQgnAAgdgNg");
	this.shape_17.setTransform(5.3,97.7,0.127,0.127);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4B4C4C").s().p("AoYC/QAOhJAdhJQAghNAog5QBDheB6guQBxgrCEAIQCDAIBvA3QB2A7A9BgQAgAyAjBLQAyBugUAWQgVAWiFAQQiDAQirABIgkAAQmQAAivhLg");
	this.shape_18.setTransform(8.4,98.8,0.127,0.127);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F4040").s().p("AhKEKQirgBiDgQQiFgQgVgXQgUgVAyhuQAjhMAggyQA/hjB7g7QB0g3CHgFQhQAZhRAvQihBdgbB7QgNA+A7AuQA6AtB1AUQEGAsGFhdIAKArQivBMmQAAIgkAAg");
	this.shape_19.setTransform(36.9,98.8,0.127,0.127);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6D6E").s().p("AhEAeQgcgMAAgSQAAgRAcgMQAcgNAoAAQAoAAAcANQAdAMAAARQAAASgdAMQgcANgoAAQgoAAgcgNg");
	this.shape_20.setTransform(40.1,97.7,0.127,0.127);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B4C4C").s().p("AhKEKQirgBiDgQQiFgQgVgWQgUgWAyhuQAjhLAggyQA9hgB2g7QBvg3CDgIQCEgIBxArQB6AuBDBeQAoA5AgBNQAdBJAOBJQivBLmQAAIgkAAg");
	this.shape_21.setTransform(36.9,98.8,0.127,0.127);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAB35D").s().p("AkdnXIFOgMIBGBOQBXBnBQCAQhSgEg8AYQhPAggjBPQg8CJBYCxQAmBLA3A1QA3A1A3ALQiIANirAFIiSADg");
	this.shape_22.setTransform(34.1,37.3,0.127,0.127);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEC768").s().p("AmlnXIFPgMIA1A5QBABLBBBeQDOEqB4FwQh0AvlIASIkyAKg");
	this.shape_23.setTransform(35.8,37.3,0.127,0.127);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4864F").s().p("AiQPOQg+iCAAjnQAAgTgDgpIADgBIAFBDQAIBQAQBFQAzDaBuASQB9AUBnhTQBchKA4iOQAwh5gXkMQgUjngviTQhFjdhRilQiEkNh+ghQh7ghhFgNIgtgGIg5AEIguktICKgUIFygQQBSELBJEWQB/HjAvFIQA6GahVDfQhIC9irArQgqAKglAAQiGAAhEiOg");
	this.shape_24.setTransform(38.1,54.9,0.127,0.127);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4854E").s().p("AhSBaQgqhHAYhVIAUBQQAfBQA0AAQAzAAAUh5IALh7IALAsQALA1ACAtQAHCQhZANIgRACQg3AAglg9g");
	this.shape_25.setTransform(39.1,62.6,0.127,0.127);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCDAB9").s().p("AiQPfQg+iCAAjnQAAiShwsTIhwr3IHxhGICLHcQCVIlA0FtQA6GahVDfQhIC9irArQgqAKglAAQiGAAhEiOg");
	this.shape_26.setTransform(38.1,54.7,0.127,0.127);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAB35D").s().p("AAwHhQisgFiIgNQA3gLA4g1QA2g1AmhLQBYixg8iJQgkhPhPggQg7gYhSAEQBRiABVhnQAsg0AbgaIFOAMIhdO7Qg7AAhWgDg");
	this.shape_27.setTransform(9.6,37.3,0.127,0.127);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC768").s().p("AAXHaQlHgSh1gvQB4lwDPkqQBmiWBPhMIFPAMIheO7QiNAAikgKg");
	this.shape_28.setTransform(7.9,37.3,0.127,0.127);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4864F").s().p("AiIRRQirgrhIi9QhVjeA7mbQAvlJB+nhQBNklBPj8IFxAQICKATIgtEuIg5gFQgKAAgjAHQhGANh7AgQh9AiiFENQhQCkhGDeQgvCTgTDmQgYENAwB4QA5COBcBKQBmBTB9gUQBugRA0jbQAQhEAIhRIAFhCIACAAQgCApAAATQAADog+CCQhECOiHAAQglAAgqgLg");
	this.shape_29.setTransform(5.5,55,0.127,0.127);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4854E").s().p("AgaCVQhZgNAHiQQACgtALg1IALgsIAKB7QAVB5AyAAQA1AAAfhQQAJgYAHgfIAEgZQAYBVgrBHQgkA9g4AAIgQgCg");
	this.shape_30.setTransform(4.6,62.6,0.127,0.127);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCDAB9").s().p("AiIRjQirgshIi8QhVjfA7maQA0ltCVolICKncIHxBGIhwL3QhvMTAACSQAADng+CCQhECOiHAAQglAAgqgKg");
	this.shape_31.setTransform(5.6,54.7,0.127,0.127);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#774631").s().p("AggAwQiigChTggQhXggAKgUQAEgHAQgCQAPgCAOAEICCAdQCaAaBzgNQCegUAegBQAxgDATATQAUATgvARQgwAQhRAAQhuAFhNAAIgngBg");
	this.shape_32.setTransform(21.8,66.4,0.127,0.127);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#774631").s().p("AkXY0QAAhLgUidQBgiBBkhUQCFhvCCgVQAkhUgdpjQgbpDg3ngQidhsigl7Qgyh2gsiDIgihrICtgBQCWARCKAYQBpGFBYWDQAsLCAXJ0g");
	this.shape_33.setTransform(34.4,79.4,0.127,0.127);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#774631").s().p("AlGY2QgOihgIkNQgQoZAdocQAdocBIpkIBCn3IBpgQIByAlIgPBhQgTB2gVBmQhIFNhMBMQgcB4gZEhQgZEdgLE3QgaMGBOBwQB9AOCYA+QCkBDBmBUQgKC3gBByg");
	this.shape_34.setTransform(10.6,79.8,0.127,0.127);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#884F34").s().p("AzwZXQgOihgIkMQgRoaAdocQAdocBIpkIBDn3IC1gaQDngdD5gPQMdguKoB0QBpGFBZWDQAsLCAXJ0IqCAAQAAiEg0k7Qg4lbhZlxQjsvQkam1QlAH6iJRLQhFImgFHBg");
	this.shape_35.setTransform(22.6,79.3,0.127,0.127);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4854E").s().p("Al0lpID/CqIgij9IC3CwIAzkQIBUDwIDOiSQgSCsicEpQiXEfiWCkQgRATggAaIgcAWg");
	this.shape_36.setTransform(18.1,83.3,0.127,0.127);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCDAB9").s().p("AklLyQhznVgekhQgRihARh5QAViZBNiEQC2k4IjkZIAMA6QAOBLALBVQAhEUgREYQg1OBoRJvIgtAjQgzixg5jqg");
	this.shape_37.setTransform(18.4,75.1,0.127,0.127);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4854E").s().p("AhSAeQARgfgMggQA+AhAzgMQAQgEAOgJIAKgIQgJAhAQAig");
	this.shape_38.setTransform(22.1,31.1,0.855,1.194);

	this.instance = new lib.foxWalking_mc();
	this.instance.parent = this;
	this.instance.setTransform(22.8,51.4,1,1,0,0,0,22.8,49.9);

	this.instance_1 = new lib.foxBallJump2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.3,75.9,0.827,0.828,0,0,0,45.6,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.instance,p:{regX:22.8,regY:49.9,skewY:0,x:22.8,y:51.4}}]},1).to({state:[{t:this.instance,p:{regX:0,regY:0,skewY:180,x:45.5,y:1.5}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B67E5F").s().p("AgbGyQgigEgcgNIgTgJQhRiAguiiQgPg2AChFQAaiIByguIADAAQAXhKgIhoQgCglAIgaQAngIAzAAQAwAAAkAGQAFABgBADQAAADAEABIAABBIgEAEIAAACQgHBjAaBBIAyAcQAOAJALALIAFAEQBBBBgKCBQgGBFgWA5QgtB3g7BoQgsAdg+AAQgRAAgUgDg");
	this.shape_39.setTransform(21.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-0.8,49.8,103);
p.frameBounds = [rect, new cjs.Rectangle(1.5,-3.4,51.3,107.7), new cjs.Rectangle(-7.3,-3.4,51.3,107.7), new cjs.Rectangle(-1.5,46.9,49.8,57.9)];


(lib.fox2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer_1
	this.fox3 = new lib.fox3_mc();
	this.fox3.name = "fox3";
	this.fox3.parent = this;
	this.fox3.setTransform(21.9,51.1,1,1,0,0,0,21.9,51.1);

	this.timeline.addTween(cjs.Tween.get(this.fox3).to({y:-184.9},19,cjs.Ease.get(1)).to({y:51.1},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-0.8,49.8,103);
p.frameBounds = [rect, new cjs.Rectangle(-3,-25,49.8,103), new cjs.Rectangle(-3,-47.8,49.8,103), new cjs.Rectangle(-3,-69.4,49.8,103), new cjs.Rectangle(-3,-89.7,49.8,103), new cjs.Rectangle(-3,-108.6,49.8,103), new cjs.Rectangle(-3,-126.3,49.8,103), new cjs.Rectangle(-3,-142.6,49.8,103), new cjs.Rectangle(-3,-157.7,49.8,103), new cjs.Rectangle(-3,-171.4,49.8,103), new cjs.Rectangle(-3,-183.8,49.8,103), new cjs.Rectangle(-3,-194.9,49.8,103), new cjs.Rectangle(-3,-204.7,49.8,103), new cjs.Rectangle(-3,-213.2,49.8,103), new cjs.Rectangle(-3,-220.4,49.8,103), new cjs.Rectangle(-3,-226.3,49.8,103), new cjs.Rectangle(-3,-230.9,49.8,103), new cjs.Rectangle(-3,-234.2,49.8,103), new cjs.Rectangle(-3,-236.1,49.8,103), new cjs.Rectangle(-3,-236.8,49.8,103), new cjs.Rectangle(-3,-236.2,49.8,103), new cjs.Rectangle(-3,-234.4,49.8,103), new cjs.Rectangle(-3,-231.5,49.8,103), new cjs.Rectangle(-3,-227.3,49.8,103), new cjs.Rectangle(-3,-222,49.8,103), new cjs.Rectangle(-3,-215.5,49.8,103), new cjs.Rectangle(-3,-207.9,49.8,103), new cjs.Rectangle(-3,-199,49.8,103), new cjs.Rectangle(-3,-189,49.8,103), new cjs.Rectangle(-3,-177.8,49.8,103), new cjs.Rectangle(-3,-165.4,49.8,103), new cjs.Rectangle(-3,-151.8,49.8,103), new cjs.Rectangle(-3,-137.1,49.8,103), new cjs.Rectangle(-3,-121.1,49.8,103), new cjs.Rectangle(-3,-104,49.8,103), new cjs.Rectangle(-3,-85.7,49.8,103), new cjs.Rectangle(-3,-66.3,49.8,103), new cjs.Rectangle(-3,-45.6,49.8,103), new cjs.Rectangle(-3,-23.8,49.8,103), new cjs.Rectangle(-3,-0.8,49.8,103)];


(lib.fox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.fox2 = new lib.fox2_mc();
	this.fox2.name = "fox2";
	this.fox2.parent = this;
	this.fox2.setTransform(-1,50.3,0.695,0.695,0,0,0,21.4,101.8);

	this.timeline.addTween(cjs.Tween.get(this.fox2).wait(1));

}).prototype = getMCSymbolPrototype(lib.fox, rect = new cjs.Rectangle(-18,-21,34.7,71.6), [rect]);


(lib.feedbackPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(178).call(this.frame_178).wait(1));

	// Layer_1
	this.DiagnosticFeedback = new lib.DiagnosticFeedback_mc();
	this.DiagnosticFeedback.name = "DiagnosticFeedback";
	this.DiagnosticFeedback.parent = this;
	this.DiagnosticFeedback.setTransform(480,294.9,1,1,0,0,0,480,294.9);
	this.DiagnosticFeedback.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.DiagnosticFeedback).wait(149).to({alpha:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-480,-324.8,960.1,619.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// combo
	this.comboChoose = new lib.an_ComboBox({'id': 'comboChoose', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, התאמת דגלים, 1, של מי הציטוט, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.comboChoose.setTransform(33.8,-128.6,2.05,2.05,0,0,0,49.9,10.9);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/comboStyle.css'});

	this.instance.setTransform(-549.8,253.9,1,1,0,0,0,50,11);

	this.chooseBtn = new lib.choose_btn();
	this.chooseBtn.name = "chooseBtn";
	this.chooseBtn.parent = this;
	this.chooseBtn.setTransform(33.6,46.1,1.222,1.219,0,0,0,52.4,17.2);
	new cjs.ButtonHelper(this.chooseBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chooseBtn},{t:this.instance},{t:this.comboChoose}]}).wait(1));

	// content1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D48749").s().p("EhK+ABzIAAhzQAUgUAXgcQAeA+BWAaQA3AOBcAAQAhAAAOgSQAOgQAAgWQgBgogFgSQATAiAwAYQBEAjBvAAQAjAAAAgMQgCgYASgWQB7ByCEAAQA6AAAOgyQAPg0A7AAQAmAABLAWQBKAYAsAAQAoAAAmgPQAhgNABgIQAJg/ABggIA7AAQAgAhA0AWQAyAWA4AAQA+AAAsgYQAugWABgjIAWgCQAQAJA2AZQA3AUAyAAQAlAAApgQQAqgTAVgaIBMgDQA1AgAiAQQA0AVA3AAQArAAATgJQgbAhABAYQgBAhA5AUQAuASA5AAQBLAAA5ggQAxgdABggQgBgJgDgOQgEgIAAgIQAKAlBPAnQBOAmAfAAQBDAAAJgUQAGgrAVgzQAsAlBOAOQAeAFB1AIIAGAAQAxAAA0gjQAIAnAhAdQAnAdA8AAQAzAAAdgpQAYgiAAgqQAlAUBCA5QA9AvBAAAQAuAAAUgNQASgMAAgbQAAg8ACgEQADgEAaAUQBkBKCpAAQB3AAAohEQAZAFATAAQA6AAAtgcIAABBIAtAVQBAAQBXgLQArgFBMhcQAeA+BWAaQA2AOBcAAQAgAAAQgSQANgQAAgWQAAgogFgSQATAiAvAYQBFAjBuAAQAlAAgBgMQgCgYARgWQB8ByCDAAQA6AAAOgyQAQg0A6AAQAmAABNAWQBIAYAtAAQAoAAAkgPQAjgNgBgIQALg/AAggIA8AAQAgAhAyAWQA1AWA3AAQA9AAAtgYQAugWAAgjIAXgCQAPAJA1AZQA5AUAyAAQAkAAAqgQQAogSAWgZIAKAAQAiAAAfgFIABAAQA1AgAjAQQA0AVA3AAQAqAAAUgJQgbAhAAAYQAAAhA5AUQAuASA4AAQBMAAA5ggQAwgdAAggQAAgJgDgOQgDgIAAgIQAJAlBPAnQBPAmAfAAQBCAAAJgUQAHgrAVgzQAsAlBOAOQAdAFB2AIIAGAAQAwAAA0gjQAJAnAhAdQAoAdA6AAQA1AAAcgpQAYgiAAgqQAlAUBBA5QA+AvA/AAQAvAAAUgNQASgMAAgbQAAg8ADgEQACgEAaAUQBiBKCrAAQB3AAAnhEQAZAFATAAQA8AAArgcIAABBIAuAVIAUAEIAABDg");
	this.shape.setTransform(0.1,302.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("AL5AxQgRAVACAZQABANglAAQhuAAhFgkQgvgYgTgjQAFATAAAoQAAAXgNAPQgQATggAAQhcAAg2gPQhWgZgeg/QhMBdgrAEQhXALhAgPIgtgVIAAhDQgtAdg6AAQgTAAgZgFQgoBEh3AAQipAAhkhKQgagUgDAEQgCAEAAA9QAAAbgSAMQgUANguAAQhAAAg9gvQhCg6glgUQAAApgYAkQgdApgzAAQg8gBgngdQghgcgIgoQg0AkgxAAIgGAAQh1gJgegFQhOgOgsglQgVAzgGAsQgJAThDAAQgfABhOgnQhPgngKglQAAAIAEAHQADAPABAJQgBAhgxAdQg5AghLAAQg5AAgugTQg5gTABgiQgBgZAbggQgTAJgrAAQg3AAg0gVQgigPg1ggIhMADQgVAagqASQgpAQglAAQgyAAg3gUQg2gYgQgKIgWADQgBAiguAWQgsAYg+AAQg4AAgygXQg0gWggggIg7AAQgBAfgJBAQgBAJghAMQgmAQgoAAQgsAAhKgZQhLgXgmAAQg7AAgPA1QgOAzg6AAQiEAAh7hzQgSAVACAZQAAANgjAAQhvAAhEgkQgwgYgTgjQAFATABAoQAAAXgOAPQgOATghAAQhcAAg3gPQhWgZgeg/QgXAcgUAUIAAh6QAhAAAQgMQAMgLAAgQIgDgnQAVAWAwARQBFAYB0AAQAlAAgCgGQgBgSATgPQB/BPCFgBQA7ABARglQAOgkA9AAQAoABBMARQBOAPAqAAQBZAAAYgYQAMgOABg0QAKAAAUAHQAPAKAIgCQA3AlCWAAQBAAAAtgOQAvgQADgZIATAAQASAEA4ATQA4AOAyAAQApAAAogMQArgNAWgSIBOgBQA3AXAkAJQA2APA3AAQAqAAAWgGQgbAVAAASQAAAXA5ANQAwAMA7ABQBNAAA5gXQA1gTAAgWQgBgFgFgLQgCgGgBgFQAJAYBfAdQBbAZAkAAQA/AAABgNQABgsAOgUQAvAXBQAMQAfACB3AHIADAAQA1AAA0gZQAMAbAhASQAoAWA9gBQA0AAAggdQAXgXAAgcQAoAOBBAnQBAAgBAABQAyAAASgJQARgJAAgSQAAgpAEgDQAEgCAaANQBoAzCtAAQBigBAsgcIAAA5IARAAIAFAAQA7gCAbgWQAbgTAFgqQAdAqBaAMQApAHBtgBQAgAAASgMQALgLAAgQIgCgnQASAWAvARQBJAYBxAAQAmAAgCgGQgCgSAUgPQB9BPCIgBQA6ABAOglQASgkA9AAQAlABBPARQBMAPArAAQBZAAAXgYQAMgOACg0QALAAARAHQARAKAJgCQA2AlCXAAQA/AAAvgOQAtgQABgZIAVAAIBJAXQA3AOAzAAQAoAAAqgMQAsgNAUgSIBPgBQA1AXAlAJQA1APA2AAQAtAAAVgGQgcAVAAASQAAAXA6ANQAsAMA2ABQgWAYgoASQgqAQgkAAQgyAAg5gUQg1gYgPgKIgXADQAAAiguAWQgtAYg9AAQg3AAg1gXQgygWggggIg8AAQAAAfgLBAQABAJgjAMQgkAQgoAAQgtAAhIgZQhNgXgmAAQg6AAgQA1QgOAzg6AAQiDAAh8hzgEA9OABnQhBg6glgUQAAApgYAkQgcApg1AAQg6gBgogdQghgcgJgoQg0AkgwAAIgGAAQh2gJgdgFQhOgOgsglQgVAzgHAsQgJAThCAAQgfABhPgnQhPgngJglQAAAIADAHQADAPAAAJQAAAhgwAdQg5AghMAAQg4AAgugTQg5gTAAgiQAAgZAbggQgUAJgqAAQg3AAg0gVQgjgPg1ggIgBAAQAmgGAggMQAygTAAgWQAAgFgDgLQgDgGAAgFQAGAYBgAdQBbAZAjAAQBBAAAAgNQABgsAPgUQAvAXBQAMQAgACB3AHIACAAQA1AAA1gZQAKAbAjASQAnAWA9gBQA0AAAegdQAagXAAgcQAlAOBCAnQBBAgBAABQAwAAAUgJQASgJgBgSQABgpAEgDQACgCAbANQBnAzCvAAQBfgBAvgcIAfAfQAbAYAagWQAdgTADgqQAfAqBYAMQApAHBvgBQAgAAAQgMQAMgLgBgQIgBgnQAUAWAuARQA0ARBJAFIAAC8IgUgEIgugVIAAhDQgrAdg8AAQgTAAgZgFQgnBEh3AAQirAAhihKQgagUgCAEQgDAEAAA9QAAAbgSAMQgUANgvAAQg/AAg+gvg");
	this.shape_1.setTransform(0.1,295);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA7247").s().p("An5CzIgRAAIAAg6QgsAdhiAAQitAAhogyQgagOgEADQgEACAAApQAAASgRAJQgSAJgyAAQhAAAhAggQhBgngogOQAAAcgXAXQggAdg0AAQg9AAgogVQghgSgMgcQg0AZg1AAIgDAAQh3gGgfgDQhQgLgvgYQgOAVgBArQgBAOg/AAQgkAAhbgaQhfgdgJgYQABAFACAGQAFALABAFQAAAXg1ATQg5AWhNAAQg7AAgwgMQg5gOAAgWQAAgSAbgVQgWAFgqAAQg3AAg2gOQgkgJg3gYIhOABQgWASgrAOQgoALgpABQgyAAg4gPQg4gSgSgEIgTAAQgDAZgvAPQgtAPhAAAQiWAAg3glQgIABgPgJQgUgIgKAAQgBA0gMAOQgYAYhZAAQgqAAhOgPQhMgRgoAAQg9AAgOAkQgRAkg7AAQiFAAh/hOQgTAPABARQACAGglAAQh0ABhFgYQgwgRgVgXIADAoQAAAPgMALQgQANghAAIAAlLMBC0AAAIAAACIAWgBQAVgBAVAAMBINAAAIAAABQAVgBAVAAIJSAAIAAE6QhJgFg0gRQgugRgUgXIABAoQABAPgMALQgQANggAAQhvAAgpgHQhYgMgfgqQgDAqgdAUQgaAWgbgYIgfggQgvAdhfAAQivAAhngyQgbgOgCADQgEACgBApQABASgSAJQgUAJgwAAQhAAAhBggQhCgnglgOQAAAcgaAXQgeAdg0AAQg9AAgngVQgjgSgKgcQg1AZg1AAIgCAAQh3gGgggDQhQgLgvgYQgPAVgBArQAAAOhBAAQgjAAhbgaQhggdgGgYQAAAFADAGQADALAAAFQAAAXgyATQggAMgmAGQgfAEgiAAIgKAAQg2gBgsgLQg6gOAAgWQAAgSAcgVQgVAFgtAAQg2AAg1gOQglgJg1gYIhPABQgUASgsAOQgqALgoABQgzAAg3gPIhJgWIgVAAQgBAZgtAPQgvAPg/AAQiXAAg2glQgJABgRgJQgRgIgLAAQgCA0gMAOQgXAYhZAAQgrAAhMgPQhPgRglAAQg9AAgSAkQgOAkg6AAQiIAAh9hOQgUAPACARQACAGgmAAQhxABhJgYQgvgRgSgXIACAoQAAAPgLALQgSANggAAQhtAAgpgHQhagMgdgqQgFAqgbAUQgbAWg7ACIgFAAg");
	this.shape_2.setTransform(0.1,274.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgFgNgPgIQgPgIghAAQgLAAgYADIgDgcQAXgEAbAAQAyAAAXAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape_3.setTransform(206.5,-37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRBJQAfgEAUgHIggikIAkAAIAbCaQAegMAHgWQAIgVAAgiIAChBIAiAAIgCAyIgDAyQgCAOgHASQgIARgOANQgPANgcAKQgbALg1AJg");
	this.shape_4.setTransform(186,-36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBeIAAgfQAAgSgEgoIgBgUQAAgdAZgVIgwAAIAAgcIBxAAIAAAYQgbAAgQAPQgOAQAAAaIABATQAEArAAASIAAAag");
	this.shape_5.setTransform(170.9,-36.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqBfIAAhcQABgZgGgNQgFgNgQgIQgPgJgbAAQgUAAgaAEIgDgdQAbgEAYAAQA4AAAWAWQAWAWAAAtIAABkg");
	this.shape_6.setTransform(153.2,-37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhjBaIAGgaQAJAEALAAQAMAAAFgFQAEgGAAgOIAAhrQgPAAgWACIgDgbQAogGAqAAQApAAAXAHQAWAIANASQALATAAAlIAABkIghAAIAAhcQAAgagFgNQgEgNgOgIQgOgIgfAAIgRABIAABwQAAASgDAJQgEAKgKAGQgKAGgVAAQgRAAgQgGg");
	this.shape_7.setTransform(132.3,-36.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAsBrIAAhkQAAglgTgPQgTgPgmAAQgcAAgjAFIgEgtQAggFAtgBQAvABAaAOQAaANAMAVQALAVgBAkIAABrgAhhBrIAAhtIA4AAIAABtg");
	this.shape_8.setTransform(99.1,-38.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2BkIAIgkQAMAEAKAAQAMAAAEgGQADgGABgQIAAhkQgOAAgdADIgEgrQAzgGA3AAQAuAAAcAIQAbAIANAWQAOAVAAAoIAABxIg3AAIAAhoQAAgngOgNQgNgMgxAAIAABoQAAAbgEAMQgFALgMAIQgNAHgXAAQgaAAgXgHg");
	this.shape_9.setTransform(72,-38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqBpIhJhoQgOAOgDAwIgEAqIg2AAIAEgsQAEguAMgTQALgUASgLIgxhFIBBAAIA8BWQAQgMADgoIADgiIA0AAIgDAZQgEAtgLATQgMASgTANIA/BZg");
	this.shape_10.setTransform(48,-38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AADBrIAAgwIAzAAIAAgrQAAgpgHgQQgHgQgRAAQgSgBgLAVQgMATgKA1IgNBIIg7AAIAKguQAJgpAHgTIgjhoIAyAAIANAtQAfgwAsAAQAlABAWAdQAWAeAABBIAABYg");
	this.shape_11.setTransform(22,-38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah2BkIAIgkQAMAEAKAAQAMAAAEgGQAEgGAAgQIAAhkQgOAAgdADIgEgrQAzgGA3AAQAuAAAcAIQAbAIANAWQAOAVAAAoIAABxIg4AAIAAhoQAAgngNgNQgNgMgxAAIAABoQAAAbgFAMQgDALgNAIQgNAHgXAAQgaAAgXgHg");
	this.shape_12.setTransform(-4.6,-38.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAsBrIAAhkQAAglgTgPQgUgPglAAQgdAAgiAFIgDgtQAfgFAtgBQAuABAbAOQAaANAMAVQAKAVABAkIAABrgAhgBrIAAhtIA3AAIAABtg");
	this.shape_13.setTransform(-41.2,-38.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBpIAAgbQAAgbgEgiIgBgUQAAgkAZgRIg5AAIAAgwICOAAIAAAnQgcAAgQANQgRANAAAbIABATQAFAlABAdIAAAgg");
	this.shape_14.setTransform(-61.5,-38.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbBpIAAjRIA3AAIAADRg");
	this.shape_15.setTransform(-76.1,-38.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdBrIgNgyQgUAEgMAUIgMAaIg5AAIANgbQAZg3A3gFIAAgnQgBgVgHgKQgJgKgYAAIgQABIgDgrQAPgDAXgBQAnABAUASQASAUABArIAAAxIAVBSg");
	this.shape_16.setTransform(-91.5,-38.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBpIAAjRIA3AAIAADRg");
	this.shape_17.setTransform(-105.8,-38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah2BkIAJgkQAMAEAJAAQAMAAAEgGQADgGAAgQIAAhkQgOAAgbADIgFgrQAzgGA3AAQAuAAAbAIQAbAIAPAWQANAVAAAoIAABxIg4AAIAAhoQAAgngNgNQgOgMgwAAIAABoQAAAbgFAMQgEALgNAIQgMAHgYAAQgZAAgXgHg");
	this.shape_18.setTransform(-125.8,-38.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape_19.setTransform(-143.6,-30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_20.setTransform(216.7,-84.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhRBJQAggEATgHIggikIAjAAIAcCaQAegMAHgWQAIgVAAgiIAChBIAiAAIgCAyIgDAyQgCAOgHASQgIARgOANQgPANgcAKQgbALg0AJg");
	this.shape_21.setTransform(201.6,-83.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBeIAAgfQAAgTgDgnIgCgVQAAgcAYgVIgvAAIAAgcIBxAAIAAAYQgbAAgPAQQgPAPAAAaIAAATQAGArAAASIAAAag");
	this.shape_22.setTransform(186.5,-84.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_23.setTransform(174.6,-84.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AArBfIAAhcQgBgZgFgNQgFgNgQgIQgQgJgbAAQgSAAgbAEIgDgdQAcgEAWAAQA5AAAWAWQAWAWAAAtIAABkg");
	this.shape_24.setTransform(159.9,-84.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFCCIAAgaQAAgWAFgMQAEgMAIgLIALgNQAIgKACgIQACgIAAgMIAAgZIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgEANQgEAMgIANIgKAMQgPAUAAAWIAAAeg");
	this.shape_25.setTransform(132.7,-87.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAxIAAhgIAhAAIAABgg");
	this.shape_26.setTransform(120.3,-88.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFCCIAAgaQABgWAEgMQADgMAJgLIALgNQAIgKACgIQACgIAAgMIAAgZIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgDANQgEAMgKANIgJAMQgOAUAAAWIAAAeg");
	this.shape_27.setTransform(96.9,-87.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_28.setTransform(77.4,-84.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFCCIAAgaQABgWAEgMQADgMAJgLIALgNQAIgKACgIQACgIAAgMIAAgZIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgEANQgEAMgIANIgKAMQgOAUAAAWIAAAeg");
	this.shape_29.setTransform(58.3,-87.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAvBeIhHhlQgRAJgDAbIgIBBIgjAAIAIhBQAFgtAggQIgsg9IApAAIA8BUQALgHAEgJQAFgJACgVIAEgmIAjAAIgDAnQgEAZgIAQQgJAPgUAMIA4BQg");
	this.shape_30.setTransform(40.5,-84.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAvBeIhHhlQgRAJgDAbIgIBBIgjAAIAIhBQAFgtAggQIgsg9IAqAAIA7BUQALgHAEgJQAFgJACgVIAEgmIAjAAIgDAnQgEAZgIAQQgJAPgUAMIA4BQg");
	this.shape_31.setTransform(10,-84.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhjBaIAGgaQAJAEALAAQAMAAAFgGQAEgFAAgOIAAhsQgPAAgWADIgDgcQAogFAqAAQApAAAXAHQAWAIANASQALATAAAlIAABlIghAAIAAhdQAAgagFgOQgEgMgOgIQgOgIgfAAIgRABIAABxQAAARgDAKQgEAJgKAGQgKAGgVAAQgRAAgQgGg");
	this.shape_32.setTransform(-13.2,-84.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhEBcIAFgfQARAGARAAQAUAAANgJQAOgIAHgPQAHgPAAgUQAAgcgQgTQgQgTgdAAQgRAAgRAGIgFgfQAVgFARAAQAuAAAaAbQAbAcAAApQAAAcgMAVQgLAVgWAOQgWANggAAQgRAAgVgFg");
	this.shape_33.setTransform(-42.5,-84.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATBeIAAifIhmAAIAAgcICnAAIAAAcIggAAIAACfg");
	this.shape_34.setTransform(-60,-84.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAxBfIAAhcQAAgcgGgNQgHgNgQgHQgQgHgeAAQgYAAgdAFIgDgdQAggFAeAAQA6AAAXAWQAWAWAAAtIAABkgAhQBfIAAhpIAiAAIAABpg");
	this.shape_35.setTransform(-90.2,-84.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_36.setTransform(-112.7,-84.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAxIAAhgIAhAAIAABgg");
	this.shape_37.setTransform(-127.5,-88.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhRBfIAAi3QAmgGAfAAQAjAAAUAKQAWAKAJARQAIARAAAfIAABogAgvg+IAACBIBgAAIAAhJQAAgUgGgMQgEgMgOgHQgNgIgZAAQgPAAgTADg");
	this.shape_38.setTransform(-142.7,-84.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAvBeIhHhkQgRAHgDAcIgIBBIgjAAIAIhBQAFgtAggQIgsg9IAqAAIA7BUQALgHAEgJQAFgJACgWIAEglIAjAAIgDAmQgEAZgIARQgJAPgUAMIA4BQg");
	this.shape_39.setTransform(158.5,-171.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtBfIAAgcIA5AAIAAhbQgBgQgCgHQgCgIgHgFQgHgFgNAAQgLAAgIACIgCgbQALgEASAAQAXAAANAJQAMAJAFANQAFANgBAZIAAB4g");
	this.shape_40.setTransform(140.7,-171.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAvBeIhHhkQgRAHgDAcIgIBBIgjAAIAIhBQAFgtAggQIgsg9IAqAAIA7BUQALgHAEgJQAEgJADgWIAEglIAjAAIgDAmQgDAZgJARQgJAPgUAMIA4BQg");
	this.shape_41.setTransform(125.3,-171.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgFgNgPgIQgPgIghAAQgMAAgXADIgDgcQAXgEAbAAQAyAAAXAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape_42.setTransform(94.8,-171.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAwBfIAAhlQAAgUgEgMQgFgMgNgHQgOgIgaAAQgPAAgSADIAACdIgiAAIAAi3QAmgGAfAAQAiAAAWAKQAVAKAIARQAJARAAAfIAABog");
	this.shape_43.setTransform(74.1,-171.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAqBfIAAhcQAAgZgFgNQgGgNgPgIQgQgJgbAAQgSAAgbAEIgDgdQAcgEAWAAQA5AAAWAWQAWAWAAAtIAABkg");
	this.shape_44.setTransform(52.9,-171.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgtBfIAAgcIA5AAIAAhbQAAgQgDgHQgCgIgHgFQgHgFgNAAQgLAAgIACIgCgbQAMgEARAAQAXAAAMAJQANAJAFANQAFANgBAZIAAB4g");
	this.shape_45.setTransform(27.4,-171.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_46.setTransform(17.3,-171.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag8BQQgWgQgMgdQgLgeAAgxIgCgzIAiAAIABAeQABAvADASQASAAAQgKQAPgJAAgaIAEgyIAhAAIgFA6QAAAPgDAJQgDAHgGAIQgHAIgPAHQgPAGgbACQAEAUARAMQAQALAXAAQAVAAAQgKQAPgLAIgQQAHgRADgdIAIhQIAiAAIgHBFQgEAmgJAbQgKAagXAPQgYARglgBQggABgXgRg");
	this.shape_47.setTransform(0.2,-171.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAvBeIhHhkQgRAHgDAcIgIBBIgjAAIAHhBQAGgtAggQIgsg9IApAAIA8BUQALgHAEgJQAFgJACgWIAEglIAkAAIgFAmQgDAZgIARQgIAPgVAMIA4BQg");
	this.shape_48.setTransform(-22.1,-171.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhjBaIAGgaQAJAEALAAQAMAAAFgGQAEgFAAgOIAAhrQgPAAgWACIgDgcQAogFAqAAQApAAAXAHQAWAIANASQALATAAAlIAABlIghAAIAAhdQAAgagFgNQgEgNgOgIQgOgIgfAAIgRABIAABwQAAASgDAJQgEAKgKAGQgKAGgVAAQgRAAgQgGg");
	this.shape_49.setTransform(-55.5,-171.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_50.setTransform(-70.7,-171.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhEBcIAFgfQARAGARAAQAUAAANgJQAOgIAHgPQAHgPAAgUQAAgcgQgTQgQgTgdAAQgRAAgRAGIgFgfQAVgFARAAQAuAAAaAbQAbAcAAApQAAAcgMAVQgLAVgWAOQgWANggAAQgRAAgVgFg");
	this.shape_51.setTransform(-83.6,-171.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgQCCIAAkDIAhAAIAAEDg");
	this.shape_52.setTransform(-96.3,-167.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag8BQQgWgPgMgeQgLgeAAgxIgCg0IAiAAIABAfQABAvADASQASAAAQgJQAPgKAAgaIAEgzIAhAAIgFA8QAAAPgDAHQgDAIgGAIQgHAIgPAHQgPAHgbACQAEATARALQAQAMAXAAQAVAAAQgLQAPgKAIgQQAHgQADgeIAHhRIAjAAIgHBGQgEAmgJAaQgKAbgXAPQgYAQglABQgggBgXgQg");
	this.shape_53.setTransform(232.4,-214.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgFCCIAAgZQAAgXAFgMQAEgMAIgKIALgOQAIgKACgIQACgIAAgLIAAgaIhnAAIAAhkIAiAAIAABIIBnAAIAAAuQAAATgEANQgEAMgIANIgKANQgPATAAAWIAAAeg");
	this.shape_54.setTransform(211,-218.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_55.setTransform(198.6,-214.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhRBfIAAi3QAmgGAfAAQAjAAAVAKQAVAKAJARQAIARAAAfIAABogAgvg+IAACBIBfAAIAAhJQAAgUgEgMQgFgMgNgHQgOgIgaAAQgPAAgSADg");
	this.shape_56.setTransform(183.4,-215);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAeQAKgEAFgJQAEgJAAgPIgRAAIAAgkIAjAAIAAAkQAAAUgHAMQgHAMgOAHg");
	this.shape_57.setTransform(167.2,-204.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAvBeIhHhlQgRAJgDAbIgIBBIgjAAIAIhBQAFgsAggQIgsg+IAqAAIA7BUQALgHAEgJQAEgJADgWIAEglIAjAAIgDAmQgDAagJAQQgJAPgUANIA4BPg");
	this.shape_58.setTransform(142.4,-214.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgsBfIAAgcIA3AAIAAhbQAAgQgBgHQgDgIgHgFQgHgFgMAAQgLAAgJACIgDgbQAMgEARAAQAYAAANAJQAMAJAFANQAEANAAAZIAAB4g");
	this.shape_59.setTransform(124.6,-215);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAwIAAhgIAhAAIAABgg");
	this.shape_60.setTransform(114.5,-219.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_61.setTransform(88.4,-215);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAuBeIhHhlQgQAJgDAbIgIBBIgjAAIAHhBQAGgsAfgQIgrg+IAqAAIA7BUQALgHAEgJQAEgJADgWIAFglIAiAAIgEAmQgCAagJAQQgIAPgVANIA4BPg");
	this.shape_62.setTransform(68.4,-214.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhCBeIAAgcIBdAAIhmifIAmAAIAzBTQAOgKAFgKQAGgMAAgUIACgfIAjAAIgCAiQgBAQgCALQgDAKgKALQgJALgVALIAoA/IAAAUg");
	this.shape_63.setTransform(48.1,-214.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgJAuIgIgvIAAgsIAjAAIAAAsIgIAvg");
	this.shape_64.setTransform(36.8,-226.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag8BQQgXgPgKgeQgMgeAAgxIgDg0IAjAAIABAfQABAvADASQATAAAPgJQAPgKAAgaIAEgzIAgAAIgDA8QgCAPgCAHQgCAIgIAIQgFAIgQAHQgPAHgbACQAEATARALQAQAMAXAAQAVAAAQgLQAQgKAHgQQAIgQACgeIAIhRIAhAAIgGBGQgEAmgJAaQgKAbgXAPQgYAQgkABQgigBgWgQg");
	this.shape_65.setTransform(10.7,-214.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_66.setTransform(-6.3,-214.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhRBJQAfgEAUgHIggikIAkAAIAbCaQAegMAHgWQAIgVAAgiIABhBIAjAAIgCAyIgDAyQgCAOgHASQgIARgOANQgPANgcAKQgbALg1AJg");
	this.shape_67.setTransform(-21.4,-214);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgECCIAAgZQgBgXAFgMQADgMAKgKIAKgOQAIgKACgIQACgIAAgLIAAgaIhnAAIAAhkIAiAAIAABIIBnAAIAAAuQAAATgDANQgFAMgJANIgJANQgPATAAAWIAAAeg");
	this.shape_68.setTransform(-38.9,-218.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAxBfIAAhcQAAgcgGgNQgHgNgQgHQgQgHgeAAQgYAAgdAFIgDgdQAggFAeAAQA6AAAXAWQAWAWAAAtIAABkgAhQBfIAAhpIAiAAIAABpg");
	this.shape_69.setTransform(-67.8,-215);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_70.setTransform(-90.3,-215);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AATBeIAAifIhmAAIAAgcICnAAIAAAcIggAAIAACfg");
	this.shape_71.setTransform(-109.9,-214.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgFgNgPgIQgPgIghAAQgMAAgXADIgDgcQAXgEAbAAQAyAAAXAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape_72.setTransform(-128.9,-215);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AArBfIAAhcQAAgZgGgNQgGgNgPgIQgQgJgaAAQgUAAgaAEIgDgdQAbgEAXAAQA5AAAWAWQAWAWAAAtIAABkg");
	this.shape_73.setTransform(-149,-215);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_74.setTransform(-162.3,-207.3);

	this.fox3 = new lib.fox3_mc();
	this.fox3.name = "fox3";
	this.fox3.parent = this;
	this.fox3.setTransform(-237.7,258.7,2.511,2.511,0,0,0,21.7,102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fox3},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// content2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("A/vQiQjJAAAAjvIAA+NQAAjvDJAAMA/fAAAQDJAAAADvIAAeNQAADvjJAAMgzVAAAIujEog");
	this.shape_75.setTransform(33.8,-112.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(1));

	// hills
	this.instance_1 = new lib.DesertBG1_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480.5,114.9,1.675,2.192,0,0,0,743.6,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// alphaEffect
	this.instance_2 = new lib.blendingAlpha_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,309.9,1.291,0.957,0,0,0,372.1,649.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.skyBG_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.3,-11.7,1,1,0,0,0,480.1,299.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, rect = new cjs.Rectangle(-600.3,-311.8,1080.8,639.7), [rect]);


(lib.tutorialFox_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A999").s().p("AiOClQAAgFADgDIArgpQADgDAEAAIAFABIgBABQgDADAAAEQAAAEADADIACABIgdAeIgCgDQgDgDgEAAQgEAAgDADIgNAMIgBgEgAg6BQQAAgFADgDIAogsQACgEAEAAQAEAAACACIAAAAQgDAEAAAEQAAAEADADIACABIgbAeIgBgCQgDgCgEAAQgEAAgDADIgNAOQgCgCAAgDgAAUgKQAAgEACgEIAlgvQADgDAEgBQAEAAADACIgCACQgCADAAAEQABAFADACIAAAAIgYAgIgBAAQgDgDgEABQgEAAgDADIgLAOQgCgDgBgDgABdhqQAAgEACgEIAhgxQACgEAEgBQAEgBAEADIgCADQgDAEABAEQABAEAEACIAAAAIgWAiIgBgBQgDgCgEABQgEABgDADIgJANQgDgCgBgEg");
	this.shape.setTransform(21.9,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEBBA9").s().p("AitDZQgEAAgDgDQgCgDAAgEQAAgEADgDIAfgcIANgMQADgDAEAAQAEAAADADIACACIABAFQAAAEgDADIgsApQgDACgEAAIgBAAgAhaCFIgCgBQgDgDAAgFQAAgEADgDIABAAIAcgdIANgOQADgEAEAAQAEAAADADIABACQACACAAADQABAEgDADIgqAsQgDADgFAAIAAAAIgFgBgAgIAsIgBgBQgDgDgBgEQAAgEADgDIABgBIAZgdIAMgOQACgDAEgBQAFAAADADIAAAAQADACAAAEQABAEgDAEIgnAtQgDADgDAAIgBAAQgDAAgCgCgABDgwIgBAAQgDgDgBgEQAAgEACgDIACgCIAYghIAKgNQACgEAEAAQAEgBAEACIAAAAQADADABAEQAAAEgCADQgRAZgTAYQgCADgEABIgCAAQgDAAgCgCgACIiSIAAAAQgDgDgBgEQgBgEACgDIACgEIAdgvQACgEAEgBQAEgBAEACQAEACABAEQABAEgCAEQgPAagRAaQgCADgFABIgCAAQgCAAgDgBg");
	this.shape_1.setTransform(22.6,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(3));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AEA1").s().p("Ai9ALQiBgwEHAAQCCgBCeAKQg2AchQAUQhIAShAAAQhRAAhHgbg");
	this.shape_2.setTransform(22.4,28.2,0.127,0.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#553334").s().p("AhSAqQgkgOAAgWQgCgVAjgSQAigRAygDQAwgCAjAOQAkAOABAWQABAVghASQgjARgyACIgNABQgoAAgfgMg");
	this.shape_3.setTransform(22.4,23.8,0.127,0.127);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AEA1").s().p("AAyB/QghgFgjgYQgigXgXgeQgWgXgRgaQgVghgEgXIgCgLQABgUAGgIQAFgHAMgDQASgLAkgEQATgCAgAAQBAgCASACQA0AGANAhQAHAQgBAYQAAANgFAcQgFAjgJAeQgFAbgMARQgDAGgHAFQgNAOgVAAIgLgBg");
	this.shape_4.setTransform(31.6,3.2,0.127,0.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AEA1").s().p("AheByQgGgEgEgHQgNgUgEgYQgIgXgHgqQgEggAAgJQgCgYAHgQQAOghA0gGQASgCA/ACIA0ACQAjADATALQAMAFAFAGQAFAIABAUIgCALQgDAXgVAhQgRAagWAXQgXAegiAXQgjAYghAFIgLABQgUAAgOgOg");
	this.shape_5.setTransform(9.5,5.7,0.127,0.127);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#543B3F").s().p("AB0AkQgihVAIhdQh7A+i3AMQBRg5BLgbQBQgeBBABQAUgDASAEQAhABARAfIABAAIAGANIAHAXQAEAOAAANIADAbQASBsAFCFQhDg+gihVg");
	this.shape_6.setTransform(32.4,1.6,0.127,0.127);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#543B3F").s().p("AjABTQgThnABg6QAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQABgeAGgVQAEgMAGgHIAAgCQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQALgLAOAAQBVgkCBAaQBZARBHAcQhTAlhbAMQhaANhagMQAKBDgHBCQgHBGgZA+g");
	this.shape_7.setTransform(9.1,4.7,0.127,0.127);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AEA1").s().p("AhSAYQghgJgBgPQABgNAhgKQAjgLAvABQAwgBAjALQAhAKAAANQAAAPghAJQgjALgwAAQgvAAgjgLg");
	this.shape_8.setTransform(12.7,23,0.127,0.127);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7AEA1").s().p("AhRAZQgigKAAgPQAAgNAigLQAigKAvAAQAwAAAiAKQAiALAAANQAAAPgiAKQgiAKgwAAQgvAAgigKg");
	this.shape_9.setTransform(31.6,22.2,0.127,0.127);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#553334").s().p("AggBJQgOgeAAgrQAAgqAOgeQANgfATAAQAUAAAOAfQANAeAAAqQAAArgNAeQgOAfgUAAQgTAAgNgfg");
	this.shape_10.setTransform(29.9,19.2,0.127,0.127);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#553334").s().p("AggBJQgOgeAAgrQAAgqAOgeQAOgfASAAQAUAAAOAfQANAeAAAqQAAArgNAeQgOAfgUAAQgSAAgOgfg");
	this.shape_11.setTransform(13.9,20.1,0.127,0.127);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4864F").s().p("ABZNWQgRhsgFgUQgGgdgniBQgghsgjhKQgthfg8hCQhFhMhegpQhdgphogBQidgCjPBzQhBAkg+AsIgxAkQgfm3gThhIgUhnQgUhoABg6QAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABgeAGgVQAEgMAHgHIAAgCQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQALgLAOAAQBVgkCBAaQBZARBIAcQAzAUAuAaIASgJQA5gbBOgYQAqgNBhgaQDUg4BlgTQCegeCEAHQCcAJB9A9IArgkQAugmAuggQBQg4BMgcQBRgdBBAAQATgDATAFQAgAAASAfIABAAIAGAOIAGAXQAEANABAOIADAaQARBtAFCGIAPLbQhDgphXgqQiuhUhigFQhfgFhiAtQhQAlhXBLQhqBahECbQhOCyAADRQAAAGgGABIgBAAQgFAAgBgFg");
	this.shape_12.setTransform(20.9,10.2,0.127,0.127);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCD6AF").s().p("AkTSxQkYg6kPikQj3iVjajgIgGgGIgCgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAegiAPgWQAXggAOgfQATgsANgyQAIgdAGgdQA9ksgclYQgMiOgmi+IgMhAQgUhoABg6QAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgeAGgVQAEgMAHgHIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQALgLAOAAQBVgkCBAaQCdAfBlA8QA8gfBTgaQAvgPBmgbQDUg4BlgTQCegeCEAHQCcAJB9A9QBUhHA2glQBPg2BKgcQBRgdBBAAQATgDATAFQAgAAASAfIABAAIAGAOIAGAXQAEANABAOIADAaQAUB/ADCgQADBygFDmQgBDPARCJQAVCqA2CIQApBoBMBoIAkAvQAEgDAEAFQAEAFgEAFQiMCuhLBVQh9CMh0BhQjyDJkXA/QiRAhiWAAQiUAAiaggg");
	this.shape_13.setTransform(21.9,14.9,0.127,0.127);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAB35D").s().p("AiRBeQkjgLjUhUQhDgbgygfIgmgZIK3AsQGhgxHvgFQhJAChmAfIjSBEQkPBYjxAAIg0gBg");
	this.shape_14.setTransform(23.1,32.5,0.127,0.127);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC768").s().p("AyBTLQApudC8tnQA8kQBCjrIA3i0IEwAgQFJAfB2AAQB5AAFQgfQCogQCQgQICLMVQCcOhBRLFQidA+tOASQj6AGjZAAQn7AAlJgeg");
	this.shape_15.setTransform(22,47.3,0.127,0.127);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F4040").s().p("AoYC+IAKgrQGFBdEGgsQB1gUA6gtQA7gugNg+Qgbh7ihhdQgygeg8gXIgzgTQCHAFB0A3QB7A7A/BjQAgAyAjBMQAyBugUAVQgVAXiFAQQiDAQirABIgkAAQmQAAivhMg");
	this.shape_16.setTransform(8.4,98.8,0.127,0.127);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6D6E").s().p("AhEAeQgcgMAAgSQAAgRAcgMQAdgNAnAAQAoAAAcANQAdAMAAARQAAASgdAMQgcANgoAAQgnAAgdgNg");
	this.shape_17.setTransform(5.3,97.7,0.127,0.127);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4B4C4C").s().p("AoYC/QAOhJAdhJQAghNAog5QBDheB6guQBxgrCEAIQCDAIBvA3QB2A7A9BgQAgAyAjBLQAyBugUAWQgVAWiFAQQiDAQirABIgkAAQmQAAivhLg");
	this.shape_18.setTransform(8.4,98.8,0.127,0.127);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F4040").s().p("AhKEKQirgBiDgQQiFgQgVgXQgUgVAyhuQAjhMAggyQA/hjB7g7QB0g3CHgFQhQAZhRAvQihBdgbB7QgNA+A7AuQA6AtB1AUQEGAsGFhdIAKArQivBMmQAAIgkAAg");
	this.shape_19.setTransform(36.9,98.8,0.127,0.127);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6D6E").s().p("AhEAeQgcgMAAgSQAAgRAcgMQAcgNAoAAQAoAAAcANQAdAMAAARQAAASgdAMQgcANgoAAQgoAAgcgNg");
	this.shape_20.setTransform(40.1,97.7,0.127,0.127);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B4C4C").s().p("AhKEKQirgBiDgQQiFgQgVgWQgUgWAyhuQAjhLAggyQA9hgB2g7QBvg3CDgIQCEgIBxArQB6AuBDBeQAoA5AgBNQAdBJAOBJQivBLmQAAIgkAAg");
	this.shape_21.setTransform(36.9,98.8,0.127,0.127);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAB35D").s().p("AkdnXIFOgMIBGBOQBXBnBQCAQhSgEg8AYQhPAggjBPQg8CJBYCxQAmBLA3A1QA3A1A3ALQiIANirAFIiSADg");
	this.shape_22.setTransform(34.1,37.3,0.127,0.127);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEC768").s().p("AmlnXIFPgMIA1A5QBABLBBBeQDOEqB4FwQh0AvlIASIkyAKg");
	this.shape_23.setTransform(35.8,37.3,0.127,0.127);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4864F").s().p("AiQPOQg+iCAAjnQAAgTgDgpIADgBIAFBDQAIBQAQBFQAzDaBuASQB9AUBnhTQBchKA4iOQAwh5gXkMQgUjngviTQhFjdhRilQiEkNh+ghQh7ghhFgNIgtgGIg5AEIguktICKgUIFygQQBSELBJEWQB/HjAvFIQA6GahVDfQhIC9irArQgqAKglAAQiGAAhEiOg");
	this.shape_24.setTransform(38.1,54.9,0.127,0.127);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4854E").s().p("AhSBaQgqhHAYhVIAUBQQAfBQA0AAQAzAAAUh5IALh7IALAsQALA1ACAtQAHCQhZANIgRACQg3AAglg9g");
	this.shape_25.setTransform(39.1,62.6,0.127,0.127);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCDAB9").s().p("AiQPfQg+iCAAjnQAAiShwsTIhwr3IHxhGICLHcQCVIlA0FtQA6GahVDfQhIC9irArQgqAKglAAQiGAAhEiOg");
	this.shape_26.setTransform(38.1,54.7,0.127,0.127);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAB35D").s().p("AAwHhQisgFiIgNQA3gLA4g1QA2g1AmhLQBYixg8iJQgkhPhPggQg7gYhSAEQBRiABVhnQAsg0AbgaIFOAMIhdO7Qg7AAhWgDg");
	this.shape_27.setTransform(9.6,37.3,0.127,0.127);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC768").s().p("AAXHaQlHgSh1gvQB4lwDPkqQBmiWBPhMIFPAMIheO7QiNAAikgKg");
	this.shape_28.setTransform(7.9,37.3,0.127,0.127);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4864F").s().p("AiIRRQirgrhIi9QhVjeA7mbQAvlJB+nhQBNklBPj8IFxAQICKATIgtEuIg5gFQgKAAgjAHQhGANh7AgQh9AiiFENQhQCkhGDeQgvCTgTDmQgYENAwB4QA5COBcBKQBmBTB9gUQBugRA0jbQAQhEAIhRIAFhCIACAAQgCApAAATQAADog+CCQhECOiHAAQglAAgqgLg");
	this.shape_29.setTransform(5.5,55,0.127,0.127);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4854E").s().p("AgaCVQhZgNAHiQQACgtALg1IALgsIAKB7QAVB5AyAAQA1AAAfhQQAJgYAHgfIAEgZQAYBVgrBHQgkA9g4AAIgQgCg");
	this.shape_30.setTransform(4.6,62.6,0.127,0.127);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCDAB9").s().p("AiIRjQirgshIi8QhVjfA7maQA0ltCVolICKncIHxBGIhwL3QhvMTAACSQAADng+CCQhECOiHAAQglAAgqgKg");
	this.shape_31.setTransform(5.6,54.7,0.127,0.127);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#774631").s().p("AggAwQiigChTggQhXggAKgUQAEgHAQgCQAPgCAOAEICCAdQCaAaBzgNQCegUAegBQAxgDATATQAUATgvARQgwAQhRAAQhuAFhNAAIgngBg");
	this.shape_32.setTransform(21.8,66.4,0.127,0.127);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#774631").s().p("AkXY0QAAhLgUidQBgiBBkhUQCFhvCCgVQAkhUgdpjQgbpDg3ngQidhsigl7Qgyh2gsiDIgihrICtgBQCWARCKAYQBpGFBYWDQAsLCAXJ0g");
	this.shape_33.setTransform(34.4,79.4,0.127,0.127);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#774631").s().p("AlGY2QgOihgIkNQgQoZAdocQAdocBIpkIBCn3IBpgQIByAlIgPBhQgTB2gVBmQhIFNhMBMQgcB4gZEhQgZEdgLE3QgaMGBOBwQB9AOCYA+QCkBDBmBUQgKC3gBByg");
	this.shape_34.setTransform(10.6,79.8,0.127,0.127);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#884F34").s().p("AzwZXQgOihgIkMQgRoaAdocQAdocBIpkIBDn3IC1gaQDngdD5gPQMdguKoB0QBpGFBZWDQAsLCAXJ0IqCAAQAAiEg0k7Qg4lbhZlxQjsvQkam1QlAH6iJRLQhFImgFHBg");
	this.shape_35.setTransform(22.6,79.3,0.127,0.127);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4854E").s().p("Al0lpID/CqIgij9IC3CwIAzkQIBUDwIDOiSQgSCsicEpQiXEfiWCkQgRATggAaIgcAWg");
	this.shape_36.setTransform(18.1,83.3,0.127,0.127);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCDAB9").s().p("AklLyQhznVgekhQgRihARh5QAViZBNiEQC2k4IjkZIAMA6QAOBLALBVQAhEUgREYQg1OBoRJvIgtAjQgzixg5jqg");
	this.shape_37.setTransform(18.4,75.1,0.127,0.127);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4854E").s().p("AhSAeQARgfgMggQA+AhAzgMQAQgEAOgJIAKgIQgJAhAQAig");
	this.shape_38.setTransform(22.1,31.1,0.855,1.194);

	this.foxWalking = new lib.tutorial_foxWalking_mc();
	this.foxWalking.name = "foxWalking";
	this.foxWalking.parent = this;
	this.foxWalking.setTransform(22.8,51.4,1,1,0,0,0,22.8,49.9);

	this.foxBall = new lib.tutorial_foxBallJump2_mc();
	this.foxBall.name = "foxBall";
	this.foxBall.parent = this;
	this.foxBall.setTransform(23.3,75.9,0.827,0.828,0,0,0,45.6,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.foxWalking,p:{regX:22.8,regY:49.9,skewY:0,x:22.8,y:51.4}}]},1).to({state:[{t:this.foxWalking,p:{regX:0,regY:0,skewY:180,x:45.5,y:1.5}}]},1).to({state:[{t:this.foxBall}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B67E5F").s().p("AgbGyQgigEgcgNIgTgJQhRiAguiiQgPg2AChFQAaiIByguIADAAQAXhKgIhoQgCglAIgaQAngIAzAAQAwAAAkAGQAFABgBADQAAADAEABIAABBIgEAEIAAACQgHBjAaBBIAyAcQAOAJALALIAFAEQBBBBgKCBQgGBFgWA5QgtB3g7BoQgsAdg+AAQgRAAgUgDg");
	this.shape_39.setTransform(21.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-0.8,49.8,103);
p.frameBounds = [rect, new cjs.Rectangle(1.4,-3.4,51.5,107.7), new cjs.Rectangle(-7.3,-3.4,51.4,107.7), new cjs.Rectangle(-1.5,46.9,49.8,57.9)];


(lib.tutorialVideo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndStop(-1);
		this.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndStop(-1);
	}
	this.frame_74 = function() {
		this.fox.gotoAndStop(2);
	}
	this.frame_224 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_334 = function() {
		this.fox.gotoAndStop(1);
	}
	this.frame_424 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_534 = function() {
		this.fox.gotoAndStop(3);
	}
	this.frame_554 = function() {
		this.tutorialBubble1.bubbleHit.gotoAndPlay(1);
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndPlay(1);
		// שינוי צבע הבועה + קפיצת הבועה = 30 פריימים
	}
	this.frame_594 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_715 = function() {
		this.teleportFox.teleportFoxAnim.gotoAndPlay(0);
	}
	this.frame_746 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_854 = function() {
		this.fox.gotoAndStop(3);
	}
	this.frame_874 = function() {
		this.tutorialBubble2.bubbleHit.gotoAndPlay(1);
		this.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndStop(29);
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndPlay(16);
		// שינוי צבע הבועה + קפיצת הבועה = 30 פריימים
	}
	this.frame_914 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_923 = function() {
		this.vi1.vi.gotoAndPlay(0);
		this.vi2.vi.gotoAndPlay(0);
	}
	this.frame_1064 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(73).call(this.frame_74).wait(150).call(this.frame_224).wait(110).call(this.frame_334).wait(90).call(this.frame_424).wait(110).call(this.frame_534).wait(20).call(this.frame_554).wait(40).call(this.frame_594).wait(121).call(this.frame_715).wait(31).call(this.frame_746).wait(108).call(this.frame_854).wait(20).call(this.frame_874).wait(40).call(this.frame_914).wait(9).call(this.frame_923).wait(141).call(this.frame_1064).wait(1));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXA7Igog7QgIAJgCAbIgCAXIgeAAIACgZQACgZAGgLQAHgLAKgGIgbgnIAkAAIAiAwQAJgHACgWIABgTIAdAAIgBAOQgCAZgHALQgGAJgMAIIAkAyg");
	this.shape.setTransform(61.8,-194.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_1.setTransform(51.5,-197.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATBTIAAhnQAAgVgKgHQgJgIgTAAIgdACIgCgZQAQgDAVAAQAgAAAQANQAQAOAAAdIAABtg");
	this.shape_2.setTransform(41.9,-192.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACA8IAAgbIAdAAIAAgYQAAgWgEgKQgEgJgKAAQgKAAgGALQgGALgGAeIgHAoIgiAAIAGgaQAEgXAFgKIgVg7IAdAAIAHAaQASgbAYAAQAWAAAMARQAMAQAAAlIAAAxg");
	this.shape_3.setTransform(22.4,-195);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0ApQgSgVAAgoIgCgoIAgAAIAAAfIABASIAAAIQAIAAAGgEQAFgEACgGQACgGABgQIABgVIAdAAIgBAdQgBAMgBAGQgCAGgFAHQgEAFgJAFQgKAEgQACQACAJAJAGQAJAGAMAAQASAAAKgLQAKgMACgfIAEgrIAfAAIgEAtQgDAcgGAOQgHAOgQAKQgPAKgYAAQgfAAgTgUg");
	this.shape_4.setTransform(7.4,-194.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYA8IAAg9QAAgQgHgIQgGgIgSAAQgKAAgGABIAABcIggAAIAAh0QAWgDAWAAQAcAAAOAHQANAHAGALQAGAMAAATIAAA/g");
	this.shape_5.setTransform(-8,-195);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag0BSIAAhrIAgAAIAABrgAAAAkIAAgVQAAgJADgGQACgGAHgKIADgEQAGgHAAgNIAAgOIhJAAIAAgbIBpAAIAAAeQAAARgCAIQgBAHgFAIIgFAGQgFAIgCAEIgBAKIAAATg");
	this.shape_6.setTransform(-21.5,-192.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_7.setTransform(-31.4,-197.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3A8IAAh0QAWgDAWAAQAcAAAOAHQANAHAGALQAGAMAAATIAAA/gAgXggIAABBIAvAAIAAgiQAAgQgHgIQgGgIgSAAQgKAAgGABg");
	this.shape_8.setTransform(-41.5,-195);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBTIAAgfIAgAAIAAAfgAgPApIAAgIQABgOAEgJQAFgJANgKQAOgLACgEQAEgFAAgHQAAgJgHgGQgIgHgMAAQgLAAgIAHQgIAHgDAOIgdgEQABgUAQgOQAQgOAZAAQAbAAAQAOQAQAOAAATQAAALgGAJQgFAJgUAPQgKAJgCAFQgDAFAAANg");
	this.shape_9.setTransform(-55.5,-197.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1065));

	// text
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5AxIADgSQAGACAFAAQAGAAACgDQACgDAAgHIAAgxIgVACIgCgWQAZgDAbAAQAWAAAOAEQANAEAHALQAGAKABAUIAAA3IgcAAIAAgzQAAgSgGgHQgHgGgYAAIAAAzQAAANgCAGQgCAFgGAEQgHAEgLAAQgNAAgKgEg");
	this.shape_10.setTransform(42.9,151);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaA0IAAgXIAbAAIAAgmQAAgLgEgFQgFgEgKAAIgIABIgCgVQAIgDAMAAQASABAKAJQAJAKAAAVIAAA/g");
	this.shape_11.setTransform(32.5,150.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNA0IAAhnIAbAAIAABng");
	this.shape_12.setTransform(26.2,151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgwAlIAbgFIgShaIAcAAIANBRQALgDAEgIQADgHAAgPIABgwIAcAAIgCAkQAAARgCAIQgBAJgEAJQgEAJgKAGQgJAHgRAGQgTAHgZADg");
	this.shape_13.setTransform(17.6,151.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAGAKQAFAKAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_14.setTransform(6.5,150.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAA5g");
	this.shape_15.setTransform(-8,148.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgHQgDgJgJABQgJgBgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgKIgRgyIAYAAIAHAWQAPgXAVgBQASAAALAPQALAPAAAfIAAArg");
	this.shape_16.setTransform(-17.3,150.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAA5g");
	this.shape_17.setTransform(-26,148.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaA0IAAgXIAbAAIAAgmQAAgLgEgFQgFgEgKAAIgIABIgCgVQAIgDAMAAQASABAKAJQAJAKAAAVIAAA/g");
	this.shape_18.setTransform(-32.8,150.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAFAKQAGAKAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_19.setTransform(-42.6,150.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag5AxIADgSQAHACAEAAQAGAAACgDQACgDAAgHIAAgxIgVACIgCgWQAZgDAbAAQAWAAAOAEQANAEAHALQAHAKAAAUIAAA3IgcAAIAAgzQAAgSgGgHQgHgGgXAAIAAAzQgBANgCAGQgCAFgGAEQgHAEgLAAQgMAAgLgEg");
	this.shape_20.setTransform(51.6,151);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAWABANAGQANAIAFAKQAGAKAAARIAAA0gAgvA0IAAg1IAcAAIAAA1g");
	this.shape_21.setTransform(15.1,150.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtAjQgQgRAAgjIgBgjIAbAAIAAAbIABAQIAAAGQAHAAAFgDQAFgDACgGQABgFABgOIABgSIAaAAIgCAZQgBAKgBAGQgBAFgEAGQgEAFgIAEQgJADgOACQACAIAIAFQAJAFAJAAQAQAAAJgKQAIgKACgaIADgmIAbAAIgDAnQgDAYgFAMQgGANgOAIQgNAJgVAAQgbAAgQgSg");
	this.shape_22.setTransform(-3.7,151.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA0IgkgzQgGAGgCAYIgCAVIgaAAIACgWQACgXAFgIQAGgKAJgFIgZgjIAhAAIAdArQAHgGACgUIABgRIAaAAIgCANQgCAWgFAJQgGAIgJAHIAfAsg");
	this.shape_23.setTransform(-29,151);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgGIAHgNIADgFQAFgGAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAaQAAAOgBAHQgBAHgEAFIgFAHIgFAKQgCAEAAAFIAAARg");
	this.shape_24.setTransform(-40.3,149);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgGQgJgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAFAKQAGAKAAARIAAA0gAgvA0IAAg1IAcAAIAAA1g");
	this.shape_25.setTransform(-51.2,150.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgtBIIAAhdIAcAAIAABdgAAAAgIAAgTQAAgIACgFQADgFAFgIIADgEQAGgHAAgKIAAgNIhAAAIAAgYIBbAAIAAAbQAAAOgBAHQgCAHgEAGIgEAGQgFAGgBAEIgBAJIAAARg");
	this.shape_26.setTransform(20.7,153);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgxAvIAFgSQAPAFAOAAQAQAAAKgIQAKgKAAgQQAAgPgIgKQgIgJgOAAIgMABIAAAMQAAAPAMAAIADgBIAFAQQgHADgIAAQgIAAgGgCQgHgDgFgHQgEgGAAgRIAAgZQASgEATAAQAaAAARAOQAQAOAAAXQAAAZgSAPQgRAPgcAAQgSAAgSgHg");
	this.shape_27.setTransform(9.1,151);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnA0IAAgYIAtAAIgzhPIAeAAIAZAoQAFgBABgEQACgDAAgPIABgRIAbAAIgBAQIgBAJIgBAJIgEAJQgDAFgFADQgEADgGADIAVAiIAAAMg");
	this.shape_28.setTransform(-7.9,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgIQgDgHgJgBQgJAAgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgJIgRgzIAYAAIAHAWQAPgXAVAAQASAAALAOQALAPAAAgIAAAqg");
	this.shape_29.setTransform(79.9,153.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgwAlIAbgFIgShbIAcAAIANBTQALgFAEgHQADgIAAgNIABgyIAcAAIgCAlQAAASgCAHQgBAJgEAIQgEAKgKAGQgJAHgRAGQgTAGgZAFg");
	this.shape_30.setTransform(68,154.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyA0IAAgXIA4AAIAAgbQAAgRgHgHQgGgHgTAAQgKAAgNACIgCgVQAPgEAQABQAbAAANALQANAMAAAZIAAAgIATAAIAAAXg");
	this.shape_31.setTransform(57.4,153.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AARA0IAAgyQAAgQgJgHQgIgIgRAAQgJAAgPACIgCgVQAOgEATABQAaAAAOALQAOAMAAAZIAAA3g");
	this.shape_32.setTransform(46,153.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgFIAHgPIADgDQAFgHAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAbQAAANgBAHQgBAHgEAGIgFAGIgFAKQgCADAAAGIAAARg");
	this.shape_33.setTransform(30.5,152);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgIQgDgHgJgBQgJAAgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgJIgRgzIAYAAIAHAWQAPgXAVAAQASAAALAOQALAPAAAgIAAAqg");
	this.shape_34.setTransform(19.1,153.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgtAjQgQgRAAgjIgBgjIAbAAIAAAbIABAQIAAAGQAHAAAFgDQAFgDABgGQACgFABgOIABgSIAaAAIgCAZQAAAKgCAGQgBAFgEAGQgFAFgHAEQgJADgOACQACAIAJAFQAHAFAKAAQAQAAAJgKQAIgKADgaIACgmIAbAAIgDAnQgCAYgGAMQgGANgNAIQgPAJgTAAQgcAAgQgSg");
	this.shape_35.setTransform(6,154.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcAuQgNgJgEgMQgFgMAAgTIAAgtIAbAAIAAAzQAAARAIAHQAGAHAKAAQAKAAAHgGQAGgHAAgMIAAgJQAAgRgEgEQgDgFgFAAQgHAAgFAJIgIgPQAJgSATAAQAKAAAIAGQAGAGAEAKQADAJAAASQAAARgEAMQgEAMgMAJQgMAIgSAAQgRAAgMgIg");
	this.shape_36.setTransform(-7.4,154);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAVA0IAAg1QAAgNgGgIQgGgHgOAAIgPABIAABQIgcAAIAAhkQATgEAUABQAXgBAMAHQANAGAEAKQAGAKAAAQIAAA3g");
	this.shape_37.setTransform(-19.9,153.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgHQgJgHgSAAQgOAAgRACIgCgWQAQgCAWAAQAWAAANAGQANAIAGAJQAFALAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_38.setTransform(-37.7,153.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgwAlIAbgFIgShbIAcAAIANBTQALgFAEgHQADgIAAgNIABgyIAcAAIgCAlQAAASgCAHQgBAJgEAIQgEAKgKAGQgJAHgRAGQgTAGgZAFg");
	this.shape_39.setTransform(-49.8,154.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgFIAHgPIADgDQAFgHAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAbQAAANgBAHQgBAHgEAGIgFAGIgFAKQgCADAAAGIAAARg");
	this.shape_40.setTransform(-59.9,152);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_41.setTransform(-78.3,156);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgtBIIAAhdIAcAAIAABdgAABAgIAAgTQAAgIACgFQABgFAHgIIACgEQAFgHABgKIAAgNIhAAAIAAgYIBbAAIAAAbQAAAOgBAHQgCAHgEAGIgEAGQgFAGgBAEIgBAJIAAARg");
	this.shape_42.setTransform(21.7,156);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxAvIAFgTQAPAGAOAAQAQAAAKgIQAKgJAAgRQAAgQgIgJQgIgJgOAAIgMABIAAAMQAAAOAMAAIADAAIAFAQQgHADgIAAQgIAAgGgDQgHgDgFgGQgEgGAAgRIAAgYQASgGATAAQAaAAARAPQAQAOAAAXQAAAZgSAPQgRAOgcABQgSgBgSgGg");
	this.shape_43.setTransform(10.1,154);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgHQgJgHgSAAQgOAAgRACIgCgWQAQgCAWAAQAXAAAMAGQANAIAGAJQAFALAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_44.setTransform(-17.7,153.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19,p:{x:-42.6}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-17.3}},{t:this.shape_15,p:{x:-8,y:148.7}},{t:this.shape_14},{t:this.shape_13,p:{x:17.6}},{t:this.shape_12,p:{x:26.2,y:151}},{t:this.shape_11,p:{x:32.5}},{t:this.shape_10}]},37).to({state:[]},207).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_16,p:{x:-17.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_13,p:{x:26.2}},{t:this.shape_12,p:{x:34.8,y:151}},{t:this.shape_11,p:{x:41.2}},{t:this.shape_20}]},45).to({state:[]},155).to({state:[{t:this.shape_19,p:{x:-18.7}},{t:this.shape_28,p:{x:-7.9,y:151}},{t:this.shape_15,p:{x:0.4,y:148.7}},{t:this.shape_27},{t:this.shape_26}]},45).to({state:[]},135).to({state:[{t:this.shape_41},{t:this.shape_12,p:{x:-72.8,y:154}},{t:this.shape_15,p:{x:-67.4,y:151.7}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},45).to({state:[]},95).to({state:[{t:this.shape_44},{t:this.shape_28,p:{x:-6.9,y:154}},{t:this.shape_15,p:{x:1.4,y:151.7}},{t:this.shape_43},{t:this.shape_42}]},45).to({state:[]},125).wait(131));

	// Layer_15
	this.instance = new lib.tutorialPressKey_mc();
	this.instance.parent = this;
	this.instance.setTransform(43.4,222,1,1,0,0,0,19.1,18.8);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({_off:true},207).wait(45).to({_off:false,x:-39.7,y:222.1},0).to({_off:true},155).wait(45).to({_off:false,regX:-0.3,regY:0,scaleX:4.53,x:-85.6,y:248.5},0).to({_off:true},135).wait(45).to({_off:false,regX:19.1,regY:18.8,scaleX:1,x:1.7,y:182.3},0).to({_off:true},95).wait(45).to({_off:false,regX:-0.3,regY:0,scaleX:4.53,x:-85.6,y:248.5},0).to({_off:true},125).wait(131));

	// keyboard
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASAlIiAAAIAAhPICAAAIAAgwIBdBaIhdBbg");
	this.shape_45.setTransform(42.9,222.3);

	this.instance_1 = new lib.tutorial_keyboardKey_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.9,222.8,1.997,1.997,0,0,0,9.7,9.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhaAUIA2AAIAAiEIBOAAIAACEIAxAAIhbBdg");
	this.shape_46.setTransform(3,222.6);

	this.instance_2 = new lib.tutorial_keyboardKey_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.9,222.8,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpBxIAAiEIgxAAIBahdIBbBdIg2AAIAACEg");
	this.shape_47.setTransform(2.7,181.2);

	this.instance_3 = new lib.tutorial_keyboardKey_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.9,182.5,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhxAAIBehbIAAAyICEAAIAABPIiEAAIAAA2g");
	this.shape_48.setTransform(-39.3,222.1);

	this.instance_4 = new lib.tutorial_keyboardKey_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38.5,222.8,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AqkAEIAAgHIVJAAIAAAHg");
	this.shape_49.setTransform(-2.2,274.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ABtAtIAAhFIgvAAIAAgUIA7AAQAGAAACAFIABAOIAABGgAAbAtIAAhFIgMAAIAAgUIAbAAQADAAACADIABAFIAABRgAgVAtIAAhFIgMAAIAAgUIAbAAQADAAACADIABAFIAABRgAhHAtIAAhFIglAAIAABFIgVAAIAAg4IAHgNIgHAAIAAgUIBGAAQAJAAAAAIIAABRg");
	this.shape_50.setTransform(1,264.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7F2F2").s().p("AqYCnQhCAAgvgKQgvgKgFihQgChfACgVQgDgSA1gKQA2gLA9AFIU3AAQBAAAAyAOQAuANAAAOIAAEAQAAAOguAKQgvAKhDAAg");
	this.shape_51.setTransform(0.3,265.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E9E9E8").s().p("AqdCuQhDAAgvgKQgvgKAAgNIAAkPQAAgPAvgOQAygPBAAAIU7AAQBAAAAyAPQAvAOAAAPIAAENQAAAPgvAKQgvAKhDAAg");
	this.shape_52.setTransform(0.7,266.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("Aq9C4Qg8AAgsgJQgqgKAAgNIAAkvQAAgOAqgJQAsgJA8AAIWLAAQAtAAAkAFIAWAEQARAEAKBFIAADOQgKBCgRAEQgrAJg8AAg");
	this.shape_53.setTransform(2.7,267.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_4},{t:this.shape_48},{t:this.instance_3},{t:this.shape_47},{t:this.instance_2},{t:this.shape_46},{t:this.instance_1},{t:this.shape_45}]}).wait(1065));

	// fox
	this.fox = new lib.tutorialFox_mc();
	this.fox.name = "fox";
	this.fox.parent = this;
	this.fox.setTransform(-62.6,127.2,0.439,0.439,0,0,0,21.9,102.2);

	this.timeline.addTween(cjs.Tween.get(this.fox).wait(74).to({x:63.9},150).wait(110).to({x:-1.8},90).wait(110).to({x:-0.4,y:64.5},30).to({x:-1.8,y:127.2},30).to({_off:true},121).wait(30).to({_off:false,y:-16.4},0).wait(109).to({x:-0.4,y:-77.7},30).to({x:-1.8,y:-16.4},30).wait(151));

	// teleportFox
	this.teleportFox = new lib.tutorial_TeleportFox_mc();
	this.teleportFox.name = "teleportFox";
	this.teleportFox.parent = this;
	this.teleportFox.setTransform(-1.8,107.8,0.373,0.373,0,0,0,-2.1,21.7);
	this.teleportFox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.teleportFox).wait(714).to({_off:false},0).to({_off:true},31).wait(320));

	// vi
	this.vi2 = new lib.tutorial_vi_mc();
	this.vi2.name = "vi2";
	this.vi2.parent = this;
	this.vi2.setTransform(-0.4,-110,1,1,0,0,0,0.3,0.8);

	this.vi1 = new lib.tutorial_vi_mc();
	this.vi1.name = "vi1";
	this.vi1.parent = this;
	this.vi1.setTransform(-0.4,34.4,1,1,0,0,0,0.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.vi1},{t:this.vi2}]},923).wait(142));

	// bubble1
	this.tutorialBubble1 = new lib.tutorialBubble1_mc();
	this.tutorialBubble1.name = "tutorialBubble1";
	this.tutorialBubble1.parent = this;
	this.tutorialBubble1.setTransform(-0.5,32.9,0.507,0.507,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.tutorialBubble1).wait(923).to({alpha:0},50).wait(92));

	// bubble2
	this.tutorialBubble2 = new lib.tutorialBubble2_mc();
	this.tutorialBubble2.name = "tutorialBubble2";
	this.tutorialBubble2.parent = this;
	this.tutorialBubble2.setTransform(-0.5,-110,0.506,0.506,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.tutorialBubble2).wait(923).to({alpha:0},50).wait(92));

	// bubbleContent
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#5FC4FF","#71CAFF","#70CAFF","#6CC1F3"],[0.529,0.698,0.855,1],0.8,2,0,0.8,2,19.5).s().p("AgpAnQgIgGgIgIQgYgagBgmIAAAAIAHgCIAKgCIAFgCIACAAIAegFQAQgCAOAAQAkAAAhAJIAEABIAHACIABAAIAAApQgGANgKALQgIAIgIAGQgVAOgaAAQgYAAgVgOgAAMABIgCACIAVAZIAAABIACACIADgDIAEgDIgCgCIgBAAIgWgYIABAAIgCgCIgDABIAAgBIAEgGQADgFAAgFQAAgFgCgEQgBgFgEgEQgDgEgFgCQgDgDgFAAQgFAAgFACQgFABgEAEQgEADgCAFQgCAEAAAFIABAKQACAFADAEQAEADAEACIAKACQAFAAADgBQAFgCADgBIABAAIgCACIACACIADgDg");
	this.shape_54.setTransform(90.4,7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#7ACDFF","#AFE0FF","#6BC8FF","#81D0FF","#5FC4FF"],[0,0,0.208,0.341,0.529],-2.4,2.1,0,-2.4,2.1,19.5).s().p("Ag7AvIAAgyIABABQAEADAEACIAKACQAFAAAEgBQAFgCADgCIABABIgCACIACACIAEgDIAAAAIgDACIAVAZIAAABIABACIADgDIAEgDIgCgCIAAAAIgWgYIABAAIgCgCIgCABIgBgBIAEgGQADgFAAgFQAAgFgCgEQgBgFgDgEQgEgEgEgCQgFgDgFAAQgFAAgEACQgGABgDAEIgEADIAAgPQAPgCAPAAQAiAAAhAJIAFABIAGACIAGABIAFACQgCAlgYAZQgHAIgJAGQgUAOgZAAQgRAAgPgGg");
	this.shape_55.setTransform(-87.3,-136);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5A4639").s().p("AN+LAIAAAAIADgCIAWAYIgDADgAN7K9IABgBIAAgBIABACIAAAAIgBABgAuTrTIAAgBIADgCIAWAZIgDADgAuWrWIABgCIABAAIAAABIABABIgCABg");
	this.shape_56.setTransform(2.3,-63.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8CA4B").s().p("AOjLsIABgBIAAAAIADgCIACACIgEADgANyLRQgFgCgDgEQgEgEgBgFIgCgKQABgFACgEQACgFAEgDIACADIAAAAIgDAEIgCACIAAAAIgCAIIAAACIABAGIAAABQACAEADADIAGAFIAJACIAIgBQAEgBADgDIADADIgBABQgEACgEACQgEABgGAAIgJgCgAOLLRIADgCIABgBIACACIgEADgAORKzIAAAAIABAAIgBAAgAttqoIABAAIAAAAIACgDIACACIgDADgAufrDQgEgCgEgEIgBgBIAAgIIAEAHIAHAFIAEABIAEABIAJgBQAEgCADgDIACADIgBABQgDADgFABQgEACgFAAIgKgDgAuFrDIACgCIABgBIACACIgDADgAuorqIADgDIACADIABAAIgFAHIgBABg");
	this.shape_57.setTransform(0.4,-64.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C2A043").s().p("AOkLtIACgCIABAAIACABIgEADgAOLLSIACAAIAAgBIACgBIACACIAAAAIgEACgAOILPIAFgHIADgIIAAgBIgCgGIAAgBIAAAAIAAgBIAAAAIgBgCIgDgFIAAAAIgHgFQgEgCgFgBIgIACQgEABgDADIgDgCQAFgEAEgCQAFgBAFAAQAFAAAEACQAFACADAEQAEAFACAEQABAEAAAGQAAAFgCAEIgFAHIAAAAIgCACgAttqmIADgDIAAAAIACACIgDADgAuFrBIABgBIAAAAIACgCIADACIgBAAIgDADgAuIrFIAFgHQACgEAAgEIgCgJIgDgFIgCgDIgGgEQgEgCgEAAIgBAAIgHACQgEABgEADIAAgBIgCgCQAEgEAFgBQAFgCAEAAQAFAAAFADQAEACAEAEQADAEACAFQABAEABAFQgBAGgCAEIgFAGIAAABIgBABg");
	this.shape_58.setTransform(0.7,-65.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#745E48").s().p("AOTLZIgWgZIADgCIAWAZIgDADgAN8K8IABgBIABABIgBABgAt9q6IgWgZIACgCIAWAZIgCACgAuVrXIABgBIABABIgBAAg");
	this.shape_59.setTransform(2.1,-63.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D7E2E8").s().p("AODLSIAAgBIgCgFIAAgDIADgIIAAAAIACgCIACgDIABgBQADADABAEIABAIIgCAIIgFAHQgDgDgBgEgAuNrAIAAgRIAAgBIAFgGQADACACAFIABAIIgCAIIgFAHIgEgGg");
	this.shape_60.setTransform(-2.3,-66.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C4DBE7").s().p("AN8LeIgGgFIAFgHIACgIIgBgIQgCgEgDgEQAEgDAEgBIAIgBIAIACQAEACADADIAAAAIAEAFIAAACIAAABIABAAIAAAAIAAABIABAGIAAABIgCAIIgGAHQgDADgEABIgIABIgJgCgANxLRIAAgBIAAACgAuQq0IgEgCIgHgEIAFgIIACgIIgBgIQgBgEgDgDQADgDAEgBIAHgCIABAAIAIACIAGAEIADADIACAFQACAEAAAFIgCAIQgCAEgEADQgDADgEABIgIACIgEgBg");
	this.shape_61.setTransform(-0.5,-66.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],1.7,4.9,0,1.7,4.9,19.5).s().p("AgUAIIABAGIAAAAIgBgGgAAVgBIAAABIAAABIAAgCgAAKgLIgIgCIgHABIAHgBQAEAAAEACIAHAFQgDgDgEgCg");
	this.shape_62.setTransform(89.6,4.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["rgba(198,231,255,0.498)","rgba(175,224,255,0.498)","rgba(154,217,255,0.498)","rgba(95,196,255,0.498)"],[0,0.188,0.341,0.529],1.6,4.1,0,1.6,4.1,19.5).s().p("AAHAUQAEgBADgDQADgDACgEIACgIQAAgDgBgEIgDgGIADAGIACAHQAAAEgCAFIgFAGQgEADgDACIgIABIAHgCgAgUgDIgBACIAAABIABgDgAAJgTIgIgCQAEAAAEACIAGAEIgGgEg");
	this.shape_63.setTransform(-91.3,-138);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#53B2E9").s().p("ANqL+IgMgCQgQgEgOgJIAAAAQgJgGgHgJQgagcgBgnIAEAAIAAAAIABAAIAAAAIABgBQABAmAYAbQAHAIAIAGQAVAOAZAAQAaAAAWgOQAHgGAIgIQAKgLAGgNIAAALQgFAIgHAIQgIAJgJAGIAAAAQgWAPgcAAIgHAAgAO4KZIgEgBIAFABIAGACIgHgCgAMrKYIAFgCIgFACIgKACIAKgCgAu/qcIAAgFQAPAFAQAAQAaAAAVgOQAIgGAHgIQAYgaACglIgEgBIAEABIABABIAEAAQgCAmgZAcQgIAIgIAGIAAABQgXAOgbAAQgQAAgPgFgAtZr8IgEgBIAEABIAHACIgHgCg");
	this.shape_64.setTransform(2.7,-63.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#606266").s().p("AAEAKIAAAAIAAAAgAgDAKIAAAAIAAAAgAgBAFIgDgDIAAgDIADgDIADAAIADADIAAADIgDADgAAJAEIABAAIAAAAgAgIAEIAAAAIAAAAgAAJgDIABAAIAAAAgAgIgDIAAAAIAAAAgAAEgJIAAAAIAAAAgAgDgJIAAAAIAAAAg");
	this.shape_65.setTransform(-72.9,-103.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#313133").s().p("AgcAdQgIgIgDgKIgBgLQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAAGgCAFQgCAKgIAIQgMAMgRAAQgQAAgMgMgAgXgXQgKAKAAANQAAAGACAFQACAHAGAGQAKAKANAAQAOAAAKgKQAGgGACgHQACgFAAgGQgBgNgJgKQgKgKgOAAQgNAAgKAKg");
	this.shape_66.setTransform(-72.8,-103.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4A4C50").s().p("AACALIAAgBIABAAIAAABIAPAMQgHAHgKAAgAgTAXIAOgMIABgBIAAAAIAAABIABASQgJAAgHgGgAAIAFIAAAAIAWgCIgCAIQgCAFgFAEgAgbALIgCgIIATACIAAAAIgMAOQgDgEgCgEgAgXgRIANAPIAAAAIgTABQABgJAFgHgAAIgCIAAAAIAOgRQAHAIABAKgAACgIIgCgVQALAAAIAHIgQAOgAgEgIIgQgMQAHgHAKgBIgBAUg");
	this.shape_67.setTransform(-72.8,-103.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E88951").s().p("AgHAFQgBgEAAgEIACgHQAUAGgHAIIgCABIgFAEIgDACIgEgGg");
	this.shape_68.setTransform(-83.9,-115);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4F433B").s().p("AgDgCIAFAAIABABIABACIAAABIgHABg");
	this.shape_69.setTransform(-92.9,-113);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AC212A").s().p("AB0AnIAAgGIgDgTIgCgEQgMgdgkABQgggBgOAaQgDAJgDALIAAAIIiZAAIAAgLICKAAQAEgeARgRQAPgPAWgBQAVgCAUALQAUAMALAVIALABIAFAAIgCAgIgGABQgLAEgHAAg");
	this.shape_70.setTransform(-79,-106.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3A3A3B").s().p("ACABbIgNAAQABgFAAgFQAAgRgMgMQgMgMgRAAQgRAAgLAMQgMAMAAARIABAKIilAAIAAgDICZAAIAAgJQACgLAEgIQANgcAhABQAjAAANAeIABADIAEATIAAAGIgBAAgAgegbIACgBQAHgJgVgGIgCAHQAAAFABAEIhWAAIAAg+IALAAQApACAfAZQATAPALAUgAgqhKIgSgLIgHgDIANgCQArANAhAYQAOAKAIAIIgtAFQgOgagbgSg");
	this.shape_71.setTransform(-80.3,-111.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DF3F32").s().p("AiLACIAJAAIAAgCIgBgCIgCgBIgGAAIAAgLIBWAAIAEAFIAEgCIAFgDIAOAAQgLgUgTgPQgfgZgpgCIgLAAIAAgMQArACAgAJIgNACIAHADIASALQAbASAOAaIAtgFIACAAQAvALAQAHQAgAOAJAfIgBAcIgKgBQgLgWgVgMQgTgKgVABQgWABgPAPQgSARgEAfIiJAAgABWAFQgCAHAFAIQAGAKAOAIQARAHAHgLQgFgNgJgIQgHgGgOgHIgCAAQgJAAgBAFg");
	this.shape_72.setTransform(-79.3,-112.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgoA2QgFgGgDgHQgCgFABgGQgBgOAKgKQAKgJAOAAQAOAAAJAJQAJAKABAOQAAAGgCAFQgCAHgGAGQgIAKgOAAQgOAAgLgKgAgNApIAAAAIgCATQAKAAAGgHIgOgMIAAAAIAAgBgAgVApIgBAAIgNAMQAHAGAJABIgCgTIAAAAIAAgBgAgIAjIAMAPQAFgEACgFIACgIIgVACIAAAAgAgrApQABAEADAEIAMgOIAAAAIAAAAIgSgCIACAIgAgWAdIAAAEIADADIAEAAIACgDIAAgEIgCgDIgEAAgAguAdIATgCIAAAAIAAAAIgNgPQgFAHgBAKgAgIAbIAAAAIAAAAIAVABQgBgKgHgIgAgNAVIAAAAIAAAAIAPgOQgHgGgKgBgAgkAJIAPAMIAAAAIAAAAIABgUQgJABgHAHgAAbgZQgOgHgHgLQgEgIACgGQABgHALABQANAHAIAGQAIAIAFANQgEAHgHAAQgFAAgHgDg");
	this.shape_73.setTransform(-71.1,-106.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,2.6,0,-1.8).s().p("AgLASIAEgcIABgHIASAAIgCAHIgIAcg");
	this.shape_74.setTransform(79.5,49.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F3A400").s().p("AgRBjIAAjFIAjAAIAADFg");
	this.shape_75.setTransform(79.9,34.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#151716","#252625","#414241"],[0,0.427,1],0.5,-10.5,0.5,10.9).s().p("AhjBqQgJAAgHgHQgHgHAAgJIAAikQAAgKAHgHQAHgHAJAAIDSAAQAHAAAFADIAAAIIgBAAQgGgHgJAAIjKAAQgJAAgGAHQgHAGAAAKIAACdQAAAJAHAHQAGAHAJAAIDKAAQAJAAAGgHIABgBIAAAIQgFAEgHAAg");
	this.shape_76.setTransform(86.4,34.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4BB3E1").s().p("AgRBjIAAjFIAiAAIAADFg");
	this.shape_77.setTransform(83.4,34.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2C8400").s().p("AgRBjIAAjFIAjAAIAADFg");
	this.shape_78.setTransform(86.9,34.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A33B85").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_79.setTransform(90.5,34.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCFCC").s().p("ABEBjIAAjFIABAAIAADFgAguBjQgJAAgGgGQgHgGAAgJIAAiaQAAgJAHgGQAGgHAJAAIAKAAIAADFg");
	this.shape_80.setTransform(81.8,34.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#243071").s().p("AgQBjIAAjFIAMAAQAHAAAHAHIAEAEQADAFAAAGIAACaQAAAGgDAFIgEAEQgGAGgIAAg");
	this.shape_81.setTransform(97.4,34.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#151716").s().p("AhkBmQgJAAgGgHQgHgHAAgJIAAidQAAgKAHgGQAGgHAJAAIDKAAQAJAAAGAHIABAAQAFAHAAAJIAACdQAAAJgFAGIgBABQgGAHgJAAgAhxhbQgGAGAAAJIAACZQAAAKAGAFQAGAHAKAAIAKAAIAjAAIAjAAIAiAAIABAAIAiAAIAjAAIAMAAQAJAAAGgHIAEgEQACgEAAgHIAAiZQAAgGgCgFIgEgEQgHgHgIAAIgMAAIgjAAIgiAAIgBAAIgiAAIgjAAIgjAAIgKAAQgKAAgGAHg");
	this.shape_82.setTransform(87,34.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CA2332").s().p("AgRBjIAAjFIAiAAIAADFg");
	this.shape_83.setTransform(94,34.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#464746","#8D8D8D"],[0,0.996],5,13.2,5,-12).s().p("AhwB4QgHAAgDgDQgFgFAAgFIAAjUQAAgGAFgEQADgFAHABIDwAAIAAAQQgGgDgHAAIjRAAQgJAAgHAHQgHAHAAAKIAACjQAAAKAHAHQAHAHAJAAIDRAAQAHAAAGgEIAAATg");
	this.shape_84.setTransform(86,34.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#FAFAFA","#8D8D8D"],[0.004,1],5.2,-13.6,5.2,13.1).s().p("AhuB8QgIAAgFgFQgFgGAAgHIAAjTQAAgIAFgFQAFgFAIAAIDwAAIAAADIjwAAQgHAAgDAFQgFAEAAAGIAADTQAAAGAFAEQADAEAHAAIDwAAIAAAEg");
	this.shape_85.setTransform(85.8,34.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#DB8D4C","#AA4B13"],[0,1],5.5,-16.1,5.5,18.7).s().p("AguCCIgTAAIggAAIgNAAQgJAAgHgGQgGgHAAgJIAAjXQAAgJAGgHQAHgGAJAAIArAAIALAAIAoAAIAKAAICLAAIAAAGIjwAAQgIAAgFAFQgFAGAAAHIAADUQAAAGAFAGQAFAFAIABIDwAAIAAAFg");
	this.shape_86.setTransform(85.4,34.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#D2D2D2","#8D8D8D"],[0,1],-0.4,-0.5,0.5,0).s().p("AgBAIIgEgCIgDgCIAHgMIAKACIgJAPg");
	this.shape_87.setTransform(89.1,13.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#D2D2D2","#8D8D8D"],[0,1],-0.4,0.3,0.5,-0.2).s().p("AgJgFIAJgGIALARIgDACIgEACIgCACg");
	this.shape_88.setTransform(74.9,14.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#646464").s().p("AAQAmIAwhLIAEACIgqBJgAgiAmIghg5IADgCIApA7g");
	this.shape_89.setTransform(82.1,17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#67270C").s().p("AhCAEIADgHICzAAIAAAHgAhpAEQgEAAgDgDIgDgEIAhAAIgCAHg");
	this.shape_90.setTransform(87.2,48);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AsuLoQgGgFgDgGQgDgIAAgNIAAgeIALAAIAAAiQABAOAFAFQAGAFAGgBQAHABAEgEQAEgDABgFQABgFAAgKIAAgHQAAgOgIAAQgGgBgEAHIgEgGQAHgLAJAAQAJAAAFAHQAEAGAAAOIAAAEQAAANgDAGQgCAHgHAGQgHAFgKAAQgJAAgIgFgAtjLrIAAgJQAAgHABgEIAFgJIAEgEIAEgGIAAgHIAAgJIgkAAIAAgjIAMAAIAAAZIAjAAIAAARIgBAKIgEAJIgEAEQgEAHAAAHIAAALgAuSLrIAAhBIAMAAIAABBgAuxLMIAAgiIAMAAIAAAigAODqrIACgLQAFACAGAAQAHAAAFgCQAEgDADgGQACgEAAgHQABgKgGgHQgGgGgKgBQgGAAgFACIgCgKQAHgCAFAAQARAAAJAJQAJAKAAAPQAAAJgEAIQgDAHgJAFQgHAEgMAAQgFAAgHgCgALGqsIACgJQADACAEAAQAEAAABgCQACgCAAgFIAAglIgNABIAAgKQANgCAPAAQAOABAIACQAIACAEAHQAEAGAAANIAAAjIgMAAIAAggQAAgJgBgFQgCgEgFgDQgEgCgMgBIgFAAIAAAoQAAAGgBADQgCADgDACQgEACgGAAQgGAAgGgCgANpqqIAAhBIAMAAIAABBgAM2qqIAAgKIAUAAIAAgfIgBgIQAAgDgDgCQgDgBgEgBIgHABIgBgJQAFgBAFgBQAJAAAFADQADAEACAEQACAFAAAIIAAAqgAMdrJIAAgiIANAAIAAAig");
	this.shape_91.setTransform(2.5,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(1065));

	// bubble
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#AFE2FF").ss(2,1,1).p("APAv5QgrgMgsAAQhBAAg7AZQg4AYgsAsQgsArgXA5QgZA7AABAQAABAAZA7QAXA5AsArQAsAsA4AYQA7AZBBAAQAsAAArgNAPAGZQgngLgoAAQhBAAg7AZQg4AYgsAsQgsArgXA5QgZA7AABAQAABAAZA7QAXA5AsArQAsAsA4AYQA7AZBBAAQAoAAAngLAu/mOQAPABAOAAQBAAAA7gZQA5gYAsgsQArgrAYg5QAZg7AAhAQAAhAgZg7QgYg5grgrQgsgsg5gYQg7gZhAAAQgOAAgPABAu/QFQAPABAOAAQBAAAA7gZQA5gYAsgsQArgrAYg5QAZg7AAhAQAAhAgZg7QgYg5grgrQgsgsg5gYQg7gZhAAAQgOAAgPAB");
	this.shape_92.setTransform(2.7,-38.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AL1PtQg5gYgrgsQgsgrgYg5QgZg7AAhAQAAhAAZg7QAYg5AsgrQArgsA5gYQA7gZBAAAQApAAAnAKIAAJjQgnALgpAAQhAAAg7gZgAu/QEIAAp1IAdgBQBAAAA8AZQA4AYAsAsQAsArAXA5QAZA7AABAQAABAgZA7QgXA5gsArQgsAsg4AYQg8AZhAAAIgdgCgALtmmQg5gYgrgsQgsgrgYg5QgZg7AAhAQAAhAAZg7QAYg5AsgrQArgsA5gYQA7gZBAAAQAtAAArANIAAJeQgrANgtAAQhAAAg7gZgAu/mOIAAp1IAdgCQBAAAA8AZQA4AYAsAsQAsArAXA5QAZA7AABAQAABAgZA7QgXA5gsArQgsAsg4AYQg8AZhAAAIgdgBg");
	this.shape_93.setTransform(2.7,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92}]}).wait(1065));

	// bg
	this.instance_5 = new lib.tutorialBG_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-273.7,-197,0.569,0.569,0,0,0,-479.9,-295.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1065));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-211.8,194,497.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorialAnimation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ax/qDIAAl6IFlAAIAA4qIeaAAMAAABRPI+aAAMAAAgoKIllAAIAAqhIFlAAIAAl6AsaAeIAAqh");
	this.shape.setTransform(49.8,-243.2,1,1,0,0,0,18,-260);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// anim
	this.anim = new lib.tutorialVideo_mc();
	this.anim.name = "anim";
	this.anim.parent = this;
	this.anim.setTransform(46.9,-23.4,1.017,1.017);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBDBDB").s().p("AvNDSIAAmjIeaAAIAAGjg");
	this.shape_1.setTransform(49.7,-243.2,1,1,0,0,0,0,-20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2D4B1").s().p("EgPNAleMAAAgoXIAAwiIAAyCIeaAAMAAABK7g");
	this.shape_2.setTransform(49.7,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AivIRIAAlaIgFAAIAAlqIAFAAIAAldIFkAAIAAQhg");
	this.shape_3.setTransform(-65.8,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,28,28,0.498)").s().p("EgFsAliMAAAhLDILZAAMAAABLDg");
	this.shape_4.setTransform(183.5,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialAnimation_mc, rect = new cjs.Rectangle(-84.4,-244.2,304.4,522.5), [rect]);


(lib.tutorialAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var playing = true;
		
		root.pause.addEventListener("click", pauseFunction);
		root.restart.addEventListener("click", restartFunction);
		root.open.addEventListener("click", openFunction);
		root.close.addEventListener("click", closeFunction);
		
		function pauseFunction()
		{
			if(playing == true)
			{
				playing = false;
				root.pause.switchSym.gotoAndStop(1);
				root.tutorialAnimation.anim.stop();
				
				// עצירה של אנימציית ההליכה
				root.tutorialAnimation.anim.fox.foxWalking.stop();
				root.tutorialAnimation.anim.fox.foxBall.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.upperBody.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.upperBody.tail.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.ikNode_44.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.ikNode_46.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.ikNode_36.stop();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.ikNode_44.stop();
			}
			else
			{
				playing = true;
				root.pause.switchSym.gotoAndStop(0);
				root.tutorialAnimation.anim.play();
				
				// המשך של אנימציית ההליכה
				root.tutorialAnimation.anim.fox.foxWalking.play();
				root.tutorialAnimation.anim.fox.foxBall.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.upperBody.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.upperBody.tail.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.ikNode_44.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legAbove.ikNode_46.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.ikNode_36.play();
				root.tutorialAnimation.anim.fox.foxWalking.foxMove.legUnder.ikNode_44.play();
			}
		}
		
		function restartFunction()
		{
			root.tutorialAnimation.anim.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndStop(-1);
			root.tutorialAnimation.anim.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndStop(-1);
			root.tutorialAnimation.anim.fox.gotoAndStop(0);
			if(playing == false)
			{
				pauseFunction();
			}
			root.tutorialAnimation.anim.gotoAndPlay(1);
			
		}
		
		function openFunction()
		{
			root.gotoAndPlay(90);
			restartFunction();
			root.tutorialAnimation.anim.gotoAndStop(1);
		}
		
		function closeFunction()
		{
			root.gotoAndPlay(209);
		}
	}
	this.frame_209 = function() {
		var root = this;
		
		this.stop();
		
		root.tutorialAnimation.anim.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndStop(-1);
		root.tutorialAnimation.anim.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndStop(-1);
		root.tutorialAnimation.anim.fox.gotoAndStop(0);
		root.tutorialAnimation.anim.gotoAndPlay(5);
	}
	this.frame_329 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(209).call(this.frame_209).wait(120).call(this.frame_329).wait(1));

	// close
	this.close = new lib.tutorialClose_btn();
	this.close.name = "close";
	this.close.parent = this;
	this.close.setTransform(258.1,177.6,1,1,0,0,0,4.9,4.9);
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.tutorialClose_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(89).to({x:20},120,cjs.Ease.get(1)).to({x:258.1},120,cjs.Ease.get(-1)).wait(1));

	// pause
	this.pause = new lib.tutorialPause_btn();
	this.pause.name = "pause";
	this.pause.parent = this;
	this.pause.setTransform(258.1,216.4,1,1,0,0,0,4.9,5.8);
	new cjs.ButtonHelper(this.pause, 0, 1, 2, false, new lib.tutorialPause_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(89).to({x:20},120,cjs.Ease.get(1)).to({x:258.1},120,cjs.Ease.get(-1)).wait(1));

	// restart
	this.restart = new lib.tutorialRestart_btn();
	this.restart.name = "restart";
	this.restart.parent = this;
	this.restart.setTransform(258.7,245.8,1,1,0,0,0,7.5,7.7);
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.tutorialRestart_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(89).to({x:20},120,cjs.Ease.get(1)).to({x:258.7},120,cjs.Ease.get(-1)).wait(1));

	// tutorial
	this.tutorialAnimation = new lib.tutorialAnimation_mc();
	this.tutorialAnimation.name = "tutorialAnimation";
	this.tutorialAnimation.parent = this;
	this.tutorialAnimation.setTransform(282.3,260.3,1,1,0,0,0,-41.6,17);

	this.timeline.addTween(cjs.Tween.get(this.tutorialAnimation).wait(89).to({x:44.1},120,cjs.Ease.get(1)).to({x:282.3},120,cjs.Ease.get(-1)).wait(1));

	// open
	this.open = new lib.tutorialOpen_btn();
	this.open.name = "open";
	this.open.parent = this;
	this.open.setTransform(231.3,209.9,1,1,0,0,0,8.7,18.1);
	new cjs.ButtonHelper(this.open, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.open).wait(89).to({x:16.3,y:210.6},120).to({x:231.3,y:209.9},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(221.6,-0.9,322.3,522.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(219.8,-0.9,320.1,522.4), new cjs.Rectangle(218,-0.9,318,522.4), new cjs.Rectangle(216.2,-0.9,315.9,522.4), new cjs.Rectangle(214.5,-0.9,313.8,522.4), new cjs.Rectangle(212.7,-0.9,311.8,522.4), new cjs.Rectangle(210.9,-0.9,309.8,522.4), new cjs.Rectangle(209.1,-0.9,307.8,522.4), new cjs.Rectangle(207.3,-0.9,305.9,522.4), new cjs.Rectangle(205.1,-0.9,304.4,522.4), new cjs.Rectangle(201.4,-0.9,304.4,522.4), new cjs.Rectangle(197.8,-0.9,304.4,522.4), new cjs.Rectangle(194.2,-0.9,304.4,522.4), new cjs.Rectangle(190.7,-0.9,304.4,522.4), new cjs.Rectangle(187.1,-0.9,304.4,522.4), new cjs.Rectangle(183.7,-0.9,304.4,522.4), new cjs.Rectangle(180.2,-0.9,304.4,522.4), new cjs.Rectangle(176.8,-0.9,304.4,522.4), new cjs.Rectangle(173.4,-0.9,304.4,522.4), new cjs.Rectangle(170,-0.9,304.4,522.4), new cjs.Rectangle(166.7,-0.9,304.4,522.4), new cjs.Rectangle(163.4,-0.9,304.4,522.4), new cjs.Rectangle(160.2,-0.9,304.4,522.4), new cjs.Rectangle(156.9,-0.9,304.4,522.4), new cjs.Rectangle(153.7,-0.9,304.4,522.4), new cjs.Rectangle(150.6,-0.9,304.4,522.4), new cjs.Rectangle(147.5,-0.9,304.4,522.4), new cjs.Rectangle(144.4,-0.9,304.4,522.4), new cjs.Rectangle(141.3,-0.9,304.4,522.4), new cjs.Rectangle(138.3,-0.9,304.4,522.4), new cjs.Rectangle(135.3,-0.9,304.4,522.4), new cjs.Rectangle(132.3,-0.9,304.4,522.4), new cjs.Rectangle(129.4,-0.9,304.4,522.4), new cjs.Rectangle(126.5,-0.9,304.4,522.4), new cjs.Rectangle(123.6,-0.9,304.4,522.4), new cjs.Rectangle(120.8,-0.9,304.4,522.4), new cjs.Rectangle(118,-0.9,304.4,522.4), new cjs.Rectangle(115.3,-0.9,304.4,522.4), new cjs.Rectangle(112.5,-0.9,304.4,522.4), new cjs.Rectangle(109.8,-0.9,304.4,522.4), new cjs.Rectangle(107.2,-0.9,304.4,522.4), new cjs.Rectangle(104.5,-0.9,304.4,522.4), new cjs.Rectangle(101.9,-0.9,304.4,522.4), new cjs.Rectangle(99.4,-0.9,304.4,522.4), new cjs.Rectangle(96.8,-0.9,304.4,522.4), new cjs.Rectangle(94.4,-0.9,304.4,522.4), new cjs.Rectangle(91.9,-0.9,304.4,522.4), new cjs.Rectangle(89.5,-0.9,304.4,522.4), new cjs.Rectangle(87.1,-0.9,304.4,522.4), new cjs.Rectangle(84.7,-0.9,304.4,522.4), new cjs.Rectangle(82.4,-0.9,304.4,522.4), new cjs.Rectangle(80.1,-0.9,304.4,522.4), new cjs.Rectangle(77.8,-0.9,304.4,522.4), new cjs.Rectangle(75.6,-0.9,304.4,522.4), new cjs.Rectangle(73.4,-0.9,304.4,522.4), new cjs.Rectangle(71.2,-0.9,304.4,522.4), new cjs.Rectangle(69.1,-0.9,304.4,522.4), new cjs.Rectangle(67,-0.9,304.4,522.4), new cjs.Rectangle(64.9,-0.9,304.4,522.4), new cjs.Rectangle(62.9,-0.9,304.4,522.4), new cjs.Rectangle(60.9,-0.9,304.4,522.4), new cjs.Rectangle(58.9,-0.9,304.4,522.4), new cjs.Rectangle(57,-0.9,304.4,522.4), new cjs.Rectangle(55.1,-0.9,304.4,522.4), new cjs.Rectangle(53.2,-0.9,304.4,522.4), new cjs.Rectangle(51.4,-0.9,304.4,522.4), new cjs.Rectangle(49.6,-0.9,304.4,522.4), new cjs.Rectangle(47.8,-0.9,304.4,522.4), new cjs.Rectangle(46,-0.9,304.4,522.4), new cjs.Rectangle(44.3,-0.9,304.4,522.4), new cjs.Rectangle(42.7,-0.9,304.4,522.4), new cjs.Rectangle(41,-0.9,304.4,522.4), new cjs.Rectangle(39.4,-0.9,304.4,522.4), new cjs.Rectangle(37.9,-0.9,304.4,522.4), new cjs.Rectangle(36.3,-0.9,304.4,522.4), new cjs.Rectangle(34.8,-0.9,304.4,522.4), new cjs.Rectangle(33.3,-0.9,304.4,522.4), new cjs.Rectangle(31.9,-0.9,304.4,522.4), new cjs.Rectangle(30.5,-0.9,304.4,522.4), new cjs.Rectangle(29.1,-0.9,304.4,522.4), new cjs.Rectangle(27.8,-0.9,304.4,522.4), new cjs.Rectangle(26.5,-0.9,304.4,522.4), new cjs.Rectangle(25.2,-0.9,304.4,522.4), new cjs.Rectangle(24,-0.9,304.4,522.4), new cjs.Rectangle(22.8,-0.9,304.4,522.4), new cjs.Rectangle(21.6,-0.9,304.4,522.4), new cjs.Rectangle(20.4,-0.9,304.4,522.4), new cjs.Rectangle(19.3,-0.9,304.4,522.4), new cjs.Rectangle(18.3,-0.9,304.4,522.4), new cjs.Rectangle(17.2,-0.9,304.4,522.4), new cjs.Rectangle(16.2,-0.9,304.4,522.4), new cjs.Rectangle(15.2,-0.9,304.4,522.4), new cjs.Rectangle(14.3,-0.9,304.4,522.4), new cjs.Rectangle(13.4,-0.9,304.4,522.4), new cjs.Rectangle(12.5,-0.9,304.4,522.4), new cjs.Rectangle(11.7,-0.9,304.4,522.4), new cjs.Rectangle(10.8,-0.9,304.4,522.4), new cjs.Rectangle(10.1,-0.9,304.4,522.4), new cjs.Rectangle(9.3,-0.9,304.4,522.4), new cjs.Rectangle(8.6,-0.9,304.4,522.4), new cjs.Rectangle(7.9,-0.9,304.4,522.4), new cjs.Rectangle(7.3,-0.9,304.4,522.4), new cjs.Rectangle(6.7,-0.9,304.4,522.4), new cjs.Rectangle(6.1,-0.9,304.4,522.4), new cjs.Rectangle(5.6,-0.9,304.4,522.4), new cjs.Rectangle(5,-0.9,304.4,522.4), new cjs.Rectangle(4.6,-0.9,304.4,522.4), new cjs.Rectangle(4.1,-0.9,304.4,522.4), new cjs.Rectangle(3.7,-0.9,304.4,522.4), new cjs.Rectangle(3.3,-0.9,304.4,522.4), new cjs.Rectangle(3,-0.9,304.4,522.4), new cjs.Rectangle(2.7,-0.9,304.4,522.4), new cjs.Rectangle(2.4,-0.9,304.4,522.4), new cjs.Rectangle(2.1,-0.9,304.4,522.4), new cjs.Rectangle(1.9,-0.9,304.4,522.4), new cjs.Rectangle(1.7,-0.9,304.4,522.4), new cjs.Rectangle(1.6,-0.9,304.4,522.4), new cjs.Rectangle(1.5,-0.9,304.4,522.4), new cjs.Rectangle(1.4,-0.9,304.4,522.4), rect=new cjs.Rectangle(1.3,-0.9,304.4,522.4), rect, rect, new cjs.Rectangle(1.4,-0.9,304.4,522.4), new cjs.Rectangle(1.5,-0.9,304.4,522.4), new cjs.Rectangle(1.6,-0.9,304.4,522.4), new cjs.Rectangle(1.7,-0.9,304.4,522.4), new cjs.Rectangle(1.9,-0.9,304.4,522.4), new cjs.Rectangle(2.1,-0.9,304.4,522.4), new cjs.Rectangle(2.4,-0.9,304.4,522.4), new cjs.Rectangle(2.7,-0.9,304.4,522.4), new cjs.Rectangle(3,-0.9,304.4,522.4), new cjs.Rectangle(3.3,-0.9,304.4,522.4), new cjs.Rectangle(3.7,-0.9,304.4,522.4), new cjs.Rectangle(4.1,-0.9,304.4,522.4), new cjs.Rectangle(4.6,-0.9,304.4,522.4), new cjs.Rectangle(5,-0.9,304.4,522.4), new cjs.Rectangle(5.6,-0.9,304.4,522.4), new cjs.Rectangle(6.1,-0.9,304.4,522.4), new cjs.Rectangle(6.7,-0.9,304.4,522.4), new cjs.Rectangle(7.3,-0.9,304.4,522.4), new cjs.Rectangle(7.9,-0.9,304.4,522.4), new cjs.Rectangle(8.6,-0.9,304.4,522.4), new cjs.Rectangle(9.3,-0.9,304.4,522.4), new cjs.Rectangle(10.1,-0.9,304.4,522.4), new cjs.Rectangle(10.9,-0.9,304.4,522.4), new cjs.Rectangle(11.7,-0.9,304.4,522.4), new cjs.Rectangle(12.5,-0.9,304.4,522.4), new cjs.Rectangle(13.4,-0.9,304.4,522.4), new cjs.Rectangle(14.3,-0.9,304.4,522.4), new cjs.Rectangle(15.2,-0.9,304.4,522.4), new cjs.Rectangle(16.2,-0.9,304.4,522.4), new cjs.Rectangle(17.2,-0.9,304.4,522.4), new cjs.Rectangle(18.3,-0.9,304.4,522.4), new cjs.Rectangle(19.3,-0.9,304.4,522.4), new cjs.Rectangle(20.4,-0.9,304.4,522.4), new cjs.Rectangle(21.6,-0.9,304.4,522.4), new cjs.Rectangle(22.8,-0.9,304.4,522.4), new cjs.Rectangle(24,-0.9,304.4,522.4), new cjs.Rectangle(25.2,-0.9,304.4,522.4), new cjs.Rectangle(26.5,-0.9,304.4,522.4), new cjs.Rectangle(27.8,-0.9,304.4,522.4), new cjs.Rectangle(29.1,-0.9,304.4,522.4), new cjs.Rectangle(30.5,-0.9,304.4,522.4), new cjs.Rectangle(31.9,-0.9,304.4,522.4), new cjs.Rectangle(33.3,-0.9,304.4,522.4), new cjs.Rectangle(34.8,-0.9,304.4,522.4), new cjs.Rectangle(36.3,-0.9,304.4,522.4), new cjs.Rectangle(37.9,-0.9,304.4,522.4), new cjs.Rectangle(39.4,-0.9,304.4,522.4), new cjs.Rectangle(41,-0.9,304.4,522.4), new cjs.Rectangle(42.7,-0.9,304.4,522.4), new cjs.Rectangle(44.3,-0.9,304.4,522.4), new cjs.Rectangle(46,-0.9,304.4,522.4), new cjs.Rectangle(47.8,-0.9,304.4,522.4), new cjs.Rectangle(49.5,-0.9,304.4,522.4), new cjs.Rectangle(51.4,-0.9,304.4,522.4), new cjs.Rectangle(53.2,-0.9,304.4,522.4), new cjs.Rectangle(55.1,-0.9,304.4,522.4), new cjs.Rectangle(57,-0.9,304.4,522.4), new cjs.Rectangle(58.9,-0.9,304.4,522.4), new cjs.Rectangle(60.9,-0.9,304.4,522.4), new cjs.Rectangle(62.9,-0.9,304.4,522.4), new cjs.Rectangle(64.9,-0.9,304.4,522.4), new cjs.Rectangle(67,-0.9,304.4,522.4), new cjs.Rectangle(69.1,-0.9,304.4,522.4), new cjs.Rectangle(71.2,-0.9,304.4,522.4), new cjs.Rectangle(73.4,-0.9,304.4,522.4), new cjs.Rectangle(75.6,-0.9,304.4,522.4), new cjs.Rectangle(77.8,-0.9,304.4,522.4), new cjs.Rectangle(80.1,-0.9,304.4,522.4), new cjs.Rectangle(82.4,-0.9,304.4,522.4), new cjs.Rectangle(84.7,-0.9,304.4,522.4), new cjs.Rectangle(87.1,-0.9,304.4,522.4), new cjs.Rectangle(89.5,-0.9,304.4,522.4), new cjs.Rectangle(91.9,-0.9,304.4,522.4), new cjs.Rectangle(94.4,-0.9,304.4,522.4), new cjs.Rectangle(96.8,-0.9,304.4,522.4), new cjs.Rectangle(99.4,-0.9,304.4,522.4), new cjs.Rectangle(101.9,-0.9,304.4,522.4), new cjs.Rectangle(104.5,-0.9,304.4,522.4), new cjs.Rectangle(107.2,-0.9,304.4,522.4), new cjs.Rectangle(109.8,-0.9,304.4,522.4), new cjs.Rectangle(112.5,-0.9,304.4,522.4), new cjs.Rectangle(115.3,-0.9,304.4,522.4), new cjs.Rectangle(118,-0.9,304.4,522.4), new cjs.Rectangle(120.8,-0.9,304.4,522.4), new cjs.Rectangle(123.6,-0.9,304.4,522.4), new cjs.Rectangle(126.5,-0.9,304.4,522.4), new cjs.Rectangle(129.4,-0.9,304.4,522.4), new cjs.Rectangle(132.3,-0.9,304.4,522.4), new cjs.Rectangle(135.3,-0.9,304.4,522.4), new cjs.Rectangle(138.3,-0.9,304.4,522.4), new cjs.Rectangle(141.3,-0.9,304.4,522.4), new cjs.Rectangle(144.4,-0.9,304.4,522.4), new cjs.Rectangle(147.5,-0.9,304.4,522.4), new cjs.Rectangle(150.6,-0.9,304.4,522.4), new cjs.Rectangle(153.7,-0.9,304.4,522.4), new cjs.Rectangle(156.9,-0.9,304.4,522.4), new cjs.Rectangle(160.2,-0.9,304.4,522.4), new cjs.Rectangle(163.4,-0.9,304.4,522.4), new cjs.Rectangle(166.7,-0.9,304.4,522.4), new cjs.Rectangle(170,-0.9,304.4,522.4), new cjs.Rectangle(173.4,-0.9,304.4,522.4), new cjs.Rectangle(176.8,-0.9,304.4,522.4), new cjs.Rectangle(180.2,-0.9,304.4,522.4), new cjs.Rectangle(183.7,-0.9,304.4,522.4), new cjs.Rectangle(187.1,-0.9,304.4,522.4), new cjs.Rectangle(190.7,-0.9,304.4,522.4), new cjs.Rectangle(194.2,-0.9,304.4,522.4), new cjs.Rectangle(197.8,-0.9,304.4,522.4), new cjs.Rectangle(201.4,-0.9,304.4,522.4), new cjs.Rectangle(205.1,-0.9,304.4,522.4), new cjs.Rectangle(207.3,-0.9,305.9,522.4), new cjs.Rectangle(209.1,-0.9,307.8,522.4), new cjs.Rectangle(210.9,-0.9,309.8,522.4), new cjs.Rectangle(212.7,-0.9,311.8,522.4), new cjs.Rectangle(214.5,-0.9,313.8,522.4), new cjs.Rectangle(216.3,-0.9,315.9,522.4), new cjs.Rectangle(218,-0.9,318,522.4), new cjs.Rectangle(219.8,-0.9,320.1,522.4), new cjs.Rectangle(221.6,-0.9,322.3,522.4)];


// stage content:
(lib.MatchInTheDesert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var frequency = 3;
		stage.enableMouseOver(frequency);
		var stageWidth = 960; // רוחב במת המשחק !
		var stageHeight = 590; // אורך בנת המשחק !
		var firstEnterToWeb = true; // מאשר שזו כניסה ראשונה לאתר המשחק - מתעדכן בהמשך
		
		// ************ games ************
		var bubbleListPositions = [0, 0, 357, 148.85]; // [x start, y start, x distance, y distance] // מיקום זוגות הבועות
		var duoBubblePositions = [62.1, 62.55, 215.35, 62.55]; // [x1, y1, x2, y2] // מיקום הבועות בתוך מוביקליפ של זוגות
		
		var bubblePositions = [ // מערך למיקומי הבועות
			[-192.85, -127.25, false], // 2 למעלה
			[1.6, -127.25, false], // 3 למעלה
			[196, -127.25, false], // 4 למעלה
			[-192.85, 113.7, false], // 2 למטה
			[1.6, 113.7, false], // 3 למטה
			[196, 113.7, false], // 4 למטה
			[-387.25, -127.25, false], // 1 למעלה
			[-387.25, 113.7, false], // 1 למטה
			[390.35, -127.25, false], // 5 למעלה
			[390.35, 113.7, false], // 5 למטה
			];
		
		
		var game1Instruction = "התאימו בין שם המדינה לבין הדגל שלה"; // הוראת המשחק
		var game1Name = "התאמת דגלים"; // שם המשחק
		var game1 = [ // מערך ההתאמות
			[["0a",true,lib.chileFlag,0], ["0b",false,"צ'ילה",0],false, false],// [[name, pic or not, content, inccorect answers], [n,p,c,i], showed or not, on stage or not] 
			[["1a",true,lib.ethiopiaFlag,0], ["1b",false,"אתיופיה",0],false, false],
			[["2a",true,lib.guyanaFlag,0], ["2b",false,"גיאנה",0],false, false],
			[["3a",true,lib.kenyaFlag,0], ["3b",false,"קניה",0],false, false],
			[["4a",true,lib.mongoliaFlag,0], ["4b",false,"מונגוליה",0],false, false],
			[["5a",true,lib.nepalFlag,0], ["5b",false,"נפאל",0],false, false],
			[["6a",true,lib.palauFlag,0], ["6b",false,"פלאו",0],false, false],
			[["7a",true,lib.seychelleFlag,0], ["7b",false,"סיישל",0],false, false],
			] ;
			
		var game2Instruction = "התאימו בין הציטוט לבין מי שטבע אותו"; // הוראת המשחק
		var game2Name = "של מי הציטוט"; // שם המשחק
		var game2 = [ // מערך ההתאמות
			[["0a",true,lib.gandiP,0], ["0b",false,"חיה כאילו תמות מחר למד כאילו תחייה לנצח",0],false, false],// [[name, pic or not, content, inccorect answers], [n,p,c,i], showed or not, on stage or not] 
			[["1a",true,lib.oprahP,0], ["1b",false,"הצלחה היא הנקמה הכי טובה",0],false, false],
			[["2a",true,lib.napoleonP,0], ["2b",false,"עם ללא עבר אין לו עתיד",0],false, false],
			[["3a",true,lib.churchillP,0], ["3b",false,"גישה היא דבר קטן שעושה הבדל גדול",0],false, false],
			[["4a",true,lib.marieP,0], ["4b",false,"אם אין לחם תאכלו עוגות",0],false, false],
			[["5a",true,lib.juliusP,0], ["5b",false,"באתי ראיתי ניצחתי",0],false, false],
			] ;
		
		
		var choose; // משתנה למספר המשחק שנבחר
		var currentInstruction;
		var currentName;
		var currentGame; // מערך למשחק הנבחר
		
		var matchesRemain; // כמות הזוגות שנשארו לזמן
		var allBubbles; // כמות הבועות בכללי
		var bubblesOnStage = 10; // כמות הבועות במסך
		var levelNum = 0; // אינדיקציה לכמות השלבים שנוצרו
		
		// ************ end of games ************
		
		
		
		// ************ זימון דף בחירת המשחק ************
		
		//createGame(); // זימון פונקציית יצירת משחק
		
		$("#dom_overlay_container").on("change", "#comboChoose", comboChange); // הפעלת פונקציה בעת שינוי הקומבו
		comboCreator();
		
		function comboCreator() // יצירת הקומבו לבחירת המשחק בדף הראשון
		{
			choose = 0;
			//הוספת הקומבו לבמה
			var forcombo = new lib.forcomb();
			forcombo.x = 479.65;
			forcombo.y = 310;
			forcombo.name = "combo";
			
		
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.chooseBtn.alpha = 0.3;
		}
		
		function comboChange(evt) //בעת שינוי ערך בקומבו
		{
			choose = evt.currentTarget.value;
			
			if (choose == 0) {
				//ניטרול כפתור "בחר
				stage.getChildByName("combo").chooseBtn.alpha = 0.3;
				stage.getChildByName("combo").chooseBtn.removeEventListener("click", startChosenGame);
			} else{
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				stage.getChildByName("combo").chooseBtn.alpha = 1;
				stage.getChildByName("combo").chooseBtn.addEventListener("click", startChosenGame);
			}
		}
		
		function startChosenGame() //לחיצה על בחר
		{
			if(choose == 1)
			{
				currentInstruction = game1Instruction;
				currentName = game1Name;
				currentGame = game1;
			}
			else
			{
				currentInstruction = game2Instruction;
				currentName = game2Name;
				currentGame = game2;
			}
			
			stage.removeChild(stage.getChildByName("combo"));
			matchesRemain = currentGame.length;
			allBubbles = matchesRemain * 2;
			
			createGame();
		}
		
		// ************ סוף    זימון דף בחירת המשחק    ************
		
		
		// ************ זימון המשחק ************
		
		function createGame() // פונקציית יצירת משחק
		{
			var game = new lib.game(); // יצירת מוביקליפ רקע המשחק שכולל את כל האובייקטים חוץ מהדמות והמסיחים
			game.x = 480; 
			game.y = 325;
			game.name = "game_mc";
			
			game.gameBG.gameTitle.text = currentName;
			game.gameBG.instructionBar.instructionText.text = currentInstruction; // הכנסת תוכן ההנחיה במשחק
			
			stage.addChild(game);
			
		
			var jar = new lib.jar(); // יצירת כד המים
			jar.x = -447;
			jar.y = -237.85;
			jar.scaleX = 0.2837;
			jar.scaleY = 0.2837;
			jar.name = "jar";
			stage.getChildByName("game_mc").gameBG.addChild(jar);
		
			tutorialCreator();
			
			nextLevel();
		}
		
		function nextLevel() // יצירת שלב
		{
			if(matchesRemain == 0) // שליחה לדף מסכם אם נגמרו ההתאמות
			{
				feedbackPage(); // פונקציה ליצירת דף מסכם
			}
			else
			{
				levelNum++;
		
				var counterAddBubble = 0;
				var randBubble;
				var randPosition;
				var scale;
				
				for(var bubblePosReset = 0; bubblePosReset < 10; bubblePosReset++) // איפוס מערך המיקומים של הבועות 
				{
					bubblePositions[bubblePosReset][2] = false;
				}
				
				var addNumber; // כמות הבועות שיש להוסיף
				if(matchesRemain >= 8)
				{
					addNumber = 5;
				}
				else if(matchesRemain == 7)
				{
					addNumber = 4;
				}
				else if(matchesRemain == 6)
				{
					addNumber = 3;
				}
				else
				{
					addNumber = matchesRemain;
				}
				
				matchesRemain -= addNumber; // אינדיקציה עוד כמה התאמות נשארו
				bubblesOnStage = addNumber*2; // אינדיקציה לכמות הבועות על הבמה
					
				
				for(var bubbleNum = 0; bubbleNum < addNumber; bubbleNum++) // יצירת מסיחים
				{
					randBubble = Math.floor((Math.random() * currentGame.length)); // מציאת זוג מסיחים שלא זומן עדיין
					while(currentGame[randBubble][2] == true)
					{
						randBubble = Math.floor((Math.random() * currentGame.length));
					}
					currentGame[randBubble][2] = true; // סימון זימון הזוג
					currentGame[randBubble][3] = true; // סימון שהזוג על המסך
					
					for(var arrayNum = 0; arrayNum < 2; arrayNum++) // יצירת הבועות
					{
						randPosition = Math.floor((Math.random() * (addNumber*2))); // מציאת מיקום פנוי
						while(bubblePositions[randPosition][2] == true)
						{
							randPosition = Math.floor((Math.random() * (addNumber*2)));
						}
						bubblePositions[randPosition][2] = true; // סימון שהמיקום נלקח
						
						var bubble = new lib.bubbleM(); // יצירת מסיח
						bubble.x = bubblePositions[randPosition][0];
						bubble.y = bubblePositions[randPosition][1];
						bubble.name = currentGame[randBubble][arrayNum][0];
						
						if(currentGame[randBubble][arrayNum][1] == false) // בדיקה אם התוכן הוא טקסטואלי
						{
							bubble.bubbleHit.bubbleColorChange.bubbleTextMC.bubbleText.text = currentGame[randBubble][arrayNum][2];
							var textLength = currentGame[randBubble][arrayNum][2].length;
							
							if((textLength > 12) && (textLength < 23)) // שינוי מיקום תיבת הטקסט לפי כמות האותיות // עובד חלקי
							{
								bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 12;
							}
							else if(textLength > 23)
							{
								bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 35;
							}
						}
						else // יצירת התמונה למסיחים עם תמונה
						{
							var pic = new(currentGame[randBubble][arrayNum][2]);
							pic.name = "picture";
							scale = Scale(bubble, pic); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
							pic.scaleX = scale; // שינוי גודל התמונה
							pic.scaleY = scale; // שינוי גודל התמונה
							pic.x = 62.35;
							pic.y = 62.35;
							
							var magGlass = new lib.magGlass; // הוספת זכוכית המגדלת בבועה
							var widthBubble = bubble.nominalBounds.width;
							var heightBubble = bubble.nominalBounds.height;
							magGlass.x = 62.35;
							magGlass.y = 16.15;
				
							bubble.bubbleHit.bubbleColorChange.addChild(pic);
							
							bubble.bubbleHit.bubbleColorChange.addChild(magGlass);
							
							bubble.addEventListener("click", zoomPic); // הוספת פונקציה לחיצה על הבועה לשם זום
							bubble.addEventListener("mouseover", overBubble); // פונקציית שינוי סמן העכבר בעת מעבר על הבועה
							bubble.addEventListener("mouseout", outBubble); // פונקציית ביטול שינוי סמן העכבר בעת יציאה מהבועה
						}
						
						if(levelNum == 1) // בזימון של השלב הראשון יש צורך שהבועות יגיעו יותר מהר // אנימציית פייד
						{
							bubble.gotoAndPlay(150);
						}
						
						stage.getChildByName("game_mc").gameBG.addChild(bubble); 
						
						
					}
				}
				globalFoxFunction(); // זימון השועל
			}
		}
		
		function Scale(circle, content) // פונקציה למציאת היחס אליו נרצה לשנות את התמונה
		{
			var circleBounds = circle.nominalBounds; // גודל המעגל
			var contentBounds = content.nominalBounds; // גודל התמונה
			
			var z; // משתנה אליו נכניס את יחס אורך התמונה ורוחב התמונה
			var shorter; // משתנה שהערך שלו יהיה מה יותר קצר - רוחב התמונה או אורך התמונה - הסיבה זה לחישוב היחס אליו נרצה לשנות את התמונה
			var r = circleBounds.width / 2; // משתנה שמחזיק את יחס המעגל
			
			if(contentBounds.height > contentBounds.width) // בודק האם אורך התמונה גדול יותר מרוחב התמונה
			{
				z = contentBounds.height / contentBounds.width; // משתנה ששומר את יחס אורך התמונה ורוחב התמונה
				shorter = contentBounds.width; // משתנה שמכיל את הצלע הקטנה בתמונה
			}
			else 
			{
				z = contentBounds.width / contentBounds.height;
				shorter = contentBounds.height;
			}
			
			var newSize = 2 * (Math.sqrt((r*r)/((z*z) + 1))); // משפט פיתגורס * 2 = אורך הצלע הקטנה שצריך בכדי להכניס את התמונה לעיגול
			
			return ((newSize / shorter)*0.90); // היחס שצריך להקטין את התמונה המקורית כדי שתכנס בעיגול פחות 3%
			// אפשר לשנות את האחוזים בכדי להתאים יותר טוב את התמונה לעיגול שלך - פשוט לשנות את 0.97
		}
		
		// ...... הדגמה ......
		
		var tutorialShowed = false; // בדיקה שזו הפער הראשונה שההדגמה מופיע לבד
		var tutorialPanel; // יכיל את פאנט ההדגמה
		
		function tutorialCreator() // יצירת ההדגמה 
		{
			var tutorial = new lib.tutorialAnimation(); // יצירת ההדגמה
			tutorial.x = 241.05;
			tutorial.y = -245.5;
		
			tutorial.name = "tutorial";
			
			if(tutorialShowed == true)
			{
				tutorial.gotoAndStop(0);
				
			}
			else
			{
				tutorialShowed = true;
			}
			
			stage.getChildByName("game_mc").addChild(tutorial);
		}
		
		var globalFox; // יהיה הדמות
		function globalFoxFunction()
		{
			//console.log(levelNum);
			if(levelNum != 1) // במקרה שזה לא שלב ראשון
			{
				var fox = new lib.fox(); // זימון הדמות במיקום הדמות הקודמת
				fox = globalFox;
				stage.getChildByName("game_mc").gameBG.removeChild(globalFox);
				stage.getChildByName("game_mc").gameBG.addChild(fox);
			}
			else // במקרה שזה כן שלב ראשון
			{
				var fox = new lib.fox(); // יצירת הדמות ראשונית
				fox.x = 3.1;
				fox.y = 223.45;
				fox.name = "fox_mc";
				stage.getChildByName("game_mc").gameBG.addChild(fox);
			}
			
			globalFox = stage.getChildByName("game_mc").gameBG.getChildByName("fox_mc");
		}
		
		// mouse cursor change on bubble
		var mouseInterval; 
		var firstOverBubble = false;
		
		function overBubble()
		{
			if(firstOverBubble == false)
			{
				firstOverBubble = true;
				mouseInterval = setInterval(changeCursor, 1);
			}
		}
		function outBubble()
		{
			firstOverBubble = false;
			clearInterval(mouseInterval);
		}
		function changeCursor()
		{
			firstOverBubble = false;
			stage.canvas.style.cursor = "pointer";
		}
		//
		
		// ...... זום ......
		var zoomPicLimit = false; // אינדיקציה לבדיקה שיש רק תמונה אחת בזום
		function zoomPic(e) // פונקציה לזום תמונות
		{
			if(zoomPicLimit == false)
			{		
				zoomPicLimit = true; // בדיקה שיש רק חלון של זום אחד פתוח
				var zoom = e.currentTarget.bubbleHit.bubbleColorChange.getChildByName("picture").clone(); //יצירת אינסטנס חדש של התמונה
				var zoomWindow = new lib.zoomWindow();
				zoom.x = 0;
				zoom.y = 0;
				zoomWindow.name = "zoomPicture";
				zoomWindow.x = stageWidth/2;
				zoomWindow.y = stageHeight/2;
				
				var boxScale = resizeImage(zoomWindow.zoomWindowPic, zoom);
				zoom.scaleX = boxScale*0.96; // הקטנה של שינוי הגודל // 0.96
				zoom.scaleY = boxScale*0.96; // הקטנה של שינוי הגודל // 0.96
				
				zoomWindow.zoomWindowPic.addChild(zoom);
				stage.addChild(zoomWindow);
				
				zoomWindow.xZoomWindow.addEventListener("click", removeZoomWindow); // הוספת פונקציית לחיצה לסגירת החלון
				
				zoomWindow.addEventListener("pressmove", dragZoomWindow); // הוספת פונקציית גרירה
			}
		}
		function removeZoomWindow() {stage.removeChild(stage.getChildByName("zoomPicture")); zoomPicLimit = false;} // מחיקת חלון הזום
		
		function dragZoomWindow(e) // פונקציית גרירה
		{
			var point = stage.globalToLocal(stage.mouseX, stage.mouseY);
			e.currentTarget.x = point.x;
			e.currentTarget.y = point.y;
		}
		
		function resizeImage(box, content) { // פונקציה לשינוי גודל התמונה למסגרת
		
			//משתנים לגבולות של המסגרת והתוכן
			var boxBounds = box.nominalBounds;
			var contentBounds = content.nominalBounds;
		
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var toScale = 0;
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toScale = boxBounds.height / contentBounds.height;
			} else {
				toScale = boxBounds.width / contentBounds.width;
			}
			return toScale;
		}
		// ************ סוף    זימון המשחק    ************
		
		
		
		// ************ Movement ************
		
		window.addEventListener("keydown", startMoving);
		window.addEventListener("keyup", stopMoving);
		
		var jumpInterval; // אינטרוואל הקפיצה
		var checkJumpWorking = false; // בדיקה שיש אינטרוואל של קפיצה
		var rightInterval; // אינטרוואל של תנועה ימינה
		var checkRightWorking = false; // בדיקה שיש אינטרוואל של תנועה ימינה
		var leftInterval; // אינטרוואל של תנועה שמאלה
		var checkLeftWorking = false; // בדיקה שיש אינטרוואל של תנועה שמאלה
		
		var moveDistance = 2; // #speed // מהירות התזוזה
		
		
		function startMoving(e) { // פונקציית תחילת תנועה
		
			if(firstEnterToWeb) // אם זו הכניסה הראשונה לאתר אז ניצור טיקר אם לא אז לא ניצור
			{
				createjs.Ticker.addEventListener("tick", checkTouch); // טיקר שבודק פגיעה
				firstEnterToWeb = false;
			}
			
			if(e.keyCode == 32) // מקש רווח
			{
				if((checkJumpWorking == false) && (checkTeleportStatus == false) && (canJumpAfterMatch == true)) // בדיקה שמותר לקפוץ
				{
					checkJumpWorking = true; // סימון שיש אינטרוואל קפיצה
					jumpInterval = setInterval(jump, 1); // יצירת אינטרוואל קפיצה
				}
				
			}
			else if((checkLeftWorking == true) && (checkRightWorking == true)) // עצירת הדמות אם גם מקש ימין וגם שמאל לחוצים // עצירת האינטרוואלים
			{
				clearInterval(rightInterval);
				clearInterval(leftInterval);
				globalFox.fox2.fox3.gotoAndStop(0); // דמות עומדת ולא הולכת
			}
			else if(e.keyCode == 37) // לחיצה על מקש שמאל
			{
				if(checkLeftWorking == false) // כל עוד אין אינטרוואל של הליכה שמאלה
				{ 
					checkLeftWorking = true; // מסמן שיש אינטרוואל של הליכה שמאלה
					leftInterval = setInterval(left, 1); // יצירת אינטרוואל של הליכה שמאלה
				}
			}
			else if(e.keyCode == 39) // לחיצה על מקש ימין
			{
				if(checkRightWorking == false) // כל עוד אין אינטרוואל של הליכה ימינה
				{
					checkRightWorking = true; // מסמן שיש אינטרוואל של הליכה ימינה
					rightInterval = setInterval(right, 1); // יצירת אינטרוול של הליכה ימינה
				}
			}
			else if( (((e.keyCode == 38) && (globalFox.y > 0)) || ((e.keyCode == 40) && (globalFox.y < 0))) && (checkIfInAirAndHowLong[0] == false) && (checkTeleportStatus == false) ) // בודק אם מותר ללחוץ כדי לשנות משטח
			{
				checkTeleportStatus = true; // מסמן שיש אינטרוואל השתגרות
				teleportFoxInterval = setInterval(teleportFoxFunc, 1); // יצירת אינטרוואל השתגרות
			}
		}
		
		var checkIfInAirAndHowLong = [false, 0]; // עוזר לנו לדעת אם השועל באוויר וכמה זמן הוא באוויר כדי לתאם פגיעה
		
		
		// ....... התחלת תנועה .......
		
		function jump() // תחילת אנימציית קפיצה
		{	
			globalFox.fox2.play();
			globalFox.fox2.fox3.gotoAndStop(3);
			checkIfInAirAndHowLong[0] = true; // עוזר לנו לדעת אם השועל באוויר וכמה זמן הוא באוויר כדי לתאם פגיעה - שינוי לכך שיש קפיצה
		}
		
		function left() // תחילת תנועה שמאלה
		{
			if(((globalFox.x > -460.1) && (globalFox.y > 0)) || ((globalFox.x > -440.1) && (globalFox.y < 0))) // עצירה בקצוות // side
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(1);
				}
				globalFox.x -= moveDistance;
			}
		}
		
		function right() // תחילת תנועה ימינה
		{
			if(((globalFox.x < 459.9) && (globalFox.y > 0)) || ((globalFox.x < 440) && (globalFox.y < 0))) // עצירה בקצוות // side 
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(2);
				}
				globalFox.x += moveDistance;
			}
		}
		
		
		// ....... עצירת תנועה .......
		
		function stopMoving(e)  // עצירת תנועה
		{
			if ((e.keyCode == 32) || (e.keyCode == 37) || (e.keyCode == 39))
			{
				if(checkIfInAirAndHowLong[0] == false) // אם הדמות לא בקפיצה
				{
					globalFox.fox2.fox3.gotoAndStop(0); // שינוי הדמות לעומדת
				}
			}
			
			if(e.keyCode == 32)
			{
				checkJumpWorking = false;
				clearInterval(jumpInterval); // הפסקת הקפיצה
			}
			else if(e.keyCode == 37)
			{
				checkLeftWorking = false;
				clearInterval(leftInterval); // הפסקת ההליכה לשמאל
			} 
			else if(e.keyCode == 39)
			{
				checkRightWorking = false;
				clearInterval(rightInterval); // הפסקת ההליכה לימין
			}
		}
		
		
		
		
		// ....... שיגור בין משטחים .......
		
		var teleportFoxInterval; // אינטרוואל השתגרות בין משטחים
		var checkTeleportStatus = false; // בדיקה שיש אינטרוואל של השתגרות בין משטחים
		
		var countTeleportFrames = 0; // ספירת הפריימים של השיגור
		
		var checkIfteleportMid = false; // בדיקה אם הוא באמצע שיגור
		var checkIfteleportFinish = false; // בדיקה אם השיגור הסתיים
		
		
		function teleportFoxFunc() // פעולת ההשתגרות
		{
			if(countTeleportFrames == 0) // בכניסה הראשונה
			{
				var teleportFoxAnim = new lib.teleportFox(); // יצירת אנימציית השיגור
				teleportFoxAnim.name = "teleportFoxAnim";
				teleportFoxAnim.x = globalFox.x;
				teleportFoxAnim.y = globalFox.y;
				stage.getChildByName("game_mc").gameBG.addChild(teleportFoxAnim);
				globalFox.alpha = 0;
			}
			
			countTeleportFrames += (16 + (2/3)); 
			// ספירת כמות הפריימים // החישוב עובד לפי כמות הפעמים שהפונקיה קוראת בשניה שזה 1000 חלקי כמות הפריימים בשניה שזה 60
			// 1000 : 60 = 16.6667 = 16 + 2/3
			// הסיבה זה כדי לדעת כמה שיותר מדוייק כמה פעמים הפונקציה עובדת בכדי לדעת מתי להפעיל כל פעולה בשיגור
			// הרעיון של כל החישוב הזה והשיטה הזו - הוא כדי ללמוד איך המערכת עובדת
			
			if((countTeleportFrames >= 520) && (checkIfteleportFinish == false)) // בדיקה אם הסתיים השיגור
			{ 
				checkIfteleportFinish = true;
			}
			
			if((countTeleportFrames < 520) && (countTeleportFrames >= 300) && (checkIfteleportMid == false)) 
			// בדיקה אם הוא באמצע השיגור לאחר ההקטנה כדי לשים אותו במשטח הנכון
			{
				if(globalFox.y > 0)
				{
					globalFox.y = -28.4;
				}
				else
				{
					globalFox.y = 223.45;
				}
				checkIfteleportMid = true;
			}
			
			if(checkIfteleportMid == true) // עדכון המיקום כל הזמן עד סוף השיגור
			{
				stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim").x = globalFox.x;
				stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim").y = globalFox.y;
			}
			
			//console.log(teleportFinish);
			if(checkIfteleportFinish == true) // אם הסתיים השיגור מאפסים הכל - מחזירים את השועל ומוחקים את השיגור
			{
				stage.getChildByName("game_mc").gameBG.removeChild(stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim"));
				globalFox.alpha = 1;
				countTeleportFrames = 0;
				checkIfteleportMid = false;
				checkIfteleportFinish = false;
				clearInterval(teleportFoxInterval);
				checkTeleportStatus = false;
			}
		}
		
		// ************   end   Movement ************
		
		
		
		// ************ בדיקת פגיעה של השועל עם הבועות ובדיקת ההתאמה ************
		
		var checkNoTwo = false; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה
		var hitNumOne = ["", false]; // שם הבועה שנבחרה והאם קיים תוכן במערך
		var bubble1; // יכיל את בועה 1
		var bubble2; // יכיל את בועה 2
		var numBubble1; // יכיל את המספר של הבועה הראשונה שנפגעה
		var numBubble2; // יכיל את המספר של הבועה השניה שנפגעה
		var charBubble1; // יכיל את האות של הבועה הראשונה שנפגעה
		var charBubble2; // יכיל את האות של הבועה השניה שנפגעה
		var matchAnimationFillInterval; // אינטרוואל שמתחיל את האינטרוואל של תזוזת הבועות ומילוא הכד
		//var viMatchAnimation; // אינטרוואל שמתחיל את אנימציית הוי בצלחת התאמה
		var matchAnimationInterval; // אינטרוואל לתזוזת הבועות
		var matchAnimationDirectionX1; // חישוב כמות התזוזה בציר איקס
		var matchAnimationDirectionX2; // חישוב כמות התזוזה בציר איקס
		var matchAnimationDirectionY1; // חישוב כמות התזוזה בציר ווי
		var matchAnimationDirectionY2; // חישוב כמות התזוזה בציר ווי
		var destinationX = -430; // מיקום הכד בציר איקס
		var destinationY = -245; // מיקום הכד בציר וואי
		var scaleMatchOptimizer;
		var matchAnimationFinished = true; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
		var canJumpAfterMatch = true; // בודק שהמשחק לא באמצע התאמה מוצלחת כדי לאפשר קפיצה
		
		function checkTouch() 
		{		
			if(matchAnimationFinished == true) // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
			{
				var currentBubble;
				var bubbleLetter;
				
				if(checkIfInAirAndHowLong[0] == false)  // אם הדמות לא בקפיצה
				// מחזיר את השועל למצב רגיל אחרי נחיתה על הקרקע // במקרה שאין לחיצה על מקש ישר אחר כך האנימציה של הגלגול בקפיצה ממשיך - זה מונע את זה
				{
					globalFox.fox2.fox3.gotoAndStop(0);
				}
				else
				{
					checkIfInAirAndHowLong[1] ++;  
					// סופר כמה זמן הדמות באוויר כדי לדעת האם לסמן פגיעה בבועה או לא // נוצר בגלל הבעיה של זיהוי הפגיעה - בגלל האנימציה
				}
				
				for(var bubbleNum = 0; bubbleNum < currentGame.length; bubbleNum++) // מעבר על כל זוגות הבועות
				{
					if(currentGame[bubbleNum][3] == true) // בודק שהזוג על המסך
					{
						for(var bubbleLetterNum = 0; bubbleLetterNum < 2; bubbleLetterNum++) // עובר על שני הבועות
						{
							if(bubbleLetterNum == 0)
							{
								bubbleLetter = "a";
							}
							else
							{
								bubbleLetter = "b";
							}
							
							
							if((intersectFox(stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter))) && (checkNoTwo == false) && (checkIfInAirAndHowLong[1] >= 3) && (checkIfInAirAndHowLong[1] <= 28)) 
							// הבדיקה כוללת גם פגיעה בעזרת אינטרסקט אבל בגלל האנימציה הפנימית של השועל יש צורך לבדוק גם האם התרחשה קפיצה והאם השועל שאנחנו רואים באמת פוגע בבועה
							// בנוסף יש בדיקה שמונעת פגיעה בשתי בועות באותה הקפיצה
							{
								// פגיעה ראשונה 
								if(hitNumOne[1] == false) // בודק האם זו הפגיעה הראשונה
								{
									hitNumOne[0] = currentGame[bubbleNum][bubbleLetterNum][0]; // מכניס את שם הבועה למשתנה
									hitNumOne[1] = true; // אומר שהמשתנה מכיל ערך
									stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter).bubbleHit.bubbleColorChange.gotoAndPlay(1); // אנימציית הבועה - שינוי צבע
									stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter).bubbleHit.gotoAndPlay(1); // אנימציית הבועה - תנועה
								}
								// פגיעה שניה
								else 
								{
									numBubble1 = hitNumOne[0].slice(0,1); // השמת מספר הבועה הראושנה במשתנה
									numBubble2 = currentGame[bubbleNum][bubbleLetterNum][0].slice(0,1); // השמת מספר הבועה השניה במשתנה
									charBubble1 = hitNumOne[0].slice(1,2); // השמת אות הבועה הראשונה במשתנה
									charBubble2 = currentGame[bubbleNum][bubbleLetterNum][0].slice(1,2); // השמת אות הבועה השניה במשתנה
								
									if((numBubble1 == numBubble2) && (charBubble1 != charBubble2)) // בודק האם יש התאמה
									{
										currentGame[bubbleNum][3] = false; // אומר שהבועות כבר לא על המסך
										matchFound(bubbleNum); // פונה לפונקציה של הצלחה
									}
									else if(hitNumOne[0] != currentGame[bubbleNum][bubbleLetterNum][0]) // פגיעה לא נכונה
									{
										// בדיקת ערך התו
										var letterNum; 
										if(charBubble1 == "a")
										{
											letterNum = 0;
										}
										else
										{
											letterNum = 1;
										}
										//
										
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.bubbleColorChange.gotoAndPlay(31); // אנימציית הבועה הראשונה - שינוי צבע
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.gotoAndPlay(151);  // אנימציית הבועה הראשונה - רעידה
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.bubbleColorChange.gotoAndPlay(31); // אנימציית הבועה השניה - שינוי צבע
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.gotoAndPlay(61); // אנימציית הבועה השניה - רעידה
		
										currentGame[bubbleNum][bubbleLetterNum][3] ++; // מוסיף טעות לספירה // לציון
										currentGame[numBubble1][letterNum][3] ++; // מוסיף טעות לספירה // לציון
									}
									else // פגיעה באותה הבועה מחזירה אותה למצב הראשוני
									{
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.bubbleColorChange.gotoAndStop(0); // אנימציית הבועה הראשונה - שינוי צבע
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.gotoAndPlay(1); // אנימציית הבועה הראשונה - תזוזה 
									}
									
									// מאפס את ערך המשתנה של הבועה הראשונה שנפגעה
									hitNumOne[0] ="";
									hitNumOne[1] = false;
									//
								}
								checkNoTwo = true;  // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה
							}
						}
					}
				}
				//console.log(checkIfInAirAndHowLong[1]);
				if((globalFox.fox2.fox3.y > 50)) // פגיעה ברצפה מאשרת שאפשר לפגוע עכשיו בעוד מסיח
				{
					//console.log(globalFox.fox2.fox3.y);
					checkNoTwo = false; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה - איפוס
					
					// עוזר לנו לדעת אם השועל באוויר וכמה זמן הוא באוויר כדי לתאם פגיעה - איפוס
					checkIfInAirAndHowLong[0] = false; 
					checkIfInAirAndHowLong[1] = 0;
					//
				}
			}
		}
		
		function intersectFox(obj1) // בדיקת פגיעה של השועל בבועות
		{
			var obj1W = obj1.nominalBounds;
			var obj2W = globalFox.nominalBounds;
			var obj2 = globalFox;
			
			//console.log(" fox x="+obj2.x + " y=" + obj2.y);
			//console.log(" bubble x="+obj1.x + " y=" + obj1.y);
			
			if(obj1.x + (obj1W.width/2) + 5  <= obj2.x - (obj2W.width /2))
			{
				return false;
			}
		
			if (obj1.y + (obj1W.height / 2) <= (obj2.y-100) - (obj2W.height / 2)) {
				return false;
			}
		
			if(obj1.x - (obj1W.width/2) - 5 > obj2.x + (obj2W.width /2))
			{
				return false;
			}
			
			if (obj1.y - (obj1W.height / 2 ) > (obj2.y-100) + (obj2W.height / 2) ) {
				return false;
			}
			
			return true;
		}
		
		function matchFound(bubbleNum) // פעולות בהתאמה מוצלחת
		{	
			canJumpAfterMatch = false; // עוזר למנוע קפיצה לאחר הצלחה
			clearInterval(jumpInterval); // מחיקת אינטרוואל הקפיצה
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.bubbleColorChange.gotoAndPlay(16); // אנימציית הבועה הראשונה - שינוי צבע
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.gotoAndStop(150); // אנימציית הבועה הראשונה - רק פייד
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.bubbleColorChange.gotoAndPlay(16);// אנימציית הבועה השניה - שינוי צבע
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.gotoAndPlay(31);// אנימציית הבועה השניה - תנועה
		
			currentGame[bubbleNum][3] = false; // סימון שהזוג לא על המסך יותר
			bubblesOnStage -= 2; // עדכון כמות הבועות על המסך
			
			bubble1 = stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1); // השמת בועה 1 במשתנה
			bubble2 = stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2); // השמת בועה 2 במשתנה
			matchAnimationDirectionX1 = (bubble1.x - destinationX) / 50; // חישוב כמות התזוזה בציר איקס
			matchAnimationDirectionY1 = (bubble1.y - destinationY) / 50; // חישוב כמות התזוזה בציר ווי
			matchAnimationDirectionX2 = (bubble2.x - destinationX) / 50; // חישוב כמות התזוזה בציר איקס
			matchAnimationDirectionY2 = (bubble2.y - destinationY) / 50; // חישוב כמות התזוזה בציר ווי
			scaleMatchOptimizer = 0.9 / 50; // שינוי של המספר 50 ישנה את מהירות הכדור
			
			viAnimation();
			matchAnimationFillInterval = setInterval(matchAnimationFill, 2000); //  פונקציה לאנימציית התאמה - עם דיליי
			
			if(bubblesOnStage == 0) // בדיקה אם השלב נגמר
			{
				nextLevel(); // קריאה לזימון בועות חדשות
			}	
		}
		
		function viAnimation()
		{
			var vi1 = new lib.vi(); // יצירת וי
			vi1.x = bubble1.x; 
			vi1.y = bubble1.y;
			vi1.name = "vi1";
			stage.getChildByName("game_mc").gameBG.addChild(vi1);
			
			var vi2 = new lib.vi(); // יצירת וי
			vi2.x = bubble2.x; 
			vi2.y = bubble2.y;
			vi2.name = "vi2";
			stage.getChildByName("game_mc").gameBG.addChild(vi2);
		}
		
		function matchAnimationFill()
		{
			matchAnimationFinished = false; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה 
			
			var waterDrop1 = new lib.waterDrop(); // יצירת מים על המסיח
			waterDrop1.name = "waterDrop1";
			var waterDrop2 = new lib.waterDrop(); // יצירת מים על המסיח
			waterDrop2.name = "waterDrop2";
			bubble1.addChild(waterDrop1);
			bubble2.addChild(waterDrop2);
			
			matchAnimationInterval =  setInterval(matchAnimationFunction, 1); // אינטרוואל לתזוזת הבועה
			clearInterval(matchAnimationFillInterval);
		}
		
		var jarMask; // יכיל את המים של הכד
		
		function matchAnimationFunction() // פונקציית תזוזת הכדור
		{
			// אנימציית הקטנת הבועות
			bubble1.scaleX -= scaleMatchOptimizer;
			bubble1.scaleY -= scaleMatchOptimizer; 
			bubble2.scaleX -= scaleMatchOptimizer;
			bubble2.scaleY -= scaleMatchOptimizer;
			//
			
			// עצירת הבועות עם הגעתן ליעד
			if(bubble1.x < destinationX)
			{
				matchAnimationDirectionX1 = 0;
			}
			if(bubble1.y < destinationY)
			{
				matchAnimationDirectionY1 = 0;
			}
			if(bubble2.x < destinationX)
			{
				matchAnimationDirectionX2 = 0;
			}
			if(bubble2.y < destinationY)
			{
				matchAnimationDirectionY2 = 0;
			}
			//
			
			if((bubble1.y < destinationY) && (bubble1.x < destinationX) 
			&& (bubble2.y < destinationY) && (bubble2.x < destinationX)) // בודק אם שתי הבועות הגיעו לסוף
			{
				jarMask = stage.getChildByName("game_mc").gameBG.getChildByName("jar").brown;
				waterFill(); // פונקציית מילוא הבועה
				stage.getChildByName("game_mc").gameBG.removeChild(bubble1); // העלמת הבועה הראשונה
				stage.getChildByName("game_mc").gameBG.removeChild(bubble2); // העלמת הבועה השניה
				matchAnimationFinished = true; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
				canJumpAfterMatch = true; // מונע קפיצה בעת אנימציית התאמה
				clearInterval(matchAnimationInterval);
			}
			
			// התזוזת הבועות
			bubble1.x -= matchAnimationDirectionX1;
			bubble1.y -= matchAnimationDirectionY1;
			bubble2.x -= matchAnimationDirectionX2;
			bubble2.y -= matchAnimationDirectionY2;
			//
		}
		
		var counterWaterFill = 0; // מכיל ספירה של כמות מילוא המים
		var waterFillInterval; // יכיל את אינטרוואל מילוא המים
		var controlWaterFill = false; // שלא יקרה מצב שיש 2 אינטרוואלים פועלים
		
		var jarWaterFirst = false; // בודק אם מדובר במילוא ראשון - לשם מילוא נוסף - נוצר בגלל אנימציית התזוזה של המים
		
		function waterFill()// קריאה לאינטרוואל למילוא מיכל המים
		{
			if(controlWaterFill == false) // בדיקה שאין אינטרוואל למילוא המים
			{
				controlWaterFill = true;
				waterFillInterval = setInterval(waterFillIntervalFunction, 50); // אינטרוואל למילוא המים
			}
		}
		
		function waterFillIntervalFunction() // אינטרוואל למילוא כד המים
		{
			//console.log("working");
			counterWaterFill++;
			if(jarWaterFirst == false) // מילוא ראשון הוא קצת יותר בגלל אנימציית המים
			{
				jarWaterFirst = true;
				jarMask.scaleY = 1 - (1 / currentGame.length);
				//console.log(jarWaterFirst);
				//console.log(1 / currentGame.length);
				//console.log(jarMask.scaleY);
			}
			jarMask.scaleY -= ((1 / (currentGame.length+1))/15); // מילוא המים בהדרגה
			//console.log(jarMask.scaleY);
			if(counterWaterFill == 15) // סיום מילוא המים לאחר 15 אינטרוואלים
			{ 
				counterWaterFill = 0;
				controlWaterFill = false;
				clearInterval(waterFillInterval); 
			}
		}
		// ************ סיום    בדיקת פגיעה של השועל עם הבועות ובדיקת ההתאמה    ************
		
		
		
		// ************ דף משוב מסכם ************
		
		var feedbackPageOpen = false; // בדיקה אם דף המשוב פתוח - לגלילה בעזרת חצים
		
		function feedbackPage() // זימון דף המשוב
		{
			feedbackPageOpen = true;
			
			var feedbackPage = new lib.feedbackPage(); 
			feedbackPage.x = 480; 
			feedbackPage.y = 325.05;
			feedbackPage.name = "feedbackPage";
			
			feedbackPage.DiagnosticFeedback.gameName.text = currentName; // שם המשחק
			feedbackPage.DiagnosticFeedback.grade.text = gradeCalculator(); // חישוב ציון והצבה
			
			feedbackPage.DiagnosticFeedback.restartGameBtn.addEventListener("click", restartGame); // הוספת אינטרקציית לחיצה לשם איפוס המשחק
			feedbackPage.DiagnosticFeedback.backToStartBtn.addEventListener("click", backToStart); // הוספת אינטרקציית לחיצה לשם סיום וחזרה לבחירת משחק
		
			var oddAmdPair; // יכיל 1 או 0 תלוי זוגי או לא זוגי - countPairsOfDuo - לשם הצבת זוגות הבועות
			var countPairsOfDuo = 0; // מוסיף אחד כשצריך לרדת שורה
			
			for(var bubbleListCount = 0; bubbleListCount < currentGame.length; bubbleListCount++) // זימון התאמות
			{
				var duoBubbles = new lib.duoBubbles();
				duoBubbles.y = bubbleListPositions[1] + bubbleListPositions[3]*(countPairsOfDuo); // מיקום וואי של הבועות
				if(bubbleListCount%2 == 0)
				{
					oddAmdPair = 0;
				}
				else
				{
					oddAmdPair = 1;
					countPairsOfDuo++;
				}
				duoBubbles.x = bubbleListPositions[0] + bubbleListPositions[2]*oddAmdPair; // מיקום איקס של הבועות
				
				var positionNum = 0;  // גודל ב2 בתוך הלולאה הבאה בכדי לשנות את מיקום זימון הבועות
				
				for(var duoBubblesCount = 0; duoBubblesCount < 2; duoBubblesCount++) // זימון הבועות לתוך מוביקליפ של זוג
				{
					var bubble = new lib.bubbleM();
					bubble.x = duoBubblePositions[positionNum];
					bubble.y = duoBubblePositions[positionNum+1];
					duoBubbles.addChild(bubble);
					
					if(currentGame[bubbleListCount][duoBubblesCount][3] == 0) // אם אין טעויות העלמת הכוכבית האדומה
					{
						if(duoBubblesCount == 0)
						{
							duoBubbles.redMark0.alpha = 0;
						}
						else
						{
							duoBubbles.redMark1.alpha = 0;
						}
					}
					
					if(currentGame[bubbleListCount][duoBubblesCount][1] == false) // בדיקה אם יש תמונה או לא
					// במקרה שאין תמונה
					{
						bubble.bubbleHit.bubbleColorChange.bubbleTextMC.bubbleText.text = currentGame[bubbleListCount][duoBubblesCount][2];
						var textLength = currentGame[bubbleListCount][duoBubblesCount][2].length;
						if((textLength > 12) && (textLength < 23))
						{
							bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 12;
						}
						else if(textLength > 23)
						{
							bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 35;
						}
					}
					else // במקרה שיש תמונה
					{
						var pic = new(currentGame[bubbleListCount][duoBubblesCount][2]);
						pic.name = "picture";
						scale = Scale(bubble, pic); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
						pic.scaleX = scale; // שינוי גודל התמונה
						pic.scaleY = scale; // שינוי גודל התמונה
						pic.x = 62.35;
						pic.y = 62.35;
						
						var magGlass = new lib.magGlass;
						var widthBubble = bubble.nominalBounds.width;
						var heightBubble = bubble.nominalBounds.height;
						magGlass.x = 62.35;
						magGlass.y = 16.15;
			
						bubble.bubbleHit.bubbleColorChange.addChild(pic);
						
						bubble.bubbleHit.bubbleColorChange.addChild(magGlass);
						bubble.addEventListener("mouseover", overBubble); // פונקציית שינוי סמן העכבר בעת מעבר על הבועה
						bubble.addEventListener("mouseout", outBubble); // פונקציית ביטול שינוי סמן העכבר בעת יציאה מהבועה
						
						bubble.addEventListener("click", zoomPic);
					}
					positionNum+=2;
				}
				
				feedbackPage.DiagnosticFeedback.bubbleList.bubbleListAnim.addChild(duoBubbles);
				
			}
			feedbackPage.DiagnosticFeedback.upBtn.addEventListener("click", listScrolling);
			feedbackPage.DiagnosticFeedback.downBtn.addEventListener("click", listScrolling);
			feedbackPage.DiagnosticFeedback.upBtn.visible = false;
			
			stage.addChild(feedbackPage);
			
		}
		
		function gradeCalculator() // חישוב ציון
		{
			var totalGrade = 0; // סוכם את הציון
			var eachMaxGrade = 100 / (currentGame.length * 2); // חישוב כמה לכל מסיח
			
			for(var i = 0; i < currentGame.length; i++)
			{
				for(j = 0; j < 2; j++)
				{
					totalGrade += eachMaxGrade * Math.pow((2/3), currentGame[i][j][3]); // חישוב ציון לפי כמות טעויות // כל טעום מורידה שליש מהציון הנוכחי
				// first grade = 9, fails = 2 -> grade = 9 -> grade = 6 -> grade = 4 -> final grade = 4 - דוגמה
				}
			}
			return Math.round(totalGrade);
		}
		
		window.addEventListener("keydown", keyScrolling);
		function keyScrolling(e) // גלילה באמצעות חצי המקלדת
		{
			if(feedbackPageOpen == true)
			{
				if((e.keyCode == 38) && (listPosition == "down"))  // חץ למעלה
				{
					listScrolling();
				}
				else if((e.keyCode == 40) && (listPosition == "up")) // חץ למטה
				{
					listScrolling();
				}
			}
		}
		
		var listPosition = "up";
		
		function listScrolling() // גלגול הטבלה המסכמת
		{
			stage.getChildByName("feedbackPage").DiagnosticFeedback.bubbleList.play(); // גלילה
			if(listPosition == "up") // החלפת הכפתורים
			{
				listPosition = "down";
				stage.getChildByName("feedbackPage").DiagnosticFeedback.upBtn.visible = true;
				stage.getChildByName("feedbackPage").DiagnosticFeedback.downBtn.visible = false;
			}
			else
			{
				listPosition = "up";
				stage.getChildByName("feedbackPage").DiagnosticFeedback.upBtn.visible = false;
				stage.getChildByName("feedbackPage").DiagnosticFeedback.downBtn.visible = true;
			}
		}
		
		function restartGame() // איפוס משחק
		{
			resetGameArray();
			createGame();
		}
		
		function backToStart() // חזרה לבחירת משחק
		{
			resetGameArray();
			comboCreator();
		}
		
		function resetGameArray() // איפוס נתוני המשחק
		{
			for(var i = 0; i < currentGame.length; i++)
			{
				currentGame[i][2] = false;
				currentGame[i][3] = false;
				
				for(var j = 0; j < 2; j++)
				{
					currentGame[i][j][3] = 0;
				}
				
			}
			
			matchesRemain = currentGame.length;
			allBubbles = matchesRemain * 2;
			levelNum = 0;
			zoomPicLimit = false;
			
			feedbackPageOpen = false;
			stage.removeChild(stage.getChildByName("game_mc"));
			stage.removeChild(stage.getChildByName("feedbackPage"));
		}
		
		// ************ סיום     דף משוב מסכם     ************
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gameSizeBG
	this.stageBG = new lib.stageBG_mc();
	this.stageBG.name = "stageBG";
	this.stageBG.parent = this;
	this.stageBG.setTransform(918.9,593.5,0.458,0.584,0,0,0,957.6,485.2);

	this.timeline.addTween(cjs.Tween.get(this.stageBG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(480,310,960,620);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '128531FC687D4D46AB9D441B3FF25B1A',
	width: 960,
	height: 620,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/MatchInTheDesert_atlas_.png", id:"MatchInTheDesert_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
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
an.compositions['128531FC687D4D46AB9D441B3FF25B1A'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;