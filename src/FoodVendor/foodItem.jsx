import styled from "styled-components";


export const BoxContainer = styled.div`
    width: 30%;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    margin-top: 10px;
    margin-bottom: 25px;
    margin: 10px;
    position: relative;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 18px;
    @media (max-width:480px) {
        width: 100%;
    }
`;

export const FoodItemImage = styled.img`
    width:100%;
    height: 45%;
    box-sizing: border-box;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 18px;
    @media (max-width:480px) {
        width: 100%;
    }
`;

export const FoodTitle = styled.h2`
    font-size: 16px;
    color: #312929;
    position: absolute;
    left: 10px;
`;

export const FoodPrice = styled.h2`
    font-size: 16px;
    color: #312929;
    position: absolute;
    right: 16px;
`;

export const FoodLocation = styled.p`
    font-size: 15px;
    font-weight: 200;
    position: absolute;
    top: 219px;
    left: 10px;
`;

export const FoodText  = styled.p`
    font-size: 15px;
    font-weight: 200;
    position: absolute;
    right: 10px;
    top: 250px;
    left: 10px;
`;

export const RatingContainer = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    position: absolute;
    top: 325px;
`;



export const Button = styled.button`
    height: 50px;
    width: 35%;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    text-align: center;
    color: #fff;
    background-color: orange;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 10px;
    border: 1px solid #fff;
`;

export const AddContainer = styled.div`
    height: 60px;
    width: 30%;
    background-color: orange;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    position: relative;
    top:15px;
`;

export const AddSign = styled.div`
    position: absolute;
    color: #fff;
    font-weight:2;
    font-size: 62px;
    margin-bottom: 14px;
    text-align: center;
`;

export const Title = styled.div`
    background-color: orange;
    height: 75px;
    width: 100%;
    position: relative;
`;

export const PageTitle = styled.p`
    color: #fff;
    font-size: 44px;
    font-family: 'Caveat', cursive;
    position: absolute;
    bottom: -30px;
    transform: rotate(-35deg);
    font-weight: 700;
    left: 20px;
    @media (max-width:480px) {
        transform: none;
        left: 100px;
    }
`;

export const ToggleIcon = styled.div`
    @media (min-width:480px) {
        display: none;
    }
    @media (max-width:480px) {
    font-size: 42px;
    position: absolute;
    left: 14px;
    color: white;
    background-color: white;
    }
`;

export const MealIcon = styled.div`
    @media (min-width:480px) {
        display: none;
    }
    @media (max-width:480px) {
    font-size: 42px;
    position: absolute;
    left: 210px;
    color: white;
    }
`;

export const FoodPriceAndFoodTitle = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width:480px){
        display: flex;
        flex-flow: column;
    }
`;

export const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`;

export const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;