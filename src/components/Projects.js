import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <h3>My projects</h3>

      <ul className="projects__list">
        <li className="projects__item">
          <span className="projects__item-title">Webium OS</span>

          <div className="projects__link-block">
            <a
              href="https://webium-os.netlify.app/"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              Browse
            </a>

            <a
              href="https://github.com/PylSerg/webium-os"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </li>

        <li className="projects__item">
          <span className="projects__item-title">Ukrcottage</span>

          <div className="projects__link-block">
            <a
              href="https://pylserg.github.io/ukrcottage-concept/"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              Browse
            </a>

            <a
              href="https://github.com/PylSerg/ukrcottage-concept"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </li>

        <li className="projects__item">
          <span className="projects__item-title">Wars Of Dots</span>

          <div className="projects__link-block">
            <a
              href="https://pylserg.github.io/wofd/"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              Browse
            </a>

            <a
              href="https://github.com/PylSerg/wofd"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </li>

        <li className="projects__item">
          <span className="projects__item-title">Resolution Calculator</span>

          <div className="projects__link-block">
            <a
              href="https://resolution-calc.netlify.app/"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              Browse
            </a>

            <a
              href="https://github.com/PylSerg/resolution-calc"
              className="projects__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </li>
      </ul>

      <a
        href="https://github.com/PylSerg?tab=repositories"
        className="projects__more"
        target="_blank"
        rel="noreferrer"
      >
        More projects <br />
        on GitHub
      </a>
    </section>
  );
}
