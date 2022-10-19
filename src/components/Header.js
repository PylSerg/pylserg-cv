import React from "react";
import photo from "../assets/photo.webp";

export default function Header() {
  return (
    <section className="header">
      <img
        className="header__photo"
        src={photo}
        alt="Avatar"
        width="300"
        height="300"
      />

      <div className="header__main">
        <h1>Serhii Pylypenko</h1>

        <h2>Front-End Developer</h2>

        {/*
            Contacts
        */}

        <h3 className="contacts__title">Contacts</h3>
        <ul>
          <li>
            Tel.: <a href="tel:+380967199192">+38 (096) 719 91 92</a>{" "}
            <a href="viber://chat?number=380967199192">[ Viber ]</a>
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
      </div>

      {/*
            About me
        */}
    </section>
  );
}
