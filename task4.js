/*Birinchi toq sonni topish
Function yarating u Array ([]) qabul qilsin. Birinchi uchragan toq sonni qaytaradigan algorithm yozing!

[! note]

2 ga bo'lganda qoldiq qolsa u toq son!
	findPrimeNumber([4, 12, 42, 9,12, 3]) ➞ 9
	findPrimeNumber([123, 42, 93, 21, 11]) ➞ 123 */

const arr = [123, 42, 93, 21, 11];

function findPrimeNumber(arr){
    const first = arr.find(toq => toq % 2 !== 0);
    return first;
}

console.log(findPrimeNumber(arr));


