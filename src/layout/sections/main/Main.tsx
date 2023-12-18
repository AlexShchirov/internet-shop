import React from "react";
import photo from "../../../../src/assets/images/headfones_red.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Photo src={photo} alt="" />

                    <MainDescription>
                        <Slogan>Hear it. Feel it</Slogan>
                        <MainTitle>Move with the music</MainTitle>
                        <Price>$ 435 </Price>
                        <PriceUnderline>$ 465 </PriceUnderline>
                        <LinkWrapper>
                            <Link href="">BUY NOW</Link>
                        </LinkWrapper>
                    </MainDescription>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: linear-gradient(75deg, #ff9292 -7.33%, #de5150 90.21%);
    display: flex;
`;

const MainDescription = styled.div``;

const Photo = styled.img`
    object-fit: cover;
    width: 570px;
    height: 583px;
`;

const MainTitle = styled.h1`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 100px;
    font-weight: 500;
    line-height: 90px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 45px;
`;

const Slogan = styled.span`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%; /* 30.8px */
    letter-spacing: 2.2px;
    text-transform: uppercase;
`;

const Price = styled.span`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        right: -40px;
        top: 0;
        width: 2px;
        height: 100%;
        background-color: white;
        margin: 0 30px 0 30px;
    }
`;

const PriceUnderline = styled.span`
    margin-left: 30px;
    text-decoration: line-through;
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 31px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    opacity: 0.7;
`;

const LinkWrapper = styled.div`
    display: flex;
    width: 191px;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 62px;
    background: #fff;
    margin-top: 35px;
`;

const Link = styled.a`
    color: #ff4948;
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
`;
