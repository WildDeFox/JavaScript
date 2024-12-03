// Задание 1.
// Дан массив с числами. 
// Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив. 

// Решение
// let oldArr = [1, 2, 3, 4, 5, 6];
// let arr = oldArr.map(function(elem){
//     return Math.sqrt(elem);
// })
// console.log(arr);


// Задание 2.
// Дан массив со строками. 
// Используя метод map в конец значению каждого элемента массива добавьте символ '!'. 

// Решение
// let arr = ['str1', 'str2', 'str3'];
// let newArr = arr.map(function(elem) {
//     return elem + '!';
// })
// console.log(newArr);


// Задание 3.
// Дан массив со строками. 
// Используя метод map переверните символы каждой строки в обратном порядке. 

// Решение
// let arr = ['str1', 'str2', 'str3'];
// let newArr = arr.map(function(elem) {
//     let helpArr = [];
//     for (let i = elem.length; i >= 0; i--) {
//         helpArr.push(elem[i]);
//     }
//     return helpArr.join('');
// })
// console.log(newArr);


// Задание 4.
// Дан следующий массив:
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// Решение 
// let arr = ['123', '456', '789'];
// let newArr = arr.map(function(elem) {
//     let helpArr = [];
//     for (let i = 0; i < elem.length; i++) {
//         helpArr.push(elem[i]);
//     }
//     return helpArr;
// })
// console.log(newArr);


// Задание 5.
// Дан массив с числами. 
// Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве. 

// Решение
// let oldArr = [1, 2, 3, 4, 5, 6];
// let arr = oldArr.map(function(elem, index) {
//     return elem * index;
// })
// console.log(arr);


// Задание 6.
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива. 

// Решение 
// let oldArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// oldArr.forEach(function(elem) {
//     sum += Math.pow(elem, 2);
// }) 
// console.log(oldArr);


// Задание 7.
// Дан массив с числами. Оставьте в нем только положительные числа. 

// Решение
// let arr = [1, 2, -2, -32, 32, -43, 1];
// let newArr = arr.filter(elem => elem > 0);
// console.log(newArr);


// Задание 8.
// Дан массив с числами. Оставьте в нем только отрицательные числа. 

// Решение
// let arr = [1, 2, -2, -32, 32, -43, 1];
// let newArr = arr.filter(elem => elem < 0);
// console.log(newArr);


// Задание 9.
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10. 

// Решение
// let arr = [1, 2, -2, -32, 32, -43, 1];
// let newArr = arr.filter(function(elem) {
//     if (elem > 0 && elem < 10) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newArr);


// Задание 10.
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 

// Решение
// let arr = ['123', 'Привет', 'Как у тебя дела!'];
// let newArr = arr.filter(elem => {
//     if (elem.length > 5) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newArr);


// Задание 11.
//  Дан массив с числами. 
// Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30. 

// Решение
// let arr = [123, 4235, 11, 23, 53235];
// let newArr = arr.filter(function(elem, index) {
//     if (elem * index < 30) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newArr);


// Задание 12.
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. 
// Оставьте в нем только обычные элементы. 

// Решение
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let newArr = arr.filter(elem => {
//     if (typeof elem == 'object') {
//         return false;
//     } else {
//         return true;
//     }
// });
// console.log(newArr);


// Задание 13.
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// Решение
// let oldArr = [1, 2, 33, 4, 5];
// let newArr = oldArr.every(elem => {
//     if (elem > 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(newArr);


// Задание 14.
// Дан массив с числами. 
// Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// Решение 
// let arr = [1, 2, 3, 4];
// let result = arr.every(function(elem, index) {
//     if (elem * index < 30) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(result);


// Задание 15.
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

// Решение
// let arr = [1, 2, 3, -3, -4];
// let result = arr.some(elem => elem > 0);
// console.log(result);


// Задание 16.
// Дан массив с числами. 
// Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

// Решение
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = arr.some(function(elem, index) {
//     if (elem * index  > 30) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(result);