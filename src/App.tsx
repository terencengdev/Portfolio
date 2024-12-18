import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "./App.css";
import Banner from "./sections/Banner.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";

import { ScrollDown } from "./components/ScrollDown.tsx";

function App() {
  const container = useRef(null);

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  useGSAP(
    () => {
      // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
      lenis.on("scroll", ScrollTrigger.update);

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".terence-img .circle",
        {
          scale: 0,
        },
        {
          scale: 1,
        }
      );

      gsap.fromTo(
        ".terence-img",
        {
          x: "-50%",
          y: "-55vh",
          scale: 1.5,
        },
        {
          x: "0",
          y: 0,
          scale: 1,
          borderRadius: "50%",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top -50%",
            end: "+=300",
            scrub: true,
          },
        }
      );
      let tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: ".banner-section",
          start: "+=200",
          end: "+=500",
        },
      });
      tl.to(".terence-img .circle", {
        scale: 0,
      });

      tl.to(".terence-img .circle", {
        scale: 1,
      });

      gsap.fromTo(
        ".terence-img",
        {
          x: "-50%",
          y: "-55vh",
          scale: 1.5,
        },
        {
          x: "0",
          y: 0,
          scale: 1,
          borderRadius: "50%",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top -50%",
            end: "+=300",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".projects-section .work-list", {
        scrollTrigger: {
          // scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: ".projects-section",
          pin: true,
          // anticipatePin: 1,
          start: "top -10%",
          end: "bottom 50%",
        },
        x: -2000,
        ease: "none",
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <main ref={container} className="main-container">
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollDown />
    </main>
  );
}

export default App;
