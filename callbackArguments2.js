
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  function testForWaldo( element, index, array ){
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  }
  arr.forEach( testForWaldo );
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);