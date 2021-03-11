import Record from "./components/Record";
import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


function App() {
  return (
    <div>
    <Wrapper>
      <Title>Employee Directory</Title>
    </Wrapper>
    <Record/>
    </div>
  );
};



export default App;
