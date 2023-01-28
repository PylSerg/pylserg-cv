/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import CV from "../assets/Serhii_Pylypenko_-_Front-End_Developer.pdf";

export default function Download() {
  return (
    <div className="download__block">
      <a className="download__link" href="" download={CV}>
        <FaFileDownload />
      </a>
    </div>
  );
}
