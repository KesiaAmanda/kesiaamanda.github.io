import styled, { css } from 'styled-components';
import { PagesProps } from '../../types/PagesTypes';

export const Container = styled.div<{ page: PagesProps }>`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    height: 100%;

    border-top:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-left:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
`

export const Content = styled.div<{ maxWidth: string, maxHeight: string, page: PagesProps }>`
    padding: 1em;   
    display: flex;
    flex-direction: column;

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
        @media screen and (max-width: 767px) {
            min-width: 300px;
        }

        @media screen and (min-width: 767px) {
            width: 600px;
            min-width: 600px;
        }
    `}

`
