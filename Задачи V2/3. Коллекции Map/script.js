// Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let map = new Map;
map.set(arr1, 'test1');
map.set(arr2, 'test2');
map.set(arr3, 'test3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));