import styled, { css } from 'styled-components';
import { IsSelectedProps } from '../../../types/StyleTypes';
import { external, internal } from '../../../globals/borders';

export const Content = styled.div`
    display: flex;
    button {
        background: url(${({ theme }) => theme.icons.desktop.start}) left center no-repeat;
        background-size: 20px 20px;
        background-position-x: 2px;
    }
`

export const ContentButton = styled.div<IsSelectedProps>`
    display: inline-block;
    overflow: hidden;

    * {
        cursor: default;
    }

    span {
        color: ${({ theme }) => theme.text.color};
        white-space: nowrap;
        text-align: center;
        font-size: 11px;
        display: table;
        margin: 0 auto 0 20px;
    }

    button {
        background-size: 15px 15px;
        background-position-x: 5px;

        height: 25px;
        margin: 1px;
        ${external}
    }
    
    ${({ $isSelected, theme }) => $isSelected && css`
        button {
            ${internal}
            outline: 1px dotted ${theme.button.frame.dotted.click};
            outline-offset: -4px;
        }
    `}

`