import SecondSectionStyle from "./SecondSectionStyle";
import barGraphicImg from "images/icon-brand-recognition.svg";
import detailedImg from "images/icon-detailed-records.svg";
import customizableImg from "images/icon-fully-customizable.svg";

function SecondSection() {
  return (
    <SecondSectionStyle>
      <div className="principalInfo">
        <div className="textBox">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are perfoming across the web whit our advanced
            statistics dasboard.
          </p>
        </div>
        <div className="imgBox">
          <div className="recognition">
            <div className="iconCont">
              {" "}
              <img src={barGraphicImg} alt="barGraphicImg" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click.Generic links don't
              mean a thing. Branded links help instill confidece in your
              content.
            </p>
          </div>
          <div lassName="records">
            <div className="iconCont">
              <img src={detailedImg} alt="magnifyingGlassImg" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. knowing when and
              where peolple engage whith your content helps inform better
              decisions.
            </p>
          </div>
          <div lassName="customizable">
            <div className="iconCont">
              <img src={customizableImg} alt="artSuplies" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Inprove brand awareness and content discoverability through
              customizable links,supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </SecondSectionStyle>
  );
}

export default SecondSection;
