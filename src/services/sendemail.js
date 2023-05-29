const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const env = require("../configuration/env");
const fs = require("fs");
const path = require("path");

exports.sendEmail = async (email, templateName, movieData) => {
  let transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: path.join(__dirname, "../email-templates/"),
        layoutsDir: path.join(__dirname, "../email-templates/"),
        defaultLayout: "",
      },
      viewPath: path.join(__dirname, "../email-templates/"),
      extName: ".hbs",
    })
  );

  const templatePath = path.join(__dirname, `../email-templates/${templateName}.hbs`);
  const template = fs.readFileSync(templatePath, "utf-8");
  const emailSubject = getSubject(template);

  const msg = {
    from: '"PIM Cinema" pimcinema@outlook.com', // sender address
    to: `${email}`, // list of receivers
    subject: emailSubject, // Subject line
    template: templateName, //template
    context: { movieData },
  };
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);

  function getSubject(template) {
    const findSubject = /<subject>(.*?)<\/subject>/i;
    const match = template.match(findSubject);

    if (match && match[1]) {
      return match[1];
    } else {
      return "PIM Cinema"; //default subject
    }
  }
};
