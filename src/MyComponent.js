import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

import { on, action } from '@glimmer/modifier';
import OtherComponent from './OtherComponent.js';
import { fn as helper } from '@glimmer/helper';

import './MyComponent.css';
import logo from './logo.svg';

const myHelper = helper(function (name, greeting) {
  return `Helper:   ${greeting} ${name}`;
});

class MyComponent extends Component {
  logo = logo;
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
    { myHelper, TemplateOnlyComponent, OtherComponent, on },
    `
      <img src={{this.logo}} width="128"/>
      <h1>Hello {{this.message}}</h1> <br/>
      <p>{{this.count}}</p>
      <p> {{myHelper "foo" "hello" }}</p>
      <p>Current Locale: {{this.currentLocale}}</p>
      <button {{on "click" this.increment}}>Increment</button>
      <TemplateOnlyComponent @name="Glimmer"/>
      <OtherComponent @count="22"/>
    `
  ),
  MyComponent
);

export default MyComponent;
