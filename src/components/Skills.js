import { useState } from "react";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";

export default function Skills() {
  const [listType, setListType] = useState({
    type: "tiles",
    style: "skills__list--tiles",
  });

  function changeListType() {
    if (listType.type === "tiles")
      return setListType({ type: "list", style: "skills__list--list" });

    return setListType({ type: "tiles", style: "skills__list--tiles" });
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
          {listType.type === "tiles" && <TfiViewListAlt />}
          {listType.type === "list" && <TfiViewGrid />}
        </button>
      </div>

      <ul className={["skills__list", listType.style].join(" ")}>
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
