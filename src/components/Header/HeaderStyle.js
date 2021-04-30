import styled from "styled-components";

const HeaderStyle = styled.header`
  padding: 50px 10%;
  background-color: white;

  img {
    margin-right: 20px;
  }
  nav {
    display: flex;

    ul {
      display: flex;

      li {
        color: gray;
        list-style: none;
        padding-right: 30px;
      }
    }
    .loginZone {
      margin-left: auto;
    }
  }
`;

export default HeaderStyle;
