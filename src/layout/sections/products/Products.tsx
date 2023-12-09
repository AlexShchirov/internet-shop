import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Product } from "./Product";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo_1 from "./../../../assets/images/product_headfones_pink.webp";
import photo_2 from "./../../../assets/images/product_headfones_blue.webp";
import photo_3 from "./../../../assets/images/product_headfones_green.webp";

export const Products = () => {
    return(
        <FlexWrapper direction="column">
            <SectionTitle>Our Latest Product</SectionTitle>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante.</span>
            <ProductsWrapper>
                <Product imageSrc={photo_1} value={"4.50"} name={"Read Headphone"} price={"$ 256"}/>
                <Product imageSrc={photo_2} value={"4.50"} name={"Blue Headphone"} price={"$ 235"}/>
                <Product imageSrc={photo_3} value={"4.50"} name={"Green Headphone"} price={"$ 245"}/>
            </ProductsWrapper>

        </FlexWrapper>
    )
}

const ProductsWrapper = styled.div`
text-align: center;`