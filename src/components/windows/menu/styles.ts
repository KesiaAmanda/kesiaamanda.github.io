import styled from 'styled-components';

export const Content = styled.div`
display: flex;
span {
    padding: 0px 5px;
    color: ${({ theme }) => theme.text.color};

    &:hover {
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: ${({ theme }) => theme.start.menu.button.hover.color};
        color: ${({ theme }) => theme.start.menu.button.hover.text.color};
    }

    &:first-letter {
        text-decoration: underline;
    }
}
`