import React, { Component, PureComponent } from 'react';
import Pure from './PureComponent.js';
import RegComp from './RegComp.js';

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ashish'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'ashish'
      });
    }, 2000);
  }
  render() {
    console.log('parent component render');
    return (
      <div>
        ParentComponent
        <RegComp name={this.state.name} />
        <Pure name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
