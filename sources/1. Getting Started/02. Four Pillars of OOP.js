// Four pillars of Object oriented programming

// 1. Encapsulation ::: Reduce complexity + increase reusability
// 2. Abstraction ::: Reduce complexity + isolate impact of changes
// 3. Inheritance ::: Eliminate redundant code
// 4. Polymorphism ::: Refactor ugly switch/case statements

// 1. Encapsulation
// Compare Procedual with OOP
// * Procedual programming
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// How about change like below code?
// * Object oriented programming
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();
// "The best functions are those with no parameters" Uncle Bob - Robert C Martin

// 2. Abstraction
// All complex logical thing inside, User don't need to see inside
// Abstraction can reduce  the impact of change

// 3. Inheritance
// This concept allows us to eliminate redundant code

// 4. Polymorphism
// This concept allows us to get rid of long if and else or switch and case statements.
