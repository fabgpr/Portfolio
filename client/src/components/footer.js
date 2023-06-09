import Image from "next/image";
import mail from "../../public/icons/mail.png";
import github from "../../public/icons/github.png";
import linkedin from "../../public/icons/linkedin.png";
import whatsapp from "../../public/icons/whatsapp.png";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { sendMail } from "@/redux/reducer/mailReducer";
import { useState } from "react";

import { toast } from "react-toastify";
import { Tooltip } from "react-tippy";

export default function Footer() {
  const [form, setForm] = useState({
    nombre: "",
    mail: "",
    mensaje: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form >", form);
    dispatch(sendMail(form));
    setForm({ nombre: "", mail: "", mensaje: "" });
  };

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCopy = (event) => {
    event.preventDefault();

    navigator.clipboard
      .writeText("1170148114")
      .then(() => {
        toast.success("El numero se copio exitosamente!", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2000,
        });
      })
      .catch(() => {
        toast.error("Hubo un error al copiar el numero", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="flex mt-36 -mb-20 bg-footerBg h-[600px]">
      {/* Contacto */}
      <div className="p-16 w-[40%] h-full mt-30">
        <h1 className="relative text-5xl">
          Contáctame
          <span className="absolute bottom-0 left-1 h-[7px] bg-subrayado -mb-3 w-40"></span>
        </h1>
        <div className="flex flex-col mt-16 gap-5">
          <a
            className="relative text-lg ml-10 py-2"
            href="mailto:fabiangpachecor@gmail.com"
          >
            <Image src={mail} className="absolute h-8 w-auto -mt-1 -ml-10" />
            Fabiangpachecor@gmail.com
          </a>
          <a
            className="relative text-lg ml-10 py-2"
            href="https://github.com/fabgpr"
          >
            <Image src={github} className="absolute h-12 w-auto -mt-4 -ml-12" />
            Github.com/fabgpr
          </a>
          <a
            className="relative text-lg ml-10 py-2"
            href="https://www.linkedin.com/in/fabiangpr/"
          >
            <Image
              src={linkedin}
              className="absolute h-11 w-auto -mt-3 -ml-12"
            />
            Linkedin.com/in/fabiangpr
          </a>
          <a
            className="relative text-lg ml-10 py-2"
            href="#"
            onClick={handleCopy}
          >
            <Image
              src={whatsapp}
              className="absolute h-10 w-auto -mt-2  rounded-[14px] -ml-12"
            />
            11 7014-8114
          </a>
        </div>
      </div>
      <form
        className="flex justify-center items-center -mt-16 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-3 w-[80%] p-4">
          <Tooltip
            className="pt-2 w-[35%]"
            title="Coloca tu nombre asi puedo saber quien es el remitente!"
            trigger=" mouseenter focus"
            interactive
          >
            <input
              className="p-2 h-12 rounded-[4px] bg-inputBg text-lg w-full"
              placeholder="Nombre"
              name="nombre"
              onChange={handleForm}
              value={form.nombre}
            />
          </Tooltip>
          <Tooltip
            className="pt-2 w-[63.84%]"
            title="Coloca tu mail asi puedo contactarte luego!"
            trigger=" mouseenter focus"
            interactive
          >
            <input
              className="p-2 h-12  rounded-[4px] bg-inputBg text-lg w-full"
              placeholder="Mail"
              name="mail"
              onChange={handleForm}
              value={form.mail}
            />
          </Tooltip>
          <Tooltip
            className="pb-2 w-full"
            title="Este mensaje llegara a mi casilla de correo junto con el Nombre y Mail que escribiste previamente"
            trigger="mouseenter focus"
            position="bottom"
            interactive
            sticky
            followCursor={false}
          >
            <textarea
              className="p-2 rounded-[4px] h-64 bg-inputBg text-lg resize-none w-full"
              placeholder="Mensaje"
              name="mensaje"
              onChange={handleForm}
              value={form.mensaje}
            />
          </Tooltip>
          <div className="flex gap-4 mt-5">
            <button
              className="px-11 py-2 bg-formButtons rounded-[4px]"
              type="submit"
            >
              Enviar
            </button>
            <button
              onClick={() => {
                setForm({ nombre: "", mail: "", mensaje: "" });
              }}
              className="px-11 py-2 bg-formButtons rounded-[4px]"
              type="button"
            >
              Borrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
