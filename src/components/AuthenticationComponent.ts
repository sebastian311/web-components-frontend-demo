import { LitElement, html, css } from 'lit';
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js';

class AuthenticationComponent extends LitElement {
  static styles = css`
    .auth-container {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    lion-input,
    lion-button {
      margin-bottom: 1rem;
    }
  `;

  private username: string = '';
  private password: string = '';
  private isLoggedIn: boolean = false;

  render() {
    return html`
      <div class="auth-container">
        ${this.isLoggedIn
          ? html`
              <p>Welcome, ${this.username}!</p>
              <lion-button @click=${this.handleLogout}>Logout</lion-button>
            `
          : html`
              <lion-input
                label="Username"
                @input=${this.handleUsernameInput}
              ></lion-input>
              <lion-input
                label="Password"
                type="password"
                @input=${this.handlePasswordInput}
              ></lion-input>
              <lion-button @click=${this.handleLogin}>Login</lion-button>
            `}
      </div>
    `;
  }

  handleUsernameInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.username = target.value;
  }

  handlePasswordInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.password = target.value;
  }

  handleLogin() {
    // Simple login logic (no backend)
    if (this.username && this.password) {
      this.isLoggedIn = true;
      this.requestUpdate();
    } else {
      alert('Please enter username and password');
    }
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
    this.requestUpdate();
  }
}

customElements.define('authentication-component', AuthenticationComponent);