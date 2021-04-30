import HeaderStyle from "./HeaderStyle";
import logo from "images/logo copy.svg";
import Button from "../Button";
function Header() {
  return (
    <HeaderStyle>
      <nav>
        <a href="#" className="imgBox">
          <img src={logo} alt="Shortly Logo" />
        </a>
        <div className="menu">
          <ul>
            <li> Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="loginZone">
          <Button
            text="login"
            bgColor="transparent"
            color="#A4A4A7"
            isRounded
          />
          <Button text="Sign Up" bgColor="#3BD0D1" color="white" isRounded />
        </div>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
