// Задание 1.
// Выведите на экран текущий день. 

// Решение 
// let date = new Date();
// console.log(date.getDate());


// Задание 2.
// Выведите на экран текущий месяц. 

// Решение 
// let date = new Date();
// console.log(date.getMonth());


// Задание 3.
// Выведите на экран текущий год. 

// Решение 
// let date = new Date();
// console.log(date.getFullYear());


// Задание 4.
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
// Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости. 

// Решение
// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();

// console.log(
//     addZero(date.getHours()) + ':' +
//     addZero(date.getMinutes()) + ':' +
//     addZero(date.getSeconds()) + ' ' +
//     addZero(date.getDate()) + '.' +
//     addZero(date.getMonth() + 1) + '.' +
//     date.getFullYear() + '.'
// );


// Задание 5.
// Дана дата в формате год-месяц-день. 
// Преобразуйте эту дату в формат день.месяц.год. 

// Решение
// let date = '2024-12-05';
// console.log(date.split('-').reverse().join('.'));