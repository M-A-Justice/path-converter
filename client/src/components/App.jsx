/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
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

const App = () => {
  const initState = [];

  const [path, setPath] = useState('');
  const [paths, setPaths] = useState(initState);

  useEffect(() => {
    const copyOfPaths = [...paths];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const storedVal = localStorage.getItem(localStorage.key(i));
      copyOfPaths.push({
        id: i,
        path: storedVal,
      });
    }
    setPaths(copyOfPaths);
  }, []);

  const pathConvert = (value) => {
    const filePath = whichPath(value);
    setPath(filePath);
    if (filePath !== 'Please enter a file path' && filePath !== 'Not a valid path') {
      navigator.clipboard.writeText(filePath)
        .then(() => {
          // activate modal
          console.log(`${filePath} successfully copied`);
        })
        .catch(() => {
          // sad face
          console.log(`Unable to copy ${filePath}`);
        });
      const pathsCopy = [...paths];
      const nextIdx = window.localStorage.length;
      const newPath = {
        id: nextIdx,
        path: filePath,
      };
      pathsCopy.push(newPath);
      setPaths(pathsCopy);
      window.localStorage.setItem(nextIdx, filePath);
    }
  };

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
        <PathForm pathConvert={pathConvert} />
        <div>{path}</div>
      </FormContainer>
      <hr />
      <Draggables path={path} paths={paths} setPaths={setPaths} />
    </Container>
  );
};

export default App;
