import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container" id="contact">
        <div className="footer_contact">
          <div className="footer_wrapper">
            <span className="footer_icon">
              <GiSmartphone />
            </span>
            <h3>773-603-9672</h3>
          </div>
          <div className="footer_wrapper">
            <span className="footer_icon">
              <AiOutlineMail />
            </span>
            <h3>SAMUEL.DAEHAN@GMAIL.COM</h3>
          </div>
          <div className="footer_wrapper">
            <span className="footer_icon">
              <ImLocation />
            </span>
            <h3>CHICAGO, IL</h3>
          </div>
        </div>

        <div className="footer_socials">
          <a
            href="https://linkedin.com/in/samuel-son4/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LINKEDIN
          </a>
          {/* <a
						href="https://instagram.com/"
						target="_blank"
						rel="noreferrer noopener"
					>
						INSTAGRAM
					</a> */}
          <a
            href="https://github.com/Son-Daehan"
            target="_blank"
            rel="noreferrer noopener"
          >
            GITHUB
          </a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2022 SAMUEL SON</small>
      </div>
    </footer>
  );
};

export default Footer;
