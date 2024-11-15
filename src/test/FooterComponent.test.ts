import '../components/FooterComponent';

describe('FooterComponent', () => {
  let element: HTMLElement;

  beforeEach(() => {
    // Directly create an instance of FooterComponent
    element = document.createElement('footer-component') as HTMLElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.removeChild(element);
  });

  it('renders the footer with correct text', () => {
    const footer = element.shadowRoot?.querySelector('footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('© 2023 My Company');
  });
});
