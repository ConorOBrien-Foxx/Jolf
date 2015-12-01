/*
   JJJ  OO  L    FFFF
     J O  O L    F
  J  J O  O L    FFF
   JJJ  OO  LLLL F
  By ~ Conor ~ O'Brien
*/

function isNum(x){
	return x==parseInt(x);
}

// why you no have RegExp.escape regularly, JavaScript?!
RegExp.escape = function(s){
	return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
}

// dev tool for detection of existant commands
function isAvailable(cmd){
	return !(ctl[cmd]||ops[cmd]||inf[cmd]||mod[cmd]||sbs[cmd]);
}

var ctl = {	// control flow; not working
	"W": function(J){
		J.comp += "while(";
		J.mode = 7.0;
	}
}

var ops = {	// constant-arity ops
	"a": function(J){
		J.comp += "alert(";
		J.outted = true;
		return 1;
	},
	"B": function(J){
		J.comp += "toBinary(";
		return 1;
	},
	"C": function(J){
		J.comp += "parseInt(";
		return 2;
	},
	"c": function(J){
		J.comp += "console.log(";
		J.outted = true;
		return 1;
	},
	"e": function(J){
		J.comp += "evalJolf(";
		return 1;
	},
	"f": function(J){
		J.comp += "apply(";
		return 2;
	},
	"L": function(J){
		J.comp += "logBASE(";
		return 2;
	},
	"O": function(J){
		J.comp += "prod(";
		return 1;
	},
	"P": function(J){
		J.comp += "Number(";
		return 1;
	},
	"p": function(J){
		J.comp += "stepRange(";
		return 3;
	},
	"Q": function(J){
		J.comp += "square(";
		return 1;
	},
	"R": function(J){
		J.comp += "setTimeout(";
		return 2;
	},
	"r": function(J){
		J.comp += "range(";
		return 2;
	},
	"T": function(J){
		J.comp += "setInterval(\"";
		J.fin = "\"";
		return 2;
	},
	"u": function(J){
		J.comp += "sum(";
		return 1;
	},
	"v": function(J){
		J.comp += "assign(";
		return 2;
	},
	"V": function(J){
		J.comp += "getVar(";
		return 1;
	},
	"z": function(J){
		J.comp += "unaryRange(";
		return 1;
	},
	"+": function(J){
		J.comp += "add(";
		return 2;
	},
	"*": function(J){
		J.comp += "mul(";
		return 2;
	},
	"/": function(J){
		J.comp += "div(";
		return 2;
	},
	"^": function(J){
		J.comp += "pow(";
		return 2;
	},
	"-": function(J){
		J.comp += "sub(";
		return 2;
	},
	"_": function(J){
		J.comp += "neg(";
		return 1;
	},
	".": function(J){
		J.comp += "getProp(";
		return 2;
	},
	"@": function(J){
		J.comp += "charCodeAt(";
		J.mode = 2;
		return 1;
	},
	"~i": function(J){
		J.comp += "(function(x){return x})(";
		return 1;
	},
	"=": function(J){
		J.comp += "equals(";
		return 2;
	},
	"<": function(J){
		J.comp += "less(";
		return 2;
	},
	">": function(J){
		J.comp += "more(";
		return 2;
	}
}

var inf = {	// data/arguments
	"i": function(J){
		if(!J.enc.i){
			J.prec += "var i=prompt(\"i = \");";
			J.enc.i = true;
		}
		J.comp += "i";
	},
	"I": function(J){
		if(!J.enc.I){
			J.prec += "var I=prompt(\"I = \");";
			J.enc.I = true;
		}
		J.comp += "I";
	},
	"j": function(J){
		if(!J.enc.j){
			J.prec += "var j=Number(prompt(\"j = \"));";
			J.enc.j = true;
		}
		J.comp += "j";
	},
	"J": function(J){
		if(!J.enc.J){
			J.prec += "var J=Number(prompt(\"J = \"));";
			J.enc.J = true;
		}
		J.comp += "J";
	},
	"q": function(J){
		J.comp += "\""+J.code+"\"";
	},
	"t": function(J){
		J.comp += "10";
	},
	"~p": function(J){
		J.comp += "Math.PI"
	},
	"~e": function(J){
		J.comp += "Math.E"
	},
	"~P": function(J){
		J.comp += "(1+Math.sqrt(5))/2";
	},
	"~0": function(J){
		J.comp += "0/1";
	},
	"~1": function(J){
		J.comp += "100";
	},
	"~2": function(J){
		J.comp += "1000";
	},
	"~3": function(J){
		J.comp += "10000";
	},
	"~4": function(J){
		J.comp += "100000";
	},
	"": function(){}
}

