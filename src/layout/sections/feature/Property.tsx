import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type PropertyType = {
    iconId: string;
    name: string;
    description: string;
    info: string;
};

export const Property = (props: PropertyType) => {
    return (
        <PropertyWrapper>
            <IconWrapper>
                <Icon
                    iconId={props.iconId}
                    width="98"
                    height="98"
                    viewBox="0 0 98 98"
                />
            </IconWrapper>
            <PropertyTextWrapper>
                <PropertyName>{props.name}</PropertyName>
                <PropertyDescription>{props.description}</PropertyDescription>
                <PropertyInfo>
                    <summary>{props.info}</summary>
                </PropertyInfo>
            </PropertyTextWrapper>
        </PropertyWrapper>
    );
};

export const PropertyWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0;
`;
export const IconWrapper = styled.div`
margin-right: 20px;
`;

export const PropertyPicture = styled.img``;
export const PropertyTextWrapper = styled.div`
`;

export const PropertyName = styled.p`
color: #180202;
font-family: 'Rubik', sans-serif;
font-size: 31px;
font-weight: 500;
line-height: 140%;
`;
export const PropertyDescription = styled.p`
color: #180202;
font-family: 'Rubik', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
opacity: 0.7`;


export const PropertyInfo = styled.details`
color: #FF4948;
font-family: 'Rubik', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%;`;
