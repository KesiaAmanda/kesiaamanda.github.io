import styled, { css } from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

import '@christianliebel/paint';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;

    ::-webkit-resizer {
        background: none;
        background-image: none;
    }
`

export const Content = styled.div<ContentProps>`

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
    `}
`

export const PaintApp = styled('paint-app') <ContentProps>`
    --button-face: ${({ theme }) => theme.window.background.color};
    --highlight: ${({ theme }) => theme.start.menu.button.hover.color};
    --button-dark: ${({ theme }) => theme.frame.shadow.black};
    --button-light: ${({ theme }) => theme.frame.shadow.white};
    --canvas: none;
    --button-text: ${({ theme }) => theme.text.color};

    ${({ $page }) => !$page.isMaximized && css`   
        width: 900px;
        height: 500px;

        max-width: 80vw;
        max-height: 80vh;
    `}

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        max-width: ${$maxWidth};
        max-height: ${$maxHeight};
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
    `}

    resize: both;
    overflow: hidden;
`;