import { useRef } from "react";
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

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
      lenis.on("scroll", ScrollTrigger.update);

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".banner-title .small-text",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          y: 0,
        }
      );
      gsap.fromTo(
        ".banner-title .big-title",
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );

      gsap.to(".banner-title", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner-section",
          start: "+=50",
          end: "+=300",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".about-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-section",
            start: "20%",
            end: "+=300",
            scrub: true,
          },
        }
      );

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

      mm.add("(max-width: 767px)", () => {
        // desktop setup code here...

        gsap.fromTo(
          ".terence-img",
          {
            x: "0",
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

        return () => {
          // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
      });
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
      // var panels = gsap.utils.toArray(".work-list");
      // gsap.to(".projects-section .work-list", {
      //   scrollTrigger: {
      //     // scroller: pageContainer, //locomotive-scroll
      //     scrub: true,
      //     trigger: ".projects-section",
      //     pin: true,
      //     // anticipatePin: 1,
      //     start: "top -10%",
      //     end: "bottom 50%",
      //   },
      //   x: -2000,
      //   ease: "none",
      // });
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
