{
  ("use strict"); // It makes Function call not to point this as global.
  // So, Below keyword "this" in Function call points undefined

  const Circle = function () {
    this.draw = function () {
      console.log(this);
    };
  };

  const c = new Circle();
  c.draw(); // Method Call ::: Different of keyword "this"

  const draw = c.draw;
  draw(); // Function Call ::: Different of keyword "this"
}
{
  // by default, the body of our Classes are executed in the strict mode.
  class Circle {
    draw() {
      console.log(this);
    }
  }

  const c = new Circle();
  const draw = c.draw;
  draw();
}
