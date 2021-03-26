/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PathForm from './PathForm';
import Draggables from './Draggables';
import CopyModal from './CopyModal';
import Header from './Header';
import { whichPath } from '../../../server/scripts/index';
import Container from '../styles/App.style';

const App = () => {
  const initState = [];

  const [path, setPath] = useState('');
  const [paths, setPaths] = useState(initState);
  const [openCopy, setOpenCopy] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

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
          const toOpenCopy = !openCopy;
          setOpenCopy(toOpenCopy);
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
      <Header openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <PathForm pathConvert={pathConvert} />
      <Draggables
        setPath={setPath}
        openCopy={openCopy}
        setOpenCopy={setOpenCopy}
        path={path}
        paths={paths}
        setPaths={setPaths}
      />
      {openCopy ? <CopyModal path={path} openCopy={openCopy} setOpenCopy={setOpenCopy} /> : <div />}
    </Container>
  );
};

export default App;
