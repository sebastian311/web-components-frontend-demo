// register-elements.ts
import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';
import { LionFieldset } from '@lion/fieldset';

if (!customElements.get('lion-input')) {
  customElements.define('lion-input', LionInput);
}

if (!customElements.get('lion-button')) {
  customElements.define('lion-button', LionButton);
}

if (!customElements.get('lion-fieldset')) {
  customElements.define('lion-fieldset', LionFieldset);
}