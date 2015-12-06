/*
   JJJ  OO  L    FFFF
     J O  O L    F
  J  J O  O L    FFF
   JJJ  OO  LLLL F
  By ~ Conor ~ O'Brien
*/

// polyfills from developer.mozilla.org
{	
String.prototype.repeat||(String.prototype.repeat=function(t){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var r=""+this;if(t=+t,t!=t&&(t=0),0>t)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==r.length||0==t)return"";if(r.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var e="";1==(1&t)&&(e+=r),t>>>=1,0!=t;)r+=r;return e});Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);if(!y)return!1}n++}return!0});Math.clz32=Math.clz32||function(){"use strict";var t=[32,31,0,16,0,30,3,0,15,0,0,0,29,10,2,0,0,0,12,14,21,0,19,0,0,28,0,25,0,9,1,0,17,0,4,,0,0,11,0,13,22,20,0,26,0,0,18,5,0,0,23,0,27,0,6,0,24,7,0,8,0,0,0];return function(r){var u=Number(r)>>>0;return u|=u>>>1,u|=u>>>2,u|=u>>>4,u|=u>>>8,u|=u>>>16,u=t[Math.imul(u,116069625)>>>26]}}();Math.trunc=Math.trunc||function(t){return 0>t?Math.ceil(t):Math.floor(t)};Math.sign=Math.sign||function(n){return n=+n,0===n||isNaN(n)?n:n>0?1:-1};Math.imul=Math.imul||function(t,u){var a=t>>>16&65535,i=65535&t,n=u>>>16&65535,r=65535&u;return i*r+(a*r+i*n<<16>>>0)|0};!function(){function t(t,n,o){return"undefined"==typeof o||0===+o?Math[t](n):(n=+n,o=+o,isNaN(n)||"number"!=typeof o||o%1!==0?NaN:(n=n.toString().split("e"),n=Math[t](+(n[0]+"e"+(n[1]?+n[1]-o:-o))),n=n.toString().split("e"),+(n[0]+"e"+(n[1]?+n[1]+o:o))))}Math.round10||(Math.round10=function(n,o){return t("round",n,o)}),Math.floor10||(Math.floor10=function(n,o){return t("floor",n,o)}),Math.ceil10||(Math.ceil10=function(n,o){return t("ceil",n,o)})}();Math.cbrt=Math.cbrt||function(t){var a=Math.pow(Math.abs(t),1/3);return 0>t?-a:a};Math.expm1=Math.expm1||function(t){return Math.exp(t)-1};Math.fround=Math.fround||function(n){return function(r){return n[0]=r,n[0]}}(Float32Array(1));
}

// define various functions
{ 
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
}

