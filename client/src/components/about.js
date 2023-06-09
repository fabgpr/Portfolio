import Image from "next/image";
import aboutIcon from "../../public/icons/about me icon2.png";
import sideImage from "../../public/images/about side image.gif";

export default function AboutMe() {
  const scrollToContact = () => {
    window.scrollTo({ top: 3202, behavior: "smooth" });
  };

  return (
    <div className="mt-44">
      <div className="m-20 mt-32 mb-20 ml-20 mr-20 w-[35%]">
        <h1 className="text-white font-bold text-5xl relative ">
          Sobre mí
          <span className="absolute bottom-0 left-0 h-[7px] bg-subrayado -mb-3 w-28"></span>
          <Image
            src={aboutIcon}
            className="absolute h-20 w-auto bottom-0 left-[212px] -mb-2"
          />
          <Image
            src={sideImage}
            className="absolute rounded-[50px] w-auto h-[400px] left-[1135px] -mt-20"
          />
        </h1>
        <p className="text-white mt-8 tracking-tight text-2xl font-sans font-light">
          Hola, mi nombre es Fabian, tengo 20 años y soy un FullStack Developer.
          Estoy ansioso de poder encontrar una oportunidad laboral en la cual
          demostrar mis habilidades, enfrentarme a nuevos retos y seguir
          evolucionando como desarrollador.
        </p>
      </div>
      <div className="flex w-[500px] ml-20 -mt- justify-between">
        <button
          className="bg-botones1 rounded-[12px] p-2 w-52 text-white font-bold text-lg drop-shadow-lg"
          onClick={() => window.open("/CV_FabianPacheco.pdf", "_blank")}
        >
          CV
        </button>
        <button
          className="bg-botones1 rounded-[12px] p-2 w-52 text-white font-bold text-lg drop-shadow-lg"
          onClick={scrollToContact}
        >
          Contrátame
        </button>
      </div>
    </div>
  );
}
