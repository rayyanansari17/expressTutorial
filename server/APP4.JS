import twilio from 'twilio';
import dotenv from "dotenv"
dotenv.config()
const accountSid = process.env.ID;
const authToken = process.env.TOKEN
const client = twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Hello from Twilio!',
     from: '+14144090659', 
     to: '+919618211626'    
   })
  .then(message => console.log(`Message sent with SID: ${message.sid}`))
  .catch(error => console.error('Error  message:'));  