import '../components/HeaderComponent';
describe('HeaderComponent', () => {
    let element;
    beforeEach(() => {
        // Directly create an instance of HeaderComponent
        element = document.createElement('header-component');
        document.body.appendChild(element);
    });
    afterEach(() => {
        // Clean up after each test
        document.body.removeChild(element);
    });
    it('should render the header', () => {
        const header = element.shadowRoot?.querySelector('header');
        expect(header).not.toBeNull();
        expect(header?.textContent).toContain('My Web Components App');
    });
});
