// Multilevel Inheritance of Array
let myArray = [];
console.log(myArray);
// myArray => ArrayBase => ObjectBase

// Multilevel Inheritance of circle made by constructor Circle
function Circle(radius) {
  this.radius = radius;
  this.draw = () => console.log("draw");
}

const circle = new Circle(10);
console.log(circle);
// circle => circleBase(Circle) => ObjectBase
