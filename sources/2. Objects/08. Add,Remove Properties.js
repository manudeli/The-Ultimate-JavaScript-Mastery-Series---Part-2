function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };

// this notation is useful for adding key of properties like "center-location"
const propertyName = "location";
circle[propertyName] = { x: 1 };

delete circle.location;

console.log(circle);
