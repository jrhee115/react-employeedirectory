import React from "react"
import Container from "./components/container/container"
import Wrapper from "./components/wrapper/wrapper"
import MainSearch from "./components/MainSearch/mainsearch"

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
