// Задание 1.
// По нажатию на кнопку выведите в консоль клиентскую ширину и высоту элемента.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button.addEventListener('click', () => {
//     console.log(`Клиентская высота: ${elem.clientHeight}`);
//     console.log(`Клиентская ширина: ${elem.clientWidth}`);
// })

// По нажатию на кнопку выведите в консоль полную ширину и высоту элемента.
// button1.addEventListener('click', () => {
//     console.log(`Полная высота: ${elem.offsetHeight}`);
//     console.log(`Полная ширина: ${elem.offsetWidth}`);
// })


// Если отнять от полной ширины клиентскую ширину, то получится некоторое число. 
// Какие размеры оно содержит в себе?
// button2.addEventListener('click', () => {
//     let differenceHeight = parseInt(elem.offsetHeight) - parseInt(elem.clientHeight);
//     let differenceWidth = parseInt(elem.offsetWidth) - parseInt(elem.clientWidth);
//     console.log(`Разница в высоте: ${differenceHeight}`);
//     console.log(`Разница в ширине: ${differenceWidth}`);
// })