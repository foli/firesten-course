import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'user-list',
	styleUrl: 'user-list.scss'
})
export class UserList {
	@Prop() header: string;
	@Prop() users: firebase.firestore.DocumentData[];

	render() {
		return (
			<ion-list>
				<ion-list-header>{this.header}</ion-list-header>
				{this.users.map(user => (
					<ion-item>
						<ion-avatar>
							<img src={user.photoURL} alt={user.displayName} />
						</ion-avatar>
						<ion-label>
							<h2>{user.displayName}</h2>
							<p>{user.role}</p>
						</ion-label>
					</ion-item>
				))}
			</ion-list>
		);
	}
}
