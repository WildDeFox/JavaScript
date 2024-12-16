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


// Задание 4.
// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, 
// чтобы в ее ячейках последовательно стояли числа от 1 до 25.

// let parent = document.querySelector('#parent');

// let count = 1;

// for(let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');

//     for(let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         td. textContent = count++;
//         tr.appendChild(td);
//     }

//     parent.appendChild(tr);
// }


// Задание 5.
// Создать таблицу из массива
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// let parent = document.querySelector('#parent');

// for(subArr of arr) {
//     let tr = document.createElement('tr');

//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = elem;
//         tr.appendChild(td);
//     }
//     parent.appendChild(tr);
// }


// Задание 6.
// Создать таблицу
// 6.1: Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// 6.2: Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

// let parent = document.querySelector('#parent');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for (let employer of employees) {
//     let tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.textContent = employer.name;
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.textContent = employer.age;

//     td2.addEventListener('click', function(){
//         this.textContent = Number(this.textContent) + 1;
//     })

//     tr.appendChild(td2);

//     let td3 = document.createElement('td');
//     td3.textContent = employer.salary;


//     td3.addEventListener('click', function() {
//         this.textContent = Number(this.textContent) * 1.1;
//     })

//     tr.appendChild(td3);

//     parent.appendChild(tr);
// }


// Задание 7.
// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     let tr = document.createElement('tr');

//     for(let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         td.textContent = 'x';
//         tr.appendChild(td);
//     }

//     parent.appendChild(tr);
// })


// Задание 8.
// Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

// let parent = document.querySelector('#parent');
// let trs = document.querySelectorAll('#parent tr');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     let tr = document.createElement('tr');
//     for (let i = 0; i <= trs.length; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     parent.appendChild(tr);

//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
    
// })


// Задание 9.
// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let tds = document.querySelectorAll('#parent td');

// for(let td of tds) {
//     td.addEventListener('click', function() {
//         this.textContent = Number(this.textContent) * 5;
//     })
// }


// Задание 10.
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. 
// Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, 
// которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

let button = document.querySelector('#button');
let parent = document.querySelector('#parent');

button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    parent.appendChild(li);
});

parent.addEventListener('click', function(event) {
    event.target.remove();
})