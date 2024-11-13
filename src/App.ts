import { LitElement, html, css } from 'lit';
import { globalStyles } from './styles/global-styles';
import './register-elements.js';

import './components/HeaderComponent.js';
import './components/FooterComponent.js';
import './components/AuthenticationComponent.js';
import './components/UserDetailsComponent.js';

class App extends LitElement {
  static styles = [
    globalStyles,
    css`
      main {
        padding-bottom: 60px; /* To prevent content hiding behind footer */
      }
    `,
  ];

  // Manage authentication state
  private isLoggedIn = false;
  private username = '';

  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  render() {
    return html`
      <header-component></header-component>
      <main>
        ${this.isLoggedIn
          ? html`
              <user-details-component
                .username=${this.username}
                @logout=${this.handleLogout}
              ></user-details-component>
            `
          : html`
              <authentication-component
                @login=${this.handleLogin}
              ></authentication-component>
            `}
      </main>
      <footer-component></footer-component>
    `;
  }

  handleLogin(event: CustomEvent) {
    this.isLoggedIn = true;
    this.username = event.detail.username;
    this.requestUpdate();
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.username = '';
    this.requestUpdate();
  }
}

customElements.define('my-app', App);