import { Component, State } from '@stencil/core';

import { Navbar } from '../functional';
import { userSvc } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
	tag: 'page-user-list',
	styleUrl: 'page-user-list.scss'
})
export class PageUserList {
	@State() users: User[];

	componentWillLoad() {
		userSvc.getUsers().subscribe(data => (this.users = data));
	}

	render() {
		return [
			<Navbar title='Home' />,
			<ion-content>
				<user-list users={this.users} />
			</ion-content>
		];
	}
}
