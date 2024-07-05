import styled, { css } from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

import '@christianliebel/paint';
import React from 'react';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;

    ::-webkit-resizer {
        z-index: 1;
        background: none;
        // background-image: none;
    }
`

export const Content = styled.div<ContentProps>`

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
    `}
    width: 900px;
    height: 500px;

    resize: both;
    overflow: hidden;

    .jspaint-iframe{
        z-index: -1;
        * {
            font-family: 'Minecraftia Regular' ,'Minecraftia';
            color: ${({ theme }) => theme.text.color};
            font-size: 12px;
        }

        :root {
            --ButtonFace: ${({ theme }) => theme.window.background.color};
            --AppWorkspace: ${({ theme }) => theme.window.background.color};
            --GrayText: ${({ theme }) => theme.window.background.color};
        }

        width: 100%;
        height: 100%;
        font-family: 'Minecraftia Regular' ,'Minecraftia';
        color: ${({ theme }) => theme.text.color};
        font-size: 12px;
    }
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

export const Paint = styled.iframe<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>`
    --button-face: ${({ theme }) => theme.window.background.color};
    --highlight: ${({ theme }) => theme.start.menu.button.hover.color};
    --button-dark: ${({ theme }) => theme.frame.shadow.black};
    --button-light: ${({ theme }) => theme.frame.shadow.white};
    --canvas: none;
    --button-text: ${({ theme }) => theme.text.color};

    resize: both;
    overflow: hidden;
`;