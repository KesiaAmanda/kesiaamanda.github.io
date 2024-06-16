import styled, { css } from 'styled-components';
import icon from '../../assets/icons/desktop/text_file.png'
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

export const Header = styled.div`
    display: inline-block;
    max-width: 200px;
    color: ${({ theme }) => theme.window.header.title.color};
    align-self: center;
    overflow: hidden;
    max-width: 100%;
    background: url(${icon}) left center no-repeat;
    padding: 0px 5px 0px 22px;
    background-size: 15px 15px;
    background-position-x: 2px;
`

export const WindowMenu = styled.div`
    display: flex;
    span {
        padding: 0px 5px;
        color: ${({ theme }) => theme.text.color};

        &:hover {
            transition: background-color 0.3s ease, color 0.3s ease;
            background-color: ${({ theme }) => theme.start.menu.button.hover.color};
            color: ${({ theme }) => theme.start.menu.button.hover.text.color};
        }

        &:first-letter {
            text-decoration: underline;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    padding: 0 1px;
    margin-left: auto;
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

export const P = styled.p`
    color: ${({ theme }) => theme.text.color};
`

export const Hr = styled.hr`
    border: none;
    width: 100%;
    border-top: 1px dashed ${({ theme }) => theme.window.body.hr.color};
`

