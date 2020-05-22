// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

  // internal is accessible by nestedFunction first, because internal is not defined inside nestedFunction; second because nestedFunction is inside myFunction. Since there is no variable named internal inside nestedFunction it looks outside itself an up the page to find the variable. Also internal would be unavailable to nestedFunction if nestedFunction were outside myFunction due to scoping.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

console.log("Task 2:  Counter")

function sumation(num){
  let sum = 0
  for (let i=0; i <= num; i++){
    sum += i;
  }
  return sum;
}

console.log(sumation(4));