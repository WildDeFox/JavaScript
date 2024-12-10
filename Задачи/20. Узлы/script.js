// Задание 1.
// Напишите код, который покажет разницу между lastChild и lastElementChild. 

// Решение
// let elem = document.querySelector('#elem');
// console.log(elem.lastChild);
// console.log(elem.lastElementChild);
// console.log(elem.nextSibling)
// console.log(elem.nextElementSibling);
// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);


// Задание 2.
// Переберите циклом все узлы этого дива и выведите их в консоль. 

// Решение
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     console.log(node);
// }


// Задание 3.
// Переберите циклом все узлы этого дива и выведите в консоль их названия. 

// Решение
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     console.log(node.nodeName);
// }


// Задание 4.
// Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы. 
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     if (node.nodeType == 1 || node.nodeType == 3) {
//         console.log(node);
//     }
// }