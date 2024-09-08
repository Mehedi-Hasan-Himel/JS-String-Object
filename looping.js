/*
 * Looping Technique.
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4.  for of --> array loop
 * 5. for in --> object loop
 */

// const friends = ["Elon", "Bill", "Mark", "Waren"];

/* for (const friend of friends) {
  console.log(friend);
} */

/* for (i = 0; i < friends.length; i++) {
  console.log(i);
  console.log(friends[i]);
}
 */
const numbers = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6];

/* for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}




