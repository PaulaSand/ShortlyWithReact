import ThirdSectionStyle from "./ThirdSectionStyle";
import Button from "../Button";

function ThirdSection() {
  return (
    <ThirdSectionStyle>
      <h2>Boost your links today</h2>
      <Button
        text="Get Started"
        bgColor="#3BD0D1"
        color="white"
        isRounded
        isLarge
        align="center"
      ></Button>
    </ThirdSectionStyle>
  );
}

export default ThirdSection;