var mod = {	// zero-arity functions
	"\"": function(J){
		J.comp += "\"";
		J.mode = 1;
	},
	"'": function(J){
		J.mode = 2;
	},
	"[": function(J){
		J.comp += "[";
		J.mode = 3;
	},
	"$": function(J){
		J.mode = 4;
	},
	":": function(J){
		J.mode = 6;
	},
	"{": function(J){
		J.mode = 5;
	},
	"`": function(J){
		J.check();
	},
	"\b": function(J){
		J.outted = true;
	},
	"X": function(J){
		J.index = J.code.length + 1;
	}
}

var sbs = {	// substitution characters
	"#": function(J){
		return "()";
	},
	"N": function(J){
		return "Number";
	},
	"A": function(J){
		return "Array";
	},
	"D": function(J){
		return "Date";
	},
	"p": function(J){
		return "prototype";
	},
	"S": function(J){
		return "String";
	},
	"s": function(J){
		return "Set";
	},
	"M": function(J){
		return "Math";
	},
	"w": function(J){
		return "window";
	}
}

function Jolf(code){
	this.code   = code;
	this.enc    = {};
	this.fin    = "";
	this.prec   = "";
	this.comp   = "";
	this.index  = 0;
	this.mode   = 0;
	this.func   = [];
	this.total  = "";
	this.build  = "";
	this.bldChr = ""; 
	this.outted = false;
	this.debug  = false;
	if(code==""){	// easter egg
		this.comp = "var i=+prompt();alert(i);while(i){alert(i)}";
	}
	return this;
}

Jolf.prototype.run = function(){
	while(this.step());
	return this;
}

Jolf.prototype.exec = function(){
	var ret = this.total?this.total:this.prec+this.comp;
	return (this.outted?function(f){return f}:alert)(eval(ret));
}

Jolf.prototype.check = function(){
	var consump = this.func.pop();
	if(typeof consump!=="undefined"){
		consump--;
		if(!consump){
			this.comp += ")";
			x = this.check();
			if(x>0){
				var lst = this.comp.slice(-1);
				this.comp = this.comp.slice(0,-1);
				this.comp += this.fin + lst;
				this.fin = "";
			}
			return 0;
		} else {
			this.comp += ",";
			this.func.push(consump);
			return 0.5;
		}
	} else {
		this.comp += ";";
		return 1
	}
}

Jolf.prototype.step = function(){
	// checking index bounds / func stack
	if(this.index > this.code.length){
		this.total = this.prec+this.comp;
		return false;
	}
	// var for char
	var chr = this.code[this.index];
	
	console.log(this.bldChr[0]=="~",this.bldChr,chr);
	// extended functions
	if(this.bldChr.length<2&&this.bldChr[0]=="~"){
		this.bldChr += chr;
		chr = this.bldChr;
	} else if(this.bldChr.length>=2){
		this.bldChr = "";
	} else if(chr=="~"){
		this.bldChr = "~";
		this.index++;
		return this;
	}
	
	switch(this.mode){
		case 0:
			// read the character and get its type
			if(mod[chr]){	// if the character is a modifier
				mod[chr](this);
			} else if(sbs[chr]){
				this.comp += sbs[chr](this);
			} else if(ops[chr]){ // if the character is an operator
				var arity = ops[chr](this);
				this.func.push(arity);
			} else if(inf[chr]){	// if the character is data
				inf[chr](this);
			} else if(isNum(chr)){	// if the character is a number
				this.comp += chr;
				//while(isNum(this.code[++this.index])){
				//	this.comp += this.code[this.index];
				//}
				//this.index--;
			} else if(chr!="~"&&chr){
				this.comp += chr;
			}
			if(inf[chr]||isNum(chr)){	// activate consumption
				// add final mark, if any, and reset
				//this.comp += this.fin;
				//this.fin  = "";
				this.check();
			}
		break;
		case 1:	// string mode
			if(chr=="\\"){	// escape next character
				this.comp += this.code[this.index++];
				this.comp += chr;
			} else if(chr=="\""||typeof chr=="undefined"){
				this.mode = 0;
				this.comp += "\"";
				this.check();
			} else if(chr==this.fin){	// escape currnet charater
				this.comp += "\\" + chr;
			} else {
				this.comp += chr;
			}
		break;
		case 2:
			this.comp += "\"";
			this.comp += chr;
			this.comp += "\"";
			this.check();
			this.mode = 0;
		break;
		case 3:	// array mode
			if(chr=="\\"){
				this.index++;
			}
			this.comp += this.code[this.index];
			if(chr=="]"){
				this.mode = 0;
				this.check();
			}
		break;
		case 4:	// JS literal mode
			if(chr=="$"){
				this.mode = 0;
				break;
			}
			if(chr=="\\") this.index++;
			this.comp += this.code[this.index];
		break;
		case 5:	// golfy array
			if(chr=="\\")this.index++;
			if(chr!="}"&&chr){
				this.build += this.code[this.index];
			} else if(chr=="}") {
				var innerJolf = new Jolf(this.build);
				// ensuring we don't have multiple var calls
				innerJolf.enc = this.enc;
				innerJolf.run();
				// if any new var calls were made
				this.prec += innerJolf.prec;
				
				// the comp contains (hopefully) a series of entries split by semicolons
				var golfArr = innerJolf.comp.split(";");
				// removing the trailing semicolon
				golfArr.pop();      // safety ~~~.
				// composing the array           v
				this.comp += "[" + golfArr.join(",") + "]";
				// ensuring we don't run into the ) again
				//this.index++;
				// checking
				this.check();
			}
		break;
		case 6:	// JS literal mode (short)
			this.comp += this.code[this.index];
			this.mode = 0;
		break;
		case 7.0:	// control structure mode: look for condition(s)
			
		break;
	}
	// increment for next step
	this.index++;
	if(this.debug) console.log(this);
	return this;
}

