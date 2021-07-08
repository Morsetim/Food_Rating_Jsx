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


export const AddSign = styled.div`
    position: absolute;
    color: #fff;
    font-weight:2;
    font-size: 62px;
    top: -23px;
    right: 21px;
    text-align: center;
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

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

export const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;