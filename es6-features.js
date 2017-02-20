// Example 1 ES6 classes are prototyping
// classes
class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }
}

// unnamed class expression
var Circle = class {
  constructor (diameter) {
    this.diameter = diameter;
  }
}
