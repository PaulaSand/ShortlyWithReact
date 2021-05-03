import styled from "styled-components";

const CardStyle = styled.div`
  background-color: white;
  height: 230px;
  width: 320px;

  padding: 25px;
  border-radius: 5px;
  text-align: left;

  .iconContent {
    background-color: hsl(257, 27%, 26%);
    width: 28%;
    height: 40%;
    border-radius: 50%;
    padding: 20px;
    margin-top: -23%;
    img {
      width: 100%;
    }
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  p {
    color: grey;
    font-size: 14px;
  }
`;
export default CardStyle;
