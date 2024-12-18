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

// Переменные для площади прямоугольника
let rectangleSideA = document.querySelector('#rectangleSideA');
let rectangleSideB = document.querySelector('#rectangleSideB');
let result4 = document.querySelector('#result4');
let button4 = document.querySelector('#button4');

// Переменные для периметра прямоугольника
let rectangleSidePerA = document.querySelector('#rectangleSidePerA');
let rectangleSidePerB = document.querySelector('#rectangleSidePerB');
let result5 = document.querySelector('#result5');
let button5 = document.querySelector('#button5');

// Нахождение площади квадрата
squareArea.addEventListener('blur', function(){
    result1.textContent = Math.pow(Number(squareArea.value), 2);
});

// Нахождение периметра квадрата
squarePerimeter.addEventListener('blur', function() {
    result2.textContent = Number(squarePerimeter.value) * 4;
});

// Нахождение площади треугольника
button3.addEventListener('click', function() {
    result3.textContent = (Number(triangleBase.value) * Number(triangleSide.value) / 2);
})

// Нахождение площади прямоугольника
button4.addEventListener('click', function() {
    result4.textContent = Number(rectangleSideA.value) * Number(rectangleSideB.value);
})

// Нахождение периметра прямоугольника
button5.addEventListener('click', function() {
    result5.textContent = (Number(rectangleSidePerA.value) * 2) + (Number(rectangleSidePerB.value) * 2);
});