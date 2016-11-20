var obj = {
	someData: 'a string'
};

function myFun() {
	console.log(this);
}

obj.myFunction = myFun;

obj.myFunction();

// what is 'this' when shown in the console output?
