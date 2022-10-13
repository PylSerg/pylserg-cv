import { useState, useEffect } from "react";
import { RiSendPlaneFill, RiChatSmile3Line } from "react-icons/ri";
import Typing from "./Typing";
import photo from "../assets/photo.webp";

export default function Header() {
  const [typingMessage, setTypingMessage] = useState(false);
  const [firstMessage, setFirstMessage] = useState(false);
  const [secondMessage, setSecondMessage] = useState(false);
  const [thirdMessage, setThirdMessage] = useState(false);
  const [fourthMessage, setFourthMessage] = useState(false);
  const [guestMessage, setGuestMessage] = useState({
    readOnly: false,
    sended: false,
    text: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      showFirstMessage();
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      showSecondMessage();
    }, 3500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      showThirdMessage();
    }, 6500);
  }, []);

  useEffect(() => {
    if (guestMessage.sended)
      setTimeout(() => {
        showFourthMessage();
      }, 4000);

    return;
  }, [guestMessage.sended]);

  useEffect(() => {
    if (guestMessage.text.length >= 1) return setSending(true);

    return setSending(false);
  }, [guestMessage.text]);

  function showFirstMessage() {
    setFirstMessage(true);
    setTypingMessage(true);

    setTimeout(() => {
      setTypingMessage(false);
    }, 1250);
  }

  function showSecondMessage() {
    setSecondMessage(true);
    setTypingMessage(true);

    setTimeout(() => {
      setTypingMessage(false);
    }, 1250);
  }

  function showThirdMessage() {
    setThirdMessage(true);
    setTypingMessage(true);

    setTimeout(() => {
      setTypingMessage(false);
    }, 1250);
  }

  function showFourthMessage() {
    setFourthMessage(true);
    setTypingMessage(true);

    setTimeout(() => {
      setTypingMessage(false);
    }, 1250);
  }

  function changesGuestMessage(e) {
    setGuestMessage({
      ...guestMessage,
      text: e.currentTarget.value,
      message: e.currentTarget.value,
    });
  }

  function sendedGuestMessage() {
    setGuestMessage({
      ...guestMessage,
      readOnly: true,
      sended: true,
      text: "",
    });
  }

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

      <div className="message__container">
        <h3 className="message__title">
          About me
          {typingMessage && (
            <span className="message__title-typing">Serhii is typing...</span>
          )}
        </h3>

        <div className="message__field">
          {!firstMessage && <p className="message__preload">No messages</p>}

          {firstMessage && (
            <div className="message__block">
              <img className="message__avatar" src={photo} alt="Avatar" />

              <Typing />

              <p className="message__text">
                Hello! I'm Serhii and I'm front-end developer.
              </p>
            </div>
          )}

          {secondMessage && (
            <div className="message__block">
              <img className="message__avatar" src={photo} alt="Avatar" />

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
              <img className="message__avatar" src={photo} alt="Avatar" />

              <Typing />

              <p className="message__text">
                I am looking for a company that has interesting projects, there
                is an opportunity for further development and professional
                growth.
              </p>
            </div>
          )}

          {guestMessage.sended && (
            <div className="message__block message__block--guest">
              <p className="message__text message__text--guest">
                {guestMessage.message}
              </p>
            </div>
          )}

          {fourthMessage && (
            <div className="message__block">
              <img className="message__avatar" src={photo} alt="Avatar" />

              <Typing />

              <p className="message__text">
                You can contact me using the given contacts.
              </p>
            </div>
          )}
        </div>

        <div className="message__send">
          <RiChatSmile3Line className="message__icon" />

          <input
            type="text"
            maxLength="120"
            value={guestMessage.text}
            placeholder="Message"
            onChange={changesGuestMessage}
            readOnly={guestMessage.readOnly}
          />

          <button
            className="message__send-button"
            type="button"
            onClick={sendedGuestMessage}
            disabled={!sending}
          >
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    </section>
  );
}
