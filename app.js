// Adding methods to an object!
const math = {
	numbers: [1, 2, 3, 4, 5],
	add: function(x, y) {
		return x + y;
	},
	multiply: function(x, y) {
		return x * y;
	}
};

// To execute multiply:
math.multiply(5, 9); //45

//---------------------------------------------------------------------------
//                       NEWER SHORTHAND SYNTAX
//---------------------------------------------------------------------------

const auth = {
	username: 'Tommy Boy',
	login() {
		console.log('logged you in');
	},
	logout() {
		console.log('logging you out');
	}
};

//----------------------------------------------------------------------------
//                            THIS KEYWORD
//----------------------------------------------------------------------------

function sayHi() {
	console.log('HI');
	console.log(this);
}

const greet = function() {
	console.log(this);
};

//--------------------------------------------------------------------------------
//                             WORKING WITH THIS IN METHODS
//--------------------------------------------------------------------------------

const person = {
	first: 'Adam',
	last: 'Hagood',
	nickName: 'James',
	fullName() {
		//console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
		return `${this.first} ${this.last} AKA ${this.nickName}`;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person`);
	},
	laugh: () => {
		console.log(this);
		console.log(`${nickName} says HAHAHA`);
	}
};

//-------------------------------------------------------------------------------------
//                            THIS INVOCATION CONTEXT
//-------------------------------------------------------------------------------------

const printBio = person.printBio;

//-------------------------------------------------------------------------------------
//                              ARROW FUNCTIONS AND THIS
//-------------------------------------------------------------------------------------

// REFER TO LINE 58

const annoyer = {
	phrases: [
		'literally',
		'cray cray',
		'I cant even',
		'Totes',
		'YOLO',
		"Can't Stop, Won't Stop"
	],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	// start() {
	// 	console.log(this.pickPhrase())
	// 	setInterval(function() {
	// 		console.log(this.pickPhrase())                    //HERE THIS IS SET TO THE WINDOW WHEN NOT RAN AS AN ARROW FUNCTION
	// 	}, 3000)
	// },
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase()); //HERE THIS IS SET TO THE OBJECT BECAUSE IT REFRES TO THE THIS FROM START
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
		console.log('PHEW THANK HEAVENS THAT IS OVER!');
	}
};
