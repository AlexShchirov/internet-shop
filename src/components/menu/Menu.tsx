import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Menu = ()=> {
    return(
        <StyledMenu>
                <ul>
                    <li>
                        <Icon iconId="search"/>
                    </li>
                    <li>
                        <Icon iconId="basket"/>
                    </li>
                    <li>
                        <Icon iconId="user"/>
                    </li>
                </ul>
            </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 90px;
        
        li{
            list-style-type: none;
            box-sizing: border-box;
            width: 47px;
            height: 47px;
            background-color: #fff;
            border-radius: 50%;
        }
    }
`