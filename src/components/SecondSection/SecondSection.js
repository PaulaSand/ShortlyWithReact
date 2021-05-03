import SecondSectionStyle from "./SecondSectionStyle";
import barGraphicImg from "images/icon-brand-recognition.svg";
import detailedImg from "images/icon-detailed-records.svg";
import customizableImg from "images/icon-fully-customizable.svg";
import Card from "components/Card";
function SecondSection() {
  return (
    <SecondSectionStyle>
      <div className="textBox">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are perfoming across the web whit our advanced
          statistics dasboard.
        </p>
      </div>
      <div className="cardsBox">
        <Card
          className="recognition"
          image={barGraphicImg}
          imgDesc="barGraphicImg"
          title="Brand Recognition"
          description="Boost your brand recognition with each click.Generic links don't
              mean a thing. Branded links help instill confidece in your
              content."
        />
        <Card
          className="records"
          image={detailedImg}
          imgDesc="magnifyingGlassImg"
          title="Detailed Records"
          description="Gain insights into who is clicking your links. knowing when and
              where peolple engage whith your content helps inform better
              decisions."
        />
        <Card
          className="customizable"
          image={customizableImg}
          imgDesc="artSuplies"
          title="Fully Customizable"
          description="Inprove brand awareness and content discoverability through
          customizable links,supercharging audience engagement."
        />
        <div className="barra"></div>
      </div>
    </SecondSectionStyle>
  );
}

export default SecondSection;
