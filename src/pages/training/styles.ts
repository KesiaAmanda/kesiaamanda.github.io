import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.console.background.color};
    ${internal}
`

export const Content = styled.div<ContentProps>`
    padding: 1em;

    resize: both;
    overflow-x: scroll;
    overflow-y: scroll;

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
        resize: horizontal;
    `}

    ${({ $page }) => !$page.isMaximized && css`
        max-height: 80vh;
        max-width: 80vw;

        @media screen and (max-width: 767px) {
            min-width: 300px;
            min-height: 80vh;
        }

        @media screen and (min-width: 767px) {
            height: 510px;
            width: 880px;
            min-width: 200px;
        }
    `}

`

export const Title = styled.span`
    white-space: pre;
    display: flex;
    max-width: 850px;
    justify-content: center;
    color: ${({ theme }) => theme.window.console.text.color};
`

export const Text = styled.span`
    white-space: pre;
    color: ${({ theme }) => theme.window.console.text.color};
`

export const Cursor = styled.span`
    white-space: pre;
    color: ${({ theme }) => theme.window.console.text.color};
    font-family: sans-serif;

    @keyframes cursorBlink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    animation: cursorBlink 1s step-end infinite;
`
