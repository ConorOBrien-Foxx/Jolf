# 1. What is prefix language?
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
