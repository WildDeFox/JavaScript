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