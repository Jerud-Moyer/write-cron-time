import { readFileSync } from 'fs';

export default () => {
  const file = readFileSync('./crontab.txt', 'utf-8');
  return file.split('\n').filter(line => line[0] !== '#' && line.length);
};
