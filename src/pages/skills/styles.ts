import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps, FoldersProps, IsSelectedProps, PageElementsProps } from '../../types/StyleTypes';

import minusIcon from '../../assets/icons/window/iconmonstr-minus.svg'
import plusIcon from '../../assets/icons/window/iconmonstr-plus.svg'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
`

export const Divider = styled.div`
    border-top: solid 1px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: solid 1px ${({ theme }) => theme.frame.shadow.black};
    margin: 2px;
`

export const Content = styled.div<ContentProps>`
    ${internal}
    display: flex;
    flex-direction: row;
    width: 900px;
    height: 500px;
    resize: both;
    overflow-x: scroll;

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`
        min-width: ${$maxWidth};
        max-width: ${$maxWidth};
        min-height: ${$maxHeight};
        max-height: ${$maxHeight};
    `}

    ${({ $page }) => !$page.isMaximized && css`
        max-height: 80vh;
        max-width: 80vw;

        @media screen and (min-width: 767px) {
            min-height: 100px;
            min-width: 500px;
        }

        @media screen and (max-width: 767px) {
            min-height: 80vh;
            min-width: 80vw;
        }
    `}

    @media screen and (min-width: 767px) {
        flex-direction: row;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

`

export const Navigator = styled.div`
    padding: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
`

export const NavigatorItem = styled.div<FoldersProps>`
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.text.color};
    background: url(${({ $icon }) => $icon}) left bottom no-repeat;
    padding: 0px 0px 0px 25px;
    background-size: 17px 17px;

    ${({ $skillsFolder }) => !!$skillsFolder && css`
        margin-left: 22px;
    `}

    ${({ $first }) => !!!$first && css`
        &::before {
            content: '';
            position: absolute;
            width: 10px; /* Largura do ícone */
            height: 20px; /* Altura do ícone */
            border-left: 1px ${({ theme }) => theme.text.color} dotted;
            border-bottom: 1px ${({ theme }) => theme.text.color} dotted;
            transform: translateY(-50%) translateX(-360%);
        }   
    `}
`

export const Pages = styled.div`
    flex: 1;
    padding: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
    border-left: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
`

export const Selector = styled.div<IsSelectedProps>`
    display: flex;
    gap: 5px;
    padding: 3px 0;
    transition: all 0.5s ease-in-out;
    visibility: visible;

    clip-path: ${({ $isSelected }) => ($isSelected ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)')};
`

export const Folders = styled(Selector)`
    display: grid;
    min-width: 150px;
`

export const SelectorIcon = styled.div`
    z-index: 2;
    margin: 2px 2px 2px 1px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.window.body.background.color};
    border: 1px solid ${({ theme }) => theme.text.color};
`

export const ControlIcon = styled.div<IsSelectedProps>`
    width: 12px;
    height: 12px;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.text.color};
    -webkit-mask: url(${minusIcon}) no-repeat 50% 50%;
    mask: url(${minusIcon}) no-repeat 50% 50%;

    ${({ $isSelected }) => !$isSelected && css`
        -webkit-mask: url(${plusIcon}) no-repeat 50% 50%;
        mask: url(${plusIcon}) no-repeat 50% 50%;
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


export const IconContainer = styled.div`
    visibility: visible;
    max-height: 500px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-top: 25px;
    gap: 25px;
`