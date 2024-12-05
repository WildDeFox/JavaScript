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


// Задание 6
// Выведите на экран номер текущего дня недели. 

// Решение
// let date = new Date();
// console.log(date.getDay());


// Задание 7.
// Определите, является ли текущий день недели выходным или рабочим днем. 

// Решение
// function isWorkDay() {
//     let date = new Date();
//     if (date.getDay() == 6 || date.getDay() == 0) {
//         console.log('Поздравляю, сегодня выходной день!');
//     } else {
//         console.log('К сожалению, сегодня рабочий день...');
//     }
// }
// isWorkDay();


// Задание 8.
// Определите сколько дней осталось до ближайшего воскресенья. 
// function howWorkDay() {
//     let date = new Date().getDay();
//     let count = 0;
//     while (date < 5 || date == 0) {
//         count++;
//         date++;
//     }
//     console.log(`До выходных осталось дней - ${count}`);
// }
// howWorkDay();


// Задание 9.
// Пусть дан следующий массив:
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// Выведите с помощью этого массива название текущего месяца. 

// Решение
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let date = new Date();
// console.log(months[date.getMonth()]);


// Задание 10.
// Узнайте, какой день недели был в ваш день рождения. 

// Решение
// let date = new Date(1998, 11, 24);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 
// 	'сб']; 
// console.log(days[day]);


// Задание 11.
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года. 

// Решение
let date = new Date(2025, 1, 1);
console.log(date.getTime());