let input = 'aerobus'; //Enter a message!

const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      if (input[i] === 'e'){
        resultArray.push(vowels[j],vowels[j]);
      } else if (input[i] === 'u') {
        resultArray.push(vowels[j],vowels[j]);
      } else {
      resultArray.push(vowels[j]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
