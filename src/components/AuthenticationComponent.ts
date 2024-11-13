import { LitElement, html, css } from 'lit';

class AuthenticationComponent extends LitElement {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

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
    .error-message {
      color: red;
      margin-top: 1rem;
    }
  `;

  render() {
    return html`
      <div class="auth-container">
        <h2>Login</h2>
        <lion-input
          label="Username"
          @model-value-changed=${this.handleUsernameInput}
        ></lion-input>
        <lion-input
          type="password"
          label="Password"
          @model-value-changed=${this.handlePasswordInput}
        ></lion-input>
        <lion-button @click=${this.handleLogin}>Login</lion-button>
        ${this.errorMessage
          ? html`<div class="error-message">${this.errorMessage}</div>`
          : ''}
      </div>
    `;
  }

  handleUsernameInput(e: CustomEvent) {  
    const inputEl = e.composedPath()[0] as HTMLElement & { modelValue: string };
    this.username = inputEl.modelValue;
  }

  handlePasswordInput(e: CustomEvent) {
    const inputEl = e.composedPath()[0] as HTMLElement & { modelValue: string };
    this.password = inputEl.modelValue;
  }

  handleLogin() {
    if (this.username && this.password) {
      if (this.username === 'admin' && this.password === 'password') {
        this.dispatchEvent(
          new CustomEvent('login', {
            detail: { username: this.username },
            bubbles: true,
            composed: true,
          })
        );
        this.errorMessage = ''; // Clear error message on success
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    } else {
      this.errorMessage = 'Please enter username and password.';
    }
    this.requestUpdate(); // Manually trigger an update
  }
}

customElements.define('authentication-component', AuthenticationComponent);