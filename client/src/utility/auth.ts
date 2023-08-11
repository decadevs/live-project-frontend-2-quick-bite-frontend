const auth = {
	authenticate: () => {
		const token = localStorage.getItem("token");
		if (token) {
			return true;
		}
		return false;
	},
	getToken: () => {
		const token = localStorage.getItem("token");
		return token;
	},
};

export default auth;
