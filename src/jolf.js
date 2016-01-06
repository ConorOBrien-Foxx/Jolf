/*
   JJJ  OO  L    FFFF
     J O  O L    F
  J  J O  O L    FFF
   JJJ  OO  LLLL F
  By ~ Conor ~ O'Brien
*/

// polyfills from developer.mozilla.org
{
String.prototype.repeat||(String.prototype.repeat=function(t){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var r=""+this;if(t=+t,t!=t&&(t=0),0>t)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==r.length||0==t)return"";if(r.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var e="";1==(1&t)&&(e+=r),t>>>=1,0!=t;)r+=r;return e});Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);if(!y)return!1}n++}return!0});Math.clz32=Math.clz32||function(J){"use strict";var t=[32,31,0,16,0,30,3,0,15,0,0,0,29,10,2,0,0,0,12,14,21,0,19,0,0,28,0,25,0,9,1,0,17,0,4,,0,0,11,0,13,22,20,0,26,0,0,18,5,0,0,23,0,27,0,6,0,24,7,0,8,0,0,0];return function(r){var u=Number(r)>>>0;return u|=u>>>1,u|=u>>>2,u|=u>>>4,u|=u>>>8,u|=u>>>16,u=t[Math.imul(u,116069625)>>>26]}}();Math.trunc=Math.trunc||function(t){return 0>t?Math.ceil(t):Math.floor(t)};Math.sign=Math.sign||function(n){return n=+n,0===n||isNaN(n)?n:n>0?1:-1};Math.imul=Math.imul||function(t,u){var a=t>>>16&65535,i=65535&t,n=u>>>16&65535,r=65535&u;return i*r+(a*r+i*n<<16>>>0)|0};!function(J){function t(t,n,o){return"undefined"==typeof o||0===+o?Math[t](n):(n=+n,o=+o,isNaN(n)||"number"!=typeof o||o%1!==0?NaN:(n=n.toString().split("e"),n=Math[t](+(n[0]+"e"+(n[1]?+n[1]-o:-o))),n=n.toString().split("e"),+(n[0]+"e"+(n[1]?+n[1]+o:o))))}Math.round10||(Math.round10=function(n,o){return t("round",n,o)}),Math.floor10||(Math.floor10=function(n,o){return t("floor",n,o)}),Math.ceil10||(Math.ceil10=function(n,o){return t("ceil",n,o)})}();Math.cbrt=Math.cbrt||function(t){var a=Math.pow(Math.abs(t),1/3);return 0>t?-a:a};Math.expm1=Math.expm1||function(t){return Math.exp(t)-1};Math.fround=Math.fround||function(n){return function(r){return n[0]=r,n[0]}}(Float32Array(1));Math.log10=Math.log10||function(t){return Math.log(t)/Math.LN10};Math.log2=Math.log2||function(t){return Math.log(t)/Math.LN2};Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);if(!y)return!1}n++}return!0});Math.hypot=Math.hypot||function(J){for(var t=0,r=arguments.length,n=0;r>n;n++){if(arguments[n]===1/0||arguments[n]===-(1/0))return 1/0;t+=arguments[n]*arguments[n]}return Math.sqrt(t)};Math.log10=Math.log10||function(t){return Math.log(t)/Math.LN10};String.fromCodePoint||!function(J){var r=function(J){try{var r={},n=Object.defineProperty,t=n(r,r,r)&&n}catch(e){}return t}(),n=String.fromCharCode,t=Math.floor,e=function(J){var r,e,o=16384,i=[],a=-1,u=arguments.length;if(!u)return"";for(var f="";++a<u;){var g=Number(arguments[a]);if(!isFinite(g)||0>g||g>1114111||t(g)!=g)throw RangeError("Invalid code point: "+g);65535>=g?i.push(g):(g-=65536,r=(g>>10)+55296,e=g%1024+56320,i.push(r,e)),(a+1==u||i.length>o)&&(f+=n.apply(null,i),i.length=0)}return f};r?r(String,"fromCodePoint",{value:e,configurable:!0,writable:!0}):String.fromCodePoint=e}();Array.prototype.fill||(Array.prototype.fill=function(t){if(null==this)throw new TypeError("this is null or not defined");for(var r=Object(this),n=r.length>>>0,i=arguments[1],a=i>>0,e=0>a?Math.max(n+a,0):Math.min(a,n),o=arguments[2],h=void 0===o?n:o>>0,l=0>h?Math.max(n+h,0):Math.min(h,n);l>e;)r[e]=t,e++;return r});
}

