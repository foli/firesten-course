import firebase from 'firebase/app';
import { auth } from '../firebase';

export class AuthService {
	constructor() {}

	public twitter() {
		const provider = new firebase.auth.TwitterAuthProvider();
		return this.providerHandler(provider);
	}

	public google() {
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.providerHandler(provider);
	}

	private providerHandler(provider: any) {
		return auth.signInWithPopup(provider);
	}
}
// export it as a singleton
export const authSvc = new AuthService();
