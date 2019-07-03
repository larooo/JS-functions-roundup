// 1.
// write a function (or series of functions) that takes in an array that contains numbers, and returns the sum of all the even numbers
// Examples:
// ```
// Input: [2, 5, 7, 8, 10]
// Output: 20
// Input: [9, 11, 13, 15, 17, 2, 4]
// Output: 6

const evenSum = arr => {
  let evenArr = [];
  evenArr = arr.filter(x => x % 2 === 0);
  return evenArr.reduce((acc, val) => (acc += val));
};

console.log(evenSum([2, 5, 7, 8, 10]));

// 2.
// write a function (or series of functions) that takes in an array that contains strings, and returns an array with the number of letters in each string
// Examples:
// ```
// Input: ['hey', 'hi', 'hello']
// Output: [3, 2, 5]
// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: [4, 2, 1, 6, 5]

const charakterNum = arr => arr.map(x => x.length);
console.log(charakterNum(["hey", "hi", "hello"]));

// 3.
// write a function (or series of functions) that takes in an array that can contain both words and numbers, and returns the sum of all the even numbers
// Examples:
// ```
// Input: [2, 'hey', 5, 'hi, 6]
// Output: 8
// Input: [9, 'cya', 5, 'goodbye', 'later, 10, 20]
// Output: 30
// ```

const evenSum2 = arr => {
  let evenArr = [];
  evenArr = arr.filter(x => x % 2 === 0);
  return evenArr.reduce((acc, val) => (acc += val));
};
console.log(evenSum2([9, "cya", 5, "goodbye", "later", 10, 20]));

// 4.
// write a function (or series of functions) that takes in an array that an contain strings or numbers, and returns the sums of the length of all of the words(in other words, returns the sum of the total number of letters in all of the words combined)
// Examples:
// ```
// Input: ['hey', 2, 'hi', 4, 'hello']
// Output: 10
// Input: ['this', 5, 'is', 7, 'a', 'longer', 10, 'array']
// Output: 18
// ```

const charakterNum2 = arr =>
  arr
    .filter(x => isNaN(x))
    .map(y => y.length)
    .reduce((a, b) => (a += b));

console.log(charakterNum2(["this", 5, "is", 7, "a", "longer", 10, "array"]));

// 5.
// write a function (or series of functions) that takes in an array of strings, and returns an object with the vowel count of all of the strings combined
// Examples:
// ```
// Input: ['hey', 'hi', 'hello']
// Output: {'a': 0, 'e': 2, 'i': 1, 'o': 1, 'u': 0}
// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: {'a': 3, 'e': 1, 'i': 2, 'o': 1, 'u': 0}
// ```

const vowelCount = arr => {
  let aCount = 0;
  let eCount = 0;
  let iCount = 0;
  let uCount = 0;
  let oCount = 0;
  arr.map(element => {
    aCount += (element.match(/a/i) || []).length;
  });
  arr.map(element => {
    eCount += (element.match(/e/i) || []).length;
  });
  arr.map(element => {
    iCount += (element.match(/i/i) || []).length;
  });
  arr.map(element => {
    uCount += (element.match(/u/i) || []).length;
  });
  arr.map(element => {
    oCount += (element.match(/o/i) || []).length;
  });
  return (res = {
    a: aCount,
    e: eCount,
    i: iCount,
    o: oCount,
    u: uCount
  });
};

console.log(vowelCount(["this", "is", "a", "longer", "array"]));

// 6.
// write a function (or series of functions) that takes in an array of numbers, and returns an object with a count of the number of even numbers and number of odd numbers in the array
// Examples:
// ```
// Input: [1, 2, 3, 4, 5]
// Output: {'evens': 2, 'odds': 3}
// Input: [10, 10, 10, 5, 5, 5, 5]
// Output: {'evens': 3, 'odds': 4}

