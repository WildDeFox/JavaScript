// Задание 1.
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//     let self = this;

//     function child() {
//         console.log(self.value);
//     }

//     child();
// }


// Задание 2.
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//     let child = () => {
//         console.log(this.value);
//     }
//     child();
// }


// Задание 3.
// С помощью метода call и функции func выведите на экран value каждого из инпутов. 
// let inputs = document.querySelectorAll('input');
// for (let input of inputs) {
//     func.call(input);
// }

// function func() {
//     console.log(this.value);
// }