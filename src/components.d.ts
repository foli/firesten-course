/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import {
  User,
} from './interfaces/user';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppMenu {
    'user': User;
  }
  interface AppMenuAttributes extends StencilHTMLAttributes {
    'user'?: User;
  }

  interface PageAbout {}
  interface PageAboutAttributes extends StencilHTMLAttributes {}

  interface PageAdmin {}
  interface PageAdminAttributes extends StencilHTMLAttributes {}

  interface PageAuth {}
  interface PageAuthAttributes extends StencilHTMLAttributes {}

  interface PageHome {
    'user': User;
  }
  interface PageHomeAttributes extends StencilHTMLAttributes {
    'user'?: User;
  }

  interface PageUserList {}
  interface PageUserListAttributes extends StencilHTMLAttributes {}

  interface PageUserProfile {}
  interface PageUserProfileAttributes extends StencilHTMLAttributes {}

  interface TabsDashboard {
    'user': User;
  }
  interface TabsDashboardAttributes extends StencilHTMLAttributes {
    'user'?: User;
  }

  interface TabsHome {}
  interface TabsHomeAttributes extends StencilHTMLAttributes {}

  interface TabsRoot {}
  interface TabsRootAttributes extends StencilHTMLAttributes {}

  interface UserList {
    'users': User[];
  }
  interface UserListAttributes extends StencilHTMLAttributes {
    'users'?: User[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppMenu': Components.AppMenu;
    'PageAbout': Components.PageAbout;
    'PageAdmin': Components.PageAdmin;
    'PageAuth': Components.PageAuth;
    'PageHome': Components.PageHome;
    'PageUserList': Components.PageUserList;
    'PageUserProfile': Components.PageUserProfile;
    'TabsDashboard': Components.TabsDashboard;
    'TabsHome': Components.TabsHome;
    'TabsRoot': Components.TabsRoot;
    'UserList': Components.UserList;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-menu': Components.AppMenuAttributes;
    'page-about': Components.PageAboutAttributes;
    'page-admin': Components.PageAdminAttributes;
    'page-auth': Components.PageAuthAttributes;
    'page-home': Components.PageHomeAttributes;
    'page-user-list': Components.PageUserListAttributes;
    'page-user-profile': Components.PageUserProfileAttributes;
    'tabs-dashboard': Components.TabsDashboardAttributes;
    'tabs-home': Components.TabsHomeAttributes;
    'tabs-root': Components.TabsRootAttributes;
    'user-list': Components.UserListAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {}
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };

  interface HTMLPageAdminElement extends Components.PageAdmin, HTMLStencilElement {}
  var HTMLPageAdminElement: {
    prototype: HTMLPageAdminElement;
    new (): HTMLPageAdminElement;
  };

  interface HTMLPageAuthElement extends Components.PageAuth, HTMLStencilElement {}
  var HTMLPageAuthElement: {
    prototype: HTMLPageAuthElement;
    new (): HTMLPageAuthElement;
  };

  interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {}
  var HTMLPageHomeElement: {
    prototype: HTMLPageHomeElement;
    new (): HTMLPageHomeElement;
  };

  interface HTMLPageUserListElement extends Components.PageUserList, HTMLStencilElement {}
  var HTMLPageUserListElement: {
    prototype: HTMLPageUserListElement;
    new (): HTMLPageUserListElement;
  };

  interface HTMLPageUserProfileElement extends Components.PageUserProfile, HTMLStencilElement {}
  var HTMLPageUserProfileElement: {
    prototype: HTMLPageUserProfileElement;
    new (): HTMLPageUserProfileElement;
  };

  interface HTMLTabsDashboardElement extends Components.TabsDashboard, HTMLStencilElement {}
  var HTMLTabsDashboardElement: {
    prototype: HTMLTabsDashboardElement;
    new (): HTMLTabsDashboardElement;
  };

  interface HTMLTabsHomeElement extends Components.TabsHome, HTMLStencilElement {}
  var HTMLTabsHomeElement: {
    prototype: HTMLTabsHomeElement;
    new (): HTMLTabsHomeElement;
  };

  interface HTMLTabsRootElement extends Components.TabsRoot, HTMLStencilElement {}
  var HTMLTabsRootElement: {
    prototype: HTMLTabsRootElement;
    new (): HTMLTabsRootElement;
  };

  interface HTMLUserListElement extends Components.UserList, HTMLStencilElement {}
  var HTMLUserListElement: {
    prototype: HTMLUserListElement;
    new (): HTMLUserListElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-menu': HTMLAppMenuElement
    'page-about': HTMLPageAboutElement
    'page-admin': HTMLPageAdminElement
    'page-auth': HTMLPageAuthElement
    'page-home': HTMLPageHomeElement
    'page-user-list': HTMLPageUserListElement
    'page-user-profile': HTMLPageUserProfileElement
    'tabs-dashboard': HTMLTabsDashboardElement
    'tabs-home': HTMLTabsHomeElement
    'tabs-root': HTMLTabsRootElement
    'user-list': HTMLUserListElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-menu': HTMLAppMenuElement;
    'page-about': HTMLPageAboutElement;
    'page-admin': HTMLPageAdminElement;
    'page-auth': HTMLPageAuthElement;
    'page-home': HTMLPageHomeElement;
    'page-user-list': HTMLPageUserListElement;
    'page-user-profile': HTMLPageUserProfileElement;
    'tabs-dashboard': HTMLTabsDashboardElement;
    'tabs-home': HTMLTabsHomeElement;
    'tabs-root': HTMLTabsRootElement;
    'user-list': HTMLUserListElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
