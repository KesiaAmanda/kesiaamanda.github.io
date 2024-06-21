import styled, { css } from 'styled-components';

export const Container = styled.button<{ isDisabled: boolean }>`
    background-color: ${({ theme }) => theme.window.background.color};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 30px;
    height: 30px;
    cursor: default;

    ${(props) => !props.isDisabled && css`
        &:active {
            border-top: ridge 2px ${({ theme }) => theme.frame.shadow.black};
            border-left: ridge 2px ${({ theme }) => theme.frame.shadow.black};
            border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
            border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
            outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
            outline-offset: -4px;
        }
    `}
`
