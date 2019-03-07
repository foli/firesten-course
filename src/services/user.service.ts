import { collection, collectionData, doc } from 'rxfire/firestore';
import { firestore } from '../firebase';
import { tap, map } from 'rxjs/operators';

export class UserService {
	getcollection() {
		return collection(firestore.collection('users')).pipe(
			// returns data + metadata
			tap(data => console.log('before maping: ', data)),
			// we can map it to only needed data
			map(docs => docs.map(d => d.data())),
			tap(data => console.log('after mapping: ', data))
		);
	}

	getcollectionData() {
		// just like the above after mapping, only the data and id
		return collectionData(firestore.collection('users'), 'id');
	}

	getUser(uid: string) {
		return doc(firestore.doc(`/users/${uid}`));
	}
}
export const userSvc = new UserService();
