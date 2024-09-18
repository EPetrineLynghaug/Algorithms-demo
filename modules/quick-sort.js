function partition(arr, start, end) {
  //   console.log(arr, start, end); //! ta alltid med for å sjekke at alt er der.
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]; //! putter privo inndexen tilbake
  return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    //! alltid ha med. denne er viktig og den som gjør at det bobler opp igjen.
    return;
  }
  // Returns pivotIndex
  let index = partition(arr, start, end); //! finner midtpunkte og deler arrayen.
  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1); // Sort left
  quickSortRecursive(arr, index + 1, end); // Sort right
}

/** "public" function */
export function quickSort(arr) {
  const rArr = [...arr]; // Preserve original
  quickSortRecursive(rArr, 0, rArr.length - 1); // sort the copy
  return rArr; // Return the sorted copy
}

//testing
const randArr = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(randArr);

let sortedArr = quickSort(randArr);
console.log("QS:" + sortedArr);
