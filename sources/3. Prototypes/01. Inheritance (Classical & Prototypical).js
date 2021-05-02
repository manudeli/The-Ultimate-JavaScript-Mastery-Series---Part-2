// There's two type of Inheritance

/* One of the core concepts of OOP that enables an object
to take on the properties and methods of another object.
this makes it easy to reuse code in different parts of an application */

// 1. Classical Inheritance

/*
- Shape: Base / Super / Parent Class
- Circle/Square: Derived / Sub / Child Class
Refer to the inheritance relationship as IS-A relation ship.
Circle, Square class IS-A Shape Class

But as we know, No classes in JavaScript. only objects */

// 2. Prototypical Inheritance
/*
- shape: Prototype ::: essentially a parent of another object
- circle/square: inherit prototype of shape
 */

const x = {};
const y = {};

// every objects has prototype or a parent, except the root object: "ObjectBase", word made by Mosh.
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
