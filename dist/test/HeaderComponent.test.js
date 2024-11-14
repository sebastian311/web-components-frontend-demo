import { expect, fixture, html } from '@open-wc/testing';
import '../src/components/HeaderComponent.js';
describe('HeaderComponent', () => {
    it('should render the header', async () => {
        const el = await fixture(html `<header-component></header-component>`);
        const header = el.shadowRoot?.querySelector('header');
        expect(header).to.exist;
        expect(header?.textContent).to.include('My Web Components App');
    });
});
