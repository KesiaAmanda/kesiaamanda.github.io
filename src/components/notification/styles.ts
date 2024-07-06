import styled from 'styled-components';
import { internal } from '../../globals/borders';

export const Content = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 85px;
    max-width: 85px;
    font-weight: lighter;
`

export const Box = styled.div`
    display: flex;
    min-width: 70px;
    justify-content: space-around;
    ${internal}
`

export const Clock = styled.div`
    color: ${({ theme }) => theme.text.color};
    margin: 0 2px;
    font-size: 10px;
    align-items: center;
    font-weight: lighter;
    padding: 2px;
`

export const Volume = styled.button`
    margin: 0 2px;
    background-color: ${({ theme }) => theme.icon.color};
    background-position: center;
    cursor: default;
    width: 20px;
    -webkit-mask: url(${({ theme }) => theme.icons.player.audio}) no-repeat 50% 50%;
    mask: url(${({ theme }) => theme.icons.player.audio}) no-repeat 50% 50%;
`