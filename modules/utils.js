export const makeRandomList = (totalElements = 1000, maxValue = 100) => {
  const lable = `making list with ${totalElements} elemnts`;

  const arr = [];

  console.time(lable);
  for (let i = 0; i < totalElements; i++) {
    arr.push(Math.floor(Math.random() * maxValue) + 1);
  }
    console.timeEnd(lable);
  return arr;
};

//* Vi timer forloopen.

// const q = 42;
// const hit = linearSearch(myList, q);
// if (hit > -1) console.log(`Index: ${hit} is ${myList[hit]}`);
// else console.log(`${q} is not in the list`);
