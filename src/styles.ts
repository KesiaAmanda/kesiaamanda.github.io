import styled from 'styled-components';

export const Desktop = styled.div`
    position: relative;
    background: transparent;
    height: 100%;
    width: 100%;
    padding-top: 15px;
`

export const Screen = styled.div`
    position: fixed;
    display: grid;
    grid-template-rows: auto 26px;
`

export const Taskbar = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.window.background};
    display: flex;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-top: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.white};
`

export const Workspace = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;

    & p {
        display: flex;
        justify-content: center;
        width: 90px;
        font-size: 10px;
        padding-top: 5px;
        cursor: pointer;
        text-shadow:
            -1px -1px 1px ${({ theme }) => theme.desktop.title.icon.shadow},
            -1px 1px 1px ${({ theme }) => theme.desktop.title.icon.shadow},
            1px -1px 1px ${({ theme }) => theme.desktop.title.icon.shadow},
            1px 1px 1px ${({ theme }) => theme.desktop.title.icon.shadow};
        text-align: center;
        color: ${({ theme }) => theme.desktop.title.icon.color};
        overflow: hidden;
    }
`
