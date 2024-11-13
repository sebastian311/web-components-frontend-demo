import { LitElement, html, css } from 'lit';

class UserDetailsComponent extends LitElement {
  static styles = css`
    .user-details {
      max-width: 300px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: white;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <div class="user-details">
        <h3>User Details</h3>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
    `;
  }
}

customElements.define('user-details-component', UserDetailsComponent);