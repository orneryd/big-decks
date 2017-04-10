import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const cachePath = (fileName) => path.normalize(`${__dirname}/../cache/${fileName}.txt`);

const get = (options) => {
  let filePath = cachePath(_.camelCase(options.path));
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
};

const set = (options, contents) => {
  let filePath = cachePath(_.camelCase(options.path));
  fs.writeFileSync(filePath, contents);
};

export default {
  get: get,
  set: set
}


