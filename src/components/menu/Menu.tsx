import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledMenuList>
                <StyledMenuItem>
                    <Icon iconId="search" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <Icon iconId="basket" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <Icon iconId="user" />
                </StyledMenuItem>
            </StyledMenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    height: 50px;    
`;

const StyledMenuList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 60px;
`;

const StyledMenuItem = styled.li`
    list-style-type: none;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
