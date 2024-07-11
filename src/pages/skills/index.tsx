import { Window } from "../../components/windows/window";
import { useState } from "react";
import { Container, Content, Divider, Navigator, Pages, NavigatorItem, Selector, SelectorIcon, ControlIcon, Folders, IconContainer } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { WindowAddress } from "../../components/windows/address";
import { SkillsContainer } from "../../components/windows/skills-container";
import { FolderShortcut } from "../../components/desktop/folder-shortcut";
import { useWindowSize } from "../../hooks/useWindowSize";

let disable = { tools: false, backend: false, frontend: false, database: false, baaS: false, software: false, oS: false }
let enabled = { tools: true, backend: true, frontend: true, database: true, baaS: true, software: true, oS: true }

function Skills() {
    const theme = useTheme()
    const size = useWindowSize()

    const { skills, focus, removeFocus } = usePages();

    const [myComputer, setMyComputer] = useState<boolean>(true);
    const [desktop, setDesktop] = useState<boolean>(true);
    const [folder, setFolder] = useState<boolean>(true);

    const [folders, setFolders] = useState<{
        tools: boolean, backend: boolean, frontend: boolean, database: boolean, baaS: boolean, software: boolean, oS: boolean
    }>(enabled);

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    function getIcon(active: boolean) {
        return active ? theme.icons.desktop.folderOpen : theme.icons.desktop.folderClosed;
    }

    const toggleFolder = (target: any) => {
        setFolders({ ...disable, ...target })
    };

    return (
        <div ref={ref}>
            <Window page={skills} description="Linguagens e Ferramentas" icon={theme.icons.desktop.skills}>
                <WindowMenu page={skills[0]} />
                <Divider />
                <WindowAddress path="C:\Desktop\Linguagens e Ferramentas\Backend" />
                <Divider />
                <Container onClick={() => { focus(skills) }}>
                    <Content $maxWidth={(size.width - 5) + "px"} $maxHeight={(size.height - 115) + "px"} $page={skills[0]} >
                        <Navigator>
                            <NavigatorItem $icon={theme.icons.desktop.workspace} $first={true}>Desktop</NavigatorItem>
                            <Selector $isSelected={true}>
                                <SelectorIcon onClick={() => setMyComputer(!myComputer)}><ControlIcon $isSelected={myComputer} /></SelectorIcon>
                                <div>
                                    <NavigatorItem $icon={theme.icons.desktop.computer}>My Computer</NavigatorItem>
                                    <Selector $isSelected={myComputer}>
                                        <SelectorIcon onClick={() => setDesktop(!desktop)}><ControlIcon $isSelected={desktop} /></SelectorIcon>
                                        <div>
                                            <NavigatorItem $icon={theme.icons.desktop.disk}>[C:]</NavigatorItem>
                                            <Selector $isSelected={desktop}>
                                                <SelectorIcon onClick={() => setFolder(!folder)}><ControlIcon $isSelected={folder} /></SelectorIcon>
                                                <div>
                                                    <NavigatorItem $icon={getIcon(folder)} onClick={() => setFolders(enabled)}>Linguagens e Ferramentas</NavigatorItem>
                                                    <Folders $isSelected={folder}>
                                                        <NavigatorItem $icon={getIcon(folders.tools)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ tools: true })
                                                        }}>Ferramentas</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.backend)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ backend: true })
                                                        }}>Backend</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.frontend)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ frontend: true })
                                                        }}>Frontend</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.database)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ database: true })
                                                        }}>Database</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.baaS)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ baaS: true })
                                                        }}>BaaS</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.software)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ software: true })
                                                        }}>Software</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.oS)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ oS: true })
                                                        }}>OS</NavigatorItem>
                                                    </Folders>
                                                </div>
                                            </Selector>
                                        </div>
                                    </Selector>
                                </div>
                            </Selector>
                        </Navigator>
                        <Pages>
                            {folders.tools && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.jenkins} description="Jenkins" />
                                        <FolderShortcut icon={theme.icons.folder.docker} description="Docker" />
                                        <FolderShortcut icon={theme.icons.folder.compose} description="Docker Compose" />
                                    </IconContainer>
                                } name="Ferramentas" />
                            </>}
                            {folders.backend && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.java} description="Java" />
                                        <FolderShortcut icon={theme.icons.folder.go} description="Go" />
                                        <FolderShortcut icon={theme.icons.folder.python} description="Python" />
                                        <FolderShortcut icon={theme.icons.folder.spring} description="Spring Framework" />
                                    </IconContainer>
                                } name="Backend" />
                            </>}
                            {folders.frontend && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.react} description="React" />
                                        <FolderShortcut icon={theme.icons.folder.angular} description="Angular" />
                                        <FolderShortcut icon={theme.icons.folder.html} description="HTML" />
                                        <FolderShortcut icon={theme.icons.folder.javaScript} description="JavaScript" />
                                        <FolderShortcut icon={theme.icons.folder.css} description="CSS" />
                                    </IconContainer>
                                } name="Frontend" />
                            </>}
                            {folders.database && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.postgreSql} description="PostgreSQL" />
                                        <FolderShortcut icon={theme.icons.folder.msSql} description="MSSQL" />
                                    </IconContainer>
                                } name="Database" />
                            </>}
                            {folders.baaS && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.firebase} description="Firebase" />
                                        <FolderShortcut icon={theme.icons.folder.heroku} description="Heroku" />
                                    </IconContainer>
                                } name="BaaS" />
                            </>}
                            {folders.software && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.intellij} description="IntelliJ" />
                                        <FolderShortcut icon={theme.icons.folder.vsCode} description="Visual Studio Code" />
                                        <FolderShortcut icon={theme.icons.folder.git} description="Git" />
                                        <FolderShortcut icon={theme.icons.folder.figma} description="Figma" />
                                    </IconContainer>
                                } name="Software" />
                            </>}
                            {folders.oS && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={theme.icons.folder.windows} description="Windows" />
                                        <FolderShortcut icon={theme.icons.folder.linux} description="Linux" />
                                    </IconContainer>
                                } name="OS" />
                            </>}
                        </Pages>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Skills }; 