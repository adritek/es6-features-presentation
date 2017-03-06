# Notes
## A quick rundown on ES6 classes and other helpful ES6 things

* ES6 classes provide a simpler and clearer syntax to create objects and deal with inheritance.
* Classes can be expressions and declarations, much like functions.
* You can have named and unnamed class declarations.
* Class declarations are not hoisted, and are executed in strict mode.
* Constructors can use the super keyword to use the constructors of a parent class.
* You can only have one constructor method per class.

* Is it ES6 or EcmaScript 2015? Both!
*  Technically it's EcmaScript 2015, but everyone calls it ES6 - there is a naming [convention](https://tc39.github.io/process-document/) now.

## ```var const```, and ```let```

* var - functionally scoped
  * ```let``` is like a block-scoped version of ```var```
    * ```const``` works like ```let``` - but these variables values can’t be changed
* ```let``` and ```const``` are more strict and throw more exceptions so you can just find/replace all your ```var```s
[Additional reading](http://stackoverflow.com/questions/34564403/what-is-block-scope-function-ecmascript-6-compare-with-ecmascript-5)
* Hoisting is weird
