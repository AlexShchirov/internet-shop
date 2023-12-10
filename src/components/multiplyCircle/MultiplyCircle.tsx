import React from "react";
import { Icon } from "../icon/Icon";


type MultiplyCircleType = {
    iconId: string;
}

export const MultiplyCircle = (props: MultiplyCircleType) => {
    return (
        <div>
            <Icon iconId={props.iconId} width={"96"} height={"96"} viewBox={"0 0 96 96"}/>
        </div>)
}