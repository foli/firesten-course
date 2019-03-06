import { Component, State } from '@stencil/core';

import { Navbar } from '../functional';
import { User } from '../../interfaces/user';
import { userSvc } from '../../services/user.service';

@Component({
	tag: 'page-user-profile',
	styleUrl: 'page-user-profile.scss'
})
export class PageUserProfile {
	@State() user: User;

	componentWillLoad() {
		const uid = location.href.split('/')[4];
		userSvc.getUser(uid).subscribe(snapshot => {
			this.user = {
				...this.user,
				...snapshot.data()
			};
			console.log('user: ', this.user);
		});
	}
	render() {
		return [
			<Navbar title='User Profile' />,
			<ion-content>
				<h1>{this.user ? this.user.displayName : undefined}</h1>
			</ion-content>
		];
	}
}
