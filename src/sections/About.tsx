import terenceng from "/assets/terenceng.png";

export default function About() {
  return (
    <>
      <section
        className="py-24 max-w-7xl mx-auto about-us-section min-h-screen flex items-center justify-center"
        id="aboutMe"
      >
        <div></div>
        <div className="flex lg:flex-nowrap md:flex-no-wrap flex-wrap   gap-4 items-center justify-center ">
          <div className="text-black dark:text-white about-text order-last lg:order-first w-1/2	flex-auto">
            <div className="about-title title mb-4 text-2xl md:text-3xl lg:text-4xl font-medium">
              About Terence
            </div>

            <p className="mb-10">
              Dynamic and detail-oriented Web Developer with 8 years of
              experience building responsive, user-friendly, and accessible
              websites. Proficient in HTML, CSS, JavaScript, and PHP, with
              expertise in modern frameworks and libraries, and also skilled in
              collaborating with cross-functional teams to deliver pixel-perfect
              designs and seamless user experiences. <br /> <br />
              Im passionate about writing clean, reusable code and optimizing
              performance for modern web standards. Adept at troubleshooting and
              resolving issues to ensure functionality across various devices
              and browsers.
            </p>
            <strong>Most importantly, I ❤️ coding.</strong>
          </div>
          <div className="order-first lg:order-last  w-1/2	 flex-auto">
            <div className="terence-img flex items-center justify-center">
              <div className="circle bg-black dark:bg-white"></div>
              <img src={terenceng} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
