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


// Здание 4.
// Скопируйте код моей функции test. 
// Вызовите эту функцию, передав ей параметром анонимную функцию, 
// которая параметром будет принимать число и возвращать его куб.

// Решение
// test(function(num) {
// 	return num * num * num;
// });
// function test(func) {
// 	console.log(func(3));
// }


// Задание 5.
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

// Решение
// test(function func(num) {
// 	return num * num * num;
// });
// function test(func) {
// 	console.log(func(3));
// }


// Задание 6.
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
// При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. 
// Выведите алертом результат.

// Решение
// test (function func(num1, num2) {
//     return num1 + num2;
// })
// function test(func) {
//     alert(func(3, 2));
// }


// Задание 7.
// Пусть функция test первым параметром принимает число, 
// а вторым и третьим параметрами - функции, также параметром принимающие числа. 
// Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, 
// вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, 
// возводящую число в куб. Выведите результат работы в консоль.

// Решение 
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// console.log(test(3, function(num) {
//     return num * num;
// }, function(num) {
//     return num * num * num;
// } ))


// Задание 8.
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. 
// Сделайте так, чтобы функция вернула массив с кубами этих чисел.

// Решение
// function test (arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i])
//     }

//     return arr;
// }
// let mrr = test([1, 2, 3, 4], function(num) {
//     return num * num;
// });
// console.log(mrr);


// Задание 9.
// Сделайте функцию func, которая параметрами будет принимать два числа, 
// а возвращать сумму квадрата первого числа с кубом второго числа. 
// Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, 
// и вспомогательную функцию cube, возводящую число в куб.

// Решение
// function func (num1, num2) {
//     function square(num) {
//         return num * num;
//     }

//     function cube (num) {
//         return num * num * num;
//     }

//     return square(num1) + cube(num2);
// }
// console.log(func(5, 5));


// Задание 10.
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. 
// Сделайте аналогичную функцию func2, возвращающую число 2. 
// Найдите сумму результатов этих функций.

// Решение
// function func1() {
//     return function() {
//         return 1;
//     };
// }
// console.log(func1()());

// function func2() {
//     return function() {
//         return 2;
//     };
// }
// console.log(func2()());


// Задание 11.
// Дан массив с числами. 
// С помощью созданной нами функции each увеличьте каждый элемент в два раза.

// Решение
// function each (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(each(arr, function(num) {
//     return num * 2;
// }));


// Задание 12.
// Дан массив со строками. 
// С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

// Решение
// function each (arr, callback) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let arr_str = ['Привет', 'мир'];
// console.log(each(arr_str, function(str) {
//     let result = [];
//     for (let i = str.length; i >= 0; i--) {
//         result.push(str[i]);
//     }
//     return result.join('');
// }))


// Задание 13.
// Упростите коллбэк через стрелочную функцию.
// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// Решение
// let result = filter([1, 2, 3, 4, 5], elem => elem > 0);


// Задание 14.
// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// Решение
// function func() {
//     let num = 1;
//     return function () {
//         console.log(num);
//         num++;
//     };
// }
// let func2 = func();
// func2();
// func2();


// Задание 15.
// Пусть функция в замыкании хранит число 10. 
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

// Решение
// function test() {
//     let num = 10;
//     return function() {
//         console.log(--num);
//     }
// }
// let func2 = test();
// func2();
// func2();


// Задание 16.
// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, 
// а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

// Решение
// function test() {
//     let num = 10;
//     return function() {
//         if (num > 0) {
//             console.log(num--);
//         } else {
//             console.log('Отсчёт окончен');
//         }
//     }
// }
// let func2 = test();
// func2();
// func2();


// Задание 17.
// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
// let func = (function test(){
//     let num = 1;
//     return function() {
//         console.log(num++)
//     }
// })();
// func();
// func();
// func();