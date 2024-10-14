import React from "react";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Map
function double(x) {
  return x * 2;
}
const newNumbersMap = numbers.map(double);
console.log(newNumbersMap)

//ForEach
var newNumbersForEach = [];
numbers.forEach(function (x) {
    newNumbersForEach.push(x * 2);
});
console.log(newNumbersForEach)

//Anonymous Function
const newNumbersAnonymous = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbersAnonymous);


function Map() {
    return (
        <div>
          <h1>Map</h1>
          {newNumbersMap}
        </div>
        
    )
}

export default Map;