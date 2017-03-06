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
* Gereral internet advice seems to be:
  * Prefer ```const``` - for variables whose values never change.
  * Use ```let``` – for variables whose values do change.
  * Keep ``var`` - for legacy variables.

## Out with the IIFEs! In with the Blocks!
Currently to restrict the scope of a variable 'x' to a block we'd use the IIFE pattern
```
(function () {
  // dreams
})();
```
In ES6, you use a block and a ```let``` or ```const``` declaration
```
{
  let joe = 1;
  const mama = 2;
}
console.log(joe); // ReferenceError: something is not defined
console.log(mama); // ReferenceError: something is not defined
```
[Additional reading](http://stackoverflow.com/questions/27471510/block-scoping-in-es6)

## ES6 classes
* Where to begin! [Classes - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

## String Interpolation to Template Literals
```
function joeWho(x, y) {
    console.log(`(${x}, ${y})`);
}
joeWho(Joe, Mama); // You know who...
```
* Template literals can span multiple lines

## Function Expressions => Arrow Functions
* They are less verbose
  * ```const arr = [1, 2, 3];
const squares = arr.map(x => x * x);```
    * You can lose the parentheses if the parameter is just a single identifier.
    * ```(x) => x * x``` and ```x => x * x``` are the same.
* ```this``` is picked up from surroundings (lexical). Therefore, you don’t need bind() or that = this, anymore.
### What is Lexical scoping?
* Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
```
function whosJoe() {
    const joe = document.getElementById('myButton');
    joe.addEventListener('click', () => {
        console.log('Mama!');
        this.handleClick(); // lexical `this`
    });
}
```
* These variables are all lexical inside arrow functions:
  * ```arguments```
  * ```super```
  * ```this```
  * ```new.target```
[Aarow functions - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and [Lexical scoping - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures#Lexical_scoping)

## Default Parameter values
```
function foo(x=0, y=0) {
  // olden times way
  // x = x || 0;
  // y = y || 0;
}
```

## Multiple return values via arrays
```
var matchObj =
  /^(\d\d)-(\d\d)-(\d\d\d\d)$/
  .exec('29-08-1997');
var day = matchObj[1];
var month = matchObj[2];
var year = matchObj[3];
```
Becomes:
```
const [, day, month, year] =
  /^(\d\d)-(\d\d)-(\d\d\d\d)$/
  .exec('29-08-1997');
```
* You can have mulitple return values for [objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) too - but it did my head in

## For-of //forEach()
```
const arr = ['Joe', 'Mama', 'Fine'];
for (const el of arr) {
    console.log(el);
}
```
To get both index and value of each array element use the new array method entries() and destructuring:
```
for (const [index, el] of arr.entries()) {
    console.log(index+'. '+el);
}
```

## New Array Methods
* ```fill()``` creates an array filled with an arbitrary value:
```const arr = new Array(2).fill('x');```
* ```from()``` converts array-like objects to arrays:
```const arr = Array.from('69696969 plus 1');```
* ```findIndex()``` is cool, but meh.
```
function selfAware(el) {
  return el >= 15;
}
[29, 8, 1997].findIndex(isBigEnough);
```
### Behold! The spread operator ```...```
```const arr = [...'abc'];```
```Math.max(...[-1, 5, 11, 3];)```
* Instead of ```apply()```
```
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
```
* Instead of ```concat()```
```
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);
```

## New Sting Methods
* ```startsWith()```
```
if (str.startsWith('x')) { // magic }
```
* ```endsWith()``` like starts with but at the end.
* ```includes()```
```
const str = 'jackiechan';
if (str.includes('x')) { console.log("Always do your best!") }
```

## This is Just the Tip! Get Deep Into ES6

### [Mozilla Hacks](https://hacks.mozilla.org/category/es6-in-depth/) has a great series on ES6.
### Or have some fun with [Count-to-6](https://github.com/domenic/count-to-6)
