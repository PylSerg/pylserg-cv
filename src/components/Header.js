import { useState } from "react";
import Typing from "./Typing";
import photo from "../assets/photo.webp";

export default function Header() {
  const [firstMessage, setFirstMessage] = useState(false);
  const [secondMessage, setSecondMessage] = useState(false);
  const [thirdMessage, setThirdMEssage] = useState(false);

  setTimeout(() => {
    setFirstMessage(true);
  }, 1000);

  setTimeout(() => {
    setSecondMessage(true);
  }, 3000);

  setTimeout(() => {
    setThirdMEssage(true);
  }, 5000);

  return (
    <section className="header">
      <img src={photo} alt="Avatar" width="300" height="300" />

      <div className="header__main">
        <h1>Serhii Pylypenko</h1>

        <h2>Front-End Developer</h2>

        {/* 
            Contacts 
        */}

        <h3>Contacts</h3>
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

      {firstMessage && (
        <div className="message__block">
          <Typing />

          <p className="message__text">
            Hello! I'm Serhii and I'm front-end developer.
          </p>
        </div>
      )}

      {secondMessage && (
        <div className="message__block">
          <Typing />

          <p className="message__text">
            I don't have much commercial experience, but five years of
            experience with HTML and CSS, and two years of using JavaScript
            allows me to handle just about everything.
          </p>
        </div>
      )}

      {thirdMessage && (
        <div className="message__block">
          <Typing />

          <p className="message__text">
            I am looking for a company that has interesting projects, there is
            an opportunity for further development and professional growth.
          </p>
        </div>
      )}
    </section>
  );
}
