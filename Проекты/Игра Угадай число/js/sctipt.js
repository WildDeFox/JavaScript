let number = getRandomInt(1, 100);
let input = document.querySelector('#input');
let answer = document.querySelector('#answer');

// Генератор целого числа
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

input.addEventListener('blur', function() {
    if (Number(input.value) == number) {
        answer.textContent = 'Вы угадали, поздравляем!!!';
        answer.style.color = 'green';
    } else if (Number(input.value) < number) {
        answer.textContent = 'Неверно, загаданное число больше вашего, попробуйте ещё раз.';
        answer.style.color = 'red';
    } else if (Number(input.value) > number) {
        answer.textContent = 'Неверно, загаданное число меньше вашего, попробуйте ещё раз.';
        answer.style.color = 'red';
    }
})