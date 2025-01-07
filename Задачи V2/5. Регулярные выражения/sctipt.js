// Задание 1.
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
// let str = 'ahb acb aeb aeeb adcb axeb';
// console.log(str.replace(/a.b/g, '!'));


// Задание 2.
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/a..a/g, '!'));


// Задание 3.
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/ab.a/g, '!'));


// Задание 4.
// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: 
// буква 'a', буква 'b' любое количество раз, буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab+a/g, "!"));


// Задание 5.
// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: 
// буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab*a/g, "!"));


// Задание 6.
// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: 
// буква 'a', буква 'b' один раз или ниодного, буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab?a/g, "!"));