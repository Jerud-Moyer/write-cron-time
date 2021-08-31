import { getDates } from './utils.js';
import data from './data.js';

export function read(filepath) {
  const jobs = [];
  const cronTab = data(filepath);
  cronTab.forEach(job => {
    const jobDate = getDates(job);
    jobs.push(jobDate);
  });
  return jobs;
}
