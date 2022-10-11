import React from "react";
import photo from "../assets/photo.jpg";

export default function Header() {
  return (
    <section>
      <img src={photo} alt="Avatar" width="300" />
    </section>
  );
}
