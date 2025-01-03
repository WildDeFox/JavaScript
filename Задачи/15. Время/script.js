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
// let date = new Date(2025, 1, 1);
// console.log(date.getTime());


// Задание 12. 
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года. 

// Решение
// let date1 = new Date(1988, 3, 1);
// let date2 = new Date(2000, 1, 10);

// let diff = date2 - date1;
// console.log(diff / (1000 * 60 * 60 * 24));


// Задание 13
// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// Решение
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date2 - date1;
// console.log(diff);


// Задание 14
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

// Решение
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date2 - date1;
// console.log(diff * (1000 * 60 * 60 * 24));


// Задание 15
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

// Решение
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date2 - date1;
// console.log(diff * (1000 * 60 * 60 * 24 * 30) % 12);


// Задание 16.
// Нахождение последнего дня месяца

// Решение
// function lastDayMonth(year, months) {
//     let date = new Date(year, months, 0);
//     return date.getDate();
// }
// console.log(lastDayMonth(2024, 11));


// Задание 17.
// Определение високосного года

// Решение
// function isLeap(year) {
//     let date = new Date(year, 2, 0);
//     if (date.getDate() == 29) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeap(2024));


// Задание 18.
// Сделайте функцию checkDate, которая будет выполнять описанную проверку. 
// Пусть функция возвращает true, если дата корректна и false, если нет. 
// Пример работы этой функции для 31 января и 32 января:

// Решение
// function checkDate([year, months, day]) {
//     let date = new Date(year, months, day);
//     if (date.getFullYear() == year && date.getMonth() == months && date.getDate() == day) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false