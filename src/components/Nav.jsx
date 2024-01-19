import React, { useEffect, useRef } from "react";
import "../style/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: karl.vareskog@gmail.com",
    className: "envelope",
  },
  {
    icon: faGithub,
    url: "https://www.github.com",
    className: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    className: "linkedIn",
  },
  {
    icon: faDiscord,
    url: "discord.com",
    className: "discord",
  },
];

const Nav = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header className="header-navbar" ref={headerRef}>
      <div className="navbar">
        <nav>
          <div className="navbar-socials">
            {socials.map(
              (
                { icon, url, className } // Observera att className är tillagd här
              ) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    className={className} // Använder nu korrekt extraherad className
                  />
                </a>
              )
            )}
          </div>
        </nav>
        <nav>
          <div className="right-links">
            <a
              className="link1"
              href="#section2"
              onClick={handleClick("section2")}
            >
              Projects
            </a>
            <a
              className="link2"
              href="#section3"
              onClick={handleClick("section3")}
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
