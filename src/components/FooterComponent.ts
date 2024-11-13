import { LitElement, html, css } from 'lit';

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      background-color: #6200ee;
      color: white;
      padding: 1rem;
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2023 My Company</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);