var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars = ["", ...chocolateBars];
  return chocolateBars;
}
  
function destructivelyAddElementToBeginningOfArray() {
 chocolateBars.unshift();
  return chocolateBars;
}