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
  const { paths } = props;
  const { setPaths } = props;

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
          <TrashContainer>
            <TrashCan />
          </TrashContainer>
        </Swappable>
      ))}
    </ReactSortable>
  );
};

export default Draggables;
