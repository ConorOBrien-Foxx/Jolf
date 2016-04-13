You might be thinking _whaaaaat_ Jolf has a MANUAL OF STYLE!? Well, yeah. Don't freak out, it's not a lot: just a few rules. It makes code more "readable". (Disregard these rules if you are golfing.)

## On input

Each input has a different semantic meaning. `i` and `I` are used for string inputs _without_ quotes; `j` and `J` are used for numeric input; `x` and `X` are used for eval'd input (as JS; use for array/strings/regex literals); and `k` and `K` are arrays without `[` and `]`. However, the use of `x` and `X` are preffered over the use of `k` and `K`.

## On identation
For a series of unary functions (e.g. `h`, `Q`), format like this:

    u1 u2 u3i

Where `i` is the information passed to the function.

For an N-ary function with complicated arguments (N > 1), use the following format:

    n1
      i1
      i2
      ..
      iN

For N-ary functions with simple arguments, use this:

    n1 a1 a2 a3

Remove spaces between letters and numbers; if there are no spaces in the result, remove the space between `n1` and `a1`.

Include all assignments inline. For example, instead of doing

    v"sum" +
     3
     * 3 j

Do

    v"sum" +3j

Let's consider an example program: "interpret an esolang in which the commands are `+` (add 1 to counter), `-` (sub 1 from counter) and `.` (print counter as number)". I golfed a solution to this problem, and we will expand it to a readable form.

    Ζ0Μid?=H'+Ζhζ?=H'-Ζwζaζ

(tba)