const evenOdd = arr => {
  let evenNums;
  let OddANums;
  evenNums = arr.filter(x => x % 2 === 0).length;
  oddNums = arr.filter(x => x % 2 != 0).length;
  return (evenOddObject = {
    evens: evenNums,
    odds: oddNums
  });
};

console.log(evenOdd([10, 10, 10, 5, 5, 5, 5]));

// 7.
// write a function (or series of functions) that takes in an array of numbers, and returns an array of only the unique numbers
// Examples:
// ```
// Input: [1, 1, 2, 3, 4, 5, 6, 3]
// Output: [2, 4, 5, 6]
// Input: [3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]
// Output: [5, 6]
// ```

const uniqueNum = arr => arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(uniqueNum([3, 3, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7]));

// 8.
// write a function (or series of functions) that takes in a string of words, capitalizes the last letter of every word, removes any word that has an even amount of letters, and returns a string.
//     Examples:
// ```
// Input: 'hey how do you feel today'
// Output: 'heY hoW yoU todaY'
// ```

const manyStrFunc = str => {
  let arr = str.split(" ");
  let arrOdd = arr.filter(x => x.length % 2 != 0);
  return arrOdd
    .map(x => x.substring(0, x.length - 1) + x[x.length - 1].toUpperCase())
    .join(" ");
};

console.log(manyStrFunc("hey how do you feel today"));

// 9.
// write a function (or series of functions) that takes in an array of numbers, squares every number, removes all numbers that's square is even, converts every number to a string, and returns an array.
// Examples:
// ```
// Input: [1, 2, 3, 4, 5]
// Output: ['9', '25']
// Input: [10 ,11]
// Output: ['121']

const komischFunc = arr => {
  let squrArr = [];
  for (let i in arr) {
    squrArr[i] = arr[i] * arr[i];
  }
  return squrArr
    .filter(x => x % 2 != 0)
    .toString()
    .split(",");
};
console.log(komischFunc([10, 11]));

// ### 10.
// write a function (or series of functions) that takes in an array of strings, reverses every string, removes all strings with the letter 'l' in them, capitalizes the first letter of strings with an even amount of letters, and capitalizes the last letter of strings with an odd amount of letters.
//   Examples:
// ```
// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama']
// Output: ['Drib', 'taC', 'ekanS', 'taC', 'goD', 'Gorf']

const seriesFunc = arr => {
  let reverseArr = [];
  let arrWithoutL = [];
  let finalArr = [];
  for (i in arr) {
    reverseArr[i] = arr[i]
      .split("")
      .reverse()
      .join("");
  }
  arrWithoutL = reverseArr.filter(x => x.indexOf("l") === -1);
  for (let i in arrWithoutL) {
    if (arrWithoutL[i].length % 2 != 0) {
      finalArr[i] =
        arrWithoutL[i].substring(0, arrWithoutL[i].length - 1) +
        arrWithoutL[i][arrWithoutL[i].length - 1].toUpperCase();
    } else {
      finalArr[i] =
        arrWithoutL[i][0].toUpperCase() +
        arrWithoutL[i].substring(1, arrWithoutL[i].length);
    }
  }
  return finalArr;
};
console.log(
  seriesFunc(["bird", "cat", "snake", "cat", "dog", "frog", "llama"])
);

// 11.
// write a function (or series of functions) that takes in an array of strings, removes duplicate strings, removes all of the strings with an even number of letters, and multiplies the remaining letter counts together to return a product.
//   Examples:
// ```
// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog']
// Output: 15
// Input: ['this', 'is', 'a', 'test', 'test']
// Output: 1
const product = arr => {
  let rmvDuplicateStr = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));
  let rmvEvenNum = rmvDuplicateStr.filter(x => x.length % 2 != 0);
  let product = 1;
  for (i in rmvEvenNum) {
    product *= rmvEvenNum[i].length;
  }
  return product;
};
console.log(product(["this", "is", "a", "test", "test"]));
