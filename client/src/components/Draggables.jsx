/* eslint-disable react/prop-types */
import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import {
  Swappable,
  TrashContainer,
  PathContainer,
  TrashCan,
} from '../styles/Draggables.style';

const Draggables = (props) => {
  const { paths, setPaths } = props;

  const handleClick = (e) => {
    let data = e.target.parentNode;
    while (data.dataset.id === undefined) {
      data = data.parentNode;
    }
    let { id } = data.dataset;
    const tempState = [];

    id = Number(id);

    localStorage.clear();
    paths.forEach((path) => {
      if (path.id !== id) {
        if (path.id > id) {
          const tempObj = path;
          tempObj.id -= 1;
          tempState.push(tempObj);
        } else {
          tempState.push(path);
        }
      }
    });
    tempState.forEach((path) => {
      localStorage[path.id] = path.path;
    });
    setPaths(tempState);
  };

  return (
    <ReactSortable
      className="sortable"
      list={paths}
      group="filePaths"
      setList={setPaths}
      animation={200}
      delay={2}
    >
      {paths.map((path) => (
        <Swappable key={path.id}>
          <PathContainer>
            {path.path}
          </PathContainer>
          <TrashContainer onClick={handleClick}>
            <TrashCan />
          </TrashContainer>
        </Swappable>
      ))}
    </ReactSortable>
  );
};

export default Draggables;