{// functions
	// cart product: from http://stackoverflow.com/a/29585751/4119004, minified

	function cartesianProduct(x,y){
		return (function(r){var n=[],t=Array(r.length);return function u(a){if(a==r.length)return n.push(r.map(function(r,n){return r[t[n]]}));for(var e=0;e<r[a].length;++e)t[a]=e,u(a+1)}(0),n})(Array.from(arguments));
	}

	function add(a,b){
		if(arguments.length>2) return add(a,add.apply(window,Array.from(arguments).slice(1)));
		if(Array.isArray(a)){
			if(Array.isArray(b)){
				return a.concat(b);
			} else {
				a.push(b);
			}
		}
		if(typeof a==="string"&&Array.isArray(b)) return a + b.join("");
		return a + b;
	}

	function sub(a,b){
		if(arguments.length>2) return sub(a,sub.apply(window,Array.from(arguments).slice(1)));
		if(typeof a=="string") return a.replace(RegExp.escape(b),"");
		else if(Array.isArray(a)) return a.filter(function(x){return x!=b});
		else if(a instanceof Set){
			a.delete(b);
			return a;
		}
		return a - b;
	}

	function mul(x,y){
		if(arguments.length>2) return mul(x,mul.apply(window,Array.from(arguments).slice(1)));
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
		} else if(Array.isArray(x)&&Array.isArray(y)){
			return cartesianProduct(x,y);
		}
		return x*y;
	}

	function div(x,y){
		if(arguments.length>2) return div(x,div.apply(window,Array.from(arguments).slice(1)));
		if(typeof x=="string"){
			return x.replace(new RegExp(y,"g"),"");
		} else if(Array.isArray(x)){
			if(Array.isArray(y)){
				return x.filter(function(e){return y.indexOf(e)<0;})
			}
			return x.filter(function(a,b){return b%y});
		} else if(Array.isArray(y)){
			return 42;	// unimplemented
		}
		return x/y;
	}

	function getProp(a,b){
		return a[b]||(window[a]||[])[b]||42;
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
		if(arguments.length>2) return pow(x,pow.apply(window,Array.from(arguments).slice(1)));
		return Math.pow(x,y);
	}

	function logBASE(a,b){
		if(arguments.length>2) return logBASE(x,logBASE.apply(window,Array.from(arguments).slice(1)));
		return Math.log(a)/Math.log(b);
	}

	function toBinary(a){
		if(typeof a==="number") return a.toString(2);
		else if(typeof a==="string") return a.toUpperCase();
		else if(Array.isArray(a)){

		}
	}

	function square(x){
		if(Array.isArray(x)){
			var a = [];
			for(var i=0;i<x.length;i++){
				a.push(x);
			}
			return x;
		}
		if(typeof x==="string") return mul(2,x);
		return x*x;
	}

	function range(x,y){
		if(Array.isArray(x)&&Array.isArray(y)){
			return x.filter(function(e){return !y.has(e)})
		}
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

	function rangeInclusive(x,y){
		var v = [];
		var min = x;
		var max = y;
		if(x>=y){
			min = y+1;
			max = x+1;
		}
		for(var i=min;i<=max;i++){
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
		if(arguments.length>2) return equals(x,y)&&equals.apply(window,Array.from(arguments).slice(1));
		if(Array.isArray(x)){
			if(x.length !== y.length) return false;
			x = x.sort(); y = y.sort();
			for(var i=0;i<x.length;i++){
				if(x[i]!=y[i]) return false;
			}
			return true;
		} else return x == y;
	}

	function strictEquals(x,y){
		if(arguments.length>2) return strictEquals(x,y)&&strictEquals.apply(window,Array.from(arguments).slice(1));
		if(typeof x!==typeof y) return false;
		if(Array.isArray(x)){
			if(x.length !== y.length) return false;
			for(var i=0;i<x.length;i++){
				if(x[i]!==y[i]) return false;
			}
			return true;
		} else return x === y;
	}

	function less(x,y){
		if(arguments.length>2) return less(x,y)&&less.apply(window,Array.from(arguments).slice(1));
		return x < y;
	}

	function more(x,y){
		if(arguments.length>2) return more(x,y)&&more.apply(window,Array.from(arguments).slice(1));
		return y < x;
	}

	function prod(x){
		if(Array.isArray(x)){
			return x.reduce(function(a,b){return a*b});
		}
		return Number(x.toString().split("").map(Number).reduce(function(a,b){return a*b}))
	}

	(function(f){window.alert=function(a,J){a=typeof a==="undefined"?"":a;if(a==Infinity){f(Infinity)}else if((document.getElementById("pom").checked)){f(JSON.stringify(a))}else{f(a)};(J||{}).outted=true;}})(function(x){
		var iu = document.getElementById("output");
		// on browser?
		if(iu){
			if(document.getElementById("pom").checked)
				iu.innerHTML += (x||"").replace(/\\([nt])/g,function(a,b){return eval("\"\\"+b+"\"");})+"\n";
			else
				iu.innerHTML += x;

			//iu.innerHTML += x.replace(/\\n/g,"<br>") + "<br>";
		} else {
			alert(x);
		}
	});

	function sqrt(x){
		if(typeof x==="string"){
			// add more!
			return x.replace(/`/g,"in").replace(/~/g,"ll").replace(/@/g,"th").replace(/\[/g,"on").replace(/\]/g,"qu").replace(/#/g,"er")
		}
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

	function simulDictRepl(x,y,z){
		if(typeof y=="number") y+="";
		if(typeof z=="number") z+="";
		y=typeof y=="string"?y.split(""):y;
		z=typeof z=="string"?z.split(""):z;
		x=x.split("");
		for(var i=0;i<x.length;i++){
			if(y.indexOf(x[i])+1) x[i] = z[y.indexOf(x[i])] || x[i];
		}
		return x.join("");
	}

	function toString(N,b){
		return N.toString(b||10);
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
		if(typeof x==="number") return Math.abs(x).toString().length;
		return x.length;
	}

	function doubleNeg(x){
		return !!x;
	}

	function booleanNegation(x){
		return !x;
	}

	function modulo(x,y){
		if(arguments.length>2) return modulo(x,modulo.apply(window,Array.from(arguments).slice(1)));
		if(typeof x==="string") return modulo(x.split(""),y).join("");
		if(Array.isArray(x)) return x.filter(function(e){return e!==y})
		return x%y;
	}

	function and(x,y){
		if(arguments.length>2) return and(x,and.apply(window,Array.from(arguments).slice(1)));
		if(Array.isArray(x)&&Array.isArray(y)){
			return x.filter(function(e){
				return y.indexOf(e)>-1;
			});
		}
		return x&&y;
	}

	function or(x,y){
		if(arguments.length>2) return or(x,or.apply(window,Array.from(arguments).slice(1)));
		if(Array.isArray(x)&&Array.isArray(x)) return x.concat(y);
		return x||y;
	}

	function sum(x){
		if(typeof x==="string") return sum(x.split("").map(function(e){return e.charCodeAt()}));
		else if(typeof x==="number") return sum(x.toString(10).split(""))
		return add.apply(window,x);
	}

	function aSum(x){
		if(typeof x==="string") return aSum(x.split(""))
		else if(typeof x==="number") return aSum(x.toString(10).split(""))
		return sub.apply(window,x);
	}

	function prototypeFunc(chr,func){
		var otherArgs = Array.from(arguments).slice(2);
		console.log(func,chr,func[chr],otherArgs,otherArgs.length);
		if(otherArgs.length == 0)
			return func[chr]();
		else
			return func[chr].apply(func,otherArgs);
	}

	function min(x,y){
		if(arguments.length>2) return min(x,min.apply(window,Array.from(arguments).slice(1)));
		return Math.min(x,y);
	}

	function max(x,y){
		if(arguments.length>2) return max(x,max.apply(window,Array.from(arguments).slice(1)));
		return Math.max(x,y);
	}

	function toHex(x){
		if(typeof x==="number") return x.toString(16);
		else if(typeof x==="string") return x.toLowerCase();
	}

	function ternary(q,n,f){
		return q?n:f;
	}

	function undefChoose(x,y){
		return typeof x==="undefined"?y:x;
	}

	function join(x,y){
		if(typeof x=="string") return join(x.split(""),y);
		return x.join(y);
	}

	function unique(x){
		if(typeof x==="string") return unique(x.split("")).join("");
		var r = [];
		for(var i=0;i<x.length;i++){
			if(!r.has(x[i]))r.push(x[i]);
		}
		return r;
	}

	function divisors(x){
		var r=[];
		for(var i=1;i<=Math.sqrt(x);i++){
			if(!(x%i))r.push(i,x/i);
		}
		return unique(r.sort(function(x,y){return 2*(x>y)-1}));
	}

	function sigmaK(k,n){
		return sum(divisors(n).map(function(x){return Math.pow(x,k)}));
	}

	function levenshtein(m,n){
		return (new Levenshtein(m,n)).distance;
	}

	function singleReplace(a,b,c){
		return a.replace(RegExp(RegExp.escape(b)),c);
	}

	function goodLuck(){
		var n = "";
		for(var i=0;i<arguments.length;i++){
			var arg = arguments[i];
			n += arg.constructor.name[i%arg.constructor.name.length];
		}
		return n;
	}

	function joinByNothing(x){
		return Array.isArray(x)?x.join(""):typeof x==="number"?x*10:typeof x==="string"?x.split(""):"";
	}

	function singleton(x){
		return Array.isArray(x)?x.join("").split(""):typeof x==="string"?x.split("").join(""):typeof x==="number"?(x+"").split("").map(Number).sort(function(a,b){return a-b;}):"";
	}

	(function(N){var x=window[N];delete window[N];window[N]=function(num){return Array.isArray(num)?x(num.join("")):num==""?undefined:x(num);}})("Number");

	var pids=0;
	(function(p){
		window["old_"+p]=window[p];delete window[p];window[p]=function(msg){
			var q=document.getElementById("input").value.split("\n\n")
			var r=q.shift();
			document.getElementById("input").value=q.join("\n\n");
			return r
		};
	})("prompt");
}

// define various functions
{
	Object.defineProperty(Array.prototype,"last",{get(){return this[this.length-1]},set(v){this[this.length-1]=v}});
	Object.defineProperty(RegExp.prototype,"body",{get(){var s=this.toString();return s.slice(s.indexOf("//"),s.lastIndexOf("//"))},set(v){return new RegExp(v)}});

	function JolfRegExp(body,flags){
		// perform class replacemenjts
		body = body.replace(/\\p/g,"[A-Z]").replace(/\\P/g,"[^A-Z]").replace(/\k/g,"[a-z]").replace(/\K/g,"[^a-z]");
		return new RegExp(body,flags);
	}

	function isNum(x){
		return x==parseInt(x);
	}

	// why you no have RegExp.escape regularly, JavaScript?!
	RegExp.escape = function(s){
		return (Array.isArray(s)?s.join(""):s+"").replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
	}

	// dev tool for detection of existant commands
	function isAvailable(cmd){
		return !(ctl[cmd]||ops[cmd]||inf[cmd]||mod[cmd]||sbs[cmd]);
	}

	// factorial
	window.life = {};
	window.life.f = [];
	function factorial(n){
		if(n==0||n==1) return 1;
		if(window.life.f[n]>0) return window.life.f[n];
		return window.life.f[n]=factorial(n-1)*n;
	}

	String.prototype.format = function(J){
		var string = this;
		for(var i=0;i<arguments.length;i++){
			string = string.replace(/%/,arguments[i]);
		}
		return string;
	}
}

// define prototype shorts
{
	var ars = {
		"\"":1,
		"e":1,
		"E":2,
		"i":1,
		"f":1,
		"F":1,
		"h":1,
		"l":2,
		"L":1,
		"m":1,
		"M":1,
		"p":1,
		"r":0,
		"R":0,
		"s":1,
		"S":1,
		"`":1,
	}
	Array.prototype.getRandEl = function(J){
		return this[Math.floor(Math.random()*this.length)];
	}
	Array.prototype.has = function(x){
		if(arguments.length>1) return this.has(x)&&this.has.apply(this,Array.from(arguments).slice(1));
		return !!(this.indexOf(x)+1);
	}
	// from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#comment54935095_10142256
	Array.prototype.shuffle=function(J){var t,h,r=this.length;if(0==r)return this;for(;--r;)t=Math.floor(Math.random()*(r+1)),h=this[r],this[r]=this[t],this[t]=h;return this};

	Array.prototype.e = Array.prototype.every;
	Array.prototype.f = Array.prototype.filter;
	Array.prototype.F = Array.prototype.forEach;
	Array.prototype.h = Array.prototype.has;
	Array.prototype.i = Array.prototype.indexOf;
	Array.prototype.p = Array.prototype.pop;
	Array.prototype.r = Array.prototype.getRandEl;
	Array.prototype.R = Array.prototype.reverse;
	Array.prototype.s = Array.prototype.shift;
	Array.prototype.S = Array.prototype.shuffle;
	Array.prototype.l = Array.prototype.L = Array.prototype.slice;
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
	Array.prototype["`"] = Array.prototype.fill;

	String.prototype.E = String.prototype.replace;
	String.prototype.h = String.prototype.has = function(x){
		if(arguments.length>1) return this.has(x)&&this.has.apply(this,Array.from(arguments).slice(1));
		return !!(1+this.search(new RegExp(x,"g")));
	}
	String.prototype.i = String.prototype.indexOf;
	String.prototype.s = String.prototype.search;
	String.prototype.S = String.prototype.map = function map(f){
		var copy = this.split("");
		return copy.map(f).join("");
	}
	String.prototype.l = String.prototype.L = String.prototype.slice;
	String.prototype.m = function matchStrReg(m,o){
		return this.match(new RegExp(m,o||"g"));
	}
	String.prototype.M = function matchStrRegFlags(m,o){
		return this.match(new RegExp(m,o));
	}
	String.prototype.r = String.prototype.trim;
	String.prototype.R = String.prototype.reverse = function(J){
		return this.split("").reverse().join("");
	}
	String.prototype["`"] = String.prototype.charAt;

	Date.prototype.r   = Date.prototype.getTime;

	Levenshtein.prototype.r = Levenshtein.prototype.inspect;
	Levenshtein.prototype.R = Levenshtein.prototype.distance;
	//--
	Math.memoized = {};
	Math["%"] = function absMod(a,b){
		return Math.abs(a%b);
	}
	Math["\u03a6"] = function customFib(n,s1,s2){
		life[[s1,s2]] = life[[s1,s2]]||[s1,s2];
		if(typeof life[[s1,s2]][n]!=="undefined"){
			return life[[s1,s2]][n];
		} else {
			return Math["\u03a6"](n-1,s1,s2)+Math["\u03a6"](n-2,s1,s2);
		}
	}
	Math[5] = function floorDiv(a,b){
		return Math.floor(a/b);
	}
	Math[8] = Math.lcm = function lcm(a,b){
		return (a*b)/Math[9](a,b);
	}
	Math[9] = Math.gcd = function gcd(a,b){
		if(arguments.length>2) return Math[9](x,Math[9].apply(window,Array.from(arguments).slice(1)));
		return b==0?a:Math[9](b,a%b);
	}
	Math._ = function negative(x){
		return -Math.abs(x);
	}
	Math["!"] = factorial;
	Math["#"] = function(c){
		return Math.memoized[c];
	}
	// from http://www.javascripter.net/faq/numberisprime.htm
	Math["("] = function leastFactor(r){if(isNaN(r)||!isFinite(r))return NaN;if(0==r)return 0;if(r%1||2>r*r)return 1;if(r%2==0)return 2;if(r%3==0)return 3;if(r%5==0)return 5;for(var t=Math.sqrt(r),i=7;t>=i;i+=30){if(r%i==0)return i;if(r%(i+4)==0)return i+4;if(r%(i+6)==0)return i+6;if(r%(i+10)==0)return i+10;if(r%(i+12)==0)return i+12;if(r%(i+16)==0)return i+16;if(r%(i+22)==0)return i+22;if(r%(i+24)==0)return i+24}return r};
	Math[")"] = function factor(t){if(isNaN(t)||!isFinite(t)||t%1!=0||0==t)return[t];if(0>t)return[-(D=factor(-t)).shift()].concat(D);var r=Math["("](t);return t==r?[t]:[r].concat(factor(t/r))}
	Math["{"] = function isPrime(n){
		if(isNaN(n)||!isFinite(n)||n%1||n<2)return false;
		if(n==Math["("](n))return true;
		return false;
	}
	// A000040
	Math.memoized["}"] = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271];
	Math["}"] = function nthPrime(n){
		if(Math.memoized["}"][n]) return Math.memoized["}"][n];
		v = Math.max.apply(null,Math.memoized["}"]);
		while(Math.memoized["}"].length<=n){
			while(!Math["{"](++v));
			Math.memoized["}"].push(v);
		}
		return Math.memoized["}"][n];
	}
	Math.memoized[","] = [[1]];
	Math[","] = function partitions(n){
		if(Math.memoized[","][n]) return Math.memoized[","][n];
		var res = [[n]];
		for(var i=1;i<n;i++){
			var a = n-i;
			var Q = partitions(i);
			for(var q=0;q<Q.length;q++){
				if(Q[q][0]<=a) res.push([a].concat(Q[q]));
			}
		}
		Math.memoized[","][n] = res;
		return res;
	}
	Math["."] = function strictPartitions(n){
		return Math[","](n).filter(function(x){
			var k  = x.length;
			var λk = Math.max.apply(Math,x);
			return λk-k>0;
		});
	}
	Math.a = Math.abs;
	Math.A = Math.sign;
	Math.b = Math.cosh;
	Math.B = Math.acosh;
	Math.c = Math.cos;
	Math.C = Math.acos;
	Math.d = Math.sinh;
	Math.D = Math.asinh;
	Math.e = function base10e(a,b){
		return a*Math.pow(10,b);
	}
	Math.f = Math.floor;
	Math.F = Math.floor10;
	Math.g = Math.ceil;
	Math.G = Math.ceil10;
	Math.h = Math.expm1;
	Math.H = Math.log1p;
	Math.i = Math.fround;
	Math.I = Math.hypot;
	Math.memoized.j = [2,1];
	Math.j = function lucas(n){
		n = Math.floor(n);
		if(Math.memoized.j[n]) return Math.memoized.j[n];
		else return Math.memoized.j[n] = Math.j(n-1)+Math.j(n-2);
	}
	Math.J = Math.phi = Math.PHI = (1+Math.sqrt(5))/2;
	Math.k = function perm(r,n){return factorial(r)/factorial(r-n)}
	Math.K = function binom(r,n){return Math.k(r,n)/factorial(n)}
	Math.memoized.l = [0,1];
	Math.l = function fibonacci(n){
		n = Math.floor(n);
		if(n<=1) return n;
		else if(Math.memoized.l[n]) return Math.memoized.l[n];
		else return Math.memoized.l[n] = Math.l(n-1)+Math.l(n-2);
	}
	Math.L = function phibonacci(n){
		return (Math.pow(Math.PHI,n)-Math.pow(-Math.PHI,-n))/sqrt(5);
	}
	Math.m = function intIfInt(a,b){
		return Math.floor(a)==a?Math.floor(b):b;
	}
	Math.M = function arithmeticMean(a,b){
		return sum(Array.from(arguments))/arguments.length;
	}
	Math.n = function sigFig(a){
		return a.toString(10).replace(/.+\./,"").length;
	}
	Math.N = function geometricMean(a,b){
		return Math.sqrt(prod(Array.from(arguments)))
	}
	Math.o = Math.exp;
	Math.O = function ln(x){
		return Math.log(x);
	}
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
		return Math.R(0,x);
	}
	Math[1]= function randIntFromOne(x){
		return Math.R(1,x);
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
	Math.y = Math.log10;
	Math.Y = function exp10(x){
		return Math.pow(10,x);
	}
	Math.z = Math.log2;
	Math.Z = function exp2(x){
		if(Array.isArray(x)){
			var powerSet = [[]];
			for(var i=0;i<x.length;i++){
				var l=powerSet.length;
				for(var j=0;j<l;j++){
					powerSet.push(powerSet[j].concat(x[i]));
				}
			}
			return powerSet;
		}
		return Math.pow(2,x);
	}
	Math[2] = Math.max;
	Math[3] = Math.min;
	Math[4] = function aSum(x){
		if(typeof x==="string") return aSum(x.split(""))
		else if(typeof x==="number") return aSum(x.toString(10).split(""))
		return sub.apply(window,x);
	}
	Math.$ = function Catalan(n){
		return Math.K(2*n,n)/(n+1);
	}
	Math["/"] = Infinity;
	Math["~"] = function stasisPropmt(){
		return prompt();
	}
	Math[";"] = function evalPrompt(){
		return eval(prompt());
	}
	Math[":"] = function numericPrompt(){
		return Number(prompt());
	}
	Math["`"] = function numericPrompt(){
		return eval("["+prompt("comma seprated")+"]");
	}
	Math["'"] = function parseFloat(n,base){
		return eval(parseInt(n*1e14,base)+"/"+Math.pow(base,14));
	}
	// adding string stuff
	String.A = String.fromCharCode;
	String.a = String.fromCodePoint;
	String.b = "\u1D00\u0299\u1D04\u1D05\u1D07\u0493\u0262\u029C\u026A\u1D0A\u1D0B\u029F\u1D0D\u0274\u1D0F\u1D18\u01EB\u0280s\u1D1B\u1D1C\u1D20\u1D21x\u028F\u1D22";
	String.B = ["\u1D00","\u0299","\u1D04","\u1D05","\u1D07","\u0493","\u0262","\u029C","\u026A","\u1D0A","\u1D0B","\u029F","\u1D0D","\u0274","\u1D0F","\u1D18","\u01EB","\u0280","s","\u1D1B","\u1D1C","\u1D20","\u1D21","x","\u028F","\u1D22"];
	String.c = function center(x){
		x = x.split("\n");
		// get max line length
		var len = x.reduce(function(x,y){return Math.max(x,y.trim().length)},0);
		return x.map(function(e){
			var dif = len-e.length;
			if(dif){
				for(var i=0;i<dif;i++){
					if(i%2)e=" "+e;
					else e+=" ";
				}
			}
			return e;
		}).join("\n");
	}
	String.C = function trimLines(x){
		return x.split("\n").map(function(e){return e.trim()});
	}
	String.d = function applyTag(a,x){
		return "<"+a+">"+x+"</"+a+">";
	}
	String.D = function removeTag(a,x){
		if(a==null||typeof a==="undefined") x.replace(/<(.+?)>.+?<\/\1>/g,"");
		else return x.replace(RegExp("<"+RegExp.escape(a)+">.+?</"+RegExp.escape(a)+">"),"");
	}
	String.e = function strictPalindromeTest(x){
		return x.reverse?x.reverse()==x:typeof x==="number"?String.e(x+""):false;
	}
	String.E = function loosePalindromeTest(x){
		return x.replace?String.e(x.replace(/\s/g,"").toLowerCase()):x.filter?String.e(x.filter(function(e){return !(e.match(/\s/g).length);})):String.e(x);
	}
	String.f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	String.F = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	String.g = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	String.G = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"];
	String.h = "QWERTYUIOP\nASDFGHJKL\nZXCVBNM";
	String.H = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];
	String.i = function repeatVertically(x,n){
		return (x+"\n").repeat(n);
	}
	String.I = function put(s,v,x,y){
		s=String.m(s);
		v=String.m(v);
		for(var i=y;i<y+v.length;i++){
			for(var j=x;j<x+v[0].length;j++){
				console.log(i,y,i-y,v);
				s[i][j]=v[i-y][j-x];
			}
		}
		return String.M(s);
	}
	String.j = function justify(x){

	}
	String.J = function rotate(x){

	}
	String.k = "QWERTYUIOPASDFGHJKLZXCVBNM";
	String.K = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
	String.l = "abcdefghijklmnopqrstuvwxyz";
	String.L = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	String.m = function splitToArrayGrid(x){
		return x.split("\n").map(function(e){return e.split("")});
	}
	String.M = function joinArrayGrid(x){
		return x.map(function(e){return e.join("")}).join("\n");
	}
	String.n = function joinSideBySide(x,y){
		var mLx = Math.max.apply(this,x.map(function(e){return e.length}));
		var mLy = Math.max.apply(this,y.map(function(e){return e.length}));
		return String.I(x,y,mLx,0);
	}
	String.N = function joinSideBySideBottom(x,y){

	}
	String.p = function padLeft(x){

	}
	String.P = function padRight(x){

	}
	String.q = function pad(str,len,symb){
		if(str.length>=len) return str;
		else return String.q((typeof symb==="undefined"?" ":symb)+str,len,symb);
	}
	String.r = function right(x){

	}
	String.s = function unTextese(x){
		return x.replace(/(l)(o)(l)/gi,"$1aughing $2ut $3oud").replace(/(b)(r)(b)/gi,"$1e $2ight $3ack").replace(/(i)(i)(r)(c)/gi,"$1f $2 $3emember $4orrectly").replace(/(a)(f)(a)(i)(k)/gi,"$1s $2ar $3s $4 $5now").replace(/(a)(f)(a)(i)(c)(t)/gi,"$1s $2ar $3s $4 $5an $6ell").replace(/(i)(m)(o)/gi,"$1n $2y $3pinion").replace(/(i)(m)(h)(o)/gi,"$1n $2y $3umble $4pinion");
	}
	String.t = function splitBySpaces(x){
		return x.split(" ");
	}
	String.T = function joinBySpaces(x){
		return x.join(" ");
	}
	String.u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	String.U = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	String.v = function groupByNumbers(x){
		return x.match(/[\d.]+|./g);
	}
	String.V = function groupByIntegers(x){
		return x.match(/\d+|./g);
	}
	String.w = function upperAndLower(x){
		return x.toUpperCase()+x.toLowerCase();
	}
	String.W = function lowerAndUpper(x){
		return x.toLowerCase()+x.toUpperCase();
	}
	String.y = function upperN(x,n){
		return x.slice(0,n)+x[n].toUpperCase()+x.slice(n+1,x.length);
	}
	String.Y = function upperN(x,n){
		return x.slice(0,n)+x[n].toLowerCase()+x.slice(n+1,x.length);
	}
	String.z = function fromGreek(x){
		return {Α:"Alpha", α:"alpha", Β:"Beta", β:"beta", Γ:"Gamma", γ:"gamma", Δ:"Delta", δ:"delta", Ε:"Epsilon", ε:"epsilon", Ζ:"Zeta", ζ:"zeta", Η:"Eta", η:"eta", Θ:"Theta", θ:"theta", Ι:"Iota", ι:"iota", Κ:"Kappa", κ:"kappa", Λ:"Lambda", λ:"lambda", Μ:"Mu", μ:"mu", Ν:"Nu", ν:"nu", Ξ:"Xi", ξ:"xi", Ο:"Omicron", ο:"omicron", Π:"Pi", π:"pi", Ρ:"Rho", ρ:"rho", Σ:"Sigma", σ:"sigma", Τ:"Tau", τ:"tau", Υ:"Upsilon", υ:"upsilon", Φ:"Phi", φ:"phi", Χ:"Chi", χ:"chi", Ψ:"Psi", ψ:"psi", Ω:"Omega", ω:"omega"}[x]||x;
	}
	String.Z = function toGreek(x){
		return {Alpha:"\u0391", alpha:"\u03B1", Beta:"\u0392", beta:"\u03B2", Gamma:"\u0393", gamma:"\u03B3", Delta:"\u0394", delta:"\u03B4", Epsilon:"\u0395", epsilon:"\u03B5", Zeta:"\u0396", zeta:"\u03B6", Eta:"\u0397", eta:"\u03B7", Theta:"\u0398", theta:"\u03B8", Iota:"\u0399", iota:"\u03B9", Kappa:"\u039A", kappa:"\u03BA", Lambda:"\u039B", lambda:"\u03BB", Mu:"\u039C", mu:"\u03BC", Nu:"\u039D", nu:"\u03BD", Xi:"\u039E", xi:"\u03BE", Omicron:"\u039F", omicron:"\u03BF", Pi:"\u03A0", pi:"\u03C0", Rho:"\u03A1", rho:"\u03C1", Sigma:"\u03A3", sigma:"\u03C3", Tau:"\u03A4", tau:"\u03C4", Upsilon:"\u03A5", upsilon:"\u03C5", Phi:"\u03A6", phi:"\u03C6", Chi:"\u03A7", chi:"\u03C7", Psi:"\u03A8", psi:"\u03C8", Omega:"\u03A9", omega:"\u03C9"}[x];
	}
	String[0] = "0123456789";
	String[")"] = ["0","1","2","3","4","5","6","7","8","9"];
	String[1] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	String["!"] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
	String[2] = function shiftLeft(s,x){
		return x==0?s:x>0?String[2](s.slice(1)+s[0],x-1):String[3](s,-x);
	}
	String[3] = function shiftRight(s,x){
		return x==0?s:x>0?String[3](s.slice(-1)+s.slice(0,-1),x-1):String[3](s,-x);
	}

	Array.c = function chop(x,c){
		var res=[];
		for(var i=0;i<x.length;i+=c){
			res.push(x.slice(i,i+c));
		}
		return res;
	}
	Array.e = function ofLength(x,l){
		return x.filter(function(e){return e.length===l});
	}
	Array.E = function notOfLength(x,l){
		return x.filter(function(e){return e.length!==l});
	}
	Array.f = function flatten(x){
		return Array.F(x,Array.m(x));
	}
	Array.F = function flattenTo(x,c){
		if(c<=0) return x;
		var res=[];
		for(var i=0;i<x.length;i++){
			if(Array.isArray(x[i])) x[i].forEach(function(e){res.push(e)});
			else res.push(x[i]);
		}
		return Array.F(res,c-1);
	}
	Array.o = function maxLength(x){
		return Math.max.apply(this,x.map(function(e){return e.length}));
	}
	Array.m = function maxDim(x){
		if(x == []) return 0;
		var a = [];
		for(var i=0;i<x.length;i++){
			a[i] = 0;
			if(Array.isArray(x[i])) a[i] = 1+Array.m(x[i]);
		}
		return Math.max.apply(window,a);
	}
	Array.M = function minDim(x){
		if(x == []) return 0;
		var a = [];
		for(var i=0;i<x.length;i++){
			a[i] = 0;
			if(Array.isArray(x[i])) a[i] = 1+Array.m(x[i]);
		}
		return Math.min.apply(window,a);
	}
	Array.p = function swap(a){
		var len = Math.max.apply(Math,a.map(function(e){return e.length}));
		var res = [];
		for(var i=0;i<len;i++){
			res[i] = [];
			for(var j=0;j<a.length;j++){
				res[i].push(a[j][i]);
			}
		}
		return res;
	}
	Array.s = function squareString(a){
		return Array.S(a).map(function(x){return x.join(" ");}).join("\n");
	}
	Array.S = function square(a){
		// get the closest square number corresponding to the length
		var clLen = Math.ceil(Math.sqrt(a.length));
		var j=0;
		var res=[];
		for(var i=0;i<Math.pow(clLen,2);i++){
			res[j] = res[j]||[];
			res[j].push(a[i]||" ");
			if(i%clLen==clLen-1&&i){
				if(j%2) res[j].reverse();
				j++;
			}
		}
		return res;
	}
	Array.t = function take(n,x){
		var a=[];
		for(var i=0;i<n;i++){
			a[i]=[];
			for(var j=i;j<x.length;j+=n){
				if(typeof x[j]!=="undefined")a[i].push(x[j]);
			}
		}
		return typeof x==="string"?a.map(function(e){return e.join("")}).join(""):a;
	}
	Array.T = function trim(x){
		return x.map(function(e){return e.trim();})
	}
	Array.w = function(a){
		// [1,2,3,4,5,6,7,8,9]
		/*
		3 2 2 1 1
		4 3 3 2 2 1 1
		[
			[1,2,3],
			[8,9,4],
			[7,6,5]
		]
		*/
	}

	Date[0] = Date.parse;
	Date[1] = Date.now;
	Date[2] = Date.UTC;
	Date[3] = function nowInstnace(){
		return new Date(Date.now());
	}
	var funcs = ["getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getTime","getTimezoneOffset","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","getYear"];
	var names = "abcdefghijklmnopqrstuvwxyz".split("");
	for(var i=0;i<funcs.length;i++){
		try{eval("function "+funcs[i]+"Now(){return (new Date(Date.now()))."+funcs[i]+"();}");
		try{eval("function "+funcs[i]+"Input(x){return (x instanceof Date?x:new Date(x))."+funcs[i]+"();}");
		Date[names[i]] = window[funcs[i]+"Now"];}catch(e){};
		Date[names[i].toUpperCase()] = window[funcs[i]+"Input"];}catch(e){};
	}
	RegExp[0] = function evalAsRegExp(x){
		return RegExp(x);
	}
	RegExp[1] = function evalAsRegExpFlagged(x,f){
		return RegExp(x,f);
	}
	RegExp.a = function alternate(x){
		return x.join("|");
	}
	RegExp.A = function alertnateParen(x){
		return "("+x.join("|")+")";
	}
	RegExp.b = function paren(x){
		return "("+x+")";
	}
	RegExp.B = function forgetParen(x){
		return "(?:"+x+")";
	}
	RegExp.c = function finishParens(x){
		var pA = "([{";
		var pB = ")]}";
		var d  = [0,0,0];
		for(var i=0;i<x.length;i++){
			if(pA.has(x)) d[pA.indexOf(x)]++;
			if(pB.has(x)) d[pB.indexOf(x)]--;
		}
		// unimplemented
		return d;
	}
	RegExp.C = function simplifyRegExp(x){
		return "It cannot be done!";
	}
	RegExp.d = function rangeMod(a,m,n){
		return (a.length===1?a:"(?:"+a+")")+"{"+n+","+m+"}";
	}
	RegExp.D = function prepare(a){
		return (a.length===1?a:"(?:"+a+")");
	}
	RegExp.e = RegExp.escape;
	RegExp.E = function lazy(x){
		return RegExp.D(x)+"?";
	};
	RegExp.f = function plusMod(x){
		return RegExp.D(x)+"+";
	}
	RegExp.F = function plusModLazy(x){
		return RegExp.D(x)+"+?";
	}
	RegExp.g = function timesMod(x){
		return RegExp.D(x)+"*";
	}
	RegExp.G = function timesModLazy(x){
		return RegExp.D(x)+"*?";
	}
	RegExp.h = function questionMod(x){
		return RegExp.D(x)+"?";
	}
	RegExp.H = function questionModLazy(x){
		return RegExp.D(x)+"??";
	}
	RegExp.i = function recursiveReplace(x,s,r){
		var y = x+""||arguments[3];
		if(x.search(s)>=0) return RegExp.i(x,x.replace(s,r),r,y);
		else return x;
	}

	Pen.prototype.customFunc = function(char,func){
		Pen.prototype[char] = func;
	}
	// canvas object
	var can = {
		"a":function(J){
			J.comp += "y.angle(";
			return 1;
		},
		"b":function(J){
			J.comp += "y.begin(";
			return 0;
		},
		"B":function(J){
			J.comp += "y.back(";
			return 1;
		},
		"c": function(J){
			J.comp += "y.close(";
			return 0;
		},
		"d":function(J){
			J.comp += "y.draw(";
			return 0;
		},
		"e":function(J){
			J.comp += "y.pensize(";
			return 1;
		},
		"f":function(J){
			J.comp += "y.font(";
			return 1;
		},
		"F":function(J){
			J.comp += "y.fillstyle(";
			return 1;
		},
		"h":function(j){
			J.comp += "y.set(";
			return 0;
		},
		"H":function(J){
			J.comp += "y.home(";
			return 0;
		},
		"i":function(J){
			J.comp += "y.fill(";
		},
		"g":function(J){
			J.comp += "y.go(";
			return 1;
		},
		"G":function(J){
			J.comp += "y.goto(";
			return 2;
		},
		"j":function(J){
			J.comp += "y.jump(";
			return 2;
		},
		"o":function(J){
			J.comp += "y.origin(";
			return 0;
		},
		"O":function(J){
			J.comp += "y.polar(";
			return 2;
		},
		"p":function(J){
			J.comp += "y.penup(";
			return 0;
		},
		"P":function(J){
			J.comp += "y.pendown(";
			return 0;
		},
		"q":function(J){
			J.comp += "y.customFunc(\""+J.code[++J.index]+"\",";
			return 1;
		},
		"Q":function(J){
			var newChr = J.code[++J.index];
			console.log(newChr);
			J.comp += "y["+newChr+"](";
			return Pen.prototype[newChr].length||0;
		},
		"s":function(J){
			J.comp += "y.stroke(";
			return 0;
		},
		"t":function(J){
			J.comp += "y.turn(";
			return 1;
		},
		"T":function(J){
			J.comp += "y.text(";
			return 1;
		},
	}
	var Crypto = {};
	Crypto.rot13 = function(s){
		return s.replace(/[A-Z]/g,function(m){
			return String[2](String.u,13)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[2](String.u,13)[String.u.indexOf(m)];
		});
	}
	Crypto.rot13Rev = function(s){
		return s.replace(/[A-Z]/g,function(m){
			return String[3](String.u,13)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[3](String.u,13)[String.u.indexOf(m)];
		});
	}
	Crypto.rotN = function(s,n){}
}

var ctl = {
	"W": function(J){
		J.comp += "while(";
	},
	")": function(J){
		J.comp += "){";
		J.comp = J.comp.replace(/(while|if|repeat)\((.*)\){.*$/,function(m,p1,p2){
			return p1+"("+p2.replace(/;*/g,"").replace(/;/g,",")+"){";
		});
	}
}

// constant-arity ops
var ops = {
	"#": function(J){
		J.comp += "toHex(";
		return 1;
	},
	"?": function(J){
		J.comp += "ternary(";
		return 3;
	},
	" ": function(J){
		J.comp += "prototypeFunc(";
		var chrTemp = J.code[++J.index];
		try {
			eval("\""+chrTemp+"\"");
		} catch(e){
			chrTemp = "\\"+chrTemp;
		} finally {
			J.comp += "\""+chrTemp+"\",";
		}
		return ars[chrTemp]+1;
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
	"~A": function(J){
		J.comp += "simulDictRepl(";
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
	"c": function(J){
		J.comp += "parseInt(";
		return 1;
	},
	"C": function(J){
		J.comp += "parseInt(";
		return 2;
	},
	"~c": function(J){
		J.comp += "console.log(";
		J.outted = true;
		return 1;
	},
	"d": function(J){
		J.comp += "function(H,S,n){return ";
		return [1,"}"];
	},
	"~D": function(J){
		J.comp += "new Date(";
		return 1;
	},
	"e": function(J){
		J.comp += "evalJolf(";
		return 1;
	},
	"~e": function(J){
		J.comp += "eval(";
		return 1;
	},
	"~f": function(J){
		J.comp += "apply(";
		return 2;
	},
	"f": function(J){
		var x = "Date[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Date[chrTemp]=="function"){
			J.comp += x;
			return Date[chrTemp].length;
		} else {
			J.comp += "(function(J){return Date[\""+chrTemp+"\"]})(";
			return 0;
		}
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
	"~G": function(J){
		J.comp += "goodLuck(";
		return J.func.length;
	},
	"h": function(J){
		J.comp += "head(";
		return 1;
	},
	"~L": function(J){
		J.comp += "logBASE(";
		return 2;
	},
	"L": function(J){
		var x = "RegExp[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof RegExp[chrTemp]=="function"){
			J.comp += x;
			return RegExp[chrTemp].length;
		} else {
			J.comp += "(function(J){return RegExp[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"l": function(J){
		J.comp += "length(";
		return 1;
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
			J.comp += "(function(J){return Math[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"P": function(J){
		J.comp += "Number(";
		return 1;
	},
	"p": function(J){
		var x = "String[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof String[chrTemp]=="function"){
			J.comp += x;
			return String[chrTemp].length;
		} else {
			J.comp += "(function(J){return String[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"~p": function(J){
		J.comp += "stepRange(";
		return 3;
	},
	"\u03c1": function(J){
		J.comp += "stepRange(";
		return 3;
	},
	"Q": function(J){
		J.comp += "square(";
		return 1;
	},
	"~R": function(J){
		J.comp += "setTimeout(";
		return 2;
	},
	"R": function(J){
		J.comp += "join(";
		return 2;
	},
	"r": function(J){
		J.comp += "range(";
		return 2;
	},
	"s": function(J){
		J.comp += "rangeInclusive(";
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
	"w": function(J){
		J.comp += "decrement(";
		return 1;
	},
	"~y": function(J){
		J.comp += "silentEvalJolf(";
		return 1;
	},
	"y": function(J){
		// get operation
		if(!J.enc.y){
			J.prec += "var y=new Pen(\"draw\");";
			J.enc.y = true;
		}
		var op = J.code[++J.index];
		var canvas = document.getElementById("draw");
		var ctx = canvas.getContext("2d");
		if(op=="\""){
			var todo = "";
			do {
				todo += J.code[++J.index];
			} while(J.code[J.index]!=="\"");
			todo = todo.slice(0,-1);
		} else if(can[op]){
			return can[op](J);
		}
	},
	"z": function(J){
		J.comp += "unaryRange(";
		return 1;
	},
	"Z": function(J){
		var x = "Array[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Array[chrTemp]=="function"){
			J.comp += x;
			return Array[chrTemp].length;
		} else {
			J.comp += "(function(J){return Array[\""+chrTemp+"\"]})(";
			return 0;
		}
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
	"%": function(J){
		J.comp += "modulo(";
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
	"~=": function(J){
		J.comp += "strictEquals(";
		return 2;
	},
	"<": function(J){
		J.comp += "less(";
		return 2;
	},
	">": function(J){
		J.comp += "more(";
		return 2;
	},
	"&": function(J){
		J.comp += "and(";
		return 2;
	},
	"|": function(J){
		J.comp += "or(";
		return 2;
	},
	",": function(J){
		J.comp += "doubleNeg(";
		return 1;
	},
	"\x7f": function(J){
		J.comp += "booleanNegation(";
		return 1;
	},
	"\x0B": function(J){
		J.comp += "...";
		return [1,""];
	},
	"\x10":function(J){
		J.comp += "joinByNothing(";
		return 1;
	},
	"\x11":function(J){
		J.comp += "singleton(";
		return 1;
	},
	"\f": function(J){
		J.comp += "min(";
		return 2;
	},
	"\r": function(J){
		J.comp += "max(";
		return 2;
	},
	"~t": function(J){
		J.comp += "typeof(";
		return 1;
	},
	"\t": function(J){
		J.comp += "undefChoose(";
		return 2;
	},
	"ε": function(J){
		J.comp += "eval(";
		return 1;
	},
	"σ": function(J){
		J.comp += "sigmaK(";
		return 2;
	},
	"μ": function(J){
		J.comp += "unique(";
		return 1;
	},
	"~L": function(J){
		J.comp += "levenshtein(";
		return 2;
	},
	"~l": function(J){
		J.comp += "new Levenshtein(";
		return 2;
	},
	"Ρ": function(J){
		J.comp += "singleReplace(";
		return 3;
	},
	"Ω": function(J){
		J.comp += "\"";
		return [1,"\""];
	},
	"~T": function(J){
		J.comp += "(";
		return [1,").charCodeAt().toString(16);"]
	},
	"\u03A8": function(J){
		J.comp += "(H,S,n)=>";
		return [1,""];
	},
	"\u03C6": function(J){
		J.comp += "function(H,S){";
		return [1,"}"]
	},
	"\u03C7": function(J){

	},
}

// data/arguments
var inf = {
	"E": function(J){
		if(!J.enc.E){
			J.prec += "var E=\"\";";
			J.enc.E = true;
		}
		J.comp += "E";
	},
	"Y": function(J){
		if(!J.enc.Y){
			J.prec += "var Y=[];";
			J.enc.Y = true;
		}
		J.comp += "Y";
	},
	"H": function(J){
		J.comp += "H";
	},
	"S": function(J){
		if(!J.enc.S){
			J.prec += "var S=\"\\n\";";
			J.enc.S = true;
		}
		J.comp += "S";
	},
	"n": function(J){
		J.comp += "n";
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
	"x": function(J){
		if(!J.enc.x){
			J.prec += "try{var x=eval(prompt(\"x = \"));}catch(e){var x=42;}";
			J.enc.x = true;
		}
		J.comp += "x";
	},
	"X": function(J){
		if(!J.enc.X){
			J.prec += "try{var X=eval(prompt(\"X = \"));}catch(e){var X=42;}";
			J.enc.X = true;
		}
		J.comp += "X";
	},
	"q": function(J){
		J.comp += "\""+J.code.replace(/"/g,"\\\"")+"\"";
	},
	"t": function(J){
		J.comp += "10";
	},
	"~p": function(J){
		J.comp += "Math.PI"
	},
	"~E": function(J){
		J.comp += "Math.E"
	},
	"~P": function(J){
		J.comp += "(1+Math.sqrt(5))/2";
	},
	"~G": function(J){
		J.comp += "Math.pow(Math.E,Math.PI)";
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
	"~5": function(J){
		J.comp += "16";
	},
	"ν": function(J){
		J.comp += "null";
	},
	"": function(J){}
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
		J.mode = 8;
		J.comp += "function(H,S,n){"
	},
	"`": function(J){
		J.check();
	},
	"\b": function(J){
		J.outted = true;
	},
	"(": function(J){
		console.log("\u201c( terminates the program and kills your computer\u201d")
		console.log("http://chat.stackexchange.com/transcript/message/25961158#25961158")
		J.index = J.code.length + 1;
	},
	"ς": function(J){
		document.getElementById("output").innerHTML = "";
	},
	"θ": function(J){
		J.func.last+=3;
	},
	"M": function(J){
		J.func.last+=2;
	},
	";": function(J){
		J.func.last++;
	},
	"η": function(J){
		J.func.last--;
	}
}

// substitution characters
var sbs = {
	"~#": function(J){
		return "()";
	},
	"N": function(J){
		return "return ";
	},
	"~N": function(J){
		return "Number";
	},
	"~a": function(J){
		return "Array";
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
	},
	"o": function(J){
		return J.code[++J.index]+"="
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
	this.end    = [];
	this.repl   = 0;
	this.total  = "";
	this.build  = "";
	this.bldChr = "";
	this.bldPrd = "";
	this.bldFun = "";
	this.checkQ = true;
	this.prevCk = false;
	this.outted = false;
	this.debug  = false;
	if(code==""){	// easter egg
		this.comp = "var i=+prompt();alert(i);if(i)setInterval(alert,1,i);";
	}
	return this;
}

// in-progress readable format of jolf compiled code
Jolf.prototype.readable = function(J){
	var read = this.comp;
	//console.log(read);
	read = read.replace(/(Math|String|Array|Date)\["(.)"\]/g,function(match,p1,p2){
		if(typeof eval(p1)[p2].name !== "undefined"){
			return p1+"."+eval(p1)[p2].name;
		} else {
			return match;
		}
	}).replace(/\(function\(\)\{return (Math|String|Array|Date)\["(.)"\]\}\)\(\)/g,function(match,p1,p2){
		var t=eval(p1)[p2];
		if(typeof t=="number")return t;
		return JSON.stringify(eval(p1)[p2]);
	});

	// replace all instances of prototypeFunc with respective func
	{
		while(read.search(/prototypeFunc/)>=0){
			var index = read.search(/prototypeFunc/)+13;
			var depth = 1;
			var stringMode = false;
			// search for prototype name
			var i = index;
			while(depth&&++i<read.length){
				if(read[i]=="\"") stringMode=!stringMode;
				if(!stringMode){
					if(read[i]==",") depth--;
				}
			}
			var prop = read.slice(index+2,i-1);
			// obtain object to which the prototype belongs
			var depthArr = [1];
			var arrayMode = false;
			var j = i;
			while(depthArr[0]&&++j<read.length){
				if(read[j]=="\"") stringMode=!stringMode;
				if(read[j]=="["||read[j]=="]") arrayMode=!arrayMode;
				if(!(stringMode||arrayMode)){
					if(read[j]=="(") depthArr.push(1);
					if(read[j]==")") depthArr.pop();
					if(read[j]==","&&depthArr.length==1) depthArr[0]--;
				}
			}
			var obj = read.slice(i+1,j);
			read = read.slice(0,index-13)+obj+"."+(eval(obj.replace(/i|I/g,"\"\"").replace(/j|J/g,"0")).constructor.prototype[prop].name||prop)+"("+read.slice(j+1,read.length);
		}
	}

	// proper indentation
	var tabLevel = 0;
	read = read.split("");
	for(var i=0;i<read.length;i++){
		//console.log(read[i]);
		if("{".indexOf(read[i])>=0)
			read.splice(i,1,"{\n","\t".repeat(++tabLevel));
		else if("}".indexOf(read[i])>=0){
			read.splice(i,1,"\t".repeat(--tabLevel),"}"+(read[i+1]==")"?"":"\n"));
			i+=tabLevel+1;
		} else if(";".indexOf(read[i])>=0)
			read.splice(i,1,";\n");
	}
	read = read.join("");

	return this.prec+read;
}

Jolf.prototype.haltChecking = function(J){
	this.checkQ = false;
}

Jolf.prototype.resumeChecking = function(J){
	this.checkQ = true;
}

Jolf.prototype.run = function(J){
	if(this.step()) setTimeout(function(J){J.run()},1,this);
	return this;
}

Jolf.prototype.runUnpaused = function(J){
	while(this.step());
	return this;
}

Jolf.prototype.exec = function(J){
	if(this.step()) setTimeout(function(J){J.exec()},1,this);
	else {
		var ret = this.total?this.total:this.prec+this.comp;
		return (this.outted?function(f){return f}:alert)(eval(ret));
	}
}

Jolf.prototype.check = function(J){
	if(!this.checkQ) return;
	if(this.prevCk) return prevCk = false;
	var funcRes = this.func.pop();
	if(typeof funcRes!=="undefined"){
		var consump = funcRes.shift();
		var ending = funcRes.shift();
		if(!consump){
			this.comp += ending;
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
			this.comp += ending;
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
			this.func.push([consump,ending]);
			return 0.5;
		}
	} else {
		this.comp += ";";
		return 1;
	}
}

Jolf.prototype.step = function(J){
	// checking index bounds / func stack
	console.log(this.prec,this.comp);
	if(this.index > this.code.length){
		this.total = this.prec+this.comp;
		return false;
	}
	// var for char
	var chr = this.code[this.index];
	if(chr=="~") chr+=this.code[++this.index];
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
				var close = ")";
				if(Array.isArray(arity)){
					close = arity.pop();
					arity = arity.pop();
				}
				if(!arity){
					console.log(arity,!arity);
					this.comp += ")";
					this.check();
				} else {
					this.func.push([arity,close]);
				}
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
			if(chr=="\\"){	// escape next character or apply control sequence
				var x = this.code[++this.index];
				if(eval("'\\"+x+"'")==x){
					this.comp += chr;
					this.comp += x;
				} else {
					this.comp += "\\"+x;
				}
			} else if(chr=="\""||typeof chr=="undefined"){
				this.mode = 0;
				this.comp += "\"";
				if(this.repl){
					this.comp += ".format(";
					this.func.push([this.repl,")"]);
					this.repl = 0;
				} else this.check();
			} else if(chr=="'"){
				this.comp += "\"";
				if(this.repl){
					this.comp += ".format(";
					this.func.push([this.repl,")"]);
					this.repl = 0;
				} else this.check();
				this.comp += "\"";
			} else if(chr==this.fin){	// escape currnet charater
				this.comp += "\\" + chr;
			} else if(chr=="%"){
				this.comp += "%";
				this.repl++;
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
			if(chr!="#"&&chr){
				this.build += this.code[this.index];
			} else if(chr=="#") {
				this.mode = 0;
				// ensuring we don't have multiple var calls
				var innerJolf = silentEvalJolfObj(this.build,{enc:this.enc});
				// if any new var calls were made
				this.prec += innerJolf.prec;

				// the comp contains (hopefully) a series of entries split by semicolons
				var golfArr = innerJolf.comp.split(";");
				// removing the trailing semicolon
				golfArr.pop();      // safety ~~~.
				// composing the array           v
				this.comp += "[" + golfArr.join(",") + "]";
				// ensuring we don't run into the # again
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
			this.bldPrd += this.code[this.index]||"";
			// determine if we are done building
			var testJolf = new Jolf(this.bldPrd);
			testJolf.enc = this.enc;
			while(testJolf.step());
			try{eval(testJolf);this.prec+=testJolf.prec;this.comp+=testJolf.comp+"}";this.mode=0;}catch(e){}
		break;
		case 8:	// build function mode
			this.bldFun += chr;
			if(chr=="}"){
				var co = silentEvalJolfObj(this.bldFun.slice(0,-1),{enc:this.enc});
				this.prec += co.prec;
				this.comp += co.comp+"}";
				this.mode = 0;
				this.check();
				this.bldFun = "";
			}
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
	x.total = "(function(J){return "+x.total+"})();";
	return eval(x.total);
}

function silentEvalJolfObj(code,options){
	var x = new Jolf(code);
	for(var prop in options){
		x[prop] = options[prop];
	}
	x.outted = true;
	while(x.step());
	return x;
}

// test jolf
//var a = new Jolf(" e[1,2,3]DNhH}");
//a.run();
