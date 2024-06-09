import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 32px;
        width: 32px;
    }
    
    button {
        padding: 10px 0 10px 0;
    }

    &:active p {
        outline: 1px dotted ${({ theme }) => theme.button.frame.dotted.click};
    }
`

