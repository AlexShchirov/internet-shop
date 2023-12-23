import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slyder/Slyder";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const LatestCollection = () => {
    return (
        <StyledLatestCollection>
            <Container>
                <SectionTitle>Our Latest colour collection 2021</SectionTitle>
                <Slider />
            </Container>
        </StyledLatestCollection>
    );
};

const StyledLatestCollection = styled.section`
    
`;
