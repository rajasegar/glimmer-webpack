import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';



class PeopleList extends Component {
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
    <ul class="list">
  {{#each @people as |p|}}
    <li>
    <LinkTo @id={{p.uid}}>{{p.name}}</LinkTo>
    </li>
  {{/each}}
</ul>
    `
  ),
  PeopleList
);

export default PeopleList;
