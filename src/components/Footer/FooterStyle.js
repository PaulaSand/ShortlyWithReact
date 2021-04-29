import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  background-color: hsl(245, 9%, 15%);
  font-size: 40px;
  padding: 50px 10%;
  font-weight: bold;

  .footerNav {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  .imgBox {
    width: 27%;
  }

  .socialLogos {
    width: 20%;
    display: flex;
    align-items: start;
    margin-left: 10%;

    a {
      color: white;
      /*height: 27px;
      align-items: top;*/
      i {
        font-size: 30px;
      }
    }

    a ~ a {
      margin-left: 15px;
      margin-top: 0px;
    }
  }

  .logo {
    color: white;
  }

  h1 {
    color: blue;
  }

  ul {
    font-size: 17px;
    color: white;
    list-style: none;
    p {
      margin-bottom: 13px;
    }
  }

  li {
    /*margin-top: 5px;*/
    color: gray;
    font-weight: normal;
  }
  .socialButtons {
    display: flex;
  }
`;

export default FooterStyle;
