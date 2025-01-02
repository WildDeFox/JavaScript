// Задание 1.
// Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px.
// let button = document.querySelector('#button');
// let div = document.querySelector('#div');

// button.addEventListener('click', function() {
//     div.style.width = "400px";
//     div.style.height = "300px";
// })


// Задание 2.
// Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     console.log(parseInt(elem.style.width));
//     console.log(parseInt(elem.style.height));
// })


// Задание 3.
// Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     console.log(`Толщина границы: ${this.style.borderWidth}`);
//     console.log(`Тип границы: ${this.style.borderStyle}`);
//     console.log(`Цвет границы: ${this.style.borderColor}`);
// })


// Задание 4.
// Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, 
// а по клику на вторую - верните исходный цвет.
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let elem = document.querySelector('#elem')

// button1.addEventListener('click', () => {
//     elem.style.backgroundColor = 'red';
// })

// button2.addEventListener('click', () => {
//     elem.style.backgroundColor = '';
// })


// Задание 5.
// Массовая установка стилей
// let elem = document.querySelector('#elem');

// elem.style.cssText = `
//     width  = '100px';
//     height = '100px';
//     margin = '10px auto';
//     color  = 'red';
// `


// Задание 6.
// По клику на кнопку выведите ширину и высоту элемента.
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', () => {
//     let elemCss = getComputedStyle(elem);
//     console.log(`Ширина: ${elemCss.width}`);
//     console.log(`Высота: ${elemCss.height}`);
// })


// Задание 7.
// По клику на кнопку увеличьте ширину и высоту элемента в два раза.
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', () => {
//     let elemCss = getComputedStyle(elem);
//     elem.style.width = parseInt(elemCss.width) + parseInt(elemCss.width) + 'px';
//     elem.style.height = parseInt(elemCss.height) + parseInt(elemCss.height) + 'px';
// })