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


// Задание 7.
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height} = options;


// Задание 8.
//  В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории. 

// Решение 
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width: w, height: h} = options;


// Задание 9.
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// Решение
// function func([name, surname, department, position, salary]) {
//     console.log(name, surname, department, position, salary);
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// Задание 10.
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// Решение
// function func([name, surname, ...info]) {
//     console.log(name, surname, info);
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// Задание 11.
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }
// func( ['John', 'Smit', 'development'] );

// Решение
// function func([name, surname, department, position = 'джуниор']) {
//     console.log(name, surname, department, position);
// }
// func( ['John', 'Smit', 'development'] );


// Задание 12.
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// Решение 
// function func(department, [name, surname], [year, month, day]) {
//     console.log(department, name, surname, year, month, day);
// }
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );