import styled from 'styled-components';
import { ActiveProps } from '../../../types/ButtonTypes';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    gap: 5px;
    
    span {
        color: ${({ theme }) => theme.text.color};
        flex-grow: 0;
    }

    div {
        right: 0;
        // margin-top: 2px;
        // margin-right: 5px;
        margin: 2px 5px 0 5px;
        flex-grow: 1;
        border: solid 1px ${({ theme }) => theme.text.color};
    }
`

export const Body = styled.div<ActiveProps>`
    transition: all 0.5s ease-in-out;
    visibility: visible;
    clip-path: ${({ $active }) => ($active ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)')};
    max-height: ${({ $active }) => ($active ? '5000px' : '0px')};
    padding: 10px;
`