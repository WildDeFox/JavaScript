// Задание 1.
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.

// Решение
// let elem = document.querySelector('#elem');
// elem.firstElementChild.style.color = 'red';


// Задание 2.
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// Решение
// let elem = document.querySelector('#elem');
// elem.lastElementChild.style.color = 'red';


// Задание 3.
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// Решение
// let elems = document.querySelector('#elem').children;
// for (let elem of elems) {
//     elem.textContent = elem.textContent + '!';
// }


// Задание 4.
// Найдите его родителя и задайте ему красную границу.

// Решение
// let elem = document.querySelector('#elem');
// elem.parentElement.style.border = '1px solid red';


// Задание 5.
// Найдите ближайшего родителя этого элемента, являющегося тегом div.

// Решение
// let elem = document.querySelector('#elem');
// let parents = elem.closest('div');
// console.log(parents);


// Задание 6.
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.

// Решение
// let elem = document.querySelector('#elem');
// let parents = elem.closest('.www');
// console.log(parents);


// Задание 7.
// Найдите его соседа сверху и добавьте ему в конец текст '!'. 

// Решение
// let elem = document.querySelector('#elem');
// elem.previousElementSibling.textContent += '!';


// Задание 8.
// Найдите его соседа снизу и добавьте ему в конец текст '!'. 

// Решение 
// let elem = document.querySelector('#elem');
// elem.nextElementSibling.textContent += '!';


// Задание 9.
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 

// Решение
// let elem = document.querySelector('#elem');
// elem.previousElementSibling.textContent += '!';
// elem.nextElementSibling.textContent += '!';


// Задание 10.
// Поменяйте местами текст его соседа сверху и текст его соседа снизу. 
// let elem = document.querySelector('#elem');
// [elem.previousElementSibling.textContent, elem.nextElementSibling.textContent] = [elem.nextElementSibling.textContent, elem.previousElementSibling.textContent];


// Задание 11.
// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст. 

// Решение
// let elem = document.getElementById('elem');
// elem.textContent = 'Hello World';


// Задание 12.
// Получите все теги li по имени тега и сделайте их текст красного цвета. 

// Решение
// let lis = document.getElementsByTagName('li');
// for (let li of lis) {
//     li.style.color = 'red';
// }


// Задание 13.
// Получите эти элементы по имени класса и сделайте их текст красного цвета. 

// Решение
// let elems = document.getElementsByClassName('www');
// for (let elem of elems) {
//     elem.style.color = 'red';
// }