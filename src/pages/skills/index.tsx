import { Window } from "../../components/windows/window";
import { useEffect, useRef, useState } from "react";
import { Container, Content, Divider, Navigator, Pages, NavigatorItem, Selector, SelectorIcon, ControlIcon, Folders, IconContainer, Footer, FooterDivision } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { WindowAddress } from "../../components/windows/address";
import { FolderShortcut } from "../../components/desktop/folder-shortcut";
import { useWindowSize } from "../../hooks/useWindowSize";

let disable = { tools: false, backend: false, frontend: false, database: false, software: false }

function Skills() {
    const theme = useTheme()
    const size = useWindowSize()
    const shortcutsRef = useRef<HTMLDivElement>(null)

    const { skills, focus, removeFocus } = usePages();

    const [myComputer, setMyComputer] = useState<boolean>(true);
    const [desktop, setDesktop] = useState<boolean>(true);
    const [folder, setFolder] = useState<boolean>(true);

    const [currentFolder, setCurrentFolder] = useState<string>('');

    const [objects, setObjects] = useState<number>(0);

    const [folders, setFolders] = useState<{
        tools: boolean, backend: boolean, frontend: boolean, database: boolean, software: boolean
    }>(disable);

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    function getIcon(active: boolean) {
        return active ? theme.icons.desktop.folderOpen : theme.icons.desktop.folderClosed;
    }

    const toggleFolder = (target: any, name: string) => {
        setFolders({ ...disable, ...target })
        setCurrentFolder(name)
    };

    useEffect(() => {
        const countChildren = () => {
            if (shortcutsRef.current) {
                setObjects(shortcutsRef.current.children.length)
            }
        };

        countChildren();
    }, [folders]);

    return (
        <div ref={ref}>
            <Window page={skills} description="Linguagens e Ferramentas" icon={theme.icons.desktop.skills}>
                <WindowMenu page={skills[0]} />
                <Divider />
                <WindowAddress path={"C:\\Desktop\\Linguagens e Ferramentas\\" + currentFolder.toString()} />
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
                                                    <NavigatorItem $icon={getIcon(folder)} onClick={() => {
                                                        setFolders(disable)
                                                        setCurrentFolder('')
                                                    }}>Linguagens e Ferramentas</NavigatorItem>
                                                    <Folders $isSelected={folder}>
                                                        <NavigatorItem $icon={getIcon(folders.tools)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ tools: true }, 'Ferramentas')
                                                        }}>Ferramentas</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.backend)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ backend: true }, 'Backend')
                                                        }}>Backend</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.frontend)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ frontend: true }, 'Frontend')
                                                        }}>Frontend</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.database)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ database: true }, 'Database')
                                                        }}>Database</NavigatorItem>
                                                        <NavigatorItem $icon={getIcon(folders.software)} $skillsFolder={true} onClick={() => {
                                                            toggleFolder({ software: true }, 'Software')
                                                        }}>Software</NavigatorItem>
                                                    </Folders>
                                                </div>
                                            </Selector>
                                        </div>
                                    </Selector>
                                </div>
                            </Selector>
                        </Navigator>
                        <Pages>
                            <IconContainer ref={shortcutsRef}>
                                {folders === disable ? <>
                                    <FolderShortcut icon={theme.icons.desktop.folderOpen} description="Ferramentas" onClick={() => {
                                        toggleFolder({ tools: true }, 'Ferramentas')
                                    }} />
                                    <FolderShortcut icon={theme.icons.desktop.folderOpen} description="Backend" onClick={() => {
                                        toggleFolder({ backend: true }, 'Backend')
                                    }} />
                                    <FolderShortcut icon={theme.icons.desktop.folderOpen} description="Frontend" onClick={() => {
                                        toggleFolder({ frontend: true }, 'Frontend')
                                    }} />
                                    <FolderShortcut icon={theme.icons.desktop.folderOpen} description="Database" onClick={() => {
                                        toggleFolder({ database: true }, 'Database')
                                    }} />
                                    <FolderShortcut icon={theme.icons.desktop.folderOpen} description="Software" onClick={() => {
                                        toggleFolder({ software: true }, 'Software')
                                    }} />
                                </> : <></>}
                                {folders.tools && <>
                                    <FolderShortcut icon={theme.icons.folder.jenkins} description="Jenkins" />
                                    <FolderShortcut icon={theme.icons.folder.docker} description="Docker" />
                                    <FolderShortcut icon={theme.icons.folder.compose} description="Docker Compose" />
                                    <FolderShortcut icon={theme.icons.folder.firebase} description="Firebase" />
                                    <FolderShortcut icon={theme.icons.folder.heroku} description="Heroku" />
                                </>}
                                {folders.backend && <>
                                    <FolderShortcut icon={theme.icons.folder.java} description="Java" />
                                    <FolderShortcut icon={theme.icons.folder.go} description="Go" />
                                    <FolderShortcut icon={theme.icons.folder.python} description="Python" />
                                    <FolderShortcut icon={theme.icons.folder.spring} description="Spring Framework" />
                                </>}
                                {folders.frontend && <>
                                    <FolderShortcut icon={theme.icons.folder.react} description="React" />
                                    <FolderShortcut icon={theme.icons.folder.angular} description="Angular" />
                                    <FolderShortcut icon={theme.icons.folder.html} description="HTML" />
                                    <FolderShortcut icon={theme.icons.folder.javaScript} description="JavaScript" />
                                    <FolderShortcut icon={theme.icons.folder.css} description="CSS" />
                                </>}
                                {folders.database && <>
                                    <FolderShortcut icon={theme.icons.folder.postgreSql} description="PostgreSQL" />
                                    <FolderShortcut icon={theme.icons.folder.msSql} description="MSSQL" />
                                </>}
                                {folders.software && <>
                                    <FolderShortcut icon={theme.icons.folder.intellij} description="IntelliJ" />
                                    <FolderShortcut icon={theme.icons.folder.vsCode} description="Visual Studio Code" />
                                    <FolderShortcut icon={theme.icons.folder.git} description="Git" />
                                    <FolderShortcut icon={theme.icons.folder.figma} description="Figma" />
                                </>}
                            </IconContainer>
                        </Pages>
                        <Footer>
                            <FooterDivision>{objects} object(s)</FooterDivision>
                            <FooterDivision>{folders !== disable ? objects * 16 + `KB (Disk free space: 157MB)` : ''}</FooterDivision>
                        </Footer>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Skills }; 