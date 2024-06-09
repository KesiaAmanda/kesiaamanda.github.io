import styled from 'styled-components';
import icon from '../../../assets/icons/social/icons8-pixel-star-16.png'

export const Content = styled.div`
    display: flex;
    button {
        background: url(${icon}) left center no-repeat;
    }
`

export const Divider = styled.div`
    border-left: 1px solid ${({ theme }) => theme.frame.shadow.white};
    border-right: solid 1px ${({ theme }) => theme.frame.shadow.black};
    height: 23px;
    margin: 2px 3px;
`