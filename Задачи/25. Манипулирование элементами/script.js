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


// Задание 6.
// Сделайте так, чтобы любая li удалялась по клику на нее.
// let lis = document.querySelectorAll('li');

// for(let li of lis) {
//     li.addEventListener('click', function() {
//         this.remove();
//     })
// }


// Задание 7.
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     parent.lastElementChild.remove();
// })


// Задание 8.
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
// let elem = document.querySelector('#elem');

// let start = document.createElement('li');
// start.textContent = 'start';

// let finish = document.createElement('li');
// finish.textContent = 'finish'
// elem.append(start);
// elem.prepend(finish);


// Задание 9.
// Вставьте перед этим элементом элемент с текстом 'new'.
// Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому,
//  что в конец его текста будет добавляться '!'.

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');

// let li = document.createElement('li');
// li.textContent = 'new';
// li.addEventListener('click', function() {
//     this.textContent += '!';
// })

// parent.insertBefore(li, elem);


// Задание 10.
// Вставьте перед ним абзац с текстом '!!!'.
// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('beforebegin', p);


// Задание 11.
// Вставьте после него абзац с текстом '!!!'.
// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('afterend', p);