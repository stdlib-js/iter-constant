// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterConstant=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var u=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,a,o,u,p,l,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",p=1,l=0;l<e.length;l++)if(s(i=e[l]))u+=i;else{if(r=void 0!==i.precision,!(i=_(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),u+=i.arg||"",p+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function $(e){var r,t;if(!F(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var W=A;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object.prototype.hasOwnProperty;function U(e,r){return null!=e&&B.call(e,r)}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var D=M()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[q],r=U(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[q]=t:delete e[q],i}:function(e){return z.call(e)};var H=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};var J=/./;function K(e){return"boolean"==typeof e}var Q=Boolean,ee=Boolean.prototype.toString;var re=M();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function ie(e){return K(e)||te(e)}function ne(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(n):ae(n)+e,i&&(e="-"+e)),e}G(ie,"isPrimitive",K),G(ie,"isObject",te);var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ue(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var le=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,be=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=de.call(t,Ee,"$1e"),t=de.call(t,me,"e"),t=de.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,be,"e-0$1"),e.alternate&&(t=de.call(t,we,"$1."),t=de.call(t,ve,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)}function ke(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ke(i):ke(i)+e}var je=String.fromCharCode,_e=isNaN,Ie=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ve(e){var r,t,i,n,a,o,c,s,u;if(!Ie(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Te(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,_e(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,_e(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ue(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!_e(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_e(a)?String(i.arg):je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Oe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $e(e){var r,t,i,n;for(t=[],n=0,i=Oe.exec(e);i;)(r=e.slice(n,Oe.lastIndex-i[0].length)).length&&t.push(r),t.push(Fe(i)),n=Oe.lastIndex,i=Oe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ae(e){return"string"==typeof e}function Ce(e){var r,t;if(!Ae(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$e(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ve.apply(null,r)}function Re(){return new Function("return this;")()}var Pe="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Ze="object"==typeof global?global:null,Le="object"==typeof globalThis?globalThis:null;var We=function(e){if(arguments.length){if(!K(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Le)return Le;if(Pe)return Pe;if(Ne)return Ne;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=We.document&&We.document.childNodes,Be=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;function Me(e){return null!==e&&"object"==typeof e}function ze(e){var r,t,i,n;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Xe.exec(i.toString()))return r[1]}return Me(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Ue,"REGEXP",Xe),G(Me,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!H(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Me));var Ye="function"==typeof J||"object"==typeof Be||"function"==typeof Ge?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function qe(e){return"function"===Ye(e)}var De,He=Object,Je=Object.getPrototypeOf;De=qe(Object.getPrototypeOf)?Je:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===D(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ke=De;var Qe=Object.prototype;function er(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!H(e)}(e)&&(r=function(e){return null==e?null:(e=He(e),Ke(e))}(e),!r||!U(e,"constructor")&&U(r,"constructor")&&qe(r.constructor)&&"[object Function]"===D(r.constructor)&&U(r,"isPrototypeOf")&&qe(r.isPrototypeOf)&&(r===Qe||function(e){var r;for(r in e)if(!U(e,r))return!1;return!0}(e)))}function rr(e){return"number"==typeof e}var tr=Number,ir=tr.prototype.toString;var nr=M();function ar(e){return"object"==typeof e&&(e instanceof tr||(nr?function(e){try{return ir.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function or(e){return rr(e)||ar(e)}G(or,"isPrimitive",rr),G(or,"isObject",ar);var cr=Number.POSITIVE_INFINITY,sr=tr.NEGATIVE_INFINITY,ur=Math.floor;function pr(e){return e<cr&&e>sr&&ur(r=e)===r;var r}function lr(e){return rr(e)&&pr(e)}function fr(e){return ar(e)&&pr(e.valueOf())}function gr(e){return lr(e)||fr(e)}function dr(e){return lr(e)&&e>=0}function hr(e){return fr(e)&&e.valueOf()>=0}function br(e){return dr(e)||hr(e)}G(gr,"isPrimitive",lr),G(gr,"isObject",fr),G(br,"isPrimitive",dr),G(br,"isObject",hr);var wr="function"==typeof Symbol?Symbol:void 0;var vr="function"==typeof wr&&"symbol"==typeof wr("foo")&&U(wr,"iterator")&&"symbol"==typeof wr.iterator?Symbol.iterator:null;function yr(e){return"number"==typeof e}function mr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Er(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+mr(n):mr(n)+e,i&&(e="-"+e)),e}var xr=String.prototype.toLowerCase,kr=String.prototype.toUpperCase;function Sr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!yr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Er(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Er(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===kr.call(e.specifier)?kr.call(t):xr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function jr(e){return"string"==typeof e}var _r=Math.abs,Ir=String.prototype.toLowerCase,Tr=String.prototype.toUpperCase,Vr=String.prototype.replace,Or=/e\+(\d)$/,Fr=/e-(\d)$/,$r=/^(\d+)$/,Ar=/^(\d+)e/,Cr=/\.0$/,Rr=/\.0*e/,Pr=/(\..*[^0])0*e/;function Nr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!yr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":_r(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Vr.call(t,Pr,"$1e"),t=Vr.call(t,Rr,"e"),t=Vr.call(t,Cr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Vr.call(t,Or,"e+0$1"),t=Vr.call(t,Fr,"e-0$1"),e.alternate&&(t=Vr.call(t,$r,"$1."),t=Vr.call(t,Ar,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Tr.call(e.specifier)?Tr.call(t):Ir.call(t)}function Zr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Lr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Zr(i):Zr(i)+e}var Wr=String.fromCharCode,Gr=isNaN,Br=Array.isArray;function Ur(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Xr(e){var r,t,i,n,a,o,c,s,u;if(!Br(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(jr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ur(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Gr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Gr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Sr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Gr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Gr(a)?String(i.arg):Wr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Nr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Er(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Lr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Mr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function zr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Yr(e){var r,t,i,n;for(t=[],n=0,i=Mr.exec(e);i;)(r=e.slice(n,Mr.lastIndex-i[0].length)).length&&t.push(r),t.push(zr(i)),n=Mr.lastIndex,i=Mr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qr(e){return"string"==typeof e}function Dr(e){var r,t,i;if(!qr(e))throw new TypeError(Dr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Yr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Xr.apply(null,t)}return function e(r){var t,i,n,a,o;if(i={iter:1e308},arguments.length>1){if(!er(t=arguments[1]))throw new TypeError(Dr("invalid argument. Options argument must be an object. Value: `%s`.",t));if(U(t,"iter")&&(i.iter=t.iter,!dr(t.iter)))throw new TypeError(Dr("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter))}return o=0,G(n={},"next",c),G(n,"return",s),vr&&G(n,vr,u),n;function c(){return o+=1,a||o>i.iter?{done:!0}:{value:r,done:!1}}function s(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(r,i)}}}));
//# sourceMappingURL=index.js.map
