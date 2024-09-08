/* Task-1:
Count how many times a string has the letter a */
/* 
let text = "Arifa";
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") {
    count++;
  }
}

console.log(count);
 */

/* Task-2:
Count how many times a string has the letter a or A */

/* let text = "Arifa";
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i].toLocaleLowerCase() === "a") {
    count++;
  }
}

console.log(count); */
/* 
Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

let text = "I'm Mehedi Hasan Himel.".toLowerCase();
let vowels = "aeiou";
let containsAllVowels = vowels.split('').every(vowel => text.includes(vowel));

if (containsAllVowels) {
  console.log("The string contains all the vowels.");
} else {
  console.log("The string does not contain all the vowels.");
}
