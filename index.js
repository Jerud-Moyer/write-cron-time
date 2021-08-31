import data from './data.js';
import { getDates } from './utils.js';

const cronTab = data('./crontab.txt');
cronTab.forEach(job => {
  getDates(job);
});
