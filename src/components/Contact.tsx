import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p><a href="https://www.linkedin.com/in/sharathkumar-bandaru-b133a615b" target="_blank" rel="noreferrer" data-cursor="disable">LinkedIn — SharathKumar Bandaru</a></p>
            <p><a href="mailto:sharath.bandari96@gmail.com" data-cursor="disable">sharath.bandari96@gmail.com</a></p>
            <h4>Education</h4>
            <p>M.S. Computer Science — Lewis University, Illinois (2020–2021)</p>
            <p>B.Tech Information Technology — GRIET, Hyderabad, India (2014–2018)</p>
            <h4>Memberships</h4>
            <p>IEEE Member · Sigma Xi Member · RAPTOR Fellow</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://www.linkedin.com/in/sharathkumar-bandaru-b133a615b" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">LinkedIn <MdArrowOutward /></a>
            <a href="https://github.com/sharathbandari96-dot" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">GitHub <MdArrowOutward /></a>
            <a href="https://datacentrecongress.com/northamerica/speakers/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">Data Center Congress <MdArrowOutward /></a>
            <a href="https://imedconference.com/about" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">IEEE IMED 2026 <MdArrowOutward /></a>
          </div>
          <div className="contact-box">
            <h2>AWS Connectivity Engineer <br /> at <span>Amazon</span></h2>
            <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", opacity: 0.7 }}>IEEE Member · Keynote Speaker · Published Researcher</p>
            <h5><MdCopyright /> 2026 SharathKumar Bandaru</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
