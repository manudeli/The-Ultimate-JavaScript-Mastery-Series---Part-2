// 1. Object
const myObj = {};
Object.getPrototypeOf(myObj);
// All Same
console.log(myObj.__proto__);
console.log(Object.getPrototypeOf(myObj));
console.log(Object.prototype);

// 2. Array
let array = [];
// All Same
console.log(array.__proto__);
console.log(Object.getPrototypeOf(array));
console.log(Array.prototype);

// 3. Constructor function
function Circle(radius) {
  this.radius = radius;
}
const circle = new Circle(1);
// All Same
console.log(circle.__proto__);
console.log(Object.getPrototypeOf(circle));
console.log(Circle.prototype);
