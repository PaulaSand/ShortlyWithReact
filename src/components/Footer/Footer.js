import FooterStyle from "./FooterStyle";
import logo from "images/logo.svg";

function Footer() {
  return (
    <FooterStyle>
      <div className="imgBox">
        <img src={logo} alt="" />
      </div>
      <div className="footerNav">
        <ul>
          <p>Features</p>
          <li>Link Shortering</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <p> Resources</p>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <p> Company</p>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contac</li>
        </ul>
      </div>
      <div className="socialLogos">
        <a>
          <i className="fab fa-facebook-square"></i>
        </a>
        <a>
          <i className="fab fa-twitter"></i>
        </a>
        <a>
          <i className="fab fa-pinterest"></i>
        </a>
        <a>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </FooterStyle>
  );
}

export default Footer;
