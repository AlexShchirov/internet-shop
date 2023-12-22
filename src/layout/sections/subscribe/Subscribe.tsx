import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Subscribe = () => {
    return (
        <Container>
            <FlexWrapper justify={"center"} align={"center"}>
                <SubscribeWrapper>
                    <SectionTitle>Subscribe</SectionTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Form>
                        <Field type="text" placeholder="Enter Your email address" />
                        <Button type="submit">Subscribe</Button>
                    </Form>
                </SubscribeWrapper>
            </FlexWrapper>
        </Container>
    );
};

const SubscribeWrapper = styled.section`
    margin-top: 150px;
    padding-top: 50px;
    text-align: center;
    justify-content: center;
    width: 712px;
    height: 292px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff4f4;
`;
const Text = styled.p`
    margin-bottom: 50px;
`;
const Form = styled.form`
    min-width: 500px;
    width: 100px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    
    outline: none;
`;

const Field = styled.input`
    width: 500px;
    padding: 15px 30px;
    border-radius: 73px;
    background: #fff;
    color: #180202;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    line-height: 150%;
`;

const Button = styled.button`
    display: inline-flex;
    padding: 15px 30px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 50px;
    background: #ff4948;
    position: absolute;
    right: 0px;
    height: 60px;

    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
`;
