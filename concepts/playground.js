// =================== pyramid hell ===================

// function getLatestMessage(room, callback) {
// 	setTimeout( () => {
// 		console.log("fetching lastest message" + room);
// 		callback(null, { text: "Hello from 1337!", timestamp: Date.now() });
// 	}, 500);
// }

// function connectUser(username, callback) {
// 	setTimeout( () => {
// 		console.log(username + "connected sequence initiated");
// 		callback(null, {userId : 42, username: username});
// 	}, 500);
// };


// function getChatRooms(userId, callback) {
// 	setTimeout( () => {
// 		console.log("searching for rooms for user" + userId);
// 		callback(null, ["room1", "room2"]);
// 	}, 500)
// };

// connectUser("Mohammed", (err, user) => {
// 		if (err)
// 		{
// 			console.log(err)
// 			return ;
// 		}
// 		console.log(user.userId);
// 		getChatRooms(user.userId, (err, rooms) => {
// 			if (err)
// 			{
// 				console.log(err);
// 				return;
// 			}
// 			console.log(rooms)
// 			getLatestMessage(rooms[0], (err, message) => {
// 				if (err)
// 				{
// 					console.log(err);
// 					return;
// 				}
// 				console.log("Final message" + message.text)
// 		});
// 	});
// });


// =================== pyramid hell ===================


// =================== promises ===================

// let myPromises = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("hello from the promise");
// 	}, 1000)
// });

// myPromises.then((res) => {
// 	console.log(myPromises);
// 	console.log(res);
// })

// function getLatestMessage(room) {
// 	return (
// 		new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				console.log("fetching latest message " + room)
// 				resolve({ text: "Hello from 1337!", timestamp: Date.now() });
// 				// reject("iiiiiiiiiiiiii333333333");
// 			}, 2500)
// 		})
// 	)
// }

// function connectUser(username) {
// 	return (
// 		new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				// console.log("user is connected username: " + username)
// 				resolve({userId : 42, username: username});
// 				// reject("rejection error from connect function");
// 			}, 1500)
// 		})
// 	)
// };


// function getChatRooms(userId) {
// 	return (
// 		new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				// console.log("im looking for a chat room")
// 				resolve(["room1", "room2"]);
// 				// reject("another rejection from getchat rooms this time")
// 			}, 500)
// 		})
// 	)
// };

/*the chain wait for each promise to resolve then it continue at any point will be
there any reject it will be catched

why the catch works for everything it
for example if connectUser have failed why the catch block catch it
let trace everything connect user return a promise we have a then block it wont get triggered
the consolde will not type "console.log("this is the user id: " + res.userId)"
The first Promise flips to Rejected and spits out your error string.

the .then() function. We have been using it like it only takes one argument
 but it actually accepts two function pointers:.then(successCallback, errorCallback)

Because you only provided the successCallback, the JavaScript engine automatically 
plugs in a default dummy function for the errorCallback behind the scenes.
That hidden dummy function looks exactly like this:(err) => { throw err; }

The engine looks at your first .then(). It skips your success arrow function entirely.
Instead, it executes that hidden dummy error function.
The dummy function throws the error.
The Hard Rule of Promises: If an error is thrown inside a .then() block
(even implicitly by the engine), the hidden Promise intercepts that crash
instantly locks its own state to Rejected, and stuffs the error inside itself.
This chain reaction of throwing and catching hidden errors continues
rapidly down the linked list until it finds a block that actually has 
an errorCallback defined.*/

// console.log(
// 	connectUser("Mohammed").then((res) => {
// 		console.log("this is the user id: " + res.userId)
// 		return (res);
// 	}).then((res) => {
// 		return getChatRooms(res.userId);
// 	}).then((rooms) => {
// 		console.log("these are the available rooms: [" + rooms + ']');
// 		return (rooms)
// 	}).then((rooms) => {
// 		return (getLatestMessage(rooms[0]));
// 	}).then((obj) => {
// 		console.log("Final message " + obj.text);
// 	}).catch((err) => {
// 		console.log(err);
// 	})
// )