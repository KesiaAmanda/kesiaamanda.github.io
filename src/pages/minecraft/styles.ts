import styled, { css } from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;

`

export const Content = styled.div<ContentProps>`
    ${({ $page, $maxWidth, $maxHeight }) => $page.isMaximized && css`   
        min-width: ${$maxWidth};
        min-height: ${$maxHeight};
    `}

    ${({ $page }) => !$page.isMaximized && css`   
        min-width: 900px;
        min-height: 500px;
    `}
`