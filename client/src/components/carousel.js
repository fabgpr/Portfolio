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
    <div className="-mt-16">
      <DetailCard
        nombre={proyectos[0].nombre}
        imagen={proyectos[0].imagen}
        tecnologias={proyectos[0].tecnologias}
      />
    </div>
  );
}
