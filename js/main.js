'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

let moveZeroToEnd = arr => {
  return arr.filter((element, index, arr) => {
    return element !== 0;
  }).concat(arr.filter((element, index, arr) => {
    return element === 0;
  }));
};

console.log(moveZeroToEnd(arr1));


var array = [2, 1, 2000, 4, 5, 6, 7, 8, 9, 10];

function myFilter() {
  let args = [].slice.call(arguments);
  return args.filter(value => {
    return value % 2 === 0;
  });
}

console.log(myFilter(2, 1, 2000, 4, 5, 6, 7, 8, 9, 10));


/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */

let minimalNumber = arr => {
  let sortedArr = arr.sort((leftEl, rightEl) => leftEl - rightEl);
  return sortedArr[0] + sortedArr[1];
};

//minimalNumber([10, 20, 30, 1, 31, 11, 10]);
console.log(minimalNumber([-4, -10, 25, 10]))


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
/*3. Напишите функцию которая меняет местами имя и фамилию*/

let nameShuffler = name => {
  let arrFromNameSername = name.split(' ');
  arrFromNameSername.reverse();
  return arrFromNameSername.join(' ');
};

console.log(nameShuffler('john McClane'));// "McClane john"
/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором первая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
let arrNames = ['KARLY', 'DANIEL', 'KELSEY'];

let capMe = arr => {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    arr[i] = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }
  return arr;
};

console.log(capMe(arrNames));




//@SUPER
/*
 1. Найдите Число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [0,16,24,32] => 8
  
 */
let random = arr => {
  let step = (arr[arr.length - 1] - arr[0]) / arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + step !== arr[i + 1]) {
      return arr[i] + step;
    }
  }
  console.log(arr[1]);
  //return arr[1] - arr[0];

};

console.log(random([1, 3, 5, 9]));
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

// Напишите функцию которая ищет в массиве hello
let test = [[], { html: 'css' }, 'hello', { hello: 'world' }];
let test2 = [[], { html: 'css' }, 'hello'];
let test3 = [20, 30, 50, 60];


let isHelloInArray = arr => {
  return arr.some(function(element, index, arr) {
    return element.name;
  });

};

console.log(isHelloInArray(test)) //true
console.log(isHelloInArray(test2)) //false





/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */
let arr2 = [[1, 2], [3, [4]], 5, 10];

let openBraces = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(openBraces(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(openBraces(arr2));



