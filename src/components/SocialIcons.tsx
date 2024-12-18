export function SocialIcons() {
  const socialData = [
    {
      id: 1,
      class: "linkedin",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          style={{ color: "#000" }}
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      link: "https://www.fca.edu.sg/",
    },
  ];

  const socialIcons = socialData.map((icon) => {
    return (
      <div
        key={icon.id}
        className="social-icons flex align-center justify-center"
      >
        <a href="" className={icon.class}>
          {icon.svg}
        </a>
      </div>
    );
  });
  return <div className="flex justify-center gap-10">{socialIcons}</div>;
}
