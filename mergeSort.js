const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

function merge(arr1, arr2) {
  // console.log(arr1, arr2)
  let result = [];
  let j = 0;
  for (var i = 0; i < arr1.length + 1; i) {
    // console.log(i, j, "this is i,j");
    if (i === arr1.length && j + 1 < arr2.length) {
      for (var k = j; k < arr2.length; k++) {
        result.push(arr2[k])
      }
      i++
    } else if (i === arr1.length && j + 1 === arr2.length) {
      result.push(arr2[j])
      i++
    } else if (j === arr2.length) {
      result.push(arr1[i + 1])
      i++
    } else if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
      // console.log(result, i, j, "1st else")
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
      // console.log(result, i, j, "2nd else");
    }
  }
  return result;
}

// console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]), "This is merge");
// console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]), "This is merge");
// console.log(merge([2, 5, 7, 8], [1, 3, 9, 10]), "This is merge");

function linearSearch(array, num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num)
      return i
  }
}
// console.log(linearSearch([ 5, 8, 23, 55, 87 ], 55));


function binarySearch(array, num) {
  let arr1 = array.slice(0, Math.floor(array.length / 2))
  let arr2 = array.slice(Math.ceil(array.length / 2), array.length)
  let middle = arr1.length
  console.log(arr1, arr2);
  let index = -1
  if (array[middle] === num) {
    index = i
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === num) {
        index = i
      }
      for (var j = 0; j < arr2.length; j++) {
        if (arr2[j] === num)
          index = j + arr1.length + 1
      }
    }
  }
  return index
}

// console.log(binarySearch([2, 5, 8, 9, 13, 15, 29], 5));
// console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 20));
// console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 90));

function selectionSort(array) {
  // console.log(array);
  let temp;
  let minIndex;
  for (var i = 0; i < array.length; i++) {
    let comparo = array[i]
    if (i === (array.length - 1)) {
      if (array[i] < array[i - 1])
        minIndex = i
      temp = array[i - 1]
      // console.log(temp, "temp", array[i], "array[i]", array[minIndex], "array[minIndex] final");
      array[i] = array[minIndex]
      array[i - 1] = temp
      // console.log(array);
    } else
      for (var j = i + 1; j < array.length; j++) {
        // console.log("j =", j, "i =", i);
        if (comparo > array[j]) {
          minIndex = j
          comparo = array[j]
          // console.log(array[i], "array[i]", array[j], "[array[j]", minIndex, "min index j first if");
          if (j === array.length - 1) {
            temp = array[i]
            // console.log(temp, "temp", array[i], "array[i]", array[minIndex], "array[minIndex] swap 1");
            array[i] = array[minIndex]
            array[minIndex] = temp
            // console.log(array);
          }
        } else if (comparo < array[j]) {
          minIndex = minIndex
          // console.log(minIndex, "minIndex", i, "i");
          // console.log(j === array.length - 1 && array[minIndex] < array[i]);
          // console.log(array, "before swap 2");
          if (j === array.length - 1 && i < minIndex) {
            /* the index i being less than the minIndex made the difference in the middle
            to keep them from swapping incorrectly */
            temp = array[i]
            // console.log(temp, "temp", array[i], "array[i]", array[minIndex], "array[minIndex] swap 2");
            array[i] = array[minIndex]
            array[minIndex] = temp
            // console.log(array, "after swap 2");
          }
        }
      }
  }
  return array
}

// console.log(selectionSort([5, 8, 13, 1, 9, 43, 19, 33]));
// console.log(selectionSort([ 59, 49, 48, 15, 36, 35, 42, 4, 18, 33 ]));
