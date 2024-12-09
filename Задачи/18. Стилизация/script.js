// Задача 1.
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

// Решение
// let div = document.querySelector('#div');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     div.style.width = '200px';
//     div.style.height = '100px';
//     div.style.border = '1px solid black';
// })


// Задание 2.
// Дан див с текстом и кнопка. 
// По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон. 

// Решение
// let div = document.querySelector('#div');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     div.style.fontSize = '20px';
//     div.style.borderTop = '1px solid black';
//     div.style.backgroundColor = 'red';
// })


// Задание 3.
// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
// Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
// let paragraph = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', function() {
//     paragraph.classList = ''
//     paragraph.classList.add('cross');
// });
// button2.addEventListener('click', function() {
//     paragraph.classList = '';
//     paragraph.classList.add('fat');
// });
// button3.addEventListener('click', function() {
//     paragraph.classList = '';
//     paragraph.classList.add('reda');
// })


// Задание 4.
// Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.

// Решение
// let paragraph = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', function() {
//     paragraph.classList.toggle('cross');
// });
// button2.addEventListener('click', function() {
//     paragraph.classList.toggle('fat');
// });
// button3.addEventListener('click', function() {
//     paragraph.classList.toggle('reda')
// });