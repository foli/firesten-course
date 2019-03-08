import { collectionData, docData } from 'rxfire/firestore';
import { tap } from 'rxjs/operators';

import { firestore, storage } from '../firebase';
import { User } from '../interfaces/user';

export class UserService {
	getUsers() {
		return collectionData<User>(firestore.collection('users'), 'id').pipe(
			tap(data => console.log('getUsers: ', data))
		);
	}

	getUser(uid: string) {
		return docData<User>(firestore.doc(`users/${uid}`)).pipe(tap(data => console.log('getUser: ', data)));
	}

	async updatePhotoURL(uid: string, file: File) {
		try {
			const uploadRef = storage.ref().child(`users/${uid}/photoURL`);
			const uploadTask = await uploadRef.put(file);
			const photoURL = await uploadTask.ref.getDownloadURL();
			await firestore.doc(`users/${uid}`).update({ photoURL });
			console.log('Upload was successful, and photoURL saved to firestore');
		} catch (error) {
			console.log(error.code, error.message);
		}
	}

	async updateProfile(uid: string, payload: Partial<User>) {
		firestore.doc(`users/${uid}`).set(payload, { merge: true });
	}
}
export const userSvc = new UserService();
