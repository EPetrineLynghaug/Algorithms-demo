export function binarySearch(arr, target) {
  let left = 0; // Set left boundry, initially first element
  let right = arr.length - 1; // set right boundry, initially last element
  while (left <= right) {
    let middle = Math.floor((left + right) / 2); // Find middle element's index
    if (arr[middle] < target)
      // If the middle value is less than target
      left = middle + 1; // ...then search right side of array
    else if (arr[middle] > target)
      // if the middle value is larger that target
      right = middle - 1;
    else return middle;
  }
  return -1;
}
// myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearch(myArr, 7)); // 6
// console.log(binarySearch(myArr, 42)); // -1
