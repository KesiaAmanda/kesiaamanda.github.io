import styled, { css } from 'styled-components';
import icon from '../../assets/icons/desktop/text_file.png'

export const Container = styled.div<{ maximized?: boolean, minimized?: boolean }>`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    flex-direction: column;
    max-width: 100%;

    border-top:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-left:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};

    ${props => props.maximized && css`
        min-height: calc(var(--vh, 1vh) * 100 - 77px);
        min-width: 100vw;
        transition: max-width 0.5s ease;
        max-width: 0%;
    `}

    ${props => props.minimized && css`
        transition: max-width 0.5s ease;
        max-width: 0;
    `}

    ${props => !props.minimized && css`
        transition: max-width 0.5s ease;
    `}

    transition: none;

`

export const Content = styled.div<{ maximized?: boolean, minimized: boolean }>`
    position: relative;
    background-color: ${({ theme }) => theme.window.body.background.color};
    padding: 20px;
    text-align: justify;
    overflow-anchor: none;
    max-width: 100%;

    ${props => props.maximized && css`
        position: fixed;
        transform: none;
        border: none;
        min-height: 100%;
        resize: none;
        overflow-x: none;
        overflow-y: none;

        @media screen and (max-width: 767px) {
            max-width: 100%;
        }

        @media screen and (min-width: 767px) {
            min-width: 98%;
        }

    `}

    ${props => !props.maximized && css`
        max-height: 80vh;
        resize: both;
        overflow-x: scroll;
        overflow-y: scroll;

        @media screen and (max-width: 767px) {
            min-width: 300px;
        }

        @media screen and (min-width: 767px) {
            width: 600px;
            min-width: 600px;
        }
    `}

    ${props => props.minimized && css`
        transition: max-height 0.5s ease, max-width 0.5s ease;
        max-height: 0;
        max-width: 0;
    `}

    ${props => !props.minimized && css`
        transition: max-width 0.5s ease;
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
    border-top: 1px dashed ${({ theme }) => theme.window.header.hr.color};
`

