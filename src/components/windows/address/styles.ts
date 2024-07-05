import styled from 'styled-components';
import { internal } from '../../../globals/borders';

export const Content = styled.div`
    display: flex;
    span {
        padding: 2px 5px;
        color: ${({ theme }) => theme.text.color};
    }

    p {
        padding: 2px 5px;
        color: ${({ theme }) => theme.text.color};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

         @media screen and (max-width: 767px) {
            max-width: 50vw;
        }
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