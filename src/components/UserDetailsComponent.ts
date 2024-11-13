import { LitElement, html, css } from 'lit';

class UserDetailsComponent extends LitElement {
  static get properties() {
    return {
      username: { type: String },
    };
  }

  declare username: string;

  static styles = css`
    /* Your styles here */
  `;

  render() {
    return html`
      <div>
        Welcome, ${this.username}!
      </div>
    `;
  }
}

customElements.define('user-details-component', UserDetailsComponent);