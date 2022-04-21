import difference from "lodash/difference.js"


const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

export function getDifference(firstArray, secondArray) {
    return (`The difference between ${firstArray} and ${secondArray} is ${difference(firstArray, secondArray)}`)
}