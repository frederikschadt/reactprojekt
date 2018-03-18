import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectElement } from '../actions/index';
import { bindActionCreators } from 'redux';

class ElementList extends Component {

  renderList(start, end) {
    const row = this.props.elements.filter((element) => {return element.ordnungszahl > start && element.ordnungszahl <= end;});


    return row.map((element) => {
      return (
<div className={element.aggregatszustand}>
        <li
          key={element.ordnungszahl}
          onClick={() => this.props.selectElement(element)}
          className={element.serie}>
          {element.symbol}
        </li>
</div>
      );
    });
  }

  renderEmptyList(length) {
    const helpArr = [];  
    for(let i = 0; i < length; i++) {
        helpArr[i] = i;
    }
    return helpArr.map((element) => {
       return (
        <li>
        &nbsp;
        </li>
       );
    });
  }

  render() {
    return (
      <ul className="content__list">
      {this.renderList(0, 1)}
      {this.renderEmptyList(16)}
      {this.renderList(1, 2)}
      {this.renderList(2, 4)}
      {this.renderEmptyList(10)}
      {this.renderList(4, 10)}
      {this.renderList(10, 12)}
      {this.renderEmptyList(10)}
      {this.renderList(12, 18)}
      {this.renderList(18, 36)}
      {this.renderList(36, 54)}
      {this.renderList(54, 56)}
      {this.renderEmptyList(1)}
      {this.renderList(71, 86)}
      {this.renderList(86, 88)}
      {this.renderEmptyList(1)}
      {this.renderList(103, 118)}
      </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    elements: state.elements
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectElement: selectElement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementList);
