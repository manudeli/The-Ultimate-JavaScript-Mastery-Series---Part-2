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

console.log(circle1);
// Return only Instance members
console.log(Object.keys(circle1));

// Return all members (Instance(Own) + Prototype)
for (let key in circle1) console.log(key);

// Check only Instance(Own property)
console.log(circle1.hasOwnProperty("radius"));
console.log(circle1.hasOwnProperty("draw"));
