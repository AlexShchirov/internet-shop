import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/logotype.png";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FlexWrapper
                    justify="space-around"
                    align="center"
                >
                    <PhotoWrapper>
                        <a href="">
                            <Photo src={photo} alt="" />
                        </a>
                    </PhotoWrapper>

                    <FooterListWrapper>
                        <LinkList>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                        </LinkList>
                    </FooterListWrapper>
                    <SocialListWpapper>
                        <SocialList>
                            <Item>
                                <a href="">
                                    <Icon
                                        iconId={"inst"}
                                        width={"20"}
                                        height={"20"}
                                        viewBox="0 0 22 22"
                                    />
                                </a>
                            </Item>
                            <Item>
                                <a href="">
                                    <Icon
                                        iconId={"twitter"}
                                        width={"20"}
                                        height={"20"}
                                        viewBox="0 0 22 22"
                                    />
                                </a>
                            </Item>
                            <Item>
                                <a href="">
                                    <Icon
                                        iconId={"facebook"}
                                        width={"20"}
                                        height={"20"}
                                        viewBox="0 0 22 22"
                                    />
                                </a>
                            </Item>
                        </SocialList>
                    </SocialListWpapper>
                </FlexWrapper>
            </Container>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    height: 10vh;
    margin-top: 50px;
    background-color: #e86564;
`;

const PhotoWrapper = styled.div``;

const Photo = styled.img`
    width: 140px;
    height: 73px;
    flex-shrink: 0;
`;
const FooterListWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LinkList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const SocialListWpapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const SocialList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    gap: 40px;
`;
const Item = styled.li`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
