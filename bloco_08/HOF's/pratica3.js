const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, curr) {
  // escreva seu código aqui
let index = [];
index.push(acc + curr);
return index;
};

const arr = arrays.reduce(flatten);
console.log(arr);
