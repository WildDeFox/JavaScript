// Задание 1.
// Создайте коллекцию Set. С помощью метода add добавьте в нее элементы. 
// Убедитесь, что дубли элементов не добавляются.
// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);


// Задание 2.
// С помощью этого массива создайте коллекцию Set.
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);


// Задание 3.
// Создайте коллекцию Set с начальными значениями 1, 2 и 3. С помощью метода add добавьте в коллекцию еще одно число 2. Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз.
// let set = new Set([1, 2, 3]);

// set.add(3);

// console.log(set);


// Задание 4.
// Создайте коллекцию Set с какими-нибудь числами. Переберите эту коллекцию циклом и найдите сумму ее элементов.
// let set = new Set([1, 2, 3, 4]);

// for (let elem of set) {
//     console.log(elem);
// }


// Задание 5.
// Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами.
// let set = new Set([1, 2, 3]);

// Способ 1.
// let arr = [...set];

// Способ 2.
// let arr2 = Array.from(set);


// Задание 6.
// Дан массив. Преобразуйте его в коллекцию.
// let arr = [1, 2, 3];

// let set = new Set(arr);


// Задание 7.
// Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.
// function clearArr (arr) {
//     return [...new Set(arr)];
// }

// let arr = [1, 2, 3, 3, 3, 4, 5, 5];
// let newArr = clearArr(arr);
// console.log(newArr);


// Задание 8.
// Даны абзацы и кнопка. 
// Пользователь кликает на эти абзацы в произвольном порядке. 
// Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, 
// на который был совершен клик, был добавлен восклицательный знак.

// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#button');

// let set = new Set;

// for (let elem of elems) {
//     elem.addEventListener('click', function() {
//         set.add(this);
//     });
// }

// button.addEventListener('click', function() {
//     for (let elem of set) {
//         elem.textContent = elem.textContent + "!";
//     }
// })