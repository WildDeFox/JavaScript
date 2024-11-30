// Задание 1.
// Возведите 2 в 10 степень.

// Решение
// document.write(Math.pow(2, 10));


// Задание 2.
// Найдите квадратный корень из 245.

// Решение
// document.write(Math.sqrt(245));


// Задание 3.
// Дан следующий массив:
// [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. 
// Для решения воспользуйтесь циклом for.

// Решение
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let elem of arr) {
//     sum = Math.pow(elem, 3);
// }
// console.log(Math.sqrt(sum));


// Задание 4. 
// Найдите квадратный корень из 379. 
// Результат округлите до целых, до десятых, до сотых.

// Решение
// console.log(Math.sqrt(379).toFixed())
// console.log(Math.sqrt(379).toFixed(1))
// console.log(Math.sqrt(379).toFixed(2))


// Задание 5.
// Найдите квадратный корень из 587. 
// Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// Решение
// console.log(Math.floor(Math.sqrt(587)));
// console.log(Math.ceil(Math.sqrt(587)));


// Задание 6.
// Даны числа 4, -2, 5, 19, -130, 0, 10. 
// Найдите минимальное и максимальное число.

// Решение
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));


// Задание 7. 
// Выведите на экран случайное целое число от 1 до 100.

// Решение
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));


// Задание 8.
// С помощью цикла заполните массив 10-ю случайными целыми числами.

// Решение 
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let arr = [];
// for (let i = 0; i < 10; i ++) {
//     arr.push(getRandomInt(1, 100));
// }
// document.write(arr);


// Задание 9.
// Дана строка 'js'. Сделайте из нее строку 'JS'.

// Решение
// console.log('js'.toUpperCase);


// Задание 10
// Дана строка 'JS'. Сделайте из нее строку 'js'.
// console.log('JS'.toLowerCase());


// Задание 11
// Дана строка 'я учу javascript!'. 
// Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// Решение
// строка.substr(откуда отрезать, [сколько символов отрезать]);
// строка.substring(откуда начать отрезать, [докуда отрезать]);
// строка.slice(откуда отрезать, [докуда отрезать]);
// let str = 'я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.substring(2, 5));
// console.log(str.slice(2, 5));


// Задание 12.
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

// Решение 
// let str = 'http://mysite.com';
// console.log(str.startsWith('http://'));


// Задание 13.
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

// Решение
// let str = 'http://mysite.com/index.html';
// console.log(str.endsWith('.html'));


// Задание 14.
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.

// Решение
// let str = '1-2-3-4-5';
// let elem = '-';
// while(str.includes(elem)) {
//     str = str.replace('-', '.');
// }
// console.log(str);


// Задание 15.
// Дана строка '1-2-3-4-5'. 
// С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// Решение
// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);


// Здание 16.
// Дана строка '12345'. 
// С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// Решение
// let str = '12345';
// let arr = str.split('');
// console.log(arr);


// Задание 17.
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.

// Решение
// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);