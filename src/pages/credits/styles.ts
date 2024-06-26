import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    ${internal}
`

export const Content = styled.div<ContentProps>`
    padding: 1em;   
    display: flex;
    flex-direction: column;

    resize: both;
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    
    padding: 20px;


    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
        resize: horizontal;
    `}

    ${({ $page }) => !$page.isMaximized && css`
        max-width: 80vw;
        max-height: 80vh;

        @media screen and (max-width: 767px) {
            min-width: 300px;
        }

        @media screen and (min-width: 767px) {
            width: 500px;
            min-width: 500px;
        }
    `}

`

export const Title = styled.div`
    color: ${({ theme }) => theme.text.color};
    font-size: 8px;
    font-family: monospace;
    margin: 20px 0px 20px 0px;
    font-size: 10px;
    font-weight: bold;
    font-family: monospace;
    text-align: center;
    white-space: pre;
    font-size: 7px;
`

export const Text = styled.p`
    padding: 1em 0;
`

export const P = styled.p`
    color: ${({ theme }) => theme.text.color};
    padding-bottom: 1em;
`

export const A = styled.a`
    color: ${({ theme }) => theme.window.body.link.color.default};

    &:hover{
        color: ${({ theme }) => theme.window.body.link.color.hover};
    }
`

export const H1 = styled.h1`
    color: ${({ theme }) => theme.text.color};
`

export const Hr = styled.hr`
    border: none;
    width: 100%;
    border-top: 1px dashed ${({ theme }) => theme.window.body.hr.color};
`

