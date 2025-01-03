// Задание 1.
// По нажатию на кнопку выведите в консоль клиентскую ширину и высоту элемента.
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    console.log(`Клиентская высота: ${elem.clientHeight}`);
    console.log(`Клиентская ширина: ${elem.clientWidth}`);
})