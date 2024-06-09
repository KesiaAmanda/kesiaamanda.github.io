import styled, { css } from 'styled-components';
import { HeaderTitle } from '../../components/window/styles';
import icon from '../../assets/icons/desktop/program.png'

export const Container = styled.div<{ maximize?: boolean }>`
    background-color: ${({ theme }) => theme.window.body.background.color};
    display: flex;
    flex-direction: column;

    border-top: ridge 2px ${({ theme }) => theme.frame.shadow.black};
    border-left: ridge 2px ${({ theme }) => theme.frame.shadow.black};
    border-bottom: inset 2px ${({ theme }) => theme.frame.shadow.white};
    border-right: inset 2px ${({ theme }) => theme.frame.shadow.white};

    ${props => props.maximize && css`
        min-height: calc(var(--vh, 1vh) * 100 - 59px);
    `}
`

export const Content = styled.div<{ maximize?: boolean }>`
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        width: 100%;
        font-size: 100%;
        margin: 2px;
    }

    ${props => props.maximize && css`
        min-width: 100%;
        min-height: calc(var(--vh, 1vh) * 100 - 59px);
    `}
`

export const CustomHeaderTitle = styled(HeaderTitle)`
    background: url(${icon}) left center no-repeat;
    padding: 0px 5px 0px 22px;
    background-size: 15px 15px;
    background-position-x: 2px;
`

export const Buttons = styled(HeaderTitle)`
    display: flex;
    padding: 0 1px;
`