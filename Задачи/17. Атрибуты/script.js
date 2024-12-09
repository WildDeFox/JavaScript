// Задание 1.
// Получите значение его атрибута value.

// Решение
// let input = document.querySelector('#input');
// console.log(input.getAttribute('value'));


// Задание 2.
// Получите значение его атрибута class.
// let input = document.querySelector('#input');
// console.log(input.getAttribute('class'));


// Задание 3.
// Установите его атрибут value в значение 'text'.

// Решение
// let input = document.querySelector('#input');
// input.setAttribute('value', 'text');


// Задание 4.
// Установите ему атрибут class в значение 'valid'.

// Решение
// let input = document.querySelector('#input');
// input.setAttribute('class', 'valid');


// Задание 5.
// Удалите у него атрибут value.

// Решение
// let input = document.querySelector('#input');
// input.removeAttribute('value');


// Задание 6.
// Проверьте наличие у него атрибута value.
// let input = document.querySelector('#input');
// console.log(input.hasAttribute('value'));


// Задание 7.
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// Решение
// let div = document.querySelector('#div');
// div.addEventListener('click', function(){
//     this.textContent = this.textContent + this.dataset.text;
// })


// Задание 8.
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// Решение
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
//     div.addEventListener('click', function() {
//         this.textContent = this.textContent + this.dataset.num;
//     })
// }


// Задание 9.
// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, 
// записывая их в какой-нибудь пользовательский атрибут. 
// Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.

// Решение
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//     this.dataset.count = Number(this.dataset.count) + 1;
// })
// button2.addEventListener('click', function() {
//     this.textContent = button1.dataset.count;
// })


// Задание 10.
// В этом инпуте атрибуты data-min и data-max содержат диапазон. 
// Сделайте так, чтобы по потери фокуса, 
// если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     if (this.value.length < this.dataset.min || this.value.length > this.dataset.max ) {
//         console.log("Текущая строка не подходит под требование");
//     } else {
//         console.log("Все ок!")
//     }
// })


// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, 
// равная цене, умноженной на количество.
// let div = document.querySelector('#div');
// div.addEventListener('click', function() {
//     this.textContent = this.textContent + (Number(this.dataset.productPrice) * Number(this.dataset.productAmount));
// })


// Задание 12.
// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. 
// Используйте метод setAttribute.

// Решение
// let paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(function (elem, index) {
//     elem.setAttribute('data-num', index);
// })


// Задание 13. 
// Узнайте количество его классов. 

// Решение
// let elem = document.querySelector('#elem');
// console.log(elem.classList);


// Задание 14.
// Переберите в цикле его классы. 

// Решение
// let elem = document.querySelector('#elem');
// let elemClasses = elem.classList;
// for (let item of elemClasses) {
//     console.log(item);
// }


// Задание 15
// Добавьте ему класс xxx. 

// Решение
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');
// console.log(elem.classList);


// Задание 16.
// Удалите у него класс www и класс zzz. 

// Решение
// let elem = document.querySelector('#elem');
// elem.classList.remove('www');
// elem.classList.remove('zzz');
// console.log(elem.classList)