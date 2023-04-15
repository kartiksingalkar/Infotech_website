require('dotenv').config()
const send_otp = (contact, token) => {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    console.log("accountSid = ",accountSid)
    console.log("authToken = ",authToken)

    const client = require('twilio')(accountSid, authToken);

    const msg = `your OTP is ${token}`
    // process.env.MESSAGING_SID
    client.messages
        .create({
            body: msg,
            messagingServiceSid: 'MGb08f6cc77a9385a3a8599f0d0e166dcd',
            to: contact
        })
        .then(message => console.log(message))
        .done();
        console.log('otp sent');
}

module.exports = { send_otp };
