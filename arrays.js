var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars = ["", ...chocolateBars];
  return chocolateBars;
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}