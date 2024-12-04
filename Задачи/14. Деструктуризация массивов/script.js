// Задание 1.
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let [name, surname, department, position, salary] = arr;


// Задание 2.
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let [, , department, programmer] = arr;


// Задание 3.
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let name    = arr[0];
// let surname = arr[1];
// let info = arr.slice(2);
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let arr = ['John', 'Smit', 'development', 'programmer', 2000]; 
// let [name, surname, ...info] = arr;
// console.log(info);


// Задание 4.
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение 
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position = 'trainee'] = arr;


// Задание 5.
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;


// Задание 6.
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = options;