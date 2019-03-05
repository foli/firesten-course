import { Component, Prop } from '@stencil/core';
import { Navbar } from '../functional';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss'
})
export class Home {
	@Prop() user: firebase.User;

	render() {
		return [
			<Navbar title='Home' />,
			<ion-content>
				<h1>{this.user.email}</h1>
			</ion-content>
		];
	}
}