function evalJolf(code){	// lightweight wrapper code
	var instance = new Jolf(code);
	instance.run();
	try {
		instance.exec();
	} catch(e){
		console.log(e);
	}
	return instance;
}

{// functions
	function add(a,b){
		if(Array.isArray(a)){
			if(Array.isArray(b)){
				return a.concat(b);
			} else {
				a.push(b);
			}
		}
		return a + b;
	}
	
	function sub(a,b){
		if(typeof a=="string") return a.replace(RegExp.escape(b),"");
		else if(Array.isArray(a)) return a.filter(function(x){return x!=b});
		else if(a instanceof Set){
			a.delete(b);
			return a;
		}
		return a - b;
	}
	
	function mul(x,y){
		if(typeof x=="string"&&typeof y=="number"){
			return x.repeat(y);
		} else if(typeof y=="string"&&typeof x=="number"){
			return y.repeat(x);
		} else if(Array.isArray(x)&&typeof y=="number"){
			var a = [];
			for(var i=0;i<y;i++){
				a.push(x);
			}
			return a;
		}
		return x*y;
	}
	
	function getProp(a,b){
		return a[b];
	}
	
	function neg(a){
		if(typeof a=="string"){
			return a.split("").reverse().join("");
		} else if(typeof a=="number"){
			return -a;
		} else if(typeof a=="array"){
			return a.reverse();
		} else {
			return a;
		}
	}
	
	function quote(x){
		if(sbs[x]){
			x = sbs[x];
		} else if(ops[x]){
			x = ops[x].toString().match(/J\.comp \+= "(.+?)"/)[1];
		}
		return "\""+x+"\"";
	}
	
	function assign(name,value){
		return window[name] = value;
	}
	
	function getVar(name){
		return window[name];
	}
	
	function apply(f,a){
		return f.apply(window,a);
	}
	
	function charCodeAt(x){
		return x.charCodeAt();
	}
	
	function pow(x,y){
		return Math.pow(x,y);
	}
	
	function logBASE(a,b){
		return Math.log(a)/Math.log(b);
	}
	
	function toBinary(a){
		return (a).toString(2);
	}
	
	function square(x){
		if(Array.isArray(x)){
			var a = [];
			for(var i=0;i<x.length;i++){
				a.push(x);
			}
			return x;
		}
		return x*x;
	}
	
	function range(x,y){
		var v = [];
		var min = x;
		var max = y;
		if(x>=y){
			min = y+1;
			max = x+1;
		}
		for(var i=min;i<max;i++){
			v.push(i);
		}
		return v;
	}
	
	function unaryRange(x){
		return range(1,x+1);
	}
	
	function stepRange(x,y,s){
		var v = [];
		var min = x;
		var max = y;
		if(x>=y){
			min = y+1;
			max = x+1;
		}
		for(var i=min;i<max;i+=s){
			v.push(i);
		}
		return v;
	}
	
	function equals(x,y){
		return x == y;
	}
	
	function less(x,y){
		return x < y;
	}
	
	function more(x,y){
		return y < x;
	}
	
	function prod(x){
		if(Array.isArray(x)){
			return x.reduce(function(a,b){return a*b});
		}
		return Number(x.toString().split("").map(Number).reduce(function(a,b){return a*b}))
	}
	
	(function(f){window.alert=function(a,J){if(a==Infinity){f(Infinity)}else{f(JSON.stringify(a))};(J||{}).outted=true;}})(function(x){
		var iu = document.getElementById("output");
		// on browser?
		if(iu){
			iu.innerHTML += x + "<br>";
		} else {
			alert(x);
		}
	});
	
	(function(N){var x=window[N];delete window[N];window[N]=function(num){return Array.isArray(num)?x(num.join("")):x(num);}})("Number");
}

{	// polyfills from developer.mozilla.org
String.prototype.repeat||(String.prototype.repeat=function(t){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var r=""+this;if(t=+t,t!=t&&(t=0),0>t)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==r.length||0==t)return"";if(r.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var e="";1==(1&t)&&(e+=r),t>>>=1,0!=t;)r+=r;return e});
}

