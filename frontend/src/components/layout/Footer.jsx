import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Tea Junction</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @teajunction</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/om-sagar-a17698246/">
          <AiFillLinkedin />
        </a>
        <a href="https://x.com/OmSagarMishra25">
          <AiFillTwitterCircle />
        </a>
        <a href="https://github.com/OmSagar-250403">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;