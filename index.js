const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//       res.send("Voke is seriously a pain my ass");
// });

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

//
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  // const transporter = nodemailer.createTransport({
  //   service: "yahoomail",
  //   auth: {
  //     user: "davidfrankoziwo@yahoo.com",
  //     password: process.env.YAHOO_PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: req.body.email,
  //   to: "davidfrankoziwo@yahoo.com",
  //   subject: `Message from ${req.body.email}: ${req.body.subject}`,
  //   text: req.body.message,
  // };

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.log(err);
  //     res.send("error");
  //   } else {
  //     console.log("Email sent: " + info.response);
  //     res.send("Success");
  //   }
  // });
});

app.listen(PORT, console.log(`Server is running successfuly on port ${PORT}`));
