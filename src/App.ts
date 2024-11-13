import { LitElement, html, css } from 'lit';
import { globalStyles } from './styles/global-styles';
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

  render() {
    return html`
      <header-component></header-component>
      <main>
        <authentication-component></authentication-component>
        <user-details-component></user-details-component>
      </main>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('my-app', App);