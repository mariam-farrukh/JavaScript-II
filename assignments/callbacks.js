//Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array.
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(lengths){
  console.log(lengths);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, function(last){
  console.log(last);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const add = x + y
  cb(add);
}
sumNums(1, 2, function(result){
  console.log(result);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiply = x * y;
  cb(multiply);
}
multiplyNums(4,5, function(answer){
  console.log(answer);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
contains('Pencil', items, console.log)
contains('eraser', items, console.log)

/* STRETCH PROBLEM */
// const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4]

// function removeDuplicates(array, cb) {	function removeDuplicates(array, cb) {
// // removeDuplicates removes all duplicate values from the given array.
// // Pass the duplicate free array to the callback function.
// // Do not mutate the original array.
//   return cb(array);
// }	}

//  console.log(removeDuplicates(arrayWithDuplicates, function(array){

//    let noDuplicatesArray = [];
//   array.forEach(item => {
//       if (!noDuplicatesArray.includes(item)) {
//           noDuplicatesArray.push(item);  
//       }

//    });
//   return noDuplicatesArray;
// }));
// Don't know what's going on here
