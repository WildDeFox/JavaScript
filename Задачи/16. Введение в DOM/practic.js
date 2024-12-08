// Задание 1.
// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// Решение
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     elem.textContent = elem.textContent + this.value;
// })


// Задание 2.
// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

// Решение
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     let sum = 0;
//     document.querySelectorAll('input').forEach(function(check) {
//         sum += Number(check.value);
//     });
//     elem.textContent = sum;
// });


// Задание 3.
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     let str = String(this.value);
//     let sum = 0;
//     for(let i = 0; i < str.length; i++) {
//         sum += Number(str[i]);
//     }
//     this.value = sum;
// })


// Задание 4.
// Дан инпут. В него вводятся числа через запятую. 
// По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     let arr = this.value.split(',');
//     let sum = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     input.value = sum / arr.length;
// })


// Задание 5.
// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// Решение
// let input = document.querySelector('#input');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let input3 = document.querySelector('#input3');
// input.addEventListener('blur', function() {
//     let arr = this.value.split(' ');
//     input1.value = arr[0];
//     input2.value = arr[1];
//     input3.value = arr[2];
// })


// Задание 6.
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     let arr = this.value.split(' ');
//     let newArr = []
//     for (let elem of arr) {
//         newArr.push(elem.charAt(0).toUpperCase() + elem.slice(1));
//     }
//     this.value = newArr.join(' ');
// })


// Задание 7.
// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     let arr = this.value.split(' ');
//     this.value = arr.length;
// })


// Задание 8.
// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     this.value = this.value.split('.').reverse().join('-');
// })


// Задание 9.
// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// Решение
// let input = document.querySelector('#input');
// input.addEventListener('blur', function() {
//     let arr = String(this.value).split('');
//     for(let elem of arr) {
//         if (elem == 3) {
//             console.log('Строка содержит число 3');
//         } else {
//             console.log('Нету тройки в числе');
//         }
//     }
// })


// Здание 10.
// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// Решение
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     document.querySelectorAll('p').forEach(function(elem, index){
//         elem.textContent = elem.textContent + index;
//     })
// })


// Здание 11.
// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     document.querySelectorAll('a').forEach(function(elem) {
//         elem.textContent = elem.textContent + elem.href;
//     })
// })


// Задание 12.
// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// Решение
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     document.querySelectorAll('a').forEach(function(elem) {
//         if (elem.href.startsWith('http://')) {
//             elem.textContent = elem.textContent + '&rarr';
//         }
//     })
// })


// Задание 13.
// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// Решение
// let paragraps = document.querySelectorAll('p');
// for (let paragrap of paragraps) {
//     paragrap.addEventListener('click', function() {
//         this.textContent = Number(this.textContent) * Number(this.textContent);
//     })
// }


// Задание 15.
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

// Решение
// let input = document.querySelector('#input');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//     input.value = Number(input.value) + 1;
// })
// button2.addEventListener('click', function() {
//   if (Number(input.value > 0)) {
//     input.value = Number(input.value) - 1;
//   }
// })


// Задание 16.
// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// Решение
// let input = document.querySelector('#input');
// let paragraps = document.querySelectorAll('p');
// for (let paragrap of paragraps) {
//     paragrap.addEventListener('click', function() {
//         input.value += 1;
//     })
// }


// Задание 17.
// На странице есть дивы. В них есть текст. 
// Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. 
// И добавьте троеточие в конец обрезанного текста

// Решение
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
//     if (div.textContent.length > 10) {
//         div.textContent = div.textContent.slice(0, 10) + '...';
//     }
// }