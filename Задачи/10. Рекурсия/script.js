// Задание 1.
// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива в консоль.

// Решение
// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
//     console.log(arr.shift(), arr);
//     if (arr.length != 0) {
//         func(arr);
//     }
// }
// func(arr);


// Задание 2.
// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5];
// function getSum (arr) {
//     let sum = arr.shift();

//     if (arr.length != 0) {
//         sum += getSum(arr);
//     }

//     return sum;
// }
// console.log(getSum(arr));


// Задание 3.
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

// Решение
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function func(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'object') {
//             func(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }
// func(obj);


// Задание 4.
// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// Решение
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let new_arr = [];
function func(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            func(elem);
        } else {
            new_arr.push(elem);
        }
    }
    return new_arr;
}
console.log(func(arr));