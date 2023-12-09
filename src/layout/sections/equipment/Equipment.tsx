import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import image from "./../../../assets/images/example_with_headfones.webp";
import { SectionTitle } from "../../../components/SectionTitle";
import { Property } from "./Property";

export const Equipment = () => {
    return (
        <EquipmentWrapper>
            <FlexWrapper>
                <Image src={image} alt="" />
                <DescriptionWrapper>
                    <SectionTitle>Whatever you get in the box</SectionTitle>
                    <Property text={"5A Charger"} />
                    <Property text={"Extra battery"} />
                    <Property text={"Sophisticated bag"} />
                    <Property text={"User manual guide"} />
                </DescriptionWrapper>
            </FlexWrapper>
        </EquipmentWrapper>
    );
};
const EquipmentWrapper = styled.section`
`
const Image = styled.img`
    width: 662px;
    height: 577px;
`;

const DescriptionWrapper = styled.div``;
