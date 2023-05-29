const sendMailService = require("../services/sendemail");

exports.sendEmail = async (req, res) => {
  const { email, templateName, movieData } = req.body; // Dodajte movieData kao destrukturirani parametar

  try {
    await sendMailService.sendEmail(email, templateName, movieData); // Dodajte movieData kao argument
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to sent email" });
  }
};
