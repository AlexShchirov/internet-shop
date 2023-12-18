import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import beatsLogo from "../../assets/images/logotype.png";

export const Logo = () => {
    return (
        <Logolink href="">
            <img src={beatsLogo} alt="" />
        </Logolink>
    );
};

export const BurgerMenu = () => {
    return (
        <a href="">
            <Icon iconId={"burgerMenu"} width="37.5" height="25" />
        </a>
    );
};

const Logolink = styled.a`
    img {
        width: 100px;
        height: 50px;
        flex-shrink: 0;
    }
`;
