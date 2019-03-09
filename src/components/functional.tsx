import { FunctionalComponent } from '@stencil/core';

interface NavBarProps {
	title: string;
}

export const Navbar: FunctionalComponent<NavBarProps> = ({ title }) => (
	<ion-header no-border>
		<ion-toolbar>
			<ion-buttons slot='start'>
				<ion-back-button />
			</ion-buttons>
			<ion-title>{title}</ion-title>
			<ion-buttons slot='end'>
				<ion-menu-button />
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
);
