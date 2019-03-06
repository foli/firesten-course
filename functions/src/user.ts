import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();
export const createUserAccount = functions
	.region('europe-west1')
	.runWith({ memory: '128MB', timeoutSeconds: 60 })
	.auth.user()
	.onCreate(e => {
		console.log('Event: ', e);

		const user = {
			email: e.email,
			displayName: e.displayName,
			memberSince: e.metadata.creationTime,
			phoneNumber: e.phoneNumber,
			photoURL: e.photoURL,
			uid: e.uid,
			role: ['member']
		};
		const userRef = db.doc(`/users/${e.uid}`);
		return userRef.set(user);
	});

export const deactivateUserAccount = functions
	.region('europe-west1')
	.runWith({ memory: '128MB', timeoutSeconds: 60 })
	.auth.user()
	.onDelete(e => {
		const userRef = db.doc(`users/${e.uid}`);
		return userRef.update({ isInactive: true });
	});
