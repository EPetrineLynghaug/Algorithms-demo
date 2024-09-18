export function insertionSort(array) {
  const arr = array.slice();
  // console.log(arr);
  let x, j; // declearing helpers
  // outer loop, staring at second element:
  for (let i = 1; i < arr.length; i++) {
    x = arr[i]; // pick out value of the current element
    // inner loop, checking the sorted part:
    for (j = i - 1; j >= 0 && arr[j] > x; j--) {
      // moving element to the right as long as it's value is less than x:
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = x; // insert value in place
  }
  return arr;
}
// let a = insertionSort([4, 1, 0, 51, 23, 10, 9, 15]);
// console.log(`Sorted: ${a}`); // Sorted: 0,1,4,9,10,15,23,51

// TESTING
// const randomArray = Array.from({ length: 50 }, () =>
//   Math.floor(Math.random() * 100)
// );
// console.log(randomArray);

// let sortedArr = insertionSort(randomArray);
// console.log("IS:" + sortedArr);

//! se på animasjonen så gir eksmpelet mening.

//! Om du ikke vil at den skal kødde med orginal array er det fint å ha en copie av den.

//! to klausuler inni for, den løper nedover endten helt i begynnelsen eller til den finner et ele som er mindre enn i x. om den ikke finner noe løper den videre til begynnelsen eller et mindre ele.
//! vi har løftet ut xen så vi alltid har plass til å flytte.

//! den indre loopen funker for alle elementer for å flytte på tallene.
//! når vi har gått ut av den ytre loopen kan vi da er vi ferdig sortert.
