# Walkthrough
This is a guide to getting started to Jolf, or, as I like to say it, &ldquo;Jolfing&rdquo;. I assume a basic knowledge of programming on your part, as the reader. I will teach you in the form of showing you programs, and explaining their functions. But first, Jolf is a procedural language, meaning that (basically) there are command characters which take arguments, and there are arguments. 

## Hello, World!

    a"Hello, World!"
    a                alert
     "Hello, World!"  this string

Jolf takes its programs and "transpiles" them, an action that involves constructing a program in another language, which is then evaluated. Here, this program translates literally to `alert("Hello, World!");`. It is worthy to note at this point that Jolf _does not_ use JavaScript's regular `alert` and `prompt` functions; rather, it uses I/O more akin to a command line. This program clocks in at 16 bytes, a great improvement over the equivalent program in JavaScript. However, we can make use of Jolf's implicit handling and shorten this program even more!

    "Hello, World!
    "              // begin quote string
     Hello, World! // capture these letters in the string
                   // implicit: end quote string
                   // implicit: output result

Jolf implicitly outputs the most recent expression, precisely in the way that `eval` returns a value, i.e. `eval("e1;e2;...;eN") = eN`. Also, an unclosed expressions (i.e. arrays, strings) are automatically closed. (If this is ever not the case, open up an issue on the issue page of this repository.)

## Greetings!
<sub>[Challenge concept taken from Japt's page](https://github.com/ETHproductions/Japt).</sub>

This program outputs and takes input. There are multiple ways of doing this. Perhaps the most intuitive is concatenating (`+`) the original string and the input string (`i`):

    ++"Greetings, "i'!
    ++                 concat
      "Greetings, "     that string
                   i    with the input and
                    '!   an explanation mark

This uses Jolf's character-capture token, `'`. `'!` transpiles to `"!"`.

An equivalent-but-shorter program would be `"Greetings, %!"i`, which uses `%` to interpolate `i` into the string. Using a soon-to-be-added feature `¦`, i.e. instring interpolation, this can be shortened 1 byte, since we can omit the trailing quote.

    "Greetings, ¦i!

## Quadratic Formula

We all know the quadratic formula to be:

              ________
        -b ± √b² - 4ac
    x = --------------
              2a

Let's try to recreate this in Jolf! There are multiple ways to take input in Jolf, but let's focus on the easiest method, i.e., using input variables. Jolf has two named numeric variables, `j` and `J`. It also has a multi-valued numeric inpiut, `m:`. The list of variables in Jolf are categorized by function:

 * `i`, `I`, and `m~`: string input.
 * `j`, `J`, and `m:`: numeric input.
 * `k`, `K`, and ``m` ``: comma-seperated array.
 * `x`, `X`, and `m;`: evaluated input.

Since we need to take three inputs, we can use each of `j`, `J`, and `m:`, which will be `a`, `b`, and `c` respectively. (`c` is `m:` because we use it only once, and thus save the most bytes.)

First, let's calculate the determinant. This stands rather simply, as `-Qj**4Jm:`. Adding the square root operation yields `mq-Qj**4Jm`. Negative `b` is `_j`, and `2a` is `*2J`. Helpfully, Jolf has a plus-minus operator; `±ab` is the array `[a-b,a+b]`. Now, we can proceed in one of two ways: we can divide the resulting array by `2a`, or we can perform the division before we create the array. Let us observe both ways:

    Μ±_jmq-Qj**4Jm:d/H*2J
           Qj             b^2; square j
          -  **4Jm:       b^2 - 4*a*c; subtract 4*j*m:
        mq                sqrt[b^2 - 4*a*c]; take square root
     ±_j                  [-b + sqrt[b^2 - 4*a*c], -b - sqrt[b^2 - 4*a*c]]; -j plus-minus
    Μ              d/H*2J [(-b + sqrt[b^2 - 4*a*c])/(2*a),(-b - sqrt[b^2 - 4*a*c])/(2*a)]; map with division by 2J
    
This clocks in at 21 bytes. Not too shabby! Our other method would be to divide first by `2J`. This looks like:

    ±/_j*2J/mq-Qj**4Jm:*2J

This is 22 bytes. Worse, but there is a cool trick. If you use a variable more than once, you can use `γ` to auto-assign `γ` to the following value. Thus, we can shorten it further:

    ±/_jγ*2J/mq-Qj**4Jm:γ

And this is an equivalent, 21-byte solution.
