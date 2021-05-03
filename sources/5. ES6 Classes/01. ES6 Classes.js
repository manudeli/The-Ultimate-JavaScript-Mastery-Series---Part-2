// 1. Prototypical Inheritance
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

// 2. Classical Inheritance ::: Syntactic sugar over prototypical inheritance
class Circle {
  constructor(radius) {
    this.radius = radius;
    // Method on object instance
    this.move = function () {
      console.log("move method on the object instance");
    };
  }
  // Method on the prototype
  draw() {
    console.log("draw method on the prototype");
  }
}

const c = new Circle(1);
console.log(typeof Circle);
