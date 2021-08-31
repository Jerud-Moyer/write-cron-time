/* eslint-disable no-console */
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();
const weekday = date.getDay();

export const getDates = (job) => {
  let jobYear = year;
  let jobMonth = job[3] || month;
  let jobDate = job[2] || day;
  let jobHour = job[1] || hour;
  let jobMinute = job[0] || minute;
  let jobDay = job[4];

  //day of the week
  if(jobDay === '' || jobDay === '*') jobDay = null;
  if(Number(jobDay) === weekday) jobDay = day;
  if(Number(jobDay) > weekday) jobDate = day + (Number(jobDay) - weekday);
  if(Number(jobDay) < weekday) jobDate = day + (weekday - Number(jobDay) + 1); 
  if(jobDay && typeof jobDay === 'string' && jobDay.includes('-')) {
    const duo = jobDay.split('-');
    if(weekday >= Number(duo[0]) && weekday <= Number(duo[1])) jobDay = day;
  }
  if(Number(jobDay) === weekday && jobHour > hour) jobDay = day + 1;

  //month
  if(jobMonth && typeof jobMonth === 'string' && jobMonth.includes(',')) {
    jobMonth.split(',').forEach(num => {
      if(Number(num) >= month) jobMonth = Number(num);
    });
  }
  if(jobMonth && typeof jobMonth === 'string' && jobMonth.includes('/')) {
    jobMonth = Number(jobMonth.split('/')[1]);
  }
  if(jobMonth === '*') jobMonth = month;
  if(Number(jobMonth) < month) jobYear += 1; 

  //day
  if(jobDate && typeof jobDate === 'string' && jobDate.includes(',')) {
    jobDate.split(',').forEach(num => {
      if(num.includes('-')) {
        const duo = num.split('-');
        if(day >= Number(duo[0]) && day <= Number(duo[1])) jobDate = day;
      }
      if(Number(num) >= day) jobDate = Number(num);
      else jobDate = day;
    });
  }
  if(jobDate && typeof jobDate === 'string' && jobDate.includes('/')) {
    jobDate = Number(jobDate.split('/')[1]);
  }
  if(jobDate === '*') jobDate = day;
  if(jobDate === '0') console.error('Day of month must have a value of 1-31, or *');
  if(Number(jobDate) < day && jobMonth <= month && jobDate !== '0') jobMonth += 1;

  //hour
  if(jobHour && typeof jobHour === 'string' && jobHour.includes(',')) {
    jobHour.split(',').forEach(num => {
      if(num.includes('-')) {
        const duo = num.split('-');
        if(day >= Number(duo[0]) && day <= Number(duo[1])) jobHour = hour;
      }
      if(Number(num) >= hour) jobHour = Number(num);
      else jobHour = hour;
    });
  }
  if(jobHour && typeof jobHour === 'string' && jobHour.includes('/')) {
    jobHour = Number(jobHour.split('/')[1]);
  }
  if(jobHour === '*') jobHour = hour;
  if(jobHour < hour && jobDate <= day && jobMonth <= month) jobDate += 1;

  //minute  
  if(jobMinute && typeof jobMinute === 'string' && jobMinute.includes(',')) {
    jobMinute.split(',').forEach(num => {
      if(Number(num) >= minute) jobMinute = Number(num);
    });
  }
  if(jobMinute && typeof jobMinute === 'string' && jobMinute.includes('/')) {
    jobMinute = Number(jobMinute.split('/')[1]);
  }
  if(jobMinute === '*') jobMinute = hour;
  if(jobMinute < minute && jobHour <= hour && jobDate <= day && jobMonth <= month) jobHour += 1;

  const scheduledByDay = new Date(
    year,
    month,
    jobDate,
    jobHour,
    jobMinute,
    0
  );

  const nextScheduled = new Date(
    jobYear, 
    jobMonth - 1,
    jobDate,
    jobHour,
    jobMinute,
    0
  );

  console.log(`the job: ${job[job.length - 1]} 
  will next run on ${jobDay ? scheduledByDay : nextScheduled}`);
};
