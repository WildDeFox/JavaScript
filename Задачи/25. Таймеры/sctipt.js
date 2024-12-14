// Задание 1.
// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
// setInterval(function() {
//     console.log("Вот и прошло 3 секунды");
// }, 3000);


// Здание 2.
// Пусть дана переменная, в которой изначально хранится число 100. 
// Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// let count = 100;
// setInterval(() => console.log(count--), 1000);


// Задание 3.
// Пусть дана переменная, в которой изначально хранится число 10. 
// Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.

// let count = 10;
// let timerId = setInterval(() => {
//     console.log(count--);

//     if (count == 0) {
//         clearInterval(timerId);
//     }
// }, 1000);


// Задание 4.
// Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// let button = document.querySelector('#start');

// button.addEventListener('click', () => {
//     let count = 100;

//     setInterval(() => console.log(count--), 1000)
// })


// Задание 5.
// Возьмите ваше решение предыдущей задачи. 
// Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
// let button = document.querySelector('#start');

// button.addEventListener('click', function func() {
//     let count = 100;

//     setInterval(() => console.log(count--), 1000)
//     this.removeEventListener('click', func);
// })


// Задание 6.
// Пусть дана переменная, в которой изначально хранится число 100. 
// Даны также две кнопки. По нажатию на первую кнопку запустите таймер, 
// который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.

// По нажатию на вторую кнопку остановите таймер. 
// Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function start() {
//     let count = 100;

//     timerId = setInterval(() => {
//         console.log(count--);
//         if (count == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);

//     this.removeEventListener('click', start);
// });

// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// })