import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

import { on, action } from '@glimmer/modifier';
import OtherComponent from '../OtherComponent.js';


class Home extends Component {
  message = 'hello world';
  @tracked count = 55;

  get currentLocale() {
    return getOwner(this).services.locale.currentLocale;
  }

  @action
  increment() {
    this.count++;
  }
}

const TemplateOnlyComponent = setComponentTemplate(
  createTemplate(`<h1>I am rendered by a template only component: {{@name}}</h1>`),
  templateOnlyComponent()
);


setComponentTemplate(
  createTemplate(
    { TemplateOnlyComponent, OtherComponent, on },
    `
      <p>{{this.count}}</p>
      <p>Curent Locale: {{this.currentLocale}}</p>
      <button {{on "click" this.increment}}>Increment</button>
      <TemplateOnlyComponent @name="Glimmer.js"/>
      <OtherComponent @count="22"/>
    `
  ),
  Home
);

export default Home;
