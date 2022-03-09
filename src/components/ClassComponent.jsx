import React, { Component } from 'react';

export default class ClassComponent extends Component {
  render() {
    const { name, isOnList } = this.props;

    return (
      <li>
        {name} {isOnList ? 'is' : 'is not'} invited to the party
      </li>
    );
  }
}
