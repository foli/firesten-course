import { Component, State } from '@stencil/core';

import { Navbar } from '../functional';
import { userSvc } from '../../services/user.service';

@Component({
	tag: 'page-user-list',
	styleUrl: 'page-user-list.scss'
})
export class PageUserList {
	@State() users: firebase.firestore.DocumentData[];

	componentWillLoad() {
		userSvc.getcollection().subscribe(data => console.log('getcollection: ', data));
		userSvc.getcollectionData().subscribe(data => {
			console.log('getcollectionData: ', data);
			this.users = data;
		});
	}

	render() {
		return [
			<Navbar title='Home' />,
			<ion-content>
				<user-list header='User List' users={this.users} />
			</ion-content>
		];
	}
}
