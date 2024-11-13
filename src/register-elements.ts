import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';

if (!customElements.get('lion-input')) {
  customElements.define('lion-input', LionInput);
}

if (!customElements.get('lion-button')) {
  customElements.define('lion-button', LionButton);
}