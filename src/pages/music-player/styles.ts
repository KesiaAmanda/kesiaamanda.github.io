import styled from 'styled-components';
import { PagesProps } from '../../types/PagesTypes';

export const Container = styled.div<{ page: PagesProps }>`
    display: flex;  
`

export const Content = styled.div<{ page: PagesProps }>`
    padding: 1px;   
    display: flex;
    flex-direction: column;
`

export const Image = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${({ theme }) => theme.window.player.background.image});
    transition: background-image 1s;    
    background-position: center;
    background-size: 300px;
    background-repeat: no-repeat;

    border-top:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-left:  ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
`

export const BoxTitle = styled.div`
    margin-top: 5px;
    display: flex;
    overflow: hidden;
    max-width: 300px;
    gap: 100px;
    padding-bottom: 10px;
    outline: none;
    background-color: ${({ theme }) => theme.window.console.background.color};
    border-top: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-left: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
`

export const Title = styled.p`
    max-width: 100px;
    min-width: 100px;
    color: white;
    overflow: hidden;
    overflow: ellipsis;
    white-space: nowrap;
    padding: 8px 40rem 0 40rem;
    animation: move-rlt 30000ms linear infinite;

    @keyframes move-rlt {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-250%);
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    padding: 10px 0 10px 0;
    gap: 5px;
`

export const Icon = styled.image<{ icon: string }>`
    background-color: ${({ theme }) => theme.icon.color};
    background-position: center;
    padding-bottom: 8px;
    min-width: 15px;
    min-height: 15px;
    -webkit-mask-box-image: url(${(props) => props.icon}) no-repeat 50% 50%;
    mask: url(${(props) => props.icon}) no-repeat 50% 50%;
`

export const Divider = styled.div`
    border-left: 1px solid ${({ theme }) => theme.frame.shadow.white};
    border-right: solid 1px ${({ theme }) => theme.frame.shadow.black};
    height: 30px;
`

export const ProgressBarBox = styled.div`
    max-width: 300px;
    height: 10px;
    margin-top: 10px;
    border-top: ridge 1px ${({ theme }) => theme.window.player.frame.shadow.black};
    border-left: ridge 1px ${({ theme }) => theme.window.player.frame.shadow.black};
    border-bottom: ${({ theme }) => theme.frame.border.style} 1px ${({ theme }) => theme.window.player.frame.shadow.white};
    border-right: ${({ theme }) => theme.frame.border.style} 1px ${({ theme }) => theme.window.player.frame.shadow.white};
`

export const ProgressBar = styled.div<{ margin: string }>`
    position: absolute;
    margin-top: -6px;
    margin-left: ${(props) => props.margin};
    height: 20px;
    width: 10px;
    background-color: ${({ theme }) => theme.window.background.color};
    border-top: ridge 1px ${({ theme }) => theme.window.player.frame.shadow.white};
    border-left: ridge 1px ${({ theme }) => theme.window.player.frame.shadow.white};
    border-bottom: ${({ theme }) => theme.frame.border.style} 1px ${({ theme }) => theme.window.player.frame.shadow.black};
    border-right: ${({ theme }) => theme.frame.border.style} 1px ${({ theme }) => theme.window.player.frame.shadow.black};
`

export const VolumeBox = styled.div`
    padding-top: 5px;
`

export const Volume = styled.div`
    position: fixed;
    height: 19px;
    margin-top: -1px;
    margin-left: -1px;
    width: 73px;
    cursor: pointer;
    background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.window.player.frame.shadow.black} 50%);
`

export const VolumeInput = styled.input`
    appearance: none;
    display: block;
    width: 70px;
    height: 17px;
    background-color: transparent;
    border-right: 1px solid ${({ theme }) => theme.window.player.frame.shadow.white};
    border-bottom: 1px solid ${({ theme }) => theme.window.player.frame.shadow.white};
    
    &::-webkit-slider-runnable-track {
        height: 18px;
        margin-top: -1px;
        z-index: 5;
        width: 70px;
        cursor: pointer;
        background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.window.background.color} 50%);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        z-index: 5;
        height: 1px;
        height: 20px;
        width: 10px;
        margin-top: -1px;
        background-color: ${({ theme }) => theme.window.background.color};
        border-top: solid 1px ${({ theme }) => theme.window.player.frame.shadow.white};
        border-left: solid 1px ${({ theme }) => theme.window.player.frame.shadow.white};
        border-bottom: solid 1px ${({ theme }) => theme.window.player.frame.shadow.black};
        border-right: solid 1px ${({ theme }) => theme.window.player.frame.shadow.black};
    }
`