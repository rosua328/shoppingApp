import {css} from "styled-components";

export const mobile = (pros)=>{
    return css`
    @media screen and (max-width:380px){
        {props}
    }
    `;
};