//your JS code here. If required.
function executor(resolve, reject) {
	setTimeout(()=> {
		resolve("Hello, world!")
	},1000);
}
var promise = new Promise(executor);
function printhello(data) {
	const out = document.getElementById("output");
	out.innerText = data;
}
promise.then(printhello);