import { LitElement, html, css } from "lit";
import { globalStyles } from "./styles/global-styles";
import "./register-elements.js";
import "./components/HeaderComponent.js";
import "./components/FooterComponent.js";
import "./components/AuthenticationComponent.js";
import "./components/UserDetailsComponent.js";
class App extends LitElement {
    static get properties() {
        return {
            isLoggedIn: { type: Boolean },
            username: { type: String },
        };
    }
    constructor() {
        super();
        this.isLoggedIn = false;
        this.username = "";
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    render() {
        return html `
      <header-component></header-component>
      <main>
        ${this.isLoggedIn
            ? html `
              <user-details-component
                .username=${this.username}
                @logout=${this.handleLogout}
              ></user-details-component>
            `
            : html `
              <authentication-component
                @login=${this.handleLogin}
              ></authentication-component>
            `}
      </main>
      <footer-component></footer-component>
    `;
    }
    handleLogin(event) {
        this.isLoggedIn = true;
        this.username = event.detail.username;
    }
    handleLogout() {
        this.isLoggedIn = false;
        this.username = "";
    }
}
App.styles = [
    globalStyles,
    css `
      main {
        padding-bottom: 60px; /* To prevent content hiding behind footer */
      }
    `,
];
customElements.define("my-app", App);
