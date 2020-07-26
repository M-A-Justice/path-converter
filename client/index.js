/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

// Input:
// C:\Users\m_a_j\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\VoidTest\db\001469.ldb
// Output:
// c/Users/m_a_j/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb

/* ********* ONLY USED FOR TESTING ************
const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'path.txt')).toString('utf-8');
********************************************* */

// TODO: RESEARCH TEMPLATE LITERALS WITH REGULAR EXPRESSIONS TO GET RID OF EXTRA CODE

// filePath validator function
const validPath = (filePath) => {
  // select file filePath selector for unix
  const validUnix = /(^[a-zA-Z]\/)?([\w-.]+\/)+([\w-.]+\.[a-zA-Z0-9]{1,4})$/gm;
  // select file filePath selector for windows
  const validWindows = /(^[A-Z]:\\)?([\w-.]+\\)+([\w-.]+\.[a-zA-Z0-9]{1,4})$/gm;
  // if return for Unix regex match is the same length as the input filePath
  // if return for Windows regex match is the same length as the input filePath
  if (filePath.match(validUnix)[0].length === filePath.length || filePath.match(validWindows)[0].length === filePath.length) {
    // return input filePath
    return filePath;
  }
  // if the filePath doesnt match regex parameters return false
  return false;
};

// function to change to a unix filepath
const updateUnixPath = (filePath) => {
  // replace windows drive and slashes
  filePath = filePath.replace(/([a-z])(:)/i, '$1').replace(/(\\+)/g, '/');
  // make the first character lowercase
  filePath = filePath.charAt(0).toLowerCase() + filePath.slice(1);
  // return the completed filePath
  return filePath;
};

// function to change to a windows filePath
const updateWindowsPath = (filePath) => {
  // replace unix drive and slashes
  filePath = filePath.replace(/([a-z])/i, '$1:').replace(/(\/+)/g, '\\');
  // make the first character uppercase
  filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1);
  // return the completed filePath
  return filePath;
};

// function that checks which filePath to switch to
const whichPath = (filePath) => {
  // const windows = /([a-z]:)/i;
  // const unix = /([a-z]\/)/i;
  // if filePath is not valid return invalidity
  if (validPath(filePath) === false) {
    return 'Not a valid path';
  }
  // if filePath is not windows
  if (filePath.includes('/')) {
    // return windows filePath function result
    return updateWindowsPath(filePath);
    // otherwise
  }
  // return unix filePath function result
  return updateUnixPath(filePath);
};

module.exports = whichPath;
// console.log(whichPath(text));
// console.log(validPath(text));
