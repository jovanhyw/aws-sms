# Sending SMS using AWS SNS SMS

A simple code to publish SMS message using AWS SNS SMS feature. Created this simple code to test out if SMS will be dropped when using a Sender ID that is registered on SGNIC.

## How to install

Make sure you have NodeJS installed on your machine.

```
# clone this repo
git clone https://github.com/jovanhyw/aws-sms.git

# change directory into the cloned repo
cd aws-sms

# install nodejs packages
npm ci
```

## How to run

Make sure you have an AWS Account. Create an IAM User with permissions to AmazonSNSFullAccess policy.

Copy and paste the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` values to the `.env.example` file and rename the file to `.env`.

In `index.js`, enter the appropriate values for `PhoneNumber` and `StringValue` of `AWS.SNS.SMS.SenderID` respectively.

Take note that if your AWS SNS is in sandboxed mode, you have to add and verify the phone number in the destination phone numbers on the AWS SNS SMS console itself before the SMS can be published to the number.

```
# run the program
node index.js
```

## References

- https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples-sending-sms.html
- https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html