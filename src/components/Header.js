import React from "react";
import photo from "../assets/photo.jpg";

export default function Header() {
  return (
    <section>
      <img src={photo} alt="Avatar" width="300" />
      <h1>Serhii Pylypenko</h1>

      {/* 
            Contacts 
        */}

      <h2>Contacts</h2>
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
    </section>
  );
}
