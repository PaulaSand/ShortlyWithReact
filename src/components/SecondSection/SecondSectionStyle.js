import styled from "styled-components";

const SecondSectionStyle = styled.div`
  background-color: lightgray;
  height: 100%;

  padding-bottom: 50px;
  p {
    color: gray;
  }
  .imgBox {
    display: flex;
    align-self: center;
    margin: 5% 10%;
    div {
      background-color: white;
      height: 250px;
      width: 300px;
      margin: auto;
      padding: 25px;
      p {
        font-size: 14px;
      }
      .iconCont {
        background-color: hsl(257, 27%, 26%);
        width: 35%;
        height: auto;
        border-radius: 60%;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export default SecondSectionStyle;
