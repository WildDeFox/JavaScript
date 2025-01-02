// Задание 1.
// Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px.
// let button = document.querySelector('#button');
// let div = document.querySelector('#div');

// button.addEventListener('click', function() {
//     div.style.width = "400px";
//     div.style.height = "300px";
// })


// Задание 2.
// Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     console.log(parseInt(elem.style.width));
//     console.log(parseInt(elem.style.height));
// })


// Задание 3.
// Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    console.log(`Толщина границы: ${this.style.borderWidth}`);
    console.log(`Тип границы: ${this.style.borderStyle}`);
    console.log(`Цвет границы: ${this.style.borderColor}`);
})