
'use strict';
let favoriteCars = ['BMW', 'Reno', 'Subaru'];

let user = {
  name: 'Sergey',
  surname: 'Denisiuk',
  dateOfBith: 1989,
  favoriteCars,
  friends: [{ name: 'Vasja', surname: 'Petrovych' }, { name: 'Kolja', surname: 'Shevko' }]
};

console.log(user.friends);
console.log(user.friends[0]);
console.log(user.favoriteCars);

/*
 1. Составить предложение из вышестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
 */

let numbers = [25, 1];
let project = "проект";
let team = `команда`;
let howMuch = "Сколько";
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers} ${team}`;
console.log(task1);


/*
 2. Составьте предложение из представленного массива и выведите предложение
 в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. Он не был больше ни телом, к которому рано или поздно ..."
 */
let array = ['Он не был больше ни телом, к которому рано или поздно',
  'он обнаружил,', 'Так, когда Будда достиг Просветления,',
  '...', 'что больше не ощущает себя мишенью.'];

let homeSentence = `${array[2]} ${array[1]} ${array[4]} ${array[0]} ${array[3]}`;
console.log(homeSentence);

/*
 3. Добавьте 4 новых свойства в объект используя квадратные скобки и точку.
 */


let myObj = {};

myObj.companyName = 'Asterix';
myObj.location = 'Kharkiv';
myObj['wokers'] = 20;
myObj['id'] = 6666;

console.log(myObj);


/*
 4. Используя метод .slice, добавте недостающие символы в строку
 */

let sliceString = 'Ytube';
let l = sliceString[3];
sliceString = sliceString.slice(0, 1) +'ou'+ sliceString[1].toLocaleUpperCase() + sliceString.slice(2);




console.log(s); // YouTube 

/*
 5. Преобразуйте строку x, в максимально удобно читаемый вид
*/

let frameworks = [2.8, 'Angular', 'Angular2', 'React/Redux'];
let x = `google released new version ${frameworks[1]} Math.floor(${frameworks[0]}) But real speed is ${frameworks[frameworks.length - 1]}`;

console.log(x);


