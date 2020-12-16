import { renderComponent } from '@glimmer/core';
import MyComponent from './MyComponent.js';
import LocaleService from './services/LocaleService.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

/*
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
*/

const element = document.getElementById('single-spa-application:@dcx/navbar');
const glimmerLifecycles = singleSpaGlimmer({
  App: MyComponent,
  renderComponent,
  element,
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;


