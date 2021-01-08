import React from "react"
import Container from "./components/Container/container"
import Wrapper from "./components/Wrapper/wrapper"

function App(){
  return (
      <div className="App">
          <Wrapper>
              <Container>
              <MainSearch />
              </Container>
          </Wrapper>
      </div>
  );
}

export default App;
