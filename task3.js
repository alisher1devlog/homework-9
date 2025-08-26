/*Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Function yarating u Array ([]) qabul qilsin. function eng kichik va eng katta qiymatini array ichida qaytarsin. [kichik, katta]

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]
*/

const arr = [1, 2, 3, 4, 5];

function minMax(arr){
    if (arr.length === 0) {
        return [undefined , undefined];
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);

  return { min, max };
}

console.log(minMax(arr));
