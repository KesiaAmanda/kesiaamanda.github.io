import styled, { css } from 'styled-components';
import { external } from '../../../globals/borders';
import { ContentProps, HeaderProps, IconProps, PageElementsProps } from '../../../types/StyleTypes';


export const Container = styled.div<PageElementsProps>`
    ${external}

    ${({ $page }) => $page.isMinimized && css`
        transition: transform 0.25s ease-in-out, max-height 0.26s step-end, max-width 0.26s step-end;
        transform: scale(0);
        max-height: 0;
        max-width: 0;
    `}

    ${({ $page }) => !$page.isMinimized && css`
        transition: transform 0.25s ease-in-out, max-height 0.26s step-start, max-width 0.26s step-start;
        transform: scale(1);
        max-height: 100%;
        max-width: 100%;
    `}  

    background-color: ${({ theme }) => theme.window.background.color};
`

export const Content = styled.div<ContentProps>`
    position: fixed;
    display: flex;
    flex-flow: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ $page }) => $page.isInFocus && css`
        z-index: 2;
    `}

    ${({ $page, $maxHeight, $maxWidth }) => $page.isMaximized && css`
        position: fixed;
        top: 0px;
        left: 0px;
        transform: none;
        height: ${$maxHeight};
        width: ${$maxWidth};
    `}

    ${({ $page }) => ($page.isMaximized && $page.isMinimized) && css`
        transition: visibility 0.3s ease-in-out;
        visibility: hidden;
    `}
`

export const Header = styled.div<HeaderProps>`
    touch-action: none;
    background: ${({ $focus, theme }) => ($focus ? theme.window.header.background.focus : theme.window.header.background.color)};
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    height: 23px;
    flex: 0 1 auto;
`

export const Text = styled.div<IconProps>`
    display: inline-block;
    max-width: 200px;
    color: ${({ theme }) => theme.window.header.title.color};
    align-self: center;
    overflow: hidden;
    max-width: 100%;
    background: url(${({ $icon }) => $icon}) left center no-repeat;
    padding: 0px 5px 0px 22px;
    background-size: 15px 15px;
    background-position-x: 2px;
`

export const Buttons = styled.div`
    display: flex;
    padding: 0 1px;
    margin-left: auto;
`

export const HeaderTitle = styled.div`
    display: inline-block;
    max-width: 200px;
    color: ${({ theme }) => theme.window.header.title.color};
    align-self: center;
    overflow: hidden;
    max-width: 100%;
`

export const Icon = styled.img<IconProps>`
    background-color: ${({ theme }) => theme.icon.color};
    background-position: center;
    min-width: 15px;
    min-height: 15px;
    -webkit-mask-box-image: url(${({ $icon }) => $icon}) no-repeat 50% 85%;
    mask: url(${({ $icon }) => $icon}) no-repeat 50% 85%;
`