import styled from "styled-components";

const ButtonStyle = styled.button`
  width: ${(props) => {
    return props.isLarge ? "200px" : "120px";
  }};
  height: ${(props) => {
    return props.isLarge ? "60px" : "40px";
  }};
  background-color: ${(props) => {
    return props.bgColor;
  }};
  color: ${(props) => {
    return props.color;
  }};
  border-radius: ${(props) => {
    return props.isRounded && "30px";
  }};
  font-weight: bold;
  border: 0;
  font-size: ${(props) => {
    return props.isLarge ? "30px" : "20px";
  }};
`;

export default ButtonStyle;
