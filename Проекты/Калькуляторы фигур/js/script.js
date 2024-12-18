// Переменные для площади квадрата
let squareArea = document.querySelector('#squareArea');
let result1 = document.querySelector('#result1');

// Переменные для периметра квадрата
let squarePerimeter = document.querySelector('#squarePerimeter');
let result2 = document.querySelector('#result2');

// Переменные для площади треугольника
let triangleBase = document.querySelector('#triangleBase');
let triangleSide = document.querySelector('#triangleSide');
let result3 = document.querySelector('#result3');
let button3 = document.querySelector('#button3');

// Нахождение площади квадрата
squareArea.addEventListener('blur', function(){
    result1.textContent = Math.pow(Number(squareArea.value), 2);
});

// Нахождение периметра квадрата
squarePerimeter.addEventListener('blur', function() {
    result2.textContent = Number(squarePerimeter.value) * 4;
});

button3.addEventListener('click', function() {
    result3.textContent = (Number(triangleBase.value) * Number(triangleSide.value) / 2);
})