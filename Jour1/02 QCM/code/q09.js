for (var i = 1; i < 4; i++) {
	setTimeout(function () {
		console.log(i);
	}, 1000 * i);
}

// what is the console output?

// Fix 1
for (var i = 1; i < 4; i++) {
	setTimeout(function (x) {
		return function () {
			console.log(x);
		};
	}(i), 1000 * i);
}

// Fix 2
function myCallBackClosured(x) {
	return function () {
		console.log(x);
	};
}

for (var i = 1; i <= 5; i++) {
	setTimeout(myCallBackClosured(i), 1000 * i);
}

// Fix 3
for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(myCallBack, i * 1000);
		function myCallBack() {
			console.log(i);
		}
	})(i);
}