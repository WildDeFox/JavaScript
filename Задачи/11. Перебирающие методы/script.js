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