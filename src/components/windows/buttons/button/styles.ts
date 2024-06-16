import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.window.background.color};
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    cursor: default;
    background-color: ${({ theme }) => theme.window.background};
    border-top: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-left: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-right: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};

    &:active {
        border-top: ridge 2px ${({ theme }) => theme.frame.shadow.black};
        border-left: ridge 2px ${({ theme }) => theme.frame.shadow.black};
        border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
        border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
        outline-offset: -4px;
    }
`