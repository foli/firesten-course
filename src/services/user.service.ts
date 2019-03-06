import { collection } from 'rxfire/firestore';
import { firestore } from '../firebase';
import { tap, map } from 'rxjs/operators';

export class UserService {
	getUsers() {
		return collection(firestore.collection('users')).pipe(
			tap(data => console.log('before maping: ', data)),
			map(docs => docs.map(d => d.data())),
			tap(data => console.log('after mapping: ', data))
		);
	}
}
export const userSvc = new UserService();
