import express from 'express';


const router = express.Router()


router.post("/", async (req, res) => {
	const {body} = req;
	try
	{
		const token = await verifyCredentials(body.username, body.password);
		const array = await fetchUserRoles(token);
		const login_status = await checkAdminAccess(array);
		res.status(200).json();
	}
	catch (error)
	{
		res.status(401).json();
	}
})

export default router;

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
