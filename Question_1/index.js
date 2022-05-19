const convertToWord = require('./convertToWord.js')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number between 1 and 5000 : ', userEntry => {
  console.log('the result is ==>',convertToWord(parseFloat(userEntry,10)));
  readline.close();
});

 

