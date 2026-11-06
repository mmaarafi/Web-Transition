const button  = document.getElementById("login-button");
const username = document.getElementById("username");
const password = document.getElementById("password");

button.addEventListener('click', async () => {
	let credential = {username: username.value, password: password.value}
	const response = await fetch('http://localhost:5000/login', {
		method: "POST",
		body: JSON.stringify(credential),
		headers: {
			"Content-Type": "application/json"
		}
	});
	const data = await response.json()
	console.log(data);
})