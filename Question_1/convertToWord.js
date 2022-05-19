
const convertToWord = (number) =>
{   
  //check if the number entered by the user was a valid number and between 1 and 5000  
    if (isNaN(number) || number < 1 || 5000 < number) {
    return `please enter a number between 1 and
    5000.`;
    }
    //an array of units in cardinal numbers
    let units2Letters = ['','one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eghteen',
    'nineteen'],
    // an array of tens in cardinal numbers
        tens2Letters = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    // using modulo to get the unit , ten ,hundred,thousand
    let units = number % 10,
    tens = (number % 100 - units) / 10,
    hundreds = (number % 1000 - number % 100) / 100,
    thousand = (number % 10000 - number % 1000) /1000;
    
    //defined variables for different output
    let unitsOut, tensOut, hundredsOut, thousandsOut;
    
    
    // handling the units
    unitsOut = units2Letters[units];
    
    // handling the tens
    if (tens === 1 && units > 0) {
    tensOut = units2Letters[10 + units];
    unitsOut = '';
    } else{
       tensOut = tens2Letters[tens];
    } 
    // handling the undreds
    hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + ' '
    : '') + (hundreds > 0 ? 'hundred' : '')
    // handling the thousands
    thousandsOut = (thousand > 1 ? units2Letters[thousand] + ' '
    : '') + (thousand > 0 ? 'thousand' : ' ')

    // Returning the total
    return thousandsOut + ( thousandsOut && hundredsOut ? ' and ': ' ') +hundredsOut + ( hundredsOut && tensOut ? ' and ': ' ') +
    tensOut + (thousandsOut && tensOut || hundredsOut && unitsOut || tensOut && unitsOut ? '  ': ' ')
    + unitsOut;
}
module.exports = convertToWord;