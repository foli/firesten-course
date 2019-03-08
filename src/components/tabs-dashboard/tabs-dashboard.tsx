import { Component, Prop } from '@stencil/core';
import { Navbar } from '../functional';
import { User } from '../../interfaces/user';

@Component({
	tag: 'tabs-dashboard',
	styleUrl: 'tabs-dashboard.scss'
})
export class TabsDashboard {
	@Prop() user: User;

	render() {
		return [
			<Navbar title='' />,
			<ion-content>
				{this.user ? (
					<ion-item lines='none' detail={true} margin-top href='/home/user/update'>
						<ion-avatar>
							<img src={this.user.photoURL} alt={this.user.displayName} />
						</ion-avatar>
						<ion-label>
							<h2>{this.user.displayName}</h2>
							<p>
								{this.user.role.toString().toUpperCase()} &bull; {this.user.email}
							</p>
						</ion-label>
					</ion-item>
				) : null}

				{this.user && this.user.role.includes('admin') ? (
					<ion-item lines='none' margin-top href='/admin'>
						<ion-icon name='construct' slot='start' />
						<ion-label>Control Panel</ion-label>
					</ion-item>
				) : null}
			</ion-content>
		];
	}
}
