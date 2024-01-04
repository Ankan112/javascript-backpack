const arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

const initialState = 0;
const result = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialState
);
console.log(result);

function findLargestNumber(data) {
  return Math.max(...data);
}
console.log(findLargestNumber(arr), arr);

const randomNumber = Math.round(Math.random() * 1000000);
console.log(randomNumber >= 100000 && randomNumber);
