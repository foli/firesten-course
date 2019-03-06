import { Component, Prop, State } from '@stencil/core';

import { Navbar } from '../functional';
import { userSvc } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss'
})
export class Home {
	@State() users: firebase.firestore.DocumentData[];
	@Prop() user: User;

	componentWillLoad() {
		userSvc.getUsers().subscribe(data => (this.users = data));
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
