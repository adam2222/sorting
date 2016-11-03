
function bubbleSort(array){

  for (var lastUnsorted = array.length - 1; lastUnsorted > 0; lastUnsorted--){

    for (var i = 0; i < lastUnsorted; i++) {
      if (isLessThan(array[i + 1], array[i])){ swap(i, i + 1, array); }
    }
  }
  return array;
}

function isLessThan(a, b){
  return a < b;
}

function swap(firstIndex, secondIndex, array){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
