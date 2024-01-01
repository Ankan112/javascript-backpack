const arr = [1, 2, 3, 4, 5, 6];

const initialState = 0;
const result = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialState
);
console.log(result);
