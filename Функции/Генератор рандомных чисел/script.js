// Генератор дробного числа
function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

// Генератор целого числа
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Добавляет 0 к числам от 1 до 9. Например 05. 
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}