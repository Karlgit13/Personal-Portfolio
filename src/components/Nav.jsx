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
    url: "https://github.com/Karlgit13",
    className: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/karl-vareskog-ab6a432a7/",
    className: "linkedIn",
  },
  {
    icon: faDiscord,
    url: "https://discordapp.com/users/1181218436446179338",
    className: "discord",
  },
];

const Nav = ({ isSection1 }) => {
  const headerRef = useRef(null);
  const prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }

      if (isSection1 || prevScrollPos.current > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSection1]);

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
    <header
      className={`header-navbar ${isSection1 ? "always-visible" : ""}`}
      ref={headerRef}
    >
      <div className="navbar">
        <nav>
          <div className="navbar-socials">
            {socials.map(({ icon, url, className }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" className={className} />
              </a>
            ))}
          </div>
        </nav>
        <nav>
          <div className="right-links">
            <a
              className="link1"
              href="#section2"
              onClick={handleClick("section2")}
            >
              Mina Projekt
            </a>
            <a
              className="link2"
              href="#section3"
              onClick={handleClick("section3")}
            >
              Om mig
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
