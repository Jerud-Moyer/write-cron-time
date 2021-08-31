import { getDates } from './utils.js';

const cronTab = data('./crontab.txt');
cronTab.forEach(job => {
  getDates(job);
});
