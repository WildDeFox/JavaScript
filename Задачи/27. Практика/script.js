// Задание 1.
// Создание элементов из массива
// let arr = [1, 2, 3, 4, 5];
// let parent = document.querySelector('#parent');

// for (let elem of arr) {
//     let li = document.createElement('li');
//     li.textContent = elem;

//     li.addEventListener('click', function() {
//         this.textContent += '1';
//     });

//     parent.appendChild(li);
// }


// Задание 2.
// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.

// let parent = document.querySelector('#parent');

// for(let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');

//     for(let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     parent.appendChild(tr);
// }


// Задание 3.
// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// let height = document.querySelector('#input1');
// let weight = document.querySelector('#input2');
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     for(let i = 0; i < Number(height.value); i++) {
//         let tr = document.createElement('tr');
    
//         for(let j = 0; j < Number(weight.value); j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         parent.appendChild(tr);
//     }
// })