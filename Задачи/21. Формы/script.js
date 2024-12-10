// Задание 1.
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// Решение
// let textarea = document.querySelector('#textarea');
// let elem = document.querySelector('#elem');
// textarea.addEventListener('blur', function() {
//     elem.textContent = this.value;
// })


// Задание 2.
// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// Решение
// let input = document.querySelector('#input');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     input.disabled = true;
// })


// Задание 3.
// Дан инпут и две кнопки. 
// Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// Решение
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let input = document.querySelector('#input');
// button1.addEventListener('click', () => input.disabled = true)
// button2.addEventListener('click', () => input.disabled = false)


// Задание 4.
// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
// let input = document.querySelector('#input')
// let button = document.querySelector('#button1');
// button.addEventListener('click', () => console.log(input.disabled));