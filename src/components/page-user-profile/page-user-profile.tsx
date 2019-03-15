import { Component, State } from '@stencil/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../interfaces/user';
import { authSvc } from '../../services/auth.service';
import { userSvc } from '../../services/user.service';

@Component({
	tag: 'page-user-profile',
	styleUrl: 'page-user-profile.scss'
})
export class PageUserProfile {
	@State() user: User;
	@State() userSub$: Subscription;
	@State() isOwner: boolean = false;

	componentDidLoad() {
		const uid = location.href.split('/')[4];
		this.userSub$ = userSvc.getUser(uid).subscribe(data => (this.user = data));
		this.checkOwnership(uid);
	}

	async checkOwnership(uid: string) {
		const user = await authSvc.user$.pipe(first()).toPromise();
		if (uid === user.uid) {
			this.isOwner = true;
		}
	}

	componentDidUnload() {
		this.userSub$.unsubscribe();
	}

	async editProfile() {
		const modalController = document.querySelector('ion-modal-controller');
		await modalController.componentOnReady();
		const editModal = await modalController.create({
			component: 'page-user-update',
			componentProps: { user: this.user }
		});
		await editModal.present();
	}

	render() {
		return [
			<ion-header no-border>
				<ion-toolbar>
					<ion-buttons slot='start'>
						<ion-back-button />
					</ion-buttons>
					<ion-title>{this.user && this.user.displayName ? this.user.displayName : 'Profile'}</ion-title>
					<ion-buttons slot='end'>
						{this.isOwner ? (
							<ion-button onClick={() => this.editProfile()}>
								<ion-icon name='create' />
							</ion-button>
						) : (
							undefined
						)}
						<ion-menu-button />
					</ion-buttons>
				</ion-toolbar>
			</ion-header>,
			<ion-content>
				<ion-grid>
					<ion-row>
						{this.user ? (
							<ion-col>
								<ion-thumbnail>
									<img src={this.user.photoURL} alt={this.user.displayName} />
								</ion-thumbnail>
								<h1>{this.user.displayName}</h1>
								<p>{this.user.email}</p>
								<p>{this.user.uid}</p>
							</ion-col>
						) : (
							undefined
						)}
					</ion-row>
				</ion-grid>
			</ion-content>
		];
	}
}
