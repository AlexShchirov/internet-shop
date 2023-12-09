import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Subscribe = () =>{
    return(
        <SubscribeWrapper>
            <SectionTitle>Subscribe</SectionTitle>
            <Text>Lorem ipsum dolor sit amet, consectetur</Text>
            <Form>
                <Field type="text" placeholder="Введите текст"/>
                <Button type="submit">Subscribe</Button>
            </Form>
        </SubscribeWrapper>
    )
}


const SubscribeWrapper = styled.section`
    text-align: center;
`
const Text = styled.span`
    
`
const Form = styled.form`
    min-width: 500px;
    width: 100px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;

`
const Field = styled.input`
    
`
const Button = styled.button`
    
`
