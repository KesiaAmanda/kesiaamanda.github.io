import styled, { css } from 'styled-components';
import { internal } from '../../globals/borders';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    ${internal}
`

export const Content = styled.div<ContentProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        width: 300px;
    }

    @media screen and (min-width: 767px) {
        flex-wrap: nowrap;
        width: 900px;
    }

    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
        max-width: ${$maxWidth};
        max-height: ${$maxHeight};
    `}
`

export const Text = styled.div`
    text-align: right;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3em;
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    
    span {
        color: ${({ theme }) => theme.text.color};
    }
`

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    max-height: 90%;
    padding: 1em;
    max-width: 500px;

    img{
        align-items: center;    
        border-radius: 50%;
        max-width: 80%;
        border: 2px solid transparent;
        box-shadow: 5px 5px 0px #00000041;
        filter: hue-rotate(315deg);
    }
`

export const Social = styled.div`
    margin-top: 20px; 
    overflow: hidden;
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
    padding: 2px;
`