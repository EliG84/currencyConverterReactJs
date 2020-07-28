import React from 'react';
import ExchangeMain from './Components/ExchangeMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ExchangeMain />
      </React.Fragment>
    );
  }
}

export default App;
