import styled from 'styled-components';
import icon from '../../../../assets/icons/window/minimize.svg'

export const Icon = styled.image`
    background-color: ${({ theme }) => theme.icon.color};
    background-position: center;
    min-width: 15px;
    min-height: 15px;
    -webkit-mask-box-image: url(${icon}) no-repeat 50% 85%;
    mask: url(${icon}) no-repeat 50% 85%;
`