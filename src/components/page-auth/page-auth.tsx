import { Component, State } from '@stencil/core';

import { authSvc } from '../../services/auth.service';
import { Navbar } from '../functional';

@Component({
	tag: 'page-auth',
	styleUrl: 'page-auth.scss'
})
export class PageAuth {
	@State() email: string;

	async sendLink() {
		try {
			if (this.email) {
				await authSvc.sendEmailLink(this.email.trim());
				console.log('email sent');
				return this.dismissModal();
			}
		} catch (error) {
			console.log(error.code, error.message);
		}
	}

	async googleLogin() {
		await authSvc.google();
		return this.dismissModal();
	}

	async dismissModal() {
		const modalController = document.querySelector('ion-modal-controller');
		await modalController.componentOnReady();
		return modalController.dismiss();
	}

	inputHandler(event) {
		this.email = event.target.value;
	}

	render() {
		return [
			<Navbar title='Auth Page' />,
			<ion-content>
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position='floating'>Email</ion-label>
								<ion-input required type='email' onInput={event => this.inputHandler(event)} />
							</ion-item>
							<ion-button margin-top expand='block' onClick={() => this.sendLink()}>
								Get Link
							</ion-button>
							<ion-button expand='block' onClick={() => this.googleLogin()}>
								Login with Google
							</ion-button>
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-content>
		];
	}
}
