import { GiSmartphone } from "react-icons/gi"
import { AiOutlineMail } from "react-icons/ai"
import { ImLocation } from "react-icons/im"


const Footer = () => {
  return (
    <footer>
        <div className="container footer_container" id="contact">
                
            <div className="footer_contact">
                <div className="footer_wrapper">
                    <span className="footer_icon"><GiSmartphone/></span>
                    <h3>773-603-9672</h3>
                </div>
                <div className="footer_wrapper">
                    <span className="footer_icon"><AiOutlineMail/></span>
                    <h3>SAMUEL.DAEHAN@GMAIL.COM</h3>
                </div>
                <div className="footer_wrapper">
                    <span className="footer_icon"><ImLocation/></span>
                    <h3>CHICAGO, IL</h3>
                </div>
            </div>

            <div className="footer_socials">
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">LINKEDIN</a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">INSTAGRAM</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer noopener">GITHUB</a>
            </div>
        </div>
            
        
        <div className="footer_copyright">
            <small>2022 SAMUEL SON &copy; All Rights Reserved</small>

        </div>
    </footer>
  )
}

export default Footer