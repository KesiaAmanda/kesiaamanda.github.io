import styled, { css } from 'styled-components';
import { TaskBarButtonProps } from '../../../types/StyleTypes';


export const Content = styled.div<TaskBarButtonProps>`
    display: flex;
    button {
        background: url(${({ $icon }) => $icon}) left center no-repeat;
        background-size: 15px 15px;
        background-position-x: 2px;
    }

    ${({ $isClosed }) => $isClosed && css`
        * {
            max-height: 0;
            max-width: 0;
            padding: 0;
            overflow: hidden;
            visibility: hidden;
        }
    `}
`