import React from 'react';
import PathForm from './PathForm';
import whichPath from '../../index';
import {
  Container,
  NavBar,
  Title,
  NavCenter,
  Emblem,
  Display,
  FormContainer,
  Instructions,
} from '../styles/App.style';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
    };

    this.pathConvert = this.pathConvert.bind(this);
  }

  pathConvert(value) {
    this.setState({ path: whichPath(value) });
  }

  render() {
    const { path } = this.state;
    return (
      <Container>
        <NavBar>
          <Title />
          <NavCenter>
            <Display>Stuff n Things</Display>
          </NavCenter>
          <Emblem />
        </NavBar>
        <hr />
        <FormContainer>
          <Instructions>Chicken</Instructions>
          <PathForm pathConvert={this.pathConvert} />
          <div>{path}</div>
        </FormContainer>
        <hr />
      </Container>
    );
  }
}

export default App;
