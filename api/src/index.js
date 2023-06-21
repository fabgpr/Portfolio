const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

app.use(express.json());
app.use(cors());

app.post("/mail", async (req, res) => {
  const { nombre, mail, mensaje } = req.body;

  try {
    if (!nombre || !mail || !mensaje) {
      return res.status(400).json({ message: "Debes llenar todos los campos" });
    }

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "fabiangpachecor@gmail.com",
      subject: "Señor, tiene un nuevo mensaje",
      text: `Hola señor, 
      ${nombre} cuyo mail es ${mail} le envia el siguiente mensaje: 
      
      ${mensaje}`,
    });

    console.log(process.env.PASS);

    res.status(200).json({ message: "El mensaje se envio correctamente!" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message,
        email: process.env.EMAIL,
        pass: process.env.PASS,
      });
  }
});

app.listen(3001, () => {
  console.log("Servidor abierto en el puerto 3001");
});
