import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Card, InputNumber } from 'antd';

//GLOBAL 
export const GeneralWrapper = styled.div`
    margin-top: 5%;
    width:100%
`
export const GeneralHeader = styled.h1`
    text-align: center;
    font-family:moonlight;
`
export const GeneralBody = styled.p`
    margin-left: 12%;
    margin-right:12%;
    font-size:15px;
`
export const UnderlineP = styled.p`
    &:hover {
        text-decoration: underline
    }
`

//LANDING
export const LandingButton = styled(Button)`
    border-radius: 5px;
    border-color:#3E3F5A;
    height: 50px;
    width: 150px;
    background-color: #3E3F5A;
    color:white;

    &:hover{
        height:55px;
        width:160px;
        background-color: #BECAFF;
        color:black;
        transition:0.5s;
    }
`

//HEADERS
export const HeaderLogo = styled(NavLink)`
    position: absolute;
    left:3%;
    color: black;
`

export const TopRightIcons = styled.div`
    color:rgb(146, 146, 146);
    position: absolute;
    right: 7%;
    top: 0;
`

//FOOTERS
export const FootHeader = styled.div`
    color:rgb(230, 220, 220);
    font-size:15px;
    font-family:"Muli";
`

export const FootText = styled.div`
    color:rgb(230, 220, 220);
    font-size: 12px;
    font-family: 'Muli';
    font-weight: 100;
    margin-top: 5px;
    margin:4px;
    padding:0;
`

export const FootTextBold = styled.div`
    font-weight:bold;
    margin-bottom: 10px;
`

export const FootInfo = styled.div`
    bottom:0;
    width:100%;
    height:100%;
    left:0;
    right:0;
`

export const FootFlowers = styled.div`
    bottom:0;
    z-index:2;

`

export const Flower1 = styled.img`
    padding: 0;
    margin:0;
    float:left;
    height:200px;
    width:200px;
    maxWidth: 300px;
    minWidth: 200px;
    z-index:1;
`

export const Flower2 = styled.img`
    padding: 0;
    margin:0;
    height:200px;
    width:200px;
    maxWidth: 300px;
    minWidth: 200px;
    float:right;
    overflowX: hidden;
`

//ABOUT
export const StyledImage = styled.img`
    display: block;
    max-height:65vh;
    max-width:100%;
    margin-left:auto;
    margin-right:auto;
`
export const CarouselWrapper = styled.div`
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Carouselh3 = styled.h3`
    color: black;
    background-color:white;
    margin-right:10%;
    margin-left:10%;
    line-height: 160px;
    text-align: center;
`

//PRODUCTS

export const AddToCart = styled(Button)`
    background-color: #707F9C;
    border-radius: 5px;
    color:white;
    margin-top : 4px;
    transition: all 0.5s;
    &:hover {
        background-color:#42C7F5;
        color:white;
        transform:scale(1.1);
    }
`
//INSTRUCTIONS
export const InstructionCard = styled(Card)`
    height: 120%;
    margin-left: 5%;
    border-radius: 20px;
`

//CART
export const MiniImg = styled.img`
    height: 50px;
    width:auto;
`

export const RemoveButton = styled(Button)`

    &:hover {
        border-color: red;
        color: red;
    }
`

//INDIE PRODUCTS
export const AddToCartButton = styled(Button)`
    margin-top: 5%;
    background-color: #5C5C5C;
    border-color:#5C5C5C;
    border-radius:5px;
    &:hover {
        background-color:#7D707D;
        transition:0.8s;
    }
`

export const InputNumberProducts = styled(InputNumber)`
    min-width:50px;
    width:15%;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom-color:#707070;
`

export const SideImageStyle = styled.img`
    height: 191px;
    width:auto;
`

//CHECKOUT
export const CheckoutImage = styled.img`
    height:50px;
    width:auto;
`