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
    .user-details-card h2 {
      margin-top: 0;
      color: #333;
    }
    .user-details-card p {
      color: #555;
      font-size: 1rem;
      line-height: 1.5;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .user-info div {
      display: flex;
    }
    .user-info label {
      font-weight: bold;
      width: 120px;
      color: #333;
    }
    .user-info span {
      color: #555;
    }
  `;

  render() {
    return html`
      <div class="user-details-card">
        <h2>Welcome, ${this.username}!</h2>
        <p>Here is your account information:</p>
        <div class="user-info">
          <div>
            <label>Username:</label>
            <span>${this.username}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>user@example.com</span>
          </div>
          <div>
            <label>Member Since:</label>
            <span>January 1, 2021</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('user-details-component', UserDetailsComponent);