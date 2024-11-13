import { LitElement, html } from 'lit';

class AuthenticationComponent extends LitElement {
  private username: string = '';
  private password: string = '';

  render() {
    return html`
      <div class="auth-container">
        <h2>Login</h2>
        <lion-input
          label="Username"
          @input=${this.handleUsernameInput}
        ></lion-input>
        <lion-input
          type="password"
          label="Password"
          @input=${this.handlePasswordInput}
        ></lion-input>
        <lion-button @click=${this.handleLogin}>Login</lion-button>
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
    if (this.username && this.password) {
      this.dispatchEvent(
        new CustomEvent('login', {
          detail: { username: this.username },
          bubbles: true,
          composed: true,
        })
      );
    } else {
      alert('Please enter username and password');
    }
  }
}

customElements.define('authentication-component', AuthenticationComponent);