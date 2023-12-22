import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import image from "./../../../assets/images/example_with_headfones.webp";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const Equipment = () => {
    return (
        <EquipmentWrapper>
            <Container>
                <FlexWrapper>
                    <Image src={image} alt="" />
                    <DescriptionWrapper>
                        <SectionTitle>Whatever you get in the box</SectionTitle>
                        <List>
                            <Item>5A Charger</Item>
                            <Item>Extra battery</Item>
                            <Item>Sophisticated bag</Item>
                            <Item>User manual guide</Item>
                        </List>
                    </DescriptionWrapper>
                </FlexWrapper>
            </Container>
        </EquipmentWrapper>
    );
};
const EquipmentWrapper = styled.section`
margin-top: 130px;
`;

const Image = styled.img`
    width: 662px;
    height: 577px;
`;

const DescriptionWrapper = styled.div``;

const List = styled.ul`
    margin-top: 50px;
`;

const Item = styled.li`
    list-style-type: none;
    list-style-image: url(src/assets/images/arrowInCircle.svg);
    position: relative;
    margin-bottom: 40px;
    

    ::after {
    content: "";
    position: absolute;
    width: 290px;
    left: 0;
    right: 0;
    bottom: -20px; 
    border-bottom: 1px solid black;
    opacity: 0.1;
    background: #000;
    } 
`
