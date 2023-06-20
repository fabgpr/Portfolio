import Image from "next/image";
import aboutIcon from "../../public/icons/about me icon2.png";
import sideImage from "../../public/images/about side image.gif";

export default function AboutMe() {
  const scrollToContact = () => {
    window.scrollTo({ top: 3202, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center w-[80vw]n h-[35rem] mt-10  ">
      <div className="flex w-full h-full items-center justify-between">
        <div className=" flex flex-col m-10 w-[80%] h-auto min-[1100px]:w-[35vw] ">
          <h1 className="text-white font-bold text-4xl md:text-5xl relative md:w-full">
            Sobre mí
            <span className="absolute bottom-0 left-0 h-[7px] bg-subrayado -mb-3 w-28"></span>
            <Image
              src={aboutIcon}
              className="absolute h-16 md:h-20 w-auto bottom-0 left-[10rem] md:left-[13rem] md:-mb-2 -mb-4"
            />
          </h1>
          <p className="text-white mt-8 tracking-tight text-xl md:text-2xl font-sans font-light shrink-0">
            Hola, mi nombre es Fabian, tengo 20 años y soy un FullStack
            Developer. Estoy ansioso de poder encontrar una oportunidad laboral
            en la cual demostrar mis habilidades, enfrentarme a nuevos retos y
            seguir evolucionando como desarrollador.
          </p>
          <div className="flex items-center w-[60%] h-20 md:w-[50%] gap-2 justify-between mt-4 ">
            <button
              className="bg-botones1 rounded-[12px] py-2 px-3 w-32 md:w-40 shrink-0 text-white font-bold text-lg drop-shadow-lg"
              onClick={() => window.open("/CV_FabianPacheco.pdf", "_blank")}
            >
              CV
            </button>
            <button
              className="bg-botones1 rounded-[12px] py-2 px-3 w-32 md:w-40 shrink-0 text-white font-bold text-lg drop-shadow-lg"
              onClick={scrollToContact}
            >
              Contrátame
            </button>
          </div>
        </div>
        <div className="w-auto m-12">
          <Image
            src={sideImage}
            className=" rounded-[50px]  max-h-[450px] max-w-[650px] hidden min-[1100px]:block "
          />
        </div>
      </div>
    </div>
  );
}
