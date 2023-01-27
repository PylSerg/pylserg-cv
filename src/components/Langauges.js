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
          <b>English</b> - Pre-Intermediate
        </li>
        <li className="languages__item">
          <img src={iconUA} alt="Ukrainian" width={28} />
          <b>Ukrainian</b> - Native
        </li>
      </ul>
    </section>
  );
}
