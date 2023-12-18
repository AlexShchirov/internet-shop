import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { Property } from "./Property";
import photo from "./../../../assets/images/example_headfones_yellow.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Feature = () => {
    return (
        <FeatureWrapper>
            <Container>
                <FlexWrapper>
                    <PropertyWrapper>
                        <SectionTitle>
                            Good headphones and loud music is all you need
                        </SectionTitle>
                        <Property
                            iconId={"battery"}
                            name={"Battery"}
                            description={"Battery 6.2V-AAC codec"}
                            info={"Lern More"}
                        />
                        <Property
                            iconId={"bluetooth"}
                            name={"Bluetooth"}
                            description={"Battery 6.2V-AAC codec"}
                            info={"Lern More"}
                        />
                        <Property
                            iconId={"microphone"}
                            name={"Microphone"}
                            description={"Battery 6.2V-AAC codec"}
                            info={"Lern More"}
                        />
                    </PropertyWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </FeatureWrapper>
    );
};

const FeatureWrapper = styled.section`
    height: 100vh;
    margin: 0 0 50px 0;
`;
const PropertyWrapper = styled.article``;

const PhotoWrapper = styled.div`
    margin: 66px 170px 0 0;
    width: 622px;
    height: 604px;

    background: url("./../../../assets/images/backgroundNotes.svg") cover
        no-repeat;
    z-index: 1;
`;

const Photo = styled.img`
    width: 332px;
    height: 474px;
    flex-shrink: 0;
`;
