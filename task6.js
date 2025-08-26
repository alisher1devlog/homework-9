/*
Funtion yarating u array qabul qilsin array ichida so'zlar berilgan. So'zlardan faqat kichik harfli unlilarni qaytaradigan algorithm tuzing!

returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"])//=>  ['aaouaau', 'ao', 'aoai]
returnVowel(["Toshkent"])//=>  ['oe] */

const arr = ["Assalomu alaykum", "salom", "Najot ta'lim"];

function returnVowel(arr) {
  return arr.map(word => {
    let vowels = "";
    for (let char of word) {
      if ("aeiou".includes(char)) { 
        vowels += char;
      }
    }
    return vowels;
  });
}

console.log(returnVowel(arr)); 



