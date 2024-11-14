import { LitElement, html, css } from 'lit';
export class FooterComponent extends LitElement {
    render() {
        return html `
      <footer>
        <p>&copy; 2023 My Company</p>
      </footer>
    `;
    }
}
FooterComponent.styles = css `
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
customElements.define('footer-component', FooterComponent);
