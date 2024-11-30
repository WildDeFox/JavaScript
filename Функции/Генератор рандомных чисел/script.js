// Генератор дробного числа
function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

// Генератор целого числа
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}