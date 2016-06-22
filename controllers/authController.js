app
	.controller('AuthCtrl', function (loginFactory) {
		const login = this;

		login.loginUser = (email, password) => {
			loginFactory.login(email, password);
		}
		login.registerUser = (email, password) => {
			loginFactory.register(email, password);
		}
	})