import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

type PropertyPropsPype = {
    text: string;
}


export const Property = (props: PropertyPropsPype)=> {
    return(
        <PropertyWrapper>
            <Icon iconId={"arrowToRight"}/>
            <Description>{props.text}</Description>
        </PropertyWrapper>
    )
}


const PropertyWrapper = styled.div`
    
`
const Description = styled.span`
    
`