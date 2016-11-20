var hi = function (name) {
	return 'Hi ' + name;
};

var greeting1 = function (name) {
	return hi(name);
};

var greeting2 = hi;

// which version of the "greeting" function are functional  ?
// First, second or both ?