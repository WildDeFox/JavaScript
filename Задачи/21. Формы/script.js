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


// Задание 5.
// Дан чекбокс и две кнопки. 
// По нажатию на первую кнопку установите чекбокс в отмеченное состояние, 
// а по нажатию на вторую - в неотмеченное.

// let check = document.querySelector('#check');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', () => check.checked = true);
// button2.addEventListener('click', () => check.checked = false);


// Задание 6.
// Дан чекбокс, кнопка и абзац. 
// По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', 
// а если чекбокс не отмечен, то слово 'пока'.

// let check = document.querySelector('#check');
// let button1 = document.querySelector('#button1');
// let elem = document.querySelector('#elem');

// button1.addEventListener('click', () => {
//     if (check.checked) {
//         elem.textContent = 'Привет';
//     } else {
//         elem.textContent = 'Пока'
//     }
// })


// Задание 7.
// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// let check = document.querySelector('#check');
// let button = document.querySelector('#button1');

// button.addEventListener('click', () => {
//     check.disabled = !check.disabled;
// })


// Задание 8.
// Даны 3 радиокнопки, абзац и кнопка. 
// По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let radios = document.querySelectorAll('input[type="radio"]');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button1');

// button.addEventListener('click', () => {
//     for(let radio of radios) {
//         if (radio.checked) {
//             elem.textContent = radio.value;
//         }
//     }
// })


// Задание 9.
// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let input = document.querySelector('#input');
// let elem = document.querySelector('#elem');
// input.addEventListener('change', () => {
//     elem.textContent = input.value;
// })


// Задание 10.
// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние. 

// let check = document.querySelector('#check');
// check.addEventListener('change', () => {
//     console.log(check.checked);
// })


// Задание 11.
// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. 
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный. 

// let input = document.querySelector('#input');
// input.addEventListener('change', () => {
//     if (this.value.length < 5) {
//         input.style.border = '1px solid green';
//     } else {
//         input.style.border = '1px solid red';
//     }
// })


// Задание 12.
// Дан инпут. Пусть в него вводится текст. 
// Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом. 

// let input = document.querySelector('#input');
// input.addEventListener('input', () => {
//     if (input.value.length > 5) {
//         alert('Все, хватит.');
//     }
// })


// Задание 13.
// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. 
// По мере ввода символов в инпут пишите, сколько еще символов можно ввести. 
// Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста. 

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.addEventListener('input', () => {
//     if (input.value.length <= 5) {
//         let diff = 5 - Number(input.value.length);
//         elem.textContent = `Осталось ввести ${diff} символа.`
//     } else {
//         elem.textContent = `Размер текста привышает: ${input.value.length - 5} символов`;
//     }
// })


// Задание 14.
// Даны два инпута. 
// Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, 
// а после ввода двух символов в этот инпут - фокус из него убирался. 

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

input1.addEventListener('input',() => {
    if(input1.value.length > 1) {
        input2.focus();
    }
});
input2.addEventListener('input', () => {
    if(input2.value.length > 1) {
        input2.blur();
    }
})