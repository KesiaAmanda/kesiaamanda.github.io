import styled from 'styled-components';
import { internal } from '../../../globals/borders';

export const Content = styled.div`
    display: flex;
    span {
        padding: 2px 5px;
        color: ${({ theme }) => theme.text.color};
    }
`

export const Navigator = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.window.body.background.color};
    outline: none;
    ${internal}
`