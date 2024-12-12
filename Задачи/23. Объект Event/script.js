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


// Задание 4.
// Привяжите к тегу ul обработчик клика. 
// В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. 
// Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. 
// А если клик был по тегу ul - выведите информацию об этом в консоль. 

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
//     if(event.target.tagName == "UL") {
//       console.log('Клик по списку');
//     } else if (event.target.tagName == "LI") {
//       event.target.textContent += '!';
//     }
// }) 


// Задание 5.
// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды. 
// let input = document.querySelector('#input');

// input.addEventListener('keypress', function(event){
//     this.value = `${event.key} : ${event.code}`;
// })


// Задание 6.
// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. 
// Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, 
// а содержимое инпута очищалось. 
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.addEventListener('click', function(event) {
//     if (event.code == 'Enter') {
//         elem.textContent = input.value;
//         input.value = '';
//         this.blur();
//     }
// })