import { LitElement, html, css } from 'lit';
export class UserDetailsComponent extends LitElement {
    static get properties() {
        return {
            username: { type: String },
            currentStep: { type: Number },
            email: { type: String },
            phoneNumber: { type: String },
        };
    }
    constructor() {
        super();
        this.currentStep = 1;
        this.email = '';
        this.phoneNumber = '';
    }
    render() {
        return html `
      <div class="user-details-card">
        <div class="header">
          <h2>Complete Your Profile</h2>
          <lion-button class="logout-button" @click=${this.handleLogout}>Logout</lion-button>
        </div>
        ${this.renderStepper()}
      </div>
    `;
    }
    renderStepper() {
        switch (this.currentStep) {
            case 1:
                return this.renderStep1();
            case 2:
                return this.renderStep2();
            case 3:
                return this.renderStep3();
            default:
                return this.renderCompletion();
        }
    }
    renderStep1() {
        return html `
      <p>Welcome, ${this.username}! Let's complete your profile.</p>
      <lion-button @click=${this.nextStep}>Start</lion-button>
    `;
    }
    renderStep2() {
        return html `
      <p>Please provide your email address:</p>
      <lion-input
        label="Email"
        .modelValue=${this.email}
        @model-value-changed=${this.handleEmailInput}
      ></lion-input>
      <div class="buttons">
        <lion-button @click=${this.prevStep}>Back</lion-button>
        <lion-button @click=${this.nextStep}>Next</lion-button>
      </div>
    `;
    }
    renderStep3() {
        return html `
      <p>Please provide additional information:</p>
      <lion-input
        label="Phone Number"
        .modelValue=${this.phoneNumber}
        @model-value-changed=${this.handlePhoneInput}
      ></lion-input>
      <div class="buttons">
        <lion-button @click=${this.prevStep}>Back</lion-button>
        <lion-button @click=${this.nextStep}>Finish</lion-button>
      </div>
    `;
    }
    renderCompletion() {
        return html `
      <p>Thank you for completing your profile!</p>
      <p>Here is the information you provided:</p>
      <ul>
        <li><strong>Username:</strong> ${this.username}</li>
        <li><strong>Email:</strong> ${this.email}</li>
        <li><strong>Phone Number:</strong> ${this.phoneNumber}</li>
      </ul>
    `;
    }
    handleEmailInput(e) {
        const inputEl = e.composedPath()[0];
        this.email = inputEl.modelValue;
    }
    handlePhoneInput(e) {
        const inputEl = e.composedPath()[0];
        this.phoneNumber = inputEl.modelValue;
    }
    nextStep() {
        if (this.currentStep < 4) {
            this.currentStep += 1;
        }
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
        }
    }
    handleLogout() {
        this.dispatchEvent(new CustomEvent('logout', {
            bubbles: true,
            composed: true,
        }));
    }
}
UserDetailsComponent.styles = css `
    .user-details-card {
      position: relative;
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: 'Roboto', sans-serif;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logout-button {
      background-color: #d32f2f;
      color: #fff;
    }

    .logout-button::part(button) {
      background-color: #d32f2f;
      color: #fff;
    }

    h2 {
      color: #333;
      margin-top: 0;
    }

    p {
      color: #555;
      font-size: 1rem;
    }

    lion-input {
      margin-bottom: 1rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    .buttons lion-button {
      flex: 1;
      margin: 0 0.5rem;
    }

    .buttons lion-button:first-child {
      margin-left: 0;
    }

    .buttons lion-button:last-child {
      margin-right: 0;
    }
  `;
customElements.define('user-details-component', UserDetailsComponent);
