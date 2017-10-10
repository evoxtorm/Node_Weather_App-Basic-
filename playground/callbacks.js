var getUser = (id, callback) => {
	var user = {
		id : id,
		name : 'Hitesh'
	};

	setTimeout(() => {
	    callback(user);
	}, 2000);
	
};

getUser(5, (userObject) => {
	console.log(userObject);
});