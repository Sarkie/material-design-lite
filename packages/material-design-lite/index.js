import BaseComponent from 'mdl-base-component';
import Checkbox from 'mdl-checkbox';
import autoInit from 'mdl-auto-init';

console.info('Hello, MDL!!!');

// Register all components
autoInit.register('MDLCheckbox', Checkbox);

// Export all components.
export {
  BaseComponent,
  Checkbox,
  autoInit
};
