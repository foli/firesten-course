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
		this.getUsersWithSDK();
		userSvc.getcollection().subscribe(data => (this.users = data));
		userSvc.getcollectionData().subscribe(data => (this.users = data));
	}

	async getUsersWithSDK() {
		this.users = await userSvc.getWithSDK();
		console.log('fromSDK: ', this.users);
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
