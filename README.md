## A library that can read a crontab and return to a user the date and time that each job will run relative to the current time.

## Installation

```
npm i write-cron-time --save
```
### example
 ```
 import { read } from 'write-cron-time'

 const jobTimes = read('./your-crontab')
 ```

 returns an array of dates and times with each job name.
