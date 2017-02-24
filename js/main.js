'use strict';

/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */


let numbersBetween = (a, b) => {
  let arr = [];
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }
  return arr;
};


console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100

 */

let fizzBuzz = num => {
  let str = '';
  if (!(num % 3)) {
    str = str + 'Fizz';
  }
  if (num % 5 == 0) {
    str = str + 'Buzz';
  }
  if (!str.length) {
    return num;
  }
  return str;
};

let fizzBuzz100 = () => {
  let num = 1;
  while (num < 100) {
    console.log(fizzBuzz(num));
    num++;
  }
};

fizzBuzz100();


/*
 3. Напишите функцию которая принимает 1 аргумент - массив 
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [ 1, null, undefined, 'str', {}, [], function() {} ];
// let arr = ['privet', 12, {}, [1, 2]];
let arr2 = ['privet', 12, {}, [1, 2]];

let returnArr = argument => {
  let newArr = [];
  for (let i = 0; i < argument.length; i++) {

    newArr.push(typeof (argument[i]));
  }
  return newArr;
};
console.log(returnArr(arr));
console.log(returnArr(arr2));


/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива 
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
 Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
console.log(array); //[ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35


let solution = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let objectInArray = arr[i];
    if (isNaN(objectInArray.age)) {
      objectInArray.unknownAge = true;
      newArr.push(objectInArray);
    }
  }
  return newArr;
};

console.log(solution(array));
