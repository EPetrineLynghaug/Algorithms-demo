import { findMaxNumber } from "./modules/finde-max.js";
import { makeRandomList } from "./modules/utils.js";
import { linearSearch } from "./modules/linear-search.js";
import { binarySearch } from "./modules/binary-search.js";

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
