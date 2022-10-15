function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function advancedFilter(arr) {
  let resultArr = arr.filter(arr => arr >= 0).filter(arr => arr % 3 == 0).map(arr => arr * 10);

   return resultArr; // array
}
