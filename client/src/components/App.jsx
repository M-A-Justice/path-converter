// import React from 'react';
// import PathForm from './PathForm';
// import Draggables from './Draggables';
// import { whichPath } from '../../../server/scripts/index';
// import {
//   Container,
//   NavBar,
//   Title,
//   NavCenter,
//   Emblem,
//   Display,
//   FormContainer,
//   Instructions,
// } from '../styles/App.style';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       path: '',
//       storage: 0,
//       filePaths: [],
//     };

//     this.pathConvert = this.pathConvert.bind(this);
//   }

//   componentDidMount() {
//     const local = window.localStorage.length;
//     const keys = Object.keys(localStorage).sort((a, b) => b - a);
//     const filePaths = [];
//     let count = 0;
//     if (keys !== undefined) {
//       keys.forEach((element) => {
//         filePaths.push({ id: count, path: localStorage[element] });
//         count += 1;
//       });
//     }
//     this.setState({ storage: local, filePaths });
//   }

//   pathConvert(value) {
//     const path = whichPath(value);
//     const { storage, filePaths } = this.state;
//     const temp = {};
//     temp.path = path;
//     temp.storage = storage;
//     temp.filePaths = filePaths;
//     navigator.clipboard.writeText(path)
//       .then(() => {
//         if (path !== 'Not a valid path') {
//           temp.filePaths.push({ id: storage, path });
//           temp.storage += 1;
//           window.localStorage[storage] = path;
//         }
//         this.setState(temp);
//       })
//       .catch(() => {
//         this.setState({ path });
//       });
//   }

//   render() {
//     const { path, filePaths } = this.state;
//     return (
//       <Container>
//         <NavBar>
//           <Title />
//           <NavCenter>
//             <Display>Stuff n Things</Display>
//           </NavCenter>
//           <Emblem />
//         </NavBar>
//         <hr />
//         <FormContainer>
//           <Instructions>Chicken</Instructions>
//           <PathForm pathConvert={this.pathConvert} />
//           <div>{path}</div>
//         </FormContainer>
//         <hr />
//         <Draggables filePaths={filePaths} />
//       </Container>
//     );
//   }
// }

// export default App;

import React from 'react';
// import Draggable, {DraggableCore} from 'react-draggable';
import PathForm from './PathForm';
import Draggables from './Draggables';
import { whichPath } from '../../../server/scripts/index';
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
        if (path !== 'Not a valid path') {
          temp.storage += 1;
          window.localStorage[storage] = path;
        }
        this.setState(temp);
      })
      .catch(() => {
        this.setState({ path });
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
        <Draggables />
      </Container>
    );
  }
}
export default App;
