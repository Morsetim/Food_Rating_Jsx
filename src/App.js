import  "./App.css";
import styled from "styled-components";
import { FoodVendor } from './FoodVendor'


const AppContainer = styled.div`
  width: 70%;
  margin: auto;
`;


function App(){
  return <AppContainer>
      <FoodVendor />
  </AppContainer>
}

export default App;