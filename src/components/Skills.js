import { useState } from "react";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";

export default function Skills() {
  const [listStyle, setListStyle] = useState({
    type: "tiles",
    style: "skills__list--tiles",
  });

  function changeListType() {
    if (listStyle.type === "tiles")
      return setListStyle({ type: "list", style: "skills__list--list" });

    return setListStyle({ type: "tiles", style: "skills__list--tiles" });
  }

  return (
    <section className="skills">
      <div className="skills__title">
        <h3>My skills</h3>

        <button
          className="toggle-button"
          type="button"
          onClick={changeListType}
        >
          {listStyle.type === "tiles" && (
            <TfiViewListAlt title="Show as a list" />
          )}
          {listStyle.type === "list" && <TfiViewGrid title="Show as a tiles" />}
        </button>
      </div>

      <ul className={["skills__list", listStyle.style].join(" ")}>
        <li className="skills__item">HTML5</li>
        <li className="skills__item">CSS3/SCSS/SASS</li>
        <li className="skills__item">JavaScript</li>
        <li className="skills__item">React</li>
        <li className="skills__item">React Hooks</li>
        <li className="skills__item">React Hook Form</li>
        <li className="skills__item">Redux</li>
        <li className="skills__item">Redux Toolkit</li>
        <li className="skills__item">ES6+</li>
        <li className="skills__item">AJAX</li>
        <li className="skills__item">Axios</li>
        <li className="skills__item">REST API</li>
        <li className="skills__item">NPM</li>
        <li className="skills__item">Chrome DevTools</li>
        <li className="skills__item">GitHub</li>
        <li className="skills__item">Figma</li>
      </ul>
    </section>
  );
}
