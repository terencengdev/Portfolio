import React, { useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
// import { IconContext } from "react-icons";

export default function Header() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  //   if (header) {
  //     const scrollTop = window.scrollY;
  //     const isSticky = () => {
  //       scrollTop >= 250
  //         ? header.classList.add("is-sticky")
  //         : header.classList.remove("is-sticky");
  //     };
  //   }
  useEffect(() => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (header) {
        scrollTop >= 250
          ? header.classList.add("is-sticky")
          : header.classList.remove("is-sticky");
      }
    });
  });
  return (
    <header className="w-full fixed z-10">
      <div className="container  max-w-7xl py-3 items-center mx-auto flex justify-between">
        <a
          href="/"
          className="text-black dark:text-white logo text-6xl font-bold"
        >
          TN
        </a>
        <button
          className="toggle-dark-mode  bg-black dark:bg-white fill-white flex items-center justify-center"
          onClick={() => darkModeHandler()}
        >
          {
            dark && <IoSunny /> // render sunny when dark is true
          }
          {
            !dark && <IoMoon /> // render moon when dark is false
          }
        </button>
      </div>
    </header>
  );
}
