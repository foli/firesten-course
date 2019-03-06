import { Component, State } from '@stencil/core';
import { authSvc } from './services/auth.service';

import { User } from './interfaces/user';

@Component({
	tag: 'app-root'
})
export class App {
	@State() user: User;

	componentWillLoad() {
		authSvc.verifyEmailLink(location.href);
		authSvc.user$.subscribe(data => {
			this.user = data;
			console.log(data);
		});
	}

	render() {
		return (
			<ion-app>
				<ion-router useHash={false}>
					<ion-route url='/' component='page-home' componentProps={{ user: this.user }} />
					<ion-route url='/about' component='page-about' />
					{/* <ion-route url='/auth' component='page-auth' /> */}

					<ion-route url='/home' component='tabs-root'>
						<ion-route url='/' component='tabs-home'>
							<ion-route component='tabs-home' />
						</ion-route>

						<ion-route url='/user' component='tabs-dashboard'>
							<ion-route component='tabs-dashboard' componentProps={{ user: this.user }} />
						</ion-route>
					</ion-route>

					{/* route guards */}

					{this.user ? <ion-route-redirect from='/auth' to='/home' /> : undefined}
				</ion-router>
				<app-menu user={this.user} />

				<ion-nav id='main' />
			</ion-app>
		);
	}
}
