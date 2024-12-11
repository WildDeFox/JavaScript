// Задание 1.
// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
// let select = document.querySelector('#select');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', () => {
//     elem.textContent = select.value;
// })


// Задание 2.
// Сделайте выпадающий список с названиями дней недели. 
// В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. 
// По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
// let select = document.querySelector('#select');
// let elem = document.querySelector('#elem');

// select.addEventListener('change', function() {
//     elem.textContent = this.value;
// })


// Задание 3.
// Сделайте выпадающий список с названиями месяцев. 
// Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// let select = document.querySelector('#select');
// select.value = new Date().getMonth();


// Задание 4.
// Дан инпут и селект. В инпут вводится какое-то число. 
// По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// let input = document.querySelector('#input');
// let select = document.querySelector('#select');
// input.addEventListener('blur', function() {
//     select.selectedIndex = Number(input.value);
// })


// Задание 5.
// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// let options = document.querySelector('#select');
// for(let option of options) {
//     option.textContent = option.textContent + option.value;
// }


// Задание 6.
// Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, 
// а для невыбранных пунктов - вопросительный.
// let select = document.querySelector('#select');
// for (let option of select) {
//     if (option.selected  == true) {
//         this.text = this.text + ' !';
//     } else {
//         this.text = this.text + ' ?';
//     }
// }


// Задание 7.
// Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     alert(select[select.selectedIndex]);
// })


// Задание 8
// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     select[select.selectedIndex].text = select[select.selectedIndex].text + '!';
// })