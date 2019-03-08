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

	componentDidLoad() {
		const uid = location.href.split('/')[4];
		userSvc.getUser(uid).subscribe(data => (this.user = data));
	}

	render() {
		return [
			<Navbar title='User Profile' />,
			<ion-content>
				<h1>{this.user ? this.user.email : undefined}</h1>
				<p>{this.user ? this.user.uid : undefined}</p>
			</ion-content>
		];
	}
}
