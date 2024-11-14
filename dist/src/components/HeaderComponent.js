import { LitElement, html, css } from 'lit';
export class HeaderComponent extends LitElement {
    render() {
        return html `
      <header>
        <h1>My Web Components App</h1>
      </header>
    `;
    }
}
HeaderComponent.styles = css `
    header {
      background-color: #6200ee;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  `;
customElements.define('header-component', HeaderComponent);
