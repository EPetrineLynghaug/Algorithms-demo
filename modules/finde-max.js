export function findMaxNumber(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// Testing
let a = [];
// console.log("Maks av a: " + findMaxNumber(a)); // Maks av a: undefined
let b = [42];
// console.log("Maks av b: " + findMaxNumber(b)); // Maks av b: 42
let c = Array.from({ length: 50 }, () => Math.ceil(Math.random() * 100)); // * lager tall av 50 i intervallet 0-100
// console.log("Maks av c: " + findMaxNumber(c)); // Maks av c: n (Normally 95-100)

//* første gir undefined, andre gir 42, tredje gir 99 men denne er tilfeldig..
//*når den begynner på arrayen begynner på 51, lister videre nedover og luker ut max verdiene. helt ned til 50 i lengden.
//* kunne brukt en max versjon som hadde funnet tallet. men gøyere p implemente den selv.
