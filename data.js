import { readFileSync } from 'fs';

export default (filePath) => {
  const file = readFileSync(filePath, 'utf-8');

  return file.split('\n').filter(line => line[0] !== '#' && line.length).map(job => job.replace(/\s\s+/g, ' ').split(' '));
};
