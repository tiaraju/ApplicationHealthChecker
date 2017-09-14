var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * * *', function() { //triggered
  	console.log("triggered");
  }, function () { //on completed
  	console.log("completed");
  },
  true, /* Start the job right now */
  'America/Los_Angeles' /* Time zone of this job. */
);