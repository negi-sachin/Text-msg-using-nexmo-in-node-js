const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "API KEY",
  apiSecret: 'API SECRET'
});

nexmo.message.sendSms(
    'sender number', 'receiver number', 'message here',
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );