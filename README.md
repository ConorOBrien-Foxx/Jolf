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
(One can form a two-byte command by prefixing an instruction with a tilde (`~`).

## Function instructions
These instructions are the operators of Jolf.
 * `*` - multiplies 2 arguments (behaviour TBA)
 * `+` - adds 2 arguments, according to their types:
   * `number, number` - adds the two numbers
   * `anything, string` or `string, anything` - returns `string` concatted with `anything` (preserving order)
   * `array, array` - concats the two arrays
   * `non array, array` - Puts `non array` at the beginning of `array`
   * `array, non array` - pushes `non array` to `array`
   * `set, set` - the set union of the two sets
 * `-` - subtracts 2 arguments (behaviour TBA)
 * `.` - takes 2 arguments `O` and `p` and returns `O[p]`
 * `/` - takes 2 arguments `A` and `B` and returns `A/B` (behaviour TBA)
 * `@` - returns the character code of the next character
 * `B` - takes 1 argument `N` and converts it to binary as a string (equiv. `(N).toString(2)`)
 * `C` - takes 2 arguments `A` and `B` and parses the string `A` as an integer in base `B` (equiv. `parseInt(A,B)`)
 * `P` - takes 1 argument `A` and returns `Number(A)` (converts all to number, if possible) (TO BE ADDED: conversion of an array into a number, as in `[1,2,3,1,0,2] => 123102`)
 * `T` - takes 2 arguments `F` and `s`; surrounds `F` expression (after compilation) with quotes and evaluates that action `F` every `s` milliseconds
 * `R` - takes 2 arguments `F` and `s`; runs `F` after `s` milliseconds
 * `V` - takes 1 argument `S` and is the value `V` of `S`
 * `^` - takes 2 arguments `A` and `B` and retursn `A^B` (exponentiation) (behaviour TBA)
 * `_` - negates 1 argument, according to its type:
   * `string` or `array` or `set` - reverses the entity
   * `number` - negates the entity
 * `a` - outputs (alerts/writes) 1 argument
 * `c` - writes 1 argument to the log (`console.log` at the moment)
 * `e` - takes 1 argument `S` and evaluates it as a new Jolf program; returns nothing at the moment
 * `f` - takes 2 arguments `F` and `R` as a function and takes the array `R` as its commands.
 * `p` - takes 3 arguments `a`, `b`, and `s` and creates a range `[a,b)` with a step `s`
 * `r` - takes 2 arguments `a` and `b` and creates a range `[a,b)` (inclusive of `a` and exclusive of `b`)
 * `u` - takes 1 argument
   * `array` or `set` - returns the sum of the entity
   * `string` - behaviour TBA
   * `number` - takes the digit sum of the number (e.g. `u(140) = 1 + 4 + 0 = 5`)
 * `v` - takes 2 arguments `S` and `V`; sets the value of variable `S` to `V` and creates `S` if nonexistant (returns `V`)
 * `~i` - takes 1 argument and returns that argument (the identity function)

## Data commands
These instructions are the data/arguments of Jolf.

 * `0-9` - that number
 * `A` - writes `Array` to the compiled code
 * `M` - writes `Math` to the compiled code
 * `N` - writes `Number` to the compiled code
 * `S` - writes `String` to the compiled code
 * `p` - writes `prototype` to the compiled code
 * `q` - writes the source code's reference to the the compiled code
 * `s` - writes `Set` to the compiled code
 * `i` and `I` - receive string input from `prompt`
 * `j` and `J` - receive numeric input from `prompt`
 * `~0` - Infinity
 * `~N`, for `N in [1,2,3,4]` - `10^(N+1)`
 * `~e` - Euler's number approx `2.718281828459045`
 * `~p` - &pi; approx `3.141592`
 * `~P` - &varphi;, `(1+sqrt[5])/2`

## Null-arity commands
These instructions do no affect the compiled code _per se_, but provide structure.

 * `"` - begins string literal; writes characters to compiled code (surrounded by quotes) until another unescaped `"` is met
 * `'` - character literal; writes next character to compiled code (surrounded by quotes)
 * `$` - begin function literal; writes characters to compiled code as is, until another unescaped `$` is met
 * `:` - begin character literal; writes the next character to compiled code as is
