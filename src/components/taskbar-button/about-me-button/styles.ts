import styled, { css } from 'styled-components';
import icon from '../../../assets/icons/desktop/text_file.png'

export const Content = styled.div<{ closed?: boolean }>`
    display: flex;
    button {
        background: url(${icon}) left center no-repeat;
        background-size: 15px 15px;
        background-position-x: 2px;
    }

    ${props => props.closed && css`
        * {
            max-height: 0;
            max-width: 0;
            padding: 0;
            overflow: hidden;
            visibility: hidden;
        }
    `}
`   