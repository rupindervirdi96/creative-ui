import React from "react";
import styled from "styled-components";

const NavbarStyles = styled.div`
  background-color: transparent;
  width: 100%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0%;
  z-index:1;
  div {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
    h3 {
      letter-spacing: 0px;
      font-weight: bold;
    }
    ul {
      display: flex;
      li {
        padding: 5px;
        margin: 0px 10px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

function Navbar(props) {
  return (
    <NavbarStyles>
      <div>
        <h3>John Decor</h3>
        <ul type="none">
          <li>Work</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
