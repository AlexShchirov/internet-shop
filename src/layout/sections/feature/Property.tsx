import styled from "styled-components";
import { MultiplyCircle } from "../../../components/multiplyCircle/MultiplyCircle";
import { Icon } from "../../../components/icon/Icon";



type PropertyType = {
    iconId: string;
    name: string;
    description: string;
    info: string;
}


export const Property = (props: PropertyType)=>{
    return(
        <PropertyWrapper>
            <IconWrapper>
                <Icon iconId={props.iconId} width="36" height="36" viewBox="0 0 36 36"/>
            </IconWrapper>
            <PropertyTextWrapper>
                <PropertyName>{props.name}</PropertyName>
                <PropertyDescription>{props.description}</PropertyDescription>
                <PropertyInfo>{props.info}</PropertyInfo>
            </PropertyTextWrapper>
        </PropertyWrapper>
    )
}





export const PropertyWrapper = styled.div`
    display: flex;
    align-items: center;

`
export const IconWrapper = styled.div`

`
export const PropertyPicture = styled.img`

`
export const PropertyTextWrapper = styled.div`

`
export const PropertyName = styled.div`

`
export const PropertyDescription = styled.div`

`
export const PropertyInfo = styled.div`

`