// define prototype shorts
{
	var ars = {
		"s":1,
		"m":1,
		"p":1,
		"r":0,
	}
	Array.prototype.getRandEl = function(){
		return this[Math.floor(Math.random()*this.length)];
	}
	Array.prototype.r = Array.prototype.getRandEl;
	Array.prototype.s = Array.prototype.shift;
	Array.prototype.m = function(f){
		if(typeof f=="function"){
			return this.map(f);
		} else {
			try {
				silentEvalJolf(f);
				return this.map(function(a,b,c){
					silentEvalJolf(f);
				});
			} catch(e){
				try {
					eval(f);
					return this.map(function(a,b,c){
						eval(f)(a,b,c);
					});
				} catch(e){
					return "You should try "+["Python","JavaScript","your language name","O","Minkolang","Vitsy","Seriously","Gnaloknim"].getRandEl()+"!";
				}
			}
		}
	}
	Array.prototype.p = Array.prototype.pop;
	String.prototype.r = String.prototype.trim;
	
	//--
	Math._ = function negative(x){
		return -Math.abs(x);
	}
	Math.a = Math.abs;
	Math.A = Math.sign;
	Math.b = Math.cosh;
	Math.B = Math.acosh;
	Math.c = Math.cos;
	Math.C = Math.acos;
	Math.d = Math.sinh;
	Math.D = Math.asinh;
	Math.e = Math.exp;
	Math.f = Math.floor;
	Math.F = Math.floor10;
	Math.g = Math.ceil;
	Math.G = Math.ceil10;
	Math.h = Math.expm1;
	Math.H = function ln(x){
		return Math.log(x);
	}
	Math.i = Math.fround;
	Math.I = Math.hypot;
	Math.p = Math.cbrt;
	Math.P = function cube(x){
		return x*x*x;
	};
	Math.q = Math.sqrt;
	Math.Q = function fortyTwo(){
		return 42;
	}
	Math.r = Math.random;
	Math.R = function randomInteger(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	Math[0]= function randIntFromZero(x){
		return Math.R(0,x)
	}
	Math[1]= function randIntFromOne(x){
		return Math.R(1,x)
	}
	Math.s = Math.sin;
	Math.S = Math.asin;
	Math.t = Math.tan;
	Math.T = Math.atan;
	Math.u = Math.tanh;
	Math.U = Math.atanh;
	Math.v = Math.atan2;
	Math.V = Math.clz32;
	Math.w = Math.trunc;
	Math.W = Math.imul;
	Math.x = Math.round;
	Math.X = Math.round10;
}

// control flow; not working well
var ctl = {
	"W": function(J){
		J.comp += "while(";
		J.haltChecking();
	},
	")": function(J){
		J.comp += "){";
		J.resumeChecking();
	}
}

// constant-arity ops
var ops = {
	" ": function(J){
		var end=J.comp[J.comp.length-1];
		J.comp = ",);".indexOf(end)+1?J.comp.slice(0,-1):J.comp;
		J.comp += "[\"";
		var chrTemp = J.code[++J.index];
		J.comp += chrTemp;
		J.comp += "\"](";
		return ars[chrTemp];
	},
	"a": function(J){
		J.comp += "alert(";
		J.outted = true;
		return 1;
	},
	"A": function(J){
		J.comp += "dictRepl(";
		return 3;
	},
	"B": function(J){
		J.comp += "toBinary(";
		return 1;
	},
	"b": function(J){
		J.comp += "toString(";
		return 2;
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
	"F": function(J){
		J.comp += "getFirst(";
		return 1;
	},
	"g": function(J){
		J.comp += "getLast(";
		return 1;
	},
	"G": function(J){
		J.comp += "split(";
		return 2;
	},
	"h": function(J){
		J.comp += "head(";
		return 1;
	},
	"L": function(J){
		J.comp += "logBASE(";
		return 2;
	},
	"l": function(J){
		J.comp += "length(";
	},
	"O": function(J){
		J.comp += "prod(";
		return 1;
	},
	"m": function(J){
		var x = "Math[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Math[chrTemp]=="function"){
			J.comp += x;
			return Math[chrTemp].length;
		} else {
			J.comp += "(function(){return Math[\""+chrTemp+"\"]})(";
			return 0;
		}
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
	"U": function(J){
		J.comp += "sqrt(";
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
	"y": function(J){
		J.comp += "silentEvalJolf(";
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

// data/arguments
var inf = {
	"E": function(J){
		J.comp += "\"\"";
	},
	"Y": function(J){
		J.comp += "[]";
	},
	"H": function(J){
		J.comp += "H";
	},
	"S": function(J){
		J.comp += "S";
	},
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
	"k": function(J){
		if(!J.enc.k){
			J.prec += "var k=eval(\"[\"+prompt(\"k = \\n(comma separated)\")+\"]\");";
			J.enc.k = true;
		}
		J.comp += "k";
	},
	"K": function(J){
		if(!J.enc.K){
			J.prec += "var K=eval(\"[\"+prompt(\"K = \\n(comma separated)\")+\"]\");";
			J.enc.K = true;
		}
		J.comp += "K";
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

// zero-arity functions
var mod = {
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
	"D": function(J){
		
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

// substitution characters
var sbs = {
	"#": function(J){
		return "()";
	},
	"~N": function(J){
		return "Number";
	},
	"~A": function(J){
		return "Array";
	},
	"~D": function(J){
		return "Date";
	},
	"~o": function(J){
		return "prototype";
	},
	"~S": function(J){
		return "String";
	},
	"~s": function(J){
		return "Set";
	},
	"~w": function(J){
		return "window";
	},
	"}": function(J){
		return "}";
	},
	"»": function(J){
		return "++";
	},
	"«": function(J){
		return "--";
	}
}

// jolf constructor
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
	this.bldPrd = "";
	this.checkQ = true;
	this.prevCk = false;
	this.outted = false;
	this.debug  = false;
	if(code==""){	// easter egg
		this.comp = "var i=+prompt();alert(i);while(i){alert(i)}";
	}
	return this;
}

// in-progress readable format of jolf compiled code
Jolf.prototype.readable = function(){
	var read = this.comp;
	read = read.replace(/Math\["(.)"\]/g,function(match,p1){
		if(typeof Math[p1].name !== "undefined"){
			return "Math."+Math[p1].name;
		} else {
			return match;
		}
	});
	return this.prec+read;
}

Jolf.prototype.haltChecking = function(){
	this.checkQ = false;
}

Jolf.prototype.resumeChecking = function(){
	this.checkQ = true;
}

Jolf.prototype.run = function(){
	if(this.step()) setTimeout(function(J){J.run()},1,this);
	return this;
}

Jolf.prototype.exec = function(){
	if(this.step()) setTimeout(function(J){J.exec()},1,this);
	else {
		var ret = this.total?this.total:this.prec+this.comp;
		return (this.outted?function(f){return f}:alert)(eval(ret));
	}
}

Jolf.prototype.check = function(){
	if(!this.checkQ) return;
	if(this.prevCk) return prevCk = false;
	var consump = this.func.pop();
	if(typeof consump!=="undefined"){
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
		}
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
			} else if(ctl[chr]){	// if the character is a control
				ctl[chr](this);
			} else if(sbs[chr]){
				this.comp += sbs[chr](this);
			} else if(ops[chr]){ // if the character is an operator
				var arity = ops[chr](this);
				if(!arity){
					this.comp += ")";
					this.check();
				} else this.func.push(arity);
			} else if(inf[chr]){	// if the character is data
				inf[chr](this);
			} else if(isNum(chr)){	// if the character is a number
				this.comp += chr;
				//while(isNum(this.code[++this.index])){
				//	this.comp += this.code[this.index];
				//}
				//this.index--;
			} else if(chr!="~"&&chr){
				//this.comp += chr;
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
			} else if(chr=="'"){
				this.comp += "\"";
				this.check();
				this.comp += "\"";
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
			} else if(chr=="#"){
				this.mode = 0;
				this.check();
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
		case 7:	// build predicate mode
			this.bldPrd += this.chr;
			// check the build
			
		break;
	}
	// increment for next step
	this.index++;
	if(this.debug) console.log(this);
	return this;
}

function evalJolf(code){	// lightweight wrapper code
	var instance = new Jolf(code);
	try {
		instance.exec();
	} catch(e){
		console.log(e);
	}
	return instance;
}

function silentEvalJolf(code){
	var x = new Jolf(code);
	x.outted = true;
	while(x.step());
	x.total = "(function(){return "+x.total+"})();";
	return eval(x.total);
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
	
	function div(x,y){
		if(typeof x=="string"){
			return x.replace(new RegExp(y,"g"),"");
		} else if(Array.isArray(x)){
			if(Array.isArray(y)) return 42;	// unimplemented
			return x.filter(function(a,b){return b%y});
		} else if(Array.isArray(y)){
			return 42;	// unimplemented
		}
		return x/y;
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
		if(typeof name=="number") return name % 2 ? "odd" : "even";
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
		return range(1,x+1)||[1];
	}
	
	function stepRange(x,y,s){
		if(typeof x=="number"){
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
		} else if(typeof x=="string"){
			return x.replace(new RegExp(y,"g"),s);
		}
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
	
	function sqrt(x){
		// add operator overloading
		return Math.sqrt(x);
	}
	
	function dictRepl(x,y,z){
		if(typeof y=="number") y+="";
		if(typeof z=="number") z+="";
		y=typeof y=="string"?y.split(""):y;
		z=typeof z=="string"?z.split(""):z;
		var max = Math.max(y.length,z.length);
		var min = Math.min(y.length,z.length);
		for(var i=0;i<max;i++){
			x = x.replace(new RegExp(y[i],"g"),z[i%min]);
		}
		return x;
	}
	
	function toString(N,b){
		return N.toString(b);
	}
	
	function getFirst(x){
		return x[0];
	}
	
	function getLast(x){
		return x[x.length-1];
	}
	
	function split(x,y){
		return x.toString().split(y);
	}
	
	function head(x){
		return x+1;
	}
	
	function decrement(x){
		return x-1;
	}
	
	function length(x){
		return x.length;
	}
	
	(function(N){var x=window[N];delete window[N];window[N]=function(num){return Array.isArray(num)?x(num.join("")):x(num);}})("Number");
}
