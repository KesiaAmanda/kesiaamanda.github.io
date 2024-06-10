import styled from 'styled-components';
import icon from '../../assets/icons/player/iconmonstr-audio.svg'

export const Content = styled.div`
    display: flex;
    margin-left: auto;
    padding: 2px;
`

export const Box = styled.div`
    display: flex;
    min-width: 70px;
    justify-content: space-around;
    border-top: inset 2px ${({ theme }) => theme.frame.shadow.black};
    border-left: inset 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
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
    -webkit-mask: url(${icon}) no-repeat 50% 50%;
    mask: url(${icon}) no-repeat 50% 50%;
`