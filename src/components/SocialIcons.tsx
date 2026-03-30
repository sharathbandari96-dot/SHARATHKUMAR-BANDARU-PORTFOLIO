import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/sharathkumar-bandaru-b133a615b" target="_blank" rel="noreferrer" data-cursor="disable">
        <FaLinkedin />
      </a>
      <a href="https://github.com/sharathbandari96-dot" target="_blank" rel="noreferrer" data-cursor="disable">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
