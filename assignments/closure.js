// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let closing = "Hello, this is a closure statement";
function whatIsClosing(){
  return closing;
}
console.log(whatIsClosing());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (closure = 0) => {
  // Return a function that when invoked increments and returns a counter variable.
  let counting = closure;
  return function counter(){
    counting += 1;
    console.log(counting);
    return counting;
  }
};
// Example usage: const newCounter = counter();
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let newObj = {increment , decrement};
  return newObj;
};
let newCountFact = counterFactory();

console.log(newCountFact.increment());
console.log(newCountFact.decrement());
