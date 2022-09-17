import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/deepraj-majalikar/inkedin.com"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Vicenzo7" target="_blank">
        <FaGithub />
      </a>
      <a href="https://leetcode.com/Vicenzo7" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
}

export default HeaderSocials