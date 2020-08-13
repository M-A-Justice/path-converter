/* eslint-disable react/prop-types */
import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Swappable, Trash } from '../styles/Draggables.style';

const Draggables = (props) => {
  const { paths } = props;
  const { setPaths } = props;

  return (
    <ReactSortable
      list={paths}
      group="filePaths"
      setList={setPaths}
      animation={200}
      delay={2}
    >
      {paths.map((path) => (
        <Swappable key={path.id}>
          {path.path}
          <Trash />
        </Swappable>
      ))}
    </ReactSortable>
  );
};

export default Draggables;
