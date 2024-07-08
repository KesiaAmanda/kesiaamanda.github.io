import styled, { css } from 'styled-components';
import { external, internal } from '../../../globals/borders';
import { MenuProps } from '../../../types/ButtonTypes';

export const Content = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export const Dropdown = styled.button<MenuProps>`
    float: left;
    border: 2px solid transparent;
    padding: 0 2px;

    background-color: ${({ theme }) => theme.window.background.color};

    &:first-letter {
        text-decoration: underline;
    }

    ${({ $active, $focus }) => $active && $focus && css`
        ${internal}

        div {
            display: flex;  
            flex-direction: column;
        }
    `}
`

export const DropdownContent = styled.div`
    ${external}
    margin-top: 3px;   
    margin-left: -5px;   
    background-color: ${({ theme }) => theme.window.background.color};
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`

export const Span = styled.span`
    text-align: left;
    padding: 0px 15px;
    &:hover {
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: ${({ theme }) => theme.start.menu.button.hover.color};
        color: ${({ theme }) => theme.start.menu.button.hover.text.color};
    }
`