import React from "react";

// import iconUS from "../assets/us.png";
import iconUK from "../assets/en.png";
import iconUA from "../assets/uk.png";

export default function Languages() {
  return (
    <section className="languages">
      <h3>Languages</h3>

      <ul className="languages__list">
        <li className="languages__item">
          <img src={iconUK} alt="English" width={28} />
          <snap className="languages__language">English</snap>
          <snap className="languages__level"> - &nbsp; Pre-Intermediate</snap>
        </li>
        <li className="languages__item">
          <img src={iconUA} alt="Ukrainian" width={28} />
          <snap className="languages__language">Ukrainian</snap>
          <snap className="languages__level"> - &nbsp; Native</snap>
        </li>
      </ul>
    </section>
  );
}
