// Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let map = new Map;
// map.set(arr1, 'test1');
// map.set(arr2, 'test2');
// map.set(arr3, 'test3');

// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));


// Полезные возможности коллекций Map
// В свойстве size содержится размер коллекции:
console.log(map.size);

// Проверить наличие ключа в коллекции можно с помощью метода has:
console.log(map.has(arr1));

// Удалить элемент из коллекции можно с помощью метода delete:
map.delete(arr1);

// Очистить всю коллекцию можно с помощью метода clear:
map.clear();


// Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let map = new Map;
map.set(arr1, 'test1');
map.set(arr2, 'test2');
map.set(arr3, 'test3');

let keys = map.keys();
for (let key of keys) {
    console.log(key);
}


// Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.
let values = map.values();
for (let value of values) {
    console.log(value);
}


// Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, 
// ключами в которой будут инпуты, а значением - их порядковый номер на странице. 
// Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

// let inputs = document.querySelectorAll('input');

// let i = 1;
// let map = new Map;
// for (let input of inputs) {
//     map.set(input, i++);
// }

// for (let input of inputs) {
//     input.addEventListener('click', function() {
//         this.value = map.get(this);
//     })
// }


// Даны инпуты. В каждый инпут можно ввести число. 
// Пусть по нажатию на Enter инпут запоминает введенное число. 
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.
let inputs = document.querySelectorAll('input');

let map = new Map;

for (let input of inputs) {

    input.addEventListener('keypress', function(event) {
        if (event.code == 'Enter') {
            map.set(this, this.value);
            console.log(1);
        }
    })

    input.addEventListener('blur', function() {
        console.log(map.entries());
    })
}