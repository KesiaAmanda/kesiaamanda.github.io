import styled from "styled-components"

export const Desktop = styled.div`
    position: relative;
    background: transparent;
    height: 100%;
    width: 100%;
`

export const Screen = styled.div`
    position: fixed;
    display: grid;
    grid-template-rows: auto 30px;

    // overflow: auto;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    transition: background 1s ease-in-out;

    &::before {
        content: "";
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;

        display: block;
        background: url(${({ theme }) => theme.background.image}) 25% 50%;
        background-size: cover;
        transition: background 1s ease-in-out;
        width: 100%;
        height: 100%;
    }
`

export const Taskbar = styled.div`
    z-index: 99;
    position: relative;
    max-height: 30px;
    width: 100%;
    background-color: ${({ theme }) => theme.window.background.color};
    display: flex;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-top: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.white};
`

export const TaskbarButtons = styled.div`
    display: flex;
    overflow: hidden;
`

export const Workspace = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    align-items: flex-start;

    & p {
        margin: 0;
        width: 90px;
        font-size: 10px;
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