import React from 'react';

const DescriptionList = () => {
    return (
        <div className="description">
        <ul> 
          <li>Feststoffe: schwarze Buchstaben</li>
          <li>Flüssigkeiten: blaue Buchstaben</li>
          <li>Gase: rote Buchstaben</li>
        </ul>
        <ul>
          <li>Alkalimetalle: roter Hintergrund</li>
          <li>Erdalkalimetalle: gelber Hintergrund</li>
          <li>Übergangsmetalle: grüner Hintergrund</li>
          <li>Lanthanoide: pinker Hintergrund</li>
          <li>Actionoide: schwarzer Hintergrund</li>
          </ul>
          <ul>
          <li>Metalle: oranger Hintergrund</li>
          <li>Halbmetalle: orangeroter Hintergrund</li>
          <li>Nichtmetalle: hellblau Hintergrund</li>
          <li>Halogen: hellgrüner Hintergrund</li>
          <li>Edelgase: gelbgrüner Hintergrund</li>
        </ul>
        </div>
    );
}

export default DescriptionList;