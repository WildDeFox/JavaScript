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