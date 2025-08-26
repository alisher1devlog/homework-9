/*How Much is True?
Create a function which returns the number of true values there are in an array.

Massivdagi true qiymatlar sonini qaytaruvchi funksiya yarating.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0 */

const arr = [false,true, false, false, false];

function countTrue(arr){
    let count = 0;
    for(let i of arr){
        if (i === true) {
            count+=1;
        }
    }
    return count;
}

console.log(countTrue(arr));
