import { Component, Prop } from '@stencil/core';

import { Navbar } from '../functional';
import { User } from '../../interfaces/user';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss'
})
export class Home {
	@Prop() user: User;

	render() {
		return [<Navbar title='Home' />];
	}
}
