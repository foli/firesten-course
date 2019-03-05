// create a js class
export class AuthService {
	name: string;

	constructor() {
		this.name = 'Flavio';
	}

	helloFromService() {
		return 'AuthService says hello';
	}
}
// export it as a singleton
export const authSvc = new AuthService();
