const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // Getter
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);

c.radius = 3;
console.log(c.radius);
