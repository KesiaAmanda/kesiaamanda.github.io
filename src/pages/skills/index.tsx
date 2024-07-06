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


import myComputerIcon from '../../assets/icons/desktop/this_computer.png'
import diskIcon from '../../assets/icons/desktop/drive.png'
import folderOpenIcon from '../../assets/icons/desktop/folder_open.png'
import folderClosedIcon from '../../assets/icons/desktop/folder_closed.png'

import javaIcon from '../../assets/skills/java_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsql-fullview.png'
import springIcon from '../../assets/skills/springio-icon.png'
import goIcon from '../../assets/skills/go-icon.png'
import pythonIcon from '../../assets/skills/python-icon.png'

import reactIcon from '../../assets/skills/react_logo.png'
import angularIcon from '../../assets/skills/angular-icon.png'
import htmlIcon from '../../assets/skills/html_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqb-fullview.png'
import javaScriptIcon from '../../assets/skills/javascript_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqo-fullview.png'
import cssIcon from '../../assets/skills/css_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsrn-fullview.png'

import postgreSqlIcon from '../../assets/skills/postgresql-icon.png'
import msSqlIcon from '../../assets/skills/mssql-icon.png'

import firebaseIcon from '../../assets/skills/firebase-icon.png'
import herokuIcon from '../../assets/skills/heroku-icon.png'

import intellijIcon from '../../assets/skills/intellij_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqj-fullview.png'
import vsCodeIcon from '../../assets/skills/visual_studio_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsr9-fullview.png'
import gitIcon from '../../assets/skills/git-scm-icon.png'
import figmaIcon from '../../assets/skills/figma-icon.png'

import windowsIcon from '../../assets/skills/windows-icon.png'
import linuxIcon from '../../assets/skills/linux-icon.png'

import jenkinsIcon from '../../assets/skills/jenkins-icon.png'
import dockerIcon from '../../assets/skills/docker-icon.gif'
import composeIcon from '../../assets/skills/compose-icon.gif'

let disable = { tools: false, backend: false, frontend: false, database: false, baaS: false, software: false, oS: false }
let enabled = { tools: true, backend: true, frontend: true, database: true, baaS: true, software: true, oS: true }

function Skills() {
    const theme = useTheme()
    const size = useWindowSize();

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
        return active ? folderOpenIcon : folderClosedIcon;
    }

    const toggleFolder = (target: any) => {
        setFolders({ ...disable, ...target })
    };

    return (
        <div ref={ref}>
            <Window page={skills} description="Linguagens e Ferramentas" icon={theme.icon.skills}>
                <WindowMenu />
                <Divider />
                <WindowAddress path="C:\Desktop\Linguagens e Ferramentas\Backend" />
                <Divider />
                <Container onClick={() => { focus(skills) }}>
                    <Content $maxWidth={(size.width - 5) + "px"} $maxHeight={(size.height - 115) + "px"} $page={skills[0]} >
                        <Navigator>
                            <NavigatorItem $icon={myComputerIcon} $first={true}>My Computer</NavigatorItem>
                            <Selector $isSelected={true}>
                                <SelectorIcon onClick={() => setMyComputer(!myComputer)}><ControlIcon $isSelected={myComputer} /></SelectorIcon>
                                <div>
                                    <NavigatorItem $icon={diskIcon}>[C:]</NavigatorItem>
                                    <Selector $isSelected={myComputer}>
                                        <SelectorIcon onClick={() => setDesktop(!desktop)}><ControlIcon $isSelected={desktop} /></SelectorIcon>
                                        <div>
                                            <NavigatorItem $icon={myComputerIcon}>Desktop</NavigatorItem>
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
                                        <FolderShortcut icon={jenkinsIcon} description="Jenkins" />
                                        <FolderShortcut icon={dockerIcon} description="Docker" />
                                        <FolderShortcut icon={composeIcon} description="Docker Compose" />
                                    </IconContainer>
                                } name="Ferramentas" />
                            </>}
                            {folders.backend && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={javaIcon} description="Java" />
                                        <FolderShortcut icon={goIcon} description="Go" />
                                        <FolderShortcut icon={pythonIcon} description="Python" />
                                        <FolderShortcut icon={springIcon} description="Spring Framework" />
                                    </IconContainer>
                                } name="Backend" />
                            </>}
                            {folders.frontend && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={reactIcon} description="React" />
                                        <FolderShortcut icon={angularIcon} description="Angular" />
                                        <FolderShortcut icon={htmlIcon} description="HTML" />
                                        <FolderShortcut icon={javaScriptIcon} description="JavaScript" />
                                        <FolderShortcut icon={cssIcon} description="CSS" />
                                    </IconContainer>
                                } name="Frontend" />
                            </>}
                            {folders.database && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={postgreSqlIcon} description="PostgreSQL" />
                                        <FolderShortcut icon={msSqlIcon} description="MSSQL" />
                                    </IconContainer>
                                } name="Database" />
                            </>}
                            {folders.baaS && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={firebaseIcon} description="Firebase" />
                                        <FolderShortcut icon={herokuIcon} description="Heroku" />
                                    </IconContainer>
                                } name="BaaS" />
                            </>}
                            {folders.software && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={intellijIcon} description="IntelliJ" />
                                        <FolderShortcut icon={vsCodeIcon} description="Visual Studio Code" />
                                        <FolderShortcut icon={gitIcon} description="Git" />
                                        <FolderShortcut icon={figmaIcon} description="Figma" />
                                    </IconContainer>
                                } name="Software" />
                            </>}
                            {folders.oS && <>
                                <SkillsContainer children={
                                    <IconContainer>
                                        <FolderShortcut icon={windowsIcon} description="Windows" />
                                        <FolderShortcut icon={linuxIcon} description="Linux" />
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