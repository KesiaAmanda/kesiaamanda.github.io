import styled, { css } from 'styled-components';

export const Content = styled.div<{ isSelected: boolean }>`
    display: inline-block;
    overflow: hidden;

    * {
        cursor: default;
    }

    span {
        color: ${({ theme }) => theme.text.color};
        white-space: nowrap;
        text-align: center;
        font-size: 11px;
        display: table;
        margin: 0 auto 0 15px;
    }

    button {
        background-size: 14px 14px;
        background-position-x: 2px;

        height: 25px;
        margin: 1px;
        border-top: ridge 2px ${({ theme }) => theme.frame.shadow.white};
        border-left: ridge 2px ${({ theme }) => theme.frame.shadow.white};
        border-bottom: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
        border-right: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    }
    
    ${props => props.isSelected && css`
        button {
            border-top: ridge 2px ${({ theme }) => theme.frame.shadow.black};
            border-left: ridge 2px ${({ theme }) => theme.frame.shadow.black};
            border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
            border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
            outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
            outline-offset: -4px;
        }   
    `}

`

export const Divider = styled.div`
    border-left: 1px solid ${({ theme }) => theme.frame.shadow.white};
    border-right: solid 1px ${({ theme }) => theme.frame.shadow.black};
    height: 24px;
    margin: auto 3px;
`