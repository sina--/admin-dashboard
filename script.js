let cardDB = [
	{
		'title': 'Super Cool Project',
		'content': 'hello hello hello'
	},
	{
		'title': 'Super Cool Project',
		'content': 'hello hello hello'
	},
];

let greeting = document.getElementById('greeting');
let cardGrid = document.getElementById('cards');
let cardTemplate = document.getElementById('project-card');

function createCard() {
	
}

function setGreeting() {
	let objDate = new Date();
	let time = objDate.getHours();
	if (time < 12 && time > 4) {
		greeting.textContent = 'Good morning,';
	} else if (time >= 12 && time < 5) { 
		greeting.textContent = 'Good afternoon,';
	} else {
		greeting.textContent = 'Good evening,';
	}
}

setGreeting();
