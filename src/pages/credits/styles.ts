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

    height: 300px;
    
    padding: 20px;


    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
        max-width: ${$maxWidth};
        max-height: ${$maxHeight};
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

     @media screen and (max-width: 767px) {
        font-size: 6px;
    }

    @media screen and (min-width: 767px) {
        font-size: 8px;
    }

    font-size: 6px;
    font-family: monospace;
    margin: 20px 0px 20px 0px;
    font-weight: bold;
    text-align: center;
    white-space: pre;
`

export const Text = styled.div`
    padding: 1em 0;
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

