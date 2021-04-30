import FirstSectionStyle from "./FirstSectionStyle";
import Button from "../Button";
import imgDesk from "images/illustration-working.svg";

function FirstSection() {
  return (
    <FirstSectionStyle>
      <div className="principalInfo">
        <div className="textBox">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are perfoming.
          </p>
          <Button
            text="Get Started"
            bgColor="#3BD0D1"
            color="white"
            isRounded
            isLarge
          />
        </div>
        <div className="imgBox">
          <img src={imgDesk} alt="Girl-working-at-desk" />
        </div>
      </div>
      <div className="inputBox">
        <input type="Shorten a link here..." />
        <Button text="Shorten It!" bgColor="#3BD0D1" color="white" isLarge />
      </div>
    </FirstSectionStyle>
  );
}

export default FirstSection;
