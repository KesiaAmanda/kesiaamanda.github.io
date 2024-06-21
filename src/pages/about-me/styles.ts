import styled, { css } from 'styled-components';
import { PagesProps } from '../../types/PagesTypes';
import { internal } from '../../globals/borders';

export const Container = styled.div<{ page: PagesProps }>`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    ${internal}
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
    font-size: 7px;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.text.color};
`

export const Hr = styled.hr`
    border: none;
    width: 100%;
    border-top: 1px dashed ${({ theme }) => theme.window.body.hr.color};
`

