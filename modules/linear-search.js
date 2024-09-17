export function linearSearch(arr, query) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === query) {
      return i;
    }
  }
  return -1;
}



