let tds = document.querySelectorAll('td');
let parent = document.querySelector('table');

let hiddenCells = [];

for (let i = 0; i < 5; i++) {
    hiddenCells.push(tds[getRandomInt(0, tds.length)]);
}


console.log(hiddenCells);
parent.addEventListener('click', function(event) {
    if (event.target.tagName == "TD") {
        console.log(hiddenCells.includes['event.target'])
        // if (hiddenCells.includes[event.target]) {
        //     event.target.style.backgroundColor = 'green';
        //     event.target.textConteiner = '1'
        // } else {
        //     event.target.style.backgroundColor = 'red';
        // }
    }
});

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}