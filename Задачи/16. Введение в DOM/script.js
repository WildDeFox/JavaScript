// Задание 1.
// Даны 3 абзаца:
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль. 

// Решение
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);


// Задание 2.
// Дан следующий HTML:
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block. 

// Решение
// let elem = document.querySelector('#block p');
// console.log(elem);


// Задание 3.
// Даны 3 кнопки:
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, 
// по клику на вторую - число 2, а по клику на третью - число 3. 

// Решение
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', function() {
//     console.log('1');
// })
// button2.addEventListener('click', function() {
//     console.log('2');
// })
// button3.addEventListener('click', function() {
//     console.log('3');
// })


// Задание 4.
// Даны 5 абзацев:
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:
// function func() {
// 	console.log('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам. 

// Решение
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// function func() {
// 	console.log('message');
// }
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);


// Задание 5.
// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль. 

// Решение
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     console.log(elem.textContent);
// })


// Здание 6.
// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст. 

// Решение
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     elem.textContent = 'Ооо, дааа, новый текст!';
// })


// Задание 7.
// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел. 

// Решение
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3')
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     elem3.textContent = Number(elem1.textContent) + Number(elem2.textContent);
// })


// Задание 8.
// Дан абзац с числом и кнопка. 
// По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно. 

// Решение 
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.textContent = Number(elem.textContent) + 1;
// })


// Задание 9.
// Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.

// Решение
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     console.log(elem.innerHTML);
// })


// Задание 10.
// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным. 
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// Решение
// button.addEventListener('click', function() {
//     elem.innerHTML = '<b>Новый текст, сновай...</b>'
// })


// Задание 11.
// Дан следующий инпут:
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута. 

// Решение
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     console.log(elem.type);
// })


// Задание 12.
//  Дан следующий инпут:
//  <input id="elem" type="email"
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// Решение
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.type = 'submit';
// })


// Задание 13.
// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. 
// По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки. 


// Решение
// let link = document.querySelector('#link');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.textContent = link.href;
// })


// Задание 14.
// Пусть у вас есть ссылка и кнопка. 
// По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. 

// Решение 
// let link = document.querySelector('#link');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     link.textContent += `(${link.href})`;
// })