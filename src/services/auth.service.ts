import firebase from 'firebase/app';
import { auth, firestore } from '../firebase';
import { authState } from 'rxfire/auth';
import { docData } from 'rxfire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../interfaces/user';

export class AuthService {
	user$: Observable<User>;

	constructor() {
		this.user$ = authState(auth).pipe(
			switchMap((user: firebase.User) => {
				if (user) {
					return docData<User>(firestore.doc(`users/${user.uid}`));
				} else {
					return of(null);
				}
			})
		);
	}

	public sendEmailLink(email: string) {
		const actionCodeSettings = {
			url: 'http://localhost:3333/',
			handleCodeInApp: true
		};
		localStorage.setItem('emailForSignIn', email);
		return auth.sendSignInLinkToEmail(email, actionCodeSettings);
	}

	public async verifyEmailLink(url: string) {
		if (auth.isSignInWithEmailLink(url)) {
			let email = localStorage.getItem('emailForSignIn');
			// if no email is found, ask for it again
			if (!email) {
				email = window.prompt('Please provide your email for confirmation');
			}
			// result: firebase.User
			const result = await auth.signInWithEmailLink(email, url);
			console.log('firebaseUser: ', result);

			if (result.additionalUserInfo.isNewUser) {
				// flow for new users
				console.log('isUserNew: ', result.additionalUserInfo.isNewUser);
			}

			if (history && history.replaceState) {
				history.replaceState({}, document.title, url.split('?')[0]);
			}

			localStorage.removeItem('emailForSignIn');
		}
	}

	public logout() {
		return auth.signOut();
	}

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
