import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../src/UserDetailsComponent.ts';
import { UserDetailsComponent } from '../components/UserDetailsComponent.js';

describe('UserDetailsComponent', () => {
  let element: UserDetailsComponent;

  beforeEach(async () => {
    element = await fixture<UserDetailsComponent>(
      html`<user-details-component username="TestUser"></user-details-component>`
    );
  });

  it('should be instantiated', () => {
    expect(element).to.be.instanceOf(UserDetailsComponent);
  });

  it('should have the correct initial state', () => {
    expect(element.username).to.equal('TestUser');
    expect(element.currentStep).to.equal(1);
    expect(element.email).to.equal('');
    expect(element.phoneNumber).to.equal('');
  });

  it('should render step 1 correctly', () => {
    const header = element.shadowRoot?.querySelector('h2');
    expect(header?.textContent).to.equal('Complete Your Profile');

    const paragraph = element.shadowRoot?.querySelector('p');
    expect(paragraph?.textContent).to.contain("Welcome, TestUser! Let's complete your profile.");

    const startButton = element.shadowRoot?.querySelector('lion-button');
    expect(startButton).to.exist;
    expect(startButton?.textContent?.trim()).to.equal('Start');
  });

  it('should navigate to step 2 when Start is clicked', async () => {
    const startButton = element.shadowRoot?.querySelector('lion-button') as HTMLElement;
    startButton.click();
    await element.updateComplete;

    expect(element.currentStep).to.equal(2);

    const emailInput = element.shadowRoot?.querySelector('lion-input[label="Email"]');
    expect(emailInput).to.exist;
  });

  it('should update email property when input changes', async () => {
    // Navigate to step 2
    element.nextStep();
    await element.updateComplete;

    const emailInput = element.shadowRoot?.querySelector('lion-input[label="Email"]') as any;
    emailInput.modelValue = 'test@example.com';
    emailInput.dispatchEvent(new CustomEvent('model-value-changed'));
    await element.updateComplete;

    expect(element.email).to.equal('test@example.com');
  });

  it('should navigate to step 3 when Next is clicked on step 2', async () => {
    // Navigate to step 2
    element.nextStep();
    await element.updateComplete;

    // Set email to pass validation
    element.email = 'test@example.com';

    const nextButton = element.shadowRoot?.querySelector('.buttons lion-button:last-child') as HTMLElement;
    nextButton.click();
    await element.updateComplete;

    expect(element.currentStep).to.equal(3);

    const phoneInput = element.shadowRoot?.querySelector('lion-input[label="Phone Number"]');
    expect(phoneInput).to.exist;
  });

  it('should update phoneNumber property when input changes', async () => {
    // Navigate to step 3
    element.currentStep = 3;
    await element.updateComplete;

    const phoneInput = element.shadowRoot?.querySelector('lion-input[label="Phone Number"]') as any;
    phoneInput.modelValue = '1234567890';
    phoneInput.dispatchEvent(new CustomEvent('model-value-changed'));
    await element.updateComplete;

    expect(element.phoneNumber).to.equal('1234567890');
  });

  it('should display completion message on finishing the steps', async () => {
    // Simulate completing steps
    element.currentStep = 3;
    element.email = 'test@example.com';
    element.phoneNumber = '1234567890';
    await element.updateComplete;

    // Click Next to finish
    const finishButton = element.shadowRoot?.querySelector('.buttons lion-button:last-child') as HTMLElement;
    finishButton.click();
    await element.updateComplete;

    expect(element.currentStep).to.equal(4);

    const completionMessage = element.shadowRoot?.querySelector('p');
    expect(completionMessage?.textContent).to.contain('Thank you for completing your profile!');
  });

  it('should dispatch logout event when Logout is clicked', async () => {
    const logoutButton = element.shadowRoot?.querySelector('.logout-button') as HTMLElement;

    setTimeout(() => logoutButton.click());
    const event = await oneEvent(element, 'logout');

    expect(event).to.exist;
  });
});