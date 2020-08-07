// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from 'react';
// import { ReactSortable } from 'react-sortablejs';
// import { Swappable, Trash } from '../styles/Draggables.style';

// const Draggables = ({ filePaths }) => {
//   const [paths, setPaths] = useState([]);

//   if (JSON.stringify(filePaths) !== JSON.stringify(paths)) {
//     filePaths.forEach((filePath) => {
//       if (!paths.includes(filePath)) {
//         paths.push(filePath);
//       }
//     });
//   }

//   useEffect(() => {
//     setPaths(paths);
//   }, [paths]);

//   return (
//     <ReactSortable
//       list={paths}
//       setList={setPaths}
//       group="filePaths"
//       animation={200}
//       delay={2}
//     >
//       {paths.map((path) => (
//         <Swappable key={path.id}>
//           {path.path}
//           <Trash />
//         </Swappable>
//       ))}
//     </ReactSortable>
//   );
// };

// export default Draggables;

import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';

const Draggables = () => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage).sort((a, b) => b - a);
    let count = 0;
    if (keys !== undefined) {
      keys.forEach((element) => {
        paths.push({ id: count, path: localStorage[element] });
        count += 1;
      });
    }
    setPaths(paths);
  }, []);

  return (
    <ReactSortable
      list={paths}
      setList={setPaths}
      group="filePaths"
      animation={200}
      delay={2}
    >
      {paths.map((path) => (
        <div key={path.id}>{path.path}</div>
      ))}
    </ReactSortable>
  );
};

export default Draggables;