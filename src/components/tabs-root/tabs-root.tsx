import { Component } from '@stencil/core';

@Component({
	tag: 'tabs-root',
	styleUrl: 'tabs-root.scss'
})
export class TabsRoot {
	render() {
		return (
			<ion-tabs>
				{/* tab content */}
				<ion-tab tab='tabs-home'>
					<ion-nav />
				</ion-tab>

				<ion-tab tab='tabs-dashboard'>
					<ion-nav />
				</ion-tab>
				{/* tab bar */}
				<ion-tab-bar slot='bottom'>
					<ion-tab-button tab='tabs-home'>
						<ion-label>Home</ion-label>
						<ion-icon name='home' />
					</ion-tab-button>

					<ion-tab-button tab='tabs-dashboard'>
						<ion-label>Dashboard</ion-label>
						<ion-icon name='person' />
					</ion-tab-button>
				</ion-tab-bar>
			</ion-tabs>
		);
	}
}
