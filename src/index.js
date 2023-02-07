const matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]

function towelSort(matrix) {
  //const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      let column = i % 2 === 0 ? k : (matrix[i].length - 1 - k);
      const res = res.push(matrix[i][column]);
    }
  }
  return res
}

console.log(towelSort(matrix));
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return [];
}
