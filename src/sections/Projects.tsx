import React, { useState, useRef } from "react";

import etch from "/assets/projects/etch.png";
import fca from "/assets/projects/fca.png";
import upskilling from "/assets/projects/upskilling.png";
import ppz from "/assets/projects/ppz.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "FirstCom Academy Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: fca,
      link: "https://www.fca.edu.sg/",
    },
    {
      id: 2,
      title: "Event Micro Site",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: upskilling,
      link: "https://upskilling100.fca.edu.sg/",
    },
    {
      id: 3,
      title: "Papazao Event Site",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: ppz,
      link: "https://papazao.eventurous.sg/1st",
    },
    {
      id: 4,
      title: "Etch and Bolts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: etch,
      link: "https://www.etchandbolts.com/",
    },
  ];

  const projectList = projects.map((project) => {
    return (
      <div className="basis-1/2 project" key={project.id}>
        <a href={project.link}></a>
        <div className="image-wrap relative">
          <div className="overlay font-bold text-2xl flex items-center justify-center underline">
            Visit Site
          </div>
          <img className="mb-5" src={project.image} />
        </div>

        <div className="font-bold project-title flex items-center justify-center">
          {project.title}
        </div>
      </div>
    );
  });

  return (
    <>
      <section
        className="py-24 pb-10 projects-section overflow-hidden flex flex-col"
        id="Projects"
      >
        <div className="pin-wrap">
          <div className="scrolling-text flex flex mb-10 text-5xl md:text-7xl lg:text-9xl font-bold">
            <div className="marquee__item flex items-center justify-center projects-title">
              Featured Works<span className="dots"></span>
            </div>
            <div className="marquee__item flex items-center justify-center projects-title">
              Featured Works<span className="dots"></span>
            </div>
            <div className="marquee__item flex items-center justify-center projects-title">
              Featured Works<span className="dots"></span>
            </div>
            <div className="marquee__item flex items-center justify-center projects-title">
              Featured Works<span className="dots"></span>
            </div>
          </div>
          <div className="work-list grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
            {projectList}
          </div>
        </div>
      </section>
    </>
  );
}
