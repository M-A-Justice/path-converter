/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

/* Input:
  Windows filepaths

  [C:]\Documents\Newsletters\Summer2018.pdf           An absolute file path from the root of drive C:
  [A-Z]:

  [\Program Files]\Custom Utilities\StringFinder.exe  An absolute path from the root of the current drive.
  \\[\w\s-.]+

  [2018]\January.xlsx                                A relative path to a file in a subdirectory of the current directory.
  [\w\s-.]+

  [..]\Publications\TravelBrochure.pdf              A relative path to file in a directory that is a peer of the current directory.
  ..

  [C:Projects]\apilibrary\apilibrary.sln            A relative path from the current directory of the C: drive.
  [A-Z]:[\w\s-.]+

  Regex intended to check for all of these cases
  /^([A-Z]:|\\[\w\s-.]+|[\w\s-.]+|..|[A-Z]:[\w\s-.]+)?((\\[\w\s-.]+)+)*((\\)?[\w\s-.]+\.[a-zA-Z0-9]{1,4})$/gm

  Linux filepaths

  [c]/Users/m_a_j/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb
  [a-z]

  [/Users]/m_a_j/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb
  [\/\w\s-.]+

  [m_a_j]/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb
  [\w\s-.]+

  [/001469].ldb
  [\/\w\s-.]+

  001469.ldb

  Output:
    Windows -> Linux: /mnt/c/Users/m_a_j/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/VoidTest/db/001469.ldb
    Linux -> Windows: C:\Users\m_a_j\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\VoidTest\db\001469.ldb
*/

/* ********* ONLY USED FOR TESTING ************
const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'path.txt')).toString('utf-8');
********************************************* */

// TODO: RESEARCH TEMPLATE LITERALS WITH REGULAR EXPRESSIONS TO GET RID OF EXTRA CODE

// filePath validator function
const validPath = (filePath) => {
  // select file filePath selector for unix
  const validUnix = /(^[a-z])?((\/)?([\w\s-.]+))*(((\/)?[\w\s-.]+)\.[a-zA-Z0-9]{1,4})?$/gm;
  // select file filePath selector for windows
  const validWindows = /^([A-Z]:|\\[\w\s-.]+|[\w\s-.]+|..|[A-Z]:[\w\s-.]+)?((\\[\w\s-.]+)+)*((\\)?[\w\s-.]+\.[a-zA-Z0-9]{1,4})?$/gm;

  if (filePath.match(validWindows) !== null) {
    // if return for Windows regex match is the same length as the input filePath
    if (filePath.match(validWindows)[0].length === filePath.length) {
      // return input filePath
      return filePath;
    }
  }

  if (filePath.match(validUnix) !== null) {
    // if return for Unix regex match is the same length as the input filePath
    if (filePath.match(validUnix)[0].length === filePath.length) {
      return filePath;
    }
  }
  // if the filePath doesnt match regex parameters return false
  return false;
};

// function to change to a unix filepath
const updateUnixPath = (filePath) => {
  const driveLetterColon = /^([a-z]:)/i;
  const driveLetterNoColon = /^([a-z][^:])/i;
  const directory = /^([^\\][\w\s-.]+)/;

  if (directory.test(filePath)) {
    filePath = filePath.replace(/(\\+)/g, '/');
    return filePath;
  }

  if (driveLetterColon.test(filePath)) {
    filePath = filePath.replace(/([a-z])(:)/i, '$1').replace(/(\\+)/g, '/');
    filePath = filePath.charAt(0).toLowerCase() + filePath.slice(1);
    filePath = '/mnt/'.concat(filePath);
    return filePath;
  }

  if (driveLetterNoColon.test(filePath)) {
    filePath = filePath.replace(/(\\+)/g, '/');
    filePath = filePath.charAt(0).toLowerCase() + filePath.slice(1);
    filePath = '/mnt/'.concat(filePath);
    return filePath;
  }
  filePath = filePath.replace(/(\\+)/g, '/');
  return filePath;
};

// function to change to a windows filePath
const updateWindowsPath = (filePath) => {
  // starts with /mnt/ or single drive letter
  const mount = /^(\/mnt)/;
  const driveLetter = /^((\/)?[a-z]\/)/;
  // const directory = /^(\/[\w\s-.]+)\//;
  // const file = /^((\/)?[\w\s-.]+).[a-zA-Z0-9]{1,4}/;

  // FIX THIS FUNCTION
  if (mount.test(filePath)) {
    filePath = filePath.replace(/^(\/mnt\/)([a-z])/, '$2:').replace(/(\/+)/g, '\\');
    filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1);
    return filePath;
  }

  if (driveLetter.test(filePath)) {
    filePath = filePath.replace(/^(\/)?([a-z])/, '$2:').replace(/(\/+)/g, '\\');
    filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1);
    return filePath;
  }

  // if (directory.test(filePath) || file.test(filePath)) {
  //   filePath = filePath.replace(/(\/+)/g, '\\');
  //   return filePath;
  // }
  filePath = filePath.replace(/(\/+)/g, '\\');
  return filePath;
};

// function that checks which filePath to switch to
const whichPath = (filePath) => {
  // const windows = /([a-z]:)/i;
  // const unix = /([a-z]\/)/i;
  if (filePath === '') {
    return 'Please enter a file path';
  }
  // if filePath is not valid return invalidity
  if (validPath(filePath) === false) {
    return 'Not a valid path';
  }
  // if filePath is Unix
  if (filePath.includes('/')) {
    // return windows filePath function result
    return updateWindowsPath(filePath);
    // otherwise
  }
  // if filePath is Windows
  if (filePath.includes('\\')) {
    // return Unix filePath function result
    return updateUnixPath(filePath);
  }
  return filePath;
};

module.exports = whichPath;
// console.log(whichPath(text));
// console.log(validPath(text));
