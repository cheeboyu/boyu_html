(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"22_BoYu_Apple_Company_atlas_1", frames: [[0,0,311,360],[313,0,311,360],[626,0,311,360]]},
		{name:"22_BoYu_Apple_Company_atlas_2", frames: [[0,1540,500,500],[502,1540,311,360],[815,1540,311,360],[1128,1540,311,360],[1441,1431,311,360],[0,0,1366,768],[0,770,1366,768],[1368,0,493,507],[1368,886,459,543],[1368,509,666,375]]},
		{name:"22_BoYu_Apple_Company_atlas_3", frames: [[0,0,1366,768],[0,770,1366,768]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.airpod_pro = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_0 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_1 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_2 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_3 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_4 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_5 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Apple_logo_6 = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Facebook_logo = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Facebook_logo_stroke = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Instagram_logo = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Instagram_logo_stroke = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ipad_pro = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.IPhone_12ProMax = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Macbook = function() {
	this.initialize(ss["22_BoYu_Apple_Company_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ig_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Instagram
	this.instance = new lib.Instagram_logo();
	this.instance.setTransform(67,-74,0.1165,0.1165);

	this.instance_1 = new lib.Instagram_logo_stroke();
	this.instance_1.setTransform(67,-74,0.1165,0.1164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-74}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:-72}}]},1).to({state:[{t:this.instance,p:{y:-74}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67,-74,159.2,91.5);


(lib.fb_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Facebook_logo();
	this.instance.setTransform(-85,-41,0.1074,0.1074);

	this.instance_1 = new lib.Facebook_logo_stroke();
	this.instance_1.setTransform(-85,-41,0.1074,0.1074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-41}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:-39}}]},1).to({state:[{t:this.instance,p:{y:-41}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-41,146.7,84.5);


(lib.Macbook_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Macbook pro", "25px 'Stencil'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(0,-22,0.5674,0.5674);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Macbook_txt, new cjs.Rectangle(-77.4,-23.1,154.9,46.3), null);


(lib.macbook_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Macbook();
	this.instance.setTransform(-60.9,-34.3,0.183,0.183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.macbook_mc, new cjs.Rectangle(-60.9,-34.3,121.9,68.6), null);


(lib.iphone12_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Iphone 12 \npro max", "25px 'Stencil'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(0,-22,0.5674,0.5674);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iphone12_txt, new cjs.Rectangle(-77.4,-23.1,154.9,46.3), null);


(lib.iphone12_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IPhone_12ProMax();
	this.instance.setTransform(-46.85,-55.45,0.2042,0.2042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iphone12_mc, new cjs.Rectangle(-46.8,-55.4,93.69999999999999,110.9), null);


(lib.Ipadpro_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("IPAD PRO", "25px 'Stencil'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(0,-22,0.5674,0.5674);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ipadpro_txt, new cjs.Rectangle(-77.4,-23.1,154.9,46.3), null);


(lib.ipadpro_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ipad_pro();
	this.instance.setTransform(-49.05,-50.45,0.199,0.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ipadpro_mc, new cjs.Rectangle(-49,-50.4,98.1,100.9), null);


(lib.Apple_logo_gif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Apple_logo_0();

	this.instance_1 = new lib.Apple_logo_1();

	this.instance_2 = new lib.Apple_logo_2();

	this.instance_3 = new lib.Apple_logo_3();

	this.instance_4 = new lib.Apple_logo_4();

	this.instance_5 = new lib.Apple_logo_5();

	this.instance_6 = new lib.Apple_logo_6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_4}]},25).to({state:[{t:this.instance_5}]},25).to({state:[{t:this.instance_6}]},25).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,360);


(lib.Letter_P = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQA3IgmgSQAKgsASgvIARAAIAABtg");
	this.shape.setTransform(-6.7625,-21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7BfQAChaAnhjIAnAAQBPBJhPAkIgmAAIAABQg");
	this.shape_1.setTransform(-4.3326,-17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AijBfQADhaAnhjIBuAAQBZAAAtArQAfAeAKAuIgEAEQgLALgJADQgTAIgagMQgIgEgNgHIgVgMQgKgFgFAAQgGAAgLAIQgNAKgJAPQgDgGgGgGQgQgRgvAAIgvAAIAABQg");
	this.shape_2.setTransform(6,-17.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBGQADgJAAgLQAAgZgQgRQgRgRguAAIgvAAIAABPIgrAAQADhYAnhkIBuAAQBZAAAtArQAtArAABOIgBAYQg9AxgpAAQgpAAgVgxg");
	this.shape_3.setTransform(6.2125,-14.9131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah7C/IgGgNIAHAAIAAANgAgUAaIAGgEQASgRAAgaQAAgZgQgRQgRgSguAAIgvAAIAABMIgrAAQAEhYAmhhIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgeAcgwALQhug0Azg+g");
	this.shape_4.setTransform(6.2125,-7.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah7C/IgGgNIAHAAIAAANgAhCCTQhHgVBHhYQAkgDAQgNQASgRAAgaQAAgZgQgRQgRgSguAAIgvAAIAABMIgrAAQAEhYAmhhIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgxAuhkAAg");
	this.shape_5.setTransform(6.2125,-7.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah7C/QhUinBUjWIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgxAuhjAAIhbAAIAAAsgAh6AmIApAAQAwAAATgQQATgRAAgaQAAgZgQgRQgRgSgvAAIgvAAg");
	this.shape_6.setTransform(6.1973,-7.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(54));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhTAHIAAgGICngHIgBANg");
	this.shape_7.setTransform(-14.375,26.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhTAFIAAgJICnABIgBAIg");
	this.shape_8.setTransform(-14.375,26.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhTAHIAAgNICnAIIgBAFg");
	this.shape_9.setTransform(-14.425,26.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhTAIIAAgOICngBIgBAPg");
	this.shape_10.setTransform(-14.425,26.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhTANIgBgOICpgLIgCAZg");
	this.shape_11.setTransform(-14.4,25.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhTASIgBgOICpgVIgCAjg");
	this.shape_12.setTransform(-14.4,25.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhTBDIAAhFQBfhoBIBDIgBBqg");
	this.shape_13.setTransform(-14.4,20.1913);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhSB3IAAh8QBpjFA8CRIAACwg");
	this.shape_14.setTransform(-14.45,14.9113);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhSDPIAAlQQBWibBOCdIAACxIABAAIAACdg");
	this.shape_15.setTransform(-14.45,6.1474);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhSD/IAAnNQBShjBSBrIAAEnIABAAIAACeg");
	this.shape_16.setTransform(-14.45,1.3935);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSEMIAAoXICkAAIAAF6IABAAIAACdg");
	this.shape_17.setTransform(-14.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(59));

	// Layer_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#808080").s().p("AAQA3IgmgSQAKgsASgvIARAAIAABtg");
	this.shape_18.setTransform(-6.7625,-21.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#808080").s().p("Ag7BfQAChaAnhjIAnAAQBPBJhPAkIgmAAIAABQg");
	this.shape_19.setTransform(-4.3326,-17.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#808080").s().p("AijBfQADhaAnhjIBuAAQBZAAAtArQAfAeAKAuIgEAEQgLALgJADQgTAIgagMQgIgEgNgHIgVgMQgKgFgFAAQgGAAgLAIQgNAKgJAPQgDgGgGgGQgQgRgvAAIgvAAIAABQg");
	this.shape_20.setTransform(6,-17.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#808080").s().p("AABBGQADgJAAgLQAAgZgQgRQgRgRguAAIgvAAIAABPIgrAAQADhYAnhkIBuAAQBZAAAtArQAtArAABOIgBAYQg9AxgpAAQgpAAgVgxg");
	this.shape_21.setTransform(6.2125,-14.9131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#808080").s().p("AgUA0IAGgFQASgRAAgaQAAgYgQgRQgRgSguAAIgvAAIAABKIgrAAQAEhWAmhhIBuAAQBZAAAtArQAtArAABOQAABRgxAuQgeAbgwALQhug0Azg9g");
	this.shape_22.setTransform(6.2125,-10.3125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACAGIgFgLIAGAAIAAALg");
	this.shape_23.setTransform(-6.45,10.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#808080").s().p("AhCCpQhHgVBHhYQAkgDAQgNQASgRAAgbQAAgYgQgRQgRgSguAAIgvAAIAABLIgrAAQAEhXAmhhIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgxAuhkAAg");
	this.shape_24.setTransform(6.2125,-9.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#808080").s().p("Ah7C/QhUinBUjWIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgxAuhjAAIhbAAIAAAsgAh6AmIApAAQAwAAATgQQATgRAAgaQAAgZgQgRQgRgSgvAAIgvAAg");
	this.shape_25.setTransform(6.1973,-7.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah7C/QhUinBUjWIBuAAQBZAAAtArQAtArAABPQAABQgxAuQgxAuhjAAIhbAAIAAAsgAh6AmIApAAQAwAAATgQQATgRAAgaQAAgZgQgRQgRgSgvAAIgvAAg");
	this.shape_26.setTransform(6.1973,-7.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},12).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},3).wait(54));

	// Layer_1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#808080").s().p("AhTAHIAAgGICngHIgBANg");
	this.shape_27.setTransform(-14.375,26.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808080").s().p("AhTAFIAAgJICnABIgBAIg");
	this.shape_28.setTransform(-14.375,26.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#808080").s().p("AhTAHIAAgNICnAIIgBAFg");
	this.shape_29.setTransform(-14.425,26.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#808080").s().p("AhTAIIAAgOICngBIgBAPg");
	this.shape_30.setTransform(-14.425,26.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808080").s().p("AhTANIgBgOICpgLIgCAZg");
	this.shape_31.setTransform(-14.4,25.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808080").s().p("AhTASIgBgOICpgVIgCAjg");
	this.shape_32.setTransform(-14.4,25.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#808080").s().p("AhTBDIAAhFQBfhoBIBDIgBBqg");
	this.shape_33.setTransform(-14.4,20.1913);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#808080").s().p("AhSB3IAAh8QBpjFA8CRIAACwg");
	this.shape_34.setTransform(-14.45,14.9113);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#808080").s().p("AhSDPIAAlQQBWibBOCdIAACxIABAAIAACdg");
	this.shape_35.setTransform(-14.45,6.1474);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#808080").s().p("AhSD/IAAnNQBShjBSBrIAAEnIABAAIAACeg");
	this.shape_36.setTransform(-14.45,1.3935);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("AhSEMIAAoXICkAAIAAF6IABAAIAACdg");
	this.shape_37.setTransform(-14.45,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhSEMIAAoXICkAAIAAF6IABAAIAACdg");
	this.shape_38.setTransform(-14.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},2).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-26.8,45.6,53.7);


(lib.FlyIn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AAHB/QhFgLgxgpQg2gvAJg8QAGgtAWgbQAaggAqAEIAFABIALABIA2AeQAkATAdAXQBcBFgJBBQgHAvgtAIQgLACgQAAQgcAAgsgGg");
	this.shape.setTransform(126.28,-42.6631);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("ACbEtIgBAAQgugHg6gUQglgNgpgTQhugxhfhEQgpgdgigdIgMgLQgtgqgfgqQgwhCgGg9QgBgVADgTQALhLBWgYQAkgLAxgBQAggBAmADQBqAJB2AgIAPAJQA0AiBKAtIA0AhIAiAVQBoBAAiAdQAsAkAKArQAJAlgMBPQgNBWhVAiQgxAUhBAAQgkAAgpgGg");
	this.shape_1.setTransform(88.3556,-58.6351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AE2FmQgqgEh8gBIgKAAQhpgBg3gIQhBgKhUgmQhhgrhMg+QjLiiAfjMQALhOA4gzQA6g2BUgBIC7AcIAyAVQCSA8ByA/IAaAPQFSC/gaCvQgNBZgqAnQgrAmhPAAQgRAAgUgCg");
	this.shape_2.setTransform(40.9434,-75.3791);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AAdGqQhFgLhPg6QhMg5hAhVQhChYgghfQgjhmAOhaQAIg4BKhQQA+hBA0gUQADgCAYgFQAegIBCgOQBcgUAyAIQDLAeBACAQA0BmgdDBQgcDAhSBpQhOBlhyAAQgVAAgVgDgAlLlmQgLgCgBgBIgFgGQAXADADgEQABgCgIgLQgTgdAYgSIBBAKQgCATgUAVQgVAUgWAAIgHAAg");
	this.shape_3.setTransform(16.8345,-79.3675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AAGFrQhngQhIhLQhMhQAOheQAKhDAwg4QA8hFBKALIAUADQAFACAbgMIAxANIAJACQAZAOAaAEQgTgJgggJQgSgKgSgQQgRgOgQgUQg2hCAHgtQAGgkARgXQAMgQAPgFQAMgGAughIACAAQD4AlgZCtQgLBHgZAbQggAjhEgEQAMAaANA+QAQBZgIA2QgNBYgZAgQghAphEAAQgTAAgVgDgAkRBIIgLgCIgFgGIAEgbIAgghIAEAAQANADAHAFIgFAhIgeAWQgHAFgCAAIAAAAgAi5i6QgUgCAEgZIADgPIAFgOQAgAFAPAHQgIAQgFAUQgFAJgNAAIgIgBg");
	this.shape_4.setTransform(-16.5063,-90.4919);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AADERQgrgHgeg5Qgdg4AIg5QAHgvAlgWQAEACAXgCQAZgBAFABQAkAFAXAUQAkAfgJA7QgIA0gXAmQgZAqgeAAIgHgBgAjrAwIADgTQACAAADgIIACgCQAXAEAGAEIgDATQgHAEgIACIgHABQgIgBgGgEgACYh2QgZgEgUgbQgSgcAEgcQADgWACgGQAHgPATgXQAFgCAFAAIARACIARADQASAFANAIQArAYgHAvQgFAmgXARQgRANgXAAIgPgCgAiIi6QgIgBgDgDQgFgGACgOQABgFABgDIAVAEQAGADgBALQgBAGgEAEQgDAFgFAAIgBgBg");
	this.shape_5.setTransform(-25.351,-96.9456);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808080").s().p("AhKDoQgagEgSgiQgRgiAFgiQAEgcAWgNIARAAIASAAQAVADAOALQAWATgGAjQgEAggOAWQgPAagTAAIgEgBgABSiLQgQgCgLgRQgLgRACgQQACgNACgEQADgJAMgOIAGgBIALABIAJACQALADAIAFQAaAOgFAdQgDAWgOAKQgKAIgOAAIgIgBg");
	this.shape_6.setTransform(-19.5826,-100.1855);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AhPC1QgJgBgIgHQgKgJACgNIAEgLIAlAEQAMABgCAQQgBAJgHAFQgGAHgJAAIgDgBgABViVQgRgCACgPIABgCQADgFAIgEQAIgFAGABIAFAEQAFAFgBAHQgBAJgEAEQgDAEgHAAIgFgBg");
	this.shape_7.setTransform(-24.3644,-108.4958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[]},2).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-127.1,191.1,99.19999999999999);


(lib.Airpod_pro_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("AIRPOD PRO", "25px 'Stencil'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(0,-22,0.5674,0.5674);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Airpod_pro_txt, new cjs.Rectangle(-77.4,-23.1,154.9,46.3), null);


(lib.airpod_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.airpod_pro();
	this.instance.setTransform(-38,-38,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.airpod_mc, new cjs.Rectangle(-38,-38,76,76), null);


(lib.Letter_L = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBCIAAiDIAhAAIAACDg");
	this.shape.setTransform(19.525,20.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBBQgShAAJhCIAiAAIAACDg");
	this.shape_1.setTransform(19.3638,20.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAEBAQgkg/AThCIAiAAIAACDg");
	this.shape_2.setTransform(19.1941,20.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BCQgghCAghBIB5AAIAACDg");
	this.shape_3.setTransform(14.3625,20.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhYBCQg/hCA/hBIDRAAIAACDg");
	this.shape_4.setTransform(9.1907,20.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhhBDQgngOgdgOQgDg0ASg1ICHAAIABACICzADIABB4IgEAIg");
	this.shape_5.setTransform(4.6041,20.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjTBDIAAiGICmAAIAAAEIEBAAIAACCg");
	this.shape_6.setTransform(0.025,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjTBsIAAjHQBLgfBbAfIAABEIEBAAIAACDg");
	this.shape_7.setTransform(0.025,16.0875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjTCUIAAkIQBDg+BjA+IAACEIEBAAIAACEg");
	this.shape_8.setTransform(0.025,12.0625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjTC8IAAlJQA8hcBqBcIAADFIEBAAIAACEg");
	this.shape_9.setTransform(0.025,8.0548);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjTDXIAAmOQBDg+BjA+IAAEKIEBAAIAACEg");
	this.shape_10.setTransform(0.025,5.3625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjTDyIAAnTQBLgfBbAfIAAFPIEBAAIAACEg");
	this.shape_11.setTransform(0.025,2.6875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjTEMIAAoXICmAAIAAGUIEBAAIAACDg");
	this.shape_12.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(57));

	// Layer_3
	this.instance = new lib.FlyIn("synched",0,false);
	this.instance.setTransform(-13.6,-79.55,0.4561,0.2585,80.3403,0,0,-14,-72.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(64));

	// Layer_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#808080").s().p("AgQBCIAAiDIAhAAIAACDg");
	this.shape_13.setTransform(19.525,20.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808080").s().p("AgGBBQgShAAJhCIAiAAIAACDg");
	this.shape_14.setTransform(19.3638,20.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AAEBAQgkg/AThCIAiAAIAACDg");
	this.shape_15.setTransform(19.1941,20.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808080").s().p("Ag0BCQgghCAghBIB5AAIAACDg");
	this.shape_16.setTransform(14.3625,20.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#808080").s().p("AhYBCQg/hCA/hBIDRAAIAACDg");
	this.shape_17.setTransform(9.1907,20.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#808080").s().p("AhhBDQgngOgdgOQgDg0ASg1ICHAAIABACICzADIABB4IgEAIg");
	this.shape_18.setTransform(4.6041,20.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#808080").s().p("AjTBDIAAiGICmAAIAAAEIEBAAIAACCg");
	this.shape_19.setTransform(0.025,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#808080").s().p("AjTBsIAAjHQBLgfBbAfIAABEIEBAAIAACDg");
	this.shape_20.setTransform(0.025,16.0875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#808080").s().p("AjTCUIAAkIQBDg+BjA+IAACEIEBAAIAACEg");
	this.shape_21.setTransform(0.025,12.0625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#808080").s().p("AjTC8IAAlJQA8hcBqBcIAADFIEBAAIAACEg");
	this.shape_22.setTransform(0.025,8.0548);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#808080").s().p("AjTDXIAAmOQBDg+BjA+IAAEKIEBAAIAACEg");
	this.shape_23.setTransform(0.025,5.3625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#808080").s().p("AjTDyIAAnTQBLgfBbAfIAAFPIEBAAIAACEg");
	this.shape_24.setTransform(0.025,2.6875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#808080").s().p("AjTEMIAAoXICmAAIAAGUIEBAAIAACDg");
	this.shape_25.setTransform(0.025,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjTEMIAAoXICmAAIAAGUIEBAAIAACDg");
	this.shape_26.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},4).wait(57));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-96.1,42.5,123);


(lib.Letter_E = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjhEMIAAoXIG5AAIAAByIkNAAIgEABIgCAAIAABVIEBAAIAABsIj9AAIgCAAIgCAAIAABqIACAAIEbAAIAAB5g");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({_off:false},0).wait(75));

	// Layer_11
	this.instance = new lib.FlyIn("synched",0,false);
	this.instance.setTransform(-15.5,-58.15,0.4561,0.2585,80.3403,0,0,-14,-72.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},16).wait(75));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRAFIgCgCICngIIgBAKg");
	this.shape_1.setTransform(-14.35,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhRAFIgCgIICngCIgBAKg");
	this.shape_2.setTransform(-14.35,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRAIIgCgPICnAFIAAAKg");
	this.shape_3.setTransform(-14.375,26.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRAPIgCgPICmgOIABAdg");
	this.shape_4.setTransform(-14.4,25.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhSAVIAAgQIClgZIgBApg");
	this.shape_5.setTransform(-14.25,24.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhTAbIAAgRICngkIgCA1g");
	this.shape_6.setTransform(-14.2,24.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSBfIAAi9IClAAIAAAHIAAAAIAAC2g");
	this.shape_7.setTransform(-14.275,17.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSC+IAAl7IClAAIAACxIAAAAIAAATIAAAAIAAC3g");
	this.shape_8.setTransform(-14.275,7.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABKEMIikAAIAAoXICnAAIAAABQAGAAAEADQAEAFAAAEIgDALIAAAFIgBAMIAAAIIACAxIgBAJQgCAIgJAAIgBAAIAAAnIgBAAIAAAuQAJABACAIIABAJIAAAcIABAdIAAAXQgCAJgJABIgCAAIAAAZIABAAIAAAUIgBAAIAAA9QAFAAADAEQADAEAAAIIACAMIACAJIAAAkQAAAXgDAMQAAAGgCACQgEAFgGAAIgBAAg");
	this.shape_9.setTransform(-13.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},10).wait(75));

	// Layer_10
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AhRAFIgCgCICngIIgBAKg");
	this.shape_10.setTransform(-14.35,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#808080").s().p("AhRAFIgCgIICngCIgBAKg");
	this.shape_11.setTransform(-14.35,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AhRAIIgCgPICnAFIAAAKg");
	this.shape_12.setTransform(-14.375,26.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#808080").s().p("AhRAPIgCgPICmgOIABAdg");
	this.shape_13.setTransform(-14.4,25.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808080").s().p("AhSAVIAAgQIClgZIgBApg");
	this.shape_14.setTransform(-14.25,24.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808080").s().p("AhTAbIAAgRICngkIgCA1g");
	this.shape_15.setTransform(-14.2,24.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808080").s().p("AhSBfIAAi9IClAAIAAAHIAAAAIAAC2g");
	this.shape_16.setTransform(-14.275,17.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#808080").s().p("AhSC+IAAl7IClAAIAACxIAAAAIAAATIAAAAIAAC3g");
	this.shape_17.setTransform(-14.275,7.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#808080").s().p("AhTEMIAAoXICnAAIAAByIgCAAIAAAoIAAAAIAACzIAAAAIAAAUIAAAAIAAC2g");
	this.shape_18.setTransform(-14.175,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhTEMIAAoXICnAAIAAByIgCAAIAAAoIAAAAIAACzIAAAAIAAAUIAAAAIAAC2g");
	this.shape_19.setTransform(-14.175,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},4).to({state:[]},10).wait(75));

	// Layer_12
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBbIAAi1IABAAIAAA9IANAAIAAB4g");
	this.shape_20.setTransform(-5.25,17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZBbIAAi1IAAAAIAAA9IAzAAIAAB4g");
	this.shape_21.setTransform(-3.375,17.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgsBbIAAi1IAAAAIAAA9IBZAAIAAB4g");
	this.shape_22.setTransform(-1.475,17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag/BbIAAi1IABAAIAAA9IB+AAIAAB4g");
	this.shape_23.setTransform(0.4,17.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhsBbIAAi1IAAAAIAAA9IDZAAIAAB4g");
	this.shape_24.setTransform(0.45,17.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AiZBbIAAi1IABAAIAAA9IEyAAIAAB4g");
	this.shape_25.setTransform(0.45,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},20).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).wait(75));

	// Layer_7
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("AgHBbIAAi1IABAAIAAA9IANAAIAAB4g");
	this.shape_26.setTransform(-5.25,17.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#808080").s().p("AgZBbIAAi1IAAAAIAAA9IAzAAIAAB4g");
	this.shape_27.setTransform(-3.375,17.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808080").s().p("AgsBbIAAi1IAAAAIAAA9IBZAAIAAB4g");
	this.shape_28.setTransform(-1.475,17.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#808080").s().p("Ag/BbIAAi1IABAAIAAA9IB+AAIAAB4g");
	this.shape_29.setTransform(0.4,17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#808080").s().p("AhaBbIAAi1IABAAIAAA9ICzAAIAAB4g");
	this.shape_30.setTransform(3.05,17.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808080").s().p("Ah0BbIAAi1IABAAIAAA9IDoAAIAAB4g");
	this.shape_31.setTransform(5.675,17.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808080").s().p("AiOBbIAAi1IAAAAIAAA9IEdAAIAAB4g");
	this.shape_32.setTransform(8.325,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},18).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},2).wait(75));

	// Layer_8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKBaIAAizIAAAAIAAAuIAVAAIAABtIgVAAIAAAYg");
	this.shape_33.setTransform(-4.875,-2.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaBaIAAizIABAAIAAAuIA0AAIAABtIg0AAIAAAYg");
	this.shape_34.setTransform(-3.3,-2.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqBaIAAizIABAAIAAAuIBUAAIAABtIhUAAIAAAYg");
	this.shape_35.setTransform(-1.7,-2.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag6BaIAAizIABAAIAAAuIB0AAIAABtIh0AAIAAAYg");
	this.shape_36.setTransform(-0.125,-2.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhPBaQgKhYAKhbIABAAIAAAuICjAAIAABtIijAAIAAAYg");
	this.shape_37.setTransform(1.9625,-2.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhkBaQgUhXAUhcIABAAIAAAuIDSAAIAABtIjSAAIAAAYg");
	this.shape_38.setTransform(4.05,-2.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ah4BaQgghVAgheIAAAAIAAAuIEBAAIAABtIkBAAIAAAYg");
	this.shape_39.setTransform(6.1428,-2.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},15).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},5).wait(75));

	// Layer_13
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#808080").s().p("AgKBaIAAizIAAAAIAAAuIAVAAIAABtIgVAAIAAAYg");
	this.shape_40.setTransform(-4.875,-2.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#808080").s().p("AgaBaIAAizIABAAIAAAuIA0AAIAABtIg0AAIAAAYg");
	this.shape_41.setTransform(-3.3,-2.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#808080").s().p("AgqBaIAAizIABAAIAAAuIBUAAIAABtIhUAAIAAAYg");
	this.shape_42.setTransform(-1.7,-2.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s().p("Ag6BaIAAizIABAAIAAAuIB0AAIAABtIh0AAIAAAYg");
	this.shape_43.setTransform(-0.125,-2.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#808080").s().p("AhRBaIAAizIAAAAIAAAuICjAAIAABtIijAAIAAAYg");
	this.shape_44.setTransform(2.225,-2.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#808080").s().p("AhpBaIAAizIABAAIAAAuIDSAAIAABtIjSAAIAAAYg");
	this.shape_45.setTransform(4.575,-2.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#808080").s().p("AiABaIAAizIAAAAIAAAuIEBAAIAABtIkBAAIAAAYg");
	this.shape_46.setTransform(6.925,-2.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AiABaIAAizIAAAAIAAAuIEBAAIAABtIkBAAIAAAYg");
	this.shape_47.setTransform(6.925,-2.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},13).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},2).to({state:[]},5).wait(75));

	// Layer_14
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_48.setTransform(-4.875,-21.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYA5IAAhxIAxAAIAABxg");
	this.shape_49.setTransform(-3.5,-21.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAABxg");
	this.shape_50.setTransform(-2.125,-21.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag0A5IAAhxIBpAAIAABxg");
	this.shape_51.setTransform(-0.75,-21.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhNA5QgOg4AOg5IChAAIAABxg");
	this.shape_52.setTransform(1.75,-21.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhmA5Qgcg2Acg7IDbAAIAABxg");
	this.shape_53.setTransform(4.25,-21.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ah+A5Qgrg0Arg9IETAAIAABxg");
	this.shape_54.setTransform(6.7438,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},11).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},9).wait(75));

	// Layer_9
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#808080").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_55.setTransform(-4.875,-21.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#808080").s().p("AgYA5IAAhxIAxAAIAABxg");
	this.shape_56.setTransform(-3.5,-21.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AgmA5IAAhxIBNAAIAABxg");
	this.shape_57.setTransform(-2.125,-21.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#808080").s().p("Ag0A5IAAhxIBpAAIAABxg");
	this.shape_58.setTransform(-0.75,-21.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#808080").s().p("AhQA5IAAhxIChAAIAABxg");
	this.shape_59.setTransform(2.1,-21.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808080").s().p("AhtA5IAAhxIDbAAIAABxg");
	this.shape_60.setTransform(4.95,-21.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808080").s().p("AiJA5IAAhxIETAAIAABxg");
	this.shape_61.setTransform(7.8,-21.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AiJA5IAAhxIETAAIAABxg");
	this.shape_62.setTransform(7.8,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55}]},9).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},2).to({state:[]},9).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-74.7,45.5,101.6);


(lib.Letter_A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6gdIgMgmICLAAIACAFIhkCCg");
	this.shape.setTransform(33.725,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGgSIgOgxIA3gsIBGAAIAsB2IhzBpIgoiCg");
	this.shape_1.setTransform(36.525,11.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhRgHIgSg7IAZhYIBWAAIBYDnIiEBOIgxiig");
	this.shape_2.setTransform(39.35,15.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhaAEIgVhGIgGiEIBpAAICCFZIiUA0Ig8jDg");
	this.shape_3.setTransform(41.85,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhWAQIgYhRIgkixIB5AAICsHKIikAbIhFjjg");
	this.shape_4.setTransform(43.15,24.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDEeIiuo7ICMAAIDXI7g");
	this.shape_5.setTransform(44.4,28.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(54));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhbAFIC3gJIgCAFIgBAEg");
	this.shape_6.setTransform(9.225,56.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbAJIAZgRICZAGIAEAGIgGAFg");
	this.shape_7.setTransform(9.15,56.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhbASIANgjICqAYIgCAGIgBAFg");
	this.shape_8.setTransform(9.225,55.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhbAGIC3gKIgCAEIgBAGg");
	this.shape_9.setTransform(18.1,57.3,1,1,0,0,0,8.9,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AheASIAOgjICuAJIgIAag");
	this.shape_10.setTransform(9.45,55.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhgAVIAOgiICzgHIgNApg");
	this.shape_11.setTransform(9.7,55.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhiAdIANgjIC4gWIgLAkIgGAVg");
	this.shape_12.setTransform(18.1,57.25,1,1,0,0,0,8.2,2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah8ByIBRjVICogOIhFDjg");
	this.shape_13.setTransform(12.525,45.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiXDIICUmIICbgHIh7GPg");
	this.shape_14.setTransform(15.15,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiwEeIDWo7ICMAAIiMHJIgiByg");
	this.shape_15.setTransform(18.15,57.2,1,1,0,0,0,0.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{regX:0,regY:0,x:9.225,y:55.475}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{regX:8.9,regY:1.8,x:18.1,y:57.25}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(59));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVg9IgXBhIgEAZIgOABg");
	this.shape_16.setTransform(21.675,42.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQg9IAiAxIAqBKIh3AAg");
	this.shape_17.setTransform(25.525,42.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhvA+IAqh7IBeABIBXB6g");
	this.shape_18.setTransform(30.775,42.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhvA+IAqh7ICaAAIAbB7g");
	this.shape_19.setTransform(30.775,42.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ah/A+IAqh7IDVAAIggB7g");
	this.shape_20.setTransform(32.375,42.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},19).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(52));

	// Micro_Animation_2
	this.instance = new lib.FlyIn("synched",0,false);
	this.instance.setTransform(38.35,16.3,0.4561,0.2585,-122.5635,0,0,108.5,-44.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(60));

	// Micro_Animation_2
	this.instance_1 = new lib.FlyIn("synched",0,false);
	this.instance_1.setTransform(28.45,-16.25,0.4561,0.2585,97.4744,0,0,-13.9,-72.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(65));

	// Layer_5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#808080").s().p("Ag6gdIgMgmICLAAIACAFIhkCCg");
	this.shape_21.setTransform(33.725,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#808080").s().p("AhGgSIgOgxIA3gsIBGAAIAsB2IhzBpIgoiCg");
	this.shape_22.setTransform(36.525,11.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#808080").s().p("AhRgHIgSg7IAZhYIBWAAIBYDnIiEBOIgxiig");
	this.shape_23.setTransform(39.35,15.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#808080").s().p("AhaAEIgVhGIgGiEIBpAAICCFZIiUA0Ig8jDg");
	this.shape_24.setTransform(41.85,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#808080").s().p("AhWAQIgYhRIgkixIB5AAICsHKIikAbIhFjjg");
	this.shape_25.setTransform(43.15,24.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("AgDEeIiuo7ICMAAIDXI7g");
	this.shape_26.setTransform(44.4,28.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDEeIiuo7ICMAAIDXI7g");
	this.shape_27.setTransform(44.4,28.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},12).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},4).wait(54));

	// Layer_6
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808080").s().p("AhbAFIC3gJIgCAFIgBAEg");
	this.shape_28.setTransform(9.225,56.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#808080").s().p("AhbAJIAZgRICZAGIAEAGIgGAFg");
	this.shape_29.setTransform(9.15,56.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#808080").s().p("AhbASIANgjICqAYIgCAGIgBAFg");
	this.shape_30.setTransform(18.1,57.25,1,1,0,0,0,8.9,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808080").s().p("AhbAGIC3gKIgCAEIgBAGg");
	this.shape_31.setTransform(18.1,57.3,1,1,0,0,0,8.9,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808080").s().p("AheASIAOgjICuAJIgIAag");
	this.shape_32.setTransform(9.45,55.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#808080").s().p("AhgAVIAOgiICzgHIgNApg");
	this.shape_33.setTransform(9.7,55.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#808080").s().p("AhiAdIANgjIC4gWIgLAkIgGAVg");
	this.shape_34.setTransform(18.1,57.25,1,1,0,0,0,8.2,2.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#808080").s().p("Ah8ByIBRjVICogOIhFDjg");
	this.shape_35.setTransform(12.525,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#808080").s().p("AiXDIICUmIICbgHIh7GPg");
	this.shape_36.setTransform(15.15,37.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#808080").s().p("AixEeIDXo7ICLAAIiKHJIgkByg");
	this.shape_37.setTransform(18.15,57.2,1,1,0,0,0,0.4,28.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AixEeIDXo7ICLAAIiKHJIgkByg");
	this.shape_38.setTransform(18.15,57.2,1,1,0,0,0,0.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},4).wait(59));

	// Layer_7
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808080").s().p("AAVg9IgXBhIgEAYIgOACg");
	this.shape_39.setTransform(21.675,42.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#808080").s().p("AgQg9IAiAxIAqBKIh3AAg");
	this.shape_40.setTransform(25.525,42.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#808080").s().p("AhvA+IAqh7IBeAAIBXB7g");
	this.shape_41.setTransform(30.775,42.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#808080").s().p("AhvA+IAqh7IB1AAIBAB7g");
	this.shape_42.setTransform(30.775,42.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s().p("AhvA+IAqh7ICMAAIApB7g");
	this.shape_43.setTransform(30.775,42.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhvA+IAqh7ICMAAIApB7g");
	this.shape_44.setTransform(30.775,42.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},15).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},3).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.4,69.2,115.19999999999999);


// stage content:
(lib._22_BoYu_Apple_Company = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [130,174];
	// timeline functions:
	this.frame_130 = function() {
		/* Click to Go to Web Page
		By clicking on the button called fb_btn which will load Apple Facebook Page in a new browser window.
		*/
		
		this.fb_btn.addEventListener("click", fbpage);
		
		function fbpage() {
			window.open("https://www.facebook.com/apple/", "_blank");
		}
		
		/* Click to Go to Web Page
		By clicking on the button called ig_btn which will load Apple Instagram Page in a new browser window.
		*/
		
		this.ig_btn.addEventListener("click", igpage);
		
		function igpage() {
			window.open("https://www.instagram.com/apple/", "_blank");
		}
	}
	this.frame_174 = function() {
		/* To stop action
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(44).call(this.frame_174).wait(1));

	// Fb_btn
	this.fb_btn = new lib.fb_btn();
	this.fb_btn.name = "fb_btn";
	this.fb_btn.setTransform(134.85,180.95,1.4587,1.4587);
	this.fb_btn._off = true;
	new cjs.ButtonHelper(this.fb_btn, 0, 1, 2, false, new lib.fb_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fb_btn).wait(130).to({_off:false},0).wait(45));

	// Ig_btn
	this.ig_btn = new lib.ig_btn();
	this.ig_btn.name = "ig_btn";
	this.ig_btn.setTransform(-51.1,232.3,1.3016,1.3016);
	this.ig_btn._off = true;
	new cjs.ButtonHelper(this.ig_btn, 0, 1, 2, false, new lib.ig_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ig_btn).wait(130).to({_off:false},0).wait(45));

	// Airpod_pro_txt
	this.instance = new lib.Airpod_pro_txt();
	this.instance.setTransform(203,242.6);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({alpha:1},19).wait(46));

	// Airpod_pro
	this.instance_1 = new lib.airpod_mc();
	this.instance_1.setTransform(285.8,181.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({x:200},19).wait(46));

	// Macbook_txt
	this.instance_2 = new lib.Macbook_txt();
	this.instance_2.setTransform(57.05,242.85);
	this.instance_2.alpha = 0.1016;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({alpha:1},19).wait(66));

	// Macbook
	this.instance_3 = new lib.macbook_mc();
	this.instance_3.setTransform(-38.1,180.85);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({x:56.9},19).wait(66));

	// Ipadpro_txt
	this.instance_4 = new lib.Ipadpro_txt();
	this.instance_4.setTransform(203,120.35);
	this.instance_4.alpha = 0.1016;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({alpha:1},19).wait(86));

	// Ipadpro
	this.instance_5 = new lib.ipadpro_mc();
	this.instance_5.setTransform(293.05,51.45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).to({x:203.05},19).wait(86));

	// Iphone12_txt
	this.instance_6 = new lib.iphone12_txt();
	this.instance_6.setTransform(52.6,120.35);
	this.instance_6.alpha = 0.1016;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},0).to({alpha:1},19).wait(106));

	// Iphone12
	this.instance_7 = new lib.iphone12_mc();
	this.instance_7.setTransform(-36.15,53.45);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({x:48.85},19).wait(106));

	// Apple_logo
	this.instance_8 = new lib.Apple_logo_gif();
	this.instance_8.setTransform(130.05,124.1,0.1494,0.1494,0,0,0,155.7,180.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).wait(125));

	// Apple_txt
	this.instance_9 = new lib.Letter_P();
	this.instance_9.setTransform(116.2,160.9,0.7977,0.9316,0,0,0,-14.3,27.6);

	this.instance_10 = new lib.Letter_E();
	this.instance_10.setTransform(201.65,159.05,1.0949,0.9194,0,0,0,-14.3,26.1);

	this.instance_11 = new lib.Letter_L();
	this.instance_11.setTransform(184.1,154.85,0.7994,0.936,0,0,0,19.4,20.6);

	this.instance_12 = new lib.Letter_P();
	this.instance_12.setTransform(72.75,160.4,0.7977,0.9316,0,0,0,-14.3,27.6);

	this.instance_13 = new lib.Letter_A();
	this.instance_13.setTransform(16.65,157.8,0.7789,0.8634,0,0,0,9.2,55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[]},50).wait(125));

	// Black_Bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATPzSIAFAAAzTTOMAAAgmbATPzSMAABAmlAzKzSMAmZAAAATLTTMgmVAAA");
	this.shape.setTransform(125.375,124.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(26,123,316.1,143.10000000000002);
// library properties:
lib.properties = {
	id: 'D93D5D9EBAC00946A959C2A87C4D02F5',
	width: 250,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/22_BoYu_Apple_Company_atlas_1.png?1605062033143", id:"22_BoYu_Apple_Company_atlas_1"},
		{src:"images/22_BoYu_Apple_Company_atlas_2.png?1605062033144", id:"22_BoYu_Apple_Company_atlas_2"},
		{src:"images/22_BoYu_Apple_Company_atlas_3.png?1605062033144", id:"22_BoYu_Apple_Company_atlas_3"}
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
an.compositions['D93D5D9EBAC00946A959C2A87C4D02F5'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;