import React from "react";
import styled from "styled-components";

const MainStyles = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    background-image: url("https://www.freevector.com/uploads/vector/preview/30374/Colorful-Plait-Background.jpg");
    background-position: center;
    background-size: contain;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Erica One", cursive;
    font-size: 15vw;
    font-weight: normal;
    text-align: center;
    transform: scale(1, 1.1);
  }

  h3 {
    font-size: 4vw;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    color: black;
    font-weight: 900;
  }

  h4 {
    width: 30%;
    font-size: 1.1vw;
    font-weight: normal;
    color: #aaa;
    margin: 20px auto;
  }

  button {
    background-color: #0059ff;
    color: #fff;
    width: 150px;
    margin: 0 auto;
    padding: 8px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
    border: none;
    font-size: 14px;
  }
`;

const Projects = styled.ul`
  margin-top: 40px;
`;
const Project = styled.li``;

function Main(props) {
  return (
    <MainStyles>
      <h1>creative</h1>
      <h3>Shooting eye-catching moments for fun</h3>
      <h4>
        Every image is a story in frame. Discover my most popular images and
        uncover the stories behind them.
      </h4>
      <button>View my projects</button>
      <Projects>
        <Project>
          <img
            src="https://www.freevector.com/uploads/vector/preview/30374/Colorful-Plait-Background.jpg"
            alt=""
          />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
        <Project>
          <img src="" alt="" />
          <span></span>
        </Project>
      </Projects>
    </MainStyles>
  );
}

export default Main;
