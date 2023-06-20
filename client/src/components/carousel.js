import DetailCard from "@/components/detailCard";

export default function Carousel({ project }) {
  const proyectos = [
    {
      nombre: "BeatConnect",
      imagen: "BCimage",
      tecnologias: {
        frontend: ["Next.js", "Redux/RTK", "Tailwind", "0Auth 2.0", "SASS"],
        backend: ["Node", "Express", "MongoDB", "Firebase", "JWT"],
        otros: ["Vercel", "Render", "Postman", "MercadoPago", "Trello"],
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-start mt-10 md:mt-0 md:justify-center items-center w-[90vw] h-[24rem] md:h-[40rem]">
      <DetailCard
        nombre={proyectos[0].nombre}
        imagen={proyectos[0].imagen}
        tecnologias={proyectos[0].tecnologias}
      />
      <div className=" flex justify-center gap-3 md:justify-around top-[39rem] w-[20rem] m-2">
        <button
          className="bg-formButtons w-28 md:w-32 md:h-10 text-lg rounded-lg"
          onClick={() =>
            (window.location.href = "https://pf-beat-connect.vercel.app/")
          }
        >
          Deploy
        </button>
        <button
          className="bg-formButtons w-28 md:w-32 md:h-10 text-lg rounded-lg"
          onClick={() =>
            (window.location.href = "https://github.com/fabgpr/PF-Beat_Connect")
          }
        >
          Github
        </button>
      </div>
    </div>
  );
}
