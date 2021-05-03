import styled from "styled-components";
import Card from "components/Card";

const SecondSectionStyle = styled.div`
  background-color: lightgray;
  padding-bottom: 50px;
  text-align: center;
  padding-top: 160px;
  .textBox {
    h1 {
    }
    p {
      color: gray;
      width: 35%;
      margin: 0 auto;
    }
    margin-bottom: 80px;
  }
  .cardsBox {
    display: flex;
    position: relative;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    padding-top: 30px;

    & > div {
      position: relative;
      z-index: 1;
      margin: space-between;
    }

    .recognition {
      top: -37px;
    }
    .customizable {
      bottom: -37px;
      margin-bottom: 90px;
    }
    .barra {
      border-bottom: 5px solid cyan;
      position: absolute;
      width: 80%;
      top: 50%;
      margin-left: 5%;

      z-index: 0;
    }
  }
  @media screen and (max-width: 720px) {
    .textBox {
      h1 {
      }
      p {
        color: gray;
        width: 45%;
        margin: 0 auto;
      }
      margin-bottom: 80px;
    }

    .cardsBox {
      flex-direction: column;
      align-items: center;

      & > div {
        text-align: center;
        margin-top: 30px;
        .img {
          margin-left: auto;
          margin-right: auto;
        }
      }

      .barra {
        border: 5px solid cyan;
        position: absolute;
        height: 70%;
        width: 1.5%;
        margin-top: -400px;

        z-index: 0;
      }
    }
  }
`;

export default SecondSectionStyle;
