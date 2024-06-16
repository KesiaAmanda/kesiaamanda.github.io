import styled, { css } from 'styled-components';
import { PagesProps } from '../../types/PagesTypes';

export const Container = styled.div<{ page: PagesProps }>`
    position: absolute;
    background-color: ${({ theme }) => theme.window.background.color};
    ${props => props.page.isInFocus && css`
        z-index: 1;
    `}
`

export const Content = styled.div<{ width: string, page: PagesProps }>`
    position: fixed;
    max-width: 100%;
    display: flex;
    overflow: hidden;
    flex-flow: column;
    background-color: ${({ theme }) => theme.window.background.color};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -51.5%);
    // transition: background 0.1s linear, border 0.1s linear, outline 0.1s linear, color 0.1s linear, box-shadow 0.5s linear, min-height 0.25s ease-in-out, min-width 0.25s ease-in-out, max-height 0.25s ease-in-out, max-width 0.25s ease-in-out;

    border-top: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-left: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-right: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};

    ${props => props.page.isMaximized && css`
        position: fixed;
        top: 0px;
        left: 0px;
        transform: none;
        transition: none;
        height: calc(var(--vh, 1vh) * 100 - 32px);
        width: 100vw;
    `}

    ${props => !props.page.isMaximized && css`
        max-width: 95%;
    `}

    ${props => props.page.isMinimized && css`
        transition: max-height 0.5s ease, min-width 0.7s ease, opacity 0.7s ease;
        min-width: 0;
        max-height: 0;
        opacity: 0;
    `}

    ${props => !props.page.isMinimized && css`
        @media screen and (min-width: 767px) {
            min-width: ${props.width};
        }

        transition: max-height 0.5s ease, opacity 0.7s ease;
        max-height: 100%;
        opacity: 1;
    `}

`

export const Header = styled.div`
    touch-action: none;
    background: ${({ theme }) => theme.window.header.background.color};
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    height: 23px;
    flex: 0 1 auto;
`

export const HeaderTitle = styled.div`
    display: inline-block;
    max-width: 200px;
    color: ${({ theme }) => theme.window.header.title.color};
    align-self: center;
    overflow: hidden;
    max-width: 100%;
`