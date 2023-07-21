import React from "react"; 
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/zohaib-ul-hassan-14aa44231" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/zohaibulhassan02" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/zohaibulhassan" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
