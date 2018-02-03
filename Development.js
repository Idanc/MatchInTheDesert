(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"Development_atlas_", frames: [[415,3016,250,318],[0,826,800,1202],[0,0,1359,824],[720,2030,680,1024],[0,2030,718,984],[0,3016,413,599],[802,826,220,292]]}
];


// symbols:



(lib.churchillPeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gandiPeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Illustration07 = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.juliusPeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mariePeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.napoleonPeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.oprahPeople = function() {
	this.spriteSheet = ss["Development_atlas_"];
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Agwg5IAABzAAxg5IAABz");
	this.shape.setTransform(4.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLhUICXBUIiXBWg");
	this.shape_1.setTransform(6.2,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,14.9,16.6);
p.frameBounds = [rect, new cjs.Rectangle(-1.3,-2.6,15.1,17.1)];


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAxgwIgxAwIgwAxAAxAxIgxgxIgwgw");
	this.shape.setTransform(4.9,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0BwIAAjfIDpAAIAADfg");
	this.shape_1.setTransform(5.4,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,14.8,14.8);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-6.3,-5.8,23.3,22.4)];


(lib.tutorial_upperHand_mc = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.tutorial_upperHand_mc, rect = new cjs.Rectangle(0,0,9.4,34.3), [rect]);


(lib.tutorial_underHand_mc = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#F4854E").s().p("AE9G1QjBhwjkjlQjujuhEigIDwBPIAJj+ICBD2IB7jgIAqD8IDCjtIBUOWQg6gVgkgUg");
	this.shape.setTransform(10.7,20.5,0.125,0.13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCDAB9").s().p("AI3PvQqxm1k+tJQhjkIgykQQgQhVgJhMIgFg6QJfBpEJD0QBxBoBCCKQA0BvAfCfQA5EdAeHiQAPDxADC4g");
	this.shape_1.setTransform(7.8,13.3,0.125,0.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15.9,26.8);
p.frameBounds = [rect, rect, rect];


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
	this.instance = new lib.oprahPeople();
	this.instance.parent = this;
	this.instance.setTransform(-110,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.oprahP, rect = new cjs.Rectangle(-110,-146,220,292), [rect]);


(lib.napoleonP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.napoleonPeople();
	this.instance.parent = this;
	this.instance.setTransform(-207,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.napoleonP, rect = new cjs.Rectangle(-207,-300,413,599), [rect]);


(lib.marieP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mariePeople();
	this.instance.parent = this;
	this.instance.setTransform(-359,-492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.marieP, rect = new cjs.Rectangle(-359,-492,718,984), [rect]);


(lib.juliusP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.juliusPeople();
	this.instance.parent = this;
	this.instance.setTransform(-340,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.juliusP, rect = new cjs.Rectangle(-340,-512,680,1024), [rect]);


(lib.gandiP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gandiPeople();
	this.instance.parent = this;
	this.instance.setTransform(-400,-601);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gandiP, rect = new cjs.Rectangle(-400,-601,800,1202), [rect]);


(lib.churchillP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.churchillPeople();
	this.instance.parent = this;
	this.instance.setTransform(-125,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.churchillP, rect = new cjs.Rectangle(-125,-159,250,318), [rect]);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask.setTransform(16.8,9.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC0030").s().p("AhJhVICTBVIiTBWg");
	this.shape.setTransform(7.4,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhThhICnBhIinBig");
	this.shape_1.setTransform(8.4,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D02F").s().p("AiYhZIExBZIkxBZg");
	this.shape_2.setTransform(15.3,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AinhhIFPBhIlPBig");
	this.shape_3.setTransform(16.8,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#419E4B").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_4.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask.setTransform(16.8,9.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBgZQADAKAAAPQAAAQgDAKg");
	this.shape.setTransform(17,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAAQAAgJACgJIADgGIAAAxQgEgJgBgQg");
	this.shape_1.setTransform(16.3,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAAQABgPAEgKIAAAzQgEgKgBgQg");
	this.shape_2.setTransform(16.3,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBgYIABAGQACAJAAAJQAAAQgDAJg");
	this.shape_3.setTransform(17,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAAQAAgGAEAAQAFAAAAAGQAAAHgFAAQgEAAAAgHg");
	this.shape_4.setTransform(16.7,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAAQAAgNAFgPQAGAQAAAMQAAANgGAQQgFgPAAgOg");
	this.shape_5.setTransform(14.3,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAAQAAgNAFgPQAGAQAAAMQAAANgGAQQgFgPAAgOg");
	this.shape_6.setTransform(19,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA0017").s().p("AgNAwQgHgKgEgJIiPAAIAAg5ICPAAQAEgJAHgKQAIgLAEAAQAEAAAIALQAIAKADAJICSAAIAAA5IiSAAQgDAJgIAKQgIALgEAAQgEAAgIgLg");
	this.shape_7.setTransform(16.8,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVgiQgEgBgDgGQgGgLgCgLQAKAJAEAJQAEAHgBADIA4BiIgCABg");
	this.shape_8.setTransform(16.4,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_9.setTransform(12.8,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVgiQgEgBgDgGQgGgLgCgLQAKAJAEAJQAEAHgBADIA4BiIgCABg");
	this.shape_10.setTransform(16.4,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA/IA4hiQgBgEAEgGQAEgJAKgJQgBAHgDAHIgEAIQgEAGgDABIg4Big");
	this.shape_11.setTransform(16.9,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA/IA4hiQgBgEAEgGQAEgJAKgJQgBAHgDAHIgEAIQgEAGgDABIg4Big");
	this.shape_12.setTransform(16.9,9.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, rect = new cjs.Rectangle(0,2.9,33.6,12.8), [rect]);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_1.setTransform(16.8,9.8);

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2DD30").s().p("AAAAkIAAgWIAAAAIAAAWgAAQADIABgCIAUAHIAAABgAgkAIIATgHIABACIgUAGgAAKgRIAMgSIACABIgNARgAgXgiIACgBIAMASIgBAAg");
	this.shape_13.setTransform(16.8,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2DD30").s().p("AAAATIgQAMIACgFIAXgSIACADIgIAGIASANIACAGgAgNAJIgRgMIAGAAIAYARIgDACIgHgGIgHAWIgFAEgAAQAZIgJgcIADAAIADAIIATgMIAFAAIgXAQIAHATgAgMAEIADgIIgXAAIgEgDIAcAAIAHgUIABAFIgJAcgAgEgEIABgDIAIAAIgGgWIABgGIAJAcIAVAAIgFADg");
	this.shape_14.setTransform(16.8,9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4BA2D7").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAOgOAUAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgUAAgOgOg");
	this.shape_15.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, rect = new cjs.Rectangle(11.9,4.9,9.8,9.8), [rect]);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhOBiIAAjDICcAAIAADDg");
	mask_2.setTransform(7.9,9.8);

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEASIgKAIIACgNIgNACIAIgKIgMgFIAMgEIgIgKIANACIgCgNIAKAIIAEgMIAFAMIAKgIIgCANIANgCIgIAKIAMAEIgMAFIAIAKIgNgCIACANIgKgIIgFAMg");
	this.shape_16.setTransform(3.8,14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAIQgIgIAAgKQAEAKAJADIACgCIgFgCIAGgBIgDgGIAGABIgBgFIAFADIACgGIACAFIAEgFIABAGIAFgDIgBAFIAGgBIgDAGIAGABIgFACIACACQAJgDAEgKQAAAKgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_17.setTransform(3.8,7.3);

	var maskedShapeInstanceList = [this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, rect = new cjs.Rectangle(0.9,5.7,6,11.6), [rect]);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_1.setTransform(16.8,9.8);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#337B40").s().p("AinAeIFPg7IAAA7g");
	this.shape_5.setTransform(16.8,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACog8IAAA8IlPA9g");
	this.shape_6.setTransform(16.8,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C41D32").s().p("ABKhhIBeAAIAABLIlPB4g");
	this.shape_7.setTransform(16.8,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4D75D").s().p("AAAhhIB5AAIjxDDg");
	this.shape_8.setTransform(12.1,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#223E84").s().p("Ag7hhIB3AAIh3DDg");
	this.shape_9.setTransform(6,9.8);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbBUIAAinIA3AAIAACng");
	mask.setTransform(3.6,8.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9002A").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5EB2E").s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(0.8,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9002A").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQAIAAAAAHQAAAIgIAAQgCAAgCgCg");
	this.shape_2.setTransform(0.8,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9002A").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(0.8,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5EB2E").s().p("AgGAAQAAgCACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_4.setTransform(0.8,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9002A").s().p("AgEAGQgDgCAAgEQAAgCADgCQACgDACAAQAIAAAAAHQAAAIgIAAQgCAAgCgCg");
	this.shape_5.setTransform(0.8,10.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, rect = new cjs.Rectangle(0.8,9.4,0.8,3.1), [rect]);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask.setTransform(16.8,9.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5EB2E").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(5.6,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5EB2E").s().p("AgNgDIAbAAIgOAHg");
	this.shape_1.setTransform(5.6,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5EB2E").s().p("AgNADIAAgFIAbAAIAAAFg");
	this.shape_2.setTransform(5.6,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5EB2E").s().p("AgNADIAAgFIAbAAIAAAFg");
	this.shape_3.setTransform(5.6,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5EB2E").s().p("AgNgDIAbAAIgOAHg");
	this.shape_4.setTransform(5.6,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5EB2E").s().p("AgGAiIAAhDIANAAIAABDg");
	this.shape_5.setTransform(8,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5EB2E").s().p("AgGAiIAAhDIANAAIAABDg");
	this.shape_6.setTransform(3.2,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5EB2E").s().p("AgGAEIACgEIAAgBIABgCIAAACIABABIgBACIAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAAAIAAAAIgBgCIAAgCIABgDIAAgDIAAgCIAAABIABADIACAFIgBACIgBABIAAABIACABQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBIAAAAIgBgCIABgBIAAgCIABACIAAABIABAEQAAAHgHAAQgGAAAAgHg");
	this.shape_7.setTransform(5.6,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5EB2E").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(5.6,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9002A").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_9.setTransform(5.6,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5EB2E").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_10.setTransform(5.6,7.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, rect = new cjs.Rectangle(2.5,3.1,6.2,12.6), [rect]);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_3.setTransform(16.8,9.8);

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7DE29").s().p("AgpAqQgRgRAAgZQAAgXARgRQARgSAYAAQAYAAARASQASARAAAXQAAAZgSARQgRARgYAAQgYAAgRgRg");
	this.shape_18.setTransform(13.7,9.8);

	var maskedShapeInstanceList = [this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, rect = new cjs.Rectangle(7.9,3.9,11.8,11.8), [rect]);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_2.setTransform(16.8,9.8);

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBgLIALAEIgTATg");
	this.shape_10.setTransform(4.4,5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACgLIAIAKIgTANg");
	this.shape_11.setTransform(4.5,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJgBIAIgKIALAXg");
	this.shape_12.setTransform(5.4,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJgHIALgEIAIAXg");
	this.shape_13.setTransform(5.4,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLgFIAXAAIAAALg");
	this.shape_14.setTransform(3.8,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNgGIAaAEIgGAJg");
	this.shape_15.setTransform(3.9,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMgCIAagEIgUANg");
	this.shape_16.setTransform(5.9,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLgFIAXAAIgXALg");
	this.shape_17.setTransform(6,4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBgNIAHAXIgLADg");
	this.shape_18.setTransform(5.1,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAKIAHgXIAEAag");
	this.shape_19.setTransform(4.7,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C22623").s().p("AinAxIAAhhIFPAAIAABhg");
	this.shape_20.setTransform(16.8,14.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2530A9").s().p("AgwBiIAAjDIBhAAIAADDg");
	this.shape_21.setTransform(4.9,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_22.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


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
	this.shape_6.graphics.f("#FFB47A").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_6.setTransform(70,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#BB8459","#E2A16E"],[0.78,0.945],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_7.setTransform(70.1,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D99968").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_8.setTransform(70,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#BB8459","#E2A16E"],[0.678,0.886],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_9.setTransform(70.1,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#875E3F").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_10.setTransform(70,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#E2A16E","#BB8459"],[0.792,1],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_11.setTransform(70.1,19.6);

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
	this.shape_6.graphics.rf(["#FCE9CD","#DECEB5"],[0.8,1],15.1,-16.8,0,17.4,-16.8,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FCE9CD","#DECEB5"],[0.8,1],-17.3,16,0,-15.1,16,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#DECEB5","#FCE9CD"],[0.78,1],-17.1,16,0,-15.1,16,46.8).s().p("AjDGAQhkAAAAhkIAAo3QAAhkBkAAIGHAAQBkAAAABkIAAI3QAABkhkAAg");

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
	this.shape_4.graphics.f("#FFB47A").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_4.setTransform(70,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#BB8459","#E2A16E"],[0.78,0.945],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_5.setTransform(70.1,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D99968").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_6.setTransform(70,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#BB8459","#E2A16E"],[0.678,0.886],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_7.setTransform(70.1,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#875E3F").s().p("An4DDQhQAAg6g6Qg5g4AAhRQAAhPA5g6QA6g5BQAAIPxAAQBQAAA6A5QA5A6AABPQAABRg5A4Qg6A6hQAAgAp1h+Qg4A2AABIQAABLA4A0QA4A1BPAAIPeAAQBPAAA3g1QA5g0AAhLQAAhIg5g2Qg3g0hPAAIveAAQhPAAg4A0g");
	this.shape_8.setTransform(70,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#E2A16E","#BB8459"],[0.792,1],0,0,0,0,0,71.6).s().p("AnuC0QhPAAg4g1Qg4g1AAhKQAAhJA4g1QA4g1BPABIPeAAQBOgBA4A1QA5A1gBBJQABBKg5A1Qg4A1hOAAg");
	this.shape_9.setTransform(70.1,19.6);

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
	this.shape.graphics.f("#FFB47A").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape.setTransform(52.6,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#BB8459","#E2A16E"],[0.78,0.945],1.1,-0.2,0,1.1,-0.2,62.7).s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
	this.shape_1.setTransform(52.6,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D99968").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape_2.setTransform(52.6,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#BB8459","#E2A16E"],[0.69,0.859],1.1,-0.2,0,1.1,-0.2,62.7).s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
	this.shape_3.setTransform(52.6,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#875E3F").s().p("Al3C6QhOAAg2g3Qg3g2ABhNQgBhMA3g3QA2g2BOAAILvAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAgAnvh+Qg1A1AABJQAABKA1A1QA2A1BLAAILdAAQBMAAA0g1QA2g1AAhKQAAhJg2g1Qg0g0hMAAIrdAAQhLAAg2A0g");
	this.shape_4.setTransform(52.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#E2A16E","#BB8459"],[0.773,1],1.1,-0.2,0,1.1,-0.2,62.7).s().p("AluC0QhMAAg1g1Qg1g1AAhKQAAhKA1g0QA1g1BMABILdAAQBLgBA1A1QA2A0AABKQAABKg2A1Qg1A1hLAAg");
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


(lib.Path_169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAfQgDgeAUggIACgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgKAeIgGAgIgBABIgCgCg");
	this.shape.setTransform(1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_169, rect = new cjs.Rectangle(0,0,2.1,6.6), [rect]);


(lib.Path_168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAYIgBgBQgBgGAHgRQAEgOAFgHQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgIAZIgDAKQgDAGgDADIgBAAIAAAAg");
	this.shape.setTransform(1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_168, rect = new cjs.Rectangle(0,0,2,4.8), [rect]);


(lib.Path_167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAUQgCgKAFgLQAFgMAHgGQABAAAAgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAIgKARIgGAUIgCABIgBgBg");
	this.shape.setTransform(1.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_167, rect = new cjs.Rectangle(0,0,2.2,4.2), [rect]);


(lib.Path_166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLATQAIgVALgQQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAQgGARgNAUIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape.setTransform(1.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_166, rect = new cjs.Rectangle(0,0.1,2.3,4), [rect]);


(lib.Path_165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAPQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAIgNQAEgJAEgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQgBAAAAAAQAAAEgGAIIgEAGIAAACIgBACIgDAEIAAgBQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape.setTransform(1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_165, rect = new cjs.Rectangle(0,0.1,2.2,3.1), [rect]);


(lib.Path_164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAcQgDgDgGgWQgGgSgCgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAABQAAAAABAAQAFALAEAQQAHATAAAIIgBACIgBgBg");
	this.shape.setTransform(1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_164, rect = new cjs.Rectangle(0,0,2,5.7), [rect]);


(lib.Path_163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHAWQgEgPgDgHIgJgTQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAHAGAFANQAFAMgBALQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape.setTransform(1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_163, rect = new cjs.Rectangle(0,0,2.1,4.6), [rect]);


(lib.Path_162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AANAcIgPgbQgJgOgEgNQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAABQAJAKAHAQIANAbQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBAAIgBgBg");
	this.shape.setTransform(1.6,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_162, rect = new cjs.Rectangle(0,0,3.3,5.8), [rect]);


(lib.Path_161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAKAWIgNgVQgHgMgDgKIABgBIABAAQAJAKAQAfQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgCABIgBgBg");
	this.shape.setTransform(1.4,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_161, rect = new cjs.Rectangle(0,0,2.9,4.6), [rect]);


(lib.Path_160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgFAZQgFgdAOgVIACAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgKAcABAVQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_160, rect = new cjs.Rectangle(0,0,1.4,5.3), [rect]);


(lib.Path_159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAhIgBgCQAGggAMgeQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIABACQgFAdgNAhIgCABIAAAAg");
	this.shape.setTransform(1.1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_159, rect = new cjs.Rectangle(0,0,2.3,6.6), [rect]);


(lib.Path_158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAZQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQACgUAOgbIACAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgIAZIgJAXIgBAAIgBAAg");
	this.shape.setTransform(1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_158, rect = new cjs.Rectangle(0,0.1,2.1,5.1), [rect]);


(lib.Path_157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIARQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAGgWAMgHIACAAIAAACIgIANQgFAJgCAGQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgBAAg");
	this.shape.setTransform(1.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_157, rect = new cjs.Rectangle(0,0,2.1,3.4), [rect]);


(lib.Path_156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AALAeQgSgngGgTQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIACABQAKASAOAoQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAAAAIgCgBg");
	this.shape.setTransform(1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_156, rect = new cjs.Rectangle(0,0,2.9,6.2), [rect]);


(lib.Path_155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAbQgMgggGgUIABgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAHARAKAjIAAABIgCAAg");
	this.shape.setTransform(1.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_155, rect = new cjs.Rectangle(0,0,2.1,5.5), [rect]);


(lib.Path_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAEAPQgKgVAAgHIAAgBIACAAQAEAGAHAVQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape.setTransform(0.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_154, rect = new cjs.Rectangle(0,0,1.5,3), [rect]);


(lib.Path_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACAJQgGgJAAgIIABgBIABAAQAFAHABAKIAAACIgCgBg");
	this.shape.setTransform(0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_153, rect = new cjs.Rectangle(0,0,0.9,2), [rect]);


(lib.Path_152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AABALIgCgKIgDgKQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIACABQAAACACAIIADAKQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape.setTransform(0.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_152, rect = new cjs.Rectangle(0,0,1,2.5), [rect]);


(lib.Path_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAKAbQgRglgEgOQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAHAMANAoQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(1.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_151, rect = new cjs.Rectangle(0,0,2.4,5.5), [rect]);


(lib.Path_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAYQgNgkgCgKQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAGALAKAjQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgDgBg");
	this.shape.setTransform(1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_150, rect = new cjs.Rectangle(0,0,2,5), [rect]);


(lib.Path_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAXQgNgWABgWIACgCIABABQAGAdAGAOQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape.setTransform(0.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_149, rect = new cjs.Rectangle(0,0,1.6,4.8), [rect]);


(lib.Path_148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAhQACgqAOgZQABAAAAAAQABAAAAAAQAAAAAAAAQABABgBAAIgJAhQgDASgBAPQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_148, rect = new cjs.Rectangle(0,0.1,1.9,7), [rect]);


(lib.Path_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAXQABgdAOgRIACAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgNAbgBASQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_147, rect = new cjs.Rectangle(0,0,1.9,4.9), [rect]);


(lib.Path_146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAXQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAEgaAOgQQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABIAAACQgMAYgEAQQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgBAAg");
	this.shape.setTransform(1.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_146, rect = new cjs.Rectangle(0,0,2.1,4.5), [rect]);


(lib.Path_145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAeQgLgrgDgPIABgCIACABQAGATAIAnQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBAAIgBgBg");
	this.shape.setTransform(0.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_145, rect = new cjs.Rectangle(0,0,1.8,6.2), [rect]);


(lib.Path_144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAfQgOgqgDgSQgBgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAGAOAMAuQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_144, rect = new cjs.Rectangle(0,0.1,2.1,6.4), [rect]);


(lib.Path_143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAWQgQgYADgTQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABIAGAVQADAMAFAIQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgBABIgCgBg");
	this.shape.setTransform(0.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_143, rect = new cjs.Rectangle(0,0,1.9,4.6), [rect]);


(lib.Path_142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgFAZQgDgdANgVQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQgKAbAAAWIgBABIgBgBg");
	this.shape.setTransform(0.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_142, rect = new cjs.Rectangle(0,0.1,1.4,5.2), [rect]);


(lib.Path_141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgFAWQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAEgTAHgVIABgBIABABQgCAQgFASQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgDAFIgBABIgBAAg");
	this.shape.setTransform(0.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_141, rect = new cjs.Rectangle(0.1,0,1.4,4.4), [rect]);


(lib.Path_140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAYQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAGgcAOgPQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAACIgKAUQgFAMgDAKQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(1.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_140, rect = new cjs.Rectangle(0,0,2.3,4.8), [rect]);


(lib.Path_139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AADAfQgFgZgDgjIABgBIABAAQAHAhABAcIAAAAIgCAAg");
	this.shape.setTransform(0.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_139, rect = new cjs.Rectangle(0,0,1.1,6.3), [rect]);


(lib.Path_138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAEAaQgHgjgBgPQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAQADAPAEAiIgBABIAAAAg");
	this.shape.setTransform(0.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_138, rect = new cjs.Rectangle(0,0,1,5.2), [rect]);


(lib.Path_137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AADATIgHglQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABABQACAFAFAgIgBABIgBgBg");
	this.shape.setTransform(0.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_137, rect = new cjs.Rectangle(0,0,1.1,4), [rect]);


(lib.Path_136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHASIgIgRQgFgKgDgIIABgBIABABQAFAGAEALIAHARQABAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBAAIgBgBg");
	this.shape.setTransform(1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_136, rect = new cjs.Rectangle(0,0,1.9,3.8), [rect]);


(lib.Path_135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgEAcQAAgbAGgdIABgBIACACQgBAbgGAcIgBACIgBgCg");
	this.shape.setTransform(0.5,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_135, rect = new cjs.Rectangle(0,0,1,6), [rect]);


(lib.Path_134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgFARQAAgVAJgNIABAAIABACQgHAVAAALQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(0.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_134, rect = new cjs.Rectangle(0,0,1.2,3.7), [rect]);


(lib.Path_133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGARQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAKgZACgEQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAHgEAIIgGAPIgCABIgBAAg");
	this.shape.setTransform(0.8,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_133, rect = new cjs.Rectangle(0,0,1.7,3.3), [rect]);


(lib.Path_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAcQgDglABgTQAAAAABAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAOADAqQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_132, rect = new cjs.Rectangle(0,0,0.7,6), [rect]);


(lib.Path_131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AABAeQgDgnAAgVQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAPACAtIgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(0.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_131, rect = new cjs.Rectangle(0,0,0.7,6.3), [rect]);


(lib.Path_130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACARQgHgTAEgOQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABAPQABAKACAHIgBAAIgBAAg");
	this.shape.setTransform(0.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_130, rect = new cjs.Rectangle(0,0,0.7,3.5), [rect]);


(lib.Path_129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAIQgDgIADgHQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQgCAGACAHQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAIgBAAg");
	this.shape.setTransform(0.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_129, rect = new cjs.Rectangle(0,0,0.5,1.7), [rect]);


(lib.Path_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("ABOLmQgfifhAixIg6iRQjdlvg/hvQgkg/hChjQhQh4gZgpIAAgDQgQgUgSgcQA5gbBOgYQApgNBigaQDUg4BlgTQCegeCEAHQCcAJB9A9IArgkIgMAWQhkDChjD+QgxCAgeBYQh0FbhLETQgOAygKCAQgDAmgDACIAAAAQgEAAgIgng");
	this.shape.setTransform(60.1,78.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_120, rect = new cjs.Rectangle(0,0,120.2,156.3), [rect]);


(lib.Path_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgHAiQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAIgsAGgUQABgBABAAQAAAAABAAQAAAAAAAAQAAABAAAAQgCAYgLApQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(0.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_118, rect = new cjs.Rectangle(0,0.1,1.9,6.8), [rect]);


(lib.Path_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGAeQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABAAQAFghAHgXQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQgDAVgLAiIgBABIAAAAg");
	this.shape.setTransform(0.8,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_117, rect = new cjs.Rectangle(0,0,1.7,6), [rect]);


(lib.Path_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKAjQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAIgkALgeQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgGAdgNAlIgCABIgBAAg");
	this.shape.setTransform(1.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_116, rect = new cjs.Rectangle(0,0,2.4,7.1), [rect]);


(lib.Path_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgHAcQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAIghAHgSIACgBIABABQgCAVgMAfQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_115, rect = new cjs.Rectangle(0,0,1.9,5.6), [rect]);


(lib.Path_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgMAkQADgnATggQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgDAMgKAWIgJAkQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(1.3,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_114, rect = new cjs.Rectangle(0,0,2.7,7.5), [rect]);


(lib.Path_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAoQAAgqAbglQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgQAggKAuIgBABIgCgBg");
	this.shape.setTransform(1.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_113, rect = new cjs.Rectangle(0,0,3.1,8.2), [rect]);


(lib.Path_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLAiQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAIggAOghQAAAAAAAAQABAAAAAAQAAgBABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgIAfgOAhIgCACIAAgBg");
	this.shape.setTransform(1.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_112, rect = new cjs.Rectangle(0,0,2.7,6.9), [rect]);


(lib.Path_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAaQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAGgZALgWQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQgGAWgJATIABABIAAABIgEAEIgBABIgBAAg");
	this.shape.setTransform(1.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_111, rect = new cjs.Rectangle(0.1,0,2.3,5.2), [rect]);


(lib.Path_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgNAdQADghAVgZQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQgNAbgJAdQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape.setTransform(1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_110, rect = new cjs.Rectangle(0,0,2.8,6.2), [rect]);


(lib.Path_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgNAcQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAHgcATgYQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAACIgXAvIADgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgGAEIgCABIgBAAg");
	this.shape.setTransform(1.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_109, rect = new cjs.Rectangle(0.1,0,3.1,5.7), [rect]);


(lib.Path_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAQQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAKgUAIgIQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQgEAMgNARIAAAAIgCABIgBgBg");
	this.shape.setTransform(1.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_108, rect = new cjs.Rectangle(0,0,2.2,3.4), [rect]);


(lib.Path_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgDAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAg");
	this.shape.setTransform(0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_107, rect = new cjs.Rectangle(0,0,0.4,0.2), [rect]);


(lib.Path_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgBAAIACAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAg");
	this.shape.setTransform(0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_106, rect = new cjs.Rectangle(0,0,0.3,0.3), [rect]);


(lib.Path_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAcQgQgjgGgTQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAJARANAlQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAIgCgBg");
	this.shape.setTransform(1.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_105, rect = new cjs.Rectangle(0,0,2.8,5.9), [rect]);


(lib.Path_104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHAaQgQgpgCgKQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAAAQAHAOALAmQABABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(1.2,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_104, rect = new cjs.Rectangle(0,0,2.4,5.7), [rect]);


(lib.Path_103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAbQgDgEgHgUQgHgSgBgKQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAFAJAFASQAHAUAAAGQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape.setTransform(1.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_103, rect = new cjs.Rectangle(0,0,2.3,5.7), [rect]);


(lib.Path_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAEAQIgFgNIgMgcQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAEAHAKAXIAFAMQADAHAAAGIgBABQgEgFgFgIg");
	this.shape.setTransform(1.5,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_102, rect = new cjs.Rectangle(0.1,0,2.9,5.8), [rect]);


(lib.Path_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAZQgPgbgHgVQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAJAQAOAfQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAIgCgBg");
	this.shape.setTransform(1.4,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_101, rect = new cjs.Rectangle(0,0.1,2.8,5.2), [rect]);


(lib.Path_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAPAdQgZgngIgRQAAgBAAAAQgBAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAMAPAXAoQAAABAAAAQABAAgBABQAAAAAAAAQAAAAgBABIgBAAIgCgBg");
	this.shape.setTransform(1.9,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_100, rect = new cjs.Rectangle(0,0.1,3.9,6), [rect]);


(lib.Path_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAOAaQgMgYgSgZQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQALAJAIAOQAIANACAPQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBAAIgBgBg");
	this.shape.setTransform(1.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_99, rect = new cjs.Rectangle(0,0,3.5,5.5), [rect]);


(lib.Path_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHARQgNgXgDgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAQAEAGALAbQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAIgBgBg");
	this.shape.setTransform(1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_98, rect = new cjs.Rectangle(0,0,2,3.7), [rect]);


(lib.Path_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIATIgKgSQgGgJgCgIQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAFAGAFALIAIASQAAAAAAABQABAAgBAAQAAABAAAAQAAAAgBABIgBAAIgBgBg");
	this.shape.setTransform(1.1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_97, rect = new cjs.Rectangle(0,0,2.3,4), [rect]);


(lib.Path_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgDAqQACg3ADgcIABgBIABACQAAARgDAYIgCApIgBABIgBgBg");
	this.shape.setTransform(0.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_96, rect = new cjs.Rectangle(0,0,0.8,8.6), [rect]);


(lib.Path_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgCAcIADg2IABgCIABACQAAAOgDAoIgBABIgBgBg");
	this.shape.setTransform(0.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_95, rect = new cjs.Rectangle(0,0,0.7,5.7), [rect]);


(lib.Path_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgFAfIAJg+IABAAIgJA/IAAAAIgBgBg");
	this.shape.setTransform(0.6,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_94, rect = new cjs.Rectangle(0,0,1.1,6.5), [rect]);


(lib.Path_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGAWQgBgaALgSIACAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgKAYAAASQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_93, rect = new cjs.Rectangle(0,0,1.4,4.7), [rect]);


(lib.Path_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKArIgBgBQAMg9AJgWIABgBIABABQgDATgGAWIgLArIgBAAIgBAAg");
	this.shape.setTransform(1.2,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_92, rect = new cjs.Rectangle(0,0,2.4,8.6), [rect]);


(lib.Path_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAkQAIgvAGgYIACgBIABACQgDASgNA0IAAABIgBgBg");
	this.shape.setTransform(0.9,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_91, rect = new cjs.Rectangle(0,0,1.8,7.3), [rect]);


(lib.Path_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAkQADghAMgmQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQgFAogLAfIgCABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_90, rect = new cjs.Rectangle(0,0,2.1,7.5), [rect]);


(lib.Path_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKAsQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAMg8AIgVQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQgDAZgRA5QAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgBAAg");
	this.shape.setTransform(1.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_89, rect = new cjs.Rectangle(0,0,2.6,8.7), [rect]);


(lib.Path_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAuQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAShBALgWQAAgBAAAAQABAAAAAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgDATgJAYIgQAsQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBgBg");
	this.shape.setTransform(1.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_88, rect = new cjs.Rectangle(0,0,3.5,9.4), [rect]);


(lib.Path_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLAeQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQALgmAJgSQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgFAXgQAhIgCABIgBAAg");
	this.shape.setTransform(1.3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_87, rect = new cjs.Rectangle(0,0,2.5,6.1), [rect]);


(lib.Path_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgNAkQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAFgoAWgcQABAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgSAjgJAeQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgBAAg");
	this.shape.setTransform(1.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_86, rect = new cjs.Rectangle(0,0,3.3,7.2), [rect]);


(lib.Path_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAGgsAXgZQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgEALgMAVIgMAjQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(1.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_85, rect = new cjs.Rectangle(0,0,3.5,7.5), [rect]);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAiQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAJgrAUgUQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgRAdQgHARgEAPQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(1.7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_84, rect = new cjs.Rectangle(0,0,3.4,6.8), [rect]);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIASQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQAGgWALgJQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgJAOQgEAJgCAHQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(1.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_83, rect = new cjs.Rectangle(0,0,2.2,3.6), [rect]);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAdQgPgcAAgdQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAIAiAIAVQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBAAIgCgBg");
	this.shape.setTransform(1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_82, rect = new cjs.Rectangle(0,0,2.1,6.1), [rect]);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAiQgQgrgEgXQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAJAXALArQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape.setTransform(1.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_81, rect = new cjs.Rectangle(0,0,2.5,7.1), [rect]);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAfQgLgggDgdQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAIAYAGAkQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape.setTransform(1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_80, rect = new cjs.Rectangle(0,0,2,6.6), [rect]);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAKAgQgRgfgIgeQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAPAYAMAkQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(1.6,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79, rect = new cjs.Rectangle(0,0,3.3,6.7), [rect]);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AALAhQgVgsgFgUQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAJAPASAxQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape.setTransform(1.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_78, rect = new cjs.Rectangle(0,0,3.3,7.1), [rect]);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAlIgNgkQgHgUgDgRQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAHAPAGAVIAMAlQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_77, rect = new cjs.Rectangle(0,0,3,7.9), [rect]);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAKAgQgIgMgFgSIgJgfQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIANAeQAIARABAOQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAIgBAAg");
	this.shape.setTransform(1.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_76, rect = new cjs.Rectangle(0,0,2.7,6.5), [rect]);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAeQgSgtgEgNQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABABQAAAAAAAAQAGAMAGASIALAdQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBABIgCgCg");
	this.shape.setTransform(1.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_75, rect = new cjs.Rectangle(0,0,2.8,6.4), [rect]);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAKAeQgTgqgDgQQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAHALAGASIAKAdQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBAAIgBgBg");
	this.shape.setTransform(1.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_74, rect = new cjs.Rectangle(0,0,2.7,6.3), [rect]);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AADAqIgCgBQgCgJgDgcQgCggABgKQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQACAOACAZIACAUQABAMgCAJQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(0.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_73, rect = new cjs.Rectangle(0.1,0,1.3,8.4), [rect]);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgDAqQgBg0AEgfQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQACAjgEAwQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape.setTransform(0.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_72, rect = new cjs.Rectangle(0,0,0.7,8.9), [rect]);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJA4QgFg4AVg3QAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAgBABQgNA2gBA4QAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(1.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_71, rect = new cjs.Rectangle(0,0,2.1,11.5), [rect]);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgNA5QAEg+ATg1QABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQgQBDgGAvQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(1.4,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_70, rect = new cjs.Rectangle(0,0,2.8,12), [rect]);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgRA3QAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAKg+AWgrQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgRAzIgQA0QAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1.9,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_69, rect = new cjs.Rectangle(0,0,3.9,11.1), [rect]);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAnQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgqAQggQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIgJAjIgHAlQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1.1,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68, rect = new cjs.Rectangle(0,0,2.2,7.9), [rect]);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKAlQAAguARgdQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgJAlQgEAVgDAQQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(1.1,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67, rect = new cjs.Rectangle(0,0,2.1,8), [rect]);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLAgQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgQAGgPQAHgSAKgKQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgEAKgKASIgIAeQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, rect = new cjs.Rectangle(0,0,2.9,6.4), [rect]);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKAiQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQALgrAJgTQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQgDAXgQAnQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(1.3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65, rect = new cjs.Rectangle(0,0,2.6,6.8), [rect]);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgPAoQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEguAZgeQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgWAvgHAbQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1.7,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, rect = new cjs.Rectangle(0,0,3.5,8), [rect]);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAbQABgiANgVQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgJAaQgEAQgCAMQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, rect = new cjs.Rectangle(0,0,2.1,6), [rect]);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgNAcQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAQgnAJgNQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAgBABQgFAQgTAjIgCABIgBAAg");
	this.shape.setTransform(1.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_62, rect = new cjs.Rectangle(0,0.1,2.9,5.6), [rect]);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAEAoQgGgQgDgXQgCgTACgTQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIACAlIAFAnIgCACIgBgBg");
	this.shape.setTransform(0.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_61, rect = new cjs.Rectangle(0,0,1.4,8.2), [rect]);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAEAgQgJgtgBgRQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAFAUAEArQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape.setTransform(0.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_60, rect = new cjs.Rectangle(0,0.1,1.4,6.6), [rect]);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACAZQgIghABgPIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAFAPABAhQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(0.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, rect = new cjs.Rectangle(0,0,1.2,5.3), [rect]);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AALAgQgVgrgFgUQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAJAOASAwQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape.setTransform(1.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_58, rect = new cjs.Rectangle(0,0,3.3,6.8), [rect]);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAfQgMgwgCgNQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAEAPAJAtQABAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape.setTransform(1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, rect = new cjs.Rectangle(0,0,1.9,6.5), [rect]);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHAiIgJghQgFgTgCgOQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAFARAKAxQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABIgBgCg");
	this.shape.setTransform(1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_56, rect = new cjs.Rectangle(0,0,2.1,7.1), [rect]);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAiQgPghgEghQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAIACABQAQAeAFAjQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABIgBAAIgCgBg");
	this.shape.setTransform(1.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, rect = new cjs.Rectangle(0,0,2.5,7), [rect]);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACAWQgNgZAGgSQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIADAVIAFAUQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCAAIgCgBg");
	this.shape.setTransform(0.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_54, rect = new cjs.Rectangle(0,0,1.5,4.7), [rect]);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAaIgJgaQgFgOgBgMQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAGAKADAQIAIAaQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(1.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_53, rect = new cjs.Rectangle(0,0,2.2,5.8), [rect]);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHAaIgKgZQgGgNgCgLQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAGAKAEAPIAIAYQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgBAAIgCgBg");
	this.shape.setTransform(1.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_52, rect = new cjs.Rectangle(0,0,2.4,5.4), [rect]);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACATQgJgYABgMIABgCIACABQAHAMADAXQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCAAIgCgBg");
	this.shape.setTransform(0.7,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, rect = new cjs.Rectangle(0,0,1.5,4.1), [rect]);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AABAwQgJguAFgwQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAqAFAzQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_50, rect = new cjs.Rectangle(0,0,1.2,9.9), [rect]);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIA3QgCg8ARgyQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgLBDgDArQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_49, rect = new cjs.Rectangle(0.1,0,1.8,11.5), [rect]);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAkQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQALg1AFgPQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQgCATgNAxQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48, rect = new cjs.Rectangle(0,0.1,2.1,7.3), [rect]);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAlQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQALg1AHgRQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgCAPgGAUIgJAkQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(1.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_47, rect = new cjs.Rectangle(0,0.1,2.3,7.5), [rect]);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgKAjQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAEgnARgcQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQgPArgEAXQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(1.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_46, rect = new cjs.Rectangle(0,0,2.5,7.1), [rect]);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAcQAAgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAJgiAHgRQABgBABAAQAAAAAAABQABAAAAAAQAAAAAAABQgCAMgNAoIgCABIgBAAg");
	this.shape.setTransform(1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_45, rect = new cjs.Rectangle(0.1,0.1,2,5.5), [rect]);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAqQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAWhCAHgPQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQgEARgJAXIgPApQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(1.7,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_44, rect = new cjs.Rectangle(0.1,0.1,3.3,8.5), [rect]);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLAbQACghATgWQAAAAABAAQAAgBAAAAQAAAAABABQAAAAAAAAIAAACQgNAdgFAYQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape.setTransform(1.2,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_43, rect = new cjs.Rectangle(0,0,2.5,5.9), [rect]);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgMAaQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQANgfALgRQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABgBAAQgGAUgQAcIgCACIgCgBg");
	this.shape.setTransform(1.5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42, rect = new cjs.Rectangle(0,0,2.9,5.4), [rect]);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgJAUQAAgBAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAFgZAPgLIACAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgKARIgHASIgCABIgBAAg");
	this.shape.setTransform(1.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_41, rect = new cjs.Rectangle(0,0,2.3,3.9), [rect]);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AADAnQgOggAHgtQAAAAAAgBQAAAAABAAQAAAAABABQAAAAABABIAEAlIAEAmQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgCgBg");
	this.shape.setTransform(0.7,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, rect = new cjs.Rectangle(0,0,1.5,8), [rect]);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAdQgJgZgEgfQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQALAgACAYQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0.9,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_39, rect = new cjs.Rectangle(0,0,1.8,6.1), [rect]);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAlQgQglAAgjQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAHAkIAKAjQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgBAAIgCgBg");
	this.shape.setTransform(1.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_38, rect = new cjs.Rectangle(0,0,2.2,7.7), [rect]);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAJAhQgUgegBgiQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIADABQAKAdALAiQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAIgCgBg");
	this.shape.setTransform(1.3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, rect = new cjs.Rectangle(0,0,2.6,6.8), [rect]);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAiQgDgPgFgTIgLggQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQAQAZAFAqQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(1.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, rect = new cjs.Rectangle(0,0,2.5,7.1), [rect]);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAcQgMgdgCgZQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIACABQAJAWAFAgQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCgBg");
	this.shape.setTransform(0.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, rect = new cjs.Rectangle(0,0,1.8,5.8), [rect]);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAYQgKgUgCgbIABgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAKAXACAXIgCABIAAABIgBgBg");
	this.shape.setTransform(0.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, rect = new cjs.Rectangle(0,0,1.6,4.9), [rect]);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACAQQgEgHgCgIQgDgJAEgHQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIABACIAAAOQABAHAEAGQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgBgBg");
	this.shape.setTransform(0.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33, rect = new cjs.Rectangle(0,0,1.3,3.4), [rect]);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAqIgCgqQgBgYACgRQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQACATAABAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(0.3,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, rect = new cjs.Rectangle(0,0,0.7,8.8), [rect]);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAiQgLgugCgVQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACABQAGAWAIAsQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(0.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, rect = new cjs.Rectangle(0,0,1.8,7.1), [rect]);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHApQgSgvABghQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAHAoQAFAYAFAPQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(1.1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, rect = new cjs.Rectangle(0,0.1,2.3,8.4), [rect]);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHApQgNgzgEgeQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIADABQAJAdAIA0QAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape.setTransform(1.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, rect = new cjs.Rectangle(0,0,2.2,8.6), [rect]);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAIAfQgDgGgIgYQgHgVgBgJQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIADABQAFAJAFATIAFAPIAEAQQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCABIgBgBg");
	this.shape.setTransform(1.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, rect = new cjs.Rectangle(0,0,2.4,6.4), [rect]);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAHAgIgJggQgFgRgBgOQAAAAAAAAQAAgBAAAAQAAAAABAAQABAAAAABQAFAMAEATIAGAfIgBACIgBgBg");
	this.shape.setTransform(0.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, rect = new cjs.Rectangle(0,0.1,1.9,6.6), [rect]);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGAsQAAg4AKghQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAAAIgHAtQgCAZAAATQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, rect = new cjs.Rectangle(0,0.1,1.4,9.4), [rect]);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgHAsQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAJg4AHgbIACgBIABACQgDAXgMA8QAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, rect = new cjs.Rectangle(0,0,2,8.8), [rect]);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgHAmQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAIg1AGgUQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQgCAVgMA0QAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(0.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, rect = new cjs.Rectangle(0.1,0.1,1.8,7.7), [rect]);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgMAgQAFgoAQgZQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgRArgDAVQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape.setTransform(1.3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, rect = new cjs.Rectangle(0,0,2.6,6.9), [rect]);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAkQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAKgiARghQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgLAkgQAfIgBABIgCAAg");
	this.shape.setTransform(1.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, rect = new cjs.Rectangle(0,0,3.2,7.2), [rect]);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgOAjQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAMgmARgdQAAAAABAAQAAgBAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQgJAfgUAkIgBABIgBgBg");
	this.shape.setTransform(1.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, rect = new cjs.Rectangle(0,0,3.4,7.2), [rect]);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGALQgBAAAAgBQAAAAAAAAQgBgBABAAQAAgBAAAAQAHgNAFgFIADAAQAAAAAAAAQAAAAAAAAQABABgBAAQAAAAAAAAQgCAIgJALIgCABIgBAAg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, rect = new cjs.Rectangle(0,0,1.7,2.3), [rect]);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AABAqQgIgtAHglIABgBIACABQgDAxADAgQABABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape.setTransform(0.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, rect = new cjs.Rectangle(0,0,0.7,8.5), [rect]);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AADAjQgGgXgDgtQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAJApAAAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAg");
	this.shape.setTransform(0.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, rect = new cjs.Rectangle(0,0,1.4,7.3), [rect]);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAGAjQgNgygCgTQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAFASAKAyQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape.setTransform(1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, rect = new cjs.Rectangle(0,0,2.1,7.4), [rect]);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAFAeQgKgggDgbQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIACABQAIAXAGAjQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgCgBg");
	this.shape.setTransform(0.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, rect = new cjs.Rectangle(0,0,1.8,6.2), [rect]);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AACAXQgGghAAgMQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABgBIABABQACAKACANIACAXQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgBg");
	this.shape.setTransform(0.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, rect = new cjs.Rectangle(0,0,1,4.9), [rect]);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgCAhIADhCQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgDBCQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(0.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, rect = new cjs.Rectangle(0,0.1,0.7,7), [rect]);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgEAqQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgpAKgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQABAlgKAqQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(0.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, rect = new cjs.Rectangle(0,0.1,1.5,8.4), [rect]);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgLAkQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAIgjAPgiQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAgBAAQgIAmgOAfIgBACIgBgBg");
	this.shape.setTransform(1.4,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, rect = new cjs.Rectangle(0,0,2.7,7.3), [rect]);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AABANIgEgMQgDgIABgFIACgCIACABQACADACAIIADAOQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(0.6,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, rect = new cjs.Rectangle(0,0,1.3,3), [rect]);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgGAPQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAFgNAHgNIACAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgEANgHAOIgCABIgBAAg");
	this.shape.setTransform(0.8,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, rect = new cjs.Rectangle(0,0,1.7,3.1), [rect]);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgIAVQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAHgWAKgQQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABACQgFARgLAVIgCABIAAAAg");
	this.shape.setTransform(1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, rect = new cjs.Rectangle(0,0,2.1,4.2), [rect]);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAUQgFgRAEgWQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAFAVgEASIgBABIgBgBg");
	this.shape.setTransform(0.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, rect = new cjs.Rectangle(0,0,0.8,4.3), [rect]);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AAAAQIgBgfQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAABIACAfQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape.setTransform(0.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, rect = new cjs.Rectangle(0.1,0,0.4,3.4), [rect]);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgBAUQgBgeABgKIABgBIAAABQACAOAAAaQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(0.3,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, rect = new cjs.Rectangle(0.1,0,0.5,4.4), [rect]);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgBALQgBgRACgEQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABQACAEgBARIgCACQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(0.3,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, rect = new cjs.Rectangle(0.1,0,0.5,2.6), [rect]);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgBALQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgSIACgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgCATQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(0.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, rect = new cjs.Rectangle(0,0,0.7,2.3), [rect]);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgDALQgBgPAFgHIACgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAgBABQgCARAAAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAg");
	this.shape.setTransform(0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, rect = new cjs.Rectangle(0,0,0.7,2.6), [rect]);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgBAQQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQADgXACgEQAAgBAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAGgCAIIgDAOQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(0.4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, rect = new cjs.Rectangle(0,0,0.9,3.3), [rect]);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgDAQQACgVACgMQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIACACIgDAgQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, rect = new cjs.Rectangle(0,0,0.8,3.7), [rect]);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4864F").s().p("AgCAIQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQADgKABgDIACAAIABACIgEAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, rect = new cjs.Rectangle(0.1,0,0.9,1.7), [rect]);


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
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("ACgChIigihIigigAChigIihCgIigCh");
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


(lib.tutorial_SkyBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Illustration07();
	this.instance.parent = this;
	this.instance.setTransform(-181,-79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhVXAzxMAAAhnhMCqvAAAMAAABnhg");
	this.shape.setTransform(546.4,331.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_SkyBG_mc, rect = new cjs.Rectangle(-181,-79,1359,824), [rect]);


(lib.tutorial_platform2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKiADsQhMAAg1guQgpgkgJguIkqAAQhTAAg7guQg6guAAhAIAAgeQAAhBA6guQA7guBTAAMCj/AAAQBTAAA7AuQA6AuAABBIAAAeQAABAg6AuQg7AuhTAAIkqAAQgJAugpAkQg1AuhLAAg");
	mask.setTransform(549.2,23.7);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7247").s().p("AgDBfIgKAAIAAgeQgbAPg5ABQhpAAg9gbQgQgIgCACQgCABAAAVQAAAKgKAFQgMAFgcAAQgnAAgmgRQgogVgXgIQAAAPgOANQgSAPggAAQglAAgYgLQgTgKgHgPQgfANggABIgCAAQhGgDgTgDQgvgFgcgNQgJAMAAAXQAAAHgnAAQgWAAg2gOQg5gPgEgOIABAHQADAGAAADQAAALgfAKQghAMgvAAQgjAAgdgGQghgHAAgNQAAgJAPgMQgMAEgaAAQgggBghgHQgWgGgfgLIgvAAQgNAKgbAHQgXAGgZAAQgeAAgggIIgtgMIgMAAQgBAOgbAIQgbAIgnAAQhZAAgggUQgHABgIgFQgLgEgHAAQAAAcgIAHQgOANg0AAQgaAAgugIQgtgJgYAAQglAAgJATQgKATgjAAQhPAAhMgpQgLAHABAJQABAEgXAAQhEAAgqgNQgdgJgLgMIABAVQAAAJgHAGQgKAHgTAAQhBgBgZgDQg1gHgSgWQgCAXgQAKQgRAMgPgNIgTgRQgcAPg5ABQhoAAg+gbQgQgIgCACQgCABAAAVQAAAKgKAFQgLAFgdAAQgoAAgmgRQgngVgXgIQABAPgOANQgTAPggAAQgkAAgYgLQgTgKgIgPQgeANghABIgBAAQhHgDgTgDQgvgFgbgNQgKAMAAAXQAAAHgoAAQgUAAg2gOQg6gPgEgOIACAHQACAGABADQAAALggAKQghAMguAAQgkAAgcgGQgjgHAAgNQAAgJAQgMQgMAEgaAAQgggBgggHQgXgGgfgLIgvAAQgMAKgbAHQgZAGgXAAQgfAAgggIIgsgMIgNAAQgBAOgbAIQgbAIgnAAQhZAAgggUQgGABgKgFQgJgEgIAAQAAAcgIAHQgOANg1AAQgZAAgtgIQgugJgYAAQgkAAgKATQgJATgkAAQhPAAhMgpQgLAHABAJQABAEgXAAQhEAAgqgNQgdgJgLgMIACAVQgBAJgHAGQgJAHgUAAQhBgBgZgDQgogFgWgPIAAiaMAqPAAAIAAABIAZgBMArDAAAIAAACIANgBIAYgBMArEAAAIAAABIAZgBMAqDAAAIAACvIgVABQhnAAg9gbQgRgIgBACQgDABAAAVQAAAKgKAFQgMAFgcAAQgnAAgmgRQgngVgXgIQAAAPgOANIgOAJQgPAGgWAAQgkAAgXgLQgVgKgGgPQggANgeABIgDAAQhGgDgUgDQgwgFgbgNQgIAMgCAXQABAHgnAAQgVAAg2gOQg6gPgDgOIABAHIACAJQAAALgeAKQgiAMgtAAQgkAAgegGQghgHAAgNQAAgJAQgMQgOAEgZAAQgggBgggHQgWgGghgLIgvAAQgMAKgaAHQgYAGgYAAQgeAAghgIIgrgMIgNAAQgBAOgcAIQgcAIglAAQhZAAghgUQgFABgLgFQgKgEgGAAQAAAcgIAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgKATQgJATgjAAQhQAAhMgpQgLAHABAJQABAEgWAAQhEAAgqgNQgegJgMgMIADAVQAAAJgIAGQgJAHgUAAQhBgBgZgDQg0gHgTgWQgDAXgQAKQgPAMgPgNIgUgRQgbAPg6ABQhoAAg8gbQgRgIgCACQgCABAAAVQAAAKgLAFQgMAFgcAAQgnAAgmgRQgmgVgXgIQAAAPgPANQgTAPgfAAQgkAAgYgLQgUgKgGgPQggANggABIgBAAQhHgDgTgDQgwgFgcgNQgJAMgBAXQAAAHgmAAQgWAAg0gOQg7gPgDgOIACAHIABAJQAAALgdAKQgjAMguAAQgjAAgdgGQgjgHABgNQAAgJARgMQgOAEgaAAQgggBghgHQgUgGghgLIgvAAQgMAKgaAHQgZAGgZAAQgdAAgigIIgrgMIgNAAQAAAOgcAIQgbAIglAAQhaAAghgUQgFABgKgFQgKgEgHAAQgBAcgHAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgJATQgJATgjAAQhRAAhLgpQgMAHAAAJQACAEgVAAQhFAAgqgNQgegJgLgMIABAVQAAAJgGAGQgKAHgUAAQhBgBgZgDQg0gHgTgWQgCAXgQAKQgPALgjABIgDAAg");
	this.shape.setTransform(549.7,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("AH9A9QgIALABAOQAAAGgOAAQgtAAgbgTQgUgMgHgTQACAJAAAWQAAAMgFAIQgHAKgNAAQglAAgWgHQgjgNgMgjQgeAygSACQgjAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgKgCQgQAkgwAAQhEAAgognQgKgLgBADQgBACAAAgQAAAOgHAHQgIAHgUAAQgZAAgZgZQgagfgPgLQAAAWgKATQgLAWgWAAQgXAAgQgQQgNgPgEgVQgVATgUAAIgBAAQgwgFgMgCQgfgIgSgUQgJAbgCAYQgEALgbAAQgNgBgfgUQgNgJgIgJIgEADQgUAOgYAEQgZADgOgHQgOgFgNgMQgMgMgNgJQgHAFgSAAQgWAAgVgMQgOgHgVgSIgfACQgIAOgRAJQgRAKgPgBQgTABgXgLIgcgTIgJABQAAATgTAMQgSANgZAAQgWAAgVgMQgUgMgNgSIgZAAQAAASgDAhQAAAFgOAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgFAcQgGAbgYAAQg1AAgxg9QgIALABAOQAAAGgOAAQgtAAgbgTQgTgMgIgTQACAJAAAWQAAAMgFAIQgGAKgOAAQgkAAgXgHQgigNgNgjQgeAygRACQgkAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgKgCQgQAkgwAAQhFAAgognQgKgLgBADQgBACAAAgQAAAOgHAHQgIAHgTAAQgaAAgZgZQgagfgPgLQAAAWgJATQgMAWgVAAQgYAAgQgQQgNgPgEgVQgVATgUAAIgBAAQgwgFgMgCQgfgIgSgUQgJAbgLAFQgOAHgPAGQgQAFgagPQgbgPgEgUQAAAFACAEIACAMQAAARgPAKQgOAJgPgTQgPgUgJAJQgJAJgQgMQgQgLgTgLQgHAFgSAAQgWAAgVgMQgNgHgWgSIgfACQgIAOgRAJQgRAKgOgBQgUABgXgLIgcgTIgJABQAAATgTAMQgRANgZAAQgXAAgVgMQgUgMgNgSIgYAAQAAASgEAhQAAAFgOAHQgPAIgQAAQgSAAgegMQgegNgPAAQgYAAgGAcQgGAbgXAAQg2AAgxg9QgIALABAOQAAAGgOAAQgtAAgbgTQgTgMgIgTQACAJAAAWQAAAMgFAIQgGAKgOAAQgkAAgXgHQgigNgMgjQgNAVgKANIAAi1MB0LgAWIAACzQgBAQgIAPQgMAWgVAAQgYAAgPgQQgNgPgEgVQgVATgUAAIgCAAQgvgFgMgCQgggIgRgUQgIAYhTgBQgcgHgDgQQgFADgOACQgOADgDgBIgegEIgLAKQgGAFgWgBQgXgCAEgNQgHAFgSAAQgWAAgVgMQgOgHgVgSIgfACQgIAOgRAJQgRAKgPgBQgUABgWgLIgdgTIgIABQgBATgSAMQgSANgZAAQgWAAgVgMQgVgMgMgSIgZAAQAAASgEAhQAAAFgNAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgMATQgMATgogBQgngBgigqQgIALABAOQAAAGgOAAQgtAAgcgTQgTgMgHgTQABAJAAAWQAAAMgEAIQgHAKgNAAQglAAgWgHQgjgNgMgjQgeAygSACQgjAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgLgCQgPAkgwAAQhFAAgognQgKgLgCADQgBACAAAgQAAAOgHAHQgIAHgTAAQgZAAgZgZQgagfgPgLQAAAWgKATQgLAWgWAAQgYAAgPgQQgNgPgEgVQgVATgUAAIgCAAQgvgFgMgCQgggIgRgUQgJAbgcgOQgpAogLgOIgMgIQgRgLgEgUIABALQABAGgZAVQgZAUgOgLIgUgPIg0goQgugjAJAbQAJAdgwgeIgRgNIgfACQgIAOgRAJQgRAKgPgBQgTABgXgLIgcgTIgJABQAAATgTAMQgSANgZAAQgWAAgVgMQgUgMgNgSIgZAAQAAASgDAhQAAAFgOAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgFAcQgGAbgYAAQg1AAgxg9g");
	this.shape_1.setTransform(549.6,19.3,1.478,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48749").s().p("EAr1ACJIgZABIp3g6MghNAA6IAAgBIgMAAIgZABIydg6I4mA6IAAgBIgZABIwKhAI6FA+IAAkCMCrwgAPIAAEPIwmhKI5dBOg");
	this.shape_2.setTransform(549.7,23.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_platform2_mc, rect = new cjs.Rectangle(4.4,0.2,1089.6,37.1), [rect]);


(lib.tutorial_platform1_mc = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.tutorial_platform1_mc, rect = new cjs.Rectangle(0,0,1099.2,31.1), [rect]);


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


(lib.tutorial_ladder2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape.setTransform(23.2,-18.3,0.527,0.58,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_1.setTransform(23.2,15.3,0.527,0.58,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_2.setTransform(23.2,48.9,0.527,0.58,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_3.setTransform(23.2,82.4,0.527,0.58,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_4.setTransform(23.2,116,0.527,0.58,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_5.setTransform(23.2,149.5,0.527,0.58,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_6.setTransform(23.2,183.1,0.527,0.58,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_7.setTransform(23.2,216.6,0.527,0.58,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_8.setTransform(23.2,250.2,0.527,0.58,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_9.setTransform(23.2,283.7,0.527,0.58,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_10.setTransform(23.2,317.7,0.527,0.58,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8C6239").s().p("EgBFAgqMAAAhANQAAgdAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAdMAAABANg");
	this.shape_11.setTransform(3.7,150.5,0.527,0.891,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8C6239").s().p("EgBFAgqMAAAhANQAAgdAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAdMAAABANg");
	this.shape_12.setTransform(42.7,150.5,0.527,0.891,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_ladder2_mc, rect = new cjs.Rectangle(0,-35.7,46.4,372.5), [rect]);


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


(lib.tutorial_blendingAlpha_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(252,252,252,0.2)","rgba(255,255,255,0.047)"],[0,0.537],1.9,113.3,0,1.9,113.3,771.4).s().p("Eg6FAyyMAAAhljMB0LAAAMAAABljg");
	this.shape.setTransform(371.8,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_blendingAlpha_mc, rect = new cjs.Rectangle(0,0,743.7,650), [rect]);


(lib.stageBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EiVmhLxMErNAAAMAAACXjMkrNAAAg");
	this.shape.setTransform(-0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiVmBLyMAAAiXjMErNAAAMAAACXjg");
	this.shape_1.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stageBG_mc, rect = new cjs.Rectangle(-958.6,-485.9,1917,972), [rect]);


(lib.SkyBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Illustration07();
	this.instance.parent = this;
	this.instance.setTransform(-181,-79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhVXAzxMAAAhnhMCqvAAAMAAABnhg");
	this.shape.setTransform(546.4,331.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SkyBG_mc, rect = new cjs.Rectangle(-181,-79,1359,824), [rect]);


(lib.platform2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKiADsQhMAAg1guQgpgkgJguIkqAAQhTAAg7guQg6guAAhAIAAgeQAAhBA6guQA7guBTAAMCj/AAAQBTAAA7AuQA6AuAABBIAAAeQAABAg6AuQg7AuhTAAIkqAAQgJAugpAkQg1AuhLAAg");
	mask.setTransform(549.2,23.7);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7247").s().p("AgDBfIgKAAIAAgeQgbAPg5ABQhpAAg9gbQgQgIgCACQgCABAAAVQAAAKgKAFQgMAFgcAAQgnAAgmgRQgogVgXgIQAAAPgOANQgSAPggAAQglAAgYgLQgTgKgHgPQgfANggABIgCAAQhGgDgTgDQgvgFgcgNQgJAMAAAXQAAAHgnAAQgWAAg2gOQg5gPgEgOIABAHQADAGAAADQAAALgfAKQghAMgvAAQgjAAgdgGQghgHAAgNQAAgJAPgMQgMAEgaAAQgggBghgHQgWgGgfgLIgvAAQgNAKgbAHQgXAGgZAAQgeAAgggIIgtgMIgMAAQgBAOgbAIQgbAIgnAAQhZAAgggUQgHABgIgFQgLgEgHAAQAAAcgIAHQgOANg0AAQgaAAgugIQgtgJgYAAQglAAgJATQgKATgjAAQhPAAhMgpQgLAHABAJQABAEgXAAQhEAAgqgNQgdgJgLgMIABAVQAAAJgHAGQgKAHgTAAQhBgBgZgDQg1gHgSgWQgCAXgQAKQgRAMgPgNIgTgRQgcAPg5ABQhoAAg+gbQgQgIgCACQgCABAAAVQAAAKgKAFQgLAFgdAAQgoAAgmgRQgngVgXgIQABAPgOANQgTAPggAAQgkAAgYgLQgTgKgIgPQgeANghABIgBAAQhHgDgTgDQgvgFgbgNQgKAMAAAXQAAAHgoAAQgUAAg2gOQg6gPgEgOIACAHQACAGABADQAAALggAKQghAMguAAQgkAAgcgGQgjgHAAgNQAAgJAQgMQgMAEgaAAQgggBgggHQgXgGgfgLIgvAAQgMAKgbAHQgZAGgXAAQgfAAgggIIgsgMIgNAAQgBAOgbAIQgbAIgnAAQhZAAgggUQgGABgKgFQgJgEgIAAQAAAcgIAHQgOANg1AAQgZAAgtgIQgugJgYAAQgkAAgKATQgJATgkAAQhPAAhMgpQgLAHABAJQABAEgXAAQhEAAgqgNQgdgJgLgMIACAVQgBAJgHAGQgJAHgUAAQhBgBgZgDQgogFgWgPIAAiaMAqPAAAIAAABIAZgBMArDAAAIAAACIANgBIAYgBMArEAAAIAAABIAZgBMAqDAAAIAACvIgVABQhnAAg9gbQgRgIgBACQgDABAAAVQAAAKgKAFQgMAFgcAAQgnAAgmgRQgngVgXgIQAAAPgOANIgOAJQgPAGgWAAQgkAAgXgLQgVgKgGgPQggANgeABIgDAAQhGgDgUgDQgwgFgbgNQgIAMgCAXQABAHgnAAQgVAAg2gOQg6gPgDgOIABAHIACAJQAAALgeAKQgiAMgtAAQgkAAgegGQghgHAAgNQAAgJAQgMQgOAEgZAAQgggBgggHQgWgGghgLIgvAAQgMAKgaAHQgYAGgYAAQgeAAghgIIgrgMIgNAAQgBAOgcAIQgcAIglAAQhZAAghgUQgFABgLgFQgKgEgGAAQAAAcgIAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgKATQgJATgjAAQhQAAhMgpQgLAHABAJQABAEgWAAQhEAAgqgNQgegJgMgMIADAVQAAAJgIAGQgJAHgUAAQhBgBgZgDQg0gHgTgWQgDAXgQAKQgPAMgPgNIgUgRQgbAPg6ABQhoAAg8gbQgRgIgCACQgCABAAAVQAAAKgLAFQgMAFgcAAQgnAAgmgRQgmgVgXgIQAAAPgPANQgTAPgfAAQgkAAgYgLQgUgKgGgPQggANggABIgBAAQhHgDgTgDQgwgFgcgNQgJAMgBAXQAAAHgmAAQgWAAg0gOQg7gPgDgOIACAHIABAJQAAALgdAKQgjAMguAAQgjAAgdgGQgjgHABgNQAAgJARgMQgOAEgaAAQgggBghgHQgUgGghgLIgvAAQgMAKgaAHQgZAGgZAAQgdAAgigIIgrgMIgNAAQAAAOgcAIQgbAIglAAQhaAAghgUQgFABgKgFQgKgEgHAAQgBAcgHAHQgOANg2AAQgZAAgtgIQgugJgXAAQglAAgJATQgJATgjAAQhRAAhLgpQgMAHAAAJQACAEgVAAQhFAAgqgNQgegJgLgMIABAVQAAAJgGAGQgKAHgUAAQhBgBgZgDQg0gHgTgWQgCAXgQAKQgPALgjABIgDAAg");
	this.shape.setTransform(549.7,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C67D45").s().p("AH9A9QgIALABAOQAAAGgOAAQgtAAgbgTQgUgMgHgTQACAJAAAWQAAAMgFAIQgHAKgNAAQglAAgWgHQgjgNgMgjQgeAygSACQgjAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgKgCQgQAkgwAAQhEAAgognQgKgLgBADQgBACAAAgQAAAOgHAHQgIAHgUAAQgZAAgZgZQgagfgPgLQAAAWgKATQgLAWgWAAQgXAAgQgQQgNgPgEgVQgVATgUAAIgBAAQgwgFgMgCQgfgIgSgUQgJAbgCAYQgEALgbAAQgNgBgfgUQgNgJgIgJIgEADQgUAOgYAEQgZADgOgHQgOgFgNgMQgMgMgNgJQgHAFgSAAQgWAAgVgMQgOgHgVgSIgfACQgIAOgRAJQgRAKgPgBQgTABgXgLIgcgTIgJABQAAATgTAMQgSANgZAAQgWAAgVgMQgUgMgNgSIgZAAQAAASgDAhQAAAFgOAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgFAcQgGAbgYAAQg1AAgxg9QgIALABAOQAAAGgOAAQgtAAgbgTQgTgMgIgTQACAJAAAWQAAAMgFAIQgGAKgOAAQgkAAgXgHQgigNgNgjQgeAygRACQgkAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgKgCQgQAkgwAAQhFAAgognQgKgLgBADQgBACAAAgQAAAOgHAHQgIAHgTAAQgaAAgZgZQgagfgPgLQAAAWgJATQgMAWgVAAQgYAAgQgQQgNgPgEgVQgVATgUAAIgBAAQgwgFgMgCQgfgIgSgUQgJAbgLAFQgOAHgPAGQgQAFgagPQgbgPgEgUQAAAFACAEIACAMQAAARgPAKQgOAJgPgTQgPgUgJAJQgJAJgQgMQgQgLgTgLQgHAFgSAAQgWAAgVgMQgNgHgWgSIgfACQgIAOgRAJQgRAKgOgBQgUABgXgLIgcgTIgJABQAAATgTAMQgRANgZAAQgXAAgVgMQgUgMgNgSIgYAAQAAASgEAhQAAAFgOAHQgPAIgQAAQgSAAgegMQgegNgPAAQgYAAgGAcQgGAbgXAAQg2AAgxg9QgIALABAOQAAAGgOAAQgtAAgbgTQgTgMgIgTQACAJAAAWQAAAMgFAIQgGAKgOAAQgkAAgXgHQgigNgMgjQgNAVgKANIAAi1MB0LgAWIAACzQgBAQgIAPQgMAWgVAAQgYAAgPgQQgNgPgEgVQgVATgUAAIgCAAQgvgFgMgCQgggIgRgUQgIAYhTgBQgcgHgDgQQgFADgOACQgOADgDgBIgegEIgLAKQgGAFgWgBQgXgCAEgNQgHAFgSAAQgWAAgVgMQgOgHgVgSIgfACQgIAOgRAJQgRAKgPgBQgUABgWgLIgdgTIgIABQgBATgSAMQgSANgZAAQgWAAgVgMQgVgMgMgSIgZAAQAAASgEAhQAAAFgNAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgMATQgMATgogBQgngBgigqQgIALABAOQAAAGgOAAQgtAAgcgTQgTgMgHgTQABAJAAAWQAAAMgEAIQgHAKgNAAQglAAgWgHQgjgNgMgjQgeAygSACQgjAHgagJIgSgKIAAgkQgSAOgYAAQgHAAgLgCQgPAkgwAAQhFAAgognQgKgLgCADQgBACAAAgQAAAOgHAHQgIAHgTAAQgZAAgZgZQgagfgPgLQAAAWgKATQgLAWgWAAQgYAAgPgQQgNgPgEgVQgVATgUAAIgCAAQgvgFgMgCQgggIgRgUQgJAbgcgOQgpAogLgOIgMgIQgRgLgEgUIABALQABAGgZAVQgZAUgOgLIgUgPIg0goQgugjAJAbQAJAdgwgeIgRgNIgfACQgIAOgRAJQgRAKgPgBQgTABgXgLIgcgTIgJABQAAATgTAMQgSANgZAAQgWAAgVgMQgUgMgNgSIgZAAQAAASgDAhQAAAFgOAHQgPAIgRAAQgRAAgegMQgegNgQAAQgYAAgFAcQgGAbgYAAQg1AAgxg9g");
	this.shape_1.setTransform(549.6,19.3,1.478,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48749").s().p("EAr1ACJIgZABIp3g6MghNAA6IAAgBIgMAAIgZABIydg6I4mA6IAAgBIgZABIwKhAI6FA+IAAkCMCrwgAPIAAEPIwmhKI5dBOg");
	this.shape_2.setTransform(549.7,23.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.instructionText.lineWidth = 425;
	this.instructionText.parent = this;
	this.instructionText.setTransform(26.1,-22.9,2.112,2.112);

	this.timeline.addTween(cjs.Tween.get(this.instructionText).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(201,137,90,0.498)").s().p("EhHcAIgQjwgJg2hgIAAvWMCYFAAAIAAI5MiE1AAAQnCAah7D6Qh4DyjlAAIgQAAg");
	this.shape.setTransform(-6.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.matchInstruction_mc, rect = new cjs.Rectangle(-493.4,-32.7,973.4,108.8), [rect]);


(lib.magnifyingGlass_mc = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.magnifyingGlass_mc, rect = new cjs.Rectangle(-20.3,-21.3,40.5,43), [rect]);


(lib.ladder2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape.setTransform(23.2,-18.3,0.527,0.58,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_1.setTransform(23.2,15.3,0.527,0.58,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_2.setTransform(23.2,48.9,0.527,0.58,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_3.setTransform(23.2,82.4,0.527,0.58,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_4.setTransform(23.2,116,0.527,0.58,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_5.setTransform(23.2,149.5,0.527,0.58,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_6.setTransform(23.2,183.1,0.527,0.58,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_7.setTransform(23.2,216.6,0.527,0.58,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_8.setTransform(23.2,250.2,0.527,0.58,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_9.setTransform(23.2,283.7,0.527,0.58,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A67C52").s().p("AkrBBIAAiBIJXAAIAACBg");
	this.shape_10.setTransform(23.2,317.7,0.527,0.58,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8C6239").s().p("EgBFAgqMAAAhANQAAgdAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAdMAAABANg");
	this.shape_11.setTransform(3.7,150.5,0.527,0.891,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8C6239").s().p("EgBFAgqMAAAhANQAAgdAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAdMAAABANg");
	this.shape_12.setTransform(42.7,150.5,0.527,0.891,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkXCMQgrgqArhgQADgCADgBIAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAAgCIAAAAIABgBIAAgGIABAGIAAABIAAAAIABACQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAIAAABQAEABACACQACADAAAEIAAADIAEAAIAAgTIgBgBIAAAAIABgBIABAAIAAgCQAAgEADgBIADgEIAAAAIABgBIAAgDIAAAAIAAADIABABIAAAAIADAEQADABAAAEIAAACIABAAIABABIAAAAIgBABIAAAMIADAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgJANgEQAHgCAFgGIAAAAIABgCIABgHIAAAAIABAHIABACIAAAAQAFAGAHACQANAEAAAJIAAACIACAAQgBgDAAgEQAAgIAGgIQAHgHAJAAIABgGIABAAIABgNIABANIAAAAIACAGQAHAAAFAEQAFAEADAGIAAgNIgBAAIAAgDIABAAIAAgSIgBAAIAAgBIABAAIAAAAIABAAIAAgGIgBAAIAAgBIABAAIAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIAAgDIgBgBIAAAAIABgBIAAgBIABACIgBABIAAADIACABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIABAAIAAABIgBAAIAAAGIABAAIAAAAIABAAIAAABIgBAAIAAASIACAAIAAADIgCAAIAAATIACAAIAAACIgCAAIABAIIAGAAQgDgFAAgGQAAgLAKgKQAJgJAQgGQAUgHAOgMIgBgDQAAgDADgBIABgTIACAAIABATQADABAAADIgBADQAOAMAUAHQAGABAEADIAAg3IAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIAAgCQAAgGAFgDIAFgFIAAAAIAAgCIABgFIAAAAIAAAFIABACIAAAAIAFAFQAFADAAAGIAAACIACAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAIAAAjQAGgSARgKQAOgJAKgOQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEgCIAAgRIAEAAIABARQADACAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQALAOAOAJQALAHAHAMQAHAMAAAPQAAAIgCAIIANAAIAAgDQAAgNAJgKQAIgLANgBIADgGIAAAAIABgTIABAAIABATIADAGQANABAJALQAJAKAAANQAAAFgCAFIAMAAIAAAFIgGAAIAAAaIANAAIABgkIgEAAIAAgFIAEAAIAAghIgCAAIAAgFIACAAIABgeIgDAAIAAgCIACAAIAAgCIABAAIAAgLIgBAAIAAgBIACAAIAAgCQAAgEAEgCIADgDIgBAAIABgBIAAgEIAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIABAEIAAABIAAAAIADADQADACAAAEIAAACIACAAIAAABIgBAAIAAALIABAAIAAACIACAAIAAACIgDAAIABAeIACAAIAAAFIgCAAIABAhIADAAIAAAFIgDAAIABAkIAGAAIAAhBIgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIADAAIAAgCQAAgJAIgGQAFgCADgFIgBgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgIIABAAIAAAIIABACIAAABQADAFAEACQAJAGAAAJIgBACIADAAQABABAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIAABBIADAAIAACAgAjxgBIAAAGIADAAIAAgGIgBgEQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABgAj4gCIAAAHIAGAAIAAgHQAAgDgDgBQgDABAAADgAj8gBIAAAGIADAAIAAgGQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABgAEhgnIAAASIAHAAIAAgSQAAgHgEgDQgDADAAAHgAERgwQgDAEAAADIAAAUIAQAAIAAgUQAAgIgIgCQgDABgCACgAEFgnIAAASIAHAAIAAgSQAAgHgEgDQgDADAAAHgAh8gwIABAAIAAgFIgBAAgAh+gwIABAAIAAgFIgBAAgAh/gwIAAAAIAAgFIAAAAgAiBgwIABAAIAAgFIgBAAgAiDgwIABAAIAAgFIgBAAgAAXhVIAAALIAEAAIAAgLQAAgFgCgCQgCACAAAFgAALhWIAAAMIAKAAIAAgMQAAgGgFgCQgFACAAAGgAAFhVIAAALIAEAAIAAgLQAAgFgCgCQgCACAAAFgAD3huIAAAJIACAAIAAgJIgBgBgAD0huIAAAJIACAAIAAgJIgBgBIAAAAgADxhuIAAAJIACAAIAAgJIgBgBgADvhuIAAAJIABAAIAAgJIAAgBIgBAAIAAABgADshuIAAAJIABAAIAAgJIAAgBIgBAAIAAABg");
	this.shape.setTransform(83.7,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, rect = new cjs.Rectangle(53.6,23.1,60.3,28), [rect]);


(lib.blendingAlpha_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(252,252,252,0.2)","rgba(255,255,255,0.047)"],[0,0.537],1.9,113.3,0,1.9,113.3,771.4).s().p("Eg6FAyyMAAAhljMB0LAAAMAAABljg");
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


(lib.tutorial_underHandAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tutorial_underHand_mc();
	this.instance.parent = this;
	this.instance.setTransform(22.6,35.2,1,1,8.3,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:33.7},7).to({rotation:8.3},8).to({regX:5.1,regY:2.5,rotation:-23.1,x:22.8,y:35.3},8).to({regX:5,regY:2.4,rotation:8.3,x:22.6,y:35.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(13.1,32.4,14.3,34.9);
p.frameBounds = [rect, new cjs.Rectangle(12.1,32.8,13.7,33.5), new cjs.Rectangle(10.4,32.8,15.1,33), new cjs.Rectangle(8.9,32.8,16.4,32.6), new cjs.Rectangle(7.3,32.8,17.9,31.8), new cjs.Rectangle(5.8,32.9,19.3,30.9), new cjs.Rectangle(4.3,32.8,20.6,30.2), new cjs.Rectangle(0.8,31.4,26.8,32.6), new cjs.Rectangle(4.1,32.8,20.8,30), new cjs.Rectangle(5.4,32.8,19.7,30.8), new cjs.Rectangle(6.7,32.8,18.4,31.6), new cjs.Rectangle(8,32.9,17.1,32.2), new cjs.Rectangle(9.4,32.8,16,32.7), new cjs.Rectangle(10.8,32.8,14.7,33.2), new cjs.Rectangle(12.3,32.9,13.5,33.5), new cjs.Rectangle(13.1,32.4,14.3,34.9), new cjs.Rectangle(15.6,32.9,10.9,34.1), new cjs.Rectangle(17.6,32.9,9.5,34.2), new cjs.Rectangle(19.3,32.9,8.8,34.2), new cjs.Rectangle(19.6,32.9,10.3,34.1), new cjs.Rectangle(19.8,32.9,11.9,33.8), new cjs.Rectangle(19.9,33,13.7,33.3), new cjs.Rectangle(19.8,33,15.4,32.8), new cjs.Rectangle(18.5,31.3,20.3,35.2), new cjs.Rectangle(19.7,32.8,15.4,32.8), new cjs.Rectangle(19.7,32.9,13.7,33.3), new cjs.Rectangle(19.7,32.8,11.9,33.8), new cjs.Rectangle(19.5,32.8,10.3,34.1), new cjs.Rectangle(19.2,32.7,8.8,34.3), new cjs.Rectangle(17.5,32.7,9.5,34.2), new cjs.Rectangle(15.6,32.7,10.9,34.1), new cjs.Rectangle(13.1,32.4,14.3,34.9)];


(lib.tutorial_tailAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_tail_mc();
	this.instance.parent = this;
	this.instance.setTransform(19.6,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:-9.2},8,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:6.7},8,cjs.Ease.get(1)).to({rotation:0},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19.6,8.7,15.8,26.8);
p.frameBounds = [rect, new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.7,8.8,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.3,24.3), new cjs.Rectangle(19.6,8.8,19.7,24), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,6.2,20,28.8), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.7,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25.1), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.1,27.2), new cjs.Rectangle(19.6,8.7,14.5,27.5), new cjs.Rectangle(19.6,8.8,13.9,27.8), new cjs.Rectangle(19.6,8.8,13.5,28), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(16.5,8.7,18.6,28.4), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.7,8.7,13.1,28.4), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13.5,28), new cjs.Rectangle(19.6,8.7,13.9,27.8), new cjs.Rectangle(19.6,8.6,14.5,27.4), new cjs.Rectangle(19.6,8.6,15.1,27.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,16.8,26.2), new cjs.Rectangle(19.6,8.7,17.7,25.6), new cjs.Rectangle(19.6,8.7,18.4,25.1), new cjs.Rectangle(19.7,8.8,18.9,24.7), new cjs.Rectangle(19.6,8.7,19.3,24.3), new cjs.Rectangle(19.6,8.8,19.7,24), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,6.2,20,28.8), new cjs.Rectangle(19.6,8.7,19.8,23.9), new cjs.Rectangle(19.6,8.7,19.7,24.1), new cjs.Rectangle(19.6,8.6,19.3,24.4), new cjs.Rectangle(19.6,8.7,18.9,24.7), new cjs.Rectangle(19.6,8.6,18.3,25.1), new cjs.Rectangle(19.5,8.6,17.7,25.6), new cjs.Rectangle(19.5,8.6,16.8,26.2), new cjs.Rectangle(19.6,8.7,15.8,26.8), new cjs.Rectangle(19.6,8.7,15.1,27.2), new cjs.Rectangle(19.6,8.7,14.5,27.5), new cjs.Rectangle(19.6,8.8,13.9,27.8), new cjs.Rectangle(19.6,8.8,13.5,28), new cjs.Rectangle(19.6,8.7,13.2,28.2), new cjs.Rectangle(19.6,8.7,13,28.4), new cjs.Rectangle(19.6,8.7,13.1,28.4), new cjs.Rectangle(16.5,8.7,18.6,28.4), new cjs.Rectangle(19.6,8.6,13.1,28.4), new cjs.Rectangle(19.6,8.7,13.2,28.3), new cjs.Rectangle(19.6,8.7,13.4,28.1), new cjs.Rectangle(19.6,8.7,13.8,27.9), new cjs.Rectangle(19.6,8.7,14.3,27.6), new cjs.Rectangle(19.6,8.6,15,27.2), new cjs.Rectangle(19.6,8.7,15.8,26.8)];


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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.2,-2.8,27.8,49.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-3,16.4,49.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(2.3,-2,45.1,87.6);
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


(lib.seychelleFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seychelleFlag, rect = new cjs.Rectangle(-16.7,-9.8,33.6,19.6), [rect]);


(lib.guyanaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guyanaFlag, rect = new cjs.Rectangle(-16.7,-9.8,33.6,19.6), [rect]);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_3.setTransform(16.8,9.8);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(16.8,9.8,1,1,0,0,0,16.8,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A680B").s().p("AinAdIAAg5IFPAAIAAA5g");
	this.shape_23.setTransform(16.8,16.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AinAdIAAg5IFPAAIAAA5g");
	this.shape_24.setTransform(16.8,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_25.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.instance,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_4.setTransform(16.8,9.8);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.8,9.8,1,1,0,0,0,16.8,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D6C41").s().p("AinAgIAAhAIFPAAIAABAg");
	this.shape_26.setTransform(16.8,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2DD30").s().p("AinBBIAAiBIFPAAIAACBg");
	this.shape_27.setTransform(16.8,6.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D03633").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_28.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.instance_1,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhOBiIAAjDICcAAIAADDg");
	mask_5.setTransform(7.9,9.8);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.9,9.8,1,1,0,0,0,7.9,9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC0030").s().p("AhEBdIAAi5ICJBXIhhAAIBhBig");
	this.shape_29.setTransform(7.3,9.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#22368F").s().p("AhNBiIAAjDICbBhIhmAAIBiBigAA4BaIhhhhIBdAAIh6hMIAACtIB+AAg");
	this.shape_30.setTransform(7.8,9.8);

	var maskedShapeInstanceList = [this.instance_2,this.shape_29,this.shape_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, rect = new cjs.Rectangle(0,0,15.7,19.6), [rect]);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgCAKQgEgEAAgGQAAgFAEgEQAEgEAFAAIAAAbQgFAAgEgEg");
	mask_4.setTransform(0.7,10.9);

	// Layer_3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(3.8,8.3,1,1,0,0,0,3.2,8.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, rect = new cjs.Rectangle(0.6,9.5,0.8,2.8), [rect]);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_6.setTransform(16.8,9.8);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.7,9.7,1,1,0,0,0,3.5,8.3);

	this.instance_4 = new lib.ClipGroup_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.8,9.8,1,1,0,0,0,16.8,9.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#63ACCC").s().p("Ag3BiIAAjDIBvAAIAADDg");
	this.shape_31.setTransform(16.8,9.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C9002A").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_32.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AinBiIAAjDIFPAAIAADDg");
	mask_7.setTransform(16.8,9.8);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_0_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(16.8,9.8,1,1,0,0,0,16.8,9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#65AAD3").s().p("AinBiIAAjDIFPAAIAADDg");
	this.shape_33.setTransform(16.8,9.8);

	var maskedShapeInstanceList = [this.instance_5,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.instance_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, rect = new cjs.Rectangle(0,0,33.6,19.6), [rect]);


(lib.ethiopiaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ethiopiaFlag, rect = new cjs.Rectangle(-16.8,-9.7,33.6,19.6), [rect]);


(lib.chileFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chileFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.2,-2.8,27.8,49.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-3,16.4,49.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

}).prototype = getMCSymbolPrototype(lib.vi, rect = new cjs.Rectangle(-19.4,-20.6,39.3,43), [rect]);


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
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(1));

	// Layer_1
	this.bubbleTextMC = new lib.tutorial_bubbleText_mc();
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


(lib.magGlass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.magnifyingGlass_mc();
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


(lib.tutorial_ladder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_ladder2_mc();
	this.instance.parent = this;
	this.instance.setTransform(23.2,167,1,1,0,0,0,23.2,167);
	this.instance.filters = [new cjs.ColorFilter(1, 0.8984375, 0.8984375, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-38,50,377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_ladder_mc, rect = new cjs.Rectangle(0,-35.7,46.4,372.5), [rect]);


(lib.tutorial_DesertBG1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBD193","#C7775F"],[0,1],149.1,6.7,149.1,-158.8).s().p("EgsxAFOIAAn3IBVAAQEOAAEpgVQDCgOE8gfQFZgkCHgKQEHgVDUABQFGgBFOAZQDMAPFVAlQFOAkCWAMQEDASDagKQCrgHDCgaQBagND6gpQDVgkCHgPQDKgYDAgCIAAKbg");
	this.shape.setTransform(457.1,218.8,1,1,0,0,0,0,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FBC87D","#C7775F"],[0,1],98.3,16.3,98.3,-87.4).s().p("EgsxAG6IAAtyIArgBQBpAAB8AOIDnAgQCcAUCCALQC4AODNAAQBmAABygMQBDgICEgTQCCgUBHgIQBygMBqAAQB8AACSAPQBaAKCoAXQCqAZBTAJQCOAPB2AAQCAAACmgPQBpgKC+gYQDKgZBTgIQCZgPBsAAQCZAAEfAbIDPATQBtAJBGAAQC9AADQgaICagTQBVgJBOgBIAANng");
	this.shape_1.setTransform(457.1,182.4);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(700.4,140.5,1.45,0.748,0,0,0,84,41.6);
	this.instance.alpha = 0.48;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBC87D","#C7775F"],[0,1],93.1,77.7,89.5,-82).s().p("EgsxAJFIAAxOQBTgCBdgHQBMgFCwgPQFVgeDWAAQC4AACjAPQBhAJCrAZQCnAXBlAKQClAOC9AAQC6AACTgOQBdgKCFgXQCKgaBJgIQCDgPChAAQEkAAGEAoQDeAWA2AFQCUAMBxAAQF5AAFQgmID0gcQCJgMCJgBIAASJg");
	this.shape_2.setTransform(457.1,244.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FBC87D","#C7775F"],[0,1],93.1,97,90.1,0.8).s().p("EgsxAH1IAAvIQCFAHCYgCQCSgBEogOQErgOCZgBQEAgEDSASQD4AVDUABQCXAAC8gLQD8gOAvgBQCsgGCnAKQHmAeFzACQGuACE8giQEPgdFFAKQBZACCeAIQCOAIA8ABIAAPTg");
	this.shape_3.setTransform(457.1,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorial_DesertBG1_mc, rect = new cjs.Rectangle(170.5,126.7,573.1,175.7), [rect]);


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
	this.shape_4.graphics.f("rgba(180,130,64,0.2)").s().p("AuUElQhbAAAAhcIAAmQQAAhdBbAAIcpAAQBbAAAABdIAAGQQAABchbAAg");
	this.shape_4.setTransform(161.2,89.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B7273").s().p("A1eAMIAAgXMAq9AAAIAAAXg");
	this.shape_5.setTransform(-86.1,96.5,0.306,0.306);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B7273").s().p("AAoCJIAAjWIiOAAIAAg7ICxAAQASAAAGASQAEAKAAAfIAADWg");
	this.shape_6.setTransform(-75.3,87.1,0.306,0.306);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B7273").s().p("AgMCJIAAjWIgmAAIAAg7IBUAAQAIAAAFAJQAEAJAAAGIAAD5g");
	this.shape_7.setTransform(-81.3,87.1,0.306,0.306);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7B7273").s().p("AgLCJIAAjWIgnAAIAAg7IBUAAQAIAAAFAJQAEAJAAAGIAAD5g");
	this.shape_8.setTransform(-85.9,87.1,0.306,0.306);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7B7273").s().p("AA4CJIAAjWIhwAAIAADWIg/AAIAAiqIATgsIgTAAIAAg7IDSAAQAdAAAAAbIAAD2g");
	this.shape_9.setTransform(-92.6,87.1,0.306,0.306);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B7273").s().p("AAoCJIAAjWIiOAAIAAg7ICxAAQASAAAGASQAEAKAAAfIAADWg");
	this.shape_10.setTransform(-75.3,87.1,0.306,0.306);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B7273").s().p("AgMCJIAAjWIgmAAIAAg7IBUAAQAIAAAFAJQAEAJAAAGIAAD5g");
	this.shape_11.setTransform(-81.3,87.1,0.306,0.306);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B7273").s().p("AgLCJIAAjWIgnAAIAAg7IBUAAQAIAAAFAJQAEAJAAAGIAAD5g");
	this.shape_12.setTransform(-85.9,87.1,0.306,0.306);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B7273").s().p("AA4CJIAAjWIhwAAIAADWIg/AAIAAiqIATgsIgTAAIAAg7IDSAAQAdAAAAAbIAAD2g");
	this.shape_13.setTransform(-92.6,87.1,0.306,0.306);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F2F2").s().p("A1MH6QiGAAhfgeQhggeAAgqIAAsOQAAgtBggnQBkgrCBAAMAqZAAAQCAAABlArQBfAnABAtIAAMOQgBAqhfAeQhfAeiGAAg");
	this.shape_14.setTransform(-85.3,88.2,0.306,0.306);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E9E9E8").s().p("A1QIUQiHAAhfggQhfgfAAgsIAAs3QAAguBfgqQBlgtCBAAMAqhAAAQCBAABlAtQBfAqAAAuIAAM3QAAAshfAfQhfAgiHAAg");
	this.shape_15.setTransform(-84.2,89,0.306,0.306);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1DFDF").s().p("A2gIxQh7AAhXgcQhYgcABgpIAAufQgBgpBYgcQBXgcB7AAMAtBAAAQB7AABXAcQBYAcAAApIAAOfQAAAphYAcQhXAch7AAg");
	this.shape_16.setTransform(-82.8,89.9,0.306,0.306);

	this.text_2 = new cjs.Text("קפיצה", "10px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 25;
	this.text_2.parent = this;
	this.text_2.setTransform(2.9,75.7,1.962,1.962);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(180,130,64,0.2)").s().p("AuUElQhbAAAAhcIAAmQQAAhdBbAAIcqAAQBaAAAABdIAAGQQAABchaAAg");
	this.shape_17.setTransform(-53.9,89.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7B7273").s().p("AiUEfIAAo9IEqAAIAAI9g");
	this.shape_18.setTransform(-242.2,86.7,0.261,0.261,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B7273").s().p("AlXCvIFXldIFYFdg");
	this.shape_19.setTransform(-242.5,96.8,0.261,0.261,180);

	this.instance_2 = new lib.keyboardKey_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-242.7,90.1,1.962,1.962,0,0,0,9.5,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7B7273").s().p("AiUEfIAAo9IEqAAIAAI9g");
	this.shape_20.setTransform(-198.2,93,0.262,0.262);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B7273").s().p("AlXCvIFXldIFYFdg");
	this.shape_21.setTransform(-197.9,82.8,0.262,0.262);

	this.instance_3 = new lib.keyboardKey_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-197.3,90.1,1.962,1.962,0,0,0,9.5,9.3);

	this.text_3 = new cjs.Text("מעבר בין משטחים", "10px 'Arial'", "#333333");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 13;
	this.text_3.lineWidth = 72;
	this.text_3.parent = this;
	this.text_3.setTransform(-270.9,76.6,1.962,1.962);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(180,130,64,0.2)").s().p("AyZElQhcAAABhcIAAmQQgBhdBcAAMAk1AAAQBaAAAABdIAAGQQAABchaAAg");
	this.shape_22.setTransform(-295.3,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.text_3},{t:this.instance_3},{t:this.shape_21},{t:this.shape_20},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.text_2},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

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


(lib.DesertBG1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBD193","#C7775F"],[0,1],149.1,6.7,149.1,-158.8).s().p("EgsxAFOIAAn3IBVAAQEOAAEpgVQDCgOE8gfQFZgkCHgKQEHgVDUABQFGgBFOAZQDMAPFVAlQFOAkCWAMQEDASDagKQCrgHDCgaQBagND6gpQDVgkCHgPQDKgYDAgCIAAKbg");
	this.shape.setTransform(457.1,218.8,1,1,0,0,0,0,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FBC87D","#C7775F"],[0,1],98.3,16.3,98.3,-87.4).s().p("EgsxAG6IAAtyIArgBQBpAAB8AOIDnAgQCcAUCCALQC4AODNAAQBmAABygMQBDgICEgTQCCgUBHgIQBygMBqAAQB8AACSAPQBaAKCoAXQCqAZBTAJQCOAPB2AAQCAAACmgPQBpgKC+gYQDKgZBTgIQCZgPBsAAQCZAAEfAbIDPATQBtAJBGAAQC9AADQgaICagTQBVgJBOgBIAANng");
	this.shape_1.setTransform(457.1,182.4);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(700.4,140.5,1.45,0.748,0,0,0,84,41.6);
	this.instance.alpha = 0.48;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FBC87D","#C7775F"],[0,1],93.1,77.7,89.5,-82).s().p("EgsxAJFIAAxOQBTgCBdgHQBMgFCwgPQFVgeDWAAQC4AACjAPQBhAJCrAZQCnAXBlAKQClAOC9AAQC6AACTgOQBdgKCFgXQCKgaBJgIQCDgPChAAQEkAAGEAoQDeAWA2AFQCUAMBxAAQF5AAFQgmID0gcQCJgMCJgBIAASJg");
	this.shape_2.setTransform(457.1,244.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FBC87D","#C7775F"],[0,1],93.1,97,90.1,0.8).s().p("EgsxAH1IAAvIQCFAHCYgCQCSgBEogOQErgOCZgBQEAgEDSASQD4AVDUABQCXAAC8gLQD8gOAvgBQCsgGCnAKQHmAeFzACQGuACE8giQEPgdFFAKQBZACCeAIQCOAIA8ABIAAPTg");
	this.shape_3.setTransform(457.1,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DesertBG1_mc, rect = new cjs.Rectangle(170.5,126.7,573.1,175.7), [rect]);


(lib.tutorialHouse_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tutorial_magnifyingGlassBubble_mc();
	this.instance.parent = this;
	this.instance.setTransform(42.9,11.2,1,1,0,0,0,1.2,-4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#674621").s().p("AhPBBQgPAAgLgKQgKgLAAgOIAAg7QAAgOAKgLQALgKAPAAICgAAQAPAAAKAKQAKALAAAOIAAA7QAAAOgKALQgKAKgPAAg");
	this.shape.setTransform(20.3,26.9,0.454,0.454);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#674621").s().p("ALwHOIrwraIrvLaIisAAIObubIObObg");
	this.shape_1.setTransform(41.9,36,0.454,0.454);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#674621").s().p("AgMAMQgFgEAAgIQAAgGAFgFQAGgGAGABQAHgBAGAGQAFAFAAAGQAAAIgFAEQgGAGgHAAQgGAAgGgGg");
	this.shape_2.setTransform(60.7,84.1,0.454,0.454);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#977449").s().p("AhuiJIDdABIgFENIgFkDIjHABIgCD+IDOAEIjWAFg");
	this.shape_3.setTransform(56.2,92.5,0.454,0.454);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#977449").s().p("AhuiJIDdABIgFEOIgFkEIjHABIgCD/IDOAEIjWAEg");
	this.shape_4.setTransform(56.2,74.4,0.454,0.454);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#533413").s().p("AjHAjIAAhFIGPAAIAABFg");
	this.shape_5.setTransform(56.2,103.2,0.454,0.454);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#674621").s().p("ACLGgIAAsbIkWAAIAAMbIgjAAIAAs/IFdAAIAAM/g");
	this.shape_6.setTransform(56.2,83.5,0.454,0.454);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B89462").s().p("AicGOIAAsbIE5AAIAAMbg");
	this.shape_7.setTransform(56.2,83.5,0.454,0.454);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#674621").s().p("Ah5CeIAAk7IDzAAIAAE7gAhfCEIC/AAIAAkHIi/AAg");
	this.shape_8.setTransform(41.9,47.8,0.454,0.454);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0D0EB").s().p("AhfCEIAAkHIC/AAIAAEHg");
	this.shape_9.setTransform(41.9,47.8,0.454,0.454);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#674621").s().p("AipDcIAAm3IFTAAIAAG3gAiFC4IELAAIAAlvIkLAAg");
	this.shape_10.setTransform(36.2,79.2,0.454,0.454);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A0D0EB").s().p("AiFC4IAAlvIELAAIAAFvg");
	this.shape_11.setTransform(36.2,79.2,0.454,0.454);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#674621").s().p("AipDcIAAm3IFTAAIAAG3gAiFC4IELAAIAAlvIkLAAg");
	this.shape_12.setTransform(22.4,79.2,0.454,0.454);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A0D0EB").s().p("AiFC4IAAlvIELAAIAAFvg");
	this.shape_13.setTransform(22.3,79.2,0.454,0.454);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C5B32").s().p("AsUAHIAAgNIYoAAIAAANg");
	this.shape_14.setTransform(41.9,104.5,0.454,0.454);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B89462").s().p("AsUAjIAAglQAAgNALgJQAKgKAQAAIXfAAQAPAAALAKQAKAJAAANIAAAlg");
	this.shape_15.setTransform(41.9,103.2,0.454,0.454);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B89462").s().p("AAAlFIrtLeIAAhVILtrcILuLcIAABVg");
	this.shape_16.setTransform(41.9,41.6,0.454,0.454);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBBB87").s().p("ArtNhIAAvlILtrdILuLdIAAPlg");
	this.shape_17.setTransform(41.9,62.3,0.454,0.454);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#533413").s().p("AhMCHIAAkNICZAAIAAENg");
	this.shape_18.setTransform(20.3,34.7,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

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


(lib.tutorialBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layers
	this.platform2 = new lib.tutorial_platform2_mc();
	this.platform2.name = "platform2";
	this.platform2.parent = this;
	this.platform2.setTransform(477.4,21.5,0.867,0.704,0,0,0,1099.2,0.1);

	this.platform1 = new lib.tutorial_platform1_mc();
	this.platform1.name = "platform1";
	this.platform1.parent = this;
	this.platform1.setTransform(480.4,295.3,0.874,0.706,0,0,0,1099,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.platform1},{t:this.platform2}]}).wait(1));

	// objects
	this.instance = new lib.tutorial_ladder_mc();
	this.instance.parent = this;
	this.instance.setTransform(285.8,154.5,0.755,0.815,0,0,0,23.3,167.1);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.tutorial_ladder_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-281.9,154.5,0.755,0.815,0,0,0,23.1,167.1);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// alphaEffect
	this.instance_2 = new lib.tutorial_blendingAlpha_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,294.8,1.291,0.908,0,0,0,372.1,649.8);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 0, 0, 0))];
	this.instance_2.cache(-2,-2,748,654);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hills
	this.instance_3 = new lib.tutorial_DesertBG1_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(480.5,97.8,1.675,2.192,0,0,0,743.6,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLAAt7MAAAhb1MCWBAAAMAAABb1g");
	mask.setTransform(0.3,-1.1);

	// Layer_11
	this.instance_4 = new lib.tutorial_SkyBG_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-51.6,66.2,1.353,1.166,0,0,0,546.4,331.2);
	this.instance_4.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0), new cjs.BlurFilter(16, 16, 3)];
	this.instance_4.cache(-183,-81,1363,828);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialBG_mc, rect = new cjs.Rectangle(-479.8,-295,963,771.9), [rect]);


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
p.nominalBounds = rect = new cjs.Rectangle(0.8,-3.7,48.7,89.5);
p.frameBounds = [rect, new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.9,-2.9,47.4,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.3,-3,48,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-0.3,-4.7,51.2,90.6), new cjs.Rectangle(0,-3.1,48.3,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.8,-3.7,48.7,89.5), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(0.8,-2.9,47.5,87.6), new cjs.Rectangle(0.6,-3,47.7,87.6), new cjs.Rectangle(0.4,-3,47.9,87.6), new cjs.Rectangle(0.3,-3.1,48,87.6), new cjs.Rectangle(0.1,-3.1,48.2,87.6), new cjs.Rectangle(-1,-4.7,51.9,90.6), new cjs.Rectangle(0,-3.1,48.3,87.6), new cjs.Rectangle(0.2,-3.1,48.1,87.6), new cjs.Rectangle(0.5,-3,47.8,87.6), new cjs.Rectangle(0.6,-2.9,47.7,87.6), new cjs.Rectangle(0.7,-2.9,47.6,87.6), new cjs.Rectangle(1.1,-2.9,47.2,87.7), new cjs.Rectangle(1.2,-2.8,47.1,87.6), new cjs.Rectangle(0.8,-3.7,48.7,89.5)];


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

}).prototype = getMCSymbolPrototype(lib.tutorial_foxBodyAnimation, rect = new cjs.Rectangle(1.5,-5.8,51.3,107.7), [rect]);


(lib.palauFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.palauFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


(lib.nepalFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,7.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nepalFlag, rect = new cjs.Rectangle(-7.8,-9.7,15.7,19.6), [rect]);


(lib.mongoliaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mongoliaFlag, rect = new cjs.Rectangle(-16.7,-9.7,33.6,19.6), [rect]);


(lib.kenyaFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,16.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kenyaFlag, rect = new cjs.Rectangle(-16.8,-9.8,33.6,19.6), [rect]);


(lib.DiagnosticFeedback_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("המסיחים שלא הצלחת בניסיון ראשון*", "bold 25px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 945;
	this.text.parent = this;
	this.text.setTransform(1.6,-100,1.006,1);

	this.text_1 = new cjs.Text(":ההתאמות שלך", "bold 28px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 945;
	this.text_1.parent = this;
	this.text_1.setTransform(1.6,-135.3,1.006,1);

	this.grade = new cjs.Text("ןויצ", "bold 28px 'Arial'");
	this.grade.name = "grade";
	this.grade.textAlign = "right";
	this.grade.lineHeight = 33;
	this.grade.lineWidth = 50;
	this.grade.parent = this;
	this.grade.setTransform(-2,-187.5);

	this.text_2 = new cjs.Text(":ציון", "25px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 50;
	this.text_2.parent = this;
	this.text_2.setTransform(27,-185.5);

	this.gameName = new cjs.Text("קחשמה םש", "35px 'Arial'");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 41;
	this.gameName.lineWidth = 951;
	this.gameName.parent = this;
	this.gameName.setTransform(1.6,-254.7);

	this.text_3 = new cjs.Text("סיימת את המשחק", "30px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 36;
	this.text_3.lineWidth = 951;
	this.text_3.parent = this;
	this.text_3.setTransform(1.6,-292.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.gameName},{t:this.text_2},{t:this.grade},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_5
	this.backToStartBtn = new lib.backToChooseGame_btn();
	this.backToStartBtn.name = "backToStartBtn";
	this.backToStartBtn.parent = this;
	this.backToStartBtn.setTransform(-381.1,-185);
	new cjs.ButtonHelper(this.backToStartBtn, 0, 1, 2);

	this.restartGameBtn = new lib.restartThisGame_btn();
	this.restartGameBtn.name = "restartGameBtn";
	this.restartGameBtn.parent = this;
	this.restartGameBtn.setTransform(-311.1,-212.7,1,1,0,0,0,70,19.5);
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
	this.shape.graphics.f("#FCE3BE").s().p("EhK/AuGMAAAhcLMCV/AAAMAAABcLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.DiagnosticFeedback_mc, rect = new cjs.Rectangle(-480,-294.9,960.1,590), [rect]);


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


(lib.gameBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// keyboard
	this.instance = new lib.keyboardInstructions_mc();
	this.instance.parent = this;
	this.instance.setTransform(36,-233,0.553,0.553,0,0,0,10.2,57.8);

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
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.ladder_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-281.9,154.5,0.755,0.815,0,0,0,23.1,167.1);
	this.instance_2.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// alphaEffect
	this.instance_3 = new lib.blendingAlpha_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.6,294.8,1.291,0.908,0,0,0,372.1,649.8);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 0, 0, 0))];
	this.instance_3.cache(-2,-2,748,654);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hills
	this.instance_4 = new lib.DesertBG1_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(480.5,97.8,1.675,2.192,0,0,0,743.6,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLAAt7MAAAhb1MCWBAAAMAAABb1g");
	mask.setTransform(0.3,-1.1);

	// Layer_11
	this.instance_5 = new lib.SkyBG_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-51.6,66.2,1.353,1.166,0,0,0,546.4,331.2);
	this.instance_5.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0), new cjs.BlurFilter(16, 16, 3)];
	this.instance_5.cache(-183,-81,1363,828);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameBG_mc, rect = new cjs.Rectangle(-479.8,-295,963,771.9), [rect]);


(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhK/AuGMAAAhcLMCV/AAAMAAABcLg");

	// Layer_1
	this.gameBG = new lib.gameBG_mc();
	this.gameBG.name = "gameBG";
	this.gameBG.parent = this;
	this.gameBG.setTransform(0,0,1,1.002);

	var maskedShapeInstanceList = [this.gameBG];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.gameBG).wait(1));

}).prototype = getMCSymbolPrototype(lib.game, rect = new cjs.Rectangle(-480,-295,960,590), [rect]);


(lib.tutorial_foxWalking_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.foxMove = new lib.tutorial_foxBodyAnimation();
	this.foxMove.name = "foxMove";
	this.foxMove.parent = this;
	this.foxMove.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.foxMove).to({y:2.4},5).wait(2).to({y:3.7},3).to({y:0.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,-4.9,51.3,107.7);
p.frameBounds = [rect, new cjs.Rectangle(1.5,-3.2,50,105.5), new cjs.Rectangle(1.5,-2.9,50,105.5), new cjs.Rectangle(1.5,-2.6,50,105.5), new cjs.Rectangle(1.5,-2.3,50,105.5), rect=new cjs.Rectangle(1.5,-3.4,51.3,107.7), rect, rect, new cjs.Rectangle(1.5,-1.5,50,105.5), new cjs.Rectangle(1.5,-1.1,50,105.5), new cjs.Rectangle(1.5,-2.1,51.3,107.7), new cjs.Rectangle(1.5,-1.2,50,105.5), new cjs.Rectangle(1.5,-1.8,50,105.5), new cjs.Rectangle(1.5,-2.3,50,105.5), new cjs.Rectangle(1.5,-2.9,50,105.5), new cjs.Rectangle(1.5,-4.9,51.3,107.7)];


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
p.nominalBounds = rect = new cjs.Rectangle(-480,-295,960.1,590);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(24.3,3.4,0.127,0.127,0,0,0,23.2,20.8);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,6,0.127,0.127,0,0,0,22.4,23.6);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.8,4.6,0.127,0.127,0,0,0,22.4,17.7);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.8,3.4,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,3.4,0.127,0.127,0,0,0,20.8,20.8);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.3,4,0.127,0.127,0,0,0,23.2,19.3);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.4,4.7,0.127,0.127,0,0,0,23.9,18.4);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.4,6,0.127,0.127,0,0,0,23.2,23.6);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Path_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.6,6.9,0.127,0.127,0,0,0,25.2,21.2);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(26.7,3.4,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.Path_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(26.2,4.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.Path_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(22.2,4,0.127,0.127,0,0,0,25.6,17.7);
	this.instance_11.alpha = 0.301;

	this.instance_12 = new lib.Path_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(25.9,5.1,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.Path_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(25.1,6.8,0.127,0.127,0,0,0,20.4,21.6);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.Path_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(24.8,8.7,0.127,0.127,0,0,0,22.4,19.3);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.Path_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(23.4,4.3,0.127,0.127,0,0,0,23.9,20.1);
	this.instance_15.alpha = 0.301;

	this.instance_16 = new lib.Path_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(23.4,5.5,0.127,0.127,0,0,0,22.8,22.8);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(24.3,6.8,0.127,0.127,0,0,0,23.2,21.6);
	this.instance_17.alpha = 0.301;

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(24.4,8.4,0.127,0.127,0,0,0,23.9,23.2);
	this.instance_18.alpha = 0.301;

	this.instance_19 = new lib.Path_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(24.5,10,0.127,0.127,0,0,0,23.9,23.9);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.Path_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(27.5,3.2,0.127,0.127,0,0,0,22,19.3);
	this.instance_20.alpha = 0.301;

	this.instance_21 = new lib.Path_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(27.1,4,0.127,0.127,0,0,0,25.2,19.3);
	this.instance_21.alpha = 0.301;

	this.instance_22 = new lib.Path_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(26.7,5.6,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_22.alpha = 0.301;

	this.instance_23 = new lib.Path_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(26.2,6.9,0.127,0.127,0,0,0,26.3,21.2);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.Path_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(25.9,8.7,0.127,0.127,0,0,0,25.6,25.9);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.Path_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(25.6,10,0.127,0.127,0,0,0,24.4,27.1);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.Path_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(24.8,11.2,0.127,0.127,0,0,0,22.4,25.9);
	this.instance_26.alpha = 0.301;

	this.instance_27 = new lib.Path_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(22.2,4.7,0.127,0.127,0,0,0,25.6,23.6);
	this.instance_27.alpha = 0.301;

	this.instance_28 = new lib.Path_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(22.4,6.3,0.127,0.127,0,0,0,16.1,22.4);
	this.instance_28.alpha = 0.301;

	this.instance_29 = new lib.Path_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(23.4,7.7,0.127,0.127,0,0,0,23.9,22.4);
	this.instance_29.alpha = 0.301;

	this.instance_30 = new lib.Path_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(23.9,9.1,0.127,0.127,0,0,0,26.3,20.4);
	this.instance_30.alpha = 0.301;

	this.instance_31 = new lib.Path_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.3,11.2,0.127,0.127,0,0,0,23.2,25.9);
	this.instance_31.alpha = 0.301;

	this.instance_32 = new lib.Path_32();
	this.instance_32.parent = this;
	this.instance_32.setTransform(24.4,12.6,0.127,0.127,0,0,0,23.2,22.4);
	this.instance_32.alpha = 0.301;

	this.instance_33 = new lib.Path_33();
	this.instance_33.parent = this;
	this.instance_33.setTransform(21.4,5,0.127,0.127,0,0,0,19.7,18.9);
	this.instance_33.alpha = 0.301;

	this.instance_34 = new lib.Path_34();
	this.instance_34.parent = this;
	this.instance_34.setTransform(21.2,4.6,0.127,0.127,0,0,0,19.3,22.8);
	this.instance_34.alpha = 0.301;

	this.instance_35 = new lib.Path_35();
	this.instance_35.parent = this;
	this.instance_35.setTransform(21.5,6.1,0.127,0.127,0,0,0,20.4,24.4);
	this.instance_35.alpha = 0.301;

	this.instance_36 = new lib.Path_36();
	this.instance_36.parent = this;
	this.instance_36.setTransform(22.2,7.6,0.127,0.127,0,0,0,25.6,22);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_37();
	this.instance_37.parent = this;
	this.instance_37.setTransform(22.4,9.1,0.127,0.127,0,0,0,16.1,20.8);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Path_38();
	this.instance_38.parent = this;
	this.instance_38.setTransform(23.4,10.1,0.127,0.127,0,0,0,23.9,19.3);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Path_39();
	this.instance_39.parent = this;
	this.instance_39.setTransform(23.9,12.2,0.127,0.127,0,0,0,26.3,18.9);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Path_40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24.3,13.3,0.127,0.127,0,0,0,23.2,21.6);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.Path_41();
	this.instance_41.parent = this;
	this.instance_41.setTransform(28.3,3.4,0.127,0.127,0,0,0,24.8,20.8);
	this.instance_41.alpha = 0.301;

	this.instance_42 = new lib.Path_42();
	this.instance_42.parent = this;
	this.instance_42.setTransform(27.7,4.3,0.127,0.127,0,0,0,21.2,20.1);
	this.instance_42.alpha = 0.301;

	this.instance_43 = new lib.Path_43();
	this.instance_43.parent = this;
	this.instance_43.setTransform(27.5,6,0.127,0.127,0,0,0,24.4,23.6);
	this.instance_43.alpha = 0.301;

	this.instance_44 = new lib.Path_44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(27,7.6,0.127,0.127,0,0,0,23.9,26.3);
	this.instance_44.alpha = 0.301;

	this.instance_45 = new lib.Path_45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(26.5,9.1,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_45.alpha = 0.301;

	this.instance_46 = new lib.Path_46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(26.2,10.1,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_46.alpha = 0.301;

	this.instance_47 = new lib.Path_47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(25.6,11.6,0.127,0.127,0,0,0,23.6,22.8);
	this.instance_47.alpha = 0.301;

	this.instance_48 = new lib.Path_48();
	this.instance_48.parent = this;
	this.instance_48.setTransform(24.8,12.8,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_48.alpha = 0.301;

	this.instance_49 = new lib.Path_49();
	this.instance_49.parent = this;
	this.instance_49.setTransform(24.6,14.5,0.127,0.127,0,0,0,25.2,26.3);
	this.instance_49.alpha = 0.301;

	this.instance_50 = new lib.Path_50();
	this.instance_50.parent = this;
	this.instance_50.setTransform(24.4,15.8,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_50.alpha = 0.301;

	this.instance_51 = new lib.Path_51();
	this.instance_51.parent = this;
	this.instance_51.setTransform(19.8,4.6,0.127,0.127,0,0,0,22.8,17.7);
	this.instance_51.alpha = 0.301;

	this.instance_52 = new lib.Path_52();
	this.instance_52.parent = this;
	this.instance_52.setTransform(20.3,6.1,0.127,0.127,0,0,0,20.1,24.4);
	this.instance_52.alpha = 0.301;

	this.instance_53 = new lib.Path_53();
	this.instance_53.parent = this;
	this.instance_53.setTransform(21,6.9,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_53.alpha = 0.301;

	this.instance_54 = new lib.Path_54();
	this.instance_54.parent = this;
	this.instance_54.setTransform(21.8,9.6,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_54.alpha = 0.301;

	this.instance_55 = new lib.Path_55();
	this.instance_55.parent = this;
	this.instance_55.setTransform(21.4,8.7,0.127,0.127,0,0,0,19.7,19.3);
	this.instance_55.alpha = 0.301;

	this.instance_56 = new lib.Path_56();
	this.instance_56.parent = this;
	this.instance_56.setTransform(22.2,10.7,0.127,0.127,0,0,0,25.6,22.4);
	this.instance_56.alpha = 0.301;

	this.instance_57 = new lib.Path_57();
	this.instance_57.parent = this;
	this.instance_57.setTransform(22.9,12.6,0.127,0.127,0,0,0,19.7,22.4);
	this.instance_57.alpha = 0.301;

	this.instance_58 = new lib.Path_58();
	this.instance_58.parent = this;
	this.instance_58.setTransform(23.4,13.8,0.127,0.127,0,0,0,23.9,20.4);
	this.instance_58.alpha = 0.301;

	this.instance_59 = new lib.Path_59();
	this.instance_59.parent = this;
	this.instance_59.setTransform(23.9,15.3,0.127,0.127,0,0,0,22.8,20.8);
	this.instance_59.alpha = 0.301;

	this.instance_60 = new lib.Path_60();
	this.instance_60.parent = this;
	this.instance_60.setTransform(24.3,16.5,0.127,0.127,0,0,0,23.2,22.4);
	this.instance_60.alpha = 0.301;

	this.instance_61 = new lib.Path_61();
	this.instance_61.parent = this;
	this.instance_61.setTransform(24.4,18.1,0.127,0.127,0,0,0,23.2,23.2);
	this.instance_61.alpha = 0.301;

	this.instance_62 = new lib.Path_62();
	this.instance_62.parent = this;
	this.instance_62.setTransform(29.3,3.8,0.127,0.127,0,0,0,27.1,23.9);
	this.instance_62.alpha = 0.301;

	this.instance_63 = new lib.Path_63();
	this.instance_63.parent = this;
	this.instance_63.setTransform(28.4,5.1,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_63.alpha = 0.301;

	this.instance_64 = new lib.Path_64();
	this.instance_64.parent = this;
	this.instance_64.setTransform(27.9,6.7,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_64.alpha = 0.301;

	this.instance_65 = new lib.Path_65();
	this.instance_65.parent = this;
	this.instance_65.setTransform(27.5,8,0.127,0.127,0,0,0,22,23.9);
	this.instance_65.alpha = 0.301;

	this.instance_66 = new lib.Path_66();
	this.instance_66.parent = this;
	this.instance_66.setTransform(27.1,9.1,0.127,0.127,0,0,0,25.2,20.4);
	this.instance_66.alpha = 0.301;

	this.instance_67 = new lib.Path_67();
	this.instance_67.parent = this;
	this.instance_67.setTransform(26.7,10.7,0.127,0.127,0,0,0,22,22.4);
	this.instance_67.alpha = 0.301;

	this.instance_68 = new lib.Path_68();
	this.instance_68.parent = this;
	this.instance_68.setTransform(26.2,12.2,0.127,0.127,0,0,0,20.1,24.8);
	this.instance_68.alpha = 0.301;

	this.instance_69 = new lib.Path_69();
	this.instance_69.parent = this;
	this.instance_69.setTransform(26.2,13.4,0.127,0.127,0,0,0,28.3,22.4);
	this.instance_69.alpha = 0.301;

	this.instance_70 = new lib.Path_70();
	this.instance_70.parent = this;
	this.instance_70.setTransform(25.6,15.6,0.127,0.127,0,0,0,24.4,23.6);
	this.instance_70.alpha = 0.301;

	this.instance_71 = new lib.Path_71();
	this.instance_71.parent = this;
	this.instance_71.setTransform(24.8,16.9,0.127,0.127,0,0,0,22.4,20.1);
	this.instance_71.alpha = 0.301;

	this.instance_72 = new lib.Path_72();
	this.instance_72.parent = this;
	this.instance_72.setTransform(24.8,19,0.127,0.127,0,0,0,22.4,21.6);
	this.instance_72.alpha = 0.301;

	this.instance_73 = new lib.Path_73();
	this.instance_73.parent = this;
	this.instance_73.setTransform(24.8,20.2,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_73.alpha = 0.301;

	this.instance_74 = new lib.Path_74();
	this.instance_74.parent = this;
	this.instance_74.setTransform(18,5.5,0.127,0.127,0,0,0,21.2,20.1);
	this.instance_74.alpha = 0.301;

	this.instance_75 = new lib.Path_75();
	this.instance_75.parent = this;
	this.instance_75.setTransform(19,6.8,0.127,0.127,0,0,0,20.8,21.6);
	this.instance_75.alpha = 0.301;

	this.instance_76 = new lib.Path_76();
	this.instance_76.parent = this;
	this.instance_76.setTransform(19.8,8,0.127,0.127,0,0,0,25.9,23.9);
	this.instance_76.alpha = 0.301;

	this.instance_77 = new lib.Path_77();
	this.instance_77.parent = this;
	this.instance_77.setTransform(20.6,9.3,0.127,0.127,0,0,0,22.4,22);
	this.instance_77.alpha = 0.301;

	this.instance_78 = new lib.Path_78();
	this.instance_78.parent = this;
	this.instance_78.setTransform(21.4,11.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_78.alpha = 0.301;

	this.instance_79 = new lib.Path_79();
	this.instance_79.parent = this;
	this.instance_79.setTransform(21.8,12.8,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_79.alpha = 0.301;

	this.instance_80 = new lib.Path_80();
	this.instance_80.parent = this;
	this.instance_80.setTransform(22.4,14,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_80.alpha = 0.301;

	this.instance_81 = new lib.Path_81();
	this.instance_81.parent = this;
	this.instance_81.setTransform(23,15.6,0.127,0.127,0,0,0,20.8,22.8);
	this.instance_81.alpha = 0.301;

	this.instance_82 = new lib.Path_82();
	this.instance_82.parent = this;
	this.instance_82.setTransform(23.4,16.9,0.127,0.127,0,0,0,22.8,20.1);
	this.instance_82.alpha = 0.301;

	this.instance_83 = new lib.Path_83();
	this.instance_83.parent = this;
	this.instance_83.setTransform(30.1,3.6,0.127,0.127,0,0,0,19.3,19.7);
	this.instance_83.alpha = 0.301;

	this.instance_84 = new lib.Path_84();
	this.instance_84.parent = this;
	this.instance_84.setTransform(29.8,4.6,0.127,0.127,0,0,0,23.2,22.8);
	this.instance_84.alpha = 0.301;

	this.instance_85 = new lib.Path_85();
	this.instance_85.parent = this;
	this.instance_85.setTransform(29.4,6,0.127,0.127,0,0,0,27.9,23.6);
	this.instance_85.alpha = 0.301;

	this.instance_86 = new lib.Path_86();
	this.instance_86.parent = this;
	this.instance_86.setTransform(28.5,6.9,0.127,0.127,0,0,0,24.4,21.2);
	this.instance_86.alpha = 0.301;

	this.instance_87 = new lib.Path_87();
	this.instance_87.parent = this;
	this.instance_87.setTransform(27.9,8.4,0.127,0.127,0,0,0,23.2,16.5);
	this.instance_87.alpha = 0.301;

	this.instance_88 = new lib.Path_88();
	this.instance_88.parent = this;
	this.instance_88.setTransform(27.7,10,0.127,0.127,0,0,0,23.6,27.1);
	this.instance_88.alpha = 0.301;

	this.instance_89 = new lib.Path_89();
	this.instance_89.parent = this;
	this.instance_89.setTransform(27.1,11.6,0.127,0.127,0,0,0,21.6,22.8);
	this.instance_89.alpha = 0.301;

	this.instance_90 = new lib.Path_90();
	this.instance_90.parent = this;
	this.instance_90.setTransform(26.2,15.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_90.alpha = 0.301;

	this.instance_91 = new lib.Path_91();
	this.instance_91.parent = this;
	this.instance_91.setTransform(27,12.8,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_91.alpha = 0.301;

	this.instance_92 = new lib.Path_92();
	this.instance_92.parent = this;
	this.instance_92.setTransform(26.5,14,0.127,0.127,0,0,0,22.4,22.4);
	this.instance_92.alpha = 0.301;

	this.instance_93 = new lib.Path_93();
	this.instance_93.parent = this;
	this.instance_93.setTransform(26,16.9,0.127,0.127,0,0,0,26.3,20.1);
	this.instance_93.alpha = 0.301;

	this.instance_94 = new lib.Path_94();
	this.instance_94.parent = this;
	this.instance_94.setTransform(25.6,18.7,0.127,0.127,0,0,0,23.6,22);
	this.instance_94.alpha = 0.301;

	this.instance_95 = new lib.Path_95();
	this.instance_95.parent = this;
	this.instance_95.setTransform(25.6,20.2,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_95.alpha = 0.301;

	this.instance_96 = new lib.Path_96();
	this.instance_96.parent = this;
	this.instance_96.setTransform(25.6,22,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_96.alpha = 0.301;

	this.instance_97 = new lib.Path_97();
	this.instance_97.parent = this;
	this.instance_97.setTransform(16.7,5.5,0.127,0.127,0,0,0,20.8,20.1);
	this.instance_97.alpha = 0.301;

	this.instance_98 = new lib.Path_98();
	this.instance_98.parent = this;
	this.instance_98.setTransform(17.3,6.4,0.127,0.127,0,0,0,22,18.1);
	this.instance_98.alpha = 0.301;

	this.instance_99 = new lib.Path_99();
	this.instance_99.parent = this;
	this.instance_99.setTransform(18,7.6,0.127,0.127,0,0,0,22.8,21.6);
	this.instance_99.alpha = 0.301;

	this.instance_100 = new lib.Path_100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(19,8.7,0.127,0.127,0,0,0,29.1,19.3);
	this.instance_100.alpha = 0.301;

	this.instance_101 = new lib.Path_101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(19.3,9.6,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_101.alpha = 0.301;

	this.instance_102 = new lib.Path_102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(20.2,10.8,0.127,0.127,0,0,0,22.4,23.2);
	this.instance_102.alpha = 0.301;

	this.instance_103 = new lib.Path_103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(20.6,12.2,0.127,0.127,0,0,0,22.4,24.8);
	this.instance_103.alpha = 0.301;

	this.instance_104 = new lib.Path_104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(21.2,13.3,0.127,0.127,0,0,0,19.3,22.8);
	this.instance_104.alpha = 0.301;

	this.instance_105 = new lib.Path_105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(21.8,14.5,0.127,0.127,0,0,0,22.4,25.2);
	this.instance_105.alpha = 0.301;

	this.instance_106 = new lib.Path_106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(24.3,20.8,0.127,0.127,0,0,0,23.2,14.2);
	this.instance_106.alpha = 0.301;

	this.instance_107 = new lib.Path_107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(23.9,20.2,0.127,0.127,0,0,0,26.3,21.2);
	this.instance_107.alpha = 0.301;

	this.instance_108 = new lib.Path_108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(31.2,4,0.127,0.127,0,0,0,23.2,19.3);
	this.instance_108.alpha = 0.301;

	this.instance_109 = new lib.Path_109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(30.8,4.6,0.127,0.127,0,0,0,23.2,22.8);
	this.instance_109.alpha = 0.301;

	this.instance_110 = new lib.Path_110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(30.8,5.6,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_110.alpha = 0.301;

	this.instance_111 = new lib.Path_111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(30.1,6.9,0.127,0.127,0,0,0,25.2,21.2);
	this.instance_111.alpha = 0.301;

	this.instance_112 = new lib.Path_112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(29.6,8,0.127,0.127,0,0,0,29.4,20.1);
	this.instance_112.alpha = 0.301;

	this.instance_113 = new lib.Path_113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(29,9.1,0.127,0.127,0,0,0,25.2,20.4);
	this.instance_113.alpha = 0.301;

	this.instance_114 = new lib.Path_114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(28.4,10.7,0.127,0.127,0,0,0,25.6,22.4);
	this.instance_114.alpha = 0.301;

	this.instance_115 = new lib.Path_115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(27.9,12,0.127,0.127,0,0,0,21.6,23.2);
	this.instance_115.alpha = 0.301;

	this.instance_116 = new lib.Path_116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(27.7,12.8,0.127,0.127,0,0,0,21.2,20.8);
	this.instance_116.alpha = 0.301;

	this.instance_117 = new lib.Path_117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(27.5,14.5,0.127,0.127,0,0,0,22,25.2);
	this.instance_117.alpha = 0.301;

	this.instance_118 = new lib.Path_118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(27,15.8,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_118.alpha = 0.301;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#553334").s().p("AhSAqQgkgOAAgWQgCgVAjgSQAigRAygDQAwgCAjAOQAkAOABAWQABAVghASQgjARgyACIgNABQgoAAgfgMg");
	this.shape_3.setTransform(22.4,23.8,0.127,0.127);

	this.instance_119 = new lib.Path_120();
	this.instance_119.parent = this;
	this.instance_119.setTransform(24.3,13.1,0.127,0.127,0,0,0,83.7,98.2);
	this.instance_119.alpha = 0.199;

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

	this.instance_120 = new lib.Path_129();
	this.instance_120.parent = this;
	this.instance_120.setTransform(24.8,28.4,0.127,0.127,0,0,0,22.4,18.4);
	this.instance_120.alpha = 0.301;

	this.instance_121 = new lib.Path_130();
	this.instance_121.parent = this;
	this.instance_121.setTransform(24.8,28.9,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_121.alpha = 0.301;

	this.instance_122 = new lib.Path_131();
	this.instance_122.parent = this;
	this.instance_122.setTransform(25.1,30.1,0.127,0.127,0,0,0,20.4,24.4);
	this.instance_122.alpha = 0.301;

	this.instance_123 = new lib.Path_132();
	this.instance_123.parent = this;
	this.instance_123.setTransform(25.6,31.2,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_123.alpha = 0.301;

	this.instance_124 = new lib.Path_133();
	this.instance_124.parent = this;
	this.instance_124.setTransform(26.5,28.4,0.127,0.127,0,0,0,22.4,18.9);
	this.instance_124.alpha = 0.301;

	this.instance_125 = new lib.Path_134();
	this.instance_125.parent = this;
	this.instance_125.setTransform(26.2,29.6,0.127,0.127,0,0,0,26.3,23.2);
	this.instance_125.alpha = 0.301;

	this.instance_126 = new lib.Path_135();
	this.instance_126.parent = this;
	this.instance_126.setTransform(25.9,30.7,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_126.alpha = 0.301;

	this.instance_127 = new lib.Path_136();
	this.instance_127.parent = this;
	this.instance_127.setTransform(24.3,28.5,0.127,0.127,0,0,0,25.9,19.7);
	this.instance_127.alpha = 0.301;

	this.instance_128 = new lib.Path_137();
	this.instance_128.parent = this;
	this.instance_128.setTransform(24.3,29.6,0.127,0.127,0,0,0,23.2,23.2);
	this.instance_128.alpha = 0.301;

	this.instance_129 = new lib.Path_138();
	this.instance_129.parent = this;
	this.instance_129.setTransform(24.6,30.4,0.127,0.127,0,0,0,25.2,20.1);
	this.instance_129.alpha = 0.301;

	this.instance_130 = new lib.Path_139();
	this.instance_130.parent = this;
	this.instance_130.setTransform(24.8,31.2,0.127,0.127,0,0,0,22.4,18.9);
	this.instance_130.alpha = 0.301;

	this.instance_131 = new lib.Path_140();
	this.instance_131.parent = this;
	this.instance_131.setTransform(27.5,28.4,0.127,0.127,0,0,0,24.4,18.9);
	this.instance_131.alpha = 0.301;

	this.instance_132 = new lib.Path_141();
	this.instance_132.parent = this;
	this.instance_132.setTransform(27,29.7,0.127,0.127,0,0,0,23.9,21.2);
	this.instance_132.alpha = 0.301;

	this.instance_133 = new lib.Path_142();
	this.instance_133.parent = this;
	this.instance_133.setTransform(26.5,31.2,0.127,0.127,0,0,0,22.4,21.6);
	this.instance_133.alpha = 0.301;

	this.instance_134 = new lib.Path_143();
	this.instance_134.parent = this;
	this.instance_134.setTransform(22.9,28.5,0.127,0.127,0,0,0,19.7,19.7);
	this.instance_134.alpha = 0.301;

	this.instance_135 = new lib.Path_144();
	this.instance_135.parent = this;
	this.instance_135.setTransform(23.4,29.7,0.127,0.127,0,0,0,23.9,21.2);
	this.instance_135.alpha = 0.301;

	this.instance_136 = new lib.Path_145();
	this.instance_136.parent = this;
	this.instance_136.setTransform(23.9,31.2,0.127,0.127,0,0,0,26.3,18.9);
	this.instance_136.alpha = 0.301;

	this.instance_137 = new lib.Path_146();
	this.instance_137.parent = this;
	this.instance_137.setTransform(27.9,28.9,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_137.alpha = 0.301;

	this.instance_138 = new lib.Path_147();
	this.instance_138.parent = this;
	this.instance_138.setTransform(27.5,30.1,0.127,0.127,0,0,0,22,24.4);
	this.instance_138.alpha = 0.301;

	this.instance_139 = new lib.Path_148();
	this.instance_139.parent = this;
	this.instance_139.setTransform(27.5,31.2,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_139.alpha = 0.301;

	this.instance_140 = new lib.Path_149();
	this.instance_140.parent = this;
	this.instance_140.setTransform(21.5,28.5,0.127,0.127,0,0,0,20.4,19.7);
	this.instance_140.alpha = 0.301;

	this.instance_141 = new lib.Path_150();
	this.instance_141.parent = this;
	this.instance_141.setTransform(22.2,29.7,0.127,0.127,0,0,0,25.6,21.2);
	this.instance_141.alpha = 0.301;

	this.instance_142 = new lib.Path_151();
	this.instance_142.parent = this;
	this.instance_142.setTransform(22.4,31.2,0.127,0.127,0,0,0,16.1,21.6);
	this.instance_142.alpha = 0.301;

	this.instance_143 = new lib.Path_152();
	this.instance_143.parent = this;
	this.instance_143.setTransform(20.6,29.6,0.127,0.127,0,0,0,20.1,20.4);
	this.instance_143.alpha = 0.301;

	this.instance_144 = new lib.Path_153();
	this.instance_144.parent = this;
	this.instance_144.setTransform(20.2,28.5,0.127,0.127,0,0,0,22.4,19.7);
	this.instance_144.alpha = 0.301;

	this.instance_145 = new lib.Path_154();
	this.instance_145.parent = this;
	this.instance_145.setTransform(20.6,28.9,0.127,0.127,0,0,0,22.4,18.1);
	this.instance_145.alpha = 0.301;

	this.instance_146 = new lib.Path_155();
	this.instance_146.parent = this;
	this.instance_146.setTransform(21.2,30.4,0.127,0.127,0,0,0,19.3,20.1);
	this.instance_146.alpha = 0.301;

	this.instance_147 = new lib.Path_156();
	this.instance_147.parent = this;
	this.instance_147.setTransform(21.5,31.6,0.127,0.127,0,0,0,20.4,22.4);
	this.instance_147.alpha = 0.301;

	this.instance_148 = new lib.Path_157();
	this.instance_148.parent = this;
	this.instance_148.setTransform(29.3,28.4,0.127,0.127,0,0,0,27.1,18.4);
	this.instance_148.alpha = 0.301;

	this.instance_149 = new lib.Path_158();
	this.instance_149.parent = this;
	this.instance_149.setTransform(28.4,29.3,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_149.alpha = 0.301;

	this.instance_150 = new lib.Path_159();
	this.instance_150.parent = this;
	this.instance_150.setTransform(28.3,30.7,0.127,0.127,0,0,0,24.8,19.7);
	this.instance_150.alpha = 0.301;

	this.instance_151 = new lib.Path_160();
	this.instance_151.parent = this;
	this.instance_151.setTransform(27.7,32,0.127,0.127,0,0,0,21.2,24.4);
	this.instance_151.alpha = 0.301;

	this.instance_152 = new lib.Path_161();
	this.instance_152.parent = this;
	this.instance_152.setTransform(19.3,28.5,0.127,0.127,0,0,0,23.2,19.7);
	this.instance_152.alpha = 0.301;

	this.instance_153 = new lib.Path_162();
	this.instance_153.parent = this;
	this.instance_153.setTransform(19.8,29.7,0.127,0.127,0,0,0,22.8,21.2);
	this.instance_153.alpha = 0.301;

	this.instance_154 = new lib.Path_163();
	this.instance_154.parent = this;
	this.instance_154.setTransform(20.6,30.7,0.127,0.127,0,0,0,22.4,19.7);
	this.instance_154.alpha = 0.301;

	this.instance_155 = new lib.Path_164();
	this.instance_155.parent = this;
	this.instance_155.setTransform(20.7,31.4,0.127,0.127,0,0,0,20.8,20.4);
	this.instance_155.alpha = 0.301;

	this.instance_156 = new lib.Path_165();
	this.instance_156.parent = this;
	this.instance_156.setTransform(30.3,28.1,0.127,0.127,0,0,0,19.7,16.1);
	this.instance_156.alpha = 0.301;

	this.instance_157 = new lib.Path_166();
	this.instance_157.parent = this;
	this.instance_157.setTransform(30.1,28.9,0.127,0.127,0,0,0,25.2,20.8);
	this.instance_157.alpha = 0.301;

	this.instance_158 = new lib.Path_167();
	this.instance_158.parent = this;
	this.instance_158.setTransform(29.6,29.6,0.127,0.127,0,0,0,21.6,20.4);
	this.instance_158.alpha = 0.301;

	this.instance_159 = new lib.Path_168();
	this.instance_159.parent = this;
	this.instance_159.setTransform(29.4,30.4,0.127,0.127,0,0,0,27.9,20.1);
	this.instance_159.alpha = 0.301;

	this.instance_160 = new lib.Path_169();
	this.instance_160.parent = this;
	this.instance_160.setTransform(28.7,31.4,0.127,0.127,0,0,0,22.8,20.4);
	this.instance_160.alpha = 0.301;

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

	this.instance_161 = new lib.foxWalking_mc();
	this.instance_161.parent = this;
	this.instance_161.setTransform(22.8,51.4,1,1,0,0,0,22.8,49.9);

	this.instance_162 = new lib.foxBallJump2_mc();
	this.instance_162.parent = this;
	this.instance_162.setTransform(23.3,75.9,0.827,0.828,0,0,0,45.6,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_119},{t:this.shape_3},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2}]}).to({state:[{t:this.instance_161,p:{regX:22.8,regY:49.9,skewY:0,x:22.8,y:51.4}}]},1).to({state:[{t:this.instance_161,p:{regX:0,regY:0,skewY:180,x:45.5,y:1.5}}]},1).to({state:[{t:this.instance_162}]},1).wait(1));

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

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(24.3,3.4,0.127,0.127,0,0,0,23.2,20.8);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,6,0.127,0.127,0,0,0,22.4,23.6);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.8,4.6,0.127,0.127,0,0,0,22.4,17.7);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.8,3.4,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,3.4,0.127,0.127,0,0,0,20.8,20.8);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.3,4,0.127,0.127,0,0,0,23.2,19.3);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.4,4.7,0.127,0.127,0,0,0,23.9,18.4);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.4,6,0.127,0.127,0,0,0,23.2,23.6);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Path_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.6,6.9,0.127,0.127,0,0,0,25.2,21.2);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(26.7,3.4,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.Path_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(26.2,4.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.Path_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(22.2,4,0.127,0.127,0,0,0,25.6,17.7);
	this.instance_11.alpha = 0.301;

	this.instance_12 = new lib.Path_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(25.9,5.1,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.Path_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(25.1,6.8,0.127,0.127,0,0,0,20.4,21.6);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.Path_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(24.8,8.7,0.127,0.127,0,0,0,22.4,19.3);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.Path_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(23.4,4.3,0.127,0.127,0,0,0,23.9,20.1);
	this.instance_15.alpha = 0.301;

	this.instance_16 = new lib.Path_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(23.4,5.5,0.127,0.127,0,0,0,22.8,22.8);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(24.3,6.8,0.127,0.127,0,0,0,23.2,21.6);
	this.instance_17.alpha = 0.301;

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(24.4,8.4,0.127,0.127,0,0,0,23.9,23.2);
	this.instance_18.alpha = 0.301;

	this.instance_19 = new lib.Path_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(24.5,10,0.127,0.127,0,0,0,23.9,23.9);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.Path_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(27.5,3.2,0.127,0.127,0,0,0,22,19.3);
	this.instance_20.alpha = 0.301;

	this.instance_21 = new lib.Path_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(27.1,4,0.127,0.127,0,0,0,25.2,19.3);
	this.instance_21.alpha = 0.301;

	this.instance_22 = new lib.Path_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(26.7,5.6,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_22.alpha = 0.301;

	this.instance_23 = new lib.Path_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(26.2,6.9,0.127,0.127,0,0,0,26.3,21.2);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.Path_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(25.9,8.7,0.127,0.127,0,0,0,25.6,25.9);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.Path_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(25.6,10,0.127,0.127,0,0,0,24.4,27.1);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.Path_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(24.8,11.2,0.127,0.127,0,0,0,22.4,25.9);
	this.instance_26.alpha = 0.301;

	this.instance_27 = new lib.Path_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(22.2,4.7,0.127,0.127,0,0,0,25.6,23.6);
	this.instance_27.alpha = 0.301;

	this.instance_28 = new lib.Path_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(22.4,6.3,0.127,0.127,0,0,0,16.1,22.4);
	this.instance_28.alpha = 0.301;

	this.instance_29 = new lib.Path_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(23.4,7.7,0.127,0.127,0,0,0,23.9,22.4);
	this.instance_29.alpha = 0.301;

	this.instance_30 = new lib.Path_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(23.9,9.1,0.127,0.127,0,0,0,26.3,20.4);
	this.instance_30.alpha = 0.301;

	this.instance_31 = new lib.Path_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(24.3,11.2,0.127,0.127,0,0,0,23.2,25.9);
	this.instance_31.alpha = 0.301;

	this.instance_32 = new lib.Path_32();
	this.instance_32.parent = this;
	this.instance_32.setTransform(24.4,12.6,0.127,0.127,0,0,0,23.2,22.4);
	this.instance_32.alpha = 0.301;

	this.instance_33 = new lib.Path_33();
	this.instance_33.parent = this;
	this.instance_33.setTransform(21.4,5,0.127,0.127,0,0,0,19.7,18.9);
	this.instance_33.alpha = 0.301;

	this.instance_34 = new lib.Path_34();
	this.instance_34.parent = this;
	this.instance_34.setTransform(21.2,4.6,0.127,0.127,0,0,0,19.3,22.8);
	this.instance_34.alpha = 0.301;

	this.instance_35 = new lib.Path_35();
	this.instance_35.parent = this;
	this.instance_35.setTransform(21.5,6.1,0.127,0.127,0,0,0,20.4,24.4);
	this.instance_35.alpha = 0.301;

	this.instance_36 = new lib.Path_36();
	this.instance_36.parent = this;
	this.instance_36.setTransform(22.2,7.6,0.127,0.127,0,0,0,25.6,22);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_37();
	this.instance_37.parent = this;
	this.instance_37.setTransform(22.4,9.1,0.127,0.127,0,0,0,16.1,20.8);
	this.instance_37.alpha = 0.301;

	this.instance_38 = new lib.Path_38();
	this.instance_38.parent = this;
	this.instance_38.setTransform(23.4,10.1,0.127,0.127,0,0,0,23.9,19.3);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.Path_39();
	this.instance_39.parent = this;
	this.instance_39.setTransform(23.9,12.2,0.127,0.127,0,0,0,26.3,18.9);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.Path_40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24.3,13.3,0.127,0.127,0,0,0,23.2,21.6);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.Path_41();
	this.instance_41.parent = this;
	this.instance_41.setTransform(28.3,3.4,0.127,0.127,0,0,0,24.8,20.8);
	this.instance_41.alpha = 0.301;

	this.instance_42 = new lib.Path_42();
	this.instance_42.parent = this;
	this.instance_42.setTransform(27.7,4.3,0.127,0.127,0,0,0,21.2,20.1);
	this.instance_42.alpha = 0.301;

	this.instance_43 = new lib.Path_43();
	this.instance_43.parent = this;
	this.instance_43.setTransform(27.5,6,0.127,0.127,0,0,0,24.4,23.6);
	this.instance_43.alpha = 0.301;

	this.instance_44 = new lib.Path_44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(27,7.6,0.127,0.127,0,0,0,23.9,26.3);
	this.instance_44.alpha = 0.301;

	this.instance_45 = new lib.Path_45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(26.5,9.1,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_45.alpha = 0.301;

	this.instance_46 = new lib.Path_46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(26.2,10.1,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_46.alpha = 0.301;

	this.instance_47 = new lib.Path_47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(25.6,11.6,0.127,0.127,0,0,0,23.6,22.8);
	this.instance_47.alpha = 0.301;

	this.instance_48 = new lib.Path_48();
	this.instance_48.parent = this;
	this.instance_48.setTransform(24.8,12.8,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_48.alpha = 0.301;

	this.instance_49 = new lib.Path_49();
	this.instance_49.parent = this;
	this.instance_49.setTransform(24.6,14.5,0.127,0.127,0,0,0,25.2,26.3);
	this.instance_49.alpha = 0.301;

	this.instance_50 = new lib.Path_50();
	this.instance_50.parent = this;
	this.instance_50.setTransform(24.4,15.8,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_50.alpha = 0.301;

	this.instance_51 = new lib.Path_51();
	this.instance_51.parent = this;
	this.instance_51.setTransform(19.8,4.6,0.127,0.127,0,0,0,22.8,17.7);
	this.instance_51.alpha = 0.301;

	this.instance_52 = new lib.Path_52();
	this.instance_52.parent = this;
	this.instance_52.setTransform(20.3,6.1,0.127,0.127,0,0,0,20.1,24.4);
	this.instance_52.alpha = 0.301;

	this.instance_53 = new lib.Path_53();
	this.instance_53.parent = this;
	this.instance_53.setTransform(21,6.9,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_53.alpha = 0.301;

	this.instance_54 = new lib.Path_54();
	this.instance_54.parent = this;
	this.instance_54.setTransform(21.8,9.6,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_54.alpha = 0.301;

	this.instance_55 = new lib.Path_55();
	this.instance_55.parent = this;
	this.instance_55.setTransform(21.4,8.7,0.127,0.127,0,0,0,19.7,19.3);
	this.instance_55.alpha = 0.301;

	this.instance_56 = new lib.Path_56();
	this.instance_56.parent = this;
	this.instance_56.setTransform(22.2,10.7,0.127,0.127,0,0,0,25.6,22.4);
	this.instance_56.alpha = 0.301;

	this.instance_57 = new lib.Path_57();
	this.instance_57.parent = this;
	this.instance_57.setTransform(22.9,12.6,0.127,0.127,0,0,0,19.7,22.4);
	this.instance_57.alpha = 0.301;

	this.instance_58 = new lib.Path_58();
	this.instance_58.parent = this;
	this.instance_58.setTransform(23.4,13.8,0.127,0.127,0,0,0,23.9,20.4);
	this.instance_58.alpha = 0.301;

	this.instance_59 = new lib.Path_59();
	this.instance_59.parent = this;
	this.instance_59.setTransform(23.9,15.3,0.127,0.127,0,0,0,22.8,20.8);
	this.instance_59.alpha = 0.301;

	this.instance_60 = new lib.Path_60();
	this.instance_60.parent = this;
	this.instance_60.setTransform(24.3,16.5,0.127,0.127,0,0,0,23.2,22.4);
	this.instance_60.alpha = 0.301;

	this.instance_61 = new lib.Path_61();
	this.instance_61.parent = this;
	this.instance_61.setTransform(24.4,18.1,0.127,0.127,0,0,0,23.2,23.2);
	this.instance_61.alpha = 0.301;

	this.instance_62 = new lib.Path_62();
	this.instance_62.parent = this;
	this.instance_62.setTransform(29.3,3.8,0.127,0.127,0,0,0,27.1,23.9);
	this.instance_62.alpha = 0.301;

	this.instance_63 = new lib.Path_63();
	this.instance_63.parent = this;
	this.instance_63.setTransform(28.4,5.1,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_63.alpha = 0.301;

	this.instance_64 = new lib.Path_64();
	this.instance_64.parent = this;
	this.instance_64.setTransform(27.9,6.7,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_64.alpha = 0.301;

	this.instance_65 = new lib.Path_65();
	this.instance_65.parent = this;
	this.instance_65.setTransform(27.5,8,0.127,0.127,0,0,0,22,23.9);
	this.instance_65.alpha = 0.301;

	this.instance_66 = new lib.Path_66();
	this.instance_66.parent = this;
	this.instance_66.setTransform(27.1,9.1,0.127,0.127,0,0,0,25.2,20.4);
	this.instance_66.alpha = 0.301;

	this.instance_67 = new lib.Path_67();
	this.instance_67.parent = this;
	this.instance_67.setTransform(26.7,10.7,0.127,0.127,0,0,0,22,22.4);
	this.instance_67.alpha = 0.301;

	this.instance_68 = new lib.Path_68();
	this.instance_68.parent = this;
	this.instance_68.setTransform(26.2,12.2,0.127,0.127,0,0,0,20.1,24.8);
	this.instance_68.alpha = 0.301;

	this.instance_69 = new lib.Path_69();
	this.instance_69.parent = this;
	this.instance_69.setTransform(26.2,13.4,0.127,0.127,0,0,0,28.3,22.4);
	this.instance_69.alpha = 0.301;

	this.instance_70 = new lib.Path_70();
	this.instance_70.parent = this;
	this.instance_70.setTransform(25.6,15.6,0.127,0.127,0,0,0,24.4,23.6);
	this.instance_70.alpha = 0.301;

	this.instance_71 = new lib.Path_71();
	this.instance_71.parent = this;
	this.instance_71.setTransform(24.8,16.9,0.127,0.127,0,0,0,22.4,20.1);
	this.instance_71.alpha = 0.301;

	this.instance_72 = new lib.Path_72();
	this.instance_72.parent = this;
	this.instance_72.setTransform(24.8,19,0.127,0.127,0,0,0,22.4,21.6);
	this.instance_72.alpha = 0.301;

	this.instance_73 = new lib.Path_73();
	this.instance_73.parent = this;
	this.instance_73.setTransform(24.8,20.2,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_73.alpha = 0.301;

	this.instance_74 = new lib.Path_74();
	this.instance_74.parent = this;
	this.instance_74.setTransform(18,5.5,0.127,0.127,0,0,0,21.2,20.1);
	this.instance_74.alpha = 0.301;

	this.instance_75 = new lib.Path_75();
	this.instance_75.parent = this;
	this.instance_75.setTransform(19,6.8,0.127,0.127,0,0,0,20.8,21.6);
	this.instance_75.alpha = 0.301;

	this.instance_76 = new lib.Path_76();
	this.instance_76.parent = this;
	this.instance_76.setTransform(19.8,8,0.127,0.127,0,0,0,25.9,23.9);
	this.instance_76.alpha = 0.301;

	this.instance_77 = new lib.Path_77();
	this.instance_77.parent = this;
	this.instance_77.setTransform(20.6,9.3,0.127,0.127,0,0,0,22.4,22);
	this.instance_77.alpha = 0.301;

	this.instance_78 = new lib.Path_78();
	this.instance_78.parent = this;
	this.instance_78.setTransform(21.4,11.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_78.alpha = 0.301;

	this.instance_79 = new lib.Path_79();
	this.instance_79.parent = this;
	this.instance_79.setTransform(21.8,12.8,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_79.alpha = 0.301;

	this.instance_80 = new lib.Path_80();
	this.instance_80.parent = this;
	this.instance_80.setTransform(22.4,14,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_80.alpha = 0.301;

	this.instance_81 = new lib.Path_81();
	this.instance_81.parent = this;
	this.instance_81.setTransform(23,15.6,0.127,0.127,0,0,0,20.8,22.8);
	this.instance_81.alpha = 0.301;

	this.instance_82 = new lib.Path_82();
	this.instance_82.parent = this;
	this.instance_82.setTransform(23.4,16.9,0.127,0.127,0,0,0,22.8,20.1);
	this.instance_82.alpha = 0.301;

	this.instance_83 = new lib.Path_83();
	this.instance_83.parent = this;
	this.instance_83.setTransform(30.1,3.6,0.127,0.127,0,0,0,19.3,19.7);
	this.instance_83.alpha = 0.301;

	this.instance_84 = new lib.Path_84();
	this.instance_84.parent = this;
	this.instance_84.setTransform(29.8,4.6,0.127,0.127,0,0,0,23.2,22.8);
	this.instance_84.alpha = 0.301;

	this.instance_85 = new lib.Path_85();
	this.instance_85.parent = this;
	this.instance_85.setTransform(29.4,6,0.127,0.127,0,0,0,27.9,23.6);
	this.instance_85.alpha = 0.301;

	this.instance_86 = new lib.Path_86();
	this.instance_86.parent = this;
	this.instance_86.setTransform(28.5,6.9,0.127,0.127,0,0,0,24.4,21.2);
	this.instance_86.alpha = 0.301;

	this.instance_87 = new lib.Path_87();
	this.instance_87.parent = this;
	this.instance_87.setTransform(27.9,8.4,0.127,0.127,0,0,0,23.2,16.5);
	this.instance_87.alpha = 0.301;

	this.instance_88 = new lib.Path_88();
	this.instance_88.parent = this;
	this.instance_88.setTransform(27.7,10,0.127,0.127,0,0,0,23.6,27.1);
	this.instance_88.alpha = 0.301;

	this.instance_89 = new lib.Path_89();
	this.instance_89.parent = this;
	this.instance_89.setTransform(27.1,11.6,0.127,0.127,0,0,0,21.6,22.8);
	this.instance_89.alpha = 0.301;

	this.instance_90 = new lib.Path_90();
	this.instance_90.parent = this;
	this.instance_90.setTransform(26.2,15.6,0.127,0.127,0,0,0,26.3,22.8);
	this.instance_90.alpha = 0.301;

	this.instance_91 = new lib.Path_91();
	this.instance_91.parent = this;
	this.instance_91.setTransform(27,12.8,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_91.alpha = 0.301;

	this.instance_92 = new lib.Path_92();
	this.instance_92.parent = this;
	this.instance_92.setTransform(26.5,14,0.127,0.127,0,0,0,22.4,22.4);
	this.instance_92.alpha = 0.301;

	this.instance_93 = new lib.Path_93();
	this.instance_93.parent = this;
	this.instance_93.setTransform(26,16.9,0.127,0.127,0,0,0,26.3,20.1);
	this.instance_93.alpha = 0.301;

	this.instance_94 = new lib.Path_94();
	this.instance_94.parent = this;
	this.instance_94.setTransform(25.6,18.7,0.127,0.127,0,0,0,23.6,22);
	this.instance_94.alpha = 0.301;

	this.instance_95 = new lib.Path_95();
	this.instance_95.parent = this;
	this.instance_95.setTransform(25.6,20.2,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_95.alpha = 0.301;

	this.instance_96 = new lib.Path_96();
	this.instance_96.parent = this;
	this.instance_96.setTransform(25.6,22,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_96.alpha = 0.301;

	this.instance_97 = new lib.Path_97();
	this.instance_97.parent = this;
	this.instance_97.setTransform(16.7,5.5,0.127,0.127,0,0,0,20.8,20.1);
	this.instance_97.alpha = 0.301;

	this.instance_98 = new lib.Path_98();
	this.instance_98.parent = this;
	this.instance_98.setTransform(17.3,6.4,0.127,0.127,0,0,0,22,18.1);
	this.instance_98.alpha = 0.301;

	this.instance_99 = new lib.Path_99();
	this.instance_99.parent = this;
	this.instance_99.setTransform(18,7.6,0.127,0.127,0,0,0,22.8,21.6);
	this.instance_99.alpha = 0.301;

	this.instance_100 = new lib.Path_100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(19,8.7,0.127,0.127,0,0,0,29.1,19.3);
	this.instance_100.alpha = 0.301;

	this.instance_101 = new lib.Path_101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(19.3,9.6,0.127,0.127,0,0,0,22.4,20.8);
	this.instance_101.alpha = 0.301;

	this.instance_102 = new lib.Path_102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(20.2,10.8,0.127,0.127,0,0,0,22.4,23.2);
	this.instance_102.alpha = 0.301;

	this.instance_103 = new lib.Path_103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(20.6,12.2,0.127,0.127,0,0,0,22.4,24.8);
	this.instance_103.alpha = 0.301;

	this.instance_104 = new lib.Path_104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(21.2,13.3,0.127,0.127,0,0,0,19.3,22.8);
	this.instance_104.alpha = 0.301;

	this.instance_105 = new lib.Path_105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(21.8,14.5,0.127,0.127,0,0,0,22.4,25.2);
	this.instance_105.alpha = 0.301;

	this.instance_106 = new lib.Path_106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(24.3,20.8,0.127,0.127,0,0,0,23.2,14.2);
	this.instance_106.alpha = 0.301;

	this.instance_107 = new lib.Path_107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(23.9,20.2,0.127,0.127,0,0,0,26.3,21.2);
	this.instance_107.alpha = 0.301;

	this.instance_108 = new lib.Path_108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(31.2,4,0.127,0.127,0,0,0,23.2,19.3);
	this.instance_108.alpha = 0.301;

	this.instance_109 = new lib.Path_109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(30.8,4.6,0.127,0.127,0,0,0,23.2,22.8);
	this.instance_109.alpha = 0.301;

	this.instance_110 = new lib.Path_110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(30.8,5.6,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_110.alpha = 0.301;

	this.instance_111 = new lib.Path_111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(30.1,6.9,0.127,0.127,0,0,0,25.2,21.2);
	this.instance_111.alpha = 0.301;

	this.instance_112 = new lib.Path_112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(29.6,8,0.127,0.127,0,0,0,29.4,20.1);
	this.instance_112.alpha = 0.301;

	this.instance_113 = new lib.Path_113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(29,9.1,0.127,0.127,0,0,0,25.2,20.4);
	this.instance_113.alpha = 0.301;

	this.instance_114 = new lib.Path_114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(28.4,10.7,0.127,0.127,0,0,0,25.6,22.4);
	this.instance_114.alpha = 0.301;

	this.instance_115 = new lib.Path_115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(27.9,12,0.127,0.127,0,0,0,21.6,23.2);
	this.instance_115.alpha = 0.301;

	this.instance_116 = new lib.Path_116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(27.7,12.8,0.127,0.127,0,0,0,21.2,20.8);
	this.instance_116.alpha = 0.301;

	this.instance_117 = new lib.Path_117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(27.5,14.5,0.127,0.127,0,0,0,22,25.2);
	this.instance_117.alpha = 0.301;

	this.instance_118 = new lib.Path_118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(27,15.8,0.127,0.127,0,0,0,23.9,20.8);
	this.instance_118.alpha = 0.301;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#553334").s().p("AhSAqQgkgOAAgWQgCgVAjgSQAigRAygDQAwgCAjAOQAkAOABAWQABAVghASQgjARgyACIgNABQgoAAgfgMg");
	this.shape_3.setTransform(22.4,23.8,0.127,0.127);

	this.instance_119 = new lib.Path_120();
	this.instance_119.parent = this;
	this.instance_119.setTransform(24.3,13.1,0.127,0.127,0,0,0,83.7,98.2);
	this.instance_119.alpha = 0.199;

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

	this.instance_120 = new lib.Path_129();
	this.instance_120.parent = this;
	this.instance_120.setTransform(24.8,28.4,0.127,0.127,0,0,0,22.4,18.4);
	this.instance_120.alpha = 0.301;

	this.instance_121 = new lib.Path_130();
	this.instance_121.parent = this;
	this.instance_121.setTransform(24.8,28.9,0.127,0.127,0,0,0,22.4,21.2);
	this.instance_121.alpha = 0.301;

	this.instance_122 = new lib.Path_131();
	this.instance_122.parent = this;
	this.instance_122.setTransform(25.1,30.1,0.127,0.127,0,0,0,20.4,24.4);
	this.instance_122.alpha = 0.301;

	this.instance_123 = new lib.Path_132();
	this.instance_123.parent = this;
	this.instance_123.setTransform(25.6,31.2,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_123.alpha = 0.301;

	this.instance_124 = new lib.Path_133();
	this.instance_124.parent = this;
	this.instance_124.setTransform(26.5,28.4,0.127,0.127,0,0,0,22.4,18.9);
	this.instance_124.alpha = 0.301;

	this.instance_125 = new lib.Path_134();
	this.instance_125.parent = this;
	this.instance_125.setTransform(26.2,29.6,0.127,0.127,0,0,0,26.3,23.2);
	this.instance_125.alpha = 0.301;

	this.instance_126 = new lib.Path_135();
	this.instance_126.parent = this;
	this.instance_126.setTransform(25.9,30.7,0.127,0.127,0,0,0,25.6,19.7);
	this.instance_126.alpha = 0.301;

	this.instance_127 = new lib.Path_136();
	this.instance_127.parent = this;
	this.instance_127.setTransform(24.3,28.5,0.127,0.127,0,0,0,25.9,19.7);
	this.instance_127.alpha = 0.301;

	this.instance_128 = new lib.Path_137();
	this.instance_128.parent = this;
	this.instance_128.setTransform(24.3,29.6,0.127,0.127,0,0,0,23.2,23.2);
	this.instance_128.alpha = 0.301;

	this.instance_129 = new lib.Path_138();
	this.instance_129.parent = this;
	this.instance_129.setTransform(24.6,30.4,0.127,0.127,0,0,0,25.2,20.1);
	this.instance_129.alpha = 0.301;

	this.instance_130 = new lib.Path_139();
	this.instance_130.parent = this;
	this.instance_130.setTransform(24.8,31.2,0.127,0.127,0,0,0,22.4,18.9);
	this.instance_130.alpha = 0.301;

	this.instance_131 = new lib.Path_140();
	this.instance_131.parent = this;
	this.instance_131.setTransform(27.5,28.4,0.127,0.127,0,0,0,24.4,18.9);
	this.instance_131.alpha = 0.301;

	this.instance_132 = new lib.Path_141();
	this.instance_132.parent = this;
	this.instance_132.setTransform(27,29.7,0.127,0.127,0,0,0,23.9,21.2);
	this.instance_132.alpha = 0.301;

	this.instance_133 = new lib.Path_142();
	this.instance_133.parent = this;
	this.instance_133.setTransform(26.5,31.2,0.127,0.127,0,0,0,22.4,21.6);
	this.instance_133.alpha = 0.301;

	this.instance_134 = new lib.Path_143();
	this.instance_134.parent = this;
	this.instance_134.setTransform(22.9,28.5,0.127,0.127,0,0,0,19.7,19.7);
	this.instance_134.alpha = 0.301;

	this.instance_135 = new lib.Path_144();
	this.instance_135.parent = this;
	this.instance_135.setTransform(23.4,29.7,0.127,0.127,0,0,0,23.9,21.2);
	this.instance_135.alpha = 0.301;

	this.instance_136 = new lib.Path_145();
	this.instance_136.parent = this;
	this.instance_136.setTransform(23.9,31.2,0.127,0.127,0,0,0,26.3,18.9);
	this.instance_136.alpha = 0.301;

	this.instance_137 = new lib.Path_146();
	this.instance_137.parent = this;
	this.instance_137.setTransform(27.9,28.9,0.127,0.127,0,0,0,23.2,20.8);
	this.instance_137.alpha = 0.301;

	this.instance_138 = new lib.Path_147();
	this.instance_138.parent = this;
	this.instance_138.setTransform(27.5,30.1,0.127,0.127,0,0,0,22,24.4);
	this.instance_138.alpha = 0.301;

	this.instance_139 = new lib.Path_148();
	this.instance_139.parent = this;
	this.instance_139.setTransform(27.5,31.2,0.127,0.127,0,0,0,24.4,21.6);
	this.instance_139.alpha = 0.301;

	this.instance_140 = new lib.Path_149();
	this.instance_140.parent = this;
	this.instance_140.setTransform(21.5,28.5,0.127,0.127,0,0,0,20.4,19.7);
	this.instance_140.alpha = 0.301;

	this.instance_141 = new lib.Path_150();
	this.instance_141.parent = this;
	this.instance_141.setTransform(22.2,29.7,0.127,0.127,0,0,0,25.6,21.2);
	this.instance_141.alpha = 0.301;

	this.instance_142 = new lib.Path_151();
	this.instance_142.parent = this;
	this.instance_142.setTransform(22.4,31.2,0.127,0.127,0,0,0,16.1,21.6);
	this.instance_142.alpha = 0.301;

	this.instance_143 = new lib.Path_152();
	this.instance_143.parent = this;
	this.instance_143.setTransform(20.6,29.6,0.127,0.127,0,0,0,20.1,20.4);
	this.instance_143.alpha = 0.301;

	this.instance_144 = new lib.Path_153();
	this.instance_144.parent = this;
	this.instance_144.setTransform(20.2,28.5,0.127,0.127,0,0,0,22.4,19.7);
	this.instance_144.alpha = 0.301;

	this.instance_145 = new lib.Path_154();
	this.instance_145.parent = this;
	this.instance_145.setTransform(20.6,28.9,0.127,0.127,0,0,0,22.4,18.1);
	this.instance_145.alpha = 0.301;

	this.instance_146 = new lib.Path_155();
	this.instance_146.parent = this;
	this.instance_146.setTransform(21.2,30.4,0.127,0.127,0,0,0,19.3,20.1);
	this.instance_146.alpha = 0.301;

	this.instance_147 = new lib.Path_156();
	this.instance_147.parent = this;
	this.instance_147.setTransform(21.5,31.6,0.127,0.127,0,0,0,20.4,22.4);
	this.instance_147.alpha = 0.301;

	this.instance_148 = new lib.Path_157();
	this.instance_148.parent = this;
	this.instance_148.setTransform(29.3,28.4,0.127,0.127,0,0,0,27.1,18.4);
	this.instance_148.alpha = 0.301;

	this.instance_149 = new lib.Path_158();
	this.instance_149.parent = this;
	this.instance_149.setTransform(28.4,29.3,0.127,0.127,0,0,0,23.6,21.2);
	this.instance_149.alpha = 0.301;

	this.instance_150 = new lib.Path_159();
	this.instance_150.parent = this;
	this.instance_150.setTransform(28.3,30.7,0.127,0.127,0,0,0,24.8,19.7);
	this.instance_150.alpha = 0.301;

	this.instance_151 = new lib.Path_160();
	this.instance_151.parent = this;
	this.instance_151.setTransform(27.7,32,0.127,0.127,0,0,0,21.2,24.4);
	this.instance_151.alpha = 0.301;

	this.instance_152 = new lib.Path_161();
	this.instance_152.parent = this;
	this.instance_152.setTransform(19.3,28.5,0.127,0.127,0,0,0,23.2,19.7);
	this.instance_152.alpha = 0.301;

	this.instance_153 = new lib.Path_162();
	this.instance_153.parent = this;
	this.instance_153.setTransform(19.8,29.7,0.127,0.127,0,0,0,22.8,21.2);
	this.instance_153.alpha = 0.301;

	this.instance_154 = new lib.Path_163();
	this.instance_154.parent = this;
	this.instance_154.setTransform(20.6,30.7,0.127,0.127,0,0,0,22.4,19.7);
	this.instance_154.alpha = 0.301;

	this.instance_155 = new lib.Path_164();
	this.instance_155.parent = this;
	this.instance_155.setTransform(20.7,31.4,0.127,0.127,0,0,0,20.8,20.4);
	this.instance_155.alpha = 0.301;

	this.instance_156 = new lib.Path_165();
	this.instance_156.parent = this;
	this.instance_156.setTransform(30.3,28.1,0.127,0.127,0,0,0,19.7,16.1);
	this.instance_156.alpha = 0.301;

	this.instance_157 = new lib.Path_166();
	this.instance_157.parent = this;
	this.instance_157.setTransform(30.1,28.9,0.127,0.127,0,0,0,25.2,20.8);
	this.instance_157.alpha = 0.301;

	this.instance_158 = new lib.Path_167();
	this.instance_158.parent = this;
	this.instance_158.setTransform(29.6,29.6,0.127,0.127,0,0,0,21.6,20.4);
	this.instance_158.alpha = 0.301;

	this.instance_159 = new lib.Path_168();
	this.instance_159.parent = this;
	this.instance_159.setTransform(29.4,30.4,0.127,0.127,0,0,0,27.9,20.1);
	this.instance_159.alpha = 0.301;

	this.instance_160 = new lib.Path_169();
	this.instance_160.parent = this;
	this.instance_160.setTransform(28.7,31.4,0.127,0.127,0,0,0,22.8,20.4);
	this.instance_160.alpha = 0.301;

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_119},{t:this.shape_3},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2}]}).to({state:[{t:this.foxWalking,p:{regX:22.8,regY:49.9,skewY:0,x:22.8,y:51.4}}]},1).to({state:[{t:this.foxWalking,p:{regX:0,regY:0,skewY:180,x:45.5,y:1.5}}]},1).to({state:[{t:this.foxBall}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B67E5F").s().p("AgbGyQgigEgcgNIgTgJQhRiAguiiQgPg2AChFQAaiIByguIADAAQAXhKgIhoQgCglAIgaQAngIAzAAQAwAAAkAGQAFABgBADQAAADAEABIAABBIgEAEIAAACQgHBjAaBBIAyAcQAOAJALALIAFAEQBBBBgKCBQgGBFgWA5QgtB3g7BoQgsAdg+AAQgRAAgUgDg");
	this.shape_39.setTransform(21.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-0.8,49.8,103);
p.frameBounds = [rect, new cjs.Rectangle(1.5,-3.4,51.3,107.7), new cjs.Rectangle(-7.3,-3.4,51.3,107.7), new cjs.Rectangle(-1.5,46.9,49.8,57.9)];


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// combo
	this.chooseBtn = new lib.choose_btn();
	this.chooseBtn.name = "chooseBtn";
	this.chooseBtn.parent = this;
	this.chooseBtn.setTransform(25.1,68.9,1.222,1.219,0,0,0,52.4,17.2);
	new cjs.ButtonHelper(this.chooseBtn, 0, 1, 2);

	this.comboChoose = new lib.an_ComboBox({'id': 'comboChoose', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, התאמת דגלים, 1, של מי הציטוט, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.comboChoose.setTransform(24.2,-107.1,1.959,1.959,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.comboChoose},{t:this.chooseBtn}]}).wait(1));

	// content1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgGgNgOgIQgQgIggAAQgLAAgYADIgEgcQAYgEAbAAQAyAAAXAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape.setTransform(197.7,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRBJQAggEATgHIggikIAjAAIAbCaQAfgMAHgWQAIgVAAgiIAChBIAiAAIgCAyIgDAyQgCAOgHASQgIARgPANQgOANgcAKQgbALg0AJg");
	this.shape_1.setTransform(177.2,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBeIAAgfQAAgTgEgnIAAgVQAAgcAYgVIgwAAIAAgcIBxAAIAAAYQgcAAgPAQQgOAPAAAaIABATQAEArAAASIAAAag");
	this.shape_2.setTransform(162.1,-14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqBfIAAhcQABgZgGgNQgFgNgQgIQgPgJgcAAQgSAAgbAEIgDgdQAcgEAXAAQA3AAAXAWQAWAWAAAtIAABkg");
	this.shape_3.setTransform(144.5,-14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhjBaIAGgaQAJAEALAAQAMAAAFgGQAEgFAAgOIAAhsQgPAAgWADIgDgcQAogFAqAAQApAAAXAHQAWAIANASQALATAAAlIAABlIghAAIAAhdQAAgagFgOQgEgMgOgIQgOgIgfAAIgRABIAABxQAAARgDAKQgEAJgKAGQgKAGgVAAQgRAAgQgGg");
	this.shape_4.setTransform(123.6,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAsBqIAAhjQAAglgTgPQgTgPgmAAQgcAAgjAFIgDgtQAfgGAtABQAuAAAbANQAaAOAMAVQAKAVABAkIAABqgAhhBqIAAhsIA4AAIAABsg");
	this.shape_5.setTransform(90.3,-15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah2BkIAJgkQALAEAKAAQAMAAAEgGQAEgGAAgQIAAhkQgOAAgcADIgFgrQAzgGA3AAQAuAAAbAIQAbAIAOAWQAOAVAAAoIAABxIg4AAIAAhoQAAgngNgNQgOgMgwAAIAABoQAAAbgFAMQgEALgNAIQgMAHgYAAQgZAAgXgHg");
	this.shape_6.setTransform(63.3,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAqBpIhJhoQgOAOgDAwIgEAqIg2AAIAEgsQAEguAMgTQALgUASgLIgxhFIBBAAIA8BWQAQgMADgoIADgiIA0AAIgDAZQgEAtgLATQgMASgTANIA/BZg");
	this.shape_7.setTransform(39.3,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AADBqIAAgvIAzAAIAAgrQAAgpgHgQQgHgQgRAAQgSAAgLATQgMAUgKA1IgNBHIg7AAIAKguQAJgoAHgTIgjhoIAyAAIANAtQAfgvAsAAQAlAAAWAdQAWAeAABBIAABXg");
	this.shape_8.setTransform(13.3,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2BkIAJgkQAMAEAJAAQAMAAAEgGQADgGAAgQIAAhkQgOAAgbADIgFgrQAzgGA3AAQAuAAAbAIQAbAIAPAWQANAVAAAoIAABxIg4AAIAAhoQAAgngNgNQgOgMgwAAIAABoQAAAbgFAMQgEALgNAIQgMAHgYAAQgZAAgXgHg");
	this.shape_9.setTransform(-13.3,-15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAsBqIAAhjQAAglgTgPQgUgPglAAQgdAAghAFIgFgtQAhgGAsABQAvAAAaANQAaAOALAVQAMAVAAAkIAABqgAhgBqIAAhsIA4AAIAABsg");
	this.shape_10.setTransform(-49.9,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghBpIAAgbQgBgbgDgiIgBgUQAAgkAagRIg7AAIAAgwICOAAIAAAnQgbAAgRANQgQANAAAbIACATQAEAlAAAdIAAAgg");
	this.shape_11.setTransform(-70.3,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbBpIAAjRIA4AAIAADRg");
	this.shape_12.setTransform(-84.8,-15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeBqIgOgwQgVADgKAUIgOAZIg4AAIAMgaQAag3A2gEIAAgpQAAgTgIgKQgIgLgXAAIgRABIgDgrQAPgDAXAAQAngBAUAUQATASAAAsIAAAxIAVBRg");
	this.shape_13.setTransform(-100.2,-15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBpIAAjRIA4AAIAADRg");
	this.shape_14.setTransform(-114.5,-15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah2BkIAJgkQAMAEAJAAQAMAAAEgGQAEgGgBgQIAAhkQgNAAgcADIgFgrQAzgGA4AAQAtAAAbAIQAcAIAOAWQANAVAAAoIAABxIg4AAIAAhoQAAgngNgNQgOgMgxAAIAABoQAAAbgEAMQgDALgOAIQgMAHgYAAQgZAAgXgHg");
	this.shape_15.setTransform(-134.6,-15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape_16.setTransform(-152.4,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_17.setTransform(207.9,-61.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhRBJQAfgEAVgHIghikIAjAAIAbCaQAfgMAHgWQAIgVAAgiIAChBIAiAAIgCAyIgDAyQgCAOgHASQgIARgPANQgOANgcAKQgbALg0AJg");
	this.shape_18.setTransform(192.9,-60.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBeIAAgfQAAgTgEgmIgBgWQAAgcAZgVIgwAAIAAgcIBxAAIAAAYQgbAAgPAPQgPAQAAAaIABATQAEArABASIAAAag");
	this.shape_19.setTransform(177.7,-61.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAqBfIAAhcQAAgZgFgNQgFgNgQgIQgPgJgcAAQgSAAgbAEIgDgdQAbgEAYAAQA3AAAXAWQAWAWAAAtIAABkg");
	this.shape_20.setTransform(160.1,-61.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_21.setTransform(147.3,-61.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFCCIAAgZQABgXAEgMQADgLAJgMIALgNQAIgKACgIQACgIAAgLIAAgaIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgDANQgFAMgIANIgKANQgOATAAAWIAAAeg");
	this.shape_22.setTransform(124,-65.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAwIAAhgIAhAAIAABgg");
	this.shape_23.setTransform(111.5,-66);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgECCIAAgZQgBgXAFgMQADgLAKgMIAKgNQAIgKACgIQACgIAAgLIAAgaIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgDANQgFAMgJANIgJANQgOATAAAWIAAAeg");
	this.shape_24.setTransform(88.1,-65.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_25.setTransform(68.6,-61.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgECCIAAgZQAAgXAEgMQADgLAKgMIAKgNQAIgKACgIQACgIAAgLIAAgaIhnAAIAAhkIAiAAIAABIIBnAAIAAAvQAAASgDANQgFAMgJANIgJANQgOATAAAWIAAAeg");
	this.shape_26.setTransform(49.5,-65.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAuBeIhHhlQgQAJgDAbIgIBBIgjAAIAHhBQAGgsAfgQIgrg+IApAAIA8BUQALgHAEgJQAEgKADgUIAFgmIAjAAIgFAmQgDAagIAQQgIAPgVANIA4BPg");
	this.shape_27.setTransform(31.8,-61.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAvBeIhHhlQgRAJgDAbIgIBBIgjAAIAHhBQAGgsAggQIgsg+IApAAIA8BUQALgHAEgJQAFgKACgUIAFgmIAjAAIgFAmQgDAagIAQQgIAPgVANIA4BPg");
	this.shape_28.setTransform(1.3,-61.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhjBaIAGgZQAJADALAAQAMAAAFgFQAEgGAAgOIAAhsQgPAAgWAEIgDgcQAogGAqAAQApAAAXAIQAWAGANAUQALASAAAlIAABkIghAAIAAhcQAAgbgFgNQgEgMgOgIQgOgIgfAAIgRAAIAAByQAAARgDAKQgEAJgKAGQgKAGgVAAQgRAAgQgGg");
	this.shape_29.setTransform(-22,-61.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhEBcIAFgfQARAGARAAQAUAAANgJQAOgIAHgPQAHgPAAgUQAAgcgQgTQgQgTgdAAQgRAAgRAGIgFgfQAVgFARAAQAuAAAaAbQAbAcAAApQAAAcgMAVQgLAVgWAOQgWANggAAQgRAAgVgFg");
	this.shape_30.setTransform(-51.2,-61.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATBeIAAifIhmAAIAAgcICnAAIAAAcIggAAIAACfg");
	this.shape_31.setTransform(-68.7,-61.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAxBfIAAhcQAAgcgGgNQgHgNgQgHQgQgHgeAAQgYAAgdAFIgDgdQAggFAeAAQA6AAAXAWQAWAWAAAtIAABkgAhQBfIAAhpIAiAAIAABpg");
	this.shape_32.setTransform(-98.9,-61.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_33.setTransform(-121.5,-61.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAwIAAhgIAhAAIAABgg");
	this.shape_34.setTransform(-136.2,-66);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhRBfIAAi3QAmgGAgAAQAhAAAVAKQAWAKAIARQAJARAAAfIAABogAgvg+IAACBIBgAAIAAhJQgBgUgFgMQgEgMgOgHQgOgIgYAAQgQAAgSADg");
	this.shape_35.setTransform(-151.5,-61.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAuBeIhHhlQgQAJgDAbIgIBBIgjAAIAHhBQAGgsAfgRIgrg9IAqAAIA7BUQALgHAEgJQAEgKADgUIAFgmIAiAAIgEAnQgCAZgJAQQgIAPgVANIA4BPg");
	this.shape_36.setTransform(130.9,-148.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgtBfIAAgcIA4AAIAAhbQAAgQgCgHQgCgIgHgFQgHgFgMAAQgLAAgJACIgDgbQAMgEASAAQAWAAAOAJQAMAJAFANQAFANgBAZIAAB4g");
	this.shape_37.setTransform(113.1,-148.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAuBeIhHhlQgQAJgDAbIgIBBIgjAAIAHhBQAGgsAfgRIgrg9IAqAAIA7BUQALgHAEgJQAEgKADgUIAFgmIAjAAIgFAnQgCAZgJAQQgIAPgVANIA4BPg");
	this.shape_38.setTransform(97.7,-148.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgGgNgOgIQgQgIggAAQgLAAgYADIgEgcQAYgEAbAAQAyAAAXAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape_39.setTransform(67.2,-148.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAxBfIAAhlQgBgUgFgMQgEgMgOgHQgOgIgYAAQgQAAgSADIAACdIgiAAIAAi3QAmgGAgAAQAhAAAVAKQAWAKAIARQAJARAAAfIAABog");
	this.shape_40.setTransform(46.5,-148.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AArBfIAAhcQgBgZgFgNQgFgNgQgIQgQgJgbAAQgSAAgbAEIgDgdQAcgEAWAAQA5AAAWAWQAWAWAAAtIAABkg");
	this.shape_41.setTransform(25.4,-148.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_42.setTransform(12.6,-148.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_43.setTransform(-13.5,-148.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag8BRQgWgRgMgdQgLgeAAgwIgDg1IAjAAIABAfQABAvADASQATAAAPgJQAPgKAAgaIAEgzIAgAAIgEA8QgBAPgCAHQgDAJgGAHQgHAJgPAGQgQAGgaADQAEATARALQAQAMAXAAQAVAAAQgLQAQgKAHgQQAIgRACgdIAIhRIAiAAIgHBGQgDAmgKAaQgKAagXARQgYAPgkAAQgiAAgWgPg");
	this.shape_44.setTransform(-36.4,-148.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAwBfIAAhlQAAgUgEgMQgFgMgNgHQgPgIgZAAQgOAAgTADIAACdIgiAAIAAi3QAmgGAgAAQAhAAAWAKQAVAKAIARQAJARAAAfIAABog");
	this.shape_45.setTransform(-59.8,-148.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhJCCIAAixIAhAAIAACxgAACA6IAAgaQAAgTAEgMQADgLALgOIALgNQAHgKADgIQACgIAAgNIAAgZIh3AAIAAgcICZAAIAAAuQAAAUgEANQgDAMgKANIgJAMQgPATAAAWIAAAeg");
	this.shape_46.setTransform(-80.4,-144.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag8BQQgWgQgMgdQgLgeAAgxIgDgzIAjAAIABAeQABAvADASQATAAAPgKQAPgJAAgaIAEgyIAgAAIgEA6QgBAPgCAJQgDAHgGAIQgHAIgPAHQgQAGgaACQAEAUARAMQAQALAXAAQAVAAAQgKQAQgLAHgQQAIgRACgdIAIhQIAiAAIgHBFQgDAmgKAbQgKAagXAPQgYARgkgBQgiABgWgRg");
	this.shape_47.setTransform(223.7,-191.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFCCIAAgaQABgWAEgMQADgLAJgLIALgOQAIgKACgIQACgIAAgMIAAgZIhnAAIAAhkIAiAAIAABIIBnAAIAAAuQAAAUgDAMQgFAMgIANIgKAMQgOAUAAAWIAAAeg");
	this.shape_48.setTransform(202.3,-195.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_49.setTransform(189.8,-192);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhRBfIAAi3QAmgGAfAAQAjAAAUAKQAWAKAJARQAIARAAAfIAABogAgvg+IAACBIBgAAIAAhJQAAgUgGgMQgEgMgOgHQgOgIgYAAQgPAAgTADg");
	this.shape_50.setTransform(174.6,-192.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAfQAKgFAFgJQAEgIAAgPIgRAAIAAglIAjAAIAAAlQAAASgHANQgHAMgOAHg");
	this.shape_51.setTransform(158.5,-181.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAvBeIhHhkQgRAHgDAcIgIBBIgjAAIAIhBQAFgtAggQIgsg9IApAAIA8BUQALgHAEgJQAFgJACgWIAEglIAkAAIgEAmQgEAZgIARQgJAPgUAMIA4BQg");
	this.shape_52.setTransform(133.7,-192);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgsBfIAAgcIA4AAIAAhbQgBgQgBgHQgDgIgHgFQgHgFgNAAQgKAAgJACIgDgbQANgEAQAAQAXAAANAJQANAJAFANQAEANABAZIAAB4g");
	this.shape_53.setTransform(115.9,-192.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgQAwIAAhfIAhAAIAABfg");
	this.shape_54.setTransform(105.8,-196.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_55.setTransform(79.7,-192.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAvBeIhHhkQgRAHgDAcIgIBBIgjAAIAIhBQAFgtAggQIgsg9IAqAAIA7BUQALgHAEgJQAEgJADgWIAEglIAjAAIgDAmQgDAZgJARQgJAPgUAMIA4BQg");
	this.shape_56.setTransform(59.6,-192);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhCBeIAAgcIBdAAIhmifIAmAAIAzBTQAOgJAFgMQAGgKAAgVIACgfIAjAAIgCAiQgBARgCAKQgDALgKAKQgJALgVALIAoA/IAAAUg");
	this.shape_57.setTransform(39.4,-192);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJAuIgIgwIAAgrIAjAAIAAArIgIAwg");
	this.shape_58.setTransform(28.1,-204);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag8BQQgXgQgKgdQgMgeAAgxIgDgzIAjAAIABAeQABAvADASQASAAAQgKQAPgJAAgaIADgyIAhAAIgDA6QgBAPgDAJQgCAHgIAIQgFAIgQAHQgPAGgbACQAEAUAQAMQARALAYAAQAUAAAQgKQAQgLAHgQQAIgRACgdIAHhQIAiAAIgGBFQgEAmgJAbQgKAagYAPQgXARgkgBQghABgXgRg");
	this.shape_59.setTransform(2,-191.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQBeIAAi7IAhAAIAAC7g");
	this.shape_60.setTransform(-15.1,-192);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhRBJQAggEATgHIggikIAjAAIAcCaQAegMAHgWQAIgVAAgiIAChBIAiAAIgCAyIgDAyQgCAOgHASQgIARgOANQgPANgcAKQgbALg0AJg");
	this.shape_61.setTransform(-30.1,-191.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFCCIAAgaQAAgWAFgMQAEgLAIgLIALgOQAIgKACgIQACgIAAgMIAAgZIhnAAIAAhkIAiAAIAABIIBnAAIAAAuQAAAUgEAMQgDAMgJANIgKAMQgPAUAAAWIAAAeg");
	this.shape_62.setTransform(-47.6,-195.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAxBfIAAhcQAAgcgGgNQgHgNgQgHQgQgHgeAAQgYAAgdAFIgDgdQAggFAeAAQA6AAAXAWQAWAWAAAtIAABkgAhQBfIAAhpIAiAAIAABpg");
	this.shape_63.setTransform(-76.6,-192.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHBfIAAgcIA+AAIAAg3QAAgegCgPQgCgOgIgJQgJgJgNAAQgTAAgNAVQgOAUgKAyIgNBFIgjAAIAPhJIAJgjIgdhPIAhAAIAOAqQAIgTASgMQARgNAUAAQAWAAAQALQAPALAHAVQAHAWAAApIAABTg");
	this.shape_64.setTransform(-99.1,-192.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AATBeIAAifIhmAAIAAgcICnAAIAAAcIggAAIAACfg");
	this.shape_65.setTransform(-118.6,-192);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhZBfIAAgcIBzAAIAAhAQAAgagGgNQgFgNgPgIQgPgIghAAQgMAAgXADIgEgcQAYgEAbAAQAzAAAWAWQAXAWAAAtIAABIIAeAAIAAAcg");
	this.shape_66.setTransform(-137.6,-192.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAqBfIAAhcQABgZgGgNQgFgNgQgIQgPgJgbAAQgUAAgaAEIgDgdQAbgEAYAAQA4AAAWAWQAWAWAAAtIAABkg");
	this.shape_67.setTransform(-157.7,-192.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_68.setTransform(-171,-184.5);

	this.fox3 = new lib.fox3_mc();
	this.fox3.name = "fox3";
	this.fox3.parent = this;
	this.fox3.setTransform(-237.9,124.9,2.28,2.28,0,0,0,21.7,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fox3},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// alphaEffect
	this.instance = new lib.blendingAlpha_mc();
	this.instance.parent = this;
	this.instance.setTransform(0.6,294.8,1.291,0.908,0,0,0,372.1,649.8);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 0, 0, 0))];
	this.instance.cache(-2,-2,748,654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// content2
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("A/vQiQjIAAAAjvIAA+NQAAjvDIAAMA/fAAAQDJAAAADvIAAeNQAADvjJAAMgzVAAAIujEog");
	this.shape_69.setTransform(29.8,-89.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLAAt7MAAAhb1MCWBAAAMAAABb1g");
	mask.setTransform(0.3,-1.1);

	// Layer_5
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AA7247").s().p("AgGCmIgQAAIAAg1QgtAahhAAQitABhogwQgbgMgDADQgEACgBAlQAAASgRAIQgRAIgyAAQhAAAhAgeQhCgkgngOQAAAbgYAWQggAbgzAAQg9gBgogTQghgRgMgZQg1AWg1AAIgCAAQh3gFgggDQhQgLgugVQgPATgBAoQAAANhAAAQgkAAhbgYQhfgbgIgWQAAAEADAGQAFAKAAAFQAAAUg0ATQg6AUhMAAQg7AAgwgLQg6gNAAgVQAAgRAbgTQgVAFgrAAQg2AAg3gOQgkgIg3gVIhOABQgVAQgsAMQgnALgqAAQgxAAg5gNQg3gRgTgDIgTAAQgDAWguAPQguANg/AAQiXABg2gjQgIACgQgJQgTgHgKAAQgBAxgNANQgXAVhZAAQgrAAhNgOQhMgPgoAAQg9gBgPAiQgRAhg6AAQiGABh+hKQgUAOACAQQABAHglgBQhzABhFgWQgxgQgUgVIACAlQAAAOgLAKQgRAMghAAQhrAAgtgGQhWgLgfgnQgEAngbASQgbAUgagWIghgdQguAahgAAQitABhngwQgcgMgEADQgDACAAAlQAAASgSAIQgRAIgxAAQhCAAg/geQhCgkgngOQAAAbgYAWQggAbgzAAQg8gBgpgTQghgRgLgZQg1AWg1AAIgCAAQh3gFghgDQhQgLgtgVQgQATgBAoQAAANhBAAQgiAAhbgYQhhgbgHgWQAAAEADAGQAEAKAAAFQAAAUg0ATQg4AUhMAAQg9AAgvgLQg7gNAAgVQAAgRAdgTQgWAFgrAAQg2AAg3gOQgkgIg2gVIhQABQgTAQguAMQgoALgoAAQgxAAg4gNIhKgUIgUAAQgBAWgvAPQgvANhAAAQiVABg2gjQgKACgQgJQgRgHgKAAQgCAxgNANQgYAVhZAAQgpAAhOgOQhLgPgqAAQg8gBgQAiQgPAhg7AAQiGABh+hKQgTAOABAQQABAHglgBQhyABhGgWQgxgQgUgVIACAlQAAAOgLAKQgQAMgiAAQhsAAgrgGQhWgLghgnQgDAngcASQgaAVg7ABIgEAAIgRAAIgQAAIAAlGIAQgCIAVgBQAVgCAYAAMBIKAAAIAAACQAVgCAXAAMBILAAAIAAADIAWgBQAUgCAVAAMBINAAAIAAACQAVgCAWAAMBIMAAAQAgAAAdADIAAEFQgSgBgXgCQgIAJgMAIQguAahgAAQiuABhmgwQgdgMgDADQgDACAAAlQAAASgRAIQgVAIgvAAQhBAAhAgeQhCgkgngOQAAAbgXAWQgJAIgPAGQgZANgkAAQg9gBgmgTQgigRgMgZQgzAWg1AAIgDAAQh2gFghgDQhQgLgugVQgPATAAAoQgBANhBAAQgjAAhbgYQhhgbgGgWQAAAEACAGQAFAKAAAFQAAAUg1ATQg3AUhNAAQg9AAgxgLQg5gNABgVQgBgRAcgTQgWAFgqAAQg3AAg0gOQgmgIg3gVIhOABQgUAQgsAMQgpALgnAAQgzAAg4gNIhJgUIgVAAQgCAWguAPQguANhAAAQiVABg3gjQgIACgSgJQgQgHgMAAQgBAxgLANQgYAVhaAAQgqAAhNgOQhNgPgnAAQg+gBgQAiQgOAhg8AAQiHABh+hKQgRAOABAQQABAHgmgBQhxABhIgWQgvgQgTgVIABAlQAAAOgLAKQgRAMggAAQhuAAgqgGQhXgLgggnQgDAngcASQgbAUgagWIgggdQguAahgAAQiuABhngwQgbgMgDADQgEACAAAlQAAASgRAIQgUAIgxAAQhAAAhAgeQhCgkgmgOQAAAbgZAWQgeAbg1AAQg9gBgngTQgigRgLgZQg1AWg0AAIgDAAQh3gFgggDQhPgLgwgVQgPATAAAoQAAANhCAAQgiAAhbgYQhggbgHgWQABAEACAGQADAKABAFQgBAUgyATQg4AUhPAAQg8AAgwgLQg6gNABgVQAAgRAcgTQgWAFgsAAQg2AAg1gOQglgIg1gVIhPABQgVAQgrAMQgqALgoAAQgzAAg3gNIhJgUIgWAAQAAAWguAPQgvANg/AAQiWABg3gjQgJACgRgJQgQgHgMAAQgBAxgMANQgXAVhaAAQgqAAhNgOQhOgPgmAAQg9gBgSAiQgNAhg7AAQiHABh+hKQgTAOABAQQADAHgmgBQhxABhJgWQgwgQgTgVIADAlQAAAOgMAKQgRAMggAAQhuAAgpgGQhZgLgegnQgEAngcASQgaAVg6ABIgGAAg");
	this.shape_70.setTransform(-49.9,256.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C67D45").s().p("EBgUAB8QgTATADAYQAAAMgjAAQhvgBhEghQgwgWgTghQAEARAAAmQAAAVgMAPQgPARghAAQhdAAg1gNQhWgYgeg7QhMBXgrAEQhZAKg+gPIgugSIAAg+QgsAag8AAQgTAAgZgFQgmBAh3AAQirAAhihFQgbgTgCAEQgCADgBA5QABAZgTAMQgUAMgugBQhAAAg9grQhBg2glgTQAAAngYAgQgdAmg0AAQg7AAgngbQgigagJglQg0AhgwAAIgFAAQh2gIgegEQhNgOgsgiQgVAvgHApQgJAThDgBQgfAAhOgjQhPglgKgiQABAHADAIQADANAAAIQAAAfgwAbQg6AehLgBQg5AAgugRQg5gSAAgfQABgXAageQgTAIgrAAQg3AAg0gUQgigPg1gdIhMADQgVAYgqARQgpAPglAAQgyAAg4gSIhFggIgWACQgBAhguAUQgsAWg9AAQg4AAg0gUQgzgVgfgfIg8AAQAAAegLA6QAAAKgiALQgkAPgpAAQgsAAhJgXQhMgWgmAAQg7ABgQAwQgNAwg6AAQiEAAh8hrQgQATACAYQAAAMgkAAQhvgBhEghQgwgWgTghQAFARABAmQgBAVgNAPQgPARggAAQhdAAg1gNQhXgYgdg7QhNBXgqAEQhZAKg/gPIgtgSIAAg+QgtAag7AAQgSAAgagFQgoBAh2AAQipAAhjhFQgbgTgCAEQgDADAAA5QAAAZgRAMQgVAMgugBQhAAAg9grQhBg2glgTQAAAngZAgQgcAmg0AAQg7AAgogbQgggagIglQg0AhgyAAIgFAAQh2gIgegEQhNgOgsgiQgWAvgFApQgJAThEgBQgfAAhOgjQhPglgKgiQABAHAEAIQADANAAAIQAAAfgxAbQg5AehMgBQg5AAgtgRQg5gSAAgfQAAgXAageQgSAIgrAAQg4AAgzgUQgjgPg0gdIhNADQgVAYgqARQgoAPglAAQgyAAg4gSIhGggIgVACQgCAhgtAUQgsAWg+AAQg4AAgzgUQgzgVgggfIg8AAQAAAegKA6QAAAKgiALQglAPgoAAQgsAAhKgXQhMgWgmAAQg6ABgPAwQgOAwg6AAQiEAAh8hrQgRATACAYQAAAMgjAAQhvgBhEghQgxgWgSghQAFARAAAmQAAAVgNAPQgPARghAAQhcAAg3gNQhVgYgfg7QhMBXgqAEQhYAKhAgPIgtgSIAAg+QgsAag8AAQgSAAgZgFQgnBAh4AAQiqAAhjhFQgagTgDAEQgCADAAA5QAAAZgSAMQgTAMgwgBQg+AAg+grQhCg2glgTQAAAngYAgQgdAmg0AAQg6AAgogbQgggagJglQg0AhgxAAIgGAAQh1gIgegEQhNgOgtgiQgVAvgGApQgKAThCgBQgfAAhPgjQhPglgJgiQAAAHADAIQAEANABAIQgBAfgxAbQg4AehMgBQg6AAgtgRQg4gSAAgfQAAgXAbgeQgUAIgrAAQg3AAgzgUQgjgPg1gdIhLADQgWAYgqARQgpAPgmAAQgwAAg6gSIhEggIgWACQgBAhguAUQgsAWg+AAQg3AAg1gUQgxgVghgfIg8AAQAAAegKA6QAAAKgjALQgjAPgpAAQgrAAhKgXQhMgWgmAAQg7ABgPAwQgOAwg7AAQiCAAh8hrQgSATACAYQABAMgkAAQhvgBhEghQgwgWgTghQAFARAAAmQAAAVgNAPQgPARgiAAQhbAAg2gNQhWgYgeg7QhMBXgrAEQg8AGgwgDIAAmqMElTAAAIAAG2QghgLgggXQhDg2gkgTQAAAngYAgQgdAmg0AAQg7AAgngbQghgagJglQgzAhgyAAIgFAAQh1gIgegEQhOgOgsgiQgWAvgFApQgKAThCgBQggAAhOgjQhOglgKgiQgBAHAEAIQAFANAAAIQAAAfgyAbQg5AehLgBQg6AAgtgRQg5gSABgfQgBgXAbgeQgSAIgsAAQg4AAgzgUQgigPg1gdIhMADQgVAYgqARQgqAPglAAQgwAAg6gSIhFggIgVACQgCAhgtAUQgtAWg9AAQg4AAg0gUQgygVgggfIg8AAQAAAegLA6QABAKgiALQgkAPgqAAQgrAAhKgXQhMgWglAAQg8ABgPAwQgOAwg6AAQiDAAh7hrg");
	this.shape_71.setTransform(-49.9,267.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D48749").s().p("EiSpACvIAAldMElTAAAIAAFdg");
	this.shape_72.setTransform(-49.9,275.3);

	var maskedShapeInstanceList = [this.shape_70,this.shape_71,this.shape_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(1));

	// hills
	this.instance_1 = new lib.DesertBG1_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480.5,97.8,1.675,2.192,0,0,0,743.6,129.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_11
	this.instance_2 = new lib.SkyBG_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.6,66.2,1.353,1.166,0,0,0,546.4,331.2);
	this.instance_2.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0), new cjs.BlurFilter(16, 16, 3)];
	this.instance_2.cache(-183,-81,1363,828);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, rect = new cjs.Rectangle(-479.8,-295,963,593), [rect]);


(lib.tutorialVideo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.tutorialBubble1.bubbleHit.gotoAndPlay(-1);
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndPlay(-1);
		//this.tutorialBubble2.bubbleHit.gotoAndPlay(-1);
		this.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndPlay(-1);
	}
	this.frame_89 = function() {
		this.fox.gotoAndStop(2);
	}
	this.frame_239 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_349 = function() {
		this.fox.gotoAndStop(1);
	}
	this.frame_439 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_549 = function() {
		this.fox.gotoAndStop(3);
	}
	this.frame_569 = function() {
		this.tutorialBubble1.bubbleHit.gotoAndPlay(1);
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndPlay(1);
		// שינוי צבע הבועה + קפיצת הבועה = 30 פריימים
	}
	this.frame_609 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_730 = function() {
		this.teleportFox.teleportFoxAnim.gotoAndPlay(0);
	}
	this.frame_761 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_869 = function() {
		this.fox.gotoAndStop(3);
	}
	this.frame_889 = function() {
		this.tutorialBubble2.bubbleHit.gotoAndPlay(1);
		this.tutorialBubble2.bubbleHit.bubbleColorChange.gotoAndStop(29);
		this.tutorialBubble1.bubbleHit.bubbleColorChange.gotoAndPlay(16);
		// שינוי צבע הבועה + קפיצת הבועה = 30 פריימים
	}
	this.frame_929 = function() {
		this.fox.gotoAndStop(0);
	}
	this.frame_938 = function() {
		this.vi1.vi.gotoAndPlay(0);
		this.vi2.vi.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(150).call(this.frame_239).wait(110).call(this.frame_349).wait(90).call(this.frame_439).wait(110).call(this.frame_549).wait(20).call(this.frame_569).wait(40).call(this.frame_609).wait(121).call(this.frame_730).wait(31).call(this.frame_761).wait(108).call(this.frame_869).wait(20).call(this.frame_889).wait(40).call(this.frame_929).wait(9).call(this.frame_938).wait(142));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIA7IAAhaIhBAAIAAgbIBzAAIAAAbIgTAAIAABag");
	this.shape.setTransform(70.2,-194.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_1.setTransform(60.7,-194.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARA8IgIgbQgLACgGALIgIAOIgfAAIAHgPQAOgfAfgCIAAgXQAAgLgFgGQgFgGgNAAIgJABIgCgYQAJgCANAAQAWAAAKALQALAKAAAZIAAAbIAMAug");
	this.shape_2.setTransform(52,-195);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABA8IAAgbIAeAAIAAgYQAAgWgEgKQgEgJgKAAQgKAAgGALQgHALgGAeIgHAoIghAAIAFgaQAFgXAEgKIgTg7IAcAAIAIAaQARgbAZAAQAUAAANARQANAQAAAlIAAAxg");
	this.shape_3.setTransform(39.5,-195);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZA8IAAg4QAAgVgLgIQgLgJgUAAQgRAAgTADIgCgZQASgDAZAAQAaAAAPAIQAPAHAGAMQAGAMAAAUIAAA8gAg2A8IAAg9IAgAAIAAA9g");
	this.shape_4.setTransform(25.5,-195);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEBSIAAgVQAAgJACgHQACgGAHgKIADgEQAGgIAAgMIAAgOIg/AAIAAhIIAgAAIAAAtIA/AAIAAAfQAAAQgCAHQgCAIgEAHIgGAHIgGAMQgCAEAAAGIAAAUg");
	this.shape_5.setTransform(6.2,-197.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZA8IAAg4QAAgVgLgIQgLgJgUAAQgRAAgTADIgCgZQASgDAZAAQAaAAAPAIQAPAHAGAMQAGAMAAAUIAAA8gAg2A8IAAg9IAgAAIAAA9g");
	this.shape_6.setTransform(-6.4,-195);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhCA4IAFgUQAGACAGAAQAHAAACgDQACgDAAgKIAAg4IgYACIgDgYQAdgEAgAAQAZAAAPAFQAQAEAIANQAHAMAAAWIAABAIgfAAIAAg7QAAgWgIgHQgHgHgcAAIAAA7QAAAPgCAHQgCAGgHAEQgIAFgNAAQgOAAgNgFg");
	this.shape_7.setTransform(-21.7,-195);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYA7Igpg7QgIAJgCAbIgCAXIgeAAIACgZQACgZAHgLQAGgLAKgGIgbgnIAlAAIAhAwQAJgHACgWIABgTIAdAAIgBAOQgDAZgGALQgGAJgMAIIAkAyg");
	this.shape_8.setTransform(-35.3,-194.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABA8IAAgbIAeAAIAAgYQAAgWgEgKQgEgJgKAAQgKAAgGALQgGALgHAeIgHAoIghAAIAFgaQAGgXADgKIgUg7IAdAAIAHAaQASgbAZAAQAUAAANARQANAQAAAlIAAAxg");
	this.shape_9.setTransform(-50,-195);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZA8IAAg4QAAgVgLgIQgLgJgUAAQgRAAgTADIgCgZQASgDAZAAQAaAAAPAIQAPAHAGAMQAGAMAAAUIAAA8gAg2A8IAAg9IAgAAIAAA9g");
	this.shape_10.setTransform(-63.9,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1080));

	// text
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5AxIADgSQAGACAFAAQAGAAACgDQACgDAAgHIAAgxIgVACIgCgWQAZgDAbAAQAWAAAOAEQANAEAHALQAGAKABAUIAAA3IgcAAIAAgzQAAgSgGgHQgHgGgYAAIAAAzQAAANgCAGQgCAFgGAEQgHAEgLAAQgNAAgKgEg");
	this.shape_11.setTransform(42.9,151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaA0IAAgXIAbAAIAAgmQAAgLgEgFQgFgEgKAAIgIABIgCgVQAIgDAMAAQASABAKAJQAJAKAAAVIAAA/g");
	this.shape_12.setTransform(32.5,150.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNA0IAAhnIAbAAIAABng");
	this.shape_13.setTransform(26.2,151);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwAlIAbgFIgShaIAcAAIANBRQALgDAEgIQADgHAAgPIABgwIAcAAIgCAkQAAARgCAIQgBAJgEAJQgEAJgKAGQgJAHgRAGQgTAHgZADg");
	this.shape_14.setTransform(17.6,151.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAGAKQAFAKAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_15.setTransform(6.5,150.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAA5g");
	this.shape_16.setTransform(-8,148.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgHQgDgJgJABQgJgBgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgKIgRgyIAYAAIAHAWQAPgXAVgBQASAAALAPQALAPAAAfIAAArg");
	this.shape_17.setTransform(-17.3,150.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAA5g");
	this.shape_18.setTransform(-26,148.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaA0IAAgXIAbAAIAAgmQAAgLgEgFQgFgEgKAAIgIABIgCgVQAIgDAMAAQASABAKAJQAJAKAAAVIAAA/g");
	this.shape_19.setTransform(-32.8,150.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAFAKQAGAKAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_20.setTransform(-42.6,150.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag5AxIADgSQAHACAEAAQAGAAACgDQACgDAAgHIAAgxIgVACIgCgWQAZgDAbAAQAWAAAOAEQANAEAHALQAHAKAAAUIAAA3IgcAAIAAgzQAAgSgGgHQgHgGgXAAIAAAzQgBANgCAGQgCAFgGAEQgHAEgLAAQgMAAgLgEg");
	this.shape_21.setTransform(51.6,151);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgJgGQgKgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAWABANAGQANAIAFAKQAGAKAAARIAAA0gAgvA0IAAg1IAcAAIAAA1g");
	this.shape_22.setTransform(15.1,150.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtAjQgQgRAAgjIgBgjIAbAAIAAAbIABAQIAAAGQAHAAAFgDQAFgDACgGQABgFABgOIABgSIAaAAIgCAZQgBAKgBAGQgBAFgEAGQgEAFgIAEQgJADgOACQACAIAIAFQAJAFAJAAQAQAAAJgKQAIgKACgaIADgmIAbAAIgDAnQgDAYgFAMQgGANgOAIQgNAJgVAAQgbAAgQgSg");
	this.shape_23.setTransform(-3.7,151.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVA0IgkgzQgGAGgCAYIgCAVIgaAAIACgWQACgXAFgIQAGgKAJgFIgZgjIAhAAIAdArQAHgGACgUIABgRIAaAAIgCANQgCAWgFAJQgGAIgJAHIAfAsg");
	this.shape_24.setTransform(-29,151);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgGIAHgNIADgFQAFgGAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAaQAAAOgBAHQgBAHgEAFIgFAHIgFAKQgCAEAAAFIAAARg");
	this.shape_25.setTransform(-40.3,149);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgGQgJgIgSAAQgOAAgRACIgCgVQAQgEAWAAQAXABAMAGQANAIAFAKQAGAKAAARIAAA0gAgvA0IAAg1IAcAAIAAA1g");
	this.shape_26.setTransform(-51.2,150.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgtBIIAAhdIAcAAIAABdgAAAAgIAAgTQAAgIACgFQADgFAFgIIADgEQAGgHAAgKIAAgNIhAAAIAAgYIBbAAIAAAbQAAAOgBAHQgCAHgEAGIgEAGQgFAGgBAEIgBAJIAAARg");
	this.shape_27.setTransform(20.7,153);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxAvIAFgSQAPAFAOAAQAQAAAKgIQAKgKAAgQQAAgPgIgKQgIgJgOAAIgMABIAAAMQAAAPAMAAIADgBIAFAQQgHADgIAAQgIAAgGgCQgHgDgFgHQgEgGAAgRIAAgZQASgEATAAQAaAAARAOQAQAOAAAXQAAAZgSAPQgRAPgcAAQgSAAgSgHg");
	this.shape_28.setTransform(9.1,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnA0IAAgYIAtAAIgzhPIAeAAIAZAoQAFgBABgEQACgDAAgPIABgRIAbAAIgBAQIgBAJIgBAJIgEAJQgDAFgFADQgEADgGADIAVAiIAAAMg");
	this.shape_29.setTransform(-7.9,151);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgIQgDgHgJgBQgJAAgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgJIgRgzIAYAAIAHAWQAPgXAVAAQASAAALAOQALAPAAAgIAAAqg");
	this.shape_30.setTransform(79.9,153.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwAlIAbgFIgShbIAcAAIANBTQALgFAEgHQADgIAAgNIABgyIAcAAIgCAlQAAASgCAHQgBAJgEAIQgEAKgKAGQgJAHgRAGQgTAGgZAFg");
	this.shape_31.setTransform(68,154.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgyA0IAAgXIA4AAIAAgbQAAgRgHgHQgGgHgTAAQgKAAgNACIgCgVQAPgEAQABQAbAAANALQANAMAAAZIAAAgIATAAIAAAXg");
	this.shape_32.setTransform(57.4,153.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARA0IAAgyQAAgQgJgHQgIgIgRAAQgJAAgPACIgCgVQAOgEATABQAaAAAOALQAOAMAAAZIAAA3g");
	this.shape_33.setTransform(46,153.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgFIAHgPIADgDQAFgHAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAbQAAANgBAHQgBAHgEAGIgFAGIgFAKQgCADAAAGIAAARg");
	this.shape_34.setTransform(30.5,152);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AABA0IAAgXIAaAAIAAgVQAAgUgEgIQgDgHgJgBQgJAAgFAKQgFAKgFAZIgHAjIgdAAIAFgWQAEgUAEgJIgRgzIAYAAIAHAWQAPgXAVAAQASAAALAOQALAPAAAgIAAAqg");
	this.shape_35.setTransform(19.1,153.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgtAjQgQgRAAgjIgBgjIAbAAIAAAbIABAQIAAAGQAHAAAFgDQAFgDABgGQACgFABgOIABgSIAaAAIgCAZQAAAKgCAGQgBAFgEAGQgFAFgHAEQgJADgOACQACAIAJAFQAHAFAKAAQAQAAAJgKQAIgKADgaIACgmIAbAAIgDAnQgCAYgGAMQgGANgNAIQgPAJgTAAQgcAAgQgSg");
	this.shape_36.setTransform(6,154.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcAuQgNgJgEgMQgFgMAAgTIAAgtIAbAAIAAAzQAAARAIAHQAGAHAKAAQAKAAAHgGQAGgHAAgMIAAgJQAAgRgEgEQgDgFgFAAQgHAAgFAJIgIgPQAJgSATAAQAKAAAIAGQAGAGAEAKQADAJAAASQAAARgEAMQgEAMgMAJQgMAIgSAAQgRAAgMgIg");
	this.shape_37.setTransform(-7.4,154);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVA0IAAg1QAAgNgGgIQgGgHgOAAIgPABIAABQIgcAAIAAhkQATgEAUABQAXgBAMAHQANAGAEAKQAGAKAAAQIAAA3g");
	this.shape_38.setTransform(-19.9,153.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgHQgJgHgSAAQgOAAgRACIgCgWQAQgCAWAAQAWAAANAGQANAIAGAJQAFALAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_39.setTransform(-37.7,153.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgwAlIAbgFIgShbIAcAAIANBTQALgFAEgHQADgIAAgNIABgyIAcAAIgCAlQAAASgCAHQgBAJgEAIQgEAKgKAGQgJAHgRAGQgTAGgZAFg");
	this.shape_40.setTransform(-49.8,154.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDBHIAAgSQAAgIACgFIAHgPIADgDQAFgHAAgKIAAgNIg2AAIAAg/IAbAAIAAAoIA2AAIAAAbQAAANgBAHQgBAHgEAGIgFAGIgFAKQgCADAAAGIAAARg");
	this.shape_41.setTransform(-59.9,152);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_42.setTransform(-78.3,156);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgtBIIAAhdIAcAAIAABdgAABAgIAAgTQAAgIACgFQABgFAHgIIACgEQAFgHABgKIAAgNIhAAAIAAgYIBbAAIAAAbQAAAOgBAHQgCAHgEAGIgEAGQgFAGgBAEIgBAJIAAARg");
	this.shape_43.setTransform(21.7,156);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgxAvIAFgTQAPAGAOAAQAQAAAKgIQAKgJAAgRQAAgQgIgJQgIgJgOAAIgMABIAAAMQAAAOAMAAIADAAIAFAQQgHADgIAAQgIAAgGgDQgHgDgFgGQgEgGAAgRIAAgYQASgGATAAQAaAAARAPQAQAOAAAXQAAAZgSAPQgRAOgcABQgSgBgSgGg");
	this.shape_44.setTransform(10.1,154);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWA0IAAgwQAAgTgKgHQgJgHgSAAQgOAAgRACIgCgWQAQgCAWAAQAXAAAMAGQANAIAGAJQAFALAAARIAAA0gAguA0IAAg1IAbAAIAAA1g");
	this.shape_45.setTransform(-17.7,153.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20,p:{x:-42.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-17.3}},{t:this.shape_16,p:{x:-8,y:148.7}},{t:this.shape_15},{t:this.shape_14,p:{x:17.6}},{t:this.shape_13,p:{x:26.2,y:151}},{t:this.shape_12,p:{x:32.5}},{t:this.shape_11}]},44).to({state:[]},215).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_17,p:{x:-17.5}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_14,p:{x:26.2}},{t:this.shape_13,p:{x:34.8,y:151}},{t:this.shape_12,p:{x:41.2}},{t:this.shape_21}]},45).to({state:[]},155).to({state:[{t:this.shape_20,p:{x:-18.7}},{t:this.shape_29,p:{x:-7.9,y:151}},{t:this.shape_16,p:{x:0.4,y:148.7}},{t:this.shape_28},{t:this.shape_27}]},45).to({state:[]},135).to({state:[{t:this.shape_42},{t:this.shape_13,p:{x:-72.8,y:154}},{t:this.shape_16,p:{x:-67.4,y:151.7}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},45).to({state:[]},95).to({state:[{t:this.shape_45},{t:this.shape_29,p:{x:-6.9,y:154}},{t:this.shape_16,p:{x:1.4,y:151.7}},{t:this.shape_44},{t:this.shape_43}]},45).to({state:[]},125).wait(131));

	// Layer_15
	this.instance = new lib.tutorialPressKey_mc();
	this.instance.parent = this;
	this.instance.setTransform(43.4,222,1,1,0,0,0,19.1,18.8);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({_off:true},215).wait(45).to({_off:false,x:-39.7,y:222.1},0).to({_off:true},155).wait(45).to({_off:false,regX:-0.3,regY:0,scaleX:4.53,x:-85.6,y:248.5},0).to({_off:true},135).wait(45).to({_off:false,regX:19.1,regY:18.8,scaleX:1,x:1.7,y:182.3},0).to({_off:true},95).wait(45).to({_off:false,regX:-0.3,regY:0,scaleX:4.53,x:-85.6,y:248.5},0).to({_off:true},125).wait(131));

	// keyboard
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASAlIiAAAIAAhPICAAAIAAgwIBdBaIhdBbg");
	this.shape_46.setTransform(42.9,222.3);

	this.instance_1 = new lib.tutorial_keyboardKey_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.9,222.8,1.997,1.997,0,0,0,9.7,9.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhaAUIA2AAIAAiEIBOAAIAACEIAxAAIhbBdg");
	this.shape_47.setTransform(3,222.6);

	this.instance_2 = new lib.tutorial_keyboardKey_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.9,222.8,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgpBxIAAiEIgxAAIBahdIBbBdIg2AAIAACEg");
	this.shape_48.setTransform(2.7,181.2);

	this.instance_3 = new lib.tutorial_keyboardKey_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.9,182.5,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhxAAIBehbIAAAyICEAAIAABPIiEAAIAAA2g");
	this.shape_49.setTransform(-39.3,222.1);

	this.instance_4 = new lib.tutorial_keyboardKey_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38.5,222.8,1.997,1.997,0,0,0,9.5,9.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AqkAEIAAgHIVJAAIAAAHg");
	this.shape_50.setTransform(-2.2,274.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ABtAtIAAhFIgvAAIAAgUIA7AAQAGAAACAFIABAOIAABGgAAbAtIAAhFIgMAAIAAgUIAbAAQADAAACADIABAFIAABRgAgVAtIAAhFIgMAAIAAgUIAbAAQADAAACADIABAFIAABRgAhHAtIAAhFIglAAIAABFIgVAAIAAg4IAHgNIgHAAIAAgUIBGAAQAJAAAAAIIAABRg");
	this.shape_51.setTransform(1,264.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7F2F2").s().p("AqYCnQhCAAgvgKQgvgKgFihQgChfACgVQgDgSA1gKQA2gLA9AFIU3AAQBAAAAyAOQAuANAAAOIAAEAQAAAOguAKQgvAKhDAAg");
	this.shape_52.setTransform(0.3,265.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E9E9E8").s().p("AqdCuQhDAAgvgKQgvgKAAgNIAAkPQAAgPAvgOQAygPBAAAIU7AAQBAAAAyAPQAvAOAAAPIAAENQAAAPgvAKQgvAKhDAAg");
	this.shape_53.setTransform(0.7,266.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("Aq9C4Qg8AAgsgJQgqgKAAgNIAAkvQAAgOAqgJQAsgJA8AAIWLAAQAtAAAkAFIAWAEQARAEAKBFIAADOQgKBCgRAEQgrAJg8AAg");
	this.shape_54.setTransform(2.7,267.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_4},{t:this.shape_49},{t:this.instance_3},{t:this.shape_48},{t:this.instance_2},{t:this.shape_47},{t:this.instance_1},{t:this.shape_46}]}).wait(1080));

	// fox
	this.fox = new lib.tutorialFox_mc();
	this.fox.name = "fox";
	this.fox.parent = this;
	this.fox.setTransform(-62.6,127.2,0.439,0.439,0,0,0,21.9,102.2);

	this.timeline.addTween(cjs.Tween.get(this.fox).wait(89).to({x:63.9},150).wait(110).to({x:-1.8},90).wait(110).to({x:-0.4,y:64.5},30).to({x:-1.8,y:127.2},30).to({_off:true},121).wait(30).to({_off:false,y:-16.4},0).wait(109).to({x:-0.4,y:-77.7},30).to({x:-1.8,y:-16.4},30).wait(151));

	// teleportFox
	this.teleportFox = new lib.tutorial_TeleportFox_mc();
	this.teleportFox.name = "teleportFox";
	this.teleportFox.parent = this;
	this.teleportFox.setTransform(-1.8,107.8,0.373,0.373,0,0,0,-2.1,21.7);
	this.teleportFox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.teleportFox).wait(729).to({_off:false},0).to({_off:true},31).wait(320));

	// vi
	this.vi2 = new lib.tutorial_vi_mc();
	this.vi2.name = "vi2";
	this.vi2.parent = this;
	this.vi2.setTransform(-0.4,-110,1,1,0,0,0,0.3,0.8);

	this.vi1 = new lib.tutorial_vi_mc();
	this.vi1.name = "vi1";
	this.vi1.parent = this;
	this.vi1.setTransform(-0.4,34.4,1,1,0,0,0,0.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.vi1},{t:this.vi2}]},938).wait(142));

	// bubble1
	this.tutorialBubble1 = new lib.tutorialBubble1_mc();
	this.tutorialBubble1.name = "tutorialBubble1";
	this.tutorialBubble1.parent = this;
	this.tutorialBubble1.setTransform(-0.5,32.9,0.507,0.507,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.tutorialBubble1).wait(938).to({alpha:0},50).wait(92));

	// bubble2
	this.tutorialBubble2 = new lib.tutorialBubble2_mc();
	this.tutorialBubble2.name = "tutorialBubble2";
	this.tutorialBubble2.parent = this;
	this.tutorialBubble2.setTransform(-0.5,-110,0.506,0.506,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.tutorialBubble2).wait(938).to({alpha:0},50).wait(92));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au/YtMAAAgxZId/AAMAAAAxZg");
	mask.setTransform(2.7,-19.8);

	// bubbleContent
	this.text = new cjs.Text("מכונית", "13px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(89.2,-118);

	this.text_1 = new cjs.Text("טלויזיה", "13px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(-91.1,25);

	this.instance_5 = new lib.tutorial_magnifyingGlassBubble_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-90.1,-135.6,0.495,0.495,0,0,0,1.2,-4);

	this.instance_6 = new lib.tutorial_magnifyingGlassBubble_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.9,7.4,0.495,0.495,0,0,0,1.2,-4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgJChIgKhxIhWBKIgPgPIBJhXIhygIIAAgVIBygKIhKhWIAPgPIBXBJIAIhyIAVAAIAKByIBWhKIAPAPIhJBXIBxAIIAAAVIhxAKIBKBWIgPAQIhXhKIgIBxgAgXgJIAAAUIAOANIAUAAIANgOIAAgTIgOgOIgUAAg");
	this.shape_55.setTransform(-109.2,-103.5,0.197,0.197);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#606266").s().p("AgkAmQgPgQAAgWQAAgUAPgQQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgVABgPgPg");
	this.shape_56.setTransform(-109.2,-103.5,0.197,0.197);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A4C50").s().p("AhpBrQgsgrgBg/QAAg9AsgtQAsgsA+AAQA+gBAsAsQAsAsABA+QAAA9gsAtQgsAsg+AAIgBABQg9AAgsgsg");
	this.shape_57.setTransform(-109,-103.6,0.197,0.197);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ah3B6QgygzgBhGQAAhGAygyQAxgzBHAAQBGgBAzAyQAxAzABBGQAABGgxAzQgzAyhGAAIgBAAQhFAAgygxg");
	this.shape_58.setTransform(-109,-103.6,0.197,0.197);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#313133").s().p("AiRCTQg8g9gBhVQAAhUA8g+QA8g8BWAAQBVgBA8A8QA9A9AABVQABBUg8A+Qg8A8hWAAIgBABQhUAAg9g8gAAAiVQg+AAgsAsQgsAtAAA9QABA+AsAsQAtAsA8gBQA/AAAsgsQAsgsAAg+QAAg+gtgsQgsgsg9AAIgBABg");
	this.shape_59.setTransform(-109,-103.6,0.197,0.197);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJChIgKhxIhWBKIgPgPIBJhXIhxgIIgBgVIBygKIhKhWIAPgPIBXBJIAIhyIAVAAIAJByIBXhKIAPAPIhKBXIByAIIABAVIhyAKIBKBWIgPAQIhXhKIgIBxgAgYgJIAAAUIAPANIATAAIAPgOIgBgTIgOgOIgTAAg");
	this.shape_60.setTransform(-72.9,-103.5,0.197,0.197);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#606266").s().p("AgkAmQgPgQAAgWQgBgUAQgQQAPgPAVAAQAVAAAQAPQAPAPAAAVQABAVgQAQQgPAPgWAAQgUABgQgPg");
	this.shape_61.setTransform(-72.9,-103.5,0.197,0.197);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4A4C50").s().p("AhpBrQgsgsgBg+QAAg9AsgtQAsgsA+AAQA+gBAsAsQAsAsABA+QAAA+gsAsQgsAsg+AAIgBABQg9AAgsgsg");
	this.shape_62.setTransform(-72.8,-103.6,0.197,0.197);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ah3B6QgygzgBhGQAAhGAygyQAxgzBHAAQBGgBAyAyQAyAzABBGQAABGgyAzQgxAyhHAAIgBAAQhFAAgygxg");
	this.shape_63.setTransform(-72.8,-103.6,0.197,0.197);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#313133").s().p("AiQCTQg9g9gBhVQAAhUA8g+QA8g8BWAAQBUgBA9A8QA9A9ABBVQAABUg8A+Qg8A8hWAAIgBABQhUAAg8g8gAAAiVQg+AAgsAsQgsAtABA9QAAA+AsAsQAtAsA9gBQA+AAAsgsQAsgsAAg+QgBg+gsgsQgsgsg9AAIgBABg");
	this.shape_64.setTransform(-72.8,-103.6,0.197,0.197);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4F433B").s().p("AhVADQAAgFAEgFQAEgFAFAAICRgBQAGABADAEQAEAFAAAGIAAAKIirAAg");
	this.shape_65.setTransform(-100.1,-112.9,0.197,0.197);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4F433B").s().p("AhVAEQAAgGAEgFQADgFAFAAICSAAQAFgBAEAFQAEAFAAAFIAAALIirABg");
	this.shape_66.setTransform(-94.2,-113,0.197,0.197);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACBWQhGgjggg0QgagsAJgdQALghA2AFQBEAjAiAfQAtAoAZBCQgUAigkAAQgbAAgjgSg");
	this.shape_67.setTransform(-68.4,-110.9,0.197,0.197);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E88951").s().p("AgrgSIALgkQBnAfgkAqQgLANgYANIgUAKQgcgfAFgqg");
	this.shape_68.setTransform(-84,-115,0.197,0.197);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3A3A3B").s().p("AAACeIAVk7QBiAABHADQDTAHCcCAQBeBLA5BmgArDCeQASh0AOgtQAghnA1gEQA/gYDigNQCDgHClgDIgiE7g");
	this.shape_69.setTransform(-96,-117.6,0.197,0.197);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AC212A").s().p("Az0DCIgbivQAQgEAtgEQAfhkBRg7QBKg3BggGQCQgIBhB8QBIBdAXB8ISGgGQAbiaBXhWQBPhOBvgIQBqgHBkA6QBnA8A8BsIBRAIIgPCfIgcAIQg7ASgeAAQAEhNgghNQg/iYiyACQipgGhDCNQgUAsgIA2QgEAaAAASI0nAAQAGhIgghIQhBiNjDAIQijAGgwCYQgXBNAJBLg");
	this.shape_70.setTransform(-90.3,-106.4,0.197,0.197);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DF3F32").s().p("AzYHrQgnjwgIhKQAHgNAHgSQANglAAgdQAQhTAfhkQA+jIBMhQQAJgQglgQQgjgPAHgLQDTgiETgRQImgiFBBVIg/APIAlAQQAtAXAsAdQCLBfBDCDID5gbQDsA1BRAnQChBMAvCeIgDDMIAWAWIgFBNIgcAIQg7ASgfAAQAEhNgfhNQhAiZiyACQipgGhCCOQgVAsgIA2QgEAaAAASI0nAAQAHhIghhIQhBiOjCAIQikAGgvCZQgYBNAJBLg");
	this.shape_71.setTransform(-90.3,-112.1,0.197,0.197);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#AA332B","#CD492B","#AD4527","#C35433","#DD6546","#DF5A36","#DD4A29","#AB4721","#AB4721"],[0,0.129,0.212,0.329,0.459,0.62,0.91,1,1],-8.2,0,8.7,0).s().p("AgdgMQAphyAYACIAPAIQAVBHg5BcQgbAughAhQgbgXArhzg");
	this.shape_72.setTransform(-113.9,-114.4,0.197,0.197);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3A3A3B").s().p("AjBhOQgpgagngOIgegKIAegTIA/gPQDdBGCpB3QBUA8AoAuIj+AeQhvigiEhRg");
	this.shape_73.setTransform(-81.7,-117.6,0.197,0.197);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3A3A3B").s().p("AzDDWIA+lgIFvg6IUUgGIEqgLIFDCHIBZEgIhAAEg");
	this.shape_74.setTransform(-90.3,-106.7,0.197,0.197);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C6C6C6").s().p("AASBAIgLgNIgRgNIgTgUIAAgSIgGgWIAHgpIA0BHIgVgQIAHAUIALAIIAIAMIAAANIgFAAIAMAIIAAAHIgCAEg");
	this.shape_75.setTransform(-69.5,-110.9,0.197,0.197);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#657F88","#35535B","#133236"],[0,0.529,1],-4.1,0,11.4,0).s().p("AgOAoQg6g5AmhDIAkAzQAmA8AKA6QgkgQgcgdg");
	this.shape_76.setTransform(-69.3,-110.8,0.197,0.197);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CA2332").s().p("AjPSXMAAAgktIGgAAMAAAAktg");
	this.shape_77.setTransform(94,34.5,0.084,0.084);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A33B85").s().p("AjQSXMAAAgktIGhAAMAAAAktg");
	this.shape_78.setTransform(90.4,34.5,0.084,0.084);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2C8400").s().p("AjQSXMAAAgktIGgAAMAAAAktg");
	this.shape_79.setTransform(86.9,34.5,0.084,0.084);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4BB3E1").s().p("AjQSXMAAAgktIGhAAMAAAAktg");
	this.shape_80.setTransform(83.4,34.5,0.084,0.084);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3A400").s().p("AjPSXMAAAgktIGfAAMAAAAktg");
	this.shape_81.setTransform(79.9,34.5,0.084,0.084);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#243071").s().p("AjgSXMAAAgktIDDAAQBoAABLBNQBLBMgBBtIAActQABBrhLBJQhJBGhqAAg");
	this.shape_82.setTransform(97.1,34.5,0.084,0.084);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCFCC").s().p("AyTSXQhrAAhKhGQhKhJAAhrIAA8tQAAhtBKhMQBLhNBqAAMAknAAAQBqAABLBNQBKBMAABtIAActQAABrhKBJQhKBGhrAAg");
	this.shape_83.setTransform(87,34.5,0.084,0.084);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#151716").s().p("AywS6QhsAAhMhPQhNhOAAhwIAA9ZQAAhvBNhPQBMhPBsAAMAlhAAAQBsAABMBPQBNBPAABvIAAdZQAABwhNBOQhMBPhsAAg");
	this.shape_84.setTransform(87,34.5,0.084,0.084);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#151716","#252625","#414241"],[0,0.427,1],0,-125.1,0,128.8).s().p("AzhTrQhxAAhPhSQhQhRAAh0IAA+nQAAhzBQhTQBPhSBxAAMAnDAAAQBxAABPBSQBQBTAABzIAAenQAAB0hQBRQhPBShxAAg");
	this.shape_85.setTransform(87,34.5,0.084,0.084);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#FAFAFA","#8D8D8D"],[0.004,1],-19.3,-13.3,21.5,14.8).s().p("Ai3hOIAshAIFDDeIgsBAg");
	this.shape_86.setTransform(104.6,31.9,0.084,0.084);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A7420C").s().p("AhPB0QgxgggKg6QgLg5AhgxQAigvA5gLQA5gLAwAhQAxAiAKA5QALA5ghAwQgiAwg5ALQgPADgMAAQgqAAgkgag");
	this.shape_87.setTransform(104.7,32,0.084,0.084);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#646464").s().p("Ah2CtQhIgxgQhWQgQhVAxhHQAyhIBWgQQBVgQBHAyQBIAxAQBWQAQBVgxBHQgyBIhVAQQgVAEgUAAQg+AAg2gmg");
	this.shape_88.setTransform(104.7,32,0.084,0.084);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],-13.8,20.2,13.9,-20.1).s().p("AiKDKQhUg6gShkQgThjA6hTQA5hUBkgSQBjgSBUA5QBUA5ASBkQASBkg5BTQg5BThlATQgYAFgWAAQhJAAg/gsg");
	this.shape_89.setTransform(104.7,32,0.084,0.084);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#FAFAFA","#8D8D8D"],[0.004,1],-8.6,-20.4,9.6,22.8).s().p("AhpidIBDgcICQFXIhEAcg");
	this.shape_90.setTransform(104.6,27.3,0.084,0.084);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DD8C45").s().p("AgxB8Qg0gVgVgzQgWgzAVgzQAVgzAzgWQAzgVAzAVQAzAVAWAzQAVAzgVAyQgVA0gzAVQgaAMgaAAQgYAAgZgLg");
	this.shape_91.setTransform(104.5,27.4,0.084,0.084);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#646464").s().p("AhKC5QhMggghhMQgghMAghLQAfhNBMggQBMggBLAfQBNAfAgBMQAgBMgfBMQgfBNhMAgQgnAQgnAAQgkAAgmgPg");
	this.shape_92.setTransform(104.5,27.4,0.084,0.084);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],-21.4,9,21.4,-9).s().p("AhWDXQhZgkgmhZQglhZAkhYQAkhZBZglQBZglBYAkQBZAkAlBZQAlBYgkBYQgkBZhZAmQgtATgtAAQgrAAgrgSg");
	this.shape_93.setTransform(104.5,27.4,0.084,0.084);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],-33.1,0,33.1,0).s().p("Aj5StQghAAgYgYQgYgXAAgiMAAAgi3QAAgiAYgXQAYgYAhAAIHzAAQAhAAAYAYQAYAXAAAiMAAAAi3QAAAigYAXQgYAYghAAgAkpyLQgUAUAAAcMAAAAi3QAAAcAUAUQAUAUAcAAIHzAAQAcAAAUgUQAUgUAAgcMAAAgi3QAAgcgUgUQgUgUgcAAInzAAQgcAAgUAUg");
	this.shape_94.setTransform(104.4,34.7,0.084,0.084);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-3,0,3.1).s().p("AjpAfIAAg8IHTAAIAAA8g");
	this.shape_95.setTransform(104.6,43.6,0.084,0.084);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#191615").s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_96.setTransform(104.6,42.7,0.084,0.084);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2.1).s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_97.setTransform(104.6,42,0.084,0.084);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#191615").s().p("AjpAVIAAgpIHTAAIAAApg");
	this.shape_98.setTransform(104.6,41.3,0.084,0.084);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2.1).s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_99.setTransform(104.6,40.6,0.084,0.084);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#191615").s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_100.setTransform(104.6,40,0.084,0.084);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2.1).s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_101.setTransform(104.6,39.3,0.084,0.084);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#191615").s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_102.setTransform(104.6,38.6,0.084,0.084);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2.1).s().p("AjpAVIAAgpIHTAAIAAApg");
	this.shape_103.setTransform(104.6,38,0.084,0.084);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2).s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_104.setTransform(104.6,37.3,0.084,0.084);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#191615").s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_105.setTransform(104.6,36.6,0.084,0.084);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-2,0,2.1).s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_106.setTransform(104.6,35.9,0.084,0.084);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#191615").s().p("AjpAUIAAgnIHTAAIAAAng");
	this.shape_107.setTransform(104.6,35.3,0.084,0.084);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#464746","#8D8D8D"],[0,0.996],0,156.1,0,-143.2).s().p("A+UWYQhGAAgygzQgygyAAhFMAAAgnbQAAhGAygyQAygyBGABMA8pAAAQBGgBAyAyQAyAyAABGMAAAAnbQAABFgyAyQgyAzhGAAg");
	this.shape_108.setTransform(91,34.6,0.084,0.084);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#FAFAFA","#8D8D8D"],[0.004,1],0,-161.8,0,155.1).s().p("A+UXFQhZAAg/g/Qg/g/AAhZMAAAgnaQAAhZA/hAQA/g/BZAAMA8pAAAQBZAAA/A/QA/BAAABZMAAAAnaQAABZg/A/Qg/A/hZAAg");
	this.shape_109.setTransform(91,34.6,0.084,0.084);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#DB8D4C","#AA4B13"],[0,1],0,-191.3,0,222.6).s().p("A+5YHQhrAAhLhLQhMhMAAhrMAAAgoJQAAhrBMhMQBLhLBrAAMA9zAAAQBrAABLBLQBMBMAABrMAAAAoJQAABrhMBMQhLBLhrAAg");
	this.shape_110.setTransform(91,34.6,0.084,0.084);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#67270C").s().p("A6lCBQg2AAgmgmQglglAAg2QAAg1AlglQAmgmA2AAMA1LAAAQA2AAAmAmQAlAlAAA1QAAA2glAlQgmAmg2AAg");
	this.shape_111.setTransform(91,47.3,0.084,0.084);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,-21.1,0,31.4).s().p("AgUDbIh1m1IDfAAIA0G1g");
	this.shape_112.setTransform(102.4,49.4,0.084,0.084);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#2A2C2B","#1C1D1C"],[0,1],0,31.4,0,-21.1).s().p("AiJDbIA0m1IDfAAIh1G1g");
	this.shape_113.setTransform(79.5,49.4,0.084,0.084);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#D2D2D2","#8D8D8D"],[0,1],-5.6,-3.1,5.7,3.1).s().p("Ah3BUIB+jlIBxA+Ih+Dlg");
	this.shape_114.setTransform(89.2,13.2,0.084,0.084);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#D2D2D2","#8D8D8D"],[0,1],-5.3,3.6,5.4,-3.5).s().p("Ah9hJIBrhHICQDaIhrBHg");
	this.shape_115.setTransform(74.9,14.8,0.084,0.084);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#646464").s().p("AmUJCIL7y7IAuAbIrBTZg");
	this.shape_116.setTransform(85.6,19.2,0.084,0.084);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#646464").s().p("AlWnuIANgbIKgPbIhoA4g");
	this.shape_117.setTransform(77.3,18.3,0.084,0.084);

	var maskedShapeInstanceList = [this.text,this.text_1,this.instance_5,this.instance_6,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance_6},{t:this.instance_5},{t:this.text_1},{t:this.text}]}).wait(1080));

	// bubble
	this.instance_7 = new lib.tutorial_bubbleHitColor_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-90.4,32.9,0.506,0.506,0,0,0,62.3,62.3);

	this.instance_8 = new lib.tutorial_bubbleHitColor_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-90.4,-109.9,0.506,0.506,0,0,0,62.3,62.3);

	this.instance_9 = new lib.tutorial_bubbleHitColor_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(90.7,32.9,0.506,0.506,0,0,0,62.3,62.3);

	this.instance_10 = new lib.tutorial_bubbleHitColor_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(89.9,-109.9,0.506,0.506,0,0,0,62.3,62.3);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1080));

	// bg
	this.instance_11 = new lib.tutorialBG_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-273.7,-197,0.569,0.569,0,0,0,-479.9,-295.1);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1080));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.3,-211.8,192,497.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tutorialAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var playing = true;
		root.pause.addEventListener("click", pauseFunction);
		
		function pauseFunction()
		{
			if(playing == true)
			{
				playing = false;
				root.pause.switchSym.gotoAndStop(1);
				root.anim.stop();
				
				// עצירה של אנימציית ההליכה
				root.anim.fox.foxWalking.stop();
				root.anim.fox.foxBall.stop();
				root.anim.fox.foxWalking.foxMove.legAbove.stop();
				root.anim.fox.foxWalking.foxMove.legUnder.stop();
				root.anim.fox.foxWalking.foxMove.upperBody.stop();
				root.anim.fox.foxWalking.foxMove.upperBody.tail.stop();
				root.anim.fox.foxWalking.foxMove.legAbove.ikNode_44.stop();
				root.anim.fox.foxWalking.foxMove.legAbove.ikNode_46.stop();
				root.anim.fox.foxWalking.foxMove.legUnder.ikNode_36.stop();
				root.anim.fox.foxWalking.foxMove.legUnder.ikNode_44.stop();
			}
			else
			{
				playing = true;
				root.pause.switchSym.gotoAndStop(0);
				root.anim.play();
				
				// המשך של אנימציית ההליכה
				root.anim.fox.foxWalking.play();
				root.anim.fox.foxBall.play();
				root.anim.fox.foxWalking.foxMove.legAbove.play();
				root.anim.fox.foxWalking.foxMove.legUnder.play();
				root.anim.fox.foxWalking.foxMove.upperBody.play();
				root.anim.fox.foxWalking.foxMove.upperBody.tail.play();
				root.anim.fox.foxWalking.foxMove.legAbove.ikNode_44.play();
				root.anim.fox.foxWalking.foxMove.legAbove.ikNode_46.play();
				root.anim.fox.foxWalking.foxMove.legUnder.ikNode_36.play();
				root.anim.fox.foxWalking.foxMove.legUnder.ikNode_44.play();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.tutorialClose = new lib.tutorialClose_btn();
	this.tutorialClose.name = "tutorialClose";
	this.tutorialClose.parent = this;
	this.tutorialClose.setTransform(-67.4,-227.1,1,1,0,0,0,4.9,4.9);
	new cjs.ButtonHelper(this.tutorialClose, 0, 1, 2, false, new lib.tutorialClose_btn(), 3);

	this.pause = new lib.tutorialPause_btn();
	this.pause.name = "pause";
	this.pause.parent = this;
	this.pause.setTransform(-67.4,-192.7,1,1,0,0,0,4.9,5.8);
	new cjs.ButtonHelper(this.pause, 0, 1, 2, false, new lib.tutorialPause_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pause},{t:this.tutorialClose}]}).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgR/gonMAj/AAAMAAABRPI+aAAMAAAhGHIllAAg");
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
	this.shape_1.graphics.f("#F2D4B1").s().p("EgPNAjCMAAAhGDIeaAAMAAABGDg");
	this.shape_1.setTransform(49.7,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiyFkIAArHIFkAAIAALHg");
	this.shape_2.setTransform(-65.5,-207.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBDBDB").s().p("AvNFtIAAgRIAArHIeaAAIAALYg");
	this.shape_3.setTransform(49.7,-206.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialAnimation, rect = new cjs.Rectangle(-575.2,-313.5,1112,603), [rect]);


// stage content:
(lib.Development = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var stageWidth = 960; // רוחב במת המשחק !
		var stageHeight = 590; // אורך בנת המשחק !
		var firstEnterToWeb = true; // מאשר שזו כניסה ראשונה לאתר המשחק - מתעדכן בהמשך
		
		// ---------------------------------------------------------------------------------------------------------------
		var bubbleListPositions = [0, 0, 357, 148.85]; // [x start, y start, x distance, y distance] // מיקום זוגות הבועות
		var duoBubblePositions = [62.1, 62.55, 215.35, 62.55]; // [x1, y1, x2, y2] // מיקום הבועות בתוך מוביקליפ של זוגות
		var listPosition = "up";
		
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
		
		//createGame(); // זימון פונקציית יצירת משחק
		
		$("#dom_overlay_container").on("change", "#comboChoose", comboChange); // הפעלת פונקציה בעת שינוי הקומבו
		comboCreator();
		
		function comboCreator()
		{
			choose = 0;
			//הוספת הקומבו לבמה
			var forcombo = new lib.forcomb();
			forcombo.x = 480;
			forcombo.y = 295;
			forcombo.name = "combo";
			
		
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.chooseBtn.alpha = 0.3;
		}
		
		//בעת שינוי ערך בקומבו
		function comboChange(evt) 
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
		
		//לחיצה על בחר
		function startChosenGame() 
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
			
			if(firstEnterToWeb) // אם זו הכניסה הראשונה לאתר אז ניצור טיקר אם לא אז לא ניצור
			{
				createjs.Ticker.addEventListener("tick", checkTouch); // טיקר שבודק פגיעה
				firstEnterToWeb = false;
			}
			
			stage.removeChild(stage.getChildByName("combo"));
			matchesRemain = currentGame.length;
			allBubbles = matchesRemain * 2;
			
			createGame();
		}
		
		
		function createGame() // פונקציית יצירת משחק
		{
			var game = new lib.game(); // יצירת מוביקליפ רקע המשחק שכולל את כל האובייקטים חוץ מהדמות והמסיחים
			game.x = 480; 
			game.y = 295;
			game.name = "game_mc";
			
			game.gameBG.instructionBar.instructionText.text = currentInstruction;
			
			stage.addChild(game);
			
		
			var jar = new lib.jar(); // יצירת כד המים
			jar.x = -447;
			jar.y = -237.85;
			jar.scaleX = 0.2837;
			jar.scaleY = 0.2837;
			jar.name = "jar";
			stage.getChildByName("game_mc").gameBG.addChild(jar);
			
			nextLevel();
		}
		
		function nextLevel()
		{
			if(matchesRemain == 0)
			{
				feedbackPage();
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
					randBubble = Math.floor((Math.random() * currentGame.length));
					while(currentGame[randBubble][2] == true)
					{
						randBubble = Math.floor((Math.random() * currentGame.length));
					}
					currentGame[randBubble][2] = true;
					currentGame[randBubble][3] = true;
					
					for(var arrayNum = 0; arrayNum < 2; arrayNum++)
					{
						randPosition = Math.floor((Math.random() * (addNumber*2)));
						while(bubblePositions[randPosition][2] == true)
						{
							randPosition = Math.floor((Math.random() * (addNumber*2)));
						}
						bubblePositions[randPosition][2] = true;
						
						var bubble = new lib.bubbleM(); // יצירת מסיח
						bubble.x = bubblePositions[randPosition][0];
						bubble.y = bubblePositions[randPosition][1];
						bubble.name = currentGame[randBubble][arrayNum][0];
						
						if(currentGame[randBubble][arrayNum][1] == false)
						{
							bubble.bubbleHit.bubbleColorChange.bubbleTextMC.bubbleText.text = currentGame[randBubble][arrayNum][2];
							var textLength = currentGame[randBubble][arrayNum][2].length;
							
							if((textLength > 12) && (textLength < 23))
							{
								bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 12;
							}
							else if(textLength > 23)
							{
								bubble.bubbleHit.bubbleColorChange.bubbleTextMC.y -= 35;
							}
						}
						else
						{
							var pic = new(currentGame[randBubble][arrayNum][2]);
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
							
							bubble.addEventListener("click", zoomPic);
						}
						
						stage.getChildByName("game_mc").gameBG.addChild(bubble);
						
						if(levelNum == 1)
						{
							bubble.gotoAndPlay(150);
						}
					}
				}
				
				if(tutorialShowed == false)
				{
					tutorialShowed = true;
					tutorialCreator();
				}
				
				globalFoxFunction();
			}
		}
		
		var tutorialShowed = false; // בדיקה שזו הפער הראשונה שההדגמה מופיע לבד
		function tutorialCreator()
		{
			var tutorial = new lib.tutorialAnimation(); // יצירת ההדגמה
			tutorial.x = 324.5;
			tutorial.y = -12.3;
			tutorial.name = "tutorial";
			
			tutorial.tutorialClose.addEventListener("click", closeTutorial);
			
			stage.getChildByName("game_mc").gameBG.addChild(tutorial);
		}
		
		function closeTutorial()
		{
			stage.getChildByName("game_mc").gameBG.removeChild(stage.getChildByName("game_mc").gameBG.getChildByName("tutorial"));
		}
		
		var globalFox; // יהיה הדמות - stage.getChildByName("fox_mc");
		function globalFoxFunction()
		{
			//console.log(levelNum);
			if(levelNum != 1)
			{
				var fox = new lib.fox(); // יצירת הדמות
				fox = globalFox;
				stage.getChildByName("game_mc").gameBG.removeChild(globalFox);
				stage.getChildByName("game_mc").gameBG.addChild(fox);
			}
			else
			{
				var fox = new lib.fox(); // יצירת הדמות
				fox.x = 3.1;
				fox.y = 223.45;
				fox.name = "fox_mc";
				stage.getChildByName("game_mc").gameBG.addChild(fox);
			}
			
			globalFox = stage.getChildByName("game_mc").gameBG.getChildByName("fox_mc");
		}
		
		var zoomPicLimit = false; // אינדיקציה לבדיקה שיש רק תמונה אחת בזום
		function zoomPic(e)
		{
			if(zoomPicLimit == false)
			{
				//var p = stage.globalToLocal(stage.mouseX, stage.mouseY); // אולי יהיה שימושי, אם לא - למחוק // אולי להכניס את הקוד לפריים פנימי?
				//evt.currentTarget.x = p.x;
				//evt.currentTarget.y = p.y;
				
				zoomPicLimit = true;
				var zoom = e.currentTarget.bubbleHit.bubbleColorChange.getChildByName("picture").clone(); //יצירת אינסטנס חדש של התמונה
				var zoomWindow = new lib.zoomWindow();
				zoom.x = 0;
				zoom.y = 0;
				zoomWindow.name = "zoomPicture";
				zoomWindow.x = stageWidth/2;
				zoomWindow.y = stageHeight/2;
				
				var boxScale = resizeImage(zoomWindow.zoomWindowPic, zoom);
				zoom.scaleX = boxScale*0.96;
				zoom.scaleY = boxScale*0.96;
				
				zoomWindow.zoomWindowPic.addChild(zoom);
				stage.addChild(zoomWindow);
				
				zoomWindow.xZoomWindow.addEventListener("click", removeZoomWindow);
				
				zoomWindow.addEventListener("pressmove", dragZoomWindow);
			}
		}
		function removeZoomWindow() {stage.removeChild(stage.getChildByName("zoomPicture")); zoomPicLimit = false;} // מחיקת חלון הזום
		
		function dragZoomWindow(e) // פונקציית גרירה
		{
			var point = stage.globalToLocal(stage.mouseX, stage.mouseY);
			e.currentTarget.x = point.x;
			e.currentTarget.y = point.y;
		}
		
		
		
		function resizeImage(box, content) {
		
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
		
		// ************ Movement ************
		
		window.addEventListener("keydown", startMoving);
		window.addEventListener("keyup", stopMoving);
		
		
		
		var jumpInterval;
		var checkJumpWorking = false;
		var rightInterval;
		var checkRightWorking = false;
		var leftInterval;
		var checkLeftWorking = false;
		
		var teleportFoxInterval;
		var checkTeleportStatus = false;
		
		var moveDistance = 3; // #speed
		
		
		function startMoving(e) { // תחילת תנועה
			
			if(e.keyCode == 32)
			{
				if((checkJumpWorking == false) && (checkTeleportStatus == false))
				{
					checkJumpWorking = true;
					jumpInterval = setInterval(jump, 1);
				}
				
			}
			else if((checkLeftWorking == true) && (checkRightWorking == true))
			{
				clearInterval(rightInterval);
				clearInterval(leftInterval);
				globalFox.fox2.fox3.gotoAndStop(0);
			}
			else if(e.keyCode == 37)
			{
				if(checkLeftWorking == false)
				{
					checkLeftWorking = true;
					leftInterval = setInterval(left, 1);
				}
			}
			else if(e.keyCode == 39)
			{
				if(checkRightWorking == false)
				{
					checkRightWorking = true;
					rightInterval = setInterval(right, 1);
				}
			}
			else if((e.keyCode == 38) && (checkIfInAirAndHowLong[0] == false) && (checkTeleportStatus == false) && (globalFox.y > 0))
			{
				checkTeleportStatus = true;
				teleportFoxInterval = setInterval(teleportFoxFunc, 1);
			}
			else if((e.keyCode == 40) && (checkIfInAirAndHowLong[0] == false) && (checkTeleportStatus == false) && (globalFox.y < 0))
			{
				checkTeleportStatus = true;
				teleportFoxInterval = setInterval(teleportFoxFunc, 1);
			}
		}
		
		var countTeleportFrames = 0;
		var teleportMid = false;
		var teleportFinish = false;
		var checkIfteleportMid = false;
		var checkIfteleportFinish = false;
		function teleportFoxFunc()
		{
			if(countTeleportFrames == 0)
			{
				var teleportFoxAnim = new lib.teleportFox();
				teleportFoxAnim.name = "teleportFoxAnim";
				teleportFoxAnim.x = globalFox.x;
				teleportFoxAnim.y = globalFox.y;
				stage.getChildByName("game_mc").gameBG.addChild(teleportFoxAnim);
				globalFox.alpha = 0;
			}
			
			countTeleportFrames += (16 + (2/3));
		
			if((countTeleportFrames < 520) && (countTeleportFrames >= 300) && (checkIfteleportMid == false))
			{
				teleportMid = true;
			}
			if((countTeleportFrames >= 520) && (checkIfteleportFinish == false))
			{ 
				teleportFinish = true;
				checkIfteleportFinish = true;
			}
			
			if(teleportMid == true)
			{
				if(checkIfteleportMid == false)
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
				
				stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim").x = globalFox.x;
				stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim").y = globalFox.y;
			}
			//console.log(teleportFinish);
			if(teleportFinish == true)
			{
				stage.getChildByName("game_mc").gameBG.removeChild(stage.getChildByName("game_mc").gameBG.getChildByName("teleportFoxAnim"));
				globalFox.alpha = 1;
				teleportMid = false;
				teleportFinish = false;
				countTeleportFrames = 0;
				checkIfteleportMid = false;
				checkIfteleportFinish = false;
				clearInterval(teleportFoxInterval);
				checkTeleportStatus = false;
			}
		}
		
		function stopMoving(e)  // עצירת תנועה
		{
			if(e.keyCode == 32)
			{
				checkJumpWorking = false;
				if(checkIfInAirAndHowLong[0] == false)
				{
					globalFox.fox2.fox3.gotoAndStop(0);
				}
				clearInterval(jumpInterval);
			}
			else 
			if(e.keyCode == 37)
			{
				checkLeftWorking = false;
				clearInterval(leftInterval);
				if(checkIfInAirAndHowLong[0] == false)
				{
					globalFox.fox2.fox3.gotoAndStop(0);
				}
			}
			else if(e.keyCode == 39)
			{
				checkRightWorking = false;
				clearInterval(rightInterval);
				if(checkIfInAirAndHowLong[0] == false)
				{
					globalFox.fox2.fox3.gotoAndStop(0);
				}
			}
		}
		
		var checkIfInAirAndHowLong = [false, 0];
		
		function jump() // תחילת אנימציית קפיצה
		{	
			globalFox.fox2.play();
			globalFox.fox2.fox3.gotoAndStop(3);
			checkIfInAirAndHowLong[0] = true;
		}
		
		function left() // תנועה שמאלה
		{
			if(((globalFox.x > -460.1) && (globalFox.y > 0)) || ((globalFox.x > -440.1) && (globalFox.y < 0))) // עצירה בקצוות // side
			{
				if(checkIfInAirAndHowLong[0] == false)
				{
					globalFox.fox2.fox3.gotoAndStop(1);
				}
				globalFox.x -= moveDistance;
			}
		}
		
		function right() // תנועה ימינה
		{
			if(((globalFox.x < 459.9) && (globalFox.y > 0)) || ((globalFox.x < 440) && (globalFox.y < 0))) // עצירה בקצוות // side 
			{
				if(checkIfInAirAndHowLong[0] == false)
				{
					globalFox.fox2.fox3.gotoAndStop(2);
				}
				globalFox.x += moveDistance;
			}
		}
		
		// ************ end Movement ************
		
		var checkNoTwo = false; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה
		var hitNumOne = ["", false]; // שם הבועה שנבחרה והאם קיים תוכן במערך
		var numBubble1;
		var numBubble2;
		var charBubble1;
		var charBubble2;
		
		function checkTouch() 
		{	
			if(matchAnimationFinished == true) // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
			{
				if(checkIfInAirAndHowLong[0] == false) // מחזיר את השועל למצב רגיל אחרי נחיתה על הקרקע
				{
					globalFox.fox2.fox3.gotoAndStop(0);
				}
				
				var currentBubble;
				var bubbleLetter;
				
				if(checkIfInAirAndHowLong[0] == true)
				{
					checkIfInAirAndHowLong[1] ++;
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
							
							// פגיעה ראשונה 
							if((intersectFox(stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter))) && (checkNoTwo == false) && (checkIfInAirAndHowLong[1] >= 3) && (checkIfInAirAndHowLong[1] <= 28)) 
							{
								if(hitNumOne[1] == false)
								{
									checkNoTwo = true; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה
									hitNumOne[0] = currentGame[bubbleNum][bubbleLetterNum][0]; // מכניס את שם הבועה למשתנה
									hitNumOne[1] = true; // אומר שהמשתנה מכיל ערך
									stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter).bubbleHit.bubbleColorChange.gotoAndPlay(1);
									stage.getChildByName("game_mc").gameBG.getChildByName(bubbleNum + bubbleLetter).bubbleHit.gotoAndPlay(1);
								} // פגיעה שניה
								else 
								{
									numBubble1 = hitNumOne[0].slice(0,1);
									numBubble2 = currentGame[bubbleNum][bubbleLetterNum][0].slice(0,1);
									charBubble1 = hitNumOne[0].slice(1,2);
									charBubble2 = currentGame[bubbleNum][bubbleLetterNum][0].slice(1,2);
								
									if((numBubble1 == numBubble2) && (charBubble1 != charBubble2)) // בודק האם יש התאמה
									{
										// איפוס כל הערכים שהתקבלו בפונקציה זו
										currentGame[bubbleNum][3] = false; // אומר שהבועות כבר לא על המסך
										checkNoTwo = true; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה
										hitNumOne[0] =""; // מאפס את ערך המשתנה
										hitNumOne[1] = false; // מאפס את ערך המשתנה
										
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
										
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.bubbleColorChange.gotoAndPlay(31);
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.gotoAndPlay(151); 
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.bubbleColorChange.gotoAndPlay(31);
										stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.gotoAndPlay(61);
		
										checkNoTwo = true; // עוזר לנו בכך שלא תיהיה פגיעה שניה באותה הקפיצה 
										hitNumOne[0] =""; // מאפס את ערך המשתנה
										hitNumOne[1] = false; // מאפס את ערך המשתנה
										currentGame[bubbleNum][bubbleLetterNum][3] ++; // מוסיף טעות לספירה
										currentGame[numBubble1][letterNum][3] ++; // מוסיף טעות לספירה
									}
								}
							}
						}
					}
				}
				//console.log(checkIfInAirAndHowLong[1]);
				if((globalFox.fox2.fox3.y > 50)) // פגיעה ברצפה מאשרת שאפשר לפגוע עכשיו בעוד מסיח
				{
					//console.log(globalFox.fox2.fox3.y);
					checkNoTwo = false;
					checkIfInAirAndHowLong[0] = false;
					checkIfInAirAndHowLong[1] = 0;
				}
			}
		}
		
		function matchFound(bubbleNum) // פעולות בהתאמה מוצלחת
		{	
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.bubbleColorChange.gotoAndPlay(16);
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1).bubbleHit.gotoAndStop(150); 
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.bubbleColorChange.gotoAndPlay(16);
			stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2).bubbleHit.gotoAndPlay(31);
		
			currentGame[bubbleNum][3] = false;
			bubblesOnStage -= 2;
			
			bubble1 = stage.getChildByName("game_mc").gameBG.getChildByName(numBubble1 + charBubble1);
			bubble2 = stage.getChildByName("game_mc").gameBG.getChildByName(numBubble2 + charBubble2);
			matchAnimationDirectionX1 = (bubble1.x - destinationX) / 50; // חישוב כמות התזוזה בציר איקס
			matchAnimationDirectionY1 = (bubble1.y - destinationY) / 50; // חישוב כמות התזוזה בציר ווי
			matchAnimationDirectionX2 = (bubble2.x - destinationX) / 50; // חישוב כמות התזוזה בציר איקס
			matchAnimationDirectionY2 = (bubble2.y - destinationY) / 50; // חישוב כמות התזוזה בציר ווי
			scaleMatchOptimizer = 0.9 / 50;
											// שינוי של המספר 50 ישנה את מהירות הכדור
			matchAnimationIntervalActivation = setInterval(matchAnimationIntervalActivationFunction, 1000);
			
			if(bubblesOnStage == 0)
			{
				nextLevel();
			}	
		}
		
		
		var matchAnimationIntervalActivation; // אינטרוואל ששאומר להתחיל את האינטרוואל של תזוזת הבועות
		var matchAnimationInterval; // אינטרוואל לתזוזת הבועות
		var matchAnimationDirectionX1; // חישוב כמות התזוזה בציר איקס
		var matchAnimationDirectionX2; // חישוב כמות התזוזה בציר איקס
		var matchAnimationDirectionY1; // חישוב כמות התזוזה בציר ווי
		var matchAnimationDirectionY2; // חישוב כמות התזוזה בציר ווי
		var destinationX = -430;
		var destinationY = -245;
		var bubble1;
		var bubble2;
		var firstEntryToMatchAnimationInterval = false;
		var scaleMatchOptimizer;
		var matchAnimationFinished = true; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
		
		function matchAnimationIntervalActivationFunction()
		{
			matchAnimationFinished = false; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה 
			
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
			
			if(firstEntryToMatchAnimationInterval== false)
			{
				firstEntryToMatchAnimationInterval = true;
			}
			else
			{
				firstEntryToMatchAnimationInterval== false;
				var waterDrop1 = new lib.waterDrop(); // יצירת וי
				waterDrop1.name = "waterDrop1";
				var waterDrop2 = new lib.waterDrop(); // יצירת וי
				waterDrop2.name = "waterDrop2";
				bubble1.addChild(waterDrop1);
				bubble2.addChild(waterDrop2);
				
				matchAnimationInterval =  setInterval(matchAnimationFunction, 1); // אינטרוואל לתזוזת הבועה
				clearInterval(matchAnimationIntervalActivation);
			}
		}
		
		function matchAnimationFunction() // פונקציית תזוזת הכדור
		{
			bubble1.scaleX -= scaleMatchOptimizer;
			bubble1.scaleY -= scaleMatchOptimizer;
			bubble2.scaleX -= scaleMatchOptimizer;
			bubble2.scaleY -= scaleMatchOptimizer;
			
			if(bubble1.x < destinationX) // המספר 30 מסמל מתי לעצור את הכדור בציר איקס
			{
				matchAnimationDirectionX1 = 0;
			}
			if(bubble1.y < destinationY) // המספר 30 מסמל מתי לעצור את הכדור בציר ווי
			{
				matchAnimationDirectionY1 = 0;
			}
			if(bubble2.x < destinationX) // המספר 30 מסמל מתי לעצור את הכדור בציר איקס
			{
				matchAnimationDirectionX2 = 0;
			}
			if(bubble2.y < destinationY) // המספר 30 מסמל מתי לעצור את הכדור בציר ווי
			{
				matchAnimationDirectionY2 = 0;
			}
			if((bubble1.y < destinationY) && (bubble1.x < destinationX) 
			&& (bubble2.y < destinationY) && (bubble2.x < destinationX)) // בודק אם שתי הבועות הגיעו לסוף
			{
				jarMask = stage.getChildByName("game_mc").gameBG.getChildByName("jar").brown;
				waterFill();
				stage.getChildByName("game_mc").gameBG.removeChild(bubble1);
				stage.getChildByName("game_mc").gameBG.removeChild(bubble2);
				matchAnimationFinished = true; // מונע התנגשות של אינטרוואלים ליצירת אנימציית הצלחה
				clearInterval(matchAnimationInterval);
			}
			
			bubble1.x -= matchAnimationDirectionX1; // התזוזה עצמה
			bubble1.y -= matchAnimationDirectionY1; // התזוזה עצמה
			bubble2.x -= matchAnimationDirectionX2; // התזוזה עצמה
			bubble2.y -= matchAnimationDirectionY2; // התזוזה עצמה
		}
		
		var counterWaterFill = 0;
		var waterFillInterval;
		var controlWaterFill = false; // שלא יקרה מצב שיש 2 אינטרוואלים פועלים
		var jarMask;
		var jarWaterFirst = false;
		
		function waterFill()// קריאה לאינטרוואל למילוא מיכל המים
		{
			if(controlWaterFill == false)
			{
				controlWaterFill = true;
				waterFillInterval = setInterval(waterFillIntervalFunction, 50);
			}
		}
		function waterFillIntervalFunction() // אינטרוואל למילוא מיכל המים
		{
			//console.log("working");
			counterWaterFill++;
			if(jarWaterFirst == false)
			{
				jarWaterFirst = true;
				jarMask.scaleY = 1 - (1 / currentGame.length);
				//console.log(jarWaterFirst);
				//console.log(1 / currentGame.length);
				//console.log(jarMask.scaleY);
			}
			jarMask.scaleY -= ((1 / (currentGame.length+1))/15);
			//console.log(jarMask.scaleY);
			if(counterWaterFill ==	 15)
			{ 
				counterWaterFill = 0;
				controlWaterFill = false;
				clearInterval(waterFillInterval); 
			}
		}
		
		
		/////////////////////
		function intersectFox(obj1) { waterFillInterval
			
			
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
		
		// ----------------------------- Feedback Page
		function feedbackPage()
		{
			var feedbackPage = new lib.feedbackPage(); 
			feedbackPage.x = 480; 
			feedbackPage.y = 295;
			feedbackPage.name = "feedbackPage";
			
			feedbackPage.DiagnosticFeedback.gameName.text = currentName;
			feedbackPage.DiagnosticFeedback.grade.text = gradeCalculator();
			
			feedbackPage.DiagnosticFeedback.restartGameBtn.addEventListener("click", restartGame);
			feedbackPage.DiagnosticFeedback.backToStartBtn.addEventListener("click", backToStart);
		
			var oddAmdPair;
			var countPairsOfDuo = 0; // מוסיף אחד כשצריך לרדת שורה
			
			for(var bubbleListCount = 0; bubbleListCount < currentGame.length; bubbleListCount++) // זימון התאמות
			{
				var duoBubbles = new lib.duoBubbles();
				duoBubbles.y = bubbleListPositions[1] + bubbleListPositions[3]*(countPairsOfDuo);
				if(bubbleListCount%2 == 0)
				{
					oddAmdPair = 0;
				}
				else
				{
					oddAmdPair = 1;
					countPairsOfDuo++;
				}
				duoBubbles.x = bubbleListPositions[0] + bubbleListPositions[2]*oddAmdPair;
				
				var positionNum = 0;  // גודל ב2 בתוך הלולאה הבאה בכדי לשנות את מיקום זימון הבועות
				
				for(var duoBubblesCount = 0; duoBubblesCount < 2; duoBubblesCount++) // זימון הבועות לתוך מוביקליפ של זוג
				{
					var bubble = new lib.bubbleM();
					bubble.x = duoBubblePositions[positionNum];
					bubble.y = duoBubblePositions[positionNum+1];
					duoBubbles.addChild(bubble);
					
					if(currentGame[bubbleListCount][duoBubblesCount][3] == 0)
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
					
					if(currentGame[bubbleListCount][duoBubblesCount][1] == false)
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
					else
					{
						var pic = new(currentGame[bubbleListCount][duoBubblesCount][2]);
						pic.name = "picture";
						scale = Scale(bubble, pic); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
						pic.scaleX = scale; // שינוי גודל התמונה
						pic.scaleY = scale; // שינוי גודל התמונה
						pic.x = 62.35;
						pic.y = 62.35;
						
						/*var magGlass = new lib.magGlass;
						var widthBubble = bubble.nominalBounds.width;
						var heightBubble = bubble.nominalBounds.height;
						magGlass.x = 62.35;
						magGlass.y = 16.15;*/
			
						bubble.bubbleHit.bubbleColorChange.addChild(pic);
						
						/*bubble.bubbleHit.bubbleColorChange.addChild(magGlass);
						
						bubble.addEventListener("click", zoomPic);*/
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
			var totalGrade = 0;
			var eachMaxGrade = 100 / (currentGame.length * 2);
			
			for(var i = 0; i < currentGame.length; i++)
			{
				for(j = 0; j < 2; j++)
				{
					totalGrade += eachMaxGrade * Math.pow((2/3), currentGame[i][j][3]);
				}
			}
			return Math.round(totalGrade);
		}
		
		function listScrolling()
		{
			stage.getChildByName("feedbackPage").DiagnosticFeedback.bubbleList.play();
			if(listPosition == "up")
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
		
		function restartGame()
		{
			resetGameArray();
			createGame();
		}
		
		function backToStart()
		{
			resetGameArray();
			comboCreator();
		}
		
		function resetGameArray()
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
			
			stage.removeChild(stage.getChildByName("game_mc"));
			stage.removeChild(stage.getChildByName("feedbackPage"));
		}
		
		// ---------------------------------------------------------------------------------------------------------------
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gameSizeBG
	this.stageBG = new lib.stageBG_mc();
	this.stageBG.name = "stageBG";
	this.stageBG.parent = this;
	this.stageBG.setTransform(960.1,590,0.501,0.608,0,0,0,957.5,485);

	this.timeline.addTween(cjs.Tween.get(this.stageBG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(479.8,294.7,960.5,590.6);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '128531FC687D4D46AB9D441B3FF25B1A',
	width: 960,
	height: 590,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Development_atlas_.png?1517679847038", id:"Development_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1517679847830", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1517679847830", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1517679847830", id:"an.ComboBox"}
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