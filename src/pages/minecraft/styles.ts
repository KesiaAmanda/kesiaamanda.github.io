import styled, { css } from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;

    @media screen and (max-width: 767px) {
        min-width: 80vw;
    }

    @media screen and (min-width: 767px) {
        min-width: 900px;
        min-height: 500px;
    }
`

export const Content = styled.div<ContentProps>`
    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
        max-width: ${$maxWidth};
        max-height: ${$maxHeight};
    `}

    ${({ $page }) => !$page.isMaximized && css`   
        width: 900px;
        height: 500px;

        max-width: 80vw;
        max-height: 80vh;
    `}
`