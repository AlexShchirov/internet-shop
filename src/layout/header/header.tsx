import React from "react";
import styled from "styled-components";
import { BurgerMenu, Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <BurgerMenu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #fcbee9;
    display: flex;
    justify-content: space-around;
    align-items: center;

`