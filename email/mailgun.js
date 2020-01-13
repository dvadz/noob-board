const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendNotificationViaMailGun = req => {
  let emailAddress = "",
    postTitle = "";

  // Find the email address of the post's author
  Post.findById({ _id: req.body.post })
    .then(response => {
      postTitle = response.title;
      return User.findById({ _id: response.author }, "+email");
    })
    .then(response => {
      emailAddress = response.email;
      //  Send an email notification
      // 'data' must have: "from", "to", "subject", "text"
      const data = {
        from: process.env.SEND_FROM,
        to: emailAddress,
        subject: postTitle,
        text: "New comment:" + "\n\n" + req.body.body
      };

      mailgun.messages().send(data, (error, body) => {
        if (error) {
          console.log("Mailgun error", error);
          return console.log("Mailgun error - email notification was NOT sent");
        }
        console.log("Email sent to " + emailAddress);
      });
    });
};

module.exports = sendNotificationViaMailGun;
