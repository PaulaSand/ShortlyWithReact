import ButtonStyle from "./ButtonStyle";

function Button({ text, bgColor, color, isRounded, isLarge, align }) {
  return (
    <ButtonStyle
      bgColor={bgColor}
      color={color}
      isRounded={isRounded}
      isLarge={isLarge}
    >
      {text}
    </ButtonStyle>
  );
}

export default Button;
