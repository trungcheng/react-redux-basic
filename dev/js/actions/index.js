export const selectUser = (user) => {
	console.log("You are clicking on user: ", user.last);
	return {
		type: "USER_SELECTED",
		payload: user
	}
};