import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'user-list',
	styleUrl: 'user-list.scss'
})
export class UserList {
	@Prop() header: string;
	@Prop() users: firebase.firestore.DocumentData[];

	async viewProfile(uid: string) {
		// initialize nav
		const navCtl = document.querySelector('ion-router');
		await navCtl.componentOnReady();
		return navCtl.push(`/users/${uid}`);
	}

	render() {
		return (
			<ion-list>
				<ion-list-header>{this.header}</ion-list-header>
				{this.users
					? this.users.map(user => (
							<ion-item onClick={() => this.viewProfile(user.uid)} detail={true}>
								<ion-avatar>
									<img src={user.photoURL} alt={user.displayName} />
								</ion-avatar>
								<ion-label>
									<h2>{user.displayName}</h2>
									<p>{user.role}</p>
								</ion-label>
							</ion-item>
					  ))
					: undefined}
			</ion-list>
		);
	}
}
