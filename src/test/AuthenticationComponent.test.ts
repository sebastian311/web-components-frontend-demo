import '../components/AuthenticationComponent';

describe('AuthenticationComponent', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('authentication-component') as HTMLElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.removeChild(element);
  });

  it('renders the login form', () => {
    const header = element.shadowRoot?.querySelector('h2');
    expect(header).not.toBeNull();
    expect(header?.textContent?.trim()).toBe('Login');
  });

  it('renders two inputs and a button', () => {
    const inputs = element.shadowRoot?.querySelectorAll('lion-input');
    const button = element.shadowRoot?.querySelector('lion-button');
    expect(inputs?.length).toBe(2);
    expect(button).not.toBeNull();
    expect(button?.textContent?.trim()).toBe('Login');
  });

  it('displays error message for missing credentials', async () => {
    const button = element.shadowRoot?.querySelector('lion-button') as HTMLElement;
    button.click();
    await (element as any).updateComplete;

    const errorMessage = element.shadowRoot?.querySelector('.error-message');
    expect(errorMessage).not.toBeNull();
    expect(errorMessage?.textContent?.trim()).toBe('Please enter username and password.');
  });

  it('dispatches login event with valid credentials', async () => {
    const usernameInput = element.shadowRoot?.querySelector('lion-input[label="Username"]') as any;
    const passwordInput = element.shadowRoot?.querySelector('lion-input[label="Password"]') as any;

    usernameInput.modelValue = 'admin';
    usernameInput.dispatchEvent(new CustomEvent('model-value-changed', { bubbles: true }));

    passwordInput.modelValue = 'password';
    passwordInput.dispatchEvent(new CustomEvent('model-value-changed', { bubbles: true }));

    const button = element.shadowRoot?.querySelector('lion-button') as HTMLElement;

    const loginEvent = new Promise((resolve) => {
      element.addEventListener('login', (event) => resolve(event));
    });

    button.click();
    const event = await loginEvent;

    expect(event).toBeDefined();
    expect((event as CustomEvent).detail.username).toBe('admin');
  });
});
