import styled from "styled-components";



type PropertyType = {
    imageSrc: string;
    name: string;
    description: string;
    info: string;
}


export const Property = (props: PropertyType)=>{
    return(
        <PropertyWrapper>
            <PropertyPicture src={props.imageSrc}/>
            <PropertyTextWrapper>
                <PropertyName>{props.name}</PropertyName>
                <PropertyDescription>{props.description}</PropertyDescription>
                <PropertyInfo>{props.info}</PropertyInfo>
            </PropertyTextWrapper>
        </PropertyWrapper>
    )
}





export const PropertyWrapper = styled.div`

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