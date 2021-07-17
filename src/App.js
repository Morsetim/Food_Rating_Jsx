import  "./App.css";
import styled from "styled-components";
import { FoodVendor } from './FoodVendor'


const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;



function App(){

  return <AppContainer>
      <FoodVendor />
  </AppContainer>
}

export default App;