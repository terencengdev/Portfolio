import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScramble } from "use-scramble";

export default function Banner() {
  const [skillIndex, setSkillIndex] = useState(0);
  const intervalRef = useRef(null);
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  let pageWrapper = document.querySelector(".banner-section");

  // hook returns a ref rotating text
  let skills_texts = [
    "Frontend Developer",
    "Web Magician",
    "Frontend Magician",
    "Web Developer",
  ];

  const ScrambleSkills = () => {
    // apply the ref to a node

    const { ref } = useScramble({
      text: skills_texts[skillIndex],
      onAnimationStart: () => {
        // clearInterval(intervalRef.current);
      },
      onAnimationEnd: () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills_texts.length);
        }, 2000);
      },
    });
    return <span ref={ref} className="skill scramble-text-1 ml-2 mr-2"></span>;
  };

  return (
    <>
      <section className="pt-36 max-w-7xl mx-auto banner-section min-h-80">
        <div className="mx-auto container flex justify-start items-center flex-col">
          <h1
            ref={container}
            className="banner-title min-w-96 font-inter text-center"
          >
            <div className="small-text text-base/tight md:text-xl/tight lg:text-2xl/tight font-bold ">
              Hola! I'm Terence <span className="waving-hand">👋</span>
            </div>
            <div className="big-title text-4xl/tight md:text-6xl/tight lg:text-8xl/tight	font-bold ">
              <ScrambleSkills></ScrambleSkills>
            </div>
          </h1>
        </div>
      </section>
    </>
  );
}
