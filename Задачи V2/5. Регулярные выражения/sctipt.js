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


// Задание 7.
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
// let str = 'ab abab abab abababab abea';
// console.log(str.replace(/(ab)+/g, '!'));


// Задание 8.
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
// let str = 'a.a aba aea';
// console.log(str.replace(/a\.a/, '!'));


// Задание 9.
// Напишите регулярку, которая найдет строку '2+3', не захватив остальные.
// let str = '2+3 223 2223';
// console.log(str.replace(/2\+3/, '!'));


// Задание 10.
// Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
// let str = '23 2+3 2++3 2+++3 345 567';
// console.log(str.replace(/2\++3/g, '!'));


// Задание 11.
// Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
// let str = '23 2+3 2++3 2+++3 445 677';
// console.log(str.replace(/2\+*3/g, '!'));


// Задание 12.
// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// console.log(str.replace(/\*q+\+/g, '!'));

// Напишите регулярку, которая найдет строки в квадратных скобках и заменит их на '!'.
// let str = '[abc] {abc} abc (abc) [abc]';
// console.log(str.replace(/\[abc\]/g, '!'));


// Задание 13.
// Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{1,4}a/g, '!'));


// Задание 14.
// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.repeat(/ab{1,3}a/g, '!'));


// Задание 15.
// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{4,}a/g, '!'));


// Задание 16.
// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. 
// Между буквами 'a' может быть любой символ (кроме 'a').
// let str = 'aba accca azzza wwwwa';
// console.log(str.replace(/a.+?a/g, '!'));


// Задание 17.
// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра. 
// let str = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str.replace(/a\da/g, '!'));


// Задание 18.
// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр. 
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d*a/g, '!'));


// Задание 19.
// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число и не пробел. 
// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// console.log(str.replace(/a\D+\S+b/g, '!'));


// Задание 20.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'. 
// let str = 'aba aea aca aza axa';
// console.log(str.replace(/a[dex]a/g, '!'))


// Задание 21.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти. 
// let str = 'a1a a3a a7a a9a aba';
// console.log(str.replace(/a[3-6]a/g, '!'));


// Задание 22.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g. 
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-g]a/g, '!'));


// Задание 23.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z. 
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-fj-z]a/g, '!'));


// Задание 24.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D. 
// let str = 'aAa aea aEa aJa a3a';
// console.log(str.replace(/a[a-fA-D]a/g, '!'));


// Задание 25.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', 
// а между ними - маленькие латинские буквы, не затронув остальных. 
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z]+a/, '!'));


// Задние 26.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', 
// а между ними - маленькие и большие латинские буквы, не затронув остальных. 
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-zA-Z]+a/g, '!'))


// Задание 27.
// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', 
// а между ними - маленькие латинские буквы и цифры, не затронув остальных. 
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z0-9]+a/g, '!'));


// Задание 28.
// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы. 
// let str = 'wйw wяw wёw wqw';
// console.log(str.replace(/w[а-яё]w/g, '!'));


// Задание 29.
// Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз. 
// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// console.log(str.replace(/[а-яёА-ЯЁ]+/g, '!'))


// Задание 30.
// Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных. 
// let str = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str.replace(/a[.+*]a/g, '!'))


// Задание 31.
// Напишите регулярку, которая найдет строки по шаблону: 
// буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'. 
// let str = 'xaz x.z x3z x@z x$z xrz';
// console.log(str.replace(/x[^.@#]z/g, '!'));


// Задание 32.
// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем квадратные скобки любое количество раз, затем буква 'z'. 
// let str = 'x[]z x[[]]z x()z';
// console.log(str.replace(/x[\[\]]+z/g, '!'))


// Задание 33.
// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'. 
// let str = 'x[]z x{}z x.z x()z x([])z';
// console.log(str.replace(/x[\[\]\{\}\(\)]+z/g, '!'))


// Задание 34.
// Напишите регулярку, которая найдет строки по шаблону: 
// шляпка или собака, а затем две латинских буквы. 
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[\^@]\w+/g, '!'));


// Задание 35.
// Напишите регулярку, которая найдет строки по шаблону: 
// НЕ шляпка и не собака, а затем две латинских буквы. 
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[^\^@]\w+/g, '!'));


// Задание 36.
// Найдите все строки по следующему шаблону: 
// буква 'x', большая или маленькая буква или дефис, буква 'z'. 
// let str = 'xaz xBz xcz x-z x@z';
// console.log(str.replace(/x[a-zA-z-]z/g, '!'));


// Задание 37.
// Найдите все строки по следующему шаблону: 
// буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'. 
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// console.log(str.replace(/x[$+-]z/g, '!'));


// Задание 38.
// Упростите код
// let res = str.replace(/[a-zA-Z]/g, '!');
// let resSimpla = str.replace(/[a-z]/ig, '!');


// Задание 39.
// Напишите регулярку, которая найдет первую подстроку из букв. 
// let str = 'abc def xyz';
// console.log(str.replace(/^\w+/g, '!'));


// Задание 40.
// Напишите регулярку, которая найдет последнюю подстроку из букв. 
// let str = 'abc def xyz';
// console.log(str.replace(/\w+$/g, '!'));