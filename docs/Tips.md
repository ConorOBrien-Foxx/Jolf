# Golfing
It is often the case that many tasks have multiple solutions. Of course, some solutions will be shorter in length than others. Sometimes, it is the task of the user to form the shortest possible code that brings about a particular end. In this case, there are some helpful tips that one can use to considerably shorten up their programs.

## Useful functions
Whether or not you read the command index, here are some especially useful commands:

 * `Q` - square a number, double a string, or create a 2D array whose N members are the original array, with N being the length of the array.
 * `h` - increment a number, i.e. add 1.
 * `w` - decrement a number, i.e. subtract 1.
 * `!6` - evaluate an infix expression (using `mathjs`).
 * `z` - creates a range from 1 to a number, inclusive.
 * `O` - digit product or array product.
 * `u` - digit sum or array sum.
 * `a` - output.
 * ` m` - array map.

## Constants
Constant generation can be done in one of three, general ways. The most common (and efficient) is using a variable that represents this constant. Such variables exist for the digits 0-9 (represnted by the digits), 10 (`t`), and 42 (`mQ`). If your constant is not one of those, you may intuitively generate the constant, by using operators. For two bytes, you can generate 11 as `ht` ("increment ten by 1") and for two bytes you can generate 16 as `Q4` ("four squared").

Any constant (integer or real) can be obtained using the `P` ("number") command, like so: `P"23"`, `P"-3"`, `P"3.02", `P".5"`. However, the cost of using this is `3 + char. length of number`, inefficent relative the previous method. You can generate any number of the form `N + p/q` as `+N/pq`. To obtain `64 + 3/5`, for example, one would create 64 as `QQ4` ("four squared squared"), and obtain +QQ4/35`.

Consider a number of the form D<sub>N</sub>&hellip;D<sub>0</sub>, where D<sub>k</sub> is a digit of a number. Then, this number can be "lineearly generated" by taking note of the fact that D<sub>N</sub>&hellip;D<sub>0</sub> is the sum of all D<sub>k</sub>&times;10<sup>k</sup> for k in 0..N. Thus, to generate the number 429, you may use `++*Qt4*t29`. However, this method is almost always the longest of any of the methods mentioned.

Finally, you can use `@<char>` to generate a number whose value is the character's char code. For example, `@A` is 65, `@~` is 126, and `@ ` is 32.

| Constant | Best Representation | Representation Type |
|----------|---------------------|---------------------|
| 0-9      | 0-9                 | Digit               |
| 10       | t                   | Constant            |
| 11       | ht                  | Increment Constant  |
(This table is incomplete/suboptimal. You may make a request for a constant by [pinging me in the Nineteenth byte (@CᴏɴᴏʀO'Bʀɪᴇɴ)](http://chat.stackexchange.com/rooms/240/the-nineteenth-byte), opening up an issue here, or by dropping an email to `+"%or'Con' O%rien4god@%.com'B'gmail"`. It's Jolf code, if you didn't notice.)
