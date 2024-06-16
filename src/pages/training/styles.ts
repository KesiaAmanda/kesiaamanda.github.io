import styled, { css } from 'styled-components';
import { PagesProps } from '../../types/PagesTypes';

export const Container = styled.div<{ page: PagesProps }>`
    background-color: ${({ theme }) => theme.window.console.background.color};
    display: flex;
    height: 100%;

    border-top:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-left:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
`

export const Content = styled.div<{ maxWidth: string, maxHeight: string, page: PagesProps }>`
    padding: 1em;   
    // display: flex;
    // flex-direction: column;

    resize: both;
    overflow-x: scroll;
    overflow-y: scroll;

    ${props => props.page.isMaximized && css`
        min-width: ${props.maxWidth};
        min-height: ${props.maxHeight};
        resize: horizontal;
    `}

    ${props => !props.page.isMaximized && css`
        max-height: 80vh;
        max-width: 80vw;
        @media screen and (max-width: 767px) {
            min-width: 300px;
            min-height: 80vh;
        }

        @media screen and (min-width: 767px) {
            height: 550px;
            width: 870px;
            min-width: 870px;
        }
    `}

`

export const Text = styled.span`
    white-space: pre;
    color: ${({ theme }) => theme.window.console.text.color};
`

export const Cursor = styled.span`
    white-space: pre;
    color: ${({ theme }) => theme.window.console.text.color};

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
