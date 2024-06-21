import styled, { css } from 'styled-components';
import { external, internal } from '../../../globals/borders';
import { IsSelectedProps } from '../../../types/StyleTypes';

export const Content = styled.div<IsSelectedProps>`
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
        margin: 0 auto 0 15px;
    }

    button {
        background-size: 14px 14px;
        background-position-x: 2px;

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

export const Divider = styled.div`
    border-left: 1px solid ${({ theme }) => theme.frame.shadow.white};
    border-right: solid 1px ${({ theme }) => theme.frame.shadow.black};
    height: 24px;
    margin: auto 3px;
`