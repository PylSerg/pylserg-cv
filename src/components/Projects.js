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

          <div className="projects__stack-block">
            <ul className="projects__stack-list">
              <li className="projects__stack">HTML</li>
              <li className="projects__stack">CSS/SASS</li>
              <li className="projects__stack">JS</li>
              <li className="projects__stack">React</li>
              <li className="projects__stack">Redux</li>
              <li className="projects__stack">AJAX</li>
              <li className="projects__stack">REST API</li>
              <li className="projects__stack">SPA Deploy</li>
            </ul>

            <ul className="projects__languages-list">
              <li className="projects__language">
                JavaScript - <i>75.0%</i>
              </li>

              <li className="projects__language">
                CSS - <i>24.4%</i>
              </li>

              <li className="projects__language">
                HTML - <i>0.6%</i>
              </li>
            </ul>
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

          <div className="projects__stack-block">
            <ul className="projects__stack-list">
              <li className="projects__stack">HTML</li>
              <li className="projects__stack">CSS/SASS</li>
              <li className="projects__stack">JS</li>
            </ul>

            <ul className="projects__languages-list">
              <li className="projects__language">
                HTML - <i>69.8%</i>
              </li>

              <li className="projects__language">
                SCSS - <i>27.2%</i>
              </li>

              <li className="projects__language">
                JavaScript - <i>3.0%</i>
              </li>
            </ul>
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

          <div className="projects__stack-block">
            <ul className="projects__stack-list">
              <li className="projects__stack">HTML</li>
              <li className="projects__stack">CSS/SASS</li>
              <li className="projects__stack">JS</li>
            </ul>

            <ul className="projects__languages-list">
              <li className="projects__language">
                JavaScript - <i>54.6%</i>
              </li>

              <li className="projects__language">
                SCSS - <i>30.0%</i>
              </li>

              <li className="projects__language">
                HTML - <i>15.4%</i>
              </li>
            </ul>
          </div>
        </li>

        <li className="projects__item">
          <span className="projects__item-title">Resolution Calc</span>

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

          <div className="projects__stack-block">
            <ul className="projects__stack-list">
              <li className="projects__stack">HTML</li>
              <li className="projects__stack">CSS/SASS</li>
              <li className="projects__stack">JS</li>
              <li className="projects__stack">SPA Deploy</li>
            </ul>

            <ul className="projects__languages-list">
              <li className="projects__language">
                JavaScript - <i>57.4%</i>
              </li>

              <li className="projects__language">
                SCSS - <i>21.7%</i>
              </li>

              <li className="projects__language">
                HTML - <i>20.9%</i>
              </li>
            </ul>
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
        on <b>GitHub</b>
      </a>
    </section>
  );
}
