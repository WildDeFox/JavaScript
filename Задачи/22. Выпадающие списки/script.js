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
let select = document.querySelector('#select');
let elem = document.querySelector('#elem');

select.addEventListener('change', function() {
    elem.textContent = this.value;
})