const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' });
require('dotenv').config();

const senderID = '';
const message = `test msg from ${senderID}`;
const recipientNumber = ''

const params = {
  Message: message,
  PhoneNumber: recipientNumber, // The phone number to send SMS to
  MessageAttributes: {
    'AWS.SNS.SMS.SenderID': {
      'DataType': 'String',
      'StringValue': senderID // Sender ID value
    }
  }
};

const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

publishTextPromise.then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.error(err, err.stack);
});