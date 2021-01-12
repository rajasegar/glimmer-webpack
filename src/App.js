import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import PeopleList from './PeopleList.js';
import { Route, Router } from './GlimmerRouter.js';

class App extends Component {
  @tracked people = [];

  constructor() {
    super(...arguments);
    (async () => {
      let response = await fetch('https://www.swapi.tech/api/people/');
      let data = await response.json();
      this.people = data.results;
    })();
  }
  
}


setComponentTemplate(
  createTemplate(
    { PeopleList, Route, Router },
    `
    <div class="grid">
  <div class="left-panel">
  <PeopleList @people={{this.people}} />
  </div>
  <div class="right-panel">
  <Route @path="/:id" @component="PeopleInfo"/>
  <Router/>
  </div>
</div>
    `
  ),
  App
);

export default App;
