import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    button {
        background: url(${({ theme }) => theme.icons.desktop.start}) left center no-repeat;
    }
`