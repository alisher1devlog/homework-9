/*Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

To'liq so'z tugaguncha ketma-ket harflarni qo'shib, so'zni qabul qiladigan va yozadigan funksiya yarating.

Examples
spelling("bee") ➞ ["b", "be", "bee"]
spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"] */

function spelling(word) {
  return word.split("").map((_, i) => word.slice(0, i + 1));
}


console.log(spelling("bee"));  
