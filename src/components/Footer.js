import React from "react";
import { FaHeart } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import "../styles/footerInfo.scss";
export const Footer = () => {
  return (
    <div className="footer-info">
      <span className="dev-info">Developed with: </span>
      <FaHeart className="heart" />{" "}
      <span className="dev-name">By: Lucas H. Procopio</span>
      <a
        href="https://github.com/LucasProcopio"
        target="_blank"
        rel="noopener noreferrer"
        className="git-hub"
      >
        <DiGithubBadge />
      </a>
    </div>
  );
};
