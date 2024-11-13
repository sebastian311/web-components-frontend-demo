import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {
  static styles = css`
    header {
      background-color: #6200ee;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
        <h1>My Web Components App</h1>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);