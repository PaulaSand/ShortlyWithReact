import styled from "styled-components";

const ButtonStyle = styled.button`
  width: ${(props) => {
    return props.isLarge ? "180px" : "100px";
  }};
  height: ${(props) => {
    return props.isLarge ? "50px" : "40px";
  }};
  background-color: ${(props) => {
    return props.bgColor;
  }};
  color: ${(props) => {
    return props.color;
  }};
  border-radius: ${(props) => {
    return props.isRounded ? "25px" : "5px";
  }};
  font-weight: bold;
  border: 0;
  font-size: ${(props) => {
    return props.isLarge ? "20px" : "18px";
  }};
`;

export default ButtonStyle;
