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