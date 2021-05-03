const _radius = Symbol();
const _draw = Symbol();
// new Unique value
console.log(Symbol() === Symbol());

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);
console.log(c);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
