import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';
import RouterService from './services/RouterService.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

const root = 'single-spa-application:@glimmer-mf/people';
const owner = {
  services: {
    locale: new LocaleService('en_US'),
    router: new RouterService()
  }
};
const glimmerLifecycles = singleSpaGlimmer({
  App,
  renderComponent,
  root,
  owner
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;


