function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length)
    return arr1.every((a, index) => a === arr2[index])
  else 
    return false; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(arr => arr >= 0).filter(arr => arr % 3 == 0).map(arr => arr * 10);

   return resultArr; // array
}
