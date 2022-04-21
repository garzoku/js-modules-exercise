import difference from "lodash/difference.js"


const array1 = [1, 2, 3]
const array2 = [2, 3, 4]

console.log(`The difference between ${array1} and ${array2} is ${difference(array1, array2)}`)