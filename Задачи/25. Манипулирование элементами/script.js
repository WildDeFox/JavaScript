// Задание 1.
// Вставьте ему в конец li с текстом 'item'.

// let ol = document.querySelector('#elem');
// let elem = document.createElement('li');
// elem.textContent = 'item';
// ol.appendChild(elem);


// Задание 2.
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.

// let button = document.querySelector('#button');
// let ol = document.querySelector('#elem');

// button.addEventListener('click', function() {
//     let elem = document.createElement('li');
//     elem.textContent = 'item';
//     ol.appendChild(elem);
// });


// Задание 3.
// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. 
// Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.

// let ol = document.querySelector('#ol');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     let elem = document.createElement('li');
//     elem.textContent = 'item';
//     elem.addEventListener('click', function() {
//         this.textContent = this.textContent + '!';
//     });
//     ol.appendChild(elem);
// })


// Задание 4.
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. 
// Сделайте так, чтобы текстом каждой li был ее порядковый номер.

// let ul = document.querySelector('#ul');

// for(let i = 1; i <= 10; i++) {
//     let elem = document.createElement('li');
//     elem.textContent = i;
//     ul.appendChild(elem);
// }


// Задание 5.
// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. 
// Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

// let parent = document.querySelector('#parent');
// let paragraps = document.querySelector('#elem');

// for (let i = 1; i <= 5; i++) {
//     let elem = document.createElement('input');

//     elem.addEventListener('blur', function() {
//         paragraps.textContent = this.value;
//     })

//     parent.appendChild(elem);
// }