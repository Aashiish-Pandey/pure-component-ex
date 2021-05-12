import React, { PureComponent } from 'react';

class Pure extends PureComponent {
  render() {
    console.log('pure component render');
    return <div>Pure</div>;
  }
}

export default Pure;
