// Задание 1.
// Выведите с помощью цикла столбец чисел от 1 до 100.

// Решение 
// for (let i = 1; i <= 100; i++) {
//     document.write(i + '<br>');
// }


// Задание 2.
// Выведите с помощью цикла столбец чисел от 100 до 1.

// Решение 
// for (let i = 100; i >= 1; i++) {
//     document.write(i + '<br>');
// }


// Задание 3.
// Выведите с помощью цикла столбец четных чисел от 1 до 100.

// Решение 
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         document.write(i + '<br>');
//     }
// }


// Задание 4.
// Заполните массив 10-ю иксами с помощью цикла.

// Решение 
// let arr = [];
// for (let i = 1; i <=10; i++) {
//     arr.push('x');
// }
// document.write(arr);


// Задание 5.
// Заполните массив числами от 1 до 10 с помощью цикла.

// Решение 
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }


// Задание 6.
// Дан массив с числами. 
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// for (let elem of arr) {
//     if (elem > 0 && elem < 10) {
//         document.write(elem);
//     }
// }


// Задание 7.
// Дан массив с числами. 
// С помощью цикла проверьте, что в нем есть элемент со значением 5.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// for (let elem of arr) {
//     if (elem == 5) {
//         alert('Цифра 5 присутствует в цикле');
//         break
//     }
// }


// Задание 8.
// Дан массив с числами. 
// С помощью цикла найдите сумму элементов этого массива.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// let sum = 0;
// for (let elem of arr) {
//     sum += elem;
// }


// Задание 9.
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// let sum = 0;
// for (let elem of arr) {
//     sum = elem ** 2;
// }
// document.write(sum);


// Задание 10.
// Дан массив с числами. Найдите среднее арифметическое его элементов.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// let sum = 0;
// for (let elem of arr) {
//     sum = elem;
// }
// document.write(sum / Number(arr.length));


// Задание 11.
// Напишите скрипт, который будет находить факториал числа. 
// Факториал - это произведение всех целых чисел от единицы до заданного числа.

// Решение 
// let num = 3;
// let factorial = 1;
// for (let i = 1; i < num; i++) {
//     factorial = factorial * i;
// }
// document.write(factorial);


// Задание 12.
// Заполните массив числами от 10 до 1 с помощью цикла.

// Решение 
// let arr = [];
// for (let i = 10; i >=1; i--) {
//     arr.push(i);
// }
// document.write(arr);


// Задание 13.
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// Решение 
// let arr = [1, 2, 3, -2, -3, -4, 5, 6, 23, 532];
// let sum = 0;
// for (let elem of arr) {
//     if (elem > 0) {
//         sum += elem;
//     }
// }


// Задание 14.
// Дан массив числами, например:
// let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// Решение 
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let elem of arr) {
//     if (Number(String(elem)[0]) == 1 || Number(String(elem)[0]) == 2 || Number(String(elem)[0]) == 5) {
//         document.write(elem);
//     }
// }


// Задание 15.
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// Решение 
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// Задание 16.
// Дан массив с числами. 
// С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// Решение 


// Задание 17.
// Дан массив с числами. 
// С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. 
// Используйте для этого тег br.

// Решение 


// Задание 18.
// Дан массив с числами. 
// С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

// Решение 


// Задание 19.
// Составьте массив дней недели. 
// С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// Решение 


// Задание 20.
// Составьте массив дней недели. 
// С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
// Номер текущего дня должен храниться в переменной day.

// Решение 


// Задание 21.
// Дан следующий объект с работниками и их зарплатами:
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// Увеличьте зарплату каждого работника на 10%.

// Решение 


// Задание 22.
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

// Решение 


// Задание 23.
// Даны следующие массивы:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

// Решение 


// Задание 24.
// Дан следующий объект:
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// Решение 


// Задание 25.
// Дан следующий объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
// Запишите ключи этого объекта в один массив, а значения - в другой.

// Решение 


// Задание 26.
// Дан следующий объект:
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 
// То есть у вас в результате получится вот такой массив:
// [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

// Решение 


// Задание 27.
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// Решение 


// Задание 28.
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// Решение 