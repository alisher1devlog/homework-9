/*Function yarating u array qabul qilsin ichida ikkita element bo'ladi holos [num1, num2]. function num1* num2 = qiymatini to'paytma belgisidan foydalanmasdan chiqaradigan algorithm yozing!

==Ko'paytma ishlatmasdan bajaring! ==

func([3,4]) //=> 12
func([2,4]) //=>  8 */

const arr = [3,4];

function func(arr){
    return Array(Math.abs(arr[1]))
          .fill(arr[0])
          .reduce((sum, val) => sum + val, 0) * Math.sign(arr[1]);
    // let kop = 0;
    // for(let i = 0; i < arr[0]; i++){
    //     kop+=arr[1];
    // }
    // return kop;
}

console.log(func(arr));
