import styled, { css } from 'styled-components';
import { external } from '../../globals/borders';
import { IsSelectedProps, IsShutdownProps } from '../../types/StyleTypes';

export const Content = styled.div<IsSelectedProps>`
  overflow: hidden;
  position: relative;
  transition: clip-path 0.3s ease;
  clip-path: ${({ $isSelected }) => ($isSelected ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)')};

  display: flex;
  flex-direction: column;
  bottom: 30px;
  left: 0;
  background-color: ${({ theme }) => theme.window.background.color};
  background-size: 100px;
  position: absolute;
  z-index: 99;
  display: block;
  ${external}
  max-width: unset;
  max-height: unset;
`

export const Menu = styled.div`
  width: 28px;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: ${({ theme }) => theme.start.menu.left.color};
  text-transform: capitalize;
`

export const Divider = styled.div`
  height: 1px;
  border-top: solid 1px ${({ theme }) => theme.frame.shadow.white};
  border-bottom: solid 1px ${({ theme }) => theme.frame.shadow.black};
`

export const Text = styled.div`
  color: rgb(192, 192, 192);
  transform: rotateZ(-90deg);
  transform-origin: center left;
  display: inline-block;
  width: 200px;
  white-space: nowrap;
  font-size: 20px;
  margin-top: 65px;
  margin-left: 12px;

  span {
    color: white;
    font-size: 20px;
  }
`

export const Item = styled.div<IsShutdownProps>`
    color: ${({ theme }) => theme.text.color};
    font-size: 12px;
    width: 134px;
    line-height: 0px;
    margin-left: 29px;
    padding: 15px 5px;

    ${({ $isShutdown }) => !$isShutdown && css`
        &:first-letter {
            text-decoration: underline;
        } 
    `}

    ${({ $isShutdown }) => $isShutdown && css`
        span {
            color: ${({ theme }) => theme.text.color};
            text-decoration: underline;
        }
    `}


    &:hover {
        background-color: ${({ theme }) => theme.start.menu.button.hover.color};
        color: ${({ theme }) => theme.start.menu.button.hover.text.color};

        span {
            color: ${({ theme }) => theme.start.menu.button.hover.text.color};
        }
    }
`