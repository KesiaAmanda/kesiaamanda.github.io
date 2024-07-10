import styled, { css, keyframes } from 'styled-components';
import { IsDisabledProps } from '../../types/StyleTypes';
import { ActiveProps } from '../../types/ButtonTypes';

export const Content = styled.div<IsDisabledProps>`
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    z-index: 99;

    * {
        font-family: 'Minecraftia Regular' ,'Minecraftia';
        color: ${({ theme }) => theme.text.color};  
        font-size: 18px;
    }

    ${({ $isDisabled }) => !$isDisabled && css`
        transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
        opacity: 0;
        visibility: hidden;
    `}

    overflow: hidden;
`

const Animation = keyframes`
    0% {
        transform: rotate(-10deg); /* Sem rotação inicial */
    }
    50% {
        transform: rotate(10deg); /* Inclinação para a esquerda */
    }
    100% {
        transform: rotate(-10deg); /* Inclinação de volta ao normal */
    }
`;

export const AnimatedContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative; 
    span {
        color: white;
    }
`;

export const Text = styled.div`
    color: white;
`;

export const LoadingContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;


export const Image = styled.img`
    width: 250px;
    height: auto;
    animation: ${Animation} 3s infinite;
`;

const PulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Cookie = styled.img<ActiveProps>`
    width: 150px;
    height: auto;
    padding: 1em;

    ${({ $active }) => $active && css`
        transform: scale(0.9);
    `}

    ${({ $active }) => !$active && css`
       animation: ${PulseAnimation} 3s infinite;
    `}
`;

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: 90vh;
`;

export const Bios = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 90vh;
`;

export const BiosContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px; 
    padding: 20px 5px;
    white-space: break-spaces;
`;

export const Logo = styled.div`
    display: flex;
`;