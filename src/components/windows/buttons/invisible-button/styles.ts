import styled, { css } from 'styled-components';
import { ActiveProps } from '../../../../types/ButtonTypes';

export const Container = styled.button<ActiveProps>`
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    cursor: default;
    transform: none;

    ${({ $active }) => !$active && css`
        transform: rotate(270deg);
    `}
`