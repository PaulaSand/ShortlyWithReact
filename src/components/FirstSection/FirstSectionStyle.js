import styled from "styled-components";
import imgBackg from "images/bg-shorten-desktop.svg";
const FirstSectionStyle = styled.div`
  .principalInfo {
    background-color: white;
    display: flex;
    margin: 0 0 50px 10%;
    overflow-x: hidden;
    max-height: 584.55px;

    .textBox {
      width: 50%;
      padding-right: 40px;
      h1 {
        margin-top: 35px;
        font-size: 72px;
      }
      p {
        font-size: 19px;
        padding-right: 20px;
        padding-bottom: 40px;
        color: gray;
      }
    }
    .imgBox {
      max-width: 639.5px;
      margin-right: -120px;

      img {
        width: 110%;
      }
    }
  }
  .inputBox {
    display: flex;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${imgBackg});
    padding-bottom: -65px;
    margin-right: 14%;
    margin-left: 10%;
    padding: 40px;
    justify-content: space-between;
    input {
      width: 77%;
      height: 50px;
      border-radius: 7px;
      border: none;
    }
  }
`;

export default FirstSectionStyle;
