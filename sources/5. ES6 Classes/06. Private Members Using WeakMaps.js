{
  // 1. Individual Private Properties
  const _radius = new WeakMap();
  const _move = new WeakMap();

  class Circle {
    constructor(radius) {
      _radius.set(this, radius);
      _move.set(this, () => console.log("move", this));
    }
    draw() {
      _move.get(this)();
      console.log("draw");
    }
  }

  const c = new Circle(1);
  c.draw();
}
{
  // 2. Grouped Private Properties
  const privateProps = new WeakMap();

  class Circle {
    constructor(radius) {
      privateProps.set(this, {
        radius,
        move: () => {
          console.log("move", this);
        },
      });
    }
    draw() {
      privateProps.get(this).move();
      console.log("draw");
    }
  }

  const c = new Circle(1);
  c.draw();
}
