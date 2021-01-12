import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';



class PeopleInfo extends Component {
  @tracked current;

  constructor() {
    super(...arguments);
    const { params: { id }} = this.args.ctx;
    (async () => {
       const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
       const data = await response.json();
        this.current = data.result.properties;
    })();

  }
}

class LinkTo extends Component {
  get href() {
    return `/people/${this.args.id}`;
  }
}

setComponentTemplate(createTemplate(
  `<a href={{this.href}}>{{yield}}</a>`
), LinkTo);


setComponentTemplate(
  createTemplate(
    { LinkTo },
    `
    <h3>{{this.current.name}}</h3>
<table>
  <tr>
    <td>Height</td>
    <td>{{this.current.height}}</td>
  </tr>
  <tr>
    <td>Mass:</td>
    <td>{{this.current.mass}}</td>
  </tr>
  <tr>
    <td>Hair Color:</td>
    <td>{{this.current.hair_color}}</td>
  </tr>
  <tr>
    <td>Skin Color:</td>
    <td>{{this.current.skin_color}}</td>
  </tr>
  <tr>
    <td>Eye Color:</td>
    <td>{{this.current.eye_color}}</td>
  </tr>
  <tr>
    <td>Birth Year:</td>
    <td>{{this.current.birth_year}}</td>
  </tr>
  <tr>
    <td>Gender:</td>
    <td>{{this.current.gender}}</td>
  </tr>
  </table>
    `
  ),
  PeopleInfo
);

export default PeopleInfo;
