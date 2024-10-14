import React from "react";

var numbers = [3, 56, 2, 48, 5];

//Filter - Create a new array by keeping the items that return true.
//Filter
const newNumbers = numbers.filter(function(num) {
  return num < 10;
});
console.log(newNumbers)

//ForEach
var newNumbersForEach = [];
numbers.forEach(function(num) {
  if (num < 10) {
    newNumbersForEach.push(num);
  }
})
console.log(newNumbersForEach)


function Filter() {
    return <h1>Filter</h1>
}

export default Filter;