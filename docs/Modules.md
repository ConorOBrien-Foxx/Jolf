# Modules
This documents the certain modules in Jolf. **For readability, each space will be replaced by an underscore. Use a space when coding.**

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

## mathjs module

Called with `!` + `char`.

 * `\x01` - `getData`
 * `\x02` - `imagToArray`
 * `\x03` - `displayImg`
 * ` ` - [`abs`](http://mathjs.org/docs/reference/functions/abs.html)
 * `!` - [`acos`](http://mathjs.org/docs/reference/functions/acos.html)
 * `"` - [`acosh`](http://mathjs.org/docs/reference/functions/acosh.html)
 * `#` - [`acot`](http://mathjs.org/docs/reference/functions/acot.html)
 * `$` - [`acoth`](http://mathjs.org/docs/reference/functions/acoth.html)
 * `%` - [`acsc`](http://mathjs.org/docs/reference/functions/acsc.html)
 * `&` - [`acsch`](http://mathjs.org/docs/reference/functions/acsch.html)
 * `'` - [`add`](http://mathjs.org/docs/reference/functions/add.html)
 * `(` - [`and`](http://mathjs.org/docs/reference/functions/and.html)
 * `)` - [`arg`](http://mathjs.org/docs/reference/functions/arg.html)
 * `*` - [`asec`](http://mathjs.org/docs/reference/functions/asec.html)
 * `+` - [`asech`](http://mathjs.org/docs/reference/functions/asech.html)
 * `,` - [`asin`](http://mathjs.org/docs/reference/functions/asin.html)
 * `-` - [`asinh`](http://mathjs.org/docs/reference/functions/asinh.html)
 * `.` - [`atan`](http://mathjs.org/docs/reference/functions/atan.html)
 * `/` - [`atan2`](http://mathjs.org/docs/reference/functions/atan2.html)
 * `0` - [`atanh`](http://mathjs.org/docs/reference/functions/atanh.html)
 * `1` - [`bellNumbers`](http://mathjs.org/docs/reference/functions/bellNumbers.html)
 * `2` - [`bignumber`](http://mathjs.org/docs/reference/functions/bignumber.html)
 * `3` - [`bitAnd`](http://mathjs.org/docs/reference/functions/bitAnd.html)
 * `4` - [`bitNot`](http://mathjs.org/docs/reference/functions/bitNot.html)
 * `5` - [`bitOr`](http://mathjs.org/docs/reference/functions/bitOr.html)
 * `6` - [`eval`](http://mathjs.org/docs/reference/functions/eval.html)
 * `7` - [`bool`](http://mathjs.org/docs/reference/functions/bool.html)
 * `8` - [`catalan`](http://mathjs.org/docs/reference/functions/catalan.html)
 * `9` - [`cbrt`](http://mathjs.org/docs/reference/functions/cbrt.html)
 * `:` - [`ceil`](http://mathjs.org/docs/reference/functions/ceil.html)
 * `;` - [`chain`](http://mathjs.org/docs/reference/functions/chain.html)
 * `<` - [`clone`](http://mathjs.org/docs/reference/functions/clone.html)
 * `=` - [`combinations`](http://mathjs.org/docs/reference/functions/combinations.html)
 * `>` - [`compare`](http://mathjs.org/docs/reference/functions/compare.html)
 * `?` - [`compile`](http://mathjs.org/docs/reference/functions/compile.html)
 * `@` - [`complex`](http://mathjs.org/docs/reference/functions/complex.html)
 * `A` - [`composition`](http://mathjs.org/docs/reference/functions/composition.html)
 * `B` - [`concat`](http://mathjs.org/docs/reference/functions/concat.html)
 * `C` - [`conj`](http://mathjs.org/docs/reference/functions/conj.html)
 * `D` - [`cos`](http://mathjs.org/docs/reference/functions/cos.html)
 * `E` - [`cosh`](http://mathjs.org/docs/reference/functions/cosh.html)
 * `F` - [`cot`](http://mathjs.org/docs/reference/functions/cot.html)
 * `G` - [`coth`](http://mathjs.org/docs/reference/functions/coth.html)
 * `H` - [`cross`](http://mathjs.org/docs/reference/functions/cross.html)
 * `I` - [`csc`](http://mathjs.org/docs/reference/functions/csc.html)
 * `J` - [`csch`](http://mathjs.org/docs/reference/functions/csch.html)
 * `K` - [`cube`](http://mathjs.org/docs/reference/functions/cube.html)
 * `L` - [`deepEqual`](http://mathjs.org/docs/reference/functions/deepEqual.html)
 * `M` - [`det`](http://mathjs.org/docs/reference/functions/det.html)
 * `N` - [`diag`](http://mathjs.org/docs/reference/functions/diag.html)
 * `O` - [`distance`](http://mathjs.org/docs/reference/functions/distance.html)
 * `P` - [`divide`](http://mathjs.org/docs/reference/functions/divide.html)
 * `Q` - [`dot`](http://mathjs.org/docs/reference/functions/dot.html)
 * `R` - [`dotDivide`](http://mathjs.org/docs/reference/functions/dotDivide.html)
 * `S` - [`dotMultiply`](http://mathjs.org/docs/reference/functions/dotMultiply.html)
 * `T` - [`dotPow`](http://mathjs.org/docs/reference/functions/dotPow.html)
 * `U` - [`equal`](http://mathjs.org/docs/reference/functions/equal.html)
 * `V` - [`compile`](http://mathjs.org/docs/reference/functions/compile.html)
 * `W` - [`exp`](http://mathjs.org/docs/reference/functions/exp.html)
 * `X` - [`eye`](http://mathjs.org/docs/reference/functions/eye.html)
 * `Y` - [`factorial`](http://mathjs.org/docs/reference/functions/factorial.html)
 * `Z` - [`filter`](http://mathjs.org/docs/reference/functions/filter.html)
 * `[` - [`fix`](http://mathjs.org/docs/reference/functions/fix.html)
 * `\` - [`permutations`](http://mathjs.org/docs/reference/functions/permutations.html)
 * `]` - [`floor`](http://mathjs.org/docs/reference/functions/floor.html)
 * `^` - [`forEach`](http://mathjs.org/docs/reference/functions/forEach.html)
 * `_` - [`format`](http://mathjs.org/docs/reference/functions/format.html)
 * `` ` `` - [`fraction`](http://mathjs.org/docs/reference/functions/fraction.html)
 * `a` - [`pow`](http://mathjs.org/docs/reference/functions/pow.html)
 * `b` - [`gcd`](http://mathjs.org/docs/reference/functions/gcd.html)
 * `c` - [`help`](http://mathjs.org/docs/reference/functions/help.html)
 * `d` - [`print`](http://mathjs.org/docs/reference/functions/print.html)
 * `e` - [`im`](http://mathjs.org/docs/reference/functions/im.html)
 * `f` - [`index`](http://mathjs.org/docs/reference/functions/index.html)
 * `g` - [`intersect`](http://mathjs.org/docs/reference/functions/intersect.html)
 * `h` - [`inv`](http://mathjs.org/docs/reference/functions/inv.html)
 * `i` - [`isInteger`](http://mathjs.org/docs/reference/functions/isInteger.html)
 * `j` - [`isNegative`](http://mathjs.org/docs/reference/functions/isNegative.html)
 * `k` - [`isNumeric`](http://mathjs.org/docs/reference/functions/isNumeric.html)
 * `l` - [`isPositive`](http://mathjs.org/docs/reference/functions/isPositive.html)
 * `m` - [`isZero`](http://mathjs.org/docs/reference/functions/isZero.html)
 * `n` - [`kldivergence`](http://mathjs.org/docs/reference/functions/kldivergence.html)
 * `o` - [`larger`](http://mathjs.org/docs/reference/functions/larger.html)
 * `p` - [`largerEq`](http://mathjs.org/docs/reference/functions/largerEq.html)
 * `q` - [`lcm`](http://mathjs.org/docs/reference/functions/lcm.html)
 * `r` - [`leftShift`](http://mathjs.org/docs/reference/functions/leftShift.html)
 * `s` - [`log`](http://mathjs.org/docs/reference/functions/log.html)
 * `t` - [`undefined`](http://mathjs.org/docs/reference/functions/undefined.html)
 * `u` - [`undefined`](http://mathjs.org/docs/reference/functions/undefined.html)
 * `v` - [`lsolve`](http://mathjs.org/docs/reference/functions/lsolve.html)
 * `w` - [`lup`](http://mathjs.org/docs/reference/functions/lup.html)
 * `x` - [`bitXor`](http://mathjs.org/docs/reference/functions/bitXor.html)
 * `y` - [`map`](http://mathjs.org/docs/reference/functions/map.html)
 * `z` - [`matrix`](http://mathjs.org/docs/reference/functions/matrix.html)
 * `{` - [`max`](http://mathjs.org/docs/reference/functions/max.html)
 * `|` - [`mean`](http://mathjs.org/docs/reference/functions/mean.html)
 * `}` - [`median`](http://mathjs.org/docs/reference/functions/median.html)
 * `~` - [`min`](http://mathjs.org/docs/reference/functions/min.html)
 * ` ` - [`mod`](http://mathjs.org/docs/reference/functions/mod.html)
 * `£` - [`multiply`](http://mathjs.org/docs/reference/functions/multiply.html)
 * `¦` - [`nthRoot`](http://mathjs.org/docs/reference/functions/nthRoot.html)
 * `§` - [`number`](http://mathjs.org/docs/reference/functions/number.html)
 * `¨` - [`ones`](http://mathjs.org/docs/reference/functions/ones.html)
 * `©` - [`or`](http://mathjs.org/docs/reference/functions/or.html)
 * `«` - [`parser`](http://mathjs.org/docs/reference/functions/parser.html)
 * `¬` - [`partitionSelect`](http://mathjs.org/docs/reference/functions/partitionSelect.html)
 * `­` - [`prod`](http://mathjs.org/docs/reference/functions/prod.html)
 * `°` - unassigned
 * `±` - unassigned
 * `²` - [`range`](http://mathjs.org/docs/reference/functions/range.html)
 * `³` - [`re`](http://mathjs.org/docs/reference/functions/re.html)
 * `·` - [`round`](http://mathjs.org/docs/reference/functions/round.html)
 * `»` - [`sin`](http://mathjs.org/docs/reference/functions/sin.html)
 * `½` - [`size`](http://mathjs.org/docs/reference/functions/size.html)
 * `ͺ` - [`parse`](http://mathjs.org/docs/reference/functions/parse.html)
 * `΄` - unassigned
 * `΅` - [`rightArithShift`](http://mathjs.org/docs/reference/functions/rightArithShift.html)
 * `Ά` - [`rightLogShift`](http://mathjs.org/docs/reference/functions/rightLogShift.html)
 * `Έ` - [`sec`](http://mathjs.org/docs/reference/functions/sec.html)
 * `Ή` - [`sech`](http://mathjs.org/docs/reference/functions/sech.html)
 * `Ί` - [`sign`](http://mathjs.org/docs/reference/functions/sign.html)
 * `Ό` - [`sinh`](http://mathjs.org/docs/reference/functions/sinh.html)
 * `Ύ` - [`slu`](http://mathjs.org/docs/reference/functions/slu.html)
 * `Ώ` - [`smaller`](http://mathjs.org/docs/reference/functions/smaller.html)
 * `ΐ` - [`smallerEq`](http://mathjs.org/docs/reference/functions/smallerEq.html)
 * `Α` - [`sort`](http://mathjs.org/docs/reference/functions/sort.html)
 * `Β` - [`sparse`](http://mathjs.org/docs/reference/functions/sparse.html)
 * `Γ` - [`sqrt`](http://mathjs.org/docs/reference/functions/sqrt.html)
 * `Δ` - [`square`](http://mathjs.org/docs/reference/functions/square.html)
 * `Ε` - [`squeeze`](http://mathjs.org/docs/reference/functions/squeeze.html)
 * `Ζ` - [`std`](http://mathjs.org/docs/reference/functions/std.html)
 * `Η` - [`stirlingS2`](http://mathjs.org/docs/reference/functions/stirlingS2.html)
 * `Θ` - [`string`](http://mathjs.org/docs/reference/functions/string.html)
 * `Ι` - [`subset`](http://mathjs.org/docs/reference/functions/subset.html)
 * `Κ` - [`subtract`](http://mathjs.org/docs/reference/functions/subtract.html)
 * `Λ` - [`sum`](http://mathjs.org/docs/reference/functions/sum.html)
 * `Μ` - [`tan`](http://mathjs.org/docs/reference/functions/tan.html)
 * `Ν` - [`tanh`](http://mathjs.org/docs/reference/functions/tanh.html)
 * `Ξ` - [`to`](http://mathjs.org/docs/reference/functions/to.html)
 * `Ο` - [`trace`](http://mathjs.org/docs/reference/functions/trace.html)
 * `Π` - [`transpose`](http://mathjs.org/docs/reference/functions/transpose.html)
 * `Ρ` - [`_typeof`](http://mathjs.org/docs/reference/functions/_typeof.html)
 * `΢` - [`unaryMinus`](http://mathjs.org/docs/reference/functions/unaryMinus.html)
 * `Σ` - [`unaryPlus`](http://mathjs.org/docs/reference/functions/unaryPlus.html)
 * `Τ` - [`unequal`](http://mathjs.org/docs/reference/functions/unequal.html)
 * `Υ` - [`unit`](http://mathjs.org/docs/reference/functions/unit.html)
 * `Φ` - [`usolve`](http://mathjs.org/docs/reference/functions/usolve.html)
 * `Χ` - [`variance`](http://mathjs.org/docs/reference/functions/variance.html)
 * `Ψ` - [`xgcd`](http://mathjs.org/docs/reference/functions/xgcd.html)
 * `Ω` - [`xor`](http://mathjs.org/docs/reference/functions/xor.html)
 * `Ϊ` - [`zeros`](http://mathjs.org/docs/reference/functions/zeros.html)
 * `―` - [`c`](http://mathjs.org/docs/reference/functions/c.html)
 * `‘` - [`mode`](http://mathjs.org/docs/reference/functions/mode.html)
 * `’` - [`multinomial`](http://mathjs.org/docs/reference/functions/multinomial.html)
 * `€` - [`norm`](http://mathjs.org/docs/reference/functions/norm.html)
 * `₯` - [`not`](http://mathjs.org/docs/reference/functions/not.html)
