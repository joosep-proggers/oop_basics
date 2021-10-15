// OOJS 1
/*function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function() {
    return this.sides * this.sideLength;
  }
}
// Write your code below here
let square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());

let triangle = new Shape("triangle", 3, 20);
console.log(triangle.calcPerimeter()); */

// OOJS 2
class Shape{
  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function() {
      return this.sides * this.sideLength;
    }
  }
}


// OOJS 3

class Square extends Shape{
  constructor(sideLength){
    super("square",4, sideLength);
  }
  calcArea(){
    return this.sideLength * this.sideLength;
  }
}

let ruut = new Square(3);
console.log(ruut.calcPerimeter());
console.log(ruut.calcArea());