const testCase = 'quiet';
  // change testCase to check individual functions outputs

const findSum = function(array) {
  // your code here - don't forget to return a number!
  const sum = array.reduce((a, b) => a + b);
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object
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
  const FORWARD = str;
  const BACKWARD = str.split('').reverse().join('');
  
  if (FORWARD === BACKWARD) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  // loop through each number
  // multiply [i] * [i]+1
  // push product to products array & sort
  let products = [];
  
  for (let i = 0; i < array.length; i++) {
    const product = (array[i] * array[i+1]);
    products.push(product)
  }
  
  products.sort(function(a, b) {return b - a});
  // console.log(products)
  let largestProduct = products[0];

  return largestProduct;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let arr = str.split('');
  let firstHalf = '';
  let secondHalf = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (element === '(') {
      firstHalf = arr.slice(0, i);
    }
    if (element === ')') {
      secondHalf = arr.slice(i);
      secondHalf.shift();
    }
  }

  return (firstHalf.join("") + secondHalf.join(""));
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  const charValues = [];
  const pointScale = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z'],
  };
  
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    
    if (pointScale[1].includes(str[i])) { // can probably be more concise, but this ugly mess of nested if/elses works for now :)
      charValues.push(parseInt(Object.keys(pointScale)[0]));
    } else if (pointScale[2].includes(str[i])) {
      charValues.push(parseInt(Object.keys(pointScale)[1]));
    } else if (pointScale[3].includes(str[i])) {
      charValues.push(parseInt(Object.keys(pointScale)[2]));
    } else if (pointScale[4].includes(str[i])) {
        charValues.push(parseInt(Object.keys(pointScale)[3]));
    } else if (pointScale[5].includes(str[i])) {
      charValues.push(parseInt(Object.keys(pointScale)[4]));
    } else if (pointScale[8].includes(str[i])) {
      charValues.push(parseInt(Object.keys(pointScale)[5]));
    } else if (pointScale[10].includes(str[i])) {
      charValues.push(parseInt(Object.keys(pointScale)[6]));
    }
  };
  
  const valueOfStr = charValues.reduce((a, b) => a + b);
  return valueOfStr;
};

// console.log(findSum(testCase));
// console.log(findFrequency(testCase));
// console.log(isPalindrome(testCase));
// console.log(largestPair(testCase));
// console.log(removeParenth(testCase));
console.log(scoreScrabble(testCase));