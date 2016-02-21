/*
   JJJ  OO  L    FFFF
     J O  O L    F
  J  J O  O L    FFF
   JJJ  OO  LLLL F
  By ~ Conor ~ O'Brien
*/

var debug = false;
// polyfills from developer.mozilla.org
{
String.prototype.repeat||(String.prototype.repeat=function(t){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var r=""+this;if(t=+t,t!=t&&(t=0),0>t)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==r.length||0==t)return"";if(r.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var e="";1==(1&t)&&(e+=r),t>>>=1,0!=t;)r+=r;return e});Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);if(!y)return!1}n++}return!0});Math.clz32=Math.clz32||function(J){"use strict";var t=[32,31,0,16,0,30,3,0,15,0,0,0,29,10,2,0,0,0,12,14,21,0,19,0,0,28,0,25,0,9,1,0,17,0,4,,0,0,11,0,13,22,20,0,26,0,0,18,5,0,0,23,0,27,0,6,0,24,7,0,8,0,0,0];return function(r){var u=Number(r)>>>0;return u|=u>>>1,u|=u>>>2,u|=u>>>4,u|=u>>>8,u|=u>>>16,u=t[Math.imul(u,116069625)>>>26]}}();Math.trunc=Math.trunc||function(t){return 0>t?Math.ceil(t):Math.floor(t)};Math.sign=Math.sign||function(n){return n=+n,0===n||isNaN(n)?n:n>0?1:-1};Math.imul=Math.imul||function(t,u){var a=t>>>16&65535,i=65535&t,n=u>>>16&65535,r=65535&u;return i*r+(a*r+i*n<<16>>>0)|0};!function(J){function t(t,n,o){return"undefined"==typeof o||0===+o?Math[t](n):(n=+n,o=+o,isNaN(n)||"number"!=typeof o||o%1!==0?NaN:(n=n.toString().split("e"),n=Math[t](+(n[0]+"e"+(n[1]?+n[1]-o:-o))),n=n.toString().split("e"),+(n[0]+"e"+(n[1]?+n[1]+o:o))))}Math.round10||(Math.round10=function(n,o){return t("round",n,o)}),Math.floor10||(Math.floor10=function(n,o){return t("floor",n,o)}),Math.ceil10||(Math.ceil10=function(n,o){return t("ceil",n,o)})}();Math.cbrt=Math.cbrt||function(t){var a=Math.pow(Math.abs(t),1/3);return 0>t?-a:a};Math.expm1=Math.expm1||function(t){return Math.exp(t)-1};Math.fround=Math.fround||function(n){return function(r){return n[0]=r,n[0]}}(Float32Array(1));Math.log10=Math.log10||function(t){return Math.log(t)/Math.LN10};Math.log2=Math.log2||function(t){return Math.log(t)/Math.LN2};Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";var e,n;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);if(!y)return!1}n++}return!0});Math.hypot=Math.hypot||function(J){for(var t=0,r=arguments.length,n=0;r>n;n++){if(arguments[n]===1/0||arguments[n]===-(1/0))return 1/0;t+=arguments[n]*arguments[n]}return Math.sqrt(t)};Math.log10=Math.log10||function(t){return Math.log(t)/Math.LN10};String.fromCodePoint||!function(J){var r=function(J){try{var r={},n=Object.defineProperty,t=n(r,r,r)&&n}catch(e){}return t}(),n=String.fromCharCode,t=Math.floor,e=function(J){var r,e,o=16384,i=[],a=-1,u=arguments.length;if(!u)return"";for(var f="";++a<u;){var g=Number(arguments[a]);if(!isFinite(g)||0>g||g>1114111||t(g)!=g)throw RangeError("Invalid code point: "+g);65535>=g?i.push(g):(g-=65536,r=(g>>10)+55296,e=g%1024+56320,i.push(r,e)),(a+1==u||i.length>o)&&(f+=n.apply(null,i),i.length=0)}return f};r?r(String,"fromCodePoint",{value:e,configurable:!0,writable:!0}):String.fromCodePoint=e}();Array.prototype.fill||(Array.prototype.fill=function(t){if(null==this)throw new TypeError("this is null or not defined");for(var r=Object(this),n=r.length>>>0,i=arguments[1],a=i>>0,e=0>a?Math.max(n+a,0):Math.min(a,n),o=arguments[2],h=void 0===o?n:o>>0,l=0>h?Math.max(n+h,0):Math.min(h,n);l>e;)r[e]=t,e++;return r});Array.prototype.findIndex||(Array.prototype.findIndex=function(r){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n,e=Object(this),t=e.length>>>0,o=arguments[1],i=0;t>i;i++)if(n=e[i],r.call(o,n,i,e))return i;return-1});
}

