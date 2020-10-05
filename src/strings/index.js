const split = (str, delim) => {
  // write code for strings.split
  let splitString = str.split(delim)
  return splitString
}

const pairs = (str) => {
  // write code for strings.pairs
//split string into pairs of letters
return str.match(/.{1,2}/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  // returns str after it is split reversed into an array and joined back together
  return str.split("").reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}