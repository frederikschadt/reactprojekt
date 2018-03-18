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
      <ul className="description">
        <li>Alkalimetalle: roter Hintergrund</li>
        <li>Erdalkalimetalle: gelber Hintergrund</li>
        <li>Übergangsmetalle: grüner Hintergrund</li>
        <li>Lanthanoide: pinker Hintergrund</li>
        <li>Actionoide: schwarzer Hintergrund</li>
        <li>Metalle: oranger Hintergrund</li>
        <li>Halbmetalle: orangeroter Hintergrund</li>
        <li>Nichtmetalle: hellblau Hintergrund</li>
        <li>Halogen: hellgrüner Hintergrund</li>
        <li>Edelgase: gelbgrüner Hintergrund</li>
      </ul>
      </div>
    );
  }
}
