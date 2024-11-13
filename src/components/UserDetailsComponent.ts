import { LitElement, html, css } from 'lit';
import { LionButton } from '@lion/button';

customElements.define('lion-button', LionButton);

class UserDetailsComponent extends LitElement {
  static styles = css`
    /* Your styles here */
  `;

  // Receive username from parent
  static properties = {
    username: { type: String },
  };

  username = '';

  render() {
    return html`
      <div class="user-details">
        <h3>User Details</h3>
        <p>Name: ${this.username}</p>
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