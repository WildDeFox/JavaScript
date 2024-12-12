// Задание 1.
// Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. 
// Изучите структуру этого объекта. 

// let button = document.querySelector('#button');
// button.addEventListener('click', function(event) {
//     console.log(event);
// })


// Задание 2.
// Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора

// let elem = document.querySelector('#elem');
// document.addEventListener('mousemove', function(event){
//     elem.innerHTML = event.clientX + ' : ' + event.clientY;
// })


// Задание 3.
// Допишите код функции func так, чтобы при клике на элемент этот элемент 
// красился в зеленый цвет, а при двойном клике - в красный. 

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//     if (event.type == 'click') {
//         elem.style.color = 'green';
//     } else if (event.type == 'dblclick') {
//         elem.style.color = 'red';
//     }
// }
	