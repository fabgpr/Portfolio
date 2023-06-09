import detailArrow from "../../public/icons/DetailArrow.png";
import DetailFolder from "../../public/icons/DetailFolder.png";
import Image from "next/image";

export default function DetailCard({ imagen, tecnologias, nombre }) {
  return (
    <div className="relative bg-detailCardBg border-detailCardBorder border-[1px] w-[1020px] h-[560px] rounded-br-[25px]">
      <div className="flex w-auto p-3 text-center justify-center items-center h-10 border-b-[1px]">
        <h4>{nombre}</h4>
      </div>
      <div className="flex flex-col justify-between gap-[1px] p-3 ml-8 h-[93%] border-r-[1px] w-[140px] ">
        <h3 className="relative">
          <Image
            src={DetailFolder}
            className="absolute w-auto h-6 right-[120px] bottom-[1px]"
          />
          Frontend
        </h3>
        <ul className="-mt-12">
          {tecnologias.frontend.map((tech) => (
            <li className="relative text-[13px] ">
              <Image
                src={detailArrow}
                className="absolute h-4 w-auto right-[120px]"
              />
              {tech}
            </li>
          ))}
        </ul>

        <h3 className="relative">
          <Image
            src={DetailFolder}
            className="absolute w-auto h-6 right-[120px] bottom-[1px]"
          />
          Backend
        </h3>
        <ul className="-mt-12">
          {tecnologias.backend.map((tech) => (
            <li className="relative text-[13px] ">
              <Image
                src={detailArrow}
                className="absolute h-4 w-auto right-[120px]"
              />
              {tech}
            </li>
          ))}
        </ul>

        <h3 className="relative">
          <Image
            src={DetailFolder}
            className="absolute w-auto h-6 right-[120px] bottom-[1px]"
          />
          Otros
        </h3>
        <ul className="-mt-12">
          {tecnologias.otros.map((tech) => (
            <li className="relative text-[13px] ">
              <Image
                src={detailArrow}
                className="absolute h-4 w-auto right-[120px]"
              />
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={require(`../../public/images/${imagen}.png`)}
        className="absolute left-[172px] bottom-[0.01px] h-[518.5px] w-[846px] rounded-br-[25px]"
      />
      {/* <button onClick={console.log(imagen)}>test</button> */}
    </div>
  );
}
