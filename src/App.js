import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import PeopleList from './PeopleList.js';

class App extends Component {
  @tracked people = [];
  @tracked current;

  constructor() {
    super(...arguments);
    (async () => {
      let response = await fetch('https://www.swapi.tech/api/people/');
      let data = await response.json();
      this.people = data.results;

      console.log(location.pathname);
      const [,,id] = location.pathname.split('/');
      if(id) {

       response = await fetch(`https://www.swapi.tech/api/people/${id}`);
       data = await response.json();
        console.log(data);
        this.current = data.result.properties;
      }
    })();
  }
  
}


setComponentTemplate(
  createTemplate(
    { PeopleList },
    `
    <div class="grid">
  <div class="left-panel">
  <PeopleList @people={{this.people}} />
  </div>
  <div class="right-panel">
  <h2>{{this.current.name}}</h2>
  </div>
</div>
    `
  ),
  App
);

export default App;
