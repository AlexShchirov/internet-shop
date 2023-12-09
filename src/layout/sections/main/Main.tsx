import React from "react";
import photo from "../../../../src/assets/images/headfones_red.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Photo src={photo} alt="" />

                <MainDescription>
                    <Slogan>Hear it. Feel it</Slogan>
                    <MainTitle>Move with the music</MainTitle>
                    <Price>$ 435 </Price>
                    <PriceUnderline>$ 465 </PriceUnderline>
                    <Button>BUY NOW</Button>
                </MainDescription>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #bafaa1;
`


const MainDescription = styled.div``
    

const Photo = styled.img`
    object-fit: cover;
    width: 570px;
    height: 583px;
`;

const MainTitle = styled.h1`
    
`
const Slogan = styled.h4`
    
`
const Price=styled.span`
    
`
const PriceUnderline=styled.span`
    text-decoration: line-through;
`
const Button = styled.button`
    display: block;
`