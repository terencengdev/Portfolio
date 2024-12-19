import { SocialIcons } from "../components/SocialIcons";

export default function Contact() {
  return (
    <>
      <section
        className="py-24 lg:py-36 text-center contact-section overflow-hidden flex align-center justify-center flex-col"
        id="Contact"
      >
        <div className="small-text text-base/tight md:text-xl/tight lg:text-2xl/tight font-bold ">
          Wanna know more?
        </div>
        <div className="text-black dark:text-white big-title mb-10 text-4xl/tight md:text-6xl/tight lg:text-8xl/tight	font-bold ">
          Let's Connect
        </div>
        <div className="button-wrap mb-10 flex items-center justify-center">
          <a href="mailto:terencejiahao@gmail.com">
            <button className="dark-btn hover:bg-transparent bg-black dark:bg-white text-white dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white">
              Connect
            </button>
          </a>
        </div>
        <SocialIcons></SocialIcons>
      </section>
    </>
  );
}
