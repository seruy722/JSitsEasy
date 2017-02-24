
'use strict';
/*
1. Напишите функцию которая принимает в качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = [];

let addToArray = (arrParam, newElem) => {
  arrParam.push(newElem);
};

arr.push(35);
arr.push(35)
console.log(arr); // [35,35]



addToArray(arr, { functionTypes: ['functionExpression', 'functionDeclaration'] });
console.log(arr); // [35, 35, { functionTypes: ['functionExpression', 'functionDeclaration'] }]


/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа: 
    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
    
*/

let simpleObjectGenerator = (param1, param2, param3) => {


  return {
    argument1: 77,
    argument2: [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
    argument3: 'PRIVET KAK DELA'
  }
};

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


var number2 = 150;
var number3 = 3;
let number4 = 10;

let add = (a, b) => {
  return a + b;
};



add(number4, number3);

/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает объект где ключ это первый аргумент, 
    а значение - второй аргумент
    и добавляет свойство "name" из объекта 
    и возвращает данный новый объект
*/

var myName = { name: 'Sergey' };

let addNameToUser = (newKey, newValue, userName) => {

  let newObject = {};
  newObject[newKey] = newValue;
  newObject.name = userName.name;
  return newObject;

};
console.log(addNameToUser('family', '%Denisiuk%', myName));
console.log(myName);



/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

let fizzBuzz = num => {
  let str = '';

  if (!(num % 3)) {str += 'Fizz';}
  if (!(num % 5)) {str += 'Buzz';}
  if (!str.length) {return num;}
  return str;
};

console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(2)); // 2
console.log(fizzBuzz(3)); // 'Fizz'
console.log(fizzBuzz(5)); // 'Buzz'
// ...
console.log(fizzBuzz(15)); // 'FizzBuzz'
console.log(fizzBuzz(21)); // 'Fizz'