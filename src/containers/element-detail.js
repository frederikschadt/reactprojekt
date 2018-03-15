import React, { Component } from 'react';
import { connect } from 'react-redux';


class ElementDetail extends Component {
  render() {
    if (!this.props.element) {
      return <div>Wähle ein Element aus.</div>;
    }

    return (
      <div>
      <h3>Beschreibung:</h3>
      <div>Name: {this.props.element.name}</div>
      <div>Ordnungszahl: {this.props.element.ordnungszahl}</div>
      <div>Symbol: {this.props.element.symbol}</div>
      <div>Atomgewicht: {this.props.element.atomgewicht}</div>
      <div>Elektronenkonfiguration: {this.props.element.elektKonf}</div>
      <div>Elektronegativität: {this.props.element.elektNeg}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    element: state.activeElement
  };
}

export default connect(mapStateToProps)(ElementDetail);
