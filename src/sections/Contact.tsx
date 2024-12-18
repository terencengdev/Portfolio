import React, { useState, useRef } from "react";
import { SocialIcons } from "../components/SocialIcons";

export default function Contact() {
  return (
    <>
      <section
        className="py-36 text-center contact-section overflow-hidden flex align-center justify-center flex-col"
        id="Contact"
      >
        <div className="small-text text-base/tight md:text-xl/tight lg:text-2xl/tight font-bold ">
          Wanna know more?
        </div>
        <div className="big-title mb-10 text-4xl/tight md:text-6xl/tight lg:text-8xl/tight	font-bold ">
          Let's Connect
        </div>
        <div className="button-wrap mb-10 flex items-center justify-center">
          <a href="mailto:terencejiahao@gmail.com">
            <button className="dark-btn">Connect</button>
          </a>
        </div>
        <SocialIcons></SocialIcons>
      </section>
    </>
  );
}
