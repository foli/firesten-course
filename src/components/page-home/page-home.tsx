import { Component } from '@stencil/core';
import { Navbar } from '../functional';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss'
})
export class Home {
	render() {
		return <Navbar title='Home' />;
	}
}
