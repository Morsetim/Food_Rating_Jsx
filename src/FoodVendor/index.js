import React, { useState, useEffect } from 'react';
import Ratings from './Ratings/ratings.jsx';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from 'axios';
import { 
  BoxContainer, 
  FoodItemImage, 
  Wrapper,
  MainContainer,
  FoodTitle, 
  FoodText,
  FoodLocation,
  FoodPriceAndFoodTitle,
  FoodPrice,
  RatingContainer,
  AddContainer,
  AddSign,
  Button,
  Spinner
} from './foodItem'


export function FoodVendor() {
  const [fdvendor, setFdvendor] = useState([]);
  const [spinner, setSpinner] = useState(false) 


  const foodItems = 'https://asm-dev-api.herokuapp.com/api/v1/food';

  const getAllmeals = () => {
    setSpinner(true)
    axios.get(foodItems) 
      .then((response) =>{
        setSpinner(false)
        console.log(response.data.data.meals)
        const allMeals = response.data.data.meals
        setFdvendor(allMeals)
      })
      .catch(error => console.log(error))
  }

  useEffect(()=>
   {
    getAllmeals()
   }, [])

  return (
  <MainContainer>
  {spinner ?<Spinner> <Loader type="Puff" color="#FFA500" 
  height={300} width={300} timeout={30000}/></Spinner> : 
  <>
    <Wrapper>
      {fdvendor.map(item =>{
        return (
          <BoxContainer>
            <FoodItemImage alt="" src={item.strMealThumb}/>
            <FoodPriceAndFoodTitle>
            <FoodTitle>{item.strMeal}</FoodTitle>
            <FoodPrice>{item.price}</FoodPrice>
            </FoodPriceAndFoodTitle>
            <FoodLocation>{item.title}</FoodLocation>
            <FoodText>{item.description.length > 50 ? 
              `${item.description.substring(0, 50)}....` : item.description}
            </FoodText>
            <RatingContainer>
            <Ratings ratings = {item.ratings}/>
            <AddContainer>
              <AddSign>&#43;</AddSign>
            </AddContainer>
            </RatingContainer>
            </BoxContainer>
            )
          })
        }
        </Wrapper>
        <Button>Learn More</Button>
        </>
      }
    </MainContainer>
  )
}
