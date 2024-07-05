import styled, { css } from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

import '@christianliebel/paint';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;

    ::-webkit-resizer {
        z-index: 1;
        background: none;
    }
`

export const Content = styled.div<ContentProps>`
    width: 512px;
    height: 512px;

    resize: both;
    overflow: hidden;
`