import React, { Component } from 'react';

import ElementList from '../containers/element-list';
import ElementDetail from '../containers/element-detail';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Periodensystem</h1>
      <ElementList />
      <ElementDetail />
      </div>
    );
  }
}
