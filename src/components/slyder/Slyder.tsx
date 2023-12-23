import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img_1 from "./../../assets/images/collection_headfones_red.webp";
import img_2 from "./../../assets/images/collection_headfones_blue.webp";
import img_3 from "./../../assets/images/collection_headfones_orange.webp";
import styled from "styled-components";

type SlidePropsType = {
    image: string;
};

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Slide = (props: SlidePropsType) => {
    return (
        <SSlide>
            <Image src={props.image} />
        </SSlide>
    );
};

const images = [
    <Slide image={img_1} />,
    <Slide image={img_2} />,
    <Slide image={img_3} />,
];

export const Slider = () => (
    <SSlider>
        <AliceCarousel mouseTracking items={images} responsive={responsive} />
    </SSlider>
);

const SSlider = styled.div`

`;


const SSlide = styled.div`
    text-align: center;
    border-radius: 30px;
    border: 1px solid rgba(125, 117, 117, 0.3);

    
`;

const Image = styled.img`
    width: 324px;
    height: 302px;
`;
