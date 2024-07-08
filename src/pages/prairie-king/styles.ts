import styled from 'styled-components';
import { ContentProps } from '../../types/StyleTypes';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
`

export const Content = styled.div<ContentProps>`
    width: 512px;
    height: 512px;
    overflow: hidden;
`