import { Component, Prop, State } from '@stencil/core';
import { User } from '../../interfaces/user';
import { Navbar } from '../functional';

@Component({
	tag: 'page-user-update',
	styleUrl: 'page-user-update.scss'
})
export class PageUserUpdate {
	@State() uploading = false;

	@State() displayName: string;
	@State() bio: string;
	@State() website: string;
	@State() twitter: string;

	@Prop() user: User;

	componentWillLoad() {
		this.setState();
	}

	setState() {
		if (this.user) {
			const { displayName, bio, website, twitter } = this.user;
			this.displayName = displayName;
			this.bio = bio;
			this.website = website;
			this.twitter = twitter;
		}
	}

	updatePhotoURL(event: any) {
		console.log(event.target.files[0]);
	}

	updateProfile() {
		let payload = {
			displayName: this.displayName,
			bio: this.bio,
			website: this.website,
			twitter: this.twitter
		};
		console.log(payload);
	}

	inputHandler(event: any) {
		const value = event.target.value;
		switch (event.target.name) {
			case 'displayName':
				this.displayName = value;
				break;

			case 'bio':
				this.bio = value;
				break;

			case 'website':
				this.website = value;
				break;

			case 'twitter':
				this.twitter = value;
				break;
		}
	}

	render() {
		return [
			<Navbar title='Update Profile' />,
			this.uploading ? <ion-progress-bar type='indeterminate' /> : null,
			<ion-content>
				<div class='cover' />
				<ion-button float-right fill='outline' size='small' onClick={() => this.updateProfile()}>
					Save
				</ion-button>
				<ion-thumbnail>
					<img
						src={this.user ? this.user.photoURL : '/assets/images/avatar.png'}
						alt={this.user ? this.user.displayName : null}
					/>
					<div>
						<label htmlFor='avatarFileInput'>
							<ion-icon name='camera' />
						</label>
						<input
							type='file'
							accept='image/*'
							id='avatarFileInput'
							onChange={event => this.updatePhotoURL(event)}
						/>
					</div>
				</ion-thumbnail>

				<ion-list margin-top>
					<ion-list-header>Basic Details</ion-list-header>
					<ion-item>
						<ion-label position='floating'>Display Name</ion-label>
						<ion-input
							name='displayName'
							value={this.displayName}
							onInput={event => this.inputHandler(event)}
						/>
					</ion-item>
					<ion-item>
						<ion-label position='floating'>Bio</ion-label>
						<ion-textarea name='bio' value={this.bio} rows={4} onInput={event => this.inputHandler(event)} />
					</ion-item>
					<ion-item>
						<ion-label position='floating'>Website</ion-label>
						<ion-input name='website' value={this.website} onInput={event => this.inputHandler(event)} />
					</ion-item>
					<ion-item>
						<ion-label position='floating'>Twitter</ion-label>
						<ion-input name='twitter' value={this.twitter} onInput={event => this.inputHandler(event)} />
					</ion-item>
				</ion-list>
			</ion-content>
		];
	}
}
