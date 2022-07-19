module.exports = function toReadable (number) {
    let numToWord ='';

    const toNineteen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen', 
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    const toNinety = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty', 
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    
    if (number<20) {
        numToWord = toNineteen[String(number)]; 
    }
    
    if (number>=20 && number<99&&number%10===0) {
        numToWord = toNinety[String(number)];
    }
    if (number>=20 && number<=99&&number%10!==0) {
        numToWord = toNinety[String(number -number%10)] + ' '+ toNineteen[String(number%10)];
    }
    if (number>=100 && number<=999&&number%100===0) {
        numToWord = toNineteen[String(number/100)] + ' hundred';
    }
    if (number>100 && number<=999 &&number%100!==0&&number%100<20) {
        numToWord = toNineteen[String((number - number%100)/100)] + ' hundred '+ toNineteen[String(number%100)];
    }
    if (number>100 && number<=999 &&number%100!==0&&number%100>=20&&number%10!==0) {
        numToWord = toNineteen[String((number - number%100)/100)] + ' hundred '+ toNinety[String(number%100-number%10)]+ ' ' + toNineteen[String(number%10)];
    }
    if (number>=120 && number<=999&&number%100!==0&&number%100>=20&&number%10==0) {
        numToWord = toNineteen[String((number -number%100)/100)] + ' hundred '+ toNinety[String(number%100)];
    } 
    if (number>=1000) {numToWord ='thousand and more';}
    return numToWord; 
};
