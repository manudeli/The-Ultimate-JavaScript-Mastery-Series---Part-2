// 1. Value or Primitive Type
let x = 10;
let y = x;

x = 20;
console.log(x, y);

// 2. Reference Type
let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a.value, b.value);

// Other example
let number = 10;

function increase(number) {
  number++;
  console.log(number); // Different with above variable "number"
}
increase(number);
console.log(number);

let obj = { value: 10 };

function increase(obj) {
  obj.value++; // obj points reference of object
}
increase(obj);
console.log(obj);
