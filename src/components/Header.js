import React from "react";
import photo from "../assets/photo.jpg";

export default function Header() {
  return (
    <section className="header">
      <img src={photo} alt="Avatar" width="300" />
      <h1>Serhii Pylypenko</h1>

      <h2>Front-End Developer</h2>

      {/* 
            Contacts 
        */}

      <h3>Contacts</h3>
      <ul>
        <li>
          Tel.: <a href="tel:+380967199192">+38 (096) 719 91 92</a>{" "}
          <a href="viber://chat?number=380967199192">[Viber]</a>
        </li>

        <li>
          Telegram:{" "}
          <a href="tg://resolve?domain=Serhii_web_dev">@Serhii_web_dev</a>
        </li>

        <li>
          Email:{" "}
          <a href="mailto:pylypenko.sn@gmail.com">pylypenko.sn@gmail.com</a>
        </li>

        <li>Kyiv, Ukraine</li>
      </ul>

      {/* 
            About me
        */}

      <p>
        Hello! I'm Serhii and I'm front-end developer. I don't have much
        commercial experience, but five years of experience with HTML and CSS,
        and two years of using JavaScript allows me to handle just about
        everything. I am looking for a company that has interesting projects,
        there is an opportunity for further development and professional growth.
      </p>
    </section>
  );
}
