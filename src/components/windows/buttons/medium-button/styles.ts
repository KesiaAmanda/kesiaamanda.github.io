import styled, { css } from 'styled-components';
import { internal } from '../../../../globals/borders';

export const Container = styled.button<{ isDisabled: boolean }>`
    background-color: ${({ theme }) => theme.window.background.color};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 30px;
    height: 30px;
    cursor: default;

    ${(props) => !props.isDisabled && css`
        &:active {
            ${internal}
            outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
            outline-offset: -4px;
        }
    `}
`
