// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(d){var m,l,p,a,j;if(l={iter:1e308},arguments.length>1){if(!n(m=arguments[1]))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",m));if(t(m,"iter")&&(l.iter=m.iter,!r(m.iter)))throw new TypeError(s("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",m.iter))}return j=0,e(p={},"next",u),e(p,"return",v),i&&e(p,i,h),p;function u(){return j+=1,a||j>l.iter?{done:!0}:{value:d,done:!1}}function v(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return o(d,l)}}export{o as default};
//# sourceMappingURL=index.mjs.map
