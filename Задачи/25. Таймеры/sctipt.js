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


// Задание 7.
// Дана кнопка. Дан абзац, текстом которого является число. 
// По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     setInterval(() => {
//         elem.textContent = Number(elem.textContent) + 1;
//     }, 1000)
// })


// Задание 8.
// Дана кнопка. Дан абзац, текстом которого является число, например, 10. 
// По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. 
// Как только значение абзаца станет равно нулю - остановите таймер.

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function() {
//     let count = Number(elem.textContent);

//     let timerId = setInterval(() => {
//         elem.textContent = count--;

//         if (count == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// })


// Задание 9.
// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let input = document.querySelector('#input');

// setInterval(() => {
//     input.value = Math.sqrt(Number(input.value));
// }, 1000);


// Задание 10.
// Дан инпут. В него вводится число. 
// По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. 
// Когда отсчет дойдет до нуля - он должен закончится.

// let input = document.querySelector("#input");
// let elem = document.querySelector('#elem');

// input.addEventListener('blur', function() {
//     let count = Number(input.value);
//     let timerId = setInterval(() => {
//         elem.textContent = count--;

//         if (count == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// });


// Задание 11.
// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: 
// пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// let input = document.querySelector('#input');
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function() {
//     let count = Number(input.value);
//     let timerId = setInterval(() => {
//         elem.textContent = count--;

//         if (count == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// });


// Задание 12.
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на 
// первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, 
// а по нажатию на вторую таймер останавливался.

// let elem = document.querySelector('#elem');
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// let timerId;
// let count = 1;

// start.addEventListener('click', function() {
//     timerId = setInterval(() => {
//         elem.textContent = count++;
//     }, 1000)
// });

// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });


// Задание 13.
// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let elem = document.querySelector('#elem');
// setInterval(() => {
//     elem.classList.toggle('color');
// }, 1000);


// Задание 14.
// Реализовать тикающие часы

// let elem = document.querySelector('#elem');

// setInterval(() => {
//     let date = new Date();
//     elem.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)


// Задание 15.
// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
// setTimeout(() => alert('Hello World'), 3000);