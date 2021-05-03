function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];
for (let shape of shapes) shape.duplicate();

// Why it's powerful!
/* before OOP, if wanted to implement this logic, used below code before.
for (let shape of shapes){
    if (shape.type === "circle")
        duplicateCircle();
    else if (shape.type === "square")
        duplicateSquare();
    else
        duplicateShape();
} */
