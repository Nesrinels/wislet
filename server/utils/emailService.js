import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use SendGrid, Outlook, etc.
  auth: {
    user: 'wislet.notifications@gmail.com',
    pass: 'mxxf xkiy ttxq bjhr',
  },
});

export const sendNotificationEmail = async ({ to, subject, text }) => {
  const mailOptions = {
    from: 'wislet.notifications@gmail.com',
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};