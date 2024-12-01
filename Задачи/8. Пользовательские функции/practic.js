// задание 1.
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

// Решение
// function sumArr (arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }


// Задание 2.
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

// Решение
// function devinity (num) {
//     let arr = [];
//     for (i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(devinity(10));


// Задание 3.
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

// Решение
// function divSumbol (str) {
//     return str.split('');
// }
// console.log(divSumbol('Привет мир!'));


// Задание 4.
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

// Решение
// function strRevers (str) {
//     let arr = str.split('');
//     let res = [];
//     for (let i = arr.length; i >= 0; i--) {
//         res.push(arr[i]);
//     }
//     return res.join('');
// }


// Задание 5.
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

// Решение
// function firstUpperCase (str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(firstUpperCase('test'));


// Задание 6.
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

// Решение
// function allFirtsUpperCase (str) {
//     let arr = str.split(' ');
//     let new_arr = []
//     for (let elem of arr) {
//         new_arr.push(elem[0].toUpperCase() + elem.slice(1));
//     }
//     return new_arr.join(' ');
// }
// console.log(allFirtsUpperCase('hello is my fitst test string'));


// Задание 7
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// Решение
// function createArr (num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     } 
//     return arr;
// }
// console.log(createArr(20));


// Задание 8.
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// Решение
// function sumDigitals (num) {
//     let str = String(num);
//     let sum = 0;
//     for (let i = 0; i < str.length; i++ ) {
//         sum += Number(str[i]);
//     }
//     return sum;
// }
// console.log(sumDigitals(11));