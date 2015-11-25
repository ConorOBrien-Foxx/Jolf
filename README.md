# Jolf
Jolf is a prefix golfing language. It runs and compiles to JavaScript. Keep in mind that it is incomplete, and the commands are subject to change or modification in behaviour.

## What is prefix language?
There are three main types of operator-data placement schemes: Prefix, infix, and postfix. Infix is the one we are all familiar with, in which the operator is placed in between the operands, as in `5 + 7`. Infix is found in, erm, _practical_ programming langauges. Postfix is the scheme in which the operators follow the operands, as in `5 7 +`. Postifx schemes are found in stack-based languages, such as [><>](https://esolangs.org/wiki/Fish) and [Vitsy](https://github.com/VTCAKAVSMoACE/Vitsy). Lastly is prefix, in which the operators precede the operands, as in `+ 5 7`. The following statements are all equivalent in prefix, infix, and postfix respectively:

    ^ 4 / + 5 9 2
    4 ^ ((5 + 9) / 2)
    4 5 9 + 2 / ^

Being a prefix langauge, Jolf can easier be thought of as a sort of functional scheme, in which each command represents a function, with its arguments following afterwords. Say you have the JavaScript program `alert(3 + 5)`; then, if you think if `+` as a function `add`, you could re-write that as `alert(add(3,5))`. Since Jolf has a command for both `alert` and `add`, this is rewritten as `a+35`. This is the conversion process:

    alert(3+5)
    alert(add(3,5))
    alert( +  3 5 )
      a    +  3 5
    a+35

# Commands
## Function instructions
These instructions are the operators of Jolf.
 * `a` - alerts 1 argument
 * `+` - adds 2 arguments, according to their types:
   * `number, number` - adds the two numbers
   * `anything, string` or `string, anything` - returns `string` concatted with `anything` (preserving order)
   * `array, array` - concats the two arrays
   * `non array, array` - Puts `non array` at the beginning of `array`
   * `array, non array` - pushes `non array` to `array`
   * `set, set` - the set union of the two sets
 * `_` - negates 1 argument, according to its type:
   * `string` or `array` or `set` - reverses the entity
   * `number` - negates the entity
 * `-` - subtracts 2 arguments (behaviour TBA)
 * `.` - takes 2 arguments `O` and `p` and returns `O[p]`.

## Data commands
These instructions are the data/arguments of Jolf.

 * `i` - receive input from `prompt`
 * `0-9` - that number
 * `N` - writes `Number` to the compiled code
 * `A` - writes `Array` to the compiled code
 * `p` - writes `prototype` to the compiled code
 * `S` - writes `String` to the compiled code
 * `s` - writes `Set` to the compiled code
 * `M` - writes `Math` to the compiled code
 * `q` - writes the source code's reference to the the compiled code

## Null-arity commands
These instructions do no affect the compiled code _per se_, but provide structure.

 * `:` - surrounds next commands compiled value with quotes
 * `"` - begins string literal; writes characters to compiled code (surrounded by quotes) until another unescaped `"` is met
 * `'` - character literal; writes next character to compiled code (surrounded by quotes)
 * **UNIMPLEMENTED** `$` - begin function literal; writes characters to compiled code as is, until another unescaped `$` is met
