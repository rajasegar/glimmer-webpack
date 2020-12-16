import { renderComponent } from '@glimmer/core';
import MyComponent from './MyComponent.js';
import LocaleService from './services/LocaleService.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(MyComponent, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
        },
      },
    });
  },
  { once: true }
);
