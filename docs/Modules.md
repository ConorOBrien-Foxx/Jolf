# Modules
This documents the certain modules in Jolf. For readability, each space will be replaced by an underscore. Use a space when coding.

## Prototype module
These are constructed as `(space)(character)(this)(arguments)`.

### String prototypes

 * `_F(string)(function)` - foreach over `string` char-by-char with `function`.
 * `_E(string)` - String replace. (NOTE: Use `ρ` to save a byte.)
 * `_i(string)(thing)` - `string.indexOf(thing)`.
 * `_h(string1)(string2)` - regex search for `string2` in `string1`; returns true if the string is found.
 * `_s(string)(thing)` - searches `string` for `thing`; literally `string.search(thing)`.
 * `_l(string)(bottom)(top)` - slices `string` from `bottom` to `top`; `string.slice(bottom,top)`.
 * `_L(string)(index)` - `string.slice(index)`.
 * `_S(string)(function)` - maps `string` with `function`.
 * `_m(string)(regex as string)(flags OR "g")` - matches `string` according to the `regex` and `flags`; `string.match(new RegExp(m,o||"g"))`.
 * `_M(string)(regex as string)(flags)` - `_m`, but with mandatory flags.
 * `_r(string)` - trims string (removes leading and trailing whitespace).
 * `_R(string)` - reverses string. (NOTE: Use `_(string)`, with a literal underscore, to save a byte.)
 * ``_`(string)(index)`` - the `index`th character in `string`.

### Array prototypes

 * `_e(array)(function)` - checks if every value in `array` "satisfies" `function`. (`Array.every`.)
 * `_f(array)(function)` - filter array.
 * `_F(array)(function)` - array foreach.
 * `_h(array)(element)` - membership in array.
 * `_i(array)(thing)` - indexof thing in array.
 * `_r(array)` - random element.
 * `_R(array)` - reverse. (NOTE: use `_(array)` (literal underscore) to reverse an array.)
 * `_p(array)` - pops element from array. (NOTE: use `Χ` (uppercase Chi) to pop an element from an array.)
 * `_s(array)` - shifts element from array. (NOTE: use `χ` (lowercase Chi) to shift an element from an array.)
 * `_S(array)` - shuffles an array.
 * `_l` and `_L` - slice an array with 2 and 1 arguments, respectively.
 * `_m(array)(thing)` - if `thing` is a function, function map. Otherwise, tries using `thing` as jolf then regular JS code. Otherwise, tries to pawn you off to another language.
 * ``_`(array)(value)`` - fill `array` with `value`.
