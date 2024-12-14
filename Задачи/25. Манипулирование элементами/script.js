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

let ol = document.querySelector('#ol');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let elem = document.createElement('li');
    elem.textContent = 'item';
    elem.addEventListener('click', function() {
        this.textContent = this.textContent + '!';
    });
    ol.appendChild(elem);
})
