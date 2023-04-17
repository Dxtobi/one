import twilio from 'twilio'


/**
 * sendVerificationCode('+1-555-555-5555')
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
 */

const client = twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');
const phoneNumber = ''
export function sendVerificationCode() {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const message = `Your verification code is: ${verificationCode}`;
  
    return client.messages.create({
      body: message,
      to: phoneNumber,
      from: 'YOUR_TWILIO_PHONE_NUMBER'
    });
  }
  