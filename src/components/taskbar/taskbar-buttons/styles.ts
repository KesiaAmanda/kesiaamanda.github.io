import styled from "styled-components";
import { LoadingProps } from "../../../types/ButtonTypes";

export const Content = styled.div<LoadingProps>`
    display: flex;
    flex-wrap: wrap;
    
    opacity: ${({ $loading }) => ($loading ? '0' : '1')};
    transition-delay: 1s;
    transition-duration: 0s;
    transition-property: opacity;
`