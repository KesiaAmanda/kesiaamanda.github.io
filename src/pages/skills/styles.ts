import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    ${internal}
`

export const Divider = styled.div`
    border-top: solid 1px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: solid 1px ${({ theme }) => theme.frame.shadow.black};
    margin: 2px;
`

export const Content = styled.div<ContentProps>`
    padding: 1em;   
    display: flex;
    flex-direction: column;

    resize: both;
    overflow-x: scroll;
    overflow-y: scroll;

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
            width: 600px;
            min-width: 600px;
        }
    `}

`

export const Title = styled.div`
    color: ${({ theme }) => theme.text.color};
    margin: 20px 0px 20px 0px;
    font-size: 10px;
    font-weight: bold;
    font-family: monospace;
    text-align: center;
    white-space: pre;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.text.color};
`

export const Hr = styled.hr`
    border: none;
    width: 100%;
    border-top: 1px dashed ${({ theme }) => theme.window.body.hr.color};
`

