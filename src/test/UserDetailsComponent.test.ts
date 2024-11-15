import '../components/UserDetailsComponent';

describe('UserDetailsComponent', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('user-details-component') as HTMLElement;
    document.body.appendChild(element);
    (element as any).username = 'TestUser';
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders the initial step with the correct username', () => {
    (element as any).currentStep = 1;
    const startButton = element.shadowRoot?.querySelector('lion-button:not(.logout-button)');
    expect(startButton?.textContent?.trim()).toBe('Start');
  });
  

  it('transitions to step 2 and updates email', async () => {
    (element as any).currentStep = 2;
    await (element as any).updateComplete;
  
    const emailInput = element.shadowRoot?.querySelector('lion-input[label="Email"]');
    expect(emailInput).not.toBeNull();
  
    const emailField = emailInput as any;
    emailField.modelValue = 'test@example.com';
    emailField.dispatchEvent(new CustomEvent('model-value-changed', { bubbles: true }));
    await (element as any).updateComplete;
  
    expect((element as any).email).toBe('test@example.com');
  });  

  it('transitions to step 3 and updates phone number', async () => {
    (element as any).currentStep = 3;
    await (element as any).updateComplete;

    const phoneInput = element.shadowRoot?.querySelector('lion-input[label="Phone Number"]');
    expect(phoneInput).not.toBeNull();

    const phoneField = phoneInput as any;
    phoneField.modelValue = '1234567890';
    phoneField.dispatchEvent(new CustomEvent('model-value-changed', { bubbles: true }));
    await (element as any).updateComplete;

    expect((element as any).phoneNumber).toBe('1234567890');
  });

  it('completes the profile and displays summary', async () => {
    (element as any).currentStep = 4;
    (element as any).email = 'test@example.com';
    (element as any).phoneNumber = '1234567890';
    await (element as any).updateComplete;

    const summary = element.shadowRoot?.querySelector('ul');
    expect(summary).not.toBeNull();
    expect(summary?.textContent).toContain('Username: TestUser');
    expect(summary?.textContent).toContain('Email: test@example.com');
    expect(summary?.textContent).toContain('Phone Number: 1234567890');
  });

  it('dispatches logout event', async () => {
    const logoutButton = element.shadowRoot?.querySelector('.logout-button') as HTMLElement;

    const logoutEvent = new Promise((resolve) => {
      element.addEventListener('logout', (event) => resolve(event));
    });

    logoutButton.click();
    const event = await logoutEvent;

    expect(event).toBeDefined();
  });
});
