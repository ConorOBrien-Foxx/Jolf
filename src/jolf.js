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

var ops = {	// constant-arity ops
	"a": function(J){
		J.comp += "alert(";
		return 1;
	},
	"+": function(J){
		J.comp += "add(";
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
	"N": function(J){
		J.comp += "Number";
	},
	"A": function(J){
		J.comp += "Array";
	},
	"p": function(J){
		J.comp += "prototype";
	},
	"S": function(J){
		J.comp += "String";
	},
	"s": function(J){
		J.comp += "Set";
	},
	"M": function(J){
		J.comp += "Math";
	},
	"w": function(J){
		J.comp += "window";
	},
	"q": function(J){
		J.comp += J.code;
	},
	"": function(){}
}

var mod = {	// zero-arity functions
	":": function(J){
		J.comp += "\"";
		J.fin = "\"";
	},
	"\"": function(J){
		J.comp += "\"";
		J.mode = 1;
	},
	"'": function(J){
		J.comp += "\"";
		J.mode = 2;
	}
}

function Jolf(code){
	if(code==""){	// easter egg
		this.comp = "var i=+prompt();alert(i);while(i){alert(i)}";
	}
	this.code   = code;
	this.enc    = {};
	this.fin    = "";
	this.prec   = "";
	this.comp   = "";
	this.index  = 0;
	this.mode   = 0;
	this.func   = [];
	this.total  = "";
	this.outted = false;
	return this;
}

Jolf.prototype.run = function(){
	while(this.step()){};
	return this;
}

Jolf.prototype.exec = function(){
	if(this.total) return eval(this.total);
	else return eval(this.prec+this.comp);
}

Jolf.prototype.check = function(){
	var consump = this.func.pop();
	if(typeof consump!=="undefined"){
		consump--;
		if(!consump){
			this.comp += ")";
			this.check();
		} else {
			this.comp += ",";
			this.func.push(consump);
		}
	} else {
		this.comp += ";";
	}
}

Jolf.prototype.step = function(){
	// checking index bounds / func stack
	if(this.index > this.code.length){
		this.total = this.prec+this.comp;
		return false;
	}
	// var for char
	var chr = this.code[this.index];// || "";
	
	switch(this.mode){
		case 0:
			// read the character and get its type
			if(mod[chr]){	// if the character is a modifier
				mod[chr](this);
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
			}
			if(inf[chr]||isNum(chr)){	// activate consumption
				// add final mark, if any, and reset
				this.comp += this.fin;
				this.fin  = "";
				this.check();
			}
		break;
		case 1:	// string mode
			if(chr=="\\"){	// escape next character
				this.comp+=this.code[this.index++];
				this.comp+=chr;
			} else if(chr=="\""||typeof chr=="undefined"){
				this.mode = 0;
				this.comp+="\"";
				this.check();
			} else {
				this.comp+=chr;
			}
		break;
		case 2:
			this.comp+=this.code[this.index++];
			this.comp+="\"";
			this.check();
		break;
	}
	// increment for next step
	this.index++;
	return this;
}

function evalJolf(code){	// lightweight wrapper code
	var instance = new Jolf(code);
	instance.run();
	instance.exec();
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
}
