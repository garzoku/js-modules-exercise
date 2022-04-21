import { getDifference } from "./utilities/difference"

const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

const $result = document.querySelector("#Result")
$result.textContent = getDifference(arrayOne, arrayTwo)

