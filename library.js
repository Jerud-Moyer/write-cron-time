import { getDates } from './utils';

function read(filepath) {
  const cronTab = data(filepath);
  cronTab.forEach(job => {
    getDates(job);
  });
}

module.exports.read = read;
