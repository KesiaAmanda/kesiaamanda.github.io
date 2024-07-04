import styled from 'styled-components';

export const Content = styled.div`
    overflow: hidden;
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: center;
    padding: 1px;

    p {
        color: ${({ theme }) => theme.text.color};
        justify-content: center;
        width: 90px;
        font-size: 11px;
        margin: 0px;
        cursor: pointer;
        text-align: center;
    }

    &:active p {
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
    }

    img {
        cursor: pointer;
        align-items: center;
        height: 32px;
        width: 32px;
    }
`

