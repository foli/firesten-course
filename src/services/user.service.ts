import { collection, collectionData, doc, docData } from 'rxfire/firestore';
import { firestore } from '../firebase';
import { tap, map } from 'rxjs/operators';

export class UserService {
	async getWithSDK() {
		const usersRef = firestore.collection('users');
		const usersCol = await usersRef.get();
		console.log('QueryDocumentSnapshot[] fromSDK: ', usersCol.docs);
		return usersCol.docs.map(d => {
			const id = d.id;
			const data = d.data();
			return { id, ...data };
		});
	}
	getcollection() {
		return collection(firestore.collection('users')).pipe(
			tap(data => console.log('QueryDocumentSnapshot[] fromCollection: ', data)),
			// we can map it to only needed data
			map(docs =>
				docs.map(d => {
					const id = d.id;
					const data = d.data();
					return { id, ...data };
				})
			)
			// tap(data => console.log('fromCollection: ', data))
		);
	}

	getcollectionData() {
		// just like the above after mapping, only the data and id
		return collectionData(firestore.collection('users'), 'id').pipe(
			tap(data => console.log('fromCollectionData: ', data))
		);
	}

	// getUser(uid: string) {
	// 	return doc(firestore.doc(`/users/${uid}`));
	// }

	getUser(uid: string) {
		return docData(firestore.doc('users'), uid);
	}
}
export const userSvc = new UserService();
