// Задание 1.
// Сделайте функцию test, параметрами принимающую 3 функции. 
// Передайте в нее первым параметром функцию, возвращающую 1, 
// вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. 
// Выведите в консоль сумму результатов функций.

// Решение
// function test (func1, func2, func3) {
//     console.log(func1() + func2() + func3());
// }
// test(
//     function() {return 1},
//     function() {return 2},
//     function() {return 3}
// );


// Задание 2.
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

// Решение
// function test (func1, func2, func3) {
//     return func1() + func2() + func3();
// }


// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. 
// Пусть первая функция возвращает 1, вторая - 2, а третья - 3. 
// Передайте эти функции параметром в функцию test из предыдущей задачи.

// Решение
// function func1() {
//     return 1;
// }

// function func2() {
//     return 2;
// }

// function func3() {
//     return 3;
// }

// function test (func1, func2, func3) {
//     return func1() + func2() + func3();
// }
// console.log(test(func1, func2, func3));