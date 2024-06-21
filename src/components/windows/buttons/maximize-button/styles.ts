import styled from 'styled-components';
import icon from '../../../../assets/icons/window/iconmonstr-maximize.svg'

export const Icon = styled.img`
    background-color: ${({ theme }) => theme.icon.color};
    background-position: center;
    min-width: 15px;
    min-height: 15px;
    -webkit-mask-box-image: url(${icon}) no-repeat 50% 75%;
    mask: url(${icon}) no-repeat 50% 75%;
`