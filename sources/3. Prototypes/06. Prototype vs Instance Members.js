// 3. Constructor function
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    this.draw();
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const circle1 = new Circle(1);
const circle2 = new Circle(1);

// All Same
console.log(circle1, circle2);

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

console.log(circle1.toString());
circle1.draw();
circle1.move();
