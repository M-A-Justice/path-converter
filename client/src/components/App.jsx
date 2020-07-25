import React from 'react';
import { Container, NavBar } from '../styles/App.style';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar />
      </Container>
    );
  }
}

export default App;
