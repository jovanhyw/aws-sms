const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' });
require('dotenv').config();

const params = {
  Message: 'test msg',
  PhoneNumber: '', // The phone number to send SMS to
  MessageAttributes: {
    'AWS.SNS.SMS.SenderID': {
      'DataType': 'String',
      'StringValue': '' // Sender ID value
    }
  }
};

const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

publishTextPromise.then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.error(err, err.stack);
});