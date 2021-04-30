import styled from "styled-components";
import imgBackg from "images/bg-boost-desktop.svg";

const ThirdSectionStyle = styled.div`
  width: 100%;
  padding: 45px;
  text-align: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${imgBackg});
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  h2 {
    color: white;
    margin-bottom: 25px;
    font-size: 35px;
  }
`;
export default ThirdSectionStyle;
