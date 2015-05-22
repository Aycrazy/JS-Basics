//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === 'Tyler')  {
	return true;
    }
    else {
    	return false;
    }
};

isTyler('Tyler');

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
	var question = prompt("What's Your Name?");
	return question;
}

getName()


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
  alert("Welcome" + getName());
}

welcome()


//Next problem




//What is the difference between arguments and parameters?

  A parameter is the set of rules, or question in hand, by which an arguments will be the answer


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)

Run it through an if statement and see if its true.



//Next Problem



//Create a function called myName that returns your name

var myName = function() {
	return "Michael";
}

myName()

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return function(anonymous) {
		return newMyName;
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
