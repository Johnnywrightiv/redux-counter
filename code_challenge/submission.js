const testCase = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];

const findSum = function(array) {
  // your code here - don't forget to return a number!
  const sum = array.reduce((a, b) => a + b);
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  // OUTPUT: {most: 'a', least: 'd'}
  const frequencies = {
    most: '',
    least: ''
  };
  
  const obj = {};
  array.forEach(element => {
    if(!obj[element]) obj[element] = 1;
    else obj[element]++;
  });

  frequencies.most = Object.keys(obj)[0];
  frequencies.least = Object.keys(obj)[Object.keys(obj).length - 1];

  return frequencies;
  };

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};

console.log('hi')
// console.log(findSum(testCase))
console.log(findFrequency(testCase))