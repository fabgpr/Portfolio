import winrarLogo from "../../public/icons/winrarLogo.png";
import Image from "next/image";
import skillWindow from "../../public/images/skillsWindow.png";

//icons

import auth0 from "../../public/icons/auth0.png";
import bash from "../../public/icons/bash.png";
import css from "../../public/icons/css.png";
import express from "../../public/icons/express.png";
import figma from "../../public/icons/figma.png";
import firebase from "../../public/icons/firebase.png";
import git from "../../public/icons/git.png";
import github from "../../public/icons/github.png";
import html from "../../public/icons/html.png";
import javascript from "../../public/icons/javascript.png";
import typescript from "../../public/icons/typescript.png";
import jwt from "../../public/icons/jwt.png";
import mongoDB from "../../public/icons/mongoDB.png";
import nextjs from "../../public/icons/nextjs.png";
import nodejs from "../../public/icons/nodejs.png";
import postman from "../../public/icons/postman.png";
import psql from "../../public/icons/psql.png";
import react from "../../public/icons/react.png";
import redux from "../../public/icons/redux.png";
import render from "../../public/icons/render.png";
import sass from "../../public/icons/sass.png";
import tailwind from "../../public/icons/tailwind.png";
import trello from "../../public/icons/trello.png";
import vercel from "../../public/icons/vercel.jpg";

export default function TechSkills() {
  const skills = [
    { icon: javascript, tech: "Javascript" },
    { icon: typescript, tech: "Typescript" },
    { icon: nodejs, tech: "NodeJS" },
    { icon: react, tech: "React" },
    { icon: nextjs, tech: "NextJS" },
    { icon: redux, tech: "Redux/RTK" },
    { icon: html, tech: "HTML" },
    { icon: css, tech: "Css" },
    { icon: tailwind, tech: "Tailwind" },
    { icon: sass, tech: "SASS" },
    { icon: express, tech: "Express" },
    { icon: psql, tech: "PostgreSQL" },
    { icon: mongoDB, tech: "MongoDB" },
    { icon: jwt, tech: "JWT" },
    { icon: github, tech: "GitHub" },
    { icon: git, tech: "Git" },
    { icon: bash, tech: "Bash" },
    { icon: firebase, tech: "Firebase" },
    { icon: auth0, tech: "Auth0" },
    { icon: postman, tech: "Postman" },
    { icon: render, tech: "Render" },
    { icon: vercel, tech: "Vercel" },
    { icon: figma, tech: "Figma" },
    { icon: trello, tech: "Trello" },
  ];

  return (
    <div>
      {/* titulo */}
      <div className="m-20 mt-48 mb-20 ml-20 mr-20 w-auto flex justify-end">
        <h1 className="text-white font-bold text-5xl relative">
          Tech Skills
          <span className="absolute bottom-0 left-20 h-[7px] bg-subrayado -mb-3 w-36"></span>
          <Image
            src={winrarLogo}
            className="absolute h-16 w-auto -ml-20 -mt-12"
          />
        </h1>
      </div>
      {/* skills */}
      <div className="flex justify-center items-center -mt-20  ">
        <div className="flex items-center justify-center relative mt-2 w-[65%] h-[700px]">
          <Image src={skillWindow} className="mt-2 w-full" />
          <div className="absolute w-[90%] left-10 mt-10">
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li className="flex flex-col items-center text-center">
                  <Image src={skill.icon} className="h-20 w-auto" />
                  <h1 className="text-black">{skill.tech}</h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
