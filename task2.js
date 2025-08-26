/*Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.

Function yarating u Array qiymati qabul qilsin va arrayning har bir elementini cublarini yig'indisini qaytarsin!.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0 */


function sumOfCubes(arr){
    const sum = arr.reduce((acc,value) => acc + value**3 , 0);
    return sum;
}

console.log(sumOfCubes([3, 4, 5]));


