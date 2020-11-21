import "./App.css";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Main from "./components/main";

const AppStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppStyles>
      <Navbar />
      <Main />
    </AppStyles>
  );
}

export default App;
