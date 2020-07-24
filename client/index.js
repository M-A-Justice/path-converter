// Input:
// C:\Users\m_a_j\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\VoidTest\db\001469.ldb
// Output:
// c/Users/m_a_j/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb

// only used for testing
const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.join(__dirname, 'path.txt')).toString('utf-8');

// TODO: RESEARCH TEMPLATE LITERALS WITH REGULAR EXPRESSIONS TO GET RID OF EXTRA CODE

// path validator function
const validPath = (path) => {
  // select file path selector for unix
  let validUnix = /(^[a-zA-Z]\/)?([\w-\.]+\/)+([\w-\.]+\.[a-zA-Z0-9]{1,4})$/gm;
  // select file path selector for windows
  let validWindows = /^([A-Z]:\\)?([\w-\.]+\\)+([\w-\.]+\.[a-zA-Z0-9]{1,4})$/gm;
  // if return for Unix regex match is the same length as the input path
  // if return for Windows regex match is the same length as the input path
  if (path.match(validWindows || validUnix)[0].length === path.length) {
    // return input path
    return path;
  }
  // if the filepath doesnt match regex parameters return false
  return false;
}

// function to change to a unix filepath
const updateUnixPath = (path) => {
  // replace windows drive and slashes
  path = path.replace(/([a-z])(:)/i, '$1').replace(/(\\+)/g, "/");
  // make the first character lowercase
  path = path.charAt(0).toLowerCase() + path.slice(1);
  // return the completed path
  return path;
}

// function to change to a windows path
const updateWindowsPath = (path) => {
  // replace unix drive and slashes
  path = path.replace(/([a-z])/i, '$1:').replace(/(\/+)/g, "\\");
  // make the first character uppercase
  path = path.charAt(0).toUpperCase() + path.slice(1);
  //return the completed path
  return path;
}

// function that checks which file path to switch to
const whichPath = (path) => {
  // const windows = /([a-z]:)/i;
  const unix = /([a-z]\/)/i;

  // if path is not valid return invalidity
  if (validPath(path) === false) {
    return 'Not a valid path';
  }
  // if path is not windows
  if (unix.test(path)) {
    // return windows path function result
    return updateWindowsPath(path);
    // otherwise
  } else {
    // return unix path function result
    return updateUnixPath(path);
  }
}

console.log(whichPath(text));
// console.log(validPath(text));