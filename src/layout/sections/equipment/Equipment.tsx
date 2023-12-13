import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import image from "./../../../assets/images/example_with_headfones.webp";
import { SectionTitle } from "../../../components/SectionTitle";

export const Equipment = () => {
    return (
        <EquipmentWrapper>
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
        </EquipmentWrapper>
    );
};
const EquipmentWrapper = styled.section``;
const Image = styled.img`
    width: 662px;
    height: 577px;
`;

const DescriptionWrapper = styled.div``;

const List = styled.ul`
    list-style-type: none;
`;

const Item = styled.li`
    :before {
        content: "";
        display: inline-block;
        width: 20px; 
        height: 20px;
        background: url(src/assets/images/arrowInCircle.svg) no-repeat;  ///!!! не подключается свг-шка
        background-size: cover; 
        margin-right: 5px; 
    }
`;
