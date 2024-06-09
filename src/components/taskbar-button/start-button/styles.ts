import styled from 'styled-components';

export const Content = styled.div`
    * {
        cursor: default;
    }

    div{
        display: inline-block;
        min-width: 60px;
        max-width: 100px;
        overflow: hidden;
        cursor: default;
    }

    span {
        color: ${({ theme }) => theme.text.color};
        text-align: center;
        font-size: 11px;
        overflow: hidden;
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

    &:active button {
        border-top: ridge 2px ${({ theme }) => theme.frame.shadow.black};
        border-left: ridge 2px ${({ theme }) => theme.frame.shadow.black};
        border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
        border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
        outline-offset: -4px;
    }
`

