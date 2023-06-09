import Image from "next/image";
import projectIcon from "../../public/icons/project icon.png";
import Carousel from "@/components/carousel";
import leftArrow from "../../public/images/leftArrow.png";
import rightArrow from "../../public/images/rightArrow.png";

import { Tooltip } from "react-tippy";
import { useEffect, useState, useRef } from "react";

export default function Projects() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);
  const targetRef = useRef(null);
  const [currProject, setCurrProject] = useState(0);
  const [buttonRight, setButtonRight] = useState(true);
  const [buttonLeft, setButtonLeft] = useState(false);

  const projects = [0];

  const handleButtonRight = (projects) => {
    if (projects.length - 1 === currProject) {
      setCurrProject(0);
    }
    setCurrProject(currProject + 1);
  };

  const handleButtonLeft = () => {
    if (currProject === 0) {
      return;
    }
    setCurrProject(currProject - 1);
  };

  useEffect(() => {
    console.log(currProject);
  }, [currProject]);

  useEffect(() => {
    if (currProject > 0) {
      setButton(true);
    }
    if (currProject === 0) {
      setButtonLeft(false);
    }
    if (currProject >= 0) {
      setButtonRight(true);
    }
    if (currProject === projects.length - 1) {
      setButtonRight(false);
    }
  }, [currProject]);

  useEffect(() => {
    if (visible) {
      setShowTooltip(true);
    }
  }, [visible]);

  const handleTooltipOpen = () => {
    setShowTooltip(true);
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
    console.log(showTooltip);
  }, [showTooltip]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
          setShowTooltip(false);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <div className="mt-10">
      <div className="m-20 mt-56 mb-20 ml-20 mr-20 w-auto flex justify-center">
        <h1 className="text-white font-bold text-5xl relative ">
          Proyectos
          <span className="absolute bottom-0 left-16 h-[7px] bg-subrayado -mb-3 w-24"></span>
          <Image
            className="absolute bottom-0 left-52 w-auto h-28 -mb-7"
            src={projectIcon}
          />
        </h1>
      </div>
      <div className="flex justify-center items-center m-20 -mt-8 h-[700px] rounded-[20px] bg-divProyectos drop-shadow-xl">
        <div className="flex justify-between items-center w-[90%]">
          <button
            className={`${buttonLeft ? "" : "invisible"}`}
            ref={targetRef}
            onMouseEnter={handleTooltipOpen}
            onMouseLeave={handleTooltipClose}
            onClick={() => handleButtonLeft(projects)}
          >
            <Tooltip
              className={`text-white p-1 ${buttonLeft ? "" : "invisible"}`}
              title="Más Proyectos"
              trigger="manual"
              open={buttonLeft ? showTooltip : buttonLeft}
              sticky={true}
            >
              <Image src={leftArrow} className="w-16" />
            </Tooltip>
          </button>
          <div>
            <Carousel project={currProject} />
          </div>
          <button
            onMouseEnter={handleTooltipOpen}
            onMouseLeave={handleTooltipClose}
            onClick={() => handleButtonRight(projects)}
          >
            <Tooltip
              className={`text-white p-1 ${buttonRight ? "" : "invisible"}`}
              title="Más Proyectos"
              trigger="manual"
              open={buttonRight ? showTooltip : buttonRight}
              sticky={true}
            >
              <Image src={rightArrow} className="w-16" />
            </Tooltip>
          </button>
        </div>
        <div className="absolute flex justify-around top-[39rem] w-[20rem]">
          <button
            className="bg-formButtons px-9 py-1 text-lg rounded-lg"
            onClick={() =>
              (window.location.href = "https://pf-beat-connect.vercel.app/")
            }
          >
            Deploy
          </button>
          <button
            className="bg-formButtons px-9 py-1 text-lg rounded-lg"
            onClick={() =>
              (window.location.href =
                "https://github.com/fabgpr/PF-Beat_Connect")
            }
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
