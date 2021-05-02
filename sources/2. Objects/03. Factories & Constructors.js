// 1. Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// 2. Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => console.log("draw");
}

const another = new Circle(1);
another.draw();

// Constructor has property of constructor
console.log(circle.constructor);
console.log(another.constructor);

let x = {};
// let x = new Object();

// These below code is using constructor like above code
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3
