import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type ProductType = {
    imageSrc?: string;
    value?: string;
    name?: string;
    price?: string;
};

export const Product = (props: ProductType) => {
    return (
        <ProductWrapper>
            <ProductImage src={props.imageSrc} alt=""/>
            <StarsWrapper>
                <Icon
                    iconId={"fiveStars"}
                    width="192"
                    height="30"
                    viewBox="0 0 192 30"
                />
                <IconValue>{props.value}</IconValue>
            </StarsWrapper>
            <ProductDescriptionWrapper>
                <ProductName>{props.name}</ProductName>
                <ProductPrice>{props.price}</ProductPrice>
            </ProductDescriptionWrapper>
        </ProductWrapper>
    );
};

const ProductWrapper = styled.div`
    display: inline-block;
    width: 33.33%;

`;
const ProductImage = styled.img`
    width: 268px;
    height: 366px;
    

`;
const StarsWrapper = styled.div`

`;
const IconValue = styled.span``;
const ProductDescriptionWrapper = styled.div``;
const ProductName = styled.span``;
const ProductPrice = styled.span``;
