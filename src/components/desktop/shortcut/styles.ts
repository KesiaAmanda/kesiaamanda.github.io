import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80px;
    max-height: 80px;
    justify-content: center;

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    img {
        height: 32px;
        width: 32px;
    }
    
    &:active p {
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
    }
`

