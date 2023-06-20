import detailArrow from "../../public/icons/DetailArrow.png";
import DetailFolder from "../../public/icons/DetailFolder.png";
import Image from "next/image";

export default function DetailCard({ imagen, tecnologias, nombre }) {
  return (
    <div className="relative bg-detailCardBg border-detailCardBorder border-[1px] md:w-[60%] w-[70%] min-h-[50%] md:min-h-[60%] rounded-br-[25px]">
      <div className="flex flex-col h-[100%]">
        <div className="flex w-auto p-3 text-center justify-center items-center h-10 border-b-[1px]">
          <h4>{nombre}</h4>
        </div>
        <div className="flex h-[100%]">
          <div className="md:flex flex-col justify-around gap-6  p-3 border-r-[1px] w-[10rem] hidden ">
            <div className="col">
              <div className="flex gap-1">
                <Image src={DetailFolder} className="w-auto h-5 " />
                <h3>Frontend</h3>
              </div>
              <ul className="">
                {tecnologias.frontend.map((tech) => (
                  <div className="flex">
                    <Image src={detailArrow} className="h-4 w-auto " />
                    <li className="text-[13px] ">{tech}</li>
                  </div>
                ))}
              </ul>
            </div>

            <div className="col">
              <div className="flex">
                <Image src={DetailFolder} className="w-auto h-5 " />
                <h3>Backend</h3>
              </div>
              <ul className="">
                {tecnologias.backend.map((tech) => (
                  <div className="flex">
                    <Image src={detailArrow} className="h-4 w-auto " />
                    <li className="text-[13px] ">{tech}</li>
                  </div>
                ))}
              </ul>
            </div>

            <div className="col">
              <div className="flex gap-1">
                <Image src={DetailFolder} className="w-auto h-5 " />
                <h3>Otros</h3>
              </div>
              <ul className="">
                {tecnologias.otros.map((tech) => (
                  <div className="flex">
                    <Image src={detailArrow} className="h-4 w-auto " />
                    <li className="text-[13px] ">{tech}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-br-[25px] h-[100%] w-[100%]">
            <iframe
              src="https://www.youtube.com/embed/UUe8N5-pxdM?modestbranding=1&showinfo=0&rel=0"
              className="object-fill rounded-br-[25px] h-full w-[100%]"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
