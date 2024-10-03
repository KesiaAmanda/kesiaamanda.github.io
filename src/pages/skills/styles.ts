import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps, FoldersProps, IsSelectedProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};

    ::-webkit-resizer {
        background: none;
        // background-image: none;
    }
`

export const Divider = styled.div`
    border-top: solid 1px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: solid 1px ${({ theme }) => theme.frame.shadow.black};
    margin: 2px;
`

export const Content = styled.div<ContentProps>`
    display: grid;
    width: 900px;
    height: 500px;
    overflow: hidden;
    resize: both;

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
        grid-template-columns: 350px auto;
        grid-template-rows: 1fr;
        grid-template-areas:
            'menu main main'
            'footer footer footer';
    }

    @media screen and (max-width: 767px) {
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
            'menu menu menu'
            'main main main'
            'footer footer footer';
    }

`

export const Navigator = styled.div`
    ${internal}
    grid-area: menu;
    padding: 1em;
    overflow: hidden;
`

export const Footer = styled.div`
    grid-area: footer;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: ${({ theme }) => theme.window.background.color};
`

export const FooterDivision = styled.div`
    padding-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    ${internal}
`

export const NavigatorItem = styled.div<FoldersProps>`
    position: relative;
    display: inline-block;
    white-space: nowrap;
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
            border-left: 1px grey dotted;
            border-bottom: 1px dotted grey;
            transform: translateY(-50%) translateX(-360%);
        }   
    `}
`

export const Pages = styled.div`
    ${internal}
    grid-area: main;
    padding: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
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
    margin-left: -22px; 
`

export const SelectorIcon = styled.div`
    z-index: 2;
    margin: 2px 2px 2px 1px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.window.body.background.color};
    border: 1px solid grey;
`

export const ControlIcon = styled.div<IsSelectedProps>`
    width: 12px;
    height: 12px;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.text.color};
    -webkit-mask: url(${({ theme }) => theme.icons.player.minus}) no-repeat 50% 50%;
    mask: url(${({ theme }) => theme.icons.player.minus}) no-repeat 50% 50%;

    ${({ $isSelected, theme }) => !$isSelected && css`
        -webkit-mask: url(${theme.icons.player.plus}) no-repeat 50% 50%;
        mask: url(${theme.icons.player.plus}) no-repeat 50% 50%;
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

export const Text = styled.div`
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