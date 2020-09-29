const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 0 == true){
    return true
  } else {
    return false
  }

}

const sum = (arr) => {
  // write code for numbers.sum
  let added;
  let i;
  for(i in arr){
    added += arr;
  }
  return added
}

console.log(sum([1,2]))
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}