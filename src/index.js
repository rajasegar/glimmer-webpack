import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

const element = document.getElementById('people');
const glimmerLifecycles = singleSpaGlimmer({
  App,
  renderComponent,
  element,
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;


