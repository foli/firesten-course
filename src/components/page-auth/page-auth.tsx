import { Component } from '@stencil/core';

import { authSvc } from '../../services/auth.service';
import { Navbar } from '../functional';

@Component({
	tag: 'page-auth',
	styleUrl: 'page-auth.scss'
})
export class PageAuth {
	render() {
		return [
			<Navbar title='Auth Page' />,
			<ion-content>
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-button expand='block' onClick={() => authSvc.google()}>
								Login with Google
							</ion-button>
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-content>
		];
	}
}
