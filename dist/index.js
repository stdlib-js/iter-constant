"use strict";var d=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var g=d(function(O,f){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function v(t){var r,i,e,u,n;if(i={iter:1e308},arguments.length>1){if(r=arguments[1],!b(r))throw new TypeError(s('0Od2V',r));if(q(r,"iter")&&(i.iter=r.iter,!h(r.iter)))throw new TypeError(s('0Od2t',"iter",r.iter))}return n=0,e={},a(e,"next",m),a(e,"return",p),o&&a(e,o,l),e;function m(){return n+=1,u||n>i.iter?{done:!0}:{value:t,done:!1}}function p(c){return u=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return v(t,i)}}f.exports=v
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map