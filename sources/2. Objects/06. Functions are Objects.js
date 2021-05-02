function Circle(radius) {
  this.radius = radius;
  this.draw = () => console.log("draw");
}

console.log(Circle.name, Circle.length, Circle.arguments, Circle.constructor);

Circle.call({}, 1);
Circle.apply({}, 1);
// Above codes is same with code "new Circle"

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = () => console.log("draw");
`
);

const circle = new Circle1(1);
console.log(circle);
