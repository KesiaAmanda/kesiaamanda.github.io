import styled from 'styled-components';
import { external, internal } from '../../../../globals/borders';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.window.background.color};
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    cursor: default;
    background-color: ${({ theme }) => theme.window.background};
    ${external}

    &:active {
        ${internal}
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
        outline-offset: -4px;
    }
`