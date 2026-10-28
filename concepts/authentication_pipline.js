function verifyCredentials(username, password) {
	return (
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (username == "mmaarafi" && password == "Ninja")
					resolve("token_897234");
				else
					reject("invalid username or password");
			}, 500)
		})
	)
}

function fetchUserRoles(token) {
	return (
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (token == "token_897234")
					resolve(["player", "admin"]);
				else
					reject("invalid session token");
			}, 500)
		})
	)
}

function checkAdminAccess(rolesArray) {
	return(
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (rolesArray.includes("admin"))
					resolve("Access granted to admin dashboard");
				else
					reject("Forbidden: Admin access required");
			}, 500);
		})
	)
}

// verifyCredentials("mmaarafi", "Ninja").then((token) => {
// 	return (fetchUserRoles(token));
// }).then((array) => {
// 	return(checkAdminAccess(array))
// }).then((login_status) => {
// 	console.log(login_status)
// }).catch((error) => {
// 	console.log(error);
// })

async function performLogin() {
	try
	{
		const token = await verifyCredentials("mmaarafi", "Ninja");
		const array = await fetchUserRoles(token);
		const login_status = await checkAdminAccess(array);
		console.log(login_status);
	}
	catch (error)
	{
		console.log(error)
	}
}

performLogin();
