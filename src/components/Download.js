/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import CV from "../assets/Frontend_Developer_-_Serhii_Pylypenko.pdf";

export default function Download() {
  return (
    <div className="download__block">
      <a className="download__link" href="" download={CV}>
        <FaFileDownload />
      </a>
    </div>
  );
}
