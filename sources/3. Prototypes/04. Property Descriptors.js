let person = { name: "Jonghyeon" };
console.log(person);

for (let key in person) console.log(key);
console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false, // Default is true
  configurable: false,
});

person.name = "John";
delete person.name;

console.log(person.name); // Check not working reassign person.name
console.log(Object.keys(person)); // Check not working enumerable person's key
console.log(person); // Check not working delete property
