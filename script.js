import { findMaxNumber } from "./modules/finde-max.js";
import { makeRandomList } from "./modules/utils.js";
import { linearSearch } from "./modules/linear-search.js";
import { binarySearch } from "./modules/binary-search.js";
import { insertionSort } from "./modules/insertionSort.js";
import { quickSort } from "./modules/quick-sort.js";
import { exercise } from "./modules/exercise.js";

const myList = makeRandomList(10_000_000, 10_000_000);
// console.log(myList);

//finde max//
console.time("findMaxNumber");
let max = findMaxNumber(myList);
console.timeEnd("findMaxNumber");
console.log("max: " + max);

//needle to search//
let needle = 942_042;
let result;

console.time("linear seach unsorted");
result = linearSearch(myList, needle);
console.log(result);
console.timeEnd("linear seach unsorted");

//sort srtander//
console.time("stander sort");
let sortedArr = myList.toSorted((a, b) => a - b);
console.timeEnd("stander sort");
console.log(sortedArr);

//Linear search on sorted//
console.time("linear seach sorted");
result = linearSearch(sortedArr, needle);
console.log(result);
console.timeEnd("linear seach sorted");

//Binary search//
console.time("binary search");
result = binarySearch(sortedArr, needle);
console.log(result);
console.timeEnd("binary search");

//insertion sort//
let randArr2 = makeRandomList(100_000, 1000);
console.log("ranArr2: " + randArr2);

console.time("insertion sort");
let insertSortedArr = insertionSort(randArr2);
console.timeEnd("insertion sort");

//quick sort//

console.time("quick sort");
let quickSortedArr = quickSort(randArr2);
console.timeEnd("quick sort");
//console.log("quickSortedArr: ");

//exercise//
console.log(exercise(10));
console.log(exercise(1000));
