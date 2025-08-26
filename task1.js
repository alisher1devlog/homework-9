/*Number Split | Sonni qismga ajratish
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
function yarating u number qabul qilsin va uni ikki bo'lakga bo'lsin shu bo'laklarni bir biriga qo'shganda yi'g'indi berilgan number bilan bir hil bo'lsin. Agarda raqamlar juftva toqga ajrasa kattasi o'ng tomonda kelsin
Examples
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4] */

const number = -9;

function numberSplit(number){
    let newArr = [];
    const raqam = Math.floor(number / 2);
    if(number-raqam >= raqam){
        newArr.push(raqam);
        newArr.push(number-raqam);
    }else{
        newArr.push(number-raqam);
        newArr.push(raqam);
    }
    return newArr;
}

console.log(numberSplit(number));

// AI bilan

// function numberSplit(num) {
//   return Array.from([Math.floor(num / 2), Math.ceil(num / 2)]);
// }

// console.log(numberSplit(4));   // [2, 2]
// console.log(numberSplit(11));  // [5, 6]

