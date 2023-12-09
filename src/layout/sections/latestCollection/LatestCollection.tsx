import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slyder/Slyder";
import { SectionTitle } from "../../../components/SectionTitle";

export const LatestCollection = () => {
    return (
        <StyledLatestCollection>
            <SectionTitle>
                Our Latest colour collection 2021npm install
                react-alice-carousel
            </SectionTitle>
            <Slider />
        </StyledLatestCollection>
    );
};

const StyledLatestCollection = styled.section`
    background-color: #f4ffc4;
`;
