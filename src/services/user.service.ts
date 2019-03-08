import { collectionData, docData } from 'rxfire/firestore';
import { firestore } from '../firebase';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces/user';

export class UserService {
	getUsers() {
		return collectionData<User>(firestore.collection('users'), 'id').pipe(
			tap(data => console.log('getUsers: ', data))
		);
	}

	getUser(uid: string) {
		return docData<User>(firestore.doc(`users/${uid}`)).pipe(
			tap(data => console.log('getUser: ', data))
		);
	}
}
export const userSvc = new UserService();
