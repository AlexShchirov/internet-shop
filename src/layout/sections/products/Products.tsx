import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Product } from "./Product";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo_1 from "./../../../assets/images/product_headfones_pink.webp";
import photo_2 from "./../../../assets/images/product_headfones_blue.webp";
import photo_3 from "./../../../assets/images/product_headfones_green.webp";
import { Container } from "../../../components/Container";

export const Products = () => {
    return (
        <ProductsWrapper>
            <Container>
                <FlexWrapper direction="column">
                    <SectionTitle>Our Latest Product</SectionTitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas facilisis nunc ipsum aliquam, ante.
                    </Text>
                    <ProductWrapper>
                        <Product
                            imageSrc={photo_1}
                            value={"4.50"}
                            name={"Read Headphone"}
                            price={"$ 256"}
                        />
                        <Product
                            imageSrc={photo_2}
                            value={"4.50"}
                            name={"Blue Headphone"}
                            price={"$ 235"}
                        />
                        <Product
                            imageSrc={photo_3}
                            value={"4.50"}
                            name={"Green Headphone"}
                            price={"$ 245"}
                        />
                    </ProductWrapper>
                </FlexWrapper>
            </Container>
        </ProductsWrapper>
    );
};
const ProductsWrapper = styled.section``;

const ProductWrapper = styled.article`
    text-align: center;
`;

const Text = styled.p`
    text-align: center;
    color: #180202;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    line-height: 150%;
    margin: 25px 0 0 0; // !!! FIXME нижний отступ тоже нужен
`;
