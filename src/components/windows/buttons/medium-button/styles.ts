import styled, { css } from 'styled-components';
import { internal } from '../../../../globals/borders';
import { IsDisabledProps } from '../../../../types/StyleTypes';

export const Container = styled.button<IsDisabledProps>`
    background-color: ${({ theme }) => theme.window.background.color};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 30px;
    height: 30px;
    cursor: default;

    ${({ $isDisabled }) => !$isDisabled && css`
        &:active {
            ${internal}
            outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
            outline-offset: -4px;
        }
    `}
`
