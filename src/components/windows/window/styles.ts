import styled, { css } from 'styled-components';
import { PagesProps } from '../../../types/PagesTypes';
import { external } from '../../../globals/borders';


export const Container = styled.div<{ page: PagesProps }>`
    ${external}

    ${props => props.page.isMinimized && css`
        transition: transform 0.25s ease-in-out, max-height 0.26s step-end, max-width 0.26s step-end;
        transform: scale(0);
        max-height: 0;
        max-width: 0;
    `}

    ${props => !props.page.isMinimized && css`
        transition: transform 0.25s ease-in-out, max-height 0.26s step-start, max-width 0.26s step-start;
        transform: scale(1);
        max-height: 100%;
        max-width: 100%;
    `}  

    background-color: ${({ theme }) => theme.window.background.color};
`

export const Content = styled.div<{ maxWidth: string, maxHeight: string, page: PagesProps }>`
    position: fixed;
    display: flex;
    overflow: hidden;
    flex-flow: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${props => props.page.isInFocus && css`
        z-index: 2;
    `}

    ${props => props.page.isMaximized && css`
        position: fixed;
        top: 0px;
        left: 0px;
        transform: none;
        height: ${props.maxHeight};
        width: ${props.maxWidth};
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

export const Text = styled.div<{ icon: any }>`
    display: inline-block;
    max-width: 200px;
    color: ${({ theme }) => theme.window.header.title.color};
    align-self: center;
    overflow: hidden;
    max-width: 100%;
    background: url(${(props) => props.icon}) left center no-repeat;
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