{// functions
	// from http://stackoverflow.com/a/2499647/4119004
	function getJSONP(url, success) {
    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0]
               || document.documentElement;

	    window[ud] = function(data) {
	        head.removeChild(script);
	        success && success(data);
	    };

	    script.src = url.replace('callback=?', 'callback=' + ud);
	    head.appendChild(script);
	}

	// from http://stackoverflow.com/a/34800836/4119004
	function convertFrom1to7(r){for(var o="!‘’!€₯!!!!.!!!!―!!!!...!...!.!....................!............................................!",t="",e="",a=0;a<r.length;a++){var n=r[a];e=n,n.charCodeAt(0)>=160&&(e=o[n.charCodeAt(0)-160],"!"===e&&(e=n),"."===e&&(e=String.fromCharCode(n.charCodeAt(0)+720))),t+=e}return t}
	function isValidISO88597(u){for(var A=/[\u0000-\u00A0\u2018\u2019\u00A3\u20AC\u20AF\u00A6-\u00A9\u037A\u00AB-\u00AD\u2015\u00B0-\u00B3\u0384-\u0386\u00B7\u0388-\u038A\u00BB\u038C\u00BD\u038E-\u03CE]/,B=!0,t=0;t<u.length;t++)B=B&&A.test(u[t]);return B}

	newWordList = wordList = wordList.concat(wordList.map(function(x){return x[0].toUpperCase()+x.slice(1)}),wordList.map(function(x){return x.toUpperCase()}));
	var ENDINGS = " !,.:;?";
	for(var i=0;i<ENDINGS.length;i++){
		newWordList=newWordList.concat(wordList.map(function(x){return x+ENDINGS[i]}));
	}
	wordList = newWordList.concat([]);
	delete newWordList;
	wordListSpace = wordList.concat(wordList.map(function(x){return x+" "}));

	// cart product: from http://stackoverflow.com/a/29585751/4119004, minified
	function cartesianProduct(x,y){
		return (function(r){var n=[],t=Array(r.length);return function u(a){if(a==r.length)return n.push(r.map(function(r,n){return r[t[n]]}));for(var e=0;e<r[a].length;++e)t[a]=e,u(a+1)}(0),n})(Array.from(arguments));
	}

	function capitalLambda(n,q){
		var l = jolf("ZAj",n-1);
		if(n==1) return 1;
		l.push(1);
		if(q<n) return l[q];
		while(q>=l.length){
			for(var k=s=0;k<n;s+=l[l.length-++k]);l.push(s);
		}
		return l[q];
	}

	function summation(func,start,end){
		var step = typeof arguments[3]==="undefined"?1:arguments[3];
		var s = 0;
		for(var H=start;H<=end;H+=step){
			s += func(H,start,end);
		}
		return s;
	}

	function product(func,start,end){
		var step = typeof arguments[3]==="undefined"?1:arguments[3];
		var s = 0;
		for(var H=start;H<=end;H+=step){
			s *= func(H,start,end);
		}
		return s;
	}

	function spreadOp(funcA,funcB,start,end){
		var step = typeof arguments[3]==="undefined"?1:arguments[3];
		var s = 0;
		for(var H=start;H<=end;H+=step){
			s= funcA(s,funcB(H,start,end));
		}
		return s;
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
		if(typeof a=="string"){
			if(Array.isArray(b)){
				b.forEach(function(e){a=a.replace(RegExp(RegExp.escape(e),"g"),"")});
				return a;
			}
			return a.replace(RegExp.escape(b),"");
		}
		else if(Array.isArray(a)) return a.filter(function(x){return x!=b});
		else if(a instanceof Set){
			a.delete(b);
			return a;
		}
		return a - b;
	}

	function double(x){
		return mul(2,x);
	}

	function halve(x){
		return x/2;
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
		} else if(Array.isArray(a)){
			return a.reverse();
		} else {
			return a;
		}
	}

	function doForEach(arr,func){
		return map(arr,func);
	}

	function map(a,f){
		if(Array.isArray(a)){
			return a.map(f);
		} else if(typeof a==="string"){
			return map(a.split(""),f).join("");
		} else if(typeof a==="number"){
			return +map((a+"").split(""),f).join("");
		}
	}

	function filter(a,f){
		if(Array.isArray(a)){
			return a.filter(f);
		} else if(typeof a==="string"){
			return filter(a.split(""),f).join("");
		} else if(typeof a==="number"){
			return +filter((a+"").split(""),f).join("");
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

	function close(n){
		var D = arguments[1]||"{([", d = arguments[2]||"})]";
		for(var i=n.length-1,depth=[0,0];i>=0;--i){
			var c=n[i];
			for(var j=0;j<D.length;++j){
				if(c==D[j])depth[j]--;
				else if(c==d[j])depth[j]++;
				if(depth[j]<0)return close(n+d[j]);
			}
		}
		return n;
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

	function visible(x,Q){
		var c = x.charCodeAt();
		var r = JSON.stringify(x).slice(1,-1);
		if(x=="\\"||x=="\"") return x;
		if(Q||(0<=c&&c<=31&&r.length>2)||(127<=c&&c<=160)) return "\\x"+String.pad(c.toString(16),2,0);
		return r;
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

	function slice(x,y,z){
		if(Array.isArray(z)) return x.slice(y,-y);
		if(typeof y==="array") return sum(y.map(function(e){return x.slice(e,z)}));
		if(typeof x==="number") return +slice(x+"",y,z);
		return x.slice(y,z);
	}

	function range(x,y){
		if(arguments.length<2) throw Error("Insufficient arguments passed.")
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
		if(Array.isArray(x)){

		}
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

	function distinctN(N,array,condition){
		var x = jolf("ZemZxj",array,N).filter(function(e){return equals(e,e.sort(condition))});
		return x;
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

	// from http://stackoverflow.com/a/29641185/4119004
	// duration, frequency, volume, type, callback
	function beep(t,e,n,o,i){var a=audioCtx.createOscillator(),d=audioCtx.createGain();a.connect(d),d.connect(audioCtx.destination),n&&(d.gain.value=n),e&&(a.frequency.value=e),o&&(a.type=o),i&&(a.onended=i),a.start(),setTimeout(function(){a.stop()},t?t:500)}var audioCtx=new(window.AudioContext||window.webkitAudioContext||window.audioContext);
	var Audio = {};
	Audio.a = function shortBeep(){
		beep(200);
		return 60000;
	}
	Audio.A = function beepDuration(d){
		beep(d);
		return d*1000;
	}
	Audio.b = function standardBeep(){
		beep();
		return jolf("^~Eπ");
	}
	Audio.B = function configBeep(a,b,c,d,e){
		d = ["sine","square","sawtooth","triangle"][d] || d;
		beep(a,b,c,d,e);
		return jolf("^π~E");
	}
	Audio.c = function cfgBeep(a,b){
		beep(a,b);
		return a*b*10;
	}
	Audio.C = function cfgBeepSeconds(a,b){
		beep(a*1000,b);
		return a*b*10000;
	}
	Audio.d = function times1000(a){
		return mul(1000,a);
	}
	Audio.D = function divideBy1000(a){
		return div(a,1000);
	}
	Audio.t = function timeline(tones,durations){
		if(!tones.length) return;
		else beep(durations.shift(),tones.shift(),1,"sine",function(){Audio.t(tones,durations)});
	}

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

function bin(x){
	for(var r="",loop=1e4;x!=""&&loop--;){
		r=x.slice(-1)%2+r;
		for(x=x.slice(0,-1)+(x.slice(-1)-x.slice(-1)%2),y=z='',i=0;i<x.length;i++)
			y+=(z+x[i])/2|0,z=x[i]%2;x=y.replace(/^0+/,"")
	}
	return r;
}

function abin(x){
	return x.split("").reverse().reduce(function(total,cur,index){
		return total.plus(
			(new BigNumber(+cur)).times(
				(new BigNumber(2)).pow(index)
			)
		)
	},new BigNumber(0));
}

	function numberCompress(s){
		// remove leading zeroes
		s = s.replace(/^0*/,"");
		while(s.length%3) s="0"+s;
		s = s.match(/.../g).map(y=>("0000000000"+(+y).toString(2)).slice(-10)).join("");
		while(s.length%8) s="0"+s;
		return s.match(/.{1,8}/g).map(y=>String.fromCharCode(parseInt(y,2))).join("");
	}

	function numberDecompress(s){
		s = s.split("").map(t=>("00000000"+t.charCodeAt().toString(2)).slice(-8)).join("");
		while(s.length%10) s="0"+s;
		return s.match(/.{1,10}/g).map(x=>parseInt(x,2)).join("");
	}

	function toBaseArr(n,b){
		h = Math.ceil(logBASE(n,b));
		a = new Array(h+1) .fill(0);
		while(n){
			h = Math.floor(logBASE(n,b));
			n-=Math.pow(b,h);
			a[h]++;
		}
		a.pop();
		return a.reverse();
	}

	function fromBaseArr(a,b){
		f = 0;
		a.reverse().map(function(e,i){
			return f+=e*Math.pow(b,i);
		});
		return f;
	}

	function toString(N,b){
		if(b===1) return "1".repeat(N);
		try {
			return N.toString(b||10);
		} catch(e){
			// default to base arr
			return toBaseArr(N,b);
		}
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
		if(Array.isArray(x)) return x.map(head);
		return x+1;
	}

	function decrement(x){
		if(Array.isArray(x)) return x.map(decrement);
		else if(typeof x=="string") return x.slice(1);
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
		else if(typeof x==="number") return sum(x.toString(10).split("").map(Number))
		try {
			return x.length==1?x[0]:add.apply(window,x);
		} catch(e){
			var s = 0;
			while(x.length>=1){
				s = add(s,x.pop());
			}
			return s;
		}
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

	function pair(x,y){
		return [x,y];
	}

	function wrap(x){
		return [x];
	}

	function unique(x){
		if(typeof x==="string") return unique(x.split("")).join("");
		var r = [];
		for(var i=0;i<x.length;i++){
			if(!r.has(x[i]))r.push(x[i]);
		}
		return r;
	}

	function degToRad(x){
		if(Array.isArray(x)) return x.join(",");
		else if(typeof x==="string") return x.split(",");
		return x/180*Math.PI;
	}

	function radToDeg(x){
		return x/Math.PI*180;
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

	function firstN(max,con){
		var ind = arguments[2]||0;
		var off = arguments[2]||0;
		var res = [];
		while(ind<max+off){
			if(con(ind)){
				res.push(ind);
			} else {
				off++;
			}
			ind++;
		}
		return res;
	}

	function generateWhileCond(generator,condition){
		var args = arguments[2]||[];
		var ret = [], inst = generator(...args);
		var val;
		// while there does not exist an element that satisfies condition
		while(!ret.some(condition)){
			val = inst.next();
			if(!val.done) ret.push(val.value);
			else break;
		}
		// the last element, i.e. the element that triggered the condition
		return ret[ret.length-1];
	}

	// for when we're only interested in the last yield, from which
	// the condition will select.
	function doubleGenSelect(generator,min,max,condition){
		var i = min, cur, val, tVal, rVal = [];
		while(i<max){
			cur = generator(i), tVal = [];
			// exhaust the generator
			do {
				val = cur.next();
				tVal.push(val);
			} while(!val.done);
			tVal.pop();
			rVal.push(tVal.pop().value);
			i++;
		}
		return rVal;
	}

	function allBelow(max,con){
		return range(0,max).filter(function(e){return con(e)});
	}

	// expects a linear function as func
	function belowFunc(max,func){
		var i = 0, res = [];
		while(func(i)<max){
			res.push(func(i++));
		}
		return res;
	}

	function firstSatisfying(func){
		return firstN(1,func,arguments[1]||0)[0];
	}

	function maxUnder(max,genFunc){

	}

	function ord(s){
		return s.length==1?s.charCodeAt():s.split("").map(function(e){return String.greekPointAt(e)});
	}

	function sliceUntil(comp,func){
		if(typeof comp==="string") return sliceUntil(comp.split(""),func).join("");
		else if(typeof comp==="number") return +sliceUntil(comp+"",func);
		else {
			var i = 0, res = [];
			while(!func(comp[i])&&i<comp.length){
				res.push(comp[i++]);
			}
			if(typeof comp[i]!=="undefined")res.push(comp[i]);
			return res;
		}
	}

	function everyCompare(arr,func){
		if(typeof func!=="function") return arr.every(function(e){return e===func});
		var arity = func.length||0;
		for(var i=0;i<arr.length;i++){
			var x = arr.slice(i,i+arity);
			if(x.length<arity) return true;
			if(!func.apply(this,x)) return false;
		}
		return true;
	}

	function plusMinus(x,y){
		return [add(x,y),sub(x,y)];
	}

	function inside(x){
		if(typeof x==="number") return +inside(x);
		return x.slice(1,-1);
	}

	function gamma(x){
		if(typeof x==="number") return math.gamma(x);
		else if(typeof x==="string") return x.replace(/./,"$&$&");
		else if(Array.isArray(x)) return Array.flattenTo(x.map(function(e){return [e,e]}),1);
	}

	// from http://stackoverflow.com/a/728694/4119004
	function clone(e){var n;if(null==e||"object"!=typeof e)return e;if(e instanceof Date)return n=new Date,n.setTime(e.getTime()),n;if(e instanceof Array){n=[];for(var t=0,r=e.length;r>t;t++)n[t]=clone(e[t]);return n}if(e instanceof Object){n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=clone(e[o]));return n}throw new Error("Unable to copy obj! Its type isn't supported.")}

	(function(N){var x=window[N];delete window[N];window[N]=function(num){return Array.isArray(num)?x(num.join("")):num===""?undefined:x(num);}})("Number");

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

	function span(array,condition){
		var res=[];
		for(var i=0;i<array.length;i++){res.push(i);if(!condition(array[i],i,array))break;}
		return res;
	}
	shoco.c = function (str) { return Array.prototype.map.call(shoco.compress(str), function (char) { return jolf("~ ")[char] }).join("") };
	shoco.C = function (str) { return Array.prototype.map.call(shoco.compress(str), function (char) { return jolf("~ ")[255-char] }).join("") };
	shoco.d = function (str) { return shoco.decompress(new Uint8Array( ( str.constructor == Array ? str[0] : str ).split("").map(function (char) {return jolf("~ ").indexOf(char)})))};
	shoco.D = function (str) { return shoco.decompress(new Uint8Array( ( str.constructor == Array ? str[0] : str ).split("").map(function (char) {return 255-jolf("~ ").indexOf(char)})))};

	function decompress(string){
		return shoco;
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
		"K":1,
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

	Array.prototype.e = Array.prototype.every;/*function(f){
		return this.every(function(a,b,c){
			console.log([a,b,c].slice(0,f.length));
			f.apply(this,[a,b,c].slice(0,f.length-1));
		});
	}*/
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
			return this.map(function(el,index,arr){
				var a = Array.from(arguments);
				return f.apply(window,a.slice(0,f.length));
			});
		} else {
			try {
				jolf(f,0,0,[]);
				return this.map(function(a,b,c){
					jolf(f,a,b,c);
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

	String.prototype.F = function forEach(f){
		var x;
		for(var i=0;i<this.length;i++){
			x = f(this[i],i,this);
		}
		return x;
	}
	String.prototype.E = String.prototype.replace;
	String.prototype.h = String.prototype.has = function(x){
		if(arguments.length>1) return this.has(x)&&this.has.apply(this,Array.from(arguments).slice(1));
		return !!(1+this.search(new RegExp(x,"g")));
	}
	String.prototype.i = String.prototype.indexOf;
	String.prototype.K = String.prototype.findindex;
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
	Math.Δ = function triangle(n){
		return (n*n+n)/2;
	}
	Math.δ = divisors;
	Math["|"] = function divides(a,b){
		if(Array.isArray(a)) return a.some(function(e){return Math.divides(e,b)});
		return b%a==0;
	}
	Math.τ = function dividesConjuction(a,b){
		if(Array.isArray(a)&&Array.isArray(b)) return a.every(function(e,i){return Math.divides(e,b[i])})
		if(Array.isArray(a)) return a.every(function(e){return Math.divides(e,b)});
		return b%a==0;
	}
	Math["Φ"] = function customFib(n,s1,s2){
		life[[s1,s2]] = life[[s1,s2]]||[s1,s2];
		if(typeof life[[s1,s2]][n]!=="undefined"){
			return life[[s1,s2]][n];
		} else {
			return Math["Φ"](n-1,s1,s2)+Math["Φ"](n-2,s1,s2);
		}
	}
	Math[5] = function floorDiv(a,b){
		return Math.floor(a/b);
	}
	Math[6] = function toFixed(a,b){
		return a.toFixed(b);
	}
	Math[7] = function toExponential(a,b){
		return a.toExponential(b);
	}
	Math["@"] = function toExponential(a){
		return a.toExponential();
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
	Math["\t"] = function firstNPrimes(n){
		Math["}"](n);
		return Math.memoized["}"].slice(0,n);
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
	Math["°"] = 360/(1+(1+Math.sqrt(5))/2);
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
	Math["©"] = function breakSign(n){
		return [Math.sign(n),Math.abs(n)];
	}
	Math["½"] = function floorHalf(n){
		return Math.floor(n/2);
	}
	Math.ε = Math.pow(2,-52)
	Math["²"] = function squareFree(x){
		return jolf("=Ζm)jμζ",x);
	}
	Math.ρ = function parity(x){
		return x%2;
	}
	Math["±"] = function times2minus1(x){
		return 2*x-1;
	}
	Math.β = toBaseArr;
	Math.Β = function nthPermutationOfLength(n,l,charset){
		var q = charset.length;
		n -= Math.pow(q,l-1);
		return toBaseArr(n,q).map(function(e){return charset[e]}).join("");
	}
	Math["§"] = function nthPermutation(n,charset){
		var q = charset.length;
		return toBaseArr(n,q).map(function(e){return charset[e]}).join("");
	}
	Math.Γ = {};
	Math.Γ.q = function quadraticFormula(a,b,c){
		// JΜ±_jU-QjΤ4Jxd/HώJ
		return plusMinus(-b,Math.sqrt(b*b-4*a*c)).map(function(E){return E/2/a;});
	}
	Math.Γ.Q = function quadraticFormulaIm(a,b,c){
		return [math.eval("a=2;b=4;c=-5;(-b+sqrt(b^2-4*a*c))/2/a").entries+"",math.eval("a=2;b=4;c=-5;(-b-sqrt(b^2-4*a*c))/2/a").entries+""]
	}
	Math.Γ.c = function collatz(n){
		var a = [];
		while(n!==1){
			a.push(n);
			if(n%2==0) n/=2;
			else {n*=3;n++}
		}
		a.push(1);
		return a;
	}
	Math.Γ.C = function collatzLength(n){
		return Math.Γ.c(n).length;
	}
	for(var k in Math.Γ) Math.Γ[Math.Γ[k].name] = Math.Γ[k];
	Math.γ = {};
	try {
		// ES6 code tester
		eval("function*a(){}");
		eval("x=>x");
		eval("Math.γ.c = function* collatz(val){\
			var step = 0, vals = [];\
			while(val !== 1){\
				vals.push(val);\
				if(val % 2 == 0) val /= 2;\
				else val*=3, val++;\
				yield val;\
				step++;\
			}\
			yield [step,vals];\
			return ret = {done:true};\
		}\
		Math.γ.p = function* pythagTriple(){\
			var m = 2, n = 1, t = [], a, b, c;\
			while(true){\
				a = m*m-n*n, b = 2*m*n, c = m*m+n*n;\
				// check for duplicates\
				if(t.every((y,i)=>!Math.τ(y,[a,b,c][i])))\
					yield [a,b,c];\
				t.push([a,b,c]);\
				n++;\
				if(n>=m) m++,n=1;\
			}\
		}\
		for(var k in Math.γ){\
			Math.γ[Math.γ[k].name] = Math.γ[k];\
		}");
	} catch(e){
		console.log("Warning: your browser does not support generators/ES6, and thus may not be able to execute some Jolf code.");
		console.log(e);
	}
	for(i in Math){Math[Math[i].name]=Math[i]};
	// adding string stuff
	String[5] = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\xA0‘’£€₯¦§¨©ͺ«¬\\xad­―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ";
	String["«"] = shoco.c;
	String["»"] = shoco.d;
	function d(h){for(var r,t,u=[],e=0,n=h.length;n>e;)r=h.charCodeAt(e++),r>=55296&&56319>=r&&n>e?(t=h.charCodeAt(e++),56320==(64512&t)?u.push(((1023&r)<<10)+(1023&t)+65536):(u.push(r),e--)):u.push(r);return u}
	String["©"] = d;
	String["γ"] = close;
	String["ϊ"] = function chop(n,s){
		return s.slice(n,-n);
	}
	String.A = String.fromCharCode;
	String.a = String.fromCodePoint;
	String.κ = function(s){
		return String.fromCharCOde(s);
	}
    String.Ω = function fromGreekPoint(n){
		return jolf("~ ")[n]||String.fromCharCode(n);
	}
	String.ω = function greekPointAt(n){
		return jolf("~ ").indexOf(n);
	}
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
		return x.split("\n").map(function(e){return e.trim()}).join("\n");
	}
	String.d = function applyTag(a,x){
		return "<"+a+">"+x+"</"+a+">";
	}
	String.D = function removeTag(a,x,c){
		if(a==null||typeof a==="undefined") x.replace(/<(.+?)>(.+?)<\/\1>/g,c?"$2":"");
		else return x.replace(RegExp("<"+RegExp.escape(a)+".+?>(.+?)</"+RegExp.escape(a)+">"),c?"$1":"");
	}
	String.Δ = function removeAllTags(x){
		return x.replace(/<\/?.+?>/g,"");
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
			if(typeof s[i]==="undefined"){}
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
		var mLx = Math.max.apply(this,String.m(x).map(function(e){return e.length}));
		var mLy = Math.max.apply(this,String.m(y).map(function(e){return e.length}));
		return String.I(x,y,mLx,0);
	}
	String.N = function joinSideBySideBottom(x,y){

	}
	String.o = function flip(x){
		return x.split("\n").reverse().join("\n");
	}
	String.O = function mirror(x){
		return x.split("\n").map(function(e){return e.split("").reverse().join("")}).join("\n");
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
	String.x = function toLowerCase(x){
		return x.toLowerCase();
	}
	String.X = function toUpperCase(x){
		return x.toUpperCase();
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
		return {Alpha:"Α",alpha:"α",Beta:"Β",beta:"β",Gamma:"Γ",gamma:"γ",Delta:"Δ",delta:"δ",Epsilon:"Ε",epsilon:"ε",Zeta:"Ζ",zeta:"ζ",Eta:"Η",eta:"η",Theta:"Θ",theta:"θ",Iota:"Ι",iota:"ι",Kappa:"Κ",kappa:"κ",Lambda:"Λ",lambda:"λ",Mu:"Μ",mu:"μ",Nu:"Ν",nu:"ν",Xi:"Ξ",xi:"ξ",Omicron:"Ο",omicron:"ο",Pi:"Π",pi:"π",Rho:"Ρ",rho:"ρ",Sigma:"Σ",sigma:"σ",Tau:"Τ",tau:"τ",Upsilon:"Υ",upsilon:"υ",Phi:"Φ",phi:"φ",Chi:"Χ",chi:"χ",Psi:"Ψ",psi:"ψ",Omega:"Ω",omega:"ω"}[x];
	}
	String.α = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
	String.Α = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"];
	String.β = "αβγδεζηθικλμνξοπρστυφχψω";
	String.Β = ["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","υ","φ","χ","ψ","ω"];
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
	String[4] = function interweave(a,b){
		var a = Array.from(arguments).map(function(x){return x.split("")});
		var i = 0;
		var res = "";
		while(a.length){
			a[i].length?(res+=a[i].shift()):a.splice(i,1);
			i++;
			i%=a.length;
		}
		return res;
	}
	String[6] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	String["^"] = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	String[7] = "";
	String[8] = function subOfLen(str,len){
		var q = [];
		for(var i=0;i<str.length-len+1;i++){
			q.push(str.substr(i,len));
		}
		return q;
	}
	for(i in String){String[String[i].name]=String[i]};
	Array[0] = function displayArr(a){
		return a.map(function(y){return y.map(function(t){return JSON.stringify(t)}).join("\t")}).join("\n")
	}
	// from http://codegolf.stackexchange.com/questions/69560/display-2d-array-as-ascii-table
	Array[1] = function asciiTable(n,r){var a=n[0].map(function(r,a){var i=n.map(function(n){return void 0!=n[a]?n[a].length:0});return Math.max.apply(Math,i)});n=n.map(function(n){return"| "+n.map(function(n,r){var i=n.length;return i<a[r]&&(n+=new Array(a[r]-i+1).join(" ")),n}).join(" | ")+" |"});var i="+"+a.map(function(n){return new Array(n+3).join("-")}).join("+")+"+";return r?i+"\n"+n[0]+"\n"+i+"\n"+n.slice(1).join("\n")+"\n"+i:i+"\n"+n.join("\n")+"\n"+i}
	Array[2] = function allEqualTo(a,n){
		return a.every(function(H){return Array.isArray(n)?n.some(function(e){return e==H}):H==n;});
	}
	Array.a = function makeArray(x,y){
		return jolf("Zb*[J]j",x,y);
	}
	Array.A = function zeroArray(n){
		return jolf("Zb*[0]j",n);
	}
	Array.b = function bigUnion(x){
		var res = [];
		x.forEach(function(e){
			res=res.concat(e);
		});
		return Array.m(res)?Array.b(res):res;
	}
	Array.B = function intersection(x,y){
		return x.filter(function(e){return y.indexOf(e)>=0});
	}
	Array.c = function chop(x,c){
		var res=[];
		for(var i=0;i<x.length;i+=c){
			res.push(x.slice(i,i+c));
		}
		return res;
	}
	Array.C = function cumSum(x){
		return x.map(function(e,i){
			return x.slice(0,i+1).reduce(function(a,b){return a+b},0);
		});
	}
	Array.d = function deltaList(x){
		if(typeof x==="number") return Array.d(x+"").split("").map(Number);
		if(typeof x==="string") return Array.d(x.split("")).join("");
		var y=clone(x);y.pop();
		return y.map(function(e,i){
			return x[i+1]-x[i];
		});
	}
	Array.D = function number(x){
		return x.split("").map(Number);
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
	Array.g = function cumProd(x){
		return x.map(function(e,i){
			return x.slice(0,i+1).reduce(function(a,b){return a*b},1);
		});
	}
	Array.G = function cumFunc(x,f,d){
		return x.map(function(e,i){
			return x.slice(0,i+1).reduce(f,d);
		});
	}
	Array.h = function allButLast(x){
		if(typeof x==="number") return +(Array.h(x+""));
		return x.slice(0,-1);
	}
	Array.H = function allButFirst(x){
		if(typeof x==="number") return +(Array.H(x+""));
		return x.slice(1);
	}
	Array.i = function reverseLines(x){
		return x.split("\n").reverse().join("\n");
	}
	Array.j = function allButLastN(x,n){
		if(typeof x==="number") return +(Array.j(x+"",n));
		return x.slice(0,x.length-n);
	}
	Array.J = function firstN(x,n){
		if(typeof x==="number") return +(Array.J(x+"",n));
		return x.slice(0,n);
	}
	Array.k = function min(x){
		return Math.min.apply(Math,x);
	}
	Array.K = function max(x){
		return Math.max.apply(Math,x);
	}
	Array.l = function numberOf(x,n){
		if(typeof x==="number") return Array.l(x+"",n);
		if(typeof x==="string") return Array.l(x.split(""),n);
		return x.filter(function(e){return equals(e,n)}).length
	}
	Array.L = function shiftLeft(x,n){
		// or rotate
		while(n-->0){
			var k = x.shift();
			x.push(k);
		}
		return x;
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
	Array.n = function min(x){
		return Math.min.apply(Math,x);
	}
	Array.N = function max(x){
		return Math.max.apply(Math,x);
	}
	Array.o = function maxLength(x){
		return Math.max.apply(this,x.map(function(e){return e.length}));
	}
	Array.O = function shiftRight(x,n){
		// or rotate
		while(n-->0){
			var k = x.pop();
			x=[k].concat(x);
		}
		return x;
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
	Array.P = function transpose(x){
		var res=[];
		for(var n=0;n<x[0].length;){}
	}
	Array.q = function sort(x){
		return x.sort();
	}
	Array.Q = function sortNumbers(x){
		return x.sort(function(x,y){return 2*(y<x)-1});
	}
	Array.r = function rotate(x){
		var rotated = clone(x);
		var n=x.length;
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++){
				rotated[i][j]=x[n-j-1,i];
			}
		}
		return rotated;
	}
	Array.R = function rotateNeg90(x){
		var rotated = clone(x);
		var n=x.length;
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++){
				rotated[i][j]=x[n-j-1,i];
			}
		}
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
	Array.T = function trim(x){
		return x.map(function(e){return e.trim();})
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
	Array.u = function evenOf(x){
		return x.filter(function(e){return e%2==0});
	}
	Array.U = function oddOf(x){
		return x.filter(function(e){return e%2});
	}
	Array.v = function minKey(x){
		return [y=Array.min(x),x.indexOf(y)];
	}
	Array.V = function maxKey(x){
		return [y=Array.max(x),x.indexOf(y)];
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
	Array.x = {};
	Array.x.A = function modular(n){
		return jolf("ZXZyjjd%+Sn2",n);
	}
	Array.x.a = function reverseModular(n){
		return jolf("ZXZyjjdw-2%+Sn2",n);
	}
	Array.x.B = function modularM(n,m){
		return jolf("ZXZyjjd%+SnJ",n,m);
	}
	Array.x.b = function reverseModularM(n,m){
		return jolf("ZXZyjjdw-J%+SnJ",n,m);
	}

	Array.X = function matrixMap(X,f){
		for(var i=0;i<X.length;i++){
			for(var j=0;j<X[0].length;j++){
				X[i][j] = f(X[i][j],i,j);
			}
		}
		return X;
	}
	Array.y = function matrix(width,height){
		var a = [];
		for(var i=0;i<width;i++){
			a[i] = [];
			for(var j=0;j<height;j++){
				a[i][j] = 0;
			}
		}
		return a;
	}
	Array.Y = function matrixFunction(width,height,func){
		var a = [];
		for(var i=0;i<width;i++){
			a[i] = [];
			for(var j=0;j<height;j++){
				a[i][j] = func(i,j,a)||0;
			}
		}
		return a;
	}
	Array.z = function maxFunction(min,max,funcA,funcB){
		var mFound = -Infinity, nR;
		for(var i=min;i<max+1;i++){
			for(var j=i+1;j<max+1;j++){
				nR = funcA(i,j);
				if(nR>mFound&&funcB(nR)) mFound = nR;
			}
		}
		return mFound;
	}
	Array.Z = function ZZ(){
		return "top!";
	}
	Array.ρ = function lengthParity(x){
		return x.length%2;
	}
	for(var key in Array)Array[Array[key].name]=Array[key];
	Date[0] = Date.parse;
	Date[1] = Date.now;
	Date[2] = Date.UTC;
	Date[3] = function nowInstnace(){
		return new Date(Date.now());
	}
	Date[4] = function nowTimeHMS(){
		return [Date.d(),Date.f(),Date.h()];
	}
	Date[5] = function nowTimeHM(){
		return [Date.d(),Date.f()];
	}
	Date["$"] = function nowTimeUTCHMS(a,b,c){
		return jolf("‘fDm:fFm:fHm:’",a,b,c);
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
	RegExp.I = function replaceGlobal(a,b,c){
		return a.replace(RegExp(b,"g"),c)
	}
	RegExp.j = function replaceFirst(a,b,c){
		return a.replace(b,c);
	}
	RegExp.J = function replaceMultilineGlobal(a,b,c){
		return a.replace(RegExp(b,"gm"),c);
	}
	RegExp.q = function expandRange(r){
		r=r.match(/.-.|./g);
		var res=[];
		r.forEach(function(e){
			var ret,s,t;
			if(e.has("-")){
				ret = [];
				e=e.split("-");
				s=e[0];t=e[1];
				console.log(s,t,e);
				for(var i=s.charCodeAt();i<=t.charCodeAt();i++){
					ret.push(String.fromCharCode(i));
				}
			} else ret = [e];
			res=res.concat(ret);
			return;
		});
		return res;
	}

	math.config({number:"bignumber",precision:300});
	mathC = clone(math);
	"abs0acos0acosh0acot0acoth0acsc0acsch0add0and0arg0asec0asech0asin0asinh0atan0atan20atanh0bellNumbers0bignumber0bitAnd0bitNot0bitOr0bitXor0boolean0catalan0cbrt0ceil0chain0clone0combinations0compare0compile0complex0composition0concat0conj0cos0cosh0cot0coth0cross0csc0csch0cube0deepEqual0det0diag0distance0divide0dot0dotDivide0dotMultiply0dotPow0equal0eval0exp0eye0factorial0filter0fix0flatten0floor0forEach0format0fraction0gamma0gcd0help0hypot0im0index0intersect0inv0isInteger0isNegative0isNumeric0isPositive0isZero0kldivergence0larger0largerEq0lcm0leftShift0log0log100lsolve0lup0lusolve0map0matrix0max0mean0median0min0mod0mode0multinomial0multiply0norm0not0nthRoot0number0ones0or0parse0parser0partitionSelect0permutations0pickRandom0pow0print0prod0quantileSeq0random0randomInt0range0re0resize0rightArithShift0rightLogShift0round0sec0sech0sign0sin0sinh0size0slu0smaller0smallerEq0sort0sparse0sqrt0square0squeeze0std0stirlingS20string0subset0subtract0sum0tan0tanh0to0trace0transpose0typeof0unaryMinus0unaryPlus0unequal0unit0usolve0var0xgcd0xor0zeros".split(0).forEach(function(e,i){mathC[String[5][i]]=mathC[e]=math[e]});
	mathC[6] = function eval(exp){
		var scope = {};
		jolf("\x10+plpu").forEach(function(e,i){
			scope[e]=i;
		});
		var res = math.eval(exp,scope);
		return res.entries?res.entries.length==1?res.entries[0]:res.entries:res;
	}
	mathC.x = math.bitXor;
	mathC["\x01"] = function getData(x){
		return x.data||x._data||x.re;
	}
	mathC["\x02"] = function imagToArray(x){
		return [x.re,x.im];
	}
	mathC["\x03"] = function displayImg(x){
		if(Array.isArray(x)) return x[0]+"+"+x[1]+"i";
		else return mathC["\x03"](mathC["\x02"](x));
	}

	document.a = function appendChild(x,y){
		x.appendChild(y);
	}
	document.c = document.createElement;
	document.C = function(){return document.getElementById("code")}
	document.g = document.getElementById;
	document.i = function addInnerHTML(element,html){
		element.innerHTML += html;
	}
	document.i = function addValue(element,val){
		element.value += val;
	}
	document.o = function(){return document.getElementById("input")}
	document.O = function(){return document.getElementById("output")}
	document.t = function attachText(element,text){
		element.appendChild(document.createTextNode(text));
	}

	var patterns = {};
	patterns.b = function rect(w,n,c){
		return ("!".repeat(w)+"\n").repeat(Math.abs(n)).trim().replace(/!/g,c);
	}
	patterns.s = function square(n,c){
		return ("!".repeat(n)+"\n").repeat(Math.abs(n)).trim().replace(/!/g,c);
	}
	patterns.t = function triangle(type,h,w,c){
		var res = "";
		switch(type){
			case 0:	// left-cornered right triangle
				// h = height, w = width
				for(var i=0;i<h;i++){
					res += c.repeat(Math.floor(w/h*(i+1)))+" ".repeat(w-Math.floor(w/h*(i+1)))+(i==h-1?"":"\n");
				}
				break;
			case 1: // centered triangle
				// h = height, w = scale factor
				for(var i=0;i<h;i++){
					var s = " ".repeat(w*(h-i-1));
					res += s+c.repeat(w*2*i+1)+s+(i==h-1?"":"\n");
				}
				break;
			case 2:
				for(var i=0;i<h;i++){
					res += c.repeat(Math.floor(w/h*(i+1)))+" ".repeat(w-Math.floor(w/h*(i+1)))+(i==h-1?"":"\n");
				}
				res = Array.i(res);
				break;
		}
		return res;
	}
	patterns.T = function triangleBase(h,w,c){
		return patterns.t(1,Math.ceil(h/2),w,c);
	}

	for(var i in patterns)patterns[patterns[i].name]=patterns[i];

	Error.log = console.error;

	Pen.prototype.customFunc = function(char,func){
		Pen.prototype[char] = func;
	}
	function chooseColor1(n){
		return ["#000000","#0000FF","#00FF00","#00FFFF","#FF0000","#FF00FF","#FFFF00","#FFFFFF"][n]||("rgb("+n+")");
	}
	function greyScale(n){
		v=n*255;
		return "rgb("+[v,v,v]+")";
	}
	function canvasSquare(x,y,width,color){
		var canvas = document.body.querySelector("canvas");
		var ctx = canvas.getContext("2d");
		var oldFillStyle = ctx.fillStyle+"";
		ctx.fillStyle = color;
		ctx.fillRect(x,y,width,width);
		var currentState = canvas.toDataURL();
		var redraw = new Image;
		redraw.src = currentState;
		if(x+width>canvas.width) canvas.width = x+width;
		if(y+width>canvas.height) canvas.height = y+width;
		redraw.onload = function(){ctx.drawImage(redraw,0,0);}
		ctx.fillStyle = oldFillStyle;
	}
	function setCanvasWidthHeight(h,w){
		if(typeof w==="undefined") w = h;
		document.body.querySelector("canvas").width = w;
		document.body.querySelector("canvas").height = h;
	}
	// canvas object
	var can = {
		"A":function(J){
			J.comp += "chooseColor1(";
			return 1;
		},
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
		"C":function(J){
			J.comp += "setCanvasWidthHeight(";
			return 2;
		},
		"D":function(J){
			J.comp += "setCanvasWidthHeight(";
			return 1;
		},
		"d":function(J){
			J.comp += "y.draw(";
			return 0;
		},
		"E":function(J){
			J.comp += "greyScale(";
			return 1;
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
		"S":function(J){
			J.comp += "canvasSquare(";
			return 4;
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
		"u":function(J){
			J.comp += "canvasRect(";
			return 5;
		},
	}

	function bAW(data){
		data = data.sort(function(a,b){return a-b;});
		var pivot = Math.floor(data.length/2);
		var mod = data.length%2;
		for(var i=a=d=b=0;i<pivot;a+=data[i],d+=data[i+pivot],b++,i++);
		var Q1 = a/b;
		console.log(data[pivot])
		var med = mod?data[pivot]:(data[pivot]+data[pivot-1])/2;
		var Q3 = d/b+mod;
		return [data[0],Q1,med,Q3,data[data.length-1]];
	}

	function drawBoxPlot(data){
		var info = bAW(data);
		var min  = info[0],
			Q1   = info[1],
			med  = info[2],
			Q3   = info[3],
			max  = info[4];
		console.log(info);
		var r =
		" ".repeat(Q1-min+1)+"┌"+"─".repeat(med-Q1)+"┬"+"─".repeat(Q3-med)+"┐"+" ".repeat(max-Q3)+"\n" +
		(data.length>3?"├":" ")+"─".repeat(Q1-min)+(data.length>3?"┤":"│")+" ".repeat(med-Q1)+"│"+" ".repeat(Q3-med)+(data.length>3?"├":"│")+"─".repeat(data.length>3?max-Q3:0)+(data.length>3?"┤":" ")+"\n" +
		" ".repeat(Q1-min+1)+"└"+"─".repeat(med-Q1)+"┴"+"─".repeat(Q3-med)+"┘"+" ".repeat(max-Q3);
		return r;
	}

	var Misc = {};
	Misc.a = function drawBox(w,h,o){
		if(typeof o==="undefined"){
			o = h;
			h = w;
		}
		o = o.split("");
		var corner = o[0] || "+";
		var horiz  = o[1] || "-";
		var vert   = o[2] || "|";
		var inner  = o[3] || " ";
		return corner+horiz.repeat(w-2)+corner+"\n"+
		String.repeatVertically(vert+inner.repeat(w-2)+vert,h-2)+corner+horiz.repeat(w-2)+corner;
	}
	Misc.b = bAW;
	Misc.B = drawBoxPlot;
	Misc.d = function boundBox(x){
		Array.o(String.m(x));
	}
	Misc.r = function rot13(s){
		return s.replace(/[A-Z]/g,function(m){
			return String[2](String.u,13)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[2](String.l,13)[String.l.indexOf(m)];
		});
	}
	Misc.R = function revRot13(s){
		return s.replace(/[A-Z]/g,function(m){
			return String[3](String.u,13)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[3](String.l,13)[String.l.indexOf(m)];
		});
	}
	Misc.s = function rotN(s,n){
		return s.replace(/[A-Z]/g,function(m){
			return String[2](String.u,n)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[2](String.l,n)[String.l.indexOf(m)];
		});
	}
	Misc.S = function revRotN(s,n){
		return s.replace(/[A-Z]/g,function(m){
			return String[3](String.u,n)[String.u.indexOf(m)];
		}).replace(/[a-z]/g,function(m){
			return String[3](String.l,n)[String.l.indexOf(m)];
		});
	}
	Misc.t = function bitShiftRight(a,b){
		return a>>b;
	}
	Misc.T = function bitShiftRightOne(a){
		return a>>1;
	}
	Misc.u = function bitShiftLeft(a,b){
		return a<<b;
	}
	Misc.U = function bitShiftLeftOne(a){
		return a<<1;
	}
	Misc["¬"] = function bitFlip(x){
		return parseInt(toBinary(x).split("").map(function(x){return +!+x}).join(""),2);
	}
	Misc["~"] = function bitwiseNegation(x){
		return ~Number(x);
	}
	Misc["|"] = function NAND(a,b){
		return !(a&&b);
	}
	Misc["^"] = function bitwiseNAND(a,b){
		return ~(a&b);
	}
}

var ctl = {
	"W": function(J){
		J.comp += "while(";
	},
	")": function(J){
		J.comp += "){";
		J.comp = J.comp.replace(/(while|if|repeat)\((.*)\){.*$/,function(m,p1,p2){
			return p1+" ("+p2.replace(/;*/g,"").replace(/;/g,",")+"){";
		});
	}
}

// constant-arity ops
var ops = {
	"»": function(J){
		J.comp += "shoco.d(\"";
		J.mode = 1;
		return 1;
	},
	"¦": function(J){
		J.comp += "numberDecompress(\"";
		J.mode = 1;
		return 1;
	},
	"#": function(J){
		J.comp += "toHex(";
		return 1;
	},
	"?": function(J){
		J.comp += "(";
		return [3,")",["?",":"]];
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
	"Η": function(J){
		J.comp += "parseInt(";
		return [1,",16)"];
	},
	"Ι": function(J){
		J.comp += "parseInt(";
		return [1,",2)"];
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
	"Φ": function(J){
		J.comp += "function(H,S,n,ά,έ,ή,ί){return ";
		return [1,"}"];
	},
	"~D": function(J){
		J.comp += "new Date(";
		return 1;
	},
	"e": function(J){
		J.comp += "jolf(";
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
	"₯": function(J){
		var x = "document[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof document[chrTemp]=="function"){
			J.comp += x;
			return document[chrTemp].length;
		} else {
			J.comp += "(function(J){return document[\""+chrTemp+"\"]})(";
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
		if(chrTemp=="Γ"){
			x += "\"][\"";
			var chrTemp2 = J.code[++J.index];
			x += chrTemp2;
			x += "\"](";
			if(typeof Math.Γ[chrTemp2]=="function"){
				J.comp += x;
				return Math.Γ[chrTemp2].length;
			} else {
				J.comp += "(function(J){return Math.Γ[\""+chrTemp+"\"]})(";
				return 0;
			}
		} else if(chrTemp=="‘"){
			J.mode = 9;
			J.comp += "parseInt(\"";
			return;
		} else if(chrTemp=="γ"){
			var chrTemp2 = J.code[++J.index];
			J.comp += "Math.γ."+Math.γ[chrTemp2].name;
			J.check();
			return;
		}
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
	"ρ": function(J){
		J.comp += "stepRange(";
		return 3;
	},
	"Q": function(J){
		J.comp += "square(";
		return 1;
	},
	"~R": function(J){
		J.comp += "setTimeout(function(){";
		return [2,")",["},"]];
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
		J.comp += "setInterval(function(){";
		return [2,")",["},"]];
	},
	"~C": function(J){
		J.comp += "clearInterval(";
		return 1;
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
		if(chrTemp=="x"){
			x += "\"][\"";
			var chrTemp2 = J.code[++J.index];
			x += chrTemp2;
			x += "\"](";
			if(typeof Array.x[chrTemp2]=="function"){
				J.comp += x;
				return Array.x[chrTemp2].length;
			} else {
				J.comp += "(function(J){return Array.x[\""+chrTemp+"\"]})(";
				return 0;
			}
		}
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
	"Υ": function(J){
		J.comp += "sliceUntil(";
		return 2;
	},
	"ό": function(J){
		J.comp += "ord(";
		return 1;
	},
	"\u03a2": function(J){
		J.comp += "("
		return [1,").charCodeAt()"];
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
	"~n": function(J){
		J.comp += "distinctN(";
		return 3;
	},
	"&": function(J){
		J.comp += "and(";
		return 2;
	},
	"|": function(J){
		J.comp += "or(";
		return 2;
	},
	",":function(J){
		var x = "Misc[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Misc[chrTemp]=="function"){
			J.comp += x;
			return Misc[chrTemp].length;
		} else {
			J.comp += "(function(J){return Misc[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"\x12": function(J){
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
	"\x03":function(J){
		return ~~(a%2);
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
		return [1,").charCodeAt().toString(16)"]
	},
	"Ψ": function(J){
		J.comp += "(ά,έ,ή)=>";
		return [1," "];
	},
	"φ": function(J){
		J.comp += "function(H,S){";
		return [1,"}"]
	},
	"χ": function(J){
		J.comp += "(";
		return [1,").shift()"];
	},
	"Α":function(J){
		var x = "Audio[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Audio[chrTemp]=="function"){
			J.comp += x;
			return Audio[chrTemp].length;
		} else {
			J.comp += "(function(J){return Audio[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"Χ":function(J){
		J.comp += "(";
		return [1,").pop()"];
	},
	"\u14ba": function(J){
		J.comp += "location = ";
		return [1,""];
	},
	"\u122b": function(J){
		J.comp += "location = ";
		return [1,".tryitonline.net"];
	},
	"\xb1":function(J){
		J.comp += "plusMinus(";
		return 2;
	},
	"~F": function(J){
		J.comp += "firstN(";
		return 2;
	},
	"~B": function(J){
		J.comp += "allBelow(";
		return 2;
	},
	"~b": function(J){
		J.comp += "belowFunc(";
		return 2;
	},
	"~d": function(J){
		J.comp += "firstSatisfying(function(H,S,n){return ";
		J.func.push([1,")"],[1,"}"]);
		return;
	},
	"~g": function(J){
		J.comp += "generateWhileCond(";
		return 2;
	},
	"~H": function(J){
		J.comp += "doubleGenSelect(";
		return 3;
	},
	"!": function(J){
		var x = "mathC[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof mathC[chrTemp]=="function"){
			J.comp += x;
			return mathC[chrTemp].length;
		} else {
			J.comp += "(function(J){return mathC[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"―": function(J){
		var x = "patterns[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof patterns[chrTemp]=="function"){
			J.comp += x;
			return patterns[chrTemp].length;
		} else {
			J.comp += "(function(J){return patterns[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"Έ": function(J){
		var x = "Error[\"";
		var chrTemp = J.code[++J.index];
		x += chrTemp;
		x += "\"](";
		if(typeof Error[chrTemp]=="function"){
			J.comp += x;
			return Error[chrTemp].length;
		} else {
			J.comp += "(function(J){return Error[\""+chrTemp+"\"]})(";
			return 0;
		}
	},
	"°": function(J){
		J.comp += "radToDeg(";
		return 1;
	},
	"{": function(J){
		J.comp += "degToRad(";
		return 1;
	},
	"Λ": function(J){
		J.comp += "capitalLambda(";
		return 2;
	},
	"Σ": function(J){
		J.comp += "summation(";
		return 3;
	},
	"Π": function(J){	// this be the function of my birth (was originally on line 2000)
		J.comp += "product(";
		return 3;
	},
	"κ": function(J){
		J.comp += "span(";
		return 2;
	},
	"δ": function(J){
		J.comp += "doForEach(";
		return 2;
	},
	"Μ": function(J){
		J.comp += "map(";
		return 2;
	},
	"ψ": function(J){
		J.comp += "filter(";
	},
	"Ε": function(J){
		J.comp += "everyCompare(";
		return 2;
	},
	"ͺ": function(J){
		J.comp += "pair(";
		return 2;
	},
	"²": function(J){
		J.comp += "wrap(";
		return 1;
	},
	"Ώ": function(J){
		if(J.enc.Ώ){
			J.comp += "Ώ(";
			return [1,")"];
		} else {
			J.enc.Ώ = true;
			J.comp += "(Ώ=function Ώ(H){return ";
			J.func.push([1.5,")"]);
			return [1,"})("];
		}
	},
	"Ύ": function(J){
		if(J.enc.Ύ){
			J.comp += "Ύ(";
			return [2,")"];
		} else {
			J.enc.Ύ = true;
			J.comp += "(Ύ=function Ύ(H,S){return ";
			J.func.push([2.5,")"]);
			return [1,"})("];
		}
	},
	"Ό": function(J){
		if(J.enc.Ό){
			J.comp += "Ό(";
			return [3,")"];
		} else {
			J.enc.Ό = true;
			J.comp += "(Ό=function Ό(H,S,n){return ";
			J.func.push([3.5,")"]);
			return [1,"})("];
		}
	},
	"Ί": function(J){
		if(J.enc.Ί){
			J.comp += "Ί(";
			return [4,")"];
		} else {
			J.enc.Ί = true;
			J.comp += "(Ί=function Ί(H,S,n,ά){return ";
			J.func.push([4.5,")"]);
			return [1,"})("];
		}
	},
	"Ή": function(J){
		if(J.enc.Ή){
			J.comp += "Ή(";
			return [J.Ή,")"];
		} else {
			var ar = J.Ή = J.code[++J.index].charCodeAt();
			J.enc.Ή = true;
			J.comp += "(Ή=function Ή(...H){return ";
			J.func.push([J.Ή+0.5,")"]);
			return [1,"})("];
		}
	},
	"ώ": function(J){
		J.comp += "double(";
		return 1;
	},
	"½": function(J){
		J.comp += "halve(";
		return 1;
	},
	"΄": function(J){
		J.comp += "sub(";
		return 3;
	},
	"Ά": function(J){
		J.comp += "add(";
		return 3;
	},
	"Τ": function(J){
		J.comp += "mul(";
		return 3;
	},
	"Ο": function(J){
		J.comp += "div(";
		return 3;
	},
	"€": function(J){
		J.comp += "inside(";
		return 1;
	},
	"Γ": function(J){
		J.comp += "gamma(";
		return 1;
	},
	"]": function(J){
		J.comp += "slice(";
		return 3;
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
	"\x05": function(J){
		J.comp += "\" \"";
	},
	"~ ": function(J){
		J.comp += "\"\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0a\\x0b\\x0c\\x0d\\x0e\\x0f\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f !\\\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\\x7f\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f\\x90\\x91\\x92\\x93\\x94\\x95\\x96\\x97\\x98\\x99\\x9a\\x9b\\x9c\\x9d\\x9e\\x9f ‘’£€₯¦§¨©ͺ«¬­―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ\"";
	},
	"τ": function(J){
		if(!J.enc.tau){
			J.prec += "var τ=2*Math.PI;";
			J.enc.tau = true;
		}
		J.comp += "τ";
	},
	"@": function(J){
		J.comp += J.code[++J.index].charCodeAt();
		return 1;
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
		if(!J.enc.n){
			J.prec += "var n=0;";
			J.enc.n = true;
		}
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
	"ζ": function(J){
		if(!J.enc.ζ){
			J.enc.ζ = true;
			J.prec += "var ζ=-1/12;"
		}
		J.comp += "ζ";
	},
	"j": function(J){
		if(!J.enc.j){
			J.prec += "var j=Number(prompt(\"j = \"));";
			J.enc.j = true;
		}
		J.comp += "j";
	},
	"ά": function(J){
		if(!J.enc.ά){
			J.prec += "var ά=16;";
			J.enc.ά = true;
		}
		J.comp += "ά";
	},
	"έ": function(J){
		if(!J.enc.έ){
			J.prec += "var έ=\"\t\";";
			J.enc.έ = true;
		}
		J.comp += "έ";
	},
	"ή": function(J){
		if(!J.enc.ή){
			J.prec += "var ή=\"\t\";";
			J.enc.ή = true;
		}
		J.comp += "έ";
	},
	"ί": function(J){
		if(!J.enc.ή){
			J.prec += "var ί=math.i;";
			J.enc.ή = true;
		}
		J.comp += "ί";
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
		J.comp += "\""+J.code.replace(/\\/g,"\\\\").replace(/(["\n])/g,"\\$1")+"\"";
	},
	"Ν": function(J){
		var l = String.greekPointAt(J.code[++J.index]);
		var s = J.code.slice(++J.index,J.index+=l);
		J.comp += fromBaseArr(s.split("").map(String.greekPointAt),256);
	},
	"t": function(J){
		J.comp += "10";
	},
	"π": function(J){
		J.comp += "Math.PI";
	},
	"~E": function(J){
		J.comp += "Math.E";
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
	"\u1592": function(J){
		J.comp += "\"Jolf\"";
	},
	"\u151b": function(J){
		J.comp += "\"Seriously\"";
	},
	"\u143b": function(J){
		J.comp += "\"Vitsy\"";
	},
	"\u1553": function(J){
		J.comp += "\"When I have a child, I will name them Vitsy, and they shall appreciate their namesake.\"";
	},
	"\u15f0": function(J){
		J.comp += "\"Minkolang\"";
	},
	"\xb6": function(J){
		J.comp += "\"pl\""
	},
	"λ": function(J){
		var next = J.code[++J.index];
		var par = J.ops;
		if("mpZ!,".search(RegExp.escape(next))+1){
			par="!"==next?"mathC":"m"==next?"Math":"p"==next?"String":"Z"==next?"Array":"Misc";
			next = J.code[++J.index];
		}
		var q = par[next];
		console.log(q,q=="*");
		var func = par==J.ops?(q+"").replace(/[\s\S]+"(.+?)\("[\s\S]+/gm,"$1"):par+"."+window[par][next].name;
		J.comp += func;
	},
	"΅": function(J){
		J.comp += "String."+String[J.code[++J.index]].name||String[J.code[++J.index]];
	},
	"©": function(J){
		J.comp += "Math."+Math[J.code[++J.index]].name||Math[J.code[++J.index]];
	},
	"β": function(J){
		J.comp += "Math.Γ."+Math.Γ[J.code[++J.index]].name||Math.Γ[J.code[++J.index]];
	},
	"ι":function(J){
		J.comp += J.index;
	},
	"Ξ": function(J){
		var char1 = String.greekPointAt(J.code[++J.index]);
		var char2 = String.greekPointAt(J.code[++J.index]);
		var char3 = String.greekPointAt(J.code[++J.index]);
		var ind = fromBaseArr([char1,char2,char3],256);
		var list = wordList;
		if(ind>=wordList.length){
			ind -= wordList.length;
			list = wordListSpace;
		}
		J.comp += "\""+list[ind].replace(/["\\\n]/g,"\\$&")+"\"";
	},
	"": function(J){}
}

// zero-arity functions
var mod = {
	"\"": function(J){
		J.comp += "\"";
		J.mode = 1;
	},
	"ξ": function(J){
		J.comp += "\"";
		J.mode = 10;
	},
	"«": function(J){
		J.comp += "`";
		J.mode = 7;
	},
	"Ζ": function(J){
		if(!J.enc.ζ){
			J.enc.ζ = true;
		}
		J.comp += "ζ=";
	},
	"γ": function(J){
		if(!J.enc.γ){
			J.comp += "γ=";
			J.enc.γ = true;
			J.func.push([1,""]);
		} else {
			J.comp += "γ";
			J.check();
		}
	},
	"Β": function(J){
		if(!J.enc.Β){
			J.comp += "Β=Number(";
			J.enc.Β = true;
			J.func.push([1,")"]);
		} else {
			J.comp += "Β";
			J.check();
		}
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
	"‘": function(J){
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
		J.func[J.func.length-1][0]+=3;
	},
	"~θ": function(J){
		J.func[J.func.length-2][0]+=3;
	},
	"M": function(J){
		J.func[J.func.length-1][0]+=2;
	},
	"~M": function(J){
		J.func[J.func.length-2][0]+=2;
	},
	";": function(J){
		J.func[J.func.length-1][0]++;
	},
	"~;": function(J){
		J.func[J.func.length-2][0]++;
	},
	"η": function(J){
		J.func[J.func.length-1][0]--;
	},
	"~η": function(J){
		J.func[J.func.length-2][0]--;
	},
	"\xad": function(J){
		J.func[J.func.length-1][0] = J.code[++J.index].charCodeAt();
	},
	"\u01a6": function(J){
		location = "jolf.html";
	},
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
	"o": function(J){
		return J.code[++J.index]+"="
	}
}

// jolf constructor
function Jolf(code){
	if(code.has("This. Is. Jolf!")){
		alert("-[--->+<]>-.[---->+++++<]>-.+.++++++++++.+[++>---<]>.++[--->++<]>.++++[->++<]>+.+[->+++++<]>+.+[++>---<]>.++[--->++<]>.+++++[->++<]>.[-->+++<]>.---.------.[--->+<]>-.");
		return;
	}
	this.code   = code.replace(/\s*\/\/.+\n/g,"");
	this.ctl    = clone(ctl);
	this.ops    = clone(ops);
	this.inf    = clone(inf);
	this.mod    = clone(mod);
	this.sbs    = clone(sbs);
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
	var read = this.comp.replace(/./g,function(e){
		r=e.charCodeAt();
		if((r<32||r>126)&&r<256)return "\\x"+String.pad(r+"",2,0);
		return e;
	});
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

Jolf.prototype.close = function(){
	//this.comp = close(this.comp);
}

Jolf.prototype.explanation = function(s){
	try {
		var r = this.comp.match(/\w+?\([^,(]+?\)|[)(,]|\w+/g);
		var res="";var t=0;var del=undefChoose(s,"\t");
		var prev = "";
		r.forEach(function(e,i){
			del = " ".repeat(prev.length+1);
			console.log(prev);
			switch(e){
				case"(":res+=e+"\n"+del.repeat(++t);prev=r[i-1];break;
				case",":res+=e+"\n"+del.repeat(t);break;
				case")":res+="\n"+del.repeat(--t)+e;break;
				default:res+=e;break;
			}
		});
		return this.prec+"\n"+res;
	} catch(e){
		return "Something has gone wrong. I'll look into it later. Perhaps post an issue?";
	}
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
		var res;
		try {
			res = eval(ret);
		} catch(e){
			if(e.message=="function statement requires a name"){
				this.unnamedFuncs = 0;
				//console.log(this.total,this.total.replace(/function\s*\((.+?)\)/,"function anonymous"+this.unnamedFuncs+"($1)"));
				this.total = this.total.replace(/function\s*\((.+?)\)/,"function anonymous"+this.unnamedFuncs+"($1)");
				console.log(this.total);
				eval(this.total);
			} else {
				throw e;
			}
		}
		return (this.outted?function(f){return f}:alert)(res);
	}
}

Jolf.prototype.check = function(J){
	if(!this.checkQ) return;
	if(this.prevCk) return prevCk = false;
	var funcRes = this.func.pop();
	if(typeof funcRes!=="undefined"){
		var consump = funcRes.shift();
		var ending = funcRes.shift();
		var intermediate = funcRes.shift();
		var callback = funcRes.shift();
		if(consump!==(consump|0)){
			this.func.push([consump|0,ending,intermediate,callback]);
			return;
		}
		if(!consump){
			this.comp += ending;	// ,
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
			this.comp += ending;	// ,
			x = this.check();
			if(x>0){
				if(typeof callback==="function")callback(this);
				var lst = this.comp.slice(-1);
				this.comp = this.comp.slice(0,-1);
				this.comp += this.fin + lst;
				this.fin = "";
			}
			return 0;
		} else {
			this.comp += Array.isArray(intermediate)?intermediate.shift():intermediate?intermediate:",";
			this.func.push([consump,ending,intermediate,callback]);
			return 0.5;
		}
	} else {
		this.comp += ";";
		return 1;
	}
}

Jolf.prototype.step = function(J){
	// checking index bounds / func stack
	if(debug)console.log(this.prec,this.comp);
	if(this.index > this.code.length){
		this.close();
		console.log("DONE")
		this.total = this.prec+this.comp;
		return false;
	}
	// var for char
	var chr = this.code[this.index];
	if(chr=="~"&&this.mode==0) chr+=this.code[++this.index];
	switch(this.mode){
		case 0:
			// read the character and get its type
			if(this.mod[chr]){	// if the character is a modifier
				this.mod[chr](this);
			} else if(this.ctl[chr]){	// if the character is a control
				this.ctl[chr](this);
			} else if(this.sbs[chr]){
				this.comp += this.sbs[chr](this);
			} else if(this.ops[chr]){ // if the character is an operator
				var arity = this.ops[chr](this);
				if(typeof arity!=="undefined"){
					var close = ")";
					var intermediate = ",";
					var callback = (function(){return;});
					if(Array.isArray(arity)){
						callback = arity[3]||callback;
						intermediate = arity[2]||intermediate;
						close = arity[1]||close;
						arity = arity[0]||arity;
					}
					if(!arity){
						//console.log(arity,!arity);
						this.comp += ")";
						this.check();
					} else {
						this.func.push([arity,close,intermediate,callback]);
					}
				}
			} else if(this.inf[chr]){	// if the character is data
				this.inf[chr](this);
			} else if(isNum(chr)){	// if the character is a number
				this.comp += chr;
				//while(isNum(this.code[++this.index])){
				//	this.comp += this.code[this.index];
				//}
				//this.index--;
			} else if(chr!="~"&&chr){
				//this.comp += chr;
			}
			if(this.inf[chr]||isNum(chr)){	// activate consumption
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
			} else if(chr=="¦"){
				this.comp += "\"+(";
				this.mode = 0;
				this.func.push([1,")+\"",",",function(J){console.log("TEST");J.mode=1;J.comp=J.comp.slice(0,-1);}]);
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
			} else if(chr=="\n"){
				this.comp += "\\n";
			} else if(chr=="Ξ"){
				var char1 = String.greekPointAt(this.code[++this.index]);
				var char2 = String.greekPointAt(this.code[++this.index]);
				var char3 = String.greekPointAt(this.code[++this.index]);
				var ind = fromBaseArr([char1,char2,char3],256);
				var list = wordList;
				if(ind>=wordList.length){
					ind -= wordList.length;
					list = wordListSpace;
				}
				this.comp += list[ind].replace(/["\\\n]/g,"\\$&");
			} else if(chr=="‘"){
				this.comp += "'";
			} else if(chr=="’"){
				this.comp += "\"";
			} else {
				this.comp += chr;
			}
			break;
		case 2:
			this.comp += "\"";
			this.comp += chr=="\n"?"\\n":chr;
			this.comp += "\"";
			this.check();
			this.mode = 0;
			break;
		case 3:	// array mode
			if(chr=="\\"){
				this.index++;
			}
			if(this.inf[chr]){
				this.inf[chr](this);
			} else {
				this.comp += this.code[this.index];
			}
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
			if(chr!="’"&&chr){
				this.build += this.code[this.index];
			} else if(chr=="’") {
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
		case 7:
			if(chr=="»"||typeof chr=="undefined"){
				this.mode = 0;
				this.comp += "`";
				this.check();
			} else this.comp += this.code[this.index]=="\\"?"\\\\":this.code[this.index];
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
		case 9: // quote number mode
			if("«‘’»".indexOf(chr)>=0){
				this.comp += "\","+["2","8","10","16"]["«‘’»".indexOf(chr)]+")";
				this.mode = 0;
				this.check();
			} else this.comp += chr;
			break;
		case 10:
			if(chr=="ώ"){
				this.mode = 0;
				this.comp += "\"";
				this.check();
			} else {
				--this.index;
				var char1 = String.greekPointAt(this.code[++this.index]);
				var char2 = String.greekPointAt(this.code[++this.index]);
				var char3 = String.greekPointAt(this.code[++this.index]);
				var ind = fromBaseArr([char1,char2,char3],256);
				var list = wordList;
				if(ind>=wordList.length){
					ind -= wordList.length;
					list = wordListSpace;
				}
				try {
					list[ind];
					console.log(char1,char2,char3,ind,list[ind].replace(/["\\\n]/g,"\\$&"));
					this.comp += list[ind].replace(/["\\\n]/g,"\\$&");
				} catch(e){
					this.comp += "\"";
				}
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

function jolf(code){
	args = Array.from(arguments).slice(1);
	var a = new Jolf(code);
	a.args = args;
	a.inf.i = function(J){
		if(!J.enc.i){
			J.prec += "var i=String("+JSON.stringify(J.args.shift())+");";
			J.enc.i = true;
		}
		J.comp += "i";
	}
	a.inf.I = function(J){
		if(!J.enc.I){
			J.prec += "var I=String("+JSON.stringify(J.args.shift())+");";
			J.enc.I = true;
		}
		J.comp += "I";
	}
	a.inf.j = function(J){
		if(!J.enc.j){
			J.prec += "var j=Number("+JSON.stringify(J.args.shift())+");";
			J.enc.j = true;
		}
		J.comp += "j";
	}
	a.inf.J = function(J){
		if(!J.enc.J){
			J.prec += "var J=Number("+JSON.stringify(J.args.shift())+");";
			J.enc.J = true;
		}
		J.comp += "J";
	}
	a.inf.k = function(J){
		if(!J.enc.k){
			J.prec += "var k=eval(\"[\"+"+JSON.stringify(J.args.shift())+"\")+\"]\");";
			J.enc.k = true;
		}
		J.comp += "k";
	}
	a.inf.K = function(J){
		if(!J.enc.K){
			J.prec += "var K=eval(\"[\"+"+JSON.stringify(J.args.shift())+"\")+\"]\");";
			J.enc.K = true;
		}
		J.comp += "K";
	}
	a.inf.x = function(J){
		if(!J.enc.x){
			J.prec += "try{var x=eval("+JSON.stringify(J.args.shift())+");}catch(e){var x=42;};";
			J.enc.x = true;
		}
		J.comp += "x";
	}
	a.inf.X = function(J){
		if(!J.enc.X){
			J.prec += "try{var X=eval("+JSON.stringify(J.args.shift())+");}catch(e){var X=42;};";
			J.enc.X = true;
		}
		J.comp += "X";
	}
	while(a.index<a.code.length)a.step();
	a.comp=a.comp.replace(/alert/g,"return");
	var res;
	try {
		res = (new Function(a.prec+a.comp))();
		if(typeof res==="undefined") throw new Error("lazy programming");
	} catch(e){
		res = (new Function(a.prec+"return "+a.comp))()
	}
	return res;
}
