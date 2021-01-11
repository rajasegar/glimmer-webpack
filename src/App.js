import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


class App extends Component {
  
}


setComponentTemplate(
  createTemplate(
    {  },
    `
    <h1>People MFE</h1>
    `
  ),
  App
);

export default App;
