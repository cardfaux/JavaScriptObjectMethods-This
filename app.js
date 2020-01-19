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
	}
};

//-------------------------------------------------------------------------------------
//                            THIS INVOCATION CONTEXT
//-------------------------------------------------------------------------------------
