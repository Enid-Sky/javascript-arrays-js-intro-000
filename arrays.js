var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  return [...array, element];
<<<<<<< HEAD

  
}
=======
>>>>>>> 722e9cfbdbe7f843f9f6c8cbc6f02da66df4d432

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
  
}
function accessElementInArray(array, index) {
  
  return array [index];
  
}

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray (array) {
  
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  
  array = array.slice(0, array.length -1);
=======
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
  
}
function accessElementInArray(array, index) {
  
  return array [index];
  
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop();
>>>>>>> 722e9cfbdbe7f843f9f6c8cbc6f02da66df4d432
  return array;
}