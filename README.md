<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterConstant

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which always returns the same value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterConstant from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-constant@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/iter-constant/tags). For example,

```javascript
import iterConstant from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-constant@v0.2.0-esm/index.mjs';
```

#### iterConstant( value\[, options] )

Returns an iterator which always returns the same value.

```javascript
var it = iterConstant( 3.14 );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterConstant( 3.14, opts );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided an `object` reference, the returned iterator always returns the same reference.

    ```javascript
    var arr = [ 1, 2, 3, 4 ];

    var it = iterConstant( arr );
    // returns <Object>

    var v1 = it.next().value;
    // returns [ 1, 2, 3, 4 ]

    var bool = ( v1 === arr );
    // returns true

    var v2 = it.next().value;
    // returns [ 1, 2, 3, 4 ]

    bool = ( v2 === arr );
    // returns true

    // ...
    ```

    To avoid unwanted `object` mutation, copy a provided `value` **before** creating an iterator.

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import iterConstant from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-constant@esm/index.mjs';

// Create an iterator:
var opts = {
    'iter': 10
};
var it = iterConstant( randu(), opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-constant-function`][@stdlib/utils/constant-function]</span><span class="delimiter">: </span><span class="description">constant function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-constant.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-constant

[test-image]: https://github.com/stdlib-js/iter-constant/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/iter-constant/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-constant/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-constant?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-constant.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-constant/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-constant/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-constant/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-constant/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-constant/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-constant/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-constant/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-constant/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-constant/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/constant-function]: https://github.com/stdlib-js/utils-constant-function/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
