import React from 'react';
import PathForm from './PathForm';
import { whichPath, validPath } from '../../../server/scripts/index';
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
      storage: 0,
    };

    this.pathConvert = this.pathConvert.bind(this);
  }

  componentDidMount() {
    const local = window.localStorage.length;
    this.setState({ storage: local });
  }

  pathConvert(value) {
    const path = whichPath(value);
    const { storage } = this.state;
    const temp = {};
    temp.path = path;
    temp.storage = storage;
    navigator.clipboard.writeText(path)
      .then(() => {
        temp.storage += 1;
        if (validPath(path)) {
          window.localStorage[storage] = path;
        }
        this.setState(temp);
      })
      .catch(() => {
        this.setState({ path: whichPath(value) });
      });
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
