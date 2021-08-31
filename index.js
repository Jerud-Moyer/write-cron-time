import { getDates } from './utils.js';
import data from './data';

function read(filepath) {
  const jobs = [];
  const cronTab = data(filepath);
  cronTab.forEach(job => {
    const jobDate = getDates(job);
    jobs.push(jobDate);
  });
}

module.exports.read = read;
