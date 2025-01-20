// Code to send email using mailtrap
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const client = new MailtrapClient({
  //   endpoint: ENDPOINT,
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "PassWord restart",
};
const recipients = [
  {
    email: "kamaleshag96@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
