import { LitElement, html, css } from 'lit';

class UserDetailsComponent extends LitElement {
  static get properties() {
    return {
      username: { type: String },
    };
  }

  declare username: string;

  static styles = css`
    .user-details-card {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: 'Roboto', sans-serif;
    }
    h2 {
      color: #333;
      margin-top: 0;
    }
    lion-input {
      margin-bottom: 1rem;
    }
    lion-button {
      margin-top: 1.5rem;
      background-color: #d32f2f;
      color: #fff;
    }
    lion-button::part(button) {
      background-color: #d32f2f;
      color: #fff;
    }
  `;

  render() {
    return html`
      <div class="user-details-card">
        <h2>Welcome, ${this.username}!</h2>
        <p>Here is your account information:</p>
        <lion-form>
          <form>
            <lion-fieldset name="user-details">
              <lion-input
                label="Username"
                .modelValue=${this.username}
                readonly
              ></lion-input>
              <lion-input
                label="Email"
                modelValue="user@example.com"
                readonly
              ></lion-input>
              <lion-input
                label="Member Since"
                modelValue="January 1, 2021"
                readonly
              ></lion-input>
            </lion-fieldset>
          </form>
        </lion-form>
        <lion-button @click=${this.handleLogout}>Logout</lion-button>
      </div>
    `;
  }

  handleLogout() {
    this.dispatchEvent(
      new CustomEvent('logout', {
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('user-details-component', UserDetailsComponent);
