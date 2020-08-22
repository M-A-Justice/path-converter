/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PathForm from './PathForm';
import Draggables from './Draggables';
import Modal from './Modal';
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const copyOfPaths = [...paths];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const storedVal = localStorage[i];
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
          const toOpen = !open;
          setOpen(toOpen);
        })
        .catch(() => {
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
        {open ? <Modal path={path} open={open} setOpen={setOpen} /> : <div />}
      </FormContainer>
      <hr />
      <Draggables path={path} paths={paths} setPaths={setPaths} />
    </Container>
  );
};

export default App;
